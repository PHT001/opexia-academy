// ═══════════════════════════════════════════════════
// MODULE 14 — Sécurité & bonnes pratiques
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_14_LESSONS = [
  // ─── LEÇON 1 : Les failles courantes et comment les éviter ───
  {
    order: 1,
    module: 14,
    title: "Les failles courantes et comment les éviter",
    slug: "v2-failles-courantes-eviter",
    duration: "25 min",
    description: "Découvre les failles de sécurité les plus exploitées dans les applications web modernes : injection SQL, XSS, CSRF, mauvaise gestion des secrets. Apprends à les identifier et à les corriger avant qu'un attaquant ne le fasse.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "La sécurité n'est pas une option" },
      { id: "1-2", type: "text", html: "<p>En tant que développeur IA, tu vas manipuler des données sensibles : informations clients, clés API, modèles entraînés, bases de données. Une seule faille peut détruire la confiance de tes clients et ta réputation en quelques heures.</p><p>Les attaquants ne ciblent pas seulement les grandes entreprises. Ils scannent <strong>automatiquement</strong> des millions de sites à la recherche de failles simples. Si ton app en a une, elle sera trouvée.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Réalité terrain :</strong> Plus de 40% des cyberattaques ciblent les PME et les projets SaaS. Un bot peut détecter une clé API exposée sur GitHub en moins de 30 secondes." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Injection SQL : la faille historique" },
      { id: "1-6", type: "text", html: "<p>L'injection SQL se produit quand un attaquant insère du code SQL malveillant dans un champ de formulaire. Si ta requête est construite par concaténation de chaînes, le hacker peut lire, modifier ou supprimer toute ta base.</p><p><strong>Exemple dangereux :</strong> <code>SELECT * FROM users WHERE email = '\" + userInput + \"'</code></p><p><strong>Protection :</strong> Utilise toujours des requêtes paramétrées. Avec Supabase, le client JavaScript est protégé par défaut. Mais attention aux fonctions RPC custom où tu écris du SQL brut.</p>" },
      { id: "1-7", type: "callout", variant: "tip", html: "<strong>Bonne pratique :</strong> Ne construis JAMAIS une requête SQL par concaténation de chaînes. Utilise le query builder de Supabase ou les requêtes paramétrées de Prisma." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "XSS : quand le JavaScript devient une arme" },
      { id: "1-10", type: "text", html: "<p>Le Cross-Site Scripting (XSS) permet à un attaquant d'injecter du JavaScript malveillant dans une page vue par d'autres utilisateurs. Un commentaire piégé, un champ de profil non sanitisé — et le hacker récupère les cookies de session de tous les visiteurs.</p><p><strong>Protection avec React :</strong> React échappe automatiquement le contenu dans le JSX. Mais si tu utilises <code>dangerouslySetInnerHTML</code> avec du contenu utilisateur non filtré, tu réintroduis la faille.</p>" },

      { id: "1-11", type: "heading", level: 2, text: "CSRF et exposition de secrets" },
      { id: "1-12", type: "text", html: "<p><strong>CSRF (Cross-Site Request Forgery) :</strong> Un site malveillant envoie des requêtes à ton app en utilisant les cookies de l'utilisateur connecté. Protection : tokens CSRF, cookie SameSite, vérification du header Origin.</p><p><strong>Exposition de secrets :</strong> La faille la plus bête et la plus courante. Tu push ton fichier <code>.env</code> sur GitHub, un bot le détecte immédiatement et exploite tes clés API. La clé <code>anon</code> Supabase est publique, mais la clé <code>service_role</code> est secrète — elle bypass toutes les règles RLS.</p>" },
      { id: "1-13", type: "callout", variant: "warning", html: "<strong>Action immédiate :</strong> Vérifie maintenant ton historique Git avec <code>git log --all --full-history -- .env*</code>. Si tu as déjà commité un fichier .env, régénère immédiatement tes clés." },

      { id: "1-14", type: "checklist", title: "Checklist anti-failles", items: [
        { id: "c1", text: "Requêtes SQL paramétrées partout (pas de concaténation)" },
        { id: "c2", text: "Pas de dangerouslySetInnerHTML avec du contenu utilisateur" },
        { id: "c3", text: "Tokens CSRF sur les formulaires sensibles" },
        { id: "c4", text: ".env dans le .gitignore" },
        { id: "c5", text: "Clé service_role jamais côté client" },
        { id: "c6", text: "Headers de sécurité configurés (CSP, X-Frame-Options)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Audit de sécurité express</h3><p>Fais un audit rapide de ton projet actuel :</p><ol><li>Vérifie ton historique Git pour les fichiers .env commités</li><li>Cherche toute utilisation de <code>dangerouslySetInnerHTML</code> dans ton code</li><li>Vérifie que ta clé <code>service_role</code> n'apparaît nulle part côté client</li><li>Liste toutes les API Routes qui ne vérifient pas l'authentification</li><li>Documente chaque faille trouvée et propose un correctif</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la meilleure protection contre les injections SQL ?", options: JSON.stringify(["Filtrer les caractères spéciaux manuellement", "Utiliser des requêtes paramétrées", "Limiter la longueur des champs de formulaire", "Utiliser HTTPS"]), correctAnswer: "Utiliser des requêtes paramétrées", explanation: "Les requêtes paramétrées séparent le code SQL des données utilisateur, rendant l'injection impossible. Le client Supabase et Prisma les utilisent par défaut." },
      { type: "true_false", question: "React protège automatiquement contre les attaques XSS dans le JSX standard.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "React échappe automatiquement le contenu injecté dans le JSX. Cependant, dangerouslySetInnerHTML contourne cette protection et peut réintroduire des failles XSS si utilisé avec du contenu utilisateur non sanitisé." },
      { type: "mcq", question: "Qu'est-ce qu'une attaque CSRF ?", options: JSON.stringify(["Un virus installé sur le serveur", "Un site malveillant qui envoie des requêtes en utilisant les cookies de session de l'utilisateur", "Un hacker qui devine le mot de passe par force brute", "Une interception du trafic réseau"]), correctAnswer: "Un site malveillant qui envoie des requêtes en utilisant les cookies de session de l'utilisateur", explanation: "Le CSRF exploite la confiance du navigateur : un site tiers déclenche des actions sur ton app en utilisant les cookies de l'utilisateur connecté, sans son consentement." },
      { type: "true_false", question: "La clé anon de Supabase est secrète et ne doit jamais apparaître dans le code côté client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La clé anon est conçue pour être publique et utilisée côté client. C'est la clé service_role qui est secrète et qui bypass toutes les règles RLS." },
      { type: "mcq", question: "Quel outil permet de vérifier si un fichier .env a été commité dans l'historique Git ?", options: JSON.stringify(["git status", "git log --all --full-history -- .env*", "git diff .env", "git show .env"]), correctAnswer: "git log --all --full-history -- .env*", explanation: "Cette commande parcourt tout l'historique Git (toutes les branches) pour trouver les commits qui ont touché des fichiers .env. Même si le fichier a été supprimé depuis, il reste dans l'historique." },
      { type: "mcq", question: "Quel header HTTP aide à prévenir les attaques par clickjacking ?", options: JSON.stringify(["Content-Type", "X-Frame-Options", "Authorization", "Cache-Control"]), correctAnswer: "X-Frame-Options", explanation: "X-Frame-Options empêche ton site d'être chargé dans une iframe sur un site tiers, ce qui prévient les attaques par clickjacking où un attaquant superpose une interface invisible pour piéger l'utilisateur." },
    ],
  },

  // ─── LEÇON 2 : Row Level Security (RLS) sur Supabase ───
  {
    order: 2,
    module: 14,
    title: "Row Level Security (RLS) sur Supabase",
    slug: "v2-rls-supabase-securite",
    duration: "25 min",
    description: "Maîtrise le mécanisme de sécurité le plus puissant de Supabase. Apprends à écrire des policies RLS efficaces, à les tester et à éviter les pièges classiques qui laissent tes données exposées.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "RLS : ta première ligne de défense" },
      { id: "2-2", type: "text", html: "<p>Row Level Security est un mécanisme PostgreSQL qui permet de contrôler l'accès aux données <strong>ligne par ligne</strong>. Avec RLS, chaque utilisateur ne peut accéder qu'à ses propres données, même s'il tente de manipuler l'API directement.</p><p>Sans RLS, toute personne ayant la clé <code>anon</code> (qui est publique) peut lire l'intégralité de ta table. C'est comme laisser la porte de ton bureau ouverte avec tous les dossiers clients sur la table.</p>" },
      { id: "2-3", type: "callout", variant: "warning", html: "<strong>Règle absolue :</strong> Active RLS sur CHAQUE table contenant des données utilisateurs. Une table sans RLS est une table publique." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Anatomie d'une policy RLS" },
      { id: "2-6", type: "text", html: "<p>Une policy RLS est une règle SQL qui s'exécute automatiquement à chaque requête. Elle utilise deux clauses :</p><ul><li><strong>USING :</strong> filtre les lignes existantes (lesquelles tu peux voir, modifier, supprimer)</li><li><strong>WITH CHECK :</strong> valide les nouvelles données (est-ce que cette insertion est autorisée ?)</li></ul><p>La fonction <code>auth.uid()</code> retourne l'ID de l'utilisateur connecté. C'est la base de presque toutes les policies.</p>" },

      { id: "2-7", type: "comparison", headers: ["Opération", "Clause utilisée", "Ce qu'elle contrôle"], rows: [
        { cells: ["SELECT", "USING", "Quelles lignes l'utilisateur peut lire"] },
        { cells: ["INSERT", "WITH CHECK", "Quelles données l'utilisateur peut insérer"] },
        { cells: ["UPDATE", "USING + WITH CHECK", "Quelles lignes il peut modifier et les nouvelles valeurs"] },
        { cells: ["DELETE", "USING", "Quelles lignes il peut supprimer"] },
      ]},
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Écrire tes policies : le template standard" },
      { id: "2-10", type: "text", html: "<p>Voici le set de policies que tu devrais appliquer sur chaque table utilisateur :</p><pre><code>-- 1. Activer RLS\nALTER TABLE ma_table ENABLE ROW LEVEL SECURITY;\n\n-- 2. SELECT : voir ses propres données\nCREATE POLICY \"select_own\" ON ma_table\nFOR SELECT USING (auth.uid() = user_id);\n\n-- 3. INSERT : créer uniquement pour soi\nCREATE POLICY \"insert_own\" ON ma_table\nFOR INSERT WITH CHECK (auth.uid() = user_id);\n\n-- 4. UPDATE : modifier ses propres lignes\nCREATE POLICY \"update_own\" ON ma_table\nFOR UPDATE USING (auth.uid() = user_id)\nWITH CHECK (auth.uid() = user_id);\n\n-- 5. DELETE : supprimer ses propres lignes\nCREATE POLICY \"delete_own\" ON ma_table\nFOR DELETE USING (auth.uid() = user_id);</code></pre>" },

      { id: "2-11", type: "heading", level: 2, text: "Les pièges classiques RLS" },
      { id: "2-12", type: "steps", steps: [
        { title: "Oublier d'activer RLS", description: "Par défaut, les nouvelles tables n'ont PAS RLS activé. Tu dois le faire manuellement avec ALTER TABLE ... ENABLE ROW LEVEL SECURITY." },
        { title: "Policy trop permissive", description: "Une policy avec USING (true) rend la table publique. Vérifie toujours que tu filtres par auth.uid()." },
        { title: "Oublier la policy INSERT", description: "Tu protèges le SELECT mais pas l'INSERT ? N'importe qui peut insérer des données dans ta table." },
        { title: "Ne pas tester", description: "Utilise le SQL Editor de Supabase avec SET ROLE authenticated pour simuler un utilisateur et vérifier tes policies." },
      ]},

      { id: "2-13", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Dans le dashboard Supabase, va dans Authentication > Policies pour visualiser et gérer toutes tes policies sans écrire de SQL." },
    ]),
    exercise: "<h3>Exercice : Sécuriser tes tables avec RLS</h3><p>Applique RLS sur ton projet :</p><ol><li>Ouvre ton projet Supabase et liste toutes tes tables</li><li>Pour chaque table, vérifie si RLS est activé (icône cadenas dans le dashboard)</li><li>Écris les 4 policies standard (SELECT, INSERT, UPDATE, DELETE) pour ta table la plus sensible</li><li>Teste avec le SQL Editor en simulant un utilisateur différent</li><li>Crée une policy pour un cas avancé : un admin qui peut voir toutes les lignes</li></ol>",
    quiz: [
      { type: "mcq", question: "Que se passe-t-il si RLS est activé mais qu'aucune policy n'est définie ?", options: JSON.stringify(["Toutes les données sont accessibles", "Aucune donnée n'est accessible", "Seul l'admin peut accéder aux données", "Les données sont en lecture seule"]), correctAnswer: "Aucune donnée n'est accessible", explanation: "Quand RLS est activé sans policy, toutes les opérations sont bloquées par défaut. C'est le principe du deny by default : il faut explicitement autoriser chaque type d'accès." },
      { type: "true_false", question: "Par défaut, les nouvelles tables Supabase ont RLS activé automatiquement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les nouvelles tables n'ont PAS RLS activé par défaut. Tu dois l'activer manuellement, ce qui est un piège classique pour les débutants." },
      { type: "mcq", question: "Quelle fonction retourne l'ID de l'utilisateur connecté dans une policy RLS ?", options: JSON.stringify(["current_user()", "session_user()", "auth.uid()", "get_user_id()"]), correctAnswer: "auth.uid()", explanation: "auth.uid() est la fonction Supabase qui retourne l'UUID de l'utilisateur authentifié. Elle est injectée automatiquement dans chaque requête." },
      { type: "mcq", question: "Quelle clause RLS utilise-t-on pour valider les données d'un INSERT ?", options: JSON.stringify(["USING", "WITH CHECK", "WHERE", "HAVING"]), correctAnswer: "WITH CHECK", explanation: "WITH CHECK valide les nouvelles données lors d'un INSERT. USING filtre les lignes existantes pour SELECT, UPDATE et DELETE." },
      { type: "true_false", question: "Une policy RLS avec USING (true) rend la table accessible à tous les utilisateurs authentifiés.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "USING (true) signifie que la condition est toujours vraie, donc tous les utilisateurs authentifiés peuvent accéder à toutes les lignes. C'est à éviter sauf pour des tables volontairement publiques." },
      { type: "mcq", question: "Tu as activé RLS sur une table avec une policy SELECT mais pas de policy INSERT. Que se passe-t-il quand un utilisateur tente un INSERT ?", options: JSON.stringify(["L'insertion réussit", "L'insertion est refusée", "L'insertion réussit mais les données sont invisibles", "Supabase crée une policy automatiquement"]), correctAnswer: "L'insertion est refusée", explanation: "Avec RLS activé, toute opération sans policy explicite est refusée. Pas de policy INSERT = pas d'insertion possible." },
    ],
  },

  // ─── LEÇON 3 : Sécuriser les API Routes + gestion des secrets ───
  {
    order: 3,
    module: 14,
    title: "Sécuriser les API Routes + gestion des secrets",
    slug: "v2-securiser-api-routes-secrets",
    duration: "20 min",
    description: "Protège tes API Routes Next.js avec validation, authentification et rate limiting. Apprends à gérer tes secrets proprement avec les variables d'environnement.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Tes API Routes sont des portes ouvertes" },
      { id: "3-2", type: "text", html: "<p>Chaque API Route dans Next.js est un endpoint public accessible par n'importe qui. Pas besoin d'utiliser ton interface — un simple <code>curl</code> ou Postman suffit pour envoyer des requêtes. Sans protection, un attaquant peut :</p><ul><li>Envoyer des données malformées pour crasher ton app</li><li>Appeler ton API en boucle pour épuiser tes crédits (OpenAI, Resend...)</li><li>Accéder à des données sans être authentifié</li></ul>" },
      { id: "3-3", type: "callout", variant: "warning", html: "<strong>Scénario réel :</strong> Un développeur expose une API Route qui appelle GPT-4 sans vérifier l'authentification. Un bot la découvre et envoie 10 000 requêtes. Résultat : une facture OpenAI de 500€ en une nuit." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Les 3 couches de protection" },
      { id: "3-6", type: "steps", steps: [
        { title: "Couche 1 : Authentification", description: "Vérifie que l'utilisateur est connecté avant de traiter la requête. Utilise getServerSession() ou le middleware Supabase pour valider le token JWT." },
        { title: "Couche 2 : Validation des données", description: "Valide chaque champ avec Zod avant de l'utiliser. Ne fais jamais confiance aux données entrantes, même si elles viennent de ton propre frontend." },
        { title: "Couche 3 : Rate limiting", description: "Limite le nombre de requêtes par utilisateur par minute. Utilise une librairie comme upstash/ratelimit pour protéger tes endpoints coûteux." },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Validation avec Zod : le standard" },
      { id: "3-9", type: "text", html: "<p>Zod te permet de définir un schéma de validation et de vérifier les données entrantes en une ligne :</p><pre><code>import { z } from 'zod';\n\nconst schema = z.object({\n  email: z.string().email(),\n  message: z.string().min(1).max(500),\n});\n\n// Dans ton API Route\nconst result = schema.safeParse(body);\nif (!result.success) {\n  return NextResponse.json(\n    { error: result.error.issues },\n    { status: 400 }\n  );\n}</code></pre>" },

      { id: "3-10", type: "heading", level: 2, text: "Gestion des secrets : les règles d'or" },
      { id: "3-11", type: "text", html: "<p>Les variables d'environnement sont le seul endroit sûr pour stocker tes secrets. Voici les règles :</p><ul><li><strong>Jamais dans le code :</strong> Pas de clé API en dur dans un fichier .ts</li><li><strong>Jamais dans Git :</strong> Le fichier <code>.env.local</code> doit être dans le <code>.gitignore</code></li><li><strong>Préfixe NEXT_PUBLIC_ :</strong> Seules les variables préfixées sont accessibles côté client. Les autres restent côté serveur</li><li><strong>Rotation régulière :</strong> Change tes clés tous les 3 mois minimum</li></ul>" },
      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Astuce Vercel :</strong> Utilise les Environment Variables dans les settings de ton projet Vercel. Elles sont chiffrées et injectées automatiquement au build. Utilise des valeurs différentes pour Preview, Development et Production." },

      { id: "3-13", type: "comparison", headers: ["Variable", "Accessible côté client ?", "Usage"], rows: [
        { cells: ["NEXT_PUBLIC_SUPABASE_URL", "Oui", "URL publique Supabase"] },
        { cells: ["NEXT_PUBLIC_SUPABASE_ANON_KEY", "Oui", "Clé publique pour le client"] },
        { cells: ["SUPABASE_SERVICE_ROLE_KEY", "Non (serveur uniquement)", "Clé admin, bypass RLS"] },
        { cells: ["OPENAI_API_KEY", "Non (serveur uniquement)", "Clé API OpenAI"] },
      ]},
    ]),
    exercise: "<h3>Exercice : Sécuriser une API Route</h3><p>Prends une API Route existante dans ton projet et applique les 3 couches de protection :</p><ol><li>Ajoute la vérification d'authentification avec getServerSession()</li><li>Crée un schéma Zod pour valider les données entrantes</li><li>Ajoute un rate limiting de 10 requêtes par minute par utilisateur</li><li>Vérifie que tes variables d'environnement sensibles n'ont PAS le préfixe NEXT_PUBLIC_</li><li>Teste avec Postman : envoie une requête sans token, avec des données invalides, et en boucle rapide</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel préfixe rend une variable d'environnement accessible côté client dans Next.js ?", options: JSON.stringify(["PUBLIC_", "CLIENT_", "NEXT_PUBLIC_", "EXPOSED_"]), correctAnswer: "NEXT_PUBLIC_", explanation: "Seules les variables préfixées par NEXT_PUBLIC_ sont incluses dans le bundle client. Toutes les autres restent côté serveur et ne sont pas accessibles depuis le navigateur." },
      { type: "true_false", question: "Il est sûr de mettre la clé OPENAI_API_KEY avec le préfixe NEXT_PUBLIC_ pour l'utiliser dans un composant React.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ajouter NEXT_PUBLIC_ à une clé secrète l'expose côté client. N'importe qui peut ouvrir les DevTools et la récupérer. Les clés API sensibles doivent rester côté serveur uniquement." },
      { type: "mcq", question: "Quelle librairie est le standard pour valider les données entrantes dans une API Route Next.js ?", options: JSON.stringify(["Joi", "Yup", "Zod", "Validator.js"]), correctAnswer: "Zod", explanation: "Zod est le standard dans l'écosystème Next.js/TypeScript grâce à son inférence de types automatique et sa syntaxe concise. Il est utilisé par tRPC, React Hook Form et de nombreux frameworks." },
      { type: "mcq", question: "Pourquoi le rate limiting est-il important sur une API Route qui appelle OpenAI ?", options: JSON.stringify(["Pour améliorer les performances", "Pour éviter une facture excessive en cas d'abus", "Pour respecter le RGPD", "Pour améliorer le SEO"]), correctAnswer: "Pour éviter une facture excessive en cas d'abus", explanation: "Sans rate limiting, un attaquant peut envoyer des milliers de requêtes à ton endpoint, chacune générant un appel payant à l'API OpenAI. Le rate limiting limite le nombre de requêtes par utilisateur par période." },
      { type: "true_false", question: "La méthode safeParse de Zod lance une exception si les données sont invalides.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "safeParse ne lance pas d'exception. Elle retourne un objet avec success: true/false et les données validées ou les erreurs. C'est parse() (sans safe) qui lance une exception." },
    ],
  },

  // ─── LEÇON 4 : RGPD et protection des données ───
  {
    order: 4,
    module: 14,
    title: "RGPD et protection des données",
    slug: "v2-rgpd-protection-donnees",
    duration: "20 min",
    description: "Comprends les obligations légales du RGPD pour tes projets web et IA. Apprends à collecter, stocker et traiter les données personnelles en conformité avec la loi européenne.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le RGPD : pourquoi tu ne peux pas l'ignorer" },
      { id: "4-2", type: "text", html: "<p>Le Règlement Général sur la Protection des Données (RGPD) s'applique à <strong>toute entreprise ou développeur</strong> qui traite des données de résidents européens. Peu importe la taille de ton entreprise ou le pays de ton serveur.</p><p>Les amendes peuvent atteindre <strong>20 millions d'euros ou 4% du chiffre d'affaires mondial</strong>. Même pour un freelance, une plainte à la CNIL peut entraîner des sanctions financières et une interdiction de traiter des données.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Attention IA :</strong> Si tu utilises des données clients pour entraîner ou fine-tuner un modèle IA, c'est un traitement de données au sens du RGPD. Tu dois avoir une base légale et informer les utilisateurs." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Les 6 principes du RGPD" },
      { id: "4-6", type: "steps", steps: [
        { title: "Licéité", description: "Tu dois avoir une base légale pour traiter les données : consentement, exécution d'un contrat, intérêt légitime, obligation légale, etc." },
        { title: "Limitation des finalités", description: "Les données collectées pour un but précis ne doivent pas être réutilisées pour un autre but sans nouveau consentement." },
        { title: "Minimisation", description: "Ne collecte que les données strictement nécessaires. Pas besoin de la date de naissance pour un chatbot." },
        { title: "Exactitude", description: "Les données doivent être exactes et tenues à jour. Permets aux utilisateurs de les corriger." },
        { title: "Limitation de conservation", description: "Ne garde les données que le temps nécessaire. Définis une politique de suppression automatique." },
        { title: "Sécurité", description: "Protège les données contre les accès non autorisés, la perte et la destruction. Chiffrement, sauvegardes, RLS." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Les droits des utilisateurs" },
      { id: "4-9", type: "text", html: "<p>Le RGPD donne aux utilisateurs des droits que tu dois respecter :</p><ul><li><strong>Droit d'accès :</strong> L'utilisateur peut demander une copie de toutes ses données</li><li><strong>Droit de rectification :</strong> Il peut corriger ses données inexactes</li><li><strong>Droit à l'effacement :</strong> Il peut demander la suppression de ses données (droit à l'oubli)</li><li><strong>Droit à la portabilité :</strong> Il peut récupérer ses données dans un format structuré (JSON, CSV)</li><li><strong>Droit d'opposition :</strong> Il peut refuser certains traitements, notamment le profilage</li></ul>" },

      { id: "4-10", type: "heading", level: 2, text: "Implémentation concrète dans ton app" },
      { id: "4-11", type: "text", html: "<p>Voici ce que tu dois mettre en place :</p><ul><li><strong>Bannière cookies :</strong> Demande le consentement avant de charger les scripts de tracking (Google Analytics, Hotjar...)</li><li><strong>Page de politique de confidentialité :</strong> Explique quelles données tu collectes, pourquoi, et combien de temps tu les conserves</li><li><strong>Page de paramètres :</strong> Permet à l'utilisateur de supprimer son compte et exporter ses données</li><li><strong>Registre des traitements :</strong> Documente tous les traitements de données que tu effectues</li></ul>" },
      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Conseil pratique :</strong> Utilise un service comme Tarteaucitron.js ou CookieConsent pour la bannière cookies. Pour la politique de confidentialité, des générateurs comme Iubenda peuvent t'aider à démarrer." },

      { id: "4-13", type: "checklist", title: "Checklist RGPD minimale", items: [
        { id: "c1", text: "Bannière de consentement cookies fonctionnelle" },
        { id: "c2", text: "Page politique de confidentialité complète" },
        { id: "c3", text: "Fonctionnalité de suppression de compte" },
        { id: "c4", text: "Export des données utilisateur (JSON/CSV)" },
        { id: "c5", text: "Chiffrement des données sensibles en base" },
        { id: "c6", text: "Registre des traitements documenté" },
      ]},
    ]),
    exercise: "<h3>Exercice : Mise en conformité RGPD</h3><p>Rends ton projet conforme au RGPD :</p><ol><li>Crée une page /privacy avec ta politique de confidentialité</li><li>Implémente une bannière de consentement cookies</li><li>Ajoute un bouton 'Supprimer mon compte' dans les paramètres utilisateur</li><li>Crée une API Route /api/export-data qui retourne toutes les données de l'utilisateur en JSON</li><li>Documente tes traitements de données dans un fichier registre</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est l'amende maximale prévue par le RGPD ?", options: JSON.stringify(["1 million d'euros", "10 millions d'euros", "20 millions d'euros ou 4% du CA mondial", "100 000 euros"]), correctAnswer: "20 millions d'euros ou 4% du CA mondial", explanation: "Le RGPD prévoit des amendes pouvant aller jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu." },
      { type: "true_false", question: "Le RGPD ne s'applique qu'aux grandes entreprises de plus de 50 employés.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le RGPD s'applique à toute entité qui traite des données personnelles de résidents européens, quelle que soit sa taille. Un freelance est soumis aux mêmes obligations qu'une multinationale." },
      { type: "mcq", question: "Quel droit permet à un utilisateur de récupérer ses données dans un format structuré ?", options: JSON.stringify(["Droit d'accès", "Droit à l'effacement", "Droit à la portabilité", "Droit d'opposition"]), correctAnswer: "Droit à la portabilité", explanation: "Le droit à la portabilité permet à l'utilisateur de récupérer ses données dans un format structuré, couramment utilisé et lisible par machine (JSON, CSV), pour les transférer à un autre service." },
      { type: "true_false", question: "Tu peux charger Google Analytics avant d'avoir obtenu le consentement de l'utilisateur.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Google Analytics dépose des cookies de tracking qui nécessitent le consentement préalable de l'utilisateur selon le RGPD. Tu dois attendre le consentement avant de charger le script." },
      { type: "mcq", question: "Quel principe RGPD stipule qu'on ne doit collecter que les données strictement nécessaires ?", options: JSON.stringify(["Licéité", "Minimisation des données", "Limitation de conservation", "Exactitude"]), correctAnswer: "Minimisation des données", explanation: "Le principe de minimisation impose de ne collecter que les données adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités du traitement." },
      { type: "mcq", question: "Utiliser des données clients pour fine-tuner un modèle IA sans les en informer est-il conforme au RGPD ?", options: JSON.stringify(["Oui, c'est un traitement automatique", "Non, c'est un nouveau traitement qui nécessite une base légale", "Oui, si les données sont anonymisées", "Non, sauf si le modèle est open source"]), correctAnswer: "Non, c'est un nouveau traitement qui nécessite une base légale", explanation: "Le fine-tuning d'un modèle IA avec des données personnelles constitue un traitement de données au sens du RGPD. Il nécessite une base légale (consentement, intérêt légitime...) et les utilisateurs doivent en être informés." },
    ],
  },

  // ─── LEÇON 5 : Checklist sécurité avant livraison client ───
  {
    order: 5,
    module: 14,
    title: "Checklist sécurité avant livraison client",
    slug: "v2-checklist-securite-livraison",
    duration: "15 min",
    description: "La checklist complète à parcourir avant chaque mise en production. Couvre l'authentification, les données, les API, le monitoring et la conformité légale.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Jamais de mise en prod sans checklist" },
      { id: "5-2", type: "text", html: "<p>Tu as codé ton app, tout marche en local, le client est pressé. La tentation est grande de déployer vite. Mais une mise en production sans vérification de sécurité, c'est comme livrer une maison sans vérifier les serrures.</p><p>Cette checklist est ton filet de sécurité. Parcours-la <strong>systématiquement</strong> avant chaque livraison.</p>" },
      { id: "5-3", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Copie cette checklist dans un template Notion ou un fichier CHECKLIST.md à la racine de chaque projet. Coche chaque point avant de merger la PR de mise en production." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Authentification & Accès" },
      { id: "5-6", type: "checklist", title: "Vérifications authentification", items: [
        { id: "c1", text: "RLS activé sur toutes les tables contenant des données utilisateurs" },
        { id: "c2", text: "Policies RLS testées avec différents rôles" },
        { id: "c3", text: "Pages protégées inaccessibles sans connexion (middleware)" },
        { id: "c4", text: "Tokens JWT validés côté serveur sur chaque API Route" },
        { id: "c5", text: "Politique de mots de passe robuste (8+ caractères, complexité)" },
      ]},
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Données & API" },
      { id: "5-9", type: "checklist", title: "Vérifications données et API", items: [
        { id: "c6", text: "Validation Zod sur toutes les API Routes" },
        { id: "c7", text: "Rate limiting sur les endpoints sensibles (IA, emails, paiement)" },
        { id: "c8", text: "Pas de clé secrète dans le code côté client" },
        { id: "c9", text: "Variables d'environnement configurées sur Vercel (Preview + Production)" },
        { id: "c10", text: "Pas de console.log avec des données sensibles en production" },
        { id: "c11", text: "CORS configuré correctement (pas de wildcard * en prod)" },
      ]},

      { id: "5-10", type: "heading", level: 2, text: "Infrastructure & Monitoring" },
      { id: "5-11", type: "checklist", title: "Vérifications infrastructure", items: [
        { id: "c12", text: "HTTPS forcé (redirection HTTP vers HTTPS)" },
        { id: "c13", text: "Headers de sécurité configurés (CSP, X-Frame-Options, HSTS)" },
        { id: "c14", text: "Sentry ou équivalent configuré pour capter les erreurs" },
        { id: "c15", text: "Sauvegardes automatiques de la base de données" },
        { id: "c16", text: "Domaine et certificat SSL vérifié" },
      ]},

      { id: "5-12", type: "heading", level: 2, text: "Conformité & Légal" },
      { id: "5-13", type: "checklist", title: "Vérifications légales", items: [
        { id: "c17", text: "Bannière de consentement cookies fonctionnelle" },
        { id: "c18", text: "Page politique de confidentialité accessible" },
        { id: "c19", text: "Mentions légales présentes" },
        { id: "c20", text: "CGU/CGV si vente en ligne" },
        { id: "c21", text: "Fonctionnalité de suppression de compte" },
      ]},

      { id: "5-14", type: "callout", variant: "warning", html: "<strong>Rappel :</strong> Cette checklist est un minimum. Pour les projets sensibles (santé, finance, données mineurs), des audits de sécurité professionnels sont recommandés." },
    ]),
    exercise: "<h3>Exercice : Audit complet de ton projet</h3><p>Applique la checklist complète à ton projet actuel :</p><ol><li>Parcours chaque section et coche les points validés</li><li>Pour chaque point non validé, crée un ticket dans ton outil de gestion (Notion, Linear, GitHub Issues)</li><li>Priorise les corrections : critique (accès non autorisé), important (données exposées), mineur (headers manquants)</li><li>Corrige les points critiques immédiatement</li><li>Planifie les corrections importantes dans le prochain sprint</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le premier élément à vérifier avant une mise en production ?", options: JSON.stringify(["Le design est pixel-perfect", "RLS est activé sur toutes les tables sensibles", "Le loading spinner est bien animé", "Les favicons sont configurées"]), correctAnswer: "RLS est activé sur toutes les tables sensibles", explanation: "La sécurité des données est la priorité absolue. Si RLS n'est pas activé, n'importe qui peut accéder à toutes les données de ta base via la clé anon publique." },
      { type: "true_false", question: "Il est acceptable d'utiliser CORS avec un wildcard (*) en production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un wildcard CORS en production signifie que n'importe quel site peut envoyer des requêtes à ton API. En production, limite CORS aux domaines de confiance uniquement." },
      { type: "mcq", question: "Pourquoi faut-il supprimer les console.log sensibles avant la mise en production ?", options: JSON.stringify(["Ça ralentit l'application", "Les données loguées sont visibles dans les DevTools du navigateur", "Ça augmente la taille du bundle", "Ce n'est pas nécessaire, c'est juste esthétique"]), correctAnswer: "Les données loguées sont visibles dans les DevTools du navigateur", explanation: "Les console.log sont visibles par tout utilisateur qui ouvre les DevTools du navigateur. Si tu logues des tokens, emails ou données utilisateur, ils sont exposés publiquement." },
      { type: "true_false", question: "Les mentions légales sont obligatoires sur un site web français.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "En France, tout site web professionnel doit afficher des mentions légales incluant l'identité de l'éditeur, l'hébergeur, et les coordonnées de contact. C'est une obligation de la LCEN." },
      { type: "mcq", question: "Quelle est la bonne pratique pour gérer les variables d'environnement sur Vercel ?", options: JSON.stringify(["Mettre toutes les variables dans le code", "Utiliser les mêmes valeurs pour Preview et Production", "Configurer des valeurs différentes pour Preview, Development et Production", "Commiter le fichier .env dans Git"]), correctAnswer: "Configurer des valeurs différentes pour Preview, Development et Production", explanation: "Utiliser des valeurs différentes par environnement permet d'isoler les données. Ta preview utilise une base de test, tandis que la production utilise la vraie base. Cela évite les accidents." },
      { type: "mcq", question: "Quel header HTTP force le navigateur à utiliser HTTPS ?", options: JSON.stringify(["X-Frame-Options", "Content-Security-Policy", "Strict-Transport-Security (HSTS)", "X-Content-Type-Options"]), correctAnswer: "Strict-Transport-Security (HSTS)", explanation: "Le header HSTS (Strict-Transport-Security) indique au navigateur de toujours utiliser HTTPS pour ce domaine, même si l'utilisateur tape http://. Il empêche les attaques de downgrade." },
    ],
  },
];
