import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  email: z.string().email("Email invalide"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = leadSchema.parse(body);

    // Log the lead for now — can be replaced with DB storage or Resend audience
    console.log(`[Lead] New lead captured: ${email}`);

    return NextResponse.json({ message: "Lead enregistre" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
