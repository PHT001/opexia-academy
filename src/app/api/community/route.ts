import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── LEADERBOARD: Top 10 students by XP ──
  // Get all users with their XP (sum of xpEarned from progress)
  const users = await prisma.user.findMany({
    where: {
      role: "student",
      enrollments: { some: {} },
    },
    select: {
      id: true,
      name: true,
      progress: {
        where: { status: "completed" },
        select: { xpEarned: true },
      },
      enrollments: {
        select: { tier: true },
        take: 1,
      },
    },
  });

  // Calculate total XP for each user, sort by XP
  const leaderboard = users
    .map((u) => {
      const totalXP = u.progress.reduce((sum, lp) => sum + lp.xpEarned, 0);
      const completedLessons = u.progress.length;

      return {
        id: u.id,
        name: u.name || "Anonyme",
        xp: totalXP,
        completedLessons,
        tier: u.enrollments[0]?.tier || "free",
      };
    })
    .filter((u) => u.xp > 0)
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 10);

  // ── ACTIVITY FEED: Recent completions across all users ──
  const recentActivity = await prisma.lessonProgress.findMany({
    where: {
      status: "completed",
      completedAt: { not: null },
    },
    orderBy: { completedAt: "desc" },
    take: 15,
    select: {
      id: true,
      xpEarned: true,
      completedAt: true,
      user: {
        select: { name: true },
      },
      lesson: {
        select: {
          title: true,
          order: true,
          module: {
            select: { order: true, title: true },
          },
        },
      },
    },
  });

  const feed = recentActivity.map((a) => ({
    id: a.id,
    userName: a.user.name || "Anonyme",
    lessonTitle: a.lesson.title,
    lessonOrder: a.lesson.order,
    moduleOrder: a.lesson.module.order,
    moduleTitle: a.lesson.module.title,
    xpEarned: a.xpEarned,
    completedAt: a.completedAt?.toISOString() || "",
  }));

  // ── TOTAL ACTIVE STUDENTS COUNT ──
  const totalActive = users.filter((u) => u.progress.length > 0).length;

  return NextResponse.json({ leaderboard, feed, totalActive });
}
