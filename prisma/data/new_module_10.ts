// ═══════════════════════════════════════════════════
// MODULE 10 — Ton offre & tes prix
// 7 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_10_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 8,
    title: "De 'je sais faire' à 'je vends' : le mindset shift",
    slug: "mindset-shift-je-sais-faire-je-vends",
    duration: "20 min",
    description: "Dépasser le syndrome de l'imposteur, comprendre la valeur perçue vs la valeur réelle, et faire le saut mental de technicien à vendeur.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le problème que tout le monde a au départ" },
      { id: "1-2", type: "text", html: "<p>Tu sais installer un chatbot. Tu sais créer une automatisation avec n8n. Tu sais déployer un agent IA. Mais quand vient le moment de parler prix à un client… tu baisses les yeux, tu te dis que c'est pas encore assez, que t'as besoin d'apprendre encore un peu.</p><p>Ce blocage a un nom : <strong>le syndrome de l'imposteur</strong>. Et il coûte des milliers d'euros à ceux qui ne le traitent pas.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Vérité difficile à entendre :</strong> ton client ne s'en fout pas de tes compétences techniques. Il s'en fout de savoir si tu utilises Claude ou GPT-4. Il s'en fout du nombre d'heures que tu passes. Il veut un résultat. Et si tu lui livres ce résultat, il te paiera — même si tu as appris à le faire la semaine dernière." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Valeur perçue vs valeur réelle" },
      { id: "1-6", type: "comparison", headers: ["Valeur réelle (ce que TU vois)", "Valeur perçue (ce que le CLIENT voit)"], rows: [
        { cells: ["2h de travail pour installer un chatbot", "Un outil qui répond aux clients 24h/24 sans embaucher quelqu'un"] },
        { cells: ["Un workflow n8n de 15 étapes", "30 heures de travail manuel économisées chaque mois"] },
        { cells: ["Un site fait avec Framer + IA en 3 jours", "Une vitrine professionnelle qui génère des leads"] },
        { cells: ["Un script Python de 200 lignes", "Zéro erreur de saisie, zéro stress, zéro retard"] },
      ]},
      { id: "1-7", type: "text", html: "<p>Le client n'achète <strong>jamais</strong> ton temps. Il achète la transformation. Il achète ce qu'il gagne (argent, temps, tranquillité) grâce à ce que tu lui livres. C'est la base de tout le pricing que tu vas apprendre dans ce module.</p>" },

      { id: "1-8", type: "heading", level: 2, text: "Tu n'as pas besoin d'être expert pour vendre" },
      { id: "1-9", type: "steps", steps: [
        { title: "Étape 0 : tu apprends", description: "Tu suis cette formation, tu fais les exercices, tu pratiques sur des projets personnels ou de test." },
        { title: "Étape 1 : tu livres", description: "Tu prends un premier client — même gratuitement ou à prix réduit — pour avoir un cas concret." },
        { title: "Étape 2 : tu prouves", description: "Ce projet devient ton portfolio. Tu as un résultat réel à montrer. Tu sors du vide." },
        { title: "Étape 3 : tu vends", description: "Tu utilises ce cas client pour convaincre les suivants. Le prix monte à chaque deal." },
      ]},
      { id: "1-10", type: "callout", variant: "tip", html: "<strong>Le secret :</strong> le premier client paye pour ton résultat, pas pour ton expérience. Même un débutant peut créer un chatbot qui économise 2 heures par jour à un commerce. Ces 2 heures valent de l'argent réel." },

      { id: "1-11", type: "separator", style: "line" },
      { id: "1-12", type: "heading", level: 2, text: "Le reframe mental indispensable" },
      { id: "1-13", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Mindset technicien", description: "Je vends mon temps et mes compétences. Je facture à l'heure. Je me compare aux autres." },
        { id: "n2", label: "Mindset consultant", description: "Je vends un résultat. Je facture au projet. Je me compare à la valeur créée." },
        { id: "n3", label: "Mindset entrepreneur", description: "Je vends une transformation. Je facture à l'impact. Je suis la solution, pas un coût." },
      ]},
      { id: "1-14", type: "text", html: "<p>La plupart des freelances restent bloqués au niveau 1. Ceux qui passent au niveau 2 et 3 multiplient leurs revenus par 3 à 10 — sans travailler plus. La seule différence, c'est comment ils se positionnent et comment ils parlent de leur travail.</p>" },
      { id: "1-15", type: "callout", variant: "info", html: "Un consultant qui facture 300€/h n'est pas 10x meilleur qu'un freelance à 30€/h. Il a juste appris à vendre différemment." },

      { id: "1-16", type: "separator", style: "dots" },
      { id: "1-17", type: "quiz-inline", question: "Pourquoi le syndrome de l'imposteur est dangereux pour ton business ?", options: [
        { id: "a", text: "Parce que tu risques de décevoir tes clients" },
        { id: "b", text: "Parce qu'il te fait sous-vendre ou ne pas vendre du tout, alors que tu as de la valeur à offrir" },
        { id: "c", text: "Parce que les clients vont voir que tu n'es pas expert" },
      ], correctId: "b", explanation: "Le syndrome de l'imposteur te fait croire que tu n'es pas légitime. Mais le client juge sur le résultat, pas sur ton sentiment d'expertise. Attendre d'être 'prêt' est la meilleure façon de ne jamais démarrer." },

      { id: "1-18", type: "checklist", title: "Avant de passer à la suite", items: [
        { id: "c1", text: "J'ai compris la différence entre valeur réelle et valeur perçue" },
        { id: "c2", text: "Je sais que mon client achète un résultat, pas mon temps" },
        { id: "c3", text: "J'accepte que je n'ai pas besoin d'être expert pour prendre mon premier client" },
        { id: "c4", text: "J'ai identifié mon niveau de mindset actuel (technicien / consultant / entrepreneur)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Reframe ta valeur</h3><p>Prends un service que tu sais faire (chatbot, automatisation, site web). Écris deux descriptions :</p><ul><li><strong>Version technicien :</strong> décris ce que tu fais techniquement (outils, heures, étapes)</li><li><strong>Version entrepreneur :</strong> décris le résultat pour le client (temps gagné, argent généré, problème résolu)</li></ul><p>La version entrepreneur, c'est celle que tu utiliseras pour vendre. Garde-la — on va s'en servir dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence clé entre le mindset technicien et le mindset entrepreneur ?", options: JSON.stringify(["Le technicien gagne plus que l'entrepreneur", "Le technicien vend son temps, l'entrepreneur vend une transformation", "L'entrepreneur travaille plus d'heures", "Le technicien a plus de clients"]), correctAnswer: "Le technicien vend son temps, l'entrepreneur vend une transformation", explanation: "Le technicien facture à l'heure et se compare aux autres. L'entrepreneur facture à l'impact et se positionne comme une solution. C'est cette différence de mindset qui multiplie les revenus par 3 à 10." },
      { type: "true_false", question: "Le client achète principalement tes compétences techniques et le nombre d'heures que tu passes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le client n'achète jamais ton temps. Il achète la transformation : le temps gagné, l'argent généré, le problème résolu. Il se fiche de savoir si tu utilises Claude ou GPT-4 tant que le résultat est là." },
      { type: "mcq", question: "Que coûte le syndrome de l'imposteur aux freelances IA ?", options: JSON.stringify(["Des problèmes de qualité dans les livrables", "Des milliers d'euros car il fait sous-vendre ou ne pas vendre du tout", "Une perte de compétences techniques", "Des conflits avec les clients"]), correctAnswer: "Des milliers d'euros car il fait sous-vendre ou ne pas vendre du tout", explanation: "Le syndrome de l'imposteur te fait croire que tu n'es pas légitime, ce qui te pousse à sous-facturer ou à ne pas oser prendre de clients. C'est un coût d'opportunité majeur." },
      { type: "true_false", question: "Tu dois être expert reconnu avec des années d'expérience avant de prendre ton premier client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le premier client paye pour le résultat, pas pour ton expérience. Un débutant peut créer un chatbot qui économise 2 heures par jour à un commerce. Ces 2 heures ont une valeur réelle peu importe depuis combien de temps tu pratiques." },
      { type: "mcq", question: "Un prospect vous demande combien coûte un chatbot. Vous lui répondez '1 500€'. Il dit 'c'est cher'. Comment rattrapez-vous la situation ?", options: JSON.stringify(["Vous baissez immédiatement votre prix à 800€", "Vous expliquez que le chatbot lui économisera 2h/jour de SAV, soit 700€/mois, et que l'investissement est remboursé en 2 mois", "Vous lui dites que c'est le prix du marché et qu'il n'a pas le choix", "Vous lui proposez de faire le chatbot gratuitement pour avoir un premier client"]), correctAnswer: "Vous expliquez que le chatbot lui économisera 2h/jour de SAV, soit 700€/mois, et que l'investissement est remboursé en 2 mois", explanation: "L'erreur était de donner le prix avant la valeur. En montrant le ROI (700€/mois d'économie, remboursé en 2 mois), le prix de 1 500€ devient évident. Le client n'achète pas un chatbot — il achète les 8 400€ d'économies annuelles." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 8,
    title: "Les 5 services IA les plus rentables à vendre",
    slug: "5-services-ia-les-plus-rentables",
    duration: "25 min",
    description: "Découvrir les 5 services IA que les agences vendent aujourd'hui, leurs fourchettes de prix, leur complexité et comment se positionner sur chacun.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Qu'est-ce qu'on vend exactement ?" },
      { id: "2-2", type: "text", html: "<p>L'IA c'est large. Mais en pratique, quand tu parles à un chef d'entreprise, il y a <strong>5 types de missions</strong> qui reviennent tout le temps — et qui correspondent à des budgets précis. Voici la carte du marché.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Ces fourchettes sont basées sur des missions réelles vendues par des agences IA en France et en Europe en 2024-2025. Elles varient selon le client (PME vs grand compte) et ta réputation." },

      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Service #1 — Chatbots & assistants IA" },
      { id: "2-6", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Chatbot FAQ simple (Voiceflow ou Typebot), 20-30 questions, intégré sur un site", "500€ – 1 500€", "3-5 jours"] },
        { cells: ["Standard", "Chatbot avec base de connaissances (RAG), connecté au CRM ou à un outil métier", "1 500€ – 3 500€", "1-2 semaines"] },
        { cells: ["Premium", "Assistant IA multi-canal (site + WhatsApp + mail), entraîné sur des données custom, analytics", "3 500€ – 5 000€+", "2-4 semaines"] },
      ]},
      { id: "2-7", type: "text", html: "<p><strong>Pour qui ?</strong> E-commerces, cabinets médicaux, immobilier, hôtellerie, services à la clientèle. Tout business qui reçoit les mêmes questions en boucle.</p><p><strong>Argument de vente :</strong> 'Votre chatbot répond à vos clients à 3h du matin, en moins de 5 secondes, avec les bonnes informations — sans que vous leviez le petit doigt.'</p>" },

      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Service #2 — Automatisations & workflows" },
      { id: "2-10", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Workflow simple (ex: devis auto envoyé par mail quand formulaire rempli)", "300€ – 800€", "1-2 jours"] },
        { cells: ["Standard", "Automatisation multi-étapes (CRM + facturation + notification Slack)", "800€ – 2 000€", "3-7 jours"] },
        { cells: ["Premium", "Système complet (onboarding client automatisé, reporting auto, alertes IA)", "2 000€ – 5 000€", "2-3 semaines"] },
      ]},
      { id: "2-11", type: "text", html: "<p><strong>Pour qui ?</strong> Agences, cabinets, PME avec des process répétitifs. Si quelqu'un fait la même chose à la main plus de 3 fois par semaine, c'est une automatisation potentielle.</p><p><strong>Outils :</strong> n8n, Make, Zapier, et du code Python pour les cas avancés.</p>" },

      { id: "2-12", type: "separator", style: "line" },
      { id: "2-13", type: "heading", level: 2, text: "Service #3 — Sites web avec IA intégrée" },
      { id: "2-14", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Landing page ou site vitrine (Framer / Next.js) sans IA embarquée", "1 000€ – 2 000€", "3-5 jours"] },
        { cells: ["Standard", "Site avec chatbot intégré, formulaires intelligents, SEO IA-assisté", "2 000€ – 4 000€", "1-2 semaines"] },
        { cells: ["Premium", "Site + espace membre + agent IA + CRM connecté + analytics", "4 000€ – 8 000€", "3-6 semaines"] },
      ]},
      { id: "2-15", type: "text", html: "<p><strong>Avantage concurrentiel :</strong> tu livres en 5 jours ce qu'une agence web classique mettrait 6 semaines à faire. Et tu intègres l'IA nativement, ce qu'une agence classique ne sait pas faire.</p>" },

      { id: "2-16", type: "separator", style: "line" },
      { id: "2-17", type: "heading", level: 2, text: "Service #4 — Agents IA & systèmes autonomes" },
      { id: "2-18", type: "text", html: "<p>C'est le service le plus cher et le plus rare. Un agent IA ne répond pas juste à des questions — il <strong>prend des décisions et agit</strong> : cherche des infos sur le web, envoie des mails, met à jour une base de données, planifie des tâches.</p>" },
      { id: "2-19", type: "comparison", headers: ["Use case", "Description", "Prix marché"], rows: [
        { cells: ["Agent SDR (Sales)", "Cherche des prospects sur LinkedIn, envoie des messages personnalisés, relance automatiquement", "3 000€ – 6 000€"] },
        { cells: ["Agent de veille", "Surveille la concurrence, les news du secteur, produit un rapport hebdo automatique", "2 000€ – 4 000€"] },
        { cells: ["Agent support avancé", "Gère les tickets, escalade les cas complexes, met à jour le CRM, notifie les équipes", "4 000€ – 8 000€"] },
        { cells: ["Agent comptable", "Extrait les données des factures, les catégorise, produit des exports pour le comptable", "3 000€ – 10 000€"] },
      ]},

      { id: "2-20", type: "separator", style: "line" },
      { id: "2-21", type: "heading", level: 2, text: "Service #5 — Consulting & formation IA" },
      { id: "2-22", type: "text", html: "<p>Tu n'as pas toujours besoin de coder ou de livrer quelque chose. Les entreprises paient aussi pour <strong>être guidées</strong> : quels outils adopter, comment former leurs équipes, quel budget allouer.</p>" },
      { id: "2-23", type: "comparison", headers: ["Format", "Ce que tu fais", "Prix marché"], rows: [
        { cells: ["Audit IA", "Analyser les process de l'entreprise, identifier les gains IA possibles, livrer un rapport", "500€ – 2 000€"] },
        { cells: ["Accompagnement mensuel", "1 à 2 calls/mois + implémentation guidée + support Slack", "500€ – 1 500€/mois"] },
        { cells: ["Formation équipe", "Atelier de 1/2 journée ou journée complète pour former des collaborateurs", "150€ – 300€/heure"] },
        { cells: ["Roadmap IA", "Plan stratégique 12 mois d'intégration IA, priorisé par ROI", "1 500€ – 5 000€"] },
      ]},
      { id: "2-24", type: "callout", variant: "success", html: "<strong>Combo gagnant :</strong> Audit IA (1 500€) → Implémentation (3 000€) → Accompagnement mensuel (800€/mois). Un seul client peut valoir 10 000€+ sur 6 mois." },

      { id: "2-25", type: "quiz-inline", question: "Quel service IA a le meilleur rapport effort/prix pour débuter ?", options: [
        { id: "a", text: "Les agents IA autonomes, parce que c'est le plus cher" },
        { id: "b", text: "Les chatbots FAQ simples, parce que c'est rapide à livrer et il y a énormément de clients potentiels" },
        { id: "c", text: "Les sites web, parce que tout le monde en a besoin" },
      ], correctId: "b", explanation: "Un chatbot FAQ simple (500-1500€) peut se livrer en 3 jours. Avec 2 clients par semaine, c'est 4 000€/mois sans se tuer au travail. C'est le meilleur point de départ avant de monter en gamme." },

      { id: "2-26", type: "checklist", title: "Ce que tu dois retenir", items: [
        { id: "c1", text: "Je connais les 5 services IA et leurs fourchettes de prix réelles" },
        { id: "c2", text: "J'ai identifié 1 ou 2 services sur lesquels je veux me concentrer en premier" },
        { id: "c3", text: "Je comprends l'argument de vente derrière chaque service (pas technique, résultat)" },
        { id: "c4", text: "Je sais qu'un seul client peut valoir plusieurs milliers d'euros sur la durée" },
      ]},
    ]),
    exercise: "<h3>Exercice : Choisis ton service principal</h3><p>Parmi les 5 services, choisis celui qui correspond le mieux à tes compétences actuelles ET au marché autour de toi. Écris :</p><ol><li>Le service que tu veux vendre en premier</li><li>3 types de clients qui en ont besoin (secteurs, tailles d'entreprise)</li><li>L'argument de vente en 2 phrases (résultat, pas technique)</li></ol><p>Ce sera la base de ton offre dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le prix marché d'un chatbot Standard avec base de connaissances RAG et CRM intégré ?", options: JSON.stringify(["200€ – 500€", "500€ – 1 500€", "1 500€ – 3 500€", "10 000€ – 20 000€"]), correctAnswer: "1 500€ – 3 500€", explanation: "Un chatbot Standard avec base de connaissances (RAG) et connexion CRM se facture entre 1 500€ et 3 500€ sur le marché français, avec un délai de 1 à 2 semaines." },
      { type: "true_false", question: "Le combo Audit IA + Implémentation + Accompagnement mensuel peut valoir plus de 10 000€ sur 6 mois avec un seul client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Audit IA (1 500€) + Implémentation (3 000€) + Accompagnement mensuel (800€/mois x 6) = 10 300€. Un seul client bien accompagné peut générer un revenu significatif sur la durée." },
      { type: "mcq", question: "Quel service IA a le meilleur rapport effort/prix pour un débutant ?", options: JSON.stringify(["Les agents IA autonomes, car c'est le plus cher", "Les chatbots FAQ simples, car c'est rapide à livrer avec beaucoup de clients potentiels", "Le consulting stratégique, car pas besoin de coder", "Les sites web Premium à 8 000€"]), correctAnswer: "Les chatbots FAQ simples, car c'est rapide à livrer avec beaucoup de clients potentiels", explanation: "Un chatbot FAQ simple (500-1 500€) se livre en 3-5 jours. Avec 2 clients par semaine, c'est 4 000€/mois. C'est le meilleur point de départ avant de monter en gamme." },
      { type: "true_false", question: "Un agent IA SDR (Sales) qui prospecte automatiquement sur LinkedIn peut se facturer entre 3 000€ et 6 000€.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les agents IA sont le service le plus rare et le plus cher. Un agent SDR qui cherche des prospects, envoie des messages personnalisés et relance automatiquement se facture entre 3 000€ et 6 000€." },
      { type: "mcq", question: "Vous débutez et vous hésitez entre vendre des agents IA autonomes à 5 000€ ou des chatbots FAQ simples à 1 000€. Vous n'avez encore aucun client. Quel choix est le plus stratégique pour démarrer ?", options: JSON.stringify(["Les agents IA à 5 000€ car c'est plus rentable par projet", "Les chatbots FAQ simples car ils se livrent en 3 jours, génèrent des avis rapides et permettent de monter en gamme ensuite", "Les deux en même temps pour maximiser les chances", "Aucun des deux — il faut d'abord faire 6 mois de formation supplémentaire"]), correctAnswer: "Les chatbots FAQ simples car ils se livrent en 3 jours, génèrent des avis rapides et permettent de monter en gamme ensuite", explanation: "Pour un débutant, les chatbots FAQ simples ont le meilleur rapport effort/prix : livraison rapide (3-5 jours), beaucoup de clients potentiels, et chaque projet génère un avis et de l'expérience. Avec 2 clients par semaine, c'est 4 000€/mois. Les agents IA viendront après." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 8,
    title: "Construire ton offre irrésistible",
    slug: "construire-ton-offre-irresistible",
    duration: "25 min",
    description: "Apprendre le framework Offre = Résultat + Garantie + Urgence, structurer ses services en tiers Starter/Pro/Premium, et packager ce qui était flou en quelque chose qu'on a envie d'acheter.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Pourquoi 'je fais des chatbots' ne se vend pas" },
      { id: "3-2", type: "text", html: "<p>Quand tu dis 'je fais des chatbots', le client entend : <em>encore un prestataire technique que je vais devoir gérer</em>. Il ne comprend pas ce qu'il achète, il ne sait pas ce que ça va lui coûter, et il ne sait pas si ça va vraiment marcher.</p><p>Une offre irrésistible, c'est l'inverse : le client comprend <strong>exactement</strong> ce qu'il obtient, en combien de temps, pour quel prix — et il se sent en sécurité pour dire oui.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "Une bonne offre réduit le risque perçu à zéro. Le client doit se dire 'si ça ne marche pas, qu'est-ce que je perds ?' La réponse doit être : rien." },

      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Le framework : Offre = Résultat + Garantie + Urgence" },
      { id: "3-6", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Offre irrésistible", description: "Les 3 composantes qui font qu'un client dit oui sans hésiter" },
        { id: "n2", label: "Résultat", description: "Ce que le client obtient concrètement. Pas 'un chatbot' mais 'vos clients obtiennent une réponse en 5 secondes, 7j/7'" },
        { id: "n3", label: "Garantie", description: "Ce qui enlève le risque. 'Si vous n'êtes pas satisfait dans 7 jours, on rembourse' ou 'On corrige jusqu'à ce que ça marche'" },
        { id: "n4", label: "Urgence", description: "Pourquoi maintenant et pas dans 3 mois. 'Je prends 2 clients par mois seulement' ou 'Tarif lancement valable jusqu'au 31'" },
      ]},
      { id: "3-7", type: "text", html: "<p>Ces 3 éléments doivent apparaître dans chaque conversation de vente, chaque page d'offre, chaque devis. Si l'un manque, le client procrastine.</p>" },

      { id: "3-8", type: "heading", level: 2, text: "Exemples d'offres packagées" },
      { id: "3-9", type: "code", language: "text", filename: "offre-chatbot-packagée.txt", code: `OFFRE : Chatbot Support Express
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÉSULTAT :
Votre site répond à vos clients 24h/24, 7j/7
sans que vous ayez à lever le petit doigt.

CE QUI EST INCLUS :
✓ Chatbot configuré avec vos 30 FAQ principales
✓ Design aux couleurs de votre marque
✓ Intégration sur votre site en 48h
✓ Formation de 30 min pour tout gérer vous-même
✓ Support par mail pendant 30 jours

GARANTIE :
Si après 7 jours vous n'êtes pas satisfait du résultat,
on rembourse 100% — sans question.

TARIF : 990€ HT (paiement en 2x possible)
DÉLAI : Livraison en 5 jours ouvrés garantie

DISPONIBILITÉ : Je prends 3 clients/mois maximum.
Il reste 1 place disponible ce mois-ci.` },
      { id: "3-10", type: "callout", variant: "success", html: "Remarque : nulle part dans cette offre on ne parle de Voiceflow, de tokens, d'API ou de modèle IA. Le client s'en fout. Il voit un résultat, une garantie, et une contrainte de disponibilité qui crée l'urgence." },

      { id: "3-11", type: "separator", style: "line" },
      { id: "3-12", type: "heading", level: 2, text: "Créer tes 3 tiers : Starter / Pro / Premium" },
      { id: "3-13", type: "text", html: "<p>Proposer 3 niveaux de prix fait deux choses : ça donne le choix au client (réduction du risque de 'non'), et ça ancre la perception de prix. Le client ne se demande plus 'est-ce que je prends ?' mais <em>'lequel je prends ?'</em></p>" },
      { id: "3-14", type: "comparison", headers: ["", "Starter", "Pro ⭐ Recommandé", "Premium"], rows: [
        { cells: ["Prix", "490€", "990€", "1 990€"] },
        { cells: ["Chatbot FAQ", "20 questions", "50 questions", "Illimité + base de connaissances"] },
        { cells: ["Canaux", "Site uniquement", "Site + WhatsApp", "Site + WhatsApp + Mail"] },
        { cells: ["Support", "7 jours", "30 jours", "3 mois dédié"] },
        { cells: ["Formation", "Non", "30 min incluse", "1h + documentation"] },
        { cells: ["Analytics", "Non", "Dashboard basique", "Dashboard avancé + rapports mensuels"] },
        { cells: ["Délai livraison", "7 jours", "5 jours", "3 jours"] },
      ]},
      { id: "3-15", type: "callout", variant: "tip", html: "<strong>Toujours mettre '⭐ Recommandé' sur le tier du milieu.</strong> 70% des clients choisissent l'option recommandée. C'est de la psychologie du choix, pas de la manipulation — tu leur mâches le travail de décision." },

      { id: "3-16", type: "heading", level: 2, text: "Les erreurs classiques à éviter" },
      { id: "3-17", type: "steps", steps: [
        { title: "Erreur 1 : vendre du temps, pas un résultat", description: "Évite 'X heures de développement'. Vends 'un chatbot opérationnel livré en 5 jours'. Le client n'achète pas des heures." },
        { title: "Erreur 2 : trop d'options", description: "Plus de 3 tiers = paralysie du choix. Reste sur 3, pas plus." },
        { title: "Erreur 3 : pas de garantie", description: "Sans garantie, le risque est 100% sur le client. Ajoute au minimum '7 jours satisfait ou remboursé' — tu ne l'honoreras presque jamais." },
        { title: "Erreur 4 : offre floue", description: "'Je m'occupe de votre IA' n'est pas une offre. Une offre précise spécifie le résultat, le délai, le prix, et ce qui est inclus." },
      ]},

      { id: "3-18", type: "separator", style: "dots" },
      { id: "3-19", type: "quiz-inline", question: "Quel est l'effet principal de proposer 3 tiers de prix ?", options: [
        { id: "a", text: "Ça permet de facturer plus cher" },
        { id: "b", text: "Ça change la question du client de 'est-ce que je prends ?' à 'lequel je prends ?' — ce qui augmente les conversions" },
        { id: "c", text: "Ça montre que tu as beaucoup de services différents" },
      ], correctId: "b", explanation: "Les 3 tiers utilisent la psychologie du choix. Au lieu de peser 'acheter ou ne pas acheter', le client pèse 'quel niveau choisir'. La décision d'achat est déjà prise mentalement." },

      { id: "3-20", type: "checklist", title: "Ton offre est prête quand…", items: [
        { id: "c1", text: "J'ai défini le résultat concret que le client obtient (pas un outil, un bénéfice)" },
        { id: "c2", text: "J'ai une garantie claire (remboursement, correction gratuite, etc.)" },
        { id: "c3", text: "J'ai un élément d'urgence (places limitées, tarif lancement, délai)" },
        { id: "c4", text: "J'ai 3 tiers de prix avec le milieu marqué 'recommandé'" },
        { id: "c5", text: "Mon offre tient en 1 page et se comprend sans explication orale" },
      ]},
    ]),
    exercise: "<h3>Exercice : Écris ton offre packagée</h3><p>En t'inspirant du template de la leçon, écris ton offre pour le service que tu as choisi en leçon 2. Elle doit contenir :</p><ul><li>Un titre accrocheur (pas 'Chatbot IA' mais 'Chatbot Support Express')</li><li>Le résultat en 1 phrase</li><li>La liste de ce qui est inclus (5-7 éléments)</li><li>La garantie</li><li>Le tarif et le délai</li><li>L'urgence</li></ul><p>Pas besoin que ce soit parfait — l'objectif c'est d'avoir quelque chose de concret à montrer à un vrai client.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 composants du framework d'une offre irrésistible ?", options: JSON.stringify(["Prix + Délai + Qualité", "Résultat + Garantie + Urgence", "Technique + Design + Support", "Marketing + Vente + Livraison"]), correctAnswer: "Résultat + Garantie + Urgence", explanation: "Une offre irrésistible combine : un Résultat concret (ce que le client obtient), une Garantie (ce qui enlève le risque), et une Urgence (pourquoi maintenant). Si un composant manque, le client procrastine." },
      { type: "true_false", question: "Proposer 3 tiers de prix change la question du client de 'est-ce que je prends ?' à 'lequel je prends ?'.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les 3 tiers utilisent la psychologie du choix. Au lieu de peser 'acheter ou ne pas acheter', le client pèse 'quel niveau choisir'. La décision d'achat est déjà prise mentalement." },
      { type: "mcq", question: "Pourquoi faut-il marquer le tier du milieu comme 'Recommandé' ?", options: JSON.stringify(["Parce que c'est le moins cher", "Parce que 70% des clients choisissent l'option recommandée", "Parce que c'est obligatoire légalement", "Pour cacher les autres options"]), correctAnswer: "Parce que 70% des clients choisissent l'option recommandée", explanation: "70% des clients choisissent l'option recommandée. C'est de la psychologie du choix : tu leur facilites la décision en indiquant clairement quel tier offre le meilleur rapport qualité/prix." },
      { type: "true_false", question: "Une bonne offre packagée doit détailler les outils techniques utilisés (Voiceflow, APIs, modèles IA) pour convaincre le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le client se fiche de Voiceflow, des tokens ou du modèle IA. Il veut voir un résultat concret, une garantie et un prix. L'offre packagée doit parler résultats, pas technique." },
      { type: "mcq", question: "Un prospect vous dit : 'J'ai eu un devis d'un autre freelance à 500€ pour un chatbot, pourquoi vous êtes à 2 000€ ?' Comment structurez-vous votre réponse ?", options: JSON.stringify(["Vous baissez votre prix pour vous aligner sur la concurrence", "Vous présentez vos 3 tiers de prix (Starter, Pro, Premium) et expliquez que votre offre Pro inclut la garantie, la base de connaissances et le support — avec un ROI calculé", "Vous critiquez le travail du concurrent", "Vous acceptez le projet à 500€ pour ne pas perdre le client"]), correctAnswer: "Vous présentez vos 3 tiers de prix (Starter, Pro, Premium) et expliquez que votre offre Pro inclut la garantie, la base de connaissances et le support — avec un ROI calculé", explanation: "Les 3 tiers changent la question de 'est-ce que je prends ?' à 'lequel je prends ?'. En montrant ce qui est inclus dans chaque tier et en calculant le ROI, le prospect compare des valeurs différentes et non plus des prix. 70% choisissent le tier recommandé." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 8,
    title: "Fixer tes prix sans avoir peur",
    slug: "fixer-tes-prix-sans-avoir-peur",
    duration: "20 min",
    description: "Comprendre le pricing basé sur la valeur (pas sur le temps), calculer le ROI pour justifier ses prix, utiliser l'ancrage de prix, et ne jamais vendre à l'heure.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "La règle d'or : ne jamais vendre à l'heure" },
      { id: "4-2", type: "text", html: "<p>Facturer à l'heure, c'est se punir d'être efficace. Si tu prends 3h pour livrer un chatbot parce que tu es rapide, tu gagnes 3 × 50€ = 150€. Si un autre freelance lent prend 10h, il gagne 500€. L'inefficacité est récompensée. C'est absurde.</p><p>La bonne question n'est pas <em>'combien d'heures ça me prend ?'</em> mais <em>'quelle est la valeur créée pour le client ?'</em></p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Attention :</strong> même si un client te demande 'combien factures-tu à l'heure ?', ne réponds pas à cette question directement. Redirige vers la valeur : 'Je ne facture pas à l'heure, je facture au projet et au résultat. Pour ce que vous cherchez, voici ce que ça donnerait…'" },

      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Calculer le ROI pour justifier tes prix" },
      { id: "4-6", type: "text", html: "<p>Avant de citer un prix, calcule ce que ton service rapporte au client. Ce calcul te donnera confiance — et tu pourras le montrer au client pour justifier ton tarif.</p>" },
      { id: "4-7", type: "code", language: "text", filename: "calcul-roi-chatbot.txt", code: `EXEMPLE : ROI d'un chatbot pour une PME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Situation actuelle :
- La secrétaire passe 2h/jour à répondre aux mêmes questions
- Coût salarial secrétaire : 20€/h chargé
- Coût mensuel de cette tâche : 2h × 20€ × 22 jours = 880€/mois

Avec le chatbot :
- 80% des questions traitées automatiquement
- Temps libéré : 1h36/jour soit ~704€/mois d'économies

ROI :
- Investissement : 1 500€ (ton tarif)
- Retour mensuel : 704€
- Remboursement en : 2,1 mois
- ROI sur 12 mois : 8 448€ économisés pour 1 500€ investis
  → soit 5,6x le retour sur investissement

COMMENT L'UTILISER EN VENTE :
"Ce chatbot vous coûte 1 500€ une fois. En 2 mois,
vous avez rentabilisé l'investissement. Ensuite,
c'est de l'argent que vous gagnez chaque mois."` },
      { id: "4-8", type: "callout", variant: "success", html: "Quand tu montres ce calcul à un client, le prix de 1 500€ ne semble plus élevé — il semble évident. C'est ça, le pricing basé sur la valeur." },

      { id: "4-9", type: "separator", style: "line" },
      { id: "4-10", type: "heading", level: 2, text: "L'ancrage de prix : comment présenter tes tarifs" },
      { id: "4-11", type: "text", html: "<p>L'ancrage de prix, c'est l'art de faire paraître ton prix raisonnable en le comparant à quelque chose de plus cher. Utilisé correctement, il change totalement la perception du client.</p>" },
      { id: "4-12", type: "steps", steps: [
        { title: "Ancrage 1 : comparaison avec l'alternative", description: "\"Une agence web classique vous facturerait ce site 8 000€ en 8 semaines. Moi je le livre en 5 jours pour 2 500€.\" Le client voit immédiatement l'écart." },
        { title: "Ancrage 2 : comparaison avec le coût de l'inaction", description: "\"Vous perdez 3 clients par semaine faute de réponse rapide. À 200€ le client moyen, c'est 2 400€/mois qui partent chez un concurrent. Mon chatbot coûte 1 200€.\"" },
        { title: "Ancrage 3 : le tier Premium visible", description: "Montrer ton offre Premium à 3 000€ avant de présenter l'offre Pro à 1 200€. Après le Premium, le Pro semble abordable." },
        { title: "Ancrage 4 : mensualisation", description: "\"Ce système d'automatisation c'est 2 400€ — soit 200€/mois sur 12 mois. Votre abonnement Salesforce vous coûte 350€/mois.\"" },
      ]},

      { id: "4-13", type: "separator", style: "dots" },
      { id: "4-14", type: "heading", level: 2, text: "La grille de pricing selon le client" },
      { id: "4-15", type: "comparison", headers: ["Type de client", "Budget typique", "Sensibilité prix", "Argument qui marche"], rows: [
        { cells: ["Artisan / TPE (1-5 salariés)", "300€ – 1 500€", "Très élevée", "ROI rapide, simplicité, 'ça vous prend 0 heure à gérer'"] },
        { cells: ["PME (10-50 salariés)", "1 500€ – 8 000€", "Modérée", "Gain de productivité chiffré, intégration aux outils existants"] },
        { cells: ["ETI / Grand compte (50+ salariés)", "5 000€ – 50 000€", "Faible", "ROI stratégique, conformité, scalabilité, support dédié"] },
        { cells: ["Startup", "500€ – 5 000€", "Élevée, mais flexible", "Vitesse, modernité, capacité à itérer vite"] },
      ]},
      { id: "4-16", type: "text", html: "<p>Adapte ta présentation selon le client. Ce n'est pas le même pitch pour un plombier et pour un DAF de PME. Mais le fond — résultat, ROI, garantie — reste le même.</p>" },

      { id: "4-17", type: "callout", variant: "tip", html: "<strong>Hack psychologique :</strong> présente toujours ton prix juste après avoir décrit la valeur. Jamais avant. Et laisse un silence après avoir dit le prix. Ne t'excuse pas, ne le justifie pas immédiatement. Laisse le client réagir." },

      { id: "4-18", type: "separator", style: "dots" },
      { id: "4-19", type: "quiz-inline", question: "Tu livres un chatbot en 4h de travail. Le client réalise 1 200€/mois d'économies. Quel prix est justifié ?", options: [
        { id: "a", text: "200€ (4h × 50€/h)" },
        { id: "b", text: "400€ pour être honnête sur le temps passé" },
        { id: "c", text: "900€ à 1 500€ — le prix est basé sur la valeur créée, pas sur les heures" },
      ], correctId: "c", explanation: "Le client économise 1 200€/mois. Un prix de 900-1 500€ représente moins d'un mois d'économies. C'est un investissement à ROI quasi-immédiat. Ton temps ne compte pas dans l'équation client." },

      { id: "4-20", type: "checklist", title: "Mon pricing est solide quand…", items: [
        { id: "c1", text: "Je ne facture plus à l'heure — seulement au projet ou au résultat" },
        { id: "c2", text: "Je peux calculer le ROI de chaque service que je vends" },
        { id: "c3", text: "J'utilise au moins un ancrage de prix dans mes conversations commerciales" },
        { id: "c4", text: "Je sais adapter mon pitch selon la taille du client" },
        { id: "c5", text: "Je dis mon prix avec confiance et je supporte le silence qui suit" },
      ]},
    ]),
    exercise: "<h3>Exercice : Calcule le ROI de ton offre</h3><p>Prends l'offre que tu as construite en leçon 3. Calcule maintenant son ROI pour un client type :</p><ol><li>Quel problème résous-tu ? (temps perdu, erreurs, clients perdus, coût évité)</li><li>Mets un chiffre en euros par mois sur ce problème</li><li>En combien de mois ton prix est-il remboursé ?</li><li>Quel est le ROI sur 12 mois (économies totales ÷ ton prix) ?</li></ol><p>Écris ce calcul en 3-4 lignes que tu pourras dire à l'oral à un client. C'est ton argument de vente numéro 1.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi ne jamais facturer à l'heure en tant qu'agence IA ?", options: JSON.stringify(["Parce que les clients préfèrent les forfaits", "Parce que facturer à l'heure punit l'efficacité : plus tu es rapide, moins tu gagnes", "Parce que c'est illégal pour les freelances", "Parce que les heures sont difficiles à compter"]), correctAnswer: "Parce que facturer à l'heure punit l'efficacité : plus tu es rapide, moins tu gagnes", explanation: "Facturer à l'heure récompense l'inefficacité. Si tu livres un chatbot en 3h au lieu de 10h, tu gagnes moins alors que tu crées la même valeur. La bonne question est 'quelle valeur créée ?' pas 'combien d'heures ?'." },
      { type: "true_false", question: "Il faut présenter le prix au client juste après avoir décrit la valeur, jamais avant.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Présenter le prix après la valeur ancre le prix dans le contexte du bénéfice. Un chatbot à 1 500€ semble cher si tu le dis d'entrée, mais évident quand le client sait qu'il économisera 8 448€ sur 12 mois." },
      { type: "mcq", question: "Si un chatbot coûte 1 500€ et économise 704€/mois au client, en combien de mois l'investissement est-il remboursé ?", options: JSON.stringify(["6 mois", "4 mois", "Environ 2 mois", "12 mois"]), correctAnswer: "Environ 2 mois", explanation: "1 500€ ÷ 704€/mois = 2,1 mois. L'investissement est remboursé en à peine plus de 2 mois. Ensuite, chaque mois c'est de l'argent économisé net. C'est cet argument ROI qui rend le prix évident." },
      { type: "true_false", question: "L'ancrage de prix consiste à comparer ton tarif à quelque chose de plus cher pour que ton prix paraisse raisonnable.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'ancrage de prix change la perception du client. En comparant à une agence web à 8 000€, ton tarif de 2 500€ semble très compétitif. Tu peux aussi ancrer sur le coût de l'inaction ou montrer le tier Premium avant le Pro." },
      { type: "mcq", question: "Vous avez un call commercial avec le dirigeant d'une PME de 30 salariés. Il veut automatiser la qualification de ses leads. Comment adaptez-vous votre pricing par rapport à un artisan qui demande le même service ?", options: JSON.stringify(["Vous proposez exactement le même prix car c'est le même travail technique", "Vous facturez plus cher car la PME a plus de volume, plus de budget, et le ROI est proportionnellement plus élevé", "Vous facturez moins cher pour la PME car elle peut négocier", "Vous refusez la PME car ce n'est pas votre cible"]), correctAnswer: "Vous facturez plus cher car la PME a plus de volume, plus de budget, et le ROI est proportionnellement plus élevé", explanation: "Le pricing s'adapte à la taille du client. Une PME de 30 salariés traite plus de leads, économise plus d'heures, et a un budget plus important qu'un artisan. Le même service crée plus de valeur chez la PME, ce qui justifie un prix plus élevé." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 8,
    title: "Créer ta page d'offre et tes supports de vente",
    slug: "page-offre-supports-de-vente",
    duration: "25 min",
    description: "Construire sa landing page d'offre, son deck de présentation, sa proposition commerciale et son devis type — les 4 armes du commercial indépendant.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Les 4 supports qui font des deals" },
      { id: "5-2", type: "text", html: "<p>Pour vendre des services IA, tu n'as pas besoin de 50 outils. Tu as besoin de 4 documents bien faits. Chacun a un rôle précis dans le parcours de vente — de la découverte à la signature.</p>" },
      { id: "5-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Page d'offre", description: "Le client te découvre ou est envoyé sur ta page. Il comprend ce que tu fais et veut te contacter." },
        { id: "n2", label: "Deck de présentation", description: "Tu passes un appel ou une réunion. Tu envoies le deck avant ou pendant pour structurer la conversation." },
        { id: "n3", label: "Proposition commerciale", description: "Après l'appel, tu envoies une proposition personnalisée. Elle récapitule le contexte, la solution et le prix." },
        { id: "n4", label: "Devis", description: "Le document légal. Simple, clair, avec les modalités de paiement et les conditions." },
      ]},

      { id: "5-4", type: "separator", style: "dots" },
      { id: "5-5", type: "heading", level: 2, text: "Support #1 : La page d'offre" },
      { id: "5-6", type: "text", html: "<p>Ta page d'offre n'est pas ton site web. C'est une <strong>landing page dédiée à un service précis</strong>. Elle convertit un visiteur en prospect. Elle doit répondre à 5 questions dans les 10 premières secondes :</p><ul><li>Qui tu aides</li><li>Quel problème tu résous</li><li>Comment tu le résous</li><li>Combien ça coûte</li><li>Pourquoi toi plutôt qu'un autre</li></ul>" },
      { id: "5-7", type: "code", language: "text", filename: "structure-landing-page-offre.txt", code: `STRUCTURE D'UNE PAGE D'OFFRE QUI CONVERTIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HERO (above the fold) :
━━━━━━━━━━━━━━━━━━━━━
Titre : [Résultat concret] pour [type de client]
Sous-titre : En [délai], sans [obstacle principal]
CTA : Réserver un appel gratuit (bouton bien visible)

PROBLÈME (3-4 phrases) :
━━━━━━━━━━━━━━━━━━━━━━━
"Vous passez X heures par semaine à faire [tâche].
Vos clients attendent trop longtemps / partent à la concurrence.
Vous savez que l'IA pourrait aider mais vous ne savez pas par où commencer."

SOLUTION :
━━━━━━━━━
Ce que tu livres en 3-5 bullets (résultats, pas features)
✓ [Résultat 1]
✓ [Résultat 2]
✓ [Résultat 3]

PREUVE SOCIALE :
━━━━━━━━━━━━━━
Témoignage ou résultat d'un client (1-2 max)
Logos de clients si tu en as

OFFRE & PRIX :
━━━━━━━━━━━━
Tes 3 tiers (Starter / Pro / Premium)
Détail de ce qui est inclus
Garantie bien visible

FAQ :
━━━━
5-7 objections courantes avec réponses
"Combien de temps ça prend ?", "Et si ça ne marche pas ?",
"Je n'y connais rien en IA, c'est un problème ?"

CTA FINAL :
━━━━━━━━━━
Répéter le bouton. Ajouter l'urgence.
"Il reste 2 places disponibles ce mois-ci"` },
      { id: "5-8", type: "callout", variant: "tip", html: "Crée ta page d'offre avec Framer, Notion (public), ou même un Google Doc bien formaté. Le fond compte plus que la forme au début. Une bonne page sur Google Doc vaut mieux qu'une belle page vide de sens." },

      { id: "5-9", type: "separator", style: "line" },
      { id: "5-10", type: "heading", level: 2, text: "Support #2 : Le deck de présentation" },
      { id: "5-11", type: "code", language: "text", filename: "structure-deck-presentation.txt", code: `DECK DE PRÉSENTATION — 8 SLIDES MAX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Slide 1 — Titre
[Ton nom / Logo agence]
"Votre partenaire IA pour [secteur ou résultat]"

Slide 2 — Le problème
3 bullets : les douleurs que tu observes chez tes clients
Formule : "Aujourd'hui, beaucoup d'entreprises [problème]"

Slide 3 — La solution
Ce que tu fais en 2-3 phrases
Pas de jargon technique. Résultat uniquement.

Slide 4 — Les services
3 services max, avec résultat + fourchette de prix
Chatbot | Automatisation | Agent IA

Slide 5 — Preuve / Cas client
1 projet concret : avant / après / chiffres
Si tu n'as pas encore de client : projet fictif ou personnel

Slide 6 — Comment ça marche
3-4 étapes simples
Appel découverte → Proposition → Livraison → Support

Slide 7 — Qui je suis
Photo, nom, 3 lignes bio
1 certif ou formation si tu en as

Slide 8 — CTA
"Passons à l'étape suivante"
Réserver un appel : [lien Calendly]
Mail : [ton mail]` },

      { id: "5-12", type: "separator", style: "line" },
      { id: "5-13", type: "heading", level: 2, text: "Support #3 : La proposition commerciale" },
      { id: "5-14", type: "code", language: "text", filename: "template-proposition-commerciale.txt", code: `PROPOSITION COMMERCIALE — TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pour : [Nom du client / Entreprise]
De : [Ton nom / Agence]
Date : [Date]
Référence : PROP-2025-[numéro]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. CONTEXTE ET PROBLÉMATIQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Suite à notre échange du [date], j'ai bien compris que :
- [Douleur 1 mentionnée par le client]
- [Douleur 2]
- Votre objectif : [ce que le client veut atteindre]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. NOTRE PROPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour répondre à ces enjeux, je vous propose :

[NOM DU LIVRABLE]
Ce que vous obtenez :
✓ [Résultat 1]
✓ [Résultat 2]
✓ [Résultat 3]

Détail des prestations incluses :
• [Item 1]
• [Item 2]
• [Item 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CALENDRIER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Semaine 1 : [Phase 1]
Semaine 2 : [Phase 2]
Livraison finale : [Date estimée]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. INVESTISSEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tarif : [X]€ HT
Modalités : 50% à la commande / 50% à la livraison

Garantie : Si le livrable ne correspond pas au cahier des
charges défini, nous corrigeons gratuitement jusqu'à
validation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. PROCHAINES ÉTAPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour démarrer, il suffit de :
1. Valider cette proposition par retour de mail
2. Régler l'acompte de [X]€ (virement ou lien de paiement)
3. Planifier le kick-off : [lien Calendly]

Cette proposition est valable jusqu'au [date + 10 jours].
[Ton nom] — [mail] — [téléphone]` },

      { id: "5-15", type: "separator", style: "dots" },
      { id: "5-16", type: "heading", level: 2, text: "Les outils recommandés" },
      { id: "5-17", type: "comparison", headers: ["Support", "Outil gratuit", "Outil payant (meilleur)"], rows: [
        { cells: ["Page d'offre", "Notion (public) ou Google Sites", "Framer (10€/mois) ou Webflow"] },
        { cells: ["Deck de présentation", "Google Slides ou Canva", "Pitch.com ou Beautiful.ai"] },
        { cells: ["Proposition commerciale", "Google Docs ou Word", "PandaDoc ou Proposify (avec signature électronique)"] },
        { cells: ["Devis / Facture", "Zervant (gratuit)", "Pennylane ou Freebe (20€/mois)"] },
        { cells: ["Prise de rendez-vous", "Calendly (plan gratuit)", "Calendly Pro ou Cal.com"] },
      ]},
      { id: "5-18", type: "callout", variant: "info", html: "Au démarrage, tout en gratuit est parfait. L'objectif c'est d'avoir les 4 supports, pas d'avoir les meilleurs outils. Un Google Doc bien rédigé signe des deals à 3 000€." },

      { id: "5-19", type: "quiz-inline", question: "Dans quel ordre les supports de vente interviennent-ils ?", options: [
        { id: "a", text: "Devis → Deck → Proposition → Page d'offre" },
        { id: "b", text: "Page d'offre → Deck de présentation → Proposition commerciale → Devis" },
        { id: "c", text: "Proposition commerciale → Appel → Page d'offre → Devis" },
      ], correctId: "b", explanation: "La page d'offre attire et qualifie. Le deck structure l'appel de découverte. La proposition commerciale personnalisée convainc. Le devis formalise. Chaque support a sa place dans le tunnel de vente." },

      { id: "5-20", type: "checklist", title: "Mes supports de vente sont prêts quand…", items: [
        { id: "c1", text: "J'ai une page d'offre (même simple) accessible en ligne" },
        { id: "c2", text: "J'ai un deck de 8 slides que je peux envoyer par mail" },
        { id: "c3", text: "J'ai un template de proposition commerciale prêt à personnaliser" },
        { id: "c4", text: "J'ai un outil de facturation configuré (même gratuit)" },
        { id: "c5", text: "J'ai un lien Calendly ou équivalent pour prendre des rendez-vous" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta page d'offre minimaliste</h3><p>En utilisant Notion (page publique) ou Google Sites, crée une page d'offre pour ton service principal. Elle doit contenir au minimum :</p><ul><li>Un titre avec le résultat pour un type de client précis</li><li>3 bullets de ce que le client obtient</li><li>Ton offre Pro avec le prix</li><li>La garantie</li><li>Un bouton de contact ou un lien Calendly</li></ul><p>Objectif : 1 heure maximum. Publie-la et envoie-la à un ami pour feedback. Le reste s'améliore avec le temps et les retours vrais clients.</p>",
    quiz: [
      { type: "mcq", question: "Dans quel ordre les 4 supports de vente interviennent-ils dans le parcours commercial ?", options: JSON.stringify(["Devis → Deck → Proposition → Page d'offre", "Page d'offre → Deck de présentation → Proposition commerciale → Devis", "Proposition → Appel → Page d'offre → Devis", "Deck → Page d'offre → Devis → Proposition"]), correctAnswer: "Page d'offre → Deck de présentation → Proposition commerciale → Devis", explanation: "La page d'offre attire et qualifie. Le deck structure l'appel de découverte. La proposition commerciale personnalisée convainc. Le devis formalise. Chaque support a sa place dans le tunnel de vente." },
      { type: "true_false", question: "Un Google Doc bien rédigé peut suffire pour signer des deals à 3 000€ quand on débute.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Au démarrage, le fond compte plus que la forme. Un Google Doc bien rédigé avec une offre claire signe des deals. Les outils sophistiqués (PandaDoc, Framer payant) viennent après les premiers revenus." },
      { type: "mcq", question: "Combien de slides maximum doit contenir un deck de présentation d'agence IA ?", options: JSON.stringify(["4 slides", "8 slides", "15 slides", "25 slides"]), correctAnswer: "8 slides", explanation: "Un deck efficace contient 8 slides max : titre, problème, solution, services, preuve/cas client, comment ça marche, qui je suis, CTA. Au-delà, tu perds l'attention du prospect." },
      { type: "true_false", question: "La proposition commerciale doit être envoyée avant l'appel découverte pour que le prospect soit préparé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La proposition commerciale est envoyée APRÈS l'appel découverte. Elle est personnalisée selon les douleurs spécifiques du prospect révélées pendant l'échange, ce qui la rend beaucoup plus convaincante." },
      { type: "mcq", question: "Un prospect visite votre page d'offre mais ne vous contacte pas. Vous analysez la page et constatez que le hero dit : 'Agence IA spécialisée en chatbots, automatisations et développement'. Quel est le problème et comment le corriger ?", options: JSON.stringify(["Le problème est le design — il faut plus de couleurs et d'images", "Le hero parle de vous et pas du client — il faut remplacer par un résultat concret comme 'Réduisez de 70% le temps de réponse à vos clients en 5 jours'", "Il manque une vidéo de présentation dans le hero", "Le prix devrait être affiché directement dans le hero"]), correctAnswer: "Le hero parle de vous et pas du client — il faut remplacer par un résultat concret comme 'Réduisez de 70% le temps de réponse à vos clients en 5 jours'", explanation: "Le hero doit répondre en 10 secondes à 'quel résultat pour moi ?'. Un titre centré sur le client (résultat + délai) avec un CTA visible convertit beaucoup mieux qu'une liste de compétences techniques que le prospect ne comprend pas." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 8,
    title: "Ton premier client gratuit",
    slug: "premier-client-gratuit",
    duration: "35 min",
    description: "Pourquoi offrir un premier projet gratuit est un investissement stratégique, comment choisir le bon prospect, cadrer la mission en 48h, livrer comme un pro et obtenir un témoignage en béton.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Pourquoi ton premier projet doit être gratuit" },
      { id: "6-2", type: "text", html: "<p>Tu as les compétences. Tu sais construire un chatbot, créer un workflow n8n, déployer un agent IA. Mais tu n'as aucun client, aucun portfolio, aucune preuve. Et sans preuve, personne ne te fait confiance.</p><p>C'est le cercle vicieux du débutant : pas de client → pas de portfolio → pas de crédibilité → pas de client.</p><p>La solution ? <strong>Casser le cercle en offrant ton premier projet gratuitement.</strong> Pas par charité. Pas par manque de confiance. Par stratégie pure.</p>" },
      { id: "6-3", type: "callout", variant: "warning", html: "<strong>Ce n'est PAS de la charité.</strong> C'est un investissement. Tu échanges 48h de travail contre 3 choses qui valent des milliers d'euros : un cas client réel, un témoignage, et la confiance en toi que tu peux livrer. Les freelances qui réussissent le plus vite sont ceux qui ont fait ce premier projet gratuit sans hésiter." },

      { id: "6-4", type: "separator", style: "dots" },
      { id: "6-5", type: "heading", level: 2, text: "Ce que tu gagnes avec un projet gratuit" },
      { id: "6-6", type: "comparison", headers: ["Ce que tu 'perds'", "Ce que tu gagnes"], rows: [
        { cells: ["48h de travail non payé", "Un projet réel dans ton portfolio (valeur : premiers clients payants)"] },
        { cells: ["0€ de revenu immédiat", "Un témoignage client (valeur : crédibilité instantanée)"] },
        { cells: ["Un peu d'ego ('je travaille gratis')", "La preuve que tu peux livrer (valeur : confiance en toi)"] },
        { cells: ["Du temps 'perdu'", "Un case study que tu vas réutiliser pendant des mois"] },
        { cells: ["Rien de plus", "Du bouche-à-oreille : ton client parle de toi à son réseau"] },
      ]},
      { id: "6-7", type: "text", html: "<p>Un freelance avec zéro portfolio qui essaie de vendre à 2 000€ vs un freelance avec un cas client réel et un témoignage vidéo qui vend à 2 000€ — ce n'est pas la même conversation. Le projet gratuit te fait passer de l'autre côté.</p>" },

      { id: "6-8", type: "separator", style: "line" },
      { id: "6-9", type: "heading", level: 2, text: "Comment choisir le bon prospect" },
      { id: "6-10", type: "text", html: "<p>Tu ne vas pas offrir ton travail à n'importe qui. Le prospect parfait pour ton premier projet gratuit doit cocher ces critères :</p>" },
      { id: "6-11", type: "steps", steps: [
        { title: "Critère 1 : Quelqu'un de ton réseau", description: "Un ami entrepreneur, un membre de ta famille qui a un commerce, un ancien collègue qui a lancé sa boîte, un contact LinkedIn avec qui tu as déjà échangé. Tu as besoin de quelqu'un qui te fait confiance a priori — pas un inconnu à qui tu dois tout prouver." },
        { title: "Critère 2 : Un business réel avec un problème concret", description: "Un restaurant qui perd des réservations parce qu'il ne répond pas au téléphone. Un coach qui passe 3h par jour à répondre aux mêmes questions par DM. Un e-commerce qui n'a aucun support client le week-end. Le problème doit être visible, mesurable, et résolvable avec l'IA." },
        { title: "Critère 3 : Quelqu'un qui va utiliser ce que tu livres", description: "Le pire scénario : tu livres un chatbot magnifique et le prospect ne l'installe jamais sur son site. Choisis quelqu'un de motivé, qui comprend la valeur, et qui va réellement utiliser ton livrable." },
        { title: "Critère 4 : Quelqu'un capable de te donner un témoignage", description: "C'est ta monnaie d'échange. Le prospect doit être à l'aise avec l'idée de te laisser un témoignage écrit ou vidéo après le projet. Vérifie ça avant de commencer." },
      ]},
      { id: "6-12", type: "callout", variant: "tip", html: "<strong>Les meilleurs premiers prospects :</strong> un restaurant local, un coach ou consultant solo, une petite agence immobilière, un artisan, un e-commerce Shopify avec 50-200 commandes/mois. Ces profils ont des problèmes clairs, sont reconnaissants quand tu les aides, et parlent de toi à leur réseau." },

      { id: "6-13", type: "separator", style: "line" },
      { id: "6-14", type: "heading", level: 2, text: "Cadrer le projet : 1 livrable max, 48h de travail" },
      { id: "6-15", type: "text", html: "<p>L'erreur fatale du premier projet gratuit : vouloir tout faire. 'Je vais lui faire un chatbot ET une automatisation ET refaire son site ET…'. Non. Tu vas t'épuiser, dépasser les délais, livrer un truc moyen, et ne jamais recommencer.</p><p>La règle d'or : <strong>1 livrable. 48h de travail max. Point final.</strong></p>" },
      { id: "6-16", type: "comparison", headers: ["Bon scope (1 livrable clair)", "Mauvais scope (trop ambitieux)"], rows: [
        { cells: ["Un chatbot FAQ pour le site du restaurant (20 questions, intégré)", "Chatbot + automatisation réservations + refonte menu + analytics"] },
        { cells: ["Un workflow n8n qui automatise les relances de devis du coach", "Automatisation complète du CRM + email marketing + reporting"] },
        { cells: ["Un agent IA qui répond aux questions produit sur le site Shopify", "Agent IA + chatbot support + automatisation retours + dashboard"] },
      ]},
      { id: "6-17", type: "callout", variant: "warning", html: "<strong>Règle non négociable :</strong> avant de commencer, écris en une phrase ce que tu vas livrer. 'Je vais créer un chatbot FAQ pour le site de [nom] qui répond aux 20 questions les plus fréquentes de ses clients.' Si ta phrase contient 'ET', c'est trop. Coupe." },

      { id: "6-18", type: "separator", style: "line" },
      { id: "6-19", type: "heading", level: 2, text: "Livrer comme un professionnel" },
      { id: "6-20", type: "text", html: "<p>Le fait que ce soit gratuit ne change rien à ta manière de travailler. Tu dois livrer comme si le client payait 3 000€. Pourquoi ? Parce que ce projet va définir ta réputation. Le témoignage que tu obtiendras dépend directement de l'expérience que tu offres.</p>" },
      { id: "6-21", type: "steps", steps: [
        { title: "Étape 1 : Kick-off structuré (30 min)", description: "Appel ou visio de 30 minutes. Tu poses les questions : quel est le problème exact, qui sont les utilisateurs, quels résultats tu attends. Tu prends des notes. Tu confirmes le livrable par écrit après l'appel. Même format qu'avec un client payant." },
        { title: "Étape 2 : Mise à jour à mi-parcours", description: "Au bout de 24h, envoie un message avec une capture d'écran ou une démo rapide. 'Voilà où j'en suis, voilà ce que ça donne, est-ce que c'est aligné avec ce que tu voulais ?' Cette transparence crée de la confiance." },
        { title: "Étape 3 : Livraison soignée", description: "Ne fais pas 'tiens, voilà le lien'. Prépare un récap : ce qui a été fait, comment ça marche, un mini tuto (vidéo Loom de 3 min ou document). Le client doit pouvoir utiliser ton livrable sans toi." },
        { title: "Étape 4 : Suivi post-livraison (J+3)", description: "3 jours après la livraison, reprends contact. 'Est-ce que le chatbot fonctionne bien ? Tu as des retours de tes clients ?' Ce suivi montre ton professionnalisme et prépare la demande de témoignage." },
      ]},

      { id: "6-22", type: "separator", style: "line" },
      { id: "6-23", type: "heading", level: 2, text: "Obtenir le témoignage : le script exact" },
      { id: "6-24", type: "text", html: "<p>Le témoignage, c'est <strong>la raison pour laquelle tu fais ce projet</strong>. C'est ta paye. Ne le laisse pas au hasard. Voici exactement comment faire.</p>" },
      { id: "6-25", type: "code", language: "text", filename: "script-demande-temoignage.txt", code: `QUAND DEMANDER : 3 à 5 jours après la livraison, quand le client utilise
ton livrable et voit les premiers résultats.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE TYPE (à adapter) :

"Salut [prénom],

Content que le [chatbot/workflow/agent] fonctionne bien !

J'ai une demande : est-ce que tu serais OK pour me laisser
un petit témoignage sur ce que je t'ai livré ? Ça m'aide
énormément pour développer mon activité.

Je te propose 2 options :
- Option 1 : Un texto/message écrit de 3-4 lignes
  (je t'envoie 3 questions pour te guider)
- Option 2 : Un appel vidéo de 5 min que j'enregistre
  (je te pose les questions, tu réponds naturellement)

Qu'est-ce qui te va le mieux ?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LES 3 QUESTIONS GUIDES (pour le témoignage écrit) :

1. "C'était quoi le problème / la galère AVANT que je
   t'installe le [chatbot/workflow] ?"
2. "Concrètement, qu'est-ce que ça a changé depuis ?"
3. "Tu recommanderais mes services ? Pourquoi ?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POUR LE TÉMOIGNAGE VIDÉO :

- Utilise Zoom ou Google Meet (enregistrement intégré)
- Durée : 5 minutes max
- Pose les 3 mêmes questions, laisse le client parler
- Pas besoin de montage : le témoignage brut est plus
  authentique qu'une vidéo montée
- Demande l'autorisation de l'utiliser sur ton site/LinkedIn` },
      { id: "6-26", type: "callout", variant: "success", html: "<strong>Témoignage vidéo > témoignage écrit.</strong> Une vidéo de 2 minutes où un vrai chef d'entreprise dit 'il m'a installé un chatbot et maintenant je ne rate plus aucune demande client' vaut plus que 50 posts LinkedIn. Si ton prospect est à l'aise, pousse pour la vidéo." },
      { id: "6-27", type: "text", html: "<p><strong>Et si le prospect refuse le témoignage ?</strong> C'est rare si tu le préviens dès le départ. Mais si ça arrive, demande au minimum : une autorisation d'utiliser le projet dans ton portfolio (anonymisé si besoin), et le droit de dire 'j'ai travaillé avec [type d'entreprise] sur [type de projet]'. Mieux que rien.</p>" },

      { id: "6-28", type: "separator", style: "dots" },
      { id: "6-29", type: "quiz-inline", question: "Pourquoi le premier projet gratuit est un investissement et non de la charité ?", options: [
        { id: "a", text: "Parce que le client va forcément devenir un client payant ensuite" },
        { id: "b", text: "Parce que tu échanges 48h de travail contre un cas client réel, un témoignage et la confiance en toi — des actifs qui valent des milliers d'euros pour décrocher tes prochains clients" },
        { id: "c", text: "Parce que c'est obligatoire pour se lancer en freelance" },
      ], correctId: "b", explanation: "Le projet gratuit casse le cercle vicieux du débutant (pas de client → pas de portfolio → pas de crédibilité). Les 48h investies te rapportent un portfolio, un témoignage et l'assurance que tu peux livrer — trois actifs qui débloquent tes premiers clients payants." },

      { id: "6-30", type: "checklist", title: "Avant de passer à la suite", items: [
        { id: "c1", text: "J'ai compris que le projet gratuit est un investissement stratégique, pas de la charité" },
        { id: "c2", text: "J'ai identifié au moins 1 prospect dans mon réseau qui correspond aux 4 critères" },
        { id: "c3", text: "J'ai défini mon livrable en 1 phrase (sans 'ET')" },
        { id: "c4", text: "Je sais comment livrer professionnellement (kick-off, mise à jour, livraison soignée, suivi)" },
        { id: "c5", text: "J'ai le script pour demander un témoignage écrit ou vidéo" },
        { id: "c6", text: "Je suis prêt à lancer ce projet cette semaine" },
      ]},
    ]),
    exercise: "<h3>Exercice : Ton premier projet gratuit</h3><p>C'est l'exercice le plus important de toute la formation. Pas de théorie — de l'action pure.</p><ol><li><strong>Identifie 1 prospect dans ton réseau</strong> : quelqu'un qui a un business réel avec un problème concret (FAQ répétitives, tâches manuelles, pas de support client le soir/week-end). Vérifie qu'il coche les 4 critères.</li><li><strong>Propose-lui un projet gratuit</strong> : un chatbot OU une automatisation. Définis le livrable en 1 phrase. Cadre : 48h de travail max, 1 seul livrable.</li><li><strong>Livre-le en 48h</strong> : kick-off structuré, mise à jour à mi-parcours, livraison soignée avec récap et mini tuto.</li><li><strong>Obtiens un témoignage</strong> : écrit (3-4 lignes guidées par tes 3 questions) ou vidéo (5 min max). Utilise le script fourni dans la leçon.</li></ol><p><strong>Deadline :</strong> Ce projet doit être terminé avant de passer à la leçon suivante. Pas d'excuse, pas de 'je ferai plus tard'. C'est maintenant.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le principal bénéfice du premier projet gratuit ?", options: JSON.stringify(["Gagner de l'argent rapidement", "Casser le cercle vicieux du débutant en obtenant un cas client réel, un témoignage et la confiance en soi", "Apprendre de nouvelles compétences techniques", "Se faire connaître sur les réseaux sociaux"]), correctAnswer: "Casser le cercle vicieux du débutant en obtenant un cas client réel, un témoignage et la confiance en soi", explanation: "Le cercle vicieux du débutant (pas de client → pas de portfolio → pas de crédibilité → pas de client) se brise en offrant un premier projet. Tu gagnes un cas concret, un témoignage et la preuve que tu peux livrer — trois actifs qui débloquent les clients payants." },
      { type: "true_false", question: "Pour un premier projet gratuit, il vaut mieux livrer plusieurs services (chatbot + automatisation + site) pour impressionner le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La règle d'or : 1 livrable, 48h max. Vouloir tout faire mène à l'épuisement, aux retards et à un livrable moyen. Si ta description contient 'ET', c'est trop — coupe." },
      { type: "mcq", question: "Quel est le profil idéal pour ton premier projet gratuit ?", options: JSON.stringify(["Un grand groupe du CAC 40 pour avoir un nom prestigieux", "Quelqu'un de ton réseau avec un business réel, un problème concret, et qui est OK pour te donner un témoignage", "Un inconnu trouvé sur LinkedIn avec un gros budget", "Un ami qui n'a pas vraiment besoin d'IA mais qui veut t'aider"]), correctAnswer: "Quelqu'un de ton réseau avec un business réel, un problème concret, et qui est OK pour te donner un témoignage", explanation: "Les 4 critères : quelqu'un de ton réseau (confiance a priori), un business réel avec un problème concret, quelqu'un qui va utiliser ton livrable, et quelqu'un capable de te donner un témoignage." },
      { type: "true_false", question: "Le témoignage vidéo a plus d'impact que le témoignage écrit pour convaincre de futurs clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Une vidéo de 2 minutes où un vrai chef d'entreprise parle de ton travail vaut plus que 50 posts LinkedIn. Le témoignage vidéo brut est plus authentique et plus convaincant qu'un texte écrit." },
      { type: "mcq", question: "Tu as livré un chatbot gratuit à un ami restaurateur. Il est content. Tu veux lui demander un témoignage. Quelle est la meilleure approche ?", options: JSON.stringify(["Attendre qu'il propose spontanément de te recommander", "Le contacter 3-5 jours après la livraison, lui proposer 2 options (écrit ou vidéo), et lui envoyer 3 questions guides pour structurer son retour", "Lui envoyer un formulaire Google Forms impersonnel", "Lui demander le jour même de la livraison, avant qu'il ait eu le temps de tester"]), correctAnswer: "Le contacter 3-5 jours après la livraison, lui proposer 2 options (écrit ou vidéo), et lui envoyer 3 questions guides pour structurer son retour", explanation: "Le timing est clé : 3-5 jours après, le client utilise le livrable et voit les résultats. Les 2 options (écrit/vidéo) respectent son confort. Les 3 questions guides l'aident à structurer un témoignage utile pour toi." },
    ],
  },

  // ─── LEÇON 7 ───
  {
    order: 7,
    module: 8,
    title: "Ton portfolio avec des vrais cas",
    slug: "portfolio-vrais-cas",
    duration: "25 min",
    description: "Transformer ton projet gratuit en case study pro, structurer ton portfolio, publier sur LinkedIn et exploiter ton témoignage partout pour décrocher tes premiers clients payants.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "De projet gratuit à arme commerciale" },
      { id: "7-2", type: "text", html: "<p>Tu as livré ton premier projet. Tu as un témoignage. Maintenant, il faut transformer tout ça en machine à clients. Un projet qui reste dans un dossier sur ton ordi ne sert à rien. Un projet transformé en case study, publié sur LinkedIn et intégré à ton portfolio — ça vend pour toi 24h/24.</p><p>Cette leçon est la suite directe de la précédente. Si tu n'as pas encore livré ton premier projet gratuit et obtenu un témoignage, <strong>retourne à la leçon 6 et fais-le d'abord</strong>. Tout ce qui suit en dépend.</p>" },
      { id: "7-3", type: "callout", variant: "info", html: "<strong>Pourquoi le case study est si puissant :</strong> un prospect qui lit ton case study se projette. Il se dit 'ce freelance a résolu un problème similaire au mien, avec des résultats concrets'. C'est 10x plus convaincant qu'une page d'offre générique. Les agences IA qui décrochent les meilleurs contrats sont celles qui ont les meilleurs case studies — pas celles qui ont le plus beau site." },

      { id: "7-4", type: "separator", style: "dots" },
      { id: "7-5", type: "heading", level: 2, text: "La structure d'un case study qui vend : Problème → Solution → Résultats" },
      { id: "7-6", type: "text", html: "<p>Un bon case study suit toujours la même structure en 3 actes. C'est une histoire — et les histoires vendent mieux que les arguments.</p>" },
      { id: "7-7", type: "steps", steps: [
        { title: "Acte 1 : Le problème (contexte + douleur)", description: "Qui est le client ? Quel était son problème concret ? Quelles étaient les conséquences (temps perdu, argent perdu, stress, clients mécontents) ? Tu dois peindre la situation AVANT ton intervention de manière vivante et spécifique. Pas 'il avait un problème de communication' mais 'il recevait 40 messages par jour sur Instagram et n'arrivait pas à répondre — il perdait 3 à 5 réservations par semaine'." },
        { title: "Acte 2 : La solution (ce que tu as fait)", description: "Quel livrable tu as créé ? Comment ça fonctionne en 2-3 phrases simples ? Quel outil tu as utilisé (Voiceflow, n8n, Make, etc.) ? Combien de temps ça t'a pris ? Inclus une capture d'écran ou un GIF du livrable en action. Le prospect doit pouvoir visualiser ce que tu as construit." },
        { title: "Acte 3 : Les résultats (avec des chiffres)", description: "C'est la partie la plus importante. Pas de 'le client est content'. Des chiffres. '40 messages/jour traités automatiquement. 0 réservation perdue depuis l'installation. 12h/semaine économisées.' Si tu n'as pas de chiffres exacts, demande-les à ton client ou estime-les avec lui." },
      ]},
      { id: "7-8", type: "callout", variant: "warning", html: "<strong>Les chiffres sont non négociables.</strong> Un case study sans chiffres est un témoignage déguisé. Avant de livrer ton projet, mets en place des métriques simples : nombre de conversations du chatbot, temps économisé par semaine, nombre de tâches automatisées. Demande à ton client les chiffres 'avant' pour pouvoir comparer." },

      { id: "7-9", type: "separator", style: "line" },
      { id: "7-10", type: "heading", level: 2, text: "Le template de case study" },
      { id: "7-11", type: "code", language: "text", filename: "template-case-study.txt", code: `TEMPLATE CASE STUDY — À COPIER ET REMPLIR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITRE : [Résultat chiffré] pour [type de client]
Ex : "12h/semaine économisées pour un restaurant lyonnais
     grâce à un chatbot IA"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LE CLIENT :
- Qui : [Nom ou type de business, ville, taille]
- Secteur : [Restaurant, coaching, e-commerce, etc.]
- Taille : [Solo, 2-5 employés, 10+, etc.]

LE PROBLÈME :
- Situation avant : [Description concrète et chiffrée]
- Conséquences : [Temps perdu, argent perdu, stress, etc.]
- Citation du client : "[verbatim du client décrivant sa
  galère — tiré du témoignage]"

LA SOLUTION :
- Ce que j'ai livré : [1 phrase claire]
- Comment ça marche : [2-3 phrases simples]
- Outils utilisés : [Voiceflow, n8n, Make, etc.]
- Temps de réalisation : [ex: 2 jours]
- [CAPTURE D'ÉCRAN ou GIF du livrable en action]

LES RÉSULTATS (après 1-2 semaines) :
- Métrique 1 : [Avant → Après] (ex: 40 msg/jour → 0 msg
  non traité)
- Métrique 2 : [Avant → Après] (ex: 3-5 réservations
  perdues/semaine → 0)
- Métrique 3 : [Avant → Après] (ex: 0h libres → 12h/semaine
  récupérées)
- Citation du client : "[verbatim positif du client — tiré
  du témoignage]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CALL TO ACTION :
"Vous avez le même type de problème ? Contactez-moi pour
en discuter → [lien ou email]"` },

      { id: "7-12", type: "separator", style: "line" },
      { id: "7-13", type: "heading", level: 2, text: "Construire ton portfolio" },
      { id: "7-14", type: "text", html: "<p>Ton portfolio, c'est l'endroit où tes case studies vivent. Pas besoin d'un site complexe. Voici les 3 options par ordre de priorité :</p>" },
      { id: "7-15", type: "comparison", headers: ["Option", "Pour qui", "Comment"], rows: [
        { cells: ["Page Notion publique", "Débutant qui veut aller vite", "Crée une page Notion avec tes case studies. Lien partageable en 5 min. Gratuit. Facile à mettre à jour."] },
        { cells: ["Section sur ton site (Framer / Webflow)", "Si tu as déjà un site", "Ajoute une page '/portfolio' ou '/cas-clients' avec tes case studies. Design soigné. Intègre les témoignages vidéo."] },
        { cells: ["PDF portfolio", "Pour les envois directs", "Un document de 3-5 pages avec tes meilleurs case studies. Format propre, envoyable par mail ou DM LinkedIn. Parfait pour les propositions commerciales."] },
      ]},
      { id: "7-16", type: "callout", variant: "tip", html: "<strong>Commence par Notion.</strong> Sérieusement. En 30 minutes, tu as un portfolio en ligne. Tu pourras migrer vers un vrai site plus tard. L'important c'est que ton case study soit visible et partageable dès maintenant — pas dans 3 semaines quand ton site sera 'parfait'." },

      { id: "7-17", type: "separator", style: "line" },
      { id: "7-18", type: "heading", level: 2, text: "Publier ton case study sur LinkedIn" },
      { id: "7-19", type: "text", html: "<p>LinkedIn est le canal #1 pour vendre des services IA en B2B. Et un post case study est le type de contenu qui convertit le mieux. Voici la structure exacte d'un post LinkedIn case study qui génère des prospects :</p>" },
      { id: "7-20", type: "code", language: "text", filename: "structure-post-linkedin-case-study.txt", code: `STRUCTURE DU POST LINKEDIN CASE STUDY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACCROCHE (2 lignes — doit donner envie de cliquer "voir plus")
"J'ai installé un chatbot IA pour un restaurant.
Résultat : 12h/semaine économisées et 0 réservation perdue."

CONTEXTE (3-4 lignes)
Le problème du client en termes concrets.
"[Prénom] gère un restaurant à [ville]. Il recevait 40
messages par jour sur Instagram. Il en ratait la moitié.
Il perdait 3 à 5 réservations par semaine."

CE QUE J'AI FAIT (3-4 lignes)
Ta solution en termes simples (pas de jargon technique).
"J'ai créé un chatbot IA qui répond automatiquement aux
questions fréquentes (horaires, menu, allergènes) et
prend les réservations 24h/24."

RÉSULTATS (3-4 lignes avec des chiffres)
Les métriques avant/après.
"Après 2 semaines :
→ 40 messages/jour traités automatiquement
→ 0 réservation perdue
→ 12h/semaine récupérées pour la cuisine"

LEÇON / INSIGHT (2-3 lignes)
Ce que ça t'a appris ou un conseil actionnable.
"Ce qui m'a surpris : le plus gros gain n'était pas le
temps économisé. C'était le stress en moins."

CTA (1-2 lignes)
"Si tu gères un restaurant et que tu perds des clients
parce que tu ne peux pas répondre à tout — DM moi."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIPS :
- Ajoute une capture d'écran du chatbot en action (image)
- Tague le client s'il est OK (boost la visibilité)
- Poste le mardi, mercredi ou jeudi entre 8h et 10h
- Réponds à TOUS les commentaires dans la première heure` },
      { id: "7-21", type: "callout", variant: "success", html: "<strong>Un seul post LinkedIn case study bien écrit peut générer 5 à 15 prospects inbound.</strong> Ce n'est pas de la théorie — c'est ce que font les freelances et agences IA qui signent régulièrement. La preuve > la promesse. Toujours." },

      { id: "7-22", type: "separator", style: "line" },
      { id: "7-23", type: "heading", level: 2, text: "Exploiter ton témoignage partout" },
      { id: "7-24", type: "text", html: "<p>Un témoignage ne doit pas vivre dans un seul endroit. Il doit être partout où un prospect pourrait te découvrir ou hésiter à travailler avec toi. Voici la liste complète :</p>" },
      { id: "7-25", type: "comparison", headers: ["Où placer le témoignage", "Pourquoi", "Comment"], rows: [
        { cells: ["Page d'offre / landing page", "Rassure le prospect au moment de la décision", "Citation + nom + photo du client. Idéalement au-dessus du CTA."] },
        { cells: ["Profil LinkedIn (section 'En vedette')", "Visible par tous ceux qui visitent ton profil", "Capture d'écran du témoignage écrit, ou lien vers le post case study."] },
        { cells: ["Propositions commerciales", "Lève les dernières objections avant la signature", "Intègre 1-2 témoignages dans ton document de proposition."] },
        { cells: ["Posts LinkedIn réguliers", "Rappelle ta crédibilité à ton audience", "1 post par mois qui cite un retour client ou montre un résultat."] },
        { cells: ["Réponses aux prospects (DM / email)", "Preuve sociale dans la conversation de vente", "'Un de mes clients disait la même chose — voici ce qu'on a fait et les résultats.'"] },
        { cells: ["Bio / description LinkedIn", "Première impression immédiate", "'J'ai aidé [X] à [résultat]. Témoignage : [lien]'"] },
      ]},
      { id: "7-26", type: "callout", variant: "tip", html: "<strong>Le témoignage vidéo en action :</strong> si tu as obtenu un témoignage vidéo, poste-le en natif sur LinkedIn (pas un lien YouTube). Les vidéos natives ont 5x plus de portée. Ajoute des sous-titres (80% des gens regardent sans le son). Un post avec un témoignage vidéo est ton meilleur contenu possible." },

      { id: "7-27", type: "separator", style: "dots" },
      { id: "7-28", type: "heading", level: 2, text: "Le cercle vertueux : de 1 client gratuit à des clients payants" },
      { id: "7-29", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Projet gratuit livré", description: "Tu as un livrable réel, fonctionnel, avec des résultats mesurables." },
        { id: "n2", label: "Case study + témoignage", description: "Tu transformes le projet en preuve sociale publiée partout." },
        { id: "n3", label: "Visibilité LinkedIn", description: "Ton post case study attire des prospects qui se reconnaissent dans le problème." },
        { id: "n4", label: "Premiers clients payants", description: "Les prospects te contactent. Tu as la preuve. Tu fixes ton prix. Tu signes." },
        { id: "n5", label: "Nouveaux case studies", description: "Chaque client payant = un nouveau case study. Le cercle s'accélère." },
      ]},
      { id: "7-30", type: "text", html: "<p>Ce cercle vertueux est la base de toute activité de freelance ou d'agence IA qui fonctionne. Un projet gratuit bien exécuté peut déboucher sur 3 à 5 clients payants dans les 30 jours qui suivent — si tu transformes ce projet en case study et que tu le publies. La plupart des gens font le projet mais ne font pas le case study. C'est comme cuisiner un excellent plat et ne jamais le servir.</p>" },

      { id: "7-31", type: "separator", style: "dots" },
      { id: "7-32", type: "quiz-inline", question: "Quelle est la partie la plus importante d'un case study ?", options: [
        { id: "a", text: "La description technique détaillée de la solution" },
        { id: "b", text: "Les résultats chiffrés (métriques avant/après)" },
        { id: "c", text: "Le nom et le logo du client" },
      ], correctId: "b", explanation: "Les résultats chiffrés sont ce qui fait vendre un case study. 'Le client est content' ne vaut rien. '40 messages/jour traités automatiquement, 12h/semaine économisées, 0 réservation perdue' — ça, ça parle au prospect qui a le même problème." },

      { id: "7-33", type: "checklist", title: "Mon portfolio est prêt quand…", items: [
        { id: "c1", text: "J'ai rédigé mon premier case study avec la structure Problème → Solution → Résultats (avec chiffres)" },
        { id: "c2", text: "Mon case study est publié quelque part (Notion, site, PDF)" },
        { id: "c3", text: "J'ai posté mon case study sur LinkedIn avec la structure du template" },
        { id: "c4", text: "Mon témoignage est placé sur au moins 3 supports différents" },
        { id: "c5", text: "Je comprends le cercle vertueux projet → case study → visibilité → clients payants" },
      ]},
    ]),
    exercise: "<h3>Exercice : Ton premier case study et ta présence en ligne</h3><p>3 livrables concrets à produire maintenant :</p><ol><li><strong>Rédige ton premier case study</strong> : utilise le template fourni. Remplis chaque section (client, problème, solution, résultats avec chiffres). Inclus au moins une capture d'écran du livrable en action.</li><li><strong>Ajoute-le à ton portfolio</strong> : crée une page Notion publique (ou ajoute-le à ton site si tu en as un). Le lien doit être partageable.</li><li><strong>Poste-le sur LinkedIn</strong> : utilise la structure du post LinkedIn case study. Ajoute une image (capture d'écran du livrable). Tague ton client s'il est OK. Poste entre mardi et jeudi, 8h-10h.</li></ol><p><strong>Bonus :</strong> si tu as un témoignage vidéo, poste-le en natif sur LinkedIn avec des sous-titres. C'est ton meilleur contenu possible.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la structure correcte d'un case study qui vend ?", options: JSON.stringify(["Introduction → Méthodologie → Conclusion", "Problème (contexte + douleur) → Solution (ce que tu as fait) → Résultats (avec des chiffres)", "Présentation de l'entreprise → Liste des services → Tarifs", "Témoignage client → Description technique → Facture"]), correctAnswer: "Problème (contexte + douleur) → Solution (ce que tu as fait) → Résultats (avec des chiffres)", explanation: "Un case study suit toujours 3 actes : le problème (la situation avant, concrète et chiffrée), la solution (ce que tu as livré, en termes simples), et les résultats (des métriques avant/après). C'est une histoire — et les histoires vendent." },
      { type: "true_false", question: "Un case study sans chiffres de résultats est tout aussi efficace qu'un case study avec des métriques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les chiffres sont non négociables. 'Le client est content' ne vend rien. '12h/semaine économisées, 0 réservation perdue, 40 messages/jour traités automatiquement' — ça, ça fait signer des contrats." },
      { type: "mcq", question: "Quel est le meilleur support pour démarrer ton portfolio rapidement ?", options: JSON.stringify(["Un site Webflow personnalisé avec animations", "Une page Notion publique créée en 30 minutes", "Un compte Instagram dédié", "Attendre d'avoir 5 clients avant de créer un portfolio"]), correctAnswer: "Une page Notion publique créée en 30 minutes", explanation: "Notion est la solution la plus rapide : 30 minutes pour avoir un portfolio en ligne, partageable et facilement mis à jour. L'important c'est que ton case study soit visible maintenant, pas dans 3 semaines quand ton site sera parfait." },
      { type: "true_false", question: "Un témoignage vidéo posté en natif sur LinkedIn a plus de portée qu'un lien YouTube.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les vidéos natives sur LinkedIn ont environ 5x plus de portée que les liens externes. Poste la vidéo directement sur LinkedIn et ajoute des sous-titres — 80% des gens regardent sans le son." },
      { type: "mcq", question: "Tu as livré un chatbot gratuit à un coach sportif. Il t'a donné un super témoignage. Quelle est ta prochaine étape pour maximiser l'impact ?", options: JSON.stringify(["Attendre qu'un deuxième client vienne à toi naturellement", "Rédiger le case study (problème → solution → résultats chiffrés), le publier sur Notion, le poster sur LinkedIn, et placer le témoignage sur au moins 3 supports différents", "Envoyer le témoignage par email à 100 prospects à froid", "Créer un site web complet avant de montrer quoi que ce soit"]), correctAnswer: "Rédiger le case study (problème → solution → résultats chiffrés), le publier sur Notion, le poster sur LinkedIn, et placer le témoignage sur au moins 3 supports différents", explanation: "Le projet gratuit ne vaut rien s'il reste dans un dossier. Transforme-le en case study structuré, publie-le sur ton portfolio, poste-le sur LinkedIn, et place le témoignage partout (page d'offre, profil LinkedIn, propositions commerciales). C'est ce qui déclenche le cercle vertueux vers les clients payants." },
    ],
  },
];
