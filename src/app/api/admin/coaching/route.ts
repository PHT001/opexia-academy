import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });

    await prisma.coachingSession.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/coaching error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { id, status } = await req.json();
    if (!id || !status) return NextResponse.json({ error: "ID et status requis" }, { status: 400 });

    if (!["confirmed", "cancelled", "completed"].includes(status)) {
      return NextResponse.json({ error: "Status invalide" }, { status: 400 });
    }

    await prisma.coachingSession.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH /api/admin/coaching error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
