import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { tier, subject, message } = body;

    // --- Input validation ---
    const ALLOWED_TIERS = ["tous", "starter", "academy", "one_to_one", "free", "inactive", "no_purchase"];

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json({ error: "Le sujet est requis" }, { status: 400 });
    }
    if (subject.length > 200) {
      return NextResponse.json({ error: "Le sujet ne doit pas depasser 200 caracteres" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Le message est requis" }, { status: 400 });
    }
    if (message.length > 50000) {
      return NextResponse.json({ error: "Le message ne doit pas depasser 50000 caracteres" }, { status: 400 });
    }

    if (tier !== undefined && !ALLOWED_TIERS.includes(tier)) {
      return NextResponse.json(
        { error: `Tier invalide. Valeurs acceptees: ${ALLOWED_TIERS.join(", ")}` },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json({ error: "Service email non configure" }, { status: 500 });
    }

    // Build user filter based on tier/filter value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let where: any = { role: "student" };
    let users: { id: string; email: string; name: string | null }[];

    if (tier === "free") {
      // Users with "free" enrollment or no enrollment at all
      const freeEnrolled = await prisma.user.findMany({
        where: { role: "student", enrollments: { some: { tier: "free" } } },
        select: { id: true, email: true, name: true },
      });
      const noEnrollment = await prisma.user.findMany({
        where: { role: "student", enrollments: { none: {} } },
        select: { id: true, email: true, name: true },
      });
      const seen = new Set<string>();
      users = [...freeEnrolled, ...noEnrollment].filter((u) => {
        if (seen.has(u.id)) return false;
        seen.add(u.id);
        return true;
      });
    } else if (tier === "inactive") {
      // Users whose last streak is >14 days ago or have no streaks
      const fourteenDaysAgo = new Date();
      fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
      const allStudents = await prisma.user.findMany({
        where: { role: "student" },
        select: {
          id: true,
          email: true,
          name: true,
          streaks: { orderBy: { date: "desc" }, take: 1 },
        },
      });
      users = allStudents
        .filter((u) => {
          if (u.streaks.length === 0) return true;
          return new Date(u.streaks[0].date) < fourteenDaysAgo;
        })
        .map(({ id, email, name }) => ({ id, email, name }));
    } else if (tier === "no_purchase") {
      // Users with no enrollment at all
      users = await prisma.user.findMany({
        where: { role: "student", enrollments: { none: {} } },
        select: { id: true, email: true, name: true },
      });
    } else {
      if (tier && tier !== "tous") {
        where = { ...where, enrollments: { some: { tier } } };
      }
      users = await prisma.user.findMany({
        where,
        select: { id: true, email: true, name: true },
      });
    }

    const validUsers = users.filter((u) => u.email);

    let sentCount = 0;

    // Send emails in batches of 50
    const batchSize = 50;
    for (let i = 0; i < validUsers.length; i += batchSize) {
      const batch = validUsers.slice(i, i + batchSize);
      const promises = batch.map((user) =>
        resend.emails
          .send({
            from: "Marius d'OpexIA <support@opexia-formation.com>",
            to: user.email!,
            subject,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px;">
                <div style="text-align: center; margin-bottom: 32px;">
                  <span style="font-size: 24px; font-weight: bold;">
                    <span style="color: #111;">Opex</span><span style="color: #FF1744;">IA</span>
                  </span>
                </div>
                <p style="color: #111; font-size: 15px; margin-bottom: 8px;">Bonjour ${escapeHtml(user.name || "")},</p>
                <div style="color: #333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
                <p style="color: #999; font-size: 12px; text-align: center;">OpexIA Academy</p>
              </div>
            `,
          })
          .then(async () => {
            sentCount++;
            try {
              await prisma.emailLog.create({
                data: {
                  userId: user.id,
                  type: "manual",
                  sequence: null,
                  subject,
                  status: "sent",
                },
              });
            } catch (logErr) {
              console.error(`Failed to log manual email for ${user.email}:`, logErr instanceof Error ? logErr.message : logErr);
            }
          })
          .catch(() => {
            // Skip failed sends
          })
      );
      await Promise.all(promises);
    }

    return NextResponse.json({ sent: sentCount });
  } catch (error) {
    console.error("POST /api/admin/send-email error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");

    // Count recipients for a given filter
    if (action === "count") {
      const tier = searchParams.get("tier") || "tous";
      let count = 0;

      if (tier === "free") {
        const freeEnrolled = await prisma.user.count({
          where: { role: "student", enrollments: { some: { tier: "free" } } },
        });
        const noEnrollment = await prisma.user.count({
          where: { role: "student", enrollments: { none: {} } },
        });
        // Approximate (may double-count, but close enough for preview)
        count = freeEnrolled + noEnrollment;
      } else if (tier === "inactive") {
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
        const allStudents = await prisma.user.findMany({
          where: { role: "student" },
          select: { streaks: { orderBy: { date: "desc" as const }, take: 1 } },
        });
        count = allStudents.filter((u) => {
          if (u.streaks.length === 0) return true;
          return new Date(u.streaks[0].date) < fourteenDaysAgo;
        }).length;
      } else if (tier === "no_purchase") {
        count = await prisma.user.count({
          where: { role: "student", enrollments: { none: {} } },
        });
      } else if (tier && tier !== "tous") {
        count = await prisma.user.count({
          where: { role: "student", enrollments: { some: { tier } } },
        });
      } else {
        count = await prisma.user.count({ where: { role: "student" } });
      }

      return NextResponse.json({ count });
    }

    // Fetch email history (recent manual emails)
    if (action === "history") {
      try {
        const recentEmails = await prisma.emailLog.findMany({
          where: { type: "manual" },
          orderBy: { createdAt: "desc" },
          take: 200,
          select: { subject: true, createdAt: true, status: true },
        });

        // Group by subject + same-minute timestamp to show as batches
        const batches: { subject: string; createdAt: string; count: number; status: string }[] = [];
        const batchMap = new Map<string, { subject: string; createdAt: string; count: number; failed: number }>();

        for (const log of recentEmails) {
          const minuteKey = new Date(log.createdAt).toISOString().slice(0, 16);
          const key = `${log.subject}|||${minuteKey}`;
          const existing = batchMap.get(key);
          if (existing) {
            existing.count++;
            if (log.status === "failed") existing.failed++;
          } else {
            batchMap.set(key, {
              subject: log.subject,
              createdAt: log.createdAt instanceof Date ? log.createdAt.toISOString() : String(log.createdAt),
              count: 1,
              failed: log.status === "failed" ? 1 : 0,
            });
          }
        }

        for (const batch of batchMap.values()) {
          batches.push({
            subject: batch.subject,
            createdAt: batch.createdAt,
            count: batch.count,
            status: batch.failed > 0 ? `${batch.count - batch.failed} envoyés, ${batch.failed} échoués` : `${batch.count} envoyés`,
          });
        }

        return NextResponse.json({ history: batches });
      } catch {
        // EmailLog table may not exist yet
        return NextResponse.json({ history: [] });
      }
    }

    return NextResponse.json({ error: "Action invalide" }, { status: 400 });
  } catch (error) {
    console.error("GET /api/admin/send-email error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
