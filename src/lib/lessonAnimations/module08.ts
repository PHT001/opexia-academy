import type { AllLessonAnimations } from "./types";

export const module08: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 40: Landing Page de Vente Haute Conversion (8 sections)
  // Templates: rocket-launch, wireframe-builder, code-terminal, browser-mockup,
  //            chat-bubbles, comparison-grid, gear-system, trophy-unlock
  // ═══════════════════════════════════════════════════════════════
  "projet-landing-page-vente-haute-conversion": {
    // Section 0: "Objectif du projet"
    // → Rocket Launch: décollage du projet landing page
    0: {
      template: "rocket-launch",
      props: {
        title: "Projet : Landing Page",
        subtitle: "Créer une page de vente qui convertit",
        items: [
          { label: "Définir l'objectif", description: "Page de vente haute conversion" },
          { label: "Structurer les sections", description: "Hero, preuves, CTA" },
          { label: "Coder avec Claude", description: "HTML, CSS, animations" },
          { label: "Déployer en ligne", description: "Résultat professionnel" },
        ],
      },
    },

    // Section 1: "Architecture de la page"
    // → Wireframe Builder: wireframe animé de la structure
    1: {
      template: "wireframe-builder",
      props: {
        title: "Architecture de la landing page",
        subtitle: "Les blocs essentiels d'une page qui vend",
        items: [
          { label: "Navigation fixe + logo", description: "Ancrage visuel" },
          { label: "Hero Section avec CTA", description: "Accroche principale" },
          { label: "Bande de logos partenaires", description: "Crédibilité immédiate" },
          { label: "3 bénéfices en colonnes", description: "Proposition de valeur" },
          { label: "Témoignages clients", description: "Preuve sociale" },
          { label: "Tarification claire", description: "Offres et prix" },
          { label: "FAQ objections", description: "Lever les freins" },
          { label: "CTA final puissant", description: "Dernière conversion" },
        ],
      },
    },

    // Section 2: "Étape 1 : Initialiser le projet avec Claude Code"
    // → Code Terminal: commandes d'initialisation du projet
    2: {
      template: "code-terminal",
      props: {
        title: "Initialiser le projet",
        subtitle: "Premiers pas avec Claude Code",
        items: [
          { label: "mkdir landing-page && cd landing-page", icon: "command" },
          { label: "claude 'Initialise un projet Next.js avec Tailwind pour une landing page SaaS'", icon: "command" },
          { label: "Created: package.json, tailwind.config.ts", icon: "output" },
          { label: "Created: src/app/page.tsx, layout.tsx", icon: "output" },
          { label: "npm run dev", icon: "command" },
          { label: "✓ Ready on http://localhost:3000", icon: "output" },
        ],
      },
    },

    // Section 3: "Étape 2 : Le Hero Section"
    // → Browser Mockup: aperçu du hero dans un navigateur
    3: {
      template: "browser-mockup",
      props: {
        title: "Le Hero Section",
        subtitle: "La première impression compte",
        items: [
          { label: "Headline percutante", icon: "📰", description: "Titre principal en gras" },
          { label: "Sous-titre explicatif", icon: "📝", description: "Clarifier la proposition" },
          { label: "Bouton CTA primaire", icon: "🎯", description: "Action claire et visible" },
          { label: "Visual produit / mockup", icon: "🖼️", description: "Image ou démo animée" },
          { label: "Badge de confiance", icon: "⭐", description: "Note ou nombre d'utilisateurs" },
        ],
      },
    },

    // Section 4: "Étape 3 : Preuve sociale et témoignages"
    // → Chat Bubbles: témoignages comme messages de clients
    4: {
      template: "chat-bubbles",
      props: {
        title: "Preuve sociale et témoignages",
        subtitle: "Laisser les clients parler pour toi",
        items: [
          { label: "Ce produit a transformé notre workflow !", description: "Marie D. — CEO StartupX" },
          { label: "+200% de conversion en 3 mois", description: "Thomas R. — Growth Manager" },
          { label: "Le meilleur investissement de l'année", description: "Sophie L. — Freelance" },
          { label: "Support réactif et produit excellent", description: "Jean M. — CTO AgencyPro" },
        ],
      },
    },

    // Section 5: "Étape 4 : Bénéfices et tarification"
    // → Comparison Grid: grille des plans tarifaires
    5: {
      template: "comparison-grid",
      props: {
        title: "Bénéfices et tarification",
        subtitle: "Structurer une offre claire",
        items: [
          { label: "Starter", description: "19€/mois — Essentiel pour démarrer", icon: "🌱" },
          { label: "Pro", description: "49€/mois — Pour les équipes", icon: "⚡" },
          { label: "Enterprise", description: "Sur devis — Solution sur mesure", icon: "🏢" },
          { label: "Garantie 30j", description: "Satisfait ou remboursé", icon: "🛡️" },
        ],
      },
    },

    // Section 6: "Étape 5 : Responsive et optimisation"
    // → Gear System: engrenages de l'optimisation
    6: {
      template: "gear-system",
      props: {
        title: "Responsive et optimisation",
        subtitle: "Performance sur tous les écrans",
        items: [
          { label: "Mobile-first", description: "375px → 1440px" },
          { label: "Lazy loading", description: "Images optimisées" },
          { label: "Core Web Vitals", description: "LCP, FID, CLS" },
          { label: "SEO on-page", description: "Méta, titres, alt" },
        ],
      },
    },

    // Section 7: "Étape 6 : Déploiement"
    // → Trophy Unlock: projet landing page terminé
    7: {
      template: "trophy-unlock",
      props: {
        title: "Landing page déployée !",
        subtitle: "Projet terminé avec succès",
        items: [
          { label: "Page responsive", icon: "📱", description: "Mobile + Desktop" },
          { label: "Score Lighthouse 95+", icon: "🏆", description: "Performance optimale" },
          { label: "Déployée sur Vercel", icon: "🚀", description: "URL publique active" },
          { label: "Prête à convertir", icon: "💰", description: "CTA fonctionnels" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 41: Chatbot FAQ Intelligent Entreprise (8 sections)
  // Templates: brain-network, flow-diagram, layered-stack, code-terminal,
  //            chat-bubbles, radar-chart, sliding-window, checklist-reveal
  // ═══════════════════════════════════════════════════════════════
  "projet-chatbot-faq-intelligent-entreprise": {
    // Section 0: "Objectif du projet"
    // → Brain Network: réseau neuronal du chatbot intelligent
    0: {
      template: "brain-network",
      props: {
        title: "Chatbot FAQ Intelligent",
        subtitle: "Un assistant IA pour votre entreprise",
        items: [
          { label: "Questions clients" },
          { label: "Analyse sémantique" },
          { label: "Base de connaissances" },
          { label: "Réponse contextuelle" },
          { label: "Amélioration continue" },
        ],
      },
    },

    // Section 1: "Architecture technique"
    // → Flow Diagram: pipeline complet du chatbot
    1: {
      template: "flow-diagram",
      props: {
        title: "Architecture du chatbot",
        subtitle: "Du message client à la réponse",
        items: [
          { label: "Widget Chat", description: "Interface utilisateur React", icon: "💬" },
          { label: "API Backend", description: "Route handler Next.js", icon: "⚙️" },
          { label: "Claude API", description: "Compréhension du langage", icon: "🧠" },
          { label: "Base FAQ", description: "Données structurées JSON", icon: "📚" },
          { label: "Réponse", description: "Streaming temps réel", icon: "📤" },
        ],
      },
    },

    // Section 2: "Étape 1 : Préparer la base de connaissances"
    // → Layered Stack: couches de la base de connaissances
    2: {
      template: "layered-stack",
      props: {
        title: "Base de connaissances",
        subtitle: "Organiser les données FAQ",
        items: [
          { label: "Catégories thématiques", description: "Produit, Support, Facturation, Technique", icon: "📂" },
          { label: "Questions fréquentes", description: "Top 50 des demandes clients", icon: "❓" },
          { label: "Réponses validées", description: "Réponses approuvées par l'équipe", icon: "✅" },
          { label: "Métadonnées", description: "Tags, priorité, date de mise à jour", icon: "🏷️" },
          { label: "Fichier JSON structuré", description: "Format exploitable par Claude", icon: "📄" },
        ],
      },
    },

    // Section 3: "Étape 2 : Créer le backend API"
    // → Code Terminal: création de l'API chatbot
    3: {
      template: "code-terminal",
      props: {
        title: "Backend API du chatbot",
        subtitle: "Route handler avec streaming",
        items: [
          { label: "claude 'Crée une route API /api/chat qui utilise Claude pour répondre aux FAQ'", icon: "command" },
          { label: "Created: src/app/api/chat/route.ts", icon: "output" },
          { label: "claude 'Ajoute le streaming SSE pour les réponses en temps réel'", icon: "command" },
          { label: "Updated: route.ts — StreamingTextResponse activé ✓", icon: "output" },
          { label: "claude 'Intègre la base FAQ comme contexte système'", icon: "command" },
          { label: "Updated: route.ts — System prompt avec FAQ injecté ✓", icon: "output" },
        ],
      },
    },

    // Section 4: "Étape 3 : Construire le widget de chat"
    // → Chat Bubbles: démo du widget en action
    4: {
      template: "chat-bubbles",
      props: {
        title: "Widget de chat en action",
        subtitle: "Interface conversationnelle fluide",
        items: [
          { label: "Bonjour ! Comment puis-je vous aider ?", description: "Assistant IA" },
          { label: "Comment réinitialiser mon mot de passe ?", description: "Client" },
          { label: "Pour réinitialiser votre mot de passe, rendez-vous sur la page de connexion et cliquez sur 'Mot de passe oublié'.", description: "Assistant IA" },
          { label: "Merci, ça a marché !", description: "Client" },
        ],
      },
    },

    // Section 5: "Étape 4 : Améliorer la pertinence"
    // → Radar Chart: axes de qualité du chatbot
    5: {
      template: "radar-chart",
      props: {
        title: "Qualité des réponses",
        subtitle: "Optimiser chaque axe de pertinence",
        items: [
          { label: "Précision", value: 90, description: "Réponses factuellement correctes" },
          { label: "Pertinence", value: 85, description: "Réponse adaptée à la question" },
          { label: "Clarté", value: 88, description: "Formulation compréhensible" },
          { label: "Rapidité", value: 92, description: "Temps de réponse < 2s" },
          { label: "Couverture", value: 78, description: "% de questions couvertes" },
          { label: "Ton", value: 86, description: "Voix de marque respectée" },
        ],
      },
    },

    // Section 6: "Étape 5 : Historique et contexte"
    // → Sliding Window: fenêtre de contexte conversationnel
    6: {
      template: "sliding-window",
      props: {
        title: "Historique et contexte",
        subtitle: "Mémoire conversationnelle du chatbot",
        items: [
          { label: "Message actuel", value: 100, description: "Question en cours" },
          { label: "3 derniers échanges", value: 80, description: "Contexte immédiat" },
          { label: "Session complète", value: 50, description: "Historique de la conversation" },
          { label: "Profil utilisateur", value: 30, description: "Préférences et historique" },
        ],
      },
    },

    // Section 7: "Étape 6 : Intégration et déploiement"
    // → Checklist Reveal: checklist avant mise en production
    7: {
      template: "checklist-reveal",
      props: {
        title: "Checklist de déploiement",
        subtitle: "Avant la mise en production du chatbot",
        items: [
          { label: "Base FAQ complète et validée" },
          { label: "Rate limiting configuré sur l'API" },
          { label: "Fallback vers support humain actif" },
          { label: "Widget responsive mobile + desktop" },
          { label: "Analytics de conversations activé" },
          { label: "Tests de charge effectués" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 42: Dashboard Analytique Interactif (8 sections)
  // Templates: pulsing-orb, marketplace-grid, hierarchy-tree, token-stream,
  //            counter-stats, bar-chart, feature-spotlight, progress-path
  // ═══════════════════════════════════════════════════════════════
  "projet-dashboard-analytique-interactif": {
    // Section 0: "Objectif du projet"
    // → Pulsing Orb: orbe central du dashboard avec métriques
    0: {
      template: "pulsing-orb",
      props: {
        title: "Dashboard Analytique",
        subtitle: "Visualiser les données en temps réel",
        items: [
          { label: "KPI Cards", icon: "📊" },
          { label: "Graphiques", icon: "📈" },
          { label: "Filtres", icon: "🔍" },
          { label: "Exports", icon: "📥" },
          { label: "Temps réel", icon: "⚡" },
        ],
      },
    },

    // Section 1: "Stack technique"
    // → Marketplace Grid: grille des technologies utilisées
    1: {
      template: "marketplace-grid",
      props: {
        title: "Stack technique",
        subtitle: "Les outils du dashboard",
        items: [
          { label: "Next.js", icon: "⚛️", description: "Framework React" },
          { label: "Recharts", icon: "📊", description: "Bibliothèque de graphiques" },
          { label: "Tailwind CSS", icon: "🎨", description: "Styling utilitaire" },
          { label: "Zustand", icon: "🐻", description: "State management" },
          { label: "date-fns", icon: "📅", description: "Manipulation de dates" },
          { label: "Papa Parse", icon: "📄", description: "Export CSV" },
        ],
      },
    },

    // Section 2: "Étape 1 : Structure et layout du dashboard"
    // → Hierarchy Tree: arborescence des composants
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Structure du dashboard",
        subtitle: "Organisation des composants",
        items: [
          { label: "DashboardLayout", icon: "🏗️" },
          { label: "├── Sidebar", icon: "📋" },
          { label: "├── Header + Filtres", icon: "🔍" },
          { label: "├── KPIGrid", icon: "📊" },
          { label: "├── ChartsSection", icon: "📈" },
          { label: "└── DataTable", icon: "📋" },
        ],
      },
    },

    // Section 3: "Étape 2 : Générer les données mock"
    // → Token Stream: flux de données mockées
    3: {
      template: "token-stream",
      props: {
        title: "Données mock réalistes",
        subtitle: "Générer des jeux de données avec Claude",
        items: [
          { label: "{", description: "Données JSON structurées pour le dashboard" },
          { label: "revenue:" },
          { label: "45230," },
          { label: "users:" },
          { label: "1847," },
          { label: "conversion:" },
          { label: "3.2," },
          { label: "orders:" },
          { label: "312" },
          { label: "}" },
        ],
      },
    },

    // Section 4: "Étape 3 : Les KPI cards"
    // → Counter Stats: métriques animées du dashboard
    4: {
      template: "counter-stats",
      props: {
        title: "KPI Cards dynamiques",
        subtitle: "Chiffres clés en un coup d'oeil",
        items: [
          { label: "Chiffre d'affaires", value: 45230, icon: "💰", description: "€" },
          { label: "Utilisateurs actifs", value: 1847, icon: "👥", description: "users" },
          { label: "Taux de conversion", value: 3, icon: "📈", description: "%" },
          { label: "Commandes", value: 312, icon: "📦", description: "ce mois" },
        ],
      },
    },

    // Section 5: "Étape 4 : Les graphiques interactifs"
    // → Bar Chart: exemple de graphique à barres interactif
    5: {
      template: "bar-chart",
      props: {
        title: "Graphiques interactifs",
        subtitle: "Revenus mensuels avec Recharts",
        items: [
          { label: "Janvier", value: 32000 },
          { label: "Février", value: 38000 },
          { label: "Mars", value: 42000 },
          { label: "Avril", value: 45000 },
          { label: "Mai", value: 51000 },
          { label: "Juin", value: 48000 },
        ],
      },
    },

    // Section 6: "Étape 5 : Filtres et interactivité"
    // → Feature Spotlight: projecteur sur les fonctionnalités de filtre
    6: {
      template: "feature-spotlight",
      props: {
        title: "Filtres et interactivité",
        subtitle: "Naviguer dans les données",
        items: [
          { label: "Filtres", icon: "🔍" },
          { label: "Plage de dates", description: "Sélecteur calendrier personnalisé", icon: "📅" },
          { label: "Catégorie produit", description: "Dropdown multi-sélection", icon: "🏷️" },
          { label: "Région géographique", description: "Carte interactive cliquable", icon: "🗺️" },
          { label: "Comparaison période", description: "vs mois précédent / année N-1", icon: "📊" },
        ],
      },
    },

    // Section 7: "Étape 6 : Export et fonctionnalités avancées"
    // → Progress Path: chemin des fonctionnalités avancées
    7: {
      template: "progress-path",
      props: {
        title: "Fonctionnalités avancées",
        subtitle: "Les finitions du dashboard",
        items: [
          { label: "Export CSV", description: "Télécharger les données filtrées" },
          { label: "Export PDF", description: "Rapport complet avec graphiques" },
          { label: "Mode sombre", description: "Thème dark automatique" },
          { label: "Responsive", description: "Adapté tablette et mobile" },
          { label: "Données en direct", description: "Auto-refresh toutes les 30s" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 43: Mini SaaS CRM Simple (8 sections)
  // Templates: mind-map, layered-stack, model-cards, arrow-cycle,
  //            wireframe-builder, split-transform, shield-lock, rocket-launch
  // ═══════════════════════════════════════════════════════════════
  "projet-mini-saas-crm-simple": {
    // Section 0: "Objectif du projet"
    // → Mind Map: carte mentale du CRM avec ses modules
    0: {
      template: "mind-map",
      props: {
        title: "Mini SaaS CRM",
        subtitle: "Un outil complet de gestion de la relation client",
        items: [
          { label: "CRM", icon: "🏢" },
          { label: "Contacts", icon: "👥" },
          { label: "Deals", icon: "💰" },
          { label: "Pipeline", icon: "📊" },
          { label: "Tâches", icon: "✅" },
          { label: "Dashboard", icon: "📈" },
        ],
      },
    },

    // Section 1: "Stack technique"
    // → Layered Stack: couches techniques du CRM
    1: {
      template: "layered-stack",
      props: {
        title: "Stack technique CRM",
        subtitle: "Architecture fullstack moderne",
        items: [
          { label: "Vercel", description: "Hébergement et CDN", icon: "▲" },
          { label: "Next.js 14", description: "App Router + Server Actions", icon: "⚛️" },
          { label: "Prisma ORM", description: "Requêtes typées et migrations", icon: "🔷" },
          { label: "PostgreSQL", description: "Base de données relationnelle", icon: "🐘" },
          { label: "NextAuth.js", description: "Authentification sécurisée", icon: "🔐" },
        ],
      },
    },

    // Section 2: "Étape 1 : Schéma de base de données"
    // → Model Cards: entités de la base de données
    2: {
      template: "model-cards",
      props: {
        title: "Schéma de base de données",
        subtitle: "Les modèles Prisma du CRM",
        items: [
          { label: "User", description: "id, email, name, role, createdAt", icon: "👤" },
          { label: "Contact", description: "id, name, email, phone, company, status", icon: "📇" },
          { label: "Deal", description: "id, title, value, stage, contactId", icon: "💼" },
          { label: "Activity", description: "id, type, note, dealId, createdAt", icon: "📝" },
          { label: "Tag", description: "id, name, color, contacts[]", icon: "🏷️" },
        ],
      },
    },

    // Section 3: "Étape 2 : API CRUD complètes"
    // → Arrow Cycle: cycle CRUD des opérations
    3: {
      template: "arrow-cycle",
      props: {
        title: "API CRUD complètes",
        subtitle: "Les 4 opérations sur chaque ressource",
        items: [
          { label: "Create", description: "POST — Créer un contact ou deal" },
          { label: "Read", description: "GET — Lister et filtrer les données" },
          { label: "Update", description: "PUT — Modifier les informations" },
          { label: "Delete", description: "DELETE — Supprimer avec confirmation" },
        ],
      },
    },

    // Section 4: "Étape 3 : Interface contacts"
    // → Wireframe Builder: wireframe de la page contacts
    4: {
      template: "wireframe-builder",
      props: {
        title: "Interface Contacts",
        subtitle: "Vue liste et fiche détaillée",
        items: [
          { label: "Barre de recherche + filtres", description: "Recherche instantanée" },
          { label: "Tableau des contacts", description: "Tri par colonnes" },
          { label: "Modal création contact", description: "Formulaire validé" },
          { label: "Fiche contact détaillée", description: "Historique et deals liés" },
          { label: "Actions groupées", description: "Sélection multiple" },
        ],
      },
    },

    // Section 5: "Étape 4 : Pipeline de deals (Kanban)"
    // → Split Transform: transformation de la vue liste vers Kanban
    5: {
      template: "split-transform",
      props: {
        title: "Pipeline Kanban",
        subtitle: "Visualiser les deals par étape",
        items: [
          { label: "Prospect", description: "Nouveaux leads identifiés" },
          { label: "Qualifié", description: "Besoin et budget confirmés" },
          { label: "Proposition", description: "Offre commerciale envoyée" },
          { label: "Négociation", description: "Discussions en cours" },
          { label: "Gagné ✓", description: "Deal conclu avec succès" },
          { label: "Perdu ✗", description: "Opportunité non convertie" },
        ],
      },
    },

    // Section 6: "Étape 5 : Authentification et sécurité"
    // → Shield Lock: protection du CRM
    6: {
      template: "shield-lock",
      props: {
        title: "Authentification et sécurité",
        subtitle: "Protéger les données du CRM",
        items: [
          { label: "NextAuth.js", description: "Login email + OAuth Google" },
          { label: "Sessions JWT", description: "Tokens sécurisés et signés" },
          { label: "Middleware auth", description: "Routes protégées par défaut" },
          { label: "Rôles utilisateurs", description: "Admin, Manager, Viewer" },
        ],
      },
    },

    // Section 7: "Étape 6 : Déploiement et finitions"
    // → Rocket Launch: mise en production du CRM
    7: {
      template: "rocket-launch",
      props: {
        title: "Déploiement du CRM",
        subtitle: "Du local à la production",
        items: [
          { label: "Variables d'environnement", description: "DATABASE_URL, NEXTAUTH_SECRET" },
          { label: "Migration Prisma", description: "npx prisma migrate deploy" },
          { label: "Build de production", description: "npm run build sans erreurs" },
          { label: "Déploiement Vercel", description: "CRM en ligne et fonctionnel" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 44: API REST Complète avec Authentification (8 sections)
  // Templates: concentric-circles, flow-diagram, code-terminal, shield-lock,
  //            comparison-grid, nesting-layers, artifact-gallery, checklist-reveal
  // ═══════════════════════════════════════════════════════════════
  "projet-api-rest-complete-authentification": {
    // Section 0: "Objectif du projet"
    // → Concentric Circles: couches d'une API REST complète
    0: {
      template: "concentric-circles",
      props: {
        title: "API REST Complète",
        subtitle: "Architecture en couches sécurisée",
        items: [
          { label: "Routes publiques" },
          { label: "Authentification" },
          { label: "Autorisation" },
          { label: "Business Logic" },
          { label: "Base de données" },
        ],
      },
    },

    // Section 1: "Architecture de l'API"
    // → Flow Diagram: pipeline de requête API
    1: {
      template: "flow-diagram",
      props: {
        title: "Architecture de l'API",
        subtitle: "Cycle de vie d'une requête",
        items: [
          { label: "Client HTTP", description: "Postman, Frontend, Mobile", icon: "📱" },
          { label: "Rate Limiter", description: "Protection anti-abus", icon: "🛡️" },
          { label: "Auth Middleware", description: "Validation du token JWT", icon: "🔑" },
          { label: "Controller", description: "Logique métier et validation", icon: "⚙️" },
          { label: "Prisma ORM", description: "Requête base de données", icon: "🔷" },
          { label: "JSON Response", description: "Réponse structurée + status", icon: "📤" },
        ],
      },
    },

    // Section 2: "Étape 1 : Setup du projet"
    // → Code Terminal: initialisation du projet API
    2: {
      template: "code-terminal",
      props: {
        title: "Setup du projet API",
        subtitle: "Scaffolding avec Claude Code",
        items: [
          { label: "claude 'Crée une API REST Node.js avec Express, Prisma et JWT'", icon: "command" },
          { label: "Created: src/server.ts, prisma/schema.prisma", icon: "output" },
          { label: "claude 'Ajoute la structure routes/controllers/middleware'", icon: "command" },
          { label: "Created: src/routes/, src/controllers/, src/middleware/", icon: "output" },
          { label: "npx prisma migrate dev --name init", icon: "command" },
          { label: "✓ Migration applied: 20250301_init", icon: "output" },
        ],
      },
    },

    // Section 3: "Étape 2 : Authentification JWT"
    // → Shield Lock: flux d'authentification JWT
    3: {
      template: "shield-lock",
      props: {
        title: "Authentification JWT",
        subtitle: "Sécuriser chaque requête",
        items: [
          { label: "Register", description: "POST /auth/register — Hash bcrypt du password" },
          { label: "Login", description: "POST /auth/login — Génération du token JWT" },
          { label: "Middleware", description: "Vérification du Bearer token sur chaque requête" },
          { label: "Refresh Token", description: "Rotation automatique du token expiré" },
          { label: "Logout", description: "Invalidation du refresh token" },
        ],
      },
    },

    // Section 4: "Étape 3 : CRUD des ressources"
    // → Comparison Grid: méthodes HTTP et leurs usages
    4: {
      template: "comparison-grid",
      props: {
        title: "CRUD des ressources",
        subtitle: "Endpoints RESTful standardisés",
        items: [
          { label: "GET /api/items", description: "Lister avec pagination et filtres", icon: "📖" },
          { label: "GET /api/items/:id", description: "Détail d'une ressource", icon: "🔍" },
          { label: "POST /api/items", description: "Créer avec validation Zod", icon: "➕" },
          { label: "PUT /api/items/:id", description: "Mise à jour complète", icon: "✏️" },
          { label: "PATCH /api/items/:id", description: "Mise à jour partielle", icon: "🔧" },
          { label: "DELETE /api/items/:id", description: "Suppression soft delete", icon: "🗑️" },
        ],
      },
    },

    // Section 5: "Étape 4 : Fonctionnalités avancées"
    // → Nesting Layers: couches de fonctionnalités avancées
    5: {
      template: "nesting-layers",
      props: {
        title: "Fonctionnalités avancées",
        subtitle: "Au-delà du CRUD basique",
        items: [
          { label: "Pagination curseur" },
          { label: "Filtres dynamiques" },
          { label: "Tri multi-colonnes" },
          { label: "Recherche full-text" },
          { label: "Upload fichiers" },
        ],
      },
    },

    // Section 6: "Étape 5 : Documentation Swagger"
    // → Artifact Gallery: galerie de la documentation API
    6: {
      template: "artifact-gallery",
      props: {
        title: "Documentation Swagger",
        subtitle: "API auto-documentée et testable",
        items: [
          { label: "OpenAPI Spec", description: "Schéma YAML auto-généré", icon: "📋" },
          { label: "Swagger UI", description: "Interface interactive /api-docs", icon: "🌐" },
          { label: "Exemples requêtes", description: "Payloads pré-remplis pour chaque endpoint", icon: "📝" },
          { label: "Schémas réponse", description: "Types et statuts documentés", icon: "📐" },
          { label: "Collection Postman", description: "Export pour tests manuels", icon: "📮" },
        ],
      },
    },

    // Section 7: "Étape 6 : Tests et déploiement"
    // → Checklist Reveal: checklist avant production
    7: {
      template: "checklist-reveal",
      props: {
        title: "Tests et déploiement",
        subtitle: "Checklist qualité avant la mise en ligne",
        items: [
          { label: "Tests unitaires controllers — couverture > 80%" },
          { label: "Tests d'intégration — endpoints critiques" },
          { label: "Validation des erreurs — codes HTTP corrects" },
          { label: "Variables d'environnement production configurées" },
          { label: "CORS et rate limiting activés" },
          { label: "Déploiement Railway ou Render réussi" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 45: Application Full Stack Déployée (8 sections)
  // Templates: planet-orbit, capability-wheel, hierarchy-tree, shield-lock,
  //            model-cards, split-transform, pie-chart, trophy-unlock
  // ═══════════════════════════════════════════════════════════════
  "projet-application-full-stack-deployee": {
    // Section 0: "Objectif du projet"
    // → Planet Orbit: écosystème de l'app full stack
    0: {
      template: "planet-orbit",
      props: {
        title: "Application Full Stack",
        subtitle: "Gestionnaire de projets et tâches déployé",
        items: [
          { label: "Frontend", icon: "🖥️" },
          { label: "Backend", icon: "⚙️" },
          { label: "Auth", icon: "🔐" },
          { label: "Database", icon: "🗄️" },
          { label: "Deploy", icon: "🚀" },
        ],
      },
    },

    // Section 1: "Vue d'ensemble de l'application"
    // → Capability Wheel: roue des fonctionnalités de l'app
    1: {
      template: "capability-wheel",
      props: {
        title: "Fonctionnalités de l'application",
        subtitle: "Gestionnaire de projets complet",
        items: [
          { label: "Inscription / Login", icon: "🔑" },
          { label: "Créer des projets", icon: "📁" },
          { label: "Gérer les tâches", icon: "✅" },
          { label: "Vue Kanban", icon: "📋" },
          { label: "Dashboard perso", icon: "📊" },
          { label: "Collaboration", icon: "👥" },
        ],
      },
    },

    // Section 2: "Étape 1 : Architecture et setup"
    // → Hierarchy Tree: arborescence complète du projet
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Architecture du projet",
        subtitle: "Structure fullstack Next.js",
        items: [
          { label: "project-manager/", icon: "📂" },
          { label: "├── src/app/(auth)/", icon: "🔐" },
          { label: "├── src/app/(dashboard)/", icon: "📊" },
          { label: "├── src/app/api/", icon: "⚙️" },
          { label: "├── src/components/", icon: "🧩" },
          { label: "├── prisma/schema.prisma", icon: "🔷" },
          { label: "└── .env.local", icon: "🔒" },
        ],
      },
    },

    // Section 3: "Étape 2 : Authentification complète"
    // → Shield Lock: système d'authentification complet
    3: {
      template: "shield-lock",
      props: {
        title: "Authentification complète",
        subtitle: "NextAuth.js avec providers multiples",
        items: [
          { label: "Email + Password", description: "Credentials provider avec bcrypt" },
          { label: "OAuth Google", description: "Connexion en 1 clic" },
          { label: "OAuth GitHub", description: "Pour les développeurs" },
          { label: "Session JWT", description: "Token sécurisé côté client" },
          { label: "Pages custom", description: "Login et Register personnalisés" },
        ],
      },
    },

    // Section 4: "Étape 3 : Gestion des projets"
    // → Model Cards: les entités projet
    4: {
      template: "model-cards",
      props: {
        title: "Gestion des projets",
        subtitle: "CRUD et organisation",
        items: [
          { label: "Créer un projet", description: "Nom, description, couleur, icône", icon: "➕" },
          { label: "Liste des projets", description: "Cards avec progression et stats", icon: "📋" },
          { label: "Détail projet", description: "Tâches, membres, activité", icon: "📂" },
          { label: "Paramètres projet", description: "Modifier, archiver, supprimer", icon: "⚙️" },
        ],
      },
    },

    // Section 5: "Étape 4 : Vue Kanban des tâches"
    // → Split Transform: transformation des tâches en colonnes Kanban
    5: {
      template: "split-transform",
      props: {
        title: "Vue Kanban des tâches",
        subtitle: "Drag & Drop entre colonnes",
        items: [
          { label: "À faire", description: "Tâches en attente de démarrage" },
          { label: "En cours", description: "Travail en progression active" },
          { label: "En revue", description: "En attente de validation" },
          { label: "Terminé", description: "Tâches complétées avec succès" },
        ],
      },
    },

    // Section 6: "Étape 5 : Dashboard personnel"
    // → Pie Chart: répartition des tâches par statut
    6: {
      template: "pie-chart",
      props: {
        title: "Dashboard personnel",
        subtitle: "Vue synthétique de votre activité",
        items: [
          { label: "À faire", value: 35, description: "Tâches en attente" },
          { label: "En cours", value: 25, description: "En progression" },
          { label: "En revue", value: 15, description: "À valider" },
          { label: "Terminé", value: 25, description: "Complétées" },
        ],
      },
    },

    // Section 7: "Étape 6 : Déploiement sur Vercel"
    // → Trophy Unlock: application déployée, projet abouti
    7: {
      template: "trophy-unlock",
      props: {
        title: "Application déployée !",
        subtitle: "Projet full stack terminé avec succès",
        items: [
          { label: "App fonctionnelle", icon: "🏆", description: "Toutes les features actives" },
          { label: "Authentification", icon: "🔐", description: "Login sécurisé en production" },
          { label: "Base de données", icon: "🗄️", description: "PostgreSQL sur Supabase" },
          { label: "URL publique", icon: "🌍", description: "Accessible au monde entier" },
          { label: "Portfolio-ready", icon: "⭐", description: "Projet présentable aux recruteurs" },
        ],
      },
    },
  },
};
