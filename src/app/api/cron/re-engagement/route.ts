import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { reEngagementEmail } from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(req: NextRequest) {
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET is not configured or too short" }, { status: 500 });
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!resend) {
    return NextResponse.json({ error: "Resend not configured" }, { status: 500 });
  }

  const now = new Date();
  let sent = 0;
  let errors = 0;

  try {
    // Find users with enrollments who haven't had activity in 14+ days
    const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Get users who:
    // 1. Are real students (not bots, not admin)
    // 2. Registered more than 14 days ago
    // 3. Haven't completed any lesson in the last 14 days
    // 4. Haven't already received a re-engagement email
    const candidates = await prisma.user.findMany({
      where: {
        role: "student",
        isBot: false,
        createdAt: { lte: fourteenDaysAgo },
        // No recent activity
        progress: {
          none: {
            status: "completed",
            completedAt: { gte: fourteenDaysAgo },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        progress: {
          where: { status: "completed" },
          orderBy: { completedAt: "desc" },
          take: 1,
          include: { lesson: { select: { title: true } } },
        },
      },
    });

    for (const user of candidates) {
      // Check if we already sent a re-engagement email in the last 30 days
      const alreadySent = await prisma.emailLog.findFirst({
        where: {
          userId: user.id,
          type: "re_engagement",
          createdAt: { gte: thirtyDaysAgo },
        },
      });
      if (alreadySent) continue;

      try {
        const lastLesson = user.progress[0]?.lesson?.title || undefined;
        const emailData = reEngagementEmail(user.name || "", lastLesson);

        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });

        await prisma.emailLog.create({
          data: {
            userId: user.id,
            type: "re_engagement",
            sequence: 1,
            subject: emailData.subject,
            status: "sent",
          },
        });

        sent++;
      } catch (err) {
        console.error(`Failed to send re-engagement to ${user.email}:`, err instanceof Error ? err.message : err);
        errors++;
      }
    }

    return NextResponse.json({
      message: "Re-engagement cron completed",
      candidates: candidates.length,
      sent,
      errors,
    });
  } catch (error) {
    console.error("Re-engagement cron error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
