import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Import lesson data — 13 formation modules (new structure)
import { MODULE_1_LESSONS } from "./data/new_module_01";   // M1: Découvrir l'IA
import { MODULE_2_LESSONS } from "./data/new_module_02";   // M2: Prompt Engineering
import { MODULE_3_LESSONS } from "./data/new_module_03";   // M3: Sites web
import { MODULE_4_LESSONS } from "./data/new_module_04";   // M4: Backend + APIs
import { MODULE_5_LESSONS } from "./data/new_module_05";   // M5: APIs avancées, Stripe, Webhooks
import { MODULE_6_LESSONS } from "./data/new_module_06";   // M6: Automatisations
import { MODULE_7_LESSONS } from "./data/new_module_07";   // M7: Chatbots IA
import { MODULE_8_LESSONS } from "./data/new_module_08";   // M8: Agents IA
import { MODULE_10_LESSONS } from "./data/new_module_10";  // M9: Offre et prix
import { MODULE_11_LESSONS } from "./data/new_module_11";  // M10: Trouver des clients (+ closing)
import { MODULE_12_LESSONS } from "./data/new_module_12";  // M11: Livrer et fidéliser (+ support)
import { MODULE_9_LESSONS } from "./data/new_module_09";   // M12: Construire un MVP
import { MODULE_13_SCALER_LESSONS } from "./data/new_module_13_scaler";  // M13: Scaler à 10K€/mois
import { MODULE_14_LESSONS } from "./data/new_module_14";  // M14: Juridique, contrats et admin

// Import masterclass data
import { MASTERCLASS_CLAUDE_CODE_LESSONS } from "./data/masterclass_claude_code";
import { MASTERCLASS_OPENCLAW_LESSONS } from "./data/masterclass_openclaw";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// Map file imports to NEW module order (1-13 formation + 14-15 masterclass)
// Each array is [lessons, targetModuleIndex (0-based)]
const MODULE_MAP: [any[], number][] = [
  [MODULE_1_LESSONS, 0],     // M1: Découvrir l'IA
  [MODULE_2_LESSONS, 1],     // M2: Prompt Engineering
  [MODULE_3_LESSONS, 2],     // M3: Sites web
  [MODULE_4_LESSONS, 3],     // M4: Backend + Supabase
  [MODULE_5_LESSONS, 4],     // M5: APIs avancées, Stripe, Webhooks
  [MODULE_6_LESSONS, 5],     // M6: Automatisations
  [MODULE_7_LESSONS, 6],     // M7: Chatbots
  [MODULE_8_LESSONS, 7],     // M8: Agents IA
  [MODULE_10_LESSONS, 8],    // M9: Offre et prix
  [MODULE_11_LESSONS, 9],    // M10: Trouver des clients
  [MODULE_12_LESSONS, 10],   // M11: Livrer et fidéliser
  [MODULE_9_LESSONS, 11],    // M12: Construire un MVP
  [MODULE_13_SCALER_LESSONS, 12],   // M13: Scaler à 10K€/mois
  [MODULE_14_LESSONS, 13],   // M14: Juridique
  [MASTERCLASS_CLAUDE_CODE_LESSONS, 14], // M15: Claude Code
  [MASTERCLASS_OPENCLAW_LESSONS, 15],    // M16: OpenClaw
];

function makeQuiz(lessonOrder: number): Array<{ type: string; question: string; options: string; correctAnswer: string; explanation: string; order: number }> {
  const defaultQuiz = [
    { q: `Quel est l'objectif principal de cette leçon ?`, o: ["Apprendre la théorie uniquement", "Appliquer les connaissances en pratique", "Combiner théorie et pratique", "Aucun objectif spécifique"], a: "Combiner théorie et pratique", e: "Chaque leçon de la formation combine théorie et exercices pratiques pour un apprentissage complet.", t: "mcq" },
    { q: "La pratique régulière est essentielle pour progresser dans l'IA.", o: ["Vrai", "Faux"], a: "Vrai", e: "L'apprentissage de l'IA passe par la pratique et l'expérimentation continue.", t: "true_false" },
    { q: "Quelle approche est la plus efficace pour apprendre l'IA ?", o: ["Lire uniquement de la documentation", "Regarder des tutoriels sans pratiquer", "Expérimenter et itérer sur des projets concrets", "Attendre d'avoir tout compris avant de commencer"], a: "Expérimenter et itérer sur des projets concrets", e: "L'apprentissage par la pratique et l'itération est la méthode la plus efficace.", t: "mcq" },
    { q: "Il faut maîtriser parfaitement la théorie avant de commencer à pratiquer.", o: ["Vrai", "Faux"], a: "Faux", e: "Action avant perfection. Lance-toi avec les bases et améliore en chemin.", t: "true_false" },
    { q: "Quelle est la meilleure façon de consolider ses apprentissages ?", o: ["Relire ses notes", "Réaliser les exercices de la leçon", "Enseigner ce qu'on a appris a quelqu'un d'autre", "Les trois a la fois"], a: "Les trois a la fois", e: "La combinaison relecture, pratique et enseignement est la méthode la plus efficace pour ancrer les connaissances.", t: "mcq" },
  ];

  return defaultQuiz.map((q, i) => ({
    type: q.t,
    question: q.q,
    options: JSON.stringify(q.o),
    correctAnswer: q.a,
    explanation: q.e,
    order: i + 1,
  }));
}

async function main() {
  const totalModules = 14 + 2; // 14 formation + 2 masterclasses
  console.log(`Seeding database with ${MODULE_MAP.reduce((s, [l]) => s + l.length, 0)} lessons across ${totalModules} modules...`);

  // Clean all data — use TRUNCATE CASCADE for PostgreSQL
  const tables = ["Referral","PipelineDeal","CoachingSession","Streak","QuizSubmission","LessonProgress","Enrollment","QuizQuestion","Quiz","Lesson","Module","User"];
  for (const t of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${t}" CASCADE;`);
  }

  // Users
  const adminPassword = await bcrypt.hash("admin123", 12);
  const studentPassword = await bcrypt.hash("test123", 12);

  const admin = await prisma.user.create({
    data: { name: "Admin Opexia", email: "admin@opexia.com", hashedPassword: adminPassword, role: "admin" },
  });

  const student = await prisma.user.create({
    data: { name: "Élève Test", email: "etudiant@test.com", hashedPassword: studentPassword, role: "student" },
  });

  console.log(`Admin: ${admin.email} / admin123`);
  console.log(`Student: ${student.email} / test123`);

  // ═══════════════════════════════════════════════════
  // 13 FORMATION MODULES + 2 MASTERCLASSES
  // ═══════════════════════════════════════════════════
  const modules = [];
  const moduleDefinitions = [
    { title: "Découvrir l'IA et lancer ton agence", description: "Comprendre l'IA, les outils, et poser les bases de ton business", order: 1 },
    { title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", order: 2 },
    { title: "Créer des sites web avec l'IA", description: "De zéro à un site en ligne + ton portfolio", order: 3 },
    { title: "Backend, Supabase et APIs", description: "Base de données, auth et premiers pas avec Supabase", order: 4 },
    { title: "APIs avancées, Stripe et Webhooks", description: "Paiements en ligne, webhooks et intégration IA", order: 5 },
    { title: "Automatisations", description: "Make, n8n : créer des machines qui bossent pour toi", order: 6 },
    { title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", order: 7 },
    { title: "Agents IA", description: "Des IA autonomes : veille, analyse et actions", order: 8 },
    { title: "Ton offre et tes prix", description: "De \"je sais faire\" à \"je vends\" — ton premier client", order: 9 },
    { title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing et upselling", order: 10 },
    { title: "Livrer et fidéliser", description: "Process de livraison, retainers et témoignages", order: 11 },
    { title: "Construire un MVP", description: "Ton premier vrai produit de A à Z", order: 12 },
    { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 13 },
    { title: "Juridique, contrats et admin", description: "Statuts, contrats, RGPD et facturation", order: 14 },
    { title: "Masterclass Claude Code", description: "Coder avec Claude directement dans ton terminal", order: 15 },
    { title: "Masterclass OpenClaw", description: "Assistant IA personnel self-hosted multi-canal", order: 16 },
  ];

  for (const def of moduleDefinitions) {
    const mod = await prisma.module.create({ data: { title: def.title, description: def.description, order: def.order } });
    modules.push(mod);
  }

  console.log(`${modules.length} modules created`);

  // Lessons + Quizzes — use MODULE_MAP to assign lessons to correct modules
  let lessonCount = 0;
  for (const [lessons, moduleIdx] of MODULE_MAP) {
    for (const lessonData of lessons) {
      const lesson = await prisma.lesson.create({
      data: {
        title: lessonData.title,
        slug: lessonData.slug,
        description: lessonData.description,
        content: lessonData.content,
        exercise: lessonData.exercise,
        duration: lessonData.duration,
        order: lessonData.order,
        moduleId: modules[moduleIdx].id,
      },
    });

    const quiz = await prisma.quiz.create({
      data: { lessonId: lesson.id, passingScore: 80 },
    });

    const ld = lessonData as any;
    const questions = ld.quiz
      ? ld.quiz.map((q: any, i: number) => ({
          type: q.type,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          order: i + 1,
        }))
      : makeQuiz(lessonData.order);
    for (const q of questions) {
      await prisma.quizQuestion.create({
        data: { ...q, quizId: quiz.id },
      });
    }

    lessonCount++;
    }
  }

  console.log(`${lessonCount} lessons created with quizzes`);

  // Sample progress for test student (first 3 lessons completed)
  const firstLessons = await prisma.lesson.findMany({
    orderBy: [{ moduleId: "asc" }, { order: "asc" }],
    take: 4,
  });

  for (let i = 0; i < 3; i++) {
    await prisma.lessonProgress.create({
      data: {
        userId: student.id,
        lessonId: firstLessons[i].id,
        status: "completed",
        completedAt: new Date(),
        xpEarned: 150,
      },
    });
  }

  // 4th lesson in progress
  await prisma.lessonProgress.create({
    data: {
      userId: student.id,
      lessonId: firstLessons[3].id,
      status: "in_progress",
    },
  });

  // Sample streak
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 3; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    await prisma.streak.create({ data: { userId: student.id, date: d } });
  }

  // Enrollment
  await prisma.enrollment.create({
    data: { userId: student.id, tier: "starter", status: "active" },
  });

  console.log("Seed complete!");
  console.log(`${lessonCount} lessons across ${modules.length} modules`);
  console.log(`  → 14 formation modules`);
  console.log(`  → 2 masterclass modules`);
  console.log("Test student has 3 completed lessons, 1 in progress, 3-day streak");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
