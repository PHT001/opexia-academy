import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

const PLANS: Record<string, { name: string; price: number; description: string }> = {
  starter: {
    name: "OpexIA Starter",
    price: 4700, // in cents
    description: "Guide PDF complet, checklist de lancement, templates de prospection, accès Discord",
  },
  academy: {
    name: "OpexIA Academy",
    price: 49700, // in cents
    description: "Formation complète : 91 leçons, plateforme, CRM, assistant IA, templates premium",
  },
  one_to_one: {
    name: "OpexIA One-to-One",
    price: 249700, // 2497 EUR in cents
    description: "Accompagnement individuel premium avec coaching personnalisé",
  },
};

// Installment surcharges
const INSTALLMENT_SURCHARGE: Record<number, number> = {
  1: 0,     // no surcharge
  2: 0.10,  // +10%
  3: 0.15,  // +15%
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const plan = body.plan as string | undefined;
    const coupon = body.coupon as string | undefined;
    const installments = (body.installments as number) || 1;

    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    if (![1, 2, 3].includes(installments)) {
      return NextResponse.json({ error: "Nombre de mensualités invalide" }, { status: 400 });
    }

    // Starter is always 1x payment only
    if (plan === "starter" && installments > 1) {
      return NextResponse.json({ error: "Le Starter ne supporte pas le paiement en plusieurs fois" }, { status: 400 });
    }

    const p = PLANS[plan];
    let basePrice = p.price;

    // Check if user has an active discount
    if (coupon) {
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

    // Look up or create a Stripe customer
    let customerId: string | undefined;
    const userEmail = session.user.email;
    if (userEmail) {
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

    const metadata = {
      userId: session.user.id,
      plan: plan,
      coupon: coupon || "",
      installments: String(installments),
    };

    let checkoutSession;

    if (installments === 1) {
      // ═══ ONE-TIME PAYMENT ═══
      const paymentMethodTypes: ("card" | "klarna")[] =
        plan !== "starter" ? ["card", "klarna"] : ["card"];

      checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: paymentMethodTypes,
        ...(customerId ? { customer: customerId } : { customer_email: userEmail ?? undefined }),
        metadata,
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: p.name,
                description: p.description,
              },
              unit_amount: basePrice,
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/dashboard?checkout=success&plan=${plan}`,
        cancel_url: `${origin}/offres`,
        ...(!hasCustomDiscount ? { allow_promotion_codes: true } : {}),
      });
    } else {
      // ═══ INSTALLMENT PAYMENT (2x or 3x) via Subscription ═══
      const surcharge = INSTALLMENT_SURCHARGE[installments];
      const totalWithSurcharge = Math.round(basePrice * (1 + surcharge));
      const monthlyAmount = Math.round(totalWithSurcharge / installments);

      // Cancel date: N months from now
      const cancelAt = Math.floor(Date.now() / 1000) + installments * 30 * 24 * 60 * 60;

      const installmentLabel = installments === 2 ? "2 mensualités" : "3 mensualités";

      const metadataWithCancel = {
        ...metadata,
        cancelAt: String(cancelAt),
      };

      checkoutSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        ...(customerId ? { customer: customerId } : { customer_email: userEmail ?? undefined }),
        metadata: metadataWithCancel,
        subscription_data: {
          metadata: metadataWithCancel,
        },
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: `${p.name} — ${installmentLabel}`,
                description: `${p.description} (paiement en ${installments}x)`,
              },
              unit_amount: monthlyAmount,
              recurring: {
                interval: "month",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/dashboard?checkout=success&plan=${plan}`,
        cancel_url: `${origin}/offres`,
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
