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

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const plan = body.plan as string | undefined;
    const coupon = body.coupon as string | undefined;

    if (!plan || !PLANS[plan]) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    const p = PLANS[plan];
    let finalPrice = p.price;

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
        finalPrice = Math.round(p.price * (1 - dbUser.discountPercent / 100));
      }
    }

    const origin = req.headers.get("origin") || process.env.NEXTAUTH_URL || "http://localhost:3000";

    // Enable Klarna for installment payments (3x/4x) on plans > 47€
    const paymentMethodTypes: ("card" | "klarna")[] =
      plan !== "starter" ? ["card", "klarna"] : ["card"];

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: paymentMethodTypes,
      customer_email: session.user.email ?? undefined,
      metadata: {
        userId: session.user.id,
        plan: plan,
        coupon: coupon || "",
      },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: p.name,
              description: p.description,
            },
            unit_amount: finalPrice,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/dashboard?checkout=success&plan=${plan}`,
      cancel_url: `${origin}/offres`,
      allow_promotion_codes: true,
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
