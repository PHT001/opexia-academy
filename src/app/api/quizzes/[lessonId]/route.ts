import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { lessonId: slug } = await params;

  const lesson = await prisma.lesson.findUnique({
    where: { slug },
    include: {
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
}
