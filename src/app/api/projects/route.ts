import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const isAdmin = (session.user as { role?: string }).role === "admin";

  const projects = await prisma.project.findMany({
    where: isAdmin ? {} : { userId: session.user.id },
    include: { user: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const body = await req.json();
  const { title, description, url } = body;

  if (!title || !description) {
    return NextResponse.json(
      { error: "Le titre et la description sont requis" },
      { status: 400 }
    );
  }

  const project = await prisma.project.create({
    data: {
      userId: session.user.id,
      title,
      description,
      url: url || null,
    },
  });

  return NextResponse.json(project, { status: 201 });
}
