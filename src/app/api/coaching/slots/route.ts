import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { COACHING_HOURS } from "@/lib/constants";
import { getCalendarEvents } from "@/lib/google-calendar";

/**
 * Get the current UTC offset for Europe/Paris (handles CET/CEST automatically).
 */
function getParisOffset(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "shortOffset",
  });
  const parts = formatter.formatToParts(date);
  const tzPart = parts.find((p) => p.type === "timeZoneName");
  // e.g. "GMT+1" or "GMT+2"
  const match = tzPart?.value?.match(/GMT([+-]\d+)/);
  if (!match) return "+01:00";
  const hours = parseInt(match[1]);
  const sign = hours >= 0 ? "+" : "-";
  return `${sign}${String(Math.abs(hours)).padStart(2, "0")}:00`;
}

/**
 * Get the day of week for a date in Paris timezone.
 */
function getParisDayOfWeek(date: Date): number {
  const parisStr = date.toLocaleDateString("en-US", { timeZone: "Europe/Paris", weekday: "short" });
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return map[parisStr] ?? 0;
}

function generateUpcomingSlots(weeksAhead: number = 4) {
  const slots: { date: string; label: string; dayLabel: string; time: string }[] = [];
  const now = new Date();
  const { startHour, endHour, daysOff } = COACHING_HOURS;

  for (let d = 1; d <= weeksAhead * 7; d++) {
    const date = new Date(now);
    date.setDate(now.getDate() + d);

    const dayOfWeek = getParisDayOfWeek(date);
    if (daysOff.includes(dayOfWeek)) continue;

    // Get the date string in Paris timezone (YYYY-MM-DD)
    const parisDate = date.toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" }); // "2026-03-25"
    const offset = getParisOffset(date);

    for (let hour = startHour; hour < endHour; hour++) {
      const timeStr = `${hour.toString().padStart(2, "0")}:00`;
      // Build an ISO string explicitly in Paris timezone
      const isoSlot = new Date(`${parisDate}T${timeStr}:00${offset}`).toISOString();

      const slotDate = new Date(isoSlot);
      const dayLabel = slotDate.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: "Europe/Paris",
      });

      slots.push({
        date: isoSlot,
        label: `${dayLabel} a ${timeStr}`,
        dayLabel,
        time: timeStr,
      });
    }
  }

  slots.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return slots;
}

/**
 * Check if a slot (1-hour window) conflicts with any Google Calendar event.
 * A conflict exists when the slot's time range overlaps with any event.
 */
function isSlotBusyInCalendar(
  slotDate: Date,
  calendarEvents: { start?: { dateTime?: string | null; date?: string | null }; end?: { dateTime?: string | null; date?: string | null } }[]
): boolean {
  const slotStart = slotDate.getTime();
  const slotEnd = slotStart + 60 * 60 * 1000; // 1 hour

  for (const event of calendarEvents) {
    const eventStartStr = event.start?.dateTime || event.start?.date;
    const eventEndStr = event.end?.dateTime || event.end?.date;
    if (!eventStartStr || !eventEndStr) continue;

    const eventStart = new Date(eventStartStr).getTime();
    const eventEnd = new Date(eventEndStr).getTime();

    // Two time ranges overlap if one starts before the other ends
    if (slotStart < eventEnd && slotEnd > eventStart) {
      return true;
    }
  }

  return false;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Generate all possible slots for the next 4 weeks
  const allSlots = generateUpcomingSlots(4);

  // Determine the date range for calendar lookup
  const now = new Date();
  const fourWeeksLater = new Date(now);
  fourWeeksLater.setDate(now.getDate() + 28 + 1);

  // Fetch Google Calendar events and booked sessions in parallel
  const [calendarEvents, bookedSessions] = await Promise.all([
    getCalendarEvents(now, fourWeeksLater),
    prisma.coachingSession.findMany({
      where: {
        status: { in: ["pending", "confirmed"] },
        date: { gte: new Date() },
      },
      select: { slot: true },
    }),
  ]);

  const bookedSlotSet = new Set(bookedSessions.map((s) => s.slot));

  // Filter out slots that are booked in DB OR busy in Google Calendar
  const availableSlots = allSlots.filter((s) => {
    // Already booked in DB
    if (bookedSlotSet.has(s.date)) return false;
    // Conflicts with a Google Calendar event
    if (isSlotBusyInCalendar(new Date(s.date), calendarEvents)) return false;
    return true;
  });

  // Also get user's own sessions
  const userSessions = await prisma.coachingSession.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" },
    take: 10,
  });

  return NextResponse.json({ slots: availableSlots, sessions: userSessions });
}
