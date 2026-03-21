import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// ═══════════════════════════════════════════════════
// IMPORTS — 22 modules (formation + masterclass)
// ═══════════════════════════════════════════════════

// Phase 1 — Fondations
import { MODULE_1_LESSONS } from "./data/new_module_01";                     // M1: Découvrir l'IA

// Phase 2 — Développeur IA
import { MODULE_2_LESSONS } from "./data/new_module_02";                     // M2: Prompt Engineering
import { MODULE_3_LESSONS } from "./data/new_module_03";                     // M3: Sites web
import { MODULE_4_DESIGN_LESSONS } from "./data/new_module_04_design";       // M4: Design & UI (NEW)
import { MODULE_4_LESSONS } from "./data/new_module_04";                     // M5: Backend Supabase
import { MODULE_5_LESSONS as MODULE_5_API_LESSONS } from "./data/new_module_05"; // M6: APIs, Stripe, Webhooks

// Phase 3 — Architecte Solutions
import { MODULE_5_LESSONS as MODULE_6_AUTO_LESSONS } from "./data/new_module_06"; // M7: Automatisations (file exports MODULE_5_LESSONS)
import { MODULE_6_LESSONS as MODULE_7_CHATBOT_LESSONS } from "./data/new_module_07"; // M8: Chatbots IA (file exports MODULE_6_LESSONS)
import { MODULE_9_MULTICHANNEL_LESSONS } from "./data/new_module_09_multichannel"; // M9: Multi-canal (NEW)
import { MODULE_7_LESSONS as MODULE_8_AGENT_LESSONS } from "./data/new_module_08"; // M10: Agents IA (file exports MODULE_7_LESSONS)
import { MODULE_11_VOICE_LESSONS } from "./data/new_module_11_voice";        // M11: Voice AI (NEW)
import { MODULE_9_LESSONS } from "./data/new_module_09";                     // M12: Construire un MVP
import { MODULE_13_DOCUMENTS_LESSONS } from "./data/new_module_13_documents"; // M13: IA documents (NEW)

// Phase 4 — Sécurité & Production
import { MODULE_14_SECURITY_LESSONS } from "./data/new_module_14_security";  // M14: Sécurité (NEW)
import { MODULE_15_DEVOPS_LESSONS } from "./data/new_module_15_devops";      // M15: DevOps (NEW)

// Phase 5 — Entrepreneur
import { MODULE_10_LESSONS } from "./data/new_module_10";                    // M16: Offre et prix
import { MODULE_11_LESSONS } from "./data/new_module_11";                    // M17: Trouver des clients
import { MODULE_12_LESSONS } from "./data/new_module_12";                    // M18: Livrer et fidéliser
import { MODULE_14_LESSONS } from "./data/new_module_14";                    // M19: Juridique

// Phase 6 — Scale & Mastery
import { MODULE_13_SCALER_LESSONS } from "./data/new_module_13_scaler";      // M20: Scaler à 10K€
import { MODULE_21_MULTITENANT_LESSONS } from "./data/new_module_21_multitenant"; // M21: Multi-tenant (NEW)
import { MODULE_22_MASTERCLASS_TOOLS_LESSONS } from "./data/new_module_22_masterclass_tools"; // M22: Masterclass (NEW)

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// ═══════════════════════════════════════════════════
// MODULE MAP — [lessons array, target module index (0-based)]
// ═══════════════════════════════════════════════════
const MODULE_MAP: [any[], number][] = [
  // Phase 1
  [MODULE_1_LESSONS, 0],                   // M1: Découvrir l'IA
  // Phase 2
  [MODULE_2_LESSONS, 1],                   // M2: Prompt Engineering
  [MODULE_3_LESSONS, 2],                   // M3: Sites web
  [MODULE_4_DESIGN_LESSONS, 3],            // M4: Design & UI (NEW)
  [MODULE_4_LESSONS, 4],                   // M5: Backend Supabase
  [MODULE_5_API_LESSONS, 5],               // M6: APIs, Stripe
  // Phase 3
  [MODULE_6_AUTO_LESSONS, 6],              // M7: Automatisations
  [MODULE_7_CHATBOT_LESSONS, 7],           // M8: Chatbots IA
  [MODULE_9_MULTICHANNEL_LESSONS, 8],      // M9: Multi-canal (NEW)
  [MODULE_8_AGENT_LESSONS, 9],             // M10: Agents IA
  [MODULE_11_VOICE_LESSONS, 10],           // M11: Voice AI (NEW)
  [MODULE_9_LESSONS, 11],                  // M12: Construire un MVP
  [MODULE_13_DOCUMENTS_LESSONS, 12],       // M13: IA documents (NEW)
  // Phase 4
  [MODULE_14_SECURITY_LESSONS, 13],        // M14: Sécurité (NEW)
  [MODULE_15_DEVOPS_LESSONS, 14],          // M15: DevOps (NEW)
  // Phase 5
  [MODULE_10_LESSONS, 15],                 // M16: Offre et prix
  [MODULE_11_LESSONS, 16],                 // M17: Trouver des clients
  [MODULE_12_LESSONS, 17],                 // M18: Livrer et fidéliser
  [MODULE_14_LESSONS, 18],                 // M19: Juridique
  // Phase 6
  [MODULE_13_SCALER_LESSONS, 19],          // M20: Scaler à 10K€
  [MODULE_21_MULTITENANT_LESSONS, 20],     // M21: Multi-tenant (NEW)
  [MODULE_22_MASTERCLASS_TOOLS_LESSONS, 21], // M22: Masterclass outils (NEW)
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
    // Phase 1 — Fondations
    { title: "Découvrir l'IA et poser les bases", description: "Comprendre l'IA, les outils, et créer ton premier agent", order: 1 },
    // Phase 2 — Développeur IA
    { title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", order: 2 },
    { title: "Créer des sites web professionnels", description: "De zéro à un site en ligne avec Next.js + Tailwind", order: 3 },
    { title: "Design & UI pour développeurs", description: "Figma, principes de design et UI kits pour livrer du pro", order: 4 },
    { title: "Backend & Supabase", description: "Base de données, auth, storage et CRUD complet", order: 5 },
    { title: "APIs, Intégrations & Paiements", description: "API Routes, Stripe, webhooks et intégration Claude", order: 6 },
    // Phase 3 — Architecte Solutions
    { title: "Automatisations & Workflows", description: "Make, n8n : créer des machines qui bossent pour toi", order: 7 },
    { title: "Chatbots IA professionnels", description: "RAG, pgvector, widget embarquable et analytics", order: 8 },
    { title: "Chatbots multi-canal", description: "WhatsApp, Instagram, Messenger : là où sont les clients", order: 9 },
    { title: "Agents IA autonomes", description: "Tool use, ReAct, MCP et agents multi-step", order: 10 },
    { title: "Voice AI & Agents téléphoniques", description: "Vapi, ElevenLabs : l'IA qui décroche le téléphone", order: 11 },
    { title: "Construire un MVP", description: "Ton premier vrai produit de A à Z en 48h", order: 12 },
    { title: "IA pour documents & data", description: "PDF, OCR, Excel : traitement de données pour entreprises", order: 13 },
    // Phase 4 — Sécurité & Production
    { title: "Sécurité Supabase & bonnes pratiques", description: "RLS, validation, secrets et checklist production", order: 14 },
    { title: "DevOps & Monitoring", description: "Git avancé, CI/CD, Sentry et maintenance pro", order: 15 },
    // Phase 5 — Entrepreneur
    { title: "Créer ton offre irrésistible", description: "De \"je sais faire\" à \"je vends\" — pricing et positionnement", order: 16 },
    { title: "Trouver des clients", description: "LinkedIn, cold email, closing et système de prospection", order: 17 },
    { title: "Livrer et fidéliser", description: "Process de livraison, retainers et referrals", order: 18 },
    { title: "Juridique, fiscalité & admin", description: "Statuts, contrats, RGPD, facturation et assurances", order: 19 },
    // Phase 6 — Scale & Mastery
    { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 20 },
    { title: "Architecture multi-tenant & white-label", description: "Build once, sell many : le vrai scale technique", order: 21 },
    { title: "Masterclass outils : Claude Code, Cursor & Antigravity", description: "Maîtrise avancée des outils de développement IA", order: 22 },
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
