import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS, TIER_PRIORITY } from "@/lib/constants";
import { findBlockingModule } from "@/lib/mvp-gating";

// Read-only endpoint · returns the lesson content + nav. Progress tracking +
// streak recording have been moved to /api/lessons/[lessonId]/start (POST,
// fire-and-forget from the client) so the GET stays under 200ms.

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
  const isAdmin = session.user.role === "admin";

  // Single query for the lesson with module + progress.
  const lesson = await prisma.lesson.findUnique({
    where: { slug },
    include: {
      module: true,
      progress: { where: { userId }, take: 1 },
    },
  });

  if (!lesson) {
    return NextResponse.json({ error: "Lecon introuvable" }, { status: 404 });
  }

  // Run access checks + neighbour lookups in parallel.
  const [enrollments, lessonsInModule] = await Promise.all([
    isAdmin
      ? Promise.resolve([] as { tier: string }[])
      : prisma.enrollment.findMany({
          where: { userId, status: { in: ["active", "upgraded"] } },
          select: { tier: true },
        }),
    prisma.lesson.findMany({
      where: { moduleId: lesson.moduleId },
      orderBy: { order: "asc" },
      select: { slug: true, order: true },
    }),
  ]);

  if (!isAdmin) {
    let userTier = "free";
    const best = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0))[0];
    if (best) userTier = best.tier;
    const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.free;
    if (!accessibleModules.includes(lesson.module.order)) {
      return NextResponse.json({ error: "Acces non autorise pour votre forfait" }, { status: 403 });
    }

    const blockingModule = await findBlockingModule(userId, lesson.module.order);
    if (blockingModule !== null) {
      return NextResponse.json(
        {
          error: "Module verrouille",
          reason: "mvp_required",
          blockingModule,
          message: `Tu dois d'abord soumettre et faire valider ton MVP du Module ${blockingModule} pour debloquer ce module.`,
        },
        { status: 403 }
      );
    }
  }

  const isFirstInModule = lessonsInModule[0]?.slug === lesson.slug;
  const isLastInModule = lessonsInModule[lessonsInModule.length - 1]?.slug === lesson.slug;
  const idx = lessonsInModule.findIndex((l) => l.slug === lesson.slug);

  let prevSlug: string | null = idx > 0 ? lessonsInModule[idx - 1].slug : null;
  let nextSlug: string | null =
    idx > -1 && idx < lessonsInModule.length - 1 ? lessonsInModule[idx + 1].slug : null;

  // Edge hops to adjacent modules · parallelizable
  if ((!prevSlug && isFirstInModule) || (!nextSlug && isLastInModule)) {
    const [prevModule, nextModule] = await Promise.all([
      !prevSlug && isFirstInModule
        ? prisma.module.findFirst({
            where: { order: { lt: lesson.module.order } },
            orderBy: { order: "desc" },
            include: { lessons: { orderBy: { order: "desc" }, take: 1, select: { slug: true } } },
          })
        : Promise.resolve(null),
      !nextSlug && isLastInModule
        ? prisma.module.findFirst({
            where: { order: { gt: lesson.module.order } },
            orderBy: { order: "asc" },
            include: { lessons: { orderBy: { order: "asc" }, take: 1, select: { slug: true } } },
          })
        : Promise.resolve(null),
    ]);
    if (prevModule) prevSlug = prevModule.lessons[0]?.slug ?? null;
    if (nextModule) nextSlug = nextModule.lessons[0]?.slug ?? null;
  }

  const prog = lesson.progress[0];

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
