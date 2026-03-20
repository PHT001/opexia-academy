function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_9_LESSONS = [
  {
    order: 1,
    module: 9,
    title: "C'est quoi un MVP ? (et pourquoi c'est crucial)",
    slug: "cest-quoi-un-mvp-pourquoi-crucial",
    duration: "20 min",
    description: "Comprends ce qu'est vraiment un MVP, pourquoi les startups qui réussissent commencent toujours petit, et comment valider une idée avant de passer des mois à construire.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "MVP : le mot le plus mal compris de l'entrepreneuriat",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>MVP signifie <strong>Minimum Viable Product</strong>. Traduit littéralement : le produit minimum viable. Mais attention — la plupart des gens le comprennent mal. Un MVP, ce n'est pas une version bugguée de ton produit. Ce n'est pas un prototype bâclé. C'est la version la plus simple possible qui permet de <strong>tester une hypothèse réelle auprès de vrais utilisateurs</strong>.</p><p>Le concept vient d'Eric Ries et de la méthode <em>Lean Startup</em> (2011). L'idée centrale : arrête de passer 12 mois à construire quelque chose que personne ne veut. Construis vite, apprends vite, itère vite.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>La définition exacte d'Eric Ries :</strong> « La version d'un nouveau produit qui permet à une équipe de collecter le maximum d'apprentissages validés sur les clients avec le minimum d'effort. »",
      },
      {
        id: "1-4",
        type: "heading",
        level: 2,
        text: "Le principe du Build-Measure-Learn",
      },
      {
        id: "1-5",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "BUILD",
            description: "Construis le minimum nécessaire pour tester ton hypothèse",
          },
          {
            id: "n2",
            label: "MEASURE",
            description: "Mesure le comportement réel des utilisateurs (pas leurs intentions)",
          },
          {
            id: "n3",
            label: "LEARN",
            description: "Tire des apprentissages concrets : persiste, pivote, ou abandonne",
          },
          {
            id: "n4",
            label: "ITERATE",
            description: "Recommence avec une hypothèse affinée — plus vite à chaque cycle",
          },
        ],
      },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "4 MVPs célèbres qui ont changé le monde",
      },
      {
        id: "1-7",
        type: "comparison",
        headers: ["Produit", "MVP initial", "Hypothèse testée", "Résultat"],
        rows: [
          {
            cells: [
              "Dropbox",
              "Une simple vidéo de démonstration de 3 min",
              "Les gens veulent-ils vraiment synchroniser leurs fichiers ?",
              "75 000 inscriptions en une nuit → hypothèse validée",
            ],
          },
          {
            cells: [
              "Airbnb",
              "Un site basique avec 3 matelas gonflables dans leur appart",
              "Des voyageurs paient-ils pour dormir chez des inconnus ?",
              "3 clients en une semaine → modèle économique prouvé",
            ],
          },
          {
            cells: [
              "Zappos",
              "Photos de chaussures de magasins locaux postées en ligne",
              "Les gens achètent-ils des chaussures sans les essayer ?",
              "Premières commandes reçues → achat stock ensuite seulement",
            ],
          },
          {
            cells: [
              "Amazon",
              "Site web basique, Jeff Bezos achetait les livres en librairie",
              "Les gens achètent-ils des livres sur internet ?",
              "Premières ventes dès la semaine 1 → expansion massive",
            ],
          },
        ],
      },
      {
        id: "1-8",
        type: "callout",
        variant: "warning",
        html: "<strong>L'erreur la plus commune :</strong> confondre MVP et produit fini. Un MVP n'a pas besoin d'être beau. Il a besoin d'être <em>fonctionnel enough</em> pour tester une hypothèse précise. Dropbox n'avait même pas de produit — juste une vidéo.",
      },
      {
        id: "1-9",
        type: "heading",
        level: 2,
        text: "Les 3 types de MVP selon ton contexte",
      },
      {
        id: "1-10",
        type: "steps",
        steps: [
          {
            title: "MVP Concierge (manuel)",
            description: "Tu fais tout à la main, sans code. Tu simules le service manuellement pour valider la demande. Exemple : un outil d'automatisation où tu fais toi-même les tâches pour les 10 premiers clients.",
          },
          {
            title: "MVP Wizard of Oz",
            description: "L'interface existe mais les traitements sont faits manuellement en arrière-plan. L'utilisateur pense que c'est automatisé. Permet de valider l'UX avant d'automatiser.",
          },
          {
            title: "MVP Produit fonctionnel",
            description: "Le vrai produit, mais avec seulement 1-2 features core. Pas d'onboarding élaboré, pas de dashboard analytics, pas de settings avancés. Juste l'essence.",
          },
        ],
      },
      {
        id: "1-11",
        type: "heading",
        level: 3,
        text: "Pourquoi les agences IA ont besoin des MVPs",
      },
      {
        id: "1-12",
        type: "text",
        html: "<p>En tant qu'agence IA, tu vas créer des outils et des automatisations pour tes clients. La tentation est de construire un produit parfait, fully-featured, avec une belle interface. <strong>C'est un piège.</strong></p><p>Avec les MVPs, tu peux :</p><ul><li>Livrer de la valeur en <strong>2-4 semaines</strong> au lieu de 3 mois</li><li>Facturer dès le départ et financer le développement</li><li>Valider que le problème existe vraiment avant d'investir du temps</li><li>Utiliser les retours clients pour construire exactement ce dont ils ont besoin</li></ul>",
      },
      {
        id: "1-13",
        type: "callout",
        variant: "success",
        html: "<strong>Règle d'or :</strong> Si tu as honte de ton MVP, tu l'as lancé trop tard. Reid Hoffman, co-fondateur de LinkedIn.",
      },
      {
        id: "1-14",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-15",
        type: "heading",
        level: 3,
        text: "Ce qu'un MVP N'EST PAS",
      },
      {
        id: "1-16",
        type: "text",
        html: "<p>Pour clarifier définitivement, voici ce qu'on entend souvent et qui est faux :</p><ul><li>❌ Un MVP n'est <strong>pas</strong> un produit bugué et non fini</li><li>❌ Un MVP n'est <strong>pas</strong> une excuse pour livrer de la mauvaise qualité</li><li>❌ Un MVP n'est <strong>pas</strong> forcément du code — parfois c'est une vidéo, un Google Sheet, ou un process manuel</li><li>❌ Un MVP n'est <strong>pas</strong> le produit final — c'est un outil d'apprentissage</li></ul>",
      },
      {
        id: "1-17",
        type: "quiz-inline",
        question: "Dropbox a validé son MVP en lançant…",
        options: [
          { id: "a", text: "Une application mobile fonctionnelle avec synchronisation réelle" },
          { id: "b", text: "Une vidéo de démonstration simulant le produit" },
          { id: "c", text: "Un prototype cliquable sans backend" },
          { id: "d", text: "Un article de blog expliquant la vision" },
        ],
        correctId: "b",
        explanation: "Dropbox a commencé par une simple vidéo de 3 minutes qui montrait le produit fonctionner. Cette vidéo a généré 75 000 inscriptions en une nuit, prouvant la demande avant même qu'une ligne de code du vrai produit soit écrite.",
      },
      {
        id: "1-18",
        type: "checklist",
        title: "Tu maîtrises le concept MVP si tu peux répondre oui à tout ça",
        items: [
          { id: "c1", text: "Je comprends la différence entre un MVP et un prototype" },
          { id: "c2", text: "Je sais nommer les 3 phases du cycle Build-Measure-Learn" },
          { id: "c3", text: "Je connais au moins 2 exemples de MVPs célèbres et leurs apprentissages" },
          { id: "c4", text: "Je comprends pourquoi un MVP peut ne pas être du code" },
          { id: "c5", text: "Je vois comment appliquer la logique MVP à une mission d'agence IA" },
        ],
      },
    ]),
    exercise: "<p>Choisis une idée de produit ou d'outil IA que tu veux construire (ou qu'un client t'a demandé). Écris en 5 phrases maximum : (1) l'hypothèse principale que tu veux tester, (2) le type de MVP le plus adapté (concierge, wizard of oz, produit), (3) comment tu mesureras le succès. Partage-le dans le channel Discord pour feedback.</p>",
    quiz: [
      { type: "mcq", question: "Que signifie MVP dans le contexte de la méthode Lean Startup ?", options: JSON.stringify(["Maximum Viable Product", "Minimum Viable Product", "Most Valuable Product", "Minimum Version Product"]), correctAnswer: "Minimum Viable Product", explanation: "MVP signifie Minimum Viable Product — la version la plus simple d'un produit qui permet de tester une hypothèse réelle auprès de vrais utilisateurs, selon la méthode Lean Startup d'Eric Ries." },
      { type: "true_false", question: "Le MVP de Dropbox était une application fonctionnelle avec synchronisation de fichiers.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Dropbox a validé son MVP avec une simple vidéo de démonstration de 3 minutes, sans produit fonctionnel. Cette vidéo a généré 75 000 inscriptions en une nuit." },
      { type: "mcq", question: "Quel type de MVP consiste à simuler un service automatisé alors que tu fais tout manuellement en arrière-plan ?", options: JSON.stringify(["MVP Concierge", "MVP Wizard of Oz", "MVP Produit fonctionnel", "MVP Landing Page"]), correctAnswer: "MVP Wizard of Oz", explanation: "Le MVP Wizard of Oz présente une interface qui semble automatisée, mais les traitements sont faits manuellement en arrière-plan. Cela permet de valider l'expérience utilisateur avant d'investir dans l'automatisation." },
      { type: "true_false", question: "Un MVP peut ne pas contenir de code du tout.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un MVP peut être une vidéo, un Google Sheet, un process manuel, ou même une page de pré-inscription. L'objectif est de tester une hypothèse, pas de coder un produit." },
      { type: "mcq", question: "Un client vous demande de développer une application complète de gestion de rendez-vous avec 15 fonctionnalités. Il veut tout en 2 mois. Quel conseil lui donnez-vous en appliquant la méthode Lean Startup ?", options: JSON.stringify(["Vous acceptez et commencez à coder les 15 fonctionnalités immédiatement", "Vous lui proposez de lancer un MVP avec les 3 features essentielles en 2 semaines, mesurer l'usage, puis itérer selon les retours", "Vous refusez le projet car 2 mois ce n'est pas assez", "Vous lui proposez de faire une étude de marché de 6 mois avant de commencer"]), correctAnswer: "Vous lui proposez de lancer un MVP avec les 3 features essentielles en 2 semaines, mesurer l'usage, puis itérer selon les retours", explanation: "La méthode Lean Startup préconise Build-Measure-Learn : construire le minimum (3 features Must Have), mesurer le comportement réel des utilisateurs, et itérer. Développer 15 features sans validation, c'est risquer 2 mois de travail sur des hypothèses non vérifiées." },
    ],
  },
  {
    order: 2,
    module: 9,
    title: "Définir ton MVP : le framework Problem-Solution",
    slug: "definir-mvp-framework-problem-solution",
    duration: "25 min",
    description: "Apprends à définir précisément ton MVP avec un framework éprouvé : identifier le vrai problème, construire le bon persona, choisir les features essentielles et éliminer tout le reste.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Pourquoi 90% des MVPs échouent avant même d'être construits",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>La cause n°1 d'échec d'un MVP n'est pas technique. C'est de <strong>construire la mauvaise chose</strong>. On commence à coder avant d'avoir vraiment défini le problème. On suppose qu'on connaît le persona. On ajoute des features parce qu'elles « semblent utiles ».</p><p>Le framework Problem-Solution te force à répondre à 4 questions fondamentales <em>avant</em> d'écrire la moindre ligne de code.</p>",
      },
      {
        id: "2-3",
        type: "diagram",
        variant: "tree",
        nodes: [
          {
            id: "root",
            label: "Framework Problem-Solution",
            description: "4 piliers à définir avant de construire",
          },
          {
            id: "p1",
            label: "1. LE PROBLÈME",
            description: "Quel pain point précis, douloureux et fréquent résous-tu ?",
          },
          {
            id: "p2",
            label: "2. LE PERSONA",
            description: "Qui souffre exactement de ce problème ? Sois ultra-spécifique.",
          },
          {
            id: "p3",
            label: "3. LA SOLUTION",
            description: "Quelle est la solution minimale qui résout ce problème pour ce persona ?",
          },
          {
            id: "p4",
            label: "4. LES FEATURES",
            description: "Quelles sont les 1-3 features sans lesquelles le produit ne fonctionne pas ?",
          },
        ],
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "Étape 1 : Identifier le vrai problème",
      },
      {
        id: "2-5",
        type: "text",
        html: "<p>Un bon problème MVP doit cocher 3 cases :</p><ul><li><strong>Douloureux</strong> : les gens souffrent vraiment de ce problème (pas juste une légère gêne)</li><li><strong>Fréquent</strong> : ça arrive souvent (quotidiennement ou hebdomadairement, pas une fois par an)</li><li><strong>Sous-résolu</strong> : les solutions existantes sont mauvaises, chères, ou inexistantes</li></ul><p>Utilise le <strong>test des 5 Pourquoi</strong> (Toyota) pour aller au vrai problème racine.</p>",
      },
      {
        id: "2-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Exemple des 5 Pourquoi :</strong><br/>Problème apparent : « Mon client dit qu'il perd du temps sur ses emails »<br/>→ Pourquoi ? Il reçoit 200 emails/jour<br/>→ Pourquoi ? Beaucoup sont des demandes répétitives<br/>→ Pourquoi ? Son équipe support n'a pas de base de réponses<br/>→ Pourquoi ? Personne n'a eu le temps de la créer<br/><strong>Vrai problème : absence de base de connaissance centralisée pour le support.</strong> Solution MVP : outil de génération auto de FAQ depuis les historiques d'emails.",
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Étape 2 : Construire le persona précis",
      },
      {
        id: "2-8",
        type: "text",
        html: "<p>Ton persona MVP doit être <em>une vraie personne</em>, pas un archétype vague. Plus tu es spécifique, plus ton MVP sera efficace. Un mauvais persona : « les entrepreneurs ». Un bon persona : « Sophie, 34 ans, fondatrice d'une boutique e-commerce Shopify en France, 1-5 employés, CA 200k€/an, qui gère seule son SAV et répond à 50 emails clients par semaine ».</p>",
      },
      {
        id: "2-9",
        type: "steps",
        steps: [
          {
            title: "Démographie & contexte professionnel",
            description: "Titre, secteur, taille d'entreprise, ancienneté dans le rôle. Plus précis = meilleure décision sur les features.",
          },
          {
            title: "Problème principal & fréquence",
            description: "Quel est le moment exact où la douleur surgit ? À quelle fréquence ? Combien ça lui coûte en temps/argent aujourd'hui ?",
          },
          {
            title: "Solution actuelle (workaround)",
            description: "Comment résout-il le problème aujourd'hui ? Google Sheets bricolé ? Prestataire externe coûteux ? Process manuel fastidieux ?",
          },
          {
            title: "Comportement d'achat",
            description: "A-t-il déjà payé pour résoudre ce problème ? Combien ? Qui décide de l'achat dans son organisation ?",
          },
        ],
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Étape 3 : Features essentielles vs Nice-to-Have",
      },
      {
        id: "2-11",
        type: "text",
        html: "<p>C'est là que la plupart des builders se perdent. Ils veulent tout mettre. Résultat : 6 mois de dev pour un produit que personne n'utilise. Utilise la matrice MoSCoW pour prioriser brutalement.</p>",
      },
      {
        id: "2-12",
        type: "comparison",
        headers: ["Priorité", "Label MoSCoW", "Définition", "Dans le MVP ?"],
        rows: [
          {
            cells: [
              "Critique",
              "Must Have",
              "Sans ça, le produit ne fonctionne pas du tout",
              "✅ OUI, toujours",
            ],
          },
          {
            cells: [
              "Important",
              "Should Have",
              "Améliore vraiment l'expérience mais contournable",
              "⚠️ Parfois, si rapide à implémenter",
            ],
          },
          {
            cells: [
              "Utile",
              "Could Have",
              "Agréable à avoir, pas critique",
              "❌ NON, v2 uniquement",
            ],
          },
          {
            cells: [
              "Futur",
              "Won't Have",
              "Bonne idée mais hors scope total",
              "❌ NON, backlog v3+",
            ],
          },
        ],
      },
      {
        id: "2-13",
        type: "callout",
        variant: "warning",
        html: "<strong>Test du couteau suisse :</strong> Ton MVP doit faire <em>une seule chose</em> exceptionnellement bien. Pas 10 choses moyennement. Si tu peux décrire ton MVP en une phrase sans virgule, tu es sur la bonne voie.",
      },
      {
        id: "2-14",
        type: "heading",
        level: 3,
        text: "Exemple complet : MVP d'outil IA pour une agence",
      },
      {
        id: "2-15",
        type: "code",
        language: "text",
        filename: "MVP_Definition_Canvas.txt",
        code: `═══════════════════════════════════════════════
 MVP DEFINITION CANVAS — Outil IA de réponse email
═══════════════════════════════════════════════

PROBLÈME
  Une e-commerçante répond manuellement à 50 emails
  SAV/semaine. Chaque réponse prend 5-10 min.
  Coût : ~5h/semaine perdu en tâches répétitives.

PERSONA
  Sophie, 34 ans, fondatrice Shopify, 200k€ CA/an,
  gère seule le SAV, sur mobile 60% du temps.

SOLUTION CORE
  Extension Chrome qui génère des réponses email
  personnalisées en 1 clic depuis Gmail,
  en se basant sur l'historique client + FAQ.

MUST HAVE (MVP v1)
  ✅ Connexion Gmail OAuth
  ✅ Génération de réponse via GPT-4o
  ✅ Bouton "Insérer dans Gmail" en 1 clic
  ✅ Personnalisation ton (formel/décontracté)

SHOULD HAVE (v1.5)
  ⚠️ Historique des réponses générées
  ⚠️ Shortcut clavier

WON'T HAVE (v2+)
  ❌ Dashboard analytics
  ❌ Gestion multi-comptes
  ❌ Intégration CRM
  ❌ Application mobile native

MÉTRIQUE DE SUCCÈS
  10 utilisateurs actifs en 30 jours,
  NPS > 7, temps de réponse divisé par 3.
═══════════════════════════════════════════════`,
      },
      {
        id: "2-16",
        type: "heading",
        level: 3,
        text: "Le One-Liner Test : valide ta définition en 10 secondes",
      },
      {
        id: "2-17",
        type: "text",
        html: "<p>Avant de te lancer, tu dois pouvoir compléter cette phrase :</p><blockquote><em>« [Mon produit] aide [persona précis] à [résoudre problème spécifique] en [mécanisme unique] — sans [friction principale actuelle]. »</em></blockquote><p>Exemple : <em>« Notre extension Chrome aide les e-commerçantes solos à répondre à leurs emails SAV en 30 secondes via IA — sans quitter Gmail. »</em></p>",
      },
      {
        id: "2-18",
        type: "separator",
        style: "line",
      },
      {
        id: "2-19",
        type: "quiz-inline",
        question: "Dans la matrice MoSCoW, quelle catégorie de features inclus-tu absolument dans un MVP ?",
        options: [
          { id: "a", text: "Must Have ET Should Have" },
          { id: "b", text: "Must Have uniquement" },
          { id: "c", text: "Could Have si elles sont rapides à faire" },
          { id: "d", text: "Toutes les features, puis on taille après" },
        ],
        correctId: "b",
        explanation: "Un MVP strict ne contient que les Must Have — les features sans lesquelles le produit ne remplit pas sa fonction principale. Les Should Have peuvent parfois être incluses si elles sont très rapides à implémenter, mais la règle de base pour un vrai MVP reste : Must Have only.",
      },
      {
        id: "2-20",
        type: "checklist",
        title: "Checklist de définition MVP complète",
        items: [
          { id: "c1", text: "J'ai identifié le problème racine avec la technique des 5 Pourquoi" },
          { id: "c2", text: "Mon persona est une personne ultra-précise (pas un archétype générique)" },
          { id: "c3", text: "J'ai listé toutes mes features et appliqué MoSCoW à chacune" },
          { id: "c4", text: "Mon MVP v1 ne contient que des Must Have" },
          { id: "c5", text: "J'ai défini 1-3 métriques de succès claires et mesurables" },
          { id: "c6", text: "Je peux décrire mon MVP en une phrase sans virgule" },
        ],
      },
    ]),
    exercise: "<p>Prends l'idée de produit de la leçon 1. Remplis ton propre MVP Definition Canvas (tu peux copier-coller le template de code de cette leçon). Couvre les 4 sections : Problème, Persona, Solution Core, Must Have/Won't Have. Ensuite, écris ton One-Liner. Temps estimé : 20 minutes.</p>",
    quiz: [
      { type: "mcq", question: "Dans la matrice MoSCoW, quelles features incluent-on dans un MVP strict ?", options: JSON.stringify(["Must Have + Should Have + Could Have", "Must Have uniquement", "Should Have et Could Have", "Toutes les features listées"]), correctAnswer: "Must Have uniquement", explanation: "Un MVP strict ne contient que les Must Have — les features sans lesquelles le produit ne remplit pas sa fonction principale. Les autres catégories sont reportées aux versions suivantes." },
      { type: "true_false", question: "Un bon persona MVP peut être défini comme 'les entrepreneurs' sans plus de détail.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un persona MVP doit être ultra-spécifique : une vraie personne avec son âge, son secteur, sa taille d'entreprise, son problème précis. 'Les entrepreneurs' est trop vague pour prendre de bonnes décisions produit." },
      { type: "mcq", question: "Quels sont les 4 piliers du framework Problem-Solution ?", options: JSON.stringify(["Idée - Budget - Équipe - Lancement", "Problème - Persona - Solution - Features", "Marché - Produit - Prix - Distribution", "Vision - Objectif - Stratégie - Tactique"]), correctAnswer: "Problème - Persona - Solution - Features", explanation: "Le framework Problem-Solution oblige à définir 4 piliers avant de coder : le problème réel, le persona précis qui le subit, la solution minimale, et les features essentielles (Must Have)." },
      { type: "true_false", question: "La technique des 5 Pourquoi permet d'identifier le vrai problème racine derrière un symptôme apparent.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La technique des 5 Pourquoi (originaire de Toyota) consiste à demander 'pourquoi' 5 fois de suite pour remonter du symptôme visible au vrai problème racine, ce qui permet de construire la bonne solution MVP." },
      { type: "mcq", question: "Un prospect coach sportif veut une app avec : prise de RDV, suivi nutritionnel, chat IA, marketplace de compléments, réseau social entre clients, et un système de gamification. Il a 3 000€ de budget. Comment cadrez-vous le projet ?", options: JSON.stringify(["Vous acceptez tout et vous vous débrouillez avec le budget", "Vous appliquez MoSCoW : la prise de RDV et le suivi nutritionnel sont Must Have, le reste est reporté aux versions suivantes", "Vous refusez car le budget est trop faible pour 6 fonctionnalités", "Vous lui conseillez de trouver un investisseur avant de commencer"]), correctAnswer: "Vous appliquez MoSCoW : la prise de RDV et le suivi nutritionnel sont Must Have, le reste est reporté aux versions suivantes", explanation: "La matrice MoSCoW permet de prioriser : seuls les Must Have (les features sans lesquelles le produit ne sert à rien) entrent dans le MVP. La prise de RDV et le suivi sont le coeur du métier de coach. Le reste peut être ajouté dans les itérations suivantes." },
    ],
  },
  {
    order: 3,
    module: 9,
    title: "Architecture technique d'un MVP",
    slug: "architecture-technique-mvp",
    duration: "25 min",
    description: "Découvre la stack technique parfaite pour un MVP en 2024 : Next.js + Supabase + Vercel. Comprends la structure des fichiers, le schéma de base de données, et comment tout s'assemble.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "La stack MVP parfaite en 2024",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Pour un MVP, tu veux aller vite sans sacrifier la scalabilité. La stack que tu vas utiliser dans ce module est adoptée par des milliers de startups et indie makers : <strong>Next.js + Supabase + Vercel</strong>. Elle te permet de lancer en quelques heures, pas en quelques semaines.</p>",
      },
      {
        id: "3-3",
        type: "comparison",
        headers: ["Couche", "Technologie", "Rôle", "Pourquoi ce choix"],
        rows: [
          {
            cells: [
              "Frontend + API",
              "Next.js 14 (App Router)",
              "Pages, composants, API Routes",
              "Full-stack en un seul repo, SSR, file-based routing",
            ],
          },
          {
            cells: [
              "Base de données",
              "Supabase (PostgreSQL)",
              "Stockage des données, Auth, Storage",
              "Backend complet en 5 min, gratuit jusqu'à 50k requêtes/mois",
            ],
          },
          {
            cells: [
              "Déploiement",
              "Vercel",
              "Hosting, CI/CD, Edge Network",
              "Deploy en 1 commande, intégration Git native, free tier généreux",
            ],
          },
          {
            cells: [
              "Styling",
              "Tailwind CSS + shadcn/ui",
              "Design system rapide",
              "Composants prêts en copy-paste, pas de design from scratch",
            ],
          },
          {
            cells: [
              "IA",
              "OpenAI SDK / Vercel AI SDK",
              "Appels LLM, streaming",
              "Streaming natif, compatibilité multi-providers",
            ],
          },
        ],
      },
      {
        id: "3-4",
        type: "heading",
        level: 2,
        text: "Architecture globale du système",
      },
      {
        id: "3-5",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Navigateur (React)",
            description: "Next.js App Router — Pages et composants côté client",
          },
          {
            id: "n2",
            label: "Next.js API Routes",
            description: "/api/* — Logique serveur, appels IA, validation",
          },
          {
            id: "n3",
            label: "Supabase Auth",
            description: "JWT tokens, sessions, OAuth providers",
          },
          {
            id: "n4",
            label: "Supabase Database",
            description: "PostgreSQL — Tables, RLS policies, Realtime",
          },
          {
            id: "n5",
            label: "OpenAI API",
            description: "GPT-4o, embeddings, function calling",
          },
          {
            id: "n6",
            label: "Vercel Edge",
            description: "CDN, déploiement auto, environment variables",
          },
        ],
      },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Structure des fichiers d'un MVP Next.js",
      },
      {
        id: "3-7",
        type: "code",
        language: "text",
        filename: "project-structure.txt",
        code: `my-mvp/
├── app/                          # App Router (Next.js 14)
│   ├── (auth)/                   # Route group : pages non protégées
│   │   ├── login/
│   │   │   └── page.tsx          # /login
│   │   └── signup/
│   │       └── page.tsx          # /signup
│   ├── (dashboard)/              # Route group : pages protégées
│   │   ├── layout.tsx            # Layout avec vérif auth
│   │   ├── page.tsx              # /dashboard (home)
│   │   └── settings/
│   │       └── page.tsx          # /dashboard/settings
│   ├── api/                      # API Routes (serveur)
│   │   ├── generate/
│   │   │   └── route.ts          # POST /api/generate
│   │   └── webhooks/
│   │       └── route.ts          # POST /api/webhooks
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page /
├── components/
│   ├── ui/                       # shadcn/ui components (auto-générés)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   └── app/                      # Tes composants métier
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── GenerateForm.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Client Supabase (browser)
│   │   └── server.ts             # Client Supabase (server/API)
│   ├── openai.ts                 # Config OpenAI
│   └── utils.ts                  # Helpers partagés
├── types/
│   └── index.ts                  # Types TypeScript globaux
├── .env.local                    # Variables d'environnement (jamais committé)
├── middleware.ts                 # Protection des routes auth
└── package.json`,
      },
      {
        id: "3-8",
        type: "heading",
        level: 2,
        text: "Schéma de base de données Supabase",
      },
      {
        id: "3-9",
        type: "code",
        language: "typescript",
        filename: "supabase/schema.sql",
        code: `-- Table profiles (extension de auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  credits INTEGER DEFAULT 10,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table principale (exemple : générations IA)
CREATE TABLE generations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  input TEXT NOT NULL,
  output TEXT,
  model TEXT DEFAULT 'gpt-4o-mini',
  tokens_used INTEGER,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) — CRITIQUE pour la sécurité
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE generations ENABLE ROW LEVEL SECURITY;

-- Policy : un user ne peut voir que ses propres données
CREATE POLICY "Users see own profile"
  ON profiles FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "Users see own generations"
  ON generations FOR ALL
  USING (auth.uid() = user_id);

-- Trigger : créer un profil auto à l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();`,
      },
      {
        id: "3-10",
        type: "callout",
        variant: "warning",
        html: "<strong>Row Level Security (RLS) :</strong> Toujours activer RLS sur tes tables Supabase. Sans ça, n'importe quel utilisateur peut lire les données des autres. C'est la sécurité de base, pas optionnelle.",
      },
      {
        id: "3-11",
        type: "heading",
        level: 3,
        text: "Variables d'environnement à configurer",
      },
      {
        id: "3-12",
        type: "code",
        language: "text",
        filename: ".env.local",
        code: `# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...

# OpenAI
OPENAI_API_KEY=sk-proj-...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Mon MVP"

# (Optionnel) Stripe pour les paiements
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...`,
      },
      {
        id: "3-13",
        type: "heading",
        level: 3,
        text: "Middleware de protection des routes",
      },
      {
        id: "3-14",
        type: "code",
        language: "typescript",
        filename: "middleware.ts",
        code: `import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Rafraîchit la session si elle existe
  const { data: { session } } = await supabase.auth.getSession()

  // Protège les routes /dashboard/*
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirige les users connectés hors de /login et /signup
  if (session && (
    req.nextUrl.pathname === '/login' ||
    req.nextUrl.pathname === '/signup'
  )) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
}`,
      },
      {
        id: "3-15",
        type: "callout",
        variant: "success",
        html: "<strong>Commande de démarrage :</strong> Pour initialiser ce stack en une commande :<br/><code>npx create-next-app@latest mon-mvp --typescript --tailwind --app && cd mon-mvp && npx shadcn-ui@latest init</code>",
      },
      {
        id: "3-16",
        type: "separator",
        style: "space",
      },
      {
        id: "3-17",
        type: "quiz-inline",
        question: "Pourquoi est-il critique d'activer Row Level Security (RLS) sur Supabase ?",
        options: [
          { id: "a", text: "Pour améliorer les performances des requêtes" },
          { id: "b", text: "Sans RLS, tout utilisateur authentifié peut lire les données de tous les autres" },
          { id: "c", text: "Pour activer le mode temps réel (Realtime)" },
          { id: "d", text: "C'est une option payante qui améliore le SLA" },
        ],
        correctId: "b",
        explanation: "Sans RLS activé sur une table Supabase, n'importe quel utilisateur avec la clé anon (publique) peut exécuter des SELECT et lire toutes les lignes de toutes les tables. RLS permet de définir des policies qui limitent l'accès aux seules données appartenant à l'utilisateur connecté.",
      },
      {
        id: "3-18",
        type: "checklist",
        title: "Architecture MVP prête au build",
        items: [
          { id: "c1", text: "Projet Next.js 14 initialisé avec TypeScript et Tailwind" },
          { id: "c2", text: "Projet Supabase créé, clés récupérées dans .env.local" },
          { id: "c3", text: "Tables SQL créées avec RLS activé et policies configurées" },
          { id: "c4", text: "Trigger de création de profil configuré" },
          { id: "c5", text: "Middleware de protection des routes en place" },
          { id: "c6", text: "Structure des dossiers organisée (auth/dashboard/api)" },
        ],
      },
    ]),
    exercise: "<p>Initialise le projet en local : crée l'application Next.js, installe shadcn/ui, crée un projet Supabase, et exécute le script SQL du schéma. Vérifie que les tables 'profiles' et 'generations' existent dans ton dashboard Supabase avec RLS activé. Prends une screenshot de ton dashboard Supabase comme preuve.</p>",
    quiz: [
      { type: "mcq", question: "Quelle stack technique est recommandée pour un MVP en 2024 ?", options: JSON.stringify(["React + Firebase + Netlify", "Next.js + Supabase + Vercel", "Angular + MongoDB + AWS", "Vue.js + MySQL + Heroku"]), correctAnswer: "Next.js + Supabase + Vercel", explanation: "La stack Next.js + Supabase + Vercel permet de lancer en quelques heures : Next.js pour le full-stack, Supabase pour la BDD/Auth/Storage, et Vercel pour le déploiement automatique." },
      { type: "true_false", question: "Sans Row Level Security (RLS) activé sur Supabase, n'importe quel utilisateur authentifié peut lire les données de tous les autres.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Sans RLS, n'importe quel utilisateur avec la clé anon publique peut exécuter des SELECT et lire toutes les lignes de toutes les tables. RLS est une sécurité de base, pas optionnelle." },
      { type: "mcq", question: "À quoi sert le fichier middleware.ts dans un projet Next.js avec Supabase ?", options: JSON.stringify(["À configurer la base de données", "À protéger les routes et rediriger les utilisateurs non connectés", "À gérer les styles CSS", "À optimiser les images"]), correctAnswer: "À protéger les routes et rediriger les utilisateurs non connectés", explanation: "Le middleware.ts intercepte les requêtes pour vérifier l'état d'authentification. Il redirige les utilisateurs non connectés vers /login et les utilisateurs connectés hors des pages d'auth." },
      { type: "true_false", question: "Le trigger SQL 'on_auth_user_created' crée automatiquement un profil dans la table profiles quand un utilisateur s'inscrit.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le trigger AFTER INSERT ON auth.users appelle la fonction handle_new_user() qui insère automatiquement une entrée dans la table profiles avec l'id, l'email et le nom de l'utilisateur inscrit." },
      { type: "mcq", question: "Vous démarrez un MVP pour un client et vous devez choisir la stack technique. Le client veut une app avec authentification, base de données, et déploiement rapide. Il n'a aucune préférence technique. Que recommandez-vous ?", options: JSON.stringify(["React + Firebase + Netlify car Firebase est plus connu", "Next.js + Supabase + Vercel car c'est la stack la plus rapide à mettre en place avec auth, BDD et déploiement auto inclus", "Angular + MongoDB + AWS car c'est plus entreprise", "WordPress + WooCommerce car c'est moins cher"]), correctAnswer: "Next.js + Supabase + Vercel car c'est la stack la plus rapide à mettre en place avec auth, BDD et déploiement auto inclus", explanation: "La stack Next.js + Supabase + Vercel est optimale pour un MVP : Next.js gère le full-stack, Supabase offre auth + BDD + storage gratuit, et Vercel déploie automatiquement à chaque push. Le tout est opérationnel en quelques heures." },
    ],
  },
  {
    order: 4,
    module: 9,
    title: "Construire le frontend en 2h avec l'IA",
    slug: "construire-frontend-2h-avec-ia",
    duration: "35 min",
    description: "Utilise v0.dev et Cursor pour générer tes pages, composants et navigation en quelques prompts. Apprends à travailler avec l'IA comme co-pilote UI pour aller 10x plus vite.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Les 2 outils IA qui changent tout pour le frontend",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Construire un frontend propre prenait des jours il y a 2 ans. Aujourd'hui, avec les bons outils, tu peux avoir une interface professionnelle en 2-3 heures. Deux outils font la différence :</p><ul><li><strong>v0.dev</strong> (Vercel) : génère des composants React/Tailwind complets depuis une description texte. Parfait pour les pages complètes et les UI complexes.</li><li><strong>Cursor</strong> : IDE IA qui autocomplète, refactore, et génère du code directement dans ton projet. Parfait pour l'intégration et la personnalisation.</li></ul>",
      },
      {
        id: "4-3",
        type: "comparison",
        headers: ["Outil", "Utilisation idéale", "Workflow", "Limitations"],
        rows: [
          {
            cells: [
              "v0.dev",
              "Générer des pages entières, composants complexes (tableaux, forms, dashboards)",
              "Prompt → Preview → Copy code → Coller dans Cursor",
              "Nécessite du fine-tuning pour s'adapter à ton design system",
            ],
          },
          {
            cells: [
              "Cursor (Cmd+K)",
              "Modifier du code existant, ajouter une feature, refactorer",
              "Sélectionner le code → Cmd+K → Décrire la modification",
              "Moins bon pour créer from scratch sans contexte",
            ],
          },
          {
            cells: [
              "Cursor (Chat)",
              "Questions complexes, debug, architecture, logique métier",
              "Ouvrir le chat → Poser la question avec @fichier en contexte",
              "Peut halluciner sur des APIs moins connues",
            ],
          },
        ],
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "Workflow : de 0 à une interface complète",
      },
      {
        id: "4-5",
        type: "steps",
        steps: [
          {
            title: "Étape 1 — Générer la landing page sur v0.dev",
            description: "Ouvre v0.dev, décris ta landing en détail : \"Crée une landing page SaaS moderne pour un outil d'automatisation email par IA. Hero avec titre accrocheur + CTA, section features 3 colonnes, section pricing 2 tiers, footer. Style Tailwind, composants shadcn/ui, couleurs indigo et slate.\"",
          },
          {
            title: "Étape 2 — Copier et adapter dans Cursor",
            description: "Copie le code généré, colle-le dans app/page.tsx. Utilise Cursor (Cmd+K) pour adapter les textes, couleurs et ajouter tes liens réels.",
          },
          {
            title: "Étape 3 — Générer les pages auth",
            description: "Sur v0.dev : \"Formulaire de connexion et d'inscription avec email/password, bouton Google OAuth, lien mot de passe oublié, style minimaliste shadcn.\" Adapte avec Cursor pour connecter Supabase.",
          },
          {
            title: "Étape 4 — Construire le dashboard",
            description: "Sur v0.dev : \"Dashboard SaaS avec sidebar gauche (navigation), header avec avatar utilisateur, zone de contenu principale avec carte de statistiques et formulaire de génération IA.\" C'est ta page principale.",
          },
          {
            title: "Étape 5 — Responsive et navigation",
            description: "Dans Cursor, utilise le chat avec @layout.tsx pour vérifier le responsive. Demande : \"Rends ce layout mobile-first, avec un menu hamburger sur mobile et sidebar fixe sur desktop.\"",
          },
        ],
      },
      {
        id: "4-6",
        type: "heading",
        level: 2,
        text: "Les meilleurs prompts v0.dev pour un MVP",
      },
      {
        id: "4-7",
        type: "code",
        language: "text",
        filename: "prompts_v0.txt",
        code: `# PROMPT 1 — Hero section
"Crée un hero section pour un SaaS IA. Titre principal en gros
(max 8 mots), sous-titre descriptif (max 20 mots), deux boutons CTA
(Commencer gratuit + Voir la démo), badge social proof avec avatars
et '500+ utilisateurs actifs'. Background blanc, accents indigo-600.
Utilise shadcn/ui Button et Badge."

# PROMPT 2 — Dashboard principal
"Dashboard SaaS avec : sidebar fixe à gauche (logo + navigation items
avec icônes Lucide + badge notifications), header avec barre de recherche
et menu profil, grille 2x2 de stats cards (chiffres en grand + tendance),
et une section principale avec formulaire textarea + bouton submit.
TypeScript, Tailwind, shadcn/ui."

# PROMPT 3 — Page de résultats
"Page de résultats avec : header avec bouton retour, card principale
affichant un texte généré par IA avec boutons Copier/Regénérer/Sauvegarder,
section 'Paramètres utilisés' en sidebar, historique des 5 dernières
générations en bas. Responsive mobile-first."

# PROMPT 4 — Pricing section
"Section pricing avec 3 tiers : Free (0€), Pro (29€/mois), Enterprise
(99€/mois). Chaque card avec liste de features, checkmarks verts,
CTA button. Tier Pro mis en avant avec badge 'Populaire' et bordure
colorée. Toggle mensuel/annuel en haut."`,
      },
      {
        id: "4-8",
        type: "callout",
        variant: "tip",
        html: "<strong>Pro tip v0.dev :</strong> Toujours mentionner <code>shadcn/ui</code> dans tes prompts. Les composants générés s'intègreront directement dans ton projet sans conflit de styles. Mentionne aussi <code>Lucide React</code> pour les icônes — c'est la bibliothèque par défaut de shadcn.",
      },
      {
        id: "4-9",
        type: "heading",
        level: 2,
        text: "Code : composant Header avec auth state",
      },
      {
        id: "4-10",
        type: "code",
        language: "typescript",
        filename: "components/app/Header.tsx",
        code: `'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { User } from '@supabase/supabase-js'

export function Header() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user ?? null)
    )

    return () => subscription.unsubscribe()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          MonMVP
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Paramètres</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                  Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Connexion</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Commencer gratuitement</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}`,
      },
      {
        id: "4-11",
        type: "callout",
        variant: "info",
        html: "<strong>Responsive design :</strong> Tailwind utilise un système mobile-first. <code>md:flex</code> signifie 'flex à partir de 768px'. Sur mobile, cache la sidebar avec <code>hidden md:flex</code> et affiche un bouton hamburger. Cursor peut générer le drawer mobile en 1 prompt.",
      },
      {
        id: "4-12",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-13",
        type: "quiz-inline",
        question: "Quel est le workflow correct pour utiliser v0.dev dans ton projet ?",
        options: [
          { id: "a", text: "Installer v0.dev comme dépendance npm et l'importer dans le code" },
          { id: "b", text: "Générer le composant sur v0.dev, copier le code, le coller et adapter dans Cursor" },
          { id: "c", text: "Utiliser v0.dev uniquement pour les images et Cursor pour le code" },
          { id: "d", text: "Connecter v0.dev à GitHub pour qu'il pousse directement les changements" },
        ],
        correctId: "b",
        explanation: "v0.dev est un générateur web — tu décris ce que tu veux, il génère du code React/Tailwind, tu le copies et l'adaptes dans ton projet avec Cursor. Il n'y a pas de package npm v0.dev. C'est un outil de génération, pas une bibliothèque.",
      },
      {
        id: "4-14",
        type: "checklist",
        title: "Frontend MVP complet",
        items: [
          { id: "c1", text: "Landing page générée sur v0.dev et intégrée dans app/page.tsx" },
          { id: "c2", text: "Pages /login et /signup créées avec formulaires" },
          { id: "c3", text: "Layout dashboard avec sidebar et header en place" },
          { id: "c4", text: "Header affiche l'état auth (connecté/déconnecté)" },
          { id: "c5", text: "Responsive mobile vérifié sur les pages principales" },
          { id: "c6", text: "Navigation entre les pages fonctionnelle" },
        ],
      },
    ]),
    exercise: "<p>Utilise v0.dev pour générer ta page dashboard principale. Colle le code dans ton projet et adapte-le avec Cursor pour : (1) ajouter ton logo/nom, (2) modifier les couleurs selon ta charte, (3) vérifier le responsive sur mobile. Temps cible : 45 minutes maximum pour avoir un dashboard visuellement complet.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le bon workflow pour utiliser v0.dev dans ton projet MVP ?", options: JSON.stringify(["Installer v0.dev comme dépendance npm dans le projet", "Générer le composant sur v0.dev, copier le code, le coller et l'adapter dans Cursor", "Connecter v0.dev directement au repo GitHub", "Utiliser v0.dev uniquement pour créer des images"]), correctAnswer: "Générer le composant sur v0.dev, copier le code, le coller et l'adapter dans Cursor", explanation: "v0.dev est un générateur web, pas une bibliothèque. Le workflow correct est : décrire le composant, récupérer le code React/Tailwind généré, le coller dans le projet et l'adapter avec Cursor." },
      { type: "true_false", question: "Pour obtenir de meilleurs résultats sur v0.dev, il faut mentionner shadcn/ui et Lucide React dans les prompts.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Mentionner shadcn/ui dans les prompts v0.dev assure que les composants générés s'intègrent directement dans le projet sans conflit de styles. Lucide React est la bibliothèque d'icônes par défaut de shadcn." },
      { type: "mcq", question: "Pour quoi Cursor (Cmd+K) est-il le plus adapté ?", options: JSON.stringify(["Générer des pages entières depuis zéro", "Modifier du code existant, ajouter une feature ou refactorer", "Gérer le déploiement sur Vercel", "Créer des designs graphiques"]), correctAnswer: "Modifier du code existant, ajouter une feature ou refactorer", explanation: "Cursor avec Cmd+K excelle pour modifier du code existant : tu sélectionnes le code, décris la modification, et Cursor la génère. Pour créer from scratch, v0.dev est plus adapté." },
      { type: "true_false", question: "En Tailwind CSS, la classe 'hidden md:flex' cache un élément sur mobile et l'affiche en flex à partir de 768px.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tailwind utilise un système mobile-first. 'hidden' cache l'élément par défaut (mobile), et 'md:flex' l'affiche en flex à partir du breakpoint md (768px). C'est le pattern classique pour les sidebars responsive." },
      { type: "mcq", question: "Un client vous demande une landing page professionnelle pour son MVP en urgence. Vous avez 2 heures. Quel workflow adoptez-vous avec les outils IA ?", options: JSON.stringify(["Vous codez tout à la main en HTML/CSS pour un contrôle total", "Vous générez la page sur v0.dev avec un prompt mentionnant shadcn/ui, puis vous copiez le code dans votre projet et l'adaptez avec Cursor", "Vous utilisez un template WordPress gratuit", "Vous faites uniquement un mockup Figma et envoyez une capture d'écran au client"]), correctAnswer: "Vous générez la page sur v0.dev avec un prompt mentionnant shadcn/ui, puis vous copiez le code dans votre projet et l'adaptez avec Cursor", explanation: "Le workflow optimal : v0.dev génère le code React/Tailwind avec les composants shadcn/ui en quelques minutes. Vous copiez dans votre projet Next.js et utilisez Cursor (Cmd+K) pour adapter les textes, couleurs et responsive. Résultat professionnel en moins de 2h." },
    ],
  },
  {
    order: 5,
    module: 9,
    title: "Connecter le backend : auth + CRUD + API",
    slug: "connecter-backend-auth-crud-api",
    duration: "30 min",
    description: "Implémente l'authentification Supabase, les opérations CRUD sur ta base de données, tes API routes Next.js avec appels IA, et la gestion des erreurs et loading states.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "L'authentification Supabase en 20 lignes",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Supabase Auth gère tout : inscription, connexion, OAuth (Google, GitHub), magic links, et refresh des tokens. Tu n'as qu'à appeler les bonnes méthodes. Voici les deux pages auth que ton MVP a besoin.</p>",
      },
      {
        id: "5-3",
        type: "code",
        language: "typescript",
        filename: "app/(auth)/signup/page.tsx",
        code: `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: \`\${location.origin}/auth/callback\`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Rediriger vers dashboard (le trigger SQL crée le profil auto)
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Créer un compte</h1>
          <p className="text-muted-foreground">Commence gratuitement, sans carte bancaire</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="toi@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="8 caractères minimum"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Création...' : 'Créer mon compte'}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Déjà un compte ?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}`,
      },
      {
        id: "5-4",
        type: "heading",
        level: 2,
        text: "API Route : appel IA avec streaming",
      },
      {
        id: "5-5",
        type: "text",
        html: "<p>Voici le pattern pour une API route Next.js qui appelle OpenAI avec streaming. Le streaming affiche la réponse IA mot par mot en temps réel — bien meilleure UX qu'attendre 10 secondes sans feedback.</p>",
      },
      {
        id: "5-6",
        type: "code",
        language: "typescript",
        filename: "app/api/generate/route.ts",
        code: `import { OpenAIStream, StreamingTextResponse } from 'ai'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge' // Exécute sur Vercel Edge pour les perfs

export async function POST(req: Request) {
  // 1. Vérifier l'authentification
  const supabase = createRouteHandlerClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }

  // 2. Valider le body de la requête
  const body = await req.json()
  const { input, tone = 'professional' } = body

  if (!input || typeof input !== 'string' || input.length > 2000) {
    return new Response('Invalid input', { status: 400 })
  }

  // 3. Vérifier les crédits de l'utilisateur
  const { data: profile } = await supabase
    .from('profiles')
    .select('credits')
    .eq('id', session.user.id)
    .single()

  if (!profile || profile.credits <= 0) {
    return new Response('Insufficient credits', { status: 402 })
  }

  // 4. Créer l'entrée en base (status: pending)
  const { data: generation } = await supabase
    .from('generations')
    .insert({
      user_id: session.user.id,
      input,
      status: 'pending',
    })
    .select()
    .single()

  // 5. Appel OpenAI avec streaming
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      {
        role: 'system',
        content: \`Tu es un assistant de rédaction d'emails professionnels.
Ton = \${tone}. Réponds uniquement avec l'email rédigé, sans explication.\`,
      },
      {
        role: 'user',
        content: \`Rédige une réponse email pour : \${input}\`,
      },
    ],
    max_tokens: 500,
    temperature: 0.7,
  })

  // 6. Stream la réponse + mise à jour async de la DB
  const stream = OpenAIStream(response, {
    onCompletion: async (completion) => {
      // Mise à jour après la complétion du stream
      await supabase
        .from('generations')
        .update({ output: completion, status: 'completed' })
        .eq('id', generation.id)

      // Décrémenter les crédits
      await supabase.rpc('decrement_credits', { user_id: session.user.id })
    },
  })

  return new StreamingTextResponse(stream)
}`,
      },
      {
        id: "5-7",
        type: "heading",
        level: 2,
        text: "Hook : récupérer et afficher les données avec loading states",
      },
      {
        id: "5-8",
        type: "code",
        language: "typescript",
        filename: "app/(dashboard)/page.tsx",
        code: `'use client'

import { useState } from 'react'
import { useCompletion } from 'ai/react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

export default function DashboardPage() {
  const [copied, setCopied] = useState(false)

  const { completion, input, handleInputChange, handleSubmit, isLoading, error } =
    useCompletion({
      api: '/api/generate',
      onError: (err) => {
        if (err.message.includes('401')) toast.error('Session expirée, reconnecte-toi')
        if (err.message.includes('402')) toast.error('Plus de crédits disponibles')
        else toast.error('Une erreur est survenue')
      },
    })

  const handleCopy = async () => {
    if (!completion) return
    await navigator.clipboard.writeText(completion)
    setCopied(true)
    toast.success('Copié !')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container max-w-3xl py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Générer une réponse email</h1>
        <p className="text-muted-foreground">
          Décris la situation et obtiens une réponse professionnelle en secondes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Ex: Un client se plaint d'un retard de livraison de 3 jours sur sa commande #1234..."
          value={input}
          onChange={handleInputChange}
          rows={5}
          className="resize-none"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Génération en cours...
            </>
          ) : (
            'Générer la réponse'
          )}
        </Button>
      </form>

      {(completion || isLoading) && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Réponse générée</CardTitle>
            {completion && (
              <Button variant="ghost" size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-sm leading-relaxed">
              {completion}
              {isLoading && (
                <span className="inline-block h-4 w-1 animate-pulse bg-foreground ml-0.5" />
              )}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}`,
      },
      {
        id: "5-9",
        type: "callout",
        variant: "tip",
        html: "<strong>Vercel AI SDK :</strong> Le hook <code>useCompletion</code> gère automatiquement le streaming, les états de loading, et les erreurs. Installe-le avec <code>npm install ai</code>. C'est le standard pour les apps IA avec Next.js.",
      },
      {
        id: "5-10",
        type: "heading",
        level: 3,
        text: "CRUD : récupérer l'historique des générations",
      },
      {
        id: "5-11",
        type: "code",
        language: "typescript",
        filename: "lib/supabase/queries.ts",
        code: `import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

// Récupérer les générations de l'utilisateur connecté
export async function getGenerations(limit = 20) {
  const { data, error } = await supabase
    .from('generations')
    .select('*')
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw new Error(error.message)
  return data
}

// Supprimer une génération
export async function deleteGeneration(id: string) {
  const { error } = await supabase
    .from('generations')
    .delete()
    .eq('id', id)

  if (error) throw new Error(error.message)
}

// Récupérer le profil + crédits de l'utilisateur
export async function getUserProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) throw new Error(error.message)
  return data
}`,
      },
      {
        id: "5-12",
        type: "callout",
        variant: "warning",
        html: "<strong>Gestion des erreurs :</strong> Toujours vérifier le champ <code>error</code> des réponses Supabase. Une requête peut réussir techniquement (status 200) mais retourner une erreur RLS. Ne jamais supposer que <code>data</code> est non-null si tu n'as pas vérifié <code>error</code> d'abord.",
      },
      {
        id: "5-13",
        type: "separator",
        style: "line",
      },
      {
        id: "5-14",
        type: "quiz-inline",
        question: "Quel est l'avantage principal du streaming OpenAI dans une API route Next.js ?",
        options: [
          { id: "a", text: "Il réduit le coût des tokens OpenAI" },
          { id: "b", text: "Il affiche les tokens en temps réel, évitant à l'utilisateur d'attendre en silence" },
          { id: "c", text: "Il permet de faire plusieurs requêtes en parallèle" },
          { id: "d", text: "Il contourne la limite de 10 secondes des Vercel Serverless Functions" },
        ],
        correctId: "b",
        explanation: "Le streaming envoie les tokens au fur et à mesure de leur génération. L'utilisateur voit la réponse apparaître mot par mot, comme sur ChatGPT. C'est une bien meilleure expérience que d'attendre 10-15 secondes sans feedback, même si le temps total reste le même.",
      },
      {
        id: "5-15",
        type: "checklist",
        title: "Backend MVP opérationnel",
        items: [
          { id: "c1", text: "Pages /login et /signup fonctionnelles avec gestion d'erreurs" },
          { id: "c2", text: "API route /api/generate avec vérification auth et appel OpenAI" },
          { id: "c3", text: "Streaming implémenté avec mise à jour DB après complétion" },
          { id: "c4", text: "Hook useCompletion intégré dans le dashboard avec loading states" },
          { id: "c5", text: "Fonctions CRUD pour lire/supprimer les générations" },
          { id: "c6", text: "Toutes les routes protégées vérifient la session avant d'agir" },
        ],
      },
    ]),
    exercise: "<p>Implémente le flow complet : (1) inscris-toi avec un vrai email via ta page /signup, (2) vérifie que le profil a été créé automatiquement dans Supabase, (3) depuis le dashboard, génère une réponse email et vérifie qu'elle apparaît dans la table 'generations'. Si quelque chose ne marche pas, utilise Cursor Chat avec @route.ts en contexte pour debugger.</p>",
    quiz: [
      { type: "mcq", question: "Quel code de statut HTTP renvoie l'API route quand un utilisateur n'a plus de crédits ?", options: JSON.stringify(["401 Unauthorized", "403 Forbidden", "402 Payment Required", "429 Too Many Requests"]), correctAnswer: "402 Payment Required", explanation: "L'API route vérifie les crédits de l'utilisateur et renvoie un statut 402 (Payment Required) si le solde est à zéro, indiquant qu'un paiement est nécessaire pour continuer." },
      { type: "true_false", question: "Le streaming OpenAI affiche la réponse IA mot par mot en temps réel, ce qui offre une meilleure UX qu'attendre la réponse complète.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le streaming affiche la réponse au fur et à mesure de sa génération, évitant d'attendre 10 secondes sans feedback. C'est une bien meilleure expérience utilisateur pour les appels IA." },
      { type: "mcq", question: "Pourquoi l'API route utilise-t-elle 'export const runtime = edge' ?", options: JSON.stringify(["Pour exécuter le code côté client", "Pour de meilleures performances grâce au réseau Edge de Vercel", "Pour désactiver le cache", "Pour activer le mode debug"]), correctAnswer: "Pour de meilleures performances grâce au réseau Edge de Vercel", explanation: "Le runtime 'edge' exécute la fonction sur le réseau Edge de Vercel, ce qui réduit la latence en rapprochant le code de l'utilisateur géographiquement, idéal pour le streaming IA." },
      { type: "true_false", question: "La méthode createClientComponentClient de Supabase est utilisée dans les composants côté serveur (Server Components).", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "createClientComponentClient est conçu pour les composants côté client ('use client'). Pour les API routes et les Server Components, on utilise createRouteHandlerClient ou createServerComponentClient." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : un utilisateur de votre MVP s'inscrit avec succès mais quand il accède au dashboard, son profil affiche 'undefined' pour le nom et 0 crédits. Que vérifiez-vous en premier ?", options: JSON.stringify(["Le CSS du composant profil dans le dashboard", "Que le trigger SQL on_auth_user_created fonctionne correctement et que la fonction handle_new_user insère bien le profil avec les crédits par défaut", "Que l'utilisateur utilise le bon navigateur", "Que Vercel n'a pas de problème de cache"]), correctAnswer: "Que le trigger SQL on_auth_user_created fonctionne correctement et que la fonction handle_new_user insère bien le profil avec les crédits par défaut", explanation: "Le trigger SQL est responsable de créer automatiquement le profil avec les données par défaut (nom, email, crédits) à chaque inscription. Si le profil affiche des valeurs vides ou nulles, le trigger ne fonctionne probablement pas correctement." },
    ],
  },
  {
    order: 6,
    module: 9,
    title: "Déployer et tester avec de vrais utilisateurs",
    slug: "deployer-tester-vrais-utilisateurs",
    duration: "20 min",
    description: "Deploy ton MVP sur Vercel en 5 minutes, configure les analytics pour mesurer l'usage réel, et construis une boucle de feedback pour itérer rapidement selon les retours utilisateurs.",
    content: blocks([
      {
        id: "6-1",
        type: "heading",
        level: 2,
        text: "Deploy sur Vercel : de localhost à production en 5 min",
      },
      {
        id: "6-2",
        type: "text",
        html: "<p>Vercel est fait pour Next.js — c'est la même équipe. Le déploiement est quasi-automatique : connecte ton repo GitHub, configure tes variables d'environnement, et chaque push sur <code>main</code> deploy automatiquement en production.</p>",
      },
      {
        id: "6-3",
        type: "steps",
        steps: [
          {
            title: "1. Push ton code sur GitHub",
            description: "git init → git add . → git commit -m 'Initial MVP' → créer un repo GitHub → git remote add origin → git push origin main",
          },
          {
            title: "2. Connecter Vercel à GitHub",
            description: "vercel.com → New Project → Import depuis GitHub → Sélectionne ton repo. Vercel détecte automatiquement Next.js et configure le build.",
          },
          {
            title: "3. Configurer les variables d'environnement",
            description: "Dans Vercel Dashboard → Settings → Environment Variables, ajoute toutes tes variables de .env.local : NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY, OPENAI_API_KEY, etc.",
          },
          {
            title: "4. Configurer les URLs dans Supabase",
            description: "Dans Supabase → Authentication → URL Configuration, ajoute ton domaine Vercel (https://mon-mvp.vercel.app) dans 'Site URL' et 'Redirect URLs'.",
          },
          {
            title: "5. Deploy",
            description: "Clique Deploy (ou push sur main). En 2-3 minutes, ton MVP est en ligne avec HTTPS, CDN mondial et certificat SSL automatique.",
          },
        ],
      },
      {
        id: "6-4",
        type: "callout",
        variant: "warning",
        html: "<strong>Piège classique :</strong> Les variables <code>NEXT_PUBLIC_*</code> sont exposées côté client. Elles doivent uniquement contenir des clés publiques (anon key Supabase). Les clés secrètes (OpenAI, Stripe) ne doivent JAMAIS avoir le préfixe NEXT_PUBLIC_.",
      },
      {
        id: "6-5",
        type: "heading",
        level: 2,
        text: "Analytics : mesurer ce qui compte vraiment",
      },
      {
        id: "6-6",
        type: "comparison",
        headers: ["Outil", "Ce qu'il mesure", "Installation", "Coût"],
        rows: [
          {
            cells: [
              "Vercel Analytics",
              "Pages vues, visiteurs uniques, pays, Core Web Vitals",
              "1 ligne de code dans layout.tsx",
              "Gratuit jusqu'à 2500 events/mois",
            ],
          },
          {
            cells: [
              "Vercel Speed Insights",
              "Performance réelle (LCP, FID, CLS) par page et device",
              "1 ligne dans layout.tsx",
              "Inclus dans le plan Vercel",
            ],
          },
          {
            cells: [
              "PostHog (recommandé)",
              "Events custom, funnels, session replay, feature flags",
              "npm install posthog-js + 5 lignes",
              "Gratuit jusqu'à 1M events/mois",
            ],
          },
          {
            cells: [
              "Sentry",
              "Erreurs JavaScript, performance, traces",
              "npm install @sentry/nextjs + wizard CLI",
              "Gratuit jusqu'à 5k errors/mois",
            ],
          },
        ],
      },
      {
        id: "6-7",
        type: "code",
        language: "typescript",
        filename: "app/layout.tsx",
        code: `import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { PostHogProvider } from '@/components/PostHogProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        {/* Vercel Analytics — mesure le trafic */}
        <Analytics />
        {/* Vercel Speed Insights — mesure la performance */}
        <SpeedInsights />
      </body>
    </html>
  )
}`,
      },
      {
        id: "6-8",
        type: "code",
        language: "typescript",
        filename: "components/PostHogProvider.tsx",
        code: `'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // On gère ça manuellement pour Next.js
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}

// Utilisation dans tes composants :
// import { usePostHog } from 'posthog-js/react'
// const posthog = usePostHog()
// posthog.capture('generation_created', { input_length: input.length, tone })
// posthog.identify(user.id, { email: user.email, plan: profile.plan })`,
      },
      {
        id: "6-9",
        type: "heading",
        level: 2,
        text: "La boucle de feedback utilisateur",
      },
      {
        id: "6-10",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "DEPLOY",
            description: "MVP en ligne, partagé à 10-20 utilisateurs cibles",
          },
          {
            id: "n2",
            label: "OBSERVE",
            description: "Session replays PostHog, heatmaps, funnels de conversion",
          },
          {
            id: "n3",
            label: "ÉCOUTER",
            description: "Appels utilisateurs (5 calls de 20 min), widget feedback in-app",
          },
          {
            id: "n4",
            label: "ANALYSER",
            description: "Identifier les patterns : où abandonnent-ils ? Quelle feature manque ?",
          },
          {
            id: "n5",
            label: "ITÉRER",
            description: "1 sprint de 1 semaine max → deploy → recommencer",
          },
        ],
      },
      {
        id: "6-11",
        type: "heading",
        level: 3,
        text: "Comment recruter tes 10 premiers testeurs",
      },
      {
        id: "6-12",
        type: "text",
        html: "<p>Le meilleur feedback ne vient pas des sondages — il vient des <strong>appels utilisateurs</strong>. Voici comment recruter 10 testeurs en 48h :</p><ul><li><strong>LinkedIn</strong> : DM direct aux profils qui correspondent à ton persona (message court, honnête, propose 20 min de call)</li><li><strong>Communautés Discord/Slack</strong> : Partage ton MVP dans les channels #ressources des communautés de ton secteur</li><li><strong>Twitter/X</strong> : Thread de build en public — les gens adorent tester ce qu'ils ont suivi construire</li><li><strong>Réseau personnel</strong> : 3 amis qui correspondent au persona + leurs contacts</li></ul>",
      },
      {
        id: "6-13",
        type: "callout",
        variant: "tip",
        html: "<strong>Script d'appel utilisateur (5 questions) :</strong><br/>1. Parle-moi de ton workflow actuel pour [problème]<br/>2. Quelle est la partie la plus frustrante ?<br/>3. Qu'as-tu essayé avant ? Pourquoi ça n'a pas marché ?<br/>4. [Démo du MVP] — Qu'est-ce qui est confus ou manquant ?<br/>5. Si ça existait demain à [prix], tu l'achèterais ? Pourquoi ?",
      },
      {
        id: "6-14",
        type: "heading",
        level: 3,
        text: "Widget de feedback in-app",
      },
      {
        id: "6-15",
        type: "code",
        language: "typescript",
        filename: "components/app/FeedbackWidget.tsx",
        code: `'use client'

import { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export function FeedbackWidget() {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async () => {
    if (!feedback.trim()) return
    setSending(true)

    // Envoie vers Supabase ou une API externe (ex: Notion, Airtable)
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: feedback, url: window.location.href }),
    })

    toast.success('Merci pour ton feedback !')
    setFeedback('')
    setOpen(false)
    setSending(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-72 rounded-xl border bg-background shadow-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">Ton avis compte 🙏</p>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Textarea
            placeholder="Qu'est-ce qui te manque ? Qu'est-ce qui t'a bloqué ?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
            className="resize-none text-sm"
          />
          <Button onClick={handleSubmit} disabled={sending || !feedback.trim()} className="w-full" size="sm">
            <Send className="h-3 w-3 mr-2" />
            {sending ? 'Envoi...' : 'Envoyer'}
          </Button>
        </div>
      ) : (
        <Button onClick={() => setOpen(true)} size="icon" className="rounded-full shadow-lg h-12 w-12">
          <MessageSquare className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}`,
      },
      {
        id: "6-16",
        type: "callout",
        variant: "success",
        html: "<strong>Règle des 40% :</strong> Si plus de 40% de tes utilisateurs disent qu'ils seraient « très déçus » si ton produit disparaissait (test Sean Ellis), tu as trouvé ton Product-Market Fit. En dessous, tu dois continuer à itérer. C'est ta boussole.",
      },
      {
        id: "6-17",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-18",
        type: "quiz-inline",
        question: "Quelle variable d'environnement ne doit JAMAIS avoir le préfixe NEXT_PUBLIC_ ?",
        options: [
          { id: "a", text: "L'URL de ton projet Supabase" },
          { id: "b", text: "La clé anon (publique) Supabase" },
          { id: "c", text: "Ta clé secrète OpenAI (sk-...)" },
          { id: "d", text: "Le nom de ton application" },
        ],
        correctId: "c",
        explanation: "NEXT_PUBLIC_ expose la variable dans le bundle JavaScript envoyé au navigateur — n'importe qui peut la lire avec les DevTools. La clé OpenAI (sk-...) est une clé secrète qui permet de faire des appels API à ta charge. Elle doit rester strictement côté serveur (API routes uniquement, jamais dans un composant client).",
      },
      {
        id: "6-19",
        type: "checklist",
        title: "MVP lancé et en boucle d'amélioration",
        items: [
          { id: "c1", text: "Repo GitHub créé et connecté à Vercel" },
          { id: "c2", text: "Toutes les variables d'environnement configurées sur Vercel" },
          { id: "c3", text: "URLs de production ajoutées dans Supabase Auth settings" },
          { id: "c4", text: "Vercel Analytics et Speed Insights activés" },
          { id: "c5", text: "PostHog installé avec au moins 2 events custom trackés" },
          { id: "c6", text: "Widget de feedback in-app visible sur le dashboard" },
          { id: "c7", text: "5 premiers utilisateurs cibles contactés pour un call de feedback" },
          { id: "c8", text: "Premier sprint d'itération planifié dans les 7 jours suivant le launch" },
        ],
      },
    ]),
    exercise: "<p>C'est le moment de lancer pour de vrai. Deploy ton MVP sur Vercel, configure les analytics, et envoie le lien à 5 personnes qui correspondent à ton persona. Pour chacune, demande-leur de réaliser la tâche principale du produit (ex: générer un email) sans t'expliquer comment ça marche. Observe où elles bloquent. Note les 3 plus gros points de friction. C'est le début de ton Product-Market Fit journey.</p>",
    quiz: [
      { type: "mcq", question: "Quelle variable d'environnement ne doit JAMAIS avoir le préfixe NEXT_PUBLIC_ ?", options: JSON.stringify(["L'URL du projet Supabase", "La clé anon Supabase", "La clé secrète OpenAI (sk-...)", "Le nom de l'application"]), correctAnswer: "La clé secrète OpenAI (sk-...)", explanation: "NEXT_PUBLIC_ expose la variable dans le bundle JavaScript côté client. La clé OpenAI (sk-...) est secrète et permettrait à quiconque de faire des appels API à ta charge. Elle doit rester uniquement côté serveur." },
      { type: "true_false", question: "Selon la règle des 40% de Sean Ellis, si plus de 40% des utilisateurs seraient 'très déçus' si ton produit disparaissait, tu as trouvé ton Product-Market Fit.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le test Sean Ellis est la boussole du Product-Market Fit : si plus de 40% des utilisateurs seraient 'très déçus', le produit a trouvé son marché. En dessous, il faut continuer à itérer." },
      { type: "mcq", question: "Quel outil d'analytics est recommandé pour tracker des events custom, des funnels et des session replays dans un MVP ?", options: JSON.stringify(["Google Analytics uniquement", "PostHog", "Vercel Analytics seul", "Excel"]), correctAnswer: "PostHog", explanation: "PostHog offre des events custom, funnels, session replays et feature flags, le tout gratuit jusqu'à 1 million d'events/mois. C'est l'outil le plus complet pour comprendre le comportement utilisateur d'un MVP." },
      { type: "true_false", question: "Chaque push sur la branche main déploie automatiquement en production sur Vercel quand le repo est connecté.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vercel détecte automatiquement les push sur main et déclenche un déploiement en production avec HTTPS, CDN mondial et certificat SSL automatique en 2-3 minutes." },
      { type: "mcq", question: "Vous venez de déployer le MVP de votre client sur Vercel. Après une semaine, seulement 15% des utilisateurs reviennent une deuxième fois. Le client panique. Que lui proposez-vous comme démarche structurée ?", options: JSON.stringify(["Vous ajoutez 10 nouvelles fonctionnalités pour rendre l'app plus complète", "Vous analysez les session replays PostHog pour identifier les points de friction, faites 5 calls de 20 min avec des utilisateurs, et planifiez un sprint d'itération", "Vous relancez une campagne marketing pour attirer plus d'utilisateurs", "Vous changez complètement de stack technique"]), correctAnswer: "Vous analysez les session replays PostHog pour identifier les points de friction, faites 5 calls de 20 min avec des utilisateurs, et planifiez un sprint d'itération", explanation: "La boucle de feedback MVP : observer les session replays pour voir où les utilisateurs bloquent, faire des interviews qualitatives avec 5 utilisateurs cibles, identifier les 3 plus gros points de friction, et itérer. Ajouter des features sans comprendre le problème est une erreur classique." },
    ],
  },
  // ─── LEÇON 7 ───
  {
    order: 7,
    module: 9,
    title: "Upselling et cross-selling : maximiser chaque client",
    slug: "upselling-cross-selling",
    duration: "25 min",
    description: "Apprends à vendre plus à chaque client existant grâce à une matrice d'upsell structurée, le bon timing pour proposer, et les maths qui prouvent que fidéliser coûte 5x moins cher qu'acquérir.",
    content: blocks([
      {
        id: "7-1",
        type: "heading",
        level: 2,
        text: "Pourquoi l'upsell est ton levier de croissance n°1",
      },
      {
        id: "7-2",
        type: "text",
        html: "<p>Trouver un nouveau client coûte <strong>5 à 7 fois plus cher</strong> que de vendre un service supplémentaire à un client existant. Pourtant, la plupart des agences IA passent 90% de leur énergie à chercher de nouveaux clients et 0% à maximiser la valeur de ceux qu'elles ont déjà.</p><p>L'upselling (vendre un service supérieur) et le cross-selling (vendre un service complémentaire) sont les deux leviers qui transforment une agence qui survit en une agence qui prospère.</p>",
      },
      {
        id: "7-3",
        type: "callout",
        variant: "info",
        html: "<strong>Les maths qui changent tout :</strong> Vendre 3 services à 1 client = 1 relation, 1 confiance déjà établie, 0€ de coût d'acquisition. Trouver 3 nouveaux clients = 3 cycles de prospection, 3 phases de confiance à construire, des semaines d'effort. À chiffre d'affaires égal, la première option te prend 5x moins de temps et d'énergie.",
      },
      {
        id: "7-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "7-5",
        type: "heading",
        level: 2,
        text: "La matrice d'upsell pour une agence IA",
      },
      {
        id: "7-6",
        type: "text",
        html: "<p>Voici la logique de progression pour chaque type de client. L'idée : chaque service livré ouvre la porte au suivant, naturellement.</p>",
      },
      {
        id: "7-7",
        type: "comparison",
        headers: ["Service initial", "Upsell naturel", "Cross-sell complémentaire", "Maintenance récurrente"],
        rows: [
          {
            cells: [
              "Chatbot client (800-1 500€)",
              "Chatbot avancé avec CRM intégré (2 500-4 000€)",
              "Automatisation email/SMS post-conversation (1 000-2 000€)",
              "Maintenance + optimisation mensuelle (200-400€/mois)",
            ],
          },
          {
            cells: [
              "Automatisation de process (1 500-3 000€)",
              "Dashboard de reporting IA (2 000-3 500€)",
              "Agent IA autonome pour le même process (3 000-5 000€)",
              "Monitoring + évolutions mensuelles (300-500€/mois)",
            ],
          },
          {
            cells: [
              "Site web / landing page (1 000-2 500€)",
              "Ajout chatbot sur le site (800-1 500€)",
              "SEO local + contenu IA (1 500-2 500€)",
              "Hébergement + mises à jour (150-300€/mois)",
            ],
          },
          {
            cells: [
              "Agent IA (3 000-6 000€)",
              "Multi-agents connectés (5 000-10 000€)",
              "Formation équipe à l'utilisation (1 000-2 000€)",
              "Support prioritaire + évolutions (400-800€/mois)",
            ],
          },
        ],
      },
      {
        id: "7-8",
        type: "callout",
        variant: "tip",
        html: "<strong>La règle d'or :</strong> chaque projet livré doit contenir une 'graine' pour le prochain. Quand tu livres un chatbot, montre au client les données qu'il génère et dis : 'Imagine si on automatisait les relances basées sur ces données.' Tu ne vends pas — tu plantes l'idée.",
      },
      {
        id: "7-9",
        type: "separator",
        style: "line",
      },
      {
        id: "7-10",
        type: "heading",
        level: 2,
        text: "Le parcours d'upsell sur 6 mois",
      },
      {
        id: "7-11",
        type: "steps",
        steps: [
          {
            title: "Mois 0 : Livraison du service initial",
            description: "Tu livres un chatbot client à 1 200€. Le client est satisfait. Tu envoies un rapport de performance à J+14 montrant les conversations traitées et le temps gagné.",
          },
          {
            title: "Mois 1 : Le rapport qui ouvre la porte",
            description: "Tu envoies un rapport mensuel avec une section 'Opportunités détectées'. Ex : '37% des conversations demandent un suivi par email → on pourrait automatiser ça.' Tu ne vends pas encore. Tu montres la donnée.",
          },
          {
            title: "Mois 2 : La proposition naturelle (cross-sell)",
            description: "Tu proposes l'automatisation email/SMS en complément : 'Vu les données du chatbot, ajouter les relances automatiques pourrait doubler ton taux de conversion. Budget : 1 500€ one-shot + 200€/mois de maintenance.'",
          },
          {
            title: "Mois 3-4 : L'upgrade (upsell)",
            description: "Le client voit les résultats des deux services combinés. Tu proposes le chatbot avancé avec intégration CRM : 'Au lieu de copier-coller les leads du chatbot dans ton CRM, on connecte tout. Tes commerciaux reçoivent les leads qualifiés en temps réel.'",
          },
          {
            title: "Mois 5-6 : Le contrat de maintenance global",
            description: "Tu gères maintenant chatbot + automatisation + CRM. Tu proposes un contrat de maintenance mensuel global à 400€/mois : monitoring, optimisation, support prioritaire, rapport mensuel. Le client signe sans hésiter car tu es devenu indispensable.",
          },
        ],
      },
      {
        id: "7-12",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur fatale :</strong> proposer l'upsell trop tôt. Si tu vends un service complémentaire avant que le client ait vu les résultats du premier, tu passes pour un vendeur de tapis. Attends toujours que le client ait constaté la valeur (minimum 2-4 semaines après la livraison).",
      },
      {
        id: "7-13",
        type: "separator",
        style: "dots",
      },
      {
        id: "7-14",
        type: "heading",
        level: 2,
        text: "Le timing parfait pour proposer",
      },
      {
        id: "7-15",
        type: "comparison",
        headers: ["Moment", "Pourquoi c'est le bon timing", "Quoi proposer"],
        rows: [
          {
            cells: [
              "J+14 après livraison",
              "Le client voit les premiers résultats et est dans l'euphorie du 'ça marche'",
              "Le contrat de maintenance (sécuriser le récurrent)",
            ],
          },
          {
            cells: [
              "Lors du rapport mensuel",
              "Tu montres des données concrètes qui révèlent des opportunités",
              "Un cross-sell basé sur les données ('37% des conversations demandent X')",
            ],
          },
          {
            cells: [
              "Quand le client te contacte spontanément",
              "Il pense déjà à toi, il a un besoin — c'est le moment parfait",
              "Un upsell vers le service supérieur",
            ],
          },
          {
            cells: [
              "À la fin d'un trimestre",
              "Le client fait son bilan, il mesure le ROI de tes services",
              "Un package global (bundle de services avec réduction)",
            ],
          },
          {
            cells: [
              "Quand il mentionne un nouveau problème",
              "Il exprime un besoin explicite — tu n'as même pas besoin de vendre",
              "La solution exacte à son problème (agent IA, automatisation, dashboard)",
            ],
          },
        ],
      },
      {
        id: "7-16",
        type: "separator",
        style: "line",
      },
      {
        id: "7-17",
        type: "heading",
        level: 2,
        text: "Les maths de l'upsell : pourquoi c'est 5x plus rentable",
      },
      {
        id: "7-18",
        type: "comparison",
        headers: ["Stratégie", "3 nouveaux clients", "1 client × 3 services"],
        rows: [
          {
            cells: [
              "Temps de prospection",
              "3 × 2-4 semaines = 6-12 semaines",
              "0 semaines (client existant)",
            ],
          },
          {
            cells: [
              "Coût d'acquisition",
              "3 × 200-500€ (temps + outils) = 600-1 500€",
              "0€ (relation déjà établie)",
            ],
          },
          {
            cells: [
              "Phase de confiance",
              "3 cycles complets à construire",
              "Confiance déjà acquise",
            ],
          },
          {
            cells: [
              "Risque de non-paiement",
              "3 clients inconnus = risque élevé",
              "1 client qui a déjà payé = risque très faible",
            ],
          },
          {
            cells: [
              "Panier moyen par client",
              "1 200€ (service unique)",
              "4 500€+ (3 services + maintenance)",
            ],
          },
          {
            cells: [
              "Revenu récurrent généré",
              "0 à 600€/mois (si 1 sur 3 prend la maintenance)",
              "400€/mois (maintenance globale quasi garantie)",
            ],
          },
        ],
      },
      {
        id: "7-19",
        type: "callout",
        variant: "success",
        html: "<strong>L'objectif à viser :</strong> un panier moyen de 3 500 à 5 000€ par client sur 6 mois (service initial + upsells + maintenance). Si tu signes 2 clients par mois avec ce panier, tu atteins 7 000-10 000€/mois sans courir après 10 nouveaux clients.",
      },
      {
        id: "7-20",
        type: "separator",
        style: "dots",
      },
      {
        id: "7-21",
        type: "heading",
        level: 2,
        text: "Exemples concrets d'upsell réussis",
      },
      {
        id: "7-22",
        type: "text",
        html: "<p><strong>Exemple 1 — Cabinet comptable :</strong> Service initial : chatbot FAQ pour les clients du cabinet (1 200€). Mois 2 : automatisation de la collecte de documents comptables par email (1 800€). Mois 4 : dashboard de suivi des dossiers clients avec alertes IA (2 500€). Maintenance mensuelle : 350€/mois. Total sur 6 mois : <strong>5 500€ + 1 400€ MRR = 7 600€</strong> pour un seul client.</p><p><strong>Exemple 2 — Agence immobilière :</strong> Service initial : agent IA de qualification des leads entrants (2 000€). Mois 2 : automatisation des emails de suivi avec les acheteurs potentiels (1 500€). Mois 5 : chatbot sur le site web connecté au CRM immo (2 500€). Maintenance : 400€/mois. Total sur 6 mois : <strong>6 000€ + 1 600€ MRR = 8 400€</strong>.</p><p><strong>Exemple 3 — E-commerce :</strong> Service initial : chatbot de support client (1 000€). Mois 1 : automatisation des relances panier abandonné par email/SMS (1 200€). Mois 3 : recommandations produits personnalisées par IA (2 000€). Maintenance : 300€/mois. Total sur 6 mois : <strong>4 200€ + 1 200€ MRR = 6 000€</strong>.</p>",
      },
      {
        id: "7-23",
        type: "separator",
        style: "dots",
      },
      {
        id: "7-24",
        type: "quiz-inline",
        question: "Quel est le meilleur moment pour proposer un upsell à un client ?",
        options: [
          { id: "a", text: "Pendant la phase de vente initiale, pour maximiser le panier" },
          { id: "b", text: "Quand le client a constaté les résultats du premier service et que tu as des données à montrer" },
          { id: "c", text: "6 mois après la livraison, quand il a oublié le projet" },
          { id: "d", text: "Quand tu as besoin de revenus supplémentaires" },
        ],
        correctId: "b",
        explanation: "Le meilleur timing est quand le client a vu les résultats concrets (minimum 2-4 semaines après livraison) et que tu peux t'appuyer sur des données réelles. Proposer trop tôt te fait passer pour un vendeur de tapis. Proposer trop tard, c'est rater la fenêtre d'enthousiasme.",
      },
      {
        id: "7-25",
        type: "checklist",
        title: "Checklist — Ta stratégie d'upsell est en place",
        items: [
          { id: "c1", text: "Ma matrice d'upsell/cross-sell est définie pour mes 3 services principaux" },
          { id: "c2", text: "J'ai un parcours d'upsell sur 6 mois pour chaque type de client" },
          { id: "c3", text: "Mon rapport mensuel inclut une section 'opportunités détectées'" },
          { id: "c4", text: "J'ai identifié le bon timing pour chaque type de proposition" },
          { id: "c5", text: "J'ai calculé mon panier moyen cible par client sur 6 mois" },
          { id: "c6", text: "J'ai identifié 2-3 clients existants à qui proposer un service complémentaire cette semaine" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée ta matrice d'upsell/cross-sell pour tes 3 services principaux. Pour chaque service, définis : (1) l'upsell naturel (version supérieure), (2) le cross-sell complémentaire, (3) la maintenance récurrente associée. Ensuite, pour chaque type de client (cabinet comptable, commerce local, e-commerce, etc.), écris le parcours d'upsell sur 6 mois : quel service proposer, à quel moment, avec quel argument basé sur les données. Calcule ton panier moyen cible par client. Durée estimée : 45 min.</p>",
    quiz: [
      { type: "mcq", question: "Combien coûte-t-il en moyenne de vendre un service à un client existant par rapport à trouver un nouveau client ?", options: JSON.stringify(["C'est le même coût", "2 fois moins cher", "5 à 7 fois moins cher", "10 à 15 fois moins cher"]), correctAnswer: "5 à 7 fois moins cher", explanation: "Trouver un nouveau client coûte 5 à 7 fois plus cher que vendre un service supplémentaire à un client existant. La confiance est déjà établie, le coût d'acquisition est nul, et le risque de non-paiement est très faible." },
      { type: "true_false", question: "Il faut proposer l'upsell dès la livraison du premier service pour maximiser les revenus.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Proposer l'upsell trop tôt (avant que le client ait constaté la valeur du premier service) te fait passer pour un vendeur de tapis. Il faut attendre minimum 2 à 4 semaines après la livraison, quand le client a vu les résultats concrets." },
      { type: "mcq", question: "Quelle est la meilleure façon de 'planter la graine' d'un futur upsell ?", options: JSON.stringify(["Envoyer un email promotionnel avec tous tes services", "Inclure une section 'opportunités détectées' dans ton rapport mensuel avec des données réelles", "Appeler le client chaque semaine pour lui proposer de nouveaux services", "Attendre que le client te contacte spontanément"]), correctAnswer: "Inclure une section 'opportunités détectées' dans ton rapport mensuel avec des données réelles", explanation: "Le rapport mensuel avec une section 'opportunités détectées' est le meilleur outil d'upsell. Tu montres des données réelles (ex : '37% des conversations demandent un suivi email') sans vendre directement. Le client voit l'opportunité et te demande de la réaliser." },
      { type: "true_false", question: "Vendre 3 services à 1 client existant génère le même chiffre d'affaires que trouver 3 nouveaux clients, mais avec 5 fois moins d'effort.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "À chiffre d'affaires égal, vendre 3 services à 1 client = 1 relation, 0€ de coût d'acquisition, confiance déjà établie. Trouver 3 nouveaux clients = 3 cycles de prospection, des semaines d'effort, et un risque plus élevé sur chaque deal." },
      { type: "mcq", question: "Tu as livré un chatbot à un cabinet comptable il y a 1 mois. Le rapport montre que 40% des conversations portent sur la collecte de documents. Quelle est ta prochaine action ?", options: JSON.stringify(["Tu proposes immédiatement un agent IA à 5 000€", "Tu montres la donnée au client et proposes l'automatisation de la collecte de documents comme cross-sell naturel à 1 800€", "Tu attends 6 mois avant de proposer quoi que ce soit", "Tu baisses le prix du chatbot pour le fidéliser"]), correctAnswer: "Tu montres la donnée au client et proposes l'automatisation de la collecte de documents comme cross-sell naturel à 1 800€", explanation: "Le cross-sell basé sur des données réelles du service existant est le plus puissant. Le client voit que 40% de ses conversations portent sur la collecte de documents → la solution s'impose naturellement. C'est le parcours d'upsell structuré : montrer la donnée, puis proposer la solution logique." },
    ],
  },
];
