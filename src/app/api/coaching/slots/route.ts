import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { COACHING_SLOTS } from "@/lib/constants";

// Map French day names to JS day numbers (0=Sun, 1=Mon, ...)
const DAY_MAP: Record<string, number> = {
  Dimanche: 0,
  Lundi: 1,
  Mardi: 2,
  Mercredi: 3,
  Jeudi: 4,
  Vendredi: 5,
  Samedi: 6,
};

function generateUpcomingSlots(weeksAhead: number = 4) {
  const slots: { date: string; label: string; dayLabel: string; time: string }[] = [];
  const now = new Date();

  for (let d = 1; d <= weeksAhead * 7; d++) {
    const date = new Date(now);
    date.setDate(now.getDate() + d);
    const dayOfWeek = date.getDay();

    for (const slot of COACHING_SLOTS) {
      if (DAY_MAP[slot.day] === dayOfWeek) {
        const [hours, minutes] = slot.time.split(":").map(Number);
        const slotDate = new Date(date);
        slotDate.setHours(hours, minutes, 0, 0);

        // Format: "2026-03-15T14:00"
        const isoSlot = slotDate.toISOString();
        const dayLabel = slotDate.toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        });

        slots.push({
          date: isoSlot,
          label: `${dayLabel} a ${slot.time}`,
          dayLabel,
          time: slot.time,
        });
      }
    }
  }

  // Sort by date
  slots.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return slots;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Generate all possible slots for the next 4 weeks
  const allSlots = generateUpcomingSlots(4);

  // Get already booked slots
  const bookedSessions = await prisma.coachingSession.findMany({
    where: {
      status: { in: ["pending", "confirmed"] },
      date: { gte: new Date() },
    },
    select: { slot: true },
  });

  const bookedSlotSet = new Set(bookedSessions.map((s) => s.slot));

  // Filter out booked slots
  const availableSlots = allSlots.filter((s) => !bookedSlotSet.has(s.date));

  // Also get user's own sessions
  const userSessions = await prisma.coachingSession.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" },
    take: 10,
  });

  return NextResponse.json({ slots: availableSlots, sessions: userSessions });
}
