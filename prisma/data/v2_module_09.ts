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
    title: "Créer un agent vocal avec ElevenLabs Conversational AI",
    slug: "v2-creer-agent-vocal-elevenlabs",
    duration: "30 min",
    description: "Apprends à créer ton premier agent vocal IA de A à Z avec ElevenLabs Conversational AI : voix naturelle, logique conversationnelle et intégrations, le tout sur une seule plateforme.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Qu'est-ce qu'un agent vocal IA ?" },
      { id: "1-2", type: "text", html: "<p>Un agent vocal IA est un programme capable de <strong>recevoir et passer des appels téléphoniques</strong> de manière autonome. Contrairement à un simple serveur vocal interactif (SVI) qui propose des menus figés, un agent vocal IA comprend le langage naturel, répond de façon contextuelle et peut exécuter des actions comme réserver un créneau ou transférer un appel.</p><p>La stack technique repose sur trois briques : la <strong>reconnaissance vocale</strong> (Speech-to-Text) qui transforme la parole en texte, le <strong>modèle de langage</strong> (LLM) qui génère la réponse, et la <strong>synthèse vocale</strong> (Text-to-Speech) qui transforme le texte en parole naturelle. ElevenLabs Conversational AI orchestre ces trois briques et fournit des voix ultra-réalistes, le tout sur une seule plateforme.</p>" },

      { id: "1-20", type: "heading", level: 3, text: "Pourquoi les agents vocaux explosent en 2025-2026" },
      { id: "1-21", type: "text", html: "<p>Le marché des agents vocaux IA connaît une croissance exponentielle. En 2024, on estimait le marché mondial à environ 4 milliards de dollars. En 2026, les projections dépassent les 10 milliards. Pourquoi ? Parce que les voix synthétiques sont devenues <strong>indiscernables des voix humaines</strong> et que la latence est tombée sous la barre critique de 1 seconde.</p><p>Pour toi, en tant que freelance ou agence IA, c'est une opportunité en or. Les cabinets médicaux, restaurants, garages, salons de coiffure et PME en tout genre cherchent des solutions pour gérer leurs appels. La plupart n'ont aucune idée que la technologie existe déjà. Tu arrives avec un produit fonctionnel et tu résous un vrai problème de business.</p>" },
      { id: "1-22", type: "callout", variant: "info", html: "<strong>Chiffre clé :</strong> 62% des appels entrants dans les PME restent sans réponse aux heures de pointe. Chaque appel manqué est un client potentiel perdu. Un agent vocal élimine ce problème à 100%." },

      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Pourquoi ElevenLabs Conversational AI ?</strong> ElevenLabs combine les voix synthétiques les plus naturelles du marché avec une plateforme complète de création d'agents vocaux — logique conversationnelle, intégrations et téléphonie, le tout sans coder. C'est la solution tout-en-un idéale pour un agent vocal professionnel." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Configurer ElevenLabs : ton premier agent en 20 minutes" },
      { id: "1-6", type: "steps", steps: [
        { title: "Créer un compte ElevenLabs", description: "Rends-toi sur elevenlabs.io et crée un compte. Le plan gratuit permet de tester les agents conversationnels. Accède à la section 'Conversational AI' depuis le dashboard." },
        { title: "Définir le System Prompt", description: "Le System Prompt est le cerveau de ton agent. Il définit sa personnalité, son rôle et ses instructions. Exemple : 'Tu es l'assistant téléphonique du cabinet dentaire Martin. Tu es poli, concis et professionnel. Tu prends les rendez-vous et tu réponds aux questions sur les horaires.'" },
        { title: "Choisir le modèle LLM", description: "ElevenLabs Conversational AI supporte GPT-4o, Claude et d'autres modèles. Pour un agent vocal, privilégie GPT-4o-mini : il est rapide (latence faible), peu coûteux et suffisamment intelligent pour les conversations téléphoniques standard." },
        { title: "Choisir la voix", description: "Dans les paramètres de ton agent, choisis une voix dans la bibliothèque ElevenLabs. Pour un contexte professionnel français, teste les voix 'Antoine' ou 'Charlotte'. Tu peux aussi ajuster les paramètres de stabilité et de similarité directement." },
        { title: "Configurer un numéro de téléphone", description: "ElevenLabs permet de connecter un numéro de téléphone via Twilio ou d'autres providers SIP. Dans les paramètres de téléphonie, ajoute un numéro français (+33). Associe-le à ton agent. Chaque appel entrant sur ce numéro déclenchera ton agent vocal." },
        { title: "Tester l'agent", description: "Utilise le widget de test intégré dans le dashboard ou appelle directement le numéro. Vérifie la compréhension, la pertinence des réponses et la qualité de la voix. Ajuste le System Prompt selon les résultats." },
      ]},

      { id: "1-23", type: "heading", level: 3, text: "Rédiger un System Prompt efficace pour un agent vocal" },
      { id: "1-24", type: "text", html: "<p>Le System Prompt d'un agent vocal est <strong>très différent</strong> d'un prompt pour un chatbot texte. Pourquoi ? Parce qu'à l'oral, les gens ne parlent pas comme ils écrivent. Ils hésitent, coupent leurs phrases, changent de sujet en cours de route. Ton prompt doit anticiper tout ça.</p><p>Voici les sections indispensables d'un bon System Prompt vocal :</p><ul><li><strong>Identité :</strong> Qui est l'agent ? Quel ton adopter ? Vouvoiement ou tutoiement ?</li><li><strong>Rôle :</strong> Que peut faire l'agent ? Quelles actions est-il autorisé à effectuer ?</li><li><strong>Informations de référence :</strong> Horaires, adresse, services, tarifs — tout ce dont l'agent a besoin</li><li><strong>Limites :</strong> Ce que l'agent ne doit JAMAIS faire (donner des conseils médicaux, promettre des prix, etc.)</li><li><strong>Gestion des cas limites :</strong> Que faire si le client est agressif, hors sujet, ou si l'agent ne comprend pas ?</li></ul>" },
      { id: "1-25", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Ajoute une instruction explicite dans ton prompt : 'Si tu ne comprends pas la demande du client, demande-lui de reformuler au lieu d'inventer une réponse.' Cela évite 80% des erreurs embarrassantes." },

      { id: "1-7", type: "callout", variant: "warning", html: "<strong>Attention à la latence :</strong> Un agent vocal doit répondre en moins de 1,5 seconde. Si la latence est trop élevée, l'utilisateur raccroche. Teste toujours en conditions réelles (appel téléphonique, pas juste le simulateur web)." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "ElevenLabs : choisir et personnaliser la voix" },
      { id: "1-10", type: "text", html: "<p>ElevenLabs propose deux approches : utiliser une <strong>voix de la bibliothèque</strong> (des dizaines de voix prêtes à l'emploi) ou <strong>cloner une voix</strong> à partir d'un échantillon audio. Pour un usage commercial, les voix de bibliothèque sont recommandées car elles sont libres de droits.</p><p>Les paramètres clés à ajuster sont la <strong>stabilité</strong> (une valeur haute donne une voix monotone mais cohérente, une valeur basse donne plus d'expressivité mais parfois des artefacts) et la <strong>similarité</strong> (à quel point la voix reste fidèle au modèle original). Pour un agent professionnel, mets la stabilité entre 0.5 et 0.7 et la similarité à 0.75.</p>" },
      { id: "1-11", type: "comparison", headers: ["Paramètre", "Valeur basse", "Valeur haute", "Recommandé agent pro"], rows: [
        { cells: ["Stabilité", "Voix très expressive, variations imprévisibles", "Voix monotone, très prévisible", "0.5 – 0.7"] },
        { cells: ["Similarité", "Voix différente du modèle, créative", "Fidèle au modèle original", "0.75"] },
        { cells: ["Style", "Neutre, informatif", "Dramatique, émotionnel", "0.3 – 0.4"] },
      ]},

      { id: "1-26", type: "heading", level: 3, text: "Erreurs fréquentes dans le choix de la voix" },
      { id: "1-27", type: "text", html: "<p>Beaucoup de débutants choisissent la voix la plus impressionnante dans le playground, sans penser au contexte d'utilisation. Voici les erreurs classiques :</p><ul><li><strong>Voix trop énergique</strong> pour un cabinet médical — le patient veut être rassuré, pas motivé comme dans une salle de sport</li><li><strong>Voix masculine pour un spa féminin</strong> (ou inversement) — la cohérence avec la marque compte énormément</li><li><strong>Voix anglophone avec accent</strong> pour un public français — même si elle est belle, un léger accent étranger crée de la distance</li><li><strong>Stabilité trop basse</strong> — la voix varie trop entre les phrases, ce qui donne un effet artificiel au téléphone</li></ul><p>La règle d'or : teste toujours la voix en conditions réelles, au téléphone, pas juste dans le navigateur. La qualité audio compressée du réseau téléphonique change la donne.</p>" },

      { id: "1-12", type: "separator", style: "dots" },
      { id: "1-13", type: "heading", level: 2, text: "Connecter ton agent à des outils externes" },
      { id: "1-14", type: "text", html: "<p>Un agent vocal puissant ne se contente pas de parler : il <strong>agit</strong>. ElevenLabs Conversational AI permet de connecter des outils (tools) que l'agent peut appeler pendant la conversation. Par exemple : vérifier les disponibilités dans Google Calendar, créer un rendez-vous dans Cal.com, envoyer un SMS de confirmation via Twilio, ou ajouter un contact dans un CRM.</p><p>Ces outils sont définis comme des endpoints API (webhooks). Quand l'agent détecte que l'utilisateur veut prendre un RDV, il appelle ton outil qui vérifie les créneaux disponibles et renvoie les options à l'agent, qui les propose vocalement au client.</p>" },

      { id: "1-28", type: "heading", level: 3, text: "Architecture type d'un agent vocal connecté" },
      { id: "1-29", type: "text", html: "<p>Voici comment les différentes briques s'assemblent dans un cas réel :</p><ol><li><strong>L'appel arrive</strong> sur le numéro Twilio connecté à ton agent ElevenLabs</li><li><strong>ElevenLabs transcrit</strong> la parole du client en texte (STT)</li><li><strong>Le LLM analyse</strong> le texte et décide quoi faire : répondre directement ou appeler un outil</li><li><strong>Si un outil est appelé</strong> (ex: vérifier le calendrier), ElevenLabs envoie une requête HTTP à ton API Route Next.js</li><li><strong>Ton API Route</strong> interroge Google Calendar, retourne les créneaux disponibles à ElevenLabs</li><li><strong>Le LLM formule</strong> la réponse vocale avec les créneaux et ElevenLabs la prononce (TTS)</li><li><strong>Le client choisit</strong> un créneau, le LLM appelle le tool de booking, et un SMS de confirmation est envoyé</li></ol><p>Tout ça se passe en 1 à 2 secondes. Le client n'a aucune idée qu'il parle à une IA.</p>" },

      { id: "1-30", type: "separator", style: "dots" },
      { id: "1-31", type: "heading", level: 3, text: "Combien ça coûte de faire tourner un agent vocal ?" },
      { id: "1-32", type: "comparison", headers: ["Composant", "Coût estimé", "Fournisseur", "Notes"], rows: [
        { cells: ["Numéro de téléphone", "~2€/mois", "Twilio", "Numéro français +33"] },
        { cells: ["Minutes de conversation", "0,05€ – 0,15€/min", "Twilio + ElevenLabs", "Dépend du volume d'appels"] },
        { cells: ["LLM (GPT-4o-mini)", "~0,001€ par échange", "OpenAI via ElevenLabs", "Très peu coûteux par appel"] },
        { cells: ["API Calendar/SMS", "~0,01€ par action", "Google + Twilio", "SMS sortants à 0,07€/SMS"] },
        { cells: ["Total pour 500 appels/mois", "50€ – 100€/mois", "Tous combinés", "Tu factures 300€+/mois au client"] },
      ]},
      { id: "1-33", type: "callout", variant: "tip", html: "<strong>La marge est énorme :</strong> Un agent vocal te coûte 50-100€/mois à faire tourner et tu le factures 300-500€/mois au client. C'est un revenu récurrent avec une marge de 70-80%. Multiplie par 10 clients et tu as un vrai business." },

      { id: "1-15", type: "checklist", title: "Récapitulatif de la leçon", items: [
        { id: "c1", text: "Un agent vocal repose sur 3 briques : STT, LLM, TTS" },
        { id: "c2", text: "ElevenLabs Conversational AI orchestre la logique et fournit la voix" },
        { id: "c3", text: "Le System Prompt définit la personnalité et les instructions" },
        { id: "c4", text: "La latence doit rester sous 1,5 seconde" },
        { id: "c5", text: "Les tools permettent de connecter calendrier, CRM, SMS" },
        { id: "c6", text: "Un agent vocal coûte 50-100€/mois et se facture 300-500€/mois" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ton premier agent vocal</h3><p>Crée un agent vocal de prise de rendez-vous pour un salon de coiffure fictif :</p><ol><li>Crée un compte ElevenLabs (gratuit) et accède à Conversational AI</li><li>Rédige un System Prompt pour 'Le Salon de Marie' — l'agent doit pouvoir donner les horaires (lundi-samedi 9h-18h), les services (coupe, couleur, brushing) et proposer de prendre un RDV</li><li>Choisis une voix féminine naturelle dans la bibliothèque ElevenLabs</li><li>Teste ton agent avec 3 scénarios : demande d'horaires, prise de RDV, question hors sujet</li><li>Note les problèmes rencontrés et ajuste le prompt</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelles sont les trois briques techniques d'un agent vocal IA ?", options: JSON.stringify(["HTML, CSS, JavaScript", "Speech-to-Text, LLM, Text-to-Speech", "Base de données, API, Frontend", "Twilio, Stripe, Webhook"]), correctAnswer: "Speech-to-Text, LLM, Text-to-Speech", explanation: "Un agent vocal repose sur la reconnaissance vocale (STT) pour comprendre, un modèle de langage (LLM) pour raisonner, et la synthèse vocale (TTS) pour parler." },
      { type: "true_false", question: "ElevenLabs est utilisé pour la reconnaissance vocale (Speech-to-Text).", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "ElevenLabs est spécialisé dans la synthèse vocale (Text-to-Speech), pas la reconnaissance vocale. Il transforme du texte en parole naturelle." },
      { type: "mcq", question: "Quelle est la latence maximale acceptable pour un agent vocal ?", options: JSON.stringify(["5 secondes", "3 secondes", "1,5 seconde", "10 secondes"]), correctAnswer: "1,5 seconde", explanation: "Au-delà de 1,5 seconde de latence, la conversation devient inconfortable et l'utilisateur a tendance à raccrocher. La réactivité est cruciale pour un agent vocal." },
      { type: "mcq", question: "Quel modèle LLM est recommandé pour un agent vocal standard ?", options: JSON.stringify(["GPT-4 (version complète)", "GPT-4o-mini", "DALL-E 3", "Stable Diffusion"]), correctAnswer: "GPT-4o-mini", explanation: "GPT-4o-mini offre le meilleur compromis vitesse/coût/intelligence pour les conversations téléphoniques. Il est rapide (faible latence) et peu coûteux." },
      { type: "true_false", question: "Un agent vocal ElevenLabs peut appeler des APIs externes pendant une conversation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "ElevenLabs Conversational AI supporte les tools qui permettent d'appeler des endpoints API pendant la conversation — pour vérifier un calendrier, créer un RDV, envoyer un SMS, etc." },
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

      { id: "2-20", type: "heading", level: 3, text: "Exemple concret : un salon de coiffure" },
      { id: "2-21", type: "text", html: "<p>Prenons l'exemple de 'Chez Julie', un salon de coiffure qui reçoit 40 appels par jour. Avant l'agent vocal, Julie passait 1h30 par jour au téléphone au lieu de coiffer. Avec un agent vocal, voici ce qui se passe :</p><p>Le client appelle : <em>'Bonjour, je voudrais un rendez-vous pour une coupe femme samedi.'</em> L'agent répond : <em>'Bonjour ! Avec plaisir. Samedi, j'ai des disponibilités à 10h, 14h et 16h30. Quelle heure vous conviendrait ?'</em> Le client choisit, l'agent confirme, envoie un SMS et ajoute le RDV dans Google Calendar. Temps total : 45 secondes.</p><p>Résultat : Julie a récupéré 1h30 par jour de travail productif. Sur un mois, c'est l'équivalent de 3 jours de travail en plus. À 50€ la coupe, ça représente potentiellement <strong>2 400€ de CA supplémentaire par mois</strong>.</p>" },

      { id: "2-3", type: "steps", steps: [
        { title: "Prompt d'accueil", description: "L'agent se présente : 'Bonjour, vous êtes bien chez [Nom]. Je suis l'assistant de prise de rendez-vous. Comment puis-je vous aider ?' Le ton doit être chaleureux mais professionnel." },
        { title: "Identification du besoin", description: "L'agent pose des questions pour comprendre le type de RDV souhaité : consultation, suivi, urgence. Il qualifie la demande avant de chercher un créneau." },
        { title: "Recherche de créneau", description: "L'agent appelle l'API du calendrier (Google Calendar, Cal.com, Calendly) pour récupérer les disponibilités. Il propose 2-3 options au client." },
        { title: "Confirmation et suivi", description: "Une fois le créneau choisi, l'agent confirme oralement, crée l'événement dans le calendrier et déclenche l'envoi d'un SMS de confirmation via un webhook Twilio (API Route ou script serveur)." },
      ]},
      { id: "2-4", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Ajoute toujours une question de fin : 'Y a-t-il autre chose que je puisse faire pour vous ?' Cela montre du professionnalisme et peut révéler des besoins supplémentaires." },
      { id: "2-5", type: "separator", style: "dots" },

      { id: "2-6", type: "heading", level: 2, text: "Use case 2 : Qualification de leads" },
      { id: "2-7", type: "text", html: "<p>Un agent de qualification appelle ou reçoit des prospects et leur pose des questions stratégiques pour évaluer leur potentiel. Budget, timeline, besoin spécifique, pouvoir de décision — chaque réponse alimente un <strong>score de qualification</strong> qui détermine si le lead mérite un appel commercial humain.</p><p>Ce use case est particulièrement rentable pour les agences immobilières, les courtiers, les cabinets de conseil et les entreprises B2B. Au lieu de faire perdre du temps à un commercial sur des leads froids, l'agent filtre et ne transmet que les leads chauds.</p>" },

      { id: "2-22", type: "heading", level: 3, text: "Comment fonctionne le scoring en temps réel" },
      { id: "2-23", type: "text", html: "<p>L'agent vocal calcule un score en temps réel pendant la conversation. Chaque réponse du prospect ajoute ou retire des points. À la fin de l'appel, le score détermine l'action :</p><ul><li><strong>Score 70-100 (lead chaud) :</strong> Transfert immédiat au commercial ou booking automatique d'un RDV</li><li><strong>Score 40-69 (lead tiède) :</strong> Email de nurturing avec contenu de valeur, relance dans 1 semaine</li><li><strong>Score 0-39 (lead froid) :</strong> Ajout à la liste de newsletter, pas de relance active</li></ul><p>Ce système évite au commercial de perdre du temps avec des leads non qualifiés. Il ne prend que les appels des prospects à fort potentiel, ce qui booste son taux de conversion de 15% à 40% en moyenne.</p>" },

      { id: "2-8", type: "comparison", headers: ["Critère de qualification", "Question de l'agent", "Score"], rows: [
        { cells: ["Budget", "'Avez-vous déjà défini un budget pour ce projet ?'", "+20 si oui, +10 si en réflexion, 0 si non"] },
        { cells: ["Timeline", "'Quand souhaitez-vous démarrer ?'", "+20 si < 1 mois, +10 si < 3 mois, +5 si > 3 mois"] },
        { cells: ["Besoin identifié", "'Quel problème cherchez-vous à résoudre ?'", "+15 si besoin clair, +5 si vague"] },
        { cells: ["Décideur", "'Êtes-vous la personne qui prendra la décision ?'", "+15 si oui, +5 si non"] },
      ]},
      { id: "2-9", type: "separator", style: "line" },

      { id: "2-10", type: "heading", level: 2, text: "Use case 3 : Service après-vente (SAV)" },
      { id: "2-11", type: "text", html: "<p>L'agent SAV gère les demandes courantes : suivi de commande, politique de retour, problèmes techniques de niveau 1. Il consulte la base de données pour retrouver la commande du client, donne le statut, et ne transfère à un humain que pour les cas complexes.</p><p>Les entreprises e-commerce sont les premières intéressées. Un agent SAV vocal peut gérer 80% des appels entrants — les 20% restants sont transférés à un conseiller humain avec tout le contexte déjà collecté.</p>" },

      { id: "2-24", type: "heading", level: 3, text: "Les clés d'un agent SAV réussi" },
      { id: "2-25", type: "text", html: "<p>Un agent SAV a des contraintes spécifiques par rapport aux autres use cases. Voici les points critiques :</p><ul><li><strong>Identification du client :</strong> L'agent doit demander le numéro de commande ou le nom/email pour retrouver le dossier. Prévois plusieurs façons d'identifier le client (numéro, email, nom + date d'achat).</li><li><strong>Empathie :</strong> Un client qui appelle le SAV est souvent frustré. Ton prompt doit inclure des phrases d'empathie : 'Je comprends que c'est frustrant, je vais faire mon possible pour vous aider.'</li><li><strong>Escalade intelligente :</strong> L'agent doit savoir quand transférer à un humain sans faire tourner le client en rond. Après 2 tentatives de résolution sans succès, transfert automatique.</li></ul>" },
      { id: "2-26", type: "callout", variant: "warning", html: "<strong>Piège courant :</strong> Ne configure jamais un agent SAV sans accès à la base de données des commandes. Un agent qui répond 'je n'ai pas accès à cette information' à chaque question est pire qu'un répondeur. Il doit avoir accès aux statuts de commande via une API." },

      { id: "2-12", type: "separator", style: "dots" },
      { id: "2-13", type: "heading", level: 2, text: "Use case 4 : Relance automatisée" },
      { id: "2-14", type: "text", html: "<p>L'agent appelle proactivement des contacts pour des rappels : rendez-vous à confirmer, facture impayée, renouvellement de contrat, enquête de satisfaction. C'est un agent <strong>outbound</strong> — il initie l'appel au lieu de le recevoir.</p><p>Techniquement, ElevenLabs Conversational AI permet de déclencher des appels sortants via API. Tu peux intégrer ça via un script automatisé (cron job ou API Route) : quand un RDV est dans 24h, le script déclenche un appel de confirmation via l'API ElevenLabs. Quand une facture est impayée depuis 7 jours, le script déclenche un appel de relance.</p>" },

      { id: "2-27", type: "heading", level: 3, text: "Quel use case choisir pour commencer ?" },
      { id: "2-28", type: "comparison", headers: ["Use case", "Difficulté", "Tarif client", "Marché cible"], rows: [
        { cells: ["Prise de RDV", "Facile — 1 semaine de dev", "2 000€ – 4 000€ setup + 200€/mois", "Médical, coiffure, auto, bien-être"] },
        { cells: ["Qualification leads", "Moyen — 2 semaines de dev", "3 000€ – 5 000€ setup + 300€/mois", "Immobilier, courtage, B2B"] },
        { cells: ["SAV", "Avancé — 3 semaines de dev", "4 000€ – 8 000€ setup + 400€/mois", "E-commerce, SaaS, services"] },
        { cells: ["Relance outbound", "Moyen — 2 semaines de dev", "3 000€ – 5 000€ setup + 300€/mois", "Médical, assurance, B2B"] },
      ]},
      { id: "2-29", type: "callout", variant: "tip", html: "<strong>Notre conseil :</strong> Commence par la prise de RDV. C'est le use case le plus simple, le plus demandé et le plus facile à vendre. Une fois que tu maîtrises, tu montes en gamme vers la qualification et le SAV." },

      { id: "2-15", type: "callout", variant: "warning", html: "<strong>Attention légale :</strong> Les appels sortants automatisés sont réglementés. En France, le démarchage téléphonique est encadré par Bloctel. Les appels de relance (confirmation RDV, rappel facturation) sont autorisés car il existe une relation commerciale préexistante. Vérifie toujours la conformité RGPD." },

      { id: "2-16", type: "checklist", title: "Les 4 use cases à retenir", items: [
        { id: "c1", text: "Prise de RDV : le plus demandé, connexion calendrier + SMS" },
        { id: "c2", text: "Qualification : scoring automatique des leads, transfert des leads chauds" },
        { id: "c3", text: "SAV : gestion des demandes courantes, transfert humain pour les cas complexes" },
        { id: "c4", text: "Relance : appels sortants pour confirmations, impayés, satisfaction" },
        { id: "c5", text: "Commencer par la prise de RDV, puis monter en gamme" },
      ]},
    ]),
    exercise: "<h3>Exercice : Rédige les prompts pour 2 use cases</h3><p>Choisis 2 use cases parmi les 4 présentés et rédige pour chacun :</p><ol><li>Le <strong>System Prompt</strong> complet de l'agent (personnalité, rôle, instructions, limites)</li><li>Le <strong>flow conversationnel</strong> sous forme d'arbre de décision (si le client dit X → l'agent fait Y)</li><li>La liste des <strong>fonctions/API</strong> que l'agent devra appeler (calendrier, CRM, SMS...)</li><li>Les <strong>cas limites</strong> à gérer (client énervé, demande hors périmètre, problème technique)</li></ol><p>Bonus : teste un de tes prompts dans ElevenLabs Conversational AI et mesure la qualité des réponses.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le use case d'agent vocal le plus demandé par les entreprises ?", options: JSON.stringify(["Traduction en temps réel", "Prise de rendez-vous automatisée", "Génération de musique", "Rédaction d'emails"]), correctAnswer: "Prise de rendez-vous automatisée", explanation: "La prise de RDV automatisée est le cas d'usage numéro 1. Cabinets médicaux, salons de coiffure, garages : des milliers d'entreprises perdent du temps à gérer les RDV par téléphone." },
      { type: "true_false", question: "Un agent de qualification de leads attribue un score basé sur les réponses du prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'agent pose des questions stratégiques (budget, timeline, décideur) et attribue un score. Seuls les leads ayant un score suffisant sont transférés à un commercial humain." },
      { type: "mcq", question: "Quel pourcentage des appels SAV un agent vocal peut-il typiquement gérer seul ?", options: JSON.stringify(["20%", "50%", "80%", "100%"]), correctAnswer: "80%", explanation: "Un agent SAV bien configuré gère environ 80% des demandes courantes (suivi de commande, retours, questions fréquentes). Les 20% restants sont transférés à un humain." },
      { type: "true_false", question: "Les appels sortants automatisés sont totalement interdits en France.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le démarchage est encadré par Bloctel, mais les appels de relance (confirmation RDV, rappel facturation) sont autorisés quand il existe une relation commerciale préexistante. Il faut respecter le RGPD." },
      { type: "mcq", question: "Qu'est-ce qu'un agent outbound ?", options: JSON.stringify(["Un agent qui reçoit des appels entrants", "Un agent qui initie des appels sortants", "Un agent qui envoie des emails", "Un agent qui modère un chat"]), correctAnswer: "Un agent qui initie des appels sortants", explanation: "Un agent outbound initie les appels (relance, confirmation, enquête) contrairement à un agent inbound qui reçoit les appels des clients." },
      { type: "mcq", question: "Quel outil permet de déclencher un appel sortant via un agent vocal dans un workflow automatisé ?", options: JSON.stringify(["Photoshop", "Un script API (webhook ou cron job)", "Google Docs", "Canva"]), correctAnswer: "Un script API (webhook ou cron job)", explanation: "Un script automatisé (API Route, cron job ou webhook) peut déclencher un appel via l'API ElevenLabs quand un événement se produit (RDV dans 24h, facture impayée, etc.)." },
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

      { id: "3-20", type: "heading", level: 3, text: "Pourquoi le médical est le marché idéal pour démarrer" },
      { id: "3-21", type: "text", html: "<p>Le secteur médical coche toutes les cases pour un agent vocal :</p><ul><li><strong>Volume d'appels élevé :</strong> 50-70 appels/jour pour un cabinet actif, dont 80% sont des demandes de RDV</li><li><strong>Appels répétitifs :</strong> les mêmes questions reviennent (horaires, adresse, documents). Un agent gère ça parfaitement.</li><li><strong>Douleur forte :</strong> les patients n'arrivent pas à joindre le cabinet et partent chez un confrère. Le médecin perd du CA.</li><li><strong>Budget disponible :</strong> un médecin généraliste gagne en moyenne 6 000-8 000€/mois net. 300€/mois de maintenance est négligeable.</li><li><strong>Pas de concurrence :</strong> très peu de prestataires proposent ce service aujourd'hui. Tu arrives sur un marché quasi vierge.</li></ul><p>Un seul cabinet satisfait peut te recommander à 5 confrères. C'est le cercle vertueux parfait pour lancer ton activité.</p>" },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Rédiger le System Prompt" },
      { id: "3-6", type: "text", html: "<p>Le System Prompt est le document le plus important. Il doit couvrir : l'identité de l'agent, le ton à adopter, les informations du cabinet, les actions autorisées, les limites et les cas de transfert vers un humain.</p><p>Voici la structure recommandée pour un prompt médical :</p>" },
      { id: "3-7", type: "steps", steps: [
        { title: "Section Identité", description: "Tu es l'assistant téléphonique du Cabinet du Dr. Dupont. Tu t'appelles 'l'assistant du cabinet'. Tu es professionnel, rassurant et empathique. Tu ne donnes JAMAIS de conseil médical." },
        { title: "Section Informations", description: "Horaires : lundi-vendredi 8h30-12h30 et 14h-18h30, samedi 9h-12h. Adresse : 15 rue de la Paix, 75001 Paris. Documents à apporter : carte vitale, mutuelle, ordonnances en cours." },
        { title: "Section Actions", description: "Tu peux : prendre un RDV, annuler un RDV existant, donner les horaires et l'adresse, expliquer les documents nécessaires. Tu ne peux PAS : donner des conseils médicaux, prescrire, modifier un traitement." },
        { title: "Section Transfert", description: "Transfère vers la secrétaire si : urgence médicale mentionnée, demande de résultats d'analyses, réclamation, tout sujet que tu ne peux pas gérer. Dis : 'Je vais vous passer [la secrétaire/le cabinet] qui pourra mieux vous aider.'" },
      ]},

      { id: "3-22", type: "heading", level: 3, text: "Les pièges du prompt médical" },
      { id: "3-23", type: "text", html: "<p>Rédiger un prompt pour un contexte médical demande une attention particulière. Voici les erreurs qui peuvent te coûter le client :</p><ul><li><strong>Piège 1 — Le conseil médical indirect :</strong> Un patient dit 'J'ai de la fièvre, est-ce grave ?' Si l'agent répond 'La fièvre est souvent bénigne', c'est déjà un conseil médical. L'agent doit TOUJOURS renvoyer vers une consultation.</li><li><strong>Piège 2 — La confidentialité :</strong> L'agent ne doit JAMAIS donner d'informations sur un autre patient, même si l'appelant prétend être un membre de la famille.</li><li><strong>Piège 3 — L'urgence vitale :</strong> Si quelqu'un appelle et dit 'Je fais un malaise', l'agent doit immédiatement recommander d'appeler le 15 (SAMU). Ce cas doit être codé en dur dans le prompt.</li></ul>" },
      { id: "3-24", type: "callout", variant: "warning", html: "<strong>Instruction critique à ajouter dans ton prompt :</strong> 'Si l'appelant mentionne une urgence vitale (malaise, douleur thoracique, difficultés respiratoires, perte de connaissance), dis immédiatement : Appelez le 15 ou le 112 tout de suite. Ne reste pas en ligne.'" },

      { id: "3-8", type: "callout", variant: "warning", html: "<strong>Règle critique :</strong> Un agent vocal médical ne doit JAMAIS donner de conseil médical. Ajoute cette instruction explicitement dans le prompt et teste avec des questions pièges ('J'ai mal à la tête, que dois-je prendre ?'). L'agent doit systématiquement rediriger vers une consultation." },
      { id: "3-9", type: "separator", style: "line" },

      { id: "3-10", type: "heading", level: 2, text: "Étape 2 : Configurer les fonctions" },
      { id: "3-11", type: "text", html: "<p>L'agent doit interagir avec deux systèmes externes : le <strong>calendrier</strong> pour les disponibilités et <strong>Twilio</strong> pour les SMS. Dans ElevenLabs Conversational AI, on configure ces interactions via des tools (outils).</p><p>Chaque tool a un nom, une description (que le LLM utilise pour décider quand l'appeler) et des paramètres. Par exemple, la fonction <code>check_availability</code> prend une date en paramètre et retourne les créneaux disponibles. La fonction <code>book_appointment</code> prend un créneau, le nom du patient et son numéro de téléphone.</p>" },
      { id: "3-12", type: "comparison", headers: ["Fonction", "Déclencheur", "Paramètres", "Retour"], rows: [
        { cells: ["check_availability", "Patient demande un RDV", "date (string)", "Liste de créneaux disponibles"] },
        { cells: ["book_appointment", "Patient choisit un créneau", "date, heure, nom, téléphone", "Confirmation + envoi SMS"] },
        { cells: ["cancel_appointment", "Patient veut annuler", "nom, date du RDV", "Confirmation d'annulation"] },
        { cells: ["transfer_to_human", "Urgence ou hors périmètre", "raison du transfert", "Transfert d'appel"] },
      ]},

      { id: "3-25", type: "heading", level: 3, text: "Comment structurer tes API Routes pour les tools" },
      { id: "3-26", type: "text", html: "<p>Chaque tool de ton agent vocal correspond à une API Route dans ton application Next.js. Voici l'architecture recommandée :</p><ul><li><code>POST /api/vocal/check-availability</code> — Reçoit la date, interroge Google Calendar API, retourne les créneaux libres en JSON</li><li><code>POST /api/vocal/book-appointment</code> — Crée l'événement dans Google Calendar, envoie un SMS via Twilio, retourne la confirmation</li><li><code>POST /api/vocal/cancel-appointment</code> — Supprime l'événement, envoie un SMS d'annulation</li><li><code>POST /api/vocal/transfer</code> — Log la raison du transfert, déclenche le renvoi d'appel Twilio</li></ul><p>Chaque route fait une seule chose et la fait bien. Les réponses doivent être en JSON avec un format que le LLM peut facilement interpréter pour formuler sa réponse vocale.</p>" },
      { id: "3-27", type: "callout", variant: "tip", html: "<strong>Astuce technique :</strong> Retourne toujours un message 'humain-friendly' dans ta réponse API. Par exemple, au lieu de renvoyer juste <code>{slots: ['10:00', '14:30']}</code>, renvoie <code>{message: 'Créneaux disponibles : 10 heures et 14 heures 30', slots: ['10:00', '14:30']}</code>. Le LLM utilisera le message directement dans sa réponse vocale." },

      { id: "3-13", type: "separator", style: "dots" },
      { id: "3-14", type: "heading", level: 2, text: "Étape 3 : Tester et itérer" },
      { id: "3-15", type: "text", html: "<p>Le test est la phase la plus importante. Prépare une batterie de scénarios :</p><ul><li><strong>Scénario nominal :</strong> prise de RDV simple, tout se passe bien</li><li><strong>Créneau indisponible :</strong> le patient veut un créneau pris, l'agent doit proposer des alternatives</li><li><strong>Question médicale :</strong> l'agent doit refuser poliment et proposer une consultation</li><li><strong>Client agressif :</strong> l'agent reste calme et propose de transférer</li><li><strong>Hors périmètre :</strong> demande non liée au cabinet (ex: 'Quel temps fait-il ?')</li></ul><p>Pour chaque scénario, note ce qui fonctionne et ce qui ne fonctionne pas. Ajuste le System Prompt en conséquence. Itère jusqu'à obtenir un taux de réussite de 90%+ sur tes scénarios de test.</p>" },

      { id: "3-28", type: "heading", level: 3, text: "La méthode de test en 3 phases" },
      { id: "3-29", type: "steps", steps: [
        { title: "Phase 1 : Test playground (30 min)", description: "Teste dans le simulateur web d'ElevenLabs. C'est rapide et gratuit. Vérifie que le prompt fonctionne, que les tools sont bien appelés, et que les réponses sont pertinentes. Corrige les erreurs grossières." },
        { title: "Phase 2 : Test téléphonique solo (1h)", description: "Appelle toi-même le numéro connecté. La qualité audio, la latence et le rythme de la conversation changent complètement par rapport au playground. Note les différences et ajuste." },
        { title: "Phase 3 : Test avec des cobayes (2h)", description: "Demande à 3-5 personnes (amis, famille) d'appeler sans leur donner de script. Donne-leur juste un contexte : 'Tu appelles un cabinet médical pour prendre RDV.' Écoute les enregistrements et note chaque point à améliorer." },
      ]},
      { id: "3-30", type: "callout", variant: "info", html: "<strong>Le secret des agents vocaux qui cartonnent :</strong> Ce n'est pas le premier prompt qui fait la différence, c'est les 10 itérations suivantes. Les meilleurs agents vocaux sont passés par 15-20 versions de prompt. Chaque test révèle un cas non prévu." },

      { id: "3-31", type: "separator", style: "line" },
      { id: "3-32", type: "heading", level: 3, text: "Comment présenter le projet au Dr. Dupont" },
      { id: "3-33", type: "text", html: "<p>Quand tu livres le projet à ton client, ne parle pas de technologie. Parle de résultats :</p><ul><li><em>'Votre agent répond à 100% des appels, 24h/24, 7j/7'</em></li><li><em>'Vos patients obtiennent un RDV en moins de 1 minute'</em></li><li><em>'Votre secrétaire ne gère plus que les cas complexes — elle a plus de temps pour l'accueil physique'</em></li><li><em>'Chaque appel est enregistré et tracé — vous avez une visibilité complète'</em></li></ul><p>Propose une période de test de 2 semaines gratuite. Pendant cette période, l'agent fonctionne en parallèle de la secrétaire. Le médecin voit les résultats sans risque. Après 2 semaines, la conversion en client payant est quasi automatique.</p>" },

      { id: "3-16", type: "checklist", title: "Checklist du projet terminé", items: [
        { id: "c1", text: "System Prompt rédigé avec identité, informations, actions et limites" },
        { id: "c2", text: "Voix ElevenLabs choisie et configurée (ton professionnel)" },
        { id: "c3", text: "Functions configurées : check_availability, book_appointment, cancel, transfer" },
        { id: "c4", text: "Numéro de téléphone connecté" },
        { id: "c5", text: "5 scénarios de test passés avec succès" },
        { id: "c6", text: "L'agent refuse de donner des conseils médicaux" },
        { id: "c7", text: "Test téléphonique réel avec des cobayes effectué" },
        { id: "c8", text: "Présentation client prête (résultats, pas technologie)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis l'agent complet</h3><p>Réalise le projet de A à Z :</p><ol><li>Crée l'agent sur ElevenLabs Conversational AI avec le System Prompt complet du Dr. Dupont</li><li>Configure une voix professionnelle dans la bibliothèque ElevenLabs</li><li>Définis au minimum 3 tools (même s'ils pointent vers des endpoints fictifs)</li><li>Teste les 5 scénarios décrits dans la leçon et note les résultats</li><li>Itère sur le prompt jusqu'à obtenir des réponses satisfaisantes sur chaque scénario</li></ol><p><strong>Livrable :</strong> Un document récapitulatif avec ton System Prompt final, les résultats de chaque test (capture ou transcription) et les ajustements que tu as faits.</p>",
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
