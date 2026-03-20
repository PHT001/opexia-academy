import type { AllLessonAnimations } from "./types";

export const module07: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 33: mvp-definition-pourquoi-cle (6 sections)
  // La définition d'un MVP, la philosophie Lean Startup, exemples célèbres
  // Templates: pulsing-orb, arrow-cycle, timeline, hallucination-bubbles, flow-diagram, split-transform
  // ═══════════════════════════════════════════════════════════════
  "mvp-definition-pourquoi-cle": {
    // Section 0: "La définition d'un MVP"
    // → Pulsing Orb: les 3 mots clés du MVP pulsent autour du concept central
    0: {
      template: "pulsing-orb",
      props: {
        title: "Minimum Viable Product",
        subtitle: "Le produit le plus simple qui crée de la valeur",
        items: [
          { label: "Minimum", icon: "📉", description: "Le strict nécessaire" },
          { label: "Viable", icon: "✅", description: "Utilisable et utile" },
          { label: "Product", icon: "📦", description: "Un vrai produit, pas un prototype" },
          { label: "Valeur", icon: "💎", description: "Résout un vrai problème" },
          { label: "Feedback", icon: "🔄", description: "Apprendre des utilisateurs" },
        ],
      },
    },

    // Section 1: "La philosophie Lean Startup"
    // → Arrow Cycle: la boucle Build-Measure-Learn d'Eric Ries
    1: {
      template: "arrow-cycle",
      props: {
        title: "La boucle Lean Startup",
        subtitle: "Build → Measure → Learn",
        items: [
          { label: "Idée", description: "Hypothèse de départ" },
          { label: "Build", description: "Construire le MVP" },
          { label: "Measure", description: "Mesurer les résultats" },
          { label: "Learn", description: "Apprendre et pivoter" },
        ],
      },
    },

    // Section 2: "Des MVPs célèbres qui ont changé le monde"
    // → Timeline: frise chronologique des MVPs iconiques
    2: {
      template: "timeline",
      props: {
        title: "MVPs célèbres",
        subtitle: "Ils ont tous commencé petit",
        items: [
          { label: "Dropbox", description: "Une simple vidéo de démo de 3 minutes", icon: "📹" },
          { label: "Airbnb", description: "3 matelas gonflables et des photos d'un appart", icon: "🏠" },
          { label: "Zappos", description: "Photos de chaussures achetées en magasin", icon: "👟" },
          { label: "Twitter", description: "Un SMS public interne chez Odeo", icon: "🐦" },
          { label: "Buffer", description: "Une landing page sans produit derrière", icon: "📱" },
          { label: "Spotify", description: "Streaming desktop uniquement en Suède", icon: "🎵" },
        ],
      },
    },

    // Section 3: "Les erreurs classiques à éviter"
    // → Hallucination Bubbles: mythes vs réalités du MVP
    3: {
      template: "hallucination-bubbles",
      props: {
        title: "Mythes vs Réalités du MVP",
        subtitle: "Sépare le vrai du faux",
        items: [
          { label: "Un MVP doit être parfait avant le lancement" },
          { label: "Un MVP résout UN problème principal" },
          { label: "Il faut toutes les features dès le début" },
          { label: "Le feedback utilisateur guide les priorités" },
          { label: "Plus de code = meilleur produit" },
          { label: "La vitesse d'itération est clé" },
        ],
      },
    },

    // Section 4: "Comment définir ton MVP"
    // → Flow Diagram: pipeline de définition du MVP étape par étape
    4: {
      template: "flow-diagram",
      props: {
        title: "Définir ton MVP en 5 étapes",
        subtitle: "De l'idée au périmètre minimal",
        items: [
          { label: "Problème", description: "Quel problème résous-tu ?", icon: "❓" },
          { label: "Cible", description: "Pour qui exactement ?", icon: "🎯" },
          { label: "Solution", description: "La réponse la plus simple", icon: "💡" },
          { label: "Features", description: "3 fonctionnalités max", icon: "📋" },
          { label: "Métrique", description: "Comment mesurer le succès ?", icon: "📊" },
        ],
      },
    },

    // Section 5: "Le MVP à l'ère de l'IA"
    // → Split Transform: avant/après l'IA dans le développement de MVP
    5: {
      template: "split-transform",
      props: {
        title: "MVP à l'ère de l'IA",
        subtitle: "Tout a changé",
        items: [
          { label: "Avant : 3-6 mois de développement", description: "Cycle long et coûteux" },
          { label: "Maintenant : 1-2 semaines avec Claude", description: "Cycle ultra-rapide" },
          { label: "Avant : équipe de 5 développeurs", description: "Budget conséquent" },
          { label: "Maintenant : solo + Claude Code", description: "Coût quasi nul" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 34: trouver-valider-idee-produit (7 sections)
  // Trouver un problème, valider avec des clients, landing page, pré-selling
  // Templates: convergence-beam, mind-map, chat-bubbles, browser-mockup, bar-chart, counter-stats, comparison-grid
  // ═══════════════════════════════════════════════════════════════
  "trouver-valider-idee-produit": {
    // Section 0: "Une idée ne vaut rien sans validation"
    // → Convergence Beam: les facteurs qui convergent vers une idée validée
    0: {
      template: "convergence-beam",
      props: {
        title: "Validation d'idée",
        subtitle: "Une idée seule ne vaut rien",
        items: [
          { label: "Problème réel", icon: "🔥", description: "Validé" },
          { label: "Marché existant", icon: "👥" },
          { label: "Willingness to pay", icon: "💰" },
          { label: "Solution faisable", icon: "⚙️" },
          { label: "Timing bon", icon: "⏰" },
          { label: "Avantage compétitif", icon: "🏆" },
        ],
      },
    },

    // Section 1: "Étape 1 : Trouver un vrai problème"
    // → Mind Map: sources d'inspiration pour trouver des problèmes
    1: {
      template: "mind-map",
      props: {
        title: "Où trouver des problèmes ?",
        subtitle: "Sources d'inspiration",
        items: [
          { label: "Problèmes", icon: "🔍" },
          { label: "Ta propre frustration", icon: "😤" },
          { label: "Reddit / Forums", icon: "💬" },
          { label: "X / Twitter", icon: "🐦" },
          { label: "Product Hunt", icon: "🚀" },
          { label: "Ton secteur pro", icon: "💼" },
        ],
      },
    },

    // Section 2: "Étape 2 : Parler à des clients potentiels"
    // → Chat Bubbles: simulation d'un entretien client
    2: {
      template: "chat-bubbles",
      props: {
        title: "L'entretien client",
        subtitle: "Poser les bonnes questions",
        items: [
          { label: "Raconte-moi la dernière fois que tu as eu ce problème ?" },
          { label: "Ça m'arrive chaque semaine, c'est frustrant..." },
          { label: "Qu'est-ce que tu fais aujourd'hui pour le résoudre ?" },
          { label: "J'utilise un tableur Excel, mais c'est laborieux" },
          { label: "Combien paierais-tu pour une solution automatisée ?" },
          { label: "Facilement 20-30€/mois si ça me fait gagner du temps" },
        ],
      },
    },

    // Section 3: "Étape 3 : La landing page test"
    // → Browser Mockup: preview d'une landing page de validation
    3: {
      template: "browser-mockup",
      props: {
        title: "Landing page de test",
        subtitle: "Tester avant de construire",
        items: [
          { label: "Headline accrocheuse", icon: "✨" },
          { label: "Description du problème", icon: "🔥" },
          { label: "3 bénéfices clés", icon: "✅" },
          { label: "Formulaire d'inscription", icon: "📝" },
          { label: "CTA : Rejoins la liste d'attente", icon: "🚀" },
        ],
      },
    },

    // Section 4: "Étape 4 : Analyser les signaux"
    // → Bar Chart: métriques de validation à surveiller
    4: {
      template: "bar-chart",
      props: {
        title: "Signaux de validation",
        subtitle: "Les métriques qui comptent",
        items: [
          { label: "Taux de conversion landing", value: 15, description: "%" },
          { label: "Emails collectés (7j)", value: 50, description: "inscrits" },
          { label: "Taux d'ouverture emails", value: 60, description: "%" },
          { label: "Réponses au sondage", value: 30, description: "réponses" },
          { label: "Entretiens réalisés", value: 10, description: "clients" },
        ],
      },
    },

    // Section 5: "Étape 5 : Le pré-selling"
    // → Counter Stats: chiffres de pré-vente à atteindre
    5: {
      template: "counter-stats",
      props: {
        title: "Le pré-selling",
        subtitle: "Valider avec de l'argent réel",
        items: [
          { label: "Pré-commandes", value: 10, icon: "🛒", description: "minimum" },
          { label: "Revenus validés", value: 500, icon: "💰", description: "€" },
          { label: "Taux de conversion", value: 5, icon: "📈", description: "%" },
          { label: "Temps de validation", value: 14, icon: "📅", description: "jours" },
        ],
      },
    },

    // Section 6: "La matrice Effort/Impact"
    // → Comparison Grid: 4 quadrants de la matrice
    6: {
      template: "comparison-grid",
      props: {
        title: "Matrice Effort / Impact",
        subtitle: "Priorise tes features",
        items: [
          { label: "Quick Wins", description: "Faible effort, haut impact → FAIRE EN PREMIER", icon: "🎯", color: "#22c55e" },
          { label: "Projets majeurs", description: "Fort effort, haut impact → PLANIFIER", icon: "🚀", color: "#3b82f6" },
          { label: "Fill-ins", description: "Faible effort, faible impact → SI TEMPS DISPO", icon: "📝", color: "#f59e0b" },
          { label: "À éviter", description: "Fort effort, faible impact → NE PAS FAIRE", icon: "❌", color: "#ef4444" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 35: architecture-planification-claude (7 sections)
  // Planifier avec Claude, spécifications, stack, architecture, sprints
  // Templates: rocket-launch, checklist-reveal, layered-stack, hierarchy-tree, progress-path, code-terminal, model-cards
  // ═══════════════════════════════════════════════════════════════
  "architecture-planification-claude": {
    // Section 0: "Avant de coder : planifier avec Claude"
    // → Rocket Launch: séquence de préparation avant le lancement
    0: {
      template: "rocket-launch",
      props: {
        title: "Phase de planification",
        subtitle: "Avant de coder : planifier !",
        items: [
          { label: "Spécifications rédigées ✓" },
          { label: "Stack technique choisie ✓" },
          { label: "Architecture conçue ✓" },
          { label: "Sprints planifiés ✓" },
          { label: "Prêt à coder ! 🚀" },
        ],
      },
    },

    // Section 1: "Étape 1 : Le document de spécifications"
    // → Checklist Reveal: éléments du document de specs
    1: {
      template: "checklist-reveal",
      props: {
        title: "Document de spécifications",
        subtitle: "Le brief qui guide tout le projet",
        items: [
          { label: "Nom et description du produit" },
          { label: "Problème résolu et cible visée" },
          { label: "Liste des fonctionnalités (User Stories)" },
          { label: "Pages et parcours utilisateur" },
          { label: "Contraintes techniques et délais" },
          { label: "Critères de succès mesurables" },
        ],
      },
    },

    // Section 2: "Étape 2 : Choisir la stack technique"
    // → Layered Stack: couches de la stack technique empilées
    2: {
      template: "layered-stack",
      props: {
        title: "La stack technique recommandée",
        subtitle: "Chaque couche a son rôle",
        items: [
          { label: "Next.js 14+", description: "Framework fullstack React", icon: "⚛️" },
          { label: "Tailwind CSS", description: "Styling utilitaire rapide", icon: "🎨" },
          { label: "Prisma ORM", description: "Accès base de données typé", icon: "💾" },
          { label: "NextAuth.js", description: "Authentification clé en main", icon: "🔐" },
          { label: "Vercel", description: "Déploiement en 1 clic", icon: "▲" },
        ],
      },
    },

    // Section 3: "Étape 3 : Concevoir l'architecture"
    // → Hierarchy Tree: arborescence du projet
    3: {
      template: "hierarchy-tree",
      props: {
        title: "Architecture du projet",
        subtitle: "Organisation des dossiers",
        items: [
          { label: "src/", icon: "📁" },
          { label: "app/ (pages & routes)", icon: "📄" },
          { label: "components/ (UI réutilisable)", icon: "🧩" },
          { label: "lib/ (utilitaires & config)", icon: "⚙️" },
          { label: "prisma/ (schéma DB)", icon: "💾" },
          { label: "public/ (assets statiques)", icon: "🖼️" },
        ],
      },
    },

    // Section 4: "Étape 4 : Planifier les sprints"
    // → Progress Path: chemin des sprints avec étapes
    4: {
      template: "progress-path",
      props: {
        title: "Planning des sprints",
        subtitle: "4 sprints de 3-4 jours",
        items: [
          { label: "Sprint 1 : Setup", description: "Projet, DB, auth, layout de base" },
          { label: "Sprint 2 : Core", description: "Fonctionnalités principales (CRUD)" },
          { label: "Sprint 3 : UI/UX", description: "Design, responsive, animations" },
          { label: "Sprint 4 : Deploy", description: "Tests, optimisation, mise en prod" },
        ],
      },
    },

    // Section 5: "Étape 5 : Créer un CLAUDE.md"
    // → Code Terminal: contenu du fichier CLAUDE.md
    5: {
      template: "code-terminal",
      props: {
        title: "CLAUDE.md",
        subtitle: "Le fichier qui guide Claude Code",
        items: [
          { label: "# CLAUDE.md", icon: "output" },
          { label: "## Projet: MonApp SaaS", icon: "output" },
          { label: "## Stack: Next.js + Prisma + Tailwind", icon: "output" },
          { label: "## Conventions: camelCase, composants atomiques", icon: "output" },
          { label: "## Structure: src/app, src/components, src/lib", icon: "output" },
          { label: "## Commandes: npm run dev, npm run build", icon: "output" },
        ],
      },
    },

    // Section 6: "Les prompts de planification"
    // → Model Cards: cartes de prompts types pour la planification
    6: {
      template: "model-cards",
      props: {
        title: "Prompts de planification",
        subtitle: "Demande à Claude de t'aider",
        items: [
          { label: "Rédiger les specs", description: "Génère un document de spécifications pour...", icon: "📋" },
          { label: "Choisir la stack", description: "Recommande une stack technique pour...", icon: "🔧" },
          { label: "User Stories", description: "Écris les user stories pour...", icon: "👤" },
          { label: "Schéma DB", description: "Conçois le schéma Prisma pour...", icon: "💾" },
          { label: "Planning", description: "Planifie les sprints pour...", icon: "📅" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 36: coder-mvp-claude-code-frontend (8 sections)
  // Construire le frontend avec Next.js et Claude Code
  // Templates: gear-system, code-terminal, hierarchy-tree, nesting-layers, chat-bubbles, comparison-grid, artifact-gallery, shield-lock
  // ═══════════════════════════════════════════════════════════════
  "coder-mvp-claude-code-frontend": {
    // Section 0: "C'est parti : on construit"
    // → Gear System: les engrenages du développement frontend
    0: {
      template: "gear-system",
      props: {
        title: "On construit le frontend !",
        subtitle: "Tous les éléments s'imbriquent",
        items: [
          { label: "Next.js" },
          { label: "React" },
          { label: "Tailwind" },
          { label: "Claude Code" },
        ],
      },
    },

    // Section 1: "Initialiser le projet"
    // → Code Terminal: commandes d'initialisation du projet
    1: {
      template: "code-terminal",
      props: {
        title: "Initialisation du projet",
        subtitle: "Les premières commandes",
        items: [
          { label: "$ npx create-next-app@latest mon-mvp", icon: "command" },
          { label: "✔ TypeScript? Yes", icon: "output" },
          { label: "✔ Tailwind CSS? Yes", icon: "output" },
          { label: "✔ App Router? Yes", icon: "output" },
          { label: "$ cd mon-mvp && npm run dev", icon: "command" },
          { label: "▲ Ready on http://localhost:3000", icon: "output" },
        ],
      },
    },

    // Section 2: "La structure des pages Next.js"
    // → Hierarchy Tree: arborescence des pages Next.js App Router
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Structure des pages Next.js",
        subtitle: "App Router — Convention de fichiers",
        items: [
          { label: "src/app/", icon: "📁" },
          { label: "page.tsx (accueil /)", icon: "🏠" },
          { label: "layout.tsx (layout global)", icon: "📐" },
          { label: "dashboard/page.tsx (/dashboard)", icon: "📊" },
          { label: "api/route.ts (endpoints API)", icon: "🔌" },
          { label: "loading.tsx (skeleton UI)", icon: "⏳" },
        ],
      },
    },

    // Section 3: "Les composants : penser en blocs"
    // → Nesting Layers: composants imbriqués du plus global au plus précis
    3: {
      template: "nesting-layers",
      props: {
        title: "Penser en composants",
        subtitle: "Du layout au bouton",
        items: [
          { label: "Layout (structure globale)" },
          { label: "Page (contenu principal)" },
          { label: "Section (bloc logique)" },
          { label: "Card (élément unitaire)" },
          { label: "Button (action atomique)" },
        ],
      },
    },

    // Section 4: "Travailler efficacement avec Claude Code"
    // → Chat Bubbles: dialogue développeur ↔ Claude Code
    4: {
      template: "chat-bubbles",
      props: {
        title: "Dialogue avec Claude Code",
        subtitle: "Conversation efficace",
        items: [
          { label: "Crée un composant Header avec logo, nav et bouton CTA" },
          { label: "J'ai créé src/components/Header.tsx avec un design responsive..." },
          { label: "Ajoute un menu hamburger sur mobile" },
          { label: "Mis à jour ! Le menu s'ouvre avec une animation slide-down..." },
        ],
      },
    },

    // Section 5: "Les Server Components vs Client Components"
    // → Comparison Grid: différences Server vs Client Components
    5: {
      template: "comparison-grid",
      props: {
        title: "Server vs Client Components",
        subtitle: "Quand utiliser quoi ?",
        items: [
          { label: "Server Component", description: "Par défaut, rendu côté serveur, accès DB direct", icon: "🖥️", color: "#3b82f6" },
          { label: "Client Component", description: "'use client', interactivité, hooks React", icon: "🌐", color: "#22c55e" },
          { label: "Fetch data → Server", description: "Requêtes API, lecture DB, SEO", icon: "📡", color: "#3b82f6" },
          { label: "Interactivité → Client", description: "onClick, useState, formulaires", icon: "👆", color: "#22c55e" },
        ],
      },
    },

    // Section 6: "Les prompts efficaces pour le frontend"
    // → Artifact Gallery: galerie de prompts types pour le frontend
    6: {
      template: "artifact-gallery",
      props: {
        title: "Prompts frontend efficaces",
        subtitle: "Templates prêts à l'emploi",
        items: [
          { label: "Composant UI", description: "Crée un composant Card avec...", icon: "🧩" },
          { label: "Page complète", description: "Crée la page /pricing avec...", icon: "📄" },
          { label: "Responsive", description: "Rends ce composant responsive...", icon: "📱" },
          { label: "Animation", description: "Ajoute une animation d'entrée...", icon: "✨" },
          { label: "Formulaire", description: "Crée un formulaire de contact...", icon: "📝" },
          { label: "Layout", description: "Crée un layout avec sidebar...", icon: "📐" },
        ],
      },
    },

    // Section 7: "Tester au fur et à mesure"
    // → Shield Lock: les couches de tests et de vérification
    7: {
      template: "shield-lock",
      props: {
        title: "Tester au fur et à mesure",
        subtitle: "Vérifier à chaque étape",
        items: [
          { label: "Preview navigateur", description: "Vérifier visuellement" },
          { label: "Console DevTools", description: "Détecter les erreurs JS" },
          { label: "Responsive test", description: "Mobile, tablette, desktop" },
          { label: "Lighthouse audit", description: "Performance et accessibilité" },
          { label: "Test utilisateur", description: "Demander un avis externe" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 37: backend-api-base-de-donnees-claude (8 sections)
  // Backend avec Prisma, Route Handlers, CRUD, Server Actions, validation
  // Templates: brain-network, code-terminal, flow-diagram, marketplace-grid, feature-spotlight, checklist-reveal, arrow-cycle, hallucination-bubbles
  // ═══════════════════════════════════════════════════════════════
  "backend-api-base-de-donnees-claude": {
    // Section 0: "Le backend : le cerveau invisible"
    // → Brain Network: réseau connecté des composants backend
    0: {
      template: "brain-network",
      props: {
        title: "Le cerveau invisible",
        subtitle: "Le backend connecte tout",
        items: [
          { label: "API Routes" },
          { label: "Base de données" },
          { label: "Auth" },
          { label: "Validation" },
          { label: "Business Logic" },
        ],
      },
    },

    // Section 1: "Configurer Prisma et la base de données"
    // → Code Terminal: commandes de setup Prisma
    1: {
      template: "code-terminal",
      props: {
        title: "Setup Prisma",
        subtitle: "Configuration de la base de données",
        items: [
          { label: "$ npm install prisma @prisma/client", icon: "command" },
          { label: "$ npx prisma init", icon: "command" },
          { label: "model User {", icon: "output" },
          { label: "  id    String @id @default(cuid())", icon: "output" },
          { label: "  email String @unique", icon: "output" },
          { label: "  name  String?", icon: "output" },
          { label: "}", icon: "output" },
          { label: "$ npx prisma db push", icon: "command" },
        ],
      },
    },

    // Section 2: "Les Route Handlers (API)"
    // → Flow Diagram: cycle d'une requête API complète
    2: {
      template: "flow-diagram",
      props: {
        title: "Route Handlers (API)",
        subtitle: "Le cycle d'une requête",
        items: [
          { label: "Client", description: "fetch('/api/users')", icon: "🌐" },
          { label: "Route Handler", description: "app/api/users/route.ts", icon: "📡" },
          { label: "Prisma Query", description: "prisma.user.findMany()", icon: "💾" },
          { label: "Réponse JSON", description: "NextResponse.json(data)", icon: "📦" },
        ],
      },
    },

    // Section 3: "CRUD complet avec Prisma"
    // → Marketplace Grid: les 4 opérations CRUD avec leurs méthodes
    3: {
      template: "marketplace-grid",
      props: {
        title: "CRUD avec Prisma",
        subtitle: "Les 4 opérations fondamentales",
        items: [
          { label: "Create", description: "prisma.user.create()", icon: "➕" },
          { label: "Read", description: "prisma.user.findMany()", icon: "📖" },
          { label: "Update", description: "prisma.user.update()", icon: "✏️" },
          { label: "Delete", description: "prisma.user.delete()", icon: "🗑️" },
          { label: "FindUnique", description: "prisma.user.findUnique()", icon: "🔍" },
          { label: "Upsert", description: "prisma.user.upsert()", icon: "🔄" },
        ],
      },
    },

    // Section 4: "Server Actions : l'alternative moderne"
    // → Feature Spotlight: focus sur les Server Actions
    4: {
      template: "feature-spotlight",
      props: {
        title: "Server Actions",
        subtitle: "L'alternative moderne aux API Routes",
        variant: "emerald",
        items: [
          { label: "Server Actions", icon: "⚡" },
          { label: "Pas besoin de Route Handler", description: "Appel direct depuis le composant", icon: "🎯" },
          { label: "Type-safe end-to-end", description: "TypeScript du client au serveur", icon: "🔒" },
          { label: "'use server'", description: "Un simple directive suffit", icon: "📝" },
          { label: "Revalidation automatique", description: "Le cache se met à jour tout seul", icon: "🔄" },
        ],
      },
    },

    // Section 5: "La validation des données"
    // → Checklist Reveal: règles de validation à implémenter
    5: {
      template: "checklist-reveal",
      props: {
        title: "Validation des données",
        subtitle: "Ne jamais faire confiance au client",
        items: [
          { label: "Valider côté client (UX rapide)" },
          { label: "Re-valider côté serveur (sécurité)" },
          { label: "Utiliser Zod pour les schémas" },
          { label: "Sanitizer les inputs (XSS)" },
          { label: "Limiter la taille des payloads" },
          { label: "Retourner des erreurs claires" },
        ],
      },
    },

    // Section 6: "Connecter le frontend au backend"
    // → Arrow Cycle: boucle frontend ↔ backend
    6: {
      template: "arrow-cycle",
      props: {
        title: "Frontend ↔ Backend",
        subtitle: "La boucle de données",
        items: [
          { label: "UI affiche", description: "Composant React montre les données" },
          { label: "User agit", description: "Clic, formulaire, navigation" },
          { label: "Action/Fetch", description: "Server Action ou fetch API" },
          { label: "DB mise à jour", description: "Prisma écrit en base" },
        ],
      },
    },

    // Section 7: "La gestion des erreurs"
    // → Hallucination Bubbles: bonnes vs mauvaises pratiques d'erreurs
    7: {
      template: "hallucination-bubbles",
      props: {
        title: "Gestion des erreurs",
        subtitle: "Bonnes vs mauvaises pratiques",
        items: [
          { label: "try/catch autour de chaque opération DB" },
          { label: "Ignorer les erreurs et espérer que ça passe" },
          { label: "Messages d'erreur clairs pour l'utilisateur" },
          { label: "Afficher les stack traces en production" },
          { label: "Logging centralisé des erreurs serveur" },
          { label: "Laisser l'app crasher sans error boundary" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 38: design-ux-polish-claude (6 sections)
  // Design, UX, Tailwind, responsive, animations, dark mode
  // Templates: radar-chart, concentric-circles, wireframe-builder, capability-wheel, pie-chart, temperature-gauge
  // ═══════════════════════════════════════════════════════════════
  "design-ux-polish-claude": {
    // Section 0: "Le design compte plus que tu ne le crois"
    // → Radar Chart: impact du design sur les métriques produit
    0: {
      template: "radar-chart",
      props: {
        title: "Impact du design",
        subtitle: "Le design affecte tout",
        items: [
          { label: "Conversion", value: 90 },
          { label: "Rétention", value: 85 },
          { label: "Confiance", value: 95 },
          { label: "Satisfaction", value: 88 },
          { label: "Bouche-à-oreille", value: 80 },
          { label: "Perception prix", value: 75 },
        ],
      },
    },

    // Section 1: "Les principes UX fondamentaux"
    // → Concentric Circles: couches de l'UX du plus fondamental au plus raffiné
    1: {
      template: "concentric-circles",
      props: {
        title: "Principes UX fondamentaux",
        subtitle: "Du plus fondamental au plus raffiné",
        items: [
          { label: "Fonctionnel — ça marche" },
          { label: "Fiable — pas de bugs" },
          { label: "Utilisable — facile à prendre en main" },
          { label: "Agréable — plaisir d'utilisation" },
        ],
      },
    },

    // Section 2: "Tailwind CSS : les bonnes pratiques"
    // → Wireframe Builder: construction visuelle avec les classes Tailwind
    2: {
      template: "wireframe-builder",
      props: {
        title: "Tailwind CSS — Bonnes pratiques",
        subtitle: "Des classes utilitaires bien organisées",
        items: [
          { label: "Spacing système (p-4, m-6, gap-8)" },
          { label: "Couleurs sémantiques (primary, muted)" },
          { label: "Typography scale (text-sm → text-4xl)" },
          { label: "Composants extraits avec @apply" },
          { label: "Design tokens via tailwind.config" },
        ],
      },
    },

    // Section 3: "Le responsive design"
    // → Capability Wheel: les breakpoints et stratégies responsive
    3: {
      template: "capability-wheel",
      props: {
        title: "Responsive design",
        subtitle: "Mobile-first avec Tailwind",
        items: [
          { label: "Mobile (< 640px)", icon: "📱" },
          { label: "sm: 640px", icon: "📲" },
          { label: "md: 768px", icon: "💻" },
          { label: "lg: 1024px", icon: "🖥️" },
          { label: "xl: 1280px", icon: "🖥️" },
          { label: "2xl: 1536px", icon: "🖥️" },
        ],
      },
    },

    // Section 4: "Les animations et micro-interactions"
    // → Pie Chart: répartition des types d'animations dans un MVP
    4: {
      template: "pie-chart",
      props: {
        title: "Animations et micro-interactions",
        subtitle: "Répartition dans un MVP bien designé",
        items: [
          { label: "Transitions de page", value: 25 },
          { label: "Hover / Focus states", value: 30 },
          { label: "Loading / Skeleton", value: 20 },
          { label: "Feedback (success/error)", value: 15 },
          { label: "Animations d'entrée", value: 10 },
        ],
      },
    },

    // Section 5: "Le dark mode"
    // → Temperature Gauge: curseur clair ↔ sombre
    5: {
      template: "temperature-gauge",
      props: {
        title: "Dark Mode",
        subtitle: "Clair ↔ Sombre avec Tailwind",
        items: [
          { label: "Light", value: 0, description: "bg-white text-gray-900" },
          { label: "Auto", value: 0.5, description: "Suit les préférences système" },
          { label: "Dark", value: 1.0, description: "dark:bg-gray-900 dark:text-white" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 39: deployer-tester-iterer-mvp (7 sections)
  // Déploiement, checklist, tests, feedback, itérations, promotion
  // Templates: trophy-unlock, checklist-reveal, progress-path, counter-stats, mind-map, flow-diagram, marketplace-grid
  // ═══════════════════════════════════════════════════════════════
  "deployer-tester-iterer-mvp": {
    // Section 0: "Le jour du lancement"
    // → Trophy Unlock: trophée de lancement avec étapes accomplies
    0: {
      template: "trophy-unlock",
      props: {
        title: "Jour de lancement !",
        subtitle: "Tu y es presque",
        items: [
          { label: "MVP construit", icon: "🏗️", description: "Frontend + Backend prêts" },
          { label: "Design finalisé", icon: "🎨", description: "UX soignée et responsive" },
          { label: "Tests passés", icon: "✅", description: "Pas de bugs critiques" },
          { label: "Prêt à lancer", icon: "🚀", description: "Le monde t'attend !" },
        ],
      },
    },

    // Section 1: "La checklist de pré-lancement"
    // → Checklist Reveal: tous les items à vérifier avant de lancer
    1: {
      template: "checklist-reveal",
      props: {
        title: "Checklist pré-lancement",
        subtitle: "Ne rien oublier",
        items: [
          { label: "Variables d'environnement configurées" },
          { label: "Base de données migrée en production" },
          { label: "HTTPS actif et certificat valide" },
          { label: "Domaine personnalisé configuré" },
          { label: "SEO : meta tags, og:image, sitemap" },
          { label: "Analytics installé (Vercel Analytics)" },
          { label: "Tests manuels sur les parcours critiques" },
          { label: "Performance vérifiée (Lighthouse > 90)" },
        ],
      },
    },

    // Section 2: "Le déploiement final"
    // → Progress Path: étapes du déploiement sur Vercel
    2: {
      template: "progress-path",
      props: {
        title: "Déploiement sur Vercel",
        subtitle: "De git push à la production",
        items: [
          { label: "git push origin main", description: "Pousser le code sur GitHub" },
          { label: "Import sur Vercel", description: "Connecter le repo GitHub" },
          { label: "Variables d'env", description: "Configurer les secrets" },
          { label: "Build automatique", description: "Vercel compile le projet" },
          { label: "Preview URL", description: "Tester sur l'URL de preview" },
          { label: "Production !", description: "Déployer en production" },
        ],
      },
    },

    // Section 3: "Tester avec de vrais utilisateurs"
    // → Counter Stats: métriques de tests utilisateurs
    3: {
      template: "counter-stats",
      props: {
        title: "Tests utilisateurs",
        subtitle: "Les chiffres qui comptent",
        items: [
          { label: "Beta testeurs", value: 5, icon: "👥", description: "minimum" },
          { label: "Tâches à tester", value: 3, icon: "📋", description: "parcours clés" },
          { label: "Bugs critiques", value: 0, icon: "🐛", description: "objectif" },
          { label: "Score satisfaction", value: 80, icon: "⭐", description: "% minimum" },
        ],
      },
    },

    // Section 4: "Collecter du feedback"
    // → Mind Map: canaux et méthodes de collecte de feedback
    4: {
      template: "mind-map",
      props: {
        title: "Collecter du feedback",
        subtitle: "Tous les canaux à exploiter",
        items: [
          { label: "Feedback", icon: "💬" },
          { label: "Entretiens 1:1", icon: "🎙️" },
          { label: "Formulaire in-app", icon: "📝" },
          { label: "Analytics", icon: "📊" },
          { label: "Réseaux sociaux", icon: "🐦" },
          { label: "Support / emails", icon: "📧" },
        ],
      },
    },

    // Section 5: "Itérer rapidement"
    // → Flow Diagram: boucle d'itération rapide post-lancement
    5: {
      template: "flow-diagram",
      props: {
        title: "Boucle d'itération rapide",
        subtitle: "Ship → Learn → Repeat",
        items: [
          { label: "Déployer", description: "Livrer une amélioration", icon: "🚀" },
          { label: "Mesurer", description: "Regarder les analytics", icon: "📊" },
          { label: "Écouter", description: "Lire le feedback utilisateur", icon: "👂" },
          { label: "Prioriser", description: "Choisir le prochain fix/feature", icon: "🎯" },
          { label: "Coder", description: "Implémenter avec Claude Code", icon: "💻" },
        ],
      },
    },

    // Section 6: "Où partager ton MVP"
    // → Marketplace Grid: plateformes de promotion du MVP
    6: {
      template: "marketplace-grid",
      props: {
        title: "Où partager ton MVP",
        subtitle: "Les plateformes pour te faire connaître",
        items: [
          { label: "Product Hunt", description: "La référence du lancement", icon: "🚀" },
          { label: "Indie Hackers", description: "Communauté de makers", icon: "💡" },
          { label: "Hacker News", description: "Show HN: ton projet", icon: "🟠" },
          { label: "Reddit", description: "Subreddits de ta niche", icon: "🤖" },
          { label: "X / Twitter", description: "Build in public", icon: "🐦" },
          { label: "LinkedIn", description: "Réseau pro et B2B", icon: "💼" },
        ],
      },
    },
  },
};
