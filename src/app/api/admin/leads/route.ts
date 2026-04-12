import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
  }

  try {
    const [leads, totalCount, todayCount, convertedCount] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        take: 200,
      }),
      prisma.lead.count(),
      prisma.lead.count({
        where: {
          createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
        },
      }),
      prisma.lead.count({ where: { status: "converted" } }),
    ]);

    // Check which leads have created accounts
    const emails = leads.map((l) => l.email);
    const usersWithAccounts = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { email: true },
    });
    const accountSet = new Set(usersWithAccounts.map((u) => u.email));

    const leadsWithStatus = leads.map((lead) => ({
      ...lead,
      hasAccount: accountSet.has(lead.email),
    }));

    return NextResponse.json({
      leads: leadsWithStatus,
      stats: {
        total: totalCount,
        today: todayCount,
        converted: convertedCount,
        withAccount: usersWithAccounts.length,
      },
    });
  } catch (error) {
    console.error("GET /api/admin/leads error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });

    await prisma.lead.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/leads error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
