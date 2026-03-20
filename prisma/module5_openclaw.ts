// Add after line 35 (after the last Module 4 lesson) in the LESSONS_DATA array:

  // Module 5: Maitriser OpenClaw
  {
    order: 21,
    module: 5,
    title: "Qu'est-ce qu'OpenClaw et pourquoi l'utiliser",
    slug: "openclaw-introduction",
    duration: "20 min",
    description: "Decouvre ce qu'est OpenClaw, son architecture self-hosted et ses differences fondamentales avec les assistants IA classiques.",
    content: `<h2>OpenClaw : un assistant IA personnel self-hosted</h2>
<p>OpenClaw est un outil <strong>gratuit et open source</strong> qui transforme Claude en assistant IA personnel que tu peux interroger depuis n'importe quelle application de messagerie. Tu l'installes sur ton ordinateur ou un serveur, il se connecte a tes applications de messagerie, et tu dialogues avec ton assistant comme avec un contact ordinaire.</p>
<h2>Les quatre differenciateurs cles</h2>
<ul>
  <li><strong>Self-hosted — tu possedes tes donnees</strong> : Contrairement aux assistants IA en SaaS, tout tourne sur ta machine. Tes conversations ne transitent jamais par un serveur tiers au-dela de l'API Anthropic elle-meme.</li>
  <li><strong>Multi-canal — un assistant, plusieurs applications</strong> : Un seul assistant repond sur WhatsApp, Telegram, Discord, iMessage, Signal, Slack et Google Chat simultanement.</li>
  <li><strong>Acces aux outils — il peut agir, pas seulement repondre</strong> : OpenClaw peut naviguer sur le web, executer des commandes, gerer des fichiers et controler des applications.</li>
  <li><strong>Open source — aucun vendor lock-in</strong> : Le code est public, auditable et modifiable. Tu ne depends d'aucune entreprise pour continuer a l'utiliser.</li>
</ul>
<h2>Comparaison avec les alternatives</h2>
<p>Les assistants IA grand public comme ChatGPT ou Claude.ai sont des interfaces web centralisees. Toutes tes conversations sont stockees sur les serveurs du fournisseur. OpenClaw renverse ce modele : l'assistant vit chez toi, accessible via les applications que tu utilises deja au quotidien.</p>
<h2>Modeles IA supportes</h2>
<p>Bien qu'optimise pour Claude d'Anthropic, OpenClaw supporte plusieurs fournisseurs d'IA : <strong>OpenAI</strong> (GPT), <strong>Google</strong> (Gemini) et d'autres. Tu peux changer de modele selon ton besoin ou ton budget.</p>
<h2>Cout reel</h2>
<p>OpenClaw lui-meme est <strong>gratuit</strong>. Le seul cout recurrent est l'API Anthropic, qui revient generalement entre <strong>5 et 20 euros par mois</strong> selon l'usage. Aucun abonnement plateforme, aucune limite artificielle de messages.</p>`,
    exercise: `<p>Rends-toi sur le depot GitHub officiel d'OpenClaw (https://github.com/openclaw/openclaw) et sur la documentation (https://docs.openclaw.ai). Reponds par ecrit aux trois questions suivantes : (1) Quelle licence open source utilise OpenClaw ? (2) Combien d'applications de messagerie sont officiellement supportees ? (3) Quel est le prerequis minimum de version Node.js ?</p>`,
  },
  {
    order: 22,
    module: 5,
    title: "Installation et configuration initiale",
    slug: "openclaw-installation",
    duration: "25 min",
    description: "Installe OpenClaw pas a pas sur Mac, Windows ou Linux et lance la passerelle pour la premiere fois.",
    content: `<h2>Prerequis systeme</h2>
<p>Avant de commencer, assure-toi de disposer des elements suivants :</p>
<ul>
  <li><strong>Systeme d'exploitation</strong> : Mac, Windows ou Linux — tous trois sont supportes.</li>
  <li><strong>Node.js v22 ou superieur</strong> : OpenClaw requiert cette version minimale. Verifie ta version avec <code>node --version</code> dans ton terminal.</li>
  <li><strong>Une cle API Anthropic</strong> : Obtenue sur console.anthropic.com apres creation d'un compte et ajout d'un moyen de paiement.</li>
</ul>
<h2>Les trois commandes d'installation</h2>
<p>L'installation complete tient en trois commandes executees dans ton terminal :</p>
<ul>
  <li><strong>Installation globale du paquet</strong> : <code>npm install -g @openclaw/openclaw</code> — installe OpenClaw comme commande globale sur ton systeme.</li>
  <li><strong>Assistant de configuration</strong> : <code>openclaw setup</code> — lance un assistant interactif qui te guide pour saisir ta cle API et configurer les options de base.</li>
  <li><strong>Demarrage de la passerelle</strong> : <code>openclaw gateway</code> — demarre le processus qui ecoute tes messages entrants et fait le lien avec l'API Claude.</li>
</ul>
<h2>Ce que fait l'assistant de configuration</h2>
<p>La commande <code>openclaw setup</code> est un assistant (wizard) qui te pose des questions sur : ta cle API Anthropic, le ou les canaux de messagerie que tu veux activer, les options de securite de base. Tu n'as pas a editer de fichiers de configuration manuellement.</p>
<h2>Verifier que ca fonctionne</h2>
<p>Apres <code>openclaw gateway</code>, le terminal doit afficher un message confirmant que la passerelle est active et en attente de connexions. Si tu vois une erreur liee a la cle API, verifie que tu l'as copiee exactement depuis console.anthropic.com.</p>
<h2>Deploiement : garder OpenClaw actif</h2>
<p>OpenClaw doit tourner en permanence pour recevoir tes messages. Plusieurs options existent selon tes contraintes :</p>
<ul>
  <li>Un <strong>Mac Mini</strong> ou un vieil ordinateur portable laisse allume en permanence</li>
  <li>Un <strong>serveur cloud</strong> (VPS) entre 5 et 10 euros par mois</li>
  <li>Un <strong>Raspberry Pi</strong> pour une solution economique et autonome en energie</li>
</ul>`,
    exercise: `<p>Installe Node.js v22+ sur ta machine si ce n'est pas deja fait. Ensuite, execute <code>npm install -g @openclaw/openclaw</code> et <code>openclaw setup</code>. Note chaque etape que l'assistant de configuration te demande de remplir et decris le resultat. Si tu n'as pas encore de cle API Anthropic, rends-toi sur console.anthropic.com et cree-en une — note le processus de creation.</p>`,
  },
  {
    order: 23,
    module: 5,
    title: "Connecter ses applications de messagerie",
    slug: "openclaw-messagerie",
    duration: "25 min",
    description: "Apprends a connecter Telegram, WhatsApp et les autres canaux supportes, du plus simple au plus complexe.",
    content: `<h2>Les canaux de messagerie supportes</h2>
<p>OpenClaw se connecte a sept applications de messagerie : <strong>WhatsApp, Telegram, Discord, iMessage, Signal, Slack et Google Chat</strong>. Chaque canal a sa propre procedure de connexion, avec des niveaux de complexite differents.</p>
<h2>Telegram : le point de depart recommande</h2>
<p>Telegram est le canal le plus simple a connecter et celui recommande pour commencer. La procedure est la suivante :</p>
<ul>
  <li>Ouvre Telegram et recherche le bot officiel <strong>BotFather</strong></li>
  <li>Envoie la commande <code>/newbot</code> et suis les instructions pour nommer ton bot</li>
  <li>BotFather te fournit un <strong>token API</strong> — copie-le</li>
  <li>Colle ce token dans la configuration OpenClaw lors du setup ou via la commande de reconfiguration</li>
  <li>Lance la passerelle et envoie un message a ton bot pour tester</li>
</ul>
<p>L'avantage de Telegram est que tout est numerique : pas de scan physique, pas d'application mobile requise pour la configuration, et l'API bot est robuste et gratuite.</p>
<h2>WhatsApp : connexion par QR code</h2>
<p>WhatsApp necessite une etape supplementaire : un <strong>scan de QR code</strong>. Lors de la configuration du canal WhatsApp, OpenClaw affiche un QR code dans le terminal que tu dois scanner avec ton telephone via l'option "Appareils connectes" de WhatsApp. Cette methode utilise l'interface WhatsApp Web et ne requiert pas de compte WhatsApp Business ni d'acces a l'API officielle Meta.</p>
<h2>Les autres canaux</h2>
<p>Discord, Slack et Google Chat requierent generalement la creation d'une application ou d'un bot dans le portail developpeur du service concerne, puis l'ajout du token ou des credentials dans OpenClaw. iMessage et Signal ont leurs propres specificites documentees sur docs.openclaw.ai.</p>
<h2>Strategie multi-canal</h2>
<p>L'un des avantages d'OpenClaw est qu'un seul assistant repond sur tous les canaux actives. Tu peux envoyer un message depuis Telegram au bureau et continuer sur WhatsApp depuis ton telephone — c'est le meme assistant avec le meme contexte.</p>`,
    exercise: `<p>Connecte au moins un canal de messagerie a OpenClaw. Commence par Telegram : cree un bot avec BotFather, recupere le token et configure-le dans OpenClaw. Une fois la passerelle demarree, envoie trois messages differents a ton assistant : une question factuelle, une demande de calcul et une demande de redaction courte. Note les reponses obtenues.</p>`,
  },
  {
    order: 24,
    module: 5,
    title: "Securite et confidentialite de l'installation",
    slug: "openclaw-securite",
    duration: "20 min",
    description: "Protege ton installation OpenClaw avec les bonnes pratiques de securite pour eviter tout acces non autorise.",
    content: `<h2>Pourquoi la securite est critique</h2>
<p>OpenClaw donne a quiconque peut lui envoyer un message la capacite de naviguer sur le web, de gerer des fichiers et d'executer des commandes sur ta machine. Si ton installation est accessible sans restriction, n'importe qui pourrait s'en servir — et potentiellement interagir avec ton systeme.</p>
<h2>Regle numero un : toujours activer l'authentification</h2>
<p>OpenClaw supporte deux methodes d'authentification pour filtrer les interlocuteurs autorises :</p>
<ul>
  <li><strong>Mot de passe ou token</strong> : Un code secret que les utilisateurs doivent fournir pour commencer a interagir avec l'assistant.</li>
  <li><strong>Allowlist de numeros ou d'identifiants</strong> : Une liste blanche de numeros de telephone ou de noms d'utilisateurs auxquels seuls les messages sont acceptes. Tout message provenant d'un contact hors liste est ignore.</li>
</ul>
<h2>Rester local par defaut</h2>
<p>Par defaut, il est recommande de ne pas exposer OpenClaw sur Internet. Garde-le accessible uniquement sur ton reseau local. Si tu as besoin d'y acceder a distance, utilise <strong>Tailscale</strong> : un VPN personnel simple qui cree un reseau prive entre tes appareils sans ouvrir de port sur ton routeur.</p>
<h2>L'audit de securite integre</h2>
<p>OpenClaw inclut une commande dediee pour verifier ta configuration de securite :</p>
<p><code>openclaw security audit</code></p>
<p>Cette commande analyse ton installation et signale les points vulnerables : authentification absente, ports ouverts, allowlist vide, etc. Fais-la tourner apres chaque modification importante de ta configuration.</p>
<h2>Usage personnel, pas partage</h2>
<p>OpenClaw est concu comme un outil <strong>personnel</strong>. Il n'est pas prevu pour etre partage entre plusieurs utilisateurs dans un contexte professionnel ou public. Traite-le comme tu traiterais l'acces a ton ordinateur personnel.</p>
<h2>Synthese des bonnes pratiques</h2>
<ul>
  <li>Active toujours l'authentification (mot de passe ou token)</li>
  <li>Definis une allowlist des numeros ou identifiants autorises</li>
  <li>Reste local par defaut, utilise Tailscale pour l'acces distant</li>
  <li>Lance <code>openclaw security audit</code> regulierement</li>
  <li>Traite l'installation comme personnelle, non partagee</li>
</ul>`,
    exercise: `<p>Apres avoir configure OpenClaw, lance la commande <code>openclaw security audit</code> et lis le rapport produit. Identifie au moins deux points que le rapport signale et documente les actions que tu as prises pour les corriger. Si l'audit ne signale aucun probleme, decris ce que chaque point verifie selon la documentation.</p>`,
  },
  {
    order: 25,
    module: 5,
    title: "Les capacites d'action : ce qu'OpenClaw peut faire",
    slug: "openclaw-capacites",
    duration: "30 min",
    description: "Explore les sept categories de capacites d'action d'OpenClaw, des taches web a la gestion de fichiers en passant par les appels vocaux.",
    content: `<h2>Au-dela de la conversation : un assistant qui agit</h2>
<p>La difference fondamentale entre OpenClaw et un simple chatbot tient a ses <strong>capacites d'action</strong>. Il ne se contente pas de repondre a des questions — il peut interagir avec le monde numerique autour de toi.</p>
<h2>1. Repondre sur tous les canaux de messagerie</h2>
<p>L'assistant repond sur WhatsApp, Telegram, Discord, iMessage, Signal, Slack et Google Chat. Le meme assistant, la meme memoire de contexte, sur toutes tes applications simultanement.</p>
<h2>2. Naviguer sur le web et effectuer des recherches</h2>
<p>OpenClaw peut <strong>naviguer sur Internet, effectuer des recherches Google et compiler des informations</strong>. Tu peux lui demander de faire une veille concurrentielle, de trouver des informations specifiques ou de synthétiser un sujet d'actualite — sans ouvrir ton navigateur.</p>
<h2>3. Gerer des fichiers et des documents</h2>
<p>L'assistant peut lire, creer et modifier des fichiers sur ta machine ou les services connectes. Cela inclut la gestion de documents texte, de tableurs ou d'autres formats selon la configuration.</p>
<h2>4. Controler le navigateur</h2>
<p>OpenClaw peut <strong>remplir des formulaires, prendre des captures d'ecran</strong> et interagir avec des pages web de maniere programmatique. Cette capacite ouvre la porte a des automations qui requierent habituellement un outil de scraping dedie.</p>
<h2>5. Les Skills : modules d'instruction preconfigurees</h2>
<p>Les <strong>Skills</strong> sont des jeux d'instructions prebuilt disponibles sur <strong>clawhub.com</strong>. Ils permettent a OpenClaw de s'integrer avec des services specifiques sans configuration manuelle complexe :</p>
<ul>
  <li>Google Workspace (Docs, Sheets, Gmail, Calendar)</li>
  <li>Notion</li>
  <li>Todoist</li>
  <li>Slack</li>
  <li>Generation d'images</li>
  <li>Appels vocaux</li>
</ul>
<h2>6. Taches planifiees</h2>
<p>Tu peux configurer des <strong>taches recurrentes automatiques</strong> : un briefing matinal qui compile les actualites et ton agenda, un resume hebdomadaire de tes taches terminees, etc. L'assistant s'execute selon le planning defini sans intervention de ta part.</p>
<h2>7. L'application telephone compagnon</h2>
<p>Une application compagnon pour smartphone permet a OpenClaw d'acceder aux <strong>photos, captures d'ecran, notifications et localisation</strong> de ton telephone. Tu peux photographier un document et demander a ton assistant de l'analyser directement depuis l'application de messagerie de ton choix.</p>`,
    exercise: `<p>Teste trois capacites distinctes d'OpenClaw. Pour chaque capacite, formule une requete concrete et note le resultat : (1) demande-lui de faire une recherche sur un sujet de ton choix et de te livrer une synthese, (2) demande-lui de gerer un fichier texte simple (creation ou modification), (3) installe un Skill depuis clawhub.com et effectue une action avec ce Skill. Decris les resultats obtenus.</p>`,
  },
  {
    order: 26,
    module: 5,
    title: "Cas d'usage concrets : automatiser ses workflows",
    slug: "openclaw-cas-usage",
    duration: "35 min",
    description: "Decouvre les cinq cas d'usage principaux d'OpenClaw avec des exemples detailles applicables immediatement.",
    content: `<h2>Passer de la theorie a la pratique</h2>
<p>OpenClaw prend toute sa valeur lorsqu'on l'applique a des situations reelles. Voici cinq cas d'usage documentés qui illustrent comment l'assistant peut transformer des workflows manuels en processus automatises.</p>
<h2>Cas 1 : Preparation automatique de reunions</h2>
<p>OpenClaw peut surveiller ton <strong>calendrier</strong>, identifier les reunions a venir, <strong>rechercher les participants sur LinkedIn</strong> et te livrer un briefing complet avant chaque rendez-vous : contexte de l'entreprise, profil des interlocuteurs, sujets probables. Tu arrives en reunion prepare sans avoir passe du temps a chercher manuellement.</p>
<h2>Cas 2 : Creation de contenu depuis le telephone</h2>
<p>Tu as une idee de contenu en deplacement ? Envoie un message vocal ou texte depuis ton telephone. OpenClaw peut <strong>faire les recherches necessaires, rediger un brouillon, proposer des titres accrocheurs et generer une vignette</strong> pour l'article ou la video. Le tout sans ouvrir un ordinateur.</p>
<h2>Cas 3 : Tri des emails et des taches</h2>
<p>OpenClaw peut categoriser automatiquement tes emails et taches entrants selon trois niveaux :</p>
<ul>
  <li><strong>IA-completable</strong> : L'assistant peut traiter cela sans toi</li>
  <li><strong>IA-assiste</strong> : L'assistant prepare une reponse ou un plan que tu valides</li>
  <li><strong>Requiert un humain</strong> : Necessite ton jugement ou une action physique</li>
</ul>
<p>Ce systeme de tri permet de concentrer ton attention uniquement sur ce qui exige vraiment ton intervention.</p>
<h2>Cas 4 : Prospection pour podcast ou partenariats</h2>
<p>Pour trouver des invites ou des partenaires, OpenClaw peut <strong>rechercher des createurs de contenu</strong> dans une niche, <strong>trouver leurs coordonnees</strong> et <strong>rediger des messages de contact personnalises</strong> bases sur leur travail. Ce qui prendrait plusieurs heures manuellement devient une tache de quelques minutes.</p>
<h2>Cas 5 : Appels vocaux via Twilio</h2>
<p>Grace a une integration avec <strong>Twilio</strong>, OpenClaw peut passer et recevoir des <strong>appels vocaux</strong>. Tu peux dicter des instructions par telephone et l'assistant les execute, ou configurer un numero de telephone qui repond et qualifie les appels entrants.</p>
<h2>Recherches rapides en mobilite</h2>
<p>Au-dela des workflows complexes, l'usage quotidien le plus frequent est la <strong>recherche rapide en deplacement</strong> : un chiffre de marche, une adresse, une information produit — envoyee directement dans ton fil de messages, sans changer d'application.</p>`,
    exercise: `<p>Choisis deux des cinq cas d'usage presentes et implemente-les avec ton installation OpenClaw. Pour la preparation de reunions, cree un evenement de calendrier fictif et demande a l'assistant de preparer un briefing sur l'entreprise fictive. Pour le tri de taches, fournis a l'assistant une liste de dix taches melangees et demande-lui de les categoriser selon les trois niveaux. Partage les resultats et evalue leur utilite reelle.</p>`,
  },
  {
    order: 27,
    module: 5,
    title: "Skills et personnalisation avancee",
    slug: "openclaw-skills",
    duration: "30 min",
    description: "Apprends a installer, configurer et creer tes propres Skills pour etendre les capacites d'OpenClaw.",
    content: `<h2>Qu'est-ce qu'un Skill ?</h2>
<p>Un <strong>Skill</strong> est un jeu d'instructions preconfigurees qui donne a OpenClaw une competence specifique. Plutot que de decrire manuellement comment interagir avec Notion ou Google Sheets a chaque fois, un Skill encapsule cette logique et la rend disponible immediatement.</p>
<h2>La marketplace ClaWHub</h2>
<p>Les Skills sont distribues via <strong>clawhub.com</strong>, la marketplace officielle. Tu peux y trouver des Skills pour :</p>
<ul>
  <li><strong>Google Workspace</strong> : lire et ecrire dans Google Docs, Sheets, Gmail et Calendar</li>
  <li><strong>Notion</strong> : creer des pages, des bases de donnees et des entrees</li>
  <li><strong>Todoist</strong> : ajouter et gerer des taches</li>
  <li><strong>Slack</strong> : envoyer des messages dans des canaux ou a des personnes specifiques</li>
  <li><strong>Generation d'images</strong> : generer des visuels depuis une description textuelle</li>
  <li><strong>Appels vocaux</strong> : passer des appels via Twilio</li>
</ul>
<h2>Installer un Skill</h2>
<p>L'installation d'un Skill suit generalement ces etapes : selectionner le Skill sur clawhub.com, suivre les instructions d'installation specifiques au service cible (qui impliquent souvent de fournir des credentials ou des cles API du service tiers), puis tester le Skill via ton canal de messagerie habituel.</p>
<h2>Taches planifiees avec les Skills</h2>
<p>Les Skills peuvent etre associes a des taches planifiees pour des executions automatiques recurrentes. Par exemple :</p>
<ul>
  <li>Chaque matin a 7h, le Skill Google Calendar extrait tes evenements du jour et te les envoie sur Telegram avec un resume genere par Claude</li>
  <li>Chaque vendredi, le Skill Todoist extrait tes taches completees de la semaine et genere un rapport de productivite</li>
</ul>
<h2>Creer un Skill personnalise</h2>
<p>Les Skills etant bases sur des jeux d'instructions en langage naturel, tu peux en creer pour des services non repertories sur clawhub.com. La documentation sur docs.openclaw.ai decrit le format attendu. C'est une maniere puissante d'etendre OpenClaw a des outils specifiques a ton metier ou a tes clients.</p>
<h2>Limites a connaitre</h2>
<p>Chaque Skill integrant un service tiers herite des limites de ce service : quotas d'API, restrictions d'authentification, disponibilite. Un Skill Google Workspace necessite un compte Google avec les permissions appropriees, et les quotas de l'API Google s'appliquent.</p>`,
    exercise: `<p>Rends-toi sur clawhub.com et explore le catalogue de Skills disponibles. Choisis un Skill compatible avec un service que tu utilises deja (Notion, Google Workspace, Todoist ou autre). Installe-le, effectue trois actions differentes via ton canal de messagerie et documente les resultats. Note egalement quelles credentials ou permissions le Skill a necessitees.</p>`,
  },
  {
    order: 28,
    module: 5,
    title: "Deploiement perenne et ressources de la communaute",
    slug: "openclaw-deploiement",
    duration: "25 min",
    description: "Rends ton installation OpenClaw fiable et permanente, et decouvre comment continuer a progresser avec la communaute.",
    content: `<h2>Le probleme du deploiement perenne</h2>
<p>OpenClaw doit tourner en continu pour etre utile. Si ton ordinateur principal s'eteint ou se met en veille, l'assistant ne repond plus. Choisir la bonne strategie de deploiement est donc une decision importante.</p>
<h2>Option 1 : Machine dediee a domicile</h2>
<p>La solution la plus simple est de dedier une machine physique a OpenClaw :</p>
<ul>
  <li><strong>Mac Mini</strong> : silencieux, peu gourmand en energie, reste allume en permanence</li>
  <li><strong>Vieil ordinateur portable</strong> : recycle une machine existante en serveur maison</li>
  <li><strong>Raspberry Pi</strong> : solution tres economique en consommation electrique, adaptee si les besoins de calcul sont modestes</li>
</ul>
<h2>Option 2 : Serveur cloud (VPS)</h2>
<p>Un <strong>serveur prive virtuel</strong> (VPS) chez un hebergeur cloud offre une disponibilite garantie sans materiel a gerer. Le cout est de <strong>5 a 10 euros par mois</strong> pour une instance suffisante pour faire tourner OpenClaw. L'avantage est qu'il est accessible de n'importe ou sans configuration VPN.</p>
<h2>Acces distant securise avec Tailscale</h2>
<p>Si tu deposes OpenClaw sur une machine a domicile et veux y acceder depuis l'exterieur, <strong>Tailscale</strong> est la solution recommandee. Tailscale cree un reseau prive entre tes appareils sans ouvrir de ports sur ton routeur, ce qui evite d'exposer directement ta machine sur Internet.</p>
<h2>Demarrage automatique</h2>
<p>Pour qu'OpenClaw reprenne apres un redemarrage de machine, il faut configurer <code>openclaw gateway</code> comme service systeme. Sur Linux, cela passe par systemd. Sur Mac, par launchd. La documentation officielle decrit la procedure pour chaque systeme.</p>
<h2>Ressources officielles</h2>
<p>Pour continuer a progresser et resoudre les problemes que tu rencontreras, voici les ressources a connaitre :</p>
<ul>
  <li><strong>Documentation</strong> : https://docs.openclaw.ai — reference exhaustive de toutes les commandes, options et intégrations</li>
  <li><strong>GitHub</strong> : https://github.com/openclaw/openclaw — code source, issues, contributions et changelog</li>
  <li><strong>ClaWHub</strong> : https://clawhub.com — marketplace de Skills</li>
  <li><strong>Discord communautaire</strong> : https://discord.gg/openclaw — entraide, annonces et retours d'experience d'autres utilisateurs</li>
</ul>
<h2>Maintenir son installation a jour</h2>
<p>OpenClaw etant open source et en developpement actif, de nouvelles versions sortent regulierement. Pour mettre a jour : <code>npm install -g @openclaw/openclaw</code> — la meme commande que l'installation initiale installe toujours la derniere version. Consulte le changelog sur GitHub avant de mettre a jour sur une installation en production pour anticiper les changements de comportement.</p>`,
    exercise: `<p>Choisis une strategie de deploiement perenne pour ton installation OpenClaw et mets-la en oeuvre. Si tu utilises un VPS, documente le fournisseur choisi, le prix et les etapes de configuration. Si tu utilises une machine locale, configure le demarrage automatique d'OpenClaw au reboot et verifie qu'il redémarre bien apres un redemarrage de test. Rejoins le Discord communautaire OpenClaw et presente ton installation dans le canal approprie.</p>`,
  },

// Add to the quizzes Record in makeQuiz function (after the existing quiz for lesson 1):
    21: [
      { q: "OpenClaw est un outil payant par abonnement mensuel.", o: ["Vrai", "Faux"], a: "Faux", e: "OpenClaw est gratuit et open source. Le seul cout recurrent est l'utilisation de l'API Anthropic, estimee entre 5 et 20 euros par mois selon l'usage.", t: "true_false" },
      { q: "Quel est l'avantage principal d'une installation self-hosted comme OpenClaw par rapport a un assistant SaaS ?", o: ["L'interface est plus belle", "Tu possedes tes donnees et elles ne transitent pas par un serveur tiers", "Il fonctionne sans connexion Internet", "Il ne necessite pas de cle API"], a: "Tu possedes tes donnees et elles ne transitent pas par un serveur tiers", e: "Avec une installation self-hosted, toutes les conversations restent sur ta machine. Aucun serveur tiers ne stocke tes echanges au-dela de l'API Anthropic elle-meme.", t: "mcq" },
      { q: "Parmi les applications suivantes, laquelle n'est PAS supportee par OpenClaw comme canal de messagerie ?", o: ["Telegram", "Signal", "Snapchat", "Discord"], a: "Snapchat", e: "OpenClaw supporte WhatsApp, Telegram, Discord, iMessage, Signal, Slack et Google Chat. Snapchat ne fait pas partie des canaux integres.", t: "mcq" },
      { q: "OpenClaw ne fonctionne qu'avec le modele Claude d'Anthropic et ne supporte pas d'autres fournisseurs d'IA.", o: ["Vrai", "Faux"], a: "Faux", e: "OpenClaw supporte plusieurs fournisseurs d'IA dont OpenAI (GPT), Google (Gemini) et d'autres, en plus de Claude.", t: "true_false" },
      { q: "Qu'est-ce que le 'vendor lock-in' que l'open source d'OpenClaw permet d'eviter ?", o: ["La dependance envers un fournisseur unique dont on ne peut pas se passer", "Le cout d'une licence logicielle", "La necessite d'avoir un developpeur dans son equipe", "L'obligation de mettre a jour regulierement"], a: "La dependance envers un fournisseur unique dont on ne peut pas se passer", e: "Etre open source signifie que le code est public et que n'importe qui peut l'auditer, le modifier ou le forker. Tu ne depends d'aucune entreprise pour continuer a utiliser l'outil.", t: "mcq" },
    ],
    22: [
      { q: "Quelle version minimale de Node.js est requise pour installer OpenClaw ?", o: ["Node.js v16", "Node.js v18", "Node.js v20", "Node.js v22"], a: "Node.js v22", e: "OpenClaw requiert Node.js v22 ou superieur. Une version inferieure peut provoquer des erreurs lors de l'installation ou de l'execution.", t: "mcq" },
      { q: "Quelle commande demarre la passerelle OpenClaw qui ecoute les messages entrants ?", o: ["openclaw start", "openclaw run", "openclaw gateway", "openclaw connect"], a: "openclaw gateway", e: "La commande 'openclaw gateway' demarre le processus principal qui ecoute les messages entrants et fait le lien avec l'API Anthropic.", t: "mcq" },
      { q: "La cle API Anthropic peut etre obtenue gratuitement et sans moyen de paiement sur console.anthropic.com.", o: ["Vrai", "Faux"], a: "Faux", e: "Un compte Anthropic necessite l'ajout d'un moyen de paiement pour generer une cle API, car l'utilisation de l'API est facturee a l'usage.", t: "true_false" },
      { q: "Quel est l'objectif de la commande 'openclaw setup' ?", o: ["Mettre a jour OpenClaw vers la derniere version", "Lancer un assistant interactif de configuration initiale", "Redemarrer la passerelle en cas de panne", "Auditer la securite de l'installation"], a: "Lancer un assistant interactif de configuration initiale", e: "La commande 'openclaw setup' est un wizard qui guide l'utilisateur pour saisir sa cle API et configurer les options de base, sans avoir a editer des fichiers manuellement.", t: "mcq" },
      { q: "Un Raspberry Pi est une option valide pour heberger OpenClaw en permanence.", o: ["Vrai", "Faux"], a: "Vrai", e: "Le Raspberry Pi est explicitement cite comme option de deploiement pour garder OpenClaw actif en permanence, avec l'avantage d'une consommation electrique tres faible.", t: "true_false" },
    ],
    23: [
      { q: "Quel canal de messagerie est recommande comme point de depart pour connecter OpenClaw, car il est le plus simple a configurer ?", o: ["WhatsApp", "Discord", "Telegram", "iMessage"], a: "Telegram", e: "Telegram est le canal le plus simple a connecter : il suffit de creer un bot via BotFather, de copier le token API fourni et de le coller dans la configuration OpenClaw.", t: "mcq" },
      { q: "Pour connecter WhatsApp a OpenClaw, quelle etape specifique est requise et absente pour Telegram ?", o: ["Creer un compte WhatsApp Business", "Scanner un QR code avec son telephone", "Payer un abonnement a l'API Meta", "Installer une extension navigateur"], a: "Scanner un QR code avec son telephone", e: "La connexion WhatsApp passe par un scan de QR code affiche dans le terminal, similaire a WhatsApp Web. Cela ne necessite pas de compte WhatsApp Business.", t: "mcq" },
      { q: "OpenClaw permet de gerer un assistant different par canal de messagerie, avec une memoire separee pour chaque.", o: ["Vrai", "Faux"], a: "Faux", e: "Un seul et meme assistant repond sur tous les canaux actives. C'est le meme assistant avec le meme contexte, qu'on l'interroge depuis Telegram, WhatsApp ou Discord.", t: "true_false" },
      { q: "Quel service met a disposition un 'BotFather' pour creer des bots et obtenir des tokens API ?", o: ["WhatsApp", "Signal", "Telegram", "Slack"], a: "Telegram", e: "BotFather est le bot officiel de Telegram qui permet de creer de nouveaux bots et de recuperer leurs tokens API.", t: "mcq" },
      { q: "OpenClaw supporte exactement cinq applications de messagerie.", o: ["Vrai", "Faux"], a: "Faux", e: "OpenClaw supporte sept applications de messagerie : WhatsApp, Telegram, Discord, iMessage, Signal, Slack et Google Chat.", t: "true_false" },
    ],
    24: [
      { q: "Quelle commande OpenClaw permet de verifier les vulnerabilites de securite d'une installation ?", o: ["openclaw check", "openclaw security audit", "openclaw scan", "openclaw verify"], a: "openclaw security audit", e: "La commande 'openclaw security audit' analyse la configuration et signale les points vulnerables : authentification absente, ports ouverts, allowlist vide, etc.", t: "mcq" },
      { q: "L'allowlist dans OpenClaw sert a :", o: ["Lister les Skills installes", "Definir les numeros ou identifiants autorises a envoyer des messages a l'assistant", "Stocker les commandes les plus utilisees", "Configurer les fournisseurs d'IA acceptes"], a: "Definir les numeros ou identifiants autorises a envoyer des messages a l'assistant", e: "L'allowlist est une liste blanche de numeros de telephone ou de noms d'utilisateurs. Tout message provenant d'un contact hors liste est ignore par OpenClaw.", t: "mcq" },
      { q: "OpenClaw est concu pour etre deploye comme service partage entre plusieurs utilisateurs en entreprise.", o: ["Vrai", "Faux"], a: "Faux", e: "OpenClaw est explicitement concu comme un outil personnel, non partage. Il doit etre traite comme l'acces a un ordinateur personnel.", t: "true_false" },
      { q: "Quel outil est recommande pour acceder a distance a une installation OpenClaw locale sans ouvrir de port sur son routeur ?", o: ["Cloudflare Tunnel", "Tailscale", "ngrok", "SSH direct"], a: "Tailscale", e: "Tailscale est un VPN personnel qui cree un reseau prive entre les appareils de l'utilisateur sans necessiter l'ouverture de ports sur le routeur, ce qui evite d'exposer directement la machine sur Internet.", t: "mcq" },
      { q: "Activer un mot de passe ou un token d'authentification est optionnel si l'on utilise deja une allowlist de numeros.", o: ["Vrai", "Faux"], a: "Faux", e: "La bonne pratique recommandee est de toujours activer l'authentification (mot de passe ou token) en complement de l'allowlist. Les deux couches de securite se completent.", t: "true_false" },
    ],
    25: [
      { q: "Qu'est-ce qu'un 'Skill' dans OpenClaw ?", o: ["Un module d'extension payant", "Un jeu d'instructions preconfigures qui donne a l'assistant une competence specifique", "Une fonctionnalite de securite", "Un type de canal de messagerie"], a: "Un jeu d'instructions preconfigures qui donne a l'assistant une competence specifique", e: "Les Skills sont des modules d'instructions prebuilt disponibles sur clawhub.com. Ils permettent a OpenClaw de s'integrer avec des services comme Google Workspace, Notion ou Todoist sans configuration manuelle complexe.", t: "mcq" },
      { q: "OpenClaw peut controler un navigateur web pour remplir des formulaires et prendre des captures d'ecran.", o: ["Vrai", "Faux"], a: "Vrai", e: "Le controle du navigateur est une capacite d'action documentee d'OpenClaw, qui peut remplir des formulaires et prendre des captures d'ecran de maniere programmatique.", t: "true_false" },
      { q: "Sur quelle plateforme trouve-t-on les Skills officiels pour OpenClaw ?", o: ["npmjs.com", "clawhub.com", "github.com/openclaw", "openclaw.ai/skills"], a: "clawhub.com", e: "ClaWHub (clawhub.com) est la marketplace officielle de Skills pour OpenClaw.", t: "mcq" },
      { q: "OpenClaw peut executer des taches planifiees de maniere automatique, sans intervention de l'utilisateur.", o: ["Vrai", "Faux"], a: "Vrai", e: "OpenClaw supporte les taches planifiees recurrentes, comme un briefing matinal quotidien ou un resume hebdomadaire, qui s'executent automatiquement selon le planning defini.", t: "true_false" },
      { q: "Quelle integration permet a OpenClaw de passer et recevoir des appels vocaux ?", o: ["Asterisk", "Twilio", "Vonage", "Google Voice directement"], a: "Twilio", e: "Grace a une integration avec Twilio, OpenClaw peut passer et recevoir des appels vocaux, ce qui permet par exemple de dicter des instructions par telephone.", t: "mcq" },
    ],
    26: [
      { q: "Dans le systeme de tri des emails et des taches d'OpenClaw, que designe la categorie 'AI-assiste' ?", o: ["L'assistant traite la tache entierement sans intervention humaine", "L'assistant prepare une reponse ou un plan que l'utilisateur valide ensuite", "La tache necessite uniquement une action physique", "L'assistant ignore ces taches"], a: "L'assistant prepare une reponse ou un plan que l'utilisateur valide ensuite", e: "La categorie 'AI-assiste' correspond aux taches pour lesquelles l'assistant prepare le travail (brouillon, plan, analyse) mais l'humain garde le controle final avant execution.", t: "mcq" },
      { q: "Le cas d'usage de preparation de reunions d'OpenClaw inclut une recherche automatique sur LinkedIn des participants.", o: ["Vrai", "Faux"], a: "Vrai", e: "La preparation automatique de reunions est documentee comme incluant la surveillance du calendrier, la recherche des participants sur LinkedIn et la creation d'un briefing complet avant chaque rendez-vous.", t: "true_false" },
      { q: "Pour le cas d'usage de prospection podcast, OpenClaw peut realiser quelle sequence de taches ?", o: ["Enregistrer et editer les episodes de podcast", "Rechercher des createurs, trouver leurs contacts et rediger des messages personnalises", "Automatiser la publication sur les plateformes de podcast", "Generer des transcriptions d'episodes existants"], a: "Rechercher des createurs, trouver leurs contacts et rediger des messages personnalises", e: "OpenClaw peut rechercher des createurs dans une niche, trouver leurs coordonnees et rediger des messages de contact personnalises bases sur leur travail.", t: "mcq" },
      { q: "Pour creer du contenu depuis son telephone, il est indispensable d'utiliser l'application telephone compagnon OpenClaw.", o: ["Vrai", "Faux"], a: "Faux", e: "On peut creer du contenu depuis son telephone simplement en envoyant un message texte ou vocal via l'application de messagerie connectee a OpenClaw, sans necessairement utiliser l'application compagnon dediee.", t: "true_false" },
      { q: "Le systeme de tri des taches d'OpenClaw propose combien de categories distinctes ?", o: ["Deux : IA et humain", "Trois : AI-completable, AI-assiste, requiert un humain", "Quatre : urgent, important, delegable, supprimable", "Cinq niveaux de priorite"], a: "Trois : AI-completable, AI-assiste, requiert un humain", e: "Le systeme de tri categorise les taches selon trois niveaux : ce que l'IA peut traiter seule, ce qu'elle prepare pour validation humaine, et ce qui necessite directement un humain.", t: "mcq" },
    ],
    27: [
      { q: "Sur quelle plateforme sont distribues les Skills pour OpenClaw ?", o: ["npmjs.com", "clawhub.com", "hub.openclaw.ai", "discord.gg/openclaw"], a: "clawhub.com", e: "ClaWHub (clawhub.com) est la marketplace officielle de Skills pour OpenClaw, ou l'on peut trouver et installer des integrations preconfigurées.", t: "mcq" },
      { q: "Un Skill Google Workspace pour OpenClaw peut lire et ecrire dans Google Docs, Sheets, Gmail et Calendar.", o: ["Vrai", "Faux"], a: "Vrai", e: "Le Skill Google Workspace est documente comme couvrant Google Docs, Sheets, Gmail et Calendar.", t: "true_false" },
      { q: "Quand on associe un Skill a une tache planifiee, qu'est-ce que cela permet de faire ?", o: ["Installer le Skill plus rapidement", "Executer automatiquement une action recurrente sans intervention manuelle", "Partager le Skill avec d'autres utilisateurs", "Tester le Skill en mode sandbox"], a: "Executer automatiquement une action recurrente sans intervention manuelle", e: "L'association d'un Skill a une tache planifiee permet d'automatiser des actions recurrentes, comme envoyer un briefing calendaire chaque matin ou generer un rapport hebdomadaire.", t: "mcq" },
      { q: "Les Skills OpenClaw ne peuvent etre crees que par l'equipe officielle et publies sur clawhub.com.", o: ["Vrai", "Faux"], a: "Faux", e: "Les Skills etant bases sur des jeux d'instructions en langage naturel, n'importe quel utilisateur peut en creer pour des services non repertories. La documentation sur docs.openclaw.ai decrit le format attendu.", t: "true_false" },
      { q: "Un Skill integrant un service tiers comme Google peut etre impacte par les quotas d'API de ce service.", o: ["Vrai", "Faux"], a: "Vrai", e: "Chaque Skill integrant un service tiers herite des contraintes de ce service : quotas d'API, restrictions d'authentification et disponibilite. Les quotas de l'API Google s'appliquent par exemple pour le Skill Google Workspace.", t: "true_false" },
    ],
    28: [
      { q: "Quel est le cout mensuel approximatif d'un VPS adapte pour faire tourner OpenClaw en continu ?", o: ["1 a 2 euros", "5 a 10 euros", "20 a 50 euros", "100 euros et plus"], a: "5 a 10 euros", e: "Un serveur VPS suffisant pour faire tourner OpenClaw revient a 5 a 10 euros par mois chez la plupart des hebergeurs cloud.", t: "mcq" },
      { q: "Quelle commande permet de mettre a jour OpenClaw vers la derniere version disponible ?", o: ["openclaw update", "openclaw upgrade", "npm install -g @openclaw/openclaw", "npm update openclaw"], a: "npm install -g @openclaw/openclaw", e: "La meme commande que l'installation initiale — 'npm install -g @openclaw/openclaw' — installe toujours la derniere version disponible, ce qui sert aussi a mettre a jour.", t: "mcq" },
      { q: "Pour rejoindre la communaute OpenClaw et obtenir de l'aide, l'adresse Discord officielle est discord.gg/openclaw.", o: ["Vrai", "Faux"], a: "Vrai", e: "Le Discord communautaire officiel est accessible via https://discord.gg/openclaw.", t: "true_false" },
      { q: "Tailscale est recommande pour acceder a distance a OpenClaw car il :", o: ["Est gratuit sans aucune limite d'utilisation", "Cree un reseau prive entre les appareils sans ouvrir de ports sur le routeur", "Offre une meilleure vitesse qu'une connexion directe", "Est integre nativement dans OpenClaw"], a: "Cree un reseau prive entre les appareils sans ouvrir de ports sur le routeur", e: "Tailscale est recommande car il cree un reseau prive chiffre entre les appareils de l'utilisateur sans necessiter l'ouverture de ports sur le routeur, evitant ainsi d'exposer directement la machine sur Internet.", t: "mcq" },
      { q: "La documentation officielle d'OpenClaw est hebergee sur docs.openclaw.ai.", o: ["Vrai", "Faux"], a: "Vrai", e: "La documentation officielle, reference exhaustive de toutes les commandes, options et integrations, est accessible sur https://docs.openclaw.ai.", t: "true_false" },
    ],
