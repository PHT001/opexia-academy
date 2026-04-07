// ═══════════════════════════════════════════════════
// MODULE 4 — Les IDE IA : Claude Code & Cursor
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_04_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 4,
    title: "Maîtriser Claude Code : commandes, permissions et workflow pro",
    slug: "v2-maitriser-claude-code-workflow-pro",
    duration: "20 min",
    description: "Tu as installé Claude Code au Module 1. Maintenant on va plus loin : toutes les commandes, la gestion des permissions, et le workflow pro pour être efficace.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Tu connais Claude Code — maintenant maîtrise-le" },
      { id: "1-2", type: "text", html: "<p>Tu as installé Claude Code au Module 1 et tu as créé tes premiers fichiers. Mais tu n'as utilisé qu'une fraction de sa puissance. Dans cette leçon, on va explorer <strong>toutes les commandes</strong>, comprendre la gestion des permissions, et apprendre le workflow pro qui te rendra 5x plus productif.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Prérequis :</strong> Claude Code est déjà installé et fonctionnel (Module 1, Leçon 3). Si ce n'est pas le cas, retourne-y et suis les étapes d'installation." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Toutes les commandes essentielles" },
      { id: "1-9", type: "text", html: "<p>Claude Code fonctionne dans ton terminal. Tu lui parles en langage naturel, et il exécute des actions sur ton projet : lire des fichiers, créer des fichiers, modifier du code, exécuter des commandes. Voici les commandes que tu dois connaître :</p>" },
      { id: "1-10", type: "comparison", headers: ["Commande", "Ce qu'elle fait"], rows: [
        { cells: ["claude", "Lance Claude Code dans le dossier courant"] },
        { cells: ["claude \"crée un fichier index.html\"", "Lance Claude Code avec une instruction directe"] },
        { cells: ["/help", "Affiche l'aide et les commandes disponibles"] },
        { cells: ["/clear", "Efface l'historique de la conversation"] },
        { cells: ["/cost", "Affiche le coût de la session en cours"] }
      ]},
      { id: "1-11", type: "heading", level: 2, text: "Étape 3 : Les bonnes pratiques de configuration" },
      { id: "1-12", type: "steps", steps: [
        { title: "Travaille toujours dans un dossier projet", description: "Lance Claude Code à la racine de ton projet, jamais dans un dossier aléatoire. Il a besoin de voir la structure du projet pour être efficace." },
        { title: "Utilise Git", description: "Initialise un dépôt Git (git init) avant de commencer. Ça te permet de revenir en arrière si Claude fait une modification que tu ne veux pas." },
        { title: "Commence petit", description: "Pour tes premiers essais, commence par des tâches simples : créer un fichier HTML, modifier un texte, ajouter du CSS. Augmente la complexité progressivement." },
        { title: "Lis ce que Claude fait", description: "Claude Code affiche les fichiers qu'il modifie et les commandes qu'il exécute. Lis toujours ces informations avant d'accepter les changements." }
      ]},
      { id: "1-13", type: "callout", variant: "tip", html: "<strong>Astuce coût :</strong> Claude Code utilise l'API Anthropic et donc consomme des tokens. Pour commencer, le plan gratuit ou un crédit de 5 dollars suffit largement. Surveille tes coûts avec la commande /cost." },
      { id: "1-14", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Claude Code se lance dans le terminal avec la commande 'claude'" },
        { id: "c2", text: "Il faut Node.js et une clé API Anthropic pour l'utiliser" },
        { id: "c3", text: "Toujours travailler dans un dossier projet avec Git initialisé" },
        { id: "c4", text: "Lire les modifications proposées avant de les accepter" },
        { id: "c5", text: "Surveiller les coûts avec /cost" }
      ]}
    ]),
    exercise: "<h3>Exercice : Maîtrise les commandes avancées</h3><p>Claude Code est déjà installé depuis le Module 1. Maintenant, teste ces commandes avancées :</p><ol><li>Ouvre un de tes projets existants dans le terminal et lance <code>claude</code></li><li>Tape <code>/cost</code> pour voir la consommation de ta session</li><li>Demande à Claude Code : \"Montre-moi la structure de ce projet\" et observe comment il analyse les fichiers</li><li>Teste les permissions : demande-lui de créer un fichier, puis de le modifier. Observe les demandes de confirmation.</li><li>Utilise <code>/clear</code> pour réinitialiser la conversation, puis redemande la même tâche — compare la réponse</li><li>Demande-lui de faire un changement complexe sur 3 fichiers en une seule instruction. Lis attentivement le diff avant d'accepter.</li><li>Note tes observations : quand Claude est rapide, quand il hésite, et comment tu peux mieux formuler tes demandes.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle commande permet de voir le coût de ta session Claude Code ?", options: JSON.stringify(["/price", "/cost", "/billing", "/tokens"]), correctAnswer: "/cost", explanation: "La commande /cost affiche le coût en tokens et en dollars de la session Claude Code en cours. C'est important pour surveiller ta consommation." },
      { type: "true_false", question: "Claude Code peut modifier plusieurs fichiers en une seule instruction.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, Claude Code peut analyser et modifier plusieurs fichiers en une seule demande. C'est l'un de ses points forts pour travailler sur des projets complets." },
      { type: "mcq", question: "Pourquoi est-il recommandé d'initialiser Git avant d'utiliser Claude Code ?", options: JSON.stringify(["Pour que Claude Code fonctionne", "Pour pouvoir revenir en arrière si une modification ne convient pas", "Parce que Git est obligatoire", "Pour publier automatiquement le code"]), correctAnswer: "Pour pouvoir revenir en arrière si une modification ne convient pas", explanation: "Git te permet de voir les changements faits par Claude Code et de revenir en arrière (git checkout) si une modification ne te convient pas. C'est un filet de sécurité essentiel." },
      { type: "mcq", question: "À quoi sert la commande /clear dans Claude Code ?", options: JSON.stringify(["Supprimer tous les fichiers du projet", "Réinitialiser la conversation en cours", "Effacer le cache de l'API", "Désinstaller Claude Code"]), correctAnswer: "Réinitialiser la conversation en cours", explanation: "La commande /clear efface l'historique de la conversation en cours. C'est utile quand tu veux repartir à zéro sur une nouvelle tâche sans que Claude soit influencé par les échanges précédents." },
      { type: "true_false", question: "Il faut valider chaque modification proposée par Claude Code avant qu'elle soit appliquée.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Par défaut, Claude Code te montre les modifications proposées et attend ta confirmation avant de les appliquer. C'est un mécanisme de sécurité important pour garder le contrôle sur ton code." },
      { type: "mcq", question: "Quelle est la meilleure pratique pour utiliser Claude Code efficacement ?", options: JSON.stringify(["Lui donner des instructions vagues pour le laisser décider", "Travailler dans un dossier projet avec Git et lire les diffs", "Ne jamais utiliser /cost pour ne pas perdre de temps", "Tout accepter automatiquement sans lire"]), correctAnswer: "Travailler dans un dossier projet avec Git et lire les diffs", explanation: "La meilleure pratique est de toujours travailler dans un dossier projet structuré avec Git initialisé, et de lire attentivement les modifications (diffs) proposées par Claude Code avant de les accepter." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 4,
    title: "Coder un projet avec Claude Code (CLAUDE.md, MCP, multi-fichiers)",
    slug: "v2-coder-projet-claude-code-avance",
    duration: "30 min",
    description: "Apprends les fonctionnalités avancées de Claude Code : le fichier CLAUDE.md pour le contexte persistant, les MCP servers, et la gestion de projets multi-fichiers.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Passer au niveau supérieur avec Claude Code" },
      { id: "2-2", type: "text", html: "<p>Tu sais maintenant installer et utiliser Claude Code pour des tâches simples. Mais la vraie puissance de Claude Code se révèle quand tu travailles sur des <strong>projets complets</strong> avec plusieurs fichiers, des dépendances, et une architecture à respecter. Pour ça, tu dois maîtriser 3 fonctionnalités clés : le fichier CLAUDE.md, les MCP servers, et la gestion multi-fichiers.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Le secret des pros :</strong> Les meilleurs utilisateurs de Claude Code passent 20% de leur temps à configurer le contexte (CLAUDE.md, instructions) et 80% à coder. Les débutants font l'inverse : ils codent sans contexte et perdent du temps à corriger les erreurs." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Le fichier CLAUDE.md : le cerveau de ton projet" },
      { id: "2-6", type: "text", html: "<p>Le fichier CLAUDE.md est un fichier Markdown placé à la racine de ton projet. Claude Code le lit automatiquement à chaque session. Il contient les <strong>instructions permanentes</strong> pour ton projet : le style de code, l'architecture, les conventions, les technologies utilisées. C'est comme un brief permanent pour ton assistant IA.</p>" },
      { id: "2-7", type: "steps", steps: [
        { title: "Description du projet", description: "Explique ce que fait le projet en 2-3 phrases. \"Ce projet est une landing page pour un photographe de mariage, construite avec Next.js 14 et Tailwind CSS.\"" },
        { title: "Stack technique", description: "Liste les technologies : langage, framework, librairies, base de données. Claude Code adaptera son code en conséquence." },
        { title: "Conventions de code", description: "Style de nommage (camelCase, kebab-case), organisation des fichiers, patterns préférés (hooks vs classes, etc.)." },
        { title: "Instructions spécifiques", description: "\"Toujours utiliser TypeScript strict\", \"Les composants vont dans src/components/\", \"Utiliser Prisma pour la base de données\"." },
        { title: "Ce qu'il faut éviter", description: "\"Ne pas utiliser any en TypeScript\", \"Pas de console.log en production\", \"Ne pas modifier les fichiers de config sans demander\"." }
      ]},
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Les MCP Servers : connecter Claude Code au monde extérieur" },
      { id: "2-10", type: "text", html: "<p>Les MCP (Model Context Protocol) Servers permettent à Claude Code d'interagir avec des <strong>services externes</strong> : naviguer sur le web, lire des bases de données, accéder à des APIs, gérer des fichiers sur des services cloud. C'est ce qui transforme Claude Code d'un simple outil de code en un véritable agent capable d'actions complexes.</p>" },
      { id: "2-11", type: "comparison", headers: ["MCP Server", "Ce qu'il permet"], rows: [
        { cells: ["Browser / Puppeteer", "Naviguer sur le web, prendre des captures d'écran, tester des sites"] },
        { cells: ["Filesystem", "Accéder à des fichiers en dehors du projet courant"] },
        { cells: ["Database", "Lire et écrire dans des bases de données (PostgreSQL, SQLite)"] },
        { cells: ["GitHub", "Créer des issues, des PRs, lire des repos"] },
        { cells: ["Custom MCP", "Tu peux créer tes propres MCP servers pour connecter n'importe quel service"] }
      ]},
      { id: "2-12", type: "heading", level: 2, text: "Gestion de projets multi-fichiers" },
      { id: "2-13", type: "text", html: "<p>Un vrai projet a des dizaines voire des centaines de fichiers. Claude Code gère ça nativement : il peut lire, créer et modifier plusieurs fichiers dans la même commande. Mais pour que ça fonctionne bien, tu dois lui donner une vision claire de l'architecture.</p>" },
      { id: "2-14", type: "steps", steps: [
        { title: "Commence par l'architecture", description: "Avant de coder, demande à Claude Code de créer la structure de dossiers et les fichiers vides. Ça pose les fondations." },
        { title: "Travaille composant par composant", description: "Ne demande pas tout d'un coup. Construis le projet pièce par pièce : d'abord le layout, puis les composants, puis les pages, puis les API routes." },
        { title: "Fais des commits réguliers", description: "Après chaque fonctionnalité qui marche, fais un commit Git. Ça te donne des points de sauvegarde et ça aide Claude Code à comprendre l'évolution du projet." },
        { title: "Utilise les références", description: "Quand tu demandes une modification, référence les fichiers existants : \"Modifie src/components/Header.tsx pour ajouter un menu mobile qui suit le même style que Footer.tsx\"." }
      ]},
      { id: "2-15", type: "callout", variant: "warning", html: "<strong>Erreur fréquente :</strong> Demander à Claude Code de \"créer tout le projet d'un coup\". C'est la meilleure façon d'obtenir un résultat médiocre. Construis étape par étape, teste à chaque étape, et itère." },
      { id: "2-16", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "CLAUDE.md donne le contexte permanent du projet à Claude Code" },
        { id: "c2", text: "Un bon CLAUDE.md contient : description, stack, conventions, instructions, interdictions" },
        { id: "c3", text: "Les MCP Servers connectent Claude Code à des services externes (web, DB, GitHub)" },
        { id: "c4", text: "Construire un projet multi-fichiers se fait étape par étape, pas tout d'un coup" },
        { id: "c5", text: "Les commits Git réguliers sont essentiels pour travailler efficacement" }
      ]}
    ]),
    exercise: "<h3>Exercice : Crée un projet complet avec Claude Code</h3><p>Construis un mini-site portfolio de prestataire IA :</p><ol><li>Crée un nouveau dossier : <code>mkdir portfolio-ia && cd portfolio-ia && git init</code></li><li>Crée un fichier CLAUDE.md avec : description du projet (\"Portfolio professionnel pour un prestataire IA\"), stack (HTML, CSS, JavaScript), conventions (\"design moderne, mobile-first, couleurs sombres\")</li><li>Lance Claude Code et demande-lui de créer la structure du projet : index.html, styles.css, script.js</li><li>Demande-lui de créer une section Hero avec ton nom, ton titre (\"Prestataire IA\"), et un CTA</li><li>Demande-lui d'ajouter une section Services avec 3 cartes (Chatbots, Automatisations, Sites Web)</li><li>Demande-lui d'ajouter une section Contact avec un formulaire</li><li>Fais un commit après chaque section : <code>git add . && git commit -m \"ajout section hero\"</code></li><li>Ouvre le site dans ton navigateur et vérifie chaque section</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle du fichier CLAUDE.md ?", options: JSON.stringify(["C'est un fichier de documentation pour les utilisateurs", "Il donne le contexte permanent du projet à Claude Code", "C'est un fichier de configuration Node.js", "Il stocke les clés API"]), correctAnswer: "Il donne le contexte permanent du projet à Claude Code", explanation: "Le fichier CLAUDE.md est lu automatiquement par Claude Code. Il contient les instructions permanentes du projet : stack, conventions, architecture, ce qui guide Claude Code dans ses décisions." },
      { type: "true_false", question: "Il est recommandé de demander à Claude Code de créer tout le projet d'un coup.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, c'est une erreur fréquente. Il faut construire étape par étape, tester à chaque étape, et itérer. Ça donne des résultats bien meilleurs." },
      { type: "mcq", question: "Que permettent les MCP Servers ?", options: JSON.stringify(["De coder plus vite", "De connecter Claude Code à des services externes (web, DB, APIs)", "De réduire les coûts", "De changer le modèle IA utilisé"]), correctAnswer: "De connecter Claude Code à des services externes (web, DB, APIs)", explanation: "Les MCP (Model Context Protocol) Servers permettent à Claude Code d'interagir avec le monde extérieur : naviguer sur le web, accéder aux bases de données, gérer des repos GitHub, etc." },
      { type: "mcq", question: "Que doit contenir un bon fichier CLAUDE.md ?", options: JSON.stringify(["Seulement le nom du projet", "Description, stack technique, conventions, instructions spécifiques, interdictions", "Le code source complet", "Les données des utilisateurs"]), correctAnswer: "Description, stack technique, conventions, instructions spécifiques, interdictions", explanation: "Un bon CLAUDE.md contient 5 éléments : la description du projet, la stack technique, les conventions de code, les instructions spécifiques, et ce qu'il faut éviter." },
      { type: "true_false", question: "Les commits Git réguliers sont inutiles quand on travaille avec Claude Code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les commits Git sont essentiels : ils créent des points de sauvegarde qui permettent de revenir en arrière et aident Claude Code à comprendre l'évolution du projet." },
      { type: "mcq", question: "Quelle est la meilleure approche pour un projet multi-fichiers avec Claude Code ?", options: JSON.stringify(["Tout demander en une seule instruction", "D'abord l'architecture, puis composant par composant avec des commits réguliers", "Coder soi-même et utiliser Claude Code uniquement pour le debug", "Créer chaque fichier manuellement"]), correctAnswer: "D'abord l'architecture, puis composant par composant avec des commits réguliers", explanation: "La meilleure approche est progressive : d'abord poser l'architecture (structure de dossiers), puis construire composant par composant, avec des commits Git après chaque fonctionnalité." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 4,
    title: "Cursor : l'IDE augmenté, rules, .cursorrules",
    slug: "v2-cursor-ide-augmente-rules",
    duration: "25 min",
    description: "Découvre Cursor, l'éditeur de code augmenté par l'IA : installation, fonctionnalités clés, fichier .cursorrules, et comment l'utiliser pour coder plus vite.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Cursor : VS Code sous stéroïdes" },
      { id: "3-2", type: "text", html: "<p>Cursor est un éditeur de code basé sur VS Code, mais avec des capacités IA intégrées nativement. Contrairement à Claude Code qui fonctionne en terminal, Cursor offre une <strong>interface graphique complète</strong> avec l'IA directement dans l'éditeur. Tu vois ton code, tu vois les modifications de l'IA en temps réel, et tu peux accepter ou refuser chaque changement visuellement.</p><p>Cursor est particulièrement adapté pour les personnes qui préfèrent un environnement visuel et pour les modifications chirurgicales de code existant.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Cursor vs VS Code :</strong> Si tu connais VS Code, tu connais déjà 90% de Cursor. C'est le même éditeur avec des fonctionnalités IA en plus. Toutes tes extensions VS Code fonctionnent dans Cursor." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Installation et premiers pas" },
      { id: "3-6", type: "steps", steps: [
        { title: "Télécharge Cursor", description: "Va sur cursor.com et télécharge la version pour ton système (Mac, Windows ou Linux). L'installation est standard." },
        { title: "Importe tes paramètres VS Code", description: "Au premier lancement, Cursor propose d'importer tes extensions et paramètres VS Code. Accepte pour retrouver ton environnement habituel." },
        { title: "Configure le modèle IA", description: "Dans les paramètres de Cursor, choisis ton modèle IA préféré. Tu peux utiliser Claude (recommandé), GPT-4o, ou d'autres modèles." },
        { title: "Active la complétion IA", description: "Cursor propose de l'autocomplétion IA en temps réel pendant que tu codes. Active-la dans les paramètres pour des suggestions constantes." }
      ]},
      { id: "3-7", type: "separator", style: "line" },
      { id: "3-8", type: "heading", level: 2, text: "Les fonctionnalités clés de Cursor" },
      { id: "3-9", type: "comparison", headers: ["Fonctionnalité", "Raccourci", "Usage"], rows: [
        { cells: ["Chat inline", "Cmd+K (Mac) / Ctrl+K (Win)", "Demande une modification directement dans le code, en voyant le diff en temps réel"] },
        { cells: ["Chat panel", "Cmd+L (Mac) / Ctrl+L (Win)", "Conversation avec l'IA dans un panneau latéral, avec contexte du projet"] },
        { cells: ["Composer", "Cmd+I (Mac) / Ctrl+I (Win)", "Modifications multi-fichiers orchestrées par l'IA"] },
        { cells: ["Tab completion", "Tab", "Accepte la suggestion de code IA en cours de frappe"] },
        { cells: ["@ References", "@fichier, @dossier, @web", "Référence des fichiers, dossiers ou résultats web dans tes prompts"] }
      ]},
      { id: "3-10", type: "heading", level: 2, text: "Le fichier .cursorrules : les instructions permanentes" },
      { id: "3-11", type: "text", html: "<p>Le fichier <strong>.cursorrules</strong> est l'équivalent de CLAUDE.md pour Cursor. Placé à la racine du projet, il contient les instructions que Cursor suivra à chaque interaction. C'est le moyen de garantir la cohérence du code généré avec tes standards.</p>" },
      { id: "3-12", type: "steps", steps: [
        { title: "Crée le fichier", description: "Crée un fichier .cursorrules à la racine de ton projet. C'est un simple fichier texte." },
        { title: "Définis le contexte technique", description: "Stack utilisée, versions, librairies. Exemple : \"Ce projet utilise Next.js 14, TypeScript strict, Tailwind CSS, et Prisma ORM.\"" },
        { title: "Définis le style de code", description: "Conventions de nommage, organisation des imports, gestion des erreurs. Plus tu es précis, plus le code généré sera cohérent." },
        { title: "Définis les patterns", description: "\"Utilise des Server Components par défaut, les Client Components uniquement quand nécessaire\", \"Gère les erreurs avec try/catch et des messages utilisateur clairs\"." }
      ]},
      { id: "3-13", type: "callout", variant: "tip", html: "<strong>Astuce communauté :</strong> Tu trouveras des fichiers .cursorrules pré-faits pour les stacks populaires (Next.js, React, Python) sur GitHub et dans la communauté Cursor. Utilise-les comme base et adapte-les à ton projet." },
      { id: "3-14", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Cursor est un VS Code augmenté avec l'IA intégrée nativement" },
        { id: "c2", text: "Les 3 modes d'interaction : Chat inline (Cmd+K), Chat panel (Cmd+L), Composer (Cmd+I)" },
        { id: "c3", text: "Le fichier .cursorrules donne les instructions permanentes du projet" },
        { id: "c4", text: "Les @ References permettent de donner du contexte précis à l'IA" },
        { id: "c5", text: "Cursor excelle pour les modifications visuelles et chirurgicales du code" }
      ]}
    ]),
    exercise: "<h3>Exercice : Installe et teste Cursor</h3><p>Découvre Cursor par la pratique :</p><ol><li>Télécharge et installe Cursor depuis cursor.com</li><li>Ouvre le projet portfolio que tu as créé avec Claude Code dans l'exercice précédent</li><li>Crée un fichier .cursorrules avec : \"Projet portfolio, HTML/CSS/JS, design moderne mobile-first, couleurs sombres, code propre et commenté\"</li><li><strong>Test Chat inline (Cmd+K) :</strong> Sélectionne le CSS du Hero et demande \"Ajoute une animation fade-in au chargement\"</li><li><strong>Test Chat panel (Cmd+L) :</strong> Demande \"Ajoute une section témoignages avec 3 faux témoignages clients\"</li><li><strong>Test Composer (Cmd+I) :</strong> Demande \"Ajoute un mode sombre avec un bouton toggle dans le header. Modifie le CSS et le JS nécessaires\"</li><li>Compare l'expérience Cursor avec Claude Code : note les différences dans ton journal</li></ol>",
    quiz: [
      { type: "mcq", question: "Sur quel éditeur Cursor est-il basé ?", options: JSON.stringify(["Sublime Text", "VS Code", "Vim", "IntelliJ"]), correctAnswer: "VS Code", explanation: "Cursor est basé sur VS Code. Toutes tes extensions et paramètres VS Code fonctionnent dans Cursor, avec des fonctionnalités IA en plus." },
      { type: "true_false", question: "Les extensions VS Code ne sont pas compatibles avec Cursor.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les extensions VS Code sont entièrement compatibles avec Cursor. Tu peux importer tous tes paramètres et extensions au premier lancement." },
      { type: "mcq", question: "Quel raccourci ouvre le Chat inline dans Cursor (Mac) ?", options: JSON.stringify(["Cmd+L", "Cmd+K", "Cmd+I", "Cmd+P"]), correctAnswer: "Cmd+K", explanation: "Cmd+K ouvre le Chat inline, qui permet de demander une modification directement dans le code en voyant le diff en temps réel." },
      { type: "mcq", question: "Quel est le rôle du fichier .cursorrules ?", options: JSON.stringify(["C'est un fichier de configuration système", "Il contient les instructions permanentes que Cursor suivra pour le projet", "Il stocke les raccourcis clavier", "Il gère les dépendances du projet"]), correctAnswer: "Il contient les instructions permanentes que Cursor suivra pour le projet", explanation: "Le fichier .cursorrules donne les instructions permanentes à Cursor : stack technique, conventions de code, patterns à suivre. C'est l'équivalent de CLAUDE.md pour Cursor." },
      { type: "true_false", question: "Le Composer (Cmd+I) permet de faire des modifications sur plusieurs fichiers à la fois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, le Composer orchestre des modifications multi-fichiers. C'est utile quand une fonctionnalité nécessite de modifier le HTML, le CSS et le JS en même temps." },
      { type: "mcq", question: "Que permettent les @ References dans Cursor ?", options: JSON.stringify(["De créer des liens hypertexte", "De référencer des fichiers, dossiers ou résultats web dans les prompts", "De mentionner d'autres développeurs", "De créer des variables JavaScript"]), correctAnswer: "De référencer des fichiers, dossiers ou résultats web dans les prompts", explanation: "Les @ References (@fichier, @dossier, @web) permettent de donner du contexte précis à l'IA en référençant des fichiers existants ou des résultats web." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 4,
    title: "Atelier : quand utiliser Claude Code vs Cursor vs les deux",
    slug: "v2-atelier-claude-code-vs-cursor",
    duration: "25 min",
    description: "Atelier comparatif : découvre les cas d'usage idéaux de chaque outil, comment les combiner, et construis ton workflow personnel de développement IA.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Claude Code et Cursor : deux approches complémentaires" },
      { id: "4-2", type: "text", html: "<p>Claude Code et Cursor ne sont pas des concurrents — ce sont des <strong>outils complémentaires</strong>. Chacun brille dans des situations différentes. Les meilleurs développeurs IA utilisent les deux, en passant de l'un à l'autre selon la tâche. Dans cet atelier, tu vas comprendre exactement quand utiliser chaque outil et comment les combiner.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>L'analogie :</strong> Claude Code est comme un architecte qui construit la structure. Cursor est comme un décorateur d'intérieur qui peaufine les détails. Tu as besoin des deux pour un résultat professionnel." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Quand utiliser Claude Code" },
      { id: "4-6", type: "comparison", headers: ["Situation", "Pourquoi Claude Code est le meilleur choix"], rows: [
        { cells: ["Créer un projet from scratch", "Claude Code voit l'ensemble du projet et crée une architecture cohérente"] },
        { cells: ["Refactoring massif", "Il peut modifier 10 fichiers d'un coup en maintenant la cohérence"] },
        { cells: ["Exécuter des commandes système", "Il lance des commandes terminal (npm install, git, tests) directement"] },
        { cells: ["Travailler sur un serveur distant", "Via SSH, Claude Code fonctionne sur n'importe quel serveur"] },
        { cells: ["Automatiser des tâches répétitives", "Il peut enchaîner des actions complexes de façon autonome"] }
      ]},
      { id: "4-7", type: "heading", level: 2, text: "Quand utiliser Cursor" },
      { id: "4-8", type: "comparison", headers: ["Situation", "Pourquoi Cursor est le meilleur choix"], rows: [
        { cells: ["Modifier un composant précis", "Le Chat inline montre le diff en temps réel, tu acceptes ou refuses chaque ligne"] },
        { cells: ["Explorer du code inconnu", "L'éditeur visuel + l'IA te permet de comprendre rapidement un codebase"] },
        { cells: ["Écrire du nouveau code avec autocomplétion", "Tab completion suggère du code intelligent pendant que tu tapes"] },
        { cells: ["Debug visuel", "Tu vois le code, les erreurs, et les corrections côte à côte"] },
        { cells: ["Pair programming", "Cursor te guide ligne par ligne, comme un collègue qui code avec toi"] }
      ]},
      { id: "4-9", type: "separator", style: "line" },
      { id: "4-10", type: "heading", level: 2, text: "Le workflow combiné : la méthode pro" },
      { id: "4-11", type: "steps", steps: [
        { title: "Phase 1 : Architecture avec Claude Code", description: "Crée la structure du projet, les fichiers de base, le CLAUDE.md, et les dépendances. Claude Code excelle pour poser les fondations rapidement." },
        { title: "Phase 2 : Développement avec Cursor", description: "Ouvre le projet dans Cursor pour coder les composants un par un. L'autocomplétion et le Chat inline rendent le développement fluide et visuel." },
        { title: "Phase 3 : Features complexes avec Claude Code", description: "Pour les fonctionnalités qui touchent plusieurs fichiers (ajout d'authentification, connexion API, migration DB), repasse sur Claude Code." },
        { title: "Phase 4 : Polish avec Cursor", description: "Reviens dans Cursor pour les ajustements fins : animations CSS, optimisations, corrections de détail." },
        { title: "Phase 5 : Deploy avec Claude Code", description: "Utilise Claude Code pour les commandes de déploiement, la configuration serveur, et les tests automatisés." }
      ]},
      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Règle simple :</strong> Si ta tâche concerne 1-2 fichiers avec des modifications visuelles, utilise Cursor. Si ta tâche concerne 3+ fichiers ou des commandes système, utilise Claude Code. Si tu ne sais pas, commence avec Claude Code et passe à Cursor pour affiner." },
      { id: "4-13", type: "heading", level: 2, text: "Erreurs à éviter avec les IDE IA" },
      { id: "4-14", type: "comparison", headers: ["Erreur", "Solution"], rows: [
        { cells: ["Accepter du code sans le lire", "Lis toujours le diff avant d'accepter. Un bug non détecté maintenant coûte 10x plus cher à corriger plus tard."] },
        { cells: ["Ne pas utiliser Git", "Fais un commit après chaque fonctionnalité qui marche. C'est ton filet de sécurité."] },
        { cells: ["Prompt trop vague", "\"Fais un truc beau\" ne marche pas. Sois précis : couleurs, dimensions, comportement."] },
        { cells: ["Ne pas tester", "Après chaque modification, teste dans le navigateur. L'IA fait parfois des erreurs subtiles."] },
        { cells: ["Ignorer les erreurs", "Si le code ne compile pas, corrige avant de continuer. Ne construis pas sur des fondations cassées."] }
      ]},
      { id: "4-15", type: "checklist", title: "Ce que tu retiens de cet atelier", items: [
        { id: "c1", text: "Claude Code = architecture, multi-fichiers, commandes système, refactoring massif" },
        { id: "c2", text: "Cursor = modifications précises, autocomplétion, debug visuel, exploration de code" },
        { id: "c3", text: "Le workflow pro combine les deux : Claude Code pour la structure, Cursor pour les détails" },
        { id: "c4", text: "Toujours lire le code généré, tester, et commiter régulièrement" },
        { id: "c5", text: "La règle des 3 fichiers : 1-2 fichiers = Cursor, 3+ fichiers = Claude Code" }
      ]}
    ]),
    exercise: "<h3>Exercice : Construis un projet en combinant Claude Code et Cursor</h3><p>Crée un mini site \"calculateur de devis IA\" en utilisant les deux outils :</p><ol><li><strong>Claude Code (Phase 1) :</strong> Crée un nouveau projet avec la structure : index.html, styles.css, app.js, et un CLAUDE.md. Demande-lui de créer un formulaire avec 3 champs : type de service (dropdown : chatbot, automatisation, site web), nombre de pages/fonctionnalités, et le budget estimé.</li><li><strong>Cursor (Phase 2) :</strong> Ouvre le projet dans Cursor. Utilise le Chat inline pour améliorer le design du formulaire : arrondis, ombres, couleurs professionnelles, animations de hover.</li><li><strong>Claude Code (Phase 3) :</strong> Ajoute la logique JavaScript qui calcule un devis basé sur les choix de l'utilisateur et affiche le résultat dans une section dédiée.</li><li><strong>Cursor (Phase 4) :</strong> Peaufine le résultat : animation d'apparition du devis, format monétaire français, responsive mobile.</li><li>Dans ton journal, note : quand tu as préféré Claude Code, quand tu as préféré Cursor, et pourquoi.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel outil est le mieux adapté pour créer l'architecture d'un nouveau projet ?", options: JSON.stringify(["Cursor", "Claude Code", "VS Code standard", "Notepad"]), correctAnswer: "Claude Code", explanation: "Claude Code excelle pour créer l'architecture d'un projet from scratch : structure de dossiers, fichiers de base, dépendances. Il voit l'ensemble du projet et crée une structure cohérente." },
      { type: "true_false", question: "Claude Code et Cursor sont des outils concurrents qui ne peuvent pas être utilisés ensemble.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ils sont complémentaires. Le workflow professionnel combine Claude Code pour la structure et les opérations multi-fichiers, et Cursor pour les modifications précises et visuelles." },
      { type: "mcq", question: "Selon la \"règle des 3 fichiers\", quand utiliser Claude Code ?", options: JSON.stringify(["Quand on modifie 1 fichier", "Quand on modifie 1-2 fichiers", "Quand on modifie 3 fichiers ou plus", "Uniquement pour les fichiers CSS"]), correctAnswer: "Quand on modifie 3 fichiers ou plus", explanation: "La règle simple : si ta tâche concerne 1-2 fichiers, utilise Cursor. Si elle concerne 3 fichiers ou plus, ou des commandes système, utilise Claude Code." },
      { type: "mcq", question: "Quelle est la phase 4 du workflow combiné ?", options: JSON.stringify(["Architecture avec Claude Code", "Développement avec Cursor", "Deploy avec Claude Code", "Polish avec Cursor"]), correctAnswer: "Polish avec Cursor", explanation: "La phase 4 est le polish avec Cursor : ajustements fins, animations CSS, optimisations, corrections de détail. Cursor excelle pour les modifications visuelles précises." },
      { type: "true_false", question: "Il est acceptable d'accepter du code généré par l'IA sans le lire ni le tester.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Il faut toujours lire le diff avant d'accepter et tester dans le navigateur. Un bug non détecté maintenant coûte 10 fois plus cher à corriger plus tard." },
      { type: "mcq", question: "Quel outil est recommandé pour le debug visuel de code ?", options: JSON.stringify(["Claude Code", "Cursor", "Les deux sont équivalents", "Aucun des deux"]), correctAnswer: "Cursor", explanation: "Cursor est idéal pour le debug visuel grâce à son interface graphique. Tu vois le code, les erreurs et les corrections côte à côte, ce qui facilite la compréhension et la validation." }
    ],
  },
];
