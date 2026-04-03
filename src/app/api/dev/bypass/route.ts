import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const TEST_PASSWORD = "OpexiaTest2024!";
const VALID_TIERS = ["free", "starter", "academy", "one_to_one"];

export async function POST(req: NextRequest) {
  // Block in production
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  const { tier } = await req.json();

  if (!tier || !VALID_TIERS.includes(tier)) {
    return NextResponse.json({ error: "Tier invalide" }, { status: 400 });
  }

  const email = `test-${tier}@opexia.test`;
  const name = `Test ${tier.charAt(0).toUpperCase() + tier.slice(1).replace("_", " ")}`;

  // Find or create the test user
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const hashed = await bcrypt.hash(TEST_PASSWORD, 10);
    user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword: hashed,
        role: "student",
        emailVerified: true,
        onboardingCompleted: false,
        isBot: true,
      },
    });
  } else {
    // Reset onboarding so user can re-test it
    await prisma.user.update({
      where: { id: user.id },
      data: { onboardingCompleted: false },
    });
  }

  // Upsert enrollment for the requested tier
  // First delete all existing enrollments for this user
  await prisma.enrollment.deleteMany({ where: { userId: user.id } });

  // Create the enrollment for the requested tier
  if (tier !== "free") {
    await prisma.enrollment.create({
      data: { userId: user.id, tier, status: "active" },
    });
  } else {
    await prisma.enrollment.create({
      data: { userId: user.id, tier: "free", status: "active" },
    });
  }

  return NextResponse.json({
    email,
    password: TEST_PASSWORD,
    tier,
    name,
  });
}
