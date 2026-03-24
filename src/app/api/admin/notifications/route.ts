import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // New registrations in last 7 days
  const newUsers = await prisma.user.findMany({
    where: { role: "student", createdAt: { gte: sevenDaysAgo } },
    select: { name: true, email: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  // New enrollments in last 7 days
  const newEnrollments = await prisma.enrollment.findMany({
    where: { createdAt: { gte: sevenDaysAgo } },
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  // Lesson completions in last 7 days
  const recentCompletions = await prisma.lessonProgress.findMany({
    where: { status: "completed", completedAt: { gte: sevenDaysAgo } },
    include: {
      user: { select: { name: true } },
      lesson: { select: { title: true } },
    },
    orderBy: { completedAt: "desc" },
    take: 50,
  });

  // Projects pending review
  const pendingProjects = await prisma.project.findMany({
    where: { status: "submitted", createdAt: { gte: sevenDaysAgo } },
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  // Build unified notifications array
  type Notification = {
    type: "registration" | "payment" | "completion" | "project";
    message: string;
    date: string;
    read: boolean;
  };

  const notifications: Notification[] = [];

  for (const u of newUsers) {
    notifications.push({
      type: "registration",
      message: `${u.name || u.email || "Nouvel utilisateur"} s'est inscrit`,
      date: u.createdAt.toISOString(),
      read: false,
    });
  }

  for (const e of newEnrollments) {
    const tierLabel =
      e.tier === "one_to_one" ? "One-to-One" : e.tier === "academy" ? "Academy" : "Starter";
    notifications.push({
      type: "payment",
      message: `${e.user.name || e.user.email || "Un eleve"} a souscrit a l'offre ${tierLabel}`,
      date: e.createdAt.toISOString(),
      read: false,
    });
  }

  for (const c of recentCompletions) {
    notifications.push({
      type: "completion",
      message: `${c.user.name || "Un eleve"} a termine "${c.lesson.title}"`,
      date: c.completedAt?.toISOString() || "",
      read: false,
    });
  }

  for (const p of pendingProjects) {
    notifications.push({
      type: "project",
      message: `${p.user.name || p.user.email || "Un élève"} a soumis le projet "${p.title}"`,
      date: p.createdAt.toISOString(),
      read: false,
    });
  }

  // Sort by date descending
  notifications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json({ notifications });
  } catch (error) {
    console.error("GET /api/admin/notifications error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
