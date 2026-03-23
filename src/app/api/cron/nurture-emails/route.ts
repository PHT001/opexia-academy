import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import {
  nurtureDayOne,
  nurtureDayThree,
  nurtureDaySeven,
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
  let dayThreeSent = 0;
  let daySevenSent = 0;

  try {
    // Helper: find verified users with NO enrollment created within a time window
    async function findNurtureUsers(hoursAgo: number) {
      const windowStart = new Date(
        now.getTime() - (hoursAgo + 2) * 60 * 60 * 1000,
      );
      const windowEnd = new Date(
        now.getTime() - (hoursAgo - 2) * 60 * 60 * 1000,
      );

      return prisma.user.findMany({
        where: {
          emailVerified: true,
          createdAt: { gte: windowStart, lte: windowEnd },
          enrollments: { none: {} },
        },
        select: { id: true, email: true, name: true },
      });
    }

    // --- Day 1: users registered ~24h ago ---
    const dayOneUsers = await findNurtureUsers(24);

    for (const user of dayOneUsers) {
      try {
        const emailData = nurtureDayOne(user.name ?? "there");
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
          `Failed to send nurture day-1 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    // --- Day 3: users registered ~72h ago ---
    const dayThreeUsers = await findNurtureUsers(72);

    for (const user of dayThreeUsers) {
      try {
        const emailData = nurtureDayThree(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
        dayThreeSent++;
      } catch (err) {
        console.error(
          `Failed to send nurture day-3 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    // --- Day 7: users registered ~168h ago ---
    const daySevenUsers = await findNurtureUsers(168);

    for (const user of daySevenUsers) {
      try {
        const emailData = nurtureDaySeven(user.name ?? "there");
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
          `Failed to send nurture day-7 email to ${user.email}:`,
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
      dayThreeCount: dayThreeUsers.length,
      dayThreeSent,
      daySevenCount: daySevenUsers.length,
      daySevenSent,
    });
  } catch (err) {
    console.error(
      "Nurture email cron failed:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
