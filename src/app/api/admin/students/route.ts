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

  // ── Lead-only query ──
  if (tier === "lead") {
    // Get all user emails to exclude leads who already have accounts
    const userEmails = new Set(
      (await prisma.user.findMany({ where: { role: "student" }, select: { email: true } }))
        .map((u) => u.email.toLowerCase())
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const leadWhere: any = {};
    if (search) {
      leadWhere.email = { contains: search, mode: "insensitive" };
    }

    const totalLeads = await prisma.lead.count({ where: leadWhere });
    const leads = await prisma.lead.findMany({
      where: leadWhere,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    // Filter out leads who have accounts
    const pureLeads = leads.filter((l) => !userEmails.has(l.email.toLowerCase()));
    const totalPure = totalLeads - (leads.length - pureLeads.length); // approximate

    const result = pureLeads.map((l) => ({
      id: `lead_${l.id}`,
      name: null,
      email: l.email,
      createdAt: l.createdAt.toISOString(),
      completedLessons: 0,
      totalLessons,
      tier: "lead" as string | null,
      lastActive: null as string | null,
      discordUsername: null as string | null,
      totalXP: 0,
      isBot: false,
      isLead: true,
      leadStatus: l.status,
      leadSource: l.source,
      leadConvertedAt: l.convertedAt?.toISOString() || null,
    }));

    return NextResponse.json({
      students: result,
      total: totalPure,
      page,
      totalPages: Math.ceil(totalPure / limit),
    });
  }

  // ── Standard user query ──
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { role: "student", isBot: false };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }

  if (tier && tier !== "all") {
    where.enrollments = { some: { tier } };
  }

  // Count total users
  const totalUsers = await prisma.user.count({ where });

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
      enrollments: { where: { status: "active" }, orderBy: { createdAt: "desc" }, take: 1 },
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
    isLead: false,
  }));

  // Post-sort by XP or progress if needed
  if (sort === "xp_desc") result.sort((a, b) => b.totalXP - a.totalXP);
  else if (sort === "xp_asc") result.sort((a, b) => a.totalXP - b.totalXP);
  else if (sort === "progress_desc") result.sort((a, b) => b.completedLessons - a.completedLessons);

  // Paginate post-sorted results
  if (isPostSort) result = result.slice((page - 1) * limit, page * limit);

  // ── If "all": also fetch pure leads (no account) and merge ──
  let totalWithLeads = totalUsers;
  if (!tier || tier === "all") {
    // Get emails of all students to exclude from leads
    const allStudentEmails = new Set(
      (await prisma.user.findMany({
        where: { role: "student" },
        select: { email: true },
      })).map((u) => u.email.toLowerCase())
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const leadSearch: any = {};
    if (search) {
      leadSearch.email = { contains: search, mode: "insensitive" };
    }

    const allLeads = await prisma.lead.findMany({
      where: leadSearch,
      orderBy: { createdAt: "desc" },
      take: 50, // cap leads shown in "all" view
    });

    const pureLeads = allLeads.filter((l) => !allStudentEmails.has(l.email.toLowerCase()));

    const leadResults = pureLeads.map((l) => ({
      id: `lead_${l.id}`,
      name: null,
      email: l.email,
      createdAt: l.createdAt.toISOString(),
      completedLessons: 0,
      totalLessons,
      tier: "lead" as string | null,
      lastActive: null as string | null,
      discordUsername: null as string | null,
      totalXP: 0,
      isBot: false,
      isLead: true,
      leadStatus: l.status,
      leadSource: l.source,
      leadConvertedAt: l.convertedAt?.toISOString() || null,
    }));

    // Merge: add leads at the end, then re-sort by date
    result = [...result, ...leadResults].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    // Re-paginate merged results
    totalWithLeads = totalUsers + pureLeads.length;
    result = result.slice((page - 1) * limit, page * limit);
  }

  return NextResponse.json({
    students: result,
    total: (!tier || tier === "all") ? totalWithLeads : totalUsers,
    page,
    totalPages: Math.ceil(((!tier || tier === "all") ? totalWithLeads : totalUsers) / limit),
  });
  } catch (error) {
    console.error("GET /api/admin/students error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
