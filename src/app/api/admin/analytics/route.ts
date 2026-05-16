import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    // ── Total enrolled students (for completion rate denominator) ──
    const totalStudents = await prisma.enrollment.groupBy({
      by: ["userId"],
    });
    const totalStudentCount = totalStudents.length;

    // ── All modules with lessons ──
    const modules = await prisma.module.findMany({
      orderBy: { order: "asc" },
      include: {
        lessons: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            title: true,
            order: true,
          },
        },
      },
    });

    // ── Lesson completion counts (aggregated) ──
    const lessonCompletions = await prisma.lessonProgress.groupBy({
      by: ["lessonId"],
      where: { status: "completed" },
      _count: { lessonId: true },
    });
    const completionMap = new Map(
      lessonCompletions.map((lc) => [lc.lessonId, lc._count.lessonId])
    );

    // ── Build lessonStats ──
    const lessonStats = modules.flatMap((mod) =>
      mod.lessons.map((lesson) => {
        const completions = completionMap.get(lesson.id) || 0;
        const completionRate =
          totalStudentCount > 0
            ? Math.round((completions / totalStudentCount) * 100)
            : 0;
        return {
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          moduleTitle: mod.title,
          moduleOrder: mod.order,
          lessonOrder: lesson.order,
          completions,
          totalStudents: totalStudentCount,
          completionRate,
        };
      })
    );

    const quizStats: never[] = [];

    // ── Bottlenecks: top 5 lessons with biggest drop-off ──
    // Drop-off = difference in completion rate between lesson N and lesson N+1
    const sortedLessons = [...lessonStats].sort(
      (a, b) => a.moduleOrder - b.moduleOrder || a.lessonOrder - b.lessonOrder
    );

    const dropoffs: {
      lessonTitle: string;
      moduleTitle: string;
      dropoffRate: number;
    }[] = [];

    for (let i = 0; i < sortedLessons.length - 1; i++) {
      const current = sortedLessons[i];
      const next = sortedLessons[i + 1];
      const dropoff = current.completionRate - next.completionRate;
      if (dropoff > 0) {
        dropoffs.push({
          lessonTitle: current.lessonTitle,
          moduleTitle: current.moduleTitle,
          dropoffRate: dropoff,
        });
      }
    }

    dropoffs.sort((a, b) => b.dropoffRate - a.dropoffRate);
    const bottlenecks = dropoffs.slice(0, 5);

    return NextResponse.json({
      lessonStats,
      quizStats,
      bottlenecks,
    });
  } catch (error) {
    console.error("GET /api/admin/analytics error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
