import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { leadFollowupDaySeven } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Lead follow-up cron — sends a single follow-up 7 days after guide download.
 * Runs daily at 10:30 AM.
 *
 * Sequence:
 *   Immediate → Guide PDF delivery (handled in /api/leads)
 *   J+7      → "Re: le guide IA" (last push to convert)
 */
export async function GET(req: NextRequest) {
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

  try {
    // Find leads created ~7 days ago (±1h window to reduce duplicate risk)
    const windowStart = new Date(now.getTime() - (168 + 1) * 60 * 60 * 1000);
    const windowEnd = new Date(now.getTime() - (168 - 1) * 60 * 60 * 1000);

    const leads = await prisma.lead.findMany({
      where: {
        status: "active",
        createdAt: { gte: windowStart, lte: windowEnd },
      },
      select: { id: true, email: true },
    });

    if (leads.length === 0) {
      return NextResponse.json({ success: true, sent: 0, total: 0 });
    }

    // Exclude leads who already have a User account (they get free-followup instead)
    const emails = leads.map((l) => l.email);
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { email: true },
    });
    const existingEmailSet = new Set(existingUsers.map((u) => u.email));
    const eligibleLeads = leads.filter((l) => !existingEmailSet.has(l.email));

    for (const lead of eligibleLeads) {
      try {
        const emailData = leadFollowupDaySeven();
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: lead.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        // Mark lead as contacted to prevent duplicate sends on retry
        try {
          await prisma.lead.update({
            where: { id: lead.id },
            data: { status: "contacted" },
          });
        } catch (updateErr) {
          console.error(`[Lead followup] Failed to update status for ${lead.email}:`, updateErr instanceof Error ? updateErr.message : updateErr);
        }
      } catch (err) {
        console.error(`[Lead followup] Failed J+7 for ${lead.email}:`, err instanceof Error ? err.message : err);
        errors++;
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      errors,
      eligible: eligibleLeads.length,
      excluded: leads.length - eligibleLeads.length,
    });
  } catch (err) {
    console.error("Lead follow-up cron failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
