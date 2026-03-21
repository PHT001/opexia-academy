// ═══════════════════════════════════════════════════
// MODULE 9 — Chatbots multi-canal
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_9_MULTICHANNEL_LESSONS = [
  // ─── LEÇON 1 : Pourquoi le multi-canal change tout ───
  {
    order: 1,
    module: 9,
    title: "Pourquoi le multi-canal change tout",
    slug: "multichannel-change-tout",
    duration: "15 min",
    description: "Les clients de tes clients sont sur WhatsApp et Instagram, pas sur le site web. Comprendre les stats d'utilisation, pourquoi un widget web ne suffit pas, et les opportunités business du multi-canal.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Tes clients ne sont pas sur ton site web" },
      { id: "1-2", type: "text", html: "<p>Pose-toi la question : quand est-ce que <strong>toi</strong>, tu vas sur le site web d'une entreprise pour poser une question ? Presque jamais. Tu envoies un message sur WhatsApp, un DM sur Instagram, ou tu utilises Messenger. Et tes clients font exactement pareil.</p><p>Le problème, c'est que la majorité des chatbots sont des <strong>widgets web</strong> coincés en bas à droite d'un site. Or, seulement 2 à 5% des visiteurs cliquent dessus. Pendant ce temps, les conversations réelles se passent sur les messageries.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Chiffres clés :</strong> WhatsApp compte plus de 2 milliards d'utilisateurs actifs mensuels. Instagram dépasse les 2 milliards. Messenger approche les 1 milliard. Le taux d'ouverture d'un message WhatsApp est de 98%, contre 20% pour un email." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les limites du widget web classique" },
      { id: "1-6", type: "comparison", headers: ["Critère", "Widget web", "Messageries (WhatsApp/Insta)"], rows: [
        { cells: ["Taux d'engagement", "2-5% des visiteurs", "60-80% de réponse"] },
        { cells: ["Disponibilité", "Uniquement sur le site", "24/7 dans la poche du client"] },
        { cells: ["Historique", "Perdu si le visiteur quitte", "Conversation persistante"] },
        { cells: ["Notifications", "Aucune (sauf email)", "Push natif du téléphone"] },
        { cells: ["Confiance", "Anonyme, impersonnel", "Canal familier et personnel"] },
      ]},
      { id: "1-7", type: "text", html: "<p>Le widget web n'est pas inutile — il a sa place pour les visiteurs du site. Mais se limiter à ça, c'est comme avoir une boutique sans vitrine : tu rates <strong>90% des opportunités</strong> de conversation.</p>" },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Les opportunités business du multi-canal" },
      { id: "1-10", type: "steps", steps: [
        { title: "Support client automatisé 24/7", description: "Un bot WhatsApp qui répond aux questions fréquentes — suivi de commande, horaires, tarifs — sans intervention humaine. Économie : 1 à 2 salariés support." },
        { title: "Qualification de leads via Instagram", description: "Quand quelqu'un commente ou envoie un DM, le bot engage la conversation, qualifie le lead et prend un rendez-vous automatiquement." },
        { title: "Réservations et prises de rendez-vous", description: "Restaurants, salons de coiffure, coachs — le client réserve directement dans WhatsApp sans quitter l'app." },
        { title: "Relances et notifications proactives", description: "Rappels de rendez-vous, confirmations de commande, promotions ciblées — avec un taux d'ouverture de 98%." },
      ]},
      { id: "1-11", type: "callout", variant: "success", html: "<strong>Opportunité freelance :</strong> Un bot multi-canal (WhatsApp + Instagram + web) se vend entre 3 000€ et 8 000€. C'est 2 à 3 fois plus cher qu'un simple widget web, parce que la valeur perçue est bien supérieure." },

      { id: "1-12", type: "heading", level: 3, text: "Le client type qui a besoin de multi-canal" },
      { id: "1-13", type: "checklist", title: "Checklist — Le client est-il un bon fit multi-canal ?", items: [
        { id: "c1", text: "Il reçoit beaucoup de DM Instagram ou messages WhatsApp" },
        { id: "c2", text: "Son audience est B2C ou petit B2B local" },
        { id: "c3", text: "Il perd des leads parce qu'il répond trop tard aux messages" },
        { id: "c4", text: "Il fait de la prise de rendez-vous ou de la réservation" },
        { id: "c5", text: "Il a une communauté active sur les réseaux sociaux" },
      ]},
    ]),
    exercise: "<h3>Exercice : Audit multi-canal d'un business</h3><p>Choisis un business local (restaurant, salon, coach, boutique) — réel ou fictif. (1) Liste tous les canaux où ses clients le contactent aujourd'hui. (2) Identifie les 3 principales demandes qu'il reçoit par message. (3) Pour chaque demande, explique comment un bot pourrait y répondre automatiquement. (4) Estime le temps gagné par semaine et la valeur en euros.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le taux d'ouverture moyen d'un message WhatsApp ?", options: JSON.stringify(["20%", "45%", "75%", "98%"]), correctAnswer: "98%", explanation: "WhatsApp a un taux d'ouverture de 98%, contre environ 20% pour l'email. C'est ce qui rend ce canal si puissant pour la communication client." },
      { type: "true_false", question: "Un widget web classique engage généralement 2 à 5% des visiteurs d'un site.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Seulement 2 à 5% des visiteurs cliquent sur un widget de chat web. La majorité préfère les canaux de messagerie qu'ils utilisent déjà au quotidien." },
      { type: "mcq", question: "Quel est l'avantage principal des messageries par rapport à un widget web ?", options: JSON.stringify(["Elles sont gratuites", "L'historique de conversation est persistant et accessible depuis le téléphone", "Elles ont un meilleur design", "Elles sont plus rapides à développer"]), correctAnswer: "L'historique de conversation est persistant et accessible depuis le téléphone", explanation: "Contrairement au widget web où la conversation est perdue quand le visiteur quitte le site, les messageries gardent l'historique et permettent des notifications push." },
      { type: "mcq", question: "Combien peut se vendre un bot multi-canal (WhatsApp + Instagram + web) ?", options: JSON.stringify(["500-1 000€", "1 000-2 000€", "3 000-8 000€", "15 000-30 000€"]), correctAnswer: "3 000-8 000€", explanation: "Un bot multi-canal se vend 2 à 3 fois plus cher qu'un simple widget web, entre 3 000€ et 8 000€, car la valeur perçue et l'impact business sont bien supérieurs." },
      { type: "mcq", question: "Quel type de client a le plus besoin d'un bot multi-canal ?", options: JSON.stringify(["Une grande entreprise industrielle B2B", "Un business B2C local qui reçoit beaucoup de DM et perd des leads", "Un développeur freelance", "Une administration publique"]), correctAnswer: "Un business B2C local qui reçoit beaucoup de DM et perd des leads", explanation: "Les business B2C locaux (restaurants, salons, coachs) qui reçoivent beaucoup de messages sur Instagram et WhatsApp sont les clients idéaux pour un bot multi-canal." },
    ],
  },

  // ─── LEÇON 2 : WhatsApp Business API : setup complet ───
  {
    order: 2,
    module: 9,
    title: "WhatsApp Business API : setup complet",
    slug: "whatsapp-business-api-setup",
    duration: "25 min",
    description: "Meta Business Suite, WhatsApp Business API via des providers (Twilio, 360dialog). Configuration, templates de messages, les règles de Meta. Comment envoyer et recevoir des messages.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "WhatsApp Business App vs WhatsApp Business API" },
      { id: "2-2", type: "text", html: "<p>Première confusion à lever : il existe <strong>deux produits WhatsApp</strong> pour les entreprises, et ils n'ont rien à voir.</p><p>L'app <strong>WhatsApp Business</strong> (gratuite) est faite pour les petits commerces qui répondent manuellement. L'<strong>API WhatsApp Business</strong> est faite pour automatiser — c'est elle qui nous intéresse pour construire des bots.</p>" },
      { id: "2-3", type: "comparison", headers: ["Critère", "WhatsApp Business App", "WhatsApp Business API"], rows: [
        { cells: ["Prix", "Gratuit", "Payant (par conversation)"] },
        { cells: ["Automatisation", "Réponses rapides basiques", "Automatisation complète via code"] },
        { cells: ["Interface", "App mobile", "Pas d'interface — tout se fait par API"] },
        { cells: ["Volume", "1 téléphone, limité", "Illimité, multi-agents"] },
        { cells: ["Intégration", "Aucune", "CRM, Supabase, n'importe quel backend"] },
        { cells: ["Accès", "Téléchargement direct", "Via un BSP (Business Solution Provider)"] },
      ]},
      { id: "2-4", type: "callout", variant: "warning", html: "<strong>Important :</strong> Tu ne peux PAS accéder à l'API WhatsApp directement. Tu dois passer par un BSP (Business Solution Provider) approuvé par Meta. Les plus utilisés : Twilio, 360dialog, MessageBird, Vonage." },
      { id: "2-5", type: "separator", style: "dots" },

      { id: "2-6", type: "heading", level: 2, text: "Setup étape par étape avec Twilio" },
      { id: "2-7", type: "steps", steps: [
        { title: "Créer un compte Meta Business Suite", description: "Va sur business.facebook.com et crée un compte business. Tu auras besoin du nom de l'entreprise, de l'adresse, et d'un document de vérification (extrait Kbis ou équivalent)." },
        { title: "Créer un compte Twilio", description: "Inscris-toi sur twilio.com. Le plan gratuit inclut un sandbox WhatsApp pour tester. Tu recevras un Account SID et un Auth Token — garde-les précieusement." },
        { title: "Connecter WhatsApp à Twilio", description: "Dans la console Twilio, va dans Messaging > WhatsApp. Connecte ton compte Meta Business. Twilio te guidera pour vérifier ton numéro de téléphone dédié." },
        { title: "Configurer le webhook", description: "Crée une route API dans ton backend (ex: /api/whatsapp/webhook) et configure-la dans Twilio. Chaque message reçu sera envoyé en POST à cette URL." },
        { title: "Tester avec le sandbox", description: "Twilio fournit un numéro sandbox pour tester sans attendre la validation Meta. Envoie 'join <sandbox-code>' au numéro pour commencer." },
      ]},
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Les templates de messages — obligatoires" },
      { id: "2-10", type: "text", html: "<p>Meta impose une règle stricte : tu ne peux envoyer un message en premier à un utilisateur que via un <strong>template pré-approuvé</strong>. Les messages libres ne sont autorisés que dans une <strong>fenêtre de 24h</strong> après le dernier message du client.</p><p>Concrètement :</p><ul><li><strong>Le client t'écrit en premier →</strong> Tu as 24h pour répondre librement (texte, images, boutons).</li><li><strong>Tu veux écrire en premier →</strong> Tu dois utiliser un template approuvé par Meta (confirmation, rappel, etc.).</li><li><strong>Après 24h sans réponse du client →</strong> Retour aux templates uniquement.</li></ul>" },
      { id: "2-11", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Prépare tes templates dès le début du projet. La validation par Meta prend 24 à 48h. Les catégories autorisées : utility (confirmations, rappels), authentication (codes OTP), marketing (promos — plus cher et plus strict)." },

      { id: "2-12", type: "heading", level: 3, text: "Exemple de code : recevoir et répondre" },
      { id: "2-13", type: "text", html: "<p>Voici la logique de base pour recevoir un message WhatsApp via le webhook Twilio et y répondre :</p><pre><code>// Route webhook — POST /api/whatsapp/webhook\nexport async function POST(req: Request) {\n  const formData = await req.formData();\n  const from = formData.get('From') as string; // ex: whatsapp:+33612345678\n  const body = formData.get('Body') as string; // le message du client\n\n  // Appeler ton IA pour générer une réponse\n  const aiResponse = await generateResponse(body, from);\n\n  // Répondre via Twilio\n  const twiml = `&lt;Response&gt;&lt;Message&gt;${aiResponse}&lt;/Message&gt;&lt;/Response&gt;`;\n  return new Response(twiml, {\n    headers: { 'Content-Type': 'text/xml' },\n  });\n}</code></pre>" },
      { id: "2-14", type: "callout", variant: "info", html: "<strong>Coût :</strong> Meta facture par conversation (pas par message). Une conversation dure 24h. Prix : ~0.05€ en utility, ~0.08€ en marketing pour la France. Twilio ajoute sa marge (~0.005$/message). Budget typique pour un petit client : 20-50€/mois." },
    ]),
    exercise: "<h3>Exercice : Configurer le sandbox WhatsApp</h3><p>(1) Crée un compte Twilio gratuit et accède au sandbox WhatsApp. (2) Envoie un message au numéro sandbox depuis ton téléphone. (3) Crée une route webhook simple (Next.js ou Express) qui reçoit le message et renvoie une réponse statique 'Merci pour ton message !'. (4) Teste que le message de réponse arrive bien sur ton WhatsApp. (5) Bonus : connecte la réponse à l'API OpenAI pour générer une réponse intelligente.</p>",
    quiz: [
      { type: "mcq", question: "Comment accède-t-on à l'API WhatsApp Business ?", options: JSON.stringify(["En téléchargeant l'app WhatsApp Business", "Via un BSP (Business Solution Provider) approuvé par Meta", "En payant un abonnement mensuel à WhatsApp", "En envoyant un email à Meta"]), correctAnswer: "Via un BSP (Business Solution Provider) approuvé par Meta", explanation: "L'API WhatsApp Business n'est pas accessible directement. Il faut passer par un BSP comme Twilio, 360dialog ou MessageBird, qui sont des intermédiaires approuvés par Meta." },
      { type: "mcq", question: "Pendant combien de temps peux-tu répondre librement après un message d'un client ?", options: JSON.stringify(["1 heure", "12 heures", "24 heures", "72 heures"]), correctAnswer: "24 heures", explanation: "Meta autorise les messages libres (hors template) uniquement dans une fenêtre de 24 heures après le dernier message du client. Après, tu dois utiliser un template approuvé." },
      { type: "true_false", question: "L'app WhatsApp Business gratuite permet d'automatiser complètement un chatbot.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'app WhatsApp Business ne permet que des réponses rapides basiques. Pour une automatisation complète avec un bot IA, il faut l'API WhatsApp Business via un BSP." },
      { type: "mcq", question: "Quel est le rôle du webhook dans l'intégration WhatsApp ?", options: JSON.stringify(["Envoyer des templates à Meta pour validation", "Recevoir les messages entrants en temps réel sur ton serveur", "Créer le compte Meta Business", "Gérer la facturation Twilio"]), correctAnswer: "Recevoir les messages entrants en temps réel sur ton serveur", explanation: "Le webhook est une URL sur ton serveur que Twilio appelle en POST à chaque message reçu. C'est le point d'entrée de ton bot — il reçoit le message, le traite, et renvoie une réponse." },
      { type: "mcq", question: "Combien de temps prend la validation d'un template de message par Meta ?", options: JSON.stringify(["Instantané", "24 à 48 heures", "1 à 2 semaines", "1 mois"]), correctAnswer: "24 à 48 heures", explanation: "Les templates de messages doivent être soumis à Meta pour validation, ce qui prend généralement 24 à 48 heures. Il faut les préparer dès le début du projet pour ne pas bloquer le développement." },
    ],
  },

  // ─── LEÇON 3 : Instagram DM & Messenger : automatiser les conversations ───
  {
    order: 3,
    module: 9,
    title: "Instagram DM & Messenger : automatiser les conversations",
    slug: "instagram-dm-messenger-automatisation",
    duration: "25 min",
    description: "API Instagram, Messenger Platform. Répondre automatiquement aux DM, qualifier les leads via Instagram. Les limites et les best practices.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Instagram DM : la mine d'or sous-exploitée" },
      { id: "3-2", type: "text", html: "<p>Instagram est devenu un canal de vente massif. Les utilisateurs découvrent un produit dans le feed, cliquent sur le profil, et <strong>envoient un DM</strong> pour poser une question. Le problème ? La plupart des business répondent en 4 à 12 heures. À ce moment-là, le client est déjà parti chez le concurrent.</p><p>Un bot Instagram qui répond en <strong>moins de 30 secondes</strong>, qualifie le lead et propose un rendez-vous, c'est un game changer pour n'importe quel business B2C.</p>" },
      { id: "3-3", type: "callout", variant: "success", html: "<strong>Stat business :</strong> Les entreprises qui répondent dans les 5 premières minutes ont 21 fois plus de chances de qualifier un lead que celles qui répondent après 30 minutes (source : Harvard Business Review)." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Setup de l'API Instagram Messaging" },
      { id: "3-6", type: "steps", steps: [
        { title: "Passer en compte professionnel Instagram", description: "Le compte Instagram du client doit être un compte professionnel (Business ou Creator) et connecté à une Page Facebook. C'est obligatoire pour accéder à l'API." },
        { title: "Créer une app dans Meta for Developers", description: "Va sur developers.facebook.com, crée une app de type 'Business'. Ajoute les produits 'Messenger' et 'Instagram'. Tu recevras un App ID et un App Secret." },
        { title: "Configurer les permissions", description: "Demande les permissions : instagram_manage_messages, pages_messaging, pages_manage_metadata. Pour la production, ces permissions nécessitent une revue par Meta (App Review)." },
        { title: "Générer un token d'accès", description: "Génère un Page Access Token longue durée via le Graph API Explorer. Ce token permet à ton backend d'envoyer et recevoir des messages au nom de la page." },
        { title: "Configurer le webhook Instagram", description: "Crée une route /api/instagram/webhook sur ton serveur. Configure-la dans l'app Meta avec les abonnements : messages, messaging_postbacks. Meta enverra un GET de vérification puis des POST pour chaque message." },
      ]},
      { id: "3-7", type: "callout", variant: "warning", html: "<strong>Attention App Review :</strong> Meta exige une revue de ton app avant la mise en production. Prépare une vidéo de démonstration, une politique de confidentialité, et une explication claire de l'usage. Délai : 3 à 10 jours ouvrés. Anticipe !" },
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Messenger Platform : le canal Facebook" },
      { id: "3-10", type: "text", html: "<p>Messenger utilise la même infrastructure que l'API Instagram — si tu as configuré l'un, l'autre est presque gratuit à ajouter. La différence principale : Messenger est lié à une <strong>Page Facebook</strong>, pas à un profil Instagram.</p><p>L'avantage de Messenger : tu peux utiliser des <strong>boutons, carrousels, réponses rapides</strong> et des <strong>menus persistants</strong>. C'est plus riche qu'Instagram en termes d'UI.</p>" },
      { id: "3-11", type: "comparison", headers: ["Fonctionnalité", "Instagram DM", "Messenger"], rows: [
        { cells: ["Boutons interactifs", "Limité (Quick Replies)", "Complet (boutons, carrousels, listes)"] },
        { cells: ["Menu persistant", "Non", "Oui — menu toujours visible"] },
        { cells: ["Ice Breakers", "Oui — suggestions au premier contact", "Oui via Get Started + greeting"] },
        { cells: ["Paiement intégré", "Non", "Oui dans certains pays"] },
        { cells: ["Audience", "Plus jeune, B2C visuel", "Plus large, groupes et communautés"] },
      ]},

      { id: "3-12", type: "heading", level: 3, text: "Répondre à un DM Instagram via l'API" },
      { id: "3-13", type: "text", html: "<pre><code>// Webhook POST — message Instagram reçu\nexport async function POST(req: Request) {\n  const data = await req.json();\n  const entry = data.entry?.[0];\n  const messaging = entry?.messaging?.[0];\n\n  if (messaging?.message?.text) {\n    const senderId = messaging.sender.id;\n    const messageText = messaging.message.text;\n\n    // Générer une réponse IA\n    const reply = await generateAIResponse(messageText);\n\n    // Envoyer la réponse via Graph API\n    await fetch(\n      `https://graph.facebook.com/v18.0/me/messages?access_token=${PAGE_TOKEN}`,\n      {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({\n          recipient: { id: senderId },\n          message: { text: reply },\n        }),\n      }\n    );\n  }\n  return new Response('OK', { status: 200 });\n}</code></pre>" },

      { id: "3-14", type: "checklist", title: "Best practices — Bots Instagram & Messenger", items: [
        { id: "c1", text: "Toujours informer l'utilisateur qu'il parle à un bot (obligation légale)" },
        { id: "c2", text: "Proposer un transfert vers un humain si le bot ne peut pas répondre" },
        { id: "c3", text: "Répondre en moins de 30 secondes pour maximiser l'engagement" },
        { id: "c4", text: "Ne pas spammer — respecter la fenêtre de 24h de Meta" },
        { id: "c5", text: "Utiliser les Ice Breakers pour guider les premières interactions" },
        { id: "c6", text: "Tester sur un compte de test avant de déployer en production" },
      ]},
    ]),
    exercise: "<h3>Exercice : Bot de qualification Instagram</h3><p>(1) Crée une app Meta for Developers en mode test. (2) Configure le webhook pour recevoir les messages Instagram. (3) Écris un flow de qualification en 4 messages : salutation → question sur le besoin → question sur le budget → proposition de rendez-vous avec un lien Calendly. (4) Teste le flow complet avec un compte de test Instagram. (5) Documente les étapes pour pouvoir le reproduire pour un client.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi un bot Instagram est-il si efficace pour qualifier des leads ?", options: JSON.stringify(["Parce qu'Instagram est gratuit", "Parce que les utilisateurs envoient des DM après avoir découvert un produit et attendent une réponse rapide", "Parce que Meta offre des crédits publicitaires", "Parce qu'Instagram a plus de fonctionnalités que WhatsApp"]), correctAnswer: "Parce que les utilisateurs envoient des DM après avoir découvert un produit et attendent une réponse rapide", explanation: "Les utilisateurs Instagram découvrent un produit dans le feed, puis envoient un DM. Un bot qui répond en moins de 30 secondes a 21 fois plus de chances de qualifier le lead qu'une réponse manuelle après 30 minutes." },
      { type: "mcq", question: "Quelle est la condition obligatoire pour accéder à l'API Instagram Messaging ?", options: JSON.stringify(["Avoir plus de 10 000 abonnés", "Avoir un compte professionnel connecté à une Page Facebook", "Payer un abonnement mensuel à Meta", "Avoir un compte Instagram vérifié (badge bleu)"]), correctAnswer: "Avoir un compte professionnel connecté à une Page Facebook", explanation: "L'API Instagram Messaging exige un compte professionnel (Business ou Creator) connecté à une Page Facebook. C'est la condition de base, indépendamment du nombre d'abonnés." },
      { type: "true_false", question: "L'API Messenger et l'API Instagram Messaging utilisent la même infrastructure Meta.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les deux API font partie de la plateforme Meta et partagent la même infrastructure (webhooks, Graph API, tokens). Si tu configures l'une, ajouter l'autre est relativement simple." },
      { type: "mcq", question: "Que faut-il préparer pour passer l'App Review de Meta ?", options: JSON.stringify(["Un paiement de 500€", "Une vidéo de démo, une politique de confidentialité et une explication de l'usage", "Un contrat signé avec Meta", "10 000 utilisateurs de test"]), correctAnswer: "Une vidéo de démo, une politique de confidentialité et une explication de l'usage", explanation: "L'App Review de Meta exige une vidéo démontrant l'utilisation de l'API, une politique de confidentialité publiée, et une explication détaillée de pourquoi tu as besoin de ces permissions." },
      { type: "mcq", question: "Quel avantage a Messenger sur Instagram DM en termes d'interface ?", options: JSON.stringify(["Messenger est plus rapide", "Messenger supporte les boutons, carrousels et menus persistants", "Messenger est gratuit contrairement à Instagram", "Messenger a plus d'utilisateurs"]), correctAnswer: "Messenger supporte les boutons, carrousels et menus persistants", explanation: "Messenger offre une UI plus riche que les DM Instagram : boutons interactifs, carrousels de produits, listes, et un menu persistant toujours visible pour guider l'utilisateur." },
    ],
  },

  // ─── LEÇON 4 : Construire un backend multi-canal unifié ───
  {
    order: 4,
    module: 9,
    title: "Construire un backend multi-canal unifié",
    slug: "backend-multicanal-unifie",
    duration: "25 min",
    description: "Architecture pour gérer tous les canaux depuis un seul backend. Router les messages, stocker les conversations dans Supabase, garder le contexte entre les canaux.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le problème : un backend par canal = un cauchemar" },
      { id: "4-2", type: "text", html: "<p>Si tu crées un webhook séparé pour WhatsApp, un autre pour Instagram, un autre pour Messenger, et un dernier pour le web, tu vas te retrouver avec <strong>4 bases de code différentes</strong> qui font la même chose. Quand tu modifies le prompt IA ou la logique métier, tu dois le faire 4 fois.</p><p>La solution : un <strong>backend unifié</strong> qui normalise tous les messages dans un format commun, les traite avec la même logique IA, et envoie la réponse via le bon canal.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Principe :</strong> Sépare le transport (comment le message arrive) du traitement (ce que tu fais avec). Le canal n'est qu'un tuyau — la logique métier reste la même." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture multi-canal en 3 couches" },
      { id: "4-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Couche Transport", description: "Webhooks WhatsApp, Instagram, Messenger, WebSocket web — chaque canal a son adaptateur qui normalise le message" },
        { id: "n2", label: "Couche Traitement", description: "Logique IA unique : prompt système, mémoire conversationnelle, actions (réservation, FAQ, qualification)" },
        { id: "n3", label: "Couche Réponse", description: "Le routeur envoie la réponse via le bon canal avec le bon format (TwiML pour WhatsApp, Graph API pour Insta/Messenger, WebSocket pour web)" },
        { id: "n4", label: "Base de données Supabase", description: "Conversations, profils clients, historique — partagés entre tous les canaux" },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Le message normalisé : format unifié" },
      { id: "4-9", type: "text", html: "<p>La clé de l'architecture, c'est le <strong>message normalisé</strong>. Chaque adaptateur de canal transforme le message brut en un format commun :</p><pre><code>interface NormalizedMessage {\n  id: string;                    // ID unique du message\n  channel: 'whatsapp' | 'instagram' | 'messenger' | 'web';\n  senderId: string;              // ID unique du client sur ce canal\n  senderName?: string;           // Nom si disponible\n  text: string;                  // Contenu du message\n  timestamp: Date;\n  conversationId: string;        // ID de la conversation en cours\n  metadata?: Record&lt;string, any&gt;; // Données spécifiques au canal\n}\n\ninterface NormalizedResponse {\n  text: string;\n  buttons?: { label: string; payload: string }[];\n  image?: string;\n  quickReplies?: string[];\n}</code></pre>" },
      { id: "4-10", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Stocke le <code>channel</code> et le <code>senderId</code> ensemble comme clé. Ainsi, si un même client te contacte sur WhatsApp ET sur Instagram, tu peux fusionner les conversations quand il s'identifie (email, téléphone)." },

      { id: "4-11", type: "heading", level: 2, text: "Stocker les conversations dans Supabase" },
      { id: "4-12", type: "text", html: "<p>Voici le schéma de base pour stocker les conversations multi-canal dans Supabase :</p><pre><code>-- Table des contacts (un par personne, multi-canal)\nCREATE TABLE contacts (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name TEXT,\n  email TEXT,\n  phone TEXT,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);\n\n-- Table des canaux par contact\nCREATE TABLE contact_channels (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  contact_id UUID REFERENCES contacts(id),\n  channel TEXT NOT NULL,       -- 'whatsapp', 'instagram', etc.\n  channel_user_id TEXT NOT NULL, -- ID sur le canal\n  UNIQUE(channel, channel_user_id)\n);\n\n-- Table des messages\nCREATE TABLE messages (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  contact_id UUID REFERENCES contacts(id),\n  channel TEXT NOT NULL,\n  direction TEXT NOT NULL,     -- 'inbound' ou 'outbound'\n  content TEXT NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);</code></pre><p>Avec ce schéma, tu peux afficher <strong>toute l'historique d'un client</strong> — peu importe le canal utilisé — dans un seul tableau de bord.</p>" },

      { id: "4-13", type: "heading", level: 3, text: "Le routeur de canaux" },
      { id: "4-14", type: "text", html: "<pre><code>// channelRouter.ts\nclass ChannelRouter {\n  private adapters: Map&lt;string, ChannelAdapter&gt; = new Map();\n\n  register(channel: string, adapter: ChannelAdapter) {\n    this.adapters.set(channel, adapter);\n  }\n\n  async sendResponse(channel: string, userId: string, response: NormalizedResponse) {\n    const adapter = this.adapters.get(channel);\n    if (!adapter) throw new Error(`Canal inconnu : ${channel}`);\n    await adapter.send(userId, response);\n  }\n}\n\n// Utilisation\nconst router = new ChannelRouter();\nrouter.register('whatsapp', new TwilioAdapter());\nrouter.register('instagram', new InstagramAdapter());\nrouter.register('messenger', new MessengerAdapter());\nrouter.register('web', new WebSocketAdapter());</code></pre>" },

      { id: "4-15", type: "callout", variant: "warning", html: "<strong>Piège courant :</strong> Chaque canal a ses propres limites de formatage. WhatsApp supporte le gras avec *texte*, Instagram non. Messenger a des carrousels, pas WhatsApp. Ton adaptateur de réponse doit convertir le format générique en format spécifique à chaque canal." },
    ]),
    exercise: "<h3>Exercice : Construire le backend unifié</h3><p>(1) Crée le schéma Supabase avec les 3 tables (contacts, contact_channels, messages). (2) Implémente l'interface NormalizedMessage en TypeScript. (3) Crée un adaptateur pour au moins 2 canaux (web + WhatsApp ou Instagram). (4) Écris la logique centrale qui reçoit un NormalizedMessage, appelle l'API OpenAI avec l'historique de la conversation, et renvoie une NormalizedResponse. (5) Teste avec des messages simulés sur les 2 canaux.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi faut-il un backend unifié plutôt qu'un backend par canal ?", options: JSON.stringify(["Parce que c'est moins cher en hébergement", "Pour éviter de dupliquer la logique métier et pouvoir modifier le prompt IA à un seul endroit", "Parce que Meta l'exige", "Parce que c'est plus facile à développer"]), correctAnswer: "Pour éviter de dupliquer la logique métier et pouvoir modifier le prompt IA à un seul endroit", explanation: "Avec un backend par canal, tu dois maintenir 4 copies de la même logique. Un backend unifié sépare le transport du traitement : tu modifies la logique IA une seule fois et ça s'applique partout." },
      { type: "mcq", question: "Quel est le rôle de l'adaptateur de canal (ChannelAdapter) ?", options: JSON.stringify(["Stocker les messages dans la base de données", "Transformer les messages bruts du canal en format normalisé et vice-versa", "Gérer l'authentification des utilisateurs", "Appeler l'API OpenAI"]), correctAnswer: "Transformer les messages bruts du canal en format normalisé et vice-versa", explanation: "L'adaptateur est le traducteur entre le format spécifique du canal (TwiML pour WhatsApp, Graph API pour Instagram) et le format normalisé que comprend ta logique métier." },
      { type: "true_false", question: "Un même client qui contacte le business sur WhatsApp et Instagram créera forcément deux profils séparés dans la base.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Grâce à la table contact_channels, tu peux lier plusieurs canaux au même contact. Quand le client s'identifie (email, téléphone), tu fusionne ses canaux sous un même profil." },
      { type: "mcq", question: "Que contient un NormalizedMessage ?", options: JSON.stringify(["Uniquement le texte du message", "Le canal, l'ID de l'expéditeur, le texte, le timestamp et l'ID de conversation", "Le prompt système de l'IA", "Les credentials de l'API du canal"]), correctAnswer: "Le canal, l'ID de l'expéditeur, le texte, le timestamp et l'ID de conversation", explanation: "Le NormalizedMessage contient toutes les informations nécessaires pour traiter le message indépendamment du canal : qui l'a envoyé, quand, sur quel canal, dans quelle conversation, et le contenu." },
      { type: "mcq", question: "Quel piège courant faut-il éviter avec les réponses multi-canal ?", options: JSON.stringify(["Envoyer trop de messages", "Envoyer le même format de réponse sur tous les canaux sans adapter", "Utiliser Supabase au lieu de Firebase", "Répondre trop vite"]), correctAnswer: "Envoyer le même format de réponse sur tous les canaux sans adapter", explanation: "Chaque canal a ses propres limites de formatage. Le gras fonctionne différemment, les boutons ne sont pas supportés partout, les carrousels existent sur Messenger mais pas sur WhatsApp. L'adaptateur doit convertir le format générique en format spécifique." },
    ],
  },

  // ─── LEÇON 5 : Atelier — Bot de réservation multi-canal ───
  {
    order: 5,
    module: 9,
    title: "Atelier : bot de réservation multi-canal",
    slug: "atelier-bot-reservation-multicanal",
    duration: "30 min",
    description: "Construire un bot complet pour un restaurant qui prend des réservations via WhatsApp, Instagram et web. Calendrier, confirmations, rappels.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le projet : ReservoBot pour un restaurant" },
      { id: "5-2", type: "text", html: "<p>On va construire <strong>ReservoBot</strong>, un bot de réservation pour un restaurant fictif 'La Table d'Olivier'. Le bot doit fonctionner sur WhatsApp, Instagram DM et le site web. Il gère les réservations, répond aux questions (menu, horaires, accès), et envoie des rappels.</p><p>C'est un projet type que tu peux vendre entre <strong>3 000€ et 6 000€</strong> à n'importe quel restaurant, hôtel, ou salon.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Stack technique :</strong> Next.js (API routes), Supabase (base de données + auth), Twilio (WhatsApp), Meta Graph API (Instagram/Messenger), OpenAI API (intelligence), et un widget web custom." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Étape 1 : Le schéma de données" },
      { id: "5-6", type: "text", html: "<pre><code>-- Tables spécifiques à la réservation\nCREATE TABLE reservations (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  contact_id UUID REFERENCES contacts(id),\n  date DATE NOT NULL,\n  time TIME NOT NULL,\n  party_size INT NOT NULL,\n  status TEXT DEFAULT 'confirmed',  -- confirmed, cancelled, completed\n  special_requests TEXT,\n  channel TEXT NOT NULL,             -- canal de réservation\n  reminder_sent BOOLEAN DEFAULT FALSE,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);\n\n-- Créneaux disponibles\nCREATE TABLE time_slots (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  date DATE NOT NULL,\n  time TIME NOT NULL,\n  max_covers INT DEFAULT 30,\n  booked_covers INT DEFAULT 0,\n  UNIQUE(date, time)\n);</code></pre>" },
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Étape 2 : Le flow de conversation" },
      { id: "5-9", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Message reçu", description: "Le client envoie un message sur n'importe quel canal" },
        { id: "n2", label: "Détection d'intention", description: "L'IA analyse : réservation, question menu, horaires, annulation, ou autre" },
        { id: "n3", label: "Flow réservation", description: "Nombre de personnes → date → créneau disponible → confirmation" },
        { id: "n4", label: "Flow FAQ", description: "Menu, horaires, accès, parking — réponses depuis la base de connaissances" },
        { id: "n5", label: "Confirmation + Rappel", description: "Enregistrement en base, message de confirmation, rappel J-1 via template WhatsApp" },
      ]},

      { id: "5-10", type: "heading", level: 2, text: "Étape 3 : Le prompt système du bot" },
      { id: "5-11", type: "text", html: "<pre><code>const SYSTEM_PROMPT = `Tu es l'assistant de réservation de La Table d'Olivier,\nun restaurant gastronomique français à Lyon.\n\nTes capacités :\n- Prendre des réservations (date, heure, nombre de personnes)\n- Répondre aux questions sur le menu, les horaires, l'accès\n- Modifier ou annuler des réservations existantes\n\nInformations du restaurant :\n- Adresse : 42 rue de la République, 69002 Lyon\n- Horaires : Mardi à Samedi, 12h-14h et 19h-22h\n- Capacité : 30 couverts\n- Parking : Parking Bellecour à 200m\n\nRègles :\n- Sois chaleureux et professionnel, tutoie le client\n- Pour une réservation, demande : nombre de personnes, date, heure souhaitée\n- Vérifie la disponibilité avant de confirmer\n- Si un créneau est complet, propose le créneau le plus proche\n- Limite : 8 personnes max par réservation en ligne\n- Au-delà, invite à appeler le restaurant\n\nAppelle la fonction 'check_availability' pour vérifier un créneau.\nAppelle la fonction 'create_reservation' pour confirmer une réservation.`;</code></pre>" },

      { id: "5-12", type: "heading", level: 3, text: "Étape 4 : Les fonctions IA (function calling)" },
      { id: "5-13", type: "text", html: "<pre><code>const RESERVATION_FUNCTIONS = [\n  {\n    name: 'check_availability',\n    description: 'Vérifie la disponibilité pour une date et heure',\n    parameters: {\n      type: 'object',\n      properties: {\n        date: { type: 'string', description: 'Date au format YYYY-MM-DD' },\n        time: { type: 'string', description: 'Heure au format HH:MM' },\n        party_size: { type: 'number', description: 'Nombre de personnes' },\n      },\n      required: ['date', 'time', 'party_size'],\n    },\n  },\n  {\n    name: 'create_reservation',\n    description: 'Crée une réservation confirmée',\n    parameters: {\n      type: 'object',\n      properties: {\n        date: { type: 'string' },\n        time: { type: 'string' },\n        party_size: { type: 'number' },\n        contact_name: { type: 'string' },\n        special_requests: { type: 'string' },\n      },\n      required: ['date', 'time', 'party_size', 'contact_name'],\n    },\n  },\n];</code></pre>" },

      { id: "5-14", type: "heading", level: 2, text: "Étape 5 : Rappels automatiques" },
      { id: "5-15", type: "text", html: "<p>Le rappel J-1 est l'une des fonctionnalités les plus appréciées. Il réduit les no-shows de <strong>40 à 60%</strong>. Pour l'implémenter, tu as besoin d'un cron job qui tourne tous les matins :</p><pre><code>// Cron job quotidien — rappels J-1\nasync function sendReminders() {\n  const tomorrow = new Date();\n  tomorrow.setDate(tomorrow.getDate() + 1);\n  const dateStr = tomorrow.toISOString().split('T')[0];\n\n  const { data: reservations } = await supabase\n    .from('reservations')\n    .select('*, contacts(*), contact_channels(*)')\n    .eq('date', dateStr)\n    .eq('status', 'confirmed')\n    .eq('reminder_sent', false);\n\n  for (const resa of reservations ?? []) {\n    const channel = resa.contact_channels[0];\n    // Envoyer le rappel via le bon canal\n    await router.sendResponse(channel.channel, channel.channel_user_id, {\n      text: `Rappel : ta réservation pour ${resa.party_size} personnes demain à ${resa.time} à La Table d'Olivier est confirmée. À demain ! 🍽️`,\n    });\n    // Marquer comme envoyé\n    await supabase\n      .from('reservations')\n      .update({ reminder_sent: true })\n      .eq('id', resa.id);\n  }\n}</code></pre>" },

      { id: "5-16", type: "checklist", title: "Checklist de livraison — Bot de réservation", items: [
        { id: "c1", text: "Le bot prend des réservations avec vérification de disponibilité" },
        { id: "c2", text: "Il fonctionne sur au moins 2 canaux (web + WhatsApp ou Instagram)" },
        { id: "c3", text: "Les conversations sont stockées dans Supabase" },
        { id: "c4", text: "Un message de confirmation est envoyé après chaque réservation" },
        { id: "c5", text: "Les rappels J-1 sont automatisés" },
        { id: "c6", text: "Le bot répond aux questions FAQ (menu, horaires, accès)" },
        { id: "c7", text: "Un transfert vers un humain est possible en cas de demande complexe" },
        { id: "c8", text: "Le restaurateur a un tableau de bord pour voir les réservations" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construire ReservoBot</h3><p>(1) Crée le schéma Supabase (tables contacts, contact_channels, messages, reservations, time_slots). (2) Implémente le backend unifié avec au moins 2 canaux (web obligatoire + WhatsApp sandbox ou Instagram test). (3) Écris le prompt système et les fonctions de réservation (check_availability, create_reservation). (4) Teste un scénario complet : le client réserve via le web, reçoit une confirmation, puis un rappel. (5) Bonus : ajoute un tableau de bord simple (page Next.js) pour que le restaurateur voie ses réservations du jour.</p>",
    quiz: [
      { type: "mcq", question: "De combien les rappels J-1 réduisent-ils les no-shows ?", options: JSON.stringify(["5-10%", "15-25%", "40-60%", "90-100%"]), correctAnswer: "40-60%", explanation: "Les rappels envoyés la veille réduisent les no-shows de 40 à 60%. C'est l'une des fonctionnalités les plus valorisées par les restaurateurs et un argument de vente puissant." },
      { type: "mcq", question: "Quelle technique permet au bot de vérifier la disponibilité et créer des réservations ?", options: JSON.stringify(["Le prompt engineering seul", "Le function calling (appels de fonctions IA)", "Les regex sur le texte du client", "Un formulaire web classique"]), correctAnswer: "Le function calling (appels de fonctions IA)", explanation: "Le function calling permet à l'IA d'appeler des fonctions spécifiques (check_availability, create_reservation) avec les bons paramètres extraits de la conversation. C'est bien plus fiable que du parsing regex." },
      { type: "true_false", question: "Pour envoyer un rappel WhatsApp J-1, on peut envoyer un message libre sans template.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le rappel J-1 est envoyé en dehors de la fenêtre de 24h (le client n'a pas écrit récemment). Il faut donc utiliser un template de message approuvé par Meta, catégorie 'utility'." },
      { type: "mcq", question: "Combien peut-on vendre un bot de réservation multi-canal à un restaurant ?", options: JSON.stringify(["200-500€", "500-1 000€", "3 000-6 000€", "20 000-50 000€"]), correctAnswer: "3 000-6 000€", explanation: "Un bot de réservation multi-canal (WhatsApp + Instagram + web) avec rappels automatiques se vend entre 3 000€ et 6 000€. La valeur est claire : moins de no-shows, plus de réservations, zéro appel téléphonique à gérer." },
      { type: "mcq", question: "Pourquoi stocke-t-on le canal de réservation dans la table reservations ?", options: JSON.stringify(["Pour la facturation Meta", "Pour savoir par quel canal envoyer le rappel et les messages de suivi", "C'est obligatoire par le RGPD", "Pour des raisons de performance"]), correctAnswer: "Pour savoir par quel canal envoyer le rappel et les messages de suivi", explanation: "En stockant le canal d'origine, tu sais par où envoyer le rappel J-1 et les messages de suivi. Si le client a réservé via WhatsApp, le rappel part sur WhatsApp — pas par email ou Instagram." },
    ],
  },
];
