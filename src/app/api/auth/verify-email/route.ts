import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Brute force protection: track failed attempts per email
const failedAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { code } = await req.json();
  if (!code || typeof code !== "string" || code.length !== 6) {
    return NextResponse.json({ error: "Code invalide" }, { status: 400 });
  }

  // Check brute force limit
  const emailKey = session.user.email.toLowerCase();
  const attempts = failedAttempts.get(emailKey);
  if (attempts) {
    if (Date.now() - attempts.lastAttempt > WINDOW_MS) {
      failedAttempts.delete(emailKey);
    } else if (attempts.count >= MAX_ATTEMPTS) {
      return NextResponse.json({ error: "Trop de tentatives" }, { status: 429 });
    }
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
  }

  if (user.emailVerified) {
    return NextResponse.json({ message: "Email déjà vérifié" });
  }

  if (user.verificationCode !== code) {
    // Record failed attempt
    const current = failedAttempts.get(emailKey);
    failedAttempts.set(emailKey, {
      count: (current?.count ?? 0) + 1,
      lastAttempt: Date.now(),
    });
    return NextResponse.json({ error: "Code incorrect" }, { status: 400 });
  }

  // Success — clear failed attempts
  failedAttempts.delete(emailKey);

  await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: true, verificationCode: null },
  });

  return NextResponse.json({ message: "Email vérifié avec succès" });
}
