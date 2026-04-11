import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const tier = searchParams.get("tier") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(1000, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
  const sort = searchParams.get("sort") || "createdAt";
  const order = searchParams.get("order") === "asc" ? "asc" : "desc";

  const totalLessons = await prisma.lesson.count();

  // Build where clause — always exclude bots
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { role: "student", isBot: false };

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
  const dbSorts = ["createdAt", "name", "email"];
  const needsPostSort = ["xp_desc", "xp_asc", "progress_desc"];
  const isPostSort = needsPostSort.includes(sort);
  const sortField = dbSorts.includes(sort) ? sort : "createdAt";

  const students = await prisma.user.findMany({
    where,
    orderBy: isPostSort ? { createdAt: "desc" } : { [sortField]: order },
    skip: isPostSort ? 0 : (page - 1) * limit,
    take: isPostSort ? undefined : limit,
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

  let result = students.map((s) => ({
    id: s.id,
    name: s.name,
    email: s.email,
    createdAt: s.createdAt.toISOString(),
    completedLessons: s.progress.length,
    totalLessons,
    tier: s.enrollments[0]?.tier || null,
    lastActive: s.updatedAt?.toISOString() || s.streaks[0]?.date?.toISOString() || null,
    discordUsername: s.discordUsername || null,
    totalXP: xpMap[s.id] || 0,
    isBot: s.isBot,
  }));

  // Post-sort by XP or progress if needed
  if (sort === "xp_desc") result.sort((a, b) => b.totalXP - a.totalXP);
  else if (sort === "xp_asc") result.sort((a, b) => a.totalXP - b.totalXP);
  else if (sort === "progress_desc") result.sort((a, b) => b.completedLessons - a.completedLessons);

  // Paginate post-sorted results
  if (isPostSort) result = result.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    students: result,
    total,
    page,
    totalPages,
  });
  } catch (error) {
    console.error("GET /api/admin/students error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
