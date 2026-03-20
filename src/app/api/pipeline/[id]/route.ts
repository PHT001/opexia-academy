import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { id } = await params;

  const existing = await prisma.pipelineDeal.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Deal introuvable" }, { status: 404 });
  }

  const body = await req.json();
  const { name, company, value, stage, notes } = body;

  const deal = await prisma.pipelineDeal.update({
    where: { id },
    data: {
      ...(name !== undefined && { name: name.trim() }),
      ...(company !== undefined && { company: company?.trim() || null }),
      ...(value !== undefined && { value: Number(value) || 0 }),
      ...(stage !== undefined && { stage }),
      ...(notes !== undefined && { notes: notes?.trim() || null }),
    },
  });

  return NextResponse.json(deal);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { id } = await params;

  const existing = await prisma.pipelineDeal.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Deal introuvable" }, { status: 404 });
  }

  await prisma.pipelineDeal.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
