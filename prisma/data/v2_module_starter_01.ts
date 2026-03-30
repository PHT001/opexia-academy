// ═══════════════════════════════════════════════════
// MODULE STARTER 1 — Le game IA en 2026
// 3 leçons — Funnel : montrer le potentiel
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_STARTER_01_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 23,
    title: "Pourquoi les agences IA explosent en 2026",
    slug: "starter-pourquoi-agences-ia-explosent",
    duration: "10 min",
    description: "Les chiffres du marché, les opportunités concrètes, et pourquoi c'est maintenant qu'il faut se lancer.",
    content: blocks([
      { id: "s1-1", type: "heading", level: 2, text: "3 personnes qui ont lancé leur agence IA cette année" },
      { id: "s1-2", type: "text", html: "<p>Avant de parler de chiffres, je vais te raconter 3 histoires. Des gens normaux, sans background technique, qui génèrent aujourd'hui des revenus avec l'IA.</p>" },
      { id: "s1-3", type: "separator", style: "dots" },
      { id: "s1-4", type: "heading", level: 3, text: "Thomas, 24 ans — ancien serveur" },
      { id: "s1-5", type: "text", html: "<p>Thomas bossait en restauration. Il a appris à créer des chatbots IA en 3 semaines. Son premier client : le restaurant où il travaillait. Il a facturé <strong>800\u20AC</strong> pour un chatbot de réservation. Aujourd'hui, il a 6 clients récurrents et facture <strong>3 500\u20AC/mois</strong> en automatisations.</p><p>Son secret : il connaissait les problèmes de ses clients parce qu'il venait du même milieu.</p>" },
      { id: "s1-6", type: "heading", level: 3, text: "Sarah, 28 ans — freelance marketing" },
      { id: "s1-7", type: "text", html: "<p>Sarah faisait du community management à 1 500\u20AC/mois. Elle a ajouté \"automatisation IA\" à ses services. Résultat : elle facture maintenant ses clients <strong>3 000 à 5 000\u20AC</strong> par projet pour des workflows d'emailing automatisés + chatbot de qualification de leads.</p><p>Elle n'a pas appris à coder. Elle utilise des outils no-code + l'IA pour tout générer.</p>" },
      { id: "s1-8", type: "heading", level: 3, text: "Karim, 32 ans — reconversion totale" },
      { id: "s1-9", type: "text", html: "<p>Karim était dans la logistique. Zéro compétence tech. Il a suivi une formation IA, et 2 mois plus tard il a signé son premier client : un agent immobilier qui voulait un site + un générateur de descriptions automatiques. Facture : <strong>3 000\u20AC</strong>.</p><p>Aujourd'hui il fait 3-4 projets par mois. Il a quitté son ancien job.</p>" },
      { id: "s1-10", type: "callout", variant: "tip", html: "<strong>Le point commun ?</strong> Aucun d'entre eux n'était développeur. Ils ont juste appris à utiliser les bons outils au bon moment." },
      { id: "s1-11", type: "separator", style: "line" },
      { id: "s1-12", type: "heading", level: 2, text: "Pourquoi ça marche maintenant" },
      { id: "s1-13", type: "text", html: "<p>Deux raisons simples :</p><p><strong>1. La demande explose.</strong> Moins de 20% des PME utilisent l'IA concrètement. Les 80% restants savent qu'ils doivent s'y mettre, mais ils ne savent pas par où commencer. Ils cherchent des gens accessibles qui peuvent les aider.</p><p><strong>2. Les outils sont prêts.</strong> En 2024-2025, les outils IA sont devenus assez puissants pour créer des solutions pro sans être développeur. Claude, ChatGPT, n8n, Cursor... tu peux livrer un projet client en quelques jours, pas en quelques mois.</p>" },
      { id: "s1-14", type: "comparison", headers: ["Ce que les clients achètent", "Prix moyen"], rows: [
        { cells: ["Chatbot IA (FAQ, prise de RDV)", "500 à 3 000\u20AC"] },
        { cells: ["Site web propulsé par l'IA", "1 000 à 5 000\u20AC"] },
        { cells: ["Automatisations business", "500 à 2 000\u20AC"] },
        { cells: ["Agent vocal IA", "1 500 à 5 000\u20AC"] }
      ]},
      { id: "s1-15", type: "callout", variant: "info", html: "<strong>La question c'est pas \"est-ce que ça marche ?\". C'est \"est-ce que tu vas te lancer avant que le marché se sature ?\"</strong>" }
    ]),
    exercise: "<h3>Exercice</h3><p>Pense à 3 entreprises ou personnes dans ton entourage qui galèrent avec des tâches répétitives, qui répondent aux mêmes questions toute la journée, ou qui ont un site web basique. Note leurs noms — ce sont tes futurs premiers clients.</p>",
    quiz: [
      { type: "mcq", question: "Quel pourcentage des PME utilise concrètement l'IA en 2026 ?", options: JSON.stringify(["Plus de 80%", "Environ 50%", "Moins de 20%", "Moins de 5%"]), correctAnswer: "Moins de 20%", explanation: "Moins de 20% des PME utilisent l'IA concrètement. C'est une opportunité massive pour les prestataires IA." },
      { type: "true_false", question: "Le marché des freelances IA en France a triplé en 2 ans.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La demande de freelances IA a été multipliée par 3 en 2 ans sur les plateformes comme Malt et Upwork." },
      { type: "mcq", question: "Pourquoi c'est le bon moment pour se lancer ?", options: JSON.stringify(["Les outils sont gratuits", "La demande explose mais l'offre ne suit pas encore", "Les grandes entreprises recrutent", "L'IA va disparaître bientôt"]), correctAnswer: "La demande explose mais l'offre ne suit pas encore", explanation: "On est dans une fenêtre d'opportunité : les outils sont puissants, la demande est forte, mais peu de gens savent les utiliser pour les PME." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 23,
    title: "Ce que font ceux qui gagnent avec l'IA",
    slug: "starter-ce-que-font-ceux-qui-gagnent",
    duration: "12 min",
    description: "Cas concrets de services IA vendus, à quels prix, et pour quels clients. Tu vas voir que c'est accessible.",
    content: blocks([
      { id: "s2-1", type: "heading", level: 2, text: "3 services IA qui se vendent comme des petits pains" },
      { id: "s2-2", type: "text", html: "<p>Pas besoin de réinventer la roue. Il y a 3 types de services que les entreprises achètent en boucle en 2026. Chacun est réalisable avec les bons outils — et c'est exactement ce qu'on enseigne dans la formation complète.</p>" },
      { id: "s2-3", type: "steps", steps: [
        { title: "Chatbots IA personnalisés", description: "Un chatbot connecté aux données du client (site web, FAQ, catalogue). Le client répond à ses prospects 24/7 sans lever le petit doigt. Prix : 500 à 3000\u20AC par chatbot." },
        { title: "Sites et apps propulsés par l'IA", description: "Des sites modernes avec des fonctionnalités IA intégrées (recommandations, génération de contenu, analyse). Prix : 1000 à 5000\u20AC par projet." },
        { title: "Automatisations business", description: "Connecter les outils du client pour automatiser les tâches répétitives : emails, CRM, facturation, reporting. Prix : 500 à 2000\u20AC par workflow." }
      ]},
      { id: "s2-4", type: "separator", style: "dots" },
      { id: "s2-5", type: "heading", level: 2, text: "Des exemples concrets" },
      { id: "s2-6", type: "comparison", headers: ["Client", "Service vendu", "Prix"], rows: [
        { cells: ["Cabinet comptable", "Chatbot FAQ + prise de RDV auto", "1 500\u20AC"] },
        { cells: ["Coach sportif", "Site avec programme IA personnalisé", "2 000\u20AC"] },
        { cells: ["E-commerce mode", "Automatisation emails + recommandations", "1 200\u20AC"] },
        { cells: ["Restaurant", "Chatbot commande + réservation", "800\u20AC"] },
        { cells: ["Agent immobilier", "Générateur de descriptions IA + site", "3 000\u20AC"] }
      ]},
      { id: "s2-7", type: "callout", variant: "tip", html: "<strong>Le point commun ?</strong> Aucun de ces projets ne nécessite des mois de développement. Avec les bons outils et la bonne méthode, chacun se livre en quelques jours." },
      { id: "s2-8", type: "separator", style: "line" },
      { id: "s2-9", type: "heading", level: 2, text: "Combien tu peux gagner ?" },
      { id: "s2-10", type: "text", html: "<p>Un freelance IA qui livre <strong>2 à 3 projets par mois</strong> à 1000-2000\u20AC chacun, c'est <strong>2000 à 6000\u20AC/mois</strong>. Et ça, c'est le début. En montant en compétences et en se spécialisant, certains dépassent les 10K/mois en moins d'un an.</p><p>La question c'est pas \"est-ce que c'est possible ?\" — c'est \"est-ce que tu vas te donner les moyens ?\"</p>" }
    ]),
    exercise: "<h3>Exercice</h3><p>Parmi les 3 types de services (chatbots, sites/apps, automatisations), lequel t'attire le plus instinctivement ? Pas besoin de réfléchir longtemps — note ta première réaction.</p>",
    quiz: [
      { type: "mcq", question: "Combien coûte en moyenne un chatbot IA pour une PME ?", options: JSON.stringify(["50 à 100\u20AC", "500 à 3000\u20AC", "10 000 à 50 000\u20AC", "C'est toujours gratuit"]), correctAnswer: "500 à 3000\u20AC", explanation: "Un chatbot IA personnalisé pour PME se vend entre 500 et 3000\u20AC en fonction de la complexité." },
      { type: "true_false", question: "Ces projets nécessitent des mois de développement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Avec les bons outils et la bonne méthode, chaque projet se livre en quelques jours, pas en mois." },
      { type: "mcq", question: "Combien peut gagner un freelance IA avec 2-3 projets par mois ?", options: JSON.stringify(["200 à 500\u20AC", "2000 à 6000\u20AC", "20 000 à 50 000\u20AC", "Rien au début"]), correctAnswer: "2000 à 6000\u20AC", explanation: "2 à 3 projets à 1000-2000\u20AC chacun = 2000 à 6000\u20AC par mois, et ça augmente avec l'expérience." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 23,
    title: "Utilise Claude pour résoudre un vrai problème business",
    slug: "starter-utilise-claude-probleme-business",
    duration: "15 min",
    description: "Ton premier hands-on avec Claude : tu vas créer une vraie solution business en quelques minutes. Effet waouh garanti.",
    content: blocks([
      { id: "s3-1", type: "heading", level: 2, text: "Ton premier moment \"ah putain\" avec l'IA" },
      { id: "s3-2", type: "text", html: "<p>Assez parlé. On va passer à l'action. Tu vas ouvrir Claude et résoudre un vrai problème business en quelques minutes. L'objectif : que tu <strong>ressentes</strong> la puissance du truc.</p>" },
      { id: "s3-3", type: "callout", variant: "info", html: "<strong>Pré-requis :</strong> Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> dans un autre onglet. Un compte gratuit suffit." },
      { id: "s3-4", type: "separator", style: "dots" },
      { id: "s3-5", type: "heading", level: 2, text: "Le scénario : un client restaurateur" },
      { id: "s3-6", type: "text", html: "<p>Imagine : un restaurateur te contacte. Il en a marre de répondre aux mêmes questions par téléphone toute la journée — horaires, menu, réservations. Il veut un chatbot sur son site.</p><p>Avant même de construire le chatbot (ça c'est dans la formation complète), tu peux lui <strong>montrer ce que l'IA peut faire</strong> en 5 minutes.</p>" },
      { id: "s3-7", type: "heading", level: 2, text: "Étape 1 : Le prompt magique" },
      { id: "s3-8", type: "text", html: "<p>Copie-colle ce prompt dans Claude :</p>" },
      { id: "s3-9", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Tu es l'assistant virtuel du restaurant Le Petit Bistrot à Lyon. Voici les infos :<br/>- Ouvert du mardi au samedi, 12h-14h et 19h-22h<br/>- Menu du jour à 16\u20AC (entrée + plat), carte complète de 25 à 45\u20AC<br/>- Terrasse disponible en été, 40 couverts intérieur<br/>- Réservation par téléphone au 04 78 XX XX XX ou en ligne<br/>- Spécialités : cuisine lyonnaise moderne, produits frais et locaux<br/>- Allergènes : demander au serveur, options végétariennes disponibles<br/><br/>Réponds aux questions des clients de façon chaleureuse et professionnelle. Sois concis.\"" },
      { id: "s3-10", type: "heading", level: 2, text: "Étape 2 : Teste-le" },
      { id: "s3-11", type: "text", html: "<p>Maintenant pose-lui des questions comme si tu étais un client :</p><ul><li>\"Vous êtes ouvert le lundi ?\"</li><li>\"C'est combien le menu ?\"</li><li>\"J'ai une allergie au gluten, c'est possible ?\"</li><li>\"Je voudrais réserver pour 6 personnes samedi soir\"</li></ul><p>Regarde les réponses. <strong>En 2 minutes, tu viens de créer un prototype de chatbot.</strong> C'est exactement ce type de démo qui convainc un client de travailler avec toi.</p>" },
      { id: "s3-12", type: "separator", style: "line" },
      { id: "s3-13", type: "heading", level: 2, text: "Ce que tu viens de faire" },
      { id: "s3-14", type: "text", html: "<p>Tu viens de simuler un chatbot client en quelques minutes. Imagine maintenant :</p><ul><li>Ce chatbot <strong>intégré directement sur le site</strong> du restaurant</li><li>Qui répond <strong>24h/24</strong> aux clients</li><li>Qui peut <strong>prendre des réservations automatiquement</strong></li><li>Connecté au <strong>système de réservation</strong> du resto</li></ul><p>Ça, c'est ce que tu apprendras à construire dans la formation complète. Ce que tu as fait là, c'est la surface. Le vrai pouvoir, c'est quand tu sais <strong>déployer, connecter et livrer</strong> ça à un client.</p>" },
      { id: "s3-15", type: "callout", variant: "info", html: "<strong>Tu viens de toucher du doigt le potentiel.</strong> Maintenant imagine maîtriser ça complètement — construire, déployer, vendre. C'est exactement ce qu'on fait dans le module suivant et dans la formation complète." }
    ]),
    exercise: "<h3>Exercice : Crée ton propre scénario</h3><p>Reprends le même principe mais pour un business différent. Choisis un des exemples :</p><ul><li>Un coach sportif qui veut répondre aux questions sur ses programmes</li><li>Un agent immobilier qui veut qualifier ses prospects</li><li>Un e-commerce qui veut aider les clients à choisir un produit</li></ul><p>Écris le prompt toi-même en t'inspirant du modèle du restaurant. Teste-le dans Claude. Tu verras — c'est addictif.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'on vient de créer avec Claude ?", options: JSON.stringify(["Un site web complet", "Un prototype de chatbot client", "Une base de données", "Une application mobile"]), correctAnswer: "Un prototype de chatbot client", explanation: "On a créé un prototype de chatbot qui répond aux questions des clients — en quelques minutes seulement." },
      { type: "true_false", question: "Un prompt bien écrit suffit pour impressionner un client potentiel lors d'une démo.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un bon prompt permet de créer une démo convaincante en quelques minutes. C'est souvent ce qui convainc un client de travailler avec toi." },
      { type: "mcq", question: "Que manque-t-il pour transformer ce prototype en vrai produit livrable ?", options: JSON.stringify(["Rien, c'est déjà prêt", "Le déployer sur un site, le connecter aux données, et le livrer au client", "Acheter un serveur dédié", "Embaucher une équipe de développeurs"]), correctAnswer: "Le déployer sur un site, le connecter aux données, et le livrer au client", explanation: "Le prototype est impressionnant mais pour en faire un vrai produit, il faut savoir le déployer, le connecter et le livrer — c'est ce qu'on apprend dans la formation complète." }
    ],
  },
];
