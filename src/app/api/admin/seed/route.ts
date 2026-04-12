import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Seed endpoint disabled in production" }, { status: 403 });
}

export async function GET() {
  return NextResponse.json({ error: "Seed endpoint disabled in production" }, { status: 403 });
}
