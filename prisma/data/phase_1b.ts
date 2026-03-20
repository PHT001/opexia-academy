// Phase 1b : Sécuriser OpenClaw — Module 4 (6 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 4 : Sécuriser OpenClaw (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 20,
    module: 4,
    title: "Pourquoi sécuriser son agent IA est critique",
    slug: "sécurité-agent-ia-pourquoi",
    duration: "45 min",
    description: "Comprendre les risques de sécurité d'un agent IA qui tourne 24/7 et pourquoi la sécurisation est non-négociable.",
    content: `<h2>Un agent IA n'est pas un chatbot</h2>
<p>Il y à une confusion très courante chez les débutants : ils pensent qu'un agent IA comme OpenClaw, c'est "juste un ChatGPT amélioré". C'est une erreur fondamentale, et cette erreur peut te coûter très cher.</p>
<p>Ton agent OpenClaw tourne en permanence, 24 heures sur 24, 7 jours sur 7. Il accède à tes comptes, gère tes données clients et exécute des actions réelles dans le monde réel. Contrairement à un chatbot isolé dans un navigateur web — qui ne peut que générer du texte dans une fenêtre — OpenClaw a accès à ton système d'exploitation, ton réseau local, tes API keys, tes bases de données, et potentiellement à tout ce qui est connecté à ta machine.</p>
<p>Pour bien comprendre la différence, prends cette analogie : un chatbot, c'est comme un employé enfermé dans une pièce vitrée. Tu lui parles à travers la vitre, il te répond, mais il ne peut rien toucher dans ton bureau. Un agent IA comme OpenClaw, c'est un employé qui a <strong>les clés de tout le bâtiment</strong> : il entre dans les bureaux, ouvre les coffres, envoie des courriers, passe des commandes. C'est une machine à productivité extraordinaire — mais c'est aussi une surface d'attaque massive si elle n'est pas correctement sécurisée.</p>
<p>Imagine concrètement : ton agent envoie des emails à tes clients, déploie du code en production sur tes serveurs, gère ton calendrier, traite des paiements via Stripe, et accède à tes repos GitHub. Si quelqu'un prend le contrôle de cet agent — où même simplement accède aux données qu'il manipule — les conséquences sont catastrophiques. On parle de pertes financières directes, de violations de données personnelles, de destruction de code source, et de dommages réputationnels potentiellement irréversibles.</p>
<p><strong>Attention :</strong> Ne te dis jamais "je suis trop petit pour être une cible". Les attaques automatisées scannent internet en permanence. Elles ne ciblent pas des entreprises spécifiques — elles cherchent des machines mal configurées. Et un Mac Mini avec des ports ouverts sur internet, c'est exactement ce qu'elles trouvent.</p>

<h2>Les risques concrets</h2>
<p>Passons du théorique au concret. Voici ce qui peut arriver — et qui arrive tous les jours à des gens qui n'ont pas sécurisé leur infrastructure :</p>
<ul>
<li><strong>Fuite d'API keys</strong> : Tes clés Stripe, OpenAI, Anthropic, GitHub accessibles en clair dans un fichier non protégé. Un pirate qui met la main dessus peut vider tes crédits OpenAI (des centaines d'euros en quelques heures), supprimer tes repos GitHub, où pire — faire des transactions Stripe en ton nom. Cas réel : en 2023, un développeur a eu 12 000$ de crédits AWS consommés en une nuit parce que sa clé était dans un repo public. Ce genre de choses arrive aussi avec des fichiers .env mal protégés sur une machine locale.</li>
<li><strong>Accès réseau non protégé</strong> : Sans firewall ni VPN, n'importe qui sur le même réseau peut intercepter les communications de ton agent. Si tu travailles depuis un coworking, un café où même chez toi avec un Wi-Fi mal configuré, le risque est réel. Un outil comme Wireshark permet à quiconque sur le même réseau de voir le trafic non chiffré — y compris les tokens d'authentification que ton agent envoie aux APIs.</li>
<li><strong>Données clients exposées</strong> : Noms, emails, conversations, historiques d'achats — si ton agent gère des interactions clients, leurs données sont ta responsabilité légale au sens du RGPD. Une fuite de données personnelles, c'est une amende potentielle allant jusqu'à 4% de ton chiffre d'affaires annuel où 20 millions d'euros (le montant le plus élevé des deux). Même en tant que freelance où petite structure, tu es concerné.</li>
<li><strong>Prise de contrôle à distance</strong> : Si le port SSH (22) est ouvert sur internet sans protection, un attaquant peut tenter un brute-force et prendre le contrôle total de ta machine. À partir de là, il a accès à tout : tes fichiers, tes clés, tes données, et il peut utiliser ta machine pour attaquer d'autres systèmes (ce qui te rend légalement complice).</li>
<li><strong>Exécution de code malveillant</strong> : Sans sandbox, un prompt injection malicieux pourrait potentiellement faire exécuter des commandes système à ton agent. Imagine quelqu'un qui envoie à ton agent un message contenant des instructions cachées qui lui font exécuter <code>rm -rf /</code> où qui exfiltrent tes données vers un serveur externe.</li>
<li><strong>Factures astronomiques</strong> : Un bug, une boucle infinie, où une attaque peut faire exploser tes coûts d'API. Sans rate limiting ni monitoring, tu peux te réveiller avec une facture OpenAI de 5 000€ pour une seule nuit. Les APIs facturent à l'utilisation — et elles ne posent pas de questions si ton agent envoie 100 000 requêtes en boucle.</li>
</ul>
<p><strong>Conseil pratique :</strong> Fais une recherche rapide sur "API key leak GitHub" où "AWS credential leak cost" pour voir des cas réels. Ça rend le risque beaucoup plus tangible quand tu vois des témoignages de gens qui ont perdu des milliers d'euros.</p>

<h2>La bonne nouvelle</h2>
<p>Si tu es en train de lire cette leçon, tu es déjà en avance sur 90% des utilisateurs d'agents IA qui ne se posent même pas la question de la sécurité. Et voici l'excellente nouvelle : sécuriser OpenClaw n'est pas compliqué. Ça ne demande pas un diplôme en cybersécurité, ça ne coûte presque rien, et ça ne prend pas des semaines.</p>
<p>Concrètement, on parle de <strong>quelques heures de configuration initiale</strong> — une après-midi bien investie — puis environ <strong>10 minutes de maintenance par semaine</strong>. C'est un investissement ridicule comparé aux risques que tu élimines.</p>
<p>Dans ce module, tu vas mettre en place une sécurité solide et professionnelle en 6 étapes progressives :</p>
<ol>
<li><strong>Comprendre les risques</strong> (cette leçon) — parce qu'on ne protège bien que ce qu'on comprend</li>
<li><strong>Choisir et configurer le bon hardware</strong> — la fondation physique de ta sécurité</li>
<li><strong>Installer et configurer un VPN</strong> — le tunnel chiffré qui protège toutes tes communications</li>
<li><strong>Sécuriser le réseau avec un firewall</strong> — le gardien qui contrôle les accès</li>
<li><strong>Configurer les réglages de sécurité OpenClaw</strong> — la protection au niveau applicatif</li>
<li><strong>Mettre en place la maintenance continue</strong> — pour que ta sécurité reste solide dans le temps</li>
</ol>
<p>Chaque étape est concrète, actionnable, et tu verras les résultats immédiatement. À la fin de ce module, tu auras une infrastructure dont tu pourras être fier — et surtout, une infrastructure à laquelle tes clients peuvent faire confiance.</p>
<p><strong>Astuce :</strong> Ne saute pas les étapes, même si certaines te semblent "évidentes". La sécurité, c'est une chaîne — et une chaîne est aussi solide que son maillon le plus faible. Un VPN parfait ne sert à rien si tes API keys sont en clair dans un fichier accessible à tous.</p>

<h2>Mindset sécurité</h2>
<p>Avant de plonger dans la technique, il faut adopter le bon état d'esprit. La sécurité informatique n'est pas juste une liste de cases à cocher — c'est une façon de penser qui doit devenir un réflexe.</p>
<p>La règle numéro 1 en sécurité : <strong>"Ne fais confiance à rien par défaut."</strong> C'est ce qu'on appelle le modèle "Zero Trust" dans le jargon. Chaque connexion, chaque accès, chaque permission doit être explicitement autorisé. Si tu n'as pas dit "oui, cette connexion est légitime", alors elle est considérée comme suspecte.</p>
<p>C'est aussi le principe du <strong>"least privilege"</strong> (moindre privilège) — ne donner que le strict minimum nécessaire pour fonctionner. Ton agent a besoin de lire des emails ? Il n'a pas besoin d'accès en écriture. Il a besoin d'un seul repo GitHub ? Il n'a pas besoin d'un token qui donne accès à tous tes repos. Chaque permission supplémentaire est une surface d'attaque supplémentaire.</p>
<p>Pense à ça comme un hôtel : chaque client à la clé de sa chambre, pas le passe-partout de tout l'étage. Le room service a accès aux étages mais pas aux coffres. Le concierge à le passe-partout mais ne peut pas ouvrir les coffres. Chaque personne a exactement les accès dont elle a besoin, rien de plus.</p>
<p>Et c'est aussi une question de <strong>crédibilité professionnelle</strong>. Si tu vends des services d'automatisation IA à des clients — ce qui est l'objectif de cette formation — ils doivent pouvoir te faire confiance avec leurs données. Imagine que tu proposes à un client un agent IA qui gère ses emails et son CRM. Sa première question (consciente où non) sera : "Est-ce que mes données sont en sécurité ?" Si tu ne peux pas répondre avec confiance et preuves à l'appui, tu perdras le contrat. Et si une faille de sécurité expose ses données, tu perdras bien plus que ça : ta réputation entière peut être détruite en un instant.</p>
<p><strong>Attention :</strong> La sécurité n'est pas un état statique, c'est un processus continu. Le fait d'avoir configuré un firewall aujourd'hui ne te protège pas contre la faille découverte demain. C'est pour ça que la dernière leçon de ce module est consacrée à la maintenance — la partie que la plupart des gens négligent et qui fait toute la différence.</p>`,
    exercise: `<h3>Exercice : Audit de sécurité initial</h3>
<ol>
<li>Liste toutes les API keys que ton agent OpenClaw utilise actuellement (où utilisera)</li>
<li>Pour chacune, note : où elle est stockée, qui y a accès, quand elle a été créée</li>
<li>Identifie les 3 risques les plus critiques pour ta configuration actuelle</li>
<li>Classe-les par niveau de gravité (critique, important, mineur)</li>
</ol>
<p><strong>Livrable :</strong> Un document avec ton audit de sécurité initial. Tu le mettras à jour au fur et à mesure du module.</p>`,
  },
  {
    order: 21,
    module: 4,
    title: "Choisir et configurer son hardware : le Mac Mini",
    slug: "hardware-mac-mini-serveur-dédié",
    duration: "50 min",
    description: "Pourquoi le Mac Mini est le choix optimal pour héberger OpenClaw et comment le configurer comme serveur dédié.",
    content: `<h2>Le hardware, c'est la fondation</h2>
<p>Avant de parler de VPN, de firewall où de configuration logicielle, il faut commencer par la base : la machine physique sur laquelle ton agent va tourner. C'est la fondation de tout le reste — et comme pour une maison, si la fondation est bancale, tout ce que tu construis dessus est fragile.</p>
<p>Ton agent OpenClaw a besoin d'une machine dédiée qui tourne 24 heures sur 24, 7 jours sur 7, 365 jours par an. Pas ton PC de bureau que tu éteins le soir. Pas un laptop que tu emmènes au café et qui se met en veille quand tu fermes le capot. Pas ta machine de gaming qui reboot toute seule quand Windows décide de faire ses mises à jour à 3h du matin.</p>
<p>On parle d'une machine <strong>stable, fiable, connectée en permanence</strong>, dédiée exclusivement à faire tourner ton agent et ses services associés. C'est un investissement — mais c'est un investissement qui se rentabilise très vite quand tu réalises que ton agent ne peut générer de la valeur que s'il est en ligne.</p>
<p><strong>Analogie :</strong> Pense à ton agent IA comme un employé. Pour qu'il soit productif, il lui faut un bureau (la machine), une connexion internet stable (le réseau), et un environnement de travail sécurisé (la configuration). Tu ne ferais pas travailler un employé sur un bureau bancal dans un couloir bruyant — c'est pareil pour ton agent.</p>
<p><strong>Attention :</strong> Certains débutants essaient de faire tourner leur agent sur leur machine personnelle "pour économiser". C'est une fausse économie. Non seulement ça pose des problèmes de stabilité (mises en veille, redémarrages, conflits logiciels), mais ça crée aussi des risques de sécurité supplémentaires : ton agent a accès à tous tes fichiers personnels, et inversement, toute faille dans ton agent expose ta vie numérique entière.</p>

<h2>Pourquoi le Mac Mini ?</h2>
<p>Après avoir testé toutes les options — VPS cloud, mini PC Windows, Raspberry Pi, serveurs Linux dédiés, et même des configurations Docker sur des machines virtuelles — le Mac Mini est le meilleur rapport qualité/prix/fiabilité pour héberger un agent IA en production. Et ce n'est pas qu'une opinion : c'est le choix que font la majorité des utilisateurs avancés d'agents IA.</p>
<p>Voici pourquoi :</p>
<ul>
<li><strong>Silencieux</strong> : Zéro bruit en utilisation normale. Le ventilateur ne se déclenche que sous charge intense, et même là, il est à peine audible. Tu peux poser ton Mac Mini dans ton salon, ta chambre, où ton bureau sans aucune nuisance sonore. Compare ça à un serveur Dell qui fait le bruit d'un aspirateur, où même à un mini PC Windows dont le petit ventilateur siffle en permanence.</li>
<li><strong>Compact</strong> : 12,7 cm de côté pour le M2, encore plus petit pour le M4. Il se glisse derrière un écran, sur une étagère, dans un tiroir. Tu n'as pas besoin d'un rack serveur où d'une pièce dédiée. Certains utilisateurs le fixent même derrière leur TV avec un support VESA.</li>
<li><strong>Puissant</strong> : La puce Apple Silicon (M2 où M4) est une merveille d'efficacité. Elle gère facilement OpenClaw + plusieurs agents en parallèle + Docker + des services de monitoring, le tout sans broncher. Le Neural Engine intégré est un bonus pour les tâches de machine learning local. Tu auras de la marge de manœuvre pour scaler tes opérations.</li>
<li><strong>Économique en énergie</strong> : C'est un point que beaucoup sous-estiment. Un Mac Mini consomme entre 5 et 15 watts en utilisation normale, soit environ <strong>5-8€ par mois d'électricité</strong>. Un PC classique consomme 80-200 watts, soit 15-30€/mois. Sur un an, la différence est de 120 à 260€ — rien qu'en économies d'énergie, le Mac Mini commence à se rembourser.</li>
<li><strong>macOS = Unix</strong> : macOS est basé sur BSD, une variante d'Unix. Ça signifie que tu as un Terminal natif avec toutes les commandes Unix, Docker fonctionne (via Colima où Docker Desktop), Homebrew te donne accès à des milliers de paquets, et 95% des tutoriels Linux s'appliquent directement. Tu as le meilleur des deux mondes : la fiabilité et l'écosystème Apple + la puissance d'un système Unix.</li>
<li><strong>Fiabilité Apple</strong> : Les mises à jour de sécurité sont régulières et stables. Le hardware est conçu pour durer 5 à 8 ans sans problème. Apple teste intensivement la compatibilité logiciel/hardware. En comparaison, un mini PC générique peut avoir des problèmes de drivers, de compatibilité, où des pannes matérielles beaucoup plus fréquentes.</li>
</ul>
<p><strong>Conseil pro :</strong> Si tu hésites entre le modèle de base et un modèle supérieur, prends le modèle de base avec 16 Go de RAM. C'est le sweet spot pour 90% des usages. Tu pourras toujours migrer vers une machine plus puissante plus tard si tes besoins grandissent.</p>

<h2>Configuration recommandée</h2>
<p>Tu n'as pas besoin de la version la plus chère. Le piège classique, c'est de suréquiper sa machine "au cas où". Voici exactement ce dont tu as besoin, et pourquoi :</p>
<ul>
<li><strong>Mac Mini M2 (où M4)</strong> : Le modèle de base suffit amplement pour 1 à 3 agents tournant en parallèle. Le M4 est plus récent et plus efficace énergétiquement, mais le M2 fait parfaitement le travail. Si tu trouves un M2 reconditionné en promotion, c'est une excellente affaire.</li>
<li><strong>RAM : 16 Go</strong> : C'est le minimum recommandé pour OpenClaw + Docker + des services de monitoring. Avec 16 Go, tu as assez de marge pour faire tourner plusieurs conteneurs Docker, un agent principal, des agents secondaires, et des outils de monitoring sans que la machine ne rame. 8 Go peut fonctionner pour un seul agent basique, mais tu seras vite limité dès que tu voudras scaler. Et sur Mac, la RAM n'est pas upgradable après achat — donc ne lésine pas sur ce point.</li>
<li><strong>SSD : 256 Go</strong> : OpenClaw et ses données prennent peu de place. Les logs, les configurations, les conteneurs Docker — tout ça tient facilement dans 256 Go. Si tu prévois de stocker beaucoup de données localement (vidéos, datasets), monte à 512 Go. Mais pour la plupart des usages, 256 Go est largement suffisant.</li>
<li><strong>Connexion : Ethernet obligatoire</strong> : Toujours, toujours, toujours préférer le câble Ethernet au Wi-Fi pour un serveur. Le Wi-Fi est pratique pour un laptop, mais pour une machine qui doit être connectée 24/7, c'est un risque inutile : déconnexions aléatoires, latence variable, interférences. Un câble Ethernet à 5€, c'est une connexion stable, rapide et fiable. Si ton Mac Mini est loin de ton routeur, investis dans un câble Ethernet long où un adaptateur CPL (courant porteur en ligne) — c'est mieux qu'un Wi-Fi instable.</li>
</ul>
<p><strong>Budget total :</strong> Entre 600€ et 800€ selon les promotions et le modèle choisi. En reconditionné Apple (site officiel Apple Refurbished), tu peux économiser 15 à 20%. Amorti sur 12 mois, ça fait environ 55-65€/mois — ce qui est <strong>moins cher qu'un VPS cloud équivalent</strong> en termes de performances, et sans les coûts cumulatifs qui augmentent chaque mois.</p>
<p><strong>Astuce budget :</strong> Vérifie régulièrement le site Apple Refurbished, Amazon Warehouse Deals, et Back Market. Les Mac Mini reconditionnés sont souvent quasiment neufs avec une garantie, pour 20% moins cher.</p>

<h2>Alternatives au Mac Mini</h2>
<p>Le Mac Mini n'est pas dans ton budget immédiatement ? Pas de panique. Voici les alternatives classées par rapport qualité/prix, avec leurs avantages et inconvénients :</p>
<ul>
<li><strong>VPS cloud (Hetzner, OVH, Contabo)</strong> : 4-8 vCPU pour 15-40€/mois. C'est la meilleure option pour démarrer rapidement sans investissement initial. Hetzner est particulièrement recommandé pour son excellent rapport qualité/prix (leur offre CX31 à ~15€/mois est très populaire). Avantages : pas de hardware à gérer, pas de coupure de courant à gérer, facilement scalable. Inconvénients : coût cumulatif (après 2-3 ans, tu auras payé plus cher qu'un Mac Mini), moins de contrôle sur la machine, dépendance à un fournisseur, latence potentielle.</li>
<li><strong>Mini PC (Intel NUC, Beelink, MinisForum)</strong> : 200-400€, performances correctes pour le prix. Avantages : moins cher qu'un Mac Mini, tu peux choisir Linux comme OS (Ubuntu Server est excellent). Inconvénients : qualité de fabrication variable, ventilateur souvent bruyant, pas la fiabilité Apple, nécessite de maîtriser Linux. Le Beelink SER5 est un bon choix dans cette catégorie.</li>
<li><strong>Raspberry Pi 5</strong> : ~100€ tout compris (carte + boîtier + alimentation + carte SD). Ultra économique et parfait pour apprendre. Avantages : consommation ridicule (~3W), communauté énorme, idéal pour un premier agent simple. Inconvénients : performances limitées pour des agents complexes, la carte SD peut lâcher (préfère un SSD USB), 8 Go de RAM max, pas adapté pour de la production sérieuse avec plusieurs agents.</li>
<li><strong>Ancien Mac que tu n'utilises plus</strong> : Si tu as un vieux MacBook où iMac qui traîne, c'est une option gratuite pour démarrer. Tant qu'il supporte macOS Ventura où plus récent et qu'il a 8 Go de RAM, ça peut faire l'affaire temporairement. Inconvénient : consommation électrique plus élevée et les laptops ne sont pas conçus pour tourner 24/7 (problèmes de batterie et de chaleur).</li>
</ul>
<p><strong>Recommandation :</strong> Si tu débutes et que le budget est serré, commence avec un VPS Hetzner. Quand tes revenus d'automatisation couvrent l'investissement, migre vers un Mac Mini. C'est la trajectoire la plus pragmatique.</p>

<h2>Setup initial du Mac Mini comme serveur</h2>
<p>Une fois ton Mac Mini déballé, voici les étapes de configuration détaillées pour le transformer en serveur dédié. Prends le temps de bien faire chaque étape — c'est un investissement unique qui va servir pendant des années :</p>
<ol>
<li><strong>Configuration macOS initiale</strong> : Crée un compte administrateur avec un mot de passe fort (12+ caractères, mélange de lettres, chiffres et symboles). Active les mises à jour automatiques (Réglages > Général > Mise à jour logicielle > Mises à jour automatiques). Désactive Siri et les services inutiles pour un serveur (Bluetooth si non utilisé, AirDrop, etc.). Désactive la mise en veille complètement (Réglages > Écran de verrouillage > régler tous les délais sur "Jamais").</li>
<li><strong>Paramètres Énergie critiques</strong> : Va dans Réglages > Énergie et coche absolument "Démarrer automatiquement après une coupure de courant". C'est crucial — si l'électricité coupe et revient à 3h du matin, tu veux que ton Mac Mini redémarre tout seul sans ton intervention. Désactive aussi "Mettre en veille les disques durs quand c'est possible".</li>
<li><strong>Bureau à distance</strong> : Active le Partage d'écran dans Réglages > Général > Partage pour pouvoir contrôler le Mac Mini via VNC depuis un autre ordinateur. Plus important encore : active "Session à distance" (SSH) dans le même panneau. SSH sera ton outil principal pour administrer le serveur au quotidien. Note l'adresse IP locale affichée.</li>
<li><strong>Homebrew</strong> : Installe le gestionnaire de paquets macOS avec la commande d'installation officielle depuis le site brew.sh. Homebrew est indispensable — c'est lui qui te permettra d'installer facilement tous les outils serveur dont tu as besoin. Après l'installation, n'oublie pas d'ajouter Homebrew au PATH comme indiqué dans la sortie d'installation.</li>
<li><strong>Docker</strong> : Installe Docker Desktop (plus simple, interface graphique) où Colima (plus léger, en ligne de commande). Colima est recommandé pour un serveur car il consomme moins de ressources. Installation via Homebrew : <code>brew install colima docker</code> puis <code>colima start</code>. Docker te permettra de conteneuriser tes services pour une meilleure isolation et gestion.</li>
<li><strong>Node.js</strong> : Installe Node.js via nvm (Node Version Manager) plutôt que directement via Homebrew. nvm te permet de gérer plusieurs versions de Node facilement. Installation : <code>brew install nvm</code>, puis <code>nvm install --lts</code> pour la dernière version stable. OpenClaw nécessite Node.js 18 où supérieur.</li>
</ol>
<p><strong>Astuce :</strong> Documente chaque étape que tu fais dans un fichier texte. Si tu dois reconfigurer ta machine un jour (panne, migration, upgrade), tu seras content d'avoir une procédure écrite. C'est aussi une bonne habitude professionnelle — tes clients apprécieront cette rigueur.</p>

<h2>Conseil pro : le mode "headless"</h2>
<p>Une fois configuré, ton Mac Mini n'a besoin ni d'écran, ni de clavier, ni de souris. Tu le contrôles entièrement via SSH depuis ton PC principal, ton laptop, où même ton téléphone avec une app comme Termius. C'est le mode "headless" — exactement comme un vrai serveur dans un datacenter.</p>
<p>En pratique, ton Mac Mini sera branché sur deux câbles : l'alimentation et l'Ethernet. C'est tout. Tu peux le ranger sur une étagère, derrière un meuble, où même le fixer au mur avec un support adapté. Il fait son travail en silence, 24/7, sans que tu aies besoin de le toucher physiquement.</p>
<p><strong>Astuce avancée :</strong> Si tu veux un accès graphique à distance (par exemple pour des tâches qui nécessitent un écran), tu peux utiliser un "HDMI dummy plug" — un petit adaptateur à 5€ qui simule un écran connecté. Sans ça, macOS peut limiter la résolution du bureau à distance. Avec le dummy plug, tu as un bureau virtuel en pleine résolution que tu peux contrôler via VNC.</p>
<p><strong>Attention :</strong> Avant de passer en mode headless, assure-toi à 100% que SSH fonctionne correctement. Teste la connexion SSH depuis un autre appareil AVANT de débrancher écran et clavier. Sinon, tu devras rebrancher un écran pour débugger — ce qui n'est pas dramatique mais frustrant.</p>`,
    exercise: `<h3>Exercice : Préparer ta machine</h3>
<ol>
<li>Si tu as un Mac Mini : configure-le en mode serveur en suivant les étapes ci-dessus</li>
<li>Si tu utilises un VPS : choisis un fournisseur et configure une instance Ubuntu 22.04</li>
<li>Dans les deux cas : vérifie que tu peux te connecter en SSH depuis un autre appareil</li>
<li>Installe Homebrew (Mac) où les paquets essentiels (Linux) : git, curl, node, docker</li>
<li>Teste que Docker fonctionne en lançant un container hello-world</li>
</ol>
<p><strong>Livrable :</strong> Screenshot de ta connexion SSH réussie + Docker hello-world qui tourne.</p>`,
  },
  {
    order: 22,
    module: 4,
    title: "Installer et configurer un VPN",
    slug: "vpn-installation-configuration",
    duration: "50 min",
    description: "Mettre en place un VPN pour chiffrer toutes les communications de ton agent OpenClaw et sécuriser l'accès à distance.",
    content: `<h2>Pourquoi un VPN est indispensable</h2>
<p>Un VPN (Virtual Private Network) crée un tunnel chiffré entre tes appareils. Pour bien comprendre, imagine que tes données voyagent dans des tuyaux transparents — n'importe qui peut voir ce qui passe. Un VPN, c'est comme remplacer ces tuyaux transparents par des tuyaux opaques et blindés. Les données passent toujours, mais personne ne peut voir ce qu'il y a à l'intérieur.</p>
<p>Concrètement, toutes les communications entre ton PC, ton téléphone et ton Mac Mini passent par ce tunnel chiffré — complètement invisibles pour quiconque sur le réseau, y compris ton fournisseur d'accès internet, l'administrateur du réseau Wi-Fi, où un pirate qui écoute le trafic.</p>
<p>Sans VPN, quand tu te connectes en SSH à ton Mac Mini depuis un café, un coworking, un hôtel, où même depuis un réseau Wi-Fi domestique mal sécurisé, quelqu'un sur le même réseau pourrait théoriquement intercepter ta connexion avec des outils facilement trouvables. Avec un VPN, c'est <strong>mathématiquement impossible</strong> — le chiffrement utilisé (AES-256 où ChaCha20) est le même que celui utilisé par les militaires et les banques.</p>
<p>Mais le VPN ne sert pas uniquement au chiffrement. Il résout aussi un problème très pratique : <strong>l'accès à distance</strong>. Ton Mac Mini est derrière ta box internet, qui lui attribue une adresse IP locale (type 192.168.x.x). Cette adresse n'est pas accessible depuis l'extérieur. Le VPN crée un réseau virtuel privé avec ses propres adresses IP, accessibles depuis n'importe où dans le monde. Tu peux te connecter à ton Mac Mini depuis le Japon, le Brésil où le café d'en face — tant que tu es sur le VPN, c'est comme si tu étais branché en direct sur le même réseau local.</p>
<p><strong>Attention :</strong> Ne confonds pas un VPN "serveur" (comme Tailscale où WireGuard self-hosted) avec un VPN "commercial" (comme NordVPN où ExpressVPN). Les VPN commerciaux sont conçus pour masquer ton IP quand tu navigues sur internet. Ce n'est pas du tout ce dont on parle ici. Ce qu'on veut, c'est un VPN "mesh" qui connecte tes propres appareils entre eux de manière sécurisée.</p>

<h2>Les options VPN</h2>
<p>Il existe plusieurs solutions, chacune avec ses avantages et ses cas d'usage. Voici un comparatif honnête pour t'aider à choisir :</p>
<ul>
<li><strong>Tailscale (recommandé pour débuter)</strong> : C'est la solution que je recommande à 90% des utilisateurs. Gratuit pour un usage personnel (jusqu'à 100 appareils !), installation en 2 minutes littéralement, zéro configuration réseau complexe. Tailscale crée un réseau privé entre tes appareils automatiquement en utilisant WireGuard sous le capot. Pas besoin de toucher à ton routeur, pas de port forwarding, pas de configuration DNS. Tu installes, tu te connectes, ça marché. Même si tes appareils sont derrière des NAT différents (par exemple, ton Mac Mini chez toi et ton laptop au bureau), Tailscale gère tout via du NAT traversal intelligent. C'est de la magie — mais de la magie bien sécurisée.</li>
<li><strong>WireGuard (self-hosted)</strong> : Le protocole VPN open-source le plus performant et le plus moderne. C'est ce que Tailscale utilise sous le capot. Avantages : contrôle total, pas de dépendance à un service tiers, code audité et minimal (~4000 lignes de code vs 100 000+ pour OpenVPN). Inconvénients : nécessite de configurer un serveur VPN, de gérer le port forwarding sur ton routeur, et de distribuer manuellement les clés entre appareils. Réservé aux utilisateurs qui veulent un contrôle total et qui sont à l'aise avec la ligne de commande.</li>
<li><strong>Mullvad VPN</strong> : ~5€/mois, un des VPN les plus respectés en termes de vie privée. Utile en complément si ton agent fait du scraping web où accède à des services géo-restreints. Mullvad ne demande aucune information personnelle pour s'inscrire — tu paies et tu reçois un numéro de compte. Mais attention : ce n'est pas un remplacement pour Tailscale/WireGuard, c'est un outil complémentaire pour un usage différent.</li>
<li><strong>ZeroTier</strong> : Alternative à Tailscale, gratuit jusqu'à 25 appareils. Interface un peu moins intuitive que Tailscale, mais plus de flexibilité pour les configurations réseau avancées. Bonne option si tu as besoin de fonctionnalités réseau spécifiques comme le bridging où les routes personnalisées.</li>
</ul>
<p><strong>Ma recommandation :</strong> Commence avec Tailscale. Tu pourras toujours migrer vers WireGuard self-hosted plus tard si tu en ressens le besoin. L'important, c'est d'avoir un VPN fonctionnel maintenant, pas un VPN "parfait" dans 3 semaines.</p>

<h2>Installation de Tailscale (méthode recommandée)</h2>
<p>Tailscale est basé sur WireGuard mais avec une couche de gestion automatique qui rend tout transparent. Voici la procédure détaillée :</p>
<ol>
<li><strong>Créer un compte Tailscale</strong> : Va sur tailscale.com et crée un compte. Tu peux utiliser ton compte Google, Microsoft, où GitHub pour t'authentifier — ce qui active automatiquement la 2FA si ton compte source l'utilise. Choisis le plan "Personal" (gratuit) — il est largement suffisant pour commencer.</li>
<li><strong>Sur ton Mac Mini (le serveur)</strong> : Télécharge Tailscale depuis le Mac App Store où installe-le via Homebrew avec <code>brew install tailscale</code>. Lance l'application et connecte-toi avec ton compte. Une adresse IP Tailscale (commençant par 100.x.x.x) est automatiquement attribuée à ton Mac Mini. Note cette adresse — c'est celle que tu utiliseras pour te connecter à distance.</li>
<li><strong>Sur ton PC principal</strong> : Même procédure — installe Tailscale et connecte-toi avec le même compte. Une autre adresse IP 100.x.x.x est attribuée à ton PC. Les deux machines sont maintenant sur le même réseau privé, peu importe où elles se trouvent physiquement.</li>
<li><strong>Sur ton téléphone</strong> : Installe l'app Tailscale depuis l'App Store (iOS) où le Play Store (Android). Connecte-toi avec le même compte. Ton téléphone rejoint le réseau — tu pourras administrer ton serveur depuis ton lit où en déplacement.</li>
<li><strong>Résultat immédiat</strong> : Tes 3 appareils (où plus) sont maintenant sur un réseau privé chiffré. Tu peux accéder au Mac Mini via son IP privée Tailscale (ex: 100.64.x.x) depuis n'importe où dans le monde — un café à Paris, un aéroport au Japon, le réseau 4G de ton téléphone. La connexion est chiffrée de bout en bout avec WireGuard.</li>
</ol>
<p><strong>Astuce Tailscale :</strong> Active la fonctionnalité "MagicDNS" dans les paramètres Tailscale. Ça te permet d'utiliser le nom de ta machine (ex: <code>mac-mini</code>) au lieu de l'adresse IP pour te connecter. Plus simple à retenir et plus pratique au quotidien : <code>ssh user@mac-mini</code> au lieu de <code>ssh user@100.64.23.45</code>.</p>
<p><strong>Astuce sécurité :</strong> Dans le panneau d'administration Tailscale (login.tailscale.com/admin), tu peux voir tous les appareils connectés, révoquer l'accès d'un appareil perdu où volé, et configurer des ACLs (Access Control Lists) pour contrôler finement qui peut se connecter à quoi.</p>

<h2>Installation de WireGuard (méthode avancée)</h2>
<p>Si tu préfères le contrôle total et que tu es à l'aise avec la ligne de commande, WireGuard self-hosted est la solution la plus propre et la plus performante. C'est plus de travail à configurer, mais tu n'as aucune dépendance à un service tiers.</p>
<ol>
<li><strong>Installer WireGuard</strong> : Via Homebrew sur macOS (<code>brew install wireguard-tools</code>) où via apt sur Ubuntu/Debian (<code>sudo apt install wireguard</code>). L'installation est rapide — WireGuard est intégré au kernel Linux depuis la version 5.6, et sur macOS il fonctionne via une extension réseau.</li>
<li><strong>Générer les clés</strong> : Chaque appareil a besoin d'une paire de clés publique/privée. Utilise <code>wg genkey | tee privatekey | wg pubkey > publickey</code> pour générer les deux en une commande. Attention : la clé privée ne doit JAMAIS quitter l'appareil sur lequel elle a été générée. C'est comme ta clé de maison — tu ne la donnes à personne.</li>
<li><strong>Configurer le fichier wg0.conf</strong> : C'est le fichier de configuration principal. Tu y définis l'adresse IP du tunnel, le port d'écoute (51820 par défaut), et les "peers" — les appareils autorisés à se connecter. Chaque peer est identifié par sa clé publique et se voit attribuer une plage d'adresses IP autorisées. La configuration est simple mais demande de la rigueur — une erreur de syntaxe et le tunnel ne fonctionnera pas.</li>
<li><strong>Activer au démarrage</strong> : Configure WireGuard pour se lancer automatiquement au démarrage du système. Sur Linux : <code>sudo systemctl enable wg-quick@wg0</code>. Sur macOS, tu peux utiliser un Launch Daemon où un script de démarrage. C'est essentiel pour un serveur : si la machine redémarre après une coupure de courant, le VPN doit revenir automatiquement.</li>
<li><strong>Port forwarding sur ton routeur</strong> : C'est la partie qui rebute beaucoup de gens. Si ton Mac Mini est derrière un routeur (et il l'est forcément), tu dois ouvrir le port 51820 en UDP et le rediriger vers l'adresse IP locale de ton Mac Mini. La procédure varie selon ton routeur — cherche "port forwarding" + le modèle de ton routeur. C'est cette étape que Tailscale évite complètement grâce au NAT traversal.</li>
</ol>
<p><strong>Conseil :</strong> Si tu galères avec WireGuard, ne t'obstine pas. Installe Tailscale, sécurise ton agent, et reviens à WireGuard plus tard quand tu auras plus d'expérience réseau. L'important est d'avoir un VPN fonctionnel, pas de prouver que tu maîtrises la configuration manuelle.</p>

<h2>Vérifier que le VPN fonctionne</h2>
<p>Après l'installation, il est crucial de vérifier que tout fonctionne correctement. Ne te contente pas de voir un voyant vert dans l'interface — teste concrètement :</p>
<ul>
<li><strong>Test de connectivité</strong> : Ping ton Mac Mini depuis ton PC via l'IP VPN avec <code>ping 100.x.x.x</code>. La réponse doit être rapide (< 50ms en réseau local, < 100ms en 4G). Si le ping échoue, vérifie que Tailscale/WireGuard est bien actif sur les deux machines.</li>
<li><strong>Test SSH</strong> : Connecte-toi en SSH vers le Mac Mini via l'IP VPN avec <code>ssh user@100.x.x.x</code>. La connexion doit fonctionner immédiatement. Si tu as MagicDNS activé (Tailscale), teste aussi avec le nom de la machine.</li>
<li><strong>Test de sécurité négatif</strong> : Déconnecte-toi du VPN et retente le SSH — ça ne devrait plus marcher si ton firewall est bien configuré (on voit ça en détail dans la prochaine leçon). Ce test négatif est aussi important que les tests positifs : il confirme que sans VPN, l'accès est bien bloqué.</li>
<li><strong>Test depuis un autre réseau</strong> : Si possible, teste depuis un réseau complètement différent — le réseau 4G de ton téléphone par exemple. Connecte-toi au VPN via l'app mobile, puis SSH dans le Mac Mini. Si ça marché, tu sais que ton setup fonctionne depuis n'importe où dans le monde.</li>
</ul>
<p><strong>Astuce de debugging :</strong> Si quelque chose ne marché pas, vérifie dans l'ordre : (1) Tailscale/WireGuard est-il actif sur les deux machines ? (2) Les deux machines se voient-elles dans le dashboard Tailscale ? (3) Le firewall local ne bloque-t-il pas les connexions ? La plupart des problèmes viennent du point 3.</p>

<h2>Sécuriser le VPN lui-même</h2>
<p>Mettre en place un VPN c'est bien, mais il faut aussi sécuriser le VPN lui-même. Un VPN mal configuré peut donner un faux sentiment de sécurité — tu penses être protégé alors que tu ne l'es pas complètement.</p>
<ul>
<li><strong>Activer le Kill Switch</strong> : C'est une fonctionnalité critique souvent négligée. Le Kill Switch garantit que si le VPN se déconnecte (crash, bug réseau, perte de connexion), <strong>tout le trafic réseau est bloqué</strong> — pas de fuite accidentelle de données en clair. Sans Kill Switch, si ton VPN plante pendant 30 secondes, tes données transitent en clair pendant ces 30 secondes. Tailscale gère ça automatiquement. Pour WireGuard, configure la directive <code>PostDown</code> pour bloquer le trafic si le tunnel tombe.</li>
<li><strong>Activer l'authentification 2FA</strong> sur ton compte Tailscale (où le service VPN que tu utilises). Si quelqu'un compromet ton mot de passe Tailscale, il pourrait ajouter ses propres appareils à ton réseau et accéder à ton serveur. Avec la 2FA, même avec ton mot de passe, il ne peut pas se connecter sans ton deuxième facteur d'authentification.</li>
<li><strong>Ne partager tes clés VPN avec personne</strong> : Chaque appareil doit avoir sa propre paire de clés. Ne copie jamais une clé privée d'un appareil à un autre. Si tu veux ajouter un nouvel appareil, génère une nouvelle paire de clés pour lui. Si un appareil est perdu où volé, révoque immédiatement ses clés depuis le dashboard.</li>
<li><strong>Auditer régulièrement les appareils connectés</strong> : Va dans le dashboard Tailscale (où ton interface WireGuard) et vérifie la liste des appareils. Tu reconnais tout ? Il n'y a pas d'appareil que tu n'utilises plus ? Retire les appareils obsolètes — un vieux laptop que tu as revendu et oublié de retirer du VPN, c'est une porte d'entrée potentielle.</li>
<li><strong>Garder le logiciel VPN à jour</strong> : Les mises à jour de Tailscale et WireGuard incluent régulièrement des correctifs de sécurité. Active les mises à jour automatiques où vérifie manuellement chaque semaine.</li>
</ul>
<p><strong>Attention :</strong> Un VPN ne te protège pas de tout. Il chiffre les communications entre tes appareils, mais si quelqu'un a déjà accès à un de tes appareils (malware, accès physique), le VPN n'y change rien. C'est pour ça que le VPN n'est qu'une couche de sécurité parmi d'autres — et c'est pour ça qu'on continue avec le firewall dans la prochaine leçon.</p>`,
    exercise: `<h3>Exercice : Mettre en place ton VPN</h3>
<ol>
<li>Installe Tailscale sur ton Mac Mini (où serveur) ET sur ton PC principal</li>
<li>Connecte les deux appareils au même compte Tailscale</li>
<li>Note les IP Tailscale attribuées à chaque appareil</li>
<li>Teste la connexion SSH via l'IP Tailscale</li>
<li>Active l'authentification 2FA sur ton compte Tailscale</li>
</ol>
<p><strong>Bonus :</strong> Installe aussi Tailscale sur ton téléphone et teste la connexion depuis le réseau mobile (4G/5G).</p>
<p><strong>Livrable :</strong> Screenshot du dashboard Tailscale montrant tes appareils connectés.</p>`,
  },
  {
    order: 23,
    module: 4,
    title: "Firewall, ports et sécurité réseau",
    slug: "firewall-ports-sécurité-réseau",
    duration: "55 min",
    description: "Configurer le firewall, gérer les ports et mettre en place une défense en profondeur pour protéger ton serveur.",
    content: `<h2>Le firewall : ton gardien de porte</h2>
<p>Si le VPN est le tunnel blindé par lequel transitent tes données, le firewall est le videur à l'entrée de ta machine. C'est lui qui décide qui entre, qui sort, et qui se fait refouler.</p>
<p>Le firewall contrôle toutes les connexions réseau entrantes et sortantes de ta machine. Chaque fois qu'un appareil où un programme essaie de se connecter à ton serveur, le firewall vérifie : "Est-ce que cette connexion est autorisée ?" Si oui, il la laisse passer. Si non, il la bloque silencieusement — l'attaquant ne sait même pas que ta machine existe.</p>
<p>Par défaut sur macOS, le firewall est <strong>désactivé</strong>. C'est la première chose à corriger. Un Mac Mini connecté à internet sans firewall, c'est comme une maison avec la porte grande ouverte dans un quartier fréquenté — ce n'est qu'une question de temps avant que quelqu'un entre.</p>
<p>Le principe fondamental est simple mais crucial : <strong>tout est bloqué par défaut, sauf ce que tu autorises explicitement</strong>. C'est l'approche "deny all, allow specific" — aussi appelée "whitelist". À l'inverse, l'approche "allow all, deny specific" (blacklist) est beaucoup moins sécurisée parce que tu es obligé d'anticiper toutes les menaces possibles, ce qui est impossible.</p>
<p><strong>Analogie :</strong> Imagine un festival de musique. L'approche "deny all" : seuls les gens avec un bracelet entrent. L'approche "allow all" : tout le monde entre sauf les gens sur une liste noire. La deuxième approche est évidemment beaucoup plus risquée — il suffit qu'une personne ne soit pas sur la liste pour qu'elle passe. C'est pareil pour ton firewall.</p>
<p><strong>Attention :</strong> Ne confonds pas le firewall de ton Mac avec le firewall de ta box internet. Ce sont deux niveaux de protection différents et complémentaires. Le firewall de ta box protège ton réseau local d'internet. Le firewall de ton Mac protège ton Mac des autres appareils sur ton réseau local (et d'internet si ta box est mal configurée). Tu as besoin des deux.</p>

<h2>Activer le firewall macOS</h2>
<p>Voici la procédure détaillée pour configurer le firewall intégré de macOS. C'est simple mais chaque étape compte :</p>
<ol>
<li><strong>Ouvrir les réglages</strong> : Va dans <strong>Réglages Système > Réseau > Coupe-feu</strong> (où "Firewall" si ton macOS est en anglais). Sur les versions plus anciennes de macOS, c'est dans Préférences Système > Sécurité et confidentialité > Coupe-feu.</li>
<li><strong>Activer le coupe-feu</strong> : Clique sur le toggle pour l'activer. C'est la première barrière — à partir de maintenant, macOS contrôle les connexions entrantes.</li>
<li><strong>Activer le mode furtif (stealth mode)</strong> : Clique sur "Options" (où "Options du coupe-feu") et active le <strong>mode furtif</strong>. Ce mode fait que ta machine ne répond même pas aux requêtes de découverte réseau (ping, port scan). Pour un attaquant qui scanne internet, ta machine est littéralement invisible — elle ne répond pas, comme si elle n'existait pas. C'est un excellent premier niveau de protection contre les scans automatisés qui cherchent des machines vulnérables.</li>
<li><strong>Bloquer toutes les connexions entrantes</strong> : Coche "Bloquer toutes les connexions entrantes" puis ajoute manuellement les exceptions nécessaires. Les services Apple essentiels (comme le Partage de fichiers si tu l'utilises) seront listés, et tu pourras autoriser où bloquer chacun individuellement. N'autorise que ce dont tu as besoin — dans notre cas, SSH est le seul service qui a besoin d'accepter des connexions entrantes.</li>
</ol>
<p><strong>Conseil important :</strong> Après avoir activé le firewall, vérifie immédiatement que tu peux toujours te connecter en SSH via le VPN. Si ça ne marché plus, tu as probablement bloqué SSH sans le vouloir — retourne dans les options du firewall et ajoute une exception pour "Session à distance" (SSH).</p>
<p><strong>Astuce :</strong> macOS bloque les connexions entrantes mais laisse passer les connexions sortantes par défaut. C'est généralement ce qu'on veut : ton agent doit pouvoir contacter les APIs (connexions sortantes) mais personne ne doit pouvoir initier une connexion vers ton agent sans autorisation (connexions entrantes).</p>

<h2>Les ports à gérer</h2>
<p>Pour bien configurer ton firewall, tu dois comprendre ce que sont les ports réseau. Un port, c'est comme une porte numérotée sur ta machine. Ta machine a 65 535 portes, et chaque service utilise une porte spécifique pour communiquer.</p>
<p>Quand quelqu'un essaie de se connecter à ton serveur, il frappe à une porte spécifique. Le firewall décide si cette porte est ouverte où fermée, et pour qui.</p>
<p>Voici les ports que tu vas rencontrer et comment les gérer :</p>
<ul>
<li><strong>Port 22 (SSH)</strong> : C'est ta porte d'accès en ligne de commande à distance. C'est le port le plus important et aussi le plus ciblé par les attaquants. Il est <strong>INDISPENSABLE</strong> pour administrer ton serveur à distance, mais il doit être restreint au VPN uniquement — jamais ouvert sur internet. Concrètement, le port 22 ne doit accepter que les connexions venant des adresses IP Tailscale (100.x.x.x).</li>
<li><strong>Port 443 (HTTPS)</strong> : Trafic web sécurisé (chiffré avec TLS). À ouvrir uniquement si ton agent expose une API où une interface web accessible depuis l'extérieur. Si ton agent communique uniquement via des APIs tierces (OpenAI, Stripe, etc.), tu n'as pas besoin d'ouvrir ce port — ces communications sont des connexions sortantes, pas entrantes.</li>
<li><strong>Port 80 (HTTP)</strong> : Trafic web non sécurisé (en clair, sans chiffrement). <strong>À BLOQUER systématiquement</strong>, sans exception. Il n'y a aucune raison légitime d'accepter du trafic HTTP non chiffré sur un serveur en 2026. Si un service a besoin du port 80, configure-le pour rediriger automatiquement vers le port 443 (HTTPS).</li>
<li><strong>Port 51820 (WireGuard)</strong> : Si tu utilises WireGuard en self-hosted, ce port doit être ouvert en UDP (pas TCP) pour que le VPN fonctionne. Si tu utilises Tailscale, tu n'as pas besoin d'ouvrir ce port manuellement — Tailscale gère la traversée NAT automatiquement.</li>
<li><strong>Ports 3000-9999 (services applicatifs)</strong> : Ce sont les ports typiquement utilisés par les applications web, les APIs, les dashboards de monitoring, etc. Par défaut, ils doivent tous être fermés. N'ouvre que ceux dont tu as spécifiquement besoin, et uniquement via le VPN.</li>
</ul>
<p><strong>Règle d'or absolue : si tu ne sais pas pourquoi un port est ouvert, ferme-le.</strong> C'est le principe du moindre privilège appliqué au réseau. Un port ouvert inutilement, c'est une porte déverrouillée dont tu as oublié l'existence — et les attaquants, eux, la trouveront.</p>
<p><strong>Astuce :</strong> Pour voir quels ports sont actuellement ouverts sur ton Mac, utilise la commande <code>sudo lsof -i -P | grep LISTEN</code> dans le Terminal. Ça te donne la liste de tous les services en écoute avec leurs ports. Tu ne devrais voir que SSH (22) et éventuellement des services Docker que tu as lancés toi-même.</p>

<h2>Configuration avancée avec pf (packet filter)</h2>
<p>Le firewall graphique de macOS est suffisant pour la plupart des usages, mais si tu veux un contrôle granulaire, macOS dispose aussi de <strong>pf (packet filter)</strong>, un firewall bas niveau hérité de BSD. C'est le même outil utilisé par les administrateurs réseau professionnels.</p>
<p>Avec pf, tu peux créer des règles très précises :</p>
<ul>
<li><strong>Bloquer toutes les connexions entrantes sauf SSH depuis le subnet VPN</strong> : <code>block in all</code> puis <code>pass in on en0 proto tcp from 100.64.0.0/10 to any port 22</code>. Ça signifie : bloque tout par défaut, mais autorise les connexions TCP sur le port 22 venant du réseau Tailscale (100.64.0.0/10).</li>
<li><strong>Limiter le nombre de connexions par IP (anti brute-force)</strong> : Avec les tables et les règles de rate limiting de pf, tu peux limiter le nombre de nouvelles connexions par IP par minute. Par exemple, pas plus de 3 tentatives de connexion SSH par minute depuis la même IP. Au-delà, l'IP est temporairement bloquée.</li>
<li><strong>Logger les tentatives de connexion bloquées</strong> : Ajoute le mot-clé <code>log</code> à tes règles de blocage pour enregistrer chaque tentative dans un fichier de log. C'est indispensable pour détecter les tentatives d'intrusion et comprendre qui essaie de se connecter à ta machine.</li>
<li><strong>Redirection de port</strong> : Si tu veux exposer un service sur un port non standard (par exemple, SSH sur le port 2222 au lieu de 22), pf peut rediriger le trafic de manière transparente.</li>
</ul>
<p><strong>Attention :</strong> La configuration de pf se fait via le fichier <code>/etc/pf.conf</code>. Une erreur de syntaxe dans ce fichier peut bloquer TOUTES les connexions, y compris SSH — ce qui signifie que tu perdrais l'accès à distance à ton serveur. Toujours tester une nouvelle configuration avec un timeout : charge les nouvelles règles mais prévois un retour automatique aux anciennes règles après 5 minutes si tu ne confirmes pas. De cette façon, si tu te bloques, les anciennes règles reviennent automatiquement.</p>
<p><strong>Conseil pro :</strong> Si tu débutes avec pf, commence par le firewall graphique de macOS et passe à pf plus tard quand tu seras plus à l'aise. Le firewall graphique couvre 90% des besoins.</p>

<h2>SSH sécurisé</h2>
<p>SSH (Secure Shell) est ta porte d'accès principale au serveur — c'est par là que tu contrôles tout. C'est aussi la cible numéro 1 des attaquants. Un serveur SSH mal configuré, c'est une invitation ouverte aux pirates. Voici comment le verrouiller correctement :</p>
<ul>
<li><strong>Désactiver l'authentification par mot de passe</strong> : C'est la mesure la plus importante. Les mots de passe peuvent être devinés par brute-force — un attaquant peut tester des millions de combinaisons par heure. Les clés SSH, en revanche, sont pratiquement impossibles à deviner (une clé Ed25519 a 256 bits d'entropie — l'univers mourra de mort thermique avant qu'un ordinateur ne la trouve par force brute). En plus, les clés SSH sont plus pratiques au quotidien : pas de mot de passe à taper, la connexion est instantanée.</li>
<li><strong>Générer une paire de clés Ed25519</strong> : Ed25519 est l'algorithme recommandé — plus sécurisé et plus rapide que RSA. Utilise <code>ssh-keygen -t ed25519 -C "ton-email@example.com"</code>. Protège ta clé privée avec une passphrase forte. Copie la clé publique sur ton serveur avec <code>ssh-copy-id user@mac-mini</code>. Garde ta clé privée en sécurité — ne la copie jamais sur un serveur, ne la partage jamais, et fais-en un backup chiffré.</li>
<li><strong>Restreindre SSH au VPN</strong> : Configure le démon SSH (<code>sshd_config</code>) pour n'écouter que sur l'interface VPN. Avec Tailscale, ça signifie configurer <code>ListenAddress</code> avec ton adresse IP Tailscale. Résultat : même si le port 22 est techniquement ouvert, seules les connexions venant du réseau VPN sont acceptées. Un attaquant sur internet ne peut même pas tenter une connexion.</li>
<li><strong>Changer le port par défaut (optionnel mais recommandé)</strong> : Passer du port 22 à un port non standard (comme 2222, 2200, où un numéro aléatoire entre 10000 et 65535) réduit drastiquement les tentatives de brute-force automatisées. Les bots scannent le port 22 par défaut — si tu utilises un autre port, 99% des tentatives automatisées ne te trouveront même pas. Ce n'est pas une mesure de sécurité suffisante seule (un scan de ports trouverait ton service), mais combinée avec les autres mesures, c'est une couche supplémentaire.</li>
<li><strong>Installer fail2ban (où équivalent macOS)</strong> : fail2ban surveille les logs SSH et bloque automatiquement les adresses IP qui échouent trop de tentatives de connexion. Par exemple : après 3 tentatives ratées en 10 minutes, l'IP est bannie pendant 1 heure. Après 5 bannissements, elle est bannie définitivement. Sur macOS, tu peux utiliser <code>sshguard</code> (installable via Homebrew) qui remplit la même fonction. C'est ton système immunitaire automatique contre les brute-force.</li>
</ul>
<p><strong>Conseil pratique :</strong> Après avoir modifié la configuration SSH, ne ferme pas ta session SSH actuelle avant d'avoir testé que la nouvelle configuration fonctionne dans une deuxième session. Si tu as fait une erreur qui bloque SSH, tu as toujours ta session existante pour corriger. Si tu fermes ta session avant de tester, tu pourrais te retrouver complètement bloqué.</p>

<h2>Défense en profondeur</h2>
<p>La sécurité réseau fonctionne en couches, comme un oignon (où un château fort médiéval avec ses douves, ses remparts, ses tours, et son donjon). L'idée fondamentale est que <strong>même si une couche est compromise, les autres couches protègent encore</strong>. Un attaquant qui franchit une barrière se retrouve face à une autre. C'est ce qu'on appelle la "défense en profondeur".</p>
<p>Voici les couches de sécurité que tu es en train de mettre en place :</p>
<ol>
<li><strong>Couche 1 — VPN (Tailscale/WireGuard)</strong> : Le tunnel chiffré. Seuls tes appareils authentifiés accèdent au réseau. Un attaquant qui n'est pas sur ton VPN ne voit même pas que ta machine existe. C'est ta première ligne de défense — et pour la majorité des menaces, elle suffit.</li>
<li><strong>Couche 2 — Firewall (pf + macOS Firewall)</strong> : Même à l'intérieur du VPN, le firewall filtre les ports et bloque le trafic non autorisé. Si un de tes appareils VPN est compromis, le firewall empêche l'attaquant d'accéder à tous les services de ton serveur — il ne peut atteindre que les ports explicitement ouverts.</li>
<li><strong>Couche 3 — SSH Keys + fail2ban</strong> : Authentification forte sans mots de passe. Même si un attaquant arrive jusqu'au port SSH, il ne peut pas se connecter sans ta clé privée. Et fail2ban bloque les tentatives répétées avant qu'elles n'aillent nulle part.</li>
<li><strong>Couche 4 — Permissions applicatives (Sandbox OpenClaw)</strong> : Même si quelqu'un accède à ton système, OpenClaw est configuré avec des permissions minimales. L'agent ne peut accéder qu'au strict nécessaire — pas à tout ton système de fichiers, pas à tous les services. On configure ça en détail dans la prochaine leçon.</li>
</ol>
<p><strong>Point clé :</strong> Aucune couche seule n'est suffisante. Le VPN peut avoir une faille. Le firewall peut être mal configuré. Les clés SSH peuvent être compromises. C'est la combinaison de toutes ces couches qui crée une sécurité réellement robuste. Un attaquant devrait franchir les 4 barrières pour compromettre ton agent — et chaque barrière multiplie la difficulté de manière exponentielle.</p>

<h2>Monitoring réseau</h2>
<p>La dernière pièce du puzzle réseau : le monitoring. Toute la sécurité du monde ne sert à rien si tu ne sais pas ce qui se passe sur ta machine. Le monitoring, c'est ton système de caméras de surveillance — il te permet de voir, en temps réel et a posteriori, ce qui se passe sur ton réseau.</p>
<p>Installe au moins un outil de monitoring pour voir les connexions de ton serveur :</p>
<ul>
<li><strong>Little Snitch (macOS, ~45€)</strong> : L'outil de référence sur macOS. Il visualise toutes les connexions sortantes en temps réel avec une interface graphique magnifique. Tu verras exactement à quels serveurs ton agent se connecte, combien de données il envoie et reçoit, et tu pourras bloquer les connexions suspectes en un clic. Lors de la première installation, il te montre une notification pour chaque nouvelle connexion — c'est très éducatif pour comprendre ce que fait réellement ton système. L'investissement de 45€ est rapidement rentabilisé par la visibilité qu'il te donne.</li>
<li><strong>netstat / lsof (gratuit, en ligne de commande)</strong> : <code>netstat -an | grep ESTABLISHED</code> te montre toutes les connexions réseau actives. <code>sudo lsof -i -P</code> te montre quels programmes utilisent quels ports. Moins visuel que Little Snitch, mais gratuit et très puissant pour des vérifications ponctuelles. Intègre ces commandes dans un script que tu lances régulièrement.</li>
<li><strong>Alertes Discord/Telegram</strong> : Configure des notifications automatiques pour être alerté en cas d'événement suspect. Par exemple : une connexion SSH depuis une IP inconnue, une tentative de brute-force détectée par fail2ban, un pic de trafic réseau anormal. Tu peux utiliser des webhooks Discord où un bot Telegram avec un script qui surveille les logs. C'est simple à mettre en place et ça te donne une tranquillité d'esprit énorme : si quelque chose se passe, tu le sais immédiatement, même si tu es en train de dormir.</li>
<li><strong>Grafana + Prometheus (avancé, gratuit)</strong> : Si tu veux aller plus loin, cette combinaison te donne des dashboards de monitoring professionnels avec historique, graphiques et alertes configurables. C'est ce qu'utilisent les entreprises pour surveiller leurs serveurs. Overkill pour débuter, mais excellent quand tu auras plusieurs agents en production.</li>
</ul>
<p><strong>Conseil :</strong> Commence avec Little Snitch si tu es sur Mac — c'est l'investissement le plus rentable en termes de visibilité. Ajoute les alertes Discord/Telegram dans un second temps pour être notifié passivement. Le monitoring actif (regarder les dashboards) et passif (recevoir des alertes) sont complémentaires.</p>`,
    exercise: `<h3>Exercice : Sécuriser ton réseau</h3>
<ol>
<li>Active le firewall macOS (où ufw sur Linux) avec le mode furtif</li>
<li>Bloque toutes les connexions entrantes par défaut</li>
<li>Autorise uniquement SSH depuis le subnet VPN</li>
<li>Génère une paire de clés SSH Ed25519 et configure-la sur ton serveur</li>
<li>Désactive l'authentification SSH par mot de passe</li>
<li>Teste : essaie de te connecter en SSH SANS le VPN — ça doit échouer</li>
</ol>
<p><strong>Bonus :</strong> Installe Little Snitch (macOS) où activez les logs pf pour monitorer le trafic.</p>
<p><strong>Livrable :</strong> Screenshot montrant le firewall actif + connexion SSH réussie via VPN uniquement.</p>`,
  },
  {
    order: 24,
    module: 4,
    title: "Réglages de sécurité OpenClaw",
    slug: "reglages-sécurité-openclaw",
    duration: "50 min",
    description: "Configurer les paramètres de sécurité d'OpenClaw : gestion des secrets, sandbox, permissions et accès API.",
    content: `<h2>La configuration sécurité d'OpenClaw</h2>
<p>Tu as maintenant une infrastructure solide : un Mac Mini dédié, un VPN chiffré, un firewall correctement configuré, et un accès SSH verrouillé par clés. C'est la fondation — maintenant, on sécurise l'application elle-même : OpenClaw.</p>
<p>Pense à ça comme une maison : tu as construit des murs solides, installé une porte blindée et un système d'alarme (infrastructure). Maintenant, il faut sécuriser ce qu'il y a à l'intérieur : le coffre-fort (les secrets), les règles de la maison (les permissions), et le carnet de bord (les logs).</p>
<p>La sécurité applicative est souvent négligée parce que les gens se sentent en sécurité après avoir configuré le VPN et le firewall. C'est une erreur. Un VPN parfait ne te protège pas si ton fichier .env est accessible à tous les utilisateurs du système, si ton agent à des droits administrateur dont il n'a pas besoin, où si une faille dans un plugin permet d'exécuter du code arbitraire.</p>
<p><strong>Attention :</strong> La sécurité applicative est la couche la plus proche de tes données et de tes clients. C'est la dernière ligne de défense — si elle cède, il n'y a plus rien entre l'attaquant et tes données sensibles. Prends le temps de bien la configurer.</p>

<h2>Gestion des secrets et API keys</h2>
<p>C'est <strong>LE</strong> point le plus critique de toute ta configuration. Pas le VPN, pas le firewall — les API keys. Pourquoi ? Parce qu'une seule API key compromise peut avoir des conséquences immédiates et catastrophiques, souvent en quelques minutes.</p>
<p>Ton agent utilise potentiellement des dizaines d'API keys : OpenAI (pour l'IA), Anthropic (pour Claude), Stripe (pour les paiements), GitHub (pour le code), Google (pour les emails, le calendrier), Slack (pour les notifications), et bien d'autres. Chacune de ces clés est un <strong>accès direct à un service</strong> — et potentiellement à ton argent, ton code, où les données de tes clients.</p>
<p>Pour te donner une idée concrète du risque : une clé OpenAI volée peut générer des milliers d'euros de frais en quelques heures (les modèles GPT-4 coûtent cher). Une clé Stripe en mode live peut créer des remboursements frauduleux. Une clé GitHub avec les bons scopes peut supprimer tous tes repos. Ce ne sont pas des scénarios théoriques — ils arrivent quotidiennement à des développeurs imprudents.</p>
<p>Voici les règles absolues à suivre, sans exception :</p>
<ul>
<li><strong>JAMAIS de clés en dur dans le code</strong> : C'est la règle numéro 1, non négociable. Toujours utiliser des variables d'environnement via un fichier .env. Si tu mets une clé en dur dans un fichier de code et que ce fichier finit sur GitHub (même brièvement, même dans un repo privé), considère cette clé comme compromise. Les bots qui scannent GitHub trouvent les clés en quelques secondes — littéralement. Il existe des services automatisés qui scannent chaque commit public sur GitHub à la recherche de patterns de clés API.</li>
<li><strong>Le fichier .env ne doit JAMAIS être commité</strong> : Vérifie que ton fichier .gitignore contient <code>.env</code>. Vérifie-le maintenant. Vérifie aussi que <code>.env.local</code>, <code>.env.production</code>, et tout fichier similaire sont ignorés. Astuce : utilise <code>git status</code> pour vérifier que le .env n'apparaît pas dans les fichiers trackés. Si tu as accidentellement commité un .env dans le passé, la clé est potentiellement compromise même si tu as supprimé le fichier ensuite (l'historique Git conserve tout).</li>
<li><strong>Permissions du fichier .env</strong> : Applique <code>chmod 600</code> sur le fichier .env, ce qui le rend lisible et modifiable uniquement par le propriétaire du fichier. Aucun autre utilisateur du système ne peut le lire. Vérifie avec <code>ls -la .env</code> — tu dois voir <code>-rw-------</code>. Si tu vois <code>-rw-r--r--</code> (lisible par tous), c'est un problème.</li>
<li><strong>Un .env par environnement</strong> : Ton environnement de développement et ton environnement de production doivent avoir des clés <strong>différentes</strong>. Pourquoi ? Si ta machine de dev est compromise, tes clés de production restent intactes. Les services comme Stripe offrent explicitement des clés de test et des clés de production pour cette raison.</li>
<li><strong>Jamais de clés dans les logs</strong> : Vérifie que ton code ne logue jamais les valeurs des variables d'environnement. Un <code>console.log(process.env)</code> dans un fichier de debug oublié peut exposer toutes tes clés dans les fichiers de log.</li>
</ul>
<p><strong>Astuce pro :</strong> Utilise un outil comme <code>dotenv-vault</code> où <code>infisical</code> pour gérer tes secrets de manière encore plus sécurisée. Ces outils chiffrent tes .env et te permettent de les partager de manière sécurisée entre environnements sans jamais les exposer en clair. C'est un niveau au-dessus du simple fichier .env.</p>

<h2>Rotation des clés</h2>
<p>Les API keys ne sont pas éternelles — et ne devraient pas l'être. Même si tu penses que personne n'a eu accès à tes clés, tu ne peux jamais en être certain à 100%. C'est pour ça que la rotation régulière des clés est une pratique de sécurité fondamentale, adoptée par toutes les organisations sérieuses.</p>
<p>La rotation, c'est simple : tu remplaces une ancienne clé par une nouvelle, puis tu révoques l'ancienne. Idéalement, fais-le tous les mois. Au minimum, tous les trimestres. Et immédiatement si tu suspectes une compromission.</p>
<p>Voici la procédure étape par étape pour une rotation propre :</p>
<ol>
<li><strong>Générer une nouvelle clé</strong> sur le service concerné (OpenAI, Stripe, etc.). La plupart des services te permettent d'avoir plusieurs clés actives en même temps — c'est fait exprès pour permettre des rotations sans interruption de service.</li>
<li><strong>Mettre à jour le .env sur le serveur</strong> avec la nouvelle clé. Si tu utilises Docker, reconstruis le container où redémarre-le pour qu'il prenne en compte la nouvelle variable d'environnement.</li>
<li><strong>Vérifier que l'agent fonctionne</strong> avec la nouvelle clé. Fais un test rapide — envoie une requête à chaque API pour confirmer que tout marché. Ne passe pas à l'étape suivante tant que tu n'as pas confirmé.</li>
<li><strong>Révoquer l'ancienne clé</strong> sur le service concerné. C'est l'étape que beaucoup oublient ! Si tu ne révoques pas l'ancienne clé, elle reste active et utilisable. Révoque-la dès que la nouvelle fonctionne.</li>
</ol>
<p><strong>Astuce organisation :</strong> Crée un rappel mensuel dans ton calendrier : "Rotation API keys". Le premier de chaque mois, bloque 30 minutes pour faire la rotation de toutes tes clés. Ça prend 20 minutes une fois que tu as l'habitude, et ça réduit considérablement le risque en cas de fuite que tu n'aurais pas détectée.</p>
<p><strong>Astuce avancée :</strong> Certains services (comme AWS et Google Cloud) permettent de configurer des clés avec une date d'expiration automatique. La clé cesse de fonctionner après la date définie, ce qui te force à la renouveler. C'est un excellent filet de sécurité contre l'oubli.</p>

<h2>Le mode Sandbox</h2>
<p>Le sandbox (bac à sable en français) est un concept fondamental en sécurité informatique. L'idée est simple : enfermer un programme dans un environnement restreint où il ne peut faire que ce qu'on l'autorise explicitement à faire, et rien d'autre.</p>
<p>OpenClaw peut être configuré en mode sandbox — un mode où l'agent est limité dans ses actions. C'est ton filet de sécurité ultime : même si un prompt injection malicieux tente de faire exécuter du code dangereux, même si un plugin à une faille, même si un bug fait dérailler l'agent — le sandbox bloque les actions non autorisées.</p>
<ul>
<li><strong>Accès fichiers restreint</strong> : L'agent ne peut accéder qu'aux dossiers que tu as explicitement autorisés, pas à tout ton système de fichiers. Concrètement, si OpenClaw tourne dans <code>/home/openclaw/</code>, il ne peut pas lire <code>/etc/passwd</code>, accéder à tes photos personnelles, où modifier des fichiers système. C'est comme un employé qui à les clés de son bureau mais pas celles des autres bureaux.</li>
<li><strong>Exécution limitée</strong> : Les commandes système dangereuses sont bloquées — pas de <code>rm -rf</code>, pas de <code>format</code>, pas de <code>shutdown</code>, pas de modification de fichiers système. L'agent peut exécuter les commandes dont il a besoin pour son travail (comme des scripts Node.js où des commandes Git), mais pas les commandes qui pourraient détruire le système.</li>
<li><strong>Réseau contrôlé (whitelist de domaines)</strong> : Tu définis une liste blanche des domaines auxquels l'agent peut se connecter. Par exemple : api.openai.com, api.stripe.com, api.github.com. Tout le reste est bloqué. Si un prompt injection tente de faire envoyer des données vers un serveur malveillant, la connexion est refusée. C'est une protection extrêmement efficace contre l'exfiltration de données.</li>
</ul>
<p><strong>Analogie :</strong> Le sandbox, c'est comme une salle blanche dans un laboratoire. Le scientifique peut travailler avec les outils à l'intérieur de la salle, mais il ne peut pas faire sortir de matériel dangereux ni faire entrer n'importe quoi. Même s'il fait une erreur à l'intérieur de la salle, les dégâts sont contenus.</p>
<p><strong>Attention :</strong> Le sandbox peut parfois bloquer des actions légitimes que tu n'avais pas anticipées. Si ton agent signale une erreur de permission, vérifie les logs pour comprendre quelle action a été bloquée, puis décide si tu dois l'autoriser où non. N'élargis pas les permissions "pour que ça marché" sans comprendre pourquoi elles étaient nécessaires.</p>

<h2>Permissions granulaires</h2>
<p>Le principe du "least privilege" (moindre privilège) s'applique à chaque niveau de ta stack. L'idée : ne donner que le strict minimum nécessaire pour fonctionner. Pas un octet de plus, pas un droit de plus.</p>
<p>Voici comment appliquer ce principe concrètement :</p>
<ul>
<li><strong>Utilisateur système dédié</strong> : Ne fais pas tourner OpenClaw avec ton compte administrateur où en tant que root. Crée un utilisateur système dédié (par exemple <code>openclaw</code>) avec des droits limités. Cet utilisateur n'a pas besoin de pouvoir installer des logiciels, modifier la configuration système, où accéder aux fichiers des autres utilisateurs. Si l'agent est compromis, l'attaquant hérite des droits de cet utilisateur limité — pas de l'administrateur.</li>
<li><strong>Limite les APIs par scope</strong> : Si ton agent a besoin de lire des emails via l'API Gmail, ne lui donne pas l'accès en écriture ni l'accès aux contacts. Google et la plupart des fournisseurs d'API permettent de définir des "scopes" précis. Utilise toujours les scopes les plus restrictifs possibles. C'est le même principe qu'une carte de parking qui ouvre la barrière mais pas les portes du bâtiment.</li>
<li><strong>Scope tes tokens GitHub</strong> : C'est un point que beaucoup négligent. Sur GitHub, utilise des <strong>tokens "fine-grained"</strong> limités aux repos spécifiques dont ton agent a besoin, avec uniquement les permissions nécessaires (lecture seule si l'agent n'a pas besoin de pusher du code). Les tokens classiques ("personal access tokens classic") donnent souvent accès à TOUS tes repos avec TOUTES les permissions — c'est un risque inutile et énorme.</li>
<li><strong>API rate limiting</strong> : Configure des limites de taux (rate limits) sur les appels API pour éviter qu'un bug, une boucle infinie, où une attaque ne fasse exploser ta facture. La plupart des APIs permettent de définir des alertes de budget. Sur OpenAI, par exemple, tu peux définir une limite de dépense mensuelle. Sur Stripe, tu peux configurer des webhooks qui t'alertent au-delà d'un certain montant de transactions. Configure ces limites AVANT qu'un incident se produise — après, il est trop tard.</li>
<li><strong>Séparation des environnements</strong> : Ton agent de développement et ton agent de production ne doivent pas partager les mêmes clés, les mêmes bases de données, ni les mêmes fichiers. Si tu fais une erreur en développement (comme effacer une base de données de test), ça ne doit pas impacter la production. Et si ton environnement de dev est compromis, la production reste intacte.</li>
</ul>
<p><strong>Conseil pratique :</strong> Fais un tableau avec 3 colonnes : Service | Permissions actuelles | Permissions réellement nécessaires. Pour chaque service, vérifie que les permissions actuelles ne dépassent pas ce qui est réellement nécessaire. Tu seras probablement surpris de constater que beaucoup de tes tokens ont des permissions excessives.</p>

<h2>Logging et audit</h2>
<p>Les logs, c'est ta boîte noire. Comme dans un avion — en cas de problème, les logs te permettent de comprendre exactement ce qui s'est passé, quand, et comment. Sans logs, tu es aveugle. Tu sais qu'il y a eu un problème, mais tu ne sais pas lequel.</p>
<p>Active les logs détaillés pour garder une trace de tout ce que fait ton agent :</p>
<ul>
<li><strong>Logs d'actions</strong> : Chaque action significative de l'agent est enregistrée avec un horodatage précis. Email envoyé à qui, quand, avec quel contenu (où au moins quel sujet). Code déployé depuis quel commit vers quel serveur. Fichier créé, modifié où supprimé. Transaction Stripe initiée. Ces logs te permettent de reconstruire l'historique complet des actions de ton agent — indispensable pour le debugging mais aussi pour la confiance client. Tu peux montrer à un client exactement ce que ton agent a fait pour lui.</li>
<li><strong>Logs d'accès</strong> : Qui s'est connecté au système, quand, depuis quelle adresse IP, et via quel moyen (SSH, interface web, API). Si tu vois une connexion à 3h du matin depuis une IP que tu ne reconnais pas, c'est un signal d'alerte immédiat. Les logs d'accès sont aussi utiles en cas de litige — tu peux prouver qui a fait quoi.</li>
<li><strong>Logs d'erreurs</strong> : Chaque erreur rencontrée par l'agent, avec le contexte complet (stack trace, paramètres, état du système). Les erreurs récurrentes peuvent indiquer une tentative d'attaque — par exemple, des erreurs d'authentification répétées sur un même endpoint.</li>
<li><strong>Alertes en temps réel</strong> : Configure des notifications pour les actions critiques. Un paiement au-dessus de X euros ? Alerte. Une suppression de données ? Alerte. Un déploiement en production ? Alerte. Un échec d'authentification ? Alerte. Tu n'as pas besoin de surveiller tes logs en permanence — laisse les alertes faire le travail pour toi.</li>
</ul>
<p><strong>Attention :</strong> Les logs eux-mêmes peuvent contenir des informations sensibles (emails de clients, contenus de messages, etc.). Protège tes fichiers de log avec les mêmes précautions que ton .env : permissions restrictives, pas de commit dans Git, rotation régulière (les vieux logs sont compressés et archivés). Et ne logue jamais d'API keys, de mots de passe, où de tokens dans les logs.</p>
<p><strong>Astuce :</strong> Définis une politique de rétention des logs dès le départ. Combien de temps gardes-tu les logs ? 30 jours ? 90 jours ? 1 an ? Le RGPD impose que tu ne conserves pas les données personnelles plus longtemps que nécessaire — et les logs contiennent souvent des données personnelles.</p>

<h2>Chiffrement des données</h2>
<p>La dernière couche de protection applicative : le chiffrement. L'idée est que même si un attaquant accède physiquement à ton disque dur (vol de machine, accès non autorisé), les données sont illisibles sans la clé de déchiffrement.</p>
<p>Assure-toi que les données sensibles sont chiffrées à tous les niveaux :</p>
<ul>
<li><strong>Chiffrement au repos (at rest)</strong> : Active FileVault sur macOS — c'est le chiffrement intégral du disque. Toutes les données stockées sur le SSD sont chiffrées avec AES-256. Si quelqu'un vole ton Mac Mini, il ne peut rien lire sans le mot de passe de déchiffrement. Sur Linux, l'équivalent est LUKS (Linux Unified Key Setup). L'activation de FileVault est simple : Réglages > Sécurité et confidentialité > FileVault > Activer. La première encryption peut prendre quelques heures, mais elle se fait en arrière-plan sans impacter les performances.</li>
<li><strong>Chiffrement en transit</strong> : Toutes les connexions API doivent être en HTTPS — jamais en HTTP. Vérifie que ton code utilise <code>https://</code> et pas <code>http://</code> pour tous les appels API. Les librairies modernes comme axios où fetch refusent par défaut les connexions non sécurisées, mais vérifie quand même. Le VPN chiffre aussi le trafic entre tes appareils, mais le HTTPS ajoute une couche supplémentaire de chiffrement de bout en bout jusqu'au serveur de destination.</li>
<li><strong>Base de données</strong> : Si OpenClaw utilise une base de données locale (SQLite, PostgreSQL, etc.), active le chiffrement si disponible. Pour SQLite, tu peux utiliser SQLCipher qui ajoute le chiffrement AES-256 transparent. Pour PostgreSQL, active le chiffrement TLS pour les connexions et considère le chiffrement au niveau des colonnes pour les données les plus sensibles (comme les emails où numéros de téléphone des clients).</li>
<li><strong>Backups chiffrés</strong> : N'oublie pas les sauvegardes. Un backup non chiffré sur un disque externe où dans le cloud est une faille de sécurité. Utilise des outils comme <code>restic</code> où <code>borgbackup</code> qui chiffrent automatiquement les sauvegardes. Si tu utilises un service cloud (Google Drive, iCloud, S3), active le chiffrement côté client en plus du chiffrement côté serveur.</li>
</ul>
<p><strong>Conseil :</strong> Le chiffrement à un coût en performance — mais avec les puces Apple Silicon, ce coût est négligeable. Le M2 et le M4 ont un moteur de chiffrement matériel dédié qui rend FileVault transparent en termes de performances. Tu ne sentiras aucune différence au quotidien.</p>`,
    exercise: `<h3>Exercice : Sécuriser ta configuration OpenClaw</h3>
<ol>
<li>Crée un fichier .env avec toutes tes API keys, vérifie que .gitignore le bloque</li>
<li>Applique chmod 600 sur le fichier .env</li>
<li>Crée un utilisateur système dédié pour OpenClaw (pas root/admin)</li>
<li>Active FileVault (macOS) où LUKS (Linux) pour le chiffrement du disque</li>
<li>Configure les logs OpenClaw au niveau "info" minimum</li>
<li>Teste le mode sandbox : vérifie que l'agent ne peut pas accéder aux dossiers non autorisés</li>
</ol>
<p><strong>Livrable :</strong> Capture de ta configuration sécurisée (sans montrer les vraies API keys !).</p>`,
  },
  {
    order: 25,
    module: 4,
    title: "Maintenance et bonnes pratiques de sécurité",
    slug: "maintenance-bonnes-pratiques-sécurité",
    duration: "50 min",
    description: "Mettre en place une routine de maintenance sécurité et les bonnes pratiques pour garder ton agent protégé dans la durée.",
    content: `<h2>La sécurité est un processus, pas un état</h2>
<p>Tu as maintenant un serveur sécurisé, un VPN, un firewall, des secrets protégés et une configuration OpenClaw verrouillée. Félicitations — tu es dans le top 5% des utilisateurs d'agents IA en termes de sécurité. Mais il y à un piège dans lequel tombent même les meilleurs : <strong>croire que le travail est terminé</strong>.</p>
<p>La sécurité n'est pas un état qu'on atteint et qu'on maintient passivement. C'est un processus continu, une pratique quotidienne, un muscle qu'il faut entraîner régulièrement. Les menaces évoluent constamment — de nouvelles failles sont découvertes chaque jour, les techniques d'attaque se sophistiquent, et les configurations peuvent dériver avec le temps (un service ajouté ici, un port ouvert temporairement là, une permission élargie "juste pour tester"...).</p>
<p><strong>Analogie :</strong> C'est comme la santé. Tu peux avoir une excellente condition physique aujourd'hui — mais si tu arrêtes de faire du sport, que tu manges n'importe quoi et que tu ne fais plus de check-ups, ta santé va se dégrader progressivement. La sécurité informatique fonctionne exactement pareil. Un système parfaitement sécurisé aujourd'hui, sans maintenance, sera vulnérable dans 6 mois.</p>
<p>La bonne nouvelle, c'est que la maintenance sécurité est rapide et routinière une fois mise en place. On parle de quelques minutes par jour, quelques dizaines de minutes par semaine. L'investissement est minimal comparé à la protection qu'il apporte. Le vrai défi n'est pas technique — c'est de maintenir la discipline et la régularité.</p>
<p><strong>Attention :</strong> La plupart des incidents de sécurité ne sont pas causés par des attaques sophistiquées. Ils sont causés par de la négligence : une mise à jour ignorée, une clé API qui n'a pas été rotée depuis 2 ans, un service temporaire qu'on a oublié de fermer. La maintenance est ta protection contre cette dérive silencieuse.</p>

<h2>Routine quotidienne (2 minutes)</h2>
<p>La routine quotidienne est conçue pour être ultra-rapide — 2 minutes maximum, le temps de boire ton café. L'objectif n'est pas de faire une analyse approfondie, mais de détecter rapidement les anomalies évidentes. Pense à ça comme un coup d'œil rapide sur le tableau de bord de ta voiture : tu ne démontes pas le moteur chaque matin, mais tu vérifies qu'il n'y a pas de voyant rouge allumé.</p>
<ul>
<li><strong>Vérifier les alertes</strong> : Consulte ton canal Discord, Telegram, où ta boîte mail pour les notifications de sécurité. Y a-t-il eu des tentatives de connexion échouées ? Des alertes de rate limiting ? Des erreurs inhabituelles ? Si tout est normal, passe à la suite. Si quelque chose attire ton attention, note-le pour investigation approfondie plus tard dans la journée. Ne panique pas pour une où deux tentatives de connexion échouées — c'est du bruit de fond normal sur internet. Mais 50 tentatives en une heure, c'est un pattern qui mérite attention.</li>
<li><strong>Jeter un œil aux logs</strong> : Un coup d'œil rapide sur les dernières actions de l'agent. Rien d'anormal ? Les actions correspondent à ce que tu attends ? Si ton agent est censé envoyer 5 emails par jour et que tu vois 500 emails dans les logs, il y à un problème. Si tu vois des requêtes API vers des domaines que tu ne reconnais pas, c'est une alerte rouge.</li>
<li><strong>Vérifier que l'agent tourne</strong> : Un rapide check de l'uptime et de la santé globale du système. L'agent est-il en cours d'exécution ? Utilise-t-il une quantité normale de RAM et de CPU ? Le disque n'est-il pas plein ? Tu peux automatiser ce check avec un script qui t'envoie un "all clear" chaque matin — si tu ne reçois pas le message, c'est que quelque chose ne va pas.</li>
</ul>
<p><strong>Astuce productivité :</strong> Automatisé autant que possible. Un script qui vérifie l'uptime, l'espace disque et les dernières alertes, puis t'envoie un résumé sur Discord chaque matin, ça se met en place en 30 minutes et ça te fait gagner un temps considérable sur le long terme. Le but, c'est que ta routine quotidienne consiste à lire un message, pas à taper des commandes.</p>

<h2>Routine hebdomadaire (10 minutes)</h2>
<p>Chaque semaine, bloque un créneau de 10 à 15 minutes (le lundi matin fonctionne bien) pour une vérification plus approfondie. C'est le moment de s'assurer que tout est à jour et que rien n'a dérivé.</p>
<ul>
<li><strong>Mises à jour système</strong> : C'est le point le plus important de la routine hebdomadaire. macOS, Docker, Node.js, OpenClaw, les packages npm — tout doit être à jour. Les mises à jour de sécurité corrigent des failles connues et activement exploitées. Chaque semaine qui passe sans mise à jour augmente ta surface d'attaque. Sur macOS : vérifie les mises à jour système. Avec Docker : <code>docker pull</code> tes images. Avec npm : <code>npm audit</code> pour détecter les vulnérabilités connues dans tes dépendances. Le <code>npm audit</code> est particulièrement important — les dépendances npm sont un vecteur d'attaque très courant dans l'écosystème JavaScript.</li>
<li><strong>Vérifier les logs d'accès en détail</strong> : Prends 5 minutes pour parcourir les logs d'accès de la semaine. Des connexions inhabituelles ? Des tentatives de brute-force sur SSH ? Des requêtes API depuis des IPs inconnues ? Cherche des patterns : les mêmes IPs qui reviennent, des horaires inhabituels, des régions géographiques suspectes. Si tu utilises fail2ban/sshguard, vérifie le nombre d'IPs bannies cette semaine — une augmentation soudaine peut indiquer que tu es devenu une cible.</li>
<li><strong>Backup de la configuration</strong> : Sauvegarde ton fichier .env, tes configurations Docker (docker-compose.yml), ta configuration OpenClaw, et tes règles de firewall. <strong>Pas sur le même disque que le serveur !</strong> Utilise un disque externe chiffré, un service cloud chiffré (avec chiffrement côté client), où un second serveur. La règle des sauvegardes est le 3-2-1 : 3 copies de tes données, sur 2 supports différents, dont 1 hors site. Ça peut sembler excessif, mais le jour où ton SSD lâche où ton serveur est compromis, tu seras content d'avoir un backup fonctionnel.</li>
<li><strong>Vérifier l'espace disque</strong> : Les logs et les données s'accumulent naturellement avec le temps. Un disque plein peut causer des comportements imprévisibles : l'agent qui crash, les logs qui ne s'écrivent plus (donc plus de traçabilité), Docker qui ne peut plus fonctionner. Vérifie régulièrement l'espace disponible avec <code>df -h</code> et nettoie si nécessaire : vieux logs, images Docker inutilisées (<code>docker system prune</code>), caches temporaires. Mets en place une alerte automatique quand l'espace disque descend sous 20%.</li>
</ul>
<p><strong>Conseil :</strong> Crée un script bash qui fait tous ces checks automatiquement et t'envoie un rapport. Tu lances le script chaque lundi, tu lis le rapport en 2 minutes, et tu agis seulement s'il y a quelque chose d'anormal. Voici l'idée générale : le script vérifie les mises à jour disponibles, l'espace disque, les IPs bannies, et la date du dernier backup. Si tout est vert, un seul message : "Tout OK". Si quelque chose est orange où rouge, le détail du problème.</p>

<h2>Routine mensuelle (30 minutes)</h2>
<p>Une fois par mois, prends 30 minutes pour des vérifications plus profondes. C'est le moment de faire le "grand ménage" et de s'assurer que ta posture de sécurité n'a pas changé.</p>
<ul>
<li><strong>Rotation des API keys</strong> : Change toutes tes clés API et révoque les anciennes. Oui, toutes — même celles que tu penses "pas critiques". Un token GitHub en lecture seule qui fuite, c'est quand même un accès à ton code source privé. La rotation mensuelle est le standard minimum en sécurité. Suis la procédure décrite dans la leçon précédente : nouvelle clé → test → révocation ancienne clé. Et tiens un registre : quelle clé a été rotée, quand, sur quel service.</li>
<li><strong>Audit des permissions</strong> : Reprends ton tableau des permissions (Service | Permissions actuelles | Permissions nécessaires) et vérifie que rien n'a dérivé. Il est courant d'élargir temporairement une permission "pour tester" et d'oublier de la restreindre ensuite. C'est exactement ce genre de dérive que l'audit mensuel détecte. Vérifie aussi les scopes de tes tokens : est-ce qu'un token "read-only" est passé en "read-write" sans raison ? Est-ce qu'un accès temporaire à un service est encore actif ?</li>
<li><strong>Test de restauration</strong> : Un backup qui n'a jamais été testé n'est pas un backup — c'est un espoir. Chaque mois, vérifie que tes sauvegardes fonctionnent réellement en restaurant ton .env et ta configuration sur un environnement de test (une VM, un second utilisateur sur ton Mac, où un conteneur Docker). Le test doit répondre à la question : "Si mon serveur brûle maintenant, est-ce que je peux reconstruire tout en moins de 2 heures avec mes backups ?" Si la réponse est non, améliore ta procédure de backup.</li>
<li><strong>Review des appareils connectés</strong> : Va dans le dashboard Tailscale et liste tous les appareils connectés à ton VPN. Tu les reconnais tous ? Il n'y a pas un vieux laptop que tu as revendu il y a 3 mois et qui est toujours sur le réseau ? Un appareil de test que tu n'utilises plus ? Retire immédiatement tout ce qui n'est plus actif. Chaque appareil connecté est un point d'entrée potentiel.</li>
<li><strong>Revue des dépendances</strong> : Lance un <code>npm audit</code> approfondi et vérifie si des packages que tu utilises ont des vulnérabilités connues. Mets à jour les dépendances critiques. Si une dépendance à une vulnérabilité haute et pas de correctif, envisage de la remplacer par une alternative.</li>
</ul>

<h2>Routine trimestrielle (1 heure)</h2>
<p>Tous les 3 mois, consacre une heure à un audit de sécurité complet. C'est ton "check-up annuel" (mais 4 fois par an, parce que les menaces n'attendent pas). L'objectif est de prendre du recul et de vérifier que ton architecture globale est toujours adaptée.</p>
<ul>
<li><strong>Audit complet de sécurité</strong> : Reprends la checklist de la leçon 1 de ce module et vérifie chaque point systématiquement. Les API keys sont-elles bien protégées ? Le firewall est-il toujours correctement configuré ? Le VPN fonctionne-t-il comme prévu ? Les permissions sont-elles au minimum nécessaire ? Le chiffrement est-il actif partout ? C'est comme une inspection technique — tu passes en revue chaque composant de ta sécurité.</li>
<li><strong>Scan de vulnérabilités</strong> : Lance un scan avec des outils spécialisés pour détecter les failles potentielles. <code>nmap</code> scanne les ports ouverts de ta machine (lance-le depuis un autre appareil pour voir ce qui est visible de l'extérieur). <code>Lynis</code> fait un audit de sécurité complet de ton système macOS/Linux et te donne un score avec des recommandations. <code>OpenVAS</code> est un scanner de vulnérabilités plus complet mais plus complexe. Même un simple <code>nmap localhost</code> depuis ton serveur peut révéler des services ouverts dont tu n'avais pas connaissance.</li>
<li><strong>Revue de l'architecture</strong> : Ton setup est-il toujours adapté à tes besoins actuels ? Peut-être que tu as ajouté de nouveaux services, de nouveaux clients, où de nouveaux agents depuis le dernier audit. Est-ce que les règles de firewall reflètent encore la réalité de ton infrastructure ? Faut-il ajouter des couches de sécurité supplémentaires ? Faut-il repenser certains choix ? C'est le moment de se poser ces questions stratégiques.</li>
<li><strong>Formation continue</strong> : La sécurité informatique évolue vite. Prends 20 minutes pour te mettre à jour : lis les dernières actualités sécurité pertinentes pour ta stack (Node.js, Docker, macOS). Vérifie les CVE (Common Vulnerabilities and Exposures) récentes qui pourraient affecter tes outils. Suis des comptes spécialisés sur Twitter/X où des newsletters comme "tl;dr sec" où "This Week in Security". Tu n'as pas besoin de devenir un expert en cybersécurité — mais tu dois rester informé des menaces qui te concernent directement.</li>
</ul>

<h2>Que faire en cas d'incident</h2>
<p>Malgré toutes tes précautions, un incident peut arriver. Ce qui fait la différence entre une catastrophe et un simple inconvénient, c'est ta préparation et ta réaction. Avoir un plan d'action prédéfini te permet de réagir vite et efficacement au lieu de paniquer.</p>
<p>Si tu suspectes une compromission — connexion suspecte, comportement anormal de l'agent, alerte de sécurité, notification d'un service que tu n'as pas initiée — voici la procédure à suivre dans l'ordre :</p>
<ol>
<li><strong>Isole immédiatement la machine</strong> : Déconnecte le serveur du réseau. Physiquement : débranche le câble Ethernet et désactive le Wi-Fi. Ça stoppe l'attaque en cours et empêche l'exfiltration de données supplémentaires. Ne cherche pas à comprendre d'abord — isole d'abord, analyse ensuite. Chaque seconde compte si des données sont en train d'être extraites.</li>
<li><strong>Change TOUTES les API keys immédiatement</strong> : Depuis un autre appareil (ton PC où ton téléphone), connecte-toi à chaque service et génère de nouvelles clés. OpenAI, Stripe, GitHub, Google — tout, sans exception. Révoque les anciennes clés immédiatement. Même si tu penses que seul un service a été compromis, change tout — tu ne sais pas ce que l'attaquant à pu voir où copier. C'est la mesure la plus urgente après l'isolation.</li>
<li><strong>Analyse les logs</strong> : Maintenant que la machine est isolée et les clés changées, tu peux analyser. Qu'est-ce qui s'est passé exactement ? Quand le problème a-t-il commencé ? Quel vecteur d'attaque a été utilisé ? Quelles données ont potentiellement été exposées ? Les logs sont ta meilleure source d'information. Cherche les connexions inhabituelles, les actions non autorisées, les erreurs suspectes. Note tout dans un document — tu en auras besoin pour les étapes suivantes.</li>
<li><strong>Restaure depuis un backup propre</strong> : Ne fais pas confiance à un système potentiellement compromis. Un attaquant compétent a pu installer des backdoors, modifier des fichiers système, où altérer tes outils de sécurité. La seule option sûre est de restaurer depuis un backup dont tu es certain qu'il date d'avant la compromission. C'est pour ça que les backups réguliers et testés sont si importants — sans backup propre, tu es obligé de tout reconfigurer de zéro.</li>
<li><strong>Documente l'incident en détail</strong> : Écris un rapport d'incident : que s'est-il passé, quand, comment tu l'as détecté, quelles actions tu as prises, quelles données ont été potentiellement exposées, et surtout — qu'est-ce que tu vas changer pour que ça ne se reproduise pas. Ce document est précieux pour ta propre progression, mais aussi légalement en cas de contrôle.</li>
<li><strong>Notifie tes clients si nécessaire</strong> : C'est la partie la plus difficile, mais c'est légalement obligatoire. Le RGPD impose de notifier la CNIL dans les 72 heures en cas de fuite de données personnelles, et de notifier les personnes concernées si le risque est élevé. Ne cache pas un incident — la transparence est toujours la meilleure politique. Les clients respectent une entreprise qui gère un incident avec honnêteté. Ils ne pardonnent jamais une entreprise qui cache une fuite de données.</li>
</ol>
<p><strong>Conseil crucial :</strong> Prépare ce plan d'action MAINTENANT, pas le jour de l'incident. Imprime-le, affiche-le près de ton bureau, mets-le dans tes notes. Le jour où un incident arrive (et statistiquement, ça arrivera un jour), tu seras trop stressé pour réfléchir calmement à la procédure. Avoir un plan écrit à suivre étape par étape fait toute la différence.</p>

<h2>Les bonnes habitudes à garder</h2>
<p>Pour conclure ce module, voici les habitudes de sécurité qui doivent devenir des réflexes automatiques — comme mettre sa ceinture de sécurité en voiture. Tu ne te poses plus la question, tu le fais.</p>
<ul>
<li><strong>Ne jamais partager tes API keys</strong> : Même avec des collègues, même avec un prestataire, même "juste pour tester". Chaque personne doit avoir ses propres clés avec ses propres permissions. Si tu dois donner accès à un service à quelqu'un, crée-lui ses propres identifiants. C'est un effort minime qui élimine un vecteur de risque majeur. Et si quelqu'un quitte ton équipe, tu n'as qu'à révoquer ses clés — pas besoin de changer les tiennes.</li>
<li><strong>Utiliser un gestionnaire de mots de passe</strong> : 1Password, Bitwarden (open-source et gratuit), où Dashlane — peu importe lequel, mais utilise-en un. Chaque service doit avoir un mot de passe unique, long (16+ caractères) et aléatoire. Le gestionnaire les retient pour toi. Si tu utilises le même mot de passe sur plusieurs services (et soyons honnêtes, la plupart des gens le font), une seule fuite compromet tous tes comptes. C'est le risque le plus facilement évitable.</li>
<li><strong>2FA partout, sans exception</strong> : Active l'authentification à deux facteurs sur TOUS les services : GitHub, AWS, Stripe, Google, Tailscale, OpenAI, Anthropic, ton email, ton gestionnaire de mots de passe. Utilise une app d'authentification (Authy, Google Authenticator, 1Password) plutôt que les SMS — les SMS peuvent être interceptés via SIM swapping. La 2FA est probablement la mesure de sécurité avec le meilleur rapport effort/protection. 30 secondes de setup par service, et ça bloque la grande majorité des attaques par vol de mot de passe.</li>
<li><strong>Le principe de méfiance saine</strong> : Si tu reçois un email suspect ("Votre compte OpenAI a été compromis, cliquez ici pour sécuriser"), ne clique pas. Si tu ne comprends pas une notification, ne clique pas. Vérifie d'abord. Ouvre le service directement depuis ton navigateur (pas depuis le lien dans l'email) et vérifie s'il y a vraiment un problème. Le phishing est de plus en plus sophistiqué avec l'IA — même les experts se font avoir. La méfiance est une vertu en sécurité informatique.</li>
<li><strong>Documenter ta configuration complète</strong> : Maintiens un document privé (dans ton gestionnaire de mots de passe où un fichier chiffré) qui décrit toute ton architecture : quels services tu utilises, quelles API keys, quels ports sont ouverts, quelle est ta configuration VPN, comment accéder à chaque service. Ce document est indispensable si tu dois reconstruire après un incident, si tu veux onboarder un collaborateur, où tout simplement si tu oublies un détail de configuration dans 6 mois. Mets-le à jour à chaque changement.</li>
<li><strong>Séparer vie personnelle et professionnelle</strong> : N'utilise pas ton email personnel pour les services liés à ton agent IA. Crée une adresse email dédiée. Si possible, utilise un navigateur différent (où des profils de navigateur distincts) pour tes activités personnelles et professionnelles. Cette séparation réduit le risque de contamination croisée — si ton compte personnel est compromis, tes services professionnels restent intacts.</li>
</ul>

<h2>Félicitations !</h2>
<p>Tu as maintenant une infrastructure sécurisée de niveau professionnel : un serveur dédié correctement configuré, un VPN chiffré qui protège toutes tes communications, un firewall qui contrôle chaque accès, des secrets protégés et rotationnés régulièrement, un agent en sandbox avec des permissions granulaires, des logs détaillés pour la traçabilité, et une routine de maintenance pour que tout reste solide dans le temps.</p>
<p>Ce que tu as construit dans ce module, c'est ce qui fait la différence entre un amateur qui "joue avec l'IA" et un professionnel qui opère un système fiable en production. Tes clients peuvent te faire confiance — et toi, tu peux dormir tranquille en sachant que ton agent travaille pour toi en toute sécurité, 24 heures sur 24.</p>
<p>Dans le prochain module, on passe à la partie la plus excitante : la création de Skills pour OpenClaw. Maintenant que ton infrastructure est solide, on va donner à ton agent des capacités concrètes qui génèrent de la valeur !</p>`,
    exercise: `<h3>Exercice : Mettre en place ta routine de maintenance</h3>
<ol>
<li>Crée un document "Runbook Sécurité" avec toutes les étapes de maintenance (quotidien, hebdo, mensuel, trimestriel)</li>
<li>Configure un rappel hebdomadaire dans ton calendrier pour les mises à jour</li>
<li>Configure un rappel mensuel pour la rotation des API keys</li>
<li>Fais un backup complet de ta configuration actuelle (stocke-le sur un cloud chiffré où un disque externe)</li>
<li>Teste la restauration de ton backup sur un environnement de test</li>
</ol>
<p><strong>Livrable final du module :</strong> Ton "Runbook Sécurité" complet + confirmation que le backup fonctionne. Tu es maintenant prêt pour la suite !</p>`,
  },
];
