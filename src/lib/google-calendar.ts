import { google } from "googleapis";

function getCalendarClient() {
  const jsonB64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  if (!jsonB64) {
    console.warn("[Google Calendar] Missing GOOGLE_SERVICE_ACCOUNT_JSON");
    return null;
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(jsonB64, "base64").toString("utf-8")
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    return google.calendar({ version: "v3", auth });
  } catch (error) {
    console.error("[Google Calendar] Failed to parse credentials:", error);
    return null;
  }
}

const CALENDAR_ID = () => (process.env.GOOGLE_CALENDAR_ID || "primary").trim();

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
    const events = (response.data.items || []).filter(
      (event) => event.status !== "cancelled"
    );
    return events;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event: any = {
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

    // Service accounts cannot add attendees or create Meet links
    // without Domain-Wide Delegation. Include email in description instead.
    if (attendeeEmail) {
      event.description = `Participant : ${attendeeEmail}`;
    }

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID(),
      requestBody: event,
    });

    console.log("[Google Calendar] Event created:", response.data.id);
    return { ...response.data, meetLink: null };
  } catch (error) {
    console.error("[Google Calendar] Error creating event:", error);
    return null;
  }
}
