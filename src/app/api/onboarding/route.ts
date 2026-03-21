import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const body = await req.json();
  const { name, phone, discordUsername, age, profession } = body;

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
}
