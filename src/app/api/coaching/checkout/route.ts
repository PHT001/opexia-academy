import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { COACHING_PRICE } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  // Verify user has Academy or One-to-One tier (or is admin)
  const enrollment = await prisma.enrollment.findFirst({
    where: { userId: session.user.id, status: "active" },
    orderBy: { createdAt: "desc" },
  });
  const userTier = enrollment?.tier || "free";
  if (userTier === "free" && session.user.role !== "admin") {
    return NextResponse.json({ error: "Coaching reserve aux membres avec un abonnement actif" }, { status: 403 });
  }
  if (userTier === "one_to_one") {
    return NextResponse.json({ error: "En tant que membre One-to-One, tes sessions sont gratuites. Utilise la reservation directe." }, { status: 400 });
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
          status: "pending",
          amount: COACHING_PRICE,
          topic: topic || null,
        },
      });
    });

    // Create Stripe Checkout session
    const origin = process.env.NEXTAUTH_URL || req.headers.get("origin") || "https://opexia-formation.com";

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: session.user.email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Session de Coaching — 1h",
              description: `Coaching personnalise le ${slotDate.toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })} a ${slotDate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`,
            },
            unit_amount: COACHING_PRICE,
          },
          quantity: 1,
        },
      ],
      metadata: {
        coachingSessionId: coachingSession.id,
      },
      success_url: `${origin}/coaching?success=true`,
      cancel_url: `${origin}/coaching?cancelled=true`,
    });

    // Update coaching session with Stripe session ID
    await prisma.coachingSession.update({
      where: { id: coachingSession.id },
      data: { stripeSessionId: checkoutSession.id },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    if (error instanceof Error && error.message === "SLOT_TAKEN") {
      return NextResponse.json({ error: "Ce créneau vient d'être réservé. Choisis un autre horaire." }, { status: 409 });
    }
    console.error("POST /api/coaching/checkout error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
