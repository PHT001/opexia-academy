import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { weeklyRecapEmail } from "@/lib/email-templates";

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
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  try {
    // Fetch all users with an active enrollment
    const enrolledUsers = await prisma.enrollment.findMany({
      where: { status: "active" },
      select: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    // Deduplicate users (a user may have multiple enrollments)
    const usersMap = new Map<
      string,
      { id: string; email: string; name: string | null }
    >();
    for (const enrollment of enrolledUsers) {
      usersMap.set(enrollment.user.id, enrollment.user);
    }
    const users = Array.from(usersMap.values());

    let sent = 0;
    let errors = 0;

    for (const user of users) {
      try {
        // Lessons completed this week
        const lessonsThisWeek = await prisma.lessonProgress.count({
          where: {
            userId: user.id,
            status: "completed",
            completedAt: { gte: oneWeekAgo },
          },
        });

        // Total completed lessons
        const totalLessons = await prisma.lessonProgress.count({
          where: {
            userId: user.id,
            status: "completed",
          },
        });

        // XP earned this week
        const xpThisWeekResult = await prisma.lessonProgress.aggregate({
          where: {
            userId: user.id,
            completedAt: { gte: oneWeekAgo },
          },
          _sum: { xpEarned: true },
        });
        const xpThisWeek = xpThisWeekResult._sum.xpEarned ?? 0;

        // Total XP
        const totalXPResult = await prisma.lessonProgress.aggregate({
          where: { userId: user.id },
          _sum: { xpEarned: true },
        });
        const totalXP = totalXPResult._sum.xpEarned ?? 0;

        // Current streak (consecutive days with activity ending today or yesterday)
        const streaks = await prisma.streak.findMany({
          where: { userId: user.id },
          orderBy: { date: "desc" },
          take: 30,
        });

        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < streaks.length; i++) {
          const streakDate = new Date(streaks[i].date);
          streakDate.setHours(0, 0, 0, 0);
          const expectedDate = new Date(today);
          expectedDate.setDate(today.getDate() - i);

          // Allow starting from today or yesterday
          if (i === 0) {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            if (
              streakDate.getTime() !== today.getTime() &&
              streakDate.getTime() !== yesterday.getTime()
            ) {
              break;
            }
            // Adjust offset if streak starts from yesterday
            if (streakDate.getTime() === yesterday.getTime()) {
              expectedDate.setDate(today.getDate() - 1 - i);
            }
          }

          if (i > 0) {
            const prevDate = new Date(streaks[i - 1].date);
            prevDate.setHours(0, 0, 0, 0);
            const diff =
              (prevDate.getTime() - streakDate.getTime()) /
              (1000 * 60 * 60 * 24);
            if (diff !== 1) break;
          }

          streak++;
        }

        // Next uncompleted lesson
        const nextLesson = await prisma.lesson.findFirst({
          where: {
            progress: {
              none: {
                userId: user.id,
                status: "completed",
              },
            },
          },
          orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
          select: { title: true },
        });

        const emailData = weeklyRecapEmail(user.name ?? "there", {
          lessonsThisWeek,
          totalLessons,
          xpThisWeek,
          totalXP,
          streak,
          nextLesson: nextLesson?.title ?? null,
        });

        await resend.emails.send({
          from: "OpexIA Academy <support@opexia-formation.com>",
          to: user.email,
          subject: emailData.subject,
          html: emailData.html,
        });

        sent++;
      } catch (err) {
        console.error(
          `Failed to send weekly recap to ${user.email}:`,
          err instanceof Error ? err.message : err,
        );
        errors++;
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      errors,
      total: users.length,
    });
  } catch (err) {
    console.error(
      "Weekly recap cron failed:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
