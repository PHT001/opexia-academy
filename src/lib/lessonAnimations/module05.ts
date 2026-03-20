import type { AllLessonAnimations } from "./types";

export const module05: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 20: Architecture Skills OpenClaw & ClawHub (6 sections)
  // Templates: pulsing-orb, hierarchy-tree, marketplace-grid, pie-chart, bar-chart, trophy-unlock
  // ═══════════════════════════════════════════════════════════════
  "architecture-skills-openclaw-clawhub": {
    // Section 0: "Les Skills OpenClaw"
    // → Pulsing Orb: noyau OpenClaw entouré des capacités des skills
    0: {
      template: "pulsing-orb",
      props: {
        title: "Les Skills OpenClaw",
        subtitle: "Des extensions intelligentes pour ton agent",
        items: [
          { label: "OpenClaw Core", icon: "🧠" },
          { label: "Automatisation", icon: "⚡" },
          { label: "Intégrations", icon: "🔌" },
          { label: "Monitoring", icon: "📡" },
          { label: "Communication", icon: "💬" },
          { label: "Analyse", icon: "📊" },
        ],
      },
    },

    // Section 1: "Structure d'une Skill OpenClaw"
    // → Hierarchy Tree: arborescence fichiers d'une skill
    1: {
      template: "hierarchy-tree",
      props: {
        title: "Structure d'une Skill",
        subtitle: "Anatomie d'un projet skill",
        items: [
          { label: "my-skill/", icon: "📁" },
          { label: "manifest.json", icon: "📋" },
          { label: "handlers/", icon: "⚙️" },
          { label: "prompts/", icon: "💬" },
          { label: "config/", icon: "🔧" },
          { label: "tests/", icon: "✅" },
        ],
      },
    },

    // Section 2: "ClawHub : le marketplace"
    // → Marketplace Grid: grille de catégories du marketplace
    2: {
      template: "marketplace-grid",
      props: {
        title: "ClawHub Marketplace",
        subtitle: "L'app store des agents IA",
        items: [
          { label: "Productivité", icon: "⚡", value: 342 },
          { label: "Marketing", icon: "📣", value: 218 },
          { label: "Dev Tools", icon: "🔧", value: 185 },
          { label: "Analytics", icon: "📊", value: 156 },
          { label: "Support client", icon: "💬", value: 129 },
          { label: "Finance", icon: "💰", value: 97 },
        ],
      },
    },

    // Section 3: "Catégories populaires sur ClawHub"
    // → Pie Chart: répartition des catégories populaires
    3: {
      template: "pie-chart",
      props: {
        title: "Catégories populaires",
        subtitle: "Répartition des skills sur ClawHub",
        items: [
          { label: "Productivité", value: 30 },
          { label: "Marketing", value: 22 },
          { label: "DevOps", value: 18 },
          { label: "Data & Analytics", value: 15 },
          { label: "Communication", value: 10 },
          { label: "Autres", value: 5 },
        ],
      },
    },

    // Section 4: "Modèle économique des Skills"
    // → Bar Chart: revenus mensuels potentiels par nombre de skills
    4: {
      template: "bar-chart",
      props: {
        title: "Modèle économique",
        subtitle: "Revenus mensuels potentiels (€)",
        items: [
          { label: "1 Skill", value: 200 },
          { label: "3 Skills", value: 750 },
          { label: "5 Skills", value: 1500 },
          { label: "10 Skills", value: 4000 },
          { label: "20 Skills", value: 10000 },
        ],
      },
    },

    // Section 5: "Pourquoi créer des skills est une opportunité en or"
    // → Trophy Unlock: badges d'opportunités débloqués
    5: {
      template: "trophy-unlock",
      props: {
        title: "Une opportunité en or",
        subtitle: "Pourquoi tu dois te lancer maintenant",
        items: [
          { label: "Marché naissant", icon: "🌱", description: "Peu de concurrence, forte demande" },
          { label: "Revenus passifs", icon: "💰", description: "Vends pendant que tu dors" },
          { label: "Expertise valorisée", icon: "🎓", description: "Deviens référence dans ta niche" },
          { label: "Scalabilité infinie", icon: "📈", description: "Aucun coût marginal de distribution" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 21: Skill Briefing Gmail Automatisé (6 sections)
  // Templates: flow-diagram, code-terminal, gear-system, chat-bubbles, browser-mockup, arrow-cycle
  // ═══════════════════════════════════════════════════════════════
  "skill-briefing-gmail-automatise": {
    // Section 0: "Le projet : Gmail Daily Briefing"
    // → Flow Diagram: pipeline complet du briefing Gmail
    0: {
      template: "flow-diagram",
      props: {
        title: "Gmail Daily Briefing",
        subtitle: "Le flux complet de la skill",
        items: [
          { label: "📧 Gmail API", description: "Récupération des emails du jour" },
          { label: "🤖 Catégorisation IA", description: "Tri automatique par importance" },
          { label: "⚡ Priorisation", description: "Score d'urgence par email" },
          { label: "📋 Briefing", description: "Résumé structuré envoyé" },
        ],
      },
    },

    // Section 1: "Étape 1 : Le manifest"
    // → Code Terminal: contenu du manifest.json
    1: {
      template: "code-terminal",
      props: {
        title: "manifest.json",
        subtitle: "La carte d'identité de ta skill",
        items: [
          { label: "$ cat manifest.json", icon: "command" },
          { label: "{", icon: "output" },
          { label: '  "name": "gmail-daily-briefing",', icon: "output" },
          { label: '  "version": "1.0.0",', icon: "output" },
          { label: '  "permissions": ["gmail.read"],', icon: "output" },
          { label: '  "trigger": "cron:08:00"', icon: "output" },
          { label: "}", icon: "output" },
        ],
      },
    },

    // Section 2: "Étape 2 : La logique principale"
    // → Gear System: engrenages de la logique métier
    2: {
      template: "gear-system",
      props: {
        title: "Logique principale",
        subtitle: "Les rouages de la skill",
        items: [
          { label: "Fetch emails" },
          { label: "Filtrer & trier" },
          { label: "Catégoriser" },
          { label: "Générer briefing" },
        ],
      },
    },

    // Section 3: "Étape 3 : Le prompt de catégorisation"
    // → Chat Bubbles: échange IA pour catégoriser un email
    3: {
      template: "chat-bubbles",
      props: {
        title: "Prompt de catégorisation",
        subtitle: "L'IA classe chaque email",
        items: [
          { label: "Catégorise cet email : 'Facture impayée - Relance urgente'" },
          { label: "Catégorie : URGENT | Priorité : 🔴 Haute | Action : Répondre sous 24h" },
          { label: "Et celui-ci : 'Newsletter hebdo - Top 10 outils IA'" },
          { label: "Catégorie : INFO | Priorité : 🟢 Basse | Action : Lecture optionnelle" },
        ],
      },
    },

    // Section 4: "Étape 4 : Le format du briefing"
    // → Browser Mockup: aperçu du briefing quotidien
    4: {
      template: "browser-mockup",
      props: {
        title: "Format du briefing",
        subtitle: "Ce que tu reçois chaque matin",
        items: [
          { label: "📧 Briefing du 15 mars 2025", icon: "📋" },
          { label: "🔴 3 emails urgents", icon: "🚨" },
          { label: "🟡 7 emails importants", icon: "⚠️" },
          { label: "🟢 12 emails informatifs", icon: "ℹ️" },
          { label: "⏱️ Temps de lecture estimé : 4 min", icon: "⏰" },
        ],
      },
    },

    // Section 5: "Étape 5 : Test et raffinement"
    // → Arrow Cycle: boucle de test et amélioration
    5: {
      template: "arrow-cycle",
      props: {
        title: "Test et raffinement",
        subtitle: "Itération jusqu'à la perfection",
        items: [
          { label: "Tester", description: "Lancer la skill en mode test" },
          { label: "Vérifier", description: "Comparer briefing vs réalité" },
          { label: "Ajuster", description: "Affiner les seuils et le prompt" },
          { label: "Valider", description: "Confirmer la qualité du résultat" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 22: Skill Workflow Notion (6 sections)
  // Templates: convergence-beam, checklist-reveal, shield-lock, layered-stack, wireframe-builder, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "skill-workflow-notion": {
    // Section 0: "Notion + OpenClaw = Productivité x10"
    // → Convergence Beam: Notion et OpenClaw convergent vers la super-productivité
    0: {
      template: "convergence-beam",
      props: {
        title: "Notion + OpenClaw",
        subtitle: "La fusion qui décuple ta productivité",
        items: [
          { label: "Notion", icon: "📝", description: "Organisation" },
          { label: "OpenClaw", icon: "🤖", description: "Automatisation" },
          { label: "API Notion", icon: "🔌", description: "Connexion" },
          { label: "Templates", icon: "📄", description: "Modèles" },
          { label: "Productivité x10", icon: "🚀", description: "Résultat" },
        ],
      },
    },

    // Section 1: "Cas d'usage de la skill"
    // → Checklist Reveal: liste des fonctionnalités de la skill
    1: {
      template: "checklist-reveal",
      props: {
        title: "Cas d'usage",
        subtitle: "Ce que ta skill Notion peut faire",
        items: [
          { label: "Créer des pages projet automatiquement" },
          { label: "Mettre à jour le statut des tâches" },
          { label: "Générer des comptes-rendus de réunion" },
          { label: "Remplir les bases de données Notion" },
          { label: "Envoyer des rappels depuis Notion" },
          { label: "Créer des rapports hebdomadaires" },
        ],
      },
    },

    // Section 2: "Connexion à l'API Notion"
    // → Shield Lock: sécurisation de la connexion API
    2: {
      template: "shield-lock",
      props: {
        title: "Connexion API Notion",
        subtitle: "Authentification sécurisée",
        items: [
          { label: "Créer une intégration Notion" },
          { label: "Récupérer le token secret" },
          { label: "Configurer les permissions" },
          { label: "Partager les pages avec l'intégration" },
          { label: "Tester la connexion" },
        ],
      },
    },

    // Section 3: "Structure de la skill"
    // → Layered Stack: couches de la skill empilées
    3: {
      template: "layered-stack",
      props: {
        title: "Structure de la skill",
        subtitle: "Les couches du projet",
        items: [
          { label: "manifest.json", description: "Configuration et métadonnées", icon: "📋" },
          { label: "notion-client.js", description: "Connexion et authentification API", icon: "🔌" },
          { label: "handlers/", description: "Logique métier par action", icon: "⚙️" },
          { label: "templates/", description: "Modèles de pages Notion", icon: "📄" },
          { label: "prompts/", description: "Instructions IA pour le contenu", icon: "🤖" },
        ],
      },
    },

    // Section 4: "Le template de page projet"
    // → Wireframe Builder: structure visuelle d'une page projet Notion
    4: {
      template: "wireframe-builder",
      props: {
        title: "Template de page projet",
        subtitle: "Structure auto-générée dans Notion",
        items: [
          { label: "Titre du projet + Statut" },
          { label: "Objectifs et KPIs" },
          { label: "Tableau des tâches" },
          { label: "Timeline et échéances" },
          { label: "Notes et décisions" },
        ],
      },
    },

    // Section 5: "Automatisation du reporting"
    // → Counter Stats: métriques du reporting automatisé
    5: {
      template: "counter-stats",
      props: {
        title: "Reporting automatisé",
        subtitle: "Résultats mesurables",
        items: [
          { label: "Temps gagné / semaine", value: 5, icon: "⏱️", description: "heures" },
          { label: "Rapports auto-générés", value: 4, icon: "📊", description: "/ semaine" },
          { label: "Tâches synchronisées", value: 50, icon: "✅", description: "/ jour" },
          { label: "Erreurs humaines évitées", value: 95, icon: "🎯", description: "%" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 23: Skill Monitoring GitHub (6 sections)
  // Templates: mind-map, feature-spotlight, code-terminal, temperature-gauge, timeline, rocket-launch
  // ═══════════════════════════════════════════════════════════════
  "skill-monitoring-github": {
    // Section 0: "Pourquoi monitorer GitHub ?"
    // → Mind Map: raisons de surveiller GitHub au centre
    0: {
      template: "mind-map",
      props: {
        title: "Pourquoi monitorer GitHub ?",
        subtitle: "Ne rate plus rien sur tes repos",
        items: [
          { label: "Monitoring", icon: "👁️" },
          { label: "Bugs critiques", icon: "🐛" },
          { label: "Sécurité", icon: "🔒" },
          { label: "PRs en attente", icon: "⏳" },
          { label: "Dépendances", icon: "📦" },
          { label: "Performance", icon: "📈" },
        ],
      },
    },

    // Section 1: "Ce que la skill fait"
    // → Feature Spotlight: focus sur chaque fonctionnalité
    1: {
      template: "feature-spotlight",
      props: {
        title: "Ce que la skill fait",
        subtitle: "Surveillance intelligente de tes repos",
        items: [
          { label: "GitHub Monitor", icon: "🔍" },
          { label: "Surveille les commits", description: "Chaque push analysé en temps réel", icon: "📝" },
          { label: "Détecte les issues critiques", description: "Alerte immédiate sur les bugs P0", icon: "🚨" },
          { label: "Analyse les PRs", description: "Review automatique du code soumis", icon: "🔀" },
          { label: "Résumé quotidien", description: "Un briefing chaque matin à 9h", icon: "📋" },
        ],
      },
    },

    // Section 2: "Configuration"
    // → Code Terminal: configuration de la skill
    2: {
      template: "code-terminal",
      props: {
        title: "Configuration",
        subtitle: "Setup en quelques commandes",
        items: [
          { label: "$ openclaw skill init github-monitor", icon: "command" },
          { label: "Skill créée ✓", icon: "output" },
          { label: "$ export GITHUB_TOKEN=ghp_xxxxx", icon: "command" },
          { label: "Token configuré ✓", icon: "output" },
          { label: '$ openclaw config set repos "org/repo1,org/repo2"', icon: "command" },
          { label: "2 repositories ajoutés ✓", icon: "output" },
        ],
      },
    },

    // Section 3: "Niveaux d'alerte"
    // → Temperature Gauge: thermomètre des niveaux d'alerte
    3: {
      template: "temperature-gauge",
      props: {
        title: "Niveaux d'alerte",
        subtitle: "Gravité croissante des événements",
        items: [
          { label: "Info", value: 0.2, description: "Commits, commentaires, merges" },
          { label: "Warning", value: 0.5, description: "Issues ouvertes, PRs en retard" },
          { label: "Élevé", value: 0.75, description: "Tests échoués, conflits de merge" },
          { label: "Critique", value: 1.0, description: "Failles sécurité, downtime, data loss" },
        ],
      },
    },

    // Section 4: "Le briefing quotidien GitHub"
    // → Timeline: déroulé chronologique du briefing journalier
    4: {
      template: "timeline",
      props: {
        title: "Briefing quotidien GitHub",
        subtitle: "Ce que tu reçois chaque matin",
        items: [
          { label: "09:00", description: "Résumé des commits de la nuit", icon: "📝" },
          { label: "09:01", description: "Issues créées et fermées (24h)", icon: "🎫" },
          { label: "09:02", description: "PRs en attente de review", icon: "🔀" },
          { label: "09:03", description: "Alertes sécurité Dependabot", icon: "🔒" },
          { label: "09:04", description: "Métriques CI/CD du jour", icon: "📊" },
        ],
      },
    },

    // Section 5: "Actions automatiques"
    // → Rocket Launch: séquence d'actions automatiques déclenchées
    5: {
      template: "rocket-launch",
      props: {
        title: "Actions automatiques",
        subtitle: "La skill agit pour toi",
        items: [
          { label: "Détection d'un événement" },
          { label: "Analyse du contexte par l'IA" },
          { label: "Décision : alerter ou agir" },
          { label: "Notification ou action automatique" },
          { label: "Log et rapport enregistré" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 24: Agent Communication Protocol (6 sections)
  // Templates: split-transform, planet-orbit, brain-network, comparison-grid, arrow-cycle, radar-chart
  // ═══════════════════════════════════════════════════════════════
  "agent-communication-protocol": {
    // Section 0: "Du solo au système"
    // → Split Transform: avant/après passage au multi-agents
    0: {
      template: "split-transform",
      props: {
        title: "Du solo au système",
        subtitle: "L'évolution vers le multi-agents",
        items: [
          { label: "1 agent seul", description: "Fait tout, mais limité en scope" },
          { label: "Système multi-agents", description: "Spécialisés, coordonnés, scalables" },
          { label: "Tâches séquentielles", description: "Une chose à la fois, lent" },
          { label: "Tâches parallèles", description: "Tout en simultané, rapide" },
        ],
      },
    },

    // Section 1: "Comment ça marche"
    // → Planet Orbit: agents en orbite autour de l'orchestrateur
    1: {
      template: "planet-orbit",
      props: {
        title: "Comment ça marche",
        subtitle: "L'orchestrateur au centre du système",
        items: [
          { label: "Orchestrateur", icon: "🎯" },
          { label: "Agent Veille", icon: "👁️" },
          { label: "Agent Email", icon: "📧" },
          { label: "Agent Contenu", icon: "✍️" },
          { label: "Agent Data", icon: "📊" },
        ],
      },
    },

    // Section 2: "Architecture multi-agents typique"
    // → Brain Network: réseau neuronal des agents interconnectés
    2: {
      template: "brain-network",
      props: {
        title: "Architecture multi-agents",
        subtitle: "Un réseau intelligent et connecté",
        items: [
          { label: "Orchestrateur" },
          { label: "Agent Veille" },
          { label: "Agent Email" },
          { label: "Agent Contenu" },
          { label: "Agent Report" },
          { label: "Agent Support" },
        ],
      },
    },

    // Section 3: "Configuration de la communication"
    // → Comparison Grid: protocoles de communication comparés
    3: {
      template: "comparison-grid",
      props: {
        title: "Protocoles de communication",
        subtitle: "Comment les agents se parlent",
        items: [
          { label: "Messages directs", description: "Agent à agent, rapide", icon: "💬" },
          { label: "Event bus", description: "Pub/sub, découplé", icon: "📡" },
          { label: "Queue de tâches", description: "File d'attente ordonnée", icon: "📋" },
          { label: "Mémoire partagée", description: "Contexte commun", icon: "🧠" },
        ],
      },
    },

    // Section 4: "Patterns de communication"
    // → Arrow Cycle: cycle de communication entre agents
    4: {
      template: "arrow-cycle",
      props: {
        title: "Patterns de communication",
        subtitle: "Les flux d'échange entre agents",
        items: [
          { label: "Request", description: "L'orchestrateur envoie une tâche" },
          { label: "Process", description: "L'agent spécialisé exécute" },
          { label: "Respond", description: "Le résultat est renvoyé" },
          { label: "Validate", description: "L'orchestrateur vérifie et décide" },
        ],
      },
    },

    // Section 5: "Coût d'un système multi-agents"
    // → Radar Chart: analyse des coûts par dimension
    5: {
      template: "radar-chart",
      props: {
        title: "Coût d'un système multi-agents",
        subtitle: "Analyse des facteurs de coût",
        items: [
          { label: "Tokens API", value: 85 },
          { label: "Hébergement", value: 40 },
          { label: "Maintenance", value: 55 },
          { label: "Développement", value: 70 },
          { label: "Monitoring", value: 30 },
          { label: "Scalabilité", value: 60 },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 25: Publier et Vendre des Skills sur ClawHub (6 sections)
  // Templates: progress-path, concentric-circles, model-cards, sliding-window, capability-wheel, token-stream
  // ═══════════════════════════════════════════════════════════════
  "publier-vendre-skills-clawhub": {
    // Section 0: "De créateur à vendeur"
    // → Progress Path: parcours de créateur à vendeur de skills
    0: {
      template: "progress-path",
      props: {
        title: "De créateur à vendeur",
        subtitle: "Ton parcours vers la monétisation",
        items: [
          { label: "Apprendre OpenClaw", description: "Maîtriser les fondamentaux" },
          { label: "Créer ta première skill", description: "Un projet qui résout un vrai problème" },
          { label: "Tester et documenter", description: "Qualité professionnelle" },
          { label: "Publier sur ClawHub", description: "Rendre accessible au monde" },
          { label: "Générer des revenus", description: "Monétiser ton expertise" },
        ],
      },
    },

    // Section 1: "Préparer ta skill pour la publication"
    // → Concentric Circles: couches de qualité pour la publication
    1: {
      template: "concentric-circles",
      props: {
        title: "Préparer ta skill",
        subtitle: "Les couches de qualité requises",
        items: [
          { label: "Code testé et stable" },
          { label: "Documentation complète" },
          { label: "README attractif" },
          { label: "Screenshots et démo" },
        ],
      },
    },

    // Section 2: "La page de vente de ta skill"
    // → Model Cards: éléments clés d'une page de vente
    2: {
      template: "model-cards",
      props: {
        title: "Page de vente",
        subtitle: "Les éléments qui convertissent",
        items: [
          { label: "Titre accrocheur", description: "Résout le problème en une phrase", icon: "✨" },
          { label: "Démo vidéo", description: "Montre la skill en action", icon: "🎬" },
          { label: "Cas d'usage", description: "Scénarios concrets d'utilisation", icon: "💡" },
          { label: "Témoignages", description: "Avis des premiers utilisateurs", icon: "⭐" },
          { label: "Pricing clair", description: "Transparence sur les coûts", icon: "💰" },
        ],
      },
    },

    // Section 3: "Stratégies de pricing"
    // → Sliding Window: comparaison des modèles de prix
    3: {
      template: "sliding-window",
      props: {
        title: "Stratégies de pricing",
        subtitle: "Revenus mensuels par modèle (€)",
        items: [
          { label: "Freemium (gratuit + premium)", value: 500 },
          { label: "One-time (achat unique 29€)", value: 870 },
          { label: "Abonnement (9€/mois)", value: 1800 },
          { label: "Usage-based (0.01€/appel)", value: 2500 },
        ],
      },
    },

    // Section 4: "Maximiser les ventes"
    // → Capability Wheel: leviers pour maximiser les ventes
    4: {
      template: "capability-wheel",
      props: {
        title: "Maximiser les ventes",
        subtitle: "Les leviers de croissance",
        items: [
          { label: "SEO ClawHub", icon: "🔍" },
          { label: "Contenu gratuit", icon: "📝" },
          { label: "Communauté", icon: "👥" },
          { label: "Mises à jour", icon: "🔄" },
          { label: "Support réactif", icon: "💬" },
          { label: "Partenariats", icon: "🤝" },
        ],
      },
    },

    // Section 5: "Processus de publication"
    // → Token Stream: étapes de soumission défilantes
    5: {
      template: "token-stream",
      props: {
        title: "Processus de publication",
        subtitle: "De ton code au ClawHub",
        items: [
          { label: "openclaw", description: "openclaw publish --name gmail-briefing --version 1.0.0 → Publishing..." },
          { label: " publish" },
          { label: " →" },
          { label: " Validation" },
          { label: " ✓" },
          { label: " Review" },
          { label: " ✓" },
          { label: " Live" },
          { label: " 🚀" },
        ],
      },
    },
  },
};
