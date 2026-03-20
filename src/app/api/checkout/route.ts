import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PLANS: Record<string, { name: string; price: number; description: string }> = {
  starter: {
    name: "OpexIA Starter",
    price: 4700, // in cents
    description: "Guide PDF complet, checklist de lancement, templates de prospection, acc\u00e8s Discord",
  },
  academy: {
    name: "OpexIA Academy",
    price: 39700, // in cents
    description: "Formation compl\u00e8te : 100+ le\u00e7ons, plateforme, CRM, assistant IA, templates premium",
  },
};

export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get("plan");

  if (!plan || !PLANS[plan]) {
    return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
  }

  const p = PLANS[plan];
  const origin = req.headers.get("origin") || req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
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
    success_url: `${origin}/login?checkout=success&plan=${plan}`,
    cancel_url: `${origin}/#pricing`,
    allow_promotion_codes: true,
  });

  if (!session.url) {
    return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
  }

  return NextResponse.redirect(session.url);
}
