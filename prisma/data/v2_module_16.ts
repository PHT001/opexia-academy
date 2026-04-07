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

      { id: "1-20", type: "heading", level: 3, text: "Le minimalisme des outils : moins c'est plus" },
      { id: "1-21", type: "text", html: "<p>Le piège du freelance débutant : installer 20 outils la première semaine et n'en utiliser aucun correctement. Chaque outil que tu ajoutes a un coût caché :</p><ul><li><strong>Temps d'apprentissage :</strong> Il faut 2-4 semaines pour maîtriser un outil</li><li><strong>Context switching :</strong> Chaque passage d'un outil à un autre casse ta concentration</li><li><strong>Synchronisation :</strong> Plus tu as d'outils, plus tu risques d'avoir des informations éparpillées</li><li><strong>Coût financier :</strong> 5 outils à 10 euros/mois = 600 euros/an</li></ul><p>La règle : <strong>un outil par catégorie</strong>. Pas deux apps de to-do, pas trois outils de notes, pas deux CRM. Un seul, bien maîtrisé.</p>" },

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

      { id: "1-22", type: "heading", level: 3, text: "Pourquoi Notion est le hub central du freelance" },
      { id: "1-23", type: "text", html: "<p>Notion n'est pas juste un outil de notes — c'est ton système nerveux central. Un seul outil pour :</p><ul><li><strong>Gestion de projets :</strong> Un tableau Kanban par client avec les tâches, deadlines et statuts</li><li><strong>CRM :</strong> Un tableau de suivi des prospects et clients (on verra ça en détail dans la leçon 3)</li><li><strong>Documentation :</strong> Les briefs clients, les specs techniques, les CR de réunion</li><li><strong>Templates :</strong> Devis type, contrat type, email de relance type — à dupliquer pour chaque nouveau besoin</li><li><strong>Journal de bord :</strong> Note ce que tu as fait chaque jour en 3 lignes. En fin de mois, tu as un récap complet de ta productivité.</li></ul><p>Le plan gratuit de Notion suffit largement pour un freelance solo. Tu ne paies que si tu collabores avec d'autres personnes.</p>" },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Organiser tes fichiers projet" },
      { id: "1-9", type: "text", html: "<p>Chaque projet client doit avoir la même structure de dossiers. Quand un client t'appelle, tu dois pouvoir retrouver n'importe quel document en moins de 30 secondes.</p><pre><code>📁 Clients/\n  📁 NomClient_2024/\n    📁 01_Brief/          # Brief initial, cahier des charges\n    📁 02_Design/         # Maquettes, wireframes\n    📁 03_Dev/            # Repo Git (lien), notes techniques\n    📁 04_Livrables/      # Exports, accès fournis\n    📁 05_Facturation/    # Devis, factures, contrats\n    📁 06_Communication/  # Emails importants, CR de réunion</code></pre>" },

      { id: "1-24", type: "heading", level: 3, text: "Les conventions de nommage qui sauvent" },
      { id: "1-25", type: "text", html: "<p>Des fichiers mal nommés, c'est du temps perdu à chaque recherche. Adopte ces conventions dès maintenant :</p><ul><li><strong>Dates en format AAAA-MM-JJ :</strong> <code>2025-03-15_devis_client-martin.pdf</code> — les fichiers se trient chronologiquement</li><li><strong>Préfixes numériques pour l'ordre :</strong> <code>01_brief</code>, <code>02_design</code> — les dossiers restent dans l'ordre logique</li><li><strong>Pas d'espaces dans les noms :</strong> Utilise des tirets ou underscores — <code>landing-page-v2.fig</code></li><li><strong>Version dans le nom :</strong> <code>devis_v1.pdf</code>, <code>devis_v2.pdf</code> — jamais <code>devis_final</code>, <code>devis_final_v2</code>, <code>devis_vraiment_final</code></li></ul>" },
      { id: "1-26", type: "callout", variant: "warning", html: "<strong>Piège classique :</strong> Le fichier 'devis_final_final_v3_corrigé_ENVOYÉ.pdf'. Si tu te retrouves dans cette situation, c'est que tu n'as pas de convention de nommage. Adopte le format date + version dès maintenant." },

      { id: "1-10", type: "heading", level: 2, text: "Ta routine quotidienne" },
      { id: "1-11", type: "steps", steps: [
        { title: "Matin (15 min) : Review", description: "Ouvre ta liste de tâches. Regarde ton agenda. Identifie les 3 priorités du jour. Réponds aux messages urgents." },
        { title: "Matinée : Deep Work", description: "Bloque 2-3h sans interruption pour le travail technique (code, design, création). Notifications coupées, téléphone en silencieux." },
        { title: "Midi : Communication", description: "Réponds aux emails et messages clients. Fais les appels et meetings prévus." },
        { title: "Après-midi : Tâches secondaires", description: "Admin, facturation, prospection, formation continue. Les tâches qui demandent moins de concentration." },
        { title: "Fin de journée (10 min) : Clôture", description: "Note ce qui a été fait aujourd'hui. Prépare la liste de demain. Déconnecte-toi proprement." },
      ]},

      { id: "1-27", type: "heading", level: 3, text: "La routine hebdomadaire du freelance qui dure" },
      { id: "1-28", type: "text", html: "<p>Au-delà de la routine quotidienne, il y a des tâches qui doivent se faire chaque semaine pour que ton activité tienne sur le long terme :</p>" },
      { id: "1-29", type: "comparison", headers: ["Jour", "Tâche hebdomadaire", "Durée"], rows: [
        { cells: ["Lundi matin", "Planification de la semaine : objectifs, deadlines, meetings", "30 min"] },
        { cells: ["Mercredi", "Prospection : 5 messages LinkedIn ou emails à des prospects", "1h"] },
        { cells: ["Vendredi après-midi", "Admin : facturation, comptabilité, relances", "1h"] },
        { cells: ["Vendredi fin de journée", "Review de la semaine : qu'est-ce qui a marché, qu'est-ce qu'il faut améliorer", "15 min"] },
        { cells: ["Dimanche soir (optionnel)", "Préparation mentale : visualiser la semaine à venir, se mettre dans le bon état d'esprit", "15 min"] },
      ]},
      { id: "1-30", type: "callout", variant: "tip", html: "<strong>Le vendredi, c'est le jour admin.</strong> Factures, relances, comptabilité, mise à jour du CRM. Ne fais pas ça 'quand tu as le temps' — tu n'auras jamais le temps. Bloque le créneau et tiens-toi-y." },

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

      { id: "2-20", type: "heading", level: 3, text: "Combien tu gagnes vraiment de l'heure ?" },
      { id: "2-21", type: "text", html: "<p>La plupart des freelances connaissent leur TJM (Taux Journalier Moyen) mais pas leur taux horaire effectif. Le calcul est simple mais brutal :</p><p><strong>Taux horaire réel = Revenus mensuels / Heures TOTALES travaillées</strong></p><p>Si tu factures 3 000 euros/mois mais que tu travailles 200 heures (dont 80h non facturables : admin, prospection, formation), ton taux horaire réel est 15 euros/h, pas 37.5 euros/h.</p><p>L'objectif n'est pas de facturer chaque heure — c'est de <strong>minimiser les heures non productives</strong> pour que chaque heure de travail ait un impact maximum. Les techniques de cette leçon vont t'aider à passer de 40% de temps productif à 70%.</p>" },
      { id: "2-22", type: "callout", variant: "tip", html: "<strong>Track ton temps pendant une semaine</strong> avec Toggl Track (gratuit). Note chaque activité : code, communication client, admin, prospection, formation, pause. Le résultat va te choquer — et c'est exactement ce qu'il faut pour changer." },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "La matrice d'Eisenhower : prioriser comme un pro" },
      { id: "2-6", type: "comparison", headers: ["", "Urgent", "Non urgent"], rows: [
        { cells: ["Important", "FAIRE immédiatement (bug en prod, deadline client)", "PLANIFIER (prospection, formation, stratégie)"] },
        { cells: ["Non important", "DÉLÉGUER ou automatiser (emails, admin)", "ÉLIMINER (scrolling, réunions inutiles)"] },
      ]},
      { id: "2-7", type: "text", html: "<p>La plupart des freelances passent leur temps dans le cadrant Urgent + Non important (emails, messages, admin). Le secret de la croissance est de passer plus de temps dans le cadrant <strong>Important + Non urgent</strong> : prospection, formation, automatisation.</p>" },

      { id: "2-23", type: "heading", level: 3, text: "Exemples concrets pour un freelance IA" },
      { id: "2-24", type: "comparison", headers: ["Tâche", "Cadrant Eisenhower", "Action"], rows: [
        { cells: ["Bug critique en production", "Urgent + Important", "Fais-le maintenant, tout de suite"] },
        { cells: ["Relancer un prospect", "Urgent + Important", "Fais-le aujourd'hui"] },
        { cells: ["Apprendre une nouvelle technologie", "Non urgent + Important", "Planifie 2h par semaine"] },
        { cells: ["Créer du contenu LinkedIn", "Non urgent + Important", "Planifie 1h le mardi"] },
        { cells: ["Répondre à un email non critique", "Urgent + Non important", "Batch-le avec les autres emails à midi"] },
        { cells: ["Scroller TikTok 'pour la veille'", "Non urgent + Non important", "Élimine ou limite à 15 min/jour"] },
        { cells: ["Automatiser ta facturation", "Non urgent + Important", "Planifie 3h ce week-end, ça te fera gagner 2h/mois ensuite"] },
      ]},

      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Le Time Blocking : structure ta journée" },
      { id: "2-10", type: "text", html: "<p>Le time blocking consiste à attribuer à chaque créneau de ta journée une tâche spécifique. Au lieu d'une to-do list interminable, tu as un plan d'action heure par heure.</p><pre><code>09h00-09h15 : Review + planification\n09h15-12h00 : Deep Work (dev / création)\n12h00-13h00 : Pause déjeuner\n13h00-14h00 : Emails + communication client\n14h00-16h00 : Tâches secondaires / meetings\n16h00-17h00 : Prospection / formation\n17h00-17h15 : Clôture de journée</code></pre>" },

      { id: "2-25", type: "heading", level: 3, text: "Les erreurs de time blocking à éviter" },
      { id: "2-26", type: "text", html: "<p>Le time blocking est puissant, mais mal utilisé, il devient une source de frustration :</p><ul><li><strong>Bloquer chaque minute :</strong> Laisse 30 min de 'buffer' par jour pour les imprévus. Si tout est bloqué et qu'un client appelle avec un urgent, ton planning s'effondre.</li><li><strong>Ne pas respecter tes propres blocs :</strong> Un time block que tu violes systématiquement ne sert à rien. Sois réaliste sur la durée nécessaire pour chaque tâche.</li><li><strong>Planifier les tâches créatives après le déjeuner :</strong> Le creux post-déjeuner est réel. Place les tâches mécaniques (admin, emails) pendant cette période et garde le matin pour le deep work.</li><li><strong>Ne pas ajuster :</strong> Ta routine idéale va évoluer. Revois ton planning chaque vendredi et ajuste ce qui ne fonctionne pas.</li></ul>" },

      { id: "2-11", type: "heading", level: 2, text: "Le Deep Work : ta superpower" },
      { id: "2-12", type: "steps", steps: [
        { title: "Bloque un créneau de 2-3h minimum", description: "Le deep work nécessite un temps continu. Moins de 2h, tu n'as pas le temps d'entrer en flow state." },
        { title: "Élimine les distractions", description: "Mode avion sur le téléphone. Ferme Discord, emails, réseaux sociaux. Utilise un bloqueur comme Focus ou Cold Turkey." },
        { title: "Une seule tâche", description: "Pas de multitasking. Choisis LA tâche la plus importante et travaille uniquement dessus." },
        { title: "Protège ce créneau", description: "Refuse les meetings pendant tes créneaux de deep work. Ce temps est sacré et non négociable." },
      ]},

      { id: "2-27", type: "heading", level: 3, text: "Le flow state : comment y entrer plus vite" },
      { id: "2-28", type: "text", html: "<p>Le flow state (ou 'la zone') est cet état de concentration intense où le travail coule naturellement. En moyenne, il faut 20-30 minutes pour y entrer. Voici comment accélérer le processus :</p><ul><li><strong>Commence par une tâche facile liée à ton objectif :</strong> Un petit refacto, un test, un composant simple. Ça crée de l'élan.</li><li><strong>Musique sans paroles :</strong> Le lo-fi, la musique classique ou les sons d'ambiance aident à bloquer les distractions. Évite la musique avec des paroles — ton cerveau essaie de les traiter.</li><li><strong>Environnement constant :</strong> Travaille toujours au même endroit, avec le même setup. Ton cerveau associe l'environnement à la concentration.</li><li><strong>Termine ta session en milieu de tâche :</strong> Quand tu reprends le lendemain, tu sais exactement où tu en étais. C'est plus facile de retrouver le flow que de démarrer une nouvelle tâche.</li></ul>" },

      { id: "2-13", type: "callout", variant: "tip", html: "<strong>La règle des 2 minutes :</strong> Si une tâche prend moins de 2 minutes, fais-la immédiatement. Si elle prend plus, ajoute-la à ta liste et planifie-la dans un créneau." },

      { id: "2-14", type: "checklist", title: "Habitudes de productivité", items: [
        { id: "c1", text: "3 priorités maximum définies chaque matin" },
        { id: "c2", text: "Créneau de deep work bloqué dans l'agenda" },
        { id: "c3", text: "Téléphone en silencieux pendant le deep work" },
        { id: "c4", text: "Emails consultés 2-3 fois par jour max (pas en continu)" },
        { id: "c5", text: "Review de fin de journée de 10 minutes" },
        { id: "c6", text: "Temps tracké pendant au moins 1 semaine pour identifier les fuites" },
        { id: "c7", text: "30 min de buffer quotidien pour les imprévus" },
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

      { id: "3-20", type: "heading", level: 3, text: "Le coût de ne PAS avoir de CRM" },
      { id: "3-21", type: "text", html: "<p>Voici un calcul simple qui devrait te convaincre :</p><ul><li>Tu parles à 20 prospects par mois</li><li>Sans CRM, tu oublies de relancer 5 d'entre eux</li><li>Sur ces 5, 2 auraient probablement signé si tu les avais relancés</li><li>Chaque contrat moyen vaut 2 000 euros</li><li><strong>Perte mensuelle estimée : 4 000 euros</strong></li></ul><p>Mettre en place un CRM prend 2 heures. Ça te rapporte potentiellement 4 000 euros par mois. C'est le meilleur ROI de ta carrière freelance.</p>" },
      { id: "3-22", type: "callout", variant: "warning", html: "<strong>L'erreur fatale :</strong> Se dire 'je gère ça de tête' ou 'j'ai tout dans mes messages WhatsApp'. Ça marche avec 3 contacts. Avec 20, tu oublies. Avec 50, c'est le chaos total." },

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

      { id: "3-23", type: "heading", level: 3, text: "Les métriques de ton pipeline commercial" },
      { id: "3-24", type: "text", html: "<p>Un CRM sans métriques, c'est comme un tableau de bord sans compteur de vitesse. Voici les chiffres que tu dois suivre chaque mois :</p><ul><li><strong>Taux de conversion leads > devis :</strong> Sur 10 prospects contactés, combien reçoivent un devis ? Objectif : 30-50%.</li><li><strong>Taux de conversion devis > signé :</strong> Sur 10 devis envoyés, combien sont signés ? Objectif : 40-60%.</li><li><strong>Temps moyen de closing :</strong> Combien de jours entre le premier contact et la signature ? Si c'est plus de 30 jours, ton processus commercial est trop lent.</li><li><strong>Panier moyen :</strong> Combien tu factures en moyenne par projet ? Ce chiffre devrait augmenter avec le temps.</li><li><strong>Source d'acquisition :</strong> D'où viennent tes meilleurs clients ? LinkedIn ? Bouche-à-oreille ? Cold email ? Double tes efforts sur le canal qui marche le mieux.</li></ul>" },
      { id: "3-25", type: "callout", variant: "tip", html: "<strong>Revue mensuelle :</strong> Chaque premier du mois, passe 30 minutes sur ton CRM. Calcule tes métriques. Identifie les prospects en attente. Relance ceux qui sont tombés dans l'oubli. Cette habitude seule peut augmenter tes revenus de 20%." },

      { id: "3-10", type: "heading", level: 2, text: "Les règles de relance" },
      { id: "3-11", type: "text", html: "<p>La relance est l'étape que la plupart des freelances négligent. Pourtant, la majorité des deals se concluent après la <strong>2e ou 3e relance</strong>.</p><ul><li><strong>J+3 après un devis :</strong> relance douce — 'As-tu eu le temps de regarder ma proposition ?'</li><li><strong>J+7 :</strong> relance avec valeur ajoutée — partage un article ou un conseil lié à son besoin</li><li><strong>J+14 :</strong> dernière relance — 'Je comprends si le timing n'est pas bon. N'hésite pas à me recontacter quand tu es prêt.'</li></ul>" },

      { id: "3-26", type: "heading", level: 3, text: "Les templates de relance qui convertissent" },
      { id: "3-27", type: "text", html: "<p>La relance n'est PAS du harcèlement. C'est un service : tu rappelles à quelqu'un occupé qu'il a un problème que tu peux résoudre. Voici les templates :</p><ul><li><strong>Relance J+3 (douce) :</strong> 'Salut [Prénom], je voulais vérifier si tu avais eu le temps de regarder ma proposition. N'hésite pas si tu as des questions, je suis dispo pour en discuter rapidement.'</li><li><strong>Relance J+7 (valeur ajoutée) :</strong> 'Re [Prénom], en pensant à ton projet de [chatbot/automatisation], je suis tombé sur [article/outil/cas d'usage] qui pourrait t'intéresser. Sinon, ma proposition est toujours d'actualité si tu veux avancer.'</li><li><strong>Relance J+14 (dernière) :</strong> 'Salut [Prénom], je ne veux pas t'embêter, je ferme ce sujet de mon côté. Si le timing devient meilleur à l'avenir, n'hésite pas à me recontacter. Bonne continuation !'</li></ul><p>La dernière relance ('je ferme le sujet') crée un sentiment d'urgence. Paradoxalement, c'est souvent celle qui reçoit le plus de réponses.</p>" },

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

      { id: "4-20", type: "heading", level: 3, text: "Ce que les prospects regardent vraiment" },
      { id: "4-21", type: "text", html: "<p>On a tendance à sur-estimer l'importance du design et à sous-estimer l'importance du contenu. Voici ce que tes prospects regardent vraiment, dans l'ordre :</p><ol><li><strong>Les résultats concrets :</strong> 'A généré 30% de leads en plus pour un e-commerce' vaut plus que n'importe quel design</li><li><strong>La preuve sociale :</strong> Témoignages, recommandations, logos de clients</li><li><strong>La clarté de ton offre :</strong> En 5 secondes, ils doivent comprendre ce que tu fais et pour qui</li><li><strong>La facilité de contact :</strong> Un bouton de prise de RDV visible partout</li><li><strong>Le design :</strong> Important, mais c'est le dernier critère. Un site moche avec des résultats concrets convertit mieux qu'un site magnifique sans contenu.</li></ol><p>Ne perds pas 3 semaines sur le design de ton site. Passe plutôt 3 semaines à documenter tes projets et collecter des témoignages.</p>" },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "LinkedIn : ton profil qui convertit" },
      { id: "4-6", type: "steps", steps: [
        { title: "Photo professionnelle", description: "Une photo de qualité, souriante, sur fond neutre. Pas de selfie, pas de photo de soirée. Tu peux la faire avec un iPhone et un bon éclairage." },
        { title: "Headline percutante", description: "Pas 'Développeur Freelance'. Plutôt : 'Je crée des solutions IA sur mesure pour les PME | Chatbots, automatisation, SaaS'. Décris la valeur que tu apportes." },
        { title: "Section À propos", description: "3 paragraphes : (1) Le problème que tu résous, (2) Comment tu le résous (ta méthode), (3) Appel à l'action (contact). Écris à la première personne, comme une conversation." },
        { title: "Expériences et projets", description: "Liste tes projets comme des réalisations avec des résultats concrets. 'Chatbot IA pour e-commerce : +30% de taux de conversion sur le support client.'" },
        { title: "Recommandations", description: "Demande à 3-5 clients satisfaits de te laisser une recommandation. C'est la preuve sociale la plus puissante sur LinkedIn." },
      ]},

      { id: "4-22", type: "heading", level: 3, text: "La stratégie de contenu LinkedIn qui attire des prospects" },
      { id: "4-23", type: "text", html: "<p>LinkedIn n'est pas juste un CV en ligne — c'est un canal d'acquisition de clients. Publier régulièrement te positionne comme expert et attire des prospects en organique. Voici la stratégie minimale :</p><ul><li><strong>Fréquence :</strong> 2-3 posts par semaine. La régularité bat le volume.</li><li><strong>Format qui marche :</strong> Les posts 'avant/après' (comment un client est passé de X à Y), les leçons apprises, les coulisses de tes projets</li><li><strong>Le hook :</strong> La première ligne de ton post est cruciale — c'est la seule visible avant 'voir plus'. Commence par quelque chose de frappant : un chiffre, une question, une affirmation provocante.</li><li><strong>L'appel à l'action :</strong> Termine chaque post par une question pour générer des commentaires. L'engagement booste la visibilité de ton post.</li></ul>" },
      { id: "4-24", type: "comparison", headers: ["Type de post", "Exemple de hook", "Quand poster"], rows: [
        { cells: ["Étude de cas", "'Mon client perdait 3h/jour sur son support client. Voici comment l'IA a changé ça.'", "1x par semaine"] },
        { cells: ["Leçon apprise", "'J'ai fait cette erreur avec un client et ça m'a coûté 2 000 euros. Ne la fais pas.'", "1x par semaine"] },
        { cells: ["Coulisses / processus", "'Voici comment je construis un MVP en 48h (étape par étape)'", "1x toutes les 2 semaines"] },
        { cells: ["Opinion / tendance", "'90% des agences web vont disparaître d'ici 3 ans. Voici pourquoi.'", "1x par mois"] },
      ]},

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Ton site personnel : simple et efficace" },
      { id: "4-9", type: "text", html: "<p>Ton site n'a besoin que de 4 pages :</p><ul><li><strong>Accueil :</strong> Qui tu es, ce que tu fais, pour qui, avec un CTA clair (réserver un appel)</li><li><strong>Services :</strong> Tes offres détaillées avec les résultats attendus</li><li><strong>Portfolio :</strong> 3-5 études de cas avec le contexte, la solution et les résultats</li><li><strong>Contact :</strong> Formulaire simple ou lien vers Calendly/Cal.com</li></ul><p>Technologies recommandées : Next.js + Vercel pour la perf et le SEO, ou simplement Framer si tu veux aller vite.</p>" },

      { id: "4-25", type: "heading", level: 3, text: "La page d'accueil qui convertit" },
      { id: "4-26", type: "text", html: "<p>Ta page d'accueil a 5 secondes pour convaincre le visiteur de rester. Voici la structure qui fonctionne :</p><ol><li><strong>Hero section :</strong> Titre (le problème que tu résous), sous-titre (comment tu le résous), CTA (réserver un appel gratuit)</li><li><strong>Social proof :</strong> Logos de clients, nombre de projets livrés, témoignage court</li><li><strong>Services :</strong> 3 offres principales avec une phrase chacune</li><li><strong>Études de cas :</strong> 2-3 projets avec résultats chiffrés</li><li><strong>FAQ :</strong> 4-5 questions fréquentes (le prix, les délais, le processus)</li><li><strong>CTA final :</strong> Rappel de l'appel à l'action avec un bouton bien visible</li></ol><p>Chaque section doit répondre à une question du visiteur : 'Que fais-tu ?', 'Es-tu crédible ?', 'C'est pour moi ?', 'Combien ça coûte ?', 'Comment on commence ?'</p>" },

      { id: "4-10", type: "heading", level: 2, text: "Le portfolio : des études de cas, pas des screenshots" },
      { id: "4-11", type: "text", html: "<p>Un bon portfolio ne montre pas juste des captures d'écran. Il raconte une <strong>histoire</strong> :</p><ol><li><strong>Le contexte :</strong> Qui est le client ? Quel était son problème ?</li><li><strong>La solution :</strong> Qu'as-tu construit ? Quelles technologies ?</li><li><strong>Les résultats :</strong> Chiffres concrets — temps gagné, revenus générés, taux de conversion</li><li><strong>Le témoignage :</strong> Une citation du client</li></ol>" },

      { id: "4-12", type: "callout", variant: "info", html: "<strong>Pas encore de clients ?</strong> Crée des projets personnels ou fictifs. Construis un chatbot pour un restaurant fictif, une app d'automatisation pour un e-commerce imaginaire. L'important est de montrer tes compétences concrètes." },

      { id: "4-27", type: "heading", level: 3, text: "Comment obtenir des témoignages de qualité" },
      { id: "4-28", type: "text", html: "<p>Les témoignages sont la forme de social proof la plus puissante. Mais un témoignage 'Super boulot, merci !' ne vaut rien. Voici comment en obtenir des vrais :</p><ul><li><strong>Demande au bon moment :</strong> Juste après la livraison, quand le client est satisfait du résultat. Pas 3 mois après.</li><li><strong>Guide le client :</strong> Au lieu de demander 'Tu peux me laisser un témoignage ?', pose des questions précises : 'Quel était le problème principal avant notre collaboration ?', 'Quel résultat as-tu obtenu ?', 'Recommanderais-tu mes services ?'</li><li><strong>Propose de rédiger un draft :</strong> 'Je peux te préparer un texte basé sur nos échanges, tu n'auras qu'à valider et modifier.' La plupart des clients approuvent le draft tel quel.</li><li><strong>Vidéo > texte :</strong> Un témoignage vidéo de 30 secondes vaut 10 témoignages texte. Demande au client s'il accepte un court enregistrement.</li></ul>" },

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
