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
      // Already downloaded — don't send again but return success
      return NextResponse.json({ message: "Guide déjà envoyé à cette adresse" });
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

      // Send notification to admin
      await resend.emails.send({
        from: "OpexIA <support@opexia-formation.com>",
        to: "opexiapro@gmail.com",
        subject: `Nouveau lead — ${email}`,
        text: `Un nouveau lead a téléchargé le guide des 5 niches IA.\n\nEmail : ${email}\nDate : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}`,
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
