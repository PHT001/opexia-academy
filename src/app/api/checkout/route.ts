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
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const body = await req.json();
  const plan = body.plan as string | undefined;
  const coupon = body.coupon as string | undefined;
  const installments = (body.installments as number) || 1;
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

    if (![1, 2].includes(installments)) {
      return NextResponse.json({ error: "1x ou 2x uniquement" }, { status: 400 });
    }

    if (plan === "starter" && installments > 1) {
      return NextResponse.json({ error: "Le Starter est en paiement unique" }, { status: 400 });
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
        basePrice = Math.round(p.price * (1 - dbUser.discountPercent / 100));
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
      installments: String(installments),
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

    let checkoutSession;

    if (installments === 1) {
      // === PAIEMENT UNIQUE ===
      checkoutSession = await stripe.checkout.sessions.create({
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
    } else {
      // === PAIEMENT EN 2x (+5%) ===
      const totalWithSurcharge = Math.round(basePrice * 1.05);
      const monthlyAmount = Math.round(totalWithSurcharge / 2);
      const cancelAt = Math.floor(Date.now() / 1000) + 2 * 30 * 24 * 60 * 60;

      const metadataWithCancel = { ...metadata, cancelAt: String(cancelAt) };

      checkoutSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        ...(customerId
          ? { customer: customerId }
          : userEmail
            ? { customer_email: userEmail }
            : {}),
        metadata: metadataWithCancel,
        subscription_data: { metadata: metadataWithCancel },
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: `${p.name} \u2014 2 mensualit\u00e9s`,
                description: `${p.description} (paiement en 2x)`,
              },
              unit_amount: monthlyAmount,
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
    }

    if (!checkoutSession.url) {
      return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("POST /api/checkout error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
