import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as { role?: string }).role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    // Get all referrals with referrer and referred user info
    const referrals = await prisma.referral.findMany({
      include: {
        referrer: { select: { id: true, name: true, email: true, referralCode: true } },
        referred: { select: { id: true, name: true, email: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    // Get all users who have a referral code (potential referrers)
    const referrers = await prisma.user.findMany({
      where: { referralCode: { not: null } },
      select: { id: true, name: true, email: true, referralCode: true },
    });

    // Build referrer stats
    const referrerStats = referrers.map((user) => {
      const userReferrals = referrals.filter((r) => r.referrerId === user.id);
      const confirmed = userReferrals.filter((r) => r.status === "confirmed" || r.status === "paid");
      const totalCommission = confirmed.reduce((sum, r) => sum + r.commission, 0);
      const paidCommission = userReferrals
        .filter((r) => r.status === "paid")
        .reduce((sum, r) => sum + r.commission, 0);

      return {
        id: user.id,
        name: user.name || "Anonyme",
        email: user.email,
        referralCode: user.referralCode,
        totalReferrals: userReferrals.length,
        confirmedReferrals: confirmed.length,
        totalCommission,
        paidCommission,
        unpaidCommission: totalCommission - paidCommission,
      };
    }).filter((r) => r.totalReferrals > 0);

    // Global stats
    const totalReferrals = referrals.length;
    const confirmedReferrals = referrals.filter((r) => r.status === "confirmed" || r.status === "paid").length;
    const pendingReferrals = referrals.filter((r) => r.status === "pending").length;
    const totalCommission = referrals
      .filter((r) => r.status === "confirmed" || r.status === "paid")
      .reduce((sum, r) => sum + r.commission, 0);
    const paidCommission = referrals
      .filter((r) => r.status === "paid")
      .reduce((sum, r) => sum + r.commission, 0);

    return NextResponse.json({
      stats: {
        totalReferrals,
        confirmedReferrals,
        pendingReferrals,
        totalCommission,
        paidCommission,
        unpaidCommission: totalCommission - paidCommission,
      },
      referrerStats: referrerStats.sort((a, b) => b.confirmedReferrals - a.confirmedReferrals),
      referrals: referrals.map((r) => ({
        id: r.id,
        referrer: { name: r.referrer.name || "Anonyme", email: r.referrer.email, code: r.referrer.referralCode },
        referred: { name: r.referred.name || "Anonyme", email: r.referred.email },
        tier: r.referredTier,
        commission: r.commission,
        status: r.status,
        createdAt: r.createdAt,
        paidAt: r.paidAt,
      })),
    });
  } catch (error) {
    console.error("Admin referrals API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Mark referrals as paid
export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as { role?: string }).role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { referralIds, action } = await req.json();

    if (!Array.isArray(referralIds) || referralIds.length === 0) {
      return NextResponse.json({ error: "IDs manquants" }, { status: 400 });
    }

    if (action === "mark_paid") {
      await prisma.referral.updateMany({
        where: { id: { in: referralIds }, status: "confirmed" },
        data: { status: "paid", paidAt: new Date() },
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
  } catch (error) {
    console.error("Admin referrals PATCH error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
