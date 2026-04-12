import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import rateLimit from "@/lib/rate-limit";
import { TIER_PRIORITY } from "@/lib/constants";

const limiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 500 });

const PLANS: Record<string, { name: string; price: number; description: string }> = {
  starter: {
    name: "OpexIA Starter",
    price: 4700, // in cents
    description: "Guide PDF complet, checklist de lancement, templates de prospection, acces Discord",
  },
  academy: {
    name: "OpexIA Academy",
    price: 49700, // in cents
    description: "Formation complete : 86 lecons, plateforme, CRM, aide rapide, templates premium",
  },
  one_to_one: {
    name: "OpexIA One-to-One",
    price: 249700, // 2497 EUR in cents
    description: "Accompagnement individuel premium avec coaching personnalise",
  },
};

export async function POST(req: NextRequest) {
  // Rate limit: 5 checkout attempts per minute per IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const { success } = limiter.check(5, ip);
  if (!success) {
    return NextResponse.json({ error: "Trop de tentatives. Réessaie dans une minute." }, { status: 429 });
  }

  const session = await getServerSession(authOptions);

  const body = await req.json();
  const plan = body.plan as string | undefined;
  const coupon = body.coupon as string | undefined;
  const guest = body.guest === true;
  const installments = body.installments as number | undefined;
  let ref: string | undefined = (body.ref as string | undefined) || "";
  if (ref && (typeof ref !== "string" || ref.length > 32 || !/^[a-zA-Z0-9]+$/.test(ref))) ref = undefined;

  // Allow guest checkout (from landing page) or authenticated checkout (from /offres)
  const isAuthenticated = !!session?.user?.id;
  if (!isAuthenticated && !guest) {
    return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
  }

  try {
    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    // Block downgrades and re-purchases for authenticated users
    if (isAuthenticated) {
      const enrollments = await prisma.enrollment.findMany({
        where: { userId: session.user.id, status: "active" },
      });
      const best = enrollments.sort(
        (a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0)
      )[0];
      const currentTierLevel = TIER_PRIORITY[best?.tier ?? "free"] ?? 0;
      const requestedTierLevel = TIER_PRIORITY[plan] ?? 0;
      if (requestedTierLevel <= currentTierLevel) {
        return NextResponse.json(
          { error: "Tu as déjà ce plan ou un plan supérieur" },
          { status: 400 }
        );
      }
    }

    const p = PLANS[plan];
    let basePrice = p.price;

    // Check if user has an active discount (only for authenticated users)
    if (coupon && isAuthenticated) {
      const dbUser = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { discountCode: true, discountPercent: true, discountExpiresAt: true },
      });

      if (
        dbUser?.discountCode &&
        dbUser.discountCode === coupon &&
        dbUser.discountPercent &&
        dbUser.discountExpiresAt &&
        new Date(dbUser.discountExpiresAt).getTime() > Date.now()
      ) {
        const safePercent = Math.max(0, Math.min(20, dbUser.discountPercent));
        basePrice = Math.round(p.price * (1 - safePercent / 100));
      }
    }

    const origin = process.env.NEXTAUTH_URL || req.headers.get("origin") || "https://opexia-formation.com";

    // Look up or create a Stripe customer (only for authenticated users)
    let customerId: string | undefined;
    const userEmail = isAuthenticated ? session.user.email : undefined;
    if (isAuthenticated && userEmail) {
      try {
        const existingCustomers = await stripe.customers.list({
          email: userEmail,
          limit: 1,
        });
        if (existingCustomers.data.length > 0) {
          customerId = existingCustomers.data[0].id;
        } else {
          const newCustomer = await stripe.customers.create({
            email: userEmail,
            metadata: { userId: session.user.id },
          });
          customerId = newCustomer.id;
        }
      } catch (customerErr) {
        console.error("Stripe customer lookup error:", customerErr instanceof Error ? customerErr.message : customerErr);
        customerId = undefined;
      }
    }

    const hasCustomDiscount = basePrice !== p.price;

    // For guest checkout: no userId, mark as guest
    const metadata: Record<string, string> = {
      plan: plan,
      coupon: coupon || "",
    };
    if (installments === 2) {
      metadata.installments = "2";
    }
    if (ref) {
      metadata.ref = ref;
    }
    if (isAuthenticated) {
      metadata.userId = session.user.id;
    } else {
      metadata.guest = "true";
    }

    // Success URL: guests go to /register, authenticated users go to /dashboard
    const refParam = ref ? `&ref=${encodeURIComponent(ref)}` : "";
    const successUrl = guest
      ? `${origin}/register?checkout_success=true&plan=${plan}${refParam}`
      : `${origin}/dashboard?checkout=success&plan=${plan}`;
    const cancelUrl = guest ? `${origin}/#pricing` : `${origin}/offres`;

    // 2 installments for Academy: Stripe subscription (2 monthly card payments)
    if (installments === 2 && plan === "academy") {
      // Subscription requires a customer — guest must register first
      if (!customerId && !userEmail) {
        return NextResponse.json({ error: "Cr\u00e9e un compte d'abord pour payer en 2 fois" }, { status: 400 });
      }

      const installmentPrice = 25350; // 253.50 EUR per month
      const subSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        ...(customerId ? { customer: customerId } : { customer_email: userEmail }),
        metadata,
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: { name: `${p.name} \u2014 Paiement 2x`, description: p.description },
              unit_amount: installmentPrice,
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        subscription_data: {
          metadata,
        },
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      if (!subSession.url) {
        return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
      }
      return NextResponse.json({ url: subSession.url });
    }

    // Standard one-time payment (card only, no Klarna)
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      ...(customerId
        ? { customer: customerId }
        : userEmail
          ? { customer_email: userEmail }
          : {}),
      metadata,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: p.name, description: p.description },
            unit_amount: basePrice,
          },
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      ...(!hasCustomDiscount ? { allow_promotion_codes: true } : {}),
    });

    if (!checkoutSession.url) {
      return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("POST /api/checkout error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
