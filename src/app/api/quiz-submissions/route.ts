import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { XP_VALUES, TIER_MODULE_ACCESS } from "@/lib/constants";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
  const userId = session.user.id;
  const body = await request.json();
  const { lessonSlug, answers } = body as {
    lessonSlug: string;
    answers: Record<string, string>;
  };

  // Get quiz with correct answers
  const lesson = await prisma.lesson.findUnique({
    where: { slug: lessonSlug },
    select: {
      id: true,
      slug: true,
      moduleId: true,
      quiz: {
        include: {
          questions: { orderBy: { order: "asc" } },
        },
      },
    },
  });

  if (!lesson?.quiz) {
    return NextResponse.json({ error: "Quiz introuvable" }, { status: 404 });
  }

  // Tier/access check — verify user can access this module
  const isAdmin = session.user.role === "admin";
  if (!isAdmin) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: userId, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    const userTier = enrollment?.tier || "free";
    const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.free;
    const lessonModule = await prisma.module.findUnique({
      where: { id: lesson.moduleId },
      select: { order: true },
    });
    if (!lessonModule || !accessibleModules.includes(lessonModule.order)) {
      return NextResponse.json({ error: "Acces non autorise pour votre forfait" }, { status: 403 });
    }
  }

  const quiz = lesson.quiz;

  // Grade answers
  let correct = 0;
  const details = quiz.questions.map((q) => {
    const userAnswer = answers[q.id] || "";
    const correctAnswer = q.correctAnswer;
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) correct++;
    return {
      question: q.question,
      userAnswer,
      correctAnswer,
      isCorrect,
      explanation: q.explanation || undefined,
    };
  });

  const total = quiz.questions.length;
  const score = Math.round((correct / total) * 100);
  const passed = score >= quiz.passingScore;

  // Save submission
  await prisma.quizSubmission.create({
    data: {
      userId,
      quizId: quiz.id,
      score,
      answers: JSON.stringify(answers),
      passed,
    },
  });

  let xpEarned = 0;

  if (passed) {
    xpEarned = XP_VALUES.QUIZ_PASS;
    if (score === 100) xpEarned += XP_VALUES.QUIZ_PERFECT;

    // Mark lesson as completed — keep highest XP on retake
    const newXp = XP_VALUES.LESSON_COMPLETE + xpEarned;
    const existing = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
    });
    const bestXp = existing ? Math.max(existing.xpEarned, newXp) : newXp;
    await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      update: {
        status: "completed",
        completedAt: new Date(),
        xpEarned: bestXp,
      },
      create: {
        userId,
        lessonId: lesson.id,
        status: "completed",
        completedAt: new Date(),
        xpEarned: newXp,
      },
    });

    // Unlock next lesson
    const allLessons = await prisma.lesson.findMany({
      orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
      select: { id: true, slug: true },
    });
    const idx = allLessons.findIndex((l) => l.id === lesson.id);
    if (idx < allLessons.length - 1) {
      const nextLesson = allLessons[idx + 1];
      await prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId, lessonId: nextLesson.id } },
        update: { status: "in_progress" },
        create: { userId, lessonId: nextLesson.id, status: "in_progress" },
      });
    }

    // Check if module is now complete — award MODULE_COMPLETE bonus
    const moduleId = lesson.moduleId;
    const moduleLessons = await prisma.lesson.findMany({ where: { moduleId }, select: { id: true } });
    const completedInModule = await prisma.lessonProgress.count({
      where: { userId, lessonId: { in: moduleLessons.map((l) => l.id) }, status: "completed" },
    });
    if (completedInModule === moduleLessons.length) {
      // All lessons in module completed — award bonus XP to last lesson
      await prisma.lessonProgress.update({
        where: { userId_lessonId: { userId, lessonId: lesson.id } },
        data: { xpEarned: { increment: XP_VALUES.MODULE_COMPLETE } },
      });
    }

    // Record streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    await prisma.streak.upsert({
      where: { userId_date: { userId, date: today } },
      update: {},
      create: { userId, date: today },
    });
  }

  return NextResponse.json({
    score,
    passed,
    total,
    correct,
    xpEarned,
    questions: details,
  });
  } catch (error) {
    console.error("POST /api/quiz-submissions error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
