// Phase 9 : Module 3 — Claude Code : Maîtriser le Vibe Coding

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 3 : Claude Code — Maîtriser le Vibe Coding
  // ═══════════════════════════════════════════════════
  {
    order: 102,
    module: 3,
    title: "Qu'est-ce que le vibe coding et pourquoi ça change tout",
    slug: "vibe-coding-pourquoi-ca-change-tout",
    duration: "45 min",
    description: "Comprendre le vibe coding, pourquoi Claude Code est l'outil ultime, et le changement de mindset nécessaire.",
    content: `<h2>Le vibe coding : coder sans coder</h2>
<p>Le vibe coding, c'est une révolution silencieuse. Le concept est simple : au lieu d'écrire chaque ligne de code toi-même, tu décris ce que tu veux construire en langage naturel et une IA le construit pour toi. Tu donnes la direction, l'intention, le "vibe" — et l'IA traduit ça en code fonctionnel. C'est comme avoir un développeur senior à côté de toi 24h/24, sauf qu'il ne dort jamais, ne râle jamais et ne facture pas 600€ la journée.</p>
<p>Le terme a été popularisé par Andrej Karpathy, cofondateur d'OpenAI et ancien directeur IA de Tesla. Sa définition : "Tu te laisses porter par le vibe, tu décris ce que tu veux, tu acceptes le code, tu lances l'app, et si ça ne marche pas, tu colles l'erreur et tu demandes de corriger." C'est exactement ça. Pas besoin de connaître la syntaxe exacte de Python ou JavaScript. Pas besoin de mémoriser des centaines de fonctions. Tu as besoin de savoir ce que tu veux construire et comment le décrire clairement.</p>
<p>Pour notre génération, c'est un game-changer absolu. Il y a 5 ans, lancer une app demandait 6 mois de développement et 50 000€ de budget. Aujourd'hui, avec le vibe coding, tu peux construire un MVP fonctionnel en un week-end pour le prix d'un abonnement API. La barrière technique a été pulvérisée. Ce qui compte désormais, c'est ta capacité à avoir des bonnes idées et à les exprimer clairement.</p>

<h2>Pourquoi Claude Code est le meilleur outil de vibe coding</h2>
<p>Il existe plusieurs outils de vibe coding : Cursor, GitHub Copilot, Bolt, Lovable, Windsurf, Replit Agent... Alors pourquoi choisir Claude Code ? Parce que c'est le seul qui fonctionne comme un vrai développeur autonome dans ton terminal.</p>
<p>Voici ce qui rend Claude Code unique :</p>
<ul>
<li><strong>Accès direct au système de fichiers</strong> : Claude Code lit, crée et modifie tes fichiers directement. Pas besoin de copier-coller du code d'un chat vers ton éditeur. Il travaille directement dans ton projet, comme un collègue qui aurait accès à ton repo.</li>
<li><strong>Exécution de commandes</strong> : Il peut lancer des commandes terminal — installer des dépendances, démarrer un serveur, exécuter des tests. C'est un assistant full-stack qui ne se contente pas de suggérer du code, il le met en place.</li>
<li><strong>Compréhension contextuelle profonde</strong> : Claude Code analyse l'ensemble de ton projet avant d'agir. Il comprend ton architecture, tes conventions, tes dépendances existantes. Il ne code pas dans le vide — il code dans TON contexte.</li>
<li><strong>Modèle Claude</strong> : Le modèle d'Anthropic derrière Claude Code est reconnu comme l'un des meilleurs pour le raisonnement complexe et la génération de code. Il comprend les nuances, les edge cases, et produit du code propre et bien structuré.</li>
<li><strong>Interface CLI native</strong> : Pas de navigateur, pas d'interface web lente. Juste ton terminal. C'est rapide, léger, et ça s'intègre naturellement dans un workflow de développeur pro.</li>
</ul>
<p>La différence fondamentale avec les éditeurs IA comme Cursor, c'est que Claude Code est agentic : il ne se contente pas de compléter tes lignes de code, il prend des initiatives, planifie des étapes, et exécute des actions complexes de bout en bout. Tu lui dis "crée-moi une API REST avec authentification JWT", et il crée les fichiers, installe les packages, configure les routes, génère les middlewares, et lance les tests.</p>

<h2>Le changement de mindset : de développeur à architecte</h2>
<p>Le vibe coding demande un changement de mentalité radical. Tu passes de "celui qui écrit le code" à "celui qui dirige le code". Ton rôle n'est plus d'écrire des boucles for et des requêtes SQL — c'est de définir la vision, l'architecture, et les critères de qualité.</p>
<p>Concrètement, tes nouvelles compétences clés sont :</p>
<ul>
<li><strong>Savoir décrire clairement ce que tu veux</strong> : C'est le skill numéro 1. Plus ta description est précise, meilleur sera le résultat. "Fais-moi un site" donnera un résultat médiocre. "Crée une landing page avec un hero section qui a un titre en gras, un sous-titre, un CTA orange, et un formulaire email — style minimaliste, responsive, avec Tailwind CSS" donnera un résultat excellent.</li>
<li><strong>Comprendre l'architecture logicielle</strong> : Tu n'as pas besoin de savoir coder chaque fonction, mais tu dois comprendre comment les pièces s'assemblent. Frontend, backend, base de données, API, authentification — tu dois savoir ce que ces briques font et comment elles communiquent.</li>
<li><strong>Savoir lire du code (pas l'écrire)</strong> : Quand Claude Code génère du code, tu dois pouvoir le relire et valider que c'est logique. Tu n'as pas besoin de comprendre chaque ligne, mais tu dois pouvoir repérer si quelque chose est manifestement faux.</li>
<li><strong>Itérer rapidement</strong> : Le vibe coding fonctionne par cycles rapides : décrire → générer → tester → corriger → améliorer. Plus tu itères vite, plus tu avances vite. Ne cherche pas la perfection au premier essai — cherche un premier résultat fonctionnel, puis raffine.</li>
</ul>
<p>Pense à toi comme un réalisateur de film. Tu ne tiens pas la caméra, tu ne joues pas les scènes, tu ne montes pas les rushes. Mais tu donnes la direction artistique, tu valides chaque prise, et tu t'assures que le résultat final correspond à ta vision. Le vibe coding, c'est exactement ça : tu es le réalisateur, Claude Code est ton équipe technique.</p>

<h2>Ce que tu vas construire avec cette compétence</h2>
<p>Avec le vibe coding maîtrisé, voici ce que tu pourras créer en quelques heures au lieu de quelques semaines :</p>
<ul>
<li><strong>Des SaaS complets</strong> : Applications web avec authentification, dashboard, paiement Stripe, admin panel. Le genre de projet qui coûtait 20 000€ en agence, tu le fais en un week-end.</li>
<li><strong>Des automatisations sur mesure</strong> : Bots, scrapers, pipelines de données, intégrations API. Tout ce qui est répétitif et technique, Claude Code le construit pour toi.</li>
<li><strong>Des apps mobiles</strong> : Avec React Native ou Flutter, tu peux créer des apps iOS et Android sans jamais ouvrir Xcode ou Android Studio.</li>
<li><strong>Des outils internes</strong> : Dashboards, CRM custom, outils de gestion — les outils que les entreprises paient des fortunes, tu les construis sur mesure en quelques jours.</li>
<li><strong>Des prototypes pour lever des fonds</strong> : Un MVP fonctionnel est le meilleur pitch deck. Au lieu de montrer des slides, tu montres un produit qui marche.</li>
</ul>
<p>Le vibe coding n'est pas un gadget — c'est une compétence fondamentale pour la prochaine décennie. Ceux qui la maîtrisent auront un avantage compétitif massif. Et ça commence maintenant, dans les prochaines leçons.</p>`,
    exercise: `<ol>
<li>Fais une liste de 5 apps ou outils que tu aimerais construire. Pour chacun, écris une description en 3 phrases maximum de ce que l'app fait, pour qui, et quel problème elle résout. L'objectif est d'entraîner ta capacité à formuler une vision claire.</li>
<li>Compare 3 outils de vibe coding (Claude Code, Cursor, Bolt) en testant leurs versions gratuites ou démos. Note les avantages et limites de chacun dans un tableau comparatif.</li>
<li>Prends un projet que tu as déjà réalisé (site web, script, automatisation) et rédige le prompt que tu aurais donné à Claude Code pour le construire de zéro. Sois le plus précis possible sur le résultat attendu.</li>
</ol>`,
  },
  {
    order: 103,
    module: 3,
    title: "Installer et configurer Claude Code",
    slug: "installer-configurer-claude-code",
    duration: "50 min",
    description: "Installation pas à pas de Claude Code, configuration du terminal, clé API et premiers échanges.",
    content: `<h2>Prérequis : ce dont tu as besoin avant de commencer</h2>
<p>Avant d'installer Claude Code, vérifie que tu as ces éléments en place. Ça prend 10 minutes et ça t'évitera des galères inutiles :</p>
<ul>
<li><strong>Node.js (version 18 ou supérieure)</strong> : Claude Code s'installe via npm, le gestionnaire de packages de Node.js. Va sur <code>nodejs.org</code>, télécharge la version LTS (Long Term Support), et installe-la. Pour vérifier que c'est bon, ouvre ton terminal et tape <code>node --version</code>. Tu dois voir un numéro comme <code>v20.11.0</code>.</li>
<li><strong>Un terminal moderne</strong> : Sur Mac, utilise le Terminal natif ou iTerm2. Sur Windows, utilise Windows Terminal (installable gratuitement depuis le Microsoft Store) ou Git Bash. Sur Linux, ton terminal par défaut est parfait. Évite les vieux terminaux comme cmd.exe sur Windows — ils ne gèrent pas bien les couleurs et les caractères spéciaux de Claude Code.</li>
<li><strong>Un éditeur de code</strong> : VS Code est le choix recommandé. Il est gratuit, puissant, et s'intègre parfaitement avec le terminal intégré. Tu pourras voir en temps réel les fichiers que Claude Code crée et modifie.</li>
<li><strong>Un compte Anthropic avec crédits API</strong> : Va sur <code>console.anthropic.com</code>, crée un compte, et ajoute des crédits. Le modèle Claude utilisé par Claude Code consomme des tokens à chaque interaction. Prévois 10 à 20€ de crédits pour commencer — ça te permettra des dizaines d'heures de travail.</li>
</ul>

<h2>Installation de Claude Code étape par étape</h2>
<p>L'installation est ultra simple. Ouvre ton terminal et lance cette commande :</p>
<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
<p>Le flag <code>-g</code> installe Claude Code globalement sur ta machine, ce qui veut dire que tu pourras l'utiliser depuis n'importe quel dossier. L'installation prend généralement 30 secondes à 2 minutes selon ta connexion internet.</p>
<p>Une fois installé, vérifie que tout est en place :</p>
<pre><code>claude --version</code></pre>
<p>Tu dois voir le numéro de version s'afficher. Si tu obtiens une erreur "command not found", c'est que le chemin npm global n'est pas dans ton PATH. Sur Mac/Linux, ajoute cette ligne à ton fichier <code>~/.bashrc</code> ou <code>~/.zshrc</code> : <code>export PATH="$HOME/.npm-global/bin:$PATH"</code>. Sur Windows, relance ton terminal en tant qu'administrateur.</p>

<h2>Configuration de la clé API</h2>
<p>Claude Code a besoin de ta clé API Anthropic pour fonctionner. Il y a deux méthodes :</p>
<p><strong>Méthode 1 — Au premier lancement :</strong> Lance simplement <code>claude</code> dans ton terminal. Claude Code va te demander ta clé API de manière interactive. Colle ta clé (elle commence par <code>sk-ant-</code>) et appuie sur Entrée. La clé sera sauvegardée de manière sécurisée sur ta machine.</p>
<p><strong>Méthode 2 — Variable d'environnement :</strong> Si tu préfères configurer la clé manuellement, ajoute cette variable d'environnement :</p>
<pre><code>export ANTHROPIC_API_KEY="sk-ant-ta-cle-ici"</code></pre>
<p>Ajoute cette ligne à ton fichier <code>~/.bashrc</code>, <code>~/.zshrc</code>, ou <code>~/.profile</code> pour que la clé soit disponible à chaque session. Sur Windows, utilise les variables d'environnement système via les paramètres avancés.</p>
<p><strong>Conseil sécurité :</strong> Ne partage jamais ta clé API. Ne la commite jamais dans un repo Git. Si tu travailles en équipe, chaque personne doit avoir sa propre clé. Si tu penses que ta clé a été compromise, régénère-la immédiatement depuis la console Anthropic.</p>

<h2>Ta première interaction avec Claude Code</h2>
<p>C'est le moment de vérité. Navigue dans un dossier de projet (ou crée-en un nouveau) et lance Claude Code :</p>
<pre><code>mkdir mon-premier-projet
cd mon-premier-projet
claude</code></pre>
<p>Claude Code démarre et tu vois un prompt interactif. Tu es maintenant en conversation directe avec Claude dans ton terminal. Essaie ces premiers prompts pour te familiariser :</p>
<ul>
<li><strong>Découverte</strong> : Tape <code>Crée un fichier hello.py qui affiche "Hello World" et la date du jour</code>. Claude Code va créer le fichier directement dans ton dossier. Ouvre-le dans VS Code pour voir le résultat.</li>
<li><strong>Exécution</strong> : Tape <code>Lance le script hello.py</code>. Claude Code va exécuter le fichier et t'afficher le résultat directement dans le terminal.</li>
<li><strong>Multi-fichiers</strong> : Tape <code>Crée un petit site web statique avec un index.html, un style.css et un script.js. Le site doit afficher un compteur qui s'incrémente quand on clique sur un bouton</code>. Claude Code va créer les 3 fichiers avec le code qui fonctionne ensemble.</li>
</ul>
<p>Tu remarqueras que Claude Code demande ta permission avant de créer ou modifier des fichiers et avant d'exécuter des commandes. C'est un mécanisme de sécurité important. Lis toujours ce qu'il propose avant d'accepter — surtout quand il veut exécuter des commandes système.</p>

<h2>Les fichiers de configuration : CLAUDE.md et .claude/</h2>
<p>Pour tirer le maximum de Claude Code, tu dois comprendre les fichiers de configuration qui orientent son comportement :</p>
<p><strong>CLAUDE.md</strong> : C'est le fichier le plus important. Place-le à la racine de ton projet. Claude Code le lit automatiquement à chaque démarrage et utilise son contenu comme contexte permanent. C'est là que tu définis les règles de ton projet :</p>
<pre><code># CLAUDE.md

## Architecture du projet
- Frontend : React + TypeScript + Tailwind CSS
- Backend : Node.js + Express + Prisma
- Base de données : PostgreSQL
- Déploiement : Vercel (frontend) + Railway (backend)

## Conventions de code
- Utiliser des composants fonctionnels React (pas de classes)
- Nommer les fichiers en PascalCase pour les composants
- Utiliser async/await (pas de .then())
- Commenter en français

## Commandes utiles
- npm run dev : lancer le serveur de développement
- npm run build : compiler le projet
- npx prisma studio : ouvrir l'interface DB</code></pre>
<p>Ce fichier est un game-changer. Sans lui, Claude Code fait des choix par défaut qui ne correspondent pas forcément à ton projet. Avec lui, chaque réponse est calibrée pour TON contexte.</p>
<p><strong>Le dossier .claude/</strong> : Claude Code peut aussi créer un dossier <code>.claude/</code> à la racine de ton projet pour stocker des configurations locales. Le fichier <code>.claude/settings.json</code> te permet de définir des paramètres comme les commandes autorisées sans confirmation, les patterns de fichiers à ignorer, et d'autres préférences.</p>

<h2>Astuces de terminal pour être efficace</h2>
<p>Quelques tips qui vont te faire gagner du temps au quotidien :</p>
<ul>
<li><strong>Ouvre VS Code et le terminal côte à côte</strong> : Utilise le terminal intégré de VS Code (Ctrl+\`) pour voir les fichiers se créer et se modifier en temps réel pendant que Claude Code travaille.</li>
<li><strong>Utilise des prompts en plusieurs lignes</strong> : Pour des instructions complexes, n'hésite pas à structurer ton prompt avec des tirets ou des numéros. Claude Code comprend très bien les listes formatées.</li>
<li><strong>Raccourci Escape</strong> : Si Claude Code génère une réponse trop longue ou se trompe de direction, appuie sur Escape pour l'interrompre. Tu pourras relancer avec une instruction corrigée.</li>
<li><strong>Commande /clear</strong> : Si le contexte devient confus après plusieurs échanges, utilise <code>/clear</code> pour repartir à zéro tout en restant dans le même projet.</li>
<li><strong>Mode headless</strong> : Pour des tâches simples, tu peux utiliser Claude Code en mode non-interactif : <code>claude -p "Ajoute un bouton de déconnexion dans le header"</code>. Parfait pour des modifications rapides.</li>
</ul>`,
    exercise: `<ol>
<li>Installe Claude Code sur ta machine en suivant les étapes de la leçon. Vérifie que la commande <code>claude --version</code> fonctionne. Capture une screenshot du résultat comme preuve.</li>
<li>Crée un dossier de projet, lance Claude Code, et demande-lui de créer un petit site web statique avec 3 pages (accueil, à propos, contact). Teste le résultat dans ton navigateur.</li>
<li>Crée un fichier CLAUDE.md pour un projet fictif de ton choix (ex : une app de gestion de tâches). Définis l'architecture, les conventions de code et les commandes utiles. Relance Claude Code et vérifie qu'il respecte tes instructions.</li>
</ol>`,
  },
  {
    order: 104,
    module: 3,
    title: "Ton premier projet : une app complète en 30 minutes",
    slug: "premier-projet-app-complete-30-minutes",
    duration: "55 min",
    description: "Construire une application web complète de zéro avec Claude Code, étape par étape.",
    content: `<h2>Le projet : une app de suivi d'habitudes</h2>
<p>Assez de théorie — on construit. Dans cette leçon, tu vas créer une application web complète de suivi d'habitudes avec Claude Code. Pas un "Hello World" ridicule, une vraie app utilisable avec une interface clean, du stockage de données, et des fonctionnalités concrètes.</p>
<p>Voici ce que l'app fera à la fin de cette leçon :</p>
<ul>
<li>Ajouter des habitudes avec un nom et une fréquence (quotidien, hebdo)</li>
<li>Cocher les habitudes complétées chaque jour</li>
<li>Voir un tableau de bord avec les streaks (jours consécutifs)</li>
<li>Stocker les données en local (localStorage) pour que rien ne se perde</li>
<li>Interface responsive et moderne avec Tailwind CSS</li>
</ul>
<p>Temps total : 30 minutes chrono. On y va.</p>

<h2>Étape 1 : Initialiser le projet (5 min)</h2>
<p>Ouvre ton terminal et crée le dossier du projet :</p>
<pre><code>mkdir habit-tracker
cd habit-tracker
claude</code></pre>
<p>Maintenant, donne à Claude Code ton premier prompt structuré. La qualité de ce prompt initial détermine 80% du résultat final. Voici un excellent prompt de démarrage :</p>
<pre><code>Initialise un projet React avec Vite et TypeScript.
Installe Tailwind CSS v4 et configure-le.
Crée la structure de base avec :
- src/components/ pour les composants
- src/hooks/ pour les hooks custom
- src/types/ pour les types TypeScript
- src/utils/ pour les fonctions utilitaires
Crée un CLAUDE.md avec ces conventions :
- Composants fonctionnels avec arrow functions
- Tailwind pour tout le styling (pas de CSS custom)
- Nommage en français pour les commentaires
- Types TypeScript stricts partout</code></pre>
<p>Claude Code va exécuter plusieurs commandes : <code>npm create vite@latest</code>, installer les dépendances, configurer Tailwind, et créer toute l'arborescence. Laisse-le faire et accepte les commandes qu'il propose. En 2-3 minutes, tu as un projet propre et structuré.</p>

<h2>Étape 2 : Définir les types et le modèle de données (3 min)</h2>
<p>Maintenant, on définit ce que l'app manipule comme données. Prompt :</p>
<pre><code>Crée les types TypeScript pour l'app de suivi d'habitudes :
- Habit : id (string uuid), name (string), frequency ("daily" | "weekly"), createdAt (Date), color (string hex)
- HabitEntry : id (string), habitId (string), date (string format YYYY-MM-DD), completed (boolean)
- Un type DashboardStats avec : totalHabits, completedToday, currentStreak, bestStreak

Crée aussi un hook useHabits qui gère le state avec localStorage :
- addHabit(name, frequency, color)
- toggleEntry(habitId, date)
- deleteHabit(id)
- getStats() qui retourne DashboardStats
- getStreak(habitId) qui calcule le streak actuel</code></pre>
<p>Claude Code va créer les fichiers de types et le hook avec toute la logique de persistance. Le hook <code>useHabits</code> est le cœur de l'app — il gère l'état des habitudes et les sauvegarde automatiquement dans localStorage à chaque modification.</p>

<h2>Étape 3 : Construire l'interface (15 min)</h2>
<p>C'est la partie la plus visible. On va construire les composants un par un. Premier prompt :</p>
<pre><code>Crée le composant HabitForm qui permet d'ajouter une nouvelle habitude.
- Un input pour le nom de l'habitude
- Un select pour la fréquence (Quotidien / Hebdomadaire)
- 6 pastilles de couleur cliquables pour choisir la couleur
- Un bouton "Ajouter" qui appelle addHabit
- Design clean avec Tailwind : fond blanc, rounded-xl, shadow-sm, padding confortable
- Animation d'apparition subtile</code></pre>
<p>Ensuite, le composant principal :</p>
<pre><code>Crée le composant HabitList qui affiche la liste des habitudes du jour.
- Chaque habitude est une card avec : pastille de couleur, nom, streak actuel, checkbox pour cocher
- Quand on coche, appeler toggleEntry avec la date du jour
- Animation quand on coche (scale + confetti subtil avec un emoji)
- Si aucune habitude, afficher un message d'encouragement avec un emoji
- Design : cards empilées, gap-3, hover effect subtil</code></pre>
<p>Et enfin le dashboard :</p>
<pre><code>Crée un composant Dashboard en haut de la page qui affiche :
- Nombre total d'habitudes
- Habitudes complétées aujourd'hui (avec barre de progression circulaire)
- Meilleur streak global
- Un message de motivation qui change selon le pourcentage de complétion du jour
- Design : 3 cards côte à côte sur desktop, empilées sur mobile
- Couleurs : utiliser des gradients subtils</code></pre>

<h2>Étape 4 : Assembler et tester (5 min)</h2>
<p>Dernière étape — on assemble tout dans le composant App :</p>
<pre><code>Modifie App.tsx pour assembler tous les composants :
- En haut : un header avec le titre "Habit Tracker" et un toggle dark mode
- Ensuite : le Dashboard avec les stats
- Puis : le formulaire d'ajout (repliable)
- Enfin : la liste des habitudes du jour
- Ajoute un footer discret avec "Built with Claude Code"
- Implémente le dark mode avec une classe sur le body
- Layout max-w-2xl mx-auto, padding responsive</code></pre>
<p>Puis lance l'app :</p>
<pre><code>Lance le serveur de développement avec npm run dev</code></pre>
<p>Ouvre ton navigateur sur <code>http://localhost:5173</code> et admire le résultat. En 30 minutes, tu as une app complète, fonctionnelle, responsive, avec persistance des données.</p>

<h2>Étape 5 : Les finitions qui font la différence (2 min)</h2>
<p>Ton app marche, mais les détails font la différence entre un prototype et un produit. Quelques prompts bonus :</p>
<pre><code>Ajoute des animations de transition quand on ajoute ou supprime une habitude.
Ajoute un son subtil quand on coche une habitude (utilise l'API Web Audio).
Ajoute la possibilité de voir l'historique de la semaine en cliquant sur une habitude.</code></pre>
<p>Ces micro-détails transforment une app "ça marche" en une app "wow c'est pro".</p>

<h2>Ce qu'il faut retenir de cette expérience</h2>
<p>Tu viens de construire en 30 minutes ce qui aurait pris 2 à 3 jours à un développeur junior. Et tu l'as fait sans écrire une seule ligne de code. Ce n'est pas de la magie — c'est la puissance du vibe coding bien exécuté.</p>
<p>Les clés du succès :</p>
<ul>
<li><strong>Des prompts structurés et précis</strong> : Chaque prompt décrivait exactement ce que tu voulais, avec des détails sur le design et le comportement.</li>
<li><strong>Une approche incrémentale</strong> : Au lieu de tout demander d'un coup, tu as construit brique par brique. C'est plus fiable et plus facile à corriger.</li>
<li><strong>La validation à chaque étape</strong> : Tu as testé après chaque composant pour détecter les problèmes tôt.</li>
</ul>
<p>Garde ce projet comme référence. Tu y reviendras souvent pour tester de nouvelles techniques et améliorer ton workflow.</p>`,
    exercise: `<ol>
<li>Reproduis le projet Habit Tracker en suivant les étapes de la leçon. Chronomètre-toi et note combien de temps chaque étape te prend réellement. Compare avec les estimations données.</li>
<li>Une fois l'app fonctionnelle, ajoute une fonctionnalité de ton choix en un seul prompt Claude Code : export des données en JSON, graphique de progression hebdomadaire, ou notifications de rappel. Documente le prompt exact que tu as utilisé et le résultat obtenu.</li>
<li>Construis un deuxième projet de zéro en 30 minutes : un convertisseur de devises en temps réel, un générateur de mots de passe, ou un mini blog personnel. L'objectif est de pratiquer le workflow initialisation → structure → composants → assemblage.</li>
</ol>`,
  },
  {
    order: 105,
    module: 3,
    title: "Le workflow pro : itérer et raffiner avec Claude",
    slug: "workflow-pro-iterer-raffiner-claude",
    duration: "50 min",
    description: "Maîtriser l'art de l'itération et du feedback pour obtenir exactement ce que tu veux avec Claude Code.",
    content: `<h2>Le problème du "premier jet parfait"</h2>
<p>L'erreur numéro 1 des débutants en vibe coding, c'est de croire qu'un seul prompt va produire un résultat parfait. Ça n'arrive jamais. Même les meilleurs prompts du monde donnent un résultat qui nécessite des ajustements. Et c'est normal — c'est comme ça que le développement fonctionne, avec ou sans IA.</p>
<p>Le vrai skill du vibe coding, ce n'est pas d'écrire le prompt parfait du premier coup. C'est de savoir itérer rapidement et efficacement. Un développeur pro avec Claude Code fait 10 à 20 itérations par heure. Chaque itération prend 1 à 3 minutes : tu observes le résultat, tu identifies ce qui ne va pas, tu formules un feedback précis, et Claude Code corrige.</p>
<p>Pense à ça comme de la sculpture : tu commences avec un bloc brut (le premier prompt), puis tu affines progressivement avec des ajustements de plus en plus précis jusqu'à obtenir exactement ce que tu veux.</p>

<h2>La boucle d'itération en 4 étapes</h2>
<p>Voici le workflow que les pros utilisent, étape par étape :</p>
<p><strong>1. Observer attentivement</strong></p>
<p>Après chaque génération de Claude Code, prends 30 secondes pour examiner le résultat. Ne te précipite pas sur le prochain prompt. Ouvre l'app dans le navigateur, clique partout, redimensionne la fenêtre, teste les edge cases. Note mentalement tout ce qui ne correspond pas à ta vision.</p>
<p><strong>2. Prioriser les corrections</strong></p>
<p>Tu vas probablement trouver 5 à 10 choses à améliorer. Ne les envoie pas toutes en même temps. Priorise : d'abord les bugs fonctionnels (ça ne marche pas), ensuite les problèmes de logique (ça marche mais pas comme prévu), enfin les ajustements visuels (ça marche mais c'est pas beau). Traiter les problèmes par ordre de gravité évite de perdre du temps sur du CSS quand la logique est cassée.</p>
<p><strong>3. Formuler un feedback précis</strong></p>
<p>C'est l'étape la plus importante. La qualité de ton feedback détermine la qualité de la correction. Voici la différence entre un mauvais et un bon feedback :</p>
<ul>
<li>Mauvais : <code>Le bouton ne marche pas bien</code></li>
<li>Bon : <code>Le bouton "Ajouter" ne déclenche pas la fonction addHabit quand on clique dessus. L'habitude n'apparaît pas dans la liste après soumission du formulaire.</code></li>
<li>Mauvais : <code>C'est moche</code></li>
<li>Bon : <code>Le spacing entre les cards est trop serré (gap-2 actuellement). Passe à gap-4. Les coins sont trop arrondis (rounded-2xl), réduis à rounded-lg. La couleur du header devrait être slate-800 au lieu de gray-900.</code></li>
</ul>
<p><strong>4. Valider et enchaîner</strong></p>
<p>Quand la correction est appliquée, vérifie qu'elle n'a pas cassé autre chose (c'est fréquent). Si tout est bon, passe au problème suivant. Si la correction a introduit un nouveau bug, signale-le immédiatement.</p>

<h2>Les patterns de prompts efficaces pour itérer</h2>
<p>Avec l'expérience, tu développeras des patterns de prompts qui fonctionnent à tous les coups. Voici les plus utiles :</p>
<p><strong>Le prompt de correction ciblée :</strong></p>
<pre><code>Dans le fichier src/components/HabitCard.tsx, le onClick du checkbox
ne met pas à jour le state. Le problème semble venir du fait que
toggleEntry n'est pas appelé avec le bon habitId. Corrige ça.</code></pre>
<p>Ce pattern est efficace parce qu'il pointe le fichier exact, décrit le symptôme, et suggère une piste. Claude Code n'a pas à chercher dans tout le projet.</p>
<p><strong>Le prompt de refactoring :</strong></p>
<pre><code>Le composant Dashboard.tsx fait 200 lignes et mélange la logique
et le rendu. Refactorise-le en :
1. Un hook useDashboardStats qui calcule les stats
2. Des sous-composants StatCard pour chaque métrique
3. Le Dashboard principal qui assemble le tout
Garde exactement le même rendu visuel.</code></pre>
<p>La dernière ligne est cruciale : elle dit à Claude Code que tu veux changer la structure interne sans toucher à l'apparence. Sans cette précision, il risque de modifier le design en même temps.</p>
<p><strong>Le prompt "avant/après" :</strong></p>
<pre><code>Actuellement, quand on supprime une habitude, elle disparaît
instantanément. Je veux : animation de slide vers la gauche (300ms),
puis fade out (200ms), puis suppression du DOM. Utilise les
transitions CSS de Tailwind.</code></pre>
<p>Décrire le comportement actuel ET le comportement souhaité élimine toute ambiguïté.</p>

<h2>Gérer les erreurs et les blocages</h2>
<p>Parfois Claude Code fait des erreurs. Parfois il se retrouve dans une boucle où il casse et répare la même chose. Voici comment gérer ces situations :</p>
<ul>
<li><strong>L'erreur de compilation</strong> : Copie-colle l'erreur exacte du terminal dans ton prompt. Claude Code est excellent pour interpréter les messages d'erreur et appliquer le fix précis.</li>
<li><strong>La boucle de correction</strong> : Si Claude Code corrige un bug mais en crée un autre, et ça tourne en boucle, utilise la commande <code>/clear</code> et reformule le problème depuis le début avec plus de contexte. Parfois, repartir d'une explication fraîche débloque la situation.</li>
<li><strong>Le résultat complètement faux</strong> : Si le résultat est très loin de ce que tu voulais, ne perds pas de temps à corriger — demande à Claude Code de supprimer et recréer le composant from scratch avec un prompt plus détaillé.</li>
<li><strong>Le problème que Claude Code ne comprend pas</strong> : Fournis des exemples visuels. Dis "Le résultat actuel ressemble à X, je veux que ça ressemble à Y". Tu peux même décrire un site existant comme référence : "Je veux un layout similaire à la page d'accueil de Linear."</li>
</ul>

<h2>Le workflow quotidien d'un vibe coder pro</h2>
<p>Voici à quoi ressemble une session de travail typique d'un vibe coder efficace :</p>
<ul>
<li><strong>Minute 0-5</strong> : Ouvrir le projet, lancer Claude Code, relire les notes de la veille. Commencer par un prompt de contexte : "Voici où j'en suis sur le projet et ce que je veux faire aujourd'hui..."</li>
<li><strong>Minute 5-45</strong> : Boucle d'itération rapide. Prompt → résultat → feedback → correction. 10 à 15 cycles par session. Focus sur une feature à la fois — ne saute pas d'un sujet à l'autre.</li>
<li><strong>Minute 45-55</strong> : Tests manuels de tout ce qui a été créé ou modifié. Vérification sur mobile (outils de dev du navigateur). Commit Git avec un message descriptif.</li>
<li><strong>Minute 55-60</strong> : Notes pour la prochaine session. Qu'est-ce qui reste à faire ? Quels problèmes sont non résolus ? Quelles idées d'amélioration ?</li>
</ul>
<p>Ce rythme de 1 heure par session est optimal. Au-delà, la fatigue réduit la qualité de tes prompts et de tes feedbacks. Mieux vaut 3 sessions d'une heure qu'une session marathon de 3 heures.</p>

<h2>Les raccourcis de productivité</h2>
<p>Quelques techniques avancées pour aller encore plus vite :</p>
<ul>
<li><strong>Le prompt "review"</strong> : Demande régulièrement à Claude Code de relire tout le projet et de signaler les incohérences, les bugs potentiels, et les améliorations possibles. "Fais un audit du projet, identifie les bugs potentiels, les incohérences de style, et les améliorations de performance."</li>
<li><strong>Git à chaque milestone</strong> : Fais un commit après chaque feature fonctionnelle. Si Claude Code casse quelque chose, tu peux toujours revenir en arrière avec <code>git checkout</code>.</li>
<li><strong>Screenshots mentaux</strong> : Avant de demander un changement visuel, décris en détail ce que tu vois et ce que tu veux. Plus tu es visuel dans tes descriptions, plus le résultat sera proche de ta vision.</li>
</ul>`,
    exercise: `<ol>
<li>Reprends le projet Habit Tracker de la leçon précédente. Fais 10 itérations d'amélioration en suivant la boucle observer → prioriser → feedback → valider. Note chaque prompt et le résultat obtenu. L'objectif est de pratiquer la formulation de feedbacks précis.</li>
<li>Provoque volontairement une erreur dans ton code (supprime une ligne importante) et pratique le workflow de debugging avec Claude Code : colle l'erreur, laisse-le diagnostiquer, valide la correction. Fais-le 3 fois avec des erreurs différentes.</li>
<li>Chronométre une session complète de 1 heure en suivant le workflow pro décrit dans la leçon. À la fin, calcule combien de cycles d'itération tu as effectués et évalue la qualité de tes prompts (précis vs vagues).</li>
</ol>`,
  },
  {
    order: 106,
    module: 3,
    title: "Multi-fichiers et projets complexes",
    slug: "multi-fichiers-projets-complexes",
    duration: "50 min",
    description: "Gérer des projets à grande échelle, architecturer correctement et utiliser Claude Code sur des codebases existantes.",
    content: `<h2>Passer du prototype au vrai projet</h2>
<p>Construire une app simple de 5 fichiers avec Claude Code, c'est facile. Gérer un projet de 50, 100 ou 500 fichiers, c'est un autre game. La plupart des débutants en vibe coding butent à cette étape : leur projet grossit, Claude Code commence à oublier des choses, les modifications cassent des fonctionnalités existantes, et tout devient un chaos ingérable.</p>
<p>La bonne nouvelle, c'est que ces problèmes sont évitables si tu structures correctement ton projet dès le départ et que tu utilises les bonnes stratégies pour guider Claude Code dans un codebase complexe.</p>

<h2>L'architecture qui scale : les conventions à respecter</h2>
<p>Quand ton projet dépasse 10 fichiers, tu as besoin d'une architecture claire. Voici la structure recommandée pour un projet web full-stack :</p>
<pre><code>mon-projet/
├── CLAUDE.md              # Instructions pour Claude Code
├── src/
│   ├── app/               # Pages et routes
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── components/        # Composants réutilisables
│   │   ├── ui/            # Composants génériques (Button, Card, Modal)
│   │   ├── forms/         # Composants de formulaire
│   │   └── layout/        # Header, Footer, Sidebar
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitaires et helpers
│   ├── types/             # Types TypeScript
│   ├── services/          # Appels API et logique métier
│   └── styles/            # Styles globaux
├── prisma/                # Schéma de base de données
├── public/                # Assets statiques
└── tests/                 # Tests</code></pre>
<p>Cette structure n'est pas arbitraire. Chaque dossier a un rôle clair, ce qui permet à Claude Code de savoir exactement où créer chaque fichier et où chercher le code existant.</p>
<p>Règle d'or : un fichier = une responsabilité. Un composant par fichier. Un hook par fichier. Un service par fichier. Quand un fichier dépasse 150-200 lignes, c'est un signal qu'il faut le découper.</p>

<h2>Guider Claude Code dans un grand projet</h2>
<p>Quand ton projet a beaucoup de fichiers, Claude Code ne peut pas tout lire à chaque interaction. Tu dois l'aider à se concentrer sur les fichiers pertinents. Voici les techniques :</p>
<p><strong>Technique 1 — Le contexte ciblé :</strong></p>
<pre><code>Je travaille sur la fonctionnalité de notification.
Les fichiers concernés sont :
- src/hooks/useNotifications.ts (le hook principal)
- src/components/NotificationBell.tsx (le composant UI)
- src/services/notificationService.ts (les appels API)
- src/types/notification.ts (les types)

Je veux ajouter le support des notifications push via
l'API Web Push. Modifie ces fichiers en conséquence.</code></pre>
<p>En listant explicitement les fichiers concernés, tu évites que Claude Code cherche dans tout le projet et potentiellement modifie des fichiers non liés.</p>
<p><strong>Technique 2 — Le CLAUDE.md enrichi :</strong></p>
<p>Pour les projets complexes, ton CLAUDE.md doit être plus détaillé. Ajoute une section qui décrit les modules principaux et leurs dépendances :</p>
<pre><code>## Modules du projet
- Auth : gère l'authentification (JWT + refresh tokens)
  → Fichiers : src/services/authService.ts, src/hooks/useAuth.ts
- Dashboard : tableau de bord principal
  → Fichiers : src/app/dashboard/, src/components/dashboard/
- Notifications : système de notifications en temps réel
  → Fichiers : src/services/notificationService.ts, src/hooks/useNotifications.ts
  → Dépend de : Auth (pour les tokens)

## Patterns importants
- Tous les appels API passent par src/lib/apiClient.ts
- L'authentification est gérée par un context React (AuthProvider)
- Les erreurs sont gérées par un ErrorBoundary global</code></pre>
<p>Ce mapping permet à Claude Code de comprendre l'architecture sans analyser chaque fichier. C'est comme un plan du bâtiment pour un plombier — il sait exactement où sont les tuyaux.</p>
<p><strong>Technique 3 — Le prompt "explore d'abord" :</strong></p>
<pre><code>Avant de modifier quoi que ce soit, lis les fichiers suivants
et explique-moi comment le système d'authentification fonctionne
actuellement : src/services/authService.ts, src/hooks/useAuth.ts,
src/app/api/auth/route.ts</code></pre>
<p>Ce pattern est extrêmement utile quand tu rejoins un projet existant ou quand tu as oublié comment une feature marche. Claude Code va analyser les fichiers et te faire un résumé clair avant de proposer des modifications.</p>

<h2>Travailler sur un codebase existant</h2>
<p>Tu ne démarreras pas toujours de zéro. Souvent, tu devras ajouter des features ou corriger des bugs dans un projet existant — le tien ou celui d'un client. Voici comment utiliser Claude Code efficacement dans ce contexte :</p>
<p><strong>Étape 1 — La phase de découverte :</strong></p>
<pre><code>Analyse ce projet. Explore les fichiers principaux et donne-moi :
1. Le stack technique utilisé (framework, langages, dépendances)
2. La structure du projet (architecture, dossiers principaux)
3. Les features principales de l'app
4. Les patterns de code récurrents
5. Les points d'attention (code dupliqué, dépendances obsolètes, etc.)</code></pre>
<p>Claude Code va explorer le projet et te donner un audit complet en quelques minutes. C'est l'équivalent de 2 heures de lecture de code manuelle.</p>
<p><strong>Étape 2 — La création du CLAUDE.md :</strong></p>
<pre><code>Basé sur ton analyse, crée un fichier CLAUDE.md à la racine
du projet qui documente l'architecture, les conventions de code
existantes, et les commandes utiles. Ce fichier servira de
référence pour toutes les futures modifications.</code></pre>
<p>Même si le projet n'avait pas de CLAUDE.md, en créer un est la première chose à faire. Ça standardise la communication avec Claude Code pour tout le reste du travail.</p>
<p><strong>Étape 3 — Les modifications chirurgicales :</strong></p>
<p>Sur un codebase existant, fais des modifications petites et ciblées. Ne demande jamais à Claude Code de "refactorer tout le projet" d'un coup. C'est la recette pour tout casser. Procède feature par feature, avec des tests entre chaque modification.</p>

<h2>Les erreurs courantes en multi-fichiers</h2>
<ul>
<li><strong>Le "big bang refactor"</strong> : Demander à Claude Code de modifier 20 fichiers en même temps. Résultat : il oublie des imports, casse des dépendances, et crée des incohérences. Limite-toi à 3-5 fichiers modifiés par prompt maximum.</li>
<li><strong>Les imports oubliés</strong> : Quand Claude Code crée un nouveau composant, il oublie parfois de l'importer là où il est utilisé. Vérifie toujours les imports après chaque création de fichier.</li>
<li><strong>La duplication de code</strong> : Claude Code a tendance à recréer des fonctions qui existent déjà dans le projet plutôt que de les réutiliser. Précise toujours : "Utilise la fonction X qui existe déjà dans src/utils/helpers.ts" quand tu sais qu'elle existe.</li>
<li><strong>Les types inconsistants</strong> : Sur un projet TypeScript, Claude Code peut définir un type légèrement différent dans deux fichiers. Centralise toujours tes types dans un dossier <code>types/</code> et référence-les partout.</li>
</ul>

<h2>Git : ton filet de sécurité</h2>
<p>Sur un projet complexe, Git n'est pas optionnel — c'est vital. Voici les bonnes pratiques :</p>
<ul>
<li><strong>Commit après chaque feature fonctionnelle</strong> : Pas toutes les 5 minutes, mais à chaque milestone. "Ajout du système de notifications" = commit. "Fix du bug de pagination" = commit.</li>
<li><strong>Des branches par feature</strong> : Utilise <code>git checkout -b feature/notifications</code> pour chaque nouvelle feature. Si ça tourne mal, tu reviens sur main sans rien perdre.</li>
<li><strong>Demande à Claude Code de commiter</strong> : Tu peux dire "Fais un commit avec le message 'Ajout du système de notifications push'" et il le fera pour toi. Pratique pour ne pas sortir du flow.</li>
<li><strong>Le .gitignore dès le départ</strong> : Assure-toi que <code>node_modules/</code>, <code>.env</code>, et les fichiers de build sont ignorés. Claude Code peut créer le .gitignore pour toi si tu lui demandes.</li>
</ul>`,
    exercise: `<ol>
<li>Prends un projet existant (le tien ou un projet open source) et utilise Claude Code pour en faire l'audit complet. Demande-lui d'explorer la structure, d'identifier le stack technique, et de créer un CLAUDE.md adapté. Évalue la qualité de son analyse.</li>
<li>Dans ton projet Habit Tracker, restructure le code en suivant l'architecture recommandée (dossiers components/ui, hooks, services, types). Utilise Claude Code pour faire le refactoring en 3-4 étapes progressives, en vérifiant que l'app fonctionne toujours après chaque étape.</li>
<li>Simule un scénario "projet client" : clone un repo open source simple (ex : un template Next.js), et utilise Claude Code pour y ajouter une feature complète (authentification, dashboard, ou API CRUD). Documente chaque étape et les prompts utilisés.</li>
</ol>`,
  },
  {
    order: 107,
    module: 3,
    title: "Templates et accélérateurs : aller 10x plus vite",
    slug: "templates-accelerateurs-aller-10x-plus-vite",
    duration: "50 min",
    description: "Créer des templates réutilisables, des fichiers CLAUDE.md optimisés et des presets de projet pour accélérer tout.",
    content: `<h2>Pourquoi tu dois systématiser ton workflow</h2>
<p>Si tu construis chaque nouveau projet from scratch, tu perds un temps colossal. Chaque projet SaaS a besoin d'authentification, chaque site a besoin d'un header et d'un footer, chaque app a besoin de gestion d'erreurs. Recréer tout ça à chaque fois, même avec Claude Code, c'est comme réinventer la roue à chaque trajet.</p>
<p>La solution : des templates. Des projets pré-configurés avec tout le boilerplate déjà en place, des CLAUDE.md optimisés par type de projet, et des "prompt libraries" pour les tâches récurrentes. Les meilleurs vibe coders ont un arsenal de templates qui leur permettent de passer de l'idée au MVP en moins d'une heure.</p>
<p>L'objectif de cette leçon : construire ton propre système d'accélération. À la fin, tu auras un kit de démarrage personnalisé qui te fera gagner des heures sur chaque nouveau projet.</p>

<h2>Le CLAUDE.md ultime : ton arme secrète</h2>
<p>Le fichier CLAUDE.md est le levier de productivité le plus sous-estimé de Claude Code. Un CLAUDE.md bien écrit transforme un assistant IA générique en un collaborateur parfaitement calibré pour TON style de travail.</p>
<p>Voici les sections que ton CLAUDE.md devrait contenir pour un projet sérieux :</p>
<pre><code># CLAUDE.md — [Nom du projet]

## Contexte du projet
[Description en 2-3 lignes de ce que fait l'app, pour qui,
et quel problème elle résout]

## Stack technique
- Framework : Next.js 15 (App Router)
- Langage : TypeScript (strict mode)
- Styling : Tailwind CSS v4
- Base de données : PostgreSQL + Prisma ORM
- Auth : NextAuth.js v5
- Paiement : Stripe
- Déploiement : Vercel
- Tests : Vitest + Testing Library

## Structure du projet
[Arborescence simplifiée des dossiers principaux avec
une description de chaque dossier]

## Conventions de code
- Composants : fonctionnels avec arrow functions, PascalCase
- Hooks : préfixe "use", camelCase
- Types : dans src/types/, interfaces préférées aux types
- API routes : dans src/app/api/, RESTful
- Erreurs : try/catch avec des erreurs custom typées
- Commentaires : en français, au-dessus du bloc concerné
- Pas de console.log en production (utiliser un logger)
- Pas de any TypeScript (utiliser unknown si nécessaire)

## Patterns récurrents
- Tous les appels API client passent par src/lib/api.ts
- Les mutations utilisent React Query (useMutation)
- Les formulaires utilisent React Hook Form + Zod
- La validation serveur utilise Zod
- Les emails transactionnels passent par Resend

## Commandes
- npm run dev : serveur de développement
- npm run build : build de production
- npm run lint : linting ESLint
- npx prisma db push : sync du schema DB
- npx prisma studio : interface DB visuelle

## Règles importantes
- Ne jamais modifier les fichiers dans src/lib/core/
- Toujours valider les inputs côté serveur (jamais
  faire confiance au client)
- Les routes API protégées vérifient le token via
  getServerSession()
- Les prix Stripe sont en centimes (2000 = 20.00€)</code></pre>
<p>Ce CLAUDE.md fait 50 lignes et prend 15 minutes à écrire. Mais il te fera gagner des heures cumulées en éliminant les erreurs de contexte et les corrections répétitives. Claude Code le lit à chaque démarrage et ajuste TOUT son comportement en conséquence.</p>

<h2>Templates de projets : les 4 starters essentiels</h2>
<p>Crée un dossier <code>~/templates/</code> sur ta machine avec ces 4 templates prêts à l'emploi :</p>
<p><strong>Template 1 — SaaS Starter :</strong></p>
<p>Le template le plus utilisé. Un projet Next.js complet avec authentification, base de données, paiement Stripe, et dashboard admin. Demande à Claude Code de le créer une fois pour toutes :</p>
<pre><code>Crée un template de projet SaaS avec Next.js 15, TypeScript,
Tailwind CSS, Prisma, NextAuth, et Stripe. Inclus :
- Pages : landing, login, register, dashboard, settings, pricing
- API routes : auth, stripe webhooks, CRUD utilisateur
- Composants : Header, Footer, Sidebar, DataTable, Modal, Toast
- Middleware d'authentification
- Configuration Stripe (checkout, customer portal, webhooks)
- Schema Prisma avec User, Subscription, Invoice
- CLAUDE.md complet
- .env.example avec toutes les variables nécessaires</code></pre>
<p>Ce template te permet de démarrer n'importe quel projet SaaS en 5 minutes au lieu de 2 heures.</p>
<p><strong>Template 2 — Landing Page :</strong></p>
<p>Une landing page professionnelle optimisée pour la conversion. Hero section, features, témoignages, pricing, FAQ, CTA, footer. Responsive, animations subtiles, SEO-ready. Tu l'utilises pour chaque nouveau produit ou service que tu lances.</p>
<p><strong>Template 3 — API Backend :</strong></p>
<p>Un backend Express ou Hono avec TypeScript, validation Zod, middleware d'authentification, rate limiting, logging structuré, et documentation OpenAPI auto-générée. Parfait pour créer des APIs que d'autres apps consomment.</p>
<p><strong>Template 4 — Chrome Extension :</strong></p>
<p>Une extension Chrome avec popup, content script, background service worker, et storage API. Le marché des extensions Chrome est énorme et peu de gens savent les construire. Avec ce template et Claude Code, tu peux en créer une en une heure.</p>

<h2>Les prompt libraries : tes raccourcis de productivité</h2>
<p>Au-delà des templates de projets, crée un fichier de prompts réutilisables pour les tâches récurrentes. Voici quelques exemples à garder dans un fichier <code>prompts.md</code> :</p>
<p><strong>Prompt "Nouveau composant UI" :</strong></p>
<pre><code>Crée un composant [NOM] dans src/components/ui/ avec :
- Props typées avec une interface
- Variantes via un prop "variant" (default, primary, secondary, danger)
- Tailles via un prop "size" (sm, md, lg)
- Support du className additionnel via cn() de tailwind-merge
- Export nommé (pas de default export)
- Responsif par défaut</code></pre>
<p><strong>Prompt "CRUD complet" :</strong></p>
<pre><code>Crée un CRUD complet pour l'entité [NOM] :
1. Type dans src/types/[nom].ts
2. Schema Prisma (ajoute au schema existant)
3. API routes : GET (liste + détail), POST, PUT, DELETE
4. Validation Zod pour create et update
5. Hook React Query pour toutes les opérations
6. Page liste avec DataTable, filtres et pagination
7. Formulaire create/edit avec React Hook Form + Zod</code></pre>
<p><strong>Prompt "Audit qualité" :</strong></p>
<pre><code>Fais un audit complet du projet :
1. Fichiers sans typage TypeScript strict
2. Composants de plus de 150 lignes à refactorer
3. Code dupliqué entre fichiers
4. Imports inutilisés
5. Console.log oubliés
6. Dépendances non utilisées dans package.json
7. Failles de sécurité potentielles
Liste chaque problème avec le fichier et la ligne concernée.</code></pre>
<p>Ces prompts sont comme des recettes de cuisine. Tu les utilises tels quels en remplaçant les parties entre crochets. Ça standardise tes outputs et te garantit un résultat cohérent à chaque fois.</p>

<h2>Automatiser la création de projets avec des scripts</h2>
<p>Pour aller encore plus loin, crée un script bash qui automatise la mise en place d'un nouveau projet :</p>
<pre><code>#!/bin/bash
# new-project.sh — Créer un nouveau projet à partir d'un template

PROJECT_NAME=$1
TEMPLATE=$2

echo "Création du projet $PROJECT_NAME avec le template $TEMPLATE..."

# Copier le template
cp -r ~/templates/$TEMPLATE ./$PROJECT_NAME
cd $PROJECT_NAME

# Initialiser git
git init
git add .
git commit -m "Initial commit from template $TEMPLATE"

# Installer les dépendances
npm install

# Ouvrir dans VS Code
code .

echo "Projet $PROJECT_NAME prêt. Lance 'claude' pour commencer."</code></pre>
<p>Avec ce script, la commande <code>./new-project.sh mon-saas saas-starter</code> crée un projet complet en 30 secondes. Tu peux ensuite lancer Claude Code et commencer directement la partie créative — la partie qui a de la valeur.</p>

<h2>Le système complet : de l'idée au MVP en 1 heure</h2>
<p>Voici le workflow optimisé qui combine tout ce qu'on a vu :</p>
<ol>
<li><strong>Minute 0-2</strong> : Choisis le template approprié, lance le script de création, ouvre VS Code.</li>
<li><strong>Minute 2-5</strong> : Personnalise le CLAUDE.md avec le contexte spécifique de ton projet (nom, description, particularités).</li>
<li><strong>Minute 5-10</strong> : Adapte le schema de données (Prisma, types) pour ton use case spécifique avec un prompt ciblé.</li>
<li><strong>Minute 10-40</strong> : Construis les features uniques de ton app en utilisant tes prompt libraries pour les patterns récurrents.</li>
<li><strong>Minute 40-50</strong> : Tests complets, corrections, finitions visuelles.</li>
<li><strong>Minute 50-60</strong> : Déploiement sur Vercel avec un push Git.</li>
</ol>
<p>En 60 minutes, tu passes d'une idée à un produit déployé et accessible en ligne. C'est la puissance du vibe coding combiné avec un système de templates bien rodé. Les développeurs traditionnels mettent 2 à 4 semaines pour le même résultat. Ton avantage compétitif est massif.</p>
<p>La prochaine étape : construis TES templates, adaptés à TES projets et à TON style. Chaque template que tu crées est un investissement qui paie des dividendes sur tous tes futurs projets.</p>`,
    exercise: `<ol>
<li>Crée ton propre CLAUDE.md "ultime" en t'inspirant du modèle de la leçon, mais adapté à ton stack technique préféré et à tes conventions personnelles. Teste-le sur un nouveau projet et mesure la différence de qualité des réponses de Claude Code avec et sans ce fichier.</li>
<li>Construis un template SaaS complet avec Claude Code : authentification, dashboard, et au moins un modèle de données métier. Sauvegarde-le dans un dossier <code>~/templates/saas-starter</code>. Crée ensuite un deuxième projet à partir de ce template et mesure le temps gagné.</li>
<li>Crée ta propre "prompt library" avec au moins 10 prompts réutilisables pour tes tâches les plus fréquentes (nouveau composant, CRUD, intégration API, etc.). Stocke-les dans un fichier Markdown facilement accessible. Teste chaque prompt sur un vrai projet pour valider qu'il produit des résultats satisfaisants.</li>
</ol>`,
  },
];
