// ═══════════════════════════════════════════════════
// MODULE 1 — Le game IA : comprends le business
// 4 leçons — Comprendre l'opportunité + première action
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_01_LESSONS = [
  // ─── LEÇON 0 — BIENVENUE ───
  {
    order: 1,
    module: 1,
    title: "Bienvenue — ce qui t'attend",
    slug: "v2-bienvenue-ce-qui-tattend",
    duration: "10 min",
    description: "Comment la formation est structurée, ce que tu vas apprendre, et ta roadmap pour les prochaines semaines.",
    content: blocks([
      { id: "0-1", type: "heading", level: 2, text: "Bienvenue dans OpexIA" },
      { id: "0-2", type: "text", html: "<p>Tu es là parce que tu veux <strong>lancer ton activité dans l'IA</strong>. Que tu viennes de TikTok, d'un pote, ou de tes propres recherches — tu es au bon endroit.</p><p>Cette formation va t'apprendre à <strong>créer des solutions IA et les vendre à des entreprises</strong>. Pas besoin de savoir coder. Pas besoin d'un diplôme. Juste de la motivation et les bons outils.</p>" },
      { id: "0-3", type: "separator", style: "dots" },
      { id: "0-4", type: "heading", level: 2, text: "Comment ça va se passer" },
      { id: "0-5", type: "steps", steps: [
        { title: "Phase 1 — Comprendre le game", description: "Tu découvres le marché, les opportunités, et tu fais tes premières actions concrètes avec l'IA. C'est là où tu es maintenant." },
        { title: "Phase 2 — Maîtriser les outils", description: "Tu apprends à prompter comme un pro, à vibe coder avec Claude Code et Cursor, et à utiliser Git/GitHub." },
        { title: "Phase 3 — Construire des vrais projets", description: "Tu crées des sites web, des chatbots, des automatisations — des projets que tu peux montrer à des clients." },
        { title: "Phase 4 — Vendre", description: "Tu apprends à trouver des clients, closer un appel, livrer un projet, et scaler à 10K€/mois." }
      ]},
      { id: "0-6", type: "callout", variant: "tip", html: "<strong>Chaque leçon te donne une compétence concrète.</strong> Pas de théorie inutile — tu fais, tu apprends, tu avances. À la fin de chaque module, tu sais faire un truc de plus qu'avant." },
      { id: "0-7", type: "separator", style: "line" },
      { id: "0-8", type: "heading", level: 2, text: "Ta roadmap" },
      { id: "0-9", type: "comparison", headers: ["Semaine", "Ce que tu sais faire"], rows: [
        { cells: ["Semaine 1-2", "Tu comprends le marché, tu maîtrises Claude, tu fais tes premiers prototypes"] },
        { cells: ["Semaine 3-4", "Tu sais vibe coder — tu crées des sites et des chatbots avec l'IA"] },
        { cells: ["Semaine 5-6", "Tu construis ton portfolio de services (automatisations, agents vocaux...)"] },
        { cells: ["Semaine 7-8", "Tu prospectes, tu closes, tu livres ton premier client"] },
        { cells: ["Mois 3", "Tu factures régulièrement, tu scales vers 5-10K€/mois"] }
      ]},
      { id: "0-10", type: "text", html: "<p>C'est ambitieux mais réaliste. Des dizaines d'élèves l'ont fait avant toi. La clé : <strong>suivre le parcours dans l'ordre et ne pas sauter d'étapes</strong>.</p>" },
      { id: "0-11", type: "callout", variant: "info", html: "<strong>Prêt ?</strong> La prochaine leçon t'explique pourquoi le timing est parfait et pourquoi les entreprises ont besoin de toi maintenant." }
    ]),
    exercise: "",
    quiz: [
      { type: "mcq", question: "En combien de phases est organisée la formation ?", options: JSON.stringify(["2 phases", "4 phases", "7 phases", "10 phases"]), correctAnswer: "4 phases", explanation: "La formation est organisée en 4 phases : comprendre, maîtriser les outils, construire des projets, et vendre." },
      { type: "true_false", question: "Il faut savoir coder pour suivre cette formation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Pas besoin de savoir coder. Tu vas apprendre le vibe coding — l'IA code pour toi." },
      { type: "mcq", question: "Quel est l'objectif au bout de 3 mois ?", options: JSON.stringify(["Avoir un diplôme", "Facturer régulièrement et scaler vers 5-10K€/mois", "Trouver un CDI en IA", "Maîtriser 10 langages de programmation"]), correctAnswer: "Facturer régulièrement et scaler vers 5-10K€/mois", explanation: "L'objectif c'est d'avoir tes propres clients et de générer des revenus récurrents avec tes services IA." }
    ],
  },

  // ─── LEÇON 1 — POURQUOI LES ENTREPRISES ONT BESOIN DE TOI ───
  {
    order: 2,
    module: 1,
    title: "Pourquoi les entreprises ont besoin de toi",
    slug: "v2-pourquoi-entreprises-besoin-de-toi",
    duration: "12 min",
    description: "Le marché de l'IA explose, les PME galèrent, et c'est exactement là que tu interviens. Avec des histoires concrètes.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "3 personnes qui vivent de l'IA aujourd'hui" },
      { id: "1-2", type: "text", html: "<p>Avant de parler de chiffres, voici 3 histoires de gens normaux qui génèrent des revenus avec l'IA.</p>" },
      { id: "1-3", type: "heading", level: 3, text: "Thomas, 24 ans — ancien serveur" },
      { id: "1-4", type: "text", html: "<p>Thomas bossait en restauration. Il a appris à créer des chatbots IA en 3 semaines. Son premier client : le restaurant où il travaillait. Facture : <strong>800€</strong>. Aujourd'hui il a 6 clients récurrents et facture <strong>3 500€/mois</strong>.</p>" },
      { id: "1-5", type: "heading", level: 3, text: "Sarah, 28 ans — freelance marketing" },
      { id: "1-6", type: "text", html: "<p>Sarah faisait du community management à 1 500€/mois. Elle a ajouté \"automatisation IA\" à ses services. Résultat : <strong>3 000 à 5 000€ par projet</strong>. Elle n'a pas appris à coder — elle utilise des outils no-code + l'IA.</p>" },
      { id: "1-7", type: "heading", level: 3, text: "Karim, 32 ans — reconversion totale" },
      { id: "1-8", type: "text", html: "<p>Karim était dans la logistique. Zéro compétence tech. 2 mois après sa formation, il signe un agent immobilier pour un site + générateur de descriptions IA. Facture : <strong>3 000€</strong>. Aujourd'hui il fait 3-4 projets par mois.</p>" },
      { id: "1-9", type: "callout", variant: "tip", html: "<strong>Le point commun ?</strong> Aucun d'entre eux n'était développeur. Ils ont appris à utiliser les bons outils au bon moment." },
      { id: "1-10", type: "separator", style: "line" },
      { id: "1-11", type: "heading", level: 2, text: "Pourquoi maintenant" },
      { id: "1-12", type: "text", html: "<p><strong>Moins de 20% des PME</strong> utilisent l'IA concrètement. Les 80% restants savent qu'ils doivent s'y mettre mais ne savent pas par où commencer.</p><p>Les outils (Claude Code, Cursor...) sont devenus assez puissants pour créer des solutions pro <strong>sans être développeur</strong>. C'est la fenêtre parfaite : la demande explose, l'offre ne suit pas.</p>" },
      { id: "1-13", type: "comparison", headers: ["Ce que les clients achètent", "Prix moyen"], rows: [
        { cells: ["Chatbot IA (FAQ, prise de RDV)", "500 à 3 000€"] },
        { cells: ["Site web propulsé par l'IA", "1 000 à 5 000€"] },
        { cells: ["Automatisations business", "500 à 2 000€"] },
        { cells: ["Agent vocal IA", "1 500 à 5 000€"] }
      ]},
      { id: "1-14", type: "callout", variant: "info", html: "<strong>2-3 projets par mois à 1 000-2 000€ chacun = 2 000 à 6 000€/mois.</strong> Et ça, c'est le début." }
    ]),
    exercise: "<h3>Exercice</h3><p>Pense à 3 entreprises ou personnes dans ton entourage qui galèrent avec des tâches répétitives, qui répondent aux mêmes questions toute la journée, ou qui ont un site web basique. Note leurs noms — ce sont tes futurs premiers clients.</p>",
    quiz: [
      { type: "mcq", question: "Quel pourcentage des PME utilise concrètement l'IA en 2026 ?", options: JSON.stringify(["Plus de 80%", "Environ 50%", "Moins de 20%", "Moins de 5%"]), correctAnswer: "Moins de 20%", explanation: "Moins de 20% des PME utilisent l'IA concrètement. C'est une opportunité massive." },
      { type: "true_false", question: "Il faut être développeur pour vendre des services IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Thomas, Sarah et Karim n'étaient pas développeurs. Les outils actuels permettent de créer des solutions pro sans coder." },
      { type: "mcq", question: "Combien peut gagner un freelance IA avec 2-3 projets par mois ?", options: JSON.stringify(["200 à 500€", "2 000 à 6 000€", "20 000 à 50 000€", "Rien au début"]), correctAnswer: "2 000 à 6 000€", explanation: "2 à 3 projets à 1 000-2 000€ chacun = 2 000 à 6 000€ par mois." }
    ],
  },

  // ─── LEÇON 2 — LE VIBE CODING ───
  {
    order: 3,
    module: 1,
    title: "Le vibe coding : installe Claude Code et crée sans savoir coder",
    slug: "v2-vibe-coding-cree-sans-coder",
    duration: "20 min",
    description: "C'est quoi le vibe coding, pourquoi Claude Code change tout, et on l'installe ensemble pas à pas pour que tu sois prêt à créer.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Tu n'as pas besoin de savoir coder" },
      { id: "2-2", type: "text", html: "<p>Si tu penses que créer des sites, des chatbots ou des automatisations nécessite des années d'études en informatique — <strong>oublie tout</strong>. Le game a changé.</p><p>En 2026, on ne code plus comme avant. On <strong>vibe code</strong>. Tu décris ce que tu veux en français, et l'IA le construit pour toi.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Vibe coding :</strong> Tu parles à l'IA comme à un développeur senior. Tu lui dis ce que tu veux, elle code. Tu vérifies, tu ajustes, tu livres." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Claude Code : ton arme secrète" },
      { id: "2-6", type: "text", html: "<p>Dans cette formation, on utilise principalement <strong>Claude Code</strong>. Pourquoi pas ChatGPT ? Parce que Claude Code est spécialement conçu pour :</p><ul><li><strong>Générer du code de qualité</strong> — pas du code bricolé, du vrai code pro</li><li><strong>Comprendre des projets entiers</strong> — il voit tous tes fichiers, pas juste un bout de code</li><li><strong>Exécuter des commandes</strong> — il peut lancer, tester et déployer directement depuis ton terminal</li><li><strong>Travailler sur de gros projets</strong> — 200K tokens de contexte, il oublie rien</li></ul>" },
      { id: "2-7", type: "text", html: "<p>Concrètement, voilà ce que ça donne :</p><p><em>Toi : \"Crée-moi un site vitrine pour un restaurant avec une page d'accueil, un menu, et un formulaire de réservation\"</em></p><p><em>Claude Code : *génère l'intégralité du site en 2 minutes*</em></p><p>C'est pas de la magie. C'est un outil que tu apprends à maîtriser. Et une fois que tu le maîtrises, tu peux créer en quelques heures ce qui prenait des semaines avant.</p>" },
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Installe Claude Code maintenant" },
      { id: "2-9b", type: "text", html: "<p>On ne va pas attendre 3 modules pour installer ton outil principal. On le fait <strong>maintenant</strong>. C'est 5 minutes.</p>" },
      { id: "2-9c", type: "steps", steps: [
        { title: "1. Installe Node.js", description: "Va sur nodejs.org et télécharge la version LTS. Installe-la en suivant les instructions. Vérifie dans ton terminal avec : node --version" },
        { title: "2. Installe Claude Code", description: "Dans ton terminal, tape : npm install -g @anthropic-ai/claude-code — ça installe Claude Code sur ton ordinateur." },
        { title: "3. Configure ta clé API", description: "Va sur console.anthropic.com, crée un compte, et génère une clé API. Claude Code te la demandera au premier lancement. Le crédit de départ (5$) suffit largement pour commencer." },
        { title: "4. Teste-le", description: "Crée un dossier : mkdir mon-premier-projet && cd mon-premier-projet. Puis tape : claude. C'est tout. Tu es prêt à vibe coder." }
      ]},
      { id: "2-9d", type: "callout", variant: "info", html: "<strong>Pas de panique :</strong> Si tu galères sur une étape, c'est normal. Demande à Claude sur claude.ai de t'aider à résoudre ton problème d'installation — c'est ironiquement la meilleure façon d'apprendre." },
      { id: "2-10a", type: "separator", style: "dots" },
      { id: "2-10b", type: "heading", level: 2, text: "Ce que tu pourras construire" },
      { id: "2-10", type: "steps", steps: [
        { title: "Des sites web professionnels", description: "Sites vitrines, landing pages, e-commerce — avec des fonctionnalités IA intégrées (chatbot, recommandations, génération de contenu)." },
        { title: "Des chatbots intelligents", description: "Connectés aux données de ton client. Ils répondent aux questions, prennent des RDV, qualifient des leads — 24h/24." },
        { title: "Des automatisations complètes", description: "Emails automatiques, CRM connecté, facturation, reporting — tout ce qui fait perdre du temps à tes clients." },
        { title: "Des agents vocaux IA", description: "Des assistants téléphoniques qui répondent aux appels, prennent des messages, et transfèrent les urgences." }
      ]},
      { id: "2-11", type: "callout", variant: "info", html: "<strong>Tout ça sans écrire une seule ligne de code toi-même.</strong> L'IA code pour toi. Ton job c'est de savoir quoi lui demander et comment livrer le résultat à ton client." }
    ]),
    exercise: "<h3>Exercice : Installe Claude Code et fais ton premier test</h3><ol><li>Installe Node.js depuis <a href='https://nodejs.org' target='_blank'>nodejs.org</a> (version LTS). Vérifie avec : <code>node --version</code></li><li>Installe Claude Code : <code>npm install -g @anthropic-ai/claude-code</code></li><li>Crée un dossier de test : <code>mkdir test-ia && cd test-ia</code></li><li>Lance Claude Code : <code>claude</code></li><li>Demande-lui : <em>\"Crée une page HTML avec un titre 'Mon premier projet IA', un design moderne avec fond sombre, et un paragraphe qui explique ce que je fais.\"</em></li><li>Ouvre le fichier dans ton navigateur. <strong>Tu viens de vibe coder.</strong></li></ol>",
    quiz: [
      { type: "mcq", question: "C'est quoi le vibe coding ?", options: JSON.stringify(["Coder en écoutant de la musique", "Décrire ce qu'on veut à l'IA et elle code pour toi", "Copier-coller du code depuis internet", "Un nouveau langage de programmation"]), correctAnswer: "Décrire ce qu'on veut à l'IA et elle code pour toi", explanation: "Le vibe coding c'est décrire en langage naturel ce que tu veux, et l'IA génère le code. Tu guides, elle construit." },
      { type: "true_false", question: "Claude Code peut comprendre et travailler sur un projet entier, pas juste un bout de code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Avec 200K tokens de contexte, Claude Code voit tous les fichiers de ton projet et comprend l'architecture complète." },
      { type: "mcq", question: "Quel est TON rôle dans le vibe coding ?", options: JSON.stringify(["Écrire chaque ligne de code", "Savoir quoi demander à l'IA et livrer le résultat au client", "Juste appuyer sur un bouton", "Rien, l'IA fait tout"]), correctAnswer: "Savoir quoi demander à l'IA et livrer le résultat au client", explanation: "Ton rôle c'est de comprendre le besoin du client, donner les bonnes instructions à l'IA, et livrer un produit pro." }
    ],
  },

  // ─── LEÇON 3 — TON PREMIER PROJET ───
  {
    order: 4,
    module: 1,
    title: "Ton premier projet en 10 minutes",
    slug: "v2-premier-projet-10-minutes",
    duration: "15 min",
    description: "Tu ouvres Claude, tu suis les étapes, et tu crées un vrai prototype. Ton moment \"putain ça marche\".",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Assez parlé — on passe à l'action" },
      { id: "3-2", type: "text", html: "<p>Tu as compris le marché, tu as compris les outils. Maintenant tu vas <strong>faire</strong>. En 10 minutes, tu auras créé un prototype de chatbot que tu pourrais montrer à un vrai client.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Pré-requis :</strong> Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> dans un autre onglet. Un compte gratuit suffit." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Le scénario : un restaurateur te contacte" },
      { id: "3-6", type: "text", html: "<p>Imagine : un restaurateur en a marre de répondre aux mêmes questions par téléphone — horaires, menu, réservations. Il veut un chatbot sur son site. Tu vas lui montrer ce que l'IA peut faire en <strong>5 minutes</strong>.</p>" },
      { id: "3-7", type: "heading", level: 2, text: "Étape 1 : Copie ce prompt dans Claude" },
      { id: "3-8", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Tu es l'assistant virtuel du restaurant Le Petit Bistrot à Lyon. Voici les infos :<br/>- Ouvert du mardi au samedi, 12h-14h et 19h-22h<br/>- Menu du jour à 16€ (entrée + plat), carte complète de 25 à 45€<br/>- Terrasse disponible en été, 40 couverts intérieur<br/>- Réservation par téléphone au 04 78 XX XX XX ou en ligne<br/>- Spécialités : cuisine lyonnaise moderne, produits frais et locaux<br/>- Allergènes : demander au serveur, options végétariennes disponibles<br/><br/>Réponds aux questions des clients de façon chaleureuse et professionnelle. Sois concis.\"" },
      { id: "3-9", type: "heading", level: 2, text: "Étape 2 : Teste-le comme un client" },
      { id: "3-10", type: "text", html: "<p>Pose-lui des questions :</p><ul><li>\"Vous êtes ouvert le lundi ?\"</li><li>\"C'est combien le menu ?\"</li><li>\"J'ai une allergie au gluten, c'est possible ?\"</li><li>\"Je voudrais réserver pour 6 personnes samedi soir\"</li></ul><p><strong>En 2 minutes, tu viens de créer un prototype de chatbot.</strong></p>" },
      { id: "3-11", type: "separator", style: "line" },
      { id: "3-12", type: "heading", level: 2, text: "Ce que tu viens de faire" },
      { id: "3-13", type: "text", html: "<p>Tu as simulé un chatbot client en quelques minutes. Imagine maintenant ce chatbot :</p><ul><li><strong>Intégré sur le site</strong> du restaurant</li><li>Qui répond <strong>24h/24</strong> aux clients</li><li>Qui prend <strong>des réservations automatiquement</strong></li><li>Connecté au <strong>système de réservation</strong> du resto</li></ul><p>Ça, c'est ce que tu apprendras à construire et déployer dans les modules suivants. Ce que tu as fait là, c'est la surface — le vrai pouvoir, c'est quand tu sais <strong>livrer ça à un client pour 800 à 3 000€</strong>.</p>" },
      { id: "3-14", type: "callout", variant: "info", html: "<strong>Tu viens de créer ton premier prototype. Garde ce réflexe : chaque fois que tu vois un business, demande-toi \"qu'est-ce que l'IA pourrait automatiser ici ?\".</strong>" }
    ]),
    exercise: "<h3>Exercice : Crée ton propre scénario</h3><p>Reprends le même principe pour un business différent :</p><ul><li>Un coach sportif qui veut répondre aux questions sur ses programmes</li><li>Un agent immobilier qui veut qualifier ses prospects</li><li>Un e-commerce qui veut aider les clients à choisir</li></ul><p>Écris le prompt toi-même en t'inspirant du modèle. Teste-le dans Claude. C'est addictif.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'on vient de créer avec Claude ?", options: JSON.stringify(["Un site web complet", "Un prototype de chatbot client", "Une base de données", "Une application mobile"]), correctAnswer: "Un prototype de chatbot client", explanation: "On a créé un prototype de chatbot qui répond aux questions des clients — en quelques minutes." },
      { type: "true_false", question: "Ce prototype suffit pour impressionner un client potentiel lors d'une démo.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un bon prompt permet de créer une démo convaincante en quelques minutes. C'est ce qui convainc un client de travailler avec toi." },
      { type: "mcq", question: "Combien peut-on facturer un chatbot déployé sur le site d'un client ?", options: JSON.stringify(["50 à 100€", "800 à 3 000€", "50 000€ minimum", "C'est toujours gratuit"]), correctAnswer: "800 à 3 000€", explanation: "Un chatbot IA déployé et connecté aux données du client se facture entre 800 et 3 000€." }
    ],
  },
];
