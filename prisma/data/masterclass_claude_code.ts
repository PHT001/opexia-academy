// ═══════════════════════════════════════════════════
// MASTERCLASS — Claude Code : ton environnement de dev IA
// 5 leçons — Module 14 — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MASTERCLASS_CLAUDE_CODE_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 14,
    title: "C'est quoi Claude Code et pourquoi c'est révolutionnaire",
    slug: "mc-claude-code-introduction-installation",
    duration: "30 min",
    description: "Comprendre ce qu'est Claude Code, sa différence avec claude.ai, et l'installer sur ton ordinateur pour être opérationnel immédiatement.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Claude Code : l'IA qui code directement sur ton ordinateur" },
      { id: "1-2", type: "text", html: "<p>Tu connais peut-être déjà Claude via <strong>claude.ai</strong> — le chatbot dans ton navigateur. Tu lui poses une question, il te répond. C'est puissant, mais c'est limité : tu copies-colles du code, tu navigues entre les onglets, tu perds du temps.</p><p><strong>Claude Code</strong>, c'est une autre dimension. C'est Claude qui tourne directement dans ton terminal, sur ta machine, avec accès à tes fichiers. Il lit ton code, le modifie, crée des fichiers, exécute des commandes. C'est comme avoir un développeur senior assis à côté de toi, qui tape sur ton clavier.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "Claude Code n'est pas un chatbot. C'est un <strong>agent de développement</strong> qui agit directement sur ton projet. Il ne te donne pas du code à copier-coller — il modifie tes fichiers lui-même." },

      { id: "1-4", type: "heading", level: 3, text: "C'est quoi un terminal concrètement ?" },
      { id: "1-5", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Interface graphique", description: "Tu cliques sur des boutons, des icônes, des menus. C'est ce que tu fais tous les jours sur ton ordinateur. Intuitif mais limité." },
        { id: "n2", label: "Terminal (ligne de commande)", description: "Tu tapes des commandes texte. Plus rapide, plus puissant. C'est là que Claude Code vit et travaille." },
      ]},
      { id: "1-6", type: "callout", variant: "info", html: "Le terminal, c'est comme envoyer un SMS à ton ordinateur au lieu de naviguer dans des menus. Tu lui écris ce que tu veux, il le fait. Claude Code utilise ce canal pour travailler directement sur tes fichiers." },

      { id: "1-7", type: "separator", style: "dots" },

      { id: "1-8", type: "heading", level: 2, text: "Claude.ai vs Claude Code : la différence fondamentale" },
      { id: "1-9", type: "comparison", headers: ["", "Claude.ai (web)", "Claude Code (terminal)"], rows: [
        { cells: ["Interface", "Navigateur web", "Terminal / ligne de commande"] },
        { cells: ["Accès fichiers", "Aucun (copier-coller)", "Lecture et écriture directe"] },
        { cells: ["Exécution de commandes", "Non", "Oui (npm, git, etc.)"] },
        { cells: ["Contexte projet", "Limité à la conversation", "Comprend toute ta codebase"] },
        { cells: ["Workflow", "Tu copies, tu colles, tu adaptes", "Tu décris, il fait"] },
        { cells: ["Idéal pour", "Questions, brainstorming, texte", "Construire des applications complètes"] },
      ]},

      { id: "1-10", type: "heading", level: 2, text: "Pourquoi c'est un game changer" },
      { id: "1-11", type: "steps", steps: [
        { title: "Tu n'as pas besoin de savoir coder", description: "Claude Code comprend le langage naturel. Tu décris ce que tu veux en français, il traduit en code. Tu n'as pas besoin de connaître React, Python ou JavaScript pour construire une vraie application.", icon: "brain" },
        { title: "Tu construis 10x plus vite", description: "Ce qui prenait 3 jours à un développeur prend quelques heures avec Claude Code. Tu itères en temps réel : tu décris, tu vois le résultat, tu ajustes.", icon: "zap" },
        { title: "Tu gardes le contrôle total", description: "Contrairement aux outils no-code (Wix, Squarespace), tu obtiens du vrai code que tu peux héberger n'importe où, modifier à l'infini, et vendre à tes clients.", icon: "shield" },
        { title: "Tu deviens autonome", description: "Plus besoin de payer un développeur 500 euros par jour. Tu peux créer, modifier et maintenir tes projets toi-même.", icon: "rocket" },
      ]},

      { id: "1-12", type: "separator", style: "line" },

      { id: "1-13", type: "heading", level: 2, text: "Installation : sois opérationnel en 10 minutes" },
      { id: "1-14", type: "text", html: "<p>Pour installer Claude Code, tu as besoin de 3 choses :</p><ul><li><strong>Un ordinateur</strong> (Mac, Windows ou Linux)</li><li><strong>Node.js</strong> — le moteur qui fait tourner Claude Code</li><li><strong>Un compte Anthropic</strong> — pour l'authentification</li></ul>" },
      { id: "1-15", type: "callout", variant: "info", html: "Claude Code fonctionne sur <strong>macOS, Windows et Linux</strong>. Sur Windows, il est recommandé d'utiliser WSL (Windows Subsystem for Linux) pour la meilleure expérience." },

      { id: "1-16", type: "heading", level: 3, text: "Le parcours complet d'installation" },
      { id: "1-17", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Installer Node.js", description: "Le moteur qui fait tourner tout le reste. Télécharge la version LTS sur nodejs.org." },
        { id: "n2", label: "Vérifier npm", description: "npm vient avec Node.js. Tape node --version et npm --version pour vérifier." },
        { id: "n3", label: "npm install -g @anthropic-ai/claude-code", description: "Installe Claude Code globalement sur ta machine avec une seule commande." },
        { id: "n4", label: "claude", description: "Lance Claude Code, authentifie-toi via le lien navigateur, et tu es prêt." },
      ]},

      { id: "1-18", type: "heading", level: 3, text: "Windows : installer WSL d'abord" },
      { id: "1-19", type: "callout", variant: "warning", html: "Si tu es sur <strong>Windows</strong>, tu <strong>DOIS</strong> installer WSL avant de continuer. Ouvre PowerShell en administrateur et tape <code>wsl --install</code>. Après le redémarrage, ouvre Ubuntu depuis le menu Démarrer et configure ton identifiant Linux. Toutes les commandes suivantes se tapent dans le terminal Ubuntu." },

      { id: "1-20", type: "heading", level: 3, text: "Installer Node.js puis Claude Code" },
      { id: "1-21", type: "code", language: "bash", filename: "Terminal", code: "# Vérifier que Node.js est installé\nnode --version\n# Tu devrais voir v20+ ou v22+\n\n# Installer Claude Code globalement\nnpm install -g @anthropic-ai/claude-code\n\n# Vérifier l'installation\nclaude --version\n\n# Créer un dossier de travail et lancer Claude Code\nmkdir ~/projets-ia && cd ~/projets-ia\nclaude" },
      { id: "1-22", type: "text", html: "<p>Au premier lancement, Claude Code ouvre un lien dans ton navigateur pour te connecter avec ton compte Anthropic. Une fois connecté, retourne dans le terminal : le curseur de Claude Code est prêt. Tu n'auras plus à te reconnecter.</p>" },
      { id: "1-23", type: "callout", variant: "success", html: "Si tu vois le curseur de Claude Code dans ton terminal, bravo ! Tu as maintenant accès au plus puissant outil de développement IA disponible aujourd'hui. Tu es prêt pour la suite." },

      { id: "1-24", type: "separator", style: "line" },
      { id: "1-25", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends ce qu'est Claude Code et comment il fonctionne" },
        { id: "c2", text: "Je connais la différence entre Claude.ai et Claude Code" },
        { id: "c3", text: "J'ai installé Node.js et Claude Code sur mon ordinateur" },
        { id: "c4", text: "Je me suis authentifié et Claude Code est fonctionnel" },
      ]},
    ]),
    exercise: "<h3>Exercice : Installation complète</h3><ol><li>Si tu es sur Windows, installe WSL avec <code>wsl --install</code> puis configure Ubuntu</li><li>Installe Node.js (via nodejs.org sur Mac/Linux, ou via curl dans WSL)</li><li>Installe Claude Code avec <code>npm install -g @anthropic-ai/claude-code</code></li><li>Lance Claude Code avec <code>claude</code> et authentifie-toi</li><li>Tape ta première commande : <code>claude \"dis-moi bonjour en 3 langues\"</code></li></ol><p><strong>Objectif :</strong> Claude Code installé et fonctionnel sur ta machine.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence fondamentale entre Claude.ai et Claude Code ?", options: JSON.stringify(["Claude Code est gratuit, Claude.ai est payant", "Claude Code a accès à tes fichiers et peut modifier ton code directement", "Claude.ai est plus puissant que Claude Code", "Claude Code fonctionne uniquement en ligne"]), correctAnswer: "Claude Code a accès à tes fichiers et peut modifier ton code directement", explanation: "Claude Code tourne dans ton terminal et peut lire, créer et modifier tes fichiers directement, tandis que Claude.ai est un chatbot web où tu dois copier-coller le code manuellement." },
      { type: "true_false", question: "Pour utiliser Claude Code, il faut savoir coder et connaître les langages de programmation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude Code comprend le langage naturel. Tu décris ce que tu veux en français, il traduit en code. Tu n'as pas besoin de connaître React, Python ou JavaScript." },
      { type: "mcq", question: "Quelle est la commande correcte pour installer Claude Code ?", options: JSON.stringify(["pip install claude-code", "npm install -g @anthropic-ai/claude-code", "brew install claude", "apt-get install claude-code"]), correctAnswer: "npm install -g @anthropic-ai/claude-code", explanation: "Claude Code s'installe via npm avec la commande npm install -g @anthropic-ai/claude-code. Le flag -g signifie global, ce qui rend Claude Code disponible partout sur ta machine." },
      { type: "true_false", question: "Sur Windows, il est recommandé d'utiliser WSL (Windows Subsystem for Linux) pour Claude Code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Claude Code nécessite un environnement Linux pour fonctionner correctement sur Windows. WSL permet d'exécuter un vrai terminal Linux directement sur ton PC." },
      { type: "mcq", question: "Un collègue sur Windows lance Claude Code et obtient l'erreur 'command not found'. Quelle est la cause la plus probable ?", options: JSON.stringify(["Son abonnement Anthropic a expiré", "Il n'a pas installé Node.js ou il utilise le terminal Windows natif au lieu de WSL", "Claude Code ne fonctionne pas sur Windows", "Son ordinateur n'est pas assez puissant"]), correctAnswer: "Il n'a pas installé Node.js ou il utilise le terminal Windows natif au lieu de WSL", explanation: "Les deux causes les plus fréquentes sur Windows sont : Node.js non installé (prérequis indispensable) ou utilisation du terminal Windows natif au lieu de WSL." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 14,
    title: "Ton premier projet avec Claude Code",
    slug: "mc-claude-code-premier-projet",
    duration: "30 min",
    description: "Créer un projet Next.js de zéro avec Claude Code, comprendre le workflow itératif, et obtenir un build fonctionnel.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "On va construire quelque chose de vrai" },
      { id: "2-2", type: "text", html: "<p>La meilleure façon d'apprendre Claude Code, c'est de construire un vrai projet. Pas un \"hello world\" ennuyeux — un projet que tu pourras montrer, utiliser, et même vendre.</p><p>Dans cette leçon, on va créer un <strong>site Next.js</strong> personnalisé. Next.js est la stack que tu utiliseras pour tes projets clients. Autant apprendre avec les bons outils dès le départ.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "Ne te préoccupe pas de comprendre le code généré. Ton job, c'est de <strong>décrire ce que tu veux</strong>. Le job de Claude Code, c'est de <strong>l'écrire</strong>." },

      { id: "2-4", type: "heading", level: 3, text: "C'est quoi Next.js et un framework ?" },
      { id: "2-5", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "Next.js (framework)", description: "Une boîte à outils complète pour créer des sites web modernes. Il organise ton projet automatiquement." },
        { id: "n2", label: "Pages et navigation", description: "Chaque fichier = une page de ton site. Simple et logique." },
        { id: "n3", label: "Tailwind CSS", description: "Le système de design intégré. Tu décris le style et ça s'applique." },
        { id: "n4", label: "TypeScript", description: "Le langage de programmation. Claude Code l'écrit pour toi." },
        { id: "n5", label: "Déploiement facile", description: "Un clic sur Vercel et ton site est en ligne pour le monde entier." },
      ]},
      { id: "2-6", type: "callout", variant: "info", html: "Un framework, c'est comme acheter une maison préfabriquée au lieu de tout construire brique par brique. La structure de base est déjà là. Tu n'as plus qu'à choisir la déco et les couleurs. Next.js te donne la structure, toi tu décris le rendu final." },

      { id: "2-7", type: "separator", style: "dots" },

      { id: "2-8", type: "heading", level: 2, text: "Étape 1 : Créer le projet Next.js" },
      { id: "2-9", type: "code", language: "bash", filename: "Terminal", code: "# Se placer dans le dossier de travail\ncd ~/projets-ia\n\n# Créer un nouveau projet Next.js\nnpx create-next-app@latest mon-premier-site\n\n# Répondre aux questions :\n# ✔ TypeScript ? → Yes\n# ✔ ESLint ? → Yes\n# ✔ Tailwind CSS ? → Yes\n# ✔ src/ directory ? → Yes\n# ✔ App Router ? → Yes\n# ✔ Import alias ? → Enter (défaut)\n\n# Entrer dans le projet et lancer Claude Code\ncd mon-premier-site\nclaude" },
      { id: "2-10", type: "text", html: "<p>Claude Code est maintenant ouvert dans le contexte de ton projet Next.js. Il comprend déjà la structure du projet, les dépendances installées, et la stack technique utilisée.</p>" },

      { id: "2-11", type: "separator", style: "line" },

      { id: "2-12", type: "heading", level: 2, text: "Étape 2 : Personnaliser avec Claude Code" },
      { id: "2-13", type: "text", html: "<p>Le projet de base est générique. Maintenant, demande à Claude Code de le transformer en quelque chose d'unique. Sois précis et détaillé :</p>" },
      { id: "2-14", type: "code", language: "text", filename: "Prompt à taper dans Claude Code", code: "Transforme cette page d'accueil en une landing page pour une newsletter sur l'IA.\n\nLe design doit être :\n- Moderne, épuré, fond sombre avec Tailwind CSS\n- Un titre accrocheur en grand\n- Un sous-titre qui explique la valeur de la newsletter\n- Un champ email + bouton d'inscription stylé\n- 3 cartes avec les bénéfices de la newsletter\n- Un compteur \"1 247 inscrits\" pour la preuve sociale\n\nModifie le fichier src/app/page.tsx et src/app/globals.css." },
      { id: "2-15", type: "callout", variant: "info", html: "Observe ce qui se passe : Claude Code va <strong>modifier les fichiers existants</strong>, <strong>écrire le code</strong>, et te demander confirmation avant chaque action. Tu gardes toujours le contrôle." },

      { id: "2-16", type: "separator", style: "dots" },

      { id: "2-17", type: "heading", level: 2, text: "Étape 3 : Voir le résultat et itérer" },
      { id: "2-18", type: "heading", level: 3, text: "C'est quoi localhost:3000 ?" },
      { id: "2-19", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "npm run dev", description: "Tu lances un mini-serveur web sur ton propre ordinateur" },
        { id: "n2", label: "localhost:3000", description: "C'est l'adresse de ce serveur. 'localhost' = ton PC. '3000' = le numéro de porte." },
        { id: "n3", label: "Ton navigateur", description: "Tu ouvres Chrome/Firefox et tu vas sur cette adresse pour voir ton site" },
      ]},

      { id: "2-20", type: "code", language: "bash", filename: "Terminal (dans un autre onglet)", code: "# Lancer le serveur de développement\nnpm run dev\n\n# Ouvre http://localhost:3000 dans ton navigateur" },
      { id: "2-21", type: "text", html: "<p>C'est ça le workflow avec Claude Code : <strong>tu décris → il construit → tu ajustes → il corrige</strong>. À chaque itération, ton projet s'améliore. En 20 minutes, tu as un site complet.</p>" },

      { id: "2-22", type: "heading", level: 3, text: "Le cycle de développement" },
      { id: "2-23", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Décrire", description: "Tu expliques ce que tu veux en langage naturel. Sois précis sur le résultat attendu." },
        { id: "n2", label: "Générer", description: "Claude Code écrit le code, crée ou modifie les fichiers automatiquement." },
        { id: "n3", label: "Vérifier", description: "Tu ouvres le navigateur (localhost:3000) et tu regardes le résultat en direct." },
        { id: "n4", label: "Ajuster", description: "Tu dis ce qui ne va pas ou ce que tu veux changer. Claude corrige immédiatement." },
      ]},

      { id: "2-24", type: "separator", style: "line" },

      { id: "2-25", type: "heading", level: 2, text: "Étape 4 : Vérifier le build" },
      { id: "2-26", type: "text", html: "<p>Avant de considérer ton projet comme terminé, lance un <strong>build de production</strong> pour vérifier que tout fonctionne :</p>" },
      { id: "2-27", type: "code", language: "bash", filename: "Terminal", code: "# Arrêter le serveur de dev (Ctrl+C) puis lancer le build\nnpm run build\n\n# Si des erreurs apparaissent, copie-les dans Claude Code :\n# \"J'ai cette erreur au build : [erreur]. Corrige-la.\"" },
      { id: "2-28", type: "callout", variant: "success", html: "Si <code>npm run build</code> réussit sans erreur, ton projet est prêt pour la production. Tu viens de construire un vrai site déployable avec Claude Code." },

      { id: "2-29", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je sais créer un projet Next.js avec npx create-next-app" },
        { id: "c2", text: "Je sais demander à Claude Code de personnaliser un projet existant" },
        { id: "c3", text: "Je comprends le workflow itératif : décrire, observer, ajuster" },
        { id: "c4", text: "Je sais vérifier un build de production avec npm run build" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis ton premier site Next.js</h3><ol><li>Crée un nouveau projet avec <code>npx create-next-app@latest mon-premier-site</code></li><li>Lance Claude Code dans le dossier du projet</li><li>Demande-lui de transformer la page d'accueil en landing page de newsletter</li><li>Lance <code>npm run dev</code> et ouvre <code>http://localhost:3000</code></li><li>Fais au moins 3 itérations pour améliorer le design</li><li>Lance <code>npm run build</code> et vérifie qu'il n'y a pas d'erreur</li></ol><p><strong>Objectif :</strong> Projet créé et build réussi sans erreur.</p>",
    quiz: [
      { type: "mcq", question: "Quelle commande crée un nouveau projet Next.js ?", options: JSON.stringify(["npm create next-app", "npx create-next-app@latest mon-projet", "next init mon-projet", "npm install next"]), correctAnswer: "npx create-next-app@latest mon-projet", explanation: "La commande officielle est npx create-next-app@latest suivi du nom du projet. Elle génère toute la structure de base avec TypeScript, Tailwind CSS et App Router." },
      { type: "true_false", question: "Avec Claude Code, il faut comprendre le code généré pour pouvoir l'utiliser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu n'as pas besoin de comprendre le code généré. Ton job est de décrire ce que tu veux, le job de Claude Code est de l'écrire. Tu te concentres sur le résultat." },
      { type: "mcq", question: "Que signifie localhost:3000 quand tu lances npm run dev ?", options: JSON.stringify(["L'adresse de ton site en production", "L'adresse d'un serveur local sur ton propre ordinateur au port 3000", "L'adresse du serveur d'Anthropic", "Un mot de passe pour accéder au projet"]), correctAnswer: "L'adresse d'un serveur local sur ton propre ordinateur au port 3000", explanation: "localhost signifie ton propre ordinateur et 3000 est le numéro de port. C'est un mini-serveur web privé qui tourne sur ta machine pour tester ton site." },
      { type: "true_false", question: "Le workflow avec Claude Code est linéaire : tu décris tout en un seul prompt et le résultat est final.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le workflow est itératif : tu décris, Claude construit, tu observes le résultat, tu donnes des retours, et Claude ajuste. 3 à 5 itérations sont généralement nécessaires." },
      { type: "mcq", question: "Quelle commande vérifies-tu pour t'assurer que ton projet est prêt pour la production ?", options: JSON.stringify(["npm run dev", "npm run build", "npm start", "npm test"]), correctAnswer: "npm run build", explanation: "npm run build compile le projet en mode production. S'il réussit sans erreur, ton site est prêt à être déployé. npm run dev est pour le développement local uniquement." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 14,
    title: "Les commandes essentielles",
    slug: "mc-claude-code-commandes-essentielles",
    duration: "25 min",
    description: "Maîtriser les commandes slash, le fichier CLAUDE.md, la gestion de fichiers et l'exécution de commandes terminal.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Les commandes slash : ton tableau de bord" },
      { id: "3-2", type: "text", html: "<p>Claude Code a des <strong>commandes slash</strong> qui te donnent des super-pouvoirs. Ce sont des raccourcis qui commencent par <code>/</code> et qui déclenchent des actions spécifiques.</p>" },
      { id: "3-3", type: "comparison", headers: ["Commande", "Ce qu'elle fait", "Quand l'utiliser"], rows: [
        { cells: ["/init", "Crée un fichier CLAUDE.md pour ton projet", "Au début de chaque nouveau projet"] },
        { cells: ["/clear", "Efface l'historique de conversation", "Quand le contexte devient trop long"] },
        { cells: ["/compact", "Résume la conversation pour libérer du contexte", "Quand Claude commence à oublier des choses"] },
        { cells: ["/cost", "Affiche le coût de la session en cours", "Pour surveiller ta consommation"] },
        { cells: ["/help", "Affiche la liste de toutes les commandes", "Quand tu as un doute"] },
        { cells: ["/review", "Revue de code du projet", "Avant de livrer au client"] },
      ]},

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Le fichier CLAUDE.md : la mémoire de ton projet" },
      { id: "3-6", type: "text", html: "<p>Le fichier <code>CLAUDE.md</code> est la pièce maîtresse de Claude Code. C'est un fichier Markdown qui décrit ton projet : sa structure, ses conventions, ses règles. À chaque lancement, Claude Code lit ce fichier pour comprendre le contexte.</p><p>Tape <code>/init</code> pour que Claude Code crée automatiquement un CLAUDE.md adapté à ton projet.</p>" },
      { id: "3-7", type: "code", language: "markdown", filename: "CLAUDE.md (exemple)", code: "# Mon Projet - Landing Page Agence IA\n\n## Description\nSite vitrine pour une agence de services IA.\n\n## Stack technique\n- Next.js 14 avec App Router\n- Tailwind CSS pour le style\n- TypeScript\n\n## Conventions\n- Composants dans /src/components\n- Pages dans /src/app\n- Utiliser les Server Components par défaut\n- Noms de fichiers en kebab-case\n\n## Commandes\n- `npm run dev` pour lancer le serveur de dev\n- `npm run build` pour construire le projet\n- `npm run lint` pour vérifier le code" },
      { id: "3-8", type: "callout", variant: "tip", html: "Mets à jour ton <code>CLAUDE.md</code> régulièrement. Plus il est précis, mieux Claude Code comprend ton projet. C'est comme un briefing pour un nouveau collègue." },

      { id: "3-9", type: "heading", level: 3, text: "Que mettre dans ton CLAUDE.md" },
      { id: "3-10", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Commandes essentielles", description: "npm run dev, npm run build, npm run lint — les commandes que Claude doit connaître" },
        { id: "n2", label: "Conventions du projet", description: "Où mettre les composants, comment nommer les fichiers, quel style de code" },
        { id: "n3", label: "Stack technique", description: "Next.js, Tailwind CSS, TypeScript — les technologies utilisées" },
        { id: "n4", label: "Description du projet", description: "Ce que fait ton application, pour qui, et son objectif" },
      ]},

      { id: "3-11", type: "separator", style: "line" },

      { id: "3-12", type: "heading", level: 2, text: "Lire, créer et modifier des fichiers" },
      { id: "3-13", type: "steps", steps: [
        { title: "Lire un fichier", description: "\"Lis le fichier src/app/page.tsx\" ou \"montre-moi le contenu de package.json\". Claude Code affiche le contenu et peut l'analyser.", icon: "eye" },
        { title: "Créer un fichier", description: "\"Crée un composant Button dans src/components/Button.tsx\". Claude Code crée le fichier avec le code adapté au contexte.", icon: "plus" },
        { title: "Modifier un fichier", description: "\"Dans Header.tsx, change la couleur du fond en bleu foncé\". Claude Code fait la modification chirurgicalement.", icon: "edit" },
        { title: "Supprimer ou renommer", description: "\"Renomme utils.js en helpers.ts\". Claude Code te demande confirmation avant de supprimer.", icon: "trash" },
      ]},
      { id: "3-14", type: "callout", variant: "warning", html: "Claude Code te demandera toujours <strong>confirmation</strong> avant de modifier ou supprimer un fichier. Lis attentivement ce qu'il propose avant de valider." },

      { id: "3-15", type: "separator", style: "dots" },

      { id: "3-16", type: "heading", level: 2, text: "Exécuter des commandes terminal" },
      { id: "3-17", type: "text", html: "<p>Claude Code peut aussi exécuter des commandes dans ton terminal — installer des dépendances, lancer un serveur, exécuter des tests :</p>" },
      { id: "3-18", type: "code", language: "text", filename: "Exemples", code: "Installe les dépendances du projet → npm install\nLance le serveur de développement → npm run dev\nVérifie s'il y a des erreurs → npm run lint\nInstalle la librairie framer-motion → npm install framer-motion" },

      { id: "3-19", type: "heading", level: 2, text: "Ta cheat sheet Claude Code" },
      { id: "3-20", type: "comparison", headers: ["Action", "Ce que tu dis à Claude Code"], rows: [
        { cells: ["Initialiser le projet", "/init"] },
        { cells: ["Voir le coût", "/cost"] },
        { cells: ["Libérer du contexte", "/compact"] },
        { cells: ["Lire un fichier", "\"Lis le fichier src/app/page.tsx\""] },
        { cells: ["Créer un composant", "\"Crée un composant Header dans src/components/\""] },
        { cells: ["Modifier du code", "\"Change le titre en bleu dans Header.tsx\""] },
        { cells: ["Installer un package", "\"Installe framer-motion\""] },
        { cells: ["Lancer le build", "\"Lance npm run build\""] },
        { cells: ["Débugger", "\"J'ai cette erreur : [erreur]. Corrige-la.\""] },
      ]},
      { id: "3-21", type: "callout", variant: "tip", html: "<strong>Imprime cette cheat sheet</strong> ou garde-la ouverte à côté de ton terminal. En quelques jours, ces commandes deviendront automatiques." },

      { id: "3-22", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je connais les commandes slash essentielles (/init, /clear, /compact, /cost)" },
        { id: "c2", text: "Je sais créer et maintenir un fichier CLAUDE.md" },
        { id: "c3", text: "Je sais demander à Claude Code de lire, créer et modifier des fichiers" },
        { id: "c4", text: "Je sais faire exécuter des commandes terminal par Claude Code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Prends en main les commandes</h3><ol><li>Ouvre ton projet de la leçon précédente dans Claude Code</li><li>Tape <code>/init</code> pour générer un fichier CLAUDE.md</li><li>Lis le CLAUDE.md généré et améliore-le avec des informations supplémentaires</li><li>Demande à Claude Code de créer un nouveau composant et une nouvelle page</li><li>Tape <code>/cost</code> pour voir combien la session a coûté</li><li><strong>Imprime ou capture la cheat sheet ci-dessus</strong></li></ol><p><strong>Objectif :</strong> Cheat sheet imprimée et commandes maîtrisées.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle du fichier CLAUDE.md dans un projet ?", options: JSON.stringify(["C'est un fichier de configuration obligatoire pour installer Claude Code", "C'est la documentation du projet que Claude Code lit pour comprendre le contexte", "C'est un fichier qui stocke l'historique des conversations", "C'est un fichier de licence open source"]), correctAnswer: "C'est la documentation du projet que Claude Code lit pour comprendre le contexte", explanation: "Le CLAUDE.md est la fiche d'identité de ton projet. Il décrit la stack technique, les conventions, les commandes utiles. Claude Code le lit à chaque lancement pour comprendre le contexte." },
      { type: "true_false", question: "La commande /compact résume la conversation pour libérer du contexte.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La commande /compact résume la conversation en cours pour libérer de l'espace contextuel. Utile quand Claude Code commence à oublier des éléments discutés plus tôt." },
      { type: "mcq", question: "Que fait Claude Code avant de modifier ou supprimer un fichier ?", options: JSON.stringify(["Il modifie directement sans prévenir", "Il demande toujours confirmation avant d'agir", "Il crée une copie de sauvegarde automatique", "Il envoie un email de notification"]), correctAnswer: "Il demande toujours confirmation avant d'agir", explanation: "Claude Code te demande toujours confirmation avant de modifier ou supprimer un fichier. Tu gardes le contrôle total." },
      { type: "true_false", question: "Il faut mémoriser toutes les commandes terminal pour utiliser Claude Code efficacement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu peux simplement décrire ce que tu veux en français et Claude Code exécute la bonne commande pour toi. Pas besoin de mémoriser npm install ou git commit." },
      { type: "mcq", question: "Un client te confie un projet Next.js existant développé par un autre freelance. Quelle est ta première action dans Claude Code ?", options: JSON.stringify(["Supprimer tout le code et recommencer", "Lancer /init pour créer un CLAUDE.md puis demander à Claude Code d'analyser la structure", "Lire tout le code ligne par ligne pendant 3 heures", "Dire au client que tu ne peux pas reprendre le projet"]), correctAnswer: "Lancer /init pour créer un CLAUDE.md puis demander à Claude Code d'analyser la structure", explanation: "La première action est de créer un CLAUDE.md avec /init pour documenter le contexte, puis de demander à Claude Code d'expliquer l'architecture du projet existant." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 14,
    title: "Vibe coding : construire sans savoir coder",
    slug: "mc-claude-code-vibe-coding",
    duration: "30 min",
    description: "Le concept de vibe coding, les règles d'or du prompting, et construire une feature complète en partant de zéro.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le vibe coding, c'est quoi ?" },
      { id: "4-2", type: "text", html: "<p>Le <strong>vibe coding</strong>, c'est une nouvelle façon de créer des logiciels. Au lieu d'écrire du code ligne par ligne, tu <em>décris l'ambiance</em>, le résultat voulu, et l'IA traduit ça en code fonctionnel.</p><p>Le terme a été popularisé par <strong>Andrej Karpathy</strong> (ancien directeur IA de Tesla) : tu te laisses porter par le vibe, tu décris les choses, tu itères, et tu acceptes ou tu rejettes ce que l'IA produit.</p><p>Tu n'as plus besoin de savoir la différence entre une <code>div</code> et un <code>span</code>. Tu as besoin de savoir ce que tu veux construire et comment le décrire clairement.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "Le vibe coding ne remplace pas le fait de comprendre ce qu'on construit. Tu n'as pas besoin de savoir <em>écrire</em> du code, mais tu dois savoir <em>ce que tu veux</em>. La clarté de ta vision est ton super-pouvoir." },

      { id: "4-4", type: "heading", level: 3, text: "Les niveaux de qualité d'un prompt" },
      { id: "4-5", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Prompt expert", description: "Résultat + contexte + fichiers + style de référence + détails visuels. Résultat quasi parfait du premier coup." },
        { id: "n2", label: "Prompt intermédiaire", description: "Résultat + contexte + quelques détails. Bon résultat après 1-2 itérations." },
        { id: "n3", label: "Prompt basique", description: "Juste le résultat voulu. Résultat passable, beaucoup d'itérations." },
        { id: "n4", label: "Prompt vague", description: "\"Fais-moi un truc bien\" — résultat imprévisible, perte de temps garantie." },
      ]},

      { id: "4-6", type: "separator", style: "dots" },

      { id: "4-7", type: "heading", level: 2, text: "Les 3 règles d'or du prompting Claude Code" },
      { id: "4-8", type: "steps", steps: [
        { title: "1. Décris le RÉSULTAT final (pas les étapes)", description: "Ne dis pas \"crée un fichier, puis ajoute une div, puis mets du CSS\". Dis plutôt \"je veux une page d'accueil avec un hero sombre, un titre blanc centré et un bouton CTA orange\". Claude sait comment y arriver — ton job c'est de décrire la destination.", icon: "flag" },
        { title: "2. Donne le CONTEXTE technique", description: "Précise dans quel fichier travailler, quelle stack tu utilises, ce qui existe déjà. Exemple : \"Dans src/app/page.tsx, c'est un projet Next.js avec Tailwind CSS. Modifie la section hero.\"", icon: "folder" },
        { title: "3. Itère par petites demandes", description: "Ne demande pas un site complet en un seul prompt. Commence par le hero, valide, puis la section suivante, valide. 5 petits prompts > 1 gros prompt.", icon: "layers" },
      ]},

      { id: "4-9", type: "heading", level: 2, text: "Bons prompts vs mauvais prompts" },
      { id: "4-10", type: "comparison", headers: ["Mauvais prompt", "Bon prompt"], rows: [
        { cells: ["Fais-moi un site", "Crée une landing page pour un coach en nutrition avec 5 sections : hero, problème, solution, témoignages, CTA"] },
        { cells: ["Ajoute un formulaire", "Ajoute un formulaire de contact avec champs nom, email, message, bouton 'Envoyer'. Centré, max 500px, bordures grises arrondies"] },
        { cells: ["Ça marche pas", "Le bouton ne change pas de couleur au hover. Ajoute un effet hover qui éclaircit le fond de 10%"] },
        { cells: ["Fais mieux", "Le titre est trop petit sur mobile. Passe-le de 48px à 32px en dessous de 768px"] },
      ]},

      { id: "4-11", type: "separator", style: "line" },

      { id: "4-12", type: "heading", level: 2, text: "Exercice pratique : construire une feature complète" },
      { id: "4-13", type: "text", html: "<p>On va construire une <strong>section témoignages</strong> complète en vibe coding. Voici le prompt expert :</p>" },
      { id: "4-14", type: "code", language: "text", filename: "Prompt expert pour la section témoignages", code: "RÉSULTAT : Ajoute une section témoignages sur la page d'accueil,\njuste avant le footer.\n\nCONTEXTE : Le fichier est src/app/page.tsx, projet Next.js\navec Tailwind CSS. Le site a un fond sombre (#0a0a0a).\n\nDÉTAILS :\n- Titre \"Ce que disent nos clients\" centré, blanc, 36px\n- 3 cartes témoignages côte à côte (une ligne sur desktop, \n  empilées sur mobile)\n- Chaque carte : photo ronde (placeholder), nom en bold,\n  rôle en gris, texte du témoignage en italique\n- Fond des cartes : #1a1a1a avec bordure subtile #2a2a2a\n- Effet hover : léger scale(1.02) avec transition douce\n- Padding section : 80px vertical" },
      { id: "4-15", type: "text", html: "<p>Après le premier résultat, itère :</p><ul><li>\"Ajoute des étoiles jaunes (5/5) au-dessus de chaque témoignage\"</li><li>\"Le texte est trop petit sur mobile, passe-le à 16px minimum\"</li><li>\"Ajoute une animation fade-in quand la section entre dans le viewport\"</li></ul>" },
      { id: "4-16", type: "callout", variant: "success", html: "En 3 itérations et 5 minutes, tu as une section témoignages professionnelle avec responsive, animations et hover effects. C'est ça la puissance du vibe coding." },

      { id: "4-17", type: "heading", level: 3, text: "Le cycle du vibe coding" },
      { id: "4-18", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Vision", description: "Tu imagines le résultat final. Quel feeling doit dégager la page ?" },
        { id: "n2", label: "Prompt", description: "Tu décris ta vision avec des détails : couleurs, tailles, disposition." },
        { id: "n3", label: "Résultat", description: "Claude Code génère le code. Tu ouvres le navigateur et tu compares." },
        { id: "n4", label: "Feedback", description: "Tu notes ce qui diffère de ta vision. Tu reformules avec des ajustements précis." },
      ]},

      { id: "4-19", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends le concept de vibe coding" },
        { id: "c2", text: "Je connais les 3 règles d'or : résultat, contexte, itération" },
        { id: "c3", text: "Je sais faire la différence entre un bon et un mauvais prompt" },
        { id: "c4", text: "J'ai construit une feature complète en vibe coding" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis une feature complète en vibe coding</h3><ol><li>Choisis une feature à ajouter à ton projet : section pricing, FAQ accordéon, galerie d'images, ou page contact</li><li>Écris un prompt expert en appliquant les 3 règles (résultat, contexte, détails)</li><li>Lance Claude Code et donne-lui ton prompt</li><li>Fais au moins 3 itérations pour affiner le résultat</li><li>Vérifie que c'est responsive (redimensionne ton navigateur)</li><li>Lance <code>npm run build</code> pour vérifier que tout compile</li></ol><p><strong>Objectif :</strong> Feature complète construite en vibe coding, responsive et sans erreur de build.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 éléments d'un prompt parfait pour Claude Code ?", options: JSON.stringify(["Titre, contenu, conclusion", "Résultat, contexte, détails", "Introduction, développement, conclusion", "Fichier, commande, validation"]), correctAnswer: "Résultat, contexte, détails", explanation: "La formule magique est RÉSULTAT (ce que tu veux voir) + CONTEXTE (le fichier, la stack, ce qui existe déjà) + DÉTAILS (couleurs, tailles, animations)." },
      { type: "true_false", question: "Le vibe coding consiste à écrire du code soi-même puis à demander à l'IA de l'optimiser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le vibe coding est l'inverse : tu décris l'ambiance et le résultat voulu en langage naturel, et l'IA traduit ça en code fonctionnel. Tu n'écris pas de code toi-même." },
      { type: "mcq", question: "Quel type de prompt donne le pire résultat ?", options: JSON.stringify(["Un prompt avec des couleurs et tailles précises", "Un prompt vague comme 'Fais-moi un truc bien'", "Un prompt qui mentionne un fichier spécifique", "Un prompt qui donne une référence visuelle"]), correctAnswer: "Un prompt vague comme 'Fais-moi un truc bien'", explanation: "Un prompt vague donne un résultat imprévisible. Plus tu es spécifique (couleurs, dimensions, style de référence), plus le résultat correspond à ta vision." },
      { type: "true_false", question: "Si Claude Code produit un résultat qui ne correspond pas à ce que tu veux, c'est probablement que ton prompt n'était pas assez précis.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La qualité du résultat est directement liée à la précision du prompt. Reformule avec plus de détails pour obtenir un meilleur résultat." },
      { type: "mcq", question: "Un prospect veut voir un prototype de chatbot sur son site e-commerce en 2 heures. Quelle approche adoptes-tu ?", options: JSON.stringify(["Tu expliques que 2h ce n'est pas assez", "Tu décris précisément le résultat (widget chat, couleurs du client, messages) et tu itères en 3-5 tours", "Tu montres des captures d'écran d'autres projets", "Tu codes tout manuellement en JavaScript"]), correctAnswer: "Tu décris précisément le résultat (widget chat, couleurs du client, messages) et tu itères en 3-5 tours", explanation: "Le vibe coding permet de créer un prototype fonctionnel en quelques heures. En décrivant précisément puis en itérant 3-5 fois, tu obtiens un résultat pro qui aide à closer le deal." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 14,
    title: "Gérer un projet complexe + GitHub",
    slug: "mc-claude-code-projet-complexe-github",
    duration: "35 min",
    description: "Travailler sur des projets multi-fichiers, débugger efficacement, versionner avec Git et déployer via GitHub + Vercel.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Passer d'une page à une vraie application" },
      { id: "5-2", type: "text", html: "<p>Les vrais projets clients sont plus complexes qu'une seule page : un site avec plusieurs pages, des composants réutilisables, une base de données, des API. C'est là que Claude Code brille vraiment.</p><p>Claude Code comprend la <strong>structure entière de ton projet</strong>. Quand tu lui demandes de modifier un composant, il sait quels autres fichiers sont impactés. Quand tu signales un bug, il analyse le flux de données à travers plusieurs fichiers.</p>" },

      { id: "5-3", type: "heading", level: 3, text: "Architecture type d'un projet web" },
      { id: "5-4", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Pages (ce que l'utilisateur voit)", description: "Les écrans de ton site : accueil, contact, services... Chaque page = un fichier." },
        { id: "n2", label: "Composants (briques réutilisables)", description: "Header, Footer, boutons, formulaires... Des morceaux réutilisés partout." },
        { id: "n3", label: "Logique métier (le cerveau)", description: "Les fonctions qui traitent les données, appellent les APIs." },
        { id: "n4", label: "Configuration (les fondations)", description: "package.json, tailwind.config, .env — les réglages de base." },
      ]},

      { id: "5-5", type: "separator", style: "dots" },

      { id: "5-6", type: "heading", level: 2, text: "Travailler sur plusieurs fichiers à la fois" },
      { id: "5-7", type: "steps", steps: [
        { title: "Ajouter une nouvelle page", description: "\"Ajoute une page /services avec 3 cartes de services. Ajoute le lien dans la navigation du Header.\" — Claude modifie 2 fichiers d'un coup.", icon: "file-plus" },
        { title: "Refactoriser un composant", description: "\"Le formulaire est dupliqué dans 3 pages. Extrais-le dans un composant réutilisable ContactForm.\" — Claude crée le composant et met à jour les 3 pages.", icon: "git-merge" },
        { title: "Changer le thème global", description: "\"Passe tout le site en mode sombre : fond #0a0a0a, texte blanc, accents violet.\" — Claude modifie les styles globaux et vérifie chaque composant.", icon: "palette" },
      ]},
      { id: "5-8", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Tu donnes une instruction globale", description: "\"Ajoute une page /services et mets le lien dans la navigation\"" },
        { id: "n2", label: "Claude analyse les dépendances", description: "Il identifie tous les fichiers concernés : la nouvelle page, le Header, la navigation" },
        { id: "n3", label: "Il modifie chaque fichier de manière cohérente", description: "Il crée services/page.tsx, met à jour Header.tsx, vérifie les imports" },
        { id: "n4", label: "Tout reste synchronisé", description: "Les liens fonctionnent, les imports sont corrects, pas de fichier orphelin" },
      ]},

      { id: "5-9", type: "separator", style: "line" },

      { id: "5-10", type: "heading", level: 2, text: "Débugger comme un pro" },
      { id: "5-11", type: "text", html: "<p>Les bugs font partie du développement — même avec l'IA. La bonne nouvelle : Claude Code est excellent pour les trouver. Donne toujours <strong>3 informations</strong> : ce que tu as fait, ce que tu attendais, et ce qui s'est passé.</p>" },
      { id: "5-12", type: "code", language: "text", filename: "Prompts de debug efficaces", code: "Le bouton 'Ajouter au panier' ne fonctionne pas.\nQuand je clique, rien ne se passe. Trouve le problème et corrige-le.\n\nJ'ai cette erreur dans la console : \"TypeError: Cannot read\nproperty 'map' of undefined\" dans ProductList.tsx. Corrige-la.\n\nLa page met 5 secondes à charger. Analyse les performances\net propose des optimisations." },

      { id: "5-13", type: "separator", style: "dots" },

      { id: "5-14", type: "heading", level: 2, text: "Git + GitHub : versionner et sauvegarder" },
      { id: "5-15", type: "text", html: "<p>Avec <strong>Git</strong>, chaque modification est enregistrée. Tu peux revenir en arrière à n'importe quel moment. <strong>GitHub</strong>, c'est le cloud pour ton code : ton projet est sauvegardé en ligne, accessible de partout.</p>" },
      { id: "5-16", type: "callout", variant: "warning", html: "Ne fais JAMAIS un projet client sans Git. C'est non-négociable. Un disque dur qui lâche, un fichier écrasé — Git te sauve à chaque fois." },

      { id: "5-17", type: "heading", level: 3, text: "C'est quoi Git et GitHub ?" },
      { id: "5-18", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Git (sur ton PC)", description: "Un système de sauvegarde intelligent. Il enregistre chaque version de ton projet." },
        { id: "n2", label: "Commit", description: "Un point de sauvegarde. Tu décris ce que tu as changé, Git le mémorise." },
        { id: "n3", label: "GitHub (en ligne)", description: "Le cloud pour ton code. Ton projet est sauvegardé sur internet." },
        { id: "n4", label: "Push", description: "Tu envoies tes sauvegardes locales sur GitHub. Comme synchroniser avec le cloud." },
      ]},

      { id: "5-19", type: "heading", level: 2, text: "Les commandes Git essentielles" },
      { id: "5-20", type: "steps", steps: [
        { title: "git init — Initialiser", description: "Transforme ton dossier en projet Git. À faire une seule fois, au début du projet.", icon: "play" },
        { title: "git add — Préparer", description: "Sélectionne les fichiers modifiés à sauvegarder. Comme mettre des documents dans une enveloppe.", icon: "plus" },
        { title: "git commit — Sauvegarder", description: "Crée un point de sauvegarde avec un message. Ex : \"Ajout de la page contact\".", icon: "save" },
        { title: "git push — Envoyer sur GitHub", description: "Pousse ton code sur GitHub pour le sauvegarder en ligne.", icon: "upload" },
      ]},
      { id: "5-21", type: "code", language: "bash", filename: "Workflow Git basique", code: "# Initialiser Git\ngit init\n\n# Ajouter tous les fichiers\ngit add .\n\n# Créer un point de sauvegarde\ngit commit -m \"Premier commit : landing page complète\"\n\n# Connecter à GitHub (remplace par ton URL)\ngit remote add origin https://github.com/ton-pseudo/mon-projet.git\n\n# Envoyer sur GitHub\ngit push -u origin main" },
      { id: "5-22", type: "callout", variant: "tip", html: "Avec Claude Code, tu peux simplement dire <strong>\"commit et push mes modifications sur GitHub avec le message 'ajout page contact'\"</strong> et il exécute toutes les commandes pour toi." },

      { id: "5-23", type: "separator", style: "line" },

      { id: "5-24", type: "heading", level: 2, text: "Déployer sur Vercel" },
      { id: "5-25", type: "steps", steps: [
        { title: "Connecte Vercel à GitHub", description: "Va sur vercel.com, crée un compte gratuit, et connecte ton compte GitHub.", icon: "link" },
        { title: "Importe ton projet", description: "Clique sur 'New Project', sélectionne ton dépôt. Vercel détecte automatiquement la configuration.", icon: "download" },
        { title: "Déploiement automatique", description: "Chaque fois que tu fais un git push, Vercel redéploie automatiquement. Ton client voit les modifications en temps réel.", icon: "rocket" },
      ]},

      { id: "5-26", type: "heading", level: 3, text: "La chaîne complète du développeur IA" },
      { id: "5-27", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Ton client voit le site en ligne", description: "monprojet.vercel.app — accessible par n'importe qui, 24h/24" },
        { id: "n2", label: "Vercel déploie automatiquement", description: "Chaque push sur GitHub déclenche un nouveau déploiement." },
        { id: "n3", label: "GitHub sauvegarde ton code", description: "Ton code est en sécurité dans le cloud. Historique complet." },
        { id: "n4", label: "Git versionne tes modifications", description: "Chaque commit est un point de sauvegarde." },
        { id: "n5", label: "Claude Code développe ton projet", description: "Tu décris ce que tu veux, il code. Le point de départ de toute la chaîne." },
      ]},
      { id: "5-28", type: "callout", variant: "success", html: "Avec ce workflow <strong>Claude Code → Git → GitHub → Vercel</strong>, tu as une chaîne de production complète et professionnelle." },

      { id: "5-29", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je sais travailler sur des projets multi-fichiers complexes" },
        { id: "c2", text: "Je sais débugger efficacement avec Claude Code" },
        { id: "c3", text: "Je connais les commandes Git essentielles (init, add, commit, push)" },
        { id: "c4", text: "Je sais pousser mon code sur GitHub et déployer sur Vercel" },
      ]},
    ]),
    exercise: "<h3>Exercice : Versionne et déploie ton projet</h3><ol><li>Reprends ton projet des leçons précédentes</li><li>Demande à Claude Code d'ajouter 2 nouvelles pages : /about et /services</li><li>Crée un composant Header partagé avec des liens de navigation</li><li>Introduis volontairement un bug (supprime une ligne) et demande à Claude de le corriger</li><li>Initialise Git, fais ton premier commit</li><li>Crée un dépôt GitHub et pousse ton code</li><li>Bonus : connecte Vercel et déploie ton site</li></ol><p><strong>Objectif :</strong> Projet versionné sur GitHub avec au moins 2 commits.</p>",
    quiz: [
      { type: "mcq", question: "Quelle commande Git crée un point de sauvegarde de ton code ?", options: JSON.stringify(["git push", "git save", "git commit", "git backup"]), correctAnswer: "git commit", explanation: "git commit crée un point de sauvegarde dans l'historique de ton projet. git push envoie ce commit sur GitHub, mais c'est git commit qui fait la sauvegarde locale." },
      { type: "true_false", question: "Claude Code ne peut comprendre que les projets qu'il a créés lui-même.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude Code peut analyser la structure complète de n'importe quel projet existant. Il comprend aussi bien les projets existants que ceux qu'il a créés." },
      { type: "mcq", question: "Quelles sont les 3 informations à donner quand tu signales un bug à Claude Code ?", options: JSON.stringify(["Le nom du fichier, la ligne, le langage", "Ce que tu as fait, ce que tu attendais, ce qui s'est passé à la place", "La date, l'heure, le navigateur", "Le système d'exploitation, la version de Node.js, la RAM"]), correctAnswer: "Ce que tu as fait, ce que tu attendais, ce qui s'est passé à la place", explanation: "Un bon rapport de bug contient 3 informations : action, résultat espéré, et résultat réel. Plus c'est clair, plus Claude corrige vite." },
      { type: "true_false", question: "Avec Claude Code, tu peux dire 'commit et push mes modifications' au lieu de taper les commandes Git manuellement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tu peux demander à Claude Code de 'commit et push' et il exécute toutes les commandes Git nécessaires (git add, git commit, git push) pour toi." },
      { type: "mcq", question: "Un client te demande une modification urgente. Tu as fait le changement mais le site en ligne n'a pas changé. Que fais-tu ?", options: JSON.stringify(["Tu refais le changement depuis zéro", "Tu vérifies avec git status et git log si le commit a été push, puis tu push si nécessaire", "Tu modifies directement sur Vercel", "Tu supprimes le projet et recommences"]), correctAnswer: "Tu vérifies avec git status et git log si le commit a été push, puis tu push si nécessaire", explanation: "git status te montre s'il y a des changements non commités, git log te montre les commits locaux. Si le commit existe mais n'est pas sur GitHub, un simple git push suffit pour que Vercel redéploie." },
    ],
  },
];
