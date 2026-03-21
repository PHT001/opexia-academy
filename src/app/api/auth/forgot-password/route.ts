import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Always return 200 to not reveal if email exists
    if (!user) {
      return NextResponse.json({ message: "OK" });
    }

    // Generate secure token
    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Store hashed token on user
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: tokenHash,
        resetTokenExpiry: expiry,
      },
    });

    // Send reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;

    if (resend) {
      await resend.emails.send({
        from: "OpexIA Academy <support@opexia-formation.com>",
        to: email.toLowerCase(),
        subject: "Réinitialisation de ton mot de passe OpexIA",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <h2 style="color: #1A1A2E; margin-bottom: 8px;">Réinitialisation de mot de passe</h2>
            <p style="color: #6B7280; font-size: 14px; margin-bottom: 32px;">Clique sur le bouton ci-dessous pour réinitialiser ton mot de passe :</p>
            <div style="text-align: center; margin-bottom: 32px;">
              <a href="${resetUrl}" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-size: 14px; font-weight: 600;">Réinitialiser mon mot de passe</a>
            </div>
            <p style="color: #9CA3AF; font-size: 12px; margin-bottom: 8px;">Ce lien expire dans 1 heure. Si tu n'as pas demandé cette réinitialisation, ignore cet email.</p>
            <p style="color: #9CA3AF; font-size: 12px;">Si le bouton ne fonctionne pas, copie ce lien dans ton navigateur :</p>
            <p style="color: #9CA3AF; font-size: 11px; word-break: break-all;">${resetUrl}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "OK" });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
