import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Rate limiting: max 3 resends per hour per user
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(userId: string): boolean {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  const timestamps = rateLimitMap.get(userId) || [];
  const recent = timestamps.filter((t) => t > oneHourAgo);
  rateLimitMap.set(userId, recent);
  return recent.length >= 3;
}

function recordResend(userId: string) {
  const timestamps = rateLimitMap.get(userId) || [];
  timestamps.push(Date.now());
  rateLimitMap.set(userId, timestamps);
}

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
  }

  if (user.emailVerified) {
    return NextResponse.json({ message: "Email deja verifie" });
  }

  if (isRateLimited(user.id)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Reessaye dans une heure." },
      { status: 429 }
    );
  }

  const verificationCode = crypto.randomInt(100000, 999999).toString();

  await prisma.user.update({
    where: { id: user.id },
    data: { verificationCode },
  });

  if (resend) {
    await resend.emails.send({
      from: "OpexIA Academy <support@opexia-formation.com>",
      to: user.email,
      subject: `${verificationCode} - Ton code de verification OpexIA`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #1A1A2E; margin-bottom: 8px;">Nouveau code de verification</h2>
          <p style="color: #6B7280; font-size: 14px; margin-bottom: 32px;">Voici ton nouveau code de verification :</p>
          <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
            <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #1A1A2E;">${verificationCode}</span>
          </div>
          <p style="color: #9CA3AF; font-size: 12px;">Ce code expire dans 24h. Si tu n'as pas demande ce code, ignore cet email.</p>
        </div>
      `,
    });
  }

  recordResend(user.id);

  return NextResponse.json({ message: "Code renvoye avec succes" });
}
