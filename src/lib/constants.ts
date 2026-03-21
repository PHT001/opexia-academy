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
  { id: "halfway", name: "Mi-parcours", description: "65 leçons complétées", icon: "bolt" },
  { id: "graduate", name: "Diplôme Opexia", description: "130 leçons complétées", icon: "award" },
] as const;

export const MODULES = [
  // ── Phase 1 — Fondations (Starter) ──
  { order: 1,  title: "Découvrir l'IA et poser les bases", description: "Comprendre l'IA, les outils, et créer ton premier agent", category: "formation" },
  // ── Phase 2 — Développeur IA ──
  { order: 2,  title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", category: "formation" },
  { order: 3,  title: "Créer des sites web professionnels", description: "De zéro à un site en ligne avec Next.js + Tailwind", category: "formation" },
  { order: 4,  title: "Design & UI pour développeurs", description: "Figma, principes de design et UI kits pour livrer du pro", category: "formation" },
  { order: 5,  title: "Backend & Supabase", description: "Base de données, auth, storage et CRUD complet", category: "formation" },
  { order: 6,  title: "APIs, Intégrations & Paiements", description: "API Routes, Stripe, webhooks et intégration Claude", category: "formation" },
  // ── Phase 3 — Architecte Solutions ──
  { order: 7,  title: "Automatisations & Workflows", description: "Make, n8n : créer des machines qui bossent pour toi", category: "formation" },
  { order: 8,  title: "Chatbots IA professionnels", description: "RAG, pgvector, widget embarquable et analytics", category: "formation" },
  { order: 9,  title: "Chatbots multi-canal", description: "WhatsApp, Instagram, Messenger : là où sont les clients", category: "formation" },
  { order: 10, title: "Agents IA autonomes", description: "Tool use, ReAct, MCP et agents multi-step", category: "formation" },
  { order: 11, title: "Voice AI & Agents téléphoniques", description: "Vapi, ElevenLabs : l'IA qui décroche le téléphone", category: "formation" },
  { order: 12, title: "Construire un MVP", description: "Ton premier vrai produit de A à Z en 48h", category: "formation" },
  { order: 13, title: "IA pour documents & data", description: "PDF, OCR, Excel : traitement de données pour entreprises", category: "formation" },
  // ── Phase 4 — Sécurité & Production ──
  { order: 14, title: "Sécurité Supabase & bonnes pratiques", description: "RLS, validation, secrets et checklist production", category: "formation" },
  { order: 15, title: "DevOps & Monitoring", description: "Git avancé, CI/CD, Sentry et maintenance pro", category: "formation" },
  // ── Phase 5 — Entrepreneur ──
  { order: 16, title: "Créer ton offre irrésistible", description: "De \"je sais faire\" à \"je vends\" — pricing et positionnement", category: "formation" },
  { order: 17, title: "Trouver des clients", description: "LinkedIn, cold email, closing et système de prospection", category: "formation" },
  { order: 18, title: "Livrer et fidéliser", description: "Process de livraison, retainers et referrals", category: "formation" },
  { order: 19, title: "Juridique, fiscalité & admin", description: "Statuts, contrats, RGPD, facturation et assurances", category: "formation" },
  // ── Phase 6 — Scale & Mastery ──
  { order: 20, title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", category: "formation" },
  { order: 21, title: "Architecture multi-tenant & white-label", description: "Build once, sell many : le vrai scale technique", category: "formation" },
  { order: 22, title: "Masterclass outils : Claude Code, Cursor & Antigravity", description: "Maîtrise avancée des outils de développement IA", category: "masterclass" },
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
  // Phase 1 — Fondations
  1:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~3h25",  lessonCount: 8  },
  // Phase 2 — Développeur IA
  2:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 5  },
  3:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h30",  lessonCount: 6  },
  4:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 5  },
  5:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  6:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  // Phase 3 — Architecte Solutions
  7:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  8:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  9:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  10: { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  11: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  12: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
  13: { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  // Phase 4 — Sécurité & Production
  14: { brands: [],            difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 7  },
  15: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 5  },
  // Phase 5 — Entrepreneur
  16: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 6  },
  17: { brands: [],            difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 7  },
  18: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 6  },
  19: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 7  },
  // Phase 6 — Scale & Mastery
  20: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 6  },
  21: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
  22: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 8  },
};

export const DIFFICULTY_CONFIG = {
  debutant:      { label: "Débutant",        color: "text-emerald-400", bgColor: "bg-emerald-500/10", barColor: "bg-emerald-400", bars: 1 },
  intermediaire: { label: "Intermédiaire",  color: "text-amber-400",   bgColor: "bg-amber-500/10",   barColor: "bg-amber-400",   bars: 2 },
  avance:        { label: "Avancé",         color: "text-rose-400",    bgColor: "bg-rose-500/10",    barColor: "bg-rose-400",    bars: 3 },
} as const;

/* ——— Phases structure (6 phases) ——— */

export const WEEKS = [
  { week: 1, title: "Fondations",              subtitle: "Découvrir l'IA et poser les bases",                              modules: [1] },
  { week: 2, title: "Développeur IA",          subtitle: "Prompting, sites web, design, backend et APIs",                  modules: [2, 3, 4, 5, 6] },
  { week: 3, title: "Architecte Solutions",    subtitle: "Automatisations, chatbots, agents, voice AI et MVP",             modules: [7, 8, 9, 10, 11, 12, 13] },
  { week: 4, title: "Sécurité & Production",   subtitle: "Sécuriser, déployer et monitorer comme un pro",                  modules: [14, 15] },
  { week: 5, title: "Entrepreneur",             subtitle: "Offre, clients, livraison, juridique et fiscalité",              modules: [16, 17, 18, 19] },
  { week: 6, title: "Scale & Mastery",          subtitle: "Scaling, multi-tenant et masterclass outils",                    modules: [20, 21, 22] },
] as const;

export const MASTERCLASS_MODULES = [22] as const;

/* ——— Tier-based module access ——— */

export const TIER_MODULE_ACCESS: Record<string, number[]> = {
  starter:    [1],
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
      { text: "Module 1 complet (7 leçons)", included: true },
      { text: "Checklist de démarrage", included: true },
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
    price: 397,
    period: "one-shot",
    description: "La formation complète pour lancer ton agence IA",
    features: [
      { text: "Tout ce qui est dans Starter", included: true },
      { text: "130+ leçons progressives en 22 modules", included: true },
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
      { text: "4 sessions en visio (1h)", included: true },
      { text: "Review de projets personnalisée", included: true },
      { text: "Accès prioritaire au support", included: true },
      { text: "Réseau privé d'entrepreneurs IA", included: true },
    ],
    cta: "Réserver mon accompagnement",
    popular: false,
  },
] as const;

/* ——— Coaching slots & pricing ——— */

export const COACHING_SLOTS = [
  { day: "Lundi",    time: "14:00", duration: "1h" },
  { day: "Mercredi", time: "10:00", duration: "1h" },
  { day: "Mercredi", time: "14:00", duration: "1h" },
  { day: "Vendredi", time: "10:00", duration: "1h" },
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
  academy: 39700,
  one_to_one: 399700,
};
