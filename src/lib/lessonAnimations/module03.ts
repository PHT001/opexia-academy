import type { AllLessonAnimations } from "./types";

export const module03: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 14: OpenClaw — Introduction à la révolution (6 sections)
  // Templates: split-transform, brain-network, convergence-beam, planet-orbit, capability-wheel, marketplace-grid
  // ═══════════════════════════════════════════════════════════════
  "openclaw-introduction-revolution": {
    // Section 0: "OpenClaw n'est PAS un chatbot"
    // → Split Transform: avant/après — chatbot classique vs agent IA persistant
    0: {
      template: "split-transform",
      props: {
        title: "OpenClaw ≠ Chatbot",
        subtitle: "Un agent IA autonome et persistant",
        items: [
          { label: "Chatbot classique", description: "Répond aux questions, oublie tout après", icon: "💬" },
          { label: "Agent OpenClaw", description: "Agit, se souvient, apprend en continu", icon: "🤖" },
          { label: "Réactif seulement", description: "Attend tes messages pour répondre", icon: "⏳" },
          { label: "Proactif & autonome", description: "Exécute des tâches sans intervention", icon: "⚡" },
        ],
      },
    },

    // Section 1: "La mémoire persistante"
    // → Brain Network: réseau de souvenirs interconnectés dans la mémoire de l'agent
    1: {
      template: "brain-network",
      props: {
        title: "La mémoire persistante",
        subtitle: "Il se souvient de tout, pour toujours",
        items: [
          { label: "Mémoire", icon: "🧠" },
          { label: "Ton nom", icon: "👤" },
          { label: "Tes préférences", icon: "⭐" },
          { label: "Tes clients", icon: "👥" },
          { label: "Ton business", icon: "💼" },
          { label: "Tes instructions", icon: "📋" },
        ],
      },
    },

    // Section 2: "Pourquoi ça change la donne"
    // → Convergence Beam: facteurs qui convergent vers la révolution OpenClaw
    2: {
      template: "convergence-beam",
      props: {
        title: "Pourquoi ça change la donne",
        subtitle: "Tout converge vers l'agent IA personnel",
        items: [
          { label: "Mémoire infinie", icon: "🧠", description: "Révolution" },
          { label: "Multi-canal", icon: "📡" },
          { label: "Open Source", icon: "🔓" },
          { label: "Gratuit", icon: "💸" },
          { label: "Personnalisable", icon: "🎨" },
          { label: "24/7 autonome", icon: "⏰" },
        ],
      },
    },

    // Section 3: "L'écosystème OpenClaw"
    // → Planet Orbit: composants orbitant autour du noyau OpenClaw
    3: {
      template: "planet-orbit",
      props: {
        title: "L'écosystème OpenClaw",
        subtitle: "Un univers de possibilités",
        items: [
          { label: "Core Agent", icon: "🤖" },
          { label: "ClawHub", icon: "🏪" },
          { label: "Skills", icon: "⚡" },
          { label: "Mémoire", icon: "🧠" },
          { label: "Multi-canal", icon: "📡" },
          { label: "API", icon: "🔌" },
        ],
      },
    },

    // Section 4: "Ce que tu peux faire avec OpenClaw"
    // → Capability Wheel: roue des capacités de l'agent
    4: {
      template: "capability-wheel",
      props: {
        title: "Ce que tu peux faire avec OpenClaw",
        subtitle: "Les possibilités sont infinies",
        items: [
          { label: "Assistant 24/7", icon: "🌙" },
          { label: "Emails auto", icon: "📧" },
          { label: "Veille marché", icon: "📊" },
          { label: "Support client", icon: "🎧" },
          { label: "Contenu", icon: "✍️" },
          { label: "Planification", icon: "📅" },
        ],
      },
    },

    // Section 5: "Le marché est grand ouvert"
    // → Marketplace Grid: grille d'opportunités de marché
    5: {
      template: "marketplace-grid",
      props: {
        title: "Le marché est grand ouvert",
        subtitle: "Moins de 1% des PME utilisent un agent IA",
        items: [
          { label: "Freelances", icon: "💻", description: "Automatiser la prospection" },
          { label: "E-commerce", icon: "🛒", description: "Support client 24/7" },
          { label: "Coaching", icon: "🎯", description: "Suivi automatisé" },
          { label: "Agences", icon: "🏢", description: "Scaling des services" },
          { label: "SaaS", icon: "☁️", description: "Onboarding intelligent" },
          { label: "Immobilier", icon: "🏠", description: "Gestion locative IA" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 15: OpenClaw — Installation sur ton ordinateur (6 sections)
  // Templates: checklist-reveal, rocket-launch, code-terminal, gear-system, progress-path, hallucination-bubbles
  // ═══════════════════════════════════════════════════════════════
  "openclaw-installation-ordinateur": {
    // Section 0: "Pré-requis"
    // → Checklist Reveal: liste des pré-requis à cocher avant installation
    0: {
      template: "checklist-reveal",
      props: {
        title: "Pré-requis d'installation",
        subtitle: "Vérifie avant de commencer",
        items: [
          { label: "Ordinateur (Windows, Mac ou Linux)", icon: "💻" },
          { label: "Connexion Internet stable", icon: "🌐" },
          { label: "Node.js v18+ installé", icon: "🟢" },
          { label: "Terminal / ligne de commande", icon: "⌨️" },
          { label: "Compte GitHub (recommandé)", icon: "🐙" },
          { label: "10 minutes de temps libre", icon: "⏱️" },
        ],
      },
    },

    // Section 1: "Installation en un clic"
    // → Rocket Launch: séquence de décollage de l'installation rapide
    1: {
      template: "rocket-launch",
      props: {
        title: "Installation en un clic",
        subtitle: "La méthode la plus simple",
        items: [
          { label: "Ouvrir le terminal" },
          { label: "Coller la commande" },
          { label: "Installation automatique..." },
          { label: "OpenClaw est prêt ! 🚀" },
        ],
      },
    },

    // Section 2: "Installation manuelle"
    // → Code Terminal: commandes pas à pas dans le terminal
    2: {
      template: "code-terminal",
      props: {
        title: "Installation manuelle",
        subtitle: "Étape par étape dans le terminal",
        items: [
          { label: "git clone https://github.com/openclaw/openclaw.git", icon: "command" },
          { label: "Cloning into 'openclaw'... done.", icon: "output" },
          { label: "cd openclaw && npm install", icon: "command" },
          { label: "added 247 packages in 12s", icon: "output" },
          { label: "npm run setup", icon: "command" },
          { label: "OpenClaw setup complete ✓", icon: "output" },
        ],
      },
    },

    // Section 3: "Configuration initiale"
    // → Gear System: engrenages de la configuration qui s'emboîtent
    3: {
      template: "gear-system",
      props: {
        title: "Configuration initiale",
        subtitle: "Les réglages essentiels",
        items: [
          { label: "Clé API (LLM)", description: "Claude, GPT ou Mistral" },
          { label: "Langue par défaut", description: "Français" },
          { label: "Nom de l'agent", description: "Ton assistant perso" },
          { label: "Fuseau horaire", description: "Europe/Paris" },
          { label: "Dossier mémoire", description: "Stockage local" },
        ],
      },
    },

    // Section 4: "Vérifier que tout marche"
    // → Progress Path: chemin de vérification avec checkpoints
    4: {
      template: "progress-path",
      props: {
        title: "Vérification complète",
        subtitle: "Tout doit être au vert",
        items: [
          { label: "openclaw --version", description: "→ v2.1.0 ✓" },
          { label: "openclaw status", description: "→ Agent Running ✓" },
          { label: "openclaw test", description: "→ All 12 checks passed ✓" },
          { label: "openclaw ping", description: "→ LLM connected (42ms) ✓" },
          { label: "Dashboard localhost:8080", description: "→ Interface accessible ✓" },
        ],
      },
    },

    // Section 5: "Troubleshooting courant"
    // → Hallucination Bubbles: problèmes courants (vrais) vs faux problèmes
    5: {
      template: "hallucination-bubbles",
      props: {
        title: "Problèmes courants & solutions",
        subtitle: "Ne panique pas, c'est normal",
        items: [
          { label: "Port 8080 déjà utilisé → changer le port" },
          { label: "Node.js trop ancien → mettre à jour en v18+" },
          { label: "Clé API invalide → vérifier copier-coller" },
          { label: "Permission refusée → lancer en sudo/admin" },
          { label: "Bug impossible à résoudre → réinstaller" },
          { label: "Tout réinstaller Windows → jamais nécessaire" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 16: OpenClaw — Connecter les canaux (6 sections)
  // Templates: mind-map, flow-diagram, chat-bubbles, browser-mockup, concentric-circles, comparison-grid
  // ═══════════════════════════════════════════════════════════════
  "openclaw-connecter-canaux": {
    // Section 0: "Multi-canal = Multi-usage"
    // → Mind Map: l'agent au centre connecté à tous les canaux
    0: {
      template: "mind-map",
      props: {
        title: "Multi-canal = Multi-usage",
        subtitle: "Un agent, tous les canaux",
        items: [
          { label: "OpenClaw", icon: "🤖" },
          { label: "Telegram", icon: "✈️" },
          { label: "WhatsApp", icon: "💬" },
          { label: "Discord", icon: "🎮" },
          { label: "Email", icon: "📧" },
          { label: "SMS", icon: "📱" },
        ],
      },
    },

    // Section 1: "Configurer Telegram"
    // → Flow Diagram: pipeline de configuration Telegram étape par étape
    1: {
      template: "flow-diagram",
      props: {
        title: "Configurer Telegram",
        subtitle: "Le canal le plus simple à connecter",
        items: [
          { label: "🤖 @BotFather", description: "Créer un bot Telegram" },
          { label: "🔑 Token API", description: "Copier le token généré" },
          { label: "⚙️ openclaw config", description: "Coller dans la config" },
          { label: "🔗 Connexion", description: "openclaw connect telegram" },
          { label: "✅ Test", description: "Envoyer un message au bot" },
        ],
      },
    },

    // Section 2: "Configurer WhatsApp"
    // → Chat Bubbles: simulation d'une conversation WhatsApp avec l'agent
    2: {
      template: "chat-bubbles",
      props: {
        title: "Configurer WhatsApp",
        subtitle: "Via WhatsApp Business API",
        items: [
          { label: "Salut ! Je suis ton agent OpenClaw 🤖" },
          { label: "Comment tu fais pour répondre sur WhatsApp ?" },
          { label: "J'utilise l'API WhatsApp Business via Meta. Ton admin m'a connecté en 3 étapes !" },
          { label: "C'est cool, tu peux m'aider avec mes clients ?" },
          { label: "Bien sûr ! Je gère les réponses automatiques 24/7 💪" },
        ],
      },
    },

    // Section 3: "Configurer Discord"
    // → Browser Mockup: interface Discord avec le bot OpenClaw actif
    3: {
      template: "browser-mockup",
      props: {
        title: "Configurer Discord",
        subtitle: "Ton agent dans ton serveur",
        items: [
          { label: "Discord Developer Portal", icon: "🌐" },
          { label: "New Application → OpenClaw Bot", icon: "🤖" },
          { label: "Bot Token → copier", icon: "🔑" },
          { label: "Inviter sur ton serveur", icon: "📨" },
          { label: "openclaw connect discord", icon: "✅" },
        ],
      },
    },

    // Section 4: "Multi-canal simultané"
    // → Concentric Circles: couches de canaux actifs simultanément
    4: {
      template: "concentric-circles",
      props: {
        title: "Multi-canal simultané",
        subtitle: "Tous les canaux en même temps",
        items: [
          { label: "Agent OpenClaw (noyau)", icon: "🤖" },
          { label: "Telegram + WhatsApp", icon: "💬" },
          { label: "Discord + Email", icon: "📡" },
          { label: "Même mémoire partagée", icon: "🧠" },
        ],
      },
    },

    // Section 5: "Quel canal pour quel usage ?"
    // → Comparison Grid: tableau comparatif des canaux et leurs usages idéaux
    5: {
      template: "comparison-grid",
      props: {
        title: "Quel canal pour quel usage ?",
        subtitle: "Choisis le bon canal pour chaque besoin",
        items: [
          { label: "Telegram", description: "Usage perso, tests rapides, notifications", icon: "✈️" },
          { label: "WhatsApp", description: "Clients B2C, support commercial, suivi", icon: "💬" },
          { label: "Discord", description: "Communauté, équipe, collaboration", icon: "🎮" },
          { label: "Email", description: "Communication formelle, rapports, comptes-rendus", icon: "📧" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 17: OpenClaw — Mémoire persistante (6 sections)
  // Templates: pulsing-orb, layered-stack, timeline, nesting-layers, arrow-cycle, shield-lock
  // ═══════════════════════════════════════════════════════════════
  "openclaw-memoire-persistante": {
    // Section 0: "Le premier soir avec ton agent"
    // → Pulsing Orb: orbe central représentant l'agent qui s'éveille et absorbe les infos
    0: {
      template: "pulsing-orb",
      props: {
        title: "Le premier soir avec ton agent",
        subtitle: "Le moment où tout commence",
        items: [
          { label: "Ton agent s'éveille", icon: "✨" },
          { label: "Qui es-tu ?", icon: "👤" },
          { label: "Que fais-tu ?", icon: "💼" },
          { label: "Quels sont tes objectifs ?", icon: "🎯" },
          { label: "Qui sont tes clients ?", icon: "👥" },
        ],
      },
    },

    // Section 1: "Ce que tu dois enseigner à OpenClaw"
    // → Layered Stack: couches d'informations à empiler dans la mémoire
    1: {
      template: "layered-stack",
      props: {
        title: "Ce que tu dois enseigner",
        subtitle: "Les fondations de ton agent personnel",
        items: [
          { label: "Ton identité", description: "Nom, métier, valeurs", icon: "👤" },
          { label: "Ton business", description: "Offres, prix, clients cibles", icon: "💼" },
          { label: "Ton ton de voix", description: "Formel, amical, expert", icon: "🎙️" },
          { label: "Tes processus", description: "Comment tu travailles au quotidien", icon: "⚙️" },
          { label: "Tes interdits", description: "Ce que l'agent ne doit jamais faire", icon: "🚫" },
        ],
      },
    },

    // Section 2: "La session d'onboarding"
    // → Timeline: frise chronologique de la session d'onboarding pas à pas
    2: {
      template: "timeline",
      props: {
        title: "La session d'onboarding",
        subtitle: "30 minutes pour un agent qui te connaît",
        items: [
          { label: "Minute 0", description: "Lancer openclaw onboard", icon: "▶️" },
          { label: "Minute 5", description: "Présentation personnelle et métier", icon: "👤" },
          { label: "Minute 10", description: "Description de tes offres et services", icon: "💼" },
          { label: "Minute 20", description: "Ton de voix et exemples de messages", icon: "🎙️" },
          { label: "Minute 25", description: "Règles, limites et interdictions", icon: "🚫" },
          { label: "Minute 30", description: "Test et validation — l'agent est prêt !", icon: "✅" },
        ],
      },
    },

    // Section 3: "Comment la mémoire fonctionne"
    // → Nesting Layers: couches imbriquées du système de mémoire
    3: {
      template: "nesting-layers",
      props: {
        title: "Comment la mémoire fonctionne",
        subtitle: "Du message à la connaissance permanente",
        items: [
          { label: "Conversation brute" },
          { label: "Extraction d'infos clés" },
          { label: "Stockage vectoriel" },
          { label: "Rappel contextuel" },
          { label: "Réponse personnalisée" },
        ],
      },
    },

    // Section 4: "Entraîner la mémoire au quotidien"
    // → Arrow Cycle: boucle d'apprentissage continu de l'agent
    4: {
      template: "arrow-cycle",
      props: {
        title: "Entraîner la mémoire au quotidien",
        subtitle: "L'agent s'améliore chaque jour",
        items: [
          { label: "Interagir", description: "Parle à ton agent normalement" },
          { label: "Corriger", description: "Dis-lui quand il se trompe" },
          { label: "Valider", description: "Confirme les bonnes réponses" },
          { label: "Enrichir", description: "Ajoute de nouvelles infos" },
        ],
      },
    },

    // Section 5: "Privacy et sécurité de la mémoire"
    // → Shield Lock: bouclier de protection des données mémoire
    5: {
      template: "shield-lock",
      props: {
        title: "Privacy et sécurité de la mémoire",
        subtitle: "Tes données restent les tiennes",
        items: [
          { label: "Chiffrement AES-256", description: "Données chiffrées au repos", icon: "🔐" },
          { label: "Stockage local", description: "Rien ne quitte ton serveur", icon: "💾" },
          { label: "Droit à l'oubli", description: "Efface n'importe quelle donnée", icon: "🗑️" },
          { label: "Contrôle granulaire", description: "Choisis ce que l'agent retient", icon: "🎛️" },
          { label: "Pas de revente", description: "Open source = transparence totale", icon: "🔓" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 18: OpenClaw — Déployer dans le cloud (6 sections)
  // Templates: feature-spotlight, model-cards, code-terminal, progress-path, bar-chart, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "openclaw-deployer-cloud": {
    // Section 0: "Pourquoi déployer dans le cloud ?"
    // → Feature Spotlight: mise en lumière de l'avantage cloud vs local
    0: {
      template: "feature-spotlight",
      props: {
        title: "Pourquoi déployer dans le cloud ?",
        subtitle: "Ton agent ne dort jamais",
        variant: "blue",
        items: [
          { label: "Cloud 24/7", icon: "☁️" },
          { label: "Disponibilité permanente", description: "Même quand ton PC est éteint", icon: "⏰" },
          { label: "Performance constante", description: "Serveur dédié, pas de ralentissement", icon: "⚡" },
          { label: "Accès mondial", description: "Tes clients te joignent de partout", icon: "🌍" },
          { label: "Sauvegardes auto", description: "Aucune perte de données", icon: "💾" },
        ],
      },
    },

    // Section 1: "Les options de déploiement"
    // → Model Cards: cartes des différentes options de déploiement
    1: {
      template: "model-cards",
      props: {
        title: "Les options de déploiement",
        subtitle: "Choisis ce qui te convient",
        items: [
          { label: "Hetzner", description: "5€/mois · Europe · Recommandé", icon: "🇩🇪" },
          { label: "DigitalOcean", description: "6$/mois · Simple · Populaire", icon: "🌊" },
          { label: "AWS / GCP", description: "Variable · Entreprise · Scalable", icon: "☁️" },
          { label: "Docker local", description: "Gratuit · Dev · Ton PC", icon: "🐳" },
          { label: "Railway", description: "5$/mois · Ultra simple · No DevOps", icon: "🚂" },
        ],
      },
    },

    // Section 2: "Déploiement sur Hetzner"
    // → Code Terminal: commandes SSH pour déployer sur Hetzner
    2: {
      template: "code-terminal",
      props: {
        title: "Déployer sur Hetzner",
        subtitle: "Le déploiement recommandé, étape par étape",
        items: [
          { label: "ssh root@ton-serveur.hetzner.com", icon: "command" },
          { label: "Connected to Hetzner CX22 (4GB RAM)", icon: "output" },
          { label: "curl -fsSL https://openclaw.io/install | bash", icon: "command" },
          { label: "Installing OpenClaw on Ubuntu 22.04...", icon: "output" },
          { label: "openclaw init --production", icon: "command" },
          { label: "Agent deployed! Dashboard: https://ton-agent.com ✓", icon: "output" },
        ],
      },
    },

    // Section 3: "Docker (méthode recommandée)"
    // → Progress Path: étapes de déploiement Docker avec checkpoints
    3: {
      template: "progress-path",
      props: {
        title: "Docker — Méthode recommandée",
        subtitle: "Containeriser ton agent en 5 étapes",
        items: [
          { label: "Installer Docker", description: "docker.com → télécharger et installer" },
          { label: "Créer docker-compose.yml", description: "Fichier de configuration pré-fait" },
          { label: "docker-compose up -d", description: "Lancer le container en arrière-plan" },
          { label: "Vérifier le statut", description: "docker ps → openclaw running" },
          { label: "Configurer le reverse proxy", description: "Nginx / Caddy pour HTTPS" },
        ],
      },
    },

    // Section 4: "Monitoring et maintenance"
    // → Bar Chart: métriques clés à surveiller pour le monitoring
    4: {
      template: "bar-chart",
      props: {
        title: "Monitoring et maintenance",
        subtitle: "Les métriques clés à surveiller",
        items: [
          { label: "Uptime", value: 99, description: "%" },
          { label: "RAM utilisée", value: 65, description: "%" },
          { label: "CPU moyen", value: 15, description: "%" },
          { label: "Temps de réponse", value: 85, description: "score" },
          { label: "Messages/jour", value: 45, description: "moyenne" },
        ],
      },
    },

    // Section 5: "Coût réel d'un agent 24/7"
    // → Counter Stats: chiffres animés du coût réel mensuel
    5: {
      template: "counter-stats",
      props: {
        title: "Coût réel d'un agent 24/7",
        subtitle: "Beaucoup moins cher qu'un employé",
        items: [
          { label: "Serveur Hetzner", value: 5, icon: "🖥️", description: "€/mois" },
          { label: "API Claude (usage moyen)", value: 10, icon: "🤖", description: "€/mois" },
          { label: "Domaine + SSL", value: 1, icon: "🔒", description: "€/mois" },
          { label: "Total mensuel", value: 16, icon: "💰", description: "€/mois" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 19: OpenClaw — Sécurité et permissions (5 sections)
  // Templates: radar-chart, checklist-reveal, hierarchy-tree, trophy-unlock, wireframe-builder
  // ═══════════════════════════════════════════════════════════════
  "openclaw-securite-permissions": {
    // Section 0: "La sécurité n'est pas optionnelle"
    // → Radar Chart: évaluation multi-axes des risques de sécurité
    0: {
      template: "radar-chart",
      props: {
        title: "La sécurité n'est pas optionnelle",
        subtitle: "Évaluation des risques sans protection",
        items: [
          { label: "Fuite de données", value: 95 },
          { label: "Accès non autorisé", value: 90 },
          { label: "Injection de prompt", value: 80 },
          { label: "Abus de l'agent", value: 85 },
          { label: "Coût incontrôlé", value: 70 },
          { label: "Réputation", value: 88 },
        ],
      },
    },

    // Section 1: "Règles de sécurité fondamentales"
    // → Checklist Reveal: liste des règles de sécurité à implémenter
    1: {
      template: "checklist-reveal",
      props: {
        title: "Règles de sécurité fondamentales",
        subtitle: "Les 6 piliers de la sécurité agent",
        items: [
          { label: "Authentification forte (API key + token)", icon: "🔑" },
          { label: "Rate limiting (max requêtes/minute)", icon: "⏱️" },
          { label: "Validation des entrées utilisateur", icon: "🛡️" },
          { label: "Logs et audit trail complets", icon: "📋" },
          { label: "Chiffrement des données au repos et en transit", icon: "🔐" },
          { label: "Mises à jour régulières de l'agent", icon: "🔄" },
        ],
      },
    },

    // Section 2: "Le système de permissions OpenClaw"
    // → Hierarchy Tree: arborescence des niveaux de permissions
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Le système de permissions OpenClaw",
        subtitle: "Qui peut faire quoi",
        items: [
          { label: "Admin (toi)", icon: "👑", description: "Accès total, configuration" },
          { label: "Lecture seule", icon: "👁️", description: "Consulter les données" },
          { label: "Écriture", icon: "✍️", description: "Modifier la mémoire" },
          { label: "Exécution", icon: "⚡", description: "Lancer des actions" },
          { label: "Invité", icon: "👤", description: "Accès limité temporaire" },
        ],
      },
    },

    // Section 3: "Bonnes pratiques de sécurité"
    // → Trophy Unlock: badges de sécurité à débloquer
    3: {
      template: "trophy-unlock",
      props: {
        title: "Bonnes pratiques de sécurité",
        subtitle: "Débloque tous les badges de sécurité",
        items: [
          { label: "Clés API en variables d'env", icon: "🔑", description: "Jamais en dur dans le code" },
          { label: "Backups automatiques", icon: "💾", description: "Sauvegarde quotidienne de la mémoire" },
          { label: "HTTPS obligatoire", icon: "🔒", description: "Tout le trafic chiffré" },
          { label: "Rotation des tokens", icon: "🔄", description: "Changer les clés tous les 90 jours" },
          { label: "Monitoring des anomalies", icon: "📊", description: "Alertes en cas de comportement suspect" },
        ],
      },
    },

    // Section 4: "Sécurité pour les clients"
    // → Wireframe Builder: schéma de l'architecture sécurisée pour les clients
    4: {
      template: "wireframe-builder",
      props: {
        title: "Sécurité pour les clients",
        subtitle: "Rassurer et protéger tes utilisateurs",
        items: [
          { label: "Page de politique de confidentialité", description: "Transparence sur les données collectées" },
          { label: "Consentement explicite", description: "L'utilisateur accepte avant toute collecte" },
          { label: "Bouton de suppression des données", description: "Droit à l'oubli en un clic" },
          { label: "Dashboard de transparence", description: "L'utilisateur voit ce que l'agent sait" },
        ],
      },
    },
  },
};
