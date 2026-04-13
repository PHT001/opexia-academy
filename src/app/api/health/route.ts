import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  const checks: Record<string, { status: string; detail?: string }> = {};

  // Database check
  try {
    const count = await prisma.user.count();
    checks.database = { status: "ok", detail: `${count} users` };
  } catch (err) {
    checks.database = { status: "error", detail: err instanceof Error ? err.message : "Unknown" };
  }

  // Stripe check
  checks.stripe = {
    status: process.env.STRIPE_SECRET_KEY ? "ok" : "error",
    detail: process.env.STRIPE_SECRET_KEY ? "Key configured" : "Missing STRIPE_SECRET_KEY",
  };

  // Resend check
  checks.resend = {
    status: process.env.RESEND_API_KEY ? "ok" : "error",
    detail: process.env.RESEND_API_KEY ? "Key configured" : "Missing RESEND_API_KEY",
  };

  // Cron secret check
  checks.cron = {
    status: process.env.CRON_SECRET && process.env.CRON_SECRET.length >= 32 ? "ok" : "error",
    detail: process.env.CRON_SECRET ? "Configured" : "Missing CRON_SECRET",
  };

  // Google Calendar check
  checks.googleCalendar = {
    status: process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? "ok" : "warning",
    detail: process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? "Configured" : "Missing credentials",
  };

  // Email stats (last 24h)
  try {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [sentCount, failedCount] = await Promise.all([
      prisma.emailLog.count({ where: { createdAt: { gte: oneDayAgo }, status: "sent" } }),
      prisma.emailLog.count({ where: { createdAt: { gte: oneDayAgo }, status: "failed" } }),
    ]);
    checks.emails24h = { status: failedCount > 5 ? "warning" : "ok", detail: `${sentCount} sent, ${failedCount} failed` };
  } catch {
    checks.emails24h = { status: "error", detail: "Query failed" };
  }

  const allOk = Object.values(checks).every((c) => c.status === "ok");

  return NextResponse.json({
    status: allOk ? "healthy" : "degraded",
    timestamp: new Date().toISOString(),
    checks,
  });
}
