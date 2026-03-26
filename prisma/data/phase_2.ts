// Phase 2 : ClawBot — Module 9 (6 leçons condensées)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 9 : ClawBot — Ton Agent IA Autonome (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 14,
    module: 9,
    title: "OpenClaw : qu'est-ce que c'est et pourquoi c'est révolutionnaire",
    slug: "openclaw-introduction-revolution",
    duration: "45 min",
    description: "Comprendre ce qu'est OpenClaw et pourquoi c'est un game-changer.",
    content: `<h2>OpenClaw n'est PAS un chatbot</h2>
<p>Avant de plonger dans le vif du sujet, il faut que tu comprennes une chose fondamentale : OpenClaw n'a <strong>rien à voir</strong> avec ChatGPT, Gemini où n'importe quel chatbot que tu as déjà utilisé. Un chatbot, c'est un outil passif — tu lui poses une question, il te répond, point final. OpenClaw, c'est un <strong>agent IA autonome</strong> qui tourne en continu — 24h/24, 7j/7 — sur ton ordinateur où un serveur cloud.</p>
<p>Concrètement, OpenClaw se connecte à WhatsApp, Telegram où Discord et <strong>prend des actions réelles en ton nom</strong>. Il envoie des emails, écrit et déploie du code, gère des calendriers, ouvre des pull requests GitHub et navigue sur le web. Tout ça pendant que tu dors, que tu es en réunion, où que tu profites de ton week-end.</p>
<p>Imagine la différence entre une calculatrice et un comptable. La calculatrice attend que tu tapes des chiffres. Le comptable, lui, va chercher les factures, fait les calculs, prépare les déclarations et t'envoie un résumé. OpenClaw, c'est ton comptable numérique — mais pour <strong>toutes</strong> tes tâches répétitives.</p>
<p><strong>Exemple concret :</strong> Un freelance développeur a configuré OpenClaw pour surveiller ses emails clients. Quand un client envoie une demande de devis, l'agent analyse la demande, génère un devis basé sur les tarifs enregistrés, et l'envoie au client — le tout en moins de 3 minutes, même à 2h du matin. Le freelance se réveille le lendemain avec un devis envoyé et un client impressionné par sa réactivité.</p>
<p><strong>Astuce :</strong> Pour bien comprendre la puissance d'OpenClaw, fais cet exercice mental : liste toutes les tâches que tu fais de manière répétitive chaque semaine. Emails, relances, rapports, veille, tri d'informations... Chacune de ces tâches est un candidat pour l'automatisation par un agent.</p>

<h2>La mémoire persistante</h2>
<p>C'est LA feature qui change absolument tout et qui sépare OpenClaw de tous les autres outils IA du marché. Contrairement à un chatbot classique qui repart de zéro à chaque conversation (tu dois ré-expliquer qui tu es, ce que tu fais, tes préférences à chaque fois...), OpenClaw possède une <strong>mémoire persistante</strong>. Il apprend tes préférences, ton contexte, ton style de communication et tes habitudes au fil du temps.</p>
<p>Pense à ça comme un assistant humain que tu embauches. Le premier jour, il ne connaît rien de toi ni de ton business. Tu dois tout lui expliquer. Après une semaine, il commence à connaître tes habitudes. Après un mois, il anticipe tes besoins avant même que tu les exprimes. C'est exactement la même dynamique avec OpenClaw : après 5-6 projets, l'agent comprend tes standards de qualité, tes clients habituels et ta façon de travailler suffisamment bien pour opérer avec un minimum de supervision.</p>
<p><strong>Comment ça marché en pratique :</strong> Tu dis à ton agent "Envoie un email à Marc pour le projet Dupont". Un chatbot classique te demanderait "Qui est Marc ? Quel est son email ? De quel projet parlez-vous ?". OpenClaw, lui, sait déjà que Marc c'est marc.durand@entreprise.fr, que le projet Dupont c'est la refonte du site e-commerce, et qu'il faut écrire dans un ton professionnel mais cordial parce que Marc est un client de longue date. Pas besoin de tout ré-expliquer à chaque fois.</p>
<p><strong>Attention :</strong> La mémoire persistante est une arme à double tranchant. Si tu donnes une mauvaise information à ton agent (un mauvais tarif, un mauvais contact), il s'en souviendra et l'utilisera. Corrige les erreurs rapidement. Un agent mal entraîné peut devenir un problème plutôt qu'une solution. Prends l'habitude de vérifier régulièrement ce que ton agent "sait" en lui demandant de résumer ses connaissances.</p>

<h2>Pourquoi ça change la donne</h2>
<p>Tu te demandes peut-être : "OK, c'est cool, mais en quoi c'est vraiment différent de ce qui existe déjà ?" Voici les 5 raisons pour lesquelles OpenClaw représente un changement de paradigme complet :</p>
<ul>
<li><strong>Travail 24/7 sans interruption</strong> : L'agent ne dort pas, ne prend pas de vacances, ne tombe pas malade, n'a pas de "mauvais jours". Il est aussi performant à 3h du matin un dimanche qu'à 14h un mardi. Pour tes clients internationaux dans des fuseaux horaires différents, c'est un avantage compétitif énorme. Un client au Japon t'envoie un message à 4h du matin heure française ? Ton agent répond en 30 secondes.</li>
<li><strong>Coût dérisoire</strong> : Un serveur cloud coûte 4-10€/mois. Compare ça à un salaire d'assistant (1 500-3 000€/mois minimum) où même à un stagiaire. Le rapport qualité/prix est tout simplement imbattable. Pour le prix d'un café par semaine, tu as un assistant qui ne dort jamais et ne demande jamais d'augmentation.</li>
<li><strong>Scalable à l'infini</strong> : Tu peux lancer 3, 5, 10 agents en parallèle, chacun gérant un client où un workflow différent. Essaie de faire ça avec des employés humains — ça te coûterait une fortune en recrutement, formation et salaires. Avec OpenClaw, chaque nouvel agent c'est juste 10€ de plus par mois et quelques heures de configuration.</li>
<li><strong>Open-source et transparent</strong> : Pas de lock-in chez un fournisseur, pas de surprises sur les prix, pas de features retirées du jour au lendemain parce qu'un CEO a décidé de "pivoter". La communauté est active, le code est transparent, et tu peux modifier absolument ce que tu veux. Si l'entreprise derrière OpenClaw disparaît demain, ton agent continue de tourner.</li>
<li><strong>Multi-canal natif</strong> : Telegram, WhatsApp, Discord — tes clients te contactent où ILS veulent, pas où TU décides. C'est du service premium sans effort supplémentaire. Plus besoin de vérifier 5 plateformes différentes : ton agent centralise tout.</li>
</ul>
<p><strong>Exemple parlant :</strong> Une agence web de 3 personnes a déployé un agent OpenClaw sur WhatsApp pour gérer le support client niveau 1. Résultat après 2 mois : temps de réponse passé de 4 heures en moyenne à 30 secondes, satisfaction client en hausse de 40%, et l'équipe se concentre désormais sur les demandes complexes à forte valeur ajoutée au lieu de répondre aux mêmes questions basiques 50 fois par jour.</p>

<h2>L'écosystème OpenClaw</h2>
<p>OpenClaw n'est pas un outil isolé — c'est tout un écosystème qui s'articule autour de plusieurs composants complémentaires. Comprendre cet écosystème est essentiel pour en tirer le maximum :</p>
<ul>
<li><strong>OpenClaw Core</strong> : C'est l'agent principal, le "cerveau" qui tourne sur ta machine où ton serveur. Il gère la logique, la mémoire et toutes les interactions. C'est la fondation sur laquelle tout le reste repose. Sans Core, rien ne fonctionne — c'est le moteur de ta voiture.</li>
<li><strong>ClawHub</strong> : Le marketplace communautaire de skills — pense à ça comme l'App Store de ton agent IA. Tu y trouves des centaines de skills gratuites et payantes créées par la communauté mondiale. Et surtout, tu peux y <strong>publier et vendre tes propres skills</strong> (on verra ça en détail dans le Module 5 — c'est là que les revenus passifs commencent).</li>
<li><strong>Agent Communication Protocol (ACP)</strong> : Le protocole standardisé qui permet à tes agents de se parler entre eux et de collaborer. C'est ce qui te permet de passer d'un seul agent à un véritable système multi-agents coordonné, comme une équipe virtuelle où chaque agent a sa spécialité.</li>
<li><strong>Skills</strong> : Des packs de compétences plug-and-play que tu peux installer où créer toi-même. Une skill, c'est un ensemble d'instructions et de code qui apprend à ton agent à faire quelque chose de nouveau : gérer un CRM, surveiller GitHub, rédiger des rapports, analyser des données, etc.</li>
</ul>
<p><strong>Analogie :</strong> Pense à OpenClaw Core comme un smartphone neuf sorti de la boîte. Les Skills, ce sont les applications que tu installes dessus. Le ClawHub, c'est l'App Store où tu les trouves. Et l'ACP, c'est le Bluetooth/WiFi qui permet à tes appareils de communiquer entre eux. Tout seul, le smartphone est utile. Avec les bonnes apps et connexions, il devient indispensable.</p>
<p><strong>Conseil pro :</strong> Ne te disperse pas au début. Commence par maîtriser OpenClaw Core avec 1-2 skills simples. Une fois que tu es à l'aise et que tu comprends la logique, explore le ClawHub et l'ACP. Rome ne s'est pas construite en un jour, et un agent bien configuré vaut mieux que 10 agents bâclés.</p>

<h2>Ce que tu peux faire avec OpenClaw</h2>
<p>Pour que tu visualises concrètement le potentiel et que tu commences déjà à imaginer tes propres cas d'usage, voici des exemples réels de ce que des utilisateurs font aujourd'hui avec OpenClaw :</p>
<ul>
<li><strong>Agent commercial WhatsApp</strong> : Un agent qui répond automatiquement aux demandes de devis sur WhatsApp, pose les bonnes questions de qualification ("Quel est votre budget ?", "Pour quand en avez-vous besoin ?"), et génère un devis personnalisé en quelques minutes. Un artisan plombier l'utilise et a doublé ses prises de rendez-vous parce qu'il ne rate plus jamais un prospect qui écrit le soir où le week-end.</li>
<li><strong>Agent e-réputation</strong> : Un agent qui surveille les avis Google de tes clients 24/7, analyse le sentiment (positif, négatif, neutre), et rédige des réponses appropriées — remerciement chaleureux pour les positifs, gestion de crise diplomatique pour les négatifs. Une agence de communication gère ainsi les avis de 15 restaurants simultanément avec un seul agent.</li>
<li><strong>Agent reporting automatisé</strong> : Un agent qui génère des rapports hebdomadaires à partir de données Notion, Google Sheets où Airtable, les met en forme avec des graphiques, et les envoie par email à tes clients chaque lundi matin à 8h. Tes clients sont impressionnés par ta rigueur et pensent que tu as travaillé tout le week-end — alors que tout est automatisé.</li>
<li><strong>Agent de veille stratégique</strong> : Un agent qui fait de la veille concurrentielle sur les réseaux sociaux, les sites d'actualité et les forums spécialisés, et te prépare un résumé quotidien des tendances, des mentions de tes concurrents et des opportunités de ton secteur.</li>
<li><strong>Agent inbox intelligent</strong> : Un agent qui gère ton inbox, trie les emails par priorité (urgent/important/informatif/spam), rédige des brouillons de réponse pour les emails courants, et te signale uniquement ce qui nécessite ton attention personnelle. Fini les 200 emails non lus le lundi matin — ton agent les a déjà triés et pré-traités.</li>
</ul>
<p><strong>Astuce :</strong> Le meilleur premier projet avec OpenClaw, c'est d'automatiser une tâche que TU fais toi-même de manière répétitive et qui ne nécessite pas de jugement créatif complexe. Identifie cette tâche, automatisé-la, constate le gain de temps, puis passe à la suivante. Procède par petites victoires.</p>

<h2>Le marché est grand ouvert</h2>
<p>Le projet a accumulé plus de 263 000 stars GitHub en moins de 3 semaines — c'est du jamais vu dans l'histoire de l'open-source, surpassant même les débuts de projets légendaires comme TensorFlow où React. Le ClawHub en est à ses tout débuts — comme l'App Store iOS dans sa première année, quand une simple application lampe torche pouvait se classer dans le top 10 des ventes.</p>
<p>Ce que ça signifie concrètement pour toi : <strong>les meilleures opportunités vont à ceux qui arrivent tôt</strong>. Les créateurs de skills qui se positionnent maintenant auront un avantage de premier arrivé (first-mover advantage) considérable : plus d'avis positifs, plus de visibilité dans les résultats de recherche, plus de crédibilité auprès des acheteurs.</p>
<p>L'histoire se répète : les premiers développeurs d'applications iOS sont devenus millionnaires avec des apps relativement basiques. Les premiers créateurs de thèmes WordPress ont bâti des entreprises à 7 chiffres de revenus annuels. Les premiers YouTubeurs ont construit des empires médiatiques avec du contenu amateur. À chaque nouvelle plateforme, la même fenêtre d'opportunité s'ouvre — et elle se referme au bout de quelques années quand le marché se sature.</p>
<p><strong>Attention :</strong> Cela ne veut pas dire que c'est facile où garanti. Il faut du travail, de la persévérance et de la qualité. Mais la fenêtre d'opportunité est grande ouverte <em>maintenant</em>. Dans 2-3 ans, le marché sera saturé de skills médiocres et il sera beaucoup plus difficile de se faire une place. Le moment d'agir, c'est aujourd'hui.</p>

<blockquote>OpenClaw est à l'automatisation ce que l'iPhone était aux applications mobiles en 2008. Le timing est parfait pour se positionner. La question n'est pas "est-ce que ça vaut le coup ?" mais "est-ce que je peux me permettre de ne PAS y être ?"</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Va sur le site officiel d'OpenClaw et explore la documentation.</li>
<li>Parcours le ClawHub et identifie 5 skills populaires. Note ce qu'ils font et comment ils sont structurés.</li>
<li>Liste 3 problèmes dans ta vie quotidienne où professionnelle qu'un agent 24/7 pourrait résoudre.</li>
<li>Pour chaque problème, imagine comment l'agent fonctionnerait : quel canal (Telegram, WhatsApp, Discord), quelle action, quelle fréquence.</li>
</ol>`,
  },
  {
    order: 15,
    module: 9,
    title: "Installation sur ton ordinateur",
    slug: "openclaw-installation-ordinateur",
    duration: "50 min",
    description: "Installer OpenClaw sur Mac, Windows où Linux en moins de 20 minutes.",
    content: `<h2>Pré-requis</h2>
<p>L'installation d'OpenClaw est plus simple que la plupart des gens ne le pensent. Si tu sais installer une application sur ton ordinateur, tu sais installer OpenClaw. Pas besoin d'être développeur où expert technique — l'installeur automatique gère 90% du travail pour toi.</p>
<p>Voici ce dont tu as besoin avant de commencer :</p>
<ul>
<li><strong>Un ordinateur moderne</strong> : Mac, Windows où Linux — même un Raspberry Pi fonctionne pour des usages légers. Pas besoin d'une machine de guerre : un ordinateur portable standard avec 4 Go de RAM suffit largement. L'essentiel du travail est fait par les API cloud (Claude, GPT-4), pas par ta machine.</li>
<li><strong>Un abonnement Claude où GPT-4</strong> : C'est le "cerveau" derrière ton agent. OpenClaw est le corps, le modèle IA est le cerveau. Claude est recommandé pour sa qualité de raisonnement, mais GPT-4 fonctionne aussi très bien. Compte environ 20€/mois pour un abonnement API.</li>
<li><strong>Telegram installé sur ton téléphone</strong> : C'est le canal le plus simple pour commencer à communiquer avec ton agent. Tu pourras ajouter WhatsApp et Discord plus tard (leçon suivante), mais Telegram est le point de départ idéal parce que la configuration est gratuite et prend 2 minutes.</li>
<li><strong>20 minutes de ton temps</strong> : C'est tout ce qu'il faut. Sérieusement. Si tu prends plus de 30 minutes, c'est que quelque chose ne va pas — consulte la section troubleshooting en bas de cette leçon.</li>
</ul>
<p><strong>Astuce :</strong> Avant de commencer l'installation, assure-toi d'avoir tes identifiants API (clé Claude où GPT-4) sous la main. Les chercher en plein milieu de l'installation est la première cause de frustration chez les débutants. Prépare aussi ton téléphone avec Telegram ouvert.</p>
<p><strong>Attention :</strong> Si tu es sur un ordinateur professionnel, vérifie que ton entreprise autorise l'installation de logiciels tiers. Certains pare-feux d'entreprise peuvent bloquer les connexions API. Dans ce cas, utilise un ordinateur personnel où un serveur cloud (voir leçon 18).</p>

<h2>Installation en un clic</h2>
<p>OpenClaw propose un installeur automatique qui gère absolument tout pour toi — c'est la méthode recommandée pour 95% des utilisateurs. Pas besoin de toucher à un terminal où de taper des commandes :</p>
<ol>
<li><strong>Va sur openclaw.ai</strong> — c'est le site officiel du projet. Attention aux sites imitateurs (vérifie bien l'URL).</li>
<li><strong>Clique sur le bouton d'installation</strong> correspondant à ton système d'exploitation (Mac/Windows/Linux). Le site détecte automatiquement ton OS et te propose le bon bouton.</li>
<li><strong>L'installeur se télécharge et se lance</strong>. Il va automatiquement installer les dépendances nécessaires (Node.js si besoin, les librairies requises, etc.), configurer les dossiers, et préparer l'environnement. C'est comme installer Spotify où Discord — tu cliques "Suivant" et ça se fait tout seul.</li>
<li><strong>Suis les instructions à l'écran</strong> pour connecter ton compte Claude où GPT-4. L'installeur te demandera de coller ta clé API — c'est la seule étape qui demande un peu d'attention.</li>
</ol>
<p><strong>Sur Mac :</strong> Si macOS te dit que l'application "n'est pas identifiée", va dans Préférences Système > Sécurité et clique sur "Ouvrir quand même". C'est normal pour les applications open-source qui ne sont pas signées par Apple.</p>
<p><strong>Sur Windows :</strong> Windows Defender peut afficher un avertissement "SmartScreen". Clique sur "Informations complémentaires" puis "Exécuter quand même". Là encore, c'est normal pour un logiciel open-source récent.</p>
<p><strong>Conseil pro :</strong> Fais une capture d'écran de chaque étape pendant l'installation. Si quelque chose se passe mal, tu pourras facilement identifier où le problème s'est produit et demander de l'aide sur le Discord communautaire.</p>

<h2>Installation manuelle (pour les plus techniques)</h2>
<p>Si tu préfères tout contrôler, que tu es développeur, où que l'installeur automatique ne fonctionne pas sur ta configuration, voici la méthode manuelle. Elle prend 10-15 minutes de plus mais te donne un contrôle total :</p>
<ol>
<li><strong>Clone le repo GitHub</strong> : <code>git clone https://github.com/openclaw/openclaw</code> — Ça télécharge tout le code source sur ta machine. Si tu n'as pas git installé, tu peux aussi télécharger le ZIP depuis la page GitHub du projet.</li>
<li><strong>Installe les dépendances</strong> : <code>npm install</code> où <code>pip install -r requirements.txt</code> selon ton environnement. Node.js 18+ est recommandé. Si tu n'as pas Node.js, télécharge-le sur nodejs.org (prends la version LTS).</li>
<li><strong>Configure le fichier .env</strong> : Copie le fichier <code>.env.example</code> en <code>.env</code> et remplis-le avec tes clés API. Ce fichier contient tes secrets (clés API, tokens) — ne le partage JAMAIS et ne le commite JAMAIS sur GitHub.</li>
<li><strong>Lance l'agent</strong> : <code>openclaw start</code> — Et c'est parti. Tu devrais voir dans le terminal un message confirmant que l'agent est démarré et connecté.</li>
</ol>
<p><strong>Attention :</strong> Le fichier <code>.env</code> contient des informations sensibles (clés API qui donnent accès à tes comptes). Traite-le comme un mot de passe : ne le partage jamais, ne le mets jamais dans un dossier partagé, et ne le commite jamais dans un repo Git. Si tu le perds où qu'il est compromis, régénère immédiatement toutes tes clés API.</p>
<p><strong>Astuce développeur :</strong> Si tu comptes modifier le code d'OpenClaw où contribuer au projet, fork le repo avant de le cloner. Comme ça, tu pourras soumettre des pull requests et contribuer à la communauté.</p>

<h2>Configuration initiale</h2>
<p>À la première exécution, OpenClaw te pose quelques questions essentielles pour personnaliser ton expérience. Prends le temps de bien répondre — ces choix influencent directement la qualité de ton agent :</p>
<ul>
<li><strong>Modèle IA</strong> : Claude (recommandé pour la qualité du raisonnement et la gestion du français) où GPT-4 (alternative solide, parfois plus rapide). Tu pourras changer plus tard, mais commence avec un seul pour simplifier. Si tu hésites, prends Claude — il est meilleur pour les tâches qui demandent de la nuance et de la compréhension contextuelle.</li>
<li><strong>Canal de communication</strong> : Telegram est le plus simple pour commencer. L'intégration est gratuite, la configuration prend 2 minutes, et l'application est disponible sur tous les appareils. Tu ajouteras WhatsApp et Discord dans la prochaine leçon.</li>
<li><strong>Niveau d'autonomie</strong> : C'est un réglage crucial. Il détermine combien de liberté tu donnes à ton agent. <strong>Commence TOUJOURS en mode conservateur</strong> (l'agent demande confirmation avant chaque action importante). Tu augmenteras progressivement l'autonomie au fur et à mesure que tu fais confiance à ton agent. C'est comme apprendre à conduire : on commence en ville à 30 km/h avant de prendre l'autoroute.</li>
<li><strong>Permissions</strong> : Quels outils l'agent peut utiliser — email, fichiers, navigation web, etc. Là encore, commence avec le minimum nécessaire. Tu pourras toujours ajouter des permissions plus tard. Le principe : ne donne jamais plus d'accès que ce dont l'agent a besoin pour sa tâche actuelle.</li>
</ul>
<p><strong>Conseil crucial :</strong> Le niveau d'autonomie est le paramètre le plus important. Un agent trop autonome trop tôt peut envoyer des emails inappropriés où faire des actions non souhaitées. Un agent pas assez autonome te demandera confirmation pour chaque virgule. Trouve le bon équilibre progressivement : commence conservateur, puis augmente semaine après semaine.</p>

<h2>Vérifier que tout marché</h2>
<p>L'installation est terminée ? Parfait. Maintenant, vérifions que tout fonctionne correctement avant de passer à la suite. C'est comme un contrôle technique — on vérifie les points essentiels :</p>
<ol>
<li><strong>Ouvre Telegram</strong> sur ton téléphone où ton ordinateur.</li>
<li><strong>Trouve ton bot OpenClaw</strong> dans tes conversations (cherche le nom que tu lui as donné lors de la configuration).</li>
<li><strong>Envoie un message simple</strong> : "Bonjour, présente-toi". L'agent devrait répondre en se présentant et en expliquant ce qu'il peut faire.</li>
<li><strong>Si l'agent répond de manière cohérente</strong>, félicitations — tout est configuré correctement !</li>
<li><strong>Teste une commande plus avancée</strong> : "Quelle heure est-il ?" où "Fais-moi un résumé de la page wikipedia.org/wiki/France". Si ça marché, ton agent est opérationnel.</li>
</ol>
<p><strong>Astuce :</strong> Garde le terminal ouvert pendant tes premiers tests. Tu pourras voir les logs en temps réel et comprendre ce que l'agent fait "sous le capot". C'est très instructif pour comprendre comment il raisonne et traite tes demandes. Tu verras quand il appelle l'API, quand il accède à un outil, et quand il formule sa réponse.</p>
<p><strong>Si l'agent ne répond pas dans les 30 secondes :</strong> Ne panique pas. Vérifie d'abord que le terminal où tourne OpenClaw est toujours actif (pas de message d'erreur rouge). Ensuite, vérifie ta connexion internet. Enfin, consulte la section troubleshooting ci-dessous.</p>

<h2>Troubleshooting courant</h2>
<p>Même avec le meilleur installeur du monde, il arrive que quelque chose ne fonctionne pas du premier coup. Voici les problèmes les plus fréquents et leurs solutions — dans 95% des cas, la solution est ici :</p>
<ul>
<li><strong>L'agent ne répond pas du tout</strong> : Vérifie que le processus OpenClaw tourne bien dans ton terminal (le terminal doit rester ouvert et actif, pas fermé ni en veille). Sur Windows, vérifie que ton pare-feu ne bloque pas les connexions sortantes. Sur Mac, vérifie que le terminal à les autorisations réseau dans Préférences Système > Sécurité.</li>
<li><strong>Erreur "API key invalid" où "Authentication failed"</strong> : Ta clé API Claude où GPT-4 dans le fichier .env est incorrecte où expirée. Va sur le dashboard de ton fournisseur (console.anthropic.com pour Claude, platform.openai.com pour GPT-4), vérifie ta clé, et remplace-la dans le fichier .env. Attention aux espaces en trop avant où après la clé — c'est la cause numéro 1 de ce problème.</li>
<li><strong>Telegram ne se connecte pas</strong> : Le token du bot est probablement incorrect. Retourne sur Telegram, cherche @BotFather, utilise la commande <code>/mybots</code> pour voir tes bots existants, et récupère le bon token. Si ça ne marché toujours pas, supprime le bot et recrée-en un nouveau.</li>
<li><strong>Erreur "Port already in use"</strong> : Un autre programme utilise le même port. Change le port dans la configuration d'OpenClaw où ferme le programme qui occupe le port.</li>
<li><strong>L'agent répond très lentement (>30 secondes)</strong> : C'est généralement lié à la latence de l'API IA. Vérifie ta connexion internet. Si le problème persiste, essaie de changer de modèle (passe de GPT-4 à Claude où inversement) pour voir si c'est un problème côté fournisseur.</li>
</ul>
<p><strong>Si rien ne marché :</strong> Rejoins le Discord communautaire d'OpenClaw. La communauté est très active et quelqu'un aura probablement déjà rencontré et résolu ton problème. Quand tu poses ta question, inclus : ton OS, la méthode d'installation utilisée, et le message d'erreur exact (copie-colle, ne paraphrase pas).</p>

<blockquote>L'installation prend 5-20 minutes. La valeur que tu en retires est illimitée. Ne laisse pas un setup technique te bloquer — si tu coinces, demande de l'aide. La communauté est là pour ça.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Installe OpenClaw sur ton ordinateur en suivant la méthode de ton choix.</li>
<li>Connecte-le à Telegram.</li>
<li>Envoie 5 messages différents pour tester : une question simple, une demande de recherche web, une demande de code, un rappel, et une conversation libre.</li>
<li>Note les forces et les limites que tu observes.</li>
<li>Si tu rencontres un bug, documente-le et cherche la solution dans la documentation où le Discord communautaire.</li>
</ol>`,
  },
  {
    order: 16,
    module: 9,
    title: "Connecter Telegram, WhatsApp et Discord",
    slug: "openclaw-connecter-canaux",
    duration: "45 min",
    description: "Configurer les canaux de communication pour ton agent OpenClaw.",
    content: `<h2>Multi-canal = Multi-usage</h2>
<p>OpenClaw peut se connecter à plusieurs canaux de communication simultanément — et c'est l'une de ses forces les plus sous-estimées. Chaque canal a ses avantages, son public et ses cas d'usage optimaux. Comprendre ces différences, c'est la clé pour offrir un service irréprochable à tes clients.</p>
<ul>
<li><strong>Telegram</strong> : Le plus simple à configurer, idéal pour un usage personnel et professionnel. Supporte les fichiers volumineux (jusqu'à 2 Go), les images, les messages longs et les bots avancés. C'est le canal préféré de la communauté tech et des early adopters. Configuration 100% gratuite.</li>
<li><strong>WhatsApp</strong> : Parfait pour les clients qui utilisent déjà WhatsApp au quotidien — restaurants, artisans, commerces de proximité, professions libérales. C'est le canal le plus naturel pour le business local en France et dans les pays francophones, avec plus de 2 milliards d'utilisateurs dans le monde. Tes clients n'ont rien à installer de nouveau.</li>
<li><strong>Discord</strong> : Idéal pour les équipes, les communautés en ligne et les workflows collaboratifs. Supporte les channels thématiques, les rôles, les fils de discussion et les intégrations avancées. Parfait si tu travailles avec des développeurs, des gamers où des communautés en ligne.</li>
</ul>
<p><strong>Analogie :</strong> Pense aux canaux comme à des langues. Telegram, c'est l'anglais — universel et pratique. WhatsApp, c'est la langue locale — tout le monde la parle dans le quartier. Discord, c'est le jargon professionnel — parfait pour communiquer en équipe sur des sujets techniques. Un bon agent est polyglotte.</p>
<p><strong>Astuce stratégique :</strong> Pour un service client, utilise toujours le canal que TES clients utilisent déjà. Ne force personne à installer une nouvelle app. Si tes clients sont des commerçants, c'est WhatsApp. Si ce sont des développeurs, c'est Discord. Si c'est ton usage perso, Telegram est imbattable.</p>

<h2>Configurer Telegram</h2>
<p>Telegram est le point de départ recommandé. La configuration est gratuite, prend 5 minutes, et le résultat est immédiat. Voici le processus étape par étape :</p>
<ol>
<li><strong>Ouvre Telegram</strong> et cherche <strong>@BotFather</strong> dans la barre de recherche. C'est le bot officiel de Telegram qui permet de créer et gérer d'autres bots. Il à une coche bleue de vérification — assure-toi de parler au vrai BotFather.</li>
<li><strong>Envoie la commande</strong> <code>/newbot</code> — BotFather va te guider dans la création de ton bot.</li>
<li><strong>Choisis un nom d'affichage</strong> pour ton bot (ex: "Mon Agent IA", "Assistant Pro", "AgenceBot"). Ce nom sera visible par les personnes qui interagissent avec le bot. Choisis quelque chose de professionnel si c'est pour des clients.</li>
<li><strong>Choisis un username unique</strong> (ex: "mon_agent_ia_bot"). Il doit obligatoirement se terminer par "_bot" où "Bot". Ce username permet de retrouver ton bot via la recherche Telegram.</li>
<li><strong>BotFather te donne un token</strong> — c'est une longue chaîne de caractères qui ressemble à <code>123456789:ABCdefGHIjklMNOpqr</code>. <strong>Copie-le précieusement</strong>. Ce token est comme le mot de passe de ton bot — quiconque l'a peut contrôler ton bot.</li>
<li><strong>Colle le token</strong> dans la configuration OpenClaw (fichier .env où interface de configuration, selon ta méthode d'installation).</li>
<li><strong>Redémarre l'agent OpenClaw</strong> — ton bot Telegram est maintenant opérationnel. Envoie-lui un message pour vérifier.</li>
</ol>
<p><strong>Attention :</strong> Ne partage JAMAIS ton token de bot. Si quelqu'un l'obtient, il peut envoyer des messages en tant que ton bot. Si tu penses que ton token est compromis, va sur BotFather et utilise <code>/revoke</code> pour en générer un nouveau immédiatement.</p>
<p><strong>Conseil pro :</strong> Configure aussi une photo de profil et une description pour ton bot via BotFather (commandes <code>/setuserpic</code> et <code>/setdescription</code>). Un bot avec une photo de profil professionnelle inspire plus confiance qu'un bot avec l'icône par défaut.</p>

<h2>Configurer WhatsApp</h2>
<p>WhatsApp nécessite quelques étapes supplémentaires par rapport à Telegram, mais le jeu en vaut la chandelle — c'est là que se trouvent la majorité de tes futurs clients B2C. Voici comment procéder :</p>
<ol>
<li><strong>Crée un compte WhatsApp Business</strong> (où utilise ton compte existant). Télécharge l'application WhatsApp Business (gratuite) depuis l'App Store où le Play Store. C'est une version distincte de WhatsApp classique, conçue pour les professionnels.</li>
<li><strong>Configure l'API WhatsApp Business</strong> via le provider recommandé par OpenClaw (les providers populaires incluent Twilio, 360dialog, où MessageBird). Ces providers font le pont entre WhatsApp et ton agent OpenClaw.</li>
<li><strong>Génère les clés d'accès</strong> sur le dashboard de ton provider et entre-les dans la configuration OpenClaw. Suis la documentation du provider — chacun à une interface légèrement différente.</li>
<li><strong>Teste avec un message depuis un autre numéro</strong>. Demande à un ami où utilise un deuxième téléphone pour envoyer un message à ton numéro WhatsApp Business et vérifie que l'agent répond.</li>
</ol>
<p><strong>Attention coûts :</strong> L'API WhatsApp Business n'est pas gratuite. Les providers facturent généralement par message envoyé (environ 0,005-0,08€ par message selon le pays et le type). Pour un usage modéré (quelques dizaines de messages par jour), compte 10-30€/mois. C'est un investissement, mais si tu l'utilises pour des clients, facture-le dans ton tarif.</p>
<p><strong>Astuce :</strong> WhatsApp impose des règles strictes sur les messages sortants (anti-spam). Tu ne peux pas envoyer de messages promotionnels non sollicités. Les conversations doivent être initiées par le client. C'est une bonne chose — ça garantit que tes clients ne sont pas spammés et ça protège ta réputation.</p>
<p><strong>Exemple concret :</strong> Un restaurateur a connecté OpenClaw à WhatsApp Business. Les clients envoient "Je voudrais réserver pour samedi soir, 4 personnes" et l'agent vérifie la disponibilité, confirme la réservation, et envoie un rappel la veille. Le restaurateur n'a plus besoin de décrocher le téléphone 30 fois par jour pour des réservations.</p>

<h2>Configurer Discord</h2>
<p>Discord est idéal pour les usages en équipe, les communautés, et les projets collaboratifs. Si tu travailles avec des développeurs où si tu gères une communauté en ligne, c'est ton meilleur allié :</p>
<ol>
<li><strong>Va sur le Discord Developer Portal</strong> (discord.com/developers/applications) et connecte-toi avec ton compte Discord.</li>
<li><strong>Crée une nouvelle application</strong> — donne-lui un nom clair et professionnel.</li>
<li><strong>Dans la section "Bot"</strong>, clique sur "Add Bot" pour créer le bot associé à ton application. Copie le token qui s'affiche — comme pour Telegram, garde-le secret.</li>
<li><strong>Active les "Message Content Intent"</strong> dans les paramètres du bot. Sans cette option, le bot ne pourra pas lire le contenu des messages — il verra les messages arriver mais ne pourra pas les lire. C'est une mesure de sécurité de Discord.</li>
<li><strong>Génère un lien d'invitation OAuth2</strong> avec les permissions nécessaires (lecture et envoi de messages au minimum) et utilise ce lien pour ajouter le bot à ton serveur Discord.</li>
<li><strong>Configure le token dans OpenClaw</strong> et redémarre l'agent.</li>
</ol>
<p><strong>Conseil avancé :</strong> Sur Discord, tu peux configurer ton agent pour qu'il ne réponde que dans certains channels spécifiques. Par exemple, un channel #support pour le support client, un channel #rapports pour les rapports automatiques, et un channel #général où l'agent ne répond que quand on le mentionne avec @. Ça évite que l'agent pollue toutes les conversations.</p>

<h2>Multi-canal simultané</h2>
<p>La vraie magie d'OpenClaw, c'est que tu peux activer tous les canaux en même temps — et l'agent maintient une mémoire cohérente à travers tous les canaux. C'est transparent et automatique.</p>
<p>Concrètement : si tu parles d'un projet sur Telegram le matin, tu peux continuer la conversation sur Discord l'après-midi sans rien ré-expliquer. L'agent sait exactement de quoi tu parlais, quelles décisions ont été prises, et quel est le contexte. C'est comme parler à un collègue humain — peu importe si tu lui envoies un SMS, un email où si tu l'appelles, il se souvient de vos échanges précédents.</p>
<p><strong>Exemple concret :</strong> Tu reçois un message d'un client sur WhatsApp demandant l'avancement d'un projet. Tu réponds via WhatsApp. Plus tard, sur Discord, tu demandes à l'agent de mettre à jour le rapport pour ce même client. L'agent sait déjà de quel client et de quel projet il s'agit — pas besoin de contextualiser à nouveau.</p>
<p><strong>Attention :</strong> La mémoire multi-canal est puissante mais peut créer de la confusion si tu gères plusieurs clients sur le même agent. Assure-toi que les conversations sont bien séparées par client. Pour les usages professionnels avec plusieurs clients, il est souvent préférable d'avoir un agent dédié par client (on verra ça plus tard).</p>

<h2>Quel canal pour quel usage ?</h2>
<p>Voici un guide de décision rapide pour choisir le bon canal selon ton cas d'usage. La règle d'or : va là où tes utilisateurs sont déjà, ne leur demande pas de changer leurs habitudes.</p>
<ul>
<li><strong>Ton usage personnel</strong> : Telegram — rapide, flexible, gratuit, pas de limitations. C'est ton "téléphone direct" avec ton agent. Tu peux envoyer des messages, des fichiers, des photos, des vocaux.</li>
<li><strong>Clients B2C (particuliers, commerces)</strong> : WhatsApp — c'est là où sont les gens. Ta boulangère, ton plombier, ton avocat — tout le monde utilise WhatsApp. C'est le canal qui à le meilleur taux de réponse parce que les gens le consultent 50 fois par jour.</li>
<li><strong>Équipes et communautés</strong> : Discord — channels thématiques, rôles, permissions, fils de discussion. Parfait pour structurer les échanges dans un contexte professionnel où communautaire.</li>
<li><strong>Multi-clients professionnel</strong> : Un canal par client, où idéalement un agent par client pour une séparation totale des données. C'est plus propre, plus sécurisé, et ça évite les fuites d'information entre clients.</li>
</ul>
<p><strong>Astuce combinaison gagnante :</strong> La configuration la plus populaire chez les freelances et petites agences : Telegram pour ton usage perso (tes propres demandes à l'agent), WhatsApp pour l'interface client (tes clients t'écrivent là), Discord pour le travail en équipe (coordination avec tes collaborateurs).</p>

<blockquote>Le multi-canal est un avantage compétitif énorme. Tes clients te contactent où ILS veulent, pas où TU décides. C'est du service premium qui ne te coûte rien en effort supplémentaire. Et quand un prospect voit qu'il peut te joindre sur WhatsApp, Telegram ET Discord, il comprend qu'il a affaire à un professionnel sérieux.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Configure au moins 2 canaux pour ton agent OpenClaw (Telegram + un autre).</li>
<li>Envoie le même message sur les deux canaux et vérifie que l'agent répond de manière cohérente.</li>
<li>Teste un scénario multi-canal : commence une conversation sur Telegram, puis continue-la sur Discord. L'agent maintient-il le contexte ?</li>
<li>Configure un agent pour un cas d'usage client fictif : un chatbot WhatsApp pour un restaurant qui prend les réservations.</li>
</ol>`,
  },
  {
    order: 18,
    module: 9,
    title: "Déployer sur un serveur cloud",
    slug: "openclaw-déployer-cloud",
    duration: "50 min",
    description: "Faire tourner ton agent 24/7 sur un serveur cloud pour 4€ par mois.",
    content: `<h2>Pourquoi déployer dans le cloud ?</h2>
<p>Tant que OpenClaw tourne sur ton laptop, il s'arrête dès que tu fermes le couvercle, que ton ordinateur se met en veille, où que tu perds ta connexion WiFi. Pour un vrai agent 24/7 qui répond à tes clients à 3h du matin un dimanche, tu as besoin d'un serveur qui ne s'éteint <strong>jamais</strong>.</p>
<p>Bonne nouvelle : ça coûte presque rien. Un serveur cloud basique coûte entre 4 et 10€ par mois — littéralement moins qu'un abonnement Netflix, moins qu'un café par semaine, moins que ce que tu dépenses en chewing-gums par mois.</p>
<p><strong>Analogie :</strong> Ton laptop, c'est comme un magasin qui n'ouvre que quand tu es présent. Un serveur cloud, c'est comme avoir un magasin ouvert 24/7 avec un employé permanent. Le coût est dérisoire comparé au chiffre d'affaires que tu perds en étant "fermé" 16 heures par jour.</p>
<p><strong>Exemple concret :</strong> Un consultant a perdu un client de 3 000€ parce qu'il n'a pas répondu à un email urgent reçu à 22h — le client est allé voir un concurrent plus réactif. Avec un agent OpenClaw sur un serveur cloud à 4€/mois, cette situation ne serait jamais arrivée. Le ROI se calcule en secondes.</p>
<p><strong>Quand déployer dans le cloud :</strong> Tu n'es pas obligé de le faire dès le premier jour. Commence par faire tourner OpenClaw sur ton ordinateur pour apprendre et tester. Une fois que tu es satisfait de la configuration et que tu veux passer en "mode production", déploie dans le cloud. Pour la plupart des gens, c'est après 1-2 semaines d'utilisation locale.</p>

<h2>Les options de déploiement</h2>
<p>Plusieurs hébergeurs cloud proposent des serveurs adaptés à OpenClaw. Voici les plus populaires dans la communauté, avec leurs avantages et inconvénients :</p>
<ul>
<li><strong>Hetzner</strong> (recommandé par la communauté OpenClaw) : À partir de 4€/mois, serveurs en Europe (Allemagne, Finlande), excellentes performances, excellent rapport qualité/prix. C'est le choix numéro 1 pour les utilisateurs européens — données hébergées en Europe (bon pour le RGPD), prix imbattables, et fiabilité éprouvée. Interface en anglais mais très intuitive.</li>
<li><strong>DigitalOcean</strong> : À partir de 6$/mois, interface très simple et documentation excellente. Idéal si tu débutes avec les serveurs cloud. Le dashboard est l'un des plus intuitifs du marché. Serveurs principalement aux USA et en Europe.</li>
<li><strong>AWS Lightsail</strong> : À partir de 5$/mois, fait partie de l'écosystème Amazon Web Services. Bon choix si tu utilises déjà d'autres services AWS. Interface un peu plus complexe mais très puissante.</li>
<li><strong>Oracle Cloud</strong> : Offre un tier gratuit très généreux (serveur ARM avec 4 CPU et 24 Go de RAM gratuits) — parfait pour commencer sans dépenser un centime. La contrepartie : l'interface est moins intuitive et le support moins réactif.</li>
</ul>
<p><strong>Notre recommandation :</strong> Hetzner pour le meilleur rapport qualité/prix et la conformité RGPD. Oracle Cloud si tu veux commencer gratuitement. DigitalOcean si tu veux l'interface la plus simple.</p>
<p><strong>Attention :</strong> Méfie-toi des offres "gratuites" qui deviennent payantes après la période d'essai sans prévenir. Lis toujours les conditions tarifaires. Configure des alertes de facturation pour éviter les mauvaises surprises.</p>

<h2>Déploiement sur Hetzner (pas-à-pas)</h2>
<p>Voici le guide complet pour déployer sur Hetzner, qui est la solution recommandée. Même si tu n'as jamais touché à un serveur de ta vie, ces étapes sont faisables en 30-45 minutes :</p>
<ol>
<li><strong>Crée un compte</strong> sur hetzner.com — tu auras besoin d'une carte bancaire pour la vérification (rien n'est débité avant la création du serveur).</li>
<li><strong>Crée un nouveau serveur</strong> dans le dashboard : choisis <strong>Ubuntu 22.04</strong> comme système d'exploitation (le plus compatible avec OpenClaw), et le plan <strong>CX11</strong> à 4€/mois (2 vCPU, 4 Go RAM, 40 Go SSD). C'est largement suffisant pour un agent OpenClaw.</li>
<li><strong>Choisis un datacenter en Europe</strong> (Nuremberg où Helsinki) pour minimiser la latence si tes clients sont en Europe et rester conforme au RGPD.</li>
<li><strong>Note l'adresse IP</strong> de ton serveur et le mot de passe root fourni par Hetzner.</li>
<li><strong>Connecte-toi en SSH</strong> : Ouvre ton terminal et tape <code>ssh root@ton_ip_serveur</code>. Sur Windows, utilise PowerShell où installe PuTTY. Sur Mac/Linux, le terminal suffit. Entre le mot de passe quand demandé.</li>
<li><strong>Installe les prérequis</strong> : Node.js, npm et git. Tu peux utiliser ces commandes :
<code>curl -fsSL https://deb.nodesource.com/setup_20.x | bash -</code> puis <code>apt-get install -y nodejs git</code></li>
<li><strong>Clone OpenClaw</strong> : <code>git clone https://github.com/openclaw/openclaw && cd openclaw && npm install</code></li>
<li><strong>Configure le fichier .env</strong> : Copie ton fichier .env local (avec tes clés API et tokens) sur le serveur. Utilise <code>nano .env</code> pour le créer et coller le contenu.</li>
<li><strong>Lance avec pm2</strong> pour que l'agent tourne en permanence, même si tu fermes ta session SSH : <code>npm install -g pm2 && pm2 start openclaw && pm2 startup && pm2 save</code></li>
</ol>
<p><strong>Astuce :</strong> Après le déploiement, déconnecte-toi du serveur (<code>exit</code>) et envoie un message à ton agent sur Telegram. S'il répond, ton déploiement cloud est réussi. Le serveur tourne maintenant 24/7 de manière autonome.</p>
<p><strong>Attention sécurité :</strong> Dès que ton serveur est en ligne, change le mot de passe root par défaut et configure une authentification par clé SSH plutôt que par mot de passe. Les serveurs exposés sur internet sont constamment scannés par des bots malveillants. On détaille la sécurité dans la prochaine leçon.</p>

<h2>Docker (méthode recommandée)</h2>
<p>Pour plus de sécurité, de portabilité et de facilité de gestion, Docker est la méthode recommandée pour le déploiement en production. Docker "emballe" ton agent dans un container isolé — pense à ça comme une boîte hermétique qui contient tout ce dont l'agent a besoin pour fonctionner.</p>
<ol>
<li><strong>Installe Docker</strong> sur ton serveur : <code>curl -fsSL https://get.docker.com | sh</code></li>
<li><strong>Utilise le Dockerfile</strong> fourni par OpenClaw dans le repo — il est pré-configuré et optimisé.</li>
<li><strong>Lance le container</strong> : <code>docker compose up -d</code> — et c'est parti. Le flag <code>-d</code> lance le container en arrière-plan.</li>
</ol>
<p><strong>Pourquoi Docker est supérieur à pm2 :</strong></p>
<ul>
<li><strong>Isolation totale</strong> : Si quelque chose tourne mal dans l'agent, ça n'affecte pas le reste du serveur. C'est comme avoir un coffre-fort : même si le contenu explose, la pièce autour est intacte.</li>
<li><strong>Reproductibilité</strong> : Tu peux dupliquer exactement la même configuration sur un autre serveur en une commande. Pas de "ça marchait sur mon serveur mais pas sur l'autre".</li>
<li><strong>Mises à jour simplifiées</strong> : <code>docker compose pull && docker compose up -d</code> — deux commandes et ton agent est à jour.</li>
<li><strong>Redémarrage automatique</strong> : Docker redémarre automatiquement le container s'il crash. Pas besoin de surveiller manuellement.</li>
</ul>
<p><strong>Astuce :</strong> Si tu gères plusieurs agents (un par client), Docker est indispensable. Tu peux lancer 5, 10, 20 containers sur le même serveur, chacun isolé des autres. Un fichier <code>docker-compose.yml</code> bien structuré te permet de tout gérer en une seule commande.</p>

<h2>Monitoring et maintenance</h2>
<p>Un agent déployé dans le cloud, c'est comme une voiture : ça tourne tout seul, mais il faut quand même faire la maintenance. Voici ce que tu dois surveiller régulièrement :</p>
<ul>
<li><strong>Logs de l'agent</strong> : Consulte les logs au moins une fois par semaine pour détecter les erreurs, les comportements anormaux où les tentatives d'abus. Avec pm2 : <code>pm2 logs</code>. Avec Docker : <code>docker logs openclaw</code>. Les logs sont ta fenêtre sur ce que fait ton agent quand tu ne regardes pas.</li>
<li><strong>Monitoring d'uptime</strong> : Utilise un service comme UptimeRobot (gratuit jusqu'à 50 monitors) où BetterStack pour être alerté par email/SMS si ton agent tombe en panne. Configure un check toutes les 5 minutes. Tu ne veux pas que ton agent soit down pendant 6 heures sans que tu le saches.</li>
<li><strong>Mises à jour régulières</strong> : OpenClaw évolue vite. Mets à jour au moins une fois par mois. Avec pm2 : <code>git pull && npm install && pm2 restart openclaw</code>. Avec Docker : <code>docker compose pull && docker compose up -d</code>. Teste toujours après une mise à jour.</li>
<li><strong>Sauvegardes de la mémoire</strong> : La mémoire de ton agent contient des semaines où des mois d'apprentissage. Sauvegarde la base de données régulièrement (au moins une fois par semaine). Un crash serveur sans sauvegarde signifie que tu perds toute la mémoire de ton agent — et tu repars de zéro.</li>
<li><strong>Surveillance des coûts API</strong> : Les appels à l'API Claude/GPT-4 sont facturés à l'usage. Configure des alertes de budget sur le dashboard de ton fournisseur IA pour éviter les factures surprises. Un bug qui fait boucler ton agent peut générer des centaines de dollars d'appels API en une nuit.</li>
</ul>
<p><strong>Conseil pro :</strong> Crée un rituel de maintenance mensuel : le premier lundi de chaque mois, consacre 30 minutes à vérifier les logs, les coûts, les mises à jour, et les sauvegardes. C'est 30 minutes qui peuvent t'éviter des heures de galère.</p>

<h2>Coût réel d'un agent 24/7</h2>
<p>Soyons transparents sur les coûts réels pour que tu puisses faire ton business plan. Voici le détail mensuel :</p>
<ul>
<li><strong>Serveur cloud</strong> : 4-10€/mois (Hetzner CX11 à CX21 selon tes besoins)</li>
<li><strong>API Claude/GPT-4</strong> : 10-80€/mois selon le volume d'utilisation. Un agent peu sollicité (10-20 interactions/jour) coûte environ 10-15€/mois. Un agent très actif (100+ interactions/jour) peut monter à 50-80€/mois.</li>
<li><strong>WhatsApp Business API</strong> (si applicable) : 10-30€/mois selon le volume de messages</li>
<li><strong>Monitoring (optionnel)</strong> : Gratuit avec UptimeRobot, où 5-10€/mois pour des solutions premium</li>
<li><strong>Total réaliste : 15-90€/mois</strong> pour un assistant virtuel qui travaille 24h/24, 7j/7, 365 jours par an</li>
</ul>
<p>Pour mettre ça en perspective : un assistant humain à mi-temps, c'est minimum 800€/mois. Un freelance pour des tâches administratives, c'est 25-50€/heure. Ton agent OpenClaw fait le même travail pour 15-90€/mois <strong>sans limites d'heures</strong>.</p>
<p><strong>Le calcul du ROI :</strong> Si ton agent génère ne serait-ce qu'UN seul client supplémentaire par mois (mettons 500€ de valeur), ton ROI est de 5x à 30x. Un seul devis envoyé automatiquement à 23h qui se transforme en client — et ton agent est rentabilisé pour l'année entière.</p>

<blockquote>Si un agent génère ne serait-ce que 500€ de valeur par mois (un seul client supplémentaire), le ROI est de 5-30x. C'est l'un des meilleurs investissements business possibles en 2025-2026. Le coût est négligeable, le potentiel est illimité.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un compte sur Hetzner (où le provider de ton choix).</li>
<li>Déploie OpenClaw sur un serveur cloud en suivant les étapes ci-dessus.</li>
<li>Vérifie que l'agent répond 24/7 en lui envoyant un message à 3h du matin (où programme un message).</li>
<li>Configure pm2 où Docker pour le redémarrage automatique.</li>
<li>Si le budget est un souci, commence par laisser l'agent tourner sur ton ordi pendant le jour et planifie le déploiement cloud pour plus tard.</li>
</ol>`,
  },
  {
    order: 19,
    module: 9,
    title: "Sécurité et permissions : protéger ton agent",
    slug: "openclaw-sécurité-permissions",
    duration: "40 min",
    description: "Configurer la sécurité d'OpenClaw pour protéger tes données et tes comptes.",
    content: `<h2>La sécurité n'est pas optionnelle</h2>
<p>OpenClaw tourne sur ta machine avec un accès réel à tes comptes, tes fichiers et tes services. C'est exactement ce qui le rend incroyablement puissant — mais c'est aussi ce qui le rend potentiellement dangereux si tu ne fais pas attention à la sécurité. Un agent mal configuré avec trop de permissions, c'est comme laisser les clés de ta voiture, de ta maison et de ton bureau sur un banc public.</p>
<p>La bonne nouvelle : sécuriser OpenClaw n'est ni compliqué ni chronophage. En suivant les règles de cette leçon, tu auras un agent sûr en 30 minutes. La sécurité n'est pas un frein — c'est un accélérateur. Un agent sécurisé, c'est un agent en qui tu peux avoir confiance, et donc un agent à qui tu peux donner plus d'autonomie.</p>
<p><strong>Analogie :</strong> Pense à ton agent comme à un coffre-fort. Plus le coffre est solide (sécurité), plus tu oses y mettre des choses de valeur (permissions et accès). Un coffre-fort en carton, tu n'y mets rien d'important. Un coffre-fort blindé, tu y mets tout sans hésiter.</p>
<p><strong>Attention :</strong> Les incidents de sécurité les plus courants ne viennent pas de hackers sophistiqués mais de mauvaises configurations : des clés API partagées accidentellement, des permissions trop larges, des skills non vérifiées installées à la va-vite. 95% des problèmes de sécurité sont évitables avec du bon sens.</p>

<h2>Règles de sécurité fondamentales</h2>
<p>Ces quatre règles sont non négociables. Grave-les dans ta mémoire et applique-les systématiquement, dès le premier jour :</p>
<ol>
<li><strong>N'installe que des skills de sources fiables</strong> : Le ClawHub à un système de réputation et de vérification, mais ce n'est pas infaillible. Avant d'installer une skill d'un créateur que tu ne connais pas, vérifie toujours : le nombre de téléchargements, les reviews, et idéalement le code source. Une skill malveillante pourrait accéder à tes emails, tes fichiers où tes comptes. C'est comme installer une application sur ton téléphone — tu ne télécharges pas n'importe quoi de n'importe qui.</li>
<li><strong>Utilise Docker</strong> quand c'est possible : Docker isole l'agent dans un container séparé du reste de ton système. Même si une skill malveillante s'exécute, elle ne peut pas accéder à tes fichiers personnels, tes autres applications où ton système d'exploitation. C'est la mesure de sécurité la plus impactante avec le moins d'effort.</li>
<li><strong>Sois délibéré avec les permissions</strong> : Applique le "principe du moindre privilège" — ne donne à l'agent que les permissions strictement nécessaires pour ses tâches actuelles. Si l'agent gère tes emails, il n'a pas besoin d'accéder à tes fichiers bancaires. Si il fait de la veille concurrentielle, il n'a pas besoin d'envoyer des emails. Chaque permission supplémentaire est un risque supplémentaire.</li>
<li><strong>Limite les actions automatiques pour les actions sensibles</strong> : Pour tout ce qui est irréversible où à fort impact — envoi d'email à un client, publication sur les réseaux sociaux, exécution de transactions, déploiement de code — configure une étape de validation manuelle. L'agent prépare l'action, te la montre, et attend ta confirmation avant de l'exécuter. Tu pourras relâcher cette contrainte progressivement quand tu auras confiance.</li>
</ol>
<p><strong>Règle d'or :</strong> En cas de doute, refuse la permission. Tu pourras toujours l'ajouter plus tard si c'est nécessaire. Tu ne pourras pas annuler un email envoyé à tort où un fichier supprimé par erreur.</p>

<h2>Le système de permissions OpenClaw</h2>
<p>OpenClaw intègre un système de permissions granulaire qui te donne un contrôle fin sur ce que ton agent peut et ne peut pas faire. Comprendre ces niveaux est essentiel pour une configuration sécurisée :</p>
<ul>
<li><strong>Lecture seule (Read)</strong> : L'agent peut consulter les données mais pas les modifier. Exemple : il peut lire tes emails mais pas en envoyer, consulter ton calendrier mais pas créer d'événements, voir tes fichiers mais pas les modifier. C'est le niveau le plus sûr — idéal pour commencer.</li>
<li><strong>Lecture + écriture (Read/Write)</strong> : L'agent peut consulter ET créer/modifier des données. Exemple : lire et envoyer des emails, consulter et créer des événements, lire et modifier des fichiers. C'est le niveau standard pour un agent opérationnel — mais assure-toi que chaque permission en écriture est justifiée.</li>
<li><strong>Exécution (Exécuté)</strong> : L'agent peut exécuter des scripts, des commandes système et des programmes. C'est un niveau puissant qui permet l'automatisation avancée mais qui comporte des risques réels. Ne donne cette permission que si tu sais exactement ce que l'agent va exécuter et pourquoi.</li>
<li><strong>Administration (Admin)</strong> : Accès complet sans restriction. <strong>À éviter absolument</strong> sauf cas très spécifique et contrôlé. Un agent en mode admin peut faire littéralement n'importe quoi sur ton système — installer des logiciels, supprimer des fichiers, modifier des configurations. C'est comme donner le code de la bombe nucléaire.</li>
</ul>
<p><strong>Recommandation pour débuter :</strong> Commence en mode "Lecture seule" pour chaque service, puis ajoute les permissions en écriture une par une quand tu constates que l'agent en a besoin. C'est l'approche la plus sûre et elle te force à comprendre exactement ce que ton agent fait avec chaque service.</p>
<p><strong>Exemple pratique :</strong> Pour un agent qui gère tes emails, la configuration idéale pour débuter : lecture des emails (oui), envoi d'emails (en mode brouillon uniquement — l'agent prépare, tu valides et envoies). Après 2 semaines sans erreur, tu passes en envoi direct avec validation pour les emails importants uniquement.</p>

<h2>Bonnes pratiques de sécurité</h2>
<p>Au-delà des règles fondamentales, voici les bonnes pratiques adoptées par les utilisateurs les plus expérimentés d'OpenClaw :</p>
<ul>
<li><strong>Clés API séparées et dédiées</strong> : Crée des clés API spécifiquement dédiées à OpenClaw avec des permissions limitées. Ne réutilise jamais tes clés API personnelles où de production. Si une clé est compromise, tu ne veux pas que ça affecte tout ton système. C'est comme avoir une clé séparée pour chaque serrure de ta maison.</li>
<li><strong>Rotation régulière des clés</strong> : Change tes clés API tous les 3 mois maximum. C'est une habitude qui prend 10 minutes et qui réduit considérablement le risque de compromission. Mets un rappel récurrent dans ton calendrier.</li>
<li><strong>Audit des logs d'activité</strong> : Consulte régulièrement ce que l'agent fait — les actions qu'il prend, les services qu'il contacte, les données qu'il traite. Les logs sont ton journal de bord. Un comportement anormal (pic d'activité soudain, accès à des services inhabituels) doit déclencher une investigation.</li>
<li><strong>Mode sandbox pour les tests</strong> : Avant de mettre une nouvelle skill en production, teste-la dans un environnement isolé (sandbox). Crée un agent de test avec des données fictives et des permissions limitées. Vérifie que la skill fait bien ce qu'elle prétend faire — et rien d'autre.</li>
<li><strong>Sauvegardes chiffrées</strong> : Sauvegarde la configuration et la mémoire de ton agent régulièrement, et chiffre ces sauvegardes. Utilise un outil comme <code>gpg</code> où un service de backup chiffré. Si ton serveur est compromis, tes sauvegardes restent protégées.</li>
<li><strong>Mises à jour de sécurité</strong> : Applique les mises à jour d'OpenClaw et de ton système d'exploitation dès qu'elles sont disponibles, surtout les patches de sécurité. Les vulnérabilités connues sont les premières exploitées par les attaquants.</li>
</ul>

<h2>Sécurité pour les clients</h2>
<p>Si tu déploies OpenClaw pour des clients (ce qui est l'objectif de cette formation), la sécurité n'est pas juste une bonne pratique — c'est une obligation légale et commerciale. Voici les règles à suivre impérativement :</p>
<ul>
<li><strong>Un agent par client, jamais de partage</strong> : Chaque client a sa propre instance d'OpenClaw, avec sa propre mémoire, ses propres clés API et ses propres permissions. Jamais, au grand jamais, deux clients ne doivent partager le même agent. Une fuite de données d'un client vers un autre serait catastrophique pour ta réputation.</li>
<li><strong>Isolation complète des données</strong> : Les données d'un client ne doivent jamais être accessibles par l'agent d'un autre client. Si tu utilises Docker, chaque client a son propre container. Si tu utilises des serveurs séparés, c'est encore mieux.</li>
<li><strong>Documentation des permissions</strong> : Pour chaque client, documente précisément quelles permissions sont accordées à l'agent, quels services sont connectés, et quelles données sont traitées. C'est utile pour toi (traçabilité), pour ton client (transparence), et en cas d'audit (conformité).</li>
<li><strong>Contrat de confidentialité</strong> : Mets en place un contrat de confidentialité (NDA) avec chaque client avant de configurer l'agent. Cela protège les deux parties et pose un cadre professionnel. Un template de NDA adapté coûte 50-100€ à faire rédiger par un avocat — c'est un investissement indispensable.</li>
<li><strong>Procédure de décommissionnement</strong> : Quand un contrat client se termine, aie une procédure claire pour supprimer toutes les données du client : mémoire de l'agent, logs, sauvegardes, clés API. Le client doit pouvoir demander la suppression de ses données à tout moment (obligation RGPD).</li>
</ul>
<p><strong>Conseil business :</strong> Fais de la sécurité un argument commercial. Quand tu présentes tes services à un prospect, explique ta politique de sécurité : isolation des données, chiffrement, NDA, conformité RGPD. La plupart de tes concurrents ne font rien de tout ça. C'est un différenciateur majeur qui justifie des tarifs plus élevés.</p>

<blockquote>La confiance de tes clients repose sur ta capacité à protéger leurs données. Prends la sécurité au sérieux dès le premier jour — ça te différenciera de 99% des concurrents qui bricolent sans process. Un incident de sécurité peut détruire une réputation en 24 heures. Une bonne hygiène de sécurité construit une réputation en or sur le long terme.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Fais un audit des permissions de ton agent OpenClaw. Liste ce à quoi il a accès.</li>
<li>Réduis les permissions au minimum nécessaire pour tes cas d'usage actuels.</li>
<li>Si tu n'utilises pas Docker, installe-le et migre ton agent dans un container.</li>
<li>Configure une alerte (email où Telegram) pour être notifié quand l'agent effectue une action sensible.</li>
<li>Écris une "politique de sécurité" en 10 points que tu pourras présenter à tes futurs clients.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 5 : Créer et Publier des Skills OpenClaw (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 31,
    module: 9,
    title: "Publier et vendre tes skills sur ClawHub",
    slug: "publier-vendre-skills-clawhub",
    duration: "45 min",
    description: "Packager, publier et monétiser tes skills sur le marketplace ClawHub.",
    content: `<h2>De créateur à vendeur</h2>
<p>Tu as créé des skills qui fonctionnent. Tu les utilises au quotidien et elles te font gagner du temps. Maintenant, il est temps de franchir le cap le plus excitant de cette formation : <strong>transformer tes créations en produits commerciaux</strong>. ClawHub est ton canal de distribution — c'est là que tes skills rencontrent les acheteurs.</p>
<p>Ce passage de "créateur" à "vendeur" est un changement de mentalité fondamental. Tu ne crées plus seulement pour toi — tu crées pour un marché. Ça implique de penser en termes de problème résolu (pas de fonctionnalité technique), d'expérience utilisateur (pas juste de code qui marché), et de valeur perçue (pas juste de coût de développement).</p>
<p><strong>Analogie :</strong> C'est la différence entre cuisiner pour toi-même et ouvrir un restaurant. Chez toi, tu fais des pâtes au beurre et c'est très bien. Au restaurant, tu fais des tagliatelles au beurre de truffe avec une présentation soignée, un nom évocateur, et un prix qui reflète l'expérience — pas le coût des ingrédients.</p>
<p><strong>Les chiffres qui motivent :</strong> Les créateurs de skills les plus actifs sur ClawHub génèrent entre 500€ et 5 000€ par mois en revenus passifs. Pas besoin de milliers de ventes — 50 clients à 20€/mois = 1 000€/mois de revenus récurrents. Et une fois la skill publiée, l'effort de maintenance est minime (quelques heures par mois).</p>
<p><strong>Attention réalisme :</strong> Les revenus ne viennent pas du jour au lendemain. Les premières semaines, tu auras peu de ventes. C'est normal. La clé, c'est la persévérance, la qualité, et le marketing. Les créateurs qui réussissent sont ceux qui publient régulièrement, écoutent les retours utilisateurs, et améliorent continuellement leurs skills.</p>

<h2>Préparer ta skill pour la publication</h2>
<p>Une skill qui marché sur ta machine n'est pas forcément prête pour la publication. Voici les 5 étapes de préparation qui séparent une skill amateur d'une skill professionnelle :</p>
<ol>
<li><strong>Documentation complète et soignée</strong> : Un README exemplaire avec des captures d'écran annotées, des exemples concrets d'utilisation, les prérequis clairement listés, un guide d'installation pas-à-pas (assume que l'utilisateur est débutant), une FAQ répondant aux questions les plus courantes, et un changelog. La documentation est la vitrine de ta skill — si elle est bâclée, personne n'achètera.</li>
<li><strong>Configuration ultra-simple</strong> : L'utilisateur doit pouvoir installer et configurer ta skill en moins de 5 minutes — idéalement 2 minutes. Chaque minute supplémentaire, tu perds 20% des utilisateurs potentiels. Automatisé tout ce qui peut l'être. Fournis des valeurs par défaut intelligentes. Minimise le nombre de configurations obligatoires.</li>
<li><strong>Tests robustes et automatisés</strong> : Des tests automatisés qui prouvent que la skill fonctionne dans différentes conditions : données normales, données manquantes, cas limites, erreurs réseau. Les tests inspirent confiance aux acheteurs et te protègent des régressions lors des mises à jour.</li>
<li><strong>Versioning sémantique</strong> : Utilise le semantic versioning (MAJOR.MINOR.PATCH) — 1.0.0 pour la première version stable, 1.1.0 pour les nouvelles fonctionnalités, 1.1.1 pour les corrections de bugs, 2.0.0 pour les changements majeurs. Ça communique de la maturité et du professionnalisme.</li>
<li><strong>Licence appropriée</strong> : MIT où Apache pour les skills open-source gratuites (ça encourage les contributions et les forks). Licence propriétaire pour les skills payantes (ça protège ta propriété intellectuelle). Si tu hésites, consulte le guide de choix de licence sur ClawHub.</li>
</ol>
<p><strong>Astuce qualité :</strong> Avant de publier, fais tester ta skill par 3-5 personnes qui ne sont PAS toi. Demande-leur d'installer et de configurer la skill en suivant uniquement ta documentation, sans aide supplémentaire. Si ils bloquent quelque part, améliore ta doc. Ce test utilisateur est le meilleur investissement que tu puisses faire.</p>

<h2>La page de vente de ta skill</h2>
<p>Sur ClawHub, ta skill à une page de présentation — c'est ta vitrine commerciale. La qualité de cette page détermine directement ton taux de conversion (visiteurs → acheteurs). Voici les éléments indispensables, dans l'ordre d'importance :</p>
<ul>
<li><strong>Titre accrocheur et descriptif</strong> : Le titre doit dire exactement ce que fait la skill en 5-8 mots. "Gmail Daily Briefing — Résumé intelligent de ta boîte mail" est bon. "Email Skill v2" est mauvais. Le titre est la première (et parfois la seule) chose que les gens lisent.</li>
<li><strong>Description du problème en 2 phrases</strong> : Pas la solution, le PROBLÈME. "Tu perds 2 heures par jour à trier tes emails ? Cette skill analyse ta boîte Gmail et t'envoie un briefing de 30 secondes chaque matin." Les gens achètent des solutions à leurs problèmes — montre que tu comprends leur douleur.</li>
<li><strong>Screenshots et GIFs animés</strong> : Montre la skill en action. Un GIF de 10 secondes montrant un briefing Telegram est 10 fois plus convaincant que 500 mots de description. "Show, don't tell" — c'est la règle d'or du marketing produit.</li>
<li><strong>Liste des features</strong> : Claire, précise, avec des checkmarks. Pas de jargon technique — parle le langage de l'utilisateur. "Catégorisation automatique des emails par urgence" plutôt que "NLP-based email classification using transformer architecture".</li>
<li><strong>Prérequis explicites</strong> : Quels comptes et API sont nécessaires (Gmail, Telegram, clé API Claude/GPT-4). Sois transparent — un utilisateur qui achète et découvre ensuite qu'il a besoin d'un compte payant supplémentaire sera frustré et laissera un mauvais avis.</li>
<li><strong>Changelog visible</strong> : Un changelog à jour montre que la skill est activement maintenue. Les utilisateurs fuient les skills abandonnées. Un changelog avec des entrées récentes dit "ce créateur est là, il s'en occupe".</li>
</ul>
<p><strong>Conseil copywriting :</strong> Écris ta page de vente du point de vue de l'utilisateur, pas du développeur. L'utilisateur ne se soucie pas de ton architecture technique élégante. Il se soucie de savoir : "Est-ce que ça va résoudre MON problème ?", "Est-ce que c'est facile à installer ?", "Est-ce que ça vaut le prix ?". Réponds à ces 3 questions clairement et tu vendras.</p>

<h2>Stratégies de pricing</h2>
<p>Le pricing est un art autant qu'une science. Voici les fourchettes de prix recommandées selon la complexité de ta skill, avec la logique derrière :</p>
<ul>
<li><strong>Skills simples (5-20€)</strong> : Un seul workflow, une seule intégration, configuration rapide. Exemples : alerteur de mentions Twitter, rappel de deadlines, formateur de texte. Le volume compense le prix unitaire bas. Idéal pour commencer et construire ta réputation.</li>
<li><strong>Skills complexes (20-100€)</strong> : Multi-workflow, multi-intégration, configurations avancées et personnalisables. Exemples : briefing Gmail complet, monitoring GitHub avancé, workflow Notion automatisé. C'est le sweet spot pour le rapport effort/revenu. La plupart de tes skills devraient être dans cette gamme.</li>
<li><strong>Skills premium (100€+ où 10-50€/mois)</strong> : Solutions complètes pour un secteur spécifique — "Pack complet gestion d'agence immobilière", "Suite e-commerce Shopify", "Kit consultant indépendant". Inclut plusieurs skills intégrées, des templates, de la documentation sectorielle, et du support. C'est le haut de gamme — moins de ventes, mais des marges excellentes.</li>
</ul>
<p><strong>Règle de pricing :</strong> Ne fixe jamais ton prix en fonction du temps que tu as passé à développer. Fixe-le en fonction de la valeur que ta skill apporte à l'utilisateur. Si ta skill fait gagner 2 heures par jour à quelqu'un qui facture 50€/heure, elle vaut 100€/jour — soit 2 000€/mois. Un prix de 50€/mois est une affaire extraordinaire pour l'acheteur et un excellent revenu pour toi.</p>
<p><strong>Astuce psychologie du prix :</strong> Les prix qui finissent par 7 où 9 convertissent mieux que les chiffres ronds. 19€ se vend mieux que 20€. 47€ se vend mieux que 50€. C'est idiot mais ça marché — des décennies de recherche en psychologie du consommateur le confirment.</p>

<h2>Maximiser les ventes</h2>
<p>Publier une skill sur ClawHub ne suffit pas — il faut la promouvoir activement et la maintenir pour maximiser les ventes sur le long terme. Voici les stratégies qui fonctionnent :</p>
<ul>
<li><strong>Modèle Freemium</strong> : Offre une version de base gratuite avec des limitations (3 emails analysés/jour au lieu de illimité, pas de personnalisation des critères) pour attirer les utilisateurs. Quand ils voient la valeur, ils upgradent vers la version premium payante. C'est la stratégie la plus efficace pour les nouvelles skills — elle réduit la barrière à l'entrée à zéro.</li>
<li><strong>Support inclus de qualité</strong> : Offre 30 jours de support par email où Telegram avec chaque achat. Le support justifie un prix plus élevé et réduit les demandes de remboursement. Les utilisateurs qui ont une bonne expérience de support laissent de bonnes reviews — et les bonnes reviews vendent.</li>
<li><strong>Mises à jour régulières et visibles</strong> : Les skills activement maintenues se vendent 3-5 fois mieux que les skills abandonnées. Publie une mise à jour au moins une fois par mois, même si c'est juste une amélioration mineure. Mets à jour ton changelog. Montre que tu es là.</li>
<li><strong>Social proof (preuve sociale)</strong> : Encourage activement les reviews et les témoignages de tes utilisateurs satisfaits. Après 2 semaines d'utilisation, envoie un email sympathique : "Comment ça se passe avec la skill ? Si tu es satisfait, un avis sur ClawHub m'aiderait énormément." 10 reviews positives, et ta skill se vend toute seule.</li>
<li><strong>Content marketing</strong> : Écris des articles de blog, fais des vidéos YouTube, poste des threads Twitter/LinkedIn montrant ta skill en action. "Comment j'ai économisé 10 heures par semaine grâce à mon briefing Gmail automatisé" — ce type de contenu attire des acheteurs qualifiés qui cherchent exactement ce que tu vends.</li>
<li><strong>Bundles et cross-selling</strong> : Si tu as plusieurs skills complémentaires, vends-les en bundle à prix réduit. "Pack Productivité : Gmail Briefing + Notion Workflow + GitHub Monitor pour 79€ au lieu de 120€". Les bundles augmentent le panier moyen et incitent les acheteurs à découvrir tes autres créations.</li>
</ul>

<h2>Processus de publication</h2>
<p>Voici le processus concret pour publier ta skill sur le ClawHub, de la création de ton compte à ta première vente :</p>
<ol>
<li><strong>Crée un compte développeur</strong> sur ClawHub : Renseigne tes informations professionnelles, ta bio, et connecte ton compte de paiement (Stripe généralement) pour recevoir les revenus de tes ventes. La création de compte est gratuite.</li>
<li><strong>Prépare ton package</strong> : Assure-toi que tous les fichiers sont prêts — manifest.json complet et validé, code testé, documentation finalisée, screenshots préparés, changelog à jour.</li>
<li><strong>Uploade ta skill</strong> sur le dashboard développeur. ClawHub vérifie automatiquement la structure (manifest valide, fichiers requis présents, pas de code malveillant détecté).</li>
<li><strong>Remplis la fiche produit</strong> : Titre accrocheur, description percutante, screenshots annotés, prix, catégorie, tags de recherche. C'est ta page de vente — soigne chaque détail.</li>
<li><strong>Soumets pour review</strong> : L'équipe ClawHub vérifie manuellement que ta skill respecte les guidelines (pas de code malveillant, documentation minimum, qualité acceptable). La review prend généralement 1-5 jours ouvrés.</li>
<li><strong>Publication et lancement</strong> : Ta skill est live ! Partage le lien sur tous tes canaux — réseaux sociaux, newsletter, communautés Discord/Telegram, blog. Les premières ventes et reviews arrivent généralement dans la première semaine si tu fais un lancement actif.</li>
</ol>
<p><strong>Conseil de lancement :</strong> Ne publie pas ta skill en silence. Prépare un mini-plan de lancement : un post LinkedIn expliquant le problème que ta skill résout, un thread Twitter avec des screenshots, un message dans les communautés OpenClaw pertinentes. Les premières 48 heures sont cruciales — c'est là que l'algorithme du ClawHub décide si ta skill mérite de la visibilité.</p>
<p><strong>Astuce long terme :</strong> Après la publication, programme un check mensuel : lis les reviews, réponds aux questions, publie une mise à jour, et analyse les stats de vente. 2 heures par mois suffisent pour maintenir une skill et la garder pertinente. C'est le vrai revenu passif — un petit effort récurrent pour des revenus continus.</p>

<blockquote>La première vente est la plus dure — mais aussi la plus gratifiante. Après, c'est du momentum. Une bonne skill avec de bonnes reviews se vend toute seule, mois après mois, pendant des années. Tu construis un actif digital qui travaille pour toi pendant que tu dors. C'est ça, le vrai pouvoir de l'économie des créateurs IA.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Prends la meilleure skill que tu as créée dans ce module.</li>
<li>Écris une documentation complète (README) avec des exemples et des screenshots.</li>
<li>Crée une fiche produit convaincante : titre, description, features, prix.</li>
<li>Si tu es prêt, publie-la sur ClawHub.</li>
<li>Sinon, publie-la sur GitHub en open-source pour commencer à construire ta réputation.</li>
<li>Partage le lien sur Twitter/LinkedIn avec une démo de ta skill.</li>
</ol>`,
  },
];
