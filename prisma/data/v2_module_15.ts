// ═══════════════════════════════════════════════════
// MODULE 15 — DevOps & Monitoring
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_15_LESSONS = [
  // ─── LEÇON 1 : Git avancé : branches, PR, workflow pro ───
  {
    order: 1,
    module: 15,
    title: "Git avancé : branches, PR, workflow pro",
    slug: "v2-git-avance-branches-pr-workflow",
    duration: "25 min",
    description: "Maîtrise le workflow Git professionnel : branches feature, pull requests, code review et conventions de commits. Fini le push direct sur main.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi un workflow Git structuré change tout" },
      { id: "1-2", type: "text", html: "<p>Quand tu travailles seul, tu es tenté de tout pusher directement sur <code>main</code>. Mais dès que tu livres à un client ou que tu collabores, ce chaos te rattrape : bugs en production, code cassé, impossible de revenir en arrière proprement.</p><p>Un workflow Git structuré te donne : la capacité de travailler sur plusieurs features en parallèle, de tester avant de merger, et de toujours avoir une branche <code>main</code> stable et déployable.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> La branche main doit TOUJOURS être déployable en production. Jamais de code cassé sur main." },

      { id: "1-20", type: "heading", level: 3, text: "Le vrai coût du 'push direct sur main'" },
      { id: "1-21", type: "text", html: "<p>Tu penses gagner du temps en pushant directement sur main ? En réalité, tu accumules une dette qui te coûtera cher :</p><ul><li><strong>Bug en prod un vendredi soir :</strong> Tu pushes un fix rapide qui casse autre chose. Sans branche, impossible de revenir en arrière proprement. Tu passes ton week-end à debugger.</li><li><strong>Client qui veut la version d'avant :</strong> 'L'ancienne version marchait mieux.' Sans branches et sans tags, bonne chance pour retrouver et restaurer la version d'il y a 2 semaines.</li><li><strong>Collaboration impossible :</strong> Dès qu'un collègue ou un sous-traitant intervient sur le projet, les conflits explosent si tout le monde push sur main.</li><li><strong>Avec Vercel :</strong> Chaque push sur main = déploiement en production. Un push direct avec un bug = bug en production instantanément.</li></ul>" },
      { id: "1-22", type: "callout", variant: "warning", html: "<strong>Scénario vécu :</strong> Un freelance push un commit avec un console.log qui affiche le token admin. Le déploiement Vercel part automatiquement. Pendant 4 heures, le token est visible en production dans les DevTools de n'importe quel visiteur. Avec une PR et un code review, ce bug aurait été détecté avant le merge." },

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le workflow Feature Branch" },
      { id: "1-6", type: "steps", steps: [
        { title: "Créer une branche feature", description: "Pour chaque nouvelle fonctionnalité ou fix, crée une branche depuis main : git checkout -b feature/nom-de-la-feature. Utilise des préfixes : feature/, fix/, refactor/, chore/." },
        { title: "Développer sur ta branche", description: "Fais tes commits sur la branche feature. Commite souvent avec des messages clairs. N'hésite pas à faire des petits commits atomiques." },
        { title: "Pusher et créer une Pull Request", description: "Push ta branche sur GitHub : git push -u origin feature/nom. Crée une Pull Request (PR) avec un titre clair et une description de ce qui a changé." },
        { title: "Review et merger", description: "Relis ton code (ou fais-le relire par un collaborateur). Vérifie que les tests passent. Merge la PR dans main via l'interface GitHub." },
        { title: "Nettoyer", description: "Après le merge, supprime la branche feature localement et sur GitHub : git branch -d feature/nom && git push origin --delete feature/nom." },
      ]},

      { id: "1-23", type: "heading", level: 3, text: "La Pull Request parfaite" },
      { id: "1-24", type: "text", html: "<p>Une PR bien rédigée te fait gagner du temps et montre du professionnalisme. Voici le template que tu devrais utiliser :</p><ul><li><strong>Titre clair :</strong> 'feat: ajouter le système de notifications email' (pas 'update code' ou 'changes')</li><li><strong>Description :</strong> Explique le POURQUOI, pas le QUOI. Le code montre ce qui a changé — la description explique pourquoi.</li><li><strong>Screenshots :</strong> Si la PR concerne du frontend, ajoute des screenshots avant/après.</li><li><strong>Checklist :</strong> 'Tests passent', 'Testé sur mobile', 'Variables d'environnement ajoutées sur Vercel'</li><li><strong>Impact :</strong> 'Cette PR ajoute une nouvelle table en base. Migration nécessaire.'</li></ul><p>Même quand tu travailles seul, rédiger des PR propres te crée un historique lisible. Quand tu reviendras sur ce projet dans 6 mois, tu te remercieras.</p>" },
      { id: "1-25", type: "callout", variant: "info", html: "<strong>Self-review :</strong> Quand tu travailles seul, prends l'habitude de relire ta propre PR dans l'interface GitHub avant de merger. La vue 'diff' met en évidence des choses que tu ne vois pas dans ton éditeur : lignes oubliées, console.log, imports inutiles, typos dans les commentaires." },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Les conventions de commits" },
      { id: "1-9", type: "text", html: "<p>Des messages de commit cohérents rendent l'historique lisible. Utilise la convention <strong>Conventional Commits</strong> :</p><pre><code>feat: ajouter le système de notifications\nfix: corriger le bug de connexion sur mobile\nrefactor: simplifier la logique du panier\nchore: mettre à jour les dépendances\ndocs: ajouter la documentation API\nstyle: reformater le fichier header.tsx\ntest: ajouter les tests du module paiement</code></pre>" },

      { id: "1-26", type: "heading", level: 3, text: "Le commit atomique : petit mais complet" },
      { id: "1-27", type: "text", html: "<p>Un bon commit raconte une micro-histoire. Il fait UNE chose, la fait complètement, et peut être compris isolément. Voici la différence :</p>" },
      { id: "1-28", type: "comparison", headers: ["Mauvais commit", "Bon commit"], rows: [
        { cells: ["'update'", "'feat: ajouter la validation email sur le formulaire d'inscription'"] },
        { cells: ["'fix bug'", "'fix: corriger le crash quand l'utilisateur upload un PDF de plus de 10MB'"] },
        { cells: ["'work in progress'", "'refactor: extraire la logique de pagination dans un hook custom'"] },
        { cells: ["Commit avec 50 fichiers modifiés", "Commit avec 3-5 fichiers liés à un seul changement"] },
        { cells: ["Mélange fix + feature + refactor", "Un commit = un type de changement"] },
      ]},
      { id: "1-29", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Si tu as du mal à résumer ton commit en une ligne, c'est probablement que tu as fait trop de changements d'un coup. Utilise <code>git add -p</code> pour ajouter uniquement les changements liés à un seul objectif." },

      { id: "1-10", type: "heading", level: 2, text: "Les commandes Git essentielles" },
      { id: "1-11", type: "comparison", headers: ["Commande", "Usage"], rows: [
        { cells: ["git stash", "Mettre de côté des changements non commités temporairement"] },
        { cells: ["git rebase main", "Remettre ta branche à jour avec les derniers changements de main"] },
        { cells: ["git cherry-pick <hash>", "Appliquer un commit spécifique sur ta branche actuelle"] },
        { cells: ["git log --oneline --graph", "Visualiser l'historique des commits de façon compacte"] },
        { cells: ["git reset --soft HEAD~1", "Annuler le dernier commit en gardant les changements"] },
      ]},

      { id: "1-30", type: "heading", level: 3, text: "Résoudre les conflits Git sans paniquer" },
      { id: "1-31", type: "text", html: "<p>Les conflits Git font peur aux débutants, mais ils sont normaux et simples à résoudre. Un conflit arrive quand deux branches modifient la même ligne. Voici la procédure :</p><ol><li><strong>Ne panique pas :</strong> Git t'indique exactement quels fichiers sont en conflit</li><li><strong>Ouvre le fichier :</strong> Tu verras des marqueurs <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> et <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> qui délimitent les deux versions</li><li><strong>Choisis la bonne version :</strong> Parfois c'est la tienne, parfois c'est l'autre, parfois c'est un mix des deux</li><li><strong>Supprime les marqueurs :</strong> Enlève les <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code></li><li><strong>Teste :</strong> Vérifie que le code compile et fonctionne</li><li><strong>Commit :</strong> <code>git add . && git commit</code> — Git génère un message de merge automatiquement</li></ol>" },
      { id: "1-32", type: "callout", variant: "tip", html: "<strong>Pro tip :</strong> Pour éviter les gros conflits, merge main dans ta branche feature régulièrement (<code>git merge main</code> depuis ta branche). Petits conflits fréquents > gros conflit au moment du merge final." },

      { id: "1-12", type: "callout", variant: "warning", html: "<strong>Attention :</strong> Ne fais JAMAIS de <code>git push --force</code> sur main. Si tu as besoin de corriger quelque chose, crée un nouveau commit de correction (revert) plutôt que de réécrire l'historique." },
    ]),
    exercise: "<h3>Exercice : Workflow Git professionnel</h3><p>Mets en place le workflow sur ton projet :</p><ol><li>Crée une branche <code>feature/test-workflow</code> depuis main</li><li>Fais 3 commits avec la convention Conventional Commits</li><li>Push et crée une Pull Request sur GitHub</li><li>Relis ta propre PR et merge-la</li><li>Supprime la branche après le merge</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel préfixe de branche utiliser pour corriger un bug ?", options: JSON.stringify(["feature/", "fix/", "refactor/", "chore/"]), correctAnswer: "fix/", explanation: "Le préfixe fix/ est la convention pour les corrections de bugs. feature/ est pour les nouvelles fonctionnalités, refactor/ pour la restructuration de code, et chore/ pour les tâches de maintenance." },
      { type: "true_false", question: "Il est acceptable de pusher directement sur main quand on travaille seul.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Même seul, utiliser des branches et des PR te protège : tu peux revenir en arrière facilement, tester avant de merger, et tu gardes un historique propre. C'est aussi une habitude pro indispensable." },
      { type: "mcq", question: "Quelle commande permet de mettre de côté des changements non commités temporairement ?", options: JSON.stringify(["git save", "git stash", "git store", "git cache"]), correctAnswer: "git stash", explanation: "git stash sauvegarde tes modifications non commitées dans une pile temporaire. Tu peux ensuite changer de branche et récupérer tes changements avec git stash pop." },
      { type: "mcq", question: "Quel format de message de commit suit la convention Conventional Commits pour une nouvelle fonctionnalité ?", options: JSON.stringify(["new: description", "feat: description", "add: description", "feature: description"]), correctAnswer: "feat: description", explanation: "La convention Conventional Commits utilise feat: pour les nouvelles fonctionnalités, fix: pour les corrections, refactor: pour la restructuration, etc." },
      { type: "true_false", question: "git push --force sur main est une pratique acceptable pour corriger un commit erroné.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "git push --force sur main réécrit l'historique partagé et peut casser le travail des collaborateurs. Utilise plutôt git revert pour créer un nouveau commit qui annule les changements." },
      { type: "mcq", question: "Que fait git reset --soft HEAD~1 ?", options: JSON.stringify(["Supprime le dernier commit et les changements associés", "Annule le dernier commit mais garde les changements dans le staging", "Revient au premier commit du projet", "Supprime toute la branche"]), correctAnswer: "Annule le dernier commit mais garde les changements dans le staging", explanation: "git reset --soft HEAD~1 annule le dernier commit mais conserve tous les changements dans la zone de staging. Tu peux ensuite modifier et recréer un commit." },
    ],
  },

  // ─── LEÇON 2 : CI/CD : déploiement automatique ───
  {
    order: 2,
    module: 15,
    title: "CI/CD : déploiement automatique",
    slug: "v2-cicd-deploiement-automatique",
    duration: "25 min",
    description: "Configure un pipeline CI/CD avec GitHub Actions et Vercel pour automatiser les tests, les vérifications de qualité et le déploiement de tes applications.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "CI/CD : fini les déploiements manuels" },
      { id: "2-2", type: "text", html: "<p><strong>CI (Continuous Integration)</strong> signifie que chaque push déclenche automatiquement des vérifications : tests, linting, build. Si quelque chose casse, tu le sais immédiatement.</p><p><strong>CD (Continuous Deployment)</strong> signifie que quand le code est mergé sur main et que tous les checks passent, l'app est déployée automatiquement en production. Pas d'intervention manuelle, pas d'oubli.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Vercel + GitHub :</strong> Si tu déploies sur Vercel, tu as déjà du CD gratuit. Chaque push sur main déclenche un déploiement, et chaque PR crée une preview. La CI (tests, lint) nécessite GitHub Actions." },

      { id: "2-20", type: "heading", level: 3, text: "Pourquoi la CI te sauve des catastrophes" },
      { id: "2-21", type: "text", html: "<p>Sans CI, tu comptes sur ta mémoire pour lancer les tests et le lint avant chaque déploiement. Spoiler : tu oublieras. Voici ce que la CI attrape automatiquement :</p><ul><li><strong>Erreurs de typage TypeScript :</strong> Tu as changé l'interface d'une fonction mais oublié de mettre à jour un endroit qui l'appelle. Sans CI, ça compile peut-être en local (cache), mais pas sur un environnement propre.</li><li><strong>Imports cassés :</strong> Tu as supprimé un fichier mais un autre l'importe encore. Le build échoue.</li><li><strong>Tests en régression :</strong> Tu as modifié une fonction et cassé un comportement existant. Les tests te préviennent AVANT le déploiement.</li><li><strong>Code style incohérent :</strong> Un collaborateur pousse du code sans respecter les conventions ESLint. Le pipeline le bloque.</li></ul><p>En 2 mois avec CI, tu détecteras au moins 10 bugs qui seraient partis en production sans. Ça vaut les 15 minutes de configuration.</p>" },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "GitHub Actions : ton pipeline CI" },
      { id: "2-6", type: "text", html: "<p>GitHub Actions te permet de définir des workflows automatiques dans des fichiers YAML. Voici un pipeline CI de base pour un projet Next.js :</p><pre><code># .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run build\n      - run: npm test</code></pre>" },

      { id: "2-22", type: "heading", level: 3, text: "Optimiser ton pipeline CI" },
      { id: "2-23", type: "text", html: "<p>Un pipeline CI lent, c'est un pipeline que tu finis par ignorer. Voici comment le garder rapide :</p><ul><li><strong>Cache des dépendances :</strong> Le step <code>cache: 'npm'</code> dans setup-node évite de retélécharger node_modules à chaque run. Gain : 30-60 secondes.</li><li><strong>Parallélise les jobs :</strong> Tu peux lancer lint, build et test en parallèle au lieu de séquentiellement. Chaque job est indépendant.</li><li><strong>Skip CI sur les commits non critiques :</strong> Ajoute <code>[skip ci]</code> dans le message de commit pour les changements de documentation ou de README. GitHub Actions ne se lance pas.</li></ul><p>Objectif : un pipeline qui prend moins de 3 minutes. Au-delà, les développeurs commencent à l'ignorer.</p>" },
      { id: "2-24", type: "callout", variant: "tip", html: "<strong>Budget GitHub Actions :</strong> Les repos publics ont des minutes illimitées. Les repos privés ont 2000 minutes/mois sur le plan gratuit. Un pipeline de 3 minutes x 20 PRs/mois = 60 minutes. Tu es largement dans les limites." },

      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Les étapes clés d'un bon pipeline" },
      { id: "2-9", type: "steps", steps: [
        { title: "Install", description: "npm ci installe les dépendances exactes du package-lock.json. Plus rapide et déterministe que npm install." },
        { title: "Lint", description: "ESLint vérifie la qualité du code. TypeScript vérifie les types. Si un développeur a introduit une erreur de type, le pipeline le bloque." },
        { title: "Build", description: "Vérifie que le projet compile sans erreur. Détecte les imports manquants, les erreurs de syntaxe, les problèmes de configuration." },
        { title: "Test", description: "Exécute les tests unitaires et d'intégration. Si un test échoue, la PR est bloquée et ne peut pas être mergée." },
      ]},

      { id: "2-25", type: "heading", level: 3, text: "Branch Protection Rules : le garde-fou ultime" },
      { id: "2-26", type: "text", html: "<p>Avoir une CI, c'est bien. Bloquer le merge quand la CI échoue, c'est mieux. Configure les Branch Protection Rules sur GitHub :</p><ol><li>Va dans Settings > Branches > Add rule</li><li>Branch name pattern : <code>main</code></li><li>Coche <strong>'Require status checks to pass before merging'</strong></li><li>Sélectionne tes checks CI (lint, build, test)</li><li>Optionnel mais recommandé : coche <strong>'Require a pull request before merging'</strong> pour interdire les push directs sur main</li></ol><p>Avec ces règles, il est physiquement IMPOSSIBLE de merger du code qui casse la CI. C'est ton filet de sécurité ultime.</p>" },

      { id: "2-10", type: "heading", level: 2, text: "Preview deployments avec Vercel" },
      { id: "2-11", type: "text", html: "<p>Chaque PR crée automatiquement un <strong>preview deployment</strong> sur Vercel — une URL unique qui permet de tester les changements avant le merge. C'est extrêmement utile pour :</p><ul><li>Montrer une feature au client avant de la mettre en production</li><li>Tester sur mobile sans déployer en prod</li><li>Permettre à un collaborateur de tester visuellement ta PR</li></ul>" },

      { id: "2-12", type: "comparison", headers: ["Environnement", "Déclencheur", "URL"], rows: [
        { cells: ["Production", "Push sur main", "monapp.vercel.app"] },
        { cells: ["Preview", "Chaque PR", "monapp-git-feature-xxx.vercel.app"] },
        { cells: ["Development", "Local", "localhost:3000"] },
      ]},

      { id: "2-27", type: "heading", level: 3, text: "Utiliser les previews pour impressionner tes clients" },
      { id: "2-28", type: "text", html: "<p>Les preview deployments sont un outil commercial puissant. Voici comment les utiliser pour te démarquer :</p><ul><li><strong>Validation avant mise en production :</strong> Envoie le lien de preview au client avec un message : 'Voici la nouvelle fonctionnalité. Teste-la sur ce lien avant que je ne la mette en production.' Le client se sent impliqué et en contrôle.</li><li><strong>Démonstration de progression :</strong> À chaque PR, tu as une URL fonctionnelle. Tu peux montrer l'avancement au client en temps réel.</li><li><strong>Tests multi-appareils :</strong> Demande au client de tester le preview sur son téléphone. C'est plus fiable que de tester en responsive dans les DevTools.</li></ul>" },

      { id: "2-13", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Configure des variables d'environnement différentes pour chaque environnement Vercel. Ta preview doit pointer vers une base de données de test, pas la production." },
    ]),
    exercise: "<h3>Exercice : Configurer ton pipeline CI/CD</h3><p>Mets en place l'automatisation sur ton projet :</p><ol><li>Crée le fichier <code>.github/workflows/ci.yml</code> avec les étapes lint, build et test</li><li>Push sur une branche feature et vérifie que le pipeline se lance</li><li>Vérifie que Vercel crée un preview deployment pour ta PR</li><li>Ajoute un badge de statut CI dans ton README</li><li>Configure les branch protection rules sur GitHub pour bloquer le merge si le CI échoue</li></ol>",
    quiz: [
      { type: "mcq", question: "Que signifie CI dans CI/CD ?", options: JSON.stringify(["Continuous Improvement", "Continuous Integration", "Code Inspection", "Continuous Installation"]), correctAnswer: "Continuous Integration", explanation: "CI signifie Continuous Integration : chaque changement de code est automatiquement vérifié (tests, lint, build) pour détecter les problèmes le plus tôt possible." },
      { type: "true_false", question: "Avec Vercel connecté à GitHub, chaque push sur main déclenche automatiquement un déploiement en production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est le comportement par défaut de Vercel : chaque push sur la branche de production (main) déclenche un déploiement automatique. C'est du Continuous Deployment." },
      { type: "mcq", question: "Quelle commande est recommandée dans un pipeline CI pour installer les dépendances ?", options: JSON.stringify(["npm install", "npm ci", "npm update", "npm init"]), correctAnswer: "npm ci", explanation: "npm ci est conçue pour les environnements CI : elle installe les versions exactes du package-lock.json, supprime node_modules avant, et échoue si le lock file n'est pas à jour. Plus rapide et déterministe." },
      { type: "mcq", question: "Qu'est-ce qu'un preview deployment sur Vercel ?", options: JSON.stringify(["Un déploiement en production", "Un déploiement temporaire créé pour chaque Pull Request", "Un serveur de développement local", "Un backup de l'application"]), correctAnswer: "Un déploiement temporaire créé pour chaque Pull Request", explanation: "Un preview deployment est une version temporaire de l'app déployée à une URL unique pour chaque PR. Ça permet de tester les changements visuellement avant de merger." },
      { type: "true_false", question: "Il est recommandé d'utiliser les mêmes variables d'environnement pour les preview et la production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les previews doivent utiliser des variables d'environnement de test (base de données de test, clés sandbox) pour éviter d'affecter les données de production pendant les tests." },
    ],
  },

  // ─── LEÇON 3 : Monitoring & alerting avec Vercel ───
  {
    order: 3,
    module: 15,
    title: "Monitoring & alerting avec Vercel",
    slug: "v2-monitoring-alerting-vercel",
    duration: "20 min",
    description: "Utilise les outils intégrés de Vercel — Analytics, logs et alertes — pour surveiller ton app en production, détecter les erreurs et réagir rapidement. Pas besoin d'outil externe.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "En production, tu ne vois rien sans monitoring" },
      { id: "3-2", type: "text", html: "<p>En développement, tu vois les erreurs dans la console. En production, tes utilisateurs voient un écran blanc et partent sans rien te dire. Sans monitoring, tu découvres les bugs quand le client t'appelle furieux — parfois des jours après.</p><p>La bonne nouvelle : <strong>Vercel intègre tout ce qu'il faut</strong> pour monitorer tes apps. Pas besoin d'ajouter un outil externe — les logs, les analytics et les alertes sont disponibles directement dans ton dashboard Vercel.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Philosophie :</strong> Moins d'outils = moins de complexité. Vercel fournit les logs de fonctions serverless, les Web Analytics (performance), et les Speed Insights. Pour un freelance, c'est largement suffisant. Tu n'as pas besoin de payer un outil de monitoring externe." },

      { id: "3-20", type: "heading", level: 3, text: "Les 3 types de problèmes que le monitoring détecte" },
      { id: "3-21", type: "text", html: "<p>En production, les problèmes se répartissent en 3 catégories :</p><ul><li><strong>Erreurs applicatives (5xx) :</strong> Ton code a crashé. Une API Route a planté, un middleware a échoué, une requête Supabase a timeout. C'est critique — l'utilisateur voit une erreur.</li><li><strong>Erreurs utilisateur (4xx) :</strong> L'utilisateur fait quelque chose d'inattendu. Un 404 (page introuvable), un 401 (non authentifié), un 400 (données invalides). Moins critique mais important à surveiller pour améliorer l'UX.</li><li><strong>Problèmes de performance :</strong> Ton app fonctionne mais elle est LENTE. Un LCP de 5 secondes, un cold start de 3 secondes sur une API Route, un CLS qui fait sauter la page. L'utilisateur ne signale pas ces problèmes — il part simplement chez un concurrent.</li></ul><p>Un bon monitoring couvre ces 3 catégories. Les logs Vercel couvrent les erreurs, les Speed Insights couvrent la performance.</p>" },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Les outils de monitoring intégrés à Vercel" },
      { id: "3-6", type: "steps", steps: [
        { title: "Vercel Logs (Runtime Logs)", description: "Dans le dashboard Vercel, va dans ton projet > Logs. Tu vois en temps réel toutes les requêtes, les erreurs serveur (API Routes, middleware) et les logs console.log/console.error. Filtre par statut (erreurs 4xx/5xx), par route ou par période." },
        { title: "Vercel Analytics (Web Analytics)", description: "Active Web Analytics dans les settings du projet. Tu obtiens : nombre de visiteurs, pages vues, pays, navigateurs — sans aucun script externe et sans cookies. Conforme RGPD par défaut." },
        { title: "Speed Insights", description: "Active Speed Insights pour mesurer les Core Web Vitals en production : LCP, FID, CLS. Tu vois les performances réelles de tes utilisateurs, pas celles de ton MacBook en local." },
        { title: "Configurer les notifications", description: "Dans les settings Vercel > Notifications, configure des alertes email pour les déploiements échoués et les erreurs runtime. Tu es prévenu dès que quelque chose casse en production." },
      ]},

      { id: "3-22", type: "heading", level: 3, text: "Comprendre les Core Web Vitals" },
      { id: "3-23", type: "text", html: "<p>Les Core Web Vitals sont les métriques de performance que Google utilise pour le SEO. Speed Insights de Vercel les mesure avec les données réelles de tes utilisateurs :</p>" },
      { id: "3-24", type: "comparison", headers: ["Métrique", "Ce qu'elle mesure", "Seuil acceptable", "Seuil excellent"], rows: [
        { cells: ["LCP (Largest Contentful Paint)", "Temps de chargement du plus grand élément visible", "< 4 secondes", "< 2.5 secondes"] },
        { cells: ["FID (First Input Delay)", "Temps de réponse au premier clic/tap", "< 300 ms", "< 100 ms"] },
        { cells: ["CLS (Cumulative Layout Shift)", "Stabilité visuelle (les éléments bougent-ils ?)", "< 0.25", "< 0.1"] },
        { cells: ["INP (Interaction to Next Paint)", "Réactivité globale aux interactions", "< 500 ms", "< 200 ms"] },
      ]},
      { id: "3-25", type: "callout", variant: "tip", html: "<strong>Impact SEO :</strong> Google utilise les Core Web Vitals comme facteur de classement. Un LCP lent = moins de visibilité dans les résultats de recherche. Speed Insights te montre exactement où optimiser." },

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Ce que les logs Vercel te montrent" },
      { id: "3-9", type: "text", html: "<p>Les Runtime Logs de Vercel capturent automatiquement :</p><ul><li><strong>Erreurs serveur :</strong> crashes dans les API Routes, erreurs de middleware, timeouts de fonctions serverless</li><li><strong>Requêtes HTTP :</strong> chaque requête avec son statut (200, 404, 500), sa durée et la route concernée</li><li><strong>Logs custom :</strong> tout ce que tu écris avec console.log() ou console.error() dans ton code serveur</li><li><strong>Performance :</strong> durée d'exécution de chaque fonction serverless, cold starts détectés</li></ul>" },

      { id: "3-26", type: "heading", level: 3, text: "Logger comme un pro : les bonnes pratiques" },
      { id: "3-27", type: "text", html: "<p>Les logs sont tes yeux en production. Mais des logs mal structurés sont aussi utiles qu'un journal intime en chinois. Voici comment logger efficacement :</p><pre><code>// MAUVAIS : log inutile\nconsole.error('Error');\n\n// BON : log avec contexte\nconsole.error('[API /chat] Error processing message', {\n  userId: user.id,\n  messageLength: message.length,\n  error: error.message,\n  timestamp: new Date().toISOString(),\n});</code></pre><p>Chaque log d'erreur devrait contenir : <strong>qui</strong> (userId), <strong>quoi</strong> (la route et l'action), <strong>pourquoi</strong> (le message d'erreur), et <strong>quand</strong> (timestamp). Avec ces 4 informations, tu peux diagnostiquer n'importe quel bug en 5 minutes au lieu de 2 heures.</p>" },
      { id: "3-28", type: "callout", variant: "warning", html: "<strong>Ne loggue JAMAIS :</strong> des mots de passe, des tokens, des clés API, des numéros de carte, ou des données personnelles sensibles. Les logs Vercel sont accessibles à toute personne ayant accès au projet." },

      { id: "3-10", type: "heading", level: 2, text: "Bonnes pratiques de monitoring avec Vercel" },
      { id: "3-11", type: "comparison", headers: ["Pratique", "Pourquoi"], rows: [
        { cells: ["Ajouter des console.error() explicites", "Les logs Vercel affichent tes messages — utilise-les pour tracer les erreurs avec du contexte (userId, route, payload)"] },
        { cells: ["Surveiller les erreurs 5xx quotidiennement", "Les erreurs 500 signifient que ton serveur a crashé — à corriger en priorité"] },
        { cells: ["Utiliser les filtres de logs", "Filtre par statut, route ou période pour isoler rapidement les problèmes"] },
        { cells: ["Définir un SLA de réponse", "Objectif : résoudre les erreurs critiques en moins de 24h"] },
      ]},

      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Ajoute un try/catch dans tes API Routes critiques avec un console.error(err) détaillé. Ça te donne un contexte précieux dans les logs Vercel pour diagnostiquer les bugs sans outil externe." },

      { id: "3-13", type: "checklist", title: "Checklist monitoring", items: [
        { id: "c1", text: "Vercel Web Analytics activé" },
        { id: "c2", text: "Vercel Speed Insights activé" },
        { id: "c3", text: "Notifications email configurées pour les erreurs et déploiements échoués" },
        { id: "c4", text: "Console.error() ajoutés dans les API Routes critiques avec contexte structuré" },
        { id: "c5", text: "Test de vérification : déclencher une erreur et la retrouver dans les logs" },
        { id: "c6", text: "Core Web Vitals dans le vert (LCP < 2.5s, CLS < 0.1)" },
        { id: "c7", text: "Aucune donnée sensible dans les logs" },
      ]},
    ]),
    exercise: "<h3>Exercice : Configure le monitoring Vercel</h3><p>Mets en place le monitoring complet sur ton projet :</p><ol><li>Active Web Analytics dans les settings de ton projet Vercel</li><li>Active Speed Insights pour mesurer les Core Web Vitals</li><li>Configure les notifications email dans Vercel pour les déploiements échoués et les erreurs runtime</li><li>Ajoute un console.error() explicite dans une API Route, déclenche une erreur volontaire et retrouve-la dans les Vercel Logs</li><li>Consulte le dashboard Logs et familiarise-toi avec les filtres (statut, route, période)</li></ol>",
    quiz: [
      { type: "mcq", question: "Où trouves-tu les logs d'erreurs serveur de ton app déployée sur Vercel ?", options: JSON.stringify(["Dans la console du navigateur", "Dans le dashboard Vercel > Logs", "Dans un fichier local sur ton ordinateur", "Dans les issues GitHub"]), correctAnswer: "Dans le dashboard Vercel > Logs", explanation: "Les Runtime Logs dans le dashboard Vercel montrent en temps réel toutes les requêtes, erreurs serveur et logs console de tes fonctions serverless. C'est l'outil principal pour diagnostiquer les problèmes en production." },
      { type: "true_false", question: "Vercel Web Analytics nécessite l'installation d'un cookie pour fonctionner.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Vercel Web Analytics fonctionne sans cookies et sans script externe, ce qui le rend conforme au RGPD par défaut. Il mesure les visites, pages vues et autres métriques sans tracker les utilisateurs individuellement." },
      { type: "mcq", question: "Que mesurent les Speed Insights de Vercel ?", options: JSON.stringify(["Le nombre de lignes de code", "Les Core Web Vitals en production (LCP, FID, CLS)", "La taille de la base de données", "Le nombre de commits Git"]), correctAnswer: "Les Core Web Vitals en production (LCP, FID, CLS)", explanation: "Speed Insights mesure les Core Web Vitals (LCP, FID, CLS) avec les données réelles de tes utilisateurs en production. C'est essentiel pour optimiser la performance perçue de ton app." },
      { type: "mcq", question: "Pourquoi ajouter des console.error() explicites dans tes API Routes ?", options: JSON.stringify(["Pour ralentir le serveur", "Pour avoir du contexte détaillé dans les logs Vercel quand une erreur survient", "Pour afficher des erreurs au client", "Pour contourner les bugs"]), correctAnswer: "Pour avoir du contexte détaillé dans les logs Vercel quand une erreur survient", explanation: "Les console.error() avec du contexte (userId, route, payload) apparaissent dans les Runtime Logs de Vercel. Ça te permet de comprendre exactement ce qui s'est passé sans outil de monitoring externe." },
      { type: "true_false", question: "Pour un freelance, les outils de monitoring intégrés à Vercel suffisent dans la majorité des cas.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vercel fournit les logs, les analytics et les alertes directement dans le dashboard. Pour la plupart des projets freelance, c'est largement suffisant sans payer un outil de monitoring externe supplémentaire." },
    ],
  },

  // ─── LEÇON 4 : Gérer les incidents et la maintenance ───
  {
    order: 4,
    module: 15,
    title: "Gérer les incidents et la maintenance",
    slug: "v2-gerer-incidents-maintenance",
    duration: "20 min",
    description: "Apprends à réagir efficacement quand quelque chose casse en production. Protocole d'incident, communication client, rollback et post-mortem.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "En production, les incidents arrivent — toujours" },
      { id: "4-2", type: "text", html: "<p>Même avec les meilleurs tests et le meilleur monitoring, des incidents surviendront. Un service externe tombe, une migration rate, un edge case non testé apparaît. Ce qui fait la différence entre un amateur et un pro, c'est <strong>comment tu réagis</strong>.</p><p>Un incident bien géré peut même <strong>renforcer</strong> la confiance du client. Un incident mal géré peut détruire une relation commerciale.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Erreur classique :</strong> Paniquer, modifier du code directement en production sans tester, et aggraver le problème. Respire, suis le protocole." },

      { id: "4-20", type: "heading", level: 3, text: "Les causes d'incidents les plus fréquentes" },
      { id: "4-21", type: "text", html: "<p>En 80% des cas, les incidents en production viennent de 5 causes :</p><ul><li><strong>Déploiement de code buggé (40%) :</strong> Un merge qui introduit un bug non détecté par les tests. Solution : CI solide + branch protection + preview deployments.</li><li><strong>Service externe down (20%) :</strong> OpenAI, Supabase, Stripe, Resend... Un de ces services tombe et ton app avec. Solution : gestion d'erreurs gracieuse + timeouts.</li><li><strong>Migration de base de données ratée (15%) :</strong> Un changement de schéma qui casse les requêtes existantes. Solution : migrations testées en preview + rollback préparé.</li><li><strong>Pic de trafic inattendu (15%) :</strong> Un post viral amène 10x le trafic normal. Les fonctions serverless timeout, la base de données sature. Solution : rate limiting + monitoring des quotas.</li><li><strong>Erreur de configuration (10%) :</strong> Une variable d'environnement manquante, un domaine mal configuré, un certificat expiré. Solution : checklist de déploiement.</li></ul>" },
      { id: "4-22", type: "callout", variant: "info", html: "<strong>Règle des 5 pourquoi :</strong> Quand un incident survient, demande-toi 'pourquoi' 5 fois pour remonter à la cause racine. 'Pourquoi l'app a crashé ?' > 'Parce que l'API OpenAI a timeout' > 'Pourquoi ?' > 'Parce qu'on n'a pas de timeout configuré' > etc. La cause racine est rarement le symptôme visible." },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Le protocole d'incident en 5 étapes" },
      { id: "4-6", type: "steps", steps: [
        { title: "Détecter et confirmer", description: "Les logs Vercel montrent une erreur, un client signale un bug, ou tu le découvres toi-même. Première action : confirme le problème. Reproduis-le si possible." },
        { title: "Communiquer immédiatement", description: "Préviens le client dans les 15 minutes. Dis ce que tu sais, ce que tu ne sais pas encore, et que tu es dessus. Pas de détails techniques — juste les faits." },
        { title: "Contenir le problème", description: "Si possible, rollback vers la dernière version stable avec Vercel. Si c'est un problème de données, désactive la fonctionnalité concernée plutôt que de tout couper." },
        { title: "Corriger et déployer", description: "Identifie la cause racine. Écris le fix, teste-le localement et en preview. Déploie avec un message de commit clair : fix: [description du bug]." },
        { title: "Post-mortem", description: "Après la résolution, écris un court document : que s'est-il passé, pourquoi, comment ça a été résolu, et quelles mesures préventives mettre en place." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Rollback avec Vercel" },
      { id: "4-9", type: "text", html: "<p>Vercel garde un historique de tous les déploiements. En cas de problème :</p><ol><li>Va dans le dashboard Vercel > Deployments</li><li>Trouve le dernier déploiement stable</li><li>Clique sur les 3 points > <strong>Promote to Production</strong></li></ol><p>Le rollback est instantané — pas de rebuild nécessaire. L'ancien déploiement est remis en production en quelques secondes.</p>" },

      { id: "4-23", type: "heading", level: 3, text: "Rollback vs. Hotfix : quand choisir quoi" },
      { id: "4-24", type: "comparison", headers: ["Situation", "Rollback", "Hotfix"], rows: [
        { cells: ["L'app entière est cassée", "OUI - restaure la stabilité en secondes", "Non - trop risqué de coder sous pression"] },
        { cells: ["Un bug mineur sur une feature", "Non - le rollback annulerait aussi les autres changements", "OUI - fix rapide sur une branche fix/"] },
        { cells: ["Problème de données/migration", "Dépend - le rollback de code ne rollback pas la base", "OUI - mais prépare aussi un script de rollback DB"] },
        { cells: ["Service externe down", "Inutile - le code n'est pas la cause", "OUI - ajoute un fallback/retry ou message d'erreur gracieux"] },
        { cells: ["Il est 23h et tu es fatigué", "OUI - restaure la stabilité et corrige demain matin", "Non - coder fatigué = nouveaux bugs"] },
      ]},
      { id: "4-25", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> En cas de doute, rollback d'abord, investigue ensuite. Il vaut mieux avoir une version stable un peu ancienne que de faire des changements en urgence qui aggravent le problème." },

      { id: "4-10", type: "heading", level: 2, text: "Communication client pendant un incident" },
      { id: "4-11", type: "comparison", headers: ["Message amateur", "Message pro"], rows: [
        { cells: ["'Oui y'a un bug je regarde'", "'J'ai identifié un problème sur [fonctionnalité]. Je suis dessus et je te tiens informé toutes les 30 minutes.'"] },
        { cells: ["'C'est réglé' (sans détails)", "'Le problème est résolu. Cause : [explication simple]. Mesure prise pour éviter que ça se reproduise : [action].'"] },
        { cells: ["Silence radio pendant 2h", "Updates régulières même si pas encore résolu : 'Toujours en investigation, j'ai éliminé X et Y comme causes.'"] },
      ]},

      { id: "4-26", type: "heading", level: 3, text: "Le post-mortem : apprendre de chaque incident" },
      { id: "4-27", type: "text", html: "<p>Le post-mortem est le document le plus important après un incident. Il transforme un problème en apprentissage. Voici le template :</p><pre><code>## Post-mortem : [Titre de l'incident]\n\n**Date :** 15 mars 2025\n**Durée :** 2h30 (10h15 - 12h45)\n**Impact :** Page de paiement inaccessible pour ~50 utilisateurs\n**Gravité :** Critique\n\n### Chronologie\n- 10h15 : Alerte Vercel - erreurs 500 sur /api/checkout\n- 10h20 : Confirmation du problème, rollback initié\n- 10h25 : Rollback effectif, page de paiement fonctionnelle\n- 11h00 : Cause identifiée - migration Stripe API v2023-10\n- 12h30 : Fix testé et déployé\n- 12h45 : Monitoring confirme stabilité\n\n### Cause racine\nMise à jour automatique de la librairie Stripe\nqui a changé le format de réponse de l'API.\n\n### Mesures préventives\n- [ ] Verrouiller les versions des librairies critiques\n- [ ] Ajouter des tests d'intégration sur le flow de paiement\n- [ ] Configurer des alertes sur les erreurs de paiement</code></pre>" },

      { id: "4-12", type: "heading", level: 2, text: "Maintenance préventive" },
      { id: "4-13", type: "checklist", title: "Routine de maintenance mensuelle", items: [
        { id: "c1", text: "Mettre à jour les dépendances (npm audit, npm update)" },
        { id: "c2", text: "Vérifier les logs Vercel pour les erreurs récurrentes" },
        { id: "c3", text: "Vérifier les quotas et coûts des services (Supabase, Vercel, OpenAI)" },
        { id: "c4", text: "Tester les sauvegardes de base de données (restauration)" },
        { id: "c5", text: "Renouveler/rotater les clés API si nécessaire" },
        { id: "c6", text: "Vérifier les certificats SSL et domaines" },
        { id: "c7", text: "Consulter les Core Web Vitals et optimiser si nécessaire" },
        { id: "c8", text: "Archiver les post-mortems et vérifier que les mesures préventives sont implémentées" },
      ]},

      { id: "4-14", type: "callout", variant: "tip", html: "<strong>Template post-mortem :</strong> Date, durée de l'incident, impact (combien d'utilisateurs affectés), cause racine, timeline des actions, mesures correctives. Garde un dossier pour chaque projet." },
    ]),
    exercise: "<h3>Exercice : Préparer ton plan d'incident</h3><p>Anticipe les problèmes avant qu'ils arrivent :</p><ol><li>Crée un template de post-mortem dans Notion ou un fichier Markdown</li><li>Teste le rollback Vercel : déploie une version, puis rollback vers la précédente</li><li>Prépare 3 messages types pour la communication client : alerte initiale, mise à jour, résolution</li><li>Planifie un rappel mensuel pour ta routine de maintenance</li><li>Documente les accès et contacts d'urgence pour chaque service utilisé</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la première chose à faire quand tu détectes un incident en production ?", options: JSON.stringify(["Modifier le code directement en production", "Confirmer le problème et le reproduire si possible", "Envoyer un email détaillé au client", "Supprimer le dernier déploiement"]), correctAnswer: "Confirmer le problème et le reproduire si possible", explanation: "Avant toute action, confirme que le problème est réel et essaie de le reproduire. Cela évite de paniquer sur un faux positif et te donne les informations nécessaires pour communiquer et corriger." },
      { type: "true_false", question: "Un rollback sur Vercel nécessite un nouveau build complet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Vercel garde en cache les déploiements précédents. Un rollback (Promote to Production) est instantané car il repointe simplement vers un build déjà existant." },
      { type: "mcq", question: "Combien de temps maximum devrait s'écouler avant de communiquer au client lors d'un incident ?", options: JSON.stringify(["1 heure", "15 minutes", "24 heures", "Quand le problème est résolu"]), correctAnswer: "15 minutes", explanation: "Communiquer dans les 15 minutes montre du professionnalisme. Le client préfère savoir que tu es au courant et que tu travailles dessus, même si tu n'as pas encore la solution." },
      { type: "mcq", question: "Qu'est-ce qu'un post-mortem ?", options: JSON.stringify(["Un rapport d'audit de sécurité", "Un document qui analyse un incident après sa résolution", "Un test de performance", "Un plan de déploiement"]), correctAnswer: "Un document qui analyse un incident après sa résolution", explanation: "Le post-mortem documente ce qui s'est passé, pourquoi, comment ça a été résolu et quelles mesures préventives mettre en place. C'est essentiel pour apprendre de chaque incident." },
      { type: "true_false", question: "La maintenance préventive inclut la mise à jour régulière des dépendances.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Mettre à jour les dépendances régulièrement (npm audit, npm update) corrige les failles de sécurité connues et évite d'accumuler une dette technique qui rend les mises à jour futures risquées." },
      { type: "mcq", question: "Quelle est la meilleure stratégie quand un déploiement casse la production ?", options: JSON.stringify(["Débugger en production pendant que les utilisateurs attendent", "Rollback immédiat vers la dernière version stable", "Désactiver le site complètement", "Attendre que les utilisateurs signalent le problème"]), correctAnswer: "Rollback immédiat vers la dernière version stable", explanation: "Le rollback remet la version stable en production en quelques secondes. Tu peux ensuite débugger tranquillement sur une branche, tester en preview, et redéployer quand c'est corrigé." },
    ],
  },
];
