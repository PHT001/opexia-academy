// ═══════════════════════════════════════════════════
// MODULE 3 — Claude Code : ton environnement de dev IA
// 7 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_3_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 3,
    title: "C'est quoi Claude Code et pourquoi c'est révolutionnaire",
    slug: "claude-code-introduction-revolution",
    duration: "20 min",
    description: "Comprendre ce qu'est Claude Code, sa différence avec claude.ai, et pourquoi c'est un game changer pour construire des applications.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Claude Code : l'IA qui code directement sur ton ordinateur" },
      { id: "1-2", type: "text", html: "<p>Tu connais peut-être déjà Claude via <strong>claude.ai</strong> — le chatbot dans ton navigateur. Tu lui poses une question, il te répond. C'est puissant, mais c'est limité : tu copies-colles du code, tu navigues entre les onglets, tu perds du temps.</p><p><strong>Claude Code</strong>, c'est une autre dimension. C'est Claude qui tourne directement dans ton terminal, sur ta machine, avec accès à tes fichiers. Il lit ton code, le modifie, crée des fichiers, exécute des commandes. C'est comme avoir un développeur senior assis à côté de toi, qui tape sur ton clavier.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "Claude Code n'est pas un chatbot. C'est un <strong>agent de développement</strong> qui agit directement sur ton projet. Il ne te donne pas du code à copier-coller — il modifie tes fichiers lui-même." },

      { id: "1-dia1", type: "heading", level: 3, text: "C'est quoi un terminal concrètement ?" },
      { id: "1-dia2", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Interface graphique", description: "Tu cliques sur des boutons, des icônes, des menus. C'est ce que tu fais tous les jours sur ton ordinateur. Intuitif mais limité." },
        { id: "n2", label: "Terminal (ligne de commande)", description: "Tu tapes des commandes texte. Plus rapide, plus puissant. C'est là que Claude Code vit et travaille." },
      ]},
      { id: "1-dia3", type: "callout", variant: "info", html: "Le terminal, c'est comme envoyer un SMS à ton ordinateur au lieu de naviguer dans des menus. Tu lui écris ce que tu veux, il le fait. Claude Code utilise ce canal pour travailler directement sur tes fichiers — pas besoin de cliquer partout." },

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Claude.ai vs Claude Code : la différence fondamentale" },
      { id: "1-6", type: "comparison", headers: ["", "Claude.ai (web)", "Claude Code (terminal)"], rows: [
        { cells: ["Interface", "Navigateur web", "Terminal / ligne de commande"] },
        { cells: ["Accès fichiers", "Aucun (copier-coller)", "Lecture et écriture directe"] },
        { cells: ["Exécution de commandes", "Non", "Oui (npm, git, etc.)"] },
        { cells: ["Contexte projet", "Limité à la conversation", "Comprend toute ta codebase"] },
        { cells: ["Workflow", "Tu copies, tu colles, tu adaptes", "Tu décris, il fait"] },
        { cells: ["Idéal pour", "Questions, brainstorming, texte", "Construire des applications complètes"] },
      ]},
      { id: "1-7", type: "text", html: "<p>Concrètement, avec claude.ai tu demandes <em>\"génère-moi un composant React\"</em> et tu récupères un bloc de code à coller quelque part. Avec Claude Code, tu dis <em>\"ajoute un composant de navigation dans mon projet\"</em> et il crée le fichier au bon endroit, l'importe là où il faut, et s'assure que tout compile.</p>" },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Pourquoi c'est un game changer" },
      { id: "1-10", type: "steps", steps: [
        { title: "Tu n'as pas besoin de savoir coder", description: "Claude Code comprend le langage naturel. Tu décris ce que tu veux en français, il traduit en code. Tu n'as pas besoin de connaître React, Python ou JavaScript pour construire une vraie application.", icon: "brain" },
        { title: "Tu construis 10x plus vite", description: "Ce qui prenait 3 jours à un développeur prend quelques heures avec Claude Code. Tu itères en temps réel : tu décris, tu vois le résultat, tu ajustes.", icon: "zap" },
        { title: "Tu gardes le contrôle total", description: "Contrairement aux outils no-code (Wix, Squarespace), tu obtiens du vrai code que tu peux héberger n'importe où, modifier à l'infini, et vendre à tes clients.", icon: "shield" },
        { title: "Tu deviens autonome", description: "Plus besoin de payer un développeur 500 euros par jour. Tu peux créer, modifier et maintenir tes projets toi-même.", icon: "rocket" },
      ]},
      { id: "1-11", type: "callout", variant: "info", html: "Claude Code est développé par <strong>Anthropic</strong>, la même entreprise qui fait Claude. C'est un outil officiel, pas un hack ou un plugin tiers. Il est conçu pour être l'interface la plus puissante pour interagir avec Claude." },

      { id: "m3cc-dia-1-2-h", type: "heading", level: 3, text: "Comment Claude Code fonctionne sur ta machine" },
      { id: "m3cc-dia-1-2", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Toi (langage naturel)", description: "Tu décris ce que tu veux en français. Pas besoin de syntaxe ni de langage de programmation." },
        { id: "n2", label: "Claude Code (agent IA)", description: "Il interprète ta demande, planifie les actions nécessaires, et les exécute une par une." },
        { id: "n3", label: "Ton projet (fichiers & code)", description: "Les fichiers de ton application. Claude Code les lit, les crée et les modifie directement." },
        { id: "n4", label: "Ton ordinateur (terminal)", description: "Le système d'exploitation qui exécute les commandes : installer, compiler, lancer le serveur." },
      ]},
      { id: "m3cc-dia-1-2-tip", type: "callout", variant: "tip", html: "Imagine un immeuble : toi tu es au dernier étage (le penthouse), tu donnes les ordres. Claude Code est l'étage en dessous, il traduit tes ordres en actions. En dessous, c'est ton projet (les appartements). Et au rez-de-chaussée, c'est ton ordinateur qui fait tourner le tout." },

      { id: "1-12", type: "separator", style: "dots" },

      { id: "1-13", type: "heading", level: 2, text: "Ce que tu vas construire dans ce module" },
      { id: "1-14", type: "text", html: "<p>À la fin de ce module, tu seras capable de :</p><ul><li>Installer et configurer Claude Code sur ton ordinateur</li><li>Créer des projets complets en partant de zéro</li><li>Utiliser les commandes essentielles comme un pro</li><li>Pratiquer le <strong>vibe coding</strong> — décrire ce que tu veux et laisser Claude construire</li><li>Gérer des projets multi-fichiers complexes</li><li>Versionner ton code avec Git et GitHub</li></ul><p>Tu vas passer de <em>\"je ne sais pas coder\"</em> à <em>\"je construis des applications complètes avec l'IA\"</em>.</p>" },

      { id: "m3cc-dia-1-3-h", type: "heading", level: 3, text: "Ta progression dans ce module" },
      { id: "m3cc-dia-1-3", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Découverte", description: "Tu comprends ce qu'est Claude Code et pourquoi c'est révolutionnaire (c'est maintenant !)" },
        { id: "n2", label: "Installation", description: "Tu installes Node.js et Claude Code sur ton ordinateur — tout est prêt" },
        { id: "n3", label: "Premier projet", description: "Tu crées un vrai site Next.js de zéro avec Claude Code" },
        { id: "n4", label: "Maîtrise", description: "Tu maîtrises le vibe coding, les projets complexes et Git/GitHub" },
      ]},
      { id: "m3cc-dia-1-3-tip", type: "callout", variant: "tip", html: "C'est comme apprendre à conduire : d'abord tu découvres la voiture, puis tu apprends à démarrer, ensuite tu roules dans ton quartier, et enfin tu prends l'autoroute. On y va étape par étape." },

      { id: "1-15", type: "separator", style: "line" },
      { id: "1-16", type: "quiz-inline", question: "Quelle est la différence principale entre Claude.ai et Claude Code ?", options: [
        { id: "a", text: "Claude Code est gratuit, Claude.ai est payant" },
        { id: "b", text: "Claude Code a accès à tes fichiers et peut modifier ton code directement" },
        { id: "c", text: "Claude.ai est plus intelligent que Claude Code" },
        { id: "d", text: "Claude Code fonctionne uniquement sur Mac" },
      ], correctId: "b", explanation: "Claude Code tourne dans ton terminal et peut lire, créer et modifier tes fichiers directement. Claude.ai est un chatbot web qui ne peut que générer du texte que tu dois copier-coller manuellement." },

      { id: "1-17", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends ce qu'est Claude Code et comment il fonctionne" },
        { id: "c2", text: "Je connais la différence entre Claude.ai et Claude Code" },
        { id: "c3", text: "Je sais pourquoi Claude Code est un game changer pour construire des apps" },
        { id: "c4", text: "Je connais les avantages de Claude Code par rapport aux outils no-code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Découvrir Claude Code</h3><p>Va sur <a href='https://docs.anthropic.com/en/docs/claude-code/overview' target='_blank'>la documentation officielle de Claude Code</a> et lis la page d'introduction.</p><p>Note 3 choses qui t'impressionnent et 1 question que tu te poses. Tu y répondras dans les prochaines leçons.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence fondamentale entre Claude.ai et Claude Code ?", options: JSON.stringify(["Claude Code est gratuit, Claude.ai est payant", "Claude Code a accès à tes fichiers et peut modifier ton code directement", "Claude.ai est plus puissant que Claude Code", "Claude Code fonctionne uniquement en ligne"]), correctAnswer: "Claude Code a accès à tes fichiers et peut modifier ton code directement", explanation: "Claude Code tourne dans ton terminal et peut lire, créer et modifier tes fichiers directement, tandis que Claude.ai est un chatbot web où tu dois copier-coller le code manuellement." },
      { type: "true_false", question: "Pour utiliser Claude Code, il faut savoir coder et connaître les langages de programmation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude Code comprend le langage naturel. Tu décris ce que tu veux en français, il traduit en code. Tu n'as pas besoin de connaître React, Python ou JavaScript pour construire une application." },
      { type: "mcq", question: "Quel est l'avantage principal de Claude Code par rapport aux outils no-code comme Wix ou Squarespace ?", options: JSON.stringify(["Il est plus facile à utiliser", "Tu obtiens du vrai code que tu peux héberger n'importe où et modifier à l'infini", "Il ne nécessite pas d'ordinateur", "Il génère automatiquement un nom de domaine"]), correctAnswer: "Tu obtiens du vrai code que tu peux héberger n'importe où et modifier à l'infini", explanation: "Contrairement aux outils no-code, Claude Code produit du vrai code que tu peux héberger n'importe où, modifier à l'infini, et vendre à tes clients. Tu gardes le contrôle total sur ton projet." },
      { type: "true_false", question: "Claude Code est un outil tiers non officiel développé par la communauté.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude Code est développé par Anthropic, la même entreprise qui fait Claude. C'est un outil officiel, conçu pour être l'interface la plus puissante pour interagir avec Claude." },
      { type: "mcq", question: "Un prospect te demande de créer une application web. Il hésite entre utiliser un outil no-code comme Wix et faire appel à toi avec Claude Code. Quel argument clé avances-tu ?", options: JSON.stringify(["Claude Code est gratuit alors que Wix est payant", "Avec Claude Code tu obtiens du vrai code modifiable et hébergeable partout, sans dépendance à une plateforme", "Claude Code crée des sites plus beaux que Wix", "Wix ne permet pas du tout de créer des sites professionnels"]), correctAnswer: "Avec Claude Code tu obtiens du vrai code modifiable et hébergeable partout, sans dépendance à une plateforme", explanation: "L'avantage décisif de Claude Code est la liberté : tu obtiens du vrai code que tu peux héberger n'importe où, modifier à l'infini et vendre. Pas de vendor lock-in, pas de limitations de plateforme." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 3,
    title: "Installer Claude Code sur ton ordinateur",
    slug: "installer-claude-code-ordinateur",
    duration: "25 min",
    description: "Installation pas à pas de Node.js, npm et Claude Code. Premier lancement et configuration initiale.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Ce dont tu as besoin avant de commencer" },
      { id: "2-2", type: "text", html: "<p>Pour installer Claude Code, tu as besoin de 3 choses :</p><ul><li><strong>Un ordinateur</strong> (Mac, Windows ou Linux — tout fonctionne)</li><li><strong>Node.js</strong> — c'est le moteur qui fait tourner Claude Code</li><li><strong>Un compte Anthropic</strong> — pour l'authentification</li></ul><p>Pas de panique si tu n'as jamais ouvert un terminal de ta vie. On va tout faire ensemble, étape par étape.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Claude Code fonctionne sur <strong>macOS, Windows et Linux</strong>. Sur Windows, il est recommandé d'utiliser WSL (Windows Subsystem for Linux) pour la meilleure expérience." },

      { id: "2-dia1", type: "heading", level: 3, text: "C'est quoi Node.js, npm et WSL concrètement ?" },
      { id: "2-dia2", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Claude Code", description: "L'outil IA qui code pour toi. C'est lui que tu utilises au quotidien." },
        { id: "n2", label: "npm", description: "Le magasin d'outils. C'est avec lui que tu installes Claude Code et d'autres programmes." },
        { id: "n3", label: "Node.js", description: "Le moteur qui fait tourner npm et Claude Code. Comme un moteur de voiture." },
        { id: "n4", label: "WSL (Windows)", description: "Un traducteur qui permet à Windows de parler le langage Linux (nécessaire sur Windows uniquement)." },
      ]},
      { id: "2-dia3", type: "callout", variant: "tip", html: "Pense à Node.js comme le moteur d'une voiture, npm comme la station-service (tu y trouves les outils), et Claude Code comme le GPS intelligent qui conduit pour toi. Sur Windows, WSL est l'adaptateur qui rend tout compatible." },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Étape 1 : Configurer WSL (utilisateurs Windows uniquement)" },
      { id: "2-6", type: "callout", variant: "warning", html: "Si tu es sur <strong>Windows</strong>, tu <strong>DOIS</strong> installer WSL avant de continuer. Claude Code nécessite un environnement Linux pour fonctionner correctement. Les utilisateurs Mac et Linux peuvent passer directement à l'étape 2." },
      { id: "2-7", type: "text", html: "<p><strong>WSL (Windows Subsystem for Linux)</strong> est une fonctionnalité de Windows qui te permet d'exécuter un vrai terminal Linux directement sur ton PC, sans machine virtuelle. C'est l'environnement recommandé par Anthropic pour utiliser Claude Code sur Windows.</p>" },
      { id: "2-8", type: "steps", steps: [
        { title: "Ouvrir PowerShell en administrateur", description: "Fais un clic droit sur le menu Démarrer et choisis \"Terminal (administrateur)\" ou \"PowerShell (administrateur)\". Accepte la demande d'élévation.", icon: "shield" },
        { title: "Installer WSL", description: "Tape la commande ci-dessous. Windows va télécharger et installer Ubuntu automatiquement. Ton PC redémarrera peut-être.", icon: "download" },
        { title: "Configurer Ubuntu", description: "Après le redémarrage, ouvre l'application \"Ubuntu\" depuis le menu Démarrer. Choisis un nom d'utilisateur et un mot de passe (ce sont tes identifiants Linux, pas ceux de Windows).", icon: "settings" },
        { title: "Installer Node.js dans WSL", description: "Dans le terminal Ubuntu, tape la commande d'installation de Node.js ci-dessous. Ensuite vérifie avec 'node --version'.", icon: "check" },
      ]},
      { id: "2-9", type: "code", language: "powershell", filename: "PowerShell (administrateur)", code: "# Installer WSL avec Ubuntu (dans PowerShell en admin)\nwsl --install" },
      { id: "2-10", type: "code", language: "bash", filename: "Terminal Ubuntu (WSL)", code: "# Installer Node.js 20 dans WSL\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs\n\n# Vérifier l'installation\nnode --version\nnpm --version" },
      { id: "2-11", type: "callout", variant: "tip", html: "À partir de maintenant, <strong>toutes les commandes</strong> de cette formation doivent être tapées dans le terminal Ubuntu (WSL), pas dans PowerShell ou cmd.exe. C'est ton nouveau terminal par défaut pour le développement." },
      { id: "2-12", type: "separator", style: "line" },

      { id: "2-13", type: "heading", level: 2, text: "Étape 2 : Installer Node.js (Mac et Linux)" },
      { id: "2-14", type: "text", html: "<p>Node.js est un environnement d'exécution JavaScript. Tu n'as pas besoin de comprendre ce que ça veut dire — retiens juste que c'est nécessaire pour faire tourner Claude Code.</p>" },
      { id: "2-15", type: "steps", steps: [
        { title: "Télécharger Node.js", description: "Va sur nodejs.org et télécharge la version LTS (Long Term Support). C'est la version stable recommandée.", icon: "download" },
        { title: "Installer", description: "Lance le fichier téléchargé et suis les instructions. Clique sur 'Suivant' à chaque étape, les réglages par défaut sont parfaits.", icon: "settings" },
        { title: "Vérifier l'installation", description: "Ouvre ton terminal et tape 'node --version'. Si tu vois un numéro de version (ex: v20.11.0), c'est installé.", icon: "check" },
      ]},
      { id: "2-16", type: "code", language: "bash", filename: "Terminal", code: "# Vérifier que Node.js est installé\nnode --version\n# Tu devrais voir quelque chose comme : v20.11.0\n\n# Vérifier que npm est installé (il vient avec Node.js)\nnpm --version\n# Tu devrais voir quelque chose comme : 10.2.4" },
      { id: "m3cc-dia-2-2-h", type: "heading", level: 3, text: "Le parcours complet d'installation" },
      { id: "m3cc-dia-2-2", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Installer Node.js", description: "Le moteur qui fait tourner tout le reste. Sans lui, rien ne démarre." },
        { id: "n2", label: "Vérifier npm", description: "npm vient avec Node.js. C'est le gestionnaire de paquets qui installe les outils." },
        { id: "n3", label: "npm install -g claude-code", description: "Tu utilises npm pour installer Claude Code globalement sur ta machine." },
        { id: "n4", label: "claude --version", description: "Tu vérifies que tout fonctionne. Si un numéro de version s'affiche, c'est gagné." },
      ]},
      { id: "m3cc-dia-2-2-tip", type: "callout", variant: "tip", html: "C'est comme monter un meuble IKEA : d'abord tu vérifies que tu as tous les outils (Node.js), puis tu assembles les pièces dans l'ordre (npm install), et à la fin tu vérifies que tout tient debout (claude --version)." },

      { id: "2-17", type: "separator", style: "line" },

      { id: "2-18", type: "heading", level: 2, text: "Étape 3 : Installer Claude Code" },
      { id: "2-19", type: "text", html: "<p>Maintenant que Node.js est installé, tu peux installer Claude Code avec une seule commande :</p>" },
      { id: "2-20", type: "code", language: "bash", filename: "Terminal", code: "# Installer Claude Code globalement sur ta machine\nnpm install -g @anthropic-ai/claude-code\n\n# Vérifier que l'installation a fonctionné\nclaude --version" },
      { id: "2-21", type: "callout", variant: "tip", html: "Le <code>-g</code> signifie <strong>global</strong> — Claude Code sera disponible partout sur ta machine, pas seulement dans un dossier spécifique." },
      { id: "2-22", type: "separator", style: "dots" },

      { id: "2-23", type: "heading", level: 2, text: "Étape 4 : Premier lancement et authentification" },
      { id: "2-24", type: "text", html: "<p>Lance Claude Code pour la première fois :</p>" },
      { id: "2-25", type: "code", language: "bash", filename: "Terminal", code: "# Se placer dans un dossier de travail\nmkdir ~/projets-ia\ncd ~/projets-ia\n\n# Lancer Claude Code\nclaude" },
      { id: "2-26", type: "text", html: "<p>Au premier lancement, Claude Code va te demander de t'authentifier. Un lien va s'ouvrir dans ton navigateur — connecte-toi avec ton compte Anthropic. Une fois connecté, retourne dans le terminal : Claude Code est prêt.</p><p>Tu vas voir apparaître le <strong>prompt de Claude Code</strong> — un curseur qui attend tes instructions. Tu es prêt à construire.</p>" },
      { id: "2-27", type: "callout", variant: "success", html: "Si tu vois le curseur de Claude Code dans ton terminal, bravo ! Tu as maintenant accès au plus puissant outil de développement IA disponible aujourd'hui." },

      { id: "m3cc-dia-2-3-h", type: "heading", level: 3, text: "Comment fonctionne l'authentification" },
      { id: "m3cc-dia-2-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Tu tapes 'claude'", description: "Tu lances Claude Code dans ton terminal pour la première fois" },
        { id: "n2", label: "Un lien s'ouvre dans ton navigateur", description: "Claude Code te redirige vers la page de connexion Anthropic" },
        { id: "n3", label: "Tu te connectes avec ton compte", description: "Tu entres tes identifiants Anthropic (email + mot de passe)" },
        { id: "n4", label: "Claude Code est prêt", description: "Le terminal affiche le curseur de Claude Code — tu peux commencer à travailler" },
      ]},
      { id: "m3cc-dia-2-3-tip", type: "callout", variant: "tip", html: "C'est comme quand tu te connectes à Netflix : tu entres tes identifiants une fois, et après ça marche automatiquement. Claude Code fait pareil — une seule authentification et tu es tranquille." },

      { id: "2-28", type: "separator", style: "line" },
      { id: "2-29", type: "quiz-inline", question: "Quelle commande utilises-tu pour installer Claude Code ?", options: [
        { id: "a", text: "pip install claude-code" },
        { id: "b", text: "npm install -g @anthropic-ai/claude-code" },
        { id: "c", text: "brew install claude" },
        { id: "d", text: "apt-get install claude-code" },
      ], correctId: "b", explanation: "Claude Code s'installe via npm (le gestionnaire de paquets Node.js) avec la commande npm install -g @anthropic-ai/claude-code. Le flag -g l'installe globalement sur ta machine." },

      { id: "2-30", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "J'ai installé Node.js sur mon ordinateur (ou via WSL sur Windows)" },
        { id: "c2", text: "J'ai installé Claude Code avec npm" },
        { id: "c3", text: "J'ai lancé Claude Code et je me suis authentifié" },
        { id: "c4", text: "Je sais ouvrir un terminal et y taper des commandes" },
      ]},
    ]),
    exercise: "<h3>Exercice : Installation complète</h3><ol><li>Si tu es sur Windows, installe WSL avec <code>wsl --install</code> puis configure Ubuntu</li><li>Installe Node.js (via le site officiel sur Mac/Linux, ou via la commande curl dans WSL)</li><li>Installe Claude Code avec la commande npm</li><li>Lance Claude Code et authentifie-toi</li><li>Tape ta première commande : <code>claude \"dis-moi bonjour en 3 langues\"</code></li></ol><p>Si tu rencontres une erreur, copie-colle le message d'erreur dans Claude.ai pour obtenir de l'aide.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la commande correcte pour installer Claude Code sur ta machine ?", options: JSON.stringify(["pip install claude-code", "npm install -g @anthropic-ai/claude-code", "brew install claude", "apt-get install claude-code"]), correctAnswer: "npm install -g @anthropic-ai/claude-code", explanation: "Claude Code s'installe via npm avec la commande npm install -g @anthropic-ai/claude-code. Le flag -g signifie global, ce qui rend Claude Code disponible partout sur ta machine." },
      { type: "true_false", question: "Sur Windows, il est recommandé d'utiliser WSL (Windows Subsystem for Linux) pour Claude Code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Claude Code nécessite un environnement Linux pour fonctionner correctement sur Windows. WSL permet d'exécuter un vrai terminal Linux directement sur ton PC, c'est l'environnement recommandé par Anthropic." },
      { type: "mcq", question: "Que signifie le flag -g dans la commande npm install -g ?", options: JSON.stringify(["Gratuit (free)", "Global — disponible partout sur ta machine", "Git — lié au versioning", "Graphique — installe une interface visuelle"]), correctAnswer: "Global — disponible partout sur ta machine", explanation: "Le flag -g signifie global. Claude Code sera disponible partout sur ta machine, pas seulement dans un dossier spécifique. C'est nécessaire pour l'utiliser dans n'importe quel projet." },
      { type: "true_false", question: "L'authentification Claude Code nécessite de se reconnecter à chaque session.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Comme Netflix, tu entres tes identifiants Anthropic une seule fois lors du premier lancement. Après, l'authentification fonctionne automatiquement." },
      { type: "mcq", question: "Un collègue sur Windows lance Claude Code et obtient l'erreur 'command not found'. Quelle est la cause la plus probable ?", options: JSON.stringify(["Son abonnement Anthropic a expiré", "Il n'a pas installé Node.js ou il utilise le terminal Windows natif au lieu de WSL", "Claude Code ne fonctionne pas sur Windows", "Son ordinateur n'est pas assez puissant"]), correctAnswer: "Il n'a pas installé Node.js ou il utilise le terminal Windows natif au lieu de WSL", explanation: "Les deux causes les plus fréquentes sur Windows sont : Node.js non installé (prérequis indispensable) ou utilisation du terminal Windows natif au lieu de WSL. Claude Code nécessite un environnement Linux via WSL sur Windows." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 3,
    title: "Ton premier projet avec Claude Code",
    slug: "premier-projet-claude-code",
    duration: "30 min",
    description: "Créer un projet Next.js de zéro avec Claude Code. Comprendre le workflow de développement avec l'IA.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "On va construire quelque chose de vrai" },
      { id: "3-2", type: "text", html: "<p>La meilleure façon d'apprendre Claude Code, c'est de construire un vrai projet. Pas un \"hello world\" ennuyeux — un projet que tu pourras montrer, utiliser, et même vendre.</p><p>Dans cette leçon, on va créer un <strong>site Next.js</strong> personnalisé. On utilise Next.js parce que c'est la stack que tu utiliseras pour tes projets clients dans le module suivant. Autant apprendre avec les bons outils dès le départ.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "Ne te préoccupe pas de comprendre le code généré. Ton job, c'est de <strong>décrire ce que tu veux</strong>. Le job de Claude Code, c'est de <strong>l'écrire</strong>." },

      { id: "3-dia1", type: "heading", level: 3, text: "C'est quoi Next.js et un framework concrètement ?" },
      { id: "3-dia2", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "Next.js (framework)", description: "Une boîte à outils complète pour créer des sites web modernes. Il organise ton projet automatiquement." },
        { id: "n2", label: "Pages et navigation", description: "Chaque fichier = une page de ton site. Simple et logique." },
        { id: "n3", label: "Tailwind CSS", description: "Le système de design intégré. Tu décris le style et ça s'applique." },
        { id: "n4", label: "TypeScript", description: "Le langage de programmation. Claude Code l'écrit pour toi." },
        { id: "n5", label: "Déploiement facile", description: "Un clic sur Vercel et ton site est en ligne pour le monde entier." },
      ]},
      { id: "3-dia3", type: "callout", variant: "info", html: "Un framework, c'est comme acheter une maison préfabriquée au lieu de tout construire brique par brique. La structure de base est déjà là (murs, toit, fondations). Tu n'as plus qu'à choisir la déco, les meubles et les couleurs. Next.js te donne la structure, toi tu décris le rendu final." },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Créer le projet Next.js" },
      { id: "3-6", type: "text", html: "<p>On commence par créer un projet Next.js avec la commande officielle. Cela génère toute la structure de base automatiquement :</p>" },
      { id: "3-7", type: "code", language: "bash", filename: "Terminal", code: "# Se placer dans le dossier de travail\ncd ~/projets-ia\n\n# Créer un nouveau projet Next.js\nnpx create-next-app@latest mon-premier-site\n\n# Répondre aux questions :\n# ✔ TypeScript ? → Yes\n# ✔ ESLint ? → Yes\n# ✔ Tailwind CSS ? → Yes\n# ✔ src/ directory ? → Yes\n# ✔ App Router ? → Yes\n# ✔ Import alias ? → Enter (défaut)\n\n# Entrer dans le projet\ncd mon-premier-site\n\n# Lancer Claude Code dans ce dossier\nclaude" },
      { id: "3-8", type: "text", html: "<p>Claude Code est maintenant ouvert dans le contexte de ton projet Next.js. Il comprend déjà la structure du projet, les dépendances installées, et la stack technique utilisée.</p>" },
      { id: "3-9", type: "callout", variant: "info", html: "Next.js est le framework React utilisé par les plus grandes entreprises (Netflix, TikTok, Nike). C'est aussi ce qu'on utilisera dans le Module 4 pour construire de vrais sites clients. Tu prends de l'avance en l'apprenant maintenant." },
      { id: "3-10", type: "separator", style: "line" },

      { id: "3-11", type: "heading", level: 2, text: "Étape 2 : Personnaliser avec Claude Code" },
      { id: "3-12", type: "text", html: "<p>Le projet de base est générique. Maintenant, demande à Claude Code de le transformer en quelque chose d'unique. Sois précis et détaillé :</p>" },
      { id: "3-13", type: "code", language: "text", filename: "Prompt à taper dans Claude Code", code: "Transforme cette page d'accueil en une landing page pour une newsletter sur l'IA.\n\nLe design doit être :\n- Moderne, épuré, fond sombre avec Tailwind CSS\n- Un titre accrocheur en grand\n- Un sous-titre qui explique la valeur de la newsletter\n- Un champ email + bouton d'inscription stylé\n- 3 cartes avec les bénéfices de la newsletter\n- Un compteur \"1 247 inscrits\" pour la preuve sociale\n\nModifie le fichier src/app/page.tsx et src/app/globals.css." },
      { id: "3-14", type: "callout", variant: "info", html: "Observe ce qui se passe : Claude Code va <strong>modifier les fichiers existants</strong>, <strong>écrire le code</strong>, et te demander confirmation avant chaque action. Tu gardes toujours le contrôle." },
      { id: "3-15", type: "separator", style: "dots" },

      { id: "3-16", type: "heading", level: 2, text: "Étape 3 : Voir le résultat et itérer" },
      { id: "3-dia4", type: "heading", level: 3, text: "C'est quoi localhost:3000 concrètement ?" },
      { id: "3-dia5", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "npm run dev", description: "Tu lances un mini-serveur web sur ton propre ordinateur" },
        { id: "n2", label: "localhost:3000", description: "C'est l'adresse de ce serveur. 'localhost' = ton PC. '3000' = le numéro de porte." },
        { id: "n3", label: "Ton navigateur", description: "Tu ouvres Chrome/Firefox et tu vas sur cette adresse pour voir ton site" },
      ]},
      { id: "3-dia6", type: "callout", variant: "tip", html: "localhost, c'est comme une adresse de maison, sauf que la maison c'est ton ordinateur. Le :3000, c'est le numéro de la porte d'entrée. Ton site tourne chez toi en privé, personne d'autre ne peut le voir. C'est ton espace de test avant de mettre en ligne." },

      { id: "3-17", type: "text", html: "<p>Lance le serveur de développement pour voir ton site en direct :</p>" },
      { id: "3-18", type: "code", language: "bash", filename: "Terminal (dans un autre onglet)", code: "# Lancer le serveur de développement\nnpm run dev\n\n# Ouvre http://localhost:3000 dans ton navigateur" },
      { id: "3-19", type: "text", html: "<p>Tu vois ta landing page en direct ! Il y a probablement des choses à ajuster — c'est normal et c'est là que la magie opère. Retourne dans Claude Code et tape tes retours :</p>" },
      { id: "3-20", type: "code", language: "text", filename: "Prompts d'itération", code: "Le bouton est trop petit, agrandis-le et mets-le en vert émeraude.\n\nAjoute une animation fade-in sur le titre quand la page se charge.\n\nChange le titre pour \"L'IA expliquée simplement, chaque semaine\".\n\nAjoute un footer avec des liens vers Twitter et LinkedIn." },
      { id: "3-21", type: "text", html: "<p>C'est ça le workflow avec Claude Code : <strong>tu décris → il construit → tu ajustes → il corrige</strong>. À chaque itération, ton projet s'améliore. En 20 minutes, tu as un site complet que tu aurais mis des heures à créer manuellement.</p>" },
      { id: "3-22", type: "callout", variant: "success", html: "Tu viens de construire ton premier projet Next.js avec Claude Code. Ce n'est pas un exercice théorique — c'est un vrai site que tu peux déployer sur Vercel et utiliser." },

      { id: "m3cc-dia-3-3-h", type: "heading", level: 3, text: "Le cycle de développement avec Claude Code" },
      { id: "m3cc-dia-3-3", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Décrire", description: "Tu expliques ce que tu veux en langage naturel. Sois précis sur le résultat attendu." },
        { id: "n2", label: "Générer", description: "Claude Code écrit le code, crée ou modifie les fichiers automatiquement." },
        { id: "n3", label: "Vérifier", description: "Tu ouvres le navigateur (localhost:3000) et tu regardes le résultat en direct." },
        { id: "n4", label: "Ajuster", description: "Tu dis ce qui ne va pas ou ce que tu veux changer. Claude corrige immédiatement." },
      ]},
      { id: "m3cc-dia-3-3-tip", type: "callout", variant: "tip", html: "Ce cycle, c'est comme sculpter de l'argile : tu donnes une forme générale, tu recules pour regarder, tu ajustes un détail, tu recules encore. Chaque tour de boucle améliore le résultat. 3 à 5 itérations suffisent généralement pour un résultat pro." },

      { id: "3-23", type: "separator", style: "line" },
      { id: "3-24", type: "quiz-inline", question: "Quel est le bon workflow avec Claude Code ?", options: [
        { id: "a", text: "Écrire le code soi-même, puis demander à Claude de corriger les bugs" },
        { id: "b", text: "Décrire ce qu'on veut, laisser Claude créer, puis itérer avec des retours" },
        { id: "c", text: "Copier-coller du code depuis internet et demander à Claude de l'adapter" },
        { id: "d", text: "Demander à Claude de tout faire d'un coup sans itérer" },
      ], correctId: "b", explanation: "Le workflow optimal avec Claude Code est itératif : tu décris ce que tu veux, Claude construit, tu observes le résultat, tu donnes des retours, et Claude ajuste. C'est en itérant qu'on arrive au meilleur résultat." },

      { id: "3-25", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je sais créer un projet Next.js avec npx create-next-app" },
        { id: "c2", text: "Je sais demander à Claude Code de personnaliser un projet existant" },
        { id: "c3", text: "Je comprends le workflow itératif : décrire, observer, ajuster" },
        { id: "c4", text: "J'ai construit mon premier projet Next.js fonctionnel avec Claude Code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis ton premier site Next.js</h3><ol><li>Crée un nouveau projet avec <code>npx create-next-app@latest mon-premier-site</code></li><li>Lance Claude Code dans le dossier du projet</li><li>Demande-lui de transformer la page d'accueil en landing page de newsletter</li><li>Lance <code>npm run dev</code> et ouvre <code>http://localhost:3000</code></li><li>Fais au moins 3 itérations pour améliorer le design</li><li>Fais une capture d'écran du résultat final</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle commande crée un nouveau projet Next.js ?", options: JSON.stringify(["npm create next-app", "npx create-next-app@latest mon-projet", "next init mon-projet", "npm install next"]), correctAnswer: "npx create-next-app@latest mon-projet", explanation: "La commande officielle est npx create-next-app@latest suivi du nom du projet. Elle génère toute la structure de base automatiquement avec TypeScript, Tailwind CSS et App Router." },
      { type: "true_false", question: "Avec Claude Code, il faut comprendre le code généré pour pouvoir l'utiliser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu n'as pas besoin de comprendre le code généré. Ton job est de décrire ce que tu veux, le job de Claude Code est de l'écrire. Tu te concentres sur le résultat, pas sur le code." },
      { type: "mcq", question: "Que signifie localhost:3000 quand tu lances npm run dev ?", options: JSON.stringify(["L'adresse de ton site en production sur Internet", "L'adresse d'un serveur local sur ton propre ordinateur au port 3000", "L'adresse du serveur d'Anthropic", "Un mot de passe pour accéder au projet"]), correctAnswer: "L'adresse d'un serveur local sur ton propre ordinateur au port 3000", explanation: "localhost signifie ton propre ordinateur et 3000 est le numéro de port (la porte d'entrée). C'est un mini-serveur web privé qui tourne sur ta machine pour tester ton site avant de le mettre en ligne." },
      { type: "true_false", question: "Le workflow avec Claude Code est linéaire : tu décris tout en un seul prompt et le résultat est final.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le workflow est itératif : tu décris, Claude construit, tu observes le résultat, tu donnes des retours, et Claude ajuste. 3 à 5 itérations sont généralement nécessaires pour un résultat professionnel." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : après 3 itérations, la page d'accueil de ton client est presque parfaite mais le bouton CTA est trop petit sur mobile. Que dis-tu à Claude Code ?", options: JSON.stringify(["'Refais toute la page en version mobile'", "'Le bouton CTA dans la section hero est trop petit sur mobile, augmente sa taille à au moins 48px de hauteur et rends-le full-width sur les écrans < 640px'", "'Le site ne marche pas sur mobile'", "'Ajoute du CSS'"]), correctAnswer: "'Le bouton CTA dans la section hero est trop petit sur mobile, augmente sa taille à au moins 48px de hauteur et rends-le full-width sur les écrans < 640px'", explanation: "Un bon prompt d'itération est spécifique : quel élément (bouton CTA), où (section hero), quel problème (trop petit sur mobile), quelle solution (48px, full-width sous 640px). Plus c'est précis, plus Claude Code corrige efficacement." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 3,
    title: "Les commandes essentielles de Claude Code",
    slug: "commandes-essentielles-claude-code",
    duration: "25 min",
    description: "Maîtriser /init, la lecture de fichiers, l'édition, la création de fichiers et le fichier CLAUDE.md.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Les commandes slash : ton tableau de bord" },
      { id: "4-2", type: "text", html: "<p>Claude Code a des <strong>commandes slash</strong> qui te donnent des super-pouvoirs. Ce sont des raccourcis qui commencent par <code>/</code> et qui déclenchent des actions spécifiques. Tu n'as pas besoin de toutes les connaître — concentre-toi sur les essentielles.</p>" },
      { id: "4-3", type: "comparison", headers: ["Commande", "Ce qu'elle fait", "Quand l'utiliser"], rows: [
        { cells: ["/init", "Crée un fichier CLAUDE.md pour ton projet", "Au début de chaque nouveau projet"] },
        { cells: ["/clear", "Efface l'historique de conversation", "Quand le contexte devient trop long"] },
        { cells: ["/compact", "Résume la conversation pour libérer du contexte", "Quand Claude commence à oublier des choses"] },
        { cells: ["/cost", "Affiche le coût de la session en cours", "Pour surveiller ta consommation"] },
        { cells: ["/help", "Affiche la liste de toutes les commandes", "Quand tu as un doute"] },
      ]},
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Le fichier CLAUDE.md : la mémoire de ton projet" },
      { id: "4-6", type: "text", html: "<p>Le fichier <code>CLAUDE.md</code> est la pièce maîtresse de Claude Code. C'est un fichier Markdown qui décrit ton projet : sa structure, ses conventions, ses règles. À chaque lancement, Claude Code lit ce fichier pour comprendre le contexte.</p><p>Tape <code>/init</code> pour que Claude Code crée automatiquement un CLAUDE.md adapté à ton projet.</p>" },
      { id: "4-7", type: "code", language: "markdown", filename: "CLAUDE.md (exemple)", code: "# Mon Projet - Landing Page Agence IA\n\n## Description\nSite vitrine pour une agence de services IA.\n\n## Stack technique\n- Next.js 14 avec App Router\n- Tailwind CSS pour le style\n- TypeScript\n\n## Conventions\n- Composants dans /src/components\n- Pages dans /src/app\n- Utiliser les Server Components par défaut\n- Noms de fichiers en kebab-case\n\n## Commandes\n- `npm run dev` pour lancer le serveur de dev\n- `npm run build` pour construire le projet\n- `npm run lint` pour vérifier le code" },
      { id: "4-8", type: "callout", variant: "tip", html: "Mets à jour ton <code>CLAUDE.md</code> régulièrement. Plus il est précis, mieux Claude Code comprend ton projet. C'est comme un briefing pour un nouveau collègue — plus c'est clair, moins il y a de malentendus." },

      { id: "m3cc-dia-4-1-h", type: "heading", level: 3, text: "Que mettre dans ton CLAUDE.md" },
      { id: "m3cc-dia-4-1", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Commandes essentielles", description: "npm run dev, npm run build, npm run lint — les commandes que Claude doit connaître pour travailler" },
        { id: "n2", label: "Conventions du projet", description: "Où mettre les composants, comment nommer les fichiers, quel style de code utiliser" },
        { id: "n3", label: "Stack technique", description: "Next.js, Tailwind CSS, TypeScript — les technologies utilisées dans ton projet" },
        { id: "n4", label: "Description du projet", description: "Ce que fait ton application, pour qui, et son objectif principal" },
      ]},
      { id: "m3cc-dia-4-1-tip", type: "callout", variant: "tip", html: "Le CLAUDE.md, c'est la fiche d'identité de ton projet. Imagine que tu embauches un développeur freelance : tu lui donnerais une description du projet, la stack, les conventions et les commandes utiles. C'est exactement ce que fait ce fichier pour Claude Code." },

      { id: "4-dia1", type: "heading", level: 3, text: "C'est quoi les commandes slash concrètement ?" },
      { id: "4-dia2", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "Commandes slash", description: "Des raccourcis qui commencent par / pour déclencher des actions spéciales dans Claude Code" },
        { id: "n2", label: "/init", description: "Crée la carte d'identité de ton projet (CLAUDE.md)" },
        { id: "n3", label: "/clear", description: "Efface la mémoire courte — repart à zéro dans la conversation" },
        { id: "n4", label: "/compact", description: "Résume ce qui a été dit pour libérer de la mémoire" },
        { id: "n5", label: "/cost", description: "Affiche combien la session a coûté en euros" },
      ]},
      { id: "4-dia3", type: "callout", variant: "info", html: "Les commandes slash, c'est comme les raccourcis clavier (Ctrl+C, Ctrl+V) mais pour Claude Code. Au lieu de taper une longue phrase, tu tapes /init et Claude Code sait exactement quoi faire. Le CLAUDE.md qu'il crée, c'est le CV de ton projet : Claude le lit à chaque fois qu'il arrive pour savoir dans quoi il travaille." },

      { id: "4-9", type: "separator", style: "line" },

      { id: "4-10", type: "heading", level: 2, text: "Lire, créer et modifier des fichiers" },
      { id: "4-11", type: "text", html: "<p>Claude Code peut interagir avec tous les fichiers de ton projet. Voici les actions les plus courantes :</p>" },
      { id: "4-12", type: "steps", steps: [
        { title: "Lire un fichier", description: "Dis simplement \"lis le fichier src/app/page.tsx\" ou \"montre-moi le contenu de package.json\". Claude Code affiche le contenu et peut l'analyser.", icon: "eye" },
        { title: "Créer un fichier", description: "\"Crée un composant Button dans src/components/Button.tsx\". Claude Code crée le fichier avec le code adapté au contexte de ton projet.", icon: "plus" },
        { title: "Modifier un fichier", description: "\"Dans le fichier Header.tsx, change la couleur du fond en bleu foncé\". Claude Code fait la modification chirurgicalement.", icon: "edit" },
        { title: "Supprimer ou renommer", description: "\"Renomme le fichier utils.js en helpers.ts\" ou \"Supprime le fichier test.txt\". Claude Code te demande confirmation avant de supprimer.", icon: "trash" },
      ]},
      { id: "4-13", type: "callout", variant: "warning", html: "Claude Code te demandera toujours <strong>confirmation</strong> avant de modifier ou supprimer un fichier. Lis attentivement ce qu'il propose avant de valider." },

      { id: "m3cc-dia-4-2-h", type: "heading", level: 3, text: "Comment Claude Code gère tes fichiers" },
      { id: "m3cc-dia-4-2", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Tu donnes une instruction", description: "\"Modifie le titre dans Header.tsx\" — tu décris ce que tu veux changer" },
        { id: "n2", label: "Claude Code analyse", description: "Il lit le fichier concerné et comprend le contexte (imports, dépendances, structure)" },
        { id: "n3", label: "Il propose les modifications", description: "Il te montre exactement ce qu'il va changer, ligne par ligne, avant de toucher à quoi que ce soit" },
        { id: "n4", label: "Tu valides (ou pas)", description: "Tu acceptes les changements, tu les refuses, ou tu demandes un ajustement" },
      ]},
      { id: "m3cc-dia-4-2-tip", type: "callout", variant: "tip", html: "C'est comme un architecte qui te montre les plans avant de casser un mur. Claude Code ne touche jamais à tes fichiers sans ta permission. Tu restes le chef de chantier." },

      { id: "4-14", type: "separator", style: "dots" },

      { id: "4-15", type: "heading", level: 2, text: "Exécuter des commandes terminal" },
      { id: "4-16", type: "text", html: "<p>Claude Code peut aussi exécuter des commandes dans ton terminal — installer des dépendances, lancer un serveur, exécuter des tests :</p>" },
      { id: "4-17", type: "code", language: "text", filename: "Exemples de commandes", code: "Installe les dépendances du projet\n→ Claude exécute : npm install\n\nLance le serveur de développement\n→ Claude exécute : npm run dev\n\nVérifie s'il y a des erreurs dans le code\n→ Claude exécute : npm run lint\n\nInstalle la librairie Tailwind CSS\n→ Claude exécute : npm install tailwindcss" },

      { id: "m3cc-dia-4-3-h", type: "heading", level: 3, text: "Taper les commandes toi-même vs les déléguer à Claude Code" },
      { id: "m3cc-dia-4-3", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Mémoriser chaque commande", description: "Tu dois retenir npm install, npm run dev, git add, git commit... Des dizaines de commandes à connaître par coeur" },
        { id: "n2", label: "Risque d'erreur de frappe", description: "Une faute de frappe dans une commande et rien ne fonctionne. Frustrant quand on débute." },
        { id: "n3", label: "Décrire ce que tu veux", description: "Tu dis 'installe les dépendances' ou 'lance le serveur' en français. Claude Code traduit." },
        { id: "n4", label: "Claude vérifie pour toi", description: "Il exécute la bonne commande, vérifie le résultat, et te dit si tout s'est bien passé." },
      ]},
      { id: "m3cc-dia-4-3-tip", type: "callout", variant: "tip", html: "C'est comme la différence entre conduire avec un GPS vocal et conduire avec une carte papier. Le résultat est le même (tu arrives à destination), mais avec le GPS tu n'as pas besoin de mémoriser toutes les rues." },

      { id: "4-18", type: "separator", style: "line" },
      { id: "4-19", type: "quiz-inline", question: "À quoi sert le fichier CLAUDE.md ?", options: [
        { id: "a", text: "C'est un fichier de configuration obligatoire pour installer Claude Code" },
        { id: "b", text: "C'est la documentation du projet que Claude Code lit pour comprendre le contexte" },
        { id: "c", text: "C'est un fichier qui stocke l'historique des conversations" },
        { id: "d", text: "C'est un fichier de licence pour le projet" },
      ], correctId: "b", explanation: "Le fichier CLAUDE.md décrit ton projet (stack, conventions, structure). Claude Code le lit à chaque lancement pour comprendre le contexte de ton projet et te donner des réponses plus pertinentes." },

      { id: "4-20", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je connais les commandes slash essentielles (/init, /clear, /compact, /cost)" },
        { id: "c2", text: "Je sais créer et maintenir un fichier CLAUDE.md" },
        { id: "c3", text: "Je sais demander à Claude Code de lire, créer et modifier des fichiers" },
        { id: "c4", text: "Je sais faire exécuter des commandes terminal par Claude Code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Prends en main les commandes</h3><ol><li>Ouvre ton projet de la leçon précédente dans Claude Code</li><li>Tape <code>/init</code> pour générer un fichier CLAUDE.md</li><li>Lis le CLAUDE.md généré et améliore-le avec des informations supplémentaires</li><li>Demande à Claude Code de créer un nouveau fichier <code>about.html</code> avec une page \"À propos\"</li><li>Tape <code>/cost</code> pour voir combien la session a coûté</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle du fichier CLAUDE.md dans un projet ?", options: JSON.stringify(["C'est un fichier de configuration obligatoire pour installer Claude Code", "C'est la documentation du projet que Claude Code lit pour comprendre le contexte", "C'est un fichier qui stocke l'historique des conversations", "C'est un fichier de licence open source"]), correctAnswer: "C'est la documentation du projet que Claude Code lit pour comprendre le contexte", explanation: "Le CLAUDE.md est la fiche d'identité de ton projet. Il décrit la stack technique, les conventions, les commandes utiles. Claude Code le lit à chaque lancement pour comprendre le contexte." },
      { type: "true_false", question: "La commande /compact résume la conversation pour libérer du contexte quand Claude commence à oublier des choses.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La commande /compact résume la conversation en cours pour libérer de l'espace contextuel. C'est utile quand Claude Code commence à oublier des éléments discutés plus tôt dans la session." },
      { type: "mcq", question: "Que fait Claude Code avant de modifier ou supprimer un fichier ?", options: JSON.stringify(["Il modifie directement sans prévenir", "Il demande toujours confirmation avant d'agir", "Il crée une copie de sauvegarde automatique", "Il envoie un email de notification"]), correctAnswer: "Il demande toujours confirmation avant d'agir", explanation: "Claude Code te demande toujours confirmation avant de modifier ou supprimer un fichier. Tu gardes le contrôle total : tu peux accepter, refuser ou demander un ajustement." },
      { type: "true_false", question: "Il faut mémoriser toutes les commandes terminal pour utiliser Claude Code efficacement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu peux simplement décrire ce que tu veux en français ('installe les dépendances', 'lance le serveur') et Claude Code exécute la bonne commande pour toi. Pas besoin de mémoriser npm install ou git commit." },
      { type: "mcq", question: "Un client te confie un projet Next.js existant développé par un autre freelance. Tu ouvres Claude Code dans le dossier du projet. Quelle est ta première action ?", options: JSON.stringify(["Supprimer tout le code et recommencer de zéro", "Lancer /init pour créer un CLAUDE.md puis demander à Claude Code d'analyser la structure du projet", "Lire tout le code ligne par ligne pendant 3 heures", "Dire au client que tu ne peux pas reprendre un projet existant"]), correctAnswer: "Lancer /init pour créer un CLAUDE.md puis demander à Claude Code d'analyser la structure du projet", explanation: "Claude Code peut analyser la structure complète de n'importe quel projet existant. La première action est de créer un CLAUDE.md avec /init pour documenter le contexte, puis de demander à Claude Code d'expliquer l'architecture." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 3,
    title: "Vibe coding : construire sans savoir coder",
    slug: "vibe-coding-construire-sans-coder",
    duration: "30 min",
    description: "Le concept de vibe coding, comment décrire ce que tu veux de manière efficace, et itérer rapidement avec Claude Code.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le vibe coding, c'est quoi ?" },
      { id: "5-2", type: "text", html: "<p>Le <strong>vibe coding</strong>, c'est une nouvelle façon de créer des logiciels. Au lieu d'écrire du code ligne par ligne, tu <em>décris l'ambiance</em>, le résultat voulu, et l'IA traduit ça en code fonctionnel.</p><p>Le terme a été popularisé par <strong>Andrej Karpathy</strong> (ancien directeur IA de Tesla) : <em>\"Tu te laisses porter par le vibe, tu décris les choses, tu itères, et tu acceptes ou tu rejettes ce que l'IA produit.\"</em></p><p>Concrètement, ça veut dire que tu n'as plus besoin de savoir la différence entre une <code>div</code> et un <code>span</code>. Tu as besoin de savoir ce que tu veux construire et comment le décrire clairement.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "Le vibe coding ne remplace pas le fait de comprendre ce qu'on construit. Tu n'as pas besoin de savoir <em>écrire</em> du code, mais tu dois savoir <em>ce que tu veux</em>. La clarté de ta vision est ton super-pouvoir." },
      { id: "m3cc-dia-5-1-h", type: "heading", level: 3, text: "Les niveaux de qualité d'un prompt" },
      { id: "m3cc-dia-5-1", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Prompt expert", description: "Résultat + contexte + fichiers + style de référence + détails visuels précis. Résultat quasi parfait du premier coup." },
        { id: "n2", label: "Prompt intermédiaire", description: "Résultat + contexte + quelques détails. Bon résultat après 1-2 itérations." },
        { id: "n3", label: "Prompt basique", description: "Juste le résultat voulu sans détails. Résultat passable, beaucoup d'itérations nécessaires." },
        { id: "n4", label: "Prompt vague", description: "\"Fais-moi un truc bien\" — résultat imprévisible, perte de temps garantie." },
      ]},
      { id: "m3cc-dia-5-1-tip", type: "callout", variant: "tip", html: "C'est comme commander au restaurant : \"un truc bon\" (vague) vs \"un steak saignant avec des frites maison et une sauce béarnaise\" (expert). Plus tu es précis, plus tu es satisfait du résultat." },

      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Les 5 règles d'or du vibe coding" },
      { id: "5-6", type: "steps", steps: [
        { title: "Sois spécifique, pas vague", description: "Mauvais : \"Fais-moi un beau site\". Bon : \"Crée une page d'accueil avec un fond gradient bleu-violet, un titre centré en blanc, un sous-titre gris clair, et un bouton CTA orange avec coins arrondis.\"", icon: "target" },
        { title: "Découpe en petites étapes", description: "Ne demande pas tout d'un coup. Commence par la structure, puis le design, puis les interactions, puis les détails. Chaque prompt = une étape claire.", icon: "layers" },
        { title: "Donne des références", description: "\"Je veux un style comme le site de Stripe\" ou \"inspire-toi du design de Linear\". Les références visuelles aident Claude à comprendre ce que tu veux.", icon: "image" },
        { title: "Itère sans hésiter", description: "Le premier résultat ne sera jamais parfait. C'est normal. Dis ce qui ne va pas, Claude corrige. 3 à 5 itérations = un résultat pro.", icon: "repeat" },
        { title: "Valide au fur et à mesure", description: "Ouvre ton projet dans le navigateur après chaque modification. Ne laisse pas 10 changements s'accumuler sans vérifier.", icon: "check" },
      ]},
      { id: "m3cc-dia-5-2-h", type: "heading", level: 3, text: "Le cycle du vibe coding en pratique" },
      { id: "m3cc-dia-5-2", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Vision", description: "Tu imagines le résultat final. Qu'est-ce que tu veux voir à l'écran ? Quel feeling doit dégager la page ?" },
        { id: "n2", label: "Prompt", description: "Tu décris ta vision avec des détails : couleurs, tailles, disposition, style de référence." },
        { id: "n3", label: "Résultat", description: "Claude Code génère le code. Tu ouvres le navigateur et tu compares avec ta vision." },
        { id: "n4", label: "Feedback", description: "Tu notes ce qui diffère de ta vision. Tu reformules avec des ajustements précis." },
      ]},
      { id: "m3cc-dia-5-2-tip", type: "callout", variant: "tip", html: "Le vibe coding, c'est comme travailler avec un peintre : tu décris le tableau que tu imagines, il peint, tu regardes, tu lui dis \"un peu plus de bleu ici, plus de lumière là\". Le tableau se construit par allers-retours." },

      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Exemples de bons prompts vs mauvais prompts" },
      { id: "5-9", type: "comparison", headers: ["Mauvais prompt", "Bon prompt"], rows: [
        { cells: ["Fais-moi un site", "Crée une landing page pour un coach en nutrition avec 5 sections : hero, problème, solution, témoignages, CTA"] },
        { cells: ["Ajoute un formulaire", "Ajoute un formulaire de contact avec les champs nom, email, message, et un bouton 'Envoyer'. Le formulaire doit être centré, largeur max 500px, avec des bordures grises arrondies"] },
        { cells: ["Ça marche pas", "Le bouton ne change pas de couleur au hover. Ajoute un effet hover qui éclaircit le fond du bouton de 10%"] },
        { cells: ["Fais mieux", "Le titre est trop petit sur mobile. Passe-le de 48px à 32px en dessous de 768px de largeur d'écran"] },
      ]},
      { id: "5-10", type: "callout", variant: "tip", html: "La règle numéro 1 : si Claude produit quelque chose qui ne correspond pas à ce que tu veux, c'est probablement que ton prompt n'était pas assez précis. Reformule avec plus de détails." },
      { id: "5-11", type: "separator", style: "dots" },

      { id: "5-12", type: "heading", level: 2, text: "Les 3 règles d'or du prompting Claude Code" },
      { id: "5-13", type: "text", html: "<p>Pour obtenir les meilleurs résultats avec Claude Code, retiens ces 3 principes simples :</p>" },
      { id: "5-14", type: "steps", steps: [
        { title: "1. Décris le RÉSULTAT final (pas les étapes)", description: "Ne dis pas \"crée un fichier, puis ajoute une div, puis mets du CSS\". Dis plutôt \"je veux une page d'accueil avec un hero sombre, un titre blanc centré et un bouton CTA orange\". Claude sait comment y arriver — ton job c'est de décrire la destination, pas le chemin.", icon: "flag" },
        { title: "2. Donne le CONTEXTE technique (stack, fichiers existants)", description: "Précise toujours dans quel fichier travailler, quelle stack tu utilises, et ce qui existe déjà. Exemple : \"Dans src/app/page.tsx, c'est un projet Next.js avec Tailwind CSS. Modifie la section hero.\". Plus Claude a de contexte, plus il est précis.", icon: "folder" },
        { title: "3. Itère par petites demandes (pas tout d'un coup)", description: "Ne demande pas un site complet en un seul prompt. Commence par le hero, valide, puis la section suivante, valide, etc. Chaque petite demande = un résultat contrôlable. 5 petits prompts > 1 gros prompt.", icon: "layers" },
      ]},
      { id: "5-15", type: "code", language: "text", filename: "Exemple de prompt qui applique les 3 règles", code: "RÉSULTAT : Je veux que la section hero de ma landing page\nait un look premium et professionnel, similaire à vercel.com.\n\nCONTEXTE : Le fichier est src/app/page.tsx, c'est un projet\nNext.js avec Tailwind CSS.\n\nDÉTAILS :\n- Fond gradient de bleu foncé (#1a1a2e) à violet (#16213e)\n- Titre en blanc, 56px, font-weight bold\n- Sous-titre en gris clair (#a0a0a0), 20px\n- Bouton CTA orange (#ff6b35) avec texte blanc, coins arrondis\n- Padding vertical de 120px" },

      { id: "m3cc-dia-5-3-h", type: "heading", level: 3, text: "L'anatomie d'un prompt parfait" },
      { id: "m3cc-dia-5-3", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Le prompt parfait", description: "Un prompt bien structuré qui donne un résultat excellent dès la première itération", children: ["n2", "n3", "n4"] },
        { id: "n2", label: "RÉSULTAT", description: "Ce que tu veux voir à l'écran. Description du rendu final, pas des étapes techniques.", children: ["n5"] },
        { id: "n3", label: "CONTEXTE", description: "Le fichier à modifier, la stack utilisée, ce qui existe déjà dans le projet.", children: ["n6"] },
        { id: "n4", label: "DÉTAILS", description: "Couleurs, tailles, espacements, animations, références visuelles.", children: ["n7"] },
        { id: "n5", label: "Ex: une landing page premium", description: "\"Je veux une landing page avec un hero sombre et un CTA orange\"", children: [] },
        { id: "n6", label: "Ex: src/app/page.tsx", description: "\"C'est un projet Next.js avec Tailwind dans le fichier page.tsx\"", children: [] },
        { id: "n7", label: "Ex: fond #1a1a2e, titre 56px", description: "\"Gradient bleu-violet, titre bold en blanc, bouton aux coins arrondis\"", children: [] },
      ]},
      { id: "m3cc-dia-5-3-tip", type: "callout", variant: "tip", html: "Retiens la formule magique : <strong>RÉSULTAT + CONTEXTE + DÉTAILS</strong>. C'est comme un GPS : la destination (résultat), le point de départ (contexte), et les préférences de route (détails). Avec ces 3 infos, Claude Code trouve toujours le meilleur chemin." },

      { id: "5-16", type: "separator", style: "line" },
      { id: "5-17", type: "quiz-inline", question: "Quel est le meilleur prompt pour Claude Code ?", options: [
        { id: "a", text: "Fais-moi un beau formulaire" },
        { id: "b", text: "Mets un formulaire quelque part sur la page" },
        { id: "c", text: "Crée un formulaire de contact centré avec champs nom, email et message, bordures grises arrondies, bouton bleu, largeur max 500px" },
        { id: "d", text: "Formulaire. Contact. Maintenant." },
      ], correctId: "c", explanation: "Un bon prompt de vibe coding est spécifique : il décrit les champs, le style, les dimensions et le comportement voulu. Plus tu es précis, plus le résultat correspond à ce que tu imagines." },

      { id: "5-18", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends le concept de vibe coding" },
        { id: "c2", text: "Je connais les 5 règles d'or pour des prompts efficaces" },
        { id: "c3", text: "Je sais appliquer les 3 règles du prompting Claude Code : résultat, contexte, itération" },
        { id: "c4", text: "Je sais faire la différence entre un bon prompt et un mauvais prompt" },
        { id: "c5", text: "Je comprends l'importance de l'itération dans le processus" },
      ]},
    ]),
    exercise: "<h3>Exercice : Vibe coding en action</h3><ol><li>Choisis un projet simple : une page portfolio, une page de restaurant, ou une page produit</li><li>Écris un prompt détaillé en appliquant les 3 règles d'or (résultat, contexte, itération)</li><li>Lance Claude Code et donne-lui ton prompt</li><li>Fais au moins 5 itérations pour affiner le résultat</li><li>Compare ton premier résultat avec le résultat final après itérations</li></ol>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 éléments d'un prompt parfait pour Claude Code ?", options: JSON.stringify(["Titre, contenu, conclusion", "Résultat, contexte, détails", "Introduction, développement, conclusion", "Fichier, commande, validation"]), correctAnswer: "Résultat, contexte, détails", explanation: "La formule magique est RÉSULTAT (ce que tu veux voir) + CONTEXTE (le fichier, la stack, ce qui existe déjà) + DÉTAILS (couleurs, tailles, animations, références). Avec ces 3 éléments, Claude Code trouve le meilleur chemin." },
      { type: "true_false", question: "Le vibe coding consiste à écrire du code soi-même puis à demander à l'IA de l'optimiser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le vibe coding est l'inverse : tu décris l'ambiance, le résultat voulu en langage naturel, et l'IA traduit ça en code fonctionnel. Tu n'écris pas de code toi-même." },
      { type: "mcq", question: "Quel type de prompt donne le pire résultat avec Claude Code ?", options: JSON.stringify(["Un prompt avec des couleurs et tailles précises", "Un prompt vague comme 'Fais-moi un truc bien'", "Un prompt qui mentionne un fichier spécifique", "Un prompt qui donne une référence visuelle"]), correctAnswer: "Un prompt vague comme 'Fais-moi un truc bien'", explanation: "Un prompt vague comme 'Fais-moi un truc bien' donne un résultat imprévisible et une perte de temps garantie. Plus tu es spécifique (couleurs, dimensions, style de référence), plus le résultat correspond à ta vision." },
      { type: "true_false", question: "Si Claude Code produit un résultat qui ne correspond pas à ce que tu veux, c'est probablement que ton prompt n'était pas assez précis.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La règle numéro 1 du vibe coding : si le résultat ne correspond pas, reformule avec plus de détails. La qualité du résultat est directement liée à la précision du prompt." },
      { type: "mcq", question: "Un prospect veut voir à quoi ressemblerait un chatbot sur son site de e-commerce avant de signer. Tu as 2 heures. Quelle approche adoptes-tu avec Claude Code ?", options: JSON.stringify(["Tu lui expliques que 2h ce n'est pas assez et qu'il faut 2 semaines", "Tu décris précisément le résultat souhaité (widget chat, couleurs du client, messages de bienvenue) et tu itères en 3-5 tours pour un prototype convaincant", "Tu lui montres des captures d'écran de chatbots d'autres clients", "Tu codes tout manuellement en JavaScript pour impressionner"]), correctAnswer: "Tu décris précisément le résultat souhaité (widget chat, couleurs du client, messages de bienvenue) et tu itères en 3-5 tours pour un prototype convaincant", explanation: "Le vibe coding permet de créer un prototype fonctionnel en quelques heures. En décrivant précisément le résultat, le contexte et les détails (couleurs, textes, style), puis en itérant 3-5 fois, tu obtiens un résultat professionnel qui aide à closer le deal." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 3,
    title: "Gérer un projet complexe avec Claude Code",
    slug: "projet-complexe-claude-code",
    duration: "30 min",
    description: "Travailler sur des projets multi-fichiers, comprendre l'architecture, et débugger efficacement avec Claude Code.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Passer d'une page à une vraie application" },
      { id: "6-2", type: "text", html: "<p>Jusqu'ici, tu as construit des pages simples — un ou deux fichiers. Mais les vrais projets clients sont plus complexes : un site avec plusieurs pages, des composants réutilisables, une base de données, des API. C'est là que Claude Code brille vraiment.</p><p>Claude Code comprend la <strong>structure entière de ton projet</strong>. Quand tu lui demandes de modifier un composant, il sait quels autres fichiers sont impactés. Quand tu signales un bug, il peut analyser le flux de données à travers plusieurs fichiers pour trouver la cause.</p>" },
      { id: "6-3", type: "callout", variant: "info", html: "Un projet Next.js typique peut avoir 50 à 200 fichiers. Claude Code les comprend tous et peut naviguer entre eux instantanément. C'est comme avoir un GPS dans une ville au lieu de chercher ton chemin à pied." },

      { id: "6-dia1", type: "heading", level: 3, text: "C'est quoi une codebase et une architecture concrètement ?" },
      { id: "6-dia2", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Pages (ce que l'utilisateur voit)", description: "Les écrans de ton site : accueil, contact, services... Chaque page = un fichier." },
        { id: "n2", label: "Composants (les briques réutilisables)", description: "Header, Footer, boutons, formulaires... Des morceaux que tu réutilises partout." },
        { id: "n3", label: "Logique métier (le cerveau)", description: "Les fonctions qui traitent les données, appellent les APIs, font les calculs." },
        { id: "n4", label: "Configuration (les fondations)", description: "package.json, tailwind.config, .env — les réglages de base du projet." },
      ]},
      { id: "6-dia3", type: "callout", variant: "tip", html: "La codebase, c'est l'ensemble de tous les fichiers de ton projet. L'architecture, c'est la façon dont ces fichiers sont organisés — comme le plan d'un bâtiment. Quand Claude Code lit ta codebase, il comprend le plan complet et sait exactement où chaque chose se trouve." },

      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Comprendre l'architecture d'un projet" },
      { id: "6-6", type: "text", html: "<p>Avant de modifier un projet, il faut comprendre comment il est organisé. Demande à Claude Code de t'expliquer :</p>" },
      { id: "6-7", type: "code", language: "text", filename: "Prompts pour comprendre un projet", code: "Explique-moi la structure de ce projet. Quels sont les fichiers\nimportants et à quoi ils servent ?\n\nFais-moi un schéma de l'architecture : quels fichiers\ncommuniquent entre eux ?\n\nMontre-moi le flux de données quand un utilisateur\nclique sur le bouton 'S'inscrire'." },
      { id: "6-8", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Racine du projet", description: "package.json, CLAUDE.md, .gitignore", children: ["n2", "n3", "n4"] },
        { id: "n2", label: "src/app", description: "Les pages de ton application (routing)", children: ["n5", "n6"] },
        { id: "n3", label: "src/components", description: "Les composants réutilisables (boutons, header, footer)", children: [] },
        { id: "n4", label: "src/lib", description: "Les utilitaires, fonctions helpers, config", children: [] },
        { id: "n5", label: "page.tsx", description: "La page d'accueil", children: [] },
        { id: "n6", label: "about/page.tsx", description: "La page À propos", children: [] },
      ]},
      { id: "6-9", type: "separator", style: "line" },

      { id: "6-10", type: "heading", level: 2, text: "Travailler sur plusieurs fichiers à la fois" },
      { id: "6-11", type: "text", html: "<p>La force de Claude Code, c'est sa capacité à modifier plusieurs fichiers de manière cohérente. Voici des exemples concrets :</p>" },
      { id: "6-12", type: "steps", steps: [
        { title: "Ajouter une nouvelle page", description: "\"Ajoute une page /services avec 3 cartes de services. Ajoute le lien dans la navigation du Header.\" — Claude modifie 2 fichiers d'un coup.", icon: "file-plus" },
        { title: "Refactoriser un composant", description: "\"Le code du formulaire est dupliqué dans 3 pages. Extrais-le dans un composant réutilisable ContactForm.\" — Claude crée le composant et met à jour les 3 pages.", icon: "git-merge" },
        { title: "Changer le thème global", description: "\"Passe tout le site en mode sombre : fond #0a0a0a, texte blanc, accents en violet #8b5cf6.\" — Claude modifie les styles globaux et vérifie chaque composant.", icon: "palette" },
      ]},
      { id: "m3cc-dia-6-2-h", type: "heading", level: 3, text: "Comment Claude Code modifie plusieurs fichiers" },
      { id: "m3cc-dia-6-2", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Tu donnes une instruction globale", description: "\"Ajoute une page /services et mets le lien dans la navigation\"" },
        { id: "n2", label: "Claude analyse les dépendances", description: "Il identifie tous les fichiers concernés : la nouvelle page, le Header, la navigation" },
        { id: "n3", label: "Il modifie chaque fichier de manière cohérente", description: "Il crée services/page.tsx, met à jour Header.tsx, vérifie les imports" },
        { id: "n4", label: "Tout reste synchronisé", description: "Les liens fonctionnent, les imports sont corrects, pas de fichier orphelin" },
      ]},
      { id: "m3cc-dia-6-2-tip", type: "callout", variant: "tip", html: "C'est comme un chef d'orchestre : quand tu lui demandes de changer le tempo, il ne modifie pas juste un musicien — il ajuste tous les instruments en même temps pour que l'harmonie soit conservée." },

      { id: "6-13", type: "separator", style: "dots" },

      { id: "6-14", type: "heading", level: 2, text: "Débugger comme un pro" },
      { id: "6-15", type: "text", html: "<p>Les bugs font partie du développement — même avec l'IA. La bonne nouvelle : Claude Code est excellent pour les trouver et les corriger. Voici comment lui signaler un problème efficacement :</p>" },
      { id: "6-16", type: "code", language: "text", filename: "Prompts de debug efficaces", code: "Le bouton 'Ajouter au panier' ne fonctionne pas.\nQuand je clique, rien ne se passe. Trouve le problème et corrige-le.\n\nJ'ai cette erreur dans la console : \"TypeError: Cannot read\nproperty 'map' of undefined\". C'est dans le fichier\nProductList.tsx. Corrige-la.\n\nLa page met 5 secondes à charger. Analyse les performances\net propose des optimisations." },
      { id: "6-17", type: "callout", variant: "tip", html: "Quand tu signales un bug, donne toujours <strong>3 informations</strong> : ce que tu as fait, ce que tu attendais, et ce qui s'est passé à la place. Plus le rapport de bug est clair, plus Claude corrige vite." },

      { id: "m3cc-dia-6-3-h", type: "heading", level: 3, text: "Le processus de debugging avec Claude Code" },
      { id: "m3cc-dia-6-3", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Décrire le bug", description: "\"Quand je clique sur le bouton, rien ne se passe\" — donne les 3 infos : action, attendu, résultat réel" },
        { id: "n2", label: "Claude analyse le code", description: "Il parcourt les fichiers concernés, suit le flux de données, identifie la cause" },
        { id: "n3", label: "Il propose une correction", description: "Il te montre le problème et la solution avant d'appliquer le changement" },
        { id: "n4", label: "Tu vérifies que ça marche", description: "Tu testes dans le navigateur. Si le bug persiste, tu donnes plus de détails à Claude" },
      ]},
      { id: "m3cc-dia-6-3-tip", type: "callout", variant: "tip", html: "C'est comme aller chez le médecin : mieux tu décris tes symptômes (\"j'ai mal ici quand je fais ça\"), plus vite il trouve le diagnostic. Un bon rapport de bug = un fix rapide." },

      { id: "6-18", type: "separator", style: "line" },
      { id: "6-19", type: "quiz-inline", question: "Comment demander à Claude Code de comprendre la structure d'un projet existant ?", options: [
        { id: "a", text: "Lire chaque fichier un par un manuellement" },
        { id: "b", text: "Lui demander d'expliquer la structure du projet et le rôle de chaque fichier important" },
        { id: "c", text: "Ce n'est pas possible, Claude Code ne comprend que les fichiers qu'il a créés" },
        { id: "d", text: "Il faut d'abord convertir le projet en un format spécial" },
      ], correctId: "b", explanation: "Claude Code peut analyser la structure complète d'un projet existant. Il suffit de lui demander d'expliquer l'architecture, le rôle des fichiers, et les connexions entre eux. Il comprend aussi bien les projets qu'il a créés que ceux qui existaient avant." },

      { id: "6-20", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je sais analyser et comprendre la structure d'un projet complexe" },
        { id: "c2", text: "Je sais faire modifier plusieurs fichiers de manière cohérente" },
        { id: "c3", text: "Je sais débugger efficacement avec Claude Code" },
        { id: "c4", text: "Je comprends l'architecture type d'un projet web moderne" },
      ]},
    ]),
    exercise: "<h3>Exercice : Complexifie ton projet</h3><ol><li>Reprends ton projet de landing page des leçons précédentes</li><li>Demande à Claude Code d'ajouter 2 nouvelles pages : /about et /services</li><li>Fais créer un composant Header partagé entre toutes les pages avec des liens de navigation</li><li>Introduis volontairement un bug (supprime une ligne de code) et demande à Claude de le trouver et le corriger</li></ol>",
    quiz: [
      { type: "mcq", question: "Comment Claude Code gère-t-il la modification de plusieurs fichiers en même temps ?", options: JSON.stringify(["Il ne peut modifier qu'un seul fichier à la fois", "Il analyse les dépendances entre fichiers et les modifie de manière cohérente", "Il crée des copies de tous les fichiers avant modification", "Il demande de modifier chaque fichier séparément"]), correctAnswer: "Il analyse les dépendances entre fichiers et les modifie de manière cohérente", explanation: "Claude Code comprend la structure entière du projet. Quand tu demandes d'ajouter une page et un lien dans la navigation, il modifie les deux fichiers de manière cohérente en vérifiant les imports et les liens." },
      { type: "true_false", question: "Claude Code ne peut comprendre que les projets qu'il a créés lui-même.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude Code peut analyser la structure complète de n'importe quel projet existant. Il suffit de lui demander d'expliquer l'architecture et le rôle des fichiers. Il comprend aussi bien les projets existants que ceux qu'il a créés." },
      { type: "mcq", question: "Quelles sont les 3 informations à donner quand tu signales un bug à Claude Code ?", options: JSON.stringify(["Le nom du fichier, la ligne, le langage", "Ce que tu as fait, ce que tu attendais, ce qui s'est passé à la place", "La date, l'heure, le navigateur utilisé", "Le système d'exploitation, la version de Node.js, la RAM"]), correctAnswer: "Ce que tu as fait, ce que tu attendais, ce qui s'est passé à la place", explanation: "Un bon rapport de bug contient 3 informations : ce que tu as fait (action), ce que tu attendais (résultat espéré), et ce qui s'est passé à la place (résultat réel). Plus c'est clair, plus Claude corrige vite." },
      { type: "true_false", question: "Dans un projet Next.js, les composants réutilisables (Header, Footer) sont généralement placés dans le dossier src/components.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'architecture type d'un projet Next.js organise les composants réutilisables dans src/components, les pages dans src/app, et les utilitaires dans src/lib." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : ton site client a 5 pages qui utilisent toutes le même formulaire de contact copié-collé. Le client veut changer le design du formulaire. Quelle approche demandes-tu à Claude Code ?", options: JSON.stringify(["Modifier le formulaire sur chaque page une par une", "Demander à Claude Code d'extraire le formulaire dans un composant réutilisable ContactForm puis de l'importer dans les 5 pages", "Supprimer le formulaire de toutes les pages et le remplacer par un lien mailto", "Dire au client que c'est trop complexe à modifier"]), correctAnswer: "Demander à Claude Code d'extraire le formulaire dans un composant réutilisable ContactForm puis de l'importer dans les 5 pages", explanation: "C'est un cas classique de refactoring : extraire le code dupliqué dans un composant réutilisable. Claude Code crée le composant ContactForm et met à jour les 5 pages automatiquement. Toute modification future se fait en un seul endroit." },
    ],
  },

  // ─── LEÇON 7 ───
  {
    order: 7,
    module: 3,
    title: "Claude Code + GitHub : versionner comme un pro",
    slug: "claude-code-github-versionner",
    duration: "25 min",
    description: "Les bases de Git, pousser ton code sur GitHub, collaborer sur des projets, et déployer tes applications.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Pourquoi versionner ton code est indispensable" },
      { id: "7-2", type: "text", html: "<p>Imagine que tu travailles sur un projet client depuis 3 jours. Tout fonctionne parfaitement. Puis tu fais une modification qui casse tout — et tu ne te souviens plus de ce que tu as changé. Sans versioning, tu es coincé. Tu perds des heures à retrouver l'erreur.</p><p>Avec <strong>Git</strong>, chaque modification est enregistrée. Tu peux revenir en arrière à n'importe quel moment, voir exactement ce qui a changé, et travailler sur plusieurs versions en parallèle. C'est comme un Ctrl+Z illimité pour tout ton projet.</p><p><strong>GitHub</strong>, c'est le cloud pour ton code. Ton projet est sauvegardé en ligne, accessible de partout, et partageable avec tes clients ou collaborateurs.</p>" },
      { id: "7-3", type: "callout", variant: "warning", html: "Ne fais JAMAIS un projet client sans Git. C'est non-négociable. Un disque dur qui lâche, un fichier écrasé par erreur, une modification qui casse tout — Git te sauve à chaque fois." },

      { id: "7-dia1", type: "heading", level: 3, text: "C'est quoi Git et GitHub concrètement ?" },
      { id: "7-dia2", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Git (sur ton PC)", description: "Un système de sauvegarde intelligent. Il enregistre chaque version de ton projet, comme un historique." },
        { id: "n2", label: "Commit", description: "Un point de sauvegarde. Tu décris ce que tu as changé, Git le mémorise." },
        { id: "n3", label: "GitHub (en ligne)", description: "Le cloud pour ton code. Ton projet est sauvegardé sur internet, accessible de partout." },
        { id: "n4", label: "Push", description: "Tu envoies tes sauvegardes locales sur GitHub. Comme synchroniser ton téléphone avec le cloud." },
      ]},
      { id: "7-dia3", type: "callout", variant: "info", html: "Git, c'est comme un journal intime de ton projet. Chaque commit note ce qui a changé et quand. Si tu fais une erreur, tu peux revenir en arrière à n'importe quelle page du journal. GitHub, c'est une photocopie de ce journal stockée dans un coffre-fort en ligne." },

      { id: "7-4", type: "separator", style: "dots" },

      { id: "7-5", type: "heading", level: 2, text: "Les commandes Git essentielles avec Claude Code" },
      { id: "7-6", type: "text", html: "<p>La bonne nouvelle : tu n'as même pas besoin de mémoriser les commandes Git. Claude Code peut les exécuter pour toi. Mais il est utile de comprendre les concepts de base.</p>" },
      { id: "7-7", type: "steps", steps: [
        { title: "git init — Initialiser", description: "Transforme ton dossier en un projet Git. À faire une seule fois, au début du projet. Claude Code peut le faire pour toi.", icon: "play" },
        { title: "git add — Préparer", description: "Sélectionne les fichiers modifiés que tu veux sauvegarder. C'est comme mettre des documents dans une enveloppe avant de les envoyer.", icon: "plus" },
        { title: "git commit — Sauvegarder", description: "Crée un point de sauvegarde avec un message qui décrit ce que tu as fait. Exemple : \"Ajout de la page contact\".", icon: "save" },
        { title: "git push — Envoyer sur GitHub", description: "Pousse ton code sur GitHub pour le sauvegarder en ligne. Ton code est maintenant en sécurité dans le cloud.", icon: "upload" },
      ]},
      { id: "7-8", type: "code", language: "bash", filename: "Workflow Git basique", code: "# Initialiser Git dans ton projet\ngit init\n\n# Ajouter tous les fichiers\ngit add .\n\n# Créer un point de sauvegarde\ngit commit -m \"Premier commit : landing page complète\"\n\n# Connecter à un dépôt GitHub (remplace par ton URL)\ngit remote add origin https://github.com/ton-pseudo/mon-projet.git\n\n# Envoyer sur GitHub\ngit push -u origin main" },
      { id: "7-9", type: "callout", variant: "tip", html: "Avec Claude Code, tu peux simplement dire <strong>\"commit et push mes modifications sur GitHub avec le message 'ajout page contact'\"</strong> et il exécute toutes les commandes pour toi." },
      { id: "7-10", type: "separator", style: "line" },

      { id: "7-11", type: "heading", level: 2, text: "Créer un dépôt GitHub" },
      { id: "7-12", type: "text", html: "<p>Si tu n'as pas encore de compte GitHub, crée-en un gratuitement sur <a href='https://github.com' target='_blank'>github.com</a>. Ensuite :</p>" },
      { id: "7-13", type: "steps", steps: [
        { title: "Créer un nouveau dépôt", description: "Clique sur le '+' en haut à droite sur GitHub, puis 'New repository'. Donne-lui un nom (ex: mon-projet-ia). Choisis 'Private' si c'est un projet client.", icon: "folder-plus" },
        { title: "Connecter ton projet local", description: "GitHub te donne des commandes à copier. Tu peux aussi demander à Claude Code : \"connecte ce projet au dépôt GitHub [URL]\".", icon: "link" },
        { title: "Pousser ton code", description: "Tape 'git push' ou demande à Claude Code de le faire. Ton code est maintenant sur GitHub.", icon: "cloud" },
      ]},
      { id: "7-14", type: "separator", style: "dots" },

      { id: "7-15", type: "heading", level: 2, text: "Déployer ton projet en ligne" },
      { id: "7-16", type: "text", html: "<p>Ton code est sur GitHub. Maintenant, tu veux le mettre en ligne pour que tes clients puissent le voir. <strong>Vercel</strong> est la solution la plus simple :</p>" },
      { id: "7-17", type: "steps", steps: [
        { title: "Connecte Vercel à GitHub", description: "Va sur vercel.com, crée un compte gratuit, et connecte ton compte GitHub.", icon: "link" },
        { title: "Importe ton projet", description: "Clique sur 'New Project', sélectionne ton dépôt GitHub. Vercel détecte automatiquement la configuration.", icon: "download" },
        { title: "Déploiement automatique", description: "Chaque fois que tu fais un 'git push', Vercel redéploie automatiquement ton site. Ton client voit les modifications en temps réel.", icon: "rocket" },
      ]},
      { id: "7-dia4", type: "heading", level: 3, text: "C'est quoi le déploiement concrètement ?" },
      { id: "7-dia5", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Code en local", description: "Ton site existe seulement sur ton ordinateur. Personne d'autre ne peut le voir." },
        { id: "n2", label: "Push sur GitHub", description: "Tu envoies ton code en ligne. Il est sauvegardé mais pas encore visible comme un site." },
        { id: "n3", label: "Vercel détecte", description: "Vercel voit que tu as envoyé du nouveau code et le transforme en vrai site web." },
        { id: "n4", label: "Site en ligne", description: "Ton site est accessible par n'importe qui dans le monde via une URL." },
      ]},
      { id: "7-dia6", type: "callout", variant: "tip", html: "Déployer un site, c'est comme imprimer un livre. Tu écris le manuscrit chez toi (code en local), tu l'envoies à l'éditeur (GitHub), et l'éditeur le met en librairie (Vercel). Une fois en librairie, tout le monde peut le lire." },

      { id: "7-18", type: "callout", variant: "success", html: "Avec ce workflow <strong>Claude Code → Git → GitHub → Vercel</strong>, tu as une chaîne de production complète : tu développes en local, tu sauvegardes sur GitHub, et ton site est déployé automatiquement. C'est le workflow pro utilisé par les meilleures équipes tech." },

      { id: "m3cc-dia-7-3-h", type: "heading", level: 3, text: "La chaîne complète du développeur IA" },
      { id: "m3cc-dia-7-3", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Ton client voit le site en ligne", description: "monprojet.vercel.app — accessible par n'importe qui dans le monde, 24h/24" },
        { id: "n2", label: "Vercel déploie automatiquement", description: "Chaque push sur GitHub déclenche un nouveau déploiement. Pas de serveur à gérer." },
        { id: "n3", label: "GitHub sauvegarde ton code", description: "Ton code est en sécurité dans le cloud. Historique complet, collaboration possible." },
        { id: "n4", label: "Git versionne tes modifications", description: "Chaque commit est un point de sauvegarde. Tu peux revenir en arrière à tout moment." },
        { id: "n5", label: "Claude Code développe ton projet", description: "Tu décris ce que tu veux, il code. Le point de départ de toute la chaîne." },
      ]},
      { id: "m3cc-dia-7-3-tip", type: "callout", variant: "tip", html: "C'est comme une chaîne de production en usine : Claude Code fabrique le produit, Git l'emballe, GitHub le stocke dans l'entrepôt, et Vercel le livre au client. Chaque maillon est automatisé — tu n'as qu'à donner les instructions au départ." },

      { id: "7-19", type: "separator", style: "line" },
      { id: "7-20", type: "quiz-inline", question: "Quelle commande Git crée un point de sauvegarde de ton code ?", options: [
        { id: "a", text: "git push" },
        { id: "b", text: "git save" },
        { id: "c", text: "git commit" },
        { id: "d", text: "git backup" },
      ], correctId: "c", explanation: "git commit crée un point de sauvegarde (un 'commit') dans l'historique de ton projet. git push envoie ce commit sur GitHub, mais c'est git commit qui fait la sauvegarde locale." },

      { id: "7-21", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends pourquoi le versioning est indispensable" },
        { id: "c2", text: "Je connais les commandes Git essentielles (init, add, commit, push)" },
        { id: "c3", text: "Je sais créer un dépôt GitHub et y pousser mon code" },
        { id: "c4", text: "Je sais déployer un projet sur Vercel via GitHub" },
        { id: "c5", text: "Je maîtrise le workflow complet : Claude Code, Git, GitHub, Vercel" },
      ]},
    ]),
    exercise: "<h3>Exercice : Mets ton projet en ligne</h3><ol><li>Crée un compte GitHub si tu n'en as pas</li><li>Initialise Git dans ton projet de landing page</li><li>Fais ton premier commit avec Claude Code</li><li>Crée un dépôt GitHub et pousse ton code</li><li>Bonus : connecte Vercel à ton dépôt et déploie ton site en ligne</li></ol><p>À la fin de cet exercice, tu auras un site accessible par n'importe qui dans le monde via une URL Vercel.</p>",
    quiz: [
      { type: "mcq", question: "Quelle commande Git crée un point de sauvegarde de ton code ?", options: JSON.stringify(["git push", "git save", "git commit", "git backup"]), correctAnswer: "git commit", explanation: "git commit crée un point de sauvegarde (un 'commit') dans l'historique de ton projet. git push envoie ce commit sur GitHub, mais c'est git commit qui fait la sauvegarde locale." },
      { type: "true_false", question: "Git est indispensable pour tout projet client sérieux, car il permet de revenir en arrière en cas de problème.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Git est un filet de sécurité essentiel pour tout projet client. Un disque dur qui lâche, un fichier écrasé par erreur, une modification qui casse tout : Git te sauve en permettant de revenir en arrière à n'importe quel point de sauvegarde." },
      { type: "mcq", question: "Quel est le rôle de Vercel dans la chaîne de production ?", options: JSON.stringify(["Écrire le code du projet", "Sauvegarder le code dans le cloud", "Déployer automatiquement le site en ligne à chaque push", "Gérer les versions du code"]), correctAnswer: "Déployer automatiquement le site en ligne à chaque push", explanation: "Vercel détecte automatiquement chaque push sur GitHub et déploie le site en ligne. C'est le dernier maillon : Claude Code développe, Git versionne, GitHub sauvegarde, Vercel déploie." },
      { type: "true_false", question: "Avec Claude Code, tu peux simplement dire 'commit et push mes modifications' au lieu de taper les commandes Git toi-même.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tu peux demander à Claude Code de 'commit et push mes modifications sur GitHub' et il exécute toutes les commandes Git nécessaires (git add, git commit, git push) pour toi." },
      { type: "mcq", question: "Un client te demande de mettre en ligne une modification urgente sur son site. Tu as fait le changement avec Claude Code mais tu ne sais plus si tu as bien push. Le site en ligne n'a pas changé. Que fais-tu ?", options: JSON.stringify(["Tu refais le changement depuis zéro dans Claude Code", "Tu vérifies avec 'git status' et 'git log' si le commit a été push sur GitHub, puis tu push si nécessaire", "Tu vas directement modifier le code sur Vercel", "Tu supprimes le projet et tu recommences"]), correctAnswer: "Tu vérifies avec 'git status' et 'git log' si le commit a été push sur GitHub, puis tu push si nécessaire", explanation: "La bonne démarche est de diagnostiquer : git status te montre s'il y a des changements non commités, git log te montre les commits locaux. Si le commit existe mais n'est pas sur GitHub, un simple git push suffit pour que Vercel déploie automatiquement." },
    ],
  },
];
