function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_4_LESSONS = [
  {
    order: 1,
    module: 4,
    title: "C'est quoi une base de données ? (version simple)",
    slug: "c-est-quoi-une-base-de-donnees",
    duration: "20 min",
    description: "Tables, lignes, colonnes : comprends la structure d'une base de données avec l'analogie Excel. Pourquoi c'est indispensable pour tout projet sérieux.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Une base de données, c'est quoi exactement ?" },
      { id: "1-2", type: "text", html: "<p>Si tu as déjà utilisé Excel, tu comprends déjà 80% d'une base de données. Une base de données, c'est simplement un endroit structuré pour stocker, organiser et retrouver des informations. La différence avec Excel ? La puissance, la rapidité, et la capacité à gérer des millions de lignes sans planter.</p>" },
      { id: "1-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Base de données", description: "Le conteneur principal (ex: ta_app)" },
        { id: "n2", label: "Tables", description: "Comme des feuilles Excel (users, products, orders)" },
        { id: "n3", label: "Colonnes", description: "Les champs : id, name, email, created_at" },
        { id: "n4", label: "Lignes (rows)", description: "Les données réelles de chaque entrée" }
      ]},
      { id: "1-4", type: "heading", level: 2, text: "L'analogie Excel : concrète et directe" },
      { id: "1-5", type: "comparison", headers: ["Excel", "Base de données SQL"], rows: [
        { cells: ["Classeur (.xlsx)", "Base de données (database)"] },
        { cells: ["Feuille de calcul", "Table"] },
        { cells: ["Colonne (A, B, C…)", "Colonne avec un type défini (TEXT, INT…)"] },
        { cells: ["Ligne", "Row (enregistrement)"] },
        { cells: ["Formule =RECHERCHEV()", "Requête SQL JOIN"] },
        { cells: ["Filtre automatique", "Clause WHERE"] },
        { cells: ["Limite ~1M lignes, lent", "Des milliards de lignes, ultra-rapide"] }
      ]},
      { id: "1-6", type: "callout", variant: "info", html: "<strong>Retiens ça :</strong> une table dans une base de données = une feuille Excel. Mais en beaucoup plus robuste, beaucoup plus rapide, et accessible par plusieurs utilisateurs en même temps sans que ça explose." },
      { id: "1-7", type: "heading", level: 2, text: "Structure d'une vraie table : exemple concret" },
      { id: "1-8", type: "code", language: "sql", filename: "structure_table_users.sql", code: `-- Voici à quoi ressemble une table "users" dans une base de données
-- Chaque colonne a un NOM et un TYPE de données

CREATE TABLE users (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email     TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role      TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ce que ça donne visuellement :
-- | id (UUID)     | email              | full_name    | role  | created_at          |
-- |---------------|--------------------|--------------|-------|---------------------|
-- | a1b2-c3d4...  | alice@example.com  | Alice Martin | user  | 2024-01-15 10:30:00 |
-- | e5f6-g7h8...  | bob@example.com    | Bob Dupont   | admin | 2024-01-16 09:00:00 |` },
      { id: "1-9", type: "heading", level: 3, text: "Les types de données essentiels" },
      { id: "1-10", type: "comparison", headers: ["Type SQL", "Ce que ça stocke", "Exemple"], rows: [
        { cells: ["TEXT", "Du texte (longueur libre)", "'Alice', 'Bonjour le monde'"] },
        { cells: ["INTEGER / INT", "Un nombre entier", "42, -7, 1000000"] },
        { cells: ["NUMERIC / DECIMAL", "Un nombre décimal", "19.99, 3.14159"] },
        { cells: ["BOOLEAN", "Vrai ou faux", "true, false"] },
        { cells: ["TIMESTAMPTZ", "Date + heure avec fuseau", "'2024-01-15 10:30:00+01'"] },
        { cells: ["UUID", "Identifiant unique universel", "'a1b2c3d4-e5f6-...'"] },
        { cells: ["JSONB", "Données JSON flexibles", "'{\"color\": \"red\", \"size\": \"L\"}'"] }
      ]},
      { id: "1-11", type: "heading", level: 2, text: "Pourquoi une BDD est indispensable dès que c'est sérieux" },
      { id: "1-12", type: "steps", steps: [
        { title: "Persistance des données", description: "Contrairement à une variable dans ton code, les données survivent au redémarrage du serveur, aux mises à jour, à tout." },
        { title: "Plusieurs utilisateurs simultanés", description: "100 personnes peuvent lire et écrire en même temps. Essaie ça avec un fichier Excel partagé…" },
        { title: "Intégrité et cohérence", description: "Les contraintes (NOT NULL, UNIQUE, FOREIGN KEY) t'empêchent de sauvegarder des données incorrectes ou incomplètes." },
        { title: "Recherche ultra-rapide", description: "Avec des index, trouver 1 ligne parmi 10 millions prend moins d'1 milliseconde. Impossible avec Excel." },
        { title: "Relations entre données", description: "Un utilisateur peut avoir plusieurs commandes. Une commande peut avoir plusieurs produits. Les JOINs te permettent de tout relier." }
      ]},
      { id: "1-13", type: "callout", variant: "warning", html: "<strong>L'erreur des débutants :</strong> stocker des données dans des fichiers JSON ou dans le code. C'est bien pour prototyper, mais dès que tu as de vrais utilisateurs, tu perds des données, tu as des bugs bizarres, et tout devient ingérable. Commence avec une vraie BDD dès le départ." },
      { id: "1-14", type: "heading", level: 2, text: "Relations entre tables : la clé de tout" },
      { id: "1-15", type: "code", language: "sql", filename: "relations_exemple.sql", code: `-- Table des utilisateurs
CREATE TABLE users (
  id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE
);

-- Table des commandes
-- Chaque commande appartient à UN utilisateur
CREATE TABLE orders (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id),  -- <-- la clé étrangère (foreign key)
  total      NUMERIC(10,2),
  status     TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Grâce à user_id, on sait QUELLE commande appartient à QUEL utilisateur
-- C'est ce qu'on appelle une relation "One-to-Many" (1 user → plusieurs orders)` },
      { id: "1-16", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "users (1)", description: "id, email, full_name" },
        { id: "n2", label: "orders (∞)", description: "id, user_id → users.id, total, status" },
        { id: "n3", label: "order_items (∞)", description: "id, order_id → orders.id, product_id, quantity" },
        { id: "n4", label: "products (∞)", description: "id, name, price, stock" }
      ]},
      { id: "1-17", type: "separator", style: "dots" },
      { id: "1-18", type: "callout", variant: "success", html: "<strong>Résumé en une phrase :</strong> une base de données relationnelle, c'est plusieurs tables (comme des feuilles Excel) reliées entre elles par des identifiants, qui te permettent de stocker et retrouver n'importe quelle donnée instantanément." },
      { id: "1-19", type: "quiz-inline", question: "Dans une base de données relationnelle, comment s'appelle la colonne qui fait le lien entre deux tables ?", options: [
        { id: "a", text: "Une colonne INDEX" },
        { id: "b", text: "Une clé étrangère (FOREIGN KEY)" },
        { id: "c", text: "Un TRIGGER" },
        { id: "d", text: "Une VIEW" }
      ], correctId: "b", explanation: "Exactement ! La clé étrangère (foreign key) est une colonne dont la valeur correspond à l'identifiant (primary key) d'une ligne dans une autre table. C'est le mécanisme central des relations entre tables." },
      { id: "1-20", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je sais qu'une base de données = des tables, colonnes et lignes (comme Excel en mieux)" },
        { id: "c2", text: "Je connais les types de données principaux : TEXT, INT, BOOLEAN, TIMESTAMPTZ, UUID" },
        { id: "c3", text: "Je comprends pourquoi une BDD est indispensable dès qu'on a de vrais utilisateurs" },
        { id: "c4", text: "Je sais ce qu'est une clé étrangère et comment relier deux tables" },
        { id: "c5", text: "Je peux expliquer la différence entre une base de données et Excel" }
      ]}
    ]),
    exercise: "<p>Dessine (sur papier ou dans Notion) la structure d'une base de données pour une app de réservation de restaurant. Crée au moins 3 tables : <strong>restaurants</strong>, <strong>tables</strong> (les tables physiques du restaurant), et <strong>reservations</strong>. Pour chaque table, définis 4-5 colonnes avec leurs types. Identifie les clés étrangères qui relient tout ça.</p>",
    quiz: [
      { type: "mcq", question: "Dans une base de données relationnelle, à quoi correspond une 'table' dans l'analogie Excel ?", options: JSON.stringify(["Un classeur complet", "Une feuille de calcul", "Une cellule individuelle", "Un graphique"]), correctAnswer: "Une feuille de calcul", explanation: "Une table dans une base de données correspond à une feuille de calcul dans Excel. Le classeur = la base de données, les feuilles = les tables, les colonnes = les champs typés, les lignes = les enregistrements." },
      { type: "true_false", question: "Une base de données SQL peut gérer des milliards de lignes, contrairement à Excel qui est limité à environ 1 million de lignes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Excel est limité à environ 1 million de lignes et devient lent. Une base de données SQL peut gérer des milliards de lignes avec des performances ultra-rapides grâce aux index." },
      { type: "mcq", question: "Comment s'appelle la colonne qui fait le lien entre deux tables dans une base de données relationnelle ?", options: JSON.stringify(["Un INDEX", "Une clé étrangère (FOREIGN KEY)", "Un TRIGGER", "Une VIEW"]), correctAnswer: "Une clé étrangère (FOREIGN KEY)", explanation: "La clé étrangère (foreign key) est une colonne dont la valeur correspond à l'identifiant (primary key) d'une ligne dans une autre table. C'est le mécanisme central des relations entre tables." },
      { type: "true_false", question: "Stocker des données dans des fichiers JSON est une bonne pratique pour une application en production avec de vrais utilisateurs.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Stocker des données dans des fichiers JSON ou dans le code est acceptable pour prototyper, mais dès qu'on a de vrais utilisateurs, on perd des données et on a des bugs. Il faut une vraie base de données dès le départ." },
      { type: "mcq", question: "Un client restaurateur te demande de créer une app de réservation. Il veut stocker les clients, les tables du restaurant et les réservations. Par où commences-tu côté base de données ?", options: JSON.stringify(["Tu crées un seul fichier JSON avec toutes les données dedans", "Tu conçois 3 tables reliées par des clés étrangères : restaurants, tables, reservations", "Tu stockes tout dans une seule table avec beaucoup de colonnes", "Tu commences par le frontend et tu t'occuperas de la BDD plus tard"]), correctAnswer: "Tu conçois 3 tables reliées par des clés étrangères : restaurants, tables, reservations", explanation: "La bonne approche est de structurer les données en tables relationnelles dès le départ. Trois tables reliées par clés étrangères permettent d'éviter la duplication de données et de garantir l'intégrité. Un fichier JSON ou une table unique ne tient pas la route en production." },
    ],
  },
  {
    order: 2,
    module: 4,
    title: "Supabase : ton backend en 5 minutes",
    slug: "supabase-backend-en-5-minutes",
    duration: "25 min",
    description: "Crée un projet Supabase, découvre l'interface, crée ta première table et comprends les bases du Row Level Security pour sécuriser tes données.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Supabase : l'alternative open-source à Firebase" },
      { id: "2-2", type: "text", html: "<p>Supabase te donne en quelques clics une base de données PostgreSQL hébergée, une API REST auto-générée, un système d'authentification, du stockage de fichiers, et même des fonctions serverless. Le tout <strong>gratuitement</strong> pour débuter. C'est le backend parfait pour un développeur solo ou une agence IA.</p>" },
      { id: "2-3", type: "comparison", headers: ["Firebase (Google)", "Supabase"], rows: [
        { cells: ["Base NoSQL (documents)", "Base SQL (PostgreSQL)"] },
        { cells: ["Propriétaire Google", "Open-source, auto-hébergeable"] },
        { cells: ["Syntaxe custom complexe", "SQL standard que tu connais déjà"] },
        { cells: ["Pricing qui monte vite", "Gratuit généreux, pricing prévisible"] },
        { cells: ["Moins flexible pour les requêtes", "JOINs, fonctions SQL, tout PostgreSQL"] },
        { cells: ["Realtime limité", "Realtime natif via WebSockets"] }
      ]},
      { id: "2-4", type: "heading", level: 2, text: "Étape 1 : Créer ton projet Supabase" },
      { id: "2-5", type: "steps", steps: [
        { title: "Va sur supabase.com et crée un compte", description: "Connecte-toi avec GitHub pour aller plus vite. C'est gratuit, pas de carte bleue requise." },
        { title: "Clique sur 'New project'", description: "Donne un nom à ton projet (ex: 'my-crm'), choisis une région proche de toi (West EU pour la France), et définis un mot de passe pour ta base de données — note-le bien." },
        { title: "Attends 2 minutes", description: "Supabase provisionne ta base PostgreSQL. Tu peux déjà explorer l'interface pendant ce temps." },
        { title: "Récupère tes clés API", description: "Dans Settings → API, tu trouveras ton Project URL et ton anon key. Ce sont les deux valeurs dont ton frontend aura besoin." }
      ]},
      { id: "2-6", type: "callout", variant: "warning", html: "<strong>Sécurité :</strong> la <code>service_role key</code> visible dans Settings → API a des droits admin complets. Ne la mets JAMAIS dans ton frontend. Seule l'<code>anon key</code> va dans le navigateur." },
      { id: "2-7", type: "heading", level: 2, text: "Étape 2 : Créer ta première table avec l'éditeur" },
      { id: "2-8", type: "text", html: "<p>Dans le menu gauche, clique sur <strong>Table Editor</strong> → <strong>New table</strong>. Tu as deux options : l'interface graphique (idéale pour débuter) ou l'éditeur SQL (plus rapide quand tu es à l'aise). Voici comment créer une table <code>contacts</code> en SQL :</p>" },
      { id: "2-9", type: "code", language: "sql", filename: "create_contacts_table.sql", code: `-- Dans Supabase, ouvre SQL Editor et exécute ça :

CREATE TABLE contacts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name  TEXT NOT NULL,
  email      TEXT,
  phone      TEXT,
  company    TEXT,
  notes      TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour accélérer les recherches par user_id
CREATE INDEX contacts_user_id_idx ON contacts(user_id);

-- Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();` },
      { id: "2-10", type: "heading", level: 2, text: "Row Level Security (RLS) : la sécurité par défaut" },
      { id: "2-11", type: "text", html: "<p>Le RLS, c'est la fonctionnalité la plus importante de Supabase. Sans elle, <strong>n'importe qui avec ton anon key peut lire toutes les données de toutes tes tables</strong>. Le RLS te permet de définir des règles du type : <em>\"un utilisateur ne peut voir que SES propres contacts.\"</em></p>" },
      { id: "2-12", type: "code", language: "sql", filename: "rls_policies.sql", code: `-- Étape 1 : Activer le RLS sur la table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Étape 2 : Créer les politiques (policies)

-- Politique SELECT : un user ne voit que ses contacts
CREATE POLICY "Users can view own contacts"
  ON contacts FOR SELECT
  USING (auth.uid() = user_id);

-- Politique INSERT : un user ne peut créer que ses propres contacts
CREATE POLICY "Users can insert own contacts"
  ON contacts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Politique UPDATE : un user ne peut modifier que ses contacts
CREATE POLICY "Users can update own contacts"
  ON contacts FOR UPDATE
  USING (auth.uid() = user_id);

-- Politique DELETE : un user ne peut supprimer que ses contacts
CREATE POLICY "Users can delete own contacts"
  ON contacts FOR DELETE
  USING (auth.uid() = user_id);

-- auth.uid() est une fonction Supabase qui retourne l'ID
-- de l'utilisateur actuellement connecté` },
      { id: "2-13", type: "callout", variant: "tip", html: "<strong>Astuce de pro :</strong> active toujours le RLS <em>avant</em> de mettre l'app en production. Dans Supabase, tu peux voir dans <strong>Authentication → Policies</strong> si tes tables sont protégées (icône verte = protégée, rouge = non protégée)." },
      { id: "2-14", type: "heading", level: 2, text: "Connecter Supabase à ton frontend JavaScript" },
      { id: "2-15", type: "code", language: "javascript", filename: "supabase_client.js", code: `// 1. Installe le SDK
// npm install @supabase/supabase-js

// 2. Crée ton client Supabase (fichier lib/supabase.js)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://TON-PROJECT-ID.supabase.co'
const supabaseAnonKey = 'ta-anon-key-ici'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 3. Premier test : lire les contacts
const { data, error } = await supabase
  .from('contacts')
  .select('*')

if (error) {
  console.error('Erreur:', error.message)
} else {
  console.log('Contacts:', data)
}` },
      { id: "2-16", type: "heading", level: 3, text: "Variables d'environnement : bonne pratique absolue" },
      { id: "2-17", type: "code", language: "text", filename: ".env.local", code: `# Ne JAMAIS committer ce fichier dans git (ajoute-le au .gitignore)
NEXT_PUBLIC_SUPABASE_URL=https://ton-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Dans ton code :
# const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
# const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY` },
      { id: "2-18", type: "separator", style: "dots" },
      { id: "2-19", type: "quiz-inline", question: "Qu'est-ce que le Row Level Security (RLS) dans Supabase ?", options: [
        { id: "a", text: "Un système de chiffrement des données au repos" },
        { id: "b", text: "Un mécanisme qui contrôle quelles lignes un utilisateur peut voir/modifier selon des politiques SQL" },
        { id: "c", text: "Un outil de backup automatique des tables" },
        { id: "d", text: "Une limite sur le nombre de lignes qu'une table peut contenir" }
      ], correctId: "b", explanation: "Exactement ! Le RLS te permet de définir des règles SQL (policies) qui filtrent automatiquement les données selon l'utilisateur connecté. Sans RLS activé, toutes les lignes sont accessibles à quiconque a la clé anon." },
      { id: "2-20", type: "checklist", title: "Checklist Supabase setup", items: [
        { id: "c1", text: "Mon projet Supabase est créé et j'ai noté mon URL + anon key" },
        { id: "c2", text: "J'ai créé ma première table via le SQL Editor" },
        { id: "c3", text: "J'ai activé le RLS sur ma table" },
        { id: "c4", text: "J'ai créé les 4 politiques (SELECT, INSERT, UPDATE, DELETE)" },
        { id: "c5", text: "J'ai installé @supabase/supabase-js et créé mon client" },
        { id: "c6", text: "Mes clés API sont dans des variables d'environnement, pas en dur dans le code" }
      ]}
    ]),
    exercise: "<p>Crée un projet Supabase complet : <strong>1)</strong> Crée le projet sur supabase.com. <strong>2)</strong> Exécute le SQL pour créer la table <code>contacts</code> avec toutes ses colonnes. <strong>3)</strong> Active le RLS et crée les 4 politiques. <strong>4)</strong> Dans le Table Editor, insère manuellement 2-3 contacts fictifs. <strong>5)</strong> Dans ton projet Next.js ou dans un fichier HTML simple, connecte Supabase et fais un <code>console.log</code> des contacts. Capture d'écran du résultat à la clé.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce que le Row Level Security (RLS) dans Supabase ?", options: JSON.stringify(["Un système de chiffrement des données", "Un mécanisme qui contrôle quelles lignes un utilisateur peut voir/modifier selon des politiques SQL", "Un outil de sauvegarde automatique", "Une limite sur le nombre de lignes par table"]), correctAnswer: "Un mécanisme qui contrôle quelles lignes un utilisateur peut voir/modifier selon des politiques SQL", explanation: "Le RLS permet de définir des règles SQL (policies) qui filtrent automatiquement les données selon l'utilisateur connecté. Sans RLS, toutes les lignes sont accessibles à quiconque a la clé anon." },
      { type: "true_false", question: "La service_role key de Supabase peut être utilisée en toute sécurité dans le frontend.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La service_role key a des droits admin complets et ne doit JAMAIS être mise dans le frontend. Seule l'anon key va dans le navigateur. La service_role key ne s'utilise que côté serveur." },
      { type: "mcq", question: "Combien de politiques RLS faut-il créer pour protéger complètement une table (CRUD) ?", options: JSON.stringify(["1 politique globale", "2 politiques (lecture et écriture)", "4 politiques (SELECT, INSERT, UPDATE, DELETE)", "6 politiques"]), correctAnswer: "4 politiques (SELECT, INSERT, UPDATE, DELETE)", explanation: "Pour une protection complète, on crée 4 politiques RLS : une pour SELECT (lecture), INSERT (création), UPDATE (modification) et DELETE (suppression), chacune avec la condition auth.uid() = user_id." },
      { type: "true_false", question: "Supabase est une alternative open-source à Firebase qui utilise PostgreSQL.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Supabase est bien une alternative open-source à Firebase. Contrairement à Firebase (NoSQL de Google), Supabase utilise PostgreSQL, un standard SQL, ce qui offre plus de flexibilité avec les JOINs et les requêtes complexes." },
      { type: "mcq", question: "Vous livrez un projet Next.js + Supabase à un client. En testant, vous remarquez que n'importe quel visiteur peut voir les données de tous les utilisateurs. Quelle est la cause la plus probable ?", options: JSON.stringify(["Le fichier .env.local n'est pas configuré", "Le RLS n'est pas activé sur les tables Supabase", "Le client utilise un navigateur incompatible", "Next.js ne supporte pas Supabase en production"]), correctAnswer: "Le RLS n'est pas activé sur les tables Supabase", explanation: "Sans Row Level Security activé, toutes les lignes de la table sont accessibles à quiconque possède la clé anon. Activer le RLS et créer les 4 politiques CRUD avec auth.uid() = user_id est indispensable pour sécuriser les données par utilisateur." },
    ],
  },
  {
    order: 3,
    module: 4,
    title: "SQL pour les nuls (avec l'aide de Claude)",
    slug: "sql-pour-les-nuls-avec-claude",
    duration: "30 min",
    description: "Maîtrise les 4 opérations fondamentales du SQL : SELECT, INSERT, UPDATE, DELETE. Comprends les JOINs et apprends à utiliser Claude pour écrire tes requêtes complexes.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le SQL en 2026 : tu n'as plus à le mémoriser" },
      { id: "3-2", type: "text", html: "<p>Bonne nouvelle : tu n'as pas besoin de mémoriser toute la syntaxe SQL. Ce dont tu as besoin, c'est de <strong>comprendre la logique</strong> pour pouvoir vérifier ce que Claude génère, et de connaître les patterns de base. On va voir les 4 opérations fondamentales (CRUD), les JOINs, et comment utiliser Claude comme copilote SQL.</p>" },
      { id: "3-3", type: "heading", level: 2, text: "SELECT : lire des données" },
      { id: "3-4", type: "code", language: "sql", filename: "select_exemples.sql", code: `-- Lire TOUT d'une table
SELECT * FROM contacts;

-- Lire des colonnes spécifiques
SELECT full_name, email, company FROM contacts;

-- Filtrer avec WHERE
SELECT * FROM contacts
WHERE company = 'Anthropic';

-- Plusieurs conditions
SELECT * FROM contacts
WHERE company = 'Anthropic'
  AND email IS NOT NULL;

-- Recherche partielle (LIKE)
SELECT * FROM contacts
WHERE full_name ILIKE '%alice%';  -- ILIKE = insensible à la casse

-- Trier les résultats
SELECT * FROM contacts
ORDER BY created_at DESC  -- DESC = du plus récent au plus vieux
LIMIT 10;                 -- Récupérer seulement 10 lignes

-- Compter les lignes
SELECT COUNT(*) FROM contacts
WHERE company = 'Anthropic';

-- Agréger des données
SELECT company, COUNT(*) as nb_contacts
FROM contacts
GROUP BY company
ORDER BY nb_contacts DESC;` },
      { id: "3-5", type: "heading", level: 2, text: "INSERT : ajouter des données" },
      { id: "3-6", type: "code", language: "sql", filename: "insert_exemples.sql", code: `-- Insérer une ligne
INSERT INTO contacts (full_name, email, company)
VALUES ('Alice Martin', 'alice@example.com', 'Startup XYZ');

-- Insérer plusieurs lignes d'un coup
INSERT INTO contacts (full_name, email, company)
VALUES
  ('Bob Dupont', 'bob@example.com', 'Agence IA'),
  ('Clara Leroy', 'clara@example.com', 'Freelance'),
  ('David Chen', 'david@example.com', 'Startup XYZ');

-- Insérer et récupérer l'enregistrement créé
INSERT INTO contacts (full_name, email)
VALUES ('Eve Durand', 'eve@example.com')
RETURNING *;  -- Supabase retourne les données insérées, y compris l'UUID généré

-- Upsert : insérer OU mettre à jour si ça existe déjà
INSERT INTO contacts (email, full_name, company)
VALUES ('alice@example.com', 'Alice Martin-Dupont', 'Nouvelle Startup')
ON CONFLICT (email)
DO UPDATE SET
  full_name = EXCLUDED.full_name,
  company = EXCLUDED.company,
  updated_at = NOW();` },
      { id: "3-7", type: "heading", level: 2, text: "UPDATE : modifier des données" },
      { id: "3-8", type: "code", language: "sql", filename: "update_exemples.sql", code: `-- Modifier un contact spécifique (toujours filtrer avec WHERE !)
UPDATE contacts
SET company = 'Nouvelle Entreprise'
WHERE id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

-- Modifier plusieurs colonnes à la fois
UPDATE contacts
SET
  company = 'Anthropic',
  notes = 'Client VIP',
  updated_at = NOW()
WHERE email = 'alice@example.com';

-- Modifier tous les contacts d'une company
UPDATE contacts
SET notes = 'Ancienne startup'
WHERE company = 'Startup XYZ';

-- ATTENTION : UPDATE sans WHERE modifie TOUTES les lignes !
-- UPDATE contacts SET notes = 'test';  ← NE FAIS JAMAIS ÇA en prod sans WHERE` },
      { id: "3-9", type: "callout", variant: "warning", html: "<strong>Règle d'or :</strong> avant chaque UPDATE ou DELETE, fais d'abord un SELECT avec la même clause WHERE pour voir exactement quelles lignes tu vas modifier. Comme ça, pas de mauvaise surprise." },
      { id: "3-10", type: "heading", level: 2, text: "DELETE : supprimer des données" },
      { id: "3-11", type: "code", language: "sql", filename: "delete_exemples.sql", code: `-- Supprimer un contact précis
DELETE FROM contacts
WHERE id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

-- Supprimer plusieurs contacts
DELETE FROM contacts
WHERE company = 'Startup dissoute'
  AND created_at < '2023-01-01';

-- Soft delete (préférable en production)
-- Au lieu de vraiment supprimer, on marque la ligne comme supprimée
ALTER TABLE contacts ADD COLUMN deleted_at TIMESTAMPTZ;

-- "Supprimer" un contact
UPDATE contacts
SET deleted_at = NOW()
WHERE id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

-- Ne récupérer que les contacts non supprimés
SELECT * FROM contacts
WHERE deleted_at IS NULL;` },
      { id: "3-12", type: "heading", level: 2, text: "Les JOINs : relier plusieurs tables" },
      { id: "3-13", type: "code", language: "sql", filename: "joins_exemples.sql", code: `-- Schéma pour l'exemple :
-- contacts : id, full_name, email, company_id
-- companies : id, name, website, industry

-- INNER JOIN : seulement les contacts QUI ONT une company
SELECT
  c.full_name,
  c.email,
  co.name AS company_name,
  co.industry
FROM contacts c
INNER JOIN companies co ON c.company_id = co.id;

-- LEFT JOIN : tous les contacts, avec ou sans company
SELECT
  c.full_name,
  c.email,
  co.name AS company_name  -- sera NULL si pas de company
FROM contacts c
LEFT JOIN companies co ON c.company_id = co.id;

-- Exemple concret avec commandes :
-- users : id, email
-- orders : id, user_id, total, status
-- order_items : id, order_id, product_id, quantity
-- products : id, name, price

SELECT
  u.email,
  o.id AS order_id,
  o.total,
  o.status,
  p.name AS product_name,
  oi.quantity
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
LEFT JOIN order_items oi ON oi.order_id = o.id
LEFT JOIN products p ON p.id = oi.product_id
WHERE u.email = 'alice@example.com'
ORDER BY o.created_at DESC;` },
      { id: "3-14", type: "heading", level: 2, text: "Utiliser Claude pour écrire tes requêtes SQL" },
      { id: "3-15", type: "text", html: "<p>Voici le vrai game-changer : tu n'as plus à lutter avec la syntaxe SQL. Donne à Claude le schéma de ta base et décris ce que tu veux en français. Il génère la requête exacte. Voici les meilleurs prompts :</p>" },
      { id: "3-16", type: "code", language: "text", filename: "prompts_claude_sql.txt", code: `PROMPT 1 - Requête de base :
"Voici mon schéma SQL : [colle ton CREATE TABLE].
Écris une requête SQL PostgreSQL qui récupère tous les contacts
d'un utilisateur donné (user_id = $1), triés par nom alphabétique,
avec seulement les colonnes full_name, email et company."

PROMPT 2 - Requête complexe :
"J'ai ces tables : users, orders, order_items, products.
[colle les CREATE TABLE].
Génère une requête qui retourne pour chaque utilisateur :
son email, le nombre de commandes, le total dépensé,
et le nom du produit le plus commandé."

PROMPT 3 - Optimisation :
"Cette requête prend 3 secondes sur 100 000 lignes :
[colle ta requête].
Comment l'optimiser ? Quels index créer ?"

PROMPT 4 - Débogage :
"J'ai cette erreur Supabase : [colle l'erreur].
Avec ce schéma : [colle le schéma].
Qu'est-ce qui ne va pas et comment corriger ?"

PROMPT 5 - Migration :
"Je veux ajouter une colonne 'tags' de type ARRAY à ma table contacts,
avec une valeur par défaut de tableau vide.
Génère le SQL de migration PostgreSQL."` },
      { id: "3-17", type: "callout", variant: "tip", html: "<strong>Tip avancé :</strong> copie directement le résultat de <code>SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_schema = 'public'</code> dans ton prompt Claude. Il aura tout le contexte de ton schéma en une fois." },
      { id: "3-18", type: "separator", style: "line" },
      { id: "3-19", type: "quiz-inline", question: "Quelle est la différence entre INNER JOIN et LEFT JOIN ?", options: [
        { id: "a", text: "INNER JOIN est plus rapide, LEFT JOIN est plus précis" },
        { id: "b", text: "INNER JOIN ne retourne que les lignes avec une correspondance dans les deux tables, LEFT JOIN retourne toutes les lignes de la table gauche même sans correspondance" },
        { id: "c", text: "LEFT JOIN ne peut joindre que deux tables, INNER JOIN peut en joindre plusieurs" },
        { id: "d", text: "Il n'y a aucune différence pratique" }
      ], correctId: "b", explanation: "Bien vu ! INNER JOIN = intersection (seulement ce qui matche dans les deux tables). LEFT JOIN = toutes les lignes de la table de gauche, avec NULL pour les colonnes de droite quand il n'y a pas de match. En pratique, LEFT JOIN est plus souvent utilisé car tu veux généralement garder tous tes enregistrements principaux." },
      { id: "3-20", type: "checklist", title: "Maîtrise SQL vérifiée", items: [
        { id: "c1", text: "Je sais écrire un SELECT avec WHERE, ORDER BY et LIMIT" },
        { id: "c2", text: "Je sais insérer des données avec INSERT et l'option RETURNING" },
        { id: "c3", text: "Je pense à toujours mettre un WHERE dans mes UPDATE et DELETE" },
        { id: "c4", text: "Je comprends la différence entre INNER JOIN et LEFT JOIN" },
        { id: "c5", text: "J'utilise Claude avec le schéma SQL pour générer mes requêtes complexes" },
        { id: "c6", text: "Je sais faire un SELECT COUNT(*) et GROUP BY pour des statistiques rapides" }
      ]}
    ]),
    exercise: "<p>Dans le SQL Editor de Supabase, exécute ces 5 requêtes sur ta table <code>contacts</code> : <strong>1)</strong> Récupère tous les contacts triés par nom. <strong>2)</strong> Insère 3 nouveaux contacts en une seule requête INSERT. <strong>3)</strong> Met à jour la company d'un contact par son email. <strong>4)</strong> Compte le nombre de contacts par company avec GROUP BY. <strong>5)</strong> Demande à Claude de générer une requête qui trouve les contacts créés dans les 7 derniers jours, triés du plus récent au plus vieux, en affichant seulement nom et email. Vérifie et exécute le résultat.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence entre INNER JOIN et LEFT JOIN ?", options: JSON.stringify(["INNER JOIN est plus rapide", "INNER JOIN ne retourne que les lignes avec correspondance, LEFT JOIN retourne toutes les lignes de la table de gauche", "LEFT JOIN ne peut joindre que deux tables", "Il n'y a aucune différence"]), correctAnswer: "INNER JOIN ne retourne que les lignes avec correspondance, LEFT JOIN retourne toutes les lignes de la table de gauche", explanation: "INNER JOIN = intersection (seulement ce qui matche). LEFT JOIN = toutes les lignes de la table de gauche, avec NULL pour les colonnes de droite quand il n'y a pas de match." },
      { type: "true_false", question: "Il est recommandé de faire un SELECT avec la même clause WHERE avant chaque UPDATE ou DELETE.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est la règle d'or : avant chaque UPDATE ou DELETE, fais un SELECT avec la même clause WHERE pour voir exactement quelles lignes tu vas modifier. Pas de mauvaise surprise." },
      { type: "mcq", question: "Quelle clause SQL utilise-t-on pour effectuer une recherche de texte insensible à la casse ?", options: JSON.stringify(["LIKE", "ILIKE", "SEARCH", "FIND"]), correctAnswer: "ILIKE", explanation: "ILIKE est la version insensible à la casse de LIKE en PostgreSQL. 'ILIKE %alice%' trouvera 'Alice', 'ALICE', 'alice' etc." },
      { type: "true_false", question: "Un UPDATE sans clause WHERE modifie TOUTES les lignes de la table.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Attention danger : un UPDATE sans WHERE modifie toutes les lignes de la table. C'est une erreur critique à ne jamais faire en production. Toujours ajouter un WHERE pour cibler les lignes précises." },
      { type: "mcq", question: "Un client te demande un tableau de bord qui affiche le nombre de contacts par entreprise, triés du plus grand au plus petit. Tu ne te rappelles plus de la syntaxe SQL exacte. Comment procèdes-tu ?", options: JSON.stringify(["Tu passes 2 heures à chercher la syntaxe sur Google", "Tu donnes le schéma de ta table à Claude et tu décris le résultat voulu en français", "Tu fais le calcul manuellement dans un tableur", "Tu affiches tous les contacts sans regroupement et tu laisses le client compter"]), correctAnswer: "Tu donnes le schéma de ta table à Claude et tu décris le résultat voulu en français", explanation: "En donnant le CREATE TABLE à Claude et en décrivant le résultat souhaité en français, il génère la requête SQL exacte (SELECT company, COUNT(*) GROUP BY company ORDER BY count DESC). Plus besoin de mémoriser la syntaxe." },
    ],
  },
  {
    order: 4,
    module: 4,
    title: "Authentification : login, signup, sessions",
    slug: "authentification-login-signup-sessions",
    duration: "25 min",
    description: "Implémente un système d'authentification complet avec Supabase Auth : inscription, connexion par email, OAuth Google, gestion des sessions et protection des routes.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Supabase Auth : l'authentification sans prise de tête" },
      { id: "4-2", type: "text", html: "<p>Construire un système d'auth from scratch, c'est des semaines de travail et des failles de sécurité garanties si tu n'es pas expert. Supabase Auth te donne tout clé en main : hashage des mots de passe, tokens JWT, refresh tokens, magic links, OAuth... En quelques lignes de code.</p>" },
      { id: "4-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Utilisateur", description: "Remplit le formulaire login/signup" },
        { id: "n2", label: "Supabase Auth", description: "Vérifie les credentials, crée la session" },
        { id: "n3", label: "JWT Token", description: "Token sécurisé stocké dans le navigateur" },
        { id: "n4", label: "API Supabase", description: "Vérifie le token à chaque requête, applique le RLS" },
        { id: "n5", label: "Données", description: "Seulement les données autorisées pour cet user" }
      ]},
      { id: "4-4", type: "heading", level: 2, text: "Signup et Login par email/password" },
      { id: "4-5", type: "code", language: "javascript", filename: "auth_email.js", code: `import { supabase } from './lib/supabase'

// ─── INSCRIPTION ───────────────────────────────────────────────

async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,  // Métadonnées stockées dans auth.users
      }
    }
  })

  if (error) throw error

  // data.user = l'utilisateur créé
  // data.session = null si confirmation email requise
  console.log('Utilisateur créé:', data.user)
  return data
}

// ─── CONNEXION ─────────────────────────────────────────────────

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error

  // data.session.access_token = le JWT
  // data.session.user = l'utilisateur connecté
  console.log('Connecté:', data.user.email)
  return data
}

// ─── DÉCONNEXION ───────────────────────────────────────────────

async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  console.log('Déconnecté')
}

// ─── RÉCUPÉRER L'UTILISATEUR ACTUEL ───────────────────────────

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user  // null si non connecté
}` },
      { id: "4-6", type: "heading", level: 2, text: "OAuth : connexion avec Google en 3 étapes" },
      { id: "4-7", type: "steps", steps: [
        { title: "Activer Google dans Supabase Dashboard", description: "Va dans Authentication → Providers → Google. Active le provider. Tu verras un Callback URL à copier." },
        { title: "Créer les credentials Google", description: "Va sur console.cloud.google.com → APIs & Services → Credentials → Create OAuth 2.0 Client ID. Type: Web application. Colle le Callback URL de Supabase dans 'Authorized redirect URIs'. Copie le Client ID et Client Secret." },
        { title: "Coller les credentials dans Supabase", description: "Retourne dans Supabase → Google Provider. Colle le Client ID et Client Secret. Save. C'est tout." }
      ]},
      { id: "4-8", type: "code", language: "javascript", filename: "auth_oauth.js", code: `// Connexion avec Google (une seule ligne !)
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/auth/callback',
      // Optionnel : demander des scopes supplémentaires
      // scopes: 'https://www.googleapis.com/auth/calendar'
    }
  })

  if (error) throw error
  // L'utilisateur est redirigé vers Google pour s'authentifier
  // Puis redirigé vers redirectTo avec le token dans l'URL
}

// ─── PAGE DE CALLBACK (/auth/callback) ──────────────────────

// Supabase gère automatiquement le callback si tu utilises
// @supabase/ssr ou @supabase/auth-helpers-nextjs
// Mais voici le code manuel si besoin :

async function handleAuthCallback() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error('Erreur callback:', error)
    return
  }

  if (data.session) {
    console.log('Connecté via OAuth:', data.session.user.email)
    // Redirige vers le dashboard
    window.location.href = '/dashboard'
  }
}` },
      { id: "4-9", type: "heading", level: 2, text: "Gestion des sessions : écouter l'état d'auth" },
      { id: "4-10", type: "code", language: "javascript", filename: "session_management.js", code: `// Écouter les changements d'état d'authentification
// À initialiser une fois au démarrage de l'app

supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event)
  // event peut être :
  // 'SIGNED_IN' → utilisateur vient de se connecter
  // 'SIGNED_OUT' → utilisateur vient de se déconnecter
  // 'TOKEN_REFRESHED' → le token a été renouvelé automatiquement
  // 'USER_UPDATED' → profil mis à jour

  if (event === 'SIGNED_IN') {
    console.log('User:', session.user.email)
    updateUI(session.user)
  }

  if (event === 'SIGNED_OUT') {
    redirectToLogin()
  }
})

// Vérifier la session au chargement de la page
async function initApp() {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    // Pas de session active → rediriger vers login
    window.location.href = '/login'
    return
  }

  // Session valide → charger l'app
  console.log('Session valide pour:', session.user.email)
  loadDashboard(session.user)
}` },
      { id: "4-11", type: "heading", level: 2, text: "Protéger ses routes côté serveur (Next.js)" },
      { id: "4-12", type: "code", language: "javascript", filename: "middleware_nextjs.js", code: `// middleware.ts (à la racine du projet Next.js)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Récupérer la session depuis les cookies
  const { data: { session } } = await supabase.auth.getSession()

  // Routes protégées : redirige si non connecté
  const protectedRoutes = ['/dashboard', '/contacts', '/settings']
  const isProtectedRoute = protectedRoutes.some(
    route => req.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !session) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Routes auth : redirige si déjà connecté
  const authRoutes = ['/login', '/signup']
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname)

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/contacts/:path*', '/login', '/signup']
}` },
      { id: "4-13", type: "callout", variant: "info", html: "<strong>Magic Link :</strong> Supabase propose aussi l'authentification sans mot de passe (<em>passwordless</em>) via un lien email. L'utilisateur entre juste son email, reçoit un lien magique, clique dessus, et est connecté. Parfait pour réduire la friction. Code : <code>supabase.auth.signInWithOtp({ email })</code>" },
      { id: "4-14", type: "heading", level: 3, text: "Reset de mot de passe" },
      { id: "4-15", type: "code", language: "javascript", filename: "password_reset.js", code: `// Envoyer l'email de reset
async function sendPasswordReset(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://ton-app.com/update-password'
  })
  if (error) throw error
  alert('Email de reset envoyé !')
}

// Sur la page /update-password, après que l'utilisateur clique le lien
async function updatePassword(newPassword) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  })
  if (error) throw error
  alert('Mot de passe mis à jour !')
}` },
      { id: "4-16", type: "separator", style: "dots" },
      { id: "4-17", type: "callout", variant: "success", html: "<strong>Récapitulatif auth Supabase :</strong> signUp() pour créer un compte, signInWithPassword() pour se connecter, signInWithOAuth() pour Google/GitHub, onAuthStateChange() pour écouter les changements, middleware Next.js pour protéger les routes côté serveur. Tout est géré, sécurisé, et production-ready." },
      { id: "4-18", type: "quiz-inline", question: "Pourquoi utilise-t-on un middleware Next.js pour protéger les routes plutôt qu'une simple vérification côté client ?", options: [
        { id: "a", text: "Le middleware est plus rapide à écrire" },
        { id: "b", text: "La vérification côté client peut être contournée par un utilisateur malveillant qui modifie le JavaScript dans son navigateur" },
        { id: "c", text: "Next.js ne supporte pas la vérification côté client" },
        { id: "d", text: "Le middleware permet d'utiliser CSS dans les routes protégées" }
      ], correctId: "b", explanation: "Exact ! N'importe qui peut ouvrir les DevTools et modifier le JavaScript côté client pour bypasser une vérification d'auth. Le middleware s'exécute côté serveur avant même que la page soit rendue, donc impossible à contourner côté client." },
      { id: "4-19", type: "checklist", title: "Authentification implémentée", items: [
        { id: "c1", text: "J'ai implémenté le signup et le login par email/password" },
        { id: "c2", text: "J'ai configuré le provider Google dans Supabase Dashboard" },
        { id: "c3", text: "J'ai ajouté un bouton 'Continuer avec Google' qui fonctionne" },
        { id: "c4", text: "J'utilise onAuthStateChange pour réagir aux changements de session" },
        { id: "c5", text: "Mes routes /dashboard et /contacts sont protégées par le middleware" },
        { id: "c6", text: "J'ai testé le reset de mot de passe" }
      ]}
    ]),
    exercise: "<p>Construis un formulaire d'authentification complet : <strong>1)</strong> Une page <code>/login</code> avec email/password + bouton Google. <strong>2)</strong> Une page <code>/signup</code> avec email, mot de passe, et nom complet. <strong>3)</strong> Une page <code>/dashboard</code> protégée qui affiche l'email de l'utilisateur connecté et un bouton déconnexion. <strong>4)</strong> Si l'utilisateur n'est pas connecté et essaie d'accéder à /dashboard, il est redirigé vers /login. Teste le flux complet : inscription → connexion → déconnexion → tentative d'accès refusée.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi utilise-t-on un middleware Next.js pour protéger les routes plutôt qu'une vérification côté client ?", options: JSON.stringify(["Le middleware est plus rapide à écrire", "La vérification côté client peut être contournée via les DevTools du navigateur", "Next.js ne supporte pas la vérification côté client", "Le middleware est optionnel et purement esthétique"]), correctAnswer: "La vérification côté client peut être contournée via les DevTools du navigateur", explanation: "N'importe qui peut ouvrir les DevTools et modifier le JavaScript côté client pour bypasser une vérification d'auth. Le middleware s'exécute côté serveur avant le rendu de la page, donc impossible à contourner." },
      { type: "true_false", question: "Supabase Auth gère automatiquement le hashage des mots de passe et les tokens JWT.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Supabase Auth fournit tout clé en main : hashage des mots de passe, tokens JWT, refresh tokens, magic links et OAuth. Construire un système d'auth from scratch prendrait des semaines et comporterait des failles de sécurité." },
      { type: "mcq", question: "Quelle fonction Supabase utilise-t-on pour écouter les changements d'état d'authentification ?", options: JSON.stringify(["supabase.auth.listen()", "supabase.auth.onAuthStateChange()", "supabase.auth.watch()", "supabase.auth.subscribe()"]), correctAnswer: "supabase.auth.onAuthStateChange()", explanation: "onAuthStateChange() écoute les événements d'auth : SIGNED_IN (connexion), SIGNED_OUT (déconnexion), TOKEN_REFRESHED (renouvellement), USER_UPDATED (mise à jour profil). C'est essentiel pour réagir en temps réel." },
      { type: "true_false", question: "L'authentification Magic Link permet de se connecter sans mot de passe, juste avec un email.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le Magic Link est un système passwordless : l'utilisateur entre son email, reçoit un lien, clique dessus et est connecté. Code : supabase.auth.signInWithOtp({ email }). Parfait pour réduire la friction." },
      { type: "mcq", question: "Un client te dit que ses utilisateurs abandonnent l'inscription parce qu'ils ne veulent pas créer un nouveau mot de passe. Quelle solution Supabase lui proposes-tu ?", options: JSON.stringify(["Supprimer complètement l'authentification du site", "Ajouter l'OAuth Google et/ou le Magic Link pour une connexion sans mot de passe", "Forcer les utilisateurs à créer un mot de passe plus simple", "Stocker les mots de passe dans un fichier texte pour simplifier"]), correctAnswer: "Ajouter l'OAuth Google et/ou le Magic Link pour une connexion sans mot de passe", explanation: "L'OAuth Google permet la connexion en un clic avec un compte existant, et le Magic Link envoie un lien de connexion par email sans mot de passe. Les deux réduisent drastiquement la friction à l'inscription, ce qui est exactement ce dont le client a besoin." },
    ],
  },
  {
    order: 5,
    module: 4,
    title: "Construire une API avec Supabase",
    slug: "construire-une-api-avec-supabase",
    duration: "30 min",
    description: "Explore l'API REST auto-générée de Supabase, crée tes premières Edge Functions pour la logique métier complexe, et gère les appels API depuis le frontend avec une gestion d'erreurs propre.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "L'API REST auto-générée : ton backend sans code" },
      { id: "5-2", type: "text", html: "<p>Dès que tu crées une table dans Supabase, une API REST complète est automatiquement générée. Pas besoin d'écrire des routes Express, des controllers, ou des middlewares. Tu requêtes directement ta base via HTTP ou via le SDK JavaScript. C'est une des fonctionnalités les plus puissantes de Supabase.</p>" },
      { id: "5-3", type: "code", language: "javascript", filename: "api_rest_supabase.js", code: `// ─── VIA LE SDK JAVASCRIPT (recommandé) ──────────────────────

import { supabase } from './lib/supabase'

// GET /contacts
const { data: contacts, error } = await supabase
  .from('contacts')
  .select('id, full_name, email, company')
  .order('full_name', { ascending: true })

// GET /contacts?id=eq.xxx
const { data: contact } = await supabase
  .from('contacts')
  .select('*')
  .eq('id', contactId)
  .single()  // retourne un objet au lieu d'un tableau

// GET avec jointure (select imbriqué)
const { data } = await supabase
  .from('contacts')
  .select(\`
    id,
    full_name,
    email,
    company:companies(name, website, industry)
  \`)

// ─── VIA FETCH (appel HTTP direct) ──────────────────────────

const response = await fetch(
  'https://ton-project.supabase.co/rest/v1/contacts?select=*',
  {
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      'Authorization': \`Bearer \${session.access_token}\`,
      'Content-Type': 'application/json'
    }
  }
)
const contacts = await response.json()` },
      { id: "5-4", type: "heading", level: 2, text: "Opérations CRUD complètes via le SDK" },
      { id: "5-5", type: "code", language: "javascript", filename: "crud_sdk.js", code: `// ─── CREATE ──────────────────────────────────────────────────

const { data: newContact, error: insertError } = await supabase
  .from('contacts')
  .insert({
    full_name: 'Alice Martin',
    email: 'alice@example.com',
    company: 'Startup IA',
    user_id: (await supabase.auth.getUser()).data.user?.id
  })
  .select()  // Retourner l'enregistrement créé
  .single()

// ─── READ avec filtres avancés ────────────────────────────────

const { data } = await supabase
  .from('contacts')
  .select('*')
  .ilike('full_name', '%alice%')   // Recherche insensible à la casse
  .in('company', ['Startup IA', 'Agence IA'])  // Filtre IN
  .gte('created_at', '2024-01-01')  // Greater than or equal
  .range(0, 9)  // Pagination : lignes 0 à 9 (10 premières)

// ─── UPDATE ──────────────────────────────────────────────────

const { data: updated, error: updateError } = await supabase
  .from('contacts')
  .update({ company: 'Nouvelle Boîte', notes: 'VIP client' })
  .eq('id', contactId)
  .select()
  .single()

// ─── DELETE ──────────────────────────────────────────────────

const { error: deleteError } = await supabase
  .from('contacts')
  .delete()
  .eq('id', contactId)

// ─── UPSERT ──────────────────────────────────────────────────

const { data: upserted } = await supabase
  .from('contacts')
  .upsert(
    { email: 'alice@example.com', full_name: 'Alice Martin' },
    { onConflict: 'email' }  // Si email existe déjà, on met à jour
  )
  .select()` },
      { id: "5-6", type: "heading", level: 2, text: "Edge Functions : logique métier serverless" },
      { id: "5-7", type: "text", html: "<p>Les Edge Functions de Supabase sont des fonctions serverless Deno qui s'exécutent proche des utilisateurs. Parfait pour : envoyer des emails, traiter des webhooks, appeler des APIs tierces (OpenAI !), ou toute logique que tu ne veux pas exposer côté client.</p>" },
      { id: "5-8", type: "code", language: "javascript", filename: "supabase/functions/send-welcome-email/index.ts", code: `// supabase/functions/send-welcome-email/index.ts
// Déployer avec : supabase functions deploy send-welcome-email

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Gestion CORS pour les requêtes OPTIONS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { userId, email, fullName } = await req.json()

    // Initialiser Supabase avec la service role key (admin)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Exemple : appel à Resend pour envoyer un email
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${Deno.env.get('RESEND_API_KEY')}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@tonapp.com',
        to: email,
        subject: 'Bienvenue sur TonApp !',
        html: \`<h1>Bonjour \${fullName} !</h1><p>Ton compte est créé.</p>\`
      })
    })

    if (!emailRes.ok) throw new Error('Erreur envoi email')

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})` },
      { id: "5-9", type: "heading", level: 2, text: "Appeler une Edge Function depuis le frontend" },
      { id: "5-10", type: "code", language: "javascript", filename: "call_edge_function.js", code: `// Via le SDK Supabase
const { data, error } = await supabase.functions.invoke('send-welcome-email', {
  body: {
    userId: user.id,
    email: user.email,
    fullName: user.user_metadata.full_name
  }
})

if (error) {
  console.error('Erreur function:', error)
  return
}

console.log('Email envoyé:', data)

// ─── VIA FETCH ──────────────────────────────────────────────

const response = await fetch(
  'https://ton-project.supabase.co/functions/v1/send-welcome-email',
  {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${session.access_token}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, email, fullName })
  }
)

const result = await response.json()` },
      { id: "5-11", type: "heading", level: 2, text: "Gestion des erreurs propre et cohérente" },
      { id: "5-12", type: "code", language: "javascript", filename: "error_handling.js", code: `// ─── PATTERN DE BASE ────────────────────────────────────────

async function fetchContacts() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')

  if (error) {
    // Les erreurs Supabase ont : message, code, details, hint
    console.error('Code:', error.code)
    console.error('Message:', error.message)
    console.error('Détails:', error.details)
    throw error
  }

  return data
}

// ─── HELPER GÉNÉRIQUE ────────────────────────────────────────

async function supabaseQuery(queryFn) {
  try {
    const { data, error } = await queryFn()

    if (error) {
      // Gérer les codes d'erreur courants
      switch (error.code) {
        case '23505':
          throw new Error('Cette valeur existe déjà (doublon)')
        case '23503':
          throw new Error("Référence invalide (l'entrée liée n'existe pas)")
        case 'PGRST116':
          throw new Error('Aucun résultat trouvé')
        default:
          throw new Error(error.message)
      }
    }

    return { data, error: null }
  } catch (err) {
    return { data: null, error: err.message }
  }
}

// Utilisation
const { data: contact, error } = await supabaseQuery(() =>
  supabase.from('contacts').select('*').eq('id', id).single()
)

if (error) {
  showToast(error, 'error')
  return
}

displayContact(contact)` },
      { id: "5-13", type: "callout", variant: "tip", html: "<strong>Realtime en bonus :</strong> Supabase propose des subscriptions en temps réel. Une seule ligne : <code>supabase.channel('contacts').on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, callback).subscribe()</code>. Ton UI se met à jour instantanément quand une donnée change en base." },
      { id: "5-14", type: "separator", style: "dots" },
      { id: "5-15", type: "quiz-inline", question: "Quelle est la principale différence entre appeler directement la table via le SDK et utiliser une Edge Function ?", options: [
        { id: "a", text: "Les Edge Functions sont plus rapides pour les requêtes simples" },
        { id: "b", text: "Les Edge Functions s'exécutent côté serveur et peuvent utiliser la service_role_key, appeler des APIs tierces, et implémenter une logique complexe sans exposer de secrets côté client" },
        { id: "c", text: "Le SDK ne peut pas faire de requêtes complexes" },
        { id: "d", text: "Les Edge Functions ne peuvent accéder qu'à des données publiques" }
      ], correctId: "b", explanation: "Exactement ! Le SDK côté client utilise l'anon key et est soumis au RLS — c'est la voie standard. Les Edge Functions s'exécutent côté serveur, peuvent utiliser la service_role_key (admin), appeler des APIs avec des secrets (OpenAI, Stripe, Resend...), et implémenter une logique que tu ne veux pas exposer côté client." },
      { id: "5-16", type: "checklist", title: "API Supabase maîtrisée", items: [
        { id: "c1", text: "Je sais faire les 4 opérations CRUD avec le SDK Supabase" },
        { id: "c2", text: "J'utilise .select(), .eq(), .order(), .range() pour filtrer et paginer" },
        { id: "c3", text: "J'ai créé et déployé au moins une Edge Function" },
        { id: "c4", text: "Je sais appeler une Edge Function depuis le frontend" },
        { id: "c5", text: "J'ai un helper de gestion d'erreurs réutilisable" },
        { id: "c6", text: "Je comprends quand utiliser le SDK direct vs une Edge Function" }
      ]}
    ]),
    exercise: "<p>Crée une Edge Function <code>enrich-contact</code> qui : <strong>1)</strong> Reçoit un email en paramètre. <strong>2)</strong> Appelle l'API OpenAI pour générer une biographie fictive de 2 phrases pour ce contact (simule un enrichissement de données). <strong>3)</strong> Met à jour le champ <code>notes</code> du contact correspondant dans Supabase. <strong>4)</strong> Retourne le contact mis à jour. Appelle cette fonction depuis ton frontend avec un bouton 'Enrichir' sur la fiche d'un contact.</p>",
  },
  {
    order: 6,
    module: 4,
    title: "Projet : une app de gestion de contacts",
    slug: "projet-app-gestion-de-contacts",
    duration: "25 min",
    description: "Assemble tout ce que tu as appris : CRUD complet, authentification, base de données et frontend. Construis une vraie app de gestion de contacts de bout en bout.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le projet final : un mini-CRM fonctionnel" },
      { id: "6-2", type: "text", html: "<p>Tu vas construire une app de gestion de contacts complète — un mini-CRM. C'est le projet parfait car il réunit tout : auth, base de données, API, et un vrai UI. Ce type d'app est aussi exactement ce que des clients paient entre 3 000 et 10 000€ pour avoir sur mesure. Voici comment le construire proprement.</p>" },
      { id: "6-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Page Login/Signup", description: "Supabase Auth — email + Google OAuth" },
        { id: "n2", label: "Dashboard /contacts", description: "Liste paginée des contacts de l'user" },
        { id: "n3", label: "Créer un contact", description: "Formulaire → INSERT → retour liste" },
        { id: "n4", label: "Voir un contact", description: "Page détail /contacts/[id]" },
        { id: "n5", label: "Modifier un contact", description: "Formulaire prérempli → UPDATE" },
        { id: "n6", label: "Supprimer un contact", description: "Confirmation → DELETE → retour liste" }
      ]},
      { id: "6-4", type: "heading", level: 2, text: "Structure du projet Next.js" },
      { id: "6-5", type: "code", language: "text", filename: "structure_projet.txt", code: `mini-crm/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx          ← Layout avec sidebar, protège les routes
│   │   ├── contacts/
│   │   │   ├── page.tsx        ← Liste des contacts
│   │   │   ├── new/page.tsx    ← Formulaire création
│   │   │   └── [id]/
│   │   │       ├── page.tsx    ← Détail d'un contact
│   │   │       └── edit/page.tsx ← Formulaire modification
│   │   └── page.tsx            ← Dashboard home
│   └── auth/callback/route.ts  ← Callback OAuth
├── components/
│   ├── ContactCard.tsx
│   ├── ContactForm.tsx
│   └── DeleteConfirmDialog.tsx
├── lib/
│   ├── supabase.ts             ← Client Supabase
│   └── contacts.ts             ← Fonctions CRUD contacts
├── middleware.ts               ← Protection des routes
└── .env.local` },
      { id: "6-6", type: "heading", level: 2, text: "La couche données : lib/contacts.ts" },
      { id: "6-7", type: "code", language: "javascript", filename: "lib/contacts.ts", code: `import { supabase } from './supabase'

// ─── TYPES ───────────────────────────────────────────────────

export interface Contact {
  id: string
  user_id: string
  full_name: string
  email: string | null
  phone: string | null
  company: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export type ContactInsert = Omit<Contact, 'id' | 'user_id' | 'created_at' | 'updated_at'>
export type ContactUpdate = Partial<ContactInsert>

// ─── CRUD FUNCTIONS ───────────────────────────────────────────

export async function getContacts(searchQuery?: string) {
  let query = supabase
    .from('contacts')
    .select('*')
    .order('full_name', { ascending: true })

  if (searchQuery) {
    query = query.or(
      \`full_name.ilike.%\${searchQuery}%,email.ilike.%\${searchQuery}%,company.ilike.%\${searchQuery}%\`
    )
  }

  const { data, error } = await query
  if (error) throw new Error(error.message)
  return data as Contact[]
}

export async function getContact(id: string) {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw new Error(error.message)
  return data as Contact
}

export async function createContact(contact: ContactInsert) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Non authentifié')

  const { data, error } = await supabase
    .from('contacts')
    .insert({ ...contact, user_id: user.id })
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data as Contact
}

export async function updateContact(id: string, updates: ContactUpdate) {
  const { data, error } = await supabase
    .from('contacts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw new Error(error.message)
  return data as Contact
}

export async function deleteContact(id: string) {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)

  if (error) throw new Error(error.message)
}` },
      { id: "6-8", type: "heading", level: 2, text: "Le formulaire de contact réutilisable" },
      { id: "6-9", type: "code", language: "javascript", filename: "components/ContactForm.tsx", code: `'use client'
import { useState } from 'react'
import { createContact, updateContact, Contact, ContactInsert } from '@/lib/contacts'
import { useRouter } from 'next/navigation'

interface Props {
  contact?: Contact  // Si fourni → mode édition, sinon → mode création
}

export default function ContactForm({ contact }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState<ContactInsert>({
    full_name: contact?.full_name ?? '',
    email: contact?.email ?? '',
    phone: contact?.phone ?? '',
    company: contact?.company ?? '',
    notes: contact?.notes ?? '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (contact) {
        await updateContact(contact.id, form)
      } else {
        await createContact(form)
      }
      router.push('/contacts')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {error && <div className="text-red-500 p-3 bg-red-50 rounded">{error}</div>}

      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Nom complet *"
        required
        className="w-full border rounded px-3 py-2"
      />
      <input name="email" type="email" value={form.email ?? ''} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2" />
      <input name="phone" value={form.phone ?? ''} onChange={handleChange} placeholder="Téléphone" className="w-full border rounded px-3 py-2" />
      <input name="company" value={form.company ?? ''} onChange={handleChange} placeholder="Entreprise" className="w-full border rounded px-3 py-2" />
      <textarea name="notes" value={form.notes ?? ''} onChange={handleChange} placeholder="Notes" rows={3} className="w-full border rounded px-3 py-2" />

      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50">
          {loading ? 'Enregistrement...' : contact ? 'Mettre à jour' : 'Créer le contact'}
        </button>
        <button type="button" onClick={() => router.back()} className="border px-6 py-2 rounded">
          Annuler
        </button>
      </div>
    </form>
  )
}` },
      { id: "6-10", type: "heading", level: 2, text: "La page liste avec recherche" },
      { id: "6-11", type: "code", language: "javascript", filename: "app/(dashboard)/contacts/page.tsx", code: `import { getContacts } from '@/lib/contacts'
import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton'

interface Props {
  searchParams: { q?: string }
}

export default async function ContactsPage({ searchParams }: Props) {
  const contacts = await getContacts(searchParams.q)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contacts ({contacts.length})</h1>
        <Link href="/contacts/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Nouveau contact
        </Link>
      </div>

      {/* Barre de recherche */}
      <form className="mb-4">
        <input
          name="q"
          defaultValue={searchParams.q}
          placeholder="Rechercher par nom, email, entreprise..."
          className="border rounded px-3 py-2 w-full max-w-md"
        />
      </form>

      {/* Liste des contacts */}
      <div className="space-y-2">
        {contacts.map(contact => (
          <div key={contact.id} className="border rounded p-4 flex justify-between items-center">
            <div>
              <Link href={\`/contacts/\${contact.id}\`} className="font-semibold hover:underline">
                {contact.full_name}
              </Link>
              <div className="text-sm text-gray-500">
                {contact.email} {contact.company && \`· \${contact.company}\`}
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={\`/contacts/\${contact.id}/edit\`} className="text-blue-600 hover:underline text-sm">
                Modifier
              </Link>
              <DeleteButton contactId={contact.id} />
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Aucun contact trouvé. <Link href="/contacts/new" className="text-blue-600">Créer le premier ?</Link>
          </p>
        )}
      </div>
    </div>
  )
}` },
      { id: "6-12", type: "callout", variant: "tip", html: "<strong>Astuce Next.js :</strong> les pages dans <code>app/(dashboard)/</code> sont des Server Components par défaut. Elles appellent directement <code>getContacts()</code> côté serveur, sans useEffect ni fetch côté client. C'est plus simple, plus rapide, et meilleur pour le SEO." },
      { id: "6-13", type: "heading", level: 3, text: "La suppression avec confirmation" },
      { id: "6-14", type: "code", language: "javascript", filename: "components/DeleteButton.tsx", code: `'use client'
import { useState } from 'react'
import { deleteContact } from '@/lib/contacts'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ contactId }: { contactId: string }) {
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    setLoading(true)
    try {
      await deleteContact(contactId)
      router.refresh()
    } catch (err) {
      alert('Erreur lors de la suppression')
    } finally {
      setLoading(false)
      setConfirming(false)
    }
  }

  if (confirming) {
    return (
      <div className="flex gap-1">
        <button onClick={handleDelete} disabled={loading} className="text-xs bg-red-600 text-white px-2 py-1 rounded">
          {loading ? '...' : 'Confirmer'}
        </button>
        <button onClick={() => setConfirming(false)} className="text-xs border px-2 py-1 rounded">
          Annuler
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => setConfirming(true)} className="text-red-500 hover:underline text-sm">
      Supprimer
    </button>
  )
}` },
      { id: "6-15", type: "heading", level: 2, text: "Checklist de mise en production" },
      { id: "6-16", type: "steps", steps: [
        { title: "Variables d'environnement sur Vercel", description: "Ajoute NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY dans les settings de ton projet Vercel avant de déployer." },
        { title: "Vérifier le RLS", description: "Dans Supabase → Authentication → Policies, assure-toi que toutes tes tables ont le RLS activé et les 4 policies (SELECT, INSERT, UPDATE, DELETE) configurées." },
        { title: "Tester en mode incognito", description: "Ouvre ton app en navigation privée pour tester le flux complet : inscription → login → CRUD contacts → déconnexion. Un œil neuf détecte les bugs évidents." },
        { title: "Configurer le redirect URL OAuth", description: "Dans Google Cloud Console, ajoute l'URL de production (https://ton-app.vercel.app/auth/callback) en plus de localhost:3000." },
        { title: "Activer la confirmation email (optionnel)", description: "Dans Supabase → Authentication → Settings, tu peux activer la confirmation d'email pour éviter les faux comptes. Nécessite de configurer un provider SMTP (ex: Resend)." }
      ]},
      { id: "6-17", type: "callout", variant: "success", html: "<strong>Félicitations !</strong> Tu as maintenant tous les outils pour construire des apps full-stack complètes : base de données PostgreSQL, auth robuste, API REST, et Edge Functions. Ce mini-CRM que tu viens de construire est déployable, vendable, et extensible. Ajoute des imports CSV, des tags, des rappels, une app mobile — le socle est là." },
      { id: "6-18", type: "separator", style: "dots" },
      { id: "6-19", type: "quiz-inline", question: "Pourquoi séparer la logique de données dans un fichier lib/contacts.ts plutôt que d'appeler Supabase directement dans chaque composant ?", options: [
        { id: "a", text: "C'est une obligation technique de Next.js" },
        { id: "b", text: "Centraliser la logique facilite la maintenance : si le schéma change, tu modifies un seul fichier au lieu de chercher tous les appels Supabase éparpillés dans l'app" },
        { id: "c", text: "Les composants React ne peuvent pas importer supabase directement" },
        { id: "d", text: "Cela améliore les performances de rendu" }
      ], correctId: "b", explanation: "Exactement ! C'est le principe de séparation des responsabilités. Quand tu centralises tes appels BDD dans des fonctions dédiées, tu facilites les tests, la maintenance et les refactorisations. Si tu renommes une colonne dans Supabase, tu modifies getContacts() une seule fois plutôt que de chercher dans 15 fichiers." },
      { id: "6-20", type: "checklist", title: "Projet mini-CRM terminé", items: [
        { id: "c1", text: "La table contacts est créée avec le RLS et les 4 policies" },
        { id: "c2", text: "L'auth fonctionne : signup, login email/password, et login Google" },
        { id: "c3", text: "Le middleware protège /contacts et redirige vers /login si non connecté" },
        { id: "c4", text: "La liste des contacts s'affiche avec la recherche fonctionnelle" },
        { id: "c5", text: "Je peux créer un nouveau contact via le formulaire" },
        { id: "c6", text: "Je peux modifier un contact existant (formulaire prérempli)" },
        { id: "c7", text: "Je peux supprimer un contact avec une confirmation" },
        { id: "c8", text: "L'app est déployée sur Vercel avec les variables d'env configurées" }
      ]}
    ]),
    exercise: "<p>Déploie ton mini-CRM sur Vercel et ajoute une fonctionnalité bonus de ton choix parmi : <strong>A)</strong> Import CSV de contacts (parse le fichier côté client, insère en bulk avec Supabase). <strong>B)</strong> Export PDF de la liste de contacts. <strong>C)</strong> Système de tags pour categoriser les contacts (nouvelle table <code>tags</code>, table de jonction <code>contact_tags</code>). <strong>D)</strong> Recherche full-text PostgreSQL avec <code>to_tsvector</code> et <code>to_tsquery</code> pour une recherche plus intelligente. Partage le lien Vercel de ton app déployée.</p>",
  },
];
