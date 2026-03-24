function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_05_LESSONS = [
  {
    order: 1,
    module: 5,
    title: "Git : versionner ton code (init, commit, push, pull)",
    slug: "v2-git-versionner-ton-code",
    duration: "25 min",
    description:
      "Apprends les bases de Git : initialiser un dépôt, suivre tes modifications, créer des commits propres et synchroniser ton code avec un serveur distant.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi versionner son code ?",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>Imagine que tu travailles sur un site web. Tu fais une modification, puis une autre, puis encore une autre. Soudain, tout casse. Sans Git, tu es coincé — impossible de revenir en arrière proprement. Avec Git, chaque modification est enregistrée comme un <strong>snapshot</strong> de ton projet. Tu peux revenir à n'importe quel point dans le temps.</p><p>Git est l'outil de versioning utilisé par <strong>99% des développeurs dans le monde</strong>. Ce n'est pas optionnel — c'est fondamental.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce :</strong> Git est un outil en ligne de commande (CLI). Même si des interfaces graphiques existent, apprendre les commandes de base te rendra autonome sur n'importe quelle machine.",
      },
      {
        id: "1-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-5",
        type: "heading",
        level: 2,
        text: "Les 3 zones de Git",
      },
      {
        id: "1-6",
        type: "text",
        html: "<p>Git organise ton travail en <strong>3 zones</strong> distinctes. Comprendre ces zones, c'est comprendre Git :</p><ul><li><strong>Working Directory</strong> — ton dossier de travail, là où tu modifies tes fichiers.</li><li><strong>Staging Area (Index)</strong> — la zone de préparation. Tu choisis ce que tu veux inclure dans ton prochain commit.</li><li><strong>Repository (.git)</strong> — l'historique complet de ton projet, stocké localement.</li></ul>",
      },
      {
        id: "1-7",
        type: "comparison",
        headers: ["Zone", "Rôle", "Commande associée"],
        rows: [
          {
            cells: [
              "Working Directory",
              "Modifier tes fichiers",
              "Tu travailles normalement",
            ],
          },
          {
            cells: [
              "Staging Area",
              "Préparer le commit",
              "git add fichier.ts",
            ],
          },
          {
            cells: [
              "Repository",
              "Sauvegarder l'historique",
              'git commit -m "message"',
            ],
          },
        ],
      },
      {
        id: "1-8",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-9",
        type: "heading",
        level: 2,
        text: "Les commandes essentielles",
      },
      {
        id: "1-10",
        type: "steps",
        steps: [
          {
            title: "git init",
            description:
              "Initialise un nouveau dépôt Git dans ton dossier. Crée un dossier caché .git qui contient tout l'historique. Tu ne le fais qu'une seule fois par projet.",
          },
          {
            title: "git status",
            description:
              "Affiche l'état actuel de tes fichiers : modifiés, ajoutés, non suivis. C'est LA commande que tu vas taper le plus souvent pour savoir où tu en es.",
          },
          {
            title: "git add .",
            description:
              "Ajoute tous les fichiers modifiés à la staging area. Tu peux aussi cibler un fichier précis avec git add nom-du-fichier.ts.",
          },
          {
            title: 'git commit -m "ton message"',
            description:
              "Crée un snapshot de tout ce qui est dans la staging area. Le message doit être clair et décrire ce que tu as fait, par exemple : \"Ajout du formulaire de contact\".",
          },
          {
            title: "git push",
            description:
              "Envoie tes commits vers le serveur distant (GitHub, GitLab...). C'est comme sauvegarder dans le cloud.",
          },
          {
            title: "git pull",
            description:
              "Récupère les dernières modifications depuis le serveur distant et les fusionne avec ton code local. Indispensable en équipe.",
          },
        ],
      },
      {
        id: "1-11",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Ne fais jamais <code>git add .</code> sans vérifier avec <code>git status</code> d'abord. Tu pourrais ajouter des fichiers sensibles (.env, clés API) par accident.",
      },
      {
        id: "1-12",
        type: "heading",
        level: 2,
        text: "Écrire de bons messages de commit",
      },
      {
        id: "1-13",
        type: "text",
        html: "<p>Un bon message de commit est <strong>court, clair et au présent</strong>. Il décrit ce que fait le commit, pas ce que tu as fait. Voici des exemples :</p><ul><li>\"Ajoute la page de connexion\" (bien)</li><li>\"fix bug\" (trop vague)</li><li>\"j'ai travaillé sur plein de trucs\" (inutile)</li></ul><p>Convention courante : commence par un verbe d'action. Certaines équipes utilisent des préfixes comme <code>feat:</code>, <code>fix:</code>, <code>docs:</code> pour catégoriser.</p>",
      },
      {
        id: "1-14",
        type: "checklist",
        title: "Checklist avant chaque commit",
        items: [
          { id: "c1", text: "J'ai vérifié git status pour voir les fichiers modifiés" },
          { id: "c2", text: "Je n'ai pas de fichier .env ou de clé API dans le staging" },
          { id: "c3", text: "Mon message de commit est clair et descriptif" },
          { id: "c4", text: "J'ai testé mon code avant de commiter" },
          { id: "c5", text: "Chaque commit correspond à une seule modification logique" },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Ton premier dépôt Git</h3><p>Crée un projet simple et pratique les commandes Git de base.</p><ol><li>Crée un nouveau dossier <code>mon-premier-repo</code> et initialise Git dedans avec <code>git init</code>.</li><li>Crée un fichier <code>index.html</code> avec un titre H1 et un paragraphe.</li><li>Fais <code>git status</code> — observe que le fichier est \"untracked\".</li><li>Ajoute le fichier au staging avec <code>git add index.html</code> puis vérifie avec <code>git status</code>.</li><li>Crée ton premier commit : <code>git commit -m \"Ajoute la page d'accueil\"</code>.</li><li>Modifie le fichier, ajoute un deuxième paragraphe, puis refais un commit avec un message approprié.</li><li>Tape <code>git log</code> pour voir l'historique de tes deux commits.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Quelle commande initialise un nouveau dépôt Git ?",
        options: JSON.stringify([
          "git start",
          "git init",
          "git new",
          "git create",
        ]),
        correctAnswer: "git init",
        explanation:
          "La commande git init crée un nouveau dépôt Git en initialisant le dossier caché .git dans le répertoire courant.",
      },
      {
        type: "mcq",
        question:
          "Dans quel ordre se déroule le workflow Git de base ?",
        options: JSON.stringify([
          "commit → add → push",
          "add → commit → push",
          "push → add → commit",
          "init → push → commit",
        ]),
        correctAnswer: "add → commit → push",
        explanation:
          "Le workflow standard est : ajouter les fichiers au staging (add), créer un commit, puis envoyer vers le serveur distant (push).",
      },
      {
        type: "true_false",
        question:
          "La commande git status modifie les fichiers du projet.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "git status est une commande de lecture seule. Elle affiche l'état des fichiers sans rien modifier.",
      },
      {
        type: "mcq",
        question: "Que fait la commande git pull ?",
        options: JSON.stringify([
          "Elle supprime les fichiers locaux",
          "Elle envoie tes commits sur le serveur",
          "Elle récupère et fusionne les modifications du serveur distant",
          "Elle crée une nouvelle branche",
        ]),
        correctAnswer:
          "Elle récupère et fusionne les modifications du serveur distant",
        explanation:
          "git pull combine git fetch (télécharger) et git merge (fusionner) pour synchroniser ton code local avec le serveur distant.",
      },
      {
        type: "true_false",
        question:
          "Un bon message de commit doit commencer par un verbe d'action et être concis.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Un message comme \"Ajoute le formulaire de contact\" est clair, concis et descriptif. C'est la convention recommandée.",
      },
      {
        type: "mcq",
        question:
          "Quelle zone de Git permet de préparer ce qui sera inclus dans le prochain commit ?",
        options: JSON.stringify([
          "Le Working Directory",
          "La Staging Area",
          "Le Repository",
          "Le Remote",
        ]),
        correctAnswer: "La Staging Area",
        explanation:
          "La Staging Area (ou Index) est la zone intermédiaire où tu sélectionnes les fichiers à inclure dans le prochain commit avec git add.",
      },
    ],
  },
  {
    order: 2,
    module: 5,
    title: "GitHub : collaborer, branches, pull requests",
    slug: "v2-github-collaborer-branches-pr",
    duration: "25 min",
    description:
      "Maîtrise GitHub pour collaborer sur des projets : crée des branches, ouvre des pull requests et gère les conflits comme un pro.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Git vs GitHub : quelle différence ?",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p><strong>Git</strong> est l'outil de versioning qui tourne en local sur ta machine. <strong>GitHub</strong> est une plateforme en ligne qui héberge tes dépôts Git et ajoute des fonctionnalités de collaboration : pull requests, issues, actions, pages de profil, etc.</p><p>Pense à Git comme ton carnet de notes personnel et à GitHub comme la bibliothèque partagée où tout le monde peut consulter et contribuer.</p>",
      },
      {
        id: "2-3",
        type: "comparison",
        headers: ["Git (local)", "GitHub (en ligne)"],
        rows: [
          { cells: ["Versioning de fichiers", "Hébergement de dépôts"] },
          { cells: ["Fonctionne hors ligne", "Nécessite une connexion"] },
          { cells: ["Ligne de commande", "Interface web + CLI"] },
          { cells: ["Gratuit et open source", "Gratuit (plans payants pour les équipes)"] },
          { cells: ["Pas de collaboration intégrée", "Pull requests, issues, code review"] },
        ],
      },
      {
        id: "2-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-5",
        type: "heading",
        level: 2,
        text: "Les branches : travailler en parallèle",
      },
      {
        id: "2-6",
        type: "text",
        html: "<p>Une <strong>branche</strong> est une copie parallèle de ton code. Elle te permet de travailler sur une fonctionnalité sans toucher au code principal (la branche <code>main</code>). Quand ta fonctionnalité est prête, tu fusionne ta branche dans main.</p><p>C'est comme avoir un brouillon séparé : tu expérimentes librement, et tu intègres le résultat final uniquement quand tout fonctionne.</p>",
      },
      {
        id: "2-7",
        type: "steps",
        steps: [
          {
            title: "Créer une branche",
            description:
              "Utilise git checkout -b nom-de-branche pour créer une nouvelle branche et basculer dessus immédiatement. Convention de nommage : feature/nom-fonctionnalite ou fix/description-bug.",
          },
          {
            title: "Travailler sur ta branche",
            description:
              "Fais tes modifications, ajoute et commite normalement. Tout reste isolé sur ta branche — le code sur main n'est pas affecté.",
          },
          {
            title: "Pousser ta branche sur GitHub",
            description:
              "Utilise git push -u origin nom-de-branche pour envoyer ta branche sur GitHub. Le flag -u lie ta branche locale à la branche distante.",
          },
          {
            title: "Ouvrir une Pull Request",
            description:
              "Sur GitHub, ouvre une Pull Request (PR) pour proposer la fusion de ta branche dans main. C'est ici que la code review se fait.",
          },
          {
            title: "Fusionner (merge)",
            description:
              "Après validation, clique sur Merge pour fusionner. Supprime ensuite la branche devenue inutile pour garder un repo propre.",
          },
        ],
      },
      {
        id: "2-8",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-9",
        type: "heading",
        level: 2,
        text: "Les Pull Requests : le coeur de la collaboration",
      },
      {
        id: "2-10",
        type: "text",
        html: "<p>Une <strong>Pull Request</strong> (PR) est une demande de fusion de code. Elle permet de :</p><ul><li><strong>Montrer</strong> les modifications que tu proposes (diff visuel)</li><li><strong>Discuter</strong> avec ton équipe via les commentaires</li><li><strong>Faire relire</strong> ton code avant qu'il n'arrive en production</li><li><strong>Documenter</strong> pourquoi un changement a été fait</li></ul><p>Même en solo, créer des PRs est une bonne habitude : ça structure ton travail et crée un historique clair.</p>",
      },
      {
        id: "2-11",
        type: "callout",
        variant: "tip",
        html: "<strong>Pro tip :</strong> Une bonne PR est petite et ciblée. Mieux vaut 5 petites PRs qu'une énorme. Ajoute toujours une description claire de ce que fait ta PR et pourquoi.",
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Gérer les conflits de merge",
      },
      {
        id: "2-13",
        type: "text",
        html: "<p>Un <strong>conflit</strong> survient quand deux personnes modifient la même ligne du même fichier. Git ne peut pas décider automatiquement quelle version garder, alors il te demande de choisir.</p><p>Dans le fichier en conflit, tu verras des marqueurs comme :</p><pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\nTon code local\n=======\nLe code distant\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/autre-branche</code></pre><p>Tu dois supprimer les marqueurs et garder le bon code, puis commiter le résultat.</p>",
      },
      {
        id: "2-14",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Pour éviter les conflits, communique avec ton équipe, tire (pull) régulièrement les dernières modifications et garde tes branches à jour.",
      },
    ]),
    exercise:
      "<h3>Exercice : Workflow branches et Pull Request</h3><p>Simule un workflow collaboratif complet sur un projet existant.</p><ol><li>Depuis ton repo existant, crée une nouvelle branche <code>feature/ajout-style</code> avec <code>git checkout -b feature/ajout-style</code>.</li><li>Crée un fichier <code>style.css</code> avec quelques règles CSS basiques (body, h1, p).</li><li>Ajoute et commite ce fichier avec le message \"Ajoute les styles de base\".</li><li>Pousse ta branche sur GitHub : <code>git push -u origin feature/ajout-style</code>.</li><li>Va sur GitHub, ouvre une Pull Request de <code>feature/ajout-style</code> vers <code>main</code>.</li><li>Ajoute une description dans la PR expliquant les changements.</li><li>Fusionne la PR sur GitHub, puis fais <code>git pull</code> en local sur main.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Quelle est la différence principale entre Git et GitHub ?",
        options: JSON.stringify([
          "Git est payant, GitHub est gratuit",
          "Git est un outil local de versioning, GitHub est une plateforme en ligne de collaboration",
          "Git est pour le frontend, GitHub pour le backend",
          "Il n'y a aucune différence",
        ]),
        correctAnswer:
          "Git est un outil local de versioning, GitHub est une plateforme en ligne de collaboration",
        explanation:
          "Git gère le versioning en local sur ta machine. GitHub est un service web qui héberge les dépôts Git et ajoute des outils de collaboration.",
      },
      {
        type: "mcq",
        question:
          "Quelle commande crée une nouvelle branche et bascule dessus ?",
        options: JSON.stringify([
          "git branch new-branch",
          "git checkout -b new-branch",
          "git switch --create main",
          "git merge new-branch",
        ]),
        correctAnswer: "git checkout -b new-branch",
        explanation:
          "git checkout -b crée la branche et y bascule en une seule commande. git branch seul crée la branche mais ne bascule pas dessus.",
      },
      {
        type: "true_false",
        question:
          "Une Pull Request permet de fusionner du code directement sans aucune revue.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Le but principal d'une Pull Request est justement de permettre la revue de code avant la fusion. On peut configurer des règles pour exiger une approbation.",
      },
      {
        type: "mcq",
        question: "Quand un conflit de merge se produit-il ?",
        options: JSON.stringify([
          "Quand tu crées une nouvelle branche",
          "Quand deux personnes modifient la même ligne du même fichier",
          "Quand tu fais un git push",
          "Quand tu supprimes un fichier",
        ]),
        correctAnswer:
          "Quand deux personnes modifient la même ligne du même fichier",
        explanation:
          "Un conflit survient quand Git ne peut pas fusionner automatiquement parce que les mêmes lignes ont été modifiées différemment dans deux branches.",
      },
      {
        type: "true_false",
        question:
          "Il est recommandé de créer des Pull Requests même quand on travaille seul sur un projet.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Les PRs en solo structurent le travail, créent un historique clair et sont une bonne habitude à prendre pour quand tu travailleras en équipe.",
      },
      {
        type: "mcq",
        question:
          "Quelle est la convention de nommage recommandée pour les branches ?",
        options: JSON.stringify([
          "MaBranche_v2",
          "feature/nom-fonctionnalite",
          "branch123",
          "new",
        ]),
        correctAnswer: "feature/nom-fonctionnalite",
        explanation:
          "La convention feature/nom ou fix/nom est largement adoptée. Elle rend le rôle de chaque branche immédiatement compréhensible.",
      },
    ],
  },
  {
    order: 3,
    module: 5,
    title: "Atelier : setup ton premier repo et push un projet",
    slug: "v2-atelier-premier-repo-push",
    duration: "20 min",
    description:
      "Passe à la pratique : configure Git sur ta machine, crée un dépôt sur GitHub, connecte-le en local et pousse ton premier projet complet.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Objectif de l'atelier",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Dans cet atelier, tu vas configurer Git sur ta machine, créer un dépôt GitHub, et pousser un vrai projet. À la fin, tu auras un repo public avec du code, visible par n'importe qui — y compris de futurs clients ou employeurs.</p>",
      },
      {
        id: "3-3",
        type: "callout",
        variant: "info",
        html: "<strong>Prérequis :</strong> Tu dois avoir Git installé (<code>git --version</code> pour vérifier) et un compte GitHub créé. Si ce n'est pas fait, installe Git depuis git-scm.com et crée un compte sur github.com.",
      },
      {
        id: "3-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-5",
        type: "heading",
        level: 2,
        text: "Étape 1 : Configurer Git",
      },
      {
        id: "3-6",
        type: "steps",
        steps: [
          {
            title: "Configure ton identité",
            description:
              "Tape git config --global user.name \"Ton Nom\" puis git config --global user.email \"ton@email.com\". Ces infos apparaîtront dans chacun de tes commits.",
          },
          {
            title: "Vérifie ta configuration",
            description:
              "Tape git config --list pour voir toutes tes configurations. Vérifie que ton nom et ton email sont corrects.",
          },
          {
            title: "Configure l'authentification GitHub",
            description:
              "Utilise GitHub CLI (gh auth login) ou crée un Personal Access Token dans les settings GitHub. Le token remplace ton mot de passe pour les opérations Git.",
          },
        ],
      },
      {
        id: "3-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-8",
        type: "heading",
        level: 2,
        text: "Étape 2 : Créer le repo sur GitHub",
      },
      {
        id: "3-9",
        type: "text",
        html: "<p>Va sur <strong>github.com/new</strong> et crée un nouveau dépôt :</p><ul><li><strong>Nom :</strong> mon-portfolio (ou le nom de ton choix)</li><li><strong>Visibilité :</strong> Public (pour que les gens puissent le voir)</li><li><strong>README :</strong> Ne coche PAS \"Initialize with README\" — on va le créer en local</li><li><strong>.gitignore :</strong> Sélectionne le template Node si tu travailles en JavaScript/TypeScript</li></ul><p>GitHub te donne ensuite les commandes exactes pour connecter ton dossier local.</p>",
      },
      {
        id: "3-10",
        type: "heading",
        level: 2,
        text: "Étape 3 : Connecter et pousser",
      },
      {
        id: "3-11",
        type: "steps",
        steps: [
          {
            title: "Initialise le repo local",
            description:
              "Dans ton dossier projet, tape git init puis git add . pour ajouter tous les fichiers.",
          },
          {
            title: "Crée le premier commit",
            description:
              "Tape git commit -m \"Initial commit\" pour créer le premier snapshot de ton projet.",
          },
          {
            title: "Connecte le remote",
            description:
              "Tape git remote add origin https://github.com/ton-username/mon-portfolio.git pour lier ton repo local à GitHub.",
          },
          {
            title: "Pousse le code",
            description:
              "Tape git push -u origin main pour envoyer ton code sur GitHub. Le flag -u configure le tracking entre ta branche locale et distante.",
          },
          {
            title: "Vérifie sur GitHub",
            description:
              "Rafraîchis la page de ton repo sur GitHub. Tu devrais voir tous tes fichiers en ligne. Félicitations, ton premier push est fait !",
          },
        ],
      },
      {
        id: "3-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Le fichier .gitignore :</strong> Crée un fichier <code>.gitignore</code> à la racine pour exclure les fichiers qui ne doivent pas être versionnés : <code>node_modules/</code>, <code>.env</code>, <code>.DS_Store</code>, <code>dist/</code>. C'est la première chose à faire dans tout projet.",
      },
      {
        id: "3-13",
        type: "heading",
        level: 2,
        text: "Le fichier README.md",
      },
      {
        id: "3-14",
        type: "text",
        html: "<p>Le README est la vitrine de ton projet. C'est la première chose que les visiteurs voient sur GitHub. Un bon README contient :</p><ul><li><strong>Le nom du projet</strong> et une description courte</li><li><strong>Comment l'installer</strong> et le lancer</li><li><strong>Les technologies utilisées</strong></li><li><strong>Des screenshots</strong> si c'est visuel</li><li><strong>Comment contribuer</strong> si c'est un projet open source</li></ul>",
      },
      {
        id: "3-15",
        type: "checklist",
        title: "Checklist de l'atelier",
        items: [
          { id: "c1", text: "Git est installé et configuré (nom + email)" },
          { id: "c2", text: "Authentification GitHub fonctionnelle" },
          { id: "c3", text: "Repo créé sur GitHub" },
          { id: "c4", text: "Projet initialisé en local avec git init" },
          { id: "c5", text: "Fichier .gitignore créé et configuré" },
          { id: "c6", text: "Premier commit effectué" },
          { id: "c7", text: "Remote origin ajouté" },
          { id: "c8", text: "Code poussé avec git push" },
          { id: "c9", text: "Fichier README.md créé" },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Push ton vrai projet</h3><p>Mets en pratique tout ce que tu as appris en poussant un vrai projet sur GitHub.</p><ol><li>Choisis un projet personnel existant (ou crée un petit site HTML/CSS).</li><li>Crée un repo sur GitHub avec le nom de ton projet.</li><li>Initialise Git dans ton dossier, crée un <code>.gitignore</code> adapté.</li><li>Fais ton premier commit et pousse-le sur GitHub.</li><li>Crée un fichier <code>README.md</code> avec le nom du projet, une description et les instructions d'installation.</li><li>Commite et pousse le README.</li><li>Partage le lien de ton repo — c'est ton premier projet public !</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quelle commande configure ton nom d'utilisateur Git globalement ?",
        options: JSON.stringify([
          "git user --name \"Ton Nom\"",
          "git config --global user.name \"Ton Nom\"",
          "git set name \"Ton Nom\"",
          "git setup --user \"Ton Nom\"",
        ]),
        correctAnswer: "git config --global user.name \"Ton Nom\"",
        explanation:
          "git config --global user.name définit ton nom pour tous les dépôts sur ta machine. Sans --global, ça ne s'applique qu'au repo courant.",
      },
      {
        type: "true_false",
        question:
          "Le dossier node_modules/ doit être poussé sur GitHub pour que le projet fonctionne.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "node_modules/ est régénéré avec npm install. Il ne doit jamais être versionné — c'est trop lourd et inutile. On l'ajoute dans .gitignore.",
      },
      {
        type: "mcq",
        question:
          "Quelle commande connecte ton dépôt local à un dépôt GitHub distant ?",
        options: JSON.stringify([
          "git connect origin URL",
          "git remote add origin URL",
          "git link origin URL",
          "git push origin URL",
        ]),
        correctAnswer: "git remote add origin URL",
        explanation:
          "git remote add origin URL ajoute un remote nommé \"origin\" pointant vers ton dépôt GitHub. C'est le lien entre ton code local et le serveur distant.",
      },
      {
        type: "mcq",
        question: "Quel fichier sert à exclure des fichiers du versioning Git ?",
        options: JSON.stringify([
          ".gitconfig",
          ".gitignore",
          ".gitexclude",
          ".gitskip",
        ]),
        correctAnswer: ".gitignore",
        explanation:
          "Le fichier .gitignore liste les fichiers et dossiers que Git doit ignorer. Exemples courants : node_modules/, .env, .DS_Store.",
      },
      {
        type: "true_false",
        question:
          "Le fichier README.md est automatiquement affiché sur la page d'accueil d'un dépôt GitHub.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "GitHub détecte automatiquement le fichier README.md à la racine du repo et l'affiche comme page d'accueil du dépôt.",
      },
      {
        type: "mcq",
        question: "À quoi sert le flag -u dans git push -u origin main ?",
        options: JSON.stringify([
          "Il force le push même en cas de conflit",
          "Il configure le tracking entre la branche locale et distante",
          "Il met à jour le fichier .gitignore",
          "Il uploade les fichiers volumineux",
        ]),
        correctAnswer:
          "Il configure le tracking entre la branche locale et distante",
        explanation:
          "Le flag -u (ou --set-upstream) lie ta branche locale à la branche distante. Après ça, tu peux simplement taper git push sans préciser origin main.",
      },
    ],
  },
];
