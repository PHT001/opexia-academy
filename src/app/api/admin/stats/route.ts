import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIERS } from "@/lib/constants";

const TIER_PRICES: Record<string, number> = {};
for (const t of TIERS) {
  TIER_PRICES[t.id] = t.price;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  // ── Existing stats ──
  const totalStudents = await prisma.user.count({ where: { role: "student" } });

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const activeStudents = await prisma.streak.groupBy({
    by: ["userId"],
    where: { date: { gte: sevenDaysAgo } },
  });

  const totalLessons = await prisma.lesson.count();

  const completions = await prisma.lessonProgress.findMany({
    where: { status: "completed" },
  });

  const avgCompletion = totalStudents > 0 && totalLessons > 0
    ? Math.round((completions.length / (totalStudents * totalLessons)) * 100)
    : 0;

  const submissions = await prisma.quizSubmission.findMany();
  const avgQuizScore = submissions.length > 0
    ? Math.round(submissions.reduce((sum, s) => sum + s.score, 0) / submissions.length)
    : 0;

  const oneDayAgo = new Date();
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const completionsToday = await prisma.lessonProgress.count({
    where: { status: "completed", completedAt: { gte: oneDayAgo } },
  });

  // ── Enrollments & Revenue ──
  const enrollments = await prisma.enrollment.findMany({
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  const totalRevenue = enrollments.reduce(
    (sum, e) => sum + (TIER_PRICES[e.tier] || 0),
    0
  );

  // Enrollments by tier
  const enrollmentsByTier: Record<string, number> = { starter: 0, academy: 0, one_to_one: 0 };
  for (const e of enrollments) {
    if (e.tier in enrollmentsByTier) {
      enrollmentsByTier[e.tier]++;
    }
  }

  // Monthly revenue (last 12 months)
  const now = new Date();
  const monthlyRevenue: { month: string; revenue: number }[] = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    monthlyRevenue.push({ month: key, revenue: 0 });
  }
  for (const e of enrollments) {
    const key = `${e.createdAt.getFullYear()}-${String(e.createdAt.getMonth() + 1).padStart(2, "0")}`;
    const entry = monthlyRevenue.find((m) => m.month === key);
    if (entry) {
      entry.revenue += TIER_PRICES[e.tier] || 0;
    }
  }

  // Recent enrollments (last 10)
  const recentEnrollments = enrollments.slice(0, 10).map((e) => ({
    id: e.id,
    userName: e.user.name,
    userEmail: e.user.email,
    tier: e.tier,
    date: e.createdAt.toISOString(),
  }));

  // ── Recent activity (last 20 merged) ──
  const recentCompletions = await prisma.lessonProgress.findMany({
    where: { status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 20,
    include: {
      user: { select: { name: true } },
      lesson: { select: { title: true } },
    },
  });

  const recentQuizSubmissions = await prisma.quizSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
    include: {
      user: { select: { name: true } },
      quiz: { include: { lesson: { select: { title: true } } } },
    },
  });

  const activityItems = [
    ...recentCompletions.map((c) => ({
      type: "lesson_completion" as const,
      userName: c.user.name || "Inconnu",
      detail: c.lesson.title,
      createdAt: c.completedAt?.toISOString() || "",
    })),
    ...recentQuizSubmissions.map((q) => ({
      type: "quiz_submission" as const,
      userName: q.user.name || "Inconnu",
      detail: `${q.quiz.lesson.title} — ${q.score}%${q.passed ? " (reussi)" : ""}`,
      createdAt: q.createdAt.toISOString(),
    })),
  ];
  activityItems.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const recentActivity = activityItems.slice(0, 20);

  // ── User growth (last 12 months) ──
  const userGrowth: { month: string; count: number }[] = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    userGrowth.push({ month: key, count: 0 });
  }
  const allStudents = await prisma.user.findMany({
    where: { role: "student" },
    select: { createdAt: true },
  });
  for (const s of allStudents) {
    const key = `${s.createdAt.getFullYear()}-${String(s.createdAt.getMonth() + 1).padStart(2, "0")}`;
    const entry = userGrowth.find((m) => m.month === key);
    if (entry) {
      entry.count++;
    }
  }

  return NextResponse.json({
    totalStudents,
    activeStudents: activeStudents.length,
    avgCompletion,
    avgQuizScore,
    totalLessons,
    completionsToday,
    totalRevenue,
    monthlyRevenue,
    enrollmentsByTier,
    recentEnrollments,
    recentActivity,
    userGrowth,
  });
}
