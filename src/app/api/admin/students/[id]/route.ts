import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      enrollments: { orderBy: { createdAt: "desc" } },
      progress: {
        include: {
          lesson: {
            include: {
              module: true,
            },
          },
        },
        orderBy: { completedAt: "desc" },
      },
      streaks: { orderBy: { date: "desc" } },
    },
  });

  if (!user || user.role !== "student") {
    return NextResponse.json({ error: "Etudiant introuvable" }, { status: 404 });
  }

  // Fetch email logs (try-catch in case EmailLog table doesn't exist yet)
  let emailLogs: { id: string; type: string; sequence: number; subject: string; status: string; createdAt: string }[] = [];
  try {
    const rawLogs = await (prisma as any).emailLog.findMany({
      where: { userId: id },
      orderBy: { createdAt: "desc" },
    });
    emailLogs = rawLogs.map((log: any) => ({
      id: log.id,
      type: log.type,
      sequence: log.sequence,
      subject: log.subject,
      status: log.status,
      createdAt: log.createdAt instanceof Date ? log.createdAt.toISOString() : log.createdAt,
    }));
  } catch {
    // EmailLog table may not exist yet
  }

  // Calculate engagement score based on last activity (streak)
  const lastStreak = user.streaks.length > 0 ? user.streaks[0].date : null;
  const now = new Date();
  let daysSinceLastActivity = -1;
  if (lastStreak) {
    daysSinceLastActivity = Math.floor(
      (now.getTime() - new Date(lastStreak).getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  let engagement: "chaud" | "tiede" | "froid";
  if (lastStreak && daysSinceLastActivity <= 3) {
    engagement = "chaud";
  } else if (lastStreak && daysSinceLastActivity <= 14) {
    engagement = "tiede";
  } else {
    engagement = "froid";
  }

  // Contact alert: true if all email sequences completed AND no paid enrollment AND froid
  const sequenceTotals: Record<string, number> = {
    nurture: 3,
    free_followup: 3,
    drip: 2,
  };
  const sequenceCounts: Record<string, number> = {};
  for (const log of emailLogs) {
    if (sequenceTotals[log.type]) {
      sequenceCounts[log.type] = (sequenceCounts[log.type] || 0) + 1;
    }
  }
  const allSequencesCompleted = Object.entries(sequenceTotals).every(
    ([type, total]) => (sequenceCounts[type] || 0) >= total
  );
  const hasPaidEnrollment = user.enrollments.some(
    (e: any) => e.tier !== "starter" && e.status === "active"
  );
  const shouldContact = allSequencesCompleted && !hasPaidEnrollment && engagement === "froid";

  // Build module-by-module progress
  const moduleMap: Record<
    string,
    {
      moduleId: string;
      moduleTitle: string;
      moduleOrder: number;
      totalLessons: number;
      completedLessons: number;
      lessons: {
        lessonId: string;
        title: string;
        status: string;
        xpEarned: number;
        completedAt: string | null;
      }[];
    }
  > = {};

  for (const p of user.progress) {
    const mod = p.lesson.module;
    if (!moduleMap[mod.id]) {
      moduleMap[mod.id] = {
        moduleId: mod.id,
        moduleTitle: mod.title,
        moduleOrder: mod.order,
        totalLessons: 0,
        completedLessons: 0,
        lessons: [],
      };
    }
    moduleMap[mod.id].lessons.push({
      lessonId: p.lessonId,
      title: p.lesson.title,
      status: p.status,
      xpEarned: p.xpEarned,
      completedAt: p.completedAt?.toISOString() || null,
    });
    if (p.status === "completed") {
      moduleMap[mod.id].completedLessons++;
    }
  }

  // Get total lessons per module for modules in progress
  const moduleIds = Object.keys(moduleMap);
  if (moduleIds.length > 0) {
    const lessonCounts = await prisma.lesson.groupBy({
      by: ["moduleId"],
      where: { moduleId: { in: moduleIds } },
      _count: true,
    });
    for (const lc of lessonCounts) {
      if (moduleMap[lc.moduleId]) {
        moduleMap[lc.moduleId].totalLessons = lc._count;
      }
    }
  }

  const moduleProgress = Object.values(moduleMap).sort(
    (a, b) => a.moduleOrder - b.moduleOrder
  );

  const totalLessons = moduleProgress.reduce((s, m) => s + m.totalLessons, 0);
  const completedLessons = moduleProgress.reduce((s, m) => s + m.completedLessons, 0);
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // XP timeline from progress entries
  const xpTimeline = user.progress
    .filter((p) => p.xpEarned > 0 && p.completedAt)
    .map((p) => ({
      date: p.completedAt!.toISOString(),
      xp: p.xpEarned,
      lesson: p.lesson.title,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Total XP
  const totalXP = user.progress.reduce((sum, p) => sum + p.xpEarned, 0);

  return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    discordUsername: user.discordUsername,
    age: user.age,
    profession: user.profession,
    createdAt: user.createdAt.toISOString(),
    onboardingCompleted: user.onboardingCompleted,
    adminNotes: user.adminNotes || null,
    enrollment: user.enrollments[0]
      ? {
          id: user.enrollments[0].id,
          tier: user.enrollments[0].tier,
          status: user.enrollments[0].status,
          createdAt: user.enrollments[0].createdAt.toISOString(),
        }
      : null,
    totalXP,
    totalLessons,
    completedLessons,
    completionPercentage,
    moduleProgress,
    quizHistory: [],
    streaks: user.streaks.map((s) => ({
      id: s.id,
      date: s.date.toISOString(),
    })),
    xpTimeline,
    emailLogs,
    engagement,
    shouldContact,
    daysSinceLastActivity,
  });
  } catch (error) {
    console.error("GET /api/admin/students/[id] error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user || user.role !== "student") {
      return NextResponse.json({ error: "Etudiant introuvable" }, { status: 404 });
    }

    // Delete all related records, then the user
    await prisma.$transaction([
      prisma.lessonProgress.deleteMany({ where: { userId: id } }),
      prisma.streak.deleteMany({ where: { userId: id } }),
      prisma.enrollment.deleteMany({ where: { userId: id } }),
      prisma.referral.deleteMany({ where: { referrerId: id } }),
      prisma.referral.deleteMany({ where: { referredId: id } }),
      prisma.pipelineDeal.deleteMany({ where: { userId: id } }),
      prisma.note.deleteMany({ where: { userId: id } }),
      prisma.project.deleteMany({ where: { userId: id } }),
      prisma.emailLog.deleteMany({ where: { userId: id } }),
      prisma.user.delete({ where: { id } }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/students/[id] error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = await req.json();
    const { tier, adminNotes, suspended } = body;

    // Check user exists
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user || user.role !== "student") {
      return NextResponse.json({ error: "Etudiant introuvable" }, { status: 404 });
    }

    // Handle suspend/reactivate (uses enrollment status)
    if (suspended !== undefined) {
      if (suspended) {
        // Suspend: mark all active enrollments as suspended
        await prisma.enrollment.updateMany({
          where: { userId: id, status: "active" },
          data: { status: "suspended" },
        });
      } else {
        // Reactivate: mark all suspended enrollments as active
        await prisma.enrollment.updateMany({
          where: { userId: id, status: "suspended" },
          data: { status: "active" },
        });
      }
      return NextResponse.json({ success: true, suspended: !!suspended });
    }

    // Handle adminNotes update
    if (adminNotes !== undefined) {
      await prisma.user.update({
        where: { id },
        data: { adminNotes },
      });
      return NextResponse.json({ success: true, adminNotes });
    }

    if (!tier || !["starter", "academy", "one_to_one"].includes(tier)) {
      return NextResponse.json({ error: "Tier invalide" }, { status: 400 });
    }

    // Find existing enrollment
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: { userId: id },
      orderBy: { createdAt: "desc" },
    });

    let enrollment;
    if (existingEnrollment) {
      enrollment = await prisma.enrollment.update({
        where: { id: existingEnrollment.id },
        data: { tier },
      });
    } else {
      enrollment = await prisma.enrollment.create({
        data: { userId: id, tier },
      });
    }

    return NextResponse.json({
      id: enrollment.id,
      tier: enrollment.tier,
      status: enrollment.status,
      createdAt: enrollment.createdAt.toISOString(),
    });
  } catch (error) {
    console.error("PATCH /api/admin/students/[id] error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
