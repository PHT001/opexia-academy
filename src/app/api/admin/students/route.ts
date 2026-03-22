import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const tier = searchParams.get("tier") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
  const sort = searchParams.get("sort") || "createdAt";
  const order = searchParams.get("order") === "asc" ? "asc" : "desc";

  const totalLessons = await prisma.lesson.count();

  // Build where clause
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { role: "student" };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }

  if (tier) {
    where.enrollments = { some: { tier } };
  }

  // Count total
  const total = await prisma.user.count({ where });
  const totalPages = Math.ceil(total / limit);

  // Determine sort field
  const allowedSorts = ["createdAt", "name", "email"];
  const sortField = allowedSorts.includes(sort) ? sort : "createdAt";

  const students = await prisma.user.findMany({
    where,
    orderBy: { [sortField]: order },
    skip: (page - 1) * limit,
    take: limit,
    include: {
      progress: { where: { status: "completed" } },
      streaks: { orderBy: { date: "desc" }, take: 1 },
      enrollments: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });

  // Get XP sums for these students
  const studentIds = students.map((s) => s.id);
  const xpAggregates = await prisma.lessonProgress.groupBy({
    by: ["userId"],
    where: { userId: { in: studentIds } },
    _sum: { xpEarned: true },
  });
  const xpMap: Record<string, number> = {};
  for (const agg of xpAggregates) {
    xpMap[agg.userId] = agg._sum.xpEarned || 0;
  }

  const result = students.map((s) => ({
    id: s.id,
    name: s.name,
    email: s.email,
    createdAt: s.createdAt.toISOString(),
    completedLessons: s.progress.length,
    totalLessons,
    tier: s.enrollments[0]?.tier || null,
    lastActive: s.streaks[0]?.date?.toISOString() || null,
    discordUsername: s.discordUsername || null,
    totalXP: xpMap[s.id] || 0,
  }));

  return NextResponse.json({
    students: result,
    total,
    page,
    totalPages,
  });
}
