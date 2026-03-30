import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/google-calendar";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
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
        const coachingData = await prisma.coachingSession.update({
          where: { id: coachingSessionId },
          data: {
            status: "confirmed",
            stripePaymentId: session.payment_intent as string,
          },
          include: { user: { select: { name: true, email: true } } },
        });

        // Create a Google Calendar event for the confirmed session
        try {
          const slotDate = new Date(coachingData.date);
          const endDate = new Date(slotDate.getTime() + 60 * 60 * 1000); // +1 hour
          const studentName = coachingData.user?.name || "Etudiant";
          const studentEmail = coachingData.user?.email || undefined;

          await createCalendarEvent(
            `Coaching OpexIA - ${studentName}`,
            slotDate.toISOString(),
            endDate.toISOString(),
            studentEmail
          );
        } catch (calendarError) {
          // Log but don't fail the webhook — payment is already confirmed
          console.error("[Webhook] Failed to create calendar event:", calendarError);
        }
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
