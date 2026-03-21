import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BADGES } from "@/lib/constants";

/* ——— Helpers ——— */

function calcLevel(xp: number) {
  return Math.floor(xp / 500) + 1;
}

function calcLevelProgress(xp: number) {
  return Math.round((xp % 500) / 5); // 0-100%
}

/** Count consecutive streak days ending today (or yesterday) */
function calcStreak(dates: Date[]): number {
  if (dates.length === 0) return 0;
  const sorted = dates
    .map((d) => {
      const dt = new Date(d);
      dt.setHours(0, 0, 0, 0);
      return dt.getTime();
    })
    .sort((a, b) => b - a); // newest first

  const unique = [...new Set(sorted)];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayMs = today.getTime();
  const yesterdayMs = todayMs - 86_400_000;
  const DAY = 86_400_000;

  // Must start from today or yesterday
  if (unique[0] !== todayMs && unique[0] !== yesterdayMs) return 0;

  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i - 1] - unique[i] === DAY) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

/** Best streak ever */
function calcBestStreak(dates: Date[]): number {
  if (dates.length === 0) return 0;
  const sorted = dates
    .map((d) => {
      const dt = new Date(d);
      dt.setHours(0, 0, 0, 0);
      return dt.getTime();
    })
    .sort((a, b) => a - b);
  const unique = [...new Set(sorted)];
  const DAY = 86_400_000;

  let best = 1;
  let current = 1;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i] - unique[i - 1] === DAY) {
      current++;
      if (current > best) best = current;
    } else {
      current = 1;
    }
  }
  return best;
}

/** Check which badges a user has earned */
function calcBadges(lessonsCompleted: number, streak: number): string[] {
  const earned: string[] = [];
  if (lessonsCompleted >= 1) earned.push("first_lesson");
  // Module 1 has 6 lessons (order 1)
  if (lessonsCompleted >= 6) earned.push("module_1");
  if (streak >= 7) earned.push("streak_7");
  if (lessonsCompleted >= 44) earned.push("halfway");
  if (lessonsCompleted >= 88) earned.push("graduate");
  return earned;
}

/* ——— Main Handler ——— */

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Fetch all users with progress, streaks, and quiz submissions
  const users = await prisma.user.findMany({
    where: { progress: { some: {} } },
    select: {
      id: true,
      name: true,
      progress: {
        select: { xpEarned: true, status: true, completedAt: true },
      },
      streaks: {
        select: { date: true },
      },
      quizSubmissions: {
        select: { score: true, passed: true, createdAt: true },
      },
    },
  });

  const totalStudents = await prisma.user.count({ where: { role: "student" } });

  // Build enriched user data
  const enriched = users.map((u) => {
    const xp = u.progress.reduce((sum, lp) => sum + (lp.xpEarned || 0), 0);
    const lessonsCompleted = u.progress.filter((lp) => lp.status === "completed").length;
    const streak = calcStreak(u.streaks.map((s) => s.date));
    const bestStreak = calcBestStreak(u.streaks.map((s) => s.date));
    const passedQuizzes = u.quizSubmissions.filter((q) => q.passed);
    const quizAverage = passedQuizzes.length > 0
      ? Math.round(passedQuizzes.reduce((sum, q) => sum + q.score, 0) / passedQuizzes.length)
      : 0;
    const perfectQuizzes = u.quizSubmissions.filter((q) => q.score === 100).length;

    return {
      id: u.id,
      name: u.name || "Eleve",
      xp,
      level: calcLevel(xp),
      lessonsCompleted,
      streak,
      bestStreak,
      quizAverage,
      perfectQuizzes,
      quizCount: passedQuizzes.length,
    };
  });

  // --- Rankings by XP ---
  const byXp = [...enriched]
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 20)
    .map((u, i) => ({ ...u, rank: i + 1 }));

  // --- Rankings by Streak ---
  const byStreak = [...enriched]
    .filter((u) => u.streak > 0)
    .sort((a, b) => b.streak - a.streak || b.xp - a.xp)
    .slice(0, 20)
    .map((u, i) => ({ ...u, rank: i + 1 }));

  // --- Rankings by Quiz Average (min 3 quizzes) ---
  const byQuiz = [...enriched]
    .filter((u) => u.quizCount >= 3)
    .sort((a, b) => b.quizAverage - a.quizAverage || b.perfectQuizzes - a.perfectQuizzes)
    .slice(0, 20)
    .map((u, i) => ({ ...u, rank: i + 1 }));

  // --- Current user data ---
  const currentUserData = enriched.find((u) => u.id === session.user.id);
  const currentXpRank = enriched
    .sort((a, b) => b.xp - a.xp)
    .findIndex((u) => u.id === session.user.id) + 1;

  // Rank trend: compare XP earned this week vs last week
  const now = new Date();
  const thisWeekStart = new Date(now);
  thisWeekStart.setDate(now.getDate() - now.getDay());
  thisWeekStart.setHours(0, 0, 0, 0);
  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setDate(lastWeekStart.getDate() - 7);

  const currentUserProgress = users.find((u) => u.id === session.user.id);
  let rankTrend: "up" | "down" | "same" = "same";
  if (currentUserProgress) {
    const thisWeekXp = currentUserProgress.progress
      .filter((lp) => lp.completedAt && new Date(lp.completedAt) >= thisWeekStart)
      .reduce((sum, lp) => sum + (lp.xpEarned || 0), 0);
    const lastWeekXp = currentUserProgress.progress
      .filter((lp) => lp.completedAt && new Date(lp.completedAt) >= lastWeekStart && new Date(lp.completedAt) < thisWeekStart)
      .reduce((sum, lp) => sum + (lp.xpEarned || 0), 0);
    if (thisWeekXp > lastWeekXp) rankTrend = "up";
    else if (thisWeekXp < lastWeekXp) rankTrend = "down";
  }

  const badges = currentUserData
    ? calcBadges(currentUserData.lessonsCompleted, currentUserData.bestStreak)
    : [];

  // --- Recent activity (last 10 across all users) ---
  const recentLessons = await prisma.lessonProgress.findMany({
    where: { status: "completed", completedAt: { not: null } },
    orderBy: { completedAt: "desc" },
    take: 10,
    select: {
      userId: true,
      xpEarned: true,
      completedAt: true,
      user: { select: { name: true } },
      lesson: { select: { title: true, module: { select: { title: true, order: true } } } },
    },
  });

  const recentActivity = recentLessons.map((lp) => ({
    userName: lp.user.name || "Eleve",
    action: `a termine "${lp.lesson.title}"`,
    module: lp.lesson.module.title,
    moduleOrder: lp.lesson.module.order,
    xp: lp.xpEarned,
    time: lp.completedAt!.toISOString(),
  }));

  return NextResponse.json({
    rankings: {
      xp: byXp,
      streak: byStreak,
      quiz: byQuiz,
    },
    currentUser: currentUserData
      ? {
          ...currentUserData,
          rank: currentXpRank || null,
          levelProgress: calcLevelProgress(currentUserData.xp),
          rankTrend,
          badges,
        }
      : null,
    totalStudents: Math.max(totalStudents, 1),
    recentActivity,
    allBadges: BADGES,
  });
}
