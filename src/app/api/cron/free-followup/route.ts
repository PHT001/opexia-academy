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

export async function GET(req: NextRequest) {
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
        const emailData = freeFollowupDayOne(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        dayOneSent++;
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
        const emailData = freeFollowupDayTwo(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        dayTwoSent++;
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
        const emailData = freeFollowupDaySeven(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        daySevenSent++;
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
