import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// ═══════════════════════════════════════════════════
// IMPORTS — 22 modules v2
// ═══════════════════════════════════════════════════
import { V2_MODULE_01_LESSONS } from "../../../../../prisma/data/v2_module_01";
import { V2_MODULE_02_LESSONS } from "../../../../../prisma/data/v2_module_02";
import { V2_MODULE_03_LESSONS } from "../../../../../prisma/data/v2_module_03";
import { V2_MODULE_04_LESSONS } from "../../../../../prisma/data/v2_module_04";
import { V2_MODULE_05_LESSONS } from "../../../../../prisma/data/v2_module_05";
import { V2_MODULE_06_LESSONS } from "../../../../../prisma/data/v2_module_06";
import { V2_MODULE_07_LESSONS } from "../../../../../prisma/data/v2_module_07";
import { V2_MODULE_08_LESSONS } from "../../../../../prisma/data/v2_module_08";
import { V2_MODULE_09_LESSONS } from "../../../../../prisma/data/v2_module_09";
import { V2_MODULE_10_LESSONS } from "../../../../../prisma/data/v2_module_10";
import { V2_MODULE_11_LESSONS } from "../../../../../prisma/data/v2_module_11";
import { V2_MODULE_12_LESSONS } from "../../../../../prisma/data/v2_module_12";
import { V2_MODULE_13_LESSONS } from "../../../../../prisma/data/v2_module_13";
import { V2_MODULE_14_LESSONS } from "../../../../../prisma/data/v2_module_14";
import { V2_MODULE_15_LESSONS } from "../../../../../prisma/data/v2_module_15";
import { V2_MODULE_16_LESSONS } from "../../../../../prisma/data/v2_module_16";
import { V2_MODULE_17_LESSONS } from "../../../../../prisma/data/v2_module_17";
import { V2_MODULE_18_LESSONS } from "../../../../../prisma/data/v2_module_18";
import { V2_MODULE_19_LESSONS } from "../../../../../prisma/data/v2_module_19";
import { V2_MODULE_20_LESSONS } from "../../../../../prisma/data/v2_module_20";
import { V2_MODULE_21_LESSONS } from "../../../../../prisma/data/v2_module_21";
import { V2_MODULE_22_LESSONS } from "../../../../../prisma/data/v2_module_22";

const MODULE_MAP: [any[], number][] = [
  [V2_MODULE_01_LESSONS, 0], [V2_MODULE_02_LESSONS, 1],
  [V2_MODULE_03_LESSONS, 2], [V2_MODULE_04_LESSONS, 3], [V2_MODULE_05_LESSONS, 4],
  [V2_MODULE_06_LESSONS, 5], [V2_MODULE_07_LESSONS, 6],
  [V2_MODULE_08_LESSONS, 7], [V2_MODULE_09_LESSONS, 8], [V2_MODULE_10_LESSONS, 9],
  [V2_MODULE_11_LESSONS, 10], [V2_MODULE_12_LESSONS, 11],
  [V2_MODULE_13_LESSONS, 12], [V2_MODULE_14_LESSONS, 13], [V2_MODULE_15_LESSONS, 14],
  [V2_MODULE_16_LESSONS, 15], [V2_MODULE_17_LESSONS, 16], [V2_MODULE_18_LESSONS, 17],
  [V2_MODULE_19_LESSONS, 18], [V2_MODULE_20_LESSONS, 19],
  [V2_MODULE_21_LESSONS, 20], [V2_MODULE_22_LESSONS, 21],
];

const MODULE_DEFINITIONS = [
  { title: "Bienvenue & Objectif", description: "Ce que tu vas apprendre, le marché de l'IA et ta roadmap", order: 1 },
  { title: "Découvrir les IA", description: "ChatGPT, Claude, Gemini — les IA qu'on va utiliser et pourquoi", order: 2 },
  { title: "Apprendre à prompter", description: "Les bases et techniques avancées pour des résultats précis", order: 3 },
  { title: "Les IDE IA : Claude Code & Cursor", description: "Installer, configurer et coder avec les IDE augmentés par l'IA", order: 4 },
  { title: "Git, GitHub & le workflow développeur", description: "Versionner ton code et collaborer comme un pro", order: 5 },
  { title: "Frontend : Next.js + Tailwind", description: "Créer des interfaces web modernes et responsive", order: 6 },
  { title: "Backend & Déploiement", description: "Supabase, SQL, API Routes, Stripe et Vercel", order: 7 },
  { title: "Chatbots IA", description: "Créer et déployer des chatbots sur site web et réseaux sociaux", order: 8 },
  { title: "Agents vocaux IA", description: "Créer des agents téléphoniques avec Vapi & ElevenLabs", order: 9 },
  { title: "Automatisations IA pour entreprises", description: "Automatiser des process métier avec l'IA — cas concrets par secteur", order: 10 },
  { title: "Génération de leads avec l'IA", description: "Scraping, enrichissement et séquences outbound automatisées", order: 11 },
  { title: "IA pour documents & data", description: "PDF, OCR, Excel : traitement de données pour entreprises", order: 12 },
  { title: "Construire un MVP complet", description: "Ton premier vrai produit de A à Z en 48h", order: 13 },
  { title: "Sécurité & bonnes pratiques", description: "RLS, validation, secrets et checklist production", order: 14 },
  { title: "DevOps & Monitoring", description: "Git avancé, CI/CD, Sentry et maintenance pro", order: 15 },
  { title: "Se structurer pour réussir", description: "Organisation, outils, CRM et image professionnelle", order: 16 },
  { title: "Créer ton offre", description: "Les services IA rentables, pricing et supports de vente", order: 17 },
  { title: "Prospection", description: "Réseau, LinkedIn, cold email, cold call et automatisation", order: 18 },
  { title: "Closer", description: "L'appel de closing, objections et signature du deal", order: 19 },
  { title: "Livrer & Fidéliser", description: "Process de livraison, retainers et referrals", order: 20 },
  { title: "Juridique & Admin", description: "Statuts, contrats, RGPD, facturation et assurances", order: 21 },
  { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 22 },
];

function makeQuiz(lessonOrder: number) {
  const defaultQuiz = [
    { q: "Quel est l'objectif principal de cette leçon ?", o: ["Apprendre la théorie uniquement", "Appliquer les connaissances en pratique", "Combiner théorie et pratique", "Aucun objectif spécifique"], a: "Combiner théorie et pratique", e: "Chaque leçon combine théorie et exercices pratiques.", t: "mcq" },
    { q: "La pratique régulière est essentielle pour progresser.", o: ["Vrai", "Faux"], a: "Vrai", e: "L'apprentissage passe par la pratique continue.", t: "true_false" },
    { q: "Quelle approche est la plus efficace ?", o: ["Lire uniquement", "Regarder des tutoriels", "Expérimenter sur des projets concrets", "Attendre de tout comprendre"], a: "Expérimenter sur des projets concrets", e: "L'apprentissage par la pratique est la méthode la plus efficace.", t: "mcq" },
    { q: "Il faut maîtriser la théorie avant de pratiquer.", o: ["Vrai", "Faux"], a: "Faux", e: "Action avant perfection.", t: "true_false" },
    { q: "Quelle est la meilleure façon de consolider ses apprentissages ?", o: ["Relire ses notes", "Réaliser les exercices", "Enseigner ce qu'on a appris", "Les trois à la fois"], a: "Les trois à la fois", e: "La combinaison relecture, pratique et enseignement est la plus efficace.", t: "mcq" },
  ];
  return defaultQuiz.map((q, i) => ({
    type: q.t, question: q.q, options: JSON.stringify(q.o),
    correctAnswer: q.a, explanation: q.e, order: i + 1,
  }));
}

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "admin") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
  }

  try {
    // Clean all data
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

    // 22 Modules
    const modules = [];
    for (const def of MODULE_DEFINITIONS) {
      const mod = await prisma.module.create({ data: { title: def.title, description: def.description, order: def.order } });
      modules.push(mod);
    }

    // Lessons + Quizzes
    let lessonCount = 0;
    for (const [lessons, moduleIdx] of MODULE_MAP) {
      for (const lessonData of lessons) {
        const lesson = await prisma.lesson.create({
          data: {
            title: lessonData.title, slug: lessonData.slug, description: lessonData.description,
            content: lessonData.content, exercise: lessonData.exercise, duration: lessonData.duration,
            order: lessonData.order, moduleId: modules[moduleIdx].id,
          },
        });
        const quiz = await prisma.quiz.create({ data: { lessonId: lesson.id, passingScore: 80 } });
        const ld = lessonData as any;
        const questions = ld.quiz
          ? ld.quiz.map((q: any, i: number) => ({
              type: q.type, question: q.question, options: q.options,
              correctAnswer: q.correctAnswer, explanation: q.explanation, order: i + 1,
            }))
          : makeQuiz(lessonData.order);
        for (const q of questions) {
          await prisma.quizQuestion.create({ data: { ...q, quizId: quiz.id } });
        }
        lessonCount++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Seed terminé : ${modules.length} modules, ${lessonCount} leçons`,
      admin: admin.email,
      student: student.email,
    });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
