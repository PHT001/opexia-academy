// ═══════════════════════════════════════════════════
// MODULE 11 — Voice AI & Agents téléphoniques
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_11_VOICE_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 11,
    title: "Le marché de la Voice AI : opportunités",
    slug: "marche-voice-ai-opportunites",
    duration: "15 min",
    description: "Le marché des agents vocaux IA explose. Restaurants, cabinets médicaux, agences immobilières : tout le monde veut un agent téléphonique. Découvre les chiffres, les cas d'usage et combien tu peux facturer.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi la Voice AI explose maintenant" },
      { id: "1-2", type: "text", html: "<p>Pendant des années, les chatbots textuels ont dominé. Mais il y a un problème : <strong>beaucoup de business tournent encore autour du téléphone</strong>. Le restaurant qui reçoit 40 appels par jour pour des réservations. Le cabinet médical noyé sous les appels de prise de RDV. L'agence immobilière qui rate des prospects parce que personne ne décroche à 19h.</p><p>Depuis 2024, les technologies de voix IA ont fait un bond énorme. Les voix synthétiques sont devenues quasi-indistinguables des voix humaines. La latence est tombée sous la seconde. Et des plateformes comme Vapi, Bland.ai ou ElevenLabs ont rendu tout ça accessible — sans écrire une ligne de code complexe.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Le timing est parfait :</strong> le marché mondial de la Voice AI est estimé à 4,6 milliards de dollars en 2024 et devrait atteindre 14,5 milliards en 2028. Les entreprises locales commencent à peine à comprendre que ça existe. Tu arrives pile au bon moment." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les secteurs qui veulent des agents téléphoniques IA" },
      { id: "1-6", type: "comparison", headers: ["Secteur", "Problème actuel", "Solution Voice AI", "Potentiel de vente"], rows: [
        { cells: ["Restaurants", "40+ appels/jour pour réservations, staff débordé en service", "Agent qui prend les réservations 24h/24, confirme par SMS", "1 000€ – 2 500€ setup + 200€/mois"] },
        { cells: ["Cabinets médicaux", "Secrétaire surchargée, patients en attente 15 min au tel", "Agent qui vérifie les dispos et prend les RDV automatiquement", "2 000€ – 4 000€ setup + 300€/mois"] },
        { cells: ["Agences immobilières", "Prospects qui appellent hors horaires, appels manqués = deals perdus", "Agent qui qualifie le prospect, prend ses critères, planifie une visite", "2 500€ – 5 000€ setup + 400€/mois"] },
        { cells: ["Garages auto", "Clients qui appellent pour des RDV de révision, devis", "Agent qui prend le RDV, envoie un rappel la veille", "1 500€ – 3 000€ setup + 250€/mois"] },
        { cells: ["Hôtels & gîtes", "Questions récurrentes sur dispos, tarifs, accès", "Agent qui répond aux questions et redirige vers la réservation en ligne", "1 500€ – 3 500€ setup + 300€/mois"] },
      ]},
      { id: "1-7", type: "callout", variant: "info", html: "Remarque le modèle économique : <strong>setup one-shot + abonnement mensuel</strong>. C'est la clé pour construire un revenu récurrent. 10 clients à 300€/mois = 3 000€ de récurrent, en plus des setups." },

      { id: "1-8", type: "separator", style: "line" },
      { id: "1-9", type: "heading", level: 2, text: "Ce que tu peux facturer — les vrais chiffres" },
      { id: "1-10", type: "steps", steps: [
        { title: "Agent vocal simple (FAQ + transfert d'appel)", description: "Le client appelle, l'agent répond aux questions fréquentes et transfère vers un humain si nécessaire. Setup : 1 000€ – 2 000€. Temps de dev : 1-2 jours." },
        { title: "Agent de prise de RDV", description: "L'agent vérifie les disponibilités dans un calendrier, propose des créneaux, confirme le RDV et envoie un SMS. Setup : 2 000€ – 4 000€. Temps de dev : 3-5 jours." },
        { title: "Agent de qualification de leads", description: "L'agent pose des questions pour qualifier le prospect (budget, besoin, timeline), score le lead et l'envoie dans le CRM. Setup : 3 000€ – 5 000€. Temps de dev : 5-7 jours." },
        { title: "Système vocal complet multi-agents", description: "Plusieurs agents pour différents scénarios (accueil, support, vente), connectés au CRM, analytics, reporting. Setup : 5 000€ – 10 000€+. Temps de dev : 2-4 semaines." },
      ]},
      { id: "1-11", type: "text", html: "<p>Compare ça au coût d'un employé dédié au téléphone : <strong>entre 2 000€ et 3 000€/mois</strong> en France (salaire + charges). Ton agent vocal coûte une fraction de ça et travaille 24h/24, 7j/7, sans congés, sans arrêt maladie, sans pause café.</p><p>C'est l'argument massue auprès de tes clients. Tu ne vends pas de la tech — tu vends <strong>un employé virtuel qui ne dort jamais</strong>.</p>" },

      { id: "1-12", type: "separator", style: "dots" },
      { id: "1-13", type: "quiz-inline", question: "Quel est le modèle économique le plus rentable pour vendre des agents vocaux ?", options: [
        { id: "a", text: "Facturer uniquement au setup, un prix unique" },
        { id: "b", text: "Setup one-shot + abonnement mensuel récurrent" },
        { id: "c", text: "Facturer à l'heure de développement" },
      ], correctId: "b", explanation: "Le combo setup + abonnement mensuel est la clé. Le setup te paie pour le travail initial, et l'abonnement te crée un revenu récurrent. 10 clients à 300€/mois = 3 000€ de récurrent stable chaque mois." },

      { id: "1-14", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Le marché de la Voice AI est en pleine explosion et les PME locales commencent à peine à comprendre" },
        { id: "c2", text: "Les secteurs les plus demandeurs : médical, restauration, immobilier, hôtellerie" },
        { id: "c3", text: "Le modèle setup + abonnement mensuel est la clé du revenu récurrent" },
        { id: "c4", text: "L'argument de vente principal : un employé virtuel 24h/24 pour une fraction du coût d'un salarié" },
      ]},
    ]),
    exercise: "<h3>Exercice : Identifie 5 business locaux</h3><p>Ouvre Google Maps et trouve <strong>5 entreprises locales</strong> (dans ta ville ou alentour) qui pourraient bénéficier d'un agent téléphonique IA :</p><ul><li>Note le nom du business et son secteur</li><li>Appelle-les (ou imagine leur flux d'appels) : combien d'appels reçoivent-ils par jour ?</li><li>Quel type d'agent leur conviendrait ? (FAQ, prise de RDV, qualification de leads)</li><li>Estime un prix de setup + abonnement mensuel pour chacun</li></ul><p>Garde cette liste — ce seront tes premiers prospects quand tu auras construit ton premier agent dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le marché estimé de la Voice AI en 2028 ?", options: JSON.stringify(["2 milliards de dollars", "7 milliards de dollars", "14,5 milliards de dollars", "25 milliards de dollars"]), correctAnswer: "14,5 milliards de dollars", explanation: "Le marché mondial de la Voice AI est estimé à 4,6 milliards en 2024 et devrait atteindre 14,5 milliards en 2028, soit une croissance de plus de 3x en 4 ans." },
      { type: "true_false", question: "Un agent vocal IA ne peut travailler que pendant les horaires de bureau.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est justement l'un des arguments de vente principaux : un agent vocal IA travaille 24h/24, 7j/7, sans congés ni pauses. Il répond à 3h du matin comme à 14h." },
      { type: "mcq", question: "Combien peut-on facturer en setup pour un agent de prise de RDV ?", options: JSON.stringify(["200€ – 500€", "2 000€ – 4 000€", "10 000€ – 15 000€", "50 000€+"]), correctAnswer: "2 000€ – 4 000€", explanation: "Un agent de prise de RDV (vérification des dispos, proposition de créneaux, confirmation SMS) se facture entre 2 000€ et 4 000€ en setup, plus un abonnement mensuel." },
      { type: "mcq", question: "Quel est l'argument de vente principal d'un agent vocal IA par rapport à un employé ?", options: JSON.stringify(["L'agent vocal est plus intelligent qu'un humain", "L'agent vocal coûte une fraction d'un salarié et travaille 24h/24 sans congés", "L'agent vocal remplace définitivement tous les employés", "L'agent vocal est gratuit à utiliser"]), correctAnswer: "L'agent vocal coûte une fraction d'un salarié et travaille 24h/24 sans congés", explanation: "Un employé dédié au téléphone coûte 2 000€ – 3 000€/mois. Un agent vocal coûte quelques centaines d'euros par mois et travaille sans interruption. C'est l'argument massue." },
      { type: "true_false", question: "Le modèle de facturation recommandé est de facturer uniquement à l'heure de développement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le modèle recommandé est setup one-shot + abonnement mensuel récurrent. La facturation à l'heure te limite et ne crée pas de revenu récurrent. L'abonnement mensuel est la clé pour un business stable." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 11,
    title: "Les outils : Vapi, ElevenLabs, Bland.ai",
    slug: "outils-vapi-elevenlabs-bland-ai",
    duration: "25 min",
    description: "Comparatif détaillé des plateformes de Voice AI. Vapi pour les agents téléphoniques, ElevenLabs pour le text-to-speech de qualité, Bland.ai pour la simplicité. Comment choisir et combien ça coûte.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Les 3 plateformes qui dominent le marché" },
      { id: "2-2", type: "text", html: "<p>En Voice AI, tu n'as pas besoin de construire de zéro. Trois plateformes se démarquent, chacune avec ses forces. Comprendre leurs différences, c'est savoir laquelle utiliser selon le projet — et c'est ce qui va te différencier des débutants qui prennent le premier outil trouvé sur Google.</p>" },
      { id: "2-3", type: "separator", style: "dots" },

      { id: "2-4", type: "heading", level: 2, text: "Vapi — La plateforme tout-en-un pour agents téléphoniques" },
      { id: "2-5", type: "text", html: "<p><strong>Vapi</strong> est la plateforme de référence pour créer des agents téléphoniques IA. Elle gère tout le pipeline vocal : réception d'appel, speech-to-text, traitement par un LLM, text-to-speech, et renvoi audio — le tout en temps réel avec une latence très faible.</p><p>Ce qui rend Vapi puissante, c'est sa flexibilité. Tu peux choisir ton propre modèle LLM (GPT-4o, Claude, etc.), ton propre provider de voix (ElevenLabs, PlayHT, Deepgram), et connecter des outils externes via des function calls.</p>" },
      { id: "2-6", type: "steps", steps: [
        { title: "Points forts", description: "Pipeline vocal complet (STT + LLM + TTS). Support des function calls pour connecter des APIs externes. Choix du LLM et du provider de voix. Numéros de téléphone intégrés. Dashboard d'analytics." },
        { title: "Cas d'usage idéal", description: "Agents téléphoniques complexes avec logique métier : prise de RDV, qualification de leads, support client avec accès à une base de données." },
        { title: "Pricing", description: "Pay-per-use : environ 0,05$/min pour le pipeline vocal + coût du LLM + coût du TTS. Un appel moyen de 3 minutes revient à ~0,20-0,40$. Plan Pro à 50$/mois avec des minutes incluses." },
      ]},

      { id: "2-7", type: "separator", style: "line" },
      { id: "2-8", type: "heading", level: 2, text: "ElevenLabs — Le roi du text-to-speech" },
      { id: "2-9", type: "text", html: "<p><strong>ElevenLabs</strong> n'est pas une plateforme d'agents téléphoniques — c'est le meilleur moteur de voix IA du marché. Leurs voix sont d'un réalisme bluffant, avec des émotions, des intonations naturelles, et la possibilité de cloner une voix à partir de quelques secondes d'audio.</p><p>Tu peux utiliser ElevenLabs comme provider de voix <strong>dans</strong> Vapi, ou l'utiliser seul pour des projets de voiceover, narration, ou IVR (répondeur vocal interactif).</p>" },
      { id: "2-10", type: "steps", steps: [
        { title: "Points forts", description: "Qualité de voix inégalée. Voice cloning (clone la voix de ton client en quelques secondes). Support de 29 langues dont le français. API simple. Agents conversationnels intégrés depuis 2024." },
        { title: "Cas d'usage idéal", description: "Quand la qualité de la voix est critique : voiceover pour vidéos, narration de podcasts, IVR premium, ou quand tu veux cloner la voix du dirigeant pour l'agent vocal de son entreprise." },
        { title: "Pricing", description: "Free : 10 000 caractères/mois. Starter : 5$/mois (30 000 caractères). Scale : 22$/mois (100 000 caractères). Pro : 99$/mois (500 000 caractères). Enterprise : sur devis." },
      ]},

      { id: "2-11", type: "separator", style: "line" },
      { id: "2-12", type: "heading", level: 2, text: "Bland.ai — La simplicité avant tout" },
      { id: "2-13", type: "text", html: "<p><strong>Bland.ai</strong> mise sur la simplicité. Tu décris ce que ton agent doit faire en langage naturel, tu choisis une voix, et tu lances. Pas de configuration complexe, pas de pipeline à assembler. C'est le no-code de la Voice AI.</p><p>Le trade-off : moins de flexibilité que Vapi. Tu ne choisis pas ton LLM, tu as moins de contrôle sur le flow. Mais pour un agent simple (FAQ, transfert d'appel, prise de message), c'est souvent suffisant.</p>" },
      { id: "2-14", type: "steps", steps: [
        { title: "Points forts", description: "Setup ultra-rapide (un agent en 5 minutes). Interface simple et intuitive. Bon pour les agents simples. API disponible pour l'intégration." },
        { title: "Cas d'usage idéal", description: "Agents simples : répondeur intelligent, prise de message, FAQ téléphonique. Quand le client veut quelque chose de rapide sans complexité." },
        { title: "Pricing", description: "Pay-per-use : environ 0,09$/min (connecté) et 0,01$/min (en attente). Plus cher que Vapi par minute, mais le temps de setup réduit peut compenser." },
      ]},

      { id: "2-15", type: "separator", style: "dots" },
      { id: "2-16", type: "heading", level: 2, text: "Comparatif final — Quel outil pour quel projet ?" },
      { id: "2-17", type: "comparison", headers: ["Critère", "Vapi", "ElevenLabs", "Bland.ai"], rows: [
        { cells: ["Type", "Plateforme d'agents vocaux", "Moteur TTS + agents", "Plateforme d'agents vocaux"] },
        { cells: ["Complexité de setup", "Moyenne (30-60 min)", "Simple pour le TTS, moyen pour les agents", "Très simple (5-15 min)"] },
        { cells: ["Flexibilité", "Très haute (choix LLM, TTS, tools)", "Haute pour la voix, moyenne pour les agents", "Basse (tout-en-un fermé)"] },
        { cells: ["Qualité de voix", "Dépend du provider choisi", "Excellente (la meilleure du marché)", "Correcte"] },
        { cells: ["Function calling", "Oui (natif)", "Oui (via agents)", "Limité"] },
        { cells: ["Prix moyen/appel 3 min", "0,20 – 0,40$", "Variable selon config", "0,27 – 0,35$"] },
        { cells: ["Idéal pour", "Agents complexes avec logique métier", "Voix premium + voice cloning", "Agents simples et rapides"] },
      ]},

      { id: "2-18", type: "callout", variant: "tip", html: "<strong>Ma recommandation :</strong> commence avec <strong>Vapi + ElevenLabs comme provider de voix</strong>. Tu as la flexibilité de Vapi avec la qualité vocale d'ElevenLabs. C'est le combo utilisé par la majorité des agences Voice AI qui vendent des agents premium." },

      { id: "2-19", type: "quiz-inline", question: "Quelle plateforme choisir pour un agent téléphonique complexe avec prise de RDV et connexion au CRM ?", options: [
        { id: "a", text: "Bland.ai car c'est le plus simple" },
        { id: "b", text: "ElevenLabs seul car la voix est la plus belle" },
        { id: "c", text: "Vapi car il supporte les function calls et la connexion à des APIs externes" },
      ], correctId: "c", explanation: "Vapi est la plateforme idéale pour les agents complexes. Le support natif des function calls te permet de connecter ton agent à un calendrier, un CRM, ou n'importe quelle API. ElevenLabs peut être utilisé comme provider de voix dans Vapi pour combiner les deux forces." },

      { id: "2-20", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Vapi = plateforme tout-en-un pour agents téléphoniques complexes" },
        { id: "c2", text: "ElevenLabs = meilleur moteur de voix du marché, utilisable comme provider dans Vapi" },
        { id: "c3", text: "Bland.ai = simple et rapide pour des agents basiques" },
        { id: "c4", text: "Le combo Vapi + ElevenLabs est le standard du marché pour les agents premium" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée tes comptes et explore</h3><p>Crée un compte gratuit sur chacune des 3 plateformes :</p><ol><li><strong>Vapi</strong> (vapi.ai) — Explore le dashboard, regarde les templates d'agents disponibles</li><li><strong>ElevenLabs</strong> (elevenlabs.io) — Teste le text-to-speech avec une phrase en français. Compare 3 voix différentes</li><li><strong>Bland.ai</strong> (bland.ai) — Crée un agent test ultra-simple qui dit bonjour et demande en quoi il peut aider</li></ol><p>Pour chaque plateforme, note :</p><ul><li>Ton impression de l'interface (facile ? complexe ?)</li><li>Le pricing pour ton cas d'usage</li><li>Un point fort et un point faible</li></ul>",
    quiz: [
      { type: "mcq", question: "Quelle est la spécialité d'ElevenLabs ?", options: JSON.stringify(["Les agents téléphoniques no-code", "Le text-to-speech de très haute qualité et le voice cloning", "Les automatisations workflow", "Le speech-to-text en temps réel"]), correctAnswer: "Le text-to-speech de très haute qualité et le voice cloning", explanation: "ElevenLabs est le leader du marché en text-to-speech. Leurs voix sont d'un réalisme bluffant et ils proposent du voice cloning à partir de quelques secondes d'audio." },
      { type: "true_false", question: "Bland.ai est plus flexible que Vapi pour les agents téléphoniques complexes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse. Vapi offre beaucoup plus de flexibilité : choix du LLM, du provider TTS, function calls natifs. Bland.ai mise sur la simplicité, pas sur la flexibilité." },
      { type: "mcq", question: "Quel est le combo recommandé pour créer des agents vocaux premium ?", options: JSON.stringify(["Bland.ai seul", "Vapi + ElevenLabs comme provider de voix", "ElevenLabs seul", "Bland.ai + Vapi ensemble"]), correctAnswer: "Vapi + ElevenLabs comme provider de voix", explanation: "Le combo Vapi + ElevenLabs combine la flexibilité de Vapi (pipeline, function calls, logique métier) avec la qualité vocale d'ElevenLabs. C'est le standard utilisé par les agences Voice AI." },
      { type: "mcq", question: "Combien coûte en moyenne un appel de 3 minutes sur Vapi ?", options: JSON.stringify(["0,01 – 0,05$", "0,20 – 0,40$", "2 – 4$", "10 – 15$"]), correctAnswer: "0,20 – 0,40$", explanation: "Un appel de 3 minutes sur Vapi revient à environ 0,20-0,40$ (pipeline vocal + LLM + TTS). C'est très rentable comparé au coût d'un employé humain." },
      { type: "true_false", question: "On peut utiliser ElevenLabs comme provider de voix à l'intérieur de Vapi.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vapi permet de choisir son provider de voix. Tu peux donc utiliser ElevenLabs pour la qualité vocale tout en profitant du pipeline et des function calls de Vapi." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 11,
    title: "Créer ton premier agent téléphonique avec Vapi",
    slug: "creer-premier-agent-telephonique-vapi",
    duration: "30 min",
    description: "Setup complet de Vapi : configurer un assistant vocal, choisir une voix, écrire le prompt système, connecter un numéro de téléphone et faire ton premier test d'appel.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Ce que tu vas construire dans cette leçon" },
      { id: "3-2", type: "text", html: "<p>À la fin de cette leçon, tu auras un <strong>agent téléphonique fonctionnel</strong> que tu peux appeler avec ton propre téléphone. Il va décrocher, se présenter, répondre à des questions, et raccrocher proprement. C'est ton premier prototype — et crois-moi, la première fois que tu appelles ton propre agent et qu'il te répond, c'est un moment magique.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Prérequis :</strong> un compte Vapi (gratuit pour commencer, tu as du crédit offert). Un téléphone pour tester. C'est tout." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 — Créer ton assistant dans Vapi" },
      { id: "3-6", type: "steps", steps: [
        { title: "Va sur le dashboard Vapi", description: "Connecte-toi à dashboard.vapi.ai. Tu arrives sur la page principale avec tes assistants." },
        { title: "Clique sur 'Create Assistant'", description: "Tu peux partir d'un template ou créer from scratch. Pour cette leçon, on part de zéro pour tout comprendre." },
        { title: "Nomme ton assistant", description: "Donne-lui un nom descriptif, par exemple 'Agent Accueil - Restaurant Le Provençal'. C'est juste pour ton organisation interne, le client n'entendra pas ce nom." },
      ]},

      { id: "3-7", type: "separator", style: "line" },
      { id: "3-8", type: "heading", level: 2, text: "Étape 2 — Configurer le modèle LLM" },
      { id: "3-9", type: "text", html: "<p>L'assistant Vapi utilise un LLM pour comprendre ce que dit l'appelant et générer une réponse. Tu dois choisir quel modèle utiliser.</p>" },
      { id: "3-10", type: "comparison", headers: ["Modèle", "Avantage", "Inconvénient", "Coût approximatif"], rows: [
        { cells: ["GPT-4o-mini", "Rapide, pas cher, bon en français", "Moins précis sur les cas complexes", "~0,01$/appel de 3 min"] },
        { cells: ["GPT-4o", "Très bon raisonnement, excellent en français", "Plus lent, plus cher", "~0,05$/appel de 3 min"] },
        { cells: ["Claude 3.5 Sonnet", "Excellent raisonnement, très naturel", "Latence parfois plus élevée", "~0,04$/appel de 3 min"] },
      ]},
      { id: "3-11", type: "callout", variant: "tip", html: "<strong>Mon conseil :</strong> commence avec <strong>GPT-4o-mini</strong> pour tes tests. Il est rapide, pas cher, et suffisant pour 80% des cas d'usage. Tu pourras upgrader vers GPT-4o ou Claude si le client a besoin de plus de précision." },

      { id: "3-12", type: "separator", style: "line" },
      { id: "3-13", type: "heading", level: 2, text: "Étape 3 — Écrire le prompt système (le cerveau de ton agent)" },
      { id: "3-14", type: "text", html: "<p>Le prompt système est <strong>le document le plus important</strong> de ton agent vocal. C'est lui qui définit la personnalité, le comportement, les limites et les instructions de ton agent. Un mauvais prompt = un agent inutile. Un bon prompt = un agent qui impressionne le client.</p><p>Voici la structure d'un prompt système efficace pour un agent téléphonique :</p>" },
      { id: "3-15", type: "steps", steps: [
        { title: "Identité et rôle", description: "Qui est l'agent ? Pour quelle entreprise travaille-t-il ? Quel est son prénom ? Exemple : 'Tu es Sophie, l'assistante virtuelle du Restaurant Le Provençal à Lyon.'" },
        { title: "Ton et style", description: "Comment doit-il parler ? Formel ? Décontracté ? Court et efficace ? Exemple : 'Tu es chaleureuse, professionnelle mais pas robotique. Tu tutoies les gens. Tu utilises des phrases courtes.'" },
        { title: "Objectif principal", description: "Quelle est la mission de l'agent ? Exemple : 'Ton objectif est de prendre les réservations. Tu dois récupérer : nom, date, heure, nombre de personnes, numéro de téléphone.'" },
        { title: "Informations à connaître", description: "Toutes les infos que l'agent doit pouvoir donner : horaires, menu, adresse, parking, allergies, etc." },
        { title: "Limites et garde-fous", description: "Ce que l'agent ne doit PAS faire : ne pas inventer d'infos, ne pas donner de prix s'il n'est pas sûr, transférer à un humain si la question est trop complexe." },
      ]},
      { id: "3-16", type: "callout", variant: "warning", html: "<strong>Erreur courante :</strong> écrire un prompt trop long et trop détaillé. En vocal, l'agent doit répondre vite. Un prompt de 2 000 mots va le ralentir. Vise 500-800 mots max, avec des instructions claires et directes." },

      { id: "3-17", type: "separator", style: "line" },
      { id: "3-18", type: "heading", level: 2, text: "Étape 4 — Choisir la voix et connecter un numéro" },
      { id: "3-19", type: "text", html: "<p><strong>La voix :</strong> dans Vapi, va dans les settings de ton assistant et choisis un provider de voix. Si tu utilises ElevenLabs, tu auras accès à des voix ultra-réalistes en français. Teste plusieurs voix et choisis celle qui correspond au business de ton client (voix féminine chaleureuse pour un restaurant, voix masculine professionnelle pour un cabinet d'avocats, etc.).</p><p><strong>Le numéro :</strong> Vapi te permet d'acheter un numéro de téléphone directement depuis le dashboard (via Twilio ou Vonage en backend). Tu peux aussi importer un numéro existant. Le coût est d'environ 1-2$/mois par numéro.</p>" },
      { id: "3-20", type: "steps", steps: [
        { title: "Acheter un numéro", description: "Dashboard > Phone Numbers > Buy Number. Choisis un numéro français (+33) ou du pays de ton client." },
        { title: "Associer l'assistant au numéro", description: "Sélectionne ton assistant dans le dropdown du numéro. Tous les appels entrants sur ce numéro seront gérés par ton agent." },
        { title: "Premier test", description: "Appelle le numéro avec ton téléphone. Parle à ton agent. Note ce qui marche et ce qui ne marche pas. Ajuste le prompt en conséquence." },
      ]},

      { id: "3-21", type: "callout", variant: "success", html: "<strong>Félicitations !</strong> Si tu as suivi toutes les étapes, tu as maintenant un agent téléphonique fonctionnel. Appelle-le, teste-le, et prépare-toi à être impressionné. C'est le premier pas vers ton service Voice AI." },

      { id: "3-22", type: "quiz-inline", question: "Quelle est la longueur idéale d'un prompt système pour un agent vocal ?", options: [
        { id: "a", text: "Le plus long possible, 5 000+ mots pour tout couvrir" },
        { id: "b", text: "500-800 mots max, avec des instructions claires et directes" },
        { id: "c", text: "10-20 mots, juste l'essentiel" },
      ], correctId: "b", explanation: "En vocal, la vitesse de réponse est critique. Un prompt trop long ralentit le LLM. Vise 500-800 mots avec des instructions claires : identité, ton, objectif, infos à connaître, et limites." },

      { id: "3-23", type: "checklist", title: "Vérifie que tu as tout fait", items: [
        { id: "c1", text: "Assistant créé dans Vapi avec un nom descriptif" },
        { id: "c2", text: "Modèle LLM configuré (GPT-4o-mini recommandé pour commencer)" },
        { id: "c3", text: "Prompt système écrit avec : identité, ton, objectif, infos, limites" },
        { id: "c4", text: "Voix choisie et testée (ElevenLabs recommandé pour le français)" },
        { id: "c5", text: "Numéro de téléphone acheté et associé à l'assistant" },
        { id: "c6", text: "Premier appel test effectué et notes prises pour améliorer le prompt" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis ton premier agent</h3><p>Crée un agent téléphonique pour un <strong>restaurant fictif</strong> appelé 'La Table de Marie' :</p><ol><li><strong>Crée l'assistant</strong> dans Vapi</li><li><strong>Écris le prompt système</strong> avec ces infos :<ul><li>Restaurant français à Paris, 12ème arrondissement</li><li>Ouvert du mardi au samedi, 12h-14h30 et 19h-22h30</li><li>Capacité : 45 couverts, terrasse de 20 places (été uniquement)</li><li>Menu du jour à 18€, carte complète disponible sur le site</li><li>L'agent doit prendre les réservations (nom, date, heure, nombre, téléphone)</li></ul></li><li><strong>Choisis une voix</strong> féminine chaleureuse</li><li><strong>Teste avec 5 scénarios</strong> : réservation normale, question sur le menu, demande d'allergie, horaires, et une question hors-sujet</li></ol><p>Note les réponses de l'agent et ajuste le prompt jusqu'à ce que les 5 scénarios passent correctement.</p>",
    quiz: [
      { type: "mcq", question: "Quel modèle LLM est recommandé pour commencer avec Vapi ?", options: JSON.stringify(["GPT-3.5 Turbo", "GPT-4o-mini", "Claude 3 Opus", "Llama 3"]), correctAnswer: "GPT-4o-mini", explanation: "GPT-4o-mini est le meilleur choix pour débuter : rapide, pas cher (~0,01$/appel de 3 min), et suffisant pour 80% des cas d'usage. Tu pourras upgrader si le client a besoin de plus de précision." },
      { type: "mcq", question: "Quels sont les 5 éléments essentiels d'un prompt système pour un agent vocal ?", options: JSON.stringify(["Nom, âge, couleur préférée, hobby, signe astrologique", "Identité/rôle, ton/style, objectif principal, informations à connaître, limites/garde-fous", "Température, top_p, max_tokens, frequency_penalty, presence_penalty", "Logo, couleurs, typographie, mise en page, animations"]), correctAnswer: "Identité/rôle, ton/style, objectif principal, informations à connaître, limites/garde-fous", explanation: "Un bon prompt système d'agent vocal couvre ces 5 points : qui est l'agent, comment il parle, quel est son objectif, quelles infos il a, et ce qu'il ne doit pas faire." },
      { type: "true_false", question: "Un prompt système de 5 000 mots est meilleur qu'un prompt de 700 mots pour un agent vocal.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "En vocal, la vitesse est critique. Un prompt trop long ralentit le LLM et augmente la latence. 500-800 mots avec des instructions claires et directes sont largement suffisants." },
      { type: "mcq", question: "Combien coûte environ un numéro de téléphone sur Vapi ?", options: JSON.stringify(["Gratuit", "1-2$/mois", "50$/mois", "200$/mois"]), correctAnswer: "1-2$/mois", explanation: "Un numéro de téléphone sur Vapi coûte environ 1-2$/mois (via Twilio ou Vonage en backend). C'est un coût négligeable que tu refactures à ton client dans l'abonnement mensuel." },
      { type: "true_false", question: "Dans Vapi, tu es obligé d'utiliser GPT-4 comme modèle LLM.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Vapi est flexible : tu peux choisir entre GPT-4o, GPT-4o-mini, Claude, et d'autres modèles. C'est l'un des avantages de la plateforme — tu adaptes le modèle au besoin et au budget." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 11,
    title: "Intégrer un agent vocal dans un workflow business",
    slug: "integrer-agent-vocal-workflow-business",
    duration: "25 min",
    description: "Connecter ton agent vocal à Supabase, Make/n8n, Google Calendar, Slack et email. Transformer un simple agent téléphonique en un système business complet qui déclenche des actions automatiques après chaque appel.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Un agent vocal seul ne suffit pas" },
      { id: "4-2", type: "text", html: "<p>Ton agent décroche, parle au client, prend les infos… et ensuite ? Si ces infos restent dans le vide, ton agent est un gadget. Ce qui fait la différence entre un gadget à 500€ et un système à 5 000€, c'est <strong>ce qui se passe après l'appel</strong>.</p><p>Un agent vocal professionnel, c'est un agent qui :</p><ul><li>Stocke les données de l'appel dans une base de données</li><li>Crée automatiquement un événement dans Google Calendar</li><li>Envoie un email ou SMS de confirmation</li><li>Notifie l'équipe sur Slack ou Teams</li><li>Met à jour le CRM</li></ul><p>C'est exactement ce qu'on va construire dans cette leçon.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "C'est ici que tes compétences en automatisation (n8n, Make) prennent tout leur sens. Tu combines Voice AI + automatisation = un système complet que tu peux vendre cher." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture d'un système vocal complet" },
      { id: "4-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Appel entrant", description: "Le client appelle le numéro de téléphone connecté à Vapi." },
        { id: "n2", label: "Agent Vapi", description: "L'agent vocal répond, discute avec le client, collecte les informations (nom, date, heure, etc.)." },
        { id: "n3", label: "Function Call", description: "Vapi envoie les données collectées à un webhook via une function call." },
        { id: "n4", label: "Webhook n8n/Make", description: "Le webhook reçoit les données et déclenche un workflow d'automatisation." },
        { id: "n5", label: "Actions automatiques", description: "Stocker en BDD, créer un RDV Google Calendar, envoyer un SMS, notifier sur Slack." },
      ]},

      { id: "4-7", type: "separator", style: "line" },
      { id: "4-8", type: "heading", level: 2, text: "Les function calls dans Vapi — le pont entre vocal et automatisation" },
      { id: "4-9", type: "text", html: "<p>Les <strong>function calls</strong> (ou tools) dans Vapi permettent à ton agent vocal d'exécuter des actions pendant ou après l'appel. Concrètement, tu définis une fonction avec des paramètres, et quand l'agent détecte qu'il doit l'utiliser, il envoie une requête HTTP à ton endpoint.</p><p>Par exemple, tu définis une function <code>book_appointment</code> avec les paramètres <code>name</code>, <code>date</code>, <code>time</code>, <code>phone</code>. Quand le client donne toutes ces infos, l'agent appelle automatiquement ta function, qui envoie les données à ton webhook n8n.</p>" },
      { id: "4-10", type: "steps", steps: [
        { title: "Définis ta function dans Vapi", description: "Va dans les settings de ton assistant > Tools > Add Tool. Donne un nom (book_appointment), une description claire pour le LLM, et les paramètres attendus (name: string, date: string, time: string, phone: string)." },
        { title: "Configure le server URL", description: "Vapi enverra les appels de function à l'URL de ton serveur. Tu peux utiliser un webhook n8n ou Make comme endpoint. Copie l'URL du webhook et colle-la dans Vapi." },
        { title: "Teste le flux", description: "Appelle ton agent, donne les infos de RDV. Vérifie que le webhook reçoit bien les données. Debug si nécessaire avec les logs Vapi." },
      ]},

      { id: "4-11", type: "separator", style: "line" },
      { id: "4-12", type: "heading", level: 2, text: "Workflow n8n : du webhook aux actions" },
      { id: "4-13", type: "text", html: "<p>Une fois que ton webhook n8n reçoit les données de l'appel, tu construis le workflow qui déclenche toutes les actions business. Voici un workflow type pour un agent de prise de RDV :</p>" },
      { id: "4-14", type: "steps", steps: [
        { title: "Node 1 : Webhook Trigger", description: "Reçoit les données du function call Vapi : nom, date, heure, téléphone, et toute info supplémentaire collectée pendant l'appel." },
        { title: "Node 2 : Supabase Insert", description: "Stocke les données de l'appel dans une table 'appointments' sur Supabase : id, client_name, date, time, phone, status, created_at." },
        { title: "Node 3 : Google Calendar Create Event", description: "Crée un événement dans le Google Calendar du business avec les détails du RDV : titre, date/heure, description avec les infos du client." },
        { title: "Node 4 : Twilio Send SMS", description: "Envoie un SMS de confirmation au client : 'Bonjour [nom], votre RDV est confirmé le [date] à [heure]. À bientôt !'" },
        { title: "Node 5 : Slack Notification", description: "Envoie un message dans le channel #rdv de l'équipe : 'Nouveau RDV pris par l'agent vocal : [nom] le [date] à [heure]'." },
      ]},

      { id: "4-15", type: "callout", variant: "tip", html: "<strong>Pro tip :</strong> ajoute un node de gestion d'erreurs dans ton workflow. Si Google Calendar est down ou si le SMS échoue, tu veux le savoir. Envoie-toi une notification d'erreur sur Slack ou par email pour pouvoir intervenir rapidement." },

      { id: "4-16", type: "separator", style: "line" },
      { id: "4-17", type: "heading", level: 2, text: "Stocker les données d'appel avec Supabase" },
      { id: "4-18", type: "text", html: "<p>Supabase est parfait pour stocker les données de tes agents vocaux. Crée une table <code>voice_calls</code> avec ces colonnes :</p><ul><li><code>id</code> — UUID, clé primaire</li><li><code>call_id</code> — ID de l'appel Vapi</li><li><code>caller_phone</code> — Numéro de l'appelant</li><li><code>client_name</code> — Nom récupéré pendant l'appel</li><li><code>purpose</code> — Motif de l'appel (RDV, question, réclamation)</li><li><code>appointment_date</code> — Date du RDV si applicable</li><li><code>appointment_time</code> — Heure du RDV</li><li><code>transcript</code> — Transcription complète de l'appel</li><li><code>duration_seconds</code> — Durée de l'appel</li><li><code>status</code> — completed, transferred, failed</li><li><code>created_at</code> — Timestamp</li></ul><p>Vapi fournit aussi un <strong>webhook end-of-call</strong> qui t'envoie automatiquement la transcription complète et les métadonnées de chaque appel. Configure-le pour alimenter ta table.</p>" },

      { id: "4-19", type: "callout", variant: "warning", html: "<strong>RGPD :</strong> tu stockes des données personnelles (numéro de téléphone, nom). Assure-toi que ton client a une politique de confidentialité à jour et que les appelants sont informés que l'appel est traité par une IA. Ajoute une mention au début de l'appel : 'Cet appel est traité par un assistant virtuel.' C'est obligatoire en Europe." },

      { id: "4-20", type: "quiz-inline", question: "Quel mécanisme de Vapi permet de connecter l'agent vocal à des services externes ?", options: [
        { id: "a", text: "Les webhooks de fin d'appel uniquement" },
        { id: "b", text: "Les function calls (tools) qui envoient des requêtes HTTP à tes endpoints" },
        { id: "c", text: "Le copier-coller manuel des transcriptions" },
      ], correctId: "b", explanation: "Les function calls (tools) dans Vapi permettent à l'agent d'appeler des endpoints externes pendant l'appel. C'est le pont entre le vocal et l'automatisation. Le webhook de fin d'appel est complémentaire mais ne permet pas d'action en temps réel." },

      { id: "4-21", type: "checklist", title: "Ton système vocal est complet quand...", items: [
        { id: "c1", text: "Les function calls sont configurées dans Vapi avec les bons paramètres" },
        { id: "c2", text: "Le webhook n8n/Make reçoit les données correctement" },
        { id: "c3", text: "Les données sont stockées dans Supabase" },
        { id: "c4", text: "Un RDV est créé dans Google Calendar automatiquement" },
        { id: "c5", text: "Un SMS/email de confirmation est envoyé au client" },
        { id: "c6", text: "L'équipe est notifiée sur Slack" },
        { id: "c7", text: "La mention RGPD est présente au début de l'appel" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis le workflow post-appel</h3><p>En utilisant n8n (ou Make), crée un workflow complet qui :</p><ol><li><strong>Reçoit un webhook</strong> avec ces données simulées : <code>{ name: 'Jean Dupont', date: '2025-03-15', time: '14:00', phone: '+33612345678', purpose: 'consultation' }</code></li><li><strong>Insère les données</strong> dans une table Supabase 'appointments'</li><li><strong>Crée un événement</strong> Google Calendar avec les détails du RDV</li><li><strong>Envoie une notification</strong> Slack ou email avec un résumé</li></ol><p>Teste le workflow en envoyant une requête HTTP manuelle au webhook. Vérifie que chaque étape fonctionne. Capture des screenshots du workflow fonctionnel — c'est ton portfolio pour tes futurs clients.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence entre un agent vocal simple et un système vocal complet ?", options: JSON.stringify(["La qualité de la voix", "Les actions automatiques déclenchées après l'appel (stockage, calendrier, notifications)", "Le nombre de langues supportées", "La durée maximale de l'appel"]), correctAnswer: "Les actions automatiques déclenchées après l'appel (stockage, calendrier, notifications)", explanation: "Un agent vocal simple répond au téléphone. Un système vocal complet stocke les données, crée des RDV, envoie des confirmations et notifie l'équipe. C'est cette intégration qui justifie un prix de 3 000€ – 5 000€ au lieu de 500€." },
      { type: "true_false", question: "Les function calls de Vapi ne peuvent être utilisées qu'après la fin de l'appel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les function calls peuvent être déclenchées pendant l'appel, en temps réel. Par exemple, l'agent peut vérifier des disponibilités dans Google Calendar pendant que le client est en ligne." },
      { type: "mcq", question: "Quelle obligation RGPD s'applique aux agents vocaux IA en Europe ?", options: JSON.stringify(["Aucune, la Voice AI est exemptée du RGPD", "Informer l'appelant que l'appel est traité par une IA et avoir une politique de confidentialité", "Obtenir un consentement écrit avant chaque appel", "Enregistrer tous les appels pendant 10 ans"]), correctAnswer: "Informer l'appelant que l'appel est traité par une IA et avoir une politique de confidentialité", explanation: "En Europe, tu dois informer l'appelant que l'appel est traité par un assistant virtuel (mention au début de l'appel) et t'assurer que le client a une politique de confidentialité couvrant le traitement des données personnelles." },
      { type: "mcq", question: "Quel outil est recommandé pour stocker les données d'appel ?", options: JSON.stringify(["Un fichier Excel sur le bureau", "Supabase avec une table structurée", "Un document Google Docs partagé", "La mémoire de l'agent vocal"]), correctAnswer: "Supabase avec une table structurée", explanation: "Supabase offre une base de données PostgreSQL avec une API REST intégrée, parfaite pour stocker les données d'appel de manière structurée et les requêter facilement depuis n8n ou ton application." },
      { type: "true_false", question: "Le webhook end-of-call de Vapi fournit automatiquement la transcription complète de l'appel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vapi envoie un webhook de fin d'appel qui contient la transcription complète, la durée, les métadonnées et le résumé de l'appel. Tu peux le configurer pour alimenter automatiquement ta base de données." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 11,
    title: "Atelier : agent de prise de RDV pour un cabinet médical",
    slug: "atelier-agent-rdv-cabinet-medical",
    duration: "30 min",
    description: "Construire de A à Z un agent vocal complet pour un cabinet médical : réponse aux appels, vérification des disponibilités, prise de RDV, envoi de SMS de confirmation. Un projet portfolio prêt à montrer à tes clients.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le brief client : Cabinet du Dr. Martin" },
      { id: "5-2", type: "text", html: "<p>Le Dr. Martin est médecin généraliste à Bordeaux. Son cabinet reçoit <strong>60 à 80 appels par jour</strong>. Sa secrétaire est débordée : entre les appels, l'accueil physique des patients, et la gestion administrative, elle ne peut pas tout faire. Résultat : des appels manqués, des patients frustrés, et des créneaux vides parce que les gens n'arrivent pas à joindre le cabinet.</p><p>Le Dr. Martin te demande un <strong>agent vocal qui gère les appels de prise de RDV</strong>. Voici son cahier des charges :</p>" },
      { id: "5-3", type: "steps", steps: [
        { title: "Accueil et identification", description: "L'agent décroche, se présente comme l'assistant du cabinet du Dr. Martin, et demande au patient son nom et le motif de l'appel." },
        { title: "Prise de RDV", description: "Si le patient veut un RDV, l'agent vérifie les disponibilités et propose des créneaux. Le cabinet est ouvert du lundi au vendredi, 8h30-12h30 et 14h-18h30. Créneaux de 20 minutes." },
        { title: "Confirmation", description: "Une fois le créneau choisi, l'agent confirme le RDV et envoie un SMS de confirmation au patient." },
        { title: "Questions fréquentes", description: "L'agent doit aussi pouvoir répondre aux questions fréquentes : adresse, parking, documents à apporter, délai pour les résultats d'analyse." },
        { title: "Cas non gérés", description: "Pour les urgences médicales, l'agent doit orienter vers le 15 (SAMU). Pour les questions médicales, l'agent ne donne aucun conseil et propose un RDV." },
      ]},
      { id: "5-4", type: "callout", variant: "warning", html: "<strong>Règle absolue :</strong> un agent vocal médical ne doit JAMAIS donner de conseil médical, diagnostiquer, ou suggérer un traitement. Si un patient décrit des symptômes, l'agent propose un RDV. Si c'est une urgence, il redirige vers le 15. Mets cette règle en gras dans ton prompt." },
      { id: "5-5", type: "separator", style: "dots" },

      { id: "5-6", type: "heading", level: 2, text: "Étape 1 — Le prompt système complet" },
      { id: "5-7", type: "text", html: "<p>Voici la structure du prompt que tu vas écrire pour cet agent. Chaque section est essentielle :</p><ul><li><strong>Identité :</strong> 'Tu es Claire, l'assistante virtuelle du cabinet du Dr. Martin, médecin généraliste à Bordeaux.'</li><li><strong>Ton :</strong> 'Tu es douce, rassurante, professionnelle. Tu vouvoies toujours les patients. Tu parles lentement et clairement.'</li><li><strong>Objectif :</strong> 'Ta mission principale est la prise de RDV. Tu dois récupérer : nom complet, date de naissance (pour identifier le patient), motif de consultation, et créneau souhaité.'</li><li><strong>Horaires :</strong> Lundi-vendredi, 8h30-12h30 et 14h-18h30. Créneaux de 20 min. Pas de consultation le mercredi après-midi.</li><li><strong>Infos pratiques :</strong> Adresse : 15 rue des Lilas, 33000 Bordeaux. Parking gratuit derrière le bâtiment. Apporter carte vitale et carte de mutuelle. Résultats d'analyse sous 48-72h.</li><li><strong>Garde-fous :</strong> Jamais de conseil médical. Urgences = 15. Questions complexes = transférer à la secrétaire.</li></ul>" },

      { id: "5-8", type: "separator", style: "line" },
      { id: "5-9", type: "heading", level: 2, text: "Étape 2 — Les function calls pour la logique métier" },
      { id: "5-10", type: "text", html: "<p>Ton agent a besoin de deux function calls principales :</p>" },
      { id: "5-11", type: "comparison", headers: ["Function", "Paramètres", "Ce qu'elle fait", "Endpoint"], rows: [
        { cells: ["check_availability", "date (string)", "Vérifie les créneaux disponibles pour une date donnée dans Google Calendar", "Webhook n8n qui query Google Calendar API"] },
        { cells: ["book_appointment", "patient_name, date_of_birth, date, time, phone, reason", "Crée le RDV dans Google Calendar, stocke dans Supabase, envoie SMS de confirmation", "Webhook n8n qui déclenche le workflow complet"] },
      ]},
      { id: "5-12", type: "text", html: "<p>La function <code>check_availability</code> est appelée <strong>pendant l'appel</strong> : le patient dit 'je voudrais un RDV mardi', l'agent appelle la function, récupère les créneaux libres, et les propose au patient en temps réel. C'est magique.</p>" },

      { id: "5-13", type: "separator", style: "line" },
      { id: "5-14", type: "heading", level: 2, text: "Étape 3 — Le workflow n8n complet" },
      { id: "5-15", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Webhook : book_appointment", description: "Reçoit : patient_name, date_of_birth, date, time, phone, reason" },
        { id: "n2", label: "Supabase : Insert", description: "Table appointments : stocke toutes les infos du RDV avec statut 'confirmed'" },
        { id: "n3", label: "Google Calendar : Create Event", description: "Crée l'événement avec titre '[Nom patient] - [Motif]', durée 20 min" },
        { id: "n4", label: "Twilio : Send SMS", description: "SMS au patient : 'Votre RDV avec le Dr. Martin est confirmé le [date] à [heure]. 15 rue des Lilas, Bordeaux. Pensez à votre carte vitale.'" },
        { id: "n5", label: "Slack : Notify", description: "Message dans #cabinet : 'Nouveau RDV : [nom] le [date] à [heure] - Motif : [motif]'" },
      ]},

      { id: "5-16", type: "separator", style: "line" },
      { id: "5-17", type: "heading", level: 2, text: "Étape 4 — Tests et scénarios de validation" },
      { id: "5-18", type: "text", html: "<p>Avant de livrer cet agent au Dr. Martin, tu dois le tester avec ces <strong>scénarios critiques</strong>. Si un seul échoue, l'agent n'est pas prêt :</p>" },
      { id: "5-19", type: "checklist", title: "Scénarios de test obligatoires", items: [
        { id: "t1", text: "RDV normal : le patient demande un RDV mardi à 10h, l'agent vérifie la dispo, confirme, envoie le SMS" },
        { id: "t2", text: "Créneau indisponible : le patient demande un créneau pris, l'agent propose des alternatives" },
        { id: "t3", text: "Mercredi après-midi : le patient demande mercredi à 15h, l'agent explique que le cabinet est fermé et propose un autre créneau" },
        { id: "t4", text: "Urgence médicale : le patient décrit des douleurs thoraciques, l'agent redirige immédiatement vers le 15" },
        { id: "t5", text: "Question médicale : le patient demande 'est-ce que je dois prendre du Doliprane ?', l'agent refuse de donner un avis médical" },
        { id: "t6", text: "Question pratique : le patient demande l'adresse ou les documents à apporter" },
        { id: "t7", text: "Hors sujet : le patient parle de la météo ou pose une question sans rapport, l'agent recentre poliment" },
      ]},

      { id: "5-20", type: "callout", variant: "success", html: "<strong>Ce projet est ton portfolio.</strong> Un agent de prise de RDV pour un cabinet médical, c'est un use case concret, sérieux, et impressionnant. Tu peux le montrer à n'importe quel prospect dans le secteur médical, dentaire, kiné, ou tout professionnel de santé qui reçoit des appels." },

      { id: "5-21", type: "separator", style: "dots" },
      { id: "5-22", type: "heading", level: 2, text: "Combien facturer ce projet" },
      { id: "5-23", type: "comparison", headers: ["Élément", "Prix recommandé", "Justification"], rows: [
        { cells: ["Setup agent vocal (prompt, voix, tests)", "1 500€ – 2 000€", "3-5 jours de travail, incluant les tests et ajustements"] },
        { cells: ["Intégrations (Calendar, SMS, Supabase, Slack)", "1 000€ – 1 500€", "Workflow n8n complet avec gestion d'erreurs"] },
        { cells: ["Numéro de téléphone + maintenance", "250€ – 400€/mois", "Hébergement, minutes d'appel, maintenance, ajustements"] },
        { cells: ["TOTAL setup", "2 500€ – 3 500€", "One-shot, payé à la livraison"] },
        { cells: ["TOTAL mensuel récurrent", "250€ – 400€/mois", "Revenu récurrent stable"] },
      ]},
      { id: "5-24", type: "text", html: "<p>Compare ça au coût d'une secrétaire supplémentaire (2 500€ – 3 000€/mois). Le Dr. Martin rentabilise son investissement <strong>dès le premier mois</strong>. Et toi, tu as un client qui te paie tous les mois pour un système qui tourne tout seul.</p>" },

      { id: "5-25", type: "quiz-inline", question: "Que doit faire l'agent vocal quand un patient décrit des symptômes graves ?", options: [
        { id: "a", text: "Donner un premier diagnostic basé sur les symptômes décrits" },
        { id: "b", text: "Proposer un RDV en urgence avec le médecin" },
        { id: "c", text: "Rediriger immédiatement vers le 15 (SAMU) et ne donner aucun conseil médical" },
      ], correctId: "c", explanation: "Un agent vocal médical ne doit JAMAIS diagnostiquer ou conseiller. En cas de symptômes graves (douleur thoracique, difficulté respiratoire, etc.), l'agent redirige immédiatement vers le 15. C'est une règle absolue à mettre en gras dans le prompt." },
    ]),
    exercise: "<h3>Atelier : Construis l'agent du Dr. Martin de A à Z</h3><p>C'est l'exercice le plus complet du module. Tu vas construire l'intégralité du système :</p><ol><li><strong>Crée l'assistant dans Vapi</strong> avec le prompt système complet (identité, ton, objectif, horaires, infos pratiques, garde-fous)</li><li><strong>Configure les function calls</strong> : <code>check_availability</code> et <code>book_appointment</code></li><li><strong>Construis le workflow n8n</strong> avec les 5 nodes : webhook, Supabase insert, Google Calendar create, Twilio SMS, Slack notification</li><li><strong>Crée la table Supabase</strong> 'appointments' avec toutes les colonnes nécessaires</li><li><strong>Teste les 7 scénarios</strong> listés dans la leçon et note les résultats</li><li><strong>Ajuste le prompt</strong> jusqu'à ce que tous les scénarios passent</li></ol><p>Quand tout fonctionne, fais une <strong>vidéo de démo de 2 minutes</strong> : filme ton écran, appelle l'agent, montre le RDV qui se crée dans Google Calendar et le SMS qui arrive. C'est ta pièce portfolio la plus puissante.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la règle absolue pour un agent vocal dans le secteur médical ?", options: JSON.stringify(["Toujours parler lentement pour les patients âgés", "Ne jamais donner de conseil médical, diagnostic ou suggestion de traitement", "Demander le numéro de sécurité sociale à chaque appel", "Enregistrer l'intégralité de l'appel pour le dossier médical"]), correctAnswer: "Ne jamais donner de conseil médical, diagnostic ou suggestion de traitement", explanation: "C'est la règle absolue. Un agent vocal n'est pas un médecin. Il prend des RDV, répond aux questions pratiques, et redirige vers le 15 en cas d'urgence. Jamais de conseil médical, même si le patient insiste." },
      { type: "mcq", question: "Quelle function call est utilisée PENDANT l'appel en temps réel ?", options: JSON.stringify(["book_appointment", "check_availability", "send_sms", "end_call"]), correctAnswer: "check_availability", explanation: "check_availability est appelée pendant l'appel : le patient dit quand il veut venir, l'agent vérifie les dispos dans Google Calendar en temps réel et propose les créneaux libres. C'est cette réactivité qui impressionne." },
      { type: "true_false", question: "Un agent vocal pour un cabinet médical peut coûter 2 500€ – 3 500€ en setup.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le setup complet (agent vocal + intégrations Calendar/SMS/Supabase/Slack + tests) se facture entre 2 500€ et 3 500€. C'est justifié par la valeur apportée : le cabinet économise le coût d'une secrétaire supplémentaire dès le premier mois." },
      { type: "mcq", question: "Que doit faire l'agent si un patient demande un RDV le mercredi après-midi ?", options: JSON.stringify(["Prendre le RDV normalement", "Expliquer que le cabinet est fermé le mercredi après-midi et proposer un autre créneau", "Transférer l'appel à la secrétaire", "Raccrocher poliment"]), correctAnswer: "Expliquer que le cabinet est fermé le mercredi après-midi et proposer un autre créneau", explanation: "L'agent doit connaître les horaires du cabinet et gérer ce cas avec naturel : informer que le mercredi après-midi n'est pas disponible et proposer des alternatives (jeudi matin, vendredi, etc.)." },
      { type: "mcq", question: "Pourquoi faire une vidéo de démo de 2 minutes est important ?", options: JSON.stringify(["Pour la publier sur YouTube et devenir viral", "C'est la pièce portfolio la plus puissante pour convaincre tes futurs clients dans le secteur médical", "C'est obligatoire pour valider la formation", "Pour envoyer au Dr. Martin comme facture"]), correctAnswer: "C'est la pièce portfolio la plus puissante pour convaincre tes futurs clients dans le secteur médical", explanation: "Une vidéo montrant ton agent qui décroche, prend un RDV, et déclenche les actions (Calendar, SMS) est 100x plus convaincante qu'un PowerPoint. Tout professionnel de santé qui voit ça comprend immédiatement la valeur." },
    ],
  },
];
