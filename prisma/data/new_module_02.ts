// ═══════════════════════════════════════════════════
// MODULE 2 — Prompt Engineering avancé & Claude Pro
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_2_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 2,
    title: "Claude Pro : ton arme secrète au quotidien",
    slug: "claude-pro-arme-secrete-quotidien",
    duration: "20 min",
    description: "Setup Claude Pro, interface, Projects, et toutes les fonctionnalités clés pour travailler 10x plus vite.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi Claude Pro change tout" },
      { id: "1-2", type: "text", html: "<p>La version gratuite de Claude est bien. Mais <strong>Claude Pro à 20$/mois</strong>, c'est un investissement qui se rembourse dès la première heure de travail. Tu vas comprendre pourquoi dans cette leçon.</p><p>Si tu veux bosser sérieusement — créer des chatbots, coder des apps, générer du contenu pour des clients — la version gratuite te limitera rapidement. On passe au niveau au-dessus.</p>" },
      { id: "1-3", type: "comparison", headers: ["Fonctionnalité", "Claude Gratuit", "Claude Pro"], rows: [
        { cells: ["Modèle disponible", "Claude Haiku (limité)", "Claude Sonnet + Opus"] },
        { cells: ["Messages/jour", "~10-15 messages", "Usage 5x supérieur"] },
        { cells: ["Longueur contexte", "Limitée", "200 000 tokens (~150 000 mots)"] },
        { cells: ["Projects", "Non", "Oui — mémoire persistante"] },
        { cells: ["Fichiers & docs", "Limité", "Illimité (PDF, code, CSV...)"] },
        { cells: ["Artifacts", "Non", "Oui — code exécutable, preview"] },
        { cells: ["Priorité d'accès", "File d'attente", "Accès prioritaire"] },
      ]},
      { id: "1-4", type: "callout", variant: "tip", html: "<strong>20$/mois pour Claude Pro, c'est le meilleur investissement que tu peux faire.</strong> Un seul client chatbot te rembourse 75 mois d'abonnement." },

      { id: "1-5", type: "separator", style: "dots" },
      { id: "1-6", type: "heading", level: 2, text: "L'interface Claude Pro : tour du propriétaire" },
      { id: "1-7", type: "steps", steps: [
        { title: "La barre latérale — tes conversations", description: "Toutes tes conversations sont sauvegardées. Crée des dossiers pour organiser par client ou par projet. Nomme chaque conversation clairement : ne laisse pas 'New Conversation' partout." },
        { title: "Les Projects — la fonctionnalité la plus puissante", description: "Un Project = une mémoire persistante. Claude garde le contexte entre toutes tes conversations dans ce projet. Crée un project par client, par projet ou par domaine." },
        { title: "Les Artifacts — ton espace de travail", description: "Quand Claude génère du code, un document, un tableau — il le met dans un Artifact à droite. Tu peux l'éditer, le prévisualiser, le télécharger directement." },
        { title: "Upload de fichiers — donne du contexte", description: "Uploade un PDF, un CSV, un fichier de code, une image. Claude va l'analyser et travailler dessus. Donne-lui les documents de ton client avant de travailler." },
      ]},

      { id: "1-8", type: "separator", style: "line" },
      { id: "1-9", type: "heading", level: 2, text: "Les Projects : ta mémoire IA persistante" },
      { id: "1-10", type: "text", html: "<p>Les Projects sont <strong>la fonctionnalité qui change le plus ton workflow</strong>. Voici comment les utiliser concrètement :</p>" },
      { id: "1-11", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Crée un Project", description: "Ex : 'Client — Boulangerie Dupont'" },
        { id: "n2", label: "Ajoute des instructions système", description: "Contexte client, ton à utiliser, infos importantes" },
        { id: "n3", label: "Upload les docs du client", description: "Site web, brochure, menu, liste de produits..." },
        { id: "n4", label: "Travaille dans ce contexte", description: "Claude connaît le client dès la 1ère conversation" },
        { id: "n5", label: "Reprends n'importe quand", description: "Ouvre le project 2 semaines plus tard, Claude se souvient" },
      ]},

      { id: "1-12", type: "heading", level: 3, text: "Exemple d'instructions système pour un Project client" },
      { id: "1-13", type: "code", language: "text", filename: "project-instructions-client.txt", code: "== CONTEXTE CLIENT ==\nClient : Boulangerie Artisanale Dupont\nLocalisation : Lyon 6ème\nCible : familles du quartier + travailleurs du quartier\nTon de communication : chaleureux, artisanal, authentique\n\n== PRODUITS PHARES ==\n- Pain au levain maison (2,80€)\n- Croissant pur beurre (1,40€)\n- Tarte aux fruits de saison (18€ entière)\n\n== RÈGLES DE COMMUNICATION ==\n- Toujours valoriser le savoir-faire artisanal\n- Jamais de formules trop commerciales\n- Utiliser le prénom du boulanger : Michel\n\n== MON RÔLE ==\nJe suis le prestataire IA de ce client.\nJe gère leur chatbot, leur contenu et leur automatisation." },

      { id: "1-14", type: "callout", variant: "info", html: "Avec ce projet configuré, toutes tes conversations avec Claude autour de ce client seront <strong>immédiatement contextualisées</strong>. Plus besoin de tout réexpliquer à chaque fois." },

      { id: "1-15", type: "heading", level: 2, text: "Les Artifacts : ton éditeur intégré" },
      { id: "1-16", type: "text", html: "<p>Quand tu demandes à Claude de générer du code, une page HTML, un document — il crée un <strong>Artifact</strong>. Dans cet espace à droite, tu peux :</p><ul><li><strong>Prévisualiser</strong> du code HTML/React directement dans le navigateur</li><li><strong>Éditer</strong> le contenu directement</li><li><strong>Copier</strong> en un clic</li><li><strong>Demander des modifications</strong> dans le chat</li></ul><p>C'est ton espace de prototypage instantané. En 5 minutes, tu peux avoir un composant fonctionnel à montrer à un client.</p>" },

      { id: "1-17", type: "separator", style: "dots" },
      { id: "1-18", type: "quiz-inline", question: "Quel est le principal avantage des Projects dans Claude Pro ?", options: [
        { id: "a", text: "Générer des images" },
        { id: "b", text: "Conserver le contexte de façon persistante entre les conversations" },
        { id: "c", text: "Accélérer les réponses" },
      ], correctId: "b", explanation: "Les Projects permettent à Claude de garder en mémoire le contexte d'un client ou projet entre toutes tes sessions. C'est la fonctionnalité qui change le plus le workflow." },

      { id: "1-19", type: "checklist", title: "Setup à faire maintenant", items: [
        { id: "c1", text: "Passer à Claude Pro (claude.ai/upgrade)" },
        { id: "c2", text: "Créer un premier Project 'Test — Mon Agence'" },
        { id: "c3", text: "Ajouter des instructions système dans ce projet" },
        { id: "c4", text: "Uploader un document (n'importe lequel) et demander à Claude de le résumer" },
        { id: "c5", text: "Générer un composant HTML simple et l'observer dans l'Artifact" },
      ]},
    ]),
    exercise: "<h3>Exercice — Configurer ton premier Project client</h3><ol><li>Crée un Project nommé 'Client Fictif — Restaurant Le Soleil'</li><li>Ajoute des instructions système avec le contexte du restaurant (nom, cuisine, cible, ton)</li><li>Dans ce projet, demande à Claude de rédiger 3 posts Instagram pour le restaurant</li><li>Observe comment Claude utilise le contexte sans que tu aies à tout réexpliquer</li><li>Note ce que tu changerais dans les instructions pour améliorer les résultats</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le principal avantage des Projects dans Claude Pro ?", options: JSON.stringify(["Générer des images plus rapidement", "Conserver le contexte de façon persistante entre les conversations", "Accéder à un modèle plus rapide", "Avoir plus de messages par jour"]), correctAnswer: "Conserver le contexte de façon persistante entre les conversations", explanation: "Les Projects permettent à Claude de garder en mémoire le contexte d'un client ou projet entre toutes tes sessions. Plus besoin de tout réexpliquer à chaque conversation." },
      { type: "true_false", question: "Claude Pro coûte 20$/mois et donne accès aux modèles Sonnet et Opus.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Claude Pro à 20$/mois donne accès à Claude Sonnet et Opus, un usage 5x supérieur, 200 000 tokens de contexte, les Projects, les Artifacts et l'upload de fichiers illimité." },
      { type: "mcq", question: "Qu'est-ce qu'un Artifact dans Claude Pro ?", options: JSON.stringify(["Un fichier PDF téléchargeable", "Un espace de travail où Claude affiche le code, documents et tableaux générés, avec prévisualisation et édition", "Un historique des conversations", "Un système de facturation"]), correctAnswer: "Un espace de travail où Claude affiche le code, documents et tableaux générés, avec prévisualisation et édition", explanation: "Les Artifacts sont un espace à droite de la conversation où Claude affiche le code, HTML, documents générés. On peut les prévisualiser, éditer directement, copier et demander des modifications." },
      { type: "true_false", question: "Il est recommandé de créer un Project par client dans Claude Pro.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La bonne pratique est de créer un Project par client (ou par projet). On y ajoute les instructions système et les documents du client pour que Claude soit immédiatement contextualisé." },
      { type: "mcq", question: "Un client te confie 5 projets différents en parallèle. Comment organises-tu ton travail dans Claude Pro pour ne pas mélanger les contextes ?", options: JSON.stringify(["Tu utilises une seule conversation et tu rappelles le contexte à chaque message", "Tu crées un Project par client avec ses instructions système et documents spécifiques", "Tu utilises la version gratuite pour chaque client séparément", "Tu copies-colles le contexte dans chaque nouvelle conversation"]), correctAnswer: "Tu crées un Project par client avec ses instructions système et documents spécifiques", explanation: "Les Projects de Claude Pro permettent de conserver le contexte de façon persistante entre les conversations. En créant un Project par client, Claude est immédiatement contextualisé sans avoir à tout réexpliquer." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 2,
    title: "Les 7 frameworks de prompting qui changent tout",
    slug: "7-frameworks-prompting-avances",
    duration: "30 min",
    description: "Maîtriser les 7 techniques de prompting les plus puissantes : RCTF, Chain of Thought, Few-Shot, Role-Play, Contraintes, Itération, Meta-prompting.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Au-delà de RCTF : le vrai prompting avancé" },
      { id: "2-2", type: "text", html: "<p>Dans le Module 1, tu as appris RCTF. C'est la base. Mais pour construire une agence IA sérieuse, tu as besoin de <strong>7 techniques que 95% des gens ne connaissent pas</strong>.</p><p>Ces frameworks vont transformer ta façon de travailler avec Claude. Tu passeras de \"ça marche à peu près\" à \"résultats professionnels du premier coup\".</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Pas besoin de tout mémoriser d'un coup. Lis chaque technique, teste-la immédiatement dans Claude, puis reviens à cette leçon comme référence." },

      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Framework 1 — RCTF (rappel enrichi)" },
      { id: "2-6", type: "text", html: "<p>Tu connais déjà RCTF. Voici comment le pousser plus loin avec des <strong>contraintes explicites</strong> :</p>" },
      { id: "2-7", type: "code", language: "text", filename: "rctf-avance.txt", code: "Rôle : Tu es un copywriter senior spécialisé en B2B SaaS.\n\nContexte : Client = logiciel de facturation pour artisans.\nCible = plombiers et électriciens, 35-50 ans, peu à l'aise avec la tech.\nProblème à résoudre = ils perdent des factures et oublient de relancer.\n\nTâche : Rédige 1 headline et 3 bullet points pour la landing page.\n\nFormat :\n- Headline : 8 mots max, bénéfice direct, pas de jargon tech\n- Chaque bullet : [Problème résolu] → [Bénéfice concret]\n- Ton : direct, rassurant, pas de buzzwords\n\nContraintes :\n- N'utilise JAMAIS les mots : innovant, révolutionnaire, solution\n- Le mot \"facture\" doit apparaître au moins 2 fois\n- S'adresser directement au lecteur avec 'tu'" },

      { id: "2-8", type: "separator", style: "dots" },
      { id: "2-9", type: "heading", level: 2, text: "Framework 2 — Chain of Thought (Raisonnement pas à pas)" },
      { id: "2-10", type: "text", html: "<p>Le Chain of Thought (CoT) force Claude à <strong>raisonner étape par étape</strong> avant de donner une réponse. Indispensable pour les problèmes complexes, les analyses, les stratégies.</p><p>La clé : ajouter la phrase <em>\"Réfléchis étape par étape avant de répondre\"</em> ou <em>\"Explique ton raisonnement\"</em>.</p>" },
      { id: "2-11", type: "comparison", headers: ["Sans Chain of Thought", "Avec Chain of Thought"], rows: [
        { cells: ["Réponse directe, souvent superficielle", "Raisonnement visible, logique, fiable"] },
        { cells: ["Claude peut se tromper sur des calculs", "Il détaille ses étapes, les erreurs sont rares"] },
        { cells: ["Idéal pour : tâches simples, formatage", "Idéal pour : stratégie, analyse, code complexe"] },
      ]},
      { id: "2-12", type: "code", language: "text", filename: "chain-of-thought.txt", code: "Je dois choisir entre deux outils d'automatisation pour un client :\n\nOption A : Make.com — 29€/mois, 10 000 opérations, interface visuelle\nOption B : n8n self-hosted — 0€/mois, opérations illimitées, technique\n\nMon client : cabinet de kinésithérapie, 3 praticiens.\nUsage prévu : confirmation de RDV par email + SMS + fiche dans Notion.\nCompétences tech du client : nulles.\nBudget mensuel : 50€ max tout compris.\n\nRéfléchis étape par étape en analysant :\n1. Adéquation technique\n2. Coût total (y compris temps de setup)\n3. Maintenabilité par le client\n\nConclus avec une recommandation claire et les raisons." },

      { id: "2-13", type: "separator", style: "dots" },
      { id: "2-14", type: "heading", level: 2, text: "Framework 3 — Few-Shot (exemples concrets)" },
      { id: "2-15", type: "text", html: "<p>Le Few-Shot consiste à <strong>montrer des exemples</strong> de ce que tu veux avant de demander. C'est la technique la plus efficace pour obtenir un format précis ou un style spécifique.</p><p>\"Montre, ne dis pas\" — c'est aussi vrai avec l'IA.</p>" },
      { id: "2-16", type: "code", language: "text", filename: "few-shot-exemple.txt", code: "Je vais te donner des exemples de titres de posts LinkedIn qui fonctionnent bien.\nPuis tu vas en générer 5 nouveaux sur le même sujet.\n\n== EXEMPLES (ne pas réutiliser) ==\n\nEx 1 : \"J'ai fait 3 000€ en 48h avec un chatbot que j'ai construit en 2h.\nVoici exactement comment.\"\n\nEx 2 : \"95% des restaurateurs ne savent pas qu'ils perdent des clients\nchaque nuit. Et ce n'est pas faute d'essayer.\"\n\nEx 3 : \"Mon premier client IA m'a dit non 3 fois.\nVoici ce que j'ai changé pour closer le 4ème appel.\"\n\n== SCHÉMA COMMUN ==\n- Ligne 1 : chiffre ou fait surprenant, court\n- Ligne 2 : context ou tension\n- Ligne 3 : promesse implicite de révélation\n\n== SUJET ==\nGénère 5 titres sur : automatiser ses relances clients avec l'IA." },

      { id: "2-17", type: "callout", variant: "success", html: "Avec 3 exemples bien choisis, Claude va <strong>reproduire ton style avec une précision impressionnante</strong>. C'est comme ça que tu crées du contenu qui sonne naturel." },

      { id: "2-18", type: "separator", style: "dots" },
      { id: "2-19", type: "heading", level: 2, text: "Framework 4 — Role-Play (expert simulé)" },
      { id: "2-20", type: "text", html: "<p>Le Role-Play va plus loin que juste donner un rôle. Tu crées un <strong>personnage complet avec une expertise, des opinions, et une façon de voir les choses</strong>. Claude se glisse dedans et te donne accès à une expertise de haut niveau.</p>" },
      { id: "2-21", type: "code", language: "text", filename: "role-play-expert.txt", code: "Tu es Marc Dupont, directeur commercial chez une agence digitale\nqui fait 2M€/an de CA. Tu as 15 ans d'expérience en vente B2B.\nTu as signé +200 clients PME.\n\nTu es direct, pragmatique, et tu ne mens jamais pour rassurer.\nTu détestes les vendeurs qui promettent n'importe quoi.\n\n== MA SITUATION ==\nJe suis en train de préparer une proposition pour une boulangerie\n(8 employés, pas de présence digitale). Je veux leur vendre\nun chatbot + un système de fidélité automatisé à 2 500€.\n\n== TES QUESTIONS ==\n1. Comment je justifie ce prix à quelqu'un qui ne connaît pas la tech ?\n2. Quelles objections vont sortir et comment je les contourne ?\n3. Quel est l'argument de vente le plus fort pour ce profil de client ?" },

      { id: "2-22", type: "separator", style: "dots" },
      { id: "2-23", type: "heading", level: 2, text: "Framework 5 — Contraintes créatives" },
      { id: "2-24", type: "text", html: "<p>Paradoxalement, <strong>plus tu contrains Claude, plus les résultats sont bons</strong>. Les contraintes éliminent le flou et forcent la précision. C'est valable pour l'écriture, le code, et la stratégie.</p>" },
      { id: "2-25", type: "steps", steps: [
        { title: "Contrainte de format", description: "\"Exactement 3 bullet points, max 10 mots chacun\" — Claude ne peut pas déborder." },
        { title: "Contrainte de ton", description: "\"Comme si tu expliquais à un enfant de 10 ans\" ou \"comme un mail entre collègues\"." },
        { title: "Contrainte d'exclusion", description: "\"Sans utiliser les mots : solution, optimiser, synergies, innovant.\" Ces mots creux disparaissent." },
        { title: "Contrainte de longueur", description: "\"En moins de 50 mots\" force l'essentiel. \"En exactement 280 caractères\" pour Twitter/X." },
        { title: "Contrainte de structure", description: "\"Commence chaque phrase par un verbe d'action\" — donne du punch." },
      ]},

      { id: "2-26", type: "separator", style: "dots" },
      { id: "2-27", type: "heading", level: 2, text: "Framework 6 — Itération dirigée" },
      { id: "2-28", type: "text", html: "<p>Le premier résultat de Claude est rarement le dernier. L'<strong>itération dirigée</strong>, c'est savoir comment relancer Claude pour améliorer progressivement. C'est une compétence à part entière.</p>" },
      { id: "2-29", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Prompt initial", description: "Version brouillon 1" },
        { id: "n2", label: "\"Rends ça plus direct, coupe 30%\"", description: "Version plus impactante" },
        { id: "n3", label: "\"Remplace X par Y, ajoute un chiffre\"", description: "Version personnalisée" },
        { id: "n4", label: "\"Maintenant propose 3 variantes du titre\"", description: "Options à tester" },
        { id: "n5", label: "Résultat final utilisable", description: "En 4 échanges, pas 1 seul" },
      ]},
      { id: "2-30", type: "callout", variant: "tip", html: "Formules d'itération puissantes : <em>\"Garde la structure, change le ton\"</em> / <em>\"Version plus courte\"</em> / <em>\"Propose une alternative radicalement différente\"</em> / <em>\"Qu'est-ce qui rend cette version faible ? Améliore-la.\"</em>" },

      { id: "2-31", type: "separator", style: "dots" },
      { id: "2-32", type: "heading", level: 2, text: "Framework 7 — Meta-prompting" },
      { id: "2-33", type: "text", html: "<p>Le meta-prompting, c'est <strong>demander à Claude d'améliorer ton prompt</strong> ou de créer un prompt pour toi. Utilise l'IA pour devenir meilleur à utiliser l'IA.</p>" },
      { id: "2-34", type: "code", language: "text", filename: "meta-prompt.txt", code: "== TECHNIQUE 1 : Améliorer son propre prompt ==\n\nVoici mon prompt actuel :\n\"Écris-moi un email pour trouver des clients.\"\n\nC'est trop vague. Améliore ce prompt en ajoutant :\n- Le bon rôle\n- Le contexte nécessaire\n- La tâche précise\n- Le format idéal\n- 3 contraintes pertinentes\n\nDonne-moi le prompt amélioré, prêt à l'emploi.\n\n---\n\n== TECHNIQUE 2 : Créer un prompt de zéro ==\n\nJe veux un prompt réutilisable pour générer des posts LinkedIn\nà partir d'une anecdote client.\n\nLe prompt doit :\n- Demander les inputs nécessaires (anecdote, contexte, objectif)\n- Produire 3 variantes (émotionnelle, pratique, polémique)\n- Inclure les contraintes de format LinkedIn\n\nCrée ce prompt template avec des [VARIABLES] à remplir." },

      { id: "2-35", type: "separator", style: "line" },
      { id: "2-36", type: "quiz-inline", question: "Quelle technique utilises-tu quand tu fournis 3 exemples avant de faire ta vraie demande ?", options: [
        { id: "a", text: "Chain of Thought" },
        { id: "b", text: "Few-Shot" },
        { id: "c", text: "Meta-prompting" },
      ], correctId: "b", explanation: "Le Few-Shot consiste à montrer des exemples (few = quelques, shot = exemples) pour guider le modèle vers le format et le style exact que tu veux." },

      { id: "2-37", type: "checklist", title: "Les 7 frameworks maîtrisés", items: [
        { id: "c1", text: "RCTF avancé avec contraintes explicites" },
        { id: "c2", text: "Chain of Thought : 'Réfléchis étape par étape'" },
        { id: "c3", text: "Few-Shot : 3 exemples avant la vraie demande" },
        { id: "c4", text: "Role-Play : expert avec personnalité complète" },
        { id: "c5", text: "Contraintes créatives : format, ton, exclusion" },
        { id: "c6", text: "Itération dirigée : améliorer en 4 échanges" },
        { id: "c7", text: "Meta-prompting : Claude améliore mes prompts" },
      ]},
    ]),
    exercise: "<h3>Exercice — Le challenge des 7 frameworks</h3><p>Prends un seul sujet (ex : \"rédiger un email de bienvenue pour les clients d'un salon de coiffure\"). Applique chacun des 7 frameworks à ce même sujet. Compare les résultats. Tu vas voir des différences massives selon la technique utilisée. Note pour chaque framework : dans quel cas concret tu l'utiliserais pour ton agence.</p>",
    quiz: [
      { type: "mcq", question: "Quelle technique de prompting consiste à fournir 3 exemples concrets avant de faire sa demande ?", options: JSON.stringify(["Chain of Thought", "Few-Shot", "Meta-prompting", "Role-Play"]), correctAnswer: "Few-Shot", explanation: "Le Few-Shot (few = quelques, shot = exemples) consiste à montrer des exemples de ce que tu veux avant de demander. C'est la technique la plus efficace pour obtenir un format précis ou un style spécifique." },
      { type: "true_false", question: "Plus tu contrains Claude avec des règles précises, moins les résultats sont bons.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse ! Plus tu contrains Claude, plus les résultats sont bons. Les contraintes éliminent le flou et forcent la précision, que ce soit pour l'écriture, le code ou la stratégie." },
      { type: "mcq", question: "Le Chain of Thought (CoT) est particulièrement utile pour quel type de tâche ?", options: JSON.stringify(["Formatage de texte simple", "Stratégie, analyse et code complexe", "Génération d'images", "Traduction de textes courts"]), correctAnswer: "Stratégie, analyse et code complexe", explanation: "Le Chain of Thought force Claude à raisonner étape par étape avant de répondre. Il est idéal pour les problèmes complexes, les analyses stratégiques et le code complexe où un raisonnement visible et logique est crucial." },
      { type: "true_false", question: "Le meta-prompting consiste à demander à Claude d'améliorer tes propres prompts.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le meta-prompting, c'est utiliser l'IA pour devenir meilleur à utiliser l'IA. Tu peux demander à Claude d'améliorer un prompt existant ou de créer un prompt template complet de zéro." },
      { type: "mcq", question: "Un client te demande d'écrire un email de relance pour ses prospects inactifs. Tu veux que Claude reproduise exactement le ton de ses emails précédents. Quelle technique de prompting utilises-tu ?", options: JSON.stringify(["Le Chain of Thought pour que Claude réfléchisse étape par étape", "Le Few-Shot en fournissant 3 exemples d'emails précédents du client", "Le Meta-prompting pour que Claude crée le prompt à ta place", "Les Contraintes créatives en limitant le nombre de mots"]), correctAnswer: "Le Few-Shot en fournissant 3 exemples d'emails précédents du client", explanation: "Le Few-Shot est la technique la plus efficace pour reproduire un style spécifique. En montrant 3 exemples d'emails existants du client, Claude reproduit le ton et le format avec une grande précision." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 2,
    title: "Prompts pour le business : emails, offres, contenus",
    slug: "prompts-business-emails-offres-contenus",
    duration: "25 min",
    description: "Templates de prompts business immédiatement utilisables : cold email, offre commerciale, posts LinkedIn, landing pages.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Des prompts qui valent de l'argent" },
      { id: "3-2", type: "text", html: "<p>Cette leçon est différente. Pas de théorie. Que des <strong>prompts concrets, testés, prêts à l'emploi</strong>. Tu peux les copier, les adapter à ton cas, et les utiliser aujourd'hui.</p><p>Chaque prompt va te faire gagner 30 min à 2h de travail. Multiplie ça par 5 fois par semaine, et tu comprends pourquoi ces outils sont si précieux.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "Sauvegarde cette leçon en favoris. Tu vas y revenir souvent. On la complète régulièrement avec de nouveaux templates." },

      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Template 1 — Cold Email de prospection" },
      { id: "3-6", type: "text", html: "<p>Le cold email reste le canal de prospection B2B le plus efficace. Voici le prompt qui génère des emails avec un taux d'ouverture élevé :</p>" },
      { id: "3-7", type: "code", language: "text", filename: "prompt-cold-email.txt", code: "Rôle : Tu es un expert en cold outreach B2B avec 8 ans d'expérience.\n\nContexte :\n- Mon service : création de chatbots IA pour automatiser le support client\n- Mon prospect : [NOM DU PROSPECT], directeur de [NOM ENTREPRISE]\n- Secteur : [SECTEUR] (ex : e-commerce, immobilier, formation...)\n- Problème probable : son équipe répond aux mêmes questions en boucle\n- Résultat client exemple : -70% du temps de support, réponses instantanées 24/7\n\nTâche : Rédige 1 cold email de prospection.\n\nFormat :\n- Objet : 6 mots max, curiosité ou bénéfice direct, pas de spam words\n- Corps : 4 paragraphes\n  1. Accroche personnalisée (1 phrase sur leur business)\n  2. Problème qu'ils ont probablement (1-2 phrases)\n  3. Ce que j'ai fait pour un client similaire (chiffres)\n  4. CTA ultra-simple (15 min, pas plus)\n- Signature : prénom seulement\n\nContraintes :\n- Max 120 mots dans le corps\n- 0 mention de 'révolutionnaire', 'innovant', 'solution IA'\n- Ton humain, pas corporate" },
      { id: "3-8", type: "callout", variant: "success", html: "Ce template génère des emails avec un taux de réponse typique de 8-15% en cold outreach. La clé : personnalisation + chiffre concret + CTA simple." },

      { id: "3-9", type: "separator", style: "dots" },
      { id: "3-10", type: "heading", level: 2, text: "Template 2 — Offre commerciale" },
      { id: "3-11", type: "code", language: "text", filename: "prompt-offre-commerciale.txt", code: "Rôle : Tu es consultant business avec une expertise en tarification et positionnement.\n\nContexte du projet :\n- Client : [NOM CLIENT], [TYPE D'ENTREPRISE]\n- Besoin identifié : [BESOIN PRÉCIS, ex : chatbot pour qualifier les leads entrants]\n- Ce que je vais livrer : [LIVRABLE CONCRET]\n- Durée de projet estimée : [X semaines]\n- Mon prix : [MONTANT €]\n\nTâche : Rédige une proposition commerciale en 5 sections.\n\nStructure OBLIGATOIRE :\n1. Résumé exécutif (2-3 phrases : problème + solution + résultat attendu)\n2. Ce qu'on observe chez eux (problème diagnostiqué en 3 bullets)\n3. Notre approche (étapes du projet, ce qu'on livre à chaque phase)\n4. Résultats attendus (chiffrés, basés sur des cas similaires)\n5. Investissement (prix, ce qui est inclus, ce qui ne l'est pas, garantie)\n\nContraintes :\n- Pas de jargon tech dans les parties client (sauf partie 3)\n- Chaque bénéfice doit être chiffré ou mesurable\n- Le prix doit être ancré par rapport à la valeur (montrer le ROI)\n- Ton professionnel mais accessible, pas prétentieux" },

      { id: "3-12", type: "separator", style: "dots" },
      { id: "3-13", type: "heading", level: 2, text: "Template 3 — Posts LinkedIn haute performance" },
      { id: "3-14", type: "text", html: "<p>LinkedIn est le meilleur canal pour trouver des clients B2B. Voici comment générer des posts qui créent de l'engagement et attirent des prospects :</p>" },
      { id: "3-15", type: "code", language: "text", filename: "prompt-linkedin-post.txt", code: "Rôle : Tu es expert en content marketing LinkedIn, tu as géré des comptes\nqui font 10K à 100K impressions par post.\n\nContexte :\n- Mon profil : [TON TITRE, ex : Consultant en automatisation IA pour PME]\n- Mon audience cible : [CIBLE, ex : dirigeants de PME, 30-55 ans]\n- Sujet du post : [ANECDOTE OU INSIGHT, ex : un client qui doutait de l'IA\n  vient de me rappeler pour un 2ème projet après ses résultats]\n\nTâche : Rédige 3 variantes du même post (différents angles).\n\nVariante A — Storytelling émotionnel :\n- Commence par une scène ou un moment précis\n- Crée une tension (doute, problème, obstacle)\n- Résolution avec leçon business\n\nVariante B — Post tactique :\n- Chiffre ou fait surprenant en ligne 1\n- Liste de 3-5 points actionnables\n- Question finale pour les commentaires\n\nVariante C — Contre-intuitive :\n- Commence par une opinion qui divise\n- Argumente avec faits + expérience\n- Conclusion qui invite au débat\n\nContraintes pour toutes :\n- Ligne 1 = accroche qui force à cliquer sur 'voir plus' (max 12 mots)\n- Max 1 500 caractères par post\n- 0 hashtags dans le corps (juste 2-3 à la fin)\n- 1 call-to-action question à la fin" },

      { id: "3-16", type: "separator", style: "dots" },
      { id: "3-17", type: "heading", level: 2, text: "Template 4 — Landing page persuasive" },
      { id: "3-18", type: "code", language: "text", filename: "prompt-landing-page.txt", code: "Rôle : Tu es copywriter spécialisé en landing pages avec un taux de conversion\nmoyen de 8-12% (vs 2-3% pour la moyenne du marché).\n\nContexte :\n- Produit/Service : [TON SERVICE, ex : chatbot IA pour restaurants]\n- Cible : [PROFIL PRÉCIS, ex : restaurateurs 1-5 tables, Lyon]\n- Prix : [PRIX, ex : 1 500€ installation + 150€/mois]\n- Principale objection : [ex : 'ça va pas fonctionner pour mon cas']\n- Preuve sociale disponible : [ex : 3 clients avec résultats chiffrés]\n\nTâche : Rédige la structure complète de la landing page (texte seulement).\n\nSections à inclure :\n1. Hero : headline + sous-headline + CTA primaire\n2. Problème amplifié : 3 situations douloureuses que le client reconnaît\n3. Solution : comment ça fonctionne (3 étapes simples)\n4. Preuves : 2 témoignages client format avant/après\n5. FAQ : 5 questions/objections les plus courantes\n6. CTA final : urgence + garantie + bouton\n\nContraintes :\n- Headline : bénéfice spécifique + chiffre si possible + max 10 mots\n- Pas de 'nous' ni de 'notre entreprise' — tout centré sur LE CLIENT\n- Chaque section doit répondre à : 'qu'est-ce que j'y gagne ?'" },
      { id: "3-19", type: "callout", variant: "tip", html: "Pour la landing page, upload le site existant du client dans Claude avant de lancer ce prompt. Il va s'en inspirer pour rester cohérent avec leur univers." },

      { id: "3-20", type: "separator", style: "line" },
      { id: "3-21", type: "heading", level: 2, text: "Template 5 — Séquence email de nurturing" },
      { id: "3-22", type: "code", language: "text", filename: "prompt-sequence-emails.txt", code: "Rôle : Tu es expert en email marketing automation et customer journey.\n\nContexte :\n- Produit : [SERVICE OU PRODUIT]\n- Cible : prospects qui ont téléchargé un lead magnet / rempli un formulaire\n- Objectif : les amener à prendre un RDV découverte en 5 emails sur 10 jours\n\nTâche : Crée une séquence de 5 emails avec le calendrier d'envoi.\n\nStructure de la séquence :\nEmail J+0 : Bienvenue + promesse (ce qu'ils vont recevoir)\nEmail J+2 : Valeur pure (conseil actionnable, pas de vente)\nEmail J+4 : Étude de cas (résultat client + histoire)\nEmail J+7 : Objection la plus courante démantelée\nEmail J+10 : Offre + CTA RDV découverte (urgence douce)\n\nPour chaque email :\n- Objet (A/B : donne 2 versions)\n- Corps (max 200 mots)\n- Un seul CTA par email\n\nContraintes :\n- Ton : amical, expert, jamais pushy\n- Chaque email doit apporter de la valeur même si le prospect n'achète jamais\n- Personnalisation avec [PRÉNOM] à chaque fois" },

      { id: "3-23", type: "separator", style: "dots" },
      { id: "3-24", type: "quiz-inline", question: "Dans un cold email, quelle est la règle la plus importante ?", options: [
        { id: "a", text: "Expliquer en détail tout ce que tu sais faire" },
        { id: "b", text: "Max 120 mots, chiffre concret, CTA ultra-simple" },
        { id: "c", text: "Mentionner le prix dès le premier email" },
      ], correctId: "b", explanation: "Un cold email doit être court (le prospect ne te connaît pas), contenir un résultat chiffré (crédibilité), et demander quelque chose de simple (15 min, pas 1h)." },

      { id: "3-25", type: "checklist", title: "Templates à configurer maintenant", items: [
        { id: "c1", text: "Copier le prompt cold email et le remplir avec mon service et ma cible" },
        { id: "c2", text: "Générer une offre commerciale pour un client fictif" },
        { id: "c3", text: "Créer 3 variantes d'un post LinkedIn sur mon expertise" },
        { id: "c4", text: "Sauvegarder ces prompts dans mon Project Claude" },
        { id: "c5", text: "Identifier le template le plus utile pour ma situation actuelle" },
      ]},
    ]),
    exercise: "<h3>Exercice — Ton kit de démarrage business</h3><ol><li>Choisis un service que tu veux vendre (chatbot, automatisation, site web...)</li><li>Définis une cible précise (ex : salons de coiffure, avocats, agences immo)</li><li>Utilise le prompt cold email pour générer 2 emails de prospection pour cette cible</li><li>Utilise le prompt LinkedIn pour générer 1 post sur ce service</li><li>Crée un Project Claude 'Business Templates' et colle-y tous les prompts de cette leçon avec tes infos remplies</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la longueur maximale recommandée pour le corps d'un cold email de prospection ?", options: JSON.stringify(["50 mots", "120 mots", "300 mots", "500 mots"]), correctAnswer: "120 mots", explanation: "Un cold email doit faire maximum 120 mots dans le corps. Le prospect ne te connaît pas, donc il faut être concis : accroche personnalisée, problème identifié, résultat chiffré et CTA simple." },
      { type: "true_false", question: "Dans un cold email, il est recommandé de mentionner le prix de ses services dès le premier contact.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le cold email ne doit jamais mentionner le prix. L'objectif est d'obtenir un rendez-vous court (15 min) pour qualifier le prospect. Le prix vient plus tard dans le processus de vente." },
      { type: "mcq", question: "Combien de variantes de post LinkedIn le template recommande-t-il de créer ?", options: JSON.stringify(["1 variante", "2 variantes", "3 variantes (storytelling, tactique, contre-intuitive)", "5 variantes"]), correctAnswer: "3 variantes (storytelling, tactique, contre-intuitive)", explanation: "Le template prévoit 3 variantes : Storytelling émotionnel (scène + tension + résolution), Post tactique (chiffre + liste + question), et Contre-intuitive (opinion qui divise + argumentation)." },
      { type: "true_false", question: "La séquence email de nurturing compte 5 emails envoyés sur 10 jours.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La séquence se décompose en 5 emails sur 10 jours : J+0 bienvenue, J+2 valeur pure, J+4 étude de cas, J+7 objection démantelée, J+10 offre avec CTA de RDV découverte." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : un prospect ne répond pas à votre premier cold email. Quelle approche adoptez-vous pour le relancer efficacement ?", options: JSON.stringify(["Renvoyer exactement le même email une semaine plus tard", "Utiliser le template de séquence nurturing : envoyer un email de valeur pure (conseil actionnable) à J+2 sans CTA de vente", "Appeler directement le prospect pour lui demander pourquoi il n'a pas répondu", "Envoyer un email plus long avec tous les détails de vos services et vos prix"]), correctAnswer: "Utiliser le template de séquence nurturing : envoyer un email de valeur pure (conseil actionnable) à J+2 sans CTA de vente", explanation: "La séquence de nurturing prévoit un email de valeur pure à J+2 (conseil actionnable, pas de vente). L'objectif est de créer de la confiance avant de vendre. Chaque email doit apporter de la valeur même si le prospect n'achète jamais." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 2,
    title: "Prompts pour le code : de l'idée au prototype",
    slug: "prompts-code-idee-prototype",
    duration: "30 min",
    description: "Maîtriser les prompts pour générer du code, débugger, refactorer, créer des composants et des APIs — même sans être développeur.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Tu n'as pas besoin de coder pour créer des apps" },
      { id: "4-2", type: "text", html: "<p>Réalité de 2025 : <strong>Claude peut écrire 80-90% du code à ta place</strong>. Ton rôle, c'est de savoir quoi demander, comment le demander, et comment corriger quand ça coince.</p><p>Dans cette leçon, tu vas apprendre exactement comment faire ça — de la première idée jusqu'au prototype fonctionnel.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "Important : le code généré par l'IA n'est pas parfait du premier coup. L'objectif c'est de <strong>comprendre la structure</strong>, pas de copier-coller aveuglément. On te montre comment itérer." },

      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Framework — Prompt de génération de code" },
      { id: "4-6", type: "text", html: "<p>Pour générer du code de qualité, il faut donner à Claude le <strong>contexte technique complet</strong>. Voici la structure optimale :</p>" },
      { id: "4-7", type: "steps", steps: [
        { title: "1. Stack technique", description: "Précise exactement les outils : Next.js 14, TypeScript, Tailwind CSS, Supabase... Claude adapte le code selon les versions." },
        { title: "2. Ce qui existe déjà", description: "Décris la structure actuelle du projet. Si possible, colle le code existant dans Claude avant de demander une nouvelle fonctionnalité." },
        { title: "3. Comportement attendu", description: "Décris ce que l'utilisateur doit voir et faire — pas comment coder, mais ce que ça doit faire." },
        { title: "4. Contraintes techniques", description: "Performances, sécurité, accessibilité, compatibilité navigateur. Ce que tu ne veux PAS autant que ce que tu veux." },
        { title: "5. Format de sortie", description: "Un seul fichier ? Plusieurs composants séparés ? Avec commentaires ? Avec les imports ?" },
      ]},

      { id: "4-8", type: "heading", level: 2, text: "Prompt 1 — Créer un composant React" },
      { id: "4-9", type: "code", language: "text", filename: "prompt-composant-react.txt", code: "Stack : Next.js 14 (App Router), TypeScript, Tailwind CSS.\n\nJe veux créer un composant de formulaire de contact.\n\nComportement :\n- 3 champs : Nom (texte), Email (email), Message (textarea)\n- Bouton d'envoi avec état loading\n- Validation côté client : tous les champs obligatoires, email valide\n- En cas de succès : message de confirmation vert\n- En cas d'erreur : message d'erreur rouge avec le détail\n- L'envoi appelle POST /api/contact avec les données en JSON\n\nContraintes :\n- Utiliser React Hook Form pour la validation\n- Utiliser les patterns Tailwind pour le style (pas de CSS custom)\n- Composant entièrement typé en TypeScript\n- Accessible : labels liés aux inputs, erreurs décrites\n\nSortie : un seul fichier ContactForm.tsx, avec les imports." },
      { id: "4-10", type: "callout", variant: "success", html: "Avec ce niveau de précision, Claude génère un composant fonctionnel, typé, accessible et stylisé en une seule réponse. Plus qu'à tester." },

      { id: "4-11", type: "separator", style: "dots" },
      { id: "4-12", type: "heading", level: 2, text: "Prompt 2 — Créer une API Route" },
      { id: "4-13", type: "code", language: "text", filename: "prompt-api-route.txt", code: "Stack : Next.js 14 App Router, TypeScript, Supabase pour la BDD.\n\nCrée une API Route POST /api/contact qui :\n1. Reçoit un body JSON : { name: string, email: string, message: string }\n2. Valide les données (champs obligatoires, format email)\n3. Insère dans la table Supabase 'contacts' avec les champs :\n   - id (uuid auto)\n   - name, email, message\n   - created_at (timestamp auto)\n   - status: 'new' (valeur par défaut)\n4. Envoie un email de notification à admin@monagence.com\n   via Resend API (j'ai déjà RESEND_API_KEY dans .env)\n5. Retourne { success: true } si tout va bien\n6. Retourne { error: string } avec le bon status HTTP si erreur\n\nContraintes :\n- Pas de données sensibles dans les logs\n- Rate limiting : max 5 requêtes par IP par heure (utiliser une variable en mémoire)\n- Gestion d'erreurs complète avec try/catch\n\nFichier : app/api/contact/route.ts" },

      { id: "4-14", type: "separator", style: "dots" },
      { id: "4-15", type: "heading", level: 2, text: "Prompt 3 — Débugger du code" },
      { id: "4-16", type: "text", html: "<p>Le debug avec Claude est <strong>3x plus rapide</strong> que de chercher tout seul. La clé : donner le maximum de contexte. Ne dis pas juste \"ça marche pas\".</p>" },
      { id: "4-17", type: "code", language: "text", filename: "prompt-debug.txt", code: "J'ai un bug sur ce code et j'ai besoin de ton aide pour le résoudre.\n\n== CODE CONCERNÉ ==\n[COLLER TON CODE ICI]\n\n== COMPORTEMENT ATTENDU ==\nQuand l'utilisateur clique sur 'Envoyer', le formulaire doit se soumettre\net afficher un message de succès.\n\n== COMPORTEMENT ACTUEL ==\nLe formulaire se recharge la page au lieu d'envoyer les données.\nErreur dans la console : \"Cannot read properties of undefined (reading 'preventDefault')\"\n\n== CONTEXTE ==\n- Framework : Next.js 14\n- Navigateurs testés : Chrome 120\n- Ce qui a changé récemment : j'ai refactorisé le composant en composant serveur\n\n== CE QUE J'AI DÉJÀ ESSAYÉ ==\n- Ajouté 'use client' en haut du fichier → même erreur\n- Vérifié que l'event est bien passé en paramètre → oui\n\nAnalyse le problème et propose une correction avec explication." },
      { id: "4-18", type: "callout", variant: "tip", html: "<strong>Règle d'or du debug avec Claude :</strong> décris toujours ce que tu vois (comportement actuel) ET ce que tu attends (comportement attendu). Plus tu es précis, plus vite il trouve." },

      { id: "4-19", type: "separator", style: "dots" },
      { id: "4-20", type: "heading", level: 2, text: "Prompt 4 — Refactorer du code existant" },
      { id: "4-21", type: "code", language: "text", filename: "prompt-refactor.txt", code: "Voici un composant qui fonctionne mais qui est mal structuré.\nJe veux le refactorer pour qu'il soit plus maintenable.\n\n== CODE ACTUEL ==\n[COLLER LE CODE]\n\n== OBJECTIFS DU REFACTORING ==\n1. Extraire la logique métier dans un hook custom useContactForm\n2. Séparer les sous-composants (FormField, SubmitButton) dans des fichiers à part\n3. Supprimer les duplications\n4. Améliorer les types TypeScript (actuellement beaucoup de 'any')\n\n== CONTRAINTES ==\n- Le comportement visible ne doit PAS changer\n- Garder la compatibilité avec l'API existante\n- Pas d'ajout de nouvelles dépendances\n\nDonne-moi :\n1. La liste des fichiers à créer/modifier\n2. Le code de chaque fichier\n3. Une explication de chaque décision architecturale" },

      { id: "4-22", type: "separator", style: "dots" },
      { id: "4-23", type: "heading", level: 2, text: "Prompt 5 — Créer un prototype rapide" },
      { id: "4-24", type: "text", html: "<p>Pour impressionner un client ou valider une idée, tu as besoin d'un prototype en quelques heures. Voici comment demander à Claude de construire une app complète :</p>" },
      { id: "4-25", type: "code", language: "text", filename: "prompt-prototype.txt", code: "Je veux créer un prototype fonctionnel en HTML/CSS/JS vanilla.\n(Pas de framework — doit s'ouvrir directement dans un navigateur.)\n\nApp : Calculateur de ROI pour un chatbot IA\n\nFonctionnement :\n- L'utilisateur entre : nombre de questions/jour au support, temps\n  moyen par question (minutes), coût horaire d'un agent support\n- Le calculateur affiche :\n  - Coût actuel mensuel du support\n  - Coût avec chatbot (licence 200€/mois)\n  - Économie mensuelle en € et en %\n  - ROI sur 12 mois\n  - Un message de conclusion adapté (bon / excellent / exceptionnel)\n\nDesign :\n- Clean et professionnel (fond blanc, accents bleu #3B82F6)\n- Mise à jour en temps réel (pas de bouton valider)\n- Responsive mobile\n- Un bouton 'Obtenir une démo' qui ouvre mailto:contact@monagence.fr\n\nTout dans un seul fichier index.html." },

      { id: "4-26", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Idée de feature", description: "Ce que tu veux créer" },
        { id: "n2", label: "Prompt de génération", description: "Stack + comportement + contraintes" },
        { id: "n3", label: "Code généré", description: "Claude écrit le code" },
        { id: "n4", label: "Test & erreurs", description: "Identifier ce qui coince" },
        { id: "n5", label: "Prompt de debug", description: "Erreur + contexte + ce que j'ai essayé" },
        { id: "n6", label: "Version fonctionnelle", description: "Prête à montrer au client" },
      ]},

      { id: "4-27", type: "quiz-inline", question: "Qu'est-ce qui est le plus important dans un prompt de debug ?", options: [
        { id: "a", text: "Décrire le comportement actuel ET le comportement attendu" },
        { id: "b", text: "Mettre tout le code de l'application" },
        { id: "c", text: "Expliquer que c'est urgent" },
      ], correctId: "a", explanation: "La différence entre ce qu'on voit (comportement actuel) et ce qu'on veut (comportement attendu) permet à Claude d'identifier précisément où est le problème." },

      { id: "4-28", type: "checklist", title: "Compétences code à pratiquer", items: [
        { id: "c1", text: "Générer un composant React de A à Z avec le bon prompt" },
        { id: "c2", text: "Créer une API Route avec validation et gestion d'erreurs" },
        { id: "c3", text: "Débugger une erreur réelle avec le framework de debug" },
        { id: "c4", text: "Créer le prototype ROI calculator en HTML/JS" },
        { id: "c5", text: "Pratiquer le refactoring sur du code existant" },
      ]},
    ]),
    exercise: "<h3>Exercice — Construire le calculateur ROI</h3><p>Utilise le prompt du calculateur ROI de cette leçon pour créer un fichier <code>roi-calculator.html</code>. Adapte-le à ton service (chatbot, automatisation...). Ouvre-le dans ton navigateur et vérifie qu'il fonctionne. Ensuite, teste-le en situation réelle : la prochaine fois qu'un prospect hésite sur le prix, ouvre ce calculateur et fais le calcul avec lui en live. C'est un des meilleurs outils de vente que tu puisses avoir.</p>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 5 informations essentielles à donner dans un prompt de génération de code ?", options: JSON.stringify(["Nom du projet, budget, deadline, client, objectif", "Stack technique, code existant, comportement attendu, contraintes techniques, format de sortie", "Langage, IDE, système d'exploitation, version de Node, base de données", "Couleurs, polices, tailles, marges, animations"]), correctAnswer: "Stack technique, code existant, comportement attendu, contraintes techniques, format de sortie", explanation: "Pour générer du code de qualité, il faut préciser : la stack technique (Next.js, TypeScript...), ce qui existe déjà, le comportement attendu, les contraintes techniques et le format de sortie souhaité." },
      { type: "true_false", question: "Claude peut écrire 80-90% du code à ta place en 2025.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "En 2025, Claude peut écrire 80-90% du code. Le rôle du développeur IA est de savoir quoi demander, comment le demander, et comment corriger quand ça coince." },
      { type: "mcq", question: "Quelle est la règle d'or du debug avec Claude ?", options: JSON.stringify(["Envoyer tout le code de l'application", "Décrire le comportement actuel ET le comportement attendu", "Dire que c'est urgent pour avoir une réponse plus rapide", "Ne rien expliquer et laisser Claude trouver seul"]), correctAnswer: "Décrire le comportement actuel ET le comportement attendu", explanation: "La règle d'or : toujours décrire ce que tu vois (comportement actuel) ET ce que tu attends (comportement attendu). Plus tu es précis, plus vite Claude trouve le problème." },
      { type: "true_false", question: "Le code généré par Claude nécessite généralement quelques itérations (test, debug, ajustement) avant d'être prêt pour la production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le code généré par l'IA suit un cycle naturel : génération → test → debug → version fonctionnelle. C'est normal et prévu — l'important est de savoir itérer efficacement avec les bons prompts de debug." },
      { type: "mcq", question: "Un prospect hésite à signer car il ne visualise pas ce que donnerait un chatbot sur son site. Tu veux le convaincre en 2h. Quelle approche adoptes-tu ?", options: JSON.stringify(["Tu lui envoies des captures d'écran de chatbots existants", "Tu crées un prototype fonctionnel en HTML/JS vanilla avec Claude et tu lui fais une démo live", "Tu lui rédiges un document technique de 10 pages expliquant l'architecture", "Tu lui proposes de commencer le projet complet et de voir le résultat dans 3 semaines"]), correctAnswer: "Tu crées un prototype fonctionnel en HTML/JS vanilla avec Claude et tu lui fais une démo live", explanation: "Un prompt de prototype en HTML/CSS/JS vanilla permet de créer une démo fonctionnelle en quelques heures, sans framework. Le fichier s'ouvre directement dans le navigateur. C'est un des meilleurs outils de closing." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 2,
    title: "Ton prompt library personnelle",
    slug: "prompt-library-personnelle",
    duration: "20 min",
    description: "Organiser ses prompts, créer des templates réutilisables, et construire un workflow quotidien efficace avec Claude.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Tes prompts sont un actif" },
      { id: "5-2", type: "text", html: "<p>La plupart des gens utilisent l'IA de manière chaotique — ils réinventent les mêmes prompts à chaque fois. C'est une <strong>perte de temps massive</strong>.</p><p>Les pros construisent une <strong>prompt library</strong> : une bibliothèque organisée de prompts testés, affinés, réutilisables. C'est un avantage concurrentiel réel — tes prompts s'améliorent avec le temps pendant que la concurrence recommence à zéro.</p>" },
      { id: "5-3", type: "callout", variant: "tip", html: "Un bon prompt library = <strong>des heures économisées chaque semaine</strong>. Un consultant IA avec 50 prompts bien calibrés livre 3x plus vite qu'un sans organisation." },

      { id: "5-4", type: "separator", style: "dots" },
      { id: "5-5", type: "heading", level: 2, text: "Architecture de ta prompt library" },
      { id: "5-6", type: "diagram", variant: "tree", nodes: [
        { id: "root", label: "Prompt Library", description: "" },
        { id: "biz", label: "Business & Vente", description: "Cold emails, offres, follow-ups, closing" },
        { id: "content", label: "Contenu", description: "LinkedIn, emails clients, articles, newsletters" },
        { id: "code", label: "Développement", description: "Composants, APIs, debug, refacto, tests" },
        { id: "ops", label: "Opérationnel", description: "CR réunion, briefs clients, onboarding" },
        { id: "sys", label: "Prompts Système", description: "Pour chatbots clients (par secteur)" },
      ]},

      { id: "5-7", type: "heading", level: 2, text: "Le format idéal d'un prompt template" },
      { id: "5-8", type: "text", html: "<p>Un prompt réutilisable doit avoir une structure avec des <strong>variables clairement identifiées</strong>. Utilise des crochets <code>[VARIABLE]</code> pour tout ce qui change d'un usage à l'autre.</p>" },
      { id: "5-9", type: "code", language: "text", filename: "template-format-type.txt", code: "// ── PROMPT : [NOM DU PROMPT] ──\n// Catégorie : [CATÉGORIE]\n// Usage : [QUAND UTILISER CE PROMPT]\n// Dernière mise à jour : [DATE]\n\nRôle : [RÔLE FIXE OU VARIABLE]\n\nContexte :\n- Service/Produit : [MON SERVICE]\n- Client/Cible : [TYPE DE CLIENT]\n- Situation : [DÉCRIRE LA SITUATION]\n\nTâche : [CE QUE JE VEUX]\n\nFormat :\n[STRUCTURE DE LA SORTIE]\n\nContraintes :\n- [CONTRAINTE 1]\n- [CONTRAINTE 2]\n\n// ── VARIABLES À REMPLIR ──\n// [MON SERVICE] = ex : chatbot IA, automatisation\n// [TYPE DE CLIENT] = ex : restaurant, e-commerce\n// [DÉCRIRE LA SITUATION] = ex : 1er contact, après démo" },

      { id: "5-10", type: "separator", style: "dots" },
      { id: "5-11", type: "heading", level: 2, text: "Où stocker ta prompt library" },
      { id: "5-12", type: "comparison", headers: ["Outil", "Avantages", "Inconvénients", "Recommandé pour"], rows: [
        { cells: ["Claude Projects", "Accessible depuis Claude, mémoire IA, gratuit", "Pas de recherche avancée, pas de partage", "Prompts courants, usage quotidien"] },
        { cells: ["Notion", "Organisation, recherche, partage équipe", "Pas d'exécution directe dans Claude", "Bibliothèque complète, équipe"] },
        { cells: ["Google Docs", "Simple, partage facile, versionné", "Aucune IA native, basique", "Débutant, backup simple"] },
        { cells: ["Fichiers .txt/.md locaux", "Toujours accessible, pas de connexion", "Aucune organisation automatique", "Backup, archives"] },
      ]},
      { id: "5-13", type: "callout", variant: "info", html: "Recommandation : <strong>Claude Projects pour l'usage quotidien + Notion pour l'archive</strong>. Commence simple — un seul endroit suffit au début." },

      { id: "5-14", type: "separator", style: "dots" },
      { id: "5-15", type: "heading", level: 2, text: "Ton workflow quotidien avec Claude" },
      { id: "5-16", type: "text", html: "<p>Voici le workflow que les meilleurs utilisateurs de Claude utilisent chaque jour. Ce n'est pas compliqué — c'est juste <strong>discipliné</strong>.</p>" },
      { id: "5-17", type: "steps", steps: [
        { title: "Matin : 10 min de setup (une fois par semaine)", description: "Ouvre ou mets à jour les Projects clients actifs. Ajoute les nouvelles infos reçues. Vérifie que le contexte est à jour." },
        { title: "Pendant la journée : toujours travailler en Project", description: "Chaque tâche client = ouvre le bon Project. Ne travaille JAMAIS dans une conversation vide sans contexte." },
        { title: "Quand tu crées un nouveau prompt qui marche bien", description: "Sauvegarde-le immédiatement dans ta prompt library avec la date et les variables. Dans 3 mois, tu seras content de l'avoir fait." },
        { title: "Pour les tâches répétitives", description: "Crée un template une fois. La deuxième fois que tu fais la même chose, remplis juste les variables." },
        { title: "Fin de projet client", description: "Archive le Project mais garde les prompts qui ont bien fonctionné. Ils sont réutilisables pour le prochain client similaire." },
      ]},

      { id: "5-18", type: "separator", style: "dots" },
      { id: "5-19", type: "heading", level: 2, text: "Ton starter kit : 10 prompts à avoir absolument" },
      { id: "5-20", type: "code", language: "text", filename: "starter-kit-prompts.txt", code: "// ── TES 10 PROMPTS FONDAMENTAUX ──\n\n01. Prospection — Cold email de qualification\n02. Vente — Proposition commerciale complète\n03. Vente — Traitement des objections courantes\n04. Contenu — Post LinkedIn (3 angles)\n05. Contenu — Email newsletter mensuelle\n06. Client — Brief de démarrage de projet\n07. Client — CR de réunion structuré\n08. Code — Prompt système chatbot (par secteur)\n09. Code — Composant UI standard\n10. Stratégie — Analyse et recommandation\n\n// Pour chaque prompt :\n// → Teste-le 3-5 fois en situation réelle\n// → Note ce qui ne marche pas\n// → Affine jusqu'à avoir un résultat satisfaisant\n// → Verrouille la version finale dans ta library" },

      { id: "5-21", type: "heading", level: 2, text: "Améliorer ses prompts : la méthode" },
      { id: "5-22", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Version 1.0", description: "Premier prompt, résultat correct" },
        { id: "n2", label: "Utilise 5 fois", description: "Note ce qui coince à chaque fois" },
        { id: "n3", label: "Version 1.1", description: "Corrige les problèmes récurrents" },
        { id: "n4", label: "Utilise encore", description: "Affine les détails" },
        { id: "n5", label: "Version stable", description: "Résultat prévisible et de qualité" },
      ]},
      { id: "5-23", type: "callout", variant: "success", html: "Dans 3 mois d'utilisation régulière, ta prompt library va devenir <strong>l'un de tes actifs les plus précieux</strong>. C'est le genre de chose qu'on ne peut pas acheter — ça se construit." },

      { id: "5-24", type: "separator", style: "line" },
      { id: "5-25", type: "heading", level: 2, text: "Bilan du Module 2" },
      { id: "5-26", type: "text", html: "<p>Tu as maintenant toutes les clés pour utiliser Claude comme un professionnel. Tu maîtrises :</p><ul><li>L'interface et les Projects de Claude Pro</li><li>Les 7 frameworks de prompting avancé</li><li>Des templates business concrets et actionnables</li><li>Des prompts pour coder sans être développeur</li><li>Comment organiser et pérenniser tes meilleurs prompts</li></ul><p>Le Module 3 va te montrer comment utiliser tout ça pour construire un site web complet avec l'IA.</p>" },

      { id: "5-27", type: "quiz-inline", question: "Quelle est la meilleure façon d'améliorer un prompt au fil du temps ?", options: [
        { id: "a", text: "Le réécrire complètement à chaque utilisation" },
        { id: "b", text: "Le tester 5 fois en situation réelle, noter ce qui coince, affiner itérativement" },
        { id: "c", text: "Demander à Claude de l'améliorer une seule fois" },
      ], correctId: "b", explanation: "Un prompt s'améliore avec l'usage réel. Chaque fois que tu notes ce qui coince, tu construis une version plus précise. La qualité vient de l'itération, pas de la perfection immédiate." },

      { id: "5-28", type: "checklist", title: "Bilan du Module 2 — Prompt Engineering", items: [
        { id: "c1", text: "Claude Pro configuré avec au moins 1 Project actif" },
        { id: "c2", text: "Je connais et sais utiliser les 7 frameworks de prompting" },
        { id: "c3", text: "J'ai mes templates business (cold email, offre, LinkedIn) personnalisés" },
        { id: "c4", text: "J'ai créé au moins 1 prototype avec les prompts de code" },
        { id: "c5", text: "Ma prompt library est initialisée avec au moins 5 prompts sauvegardés" },
        { id: "c6", text: "Mon workflow quotidien avec Claude est défini" },
      ]},
    ]),
    exercise: "<h3>Exercice final du Module 2 — Construire ta prompt library</h3><ol><li>Crée un document (Notion, Google Docs ou Project Claude) appelé 'Ma Prompt Library'</li><li>Ajoute les 5 catégories : Business/Vente, Contenu, Code, Opérationnel, Systèmes chatbots</li><li>Dans chaque catégorie, ajoute au minimum 2 prompts de cette leçon (ou des modules précédents) adaptés à ton service</li><li>Utilise chaque prompt au moins une fois et note la qualité du résultat (1-5)</li><li>Pour le prompt avec la meilleure note, améliore-le avec le meta-prompting : demande à Claude comment il peut être encore meilleur</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 5 catégories recommandées pour organiser sa prompt library ?", options: JSON.stringify(["Email, Chat, Vidéo, Audio, Image", "Business/Vente, Contenu, Développement, Opérationnel, Prompts Système", "Marketing, Finance, RH, Juridique, Technique", "Facile, Moyen, Difficile, Expert, Master"]), correctAnswer: "Business/Vente, Contenu, Développement, Opérationnel, Prompts Système", explanation: "Les 5 catégories sont : Business & Vente (cold emails, offres), Contenu (LinkedIn, newsletters), Développement (composants, APIs), Opérationnel (CR réunion, briefs), et Prompts Système (chatbots par secteur)." },
      { type: "true_false", question: "Un consultant IA avec 50 prompts bien calibrés livre environ 3x plus vite qu'un sans organisation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Une bonne prompt library permet de gagner des heures chaque semaine. Au lieu de réinventer les prompts à chaque fois, tu remplis juste les variables de tes templates testés et affinés." },
      { type: "mcq", question: "Quelle est la méthode recommandée pour améliorer un prompt au fil du temps ?", options: JSON.stringify(["Le réécrire complètement à chaque utilisation", "Le tester 5 fois, noter ce qui coince, puis affiner itérativement", "Le remplacer par un nouveau prompt à chaque projet", "Demander à Claude de l'écrire une seule fois parfaitement"]), correctAnswer: "Le tester 5 fois, noter ce qui coince, puis affiner itérativement", explanation: "Un prompt s'améliore avec l'usage réel : Version 1.0 → utiliser 5 fois → noter les problèmes → Version 1.1 → affiner → Version stable avec résultat prévisible." },
      { type: "true_false", question: "Il est recommandé de travailler dans des conversations vides sans contexte dans Claude.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le workflow recommandé est de toujours travailler en Project. Chaque tâche client = ouvre le bon Project. Ne jamais travailler dans une conversation vide sans contexte." },
      { type: "mcq", question: "Un nouveau client dans l'immobilier te demande un chatbot. Tu as déjà livré un chatbot similaire à un autre agent immobilier il y a 2 mois. Comment gagnes-tu du temps ?", options: JSON.stringify(["Tu repars de zéro car chaque client est unique", "Tu réutilises ton prompt système immobilier de ta prompt library en changeant les variables (nom, adresse, spécialités)", "Tu copies-colles la conversation Claude du projet précédent", "Tu demandes au nouveau client de contacter l'ancien pour avoir le prompt"]), correctAnswer: "Tu réutilises ton prompt système immobilier de ta prompt library en changeant les variables (nom, adresse, spécialités)", explanation: "C'est exactement l'intérêt d'une prompt library bien organisée : tes prompts sont des templates avec des [VARIABLES] à remplir. Un prompt système testé et affiné pour un secteur se réutilise en quelques minutes pour un nouveau client du même secteur." },
    ],
  },
];
