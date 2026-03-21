import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const registerSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caracteres"),
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caracteres"),
  referralCode: z.string().optional(),
});

function generateCode(): string {
  return crypto.randomInt(100000, 999999).toString();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.parse(body);
    const name = parsed.name;
    const email = parsed.email.toLowerCase();
    const password = parsed.password;
    const referralCode = parsed.referralCode;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Cet email est deja utilise" }, { status: 400 });
    }

    const verificationCode = generateCode();
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "student",
        emailVerified: false,
        verificationCode,
      },
    });

    // Send verification email
    if (resend) {
      try {
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
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
        console.error("Failed to send verification email:", emailError);
      }
    }

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
