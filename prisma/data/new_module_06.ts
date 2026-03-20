// ═══════════════════════════════════════════════════
// MODULE 5 — Automatisations (Make, n8n, Zapier, IA)
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_5_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 5,
    title: "Pourquoi automatiser ? (ROI et cas concrets)",
    slug: "pourquoi-automatiser-roi-cas-concrets",
    duration: "20 min",
    description: "Les tâches répétitives qui tuent la productivité de tes clients. Calcul du temps gagné. Exemples réels de workflows que tu peux vendre dès cette semaine.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "L'automatisation : ton service le plus rentable" },
      { id: "1-2", type: "text", html: "<p>Un client qui te paie 1 500€ pour un chatbot, c'est bien. Un client qui te paie <strong>500€/mois pour maintenir une automatisation</strong> qui lui économise 20h de travail — c'est mieux. L'automatisation, c'est la prestation récurrente par excellence d'une agence IA.</p><p>Et la bonne nouvelle ? <strong>90% des entreprises font encore tout à la main</strong>. Saisir des données, envoyer des emails de suivi, copier-coller d'un outil à l'autre, remplir des tableaux. Des tâches répétitives, ennuyeuses, et coûteuses en temps humain.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "La règle d'or de l'automatisation : si quelqu'un fait la même action plus de 3 fois par semaine, ça peut probablement être automatisé. Commence par observer, pas par proposer." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le calcul du ROI : comment convaincre n'importe quel client" },
      { id: "1-6", type: "text", html: "<p>Avant de parler outils, parle <strong>argent</strong>. Un client achète une automatisation quand il comprend ce qu'elle lui rapporte — ou ce qu'elle lui évite de perdre.</p><p>Voici la formule simple à utiliser en rendez-vous :</p>" },
      { id: "1-7", type: "steps", steps: [
        { title: "Identifier la tâche", description: "\"Combien de temps par semaine tu passes à faire X ?\" — Exemple : saisir des leads depuis les emails dans le CRM = 3h/semaine." },
        { title: "Valoriser le temps", description: "Coût horaire chargé d'un employé = 25-40€/h. 3h × 40€ × 52 semaines = 6 240€/an de temps gaspillé." },
        { title: "Présenter le coût de l'automatisation", description: "Setup 800€ + 150€/mois = 2 600€ la première année. ROI positif dès le 5ème mois." },
        { title: "Mentionner les gains cachés", description: "Zéro erreur de saisie, traitement immédiat 24h/7j, scalabilité sans embauche. Ces bénéfices ne sont pas dans le calcul mais ils comptent." },
      ]},
      { id: "1-8", type: "callout", variant: "success", html: "Dès que le ROI est &lt; 12 mois, le client achète presque toujours. Vise des automatisations qui s'amortissent en 3-6 mois." },
      { id: "1-9", type: "separator", style: "line" },

      { id: "1-10", type: "heading", level: 2, text: "Les 6 workflows que les clients achètent le plus" },
      { id: "1-11", type: "comparison", headers: ["Workflow", "Temps économisé/sem.", "Prix de vente typique", "Complexité"], rows: [
        { cells: ["Leads email → CRM auto", "3-5h", "600-1 200€", "Facile"] },
        { cells: ["Notif Slack sur nouvelle commande", "1-2h", "400-800€", "Facile"] },
        { cells: ["Rapport hebdo automatisé", "4-8h", "800-1 500€", "Moyen"] },
        { cells: ["Onboarding client automatisé", "5-10h", "1 500-3 000€", "Moyen"] },
        { cells: ["Veille concurrentielle + digest", "6-12h", "1 200-2 500€", "Avancé"] },
        { cells: ["Qualification de leads par IA", "8-20h", "2 000-5 000€", "Avancé"] },
      ]},
      { id: "1-12", type: "text", html: "<p>Commence par les workflows <strong>faciles</strong> avec tes premiers clients. Tu montes en compétence, tu livres vite, tu génères des avis positifs. Puis tu proposes les workflows avancés à mesure que tu maîtrises les outils.</p>" },
      { id: "1-13", type: "separator", style: "dots" },

      { id: "1-14", type: "heading", level: 2, text: "Ce que tu peux automatiser dès maintenant" },
      { id: "1-15", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Déclencheur", description: "Nouveau formulaire, email reçu, heure programmée, nouveau fichier" },
        { id: "n2", label: "Traitement", description: "Filtrer, transformer, enrichir les données (avec ou sans IA)" },
        { id: "n3", label: "Action(s)", description: "Créer un enregistrement CRM, envoyer un email, notifier Slack, générer un PDF" },
        { id: "n4", label: "Résultat", description: "Temps libéré, zéro oubli, traitement immédiat" },
      ]},
      { id: "1-16", type: "callout", variant: "info", html: "Les outils qu'on va utiliser dans ce module (Make, n8n, Zapier) ne nécessitent <strong>aucune compétence en code</strong> pour les cas basiques. Pour les cas avancés avec IA, on verra comment intégrer du code JavaScript simple." },
      { id: "1-16b", type: "separator", style: "line" },

      { id: "1-16c", type: "heading", level: 2, text: "Make, n8n ou Zapier : lequel choisir ?" },
      { id: "1-16d", type: "text", html: "<p>Tu vas apprendre Make et n8n dans les leçons suivantes. Mais avant de plonger, voici le <strong>résumé exécutif</strong> pour savoir quel outil recommander à quel client :</p>" },
      { id: "1-16e", type: "comparison", headers: ["Critère", "Zapier", "Make", "n8n (self-hosted)"], rows: [
        { cells: ["Prix de base", "Gratuit (100 tâches)", "Gratuit (1000 ops)", "Hébergement ~5-10€/mois"] },
        { cells: ["Courbe d'apprentissage", "Très facile", "Moyenne", "Avancée"] },
        { cells: ["Logique avancée", "Limitée", "Très puissante", "Puissante + code JS"] },
        { cells: ["Self-hosting / RGPD", "Non (serveurs US)", "Non (serveurs EU)", "Oui (ton serveur)"] },
        { cells: ["Idéal pour", "Client non-technique, PME simple", "80% des projets agence", "Santé, finance, gros volume"] },
      ]},
      { id: "1-16f", type: "callout", variant: "tip", html: "<strong>Règle pratique :</strong> commence avec <strong>Make</strong> pour 80% des projets. Utilise <strong>n8n self-hosted</strong> pour les clients avec contraintes de données (santé, finance). Utilise <strong>Zapier</strong> uniquement si le client veut gérer lui-même ou si une intégration critique manque dans Make." },
      { id: "1-17", type: "separator", style: "space" },

      { id: "1-18", type: "quiz-inline", question: "Un client passe 4h/semaine à saisir manuellement des données dans son CRM. Son coût horaire chargé est de 35€. Quel est le coût annuel de cette tâche ?", options: [
        { id: "a", text: "3 640€/an" },
        { id: "b", text: "7 280€/an" },
        { id: "c", text: "5 460€/an" },
      ], correctId: "b", explanation: "4h × 35€ × 52 semaines = 7 280€/an. Une automatisation à 1 200€ setup + 100€/mois s'amortit en moins de 3 mois. C'est un argument de vente béton." },

      { id: "1-19", type: "separator", style: "dots" },
      { id: "1-20", type: "checklist", title: "Acquis de cette leçon", items: [
        { id: "c1", text: "Je sais calculer le ROI d'une automatisation en rendez-vous client" },
        { id: "c2", text: "Je connais les 6 types de workflows les plus vendables" },
        { id: "c3", text: "Je comprends la logique déclencheur → traitement → action" },
        { id: "c4", text: "J'ai identifié au moins 1 client potentiel pour qui automatiser une tâche répétitive" },
      ]},
    ]),
    exercise: "<h3>Audit terrain</h3><p>Prends un client existant ou un prospect et liste <strong>5 tâches répétitives</strong> qu'il fait chaque semaine. Pour chacune, note : (1) le temps passé, (2) le coût estimé par an, (3) si elle est automatisable. Envoie-lui ensuite un email avec le titre \"J'ai identifié 2 500€/an de gains potentiels pour ton équipe\" — et présente ton analyse. C'est une approche consultative qui convertit bien.</p>",
    quiz: [
      { type: "mcq", question: "Un employé passe 3h/semaine à saisir des leads dans un CRM. Son coût horaire chargé est de 40€. Quel est le coût annuel de cette tâche ?", options: JSON.stringify(["3 120€/an", "6 240€/an", "4 800€/an", "7 800€/an"]), correctAnswer: "6 240€/an", explanation: "3h x 40€ x 52 semaines = 6 240€/an. C'est le calcul de base du ROI d'une automatisation : identifier le coût humain de la tâche répétitive pour montrer au client combien il perd chaque année." },
      { type: "true_false", question: "La règle d'or de l'automatisation est : si quelqu'un fait la même action plus de 3 fois par semaine, ça peut probablement être automatisé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est la première étape de l'audit : observer les tâches répétitives. Plus de 3 fois par semaine = signal fort d'une opportunité d'automatisation. Il faut d'abord observer, puis proposer." },
      { type: "mcq", question: "Quelle est la structure de base d'un workflow d'automatisation ?", options: JSON.stringify(["Input → Output → Feedback", "Déclencheur → Traitement → Action", "Requête → Réponse → Stockage", "Analyse → Décision → Exécution"]), correctAnswer: "Déclencheur → Traitement → Action", explanation: "Tout workflow suit cette logique : un déclencheur (formulaire, email, heure programmée), un traitement (filtrer, transformer, enrichir les données), et une ou plusieurs actions (créer dans le CRM, envoyer un email, notifier sur Slack)." },
      { type: "true_false", question: "Une automatisation qui s'amortit en moins de 12 mois convainc presque toujours le client d'acheter.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Quand le ROI est inférieur à 12 mois, l'investissement est clairement rentable pour le client. L'idéal est de viser un amortissement en 3-6 mois pour que l'argument de vente soit encore plus fort." },
      { type: "mcq", question: "Un prospect restaurateur vous dit qu'il passe 3 heures par semaine à recopier les réservations reçues par email dans son Google Calendar. Il vous demande si ça vaut le coup d'automatiser. Que lui répondez-vous ?", options: JSON.stringify(["Non, 3h par semaine ce n'est pas assez pour justifier une automatisation", "Oui, vous lui montrez le calcul : 3h x 40€ x 52 semaines = 6 240€/an perdus, et vous proposez un workflow email → Calendar à 800€", "Vous lui conseillez d'embaucher un stagiaire pour faire la saisie", "Vous lui dites que seules les grandes entreprises peuvent automatiser"]), correctAnswer: "Oui, vous lui montrez le calcul : 3h x 40€ x 52 semaines = 6 240€/an perdus, et vous proposez un workflow email → Calendar à 800€", explanation: "Le calcul du ROI est l'arme de vente numéro 1 : montrer au client combien sa tâche répétitive lui coûte par an rend l'investissement évident. Un workflow à 800€ qui économise 6 240€/an s'amortit en quelques semaines." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 5,
    title: "Make (ex-Integromat) : ton premier scénario",
    slug: "make-premier-scenario-automatisation",
    duration: "30 min",
    description: "Maîtrise l'interface Make, comprends les modules et les connexions, et construis un scénario concret : surveillance d'un Google Sheet qui déclenche un email automatique.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Pourquoi Make est l'outil n°1 pour les agences" },
      { id: "2-2", type: "text", html: "<p><strong>Make</strong> (anciennement Integromat) est l'outil d'automatisation visuel le plus puissant du marché pour le rapport fonctionnalités/prix. Contrairement à Zapier, il te permet de créer des <strong>logiques complexes</strong> (boucles, filtres, gestion d'erreurs, transformations de données) sans écrire de code.</p><p>Pour une agence IA, Make est souvent le premier outil à maîtriser car il couvre 80% des besoins clients et son plan gratuit est généreux (1 000 opérations/mois).</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Make propose un <strong>plan gratuit</strong> qui suffit pour tester et démo. Pour les clients, le plan Core à 9€/mois ou Pro à 16€/mois couvre la grande majorité des besoins. Tu peux facturer la mise en place ET le plan au client." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Comprendre l'interface Make" },
      { id: "2-6", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Scénario", description: "Un flux d'automatisation composé de modules connectés" },
        { id: "n2", label: "Module déclencheur", description: "Le point de départ (watch, webhook, schedule). Ex: 'Google Sheets – Watch Rows'" },
        { id: "n3", label: "Module action", description: "Ce qui se passe après le déclencheur. Ex: 'Gmail – Send an Email'" },
        { id: "n4", label: "Filtres", description: "Conditions entre modules. Ex: seulement si la colonne 'Statut' = 'Nouveau'" },
        { id: "n5", label: "Opérations", description: "Chaque donnée traitée = 1 opération. Le quota mensuel est basé sur ça." },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Construire le scénario : Google Sheets → Email" },
      { id: "2-9", type: "text", html: "<p>On va créer un scénario <strong>concret et vendable</strong> : dès qu'une nouvelle ligne est ajoutée dans un Google Sheet (ex: un formulaire de contact), un email personnalisé est envoyé automatiquement au client potentiel.</p><p>Ce type de scénario se vend 400-800€ à des e-commerçants, coachs, ou toute entreprise qui collecte des leads.</p>" },
      { id: "2-10", type: "steps", steps: [
        { title: "Créer un nouveau scénario", description: "Dans Make, clique sur 'Create a new scenario'. Tu arrives sur l'éditeur visuel (canvas blanc)." },
        { title: "Ajouter le module déclencheur", description: "Clique sur le grand + au centre. Cherche 'Google Sheets', sélectionne 'Watch Rows'. Connecte ton compte Google, choisis le spreadsheet et la feuille à surveiller. Interval : toutes les 15 minutes." },
        { title: "Tester le déclencheur", description: "Clique sur 'Run once' en bas à gauche, puis ajoute une ligne dans ton Google Sheet. Make va capturer cette ligne — tu verras les données (nom, email, etc.) apparaître dans les bulles." },
        { title: "Ajouter un filtre", description: "Clique sur la petite clé entre les deux modules → Add filter. Condition : la colonne 'Statut' doit être égale à 'Nouveau'. Ainsi, si quelqu'un met à jour une ligne existante, ça ne se redéclenche pas." },
        { title: "Ajouter le module Gmail", description: "Clique sur + après le filtre. Cherche 'Gmail', sélectionne 'Send an Email'. Dans le champ 'To', mappe la colonne Email de ton Google Sheet en cliquant sur la variable." },
        { title: "Personnaliser l'email", description: "Sujet : 'Merci {{1.Prénom}}, on a bien reçu ta demande'. Corps : un message HTML avec les variables mappées depuis le Sheet." },
        { title: "Activer le scénario", description: "Bascule le switch 'Scheduling' en bas à gauche. Le scénario tourne maintenant en autonome." },
      ]},
      { id: "2-11", type: "separator", style: "dots" },

      { id: "2-12", type: "heading", level: 2, text: "Les données dans Make : mapping et transformations" },
      { id: "2-13", type: "code", language: "json", filename: "exemple-donnees-make.json", code: `{
  "Row Number": 42,
  "Prénom": "Marie",
  "Nom": "Dupont",
  "Email": "marie.dupont@example.com",
  "Téléphone": "06 12 34 56 78",
  "Message": "Bonjour, je suis intéressée par vos services...",
  "Date": "2025-03-13T10:30:00.000Z",
  "Statut": "Nouveau"
}` },
      { id: "2-14", type: "text", html: "<p>Ces données sont accessibles dans Make via les <strong>variables mappées</strong>. Dans n'importe quel champ texte, tu cliques et tu choisis la variable à insérer. Make gère la transformation automatiquement (ex: formater la date, mettre en majuscule, extraire un domaine email).</p><p>Les <strong>fonctions intégrées</strong> de Make permettent aussi des transformations avancées sans code : <code>formatDate()</code>, <code>toString()</code>, <code>parseDate()</code>, <code>if()</code>, etc.</p>" },
      { id: "2-15", type: "callout", variant: "warning", html: "Pense toujours à gérer les <strong>erreurs</strong> dans tes scénarios. Dans Make, tu peux définir ce qui se passe si un module échoue : arrêt, retry automatique, ou notification dans Slack. Un scénario pro gère ses erreurs." },
      { id: "2-16", type: "separator", style: "space" },

      { id: "2-17", type: "quiz-inline", question: "Dans Make, qu'est-ce qu'une 'opération' ?", options: [
        { id: "a", text: "Un scénario complet exécuté de bout en bout" },
        { id: "b", text: "Le traitement d'un seul bundle de données par un module" },
        { id: "c", text: "Une connexion à une application externe" },
      ], correctId: "b", explanation: "Une opération = 1 module traitant 1 bundle. Si ton scénario a 3 modules et traite 10 lignes, ça consomme 30 opérations. C'est la base pour estimer le plan dont ton client a besoin." },

      { id: "2-18", type: "separator", style: "dots" },
      { id: "2-19", type: "checklist", title: "Acquis de cette leçon", items: [
        { id: "c1", text: "Je comprends la structure d'un scénario Make (déclencheur, filtres, actions)" },
        { id: "c2", text: "J'ai créé mon premier scénario Google Sheets → Gmail" },
        { id: "c3", text: "Je sais mapper des variables et utiliser les filtres" },
        { id: "c4", text: "Je sais activer un scénario et gérer les erreurs de base" },
        { id: "c5", text: "Je comprends le système d'opérations pour estimer les coûts client" },
      ]},
    ]),
    exercise: "<h3>Construis et vends</h3><p>Crée le scénario Google Sheets → Gmail vu dans cette leçon avec un vrai compte Make (gratuit). Ensuite, <strong>généralise-le</strong> : ajoute un 2ème module action qui crée aussi une tâche dans Notion ou un contact dans HubSpot. Documente le scénario avec des captures d'écran. Tu as maintenant un portfolio à montrer à des clients. Bonus : calcule combien tu pourrais le vendre si un client reçoit 50 leads/mois — quelle offre proposes-tu ?</p>",
    quiz: [
      { type: "mcq", question: "Dans Make, qu'est-ce qu'une 'opération' ?", options: JSON.stringify(["Un scénario complet exécuté de bout en bout", "Le traitement d'un seul bundle de données par un module", "Une connexion à une application externe", "Un filtre entre deux modules"]), correctAnswer: "Le traitement d'un seul bundle de données par un module", explanation: "Une opération = 1 module traitant 1 bundle de données. Si ton scénario a 3 modules et traite 10 lignes, ça consomme 30 opérations. C'est la base pour estimer le plan Make dont ton client a besoin." },
      { type: "true_false", question: "Le plan gratuit de Make offre 1 000 opérations par mois, ce qui suffit pour tester et faire des démos.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Make propose un plan gratuit avec 1 000 opérations/mois, suffisant pour le prototypage et les démonstrations. Pour les clients en production, le plan Core à 9€/mois ou Pro à 16€/mois couvre la majorité des besoins." },
      { type: "mcq", question: "Dans un scénario Make, quel est le rôle du filtre placé entre deux modules ?", options: JSON.stringify(["Accélérer l'exécution du scénario", "Définir une condition pour ne traiter que certaines données", "Transformer le format des données", "Connecter deux applications différentes"]), correctAnswer: "Définir une condition pour ne traiter que certaines données", explanation: "Le filtre permet de poser des conditions entre les modules. Par exemple, ne continuer que si la colonne 'Statut' = 'Nouveau'. Cela évite de traiter des données déjà traitées ou non pertinentes." },
      { type: "true_false", question: "Un scénario Make livré sans gestion des erreurs peut fonctionner correctement pendant des semaines avant de planter silencieusement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est le piège classique : un scénario fonctionne en test et en début de production, mais quand une API change ou qu'une donnée inattendue arrive, il plante sans prévenir personne. La gestion des erreurs (retry, notification) est indispensable pour un livrable professionnel." },
      { type: "mcq", question: "Un client fleuriste vous demande d'automatiser l'envoi d'un email de remerciement personnalisé à chaque nouveau client ajouté dans son Google Sheet. Quel est le premier module que vous ajoutez dans Make ?", options: JSON.stringify(["Un module Gmail pour préparer l'email", "Un module Google Sheets Watch Rows pour détecter chaque nouvelle ligne", "Un module filtre pour vérifier l'adresse email", "Un module HTTP Request pour appeler une API externe"]), correctAnswer: "Un module Google Sheets Watch Rows pour détecter chaque nouvelle ligne", explanation: "Tout scénario commence par un déclencheur. Ici, Google Sheets Watch Rows surveille les nouvelles lignes ajoutées et démarre le scénario automatiquement. Sans déclencheur, le scénario ne se lance jamais." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 5,
    title: "n8n : l'alternative open-source puissante",
    slug: "n8n-alternative-open-source-workflows",
    duration: "25 min",
    description: "Installer n8n en local et en cloud, créer ton premier workflow, et comprendre pourquoi certains clients préfèrent n8n à Make pour des raisons de coûts et de contrôle des données.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "n8n : la liberté que Make ne peut pas offrir" },
      { id: "3-2", type: "text", html: "<p><strong>n8n</strong> est un outil d'automatisation open-source. Tu peux l'héberger toi-même sur un serveur, ce qui signifie <strong>zéro limite d'opérations, zéro coût d'abonnement</strong> (hors hébergement), et une confidentialité totale des données — aucune donnée client ne transite par un serveur tiers.</p><p>Pour tes clients dans la santé, la finance, ou le juridique, c'est souvent <strong>non-négociable</strong>. Et toi, tu peux facturer le setup initial 1 500-3 000€ et une maintenance mensuelle sans payer de licence.</p>" },
      { id: "3-3", type: "callout", variant: "success", html: "n8n Cloud existe aussi à 20€/mois pour ceux qui ne veulent pas gérer un serveur. Mais le vrai avantage concurrentiel est le <strong>self-hosting</strong> : pas de limite d'exécutions, données locales, personnalisation totale." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Installer n8n en local (5 minutes)" },
      { id: "3-6", type: "steps", steps: [
        { title: "Prérequis : Node.js", description: "Assure-toi d'avoir Node.js 18+ installé. Vérifier avec : node --version dans le terminal." },
        { title: "Installer n8n via npm", description: "Lance : npx n8n. La première fois, ça télécharge tout automatiquement (~500Mo). Attends la fin de l'installation." },
        { title: "Ouvrir l'interface", description: "Ouvre http://localhost:5678 dans ton navigateur. Crée ton compte admin (email + mot de passe). Tu es dans n8n." },
        { title: "Pour un serveur de production", description: "Utilise Docker : docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n. Déploie sur un VPS OVH ou Hetzner à 5-10€/mois." },
      ]},
      { id: "3-7", type: "code", language: "text", filename: "install-n8n.sh", code: `# Installation locale rapide
npx n8n

# Ou via npm global
npm install -g n8n
n8n start

# Via Docker (recommandé pour la prod)
docker run -d \\
  --name n8n \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  --restart unless-stopped \\
  n8nio/n8n

# Accès : http://localhost:5678` },
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Créer ton premier workflow n8n" },
      { id: "3-10", type: "text", html: "<p>On va créer le même type de workflow qu'avec Make, mais dans n8n. L'interface est différente mais la logique est identique : <strong>nœuds connectés</strong> (nodes) au lieu de modules.</p><p>Exemple concret : surveillance d'un webhook (ex: formulaire Typeform) → enrichissement avec l'IA → enregistrement dans Airtable + notification Slack.</p>" },
      { id: "3-11", type: "steps", steps: [
        { title: "Créer un nouveau workflow", description: "Clic sur 'New Workflow'. Canvas blanc. L'interface ressemble à un éditeur de code visuel." },
        { title: "Ajouter un nœud Webhook", description: "Cherche 'Webhook' dans les nœuds. C'est le déclencheur HTTP universel. Copie l'URL générée — elle acceptera les POST depuis n'importe quelle source." },
        { title: "Tester avec un curl", description: "Dans ton terminal : curl -X POST http://localhost:5678/webhook/ton-id -H 'Content-Type: application/json' -d '{\"nom\":\"Marie\",\"email\":\"marie@test.fr\"}'. Le nœud capture les données." },
        { title: "Ajouter un nœud HTTP Request", description: "Pour appeler une API externe (ex: OpenAI ou Claude). Configure la méthode POST, l'URL de l'API, les headers d'authentification et le body JSON." },
        { title: "Ajouter un nœud Airtable", description: "Connecte ton compte Airtable via une API key. Choisit ta base et ta table. Mappe les champs du webhook vers les colonnes Airtable." },
        { title: "Activer le workflow", description: "Bascule le toggle 'Active' en haut à droite. Le webhook est maintenant actif en permanence." },
      ]},
      { id: "3-12", type: "code", language: "json", filename: "webhook-payload-exemple.json", code: `{
  "headers": {
    "content-type": "application/json",
    "user-agent": "Typeform/1.0"
  },
  "body": {
    "form_response": {
      "form_id": "abc123",
      "submitted_at": "2025-03-13T14:22:00Z",
      "answers": [
        { "field": { "ref": "nom" }, "text": "Marie Dupont" },
        { "field": { "ref": "email" }, "email": "marie@exemple.fr" },
        { "field": { "ref": "budget" }, "number": 2500 }
      ]
    }
  }
}` },
      { id: "3-13", type: "callout", variant: "tip", html: "n8n a un nœud <strong>Code</strong> intégré qui accepte du JavaScript. Tu peux transformer les données, faire des boucles complexes, appeler des API custom — tout ça directement dans le workflow. C'est un énorme avantage sur Make." },
      { id: "3-14", type: "separator", style: "dots" },

      { id: "3-15", type: "heading", level: 2, text: "L'architecture pour un client professionnel" },
      { id: "3-16", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "VPS Hetzner (5€/mois)", description: "Serveur Linux Ubuntu 22.04 avec Docker installé" },
        { id: "n2", label: "Docker + n8n", description: "n8n self-hosted avec volume persistent, reverse proxy Nginx + SSL" },
        { id: "n3", label: "Domaine client", description: "n8n.clientxyz.com pointé sur le VPS — interface et webhooks sécurisés" },
        { id: "n4", label: "Sauvegarde", description: "Backup quotidien du dossier ~/.n8n vers S3 ou Google Drive" },
      ]},
      { id: "3-17", type: "text", html: "<p>Avec cette architecture, tu factures au client : setup 1 500€ + 150€/mois de maintenance. Ton coût réel : 5€/mois de VPS + 30 min/mois de maintenance. Marge brute &gt; 90%.</p>" },
      { id: "3-18", type: "separator", style: "space" },

      { id: "3-19", type: "quiz-inline", question: "Quel est l'avantage principal du self-hosting n8n pour des clients dans des secteurs réglementés (santé, finance) ?", options: [
        { id: "a", text: "C'est gratuit donc moins cher pour le client" },
        { id: "b", text: "Les données ne transitent jamais par un serveur tiers — conformité RGPD totale" },
        { id: "c", text: "L'interface est plus facile à utiliser que Make" },
      ], correctId: "b", explanation: "En self-hosting, toutes les données restent sur le serveur du client. Aucune donnée ne passe par les serveurs de n8n Inc. C'est souvent obligatoire dans la santé (données patients) ou la finance (données sensibles)." },

      { id: "3-20", type: "separator", style: "dots" },
      { id: "3-21", type: "checklist", title: "Acquis de cette leçon", items: [
        { id: "c1", text: "J'ai installé n8n en local via npx ou Docker" },
        { id: "c2", text: "Je comprends la différence nœuds n8n vs modules Make" },
        { id: "c3", text: "J'ai créé un workflow avec un déclencheur Webhook" },
        { id: "c4", text: "Je sais expliquer l'avantage du self-hosting à un client" },
        { id: "c5", text: "J'ai compris l'architecture VPS pour facturer de la maintenance mensuelle" },
      ]},
    ]),
    exercise: "<h3>n8n en action</h3><p>Installe n8n en local et crée un workflow qui : (1) reçoit un webhook avec un nom et email, (2) utilise le nœud 'Set' pour formater un message de bienvenue personnalisé, (3) affiche le résultat dans le nœud de sortie. Ensuite, explore les nœuds disponibles et note <strong>5 intégrations</strong> pertinentes pour des clients que tu connais (CRM, outils comptabilité, e-commerce...). Partage ta liste dans la communauté.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal de n8n self-hosted par rapport à Make pour des clients en santé ou finance ?", options: JSON.stringify(["Une interface plus simple à utiliser", "Les données ne transitent jamais par un serveur tiers — conformité RGPD totale", "Un nombre d'intégrations plus élevé", "Un coût d'abonnement mensuel plus faible"]), correctAnswer: "Les données ne transitent jamais par un serveur tiers — conformité RGPD totale", explanation: "En self-hosting, toutes les données restent sur le serveur du client. Aucune donnée ne passe par les serveurs de n8n Inc. C'est souvent obligatoire dans la santé (données patients) ou la finance (données sensibles)." },
      { type: "true_false", question: "n8n peut être installé en local avec la simple commande 'npx n8n'.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La commande 'npx n8n' télécharge et lance n8n automatiquement. Il suffit d'avoir Node.js 18+ installé. L'interface est ensuite accessible sur http://localhost:5678." },
      { type: "mcq", question: "Avec l'architecture VPS + n8n self-hosted, quelle est la marge brute approximative sur une prestation facturée 150€/mois ?", options: JSON.stringify(["Environ 50%", "Environ 70%", "Plus de 90%", "Environ 30%"]), correctAnswer: "Plus de 90%", explanation: "Le coût réel est d'environ 5€/mois de VPS + 30 min de maintenance. Sur une facturation de 150€/mois, la marge brute dépasse 90%. C'est l'un des modèles les plus rentables pour une agence IA." },
      { type: "true_false", question: "Dans n8n, le nœud Code permet d'exécuter du JavaScript directement dans le workflow.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le nœud Code intégré à n8n accepte du JavaScript. Tu peux transformer des données, faire des boucles complexes, ou appeler des API custom directement dans le workflow. C'est un avantage majeur par rapport à Make." },
      { type: "mcq", question: "Une clinique vétérinaire vous demande d'automatiser les rappels de vaccination par SMS. Elle insiste sur le fait que les données des clients sont sensibles et ne doivent pas quitter leurs serveurs. Quel outil et quelle architecture lui proposez-vous ?", options: JSON.stringify(["Zapier car c'est le plus simple et le plus connu", "Make avec le plan gratuit pour réduire les coûts", "n8n self-hosted sur un VPS Docker avec reverse proxy Nginx + SSL", "Un script Python lancé manuellement chaque matin"]), correctAnswer: "n8n self-hosted sur un VPS Docker avec reverse proxy Nginx + SSL", explanation: "Les données de santé animale (et les données clients associées) sont sensibles. Le self-hosting n8n sur un VPS dédié garantit qu'aucune donnée ne transite par des serveurs tiers. Docker + Nginx + SSL offrent une infrastructure professionnelle et sécurisée." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 5,
    title: "Automatiser avec l'IA : le combo gagnant",
    slug: "automatiser-avec-ia-combo-gagnant",
    duration: "30 min",
    description: "Intègre Claude ou GPT-4 dans tes workflows Make et n8n. Analyse automatique de documents, classification de leads, réponses intelligentes : les automatisations IA que les clients paient le plus cher.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi l'IA transforme l'automatisation" },
      { id: "4-2", type: "text", html: "<p>Une automatisation classique suit des règles fixes : <em>si A alors B</em>. C'est utile, mais limité. Dès qu'il faut <strong>comprendre du texte libre, prendre une décision nuancée, ou générer du contenu</strong>, les règles rigides échouent.</p><p>L'IA dans les workflows change tout : tu peux maintenant automatiser des tâches qui semblaient impossibles à automatiser. Un email client qui arrive et qui est <strong>automatiquement classifié, priorisé, et auquel une réponse pertinente est suggérée</strong> — sans intervention humaine. C'est ça le combo gagnant.</p>" },
      { id: "4-3", type: "callout", variant: "success", html: "Les workflows avec IA se vendent 2 à 5 fois plus cher que les automatisations classiques. Un client comprend que \"surveiller un Google Sheet\" vaut 500€. Il comprend que \"analyser automatiquement ses emails clients et créer des tickets priorisés\" vaut 3 000€." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Les 4 patterns d'IA dans les workflows" },
      { id: "5-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Classification", description: "L'IA lit un texte et le classe dans une catégorie. Ex: email → Urgent/Normal/Spam. Lead → Chaud/Tiède/Froid." },
        { id: "n2", label: "Extraction", description: "L'IA extrait des données structurées depuis un texte non structuré. Ex: contrat PDF → date, montant, parties, clauses clés." },
        { id: "n3", label: "Génération", description: "L'IA génère du contenu basé sur des données. Ex: données client → email personnalisé, rapport, résumé." },
        { id: "n4", label: "Décision", description: "L'IA prend une décision basée sur un contexte complexe. Ex: CV reçu → compatible/incompatible avec le poste." },
      ]},
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Intégrer Claude API dans Make" },
      { id: "5-9", type: "text", html: "<p>Make n'a pas de module natif Claude (à ce jour), mais le module <strong>HTTP Request</strong> permet d'appeler n'importe quelle API. Voici comment appeler Claude depuis Make :</p>" },
      { id: "5-10", type: "steps", steps: [
        { title: "Récupérer ta clé API Claude", description: "Crée un compte sur console.anthropic.com, génère une API key. Stocke-la dans Make → Tools → Data Stores ou dans les variables d'environnement." },
        { title: "Ajouter un module HTTP Request", description: "URL : https://api.anthropic.com/v1/messages. Méthode : POST. Headers : anthropic-version: 2023-06-01, x-api-key: {{ta_clé}}, content-type: application/json." },
        { title: "Construire le body JSON", description: "Dans le body, construis le payload avec les données mappées du déclencheur précédent." },
        { title: "Parser la réponse", description: "Claude renvoie un JSON. Utilise le module JSON → Parse JSON pour extraire le texte de réponse et l'utiliser dans les modules suivants." },
      ]},
      { id: "5-11", type: "code", language: "json", filename: "make-claude-request-body.json", code: `{
  "model": "claude-opus-4-5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Analyse cet email client et réponds en JSON avec les champs : sentiment (positif/négatif/neutre), urgence (haute/moyenne/basse), catégorie (réclamation/question/compliment/autre), résumé_en_1_phrase.\\n\\nEmail:\\n{{1.emailBody}}"
    }
  ]
}` },
      { id: "5-12", type: "code", language: "json", filename: "claude-response-exemple.json", code: `{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "{\"sentiment\":\"négatif\",\"urgence\":\"haute\",\"catégorie\":\"réclamation\",\"résumé_en_1_phrase\":\"Le client n'a pas reçu sa commande du 10 mars et menace d'annuler.\"}"
    }
  ],
  "model": "claude-opus-4-5",
  "stop_reason": "end_turn",
  "usage": { "input_tokens": 312, "output_tokens": 47 }
}` },
      { id: "5-13", type: "callout", variant: "tip", html: "Demande toujours à Claude de répondre en <strong>JSON strict</strong> quand tu veux parser sa réponse. Ajoute dans ton prompt : 'Réponds uniquement avec un JSON valide, sans texte avant ni après.' Ça évite les problèmes de parsing." },
      { id: "5-14", type: "separator", style: "dots" },

      { id: "5-15", type: "heading", level: 2, text: "Cas concret : qualification automatique de leads" },
      { id: "5-16", type: "text", html: "<p>Voici un workflow complet vendable à une équipe commerciale. Chaque nouveau lead reçu par formulaire est <strong>automatiquement qualifié par IA</strong> et envoyé au bon commercial avec un briefing personnalisé.</p>" },
      { id: "5-17", type: "steps", steps: [
        { title: "Déclencheur : nouveau formulaire Typeform", description: "Le lead remplit nom, email, entreprise, besoin, budget estimé." },
        { title: "Claude analyse le lead", description: "Prompt : \"Analyse ce profil de prospect et détermine son potentiel. Score de 1 à 10, segment (Grand compte / PME / TPE), recommandation d'approche commerciale.\"" },
        { title: "Routage automatique", description: "Make router basé sur la réponse Claude : score 8-10 → commercial senior, score 4-7 → commercial junior, score 1-3 → séquence email nurturing automatique." },
        { title: "Notification Slack au commercial", description: "Message Slack avec le résumé IA : score, segment, et suggestion d'approche. Le commercial arrive au call déjà briefé." },
        { title: "Enregistrement CRM enrichi", description: "Création d'un contact dans HubSpot avec tous les champs remplis + les champs IA ajoutés (score, segment, notes)." },
      ]},
      { id: "5-18", type: "callout", variant: "warning", html: "Les coûts API IA dans les workflows sont souvent négligeables mais tu dois les calculer. 1 appel Claude Haiku = ~0,001€. 1 000 leads/mois qualifiés = ~1€ de coût IA. Intègre ça dans ta tarification mais ne surcharge pas le client." },
      { id: "5-19", type: "separator", style: "space" },

      { id: "5-20", type: "quiz-inline", question: "Tu crées un workflow qui analyse des emails entrants avec Claude. Claude doit retourner la catégorie de l'email. Quelle instruction est la plus importante dans ton prompt pour que le workflow fonctionne de manière fiable ?", options: [
        { id: "a", text: "Demander à Claude d'être précis et concis dans sa réponse" },
        { id: "b", text: "Exiger une réponse en JSON strict sans texte avant ni après" },
        { id: "c", text: "Spécifier la langue dans laquelle Claude doit répondre" },
      ], correctId: "b", explanation: "Le JSON strict est obligatoire. Si Claude ajoute un texte comme 'Voici mon analyse :' avant le JSON, le module de parsing va planter. Toujours inclure : 'Réponds UNIQUEMENT avec un JSON valide, aucun autre texte.' C'est la cause principale de bugs dans les workflows IA." },

      { id: "5-21", type: "separator", style: "dots" },
      { id: "5-22", type: "checklist", title: "Acquis de cette leçon", items: [
        { id: "c1", text: "Je comprends les 4 patterns d'IA dans les workflows (classifier, extraire, générer, décider)" },
        { id: "c2", text: "Je sais appeler l'API Claude depuis Make avec un module HTTP Request" },
        { id: "c3", text: "Je sais construire un prompt qui retourne du JSON parsable" },
        { id: "c4", text: "J'ai compris le workflow de qualification de leads IA de bout en bout" },
        { id: "c5", text: "Je sais estimer et intégrer les coûts API dans ma tarification" },
      ]},
    ]),
    exercise: "<h3>Construis le workflow de qualification</h3><p>Crée dans Make (ou n8n) un mini-workflow de qualification de leads : (1) déclencheur webhook qui reçoit nom + email + message libre, (2) appel Claude API qui analyse le message et retourne un JSON avec score (1-10) et catégorie, (3) condition : si score ≥ 7, envoie une notification à ton email. Teste avec 3 leads fictifs différents (un chaud, un tiède, un froid). <strong>Bonus</strong> : ajoute une étape qui enregistre les résultats dans un Google Sheet pour avoir un historique des qualifications.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 4 patterns principaux d'utilisation de l'IA dans les workflows d'automatisation ?", options: JSON.stringify(["Lecture, écriture, calcul, stockage", "Classification, extraction, génération, décision", "Copier, coller, formater, envoyer", "Créer, modifier, supprimer, archiver"]), correctAnswer: "Classification, extraction, génération, décision", explanation: "Les 4 patterns sont : Classification (catégoriser un texte), Extraction (extraire des données structurées), Génération (créer du contenu), et Décision (prendre une décision basée sur un contexte complexe). Chaque workflow IA utilise un ou plusieurs de ces patterns." },
      { type: "true_false", question: "Les workflows avec IA se vendent 2 à 5 fois plus cher que les automatisations classiques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un client comprend qu'une surveillance de Google Sheet vaut 500€. Mais analyser automatiquement ses emails et créer des tickets priorisés vaut 3 000€. L'IA ajoute une couche d'intelligence qui justifie un prix bien supérieur." },
      { type: "mcq", question: "Pourquoi est-il crucial de demander à Claude de répondre en JSON strict dans un workflow automatisé ?", options: JSON.stringify(["Pour réduire les coûts d'API", "Pour que le module de parsing puisse extraire les données sans erreur", "Pour accélérer la vitesse de réponse de Claude", "Pour que Claude comprenne mieux le contexte"]), correctAnswer: "Pour que le module de parsing puisse extraire les données sans erreur", explanation: "Si Claude ajoute du texte avant ou après le JSON (comme 'Voici mon analyse :'), le module JSON Parse va planter. Il faut toujours inclure dans le prompt : 'Réponds UNIQUEMENT avec un JSON valide.' C'est la cause principale de bugs dans les workflows IA." },
      { type: "true_false", question: "Un appel à l'API Claude Haiku pour qualifier un lead coûte environ 1€.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un appel Claude Haiku coûte environ 0,001€. Qualifier 1 000 leads par mois revient à environ 1€ de coût API total. Les coûts IA dans les workflows sont généralement négligeables, mais doivent être intégrés dans la tarification." },
      { type: "mcq", question: "Un prospect agence immobilière reçoit 80 demandes par semaine via son site. Il veut que les demandes urgentes (achat immédiat) soient traitées en priorité par ses meilleurs agents. Comment structurez-vous le workflow IA ?", options: JSON.stringify(["Vous envoyez toutes les demandes au même agent par email", "Vous utilisez Claude pour scorer chaque demande et un router Make pour diriger les leads chauds vers les agents seniors et les autres vers une séquence email automatique", "Vous supprimez les demandes avec un score faible pour ne pas perdre de temps", "Vous demandez au client de trier manuellement ses demandes comme avant"]), correctAnswer: "Vous utilisez Claude pour scorer chaque demande et un router Make pour diriger les leads chauds vers les agents seniors et les autres vers une séquence email automatique", explanation: "Le workflow IA optimal : Claude analyse chaque demande et attribue un score de 1 à 10. Le router Make dirige les scores 8-10 vers les agents seniors avec un briefing IA, les 4-7 vers des agents juniors, et les 1-3 vers une séquence email nurturing. Aucun lead n'est perdu." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 5,
    title: "Projet : un système de veille automatisé",
    slug: "projet-systeme-veille-automatise",
    duration: "25 min",
    description: "Construis de A à Z un système de veille automatisée : collecte de sources, analyse IA, digest quotidien envoyé par email. Un projet complet que tu peux vendre 1 500-3 000€ à des clients.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le projet final : une veille IA automatisée" },
      { id: "6-2", type: "text", html: "<p>Ce projet est le <strong>cas d'usage le plus vendable</strong> que tu puisses créer avec Make/n8n + IA. Pourquoi ? Parce que chaque dirigeant, consultant, investisseur, ou responsable marketing a besoin de rester informé — et personne n'a le temps de lire 50 sources par jour.</p><p>Tu vas construire un système qui :</p><ul><li>Surveille des sources d'information (RSS, Reddit, Google Alerts, etc.)</li><li>Collecte les nouvelles entrées chaque matin</li><li>Les analyse et les résume avec Claude</li><li>Envoie un email digest synthétique et actionnable</li></ul><p>Ce système se vend entre <strong>1 500 et 3 000€ en setup</strong>, avec 150-300€/mois de maintenance.</p>" },
      { id: "6-3", type: "callout", variant: "success", html: "Ce type de solution est particulièrement apprécié des cabinets de conseil, fonds d'investissement, agences marketing et journalistes. Ce sont des clients qui ont <strong>du budget</strong> et comprennent immédiatement la valeur." },
      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Architecture du système" },
      { id: "6-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Sources (RSS/API)", description: "TechCrunch RSS, Reddit API, Google News RSS, LinkedIn RSS — configurés dans Make" },
        { id: "n2", label: "Collecte (07h00)", description: "Scénario Make déclenché chaque matin, collecte les articles des dernières 24h" },
        { id: "n3", label: "Déduplication", description: "Filtre Make : exclusion des URLs déjà vus (stockage dans un Data Store)" },
        { id: "n4", label: "Analyse IA (Claude)", description: "Pour chaque article : pertinence (1-10), résumé 50 mots, insight clé, action recommandée" },
        { id: "n5", label: "Sélection", description: "Filtre : garder seulement les articles avec score ≥ 7" },
        { id: "n6", label: "Génération du digest", description: "Claude génère un email HTML formaté avec tous les articles sélectionnés" },
        { id: "n7", label: "Envoi (08h00)", description: "Email envoyé via Gmail ou SendGrid avec le digest du jour" },
      ]},
      { id: "6-7", type: "separator", style: "line" },

      { id: "6-8", type: "heading", level: 2, text: "Construction étape par étape" },
      { id: "6-9", type: "steps", steps: [
        { title: "Configurer les sources RSS", description: "Dans Make, module 'RSS' → Watch RSS Feed. Exemple : https://techcrunch.com/feed/. Interval : 1 fois par jour à 7h00. Ajoute autant de modules RSS que de sources (elles tournent en parallèle avec les routers Make)." },
        { title: "Stocker les articles vus", description: "Module Make Data Store → Add a Record pour chaque URL traitée. Avant traitement : vérifier si l'URL existe déjà → si oui, ignorer. Cette déduplication évite les doublons entre les exécutions." },
        { title: "Appeler Claude pour chaque article", description: "Module HTTP Request → API Claude. Prompt : extraire titre, résumé 50 mots, score de pertinence par rapport au secteur défini, insight clé en 1 phrase." },
        { title: "Filtrer par score", description: "Router Make → Branche 1 : score ≥ 7 (continuer). Branche 2 : score < 7 (stop). Cela réduit le nombre d'articles dans le digest final à 5-15 articles pertinents." },
        { title: "Agréger les résultats", description: "Module Array aggregator → rassemble tous les articles analysés dans un seul tableau JSON. Ce tableau servira de contexte pour la génération du digest." },
        { title: "Générer le digest HTML avec Claude", description: "Appel Claude avec le tableau JSON en input. Prompt : générer un email HTML professionnel avec titre, date, liste des articles formatés en sections." },
        { title: "Envoyer par email", description: "Module Gmail ou SendGrid → envoyer le contenu HTML généré. Objet : 'Veille IA du [date] — X articles sélectionnés'." },
      ]},
      { id: "6-10", type: "separator", style: "dots" },

      { id: "6-11", type: "heading", level: 2, text: "Le prompt de génération du digest" },
      { id: "6-12", type: "code", language: "text", filename: "prompt-digest-veille.txt", code: `Tu es un analyste expert en [SECTEUR DU CLIENT].

Voici les articles collectés aujourd'hui (format JSON) :
{{articles_json}}

Génère un email HTML professionnel de veille sectorielle avec :
1. Un titre H1 : "Veille [SECTEUR] — [DATE]"
2. Un paragraphe d'introduction (2 phrases) résumant les grandes tendances du jour
3. Pour chaque article :
   - H3 : titre de l'article avec lien cliquable
   - Un résumé de 2-3 phrases
   - Un encadré "💡 Insight" avec l'action ou la tendance clé à retenir
4. Une conclusion de 3 lignes avec les 3 points à retenir de la journée

Style : professionnel, direct, actionnable. Police Arial, couleurs neutres.
Langue : français.
IMPORTANT : Retourne UNIQUEMENT le code HTML complet, sans backticks ni commentaires.` },
      { id: "6-13", type: "callout", variant: "tip", html: "Personnalise le secteur et les sources selon chaque client. Un cabinet RH surveillera LinkedIn, SHRM et les blogs RH. Un fonds d'investissement surveillera TechCrunch, Crunchbase et les feeds de VC. La <strong>personnalisation est la clé de la valeur perçue</strong>." },
      { id: "6-14", type: "separator", style: "dots" },

      { id: "6-15", type: "heading", level: 2, text: "Exemple de digest généré" },
      { id: "6-16", type: "code", language: "json", filename: "article-analyse-exemple.json", code: `{
  "url": "https://techcrunch.com/2025/03/13/ai-agents-enterprise",
  "title": "Enterprise AI Agents Market Reaches $15B in 2025",
  "published": "2025-03-13T08:00:00Z",
  "source": "TechCrunch",
  "claude_analysis": {
    "pertinence_score": 9,
    "resume": "Le marché des agents IA en entreprise atteint 15 milliards de dollars en 2025, porté par l'automatisation des processus RH et finance.",
    "insight_cle": "Les PME représentent 40% de la croissance — opportunité directe pour les agences IA qui ciblent ce segment.",
    "action_recommandee": "Développer une offre packagée 'Agent IA PME' sous les 2 000€"
  }
}` },
      { id: "6-17", type: "text", html: "<p>Ce niveau de personnalisation et d'insight dépasse largement ce que les agrégateurs classiques (Feedly, Flipboard) proposent. Tu ne vends pas une veille — tu vends une <strong>analyse stratégique automatisée</strong>. La différence de valeur perçue est énorme.</p>" },
      { id: "6-18", type: "separator", style: "line" },

      { id: "6-19", type: "heading", level: 2, text: "Comment vendre ce projet" },
      { id: "6-20", type: "comparison", headers: ["Étape de vente", "Ce que tu dis", "Résultat attendu"], rows: [
        { cells: ["Découverte", "\"Vous lisez combien de sources chaque matin ? Combien de temps ça vous prend ?\"", "Le client réalise le coût en temps (souvent 1-2h/jour)"] },
        { cells: ["Démo live", "Montrer un digest réel sur son secteur généré en 10 min", "\"C'est exactement ce dont j'ai besoin\""] },
        { cells: ["Proposition", "Setup 2 000€ + 200€/mois — ROI en 3 semaines si son temps vaut 50€/h", "Signature rapide si le prospect est décideur"] },
        { cells: ["Upsell", "\"Je peux aussi vous alerter en temps réel dès qu'un concurrent est mentionné\"", "Extension du contrat à 300-400€/mois"] },
      ]},
      { id: "6-21", type: "callout", variant: "warning", html: "Ne propose pas une veille \"générique\". Toujours <strong>personnaliser la démo</strong> avec les vraies sources du secteur client et les vrais mots-clés qu'il suit. Une démo générique ne convainc personne. Une démo avec TechCrunch remplacé par les médias de son secteur et ses concurrents en mots-clés — ça signe." },
      { id: "6-22", type: "separator", style: "space" },

      { id: "6-23", type: "quiz-inline", question: "Pourquoi le module de déduplication (vérifier si l'URL a déjà été traitée) est-il indispensable dans ce système de veille ?", options: [
        { id: "a", text: "Pour économiser des opérations Make et réduire les coûts" },
        { id: "b", text: "Pour éviter que le même article apparaisse plusieurs fois dans le digest et épuiser le quota API Claude inutilement" },
        { id: "c", text: "Pour que le système fonctionne plus rapidement" },
      ], correctId: "b", explanation: "Sans déduplication, un article posté un lundi apparaîtrait dans le digest du lundi, du mardi (encore dans le feed RSS), du mercredi... Le client recevrait des doublons. Et chaque analyse Claude = coût API. La déduplication protège la qualité du digest ET les coûts." },

      { id: "6-24", type: "separator", style: "dots" },
      { id: "6-25", type: "checklist", title: "Acquis de cette leçon — et du module Automatisations", items: [
        { id: "c1", text: "J'ai compris l'architecture complète d'un système de veille automatisée" },
        { id: "c2", text: "Je sais construire les 7 étapes du workflow Make/n8n" },
        { id: "c3", text: "Je maîtrise le prompt de génération d'un digest HTML professionnel" },
        { id: "c4", text: "Je sais présenter et vendre ce projet à un client (démo → proposition → upsell)" },
        { id: "c5", text: "Je peux calculer le ROI et justifier un tarif de 2 000€ setup + 200€/mois" },
        { id: "c6", text: "J'ai les bases pour construire n'importe quel workflow Make/n8n avec ou sans IA" },
      ]},
    ]),
    exercise: "<h3>Construis ta démo portfolio</h3><p>C'est le projet final du module. Construis un système de veille fonctionnel sur un secteur de ton choix :</p><ol><li>Choisis 3-5 sources RSS gratuites pertinentes</li><li>Construis le scénario Make complet (collecte → analyse Claude → digest HTML)</li><li>Envoie le digest à ta propre adresse email pendant 3 jours consécutifs</li><li>Ajuste le prompt de génération jusqu'à obtenir un rendu que tu montrerais fièrement à un client</li></ol><p>Ce workflow <strong>devient ton portfolio</strong>. Screenshot l'interface Make, screenshot un exemple de digest, et publie dans la communauté avec le titre de ton secteur. C'est aussi ta démo commerciale pour les prospects de ce secteur.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi le module de déduplication est-il indispensable dans un système de veille automatisé ?", options: JSON.stringify(["Pour accélérer le traitement des articles", "Pour éviter les doublons dans le digest et les coûts API inutiles", "Pour augmenter le nombre d'articles collectés", "Pour formater les articles en HTML"]), correctAnswer: "Pour éviter les doublons dans le digest et les coûts API inutiles", explanation: "Sans déduplication, un article resté dans le feed RSS apparaîtrait dans plusieurs digests consécutifs. Le client recevrait des doublons et chaque analyse Claude inutile coûte de l'argent. Le Data Store Make stocke les URLs déjà traitées." },
      { type: "true_false", question: "Un système de veille automatisé peut se vendre entre 1 500 et 3 000€ en setup avec 150-300€/mois de maintenance.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est un des projets les plus vendables : chaque dirigeant, consultant ou investisseur a besoin de rester informé. Le setup couvre la configuration des sources et du workflow. La maintenance mensuelle couvre l'ajustement des sources et le monitoring." },
      { type: "mcq", question: "Quel élément est le plus important pour convaincre un client lors de la démo d'un système de veille ?", options: JSON.stringify(["Montrer l'interface technique de Make", "Présenter un digest personnalisé avec les vraies sources de son secteur", "Expliquer en détail le fonctionnement des flux RSS", "Montrer le coût de l'API Claude"]), correctAnswer: "Présenter un digest personnalisé avec les vraies sources de son secteur", explanation: "Une démo générique ne convainc personne. Il faut personnaliser avec les vrais médias du secteur du client et ses mots-clés. Quand le client voit ses sources analysées et résumées, il comprend immédiatement la valeur." },
      { type: "true_false", question: "Le module Array Aggregator dans Make sert à rassembler tous les articles analysés en un seul tableau JSON avant de générer le digest.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'Array Aggregator collecte les résultats individuels de chaque article analysé et les regroupe dans un tableau JSON unique. Ce tableau sert ensuite de contexte à Claude pour générer le digest HTML complet en une seule requête." },
      { type: "mcq", question: "Un client investisseur vous demande un système de veille automatisé sur le secteur immobilier. Lors de la démo, il trouve le digest trop long avec trop d'articles peu pertinents. Que faites-vous ?", options: JSON.stringify(["Vous réduisez le nombre de sources RSS à une seule", "Vous augmentez le seuil de pertinence IA (de score ≥ 5 à score ≥ 7) et vous ajustez le prompt pour mieux cibler son secteur", "Vous supprimez l'analyse IA pour aller plus vite", "Vous envoyez le digest une seule fois par mois au lieu de quotidiennement"]), correctAnswer: "Vous augmentez le seuil de pertinence IA (de score ≥ 5 à score ≥ 7) et vous ajustez le prompt pour mieux cibler son secteur", explanation: "Le seuil ≥ 7 sur 10 filtre les articles les plus pertinents (5-15 par digest). Ajuster le prompt avec les mots-clés spécifiques du client améliore la précision du scoring. Le résultat : un digest concis et ultra-ciblé que le client lit réellement chaque matin." },
    ],
  },
];
