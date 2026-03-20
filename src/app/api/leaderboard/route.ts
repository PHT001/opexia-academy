import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Get all users with their XP
  const users = await prisma.user.findMany({
    where: {
      progress: { some: {} },
    },
    select: {
      id: true,
      name: true,
      progress: {
        select: {
          xpEarned: true,
          status: true,
        },
      },
    },
  });

  const leaderboard = users
    .map((u) => ({
      id: u.id,
      name: u.name || "Élève",
      xp: u.progress.reduce((sum, lp) => sum + (lp.xpEarned || 0), 0),
      lessonsCompleted: u.progress.filter((lp) => lp.status === "completed").length,
      level: Math.floor(u.progress.reduce((sum, lp) => sum + (lp.xpEarned || 0), 0) / 500) + 1,
    }))
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 20)
    .map((u, i) => ({ ...u, rank: i + 1 }));

  // Find current user rank
  const allRanked = users
    .map((u) => ({
      id: u.id,
      xp: u.progress.reduce((sum, lp) => sum + (lp.xpEarned || 0), 0),
    }))
    .sort((a, b) => b.xp - a.xp);

  const currentUserRank = allRanked.findIndex((u) => u.id === session.user.id) + 1;
  const currentUserXp = allRanked.find((u) => u.id === session.user.id)?.xp || 0;

  return NextResponse.json({
    leaderboard,
    currentUser: {
      rank: currentUserRank || leaderboard.length + 1,
      xp: currentUserXp,
    },
  });
}
