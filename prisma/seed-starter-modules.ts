/**
 * SAFE ADDITIVE SEED — Ajoute uniquement les 2 modules Starter
 * Ne touche PAS aux données existantes
 * Run: npx tsx prisma/seed-starter-modules.ts
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { V2_MODULE_STARTER_01_LESSONS } from "./data/v2_module_starter_01";
import { V2_MODULE_STARTER_02_LESSONS } from "./data/v2_module_starter_02";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Adding 2 Starter funnel modules (safe, additive only)...");

  // Check if modules already exist
  const existing23 = await prisma.module.findFirst({ where: { order: 23 } });
  const existing24 = await prisma.module.findFirst({ where: { order: 24 } });

  if (existing23 || existing24) {
    console.log("Starter modules already exist, cleaning them first...");
    // Delete lessons and quizzes for these modules
    for (const mod of [existing23, existing24].filter(Boolean)) {
      if (!mod) continue;
      const lessons = await prisma.lesson.findMany({ where: { moduleId: mod.id } });
      for (const lesson of lessons) {
        const quiz = await prisma.quiz.findFirst({ where: { lessonId: lesson.id } });
        if (quiz) {
          await prisma.quizQuestion.deleteMany({ where: { quizId: quiz.id } });
          await prisma.quiz.delete({ where: { id: quiz.id } });
        }
        await prisma.lesson.delete({ where: { id: lesson.id } });
      }
      await prisma.module.delete({ where: { id: mod.id } });
    }
    console.log("Cleaned existing starter modules.");
  }

  // Create Module 23
  const mod23 = await prisma.module.create({
    data: {
      title: "Le game IA en 2026",
      description: "Pourquoi le marché explose, ce que font ceux qui gagnent, et ton premier hands-on avec Claude",
      order: 23,
    },
  });
  console.log(`Module 23 created: ${mod23.id}`);

  // Create Module 24
  const mod24 = await prisma.module.create({
    data: {
      title: "Ton projet, ta vision",
      description: "Identifie ton service IA, trouve tes premiers clients, et découvre ce qu'il te manque pour passer à l'action",
      order: 24,
    },
  });
  console.log(`Module 24 created: ${mod24.id}`);

  // Seed lessons + quizzes for Module 23
  const moduleLessons: [any[], typeof mod23][] = [
    [V2_MODULE_STARTER_01_LESSONS, mod23],
    [V2_MODULE_STARTER_02_LESSONS, mod24],
  ];

  let lessonCount = 0;
  for (const [lessons, mod] of moduleLessons) {
    for (const lessonData of lessons) {
      const lesson = await prisma.lesson.create({
        data: {
          title: lessonData.title,
          slug: lessonData.slug,
          description: lessonData.description,
          content: lessonData.content,
          exercise: lessonData.exercise || "",
          duration: lessonData.duration,
          order: lessonData.order,
          moduleId: mod.id,
        },
      });

      const quiz = await prisma.quiz.create({
        data: { lessonId: lesson.id, passingScore: 80 },
      });

      const questions = (lessonData.quiz || []).map((q: any, i: number) => ({
        type: q.type,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        order: i + 1,
      }));

      for (const q of questions) {
        await prisma.quizQuestion.create({
          data: { ...q, quizId: quiz.id },
        });
      }

      lessonCount++;
      console.log(`  Lesson: ${lessonData.title}`);
    }
  }

  console.log(`\nDone! Added 2 modules with ${lessonCount} lessons.`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
