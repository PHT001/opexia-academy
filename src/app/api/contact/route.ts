import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caracteres"),
  email: z.string().email("Email invalide"),
  subject: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caracteres"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    if (resend) {
      await resend.emails.send({
        from: "OpexIA Academy <support@opexia-formation.com>",
        to: "support@opexia-formation.com",
        replyTo: email,
        subject: `[Contact] ${subject || "Question generale"} - ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <h2 style="color: #1A1A2E; margin-bottom: 8px;">Nouveau message de contact</h2>
            <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <p style="color: #6B7280; font-size: 14px; margin: 0 0 8px;"><strong>Nom :</strong> ${name}</p>
              <p style="color: #6B7280; font-size: 14px; margin: 0 0 8px;"><strong>Email :</strong> ${email}</p>
              <p style="color: #6B7280; font-size: 14px; margin: 0 0 8px;"><strong>Sujet :</strong> ${subject || "Question generale"}</p>
              <p style="color: #6B7280; font-size: 14px; margin: 0 0 8px;"><strong>Message :</strong></p>
              <p style="color: #1A1A2E; font-size: 14px; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #9CA3AF; font-size: 12px;">Repondre directement a cet email pour contacter ${name}.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "Message envoye avec succes" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
