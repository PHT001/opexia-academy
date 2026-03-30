// ═══════════════════════════════════════════════════
// MODULE 2 — Comment ça marche concrètement
// 4 leçons — Claude Code, services, process, plan d'action
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_02_LESSONS = [
  // ─── LEÇON 1 — CLAUDE CODE ───
  {
    order: 1,
    module: 2,
    title: "Claude Code : pourquoi c'est l'outil qu'on utilise",
    slug: "v2-claude-code-outil-principal",
    duration: "15 min",
    description: "Pas de comparatif inutile — voilà pourquoi on utilise Claude Code, ce qu'il fait, et comment il va te permettre de créer des projets pro.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi Claude Code et pas autre chose" },
      { id: "4-2", type: "text", html: "<p>Tu as peut-être déjà utilisé ChatGPT. C'est bien pour discuter. Mais pour <strong>construire des vrais projets</strong> — des sites, des apps, des automatisations — c'est pas le bon outil.</p><p><strong>Claude Code</strong> c'est un outil qui tourne dans ton terminal et qui peut :</p>" },
      { id: "4-3", type: "steps", steps: [
        { title: "Voir tout ton projet", description: "Il lit tous tes fichiers d'un coup. Il comprend l'architecture, les connexions entre les pages, la logique métier." },
        { title: "Écrire du code de qualité pro", description: "Le code généré est propre, structuré, et respecte les bonnes pratiques. C'est du code livrable à un client." },
        { title: "Exécuter des commandes", description: "Il peut installer des packages, lancer des tests, déployer. Tu restes dans le terminal, lui fait le travail." },
        { title: "Gérer des projets complexes", description: "200K tokens de contexte — il peut travailler sur des projets de milliers de lignes sans rien oublier." }
      ]},
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Concrètement, c'est quoi le workflow ?" },
      { id: "4-6", type: "text", html: "<p>Voilà à quoi ressemble une session typique :</p><ol><li><strong>Tu décris ce que tu veux :</strong> \"Crée-moi une landing page pour un coach sportif avec un formulaire de contact\"</li><li><strong>Claude Code génère les fichiers</strong></li><li><strong>Tu vérifies :</strong> Tu ouvres le site dans ton navigateur</li><li><strong>Tu ajustes :</strong> \"Change la couleur du bouton, ajoute une section témoignages\"</li><li><strong>Tu livres :</strong> Le site est prêt, tu le déploies et tu factures</li></ol>" },
      { id: "4-7", type: "callout", variant: "tip", html: "<strong>Le vibe coding en action :</strong> Tu parles, l'IA construit. Tu guides, elle exécute." },
      { id: "4-8", type: "separator", style: "line" },
      { id: "4-9", type: "heading", level: 2, text: "ChatGPT vs Claude Code — en bref" },
      { id: "4-10", type: "comparison", headers: ["", "ChatGPT", "Claude Code"], rows: [
        { cells: ["Conversation", "✅ Excellent", "✅ Excellent"] },
        { cells: ["Qualité du code", "⚠️ Moyen", "✅ Pro"] },
        { cells: ["Voir tout un projet", "❌ Non", "✅ Oui"] },
        { cells: ["Exécuter des commandes", "❌ Non", "✅ Oui"] },
        { cells: ["Fait pour construire", "❌ Non", "✅ Oui"] }
      ]},
      { id: "4-11", type: "callout", variant: "info", html: "<strong>ChatGPT c'est bien pour réfléchir. Claude Code c'est bien pour construire.</strong> Dans cette formation, on construit." }
    ]),
    exercise: "<h3>Exercice</h3><p>Va sur <a href='https://claude.ai' target='_blank'>claude.ai</a> et demande : <em>\"Explique-moi en 5 points pourquoi Claude Code est plus adapté que ChatGPT pour créer un projet web complet\"</em>. Lis la réponse.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal de Claude Code ?", options: JSON.stringify(["Il est gratuit", "Il peut voir tout le projet et exécuter des commandes", "Il parle mieux français", "Il est plus rapide"]), correctAnswer: "Il peut voir tout le projet et exécuter des commandes", explanation: "Claude Code comprend l'architecture complète du projet et exécute des commandes directement." },
      { type: "true_false", question: "Le vibe coding c'est un dialogue : tu décris, l'IA construit.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tu parles en langage naturel, l'IA génère le code. Tu guides, elle exécute." },
      { type: "mcq", question: "Pour quoi ChatGPT est-il meilleur que Claude Code ?", options: JSON.stringify(["Le code", "La conversation et la réflexion", "Le déploiement", "Rien"]), correctAnswer: "La conversation et la réflexion", explanation: "ChatGPT est excellent pour réfléchir et discuter. Claude Code est meilleur pour construire." }
    ],
  },

  // ─── LEÇON 2 — LES SERVICES ───
  {
    order: 2,
    module: 2,
    title: "Les services que tu vas vendre",
    slug: "v2-services-que-tu-vas-vendre",
    duration: "12 min",
    description: "Chatbots, sites web, automatisations, agents vocaux — ce que c'est, à qui, combien.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "4 services IA que les entreprises achètent" },
      { id: "5-2", type: "text", html: "<p>Ces 4 services se vendent tous les jours. Tu peux les créer avec Claude Code + les bons outils.</p>" },
      { id: "5-3", type: "separator", style: "dots" },
      { id: "5-4", type: "heading", level: 3, text: "1. Chatbots IA — 500 à 3 000€" },
      { id: "5-5", type: "text", html: "<p>Un chatbot connecté aux données du client. Il répond 24h/24, prend des RDV, qualifie des leads. Le service <strong>le plus demandé</strong>.</p><p><strong>Exemple :</strong> Un dentiste qui reçoit 30 appels/jour pour les mêmes questions.</p>" },
      { id: "5-6", type: "heading", level: 3, text: "2. Sites web IA — 1 000 à 5 000€" },
      { id: "5-7", type: "text", html: "<p>Un site pro avec des fonctionnalités IA intégrées. Tu le crées en quelques jours avec Claude Code.</p><p><strong>Exemple :</strong> Un agent immobilier qui veut un générateur automatique de descriptions.</p>" },
      { id: "5-8", type: "heading", level: 3, text: "3. Automatisations — 500 à 2 000€" },
      { id: "5-9", type: "text", html: "<p>Tu connectes les outils du client pour automatiser les tâches répétitives.</p><p><strong>Exemple :</strong> Un e-commerce avec des emails de relance personnalisés par l'IA.</p>" },
      { id: "5-10", type: "heading", level: 3, text: "4. Agents vocaux — 1 500 à 5 000€" },
      { id: "5-11", type: "text", html: "<p>Un assistant téléphonique IA. Le service <strong>le plus premium</strong> et le moins concurrencé.</p><p><strong>Exemple :</strong> Un cabinet médical qui rate 40% des appels.</p>" },
      { id: "5-12", type: "callout", variant: "tip", html: "<strong>Commence par UN service.</strong> Deviens bon dessus, puis diversifie." }
    ]),
    exercise: "<h3>Exercice</h3><p>Parmi les 4 services, lequel t'attire le plus ? Note ta réponse.</p>",
    quiz: [
      { type: "mcq", question: "Quel service IA est le plus demandé ?", options: JSON.stringify(["Les agents vocaux", "Les chatbots IA", "Les jeux vidéo", "Les robots"]), correctAnswer: "Les chatbots IA", explanation: "Les chatbots sont le plus demandé car le ROI est immédiat." },
      { type: "mcq", question: "Combien peut-on facturer un site web IA ?", options: JSON.stringify(["50€", "1 000 à 5 000€", "100 000€", "Gratuit"]), correctAnswer: "1 000 à 5 000€", explanation: "Un site web pro avec fonctionnalités IA se facture entre 1 000 et 5 000€." },
      { type: "true_false", question: "Il faut maîtriser les 4 services avant de se lancer.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Commence par un seul et diversifie ensuite." }
    ],
  },

  // ─── LEÇON 3 — DE L'IDÉE AU CLIENT ───
  {
    order: 3,
    module: 2,
    title: "De l'idée au client : le process complet",
    slug: "v2-idee-au-client-process",
    duration: "15 min",
    description: "Les 5 étapes pour passer de \"j'ai une compétence\" à \"je facture un client\".",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le chemin de A à Z" },
      { id: "6-2", type: "steps", steps: [
        { title: "1. Identifier un besoin", description: "Repère une entreprise avec un problème que l'IA résout." },
        { title: "2. Montrer une démo", description: "Crée un prototype en 10 minutes et montre-le. C'est le moment qui convainc." },
        { title: "3. Closer et signer", description: "Propose un devis clair. Le prospect a vu la démo, il signe." },
        { title: "4. Construire et livrer", description: "Tu utilises Claude Code pour construire, tu déploies, tu livres." },
        { title: "5. Fidéliser", description: "Forfait mensuel de maintenance (50-200€/mois). Le client te recommande." }
      ]},
      { id: "6-3", type: "separator", style: "dots" },
      { id: "6-4", type: "heading", level: 2, text: "Où trouver tes premiers clients" },
      { id: "6-5", type: "text", html: "<ul><li><strong>Ton entourage</strong> — ami entrepreneur, oncle commerçant</li><li><strong>LinkedIn</strong> — un post suffit</li><li><strong>Ton quartier</strong> — restaurant, coiffeur, agence immo</li><li><strong>Communautés</strong> — groupes Facebook, Discord</li><li><strong>Plateformes</strong> — Malt, Fiverr, Upwork</li></ul>" },
      { id: "6-6", type: "callout", variant: "tip", html: "<strong>Premier projet à 300-500€ = premier témoignage.</strong> C'est de l'or pour la suite." },
      { id: "6-7", type: "separator", style: "line" },
      { id: "6-8", type: "heading", level: 2, text: "Le script qui marche" },
      { id: "6-9", type: "text", html: "<p><em>\"Salut [prénom], je me spécialise dans les solutions IA pour les [type de business]. Je peux te montrer en 15 min ce que l'IA pourrait faire pour toi. Si ça te plaît, on travaille ensemble. Si pas, zéro engagement.\"</em></p>" }
    ]),
    exercise: "<h3>Exercice</h3><p><strong>1.</strong> Note 5 prospects potentiels.</p><p><strong>2.</strong> Ouvre Claude et utilise : <em>\"Je veux contacter [type de business] pour proposer [service IA]. Écris-moi un message LinkedIn, un WhatsApp, et un email.\"</em></p>",
    quiz: [
      { type: "mcq", question: "Quelle est la première étape pour décrocher un client ?", options: JSON.stringify(["Créer un site", "Identifier un besoin et montrer une démo", "Attendre", "Acheter de la pub"]), correctAnswer: "Identifier un besoin et montrer une démo", explanation: "Repérer un besoin + montrer une démo, c'est la méthode la plus efficace." },
      { type: "true_false", question: "Ton premier projet doit être à 5 000€.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un petit projet à 300-500€ pour avoir un premier témoignage, c'est plus stratégique." },
      { type: "mcq", question: "Comment fidéliser un client ?", options: JSON.stringify(["Disparaître", "Forfait mensuel de maintenance", "Baisser tes prix", "L'appeler tous les jours"]), correctAnswer: "Forfait mensuel de maintenance", explanation: "Un forfait mensuel crée du revenu récurrent et fidélise." }
    ],
  },

  // ─── LEÇON 4 — TON PLAN DE LANCEMENT ───
  {
    order: 4,
    module: 2,
    title: "Ton plan de lancement personnalisé",
    slug: "v2-plan-lancement-personnalise",
    duration: "15 min",
    description: "Exercice final : crée ton plan 90 jours avec Claude. Tu repars avec ta roadmap personnelle.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Faisons le point" },
      { id: "7-2", type: "text", html: "<p>En quelques leçons tu as :</p><ul><li>✅ Compris la roadmap de la formation</li><li>✅ Vu des gens normaux qui vivent de l'IA</li><li>✅ Découvert le vibe coding et Claude Code</li><li>✅ Créé un prototype de chatbot</li><li>✅ Compris les 4 services qui se vendent</li><li>✅ Appris le process complet</li><li>✅ Écrit tes messages de prospection</li></ul><p><strong>Maintenant on crée ton plan d'action.</strong></p>" },
      { id: "7-3", type: "separator", style: "dots" },
      { id: "7-4", type: "heading", level: 2, text: "Exercice final : Ton plan 90 jours" },
      { id: "7-5", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie ce prompt :</p>" },
      { id: "7-6", type: "callout", variant: "tip", html: "<strong>Prompt :</strong><br/><br/>\"Je veux lancer une activité de prestataire IA.<br/>- Service : [chatbots / automatisations / sites web / agents vocaux]<br/>- Niveau : [débutant / quelques bases / à l'aise]<br/>- Objectif 90 jours : [premier client / 2 000€/mois / quitter mon job]<br/>- Temps dispo : [2h/jour / 4h/jour / temps plein]<br/><br/>Plan semaine par semaine sur 90 jours avec : ce que j'apprends, ce que je fais, un objectif mesurable.\"" },
      { id: "7-7", type: "separator", style: "line" },
      { id: "7-8", type: "heading", level: 2, text: "Ce que ton plan va te montrer" },
      { id: "7-9", type: "text", html: "<p>Lis-le attentivement. Tu vas voir des étapes comme :</p><ul><li>\"Maîtriser le prompting\" → <strong>Module 3</strong></li><li>\"Installer Claude Code\" → <strong>Module 4</strong></li><li>\"Construire un site web\" → <strong>Modules 6-7</strong></li><li>\"Créer un chatbot\" → <strong>Module 8</strong></li><li>\"Automatiser\" → <strong>Module 10</strong></li><li>\"Closer un client\" → <strong>Module 19</strong></li></ul><p><strong>Chaque module de l'Academy correspond à une étape de ton plan.</strong></p>" },
      { id: "7-10", type: "heading", level: 2, text: "Et maintenant ?" },
      { id: "7-11", type: "text", html: "<p>Tu as le plan. Tu as les premiers outils. Tu as tes messages. Tu as un prototype.</p><p>Ce qui te manque c'est les <strong>compétences techniques et business</strong> pour exécuter. C'est exactement ce que couvrent les 20 modules suivants.</p>" },
      { id: "7-12", type: "callout", variant: "info", html: "<strong>Sauvegarde ton plan de 90 jours.</strong> C'est ta roadmap personnelle." }
    ]),
    exercise: "<h3>Exercice final</h3><p><strong>1.</strong> Sauvegarde ton plan.</p><p><strong>2.</strong> Identifie les 3 premières compétences dont tu as besoin.</p><p><strong>3.</strong> Regarde les modules suivants — ils correspondent à ton plan.</p>",
    quiz: [
      { type: "mcq", question: "Combien d'outputs concrets tu as créés ?", options: JSON.stringify(["Aucun", "1", "3 (prototype + messages + plan)", "10"]), correctAnswer: "3 (prototype + messages + plan)", explanation: "Un prototype de chatbot, tes messages de prospection, et ton plan 90 jours." },
      { type: "true_false", question: "L'Academy couvre les compétences de ton plan.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Chaque module correspond à une compétence : prompting, code, chatbots, vente..." },
      { type: "mcq", question: "Quelle est la prochaine étape ?", options: JSON.stringify(["Attendre", "Débloquer la suite pour exécuter ton plan", "Oublier", "Regarder YouTube"]), correctAnswer: "Débloquer la suite pour exécuter ton plan", explanation: "Tu as le plan et les bases. L'étape suivante c'est les compétences pour l'exécuter." }
    ],
  },
];
