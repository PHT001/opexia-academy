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
      { id: "s5-10", type: "separator", style: "dots" },
      { id: "s5-11", type: "heading", level: 2, text: "Exercice : Fais écrire ton message par Claude" },
      { id: "s5-12", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie-colle ce prompt en remplaçant les crochets par tes infos :</p>" },
      { id: "s5-13", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Je suis [ton profil : Créateur / Automatiseur / Stratège] et je veux contacter [type de business, ex: un restaurant / un coach sportif / un agent immobilier] pour lui proposer [type de service IA, ex: un chatbot / des automatisations / un site web].<br/><br/>Écris-moi 3 variantes d'un message de prospection :<br/>1. Un message LinkedIn (court, 3-4 lignes)<br/>2. Un message WhatsApp/SMS (ultra concis, 2 lignes)<br/>3. Un email de premier contact (5-6 lignes max)<br/><br/>Le ton doit être professionnel mais humain. Je propose un projet pilote à tarif réduit. Je veux donner envie au prospect de me répondre sans être insistant.\"" },
      { id: "s5-14", type: "text", html: "<p><strong>Teste-le maintenant.</strong> En 30 secondes, tu as 3 messages de prospection personnalisés, prêts à envoyer. C'est ça la puissance de l'IA — elle ne remplace pas ta stratégie, elle t'accélère.</p>" },
      { id: "s5-15", type: "callout", variant: "info", html: "<strong>Tu viens de faire 2 trucs concrets avec Claude :</strong> un prototype de chatbot (leçon précédente) et tes messages de prospection. Imagine ce que tu pourrais faire avec les 22 modules de la formation complète." }
    ]),
    exercise: "<h3>Exercice complet</h3><p><strong>Partie 1 :</strong> Ouvre tes contacts, LinkedIn, et pense à ton quartier. Note 5 personnes ou businesses qui pourraient avoir besoin d'une solution IA.</p><p><strong>Partie 2 :</strong> Choisis le prospect le plus prometteur de ta liste et utilise Claude pour écrire un message de premier contact personnalisé. Copie le message quelque part — tu pourras l'envoyer quand tu te sentiras prêt.</p>",
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
      { id: "s6-1", type: "heading", level: 2, text: "Ton plan d'action personnalisé" },
      { id: "s6-2", type: "text", html: "<p>Tu as fait du chemin en 6 leçons :</p><ul><li>\u2705 Tu connais des gens réels qui vivent de l'IA</li><li>\u2705 Tu sais quels services se vendent et à quels prix</li><li>\u2705 Tu as créé un prototype de chatbot avec Claude</li><li>\u2705 Tu connais ton profil (Créateur, Automatiseur ou Stratège)</li><li>\u2705 Tu as une liste de prospects + tes messages de prospection</li></ul><p>C'est le moment de transformer tout ça en <strong>plan concret</strong>.</p>" },
      { id: "s6-3", type: "separator", style: "dots" },
      { id: "s6-4", type: "heading", level: 2, text: "Exercice final : Crée ton plan de lancement avec Claude" },
      { id: "s6-5", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie ce prompt en remplaçant les crochets :</p>" },
      { id: "s6-6", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Je veux lancer une activité de prestataire IA. Voici ma situation :<br/>- Mon profil : [Créateur / Automatiseur / Stratège]<br/>- Le service que je veux proposer en premier : [ex: chatbots IA pour restaurants / automatisations pour e-commerce / sites web IA pour coachs]<br/>- Mon niveau technique actuel : [débutant complet / j'ai quelques bases / je suis à l'aise avec le digital]<br/>- Mon objectif à 90 jours : [ex: signer mon premier client / générer 2000\u20AC/mois / quitter mon job]<br/><br/>Crée-moi un plan d'action semaine par semaine sur 90 jours. Pour chaque semaine, dis-moi :<br/>1. Ce que je dois apprendre<br/>2. Ce que je dois faire concrètement<br/>3. Un objectif mesurable<br/><br/>Sois réaliste et concret. Pas de blabla motivationnel.\"" },
      { id: "s6-7", type: "text", html: "<p><strong>Fais-le maintenant.</strong> En 1 minute, tu as un plan de lancement personnalisé sur 90 jours. Lis-le. Tu vas voir que certaines semaines mentionnent des compétences que tu n'as pas encore — et c'est exactement là que la suite de la formation entre en jeu.</p>" },
      { id: "s6-8", type: "separator", style: "line" },
      { id: "s6-9", type: "heading", level: 2, text: "Ce que ton plan va te révéler" },
      { id: "s6-10", type: "text", html: "<p>Si tu lis attentivement le plan que Claude t'a généré, tu vas remarquer des étapes comme :</p><ul><li>\"Apprendre à construire un chatbot et le déployer\" — <strong>c'est le Module 8</strong></li><li>\"Créer un site web professionnel\" — <strong>c'est les Modules 6-7</strong></li><li>\"Mettre en place des automatisations\" — <strong>c'est le Module 10</strong></li><li>\"Closer un appel client\" — <strong>c'est le Module 19</strong></li><li>\"Livrer et fidéliser\" — <strong>c'est le Module 20</strong></li></ul><p>Ton plan d'action est clair. Les compétences qu'il te faut aussi. <strong>La formation Academy couvre chacune de ces étapes</strong> — 91 leçons, 22 modules, dans l'ordre exact pour aller de zéro à ton premier client payant.</p>" },
      { id: "s6-11", type: "separator", style: "dots" },
      { id: "s6-12", type: "heading", level: 2, text: "Et maintenant ?" },
      { id: "s6-13", type: "text", html: "<p>Tu as le plan. Tu as les premiers outils. Tu as tes prospects. Ce qui te manque, c'est les <strong>compétences techniques et business</strong> pour exécuter.</p><p>La formation Academy est là pour ça. Pas de théorie inutile — chaque module te donne une compétence que tu peux utiliser la semaine même pour tes clients.</p><p>Le plus dur c'est de commencer. Et tu viens de le faire.</p>" },
      { id: "s6-14", type: "callout", variant: "info", html: "<strong>Tu as ton plan de 90 jours. Garde-le précieusement — c'est ta roadmap personnalisée.</strong> Si tu veux les compétences pour l'exécuter, la suite est dans l'Academy." }
    ]),
    exercise: "<h3>Exercice final</h3><p><strong>1.</strong> Sauvegarde ton plan de 90 jours (copie-le dans tes notes, un doc, ou un email à toi-même).</p><p><strong>2.</strong> Identifie les 3 compétences les plus urgentes dans ton plan — celles dont tu as besoin pour ta première semaine d'action.</p><p><strong>3.</strong> Regarde les modules de la formation Academy et trouve ceux qui correspondent à ces compétences.</p><p>Tu es à une décision de tout changer.</p>",
    quiz: [
      { type: "mcq", question: "Combien de modules contient la formation Academy complète ?", options: JSON.stringify(["5 modules", "10 modules", "22 modules", "50 modules"]), correctAnswer: "22 modules", explanation: "La formation Academy contient 22 modules répartis en 7 phases, avec 85 leçons au total." },
      { type: "true_false", question: "Les modules Starter suffisent pour commencer à vendre des services IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les modules Starter te donnent la vision et les bases, mais pour construire, déployer et vendre des services IA, il te faut la formation complète." },
      { type: "mcq", question: "Quelle est la prochaine étape logique après ces modules ?", options: JSON.stringify(["Attendre que le marché mûrisse", "Rejoindre Academy pour apprendre à construire et livrer", "Chercher un emploi en IA", "Regarder des vidéos YouTube"]), correctAnswer: "Rejoindre Academy pour apprendre à construire et livrer", explanation: "Tu as la vision et tu as vu le potentiel. L'étape suivante c'est d'apprendre les compétences techniques et business avec la formation complète." }
    ],
  },
];
