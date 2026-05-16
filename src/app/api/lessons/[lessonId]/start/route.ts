// Fire-and-forget endpoint that marks a lesson as "in progress" + records
// today's streak. Client calls this AFTER the lesson content has been
// rendered, so it never blocks the read path.

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const { lessonId: slug } = await params;
  const userId = session.user.id;
  const isAdmin = session.user.role === "admin";
  if (isAdmin) {
    return NextResponse.json({ ok: true, skipped: "admin" });
  }

  try {
    const lesson = await prisma.lesson.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!lesson) return NextResponse.json({ ok: false }, { status: 404 });

    // Track progress + streak in parallel
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await Promise.all([
      prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId, lessonId: lesson.id } },
        create: { userId, lessonId: lesson.id, status: "in_progress" },
        update: { status: "in_progress" },
      }),
      prisma.streak.upsert({
        where: { userId_date: { userId, date: today } },
        update: {},
        create: { userId, date: today },
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.warn("[/api/lessons/[id]/start] tracking failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
