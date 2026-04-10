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

    let userId = session.metadata?.userId;
    const plan = session.metadata?.plan;
    const isGuest = session.metadata?.guest === "true";

    // For installment subscriptions: set cancel_at on the subscription
    if (session.mode === "subscription" && session.subscription && session.metadata?.cancelAt) {
      try {
        const subscriptionId = typeof session.subscription === "string" ? session.subscription : session.subscription.id;
        await stripe.subscriptions.update(subscriptionId, {
          cancel_at: parseInt(session.metadata.cancelAt, 10),
        });
      } catch (cancelErr) {
        console.error("Failed to set subscription cancel_at:", cancelErr instanceof Error ? cancelErr.message : cancelErr);
      }
    }

    // Handle guest checkout: resolve userId from email
    if (!userId && isGuest) {
      const customerEmail =
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!customerEmail) {
        console.error("Guest checkout: no email found in session");
        return NextResponse.json({ error: "Missing customer email" }, { status: 400 });
      }

      try {
        // Upsert to avoid race condition if two webhooks fire for the same guest email
        const user = await prisma.user.upsert({
          where: { email: customerEmail.toLowerCase() },
          create: {
            email: customerEmail.toLowerCase(),
            emailVerified: true,
            role: "student",
          },
          update: {},
        });

        userId = user.id;
      } catch (guestErr) {
        console.error("Guest checkout: failed to resolve user:", guestErr instanceof Error ? guestErr.message : guestErr);
        return NextResponse.json({ error: "Failed to resolve guest user" }, { status: 500 });
      }
    }

    // For authenticated users, validate that customer email matches the userId
    if (userId && !isGuest) {
      try {
        const dbUser = await prisma.user.findUnique({
          where: { id: userId },
          select: { email: true },
        });
        const stripeEmail = session.customer_details?.email || session.customer_email;
        if (dbUser?.email && stripeEmail && dbUser.email.toLowerCase() !== stripeEmail.toLowerCase()) {
          console.warn(
            `[Webhook] Email mismatch for userId ${userId}: DB="${dbUser.email}" vs Stripe="${stripeEmail}"`
          );
        }
      } catch (emailCheckErr) {
        console.error("[Webhook] Failed to validate customer email:", emailCheckErr instanceof Error ? emailCheckErr.message : emailCheckErr);
      }
    }

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
          data: {
            status: "active",
            paidAmount: session.amount_total || null,
            stripeSessionId: session.id,
          },
        });
      } else {
        await prisma.enrollment.create({
          data: {
            userId,
            tier,
            status: "active",
            paidAmount: session.amount_total || null,
            stripeSessionId: session.id,
          },
        });
      }

      await prisma.user.update({
        where: { id: userId },
        data: { emailVerified: true },
      });

      // Clear discount code after successful payment to prevent reuse
      await prisma.user.update({
        where: { id: userId },
        data: { discountCode: null, discountPercent: null, discountExpiresAt: null },
      });

      // Send personalized welcome email after successful enrollment
      if (resend) {
        try {
          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { email: true, name: true },
          });

          if (user?.email) {
            const firstName = user.name?.split(" ")[0] || "there";

            // Personalize subject and body per plan
            const emailContent = (() => {
              if (tier === "starter") {
                return {
                  subject: "Bienvenue dans OpexIA Starter ! \uD83C\uDF89",
                  body: `
                    <p style="color: #6B7280; font-size: 14px; margin-bottom: 24px;">Ton paiement a bien \u00e9t\u00e9 re\u00e7u et ton acc\u00e8s Starter est maintenant activ\u00e9.</p>
                    <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                      <span style="font-size: 18px; font-weight: 700; color: #1A1A2E;">\u2705 Ton acc\u00e8s Starter est activ\u00e9</span>
                    </div>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Ton pack inclut :</p>
                    <ul style="color: #374151; font-size: 14px; margin-bottom: 16px; padding-left: 20px;">
                      <li>2 modules D\u00e9couverte (7 le\u00e7ons)</li>
                      <li>Quiz de validation</li>
                      <li>Acc\u00e8s Discord communautaire</li>
                      <li>Checklist de d\u00e9marrage</li>
                    </ul>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Voici comment commencer :</p>
                    <div style="margin-bottom: 24px;">
                      <a href="https://opexia-formation.com/dashboard" style="display: block; background: #FF1744; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; margin-bottom: 12px;">Acc\u00e9der \u00e0 ton tableau de bord</a>
                      <a href="https://opexia-formation.com/lessons" style="display: block; background: #1A1A2E; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">Commence par le Module 1</a>
                    </div>`,
                };
              } else if (tier === "one_to_one") {
                return {
                  subject: "Bienvenue dans OpexIA Premium ! \uD83C\uDF89",
                  body: `
                    <p style="color: #6B7280; font-size: 14px; margin-bottom: 24px;">Ton paiement a bien \u00e9t\u00e9 re\u00e7u et ton acc\u00e8s Premium est maintenant activ\u00e9.</p>
                    <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                      <span style="font-size: 18px; font-weight: 700; color: #1A1A2E;">\u2705 Ton acc\u00e8s Premium est activ\u00e9</span>
                    </div>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Ton pack Premium inclut :</p>
                    <ul style="color: #374151; font-size: 14px; margin-bottom: 16px; padding-left: 20px;">
                      <li>Tout le contenu Academy (86 le\u00e7ons)</li>
                      <li>8 visios individuelles (1h) avec ton coach</li>
                      <li>Support prioritaire illimit\u00e9</li>
                      <li>Acc\u00e8s direct WhatsApp avec Marius & Igor</li>
                      <li>Audit personnalis\u00e9 de ton agence</li>
                      <li>Suivi hebdomadaire pendant 3 mois</li>
                    </ul>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Voici comment commencer :</p>
                    <div style="margin-bottom: 24px;">
                      <a href="https://opexia-formation.com/dashboard" style="display: block; background: #FF1744; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; margin-bottom: 12px;">Acc\u00e9der \u00e0 ton tableau de bord</a>
                      <a href="https://opexia-formation.com/coaching" style="display: block; background: #1A1A2E; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">R\u00e9server ta premi\u00e8re visio</a>
                    </div>`,
                };
              } else {
                // Default: academy
                return {
                  subject: "Bienvenue dans OpexIA Academy ! \uD83C\uDF89",
                  body: `
                    <p style="color: #6B7280; font-size: 14px; margin-bottom: 24px;">Ton paiement a bien \u00e9t\u00e9 re\u00e7u et ton acc\u00e8s Academy est maintenant activ\u00e9.</p>
                    <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                      <span style="font-size: 18px; font-weight: 700; color: #1A1A2E;">\u2705 Ton acc\u00e8s Academy est activ\u00e9</span>
                    </div>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Ton pack Academy inclut :</p>
                    <ul style="color: #374151; font-size: 14px; margin-bottom: 16px; padding-left: 20px;">
                      <li>86 le\u00e7ons vid\u00e9o & texte</li>
                      <li>Assistant IA int\u00e9gr\u00e9</li>
                      <li>Pipeline CRM int\u00e9gr\u00e9</li>
                      <li>Templates IA premium</li>
                      <li>G\u00e9n\u00e9rateur de projets</li>
                      <li>Gamification (XP, streaks, badges)</li>
                    </ul>
                    <p style="color: #374151; font-size: 14px; margin-bottom: 16px;">Voici comment commencer :</p>
                    <div style="margin-bottom: 24px;">
                      <a href="https://opexia-formation.com/dashboard" style="display: block; background: #FF1744; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; margin-bottom: 12px;">Acc\u00e9der \u00e0 ton tableau de bord</a>
                      <a href="https://opexia-formation.com/lessons" style="display: block; background: #1A1A2E; color: #ffffff; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px;">Commence par le Module 1</a>
                    </div>`,
                };
              }
            })();

            await resend.emails.send({
              from: "Marius d'OpexIA <support@opexia-formation.com>",
              to: user.email,
              subject: emailContent.subject,
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
                  <h2 style="color: #1A1A2E; margin-bottom: 8px;">Bienvenue ${firstName} ! \uD83C\uDF89</h2>
                  ${emailContent.body}
                  <p style="color: #9CA3AF; font-size: 12px;">Si tu as la moindre question, r\u00e9ponds directement \u00e0 cet email. On est l\u00e0 pour t'aider !</p>
                </div>
              `,
            });

            // Log the welcome email
            await prisma.emailLog.create({
              data: { userId, type: "welcome", subject: emailContent.subject, status: "sent" },
            }).catch(() => {});
          }
        } catch (emailError) {
          console.error("Failed to send welcome email:", emailError instanceof Error ? emailError.message : "Unknown error");
          // Don't fail the webhook if email sending fails
        }
      }

      // --- Referral commission logic ---
      const TIER_COMMISSION: Record<string, number> = {
        starter: 940,      // 20% of 4700 cents (47EUR)
        academy: 7455,     // 15% of 49700 cents (497EUR)
        one_to_one: 24970, // 10% of 249700 cents (2497EUR)
      };

      try {
        // Idempotency: skip referral processing if already confirmed or paid
        const existingReferral = await prisma.referral.findFirst({
          where: { referredId: userId, status: { in: ["confirmed", "paid"] } },
        });

        if (!existingReferral) {
        // First check if a pending referral already exists (created at registration)
        let pendingReferral = await prisma.referral.findFirst({
          where: {
            referredId: userId,
            status: "pending",
          },
        });

        // If no referral exists but Stripe metadata has a ref code, create one now
        // This handles the guest checkout flow where user paid before registering
        if (!pendingReferral && session.metadata?.ref) {
          const referrer = await prisma.user.findUnique({
            where: { referralCode: session.metadata.ref },
          });
          if (referrer && referrer.id !== userId) {
            pendingReferral = await prisma.referral.create({
              data: {
                referrerId: referrer.id,
                referredId: userId,
                status: "pending",
              },
            });
            console.log(`Referral created from Stripe metadata: ${session.metadata.ref} -> ${userId}`);
          } else if (!referrer) {
            console.warn(`Referral code from Stripe metadata not found: ${session.metadata.ref}`);
          }
        }

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
            console.log(`Referral confirmed: ${pendingReferral.id}, tier=${tier}, commission=${commission}`);
          } else {
            console.warn(`Referral ${pendingReferral.id}: no commission for tier "${tier}"`);
          }
        }
        } // end if (!existingReferral)
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

  // Handle failed invoice payments — suspend enrollment after 3+ failed attempts
  if (event.type === "invoice.payment_failed") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const invoice = event.data.object as any;
    const subscriptionId: string | null = typeof invoice.subscription === "string"
      ? invoice.subscription
      : invoice.subscription?.id ?? null;

    if (subscriptionId && (invoice.attempt_count ?? 0) >= 3) {
      try {
        // Look up the Stripe subscription to get the customer, then find the user
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const customerId = typeof subscription.customer === "string"
          ? subscription.customer
          : subscription.customer.id;
        const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
        const customerEmail = customer.email;

        if (customerEmail) {
          const user = await prisma.user.findFirst({
            where: { email: customerEmail },
          });

          if (user) {
            // Suspend only the enrollment matching the subscription's tier
            // Note: subscription.metadata.plan may not always be set (e.g. legacy subscriptions)
            const subTier = PLAN_TO_TIER[subscription.metadata?.plan] || null;
            if (subTier) {
              await prisma.enrollment.updateMany({
                where: { userId: user.id, status: "active", tier: subTier },
                data: { status: "suspended" },
              });
              console.log(`Suspended ${subTier} enrollment for user ${user.id} after ${invoice.attempt_count} failed payment attempts`);
            } else {
              // Fallback: suspend all active enrollments if we cannot determine the tier
              await prisma.enrollment.updateMany({
                where: { userId: user.id, status: "active" },
                data: { status: "suspended" },
              });
              console.warn(`Suspended ALL enrollments for user ${user.id} (could not determine tier from subscription metadata)`);
            }
          }
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error(`Failed to handle invoice.payment_failed: ${message}`);
      }
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
