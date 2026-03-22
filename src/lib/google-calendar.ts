import { google } from "googleapis";

function getCalendarClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !privateKey) {
    console.warn(
      "[Google Calendar] Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY"
    );
    return null;
  }

  const auth = new google.auth.JWT({
    email,
    // The private key comes from env with literal \n — replace them with real newlines
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

const CALENDAR_ID = () => process.env.GOOGLE_CALENDAR_ID || "primary";

/**
 * Fetch Google Calendar events in a date range.
 * Returns an empty array if the client is not configured.
 */
export async function getCalendarEvents(startDate: Date, endDate: Date) {
  const calendar = getCalendarClient();
  if (!calendar) return [];

  try {
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID(),
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      // Only fetch the fields we need
      fields: "items(id,summary,start,end,status)",
    });

    // Filter out cancelled events
    return (response.data.items || []).filter(
      (event) => event.status !== "cancelled"
    );
  } catch (error) {
    console.error("[Google Calendar] Error fetching events:", error);
    return [];
  }
}

/**
 * Create a Google Calendar event (e.g. when a coaching session is confirmed).
 * Returns the created event or null on failure.
 */
export async function createCalendarEvent(
  summary: string,
  startTime: string,
  endTime: string,
  attendeeEmail?: string
) {
  const calendar = getCalendarClient();
  if (!calendar) {
    console.warn("[Google Calendar] Cannot create event — client not configured");
    return null;
  }

  try {
    const event: {
      summary: string;
      start: { dateTime: string; timeZone: string };
      end: { dateTime: string; timeZone: string };
      attendees?: { email: string }[];
      reminders: { useDefault: boolean; overrides: { method: string; minutes: number }[] };
    } = {
      summary,
      start: { dateTime: startTime, timeZone: "Europe/Paris" },
      end: { dateTime: endTime, timeZone: "Europe/Paris" },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 30 },
        ],
      },
    };

    if (attendeeEmail) {
      event.attendees = [{ email: attendeeEmail }];
    }

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID(),
      requestBody: event,
      sendUpdates: attendeeEmail ? "all" : "none",
    });

    console.log("[Google Calendar] Event created:", response.data.id);
    return response.data;
  } catch (error) {
    console.error("[Google Calendar] Error creating event:", error);
    return null;
  }
}
