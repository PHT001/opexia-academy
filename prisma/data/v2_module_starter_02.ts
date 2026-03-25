// ═══════════════════════════════════════════════════
// MODULE STARTER 2 — Ton projet, ta vision
// 3 leçons — Funnel : le closer
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_STARTER_02_LESSONS = [
  // ─── LEÇON 4 ───
  {
    order: 1,
    module: 24,
    title: "Quel service IA tu vas vendre — le diagnostic",
    slug: "starter-quel-service-ia-vendre",
    duration: "12 min",
    description: "Identifie le service IA qui correspond à tes forces. Un exercice concret pour te projeter dans ton activité.",
    content: blocks([
      { id: "s4-1", type: "heading", level: 2, text: "Trouve TON service IA" },
      { id: "s4-2", type: "text", html: "<p>Il y a pas de mauvais choix. Mais il y a un choix qui correspond mieux à <strong>tes forces</strong>. L'objectif de cette leçon : que tu ressortes avec une idée claire de ce que tu vas proposer.</p>" },
      { id: "s4-3", type: "separator", style: "dots" },
      { id: "s4-4", type: "heading", level: 2, text: "Les 3 profils d'agence IA" },
      { id: "s4-5", type: "steps", steps: [
        { title: "Le Créateur", description: "Tu aimes construire des choses. Tu veux apprendre à coder avec l'IA, créer des sites, des apps, des chatbots. Tes clients te paient pour livrer un produit fini. Revenus : 1000-5000\u20AC par projet." },
        { title: "L'Automatiseur", description: "Tu es organisé, tu aimes les process. Tu connectes les outils de tes clients pour automatiser leurs tâches répétitives. Tes clients te paient pour leur faire gagner du temps. Revenus : 500-2000\u20AC par workflow + maintenance récurrente." },
        { title: "Le Stratège", description: "Tu es bon en relation client, tu comprends les problèmes business. Tu audites les entreprises et tu leur proposes des solutions IA sur mesure. Tu peux sous-traiter la partie technique. Revenus : 800-3000\u20AC par audit/accompagnement." }
      ]},
      { id: "s4-6", type: "callout", variant: "tip", html: "<strong>Le secret :</strong> Tu n'es pas obligé de choisir un seul profil. Mais au début, concentre-toi sur un seul pour aller vite. Tu diversifieras ensuite." },
      { id: "s4-7", type: "separator", style: "line" },
      { id: "s4-8", type: "heading", level: 2, text: "Le test rapide" },
      { id: "s4-9", type: "text", html: "<p>Réponds honnêtement :</p><ul><li><strong>Tu préfères créer un truc de A à Z</strong> ou <strong>optimiser ce qui existe déjà</strong> ?</li><li><strong>Tu es à l'aise avec la technique</strong> ou <strong>tu préfères la relation client</strong> ?</li><li><strong>Tu veux des projets ponctuels</strong> ou <strong>des revenus récurrents</strong> ?</li></ul><p>Si tu as répondu \"créer + technique + ponctuel\" → <strong>Créateur</strong><br/>Si tu as répondu \"optimiser + technique + récurrent\" → <strong>Automatiseur</strong><br/>Si tu as répondu \"optimiser + relation client\" → <strong>Stratège</strong></p>" },
      { id: "s4-10", type: "callout", variant: "info", html: "<strong>Peu importe ton profil</strong>, la formation Academy t'apprend les compétences de chacun. Mais savoir où tu te situes t'aide à te lancer plus vite." }
    ]),
    exercise: "<h3>Exercice : Ton profil</h3><p>Note sur un papier ou dans tes notes :</p><ol><li>Mon profil principal : Créateur / Automatiseur / Stratège</li><li>Le service que j'aimerais proposer en premier</li><li>Le type de client que je vise (secteur, taille)</li></ol><p>Pas besoin que ce soit parfait. C'est un point de départ.</p>",
    quiz: [
      { type: "mcq", question: "Quel profil correspond à quelqu'un qui aime construire des sites et des chatbots ?", options: JSON.stringify(["Le Stratège", "L'Automatiseur", "Le Créateur", "Le Manager"]), correctAnswer: "Le Créateur", explanation: "Le Créateur aime construire des produits finis : sites, apps, chatbots. Il est payé pour livrer un résultat concret." },
      { type: "true_false", question: "Il faut choisir un seul profil et ne jamais en changer.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu peux diversifier avec le temps. Mais au début, se concentrer sur un profil permet d'aller plus vite." },
      { type: "mcq", question: "Quel profil génère le plus facilement des revenus récurrents ?", options: JSON.stringify(["Le Créateur", "L'Automatiseur", "Le Stratège", "Aucun"]), correctAnswer: "L'Automatiseur", explanation: "L'Automatiseur crée des workflows qui nécessitent de la maintenance — ce qui génère des revenus récurrents mensuels." }
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 2,
    module: 24,
    title: "Ton premier client est plus proche que tu crois",
    slug: "starter-premier-client-proche",
    duration: "10 min",
    description: "Où trouver tes premiers clients sans prospecter dans le dur. Ils sont déjà autour de toi.",
    content: blocks([
      { id: "s5-1", type: "heading", level: 2, text: "Tes clients sont déjà dans ton réseau" },
      { id: "s5-2", type: "text", html: "<p>Le plus gros frein quand on se lance : \"Où je trouve des clients ?\". La réponse va te surprendre par sa simplicité : <strong>ils sont déjà autour de toi</strong>.</p>" },
      { id: "s5-3", type: "separator", style: "dots" },
      { id: "s5-4", type: "heading", level: 2, text: "Les 5 endroits où sont tes premiers clients" },
      { id: "s5-5", type: "steps", steps: [
        { title: "Ton entourage direct", description: "Famille, amis, connaissances. Quelqu'un a forcément un business, un commerce, une activité qui pourrait bénéficier de l'IA. Demande juste autour de toi." },
        { title: "LinkedIn", description: "Tu connais des entrepreneurs, des freelances, des gérants de PME. Un simple post du type \"Je me forme à l'IA et je cherche un premier projet à tarif préférentiel\" peut suffire." },
        { title: "Les commerces de ton quartier", description: "Le restaurant, le coiffeur, l'agence immo, le coach sportif. Ils ont tous des problèmes que l'IA peut résoudre. Va les voir directement." },
        { title: "Les groupes et communautés", description: "Groupes Facebook, Discord, forums d'entrepreneurs. Des gens y cherchent des solutions IA tous les jours." },
        { title: "Les plateformes freelance", description: "Malt, Fiverr, Upwork. Crée un profil orienté IA et commence à répondre à des missions." }
      ]},
      { id: "s5-6", type: "callout", variant: "tip", html: "<strong>Astuce de pro :</strong> Ton premier client n'a pas besoin d'être un gros contrat. Un petit projet à 300-500\u20AC pour te faire la main et avoir un premier témoignage, c'est de l'or." },
      { id: "s5-7", type: "separator", style: "line" },
      { id: "s5-8", type: "heading", level: 2, text: "Le script qui marche" },
      { id: "s5-9", type: "text", html: "<p>Voilà ce que tu peux dire (en message, en personne, ou sur LinkedIn) :</p><p><em>\"Salut [prénom], je me spécialise dans les solutions IA pour les [type de business]. Je cherche 2-3 projets pilotes à tarif réduit pour construire mon portfolio. Est-ce que [problème spécifique] c'est un truc qui te parle ? Je peux te montrer en 15 min ce que ça donnerait.\"</em></p><p>C'est simple, direct, et ça marche parce que tu proposes de la <strong>valeur</strong> avant de demander quoi que ce soit.</p>" },
      { id: "s5-10", type: "callout", variant: "info", html: "<strong>Rappelle-toi :</strong> Dans la leçon précédente, tu as créé un prototype de chatbot en 5 minutes avec Claude. C'est exactement ce type de démo que tu peux montrer à un prospect pour le convaincre." }
    ]),
    exercise: "<h3>Exercice : Ta liste de prospects</h3><p>Ouvre tes contacts, LinkedIn, et pense à ton quartier. Note 5 personnes ou businesses qui pourraient avoir besoin d'une solution IA :</p><ol><li>Nom / Business</li><li>Problème potentiel que l'IA peut résoudre</li><li>Comment tu pourrais les contacter</li></ol><p>Tu n'as pas besoin de les contacter maintenant. Mais sache que ta liste existe déjà.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le meilleur endroit pour trouver ton premier client ?", options: JSON.stringify(["Les grandes entreprises du CAC40", "Ton réseau direct et les commerces locaux", "Les offres d'emploi", "Les conférences internationales"]), correctAnswer: "Ton réseau direct et les commerces locaux", explanation: "Tes premiers clients sont dans ton entourage et autour de toi. Pas besoin d'aller chercher loin." },
      { type: "true_false", question: "Ton premier projet doit être un gros contrat à 5000\u20AC pour être rentable.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un petit projet à 300-500\u20AC pour te faire la main et avoir un témoignage, c'est bien plus valuable qu'attendre le gros contrat." },
      { type: "mcq", question: "Que proposer à un prospect pour le convaincre ?", options: JSON.stringify(["Un devis de 50 pages", "Une démo en 15 minutes de ce que l'IA peut faire pour lui", "Un cours sur l'histoire de l'IA", "Rien, il doit venir à toi"]), correctAnswer: "Une démo en 15 minutes de ce que l'IA peut faire pour lui", explanation: "Montrer une démo concrète en 15 minutes, c'est la méthode la plus efficace pour convaincre un prospect." }
    ],
  },

  // ─── LEÇON 6 — LE CLOSER ───
  {
    order: 3,
    module: 24,
    title: "Ce qui te sépare de ton premier client payant",
    slug: "starter-ce-qui-te-separe-premier-client",
    duration: "10 min",
    description: "Récap de tout ce que tu as appris, et tout ce qu'il te reste à maîtriser. Le moment de vérité.",
    content: blocks([
      { id: "s6-1", type: "heading", level: 2, text: "Faisons le point" },
      { id: "s6-2", type: "text", html: "<p>En quelques leçons, tu as :</p><ul><li>\u2705 Compris pourquoi le marché de l'IA est une opportunité massive</li><li>\u2705 Vu des exemples concrets de services vendus entre 500 et 5000\u20AC</li><li>\u2705 Créé ton premier prototype avec Claude</li><li>\u2705 Identifié ton profil (Créateur, Automatiseur ou Stratège)</li><li>\u2705 Trouvé des prospects potentiels dans ton réseau</li></ul><p><strong>Tu as la vision. Tu as goûté au potentiel.</strong></p>" },
      { id: "s6-3", type: "separator", style: "dots" },
      { id: "s6-4", type: "heading", level: 2, text: "Maintenant, soyons honnêtes" },
      { id: "s6-5", type: "text", html: "<p>Tu sais que l'opportunité existe. Tu as même vu que l'IA est capable de trucs impressionnants. Mais est-ce que tu sais...</p>" },
      { id: "s6-6", type: "checklist", title: "Ce qu'il te manque encore", items: [
        { id: "cl1", text: "Construire un chatbot IA de A à Z et le déployer sur un site" },
        { id: "cl2", text: "Créer un site web professionnel avec l'IA (sans coder toi-même)" },
        { id: "cl3", text: "Mettre en place des automatisations qui tournent toutes seules" },
        { id: "cl4", text: "Créer un agent vocal IA pour tes clients" },
        { id: "cl5", text: "Closer un appel client et signer un devis" },
        { id: "cl6", text: "Livrer un projet pro et fidéliser ton client" },
        { id: "cl7", text: "Scaler de 0 à 5K puis 10K par mois" }
      ]},
      { id: "s6-7", type: "text", html: "<p>Si tu as coché \"non\" à ne serait-ce qu'un de ces points — c'est normal. <strong>C'est exactement ce qu'on t'apprend dans la formation complète.</strong></p>" },
      { id: "s6-8", type: "separator", style: "line" },
      { id: "s6-9", type: "heading", level: 2, text: "Ce que la formation Academy contient" },
      { id: "s6-10", type: "comparison", headers: ["Module", "Ce que tu apprends"], rows: [
        { cells: ["Prompting avancé", "Maîtriser Claude et les IA comme un pro — pas juste les bases"] },
        { cells: ["Claude Code & Cursor", "Coder sans être développeur — créer des vrais produits"] },
        { cells: ["Sites & Apps IA", "Construire et déployer des sites professionnels avec l'IA"] },
        { cells: ["Chatbots IA", "Créer des chatbots connectés aux données de tes clients"] },
        { cells: ["Agents vocaux", "Créer des assistants téléphoniques IA"] },
        { cells: ["Automatisations", "Connecter des outils et automatiser des workflows complets"] },
        { cells: ["Business & Vente", "Trouver des clients, closer, livrer et facturer"] }
      ]},
      { id: "s6-11", type: "text", html: "<p><strong>85 leçons. 22 modules. 7 phases.</strong> Du débutant complet au professionnel capable de vendre et livrer des services IA.</p>" },
      { id: "s6-12", type: "separator", style: "dots" },
      { id: "s6-13", type: "heading", level: 2, text: "La question finale" },
      { id: "s6-14", type: "text", html: "<p>Tu as deux options :</p><p><strong>Option 1 :</strong> Tu t'arrêtes là. Tu sais que l'IA c'est puissant, tu as touché du doigt le potentiel, mais tu restes spectateur. Dans 6 mois, tu regarderas les autres qui ont pris de l'avance.</p><p><strong>Option 2 :</strong> Tu passes à l'action. Tu rejoins Academy, tu apprends à construire, déployer et vendre. Dans 6 mois, tu as tes premiers clients et des revenus concrets.</p><p>Le marché n'attend pas. La fenêtre d'opportunité est ouverte <strong>maintenant</strong>.</p>" },
      { id: "s6-15", type: "callout", variant: "tip", html: "<strong>T'as la vision. Il te manque les armes. Rejoins Academy et commence à construire.</strong>" }
    ]),
    exercise: "",
    quiz: [
      { type: "mcq", question: "Combien de modules contient la formation Academy complète ?", options: JSON.stringify(["5 modules", "10 modules", "22 modules", "50 modules"]), correctAnswer: "22 modules", explanation: "La formation Academy contient 22 modules répartis en 7 phases, avec 85 leçons au total." },
      { type: "true_false", question: "Les modules Starter suffisent pour commencer à vendre des services IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les modules Starter te donnent la vision et les bases, mais pour construire, déployer et vendre des services IA, il te faut la formation complète." },
      { type: "mcq", question: "Quelle est la prochaine étape logique après ces modules ?", options: JSON.stringify(["Attendre que le marché mûrisse", "Rejoindre Academy pour apprendre à construire et livrer", "Chercher un emploi en IA", "Regarder des vidéos YouTube"]), correctAnswer: "Rejoindre Academy pour apprendre à construire et livrer", explanation: "Tu as la vision et tu as vu le potentiel. L'étape suivante c'est d'apprendre les compétences techniques et business avec la formation complète." }
    ],
  },
];
