import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import pg from "pg";
import { V2_MODULE_01_LESSONS } from "./prisma/data/v2_module_01";
import { V2_MODULE_02_LESSONS } from "./prisma/data/v2_module_02";

const url = (process.env.DIRECT_URL || process.env.DATABASE_URL || "").replace(/\n/g, "").replace(/"/g, "").trim();
const client = new pg.Client({ connectionString: url });

async function main() {
  await client.connect();

  const mod1 = await client.query('SELECT id FROM "Module" WHERE "order" = 1');
  const mod2 = await client.query('SELECT id FROM "Module" WHERE "order" = 2');
  const mod1Id = mod1.rows[0]?.id;
  const mod2Id = mod2.rows[0]?.id;

  // Insert new lessons for module 1
  if (mod1Id) {
    for (const lesson of V2_MODULE_01_LESSONS) {
      await client.query(
        'INSERT INTO "Lesson" (id, title, slug, description, content, exercise, duration, "order", "moduleId", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())',
        [lesson.title, lesson.slug, lesson.description, lesson.content, lesson.exercise || "", lesson.duration, lesson.order, mod1Id]
      );
      console.log("  Inserted:", lesson.title);
    }
  }

  // Insert new lessons for module 2
  if (mod2Id) {
    for (const lesson of V2_MODULE_02_LESSONS) {
      await client.query(
        'INSERT INTO "Lesson" (id, title, slug, description, content, exercise, duration, "order", "moduleId", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())',
        [lesson.title, lesson.slug, lesson.description, lesson.content, lesson.exercise || "", lesson.duration, lesson.order, mod2Id]
      );
      console.log("  Inserted:", lesson.title);
    }
  }

  // Insert quizzes
  for (const lessons of [V2_MODULE_01_LESSONS, V2_MODULE_02_LESSONS]) {
    for (const lesson of lessons) {
      if (!lesson.quiz || lesson.quiz.length === 0) continue;
      const lessonRow = await client.query('SELECT id FROM "Lesson" WHERE slug = $1', [lesson.slug]);
      if (!lessonRow.rows[0]) continue;
      const lessonId = lessonRow.rows[0].id;

      const quizResult = await client.query(
        'INSERT INTO "Quiz" (id, "lessonId", "passingScore") VALUES (gen_random_uuid(), $1, 80) RETURNING id',
        [lessonId]
      );
      const quizId = quizResult.rows[0].id;

      for (let i = 0; i < lesson.quiz.length; i++) {
        const q = lesson.quiz[i];
        await client.query(
          'INSERT INTO "QuizQuestion" (id, "quizId", "order", type, question, options, "correctAnswer", explanation) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)',
          [quizId, i + 1, q.type, q.question, q.options, q.correctAnswer, q.explanation]
        );
      }
      console.log("  Quiz for:", lesson.slug);
    }
  }

  await client.end();
  console.log("Done!");
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
