import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const notes = await prisma.note.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const body = await req.json();
  const { title, content, folder, color, icon, pinned } = body;

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
}
