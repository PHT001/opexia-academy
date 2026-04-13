import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { profilePhoto: true },
  });

  return NextResponse.json({ profilePhoto: user?.profilePhoto || null });
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const body = await req.json();

  // Handle profile photo update
  if ("profilePhoto" in body) {
    const photo = body.profilePhoto;
    // Allow null (remove photo) or base64 string up to 500KB
    if (photo !== null && (typeof photo !== "string" || photo.length > 700_000 || (!photo.startsWith("data:image/") && photo.length > 100))) {
      return NextResponse.json({ error: "Photo invalide ou trop lourde" }, { status: 400 });
    }
    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: { profilePhoto: photo },
    });
    return NextResponse.json({ profilePhoto: updated.profilePhoto });
  }

  // Handle name update
  const { name } = body;
  if (!name || typeof name !== "string" || name.trim().length < 1) {
    return NextResponse.json({ error: "Nom invalide" }, { status: 400 });
  }

  const updated = await prisma.user.update({
    where: { id: session.user.id },
    data: { name: name.trim() },
  });

  return NextResponse.json({ name: updated.name });
}
