// ═══════════════════════════════════════════════════
// MODULE 4 — Les IDE IA : Claude Code & Cursor
// 4 lecons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_04_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 4,
    title: "Maitriser Claude Code : commandes, permissions et workflow pro",
    slug: "v2-maitriser-claude-code-workflow-pro",
    duration: "20 min",
    description: "Tu as installe Claude Code au Module 1. Maintenant on va plus loin : toutes les commandes, la gestion des permissions, et le workflow pro pour etre efficace.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Tu connais Claude Code — maintenant maitrise-le" },
      { id: "1-2", type: "text", html: "<p>Tu as installe Claude Code au Module 1 et tu as cree tes premiers fichiers. Mais tu n'as utilise qu'une fraction de sa puissance. Dans cette lecon, on va explorer <strong>toutes les commandes</strong>, comprendre la gestion des permissions, et apprendre le workflow pro qui te rendra 5x plus productif.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Prerequis :</strong> Claude Code est deja installe et fonctionnel (Module 1, Lecon 3). Si ce n'est pas le cas, retourne-y et suis les etapes d'installation." },
      { id: "1-20", type: "heading", level: 3, text: "La difference entre un utilisateur et un maitre" },
      { id: "1-21", type: "text", html: "<p>N'importe qui peut lancer Claude Code et lui demander de creer un fichier. Mais un <strong>maitre de Claude Code</strong> sait :</p><ul><li>Quelles commandes utiliser pour gagner du temps</li><li>Comment gerer les permissions pour garder le controle</li><li>Comment structurer ses sessions pour maximiser la qualite du code</li><li>Quand laisser Claude faire et quand intervenir</li></ul><p>La difference entre un amateur et un pro, c'est rarement la connaissance — c'est la <strong>maitrise du workflow</strong>. Un pro fait en 30 minutes ce qu'un amateur fait en 3 heures, avec un meilleur resultat.</p>" },
      { id: "1-22", type: "callout", variant: "tip", html: "<strong>Objectif de cette lecon :</strong> A la fin, tu seras capable de mener une session Claude Code de A a Z comme un pro — du lancement a la livraison, en passant par le debug et les ajustements." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Toutes les commandes essentielles" },
      { id: "1-9", type: "text", html: "<p>Claude Code fonctionne dans ton terminal. Tu lui parles en langage naturel, et il execute des actions sur ton projet : lire des fichiers, creer des fichiers, modifier du code, executer des commandes. Voici les commandes que tu dois connaitre :</p>" },
      { id: "1-10", type: "comparison", headers: ["Commande", "Ce qu'elle fait"], rows: [
        { cells: ["claude", "Lance Claude Code dans le dossier courant"] },
        { cells: ["claude \"cree un fichier index.html\"", "Lance Claude Code avec une instruction directe"] },
        { cells: ["/help", "Affiche l'aide et les commandes disponibles"] },
        { cells: ["/clear", "Efface l'historique de la conversation"] },
        { cells: ["/cost", "Affiche le cout de la session en cours"] }
      ]},
      { id: "1-23", type: "heading", level: 3, text: "Les commandes avancees que les pros utilisent" },
      { id: "1-24", type: "comparison", headers: ["Commande", "Ce qu'elle fait", "Quand l'utiliser"], rows: [
        { cells: ["claude -p \"prompt\"", "Envoie un prompt sans mode interactif (print mode)", "Pour des taches rapides en une seule instruction"] },
        { cells: ["claude --model opus", "Force l'utilisation d'un modele specifique", "Quand tu as besoin de la puissance maximale pour une tache complexe"] },
        { cells: ["/compact", "Compacte la conversation pour liberer du contexte", "Quand la session est longue et que Claude commence a oublier des details"] },
        { cells: ["claude config", "Accede a la configuration de Claude Code", "Pour modifier les parametres par defaut"] }
      ]},
      { id: "1-25", type: "callout", variant: "warning", html: "<strong>La commande /compact est cruciale :</strong> Claude Code a une limite de tokens (sa \"memoire\"). Lors de longues sessions, il peut commencer a oublier ce que tu as dit au debut. Utilise /compact pour resumer la conversation et liberer de l'espace sans perdre le contexte important." },
      { id: "1-26", type: "separator", style: "line" },
      { id: "1-27", type: "heading", level: 2, text: "La gestion des permissions" },
      { id: "1-28", type: "text", html: "<p>Claude Code te demande la permission avant de modifier des fichiers ou d'executer des commandes. C'est un mecanisme de securite important que tu dois comprendre :</p><ul><li><strong>Lecture de fichiers :</strong> Claude Code lit les fichiers de ton projet automatiquement, sans demander. C'est necessaire pour comprendre ton code.</li><li><strong>Ecriture de fichiers :</strong> Il te montre le diff (les modifications proposees) et attend ta confirmation. Tu peux accepter ou refuser chaque modification.</li><li><strong>Execution de commandes :</strong> Il te demande avant d'executer une commande terminal (npm install, git commit, etc.). Lis toujours la commande avant d'accepter.</li></ul>" },
      { id: "1-29", type: "callout", variant: "tip", html: "<strong>Astuce productivite :</strong> Tu peux accepter les permissions par lot si tu fais confiance au contexte. Mais pour les commandes sensibles (suppression de fichiers, push Git, commandes sudo), lis TOUJOURS avant d'accepter." },
      { id: "1-11", type: "heading", level: 2, text: "Les bonnes pratiques de configuration" },
      { id: "1-12", type: "steps", steps: [
        { title: "Travaille toujours dans un dossier projet", description: "Lance Claude Code a la racine de ton projet, jamais dans un dossier aleatoire. Il a besoin de voir la structure du projet pour etre efficace." },
        { title: "Utilise Git", description: "Initialise un depot Git (git init) avant de commencer. Ca te permet de revenir en arriere si Claude fait une modification que tu ne veux pas." },
        { title: "Commence petit", description: "Pour tes premiers essais, commence par des taches simples : creer un fichier HTML, modifier un texte, ajouter du CSS. Augmente la complexite progressivement." },
        { title: "Lis ce que Claude fait", description: "Claude Code affiche les fichiers qu'il modifie et les commandes qu'il execute. Lis toujours ces informations avant d'accepter les changements." }
      ]},
      { id: "1-30", type: "heading", level: 3, text: "Le workflow pro en 6 etapes" },
      { id: "1-31", type: "text", html: "<p>Voici le workflow que les meilleurs utilisateurs de Claude Code suivent :</p>" },
      { id: "1-32", type: "steps", steps: [
        { title: "1. Prepare ton dossier", description: "Cree le dossier du projet, initialise Git, et cree un fichier CLAUDE.md avec le contexte du projet (on verra ca en detail dans la lecon suivante)." },
        { title: "2. Lance Claude Code", description: "cd dans ton dossier et tape 'claude'. Claude Code va automatiquement lire la structure du projet et le fichier CLAUDE.md." },
        { title: "3. Commence par l'architecture", description: "\"Cree la structure du projet avec les dossiers et les fichiers de base\". Ne demande pas tout le code d'un coup — pose d'abord les fondations." },
        { title: "4. Construis composant par composant", description: "\"Maintenant cree le header avec le logo, le menu de navigation et le bouton CTA\". Puis \"Cree la section hero\". Etc. Un composant a la fois." },
        { title: "5. Teste et itere", description: "Apres chaque composant, ouvre le site dans ton navigateur. Verifie le rendu. Demande des ajustements : \"Le bouton est trop petit, mets-le en 48px de hauteur avec un border-radius de 12px\"." },
        { title: "6. Commite regulierement", description: "Apres chaque fonctionnalite qui marche, demande a Claude Code de faire un commit : \"Fais un commit avec le message 'ajout section hero'\". Ca te donne un point de sauvegarde." }
      ]},
      { id: "1-33", type: "callout", variant: "info", html: "<strong>La regle d'or :</strong> Un composant a la fois, un test a la fois, un commit a la fois. C'est plus lent au debut, mais beaucoup plus fiable et tu evites les bugs qui s'accumulent." },
      { id: "1-13", type: "callout", variant: "tip", html: "<strong>Astuce cout :</strong> Claude Code utilise l'API Anthropic et donc consomme des tokens. Pour commencer, le plan gratuit ou un credit de 5 dollars suffit largement. Surveille tes couts avec la commande /cost." },
      { id: "1-34", type: "heading", level: 3, text: "Gerer les couts efficacement" },
      { id: "1-35", type: "text", html: "<p>Les couts de Claude Code dependent de la quantite de tokens utilises. Voici comment optimiser :</p><ul><li><strong>Sois precis dans tes prompts :</strong> Un prompt bien ecrit consomme moins de tokens qu'une conversation de 10 messages ou tu clarifies ce que tu veux</li><li><strong>Utilise /compact :</strong> Compacte la conversation quand elle devient longue. Ca libere des tokens et reduit les couts des messages suivants</li><li><strong>Choisis le bon modele :</strong> Sonnet pour les taches courantes, Opus uniquement quand tu as besoin de la puissance maximale</li><li><strong>Budget moyen par projet :</strong> Un site vitrine complet te coute environ 5-15€ en tokens. Un chatbot : 3-8€. C'est negligeable compare a ce que tu factures.</li></ul>" },
      { id: "1-14", type: "checklist", title: "Ce que tu retiens de cette lecon", items: [
        { id: "c1", text: "Claude Code se lance dans le terminal avec la commande 'claude'" },
        { id: "c2", text: "Il faut Node.js et une cle API Anthropic pour l'utiliser" },
        { id: "c3", text: "Toujours travailler dans un dossier projet avec Git initialise" },
        { id: "c4", text: "Lire les modifications proposees avant de les accepter" },
        { id: "c5", text: "Surveiller les couts avec /cost" }
      ]}
    ]),
    exercise: "<h3>Exercice : Maitrise les commandes avancees</h3><p>Claude Code est deja installe depuis le Module 1. Maintenant, teste ces commandes avancees :</p><ol><li>Ouvre un de tes projets existants dans le terminal et lance <code>claude</code></li><li>Tape <code>/cost</code> pour voir la consommation de ta session</li><li>Demande a Claude Code : \"Montre-moi la structure de ce projet\" et observe comment il analyse les fichiers</li><li>Teste les permissions : demande-lui de creer un fichier, puis de le modifier. Observe les demandes de confirmation.</li><li>Utilise <code>/clear</code> pour reinitialiser la conversation, puis redemande la meme tache — compare la reponse</li><li>Demande-lui de faire un changement complexe sur 3 fichiers en une seule instruction. Lis attentivement le diff avant d'accepter.</li><li>Note tes observations : quand Claude est rapide, quand il hesite, et comment tu peux mieux formuler tes demandes.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle commande permet de voir le cout de ta session Claude Code ?", options: JSON.stringify(["/price", "/cost", "/billing", "/tokens"]), correctAnswer: "/cost", explanation: "La commande /cost affiche le cout en tokens et en dollars de la session Claude Code en cours. C'est important pour surveiller ta consommation." },
      { type: "true_false", question: "Claude Code peut modifier plusieurs fichiers en une seule instruction.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, Claude Code peut analyser et modifier plusieurs fichiers en une seule demande. C'est l'un de ses points forts pour travailler sur des projets complets." },
      { type: "mcq", question: "Pourquoi est-il recommande d'initialiser Git avant d'utiliser Claude Code ?", options: JSON.stringify(["Pour que Claude Code fonctionne", "Pour pouvoir revenir en arriere si une modification ne convient pas", "Parce que Git est obligatoire", "Pour publier automatiquement le code"]), correctAnswer: "Pour pouvoir revenir en arriere si une modification ne convient pas", explanation: "Git te permet de voir les changements faits par Claude Code et de revenir en arriere (git checkout) si une modification ne te convient pas. C'est un filet de securite essentiel." },
      { type: "mcq", question: "A quoi sert la commande /clear dans Claude Code ?", options: JSON.stringify(["Supprimer tous les fichiers du projet", "Reinitialiser la conversation en cours", "Effacer le cache de l'API", "Desinstaller Claude Code"]), correctAnswer: "Reinitialiser la conversation en cours", explanation: "La commande /clear efface l'historique de la conversation en cours. C'est utile quand tu veux repartir a zero sur une nouvelle tache sans que Claude soit influence par les echanges precedents." },
      { type: "true_false", question: "Il faut valider chaque modification proposee par Claude Code avant qu'elle soit appliquee.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Par defaut, Claude Code te montre les modifications proposees et attend ta confirmation avant de les appliquer. C'est un mecanisme de securite important pour garder le controle sur ton code." },
      { type: "mcq", question: "Quelle est la meilleure pratique pour utiliser Claude Code efficacement ?", options: JSON.stringify(["Lui donner des instructions vagues pour le laisser decider", "Travailler dans un dossier projet avec Git et lire les diffs", "Ne jamais utiliser /cost pour ne pas perdre de temps", "Tout accepter automatiquement sans lire"]), correctAnswer: "Travailler dans un dossier projet avec Git et lire les diffs", explanation: "La meilleure pratique est de toujours travailler dans un dossier projet structure avec Git initialise, et de lire attentivement les modifications (diffs) proposees par Claude Code avant de les accepter." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 4,
    title: "Coder un projet avec Claude Code (CLAUDE.md, MCP, multi-fichiers)",
    slug: "v2-coder-projet-claude-code-avance",
    duration: "30 min",
    description: "Apprends les fonctionnalites avancees de Claude Code : le fichier CLAUDE.md pour le contexte persistant, les MCP servers, et la gestion de projets multi-fichiers.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Passer au niveau superieur avec Claude Code" },
      { id: "2-2", type: "text", html: "<p>Tu sais maintenant installer et utiliser Claude Code pour des taches simples. Mais la vraie puissance de Claude Code se revele quand tu travailles sur des <strong>projets complets</strong> avec plusieurs fichiers, des dependances, et une architecture a respecter. Pour ca, tu dois maitriser 3 fonctionnalites cles : le fichier CLAUDE.md, les MCP servers, et la gestion multi-fichiers.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Le secret des pros :</strong> Les meilleurs utilisateurs de Claude Code passent 20% de leur temps a configurer le contexte (CLAUDE.md, instructions) et 80% a coder. Les debutants font l'inverse : ils codent sans contexte et perdent du temps a corriger les erreurs." },
      { id: "2-20", type: "heading", level: 3, text: "Pourquoi le contexte est roi" },
      { id: "2-21", type: "text", html: "<p>Imagine que tu embauches un developpeur freelance. Si tu lui dis juste \"fais-moi un site\", le resultat sera generique et probablement pas ce que tu veux. Mais si tu lui donnes un <strong>brief detaille</strong> — la stack technique, le design, les conventions, les fonctionnalites — il te livre exactement ce que tu veux du premier coup.</p><p>Claude Code fonctionne exactement pareil. La qualite de ce qu'il produit est directement proportionnelle a la qualite du contexte que tu lui donnes. Et le CLAUDE.md, c'est ton brief permanent.</p>" },
      { id: "2-22", type: "comparison", headers: ["Sans CLAUDE.md", "Avec CLAUDE.md"], rows: [
        { cells: ["Claude Code utilise ses propres conventions", "Claude Code suit TES conventions"] },
        { cells: ["Tu dois rappeler la stack a chaque session", "La stack est definie une fois pour toutes"] },
        { cells: ["Le code genere est inconsistant d'un fichier a l'autre", "Le code est coherent sur tout le projet"] },
        { cells: ["Tu passes du temps a corriger des choix techniques", "Les bons choix sont faits automatiquement"] }
      ]},
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Le fichier CLAUDE.md : le cerveau de ton projet" },
      { id: "2-6", type: "text", html: "<p>Le fichier CLAUDE.md est un fichier Markdown place a la racine de ton projet. Claude Code le lit automatiquement a chaque session. Il contient les <strong>instructions permanentes</strong> pour ton projet : le style de code, l'architecture, les conventions, les technologies utilisees. C'est comme un brief permanent pour ton assistant IA.</p>" },
      { id: "2-7", type: "steps", steps: [
        { title: "Description du projet", description: "Explique ce que fait le projet en 2-3 phrases. \"Ce projet est une landing page pour un photographe de mariage, construite avec Next.js 14 et Tailwind CSS.\"" },
        { title: "Stack technique", description: "Liste les technologies : langage, framework, librairies, base de donnees. Claude Code adaptera son code en consequence." },
        { title: "Conventions de code", description: "Style de nommage (camelCase, kebab-case), organisation des fichiers, patterns preferes (hooks vs classes, etc.)." },
        { title: "Instructions specifiques", description: "\"Toujours utiliser TypeScript strict\", \"Les composants vont dans src/components/\", \"Utiliser Prisma pour la base de donnees\"." },
        { title: "Ce qu'il faut eviter", description: "\"Ne pas utiliser any en TypeScript\", \"Pas de console.log en production\", \"Ne pas modifier les fichiers de config sans demander\"." }
      ]},
      { id: "2-23", type: "heading", level: 3, text: "Un exemple de CLAUDE.md complet" },
      { id: "2-24", type: "text", html: "<p>Voici un CLAUDE.md que tu peux copier et adapter pour tes projets :</p><p><em># Projet : Site Vitrine Coach Sportif</em></p><p><em>## Description<br/>Site vitrine professionnel pour un coach sportif a Paris. 5 sections : hero, programmes, temoignages, a propos, contact.</em></p><p><em>## Stack technique<br/>- HTML5, CSS3, JavaScript ES6+<br/>- Pas de framework — site statique simple<br/>- Design mobile-first avec media queries<br/>- Hebergement prevu sur Vercel</em></p><p><em>## Conventions<br/>- Noms de fichiers en kebab-case (ma-page.html)<br/>- CSS organise par section (hero.css, programmes.css...)<br/>- Commentaires en francais<br/>- Code propre et indente (2 espaces)</em></p><p><em>## Instructions<br/>- Design energique : couleurs bleu nuit (#1a1a2e) et orange (#e94560)<br/>- Typographie : Inter pour le corps, Montserrat bold pour les titres<br/>- Tous les CTA pointent vers le formulaire de contact<br/>- Images placeholder avec picsum.photos</em></p><p><em>## A eviter<br/>- Pas de jQuery<br/>- Pas de framework CSS (pas de Bootstrap/Tailwind)<br/>- Pas de fonctionnalites qui necessitent un backend</em></p><p>Avec ce CLAUDE.md, chaque fichier genere par Claude Code sera coherent avec la vision du projet.</p>" },
      { id: "2-25", type: "callout", variant: "info", html: "<strong>Conseil :</strong> Commence par un CLAUDE.md simple (5-10 lignes). Tu l'enrichiras au fur et a mesure que le projet avance et que tu decouvres des choses a preciser. Pas besoin d'un document parfait des le debut." },
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Les MCP Servers : connecter Claude Code au monde exterieur" },
      { id: "2-10", type: "text", html: "<p>Les MCP (Model Context Protocol) Servers permettent a Claude Code d'interagir avec des <strong>services externes</strong> : naviguer sur le web, lire des bases de donnees, acceder a des APIs, gerer des fichiers sur des services cloud. C'est ce qui transforme Claude Code d'un simple outil de code en un veritable agent capable d'actions complexes.</p>" },
      { id: "2-11", type: "comparison", headers: ["MCP Server", "Ce qu'il permet"], rows: [
        { cells: ["Browser / Puppeteer", "Naviguer sur le web, prendre des captures d'ecran, tester des sites"] },
        { cells: ["Filesystem", "Acceder a des fichiers en dehors du projet courant"] },
        { cells: ["Database", "Lire et ecrire dans des bases de donnees (PostgreSQL, SQLite)"] },
        { cells: ["GitHub", "Creer des issues, des PRs, lire des repos"] },
        { cells: ["Custom MCP", "Tu peux creer tes propres MCP servers pour connecter n'importe quel service"] }
      ]},
      { id: "2-26", type: "heading", level: 3, text: "Les MCP Servers les plus utiles pour les debutants" },
      { id: "2-27", type: "text", html: "<p>Tu n'as pas besoin de tous les MCP Servers tout de suite. Voici les 3 que tu utiliseras le plus :</p><ol><li><strong>Browser MCP :</strong> Permet a Claude Code de voir ton site web et de faire des captures d'ecran. Super utile pour le debug visuel : \"Prends une capture du hero et dis-moi si le bouton est bien centre\".</li><li><strong>GitHub MCP :</strong> Permet de gerer tes repos GitHub directement depuis Claude Code. Cree des repos, des branches, des PRs sans quitter le terminal.</li><li><strong>Fetch MCP :</strong> Permet a Claude Code d'aller chercher des infos sur le web. Utile pour lire la documentation d'une API ou recuperer des donnees pour un client.</li></ol>" },
      { id: "2-28", type: "callout", variant: "tip", html: "<strong>Ne te prends pas la tete :</strong> Les MCP Servers sont un outil avance. Si tu debutes, concentre-toi d'abord sur Claude Code de base. Tu ajouteras les MCP quand tu en auras besoin pour un projet specifique." },
      { id: "2-12", type: "heading", level: 2, text: "Gestion de projets multi-fichiers" },
      { id: "2-13", type: "text", html: "<p>Un vrai projet a des dizaines voire des centaines de fichiers. Claude Code gere ca nativement : il peut lire, creer et modifier plusieurs fichiers dans la meme commande. Mais pour que ca fonctionne bien, tu dois lui donner une vision claire de l'architecture.</p>" },
      { id: "2-14", type: "steps", steps: [
        { title: "Commence par l'architecture", description: "Avant de coder, demande a Claude Code de creer la structure de dossiers et les fichiers vides. Ca pose les fondations." },
        { title: "Travaille composant par composant", description: "Ne demande pas tout d'un coup. Construis le projet piece par piece : d'abord le layout, puis les composants, puis les pages, puis les API routes." },
        { title: "Fais des commits reguliers", description: "Apres chaque fonctionnalite qui marche, fais un commit Git. Ca te donne des points de sauvegarde et ca aide Claude Code a comprendre l'evolution du projet." },
        { title: "Utilise les references", description: "Quand tu demandes une modification, reference les fichiers existants : \"Modifie src/components/Header.tsx pour ajouter un menu mobile qui suit le meme style que Footer.tsx\"." }
      ]},
      { id: "2-29", type: "heading", level: 3, text: "Les prompts multi-fichiers qui marchent" },
      { id: "2-30", type: "text", html: "<p>Voici des exemples de prompts multi-fichiers efficaces :</p><ul><li><strong>Ajouter une feature :</strong> \"Ajoute une page /contact avec un formulaire (nom, email, message). Cree le composant ContactForm.tsx, la page app/contact/page.tsx, et ajoute le lien dans le menu de navigation du Header.tsx\"</li><li><strong>Corriger un style global :</strong> \"Change la police du site de Inter a Poppins dans le fichier globals.css, et verifie que tous les composants qui overrident la police sont aussi mis a jour\"</li><li><strong>Refactorer :</strong> \"Extrais la logique de fetch API du composant Products.tsx dans un hook personnalise useProducts.ts dans le dossier hooks/. Mets a jour Products.tsx pour utiliser le nouveau hook\"</li></ul><p>La cle : <strong>sois explicite</strong> sur quels fichiers sont concernes et comment ils doivent interagir.</p>" },
      { id: "2-31", type: "callout", variant: "warning", html: "<strong>Piege courant :</strong> Demander \"change le design de tout le site\". C'est trop vague et trop large. Claude Code va toucher a trop de fichiers et potentiellement casser des choses. Sois <strong>specifique et progressif</strong> : une section a la fois, une fonctionnalite a la fois." },
      { id: "2-15", type: "callout", variant: "warning", html: "<strong>Erreur frequente :</strong> Demander a Claude Code de \"creer tout le projet d'un coup\". C'est la meilleure facon d'obtenir un resultat mediocre. Construis etape par etape, teste a chaque etape, et itere." },
      { id: "2-16", type: "checklist", title: "Ce que tu retiens de cette lecon", items: [
        { id: "c1", text: "CLAUDE.md donne le contexte permanent du projet a Claude Code" },
        { id: "c2", text: "Un bon CLAUDE.md contient : description, stack, conventions, instructions, interdictions" },
        { id: "c3", text: "Les MCP Servers connectent Claude Code a des services externes (web, DB, GitHub)" },
        { id: "c4", text: "Construire un projet multi-fichiers se fait etape par etape, pas tout d'un coup" },
        { id: "c5", text: "Les commits Git reguliers sont essentiels pour travailler efficacement" }
      ]}
    ]),
    exercise: "<h3>Exercice : Cree un projet complet avec Claude Code</h3><p>Construis un mini-site portfolio de prestataire IA :</p><ol><li>Cree un nouveau dossier : <code>mkdir portfolio-ia && cd portfolio-ia && git init</code></li><li>Cree un fichier CLAUDE.md avec : description du projet (\"Portfolio professionnel pour un prestataire IA\"), stack (HTML, CSS, JavaScript), conventions (\"design moderne, mobile-first, couleurs sombres\")</li><li>Lance Claude Code et demande-lui de creer la structure du projet : index.html, styles.css, script.js</li><li>Demande-lui de creer une section Hero avec ton nom, ton titre (\"Prestataire IA\"), et un CTA</li><li>Demande-lui d'ajouter une section Services avec 3 cartes (Chatbots, Automatisations, Sites Web)</li><li>Demande-lui d'ajouter une section Contact avec un formulaire</li><li>Fais un commit apres chaque section : <code>git add . && git commit -m \"ajout section hero\"</code></li><li>Ouvre le site dans ton navigateur et verifie chaque section</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le role du fichier CLAUDE.md ?", options: JSON.stringify(["C'est un fichier de documentation pour les utilisateurs", "Il donne le contexte permanent du projet a Claude Code", "C'est un fichier de configuration Node.js", "Il stocke les cles API"]), correctAnswer: "Il donne le contexte permanent du projet a Claude Code", explanation: "Le fichier CLAUDE.md est lu automatiquement par Claude Code. Il contient les instructions permanentes du projet : stack, conventions, architecture, ce qui guide Claude Code dans ses decisions." },
      { type: "true_false", question: "Il est recommande de demander a Claude Code de creer tout le projet d'un coup.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, c'est une erreur frequente. Il faut construire etape par etape, tester a chaque etape, et iterer. Ca donne des resultats bien meilleurs." },
      { type: "mcq", question: "Que permettent les MCP Servers ?", options: JSON.stringify(["De coder plus vite", "De connecter Claude Code a des services externes (web, DB, APIs)", "De reduire les couts", "De changer le modele IA utilise"]), correctAnswer: "De connecter Claude Code a des services externes (web, DB, APIs)", explanation: "Les MCP (Model Context Protocol) Servers permettent a Claude Code d'interagir avec le monde exterieur : naviguer sur le web, acceder aux bases de donnees, gerer des repos GitHub, etc." },
      { type: "mcq", question: "Que doit contenir un bon fichier CLAUDE.md ?", options: JSON.stringify(["Seulement le nom du projet", "Description, stack technique, conventions, instructions specifiques, interdictions", "Le code source complet", "Les donnees des utilisateurs"]), correctAnswer: "Description, stack technique, conventions, instructions specifiques, interdictions", explanation: "Un bon CLAUDE.md contient 5 elements : la description du projet, la stack technique, les conventions de code, les instructions specifiques, et ce qu'il faut eviter." },
      { type: "true_false", question: "Les commits Git reguliers sont inutiles quand on travaille avec Claude Code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les commits Git sont essentiels : ils creent des points de sauvegarde qui permettent de revenir en arriere et aident Claude Code a comprendre l'evolution du projet." },
      { type: "mcq", question: "Quelle est la meilleure approche pour un projet multi-fichiers avec Claude Code ?", options: JSON.stringify(["Tout demander en une seule instruction", "D'abord l'architecture, puis composant par composant avec des commits reguliers", "Coder soi-meme et utiliser Claude Code uniquement pour le debug", "Creer chaque fichier manuellement"]), correctAnswer: "D'abord l'architecture, puis composant par composant avec des commits reguliers", explanation: "La meilleure approche est progressive : d'abord poser l'architecture (structure de dossiers), puis construire composant par composant, avec des commits Git apres chaque fonctionnalite." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 4,
    title: "Cursor : l'IDE augmente, rules, .cursorrules",
    slug: "v2-cursor-ide-augmente-rules",
    duration: "25 min",
    description: "Decouvre Cursor, l'editeur de code augmente par l'IA : installation, fonctionnalites cles, fichier .cursorrules, et comment l'utiliser pour coder plus vite.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Cursor : VS Code sous steroides" },
      { id: "3-2", type: "text", html: "<p>Cursor est un editeur de code base sur VS Code, mais avec des capacites IA integrees nativement. Contrairement a Claude Code qui fonctionne en terminal, Cursor offre une <strong>interface graphique complete</strong> avec l'IA directement dans l'editeur. Tu vois ton code, tu vois les modifications de l'IA en temps reel, et tu peux accepter ou refuser chaque changement visuellement.</p><p>Cursor est particulierement adapte pour les personnes qui preferent un environnement visuel et pour les modifications chirurgicales de code existant.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Cursor vs VS Code :</strong> Si tu connais VS Code, tu connais deja 90% de Cursor. C'est le meme editeur avec des fonctionnalites IA en plus. Toutes tes extensions VS Code fonctionnent dans Cursor." },
      { id: "3-20", type: "heading", level: 3, text: "Pourquoi apprendre Cursor en plus de Claude Code ?" },
      { id: "3-21", type: "text", html: "<p>Tu te demandes peut-etre : \"J'ai deja Claude Code, pourquoi apprendre un deuxieme outil ?\" Bonne question. Voici la reponse :</p><ul><li><strong>Claude Code est un outil de terminal :</strong> Tu ne vois pas le code en direct. Tu lis des diffs textuels. C'est puissant mais parfois tu veux VOIR ce qui se passe.</li><li><strong>Cursor est un outil visuel :</strong> Tu vois le code, les modifications en surbrillance, les suggestions inline. C'est ideal pour les ajustements precis.</li><li><strong>Ils excellent dans des situations differentes :</strong> Claude Code pour creer et restructurer, Cursor pour modifier et peaufiner.</li><li><strong>Tes clients s'en fichent :</strong> Ce qui compte c'est le resultat final. Avoir 2 outils dans ta boite, ca veut dire que tu es toujours efficace, quelle que soit la tache.</li></ul>" },
      { id: "3-22", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> Claude Code c'est le pinceau large pour peindre les grands aplats. Cursor c'est le pinceau fin pour les details. Tu as besoin des deux pour un tableau professionnel." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Installation et premiers pas" },
      { id: "3-6", type: "steps", steps: [
        { title: "Telecharge Cursor", description: "Va sur cursor.com et telecharge la version pour ton systeme (Mac, Windows ou Linux). L'installation est standard." },
        { title: "Importe tes parametres VS Code", description: "Au premier lancement, Cursor propose d'importer tes extensions et parametres VS Code. Accepte pour retrouver ton environnement habituel." },
        { title: "Configure le modele IA", description: "Dans les parametres de Cursor, choisis ton modele IA prefere. Tu peux utiliser Claude (recommande), GPT-4o, ou d'autres modeles." },
        { title: "Active la completion IA", description: "Cursor propose de l'autocompletion IA en temps reel pendant que tu codes. Active-la dans les parametres pour des suggestions constantes." }
      ]},
      { id: "3-23", type: "heading", level: 3, text: "Les plans et tarifs de Cursor" },
      { id: "3-24", type: "text", html: "<p>Cursor propose plusieurs plans :</p><ul><li><strong>Gratuit (Hobby) :</strong> 2 semaines d'essai du plan Pro, puis des fonctionnalites limitees. Suffisant pour tester.</li><li><strong>Pro (20$/mois) :</strong> Acces complet a tous les modeles, completions illimitees, 500 requetes premium/mois. C'est le plan recommande.</li><li><strong>Business (40$/mois) :</strong> Pour les equipes. Pas necessaire quand tu es solo.</li></ul><p><strong>Notre recommandation :</strong> Commence avec le plan gratuit pour tester. Si tu accroches, passe au Pro. 20$/mois est un investissement derisoire compare a ce que tu factures. C'est comme acheter un bon outil de travail — ca se rentabilise en quelques heures.</p>" },
      { id: "3-7", type: "separator", style: "line" },
      { id: "3-8", type: "heading", level: 2, text: "Les fonctionnalites cles de Cursor" },
      { id: "3-9", type: "comparison", headers: ["Fonctionnalite", "Raccourci", "Usage"], rows: [
        { cells: ["Chat inline", "Cmd+K (Mac) / Ctrl+K (Win)", "Demande une modification directement dans le code, en voyant le diff en temps reel"] },
        { cells: ["Chat panel", "Cmd+L (Mac) / Ctrl+L (Win)", "Conversation avec l'IA dans un panneau lateral, avec contexte du projet"] },
        { cells: ["Composer", "Cmd+I (Mac) / Ctrl+I (Win)", "Modifications multi-fichiers orchestrees par l'IA"] },
        { cells: ["Tab completion", "Tab", "Accepte la suggestion de code IA en cours de frappe"] },
        { cells: ["@ References", "@fichier, @dossier, @web", "Reference des fichiers, dossiers ou resultats web dans tes prompts"] }
      ]},
      { id: "3-25", type: "heading", level: 3, text: "Quand utiliser chaque fonctionnalite" },
      { id: "3-26", type: "steps", steps: [
        { title: "Chat inline (Cmd+K) — Pour les modifications precises", description: "Selectionne un bloc de code, tape Cmd+K, et dis ce que tu veux changer. Ideal pour : modifier un style, ajouter une validation, renommer des variables, ajouter de la gestion d'erreur. Tu vois le diff en temps reel et tu acceptes ou refuses." },
        { title: "Chat panel (Cmd+L) — Pour les questions et les discussions", description: "Ouvre le panneau lateral pour discuter avec l'IA. Ideal pour : comprendre un bout de code, demander des explications, planifier une architecture, brainstormer des idees. L'IA voit le fichier ouvert comme contexte." },
        { title: "Composer (Cmd+I) — Pour les modifications multi-fichiers", description: "Le Composer est le plus puissant. Il orchestre des modifications sur plusieurs fichiers en meme temps. Ideal pour : ajouter une nouvelle fonctionnalite (nouveau composant + page + route), implementer un design system, faire du refactoring global." },
        { title: "Tab completion — Pour l'autocompletion intelligente", description: "Pendant que tu tapes, Cursor suggere du code intelligent. Appuie sur Tab pour accepter. Plus rapide que de taper chaque caractere. L'IA comprend le contexte et suggere du code coherent avec le reste du fichier." }
      ]},
      { id: "3-27", type: "callout", variant: "tip", html: "<strong>Le raccourci le plus utile :</strong> Cmd+K (Ctrl+K) avec du texte selectionne. Selectionne un bout de code, tape Cmd+K, et dis \"rends ce bouton responsive\" ou \"ajoute un effet hover\". C'est le raccourci que tu utiliseras 50 fois par session." },
      { id: "3-10", type: "heading", level: 2, text: "Le fichier .cursorrules : les instructions permanentes" },
      { id: "3-11", type: "text", html: "<p>Le fichier <strong>.cursorrules</strong> est l'equivalent de CLAUDE.md pour Cursor. Place a la racine du projet, il contient les instructions que Cursor suivra a chaque interaction. C'est le moyen de garantir la coherence du code genere avec tes standards.</p>" },
      { id: "3-12", type: "steps", steps: [
        { title: "Cree le fichier", description: "Cree un fichier .cursorrules a la racine de ton projet. C'est un simple fichier texte." },
        { title: "Definis le contexte technique", description: "Stack utilisee, versions, librairies. Exemple : \"Ce projet utilise Next.js 14, TypeScript strict, Tailwind CSS, et Prisma ORM.\"" },
        { title: "Definis le style de code", description: "Conventions de nommage, organisation des imports, gestion des erreurs. Plus tu es precis, plus le code genere sera coherent." },
        { title: "Definis les patterns", description: "\"Utilise des Server Components par defaut, les Client Components uniquement quand necessaire\", \"Gere les erreurs avec try/catch et des messages utilisateur clairs\"." }
      ]},
      { id: "3-28", type: "heading", level: 3, text: "CLAUDE.md vs .cursorrules : les differences" },
      { id: "3-29", type: "comparison", headers: ["", "CLAUDE.md", ".cursorrules"], rows: [
        { cells: ["Outil", "Claude Code (terminal)", "Cursor (editeur visuel)"] },
        { cells: ["Format", "Markdown libre (titres, listes, code blocks)", "Texte brut ou Markdown simple"] },
        { cells: ["Portee", "Lu automatiquement par Claude Code au lancement", "Lu par Cursor pour chaque interaction IA"] },
        { cells: ["Contenu typique", "Description projet + stack + conventions + interdictions", "Stack technique + conventions de code + patterns"] },
        { cells: ["Best practice", "Un CLAUDE.md par projet", "Un .cursorrules par projet (peut coexister avec CLAUDE.md)"] }
      ]},
      { id: "3-30", type: "callout", variant: "info", html: "<strong>Astuce :</strong> Tu peux avoir les DEUX fichiers dans le meme projet. CLAUDE.md pour quand tu utilises Claude Code, et .cursorrules pour quand tu utilises Cursor. Le contenu sera similaire mais adapte a chaque outil." },
      { id: "3-13", type: "callout", variant: "tip", html: "<strong>Astuce communaute :</strong> Tu trouveras des fichiers .cursorrules pre-faits pour les stacks populaires (Next.js, React, Python) sur GitHub et dans la communaute Cursor. Utilise-les comme base et adapte-les a ton projet." },
      { id: "3-14", type: "checklist", title: "Ce que tu retiens de cette lecon", items: [
        { id: "c1", text: "Cursor est un VS Code augmente avec l'IA integree nativement" },
        { id: "c2", text: "Les 3 modes d'interaction : Chat inline (Cmd+K), Chat panel (Cmd+L), Composer (Cmd+I)" },
        { id: "c3", text: "Le fichier .cursorrules donne les instructions permanentes du projet" },
        { id: "c4", text: "Les @ References permettent de donner du contexte precis a l'IA" },
        { id: "c5", text: "Cursor excelle pour les modifications visuelles et chirurgicales du code" }
      ]}
    ]),
    exercise: "<h3>Exercice : Installe et teste Cursor</h3><p>Decouvre Cursor par la pratique :</p><ol><li>Telecharge et installe Cursor depuis cursor.com</li><li>Ouvre le projet portfolio que tu as cree avec Claude Code dans l'exercice precedent</li><li>Cree un fichier .cursorrules avec : \"Projet portfolio, HTML/CSS/JS, design moderne mobile-first, couleurs sombres, code propre et commente\"</li><li><strong>Test Chat inline (Cmd+K) :</strong> Selectionne le CSS du Hero et demande \"Ajoute une animation fade-in au chargement\"</li><li><strong>Test Chat panel (Cmd+L) :</strong> Demande \"Ajoute une section temoignages avec 3 faux temoignages clients\"</li><li><strong>Test Composer (Cmd+I) :</strong> Demande \"Ajoute un mode sombre avec un bouton toggle dans le header. Modifie le CSS et le JS necessaires\"</li><li>Compare l'experience Cursor avec Claude Code : note les differences dans ton journal</li></ol>",
    quiz: [
      { type: "mcq", question: "Sur quel editeur Cursor est-il base ?", options: JSON.stringify(["Sublime Text", "VS Code", "Vim", "IntelliJ"]), correctAnswer: "VS Code", explanation: "Cursor est base sur VS Code. Toutes tes extensions et parametres VS Code fonctionnent dans Cursor, avec des fonctionnalites IA en plus." },
      { type: "true_false", question: "Les extensions VS Code ne sont pas compatibles avec Cursor.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les extensions VS Code sont entierement compatibles avec Cursor. Tu peux importer tous tes parametres et extensions au premier lancement." },
      { type: "mcq", question: "Quel raccourci ouvre le Chat inline dans Cursor (Mac) ?", options: JSON.stringify(["Cmd+L", "Cmd+K", "Cmd+I", "Cmd+P"]), correctAnswer: "Cmd+K", explanation: "Cmd+K ouvre le Chat inline, qui permet de demander une modification directement dans le code en voyant le diff en temps reel." },
      { type: "mcq", question: "Quel est le role du fichier .cursorrules ?", options: JSON.stringify(["C'est un fichier de configuration systeme", "Il contient les instructions permanentes que Cursor suivra pour le projet", "Il stocke les raccourcis clavier", "Il gere les dependances du projet"]), correctAnswer: "Il contient les instructions permanentes que Cursor suivra pour le projet", explanation: "Le fichier .cursorrules donne les instructions permanentes a Cursor : stack technique, conventions de code, patterns a suivre. C'est l'equivalent de CLAUDE.md pour Cursor." },
      { type: "true_false", question: "Le Composer (Cmd+I) permet de faire des modifications sur plusieurs fichiers a la fois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, le Composer orchestre des modifications multi-fichiers. C'est utile quand une fonctionnalite necessite de modifier le HTML, le CSS et le JS en meme temps." },
      { type: "mcq", question: "Que permettent les @ References dans Cursor ?", options: JSON.stringify(["De creer des liens hypertexte", "De referencer des fichiers, dossiers ou resultats web dans les prompts", "De mentionner d'autres developpeurs", "De creer des variables JavaScript"]), correctAnswer: "De referencer des fichiers, dossiers ou resultats web dans les prompts", explanation: "Les @ References (@fichier, @dossier, @web) permettent de donner du contexte precis a l'IA en referencant des fichiers existants ou des resultats web." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 4,
    title: "Atelier : quand utiliser Claude Code vs Cursor vs les deux",
    slug: "v2-atelier-claude-code-vs-cursor",
    duration: "25 min",
    description: "Atelier comparatif : decouvre les cas d'usage ideaux de chaque outil, comment les combiner, et construis ton workflow personnel de developpement IA.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Claude Code et Cursor : deux approches complementaires" },
      { id: "4-2", type: "text", html: "<p>Claude Code et Cursor ne sont pas des concurrents — ce sont des <strong>outils complementaires</strong>. Chacun brille dans des situations differentes. Les meilleurs developpeurs IA utilisent les deux, en passant de l'un a l'autre selon la tache. Dans cet atelier, tu vas comprendre exactement quand utiliser chaque outil et comment les combiner.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>L'analogie :</strong> Claude Code est comme un architecte qui construit la structure. Cursor est comme un decorateur d'interieur qui peaufine les details. Tu as besoin des deux pour un resultat professionnel." },
      { id: "4-20", type: "heading", level: 3, text: "Le test rapide : quel outil pour quelle tache ?" },
      { id: "4-21", type: "text", html: "<p>Avant de rentrer dans les details, voici un test rapide que tu peux faire a chaque fois que tu demarres une tache :</p><ol><li><strong>Est-ce que je cree un nouveau projet ou une nouvelle fonctionnalite majeure ?</strong> → Claude Code</li><li><strong>Est-ce que je modifie 1-2 fichiers avec des ajustements visuels ?</strong> → Cursor</li><li><strong>Est-ce que j'ai besoin d'executer des commandes terminal (npm install, git, tests) ?</strong> → Claude Code</li><li><strong>Est-ce que je veux voir le diff en temps reel avant d'accepter ?</strong> → Cursor</li><li><strong>Est-ce que la modification touche 3+ fichiers ?</strong> → Claude Code</li><li><strong>Est-ce que je debug un probleme visuel ?</strong> → Cursor</li></ol><p>Ce test prend 5 secondes et t'evite de perdre du temps avec le mauvais outil.</p>" },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Quand utiliser Claude Code" },
      { id: "4-6", type: "comparison", headers: ["Situation", "Pourquoi Claude Code est le meilleur choix"], rows: [
        { cells: ["Creer un projet from scratch", "Claude Code voit l'ensemble du projet et cree une architecture coherente"] },
        { cells: ["Refactoring massif", "Il peut modifier 10 fichiers d'un coup en maintenant la coherence"] },
        { cells: ["Executer des commandes systeme", "Il lance des commandes terminal (npm install, git, tests) directement"] },
        { cells: ["Travailler sur un serveur distant", "Via SSH, Claude Code fonctionne sur n'importe quel serveur"] },
        { cells: ["Automatiser des taches repetitives", "Il peut enchainer des actions complexes de facon autonome"] }
      ]},
      { id: "4-22", type: "heading", level: 3, text: "Les super-pouvoirs de Claude Code" },
      { id: "4-23", type: "text", html: "<p>Il y a des choses que <strong>seul Claude Code</strong> peut faire et que Cursor ne fait pas :</p><ul><li><strong>Commandes systeme :</strong> npm install, pip install, git push, docker build... Claude Code execute directement dans le terminal</li><li><strong>Deploiement :</strong> Il peut deployer ton site sur Vercel, Netlify, ou un serveur distant en une seule commande</li><li><strong>Pipeline complet :</strong> \"Installe les dependances, cree le projet, genere les composants, lance les tests, et deploie\" — tout en une session</li><li><strong>Automation :</strong> Tu peux scripter des taches avec Claude Code en mode pipe (claude -p) pour automatiser des workflows repetitifs</li></ul>" },
      { id: "4-7", type: "heading", level: 2, text: "Quand utiliser Cursor" },
      { id: "4-8", type: "comparison", headers: ["Situation", "Pourquoi Cursor est le meilleur choix"], rows: [
        { cells: ["Modifier un composant precis", "Le Chat inline montre le diff en temps reel, tu acceptes ou refuses chaque ligne"] },
        { cells: ["Explorer du code inconnu", "L'editeur visuel + l'IA te permet de comprendre rapidement un codebase"] },
        { cells: ["Ecrire du nouveau code avec autocompletion", "Tab completion suggere du code intelligent pendant que tu tapes"] },
        { cells: ["Debug visuel", "Tu vois le code, les erreurs, et les corrections cote a cote"] },
        { cells: ["Pair programming", "Cursor te guide ligne par ligne, comme un collegue qui code avec toi"] }
      ]},
      { id: "4-24", type: "heading", level: 3, text: "Les super-pouvoirs de Cursor" },
      { id: "4-25", type: "text", html: "<p>Et voici ce que <strong>seul Cursor</strong> fait vraiment bien :</p><ul><li><strong>Tab completion contextuelle :</strong> Pendant que tu tapes, Cursor suggere des lignes entieres de code basees sur le contexte de ton fichier. C'est comme avoir un collegue qui finit tes phrases, mais pour du code.</li><li><strong>Diff inline :</strong> Quand tu demandes une modification avec Cmd+K, tu vois exactement quelles lignes sont ajoutees (en vert) et supprimees (en rouge). Tu acceptes ou refuses chaque changement individuellement.</li><li><strong>@ References :</strong> Tu peux taguer un fichier (@Header.tsx) dans ton prompt pour que l'IA le lise et s'en inspire. Super utile : \"Cree un Footer.tsx dans le meme style que @Header.tsx\".</li><li><strong>Multi-modeles :</strong> Tu peux choisir differents modeles IA selon la tache. Claude pour le code complexe, GPT-4o pour les explications, etc.</li></ul>" },
      { id: "4-9", type: "separator", style: "line" },
      { id: "4-10", type: "heading", level: 2, text: "Le workflow combine : la methode pro" },
      { id: "4-11", type: "steps", steps: [
        { title: "Phase 1 : Architecture avec Claude Code", description: "Cree la structure du projet, les fichiers de base, le CLAUDE.md, et les dependances. Claude Code excelle pour poser les fondations rapidement." },
        { title: "Phase 2 : Developpement avec Cursor", description: "Ouvre le projet dans Cursor pour coder les composants un par un. L'autocompletion et le Chat inline rendent le developpement fluide et visuel." },
        { title: "Phase 3 : Features complexes avec Claude Code", description: "Pour les fonctionnalites qui touchent plusieurs fichiers (ajout d'authentification, connexion API, migration DB), repasse sur Claude Code." },
        { title: "Phase 4 : Polish avec Cursor", description: "Reviens dans Cursor pour les ajustements fins : animations CSS, optimisations, corrections de detail." },
        { title: "Phase 5 : Deploy avec Claude Code", description: "Utilise Claude Code pour les commandes de deploiement, la configuration serveur, et les tests automatises." }
      ]},
      { id: "4-26", type: "heading", level: 3, text: "Un exemple de projet reel avec le workflow combine" },
      { id: "4-27", type: "text", html: "<p>Voici comment un pro creerait un site e-commerce pour un client en combinant les deux outils :</p><ol><li><strong>Claude Code (30 min) :</strong> \"Cree un projet Next.js 14 avec TypeScript, Tailwind CSS, et Prisma. Structure : pages produits, panier, checkout. Initialise Git et cree le CLAUDE.md.\"</li><li><strong>Cursor (2h) :</strong> Ouvre le projet. Code chaque composant avec Tab completion et Chat inline. Header, liste produits, carte produit, panier lateral, formulaire de checkout. Ajuste le design visuellement.</li><li><strong>Claude Code (1h) :</strong> \"Connecte le panier a Stripe pour le paiement. Cree les API routes /api/checkout et /api/webhook. Ajoute la logique de calcul du panier avec les taxes.\"</li><li><strong>Cursor (30 min) :</strong> Peaufine les animations de transition, le responsive mobile, les micro-interactions (loading states, hover effects, success messages).</li><li><strong>Claude Code (15 min) :</strong> \"Deploie sur Vercel. Configure les variables d'environnement. Lance les tests.\"</li></ol><p><strong>Total : 4h15 de travail pour un e-commerce fonctionnel.</strong> Facture au client : 3 000-5 000€.</p>" },
      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Regle simple :</strong> Si ta tache concerne 1-2 fichiers avec des modifications visuelles, utilise Cursor. Si ta tache concerne 3+ fichiers ou des commandes systeme, utilise Claude Code. Si tu ne sais pas, commence avec Claude Code et passe a Cursor pour affiner." },
      { id: "4-13", type: "heading", level: 2, text: "Erreurs a eviter avec les IDE IA" },
      { id: "4-14", type: "comparison", headers: ["Erreur", "Solution"], rows: [
        { cells: ["Accepter du code sans le lire", "Lis toujours le diff avant d'accepter. Un bug non detecte maintenant coute 10x plus cher a corriger plus tard."] },
        { cells: ["Ne pas utiliser Git", "Fais un commit apres chaque fonctionnalite qui marche. C'est ton filet de securite."] },
        { cells: ["Prompt trop vague", "\"Fais un truc beau\" ne marche pas. Sois precis : couleurs, dimensions, comportement."] },
        { cells: ["Ne pas tester", "Apres chaque modification, teste dans le navigateur. L'IA fait parfois des erreurs subtiles."] },
        { cells: ["Ignorer les erreurs", "Si le code ne compile pas, corrige avant de continuer. Ne construis pas sur des fondations cassees."] }
      ]},
      { id: "4-28", type: "separator", style: "dots" },
      { id: "4-29", type: "heading", level: 3, text: "Comment construire ton workflow personnel" },
      { id: "4-30", type: "text", html: "<p>Il n'y a pas de workflow unique qui marche pour tout le monde. Voici comment trouver le tien :</p><ol><li><strong>Teste les deux outils pendant une semaine :</strong> Fais le meme type de tache (creer un composant, debugger un bug, ajouter une feature) sur les deux outils et note lequel est plus naturel pour toi.</li><li><strong>Identifie tes preferences :</strong> Certains preferent le terminal (→ Claude Code dominant), d'autres l'interface graphique (→ Cursor dominant). Les deux sont valides.</li><li><strong>Adapte selon le projet :</strong> Un site statique simple ? Peut-etre tout en Cursor. Un projet full-stack avec DB et API ? Claude Code en lead, Cursor pour le polish.</li><li><strong>Itere :</strong> Ton workflow va evoluer avec le temps. Ce qui marche pour toi au debut va changer quand tu gagneras en experience. C'est normal.</li></ol>" },
      { id: "4-31", type: "callout", variant: "info", html: "<strong>Le point cle :</strong> L'outil n'est pas le plus important. Ce qui compte, c'est le resultat que tu livres au client. Que tu utilises Claude Code, Cursor, ou les deux — si le client est content et paie, tu as gagne." },
      { id: "4-15", type: "checklist", title: "Ce que tu retiens de cet atelier", items: [
        { id: "c1", text: "Claude Code = architecture, multi-fichiers, commandes systeme, refactoring massif" },
        { id: "c2", text: "Cursor = modifications precises, autocompletion, debug visuel, exploration de code" },
        { id: "c3", text: "Le workflow pro combine les deux : Claude Code pour la structure, Cursor pour les details" },
        { id: "c4", text: "Toujours lire le code genere, tester, et commiter regulierement" },
        { id: "c5", text: "La regle des 3 fichiers : 1-2 fichiers = Cursor, 3+ fichiers = Claude Code" }
      ]}
    ]),
    exercise: "<h3>Exercice : Construis un projet en combinant Claude Code et Cursor</h3><p>Cree un mini site \"calculateur de devis IA\" en utilisant les deux outils :</p><ol><li><strong>Claude Code (Phase 1) :</strong> Cree un nouveau projet avec la structure : index.html, styles.css, app.js, et un CLAUDE.md. Demande-lui de creer un formulaire avec 3 champs : type de service (dropdown : chatbot, automatisation, site web), nombre de pages/fonctionnalites, et le budget estime.</li><li><strong>Cursor (Phase 2) :</strong> Ouvre le projet dans Cursor. Utilise le Chat inline pour ameliorer le design du formulaire : arrondis, ombres, couleurs professionnelles, animations de hover.</li><li><strong>Claude Code (Phase 3) :</strong> Ajoute la logique JavaScript qui calcule un devis base sur les choix de l'utilisateur et affiche le resultat dans une section dediee.</li><li><strong>Cursor (Phase 4) :</strong> Peaufine le resultat : animation d'apparition du devis, format monetaire francais, responsive mobile.</li><li>Dans ton journal, note : quand tu as prefere Claude Code, quand tu as prefere Cursor, et pourquoi.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel outil est le mieux adapte pour creer l'architecture d'un nouveau projet ?", options: JSON.stringify(["Cursor", "Claude Code", "VS Code standard", "Notepad"]), correctAnswer: "Claude Code", explanation: "Claude Code excelle pour creer l'architecture d'un projet from scratch : structure de dossiers, fichiers de base, dependances. Il voit l'ensemble du projet et cree une structure coherente." },
      { type: "true_false", question: "Claude Code et Cursor sont des outils concurrents qui ne peuvent pas etre utilises ensemble.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ils sont complementaires. Le workflow professionnel combine Claude Code pour la structure et les operations multi-fichiers, et Cursor pour les modifications precises et visuelles." },
      { type: "mcq", question: "Selon la \"regle des 3 fichiers\", quand utiliser Claude Code ?", options: JSON.stringify(["Quand on modifie 1 fichier", "Quand on modifie 1-2 fichiers", "Quand on modifie 3 fichiers ou plus", "Uniquement pour les fichiers CSS"]), correctAnswer: "Quand on modifie 3 fichiers ou plus", explanation: "La regle simple : si ta tache concerne 1-2 fichiers, utilise Cursor. Si elle concerne 3 fichiers ou plus, ou des commandes systeme, utilise Claude Code." },
      { type: "mcq", question: "Quelle est la phase 4 du workflow combine ?", options: JSON.stringify(["Architecture avec Claude Code", "Developpement avec Cursor", "Deploy avec Claude Code", "Polish avec Cursor"]), correctAnswer: "Polish avec Cursor", explanation: "La phase 4 est le polish avec Cursor : ajustements fins, animations CSS, optimisations, corrections de detail. Cursor excelle pour les modifications visuelles precises." },
      { type: "true_false", question: "Il est acceptable d'accepter du code genere par l'IA sans le lire ni le tester.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Il faut toujours lire le diff avant d'accepter et tester dans le navigateur. Un bug non detecte maintenant coute 10 fois plus cher a corriger plus tard." },
      { type: "mcq", question: "Quel outil est recommande pour le debug visuel de code ?", options: JSON.stringify(["Claude Code", "Cursor", "Les deux sont equivalents", "Aucun des deux"]), correctAnswer: "Cursor", explanation: "Cursor est ideal pour le debug visuel grace a son interface graphique. Tu vois le code, les erreurs et les corrections cote a cote, ce qui facilite la comprehension et la validation." }
    ],
  },
];
