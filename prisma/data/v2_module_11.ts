// ═══════════════════════════════════════════════════
// MODULE 11 — Génération de leads avec l'IA
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_11_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 11,
    title: "Scraping intelligent : trouver des prospects qualifiés avec l'IA",
    slug: "v2-scraping-intelligent-prospects-qualifies-ia",
    duration: "25 min",
    description: "Apprends à utiliser le scraping assisté par IA pour identifier et collecter des prospects qualifiés. Outils, techniques légales et stratégies pour construire des listes de leads de qualité.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le scraping intelligent vs le scraping brut" },
      { id: "1-2", type: "text", html: "<p>Le scraping brut consiste à aspirer des milliers de contacts sans distinction. Le résultat : des listes de mauvaise qualité, des taux de réponse proches de zéro et des problèmes légaux. Le <strong>scraping intelligent</strong> est l'inverse : tu utilises l'IA pour identifier précisément les prospects qui correspondent à ton client idéal, collecter les bonnes informations et qualifier chaque contact avant même le premier message.</p><p>La différence est massive. Une liste de 100 prospects qualifiés vaut 10x plus qu'une liste de 10 000 contacts non ciblés. L'IA transforme le scraping d'un outil de masse en un outil de précision chirurgicale.</p>" },

      { id: "1-20", type: "heading", level: 3, text: "Le scraping en 2025-2026 : un vrai métier" },
      { id: "1-21", type: "text", html: "<p>Le scraping de données est devenu un pilier du business development moderne. Les agences de génération de leads facturent entre <strong>500€ et 2 000€ par mois</strong> juste pour fournir des listes de prospects qualifiés. En maîtrisant le scraping intelligent, tu peux soit vendre ce service directement, soit l'intégrer dans tes offres d'automatisation pour augmenter la valeur perçue.</p><p>Les entreprises qui utilisent des données scrapées et enrichies de manière intelligente ont un taux de conversion 3x supérieur à celles qui achètent des bases de données génériques. Pourquoi ? Parce que la qualité des données détermine la qualité de la prospection.</p>" },
      { id: "1-22", type: "callout", variant: "info", html: "<strong>Opportunité de service :</strong> Propose un service de 'liste de prospects sur mesure' à tes clients. Tu scrapes, tu qualifies avec l'IA, tu enrichis, et tu livres une liste clé en main. Tarif : 500€-1 500€/mois selon le volume. Tes coûts : ~50€/mois d'outils. La marge est énorme." },

      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Cadre légal :</strong> Le scraping est encadré par le RGPD en Europe. Tu peux collecter des données professionnelles publiques (nom, poste, entreprise) pour de la prospection B2B légitime. Tu ne peux PAS scraper des données personnelles privées, des emails personnels ou des réseaux sociaux sans consentement. Reste toujours dans le cadre B2B professionnel." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les sources de données pour le scraping B2B" },
      { id: "1-6", type: "comparison", headers: ["Source", "Type de données", "Qualité", "Outil recommandé"], rows: [
        { cells: ["Google Maps", "Entreprises locales, téléphone, adresse, avis", "Excellente pour le local", "Outscraper, PhantomBuster"] },
        { cells: ["LinkedIn", "Décideurs, postes, entreprises, connexions", "Très haute pour le B2B", "PhantomBuster, Apify"] },
        { cells: ["Annuaires professionnels", "Sociétés, SIREN, dirigeants, CA", "Bonne, données officielles", "Societe.com, Pappers API"] },
        { cells: ["Sites web d'entreprises", "Pages À propos, équipes, emails de contact", "Variable selon le site", "Apify, scraping custom"] },
        { cells: ["Job boards", "Entreprises qui recrutent (signal d'achat)", "Excellent signal de croissance", "Indeed API, Welcome to the Jungle"] },
      ]},

      { id: "1-23", type: "heading", level: 3, text: "Google Maps : la mine d'or du scraping local" },
      { id: "1-24", type: "text", html: "<p>Google Maps est la source numéro 1 pour le scraping d'entreprises locales. Voici pourquoi et comment l'exploiter au maximum :</p><ul><li><strong>Les avis Google :</strong> Le nombre d'avis et la note moyenne sont des indicateurs précieux. Un restaurant avec 500 avis et 4.5 étoiles est probablement bien établi et a du budget. Un restaurant avec 10 avis vient d'ouvrir et a d'autres priorités.</li><li><strong>Les photos :</strong> Un commerce qui publie régulièrement des photos sur Google est actif en ligne. C'est un bon signe pour la prospection digitale.</li><li><strong>Le site web :</strong> Scrape l'URL du site web. Ensuite, l'IA peut analyser le site pour déterminer s'il est moderne ou obsolète — un site daté est un signal d'achat pour une refonte.</li><li><strong>Les horaires :</strong> Des horaires renseignés montrent un minimum de sérieux dans la gestion de la fiche Google. C'est un indicateur de maturité digitale.</li></ul>" },
      { id: "1-25", type: "callout", variant: "tip", html: "<strong>Filtre puissant :</strong> Sur Outscraper, filtre par 'has website: no'. Tu obtiens la liste des entreprises sans site web dans un secteur donné — ce sont des prospects idéaux pour une agence web ou un service de création de site IA." },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Workflow de scraping intelligent avec IA" },
      { id: "1-9", type: "steps", steps: [
        { title: "Définir le profil de prospect idéal (ICP)", description: "Avant de scraper, définis précisément qui tu cherches. Exemple : 'Restaurants de plus de 20 avis Google dans un rayon de 50 km, avec un site web mais sans système de réservation en ligne.' Plus ton ICP est précis, plus tes leads seront qualifiés." },
        { title: "Collecter les données brutes", description: "Utilise un outil de scraping (Outscraper pour Google Maps, PhantomBuster pour LinkedIn) pour collecter les données brutes. Paramètre bien les filtres : localisation, catégorie, nombre d'avis minimum, etc." },
        { title: "Nettoyer et qualifier avec l'IA", description: "Envoie les données brutes à GPT-4o pour les nettoyer et qualifier. L'IA vérifie les doublons, normalise les formats (téléphone, adresse), et attribue un score de qualification basé sur tes critères ICP." },
        { title: "Enrichir les profils", description: "Pour chaque prospect qualifié, l'IA visite le site web et extrait des informations supplémentaires : technologies utilisées, taille de l'équipe, offres actuelles, problèmes potentiels que tu pourrais résoudre." },
        { title: "Exporter la liste finale", description: "La liste nettoyée, qualifiée et enrichie est exportée dans un Google Sheet ou un CRM. Chaque ligne contient toutes les informations nécessaires pour une approche personnalisée." },
      ]},

      { id: "1-26", type: "heading", level: 3, text: "Qualifier les prospects avec un prompt IA" },
      { id: "1-27", type: "text", html: "<p>La qualification par IA est ce qui transforme une liste brute en liste actionnable. Voici comment structurer ton prompt de qualification :</p><p>Pour chaque prospect, l'IA reçoit les données scrapées (nom, catégorie, avis, note, site web, adresse) et doit retourner :</p><ul><li><strong>Score ICP (1-10) :</strong> À quel point ce prospect correspond à ton client idéal</li><li><strong>Signal d'achat détecté :</strong> Oui/Non + détail (site obsolète, pas de réservation en ligne, recrutement en cours)</li><li><strong>Angle d'approche recommandé :</strong> Quel problème résoudre et comment le formuler dans le premier message</li><li><strong>Niveau de priorité :</strong> Chaud (contacter cette semaine), Tiède (dans 2 semaines), Froid (nurturing)</li></ul><p>Ce prompt te donne non seulement une liste qualifiée, mais aussi la stratégie de prospection personnalisée pour chaque prospect. Tu gagnes des heures de préparation.</p>" },

      { id: "1-10", type: "callout", variant: "tip", html: "<strong>Astuce : les signaux d'achat.</strong> Une entreprise qui recrute, qui vient de lever des fonds ou qui a un site web obsolète est un prospect chaud. L'IA peut détecter ces signaux automatiquement en analysant les données collectées." },

      { id: "1-28", type: "separator", style: "dots" },
      { id: "1-29", type: "heading", level: 3, text: "Combien ça coûte : le budget scraping" },
      { id: "1-30", type: "comparison", headers: ["Outil", "Plan gratuit", "Plan payant", "Coût pour 500 prospects"], rows: [
        { cells: ["Outscraper", "500 résultats gratuits", "À partir de 2€/1 000 résultats", "~1€"] },
        { cells: ["PhantomBuster", "14 jours d'essai", "69€/mois", "Inclus dans l'abo"] },
        { cells: ["Apify", "5$ gratuit/mois", "49$/mois", "~2-5$"] },
        { cells: ["OpenAI (qualification)", "-", "Pay per use", "~0,50€ (GPT-4o-mini)"] },
        { cells: ["Total", "-", "-", "2-5€ pour 500 prospects qualifiés"] },
      ]},

      { id: "1-11", type: "text", html: "<p>Le scraping intelligent est la fondation de toute machine à leads. Dans les leçons suivantes, tu vas apprendre à enrichir ces données (emails, téléphones) et à créer des séquences d'outreach automatisées. Mais tout commence ici : une liste de prospects propre et qualifiée.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "100 prospects qualifiés > 10 000 contacts non ciblés" },
        { id: "c2", text: "Toujours définir l'ICP avant de scraper" },
        { id: "c3", text: "L'IA nettoie, qualifie et enrichit les données brutes" },
        { id: "c4", text: "Respecter le RGPD : uniquement des données B2B professionnelles publiques" },
        { id: "c5", text: "Les signaux d'achat augmentent drastiquement les taux de conversion" },
        { id: "c6", text: "Le coût total est dérisoire : 2-5€ pour 500 prospects qualifiés" },
      ]},
    ]),
    exercise: "<h3>Exercice : Scrape et qualifie 50 prospects</h3><p>Choisis un secteur (restaurants, agences immo, garages, salons de coiffure) et :</p><ol><li>Définis ton ICP en 5 critères précis</li><li>Utilise Outscraper (version gratuite) pour scraper 50 entreprises de Google Maps dans ta ville</li><li>Crée un prompt GPT pour qualifier chaque prospect : score de 1-10 basé sur tes critères ICP</li><li>Crée un script Node.js (ou une API Route) qui lit le CSV → envoie chaque ligne à OpenAI pour qualification → écrit les résultats dans un Google Sheet via l'API Sheets</li><li>Analyse les résultats : combien de prospects ont un score supérieur à 7 ?</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la première étape avant tout scraping ?", options: JSON.stringify(["Installer un outil de scraping", "Définir le profil de prospect idéal (ICP)", "Créer un compte LinkedIn premium", "Acheter une base de données"]), correctAnswer: "Définir le profil de prospect idéal (ICP)", explanation: "Définir l'ICP avant de scraper est indispensable. Sans critères précis, tu collectes des données inutiles. L'ICP guide la recherche et la qualification." },
      { type: "true_false", question: "Le scraping de données personnelles privées est autorisé pour la prospection B2B en Europe.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le RGPD interdit le scraping de données personnelles privées. Seules les données professionnelles publiques (nom, poste, email pro, entreprise) sont utilisables pour la prospection B2B légitime." },
      { type: "mcq", question: "Quel outil est recommandé pour scraper des entreprises sur Google Maps ?", options: JSON.stringify(["Photoshop", "Outscraper", "Canva", "WordPress"]), correctAnswer: "Outscraper", explanation: "Outscraper est spécialisé dans l'extraction de données Google Maps : entreprises, avis, téléphones, adresses, horaires. Il propose une version gratuite pour commencer." },
      { type: "mcq", question: "Qu'est-ce qu'un signal d'achat pour un prospect ?", options: JSON.stringify(["Un like sur Facebook", "Un recrutement en cours, une levée de fonds ou un site web obsolète", "Un changement de logo", "Un post Instagram"]), correctAnswer: "Un recrutement en cours, une levée de fonds ou un site web obsolète", explanation: "Les signaux d'achat indiquent qu'une entreprise est en phase de croissance ou a un besoin. Un recrutement montre de la croissance, un site obsolète montre un besoin de mise à jour." },
      { type: "true_false", question: "Une liste de 100 prospects qualifiés vaut plus qu'une liste de 10 000 contacts non ciblés.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La qualité prime toujours sur la quantité en prospection. 100 contacts bien ciblés avec des informations précises génèrent bien plus de business que 10 000 contacts génériques." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 11,
    title: "Enrichissement de données : email, téléphone, infos entreprise",
    slug: "v2-enrichissement-donnees-email-telephone",
    duration: "25 min",
    description: "Transforme une simple liste de noms en base de données complète. Techniques et outils pour trouver les emails professionnels, numéros de téléphone et informations clés de chaque prospect.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "L'enrichissement : la clé d'une prospection efficace" },
      { id: "2-2", type: "text", html: "<p>Tu as une liste de 200 entreprises scrapées. Problème : tu n'as que le nom et l'adresse. Pour prospecter efficacement, tu as besoin de l'<strong>email du décideur</strong>, de son <strong>numéro direct</strong>, du <strong>chiffre d'affaires</strong> de l'entreprise et d'informations contextuelles pour personnaliser ton approche.</p><p>L'enrichissement de données transforme une liste brute en une <strong>base de données actionnable</strong>. C'est ce qui fait la différence entre un email qui atterrit à contact@entreprise.com (taux d'ouverture : 5%) et un email envoyé à jean.dupont@entreprise.com avec une accroche personnalisée (taux d'ouverture : 35%).</p>" },

      { id: "2-20", type: "heading", level: 3, text: "L'impact concret de l'enrichissement sur les résultats" },
      { id: "2-21", type: "text", html: "<p>Voici un scénario réel pour illustrer la différence :</p><p><strong>Sans enrichissement :</strong> Tu envoies 200 emails à des adresses génériques (contact@, info@). Taux d'ouverture : 5% = 10 ouvertures. Taux de réponse : 1% = 2 réponses. Taux de conversion en RDV : 0,5% = 1 RDV.</p><p><strong>Avec enrichissement :</strong> Tu envoies 200 emails au décideur direct avec une accroche personnalisée. Taux d'ouverture : 35% = 70 ouvertures. Taux de réponse : 8% = 16 réponses. Taux de conversion en RDV : 4% = 8 RDV.</p><p>Même liste de prospects, même offre, mais <strong>8x plus de rendez-vous</strong>. C'est la puissance de l'enrichissement.</p>" },

      { id: "2-3", type: "callout", variant: "info", html: "<strong>Le coût de l'enrichissement :</strong> Compter entre 0,02€ et 0,10€ par contact enrichi selon les outils. Pour 500 prospects, le budget est de 10€ à 50€ — un investissement dérisoire par rapport à la valeur d'un seul client gagné." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Les outils d'enrichissement" },
      { id: "2-6", type: "comparison", headers: ["Outil", "Spécialité", "Prix", "Fiabilité"], rows: [
        { cells: ["Apollo.io", "Base de données B2B complète + recherche d'emails + séquences", "Gratuit (limite) puis 49$/mois", "80-85% de fiabilité"] },
        { cells: ["Dropcontact", "Enrichissement email + téléphone, RGPD compliant", "24€/mois pour 1 000 contacts", "90%+ de fiabilité"] },
        { cells: ["Clearbit (API)", "Enrichissement entreprise (CA, employés, techno)", "Variable selon usage", "Très haute pour les données entreprise"] },
        { cells: ["Kaspr", "Extension LinkedIn pour emails + téléphones", "Gratuit (5 crédits/mois) puis 49€/mois", "85% de fiabilité"] },
      ]},

      { id: "2-22", type: "heading", level: 3, text: "Comment choisir le bon outil selon ton cas" },
      { id: "2-23", type: "text", html: "<p>Chaque outil a ses forces et ses faiblesses. Voici comment choisir :</p><ul><li><strong>Tu prospectes des PME locales (restaurants, commerces, artisans) :</strong> Dropcontact est ton meilleur allié. Il est conforme RGPD, fiable à 90%+, et fonctionne bien avec les petites structures françaises.</li><li><strong>Tu prospectes des entreprises B2B / startups :</strong> Apollo.io excelle dans ce segment. Sa base de données est énorme pour les entreprises tech et les startups. Commence par le plan gratuit.</li><li><strong>Tu veux les numéros de téléphone direct :</strong> Kaspr via LinkedIn est le plus efficace. L'extension Chrome extrait les numéros mobiles des profils LinkedIn avec une bonne fiabilité.</li><li><strong>Tu veux des données entreprise (CA, effectifs, techno) :</strong> Clearbit ou Pappers (pour les données françaises officielles).</li></ul><p>Le combo gagnant pour la plupart des cas : <strong>Apollo + Dropcontact en cascade</strong>. Tu couvres 85%+ des contacts.</p>" },

      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le workflow d'enrichissement automatisé" },
      { id: "2-9", type: "steps", steps: [
        { title: "Étape 1 : Enrichissement email", description: "Envoie le nom de domaine de l'entreprise à Apollo ou Dropcontact. L'outil retourne les emails trouvés pour ce domaine avec un score de confiance. Filtre les résultats avec un score > 80%." },
        { title: "Étape 2 : Identification du décideur", description: "Si tu as plusieurs emails pour un domaine, utilise l'IA pour identifier le bon contact. Donne à GPT la liste des personnes trouvées et demande : 'Qui est le décideur le plus pertinent pour vendre un service de [X] ?' L'IA choisit basé sur le poste et la séniorité." },
        { title: "Étape 3 : Enrichissement entreprise", description: "Utilise Clearbit ou Pappers pour enrichir les données entreprise : nombre d'employés, chiffre d'affaires, secteur d'activité, technologies utilisées sur le site web. Ces données alimentent la personnalisation du message." },
        { title: "Étape 4 : Vérification email", description: "Avant d'envoyer, vérifie chaque email avec un outil comme ZeroBounce ou NeverBounce. Un email invalide rebondit, ce qui nuit à ta délivrabilité. Vise un taux de validité > 95%." },
        { title: "Étape 5 : Score final de qualité", description: "L'IA attribue un score final basé sur la complétude des données : email vérifié (+30pts), téléphone trouvé (+20pts), CA connu (+15pts), signal d'achat détecté (+25pts), email du décideur (+10pts). Score max : 100." },
      ]},

      { id: "2-24", type: "heading", level: 3, text: "La vérification email : l'étape que tout le monde oublie" },
      { id: "2-25", type: "text", html: "<p>Envoyer des emails à des adresses invalides est le meilleur moyen de ruiner ta délivrabilité. Voici ce qui se passe si tu sautes cette étape :</p><ul><li><strong>Taux de bounce > 5% :</strong> Les fournisseurs email (Gmail, Outlook) te flagguent comme spammeur</li><li><strong>Réputation du domaine dégradée :</strong> Tes futurs emails atterrissent en spam, même les légitimes</li><li><strong>Compte suspendu :</strong> Les outils d'envoi (Lemlist, Instantly) suspendent ton compte si le taux de bounce est trop élevé</li></ul><p>La vérification prend 30 secondes pour 500 contacts et coûte environ 5€. C'est l'investissement le plus rentable de tout le pipeline.</p>" },
      { id: "2-26", type: "callout", variant: "warning", html: "<strong>Piège classique :</strong> Les emails 'catch-all' (domaines qui acceptent tous les emails) passent la vérification mais ne signifient pas que l'adresse existe vraiment. Sépare-les dans ta liste et envoie-les avec un volume plus faible pour tester." },

      { id: "2-10", type: "callout", variant: "tip", html: "<strong>Combine les outils :</strong> Aucun outil n'a 100% de couverture. La stratégie gagnante est de cascader : essaie Apollo d'abord, puis Dropcontact pour les emails non trouvés. Tu passes de 60% à 85%+ de couverture." },

      { id: "2-27", type: "separator", style: "dots" },
      { id: "2-28", type: "heading", level: 3, text: "Automatiser l'enrichissement avec un script" },
      { id: "2-29", type: "text", html: "<p>Tu ne vas pas enrichir tes contacts un par un manuellement. Voici le flow automatisé à coder avec Claude Code :</p><ol><li><strong>Lecture du Google Sheet :</strong> Ton script lit la liste de prospects depuis ton Sheet via l'API Google Sheets</li><li><strong>Boucle d'enrichissement :</strong> Pour chaque prospect, appel à l'API Apollo. Si pas de résultat, appel à l'API Dropcontact.</li><li><strong>Identification du décideur :</strong> Si plusieurs contacts trouvés, appel à GPT-4o-mini pour choisir le bon</li><li><strong>Vérification email :</strong> Appel à l'API ZeroBounce pour vérifier chaque email trouvé</li><li><strong>Mise à jour du Sheet :</strong> Les données enrichies sont écrites dans les colonnes correspondantes du Sheet</li><li><strong>Rapport :</strong> À la fin, un résumé est généré : X contacts enrichis, Y emails trouvés, Z téléphones trouvés</li></ol><p>Ce script tourne en 5-10 minutes pour 200 contacts. Une fois codé, tu le réutilises pour tous tes clients.</p>" },

      { id: "2-11", type: "text", html: "<p>L'enrichissement est une étape technique mais cruciale. Une base bien enrichie, c'est un taux de réponse 5x supérieur. Dans la prochaine leçon, tu vas voir comment exploiter cette base avec des séquences d'outreach automatisées.</p>" },

      { id: "2-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "L'enrichissement transforme une liste brute en base de données actionnable" },
        { id: "c2", text: "Combiner plusieurs outils pour maximiser la couverture" },
        { id: "c3", text: "Toujours vérifier les emails avant envoi (ZeroBounce, NeverBounce)" },
        { id: "c4", text: "L'IA identifie le bon décideur dans chaque entreprise" },
        { id: "c5", text: "Budget enrichissement : 0,02€ à 0,10€ par contact" },
        { id: "c6", text: "Un taux de bounce > 5% ruine ta délivrabilité" },
      ]},
    ]),
    exercise: "<h3>Exercice : Enrichis ta liste de 50 prospects</h3><p>Reprends la liste de 50 prospects de la leçon précédente et :</p><ol><li>Crée un compte Apollo.io (gratuit) et un compte Dropcontact (essai gratuit)</li><li>Crée un script automatisé qui prend chaque prospect → cherche l'email via l'API Apollo → si pas trouvé, essaie l'API Dropcontact</li><li>Utilise GPT pour identifier le décideur quand plusieurs contacts sont trouvés</li><li>Vérifie les emails trouvés avec un outil de vérification</li><li>Calcule ton taux de couverture : combien de prospects ont un email vérifié ?</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le taux d'ouverture typique d'un email envoyé à contact@entreprise.com ?", options: JSON.stringify(["5%", "20%", "35%", "50%"]), correctAnswer: "5%", explanation: "Les emails génériques (contact@, info@) ont un taux d'ouverture d'environ 5%. Un email envoyé au décideur directement (prenom.nom@entreprise.com) monte à 30-40%." },
      { type: "true_false", question: "Un seul outil d'enrichissement suffit pour obtenir 100% des emails.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Aucun outil n'a 100% de couverture. La stratégie gagnante est de cascader : Apollo → Dropcontact. Cela permet de passer de 60% à 85%+ de couverture." },
      { type: "mcq", question: "Quel taux de validité email minimum faut-il viser avant un envoi de prospection ?", options: JSON.stringify(["50%", "70%", "85%", "95%"]), correctAnswer: "95%", explanation: "Vise un taux de validité email supérieur à 95%. Les emails invalides rebondissent et nuisent gravement à ta réputation d'envoi et ta délivrabilité." },
      { type: "mcq", question: "Combien coûte typiquement l'enrichissement d'un contact ?", options: JSON.stringify(["1€ – 5€", "0,50€ – 1€", "0,02€ – 0,10€", "10€ – 20€"]), correctAnswer: "0,02€ – 0,10€", explanation: "L'enrichissement coûte entre 0,02€ et 0,10€ par contact selon les outils. Pour 500 prospects, le budget est de 10€ à 50€ — un investissement dérisoire." },
      { type: "true_false", question: "Dropcontact est un outil d'enrichissement conforme au RGPD.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Dropcontact est une solution française spécialement conçue pour être conforme au RGPD. Elle enrichit les contacts B2B sans stocker de données personnelles." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 11,
    title: "Séquences outbound automatisées (email + LinkedIn + relance)",
    slug: "v2-sequences-outbound-email-linkedin-relance",
    duration: "30 min",
    description: "Crée des séquences de prospection multi-canal automatisées. Email froid personnalisé par IA, demande de connexion LinkedIn, relances intelligentes et suivi. Le playbook complet de l'outbound moderne.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "L'outbound multi-canal : pourquoi c'est indispensable" },
      { id: "3-2", type: "text", html: "<p>L'époque où un seul email froid suffisait est révolue. Aujourd'hui, les décideurs reçoivent des dizaines de sollicitations par jour. Pour émerger, tu dois être présent sur <strong>plusieurs canaux</strong> de manière cohérente et espacée : un email, puis une connexion LinkedIn, puis un deuxième email, puis un message LinkedIn.</p><p>Les chiffres parlent d'eux-mêmes : un email seul obtient 3-5% de taux de réponse. Une séquence multi-canal (email + LinkedIn + relance) monte à <strong>15-25% de taux de réponse</strong>. La clé est la personnalisation à grande échelle — et c'est exactement ce que l'IA permet.</p>" },

      { id: "3-20", type: "heading", level: 3, text: "L'anatomie d'un email froid qui convertit" },
      { id: "3-21", type: "text", html: "<p>Un email de prospection qui obtient des réponses suit une structure précise. Oublie les emails de 500 mots qui parlent de toi. Voici la formule :</p><ul><li><strong>Objet (5-8 mots max) :</strong> Personnalisé et intrigant. 'Question sur [nom de l'entreprise]' ou '[Prénom], rapide idée'. Pas de majuscules, pas de points d'exclamation.</li><li><strong>Ligne 1 — L'accroche (personnalisée) :</strong> Montre que tu connais le prospect. Mentionne un fait spécifique : un avis Google, un article qu'il a publié, un changement récent dans son entreprise.</li><li><strong>Ligne 2-3 — Le problème :</strong> Décris un problème que le prospect a probablement. 'La plupart des [secteur] perdent 2h par jour à [tâche répétitive].'</li><li><strong>Ligne 4 — La solution (1 phrase) :</strong> Ce que tu proposes, sans détailler. 'J'ai aidé [entreprise similaire] à réduire ça de 80%.'</li><li><strong>Ligne 5 — Le CTA (1 question simple) :</strong> 'Ça vaut 15 minutes de votre temps ?' ou 'Intéressé ?'</li></ul><p>Total : 4-6 lignes. 50-80 mots maximum. Court, direct, personnalisé.</p>" },
      { id: "3-22", type: "callout", variant: "tip", html: "<strong>La personnalisation IA fait toute la différence :</strong> L'IA peut analyser le site web du prospect et générer une accroche unique en 2 secondes. 'J'ai vu que votre menu change chaque semaine sur votre site — vos clients réguliers aimeraient être prévenus automatiquement.' Ce niveau de personnalisation est impossible manuellement à grande échelle." },

      { id: "3-3", type: "callout", variant: "tip", html: "<strong>La règle des 7 touchpoints :</strong> En prospection, il faut en moyenne 7 interactions avant qu'un prospect accepte un rendez-vous. Ta séquence doit prévoir suffisamment de touches réparties sur 3-4 semaines." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Anatomie d'une séquence outbound efficace" },
      { id: "3-6", type: "steps", steps: [
        { title: "Jour 1 — Email 1 : L'accroche personnalisée", description: "Ton premier email doit montrer que tu connais le prospect. L'IA analyse le site web ou le profil LinkedIn et génère une accroche unique : 'J'ai vu que votre restaurant Le Petit Bistrot a 4.8 étoiles sur Google mais pas de réservation en ligne — je peux résoudre ça.' Court, direct, personnalisé." },
        { title: "Jour 3 — LinkedIn : Connexion + message", description: "Envoie une demande de connexion LinkedIn avec un message court : 'Bonjour [Prénom], je travaille avec des [secteur] comme [entreprise similaire] sur [problème]. Ravi de connecter.' Pas de pitch, juste du contexte." },
        { title: "Jour 5 — Email 2 : La valeur ajoutée", description: "Deuxième email avec un angle différent. Partage une étude de cas ou un chiffre pertinent : 'Un restaurant similaire au vôtre a réduit ses appels téléphoniques de 70% avec un agent vocal. Je vous montre comment en 15 min ?'" },
        { title: "Jour 8 — LinkedIn : Message de suivi", description: "Si la connexion est acceptée, envoie un message LinkedIn court qui rebondit sur le premier email : 'J'ai partagé une idée par email — avez-vous eu l'occasion de regarder ?'" },
        { title: "Jour 12 — Email 3 : Le breakup", description: "Dernier email de la séquence. Ton 'breakup email' : 'Je comprends que ce n'est peut-être pas le bon moment. Si jamais la question se pose à l'avenir, n'hésitez pas à me recontacter. Bonne continuation.' Paradoxalement, c'est souvent celui qui obtient le plus de réponses." },
      ]},

      { id: "3-23", type: "heading", level: 3, text: "Les erreurs qui tuent ta prospection" },
      { id: "3-24", type: "text", html: "<p>Voici les erreurs les plus courantes que font les débutants en outreach (et même certains pros) :</p><ul><li><strong>Parler de soi au lieu du prospect :</strong> 'Nous sommes une agence spécialisée en IA fondée en 2024...' Le prospect s'en fiche. Parle de SON problème.</li><li><strong>Email trop long :</strong> Au-delà de 100 mots, le taux de réponse chute drastiquement. Les décideurs scannent, ils ne lisent pas.</li><li><strong>Pas de CTA clair :</strong> 'N'hésitez pas à me contacter si vous êtes intéressé' n'est pas un CTA. 'Un call de 15 min mercredi 10h ou jeudi 14h ?' est un CTA.</li><li><strong>Relancer trop vite :</strong> Un email de relance le lendemain du premier email est du harcèlement. Espace d'au moins 3 jours entre chaque touchpoint.</li><li><strong>Même angle à chaque relance :</strong> Chaque email doit apporter un nouvel angle, une nouvelle valeur. Pas juste 'Suite à mon précédent email...'</li></ul>" },
      { id: "3-25", type: "callout", variant: "warning", html: "<strong>Le piège du 'Suite à mon précédent email' :</strong> C'est l'objet d'email le plus utilisé et le plus ignoré. L'IA peut générer un angle totalement différent pour chaque relance — nouvelle étude de cas, nouveau chiffre, nouvel insight sur le prospect." },

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Personnalisation à grande échelle avec l'IA" },
      { id: "3-9", type: "text", html: "<p>La personnalisation est ce qui fait la différence entre un spam et un email qui obtient une réponse. Mais personnaliser 200 emails manuellement prendrait des jours. L'IA le fait en minutes.</p><p>Le workflow est simple : pour chaque prospect, l'IA reçoit les données enrichies (nom, entreprise, secteur, site web, taille, problèmes identifiés) et génère une version personnalisée de chaque email de la séquence. Le template de base reste le même, mais l'accroche, les exemples et les chiffres sont adaptés à chaque prospect.</p>" },
      { id: "3-10", type: "callout", variant: "warning", html: "<strong>Délivrabilité email :</strong> N'envoie pas plus de 30-40 emails/jour par adresse email au début. Augmente progressivement (warm-up). Utilise un domaine secondaire pour la prospection (pas ton domaine principal). Et space tes envois de 2-5 minutes entre chaque email." },

      { id: "3-26", type: "heading", level: 3, text: "Le warm-up email : l'étape que tout le monde zappe" },
      { id: "3-27", type: "text", html: "<p>Avant d'envoyer ta première séquence, tu dois 'chauffer' ton domaine email pendant 2-3 semaines. Voici pourquoi et comment :</p><p><strong>Pourquoi :</strong> Un nouveau domaine qui envoie soudainement 50 emails/jour est immédiatement flaggué par Gmail et Outlook comme spam. Le warm-up simule une activité email normale pour bâtir ta réputation.</p><p><strong>Comment :</strong></p><ol><li>Achète un domaine secondaire (ex: tonagence.io au lieu de tonagence.com) — 10€/an</li><li>Configure SPF, DKIM et DMARC (indispensable pour la délivrabilité)</li><li>Utilise un outil de warm-up automatique (Lemwarm, Instantly warmup) — ces outils échangent des emails entre de vrais comptes pour simuler une activité naturelle</li><li>Pendant 2-3 semaines, l'outil envoie et reçoit des emails progressivement (5/jour → 10/jour → 20/jour)</li><li>Après le warm-up, commence ta prospection avec 20-30 emails/jour et augmente progressivement</li></ol>" },

      { id: "3-11", type: "comparison", headers: ["Canal", "Taux de réponse seul", "Taux combiné multi-canal", "Outil recommandé"], rows: [
        { cells: ["Email froid", "3-5%", "15-25% (avec LinkedIn)", "Lemlist, Instantly"] },
        { cells: ["LinkedIn", "5-10%", "Inclus dans le multi-canal", "Waalaxy, PhantomBuster"] },
        { cells: ["Appel telephonique", "2-3%", "Booste si apres email + LinkedIn", "Agent vocal ElevenLabs"] },
      ]},

      { id: "3-12", type: "checklist", title: "Checklist de ta séquence outbound", items: [
        { id: "c1", text: "Séquence de 5 touchpoints sur 12 jours minimum" },
        { id: "c2", text: "Mix email + LinkedIn pour chaque prospect" },
        { id: "c3", text: "Personnalisation IA de chaque message" },
        { id: "c4", text: "Warm-up du domaine email (2 semaines avant)" },
        { id: "c5", text: "Maximum 30-40 emails/jour par adresse au démarrage" },
        { id: "c6", text: "Tracking des ouvertures et réponses" },
        { id: "c7", text: "SPF, DKIM et DMARC configurés sur le domaine" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta séquence outbound complète</h3><p>En utilisant ta liste enrichie des exercices précédents :</p><ol><li>Rédige les 3 templates d'email (accroche, valeur, breakup) avec des variables de personnalisation</li><li>Crée un prompt IA qui personnalise chaque email en fonction des données du prospect</li><li>Crée un script qui récupère les prospects du Sheet via l'API → personnalise via OpenAI → programme l'envoi</li><li>Rédige les 2 messages LinkedIn (connexion + suivi)</li><li>Teste la séquence complète sur 10 prospects (utilise des contacts que tu connais pour tester)</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le taux de réponse moyen d'une séquence multi-canal (email + LinkedIn) ?", options: JSON.stringify(["1-3%", "5-10%", "15-25%", "50-60%"]), correctAnswer: "15-25%", explanation: "Une séquence multi-canal bien exécutée obtient 15-25% de taux de réponse, contre 3-5% pour un email seul. La combinaison de canaux multiplie les chances d'engagement." },
      { type: "true_false", question: "Il est recommandé d'envoyer 200 emails par jour dès le premier jour.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Commencer avec un volume élevé nuit gravement à ta délivrabilité. Démarre avec 30-40 emails/jour et augmente progressivement sur 2-3 semaines (warm-up)." },
      { type: "mcq", question: "Combien de touchpoints faut-il en moyenne avant qu'un prospect accepte un RDV ?", options: JSON.stringify(["1-2", "3-4", "7", "15"]), correctAnswer: "7", explanation: "La règle des 7 touchpoints : il faut en moyenne 7 interactions avant qu'un prospect accepte un rendez-vous. D'où l'importance de séquences multi-touches sur plusieurs semaines." },
      { type: "mcq", question: "Quel est le 'breakup email' ?", options: JSON.stringify(["Le premier email de la séquence", "Un email qui propose une réduction", "Le dernier email qui dit qu'on ne relancera plus", "Un email d'excuses"]), correctAnswer: "Le dernier email qui dit qu'on ne relancera plus", explanation: "Le breakup email est le dernier message de la séquence. Il dit poliment qu'on ne relancera plus. Paradoxalement, c'est souvent celui qui obtient le plus de réponses car il crée un sentiment d'urgence." },
      { type: "true_false", question: "On doit utiliser son domaine principal pour la prospection par email froid.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Utilise toujours un domaine secondaire pour l'email froid. Si ta délivrabilité est affectée par la prospection, ton domaine principal reste intact pour tes communications normales." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 11,
    title: "Projet : machine à leads complète pour un client",
    slug: "v2-projet-machine-a-leads-complete",
    duration: "40 min",
    description: "Projet final : assemble toutes les briques pour construire une machine à leads complète. Du scraping à la conversion, en passant par l'enrichissement et l'outreach automatisé. Le livrable que tu peux vendre à un client.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le brief client" },
      { id: "4-2", type: "text", html: "<p>Ton client est <strong>WebAgency Pro</strong>, une agence web qui vend des sites internet aux PME locales. Leur problème : ils n'ont pas de processus de prospection structuré. Leur commercial passe ses journées à chercher des prospects sur Google, les contacter un par un, et la plupart ne répondent jamais.</p><p>Ton objectif : créer une <strong>machine à leads automatisée</strong> qui génère 50 leads qualifiés par semaine, les enrichit, les contacte automatiquement via une séquence multi-canal, et livre les rendez-vous dans le calendrier du commercial.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Ce projet est vendable :</strong> Une machine à leads comme celle-ci se facture entre 4 000€ et 8 000€ en setup, plus 500€-800€/mois pour la maintenance et l'optimisation. C'est un des services les plus rentables que tu puisses proposer." },

      { id: "4-20", type: "heading", level: 3, text: "Pourquoi ce type de projet est idéal pour toi" },
      { id: "4-21", type: "text", html: "<p>La machine à leads coche toutes les cases du projet idéal pour un freelance IA :</p><ul><li><strong>Revenu récurrent :</strong> Le setup est un one-shot, mais la maintenance mensuelle (optimisation, ajustement des prompts, suivi des KPIs) te génère un revenu récurrent de 500-800€/mois par client.</li><li><strong>Résultats mesurables :</strong> Tu peux prouver le ROI avec des chiffres concrets (nombre de leads, RDV bookés, CA généré). C'est ce qui rend les clients fidèles.</li><li><strong>Effet boule de neige :</strong> Un client satisfait te recommande à d'autres. WebAgency Pro parle de toi à son réseau d'agences. En 6 mois, tu as 5-10 clients récurrents.</li><li><strong>Scalable :</strong> Une fois le système rodé, tu dupliques pour chaque nouveau client en changeant juste l'ICP, les prompts et les templates. Le temps de setup passe de 40h à 10h.</li></ul>" },
      { id: "4-22", type: "callout", variant: "tip", html: "<strong>Calcul rapide :</strong> 8 clients x 600€/mois de maintenance = 4 800€/mois de revenu récurrent. Plus les setups ponctuels. C'est un business solide qui ne dépend pas de toi 40h/semaine." },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture complète de la machine à leads" },
      { id: "4-6", type: "steps", steps: [
        { title: "Module 1 : Scraping automatisé", description: "Un cron job tourne chaque lundi et scrape Google Maps pour les nouvelles entreprises correspondant à l'ICP : PME locales, site web absent ou obsolète, dans un rayon de 100 km. Outscraper fournit les données brutes. L'IA filtre et qualifie. Résultat : 50 prospects/semaine." },
        { title: "Module 2 : Enrichissement cascade", description: "Les 50 prospects passent par la cascade d'enrichissement : Apollo → Dropcontact. L'IA identifie le décideur (gérant ou responsable marketing). Les emails sont vérifiés. Le Google Sheet se remplit automatiquement." },
        { title: "Module 3 : Personnalisation IA", description: "Pour chaque prospect, l'IA visite le site web (si existant) et génère les 3 emails personnalisés + les 2 messages LinkedIn. Chaque message fait référence à un élément spécifique du prospect (son secteur, sa localisation, un problème visible)." },
        { title: "Module 4 : Séquence outbound", description: "Lemlist ou Instantly gère l'envoi des emails selon le calendrier : J1, J5, J12. PhantomBuster ou Waalaxy gère les actions LinkedIn : J3, J8. Le tout est orchestré par un script serveur (cron job) qui déplace les prospects entre les étapes." },
        { title: "Module 5 : Booking et handoff", description: "Quand un prospect répond positivement, l'IA détecte l'intention (via parsing de l'email) et envoie automatiquement un lien Cal.com pour réserver un créneau avec le commercial. Le commercial reçoit une notification avec tout le contexte du prospect." },
      ]},

      { id: "4-23", type: "heading", level: 3, text: "La détection automatique de réponse positive" },
      { id: "4-24", type: "text", html: "<p>Le module 5 (booking automatique) repose sur une fonctionnalité clé : la détection de l'intention dans la réponse du prospect. Voici comment ça fonctionne :</p><ul><li><strong>L'email de réponse</strong> est capté par ton API (via webhook Gmail ou via l'API de Lemlist/Instantly)</li><li><strong>L'IA classifie</strong> la réponse en 4 catégories : positif ('intéressé, envoyez-moi plus d'infos'), RDV ('ok pour un call'), négatif ('pas intéressé'), hors sujet ('absence du bureau')</li><li><strong>Action automatique :</strong> Si positif → envoi du lien Cal.com. Si RDV direct → proposition de créneaux. Si négatif → arrêt de la séquence. Si hors sujet → report de la relance.</li></ul><p>Le prompt de classification est simple mais efficace. Tu fournis la réponse du prospect et l'IA retourne : <code>{category: 'positive', confidence: 0.92, action: 'send_booking_link'}</code>. Quand la confiance est < 0.8, le commercial est notifié pour traiter manuellement.</p>" },

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Les KPIs à suivre" },
      { id: "4-9", type: "comparison", headers: ["KPI", "Objectif minimum", "Bon résultat", "Comment mesurer"], rows: [
        { cells: ["Prospects scrapés/semaine", "50", "100+", "Compteur Google Sheets"] },
        { cells: ["Taux d'enrichissement email", "60%", "85%+", "Emails trouvés / total prospects"] },
        { cells: ["Taux d'ouverture email", "30%", "50%+", "Dashboard Lemlist/Instantly"] },
        { cells: ["Taux de réponse global", "8%", "15%+", "Réponses / emails envoyés"] },
        { cells: ["RDV bookés/semaine", "3", "5+", "Calendrier Cal.com"] },
      ]},

      { id: "4-25", type: "heading", level: 3, text: "Comment optimiser les KPIs semaine après semaine" },
      { id: "4-26", type: "text", html: "<p>La machine à leads est un système vivant. Chaque semaine, tu analyses les KPIs et tu ajustes. Voici les leviers d'optimisation :</p><ul><li><strong>Taux d'ouverture faible (< 30%) :</strong> Le problème est l'objet de l'email. Teste 3-4 variantes d'objets avec de l'A/B testing. Les objets courts et personnalisés performent mieux.</li><li><strong>Taux de réponse faible (< 5%) :</strong> Le contenu de l'email n'est pas assez pertinent ou personnalisé. Revois le prompt IA de personnalisation. Ajoute des données plus spécifiques au prospect.</li><li><strong>Beaucoup de réponses négatives :</strong> L'ICP n'est pas assez précis. Tu contactes des gens qui n'ont pas le problème que tu résous. Affine les critères de qualification.</li><li><strong>Réponses positives mais pas de RDV :</strong> Le processus de booking est trop compliqué. Simplifie : un lien Cal.com avec 3-4 créneaux pré-sélectionnés.</li></ul><p>En 4-6 semaines d'optimisation, tu peux doubler les performances de la machine. C'est exactement pour ça que le client te paie 500-800€/mois.</p>" },

      { id: "4-10", type: "callout", variant: "tip", html: "<strong>Optimisation continue :</strong> La machine à leads n'est pas un produit fini — c'est un système vivant. Chaque semaine, analyse les KPIs, ajuste les prompts IA, teste de nouvelles accroches, affine l'ICP. C'est cette optimisation qui justifie l'abonnement mensuel." },

      { id: "4-27", type: "separator", style: "dots" },
      { id: "4-28", type: "heading", level: 3, text: "Livrer le projet : ce que le client reçoit" },
      { id: "4-29", type: "text", html: "<p>Quand tu livres une machine à leads, le client doit recevoir un package complet et professionnel :</p><ul><li><strong>Le système fonctionnel :</strong> Le pipeline complet qui tourne en autonomie (scraping, enrichissement, personnalisation, envoi, tracking)</li><li><strong>Le dashboard de suivi :</strong> Un Google Sheet ou Notion avec les KPIs mis à jour automatiquement. Le client peut voir en temps réel les résultats.</li><li><strong>La documentation :</strong> Un guide simple (1-2 pages) qui explique comment lire le dashboard, quoi faire si un prospect appelle, et comment te contacter pour les ajustements.</li><li><strong>La période de rodage :</strong> Les 2 premières semaines, tu es en mode actif — tu ajustes quotidiennement. Ensuite, tu passes en mode maintenance (1-2h par semaine).</li><li><strong>Le rapport mensuel :</strong> Chaque mois, un récapitulatif des résultats avec les optimisations proposées. C'est ce rapport qui justifie l'abonnement et renforce la confiance.</li></ul>" },

      { id: "4-11", type: "text", html: "<p>Avec les 5 modules assemblés, tu as une machine qui tourne en autonomie. Le commercial de WebAgency Pro reçoit chaque semaine 3-5 rendez-vous avec des prospects qualifiés, sans avoir passé une seule minute à chercher. C'est ça, la valeur que tu vends.</p>" },

      { id: "4-12", type: "checklist", title: "Checklist du projet terminé", items: [
        { id: "c1", text: "Scraping automatisé (50 prospects/semaine)" },
        { id: "c2", text: "Enrichissement cascade (Apollo → Dropcontact)" },
        { id: "c3", text: "Personnalisation IA (3 emails + 2 messages LinkedIn par prospect)" },
        { id: "c4", text: "Séquence outbound programmée (12 jours, 5 touchpoints)" },
        { id: "c5", text: "Détection de réponse positive + booking automatique" },
        { id: "c6", text: "Dashboard de KPIs dans Google Sheets" },
        { id: "c7", text: "Documentation client pour la maintenance" },
        { id: "c8", text: "Rapport mensuel automatisé" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis la machine à leads</h3><p>Réalise le projet complet (version simplifiée) :</p><ol><li>Définis l'ICP pour une agence web ciblant les PME locales (5 critères)</li><li>Scrape 50 prospects avec Outscraper (Google Maps)</li><li>Enrichis les données avec Apollo.io (version gratuite)</li><li>Crée les 3 templates d'email et un prompt IA de personnalisation</li><li>Assemble le pipeline complet dans un script Node.js : scraping → enrichissement → personnalisation → stockage</li><li>Crée un dashboard de suivi dans Google Sheets avec les KPIs clés</li></ol><p><strong>Livrable :</strong> Le script fonctionnel + le Google Sheet avec les 50 prospects enrichis et les emails personnalisés.</p>",
    quiz: [
      { type: "mcq", question: "Combien de leads qualifiés par semaine la machine doit-elle générer ?", options: JSON.stringify(["10", "50", "200", "1 000"]), correctAnswer: "50", explanation: "L'objectif est de générer 50 leads qualifiés par semaine. C'est un volume réaliste qui, avec un taux de conversion de 10-15%, génère 3-5 rendez-vous hebdomadaires." },
      { type: "true_false", question: "La machine à leads est un produit fini qui ne nécessite aucune optimisation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La machine à leads est un système vivant qui nécessite une optimisation continue : ajustement des prompts, test de nouvelles accroches, affinage de l'ICP. C'est ce qui justifie l'abonnement mensuel." },
      { type: "mcq", question: "Combien peut-on facturer une machine à leads en setup ?", options: JSON.stringify(["200€ – 500€", "1 000€ – 2 000€", "4 000€ – 8 000€", "50 000€+"]), correctAnswer: "4 000€ – 8 000€", explanation: "Une machine à leads complète (scraping + enrichissement + personnalisation + séquence + booking) se facture entre 4 000€ et 8 000€ en setup, plus 500-800€/mois pour la maintenance." },
      { type: "mcq", question: "Quel est le taux d'ouverture email minimum à viser ?", options: JSON.stringify(["10%", "20%", "30%", "70%"]), correctAnswer: "30%", explanation: "Un taux d'ouverture de 30% est le minimum acceptable. Un bon résultat est 50%+. En dessous de 30%, il faut retravailler les objets d'email et la délivrabilité." },
      { type: "true_false", question: "L'IA peut détecter automatiquement une réponse positive d'un prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'IA peut parser le contenu d'une réponse email et détecter si c'est une réponse positive (intéressé, veut un RDV), négative (pas intéressé) ou neutre (demande d'info). Cela permet d'automatiser le booking." },
      { type: "mcq", question: "Combien de RDV par semaine est un bon résultat pour cette machine ?", options: JSON.stringify(["1", "3-5", "20", "50"]), correctAnswer: "3-5", explanation: "3 à 5 RDV par semaine est un bon résultat. Avec 50 prospects contactés et un taux de conversion de 8-15%, c'est un volume réaliste et suffisant pour alimenter un commercial." },
    ],
  },
];
