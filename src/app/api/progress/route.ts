import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const userId = session.user.id;

  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        include: {
          progress: { where: { userId } },
          quiz: {
            include: {
              submissions: {
                where: { userId, passed: true },
                take: 1,
              },
            },
          },
        },
      },
    },
  });

  const allLessons = modules.flatMap((m) => m.lessons);
  const totalLessons = allLessons.length;
  const completedLessons = allLessons.filter(
    (l) => l.progress[0]?.status === "completed"
  ).length;

  // Find current lesson (first in_progress or first locked)
  const currentLesson =
    allLessons.find((l) => l.progress[0]?.status === "in_progress") ||
    allLessons.find((l) => !l.progress[0] || l.progress[0]?.status === "locked");

  // Calculate XP
  const xp = allLessons.reduce((sum, l) => sum + (l.progress[0]?.xpEarned || 0), 0);

  // Calculate streak
  const streaks = await prisma.streak.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < streaks.length; i++) {
    const d = new Date(streaks[i].date);
    d.setHours(0, 0, 0, 0);
    const expected = new Date(today);
    expected.setDate(expected.getDate() - i);
    if (d.getTime() === expected.getTime()) {
      streak++;
    } else {
      break;
    }
  }

  // Get user enrollment tier (admin = academy)
  const isAdmin = session.user.role === "admin";
  let tier: string | null = null;
  if (isAdmin) {
    tier = "academy";
  } else {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    tier = enrollment?.tier || null;
  }

  return NextResponse.json({
    totalLessons,
    completedLessons,
    currentLesson: currentLesson
      ? { id: currentLesson.id, title: currentLesson.title, slug: currentLesson.slug, order: currentLesson.order }
      : null,
    streak,
    xp,
    tier,
    modules: modules.map((m) => ({
      id: m.id,
      title: m.title,
      order: m.order,
      totalLessons: m.lessons.length,
      completedLessons: m.lessons.filter((l) => l.progress[0]?.status === "completed").length,
    })),
  });
}
