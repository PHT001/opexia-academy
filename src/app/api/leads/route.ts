import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { guideEmail } from "@/lib/email-templates";
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({ interval: 60 * 60 * 1000, uniqueTokenPerInterval: 500 });

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const leadSchema = z.object({
  email: z.string().email("Email invalide"),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const { success } = limiter.check(3, ip);
    if (!success) {
      return NextResponse.json({ error: "Trop de requêtes. Réessayez plus tard." }, { status: 429 });
    }

    const body = await request.json();
    const { email } = leadSchema.parse(body);

    // Check if lead already exists (deduplicate)
    const existingLead = await prisma.lead.findUnique({
      where: { email },
    });

    if (existingLead) {
      // Already exists — resend the guide email anyway
      if (resend) {
        const guide = guideEmail();
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: email,
          subject: guide.subject,
          html: guide.html,
        }).catch((err) => {
          console.error("[Lead] Failed to resend guide email:", err);
        });
      }
      return NextResponse.json({ message: "Guide renvoyé !" });
    }

    // Save lead in database
    await prisma.lead.create({
      data: {
        email,
        source: "guide_niches",
      },
    });

    console.log(`[Lead] New lead captured: ${email}`);

    // Send guide email to the lead
    if (resend) {
      const guide = guideEmail();

      await resend.emails.send({
        from: "Marius d'OpexIA <support@opexia-formation.com>",
        to: email,
        subject: guide.subject,
        html: guide.html,
      }).catch((err) => {
        console.error("[Lead] Failed to send guide email:", err);
      });

      // Send notification to admin (styled HTML)
      const leadDate = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
      await resend.emails.send({
        from: "OpexIA Notifications <support@opexia-formation.com>",
        to: "support@opexia-formation.com",
        subject: `Nouveau lead - Guide IA`,
        html: `
          <meta charset="utf-8" />
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 20px;">
            <div style="background: #7C3AED; color: #fff; padding: 14px 20px; border-radius: 12px 12px 0 0; font-size: 15px; font-weight: 700;">Nouveau lead</div>
            <div style="border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px; padding: 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px; width: 100px;">Email</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #111; font-size: 14px; font-weight: 600;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Source</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #7C3AED; font-size: 14px; font-weight: 700;">Guide 5 niches IA</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">Statut</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #E5E7EB; color: #111; font-size: 14px;">Lead (non inscrit)</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #6B7280; font-size: 13px;">Date</td>
                  <td style="padding: 12px 16px; color: #111; font-size: 14px;">${leadDate}</td>
                </tr>
              </table>
            </div>
            <div style="margin-top: 20px; text-align: center;">
              <a href="https://www.opexia-formation.com/admin/students" style="display: inline-block; background: #1A1A2E; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 600;">Voir les leads</a>
            </div>
            <p style="color: #9CA3AF; font-size: 11px; text-align: center; margin-top: 16px;">OpexIA Academy - Notification automatique</p>
          </div>
        `,
      }).catch((err) => {
        console.error("[Lead] Failed to send admin notification:", err);
      });
    }

    return NextResponse.json({ message: "Guide envoyé !" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("[Lead] Error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
