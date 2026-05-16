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

  // Quizzes deprecated · the formation switched to MVP-based exercises
  const avgQuizScore = 0;

  const oneDayAgo = new Date();
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const completionsToday = await prisma.lessonProgress.count({
    where: { status: "completed", completedAt: { gte: oneDayAgo }, user: { isBot: false } },
  });

  // ── Enrollments & Revenue ──
  // Only count real students (no bots), only latest enrollment per user
  const allEnrollments = await prisma.enrollment.findMany({
    where: { status: "active", user: { isBot: false, role: "student" } },
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  // Deduplicate: keep only the latest enrollment per user
  const seenUserIds = new Set<string>();
  const enrollments = allEnrollments.filter((e) => {
    if (seenUserIds.has(e.userId)) return false;
    seenUserIds.add(e.userId);
    return true;
  });

  // paidAmount from Stripe is in CENTS — convert to euros
  // If paidAmount is null/0, fallback to tier price (already in euros)
  function revenueOf(e: { paidAmount: number | null; tier: string }) {
    if (e.paidAmount && e.paidAmount > 0) return Math.round(e.paidAmount / 100);
    return TIER_PRICES[e.tier] || 0;
  }

  // Only count paid tiers (exclude free)
  const totalRevenue = enrollments.reduce(
    (sum, e) => e.tier === "free" ? sum : sum + revenueOf(e),
    0
  );

  // Enrollments by tier · group legacy tiers (starter/academy) into "standard"
  // and (one_to_one) into "accompagnement" so the admin sees the current model.
  const enrollmentsByTier: Record<string, number> = { standard: 0, accompagnement: 0 };
  for (const e of enrollments) {
    if (e.tier === "standard" || e.tier === "starter" || e.tier === "academy") {
      enrollmentsByTier.standard++;
    } else if (e.tier === "accompagnement" || e.tier === "one_to_one") {
      enrollmentsByTier.accompagnement++;
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
    if (e.tier === "free") continue;
    const key = `${e.createdAt.getFullYear()}-${String(e.createdAt.getMonth() + 1).padStart(2, "0")}`;
    const entry = monthlyRevenue.find((m) => m.month === key);
    if (entry) {
      entry.revenue += revenueOf(e);
    }
  }

  // Recent enrollments (last 15) — used as payments table
  const recentEnrollments = enrollments.slice(0, 15).map((e) => ({
    id: e.userId,
    userName: e.user.name,
    userEmail: e.user.email,
    tier: e.tier,
    amount: revenueOf(e),
    status: e.status,
    createdAt: e.createdAt.toISOString(),
  }));

  // Revenue this month
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthlyRevenueThisMonth = enrollments
    .filter((e) => e.createdAt >= monthStart && e.tier !== "free")
    .reduce((sum, e) => sum + (revenueOf(e)), 0);

  // Revenue breakdown by tier · group legacy → new buckets
  const revenueByTier: Record<string, number> = { standard: 0, accompagnement: 0 };
  for (const e of enrollments) {
    if (e.tier === "free") continue;
    if (e.tier === "standard" || e.tier === "starter" || e.tier === "academy") {
      revenueByTier.standard += revenueOf(e);
    } else if (e.tier === "accompagnement" || e.tier === "one_to_one") {
      revenueByTier.accompagnement += revenueOf(e);
    }
  }

  // MRR estimate (average of last 3 months)
  const last3Months = monthlyRevenue.slice(-3);
  const mrrEstimate = last3Months.length > 0
    ? Math.round(last3Months.reduce((s, m) => s + m.revenue, 0) / last3Months.length)
    : 0;

  // Average cart value (paid tiers only)
  const paidEnrollments = enrollments.filter((e) => e.tier !== "free");
  const avgCartValue = paidEnrollments.length > 0
    ? Math.round(totalRevenue / paidEnrollments.length)
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

  const activityItems = [
    ...recentCompletions.map((c) => ({
      type: "lesson_completion" as const,
      userName: c.user.name || "Inconnu",
      detail: c.lesson.title,
      createdAt: c.completedAt?.toISOString() || "",
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

  // ── Email Stats ──
  const sevenDaysAgoEmail = new Date();
  sevenDaysAgoEmail.setDate(sevenDaysAgoEmail.getDate() - 7);

  const [emailsSent, emailsFailed, emailsThisWeek, emailsByTypeRaw, totalLeads, convertedLeads] = await Promise.all([
    prisma.emailLog.count(),
    prisma.emailLog.count({ where: { status: "failed" } }),
    prisma.emailLog.count({ where: { createdAt: { gte: sevenDaysAgoEmail } } }),
    prisma.emailLog.groupBy({ by: ["type"], _count: true }),
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "converted" } }),
  ]);

  const emailsByType: Record<string, number> = {};
  for (const e of emailsByTypeRaw) {
    emailsByType[e.type] = e._count;
  }

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
    emails: {
      sent: emailsSent,
      failed: emailsFailed,
      thisWeek: emailsThisWeek,
      byType: emailsByType,
    },
    leads: {
      total: totalLeads,
      converted: convertedLeads,
      conversionRate: totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0,
    },
  });
  } catch (error) {
    console.error("GET /api/admin/stats error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
