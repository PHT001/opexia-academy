// ═══════════════════════════════════════════════════
// MODULE 16 — Se structurer pour réussir
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_16_LESSONS = [
  // ─── LEÇON 1 : Ton setup de travail ───
  {
    order: 1,
    module: 16,
    title: "Ton setup de travail : outils, organisation, routine quotidienne",
    slug: "v2-setup-travail-outils-routine",
    duration: "20 min",
    description: "Construis un environnement de travail efficace : choix des outils, organisation des fichiers, routine quotidienne. Un bon setup, c'est 30% de productivité en plus.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Ton setup détermine ta productivité" },
      { id: "1-2", type: "text", html: "<p>Un freelance mal organisé passe 30% de son temps à chercher des fichiers, à jongler entre les outils et à rattraper des oublis. Un freelance bien structuré automatise le répétitif et se concentre sur ce qui compte : livrer de la valeur.</p><p>Dans cette leçon, on va construire ton <strong>système de travail complet</strong> — des outils que tu utilises jusqu'à ta routine quotidienne.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Principe clé :</strong> Le meilleur outil est celui que tu utilises vraiment. Ne passe pas 3 jours à comparer 15 apps de gestion de projet. Choisis, utilise, ajuste." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les outils essentiels du freelance IA" },
      { id: "1-6", type: "comparison", headers: ["Catégorie", "Outil recommandé", "Alternative"], rows: [
        { cells: ["Gestion de projet", "Notion", "Trello, GitHub Projects"] },
        { cells: ["Communication client", "Discord", "WhatsApp Business, email"] },
        { cells: ["Visioconférence", "Google Meet", "Zoom, Cal.com"] },
        { cells: ["Facturation", "Abby / Freebe", "Henrri, Indy"] },
        { cells: ["Stockage fichiers", "Google Drive", "Dropbox, iCloud"] },
        { cells: ["Prise de notes", "Obsidian / Notion", "Apple Notes, Logseq"] },
        { cells: ["Gestion du temps", "Toggl Track", "Clockify, RescueTime"] },
      ]},
      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Organiser tes fichiers projet" },
      { id: "1-9", type: "text", html: "<p>Chaque projet client doit avoir la même structure de dossiers. Quand un client t'appelle, tu dois pouvoir retrouver n'importe quel document en moins de 30 secondes.</p><pre><code>📁 Clients/\n  📁 NomClient_2024/\n    📁 01_Brief/          # Brief initial, cahier des charges\n    📁 02_Design/         # Maquettes, wireframes\n    📁 03_Dev/            # Repo Git (lien), notes techniques\n    📁 04_Livrables/      # Exports, accès fournis\n    📁 05_Facturation/    # Devis, factures, contrats\n    📁 06_Communication/  # Emails importants, CR de réunion</code></pre>" },

      { id: "1-10", type: "heading", level: 2, text: "Ta routine quotidienne" },
      { id: "1-11", type: "steps", steps: [
        { title: "Matin (15 min) : Review", description: "Ouvre ta liste de tâches. Regarde ton agenda. Identifie les 3 priorités du jour. Réponds aux messages urgents." },
        { title: "Matinée : Deep Work", description: "Bloque 2-3h sans interruption pour le travail technique (code, design, création). Notifications coupées, téléphone en silencieux." },
        { title: "Midi : Communication", description: "Réponds aux emails et messages clients. Fais les appels et meetings prévus." },
        { title: "Après-midi : Tâches secondaires", description: "Admin, facturation, prospection, formation continue. Les tâches qui demandent moins de concentration." },
        { title: "Fin de journée (10 min) : Clôture", description: "Note ce qui a été fait aujourd'hui. Prépare la liste de demain. Déconnecte-toi proprement." },
      ]},

      { id: "1-12", type: "callout", variant: "info", html: "<strong>Le piège du freelance :</strong> Sans routine, tu vas travailler de 10h à 23h sans rien terminer proprement. Une routine structurée te permet de travailler moins mais mieux, et de vraiment couper le soir." },
    ]),
    exercise: "<h3>Exercice : Construire ton setup</h3><p>Mets en place ton environnement de travail :</p><ol><li>Choisis tes outils dans chaque catégorie et installe-les</li><li>Crée ta structure de dossiers pour les projets clients</li><li>Écris ta routine quotidienne idéale avec des horaires précis</li><li>Bloque des créneaux de deep work dans ton agenda pour la semaine prochaine</li><li>Configure les notifications : désactive celles qui ne sont pas urgentes</li></ol>",
    quiz: [
      { type: "mcq", question: "Combien de temps un freelance mal organisé perd-il en moyenne à chercher des fichiers et jongler entre les outils ?", options: JSON.stringify(["5% de son temps", "15% de son temps", "30% de son temps", "50% de son temps"]), correctAnswer: "30% de son temps", explanation: "Un freelance mal organisé peut perdre jusqu'à 30% de sa journée en inefficacités : chercher un document, se rappeler où en est un projet, retrouver un échange client. La structure élimine ce gaspillage." },
      { type: "true_false", question: "Il est recommandé de couper les notifications pendant les sessions de deep work.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le deep work nécessite une concentration ininterrompue. Chaque notification casse ta concentration et il faut en moyenne 23 minutes pour retrouver le même niveau de focus." },
      { type: "mcq", question: "Quelle est la meilleure approche pour choisir ses outils de travail ?", options: JSON.stringify(["Comparer tous les outils pendant une semaine", "Choisir le plus cher car c'est le meilleur", "Choisir rapidement, utiliser, et ajuster si nécessaire", "Utiliser uniquement des outils gratuits"]), correctAnswer: "Choisir rapidement, utiliser, et ajuster si nécessaire", explanation: "Le piège est de passer trop de temps à comparer les outils au lieu de travailler. Choisis un outil qui semble bien, commence à l'utiliser, et change seulement si tu identifies un vrai problème." },
      { type: "mcq", question: "Quel moment de la journée est idéal pour le deep work (travail technique) ?", options: JSON.stringify(["Juste après le déjeuner", "Le matin, quand l'énergie est au maximum", "En fin de journée", "Entre deux réunions"]), correctAnswer: "Le matin, quand l'énergie est au maximum", explanation: "Le matin est généralement le moment où ta concentration et ton énergie sont au plus haut. Réserve ce créneau pour le travail technique complexe et pousse la communication à l'après-midi." },
      { type: "true_false", question: "Chaque projet client devrait avoir la même structure de dossiers.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Une structure identique pour chaque projet permet de retrouver n'importe quel document en quelques secondes, quel que soit le client. Cela réduit la charge mentale et évite les oublis." },
    ],
  },

  // ─── LEÇON 2 : Gérer ton temps ───
  {
    order: 2,
    module: 16,
    title: "Gérer ton temps : priorités, deep work et productivité",
    slug: "v2-gerer-temps-priorites-productivite",
    duration: "20 min",
    description: "Apprends les techniques de gestion du temps qui marchent vraiment pour les freelances : matrice d'Eisenhower, time blocking, loi de Parkinson et deep work.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le temps est ta ressource la plus précieuse" },
      { id: "2-2", type: "text", html: "<p>En freelance, tu es payé pour ton temps et ton expertise. Chaque heure gaspillée est une heure non facturée. Chaque tâche non priorisée risque de te faire travailler sur le mauvais sujet pendant que l'urgent attend.</p><p>La gestion du temps n'est pas une question de travailler plus. C'est une question de <strong>travailler sur les bonnes choses, au bon moment</strong>.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Loi de Parkinson :</strong> Le travail s'étend pour occuper tout le temps disponible. Si tu te donnes une semaine pour une tâche de 2 jours, tu mettras une semaine. Fixe des deadlines serrées." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "La matrice d'Eisenhower : prioriser comme un pro" },
      { id: "2-6", type: "comparison", headers: ["", "Urgent", "Non urgent"], rows: [
        { cells: ["Important", "FAIRE immédiatement (bug en prod, deadline client)", "PLANIFIER (prospection, formation, stratégie)"] },
        { cells: ["Non important", "DÉLÉGUER ou automatiser (emails, admin)", "ÉLIMINER (scrolling, réunions inutiles)"] },
      ]},
      { id: "2-7", type: "text", html: "<p>La plupart des freelances passent leur temps dans le cadrant Urgent + Non important (emails, messages, admin). Le secret de la croissance est de passer plus de temps dans le cadrant <strong>Important + Non urgent</strong> : prospection, formation, automatisation.</p>" },
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Le Time Blocking : structure ta journée" },
      { id: "2-10", type: "text", html: "<p>Le time blocking consiste à attribuer à chaque créneau de ta journée une tâche spécifique. Au lieu d'une to-do list interminable, tu as un plan d'action heure par heure.</p><pre><code>09h00-09h15 : Review + planification\n09h15-12h00 : Deep Work (dev / création)\n12h00-13h00 : Pause déjeuner\n13h00-14h00 : Emails + communication client\n14h00-16h00 : Tâches secondaires / meetings\n16h00-17h00 : Prospection / formation\n17h00-17h15 : Clôture de journée</code></pre>" },

      { id: "2-11", type: "heading", level: 2, text: "Le Deep Work : ta superpower" },
      { id: "2-12", type: "steps", steps: [
        { title: "Bloque un créneau de 2-3h minimum", description: "Le deep work nécessite un temps continu. Moins de 2h, tu n'as pas le temps d'entrer en flow state." },
        { title: "Élimine les distractions", description: "Mode avion sur le téléphone. Ferme Discord, emails, réseaux sociaux. Utilise un bloqueur comme Focus ou Cold Turkey." },
        { title: "Une seule tâche", description: "Pas de multitasking. Choisis LA tâche la plus importante et travaille uniquement dessus." },
        { title: "Protège ce créneau", description: "Refuse les meetings pendant tes créneaux de deep work. Ce temps est sacré et non négociable." },
      ]},

      { id: "2-13", type: "callout", variant: "tip", html: "<strong>La règle des 2 minutes :</strong> Si une tâche prend moins de 2 minutes, fais-la immédiatement. Si elle prend plus, ajoute-la à ta liste et planifie-la dans un créneau." },

      { id: "2-14", type: "checklist", title: "Habitudes de productivité", items: [
        { id: "c1", text: "3 priorités maximum définies chaque matin" },
        { id: "c2", text: "Créneau de deep work bloqué dans l'agenda" },
        { id: "c3", text: "Téléphone en silencieux pendant le deep work" },
        { id: "c4", text: "Emails consultés 2-3 fois par jour max (pas en continu)" },
        { id: "c5", text: "Review de fin de journée de 10 minutes" },
      ]},
    ]),
    exercise: "<h3>Exercice : Optimiser ta semaine</h3><p>Mets en place une semaine optimisée :</p><ol><li>Liste toutes tes tâches actuelles et classe-les dans la matrice d'Eisenhower</li><li>Crée ton planning type avec du time blocking pour la semaine prochaine</li><li>Bloque au minimum 2h de deep work chaque matin</li><li>Identifie 3 distractions récurrentes et trouve une solution pour chacune</li><li>À la fin de la semaine, compare ta productivité avec la semaine précédente</li></ol>",
    quiz: [
      { type: "mcq", question: "Selon la matrice d'Eisenhower, que faut-il faire des tâches importantes mais non urgentes ?", options: JSON.stringify(["Les faire immédiatement", "Les planifier dans l'agenda", "Les déléguer", "Les éliminer"]), correctAnswer: "Les planifier dans l'agenda", explanation: "Les tâches importantes et non urgentes (prospection, formation, stratégie) doivent être planifiées. C'est le cadrant le plus important pour la croissance à long terme, mais souvent négligé au profit de l'urgent." },
      { type: "true_false", question: "Le multitasking augmente la productivité.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le multitasking réduit la productivité de 40% en moyenne. Le cerveau ne fait pas vraiment deux choses en même temps — il bascule entre les tâches, et chaque basculement coûte du temps et de l'énergie." },
      { type: "mcq", question: "Quelle est la durée minimale recommandée pour une session de deep work ?", options: JSON.stringify(["30 minutes", "1 heure", "2 heures", "4 heures"]), correctAnswer: "2 heures", explanation: "Il faut environ 20-30 minutes pour entrer en état de flow. Avec un créneau de 2h minimum, tu as assez de temps pour atteindre le flow et y rester suffisamment pour produire un travail de qualité." },
      { type: "mcq", question: "Que dit la loi de Parkinson ?", options: JSON.stringify(["80% des résultats viennent de 20% des efforts", "Le travail s'étend pour occuper tout le temps disponible", "La productivité double avec la bonne musique", "Chaque tâche prend 2 fois plus de temps que prévu"]), correctAnswer: "Le travail s'étend pour occuper tout le temps disponible", explanation: "La loi de Parkinson stipule que le travail s'expand pour remplir le temps alloué. Solution : fixe des deadlines serrées et réalistes pour chaque tâche." },
      { type: "true_false", question: "Il est recommandé de consulter ses emails en continu tout au long de la journée.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Consulter les emails en continu est une source majeure de distraction. Il est préférable de les consulter 2 à 3 fois par jour à des moments planifiés pour garder le focus sur le travail productif." },
      { type: "mcq", question: "Selon la règle des 2 minutes, que fais-tu d'une tâche qui prend moins de 2 minutes ?", options: JSON.stringify(["Tu la planifies pour demain", "Tu la fais immédiatement", "Tu la délègues", "Tu l'ajoutes à ta to-do list"]), correctAnswer: "Tu la fais immédiatement", explanation: "Si une tâche prend moins de 2 minutes, le temps de la noter et la planifier est supérieur au temps de la faire. Fais-la tout de suite et libère ton esprit." },
    ],
  },

  // ─── LEÇON 3 : Ton CRM ───
  {
    order: 3,
    module: 16,
    title: "Ton CRM : suivre tes prospects et clients proprement",
    slug: "v2-crm-suivi-prospects-clients",
    duration: "20 min",
    description: "Mets en place un CRM simple mais efficace pour suivre tes prospects, gérer tes relations clients et ne jamais perdre une opportunité commerciale.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Pourquoi tu as besoin d'un CRM (même seul)" },
      { id: "3-2", type: "text", html: "<p>Tu discutes avec 5 prospects en parallèle. L'un t'a demandé un devis il y a 3 jours — tu as oublié de le relancer. Un autre était intéressé mais tu as perdu son email. Un client actif attend une facture que tu n'as pas envoyée.</p><p>Sans CRM, tu <strong>perds de l'argent</strong>. Des prospects tombent dans l'oubli, des relances ne sont jamais faites, des opportunités disparaissent.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>CRM = Customer Relationship Management.</strong> En tant que freelance, pas besoin de Salesforce. Un simple tableau Notion ou Google Sheets suffit pour suivre 20-50 contacts. Mieux encore : construis ton propre mini-CRM avec Supabase et Claude Code." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Les colonnes essentielles de ton CRM" },
      { id: "3-6", type: "comparison", headers: ["Colonne", "Description", "Exemple"], rows: [
        { cells: ["Nom / Entreprise", "Identité du prospect ou client", "Marie Dupont - Boulangerie Martin"] },
        { cells: ["Statut", "Où en est la relation", "Prospect / Devis envoyé / Client actif / Client passé"] },
        { cells: ["Canal d'acquisition", "Comment tu l'as trouvé", "LinkedIn / Bouche-à-oreille / Cold email"] },
        { cells: ["Dernier contact", "Date du dernier échange", "15 mars 2024"] },
        { cells: ["Prochaine action", "Ce que tu dois faire", "Relancer dans 3 jours / Envoyer le devis"] },
        { cells: ["Valeur estimée", "Montant potentiel du deal", "2 500 €"] },
        { cells: ["Notes", "Contexte important", "Veut un chatbot pour son site, budget limité"] },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Le pipeline commercial : les étapes" },
      { id: "3-9", type: "steps", steps: [
        { title: "Lead identifié", description: "Tu as trouvé un prospect potentiel (LinkedIn, recommandation, événement). Tu notes ses coordonnées dans le CRM." },
        { title: "Premier contact", description: "Tu as envoyé un message ou eu un premier échange. Tu notes la date et le canal." },
        { title: "Qualification", description: "Tu as compris son besoin, son budget et son timing. Tu décides si ça vaut le coup de proposer une offre." },
        { title: "Devis envoyé", description: "Tu as envoyé une proposition commerciale. Tu planifies une relance à J+3 si pas de réponse." },
        { title: "Négociation", description: "Le prospect a des questions ou veut ajuster le périmètre. Tu adaptes ton offre." },
        { title: "Gagné / Perdu", description: "Le prospect signe (bravo !) ou refuse. Dans les deux cas, note la raison pour apprendre." },
      ]},

      { id: "3-10", type: "heading", level: 2, text: "Les règles de relance" },
      { id: "3-11", type: "text", html: "<p>La relance est l'étape que la plupart des freelances négligent. Pourtant, la majorité des deals se concluent après la <strong>2e ou 3e relance</strong>.</p><ul><li><strong>J+3 après un devis :</strong> relance douce — 'As-tu eu le temps de regarder ma proposition ?'</li><li><strong>J+7 :</strong> relance avec valeur ajoutée — partage un article ou un conseil lié à son besoin</li><li><strong>J+14 :</strong> dernière relance — 'Je comprends si le timing n'est pas bon. N'hésite pas à me recontacter quand tu es prêt.'</li></ul>" },

      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Automatisation :</strong> Utilise les rappels Notion ou Google Calendar pour ne jamais oublier une relance. Mieux encore : automatise les relances email avec un outil comme Lemlist ou Brevo." },
    ]),
    exercise: "<h3>Exercice : Créer ton CRM</h3><p>Mets en place ton système de suivi :</p><ol><li>Crée un tableau Notion (ou Google Sheets) avec les colonnes essentielles</li><li>Ajoute tes 10 derniers contacts professionnels (prospects, clients, rencontres)</li><li>Attribue un statut à chaque contact dans le pipeline</li><li>Identifie 3 contacts qui méritent une relance et planifie-la</li><li>Configure un rappel hebdomadaire pour mettre à jour ton CRM</li></ol>",
    quiz: [
      { type: "mcq", question: "Après combien de jours faut-il relancer un prospect à qui tu as envoyé un devis ?", options: JSON.stringify(["1 jour", "3 jours", "2 semaines", "1 mois"]), correctAnswer: "3 jours", explanation: "La première relance devrait se faire 3 jours après l'envoi du devis. C'est assez rapide pour rester dans l'esprit du prospect sans être insistant." },
      { type: "true_false", question: "La plupart des deals se concluent dès le premier contact, sans relance.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La majorité des deals se concluent après la 2e ou 3e relance. Les prospects sont occupés et oublient. La relance est une étape normale du processus commercial, pas du harcèlement." },
      { type: "mcq", question: "Quel outil est recommandé comme CRM simple pour un freelance ?", options: JSON.stringify(["Salesforce", "Notion ou Google Sheets", "SAP", "Oracle CRM"]), correctAnswer: "Notion ou Google Sheets", explanation: "Pour un freelance avec 20-50 contacts, un simple tableau Notion ou Google Sheets est plus que suffisant. Les CRM complexes comme Salesforce sont conçus pour des équipes commerciales de grande taille." },
      { type: "mcq", question: "Que signifie 'qualifier' un prospect ?", options: JSON.stringify(["Vérifier son identité", "Comprendre son besoin, son budget et son timing pour décider si ça vaut le coup", "Lui envoyer un devis", "L'ajouter à sa newsletter"]), correctAnswer: "Comprendre son besoin, son budget et son timing pour décider si ça vaut le coup", explanation: "La qualification consiste à évaluer si le prospect est un bon fit : a-t-il un vrai besoin, le budget nécessaire, et un timing compatible ? Cela évite de perdre du temps sur des prospects qui ne signeront jamais." },
      { type: "true_false", question: "Quand un prospect refuse, il est inutile de noter la raison dans le CRM.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Noter la raison du refus est essentiel pour apprendre : prix trop élevé ? Timing pas bon ? Besoin différent ? Ces informations t'aident à améliorer ton offre et ton approche commerciale." },
    ],
  },

  // ─── LEÇON 4 : Ton image pro ───
  {
    order: 4,
    module: 16,
    title: "Ton image pro : site perso, LinkedIn, portfolio",
    slug: "v2-image-pro-site-linkedin-portfolio",
    duration: "20 min",
    description: "Construis une image professionnelle qui inspire confiance : site personnel, profil LinkedIn optimisé et portfolio de projets. C'est ce que tes prospects voient avant de te contacter.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Ta présence en ligne est ta vitrine" },
      { id: "4-2", type: "text", html: "<p>Avant de te contacter, un prospect va te googler. Il va regarder ton LinkedIn, ton site, tes projets. En 30 secondes, il va décider si tu as l'air pro ou amateur.</p><p>Tu n'as pas besoin d'un site à 5 000€ ou d'un branding parfait. Tu as besoin de 3 choses : un <strong>profil LinkedIn optimisé</strong>, un <strong>site personnel simple</strong>, et un <strong>portfolio</strong> avec des études de cas.</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>Règle 80/20 :</strong> Un site simple avec 3 études de cas bien faites convertit mieux qu'un site magnifique sans contenu concret." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "LinkedIn : ton profil qui convertit" },
      { id: "4-6", type: "steps", steps: [
        { title: "Photo professionnelle", description: "Une photo de qualité, souriante, sur fond neutre. Pas de selfie, pas de photo de soirée. Tu peux la faire avec un iPhone et un bon éclairage." },
        { title: "Headline percutante", description: "Pas 'Développeur Freelance'. Plutôt : 'Je crée des solutions IA sur mesure pour les PME | Chatbots, automatisation, SaaS'. Décris la valeur que tu apportes." },
        { title: "Section À propos", description: "3 paragraphes : (1) Le problème que tu résous, (2) Comment tu le résous (ta méthode), (3) Appel à l'action (contact). Écris à la première personne, comme une conversation." },
        { title: "Expériences et projets", description: "Liste tes projets comme des réalisations avec des résultats concrets. 'Chatbot IA pour e-commerce : +30% de taux de conversion sur le support client.'" },
        { title: "Recommandations", description: "Demande à 3-5 clients satisfaits de te laisser une recommandation. C'est la preuve sociale la plus puissante sur LinkedIn." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Ton site personnel : simple et efficace" },
      { id: "4-9", type: "text", html: "<p>Ton site n'a besoin que de 4 pages :</p><ul><li><strong>Accueil :</strong> Qui tu es, ce que tu fais, pour qui, avec un CTA clair (réserver un appel)</li><li><strong>Services :</strong> Tes offres détaillées avec les résultats attendus</li><li><strong>Portfolio :</strong> 3-5 études de cas avec le contexte, la solution et les résultats</li><li><strong>Contact :</strong> Formulaire simple ou lien vers Calendly/Cal.com</li></ul><p>Technologies recommandées : Next.js + Vercel pour la perf et le SEO, ou simplement Framer si tu veux aller vite.</p>" },

      { id: "4-10", type: "heading", level: 2, text: "Le portfolio : des études de cas, pas des screenshots" },
      { id: "4-11", type: "text", html: "<p>Un bon portfolio ne montre pas juste des captures d'écran. Il raconte une <strong>histoire</strong> :</p><ol><li><strong>Le contexte :</strong> Qui est le client ? Quel était son problème ?</li><li><strong>La solution :</strong> Qu'as-tu construit ? Quelles technologies ?</li><li><strong>Les résultats :</strong> Chiffres concrets — temps gagné, revenus générés, taux de conversion</li><li><strong>Le témoignage :</strong> Une citation du client</li></ol>" },

      { id: "4-12", type: "callout", variant: "info", html: "<strong>Pas encore de clients ?</strong> Crée des projets personnels ou fictifs. Construis un chatbot pour un restaurant fictif, une app d'automatisation pour un e-commerce imaginaire. L'important est de montrer tes compétences concrètes." },

      { id: "4-13", type: "comparison", headers: ["Portfolio amateur", "Portfolio pro"], rows: [
        { cells: ["Screenshot sans contexte", "Étude de cas avec problème > solution > résultats"] },
        { cells: ["'J'ai fait un site'", "'Chatbot IA qui a réduit de 60% les demandes support pour un e-commerce'"] },
        { cells: ["Liste de technologies", "Résultats business concrets pour le client"] },
        { cells: ["Pas de témoignage", "Citation du client + recommandation LinkedIn"] },
      ]},
    ]),
    exercise: "<h3>Exercice : Construire ta présence pro</h3><p>Lance ta vitrine professionnelle :</p><ol><li>Optimise ton profil LinkedIn : photo, headline, section À propos</li><li>Demande 3 recommandations à des collègues ou clients</li><li>Rédige 2 études de cas pour ton portfolio (projets réels ou personnels)</li><li>Crée ta page d'accueil avec un CTA clair (Next.js, Framer, ou même Notion en mode site)</li><li>Configure un outil de prise de RDV (Cal.com ou Calendly) et ajoute le lien partout</li></ol>",
    quiz: [
      { type: "mcq", question: "Que devrait contenir la headline LinkedIn d'un freelance IA ?", options: JSON.stringify(["Son titre de poste et le nom de son entreprise", "La valeur qu'il apporte et pour qui", "Ses diplômes et certifications", "Son numéro de téléphone"]), correctAnswer: "La valeur qu'il apporte et pour qui", explanation: "La headline LinkedIn doit décrire la valeur que tu apportes, pas juste ton titre. 'Je crée des solutions IA pour les PME' est plus percutant que 'Développeur Freelance'." },
      { type: "true_false", question: "Un portfolio doit montrer uniquement des screenshots de projets.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un portfolio efficace raconte une histoire : le problème du client, la solution apportée, et surtout les résultats concrets. Les screenshots seuls ne communiquent pas la valeur de ton travail." },
      { type: "mcq", question: "Combien de pages minimum un site personnel de freelance devrait-il avoir ?", options: JSON.stringify(["1 (une landing page)", "4 (accueil, services, portfolio, contact)", "10+", "Pas besoin de site"]), correctAnswer: "4 (accueil, services, portfolio, contact)", explanation: "Les 4 pages essentielles couvrent tout ce dont un prospect a besoin : comprendre qui tu es (accueil), ce que tu proposes (services), tes preuves (portfolio), et comment te joindre (contact)." },
      { type: "mcq", question: "Que faire quand on n'a pas encore de clients pour son portfolio ?", options: JSON.stringify(["Attendre d'avoir des clients", "Créer des projets personnels ou fictifs pour démontrer ses compétences", "Mentir sur ses expériences", "Ne pas faire de portfolio"]), correctAnswer: "Créer des projets personnels ou fictifs pour démontrer ses compétences", explanation: "Les projets personnels démontrent tes compétences aussi bien que les projets clients. L'important est de montrer ce que tu sais faire concrètement avec des résultats mesurables." },
      { type: "true_false", question: "Les recommandations LinkedIn sont un puissant outil de preuve sociale.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les recommandations LinkedIn sont visibles publiquement et viennent de personnes identifiées. C'est une forme de preuve sociale très crédible qui rassure les prospects." },
    ],
  },
];
