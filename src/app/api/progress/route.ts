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

  const currentUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { createdAt: true },
  });

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

  // Get user enrollment tier (admin = academy) + onboarding status
  const isAdmin = session.user.role === "admin";
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { onboardingCompleted: true },
  });
  const onboardingCompleted = user?.onboardingCompleted ?? true;

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

  // Build recent activity from completed lessons and quizzes
  const recentActivity: {
    type: "lesson" | "quiz";
    title: string;
    lessonOrder: number;
    moduleOrder: number;
    xpEarned: number;
    completedAt: string;
  }[] = [];

  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      const prog = lesson.progress[0];
      if (prog?.status === "completed" && prog.completedAt) {
        recentActivity.push({
          type: "lesson",
          title: lesson.title,
          lessonOrder: lesson.order,
          moduleOrder: mod.order,
          xpEarned: prog.xpEarned || 0,
          completedAt: new Date(prog.completedAt).toISOString(),
        });
        // If the lesson has a quiz with a passed submission, add a quiz entry
        if (lesson.quiz?.submissions && lesson.quiz.submissions.length > 0) {
          recentActivity.push({
            type: "quiz",
            title: lesson.title,
            lessonOrder: lesson.order,
            moduleOrder: mod.order,
            xpEarned: 0,
            completedAt: new Date(prog.completedAt).toISOString(),
          });
        }
      }
    }
  }

  recentActivity.sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
  const recentActivityTop5 = recentActivity.slice(0, 5);

  // Count quizzes completed (passed)
  const quizzesCompleted = await prisma.quizSubmission.count({
    where: { userId, passed: true },
  });

  // Average quiz score
  const scoreAgg = await prisma.quizSubmission.aggregate({
    where: { userId, passed: true },
    _avg: { score: true },
  });
  const averageScore = scoreAgg._avg.score ?? 0;

  return NextResponse.json({
    totalLessons,
    completedLessons,
    currentLesson: currentLesson
      ? { id: currentLesson.id, title: currentLesson.title, slug: currentLesson.slug, order: currentLesson.order }
      : null,
    streak,
    xp,
    tier,
    onboardingCompleted,
    recentActivity: recentActivityTop5,
    quizzesCompleted,
    averageScore,
    memberSince: currentUser?.createdAt
      ? new Date(currentUser.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
      : "",
    modules: modules.map((m) => ({
      id: m.id,
      title: m.title,
      order: m.order,
      totalLessons: m.lessons.length,
      completedLessons: m.lessons.filter((l) => l.progress[0]?.status === "completed").length,
    })),
  });
}
