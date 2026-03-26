import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// ═══════════════════════════════════════════════════
// 34 Fake French Students
// ═══════════════════════════════════════════════════

const FAKE_STUDENTS = [
  { firstName: "Kylian", lastName: "Vasseur" },
  { firstName: "Yasmine", lastName: "Belkacem" },
  { firstName: "Axel", lastName: "Parmentier" },
  { firstName: "Sofia", lastName: "Tran" },
  { firstName: "Rayan", lastName: "Chabane" },
  { firstName: "Maëlys", lastName: "Rodrigues" },
  { firstName: "Enzo", lastName: "Kalifa" },
  { firstName: "Inaya", lastName: "Lecointre" },
  { firstName: "Bastien", lastName: "N'Diaye" },
  { firstName: "Lola", lastName: "Hammadi" },
  { firstName: "Sacha", lastName: "Vieira" },
  { firstName: "Amina", lastName: "Delcourt" },
  { firstName: "Théo", lastName: "Bensalem" },
  { firstName: "Noémie", lastName: "Kessler" },
  { firstName: "Ilyes", lastName: "Carpentier" },
  { firstName: "Chloé", lastName: "Ouedraogo" },
  { firstName: "Mathéo", lastName: "Phan" },
  { firstName: "Léna", lastName: "Ferreira" },
  { firstName: "Nolan", lastName: "Diallo" },
  { firstName: "Camille", lastName: "Becker" },
  { firstName: "Bilal", lastName: "Morin" },
  { firstName: "Margaux", lastName: "Yilmaz" },
  { firstName: "Raphaël", lastName: "Da Silva" },
  { firstName: "Jade", lastName: "Nguyen" },
  { firstName: "Ethan", lastName: "Koné" },
  { firstName: "Manon", lastName: "Alami" },
  { firstName: "Dylan", lastName: "Lefranc" },
  { firstName: "Anaïs", lastName: "Mensah" },
  { firstName: "Timéo", lastName: "Ribeiro" },
  { firstName: "Louane", lastName: "Bouvier" },
  { firstName: "Adam", lastName: "Traore" },
  { firstName: "Eva", lastName: "Sanchez" },
  { firstName: "Maxence", lastName: "Haddad" },
  { firstName: "Lina", lastName: "Gauthier" },
];

// ═══════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(daysAgoMin: number, daysAgoMax: number): Date {
  const daysAgo = randomInt(daysAgoMin, daysAgoMax);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(randomInt(8, 22), randomInt(0, 59), randomInt(0, 59));
  return date;
}

function pickTier(index: number): string {
  // 25 academy, 6 starter, 3 one_to_one
  if (index < 3) return "one_to_one";
  if (index < 9) return "starter";
  return "academy";
}

// ═══════════════════════════════════════════════════
// Main seed function
// ═══════════════════════════════════════════════════

async function main() {
  console.log("Seeding 34 fake students...\n");

  // Get all lessons from the database
  const allLessons = await prisma.lesson.findMany({
    select: { id: true, moduleId: true, order: true },
    orderBy: [{ module: { order: "asc" } }, { order: "asc" }],
  });

  if (allLessons.length === 0) {
    console.error("No lessons found in database. Please seed lessons first.");
    process.exit(1);
  }

  console.log(`Found ${allLessons.length} lessons in database.\n`);

  const hashedPassword = await bcrypt.hash("bot-no-login-placeholder", 12);

  // Shuffle student order for tier assignment
  const shuffledIndices = FAKE_STUDENTS.map((_, i) => i).sort(() => Math.random() - 0.5);

  for (let i = 0; i < FAKE_STUDENTS.length; i++) {
    const student = FAKE_STUDENTS[i];
    const tierIndex = shuffledIndices[i];
    const tier = pickTier(tierIndex);
    const email = `${student.firstName.toLowerCase()}.${student.lastName.toLowerCase()}.bot@opexia-internal.com`;
    const fullName = `${student.firstName} ${student.lastName}`;
    const createdAt = randomDate(30, 60);

    // Check if bot already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      console.log(`  [SKIP] ${fullName} already exists`);
      continue;
    }

    // Random XP between 200 and 3500
    const targetXP = randomInt(200, 3500);
    // Random completed lessons between 3 and 40 (capped at available lessons)
    const completedLessonCount = Math.min(randomInt(3, 40), allLessons.length);
    // Random streak between 0 and 15
    const streakDays = randomInt(0, 15);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        name: fullName,
        hashedPassword,
        role: "student",
        emailVerified: true,
        isBot: true,
        onboardingCompleted: true,
        createdAt,
        updatedAt: new Date(),
      },
    });

    // Create enrollment
    await prisma.enrollment.create({
      data: {
        userId: user.id,
        tier,
        status: "active",
        createdAt,
      },
    });

    // Pick random lessons to complete (sequential from beginning for realism)
    const lessonsToComplete = allLessons.slice(0, completedLessonCount);
    const xpPerLesson = Math.floor(targetXP / completedLessonCount);
    let remainingXP = targetXP;

    for (let j = 0; j < lessonsToComplete.length; j++) {
      const lesson = lessonsToComplete[j];
      const isLast = j === lessonsToComplete.length - 1;
      const xp = isLast ? remainingXP : Math.min(xpPerLesson + randomInt(-10, 10), remainingXP);
      remainingXP -= xp;

      // Completed at random time after account creation
      const daysAfterCreation = randomInt(0, Math.min(30, Math.floor((Date.now() - createdAt.getTime()) / 86400000)));
      const completedAt = new Date(createdAt.getTime() + daysAfterCreation * 86400000 + randomInt(0, 86400000));

      await prisma.lessonProgress.create({
        data: {
          userId: user.id,
          lessonId: lesson.id,
          status: "completed",
          completedAt,
          xpEarned: Math.max(xp, 0),
        },
      });
    }

    // Create streak records (consecutive days ending today or recently)
    if (streakDays > 0) {
      const streakStart = new Date();
      streakStart.setDate(streakStart.getDate() - streakDays + 1);
      streakStart.setHours(0, 0, 0, 0);

      for (let d = 0; d < streakDays; d++) {
        const streakDate = new Date(streakStart);
        streakDate.setDate(streakDate.getDate() + d);
        streakDate.setHours(0, 0, 0, 0);

        await prisma.streak.upsert({
          where: {
            userId_date: { userId: user.id, date: streakDate },
          },
          update: {},
          create: {
            userId: user.id,
            date: streakDate,
          },
        });
      }
    }

    console.log(`  [OK] ${fullName} — ${tier} — ${completedLessonCount} lessons — ${targetXP} XP — ${streakDays}d streak`);
  }

  console.log("\nDone! 34 fake students seeded.");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
