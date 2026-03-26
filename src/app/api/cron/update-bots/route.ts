import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ═══════════════════════════════════════════════════
// Daily cron: Update bot students with simulated activity
// ═══════════════════════════════════════════════════

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(req: NextRequest) {
  // Verify CRON_SECRET
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET is not configured or too short" }, { status: 500 });
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get all bot users
    const bots = await prisma.user.findMany({
      where: { isBot: true },
      select: {
        id: true,
        name: true,
        progress: {
          where: { status: "completed" },
          select: { lessonId: true },
        },
      },
    });

    if (bots.length === 0) {
      return NextResponse.json({ message: "No bot users found", updated: 0 });
    }

    // Get all available lessons
    const allLessons = await prisma.lesson.findMany({
      select: { id: true },
      orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let updatedCount = 0;

    for (const bot of bots) {
      // 60% chance of adding XP on any given day
      const isActiveToday = Math.random() < 0.6;

      if (isActiveToday) {
        // Add random XP between 20 and 150
        const xpToAdd = randomInt(20, 150);

        // Find lessons the bot hasn't completed yet
        const completedLessonIds = new Set(bot.progress.map((p) => p.lessonId));
        const incompleteLessons = allLessons.filter((l) => !completedLessonIds.has(l.id));

        // Randomly mark 0-2 additional lessons as completed
        const lessonsToComplete = Math.min(randomInt(0, 2), incompleteLessons.length);

        if (lessonsToComplete > 0) {
          const xpPerLesson = Math.floor(xpToAdd / lessonsToComplete);
          let remainingXp = xpToAdd;

          for (let i = 0; i < lessonsToComplete; i++) {
            const lesson = incompleteLessons[i];
            const isLast = i === lessonsToComplete - 1;
            const lessonXp = isLast ? remainingXp : xpPerLesson;
            remainingXp -= lessonXp;

            await prisma.lessonProgress.upsert({
              where: {
                userId_lessonId: { userId: bot.id, lessonId: lesson.id },
              },
              update: {
                status: "completed",
                completedAt: new Date(),
                xpEarned: { increment: lessonXp },
              },
              create: {
                userId: bot.id,
                lessonId: lesson.id,
                status: "completed",
                completedAt: new Date(),
                xpEarned: lessonXp,
              },
            });
          }
        } else {
          // If no new lessons to complete, add XP to the last completed lesson
          if (bot.progress.length > 0) {
            const lastLessonId = bot.progress[bot.progress.length - 1].lessonId;
            await prisma.lessonProgress.update({
              where: {
                userId_lessonId: { userId: bot.id, lessonId: lastLessonId },
              },
              data: {
                xpEarned: { increment: xpToAdd },
              },
            });
          }
        }

        // Add streak for today
        await prisma.streak.upsert({
          where: {
            userId_date: { userId: bot.id, date: today },
          },
          update: {},
          create: {
            userId: bot.id,
            date: today,
          },
        });

        updatedCount++;
      } else {
        // Inactive day: 30% chance of keeping streak (didn't study but streak survives)
        // 70% chance streak resets naturally (no streak entry for today)
        if (Math.random() < 0.3) {
          await prisma.streak.upsert({
            where: {
              userId_date: { userId: bot.id, date: today },
            },
            update: {},
            create: {
              userId: bot.id,
              date: today,
            },
          });
        }
      }
    }

    return NextResponse.json({
      message: `Updated ${updatedCount}/${bots.length} bot students`,
      updated: updatedCount,
      total: bots.length,
    });
  } catch (error) {
    console.error("CRON update-bots error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
