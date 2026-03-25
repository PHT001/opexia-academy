export const XP_VALUES = {
  LESSON_COMPLETE: 50,
  QUIZ_PASS: 100,
  QUIZ_PERFECT: 50,
  MODULE_COMPLETE: 200,
} as const;

export const BADGES = [
  { id: "first_lesson", name: "Premier pas", description: "Complète ta première leçon", icon: "target" },
  { id: "module_1", name: "Fondations IA", description: "Termine le Module 1", icon: "cpu" },
  { id: "streak_7", name: "Régularité", description: "7 jours consécutifs", icon: "flame" },
  { id: "halfway", name: "Mi-parcours", description: "43 leçons complétées", icon: "bolt" },
  { id: "graduate", name: "Diplôme Opexia", description: "85 leçons complétées", icon: "award" },
] as const;

export const MODULES = [
  // ── Bloc 1 — Le cadre ──
  { order: 1,  title: "Bienvenue & Objectif", description: "Ce que tu vas apprendre, le marché de l'IA et ta roadmap", category: "formation" },
  { order: 2,  title: "Découvrir les IA", description: "ChatGPT, Claude, Gemini — les IA qu'on va utiliser et pourquoi", category: "formation" },
  // ── Bloc 2 — Tes outils de travail ──
  { order: 3,  title: "Apprendre à prompter", description: "Les bases et techniques avancées pour des résultats précis", category: "formation" },
  { order: 4,  title: "Les IDE IA : Claude Code & Cursor", description: "Installer, configurer et coder avec les IDE augmentés par l'IA", category: "formation" },
  { order: 5,  title: "Git, GitHub & le workflow développeur", description: "Versionner ton code et collaborer comme un pro", category: "formation" },
  // ── Bloc 3 — Construire un site web ──
  { order: 6,  title: "Frontend : Next.js + Tailwind", description: "Créer des interfaces web modernes et responsive", category: "formation" },
  { order: 7,  title: "Backend & Déploiement", description: "Supabase, SQL, API Routes, Stripe et Vercel", category: "formation" },
  // ── Bloc 4 — Les services que tu vas vendre ──
  { order: 8,  title: "Chatbots IA", description: "Créer et déployer des chatbots sur site web et réseaux sociaux", category: "formation" },
  { order: 9,  title: "Agents vocaux IA", description: "Créer des agents téléphoniques avec Vapi & ElevenLabs", category: "formation" },
  { order: 10, title: "Automatisations IA pour entreprises", description: "Automatiser des process métier avec l'IA — cas concrets par secteur", category: "formation" },
  { order: 11, title: "Génération de leads avec l'IA", description: "Scraping, enrichissement et séquences outbound automatisées", category: "formation" },
  { order: 12, title: "IA pour documents & data", description: "PDF, OCR, Excel : traitement de données pour entreprises", category: "formation" },
  // ── Bloc 5 — Industrialiser ──
  { order: 13, title: "Construire un MVP complet", description: "Ton premier vrai produit de A à Z en 48h", category: "formation" },
  { order: 14, title: "Sécurité & bonnes pratiques", description: "RLS, validation, secrets et checklist production", category: "formation" },
  { order: 15, title: "DevOps & Monitoring", description: "Git avancé, CI/CD, Sentry et maintenance pro", category: "formation" },
  // ── Bloc 6 — Vendre ──
  { order: 16, title: "Se structurer pour réussir", description: "Organisation, outils, CRM et image professionnelle", category: "formation" },
  { order: 17, title: "Créer ton offre", description: "Les services IA rentables, pricing et supports de vente", category: "formation" },
  { order: 18, title: "Prospection", description: "Réseau, LinkedIn, cold email, cold call et automatisation", category: "formation" },
  { order: 19, title: "Closer", description: "L'appel de closing, objections et signature du deal", category: "formation" },
  { order: 20, title: "Livrer & Fidéliser", description: "Process de livraison, retainers et referrals", category: "formation" },
  // ── Bloc 7 — Scaler ──
  { order: 21, title: "Juridique & Admin", description: "Statuts, contrats, RGPD, facturation et assurances", category: "formation" },
  { order: 22, title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", category: "formation" },
] as const;

/* ——— Module metadata (brand, difficulty, estimated time) ——— */

export type Brand = "claude" | "clawbot";
export type Difficulty = "debutant" | "intermediaire" | "avance";

export interface ModuleMetadata {
  brands: Brand[];
  difficulty: Difficulty;
  estimatedTime: string;
  lessonCount: number;
}

export const MODULE_METADATA: Record<number, ModuleMetadata> = {
  // Bloc 1 — Le cadre
  1:  { brands: [],            difficulty: "debutant",       estimatedTime: "~1h",    lessonCount: 3  },
  2:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~1h30",  lessonCount: 4  },
  // Bloc 2 — Tes outils de travail
  3:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 4  },
  4:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 4  },
  5:  { brands: [],            difficulty: "debutant",       estimatedTime: "~1h30",  lessonCount: 3  },
  // Bloc 3 — Construire un site web
  6:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  7:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 5  },
  // Bloc 4 — Les services que tu vas vendre
  8:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  9:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~1h30",  lessonCount: 3  },
  10: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  11: { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  12: { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  // Bloc 5 — Industrialiser
  13: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 4  },
  14: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
  15: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 4  },
  // Bloc 6 — Vendre
  16: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  17: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~1h30",  lessonCount: 3  },
  18: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
  19: { brands: [],            difficulty: "avance",         estimatedTime: "~1h30",  lessonCount: 3  },
  20: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 4  },
  // Bloc 7 — Scaler
  21: { brands: [],            difficulty: "avance",         estimatedTime: "~1h30",  lessonCount: 3  },
  22: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 4  },
};

export const DIFFICULTY_CONFIG = {
  debutant:      { label: "Débutant",        color: "text-emerald-400", bgColor: "bg-emerald-500/10", barColor: "bg-emerald-400", bars: 1 },
  intermediaire: { label: "Intermédiaire",  color: "text-amber-400",   bgColor: "bg-amber-500/10",   barColor: "bg-amber-400",   bars: 2 },
  avance:        { label: "Avancé",         color: "text-rose-400",    bgColor: "bg-rose-500/10",    barColor: "bg-rose-400",    bars: 3 },
} as const;

/* ——— Phases structure (6 phases) ——— */

export const WEEKS = [
  { week: 1, title: "Le cadre",                subtitle: "Comprendre l'IA et poser les bases",                              modules: [1, 2] },
  { week: 2, title: "Tes outils de travail",   subtitle: "Prompting, IDE IA et workflow développeur",                       modules: [3, 4, 5] },
  { week: 3, title: "Construire un site web",  subtitle: "Frontend, backend et déploiement",                                modules: [6, 7] },
  { week: 4, title: "Les services à vendre",   subtitle: "Chatbots, agents vocaux, automatisations, leads et documents",    modules: [8, 9, 10, 11, 12] },
  { week: 5, title: "Industrialiser",           subtitle: "MVP, sécurité et DevOps",                                        modules: [13, 14, 15] },
  { week: 6, title: "Vendre",                   subtitle: "Structure, offre, prospection, closing et fidélisation",          modules: [16, 17, 18, 19, 20] },
  { week: 7, title: "Scaler",                   subtitle: "Juridique et passage à l'agence",                                modules: [21, 22] },
] as const;

export const MASTERCLASS_MODULES = [] as const;

/* ——— Tier-based module access ——— */

export const TIER_MODULE_ACCESS: Record<string, number[]> = {
  free:       [],
  starter:    [1, 2],
  academy:    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  one_to_one: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
};

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 47,
    period: "one-shot",
    description: "Pour les curieux qui veulent comprendre avant de se lancer",
    features: [
      { text: "2 modules complets (7 leçons)", included: true },
      { text: "Découverte du marché IA + prompting", included: true },
      { text: "Accès au Discord communautaire", included: true },
      { text: "Formation complète (22 modules)", included: false },
      { text: "Accompagnement personnalisé", included: false },
      { text: "Sessions en visio", included: false },
    ],
    cta: "Commencer pour 47\u20ac",
    popular: false,
  },
  {
    id: "academy",
    name: "Academy",
    price: 497,
    period: "one-shot",
    description: "La formation complète pour lancer ton agence IA",
    features: [
      { text: "Tout ce qui est dans Starter", included: true },
      { text: "85 leçons progressives en 22 modules", included: true },
      { text: "Quiz de validation par leçon", included: true },
      { text: "Exercices pratiques + projets fil rouge", included: true },
      { text: "Assistant IA intégré", included: true },
      { text: "Accompagnement personnalisé", included: false },
    ],
    cta: "Rejoindre l'Academy",
    popular: true,
  },
  {
    id: "one_to_one",
    name: "One-to-One",
    price: 3997,
    period: "one-shot",
    description: "L'accompagnement premium pour aller plus vite",
    features: [
      { text: "Tout ce qui est dans Academy", included: true },
      { text: "Accompagnement personnalisé", included: true },
      { text: "8 sessions en visio (1h)", included: true },
      { text: "Review de projets personnalisée", included: true },
      { text: "Accès prioritaire au support", included: true },
      { text: "Réseau privé d'entrepreneurs IA", included: true },
    ],
    cta: "Réserver mon accompagnement",
    popular: false,
  },
] as const;

/* ——— Coaching slots & pricing ——— */

// Horaires de dispo coaching : lundi-samedi, 10h-20h, créneaux de 1h
export const COACHING_HOURS = {
  startHour: 10,
  endHour: 20, // dernier créneau à 19h (19h-20h)
  slotDuration: 1, // 1 heure
  daysOff: [0] as number[], // 0 = dimanche
} as const;

// Legacy — kept for compatibility but no longer used for slot generation
export const COACHING_SLOTS = [
  { day: "Lundi",    time: "10:00", duration: "1h" },
  { day: "Mardi",    time: "10:00", duration: "1h" },
  { day: "Mercredi", time: "10:00", duration: "1h" },
  { day: "Jeudi",    time: "10:00", duration: "1h" },
  { day: "Vendredi", time: "10:00", duration: "1h" },
  { day: "Samedi",   time: "10:00", duration: "1h" },
] as const;

export const COACHING_PRICE = 7000; // 70e en centimes
export const COACHING_PRICE_DISPLAY = "70";

/* ——— Referral / Parrainage ——— */
export const REFERRAL_COMMISSION_RATES: Record<string, number> = {
  starter: 0.20,     // 20% sur Starter
  academy: 0.15,     // 15% sur Academy
  one_to_one: 0.10,  // 10% sur One-to-One
};
export const REFERRAL_COMMISSION_RATE = 0.20; // max pour affichage "Gagne jusqu'à 20%"
export const TIER_PRICES_CENTS: Record<string, number> = {
  starter: 4700,
  academy: 49700,
  one_to_one: 399700,
};
