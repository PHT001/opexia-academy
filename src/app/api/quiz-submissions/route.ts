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
    const TIER_PRIORITY: Record<string, number> = { free: 0, starter: 1, academy: 2, one_to_one: 3 };
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: userId, status: "active" },
    });
    const bestEnrollment = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0))[0];
    const userTier = bestEnrollment?.tier || "free";
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

  // Limit to 3 attempts per quiz
  const attemptCount = await prisma.quizSubmission.count({
    where: { userId, quizId: quiz.id },
  });
  if (attemptCount >= 3) {
    return NextResponse.json({ error: "Nombre maximum de tentatives atteint (3)" }, { status: 429 });
  }

  // Grade answers
  let correct = 0;
  const details = quiz.questions.map((q) => {
    const userAnswer = answers[q.id] || "";
    const correctAnswer = q.correctAnswer;
    const options = JSON.parse(q.options) as string[];
    if (userAnswer && !options.includes(userAnswer)) {
      // Invalid answer, treat as wrong
      return { question: q.question, userAnswer: "", correctAnswer, isCorrect: false, explanation: q.explanation || undefined };
    }
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

  // Save submission + update progress in a transaction
  let xpEarned = 0;

  await prisma.$transaction(async (tx) => {
    await tx.quizSubmission.create({
      data: {
        userId,
        quizId: quiz.id,
        score,
        answers: JSON.stringify(answers),
        passed,
      },
    });

    if (passed) {
      xpEarned = XP_VALUES.QUIZ_PASS;
      if (score === 100) xpEarned += XP_VALUES.QUIZ_PERFECT;

      // Mark lesson as completed — keep highest XP on retake
      const newXp = XP_VALUES.LESSON_COMPLETE + xpEarned;
      const existing = await tx.lessonProgress.findUnique({
        where: { userId_lessonId: { userId, lessonId: lesson.id } },
      });
      const bestXp = existing ? Math.max(existing.xpEarned, newXp) : newXp;
      await tx.lessonProgress.upsert({
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
      const allLessons = await tx.lesson.findMany({
        orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
        select: { id: true, slug: true },
      });
      const idx = allLessons.findIndex((l) => l.id === lesson.id);
      if (idx < allLessons.length - 1) {
        const nextLesson = allLessons[idx + 1];
        await tx.lessonProgress.upsert({
          where: { userId_lessonId: { userId, lessonId: nextLesson.id } },
          update: { status: "in_progress" },
          create: { userId, lessonId: nextLesson.id, status: "in_progress" },
        });
      }

      // Check if module is now complete — award MODULE_COMPLETE bonus
      const moduleId = lesson.moduleId;
      const moduleLessons = await tx.lesson.findMany({ where: { moduleId }, select: { id: true } });
      const otherLessonIds = moduleLessons.filter((l) => l.id !== lesson.id).map((l) => l.id);
      const alreadyCompletedOthers = await tx.lessonProgress.count({
        where: { userId, lessonId: { in: otherLessonIds }, status: "completed" },
      });
      const wasAlreadyAllComplete = existing?.status === "completed" && alreadyCompletedOthers === otherLessonIds.length;
      const completedInModule = alreadyCompletedOthers + 1; // +1 for current lesson just completed
      if (completedInModule === moduleLessons.length && !wasAlreadyAllComplete) {
        // First time all lessons in module completed — award bonus XP
        await tx.lessonProgress.update({
          where: { userId_lessonId: { userId, lessonId: lesson.id } },
          data: { xpEarned: { increment: XP_VALUES.MODULE_COMPLETE } },
        });
      }

      // Record streak
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      await tx.streak.upsert({
        where: { userId_date: { userId, date: today } },
        update: {},
        create: { userId, date: today },
      });
    }
  });

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
