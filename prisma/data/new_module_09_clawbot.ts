// Module 9 : ClawBot — Ton assistant IA personnalisé (7 leçons)

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_9_LESSONS = [
  // ═══════════════════════════════════════════════════
  // LEÇON 1 : Découvrir ClawBot
  // ═══════════════════════════════════════════════════
  {
    order: 1,
    module: 9,
    title: "Découvrir ClawBot : ton chatbot prêt à vendre",
    slug: "decouvrir-clawbot-chatbot-pret-a-vendre",
    duration: "20 min",
    description:
      "Comprendre ce qu'est ClawBot, ses fonctionnalités clés et pourquoi c'est un raccourci puissant pour vendre des chatbots IA à tes clients.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Qu'est-ce que ClawBot ?",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>ClawBot est le chatbot IA développé par la formation ALL-IN. Contrairement aux solutions génériques du marché, ClawBot a été conçu spécifiquement pour être revendu en marque blanche à tes clients. Tu n'as pas besoin de coder un chatbot de zéro, de gérer l'infrastructure serveur ou de passer des semaines en développement. ClawBot est prêt à l'emploi — tu le personnalises, tu le déploies et tu le factures.</p>",
      },
      {
        id: "1-3",
        type: "text",
        html: "<p>Imagine la situation : un restaurateur te contacte parce qu'il veut un assistant IA sur son site pour répondre aux questions fréquentes (horaires, menu, réservations). Sans ClawBot, tu devrais construire un chatbot complet, gérer l'hébergement, l'API, le front-end… Des semaines de travail. Avec ClawBot, tu configures tout en quelques heures, tu intègres le widget sur son site, et tu factures 1 500 à 3 000 € pour le setup + un abonnement mensuel. C'est un game changer.</p>",
      },
      {
        id: "1-4",
        type: "callout",
        variant: "info",
        title: "Marque blanche = ton branding",
        html: "ClawBot n'affiche jamais le nom « ClawBot » côté client. Ton client voit le nom et les couleurs de SA marque. Tu peux l'appeler « AssistBot », « MonConseiller IA » ou ce que tu veux. C'est 100 % white-label.",
      },
      { id: "m9c-dia-1-1h", type: "heading", level: 3, text: "Comment fonctionne un chatbot IA comme ClawBot ?" },
      { id: "m9c-dia-1-1", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Le visiteur pose une question", description: "Sur le site web du client, via un widget de chat intégré" },
        { id: "n2", label: "ClawBot cherche dans la base de connaissances", description: "Il compare la question avec les documents, FAQ et données du client" },
        { id: "n3", label: "L'IA formule une réponse naturelle", description: "Le modèle de langage rédige une réponse humaine à partir des infos trouvées" },
        { id: "n4", label: "Le visiteur reçoit une réponse en 2 secondes", description: "Sans qu'aucun humain n'ait eu besoin d'intervenir" },
      ]},
      { id: "m9c-dia-1-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> ClawBot, c'est comme un employé qui connaît par coeur toutes les FAQ de l'entreprise. Sauf qu'il est disponible 24h/24 et qu'il peut parler à 100 visiteurs en même temps." },
      { id: "1-5", type: "separator", style: "dots" },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "Les fonctionnalités clés de ClawBot",
      },
      {
        id: "1-7",
        type: "steps",
        steps: [
          {
            title: "Base de connaissances personnalisée",
            description:
              "ClawBot s'entraîne sur les documents, FAQ et données spécifiques de chaque client. Il ne répond pas au hasard — il répond avec les informations exactes du business.",
            icon: "📚",
          },
          {
            title: "Widget intégrable en 2 minutes",
            description:
              "Un simple script à coller sur n'importe quel site web. Compatible WordPress, Shopify, Wix, sites custom… Aucune compétence technique requise côté client.",
            icon: "🔌",
          },
          {
            title: "Personnalisation du ton et de la personnalité",
            description:
              "Tu définis comment le bot s'exprime : formel, décontracté, technique, chaleureux. Chaque client a un chatbot qui parle comme sa marque.",
            icon: "🎭",
          },
          {
            title: "Analytics et capture de leads",
            description:
              "Tableau de bord avec les conversations, les questions fréquentes, le taux de satisfaction et la capture automatique d'emails et de numéros de téléphone.",
            icon: "📊",
          },
          {
            title: "Multi-langues natif",
            description:
              "ClawBot détecte automatiquement la langue du visiteur et répond dans cette langue. Français, anglais, espagnol, arabe… sans configuration supplémentaire.",
            icon: "🌍",
          },
        ],
      },
      { id: "m9c-dia-1-2h", type: "heading", level: 3, text: "Le modèle économique du chatbot en marque blanche" },
      { id: "m9c-dia-1-2", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "Toi (revendeur)", description: "Tu configures, personnalises et factures. Tu es le point de contact unique du client." },
        { id: "n2", label: "Client restaurant", description: "Paie 2000€ setup + 300€/mois pour son assistant de réservation" },
        { id: "n3", label: "Client e-commerce", description: "Paie 1500€ setup + 250€/mois pour le support produit automatisé" },
        { id: "n4", label: "Client cabinet", description: "Paie 2500€ setup + 350€/mois pour le chatbot de prise de RDV" },
        { id: "n5", label: "Client immobilier", description: "Paie 2000€ setup + 300€/mois pour la qualification de leads" },
      ]},
      { id: "m9c-dia-1-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> tu es comme un franchisé. ClawBot te fournit le produit clé en main, et toi tu gères la relation client et la personnalisation. Tu gardes la marge sans avoir à construire la technologie." },
      { id: "1-8", type: "separator", style: "line" },
      {
        id: "1-9",
        type: "heading",
        level: 2,
        text: "Pourquoi ClawBot est un raccourci business",
      },
      {
        id: "1-10",
        type: "comparison",
        headers: ["Critère", "Construire de zéro", "Utiliser ClawBot"],
        rows: [
          { cells: ["Temps de mise en place", "2 à 6 semaines", "2 à 4 heures"] },
          { cells: ["Coût de développement", "3 000 – 15 000 €", "0 € (inclus dans la formation)"] },
          { cells: ["Maintenance technique", "Toi ou un dev", "Gérée par ClawBot"] },
          { cells: ["Mises à jour IA", "À faire toi-même", "Automatiques"] },
          { cells: ["Marge sur la vente", "Variable (coûts élevés)", "Très élevée (coûts quasi nuls)"] },
        ],
      },
      {
        id: "1-11",
        type: "text",
        html: "<p>Le calcul est simple : si tu vends un chatbot ClawBot à 2 000 € de setup + 300 €/mois de maintenance, et que ça te prend 4 heures de configuration, tu gagnes 500 €/heure. Multiplie ça par 5 clients et tu as un revenu récurrent de 1 500 €/mois en plus du setup. C'est un business model redoutablement efficace.</p>",
      },
      {
        id: "1-12",
        type: "callout",
        variant: "tip",
        title: "Astuce de pro",
        html: "Ne présente jamais ClawBot comme un « outil que tu utilises ». Présente-le comme TA solution propriétaire. Le client n'a pas besoin de savoir quelle technologie tourne derrière — il veut juste un résultat. Tu es l'expert, ClawBot est ton outil.",
      },
      { id: "m9c-dia-1-3h", type: "heading", level: 3, text: "Construire vs acheter : le calcul du temps" },
      { id: "m9c-dia-1-3", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Construire de zéro", description: "2-6 semaines de dev, 3000-15000€ de coûts, maintenance à ta charge, mises à jour manuelles" },
        { id: "n2", label: "Utiliser ClawBot", description: "2-4 heures de configuration, 0€ de dev, maintenance gérée, mises à jour automatiques" },
      ]},
      { id: "m9c-dia-1-3c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est la différence entre construire ta propre maison brique par brique et acheter une maison clé en main que tu peux décorer à ton goût. Le résultat final est le même pour le client." },
      { id: "1-13", type: "separator", style: "dots" },
      {
        id: "1-14",
        type: "heading",
        level: 2,
        text: "Les cas d'usage les plus rentables",
      },
      {
        id: "1-15",
        type: "text",
        html: "<p>ClawBot est particulièrement adapté à ces secteurs :</p><ul><li><strong>E-commerce</strong> : réponse aux questions produits, suivi de commande, recommandations personnalisées.</li><li><strong>Restaurants et hôtels</strong> : réservations, menu, horaires, avis clients.</li><li><strong>Cabinets et professions libérales</strong> : prise de rendez-vous, FAQ juridique/médicale/comptable de premier niveau.</li><li><strong>Agences immobilières</strong> : qualification de leads, infos sur les biens, prise de rendez-vous visite.</li><li><strong>SaaS et startups</strong> : onboarding utilisateur, support technique de niveau 1, documentation interactive.</li></ul>",
      },
      {
        id: "1-16",
        type: "quiz-inline",
        question:
          "Quel est le principal avantage de ClawBot par rapport à la construction d'un chatbot de zéro ?",
        options: [
          { id: "a", text: "ClawBot est gratuit pour les clients" },
          { id: "b", text: "ClawBot réduit drastiquement le temps de mise en place et les coûts, maximisant ta marge" },
          { id: "c", text: "ClawBot remplace totalement le besoin d'un entrepreneur" },
          { id: "d", text: "ClawBot fonctionne uniquement avec WordPress" },
        ],
        correctId: "b",
        explanation:
          "ClawBot te permet de passer de plusieurs semaines de développement à quelques heures de configuration, tout en gardant des marges très élevées puisque les coûts de développement sont quasi nuls.",
      },
      {
        id: "1-17",
        type: "checklist",
        title: "Ce que tu dois retenir de cette leçon",
        items: [
          { id: "c1", text: "Je comprends ce qu'est ClawBot et son positionnement marque blanche" },
          { id: "c2", text: "Je connais les 5 fonctionnalités clés de ClawBot" },
          { id: "c3", text: "Je sais calculer ma marge sur une vente ClawBot" },
          { id: "c4", text: "J'ai identifié au moins 2 secteurs cibles pour vendre ClawBot" },
          { id: "c5", text: "Je comprends pourquoi présenter ClawBot comme MA solution est essentiel" },
        ],
      },
    ]),
    exercise:
      "Identifie 3 entreprises locales (restaurant, cabinet, boutique en ligne) qui bénéficieraient d'un chatbot IA. Pour chacune, liste les 5 questions les plus fréquentes que leurs clients posent. C'est la base de la future base de connaissances ClawBot.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 2 : Installer et configurer ClawBot
  // ═══════════════════════════════════════════════════
  {
    order: 2,
    module: 9,
    title: "Installer et configurer ClawBot",
    slug: "installer-configurer-clawbot",
    duration: "25 min",
    description:
      "Apprendre le processus complet d'installation de ClawBot, de la création d'une instance à la connexion d'une base de connaissances.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Créer ta première instance ClawBot",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Une instance ClawBot, c'est un chatbot indépendant avec sa propre configuration, sa propre base de connaissances et son propre branding. Tu vas créer une instance par client. Le processus est volontairement simple — on a éliminé toute la complexité technique pour que tu puisses te concentrer sur la valeur que tu apportes.</p>",
      },
      {
        id: "2-3",
        type: "steps",
        steps: [
          {
            title: "Accéder au tableau de bord ClawBot",
            description:
              "Connecte-toi à ton espace ALL-IN et accède à la section ClawBot. Tu y trouveras le bouton « Nouvelle instance » pour démarrer.",
            icon: "1️⃣",
          },
          {
            title: "Nommer ton instance",
            description:
              "Donne un nom interne à cette instance (ex : « Chatbot Restaurant Le Provençal »). Ce nom est pour toi — le client ne le verra jamais.",
            icon: "2️⃣",
          },
          {
            title: "Choisir le modèle IA",
            description:
              "Sélectionne le modèle IA adapté : « Standard » pour les usages courants ou « Avancé » pour les cas nécessitant un raisonnement plus poussé.",
            icon: "3️⃣",
          },
          {
            title: "Configurer les paramètres de base",
            description:
              "Langue par défaut, fuseau horaire, message de bienvenue et message quand le bot ne sait pas répondre.",
            icon: "4️⃣",
          },
        ],
      },
      { id: "m9c-dia-2-1h", type: "heading", level: 3, text: "C'est quoi une instance ClawBot ?" },
      { id: "m9c-dia-2-1", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Ton compte ClawBot", description: "Un seul compte pour gérer tous tes clients", children: ["n2", "n3", "n4"] },
        { id: "n2", label: "Instance Restaurant Le Provençal", description: "Sa propre base de connaissances, son propre branding, son propre widget" },
        { id: "n3", label: "Instance Boutique Mode Paris", description: "Configuration totalement indépendante de la première" },
        { id: "n4", label: "Instance Cabinet Avocat Dupont", description: "Chaque client a son propre chatbot isolé" },
      ]},
      { id: "m9c-dia-2-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> une instance, c'est comme un appartement dans un immeuble. Chaque appartement a sa propre déco, ses propres meubles et sa propre serrure. Mais l'immeuble (ClawBot) gère la structure pour tous." },
      { id: "2-4", type: "separator", style: "line" },
      {
        id: "2-5",
        type: "heading",
        level: 2,
        text: "Connecter une base de connaissances",
      },
      {
        id: "2-6",
        type: "text",
        html: "<p>La base de connaissances, c'est le cerveau de ton chatbot. Sans elle, ClawBot est un assistant IA générique. Avec elle, il devient un expert du business de ton client. C'est ce qui fait toute la différence entre un chatbot médiocre et un chatbot qui impressionne.</p>",
      },
      {
        id: "2-7",
        type: "text",
        html: "<p>ClawBot accepte plusieurs formats de sources :</p><ul><li><strong>Documents PDF</strong> : catalogues produits, brochures, manuels, conditions générales.</li><li><strong>Pages web</strong> : ClawBot peut crawler le site du client et indexer automatiquement tout le contenu.</li><li><strong>Fichiers texte / CSV</strong> : FAQ existantes, listes de produits, grilles tarifaires.</li><li><strong>Saisie manuelle</strong> : tu peux écrire directement des paires question/réponse dans l'interface.</li></ul>",
      },
      { id: "m9c-dia-2-2h", type: "heading", level: 3, text: "La qualité du chatbot dépend de la qualité des données" },
      { id: "m9c-dia-2-2", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Réponses précises et naturelles", description: "Le chatbot impressionne les visiteurs et convertit des leads" },
        { id: "n2", label: "Base de connaissances structurée", description: "Des paires question/réponse claires, des infos à jour, des données vérifiées" },
        { id: "n3", label: "Données brutes du client", description: "FAQ existante, emails de support, catalogue produits, infos pratiques" },
      ]},
      { id: "m9c-dia-2-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme former un nouvel employé. Si tu lui donnes un manuel clair et complet, il sera opérationnel en 1 jour. Si tu lui dis juste 'débrouille-toi', il fera des erreurs pendant des semaines." },
      {
        id: "2-8",
        type: "callout",
        variant: "warning",
        title: "Qualité des données = qualité du chatbot",
        html: "La règle d'or : garbage in, garbage out. Si tu alimentes ClawBot avec des informations obsolètes, incomplètes ou mal structurées, le chatbot donnera des réponses médiocres. Prends le temps de vérifier et nettoyer les données avant de les importer.",
      },
      {
        id: "2-9",
        type: "code",
        language: "json",
        filename: "exemple-faq.json",
        code: `[
  {
    "question": "Quels sont vos horaires d'ouverture ?",
    "answer": "Nous sommes ouverts du mardi au samedi, de 11h30 à 14h30 et de 18h30 à 22h30. Fermé le dimanche et le lundi."
  },
  {
    "question": "Acceptez-vous les réservations en ligne ?",
    "answer": "Oui ! Réservez directement sur notre site ou appelez-nous au 01 23 45 67 89. Nous recommandons de réserver 48h à l'avance le week-end."
  },
  {
    "question": "Proposez-vous des options végétariennes ?",
    "answer": "Absolument. Notre carte propose au moins 3 plats végétariens qui changent chaque semaine. Informez-nous de vos allergies lors de la réservation."
  }
]`,
      },
      { id: "m9c-dia-2-3h", type: "heading", level: 3, text: "Le processus de test en 3 niveaux" },
      { id: "m9c-dia-2-3", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Questions courantes", description: "Les 10 questions les plus fréquentes. Le chatbot doit répondre correctement à chacune." },
        { id: "n2", label: "Cas limites", description: "Questions hors sujet, langage familier, fautes de frappe. Le bot doit gérer proprement." },
        { id: "n3", label: "Conversations multi-tours", description: "Un échange de 5-10 messages. Le bot doit garder le contexte et rester cohérent." },
      ]},
      { id: "m9c-dia-2-3c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme tester une voiture avant de la vendre. Tu vérifies d'abord que le moteur tourne (questions courantes), puis les cas extrêmes (freinage d'urgence), puis un long trajet (conversation multi-tours)." },
      { id: "2-10", type: "separator", style: "dots" },
      {
        id: "2-11",
        type: "heading",
        level: 2,
        text: "Tester ton instance avant de livrer",
      },
      {
        id: "2-12",
        type: "text",
        html: "<p>Avant de livrer quoi que ce soit à un client, tu dois tester ton chatbot de manière rigoureuse. Utilise le mode « Aperçu » dans le tableau de bord pour simuler des conversations. Pose les questions que les vrais visiteurs poseront. Vérifie que les réponses sont précises, naturelles et utiles.</p>",
      },
      {
        id: "2-13",
        type: "steps",
        steps: [
          {
            title: "Tester les questions courantes",
            description:
              "Pose les 10 questions les plus fréquentes des clients de ton client. Vérifie que ClawBot répond correctement à chacune.",
            icon: "✅",
          },
          {
            title: "Tester les cas limites",
            description:
              "Pose des questions hors sujet, des questions vagues, des questions en langage familier. Vérifie que ClawBot gère ces cas proprement (redirection, message d'excuse, etc.).",
            icon: "⚠️",
          },
          {
            title: "Tester la conversation multi-tours",
            description:
              "Engage une conversation complète avec plusieurs échanges. Vérifie que ClawBot garde le contexte et reste cohérent sur toute la durée.",
            icon: "🔄",
          },
        ],
      },
      {
        id: "2-14",
        type: "callout",
        variant: "tip",
        title: "Le test du stagiaire",
        html: "Demande à quelqu'un qui ne connaît pas le business de ton client de tester le chatbot. Si cette personne trouve les réponses utiles et naturelles, c'est gagné. Si elle est confuse, il faut enrichir la base de connaissances.",
      },
      {
        id: "2-15",
        type: "quiz-inline",
        question:
          "Quel format n'est PAS accepté nativement par ClawBot pour alimenter la base de connaissances ?",
        options: [
          { id: "a", text: "Documents PDF" },
          { id: "b", text: "Pages web à crawler" },
          { id: "c", text: "Fichiers vidéo MP4" },
          { id: "d", text: "Fichiers texte et CSV" },
        ],
        correctId: "c",
        explanation:
          "ClawBot accepte les PDF, pages web, fichiers texte/CSV et la saisie manuelle. Les fichiers vidéo ne sont pas un format de source de connaissances supporté — il faudrait d'abord extraire le texte (transcription) avant de l'importer.",
      },
      {
        id: "2-16",
        type: "checklist",
        title: "Checklist de configuration",
        items: [
          { id: "c1", text: "J'ai créé ma première instance ClawBot" },
          { id: "c2", text: "J'ai configuré le nom, la langue et le fuseau horaire" },
          { id: "c3", text: "J'ai importé au moins une source de connaissances" },
          { id: "c4", text: "J'ai testé 10+ questions courantes dans l'aperçu" },
          { id: "c5", text: "J'ai testé les cas limites et les questions hors sujet" },
          { id: "c6", text: "Les réponses sont précises et naturelles" },
        ],
      },
    ]),
    exercise:
      "Crée une instance ClawBot de test pour un business fictif de ton choix (boulangerie, cabinet comptable, boutique en ligne). Importe au moins 15 paires question/réponse et teste le chatbot avec 20 questions variées. Note les réponses incorrectes et ajuste la base de connaissances.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 3 : Personnaliser ClawBot pour un client
  // ═══════════════════════════════════════════════════
  {
    order: 3,
    module: 9,
    title: "Personnaliser ClawBot pour un client",
    slug: "personnaliser-clawbot-pour-un-client",
    duration: "30 min",
    description:
      "Maîtriser le white-labeling, ajuster la personnalité et le ton du chatbot, et intégrer les connaissances spécifiques de chaque client.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Le white-labeling : faire de ClawBot le chatbot de ton client",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Le white-labeling, c'est l'art de faire disparaître la technologie derrière ton produit. Ton client ne doit jamais voir « ClawBot » ou « ALL-IN ». Il doit voir SON assistant, avec SES couleurs, SON logo et SON nom. C'est ce qui te permet de facturer un prix premium — tu ne vends pas un outil, tu vends une solution sur mesure.</p>",
      },
      {
        id: "3-3",
        type: "steps",
        steps: [
          {
            title: "Nom et avatar du chatbot",
            description:
              "Choisis un nom qui reflète la marque du client. Pour un cabinet d'avocat : « Maître Bot ». Pour un e-commerce de mode : « Style Assistant ». Ajoute un avatar (logo du client ou icône personnalisée).",
            icon: "🏷️",
          },
          {
            title: "Couleurs et thème visuel",
            description:
              "Applique la charte graphique du client : couleur primaire, couleur secondaire, police de caractères. Le widget doit s'intégrer visuellement au site comme s'il en faisait partie.",
            icon: "🎨",
          },
          {
            title: "Messages personnalisés",
            description:
              "Message de bienvenue, message de fallback (quand le bot ne sait pas), message de clôture. Chaque texte doit refléter le ton de la marque.",
            icon: "💬",
          },
        ],
      },
      {
        id: "3-4",
        type: "code",
        language: "json",
        filename: "config-branding.json",
        code: `{
  "botName": "Sophie - Assistant Le Provençal",
  "avatar": "/images/logo-provencal.png",
  "theme": {
    "primaryColor": "#8B4513",
    "secondaryColor": "#F5DEB3",
    "fontFamily": "Georgia, serif",
    "borderRadius": "12px"
  },
  "messages": {
    "welcome": "Bonjour ! Je suis Sophie, l'assistante du restaurant Le Provençal. Comment puis-je vous aider ? 🌿",
    "fallback": "Je n'ai pas la réponse à cette question. Voulez-vous que je vous mette en contact avec notre équipe ? Appelez-nous au 01 23 45 67 89.",
    "goodbye": "Merci pour votre visite ! À bientôt au Provençal 🍽️"
  }
}`,
      },
      { id: "m9c-dia-3-1h", type: "heading", level: 3, text: "Les 3 couches de personnalisation" },
      { id: "m9c-dia-3-1", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Couche visuelle", description: "Nom, avatar, couleurs, police de caractères — ce que le visiteur voit immédiatement" },
        { id: "n2", label: "Couche comportementale", description: "Ton, personnalité, tutoiement/vouvoiement — comment le bot s'exprime" },
        { id: "n3", label: "Couche contenu", description: "Base de connaissances, FAQ, catalogue — ce que le bot sait répondre" },
      ]},
      { id: "m9c-dia-3-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme habiller un acteur pour un rôle. La couche visuelle, c'est le costume. La couche comportementale, c'est son jeu d'acteur. La couche contenu, c'est le script qu'il a appris." },
      { id: "3-5", type: "separator", style: "dots" },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Ajuster la personnalité et le ton",
      },
      {
        id: "3-7",
        type: "text",
        html: "<p>La personnalité du chatbot est ce qui fait la différence entre une interaction froide et robotique et une conversation engageante. ClawBot te permet de définir un « system prompt » — une instruction qui guide le comportement du bot dans chaque conversation.</p>",
      },
      {
        id: "3-8",
        type: "code",
        language: "text",
        filename: "system-prompt-restaurant.txt",
        code: `Tu es Sophie, l'assistante virtuelle du restaurant Le Provençal, un restaurant gastronomique provençal situé à Aix-en-Provence.

Ton ton est chaleureux, accueillant et légèrement sophistiqué — comme un maître d'hôtel bienveillant.

Règles :
- Utilise le vouvoiement
- Sois enthousiaste sur la cuisine et les produits locaux
- Propose toujours de réserver si le client pose une question sur le menu
- Si on te pose une question hors sujet (politique, météo...), ramène poliment la conversation vers le restaurant
- Ne donne JAMAIS de fausses informations — si tu ne sais pas, oriente vers le téléphone
- Termine chaque réponse par une question ou une suggestion pour engager la conversation`,
      },
      {
        id: "3-9",
        type: "callout",
        variant: "tip",
        title: "Adapte le tutoiement/vouvoiement",
        html: "Un cabinet d'avocats vouvoie ses clients. Une marque de streetwear tutoie les siens. Ce détail semble anodin mais il fait toute la différence dans la perception de professionnalisme du chatbot.",
      },
      { id: "m9c-dia-3-2h", type: "heading", level: 3, text: "Comment le system prompt influence le comportement" },
      { id: "m9c-dia-3-2", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "System prompt", description: "L'instruction invisible qui guide chaque réponse du chatbot" },
        { id: "n2", label: "Ton et vocabulaire", description: "Formel ou décontracté, vouvoiement ou tutoiement" },
        { id: "n3", label: "Limites de réponse", description: "Ce que le bot peut et ne peut pas dire (pas de conseils médicaux, etc.)" },
        { id: "n4", label: "Objectif commercial", description: "Orienter vers la réservation, la prise de RDV ou la capture d'email" },
        { id: "n5", label: "Gestion des hors-sujets", description: "Comment ramener poliment la conversation sur le sujet principal" },
      ]},
      { id: "m9c-dia-3-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> le system prompt, c'est comme la fiche de poste d'un employé. Il définit exactement comment se comporter, quoi dire, quoi ne pas dire, et quel est l'objectif de chaque interaction." },
      { id: "3-10", type: "separator", style: "line" },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Enrichir la base de connaissances client",
      },
      {
        id: "3-12",
        type: "text",
        html: "<p>Quand tu travailles avec un vrai client, la collecte de données est une étape cruciale. Voici les informations à récupérer systématiquement :</p><ul><li><strong>FAQ existante</strong> : le client a probablement déjà une page FAQ sur son site. C'est ta base de départ.</li><li><strong>Emails du support</strong> : demande les 50 derniers emails reçus — tu y trouveras les vraies questions des vrais clients.</li><li><strong>Catalogue produits/services</strong> : prix, descriptions, disponibilités, conditions.</li><li><strong>Informations pratiques</strong> : horaires, adresse, zones de livraison, moyens de paiement, politique de retour.</li><li><strong>Ton de communication</strong> : demande des exemples de newsletters, posts réseaux sociaux, plaquettes commerciales.</li></ul>",
      },
      { id: "m9c-dia-3-3h", type: "heading", level: 3, text: "Les 5 sources de données à collecter chez chaque client" },
      { id: "m9c-dia-3-3", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "FAQ existante", description: "La page FAQ du site du client — c'est le point de départ le plus rapide" },
        { id: "n2", label: "Emails de support", description: "Les 50 derniers emails reçus — les vraies questions des vrais clients" },
        { id: "n3", label: "Catalogue produits/services", description: "Prix, descriptions, disponibilités, conditions de vente" },
        { id: "n4", label: "Infos pratiques", description: "Horaires, adresse, livraison, moyens de paiement, politique de retour" },
        { id: "n5", label: "Exemples de communication", description: "Newsletters, posts réseaux sociaux, plaquettes — pour capter le ton de la marque" },
      ]},
      { id: "m9c-dia-3-3c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme préparer un dossier pour un nouvel employé. Plus le dossier est complet, plus il sera autonome rapidement. Un dossier incomplet = un employé qui invente des réponses." },
      {
        id: "3-13",
        type: "callout",
        variant: "warning",
        title: "Attention aux données sensibles",
        html: "Ne stocke jamais de données personnelles de clients finaux (noms, emails, numéros de carte) dans la base de connaissances. ClawBot est fait pour répondre à des questions générales, pas pour stocker des informations confidentielles.",
      },
      {
        id: "3-14",
        type: "comparison",
        headers: ["Ton du client", "Exemple de system prompt", "Résultat attendu"],
        rows: [
          {
            cells: [
              "Professionnel / Corporate",
              "Vous êtes un conseiller expert, formel et précis.",
              "Réponses structurées, vouvoiement, vocabulaire soutenu",
            ],
          },
          {
            cells: [
              "Décontracté / Startup",
              "Tu es un assistant cool et direct, toujours prêt à aider.",
              "Réponses courtes, tutoiement, emojis modérés",
            ],
          },
          {
            cells: [
              "Luxe / Haut de gamme",
              "Vous incarnez l'excellence et l'attention aux détails.",
              "Réponses élégantes, suggestions personnalisées, ton exclusif",
            ],
          },
        ],
      },
      {
        id: "3-15",
        type: "quiz-inline",
        question:
          "Quelle est la première source de données à demander à un client pour alimenter ClawBot ?",
        options: [
          { id: "a", text: "Son code source" },
          { id: "b", text: "Les 50 derniers emails de support et sa FAQ existante" },
          { id: "c", text: "Ses identifiants de réseaux sociaux" },
          { id: "d", text: "Son chiffre d'affaires" },
        ],
        correctId: "b",
        explanation:
          "Les emails de support contiennent les vraies questions posées par les vrais clients. Combinés à la FAQ existante, ils constituent la base de connaissances la plus pertinente et la plus rapide à constituer.",
      },
      {
        id: "3-16",
        type: "checklist",
        title: "Checklist de personnalisation",
        items: [
          { id: "c1", text: "J'ai configuré le nom, l'avatar et les couleurs du client" },
          { id: "c2", text: "J'ai rédigé un system prompt adapté au ton de la marque" },
          { id: "c3", text: "J'ai défini les messages de bienvenue, fallback et clôture" },
          { id: "c4", text: "J'ai importé la FAQ, les emails de support et le catalogue" },
          { id: "c5", text: "J'ai vérifié qu'aucune donnée sensible n'est dans la base de connaissances" },
          { id: "c6", text: "J'ai testé le chatbot avec le tutoiement/vouvoiement correct" },
        ],
      },
    ]),
    exercise:
      "Prends le business fictif de la leçon précédente et personnalise complètement l'instance ClawBot : nom du bot, couleurs de marque, system prompt détaillé (10 lignes minimum) et messages personnalisés. Teste 15 conversations pour vérifier que le ton est cohérent.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 4 : Intégrer ClawBot sur un site web
  // ═══════════════════════════════════════════════════
  {
    order: 4,
    module: 9,
    title: "Intégrer ClawBot sur un site web",
    slug: "integrer-clawbot-site-web",
    duration: "25 min",
    description:
      "Maîtriser les différentes méthodes d'intégration : widget JS, iframe et composant React, avec personnalisation du style.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Les 3 méthodes d'intégration",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>ClawBot propose trois façons de l'intégrer sur un site web. Le choix dépend du contexte technique du client. Dans 90 % des cas, le widget JS suffit. Mais en tant que professionnel, tu dois maîtriser les trois pour répondre à n'importe quelle situation.</p>",
      },
      {
        id: "4-3",
        type: "comparison",
        headers: ["Méthode", "Difficulté", "Cas d'usage"],
        rows: [
          { cells: ["Widget JS (script)", "Facile", "Sites WordPress, Wix, Shopify, HTML statique"] },
          { cells: ["Iframe", "Facile", "Pages dédiées, intégration dans un espace restreint"] },
          { cells: ["Composant React", "Intermédiaire", "Applications React/Next.js, contrôle total"] },
        ],
      },
      { id: "m9c-dia-4-1h", type: "heading", level: 3, text: "Quelle méthode d'intégration choisir ?" },
      { id: "m9c-dia-4-1", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Quel est le site du client ?", description: "Le choix de méthode dépend de la technologie du site", children: ["n2", "n3", "n4"] },
        { id: "n2", label: "WordPress / Wix / Shopify → Widget JS", description: "La méthode universelle : copier-coller un script. 2 minutes. Compatible avec tout." },
        { id: "n3", label: "Page dédiée / espace restreint → Iframe", description: "Intégrer le chatbot dans une zone précise de la page plutôt qu'en bulle flottante." },
        { id: "n4", label: "App React / Next.js → Composant React", description: "Contrôle total, données dynamiques, intégration native dans l'application." },
      ]},
      { id: "m9c-dia-4-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> le widget JS, c'est comme coller un autocollant sur une vitrine. L'iframe, c'est comme accrocher un tableau dans un cadre. Le composant React, c'est comme intégrer un meuble sur mesure dans la pièce." },
      { id: "4-4", type: "separator", style: "line" },
      {
        id: "4-5",
        type: "heading",
        level: 2,
        text: "Méthode 1 : Le widget JS (recommandé)",
      },
      {
        id: "4-6",
        type: "text",
        html: "<p>C'est la méthode la plus simple et la plus universelle. Tu copies un snippet de code et tu le colles juste avant la balise <code>&lt;/body&gt;</code> du site de ton client. Le widget apparaît en bas à droite sous forme de bulle cliquable.</p>",
      },
      {
        id: "4-7",
        type: "code",
        language: "html",
        filename: "integration-widget.html",
        code: `<!-- Intégration ClawBot - Widget -->
<script>
  window.ClawBotConfig = {
    instanceId: "cb_restaurant_provencal_a1b2c3",
    position: "bottom-right",
    theme: "custom",
    primaryColor: "#8B4513",
    locale: "fr"
  };
</script>
<script
  src="https://cdn.clawbot.ai/widget.js"
  async
  defer>
</script>`,
      },
      {
        id: "4-8",
        type: "callout",
        variant: "info",
        title: "Compatible avec tout",
        html: "Ce widget fonctionne sur n'importe quel site qui accepte du HTML : WordPress (via un plugin « Header/Footer Scripts »), Shopify (dans le fichier theme.liquid), Wix (via « Code personnalisé »), Squarespace, et bien sûr tout site HTML/CSS classique.",
      },
      { id: "4-9", type: "separator", style: "dots" },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Méthode 2 : L'iframe",
      },
      {
        id: "4-11",
        type: "text",
        html: "<p>L'iframe est utile quand tu veux intégrer le chatbot dans une zone spécifique de la page plutôt qu'en bulle flottante. Par exemple, une page « Contactez-nous » avec le chatbot intégré directement dans le contenu.</p>",
      },
      {
        id: "4-12",
        type: "code",
        language: "html",
        filename: "integration-iframe.html",
        code: `<!-- Intégration ClawBot - Iframe -->
<iframe
  src="https://app.clawbot.ai/embed/cb_restaurant_provencal_a1b2c3"
  width="100%"
  height="600"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.1);"
  title="Assistant Le Provençal"
  allow="microphone">
</iframe>`,
      },
      { id: "4-13", type: "separator", style: "dots" },
      {
        id: "4-14",
        type: "heading",
        level: 2,
        text: "Méthode 3 : Le composant React",
      },
      {
        id: "4-15",
        type: "text",
        html: "<p>Pour les clients qui ont une application React ou Next.js, tu peux utiliser le composant React officiel. Cela donne un contrôle total sur l'intégration et permet de passer des données dynamiques (identité de l'utilisateur connecté, page actuelle, etc.).</p>",
      },
      {
        id: "4-16",
        type: "code",
        language: "tsx",
        filename: "ClawBotWidget.tsx",
        code: `import { ClawBot } from "@clawbot/react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">
        Besoin d'aide ?
      </h1>
      <ClawBot
        instanceId="cb_restaurant_provencal_a1b2c3"
        theme={{
          primaryColor: "#8B4513",
          borderRadius: "12px",
        }}
        user={{
          name: "Visiteur",
          locale: "fr",
        }}
        onLeadCapture={(data) => {
          console.log("Lead capturé :", data);
          // Envoyer vers ton CRM
        }}
      />
    </div>
  );
}`,
      },
      { id: "m9c-dia-4-2h", type: "heading", level: 3, text: "Le parcours d'un visiteur avec le widget" },
      { id: "m9c-dia-4-2", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Page chargée", description: "Le widget se charge en arrière-plan (async/defer) sans ralentir le site" },
        { id: "n2", label: "Bulle apparaît", description: "Après 2-3 secondes, une petite bulle de chat apparaît en bas à droite" },
        { id: "n3", label: "Visiteur clique", description: "La fenêtre de chat s'ouvre avec le message de bienvenue personnalisé" },
        { id: "n4", label: "Conversation commence", description: "Le visiteur pose sa question et reçoit une réponse en 2 secondes" },
      ]},
      { id: "m9c-dia-4-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme un vendeur discret dans un magasin. Il ne saute pas sur le client à l'entrée, mais il est visible et disponible si le client a une question." },
      {
        id: "4-17",
        type: "heading",
        level: 3,
        text: "Personnaliser le style pour matcher la marque",
      },
      {
        id: "4-18",
        type: "code",
        language: "css",
        filename: "clawbot-custom.css",
        code: `/* Surcharger les styles du widget ClawBot */
.clawbot-widget {
  --cb-primary: #8B4513;
  --cb-secondary: #F5DEB3;
  --cb-font: 'Georgia', serif;
  --cb-radius: 12px;
  --cb-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* Personnaliser la bulle d'ouverture */
.clawbot-trigger {
  width: 64px;
  height: 64px;
  background: var(--cb-primary);
}

/* Adapter au mobile */
@media (max-width: 768px) {
  .clawbot-container {
    width: 100vw;
    height: 70vh;
    border-radius: 16px 16px 0 0;
  }
}`,
      },
      {
        id: "4-19",
        type: "quiz-inline",
        question:
          "Quelle méthode d'intégration recommanderais-tu pour un client qui a un site WordPress sans développeur ?",
        options: [
          { id: "a", text: "Le composant React" },
          { id: "b", text: "L'iframe dans le footer" },
          { id: "c", text: "Le widget JS via un plugin Header/Footer Scripts" },
          { id: "d", text: "Une API REST custom" },
        ],
        correctId: "c",
        explanation:
          "Le widget JS est la méthode la plus simple et universelle. Pour un site WordPress sans développeur, il suffit d'installer un plugin gratuit comme « Insert Headers and Footers » et de coller le script. Aucune compétence technique requise.",
      },
      {
        id: "4-20",
        type: "checklist",
        title: "Checklist d'intégration",
        items: [
          { id: "c1", text: "J'ai identifié la bonne méthode d'intégration pour le site du client" },
          { id: "c2", text: "Le widget apparaît correctement sur desktop et mobile" },
          { id: "c3", text: "Les couleurs et polices correspondent à la charte graphique du client" },
          { id: "c4", text: "Le chatbot se charge sans ralentir le site (async/defer)" },
          { id: "c5", text: "J'ai testé l'intégration sur au moins 3 navigateurs différents" },
        ],
      },
    ]),
    exercise:
      "Crée une page HTML simple simulant le site d'un client. Intègre ClawBot avec la méthode widget JS et personnalise les couleurs. Puis crée une deuxième page avec la méthode iframe. Compare le rendu et note les avantages de chaque approche.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 5 : ClawBot avancé — multi-langues et analytics
  // ═══════════════════════════════════════════════════
  {
    order: 5,
    module: 9,
    title: "ClawBot avancé : multi-langues et analytics",
    slug: "clawbot-avance-multi-langues-analytics",
    duration: "30 min",
    description:
      "Configurer le support multi-langues, exploiter les analytics de conversation et mettre en place la capture de leads automatique.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Le support multi-langues",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Si ton client a une audience internationale — ou même simplement une clientèle touristique — le multi-langues est un argument de vente massif. ClawBot détecte automatiquement la langue du visiteur grâce aux paramètres du navigateur et peut basculer dynamiquement entre les langues.</p>",
      },
      {
        id: "5-3",
        type: "text",
        html: "<p>Il y a deux approches pour le multi-langues :</p><ul><li><strong>Traduction automatique</strong> : ClawBot traduit ses réponses à la volée. Rapide à mettre en place mais moins précis pour le vocabulaire métier spécialisé.</li><li><strong>Bases de connaissances séparées</strong> : tu crées une base par langue avec du contenu spécifiquement rédigé. Plus de travail mais résultat impeccable, surtout pour les termes techniques.</li></ul>",
      },
      {
        id: "5-4",
        type: "code",
        language: "json",
        filename: "config-multilang.json",
        code: `{
  "languages": {
    "default": "fr",
    "supported": ["fr", "en", "es", "de", "ar"],
    "detection": "auto",
    "fallback": "fr"
  },
  "translations": {
    "welcome": {
      "fr": "Bonjour ! Comment puis-je vous aider ?",
      "en": "Hello! How can I help you?",
      "es": "¡Hola! ¿Cómo puedo ayudarte?",
      "de": "Hallo! Wie kann ich Ihnen helfen?",
      "ar": "مرحبا! كيف يمكنني مساعدتك؟"
    }
  }
}`,
      },
      {
        id: "5-5",
        type: "callout",
        variant: "tip",
        title: "Argument commercial puissant",
        html: "Un chatbot multi-langues qui fonctionne en arabe, en anglais et en français pour un hôtel sur la Côte d'Azur ? C'est un service que tu peux facilement facturer 500 € de plus que la version monolingue. Le client voit immédiatement la valeur.",
      },
      { id: "m9c-dia-5-1h", type: "heading", level: 3, text: "Traduction automatique vs bases séparées" },
      { id: "m9c-dia-5-1", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Traduction automatique", description: "Rapide à mettre en place. L'IA traduit à la volée. Moins précis pour le vocabulaire métier spécialisé." },
        { id: "n2", label: "Bases de connaissances séparées", description: "Plus de travail initial. Contenu rédigé par langue. Résultat impeccable pour les termes techniques." },
      ]},
      { id: "m9c-dia-5-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> la traduction automatique, c'est comme utiliser Google Translate pour un menu de restaurant. Ça marche pour les plats simples, mais 'confit de canard' devient parfois 'duck jam'. Les bases séparées, c'est comme embaucher un traducteur professionnel." },
      { id: "5-dia1h", type: "heading", level: 3, text: "Comment le multi-langues fonctionne concrètement ?" },
      { id: "5-dia1", type: "diagram", variant: "process", nodes: [
        { id: "sn1", label: "Le visiteur ouvre le chat", description: "Son navigateur envoie automatiquement sa langue preferee (fr, en, es...)" },
        { id: "sn2", label: "ClawBot detecte la langue", description: "Il lit les parametres du navigateur et choisit la langue de reponse" },
        { id: "sn3", label: "Il cherche dans la bonne base", description: "Soit il traduit automatiquement, soit il utilise une base de connaissances dediee" },
        { id: "sn4", label: "Il repond dans la langue du visiteur", description: "Le visiteur ne voit rien de technique. Il parle dans sa langue et recoit une reponse naturelle." },
      ]},
      { id: "5-dia1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme un receptionniste d'hotel international qui parle 5 langues. Le client parle dans sa langue, le receptionniste repond dans la meme langue. Naturel et fluide." },
      { id: "5-6", type: "separator", style: "line" },
      {
        id: "5-7",
        type: "heading",
        level: 2,
        text: "Le tableau de bord analytics",
      },
      {
        id: "5-8",
        type: "text",
        html: "<p>Les analytics de ClawBot ne sont pas juste des chiffres — ce sont des arguments de rétention client. Chaque mois, tu envoies un rapport à ton client avec les données clés, et il voit concrètement la valeur de ce qu'il paie. C'est ce qui transforme un client ponctuel en revenu récurrent.</p>",
      },
      {
        id: "5-9",
        type: "steps",
        steps: [
          {
            title: "Volume de conversations",
            description:
              "Nombre total de conversations, messages échangés et durée moyenne. Montre l'activité réelle du chatbot et combien de visiteurs il gère.",
            icon: "📈",
          },
          {
            title: "Questions les plus posées",
            description:
              "Le top 20 des questions récurrentes. Essentiel pour enrichir la base de connaissances et identifier les lacunes.",
            icon: "❓",
          },
          {
            title: "Taux de résolution",
            description:
              "Pourcentage de conversations où le chatbot a répondu avec succès vs celles où il a dû escalader. Un bon taux : 75-85 %.",
            icon: "✅",
          },
          {
            title: "Satisfaction utilisateur",
            description:
              "Note de satisfaction post-conversation (pouce haut/bas ou étoiles). Permet d'identifier les points d'amélioration.",
            icon: "⭐",
          },
          {
            title: "Leads capturés",
            description:
              "Emails, numéros de téléphone et demandes de rappel collectés automatiquement pendant les conversations.",
            icon: "🎯",
          },
        ],
      },
      { id: "m9c-dia-5-2h", type: "heading", level: 3, text: "Le cycle vertueux des analytics" },
      { id: "m9c-dia-5-2", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Collecter les données", description: "ClawBot enregistre chaque conversation : questions posées, réponses données, satisfaction" },
        { id: "n2", label: "Analyser les tendances", description: "Tu identifies les questions fréquentes, les lacunes et les sujets émergents" },
        { id: "n3", label: "Enrichir la base", description: "Tu ajoutes les réponses manquantes et améliores les réponses existantes" },
        { id: "n4", label: "Améliorer les KPIs", description: "Le taux de résolution monte, la satisfaction augmente, le client est content" },
      ]},
      { id: "m9c-dia-5-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme un serveur qui note les plats les plus demandés et les plaintes des clients. Chaque mois, le chef ajuste le menu en conséquence. Le restaurant s'améliore en continu." },
      { id: "5-10", type: "separator", style: "dots" },
      {
        id: "5-11",
        type: "heading",
        level: 2,
        text: "Configurer la capture de leads",
      },
      {
        id: "5-12",
        type: "text",
        html: "<p>La capture de leads est souvent l'argument qui fait signer le client. Un chatbot qui répond aux questions, c'est bien. Un chatbot qui répond aux questions ET capture les coordonnées des visiteurs intéressés, c'est un outil de vente.</p>",
      },
      {
        id: "5-13",
        type: "code",
        language: "json",
        filename: "config-lead-capture.json",
        code: `{
  "leadCapture": {
    "enabled": true,
    "trigger": "after_3_messages",
    "fields": [
      { "name": "email", "required": true, "label": "Votre email" },
      { "name": "phone", "required": false, "label": "Votre téléphone (optionnel)" },
      { "name": "need", "required": false, "label": "Que recherchez-vous ?" }
    ],
    "message": "Pour mieux vous aider, puis-je avoir vos coordonnées ? Notre équipe pourra vous recontacter personnellement.",
    "webhook": "https://your-domain.vercel.app/api/webhooks/leads"
  }
}`,
      },
      {
        id: "5-14",
        type: "callout",
        variant: "info",
        title: "Connexion CRM",
        html: "Les leads capturés peuvent être envoyés automatiquement vers le CRM du client (HubSpot, Pipedrive, Brevo…) via webhook ou intégration native. C'est un service additionnel que tu peux facturer 300-500 € de setup.",
      },
      {
        id: "5-15",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "n1", label: "Visiteur pose une question", children: ["n2"] },
          { id: "n2", label: "ClawBot répond (3 messages)", children: ["n3"] },
          { id: "n3", label: "Formulaire de lead affiché", children: ["n4", "n5"] },
          { id: "n4", label: "Lead capturé → webhook → CRM", description: "Email automatique au client" },
          { id: "n5", label: "Visiteur refuse → conversation continue", description: "Pas de blocage" },
        ],
      },
      {
        id: "5-16",
        type: "quiz-inline",
        question:
          "Quel est le meilleur moment pour déclencher la capture de leads dans un chatbot ?",
        options: [
          { id: "a", text: "Dès le premier message, avant toute réponse" },
          { id: "b", text: "Après 2-3 échanges, quand le visiteur est engagé dans la conversation" },
          { id: "c", text: "Uniquement à la fin de la conversation" },
          { id: "d", text: "Jamais — c'est intrusif" },
        ],
        correctId: "b",
        explanation:
          "Déclencher la capture après 2-3 messages est optimal : le visiteur a obtenu de la valeur (des réponses) et est engagé dans la conversation. Trop tôt, c'est agressif. Trop tard, le visiteur est peut-être déjà parti.",
      },
      {
        id: "5-17",
        type: "checklist",
        title: "Checklist fonctionnalités avancées",
        items: [
          { id: "c1", text: "J'ai configuré les langues supportées et la détection automatique" },
          { id: "c2", text: "J'ai testé le chatbot dans au moins 2 langues différentes" },
          { id: "c3", text: "Je sais lire et interpréter le tableau de bord analytics" },
          { id: "c4", text: "La capture de leads est configurée avec le bon timing" },
          { id: "c5", text: "Le webhook envoie les leads vers le CRM ou un email" },
          { id: "c6", text: "J'ai préparé un template de rapport mensuel pour le client" },
        ],
      },
    ]),
    exercise:
      "Configure le multi-langues (français + anglais minimum) sur ton instance de test. Active la capture de leads avec un webhook Vercel ou un script Node.js custom. Teste le parcours complet : visiteur pose 3 questions → formulaire de lead → données reçues dans ton système. Crée un template de rapport mensuel avec les KPIs clés.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 6 : Déployer et maintenir ClawBot en production
  // ═══════════════════════════════════════════════════
  {
    order: 6,
    module: 9,
    title: "Déployer et maintenir ClawBot en production",
    slug: "deployer-maintenir-clawbot-production",
    duration: "25 min",
    description:
      "Maîtriser le passage en production, le monitoring, la mise à jour de la base de connaissances et la gestion des cas limites.",
    content: blocks([
      {
        id: "6-1",
        type: "heading",
        level: 2,
        text: "La checklist de mise en production",
      },
      {
        id: "6-2",
        type: "text",
        html: "<p>Passer en production, c'est le moment de vérité. Un bug en test, c'est anodin. Un bug en production, devant les vrais clients de ton client, c'est une catastrophe pour ta réputation. Voici la procédure de lancement que tu dois suivre à chaque déploiement.</p>",
      },
      {
        id: "6-3",
        type: "steps",
        steps: [
          {
            title: "Validation finale du contenu",
            description:
              "Relis chaque réponse de la base de connaissances avec le client. Fais-lui valider les prix, horaires, descriptions produits. Aucune information ne doit être approximative.",
            icon: "📋",
          },
          {
            title: "Test sur l'environnement réel",
            description:
              "Intègre le widget sur une page de test du site du client (pas encore publique). Teste sur mobile, tablette et desktop. Vérifie la vitesse de chargement.",
            icon: "🧪",
          },
          {
            title: "Configuration des alertes",
            description:
              "Active les notifications par email quand le chatbot ne sait pas répondre à une question (taux de fallback). Tu seras alerté des lacunes en temps réel.",
            icon: "🔔",
          },
          {
            title: "Go live progressif",
            description:
              "Lance d'abord sur une seule page (la page Contact par exemple) avant de déployer sur tout le site. Observe les conversations pendant 48h.",
            icon: "🚀",
          },
        ],
      },
      { id: "m9c-dia-6-1h", type: "heading", level: 3, text: "Les 4 étapes d'une mise en production réussie" },
      { id: "m9c-dia-6-1", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Validation contenu", description: "Le client relit et approuve chaque réponse de la base de connaissances" },
        { id: "n2", label: "Test environnement réel", description: "Widget intégré sur une page de test, vérifié sur mobile, tablette et desktop" },
        { id: "n3", label: "Go live progressif", description: "Déploiement sur une seule page (Contact) puis observation pendant 48h" },
        { id: "n4", label: "Déploiement complet", description: "Extension à tout le site une fois les résultats validés" },
      ]},
      { id: "m9c-dia-6-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme ouvrir un nouveau restaurant. Tu fais d'abord un 'soft opening' pour les proches, tu corriges les problèmes, et ensuite tu ouvres au grand public. Jamais l'inverse." },
      { id: "6-4", type: "separator", style: "line" },
      {
        id: "6-5",
        type: "heading",
        level: 2,
        text: "Monitoring : garder un œil sur ton chatbot",
      },
      {
        id: "6-6",
        type: "text",
        html: "<p>Un chatbot en production n'est pas un produit « fire and forget ». Tu dois le surveiller activement, surtout les premières semaines. C'est aussi ce qui justifie ton abonnement mensuel de maintenance auprès du client.</p>",
      },
      {
        id: "6-7",
        type: "comparison",
        headers: ["Indicateur", "Seuil acceptable", "Action si hors seuil"],
        rows: [
          { cells: ["Taux de résolution", "> 75 %", "Enrichir la base de connaissances avec les questions non résolues"] },
          { cells: ["Temps de réponse", "< 3 secondes", "Vérifier la taille de la base et optimiser"] },
          { cells: ["Taux de satisfaction", "> 80 %", "Analyser les conversations mal notées et ajuster le ton"] },
          { cells: ["Taux de fallback", "< 20 %", "Ajouter les réponses manquantes identifiées"] },
          { cells: ["Leads capturés/semaine", "Objectif client", "Ajuster le timing et le message de capture"] },
        ],
      },
      {
        id: "6-8",
        type: "callout",
        variant: "success",
        title: "Le rapport mensuel = rétention client",
        html: "Chaque mois, envoie un rapport à ton client avec ces KPIs. Montre les progrès : « Le taux de résolution est passé de 72 % à 84 % ce mois-ci. » C'est la preuve concrète que ton service apporte de la valeur. Un client qui voit des résultats ne résilie jamais.",
      },
      { id: "m9c-dia-6-2h", type: "heading", level: 3, text: "Le cycle de maintenance mensuel" },
      { id: "m9c-dia-6-2", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Analyser les fallbacks", description: "Chaque semaine, regarde les questions sans réponse et identifie les lacunes" },
        { id: "n2", label: "Enrichir la base", description: "Ajoute les réponses manquantes et corrige les informations obsolètes" },
        { id: "n3", label: "Envoyer le rapport client", description: "KPIs du mois : conversations, résolution, leads, satisfaction" },
        { id: "n4", label: "Planifier les évolutions", description: "Nouvelles fonctionnalités demandées, nouveaux contenus, ajustements de ton" },
      ]},
      { id: "m9c-dia-6-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme l'entretien d'une voiture. Tu fais la vidange régulièrement (mise à jour de la base), tu vérifies les freins (monitoring), et tu préviens les pannes avant qu'elles n'arrivent." },
      { id: "6-9", type: "separator", style: "dots" },
      {
        id: "6-10",
        type: "heading",
        level: 2,
        text: "Mettre à jour la base de connaissances",
      },
      {
        id: "6-11",
        type: "text",
        html: "<p>Les informations changent : nouveaux produits, nouveaux prix, nouveaux horaires, nouvelle politique de retour. La base de connaissances doit être vivante, pas figée. Mets en place un processus de mise à jour régulier.</p>",
      },
      {
        id: "6-12",
        type: "steps",
        steps: [
          {
            title: "Revue hebdomadaire des fallbacks",
            description:
              "Chaque semaine, consulte les questions auxquelles ClawBot n'a pas su répondre. Ajoute les réponses manquantes.",
            icon: "📅",
          },
          {
            title: "Mise à jour trimestrielle du contenu",
            description:
              "Tous les 3 mois, revois l'intégralité de la base avec ton client. Supprime les infos obsolètes, ajoute les nouveautés.",
            icon: "🔄",
          },
          {
            title: "Processus de notification client",
            description:
              "Donne à ton client un moyen simple de te signaler des changements (un formulaire, un email dédié). Ne dépends pas de sa mémoire.",
            icon: "📧",
          },
        ],
      },
      {
        id: "6-13",
        type: "heading",
        level: 3,
        text: "Gérer les cas limites",
      },
      {
        id: "6-14",
        type: "text",
        html: "<p>Les vrais utilisateurs font des choses que tu n'as pas prévues. Voici les cas limites les plus courants et comment les gérer :</p><ul><li><strong>Questions inappropriées</strong> : configure un filtre de contenu qui redirige poliment vers le sujet principal.</li><li><strong>Tentatives de manipulation du bot</strong> : certains utilisateurs vont essayer de faire dire n'importe quoi au chatbot. Le system prompt doit inclure des garde-fous clairs.</li><li><strong>Longues conversations sans fin</strong> : configure une limite de messages par session (ex : 30 messages) avec un message d'escalade vers un humain.</li><li><strong>Questions sensibles</strong> : le chatbot ne doit jamais donner de conseils médicaux, juridiques ou financiers. Configure des réponses de redirection vers des professionnels.</li></ul>",
      },
      {
        id: "6-15",
        type: "quiz-inline",
        question:
          "Quel est le premier indicateur à surveiller pendant les 48 premières heures après un lancement en production ?",
        options: [
          { id: "a", text: "Le nombre total de visiteurs sur le site" },
          { id: "b", text: "Le taux de fallback — les questions auxquelles le bot ne sait pas répondre" },
          { id: "c", text: "Le nombre de leads capturés" },
          { id: "d", text: "La vitesse de chargement du site" },
        ],
        correctId: "b",
        explanation:
          "Le taux de fallback est l'indicateur le plus critique au lancement. Il te montre immédiatement les lacunes de ta base de connaissances. Si trop de questions restent sans réponse, tu dois enrichir le contenu rapidement avant que les visiteurs n'aient une mauvaise expérience.",
      },
      {
        id: "6-16",
        type: "checklist",
        title: "Checklist de mise en production",
        items: [
          { id: "c1", text: "Le contenu a été validé par le client" },
          { id: "c2", text: "Le widget fonctionne sur mobile, tablette et desktop" },
          { id: "c3", text: "Les alertes de fallback sont configurées" },
          { id: "c4", text: "Le lancement se fait d'abord sur une page avant tout le site" },
          { id: "c5", text: "J'ai un processus de mise à jour de la base de connaissances" },
          { id: "c6", text: "Les cas limites sont gérés dans le system prompt" },
        ],
      },
    ]),
    exercise:
      "Rédige un processus complet de mise en production en 10 étapes pour un client réel. Inclus la checklist de validation, le planning de lancement progressif et le template de rapport mensuel que tu enverras. Simule les 5 questions les plus improbables qu'un visiteur pourrait poser et prépare les réponses de fallback.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 7 : Vendre ClawBot — pricing et argumentaire
  // ═══════════════════════════════════════════════════
  {
    order: 7,
    module: 9,
    title: "Vendre ClawBot : pricing et argumentaire",
    slug: "vendre-clawbot-pricing-argumentaire",
    duration: "20 min",
    description:
      "Construire une offre commerciale irrésistible autour de ClawBot, avec des stratégies de pricing et des études de cas concrètes.",
    content: blocks([
      {
        id: "7-1",
        type: "heading",
        level: 2,
        text: "Construire ton offre ClawBot",
      },
      {
        id: "7-2",
        type: "text",
        html: "<p>Tu ne vends pas un chatbot. Tu vends une réduction du temps de réponse client, une disponibilité 24h/24, une capture de leads automatique et une expérience client premium. La technologie est un moyen, pas une fin. Ton pitch ne doit jamais commencer par « j'ai un super outil IA » mais par « je peux diviser par 5 le temps que vous passez à répondre aux mêmes questions ».</p>",
      },
      {
        id: "7-3",
        type: "text",
        html: "<p>Voici la structure d'une offre ClawBot qui convertit :</p><ul><li><strong>La promesse</strong> : un résultat mesurable (« Réduisez de 80 % les questions répétitives »).</li><li><strong>Le mécanisme</strong> : comment ça marche en 3 phrases simples (pas de jargon technique).</li><li><strong>Les livrables</strong> : ce que le client reçoit concrètement.</li><li><strong>La garantie</strong> : ce qui se passe si le résultat n'est pas au rendez-vous.</li></ul>",
      },
      { id: "m9c-dia-7-1h", type: "heading", level: 3, text: "Les 4 piliers d'une offre qui convertit" },
      { id: "m9c-dia-7-1", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "La promesse", description: "Un résultat mesurable : 'Réduisez de 80% les questions répétitives'" },
        { id: "n2", label: "Le mécanisme", description: "Comment ça marche en 3 phrases simples, sans jargon technique" },
        { id: "n3", label: "Les livrables", description: "Ce que le client reçoit concrètement : chatbot configuré, widget intégré, rapport mensuel" },
        { id: "n4", label: "La garantie", description: "Ce qui se passe si le résultat n'est pas au rendez-vous : période d'essai, satisfaction" },
      ]},
      { id: "m9c-dia-7-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme vendre un forfait téléphone. Le client ne veut pas savoir comment fonctionne la 5G — il veut savoir combien de Go il a, combien ça coûte, et s'il peut résilier facilement." },
      { id: "7-4", type: "separator", style: "line" },
      {
        id: "7-5",
        type: "heading",
        level: 2,
        text: "Les 3 formules de pricing",
      },
      {
        id: "7-6",
        type: "comparison",
        headers: ["", "Starter", "Pro", "Premium"],
        rows: [
          { cells: ["Prix setup", "990 €", "1 990 €", "3 490 €"] },
          { cells: ["Abonnement mensuel", "149 €/mois", "299 €/mois", "499 €/mois"] },
          { cells: ["Base de connaissances", "50 entrées", "200 entrées", "Illimité"] },
          { cells: ["Langues", "1 langue", "3 langues", "Illimité"] },
          { cells: ["Capture de leads", "Email seul", "Email + téléphone", "Email + téléphone + CRM"] },
          { cells: ["Rapport mensuel", "Non", "Oui (automatique)", "Oui (personnalisé + call)"] },
          { cells: ["Mises à jour KB", "Trimestrielle", "Mensuelle", "Hebdomadaire"] },
          { cells: ["Support", "Email (48h)", "Email (24h)", "Prioritaire (4h)"] },
        ],
      },
      {
        id: "7-7",
        type: "callout",
        variant: "tip",
        title: "L'effet d'ancrage",
        html: "Présente toujours les 3 formules en même temps, en commençant par la plus chère. Le cerveau du prospect ancre sur le prix Premium à 3 490 €. Quand il voit le Pro à 1 990 €, ça lui paraît raisonnable. C'est un biais cognitif bien documenté — utilise-le à ton avantage.",
      },
      { id: "m9c-dia-7-2h", type: "heading", level: 3, text: "Le parcours d'achat du client type" },
      { id: "m9c-dia-7-2", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Prise de conscience", description: "Le client réalise qu'il perd du temps à répondre aux mêmes questions" },
        { id: "n2", label: "Découverte de ton offre", description: "Via LinkedIn, cold email ou bouche-à-oreille — il découvre que ça peut s'automatiser" },
        { id: "n3", label: "Appel découverte", description: "Tu poses les bonnes questions, tu calcules son ROI, tu présentes les 3 formules" },
        { id: "n4", label: "Décision et signature", description: "L'effet d'ancrage fait son travail — le client choisit généralement la formule Pro" },
      ]},
      { id: "m9c-dia-7-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme acheter un meuble IKEA. D'abord tu réalises que ton étagère est trop petite (prise de conscience), puis tu vas sur le site (découverte), tu compares les modèles (appel), et tu achètes celui du milieu (décision)." },
      { id: "7-8", type: "separator", style: "dots" },
      {
        id: "7-9",
        type: "heading",
        level: 2,
        text: "L'argumentaire de vente en 5 points",
      },
      {
        id: "7-10",
        type: "steps",
        steps: [
          {
            title: "Le coût du statu quo",
            description:
              "« Combien de temps votre équipe passe à répondre aux mêmes questions ? 2 heures par jour ? À 25 €/h, c'est 1 300 € par mois. Mon chatbot coûte 299 €/mois. Le calcul est simple. »",
            icon: "💰",
          },
          {
            title: "La disponibilité 24/7",
            description:
              "« Vos clients posent des questions à 23h, le dimanche, en vacances. Un chatbot ne dort jamais, ne prend pas de congés et ne démissionne pas. »",
            icon: "🕐",
          },
          {
            title: "La capture de leads",
            description:
              "« Chaque visiteur qui quitte votre site sans laisser ses coordonnées est un client potentiel perdu. Le chatbot les engage et capture leur email naturellement. »",
            icon: "🎯",
          },
          {
            title: "L'image de marque",
            description:
              "« Un chatbot IA sur votre site, c'est un signal de modernité et de professionnalisme. Vos concurrents n'en ont pas encore — soyez le premier dans votre secteur. »",
            icon: "✨",
          },
          {
            title: "Le ROI mesurable",
            description:
              "« Chaque mois, vous recevez un rapport avec les chiffres exacts : conversations traitées, temps gagné, leads capturés. Vous saurez toujours exactement ce que ça vous rapporte. »",
            icon: "📊",
          },
        ],
      },
      { id: "7-11", type: "separator", style: "line" },
      {
        id: "7-12",
        type: "heading",
        level: 2,
        text: "Études de cas à utiliser",
      },
      {
        id: "7-13",
        type: "text",
        html: "<p>Les études de cas sont ton arme la plus puissante en vente. Elles transforment une promesse abstraite en preuve concrète. Voici trois scénarios types que tu peux adapter :</p>",
      },
      {
        id: "7-14",
        type: "comparison",
        headers: ["Client type", "Problème", "Solution ClawBot", "Résultat"],
        rows: [
          {
            cells: [
              "Restaurant (35 couverts)",
              "3h/jour passées au téléphone pour les mêmes questions",
              "Chatbot avec menu, horaires, réservation en ligne",
              "85 % de réduction des appels répétitifs, 12 leads/semaine",
            ],
          },
          {
            cells: [
              "E-commerce mode",
              "40 % d'abandon de panier, support débordé",
              "Chatbot avec guide des tailles, suivi commande, retours",
              "Taux d'abandon réduit de 15 %, 25 tickets/jour en moins",
            ],
          },
          {
            cells: [
              "Cabinet comptable",
              "Les mêmes questions sur les échéances fiscales",
              "Assistant IA avec calendrier fiscal, checklist documents",
              "60 % de réduction des appels, meilleure satisfaction client",
            ],
          },
        ],
      },
      {
        id: "7-15",
        type: "callout",
        variant: "info",
        title: "Adapte les chiffres",
        html: "Ces études de cas sont des exemples. Dès que tu as tes premiers vrais clients, utilise LEURS chiffres. Un résultat réel avec un vrai client local est 10 fois plus convaincant qu'une projection théorique.",
      },
      { id: "m9c-dia-7-3h", type: "heading", level: 3, text: "Les 3 objections et comment les retourner" },
      { id: "m9c-dia-7-3", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Objection : 'C'est trop cher'", description: "Le client voit le prix sans voir l'économie. Montre le calcul ROI : il économise 1300€/mois pour 299€/mois." },
        { id: "n2", label: "Objection : 'Les clients n'aiment pas les robots'", description: "Les mauvais chatbots oui. Un chatbot IA moderne répond comme un humain sur 87% des questions courantes." },
        { id: "n3", label: "Réponse : calcul ROI en direct", description: "Pose la question : 'Combien d'heures votre équipe passe par jour à répondre aux mêmes questions ?' Laisse le client faire le calcul lui-même." },
      ]},
      { id: "m9c-dia-7-3c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme vendre une machine à laver. Le client dit 'c'est cher'. Tu lui demandes combien de temps il passe à laver à la main chaque semaine. Quand il calcule, la machine devient un investissement évident." },
      {
        id: "7-16",
        type: "heading",
        level: 3,
        text: "Gérer les objections spécifiques à ClawBot",
      },
      {
        id: "7-17",
        type: "text",
        html: "<p>Voici les objections que tu rencontreras le plus souvent et comment y répondre :</p><ul><li><strong>« Les clients n'aiment pas parler à un robot »</strong> → « C'est vrai pour les mauvais chatbots. Le nôtre est alimenté par les dernières avancées en IA — 87 % des utilisateurs ne font pas la différence avec un humain sur les questions courantes. Et pour les cas complexes, le chatbot redirige vers vous. »</li><li><strong>« C'est trop cher pour mon business »</strong> → Calcul de ROI immédiat. Si le chatbot fait économiser ne serait-ce que 10h/mois de travail, il se rembourse dès le premier mois.</li><li><strong>« Et si l'IA dit n'importe quoi ? »</strong> → « Le chatbot est entraîné exclusivement sur VOS données. Il ne peut pas inventer — il ne sait que ce que vous lui avez appris. Et si une question dépasse ses compétences, il redirige vers un humain. »</li></ul>",
      },
      {
        id: "7-18",
        type: "quiz-inline",
        question:
          "Quelle est la meilleure façon de commencer un pitch ClawBot à un prospect ?",
        options: [
          { id: "a", text: "« J'ai un super outil IA basé sur les derniers modèles de langage »" },
          { id: "b", text: "« Combien de temps votre équipe passe chaque jour à répondre aux mêmes questions ? »" },
          { id: "c", text: "« Voulez-vous voir une démo de mon chatbot ? »" },
          { id: "d", text: "« Mes prix sont très compétitifs par rapport à la concurrence »" },
        ],
        correctId: "b",
        explanation:
          "La vente consultative commence toujours par le problème du client, pas par ta solution. En posant cette question, tu fais calculer au prospect le coût de son problème actuel. Quand il réalise qu'il perd 1 000 €/mois en temps perdu, ta solution à 299 €/mois devient une évidence.",
      },
      {
        id: "7-19",
        type: "checklist",
        title: "Checklist de vente ClawBot",
        items: [
          { id: "c1", text: "J'ai structuré mon offre avec 3 formules (Starter, Pro, Premium)" },
          { id: "c2", text: "Je maîtrise l'argumentaire en 5 points" },
          { id: "c3", text: "J'ai préparé au moins 2 études de cas adaptées à ma cible" },
          { id: "c4", text: "Je sais répondre aux 3 objections principales" },
          { id: "c5", text: "J'ai un calcul de ROI prêt à présenter en rendez-vous" },
          { id: "c6", text: "Mon pitch commence par le problème du client, pas par ma solution" },
        ],
      },
    ]),
    exercise:
      "Rédige un email de prospection de 10 lignes maximum pour proposer ClawBot à un restaurant local. L'email doit commencer par le problème, présenter le bénéfice clé et proposer un appel de 15 minutes. Ensuite, prépare un calcul de ROI détaillé pour ce même restaurant en estimant le temps gagné et les leads capturés.",
  },
];
