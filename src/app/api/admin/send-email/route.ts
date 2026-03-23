import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorise" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { tier, subject, message } = body;

    if (!subject || !message) {
      return NextResponse.json({ error: "Sujet et message requis" }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json({ error: "Service email non configure" }, { status: 500 });
    }

    // Build user filter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = { role: "student" };

    if (tier && tier !== "tous") {
      where.enrollments = { some: { tier } };
    }

    const users = await prisma.user.findMany({
      where,
      select: { email: true, name: true },
    });

    const validUsers = users.filter((u) => u.email);

    let sentCount = 0;

    // Send emails in batches of 50
    const batchSize = 50;
    for (let i = 0; i < validUsers.length; i += batchSize) {
      const batch = validUsers.slice(i, i + batchSize);
      const promises = batch.map((user) =>
        resend.emails
          .send({
            from: "OpexIA Academy <noreply@opexia.fr>",
            to: user.email!,
            subject,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px;">
                <div style="text-align: center; margin-bottom: 32px;">
                  <span style="font-size: 24px; font-weight: bold;">
                    <span style="color: #111;">Opex</span><span style="color: #FF1744;">IA</span>
                  </span>
                </div>
                <p style="color: #111; font-size: 15px; margin-bottom: 8px;">Bonjour ${user.name || ""},</p>
                <div style="color: #333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
                <p style="color: #999; font-size: 12px; text-align: center;">OpexIA Academy</p>
              </div>
            `,
          })
          .then(() => {
            sentCount++;
          })
          .catch(() => {
            // Skip failed sends
          })
      );
      await Promise.all(promises);
    }

    return NextResponse.json({ sent: sentCount });
  } catch (error) {
    console.error("POST /api/admin/send-email error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
