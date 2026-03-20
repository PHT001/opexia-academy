import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const deals = await prisma.pipelineDeal.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(deals);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

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
}
