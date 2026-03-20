import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { COACHING_PRICE } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { slot } = await req.json();
  if (!slot) {
    return NextResponse.json({ error: "Creneau manquant" }, { status: 400 });
  }

  const slotDate = new Date(slot);
  if (slotDate <= new Date()) {
    return NextResponse.json({ error: "Creneau passe" }, { status: 400 });
  }

  // Check slot is not already booked
  const existing = await prisma.coachingSession.findFirst({
    where: {
      slot,
      status: { in: ["pending", "confirmed"] },
    },
  });

  if (existing) {
    return NextResponse.json({ error: "Creneau deja reserve" }, { status: 409 });
  }

  // Create pending coaching session
  const coachingSession = await prisma.coachingSession.create({
    data: {
      userId: session.user.id,
      date: slotDate,
      slot,
      status: "pending",
      amount: COACHING_PRICE,
    },
  });

  // Create Stripe Checkout session
  const origin = req.headers.get("origin") || "http://localhost:3000";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: session.user.email,
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Session de Coaching — 1h",
            description: `Coaching personnalise le ${slotDate.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })} a ${slotDate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`,
          },
          unit_amount: COACHING_PRICE,
        },
        quantity: 1,
      },
    ],
    metadata: {
      coachingSessionId: coachingSession.id,
    },
    success_url: `${origin}/coaching?success=true`,
    cancel_url: `${origin}/coaching?cancelled=true`,
  });

  // Update coaching session with Stripe session ID
  await prisma.coachingSession.update({
    where: { id: coachingSession.id },
    data: { stripeSessionId: checkoutSession.id },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
