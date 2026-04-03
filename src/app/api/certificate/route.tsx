import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_MODULE_ACCESS } from "@/lib/constants";
import { renderToBuffer } from "@react-pdf/renderer";
import { CertificatePDF } from "@/lib/pdf/CertificatePDF";
import React from "react";
import crypto from "crypto";

/* ─── Certificate definitions (must match the client-side list) ─── */
const CERTIFICATE_DEFS = [
  {
    phase: 1,
    title: "Fondations IA",
    desc: "Maitrise des bases de l'IA et du prompt engineering.",
    modules: [1],
    filename: "certificat-fondations-ia",
  },
  {
    phase: 2,
    title: "Developpeur IA",
    desc: "Savoir developper avec l'IA, automatiser et construire des applications.",
    modules: [2, 3, 4, 5, 6],
    filename: "certificat-developpeur-ia",
  },
  {
    phase: 3,
    title: "Architecte Solutions",
    desc: "Maitrise de l'architecture de solutions IA complexes.",
    modules: [7, 8, 9, 10, 11, 12, 13],
    filename: "certificat-architecte-solutions",
  },
  {
    phase: 4,
    title: "Securite & Production",
    desc: "Connaissance de la securite, conformite et deploiement en production.",
    modules: [14, 15],
    filename: "certificat-securite-production",
  },
  {
    phase: 5,
    title: "Entrepreneur IA",
    desc: "Savoir creer une offre, fixer ses prix et livrer un MVP.",
    modules: [16, 17, 18, 19],
    filename: "certificat-entrepreneur-ia",
  },
  {
    phase: 6,
    title: "Scale & Mastery",
    desc: "Maitrise du scaling, gestion avancee et strategies de croissance.",
    modules: [20, 21, 22],
    filename: "certificat-scale-mastery",
  },
  {
    phase: 7,
    title: "Diplome OpexIA Academy",
    desc: "Completion de l'integralite de la formation OpexIA Academy.",
    modules: Array.from({ length: 22 }, (_, i) => i + 1),
    filename: "diplome-opexia-academy",
  },
];

function generateCertificateId(userId: string, phase: number): string {
  const hash = crypto
    .createHash("sha256")
    .update(`${userId}-${phase}-opexia-cert`)
    .digest("hex")
    .slice(0, 12)
    .toUpperCase();
  return `OPEXIA-P${phase}-${hash}`;
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const userId = session.user.id;

  const phaseStr = req.nextUrl.searchParams.get("phase");
  const phase = parseInt(phaseStr || "", 10);
  if (isNaN(phase) || phase < 1 || phase > 7) {
    return NextResponse.json({ error: "Phase invalide (1-7)" }, { status: 400 });
  }

  const certDef = CERTIFICATE_DEFS.find((c) => c.phase === phase);
  if (!certDef) {
    return NextResponse.json({ error: "Certificat introuvable" }, { status: 404 });
  }

  // Tier/access check — admin bypasses
  const isAdmin = session.user.role === "admin";
  if (!isAdmin) {
    const TIER_PRIORITY: Record<string, number> = { free: 0, starter: 1, academy: 2, one_to_one: 3 };
    let userTier = "starter";
    const enrollments = await prisma.enrollment.findMany({
      where: { userId, status: "active" },
    });
    const bestEnrollment = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] ?? 0) - (TIER_PRIORITY[a.tier] ?? 0))[0];
    if (bestEnrollment) {
      userTier = bestEnrollment.tier;
    }
    const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.starter;
    const allModulesAccessible = certDef.modules.every((m) => accessibleModules.includes(m));
    if (!allModulesAccessible) {
      return NextResponse.json({ error: "Acces non autorise pour votre forfait" }, { status: 403 });
    }
  }

  // Verify the user has completed all required modules
  const modules = await prisma.module.findMany({
    where: { order: { in: certDef.modules } },
    include: {
      lessons: {
        select: {
          id: true,
          progress: {
            where: { userId },
            select: { status: true },
          },
        },
      },
    },
  });

  for (const mod of modules) {
    if (mod.lessons.length === 0) continue;
    const allCompleted = mod.lessons.every(
      (l) => l.progress[0]?.status === "completed"
    );
    if (!allCompleted) {
      return NextResponse.json(
        { error: "Tu n'as pas encore complete tous les modules requis pour ce certificat." },
        { status: 403 }
      );
    }
  }

  // Get user name
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true, email: true },
  });

  const userName = user?.name || user?.email || "Apprenant";

  // Generate certificate ID
  const certificateId = generateCertificateId(userId, phase);

  // Format date
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Generate PDF
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(
    React.createElement(CertificatePDF, {
      data: {
        title: certDef.title,
        description: certDef.desc,
        userName,
        date: dateStr,
        certificateId,
      },
    }) as any
  );

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${certDef.filename}.pdf"`,
      "Cache-Control": "private, no-cache",
    },
  });
}
