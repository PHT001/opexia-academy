import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Only one_to_one users (or admins) can book for free
  const enrollment = await prisma.enrollment.findFirst({
    where: { userId: session.user.id, status: "active" },
    orderBy: { createdAt: "desc" },
  });
  const userTier = enrollment?.tier || "free";
  if (userTier !== "one_to_one" && session.user.role !== "admin") {
    return NextResponse.json({ error: "Reservation gratuite reservee aux membres One-to-One" }, { status: 403 });
  }

  try {
    const { slot, topic } = await req.json();
    if (!slot) {
      return NextResponse.json({ error: "Creneau manquant" }, { status: 400 });
    }

    const slotDate = new Date(slot);
    if (slotDate <= new Date()) {
      return NextResponse.json({ error: "Creneau passe" }, { status: 400 });
    }

    // Check slot is not already booked
    const existing = await prisma.coachingSession.findFirst({
      where: {
        slot,
        status: { in: ["pending", "confirmed"] },
      },
    });

    if (existing) {
      return NextResponse.json({ error: "Creneau deja reserve" }, { status: 409 });
    }

    // Create confirmed coaching session (free for one_to_one)
    await prisma.coachingSession.create({
      data: {
        userId: session.user.id,
        date: slotDate,
        slot,
        status: "confirmed",
        amount: 0,
        topic: topic || null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/coaching/book error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
