import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  const totalLessons = await prisma.lesson.count();

  const students = await prisma.user.findMany({
    where: { role: "student" },
    orderBy: { createdAt: "desc" },
    include: {
      progress: { where: { status: "completed" } },
      streaks: { orderBy: { date: "desc" }, take: 1 },
    },
  });

  const result = students.map((s) => ({
    id: s.id,
    name: s.name,
    email: s.email,
    createdAt: s.createdAt.toISOString(),
    completedLessons: s.progress.length,
    totalLessons,
    lastActive: s.streaks[0]?.date?.toISOString() || null,
  }));

  return NextResponse.json(result);
}
