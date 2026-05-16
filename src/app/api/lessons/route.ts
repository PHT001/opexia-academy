import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS, TIER_PRIORITY } from "@/lib/constants";
import { findBlockingModule, MVP_GATING_STARTS_AT } from "@/lib/mvp-gating";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
    const userId = session.user.id;
    const isAdmin = session.user.role === "admin";

    // Fetch user's enrollment tier (highest tier wins)
    let userTier = "free";
    if (isAdmin) {
      userTier = "standard";
    } else {
      const enrollments = await prisma.enrollment.findMany({
        where: { userId, status: { in: ["active", "upgraded"] } },
      });
      const best = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0))[0];
      if (best) {
        userTier = best.tier;
      }
    }

    const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.free;

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
                _count: {
                  select: { questions: true },
                },
              },
            },
          },
        },
      },
    });

    // Determine the first MVP-blocked module (if any).
    // Admins bypass MVP gating entirely.
    let mvpBlockedFrom: number | null = null;
    if (!isAdmin) {
      for (const mod of modules) {
        if (mod.order <= MVP_GATING_STARTS_AT) continue;
        const blocking = await findBlockingModule(userId, mod.order);
        if (blocking !== null) {
          mvpBlockedFrom = mod.order;
          break;
        }
      }
    }

    const result = modules.map((mod) => {
      const hasTierAccess = accessibleModules.includes(mod.order);
      const mvpLocked = mvpBlockedFrom !== null && mod.order >= mvpBlockedFrom;
      const locked = !hasTierAccess || mvpLocked;

      return {
        id: mod.id,
        title: mod.title,
        description: mod.description,
        order: mod.order,
        locked,
        lockReason: !hasTierAccess ? "tier" : mvpLocked ? "mvp" : null,
        lessons: mod.lessons.map((lesson) => {
          const prog = lesson.progress[0];
          let status: string = "locked";

          if (locked) {
            status = "locked";
          } else if (prog?.status === "completed") {
            status = "completed";
          } else {
            // All lessons in an accessible module are available immediately
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
            questionCount: lesson.quiz?._count?.questions ?? 0,
            xpEarned: prog?.xpEarned || 0,
          };
        }),
      };
    });

    return NextResponse.json({ modules: result, userTier, mvpBlockedFrom });
  } catch (error) {
    console.error("GET /api/lessons error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
