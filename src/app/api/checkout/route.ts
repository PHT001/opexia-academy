import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const PLANS: Record<string, { name: string; price: number; description: string }> = {
  starter: {
    name: "OpexIA Starter",
    price: 4700, // in cents
    description: "Guide PDF complet, checklist de lancement, templates de prospection, acces Discord",
  },
  academy: {
    name: "OpexIA Academy",
    price: 49700, // in cents
    description: "Formation complete : 91 lecons, plateforme, CRM, assistant IA, templates premium",
  },
  one_to_one: {
    name: "OpexIA One-to-One",
    price: 249700, // 2497 EUR in cents
    description: "Accompagnement individuel premium avec coaching personnalise",
  },
  one_to_one_test: {
    name: "OpexIA One-to-One (Test)",
    price: 80000, // 800 EUR in cents — test price
    description: "Accompagnement individuel premium (mode test)",
  },
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const body = await req.json();
  const plan = body.plan as string | undefined;
  const coupon = body.coupon as string | undefined;
  const guest = body.guest === true;

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
      const TIER_PRIORITY: Record<string, number> = { free: 0, starter: 1, academy: 2, one_to_one: 3, one_to_one_test: 3 };
      const enrollments = await prisma.enrollment.findMany({
        where: { userId: session.user.id, status: "active" },
      });
      const best = enrollments.sort(
        (a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0)
      )[0];
      const currentTierLevel = TIER_PRIORITY[best?.tier ?? "free"] ?? 0;
      const requestedTierLevel = TIER_PRIORITY[plan] ?? 0;
      // Skip downgrade check for test plans
      if (requestedTierLevel <= currentTierLevel && !plan.endsWith("_test")) {
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

    const origin = req.headers.get("origin") || process.env.NEXTAUTH_URL || "http://localhost:3000";

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
    if (isAuthenticated) {
      metadata.userId = session.user.id;
    } else {
      metadata.guest = "true";
    }

    // Success URL: guests go to /register, authenticated users go to /dashboard
    const successUrl = guest
      ? `${origin}/register?checkout_success=true&plan=${plan}`
      : `${origin}/dashboard?checkout=success&plan=${plan}`;
    const cancelUrl = guest ? `${origin}/#pricing` : `${origin}/offres`;

    // Klarna for Academy/OneToOne — Stripe handles installments natively
    const paymentMethodTypes: ("card" | "klarna")[] =
      plan !== "starter" ? ["card", "klarna"] : ["card"];

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: paymentMethodTypes,
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
