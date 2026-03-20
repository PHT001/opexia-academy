import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

function generateReferralCode(): string {
  return crypto.randomBytes(4).toString("hex").toUpperCase(); // 8 chars
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Non autorise" }, { status: 401 });
    }

    const userId = session.user.id;

    // Check user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, referralCode: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
    }

    let referralCode = user.referralCode;

    if (!referralCode) {
      // Generate unique code
      let code = generateReferralCode();
      let attempts = 0;
      while (attempts < 10) {
        const existing = await prisma.user.findUnique({ where: { referralCode: code } });
        if (!existing) break;
        code = generateReferralCode();
        attempts++;
      }

      await prisma.user.update({
        where: { id: user.id },
        data: { referralCode: code },
      });
      referralCode = code;
    }

    // Get referrals
    const referrals = await prisma.referral.findMany({
      where: { referrerId: userId },
      include: {
        referred: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const totalEarned = referrals
      .filter((r) => r.status === "confirmed" || r.status === "paid")
      .reduce((sum, r) => sum + r.commission, 0);

    const pendingAmount = referrals
      .filter((r) => r.status === "confirmed")
      .reduce((sum, r) => sum + r.commission, 0);

    const paidAmount = referrals
      .filter((r) => r.status === "paid")
      .reduce((sum, r) => sum + r.commission, 0);

    return NextResponse.json({
      referralCode,
      stats: {
        totalReferrals: referrals.length,
        confirmedReferrals: referrals.filter((r) => r.status !== "pending").length,
        totalEarned,
        pendingAmount,
        paidAmount,
      },
      referrals: referrals.map((r) => ({
        id: r.id,
        referredName: r.referred.name || "Anonyme",
        referredEmail: r.referred.email,
        tier: r.referredTier,
        commission: r.commission,
        status: r.status,
        createdAt: r.createdAt,
        paidAt: r.paidAt,
      })),
    });
  } catch (error) {
    console.error("Referral API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
