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
      { id: "s4-20", type: "text", html: "<p>Beaucoup de gens bloquent ici parce qu'ils veulent trouver \"l'idée parfaite\". Spoiler : elle n'existe pas. Ce qui existe, c'est un service qui correspond à <strong>tes compétences actuelles</strong>, à <strong>un marché qui paie</strong>, et à <strong>quelque chose que tu kiffes assez</strong> pour tenir dans la durée. Le reste s'affine en faisant.</p>" },
      { id: "s4-3", type: "separator", style: "dots" },
      { id: "s4-4", type: "heading", level: 2, text: "Les 3 profils d'agence IA" },
      { id: "s4-5", type: "steps", steps: [
        { title: "Le Créateur", description: "Tu aimes construire des choses. Tu veux apprendre à coder avec l'IA, créer des sites, des apps, des chatbots. Tes clients te paient pour livrer un produit fini. Revenus : 1000-5000\u20AC par projet." },
        { title: "L'Automatiseur", description: "Tu es organisé, tu aimes les process. Tu connectes les outils de tes clients pour automatiser leurs tâches répétitives. Tes clients te paient pour leur faire gagner du temps. Revenus : 500-2000\u20AC par workflow + maintenance récurrente." },
        { title: "Le Stratège", description: "Tu es bon en relation client, tu comprends les problèmes business. Tu audites les entreprises et tu leur proposes des solutions IA sur mesure. Tu peux sous-traiter la partie technique. Revenus : 800-3000\u20AC par audit/accompagnement." }
      ]},
      { id: "s4-21", type: "heading", level: 3, text: "Chaque profil en situation réelle" },
      { id: "s4-22", type: "text", html: "<p>Pour que ça devienne concret, voici une journée type pour chaque profil :</p><p><strong>Le Créateur — Lundi matin :</strong> Tu ouvres Cursor, tu commences à coder le site web d'un client coach sportif. Tu intègres un chatbot de recommandation de programmes. Tu fais des tests, tu ajustes le design, tu déploies. Le soir, tu envoies un Loom au client pour montrer le résultat.</p><p><strong>L'Automatiseur — Lundi matin :</strong> Tu ouvres n8n, tu connectes le CRM d'un client à son outil d'emailing. Quand un nouveau lead remplit le formulaire du site, il reçoit automatiquement un email de bienvenue personnalisé, un SMS de confirmation, et le commercial est notifié sur Slack. Tu documentes le workflow et tu passes au client suivant.</p><p><strong>Le Stratège — Lundi matin :</strong> Tu as un appel avec un directeur de PME. Tu analyses ses process actuels, tu identifies 3 endroits où l'IA peut lui faire gagner du temps ou de l'argent. Tu rédiges un plan d'action avec des recommandations concrètes. Tu sous-traites la réalisation technique à un freelance de ton réseau.</p>" },
      { id: "s4-23", type: "callout", variant: "info", html: "<strong>La réalité :</strong> La plupart des gens qui réussissent combinent 2 profils. Un Créateur qui fait aussi un peu de Stratège (il comprend le business du client, pas juste la technique). Un Automatiseur qui fait aussi du Créateur (il construit des dashboards en plus des workflows). Mais au début, choisis le profil <strong>dominant</strong> — celui que tu ferais même gratuitement." },
      { id: "s4-6", type: "callout", variant: "tip", html: "<strong>Le secret :</strong> Tu n'es pas obligé de choisir un seul profil. Mais au début, concentre-toi sur un seul pour aller vite. Tu diversifieras ensuite." },
      { id: "s4-7", type: "separator", style: "line" },
      { id: "s4-8", type: "heading", level: 2, text: "Le test rapide" },
      { id: "s4-9", type: "text", html: "<p>Réponds honnêtement :</p><ul><li><strong>Tu préfères créer un truc de A à Z</strong> ou <strong>optimiser ce qui existe déjà</strong> ?</li><li><strong>Tu es à l'aise avec la technique</strong> ou <strong>tu préfères la relation client</strong> ?</li><li><strong>Tu veux des projets ponctuels</strong> ou <strong>des revenus récurrents</strong> ?</li></ul><p>Si tu as répondu \"créer + technique + ponctuel\" → <strong>Créateur</strong><br/>Si tu as répondu \"optimiser + technique + récurrent\" → <strong>Automatiseur</strong><br/>Si tu as répondu \"optimiser + relation client\" → <strong>Stratège</strong></p>" },
      { id: "s4-24", type: "heading", level: 3, text: "Choisis ta niche (pas ton service)" },
      { id: "s4-25", type: "text", html: "<p>Un piège fréquent : se définir par son service (\"je fais des chatbots\") au lieu de se définir par sa niche (\"j'aide les restaurants à automatiser leur relation client\").</p><p>La niche est plus puissante que le service. Voici pourquoi :</p><ul><li><strong>Tu deviens expert :</strong> Après 5 restaurants, tu connais tous leurs problèmes. Tu livres 3x plus vite et ta qualité est imbattable.</li><li><strong>Le bouche-à-oreille explose :</strong> Les restaurateurs se connaissent. Un client satisfait t'en amène 3 autres.</li><li><strong>Ton marketing est simple :</strong> \"Chatbots IA pour restaurants\" est 10x plus vendeur que \"Solutions IA sur mesure pour entreprises\".</li></ul><p>Exemples de niches rentables en 2026 :</p><ul><li>Agents immobiliers (sites + chatbots de qualification)</li><li>Cabinets comptables (automatisation + chatbot FAQ)</li><li>E-commerce (emails automatisés + recommandations IA)</li><li>Coachs et formateurs (sites + espaces membres IA)</li><li>Professions médicales (chatbot prise de RDV + FAQ patients)</li></ul>" },
      { id: "s4-26", type: "callout", variant: "warning", html: "<strong>Piège à éviter :</strong> \"Je vais cibler toutes les PME\" = tu ne cibles personne. \"Je vais cibler les restaurants lyonnais de 20-50 couverts\" = tu as un message clair, un marché identifiable, et tu peux devenir la référence de cette niche en 3 mois." },
      { id: "s4-27", type: "comparison", headers: ["Approche généraliste", "Approche niche"], rows: [
        { cells: ["\"Je fais de l'IA pour les entreprises\"", "\"J'automatise la prise de RDV pour les dentistes\""] },
        { cells: ["Message flou, difficile à vendre", "Message clair, le client se reconnaît immédiatement"] },
        { cells: ["Chaque projet est différent, pas de process", "Process reproductible, livraison rapide"] },
        { cells: ["Concurrence massive", "Peu de concurrents spécialisés"] },
        { cells: ["Panier moyen faible (le client compare)", "Panier moyen élevé (tu es l'expert)"] }
      ]},
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
      { id: "s5-20", type: "text", html: "<p>Oublie l'image du commercial qui fait du porte-à-porte. Oublie les pubs Facebook à 500\u20AC. Oublie la prospection dans le dur. Ton premier client ne viendra probablement pas d'un canal marketing sophistiqué — il viendra d'une <strong>conversation naturelle</strong> avec quelqu'un que tu connais déjà.</p><p>Pourquoi ? Parce que ton premier client a besoin de te faire confiance. Et la confiance, elle se construit plus vite avec quelqu'un qu'on connaît déjà qu'avec un inconnu qui envoie un DM sur LinkedIn.</p>" },
      { id: "s5-3", type: "separator", style: "dots" },
      { id: "s5-4", type: "heading", level: 2, text: "Les 5 endroits où sont tes premiers clients" },
      { id: "s5-5", type: "steps", steps: [
        { title: "Ton entourage direct", description: "Famille, amis, connaissances. Quelqu'un a forcément un business, un commerce, une activité qui pourrait bénéficier de l'IA. Demande juste autour de toi." },
        { title: "LinkedIn", description: "Tu connais des entrepreneurs, des freelances, des gérants de PME. Un simple post du type \"Je me forme à l'IA et je cherche un premier projet à tarif préférentiel\" peut suffire." },
        { title: "Les commerces de ton quartier", description: "Le restaurant, le coiffeur, l'agence immo, le coach sportif. Ils ont tous des problèmes que l'IA peut résoudre. Va les voir directement." },
        { title: "Les groupes et communautés", description: "Groupes Facebook, Discord, forums d'entrepreneurs. Des gens y cherchent des solutions IA tous les jours." },
        { title: "Les plateformes freelance", description: "Malt, Fiverr, Upwork. Crée un profil orienté IA et commence à répondre à des missions." }
      ]},
      { id: "s5-21", type: "heading", level: 3, text: "La stratégie du premier projet gratuit (ou presque)" },
      { id: "s5-22", type: "text", html: "<p>\"Travailler gratuitement ?\" Oui — mais de manière stratégique. Ton premier projet n'a pas pour objectif de gagner de l'argent. Il a pour objectif de :</p><ul><li><strong>Valider que tu sais livrer</strong> — passer de la théorie à la pratique avec un vrai client.</li><li><strong>Obtenir un témoignage</strong> — \"Sarah m'a créé un chatbot incroyable pour mon cabinet\" vaut plus que n'importe quelle pub.</li><li><strong>Construire ton portfolio</strong> — des screenshots et une étude de cas pour tes prochains prospects.</li><li><strong>Affiner ton process</strong> — tu vas découvrir les questions à poser, les pièges à éviter, et le temps réel de livraison.</li></ul><p>Propose un prix symbolique (100-300\u20AC) ou un échange de service. Ne fais pas 100% gratuit — un client qui paie, même peu, prend le projet au sérieux. Un client qui ne paie rien va te fantômer.</p>" },
      { id: "s5-23", type: "callout", variant: "warning", html: "<strong>Limite-toi à 1-2 projets gratuits/très low cost maximum.</strong> L'objectif est d'obtenir des témoignages et du portfolio, pas de travailler gratuitement pendant des mois. Dès que tu as 2 projets livrés, passe à des prix normaux." },
      { id: "s5-6", type: "callout", variant: "tip", html: "<strong>Astuce de pro :</strong> Ton premier client n'a pas besoin d'être un gros contrat. Un petit projet à 300-500\u20AC pour te faire la main et avoir un premier témoignage, c'est de l'or." },
      { id: "s5-7", type: "separator", style: "line" },
      { id: "s5-8", type: "heading", level: 2, text: "Le script qui marche" },
      { id: "s5-9", type: "text", html: "<p>Voilà ce que tu peux dire (en message, en personne, ou sur LinkedIn) :</p><p><em>\"Salut [prénom], je me spécialise dans les solutions IA pour les [type de business]. Je cherche 2-3 projets pilotes à tarif réduit pour construire mon portfolio. Est-ce que [problème spécifique] c'est un truc qui te parle ? Je peux te montrer en 15 min ce que ça donnerait.\"</em></p><p>C'est simple, direct, et ça marche parce que tu proposes de la <strong>valeur</strong> avant de demander quoi que ce soit.</p>" },
      { id: "s5-24", type: "heading", level: 3, text: "Les 3 erreurs de prospection du débutant" },
      { id: "s5-25", type: "comparison", headers: ["Ce que font les débutants", "Ce que font les pros"], rows: [
        { cells: ["\"Je fais de l'IA, ça vous intéresse ?\"", "\"J'ai remarqué que vous répondez manuellement à vos clients sur Instagram. Je peux automatiser ça.\""] },
        { cells: ["Envoyer 100 messages copier-coller", "Envoyer 10 messages ultra-personnalisés"] },
        { cells: ["Parler de technologie (\"GPT-4, API, NLP...\")", "Parler de résultats (\"gagner 3h/jour, répondre 24/7\")"] },
        { cells: ["Attendre passivement que les clients viennent", "Aller vers les clients avec une proposition concrète"] },
        { cells: ["Proposer un devis de 3 pages", "Proposer une démo live de 15 minutes"] }
      ]},
      { id: "s5-26", type: "text", html: "<p>Le principe est simple : <strong>personnalise et montre de la valeur dès le premier contact</strong>. Un message générique ne donne envie à personne. Un message qui montre que tu as compris le problème spécifique du prospect, ça change tout.</p><p>Avant d'envoyer un message, passe 5 minutes sur le site web et les réseaux du prospect. Identifie un problème concret que l'IA peut résoudre. Mentionne-le dans ton message. C'est 5 minutes d'effort qui multiplient par 5 ton taux de réponse.</p>" },
      { id: "s5-10", type: "separator", style: "dots" },
      { id: "s5-11", type: "heading", level: 2, text: "Exercice : Fais écrire ton message par Claude" },
      { id: "s5-12", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie-colle ce prompt en remplaçant les crochets par tes infos :</p>" },
      { id: "s5-13", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Je suis [ton profil : Créateur / Automatiseur / Stratège] et je veux contacter [type de business, ex: un restaurant / un coach sportif / un agent immobilier] pour lui proposer [type de service IA, ex: un chatbot / des automatisations / un site web].<br/><br/>Écris-moi 3 variantes d'un message de prospection :<br/>1. Un message LinkedIn (court, 3-4 lignes)<br/>2. Un message WhatsApp/SMS (ultra concis, 2 lignes)<br/>3. Un email de premier contact (5-6 lignes max)<br/><br/>Le ton doit être professionnel mais humain. Je propose un projet pilote à tarif réduit. Je veux donner envie au prospect de me répondre sans être insistant.\"" },
      { id: "s5-14", type: "text", html: "<p><strong>Teste-le maintenant.</strong> En 30 secondes, tu as 3 messages de prospection personnalisés, prêts à envoyer. C'est ça la puissance de l'IA — elle ne remplace pas ta stratégie, elle t'accélère.</p>" },
      { id: "s5-27", type: "heading", level: 3, text: "Après le premier contact : la séquence de suivi" },
      { id: "s5-28", type: "steps", steps: [
        { title: "J+0 : Le premier message", description: "Tu envoies ton message personnalisé (LinkedIn, WhatsApp ou email). Court, direct, orienté problème/solution. Tu proposes une démo de 15 minutes." },
        { title: "J+3 : La relance douce", description: "Si pas de réponse, un petit message : \"Hey [prénom], je me permets de relancer — est-ce que tu as eu le temps de regarder mon message ? Pas de souci si c'est pas le bon moment.\" Simple, pas insistant." },
        { title: "J+7 : La valeur gratuite", description: "Envoie quelque chose de valeur sans rien demander en retour. Un conseil personnalisé, une suggestion d'amélioration pour son site, une mini-analyse de son business. Ça montre ta compétence et ta générosité." },
        { title: "J+14 : Le dernier message", description: "\"Salut [prénom], je ne veux pas être insistant. Si tu as besoin d'aide avec l'IA un jour, n'hésite pas à me recontacter. Bonne continuation !\" Tu fermes la boucle avec classe. Parfois, ils reviennent 3 mois plus tard." }
      ]},
      { id: "s5-29", type: "callout", variant: "tip", html: "<strong>Taux de conversion réaliste :</strong> Sur 10 messages personnalisés envoyés, attends-toi à 3-4 réponses, 1-2 appels, et 0-1 client. C'est normal. La prospection est un jeu de volume ET de qualité. Continue, affine tes messages, et les résultats s'améliorent avec le temps." },
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
      { id: "s6-20", type: "heading", level: 3, text: "Ce que tu as et ce qu'il te manque" },
      { id: "s6-21", type: "comparison", headers: ["Ce que tu as maintenant", "Ce qu'il te faut pour livrer"], rows: [
        { cells: ["Un prototype de chatbot dans Claude", "Savoir le déployer sur un vrai site web"] },
        { cells: ["Des idées de services à vendre", "Un process de livraison complet de A à Z"] },
        { cells: ["Des messages de prospection", "Des techniques de closing pour signer le deal"] },
        { cells: ["Un profil (Créateur/Automatiseur/Stratège)", "Les compétences techniques de ton profil"] },
        { cells: ["De la motivation", "Des compétences concrètes pour transformer cette motivation en revenus"] }
      ]},
      { id: "s6-22", type: "text", html: "<p>La bonne nouvelle : tu as déjà <strong>le plus dur</strong> — la vision, la motivation, et une idée de ce que tu veux faire. La mauvaise nouvelle (qui est en fait une bonne nouvelle) : il te reste des compétences à acquérir. Et c'est exactement pour ça que la formation Academy existe.</p>" },
      { id: "s6-3", type: "separator", style: "dots" },
      { id: "s6-4", type: "heading", level: 2, text: "Exercice final : Crée ton plan de lancement avec Claude" },
      { id: "s6-5", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie ce prompt en remplaçant les crochets :</p>" },
      { id: "s6-6", type: "callout", variant: "tip", html: "<strong>Prompt à copier :</strong><br/><br/>\"Je veux lancer une activité de prestataire IA. Voici ma situation :<br/>- Mon profil : [Créateur / Automatiseur / Stratège]<br/>- Le service que je veux proposer en premier : [ex: chatbots IA pour restaurants / automatisations pour e-commerce / sites web IA pour coachs]<br/>- Mon niveau technique actuel : [débutant complet / j'ai quelques bases / je suis à l'aise avec le digital]<br/>- Mon objectif à 90 jours : [ex: signer mon premier client / générer 2000\u20AC/mois / quitter mon job]<br/><br/>Crée-moi un plan d'action semaine par semaine sur 90 jours. Pour chaque semaine, dis-moi :<br/>1. Ce que je dois apprendre<br/>2. Ce que je dois faire concrètement<br/>3. Un objectif mesurable<br/><br/>Sois réaliste et concret. Pas de blabla motivationnel.\"" },
      { id: "s6-7", type: "text", html: "<p><strong>Fais-le maintenant.</strong> En 1 minute, tu as un plan de lancement personnalisé sur 90 jours. Lis-le. Tu vas voir que certaines semaines mentionnent des compétences que tu n'as pas encore — et c'est exactement là que la suite de la formation entre en jeu.</p>" },
      { id: "s6-23", type: "heading", level: 3, text: "Les 3 phases de tout lancement réussi" },
      { id: "s6-24", type: "steps", steps: [
        { title: "Phase 1 — Apprendre (Semaines 1-4)", description: "Tu te formes sur les outils et les techniques. Tu crées tes premiers projets perso pour ton portfolio. Tu ne cherches pas encore à vendre — tu construis ta compétence. C'est le moment d'absorber les modules de la formation." },
        { title: "Phase 2 — Tester (Semaines 5-8)", description: "Tu commences à contacter des prospects. Tu fais 1-2 projets à prix réduit ou gratuit. Tu découvres la réalité du terrain : les questions des clients, les imprévus, le temps réel de livraison. C'est le moment le plus formateur." },
        { title: "Phase 3 — Vendre (Semaines 9-12)", description: "Tu as un portfolio, des témoignages, un process validé. Tu prospectes à plein régime avec tes prix normaux. Tu vises ton premier client payant à prix standard. C'est le moment où tout bascule." }
      ]},
      { id: "s6-25", type: "callout", variant: "warning", html: "<strong>L'erreur fatale :</strong> Rester en Phase 1 pendant 6 mois. Certains apprennent, apprennent, apprennent... et ne passent jamais à l'action. L'apprentissage sans action est du divertissement, pas de la formation. Force-toi à passer à la Phase 2 après 4 semaines maximum, même si tu ne te sens pas \"prêt\". Tu ne te sentiras jamais prêt — et c'est normal." },
      { id: "s6-8", type: "separator", style: "line" },
      { id: "s6-9", type: "heading", level: 2, text: "Ce que ton plan va te révéler" },
      { id: "s6-10", type: "text", html: "<p>Si tu lis attentivement le plan que Claude t'a généré, tu vas remarquer des étapes comme :</p><ul><li>\"Apprendre à construire un chatbot et le déployer\" — <strong>c'est le Module 8</strong></li><li>\"Créer un site web professionnel\" — <strong>c'est les Modules 6-7</strong></li><li>\"Mettre en place des automatisations\" — <strong>c'est le Module 10</strong></li><li>\"Closer un appel client\" — <strong>c'est le Module 19</strong></li><li>\"Livrer et fidéliser\" — <strong>c'est le Module 20</strong></li></ul><p>Ton plan d'action est clair. Les compétences qu'il te faut aussi. <strong>La formation Academy couvre chacune de ces étapes</strong> — 91 leçons, 22 modules, dans l'ordre exact pour aller de zéro à ton premier client payant.</p>" },
      { id: "s6-26", type: "heading", level: 3, text: "La formation Academy en un coup d'oeil" },
      { id: "s6-27", type: "text", html: "<p>Voici ce que tu apprendras dans chaque phase de la formation :</p><ul><li><strong>Phase 1 — Les fondations :</strong> Les bases de l'IA, comment penser comme un prestataire, choisir ton positionnement.</li><li><strong>Phase 2 — Construire :</strong> Créer des sites web avec l'IA (Cursor, Next.js), déployer des projets professionnels.</li><li><strong>Phase 3 — Chatbots & Automatisations :</strong> Construire des chatbots IA puissants, créer des agents vocaux, automatiser des workflows business.</li><li><strong>Phase 4 — Compétences avancées :</strong> Créer des apps complètes, maîtriser les bases de données, construire des outils IA sur mesure.</li><li><strong>Phase 5 — Business :</strong> Créer ton offre, ton branding, ta présence en ligne.</li><li><strong>Phase 6 — Vendre & Livrer :</strong> Prospecter, closer, livrer, fidéliser. Le nerf de la guerre.</li><li><strong>Phase 7 — Scaler :</strong> Passer de freelance à agence, recruter, piloter par les KPIs, atteindre 10K€/mois.</li></ul>" },
      { id: "s6-28", type: "callout", variant: "info", html: "<strong>Chaque module est conçu pour être actionnable immédiatement.</strong> Tu n'apprends pas de la théorie pendant 6 mois avant de passer à l'action. Dès le Module 6, tu construis ton premier site web. Dès le Module 8, tu crées ton premier chatbot déployable. La formation est conçue pour que tu puisses vendre après quelques semaines, pas après quelques mois." },
      { id: "s6-11", type: "separator", style: "dots" },
      { id: "s6-12", type: "heading", level: 2, text: "Et maintenant ?" },
      { id: "s6-13", type: "text", html: "<p>Tu as le plan. Tu as les premiers outils. Tu as tes prospects. Ce qui te manque, c'est les <strong>compétences techniques et business</strong> pour exécuter.</p><p>La formation Academy est là pour ça. Pas de théorie inutile — chaque module te donne une compétence que tu peux utiliser la semaine même pour tes clients.</p><p>Le plus dur c'est de commencer. Et tu viens de le faire.</p>" },
      { id: "s6-29", type: "heading", level: 3, text: "Les 3 raisons pour lesquelles les gens n'agissent pas" },
      { id: "s6-30", type: "text", html: "<p>Soyons directs. Tu vas peut-être fermer cette page et ne rien faire. Voici les 3 raisons les plus courantes — et pourquoi elles ne tiennent pas :</p><ul><li><strong>\"Je ne suis pas assez technique.\"</strong> Thomas était serveur, Karim était dans la logistique. La technique s'apprend. C'est littéralement ce que fait la formation. Ce qui ne s'apprend pas, c'est la motivation — et tu l'as déjà.</li><li><strong>\"C'est pas le bon moment.\"</strong> Le bon moment n'existe pas. Par contre, la fenêtre d'opportunité existe — et elle se referme. Plus tu attends, plus il y aura de concurrence et moins il y aura de parts de marché faciles à prendre.</li><li><strong>\"Et si ça marche pas ?\"</strong> Le risque est quasi nul. Tu ne quittes pas ton job pour lancer ton agence. Tu apprends une compétence à côté, tu fais quelques projets, et tu vois si ça te plaît. Le pire scénario : tu as appris l'IA (ce qui est utile dans n'importe quel job).</li></ul>" },
      { id: "s6-14", type: "callout", variant: "info", html: "<strong>Tu as ton plan de 90 jours. Garde-le précieusement — c'est ta roadmap personnalisée.</strong> Si tu veux les compétences pour l'exécuter, la suite est dans l'Academy." }
    ]),
    exercise: "<h3>Exercice final</h3><p><strong>1.</strong> Sauvegarde ton plan de 90 jours (copie-le dans tes notes, un doc, ou un email à toi-même).</p><p><strong>2.</strong> Identifie les 3 compétences les plus urgentes dans ton plan — celles dont tu as besoin pour ta première semaine d'action.</p><p><strong>3.</strong> Regarde les modules de la formation Academy et trouve ceux qui correspondent à ces compétences.</p><p>Tu es à une décision de tout changer.</p>",
    quiz: [
      { type: "mcq", question: "Combien de modules contient la formation Academy complète ?", options: JSON.stringify(["5 modules", "10 modules", "22 modules", "50 modules"]), correctAnswer: "22 modules", explanation: "La formation Academy contient 22 modules répartis en 7 phases, avec 86 leçons au total." },
      { type: "true_false", question: "Les modules Starter suffisent pour commencer à vendre des services IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les modules Starter te donnent la vision et les bases, mais pour construire, déployer et vendre des services IA, il te faut la formation complète." },
      { type: "mcq", question: "Quelle est la prochaine étape logique après ces modules ?", options: JSON.stringify(["Attendre que le marché mûrisse", "Rejoindre Academy pour apprendre à construire et livrer", "Chercher un emploi en IA", "Regarder des vidéos YouTube"]), correctAnswer: "Rejoindre Academy pour apprendre à construire et livrer", explanation: "Tu as la vision et tu as vu le potentiel. L'étape suivante c'est d'apprendre les compétences techniques et business avec la formation complète." }
    ],
  },
];
