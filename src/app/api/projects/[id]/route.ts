import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const isAdmin = (session.user as { role?: string }).role === "admin";
  if (!isAdmin) {
    return NextResponse.json({ error: "Acces interdit" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { status, feedback } = body;

    const validStatuses = ["submitted", "reviewing", "approved", "needs_revision"];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Statut invalide" },
        { status: 400 }
      );
    }

    const data: Record<string, string> = {};
    if (status) data.status = status;
    if (feedback !== undefined) data.feedback = feedback;

    const project = await prisma.project.update({
      where: { id },
      data,
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    // Send student notification
    if (resend && project.user?.email) {
      const statusLabels: Record<string, string> = {
        submitted: "Soumis",
        reviewing: "En cours de revue",
        approved: "Approuve",
        needs_revision: "A reviser",
      };
      const statusLabel = statusLabels[project.status] || project.status;
      const feedbackBlock = project.feedback
        ? `<p><strong>Feedback :</strong></p><p>${project.feedback}</p>`
        : "";

      await resend.emails.send({
        from: "Marius d'OpexIA <support@opexia-formation.com>",
        to: project.user.email,
        subject: `Ton projet "${project.title}" a ete mis a jour`,
        html: `<p>Salut${project.user.name ? ` ${project.user.name}` : ""},</p>
<p>Ton projet <strong>${project.title}</strong> a un nouveau statut : <strong>${statusLabel}</strong>.</p>
${feedbackBlock}
<p>Connecte-toi a la plateforme pour voir les details.</p>
<p>A bientot,<br>Marius d'OpexIA</p>`,
      }).catch((err) => {
        console.error("[Projects] Failed to send student notification:", err);
      });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("PATCH /api/projects/[id] error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
