import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import {
  freeFollowupDayOne,
  freeFollowupDayTwo,
  freeFollowupDaySeven,
} from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Deterministically assign a user to A/B variant based on their email.
 * Uses a simple hash to ensure the same user always gets the same variant
 * across all follow-up emails (consistent experience).
 */
function getAbVariant(email: string): "a" | "b" {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) % 2 === 0 ? "a" : "b";
}

export async function GET(req: NextRequest) {
  // Verify CRON_SECRET is set and strong enough
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET is not configured or too short" }, { status: 500 });
  }

  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!resend) {
    return NextResponse.json(
      { error: "RESEND_API_KEY not configured" },
      { status: 500 },
    );
  }

  const now = new Date();
  let sent = 0;
  let errors = 0;
  let dayOneSent = 0;
  let dayTwoSent = 0;
  let daySevenSent = 0;

  try {
    /**
     * Find free-tier users enrolled within a time window around `hoursAgo`.
     * Only targets users who still have tier "free" (haven't upgraded)
     * and whose enrollment is active.
     */
    async function findFreeUsers(hoursAgo: number) {
      const windowStart = new Date(
        now.getTime() - (hoursAgo + 2) * 60 * 60 * 1000,
      );
      const windowEnd = new Date(
        now.getTime() - (hoursAgo - 2) * 60 * 60 * 1000,
      );

      const enrollments = await prisma.enrollment.findMany({
        where: {
          tier: "free",
          status: "active",
          createdAt: { gte: windowStart, lte: windowEnd },
          // Make sure user hasn't upgraded (no other non-free enrollment)
          user: {
            isBot: false,
            enrollments: {
              none: {
                tier: { not: "free" },
              },
            },
          },
        },
        select: {
          user: {
            select: { id: true, email: true, name: true },
          },
        },
      });

      // Deduplicate by user id
      const users = new Map<
        string,
        { id: string; email: string; name: string | null }
      >();
      for (const enrollment of enrollments) {
        users.set(enrollment.user.id, enrollment.user);
      }
      return Array.from(users.values());
    }

    // --- 24h after signup ---
    const dayOneUsers = await findFreeUsers(24);
    for (const user of dayOneUsers) {
      try {
        const alreadySent = await prisma.emailLog.findFirst({
          where: { userId: user.id, type: "free_followup", sequence: 1 },
        });
        if (alreadySent) continue;

        const variant = getAbVariant(user.email);
        const emailData = freeFollowupDayOne(user.name || "", variant);
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        dayOneSent++;
        try {
          await prisma.emailLog.create({
            data: {
              userId: user.id,
              type: "free_followup",
              sequence: 1,
              subject: emailData.subject,
              variant,
              status: "sent",
            },
          });
        } catch (logErr) {
          console.error(`Failed to log free follow-up day-1 email for ${user.email}:`, logErr instanceof Error ? logErr.message : logErr);
        }
      } catch (err) {
        console.error(
          `Failed to send free follow-up day-1 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    // --- 48h after signup ---
    const dayTwoUsers = await findFreeUsers(48);
    for (const user of dayTwoUsers) {
      try {
        const alreadySent = await prisma.emailLog.findFirst({
          where: { userId: user.id, type: "free_followup", sequence: 2 },
        });
        if (alreadySent) continue;

        const variant = getAbVariant(user.email);
        const emailData = freeFollowupDayTwo(user.name || "", variant);
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        dayTwoSent++;
        try {
          await prisma.emailLog.create({
            data: {
              userId: user.id,
              type: "free_followup",
              sequence: 2,
              subject: emailData.subject,
              variant,
              status: "sent",
            },
          });
        } catch (logErr) {
          console.error(`Failed to log free follow-up day-2 email for ${user.email}:`, logErr instanceof Error ? logErr.message : logErr);
        }
      } catch (err) {
        console.error(
          `Failed to send free follow-up day-2 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    // --- 7 days after signup ---
    const daySevenUsers = await findFreeUsers(168);
    for (const user of daySevenUsers) {
      try {
        // Check if day-7 email was already sent to prevent duplicates
        const alreadySent = await prisma.emailLog.findFirst({
          where: { userId: user.id, type: "free_followup", sequence: 3 },
        });
        if (alreadySent) {
          continue;
        }

        // Generate unique discount code for this user
        const uniqueCode = "OPEX" + user.id.slice(-6).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();

        const variant = getAbVariant(user.email);
        const emailData = freeFollowupDaySeven(user.name || "", variant, uniqueCode);

        // Save discount code BEFORE sending email to avoid race condition
        // If DB write fails, skip the email entirely
        await prisma.user.update({
          where: { id: user.id },
          data: {
            discountCode: uniqueCode,
            discountPercent: 20,
            discountExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
          },
        });

        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        daySevenSent++;
        try {
          await prisma.emailLog.create({
            data: {
              userId: user.id,
              type: "free_followup",
              sequence: 3,
              subject: emailData.subject,
              variant,
              status: "sent",
            },
          });
        } catch (logErr) {
          console.error(`Failed to log free follow-up day-7 email for ${user.email}:`, logErr instanceof Error ? logErr.message : logErr);
        }
      } catch (err) {
        console.error(
          `Failed to send free follow-up day-7 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      errors,
      dayOneCount: dayOneUsers.length,
      dayOneSent,
      dayTwoCount: dayTwoUsers.length,
      dayTwoSent,
      daySevenCount: daySevenUsers.length,
      daySevenSent,
    });
  } catch (err) {
    console.error(
      "Free follow-up email cron failed:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
