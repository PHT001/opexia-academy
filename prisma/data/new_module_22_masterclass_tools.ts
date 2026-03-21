// ═══════════════════════════════════════════════════
// MODULE 22 — Masterclass outils : Claude Code, Cursor & Antigravity
// 8 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_22_MASTERCLASS_TOOLS_LESSONS = [
  // ─── LEÇON 1 : Configuration avancée et CLAUDE.md pro ───
  {
    order: 1,
    module: 22,
    title: "Configuration avancée et CLAUDE.md pro",
    slug: "configuration-avancee-claude-md-pro",
    duration: "20 min",
    description: "Maîtriser les settings de Claude Code, les hooks, les commandes personnalisées. Construire un CLAUDE.md qui fait de toi un dev 10x.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Claude Code : bien plus qu'un terminal" },
      { id: "1-2", type: "text", html: "<p>Tu utilises peut-être déjà Claude Code, mais est-ce que tu l'utilises <strong>vraiment</strong> ? La plupart des devs se contentent de taper des commandes basiques. Pourtant, Claude Code cache une puissance de configuration énorme qui peut littéralement <strong>multiplier ta productivité par 10</strong>.</p><p>Dans cette leçon, on va transformer ton setup Claude Code de \"basique\" à \"pro\". Tu vas configurer tes settings, tes hooks, tes commandes personnalisées, et surtout : ton fichier <code>CLAUDE.md</code> — la pièce maîtresse de tout développeur sérieux.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Prérequis :</strong> Tu dois avoir Claude Code installé (<code>npm install -g @anthropic-ai/claude-code</code>) et un projet sur lequel travailler. Si ce n'est pas fait, installe-le maintenant avant de continuer." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les settings essentiels de Claude Code" },
      { id: "1-6", type: "text", html: "<p>Claude Code a deux niveaux de configuration : <strong>global</strong> (pour tous tes projets) et <strong>projet</strong> (spécifique à un repo). Les settings globaux se trouvent dans <code>~/.claude/settings.json</code>, les settings projet dans <code>.claude/settings.json</code> à la racine de ton repo.</p>" },
      { id: "1-7", type: "comparison", headers: ["Setting", "Usage", "Exemple"], rows: [
        { cells: ["permissions", "Contrôler ce que Claude peut faire sans demander", "allowedTools: ['Bash', 'Read', 'Write']"] },
        { cells: ["model", "Choisir le modèle par défaut", "claude-sonnet-4-20250514"] },
        { cells: ["autoApprove", "Approuver automatiquement certaines actions", "['read', 'write', 'bash']"] },
        { cells: ["hooks", "Déclencher des scripts avant/après certaines actions", "pre-commit, post-write"] },
      ]},
      { id: "1-8", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Dans les settings projet, ajoute <code>\"allowedTools\": [\"Bash(npm run *)\", \"Bash(git *)\"]</code> pour autoriser automatiquement les commandes npm et git sans confirmation. Tu gagnes des dizaines de clics par session." },
      { id: "1-9", type: "separator", style: "line" },

      { id: "1-10", type: "heading", level: 2, text: "Le fichier CLAUDE.md : ta botte secrète" },
      { id: "1-11", type: "text", html: "<p>Le fichier <code>CLAUDE.md</code> est le document le plus important de ton projet quand tu travailles avec Claude Code. C'est le <strong>system prompt de ton projet</strong>. Claude le lit automatiquement à chaque session et l'utilise pour comprendre ton contexte, tes conventions, et tes préférences.</p><p>Un bon CLAUDE.md transforme Claude d'un assistant générique en un <strong>coéquipier qui connaît ton projet par cœur</strong>.</p>" },
      { id: "1-12", type: "steps", steps: [
        { title: "Section 1 — Aperçu du projet", description: "Décris ton projet en 2-3 phrases : ce que c'est, la stack technique, l'architecture générale. Exemple : 'App Next.js 14 avec App Router, Supabase, Tailwind, déployée sur Vercel. Monorepo avec /app, /lib, /components.'" },
        { title: "Section 2 — Conventions de code", description: "Tes règles de nommage, la structure des fichiers, les patterns utilisés. Exemple : 'Composants en PascalCase, fonctions utilitaires en camelCase, fichiers en kebab-case. Utiliser les Server Components par défaut.'" },
        { title: "Section 3 — Commandes utiles", description: "Les commandes que Claude doit connaître pour travailler efficacement. Exemple : 'npm run dev pour le dev server, npm run build pour build, npm run test pour les tests.'" },
        { title: "Section 4 — Règles et interdits", description: "Ce que Claude ne doit JAMAIS faire dans ton projet. Exemple : 'Ne jamais modifier les fichiers dans /prisma sans confirmation. Toujours utiliser les Server Actions, jamais les API routes.'" },
        { title: "Section 5 — Contexte métier", description: "Les informations business que Claude doit connaître. Exemple : 'C'est une plateforme de formation en ligne. Les \"lessons\" sont les unités de contenu. Les \"modules\" regroupent les lessons.'" },
      ]},
      { id: "1-13", type: "callout", variant: "warning", html: "<strong>Erreur classique :</strong> Un CLAUDE.md trop long (500+ lignes) est contre-productif. Claude va se perdre dans les détails. Vise <strong>50-150 lignes</strong>, concises et actionnables. Utilise des sous-fichiers CLAUDE.md dans les sous-dossiers pour les détails spécifiques." },

      { id: "1-14", type: "heading", level: 3, text: "Les hooks : automatiser les actions récurrentes" },
      { id: "1-15", type: "text", html: "<p>Les hooks te permettent de déclencher des scripts automatiquement à certains moments clés. Par exemple, lancer le linter après chaque écriture de fichier, ou exécuter les tests après un refactoring. Configure-les dans <code>.claude/settings.json</code> :</p><pre><code>{\n  \"hooks\": {\n    \"PostToolUse\": [{\n      \"matcher\": \"Write\",\n      \"command\": \"npm run lint:fix -- $CLAUDE_FILE_PATH\"\n    }]\n  }\n}</code></pre><p>Avec ça, chaque fichier écrit par Claude est automatiquement linté. Zéro effort de ta part.</p>" },
    ]),
    exercise: "<h3>Exercice : Crée ton CLAUDE.md pro</h3><p>Choisis un de tes projets existants et crée un fichier <code>CLAUDE.md</code> à la racine. Il doit contenir les 5 sections vues dans la leçon : (1) Aperçu du projet, (2) Conventions de code, (3) Commandes utiles, (4) Règles et interdits, (5) Contexte métier. Vise entre 50 et 100 lignes. Ensuite, lance Claude Code et vérifie qu'il comprend bien ton projet en lui posant 3 questions sur l'architecture.</p>",
    quiz: [
      { type: "mcq", question: "Où se trouve le fichier de settings global de Claude Code ?", options: JSON.stringify(["~/.claude/settings.json", ".claude/settings.json", "CLAUDE.md", "package.json"]), correctAnswer: "~/.claude/settings.json", explanation: "Les settings globaux sont dans ~/.claude/settings.json (dans ton dossier home). Les settings projet sont dans .claude/settings.json à la racine du repo." },
      { type: "mcq", question: "Quelle est la longueur idéale d'un fichier CLAUDE.md ?", options: JSON.stringify(["10-20 lignes", "50-150 lignes", "500-1000 lignes", "Le plus long possible"]), correctAnswer: "50-150 lignes", explanation: "Un CLAUDE.md entre 50 et 150 lignes est le sweet spot. Trop court, Claude manque de contexte. Trop long, il se perd dans les détails. Utilise des sous-fichiers dans les sous-dossiers pour les détails." },
      { type: "true_false", question: "Les hooks Claude Code permettent de déclencher des scripts automatiquement après certaines actions comme l'écriture d'un fichier.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les hooks comme PostToolUse permettent d'exécuter des scripts automatiquement. Par exemple, lancer le linter après chaque écriture de fichier avec le matcher 'Write'." },
      { type: "mcq", question: "Que contient la section 'Règles et interdits' du CLAUDE.md ?", options: JSON.stringify(["Les commandes npm du projet", "Ce que Claude ne doit jamais faire dans le projet", "La liste des dépendances", "Le changelog du projet"]), correctAnswer: "Ce que Claude ne doit jamais faire dans le projet", explanation: "La section Règles et interdits liste les actions que Claude ne doit JAMAIS faire — par exemple, ne pas modifier certains fichiers sans confirmation, ou toujours utiliser un certain pattern." },
      { type: "mcq", question: "Quel est le rôle principal du fichier CLAUDE.md ?", options: JSON.stringify(["Documenter le projet pour les développeurs humains", "Servir de system prompt pour que Claude Code comprenne le contexte du projet", "Configurer les permissions de Claude Code", "Remplacer le README.md"]), correctAnswer: "Servir de system prompt pour que Claude Code comprenne le contexte du projet", explanation: "Le CLAUDE.md est lu automatiquement par Claude Code à chaque session. C'est le system prompt de ton projet — il transforme Claude d'un assistant générique en un coéquipier qui connaît ton projet par cœur." },
    ],
  },

  // ─── LEÇON 2 : Multi-fichiers et refactoring de gros projets ───
  {
    order: 2,
    module: 22,
    title: "Multi-fichiers et refactoring de gros projets",
    slug: "multi-fichiers-refactoring-gros-projets",
    duration: "25 min",
    description: "Guider Claude Code sur des projets de 50+ fichiers. Techniques de context management, chunking, et refactoring à grande échelle.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le défi des gros projets" },
      { id: "2-2", type: "text", html: "<p>Claude Code est excellent sur un fichier isolé. Mais dès que ton projet dépasse <strong>50 fichiers</strong>, les choses se compliquent. Claude ne peut pas tout lire en même temps — il a une fenêtre de contexte limitée. Si tu ne gères pas ça intelligemment, il va perdre le fil, inventer des imports, ou casser des dépendances entre fichiers.</p><p>La bonne nouvelle : avec les bonnes techniques, Claude Code peut gérer des projets de <strong>centaines de fichiers</strong> sans problème. Tout est une question de <strong>context management</strong>.</p>" },
      { id: "2-3", type: "callout", variant: "warning", html: "<strong>Piège classique :</strong> Demander à Claude de 'refactorer tout le projet' d'un coup. Il va halluciner des chemins de fichiers, mélanger les imports, et créer plus de bugs qu'il n'en résout. Toujours travailler par chunks." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Stratégie 1 : Le context management intelligent" },
      { id: "2-6", type: "text", html: "<p>Claude Code explore automatiquement ton projet, mais tu peux l'aider à se concentrer sur les bons fichiers. Voici les techniques :</p><ul><li><strong>Mentionne les fichiers explicitement :</strong> <code>Regarde /lib/auth.ts et /app/api/login/route.ts</code> — Claude ira lire exactement ces fichiers</li><li><strong>Donne le contexte d'architecture :</strong> <code>Notre auth utilise NextAuth dans /lib/auth.ts, les sessions sont stockées dans la table sessions de Supabase</code></li><li><strong>Utilise le CLAUDE.md :</strong> Mets une section architecture qui explique la structure des dossiers</li></ul>" },
      { id: "2-7", type: "steps", steps: [
        { title: "Étape 1 — Cartographie ton projet", description: "Avant toute session de refactoring, demande à Claude : 'Lis la structure du projet et résume l'architecture'. Ça lui donne une vision d'ensemble." },
        { title: "Étape 2 — Identifie les frontières", description: "Découpe ton refactoring en zones indépendantes. Exemple : 'D'abord on refactorise les composants UI, ensuite les API routes, puis le state management.'" },
        { title: "Étape 3 — Un chunk à la fois", description: "Travaille sur un chunk de 3-5 fichiers max par prompt. Vérifie que ça compile avant de passer au suivant." },
        { title: "Étape 4 — Tests entre chaque chunk", description: "Demande à Claude de lancer les tests après chaque modification. Un bug détecté tôt coûte 10x moins qu'un bug détecté à la fin." },
      ]},
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Stratégie 2 : Le refactoring guidé par les tests" },
      { id: "2-10", type: "text", html: "<p>La meilleure façon de refactorer un gros projet avec Claude Code ? <strong>Les tests d'abord.</strong> Avant de toucher au code, demande à Claude d'écrire des tests qui couvrent le comportement actuel. Ensuite, refactorise en gardant les tests verts.</p><p>Voici le workflow :</p><ol><li><code>Écris des tests pour /lib/utils.ts qui couvrent toutes les fonctions exportées</code></li><li><code>Lance les tests pour vérifier qu'ils passent tous</code></li><li><code>Maintenant refactorise /lib/utils.ts en séparant en fichiers plus petits. Les tests doivent continuer à passer.</code></li></ol>" },
      { id: "2-11", type: "callout", variant: "tip", html: "<strong>Pro tip :</strong> Utilise la commande <code>/compact</code> régulièrement pendant les longues sessions de refactoring. Ça compacte la conversation et libère du contexte pour les prochaines modifications." },

      { id: "2-12", type: "heading", level: 2, text: "Stratégie 3 : Les sessions de travail longues" },
      { id: "2-13", type: "text", html: "<p>Pour les gros refactorings, tu vas avoir des sessions longues. Voici comment les gérer efficacement :</p><ul><li><strong>Résume l'avancement :</strong> Après chaque chunk, demande à Claude de résumer ce qui a été fait et ce qui reste</li><li><strong>Utilise /compact :</strong> Quand la conversation devient longue, /compact condense le contexte</li><li><strong>Crée un plan avant de coder :</strong> Demande à Claude de lister toutes les modifications nécessaires AVANT de les faire. Valide le plan, puis exécute.</li><li><strong>Git commit par chunk :</strong> Un commit par chunk de refactoring. Si un chunk casse quelque chose, tu peux revenir en arrière facilement.</li></ul>" },
      { id: "2-14", type: "checklist", title: "Checklist — Avant un gros refactoring", items: [
        { id: "c1", text: "CLAUDE.md à jour avec l'architecture du projet" },
        { id: "c2", text: "Tests existants qui passent (ou écrits avant le refactoring)" },
        { id: "c3", text: "Branche Git dédiée créée" },
        { id: "c4", text: "Plan de refactoring validé avec Claude" },
        { id: "c5", text: "Chunks de 3-5 fichiers identifiés" },
        { id: "c6", text: "Stratégie de rollback définie (git reset ou revert)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Refactoring guidé d'un projet</h3><p>Prends un projet existant de 10+ fichiers. (1) Demande à Claude Code de cartographier l'architecture. (2) Identifie un refactoring nécessaire (renommer une convention, restructurer un dossier, séparer un gros fichier). (3) Fais écrire les tests par Claude d'abord. (4) Refactorise en chunks de 3-5 fichiers avec un commit par chunk. Documente les résultats.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la taille idéale d'un 'chunk' de refactoring avec Claude Code ?", options: JSON.stringify(["1 fichier", "3-5 fichiers", "10-20 fichiers", "Tout le projet d'un coup"]), correctAnswer: "3-5 fichiers", explanation: "Travailler par chunks de 3-5 fichiers permet à Claude de garder le contexte sans se perdre. Plus de fichiers risquent de dépasser sa capacité de contexte et de créer des bugs." },
      { type: "mcq", question: "Que fait la commande /compact dans Claude Code ?", options: JSON.stringify(["Elle supprime les fichiers inutiles", "Elle compacte la conversation pour libérer du contexte", "Elle compresse les fichiers du projet", "Elle ferme la session"]), correctAnswer: "Elle compacte la conversation pour libérer du contexte", explanation: "/compact condense l'historique de la conversation, ce qui libère du contexte pour les prochaines modifications. Essentiel lors des longues sessions de refactoring." },
      { type: "true_false", question: "Il faut demander à Claude de tout refactorer d'un coup pour gagner du temps.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Refactorer tout d'un coup est le piège classique. Claude va halluciner des chemins, mélanger les imports et créer plus de bugs. Toujours travailler par chunks de 3-5 fichiers." },
      { type: "mcq", question: "Quelle est la meilleure stratégie avant de refactorer du code avec Claude Code ?", options: JSON.stringify(["Supprimer les tests existants", "Écrire des tests qui couvrent le comportement actuel", "Faire une sauvegarde ZIP", "Demander à Claude de deviner ce que fait le code"]), correctAnswer: "Écrire des tests qui couvrent le comportement actuel", explanation: "Le refactoring guidé par les tests est la stratégie la plus sûre. On écrit d'abord des tests qui passent, puis on refactorise en gardant les tests verts. Si un test casse, on sait exactement ce qui ne va pas." },
      { type: "mcq", question: "Pourquoi faut-il faire un commit Git après chaque chunk de refactoring ?", options: JSON.stringify(["Pour avoir un bel historique Git", "Pour pouvoir revenir en arrière si un chunk casse quelque chose", "Parce que Git l'exige", "Pour synchroniser avec le cloud"]), correctAnswer: "Pour pouvoir revenir en arrière si un chunk casse quelque chose", explanation: "Un commit par chunk te donne un point de rollback. Si le chunk 4 casse tout, tu peux revenir au chunk 3 avec un simple git reset ou revert, sans perdre tout le travail." },
    ],
  },

  // ─── LEÇON 3 : MCP servers : étendre Claude Code ───
  {
    order: 3,
    module: 22,
    title: "MCP servers : étendre Claude Code à l'infini",
    slug: "mcp-servers-etendre-claude-code",
    duration: "25 min",
    description: "Installer et créer des MCP servers pour connecter Claude Code à Supabase, GitHub, Figma, Slack, et bien plus encore.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "MCP : le protocole qui change tout" },
      { id: "3-2", type: "text", html: "<p>MCP (Model Context Protocol) est le protocole ouvert d'Anthropic qui permet de <strong>connecter Claude à n'importe quel outil externe</strong>. Imagine Claude Code qui peut directement lire ta base Supabase, créer des issues GitHub, récupérer des designs Figma, ou envoyer des messages Slack — <strong>sans quitter le terminal</strong>.</p><p>C'est exactement ce que font les MCP servers. Chaque server expose des \"outils\" que Claude peut utiliser nativement. Et le plus beau : tu peux <strong>créer tes propres MCP servers</strong> pour des besoins spécifiques.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Analogie :</strong> Si Claude Code est un smartphone, les MCP servers sont les applications. Le protocole MCP est l'App Store. Tu peux installer des apps existantes ou créer les tiennes." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Installer un MCP server existant" },
      { id: "3-6", type: "text", html: "<p>L'installation d'un MCP server se fait dans le fichier <code>.claude/settings.json</code> de ton projet (ou global dans <code>~/.claude/settings.json</code>). Voici la structure :</p><pre><code>{\n  \"mcpServers\": {\n    \"supabase\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@supabase/mcp-server\"],\n      \"env\": {\n        \"SUPABASE_URL\": \"https://xxx.supabase.co\",\n        \"SUPABASE_SERVICE_KEY\": \"ta-clé-ici\"\n      }\n    }\n  }\n}</code></pre>" },
      { id: "3-7", type: "comparison", headers: ["MCP Server", "Ce qu'il fait", "Cas d'usage"], rows: [
        { cells: ["@supabase/mcp-server", "Lire/écrire dans ta base Supabase, gérer les migrations", "Créer des tables, insérer des données, débugger des requêtes"] },
        { cells: ["@anthropic/mcp-github", "Créer des issues, PRs, lire des repos", "Automatiser le workflow Git, créer des PRs de refactoring"] },
        { cells: ["@anthropic/mcp-filesystem", "Accès étendu au système de fichiers", "Travailler sur des fichiers en dehors du répertoire projet"] },
        { cells: ["@anthropic/mcp-browser", "Naviguer sur le web, prendre des screenshots", "Vérifier le rendu d'un site, scraper des données"] },
        { cells: ["mcp-figma", "Lire les designs Figma", "Transformer un design en code automatiquement"] },
      ]},
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Créer ton propre MCP server" },
      { id: "3-10", type: "text", html: "<p>Parfois, aucun MCP server existant ne correspond à ton besoin. Par exemple, tu veux que Claude accède à l'API de ton client, ou à un outil interne. Dans ce cas, tu crées ton propre MCP server.</p><p>Un MCP server est simplement un programme qui implémente le protocole MCP. Il peut être écrit en <strong>TypeScript, Python, ou n'importe quel langage</strong>. Le plus simple est d'utiliser le SDK TypeScript d'Anthropic.</p>" },
      { id: "3-11", type: "steps", steps: [
        { title: "Étape 1 — Initialise le projet", description: "Crée un nouveau dossier, npm init, installe @modelcontextprotocol/sdk. C'est la base de ton server MCP." },
        { title: "Étape 2 — Définis tes outils", description: "Chaque outil a un nom, une description, et des paramètres. Par exemple : 'get_client_data' qui prend un client_id et retourne les infos du client." },
        { title: "Étape 3 — Implémente la logique", description: "Connecte l'outil à l'API ou la base de données réelle. Gère les erreurs proprement." },
        { title: "Étape 4 — Configure et teste", description: "Ajoute ton server dans .claude/settings.json, lance Claude Code, et teste que l'outil fonctionne." },
      ]},
      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Demande à Claude Code lui-même de créer ton MCP server ! <code>Crée un MCP server TypeScript qui se connecte à l'API Stripe et expose les outils list_customers, get_invoice, create_refund</code>. Claude génère le code complet." },

      { id: "3-13", type: "heading", level: 3, text: "Les bonnes pratiques MCP" },
      { id: "3-14", type: "checklist", title: "Checklist — MCP server robuste", items: [
        { id: "c1", text: "Variables d'environnement pour les clés API (jamais en dur)" },
        { id: "c2", text: "Descriptions claires pour chaque outil (Claude les lit pour savoir quand les utiliser)" },
        { id: "c3", text: "Gestion d'erreurs avec messages explicites" },
        { id: "c4", text: "Rate limiting pour éviter de surcharger les APIs externes" },
        { id: "c5", text: "Logs pour débugger les problèmes de connexion" },
      ]},
    ]),
    exercise: "<h3>Exercice : Installe et teste un MCP server</h3><p>(1) Installe le MCP server Supabase (ou GitHub si tu n'utilises pas Supabase) dans ton projet. Configure les variables d'environnement. (2) Lance Claude Code et teste 3 commandes avec le MCP server (ex: lister les tables, lire des données, créer un enregistrement). (3) Bonus : crée un MCP server minimal qui expose un outil custom (même un simple 'hello world' qui retourne un message).</p>",
    quiz: [
      { type: "mcq", question: "Que signifie MCP dans le contexte de Claude Code ?", options: JSON.stringify(["Master Control Program", "Model Context Protocol", "Multi-Channel Platform", "Machine Code Parser"]), correctAnswer: "Model Context Protocol", explanation: "MCP = Model Context Protocol. C'est le protocole ouvert d'Anthropic qui permet de connecter Claude à n'importe quel outil externe via des servers standardisés." },
      { type: "mcq", question: "Où configure-t-on les MCP servers dans un projet ?", options: JSON.stringify(["Dans package.json", "Dans .claude/settings.json ou ~/.claude/settings.json", "Dans CLAUDE.md", "Dans .env"]), correctAnswer: "Dans .claude/settings.json ou ~/.claude/settings.json", explanation: "Les MCP servers se configurent dans .claude/settings.json (niveau projet) ou ~/.claude/settings.json (niveau global). On y définit la commande, les arguments et les variables d'environnement." },
      { type: "true_false", question: "On peut créer ses propres MCP servers pour des besoins spécifiques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tu peux créer tes propres MCP servers en TypeScript, Python ou tout autre langage. Le SDK @modelcontextprotocol/sdk facilite la création en TypeScript." },
      { type: "mcq", question: "Pourquoi les descriptions des outils MCP sont-elles importantes ?", options: JSON.stringify(["Pour la documentation du code", "Parce que Claude les lit pour savoir quand utiliser chaque outil", "Pour le référencement SEO", "Pour le versioning"]), correctAnswer: "Parce que Claude les lit pour savoir quand utiliser chaque outil", explanation: "Claude lit les descriptions des outils pour comprendre quand et comment les utiliser. Une mauvaise description = Claude n'utilisera pas l'outil au bon moment. C'est critique." },
      { type: "mcq", question: "Où doivent être stockées les clés API pour un MCP server ?", options: JSON.stringify(["En dur dans le code du server", "Dans les variables d'environnement", "Dans le CLAUDE.md", "Dans un commentaire du code"]), correctAnswer: "Dans les variables d'environnement", explanation: "Les clés API doivent toujours être dans des variables d'environnement (env dans la config MCP), jamais en dur dans le code. C'est une règle de sécurité fondamentale." },
    ],
  },

  // ─── LEÇON 4 : CI/CD et tests avec Claude Code ───
  {
    order: 4,
    module: 22,
    title: "CI/CD et tests automatiques avec Claude Code",
    slug: "cicd-tests-automatiques-claude-code",
    duration: "20 min",
    description: "Mettre en place des tests automatiques, des GitHub Actions, et un workflow professionnel avec Claude Code.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi les tests sont non-négociables" },
      { id: "4-2", type: "text", html: "<p>Quand tu développes avec l'IA, les tests passent du statut \"nice to have\" à <strong>\"absolument essentiel\"</strong>. Pourquoi ? Parce que Claude génère du code très vite, et sans tests, tu n'as aucun moyen de vérifier que ce code fonctionne correctement.</p><p>Un dev sans tests qui utilise Claude Code, c'est comme conduire une voiture de course sans freins. Tu vas vite, mais le premier virage va faire mal.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Règle d'or :</strong> Avec Claude Code, le ratio idéal est <strong>1 fichier de code = 1 fichier de test</strong>. Claude génère les tests aussi vite que le code, donc il n'y a aucune excuse." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Faire écrire les tests par Claude Code" },
      { id: "4-6", type: "text", html: "<p>Claude Code est excellent pour écrire des tests. Voici les prompts qui marchent le mieux :</p><ul><li><strong>Tests unitaires :</strong> <code>Écris des tests unitaires pour /lib/utils.ts avec Vitest. Couvre tous les edge cases.</code></li><li><strong>Tests d'intégration :</strong> <code>Écris des tests d'intégration pour l'API /api/users. Teste les cas succès, erreur 400, et erreur 500.</code></li><li><strong>Tests de composants :</strong> <code>Écris des tests pour le composant LoginForm avec @testing-library/react. Teste le rendu, la validation, et la soumission.</code></li></ul>" },
      { id: "4-7", type: "comparison", headers: ["Type de test", "Quand l'utiliser", "Framework recommandé"], rows: [
        { cells: ["Unitaire", "Fonctions utilitaires, logique métier pure", "Vitest / Jest"] },
        { cells: ["Intégration", "API routes, interactions entre modules", "Vitest + supertest"] },
        { cells: ["Composant", "Composants React avec interactions", "Testing Library + Vitest"] },
        { cells: ["E2E", "Parcours utilisateur complets", "Playwright"] },
      ]},
      { id: "4-8", type: "separator", style: "line" },

      { id: "4-9", type: "heading", level: 2, text: "GitHub Actions : ton pipeline CI/CD" },
      { id: "4-10", type: "text", html: "<p>Un pipeline CI/CD automatise la vérification de ton code à chaque push. Avec Claude Code, tu peux générer un workflow GitHub Actions complet en une seule commande :</p><p><code>Crée un workflow GitHub Actions qui : (1) lance les tests avec npm run test, (2) vérifie le linting avec npm run lint, (3) build le projet avec npm run build. Le workflow doit se déclencher sur chaque push et PR vers main.</code></p>" },
      { id: "4-11", type: "steps", steps: [
        { title: "Étape 1 — Le workflow de base", description: "Un fichier .github/workflows/ci.yml qui lance tests + lint + build sur chaque push. C'est le minimum vital pour tout projet sérieux." },
        { title: "Étape 2 — Les checks de PR", description: "Configure les branch protection rules sur GitHub pour bloquer le merge tant que le CI ne passe pas. Aucune PR ne peut être mergée si les tests échouent." },
        { title: "Étape 3 — Le déploiement auto", description: "Ajoute un step de déploiement automatique sur Vercel/Netlify quand le CI passe sur main. Push → tests → deploy, zéro intervention." },
        { title: "Étape 4 — Les notifications", description: "Intègre des notifications Slack ou Discord quand le CI échoue. Tu es averti en temps réel si un push casse quelque chose." },
      ]},
      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Workflow Claude Code + CI :</strong> Configure un hook pre-push qui lance les tests localement avant chaque push. Comme ça, tu attrapes les erreurs AVANT qu'elles n'arrivent dans le CI. Double filet de sécurité." },

      { id: "4-13", type: "heading", level: 3, text: "Claude Code en mode CI (headless)" },
      { id: "4-14", type: "text", html: "<p>Claude Code peut aussi tourner directement dans tes GitHub Actions avec le flag <code>--print</code> (mode non-interactif). Tu peux l'utiliser pour de la review de code automatique, de la génération de changelog, ou de la correction automatique de bugs détectés par le CI.</p><pre><code>claude --print \"Revois les changements dans cette PR et liste les problèmes potentiels\" | tee review.md</code></pre><p>Ça ouvre la porte à des workflows ultra-puissants : le CI détecte un problème, Claude le corrige, et ouvre une PR de fix automatiquement.</p>" },
    ]),
    exercise: "<h3>Exercice : Pipeline CI/CD complet</h3><p>(1) Demande à Claude Code d'écrire des tests pour un de tes fichiers existants (au moins 5 tests). (2) Lance-les et vérifie qu'ils passent tous. (3) Demande à Claude de créer un workflow GitHub Actions (.github/workflows/ci.yml) qui lance les tests + lint + build. (4) Push sur GitHub et vérifie que le CI se déclenche et passe au vert.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le ratio idéal fichier de code / fichier de test quand on développe avec Claude Code ?", options: JSON.stringify(["1 fichier de test pour 10 fichiers de code", "1 fichier de code = 1 fichier de test", "Pas besoin de tests, Claude génère du code fiable", "1 fichier de test pour tout le projet"]), correctAnswer: "1 fichier de code = 1 fichier de test", explanation: "Avec Claude Code, le ratio idéal est 1:1 car Claude génère les tests aussi vite que le code. Les tests sont essentiels pour vérifier que le code généré fonctionne correctement." },
      { type: "mcq", question: "Que fait le flag --print de Claude Code ?", options: JSON.stringify(["Il imprime le code sur papier", "Il lance Claude en mode non-interactif (headless) pour l'utiliser dans un CI", "Il affiche les logs de debug", "Il formate le code"]), correctAnswer: "Il lance Claude en mode non-interactif (headless) pour l'utiliser dans un CI", explanation: "Le flag --print lance Claude Code en mode non-interactif, ce qui permet de l'utiliser dans des GitHub Actions ou des scripts automatisés. Idéal pour la review de code automatique." },
      { type: "true_false", question: "Il est recommandé de bloquer le merge des PRs tant que le CI ne passe pas.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les branch protection rules qui bloquent le merge tant que le CI échoue sont une bonne pratique. Ça empêche le code cassé d'arriver en production." },
      { type: "mcq", question: "Quel framework de test est recommandé pour les tests E2E (parcours utilisateur complets) ?", options: JSON.stringify(["Vitest", "Jest", "Playwright", "Testing Library"]), correctAnswer: "Playwright", explanation: "Playwright est le framework recommandé pour les tests E2E car il simule un vrai navigateur et permet de tester des parcours utilisateur complets (clic, navigation, formulaires)." },
      { type: "mcq", question: "Quel est l'avantage d'un hook pre-push qui lance les tests localement ?", options: JSON.stringify(["Ça rend les tests plus rapides", "Ça attrape les erreurs avant qu'elles n'arrivent dans le CI", "Ça remplace le CI", "Ça améliore les performances du code"]), correctAnswer: "Ça attrape les erreurs avant qu'elles n'arrivent dans le CI", explanation: "Un hook pre-push crée un double filet de sécurité : les erreurs sont détectées localement avant le push, ce qui évite d'attendre le CI et de polluer l'historique Git avec des commits cassés." },
    ],
  },

  // ─── LEÇON 5 : Workflows multi-agents ───
  {
    order: 5,
    module: 22,
    title: "Workflows multi-agents avec Claude Code",
    slug: "workflows-multi-agents-claude-code",
    duration: "20 min",
    description: "Orchestrer plusieurs instances de Claude. Architecture agent-supervisor, parallélisation, et workflows avancés.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Un seul Claude, c'est bien. Plusieurs, c'est mieux." },
      { id: "5-2", type: "text", html: "<p>Jusqu'ici, tu utilisais Claude Code en mode \"un agent, une tâche\". Mais les projets complexes nécessitent souvent de <strong>paralléliser le travail</strong>. Imagine : un agent qui écrit le code pendant qu'un autre écrit les tests, et un troisième qui fait la review. C'est exactement ce que permettent les <strong>workflows multi-agents</strong>.</p><p>Claude Code supporte nativement les sous-agents via la commande <code>/agents</code> et le mode headless (<code>--print</code>). Tu peux orchestrer des workflows où plusieurs instances de Claude travaillent ensemble sur différentes parties d'un projet.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Concept clé :</strong> Dans un workflow multi-agents, il y a un <strong>agent supervisor</strong> qui distribue les tâches, et des <strong>agents workers</strong> qui les exécutent. Le supervisor coordonne, vérifie la qualité, et assemble le résultat final." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Architecture Supervisor-Worker" },
      { id: "5-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Agent Supervisor", description: "Distribue les tâches, coordonne, vérifie la qualité" },
        { id: "n2", label: "Worker 1 : Code", description: "Écrit le code des nouvelles features" },
        { id: "n3", label: "Worker 2 : Tests", description: "Écrit les tests unitaires et d'intégration" },
        { id: "n4", label: "Worker 3 : Review", description: "Revoit le code, détecte les bugs et les améliorations" },
      ]},
      { id: "5-7", type: "text", html: "<p>Le supervisor lance les workers en parallèle, attend leurs résultats, et orchestre les étapes suivantes. C'est comme un chef de projet technique qui délègue à son équipe.</p>" },
      { id: "5-8", type: "separator", style: "line" },

      { id: "5-9", type: "heading", level: 2, text: "Mettre en place un workflow multi-agents" },
      { id: "5-10", type: "steps", steps: [
        { title: "Méthode 1 — Les sous-agents natifs", description: "Dans Claude Code, utilise la commande qui permet de créer un sous-agent avec un prompt spécifique. Le sous-agent travaille de manière isolée et retourne son résultat au principal." },
        { title: "Méthode 2 — Le mode headless en parallèle", description: "Lance plusieurs instances de Claude Code en --print dans des processus séparés. Chaque instance travaille sur un fichier ou une tâche différente. Un script bash orchestre le tout." },
        { title: "Méthode 3 — Les GitHub Actions multi-jobs", description: "Dans ton CI, lance plusieurs jobs Claude Code en parallèle : un pour les tests, un pour la review, un pour la documentation. Chaque job est un agent indépendant." },
      ]},
      { id: "5-11", type: "callout", variant: "tip", html: "<strong>Cas d'usage concret :</strong> Tu reçois un brief client. Agent 1 : analyse le brief et crée un plan technique. Agent 2 : génère le code de base. Agent 3 : écrit les tests. Agent 4 : crée la documentation. Résultat : un projet complet livré en une fraction du temps." },

      { id: "5-12", type: "heading", level: 2, text: "Les pièges du multi-agents" },
      { id: "5-13", type: "text", html: "<p>Le multi-agents n'est pas une solution miracle. Voici les pièges à éviter :</p><ul><li><strong>Conflits de fichiers :</strong> Deux agents qui modifient le même fichier simultanément créent des conflits. Découpe bien les zones de responsabilité.</li><li><strong>Coût :</strong> Chaque agent consomme des tokens. 4 agents en parallèle = 4x le coût. Réserve le multi-agents aux projets où le gain de temps justifie le coût.</li><li><strong>Coordination :</strong> Les agents ne communiquent pas entre eux par défaut. Le supervisor doit passer le contexte explicitement à chaque worker.</li><li><strong>Qualité :</strong> Plus d'agents ne veut pas dire meilleure qualité. Un agent bien guidé vaut mieux que 5 agents mal coordonnés.</li></ul>" },
      { id: "5-14", type: "callout", variant: "warning", html: "<strong>Règle :</strong> Commence toujours par un workflow single-agent. Passe au multi-agents seulement quand tu maîtrises le single-agent ET que le projet le justifie (complexité, taille, deadline serrée)." },
    ]),
    exercise: "<h3>Exercice : Workflow multi-agents basique</h3><p>(1) Choisis une feature simple à implémenter. (2) Utilise Claude Code pour créer un plan en 3 étapes : code, tests, review. (3) Pour chaque étape, lance une session Claude Code séparée (ou utilise les sous-agents) avec un prompt précis. (4) Compare le résultat avec ce que tu aurais obtenu en une seule session. Note les différences de qualité et de temps.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle de l'agent supervisor dans un workflow multi-agents ?", options: JSON.stringify(["Écrire tout le code", "Distribuer les tâches, coordonner et vérifier la qualité", "Remplacer les tests", "Gérer le déploiement"]), correctAnswer: "Distribuer les tâches, coordonner et vérifier la qualité", explanation: "Le supervisor est le chef d'orchestre : il distribue les tâches aux workers, coordonne leur travail, vérifie la qualité des résultats, et assemble le résultat final." },
      { type: "mcq", question: "Quel est le principal risque quand deux agents modifient le même fichier ?", options: JSON.stringify(["Le fichier est supprimé", "Des conflits de code apparaissent", "Le projet ne compile plus", "Les tests sont supprimés"]), correctAnswer: "Des conflits de code apparaissent", explanation: "Quand deux agents modifient le même fichier simultanément, leurs modifications peuvent se chevaucher et créer des conflits. Il faut bien découper les zones de responsabilité pour éviter ça." },
      { type: "true_false", question: "Le multi-agents est toujours plus efficace qu'un seul agent.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le multi-agents n'est pas toujours mieux. Un agent bien guidé vaut mieux que 5 agents mal coordonnés. De plus, le coût est multiplié et les conflits de coordination peuvent annuler les gains." },
      { type: "mcq", question: "Quel flag de Claude Code permet de l'utiliser en mode non-interactif pour le multi-agents ?", options: JSON.stringify(["--silent", "--print", "--batch", "--auto"]), correctAnswer: "--print", explanation: "Le flag --print lance Claude Code en mode headless (non-interactif), ce qui permet de le lancer dans des scripts et d'orchestrer plusieurs instances en parallèle." },
      { type: "mcq", question: "Quand faut-il passer au workflow multi-agents ?", options: JSON.stringify(["Dès le premier projet", "Quand on maîtrise le single-agent ET que le projet le justifie", "Uniquement pour les projets open source", "Quand on a un gros budget"]), correctAnswer: "Quand on maîtrise le single-agent ET que le projet le justifie", explanation: "Il faut d'abord maîtriser le workflow single-agent avant de passer au multi-agents. Et le projet doit le justifier : complexité, taille importante, ou deadline serrée." },
    ],
  },

  // ─── LEÇON 6 : Cursor : l'IDE augmenté par l'IA ───
  {
    order: 6,
    module: 22,
    title: "Cursor : l'IDE augmenté par l'IA",
    slug: "cursor-ide-augmente-ia",
    duration: "25 min",
    description: "Installation, Cmd+K, Tab, Chat. Comprendre quand Cursor est plus adapté que Claude Code et comment en tirer le maximum.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Cursor : quand l'IA s'intègre directement dans l'éditeur" },
      { id: "6-2", type: "text", html: "<p>Si Claude Code est un outil terminal pour les devs qui aiment la ligne de commande, <strong>Cursor est l'approche opposée</strong> : l'IA directement intégrée dans un IDE visuel. Cursor est un fork de VS Code avec des fonctionnalités IA natives. Tu gardes ton environnement familier — extensions, thèmes, raccourcis — mais avec une couche IA surpuissante par-dessus.</p><p>La question n'est pas \"Cursor OU Claude Code\" — c'est <strong>\"Quand utiliser l'un, quand utiliser l'autre\"</strong>. Et dans cette leçon, tu vas maîtriser les deux.</p>" },
      { id: "6-3", type: "callout", variant: "info", html: "<strong>Pour installer Cursor :</strong> Va sur <code>cursor.com</code>, télécharge l'application. L'installation importe automatiquement tes extensions VS Code et tes settings. Tu es opérationnel en 2 minutes." },
      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Les 3 modes d'interaction de Cursor" },
      { id: "6-6", type: "steps", steps: [
        { title: "Cmd+K (Ctrl+K sur Windows) — Édition inline", description: "Sélectionne du code, appuie sur Cmd+K, et décris ce que tu veux. Cursor modifie le code directement dans le fichier. Idéal pour les petites modifications rapides : renommer, ajouter un paramètre, corriger un bug." },
        { title: "Tab — Autocomplétion prédictive", description: "Cursor prédit ce que tu veux écrire et te propose des suggestions en gris. Appuie sur Tab pour accepter. C'est du Copilot sous stéroïdes — Cursor comprend le contexte de ton projet, pas juste le fichier actuel." },
        { title: "Chat (Cmd+L) — Conversation avec ton codebase", description: "Ouvre le panel Chat et discute avec ton code. Tu peux poser des questions ('Comment fonctionne l'auth dans ce projet ?'), demander des modifications ('Refactorise ce composant en hooks') ou générer du code ('Crée un nouveau endpoint pour les paiements')." },
      ]},
      { id: "6-7", type: "separator", style: "line" },

      { id: "6-8", type: "heading", level: 2, text: "Quand utiliser Cursor vs Claude Code" },
      { id: "6-9", type: "comparison", headers: ["Situation", "Meilleur outil", "Pourquoi"], rows: [
        { cells: ["Édition rapide d'un fichier", "Cursor (Cmd+K)", "Plus rapide — tu vois le diff en temps réel dans l'éditeur"] },
        { cells: ["Refactoring multi-fichiers complexe", "Claude Code", "Meilleur context management et exécution de commandes"] },
        { cells: ["Explorer et comprendre un codebase", "Cursor (Chat)", "Interface visuelle avec navigation dans les fichiers"] },
        { cells: ["Automatisation et scripts", "Claude Code", "Accès au terminal, exécution de commandes bash"] },
        { cells: ["Prototypage rapide d'UI", "Cursor (Tab + Cmd+K)", "Preview en temps réel, feedback visuel immédiat"] },
        { cells: ["CI/CD et DevOps", "Claude Code", "Mode headless, intégration GitHub Actions"] },
      ]},
      { id: "6-10", type: "callout", variant: "tip", html: "<strong>Le combo gagnant :</strong> Utilise Cursor pour le développement quotidien (édition, autocomplétion, navigation) et Claude Code pour les tâches structurelles (refactoring, CI/CD, MCP, multi-agents). Les deux ne se concurrencent pas — ils se complètent." },

      { id: "6-11", type: "heading", level: 2, text: "Le Composer : l'arme secrète de Cursor" },
      { id: "6-12", type: "text", html: "<p>Le <strong>Composer</strong> (Cmd+I) est la fonctionnalité la plus puissante de Cursor. C'est un mode de travail multi-fichiers où tu décris ce que tu veux et Cursor génère/modifie plusieurs fichiers à la fois, avec un diff visuel pour chaque fichier.</p><p>Exemple : <code>Crée un nouveau composant ProductCard avec les props title, price, image. Ajoute-le à la page /products. Style avec Tailwind.</code> Cursor va créer le composant, modifier la page, et te montrer tous les changements à valider.</p>" },
      { id: "6-13", type: "callout", variant: "warning", html: "<strong>Attention :</strong> Le Composer est puissant mais imparfait sur les gros projets (50+ fichiers modifiés). Pour les refactorings massifs, Claude Code reste plus fiable car il peut exécuter les tests entre chaque modification." },
    ]),
    exercise: "<h3>Exercice : Maîtrise les 3 modes de Cursor</h3><p>(1) Installe Cursor si ce n'est pas fait. Ouvre un projet existant. (2) Utilise <strong>Cmd+K</strong> pour modifier une fonction existante (ajouter un paramètre, renommer, optimiser). (3) Utilise <strong>Tab</strong> pour écrire une nouvelle fonction — laisse Cursor prédire et accepte avec Tab. (4) Utilise le <strong>Chat</strong> pour poser 3 questions sur ton codebase. (5) Utilise le <strong>Composer</strong> pour créer un nouveau composant qui touche 2-3 fichiers. Note tes impressions sur chaque mode.</p>",
    quiz: [
      { type: "mcq", question: "Quel raccourci ouvre l'édition inline dans Cursor ?", options: JSON.stringify(["Cmd+L", "Cmd+K", "Cmd+I", "Cmd+P"]), correctAnswer: "Cmd+K", explanation: "Cmd+K (Ctrl+K sur Windows) ouvre l'édition inline. Tu sélectionnes du code, tu décris la modification, et Cursor l'applique directement dans le fichier." },
      { type: "mcq", question: "Qu'est-ce que le Composer dans Cursor ?", options: JSON.stringify(["Un outil de musique", "Un mode multi-fichiers qui génère/modifie plusieurs fichiers à la fois", "Un formateur de code", "Un gestionnaire de packages"]), correctAnswer: "Un mode multi-fichiers qui génère/modifie plusieurs fichiers à la fois", explanation: "Le Composer (Cmd+I) permet de travailler sur plusieurs fichiers à la fois. Tu décris ce que tu veux et Cursor génère ou modifie les fichiers nécessaires avec un diff visuel." },
      { type: "true_false", question: "Cursor et Claude Code sont interchangeables — il suffit de choisir l'un des deux.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Cursor et Claude Code ne sont pas interchangeables. Cursor excelle dans l'édition visuelle et l'autocomplétion, Claude Code dans le terminal, l'automatisation et les workflows complexes. Le combo des deux est la meilleure approche." },
      { type: "mcq", question: "Pour quel type de tâche Cursor est-il MEILLEUR que Claude Code ?", options: JSON.stringify(["Automatisation CI/CD", "Édition rapide d'un fichier avec Cmd+K", "Refactoring de 50+ fichiers", "Exécution de scripts bash"]), correctAnswer: "Édition rapide d'un fichier avec Cmd+K", explanation: "Cursor est plus rapide pour les éditions rapides d'un fichier car tu vois le diff en temps réel dans l'éditeur. Claude Code est meilleur pour les tâches structurelles et l'automatisation." },
      { type: "mcq", question: "Cursor est un fork de quel éditeur de code ?", options: JSON.stringify(["Sublime Text", "Atom", "VS Code", "WebStorm"]), correctAnswer: "VS Code", explanation: "Cursor est un fork de VS Code avec des fonctionnalités IA natives ajoutées. Il importe automatiquement tes extensions, thèmes et settings VS Code." },
    ],
  },

  // ─── LEÇON 7 : Cursor avancé : Rules et .cursorrules ───
  {
    order: 7,
    module: 22,
    title: "Cursor avancé : Rules et .cursorrules",
    slug: "cursor-avance-rules-cursorrules",
    duration: "25 min",
    description: "Maîtriser les fichiers de règles Cursor, le contexte projet, et les techniques avancées pour le travail multi-fichiers.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Les Rules : le CLAUDE.md de Cursor" },
      { id: "7-2", type: "text", html: "<p>Tu te souviens du fichier <code>CLAUDE.md</code> pour Claude Code ? Cursor a son équivalent : les <strong>Rules</strong>. Ce sont des instructions que Cursor suit automatiquement pour chaque interaction avec ton projet. Elles définissent le style de code, les conventions, les interdits — tout ce que Cursor doit savoir pour travailler efficacement sur ton codebase.</p><p>Il existe deux façons de configurer les Rules : les <strong>Rules globales</strong> (dans les settings Cursor) et les <strong>Rules projet</strong> (via le dossier <code>.cursor/rules/</code> ou le fichier <code>.cursorrules</code> à la racine).</p>" },
      { id: "7-3", type: "callout", variant: "info", html: "<strong>Évolution :</strong> Le fichier <code>.cursorrules</code> à la racine est l'ancienne méthode. La nouvelle méthode utilise le dossier <code>.cursor/rules/</code> avec des fichiers <code>.mdc</code> (Markdown Cursor). Les deux fonctionnent, mais la nouvelle méthode est plus puissante." },
      { id: "7-4", type: "separator", style: "dots" },

      { id: "7-5", type: "heading", level: 2, text: "Écrire des Rules efficaces" },
      { id: "7-6", type: "text", html: "<p>Une bonne Rule Cursor suit la même logique qu'un bon CLAUDE.md : concise, spécifique, et actionnable. Voici la structure recommandée dans le dossier <code>.cursor/rules/</code> :</p><ul><li><strong>general.mdc</strong> — Les règles globales du projet (stack, conventions, style)</li><li><strong>react.mdc</strong> — Les règles spécifiques à React (composants, hooks, patterns)</li><li><strong>api.mdc</strong> — Les règles pour les API routes (validation, erreurs, auth)</li><li><strong>database.mdc</strong> — Les règles pour la base de données (schémas, requêtes, migrations)</li></ul>" },
      { id: "7-7", type: "steps", steps: [
        { title: "1. Définis la stack et les conventions", description: "Exemple : 'Ce projet utilise Next.js 14 App Router, TypeScript strict, Tailwind CSS, Prisma ORM. Composants en PascalCase, fichiers en kebab-case. Server Components par défaut.'" },
        { title: "2. Liste les patterns obligatoires", description: "Exemple : 'Utiliser Zod pour la validation, gérer les erreurs avec try/catch systématique, utiliser les Server Actions pour les mutations.'" },
        { title: "3. Liste les interdits", description: "Exemple : 'Ne jamais utiliser any en TypeScript. Ne jamais utiliser useEffect pour du data fetching (utiliser Server Components). Ne jamais commit de fichiers .env.'" },
        { title: "4. Donne des exemples concrets", description: "Exemple : 'Voici comment structurer un nouveau composant : [exemple de code]. Voici comment créer une Server Action : [exemple de code].'" },
      ]},
      { id: "7-8", type: "separator", style: "line" },

      { id: "7-9", type: "heading", level: 2, text: "Le contexte projet : @-mentions et indexation" },
      { id: "7-10", type: "text", html: "<p>Cursor est puissant quand tu lui donnes le bon contexte. Dans le Chat ou le Composer, tu peux utiliser les <strong>@-mentions</strong> pour référencer des éléments spécifiques :</p><ul><li><strong>@file</strong> — Référence un fichier spécifique : <code>@lib/auth.ts</code></li><li><strong>@folder</strong> — Référence un dossier entier : <code>@components/</code></li><li><strong>@web</strong> — Cherche sur le web pour du contexte externe</li><li><strong>@docs</strong> — Référence la documentation d'une librairie</li><li><strong>@codebase</strong> — Cherche dans tout le codebase (plus lent mais plus complet)</li></ul>" },
      { id: "7-11", type: "callout", variant: "tip", html: "<strong>Pro tip :</strong> Dans les fichiers <code>.mdc</code>, tu peux utiliser un frontmatter avec <code>globs</code> pour que la rule ne s'applique qu'à certains fichiers. Exemple : <code>globs: ['src/components/**/*.tsx']</code> pour une rule qui ne s'active que sur les composants React." },

      { id: "7-12", type: "heading", level: 2, text: "Travail multi-fichiers avancé" },
      { id: "7-13", type: "text", html: "<p>Pour les modifications qui touchent plusieurs fichiers, le Composer est ton meilleur allié. Mais il faut savoir le guider :</p><ol><li><strong>Sois explicite sur les fichiers :</strong> <code>Modifie @schema.prisma pour ajouter un champ role, puis mets à jour @lib/auth.ts et @app/dashboard/page.tsx</code></li><li><strong>Donne l'ordre des opérations :</strong> <code>D'abord le schéma, ensuite le type TypeScript, enfin le composant</code></li><li><strong>Valide par étape :</strong> Accepte les modifications fichier par fichier, pas tout en bloc</li></ol>" },
      { id: "7-14", type: "comparison", headers: ["Technique", "CLAUDE.md (Claude Code)", ".cursor/rules/ (Cursor)"], rows: [
        { cells: ["Fichier principal", "CLAUDE.md à la racine", ".cursor/rules/*.mdc ou .cursorrules"] },
        { cells: ["Sous-fichiers", "CLAUDE.md dans les sous-dossiers", "Plusieurs fichiers .mdc avec globs"] },
        { cells: ["Format", "Markdown classique", "Markdown avec frontmatter YAML"] },
        { cells: ["Ciblage", "Hiérarchique (dossier parent/enfant)", "Par glob pattern (*.tsx, /api/*)"] },
        { cells: ["Contexte externe", "MCP servers", "@web, @docs, @codebase"] },
      ]},
    ]),
    exercise: "<h3>Exercice : Configure tes Rules Cursor</h3><p>(1) Crée un dossier <code>.cursor/rules/</code> dans un de tes projets. (2) Crée un fichier <code>general.mdc</code> avec les règles générales de ton projet (stack, conventions, interdits). (3) Crée un fichier spécifique (ex: <code>react.mdc</code>) avec des règles ciblées et un glob pattern. (4) Teste dans le Chat : pose une question sur ton projet et vérifie que Cursor respecte tes rules. (5) Compare l'expérience avec ton CLAUDE.md — quelles différences notes-tu ?</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'équivalent du CLAUDE.md dans Cursor ?", options: JSON.stringify(["package.json", "Les fichiers Rules (.cursorrules ou .cursor/rules/)", "tsconfig.json", ".eslintrc"]), correctAnswer: "Les fichiers Rules (.cursorrules ou .cursor/rules/)", explanation: "Les Rules Cursor sont l'équivalent du CLAUDE.md. Elles définissent les conventions, les patterns et les interdits que Cursor doit suivre dans ton projet." },
      { type: "mcq", question: "Comment référencer un fichier spécifique dans le Chat de Cursor ?", options: JSON.stringify(["#fichier", "@fichier", "!fichier", "$fichier"]), correctAnswer: "@fichier", explanation: "Dans le Chat ou le Composer de Cursor, tu utilises les @-mentions pour référencer des fichiers (@file), des dossiers (@folder), le web (@web), ou la documentation (@docs)." },
      { type: "true_false", question: "Les fichiers .mdc de Cursor peuvent cibler des fichiers spécifiques avec des glob patterns dans le frontmatter.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les fichiers .mdc supportent un frontmatter YAML avec un champ 'globs' qui permet de cibler des fichiers spécifiques. Par exemple, globs: ['src/components/**/*.tsx'] pour cibler uniquement les composants React." },
      { type: "mcq", question: "Quelle @-mention permet de chercher dans tout le codebase dans Cursor ?", options: JSON.stringify(["@file", "@web", "@codebase", "@all"]), correctAnswer: "@codebase", explanation: "@codebase permet de chercher dans l'ensemble du codebase. C'est plus lent que @file mais plus complet quand tu ne sais pas où se trouve quelque chose." },
      { type: "mcq", question: "Quelle est la méthode recommandée pour les Rules Cursor aujourd'hui ?", options: JSON.stringify(["Un seul fichier .cursorrules à la racine", "Plusieurs fichiers .mdc dans .cursor/rules/", "Des commentaires dans chaque fichier", "Un fichier README.md"]), correctAnswer: "Plusieurs fichiers .mdc dans .cursor/rules/", explanation: "La nouvelle méthode avec des fichiers .mdc dans .cursor/rules/ est plus puissante car elle permet de segmenter les rules par domaine et de cibler des fichiers spécifiques avec les glob patterns." },
    ],
  },

  // ─── LEÇON 8 : Antigravity + choisir le bon outil ───
  {
    order: 8,
    module: 22,
    title: "Antigravity + choisir le bon outil selon le projet",
    slug: "antigravity-choisir-bon-outil",
    duration: "25 min",
    description: "Présentation d'Antigravity, ses cas d'usage, et la matrice de décision Claude Code vs Cursor vs Antigravity pour chaque situation.",
    content: blocks([
      { id: "8-1", type: "heading", level: 2, text: "Antigravity : l'outil no-code dopé à l'IA" },
      { id: "8-2", type: "text", html: "<p>Après Claude Code (terminal) et Cursor (IDE), voici le troisième outil de l'arsenal : <strong>Antigravity</strong>. C'est une plateforme qui génère des applications complètes à partir de prompts, avec un focus sur le <strong>déploiement instantané</strong>.</p><p>Antigravity se positionne différemment de Claude Code et Cursor : là où les deux premiers sont des outils de <strong>développeurs</strong>, Antigravity est conçu pour créer des apps fonctionnelles <strong>sans écrire une seule ligne de code</strong>. Tu décris ce que tu veux, Antigravity génère l'app, et tu la déploies en un clic.</p>" },
      { id: "8-3", type: "callout", variant: "info", html: "<strong>Positionnement :</strong> Antigravity n'est pas un concurrent de Claude Code ou Cursor. C'est un outil complémentaire pour un cas d'usage spécifique : le prototypage ultra-rapide et les MVPs qui doivent être en ligne en heures, pas en jours." },
      { id: "8-4", type: "separator", style: "dots" },

      { id: "8-5", type: "heading", level: 2, text: "Ce que fait Antigravity" },
      { id: "8-6", type: "steps", steps: [
        { title: "Génération d'apps complètes", description: "Tu décris ton app en langage naturel et Antigravity génère le frontend, le backend, et la base de données. Stack typique : React/Next.js + API + base de données." },
        { title: "Déploiement en un clic", description: "L'app est déployée automatiquement avec un URL public. Pas besoin de configurer Vercel, pas besoin de Git. Tu cliques, c'est en ligne." },
        { title: "Itération par prompt", description: "Tu veux modifier quelque chose ? Tu décris la modification en français et Antigravity met à jour l'app. Idéal pour itérer rapidement avec un client." },
        { title: "Export du code", description: "Quand le MVP est validé, tu peux exporter le code source et continuer le développement dans Cursor ou Claude Code. C'est le pont entre no-code et code." },
      ]},
      { id: "8-7", type: "separator", style: "line" },

      { id: "8-8", type: "heading", level: 2, text: "Les cas d'usage idéaux d'Antigravity" },
      { id: "8-9", type: "text", html: "<p>Antigravity brille dans des situations très spécifiques :</p><ul><li><strong>Démo client :</strong> Tu as un call dans 2h et tu veux montrer un prototype fonctionnel ? Antigravity peut le générer en 30 minutes.</li><li><strong>MVP ultra-rapide :</strong> Tu veux tester une idée de produit sans investir des jours de développement ? Génère un MVP, teste-le avec de vrais utilisateurs, puis décide si tu investis.</li><li><strong>Outils internes :</strong> Un dashboard admin, un formulaire de saisie, un tableau de bord — des apps simples qui ne justifient pas des jours de code.</li><li><strong>Landing pages dynamiques :</strong> Des pages avec formulaires, intégrations email, et logique conditionnelle.</li></ul>" },
      { id: "8-10", type: "callout", variant: "warning", html: "<strong>Limites :</strong> Antigravity n'est PAS fait pour les projets complexes avec logique métier avancée, intégrations custom, ou scaling important. Pour ça, tu as besoin de Claude Code ou Cursor avec un vrai codebase." },

      { id: "8-11", type: "heading", level: 2, text: "La matrice de décision : quel outil pour quel projet ?" },
      { id: "8-12", type: "comparison", headers: ["Critère", "Claude Code", "Cursor", "Antigravity"], rows: [
        { cells: ["Type d'utilisateur", "Dev terminal-first", "Dev IDE-first", "Non-dev ou dev pressé"] },
        { cells: ["Complexité projet", "Haute (50+ fichiers, architecture)", "Moyenne à haute", "Faible à moyenne (MVP, prototypes)"] },
        { cells: ["Contrôle du code", "Total (tu vois tout)", "Total (dans l'IDE)", "Limité (code généré, export possible)"] },
        { cells: ["Vitesse de prototypage", "Moyenne (plus de setup)", "Moyenne", "Très rapide (minutes)"] },
        { cells: ["CI/CD et DevOps", "Excellent (mode headless)", "Bon (via terminal intégré)", "Non applicable"] },
        { cells: ["Travail multi-fichiers", "Excellent", "Très bon (Composer)", "Automatique (pas de gestion)"] },
        { cells: ["Personnalisation", "CLAUDE.md + hooks + MCP", ".cursor/rules/ + @-mentions", "Prompts uniquement"] },
        { cells: ["Coût", "API Anthropic", "Abonnement Cursor", "Abonnement Antigravity"] },
      ]},

      { id: "8-13", type: "heading", level: 2, text: "Le workflow optimal : les 3 outils ensemble" },
      { id: "8-14", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Phase 1 : Idéation (Antigravity)", description: "Prototype rapide, démo client, validation du concept en quelques heures" },
        { id: "n2", label: "Phase 2 : Développement (Cursor)", description: "Développement du vrai produit, édition visuelle, autocomplétion, navigation" },
        { id: "n3", label: "Phase 3 : Scaling (Claude Code)", description: "Refactoring, CI/CD, MCP servers, multi-agents, architecture pro" },
      ]},
      { id: "8-15", type: "callout", variant: "tip", html: "<strong>Le power move :</strong> Génère un MVP avec Antigravity pour valider l'idée avec le client. Exporte le code. Ouvre-le dans Cursor pour le développement quotidien. Utilise Claude Code pour le refactoring, les tests et le CI/CD. Tu combines la vitesse d'Antigravity, le confort de Cursor, et la puissance de Claude Code." },
    ]),
    exercise: "<h3>Exercice : Matrice de décision personnelle</h3><p>(1) Liste tes 5 derniers projets ou missions. (2) Pour chacun, identifie quel outil aurait été le plus adapté à chaque phase (idéation, développement, scaling). (3) Crée ta propre matrice de décision personnalisée avec les critères qui comptent le plus pour toi (vitesse, contrôle, coût, complexité). (4) Pour ton prochain projet, planifie quel outil tu vas utiliser à chaque étape et pourquoi.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le positionnement principal d'Antigravity ?", options: JSON.stringify(["Un IDE pour développeurs avancés", "Un outil terminal pour DevOps", "Une plateforme de génération d'apps avec déploiement instantané", "Un framework JavaScript"]), correctAnswer: "Une plateforme de génération d'apps avec déploiement instantané", explanation: "Antigravity est conçu pour générer des applications complètes à partir de prompts et les déployer en un clic. C'est idéal pour le prototypage ultra-rapide et les MVPs." },
      { type: "mcq", question: "Quel est le meilleur cas d'usage pour Antigravity ?", options: JSON.stringify(["Un projet complexe avec 100+ fichiers", "Un prototype rapide pour un call client dans 2h", "Un refactoring de codebase existant", "La mise en place d'un pipeline CI/CD"]), correctAnswer: "Un prototype rapide pour un call client dans 2h", explanation: "Antigravity excelle dans le prototypage ultra-rapide. Générer un prototype fonctionnel en 30 minutes pour un call client est son cas d'usage idéal." },
      { type: "true_false", question: "Antigravity peut remplacer complètement Claude Code et Cursor pour les projets complexes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Antigravity n'est pas fait pour les projets complexes avec logique métier avancée ou intégrations custom. Pour ça, tu as besoin de Claude Code ou Cursor. Les trois outils sont complémentaires." },
      { type: "mcq", question: "Dans le workflow optimal en 3 phases, quel outil est utilisé pour le scaling et le CI/CD ?", options: JSON.stringify(["Antigravity", "Cursor", "Claude Code", "VS Code standard"]), correctAnswer: "Claude Code", explanation: "Dans le workflow optimal : Antigravity pour l'idéation, Cursor pour le développement quotidien, et Claude Code pour le scaling (refactoring, CI/CD, MCP servers, multi-agents)." },
      { type: "mcq", question: "Que peut-on faire après avoir validé un MVP créé avec Antigravity ?", options: JSON.stringify(["Rien, le code est verrouillé", "Exporter le code et continuer dans Cursor ou Claude Code", "Tout recoder depuis zéro", "Seulement modifier via les prompts Antigravity"]), correctAnswer: "Exporter le code et continuer dans Cursor ou Claude Code", explanation: "Antigravity permet d'exporter le code source. Tu peux ensuite l'ouvrir dans Cursor ou Claude Code pour continuer le développement avec un contrôle total sur le code." },
    ],
  },
];
