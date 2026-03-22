import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { dayOneEmail, dayThreeEmail } from "@/lib/email-templates";

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

  try {
    // --- Day 1 emails: users who enrolled ~24h ago ---
    const dayOneStart = new Date(now.getTime() - 25 * 60 * 60 * 1000);
    const dayOneEnd = new Date(now.getTime() - 23 * 60 * 60 * 1000);

    const dayOneEnrollments = await prisma.enrollment.findMany({
      where: {
        status: "active",
        createdAt: { gte: dayOneStart, lte: dayOneEnd },
      },
      select: {
        user: {
          select: { id: true, email: true, name: true },
        },
      },
    });

    // Deduplicate by user id
    const dayOneUsers = new Map<
      string,
      { id: string; email: string; name: string | null }
    >();
    for (const enrollment of dayOneEnrollments) {
      dayOneUsers.set(enrollment.user.id, enrollment.user);
    }

    for (const user of dayOneUsers.values()) {
      try {
        const emailData = dayOneEmail(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
      } catch (err) {
        console.error(
          `Failed to send day-1 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    // --- Day 3 emails: users who enrolled ~72h ago ---
    const dayThreeStart = new Date(now.getTime() - 73 * 60 * 60 * 1000);
    const dayThreeEnd = new Date(now.getTime() - 71 * 60 * 60 * 1000);

    const dayThreeEnrollments = await prisma.enrollment.findMany({
      where: {
        status: "active",
        createdAt: { gte: dayThreeStart, lte: dayThreeEnd },
      },
      select: {
        user: {
          select: { id: true, email: true, name: true },
        },
      },
    });

    const dayThreeUsers = new Map<
      string,
      { id: string; email: string; name: string | null }
    >();
    for (const enrollment of dayThreeEnrollments) {
      dayThreeUsers.set(enrollment.user.id, enrollment.user);
    }

    for (const user of dayThreeUsers.values()) {
      try {
        const emailData = dayThreeEmail(user.name ?? "there");
        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });
        sent++;
      } catch (err) {
        console.error(
          `Failed to send day-3 email to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      errors,
      dayOneCount: dayOneUsers.size,
      dayThreeCount: dayThreeUsers.size,
    });
  } catch (err) {
    console.error(
      "Drip email cron failed:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
