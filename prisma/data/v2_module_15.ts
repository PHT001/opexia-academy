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
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le workflow Feature Branch" },
      { id: "1-6", type: "steps", steps: [
        { title: "Créer une branche feature", description: "Pour chaque nouvelle fonctionnalité ou fix, crée une branche depuis main : git checkout -b feature/nom-de-la-feature. Utilise des préfixes : feature/, fix/, refactor/, chore/." },
        { title: "Développer sur ta branche", description: "Fais tes commits sur la branche feature. Commite souvent avec des messages clairs. N'hésite pas à faire des petits commits atomiques." },
        { title: "Pusher et créer une Pull Request", description: "Push ta branche sur GitHub : git push -u origin feature/nom. Crée une Pull Request (PR) avec un titre clair et une description de ce qui a changé." },
        { title: "Review et merger", description: "Relis ton code (ou fais-le relire par un collaborateur). Vérifie que les tests passent. Merge la PR dans main via l'interface GitHub." },
        { title: "Nettoyer", description: "Après le merge, supprime la branche feature localement et sur GitHub : git branch -d feature/nom && git push origin --delete feature/nom." },
      ]},
      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Les conventions de commits" },
      { id: "1-9", type: "text", html: "<p>Des messages de commit cohérents rendent l'historique lisible. Utilise la convention <strong>Conventional Commits</strong> :</p><pre><code>feat: ajouter le système de notifications\nfix: corriger le bug de connexion sur mobile\nrefactor: simplifier la logique du panier\nchore: mettre à jour les dépendances\ndocs: ajouter la documentation API\nstyle: reformater le fichier header.tsx\ntest: ajouter les tests du module paiement</code></pre>" },

      { id: "1-10", type: "heading", level: 2, text: "Les commandes Git essentielles" },
      { id: "1-11", type: "comparison", headers: ["Commande", "Usage"], rows: [
        { cells: ["git stash", "Mettre de côté des changements non commités temporairement"] },
        { cells: ["git rebase main", "Remettre ta branche à jour avec les derniers changements de main"] },
        { cells: ["git cherry-pick <hash>", "Appliquer un commit spécifique sur ta branche actuelle"] },
        { cells: ["git log --oneline --graph", "Visualiser l'historique des commits de façon compacte"] },
        { cells: ["git reset --soft HEAD~1", "Annuler le dernier commit en gardant les changements"] },
      ]},

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
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "GitHub Actions : ton pipeline CI" },
      { id: "2-6", type: "text", html: "<p>GitHub Actions te permet de définir des workflows automatiques dans des fichiers YAML. Voici un pipeline CI de base pour un projet Next.js :</p><pre><code># .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run build\n      - run: npm test</code></pre>" },
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Les étapes clés d'un bon pipeline" },
      { id: "2-9", type: "steps", steps: [
        { title: "Install", description: "npm ci installe les dépendances exactes du package-lock.json. Plus rapide et déterministe que npm install." },
        { title: "Lint", description: "ESLint vérifie la qualité du code. TypeScript vérifie les types. Si un développeur a introduit une erreur de type, le pipeline le bloque." },
        { title: "Build", description: "Vérifie que le projet compile sans erreur. Détecte les imports manquants, les erreurs de syntaxe, les problèmes de configuration." },
        { title: "Test", description: "Exécute les tests unitaires et d'intégration. Si un test échoue, la PR est bloquée et ne peut pas être mergée." },
      ]},

      { id: "2-10", type: "heading", level: 2, text: "Preview deployments avec Vercel" },
      { id: "2-11", type: "text", html: "<p>Chaque PR crée automatiquement un <strong>preview deployment</strong> sur Vercel — une URL unique qui permet de tester les changements avant le merge. C'est extrêmement utile pour :</p><ul><li>Montrer une feature au client avant de la mettre en production</li><li>Tester sur mobile sans déployer en prod</li><li>Permettre à un collaborateur de tester visuellement ta PR</li></ul>" },

      { id: "2-12", type: "comparison", headers: ["Environnement", "Déclencheur", "URL"], rows: [
        { cells: ["Production", "Push sur main", "monapp.vercel.app"] },
        { cells: ["Preview", "Chaque PR", "monapp-git-feature-xxx.vercel.app"] },
        { cells: ["Development", "Local", "localhost:3000"] },
      ]},

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
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Les outils de monitoring intégrés à Vercel" },
      { id: "3-6", type: "steps", steps: [
        { title: "Vercel Logs (Runtime Logs)", description: "Dans le dashboard Vercel, va dans ton projet > Logs. Tu vois en temps réel toutes les requêtes, les erreurs serveur (API Routes, middleware) et les logs console.log/console.error. Filtre par statut (erreurs 4xx/5xx), par route ou par période." },
        { title: "Vercel Analytics (Web Analytics)", description: "Active Web Analytics dans les settings du projet. Tu obtiens : nombre de visiteurs, pages vues, pays, navigateurs — sans aucun script externe et sans cookies. Conforme RGPD par défaut." },
        { title: "Speed Insights", description: "Active Speed Insights pour mesurer les Core Web Vitals en production : LCP, FID, CLS. Tu vois les performances réelles de tes utilisateurs, pas celles de ton MacBook en local." },
        { title: "Configurer les notifications", description: "Dans les settings Vercel > Notifications, configure des alertes email pour les déploiements échoués et les erreurs runtime. Tu es prévenu dès que quelque chose casse en production." },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Ce que les logs Vercel te montrent" },
      { id: "3-9", type: "text", html: "<p>Les Runtime Logs de Vercel capturent automatiquement :</p><ul><li><strong>Erreurs serveur :</strong> crashes dans les API Routes, erreurs de middleware, timeouts de fonctions serverless</li><li><strong>Requêtes HTTP :</strong> chaque requête avec son statut (200, 404, 500), sa durée et la route concernée</li><li><strong>Logs custom :</strong> tout ce que tu écris avec console.log() ou console.error() dans ton code serveur</li><li><strong>Performance :</strong> durée d'exécution de chaque fonction serverless, cold starts détectés</li></ul>" },

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
        { id: "c4", text: "Console.error() ajoutés dans les API Routes critiques" },
        { id: "c5", text: "Test de vérification : déclencher une erreur et la retrouver dans les logs" },
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

      { id: "4-10", type: "heading", level: 2, text: "Communication client pendant un incident" },
      { id: "4-11", type: "comparison", headers: ["Message amateur", "Message pro"], rows: [
        { cells: ["'Oui y'a un bug je regarde'", "'J'ai identifié un problème sur [fonctionnalité]. Je suis dessus et je te tiens informé toutes les 30 minutes.'"] },
        { cells: ["'C'est réglé' (sans détails)", "'Le problème est résolu. Cause : [explication simple]. Mesure prise pour éviter que ça se reproduise : [action].'"] },
        { cells: ["Silence radio pendant 2h", "Updates régulières même si pas encore résolu : 'Toujours en investigation, j'ai éliminé X et Y comme causes.'"] },
      ]},

      { id: "4-12", type: "heading", level: 2, text: "Maintenance préventive" },
      { id: "4-13", type: "checklist", title: "Routine de maintenance mensuelle", items: [
        { id: "c1", text: "Mettre à jour les dépendances (npm audit, npm update)" },
        { id: "c2", text: "Vérifier les logs Vercel pour les erreurs récurrentes" },
        { id: "c3", text: "Vérifier les quotas et coûts des services (Supabase, Vercel, OpenAI)" },
        { id: "c4", text: "Tester les sauvegardes de base de données (restauration)" },
        { id: "c5", text: "Renouveler/rotater les clés API si nécessaire" },
        { id: "c6", text: "Vérifier les certificats SSL et domaines" },
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
