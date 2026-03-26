  {
    order: 50,
    module: 8,
    title: "Projet : API REST complète avec authentification",
    slug: "projet-api-rest-complete-authentification",
    duration: "80 min",
    description: "Construire une API REST professionnelle avec JWT, validation, documentation et déploiement.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire une API REST de qualité production. Pas un simple exercice avec 2 routes : une API complète avec authentification JWT, validation des données, gestion d'erreurs standardisée, rate limiting, documentation Swagger, tests automatisés et déploiement. C'est le type d'API que tu construirais pour un vrai client ou une vraie startup.</p>
<p>L'API que tu vas créer est une API de gestion de tâches collaboratives, comme une version simplifiée de Todoist ou Asana. Plusieurs utilisateurs peuvent créer des projets, ajouter des tâches, assigner des tâches à d'autres utilisateurs et suivre l'avancement.</p>
<p>Pourquoi ce projet est-il si important ? Parce que les APIs sont partout. Chaque application mobile, chaque application web, chaque objet connecté communique via des APIs. Savoir construire une API robuste et bien documentée est une compétence qui ne se démodera jamais. C'est aussi un excellent projet pour les entretiens techniques : les recruteurs adorent voir un candidat qui maîtrise la conception d'API.</p>
<p>Un freelance qui peut livrer une API REST propre, documentée et testée se facture entre 400 et 800 euros par jour. Et avec Claude Code, tu peux livrer en 2-3 jours ce qui prendrait normalement 2-3 semaines à un développeur junior.</p>
<p><strong>Conseil pro :</strong> Même si tu te concentres sur le frontend habituellement, comprendre le backend te rend 10 fois plus efficace. Tu sais quoi demander au développeur backend, tu comprends les contraintes, et tu peux debugger les problèmes d'intégration toi-même. La compétence full-stack, c'est ce qui sépare les développeurs "bons" des développeurs "excellents".</p>

<h2>Architecture de l'API</h2>
<p>Une API REST bien conçue suit des conventions strictes :</p>
<ul>
<li><strong>Ressources</strong> : /users, /projects, /tasks, /comments — chaque "chose" de ton application est une ressource avec son propre endpoint</li>
<li><strong>Verbes HTTP</strong> : GET (lire), POST (créer), PUT (modifier), DELETE (supprimer) — chaque verbe a une sémantique claire</li>
<li><strong>Codes de statut</strong> : 200 (OK), 201 (créé), 400 (mauvaise requête), 401 (non authentifié), 403 (interdit), 404 (non trouvé), 500 (erreur serveur) — le client sait immédiatement ce qui s'est passé</li>
<li><strong>Pagination</strong> : ?page=1&limit=20 pour les listes — ne retourne jamais 10 000 résultats d'un coup</li>
<li><strong>Filtres</strong> : ?status=active&priority=high pour filtrer — le client demande exactement ce dont il a besoin</li>
<li><strong>Relations</strong> : /projects/123/tasks pour les sous-ressources — la hiérarchie est claire dans l'URL</li>
</ul>
<p>Ces conventions ne sont pas arbitraires. Elles existent parce que des millions de développeurs les utilisent et les comprennent. Quand un développeur voit <code>GET /projects/123/tasks</code>, il sait immédiatement que ça retourne les tâches du projet 123. C'est un langage commun qui rend les APIs intuitives.</p>
<p>Voici les erreurs les plus courantes dans la conception d'API REST :</p>
<ul>
<li><strong>Utiliser des verbes dans les URLs :</strong> <code>/getProjects</code> est faux. Utilise <code>GET /projects</code>. Le verbe est dans la méthode HTTP, pas dans l'URL.</li>
<li><strong>Retourner 200 pour tout :</strong> Si la création réussit, retourne 201. Si la ressource n'existe pas, retourne 404. Les codes de statut ont un sens, utilise-les.</li>
<li><strong>Ne pas versionner :</strong> Préfixe tes routes avec /api/v1/. Le jour où tu changes l'API, tu crées /api/v2/ sans casser les clients existants.</li>
<li><strong>Oublier la pagination :</strong> Sans pagination, une table de 100 000 lignes va faire crasher ton serveur et le client.</li>
</ul>
<p><strong>Astuce :</strong> Avant de coder, dessine ta structure d'API sur papier. Liste toutes les ressources, toutes les routes, et les relations entre elles. 15 minutes de planification te feront gagner 2 heures de refactoring.</p>

<h2>Étape 1 : Setup du projet</h2>
<p>Demande à Claude Code de créer la base du projet :</p>
<blockquote>Crée un projet Node.js avec Express et TypeScript. Configure Prisma avec PostgreSQL (SQLite pour le dev). Installe et configure : cors, helmet (sécurité), morgan (logging), express-rate-limit, zod (validation), jsonwebtoken (JWT), bcryptjs (hash), swagger-jsdoc et swagger-ui-express (documentation). Structure le projet en couches : routes, controllers, services, middlewares, validators.</blockquote>
<p>La structure en couches est essentielle pour la maintenabilité. Les routes définissent les endpoints, les controllers gèrent les requêtes/réponses, les services contiennent la logique métier, et les middlewares gèrent les préoccupations transversales (auth, validation, erreurs).</p>
<p>Voici le rôle de chaque librairie installée :</p>
<ul>
<li><strong>cors :</strong> Permet aux applications frontend hébergées sur un autre domaine d'appeler ton API. Sans cors, le navigateur bloque les requêtes cross-origin.</li>
<li><strong>helmet :</strong> Ajoute automatiquement des headers de sécurité (CSP, X-Frame-Options, etc.). C'est une ligne de code pour 15 protections de sécurité.</li>
<li><strong>morgan :</strong> Logue chaque requête dans la console (méthode, URL, code de statut, temps de réponse). Indispensable pour le debugging.</li>
<li><strong>express-rate-limit :</strong> Limite le nombre de requêtes par IP. Protège contre les attaques par force brute et le spam.</li>
</ul>
<p><strong>Attention :</strong> Ne mets jamais tes clés secrètes (JWT_SECRET, DATABASE_URL) dans le code source. Utilise un fichier <code>.env</code> qui n'est PAS commité dans Git. Claude Code va configurer <code>dotenv</code> pour charger les variables d'environnement automatiquement. Ajoute <code>.env</code> dans ton <code>.gitignore</code> immédiatement.</p>

<h2>Étape 2 : Authentification JWT</h2>
<p>L'authentification est la première brique. Demande à Claude Code :</p>
<blockquote>Implémente l'authentification JWT complète : POST /auth/register (inscription avec email, nom, mot de passe), POST /auth/login (connexion, retourne access token + refresh token), POST /auth/refresh (renouveler l'access token avec le refresh token), POST /auth/logout (invalider le refresh token). L'access token expire en 15 minutes, le refresh token en 7 jours. Hash les mots de passe avec bcrypt (12 rounds). Crée un middleware authMiddleware qui vérifie le JWT sur les routes protégées.</blockquote>
<p>Le système de double token (access + refresh) est le standard de l'industrie. L'access token a une durée de vie courte pour limiter les risques en cas de vol. Le refresh token permet de renouveler l'access token sans redemander le mot de passe. Claude Code va implémenter ce pattern correctement avec les bonnes pratiques de sécurité.</p>
<p>Comment fonctionne le flux d'authentification en détail :</p>
<ol>
<li>L'utilisateur s'inscrit avec email + mot de passe. Le mot de passe est hashé avec bcrypt et stocké en base.</li>
<li>L'utilisateur se connecte. Le serveur vérifie le mot de passe, génère un access token (15 min) et un refresh token (7 jours), et les retourne.</li>
<li>Le client envoie l'access token dans le header <code>Authorization: Bearer [token]</code> à chaque requête.</li>
<li>Quand l'access token expire, le client envoie le refresh token à <code>POST /auth/refresh</code> pour obtenir un nouveau access token.</li>
<li>Quand l'utilisateur se déconnecte, le refresh token est invalidé côté serveur.</li>
</ol>
<p>Pourquoi 15 minutes pour l'access token et pas 24 heures ? Si un attaquant vole l'access token (par exemple via une faille XSS), il ne peut l'utiliser que pendant 15 minutes. Avec un token de 24 heures, il aurait une journée entière pour exploiter la faille. C'est un compromis entre sécurité et confort d'utilisation.</p>
<p><strong>Conseil pro :</strong> Stocke les refresh tokens en base de données avec un flag <code>isRevoked</code>. Quand l'utilisateur se déconnecte, tu marques le token comme révoqué au lieu de le supprimer. Ça te permet de garder un historique des sessions et de révoquer toutes les sessions d'un coup si nécessaire (fonctionnalité "Se déconnecter de tous les appareils").</p>

<h2>Étape 3 : CRUD des ressources</h2>
<p>Construis les endpoints pour chaque ressource. Demande à Claude Code :</p>
<blockquote>Crée les CRUD complets pour les ressources Projects et Tasks. Pour Projects : GET /projects (liste paginée de mes projets), POST /projects (créer), GET /projects/:id (détail avec tâches), PUT /projects/:id (modifier, seulement si owner), DELETE /projects/:id (supprimer, seulement si owner). Pour Tasks : GET /projects/:id/tasks (tâches du projet, filtrable par status et priority), POST /projects/:id/tasks (créer une tâche), PUT /tasks/:id (modifier), DELETE /tasks/:id (supprimer). Chaque endpoint valide les données avec Zod et retourne des erreurs structurées.</blockquote>
<p>Les réponses d'erreur doivent être cohérentes sur toute l'API. Utilise un format standardisé comme <code>{"error": {"code": "VALIDATION_ERROR", "message": "...", "details": [...]}}</code>. Claude Code va créer un error handler centralisé qui formate toutes les erreurs de la même manière.</p>
<p>La gestion des autorisations est un point critique. Il y a deux niveaux :</p>
<ul>
<li><strong>Authentification :</strong> L'utilisateur est-il connecté ? (vérifié par le middleware JWT)</li>
<li><strong>Autorisation :</strong> L'utilisateur a-t-il le droit de faire cette action ? (vérifié dans le controller)</li>
</ul>
<p>Par exemple, un utilisateur authentifié peut créer un projet (authentification OK). Mais il ne peut pas supprimer le projet d'un autre utilisateur (autorisation refusée). Chaque route de modification/suppression doit vérifier que l'utilisateur est bien le propriétaire de la ressource.</p>
<p><strong>Attention :</strong> N'oublie pas de gérer le cas où la ressource n'existe pas. Si un utilisateur demande <code>GET /projects/999</code> et que le projet 999 n'existe pas, retourne un 404 propre avec un message clair : "Projet non trouvé". Ne retourne jamais une erreur 500 pour un cas prévisible — les 500 sont réservés aux erreurs inattendues.</p>

<h2>Étape 4 : Fonctionnalités avancées</h2>
<p>Ajoute des fonctionnalités qui font la différence. Demande à Claude Code :</p>
<blockquote>Ajoute les fonctionnalités suivantes : 1) Assignation de tâches à un autre utilisateur du projet, 2) Commentaires sur les tâches (CRUD complet), 3) Recherche full-text sur les titres et descriptions des tâches, 4) Tri par date de création, priorité ou date d'échéance, 5) Rate limiting : 100 requêtes par minute par utilisateur, 6) Logging structuré avec Winston pour tracer toutes les requêtes.</blockquote>
<p>Le rate limiting protège ton API contre les abus. Le logging structuré permet de debugger les problèmes en production et de suivre l'utilisation de l'API. Ce sont des éléments que les développeurs juniors oublient souvent mais qui sont essentiels en production.</p>
<p>Le rate limiting fonctionne simplement : chaque utilisateur (identifié par son IP ou son token) a un compteur. À chaque requête, le compteur augmente. Si le compteur dépasse 100 en une minute, les requêtes suivantes sont bloquées avec un code 429 (Too Many Requests). Le compteur se réinitialise après la fenêtre d'une minute.</p>
<p>Pour le logging structuré avec Winston, chaque requête génère un log au format JSON :</p>
<ul>
<li><strong>Timestamp :</strong> Quand la requête a été reçue</li>
<li><strong>Method + URL :</strong> Ce que l'utilisateur a demandé</li>
<li><strong>Status code :</strong> Le résultat</li>
<li><strong>Duration :</strong> Le temps de réponse en millisecondes</li>
<li><strong>User ID :</strong> Qui a fait la requête (si authentifié)</li>
</ul>
<p>Ces logs sont inestimables en production. Quand un client signale "l'API est lente", tu peux consulter les logs et identifier immédiatement quelle route prend trop de temps et pourquoi.</p>
<p><strong>Conseil pro :</strong> Ajoute des métriques de performance sur les routes critiques. Mesure le temps de chaque requête à la base de données et logue-le. Si une requête Prisma prend plus de 500ms, c'est un signal qu'il faut optimiser (ajouter un index, paginer différemment, etc.).</p>

<h2>Étape 5 : Documentation Swagger</h2>
<p>Une API sans documentation est inutilisable. Demande à Claude Code :</p>
<blockquote>Ajoute une documentation Swagger/OpenAPI complète accessible sur /api-docs. Chaque endpoint doit être documenté avec : description, paramètres, corps de requête (avec exemples), réponses possibles (avec exemples pour chaque code de statut), et indication si l'authentification est requise. Ajoute un bouton "Try it out" pour tester les endpoints directement depuis la documentation.</blockquote>
<p>Swagger transforme ta documentation en une interface interactive. Les utilisateurs de ton API peuvent tester les endpoints directement depuis le navigateur. C'est devenu le standard de l'industrie pour la documentation d'API REST.</p>
<p>Pourquoi Swagger est-il si important ? Parce que la documentation est le premier point de contact entre un développeur et ton API. Si la documentation est claire, complète et interactive, le développeur peut intégrer ton API en 30 minutes. Si elle est absente ou incompréhensible, il va passer 3 heures à deviner comment tes endpoints fonctionnent — et il va te détester pour ça.</p>
<p>Les éléments essentiels d'une bonne documentation Swagger :</p>
<ul>
<li><strong>Exemples de requêtes :</strong> Montre exactement quel JSON envoyer pour chaque endpoint</li>
<li><strong>Exemples de réponses :</strong> Montre exactement quel JSON est retourné, pour chaque code de statut</li>
<li><strong>Tags :</strong> Regroupe les endpoints par catégorie (Auth, Projects, Tasks, Comments)</li>
<li><strong>Schémas :</strong> Définis les modèles de données réutilisables (Project, Task, User, Error)</li>
</ul>
<p><strong>Astuce :</strong> Utilise les commentaires JSDoc directement dans ton code pour générer la documentation Swagger automatiquement avec <code>swagger-jsdoc</code>. Ça évite de maintenir la documentation et le code séparément — quand tu modifies un endpoint, la documentation se met à jour automatiquement.</p>

<h2>Étape 6 : Tests et déploiement</h2>
<p>Avant de déployer, il faut tester. Demande à Claude Code :</p>
<blockquote>Écris des tests d'intégration avec Jest et Supertest pour les endpoints critiques : inscription, connexion, CRUD de projets, CRUD de tâches. Chaque test doit utiliser une base de données SQLite en mémoire. Configure le déploiement sur Railway avec une base PostgreSQL. Ajoute un pipeline CI/CD basique avec GitHub Actions qui lance les tests à chaque push.</blockquote>
<p>Les tests d'intégration vérifient que tes endpoints fonctionnent de bout en bout. Le pipeline CI/CD empêche de déployer du code cassé. Avec Railway, le déploiement est aussi simple qu'un git push. Ton API est maintenant en production, documentée et testée.</p>
<p>Un test d'intégration typique suit le pattern AAA (Arrange, Act, Assert) :</p>
<ol>
<li><strong>Arrange :</strong> Prépare les données de test (crée un utilisateur, connecte-le, crée un projet)</li>
<li><strong>Act :</strong> Exécute l'action à tester (envoie une requête POST pour créer une tâche)</li>
<li><strong>Assert :</strong> Vérifie le résultat (le code de statut est 201, la tâche est bien créée en base, les données retournées sont correctes)</li>
</ol>
<p>Les cas de test essentiels à couvrir :</p>
<ul>
<li><strong>Cas nominal :</strong> Tout se passe bien (inscription réussie, création de projet, etc.)</li>
<li><strong>Cas d'erreur :</strong> Données invalides, ressource inexistante, accès non autorisé</li>
<li><strong>Cas limite :</strong> Email déjà pris, projet sans tâches, token expiré</li>
</ul>
<p>Le pipeline GitHub Actions est ton filet de sécurité. À chaque <code>git push</code>, les tests sont lancés automatiquement. Si un test échoue, le déploiement est bloqué. Tu ne peux pas déployer du code cassé en production — c'est la base de la qualité logicielle.</p>
<p><strong>Conseil pro :</strong> Vise une couverture de test de 80% sur les routes API. Ce n'est pas la couverture à 100% qui est importante (elle est souvent contre-productive), mais la couverture des chemins critiques. Si l'inscription, la connexion et les CRUD sont testés, tu es en bonne forme.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'API complète en suivant les 6 étapes. Vérifie chaque endpoint avec Postman ou la documentation Swagger.</li>
<li>Teste le flux complet : inscription, connexion, création de projet, ajout de tâches, assignation, commentaires.</li>
<li>Vérifie que les protections fonctionnent : essaie d'accéder à un projet d'un autre utilisateur, d'envoyer des données invalides, de dépasser le rate limit.</li>
<li>Écris au minimum 10 tests d'intégration couvrant les cas critiques et les cas d'erreur.</li>
<li>Déploie sur Railway et partage l'URL de la documentation Swagger. Bonus : ajoute des webhooks qui envoient une notification quand une tâche est assignée.</li>
</ol>`,
  },
  {
    order: 51,
    module: 8,
    title: "Projet : Application full-stack déployée",
    slug: "projet-application-full-stack-deployee",
    duration: "90 min",
    description: "Construire une application complète avec frontend, backend, auth et déploiement sur Vercel.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet final du Module 8, et c'est le plus complet. Tu vas construire une application full-stack de gestion de projets, de la première ligne de code au déploiement en production. Cette application sera ta pièce maîtresse de portfolio : elle démontre que tu peux construire un produit complet, fonctionnel et déployé.</p>
<p>L'application est un gestionnaire de projets collaboratif. Chaque utilisateur peut créer des projets, ajouter des tâches avec des deadlines et des priorités, organiser ses tâches en colonnes Kanban, et suivre sa productivité avec un dashboard personnel.</p>
<p>Ce qui rend ce projet spécial, c'est qu'il combine TOUT ce que tu as appris dans les leçons précédentes : le layout de dashboard (Leçon 48), le CRUD avec Prisma (Leçon 49), l'authentification (Leçon 49), les graphiques interactifs (Leçon 48), le drag-and-drop Kanban (Leçon 49), et le déploiement (Leçon 46). C'est la synthèse de toutes tes compétences en un seul produit cohérent.</p>
<p>Imagine que tu passes un entretien et que le recruteur te demande "Montrez-moi votre meilleur projet". Tu ouvres cette application : inscription fonctionnelle, dashboard avec graphiques, vue Kanban interactive, le tout déployé en production. L'entretien est gagné avant même de parler technique.</p>
<p><strong>Astuce :</strong> Documente ton processus de construction. Prends des notes sur les décisions techniques, les problèmes rencontrés et les solutions trouvées avec Claude Code. Cette documentation sera précieuse pour tes futurs projets et pour expliquer ta démarche en entretien.</p>

<h2>Vue d'ensemble de l'application</h2>
<p>L'application finale comprend :</p>
<ul>
<li><strong>Page d'accueil</strong> : Landing page de présentation avec CTA vers l'inscription — première impression professionnelle</li>
<li><strong>Authentification</strong> : Inscription, connexion, déconnexion, page de profil — sécurité et personnalisation</li>
<li><strong>Dashboard</strong> : Vue d'ensemble avec KPIs (tâches terminées, en cours, en retard) — vision globale de la productivité</li>
<li><strong>Projets</strong> : Liste des projets, création, modification, suppression — organisation du travail</li>
<li><strong>Tâches</strong> : Vue Kanban avec drag-and-drop, formulaire de création/édition — gestion quotidienne des tâches</li>
<li><strong>Profil</strong> : Modifier son nom, email, avatar, mot de passe — personnalisation du compte</li>
</ul>
<p>C'est une application complète avec un vrai parcours utilisateur : le visiteur découvre la landing page, s'inscrit, explore le dashboard, crée son premier projet, ajoute des tâches, et les organise dans le Kanban. Chaque page a un rôle précis dans l'expérience utilisateur.</p>
<p>La structure des pages reflète un vrai produit SaaS. Les pages publiques (landing, login, register) n'ont pas de sidebar. Les pages privées (dashboard, projets, tâches, profil) partagent un layout commun avec sidebar et header. Cette séparation est standard dans l'industrie et montre que tu comprends l'architecture d'un vrai produit.</p>
<p><strong>Conseil pro :</strong> Avant de coder, crée un parcours utilisateur (user flow) sur papier. Dessine chaque écran et les flèches entre eux. Ça te donne une vision claire de l'application et évite de coder des pages orphelines ou des flux cassés.</p>

<h2>Étape 1 : Architecture et setup</h2>
<p>Demande à Claude Code de créer l'architecture complète :</p>
<blockquote>Crée un projet Next.js 14 avec App Router, TypeScript, Tailwind CSS, Prisma (SQLite pour dev), NextAuth.js. Structure les dossiers : /app/(auth)/login et register, /app/(dashboard)/dashboard, projects, projects/[id], profile. Crée le layout principal avec sidebar responsive. Configure Prisma avec les modèles User, Project, Task (title, description, status, priority, dueDate, projectId, assigneeId). Génère les migrations et un fichier seed.</blockquote>
<p>L'App Router de Next.js 14 permet d'organiser les routes avec des dossiers. Les groupes de routes entre parenthèses (auth) et (dashboard) permettent de partager des layouts différents entre les pages publiques et les pages protégées.</p>
<p>Concrètement, voici comment fonctionne la structure de dossiers :</p>
<ul>
<li><code>/app/(auth)/login/page.tsx</code> — page de connexion, utilise le layout minimaliste (sans sidebar)</li>
<li><code>/app/(auth)/register/page.tsx</code> — page d'inscription, même layout</li>
<li><code>/app/(dashboard)/dashboard/page.tsx</code> — dashboard, utilise le layout avec sidebar + header</li>
<li><code>/app/(dashboard)/projects/page.tsx</code> — liste des projets, même layout</li>
<li><code>/app/(dashboard)/projects/[id]/page.tsx</code> — détail d'un projet avec Kanban</li>
</ul>
<p>L'avantage des groupes de routes : le dossier <code>(auth)</code> a son propre <code>layout.tsx</code> (fond blanc, centré, pas de sidebar) et le dossier <code>(dashboard)</code> a le sien (sidebar fixe, header, zone de contenu). Next.js applique automatiquement le bon layout à chaque page.</p>
<p><strong>Attention :</strong> Le fichier seed est essentiel pour le développement. Demande à Claude Code de générer des données réalistes : 3 projets, 15-20 tâches par projet, avec des statuts variés (à faire, en cours, terminé, en retard). Sans données de test, ton application est vide et impossible à présenter lors d'une démo.</p>

<h2>Étape 2 : Authentification complète</h2>
<p>L'authentification est le premier élément à implémenter car toutes les autres pages en dépendent. Demande à Claude Code :</p>
<blockquote>Implémente l'authentification complète avec NextAuth.js : page de login avec email/mot de passe et design professionnel, page d'inscription avec validation (email valide, mot de passe 8 caractères minimum), redirection automatique vers le dashboard après connexion, middleware de protection des routes /dashboard/*, bouton de déconnexion dans la sidebar, affichage du nom et de l'avatar de l'utilisateur dans le header.</blockquote>
<p>Teste l'authentification en profondeur : essaie de créer un compte avec un email déjà utilisé, de te connecter avec un mauvais mot de passe, d'accéder au dashboard sans être connecté. Chaque cas doit afficher un message d'erreur clair et utile.</p>
<p>Le design des pages d'authentification est souvent négligé, mais c'est la première interaction de l'utilisateur avec ton application. Voici les éléments qui font la différence :</p>
<ul>
<li><strong>Formulaire centré :</strong> Sur un fond clair ou avec une image de fond subtile. Le formulaire est la star de la page, rien ne doit distraire.</li>
<li><strong>Validation en temps réel :</strong> L'email est-il valide ? Le mot de passe a-t-il assez de caractères ? Montre les erreurs sous chaque champ, pas dans une alerte globale.</li>
<li><strong>Bouton de soumission :</strong> Désactivé tant que le formulaire est invalide. En état de chargement (spinner) pendant la requête. Le texte change : "Créer mon compte" devient "Création en cours...".</li>
<li><strong>Lien entre les pages :</strong> "Déjà un compte ? Connecte-toi" sur la page d'inscription, et vice versa.</li>
</ul>
<p><strong>Astuce :</strong> Ajoute un champ "Confirmer le mot de passe" sur la page d'inscription. C'est un standard UX que les utilisateurs attendent. React Hook Form rend la validation croisée (password === confirmPassword) très simple avec la méthode <code>watch</code>.</p>
<p><strong>Conseil pro :</strong> Ajoute un indicateur de force du mot de passe (faible, moyen, fort) sous le champ mot de passe. C'est un détail UX qui impressionne et qui montre que tu prends la sécurité au sérieux. Utilise la librairie <code>zxcvbn</code> qui évalue la force du mot de passe de manière réaliste (pas juste "a-t-il un chiffre et un caractère spécial ?").</p>

<h2>Étape 3 : Gestion des projets</h2>
<p>Demande à Claude Code de construire l'interface de gestion des projets :</p>
<blockquote>Crée la page /projects avec une grille de cartes projet. Chaque carte affiche le nom du projet, la description (tronquée), le nombre de tâches total et terminées, une barre de progression, et la date de dernière mise à jour. Ajoute un bouton "Nouveau projet" qui ouvre un formulaire modal. Crée la page /projects/[id] avec le détail du projet : description complète, vue Kanban des tâches, et un onglet paramètres pour modifier ou supprimer le projet.</blockquote>
<p>La barre de progression sur chaque carte projet donne une vue instantanée de l'avancement. C'est un détail UX qui fait toute la différence dans un portfolio : cela montre que tu penses à l'expérience utilisateur et pas seulement à la fonctionnalité.</p>
<p>La grille de cartes projet doit être responsive :</p>
<ul>
<li><strong>Mobile (< 640px) :</strong> 1 colonne — chaque carte prend toute la largeur</li>
<li><strong>Tablette (640-1024px) :</strong> 2 colonnes — bon compromis entre lisibilité et densité</li>
<li><strong>Desktop (> 1024px) :</strong> 3-4 colonnes — utilise bien l'espace</li>
</ul>
<p>Le formulaire modal pour créer un projet doit être simple et rapide :</p>
<ul>
<li><strong>Nom du projet :</strong> Obligatoire, 3-50 caractères</li>
<li><strong>Description :</strong> Optionnelle, texte libre</li>
<li><strong>Couleur :</strong> Un sélecteur de couleur pour personnaliser la carte (6-8 couleurs prédéfinies)</li>
</ul>
<p>Ne demande pas trop d'informations à la création. L'utilisateur veut créer son projet rapidement et ajouter les détails plus tard. C'est un principe UX fondamental : réduire la friction au maximum pour les actions fréquentes.</p>
<p><strong>Attention :</strong> La suppression d'un projet est une action destructive. Elle doit supprimer aussi toutes les tâches associées (cascade delete dans Prisma). Affiche toujours une modale de confirmation : "Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible et supprimera toutes les tâches associées." Ne supprime jamais sans confirmation explicite.</p>

<h2>Étape 4 : Vue Kanban des tâches</h2>
<p>La vue Kanban est l'élément central de l'application. Demande à Claude Code :</p>
<blockquote>Crée une vue Kanban avec 4 colonnes : À faire, En cours, En review, Terminé. Chaque tâche est une carte draggable affichant le titre, la priorité (basse/moyenne/haute/urgente avec code couleur), la date d'échéance (rouge si dépassée), et l'avatar de l'assigné. Implémente le drag-and-drop avec @hello-pangea/dnd. Quand une carte est déplacée, mets à jour le statut en base de données via une route API. Ajoute un formulaire de création de tâche avec titre, description, priorité, date d'échéance et assigné.</blockquote>
<p>Le drag-and-drop est l'interaction qui rend l'application vraiment agréable à utiliser. Chaque déplacement doit être fluide, avec un feedback visuel clair (ombre portée sur la carte en cours de déplacement, highlight de la zone de dépôt). Claude Code va générer tout le code nécessaire avec les animations appropriées.</p>
<p>Les codes couleur pour les priorités sont standardisés et immédiatement compréhensibles :</p>
<ul>
<li><strong>Basse :</strong> Gris ou bleu clair — pas urgent, peut attendre</li>
<li><strong>Moyenne :</strong> Jaune ou orange clair — attention requise dans les prochains jours</li>
<li><strong>Haute :</strong> Orange vif — à traiter rapidement</li>
<li><strong>Urgente :</strong> Rouge — à traiter immédiatement, retard inacceptable</li>
</ul>
<p>La date d'échéance est un élément visuel puissant. Elle doit changer de couleur selon la proximité :</p>
<ul>
<li><strong>Vert :</strong> Plus de 7 jours — pas d'urgence</li>
<li><strong>Orange :</strong> 1 à 7 jours — se rapproche de la deadline</li>
<li><strong>Rouge :</strong> Dépassée — en retard, action immédiate nécessaire</li>
</ul>
<p><strong>Conseil pro :</strong> Ajoute un compteur de tâches dans le header de chaque colonne : "À faire (7)", "En cours (3)", "Terminé (12)". Ça donne une vue d'ensemble instantanée de la charge de travail sans avoir à compter les cartes visuellement. C'est un petit détail qui montre une vraie attention au design.</p>

<h2>Étape 5 : Dashboard personnel</h2>
<p>Le dashboard est la page d'accueil après connexion. Demande à Claude Code :</p>
<blockquote>Crée la page /dashboard avec : 4 KPI cards (tâches à faire, en cours, terminées cette semaine, en retard), un graphique en ligne montrant les tâches terminées par jour sur les 30 derniers jours (avec Recharts), une liste des 5 tâches les plus urgentes (triées par date d'échéance), un aperçu de l'activité récente (tâches créées, déplacées, terminées). Le dashboard doit se charger rapidement en utilisant les Server Components de Next.js.</blockquote>
<p>Les Server Components de Next.js 14 permettent de charger les données directement côté serveur, sans API calls supplémentaires. Le dashboard se charge en un seul round-trip, ce qui le rend très rapide. Claude Code va optimiser les requêtes Prisma pour charger toutes les données nécessaires efficacement.</p>
<p>Voici comment les Server Components améliorent la performance :</p>
<ul>
<li><strong>Sans Server Components :</strong> Le navigateur charge la page vide, puis envoie 4-5 requêtes API pour récupérer les données, puis affiche le contenu. Résultat : 2-3 secondes de chargement avec un écran blanc ou des spinners.</li>
<li><strong>Avec Server Components :</strong> Le serveur charge les données ET génère le HTML en une seule fois. Le navigateur reçoit la page complète avec toutes les données déjà intégrées. Résultat : moins d'une seconde de chargement.</li>
</ul>
<p>La liste des tâches urgentes est l'élément le plus actionnable du dashboard. L'utilisateur ouvre le dashboard le matin, regarde cette liste, et sait immédiatement sur quoi travailler en priorité. Chaque tâche urgente doit être cliquable et mener directement au projet correspondant.</p>
<p><strong>Astuce :</strong> Ajoute un message d'encouragement quand toutes les tâches urgentes sont traitées : "Bravo ! Tu n'as aucune tâche en retard. Continue comme ça !" C'est un petit détail de gamification qui rend l'application plus humaine et encourage la productivité. Les meilleures applications de productivité (Todoist, Habitica) utilisent ce type de renforcement positif.</p>

<h2>Étape 6 : Déploiement sur Vercel</h2>
<p>Le déploiement est la dernière étape, mais pas la moindre. Demande à Claude Code :</p>
<blockquote>Configure le déploiement sur Vercel : migre la base de données de SQLite vers PostgreSQL en utilisant Neon (gratuit), configure les variables d'environnement (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL), ajoute un domaine personnalisé si disponible, configure les headers de sécurité (CSP, HSTS). Ajoute un fichier README professionnel avec screenshots, stack technique, et instructions d'installation locale.</blockquote>
<p>La migration vers PostgreSQL en production est essentielle. SQLite est parfait pour le développement local, mais il n'est pas conçu pour la production web : il ne supporte pas les connexions multiples simultanées, et Vercel utilise des fonctions serverless qui ne peuvent pas accéder à un fichier local.</p>
<p>Voici la checklist de déploiement complète :</p>
<ol>
<li>Crée un compte Neon (neon.tech) et une base PostgreSQL gratuite</li>
<li>Copie l'URL de connexion PostgreSQL</li>
<li>Dans Vercel, ajoute les variables d'environnement : DATABASE_URL, NEXTAUTH_SECRET (génère une clé aléatoire de 32 caractères), NEXTAUTH_URL (l'URL de ton app en production)</li>
<li>Connecte ton dépôt GitHub à Vercel</li>
<li>Vercel déploie automatiquement — vérifie les logs du build pour les erreurs éventuelles</li>
<li>Exécute les migrations Prisma sur la base de production : <code>npx prisma db push</code></li>
<li>Teste l'inscription, la connexion et les fonctionnalités principales en production</li>
</ol>
<p>Ton application est maintenant en ligne. Tu as un produit complet, fonctionnel et déployé. C'est exactement ce que les clients et les recruteurs veulent voir : pas des exercices académiques, mais des vrais produits qui marchent. Ajoute le lien dans ton portfolio, sur ton LinkedIn, et dans ton CV.</p>
<p><strong>Conseil pro :</strong> Prends des screenshots de chaque page de ton application et crée un fichier README avec une section "Screenshots" bien formatée. Sur GitHub, le README est la première chose que voient les visiteurs. Un README avec des screenshots professionnels donne envie de cliquer sur le lien de démo. Un README vide ou basique donne l'impression d'un projet abandonné.</p>
<p>Ce projet seul démontre plus de compétences techniques que 90% des portfolios de développeurs juniors. Tu l'as construit en une journée grâce à Claude Code. C'est la preuve concrète que maîtriser l'IA ne remplace pas les compétences de développeur — elle les amplifie de manière spectaculaire.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'application complète en suivant les 6 étapes. Ne passe pas à l'étape suivante tant que l'étape en cours ne fonctionne pas parfaitement.</li>
<li>Crée 3 projets avec au minimum 10 tâches chacun pour que l'application semble vivante.</li>
<li>Teste toutes les fonctionnalités : inscription, connexion, création de projet, ajout de tâches, drag-and-drop Kanban, dashboard.</li>
<li>Déploie sur Vercel avec PostgreSQL et vérifie que tout fonctionne en production.</li>
<li>Prends des screenshots de l'application et crée une courte vidéo de démo (1-2 minutes) que tu pourras montrer à des clients potentiels.</li>
</ol>`,
  },
