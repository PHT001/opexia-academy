import type { AllLessonAnimations } from "./types";

export const module09: AllLessonAnimations = {
  // =====================================================
  // Lesson 46: Agent de Veille Concurrentielle Automatisé
  // =====================================================
  "projet-agent-veille-concurrentielle-automatise": {
    // Section 0: Objectif du projet
    0: {
      template: "rocket-launch",
      props: {
        title: "Objectif du projet",
        subtitle: "Agent de veille concurrentielle automatisé",
        items: [
          { label: "Surveiller", description: "Suivre les concurrents en temps réel", icon: "🔍" },
          { label: "Analyser", description: "Détecter les changements stratégiques", icon: "📊" },
          { label: "Alerter", description: "Notifications automatiques", icon: "🔔" },
          { label: "Rapporter", description: "Rapport quotidien synthétique", icon: "📋" },
        ],
      },
    },
    // Section 1: Architecture de l'agent
    1: {
      template: "hierarchy-tree",
      props: {
        title: "Architecture de l'agent",
        subtitle: "Composants du système de veille",
        items: [
          { label: "Agent Principal", description: "Orchestrateur OpenClaw", icon: "🧠" },
          { label: "Module Scraping", description: "Collecte de données web", icon: "🕷️" },
          { label: "Module Social", description: "Surveillance réseaux sociaux", icon: "📱" },
          { label: "Module Analyse", description: "Détection de changements", icon: "🔬" },
          { label: "Module Rapport", description: "Génération et envoi", icon: "📨" },
        ],
      },
    },
    // Section 2: Étape 1 : Configurer l'agent OpenClaw
    2: {
      template: "code-terminal",
      props: {
        title: "Configurer l'agent OpenClaw",
        subtitle: "Initialisation du skill de veille",
        items: [
          { label: "openclaw init veille-concurrentielle", icon: "command" },
          { label: "Skill créé avec succès ✓", icon: "output" },
          { label: "Ajout des sources concurrentielles...", icon: "command" },
          { label: "5 concurrents configurés ✓", icon: "output" },
          { label: "Définition des critères de surveillance...", icon: "command" },
          { label: "Prix, produits, contenus, offres ✓", icon: "output" },
        ],
      },
    },
    // Section 3: Étape 2 : Scraping intelligent des sites web
    3: {
      template: "flow-diagram",
      props: {
        title: "Scraping intelligent",
        subtitle: "Pipeline de collecte de données",
        items: [
          { label: "URLs cibles", description: "Sites concurrents identifiés", icon: "🌐" },
          { label: "Scraper IA", description: "Extraction structurée", icon: "🕷️" },
          { label: "Nettoyage", description: "Filtrage du bruit", icon: "🧹" },
          { label: "Stockage", description: "Base de données versionnée", icon: "💾" },
        ],
      },
    },
    // Section 4: Étape 3 : Suivi des réseaux sociaux
    4: {
      template: "planet-orbit",
      props: {
        title: "Suivi des réseaux sociaux",
        subtitle: "Surveillance multi-plateforme",
        items: [
          { label: "LinkedIn", description: "Posts et actualités", icon: "💼" },
          { label: "Twitter/X", description: "Annonces et tendances", icon: "🐦" },
          { label: "Instagram", description: "Campagnes visuelles", icon: "📸" },
          { label: "YouTube", description: "Vidéos et lancements", icon: "🎬" },
        ],
      },
    },
    // Section 5: Étape 4 : Détection des changements
    5: {
      template: "split-transform",
      props: {
        title: "Détection des changements",
        subtitle: "Avant / Après analyse comparative",
        items: [
          { label: "Page V1", description: "État précédent capturé", icon: "📄" },
          { label: "Page V2", description: "État actuel détecté", icon: "📝" },
          { label: "Diff IA", description: "Analyse sémantique des écarts", icon: "🔀" },
          { label: "Alerte", description: "Notification si changement majeur", icon: "🚨" },
        ],
      },
    },
    // Section 6: Étape 5 : Génération du rapport quotidien
    6: {
      template: "layered-stack",
      props: {
        title: "Rapport quotidien",
        subtitle: "Structure du rapport de veille",
        items: [
          { label: "Résumé exécutif", description: "Points clés en 3 lignes", icon: "📌" },
          { label: "Changements détectés", description: "Prix, offres, contenus", icon: "🔄" },
          { label: "Analyse des tendances", description: "Mouvements stratégiques", icon: "📈" },
          { label: "Recommandations", description: "Actions suggérées par l'IA", icon: "💡" },
          { label: "Annexes", description: "Sources et captures", icon: "📎" },
        ],
      },
    },
    // Section 7: Étape 6 : Planification et envoi automatique
    7: {
      template: "gear-system",
      props: {
        title: "Planification et envoi",
        subtitle: "Automatisation complète du cycle",
        items: [
          { label: "Cron 6h", description: "Déclenchement quotidien", icon: "⏰" },
          { label: "Collecte", description: "Scraping + Social", icon: "📥" },
          { label: "Analyse", description: "Comparaison IA", icon: "🧠" },
          { label: "Envoi", description: "Email + Slack", icon: "📤" },
        ],
      },
    },
  },

  // =====================================================
  // Lesson 47: Agent de Gestion et Tri des Emails
  // =====================================================
  "projet-agent-gestion-tri-emails": {
    // Section 0: Objectif du projet
    0: {
      template: "pulsing-orb",
      props: {
        title: "Objectif du projet",
        subtitle: "Agent intelligent de gestion des emails",
        items: [
          { label: "Trier", description: "Catégorisation automatique", icon: "📂" },
          { label: "Prioriser", description: "Urgence détectée par l'IA", icon: "🔴" },
          { label: "Répondre", description: "Brouillons intelligents", icon: "✉️" },
          { label: "Résumer", description: "Digest quotidien", icon: "📋" },
        ],
      },
    },
    // Section 1: Architecture de l'agent
    1: {
      template: "flow-diagram",
      props: {
        title: "Architecture de l'agent email",
        subtitle: "Pipeline de traitement des messages",
        items: [
          { label: "Inbox", description: "Emails entrants", icon: "📨" },
          { label: "Classifieur IA", description: "Analyse du contenu", icon: "🧠" },
          { label: "Routeur", description: "Actions par catégorie", icon: "🔀" },
          { label: "Exécuteur", description: "Labels, archives, réponses", icon: "⚡" },
        ],
      },
    },
    // Section 2: Étape 1 : Connexion à la boîte mail
    2: {
      template: "code-terminal",
      props: {
        title: "Connexion à la boîte mail",
        subtitle: "Configuration Gmail API via OpenClaw",
        items: [
          { label: "openclaw connect gmail --oauth2", icon: "command" },
          { label: "Authentification OAuth2 réussie ✓", icon: "output" },
          { label: "Scan boîte de réception...", icon: "command" },
          { label: "47 emails non lus détectés", icon: "output" },
          { label: "Permissions IMAP configurées ✓", icon: "output" },
        ],
      },
    },
    // Section 3: Étape 2 : Catégorisation intelligente
    3: {
      template: "comparison-grid",
      props: {
        title: "Catégorisation intelligente",
        subtitle: "Classification IA des emails",
        items: [
          { label: "Urgent", description: "Action immédiate requise", icon: "🔴", value: 5 },
          { label: "Important", description: "À traiter dans la journée", icon: "🟠", value: 12 },
          { label: "Informatif", description: "Lecture recommandée", icon: "🔵", value: 18 },
          { label: "Newsletter", description: "Lecture optionnelle", icon: "🟢", value: 8 },
          { label: "Spam/Promo", description: "Archivage automatique", icon: "⚫", value: 4 },
        ],
      },
    },
    // Section 4: Étape 3 : Actions automatiques
    4: {
      template: "checklist-reveal",
      props: {
        title: "Actions automatiques",
        subtitle: "Automatisations par catégorie",
        items: [
          { label: "Urgent → Notification push immédiate", icon: "🚨" },
          { label: "Important → Label + mise en avant", icon: "⭐" },
          { label: "Informatif → Résumé IA généré", icon: "📝" },
          { label: "Newsletter → Dossier dédié", icon: "📁" },
          { label: "Spam → Archivage + signalement", icon: "🗑️" },
          { label: "Clients → Brouillon de réponse IA", icon: "✍️" },
        ],
      },
    },
    // Section 5: Étape 4 : Règles personnalisées
    5: {
      template: "mind-map",
      props: {
        title: "Règles personnalisées",
        subtitle: "Configuration sur mesure du tri",
        items: [
          { label: "Règles", description: "Centre de configuration", icon: "⚙️" },
          { label: "VIP Contacts", description: "Toujours prioritaire", icon: "👑" },
          { label: "Mots-clés", description: "Facture, urgence, contrat", icon: "🔑" },
          { label: "Domaines", description: "@client.com → Important", icon: "🌐" },
          { label: "Horaires", description: "Hors bureau → différé", icon: "🕐" },
          { label: "Taille", description: "Pièces jointes > 5MB", icon: "📎" },
        ],
      },
    },
    // Section 6: Étape 5 : Résumé quotidien
    6: {
      template: "bar-chart",
      props: {
        title: "Résumé quotidien",
        subtitle: "Métriques de la journée email",
        items: [
          { label: "Reçus", value: 47, icon: "📨" },
          { label: "Traités auto", value: 35, icon: "⚡" },
          { label: "À lire", value: 8, icon: "👀" },
          { label: "Réponses IA", value: 4, icon: "✍️" },
        ],
      },
    },
    // Section 7: Étape 6 : Apprentissage et amélioration
    7: {
      template: "arrow-cycle",
      props: {
        title: "Apprentissage continu",
        subtitle: "Boucle d'amélioration de l'agent",
        items: [
          { label: "Classer", description: "L'IA catégorise", icon: "📂" },
          { label: "Observer", description: "L'utilisateur corrige", icon: "👁️" },
          { label: "Apprendre", description: "Feedback intégré", icon: "🧠" },
          { label: "Améliorer", description: "Précision accrue", icon: "📈" },
        ],
      },
    },
  },

  // =====================================================
  // Lesson 48: Agent de Création de Contenu Multi-Plateforme
  // =====================================================
  "projet-agent-creation-contenu-multi-plateforme": {
    // Section 0: Objectif du projet
    0: {
      template: "split-transform",
      props: {
        title: "Objectif du projet",
        subtitle: "Un contenu source, plusieurs plateformes",
        items: [
          { label: "1 idée originale", description: "Thème ou article source", icon: "💡" },
          { label: "Post LinkedIn", description: "Format professionnel", icon: "💼" },
          { label: "Thread Twitter/X", description: "Format viral court", icon: "🐦" },
          { label: "Newsletter", description: "Format email détaillé", icon: "📧" },
        ],
      },
    },
    // Section 1: Le problème que l'agent résout
    1: {
      template: "counter-stats",
      props: {
        title: "Le problème résolu",
        subtitle: "Temps économisé par l'automatisation",
        items: [
          { label: "Heures/semaine manuellement", value: 15, icon: "⏰" },
          { label: "Heures/semaine avec agent", value: 2, icon: "⚡" },
          { label: "Plateformes gérées", value: 4, icon: "📱" },
          { label: "Contenus/semaine", value: 20, icon: "📝" },
        ],
      },
    },
    // Section 2: Étape 1 : Architecture du skill
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Architecture du skill",
        subtitle: "Structure du skill de contenu",
        items: [
          { label: "Skill Content Creator", description: "Orchestrateur principal", icon: "🎯" },
          { label: "Analyseur de source", description: "Extraction des idées clés", icon: "🔍" },
          { label: "Générateur LinkedIn", description: "Adaptateur format pro", icon: "💼" },
          { label: "Générateur Twitter", description: "Adaptateur format thread", icon: "🐦" },
          { label: "Générateur Newsletter", description: "Adaptateur format email", icon: "📧" },
        ],
      },
    },
    // Section 3: Étape 2 : Génération du contenu LinkedIn
    3: {
      template: "layered-stack",
      props: {
        title: "Contenu LinkedIn",
        subtitle: "Structure d'un post LinkedIn performant",
        items: [
          { label: "Hook", description: "Première ligne accrocheuse", icon: "🪝" },
          { label: "Contexte", description: "Problème ou anecdote", icon: "📖" },
          { label: "Valeur", description: "Leçons et insights", icon: "💎" },
          { label: "CTA", description: "Appel à l'engagement", icon: "👉" },
          { label: "Hashtags", description: "3-5 hashtags pertinents", icon: "#️⃣" },
        ],
      },
    },
    // Section 4: Étape 3 : Génération du thread Twitter
    4: {
      template: "token-stream",
      props: {
        title: "Thread Twitter/X",
        subtitle: "Génération tweet par tweet",
        items: [
          { label: "Tweet 1", description: "Hook viral + promesse", icon: "1️⃣" },
          { label: "Tweet 2-5", description: "Développement des points clés", icon: "📝" },
          { label: "Tweet 6", description: "Exemple concret ou preuve", icon: "💡" },
          { label: "Tweet 7", description: "CTA + retweet request", icon: "🔄" },
        ],
      },
    },
    // Section 5: Étape 4 : Génération du contenu newsletter
    5: {
      template: "wireframe-builder",
      props: {
        title: "Contenu newsletter",
        subtitle: "Template email structuré",
        items: [
          { label: "Objet email", description: "Taux d'ouverture optimisé", icon: "✉️" },
          { label: "Introduction", description: "Contexte et accroche", icon: "👋" },
          { label: "Corps principal", description: "Contenu approfondi", icon: "📄" },
          { label: "Ressources", description: "Liens et outils recommandés", icon: "🔗" },
          { label: "Footer CTA", description: "Appel à l'action final", icon: "🎯" },
        ],
      },
    },
    // Section 6: Étape 5 : Calendrier éditorial
    6: {
      template: "timeline",
      props: {
        title: "Calendrier éditorial",
        subtitle: "Planification hebdomadaire automatisée",
        items: [
          { label: "Lundi", description: "Post LinkedIn motivationnel", icon: "💼" },
          { label: "Mardi", description: "Thread Twitter éducatif", icon: "🐦" },
          { label: "Mercredi", description: "Newsletter envoyée", icon: "📧" },
          { label: "Jeudi", description: "Post LinkedIn étude de cas", icon: "📊" },
          { label: "Vendredi", description: "Thread Twitter récapitulatif", icon: "🔄" },
        ],
      },
    },
    // Section 7: Étape 6 : Optimisation et analyse
    7: {
      template: "radar-chart",
      props: {
        title: "Optimisation et analyse",
        subtitle: "Métriques de performance du contenu",
        items: [
          { label: "Engagement", value: 78, icon: "❤️" },
          { label: "Portée", value: 85, icon: "👁️" },
          { label: "Clics", value: 62, icon: "🖱️" },
          { label: "Conversions", value: 45, icon: "🎯" },
          { label: "Partages", value: 70, icon: "🔄" },
        ],
      },
    },
  },

  // =====================================================
  // Lesson 49: Agent Multi-Canal Telegram/Discord/WhatsApp
  // =====================================================
  "projet-agent-multi-canal-telegram-discord-whatsapp": {
    // Section 0: Objectif du projet
    0: {
      template: "concentric-circles",
      props: {
        title: "Objectif du projet",
        subtitle: "Un agent, tous les canaux",
        items: [
          { label: "Agent IA", description: "Cerveau central unifié", icon: "🧠" },
          { label: "Telegram", description: "Messagerie rapide", icon: "✈️" },
          { label: "Discord", description: "Communauté et serveurs", icon: "🎮" },
          { label: "WhatsApp", description: "Communication directe", icon: "📱" },
        ],
      },
    },
    // Section 1: Pourquoi le multi-canal est essentiel
    1: {
      template: "pie-chart",
      props: {
        title: "Pourquoi le multi-canal",
        subtitle: "Répartition des utilisateurs par plateforme",
        items: [
          { label: "WhatsApp", value: 40, icon: "📱", color: "#25D366" },
          { label: "Telegram", value: 25, icon: "✈️", color: "#0088CC" },
          { label: "Discord", value: 20, icon: "🎮", color: "#5865F2" },
          { label: "Autres", value: 15, icon: "💬", color: "#999999" },
        ],
      },
    },
    // Section 2: Étape 1 : Configuration des connecteurs
    2: {
      template: "code-terminal",
      props: {
        title: "Configuration des connecteurs",
        subtitle: "Initialisation de chaque canal",
        items: [
          { label: "openclaw connect telegram --bot-token", icon: "command" },
          { label: "Bot Telegram @VotreBot connecté ✓", icon: "output" },
          { label: "openclaw connect discord --app-id", icon: "command" },
          { label: "Bot Discord invité sur 3 serveurs ✓", icon: "output" },
          { label: "openclaw connect whatsapp --business-api", icon: "command" },
          { label: "WhatsApp Business API activée ✓", icon: "output" },
        ],
      },
    },
    // Section 3: Étape 2 : Couche d'abstraction des messages
    3: {
      template: "nesting-layers",
      props: {
        title: "Abstraction des messages",
        subtitle: "Format unifié entre les canaux",
        items: [
          { label: "Message universel", description: "Format standardisé interne", icon: "📦" },
          { label: "Adaptateur Telegram", description: "Markdown + inline buttons", icon: "✈️" },
          { label: "Adaptateur Discord", description: "Embeds + reactions", icon: "🎮" },
          { label: "Adaptateur WhatsApp", description: "Templates + boutons", icon: "📱" },
        ],
      },
    },
    // Section 4: Étape 3 : Mémoire partagée entre canaux
    4: {
      template: "brain-network",
      props: {
        title: "Mémoire partagée",
        subtitle: "Contexte unifié entre les canaux",
        items: [
          { label: "Mémoire centrale", description: "Base de données partagée", icon: "🧠" },
          { label: "Profil utilisateur", description: "Identité cross-canal", icon: "👤" },
          { label: "Historique", description: "Conversations unifiées", icon: "📜" },
          { label: "Préférences", description: "Canal favori mémorisé", icon: "⚙️" },
          { label: "Contexte", description: "Dernière interaction", icon: "💭" },
        ],
      },
    },
    // Section 5: Étape 4 : Gestion des spécificités de chaque canal
    5: {
      template: "comparison-grid",
      props: {
        title: "Spécificités par canal",
        subtitle: "Adapter le comportement au média",
        items: [
          { label: "Telegram", description: "Inline keyboards, stickers, groupes", icon: "✈️" },
          { label: "Discord", description: "Slash commands, threads, embeds", icon: "🎮" },
          { label: "WhatsApp", description: "Listes, templates approuvés, médias", icon: "📱" },
          { label: "Commun", description: "Texte, images, fichiers, liens", icon: "🔗" },
        ],
      },
    },
    // Section 6: Étape 5 : Commandes et fonctionnalités
    6: {
      template: "feature-spotlight",
      props: {
        title: "Commandes et fonctionnalités",
        subtitle: "Capacités de l'agent multi-canal",
        items: [
          { label: "/aide", description: "Menu d'aide contextuel", icon: "❓" },
          { label: "/statut", description: "État des services", icon: "📊" },
          { label: "/recherche", description: "Recherche dans la base", icon: "🔍" },
          { label: "/rapport", description: "Rapport personnalisé", icon: "📋" },
          { label: "/config", description: "Paramètres utilisateur", icon: "⚙️" },
        ],
      },
    },
    // Section 7: Étape 6 : Monitoring et administration
    7: {
      template: "counter-stats",
      props: {
        title: "Monitoring et administration",
        subtitle: "Tableau de bord de suivi en temps réel",
        items: [
          { label: "Messages/jour", value: 1250, icon: "💬" },
          { label: "Utilisateurs actifs", value: 340, icon: "👥" },
          { label: "Temps réponse (ms)", value: 450, icon: "⚡" },
          { label: "Taux satisfaction", value: 94, icon: "⭐" },
        ],
      },
    },
  },

  // =====================================================
  // Lesson 50: Système Multi-Agents Coordonnés
  // =====================================================
  "projet-systeme-multi-agents-coordonnes": {
    // Section 0: Objectif du projet
    0: {
      template: "convergence-beam",
      props: {
        title: "Objectif du projet",
        subtitle: "Orchestrer plusieurs agents spécialisés",
        items: [
          { label: "Agent Collecteur", description: "Rassemble les données", icon: "📥" },
          { label: "Agent Analyste", description: "Interprète les données", icon: "🔬" },
          { label: "Agent Rapporteur", description: "Produit le livrable", icon: "📄" },
          { label: "Résultat final", description: "Rapport complet automatisé", icon: "🏆" },
        ],
      },
    },
    // Section 1: Architecture du système
    1: {
      template: "brain-network",
      props: {
        title: "Architecture du système",
        subtitle: "Réseau d'agents interconnectés",
        items: [
          { label: "Orchestrateur", description: "Coordonne les agents", icon: "🎯" },
          { label: "Collecteur", description: "Scraping et APIs", icon: "📥" },
          { label: "Analyste", description: "Traitement IA", icon: "🧠" },
          { label: "Rapporteur", description: "Mise en forme", icon: "📝" },
          { label: "File d'attente", description: "Messages inter-agents", icon: "📬" },
        ],
      },
    },
    // Section 2: Étape 1 : Créer l'Agent Collecteur
    2: {
      template: "flow-diagram",
      props: {
        title: "Agent Collecteur",
        subtitle: "Pipeline de collecte de données",
        items: [
          { label: "Sources", description: "APIs, web, fichiers", icon: "🌐" },
          { label: "Extraction", description: "Données brutes collectées", icon: "⛏️" },
          { label: "Nettoyage", description: "Filtrage et normalisation", icon: "🧹" },
          { label: "Transmission", description: "Envoi à l'Agent Analyste", icon: "📤" },
        ],
      },
    },
    // Section 3: Étape 2 : Créer l'Agent Analyste
    3: {
      template: "gear-system",
      props: {
        title: "Agent Analyste",
        subtitle: "Moteur d'analyse des données",
        items: [
          { label: "Réception", description: "Données du Collecteur", icon: "📥" },
          { label: "Classification", description: "Catégorisation IA", icon: "🏷️" },
          { label: "Extraction insights", description: "Points clés identifiés", icon: "💡" },
          { label: "Scoring", description: "Priorité et importance", icon: "📊" },
        ],
      },
    },
    // Section 4: Étape 3 : Créer l'Agent Rapporteur
    4: {
      template: "wireframe-builder",
      props: {
        title: "Agent Rapporteur",
        subtitle: "Génération du rapport final",
        items: [
          { label: "Template", description: "Structure du rapport", icon: "📐" },
          { label: "Rédaction", description: "Texte généré par l'IA", icon: "✍️" },
          { label: "Visualisations", description: "Graphiques et tableaux", icon: "📊" },
          { label: "PDF/HTML", description: "Format de sortie final", icon: "📄" },
        ],
      },
    },
    // Section 5: Étape 4 : Communication inter-agents
    5: {
      template: "chat-bubbles",
      props: {
        title: "Communication inter-agents",
        subtitle: "Messages entre les agents",
        items: [
          { label: "Orchestrateur", description: "Collecteur, lance la mission veille", icon: "🎯" },
          { label: "Collecteur", description: "Données prêtes : 42 éléments collectés", icon: "📥" },
          { label: "Orchestrateur", description: "Analyste, traite ces données", icon: "🎯" },
          { label: "Analyste", description: "5 insights majeurs identifiés", icon: "🔬" },
          { label: "Orchestrateur", description: "Rapporteur, génère le rapport", icon: "🎯" },
          { label: "Rapporteur", description: "Rapport PDF généré et envoyé ✓", icon: "📄" },
        ],
      },
    },
    // Section 6: Étape 5 : Cas d'usage concret
    6: {
      template: "progress-path",
      props: {
        title: "Cas d'usage concret",
        subtitle: "Veille marché automatisée de bout en bout",
        items: [
          { label: "Déclenchement", description: "Lundi 8h automatique", icon: "⏰" },
          { label: "Collecte", description: "5 sources scannées", icon: "🔍" },
          { label: "Analyse", description: "Tendances identifiées", icon: "📊" },
          { label: "Rapport", description: "PDF envoyé à l'équipe", icon: "📧" },
          { label: "Archivage", description: "Historique mis à jour", icon: "🗂️" },
        ],
      },
    },
    // Section 7: Étape 6 : Dashboard de monitoring
    7: {
      template: "bar-chart",
      props: {
        title: "Dashboard de monitoring",
        subtitle: "Performance des agents en temps réel",
        items: [
          { label: "Collecteur", value: 95, icon: "📥" },
          { label: "Analyste", value: 88, icon: "🔬" },
          { label: "Rapporteur", value: 92, icon: "📄" },
          { label: "Orchestrateur", value: 99, icon: "🎯" },
        ],
      },
    },
  },

  // =====================================================
  // Lesson 51: Agent de Reporting et Analytics Automatisé
  // =====================================================
  "projet-agent-reporting-analytics-automatise": {
    // Section 0: Objectif du projet
    0: {
      template: "trophy-unlock",
      props: {
        title: "Objectif du projet",
        subtitle: "Reporting analytics entièrement automatisé",
        items: [
          { label: "Collecter les données", description: "Multiples sources connectées", icon: "📥" },
          { label: "Analyser les métriques", description: "Insights IA automatiques", icon: "📊" },
          { label: "Générer les rapports", description: "PDF et tableaux de bord", icon: "📄" },
          { label: "Distribuer", description: "Envoi planifié aux parties prenantes", icon: "📤" },
        ],
      },
    },
    // Section 1: Sources de données à connecter
    1: {
      template: "marketplace-grid",
      props: {
        title: "Sources de données",
        subtitle: "Connecteurs disponibles pour l'agent",
        items: [
          { label: "Google Analytics", description: "Trafic et comportement web", icon: "📈" },
          { label: "Stripe", description: "Revenus et transactions", icon: "💳" },
          { label: "CRM", description: "Pipeline et clients", icon: "👥" },
          { label: "Réseaux sociaux", description: "Engagement et portée", icon: "📱" },
          { label: "Email marketing", description: "Taux d'ouverture et clics", icon: "✉️" },
          { label: "Support client", description: "Tickets et satisfaction", icon: "🎧" },
        ],
      },
    },
    // Section 2: Étape 1 : Architecture du système de collecte
    2: {
      template: "flow-diagram",
      props: {
        title: "Architecture de collecte",
        subtitle: "Pipeline de données multi-sources",
        items: [
          { label: "APIs sources", description: "GA, Stripe, CRM", icon: "🔌" },
          { label: "ETL Agent", description: "Extraction et transformation", icon: "⚙️" },
          { label: "Data Store", description: "Base unifiée", icon: "💾" },
          { label: "Analyse IA", description: "Insights automatiques", icon: "🧠" },
        ],
      },
    },
    // Section 3: Étape 2 : Collecte et stockage des métriques
    3: {
      template: "code-terminal",
      props: {
        title: "Collecte des métriques",
        subtitle: "Extraction automatique des KPIs",
        items: [
          { label: "openclaw collect --source google-analytics", icon: "command" },
          { label: "15 240 sessions cette semaine ✓", icon: "output" },
          { label: "openclaw collect --source stripe", icon: "command" },
          { label: "€24 580 de revenus collectés ✓", icon: "output" },
          { label: "openclaw collect --source crm", icon: "command" },
          { label: "38 deals actifs, 12 gagnés ✓", icon: "output" },
        ],
      },
    },
    // Section 4: Étape 3 : Analyse et insights
    4: {
      template: "radar-chart",
      props: {
        title: "Analyse et insights",
        subtitle: "Score de performance par domaine",
        items: [
          { label: "Acquisition", value: 82, icon: "🎯" },
          { label: "Activation", value: 75, icon: "⚡" },
          { label: "Rétention", value: 68, icon: "🔄" },
          { label: "Revenu", value: 90, icon: "💰" },
          { label: "Référence", value: 55, icon: "📣" },
        ],
      },
    },
    // Section 5: Étape 4 : Génération du rapport
    5: {
      template: "artifact-gallery",
      props: {
        title: "Génération du rapport",
        subtitle: "Formats de sortie disponibles",
        items: [
          { label: "Rapport PDF", description: "Format exécutif imprimable", icon: "📑" },
          { label: "Présentation", description: "Slides pour le COMEX", icon: "📽️" },
          { label: "Email digest", description: "Résumé dans la boîte mail", icon: "✉️" },
          { label: "Dashboard web", description: "Tableaux de bord interactifs", icon: "🖥️" },
        ],
      },
    },
    // Section 6: Étape 5 : Distribution automatique
    6: {
      template: "arrow-cycle",
      props: {
        title: "Distribution automatique",
        subtitle: "Cycle de livraison des rapports",
        items: [
          { label: "Collecte", description: "Données fraîches", icon: "📥" },
          { label: "Analyse", description: "Insights générés", icon: "🔬" },
          { label: "Rapport", description: "Document formaté", icon: "📄" },
          { label: "Envoi", description: "Email, Slack, Drive", icon: "📤" },
        ],
      },
    },
    // Section 7: Étape 6 : Dashboard interactif
    7: {
      template: "browser-mockup",
      props: {
        title: "Dashboard interactif",
        subtitle: "Vue en temps réel des KPIs",
        items: [
          { label: "Revenus mensuels", description: "€98 450 (+12%)", icon: "💰" },
          { label: "Nouveaux clients", description: "127 ce mois (+8%)", icon: "👥" },
          { label: "Taux de conversion", description: "3.2% (+0.5pts)", icon: "🎯" },
          { label: "NPS Score", description: "72/100 (excellent)", icon: "⭐" },
          { label: "Churn rate", description: "2.1% (-0.3pts)", icon: "📉" },
        ],
      },
    },
  },
};
