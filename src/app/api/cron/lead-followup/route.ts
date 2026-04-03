import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import {
  leadFollowupDayOne,
  leadFollowupDayThree,
  leadFollowupDaySeven,
} from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Lead follow-up cron — nurtures guide downloads into signups/purchases.
 * Runs daily at 10:30 AM.
 *
 * Sequence:
 *   J+1  → "As-tu lu le guide ? Voici la suite..."
 *   J+3  → "Il a lancé son agence IA en 3 semaines" (social proof)
 *   J+7  → "Dernière chance de lancer ton agence IA" (urgency)
 */
export async function GET(req: NextRequest) {
  // Verify CRON_SECRET
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 500 });
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!resend) {
    return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  const now = new Date();
  let sent = 0;
  let errors = 0;
  const details: { email: string; sequence: number; status: string }[] = [];

  try {
    /**
     * Find leads created around `hoursAgo` (±2h window).
     * Only targets leads with status "active" (not converted/unsubscribed).
     * Excludes leads that already have a User account (they get the free-followup instead).
     */
    async function findLeads(hoursAgo: number) {
      const windowStart = new Date(now.getTime() - (hoursAgo + 2) * 60 * 60 * 1000);
      const windowEnd = new Date(now.getTime() - (hoursAgo - 2) * 60 * 60 * 1000);

      const leads = await prisma.lead.findMany({
        where: {
          status: "active",
          createdAt: { gte: windowStart, lte: windowEnd },
        },
        select: { id: true, email: true },
      });

      // Exclude leads who have already created a User account
      if (leads.length === 0) return [];

      const emails = leads.map((l) => l.email);
      const existingUsers = await prisma.user.findMany({
        where: { email: { in: emails } },
        select: { email: true },
      });
      const existingEmailSet = new Set(existingUsers.map((u) => u.email));

      return leads.filter((l) => !existingEmailSet.has(l.email));
    }

    // Use a simple in-memory set to track which emails we've already emailed in this run
    const alreadySent = new Set<string>();

    // --- J+1 (24h after guide download) ---
    const dayOneLeads = await findLeads(24);
    for (const lead of dayOneLeads) {
      if (alreadySent.has(lead.email)) continue;
      try {
        const emailData = leadFollowupDayOne();
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: lead.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        alreadySent.add(lead.email);
        details.push({ email: lead.email, sequence: 1, status: "sent" });
      } catch (err) {
        console.error(`[Lead followup] Failed J+1 for ${lead.email}:`, err instanceof Error ? err.message : err);
        errors++;
        details.push({ email: lead.email, sequence: 1, status: "error" });
      }
    }

    // --- J+3 (72h after guide download) ---
    const dayThreeLeads = await findLeads(72);
    for (const lead of dayThreeLeads) {
      if (alreadySent.has(lead.email)) continue;
      try {
        const emailData = leadFollowupDayThree();
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: lead.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        alreadySent.add(lead.email);
        details.push({ email: lead.email, sequence: 3, status: "sent" });
      } catch (err) {
        console.error(`[Lead followup] Failed J+3 for ${lead.email}:`, err instanceof Error ? err.message : err);
        errors++;
        details.push({ email: lead.email, sequence: 3, status: "error" });
      }
    }

    // --- J+7 (168h after guide download) ---
    const daySevenLeads = await findLeads(168);
    for (const lead of daySevenLeads) {
      if (alreadySent.has(lead.email)) continue;
      try {
        const emailData = leadFollowupDaySeven();
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: lead.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        alreadySent.add(lead.email);
        details.push({ email: lead.email, sequence: 7, status: "sent" });
      } catch (err) {
        console.error(`[Lead followup] Failed J+7 for ${lead.email}:`, err instanceof Error ? err.message : err);
        errors++;
        details.push({ email: lead.email, sequence: 7, status: "error" });
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      errors,
      dayOneCount: dayOneLeads.length,
      dayThreeCount: dayThreeLeads.length,
      daySevenCount: daySevenLeads.length,
      details,
    });
  } catch (err) {
    console.error("Lead follow-up cron failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
