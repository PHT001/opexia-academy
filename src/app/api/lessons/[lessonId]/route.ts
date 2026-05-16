import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS, TIER_PRIORITY } from "@/lib/constants";
import { findBlockingModule } from "@/lib/mvp-gating";

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
      progress: { where: { userId } },
    },
  });

  if (!lesson) {
    return NextResponse.json({ error: "Lecon introuvable" }, { status: 404 });
  }

  // Admin has full access — skip progress tracking
  const isAdmin = session.user.role === "admin";

  // Tier/access check — ensure user has access to this module
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

    // MVP gating · block lessons in modules whose previous MVPs are not approved
    const blockingModule = await findBlockingModule(userId, lesson.module.order);
    if (blockingModule !== null) {
      return NextResponse.json({
        error: "Module verrouille",
        reason: "mvp_required",
        blockingModule,
        message: `Tu dois d'abord soumettre et faire valider ton MVP du Module ${blockingModule} pour debloquer ce module.`,
      }, { status: 403 });
    }
  }

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

  // Compute prev/next slugs + isLastInModule via targeted queries
  // (the previous global findMany scanned 111+ lessons on every lesson load).
  const lessonsInModule = await prisma.lesson.findMany({
    where: { moduleId: lesson.moduleId },
    orderBy: { order: "asc" },
    select: { slug: true, order: true },
  });

  const isFirstInModule = lessonsInModule[0]?.slug === lesson.slug;
  const isLastInModule = lessonsInModule[lessonsInModule.length - 1]?.slug === lesson.slug;
  const lessonIdxInModule = lessonsInModule.findIndex((l) => l.slug === lesson.slug);

  let prevSlug: string | null = lessonIdxInModule > 0 ? lessonsInModule[lessonIdxInModule - 1].slug : null;
  let nextSlug: string | null =
    lessonIdxInModule > -1 && lessonIdxInModule < lessonsInModule.length - 1
      ? lessonsInModule[lessonIdxInModule + 1].slug
      : null;

  // If this lesson is first/last of its module, hop to the adjacent module's edge lesson
  if (!prevSlug && isFirstInModule) {
    const prevModule = await prisma.module.findFirst({
      where: { order: { lt: lesson.module.order } },
      orderBy: { order: "desc" },
      include: { lessons: { orderBy: { order: "desc" }, take: 1, select: { slug: true } } },
    });
    prevSlug = prevModule?.lessons[0]?.slug ?? null;
  }
  if (!nextSlug && isLastInModule) {
    const nextModule = await prisma.module.findFirst({
      where: { order: { gt: lesson.module.order } },
      orderBy: { order: "asc" },
      include: { lessons: { orderBy: { order: "asc" }, take: 1, select: { slug: true } } },
    });
    nextSlug = nextModule?.lessons[0]?.slug ?? null;
  }

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
    status: prog?.status || "in_progress",
    prevSlug,
    nextSlug,
    isLastInModule,
  });
}
