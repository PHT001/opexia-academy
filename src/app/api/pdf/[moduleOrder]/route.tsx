import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { MODULES } from "@/lib/constants";
import { renderToBuffer } from "@react-pdf/renderer";
import { ModuleRecapPDF } from "@/lib/pdf/ModuleRecapPDF";
import {
  extractRecapFromBlocks,
  type ModuleRecap,
} from "@/lib/pdf/extractRecapContent";
import { detectContentFormat, parseLessonBlocks } from "@/lib/parseLessonContent";
import React from "react";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ moduleOrder: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });
  }

  const { moduleOrder: orderStr } = await params;
  const moduleOrder = parseInt(orderStr, 10);
  if (isNaN(moduleOrder) || moduleOrder < 1 || moduleOrder > 16) {
    return NextResponse.json({ error: "Module invalide" }, { status: 400 });
  }

  const moduleInfo = MODULES[moduleOrder - 1];
  if (!moduleInfo) {
    return NextResponse.json({ error: "Module introuvable" }, { status: 404 });
  }

  // Fetch module with lessons from DB
  const dbModule = await prisma.module.findFirst({
    where: { order: moduleOrder },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        select: {
          order: true,
          title: true,
          content: true,
        },
      },
    },
  });

  if (!dbModule) {
    return NextResponse.json({ error: "Module introuvable en DB" }, { status: 404 });
  }

  // Build recap data
  const recapData: ModuleRecap = {
    moduleOrder,
    moduleTitle: moduleInfo.title,
    moduleDescription: moduleInfo.description,
    lessons: dbModule.lessons.map((lesson) => {
      let elements: ReturnType<typeof extractRecapFromBlocks> = [];

      if (lesson.content) {
        const format = detectContentFormat(lesson.content);
        if (format === "blocks") {
          try {
            const blocks = parseLessonBlocks(lesson.content);
            elements = extractRecapFromBlocks(blocks);
          } catch {
            // Skip if parsing fails
          }
        }
        // For HTML content, we skip (no structured extraction)
      }

      return {
        order: lesson.order,
        title: lesson.title,
        elements,
      };
    }),
  };

  // Generate PDF
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(
    React.createElement(ModuleRecapPDF, { data: recapData }) as any
  );

  // Sanitize filename
  const safeTitle = moduleInfo.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="module-${moduleOrder}-${safeTitle}.pdf"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
