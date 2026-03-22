import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const leadSchema = z.object({
  email: z.string().email("Email invalide"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = leadSchema.parse(body);

    console.log(`[Lead] New lead captured: ${email}`);

    // Send email notification to support
    if (resend) {
      await resend.emails.send({
        from: "OpexIA <support@opexia-formation.com>",
        to: "support@opexia-formation.com",
        subject: "Nouveau lead capturé",
        text: `Un nouveau lead s'est inscrit avec l'email : ${email}`,
      }).catch((err) => {
        console.error("[Lead] Failed to send notification email:", err);
      });
    }

    return NextResponse.json({ message: "Lead enregistre" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
