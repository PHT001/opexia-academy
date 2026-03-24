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
      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Workflow de scraping intelligent avec IA" },
      { id: "1-9", type: "steps", steps: [
        { title: "Définir le profil de prospect idéal (ICP)", description: "Avant de scraper, définis précisément qui tu cherches. Exemple : 'Restaurants de plus de 20 avis Google dans un rayon de 50 km, avec un site web mais sans système de réservation en ligne.' Plus ton ICP est précis, plus tes leads seront qualifiés." },
        { title: "Collecter les données brutes", description: "Utilise un outil de scraping (Outscraper pour Google Maps, PhantomBuster pour LinkedIn) pour collecter les données brutes. Paramètre bien les filtres : localisation, catégorie, nombre d'avis minimum, etc." },
        { title: "Nettoyer et qualifier avec l'IA", description: "Envoie les données brutes à GPT-4o pour les nettoyer et qualifier. L'IA vérifie les doublons, normalise les formats (téléphone, adresse), et attribue un score de qualification basé sur tes critères ICP." },
        { title: "Enrichir les profils", description: "Pour chaque prospect qualifié, l'IA visite le site web et extrait des informations supplémentaires : technologies utilisées, taille de l'équipe, offres actuelles, problèmes potentiels que tu pourrais résoudre." },
        { title: "Exporter la liste finale", description: "La liste nettoyée, qualifiée et enrichie est exportée dans un Google Sheet ou un CRM. Chaque ligne contient toutes les informations nécessaires pour une approche personnalisée." },
      ]},
      { id: "1-10", type: "callout", variant: "tip", html: "<strong>Astuce : les signaux d'achat.</strong> Une entreprise qui recrute, qui vient de lever des fonds ou qui a un site web obsolète est un prospect chaud. L'IA peut détecter ces signaux automatiquement en analysant les données collectées." },

      { id: "1-11", type: "text", html: "<p>Le scraping intelligent est la fondation de toute machine à leads. Dans les leçons suivantes, tu vas apprendre à enrichir ces données (emails, téléphones) et à créer des séquences d'outreach automatisées. Mais tout commence ici : une liste de prospects propre et qualifiée.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "100 prospects qualifiés > 10 000 contacts non ciblés" },
        { id: "c2", text: "Toujours définir l'ICP avant de scraper" },
        { id: "c3", text: "L'IA nettoie, qualifie et enrichit les données brutes" },
        { id: "c4", text: "Respecter le RGPD : uniquement des données B2B professionnelles publiques" },
        { id: "c5", text: "Les signaux d'achat augmentent drastiquement les taux de conversion" },
      ]},
    ]),
    exercise: "<h3>Exercice : Scrape et qualifie 50 prospects</h3><p>Choisis un secteur (restaurants, agences immo, garages, salons de coiffure) et :</p><ol><li>Définis ton ICP en 5 critères précis</li><li>Utilise Outscraper (version gratuite) pour scraper 50 entreprises de Google Maps dans ta ville</li><li>Crée un prompt GPT pour qualifier chaque prospect : score de 1-10 basé sur tes critères ICP</li><li>Dans Make, crée un scénario qui prend le CSV → envoie à OpenAI pour qualification → écrit les résultats dans un Google Sheet</li><li>Analyse les résultats : combien de prospects ont un score supérieur à 7 ?</li></ol>",
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
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Le coût de l'enrichissement :</strong> Compter entre 0,02€ et 0,10€ par contact enrichi selon les outils. Pour 500 prospects, le budget est de 10€ à 50€ — un investissement dérisoire par rapport à la valeur d'un seul client gagné." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Les outils d'enrichissement" },
      { id: "2-6", type: "comparison", headers: ["Outil", "Spécialité", "Prix", "Fiabilité"], rows: [
        { cells: ["Hunter.io", "Recherche d'emails professionnels par domaine", "Gratuit (25 req/mois) puis 49€/mois", "85-90% de fiabilité"] },
        { cells: ["Dropcontact", "Enrichissement email + téléphone, RGPD compliant", "24€/mois pour 1 000 contacts", "90%+ de fiabilité"] },
        { cells: ["Apollo.io", "Base de données B2B complète + séquences email", "Gratuit (limite) puis 49$/mois", "80-85% de fiabilité"] },
        { cells: ["Clearbit (API)", "Enrichissement entreprise (CA, employés, techno)", "Variable selon usage", "Très haute pour les données entreprise"] },
        { cells: ["Kaspr", "Extension LinkedIn pour emails + téléphones", "Gratuit (5 crédits/mois) puis 49€/mois", "85% de fiabilité"] },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le workflow d'enrichissement automatisé" },
      { id: "2-9", type: "steps", steps: [
        { title: "Étape 1 : Enrichissement email", description: "Envoie le nom de domaine de l'entreprise à Hunter.io ou Dropcontact. L'outil retourne les emails trouvés pour ce domaine avec un score de confiance. Filtre les résultats avec un score > 80%." },
        { title: "Étape 2 : Identification du décideur", description: "Si tu as plusieurs emails pour un domaine, utilise l'IA pour identifier le bon contact. Donne à GPT la liste des personnes trouvées et demande : 'Qui est le décideur le plus pertinent pour vendre un service de [X] ?' L'IA choisit basé sur le poste et la séniorité." },
        { title: "Étape 3 : Enrichissement entreprise", description: "Utilise Clearbit ou Pappers pour enrichir les données entreprise : nombre d'employés, chiffre d'affaires, secteur d'activité, technologies utilisées sur le site web. Ces données alimentent la personnalisation du message." },
        { title: "Étape 4 : Vérification email", description: "Avant d'envoyer, vérifie chaque email avec un outil comme ZeroBounce ou NeverBounce. Un email invalide rebondit, ce qui nuit à ta délivrabilité. Vise un taux de validité > 95%." },
        { title: "Étape 5 : Score final de qualité", description: "L'IA attribue un score final basé sur la complétude des données : email vérifié (+30pts), téléphone trouvé (+20pts), CA connu (+15pts), signal d'achat détecté (+25pts), email du décideur (+10pts). Score max : 100." },
      ]},
      { id: "2-10", type: "callout", variant: "tip", html: "<strong>Combine les outils :</strong> Aucun outil n'a 100% de couverture. La stratégie gagnante est de cascader : essaie Hunter.io d'abord, puis Dropcontact pour les emails non trouvés, puis Apollo pour les restants. Tu passes de 60% à 85%+ de couverture." },

      { id: "2-11", type: "text", html: "<p>L'enrichissement est une étape technique mais cruciale. Une base bien enrichie, c'est un taux de réponse 5x supérieur. Dans la prochaine leçon, tu vas voir comment exploiter cette base avec des séquences d'outreach automatisées.</p>" },

      { id: "2-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "L'enrichissement transforme une liste brute en base de données actionnable" },
        { id: "c2", text: "Combiner plusieurs outils pour maximiser la couverture" },
        { id: "c3", text: "Toujours vérifier les emails avant envoi (ZeroBounce, NeverBounce)" },
        { id: "c4", text: "L'IA identifie le bon décideur dans chaque entreprise" },
        { id: "c5", text: "Budget enrichissement : 0,02€ à 0,10€ par contact" },
      ]},
    ]),
    exercise: "<h3>Exercice : Enrichis ta liste de 50 prospects</h3><p>Reprends la liste de 50 prospects de la leçon précédente et :</p><ol><li>Crée un compte Hunter.io (gratuit, 25 recherches/mois) et un compte Dropcontact (essai gratuit)</li><li>Dans Make, crée un scénario qui prend chaque prospect → cherche l'email via Hunter.io → si pas trouvé, essaie Dropcontact</li><li>Utilise GPT pour identifier le décideur quand plusieurs contacts sont trouvés</li><li>Vérifie les emails trouvés avec un outil de vérification</li><li>Calcule ton taux de couverture : combien de prospects ont un email vérifié ?</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le taux d'ouverture typique d'un email envoyé à contact@entreprise.com ?", options: JSON.stringify(["5%", "20%", "35%", "50%"]), correctAnswer: "5%", explanation: "Les emails génériques (contact@, info@) ont un taux d'ouverture d'environ 5%. Un email envoyé au décideur directement (prenom.nom@entreprise.com) monte à 30-40%." },
      { type: "true_false", question: "Un seul outil d'enrichissement suffit pour obtenir 100% des emails.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Aucun outil n'a 100% de couverture. La stratégie gagnante est de cascader : Hunter.io → Dropcontact → Apollo. Cela permet de passer de 60% à 85%+ de couverture." },
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
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Personnalisation à grande échelle avec l'IA" },
      { id: "3-9", type: "text", html: "<p>La personnalisation est ce qui fait la différence entre un spam et un email qui obtient une réponse. Mais personnaliser 200 emails manuellement prendrait des jours. L'IA le fait en minutes.</p><p>Le workflow est simple : pour chaque prospect, l'IA reçoit les données enrichies (nom, entreprise, secteur, site web, taille, problèmes identifiés) et génère une version personnalisée de chaque email de la séquence. Le template de base reste le même, mais l'accroche, les exemples et les chiffres sont adaptés à chaque prospect.</p>" },
      { id: "3-10", type: "callout", variant: "warning", html: "<strong>Délivrabilité email :</strong> N'envoie pas plus de 30-40 emails/jour par adresse email au début. Augmente progressivement (warm-up). Utilise un domaine secondaire pour la prospection (pas ton domaine principal). Et space tes envois de 2-5 minutes entre chaque email." },

      { id: "3-11", type: "comparison", headers: ["Canal", "Taux de réponse seul", "Taux combiné multi-canal", "Outil recommandé"], rows: [
        { cells: ["Email froid", "3-5%", "15-25% (avec LinkedIn)", "Lemlist, Instantly"] },
        { cells: ["LinkedIn", "5-10%", "Inclus dans le multi-canal", "Waalaxy, PhantomBuster"] },
        { cells: ["Appel téléphonique", "2-3%", "Boosté si après email + LinkedIn", "Agent vocal Vapi"] },
      ]},

      { id: "3-12", type: "checklist", title: "Checklist de ta séquence outbound", items: [
        { id: "c1", text: "Séquence de 5 touchpoints sur 12 jours minimum" },
        { id: "c2", text: "Mix email + LinkedIn pour chaque prospect" },
        { id: "c3", text: "Personnalisation IA de chaque message" },
        { id: "c4", text: "Warm-up du domaine email (2 semaines avant)" },
        { id: "c5", text: "Maximum 30-40 emails/jour par adresse au démarrage" },
        { id: "c6", text: "Tracking des ouvertures et réponses" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta séquence outbound complète</h3><p>En utilisant ta liste enrichie des exercices précédents :</p><ol><li>Rédige les 3 templates d'email (accroche, valeur, breakup) avec des variables de personnalisation</li><li>Crée un prompt IA qui personnalise chaque email en fonction des données du prospect</li><li>Dans Make, crée un scénario qui prend les prospects du Sheet → personnalise via OpenAI → programme l'envoi</li><li>Rédige les 2 messages LinkedIn (connexion + suivi)</li><li>Teste la séquence complète sur 10 prospects (utilise des contacts que tu connais pour tester)</li></ol>",
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
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture complète de la machine à leads" },
      { id: "4-6", type: "steps", steps: [
        { title: "Module 1 : Scraping automatisé", description: "Un scénario Make tourne chaque lundi et scrape Google Maps pour les nouvelles entreprises correspondant à l'ICP : PME locales, site web absent ou obsolète, dans un rayon de 100 km. Outscraper fournit les données brutes. L'IA filtre et qualifie. Résultat : 50 prospects/semaine." },
        { title: "Module 2 : Enrichissement cascade", description: "Les 50 prospects passent par la cascade d'enrichissement : Hunter.io → Dropcontact → Apollo. L'IA identifie le décideur (gérant ou responsable marketing). Les emails sont vérifiés. Le Google Sheet se remplit automatiquement." },
        { title: "Module 3 : Personnalisation IA", description: "Pour chaque prospect, l'IA visite le site web (si existant) et génère les 3 emails personnalisés + les 2 messages LinkedIn. Chaque message fait référence à un élément spécifique du prospect (son secteur, sa localisation, un problème visible)." },
        { title: "Module 4 : Séquence outbound", description: "Lemlist ou Instantly gère l'envoi des emails selon le calendrier : J1, J5, J12. PhantomBuster ou Waalaxy gère les actions LinkedIn : J3, J8. Le tout est orchestré par Make qui déplace les prospects entre les étapes." },
        { title: "Module 5 : Booking et handoff", description: "Quand un prospect répond positivement, l'IA détecte l'intention (via parsing de l'email) et envoie automatiquement un lien Cal.com pour réserver un créneau avec le commercial. Le commercial reçoit une notification avec tout le contexte du prospect." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Les KPIs à suivre" },
      { id: "4-9", type: "comparison", headers: ["KPI", "Objectif minimum", "Bon résultat", "Comment mesurer"], rows: [
        { cells: ["Prospects scrapés/semaine", "50", "100+", "Compteur Google Sheets"] },
        { cells: ["Taux d'enrichissement email", "60%", "85%+", "Emails trouvés / total prospects"] },
        { cells: ["Taux d'ouverture email", "30%", "50%+", "Dashboard Lemlist/Instantly"] },
        { cells: ["Taux de réponse global", "8%", "15%+", "Réponses / emails envoyés"] },
        { cells: ["RDV bookés/semaine", "3", "5+", "Calendrier Cal.com"] },
      ]},
      { id: "4-10", type: "callout", variant: "tip", html: "<strong>Optimisation continue :</strong> La machine à leads n'est pas un produit fini — c'est un système vivant. Chaque semaine, analyse les KPIs, ajuste les prompts IA, teste de nouvelles accroches, affine l'ICP. C'est cette optimisation qui justifie l'abonnement mensuel." },

      { id: "4-11", type: "text", html: "<p>Avec les 5 modules assemblés, tu as une machine qui tourne en autonomie. Le commercial de WebAgency Pro reçoit chaque semaine 3-5 rendez-vous avec des prospects qualifiés, sans avoir passé une seule minute à chercher. C'est ça, la valeur que tu vends.</p>" },

      { id: "4-12", type: "checklist", title: "Checklist du projet terminé", items: [
        { id: "c1", text: "Scraping automatisé (50 prospects/semaine)" },
        { id: "c2", text: "Enrichissement cascade (Hunter → Dropcontact → Apollo)" },
        { id: "c3", text: "Personnalisation IA (3 emails + 2 messages LinkedIn par prospect)" },
        { id: "c4", text: "Séquence outbound programmée (12 jours, 5 touchpoints)" },
        { id: "c5", text: "Détection de réponse positive + booking automatique" },
        { id: "c6", text: "Dashboard de KPIs dans Google Sheets" },
        { id: "c7", text: "Documentation client pour la maintenance" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis la machine à leads</h3><p>Réalise le projet complet (version simplifiée) :</p><ol><li>Définis l'ICP pour une agence web ciblant les PME locales (5 critères)</li><li>Scrape 50 prospects avec Outscraper (Google Maps)</li><li>Enrichis les données avec Hunter.io (version gratuite : 25 contacts)</li><li>Crée les 3 templates d'email et un prompt IA de personnalisation</li><li>Dans Make, assemble le scénario complet : scraping → enrichissement → personnalisation → stockage</li><li>Crée un dashboard de suivi dans Google Sheets avec les KPIs clés</li></ol><p><strong>Livrable :</strong> Le scénario Make fonctionnel + le Google Sheet avec les 50 prospects enrichis et les emails personnalisés.</p>",
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
