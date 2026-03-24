function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_08_LESSONS = [
  {
    order: 1,
    module: 8,
    title: "Créer un chatbot custom (Next.js + Claude API + RAG)",
    slug: "v2-chatbot-custom-nextjs-claude-rag",
    duration: "30 min",
    description:
      "Construis un chatbot intelligent avec Next.js, l'API Claude et le RAG (Retrieval-Augmented Generation) pour répondre aux questions à partir de tes propres données.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "C'est quoi un chatbot IA custom ?",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>Un chatbot IA custom, ce n'est pas juste ChatGPT dans une boîte. C'est un assistant <strong>spécialisé</strong> qui connaît ton business, tes produits, tes services et répond aux questions de tes clients avec des informations précises et à jour.</p><p>La clé : le <strong>RAG</strong> (Retrieval-Augmented Generation). Au lieu de faire confiance uniquement au modèle IA, on lui fournit des <strong>documents de référence</strong> (FAQ, fiches produits, conditions générales) pour qu'il réponde avec des données fiables.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>RAG en une phrase :</strong> Au lieu de demander au modèle de tout savoir, on cherche les informations pertinentes dans une base de données, puis on les donne au modèle avec la question pour qu'il génère une réponse précise.",
      },
      {
        id: "1-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-5",
        type: "heading",
        level: 2,
        text: "L'architecture d'un chatbot RAG",
      },
      {
        id: "1-6",
        type: "steps",
        steps: [
          {
            title: "L'utilisateur pose une question",
            description:
              "Le frontend envoie la question à ton API Route. Le message est affiché dans l'interface de chat en temps réel.",
          },
          {
            title: "Recherche de contexte (Retrieval)",
            description:
              "Ton serveur cherche dans ta base de connaissances les documents les plus pertinents par rapport à la question. On utilise des embeddings vectoriels pour trouver les passages les plus proches sémantiquement.",
          },
          {
            title: "Construction du prompt (Augmented)",
            description:
              "Les documents trouvés sont injectés dans le prompt système du modèle IA avec des instructions comme : \"Réponds uniquement à partir du contexte fourni. Si tu ne trouves pas la réponse, dis-le.\"",
          },
          {
            title: "Génération de la réponse (Generation)",
            description:
              "Le modèle Claude génère une réponse basée sur le contexte fourni. La réponse est streamée en temps réel vers le frontend.",
          },
        ],
      },
      {
        id: "1-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-8",
        type: "heading",
        level: 2,
        text: "Connecter l'API Claude",
      },
      {
        id: "1-9",
        type: "text",
        html: "<p>L'API Claude d'Anthropic est accessible via le SDK officiel. Les étapes :</p><ul><li>Crée un compte sur <strong>console.anthropic.com</strong> et génère une clé API</li><li>Installe le SDK : <code>npm install @anthropic-ai/sdk</code></li><li>Crée une API Route <code>app/api/chat/route.ts</code></li><li>Initialise le client avec ta clé API et appelle <code>anthropic.messages.create()</code></li></ul><p>Pour le streaming (affichage progressif de la réponse), utilise <code>anthropic.messages.stream()</code> et retourne un ReadableStream depuis ton API Route.</p>",
      },
      {
        id: "1-10",
        type: "heading",
        level: 2,
        text: "Le prompt système : la personnalité du chatbot",
      },
      {
        id: "1-11",
        type: "text",
        html: "<p>Le <strong>prompt système</strong> définit le comportement, le ton et les limites de ton chatbot. C'est la partie la plus importante — un bon prompt fait la différence entre un chatbot utile et un chatbot inutile.</p><p>Un bon prompt système inclut :</p><ul><li><strong>Le rôle</strong> — \"Tu es l'assistant de support de [entreprise]\"</li><li><strong>Le ton</strong> — professionnel, amical, concis</li><li><strong>Les limites</strong> — \"Ne réponds qu'à partir du contexte fourni\"</li><li><strong>Le format</strong> — \"Réponds en 2-3 phrases maximum\" ou \"Utilise des listes à puces\"</li><li><strong>Les cas limites</strong> — \"Si tu ne connais pas la réponse, dirige vers le support humain\"</li></ul>",
      },
      {
        id: "1-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Itère sur ton prompt :</strong> Le prompt système se perfectionne avec le temps. Teste, observe les réponses, ajuste. Ajoute des exemples de bonnes réponses pour guider le modèle.",
      },
    ]),
    exercise:
      "<h3>Exercice : Construis ton premier chatbot RAG</h3><p>Crée un chatbot fonctionnel qui répond à partir de tes propres données.</p><ol><li>Crée une API Route <code>app/api/chat/route.ts</code> qui appelle l'API Claude.</li><li>Écris un prompt système définissant le rôle de ton chatbot (ex: assistant d'une boutique en ligne).</li><li>Crée un tableau de documents FAQ dans ton code (5-10 questions/réponses sur un sujet).</li><li>Implémente une recherche simple par mots-clés pour trouver les documents pertinents.</li><li>Injecte les documents trouvés dans le prompt avec la question de l'utilisateur.</li><li>Crée une interface chat dans ton frontend avec un champ de saisie et l'affichage des messages.</li><li>Teste avec des questions liées à tes FAQ et vérifie que les réponses sont pertinentes.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Que signifie RAG dans le contexte des chatbots IA ?",
        options: JSON.stringify([
          "Random Answer Generator",
          "Retrieval-Augmented Generation",
          "Rapid API Gateway",
          "Real-time Agent Generator",
        ]),
        correctAnswer: "Retrieval-Augmented Generation",
        explanation:
          "RAG (Retrieval-Augmented Generation) consiste à chercher des documents pertinents dans une base de connaissances, puis à les fournir au modèle IA pour générer une réponse précise.",
      },
      {
        type: "mcq",
        question:
          "Dans un système RAG, quel est l'ordre des étapes ?",
        options: JSON.stringify([
          "Génération → Recherche → Prompt",
          "Recherche → Prompt augmenté → Génération",
          "Prompt → Génération → Recherche",
          "Génération → Prompt → Recherche",
        ]),
        correctAnswer: "Recherche → Prompt augmenté → Génération",
        explanation:
          "D'abord on recherche (Retrieval) les documents pertinents, on les injecte dans le prompt (Augmented), puis le modèle génère la réponse (Generation).",
      },
      {
        type: "true_false",
        question:
          "Un chatbot RAG peut répondre correctement à des questions sur des sujets non couverts par sa base de connaissances.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Un chatbot RAG bien configuré ne répond qu'à partir du contexte fourni. S'il ne trouve pas d'information pertinente, il doit le signaler plutôt que d'inventer une réponse.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi utiliser le streaming pour les réponses du chatbot ?",
        options: JSON.stringify([
          "Pour économiser de la bande passante",
          "Pour afficher la réponse progressivement au lieu d'attendre qu'elle soit complète",
          "Pour crypter les données",
          "Pour limiter la taille des réponses",
        ]),
        correctAnswer:
          "Pour afficher la réponse progressivement au lieu d'attendre qu'elle soit complète",
        explanation:
          "Le streaming affiche la réponse mot par mot au fur et à mesure de sa génération, ce qui donne une meilleure expérience utilisateur au lieu d'un long temps d'attente.",
      },
      {
        type: "true_false",
        question:
          "Le prompt système définit la personnalité, le ton et les limites du chatbot.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Le prompt système est la configuration fondamentale du chatbot. Il définit son rôle, son ton, ses limites et le format de ses réponses.",
      },
      {
        type: "mcq",
        question:
          "Où doit être stockée la clé API Claude dans un projet Next.js ?",
        options: JSON.stringify([
          "Dans le code frontend directement",
          "Dans un fichier .env.local utilisé uniquement côté serveur",
          "Dans le localStorage du navigateur",
          "Dans un commentaire HTML",
        ]),
        correctAnswer:
          "Dans un fichier .env.local utilisé uniquement côté serveur",
        explanation:
          "Les clés API doivent être dans .env.local et utilisées uniquement dans les API Routes (côté serveur). Elles ne doivent jamais être exposées côté client.",
      },
    ],
  },
  {
    order: 2,
    module: 8,
    title:
      "Où déployer un chatbot : site web, WhatsApp, Instagram, Messenger",
    slug: "v2-deployer-chatbot-multicanal",
    duration: "20 min",
    description:
      "Découvre les différents canaux de déploiement d'un chatbot IA : widget web, WhatsApp Business API, Instagram DM et Facebook Messenger.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Un chatbot, plusieurs canaux",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Un chatbot IA ne se limite pas à ton site web. Tes clients sont sur <strong>WhatsApp, Instagram, Messenger</strong> — et c'est là qu'ils préfèrent communiquer. L'idée est de construire <strong>un seul moteur de chatbot</strong> (ton API) et de le connecter à plusieurs canaux.</p><p>Chaque canal a ses spécificités techniques, mais la logique reste la même : recevoir un message, traiter avec l'IA, répondre.</p>",
      },
      {
        id: "2-3",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "Canal 1 : Widget web embarqué",
      },
      {
        id: "2-5",
        type: "text",
        html: "<p>Le canal le plus simple à mettre en place. Un <strong>widget de chat</strong> apparaît en bas à droite du site web du client. L'utilisateur clique dessus, pose sa question, et le chatbot répond en temps réel.</p><p>Avantages :</p><ul><li>Contrôle total sur le design et l'expérience</li><li>Pas besoin d'approbation d'une plateforme tierce</li><li>Intégrable sur n'importe quel site avec un simple script</li></ul>",
      },
      {
        id: "2-6",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Canal 2 : WhatsApp Business API",
      },
      {
        id: "2-8",
        type: "text",
        html: "<p>WhatsApp est le canal de messaging le plus populaire au monde. L'<strong>API WhatsApp Business</strong> permet de connecter ton chatbot pour répondre automatiquement aux messages.</p><p>Le setup passe par un <strong>Business Solution Provider</strong> (BSP) comme Twilio, MessageBird ou 360dialog qui simplifie l'accès à l'API Meta. Tu reçois un webhook pour chaque message entrant et tu réponds via l'API.</p>",
      },
      {
        id: "2-9",
        type: "heading",
        level: 2,
        text: "Canal 3 : Instagram DM et Messenger",
      },
      {
        id: "2-10",
        type: "text",
        html: "<p>Meta propose des APIs pour <strong>Instagram Messaging</strong> et <strong>Messenger</strong>. Le fonctionnement est similaire à WhatsApp :</p><ul><li>Tu crées une app Meta Developer</li><li>Tu configures un webhook pour recevoir les messages</li><li>Tu réponds via l'API Graph de Meta</li></ul><p>Instagram est particulièrement intéressant pour les marques e-commerce : les clients posent des questions sur les produits directement en DM.</p>",
      },
      {
        id: "2-11",
        type: "comparison",
        headers: ["Canal", "Complexité setup", "Coût", "Audience idéale"],
        rows: [
          { cells: ["Widget web", "Faible", "Gratuit", "Visiteurs du site"] },
          { cells: ["WhatsApp", "Moyenne", "Payant (par message)", "Clients existants, support"] },
          { cells: ["Instagram DM", "Moyenne", "Gratuit", "E-commerce, marques B2C"] },
          { cells: ["Messenger", "Moyenne", "Gratuit", "Communautés, pages Facebook"] },
        ],
      },
      {
        id: "2-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Conseil :</strong> Commence par le widget web — c'est le plus rapide à mettre en place et il te permet de valider ton chatbot. Ensuite, ajoute les canaux sociaux selon les besoins du client.",
      },
      {
        id: "2-13",
        type: "heading",
        level: 2,
        text: "Architecture multicanal",
      },
      {
        id: "2-14",
        type: "text",
        html: "<p>L'architecture idéale sépare le <strong>moteur IA</strong> (ton API de chat) des <strong>connecteurs de canaux</strong>. Chaque canal a son propre webhook qui traduit les messages vers un format commun, appelle ton API de chat, puis retraduit la réponse vers le format du canal.</p><p>Cela te permet d'ajouter un nouveau canal sans toucher à la logique IA. Le moteur reste identique, seul le connecteur change.</p>",
      },
    ]),
    exercise:
      "<h3>Exercice : Planifie un déploiement multicanal</h3><p>Prépare l'architecture pour déployer ton chatbot sur plusieurs canaux.</p><ol><li>Refactorise ton API de chat pour qu'elle soit agnostique au canal : elle reçoit un message (string) et retourne une réponse (string).</li><li>Crée un schéma d'architecture montrant : Widget web → API Chat → Claude + RAG.</li><li>Recherche et compare 2 BSP WhatsApp (Twilio vs 360dialog) : prix, facilité de setup, documentation.</li><li>Crée un webhook de test <code>app/api/webhook/whatsapp/route.ts</code> qui reçoit un message et log le contenu.</li><li>Documente les étapes nécessaires pour connecter Instagram DM (création d'app Meta, permissions requises, format des messages).</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quel est l'avantage principal d'un widget web par rapport aux canaux sociaux ?",
        options: JSON.stringify([
          "Il est plus intelligent",
          "Contrôle total sur le design et pas besoin d'approbation tierce",
          "Il fonctionne sans internet",
          "Il est plus rapide",
        ]),
        correctAnswer:
          "Contrôle total sur le design et pas besoin d'approbation tierce",
        explanation:
          "Le widget web te donne un contrôle total sur l'expérience utilisateur et ne nécessite aucune approbation de plateforme tierce, contrairement à WhatsApp ou Instagram.",
      },
      {
        type: "true_false",
        question:
          "Pour connecter un chatbot à WhatsApp, il faut passer par un Business Solution Provider (BSP) comme Twilio.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "L'API WhatsApp Business est accessible via des BSP agréés par Meta (Twilio, 360dialog, etc.) qui simplifient l'intégration et la gestion des messages.",
      },
      {
        type: "mcq",
        question:
          "Quel est le principe de l'architecture multicanal pour un chatbot ?",
        options: JSON.stringify([
          "Un chatbot différent pour chaque canal",
          "Un seul moteur IA avec des connecteurs séparés pour chaque canal",
          "Un seul canal qui redirige vers les autres",
          "Pas de serveur, tout côté client",
        ]),
        correctAnswer:
          "Un seul moteur IA avec des connecteurs séparés pour chaque canal",
        explanation:
          "L'architecture multicanal sépare le moteur IA (commun) des connecteurs de canaux (spécifiques). Ajouter un canal = ajouter un connecteur, sans toucher à la logique IA.",
      },
      {
        type: "mcq",
        question:
          "Quel canal est le plus rapide à mettre en place pour un premier chatbot ?",
        options: JSON.stringify([
          "WhatsApp Business",
          "Instagram DM",
          "Widget web",
          "Messenger",
        ]),
        correctAnswer: "Widget web",
        explanation:
          "Le widget web est le plus simple : pas de compte tiers, pas d'approbation, contrôle total. C'est le meilleur point de départ pour valider ton chatbot.",
      },
      {
        type: "true_false",
        question:
          "L'envoi de messages via WhatsApp Business API est gratuit et illimité.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "WhatsApp Business API est payant : les messages sont facturés par conversation ou par message selon le BSP utilisé. Les tarifs varient selon les pays.",
      },
    ],
  },
  {
    order: 3,
    module: 8,
    title: "Widget embarquable, analytics et suivi des conversations",
    slug: "v2-widget-embarquable-analytics-suivi",
    duration: "25 min",
    description:
      "Crée un widget de chat embarquable en iframe ou script, ajoute du suivi des conversations et des analytics pour mesurer la performance de ton chatbot.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Créer un widget embarquable",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Un <strong>widget embarquable</strong> est une interface de chat que ton client peut ajouter sur son site en copiant un simple snippet de code. C'est le format standard pour livrer un chatbot à un client — il n'a pas besoin de toucher à son code existant.</p><p>Deux approches :</p><ul><li><strong>iframe</strong> — ton chat est hébergé sur ton domaine et intégré via une balise iframe. Simple, isolé, mais limité en personnalisation.</li><li><strong>Script JavaScript</strong> — un script injecte le widget directement dans la page du client. Plus flexible, meilleure intégration visuelle.</li></ul>",
      },
      {
        id: "3-3",
        type: "comparison",
        headers: ["Méthode", "Avantages", "Inconvénients"],
        rows: [
          { cells: ["iframe", "Isolé, simple, pas de conflits CSS", "Limité en personnalisation, pas de communication directe avec la page"] },
          { cells: ["Script JS", "Intégration native, personnalisable, accès au DOM", "Conflits CSS possibles, plus complexe à maintenir"] },
        ],
      },
      {
        id: "3-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-5",
        type: "heading",
        level: 2,
        text: "Le snippet d'intégration",
      },
      {
        id: "3-6",
        type: "text",
        html: "<p>Le client intègre ton widget avec un snippet comme celui-ci :</p><pre><code>&lt;script src=\"https://ton-domaine.com/widget.js\" data-bot-id=\"abc123\"&gt;&lt;/script&gt;</code></pre><p>Le script :</p><ul><li>Crée un bouton flottant en bas à droite</li><li>Au clic, ouvre une fenêtre de chat</li><li>Communique avec ton API via fetch/WebSocket</li><li>Gère l'historique de la conversation en mémoire ou localStorage</li></ul><p>L'attribut <code>data-bot-id</code> permet d'identifier quel chatbot charger — utile si tu gères plusieurs clients.</p>",
      },
      {
        id: "3-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-8",
        type: "heading",
        level: 2,
        text: "Sauvegarder et suivre les conversations",
      },
      {
        id: "3-9",
        type: "text",
        html: "<p>Chaque conversation doit être <strong>sauvegardée</strong> pour :</p><ul><li><strong>Reprendre une conversation</strong> — si l'utilisateur revient, il retrouve son historique</li><li><strong>Analyser la qualité</strong> — relire les échanges pour améliorer le chatbot</li><li><strong>Escalader au support humain</strong> — transmettre le contexte à un agent si le chatbot ne peut pas répondre</li></ul><p>Structure de données recommandée :</p><ul><li>Table <code>conversations</code> — id, bot_id, user_id, created_at, status</li><li>Table <code>messages</code> — id, conversation_id, role (user/assistant), content, created_at</li></ul>",
      },
      {
        id: "3-10",
        type: "heading",
        level: 2,
        text: "Analytics : mesurer la performance",
      },
      {
        id: "3-11",
        type: "text",
        html: "<p>Les analytics te permettent de prouver la valeur de ton chatbot au client. Les métriques essentielles :</p>",
      },
      {
        id: "3-12",
        type: "comparison",
        headers: ["Métrique", "Description", "Objectif"],
        rows: [
          { cells: ["Nombre de conversations", "Total des conversations initiées", "Mesurer l'adoption"] },
          { cells: ["Taux de résolution", "% de conversations sans escalade humaine", "> 80%"] },
          { cells: ["Temps de réponse moyen", "Temps entre la question et la réponse", "< 3 secondes"] },
          { cells: ["Satisfaction utilisateur", "Note donnée par l'utilisateur en fin de conversation", "> 4/5"] },
          { cells: ["Questions sans réponse", "Questions où le chatbot n'a pas pu aider", "Identifier les lacunes"] },
        ],
      },
      {
        id: "3-13",
        type: "callout",
        variant: "tip",
        html: "<strong>Dashboard client :</strong> Crée un dashboard simple montrant ces métriques. C'est un argument de vente puissant : le client voit la valeur concrète du chatbot en temps réel.",
      },
      {
        id: "3-14",
        type: "checklist",
        title: "Checklist widget & analytics",
        items: [
          { id: "c1", text: "Widget fonctionnel avec bouton flottant" },
          { id: "c2", text: "Snippet d'intégration simple (1 ligne de code)" },
          { id: "c3", text: "Conversations sauvegardées en base de données" },
          { id: "c4", text: "Historique accessible pour l'utilisateur qui revient" },
          { id: "c5", text: "Analytics de base : nombre de conversations, taux de résolution" },
          { id: "c6", text: "Possibilité d'escalade vers un humain" },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Widget embarquable et suivi</h3><p>Crée un widget de chat embarquable avec sauvegarde des conversations.</p><ol><li>Crée une page <code>/chat</code> dans ton projet avec une interface de chat complète (liste de messages, champ de saisie, bouton envoyer).</li><li>Crée les tables <code>conversations</code> et <code>messages</code> dans Supabase.</li><li>Modifie ton API Route pour sauvegarder chaque message dans Supabase.</li><li>Crée un script <code>widget.js</code> dans le dossier public/ qui injecte une iframe pointant vers ta page /chat.</li><li>Teste l'intégration en ajoutant le script dans une page HTML de test.</li><li>Ajoute un endpoint <code>/api/analytics</code> qui retourne le nombre de conversations et le nombre moyen de messages par conversation.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quelle est la différence principale entre un widget iframe et un widget script JS ?",
        options: JSON.stringify([
          "L'iframe est plus rapide",
          "L'iframe est isolé et simple, le script JS est plus flexible et intégré",
          "Le script JS ne fonctionne pas sur mobile",
          "Il n'y a aucune différence",
        ]),
        correctAnswer:
          "L'iframe est isolé et simple, le script JS est plus flexible et intégré",
        explanation:
          "L'iframe crée un environnement isolé (pas de conflits CSS) mais limité. Le script JS s'intègre nativement dans la page, offrant plus de flexibilité et de personnalisation.",
      },
      {
        type: "true_false",
        question:
          "Sauvegarder les conversations permet d'améliorer le chatbot en analysant les échanges.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "L'analyse des conversations révèle les questions fréquentes, les lacunes de la base de connaissances et les cas où le chatbot échoue, permettant une amélioration continue.",
      },
      {
        type: "mcq",
        question:
          "Quel taux de résolution est un bon objectif pour un chatbot de support ?",
        options: JSON.stringify([
          "Plus de 30%",
          "Plus de 50%",
          "Plus de 80%",
          "100%",
        ]),
        correctAnswer: "Plus de 80%",
        explanation:
          "Un taux de résolution de plus de 80% signifie que 4 conversations sur 5 sont résolues sans intervention humaine. C'est un bon benchmark pour un chatbot de support.",
      },
      {
        type: "mcq",
        question:
          "Comment identifier quel chatbot charger quand le widget est intégré sur différents sites ?",
        options: JSON.stringify([
          "Par l'URL du site",
          "Par un attribut data-bot-id dans le script",
          "Par le navigateur de l'utilisateur",
          "Ce n'est pas possible",
        ]),
        correctAnswer:
          "Par un attribut data-bot-id dans le script",
        explanation:
          "L'attribut data-bot-id dans le snippet d'intégration permet d'identifier quel chatbot (quel client) doit être chargé, rendant le widget multi-tenant.",
      },
      {
        type: "true_false",
        question:
          "Un dashboard d'analytics est un argument de vente important lors de la livraison d'un chatbot à un client.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Un dashboard montrant les métriques (conversations, taux de résolution, satisfaction) prouve la valeur concrète du chatbot et justifie l'investissement du client.",
      },
    ],
  },
  {
    order: 4,
    module: 8,
    title: "Projet : chatbot support client livré clé en main",
    slug: "v2-projet-chatbot-support-cle-en-main",
    duration: "30 min",
    description:
      "Assemble tout ce que tu as appris pour livrer un chatbot de support client complet : IA, widget, analytics, documentation et mise en production.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Le projet final : un chatbot prêt à vendre",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Ce projet regroupe toutes les compétences du module. Tu vas construire un chatbot de support client <strong>complet et livrable</strong>. L'objectif : quelque chose que tu pourrais facturer à un client demain.</p><p>Le chatbot sera capable de :</p><ul><li>Répondre aux questions fréquentes à partir d'une base de connaissances</li><li>Diriger vers un humain quand il ne peut pas répondre</li><li>Être intégré sur n'importe quel site web en 1 minute</li><li>Fournir des métriques au client via un dashboard</li></ul>",
      },
      {
        id: "4-3",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "Les composants du projet",
      },
      {
        id: "4-5",
        type: "steps",
        steps: [
          {
            title: "Base de connaissances",
            description:
              "Crée une interface admin pour importer des documents (FAQ, fiches produits). Stocke-les dans Supabase avec des embeddings pour la recherche sémantique. Minimum 20 questions/réponses pour un chatbot réaliste.",
          },
          {
            title: "Moteur de chat IA",
            description:
              "API Route qui reçoit une question, cherche le contexte pertinent (RAG), appelle Claude et retourne la réponse en streaming. Inclus : prompt système optimisé, gestion de l'historique de conversation.",
          },
          {
            title: "Widget embarquable",
            description:
              "Script JS que le client colle sur son site. Interface propre avec : bulle de chat, messages stylisés, indicateur de chargement, bouton d'escalade humaine.",
          },
          {
            title: "Dashboard analytics",
            description:
              "Page protégée montrant : nombre de conversations, taux de résolution, questions les plus posées, conversations récentes consultables.",
          },
          {
            title: "Documentation de livraison",
            description:
              "Guide simple pour le client : comment intégrer le widget, comment mettre à jour la FAQ, comment lire les analytics. Un client non-technique doit pouvoir suivre.",
          },
        ],
      },
      {
        id: "4-6",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-7",
        type: "heading",
        level: 2,
        text: "Combien facturer un chatbot ?",
      },
      {
        id: "4-8",
        type: "text",
        html: "<p>Un chatbot de support client représente une vraie valeur pour les entreprises. Voici une grille tarifaire de référence :</p>",
      },
      {
        id: "4-9",
        type: "comparison",
        headers: ["Offre", "Contenu", "Prix indicatif"],
        rows: [
          { cells: ["Chatbot basique", "Widget web + FAQ (20 questions) + setup", "500 - 1 500 euros"] },
          { cells: ["Chatbot avancé", "RAG + multicanal + analytics + dashboard", "2 000 - 5 000 euros"] },
          { cells: ["Chatbot sur mesure", "Intégrations custom + formation + maintenance", "5 000 - 15 000 euros"] },
          { cells: ["Maintenance mensuelle", "Mise à jour FAQ + monitoring + optimisation", "200 - 500 euros/mois"] },
        ],
      },
      {
        id: "4-10",
        type: "callout",
        variant: "tip",
        html: "<strong>Modèle SaaS :</strong> Au lieu de vendre un chatbot en one-shot, propose un abonnement mensuel incluant l'hébergement, les mises à jour et le support. C'est du revenu récurrent et le client n'a pas de gros investissement initial.",
      },
      {
        id: "4-11",
        type: "heading",
        level: 2,
        text: "Checklist de livraison",
      },
      {
        id: "4-12",
        type: "checklist",
        title: "Le chatbot est prêt quand...",
        items: [
          { id: "c1", text: "Le chatbot répond correctement à 90%+ des questions de la FAQ" },
          { id: "c2", text: "L'escalade humaine fonctionne quand le chatbot ne sait pas répondre" },
          { id: "c3", text: "Le widget s'intègre en 1 ligne de code sur n'importe quel site" },
          { id: "c4", text: "Les conversations sont sauvegardées et consultables" },
          { id: "c5", text: "Le dashboard analytics affiche les métriques clés" },
          { id: "c6", text: "Le chatbot est déployé en production sur Vercel" },
          { id: "c7", text: "La documentation de livraison est rédigée" },
          { id: "c8", text: "Le client peut mettre à jour la FAQ sans toucher au code" },
        ],
      },
      {
        id: "4-13",
        type: "callout",
        variant: "info",
        html: "<strong>Portfolio :</strong> Ce projet est un excellent ajout à ton portfolio. Filme une démo vidéo de 2 minutes montrant le chatbot en action, l'intégration widget et le dashboard. C'est bien plus convaincant qu'un screenshot.",
      },
    ]),
    exercise:
      "<h3>Projet : Construis et livre ton chatbot</h3><p>Assemble tous les composants pour créer un chatbot livrable.</p><ol><li>Choisis un client fictif (restaurant, boutique en ligne, agence) et rédige 20 questions/réponses pour sa FAQ.</li><li>Construis le moteur RAG avec recherche sémantique dans la FAQ et génération via Claude.</li><li>Crée l'interface de chat avec : messages stylisés, streaming, indicateur de chargement et bouton \"Parler à un humain\".</li><li>Crée le widget embarquable (script ou iframe) testable sur une page HTML externe.</li><li>Implémente le dashboard analytics avec : nombre total de conversations, taux de résolution et top 5 des questions posées.</li><li>Déploie le tout sur Vercel et teste avec 10 questions variées.</li><li>Rédige une documentation de livraison d'une page expliquant comment intégrer le widget et lire les analytics.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quel est l'avantage d'un modèle SaaS (abonnement) pour vendre un chatbot ?",
        options: JSON.stringify([
          "C'est plus simple à développer",
          "Revenu récurrent et investissement initial réduit pour le client",
          "Le chatbot est plus intelligent",
          "Le client peut modifier le code",
        ]),
        correctAnswer:
          "Revenu récurrent et investissement initial réduit pour le client",
        explanation:
          "Le modèle SaaS crée un revenu mensuel prévisible pour toi et un coût d'entrée plus faible pour le client, ce qui facilite la vente et la rétention.",
      },
      {
        type: "true_false",
        question:
          "Un chatbot de support client ne devrait jamais escalader vers un humain.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "L'escalade humaine est essentielle. Un bon chatbot reconnaît ses limites et transfère à un humain quand il ne peut pas aider, plutôt que de donner des réponses incorrectes.",
      },
      {
        type: "mcq",
        question:
          "Quel est le nombre minimum de questions/réponses recommandé pour une base de connaissances de chatbot ?",
        options: JSON.stringify([
          "5 questions",
          "10 questions",
          "20 questions",
          "100 questions",
        ]),
        correctAnswer: "20 questions",
        explanation:
          "20 questions/réponses est un minimum réaliste pour un chatbot de support. Cela couvre les questions les plus fréquentes et donne assez de contexte au RAG.",
      },
      {
        type: "mcq",
        question:
          "Que doit inclure la documentation de livraison d'un chatbot ?",
        options: JSON.stringify([
          "Uniquement le code source",
          "Comment intégrer le widget, mettre à jour la FAQ et lire les analytics",
          "Un tutoriel de programmation",
          "Les conditions générales de vente",
        ]),
        correctAnswer:
          "Comment intégrer le widget, mettre à jour la FAQ et lire les analytics",
        explanation:
          "La documentation de livraison doit être pratique : intégration du widget, gestion de la FAQ et lecture du dashboard. Un client non-technique doit pouvoir suivre.",
      },
      {
        type: "true_false",
        question:
          "Un chatbot livrable doit pouvoir être intégré sur n'importe quel site en une seule ligne de code.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "La simplicité d'intégration est un critère clé. Un snippet d'une ligne (script tag) permet au client d'ajouter le chatbot sans compétence technique.",
      },
      {
        type: "mcq",
        question:
          "Quel est un prix indicatif réaliste pour un chatbot avancé avec RAG, multicanal et analytics ?",
        options: JSON.stringify([
          "50 - 100 euros",
          "200 - 500 euros",
          "2 000 - 5 000 euros",
          "50 000 - 100 000 euros",
        ]),
        correctAnswer: "2 000 - 5 000 euros",
        explanation:
          "Un chatbot avancé avec RAG, support multicanal et dashboard analytics représente un travail conséquent et une vraie valeur. La fourchette 2 000 - 5 000 euros est réaliste pour ce niveau de service.",
      },
    ],
  },
];
