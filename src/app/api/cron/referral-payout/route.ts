import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(req: NextRequest) {
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET is not configured or too short" }, { status: 500 });
  }

  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find all confirmed referrals that haven't been paid yet
    const unpaidReferrals = await prisma.referral.findMany({
      where: { status: "confirmed" },
      include: {
        referrer: { select: { name: true, email: true } },
        referred: { select: { name: true, email: true } },
      },
    });

    if (unpaidReferrals.length === 0) {
      return NextResponse.json({ message: "No unpaid referrals", paid: 0 });
    }

    // Mark all as paid
    const ids = unpaidReferrals.map((r) => r.id);
    await prisma.referral.updateMany({
      where: { id: { in: ids } },
      data: { status: "paid", paidAt: new Date() },
    });

    // Calculate total payout
    const totalPayout = unpaidReferrals.reduce((sum, r) => sum + (r.commission || 0), 0);

    // Notify admin
    if (resend) {
      const referralDetails = unpaidReferrals.map((r) =>
        `- ${r.referrer.name || r.referrer.email} -> ${r.referred.name || r.referred.email} : ${((r.commission || 0) / 100).toFixed(2)} EUR`
      ).join("\n");

      await resend.emails.send({
        from: "OpexIA Notifications <support@opexia-formation.com>",
        to: "support@opexia-formation.com",
        subject: `Parrainages payes - ${unpaidReferrals.length} commissions`,
        html: `
          <meta charset="utf-8" />
          <div style="font-family: -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 20px;">
            <h2 style="color: #1A1A2E;">Commissions de parrainage payees</h2>
            <p style="color: #6B7280; font-size: 14px;">${unpaidReferrals.length} commission(s) marquee(s) comme payee(s).</p>
            <p style="color: #111; font-size: 18px; font-weight: 700;">Total : ${(totalPayout / 100).toFixed(2)} EUR</p>
            <pre style="background: #F3F4F6; padding: 16px; border-radius: 8px; font-size: 12px; overflow-x: auto;">${referralDetails}</pre>
          </div>
        `,
      }).catch(() => {});
    }

    return NextResponse.json({
      message: "Referral payouts processed",
      paid: unpaidReferrals.length,
      totalEur: (totalPayout / 100).toFixed(2),
    });
  } catch (error) {
    console.error("Referral payout cron error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
