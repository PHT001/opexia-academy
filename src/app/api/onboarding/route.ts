import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  try {
    const body = await req.json();
    let { name, phone, discordUsername, age, profession } = body;

    // Input validation & truncation
    if (name && typeof name === "string") name = name.slice(0, 100);
    if (phone && typeof phone === "string") phone = phone.slice(0, 20);
    if (discordUsername && typeof discordUsername === "string") discordUsername = discordUsername.slice(0, 50);
    if (profession && typeof profession === "string") profession = profession.slice(0, 100);
    // age comes as a range string like "16-20", "21-25" etc. or empty string
    if (age && typeof age === "string" && age.trim()) {
      const match = age.match(/(\d+)/);
      age = match ? parseInt(match[1], 10) : null;
    } else {
      age = null;
    }

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        ...(name ? { name } : {}),
        ...(phone ? { phone } : {}),
        ...(discordUsername ? { discordUsername } : {}),
        ...(age ? { age } : {}),
        ...(profession ? { profession } : {}),
        onboardingCompleted: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/onboarding error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
