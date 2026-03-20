// ═══════════════════════════════════════════════════
// MODULE 6 — Chatbots IA (service #1 à vendre)
// 6 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_6_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 6,
    title: "Pourquoi les chatbots IA sont le service #1 à vendre",
    slug: "pourquoi-chatbots-ia-service-numero-1",
    duration: "20 min",
    description: "Le marché des chatbots explose. Comprends pourquoi chaque business en a besoin, comment pricer tes prestations de 500 à 5 000 €, et quels cas clients te permettent de closer facilement.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le chatbot : le produit IA le plus facile à vendre" },
      { id: "1-2", type: "text", html: "<p>Parmi tous les services IA que tu peux proposer — automatisations, agents, génération de contenu — le <strong>chatbot est celui que les clients comprennent immédiatement</strong>. Ils ont tous utilisé un chatbot. Ils savent ce que c'est. Ils voient tout de suite l'utilité.</p><p>Et contrairement à d'autres services IA plus complexes à expliquer, le chatbot a un <strong>ROI visible et mesurable</strong> : moins de questions au SAV, moins de temps passé à répondre aux mêmes emails, plus de leads qualifiés. C'est le produit d'entrée parfait pour décrocher ton premier client.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "Un chatbot, c'est un commercial ou un support client disponible 24h/24, 7j/7, sans congés, sans erreurs, pour une fraction du coût. C'est ton argument de vente numéro 1." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le marché en chiffres" },
      { id: "1-6", type: "comparison", headers: ["Marché", "2023", "2026 (estimé)"], rows: [
        { cells: ["Marché mondial des chatbots", "5,4 milliards $", "15,5 milliards $"] },
        { cells: ["Taux de croissance annuel", "—", "+24% / an"] },
        { cells: ["Entreprises ayant un chatbot IA", "~15%", "~55% (objectif)"] },
        { cells: ["Économies SAV générées / chatbot", "20-40%", "40-60%"] },
      ]},
      { id: "1-7", type: "text", html: "<p>La majorité des PME n'ont <strong>pas encore de chatbot IA</strong>. Elles ont peut-être un vieux chatbot à boutons, ou rien du tout. Le gap est énorme — et c'est ton opportunité.</p>" },

      { id: "1-8", type: "heading", level: 2, text: "Qui a besoin d'un chatbot ?" },
      { id: "1-9", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "E-commerce", description: "FAQ produits, suivi commande, recommandations, retours" },
        { id: "n2", label: "Immobilier", description: "Qualification de leads, prise de RDV, présentation de biens" },
        { id: "n3", label: "SaaS / Tech", description: "Onboarding, support L1, documentation interactive" },
        { id: "n4", label: "Restaurants / Hôtels", description: "Réservations, menu, horaires, événements" },
        { id: "n5", label: "Cabinets (avocat, médecin)", description: "Prise de RDV, pré-qualification, FAQ réglementaire" },
        { id: "n6", label: "Agences & freelances", description: "Qualification de prospects, présentation de services" },
      ]},
      { id: "1-10", type: "callout", variant: "info", html: "Règle simple : si un business reçoit les mêmes 10 questions en boucle par email, WhatsApp ou téléphone, il a besoin d'un chatbot. C'est 90% des PME." },

      { id: "1-11", type: "separator", style: "line" },
      { id: "1-12", type: "heading", level: 2, text: "Comment pricer tes chatbots" },
      { id: "1-13", type: "comparison", headers: ["Tier", "Ce que tu livres", "Prix indicatif", "Récurrence"], rows: [
        { cells: ["Starter", "Chatbot FAQ simple, 5-10 questions, Voiceflow, intégration site", "500 – 1 000 €", "Maintenance 50-100€/mois"] },
        { cells: ["Standard", "Chatbot multi-intention, base de connaissances, CRM simple", "1 500 – 2 500 €", "100-200€/mois"] },
        { cells: ["Premium", "RAG sur docs custom, intégrations API (CRM, calendrier), analytics", "3 000 – 5 000 €", "200-400€/mois"] },
        { cells: ["Enterprise", "Multi-canal, escalade humaine, SLA, multi-langue", "5 000 – 15 000 €", "500€+/mois"] },
      ]},
      { id: "1-14", type: "text", html: "<p>La récurrence mensuelle est clé. Un client à 200€/mois vaut <strong>2 400€/an</strong>. Avec 10 clients en maintenance, tu as une base de 24 000€/an garantis — avant même de vendre de nouveaux projets.</p>" },

      { id: "1-15", type: "heading", level: 2, text: "Cas clients réels à utiliser en prospection" },
      { id: "1-16", type: "steps", steps: [
        { title: "E-commerce mode (1 200 €)", description: "Chatbot FAQ sur Voiceflow, intégré à Shopify. Résultat : -60% de tickets SAV en 30 jours. Le client a renouvelé la maintenance sans hésiter." },
        { title: "Cabinet immobilier (2 500 €)", description: "Chatbot de qualification de leads sur le site. 24 leads qualifiés en 2 semaines vs 8 avant. ROI immédiat visible." },
        { title: "SaaS B2B (4 000 €)", description: "Chatbot RAG entraîné sur la documentation technique. Les tickets de niveau 1 ont chuté de 45%. L'équipe support a pu se concentrer sur les vrais problèmes." },
      ]},
      { id: "1-17", type: "callout", variant: "success", html: "Ces cas clients, tu les présentes en prospection. Tu n'as pas encore de clients ? Dans ce module, tu vas construire un chatbot de démo complet que tu peux montrer comme référence." },

      { id: "1-18", type: "separator", style: "dots" },
      { id: "1-19", type: "quiz-inline", question: "Quelle est la meilleure façon de justifier le prix d'un chatbot à 2 000 € ?", options: [
        { id: "a", text: "Expliquer que ça a pris beaucoup d'heures à coder" },
        { id: "b", text: "Calculer les économies générées (temps SAV, leads qualifiés) et montrer que le ROI est rapide" },
        { id: "c", text: "Dire que c'est le prix du marché" },
      ], correctId: "b", explanation: "Le client ne paie pas pour tes heures — il paie pour le résultat. Un chatbot qui économise 5h/semaine à ton client, c'est ~200€/semaine, soit un ROI en 10 semaines. C'est ton argument." },

      { id: "1-20", type: "checklist", title: "Ce que tu sais maintenant", items: [
        { id: "c1", text: "Identifier les types de business qui ont besoin d'un chatbot" },
        { id: "c2", text: "Citer 3 cas clients concrets avec résultats chiffrés" },
        { id: "c3", text: "Pricer un chatbot de 500 à 5 000 € selon la complexité" },
        { id: "c4", text: "Argumenter le ROI d'un chatbot face à un prospect" },
        { id: "c5", text: "Proposer une récurrence mensuelle de maintenance" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Identifie 3 businesses locaux (dans ta ville ou en ligne) qui n'ont pas de chatbot IA sur leur site. Pour chacun, écris : (1) les 5 questions qu'ils reçoivent sûrement en boucle, (2) le tier de chatbot approprié et son prix, (3) un argument ROI chiffré. Tu auras ton script de prospection prêt.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le prix indicatif d'un chatbot Standard avec base de connaissances et CRM intégré ?", options: JSON.stringify(["200 – 500 €", "1 500 – 2 500 €", "5 000 – 10 000 €", "50 – 100 €"]), correctAnswer: "1 500 – 2 500 €", explanation: "Un chatbot Standard avec multi-intention, base de connaissances et CRM simple se situe entre 1 500 et 2 500 €, avec une récurrence de 100-200€/mois pour la maintenance." },
      { type: "true_false", question: "La récurrence mensuelle est plus importante que le prix initial du chatbot pour la rentabilité d'une agence.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un client à 200€/mois vaut 2 400€/an. Avec 10 clients en maintenance, c'est 24 000€/an de revenus récurrents garantis — avant même de vendre de nouveaux projets. La récurrence est la clé du modèle économique." },
      { type: "mcq", question: "Quelle règle simple permet d'identifier un business qui a besoin d'un chatbot ?", options: JSON.stringify(["S'il a un site web moderne", "S'il reçoit les mêmes 10 questions en boucle par email, WhatsApp ou téléphone", "S'il a plus de 50 employés", "S'il fait du e-commerce international"]), correctAnswer: "S'il reçoit les mêmes 10 questions en boucle par email, WhatsApp ou téléphone", explanation: "C'est le signal le plus clair : des questions répétitives sur les horaires, les prix, les livraisons, etc. Un chatbot IA peut y répondre 24h/24 et libérer le temps de l'équipe. C'est le cas de 90% des PME." },
      { type: "true_false", question: "Le marché mondial des chatbots devrait atteindre environ 15,5 milliards de dollars en 2026.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le marché des chatbots connaît une croissance de +24% par an, passant de 5,4 milliards en 2023 à une estimation de 15,5 milliards en 2026. La majorité des PME n'ont pas encore de chatbot IA, ce qui représente une énorme opportunité." },
      { type: "mcq", question: "Un dentiste vous contacte car il perd 2h par jour à répondre aux mêmes questions par téléphone (horaires, tarifs, remboursements). Il hésite à investir 2 000€ dans un chatbot. Comment le convaincre ?", options: JSON.stringify(["Vous lui expliquez que tous ses concurrents ont déjà un chatbot", "Vous lui montrez le calcul : 2h/jour x 40€/h x 250 jours = 20 000€/an gaspillés, le chatbot s'amortit en 3 semaines", "Vous lui proposez un rabais de 50% pour qu'il accepte", "Vous lui dites que le chatbot va remplacer sa secrétaire"]), correctAnswer: "Vous lui montrez le calcul : 2h/jour x 40€/h x 250 jours = 20 000€/an gaspillés, le chatbot s'amortit en 3 semaines", explanation: "L'argument ROI chiffré est le plus convaincant : 20 000€/an de coût humain pour une tâche répétitive. Un chatbot à 2 000€ s'amortit en 3 semaines. Le client ne paie pas pour la technologie — il paie pour le temps et l'argent récupérés." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 6,
    title: "Les plateformes de chatbots : Voiceflow, Botpress, custom",
    slug: "plateformes-chatbots-voiceflow-botpress-custom",
    duration: "25 min",
    description: "Comparaison détaillée des outils no-code et custom pour créer des chatbots. Sais exactement quand utiliser Voiceflow, Botpress ou une solution maison en Next.js.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le choix de la plateforme : une décision stratégique" },
      { id: "2-2", type: "text", html: "<p>Avant d'écrire une ligne de code ou d'ouvrir Voiceflow, tu dois choisir le bon outil pour le bon projet. Ce choix impacte ton <strong>temps de livraison</strong>, tes <strong>marges</strong>, et la <strong>satisfaction client</strong>. Un mauvais outil pour un bon projet, c'est des heures de travail en plus pour un résultat moins bon.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Il n'y a pas un outil meilleur que les autres — il y a l'outil adapté au besoin. Cette leçon te donne les critères pour choisir vite et bien." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Vue d'ensemble des options" },
      { id: "2-6", type: "comparison", headers: ["Critère", "Voiceflow", "Botpress", "Custom (Next.js)"], rows: [
        { cells: ["Courbe d'apprentissage", "Faible (visuel)", "Moyenne", "Élevée"] },
        { cells: ["Flexibilité", "Moyenne", "Haute", "Totale"] },
        { cells: ["Intégrations natives", "Beaucoup (Zapier, Sheets...)", "Nombreuses", "À coder soi-même"] },
        { cells: ["Coût outil/mois", "39-125$ (pro)", "89-300$", "0 (hors hosting)"] },
        { cells: ["Temps de livraison", "1-3 jours", "3-7 jours", "1-3 semaines"] },
        { cells: ["Scalabilité", "Limitée", "Bonne", "Totale"] },
        { cells: ["White-label", "Non (plan basique)", "Oui", "Oui"] },
        { cells: ["Idéal pour", "PME, MVP, démo client", "Projets complexes", "Produit SaaS, app custom"] },
      ]},

      { id: "2-7", type: "heading", level: 2, text: "Voiceflow : le couteau suisse du chatbot no-code" },
      { id: "2-8", type: "text", html: "<p>Voiceflow est un éditeur visuel de flows conversationnels. Tu crées des blocs (texte, condition, API, IA), tu les connectes, et tu déploies en un clic sur un widget web, Slack, WhatsApp, etc.</p><p><strong>Points forts :</strong> Interface drag-and-drop, Knowledge Base intégrée (tu upload tes PDFs / URLs et le chatbot répond dessus), intégrations Zapier/Make, test en temps réel.</p><p><strong>Limites :</strong> Le branding Voiceflow reste visible sur les plans bas de gamme. Les flows très complexes deviennent difficiles à maintenir. Pas adapté pour un produit SaaS que tu revends à la licène.</p>" },
      { id: "2-9", type: "callout", variant: "tip", html: "Voiceflow est ton arme principale pour les 80% des missions client. Tu peux livrer un chatbot fonctionnel en 1-2 jours. C'est la plateforme que tu vas maîtriser en leçon 3." },

      { id: "2-10", type: "heading", level: 2, text: "Botpress : pour les projets plus avancés" },
      { id: "2-11", type: "text", html: "<p>Botpress est open-source (auto-hébergeable) et propose aussi un cloud. Il est plus puissant que Voiceflow pour les logiques conditionnelles complexes, les intégrations custom via code JavaScript dans les nœuds, et le multi-canal (WhatsApp Business API, Telegram, Messenger).</p><p>Son éditeur visuel est moins intuitif mais beaucoup plus flexible. Tu peux injecter du JS directement dans les nœuds pour des logiques avancées.</p>" },

      { id: "2-12", type: "heading", level: 2, text: "Solution custom : quand coder from scratch ?" },
      { id: "2-13", type: "steps", steps: [
        { title: "Le client veut un design 100% custom", description: "Widget chat avec leur identité visuelle, pas de logo tiers. Tu codes un widget React intégré à leur site." },
        { title: "Tu construis un produit SaaS", description: "Tu veux revendre un chatbot en marque blanche à plusieurs clients. La solution custom te donne une marge maximale." },
        { title: "Intégrations complexes", description: "Base de données propriétaire, ERP, API interne non documentée. No-code atteint ses limites rapidement." },
        { title: "RAG avancé sur de gros volumes", description: "Des milliers de documents, chunking spécifique, reranking, logique de récupération custom. Voiceflow ne suffit plus." },
      ]},

      { id: "2-14", type: "separator", style: "line" },
      { id: "2-15", type: "heading", level: 2, text: "L'arbre de décision" },
      { id: "2-16", type: "diagram", variant: "flow", nodes: [
        { id: "f1", label: "Nouvelle mission chatbot", description: "Tu reçois une demande" },
        { id: "f2", label: "Budget < 1 500 € ?", description: "Si oui → Voiceflow, livraison rapide, marge max" },
        { id: "f3", label: "Logique complexe ou multi-canal ?", description: "Si oui → Botpress. Si non → Voiceflow" },
        { id: "f4", label: "Design 100% custom ou SaaS ?", description: "Si oui → Next.js custom. Sinon → Botpress ou Voiceflow" },
        { id: "f5", label: "RAG sur gros volume de docs ?", description: "Si oui → Custom avec Pinecone/pgvector (leçon 5)" },
      ]},
      { id: "2-17", type: "callout", variant: "warning", html: "Ne sur-ingénie pas. Un client qui a besoin d'un chatbot FAQ de 10 questions n'a pas besoin d'une solution custom en Next.js avec RAG. Utilise Voiceflow, livre en 2 jours, garde ta marge." },

      { id: "2-18", type: "quiz-inline", question: "Un client e-commerce veut un chatbot qui répond aux questions sur ses produits à partir de son catalogue PDF de 200 pages. Quelle solution utilises-tu ?", options: [
        { id: "a", text: "Next.js custom from scratch" },
        { id: "b", text: "Voiceflow avec la Knowledge Base (upload du PDF)" },
        { id: "c", text: "Un chatbot à boutons sans IA" },
      ], correctId: "b", explanation: "Voiceflow Knowledge Base accepte les PDFs et URLs. Pour 200 pages, c'est parfait. Tu uploader le catalogue, Voiceflow l'indexe automatiquement et le chatbot répond dessus. Livraison en 1-2 jours, pas besoin de code." },

      { id: "2-19", type: "separator", style: "dots" },
      { id: "2-20", type: "checklist", title: "Ce que tu sais faire maintenant", items: [
        { id: "c1", text: "Comparer Voiceflow, Botpress et custom sur les critères clés" },
        { id: "c2", text: "Choisir la bonne plateforme selon le budget et la complexité" },
        { id: "c3", text: "Identifier quand une solution custom est nécessaire" },
        { id: "c4", text: "Estimer le temps de livraison selon la plateforme" },
        { id: "c5", text: "Argumenter ton choix technique face à un client" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée un compte gratuit sur Voiceflow (voiceflow.com) et explore l'interface pendant 20 minutes. Crée un projet vide, ajoute 3 blocs (Speak, Condition, API) et connecte-les. L'objectif n'est pas de finir quelque chose — c'est de te familiariser avec l'outil avant la leçon suivante.</p>",
    quiz: [
      { type: "mcq", question: "Pour quelle raison principale choisir Voiceflow plutôt qu'une solution custom en Next.js ?", options: JSON.stringify(["Voiceflow est gratuit", "Voiceflow permet de livrer un chatbot fonctionnel en 1-2 jours vs 1-3 semaines en custom", "Voiceflow a plus de fonctionnalités", "Voiceflow est open-source"]), correctAnswer: "Voiceflow permet de livrer un chatbot fonctionnel en 1-2 jours vs 1-3 semaines en custom", explanation: "Le temps de livraison est le facteur clé. Voiceflow permet de livrer un chatbot professionnel en 1-2 jours grâce à son interface drag-and-drop. Une solution custom en Next.js prend 1-3 semaines. Pour 80% des missions, Voiceflow est le bon choix." },
      { type: "true_false", question: "Une solution chatbot custom en Next.js est nécessaire quand le client veut un design 100% personnalisé ou construit un produit SaaS.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le custom est justifié dans 4 cas : design 100% sur mesure, produit SaaS en marque blanche, intégrations complexes (ERP, API internes), ou RAG avancé sur de gros volumes. Dans tous les autres cas, Voiceflow ou Botpress suffisent." },
      { type: "mcq", question: "Quel outil est recommandé pour un projet chatbot avec des logiques conditionnelles complexes et du multi-canal (WhatsApp, Telegram) ?", options: JSON.stringify(["Voiceflow", "Botpress", "Un simple formulaire web", "ChatGPT directement"]), correctAnswer: "Botpress", explanation: "Botpress excelle dans les logiques complexes grâce à son éditeur flexible et la possibilité d'injecter du JavaScript dans les noeuds. Il gère nativement le multi-canal (WhatsApp Business API, Telegram, Messenger)." },
      { type: "true_false", question: "Si un client a un budget inférieur à 1 500€, Voiceflow est généralement le meilleur choix.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Selon l'arbre de décision, un budget inférieur à 1 500€ oriente vers Voiceflow : livraison rapide, marge maximale, et résultat professionnel. Avec un budget limité, il ne faut pas sur-ingénier la solution." },
      { type: "mcq", question: "Un client coach sportif avec un budget de 800€ veut un chatbot qui répond aux questions sur ses programmes et prend les réservations. Quelle plateforme lui recommandez-vous et pourquoi ?", options: JSON.stringify(["Une solution custom en Next.js pour un contrôle total", "Voiceflow, car le budget est sous 1 500€ et la livraison sera rapide (1-2 jours)", "Botpress, car c'est la seule plateforme qui gère les réservations", "ChatGPT directement intégré via un iframe"]), correctAnswer: "Voiceflow, car le budget est sous 1 500€ et la livraison sera rapide (1-2 jours)", explanation: "Avec un budget de 800€, Voiceflow est le choix optimal : livraison en 1-2 jours, interface drag-and-drop, Knowledge Base intégrée pour la FAQ. Une solution custom prendrait 1-3 semaines et mangerait toute la marge. Le branding Voiceflow est le seul compromis acceptable à ce prix." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 6,
    title: "Créer un chatbot avec Voiceflow",
    slug: "creer-chatbot-voiceflow-step-by-step",
    duration: "35 min",
    description: "Step by step : crée un chatbot fonctionnel sur Voiceflow, connecte l'API Claude ou OpenAI, entraîne-le sur une base de connaissances, et teste-le avant livraison client.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Ce que tu vas créer" },
      { id: "3-2", type: "text", html: "<p>À la fin de cette leçon, tu as un chatbot Voiceflow complet qui : (1) accueille l'utilisateur, (2) comprend ses questions en langage naturel grâce à l'IA, (3) répond en s'appuyant sur une base de connaissances que tu as fournie, (4) peut être intégré sur n'importe quel site avec un snippet HTML.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "Voiceflow utilise son propre modèle IA par défaut, mais tu peux brancher OpenAI (GPT-4o) ou Anthropic (Claude) sur tes propres clés API. C'est ce qu'on va faire." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Configuration du projet" },
      { id: "3-6", type: "steps", steps: [
        { title: "Crée un nouveau projet", description: "Dans Voiceflow, clique sur 'New Project'. Choisis 'Chat Assistant'. Nomme-le 'Chatbot Client Demo'." },
        { title: "Configure les paramètres IA", description: "Va dans Settings > AI Model. Sélectionne 'Custom AI Model'. Colle ta clé API Anthropic ou OpenAI. Choisis claude-3-5-sonnet-20241022 ou gpt-4o." },
        { title: "Ajoute les variables globales", description: "Dans Variables, crée : user_name (string), user_intent (string), conversation_context (string). Tu t'en serviras pour personnaliser les réponses." },
      ]},
      { id: "3-7", type: "code", language: "text", filename: "Voiceflow — System Prompt de base", code: `Tu es l'assistant virtuel de {company_name}.
Tu réponds uniquement aux questions liées à {company_domain}.
Tu es utile, concis et professionnel.
Si tu ne sais pas répondre, dis-le honnêtement et propose de contacter le support humain.
Ne réponds jamais aux questions hors sujet.
Réponds toujours en français.` },

      { id: "3-8", type: "heading", level: 2, text: "Étape 2 : Construire le flow principal" },
      { id: "3-9", type: "diagram", variant: "flow", nodes: [
        { id: "v1", label: "Start", description: "Bloc de démarrage automatique" },
        { id: "v2", label: "Speak : Message d'accueil", description: "«Bonjour ! Je suis l'assistant de {company_name}. Comment puis-je vous aider ?»" },
        { id: "v3", label: "Capture : User Input", description: "Bloc AI — capture la question de l'utilisateur et détecte l'intention" },
        { id: "v4", label: "Knowledge Base Query", description: "Interroge ta base de connaissances avec la question de l'utilisateur" },
        { id: "v5", label: "Speak : Réponse IA", description: "Affiche la réponse générée par le modèle" },
        { id: "v6", label: "Condition : satisfied ?", description: "L'utilisateur a-t-il d'autres questions ? Oui → retour Capture. Non → fin." },
      ]},
      { id: "3-10", type: "callout", variant: "tip", html: "Le bloc <strong>AI Response</strong> de Voiceflow fait tout en un : il prend la question, interroge la Knowledge Base, et génère une réponse contextuelle. Tu n'as pas besoin de coder la logique RAG toi-même." },

      { id: "3-11", type: "heading", level: 2, text: "Étape 3 : Alimenter la Knowledge Base" },
      { id: "3-12", type: "steps", steps: [
        { title: "Accède à la Knowledge Base", description: "Dans le menu gauche, clique sur l'icône 'Knowledge Base' (livre). C'est ici que tu vas nourrir ton chatbot." },
        { title: "Upload tes sources", description: "Clique sur 'Add Data Source'. Tu peux ajouter : PDF (max 50 MB), URL à crawler (le site du client), texte brut. Pour la démo : upload une FAQ en PDF." },
        { title: "Configure le chunking", description: "Laisse les paramètres par défaut pour commencer : chunk size 500 tokens, overlap 50. Tu peux affiner si les réponses sont trop courtes ou coupées." },
        { title: "Connecte la KB au flow", description: "Dans ton bloc AI Response, active 'Use Knowledge Base'. Voiceflow récupérera automatiquement les passages pertinents avant de générer la réponse." },
      ]},

      { id: "3-13", type: "heading", level: 2, text: "Étape 4 : Personnaliser le comportement IA" },
      { id: "3-14", type: "code", language: "text", filename: "Voiceflow — AI Response Block Configuration", code: `System Prompt (dans le bloc AI Response) :
─────────────────────────────────────────
Tu es l'assistant de [Nom du client].
Utilise UNIQUEMENT les informations de la base de connaissances pour répondre.
Si la réponse n'est pas dans la base de connaissances, dis :
"Je n'ai pas cette information. Contactez-nous au [téléphone] ou par email à [email]."

Format tes réponses en bullet points si la réponse contient plus de 2 éléments.
Sois concis : maximum 3-4 phrases par réponse.
─────────────────────────────────────────
Temperature : 0.3 (réponses cohérentes)
Max tokens : 300` },

      { id: "3-15", type: "heading", level: 2, text: "Étape 5 : Tester et déployer" },
      { id: "3-16", type: "steps", steps: [
        { title: "Test dans Voiceflow", description: "Clique sur 'Run' en haut à droite. Teste 10 questions différentes : questions couvertes par la KB, questions hors sujet, questions ambiguës. Note les réponses ratées." },
        { title: "Affiner le system prompt", description: "Si le chatbot hallucine (invente des réponses), renforce le prompt : 'Ne génère JAMAIS d'informations qui ne sont pas dans la base de connaissances.'" },
        { title: "Exporter le widget", description: "Dans 'Integrations', copie le snippet HTML. C'est 3 lignes de code que ton client colle avant la balise </body>." },
      ]},
      { id: "3-17", type: "code", language: "javascript", filename: "snippet-voiceflow-widget.html", code: `<!-- Chatbot Voiceflow — à coller avant </body> -->
<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: 'VOTRE_PROJECT_ID' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        assistant: {
          stylesheet: 'https://yoursite.com/chatbot-custom.css', // optionnel
        },
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>` },

      { id: "3-18", type: "callout", variant: "success", html: "Avec ce setup, tu peux livrer un chatbot professionnel en 1-2 jours. Ajoute 30 minutes pour personnaliser les couleurs dans Voiceflow (Settings > Chat Widget > Appearance) et envoie le snippet au client." },

      { id: "3-19", type: "quiz-inline", question: "Dans Voiceflow, comment éviter que le chatbot invente des réponses qui ne sont pas dans la FAQ du client ?", options: [
        { id: "a", text: "Baisser la température du modèle à 0" },
        { id: "b", text: "Activer 'Use Knowledge Base' et spécifier dans le system prompt de n'utiliser que cette source" },
        { id: "c", text: "Utiliser un modèle plus petit" },
      ], correctId: "b", explanation: "La combinaison Knowledge Base + system prompt restrictif est la bonne approche. La température basse aide à la cohérence, mais sans la contrainte explicite dans le prompt, le modèle peut quand même halluciner." },

      { id: "3-20", type: "checklist", title: "Ce que tu sais faire maintenant", items: [
        { id: "c1", text: "Créer un projet Voiceflow et le connecter à une API IA (Claude / OpenAI)" },
        { id: "c2", text: "Construire un flow conversationnel avec accueil, capture, réponse IA" },
        { id: "c3", text: "Uploader une base de connaissances (PDF, URL) dans Voiceflow" },
        { id: "c4", text: "Écrire un system prompt efficace qui limite les hallucinations" },
        { id: "c5", text: "Tester, affiner et déployer le widget sur un site client" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée un chatbot Voiceflow pour une boutique fictive (ex: librairie, restaurant, salon de coiffure). Rédige une FAQ de 10 questions/réponses, uploade-la en PDF dans la Knowledge Base, construis le flow complet et teste 15 questions variées. Capture 3 exemples de bonnes réponses et 1 raté — et corrige-le en améliorant le system prompt.</p>",
    quiz: [
      { type: "mcq", question: "Dans Voiceflow, comment empêcher le chatbot d'inventer des réponses non présentes dans la FAQ ?", options: JSON.stringify(["Utiliser un modèle IA plus petit", "Activer 'Use Knowledge Base' et spécifier dans le system prompt de n'utiliser que cette source", "Supprimer toutes les variables globales", "Désactiver le bloc AI Response"]), correctAnswer: "Activer 'Use Knowledge Base' et spécifier dans le system prompt de n'utiliser que cette source", explanation: "La combinaison Knowledge Base activée + system prompt restrictif est la bonne approche. Le prompt doit inclure : 'Ne génère JAMAIS d'informations qui ne sont pas dans la base de connaissances.' Cela limite fortement les hallucinations." },
      { type: "true_false", question: "La Knowledge Base de Voiceflow permet d'uploader des PDFs et de crawler des URLs pour entraîner le chatbot.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Voiceflow accepte plusieurs types de sources dans sa Knowledge Base : PDF (max 50 MB), URLs à crawler (le site du client), et texte brut. Le chatbot s'appuie ensuite automatiquement sur ces données pour répondre." },
      { type: "mcq", question: "Quelle température recommande-t-on dans le bloc AI Response de Voiceflow pour un chatbot support client ?", options: JSON.stringify(["1.0 — pour des réponses créatives", "0.7 — pour un bon équilibre", "0.3 — pour des réponses cohérentes et fiables", "0.0 — pour des réponses identiques à chaque fois"]), correctAnswer: "0.3 — pour des réponses cohérentes et fiables", explanation: "Pour un chatbot support client, la température 0.3 assure des réponses cohérentes et factuelles. Une température élevée rendrait les réponses trop variées et risquerait d'introduire des erreurs factuelles." },
      { type: "true_false", question: "Le widget Voiceflow peut être intégré sur un site client avec seulement 3 lignes de code HTML.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Dans la section 'Integrations' de Voiceflow, un snippet HTML de 3 lignes est généré. Le client n'a qu'à le coller avant la balise </body> de son site. C'est l'un des avantages majeurs de Voiceflow pour une livraison rapide." },
      { type: "mcq", question: "Vous venez de livrer un chatbot Voiceflow pour une librairie. Le client se plaint que le chatbot invente des livres qui n'existent pas dans son catalogue. Quelle est votre première action corrective ?", options: JSON.stringify(["Vous changez le modèle IA pour un modèle moins puissant", "Vous vérifiez que la Knowledge Base est activée dans le bloc AI Response et vous ajoutez dans le system prompt l'instruction de ne jamais inventer", "Vous supprimez le chatbot et recommencez depuis zéro", "Vous augmentez la température à 1.0 pour des réponses plus variées"]), correctAnswer: "Vous vérifiez que la Knowledge Base est activée dans le bloc AI Response et vous ajoutez dans le system prompt l'instruction de ne jamais inventer", explanation: "Les hallucinations viennent souvent d'une Knowledge Base non activée ou d'un system prompt trop permissif. La correction : activer 'Use Knowledge Base' + ajouter dans le prompt 'Ne génère JAMAIS d'informations qui ne sont pas dans la base de connaissances. Si tu ne sais pas, redirige vers le libraire.'" },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 6,
    title: "Créer un chatbot custom (Next.js + API Claude)",
    slug: "chatbot-custom-nextjs-api-claude",
    duration: "35 min",
    description: "Construis un widget chat from scratch en Next.js, avec une API route qui streame les réponses de Claude, un system prompt dynamique et une base de connaissances injectée dans le contexte.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi coder son propre chatbot ?" },
      { id: "4-2", type: "text", html: "<p>Le chatbot custom est ta carte maîtresse pour les projets haut de gamme. Aucune dépendance à une plateforme tierce, design 100% intégré au site du client, logique métier sur mesure, et <strong>marge maximale</strong> : pas d'abonnement Voiceflow à 125$/mois à déduire.</p><p>Dans cette leçon, on code un widget chat React + une API route Next.js qui appelle Claude avec streaming. C'est la stack que tu peux réutiliser sur tous tes projets custom.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "Prérequis : avoir un projet Next.js 14+ (App Router). Si tu pars de zéro : <code>npx create-next-app@latest chatbot-demo --typescript</code>." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture de la solution" },
      { id: "4-6", type: "diagram", variant: "flow", nodes: [
        { id: "a1", label: "Widget React (client)", description: "ChatWidget.tsx — UI, historique des messages, input utilisateur" },
        { id: "a2", label: "POST /api/chat", description: "API Route Next.js — reçoit le message + historique" },
        { id: "a3", label: "Injection du contexte", description: "System prompt + chunks de la base de connaissances" },
        { id: "a4", label: "Anthropic SDK", description: "Appel à claude-3-5-sonnet avec streaming activé" },
        { id: "a5", label: "SSE Stream", description: "Les tokens arrivent en temps réel dans le widget" },
      ]},

      { id: "4-7", type: "heading", level: 2, text: "1. L'API route avec streaming" },
      { id: "4-8", type: "code", language: "typescript", filename: "app/api/chat/route.ts", code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = \`Tu es l'assistant virtuel de {NomClient}.
Tu réponds uniquement aux questions relatives à leurs services.
Sois concis, utile et professionnel.
Si tu ne sais pas, dis-le et propose de contacter le support.
Base de connaissances :
{KNOWLEDGE_CONTEXT}\`;

export async function POST(req: Request) {
  const { messages, knowledgeContext } = await req.json();

  const systemPrompt = SYSTEM_PROMPT.replace(
    "{KNOWLEDGE_CONTEXT}",
    knowledgeContext ?? ""
  );

  const stream = client.messages.stream({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages, // [{ role: "user"|"assistant", content: "..." }]
  });

  // Transformer le stream Anthropic en ReadableStream Web API
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(
            new TextEncoder().encode(event.delta.text)
          );
        }
      }
      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}` },

      { id: "4-9", type: "heading", level: 2, text: "2. Le widget chat React" },
      { id: "4-10", type: "code", language: "typescript", filename: "components/ChatWidget.tsx", code: `"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget({
  knowledgeContext = "",
}: {
  knowledgeContext?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    // Ajoute un message assistant vide qu'on va remplir avec le stream
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: updatedMessages,
        knowledgeContext,
      }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      // Mise à jour du dernier message avec le chunk reçu
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content += chunk;
        return updated;
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl z-50"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl font-semibold">
            Assistant IA
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-8">
                Bonjour ! Comment puis-je vous aider ?
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={\`flex \${msg.role === "user" ? "justify-end" : "justify-start"}\`}
              >
                <div
                  className={\`max-w-[80%] p-3 rounded-2xl text-sm \${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }\`}
                >
                  {msg.content || (isLoading ? "..." : "")}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Votre question..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm disabled:opacity-50"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}` },

      { id: "4-11", type: "heading", level: 2, text: "3. Injecter la base de connaissances" },
      { id: "4-12", type: "code", language: "typescript", filename: "app/page.tsx (exemple d'utilisation)", code: `import ChatWidget from "@/components/ChatWidget";

// Exemple : base de connaissances chargée côté serveur
// (en prod : récupérée depuis une DB ou un fichier)
const FAQ_KNOWLEDGE = \`
=== POLITIQUE DE RETOUR ===
Vous avez 30 jours pour retourner un article.
Les articles doivent être non utilisés et dans leur emballage d'origine.
Remboursement sous 5-7 jours ouvrés.

=== LIVRAISON ===
Livraison standard : 3-5 jours ouvrés, gratuite dès 50€.
Livraison express : 24h, 9,90€.
Suivi disponible par email dès l'expédition.

=== CONTACT ===
Email : support@boutique.fr
Téléphone : 01 23 45 67 89 (lun-ven 9h-18h)
\`;

export default function Home() {
  return (
    <main>
      {/* ... contenu de la page ... */}
      <ChatWidget knowledgeContext={FAQ_KNOWLEDGE} />
    </main>
  );
}` },

      { id: "4-13", type: "callout", variant: "tip", html: "Tu peux aussi charger la base de connaissances dynamiquement depuis une table Supabase ou un fichier Markdown. Dans ce cas, fais un <code>fetch</code> côté serveur dans <code>page.tsx</code> et passe le résultat en prop au widget." },

      { id: "4-14", type: "heading", level: 2, text: "4. Variables d'environnement" },
      { id: "4-15", type: "code", language: "text", filename: ".env.local", code: `ANTHROPIC_API_KEY=sk-ant-api03-VOTRE_CLE_ICI` },
      { id: "4-16", type: "callout", variant: "warning", html: "Ne commite jamais ton fichier <code>.env.local</code>. Vérifie que <code>.gitignore</code> contient bien <code>.env.local</code>. Sur Vercel, ajoute la clé dans Environment Variables (Settings > Environment Variables)." },

      { id: "4-17", type: "separator", style: "line" },
      { id: "4-18", type: "quiz-inline", question: "Pourquoi utilise-t-on le streaming (ReadableStream) plutôt qu'une réponse JSON classique pour le chatbot ?", options: [
        { id: "a", text: "Parce que l'API Anthropic ne supporte pas les réponses JSON" },
        { id: "b", text: "Pour afficher les tokens en temps réel et éviter que l'utilisateur attende 5 secondes avec un écran blanc" },
        { id: "c", text: "Pour réduire les coûts d'API" },
      ], correctId: "b", explanation: "Le streaming améliore drastiquement l'expérience utilisateur : les mots apparaissent au fur et à mesure comme si quelqu'un tapait, plutôt qu'une attente suivie d'un bloc de texte soudain. C'est la norme UX attendue." },

      { id: "4-19", type: "separator", style: "dots" },
      { id: "4-20", type: "checklist", title: "Ce que tu sais faire maintenant", items: [
        { id: "c1", text: "Créer une API route Next.js qui appelle Claude avec streaming" },
        { id: "c2", text: "Construire un widget chat React avec historique des messages" },
        { id: "c3", text: "Injecter une base de connaissances dans le system prompt" },
        { id: "c4", text: "Lire un ReadableStream côté client et mettre à jour l'UI en temps réel" },
        { id: "c5", text: "Gérer les variables d'environnement et déployer sur Vercel" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Implémente ce chatbot dans un projet Next.js local. Crée une FAQ fictive de 5 entrées pour une boutique de sport, injecte-la comme <code>knowledgeContext</code>, et teste 8 questions. Vérifie que le streaming fonctionne (les tokens arrivent un par un). Pousse le projet sur GitHub et déploie sur Vercel.</p>",
    quiz: [
      { type: "mcq", question: "Dans un chatbot custom Next.js, comment l'API route renvoie-t-elle la réponse de Claude en streaming ?", options: JSON.stringify(["Via un fichier JSON téléchargé", "Via un ReadableStream renvoyé dans un objet Response", "Via un WebSocket permanent", "Via des emails successifs"]), correctAnswer: "Via un ReadableStream renvoyé dans un objet Response", explanation: "L'API route crée un ReadableStream qui enqueue les tokens de Claude au fur et à mesure de leur génération. Ce stream est retourné dans un objet Response standard, et le client le lit avec un reader pour mettre à jour l'UI en temps réel." },
      { type: "true_false", question: "Injecter toute la FAQ dans le system prompt est une solution viable pour un chatbot avec moins de 50 questions/réponses.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Pour un petit volume de données (moins de 50 Q&R), l'injection directe dans le system prompt comme knowledgeContext fonctionne bien. C'est simple et efficace. Pour des volumes plus importants, il faut passer au RAG avec une vector database." },
      { type: "mcq", question: "Pourquoi utilise-t-on le SDK Anthropic côté serveur (API route) et jamais côté client (composant React) ?", options: JSON.stringify(["Parce que le SDK ne fonctionne pas dans le navigateur", "Pour protéger la clé API qui ne doit jamais être exposée côté client", "Pour améliorer les performances", "Parce que React ne supporte pas les appels API"]), correctAnswer: "Pour protéger la clé API qui ne doit jamais être exposée côté client", explanation: "La clé API Anthropic est stockée en variable d'environnement côté serveur. Si elle était exposée côté client, n'importe qui pourrait l'extraire du code JavaScript et l'utiliser. L'API route agit comme intermédiaire sécurisé." },
      { type: "true_false", question: "Le composant ChatWidget gère l'historique des messages en stockant un tableau de messages avec le rôle (user/assistant) et le contenu.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le composant React maintient un state avec un tableau de messages [{role: 'user', content: '...'}, {role: 'assistant', content: '...'}]. Cet historique est envoyé à l'API à chaque requête pour que Claude ait le contexte de la conversation." },
      { type: "mcq", question: "Un prospect vous demande un chatbot custom pour son SaaS avec un design entièrement personnalisé et intégré dans son dashboard existant. Voiceflow ne convient pas. Quelle architecture technique lui proposez-vous ?", options: JSON.stringify(["Un simple iframe ChatGPT intégré dans le dashboard", "Une API route Next.js qui appelle Claude avec streaming, un composant React ChatWidget avec ReadableStream, et la FAQ injectée dans le system prompt", "Un plugin WordPress avec un formulaire de contact", "Un fichier HTML statique avec des réponses pré-écrites"]), correctAnswer: "Une API route Next.js qui appelle Claude avec streaming, un composant React ChatWidget avec ReadableStream, et la FAQ injectée dans le system prompt", explanation: "Pour un chatbot custom intégré dans un SaaS, l'architecture complète est : API route côté serveur (protection de la clé API) → Claude avec streaming → ReadableStream côté client → composant React personnalisable. Le design s'intègre parfaitement au dashboard existant." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 6,
    title: "RAG : donner une mémoire à ton chatbot",
    slug: "rag-memoire-chatbot-embeddings-vector-db",
    duration: "30 min",
    description: "Comprends le Retrieval Augmented Generation (RAG) et implémente-le : génère des embeddings, stocke-les dans Pinecone ou Supabase pgvector, et récupère les passages pertinents à chaque message.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le problème que RAG résout" },
      { id: "5-2", type: "text", html: "<p>Injecter toute ta FAQ dans le system prompt fonctionne pour 50 Q&R. Mais si ton client a <strong>500 pages de documentation</strong>, 3 000 produits, ou des politiques qui changent chaque mois ? Le context window de Claude a une limite, et envoyer 200 000 tokens à chaque message coûte cher.</p><p>RAG résout ce problème : au lieu d'envoyer tout le contexte, tu <strong>cherches les passages pertinents</strong> pour la question de l'utilisateur et tu n'injectes que ceux-là. C'est plus rapide, moins cher, et souvent plus précis.</p>" },
      { id: "5-3", type: "diagram", variant: "flow", nodes: [
        { id: "r1", label: "Indexation (une seule fois)", description: "Découpe les docs en chunks → génère des embeddings → stocke dans la vector DB" },
        { id: "r2", label: "Question utilisateur", description: "L'utilisateur pose une question dans le chat" },
        { id: "r3", label: "Embedding de la question", description: "Convertit la question en vecteur numérique" },
        { id: "r4", label: "Recherche vectorielle", description: "Trouve les chunks les plus similaires dans la DB" },
        { id: "r5", label: "Génération augmentée", description: "Injecte les chunks pertinents + question dans Claude → réponse précise" },
      ]},
      { id: "5-4", type: "callout", variant: "info", html: "Un <strong>embedding</strong> c'est une représentation numérique (vecteur de ~1 500 nombres) qui capture le sens d'un texte. Deux phrases similaires ont des vecteurs proches. C'est ce qui permet la recherche sémantique." },
      { id: "5-5", type: "separator", style: "dots" },

      { id: "5-6", type: "heading", level: 2, text: "Les composants d'un pipeline RAG" },
      { id: "5-7", type: "comparison", headers: ["Composant", "Option gratuite / open source", "Option recommandée (prod)"], rows: [
        { cells: ["Modèle d'embedding", "text-embedding-3-small (OpenAI) — 0.02$/1M tokens", "text-embedding-3-large (meilleure précision)"] },
        { cells: ["Vector DB", "Supabase pgvector (gratuit jusqu'à 500 MB)", "Pinecone (starter gratuit, scalable)"] },
        { cells: ["Chunking", "LangChain RecursiveCharacterTextSplitter", "Chunking custom selon structure du doc"] },
        { cells: ["Reranking", "Pas nécessaire pour débuter", "Cohere Reranker pour projets avancés"] },
      ]},

      { id: "5-8", type: "heading", level: 2, text: "Étape 1 : Découper les documents en chunks" },
      { id: "5-9", type: "code", language: "typescript", filename: "lib/rag/chunker.ts", code: `// Découpe un texte en chunks avec overlap
export function chunkText(
  text: string,
  chunkSize = 500,
  overlap = 50
): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end).trim());
    start += chunkSize - overlap;
  }

  return chunks.filter((c) => c.length > 50); // Ignore les chunks trop courts
}

// Exemple : découper une FAQ markdown
export function chunkMarkdownBySection(markdown: string): string[] {
  // Découpe aux titres H2/H3
  const sections = markdown.split(/\n#{2,3} /);
  const chunks: string[] = [];

  for (const section of sections) {
    if (section.length <= 500) {
      chunks.push(section.trim());
    } else {
      // Section trop longue → sous-découpe
      chunks.push(...chunkText(section, 500, 50));
    }
  }

  return chunks.filter((c) => c.length > 30);
}` },

      { id: "5-10", type: "heading", level: 2, text: "Étape 2 : Générer et stocker les embeddings (Supabase pgvector)" },
      { id: "5-11", type: "code", language: "sql", filename: "supabase/migrations/create_documents_table.sql", code: `-- Active l'extension pgvector
create extension if not exists vector;

-- Table pour stocker les chunks et leurs embeddings
create table documents (
  id bigserial primary key,
  content text not null,
  embedding vector(1536), -- dimension pour text-embedding-3-small
  metadata jsonb default '{}', -- source, page, date, etc.
  created_at timestamptz default now()
);

-- Index pour la recherche vectorielle rapide (cosine similarity)
create index on documents
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- Fonction de recherche sémantique
create or replace function match_documents(
  query_embedding vector(1536),
  match_count int default 5,
  match_threshold float default 0.7
)
returns table (id bigint, content text, metadata jsonb, similarity float)
language sql stable
as $$
  select id, content, metadata,
    1 - (embedding <=> query_embedding) as similarity
  from documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;` },
      { id: "5-12", type: "code", language: "typescript", filename: "lib/rag/indexer.ts", code: `import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function indexChunks(
  chunks: string[],
  metadata: Record<string, string> = {}
) {
  for (const chunk of chunks) {
    // Génère l'embedding
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunk,
    });
    const embedding = embeddingRes.data[0].embedding;

    // Stocke dans Supabase
    const { error } = await supabase.from("documents").insert({
      content: chunk,
      embedding,
      metadata,
    });

    if (error) console.error("Erreur indexation:", error);
  }
  console.log(\`✅ \${chunks.length} chunks indexés\`);
}` },

      { id: "5-13", type: "heading", level: 2, text: "Étape 3 : Rechercher et injecter dans Claude" },
      { id: "5-14", type: "code", language: "typescript", filename: "lib/rag/retriever.ts", code: `import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function retrieveContext(
  query: string,
  matchCount = 5
): Promise<string> {
  // Embedding de la question
  const embeddingRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const queryEmbedding = embeddingRes.data[0].embedding;

  // Recherche dans Supabase
  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_count: matchCount,
    match_threshold: 0.6,
  });

  if (error || !data?.length) return "";

  // Formate les chunks récupérés en contexte lisible
  return data
    .map((doc: { content: string; similarity: number }) =>
      \`[Pertinence: \${(doc.similarity * 100).toFixed(0)}%]\n\${doc.content}\`
    )
    .join("\n\n---\n\n");
}` },
      { id: "5-15", type: "code", language: "typescript", filename: "app/api/chat/route.ts (version RAG)", code: `import Anthropic from "@anthropic-ai/sdk";
import { retrieveContext } from "@/lib/rag/retriever";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastUserMessage = messages[messages.length - 1].content;

  // Récupère le contexte pertinent depuis la vector DB
  const context = await retrieveContext(lastUserMessage);

  const systemPrompt = context
    ? \`Tu es un assistant utile. Utilise uniquement le contexte suivant pour répondre.
Si la réponse n'est pas dans le contexte, dis-le clairement.

CONTEXTE PERTINENT :
\${context}\`
    : \`Tu es un assistant utile. Je n'ai pas trouvé d'information pertinente dans la base de connaissances. Réponds que tu n'as pas cette information.\`;

  const stream = client.messages.stream({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages,
  });

  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          controller.enqueue(new TextEncoder().encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}` },

      { id: "5-16", type: "callout", variant: "warning", html: "Le coût des embeddings est quasi nul (text-embedding-3-small coûte ~0.02$ pour 1 million de tokens). L'indexation d'une FAQ de 100 pages coûte moins de 0.01$. En revanche, l'hébergement Supabase et Pinecone ont des limites sur les tiers gratuits — surveille tes quotas." },

      { id: "5-17", type: "separator", style: "line" },
      { id: "5-18", type: "quiz-inline", question: "Quelle est la différence fondamentale entre RAG et le fait de coller toute la documentation dans le system prompt ?", options: [
        { id: "a", text: "RAG utilise un modèle différent" },
        { id: "b", text: "RAG sélectionne uniquement les passages pertinents à chaque question, ce qui réduit les coûts et le bruit dans le contexte" },
        { id: "c", text: "RAG ne nécessite pas de vector database" },
      ], correctId: "b", explanation: "Avec RAG, tu n'envoies à Claude que les 3-5 passages les plus pertinents pour la question posée. Ça réduit le coût (moins de tokens), améliore la précision (moins de bruit), et permet de dépasser la limite du context window." },

      { id: "5-19", type: "separator", style: "dots" },
      { id: "5-20", type: "checklist", title: "Ce que tu sais faire maintenant", items: [
        { id: "c1", text: "Expliquer ce qu'est le RAG et pourquoi c'est supérieur à l'injection brute" },
        { id: "c2", text: "Découper des documents en chunks avec overlap" },
        { id: "c3", text: "Générer des embeddings avec l'API OpenAI" },
        { id: "c4", text: "Configurer Supabase pgvector pour stocker et rechercher des vecteurs" },
        { id: "c5", text: "Intégrer la récupération de contexte dans une API route Claude" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée un projet Supabase, active pgvector et exécute le SQL de migration. Prends un document texte (ta propre FAQ, une notice de produit, etc.), découpe-le en chunks et indexe-les. Teste ensuite 5 requêtes en appelant <code>retrieveContext()</code> depuis un script Node et vérifie que les passages retournés sont bien pertinents.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'un embedding dans le contexte du RAG ?", options: JSON.stringify(["Un lien URL intégré dans un document", "Un vecteur numérique qui capture le sens sémantique d'un texte", "Un format de fichier pour les images", "Un type de base de données"]), correctAnswer: "Un vecteur numérique qui capture le sens sémantique d'un texte", explanation: "Un embedding est une représentation numérique (vecteur d'environ 1 500 nombres) qui capture le sens d'un texte. Deux phrases au sens similaire ont des vecteurs proches dans l'espace vectoriel. C'est ce qui permet la recherche sémantique." },
      { type: "true_false", question: "Le RAG envoie l'intégralité de la documentation à Claude à chaque question de l'utilisateur.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est exactement ce que le RAG évite. Au lieu d'envoyer tout le contexte, il recherche les 3-5 passages les plus pertinents pour la question posée et n'injecte que ceux-là. Cela réduit les coûts, améliore la précision et contourne les limites du context window." },
      { type: "mcq", question: "Quel est le rôle de l'overlap dans le découpage de documents en chunks ?", options: JSON.stringify(["Augmenter la taille des chunks", "Assurer une continuité entre les chunks pour ne pas couper une idée en deux", "Réduire le nombre total de chunks", "Accélérer la recherche vectorielle"]), correctAnswer: "Assurer une continuité entre les chunks pour ne pas couper une idée en deux", explanation: "L'overlap (chevauchement) fait que la fin d'un chunk se retrouve au début du suivant. Cela garantit qu'une idée ou une phrase coupée à la frontière d'un chunk est quand même présente en entier dans au moins un chunk." },
      { type: "true_false", question: "L'indexation d'une FAQ de 100 pages avec text-embedding-3-small coûte moins de 0,01$.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le modèle text-embedding-3-small coûte environ 0,02$ pour 1 million de tokens. Une FAQ de 100 pages représente bien moins qu'un million de tokens, donc l'indexation coûte quasi rien. C'est le traitement par Claude qui représente le coût principal." },
      { type: "mcq", question: "Un client cabinet d'avocats possède 500 pages de documentation juridique et veut un chatbot qui répond aux questions de ses clients. L'injection dans le system prompt ne suffit plus. Quelle solution technique lui proposez-vous ?", options: JSON.stringify(["Résumer toute la documentation en 10 phrases et les injecter dans le prompt", "Mettre en place un système RAG : découper les documents en chunks, les indexer avec des embeddings dans Supabase pgvector, et récupérer les passages pertinents à chaque question", "Demander au client de réduire sa documentation à 5 pages", "Utiliser un modèle IA avec un context window de 1 million de tokens"]), correctAnswer: "Mettre en place un système RAG : découper les documents en chunks, les indexer avec des embeddings dans Supabase pgvector, et récupérer les passages pertinents à chaque question", explanation: "Le RAG est la solution adaptée pour les grandes bases de connaissances : on découpe les documents en chunks avec overlap, on les transforme en vecteurs (embeddings), et à chaque question, on récupère les 3-5 passages les plus pertinents. Cela évite d'envoyer 500 pages à chaque requête." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 6,
    title: "Projet : un chatbot support client déployé",
    slug: "projet-chatbot-support-client-deploye",
    duration: "25 min",
    description: "Assemble tout ce que tu as appris : un chatbot support client complet pour un e-commerce fictif, entraîné sur une FAQ réelle, déployé sur Vercel, prêt à montrer à un client.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le projet final" },
      { id: "6-2", type: "text", html: "<p>On construit <strong>Velora Assistant</strong> — le chatbot support client de Velora, une boutique e-commerce fictive de vêtements outdoor. Il sera entraîné sur une FAQ complète, déployé sur Vercel, et tu pourras l'utiliser comme démo client.</p><p>À la fin de cette leçon, tu as un lien à partager, une démo en live, et un projet à présenter en prospection.</p>" },
      { id: "6-3", type: "callout", variant: "tip", html: "Ce projet est ta vitrine. Customise-le avec le nom et le domaine de ton choix. Un chatbot fonctionnel vaut 10 slides de présentation." },
      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Structure du projet" },
      { id: "6-6", type: "diagram", variant: "tree", nodes: [
        { id: "p1", label: "velora-chatbot/", description: "Racine du projet Next.js" },
        { id: "p2", label: "app/", description: "App Router Next.js 14" },
        { id: "p3", label: "app/api/chat/route.ts", description: "API route avec RAG + streaming Claude" },
        { id: "p4", label: "app/page.tsx", description: "Page de démo avec le widget intégré" },
        { id: "p5", label: "components/ChatWidget.tsx", description: "Widget chat avec design Velora" },
        { id: "p6", label: "lib/rag/", description: "retriever.ts + indexer.ts + chunker.ts" },
        { id: "p7", label: "data/velora-faq.md", description: "FAQ complète de Velora (source de vérité)" },
        { id: "p8", label: "scripts/index-faq.ts", description: "Script one-shot pour indexer la FAQ" },
      ]},

      { id: "6-7", type: "heading", level: 2, text: "La FAQ de Velora (source de vérité)" },
      { id: "6-8", type: "code", language: "text", filename: "data/velora-faq.md", code: `# FAQ Velora — Support Client

## Commandes et livraison

### Quels sont les délais de livraison ?
Livraison standard : 3-5 jours ouvrés (gratuite dès 60€).
Livraison express 24h : 9,90€, disponible du lundi au jeudi avant 14h.
Livraison en point relais : 2-4 jours, 3,90€.

### Comment suivre ma commande ?
Un email de confirmation avec lien de suivi est envoyé dès l'expédition.
Délai d'expédition : 24-48h après validation du paiement.
Suivi disponible sur velora.fr/mon-compte > Mes commandes.

## Retours et remboursements

### Quelle est votre politique de retour ?
Retours acceptés sous 30 jours après réception.
Articles non portés, non lavés, avec étiquettes d'origine.
Retour gratuit pour les commandes > 80€. Sinon, 4,90€ à votre charge.
Formulaire de retour disponible sur velora.fr/retours.

### Quand serai-je remboursé ?
Remboursement sous 5-7 jours ouvrés après réception de l'article retourné.
Remboursement sur le moyen de paiement d'origine uniquement.

## Produits

### Quelles matières utilisez-vous ?
Velora utilise exclusivement des matières certifiées GOTS (coton bio) et OEKO-TEX.
Les doudounes utilisent du duvet de canard certifié RDS.

### Avez-vous des produits imperméables ?
Oui, notre gamme Alpine est traitée DWR (déperlant durable).
Lavage recommandé : programme délicat 30°C, sans adoucissant.

## Contact et support

### Comment contacter le service client ?
Email : support@velora.fr — réponse sous 24h ouvrées.
Téléphone : 01 88 12 34 56, lun-ven 9h-18h.
Chat en ligne disponible sur le site pendant les heures d'ouverture.` },

      { id: "6-9", type: "heading", level: 2, text: "Script d'indexation de la FAQ" },
      { id: "6-10", type: "code", language: "typescript", filename: "scripts/index-faq.ts", code: `import { readFileSync } from "fs";
import { chunkMarkdownBySection } from "../lib/rag/chunker";
import { indexChunks } from "../lib/rag/indexer";

async function main() {
  const faqContent = readFileSync("data/velora-faq.md", "utf-8");
  const chunks = chunkMarkdownBySection(faqContent);

  console.log(\`📄 \${chunks.length} chunks générés depuis la FAQ\`);
  console.log("Exemple chunk:", chunks[0].slice(0, 100) + "...");

  await indexChunks(chunks, {
    source: "velora-faq",
    version: "2025-01",
  });

  console.log("✅ Indexation terminée !");
}

main().catch(console.error);

// Lancement : npx tsx scripts/index-faq.ts` },

      { id: "6-11", type: "heading", level: 2, text: "Personnalisation du system prompt pour Velora" },
      { id: "6-12", type: "code", language: "typescript", filename: "app/api/chat/route.ts (system prompt Velora)", code: `const VELORA_SYSTEM_PROMPT = \`Tu es Vélo, l'assistant virtuel de Velora — une boutique de vêtements outdoor éco-responsables.

TON RÔLE :
- Répondre aux questions sur les commandes, livraisons, retours et produits Velora
- Utiliser UNIQUEMENT les informations du contexte fourni
- Orienter vers le service client humain si tu ne sais pas répondre

TON TON :
- Chaleureux mais professionnel
- Concis (2-3 phrases max par réponse)
- Utiliser "vous" (vouvoiement)

SI LA RÉPONSE N'EST PAS DANS LE CONTEXTE :
Réponds exactement : "Je n'ai pas cette information dans ma base. Pour une réponse précise, contactez notre équipe : support@velora.fr ou 01 88 12 34 56."

NE JAMAIS :
- Inventer des délais, prix ou politiques
- Parler de concurrents
- Donner des conseils médicaux ou juridiques
\`;` },

      { id: "6-13", type: "heading", level: 2, text: "Déploiement sur Vercel" },
      { id: "6-14", type: "steps", steps: [
        { title: "Pushe sur GitHub", description: "git add . && git commit -m 'feat: chatbot Velora complet' && git push" },
        { title: "Importe sur Vercel", description: "vercel.com/new > Import depuis GitHub > Sélectionne le repo velora-chatbot" },
        { title: "Configure les variables d'environnement", description: "Dans Vercel Settings > Environment Variables : ANTHROPIC_API_KEY, OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY" },
        { title: "Lance le déploiement", description: "Clique Deploy. En 2-3 minutes, ton chatbot est en ligne sur une URL Vercel." },
        { title: "Teste en production", description: "Ouvre l'URL Vercel et teste 10 questions. Vérifie le streaming, les réponses, les cas edge (question hors sujet)." },
      ]},
      { id: "6-15", type: "callout", variant: "success", html: "Ton chatbot est en ligne. Copie l'URL Vercel et envoie-la à 3 prospects aujourd'hui. C'est ta meilleure carte de visite." },

      { id: "6-16", type: "heading", level: 2, text: "Ce que tu peux montrer à un client" },
      { id: "6-17", type: "comparison", headers: ["Ce que tu démontres", "Argument client"], rows: [
        { cells: ["Réponses précises sur la FAQ", "«Votre chatbot répond en 2 secondes à 90% des questions de vos clients»"] },
        { cells: ["Hors sujet redirigé au support", "«Aucun risque de réponse incorrecte — il sait quand passer la main»"] },
        { cells: ["Interface intégrée au site", "«Design sur mesure, invisible techniquement pour vos visiteurs»"] },
        { cells: ["Disponible 24/7", "«Vos clients ont une réponse même le dimanche à 23h»"] },
        { cells: ["Déployé sur un vrai domaine", "«Ce n'est pas une démo — c'est un produit fini»"] },
      ]},

      { id: "6-18", type: "separator", style: "line" },
      { id: "6-19", type: "quiz-inline", question: "Tu montres ta démo Velora à un prospect e-commerce. Il demande : 'Et si mon client pose une question que le chatbot ne connaît pas ?' Tu réponds :", options: [
        { id: "a", text: "«Il va trouver une réponse de toute façon, les IA sont très capables»" },
        { id: "b", text: "«Le chatbot détecte qu'il n'a pas la réponse et redirige vers votre email ou téléphone — montrez-moi, je vais tester en direct»" },
        { id: "c", text: "«C'est un cas rare, ne vous inquiétez pas»" },
      ], correctId: "b", explanation: "Transformer l'objection en démonstration en direct est le meilleur closing. Tu montres le comportement de fallback et tu prouves que le chatbot ne va pas inventer. La transparence rassure." },

      { id: "6-20", type: "checklist", title: "Ton chatbot de démo est prêt si...", items: [
        { id: "c1", text: "La FAQ est indexée et les réponses sont précises sur 10 questions de test" },
        { id: "c2", text: "Les questions hors sujet redirigent vers le support (sans hallucination)" },
        { id: "c3", text: "Le streaming fonctionne (tokens en temps réel)" },
        { id: "c4", text: "Le design est propre et professionnel" },
        { id: "c5", text: "Le projet est déployé sur Vercel avec une URL publique" },
        { id: "c6", text: "Tu peux l'expliquer et le défendre face à un client en 5 minutes" },
      ]},
    ]),
    exercise: "<p><strong>Projet final :</strong> Déploie le chatbot Velora (ou un équivalent avec ta propre marque fictive) sur Vercel. Enregistre une vidéo de 2-3 minutes où tu montres le chatbot en action et tu expliques la valeur qu'il apporte à un e-commerce. Partage le lien Vercel et la vidéo dans la communauté Discord — c'est ton premier asset de prospection.</p>",
    quiz: [
      { type: "mcq", question: "Quand un prospect demande 'Et si le chatbot ne connaît pas la réponse ?', quelle est la meilleure réponse ?", options: JSON.stringify(["Rassurer en disant que l'IA trouvera toujours une réponse", "Faire une démo en direct du comportement de fallback qui redirige vers le support humain", "Minimiser le risque en disant que c'est rare", "Proposer un modèle IA plus puissant"]), correctAnswer: "Faire une démo en direct du comportement de fallback qui redirige vers le support humain", explanation: "Transformer l'objection en démonstration live est le meilleur closing. Tu poses une question hors sujet au chatbot et tu montres qu'il redirige proprement vers l'email ou le téléphone du support, sans inventer de réponse. La transparence rassure le prospect." },
      { type: "true_false", question: "Le system prompt du chatbot Velora utilise le tutoiement pour créer une relation de proximité avec les clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le system prompt de Velora spécifie explicitement d'utiliser le vouvoiement (\"vous\") pour un ton chaleureux mais professionnel. Le choix du tutoiement ou vouvoiement dépend de la marque du client et doit être défini dans le system prompt." },
      { type: "mcq", question: "Quelles variables d'environnement sont nécessaires pour déployer le chatbot RAG sur Vercel ?", options: JSON.stringify(["Uniquement ANTHROPIC_API_KEY", "ANTHROPIC_API_KEY, OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY", "Uniquement NEXT_PUBLIC_SUPABASE_URL", "DATABASE_URL et SECRET_KEY"]), correctAnswer: "ANTHROPIC_API_KEY, OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY", explanation: "Le chatbot RAG nécessite 4 clés : ANTHROPIC_API_KEY pour Claude (génération de réponses), OPENAI_API_KEY pour les embeddings, et les 2 clés Supabase pour la base de données vectorielle. Toutes doivent être configurées dans Vercel Settings > Environment Variables." },
      { type: "true_false", question: "Un chatbot de démo fonctionnel et déployé sur Vercel vaut mieux que 10 slides de présentation pour convaincre un prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un chatbot fonctionnel sur une URL publique est ta meilleure carte de visite. Le prospect peut le tester lui-même, voir les réponses en temps réel et imaginer la même chose pour son business. C'est un asset de prospection concret et différenciant." },
      { type: "mcq", question: "Vous présentez votre chatbot de démo à un prospect e-commerce. Il vous demande : 'Et si quelqu'un pose une question sur un concurrent ou un sujet sans rapport ?' Comment gérez-vous cette objection ?", options: JSON.stringify(["Vous dites que l'IA est assez intelligente pour ne jamais répondre hors sujet", "Vous faites une démo live en posant une question hors sujet pour montrer le fallback qui redirige proprement vers le support humain", "Vous changez de sujet et parlez des fonctionnalités du chatbot", "Vous proposez de bloquer toutes les questions qui ne sont pas dans la FAQ"]), correctAnswer: "Vous faites une démo live en posant une question hors sujet pour montrer le fallback qui redirige proprement vers le support humain", explanation: "Transformer l'objection en démonstration live est la meilleure technique de closing. Vous posez une question hors sujet au chatbot et montrez qu'il redirige proprement vers l'email ou téléphone du support, sans inventer de réponse. La transparence rassure et impressionne le prospect." },
    ],
  },
];
