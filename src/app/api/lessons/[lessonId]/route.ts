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
  const userId = session.user.id;

  const lesson = await prisma.lesson.findUnique({
    where: { slug },
    include: {
      module: true,
      quiz: {
        include: {
          submissions: {
            where: { userId, passed: true },
            take: 1,
          },
        },
      },
      progress: { where: { userId } },
    },
  });

  if (!lesson) {
    return NextResponse.json({ error: "Lecon introuvable" }, { status: 404 });
  }

  // Admin has full access — skip progress tracking
  const isAdmin = session.user.role === "admin";
  const prog = lesson.progress[0];

  if (!isAdmin) {
    try {
      if (!prog) {
        await prisma.lessonProgress.create({
          data: { userId, lessonId: lesson.id, status: "in_progress" },
        });
      } else if (prog.status === "locked") {
        await prisma.lessonProgress.update({
          where: { id: prog.id },
          data: { status: "in_progress" },
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
    } catch {
      // Progress tracking failed (e.g. stale session userId) — continue anyway
      console.warn("Could not track progress for userId:", userId);
    }
  }

  // Get prev/next slugs
  const allLessons = await prisma.lesson.findMany({
    orderBy: [{ moduleId: "asc" }, { order: "asc" }],
    select: { slug: true, order: true },
  });

  const idx = allLessons.findIndex((l) => l.slug === slug);
  const prevSlug = idx > 0 ? allLessons[idx - 1].slug : null;
  const nextSlug = idx < allLessons.length - 1 ? allLessons[idx + 1].slug : null;

  return NextResponse.json({
    id: lesson.id,
    title: lesson.title,
    slug: lesson.slug,
    description: lesson.description,
    content: lesson.content,
    videoUrl: lesson.videoUrl,
    pdfUrl: lesson.pdfUrl,
    exercise: lesson.exercise,
    duration: lesson.duration,
    order: lesson.order,
    moduleTitle: lesson.module.title,
    moduleOrder: lesson.module.order,
    hasQuiz: !!lesson.quiz,
    quizPassed: (lesson.quiz?.submissions?.length ?? 0) > 0,
    status: prog?.status || "in_progress",
    prevSlug,
    nextSlug,
  });
}
