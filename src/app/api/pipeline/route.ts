import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Tier check — only academy and one_to_one users can access the pipeline
  const isAdmin = session.user.role === "admin";
  if (!isAdmin) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: session.user.id, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    const userTier = enrollment?.tier || "free";
    if (userTier !== "academy" && userTier !== "one_to_one") {
      return NextResponse.json({ error: "Acces reserve aux membres Academy et One-to-One" }, { status: 403 });
    }
  }

  try {
    const deals = await prisma.pipelineDeal.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(deals);
  } catch (error) {
    console.error("GET /api/pipeline error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Tier check — only academy and one_to_one users can access the pipeline
  const isAdmin = session.user.role === "admin";
  if (!isAdmin) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: session.user.id, status: "active" },
      orderBy: { createdAt: "desc" },
    });
    const userTier = enrollment?.tier || "free";
    if (userTier !== "academy" && userTier !== "one_to_one") {
      return NextResponse.json({ error: "Acces reserve aux membres Academy et One-to-One" }, { status: 403 });
    }
  }

  try {
    const body = await req.json();
    const { name, company, value, stage, notes } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    }

    const deal = await prisma.pipelineDeal.create({
      data: {
        userId: session.user.id,
        name: name.trim(),
        company: company?.trim() || null,
        value: Number(value) || 0,
        stage: stage || "lead",
        notes: notes?.trim() || null,
      },
    });

    return NextResponse.json(deal, { status: 201 });
  } catch (error) {
    console.error("POST /api/pipeline error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
