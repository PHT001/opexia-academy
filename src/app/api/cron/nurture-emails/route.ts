import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Verify CRON_SECRET is set and strong enough
  if (!process.env.CRON_SECRET || process.env.CRON_SECRET.length < 32) {
    return NextResponse.json({ error: "CRON_SECRET is not configured or too short" }, { status: 500 });
  }

  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ message: "Nurture sequence disabled" });
}
