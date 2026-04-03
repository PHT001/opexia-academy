import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { COACHING_PRICE_DISPLAY } from "@/lib/constants";
import { createCalendarEvent } from "@/lib/google-calendar";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ADMIN_EMAIL = "opexiapro@gmail.com";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // All paid tiers (starter, academy, one_to_one) + admins can book
  const enrollment = await prisma.enrollment.findFirst({
    where: { userId: session.user.id, status: "active" },
    orderBy: { createdAt: "desc" },
  });
  const userTier = enrollment?.tier || "free";
  if (userTier === "free" && session.user.role !== "admin") {
    return NextResponse.json({ error: "Réservation réservée aux membres payants" }, { status: 403 });
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

    const isFree = userTier === "one_to_one";
    const amount = isFree ? 0 : parseInt(COACHING_PRICE_DISPLAY) * 100;

    // Create confirmed coaching session
    await prisma.coachingSession.create({
      data: {
        userId: session.user.id,
        date: slotDate,
        slot,
        status: "confirmed",
        amount,
        topic: topic || null,
      },
    });

    // Create Google Calendar event with Google Meet
    try {
      const endDate = new Date(slotDate.getTime() + 60 * 60 * 1000); // +1h
      await createCalendarEvent(
        `Coaching OpexIA — ${session.user.name || "Élève"}`,
        slotDate.toISOString(),
        endDate.toISOString(),
        session.user.email
      );
    } catch (calErr) {
      console.error("[Book] Failed to create calendar event:", calErr);
      // Don't fail the booking if calendar fails
    }

    // Format date for emails
    const dateStr = slotDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const timeStr = slotDate.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Paris",
    });

    const userName = session.user.name || "Élève";
    const userEmail = session.user.email;
    const topicText = topic ? topic.trim() : "Non précisé";
    const priceInfo = isFree
      ? "Inclus dans ton forfait One-to-One"
      : `${COACHING_PRICE_DISPLAY}€ à régler lors de l'appel`;

    // Send confirmation email to student
    if (resend) {
      try {
        await resend.emails.send({
          from: "OpexIA Formation <noreply@opexia-formation.com>",
          to: userEmail,
          subject: `Confirmation de ta session coaching — ${dateStr}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px;">
              <h1 style="font-size: 20px; font-weight: 700; color: #111; margin-bottom: 16px;">Session coaching confirmée ✓</h1>
              <p style="font-size: 14px; color: #555; margin-bottom: 24px;">Salut ${userName}, ta session de coaching est bien réservée.</p>
              <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Date</p>
                <p style="margin: 0 0 16px; font-size: 15px; font-weight: 600; color: #111;">${dateStr} à ${timeStr}</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Sujet</p>
                <p style="margin: 0 0 16px; font-size: 15px; color: #111;">${topicText}</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Tarif</p>
                <p style="margin: 0; font-size: 15px; font-weight: 600; color: ${isFree ? '#10b981' : '#FF1744'};">${priceInfo}</p>
              </div>
              <p style="font-size: 12px; color: #999;">Tu peux annuler jusqu'à 24h avant la session. À bientôt !</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Email to student failed:", emailErr);
      }

      // Send notification email to admin
      try {
        await resend.emails.send({
          from: "OpexIA Formation <noreply@opexia-formation.com>",
          to: ADMIN_EMAIL,
          subject: `Nouvelle session coaching — ${userName} (${userTier})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px;">
              <h1 style="font-size: 20px; font-weight: 700; color: #111; margin-bottom: 16px;">Nouvelle réservation coaching</h1>
              <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Élève</p>
                <p style="margin: 0 0 16px; font-size: 15px; font-weight: 600; color: #111;">${userName} (${userEmail})</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Tier</p>
                <p style="margin: 0 0 16px; font-size: 15px; color: #111;">${userTier}</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Date</p>
                <p style="margin: 0 0 16px; font-size: 15px; font-weight: 600; color: #111;">${dateStr} à ${timeStr}</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Sujet</p>
                <p style="margin: 0 0 16px; font-size: 15px; color: #111;">${topicText}</p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #888;">Tarif</p>
                <p style="margin: 0; font-size: 15px; font-weight: 600; color: ${isFree ? '#10b981' : '#FF1744'};">${priceInfo}</p>
              </div>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Email to admin failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/coaching/book error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
