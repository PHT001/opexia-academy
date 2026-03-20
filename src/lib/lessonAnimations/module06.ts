import type { AllLessonAnimations } from "./types";

export const module06: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LECON 26: HTML, CSS, JavaScript — Fondamentaux Web (5 sections)
  // Templates: browser-mockup, hierarchy-tree, layered-stack, gear-system, wireframe-builder
  // ═══════════════════════════════════════════════════════════════
  "html-css-javascript-fondamentaux-web": {
    // Section 0: "Pourquoi apprendre les bases du web"
    // → Browser Mockup: fenêtre navigateur montrant ce qu'on peut créer
    0: {
      template: "browser-mockup",
      props: {
        title: "Le web est partout",
        subtitle: "Pourquoi comprendre comment il fonctionne",
        items: [
          { label: "Sites vitrines", icon: "🌐", description: "Présenter ton activité" },
          { label: "Applications SaaS", icon: "📱", description: "Ton futur MVP" },
          { label: "E-commerce", icon: "🛒", description: "Vendre en ligne" },
          { label: "Dashboards", icon: "📊", description: "Piloter ton business" },
          { label: "Landing pages", icon: "🎯", description: "Convertir tes visiteurs" },
        ],
      },
    },

    // Section 1: "HTML : la structure de la page"
    // → Hierarchy Tree: arborescence DOM d'une page HTML
    1: {
      template: "hierarchy-tree",
      props: {
        title: "HTML : l'ossature de la page",
        subtitle: "Chaque page web est un arbre d'éléments",
        items: [
          { label: "<html>", icon: "🌐" },
          { label: "<head>", icon: "🧠", description: "Métadonnées, titre, liens CSS" },
          { label: "<body>", icon: "📄", description: "Contenu visible" },
          { label: "<header>", icon: "🔝", description: "Navigation, logo" },
          { label: "<main>", icon: "📝", description: "Contenu principal" },
          { label: "<footer>", icon: "🔽", description: "Pied de page" },
        ],
      },
    },

    // Section 2: "CSS : le style visuel"
    // → Layered Stack: couches de styles CSS empilées
    2: {
      template: "layered-stack",
      props: {
        title: "CSS : l'habillage visuel",
        subtitle: "Chaque couche ajoute du style",
        items: [
          { label: "Layout", description: "Flexbox, Grid — la disposition des blocs", icon: "📐" },
          { label: "Typographie", description: "Polices, tailles, espacements", icon: "🔤" },
          { label: "Couleurs", description: "Fonds, textes, dégradés", icon: "🎨" },
          { label: "Animations", description: "Transitions, transformations", icon: "✨" },
          { label: "Responsive", description: "Media queries — adapté mobile", icon: "📱" },
        ],
      },
    },

    // Section 3: "JavaScript : l'interactivité"
    // → Gear System: engrenages interconnectés des capacités JS
    3: {
      template: "gear-system",
      props: {
        title: "JavaScript : la vie de la page",
        subtitle: "Tout ce qui bouge et réagit",
        items: [
          { label: "Événements", description: "Clics, scrolls, saisie clavier" },
          { label: "DOM", description: "Modifier la page en temps réel" },
          { label: "Fetch API", description: "Communiquer avec les serveurs" },
          { label: "Logique", description: "Conditions, boucles, calculs" },
        ],
      },
    },

    // Section 4: "React et Next.js"
    // → Wireframe Builder: composants React assemblés en page
    4: {
      template: "wireframe-builder",
      props: {
        title: "React + Next.js",
        subtitle: "Le framework de ton MVP",
        items: [
          { label: "<Navbar />", description: "Composant navigation réutilisable" },
          { label: "<Hero />", description: "Section d'accroche principale" },
          { label: "<Features />", description: "Grille de fonctionnalités" },
          { label: "<Pricing />", description: "Tableau de tarification" },
          { label: "<Footer />", description: "Pied de page avec liens" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 27: APIs REST — Communiquer avec des services externes (6 sections)
  // Templates: flow-diagram, arrow-cycle, code-terminal, shield-lock, progress-path, marketplace-grid
  // ═══════════════════════════════════════════════════════════════
  "apis-rest-communiquer-services-externes": {
    // Section 0: "Qu'est-ce qu'une API ?"
    // → Flow Diagram: requête → serveur → réponse
    0: {
      template: "flow-diagram",
      props: {
        title: "Comment fonctionne une API",
        subtitle: "Le serveur comme un restaurant",
        items: [
          { label: "Ton application", description: "Le client qui commande", icon: "📱" },
          { label: "Requête HTTP", description: "Le serveur note ta commande", icon: "📝" },
          { label: "Serveur API", description: "La cuisine prépare le plat", icon: "🍳" },
          { label: "Réponse JSON", description: "Le plat est servi !", icon: "📦" },
        ],
      },
    },

    // Section 1: "REST : le standard du web"
    // → Arrow Cycle: cycle des méthodes HTTP (GET, POST, PUT, DELETE)
    1: {
      template: "arrow-cycle",
      props: {
        title: "Les 4 verbes REST",
        subtitle: "CRUD — les opérations fondamentales",
        items: [
          { label: "GET", description: "Lire des données", icon: "📖" },
          { label: "POST", description: "Créer une ressource", icon: "➕" },
          { label: "PUT", description: "Modifier une ressource", icon: "✏️" },
          { label: "DELETE", description: "Supprimer une ressource", icon: "🗑️" },
        ],
      },
    },

    // Section 2: "JSON : le langage des APIs"
    // → Code Terminal: exemple de JSON formaté
    2: {
      template: "code-terminal",
      props: {
        title: "Format JSON",
        subtitle: "Le langage universel des APIs",
        items: [
          { label: "$ curl api.exemple.com/users/1", icon: "command" },
          { label: "{", icon: "output" },
          { label: '  "id": 1,', icon: "output" },
          { label: '  "name": "Marie Dupont",', icon: "output" },
          { label: '  "email": "marie@mvp.fr",', icon: "output" },
          { label: '  "plan": "premium"', icon: "output" },
          { label: "}", icon: "output" },
        ],
      },
    },

    // Section 3: "L'authentification des APIs"
    // → Shield Lock: couches de sécurité API
    3: {
      template: "shield-lock",
      props: {
        title: "Sécuriser tes appels API",
        subtitle: "Les méthodes d'authentification",
        items: [
          { label: "API Key", description: "Clé secrète dans le header", icon: "🔑" },
          { label: "Bearer Token", description: "Token JWT temporaire", icon: "🎫" },
          { label: "OAuth 2.0", description: "Login via Google, GitHub...", icon: "🔐" },
          { label: "Rate Limiting", description: "Limiter le nombre de requêtes", icon: "⏱️" },
          { label: "CORS", description: "Contrôler les origines autorisées", icon: "🛡️" },
        ],
      },
    },

    // Section 4: "Appeler une API en pratique"
    // → Progress Path: étapes pour faire un appel API
    4: {
      template: "progress-path",
      props: {
        title: "Ton premier appel API",
        subtitle: "Du code à la réponse",
        items: [
          { label: "Lire la documentation", description: "Comprendre les endpoints disponibles" },
          { label: "Obtenir ta clé API", description: "S'inscrire et copier la clé" },
          { label: "Construire la requête", description: "URL + headers + body" },
          { label: "Envoyer avec fetch()", description: "await fetch(url, options)" },
          { label: "Traiter la réponse", description: "const data = await res.json()" },
        ],
      },
    },

    // Section 5: "Les APIs que tu vas utiliser dans ton MVP"
    // → Marketplace Grid: grille des APIs essentielles
    5: {
      template: "marketplace-grid",
      props: {
        title: "Les APIs de ton MVP",
        subtitle: "L'écosystème à maîtriser",
        items: [
          { label: "Stripe", description: "Paiements sécurisés", icon: "💳" },
          { label: "Resend", description: "Emails transactionnels", icon: "📧" },
          { label: "Cloudinary", description: "Gestion d'images", icon: "🖼️" },
          { label: "Anthropic", description: "IA Claude via API", icon: "🤖" },
          { label: "Vercel", description: "Déploiement & hosting", icon: "▲" },
          { label: "Supabase", description: "Auth + base de données", icon: "⚡" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 28: Webhooks & Automatisations en temps réel (6 sections)
  // Templates: split-transform, convergence-beam, checklist-reveal, brain-network, comparison-grid, radar-chart
  // ═══════════════════════════════════════════════════════════════
  "webhooks-automatisations-temps-reel": {
    // Section 0: "Le problème du polling"
    // → Split Transform: avant (polling) vs après (webhooks)
    0: {
      template: "split-transform",
      props: {
        title: "Polling vs Webhooks",
        subtitle: "Pourquoi le polling est inefficace",
        items: [
          { label: "Polling : ta app demande en boucle", description: "Nouveau ? Nouveau ? Nouveau ? ... 99% de requêtes inutiles" },
          { label: "Webhook : le serveur te prévient", description: "Tu reçois une notification uniquement quand il y a du nouveau" },
          { label: "Gaspillage de ressources", description: "Le polling surcharge serveur et réseau" },
          { label: "Temps réel efficace", description: "Les webhooks = push instantané" },
        ],
      },
    },

    // Section 1: "Comment fonctionne un webhook"
    // → Convergence Beam: événement → webhook → action
    1: {
      template: "convergence-beam",
      props: {
        title: "Anatomie d'un webhook",
        subtitle: "Du déclencheur à l'action",
        items: [
          { label: "Événement", icon: "⚡", description: "Paiement reçu sur Stripe" },
          { label: "POST HTTP", icon: "📨", description: "Stripe envoie les données" },
          { label: "Ton endpoint", icon: "🎯", description: "/api/webhooks/stripe" },
          { label: "Validation", icon: "🔐", description: "Vérifier la signature" },
          { label: "Action", icon: "✅", description: "Activer l'abonnement" },
        ],
      },
    },

    // Section 2: "Les événements courants"
    // → Checklist Reveal: liste des types d'événements webhook
    2: {
      template: "checklist-reveal",
      props: {
        title: "Événements webhook courants",
        subtitle: "Ce qui déclenche un webhook",
        items: [
          { label: "Paiement réussi", description: "Stripe: payment_intent.succeeded", icon: "💳" },
          { label: "Nouvel utilisateur", description: "Auth: user.created", icon: "👤" },
          { label: "Email ouvert", description: "Resend: email.opened", icon: "📧" },
          { label: "Push sur GitHub", description: "GitHub: push event", icon: "🔀" },
          { label: "Formulaire soumis", description: "Form: submission.created", icon: "📝" },
          { label: "Commande passée", description: "Shop: order.completed", icon: "🛒" },
        ],
      },
    },

    // Section 3: "Architecture event-driven"
    // → Brain Network: réseau de services interconnectés par événements
    3: {
      template: "brain-network",
      props: {
        title: "Architecture événementielle",
        subtitle: "Tes services communiquent par événements",
        items: [
          { label: "Stripe", icon: "💳" },
          { label: "Ton API", icon: "🖥️" },
          { label: "Base de données", icon: "💾" },
          { label: "Emails", icon: "📧" },
          { label: "Notifications", icon: "🔔" },
          { label: "Analytics", icon: "📊" },
        ],
      },
    },

    // Section 4: "Les outils d'automatisation no-code"
    // → Comparison Grid: Zapier vs Make vs n8n
    4: {
      template: "comparison-grid",
      props: {
        title: "Outils no-code d'automatisation",
        subtitle: "Automatiser sans écrire de code",
        items: [
          { label: "Zapier", description: "5000+ apps, le plus simple", icon: "⚡" },
          { label: "Make", description: "Visuel et puissant, bon prix", icon: "🔧" },
          { label: "n8n", description: "Open source, auto-hébergeable", icon: "🔗" },
          { label: "OpenClaw", description: "Automatisation IA native", icon: "🤖" },
        ],
      },
    },

    // Section 5: "Quand utiliser quoi"
    // → Radar Chart: score par critère pour chaque approche
    5: {
      template: "radar-chart",
      props: {
        title: "Webhook vs Polling vs No-code",
        subtitle: "Quelle approche selon tes besoins",
        items: [
          { label: "Temps réel", value: 95, description: "Webhook" },
          { label: "Simplicité", value: 90, description: "No-code" },
          { label: "Contrôle", value: 85, description: "Webhook custom" },
          { label: "Scalabilité", value: 80, description: "Event-driven" },
          { label: "Coût", value: 70, description: "Polling" },
          { label: "Fiabilité", value: 88, description: "Webhook + retry" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 29: Bases de données — Stocker et gérer les données (6 sections)
  // Templates: pulsing-orb, comparison-grid (replaced), mind-map, code-terminal, timeline, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "bases-de-donnees-stocker-gerer-donnees": {
    // Section 0: "Pourquoi tu as besoin d'une base de données"
    // → Pulsing Orb: la BDD au centre, les données gravitent autour
    0: {
      template: "pulsing-orb",
      props: {
        title: "La base de données : le coeur de ton app",
        subtitle: "Tout gravite autour de tes données",
        items: [
          { label: "Utilisateurs", icon: "👥", description: "Profils, préférences" },
          { label: "Produits", icon: "📦", description: "Catalogue, prix, stock" },
          { label: "Commandes", icon: "🧾", description: "Historique, statuts" },
          { label: "Paiements", icon: "💳", description: "Transactions, factures" },
          { label: "Contenus", icon: "📝", description: "Articles, médias" },
        ],
      },
    },

    // Section 1: "SQL vs NoSQL"
    // → Split Transform: deux philosophies face à face
    1: {
      template: "split-transform",
      props: {
        title: "SQL vs NoSQL",
        subtitle: "Deux philosophies de stockage",
        items: [
          { label: "SQL : tables structurées", description: "PostgreSQL, MySQL — relations fortes, schéma strict" },
          { label: "NoSQL : documents flexibles", description: "MongoDB, Firebase — schéma libre, scalabilité horizontale" },
          { label: "SQL : idéal pour ton MVP", description: "Données relationnelles, intégrité garantie" },
          { label: "NoSQL : idéal pour le temps réel", description: "Chat, analytics, données imbriquées" },
        ],
      },
    },

    // Section 2: "Le data modeling"
    // → Mind Map: modèle de données d'un MVP type
    2: {
      template: "mind-map",
      props: {
        title: "Modéliser tes données",
        subtitle: "Les relations entre tes tables",
        items: [
          { label: "User", icon: "👤" },
          { label: "Product", icon: "📦" },
          { label: "Order", icon: "🧾" },
          { label: "Payment", icon: "💳" },
          { label: "Review", icon: "⭐" },
          { label: "Category", icon: "🏷️" },
        ],
      },
    },

    // Section 3: "Prisma : l'ORM qui simplifie tout"
    // → Code Terminal: commandes et schéma Prisma
    3: {
      template: "code-terminal",
      props: {
        title: "Prisma ORM",
        subtitle: "Du schéma au code en quelques commandes",
        items: [
          { label: "$ npx prisma init", icon: "command" },
          { label: "model User {", icon: "output" },
          { label: "  id    String  @id @default(cuid())", icon: "output" },
          { label: "  email String  @unique", icon: "output" },
          { label: "  name  String?", icon: "output" },
          { label: "  posts Post[]", icon: "output" },
          { label: "}", icon: "output" },
          { label: "$ npx prisma generate", icon: "command" },
        ],
      },
    },

    // Section 4: "Les migrations"
    // → Timeline: chronologie des versions de la BDD
    4: {
      template: "timeline",
      props: {
        title: "Les migrations de base de données",
        subtitle: "Versionner ton schéma comme ton code",
        items: [
          { label: "V1 : init", description: "Création de la table User", icon: "🏗️" },
          { label: "V2 : products", description: "Ajout de la table Product", icon: "📦" },
          { label: "V3 : orders", description: "Relations User ↔ Product via Order", icon: "🔗" },
          { label: "V4 : payments", description: "Intégration Stripe, table Payment", icon: "💳" },
          { label: "V5 : reviews", description: "Système de notation par étoiles", icon: "⭐" },
        ],
      },
    },

    // Section 5: "Héberger ta base de données"
    // → Counter Stats: comparaison des hébergeurs en chiffres
    5: {
      template: "counter-stats",
      props: {
        title: "Hébergeurs de bases de données",
        subtitle: "Comparaison des offres gratuites",
        items: [
          { label: "Supabase", value: 500, icon: "⚡", description: "MB free" },
          { label: "PlanetScale", value: 5, icon: "🌍", description: "GB free" },
          { label: "Neon", value: 512, icon: "💚", description: "MB free" },
          { label: "Railway", value: 1, icon: "🚂", description: "GB free" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 30: Git & GitHub — Versionner et collaborer (6 sections)
  // Templates: rocket-launch, flow-diagram, concentric-circles, checklist-reveal (replaced), feature-spotlight, chat-bubbles
  // ═══════════════════════════════════════════════════════════════
  "git-github-versionner-collaborer": {
    // Section 0: "Pourquoi Git est indispensable"
    // → Rocket Launch: décollage vers le versionning
    0: {
      template: "rocket-launch",
      props: {
        title: "Git est indispensable",
        subtitle: "Sans Git, tu construis sur du sable",
        items: [
          { label: "Sauvegarder chaque version de ton code" },
          { label: "Revenir en arrière si tu casses quelque chose" },
          { label: "Travailler à plusieurs sans conflits" },
          { label: "Déployer automatiquement avec CI/CD" },
          { label: "Ton code est en sécurité sur GitHub" },
        ],
      },
    },

    // Section 1: "Les concepts fondamentaux de Git"
    // → Flow Diagram: working dir → staging → commit → remote
    1: {
      template: "flow-diagram",
      props: {
        title: "Le workflow Git",
        subtitle: "Les 4 zones à comprendre",
        items: [
          { label: "Working Directory", description: "Tes fichiers en cours d'édition", icon: "📂" },
          { label: "git add", description: "Sélectionner les changements", icon: "➕" },
          { label: "Staging Area", description: "Prêt à être sauvegardé", icon: "📋" },
          { label: "git commit", description: "Créer un point de sauvegarde", icon: "💾" },
          { label: "git push", description: "Envoyer sur GitHub", icon: "☁️" },
        ],
      },
    },

    // Section 2: "GitHub : le hub social du code"
    // → Concentric Circles: couches de l'écosystème GitHub
    2: {
      template: "concentric-circles",
      props: {
        title: "L'écosystème GitHub",
        subtitle: "Bien plus qu'un hébergeur de code",
        items: [
          { label: "Repositories", description: "Ton code versionné" },
          { label: "Issues & PRs", description: "Collaboration et revue" },
          { label: "Actions CI/CD", description: "Automatisation" },
          { label: "Pages & Wiki", description: "Documentation" },
          { label: "Communauté", description: "Open source mondial" },
        ],
      },
    },

    // Section 3: "Le fichier .gitignore"
    // → Nesting Layers: ce qui entre et ce qui reste dehors
    3: {
      template: "nesting-layers",
      props: {
        title: "Le fichier .gitignore",
        subtitle: "Ce que Git doit ignorer",
        items: [
          { label: "node_modules/", description: "Dépendances (trop lourdes)" },
          { label: ".env", description: "Secrets et clés API" },
          { label: ".next/", description: "Fichiers de build" },
          { label: "*.log", description: "Fichiers de log" },
          { label: "dist/", description: "Code compilé" },
        ],
      },
    },

    // Section 4: "Les bonnes pratiques"
    // → Feature Spotlight: focus sur les règles d'or
    4: {
      template: "feature-spotlight",
      props: {
        title: "Les règles d'or de Git",
        subtitle: "Adopte ces habitudes dès maintenant",
        variant: "green",
        items: [
          { label: "Commits atomiques", description: "Un commit = un changement logique", icon: "⚛️" },
          { label: "Messages clairs", description: "feat: ajouter le panier d'achat", icon: "✍️" },
          { label: "Branches par feature", description: "Une branche = une fonctionnalité", icon: "🌿" },
          { label: "Pull avant push", description: "Toujours synchroniser avant d'envoyer", icon: "🔄" },
          { label: "Ne jamais commit .env", description: "Les secrets restent locaux", icon: "🔒" },
        ],
      },
    },

    // Section 5: "Git et Claude Code"
    // → Chat Bubbles: dialogue entre le dev et Claude Code pour Git
    5: {
      template: "chat-bubbles",
      props: {
        title: "Git + Claude Code",
        subtitle: "Claude Code gère Git pour toi",
        items: [
          { label: "Crée un repo Git et fais le premier commit", description: "user" },
          { label: "Repo initialisé ! J'ai créé le .gitignore et le premier commit avec le message 'feat: initial project setup'", description: "assistant" },
          { label: "Ajoute une feature de panier d'achat sur une nouvelle branche", description: "user" },
          { label: "Branche 'feature/shopping-cart' créée. J'ai implémenté le composant CartItem, le contexte CartProvider et les tests.", description: "assistant" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 31: Déploiement — Vercel, Railway, Render (7 sections)
  // Templates: trophy-unlock, model-cards, bar-chart, capability-wheel, token-stream, arrow-cycle, planet-orbit
  // ═══════════════════════════════════════════════════════════════
  "deploiement-vercel-railway-render": {
    // Section 0: "Du code local à l'application en ligne"
    // → Trophy Unlock: étapes de mise en production débloquées
    0: {
      template: "trophy-unlock",
      props: {
        title: "Du local au monde entier",
        subtitle: "Chaque étape te rapproche de la prod",
        items: [
          { label: "Code local", icon: "💻", description: "Ca marche sur ta machine" },
          { label: "Repo GitHub", icon: "📦", description: "Code versionné en ligne" },
          { label: "Build automatique", icon: "🔨", description: "Compilation et tests" },
          { label: "En production !", icon: "🌍", description: "Accessible au monde entier" },
        ],
      },
    },

    // Section 1: "Vercel : la référence pour Next.js"
    // → Model Cards: fonctionnalités Vercel en cartes
    1: {
      template: "model-cards",
      props: {
        title: "Vercel — La référence Next.js",
        subtitle: "Déploiement en un clic",
        items: [
          { label: "Auto-deploy", description: "Push sur main = déploiement auto", icon: "🔄" },
          { label: "Preview URLs", description: "Chaque PR a son URL de test", icon: "👁️" },
          { label: "Edge Functions", description: "Code exécuté au plus près de l'utilisateur", icon: "⚡" },
          { label: "Analytics", description: "Performance et erreurs en temps réel", icon: "📊" },
          { label: "Free tier", description: "Généreux pour les projets perso", icon: "🆓" },
        ],
      },
    },

    // Section 2: "Railway : pour le backend et les bases de données"
    // → Bar Chart: ressources offertes par Railway
    2: {
      template: "bar-chart",
      props: {
        title: "Railway — Backend & Databases",
        subtitle: "Ressources du plan gratuit",
        items: [
          { label: "RAM", value: 512, description: "MB" },
          { label: "CPU", value: 2, description: "vCPUs partagés" },
          { label: "Stockage DB", value: 1, description: "GB PostgreSQL" },
          { label: "Bandwidth", value: 100, description: "GB/mois" },
        ],
      },
    },

    // Section 3: "Render : l'alternative polyvalente"
    // → Capability Wheel: les services Render en roue
    3: {
      template: "capability-wheel",
      props: {
        title: "Render — L'alternative polyvalente",
        subtitle: "Un service pour chaque besoin",
        items: [
          { label: "Web Services", icon: "🌐", description: "Apps Node.js, Python, Go" },
          { label: "Static Sites", icon: "📄", description: "Sites statiques gratuits" },
          { label: "PostgreSQL", icon: "🗄️", description: "Base de données managée" },
          { label: "Cron Jobs", icon: "⏰", description: "Tâches planifiées" },
          { label: "Redis", icon: "🔴", description: "Cache en mémoire" },
          { label: "Docker", icon: "🐳", description: "Conteneurs custom" },
        ],
      },
    },

    // Section 4: "Les variables d'environnement"
    // → Token Stream: clés .env défilant comme un flux
    4: {
      template: "token-stream",
      props: {
        title: "Variables d'environnement",
        subtitle: "Tes secrets ne sont jamais dans le code",
        items: [
          { label: "DATABASE_URL", description: ".env — tes secrets sont ici, jamais dans le repo" },
          { label: "=", },
          { label: "postgres://..." },
          { label: "STRIPE_SECRET_KEY" },
          { label: "=" },
          { label: "sk_live_..." },
          { label: "NEXT_PUBLIC_URL" },
          { label: "=" },
          { label: "https://monapp.fr" },
        ],
      },
    },

    // Section 5: "CI/CD : le déploiement continu"
    // → Arrow Cycle: cycle CI/CD
    5: {
      template: "arrow-cycle",
      props: {
        title: "Pipeline CI/CD",
        subtitle: "Du code à la production automatiquement",
        items: [
          { label: "git push", description: "Tu pousses ton code", icon: "📤" },
          { label: "Build", description: "Compilation automatique", icon: "🔨" },
          { label: "Tests", description: "Vérifications automatiques", icon: "✅" },
          { label: "Deploy", description: "Mise en production", icon: "🚀" },
        ],
      },
    },

    // Section 6: "Le domaine personnalisé"
    // → Planet Orbit: ton domaine au centre, les sous-domaines en orbite
    6: {
      template: "planet-orbit",
      props: {
        title: "Ton domaine personnalisé",
        subtitle: "monapp.fr au lieu de monapp.vercel.app",
        items: [
          { label: "monapp.fr", icon: "🌍" },
          { label: "www.monapp.fr", icon: "🔗" },
          { label: "api.monapp.fr", icon: "⚙️" },
          { label: "docs.monapp.fr", icon: "📚" },
          { label: "app.monapp.fr", icon: "📱" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 32: Sécurité Web & RGPD — Bases indispensables (6 sections)
  // Templates: shield-lock (replaced), hierarchy-tree (replaced), pie-chart, temperature-gauge, hallucination-bubbles, checklist-reveal (replaced)
  // ═══════════════════════════════════════════════════════════════
  "securite-web-rgpd-bases-indispensables": {
    // Section 0: "La sécurité n'est pas optionnelle"
    // → Layered Stack: couches de défense empilées
    0: {
      template: "layered-stack",
      props: {
        title: "La sécurité en couches",
        subtitle: "Chaque couche protège ton application",
        items: [
          { label: "HTTPS", description: "Chiffrement des communications", icon: "🔒" },
          { label: "Authentification", description: "Vérifier l'identité des utilisateurs", icon: "👤" },
          { label: "Autorisation", description: "Contrôler les accès aux ressources", icon: "🛡️" },
          { label: "Validation", description: "Filtrer toutes les entrées utilisateur", icon: "🔍" },
          { label: "Monitoring", description: "Surveiller et alerter en temps réel", icon: "📡" },
        ],
      },
    },

    // Section 1: "HTTPS : la base absolue"
    // → Flow Diagram: handshake TLS/SSL
    1: {
      template: "flow-diagram",
      props: {
        title: "HTTPS : le chiffrement en action",
        subtitle: "Comment tes données sont protégées",
        items: [
          { label: "Navigateur", description: "Demande une connexion sécurisée", icon: "🌐" },
          { label: "Certificat SSL", description: "Le serveur prouve son identité", icon: "📜" },
          { label: "Clé de session", description: "Échange de clés chiffrées", icon: "🔑" },
          { label: "Tunnel sécurisé", description: "Données chiffrées de bout en bout", icon: "🔒" },
        ],
      },
    },

    // Section 2: "L'authentification"
    // → Pie Chart: répartition des méthodes d'auth
    2: {
      template: "pie-chart",
      props: {
        title: "Méthodes d'authentification",
        subtitle: "Répartition dans les apps modernes",
        items: [
          { label: "OAuth (Google, GitHub)", value: 40, icon: "🔐" },
          { label: "Email + mot de passe", value: 25, icon: "📧" },
          { label: "Magic Link", value: 20, icon: "✨" },
          { label: "Passkeys / WebAuthn", value: 10, icon: "🔑" },
          { label: "SMS / 2FA", value: 5, icon: "📱" },
        ],
      },
    },

    // Section 3: "L'autorisation"
    // → Temperature Gauge: niveaux d'accès du plus bas au plus élevé
    3: {
      template: "temperature-gauge",
      props: {
        title: "Niveaux d'autorisation",
        subtitle: "Du visiteur à l'admin",
        items: [
          { label: "Visiteur", value: 0.1, description: "Pages publiques uniquement" },
          { label: "Utilisateur free", value: 0.35, description: "Fonctionnalités de base" },
          { label: "Utilisateur premium", value: 0.65, description: "Toutes les fonctionnalités" },
          { label: "Admin", value: 1.0, description: "Accès total + gestion" },
        ],
      },
    },

    // Section 4: "Les vulnérabilités courantes"
    // → Hallucination Bubbles: vraies menaces vs fausses croyances
    4: {
      template: "hallucination-bubbles",
      props: {
        title: "Menaces réelles vs mythes",
        subtitle: "Connais les vraies vulnérabilités",
        items: [
          { label: "XSS : injection de scripts malveillants", description: "real" },
          { label: "SQL Injection : accès non autorisé à la BDD", description: "real" },
          { label: "CSRF : actions forcées sur un utilisateur connecté", description: "real" },
          { label: "Un mot de passe fort suffit à tout protéger", description: "myth" },
          { label: "Les petits sites ne sont jamais attaqués", description: "myth" },
          { label: "HTTPS rend un site 100% sécurisé", description: "myth" },
        ],
      },
    },

    // Section 5: "Le RGPD : tes obligations légales"
    // → Checklist Reveal: obligations RGPD à respecter
    5: {
      template: "checklist-reveal",
      props: {
        title: "Tes obligations RGPD",
        subtitle: "La loi européenne sur les données personnelles",
        items: [
          { label: "Consentement explicite", description: "Demander avant de collecter", icon: "✋" },
          { label: "Droit d'accès", description: "L'utilisateur peut voir ses données", icon: "👁️" },
          { label: "Droit à l'effacement", description: "Supprimer sur demande", icon: "🗑️" },
          { label: "Notification de fuite", description: "72h pour prévenir la CNIL", icon: "🚨" },
          { label: "Privacy by Design", description: "Intégrer la vie privée dès la conception", icon: "🏗️" },
          { label: "Registre de traitements", description: "Documenter l'usage des données", icon: "📋" },
        ],
      },
    },
  },
};
