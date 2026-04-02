import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createNoteSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().max(50000).optional(),
  folder: z.string().max(100).optional(),
  color: z.string().max(20).optional(),
  icon: z.string().max(10).optional(),
  pinned: z.boolean().optional(),
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  try {
    const notes = await prisma.note.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(notes);
  } catch (error) {
    console.error("GET /api/notes error:", error);
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
    const parsed = createNoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation échouée", details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { title, content, folder, color, icon, pinned } = parsed.data;

    const note = await prisma.note.create({
      data: {
        userId: session.user.id,
        title: title ?? "",
        content: content ?? "",
        folder: folder ?? "Général",
        color: color ?? "#FF1744",
        icon: icon ?? "📝",
        pinned: pinned ?? false,
      },
    });

    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error("POST /api/notes error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
