import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// ═══════════════════════════════════════════════════
// IMPORTS — 22 modules v2
// ═══════════════════════════════════════════════════

// Bloc 1 — Le cadre
import { V2_MODULE_01_LESSONS } from "./data/v2_module_01";   // M1: Bienvenue & Objectif
import { V2_MODULE_02_LESSONS } from "./data/v2_module_02";   // M2: Découvrir les IA

// Bloc 2 — Tes outils de travail
import { V2_MODULE_03_LESSONS } from "./data/v2_module_03";   // M3: Apprendre à prompter
import { V2_MODULE_04_LESSONS } from "./data/v2_module_04";   // M4: IDE IA (Claude Code & Cursor)
import { V2_MODULE_05_LESSONS } from "./data/v2_module_05";   // M5: Git, GitHub & workflow

// Bloc 3 — Construire un site web
import { V2_MODULE_06_LESSONS } from "./data/v2_module_06";   // M6: Frontend (Next.js + Tailwind)
import { V2_MODULE_07_LESSONS } from "./data/v2_module_07";   // M7: Backend & Déploiement

// Bloc 4 — Les services que tu vas vendre
import { V2_MODULE_08_LESSONS } from "./data/v2_module_08";   // M8: Chatbots IA
import { V2_MODULE_09_LESSONS } from "./data/v2_module_09";   // M9: Agents vocaux IA
import { V2_MODULE_10_LESSONS } from "./data/v2_module_10";   // M10: Automatisations IA
import { V2_MODULE_11_LESSONS } from "./data/v2_module_11";   // M11: Génération de leads
import { V2_MODULE_12_LESSONS } from "./data/v2_module_12";   // M12: IA pour documents & data

// Bloc 5 — Industrialiser
import { V2_MODULE_13_LESSONS } from "./data/v2_module_13";   // M13: Construire un MVP
import { V2_MODULE_14_LESSONS } from "./data/v2_module_14";   // M14: Sécurité & bonnes pratiques
import { V2_MODULE_15_LESSONS } from "./data/v2_module_15";   // M15: DevOps & Monitoring

// Bloc 6 — Vendre
import { V2_MODULE_16_LESSONS } from "./data/v2_module_16";   // M16: Se structurer
import { V2_MODULE_17_LESSONS } from "./data/v2_module_17";   // M17: Créer ton offre
import { V2_MODULE_18_LESSONS } from "./data/v2_module_18";   // M18: Prospection
import { V2_MODULE_19_LESSONS } from "./data/v2_module_19";   // M19: Closer
import { V2_MODULE_20_LESSONS } from "./data/v2_module_20";   // M20: Livrer & Fidéliser

// Bloc 7 — Scaler
import { V2_MODULE_21_LESSONS } from "./data/v2_module_21";   // M21: Juridique & Admin
import { V2_MODULE_22_LESSONS } from "./data/v2_module_22";   // M22: Scaler à 10K€/mois

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// ═══════════════════════════════════════════════════
// MODULE MAP — [lessons array, target module index (0-based)]
// ═══════════════════════════════════════════════════
const MODULE_MAP: [any[], number][] = [
  // Bloc 1 — Le cadre
  [V2_MODULE_01_LESSONS, 0],    // M1: Bienvenue & Objectif
  [V2_MODULE_02_LESSONS, 1],    // M2: Découvrir les IA
  // Bloc 2 — Tes outils de travail
  [V2_MODULE_03_LESSONS, 2],    // M3: Apprendre à prompter
  [V2_MODULE_04_LESSONS, 3],    // M4: IDE IA
  [V2_MODULE_05_LESSONS, 4],    // M5: Git & GitHub
  // Bloc 3 — Construire un site web
  [V2_MODULE_06_LESSONS, 5],    // M6: Frontend
  [V2_MODULE_07_LESSONS, 6],    // M7: Backend & Déploiement
  // Bloc 4 — Les services à vendre
  [V2_MODULE_08_LESSONS, 7],    // M8: Chatbots IA
  [V2_MODULE_09_LESSONS, 8],    // M9: Agents vocaux
  [V2_MODULE_10_LESSONS, 9],    // M10: Automatisations
  [V2_MODULE_11_LESSONS, 10],   // M11: Génération de leads
  [V2_MODULE_12_LESSONS, 11],   // M12: Documents & data
  // Bloc 5 — Industrialiser
  [V2_MODULE_13_LESSONS, 12],   // M13: MVP
  [V2_MODULE_14_LESSONS, 13],   // M14: Sécurité
  [V2_MODULE_15_LESSONS, 14],   // M15: DevOps
  // Bloc 6 — Vendre
  [V2_MODULE_16_LESSONS, 15],   // M16: Se structurer
  [V2_MODULE_17_LESSONS, 16],   // M17: Créer ton offre
  [V2_MODULE_18_LESSONS, 17],   // M18: Prospection
  [V2_MODULE_19_LESSONS, 18],   // M19: Closer
  [V2_MODULE_20_LESSONS, 19],   // M20: Livrer & Fidéliser
  // Bloc 7 — Scaler
  [V2_MODULE_21_LESSONS, 20],   // M21: Juridique
  [V2_MODULE_22_LESSONS, 21],   // M22: Scaler à 10K€
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
  const totalModules = 22;
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
  // 22 MODULES
  // ═══════════════════════════════════════════════════
  const modules = [];
  const moduleDefinitions = [
    // Bloc 1 — Le cadre
    { title: "Bienvenue & Objectif", description: "Ce que tu vas apprendre, le marché de l'IA et ta roadmap", order: 1 },
    { title: "Découvrir les IA", description: "ChatGPT, Claude, Gemini — les IA qu'on va utiliser et pourquoi", order: 2 },
    // Bloc 2 — Tes outils de travail
    { title: "Apprendre à prompter", description: "Les bases et techniques avancées pour des résultats précis", order: 3 },
    { title: "Les IDE IA : Claude Code & Cursor", description: "Installer, configurer et coder avec les IDE augmentés par l'IA", order: 4 },
    { title: "Git, GitHub & le workflow développeur", description: "Versionner ton code et collaborer comme un pro", order: 5 },
    // Bloc 3 — Construire un site web
    { title: "Frontend : Next.js + Tailwind", description: "Créer des interfaces web modernes et responsive", order: 6 },
    { title: "Backend & Déploiement", description: "Supabase, SQL, API Routes, Stripe et Vercel", order: 7 },
    // Bloc 4 — Les services que tu vas vendre
    { title: "Chatbots IA", description: "Créer et déployer des chatbots sur site web et réseaux sociaux", order: 8 },
    { title: "Agents vocaux IA", description: "Créer des agents téléphoniques avec ElevenLabs", order: 9 },
    { title: "Automatisations IA pour entreprises", description: "Automatiser des process métier avec l'IA — cas concrets par secteur", order: 10 },
    { title: "Génération de leads avec l'IA", description: "Scraping, enrichissement et séquences outbound automatisées", order: 11 },
    { title: "IA pour documents & data", description: "PDF, OCR, Excel : traitement de données pour entreprises", order: 12 },
    // Bloc 5 — Industrialiser
    { title: "Construire un MVP complet", description: "Ton premier vrai produit de A à Z en 48h", order: 13 },
    { title: "Sécurité & bonnes pratiques", description: "RLS, validation, secrets et checklist production", order: 14 },
    { title: "DevOps & Monitoring", description: "Git avancé, CI/CD, Vercel Analytics et maintenance pro", order: 15 },
    // Bloc 6 — Vendre
    { title: "Se structurer pour réussir", description: "Organisation, outils, CRM et image professionnelle", order: 16 },
    { title: "Créer ton offre", description: "Les services IA rentables, pricing et supports de vente", order: 17 },
    { title: "Prospection", description: "Réseau, LinkedIn, cold email, cold call et automatisation", order: 18 },
    { title: "Closer", description: "L'appel de closing, objections et signature du deal", order: 19 },
    { title: "Livrer & Fidéliser", description: "Process de livraison, retainers et referrals", order: 20 },
    // Bloc 7 — Scaler
    { title: "Juridique & Admin", description: "Statuts, contrats, RGPD, facturation et assurances", order: 21 },
    { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 22 },
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
        xpEarned: 50,
      },
    });
  }

  if (firstLessons[3]) {
    await prisma.lessonProgress.create({
      data: {
        userId: student.id,
        lessonId: firstLessons[3].id,
        status: "in_progress",
        xpEarned: 0,
      },
    });
  }

  console.log("Sample progress created for test student");
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
