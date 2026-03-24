function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_07_LESSONS = [
  {
    order: 1,
    module: 7,
    title: "Supabase : base de données + auth + storage en 1 outil",
    slug: "v2-supabase-bdd-auth-storage",
    duration: "30 min",
    description:
      "Découvre Supabase, l'alternative open source à Firebase. Configure une base de données PostgreSQL, un système d'authentification et du stockage de fichiers en quelques minutes.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Supabase ?",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p><strong>Supabase</strong> est une plateforme Backend-as-a-Service (BaaS) open source. Elle te donne tout ce dont tu as besoin pour construire un backend sans écrire de code serveur complexe :</p><ul><li><strong>Base de données PostgreSQL</strong> — la base de données relationnelle la plus puissante et populaire</li><li><strong>Auth</strong> — inscription, connexion, OAuth (Google, GitHub, etc.) en quelques lignes</li><li><strong>Storage</strong> — hébergement de fichiers (images, PDF, vidéos)</li><li><strong>Realtime</strong> — synchronisation en temps réel des données</li><li><strong>Edge Functions</strong> — fonctions serverless pour la logique métier</li></ul>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "tip",
        html: "<strong>Gratuit pour commencer :</strong> Le plan gratuit de Supabase inclut 500 Mo de base de données, 1 Go de storage, 50 000 utilisateurs actifs mensuels et un nombre illimité d'API calls. Largement suffisant pour démarrer.",
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
        text: "Créer ton premier projet Supabase",
      },
      {
        id: "1-6",
        type: "steps",
        steps: [
          {
            title: "Crée un compte",
            description:
              "Va sur supabase.com et connecte-toi avec ton compte GitHub. Crée une nouvelle organisation si c'est ta première fois.",
          },
          {
            title: "Crée un nouveau projet",
            description:
              "Clique sur \"New Project\", choisis un nom, un mot de passe pour la base de données et la région la plus proche de tes utilisateurs (EU West pour la France).",
          },
          {
            title: "Récupère les clés API",
            description:
              "Dans les Settings > API, tu trouveras l'URL du projet et les clés anon (publique) et service_role (secrète). Mets-les dans ton fichier .env.local.",
          },
          {
            title: "Installe le SDK",
            description:
              "Dans ton projet Next.js : npm install @supabase/supabase-js. Puis crée un fichier lib/supabase.ts pour initialiser le client.",
          },
        ],
      },
      {
        id: "1-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-8",
        type: "heading",
        level: 2,
        text: "La base de données : tables et relations",
      },
      {
        id: "1-9",
        type: "text",
        html: "<p>Supabase utilise <strong>PostgreSQL</strong>, une base de données relationnelle. Tes données sont organisées en <strong>tables</strong> (comme des feuilles Excel) avec des <strong>colonnes</strong> (les champs) et des <strong>lignes</strong> (les enregistrements).</p><p>Tu peux créer tes tables directement depuis le dashboard Supabase avec l'éditeur visuel, ou avec des requêtes SQL. Le dashboard te propose aussi un éditeur de données pour ajouter/modifier des lignes sans code.</p>",
      },
      {
        id: "1-10",
        type: "comparison",
        headers: ["Concept", "Analogie Excel", "Exemple"],
        rows: [
          { cells: ["Table", "Feuille de calcul", "users, products, orders"] },
          { cells: ["Colonne", "En-tête de colonne", "name, email, price"] },
          { cells: ["Ligne", "Une ligne de données", "Jean, jean@mail.com"] },
          { cells: ["Relation", "Lien entre feuilles", "Un order référence un user"] },
          { cells: ["Primary Key", "Identifiant unique", "id (auto-généré)"] },
        ],
      },
      {
        id: "1-11",
        type: "heading",
        level: 2,
        text: "Authentification en 5 minutes",
      },
      {
        id: "1-12",
        type: "text",
        html: "<p>Supabase Auth gère tout le flux d'authentification : inscription par email/mot de passe, connexion, réinitialisation de mot de passe, OAuth avec Google, GitHub, etc. Tu peux configurer les providers dans le dashboard et utiliser le SDK pour déclencher les flux.</p><p>Les <strong>Row Level Security (RLS)</strong> policies te permettent de définir qui peut lire, écrire ou modifier quelles données, directement au niveau de la base. C'est la clé de la sécurité de ton app.</p>",
      },
      {
        id: "1-13",
        type: "callout",
        variant: "warning",
        html: "<strong>Important :</strong> Active TOUJOURS les RLS (Row Level Security) sur tes tables en production. Sans RLS, n'importe qui avec ta clé anon peut lire et modifier toutes les données.",
      },
    ]),
    exercise:
      "<h3>Exercice : Configure Supabase pour ton projet</h3><p>Mets en place Supabase avec une base de données et l'authentification.</p><ol><li>Crée un projet Supabase et récupère les clés API.</li><li>Installe <code>@supabase/supabase-js</code> et crée un fichier <code>lib/supabase.ts</code> avec le client initialisé.</li><li>Crée une table <code>profiles</code> dans le dashboard avec les colonnes : id (uuid, primary key), username (text), avatar_url (text), created_at (timestamp).</li><li>Active RLS sur la table et crée une policy permettant aux utilisateurs de lire tous les profils et de modifier uniquement le leur.</li><li>Active l'auth par email/mot de passe dans Authentication > Providers.</li><li>Crée un formulaire d'inscription dans ton app Next.js qui utilise <code>supabase.auth.signUp()</code>.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Qu'est-ce que Supabase ?",
        options: JSON.stringify([
          "Un éditeur de code",
          "Une plateforme Backend-as-a-Service open source basée sur PostgreSQL",
          "Un framework frontend",
          "Un outil de design",
        ]),
        correctAnswer:
          "Une plateforme Backend-as-a-Service open source basée sur PostgreSQL",
        explanation:
          "Supabase est un BaaS qui combine base de données PostgreSQL, authentification, storage et fonctions serverless en une seule plateforme.",
      },
      {
        type: "true_false",
        question:
          "La clé service_role de Supabase peut être utilisée en toute sécurité dans le code frontend.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "La clé service_role est secrète et donne un accès complet à la base de données sans restrictions RLS. Elle ne doit JAMAIS être exposée côté client. Utilise la clé anon pour le frontend.",
      },
      {
        type: "mcq",
        question: "À quoi servent les Row Level Security (RLS) policies ?",
        options: JSON.stringify([
          "À chiffrer les données",
          "À définir qui peut accéder à quelles données au niveau de la base",
          "À optimiser les performances des requêtes",
          "À sauvegarder automatiquement la base de données",
        ]),
        correctAnswer:
          "À définir qui peut accéder à quelles données au niveau de la base",
        explanation:
          "Les RLS policies permettent de contrôler finement les accès : un utilisateur ne peut lire que ses propres données, par exemple. C'est la couche de sécurité principale.",
      },
      {
        type: "mcq",
        question:
          "Quel type de base de données utilise Supabase ?",
        options: JSON.stringify([
          "MongoDB (NoSQL)",
          "MySQL",
          "PostgreSQL",
          "SQLite",
        ]),
        correctAnswer: "PostgreSQL",
        explanation:
          "Supabase est construit sur PostgreSQL, la base de données relationnelle open source la plus avancée et la plus utilisée par les développeurs.",
      },
      {
        type: "true_false",
        question:
          "Supabase permet de gérer l'authentification OAuth (Google, GitHub) sans écrire de backend custom.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Supabase Auth prend en charge les providers OAuth (Google, GitHub, Apple, etc.) directement. Il suffit de configurer les credentials dans le dashboard.",
      },
    ],
  },
  {
    order: 2,
    module: 7,
    title: "SQL : les requêtes essentielles (avec Claude)",
    slug: "v2-sql-requetes-essentielles-claude",
    duration: "25 min",
    description:
      "Apprends les requêtes SQL fondamentales pour lire, écrire et manipuler tes données. Utilise Claude pour générer et optimiser tes requêtes.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Pourquoi apprendre SQL ?",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>SQL (Structured Query Language) est le langage universel pour communiquer avec les bases de données relationnelles. Même si Supabase te permet de manipuler les données via son SDK JavaScript, comprendre SQL te donne un <strong>superpouvoir</strong> :</p><ul><li>Tu comprends ce qui se passe \"sous le capot\"</li><li>Tu peux écrire des requêtes complexes que le SDK ne couvre pas</li><li>Tu peux debugger des problèmes de données plus facilement</li><li>C'est une compétence transférable à tout projet utilisant une base de données</li></ul>",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "tip",
        html: "<strong>Claude + SQL :</strong> Décris en français ce que tu veux faire (\"je veux les 10 dernières commandes avec le nom du client\") et Claude te génère la requête SQL. Apprends les bases pour comprendre et adapter ce qu'il génère.",
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
        text: "Les 4 opérations CRUD",
      },
      {
        id: "2-6",
        type: "comparison",
        headers: ["Opération", "SQL", "Description"],
        rows: [
          { cells: ["Create", "INSERT INTO", "Ajouter une nouvelle ligne"] },
          { cells: ["Read", "SELECT", "Lire des données"] },
          { cells: ["Update", "UPDATE", "Modifier des données existantes"] },
          { cells: ["Delete", "DELETE", "Supprimer des données"] },
        ],
      },
      {
        id: "2-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-8",
        type: "heading",
        level: 2,
        text: "SELECT : lire des données",
      },
      {
        id: "2-9",
        type: "text",
        html: "<p>SELECT est la requête la plus utilisée. Elle permet de récupérer des données depuis une ou plusieurs tables :</p><ul><li><code>SELECT * FROM users</code> — récupère toutes les colonnes de tous les utilisateurs</li><li><code>SELECT name, email FROM users</code> — récupère uniquement le nom et l'email</li><li><code>SELECT * FROM users WHERE role = 'admin'</code> — filtre les administrateurs</li><li><code>SELECT * FROM users ORDER BY created_at DESC LIMIT 10</code> — les 10 derniers inscrits</li></ul>",
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "INSERT, UPDATE, DELETE",
      },
      {
        id: "2-11",
        type: "text",
        html: "<p><strong>INSERT</strong> — ajouter des données :</p><p><code>INSERT INTO products (name, price) VALUES ('T-shirt', 29.99)</code></p><p><strong>UPDATE</strong> — modifier des données existantes :</p><p><code>UPDATE products SET price = 24.99 WHERE name = 'T-shirt'</code></p><p><strong>DELETE</strong> — supprimer des données :</p><p><code>DELETE FROM products WHERE id = 42</code></p>",
      },
      {
        id: "2-12",
        type: "callout",
        variant: "warning",
        html: "<strong>Danger :</strong> Un <code>DELETE FROM products</code> sans WHERE supprime TOUTES les lignes de la table. Vérifie toujours ta clause WHERE avant d'exécuter un UPDATE ou DELETE.",
      },
      {
        id: "2-13",
        type: "heading",
        level: 2,
        text: "Les JOINs : relier des tables",
      },
      {
        id: "2-14",
        type: "text",
        html: "<p>Les données sont réparties dans plusieurs tables. Les <strong>JOINs</strong> permettent de les relier pour obtenir des résultats combinés :</p><p>Par exemple, si tu as une table <code>orders</code> et une table <code>users</code>, un JOIN te permet de récupérer les commandes avec le nom du client :</p><p><code>SELECT orders.id, users.name, orders.total FROM orders JOIN users ON orders.user_id = users.id</code></p><p>Le <strong>LEFT JOIN</strong> inclut aussi les lignes sans correspondance (par exemple, un utilisateur sans commande).</p>",
      },
      {
        id: "2-15",
        type: "steps",
        steps: [
          {
            title: "Identifie tes tables",
            description: "Quelles tables contiennent les données dont tu as besoin ? Exemple : users et orders.",
          },
          {
            title: "Trouve la clé de liaison",
            description: "Quel champ lie les deux tables ? En général, c'est une foreign key comme user_id dans la table orders qui pointe vers id dans users.",
          },
          {
            title: "Écris le JOIN",
            description: "Utilise JOIN ... ON pour relier les tables sur la clé commune. Teste avec un LIMIT 5 pour vérifier le résultat.",
          },
          {
            title: "Ajoute les filtres et le tri",
            description: "Ajoute WHERE pour filtrer, ORDER BY pour trier et LIMIT pour limiter les résultats.",
          },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Requêtes SQL dans Supabase</h3><p>Pratique les requêtes SQL directement dans l'éditeur SQL de Supabase.</p><ol><li>Ouvre l'éditeur SQL dans le dashboard Supabase de ton projet.</li><li>Crée une table <code>products</code> avec SQL : id (serial primary key), name (text), price (numeric), category (text), created_at (timestamp default now()).</li><li>Insère 5 produits avec des catégories différentes.</li><li>Écris un SELECT pour récupérer tous les produits de moins de 50 euros, triés par prix croissant.</li><li>Fais un UPDATE pour augmenter le prix de tous les produits de la catégorie \"premium\" de 10%.</li><li>Crée une table <code>orders</code> avec une foreign key vers products, et écris un JOIN pour lister les commandes avec le nom du produit.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Que signifie SQL ?",
        options: JSON.stringify([
          "Simple Query Logic",
          "Structured Query Language",
          "Server Query Loader",
          "Standard Quick Language",
        ]),
        correctAnswer: "Structured Query Language",
        explanation:
          "SQL (Structured Query Language) est le langage standard pour interroger et manipuler les bases de données relationnelles.",
      },
      {
        type: "mcq",
        question:
          "Quelle requête SQL récupère uniquement les utilisateurs dont le rôle est 'admin' ?",
        options: JSON.stringify([
          "SELECT * FROM users FIND role = 'admin'",
          "SELECT * FROM users WHERE role = 'admin'",
          "GET users WHERE role = 'admin'",
          "SELECT * FROM users IF role = 'admin'",
        ]),
        correctAnswer: "SELECT * FROM users WHERE role = 'admin'",
        explanation:
          "La clause WHERE filtre les résultats. SELECT * FROM users WHERE role = 'admin' retourne uniquement les lignes où le rôle est admin.",
      },
      {
        type: "true_false",
        question:
          "Un DELETE FROM users sans clause WHERE supprime toutes les lignes de la table.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Sans WHERE, DELETE agit sur TOUTES les lignes. C'est pourquoi il faut toujours vérifier la clause WHERE avant d'exécuter un DELETE ou UPDATE.",
      },
      {
        type: "mcq",
        question: "À quoi sert un JOIN en SQL ?",
        options: JSON.stringify([
          "À supprimer des tables",
          "À combiner des données de plusieurs tables en une seule requête",
          "À créer de nouvelles colonnes",
          "À sauvegarder la base de données",
        ]),
        correctAnswer:
          "À combiner des données de plusieurs tables en une seule requête",
        explanation:
          "Un JOIN relie des tables entre elles via une clé commune pour combiner leurs données dans un seul résultat.",
      },
      {
        type: "true_false",
        question:
          "L'ordre des opérations SQL est : SELECT, FROM, WHERE, ORDER BY, LIMIT.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "C'est l'ordre syntaxique standard d'une requête SQL : SELECT (quoi) FROM (d'où) WHERE (filtres) ORDER BY (tri) LIMIT (nombre de résultats).",
      },
      {
        type: "mcq",
        question:
          "Quelle est la différence entre INSERT INTO et UPDATE ?",
        options: JSON.stringify([
          "Il n'y a aucune différence",
          "INSERT crée une nouvelle ligne, UPDATE modifie une ligne existante",
          "INSERT est pour les textes, UPDATE pour les nombres",
          "INSERT est plus rapide que UPDATE",
        ]),
        correctAnswer:
          "INSERT crée une nouvelle ligne, UPDATE modifie une ligne existante",
        explanation:
          "INSERT INTO ajoute une nouvelle entrée dans la table. UPDATE modifie les données d'une ou plusieurs lignes existantes identifiées par WHERE.",
      },
    ],
  },
  {
    order: 3,
    module: 7,
    title: "API Routes : créer ton backend",
    slug: "v2-api-routes-creer-backend",
    duration: "25 min",
    description:
      "Crée des endpoints API dans Next.js pour gérer la logique serveur : traitement de formulaires, appels à des services externes et opérations sécurisées.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Qu'est-ce qu'une API Route ?",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Les <strong>API Routes</strong> de Next.js te permettent de créer des endpoints backend directement dans ton projet. Au lieu d'avoir un serveur Node.js séparé, tu crées des fichiers <code>route.ts</code> dans le dossier <code>app/api/</code> et Next.js les transforme en endpoints HTTP.</p><p>Cas d'usage :</p><ul><li>Traiter des formulaires de contact</li><li>Appeler des APIs externes en masquant tes clés API</li><li>Gérer des webhooks (Stripe, etc.)</li><li>Créer des endpoints pour ton app mobile</li></ul>",
      },
      {
        id: "3-3",
        type: "callout",
        variant: "info",
        html: "<strong>Avantage sécurité :</strong> Le code des API Routes s'exécute côté serveur. Tu peux y utiliser des clés API secrètes (Stripe, OpenAI, etc.) sans les exposer au navigateur.",
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
        text: "Créer ta première API Route",
      },
      {
        id: "3-6",
        type: "steps",
        steps: [
          {
            title: "Crée le fichier route",
            description:
              "Crée app/api/hello/route.ts. Le chemin du fichier détermine l'URL de l'endpoint : /api/hello.",
          },
          {
            title: "Exporte une fonction HTTP",
            description:
              "Exporte une fonction nommée GET, POST, PUT ou DELETE. Next.js la routera automatiquement selon la méthode HTTP utilisée.",
          },
          {
            title: "Retourne une Response",
            description:
              "Utilise NextResponse.json() pour retourner des données JSON. Tu peux aussi définir le status code et les headers.",
          },
          {
            title: "Teste l'endpoint",
            description:
              "Ouvre ton navigateur sur localhost:3000/api/hello pour tester un GET, ou utilise un outil comme Postman ou curl pour tester POST.",
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
        text: "Gérer les différentes méthodes HTTP",
      },
      {
        id: "3-9",
        type: "text",
        html: "<p>Dans un seul fichier <code>route.ts</code>, tu peux exporter plusieurs fonctions pour gérer différentes méthodes :</p><ul><li><code>export async function GET(request: Request)</code> — lire des données</li><li><code>export async function POST(request: Request)</code> — créer des données</li><li><code>export async function PUT(request: Request)</code> — mettre à jour des données</li><li><code>export async function DELETE(request: Request)</code> — supprimer des données</li></ul><p>Pour lire le body d'une requête POST, utilise <code>await request.json()</code>. Pour lire les query params, utilise <code>new URL(request.url).searchParams</code>.</p>",
      },
      {
        id: "3-10",
        type: "heading",
        level: 2,
        text: "Bonnes pratiques",
      },
      {
        id: "3-11",
        type: "checklist",
        title: "Checklist API Routes",
        items: [
          { id: "c1", text: "Valider les données entrantes (ne jamais faire confiance au client)" },
          { id: "c2", text: "Retourner des codes de statut appropriés (200, 201, 400, 404, 500)" },
          { id: "c3", text: "Gérer les erreurs avec try/catch et retourner des messages clairs" },
          { id: "c4", text: "Stocker les clés API dans les variables d'environnement (.env.local)" },
          { id: "c5", text: "Limiter le rate limiting pour éviter les abus" },
          { id: "c6", text: "Logger les erreurs pour le debugging en production" },
        ],
      },
      {
        id: "3-12",
        type: "comparison",
        headers: ["Code HTTP", "Signification", "Quand l'utiliser"],
        rows: [
          { cells: ["200", "OK", "Requête réussie"] },
          { cells: ["201", "Created", "Ressource créée avec succès"] },
          { cells: ["400", "Bad Request", "Données invalides envoyées par le client"] },
          { cells: ["401", "Unauthorized", "L'utilisateur n'est pas authentifié"] },
          { cells: ["404", "Not Found", "La ressource demandée n'existe pas"] },
          { cells: ["500", "Internal Server Error", "Erreur côté serveur"] },
        ],
      },
      {
        id: "3-13",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce :</strong> Utilise un outil comme Thunder Client (extension VS Code) ou simplement <code>curl</code> pour tester tes API Routes sans quitter ton éditeur.",
      },
    ]),
    exercise:
      "<h3>Exercice : API CRUD pour une todo list</h3><p>Crée une API complète pour gérer une liste de tâches.</p><ol><li>Crée une table <code>todos</code> dans Supabase avec les colonnes : id, title (text), completed (boolean), user_id (uuid), created_at.</li><li>Crée <code>app/api/todos/route.ts</code> avec un GET (lister les todos) et un POST (créer un todo).</li><li>Crée <code>app/api/todos/[id]/route.ts</code> avec un PUT (marquer comme complété) et un DELETE (supprimer).</li><li>Ajoute de la validation : le title doit avoir au moins 3 caractères.</li><li>Gère les erreurs : retourne un 404 si le todo n'existe pas, un 400 si les données sont invalides.</li><li>Teste tous tes endpoints avec Postman ou Thunder Client.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Où crée-t-on les API Routes dans un projet Next.js App Router ?",
        options: JSON.stringify([
          "Dans le dossier pages/api/",
          "Dans le dossier app/api/ avec des fichiers route.ts",
          "Dans un fichier server.js à la racine",
          "Dans le fichier next.config.js",
        ]),
        correctAnswer:
          "Dans le dossier app/api/ avec des fichiers route.ts",
        explanation:
          "Avec l'App Router de Next.js, les API Routes sont des fichiers route.ts placés dans app/api/. Le chemin du dossier détermine l'URL de l'endpoint.",
      },
      {
        type: "true_false",
        question:
          "Le code des API Routes Next.js s'exécute côté navigateur.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Les API Routes s'exécutent exclusivement côté serveur. C'est pourquoi on peut y utiliser des clés API secrètes en toute sécurité.",
      },
      {
        type: "mcq",
        question: "Quel code HTTP indique que la ressource a été créée avec succès ?",
        options: JSON.stringify([
          "200",
          "201",
          "301",
          "404",
        ]),
        correctAnswer: "201",
        explanation:
          "Le code 201 (Created) indique qu'une nouvelle ressource a été créée. On l'utilise après un POST réussi, par exemple la création d'un utilisateur.",
      },
      {
        type: "mcq",
        question:
          "Comment lire le body JSON d'une requête POST dans une API Route Next.js ?",
        options: JSON.stringify([
          "request.body",
          "request.data()",
          "await request.json()",
          "JSON.parse(request)",
        ]),
        correctAnswer: "await request.json()",
        explanation:
          "Dans les API Routes Next.js, le body est lu de manière asynchrone avec await request.json(), qui parse le JSON envoyé par le client.",
      },
      {
        type: "true_false",
        question:
          "On peut exporter plusieurs fonctions HTTP (GET, POST, PUT, DELETE) dans le même fichier route.ts.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Un seul fichier route.ts peut exporter GET, POST, PUT et DELETE. Next.js route automatiquement vers la bonne fonction selon la méthode HTTP utilisée.",
      },
    ],
  },
  {
    order: 4,
    module: 7,
    title: "Stripe : paiements + webhooks",
    slug: "v2-stripe-paiements-webhooks",
    duration: "25 min",
    description:
      "Intègre Stripe pour accepter des paiements en ligne. Configure Checkout, gère les webhooks et suis les transactions en toute sécurité.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Stripe ?",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p><strong>Stripe</strong> est la plateforme de paiement la plus utilisée par les développeurs et les startups. Elle gère tout : cartes bancaires, virements, abonnements, factures, remboursements, et conformité réglementaire (PCI DSS).</p><p>Avantages :</p><ul><li><strong>API developer-friendly</strong> — documentation excellente, SDK pour tous les langages</li><li><strong>Stripe Checkout</strong> — page de paiement hébergée, aucun formulaire à créer</li><li><strong>Webhooks</strong> — notifications en temps réel des événements (paiement réussi, échoué, etc.)</li><li><strong>Mode test</strong> — teste gratuitement avec des cartes fictives avant de passer en production</li></ul>",
      },
      {
        id: "4-3",
        type: "callout",
        variant: "tip",
        html: "<strong>Mode test :</strong> Stripe fournit des clés API de test (préfixées par sk_test_) et des numéros de carte fictifs. La carte 4242 4242 4242 4242 simule un paiement réussi. Tu ne seras jamais facturé en mode test.",
      },
      {
        id: "4-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-5",
        type: "heading",
        level: 2,
        text: "Stripe Checkout : le flux de paiement",
      },
      {
        id: "4-6",
        type: "steps",
        steps: [
          {
            title: "L'utilisateur clique sur \"Acheter\"",
            description:
              "Ton frontend envoie une requête à ton API Route avec les détails du produit (prix, quantité, etc.).",
          },
          {
            title: "Ton API crée une session Checkout",
            description:
              "Côté serveur, tu appelles stripe.checkout.sessions.create() avec les détails du produit et les URLs de redirection (succès/annulation).",
          },
          {
            title: "Stripe redirige vers la page de paiement",
            description:
              "L'utilisateur est redirigé vers une page Stripe hébergée et sécurisée. Il entre ses infos bancaires directement chez Stripe.",
          },
          {
            title: "Paiement traité",
            description:
              "Stripe traite le paiement et redirige l'utilisateur vers ta page de succès. En parallèle, un webhook notifie ton serveur.",
          },
        ],
      },
      {
        id: "4-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-8",
        type: "heading",
        level: 2,
        text: "Les webhooks : écouter les événements",
      },
      {
        id: "4-9",
        type: "text",
        html: "<p>Un <strong>webhook</strong> est une notification HTTP que Stripe envoie à ton serveur quand un événement se produit. C'est la méthode fiable pour savoir qu'un paiement est confirmé — ne te fie jamais uniquement à la redirection de l'utilisateur.</p><p>Événements courants :</p><ul><li><code>checkout.session.completed</code> — paiement réussi</li><li><code>payment_intent.payment_failed</code> — paiement échoué</li><li><code>customer.subscription.created</code> — nouvel abonnement</li><li><code>customer.subscription.deleted</code> — abonnement annulé</li></ul>",
      },
      {
        id: "4-10",
        type: "callout",
        variant: "warning",
        html: "<strong>Sécurité webhook :</strong> Vérifie TOUJOURS la signature du webhook avec <code>stripe.webhooks.constructEvent()</code>. Sans cette vérification, n'importe qui pourrait envoyer de fausses notifications à ton endpoint.",
      },
      {
        id: "4-11",
        type: "comparison",
        headers: ["Approche", "Checkout (redirection)", "Payment Intent (intégré)"],
        rows: [
          { cells: ["Complexité", "Simple — 10 lignes de code", "Complexe — formulaire custom"] },
          { cells: ["UI", "Page Stripe hébergée", "Formulaire intégré à ton site"] },
          { cells: ["Conformité PCI", "Gérée par Stripe", "Tu dois gérer certains aspects"] },
          { cells: ["Idéal pour", "MVP, e-commerce simple", "Expérience personnalisée"] },
        ],
      },
      {
        id: "4-12",
        type: "text",
        html: "<p>Pour la majorité des projets, <strong>Stripe Checkout</strong> est le meilleur choix : simple, sécurisé, et il gère automatiquement les cas complexes (3D Secure, devises, taxes). Utilise Payment Intent uniquement si tu as besoin d'une expérience de paiement entièrement personnalisée.</p>",
      },
    ]),
    exercise:
      "<h3>Exercice : Intègre Stripe Checkout</h3><p>Ajoute un système de paiement à ton projet.</p><ol><li>Crée un compte Stripe et récupère tes clés API de test.</li><li>Installe <code>stripe</code> côté serveur : <code>npm install stripe</code>.</li><li>Crée une API Route <code>app/api/checkout/route.ts</code> qui crée une session Checkout avec un produit (nom, prix, quantité).</li><li>Crée un bouton \"Acheter\" dans ton frontend qui appelle cette API et redirige vers Stripe.</li><li>Crée les pages <code>/success</code> et <code>/cancel</code> pour les redirections.</li><li>Crée un webhook <code>app/api/webhook/stripe/route.ts</code> qui écoute l'événement <code>checkout.session.completed</code> et log les détails du paiement.</li><li>Teste avec la carte 4242 4242 4242 4242.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Qu'est-ce que Stripe Checkout ?",
        options: JSON.stringify([
          "Un formulaire de paiement que tu crées toi-même",
          "Une page de paiement hébergée et sécurisée par Stripe",
          "Un plugin WordPress",
          "Un outil de comptabilité",
        ]),
        correctAnswer:
          "Une page de paiement hébergée et sécurisée par Stripe",
        explanation:
          "Stripe Checkout est une page de paiement pré-construite et hébergée par Stripe. Elle gère le formulaire, la sécurité (PCI DSS) et les cas complexes (3D Secure).",
      },
      {
        type: "true_false",
        question:
          "On peut se fier uniquement à la redirection vers la page de succès pour confirmer un paiement.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "La redirection peut être manipulée. Il faut toujours utiliser les webhooks pour confirmer qu'un paiement est réellement réussi côté serveur.",
      },
      {
        type: "mcq",
        question: "Qu'est-ce qu'un webhook Stripe ?",
        options: JSON.stringify([
          "Un bouton de paiement",
          "Une notification HTTP que Stripe envoie à ton serveur quand un événement se produit",
          "Un type de carte bancaire",
          "Un fichier de configuration Stripe",
        ]),
        correctAnswer:
          "Une notification HTTP que Stripe envoie à ton serveur quand un événement se produit",
        explanation:
          "Un webhook est un appel HTTP automatique de Stripe vers ton serveur pour te notifier d'événements : paiement réussi, abonnement créé, etc.",
      },
      {
        type: "mcq",
        question:
          "Quel numéro de carte utiliser pour tester un paiement réussi en mode test Stripe ?",
        options: JSON.stringify([
          "1234 5678 9012 3456",
          "4242 4242 4242 4242",
          "0000 0000 0000 0000",
          "Il faut une vraie carte",
        ]),
        correctAnswer: "4242 4242 4242 4242",
        explanation:
          "4242 4242 4242 4242 est le numéro de carte de test standard de Stripe. Il simule un paiement réussi. D'autres numéros simulent des échecs ou du 3D Secure.",
      },
      {
        type: "true_false",
        question:
          "La clé secrète Stripe (sk_) doit être stockée dans les variables d'environnement côté serveur, jamais dans le code frontend.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "La clé secrète donne un accès complet à ton compte Stripe. Elle doit être dans .env.local et utilisée uniquement dans les API Routes côté serveur.",
      },
    ],
  },
  {
    order: 5,
    module: 7,
    title: "Vercel : déployer en prod et brancher un nom de domaine",
    slug: "v2-vercel-deployer-prod-domaine",
    duration: "20 min",
    description:
      "Déploie ton application Next.js sur Vercel en quelques clics. Configure un nom de domaine custom, les variables d'environnement et le déploiement automatique.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Vercel ?",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p><strong>Vercel</strong> est la plateforme de déploiement créée par les développeurs de Next.js. C'est l'hébergeur idéal pour les projets Next.js car il :</p><ul><li><strong>Déploie automatiquement</strong> à chaque push sur GitHub</li><li><strong>Gère les previews</strong> — chaque Pull Request a sa propre URL de preview</li><li><strong>Optimise automatiquement</strong> les performances (CDN mondial, cache intelligent)</li><li><strong>Supporte les Edge Functions</strong> et les API Routes nativement</li><li><strong>Plan gratuit généreux</strong> — suffisant pour la plupart des projets personnels et freelance</li></ul>",
      },
      {
        id: "5-3",
        type: "separator",
        style: "dots",
      },
      {
        id: "5-4",
        type: "heading",
        level: 2,
        text: "Déployer en 3 minutes",
      },
      {
        id: "5-5",
        type: "steps",
        steps: [
          {
            title: "Pousse ton code sur GitHub",
            description:
              "Assure-toi que ton projet est à jour sur GitHub. Vercel va se connecter à ton repo.",
          },
          {
            title: "Connecte-toi sur Vercel",
            description:
              "Va sur vercel.com et connecte-toi avec ton compte GitHub. Clique sur \"Add New Project\".",
          },
          {
            title: "Importe ton repo",
            description:
              "Sélectionne le repo GitHub de ton projet. Vercel détecte automatiquement que c'est un projet Next.js.",
          },
          {
            title: "Configure les variables d'environnement",
            description:
              "Ajoute tes variables d'environnement (clés Supabase, Stripe, etc.) AVANT de déployer. Elles seront chiffrées et utilisées côté serveur.",
          },
          {
            title: "Déploie",
            description:
              "Clique sur Deploy. Vercel build et déploie ton projet en quelques secondes. Tu reçois une URL en .vercel.app.",
          },
        ],
      },
      {
        id: "5-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Déploiement automatique :</strong> Après la première configuration, chaque push sur la branche main déclenche automatiquement un nouveau déploiement. Les pushes sur d'autres branches créent des Preview Deployments avec des URLs uniques.",
      },
      {
        id: "5-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "5-8",
        type: "heading",
        level: 2,
        text: "Brancher un nom de domaine custom",
      },
      {
        id: "5-9",
        type: "steps",
        steps: [
          {
            title: "Achète un domaine",
            description:
              "Achète un nom de domaine chez un registrar comme Namecheap, OVH, Google Domains ou directement chez Vercel. Les prix commencent autour de 10 euros/an.",
          },
          {
            title: "Ajoute le domaine dans Vercel",
            description:
              "Dans les Settings de ton projet Vercel, va dans Domains et ajoute ton domaine (ex: monsite.com).",
          },
          {
            title: "Configure les DNS",
            description:
              "Vercel te donne les enregistrements DNS à ajouter chez ton registrar. En général, un enregistrement A pointant vers 76.76.21.21 et un CNAME pour www.",
          },
          {
            title: "Attends la propagation",
            description:
              "Les changements DNS prennent de quelques minutes à 48h. Vercel configure automatiquement le certificat SSL (HTTPS) une fois les DNS propagés.",
          },
        ],
      },
      {
        id: "5-10",
        type: "heading",
        level: 2,
        text: "Variables d'environnement et sécurité",
      },
      {
        id: "5-11",
        type: "text",
        html: "<p>Sur Vercel, les variables d'environnement sont configurées par <strong>environnement</strong> :</p><ul><li><strong>Production</strong> — le site en ligne (main)</li><li><strong>Preview</strong> — les déploiements de PR</li><li><strong>Development</strong> — ton environnement local</li></ul><p>Tu peux avoir des valeurs différentes pour chaque environnement. Par exemple, utiliser les clés Stripe de test en preview et les clés de production sur main.</p>",
      },
      {
        id: "5-12",
        type: "callout",
        variant: "warning",
        html: "<strong>Rappel :</strong> Ne commite JAMAIS tes variables d'environnement dans Git. Le fichier <code>.env.local</code> doit être dans ton <code>.gitignore</code>. Sur Vercel, configure-les via le dashboard.",
      },
      {
        id: "5-13",
        type: "checklist",
        title: "Checklist déploiement production",
        items: [
          { id: "c1", text: "Toutes les variables d'environnement sont configurées sur Vercel" },
          { id: "c2", text: "Les clés API de production (pas de test) sont utilisées" },
          { id: "c3", text: "Le domaine custom est configuré et le SSL actif" },
          { id: "c4", text: "Les webhooks (Stripe, etc.) pointent vers l'URL de production" },
          { id: "c5", text: "Les métadonnées SEO (title, description, og:image) sont en place" },
          { id: "c6", text: "La page fonctionne en mobile" },
          { id: "c7", text: "Les formulaires et paiements fonctionnent en production" },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Déploie ton projet en production</h3><p>Mets en ligne ton projet Next.js sur Vercel.</p><ol><li>Assure-toi que ton projet est à jour sur GitHub (tous les changements commités et poussés).</li><li>Crée un compte Vercel et importe ton projet GitHub.</li><li>Ajoute toutes les variables d'environnement nécessaires (Supabase, Stripe, etc.).</li><li>Déploie et vérifie que tout fonctionne sur l'URL Vercel.</li><li>Si tu as un nom de domaine, configure-le dans les settings Vercel.</li><li>Fais une modification dans ton code, pousse sur GitHub et vérifie que le déploiement automatique fonctionne.</li><li>Crée une branche, fais un changement, pousse et vérifie le Preview Deployment.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Qu'est-ce qui déclenche un déploiement automatique sur Vercel ?",
        options: JSON.stringify([
          "Un clic sur un bouton dans le dashboard",
          "Un push sur la branche main de ton repo GitHub",
          "Un redémarrage du serveur",
          "Une modification des DNS",
        ]),
        correctAnswer:
          "Un push sur la branche main de ton repo GitHub",
        explanation:
          "Vercel est connecté à ton repo GitHub. Chaque push sur main déclenche automatiquement un build et un déploiement en production.",
      },
      {
        type: "true_false",
        question:
          "Les variables d'environnement doivent être ajoutées sur Vercel car le fichier .env.local n'est pas envoyé sur GitHub.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Le fichier .env.local est dans .gitignore et n'est pas poussé sur GitHub. Les variables d'environnement doivent être configurées séparément dans le dashboard Vercel.",
      },
      {
        type: "mcq",
        question:
          "Qu'est-ce qu'un Preview Deployment sur Vercel ?",
        options: JSON.stringify([
          "Le site en production",
          "Un déploiement temporaire généré pour chaque Pull Request",
          "Un mode de test local",
          "Une sauvegarde automatique",
        ]),
        correctAnswer:
          "Un déploiement temporaire généré pour chaque Pull Request",
        explanation:
          "Chaque PR crée automatiquement un Preview Deployment avec une URL unique. C'est parfait pour tester les changements avant de merger.",
      },
      {
        type: "mcq",
        question:
          "Quel type d'enregistrement DNS faut-il ajouter pour pointer un domaine vers Vercel ?",
        options: JSON.stringify([
          "MX",
          "TXT",
          "A (et CNAME pour www)",
          "SRV",
        ]),
        correctAnswer: "A (et CNAME pour www)",
        explanation:
          "Un enregistrement A pointe le domaine racine (monsite.com) vers l'IP de Vercel, et un CNAME redirige www.monsite.com vers le projet Vercel.",
      },
      {
        type: "true_false",
        question:
          "Vercel configure automatiquement le certificat SSL (HTTPS) pour les domaines custom.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Vercel génère et renouvelle automatiquement un certificat SSL Let's Encrypt pour chaque domaine custom ajouté au projet.",
      },
    ],
  },
];
