import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS } from "@/lib/constants";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const userId = session.user.id;
  const isAdmin = session.user.role === "admin";

  // Fetch user's enrollment tier
  let userTier = "starter";
  if (isAdmin) {
    userTier = "academy";
  } else {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    if (enrollment) {
      userTier = enrollment.tier;
    }
  }

  const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.starter;

  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        include: {
          progress: { where: { userId } },
          quiz: {
            include: {
              submissions: {
                where: { userId, passed: true },
                take: 1,
              },
            },
          },
        },
      },
    },
  });

  const result = modules.map((mod) => {
    const hasAccess = accessibleModules.includes(mod.order);

    return {
      id: mod.id,
      title: mod.title,
      description: mod.description,
      order: mod.order,
      lessons: mod.lessons.map((lesson) => {
        const prog = lesson.progress[0];
        let status: string = "locked";

        if (!hasAccess) {
          // Module not accessible for this tier — all lessons locked
          status = "locked";
        } else if (isAdmin) {
          status = prog?.status === "completed" ? "completed" : "in_progress";
        } else if (prog) {
          status = prog.status;
        } else if (lesson.order === 1) {
          status = "in_progress";
        }

        return {
          id: lesson.id,
          title: lesson.title,
          slug: lesson.slug,
          description: lesson.description,
          order: lesson.order,
          duration: lesson.duration,
          status,
          quizPassed: (lesson.quiz?.submissions?.length ?? 0) > 0,
          hasQuiz: !!lesson.quiz,
          xpEarned: prog?.xpEarned || 0,
        };
      }),
    };
  });

  return NextResponse.json({ modules: result, userTier });
}
