import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { z } from "zod";
import { Resend } from "resend";
import rateLimit from "@/lib/rate-limit";
import { freeWelcomeEmail } from "@/lib/email-templates";

const limiter = rateLimit({ interval: 15 * 60 * 1000, uniqueTokenPerInterval: 500 });

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const registerSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Email invalide"),
  password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Le mot de passe doit contenir au moins un caractère spécial"),
  referralCode: z.string().optional(),
});

function generateCode(): string {
  return crypto.randomInt(100000, 999999).toString();
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const { success } = limiter.check(5, ip);
    if (!success) {
      return NextResponse.json({ error: "Trop de requêtes. Réessayez dans quelques minutes." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = registerSchema.parse(body);
    const name = parsed.name;
    const email = parsed.email.toLowerCase();
    const password = parsed.password;
    const referralCode = parsed.referralCode;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    const verificationCode = generateCode();
    const hashedPassword = await bcrypt.hash(password, 12);

    let user;

    if (existingUser && !existingUser.hashedPassword) {
      // Guest user created by webhook (paid before registering) — set their password
      user = await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          name: name || existingUser.name,
          hashedPassword,
          verificationCode,
          verificationCodeExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
          emailVerified: false,
        },
      });

      // Only create free enrollment if they don't already have ANY enrollment
      const hasEnrollment = await prisma.enrollment.findFirst({
        where: { userId: user.id, status: "active" },
      });
      if (!hasEnrollment) {
        await prisma.enrollment.create({
          data: { userId: user.id, tier: "free", status: "active" },
        });
      }
    } else if (existingUser) {
      return NextResponse.json({ error: "Cet email est deja utilise" }, { status: 400 });
    } else {
      user = await prisma.user.create({
        data: {
          name,
          email,
          hashedPassword,
          role: "student",
          emailVerified: false,
          verificationCode,
          verificationCodeExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      });

      // Create free enrollment
      await prisma.enrollment.create({
        data: { userId: user.id, tier: "free", status: "active" },
      });
    }

    // Send verification email
    if (resend) {
      try {
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: email,
          subject: `${verificationCode} - Ton code de vérification OpexIA`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
              <h2 style="color: #1A1A2E; margin-bottom: 8px;">Bienvenue sur OpexIA Academy !</h2>
              <p style="color: #6B7280; font-size: 14px; margin-bottom: 32px;">Confirme ton adresse email avec ce code :</p>
              <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
                <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #1A1A2E;">${verificationCode}</span>
              </div>
              <p style="color: #9CA3AF; font-size: 12px;">Ce code expire dans 24h. Si tu n'as pas créé de compte, ignore cet email.</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send verification email:", emailError instanceof Error ? emailError.message : "Unknown error");
      }

      // Send free welcome email (only for new free users, not guest checkout upgrades)
      if (!existingUser) {
        try {
          const welcome = freeWelcomeEmail(name || email.split("@")[0]);
          await resend.emails.send({
            from: "Marius d'OpexIA <support@opexia-formation.com>",
            to: email,
            subject: welcome.subject,
            html: welcome.html,
          });
        } catch (welcomeErr) {
          console.error("Failed to send free welcome email:", welcomeErr instanceof Error ? welcomeErr.message : "Unknown");
        }
      }
    }

    // Notify admin of new registration
    if (resend) {
      try {
        // Determine the user's tier
        const enrollment = await prisma.enrollment.findFirst({
          where: { userId: user.id, status: "active" },
          orderBy: { createdAt: "desc" },
        });
        const tier = enrollment?.tier || "free";
        const tierLabels: Record<string, string> = {
          free: "Gratuit (0 EUR)",
          starter: "Starter (47 EUR)",
          academy: "Academy (397 EUR)",
          one_to_one: "One-to-One (2 497 EUR)",
        };
        const tierLabel = tierLabels[tier] || tier;

        await resend.emails.send({
          from: "OpexIA Notifications <support@opexia-formation.com>",
          to: "support@opexia-formation.com",
          subject: `Nouvel eleve inscrit - ${tierLabel}`,
          html: `
            <meta charset="utf-8" />
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 20px;">
              <h2 style="color: #1A1A2E; margin-bottom: 16px;">Nouvel &#233;l&#232;ve inscrit</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; width: 100px;">Nom</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #111; font-size: 14px; font-weight: 600;">${user.name || "Non renseigné"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Email</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #111; font-size: 14px; font-weight: 600;">${user.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Formule</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #E5E7EB; color: #FF1744; font-size: 14px; font-weight: 700;">${tierLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #6B7280; font-size: 13px;">Date</td>
                  <td style="padding: 10px 12px; color: #111; font-size: 14px;">${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</td>
                </tr>
              </table>
              <a href="https://www.opexia-formation.com/admin" style="display: inline-block; background: #1A1A2E; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 600;">Voir le dashboard admin</a>
            </div>
          `,
        });
      } catch (notifError) {
        console.error("Failed to send admin notification:", notifError instanceof Error ? notifError.message : "Unknown error");
      }
    }

    // Mark lead as converted if they exist in the Lead table
    await prisma.lead.updateMany({
      where: { email: email.toLowerCase(), status: "active" },
      data: { status: "converted", convertedAt: new Date() },
    }).catch(() => {});

    // Handle referral if a code was provided
    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode },
      });
      if (referrer && referrer.id !== user.id) {
        await prisma.referral.create({
          data: {
            referrerId: referrer.id,
            referredId: user.id,
            status: "pending",
          },
        });
      }
    }

    return NextResponse.json({ id: user.id, email: user.email, name: user.name }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
