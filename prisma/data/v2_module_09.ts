// ═══════════════════════════════════════════════════
// MODULE 9 — Agents vocaux IA
// 3 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_09_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 9,
    title: "Créer un agent vocal avec Vapi & ElevenLabs",
    slug: "v2-creer-agent-vocal-vapi-elevenlabs",
    duration: "30 min",
    description: "Apprends à créer ton premier agent vocal IA de A à Z en combinant Vapi pour la logique conversationnelle et ElevenLabs pour une voix naturelle et convaincante.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Qu'est-ce qu'un agent vocal IA ?" },
      { id: "1-2", type: "text", html: "<p>Un agent vocal IA est un programme capable de <strong>recevoir et passer des appels téléphoniques</strong> de manière autonome. Contrairement à un simple serveur vocal interactif (SVI) qui propose des menus figés, un agent vocal IA comprend le langage naturel, répond de façon contextuelle et peut exécuter des actions comme réserver un créneau ou transférer un appel.</p><p>La stack technique repose sur trois briques : la <strong>reconnaissance vocale</strong> (Speech-to-Text) qui transforme la parole en texte, le <strong>modèle de langage</strong> (LLM) qui génère la réponse, et la <strong>synthèse vocale</strong> (Text-to-Speech) qui transforme le texte en parole naturelle. Vapi orchestre ces trois briques, tandis qu'ElevenLabs fournit des voix ultra-réalistes.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Pourquoi Vapi + ElevenLabs ?</strong> Vapi est la plateforme la plus flexible pour créer des agents téléphoniques sans coder. ElevenLabs produit les voix synthétiques les plus naturelles du marché. Ensemble, ils forment le combo idéal pour un agent vocal professionnel." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Configurer Vapi : ton premier agent en 20 minutes" },
      { id: "1-6", type: "steps", steps: [
        { title: "Créer un compte Vapi", description: "Rends-toi sur vapi.ai et crée un compte. Le plan gratuit inclut 10 minutes d'appel par mois pour tester. Récupère ta clé API dans le dashboard sous Settings > API Keys." },
        { title: "Définir le System Prompt", description: "Le System Prompt est le cerveau de ton agent. Il définit sa personnalité, son rôle et ses instructions. Exemple : 'Tu es l'assistant téléphonique du cabinet dentaire Martin. Tu es poli, concis et professionnel. Tu prends les rendez-vous et tu réponds aux questions sur les horaires.'" },
        { title: "Choisir le modèle LLM", description: "Vapi supporte GPT-4o, Claude et d'autres modèles. Pour un agent vocal, privilégie GPT-4o-mini : il est rapide (latence faible), peu coûteux et suffisamment intelligent pour les conversations téléphoniques standard." },
        { title: "Connecter ElevenLabs pour la voix", description: "Dans Vapi, va dans Voice Settings et sélectionne ElevenLabs comme provider. Colle ta clé API ElevenLabs. Choisis une voix dans la bibliothèque — pour un contexte professionnel français, teste les voix 'Antoine' ou 'Charlotte'." },
        { title: "Configurer un numéro de téléphone", description: "Vapi fournit des numéros via Twilio. Dans Phone Numbers, ajoute un numéro français (+33). Associe-le à ton agent. Chaque appel entrant sur ce numéro déclenchera ton agent vocal." },
        { title: "Tester l'agent", description: "Utilise le bouton 'Test Call' dans le dashboard ou appelle directement le numéro. Vérifie la compréhension, la pertinence des réponses et la qualité de la voix. Ajuste le System Prompt selon les résultats." },
      ]},
      { id: "1-7", type: "callout", variant: "warning", html: "<strong>Attention à la latence :</strong> Un agent vocal doit répondre en moins de 1,5 seconde. Si la latence est trop élevée, l'utilisateur raccroche. Teste toujours en conditions réelles (appel téléphonique, pas juste le simulateur web)." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "ElevenLabs : choisir et personnaliser la voix" },
      { id: "1-10", type: "text", html: "<p>ElevenLabs propose deux approches : utiliser une <strong>voix de la bibliothèque</strong> (des dizaines de voix prêtes à l'emploi) ou <strong>cloner une voix</strong> à partir d'un échantillon audio. Pour un usage commercial, les voix de bibliothèque sont recommandées car elles sont libres de droits.</p><p>Les paramètres clés à ajuster sont la <strong>stabilité</strong> (une valeur haute donne une voix monotone mais cohérente, une valeur basse donne plus d'expressivité mais parfois des artefacts) et la <strong>similarité</strong> (à quel point la voix reste fidèle au modèle original). Pour un agent professionnel, mets la stabilité entre 0.5 et 0.7 et la similarité à 0.75.</p>" },
      { id: "1-11", type: "comparison", headers: ["Paramètre", "Valeur basse", "Valeur haute", "Recommandé agent pro"], rows: [
        { cells: ["Stabilité", "Voix très expressive, variations imprévisibles", "Voix monotone, très prévisible", "0.5 – 0.7"] },
        { cells: ["Similarité", "Voix différente du modèle, créative", "Fidèle au modèle original", "0.75"] },
        { cells: ["Style", "Neutre, informatif", "Dramatique, émotionnel", "0.3 – 0.4"] },
      ]},

      { id: "1-12", type: "separator", style: "dots" },
      { id: "1-13", type: "heading", level: 2, text: "Connecter ton agent à des outils externes" },
      { id: "1-14", type: "text", html: "<p>Un agent vocal puissant ne se contente pas de parler : il <strong>agit</strong>. Vapi permet de connecter des fonctions (Functions) que l'agent peut appeler pendant la conversation. Par exemple : vérifier les disponibilités dans Google Calendar, créer un rendez-vous dans Cal.com, envoyer un SMS de confirmation via Twilio, ou ajouter un contact dans un CRM.</p><p>Ces fonctions sont définies comme des endpoints API (webhooks). Quand l'agent détecte que l'utilisateur veut prendre un RDV, il appelle ta fonction qui vérifie les créneaux disponibles et renvoie les options à l'agent, qui les propose vocalement au client.</p>" },

      { id: "1-15", type: "checklist", title: "Récapitulatif de la leçon", items: [
        { id: "c1", text: "Un agent vocal repose sur 3 briques : STT, LLM, TTS" },
        { id: "c2", text: "Vapi orchestre la logique, ElevenLabs fournit la voix" },
        { id: "c3", text: "Le System Prompt définit la personnalité et les instructions" },
        { id: "c4", text: "La latence doit rester sous 1,5 seconde" },
        { id: "c5", text: "Les Functions permettent de connecter calendrier, CRM, SMS" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ton premier agent vocal</h3><p>Crée un agent vocal de prise de rendez-vous pour un salon de coiffure fictif :</p><ol><li>Crée un compte Vapi (gratuit) et un compte ElevenLabs (gratuit)</li><li>Rédige un System Prompt pour 'Le Salon de Marie' — l'agent doit pouvoir donner les horaires (lundi-samedi 9h-18h), les services (coupe, couleur, brushing) et proposer de prendre un RDV</li><li>Choisis une voix féminine naturelle sur ElevenLabs</li><li>Teste ton agent avec 3 scénarios : demande d'horaires, prise de RDV, question hors sujet</li><li>Note les problèmes rencontrés et ajuste le prompt</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelles sont les trois briques techniques d'un agent vocal IA ?", options: JSON.stringify(["HTML, CSS, JavaScript", "Speech-to-Text, LLM, Text-to-Speech", "Base de données, API, Frontend", "Twilio, Stripe, Zapier"]), correctAnswer: "Speech-to-Text, LLM, Text-to-Speech", explanation: "Un agent vocal repose sur la reconnaissance vocale (STT) pour comprendre, un modèle de langage (LLM) pour raisonner, et la synthèse vocale (TTS) pour parler." },
      { type: "true_false", question: "ElevenLabs est utilisé pour la reconnaissance vocale (Speech-to-Text).", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "ElevenLabs est spécialisé dans la synthèse vocale (Text-to-Speech), pas la reconnaissance vocale. Il transforme du texte en parole naturelle." },
      { type: "mcq", question: "Quelle est la latence maximale acceptable pour un agent vocal ?", options: JSON.stringify(["5 secondes", "3 secondes", "1,5 seconde", "10 secondes"]), correctAnswer: "1,5 seconde", explanation: "Au-delà de 1,5 seconde de latence, la conversation devient inconfortable et l'utilisateur a tendance à raccrocher. La réactivité est cruciale pour un agent vocal." },
      { type: "mcq", question: "Quel modèle LLM est recommandé pour un agent vocal standard ?", options: JSON.stringify(["GPT-4 (version complète)", "GPT-4o-mini", "DALL-E 3", "Stable Diffusion"]), correctAnswer: "GPT-4o-mini", explanation: "GPT-4o-mini offre le meilleur compromis vitesse/coût/intelligence pour les conversations téléphoniques. Il est rapide (faible latence) et peu coûteux." },
      { type: "true_false", question: "Un agent vocal Vapi peut appeler des APIs externes pendant une conversation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vapi supporte les Functions qui permettent d'appeler des endpoints API pendant la conversation — pour vérifier un calendrier, créer un RDV, envoyer un SMS, etc." },
      { type: "mcq", question: "Quelle valeur de stabilité est recommandée pour un agent vocal professionnel sur ElevenLabs ?", options: JSON.stringify(["0.1 – 0.2", "0.5 – 0.7", "0.9 – 1.0", "0.0"]), correctAnswer: "0.5 – 0.7", explanation: "Une stabilité entre 0.5 et 0.7 offre un bon équilibre entre expressivité naturelle et cohérence. Trop bas, la voix devient imprévisible. Trop haut, elle est monotone." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 9,
    title: "Les use cases : prise de RDV, qualification, SAV, relance",
    slug: "v2-use-cases-rdv-qualification-sav-relance",
    duration: "25 min",
    description: "Découvre les 4 grands cas d'usage des agents vocaux IA : prise de rendez-vous, qualification de leads, service après-vente et relance automatisée. Pour chaque use case, le prompt, le flow et les connexions nécessaires.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Use case 1 : Prise de rendez-vous automatisée" },
      { id: "2-2", type: "text", html: "<p>C'est le cas d'usage le plus demandé. Le client appelle, l'agent vérifie les disponibilités dans le calendrier, propose des créneaux, confirme le rendez-vous et envoie un SMS de confirmation. Aucune intervention humaine nécessaire.</p><p>Le flow type est le suivant : accueil personnalisé → identification du besoin → vérification des créneaux via API → proposition de 2-3 options → confirmation → envoi SMS/email. L'agent doit aussi gérer les cas limites : annulation, report, créneau complet, demande hors périmètre.</p>" },
      { id: "2-3", type: "steps", steps: [
        { title: "Prompt d'accueil", description: "L'agent se présente : 'Bonjour, vous êtes bien chez [Nom]. Je suis l'assistant de prise de rendez-vous. Comment puis-je vous aider ?' Le ton doit être chaleureux mais professionnel." },
        { title: "Identification du besoin", description: "L'agent pose des questions pour comprendre le type de RDV souhaité : consultation, suivi, urgence. Il qualifie la demande avant de chercher un créneau." },
        { title: "Recherche de créneau", description: "L'agent appelle l'API du calendrier (Google Calendar, Cal.com, Calendly) pour récupérer les disponibilités. Il propose 2-3 options au client." },
        { title: "Confirmation et suivi", description: "Une fois le créneau choisi, l'agent confirme oralement, crée l'événement dans le calendrier et déclenche l'envoi d'un SMS de confirmation via Twilio ou Make." },
      ]},
      { id: "2-4", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Ajoute toujours une question de fin : 'Y a-t-il autre chose que je puisse faire pour vous ?' Cela montre du professionnalisme et peut révéler des besoins supplémentaires." },
      { id: "2-5", type: "separator", style: "dots" },

      { id: "2-6", type: "heading", level: 2, text: "Use case 2 : Qualification de leads" },
      { id: "2-7", type: "text", html: "<p>Un agent de qualification appelle ou reçoit des prospects et leur pose des questions stratégiques pour évaluer leur potentiel. Budget, timeline, besoin spécifique, pouvoir de décision — chaque réponse alimente un <strong>score de qualification</strong> qui détermine si le lead mérite un appel commercial humain.</p><p>Ce use case est particulièrement rentable pour les agences immobilières, les courtiers, les cabinets de conseil et les entreprises B2B. Au lieu de faire perdre du temps à un commercial sur des leads froids, l'agent filtre et ne transmet que les leads chauds.</p>" },
      { id: "2-8", type: "comparison", headers: ["Critère de qualification", "Question de l'agent", "Score"], rows: [
        { cells: ["Budget", "'Avez-vous déjà défini un budget pour ce projet ?'", "+20 si oui, +10 si en réflexion, 0 si non"] },
        { cells: ["Timeline", "'Quand souhaitez-vous démarrer ?'", "+20 si < 1 mois, +10 si < 3 mois, +5 si > 3 mois"] },
        { cells: ["Besoin identifié", "'Quel problème cherchez-vous à résoudre ?'", "+15 si besoin clair, +5 si vague"] },
        { cells: ["Décideur", "'Êtes-vous la personne qui prendra la décision ?'", "+15 si oui, +5 si non"] },
      ]},
      { id: "2-9", type: "separator", style: "line" },

      { id: "2-10", type: "heading", level: 2, text: "Use case 3 : Service après-vente (SAV)" },
      { id: "2-11", type: "text", html: "<p>L'agent SAV gère les demandes courantes : suivi de commande, politique de retour, problèmes techniques de niveau 1. Il consulte la base de données pour retrouver la commande du client, donne le statut, et ne transfère à un humain que pour les cas complexes.</p><p>Les entreprises e-commerce sont les premières intéressées. Un agent SAV vocal peut gérer 80% des appels entrants — les 20% restants sont transférés à un conseiller humain avec tout le contexte déjà collecté.</p>" },

      { id: "2-12", type: "separator", style: "dots" },
      { id: "2-13", type: "heading", level: 2, text: "Use case 4 : Relance automatisée" },
      { id: "2-14", type: "text", html: "<p>L'agent appelle proactivement des contacts pour des rappels : rendez-vous à confirmer, facture impayée, renouvellement de contrat, enquête de satisfaction. C'est un agent <strong>outbound</strong> — il initie l'appel au lieu de le recevoir.</p><p>Techniquement, Vapi permet de déclencher des appels sortants via API. Tu peux intégrer ça dans un workflow Make ou n]8n : quand un RDV est dans 24h, le workflow déclenche un appel de confirmation. Quand une facture est impayée depuis 7 jours, l'agent appelle poliment pour rappeler l'échéance.</p>" },
      { id: "2-15", type: "callout", variant: "warning", html: "<strong>Attention légale :</strong> Les appels sortants automatisés sont réglementés. En France, le démarchage téléphonique est encadré par Bloctel. Les appels de relance (confirmation RDV, rappel facturation) sont autorisés car il existe une relation commerciale préexistante. Vérifie toujours la conformité RGPD." },

      { id: "2-16", type: "checklist", title: "Les 4 use cases à retenir", items: [
        { id: "c1", text: "Prise de RDV : le plus demandé, connexion calendrier + SMS" },
        { id: "c2", text: "Qualification : scoring automatique des leads, transfert des leads chauds" },
        { id: "c3", text: "SAV : gestion des demandes courantes, transfert humain pour les cas complexes" },
        { id: "c4", text: "Relance : appels sortants pour confirmations, impayés, satisfaction" },
      ]},
    ]),
    exercise: "<h3>Exercice : Rédige les prompts pour 2 use cases</h3><p>Choisis 2 use cases parmi les 4 présentés et rédige pour chacun :</p><ol><li>Le <strong>System Prompt</strong> complet de l'agent (personnalité, rôle, instructions, limites)</li><li>Le <strong>flow conversationnel</strong> sous forme d'arbre de décision (si le client dit X → l'agent fait Y)</li><li>La liste des <strong>fonctions/API</strong> que l'agent devra appeler (calendrier, CRM, SMS...)</li><li>Les <strong>cas limites</strong> à gérer (client énervé, demande hors périmètre, problème technique)</li></ol><p>Bonus : teste un de tes prompts dans Vapi et mesure la qualité des réponses.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le use case d'agent vocal le plus demandé par les entreprises ?", options: JSON.stringify(["Traduction en temps réel", "Prise de rendez-vous automatisée", "Génération de musique", "Rédaction d'emails"]), correctAnswer: "Prise de rendez-vous automatisée", explanation: "La prise de RDV automatisée est le cas d'usage numéro 1. Cabinets médicaux, salons de coiffure, garages : des milliers d'entreprises perdent du temps à gérer les RDV par téléphone." },
      { type: "true_false", question: "Un agent de qualification de leads attribue un score basé sur les réponses du prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'agent pose des questions stratégiques (budget, timeline, décideur) et attribue un score. Seuls les leads ayant un score suffisant sont transférés à un commercial humain." },
      { type: "mcq", question: "Quel pourcentage des appels SAV un agent vocal peut-il typiquement gérer seul ?", options: JSON.stringify(["20%", "50%", "80%", "100%"]), correctAnswer: "80%", explanation: "Un agent SAV bien configuré gère environ 80% des demandes courantes (suivi de commande, retours, questions fréquentes). Les 20% restants sont transférés à un humain." },
      { type: "true_false", question: "Les appels sortants automatisés sont totalement interdits en France.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le démarchage est encadré par Bloctel, mais les appels de relance (confirmation RDV, rappel facturation) sont autorisés quand il existe une relation commerciale préexistante. Il faut respecter le RGPD." },
      { type: "mcq", question: "Qu'est-ce qu'un agent outbound ?", options: JSON.stringify(["Un agent qui reçoit des appels entrants", "Un agent qui initie des appels sortants", "Un agent qui envoie des emails", "Un agent qui modère un chat"]), correctAnswer: "Un agent qui initie des appels sortants", explanation: "Un agent outbound initie les appels (relance, confirmation, enquête) contrairement à un agent inbound qui reçoit les appels des clients." },
      { type: "mcq", question: "Quel outil permet de déclencher un appel sortant Vapi dans un workflow automatisé ?", options: JSON.stringify(["Photoshop", "Make ou n8n", "Google Docs", "Canva"]), correctAnswer: "Make ou n8n", explanation: "Make et n8n sont des outils d'automatisation qui peuvent déclencher un appel Vapi via API quand un événement se produit (RDV dans 24h, facture impayée, etc.)." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 9,
    title: "Projet : agent téléphonique pour un cabinet médical",
    slug: "v2-projet-agent-telephonique-cabinet-medical",
    duration: "40 min",
    description: "Projet complet : construis un agent vocal pour un cabinet médical qui gère la prise de RDV, répond aux questions fréquentes et envoie des confirmations SMS. De la configuration au test final.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Briefing du projet" },
      { id: "3-2", type: "text", html: "<p>Tu travailles pour le <strong>Cabinet du Dr. Dupont</strong>, un médecin généraliste qui reçoit environ 60 appels par jour. Sa secrétaire est débordée et il perd des patients qui n'arrivent pas à joindre le cabinet. Il te demande de créer un agent vocal qui :</p><ul><li>Accueille les patients de manière chaleureuse et professionnelle</li><li>Répond aux questions fréquentes (horaires, adresse, documents à apporter)</li><li>Prend les rendez-vous en vérifiant les disponibilités</li><li>Envoie un SMS de confirmation au patient</li><li>Transfère à la secrétaire pour les urgences ou demandes complexes</li></ul>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Ce projet simule un cas réel.</strong> Les cabinets médicaux sont l'un des marchés les plus porteurs pour les agents vocaux. Un agent comme celui-ci se facture entre 2 500€ et 4 000€ en setup, plus 300€/mois de maintenance." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Rédiger le System Prompt" },
      { id: "3-6", type: "text", html: "<p>Le System Prompt est le document le plus important. Il doit couvrir : l'identité de l'agent, le ton à adopter, les informations du cabinet, les actions autorisées, les limites et les cas de transfert vers un humain.</p><p>Voici la structure recommandée pour un prompt médical :</p>" },
      { id: "3-7", type: "steps", steps: [
        { title: "Section Identité", description: "Tu es l'assistant téléphonique du Cabinet du Dr. Dupont. Tu t'appelles 'l'assistant du cabinet'. Tu es professionnel, rassurant et empathique. Tu ne donnes JAMAIS de conseil médical." },
        { title: "Section Informations", description: "Horaires : lundi-vendredi 8h30-12h30 et 14h-18h30, samedi 9h-12h. Adresse : 15 rue de la Paix, 75001 Paris. Documents à apporter : carte vitale, mutuelle, ordonnances en cours." },
        { title: "Section Actions", description: "Tu peux : prendre un RDV, annuler un RDV existant, donner les horaires et l'adresse, expliquer les documents nécessaires. Tu ne peux PAS : donner des conseils médicaux, prescrire, modifier un traitement." },
        { title: "Section Transfert", description: "Transfère vers la secrétaire si : urgence médicale mentionnée, demande de résultats d'analyses, réclamation, tout sujet que tu ne peux pas gérer. Dis : 'Je vais vous passer [la secrétaire/le cabinet] qui pourra mieux vous aider.'" },
      ]},
      { id: "3-8", type: "callout", variant: "warning", html: "<strong>Règle critique :</strong> Un agent vocal médical ne doit JAMAIS donner de conseil médical. Ajoute cette instruction explicitement dans le prompt et teste avec des questions pièges ('J'ai mal à la tête, que dois-je prendre ?'). L'agent doit systématiquement rediriger vers une consultation." },
      { id: "3-9", type: "separator", style: "line" },

      { id: "3-10", type: "heading", level: 2, text: "Étape 2 : Configurer les fonctions" },
      { id: "3-11", type: "text", html: "<p>L'agent doit interagir avec deux systèmes externes : le <strong>calendrier</strong> pour les disponibilités et <strong>Twilio</strong> pour les SMS. Dans Vapi, on configure ces interactions via des Functions.</p><p>Chaque Function a un nom, une description (que le LLM utilise pour décider quand l'appeler) et des paramètres. Par exemple, la fonction <code>check_availability</code> prend une date en paramètre et retourne les créneaux disponibles. La fonction <code>book_appointment</code> prend un créneau, le nom du patient et son numéro de téléphone.</p>" },
      { id: "3-12", type: "comparison", headers: ["Fonction", "Déclencheur", "Paramètres", "Retour"], rows: [
        { cells: ["check_availability", "Patient demande un RDV", "date (string)", "Liste de créneaux disponibles"] },
        { cells: ["book_appointment", "Patient choisit un créneau", "date, heure, nom, téléphone", "Confirmation + envoi SMS"] },
        { cells: ["cancel_appointment", "Patient veut annuler", "nom, date du RDV", "Confirmation d'annulation"] },
        { cells: ["transfer_to_human", "Urgence ou hors périmètre", "raison du transfert", "Transfert d'appel"] },
      ]},

      { id: "3-13", type: "separator", style: "dots" },
      { id: "3-14", type: "heading", level: 2, text: "Étape 3 : Tester et itérer" },
      { id: "3-15", type: "text", html: "<p>Le test est la phase la plus importante. Prépare une batterie de scénarios :</p><ul><li><strong>Scénario nominal :</strong> prise de RDV simple, tout se passe bien</li><li><strong>Créneau indisponible :</strong> le patient veut un créneau pris, l'agent doit proposer des alternatives</li><li><strong>Question médicale :</strong> l'agent doit refuser poliment et proposer une consultation</li><li><strong>Client agressif :</strong> l'agent reste calme et propose de transférer</li><li><strong>Hors périmètre :</strong> demande non liée au cabinet (ex: 'Quel temps fait-il ?')</li></ul><p>Pour chaque scénario, note ce qui fonctionne et ce qui ne fonctionne pas. Ajuste le System Prompt en conséquence. Itère jusqu'à obtenir un taux de réussite de 90%+ sur tes scénarios de test.</p>" },

      { id: "3-16", type: "checklist", title: "Checklist du projet terminé", items: [
        { id: "c1", text: "System Prompt rédigé avec identité, informations, actions et limites" },
        { id: "c2", text: "Voix ElevenLabs choisie et configurée (ton professionnel)" },
        { id: "c3", text: "Functions configurées : check_availability, book_appointment, cancel, transfer" },
        { id: "c4", text: "Numéro de téléphone connecté" },
        { id: "c5", text: "5 scénarios de test passés avec succès" },
        { id: "c6", text: "L'agent refuse de donner des conseils médicaux" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis l'agent complet</h3><p>Réalise le projet de A à Z :</p><ol><li>Crée l'agent sur Vapi avec le System Prompt complet du Dr. Dupont</li><li>Configure une voix professionnelle via ElevenLabs</li><li>Définis au minimum 3 Functions (même si elles pointent vers des endpoints fictifs)</li><li>Teste les 5 scénarios décrits dans la leçon et note les résultats</li><li>Itère sur le prompt jusqu'à obtenir des réponses satisfaisantes sur chaque scénario</li></ol><p><strong>Livrable :</strong> Un document récapitulatif avec ton System Prompt final, les résultats de chaque test (capture ou transcription) et les ajustements que tu as faits.</p>",
    quiz: [
      { type: "mcq", question: "Combien d'appels par jour reçoit typiquement un cabinet médical ?", options: JSON.stringify(["5-10 appels", "20-30 appels", "50-70 appels", "200+ appels"]), correctAnswer: "50-70 appels", explanation: "Un cabinet médical actif reçoit entre 50 et 70 appels par jour en moyenne, ce qui surcharge la secrétaire et cause des temps d'attente importants pour les patients." },
      { type: "true_false", question: "Un agent vocal médical peut donner des conseils médicaux si le patient insiste.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Un agent vocal ne doit JAMAIS donner de conseil médical, même si le patient insiste. Il doit toujours rediriger vers une consultation avec le médecin." },
      { type: "mcq", question: "Quelle fonction l'agent appelle quand un patient veut prendre un rendez-vous ?", options: JSON.stringify(["transfer_to_human", "send_email", "check_availability puis book_appointment", "cancel_appointment"]), correctAnswer: "check_availability puis book_appointment", explanation: "L'agent vérifie d'abord les disponibilités avec check_availability, propose les créneaux au patient, puis confirme avec book_appointment une fois le choix fait." },
      { type: "mcq", question: "Quand l'agent doit-il transférer l'appel à un humain ?", options: JSON.stringify(["À chaque appel", "Uniquement pour les urgences, résultats d'analyses ou réclamations", "Jamais, l'agent gère tout", "Quand le patient le demande 3 fois"]), correctAnswer: "Uniquement pour les urgences, résultats d'analyses ou réclamations", explanation: "L'agent transfère quand la situation dépasse son périmètre : urgence médicale, demande de résultats, réclamation ou sujet qu'il ne peut pas gérer." },
      { type: "true_false", question: "Il est recommandé de tester l'agent avec au moins 5 scénarios différents.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tester avec des scénarios variés (nominal, créneau indisponible, question médicale, client agressif, hors périmètre) permet de couvrir les cas les plus fréquents et d'affiner le prompt." },
      { type: "mcq", question: "Combien peut-on facturer un agent vocal pour un cabinet médical ?", options: JSON.stringify(["100€ – 200€", "500€ – 800€", "2 500€ – 4 000€ en setup + 300€/mois", "50 000€+"]), correctAnswer: "2 500€ – 4 000€ en setup + 300€/mois", explanation: "Un agent vocal complet pour un cabinet médical (prise de RDV, FAQ, SMS) se facture entre 2 500€ et 4 000€ en setup, plus environ 300€/mois pour la maintenance et l'hébergement." },
    ],
  },
];
