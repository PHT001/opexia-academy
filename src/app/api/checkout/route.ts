import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

const PLANS: Record<string, { name: string; price: number; description: string }> = {
  starter: {
    name: "OpexIA Starter",
    price: 4700, // in cents
    description: "Guide PDF complet, checklist de lancement, templates de prospection, accès Discord",
  },
  academy: {
    name: "OpexIA Academy",
    price: 39700, // in cents
    description: "Formation complète : 130+ leçons, plateforme, CRM, assistant IA, templates premium",
  },
  one_to_one: {
    name: "OpexIA One-to-One",
    price: 399700, // 3997 EUR in cents
    description: "Accompagnement individuel premium avec coaching personnalisé",
  },
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const body = await req.json();
  const plan = body.plan as string | undefined;

  if (!plan || !PLANS[plan]) {
    return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
  }

  const p = PLANS[plan];
  const origin = req.headers.get("origin") || req.nextUrl.origin;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: session.user.email ?? undefined,
    metadata: {
      userId: session.user.id,
      plan: plan,
    },
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: p.name,
            description: p.description,
          },
          unit_amount: p.price,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/dashboard?checkout=success&plan=${plan}`,
    cancel_url: `${origin}/#pricing`,
    allow_promotion_codes: true,
  });

  if (!checkoutSession.url) {
    return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
  }

  return NextResponse.json({ url: checkoutSession.url });
}
