import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const PLAN_TO_TIER: Record<string, string> = {
  starter: "starter",
  academy: "academy",
  one_to_one: "one_to_one",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${message}`);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const plan = session.metadata?.plan;

    if (!userId || !plan) {
      console.error("Missing userId or plan in checkout session metadata");
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    const tier = PLAN_TO_TIER[plan];
    if (!tier) {
      console.error(`Unknown plan: ${plan}`);
      return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
    }

    try {
      // Avoid duplicate enrollments — check if one already exists for this user+tier
      const existing = await prisma.enrollment.findFirst({
        where: { userId, tier },
      });

      if (existing) {
        await prisma.enrollment.update({
          where: { id: existing.id },
          data: { status: "active" },
        });
      } else {
        await prisma.enrollment.create({
          data: {
            userId,
            tier,
            status: "active",
          },
        });
      }

      await prisma.user.update({
        where: { id: userId },
        data: { emailVerified: true },
      });

      // Send welcome email after successful enrollment
      if (resend) {
        try {
          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { email: true, name: true },
          });

          if (user?.email) {
            const firstName = user.name?.split(" ")[0] || "there";
            await resend.emails.send({
              from: "OpexIA Academy <support@opexia-formation.com>",
              to: user.email,
              subject: "Bienvenue dans OpexIA Academy ! 🎉",
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
                  <h2 style="color: #1A1A2E; margin-bottom: 8px;">Bienvenue ${firstName} ! 🎉</h2>
                  <p style="color: #6B7280; font-size: 14px; margin-bottom: 24px;">Ton paiement a bien été reçu et ton accès est maintenant activé.</p>
                  <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                    <span style="font-size: 18px; font-weight: 700; color: #1A1A2E;">✅ Ton accès est activé</span>
                  </div>
                  <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Voici comment commencer :</p>
                  <div style="margin-bottom: 24px;">
                    <a href="https://opexia-formation.com/dashboard" style="display: block; background: #FF1744; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; margin-bottom: 12px;">Accéder à ton tableau de bord</a>
                    <a href="https://opexia-formation.com/lessons" style="display: block; background: #1A1A2E; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">Commence par le Module 1</a>
                  </div>
                  <p style="color: #9CA3AF; font-size: 12px;">Si tu as la moindre question, réponds directement à cet email. On est là pour t'aider !</p>
                </div>
              `,
            });
          }
        } catch (emailError) {
          console.error("Failed to send welcome email:", emailError instanceof Error ? emailError.message : "Unknown error");
          // Don't fail the webhook if email sending fails
        }
      }

      // --- Referral commission logic ---
      const TIER_COMMISSION: Record<string, number> = {
        starter: 940,      // 20% of 4700 cents (47€)
        academy: 7455,     // 15% of 49700 cents (497€)
        one_to_one: 24970, // 10% of 249700 cents (2497€)
      };

      try {
        const pendingReferral = await prisma.referral.findFirst({
          where: {
            referredId: userId,
            status: "pending",
          },
        });

        if (pendingReferral && pendingReferral.referrerId !== userId) {
          const commission = TIER_COMMISSION[tier] ?? 0;

          if (commission > 0) {
            await prisma.referral.update({
              where: { id: pendingReferral.id },
              data: {
                commission,
                referredTier: tier,
                status: "confirmed",
              },
            });
          }
        }
      } catch (referralError) {
        console.error("Failed to process referral commission:", referralError instanceof Error ? referralError.message : "Unknown error");
        // Don't fail the webhook if referral processing fails
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error(`Failed to create enrollment: ${message}`);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
