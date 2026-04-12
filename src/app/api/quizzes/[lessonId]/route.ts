import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS, TIER_PRIORITY } from "@/lib/constants";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
    const { lessonId: slug } = await params;
    const userId = session.user.id;

    const lesson = await prisma.lesson.findUnique({
      where: { slug },
      include: {
        module: true,
        quiz: {
          include: {
            questions: {
              orderBy: { order: "asc" },
            },
          },
        },
      },
    });

    if (!lesson?.quiz) {
      return NextResponse.json({ error: "Quiz introuvable" }, { status: 404 });
    }

    // Tier/access check
    const isAdmin = session.user.role === "admin";
    if (!isAdmin) {
      let userTier = "free";
      const enrollments = await prisma.enrollment.findMany({
        where: { userId, status: { in: ["active", "upgraded"] } },
      });
      const bestEnrollment = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0))[0];
      if (bestEnrollment) {
        userTier = bestEnrollment.tier;
      }
      const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.free;
      if (!accessibleModules.includes(lesson.module.order)) {
        return NextResponse.json({ error: "Acces non autorise pour votre forfait" }, { status: 403 });
      }
    }

    // Don't send correct answers to client
    const questions = lesson.quiz.questions.map((q) => ({
      id: q.id,
      type: q.type,
      question: q.question,
      options: JSON.parse(q.options),
      order: q.order,
    }));

    return NextResponse.json({
      quizId: lesson.quiz.id,
      lessonTitle: lesson.title,
      passingScore: lesson.quiz.passingScore,
      questions,
    });
  } catch (error) {
    console.error("GET /api/quizzes/[lessonId] error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
