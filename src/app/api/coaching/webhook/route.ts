import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/google-calendar";
import { Resend } from "resend";
import Stripe from "stripe";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ADMIN_EMAIL = "support@opexia-formation.com";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_COACHING_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;
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

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const stripeSession = event.data.object as Stripe.Checkout.Session;
        const coachingSessionId = stripeSession.metadata?.coachingSessionId;

        if (coachingSessionId) {
          // Idempotency check — skip if already confirmed
          const existing = await prisma.coachingSession.findUnique({
            where: { id: coachingSessionId },
            include: { user: { select: { name: true, email: true } } },
          });

          if (existing?.status === "confirmed") {
            return NextResponse.json({ received: true, message: "Already processed" });
          }

          const coachingData = await prisma.coachingSession.update({
            where: { id: coachingSessionId },
            data: {
              status: "confirmed",
              stripePaymentId: stripeSession.payment_intent as string,
            },
            include: { user: { select: { name: true, email: true } } },
          });

          // Create a Google Calendar event for the confirmed session
          try {
            const slotDate = new Date(coachingData.date);
            const endDate = new Date(slotDate.getTime() + 60 * 60 * 1000); // +1 hour
            const studentName = coachingData.user?.name || "Etudiant";
            const studentEmail = coachingData.user?.email || undefined;

            const calendarResult = await createCalendarEvent(
              `Coaching OpexIA - ${studentName}`,
              slotDate.toISOString(),
              endDate.toISOString(),
              studentEmail
            );

            // Store the Meet link on the coaching session if available
            if (calendarResult?.meetLink) {
              await prisma.coachingSession.update({
                where: { id: coachingData.id },
                data: { meetLink: calendarResult.meetLink },
              }).catch(() => {});
            }
          } catch (calendarError) {
            // Log but don't fail the webhook — payment is already confirmed
            console.error("[Webhook] Failed to create calendar event:", calendarError);
          }

          // Send confirmation emails
          const slotDate = new Date(coachingData.date);
          const dateStr = slotDate.toLocaleDateString("fr-FR", {
            weekday: "long", day: "numeric", month: "long", year: "numeric",
          });
          const timeStr = slotDate.toLocaleTimeString("fr-FR", {
            hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris",
          });
          const userName = coachingData.user?.name || "Etudiant";
          const firstName = userName.split(" ")[0];
          const userEmail = coachingData.user?.email;
          const topicText = coachingData.topic || "Non precise";

          if (resend && userEmail) {
            // Email to student
            try {
              await resend.emails.send({
                from: "Marius d'OpexIA <support@opexia-formation.com>",
                to: userEmail,
                subject: `Ta session coaching est confirmee - ${dateStr}`,
                html: `<p>Salut <strong>${firstName}</strong>,</p>
<p>Ton paiement a ete confirme ! Ta session de coaching est reservee pour le <strong>${dateStr}</strong> a <strong>${timeStr}</strong> (Europe/Paris).</p>
<p><strong>Sujet :</strong> ${topicText}</p>
<p>Tu recevras une invitation Google Calendar avec le lien Google Meet.</p>
<p>A tres vite !<br>Marius d'OpexIA</p>`,
              });
            } catch (emailErr) {
              console.error("[Webhook] Email to student failed:", emailErr);
            }

            // Email to admin
            try {
              await resend.emails.send({
                from: "Marius d'OpexIA <support@opexia-formation.com>",
                to: ADMIN_EMAIL,
                subject: `Paiement coaching confirme - ${userName}`,
                html: `<p><strong>Paiement confirme</strong> pour une session coaching.</p>
<p><strong>Eleve :</strong> ${userName} (${userEmail})</p>
<p><strong>Date :</strong> ${dateStr} a ${timeStr}</p>
<p><strong>Sujet :</strong> ${topicText}</p>
<p><strong>Stripe Payment ID :</strong> ${stripeSession.payment_intent}</p>`,
              });
            } catch (emailErr) {
              console.error("[Webhook] Email to admin failed:", emailErr);
            }
          }
        }
        break;
      }

      case "checkout.session.expired": {
        const stripeSession = event.data.object as Stripe.Checkout.Session;
        const coachingSessionId = stripeSession.metadata?.coachingSessionId;

        if (coachingSessionId) {
          await prisma.coachingSession.update({
            where: { id: coachingSessionId },
            data: { status: "cancelled" },
          });
        }
        break;
      }
    }
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
