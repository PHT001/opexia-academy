import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const createProjectSchema = z.object({
  title: z.string().min(1, "Le titre est requis").max(200, "Le titre ne doit pas depasser 200 caracteres"),
  description: z.string().min(1, "La description est requise").max(5000, "La description ne doit pas depasser 5000 caracteres"),
  url: z
    .union([z.literal(""), z.string().url("URL invalide").max(500, "L'URL ne doit pas depasser 500 caracteres")])
    .optional(),
  moduleOrder: z.number().int().min(2).max(50).optional(),
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
    const isAdmin = (session.user as { role?: string }).role === "admin";

    const projects = await prisma.project.findMany({
      where: isAdmin ? {} : { userId: session.user.id },
      include: { user: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const parsed = createProjectSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Donnees invalides", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { title, description, url, moduleOrder } = parsed.data;

    const project = await prisma.project.create({
      data: {
        userId: session.user.id,
        title,
        description,
        url: url || null,
        moduleOrder: moduleOrder ?? null,
      },
    });

    // Send admin notification
    if (resend) {
      await resend.emails.send({
        from: "Marius d'OpexIA <support@opexia-formation.com>",
        to: "support@opexia-formation.com",
        subject: `Nouveau projet soumis — ${title}`,
        html: `<p>Salut,</p>
<p>Un étudiant (${session.user.name || session.user.email || "inconnu"}) vient de soumettre un nouveau projet : <strong>${title}</strong>.</p>
<p>Connecte-toi au dashboard pour le consulter.</p>
<p>— OpexIA</p>`,
      }).catch((err) => {
        console.error("[Projects] Failed to send admin notification:", err);
      });
    }

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
