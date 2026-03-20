import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const coachingSessionId = session.metadata?.coachingSessionId;

      if (coachingSessionId) {
        await prisma.coachingSession.update({
          where: { id: coachingSessionId },
          data: {
            status: "confirmed",
            stripePaymentId: session.payment_intent as string,
          },
        });
      }
      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      const coachingSessionId = session.metadata?.coachingSessionId;

      if (coachingSessionId) {
        await prisma.coachingSession.update({
          where: { id: coachingSessionId },
          data: { status: "cancelled" },
        });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
