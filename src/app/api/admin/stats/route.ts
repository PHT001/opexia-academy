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

  try {
  // ── Existing stats ──
  const totalStudents = await prisma.user.count({ where: { role: "student", isBot: false } });

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const activeStudents = await prisma.streak.groupBy({
    by: ["userId"],
    where: { date: { gte: sevenDaysAgo }, user: { isBot: false } },
  });

  const totalLessons = await prisma.lesson.count();

  const completions = await prisma.lessonProgress.findMany({
    where: { status: "completed", user: { isBot: false } },
  });

  const avgCompletion = totalStudents > 0 && totalLessons > 0
    ? Math.round((completions.length / (totalStudents * totalLessons)) * 100)
    : 0;

  const submissions = await prisma.quizSubmission.findMany({
    where: { user: { isBot: false } },
  });
  const avgQuizScore = submissions.length > 0
    ? Math.round(submissions.reduce((sum, s) => sum + s.score, 0) / submissions.length)
    : 0;

  const oneDayAgo = new Date();
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const completionsToday = await prisma.lessonProgress.count({
    where: { status: "completed", completedAt: { gte: oneDayAgo }, user: { isBot: false } },
  });

  // ── Enrollments & Revenue ──
  const enrollments = await prisma.enrollment.findMany({
    where: { status: "active" },
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  const totalRevenue = enrollments.reduce(
    (sum, e) => sum + (e.paidAmount || TIER_PRICES[e.tier] || 0),
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
      entry.revenue += e.paidAmount || TIER_PRICES[e.tier] || 0;
    }
  }

  // Recent enrollments (last 15) — used as payments table
  const recentEnrollments = enrollments.slice(0, 15).map((e) => ({
    id: e.userId,
    userName: e.user.name,
    userEmail: e.user.email,
    tier: e.tier,
    amount: e.paidAmount || TIER_PRICES[e.tier] || 0,
    status: e.status,
    createdAt: e.createdAt.toISOString(),
  }));

  // Revenue this month
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthlyRevenueThisMonth = enrollments
    .filter((e) => e.createdAt >= monthStart)
    .reduce((sum, e) => sum + (e.paidAmount || TIER_PRICES[e.tier] || 0), 0);

  // Revenue breakdown by tier
  const revenueByTier: Record<string, number> = { starter: 0, academy: 0, one_to_one: 0 };
  for (const e of enrollments) {
    if (e.tier in revenueByTier) {
      revenueByTier[e.tier] += e.paidAmount || TIER_PRICES[e.tier] || 0;
    }
  }

  // MRR estimate (average of last 3 months)
  const last3Months = monthlyRevenue.slice(-3);
  const mrrEstimate = last3Months.length > 0
    ? Math.round(last3Months.reduce((s, m) => s + m.revenue, 0) / last3Months.length)
    : 0;

  // Average cart value
  const avgCartValue = enrollments.length > 0
    ? Math.round(totalRevenue / enrollments.length)
    : 0;

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
    where: { role: "student", isBot: false },
    select: { createdAt: true },
  });
  for (const s of allStudents) {
    const key = `${s.createdAt.getFullYear()}-${String(s.createdAt.getMonth() + 1).padStart(2, "0")}`;
    const entry = userGrowth.find((m) => m.month === key);
    if (entry) {
      entry.count++;
    }
  }

  // ── Churn Rate (Feature 4) ──
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  // Users registered 30+ days ago
  const oldStudents = await prisma.user.findMany({
    where: { role: "student", isBot: false, createdAt: { lte: thirtyDaysAgo } },
    select: { id: true },
  });

  // Among those, find who has completions in the last 14 days
  const recentActiveIds = await prisma.lessonProgress.findMany({
    where: {
      userId: { in: oldStudents.map((s) => s.id) },
      status: "completed",
      completedAt: { gte: fourteenDaysAgo },
    },
    select: { userId: true },
    distinct: ["userId"],
  });

  const recentActiveIdSet = new Set(recentActiveIds.map((r) => r.userId));
  const atRiskStudents = oldStudents.filter((s) => !recentActiveIdSet.has(s.id)).length;
  const churnRate = oldStudents.length > 0 ? Math.round((atRiskStudents / oldStudents.length) * 100) : 0;

  // ── Conversion Funnel (Feature 5) ──
  const funnelTotalUsers = totalStudents;
  const funnelVerifiedUsers = await prisma.user.count({ where: { role: "student", isBot: false, emailVerified: true } });
  const funnelEnrolledUsers = await prisma.user.count({
    where: { role: "student", isBot: false, enrollments: { some: {} } },
  });
  const funnelActiveUsers = activeStudents.length; // users with streak in last 7 days

  return NextResponse.json({
    totalStudents,
    activeStudents: activeStudents.length,
    avgCompletion,
    avgQuizScore,
    totalLessons,
    completionsToday,
    totalRevenue,
    monthlyRevenueThisMonth,
    revenueByTier,
    mrrEstimate,
    avgCartValue,
    monthlyRevenue,
    enrollmentsByTier,
    recentEnrollments,
    recentActivity,
    userGrowth,
    churnRate,
    atRiskStudents,
    funnel: {
      totalUsers: funnelTotalUsers,
      verifiedUsers: funnelVerifiedUsers,
      enrolledUsers: funnelEnrolledUsers,
      activeUsers: funnelActiveUsers,
    },
  });
  } catch (error) {
    console.error("GET /api/admin/stats error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
