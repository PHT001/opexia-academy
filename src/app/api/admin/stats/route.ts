import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  const totalStudents = await prisma.user.count({ where: { role: "student" } });

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const activeStudents = await prisma.streak.groupBy({
    by: ["userId"],
    where: { date: { gte: sevenDaysAgo } },
  });

  const totalLessons = await prisma.lesson.count();

  const completions = await prisma.lessonProgress.findMany({
    where: { status: "completed" },
  });

  const avgCompletion = totalStudents > 0 && totalLessons > 0
    ? Math.round((completions.length / (totalStudents * totalLessons)) * 100)
    : 0;

  const submissions = await prisma.quizSubmission.findMany();
  const avgQuizScore = submissions.length > 0
    ? Math.round(submissions.reduce((sum, s) => sum + s.score, 0) / submissions.length)
    : 0;

  const oneDayAgo = new Date();
  oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  const completionsToday = await prisma.lessonProgress.count({
    where: { status: "completed", completedAt: { gte: oneDayAgo } },
  });

  return NextResponse.json({
    totalStudents,
    activeStudents: activeStudents.length,
    avgCompletion,
    avgQuizScore,
    totalLessons,
    completionsToday,
  });
}
