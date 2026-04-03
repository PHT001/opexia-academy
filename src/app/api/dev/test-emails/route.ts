import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  freeFollowupDayOne,
  freeFollowupDayTwo,
  freeFollowupDaySeven,
  dayOneEmail,
  dayThreeEmail,
  weeklyRecapEmail,
} from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }

  if (!resend) {
    return NextResponse.json({ error: "Resend non configuré" }, { status: 500 });
  }

  const testName = "Marius";
  const results: { name: string; status: string }[] = [];

  // All emails to send with a small delay between each
  const emails = [
    { name: "Free Follow-up J+1 (Variant A)", ...freeFollowupDayOne(testName, "a") },
    { name: "Free Follow-up J+2 (Variant A)", ...freeFollowupDayTwo(testName, "a") },
    { name: "Free Follow-up J+7 (Variant A)", ...freeFollowupDaySeven(testName, "a", "OPEX-TEST-20") },
    { name: "Drip Post-Achat J+1", ...dayOneEmail(testName) },
    { name: "Drip Post-Achat J+3", ...dayThreeEmail(testName) },
    {
      name: "Récap Hebdomadaire",
      ...weeklyRecapEmail(testName, {
        lessonsThisWeek: 4,
        totalLessons: 12,
        xpThisWeek: 320,
        totalXP: 1250,
        streak: 5,
        nextLesson: "Module 3 — Leçon 2 : Automatiser avec l'IA",
      }),
    },
  ];

  for (const e of emails) {
    try {
      await resend.emails.send({
        from: "OpexIA Academy <support@opexia-formation.com>",
        to: email,
        subject: `[TEST] ${e.subject}`,
        html: e.html,
      });
      results.push({ name: e.name, status: "sent" });
    } catch (err) {
      results.push({ name: e.name, status: `error: ${err instanceof Error ? err.message : "unknown"}` });
    }
    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 500));
  }

  return NextResponse.json({ sent: results.filter((r) => r.status === "sent").length, total: results.length, results });
}
