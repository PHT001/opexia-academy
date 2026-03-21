// ═══════════════════════════════════════════════════
// MODULE 15 — DevOps & Monitoring en production
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_15_DEVOPS_LESSONS = [
  // ─── LEÇON 1 : Git avancé pour les projets clients ───
  {
    order: 1,
    module: 15,
    title: "Git avancé pour les projets clients",
    slug: "git-avance-projets-clients",
    duration: "20 min",
    description: "Maîtriser les branches, les Pull Requests et le code review pour travailler de manière professionnelle sur des projets clients.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi Git est non négociable en 2025" },
      { id: "1-2", type: "text", html: "<p>Tu codes en solo et tu fais des <code>git add . && git commit -m 'fix' && git push</code> ? C'est le moment d'arrêter. Quand tu travailles pour des clients ou en équipe, un workflow Git pro est <strong>obligatoire</strong>. Ça protège le code, facilite la collaboration, et montre ton professionnalisme.</p><p>Dans cette leçon, on va voir le workflow Git que les meilleures équipes utilisent — et que tu peux appliquer dès maintenant, même en solo.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Erreur fatale :</strong> Pousser directement sur <code>main</code> en production. Un bug ? Pas de retour en arrière possible. Toujours passer par une branche et une Pull Request." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le workflow Git Feature Branch" },
      { id: "1-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "main", description: "Branche de production, toujours stable et déployable" },
        { id: "n2", label: "feature/nom", description: "Branche pour chaque nouvelle fonctionnalité ou fix" },
        { id: "n3", label: "Pull Request", description: "Review du code avant fusion dans main" },
        { id: "n4", label: "Merge", description: "Fusion dans main après validation et tests" },
      ]},
      { id: "1-7", type: "text", html: "<p>Le principe est simple : <code>main</code> est toujours propre et déployable. Chaque fonctionnalité, bugfix ou modification passe par une branche dédiée. On ne fusionne dans main qu'après review.</p>" },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Les commandes Git essentielles" },
      { id: "1-10", type: "steps", steps: [
        { title: "Créer une branche", description: "git checkout -b feature/ajout-chatbot — Crée et switch sur une nouvelle branche. Nomme-la clairement : feature/, fix/, refactor/." },
        { title: "Commits atomiques", description: "Un commit = un changement logique. Message clair : 'feat: ajout du composant ChatWidget' ou 'fix: correction de la validation email'. Utilise les Conventional Commits." },
        { title: "Pousser et créer la PR", description: "git push -u origin feature/ajout-chatbot puis crée la Pull Request sur GitHub. Décris ce que tu as changé et pourquoi." },
        { title: "Review et merge", description: "Relis toi-même ta PR avant de demander une review. Vérifie les fichiers modifiés, les tests, les effets de bord. Merge avec 'Squash and merge' pour garder un historique propre." },
      ]},

      { id: "1-11", type: "heading", level: 2, text: "Conventional Commits : des messages qui parlent" },
      { id: "1-12", type: "comparison", headers: ["Préfixe", "Usage", "Exemple"], rows: [
        { cells: ["feat:", "Nouvelle fonctionnalité", "feat: ajout du système de notifications"] },
        { cells: ["fix:", "Correction de bug", "fix: correction du calcul de TVA"] },
        { cells: ["refactor:", "Refactoring sans changement fonctionnel", "refactor: extraction du composant Header"] },
        { cells: ["docs:", "Documentation", "docs: ajout du guide d'installation"] },
        { cells: ["chore:", "Maintenance, dépendances", "chore: mise à jour de next à 14.2"] },
      ]},
      { id: "1-13", type: "callout", variant: "tip", html: "<strong>Astuce solo :</strong> Même en solo, crée des PRs. Ça te force à relire ton code, ça crée un historique clair, et Vercel déploie automatiquement une preview pour chaque PR — parfait pour tester avant de pousser en prod." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Crée une branche <code>feature/test-workflow</code> sur ton projet. (2) Fais 3 commits avec des messages Conventional Commits. (3) Pousse et crée une Pull Request sur GitHub. (4) Relis ta propre PR, vérifie les fichiers modifiés. (5) Merge avec 'Squash and merge'.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le principe fondamental du workflow Feature Branch ?", options: JSON.stringify(["Tout le monde code sur la même branche", "Chaque fonctionnalité a sa propre branche, main reste toujours stable", "On crée une branche par développeur", "On ne fusionne jamais dans main"]), correctAnswer: "Chaque fonctionnalité a sa propre branche, main reste toujours stable", explanation: "Le workflow Feature Branch impose que main soit toujours propre et déployable. Chaque nouvelle fonctionnalité, bugfix ou modification passe par une branche dédiée qui est fusionnée dans main après review via une Pull Request." },
      { type: "true_false", question: "Il est acceptable de pousser directement sur main si on est le seul développeur du projet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Même en solo, pousser directement sur main est risqué. Un bug en prod sans possibilité de retour en arrière propre est une catastrophe. Les PRs te forcent à relire ton code et Vercel déploie automatiquement des previews pour tester." },
      { type: "mcq", question: "Quel préfixe Conventional Commits utiliser pour une correction de bug ?", options: JSON.stringify(["feat:", "fix:", "refactor:", "chore:"]), correctAnswer: "fix:", explanation: "fix: est le préfixe pour les corrections de bugs. feat: pour les nouvelles fonctionnalités, refactor: pour le refactoring sans changement fonctionnel, chore: pour la maintenance et les dépendances." },
      { type: "true_false", question: "Un commit atomique devrait contenir un seul changement logique, pas plusieurs modifications sans rapport.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un commit atomique = un changement logique. Ça rend l'historique lisible, facilite le debugging (git bisect), et permet de reverter un changement spécifique sans affecter les autres." },
      { type: "mcq", question: "Pourquoi utiliser 'Squash and merge' plutôt que 'Merge commit' sur GitHub ?", options: JSON.stringify(["C'est plus rapide à exécuter", "Ça condense tous les commits de la branche en un seul commit propre sur main", "Ça supprime automatiquement la branche", "C'est obligatoire sur GitHub"]), correctAnswer: "Ça condense tous les commits de la branche en un seul commit propre sur main", explanation: "Squash and merge fusionne tous les commits d'une branche en un seul commit sur main. L'historique de main reste propre et lisible, même si tu as fait 20 petits commits de 'wip' et 'fix typo' sur ta branche." },
    ],
  },

  // ─── LEÇON 2 : CI/CD : déploiement automatique ───
  {
    order: 2,
    module: 15,
    title: "CI/CD : déploiement automatique",
    slug: "cicd-deploiement-automatique",
    duration: "20 min",
    description: "Mettre en place GitHub Actions pour les tests automatiques et les preview deployments Vercel pour un workflow de déploiement professionnel.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "CI/CD : ton robot de déploiement" },
      { id: "2-2", type: "text", html: "<p>CI/CD signifie <strong>Continuous Integration / Continuous Deployment</strong>. En clair : à chaque push, des tests se lancent automatiquement. Si tout passe, le code est déployé automatiquement en production. Plus de déploiements manuels, plus d'oublis, plus de 'ça marchait sur ma machine'.</p>" },
      { id: "2-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Push sur GitHub", description: "Tu pousses ton code sur une branche" },
        { id: "n2", label: "GitHub Actions", description: "Tests automatiques, lint, type check" },
        { id: "n3", label: "Preview Deploy", description: "Vercel déploie une preview pour chaque PR" },
        { id: "n4", label: "Merge → main", description: "Après review et tests verts" },
        { id: "n5", label: "Production Deploy", description: "Vercel déploie automatiquement en prod" },
      ]},
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "GitHub Actions : ton premier workflow" },
      { id: "2-6", type: "text", html: "<p>GitHub Actions est un outil de CI/CD intégré à GitHub. Tu crées un fichier YAML qui décrit les étapes à exécuter à chaque push ou PR. Voici un workflow de base pour un projet Next.js :</p><pre><code># .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run type-check\n      - run: npm run build</code></pre>" },
      { id: "2-7", type: "callout", variant: "info", html: "<strong>Coût :</strong> GitHub Actions est gratuit pour les repos publics. Pour les repos privés, tu as 2000 minutes/mois gratuites. Un workflow de CI prend 2-5 minutes — ça suffit largement." },
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Preview Deployments avec Vercel" },
      { id: "2-10", type: "text", html: "<p>Vercel déploie automatiquement une <strong>preview</strong> pour chaque Pull Request. Tu reçois une URL unique (genre <code>my-app-git-feature-chatbot.vercel.app</code>) pour tester tes changements avant de merger.</p><p>C'est idéal pour :</p><ul><li><strong>Toi :</strong> Tester visuellement tes changements dans un vrai environnement</li><li><strong>Le client :</strong> Valider les nouvelles features avant la mise en prod</li><li><strong>L'équipe :</strong> Reviewer une PR en testant réellement l'app, pas juste le code</li></ul>" },

      { id: "2-11", type: "heading", level: 2, text: "Ajouter des tests dans le pipeline" },
      { id: "2-12", type: "steps", steps: [
        { title: "Lint (ESLint)", description: "Vérifie la qualité du code et les erreurs de style. npm run lint — ça prend 10 secondes et ça attrape des bugs stupides." },
        { title: "Type Check (TypeScript)", description: "Vérifie les types. npx tsc --noEmit — attrape les erreurs de type que l'IDE aurait pu manquer." },
        { title: "Build", description: "Vérifie que le projet compile. npm run build — si le build casse, tu le sais avant de déployer, pas après." },
        { title: "Tests unitaires (optionnel)", description: "Si tu as des tests avec Vitest ou Jest : npm test. Commence par tester les fonctions critiques (calculs, validation, auth)." },
      ]},
      { id: "2-13", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Ajoute un badge de statut CI dans ton README : <code>![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)</code>. Ça montre au client que tu as un process pro." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Crée le fichier <code>.github/workflows/ci.yml</code> dans ton projet avec le workflow de base (lint + type-check + build). (2) Pousse sur GitHub et vérifie que le workflow se lance dans l'onglet Actions. (3) Crée une PR avec une erreur de type volontaire et vérifie que le CI la détecte. (4) Corrige l'erreur et vérifie que le CI passe au vert.</p>",
    quiz: [
      { type: "mcq", question: "Que signifie CI/CD ?", options: JSON.stringify(["Code Integration / Code Deployment", "Continuous Integration / Continuous Deployment", "Client Interface / Client Dashboard", "Central Intelligence / Central Database"]), correctAnswer: "Continuous Integration / Continuous Deployment", explanation: "CI (Continuous Integration) = tests automatiques à chaque push. CD (Continuous Deployment) = déploiement automatique quand les tests passent. Ensemble, ils automatisent tout le pipeline de livraison." },
      { type: "true_false", question: "GitHub Actions est gratuit et illimité pour les repos privés.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "GitHub Actions est gratuit pour les repos publics. Pour les repos privés, tu as 2000 minutes/mois gratuites sur le plan gratuit. Un workflow CI de 2-5 minutes par push, ça reste largement dans les limites." },
      { type: "mcq", question: "Quel est l'avantage principal des Preview Deployments Vercel ?", options: JSON.stringify(["Ils accélèrent le build", "Ils créent une URL de test unique pour chaque PR, permettant de tester avant de merger", "Ils remplacent les tests automatiques", "Ils sont moins chers que le déploiement normal"]), correctAnswer: "Ils créent une URL de test unique pour chaque PR, permettant de tester avant de merger", explanation: "Les Preview Deployments créent une URL unique pour chaque PR. Tu peux tester visuellement, montrer au client, et l'équipe peut reviewer en testant réellement l'app — pas juste le code." },
      { type: "true_false", question: "Il est recommandé de commencer par tester les fonctions critiques (calculs, validation, auth) plutôt que de viser 100% de couverture de tests.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Viser 100% de couverture de tests dès le début est contre-productif. Commence par tester les fonctions critiques : calculs financiers, validation de données, logique d'authentification. C'est là que les bugs ont le plus d'impact." },
      { type: "mcq", question: "Ton CI GitHub Actions échoue sur l'étape 'npm run build'. Que fais-tu ?", options: JSON.stringify(["Tu désactives le CI et déploies manuellement", "Tu vérifies les logs d'erreur, corriges le bug, et pousses un fix", "Tu merge quand même car ça marchait en local", "Tu supprimes le fichier ci.yml"]), correctAnswer: "Tu vérifies les logs d'erreur, corriges le bug, et pousses un fix", explanation: "Un CI rouge = un bug détecté avant la production. C'est exactement le rôle du CI. Tu regardes les logs, tu corriges le problème, et tu pousses le fix. Ne désactive JAMAIS le CI pour contourner un bug." },
    ],
  },

  // ─── LEÇON 3 : Monitoring et alerting ───
  {
    order: 3,
    module: 15,
    title: "Monitoring et alerting",
    slug: "monitoring-alerting",
    duration: "20 min",
    description: "Mettre en place Sentry pour le tracking d'erreurs, Vercel Analytics pour les performances, et le monitoring d'uptime pour être alerté avant tes clients.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "En prod, tu ne vois rien sans monitoring" },
      { id: "3-2", type: "text", html: "<p>Ton app est en production. Un utilisateur rencontre un bug. Qu'est-ce qui se passe ? <strong>Rien.</strong> Tu ne le sais pas. Pas de notification, pas de log, rien. L'utilisateur rage, quitte l'app, et ne revient jamais.</p><p>Le monitoring, c'est tes yeux et tes oreilles en production. Sans ça, tu pilotes à l'aveugle.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Règle d'or :</strong> Tu dois savoir qu'il y a un problème AVANT que ton client t'appelle. Le monitoring te donne ce superpouvoir." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Sentry : le tracking d'erreurs" },
      { id: "3-6", type: "text", html: "<p>Sentry capture automatiquement toutes les erreurs JavaScript (côté client et serveur) et te les envoie avec le <strong>contexte complet</strong> : stack trace, navigateur, URL, utilisateur, actions précédentes. C'est comme avoir une caméra de surveillance sur ton app.</p><pre><code># Installation\nnpx @sentry/wizard@latest -i nextjs\n\n# C'est tout. Le wizard configure tout :\n# - sentry.client.config.ts\n# - sentry.server.config.ts\n# - sentry.edge.config.ts\n# - next.config.js modifié</code></pre>" },
      { id: "3-7", type: "steps", steps: [
        { title: "Erreurs automatiques", description: "Sentry capture automatiquement les erreurs non gérées, les promesses rejetées, et les crashes. Tu n'as rien à coder." },
        { title: "Erreurs manuelles", description: "Pour les erreurs gérées : Sentry.captureException(error) dans tes try/catch. Ajoute du contexte avec Sentry.setUser() et Sentry.setTag()." },
        { title: "Alertes", description: "Configure des alertes Slack ou email quand une nouvelle erreur apparaît ou quand le taux d'erreur dépasse un seuil." },
        { title: "Source Maps", description: "Le wizard configure les source maps automatiquement. Tu vois le code original (pas le code minifié) dans les stack traces." },
      ]},
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Vercel Analytics & Web Vitals" },
      { id: "3-10", type: "text", html: "<p>Vercel Analytics te donne les métriques de performance réelles de tes utilisateurs (Real User Monitoring). Tu vois les <strong>Core Web Vitals</strong> : LCP, FID, CLS — les métriques que Google utilise pour le SEO.</p><ul><li><strong>LCP (Largest Contentful Paint) :</strong> Temps d'affichage du plus gros élément. Objectif : < 2.5s</li><li><strong>FID (First Input Delay) :</strong> Temps de réponse au premier clic. Objectif : < 100ms</li><li><strong>CLS (Cumulative Layout Shift) :</strong> Stabilité visuelle de la page. Objectif : < 0.1</li></ul><p>Active-le en un clic dans le dashboard Vercel > Analytics > Enable.</p>" },

      { id: "3-11", type: "heading", level: 2, text: "Uptime Monitoring" },
      { id: "3-12", type: "text", html: "<p>L'uptime monitoring vérifie régulièrement que ton site est accessible. Si ton app tombe, tu reçois une alerte <strong>en quelques secondes</strong> — pas quand ton client t'envoie un message furieux 3 heures plus tard.</p>" },
      { id: "3-13", type: "comparison", headers: ["Outil", "Plan gratuit", "Fréquence de check", "Idéal pour"], rows: [
        { cells: ["UptimeRobot", "50 monitors", "5 min", "Projets perso et petits clients"] },
        { cells: ["Better Uptime", "10 monitors", "3 min", "Clients pro avec status page"] },
        { cells: ["Vercel Checks", "Inclus", "À chaque deploy", "Vérification post-déploiement"] },
      ]},
      { id: "3-14", type: "callout", variant: "tip", html: "<strong>Stack recommandée :</strong> Sentry (erreurs) + Vercel Analytics (performance) + UptimeRobot (disponibilité). Le tout en gratuit. Tu couvres 90% des besoins de monitoring." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Installe Sentry sur ton projet avec <code>npx @sentry/wizard@latest -i nextjs</code>. (2) Crée une erreur volontaire (throw new Error('Test Sentry')) et vérifie qu'elle apparaît dans le dashboard Sentry. (3) Active Vercel Analytics dans le dashboard. (4) Crée un monitor UptimeRobot pour l'URL de ton app de prod.</p>",
    quiz: [
      { type: "mcq", question: "Que capture Sentry automatiquement sans code supplémentaire ?", options: JSON.stringify(["Uniquement les console.log", "Les erreurs non gérées, les promesses rejetées et les crashes", "Les requêtes SQL lentes", "Le trafic réseau entrant"]), correctAnswer: "Les erreurs non gérées, les promesses rejetées et les crashes", explanation: "Sentry capture automatiquement toutes les erreurs non gérées (throw sans catch), les promesses rejetées, et les crashes côté client et serveur. Pour les erreurs gérées dans un try/catch, tu utilises Sentry.captureException()." },
      { type: "true_false", question: "Tu dois savoir qu'il y a un problème AVANT que ton client t'appelle.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est la règle d'or du monitoring. Si ton client te signale un bug que tu n'as pas détecté, tu perds en crédibilité. Le monitoring (Sentry + UptimeRobot) te permet d'être proactif et de corriger avant que ça impacte les utilisateurs." },
      { type: "mcq", question: "Quel Core Web Vital mesure le temps d'affichage du plus gros élément de la page ?", options: JSON.stringify(["FID (First Input Delay)", "CLS (Cumulative Layout Shift)", "LCP (Largest Contentful Paint)", "TTFB (Time to First Byte)"]), correctAnswer: "LCP (Largest Contentful Paint)", explanation: "LCP mesure le temps d'affichage du plus gros élément visible (image, vidéo, bloc de texte). L'objectif est un LCP inférieur à 2.5 secondes. C'est un des Core Web Vitals utilisés par Google pour le SEO." },
      { type: "true_false", question: "La stack Sentry + Vercel Analytics + UptimeRobot est entièrement payante.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les trois outils ont des plans gratuits généreux : Sentry (5K erreurs/mois), Vercel Analytics (inclus), UptimeRobot (50 monitors). C'est suffisant pour la plupart des projets freelance et petites agences." },
      { type: "mcq", question: "Ton app en production renvoie un écran blanc pour certains utilisateurs mais tu ne reçois aucune alerte. Quel outil te manque ?", options: JSON.stringify(["Un CDN plus rapide", "Sentry pour capturer les erreurs JavaScript côté client", "Un serveur plus puissant", "Un meilleur framework CSS"]), correctAnswer: "Sentry pour capturer les erreurs JavaScript côté client", explanation: "Un écran blanc est souvent causé par une erreur JavaScript non gérée côté client. Sans Sentry, ces erreurs sont silencieuses — elles se passent dans le navigateur de l'utilisateur et tu ne les vois pas. Sentry les capture et te les envoie avec tout le contexte nécessaire." },
    ],
  },

  // ─── LEÇON 4 : Gérer les incidents en prod ───
  {
    order: 4,
    module: 15,
    title: "Gérer les incidents en production",
    slug: "gerer-incidents-production",
    duration: "15 min",
    description: "Diagnostic rapide, fix en urgence, communication client, et post-mortem — la méthode complète pour gérer les crises en production sans paniquer.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Les incidents arrivent. Point." },
      { id: "4-2", type: "text", html: "<p>Ce n'est pas une question de <em>si</em> mais de <em>quand</em>. Même les meilleurs développeurs et les plus grandes entreprises ont des incidents en production. Ce qui fait la différence entre un amateur et un pro, c'est <strong>comment tu réagis</strong>.</p><p>Un incident bien géré peut même <strong>renforcer la confiance</strong> du client. Un incident mal géré peut tuer la relation.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Mindset :</strong> Pas de panique. Pas de blame. Diagnostiquer → Corriger → Communiquer → Apprendre. Dans cet ordre." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "La méthode DCCL en 4 étapes" },
      { id: "4-6", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Diagnostiquer", description: "Identifier la cause : Sentry, logs, reproduire le bug" },
        { id: "n2", label: "Corriger", description: "Fix rapide ou rollback si critique" },
        { id: "n3", label: "Communiquer", description: "Informer le client avec transparence" },
        { id: "n4", label: "Learn (Apprendre)", description: "Post-mortem pour éviter que ça se reproduise" },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Étape 1 : Diagnostic rapide" },
      { id: "4-9", type: "steps", steps: [
        { title: "Vérifier Sentry", description: "Première chose : ouvre Sentry. Tu y trouveras l'erreur exacte, la stack trace, le navigateur, l'URL, et les actions de l'utilisateur avant le crash." },
        { title: "Vérifier les logs Vercel", description: "Dashboard Vercel > Deployments > Function Logs. Tu vois les erreurs serveur en temps réel." },
        { title: "Vérifier le dernier déploiement", description: "Le bug est apparu après un déploiement ? Vérifie le diff du dernier merge sur GitHub. 80% des incidents sont liés au dernier changement." },
        { title: "Reproduire le bug", description: "Essaie de reproduire le bug en local. Si tu peux le reproduire, tu peux le fixer." },
      ]},

      { id: "4-10", type: "heading", level: 2, text: "Étape 2 : Correction" },
      { id: "4-11", type: "comparison", headers: ["Sévérité", "Action", "Délai"], rows: [
        { cells: ["Critique (app down)", "Rollback immédiat sur Vercel", "< 5 minutes"] },
        { cells: ["Élevé (fonctionnalité cassée)", "Hotfix sur branche, PR rapide, merge", "< 1 heure"] },
        { cells: ["Moyen (bug mineur)", "Fix normal via le workflow standard", "< 24 heures"] },
        { cells: ["Faible (cosmétique)", "Prioriser dans le backlog", "Prochain sprint"] },
      ]},
      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Rollback Vercel :</strong> Tu peux redéployer n'importe quelle version précédente en un clic dans Dashboard > Deployments > ... > Promote to Production. C'est le fix le plus rapide possible." },

      { id: "4-13", type: "heading", level: 2, text: "Étape 3 : Communication client" },
      { id: "4-14", type: "text", html: "<p>La communication pendant un incident est <strong>cruciale</strong>. Voici le template :</p><ol><li><strong>Accusé de réception :</strong> 'On a identifié le problème, on est dessus.' (5 min après la détection)</li><li><strong>Mise à jour :</strong> 'La cause est identifiée : [explication simple]. Le fix est en cours.' (30 min après)</li><li><strong>Résolution :</strong> 'Le problème est résolu. Voici ce qui s'est passé et ce qu'on met en place pour que ça ne se reproduise pas.' (après le fix)</li></ol><p><strong>Règles :</strong> Sois transparent, ne blame personne, donne des délais réalistes, et ne promets pas que ça n'arrivera plus — promets que tu mets en place des mesures.</p>" },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Simule un incident : introduis un bug volontaire dans ton app de prod (ou staging). (2) Suis la méthode DCCL : diagnostique via Sentry/logs, corrige avec un hotfix, rédige le message client. (3) Fais un rollback Vercel vers la version précédente. (4) Rédige un post-mortem de 5 lignes : quoi, pourquoi, impact, fix, prévention.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le bon ordre de gestion d'un incident en production ?", options: JSON.stringify(["Communiquer → Diagnostiquer → Corriger → Apprendre", "Diagnostiquer → Corriger → Communiquer → Apprendre", "Corriger → Communiquer → Diagnostiquer → Apprendre", "Apprendre → Diagnostiquer → Corriger → Communiquer"]), correctAnswer: "Diagnostiquer → Corriger → Communiquer → Apprendre", explanation: "La méthode DCCL : Diagnostiquer (comprendre la cause), Corriger (fix ou rollback), Communiquer (informer le client avec transparence), Learn/Apprendre (post-mortem pour éviter la récidive)." },
      { type: "true_false", question: "80% des incidents en production sont liés au dernier changement déployé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La grande majorité des incidents sont causés par le dernier déploiement. C'est pourquoi vérifier le diff du dernier merge sur GitHub est une des premières choses à faire lors du diagnostic." },
      { type: "mcq", question: "Quelle est l'action la plus rapide face à un incident critique (app complètement down) ?", options: JSON.stringify(["Créer une branche hotfix et faire un PR", "Faire un rollback Vercel vers le déploiement précédent", "Analyser les logs pendant 30 minutes pour comprendre", "Envoyer un email au client pour expliquer"]), correctAnswer: "Faire un rollback Vercel vers le déploiement précédent", explanation: "Le rollback Vercel est le fix le plus rapide : un clic dans Dashboard > Deployments pour redéployer la version précédente. Ça prend moins de 5 minutes et ça remet l'app en état de marche immédiatement." },
      { type: "true_false", question: "Lors de la communication client pendant un incident, il faut promettre que le problème ne se reproduira jamais.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ne promets jamais que ça n'arrivera plus — c'est irréaliste. Promets plutôt que tu mets en place des mesures concrètes pour réduire le risque : meilleurs tests, monitoring renforcé, processus de review." },
      { type: "mcq", question: "Un client t'envoie un message : 'L'app ne marche plus !' à 22h. Quelle est ta première réponse ?", options: JSON.stringify(["Tu ne réponds pas avant le lendemain matin", "Tu réponds immédiatement 'On a identifié le problème, on est dessus' puis tu diagnostiques", "Tu paniques et tu push un fix sans tester", "Tu blâmes l'hébergeur"]), correctAnswer: "Tu réponds immédiatement 'On a identifié le problème, on est dessus' puis tu diagnostiques", explanation: "La première étape est l'accusé de réception rapide (dans les 5 minutes). Le client doit savoir que tu es au courant et que tu gères. Ensuite tu diagnostiques calmement avec Sentry et les logs Vercel." },
    ],
  },

  // ─── LEÇON 5 : Maintenance et mises à jour ───
  {
    order: 5,
    module: 15,
    title: "Maintenance et mises à jour",
    slug: "maintenance-mises-a-jour",
    duration: "15 min",
    description: "Gérer les dépendances, les migrations Supabase et le versioning proprement. Et surtout : comment facturer la maintenance à tes clients.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "La maintenance n'est pas gratuite" },
      { id: "5-2", type: "text", html: "<p>Beaucoup de freelances livrent un projet et disparaissent. Résultat : 6 mois plus tard, les dépendances sont obsolètes, les failles de sécurité s'accumulent, et le client est bloqué. La maintenance est un <strong>service à part entière</strong> — et c'est du revenu récurrent.</p><p>Un contrat de maintenance, c'est entre <strong>200€ et 1000€/mois</strong> selon la taille du projet. C'est de l'argent qui rentre chaque mois sans prospection.</p>" },
      { id: "5-3", type: "callout", variant: "tip", html: "<strong>Business tip :</strong> Propose systématiquement un contrat de maintenance à la livraison du projet. 80% des clients acceptent car ils ne veulent pas se retrouver coincés avec un projet non maintenu." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Gestion des dépendances npm" },
      { id: "5-6", type: "text", html: "<p>Tes dépendances npm vieillissent. De nouvelles versions sortent avec des corrections de bugs, des améliorations de performance et des patchs de sécurité. Ne pas les mettre à jour, c'est accumuler de la <strong>dette technique</strong> et des vulnérabilités.</p><pre><code># Voir les dépendances obsolètes\nnpm outdated\n\n# Mettre à jour les patchs (sûr)\nnpm update\n\n# Mettre à jour les mineures/majeures (attention)\nnpx npm-check-updates -u\nnpm install\n\n# Toujours tester après mise à jour\nnpm run build && npm run lint</code></pre>" },
      { id: "5-7", type: "callout", variant: "warning", html: "<strong>Règle :</strong> Ne fais JAMAIS de mise à jour majeure (ex: Next.js 14 → 15) en production directement. Crée une branche, teste, vérifie les breaking changes dans le changelog, et merge quand tout est stable." },
      { id: "5-8", type: "separator", style: "line" },

      { id: "5-9", type: "heading", level: 2, text: "Migrations Supabase" },
      { id: "5-10", type: "text", html: "<p>Quand tu modifies le schéma de ta base de données (ajouter une colonne, changer un type, créer une table), tu dois créer une <strong>migration</strong>. C'est un fichier SQL qui documente le changement et peut être rejoué sur n'importe quel environnement.</p><pre><code># Créer une migration\nsupabase migration new add_status_to_projects\n\n# Le fichier est créé dans :\n# supabase/migrations/[timestamp]_add_status_to_projects.sql\n\n# Appliquer les migrations\nsupabase db push\n\n# Vérifier le statut\nsupabase migration list</code></pre>" },
      { id: "5-11", type: "steps", steps: [
        { title: "Règle 1 : Ne jamais modifier la prod à la main", description: "Tous les changements de schéma passent par des migrations. Pas de ALTER TABLE dans le SQL Editor de production." },
        { title: "Règle 2 : Tester en local d'abord", description: "Utilise supabase start pour lancer une instance locale. Applique ta migration en local, teste, puis pousse en prod." },
        { title: "Règle 3 : Migrations réversibles", description: "Écris aussi le SQL de rollback (DOWN) pour chaque migration. Si ça casse en prod, tu peux revenir en arrière." },
      ]},

      { id: "5-12", type: "heading", level: 2, text: "Comment facturer la maintenance" },
      { id: "5-13", type: "comparison", headers: ["Formule", "Prix indicatif", "Inclus"], rows: [
        { cells: ["Maintenance basique", "200-400€/mois", "Mises à jour dépendances, monitoring, 2h de support"] },
        { cells: ["Maintenance standard", "400-700€/mois", "Basique + corrections de bugs, 5h de support, rapport mensuel"] },
        { cells: ["Maintenance premium", "700-1000€/mois", "Standard + évolutions mineures, 10h de support, SLA 24h"] },
      ]},
      { id: "5-14", type: "text", html: "<p>Le contrat de maintenance se présente comme un <strong>abonnement mensuel</strong>. Le client paie chaque mois et toi tu garantis que son app reste à jour, sécurisée et fonctionnelle. C'est win-win : le client a l'esprit tranquille, et toi tu as du revenu récurrent prévisible.</p>" },
      { id: "5-15", type: "callout", variant: "success", html: "<strong>Objectif :</strong> 5 clients en maintenance standard à 500€/mois = <strong>2500€/mois de revenu récurrent</strong>. C'est ton filet de sécurité qui te permet de prendre des risques sur de nouveaux projets." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Lance <code>npm outdated</code> sur ton projet et note les dépendances obsolètes. (2) Crée une branche <code>chore/update-deps</code>, mets à jour les dépendances, teste (build + lint). (3) Crée une migration Supabase (même fictive) pour t'entraîner au workflow. (4) Rédige une offre de maintenance en 3 formules (basique, standard, premium) avec les prix et le contenu de chaque formule.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi ne faut-il jamais modifier le schéma de la base de données de production à la main ?", options: JSON.stringify(["Parce que c'est plus lent", "Parce que les changements ne sont pas documentés, non reproductibles et impossibles à rollback", "Parce que Supabase l'interdit", "Parce que ça coûte plus cher"]), correctAnswer: "Parce que les changements ne sont pas documentés, non reproductibles et impossibles à rollback", explanation: "Un ALTER TABLE fait à la main dans le SQL Editor de prod n'est pas versionné, pas reproductible dans les autres environnements, et impossible à annuler proprement. Les migrations résolvent ces 3 problèmes." },
      { type: "true_false", question: "Un contrat de maintenance est du revenu récurrent qui ne nécessite pas de prospection.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La maintenance est un abonnement mensuel. Une fois le contrat signé, l'argent rentre chaque mois sans avoir à chercher de nouveaux clients. 5 clients à 500€/mois = 2500€/mois de revenu récurrent prévisible." },
      { type: "mcq", question: "Quelle commande permet de voir les dépendances npm obsolètes ?", options: JSON.stringify(["npm list", "npm outdated", "npm audit", "npm check"]), correctAnswer: "npm outdated", explanation: "npm outdated liste toutes les dépendances qui ont des versions plus récentes disponibles, en montrant la version actuelle, la version voulue (compatible semver) et la dernière version." },
      { type: "true_false", question: "Il est sûr de faire une mise à jour majeure de Next.js (ex: 14 → 15) directement en production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les mises à jour majeures contiennent des breaking changes qui peuvent casser ton app. Toujours créer une branche, lire le changelog, tester (build + lint + fonctionnel), et merger quand tout est stable." },
      { type: "mcq", question: "Tu livres un projet chatbot IA à un client. Il te demande 'Et après, qui s'en occupe ?'. Quelle est la meilleure réponse ?", options: JSON.stringify(["'C'est livré, débrouillez-vous'", "'Je vous propose un contrat de maintenance mensuel qui inclut les mises à jour, le monitoring et le support'", "'Rappelez-moi quand ça casse'", "'Trouvez un autre développeur pour la maintenance'"]), correctAnswer: "'Je vous propose un contrat de maintenance mensuel qui inclut les mises à jour, le monitoring et le support'", explanation: "La maintenance est un service professionnel à proposer systématiquement. 80% des clients acceptent car ils ne veulent pas se retrouver sans support. C'est du revenu récurrent prévisible pour toi et de la tranquillité d'esprit pour le client." },
    ],
  },
];
