import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { COACHING_PRICE_DISPLAY, WHATSAPP_PHONE } from "@/lib/constants";
import { createCalendarEvent } from "@/lib/google-calendar";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ADMIN_EMAIL = "opexiapro@gmail.com";
const WHATSAPP_LINK = WHATSAPP_PHONE;

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
  if (userTier !== "one_to_one" && session.user.role !== "admin") {
    return NextResponse.json({ error: "Utilisez le paiement en ligne pour réserver" }, { status: 403 });
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

    const isFree = userTier === "one_to_one";
    const amount = isFree ? 0 : parseInt(COACHING_PRICE_DISPLAY) * 100;

    // Enforce 8-session limit for One-to-One users
    const sessionCount = await prisma.coachingSession.count({
      where: { userId: session.user.id, status: { in: ["pending", "confirmed"] } }
    });
    if (sessionCount >= 8 && session.user.role !== "admin") {
      return NextResponse.json({ error: "Vous avez atteint la limite de 8 sessions gratuites" }, { status: 403 });
    }

    // Use transaction to prevent race condition (check + create atomically)
    const coachingSession = await prisma.$transaction(async (tx) => {
      const existing = await tx.coachingSession.findFirst({
        where: {
          slot,
          status: { in: ["pending", "confirmed"] },
        },
      });

      if (existing) {
        throw new Error("SLOT_TAKEN");
      }

      return tx.coachingSession.create({
        data: {
          userId: session.user.id,
          date: slotDate,
          slot,
          status: "confirmed",
          amount,
          topic: topic || null,
        },
      });
    });

    if (!coachingSession) {
      return NextResponse.json({ error: "Erreur lors de la réservation" }, { status: 500 });
    }

    // Create Google Calendar event with Google Meet
    try {
      const endDate = new Date(slotDate.getTime() + 60 * 60 * 1000);
      const calendarResult = await createCalendarEvent(
        `Coaching OpexIA — ${session.user.name || "Élève"}`,
        slotDate.toISOString(),
        endDate.toISOString(),
        session.user.email
      );

      // Store the Meet link on the coaching session if available
      if (calendarResult?.meetLink) {
        await prisma.coachingSession.update({
          where: { id: coachingSession.id },
          data: { meetLink: calendarResult.meetLink },
        }).catch(() => {});
      }
    } catch (calErr) {
      console.error("[Book] Failed to create calendar event:", calErr);
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
    const firstName = userName.split(" ")[0];
    const userEmail = session.user.email;
    const topicText = topic ? topic.trim() : "Non précisé";

    // ── Professional confirmation email to student ──
    if (resend) {
      try {
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: userEmail,
          subject: `Ta session coaching est confirmée — ${dateStr}`,
          html: buildStudentEmail({ firstName, dateStr, timeStr, topicText, isFree }),
        });
      } catch (emailErr) {
        console.error("Email to student failed:", emailErr);
      }

      // ── Notification email to admin ──
      try {
        await resend.emails.send({
          from: "Marius d'OpexIA <support@opexia-formation.com>",
          to: ADMIN_EMAIL,
          subject: `Nouvelle session coaching — ${userName} (${userTier})`,
          html: buildAdminEmail({ userName, userEmail, userTier, dateStr, timeStr, topicText, isFree }),
        });
      } catch (emailErr) {
        console.error("Email to admin failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === "SLOT_TAKEN") {
      return NextResponse.json({ error: "Ce créneau vient d'être réservé par quelqu'un d'autre. Choisis un autre horaire." }, { status: 409 });
    }
    console.error("POST /api/coaching/book error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

/* ═══════════════════════════════════════════════════════
   EMAIL TEMPLATES
   ═══════════════════════════════════════════════════════ */

function buildStudentEmail({ firstName, dateStr, timeStr, topicText, isFree }: {
  firstName: string; dateStr: string; timeStr: string; topicText: string; isFree: boolean;
}) {
  const priceBlock = isFree
    ? `<p style="margin:0;font-size:15px;font-weight:600;color:#10b981;">Inclus dans ton forfait One-to-One</p>`
    : `<p style="margin:0;font-size:15px;font-weight:600;color:#FF1744;">${COACHING_PRICE_DISPLAY}€ à régler lors de la session</p>`;

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#FF1744,#D50000);padding:32px 28px;text-align:center;">
      <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.3px;">Session confirmée ✓</h1>
      <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">Ta session de coaching est réservée</p>
    </div>

    <!-- Body -->
    <div style="padding:28px;">
      <p style="margin:0 0 20px;font-size:15px;color:#333;line-height:1.6;">
        Salut <strong>${firstName}</strong>,<br>
        Merci pour ta réservation ! Voici le récapitulatif de ta session.
      </p>

      <!-- Details card -->
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:0 0 14px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">📅 Date</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#111;">${dateStr}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 0 14px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">🕐 Heure</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#111;">${timeStr} (Europe/Paris)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 0 14px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">💬 Sujet</p>
              <p style="margin:0;font-size:15px;color:#111;">${topicText}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 0 14px;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">🎥 Format</p>
              <p style="margin:0;font-size:15px;color:#111;">Visio Google Meet (lien envoyé par calendrier)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0;vertical-align:top;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;">💰 Tarif</p>
              ${priceBlock}
            </td>
          </tr>
        </table>
      </div>

      <!-- Info box -->
      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:24px;">
        <p style="margin:0;font-size:13px;color:#1e40af;line-height:1.5;">
          <strong>📌 À savoir :</strong> Tu recevras une invitation Google Calendar avec le lien Google Meet. Pense à te connecter 5 min avant l'heure prévue.
        </p>
      </div>

      <!-- CTA WhatsApp -->
      <div style="text-align:center;margin-bottom:20px;">
        <a href="${WHATSAPP_LINK}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600;">
          💬 Une question ? Écris-nous sur WhatsApp
        </a>
      </div>

      <!-- Footer note -->
      <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;line-height:1.5;">
        Tu peux annuler ou reporter ta session jusqu'à 24h avant.<br>
        À très vite !
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 28px;text-align:center;">
      <p style="margin:0;font-size:11px;color:#9ca3af;">OpexIA Academy — Formation IA pour entrepreneurs</p>
    </div>
  </div>
</body></html>`;
}

function buildAdminEmail({ userName, userEmail, userTier, dateStr, timeStr, topicText, isFree }: {
  userName: string; userEmail: string; userTier: string; dateStr: string; timeStr: string; topicText: string; isFree: boolean;
}) {
  const tierLabels: Record<string, string> = { starter: "Starter", academy: "Academy", one_to_one: "One to One" };
  const tierLabel = tierLabels[userTier] || userTier;
  const priceInfo = isFree ? "Inclus (One-to-One)" : `${COACHING_PRICE_DISPLAY}€ à encaisser`;

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="background:#111;padding:24px 28px;">
      <h1 style="margin:0;font-size:18px;font-weight:700;color:#fff;">🔔 Nouvelle réservation coaching</h1>
    </div>
    <div style="padding:24px 28px;">
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:16px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Élève</p>
        <p style="margin:0 0 14px;font-size:15px;font-weight:600;color:#111;">${userName} — <a href="mailto:${userEmail}" style="color:#FF1744;">${userEmail}</a></p>
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Formule</p>
        <p style="margin:0 0 14px;font-size:15px;color:#111;">${tierLabel}</p>
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Date</p>
        <p style="margin:0 0 14px;font-size:15px;font-weight:600;color:#111;">${dateStr} à ${timeStr}</p>
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Sujet</p>
        <p style="margin:0 0 14px;font-size:15px;color:#111;">${topicText}</p>
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Tarif</p>
        <p style="margin:0;font-size:15px;font-weight:700;color:${isFree ? '#10b981' : '#FF1744'};">${priceInfo}</p>
      </div>
    </div>
  </div>
</body></html>`;
}
