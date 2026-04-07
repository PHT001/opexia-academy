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
        id: "1-15",
        type: "heading",
        level: 3,
        text: "Scénario concret : pourquoi Git te sauve la vie",
      },
      {
        id: "1-16",
        type: "text",
        html: "<p>Imagine ce scénario : tu travailles sur un chatbot pour un client. Vendredi soir, tout fonctionne parfaitement. Lundi matin, tu décides d'ajouter une fonctionnalité. Tu modifies 15 fichiers. Et là... plus rien ne marche. Le chatbot ne répond plus, l'API crash, et tu ne te souviens plus exactement de ce que tu as changé.</p><p>Sans Git : tu passes <strong>3 heures</strong> à essayer de retrouver tes modifications une par une. Avec Git : un simple <code>git diff</code> te montre exactement ce qui a changé, et <code>git checkout .</code> annule tout en 2 secondes.</p><p>Git n'est pas juste un outil technique, c'est une <strong>assurance professionnelle</strong>. Aucune agence sérieuse ne travaille sans.</p>",
      },
      {
        id: "1-17",
        type: "callout",
        variant: "info",
        html: "<strong>Le saviez-tu ?</strong> Git a été créé en 2005 par Linus Torvalds (le créateur de Linux) parce qu'il avait besoin d'un outil de versioning rapide pour gérer le code de Linux — un projet avec des milliers de contributeurs. Aujourd'hui, Git gère des projets de toutes tailles, du side project solo aux codebases de millions de lignes.",
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
        id: "1-18",
        type: "text",
        html: "<p>Pense à ces 3 zones comme une chaîne de production :</p><ul><li><strong>Working Directory</strong> = ton atelier. Tu bricoles, tu expérimentes, tu casses des trucs — personne ne voit.</li><li><strong>Staging Area</strong> = la table d'inspection. Tu sélectionnes les pièces finies et tu vérifies qu'elles sont prêtes.</li><li><strong>Repository</strong> = l'entrepôt. Les pièces validées sont archivées de manière permanente avec une étiquette (le message de commit).</li></ul><p>Ce système en 3 étapes te donne un <strong>contrôle total</strong> sur ce que tu enregistres. Tu ne commites jamais accidentellement du code cassé si tu respectes ce flux.</p>",
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
        id: "1-19",
        type: "heading",
        level: 3,
        text: "Commandes bonus que tu utiliseras souvent",
      },
      {
        id: "1-20",
        type: "comparison",
        headers: ["Commande", "Ce qu'elle fait", "Quand l'utiliser"],
        rows: [
          { cells: ["git log", "Affiche l'historique des commits", "Pour voir ce qui a été fait et par qui"] },
          { cells: ["git diff", "Montre les modifications non stagées", "Avant un git add, pour vérifier tes changements"] },
          { cells: ["git stash", "Met de côté tes modifications temporairement", "Quand tu dois changer de branche sans commiter"] },
          { cells: ["git checkout .", "Annule toutes les modifications non stagées", "Quand tu veux repartir de zéro sur tes fichiers modifiés"] },
          { cells: ["git log --oneline", "Historique compact sur une ligne par commit", "Pour avoir une vue d'ensemble rapide"] },
        ],
      },
      {
        id: "1-11",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Ne fais jamais <code>git add .</code> sans vérifier avec <code>git status</code> d'abord. Tu pourrais ajouter des fichiers sensibles (.env, clés API) par accident.",
      },
      {
        id: "1-21",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-22",
        type: "heading",
        level: 3,
        text: "Les erreurs de débutant les plus courantes",
      },
      {
        id: "1-23",
        type: "steps",
        steps: [
          {
            title: "Commiter des fichiers sensibles (.env, clés API)",
            description:
              "Erreur n°1. Même si tu supprimes le fichier après, il reste dans l'historique Git. La solution : TOUJOURS créer un .gitignore AVANT le premier commit. Si c'est déjà fait, utilise git filter-branch ou BFG Repo Cleaner pour nettoyer l'historique.",
          },
          {
            title: "Faire un énorme commit avec 50 fichiers modifiés",
            description:
              "Un commit = une modification logique. Si tu as travaillé 3 heures et touché 20 fichiers, découpe en plusieurs commits ciblés. Ça facilite le debugging et la revue de code.",
          },
          {
            title: "Ne jamais lire git status",
            description:
              "Beaucoup de débutants tapent git add . puis git commit sans jamais regarder ce qu'ils ajoutent. Prends 5 secondes pour vérifier — ça peut t'éviter des heures de galère.",
          },
          {
            title: "Commiter du code qui ne fonctionne pas",
            description:
              "Teste TOUJOURS ton code avant de commiter. Un commit doit représenter un état fonctionnel du projet. Si ton code casse, la personne qui fait git pull récupère du code cassé.",
          },
        ],
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
        id: "1-24",
        type: "heading",
        level: 3,
        text: "La convention Conventional Commits",
      },
      {
        id: "1-25",
        type: "text",
        html: "<p>La convention <strong>Conventional Commits</strong> est devenue un standard dans l'industrie. Elle structure les messages de commit pour les rendre lisibles et automatisables :</p>",
      },
      {
        id: "1-26",
        type: "comparison",
        headers: ["Préfixe", "Usage", "Exemple"],
        rows: [
          { cells: ["feat:", "Nouvelle fonctionnalité", "feat: ajoute le formulaire de contact"] },
          { cells: ["fix:", "Correction de bug", "fix: corrige le crash au login"] },
          { cells: ["docs:", "Documentation", "docs: met à jour le README"] },
          { cells: ["style:", "Formatage (pas de changement de logique)", "style: reformate le fichier header.tsx"] },
          { cells: ["refactor:", "Refactoring sans changement fonctionnel", "refactor: simplifie la logique de paiement"] },
          { cells: ["chore:", "Tâches de maintenance", "chore: met à jour les dépendances"] },
        ],
      },
      {
        id: "1-27",
        type: "callout",
        variant: "tip",
        html: "<strong>Pro tip :</strong> Adopte Conventional Commits dès maintenant. C'est ce que les entreprises tech utilisent, et ça montre immédiatement que tu sais travailler de manière professionnelle. Quand un client voit un historique Git propre, ça inspire confiance.",
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
      {
        id: "1-28",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-29",
        type: "heading",
        level: 2,
        text: "Git dans le contexte d'une agence IA",
      },
      {
        id: "1-30",
        type: "text",
        html: "<p>Quand tu gères une agence IA, Git devient encore plus critique. Tu vas probablement jongler entre <strong>plusieurs projets clients</strong> en même temps. Chaque client a son propre repo, ses propres branches, ses propres déploiements.</p><p>Voici comment organiser tes repos :</p><ul><li><strong>1 repo par projet client</strong> — ne mélange jamais le code de deux clients dans le même repo</li><li><strong>Branches par fonctionnalité</strong> — <code>feature/chatbot-faq</code>, <code>fix/stripe-webhook</code></li><li><strong>Commits fréquents et petits</strong> — commite au moins 2-3 fois par heure de travail</li></ul>",
      },
      {
        id: "1-31",
        type: "callout",
        variant: "info",
        html: "<strong>Astuce freelance :</strong> Un historique Git propre est une preuve de travail. Si un client te demande combien de temps tu as passé sur un projet, ton historique de commits raconte l'histoire. C'est aussi utile en cas de litige : tu peux prouver exactement ce que tu as livré et quand.",
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
        id: "2-15",
        type: "heading",
        level: 3,
        text: "GitHub, c'est aussi ton CV technique",
      },
      {
        id: "2-16",
        type: "text",
        html: "<p>Ton profil GitHub est la première chose qu'un client tech ou un recruteur va regarder. Un profil actif avec des repos bien documentés vaut mieux qu'un CV classique. Voici ce qui fait la différence :</p><ul><li><strong>Des repos publics</strong> avec du code propre et des README complets</li><li><strong>Des contributions régulières</strong> — le graphe de contribution (les carrés verts) montre ta constance</li><li><strong>Des projets variés</strong> — chatbots, landing pages, outils internes</li><li><strong>Un profil README</strong> — crée un repo avec ton username comme nom pour personnaliser ta page de profil</li></ul>",
      },
      {
        id: "2-17",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce profil :</strong> Pin tes 6 meilleurs repos sur ta page de profil GitHub. Choisis ceux qui montrent la diversité de tes compétences. Un client potentiel passe moins de 30 secondes sur ton profil — fais en sorte que les premiers repos qu'il voit soient impressionnants.",
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
        id: "2-18",
        type: "heading",
        level: 3,
        text: "Stratégie de branches pour une agence",
      },
      {
        id: "2-19",
        type: "text",
        html: "<p>Quand tu gères des projets clients, une bonne stratégie de branches te sauve la mise. Voici le workflow recommandé :</p><ul><li><code>main</code> — le code en production, toujours stable et déployé</li><li><code>develop</code> — la branche de développement où tu intègres les features terminées</li><li><code>feature/xxx</code> — une branche par fonctionnalité en cours</li><li><code>fix/xxx</code> — une branche par correction de bug</li><li><code>hotfix/xxx</code> — corrections urgentes directement depuis main</li></ul><p>Ce workflow s'appelle <strong>Git Flow</strong> (version simplifiée). Il garantit que ton code en production est toujours stable, même pendant que tu développes de nouvelles fonctionnalités.</p>",
      },
      {
        id: "2-20",
        type: "callout",
        variant: "warning",
        html: "<strong>Règle d'or :</strong> Ne code JAMAIS directement sur la branche main. Toujours créer une branche, travailler dessus, puis faire une PR. Même si tu es seul sur le projet. C'est une habitude qui te sauvera quand tu travailleras en équipe.",
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
        id: "2-21",
        type: "heading",
        level: 3,
        text: "Anatomie d'une bonne Pull Request",
      },
      {
        id: "2-22",
        type: "text",
        html: "<p>Une PR de qualité facilite la revue de code et accélère la validation. Voici ce qu'elle doit contenir :</p>",
      },
      {
        id: "2-23",
        type: "steps",
        steps: [
          {
            title: "Un titre clair et descriptif",
            description:
              "Exemple : \"feat: ajoute le widget de chat avec streaming\" plutôt que \"update code\". Le titre doit résumer le changement en une phrase.",
          },
          {
            title: "Une description détaillée",
            description:
              "Explique POURQUOI tu as fait ce changement, pas seulement QUOI. Ajoute du contexte : le ticket client, le problème résolu, les choix techniques.",
          },
          {
            title: "Des screenshots si c'est visuel",
            description:
              "Si ta PR touche l'interface, ajoute des captures d'écran avant/après. Ça rend la revue 10x plus rapide pour le reviewer.",
          },
          {
            title: "Un scope limité",
            description:
              "Une PR = une fonctionnalité ou un fix. Si ta PR touche 50 fichiers et fait 3 choses différentes, découpe-la. Les PR de plus de 400 lignes sont rarement bien revues.",
          },
        ],
      },
      {
        id: "2-11",
        type: "callout",
        variant: "tip",
        html: "<strong>Pro tip :</strong> Une bonne PR est petite et ciblée. Mieux vaut 5 petites PRs qu'une énorme. Ajoute toujours une description claire de ce que fait ta PR et pourquoi.",
      },
      {
        id: "2-24",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-25",
        type: "heading",
        level: 3,
        text: "Les issues GitHub : organiser le travail",
      },
      {
        id: "2-26",
        type: "text",
        html: "<p>Les <strong>issues</strong> sont le système de tickets intégré à GitHub. Utilise-les pour organiser ton travail et celui de ton équipe :</p><ul><li><strong>Bug report</strong> — un utilisateur signale un problème</li><li><strong>Feature request</strong> — une nouvelle fonctionnalité à développer</li><li><strong>Tâche</strong> — un travail à faire (refactoring, mise à jour, etc.)</li></ul><p>Lie tes PRs à des issues en écrivant <code>Closes #42</code> dans la description de ta PR. Quand la PR est fusionnée, l'issue se ferme automatiquement. C'est un workflow professionnel que les agences tech utilisent au quotidien.</p>",
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
        id: "2-27",
        type: "heading",
        level: 3,
        text: "Résoudre un conflit pas à pas",
      },
      {
        id: "2-28",
        type: "steps",
        steps: [
          {
            title: "Identifie les fichiers en conflit",
            description:
              "Tape git status — les fichiers en conflit apparaissent en rouge avec la mention \"both modified\". Git te liste exactement quels fichiers poser problème.",
          },
          {
            title: "Ouvre chaque fichier et choisis",
            description:
              "VS Code colore les conflits automatiquement et te propose des boutons \"Accept Current\", \"Accept Incoming\" ou \"Accept Both\". Choisis la version correcte pour chaque conflit.",
          },
          {
            title: "Teste le résultat",
            description:
              "Après avoir résolu tous les conflits, lance ton projet et vérifie que tout fonctionne. Un conflit mal résolu peut introduire des bugs subtils.",
          },
          {
            title: "Commite la résolution",
            description:
              "Fais git add . puis git commit. Git sait que c'est un commit de résolution de conflit et propose un message par défaut.",
          },
        ],
      },
      {
        id: "2-14",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Pour éviter les conflits, communique avec ton équipe, tire (pull) régulièrement les dernières modifications et garde tes branches à jour.",
      },
      {
        id: "2-29",
        type: "callout",
        variant: "info",
        html: "<strong>En pratique :</strong> Les conflits sont normaux et font partie du workflow. Ne panique pas quand tu en rencontres un. Plus tu pratiques, plus la résolution devient rapide. En moyenne, un conflit se résout en 2-5 minutes.",
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
        id: "3-16",
        type: "callout",
        variant: "tip",
        html: "<strong>Objectif caché :</strong> À la fin de cet atelier, tu auras aussi ton premier élément de portfolio en ligne. Chaque repo public que tu crées est une vitrine de tes compétences. Pense-y comme une carte de visite technique.",
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
        id: "3-17",
        type: "heading",
        level: 3,
        text: "Configuration avancée recommandée",
      },
      {
        id: "3-18",
        type: "text",
        html: "<p>Quelques configurations supplémentaires qui te simplifieront la vie au quotidien :</p><ul><li><code>git config --global init.defaultBranch main</code> — utilise \"main\" au lieu de \"master\" pour les nouveaux repos (standard actuel)</li><li><code>git config --global core.editor \"code --wait\"</code> — utilise VS Code comme éditeur Git par défaut</li><li><code>git config --global pull.rebase false</code> — utilise le merge par défaut lors d'un pull (plus simple pour les débutants)</li></ul><p>Ces réglages ne se font qu'une seule fois et s'appliquent à tous tes futurs projets.</p>",
      },
      {
        id: "3-19",
        type: "callout",
        variant: "warning",
        html: "<strong>Authentification SSH vs HTTPS :</strong> GitHub recommande désormais l'authentification via SSH (clé publique/privée) ou via GitHub CLI. L'authentification par mot de passe classique n'est plus supportée depuis 2021. Si tu vois une erreur \"authentication failed\", c'est probablement ça le problème.",
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
        id: "3-20",
        type: "heading",
        level: 3,
        text: "Conventions de nommage pour tes repos",
      },
      {
        id: "3-21",
        type: "text",
        html: "<p>Le nom de ton repo est la première chose que les gens voient. Quelques conventions à respecter :</p><ul><li><strong>Tout en minuscules</strong> avec des tirets : <code>mon-portfolio</code>, <code>chatbot-support-client</code></li><li><strong>Descriptif</strong> — le nom doit indiquer ce que fait le projet sans le README</li><li><strong>Pas d'abréviations obscures</strong> — <code>landing-page-restaurant</code> est meilleur que <code>lp-resto-v2</code></li></ul>",
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
        id: "3-22",
        type: "heading",
        level: 3,
        text: "Résoudre les problèmes courants au premier push",
      },
      {
        id: "3-23",
        type: "comparison",
        headers: ["Erreur", "Cause probable", "Solution"],
        rows: [
          { cells: ["\"failed to push\"", "Le remote a un README ou un fichier que tu n'as pas en local", "Fais git pull --rebase origin main puis git push"] },
          { cells: ["\"authentication failed\"", "Mot de passe GitHub ne fonctionne plus", "Configure un token ou utilise gh auth login"] },
          { cells: ["\"branch main does not exist\"", "Ta branche locale s'appelle 'master'", "git branch -M main pour la renommer"] },
          { cells: ["\"remote origin already exists\"", "Tu as déjà ajouté un remote", "git remote set-url origin NOUVELLE_URL"] },
        ],
      },
      {
        id: "3-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Le fichier .gitignore :</strong> Crée un fichier <code>.gitignore</code> à la racine pour exclure les fichiers qui ne doivent pas être versionnés : <code>node_modules/</code>, <code>.env</code>, <code>.DS_Store</code>, <code>dist/</code>. C'est la première chose à faire dans tout projet.",
      },
      {
        id: "3-24",
        type: "heading",
        level: 3,
        text: "Le .gitignore parfait pour un projet Next.js",
      },
      {
        id: "3-25",
        type: "text",
        html: "<p>Voici les fichiers et dossiers à toujours ignorer dans un projet Next.js / Node.js :</p><ul><li><code>node_modules/</code> — les dépendances (régénérées avec npm install)</li><li><code>.env</code> et <code>.env.local</code> — tes variables secrètes (clés API, mots de passe)</li><li><code>.next/</code> — le dossier de build Next.js</li><li><code>dist/</code> ou <code>build/</code> — les fichiers compilés</li><li><code>.DS_Store</code> — fichier macOS invisible</li><li><code>*.log</code> — les fichiers de log</li><li><code>.vercel/</code> — la config locale Vercel</li></ul><p>Des templates .gitignore sont disponibles sur <strong>gitignore.io</strong> — tape \"Node\" et copie le résultat.</p>",
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
        id: "3-26",
        type: "callout",
        variant: "tip",
        html: "<strong>README template :</strong> Crée-toi un template de README que tu réutilises pour chaque projet. Avec le temps, tu n'auras qu'à remplir les blancs. Un bon README prend 10 minutes à rédiger mais fait toute la différence pour un client ou un recruteur qui découvre ton projet.",
      },
      {
        id: "3-27",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-28",
        type: "heading",
        level: 2,
        text: "Le workflow quotidien Git résumé",
      },
      {
        id: "3-29",
        type: "steps",
        steps: [
          {
            title: "Début de session : git pull",
            description:
              "Récupère les dernières modifications depuis le remote. Fais-le AVANT de commencer à coder pour éviter les conflits.",
          },
          {
            title: "Crée une branche pour ta tâche",
            description:
              "git checkout -b feature/ma-tache. Même pour un petit changement, prends l'habitude.",
          },
          {
            title: "Code, teste, commite régulièrement",
            description:
              "Fais des petits commits fréquents. Vérifie toujours avec git status avant git add.",
          },
          {
            title: "Pousse ta branche",
            description:
              "git push -u origin feature/ma-tache. Ça sauvegarde ton travail dans le cloud.",
          },
          {
            title: "Crée une PR et merge",
            description:
              "Ouvre une Pull Request sur GitHub, vérifie les changements, merge dans main.",
          },
          {
            title: "Nettoie",
            description:
              "Reviens sur main (git checkout main), fais git pull, puis supprime ta branche locale (git branch -d feature/ma-tache).",
          },
        ],
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
