// Phase 1 : Maîtriser Claude — Modules 1-2 (13 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 1 : Comprendre l'IA et Découvrir Claude (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 1,
    module: 1,
    title: "L'IA en 2025 : histoire, concepts et révolution en cours",
    slug: "ia-histoire-concepts-revolution",
    duration: "50 min",
    description: "Comprendre d'où vient l'IA, où elle en est et pourquoi ça change tout.",
    content: `<h2>L'intelligence artificielle n'est pas nouvelle</h2>
<p>L'IA existe depuis les années 1950 — ce n'est pas du tout un phénomène récent. Alan Turing posait déjà la question "les machines peuvent-elles penser ?" en 1950, dans un article scientifique devenu légendaire. Mais pendant des décennies, les ordinateurs n'étaient tout simplement pas assez puissants pour donner vie à cette vision ambitieuse.</p>
<p>Pour bien comprendre où on en est aujourd'hui, imagine la situation suivante : dans les années 60, les chercheurs pensaient qu'on aurait des IA surhumaines en 20 ans. Ils étaient brillants, mais ils sous-estimaient massivement la complexité du langage humain, du raisonnement, et de la perception. C'est un peu comme si quelqu'un en 1900 avait dit "dans 20 ans, on ira sur la Lune" — la direction était bonne, mais le calendrier complètement irréaliste.</p>
<p>Ce qu'il faut retenir : l'IA n'est pas une mode passagère. C'est une technologie qui mûrit depuis 70 ans et qui arrive enfin à maturité. Quand tu entends quelqu'un dire "l'IA, c'est juste un buzz", tu sais maintenant que c'est faux — c'est l'aboutissement de décennies de recherche.</p>

<h2>Les grandes étapes</h2>
<ul>
<li><strong>1950-1970 : Les pionniers</strong> — Les premiers programmes jouent aux échecs et résolvent des problèmes logiques. L'enthousiasme est énorme dans les labos universitaires. On crée ELIZA, un programme qui simule un psychothérapeute (et qui bluffait déjà les utilisateurs !). Mais les résultats concrets sont décevants face aux promesses, et les financements s'effondrent. C'est le premier "hiver de l'IA" — une période où plus personne ne veut investir. <strong>Leçon business</strong> : même les meilleures technologies traversent des phases de désillusion avant de décoller. Ne confonds jamais "pas encore prêt" avec "ça ne marchera jamais".</li>
<li><strong>1980-2000 : Les systèmes experts</strong> — Les entreprises utilisent des bases de règles pour automatiser des décisions. Par exemple, une banque programme des règles comme "si le revenu est supérieur à X et l'historique de crédit est bon, alors approuver le prêt". C'est utile mais incroyablement rigide : chaque règle doit être programmée manuellement par un expert humain. Si un cas imprévu se présente, le système est perdu. Imagine devoir écrire une règle pour chaque situation possible — c'est exactement le problème. Ces systèmes coûtaient des millions et devenaient impossibles à maintenir.</li>
<li><strong>2010-2020 : Le deep learning</strong> — Grâce aux GPU (les processeurs graphiques, initialement conçus pour les jeux vidéo) et aux données massives disponibles sur Internet, les réseaux de neurones deviennent enfin performants. La reconnaissance d'image atteint une précision surhumaine en 2015 — un moment historique. La traduction automatique passe de "à peu près compréhensible" à "vraiment utilisable". Google, Facebook, Amazon investissent des milliards. C'est le printemps de l'IA, et cette fois, les résultats sont réels et mesurables.</li>
<li><strong>2022-2025 : L'ère des LLM</strong> — ChatGPT lance la révolution en novembre 2022 et atteint 100 millions d'utilisateurs en 2 mois (le record absolu). Claude, GPT-4, Gemini, Mistral... Les modèles de langage deviennent des outils de travail quotidiens utilisés par des centaines de millions de personnes. Pour la première fois dans l'histoire, l'IA comprend et génère du texte de manière véritablement convaincante. Ce n'est plus réservé aux ingénieurs de la Silicon Valley — n'importe qui peut l'utiliser, y compris toi, dès maintenant.</li>
</ul>

<h2>Pourquoi 2025 change tout</h2>
<p>On est à un point d'inflexion historique. Les outils IA ne sont plus réservés aux ingénieurs diplômés de Stanford. N'importe qui — oui, même toi, même sans background technique — peut désormais :</p>
<ul>
<li><strong>Créer un site web complet en quelques heures</strong> avec Claude Code — pas en quelques semaines, en quelques HEURES. Ce qui nécessitait un développeur à 400€/jour est maintenant faisable par toi seul.</li>
<li><strong>Automatiser des tâches répétitives</strong> avec des agents IA — répondre aux emails, trier des données, générer des rapports... tout ce qui te fait perdre du temps peut être automatisé.</li>
<li><strong>Lancer un business sans savoir coder</strong> — C'est le changement le plus profond. Tu n'as plus besoin de 50 000€ et d'une équipe tech pour lancer un produit digital. Claude peut coder pour toi.</li>
<li><strong>Générer du contenu professionnel à la vitesse de l'éclair</strong> — Articles, emails, propositions commerciales, posts LinkedIn... ce qui prenait 3 heures prend maintenant 20 minutes.</li>
</ul>
<p>Concrètement, voici ce que ça veut dire pour toi : une personne seule avec les bons outils IA peut aujourd'hui produire le travail d'une équipe de 5 personnes. Ce n'est pas de la science-fiction, c'est ce que font déjà des milliers de freelances et d'entrepreneurs dans le monde. Et c'est exactement ce que cette formation va t'apprendre à faire.</p>
<p><strong>Attention</strong> : Ne tombe pas dans le piège de croire que l'IA fait tout toute seule. L'IA est un multiplicateur de compétences, pas un remplacement. Quelqu'un qui ne sait pas ce qu'est un bon site web ne créera pas un bon site web avec l'IA. C'est toi qui apportes la vision, la stratégie et le jugement. L'IA apporte la vitesse d'exécution.</p>

<h2>Les concepts clés</h2>
<p><strong>Machine Learning (ML)</strong> : L'ordinateur apprend à partir de données plutôt que de règles programmées. Tu lui montres 10 000 photos de chats, et il apprend à reconnaître un chat — sans que personne ne lui ait écrit une seule règle du type "un chat à des oreilles pointues". C'est fondamentalement différent de la programmation classique. En programmation classique, tu écris les règles. En ML, la machine découvre les règles toute seule à partir des exemples. C'est pour ça que c'est si puissant : la machine peut trouver des patterns que les humains n'auraient jamais identifiés.</p>
<p><strong>Deep Learning</strong> : Une sous-catégorie du ML qui utilise des réseaux de neurones profonds (avec beaucoup de couches — d'où le "deep"). Pense à ça comme un filtre en cascade : chaque couche extrait des caractéristiques de plus en plus abstraites. La première couche détecte des lignes, la deuxième des formes, la troisième des objets, la quatrième des scènes entières. C'est ce qui fait tourner la reconnaissance vocale (Siri, Alexa), la traduction (Google Translate), et les LLM que tu vas utiliser.</p>
<p><strong>LLM (Large Language Model)</strong> : Un modèle entraîné sur des milliards de textes qui peut comprendre et générer du langage humain. Claude, GPT-4, Gemini sont des LLM. L'analogie la plus simple : imagine quelqu'un qui a lu tous les livres, tous les articles, tous les forums d'Internet. Il ne "sait" pas tout, mais il a vu tellement de texte qu'il peut produire des réponses pertinentes sur presque n'importe quel sujet. C'est une simplification, mais ça capture l'essentiel.</p>
<p><strong>IA Générative</strong> : L'IA qui crée du contenu nouveau (texte, images, code, musique) plutôt que de simplement analyser des données existantes. C'est la branche de l'IA qui a explosé depuis 2022 et qui est directement applicable à ton business. Midjourney génère des images, Suno génère de la musique, et Claude génère du texte et du code de qualité professionnelle.</p>

<h2>Le marché de l'IA en chiffres</h2>
<p>Le marché mondial de l'IA est estimé à plus de 500 milliards de dollars en 2025, et les projections parlent de 1 500 milliards d'ici 2030. Pour mettre ça en perspective, c'est plus gros que le marché du smartphone à ses débuts.</p>
<p>Mais ce qui est encore plus intéressant pour toi, c'est le marché des services IA. Les entreprises savent qu'elles doivent adopter l'IA, mais elles ne savent pas comment. 73% des PME françaises déclarent vouloir intégrer l'IA mais ne pas avoir les compétences en interne. C'est exactement là que tu interviens.</p>
<p>Les freelances et agences spécialisés en IA facturent entre 500€ et 5 000€ par projet pour des missions qui leur prennent quelques heures à quelques jours. La demande est énorme et l'offre est encore faible — c'est la fenêtre d'opportunité parfaite, et elle ne restera pas ouverte éternellement.</p>
<p><strong>Astuce</strong> : Ne te positionne jamais comme "quelqu'un qui utilise ChatGPT". Positionne-toi comme un expert en automatisation et solutions IA pour les entreprises. La différence de perception (et de prix) est énorme.</p>

<blockquote>L'IA ne va pas remplacer les humains. Les humains qui utilisent l'IA vont remplacer ceux qui ne l'utilisent pas.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Va sur claude.ai et crée un compte gratuit si tu n'en as pas encore.</li>
<li>Pose à Claude la question : "Explique-moi en 3 phrases simples ce qu'est un LLM et pourquoi c'est important en 2025".</li>
<li>Compare la réponse avec ce que tu viens d'apprendre dans cette leçon.</li>
<li>Demande ensuite à Claude : "Quels sont les 5 secteurs les plus impactés par l'IA en 2025 ?" et note les opportunités business que tu identifies.</li>
</ol>`,
  },
  {
    order: 2,
    module: 1,
    title: "Les grands modèles : GPT, Claude, Gemini, Mistral",
    slug: "grands-modèles-gpt-claude-gemini-mistral",
    duration: "50 min",
    description: "Comprendre les différences entre les principaux modèles IA du marché.",
    content: `<h2>Le paysage des LLM en 2025</h2>
<p>Il existe aujourd'hui plusieurs modèles de langage majeurs, et le paysage évolue à une vitesse folle — littéralement chaque mois. Chacun a ses forces, ses faiblesses et ses cas d'usage idéaux. Comprendre ces différences est absolument essentiel pour choisir le bon outil selon la tâche.</p>
<p>Pense à ça comme les navigateurs web dans les années 2000 : Chrome, Firefox, Safari, Edge — ils font tous "la même chose" en surface, mais chacun excelle dans des domaines différents. C'est pareil pour les LLM. Et tout comme un développeur web devait connaître les différences entre navigateurs, un professionnel de l'IA doit connaître les forces de chaque modèle.</p>
<p><strong>Pourquoi c'est important pour toi</strong> : Quand un client te demande "quel outil IA je dois utiliser ?", tu dois pouvoir répondre avec assurance et expertise. C'est ce qui te différencie d'un amateur qui a juste "essayé ChatGPT une fois". Tu es le conseiller expert, et cette leçon te donne les connaissances pour jouer ce rôle.</p>

<h2>Claude (Anthropic)</h2>
<p>Claude est développé par Anthropic, une entreprise fondée en 2021 par d'anciens chercheurs d'OpenAI (dont Dario et Daniela Amodei). C'est le modèle que tu vas maîtriser dans cette formation, et il y a de très bonnes raisons à ça.</p>
<ul>
<li><strong>Forces</strong> : Raisonnement long et complexe (il peut maintenir un fil logique sur des milliers de mots), respect exemplaire des instructions (il fait ce que tu lui demandes, pas ce qu'il interprète), code de haute qualité, fenêtre de contexte massive (200K tokens — c'est environ 500 pages de texte !), sécurité et honnêteté (il préfère dire "je ne sais pas" plutôt que d'inventer)</li>
<li><strong>Versions</strong> : Claude Haiku (rapide et léger — parfait pour les tâches simples et les chatbots), Claude Sonnet (équilibré — le meilleur rapport qualité/prix pour la plupart des usages), Claude Opus (le plus puissant — pour les raisonnements complexes et les projets critiques)</li>
<li><strong>Interfaces</strong> : claude.ai (web — l'interface conversationnelle classique), Claude Code (terminal — pour coder et gérer des projets), Claude Cowork (navigateur — pour automatiser des tâches web), API (pour les développeurs qui veulent intégrer Claude dans leurs apps)</li>
<li><strong>Idéal pour</strong> : Coding de qualité professionnelle, analyse de documents longs (contrats, rapports, specs techniques), rédaction structurée, projets complexes multi-étapes</li>
</ul>
<p><strong>Anecdote révélatrice</strong> : Dans les benchmarks de code, Claude bat régulièrement GPT-4 sur la qualité du code produit, particulièrement en Python et JavaScript. Mais surtout, Claude est le seul modèle qui à un outil dédié pour coder directement sur ton ordinateur (Claude Code) — ce n'est pas juste un chatbot qui génère du texte dans une fenêtre.</p>

<h2>GPT-4 / ChatGPT (OpenAI)</h2>
<p>Le modèle le plus connu du grand public, et de loin. ChatGPT a lancé la révolution en novembre 2022 et reste la référence dans l'esprit collectif. Quand ta grand-mère parle d'IA, elle parle de ChatGPT.</p>
<ul>
<li><strong>Forces</strong> : Écosystème extrêmement mature (plugins, GPTs personnalisés, DALL-E intégré pour la génération d'images, browsing web), communauté gigantesque (ce qui signifie beaucoup de tutoriels et de ressources), capacités multimodales avancées (texte, image, voix)</li>
<li><strong>Faiblesses</strong> : Parfois moins précis que Claude sur le code complexe, tendance plus marquée à "halluciner" sur certains sujets (inventer des informations avec confiance), instructions parfois interprétées de manière créative plutôt que suivies à la lettre</li>
<li><strong>Idéal pour</strong> : Utilisation grand public, génération d'images avec DALL-E, écosystème de plugins (il y en à des milliers), tâches générales du quotidien</li>
</ul>
<p><strong>Astuce pro</strong> : Beaucoup de tes futurs clients utiliseront déjà ChatGPT. Ne le dénigre jamais — positionne-toi plutôt comme quelqu'un qui sait utiliser le BON outil pour le BON usage. "ChatGPT c'est génial pour X, mais pour votre besoin spécifique, Claude est plus adapté parce que Y." Ça montre ton expertise sans créer de résistance.</p>

<h2>Gemini (Google)</h2>
<p>Le modèle de Google, intégré dans tout l'écosystème Google (Search, Workspace, Android, YouTube). Google a l'avantage unique d'avoir accès à toutes ses données et services.</p>
<ul>
<li><strong>Forces</strong> : Accès à Google Search en temps réel (il peut chercher sur Internet pendant qu'il te répond), intégration native avec Gmail, Google Docs, Google Sheets (tu peux lui demander d'analyser ta spreadsheet directement), multimodal natif avec une compréhension vidéo impressionnante, fenêtre de contexte géante (jusqu'à 1 million de tokens sur certaines versions)</li>
<li><strong>Faiblesses</strong> : Moins performant que Claude et GPT-4 sur le raisonnement complexe et le code, résultats parfois moins structurés, moins de contrôle fin sur les instructions</li>
<li><strong>Idéal pour</strong> : Recherche web en temps réel, intégration Google Workspace (si ton client est déjà dans l'écosystème Google), analyse de vidéos YouTube</li>
</ul>
<p><strong>À savoir</strong> : Si un client utilise déjà Google Workspace (Gmail, Docs, Sheets), Gemini peut être un complément utile. Mais pour la création de solutions IA sur mesure, Claude reste supérieur. Connaître Gemini te permet de conseiller tes clients de manière crédible.</p>

<h2>Mistral (France)</h2>
<p>La fierté française de l'IA ! Mistral AI, fondée à Paris en 2023 par d'anciens chercheurs de Meta et Google DeepMind, produit des modèles open-source étonnamment compétitifs. C'est la preuve que l'Europe peut rivaliser avec les géants américains.</p>
<ul>
<li><strong>Forces</strong> : Open-source (le code est public, ce qui permet un audit de sécurité complet), très performant pour sa taille (des modèles plus petits qui rivalisent avec des modèles 10x plus gros), hébergeable en local sur tes propres serveurs (aucune donnée ne quitte ton infrastructure), respect total de la vie privée et conformité RGPD native</li>
<li><strong>Idéal pour</strong> : Entreprises soucieuses de la confidentialité (avocats, médecins, banques), cas d'usage nécessitant un modèle local sans connexion Internet, organisations avec des contraintes réglementaires strictes (données sensibles, secret professionnel)</li>
</ul>
<p><strong>Conseil business</strong> : Certains clients, notamment dans le secteur médical, juridique où financier, ne voudront JAMAIS envoyer leurs données à un serveur américain. Pour ces clients, Mistral est la solution idéale. Savoir proposer Mistral quand c'est pertinent montre que tu comprends les enjeux de confidentialité — et ça inspire une confiance énorme.</p>

<h2>Pourquoi on utilise Claude dans cette formation</h2>
<p>Claude est le meilleur choix pour construire un business IA, et voici pourquoi de manière concrète :</p>
<ol>
<li><strong>Code supérieur</strong> : Claude écrit du code plus propre, plus fonctionnel et mieux structuré que ses concurrents. Dans un benchmark interne, le code de Claude nécessite 40% moins de corrections manuelles que celui de GPT-4.</li>
<li><strong>Claude Code</strong> : L'outil terminal le plus puissant pour coder avec l'IA. Aucun autre modèle n'a d'équivalent aussi intégré — Claude peut littéralement créer, modifier et déployer des projets complets depuis ton terminal.</li>
<li><strong>Claude Cowork</strong> : Automatisation directe dans le navigateur — tu peux demander à Claude de naviguer sur des sites, remplir des formulaires, extraire des données. C'est comme avoir un assistant virtuel qui voit ton écran.</li>
<li><strong>Skills</strong> : Système de compétences réutilisables et vendables — tu crées une Skill une fois, tu l'utilises pour tous tes clients. C'est un vrai actif business.</li>
<li><strong>Fiabilité</strong> : Claude suit les instructions avec une précision remarquable. Quand tu lui donnes un format, des contraintes et un style, il les respecte. C'est crucial quand tu livres du travail à des clients.</li>
</ol>
<p><strong>Attention</strong> : Cela ne veut pas dire que les autres modèles sont mauvais. Chaque modèle a sa place. Mais pour ce que tu vas construire — des solutions IA professionnelles à vendre — Claude est objectivement le meilleur choix en 2025. C'est pour ça qu'on se concentre dessus à 100%.</p>

<blockquote>Tu n'as pas besoin de maîtriser tous les modèles. Maîtriser UN modèle en profondeur vaut mieux que survoler cinq.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Pose la même question à Claude et à ChatGPT : "Écris une fonction Python qui inverse une liste chaînée avec des commentaires explicatifs".</li>
<li>Compare les deux réponses : qualité du code, clarté des commentaires, structure.</li>
<li>Note dans un document tes observations sur les différences.</li>
<li>Teste avec une question créative : "Imagine un concept d'application mobile innovante pour les freelances" — compare à nouveau les réponses.</li>
</ol>`,
  },
  {
    order: 3,
    module: 1,
    title: "Comment fonctionne un LLM",
    slug: "comment-fonctionne-un-llm",
    duration: "55 min",
    description: "Comprendre les tokens, le contexte, la température et le fonctionnement interne.",
    content: `<h2>Démystifier le fonctionnement</h2>
<p>Tu n'as pas besoin de comprendre les mathématiques derrière un LLM — rassure-toi, il n'y aura pas d'équations ici. Mais comprendre les concepts de base va te rendre 10x plus efficace dans tes interactions avec Claude. C'est la différence entre conduire une voiture en sachant vaguement qu'il y à un moteur, et conduire en comprenant quand changer de vitesse, quand freiner du moteur, et comment optimiser ta consommation.</p>
<p>Les professionnels de l'IA qui obtiennent les meilleurs résultats ne sont pas ceux qui connaissent les maths (ce sont les chercheurs). Ce sont ceux qui comprennent intuitivement comment le modèle "pense" et qui adaptent leur façon de communiquer en conséquence. C'est exactement ce que tu vas apprendre ici.</p>
<p><strong>Analogie clé</strong> : Pense à un LLM comme un collaborateur extrêmement compétent mais avec des particularités uniques. Il ne fonctionne pas comme un humain, et si tu le traites comme un humain, tu seras souvent déçu. Mais si tu comprends ses forces et ses limites, tu peux en tirer des résultats extraordinaires.</p>

<h2>Les Tokens : l'unité de base</h2>
<p>Un LLM ne lit pas des mots comme toi et moi. Il lit des <strong>tokens</strong>. Un token est un morceau de mot, parfois un mot entier, parfois juste un bout. C'est le concept le plus fondamental à comprendre.</p>
<ul>
<li>"Bonjour" = 1 token</li>
<li>"Intelligence artificielle" = 2-3 tokens</li>
<li>"Anticonstitutionnellement" = 4-5 tokens (les mots longs sont découpés)</li>
<li>Un texte de 1000 mots ≈ 1 300-1 500 tokens</li>
<li>Un emoji = 1-2 tokens</li>
<li>Du code Python de 100 lignes ≈ 300-500 tokens</li>
</ul>
<p><strong>Pourquoi c'est important ?</strong> Parce que chaque modèle à une <strong>limite de tokens</strong> — et cette limite s'applique à la fois à ce que tu envoies ET à ce que le modèle répond. Claude peut traiter jusqu'à 200 000 tokens dans une seule conversation. C'est environ 150 000 mots — l'équivalent d'un roman entier de 500 pages.</p>
<p>Concrètement, ça veut dire que tu peux lui donner un document de 100 pages et lui poser des questions dessus. Tu peux lui donner tout le code source d'une application et lui demander de le refactorer. C'est un avantage énorme pour les projets complexes que tu proposeras à tes clients.</p>
<p><strong>Astuce pro</strong> : Les tokens coûtent de l'argent quand tu utilises l'API. Plus tu envoies de tokens, plus ça coûte. Apprendre à être concis et efficace dans tes prompts n'est pas juste une question de qualité — c'est aussi une question de rentabilité quand tu travailles sur des projets clients à volume.</p>
<p><strong>Attention</strong> : Le français utilise en moyenne 20-30% plus de tokens que l'anglais pour exprimer la même idée. C'est parce que les modèles ont été principalement entraînés sur de l'anglais. Garde ça en tête quand tu estimes tes coûts où la longueur de tes prompts.</p>

<h2>La fenêtre de contexte</h2>
<p>La fenêtre de contexte, c'est la "mémoire de travail" du modèle. Imagine un bureau : tout ce que tu poses sur le bureau (tes messages, les réponses de Claude, les documents uploadés), Claude peut le voir et l'utiliser. Quand le bureau est plein, les documents les plus anciens tombent par terre — Claude les oublie.</p>
<p>C'est fondamentalement différent de la mémoire humaine. Un humain peut se rappeler vaguement d'une conversation d'il y a 3 mois. Claude, lui, à une mémoire parfaite de tout ce qui est dans sa fenêtre de contexte, et une mémoire ZÉRO de tout ce qui est en dehors. Il n'y a pas de "vaguement" — c'est tout où rien.</p>
<p><strong>Astuce clé</strong> : Plus tu donnes de contexte pertinent au début de ta conversation, meilleures seront les réponses. C'est comme briefer un collaborateur — plus le brief est clair et complet, meilleur est le travail. Ne suppose jamais que Claude "sait déjà" quelque chose. Si c'est important, dis-le explicitement.</p>
<p><strong>Erreur fréquente</strong> : Beaucoup de gens commencent une conversation avec "Continue ce qu'on faisait hier". Claude ne se souvient pas d'hier ! Chaque conversation est une page blanche. Si tu veux reprendre un travail, résume le contexte où utilise les Claude Projects (qu'on verra dans la leçon suivante) pour maintenir un contexte persistant.</p>
<p><strong>Conseil pratique</strong> : Si une conversation devient très longue (plus de 50 échanges), la qualité des réponses peut baisser parce que Claude doit "jongler" avec beaucoup d'informations. Dans ce cas, démarre une nouvelle conversation avec un résumé clair de l'état actuel du projet. C'est comme faire un "point d'étape" avec un collègue.</p>

<h2>La température</h2>
<p>La température contrôle le niveau de "créativité" — où plus précisément, le niveau d'aléatoire — dans les réponses du modèle. C'est un paramètre technique, mais son impact est très concret :</p>
<ul>
<li><strong>Température basse (0.0-0.3)</strong> : Réponses prévisibles, précises, factuelles. Le modèle choisit quasi systématiquement le mot le plus probable. Idéal pour : le code, l'analyse de données, les réponses techniques, les calculs, tout ce qui nécessite de la précision. Imagine un comptable : tu veux qu'il soit précis, pas créatif.</li>
<li><strong>Température moyenne (0.4-0.7)</strong> : Équilibre entre précision et créativité. Le modèle explore un peu mais reste cohérent. Bon pour : la rédaction d'emails professionnels, les résumés, les descriptions de produits. Imagine un rédacteur : tu veux du style, mais pas de délire.</li>
<li><strong>Température haute (0.8-1.0)</strong> : Réponses créatives, variées, parfois surprenantes. Le modèle prend des risques et explore des chemins moins évidents. Idéal pour : le brainstorming, la création de contenu original, la génération d'idées de noms, les slogans. Imagine un directeur artistique : tu veux de l'audace et de l'originalité.</li>
</ul>
<p><strong>En pratique</strong> : Sur claude.ai, tu ne contrôles pas directement la température. Claude utilise un réglage optimisé automatiquement selon le type de tâche détecté. En revanche, quand tu utiliseras l'API pour créer des solutions clients, le contrôle de la température sera un levier puissant. Un chatbot service client ? Température basse. Un générateur de slogans publicitaires ? Température haute.</p>

<h2>Comment un LLM génère du texte</h2>
<p>C'est ici que ça devient fascinant. Un LLM ne "comprend" pas le texte au sens humain du terme. Il <strong>prédit le mot suivant le plus probable</strong> en fonction de tout ce qui précède. C'est une machine de prédiction statistique incroyablement sophistiquée.</p>
<p>Quand tu écris "Le chat est sur le...", le modèle calcule les probabilités : "toit" (35%), "canapé" (20%), "lit" (15%), "balcon" (8%), "rebord" (5%), etc. Il choisit ensuite un mot en fonction de la température. À température 0, il choisit toujours "toit". À température élevée, il pourrait choisir "rebord de la fenêtre, contemplant les étoiles" — plus original, mais moins prévisible.</p>
<p>Mais voilà le truc magique : ce processus, répété des milliers de fois mot par mot, produit des textes cohérents, structurés, et souvent brillants. C'est la magie de l'échelle : avec suffisamment de données (des milliards de textes) et de paramètres (des centaines de milliards), la simple prédiction de mots fait émerger quelque chose qui ressemble fortement à de l'intelligence.</p>
<p><strong>Analogie</strong> : Imagine un musicien de jazz qui a écouté des millions de morceaux. Quand il improvise, chaque note est "prédite" par son cerveau en fonction de tout ce qu'il a entendu. Il ne copie aucun morceau spécifique, mais chaque note fait sens dans le contexte. C'est exactement ce que fait un LLM avec les mots.</p>
<p><strong>Pourquoi c'est utile de savoir ça</strong> : Comprendre que Claude "prédit le mot suivant" explique beaucoup de choses. Ça explique pourquoi il est meilleur quand tu lui donnes du contexte (plus d'indices pour prédire). Ça explique pourquoi il peut halluciner (il choisit des mots "probables" même quand il n'a pas l'info). Et ça explique pourquoi il est si bon en écriture — c'est littéralement ce pour quoi il est optimisé.</p>

<h2>Les hallucinations</h2>
<p>Parfois, le modèle "invente" des informations avec une confiance déconcertante. Ça s'appelle une hallucination, et c'est le piège numéro un pour les débutants. Claude peut te citer un livre qui n'existe pas, te donner une statistique inventée, où t'expliquer un concept de manière totalement fausse — le tout avec un ton parfaitement assuré.</p>
<p>Ça arrive parce que le modèle optimisé la <strong>plausibilité</strong>, pas la <strong>vérité</strong>. Il cherche le mot suivant le plus probable, pas le mot suivant le plus vrai. Et parfois, ce qui est plausible n'est pas vrai.</p>
<p><strong>Exemple réel</strong> : Demande à un LLM de te citer des articles scientifiques sur un sujet pointu. Il y a de fortes chances qu'il invente des titres d'articles qui n'existent pas, avec des auteurs plausibles et des revues réelles. Tout a l'air parfaitement crédible, mais c'est du vent.</p>
<p><strong>Comment les éviter</strong> :</p>
<ul>
<li><strong>Demande des sources où des références</strong> — et vérifie-les ! Si Claude cite un article, Google-le.</li>
<li><strong>Vérifie les faits importants</strong> — Surtout les chiffres, les dates et les noms propres. Ce sont les domaines où les hallucinations sont les plus fréquentes.</li>
<li><strong>Donne du contexte précis</strong> — Plus Claude a d'informations factuelles dans son contexte, moins il a besoin d'inventer. Si tu lui donnes le document source, il peut le citer plutôt qu'improviser.</li>
<li><strong>Utilise des instructions explicites</strong> — "Si tu n'es pas sûr, dis-le clairement plutôt que d'inventer." Claude respecte très bien ce type d'instruction.</li>
<li><strong>Croise les informations</strong> — Pour les décisions importantes, vérifie toujours avec une source externe. Ne construis jamais un livrable client uniquement sur la base de ce que Claude affirme sans vérification.</li>
</ul>
<p><strong>Attention critique</strong> : Quand tu livres du travail à des clients, une hallucination non détectée peut détruire ta crédibilité. Un rapport avec des statistiques inventées, un article de blog avec des faits faux, un chatbot qui donne des informations erronées... c'est le genre d'erreur qui te coûte un client. Prends l'habitude de TOUJOURS vérifier les affirmations factuelles de Claude avant de livrer.</p>

<blockquote>Comprendre les limites de l'IA est aussi important que comprendre ses forces. C'est ce qui fait la différence entre un utilisateur basique et un professionnel.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Demande à Claude : "Combien de tokens fait cette phrase : 'Bonjour, je suis en train d'apprendre à utiliser l'intelligence artificielle pour mon business.'" — vérifie sa réponse.</li>
<li>Teste l'impact du contexte : pose la même question avec et sans contexte préalable. Par exemple, demande "Quelle est la meilleure stack ?" sans contexte, puis avec "Je suis débutant, je veux créer un site web vitrine pour un plombier local. Quelle est la meilleure stack ?"</li>
<li>Provoque une hallucination volontairement : demande à Claude des infos sur un livre où une personne fictive que tu inventes. Note comment il réagit.</li>
</ol>`,
  },
  {
    order: 4,
    module: 1,
    title: "Découvrir Claude : interface, Projects et artefacts",
    slug: "découvrir-claude-interface-projects",
    duration: "50 min",
    description: "Maîtriser l'interface claude.ai, les Projects et les artefacts.",
    content: `<h2>L'interface claude.ai</h2>
<p>Claude.ai est ton point d'entrée principal dans l'univers Claude. L'interface est volontairement simple et épurée — pas de menus à rallonge, pas de fonctionnalités cachées dans des sous-menus obscurs. Mais cette simplicité cache une puissance énorme, à condition de savoir l'exploiter correctement.</p>
<p>Quand tu arrives sur claude.ai, tu vois essentiellement une zone de texte et une liste de conversations sur le côté. C'est minimaliste, et c'est voulu : l'objectif est que tu te concentres sur ton échange avec Claude, pas sur l'interface.</p>
<p><strong>Les éléments clés de l'interface</strong> :</p>
<ul>
<li><strong>La zone de saisie</strong> — C'est là que tu tapes tes prompts. Tu peux y coller du texte, du code, et même glisser-déposer des fichiers.</li>
<li><strong>Le sélecteur de modèle</strong> — En haut, tu peux choisir entre Haiku (rapide), Sonnet (équilibré) et Opus (puissant). Choisis en fonction de la complexité de ta tâche.</li>
<li><strong>L'historique des conversations</strong> — Sur le côté gauche, toutes tes conversations passées sont accessibles. Donne-leur des noms clairs !</li>
<li><strong>Le bouton d'upload</strong> — Pour attacher des fichiers (PDF, images, code, etc.) à ta conversation.</li>
</ul>
<p><strong>Astuce</strong> : Utilise le raccourci Ctrl+K (où Cmd+K sur Mac) pour accéder rapidement à la recherche dans tes conversations. Quand tu auras 200 conversations, tu me remercieras.</p>

<h2>Les conversations</h2>
<p>Chaque conversation avec Claude est indépendante. C'est un point crucial à comprendre. Quand tu commences une nouvelle conversation, Claude ne se souvient pas des précédentes. Il ne sait pas que tu lui as parlé hier, il ne connaît pas ton nom (sauf si tu le lui dis dans cette conversation), et il n'a aucune idée de ton projet global.</p>
<p>C'est à la fois une limite et un avantage. La limite est évidente : tu dois re-contextualiser à chaque nouvelle conversation. L'avantage est plus subtil : chaque projet repart sur une base propre, sans pollution d'un contexte précédent. Si tu as eu une conversation qui a mal tourné (instructions confuses, Claude parti dans la mauvaise direction), tu peux simplement recommencer à zéro.</p>
<p><strong>Bonnes pratiques pour les conversations</strong> :</p>
<ul>
<li><strong>Une conversation = un sujet/projet</strong> — Ne mélange pas "aide-moi à écrire un email" et "code-moi une landing page" dans la même conversation. Claude va s'embrouiller.</li>
<li><strong>Ne mélange pas les sujets</strong> dans une même conversation — Si tu passes du marketing au code en plein milieu, la qualité des réponses baisse parce que le contexte devient confus.</li>
<li><strong>Si une conversation devient trop longue</strong>, résume le contexte et recommence — Après 30-40 échanges, Claude commence à "diluer" son attention. Un nouveau départ avec un bon résumé sera plus efficace qu'une conversation interminable.</li>
<li><strong>Nomme tes conversations</strong> de manière descriptive — "Client Paul - Landing page v2" est infiniment plus utile que "Nouvelle conversation" quand tu en cherches une parmi 200.</li>
</ul>
<p><strong>Conseil pro</strong> : Avant de commencer une conversation importante, prends 2 minutes pour préparer ton premier message. Un premier message bien structuré (contexte + objectif + contraintes) peut faire la différence entre une conversation productive de 10 échanges et une conversation frustrante de 40 échanges.</p>

<h2>Les artefacts</h2>
<p>Les artefacts sont une fonctionnalité unique de Claude — aucun autre modèle n'a d'équivalent aussi bien intégré. Quand tu demandes du code, un document structuré, un tableau où une page web, Claude le génère dans un <strong>panneau séparé</strong> sur le côté droit de l'écran.</p>
<p>Ce panneau n'est pas juste un bloc de texte — c'est un vrai espace de travail interactif. Tu peux :</p>
<ul>
<li><strong>Copier en un clic</strong> — Un bouton de copie en haut de chaque artefact. Fini le copier-coller laborieux en sélectionnant du texte.</li>
<li><strong>Télécharger directement</strong> — Télécharge le fichier sur ton ordinateur en un clic, prêt à l'emploi.</li>
<li><strong>Modifier en demandant des ajustements</strong> — "Change la couleur du header en bleu", "Ajoute une section FAQ", "Rends le formulaire responsive". Claude modifie l'artefact en direct.</li>
<li><strong>Prévisualiser</strong> — Pour le HTML/CSS/JS, tu peux voir le rendu en temps réel directement dans l'interface ! C'est incroyablement pratique pour itérer rapidement sur un design.</li>
</ul>
<p>Les artefacts sont parfaits pour créer des livrables propres : rapports structurés, pages web, scripts Python, présentations, emails formatés, documentation technique... Tout ce que tu peux livrer à un client peut être créé comme artefact.</p>
<p><strong>Astuce avancée</strong> : Tu peux demander à Claude de créer des artefacts interactifs. Par exemple, "Crée-moi un calculateur de prix pour mes services en HTML/CSS/JS". Claude va créer une mini-application fonctionnelle que tu peux prévisualiser et utiliser directement dans l'interface. C'est un excellent moyen de prototyper rapidement des outils pour tes clients.</p>

<h2>Claude Projects : ton espace de travail</h2>
<p>Les Projects sont LA fonctionnalité qui transforme Claude d'un chatbot en un vrai collaborateur professionnel. Si tu ne devais retenir qu'une seule fonctionnalité de Claude, ce serait celle-ci.</p>
<p>Un Project, c'est :</p>
<ul>
<li><strong>Un contexte persistant</strong> : Tu uploades des documents, du code, des specs — Claude les a TOUJOURS en mémoire dans chaque conversation de ce projet. Plus besoin de re-contextualiser à chaque fois !</li>
<li><strong>Des instructions custom</strong> : Tu définis comment Claude doit se comporter dans ce projet spécifique. Son ton, son expertise, ses règles. C'est comme configurer un collaborateur dédié à un client.</li>
<li><strong>Un historique organisé</strong> : Toutes tes conversations liées à ce projet sont regroupées au même endroit. Fini les conversations éparpillées.</li>
</ul>
<p><strong>Pourquoi c'est révolutionnaire</strong> : Sans Projects, chaque conversation est isolée et tu passes 20% de ton temps à re-expliquer le contexte. Avec un Project bien configuré, tu ouvres une nouvelle conversation et Claude sait déjà qui est le client, quel est le projet, quelles sont les contraintes, et quel ton utiliser. C'est comme la différence entre embaucher un intérimaire chaque jour et avoir un employé permanent qui connaît le dossier.</p>

<h2>Comment créer un Project efficace</h2>
<ol>
<li><strong>Crée le projet</strong> avec un nom clair et descriptif (ex : "Agence IA - Client Restaurant Le Bon Goût"). Évite les noms génériques comme "Projet 1" — tu le regretteras quand tu auras 20 projets.</li>
<li><strong>Ajoute le contexte</strong> : uploade le brief client, les specs techniques, les références visuelles, les exemples de livrables attendus. Plus Claude a d'informations pertinentes, meilleur sera son travail.</li>
<li><strong>Écris les instructions</strong> : C'est le system prompt de ton Project. "Tu es un expert en développement web et en IA. Ce projet concerne la création d'un chatbot pour le restaurant Le Bon Goût. Le ton doit être professionnel mais chaleureux. Voici les specs..." Sois précis et détaillé.</li>
<li><strong>Travaille</strong> : Chaque nouvelle conversation dans ce projet hérite automatiquement du contexte et des instructions. Tu peux directement passer à l'action sans re-contextualiser.</li>
</ol>
<p><strong>Attention</strong> : N'uploade pas TOUT dans un Project. Si tu mets 50 documents, Claude aura trop de contexte et les réponses seront diluées. Choisis les documents les plus pertinents et les plus récents. Qualité > quantité.</p>

<h2>Les fichiers supportés</h2>
<p>Claude peut lire et analyser une variété impressionnante de formats :</p>
<ul>
<li><strong>PDF</strong> — Rapports, contrats, documents techniques, factures. Claude peut extraire et analyser le contenu de PDFs de centaines de pages.</li>
<li><strong>Images</strong> — Screenshots, maquettes, diagrammes, photos de tableaux blancs. Claude est multimodal : il "voit" les images et peut les décrire, les analyser, et même écrire du code basé sur une maquette visuelle.</li>
<li><strong>Code</strong> — N'importe quel langage de programmation. Python, JavaScript, HTML, CSS, SQL, PHP... Claude les reconnaît et les comprend tous.</li>
<li><strong>CSV/Excel</strong> — Données tabulaires, tableaux financiers, listes clients. Claude peut analyser des datasets et en tirer des insights.</li>
<li><strong>Documents texte</strong> — .txt, .md, .doc et autres formats texte.</li>
</ul>
<p><strong>Astuce puissante</strong> : Tu peux prendre une photo d'un tableau blanc après une réunion client, l'uploader dans Claude, et lui demander de transformer ces notes en un brief structuré. C'est le genre de gain de temps qui impressionne les clients et qui te fait gagner des heures chaque semaine.</p>

<blockquote>Un Project bien configuré, c'est comme avoir un collaborateur qui a lu TOUT le dossier avant de commencer à travailler. La qualité du setup détermine la qualité du résultat.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée ton premier Claude Project : "Formation Opexia - Mes Notes".</li>
<li>Dans les instructions du projet, écris : "Tu es mon assistant d'apprentissage pour la formation Opexia Academy. Aide-moi à comprendre les concepts IA, à pratiquer et à retenir les leçons. Sois concis et donne toujours des exemples concrets."</li>
<li>Uploade un document de ton choix (un article, un PDF, une page web) et pose 3 questions dessus à Claude.</li>
<li>Teste la création d'un artefact : demande à Claude de créer une page HTML simple qui présente ton profil professionnel.</li>
</ol>`,
  },
  {
    order: 5,
    module: 1,
    title: "Claude Code et Claude Cowork : tes outils de travail",
    slug: "claude-code-cowork-outils",
    duration: "55 min",
    description: "Découvrir Claude Code (terminal) et Claude Cowork (navigateur) pour travailler efficacement.",
    content: `<h2>Claude Code : l'IA dans ton terminal</h2>
<p>Claude Code est un outil en ligne de commande qui permet à Claude d'interagir directement avec ton ordinateur. Ce n'est pas juste un chatbot dans un terminal — c'est un véritable agent de développement qui peut lire tes fichiers, modifier ton code, exécuter des commandes, et même déployer des applications. C'est l'outil le plus puissant pour les développeurs et les créateurs de solutions IA.</p>
<p><strong>Pourquoi c'est un game-changer</strong> : Sur claude.ai, tu copies-colles du code entre l'interface et ton éditeur. Avec Claude Code, Claude travaille DIRECTEMENT dans ton projet. Il voit tes fichiers, comprend ta structure, et fait les modifications en place. C'est la différence entre envoyer des instructions par email à un freelance et avoir un développeur assis à côté de toi qui code en temps réel.</p>
<p><strong>Analogie concrète</strong> : Imagine un assistant qui peut voir ton écran d'ordinateur, ouvrir n'importe quel fichier, taper du code, exécuter des commandes et vérifier que tout fonctionne — le tout à la vitesse de l'éclair et sans jamais se fatiguer. C'est exactement ça, Claude Code.</p>
<p><strong>Attention</strong> : Claude Code nécessite un abonnement Claude Pro où une clé API. La version gratuite de Claude ne donne pas accès à Claude Code. Cet investissement est rentabilisé dès ton premier projet client, donc n'hésite pas.</p>

<h2>Ce que Claude Code peut faire</h2>
<ul>
<li><strong>Lire et modifier des fichiers</strong> sur ton ordinateur — Claude voit l'arborescence complète de ton projet et peut modifier n'importe quel fichier. Il comprend le contexte global, pas juste un fichier isolé.</li>
<li><strong>Exécuter des commandes</strong> terminal (npm, git, pip, docker, etc.) — Il peut installer des packages, lancer des tests, faire des commits Git, et gérer tout ton workflow de développement.</li>
<li><strong>Créer des projets complets</strong> de zéro — Dis-lui "crée-moi une application Next.js avec une page d'accueil, un formulaire de contact et une page à propos" et il va créer tous les fichiers, installer les dépendances, et configurer le projet.</li>
<li><strong>Débugger du code</strong> en analysant les erreurs — Copie-colle un message d'erreur, où mieux, laisse Claude lire les logs directement. Il va diagnostiquer le problème et proposer (voire appliquer) un correctif.</li>
<li><strong>Déployer des applications</strong> sur le web — Claude peut déployer sur Vercel, Netlify, où d'autres plateformes directement depuis le terminal.</li>
<li><strong>Naviguer dans un codebase</strong> existant et le comprendre — Tu récupères un projet existant d'un client ? Claude peut analyser toute la structure et t'expliquer comment ça fonctionne en quelques minutes.</li>
</ul>
<p><strong>Cas concret</strong> : Un de nos étudiants a utilisé Claude Code pour créer un site web complet pour un restaurant client — menu en ligne, système de réservation, galerie photos, page de contact — en 3 heures. Le client l'a payé 1 500€. Sans Claude Code, ce même projet aurait pris 2-3 jours minimum. C'est la puissance de l'outil.</p>

<h2>Installation de Claude Code</h2>
<p>Claude Code s'installe via npm (Node.js doit être installé au préalable) :</p>
<ol>
<li><strong>Installe Node.js</strong> depuis nodejs.org — Télécharge la version LTS (Long Term Support), c'est la plus stable. L'installation est simple : double-clique sur l'installateur et suis les étapes.</li>
<li><strong>Ouvre ton terminal</strong> — Sur Mac : Terminal où iTerm2. Sur Windows : PowerShell où Windows Terminal. Sur Linux : n'importe quel terminal.</li>
<li><strong>Tape</strong> : <code>npm install -g @anthropic-ai/claude-code</code> — Le flag <code>-g</code> signifie "global", ce qui rend Claude Code accessible depuis n'importe quel dossier de ton ordinateur.</li>
<li><strong>Lance Claude Code</strong> : <code>claude</code> — C'est tout ! Tu tapes "claude" dans ton terminal et l'interface démarre.</li>
<li><strong>Connecte ton compte Anthropic</strong> — Claude Code va te demander de te connecter à ton compte Anthropic. Suis les instructions à l'écran.</li>
</ol>
<p><strong>Astuce</strong> : Si tu rencontres une erreur de permission lors de l'installation (fréquent sur Mac/Linux), ajoute <code>sudo</code> devant la commande : <code>sudo npm install -g @anthropic-ai/claude-code</code>. Sur Windows, ouvre le terminal en tant qu'administrateur.</p>
<p><strong>Premier réflexe après l'installation</strong> : Navigue dans un dossier vide (<code>mkdir test-claude && cd test-claude</code>) et lance <code>claude</code>. Demande-lui "Crée un fichier hello.html avec une page qui dit Bonjour le monde". Vérifie que le fichier est bien créé. Si oui, tout fonctionne !</p>

<h2>Claude Cowork : l'IA dans ton navigateur</h2>
<p>Claude Cowork est une extension Chrome qui permet à Claude de voir et interagir avec les pages web que tu visites. Si Claude Code est ton développeur, Claude Cowork est ton assistant administratif qui peut naviguer sur Internet pour toi.</p>
<p>Concrètement, Claude Cowork peut voir ce qui s'affiche dans ton navigateur — les textes, les boutons, les formulaires, les images — et agir dessus. C'est comme si tu prêtais tes yeux et tes mains à Claude.</p>
<p><strong>Pourquoi c'est important pour ton business</strong> : Beaucoup de tâches professionnelles se passent dans le navigateur — CRM, outils de gestion, réseaux sociaux, emails. Claude Cowork peut automatiser ces tâches. Imagine un client qui passe 2 heures par jour à répondre à des avis Google et à mettre à jour son CRM. Tu peux automatiser 80% de ça avec Claude Cowork.</p>

<h2>Ce que Claude Cowork peut faire</h2>
<ul>
<li><strong>Lire le contenu</strong> de n'importe quelle page web — Claude voit le texte, les images, la structure de la page. Tu peux lui demander de résumer un article, d'analyser un concurrent, où d'extraire des données spécifiques.</li>
<li><strong>Remplir des formulaires</strong> automatiquement — Tu as un tableau de 50 entrées à saisir dans un CRM ? Claude Cowork peut le faire pour toi en quelques minutes.</li>
<li><strong>Cliquer sur des boutons</strong> et naviguer — Claude peut naviguer d'une page à l'autre, cliquer sur des liens, ouvrir des menus. Il peut suivre un workflow complet dans une application web.</li>
<li><strong>Extraire des données</strong> de sites web — Besoin de récupérer les infos de 20 restaurants sur Google Maps ? Claude Cowork peut les extraire et les organiser dans un tableau structuré.</li>
<li><strong>Prendre des screenshots</strong> et les analyser — Claude peut capturer visuellement une page et t'en faire une analyse (design, UX, contenu, erreurs...).</li>
<li><strong>Automatiser des workflows</strong> complets dans le navigateur — Enchaîner plusieurs actions (ouvrir un site, se connecter, naviguer vers une section, extraire des données, les formater) en un seul flux automatisé.</li>
</ul>

<h2>Cas d'usage concrets</h2>
<p><strong>Avec Claude Code</strong> (création et développement) :</p>
<ul>
<li>"Crée-moi une landing page pour un coach sportif avec un formulaire de contact, un design moderne en vert et blanc, et des témoignages clients" — Claude crée le projet complet en 20 minutes.</li>
<li>"Analyse ce code et corrige les bugs — voici le message d'erreur : [erreur]" — Claude lit les fichiers, trouve le bug, et le corrige en place.</li>
<li>"Déploie cette app sur Vercel et configure le domaine personnalisé" — Claude exécute les commandes de déploiement pour toi.</li>
<li>"Ajoute un système d'authentification avec email/password à cette app Next.js" — Claude modifie plusieurs fichiers en parallèle pour intégrer la fonctionnalité.</li>
</ul>
<p><strong>Avec Claude Cowork</strong> (automatisation et extraction) :</p>
<ul>
<li>"Va sur Google Maps et extrais les informations (nom, adresse, téléphone, note, nombre d'avis) de mes 10 premiers concurrents dans la zone" — Claude navigue, extrait et organise les données.</li>
<li>"Remplis ce formulaire CRM avec les informations de mon nouveau client que je te donne" — Claude remplit chaque champ automatiquement.</li>
<li>"Prends un screenshot de cette page et dis-moi comment améliorer le design et l'UX" — Claude analyse visuellement la page et te donne des recommandations concrètes.</li>
<li>"Publie ce post LinkedIn avec le texte suivant et ajoute cette image" — Claude navigue vers LinkedIn et publie pour toi (avec ta confirmation).</li>
</ul>

<h2>Quand utiliser quoi ?</h2>
<p>C'est une question que tu te poseras souvent au début. Voici un guide clair :</p>
<p><strong>Claude.ai</strong> (le penseur) : Réflexion stratégique, rédaction de contenu, analyse de documents, brainstorming, planification. Utilise-le quand tu as besoin de RÉFLÉCHIR et de PRODUIRE du texte.</p>
<p><strong>Claude Code</strong> (le développeur) : Développement, création de projets techniques, déploiement, automatisation de tâches techniques, gestion de fichiers. Utilise-le quand tu as besoin de CRÉER et de CODER quelque chose sur ton ordinateur.</p>
<p><strong>Claude Cowork</strong> (l'assistant navigateur) : Automatisation de tâches web, extraction de données depuis des sites, remplissage de formulaires, navigation automatisée. Utilise-le quand tu as besoin d'AGIR dans ton navigateur.</p>
<p><strong>Astuce de pro</strong> : Les trois outils se complètent dans un workflow réel. Exemple : tu utilises Claude.ai pour planifier la stratégie d'un client (réflexion), puis Claude Code pour créer le site web (création), puis Claude Cowork pour extraire les données des concurrents (automatisation). C'est un pipeline complet.</p>

<blockquote>Ces trois outils forment un écosystème complet. Maîtriser les trois, c'est avoir un assistant qui peut faire pratiquement n'importe quoi.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Installe Claude Code sur ton ordinateur en suivant les étapes ci-dessus.</li>
<li>Lance Claude Code et demande-lui : "Crée un fichier index.html avec une page de bienvenue simple qui dit 'Mon premier projet avec Claude Code'".</li>
<li>Ouvre le fichier généré dans ton navigateur pour vérifier le résultat.</li>
<li>Si tu as Chrome, installe l'extension Claude Cowork et explore ses fonctionnalités sur un site de ton choix.</li>
</ol>`,
  },
  {
    order: 6,
    module: 1,
    title: "Ton premier projet concret avec Claude",
    slug: "premier-projet-concret-claude",
    duration: "60 min",
    description: "Réaliser un projet de bout en bout avec Claude pour ancrer les apprentissages.",
    content: `<h2>Passer de la théorie à la pratique</h2>
<p>Tu as maintenant les bases solides. Tu sais ce qu'est l'IA, tu connais les modèles, tu comprends comment ça fonctionne en coulisses, et tu as découvert les trois outils Claude (claude.ai, Claude Code, Claude Cowork). Il est temps de tout mettre en pratique avec un vrai projet concret.</p>
<p><strong>Pourquoi ce projet est important</strong> : C'est en faisant qu'on apprend. Tu peux lire 100 leçons sur l'IA, mais rien ne remplacera l'expérience de créer quelque chose de réel. Ce projet va te montrer de manière tangible ce que tu es capable de produire avec les outils que tu viens d'apprendre. Et surtout, le résultat sera un élément concret que tu pourras montrer — un premier morceau de portfolio.</p>
<p><strong>Ce que tu vas ressentir</strong> : Si c'est ta première fois, tu vas probablement être bluffé par la vitesse à laquelle tu vas produire quelque chose de professionnel. Ce sentiment de "wahou, j'ai vraiment fait ça en 30 minutes ?" — c'est exactement ça. C'est le moment où l'IA passe de concept abstrait à outil concret dans ta tête.</p>

<h2>Le projet : Créer une page de vente pour un service IA</h2>
<p>Tu vas créer une page web complète qui présente un service d'automatisation IA pour les entreprises locales. Ce n'est pas un exercice académique — c'est exactement le type de projet que tu pourras vendre à des clients dans quelques semaines, pour 800 à 2 000€.</p>
<p><strong>Pourquoi une page de vente ?</strong> Parce que c'est le livrable le plus demandé et le plus facile à comprendre. Tout entrepreneur a besoin d'une page web pour présenter ses services. Et quand cette page est créée en quelques heures au lieu de plusieurs semaines, le client est impressionné — et satisfait.</p>
<p><strong>Le scénario</strong> : Imagine qu'un restaurateur local vient te voir et dit "Je veux un site web qui présente mes services d'automatisation IA — chatbot WhatsApp pour les réservations, réponses automatiques aux avis Google, et newsletter hebdomadaire." Tu vas créer exactement ça.</p>

<h2>Étape 1 : Définir le brief avec Claude</h2>
<p>Ouvre Claude.ai et commence par la phase de réflexion stratégique. C'est l'étape que beaucoup de débutants sautent — ils se jettent directement dans la création. Ne fais pas cette erreur. Un bon brief, c'est 50% du travail.</p>
<p>Demande à Claude :</p>
<p><em>"Je veux créer une page de vente pour un service d'automatisation IA destiné aux restaurants locaux. Le service propose : chatbot WhatsApp pour les réservations, réponses automatiques aux avis Google, et newsletter hebdomadaire générée par IA. Aide-moi à structurer la page : sections, arguments de vente, appels à l'action. La cible est un restaurateur occupé qui n'a pas le temps de gérer sa communication digitale."</em></p>
<p>Claude va te proposer une structure complète. Mais ne t'arrête pas là — affine-la ensemble :</p>
<ul>
<li>"Ajoute une section sur les résultats chiffrés — combien de temps le restaurateur va gagner"</li>
<li>"Propose 3 formules de prix différentes (Basic, Pro, Premium)"</li>
<li>"Écris les textes de chaque section en utilisant un ton professionnel mais accessible"</li>
</ul>
<p><strong>Conseil</strong> : Note les textes que Claude génère. Tu les réutiliseras à l'étape suivante. Cette phase de planification prend 10-15 minutes et t'en fait gagner 30 en évitant les allers-retours pendant la création.</p>

<h2>Étape 2 : Créer la page avec Claude Code</h2>
<p>Ouvre ton terminal, navigue vers un dossier de ton choix, et lance Claude Code :</p>
<ol>
<li><code>mkdir mon-premier-projet && cd mon-premier-projet</code></li>
<li><code>claude</code></li>
<li>Dis à Claude Code : "Crée une landing page moderne et responsive en HTML/CSS/JS pour un service d'automatisation IA pour restaurants. Design sombre et professionnel avec accent bleu. Inclus : hero section avec une accroche percutante, 3 bénéfices avec icônes, section pricing avec 3 formules, FAQ avec accordéon, formulaire de contact. Le design doit être professionnel, moderne, avec des animations subtiles au scroll."</li>
</ol>
<p><strong>Ce qui va se passer</strong> : Claude Code va créer un (où plusieurs) fichier(s) HTML, CSS et éventuellement JS directement dans ton dossier. Tu verras les fichiers se créer en temps réel dans le terminal. Le processus prend environ 2-5 minutes pour une page complète.</p>
<p><strong>Astuce</strong> : Si tu as déjà les textes de l'étape 1, donne-les à Claude Code : "Utilise ces textes pour le contenu de la page : [colle les textes]". Le résultat sera plus cohérent et plus rapide.</p>

<h2>Étape 3 : Itérer et améliorer</h2>
<p>Le premier résultat ne sera jamais parfait — et c'est tout à fait normal ! Même un designer senior ne sort jamais une version finale du premier coup. L'art de travailler avec l'IA, c'est l'itération. C'est un dialogue créatif, pas une commande one-shot.</p>
<p>Voici des exemples de demandes d'amélioration à faire à Claude Code :</p>
<ul>
<li>"Change la couleur d'accent en vert émeraude (#2ecc71) au lieu du bleu"</li>
<li>"Ajoute 3 témoignages clients fictifs avec des photos placeholder, des noms et des étoiles"</li>
<li>"Rends le formulaire plus visible en le mettant sur un fond contrasté"</li>
<li>"Ajoute des animations d'apparition au scroll sur les sections (fade-in et slide-up)"</li>
<li>"Optimisé le responsive pour mobile — le menu doit devenir un hamburger menu"</li>
<li>"Ajoute une section 'Avant/Après' qui compare la vie du restaurateur sans et avec le service"</li>
</ul>
<p>Chaque demande améliore le résultat. En 30-45 minutes d'itérations, tu as une page qui aurait pris 2-3 jours à un développeur junior. Et le résultat est souvent meilleur, parce que Claude a vu des milliers de landing pages performantes pendant son entraînement.</p>
<p><strong>Règle des 5 itérations</strong> : En général, 5 cycles d'amélioration suffisent pour passer d'un premier jet correct à un résultat professionnel. Au-delà de 10 itérations, tu risques de tourner en rond. Si après 10 itérations tu n'es pas satisfait, recommence avec un prompt initial plus précis.</p>

<h2>Étape 4 : Analyser et apprendre</h2>
<p>Regarde le code généré. Tu ne comprendras peut-être pas tout, et c'est normal à ce stade. Mais prends le temps de noter quelques éléments :</p>
<ul>
<li><strong>La structure HTML</strong> — Repère les sections (<code>&lt;section&gt;</code>), les divisions (<code>&lt;div&gt;</code>), les classes CSS. C'est le squelette de la page.</li>
<li><strong>Le CSS</strong> — Regarde comment les couleurs sont définies, comment les espacements fonctionnent, comment le responsive est géré avec les media queries.</li>
<li><strong>Le JavaScript</strong> — Si Claude a ajouté des animations où des interactions (menu mobile, accordéon FAQ), regarde comment elles sont implémentées.</li>
</ul>
<p>Tu n'as pas besoin de tout comprendre maintenant — le Module 5 t'apprendra les compétences techniques en détail. Pour l'instant, concentre-toi sur le résultat : tu viens de créer quelque chose de concret, de professionnel, et de potentiellement vendable avec l'IA.</p>
<p><strong>Astuce d'apprentissage</strong> : Demande à Claude Code "Explique-moi la structure de ce fichier HTML section par section, comme si j'étais débutant". C'est une excellente manière d'apprendre en contexte — tu apprends sur du code que TU as contribué à créer, pas sur un exemple générique.</p>

<h2>Ce que tu viens d'accomplir</h2>
<p>En une seule leçon, tu as :</p>
<ol>
<li><strong>Utilisé Claude.ai pour la stratégie et la planification</strong> — Tu as transformé une idée vague en un brief structuré et actionnable.</li>
<li><strong>Utilisé Claude Code pour la création technique</strong> — Tu as produit une page web professionnelle sans écrire une seule ligne de code toi-même.</li>
<li><strong>Itéré et amélioré un livrable</strong> — Tu as appris le workflow fondamental de travail avec l'IA : première version → feedback → amélioration → résultat final.</li>
<li><strong>Créé un élément de portfolio</strong> — Tu as quelque chose de concret à montrer. Même si c'est un exercice, c'est une preuve tangible de ta capacité à produire avec l'IA.</li>
</ol>
<p>Prends un moment pour apprécier ce que tu viens de faire. Il y a quelques années, créer une page web professionnelle nécessitait des semaines de travail et des compétences techniques avancées. Tu viens de le faire en une heure, depuis zéro.</p>

<blockquote>C'est exactement ce workflow que tu utiliseras avec tes futurs clients. La seule différence, c'est qu'ils te paieront pour le faire.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Suis les étapes ci-dessus et crée ta propre landing page avec Claude Code.</li>
<li>Choisis un secteur différent de celui de l'exemple (coiffeur, plombier, coach, photographe).</li>
<li>Fais au moins 5 itérations pour améliorer le résultat.</li>
<li>Prends un screenshot du résultat final — c'est ton premier élément de portfolio.</li>
<li>Bonus : déploie la page gratuitement sur Netlify où Vercel et partage le lien.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 2 : Prompt Engineering et Skills Claude (7 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 7,
    module: 2,
    title: "Les bases du prompting : structure, clarté, contexte",
    slug: "bases-prompting-structure-clarte",
    duration: "50 min",
    description: "Apprendre à formuler des prompts efficaces pour obtenir les meilleurs résultats.",
    content: `<h2>Un prompt, c'est un brief</h2>
<p>Pense à un prompt comme un brief que tu donnes à un freelance. C'est l'analogie la plus importante de toute cette formation, alors grave-la dans ta mémoire. Plus ton brief est clair, précis et bien structuré, meilleur sera le résultat. Un mauvais brief = un mauvais résultat, peu importe le talent du freelance — et peu importe la puissance du modèle IA.</p>
<p>Imagine que tu engages un graphiste freelance pour créer un logo. Si tu lui dis juste "fais-moi un logo", tu vas recevoir quelque chose de totalement aléatoire — peut-être beau, peut-être horrible, mais certainement pas ce que tu avais en tête. En revanche, si tu lui dis "je veux un logo minimaliste pour une agence d'automatisation IA, dans des tons de bleu foncé et blanc, inspiré de la géométrie, sans illustration, juste des lettres stylisées, au format SVG", tu vas recevoir quelque chose de beaucoup plus proche de ta vision.</p>
<p>C'est exactement pareil avec Claude. La qualité de ton prompt détermine directement la qualité du résultat. Et la bonne nouvelle, c'est que le prompting est une compétence qui s'apprend et se maîtrise. C'est d'ailleurs ce qui te différenciera d'un utilisateur lambda.</p>
<p><strong>Fait marquant</strong> : Des études montrent que la différence entre un prompt basique et un prompt optimisé peut générer une amélioration de 50 à 300% dans la qualité du résultat. Ce n'est pas marginal — c'est la différence entre un livrable amateur et un livrable professionnel.</p>

<h2>Les 4 composantes d'un bon prompt</h2>

<h3>1. Le rôle</h3>
<p>Dis à Claude QUI il doit être. Ça cadre immédiatement le ton, le vocabulaire et le niveau d'expertise. C'est comme choisir le bon interlocuteur pour un problème donné — tu ne parlerais pas de fiscalité à un graphiste.</p>
<p><strong>Mauvais</strong> : "Écris un email"</p>
<p><strong>Bon</strong> : "Tu es un copywriter expert en B2B SaaS avec 10 ans d'expérience. Écris un email de prospection pour un outil de gestion de projet destiné aux agences de 10-50 personnes."</p>
<p><strong>Pourquoi ça marché</strong> : Quand tu dis à Claude qu'il est un "copywriter expert en B2B SaaS", il va puiser dans les patterns et le vocabulaire spécifiques à ce domaine. Le résultat sera radicalement différent — plus professionnel, plus ciblé, avec les bons buzzwords et la bonne structure. C'est comme activer un "mode expert" caché.</p>
<p><strong>Exemples de rôles puissants</strong> :</p>
<ul>
<li>"Tu es un consultant McKinsey spécialisé dans la transformation digitale des PME" — Pour des analyses stratégiques.</li>
<li>"Tu es un développeur senior fullstack avec 15 ans d'expérience en React et Node.js" — Pour du code de qualité production.</li>
<li>"Tu es un rédacteur web SEO qui travaille pour les plus grandes marques françaises" — Pour du contenu optimisé.</li>
</ul>

<h3>2. Le contexte</h3>
<p>Donne TOUTES les informations pertinentes. Claude ne peut pas deviner ce que tu ne lui dis pas. Il ne te connaît pas, il ne connaît pas ton entreprise, il ne connaît pas ton client, il ne connaît pas ton marché. Tout ce qu'il sait, c'est ce que tu lui écris dans cette conversation.</p>
<p><strong>Mauvais</strong> : "Fais-moi un plan marketing"</p>
<p><strong>Bon</strong> : "Je lance une agence d'automatisation IA qui cible les PME dans le secteur de la restauration en Île-de-France. Budget marketing : 500€/mois. Objectif : 3 clients en 60 jours. Je suis seul, sans employé. Ma force : je peux livrer en 7 jours là où mes concurrents mettent 3 mois. Mon réseau actuel : 200 contacts LinkedIn dans le secteur food tech."</p>
<p><strong>Astuce</strong> : Quand tu prépares un prompt, pose-toi la question "Est-ce qu'un humain compétent pourrait me donner une bonne réponse avec seulement ces informations ?" Si la réponse est non, ajoute du contexte. Si tu ne donnerais pas un brief aussi vague à un freelance, ne le donne pas à Claude.</p>

<h3>3. La tâche</h3>
<p>Sois précis sur ce que tu veux. Spécifie le format, la longueur, le style, le nombre d'éléments. Ne laisse rien au hasard.</p>
<p><strong>Mauvais</strong> : "Aide-moi avec mon site"</p>
<p><strong>Bon</strong> : "Écris 5 accroches alternatives pour ma page d'accueil. Chaque accroche doit faire maximum 10 mots, utiliser un verbe d'action, s'adresser directement au restaurateur en le tutoyant, et mettre en avant le gain de temps. Formate-les en liste numérotée avec une brève justification pour chaque accroche."</p>
<p><strong>La différence est flagrante</strong> : Le premier prompt peut donner n'importe quoi. Le second va produire exactement ce que tu veux, du premier coup. C'est 30 secondes de rédaction en plus pour un résultat 10 fois meilleur.</p>

<h3>4. Les contraintes</h3>
<p>Définis les limites : ce qu'il ne faut PAS faire, les règles à respecter, le format de sortie. Les contraintes sont souvent ce qui différencie un résultat correct d'un résultat excellent.</p>
<p>"Ne dépasse pas 200 mots. N'utilise pas de jargon technique — le lecteur est un restaurateur qui ne connaît rien à l'IA. Formate en bullet points. Inclus un appel à l'action concret à la fin. Ne mentionne pas de prix. Utilise le vouvoiement."</p>
<p><strong>Astuce avancée</strong> : Les contraintes négatives ("ne fais PAS") sont souvent plus utiles que les instructions positives. Dire "N'utilise pas de jargon technique" est plus efficace que "Utilise un langage simple", parce que ça élimine explicitement un problème courant.</p>

<h2>Le framework CREA</h2>
<p>Pour structurer rapidement n'importe quel prompt, utilise ce framework mnémotechnique. CREA est ton arme secrète — quand tu ne sais pas par où commencer, pense CREA :</p>
<ul>
<li><strong>C</strong>ontexte : Qui tu es, dans quelle situation tu te trouves, quel est le projet, qui est le client</li>
<li><strong>R</strong>ôle : Qui Claude doit être, quelle expertise il doit utiliser</li>
<li><strong>E</strong>xécution : Ce qu'il doit faire précisément, étape par étape</li>
<li><strong>A</strong>ttentes : Format, longueur, style, contraintes, ce qu'il ne doit PAS faire</li>
</ul>
<p><strong>Exemple CREA complet</strong> :</p>
<p><em>"[C] Je suis le fondateur d'une agence IA qui cible les restaurants en Île-de-France. Mon client est un restaurant italien familial avec 40 couverts qui n'a aucune présence digitale.</em></p>
<p><em>[R] Tu es un consultant en marketing digital spécialisé dans la restauration.</em></p>
<p><em>[E] Crée un plan d'action marketing sur 30 jours pour ce client, avec des actions concrètes semaine par semaine, les outils à utiliser, et les résultats attendus.</em></p>
<p><em>[A] Format : tableau avec colonnes Semaine, Action, Outil, Résultat attendu. Maximum 20 actions au total. Priorité : Google Business Profile et avis clients. Pas de publicité payante (budget limité)."</em></p>
<p>Un prompt comme ça va produire un résultat professionnel que tu pourrais directement présenter à un client. Et tu peux le rédiger en 2 minutes.</p>

<h2>Erreurs courantes à éviter</h2>
<ul>
<li><strong>Trop vague</strong> : "Aide-moi" → Claude ne sait pas par où commencer et va te poser des questions où donner une réponse trop générale. Sois spécifique dès le départ.</li>
<li><strong>Trop de choses d'un coup</strong> : Demander 10 tâches différentes dans un seul message. Mieux vaut découper en étapes. D'abord la structure, puis le contenu, puis la mise en forme. Claude gère mieux les tâches focalisées.</li>
<li><strong>Pas de format spécifié</strong> : Si tu ne dis rien sur le format, Claude choisit un format par défaut qui n'est peut-être pas celui que tu veux. Tu voulais un tableau ? Tu auras peut-être un paragraphe. Spécifie toujours le format attendu.</li>
<li><strong>Ignorer le contexte</strong> : Si Claude fait une erreur où donne une réponse à côté, c'est souvent parce qu'il lui manque une information clé. Avant de reformuler ta demande, demande-toi "est-ce que j'ai donné assez de contexte ?"</li>
<li><strong>Accepter le premier résultat</strong> : Le premier résultat est rarement le meilleur. Prends l'habitude de toujours demander au moins une itération : "C'est bien, mais améliore le point 3 et rends le ton plus dynamique." L'itération est la clé.</li>
</ul>
<p><strong>Attention</strong> : Ne tombe pas dans l'excès inverse — un prompt de 2 pages est souvent aussi inefficace qu'un prompt de 2 mots. L'idéal est un prompt de 5-15 lignes qui couvre les 4 composantes (rôle, contexte, tâche, contraintes) sans fioritures. Concis ET complet.</p>

<blockquote>La qualité de tes résultats est directement proportionnelle à la qualité de tes prompts. Investir 2 minutes de plus dans ton prompt te fait gagner 20 minutes de corrections.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Prends un prompt que tu as déjà utilisé et reformule-le avec le framework CREA.</li>
<li>Compare les deux résultats (avant/après).</li>
<li>Écris 3 prompts pour ces situations en utilisant le framework CREA :
  <ul>
  <li>Créer un email de bienvenue pour une newsletter</li>
  <li>Générer un plan de contenu pour une semaine de posts LinkedIn</li>
  <li>Rédiger une description de service pour une page web</li>
  </ul>
</li>
</ol>`,
  },
  {
    order: 8,
    module: 2,
    title: "Techniques avancées : chain-of-thought, few-shot, role-playing",
    slug: "techniques-avancees-cot-fewshot",
    duration: "55 min",
    description: "Maîtriser les techniques de prompting avancées pour des résultats professionnels.",
    content: `<h2>Aller au-delà des bases</h2>
<p>Les techniques avancées de prompting transforment Claude d'un simple assistant en un expert capable de raisonnements complexes et de résultats professionnels. Ce ne sont pas des gadgets théoriques — ce sont les techniques utilisées par les meilleurs prompt engineers au monde, ceux qui facturent entre 150 et 500€ de l'heure en tant que consultants IA.</p>
<p>Si la leçon précédente t'a appris à écrire un "bon" prompt, cette leçon va t'apprendre à écrire des prompts exceptionnels. La différence entre un bon prompt et un prompt exceptionnel, c'est souvent la différence entre un livrable "correct" et un livrable qui impressionne ton client au point qu'il te recommande à trois de ses contacts.</p>
<p><strong>Un mot sur la maîtrise</strong> : Ces techniques demandent de la pratique. Tu ne vas pas les maîtriser en les lisant une seule fois. L'objectif de cette leçon est de te donner les outils — la maîtrise viendra avec la répétition dans tes projets réels. Pense à ça comme apprendre les accords de guitare : connaître les positions est une chose, jouer une chanson fluide en est une autre.</p>

<h2>Chain-of-Thought (Raisonnement étape par étape)</h2>
<p>C'est probablement la technique la plus puissante et la plus facile à utiliser. Au lieu de demander une réponse directe, tu demandes à Claude de raisonner étape par étape. Ça améliore drastiquement la qualité des réponses complexes.</p>
<p><strong>Sans CoT</strong> : "Quel prix dois-je fixer pour mon service d'automatisation IA ?"</p>
<p><strong>Avec CoT</strong> : "Je veux fixer le prix de mon service d'automatisation IA pour les restaurants locaux. Raisonne étape par étape : 1) analyse mes coûts (temps passé, outils, serveur), 2) évalue la valeur perçue par le restaurateur (combien de temps et d'argent il va économiser), 3) compare avec le marché (que facturent les agences web classiques pour un service similaire), et 4) propose 3 options de pricing avec justification détaillée pour chacune."</p>
<p><strong>Pourquoi ça marché</strong> : Le simple fait d'ajouter "raisonne étape par étape" améliore la qualité des réponses de 40 à 60% sur les tâches complexes (c'est une statistique mesurée par les chercheurs, pas une estimation). C'est parce que tu forces Claude à "montrer son travail" plutôt que de sauter directement à la conclusion. Comme un élève en maths : s'il écrit son raisonnement, il fait moins d'erreurs que s'il essaie de trouver la réponse de tête.</p>
<p><strong>Quand utiliser le CoT</strong> :</p>
<ul>
<li>Analyses stratégiques et comparaisons (choix d'une niche, comparaison de solutions techniques)</li>
<li>Calculs de pricing et business plans</li>
<li>Diagnostics de problèmes (débugger du code, analyser pourquoi une campagne marketing ne marché pas)</li>
<li>Décisions complexes avec plusieurs critères (choix d'un outil, d'une stack technique, d'une stratégie)</li>
</ul>
<p><strong>Astuce pro</strong> : Tu peux combiner le CoT avec un format de sortie. "Raisonne étape par étape dans un premier bloc, puis donne-moi ta recommandation finale dans un encadré séparé." Comme ça, tu as le raisonnement détaillé ET la conclusion claire.</p>

<h2>Few-Shot Prompting (Apprentissage par l'exemple)</h2>
<p>Donne des exemples de ce que tu attends AVANT de poser ta question. Claude comprend le pattern et le réplique. C'est comme montrer à un employé "voilà comment on fait ici" plutôt que de lui expliquer abstraitement.</p>
<p><strong>Exemple concret</strong> :</p>
<p><em>"Voici comment je formule mes offres clients :</em></p>
<p><em>Exemple 1 : 'Automatisation de vos réponses clients WhatsApp — Gagnez 2h par jour, 0 message raté, satisfaction client +40%'</em></p>
<p><em>Exemple 2 : 'Dashboard analytique temps réel — Décisions en 5 secondes au lieu de 2 heures, données toujours à jour'</em></p>
<p><em>Maintenant, écris 5 formulations pour : un service de génération de rapports hebdomadaires automatisés."</em></p>
<p>Claude va reproduire exactement le style, la structure et le ton de tes exemples. Il va comprendre que tu veux : un titre de service, un tiret, puis 2-3 bénéfices concrets avec des chiffres. Plus tu donnes d'exemples, plus le résultat sera précis et cohérent.</p>
<p><strong>Pourquoi c'est si puissant</strong> : Tu n'as plus besoin d'expliquer longuement ce que tu veux. Les exemples MONTRENT ce que tu veux — et Claude comprend le pattern implicite. C'est la technique favorite des créateurs de contenu qui veulent maintenir un style cohérent sur des dizaines de textes.</p>
<p><strong>Conseil pratique</strong> : Crée-toi une bibliothèque d'exemples pour tes tâches récurrentes. Si tu écris souvent des emails de prospection, garde 3-4 de tes meilleurs emails en template. À chaque nouveau prospect, tu les donnes en exemple à Claude et il produit un email dans ton style en 30 secondes.</p>
<p><strong>Nombre idéal d'exemples</strong> : 2-3 exemples suffisent pour la plupart des cas. Au-delà de 5, Claude peut devenir trop rigide et perdre en créativité. En dessous de 2, il n'a pas assez de données pour identifier le pattern de manière fiable.</p>

<h2>Role-Playing (Jeu de rôle)</h2>
<p>Assigne un rôle très spécifique à Claude pour obtenir une expertise pointue. Tu as vu les rôles basiques dans la leçon précédente — ici, on passe au niveau supérieur.</p>
<p><strong>Basique</strong> : "Tu es un expert marketing"</p>
<p><strong>Avancé</strong> : "Tu es Alex Hormozi — entrepreneur à 100M$ de CA, expert en offres irrésistibles et en acquisition clients pour les entreprises de services. Tu parles de manière directe, sans fioritures. Tu utilises des exemples concrets avec des chiffres. Tu te concentres sur ce qui génère du revenu immédiatement, pas sur la théorie. Tu n'as aucune patience pour les excuses où les 'oui mais'. Quand tu donnes un conseil, tu donnes aussi un plan d'action en 3 étapes."</p>
<p>Le role-playing avancé permet d'obtenir des perspectives et des conseils que tu n'aurais JAMAIS eus avec un prompt générique. C'est comme la différence entre demander un conseil à un ami et le demander à un mentor qui a 20 ans d'expérience dans ton domaine.</p>
<p><strong>Cas d'usage puissants</strong> :</p>
<ul>
<li><strong>Simulation de prospect</strong> : "Tu es un restaurateur sceptique qui vient de recevoir ma proposition commerciale. Analyse-la et dis-moi toutes tes objections." → Tu anticipes les objections de tes vrais clients.</li>
<li><strong>Expertise technique</strong> : "Tu es un architecte logiciel senior. Critique cette architecture et propose des améliorations." → Tu obtiens un audit technique gratuit.</li>
<li><strong>Coaching business</strong> : "Tu es un business coach qui a accompagné 200 freelances vers 10K€/mois. Analyse ma situation et donne-moi un plan d'action." → Tu obtiens du coaching personnalisé.</li>
</ul>
<p><strong>Attention</strong> : Ne demande pas à Claude de jouer une vraie personne vivante pour des conseils critiques (financiers, juridiques, médicaux). Claude n'est pas cette personne et ses conseils ne remplacent pas un vrai expert. Le role-playing est un outil de réflexion et de brainstorming, pas un substitut à un professionnel qualifié.</p>

<h2>Meta-Prompting</h2>
<p>C'est la technique la plus "méta" : tu demandes à Claude d'améliorer tes propres prompts. C'est de la méta-récursion et c'est extrêmement puissant — tu utilises l'IA pour devenir meilleur à utiliser l'IA.</p>
<p><em>"Voici mon prompt : [colle ton prompt]. Analyse-le et propose 3 versions améliorées qui donneront de meilleurs résultats. Pour chaque version, explique précisément pourquoi elle est meilleure que l'originale et quel type de résultat elle va produire."</em></p>
<p><strong>Pourquoi c'est un game-changer</strong> : Claude a vu des millions de prompts et leurs résultats pendant son entraînement. Il sait ce qui fonctionne et ce qui ne fonctionne pas. Lui demander d'améliorer ton prompt, c'est comme demander à un chef cuisinier de corriger ta recette — il voit immédiatement ce qui manque.</p>
<p><strong>Quand l'utiliser</strong> : À chaque fois que tu as un prompt important — un prompt que tu vas réutiliser souvent où un prompt pour un livrable client critique. Investir 2 minutes dans le meta-prompting peut transformer un prompt médiocre en un prompt excellent.</p>

<h2>Output Structuring (Formatage de sortie)</h2>
<p>Spécifie exactement le format que tu veux. Claude est excellent pour respecter des structures précises — et c'est un levier que beaucoup d'utilisateurs sous-exploitent. Un résultat bien formaté est plus facile à utiliser, plus professionnel à livrer, et plus rapide à intégrer dans ton workflow.</p>
<ul>
<li><strong>JSON</strong> : "Réponds en JSON avec les clés : titre, description, prix, bénéfices" — Parfait pour alimenter des bases de données, des CRM, où des applications.</li>
<li><strong>Tableau Markdown</strong> : "Formate en tableau Markdown avec les colonnes : Tâche, Priorité, Deadline, Responsable" — Idéal pour la gestion de projet et les rapports.</li>
<li><strong>Structure HTML</strong> : "Structure ta réponse avec des H2 pour les sections, des bullet points pour les détails, et un résumé en gras à la fin" — Parfait pour du contenu web prêt à publier.</li>
<li><strong>CSV</strong> : "Donne-moi les résultats en format CSV avec séparateur point-virgule" — Idéal pour importer dans Excel où Google Sheets.</li>
</ul>
<p><strong>Astuce avancée</strong> : Tu peux combiner le formatage avec un template. "Voici le format exact que je veux : [donne un exemple avec des placeholders]. Remplis ce template avec les données du restaurant Le Bon Goût." Claude va remplir ton template exactement comme tu le veux, à chaque fois.</p>

<blockquote>Ces techniques ne sont pas de la théorie. Ce sont des outils concrets que tu utiliseras quotidiennement avec tes clients. Maîtriser le prompting avancé, c'est livrer des résultats 3x meilleurs en 2x moins de temps.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li><strong>Chain-of-Thought</strong> : Demande à Claude de t'aider à choisir entre 3 niches pour ton agence IA. Utilise "raisonne étape par étape en analysant le potentiel, la concurrence, et ta capacité à délivrer".</li>
<li><strong>Few-Shot</strong> : Écris 2 exemples de posts LinkedIn dans ton style, puis demande à Claude d'en générer 5 autres dans le même style.</li>
<li><strong>Role-Playing</strong> : Simule un appel de vente. Claude joue le prospect sceptique, et toi tu pitches ton service IA. Demande-lui de te noter et de te donner des feedbacks.</li>
<li><strong>Meta-Prompting</strong> : Prends le pire prompt que tu as écrit récemment et demande à Claude de l'améliorer.</li>
</ol>`,
  },
  {
    order: 9,
    module: 2,
    title: "System prompts et personnalisation avancée",
    slug: "system-prompts-personnalisation",
    duration: "50 min",
    description: "Créer des system prompts puissants pour personnaliser le comportement de Claude.",
    content: `<h2>Qu'est-ce qu'un system prompt ?</h2>
<p>Un system prompt, c'est un ensemble d'instructions données à Claude AVANT toute conversation. Imagine que tu embauches un nouvel employé : avant qu'il commence à travailler, tu lui donnes un briefing complet sur l'entreprise, sa mission, les règles à suivre, et comment il doit se comporter. Le system prompt, c'est exactement ce briefing d'intégration.</p>
<p>Dans claude.ai, tu le configures dans les instructions d'un Project. Dans l'API, c'est le paramètre "system". Dans Claude Code, c'est le fichier CLAUDE.md. Le system prompt est toujours actif pendant toute la conversation — Claude le "garde en tête" à chaque réponse qu'il donne.</p>
<p><strong>Analogie parlante</strong> : Sans system prompt, Claude est comme un médecin généraliste — compétent sur beaucoup de sujets, mais spécialiste de rien. Avec un bon system prompt, il devient un cardiologue expert — laser-focalisé sur un domaine précis avec une expertise pointue. La différence de qualité dans les réponses est spectaculaire.</p>
<p><strong>Pourquoi c'est crucial pour ton business</strong> : Quand tu crées des solutions IA pour tes clients (chatbots, assistants, automatisations), le system prompt est le cœur de ton produit. C'est ce qui fait que le chatbot d'un restaurant répond comme un expert en restauration, pas comme un généraliste qui parle aussi bien de plomberie que de cuisine. Ton system prompt, c'est ta propriété intellectuelle — c'est ce pour quoi le client te paye.</p>

<h2>Pourquoi c'est si puissant</h2>
<p>Sans system prompt, Claude est un généraliste qui improvise. Avec un bon system prompt, il devient un spécialiste laser-focused sur TA tâche. La transformation est radicale :</p>
<p>Exemples de transformation :</p>
<ul>
<li><strong>Généraliste → Expert en rédaction de propositions commerciales B2B</strong> — Claude va automatiquement structurer ses réponses comme des propositions professionnelles, avec executive summary, analyse du besoin, solution proposée, tarification, et prochaines étapes.</li>
<li><strong>Généraliste → Développeur senior spécialisé Next.js et Tailwind</strong> — Claude va écrire du code idiomatique, suivre les best practices du framework, et proposer des solutions architecturales cohérentes.</li>
<li><strong>Généraliste → Consultant SEO local pour entreprises de services</strong> — Claude va se concentrer sur Google Business Profile, les avis clients, le SEO on-page local, et les stratégies spécifiques aux commerces de proximité.</li>
</ul>
<p><strong>La différence mesurable</strong> : Avec un system prompt bien écrit, tu obtiens des réponses pertinentes dès le premier message, sans avoir à re-contextualiser. Sans system prompt, tu passes souvent 3-4 messages à "calibrer" Claude avant d'obtenir le bon ton et le bon niveau. Sur un projet avec 50 conversations, ça représente des heures de gagnées.</p>

<h2>Structure d'un system prompt efficace</h2>
<p>Un bon system prompt suit une structure en 5 blocs. Chaque bloc à un rôle précis, et l'ordre compte — Claude accorde plus d'attention au début du system prompt qu'à la fin.</p>
<ol>
<li><strong>Identité</strong> : Qui est Claude dans ce contexte. "Tu es l'assistant IA de l'agence OpexIA, spécialisé dans l'automatisation pour les PME." Sois spécifique — plus l'identité est précise, meilleur sera le comportement.</li>
<li><strong>Expertise</strong> : Ce qu'il sait et ce qu'il maîtrise. "Tes domaines d'expertise : chatbots conversationnels, automatisation de newsletters, CRM intelligent, landing pages optimisées, SEO local." Ça permet à Claude de puiser dans les bonnes connaissances.</li>
<li><strong>Comportement</strong> : Comment il doit répondre — ton, style, longueur, format par défaut. "Tu es direct et concis. Tu donnes toujours des chiffres et des exemples concrets. Tu évites les phrases creuses et le jargon. Tu termines chaque réponse par une question où une action suivante."</li>
<li><strong>Règles</strong> : Ce qu'il doit toujours faire où ne jamais faire. "Tu ne recommandes jamais de solutions qui nécessitent un développeur full-time. Tu proposes toujours au moins 2 alternatives. Tu n'utilises jamais les mots 'synergies', 'disruption' où 'paradigme'." Les règles sont des garde-fous qui évitent les dérives.</li>
<li><strong>Contexte business</strong> : Informations sur ton entreprise, tes clients, ton marché. "Notre cible : restaurateurs, artisans et coachs en France. Budget moyen de nos clients : 500-2000€ par projet. Notre promesse : livraison en 7 jours." Ce contexte enrichit chaque réponse.</li>
</ol>
<p><strong>Astuce de structure</strong> : Utilise des titres en Markdown (## Identité, ## Règles, etc.) dans ton system prompt pour le rendre plus lisible et aider Claude à mieux s'organiser. Un system prompt structuré est mieux suivi qu'un bloc de texte monolithique.</p>

<h2>Exemple complet</h2>
<p>Voici un system prompt professionnel que tu peux adapter directement :</p>
<p><em>"## Identité<br/>Tu es l'assistant IA de l'agence OpexIA. Tu es expert en création de solutions d'automatisation pour les PME françaises.</em></p>
<p><em>## Expertise<br/>Tes domaines : chatbots WhatsApp et Messenger, automatisation email et newsletter, CRM sur mesure, agents IA, landing pages à haute conversion, SEO local et Google Business Profile.</em></p>
<p><em>## Comportement<br/>Quand tu réponds : sois direct et va droit au but. Donne des chiffres concrets quand c'est possible (ex: 'ça prend environ 3h' plutôt que 'ça prend un peu de temps'). Utilise des exemples réels tirés du secteur du client. Propose toujours une action suivante concrète. Évite le jargon technique sauf si l'interlocuteur est clairement technique.</em></p>
<p><em>## Cible et marché<br/>Notre cible : restaurants, artisans, coachs et consultants en France. Budget moyen de nos clients : 500-2000€/projet. Notre différenciation : on livre en 7 jours, pas en 3 mois. On utilise l'IA pour automatiser, pas pour remplacer l'humain.</em></p>
<p><em>## Règles strictes<br/>- Ne recommande JAMAIS de solutions qui nécessitent un développeur full-time pour la maintenance<br/>- Privilégie les outils no-code/low-code quand c'est possible<br/>- Propose toujours des solutions déployables cette semaine<br/>- Ne donne pas de conseils juridiques, fiscaux où médicaux<br/>- Si tu n'es pas sûr d'une information, dis-le explicitement"</em></p>
<p><strong>Résultat</strong> : Avec ce system prompt, chaque conversation dans le Project démarre avec Claude qui "sait" déjà tout sur ton agence, tes clients, ton style de travail et tes contraintes. Tu peux directement dire "J'ai un prospect restaurateur qui veut un chatbot WhatsApp" et obtenir une réponse pertinente, sans aucune mise en contexte.</p>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Trop long</strong> : Un system prompt de 5 pages dilue les instructions importantes. Claude accorde plus d'attention aux premières lignes. Si tes règles critiques sont enfouies à la page 4, elles seront moins bien suivies. Vise 200-500 mots maximum pour le system prompt — concis mais complet.</li>
<li><strong>Contradictoire</strong> : "Sois concis" + "Donne des explications détaillées avec des exemples" = confusion garantie. Claude va osciller entre les deux directives. Sois cohérent dans tes instructions. Si tu veux des réponses détaillées, ne demande pas la concision.</li>
<li><strong>Trop restrictif</strong> : Ne bride pas Claude au point qu'il ne peut plus être utile. "Ne parle JAMAIS de prix, de délais, de technologie, de concurrents..." — si tu interdis tout, il ne reste rien. Les restrictions doivent être ciblées et justifiées.</li>
<li><strong>Pas mis à jour</strong> : Ton business évolue — nouveaux services, nouveaux clients, nouvelles expériences. Si ton system prompt date de 6 mois et que ton business a changé, les réponses de Claude seront décalées. Mets-le à jour au moins une fois par mois.</li>
<li><strong>Copié d'Internet sans adaptation</strong> : Les templates de system prompts trouvés sur Internet sont des points de départ, pas des produits finis. Adapte toujours à TON contexte, TON style, TES clients. Un system prompt générique donne des résultats génériques.</li>
</ul>
<p><strong>Conseil d'expert</strong> : Teste ton system prompt avec 5 questions très différentes avant de le valider. Si les réponses sont cohérentes en ton, en style et en expertise, c'est bon. Si une réponse semble "hors personnage", ajuste les instructions concernées.</p>

<blockquote>Un bon system prompt est un investissement. Tu l'écris une fois et il améliore CHAQUE interaction pendant des mois.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Écris un system prompt complet pour ton futur assistant business IA. Inclus : identité, expertise, ton, règles, contexte.</li>
<li>Teste-le dans un Claude Project. Pose 5 questions variées et évalue si les réponses correspondent à tes attentes.</li>
<li>Ajuste le system prompt en fonction des résultats (trop formel ? pas assez précis ? trop général ?).</li>
<li>Crée un second system prompt pour un cas d'usage différent (ex: assistant de rédaction de contenu, assistant technique, etc.).</li>
</ol>`,
  },
  {
    order: 10,
    module: 2,
    title: "Claude Projects : contexte persistant et mémoire",
    slug: "claude-projects-contexte-memoire",
    duration: "50 min",
    description: "Exploiter les Projects Claude pour un workflow professionnel et productif.",
    content: `<h2>Projects = Ton QG par client</h2>
<p>Si tu retiens une seule chose de cette leçon, la voici : chaque client, chaque projet, chaque workflow mérite son propre Claude Project. C'est ce qui transforme Claude d'un outil ponctuel qu'on utilise de temps en temps en un vrai système de travail professionnel.</p>
<p><strong>L'analogie parfaite</strong> : Imagine que tu travailles dans un cabinet de conseil. Chaque client a son propre dossier physique — avec le brief, les specs, les comptes-rendus de réunion, les livrables. Quand tu passes d'un client à un autre, tu ouvres le bon dossier et tu as tout sous les yeux. Un Claude Project, c'est exactement ce dossier client — mais en version IA, où ton "collaborateur" (Claude) a lu et mémorisé chaque document avant même que tu ne lui poses une question.</p>
<p>Sans Projects, tu es comme un consultant qui arrive à chaque réunion sans dossier et qui doit tout réapprendre depuis le début. Avec Projects, tu es comme un consultant qui à un assistant qui a tout lu, tout mémorisé, et qui est prêt à travailler immédiatement.</p>
<p><strong>Impact concret sur ta productivité</strong> : Les utilisateurs qui utilisent les Projects rapportent un gain de temps de 30 à 50% par rapport à ceux qui utilisent des conversations isolées. Sur une semaine de travail, ça peut représenter une journée entière récupérée.</p>

<h2>Architecture d'un Project pro</h2>
<p>Voici comment structurer un Project pour un client — c'est un template que tu peux réutiliser pour chaque nouveau projet :</p>

<h3>Documents de référence</h3>
<p>Ce sont les fichiers que tu uploades dans le Project. Claude les a en permanence en mémoire dans chaque conversation.</p>
<ul>
<li><strong>Brief du client</strong> — Besoins, objectifs, problèmes actuels, budget, timeline. C'est le document fondateur.</li>
<li><strong>Specs techniques</strong> du projet — Si tu crées un chatbot, un site web où une automatisation, les spécifications détaillées vont ici.</li>
<li><strong>Exemples de livrables attendus</strong> — Si le client à des exemples de ce qu'il veut (un concurrent qu'il admire, un design qu'il aime), uploade-les.</li>
<li><strong>Guidelines de marque</strong> — Couleurs, typographies, ton de communication, logo. Essentiel pour la cohérence des livrables.</li>
<li><strong>Documents concurrentiels</strong> — Analyse des concurrents, captures d'écran de leurs sites, notes sur ce qu'ils font bien où mal.</li>
</ul>
<p><strong>Astuce</strong> : Nomme tes fichiers de manière descriptive. "brief-client-restaurant-le-bon-gout.pdf" est infiniment plus utile que "document.pdf". Claude utilise aussi les noms de fichiers pour comprendre le contexte.</p>

<h3>Instructions du Project</h3>
<p>C'est le system prompt adapté à ce projet spécifique. Combine le system prompt global de ton agence avec le contexte du client. Claude aura toujours ces instructions actives dans chaque conversation du Project.</p>
<p><strong>Exemple d'instructions de Project</strong> : "Tu es l'assistant IA dédié au projet Le Bon Goût. Le Bon Goût est un restaurant italien familial avec 40 couverts, situé à Lyon 6ème. Le propriétaire s'appelle Marco, il est débordé et n'a aucune présence digitale. Notre mission : créer un chatbot WhatsApp pour les réservations et un système de réponses automatiques aux avis Google. Budget : 1 500€. Deadline : 14 jours. Ton : professionnel mais chaleureux, comme Marco lui-même."</p>

<h3>Conversations organisées</h3>
<p>Chaque conversation dans le Project doit avoir un objectif clair et unique. Pense à chaque conversation comme une réunion — une réunion sans ordre du jour est une perte de temps.</p>
<ul>
<li>"Brainstorm architecture chatbot" — Pour définir les flux de conversation, les questions-réponses, les cas limites.</li>
<li>"Rédaction emails de prospection" — Pour créer les emails que tu enverras à des prospects similaires.</li>
<li>"Debug intégration API WhatsApp" — Pour résoudre les problèmes techniques d'intégration.</li>
<li>"Révision proposition commerciale v2" — Pour affiner ta proposition avant de l'envoyer au client.</li>
</ul>
<p><strong>Bonne pratique</strong> : Commence le nom de chaque conversation par un verbe d'action. "Brainstorm...", "Créer...", "Analyser...", "Debugger...", "Rédiger...". Ça rend ton historique scannable en un coup d'œil.</p>

<h2>Workflow concret pour un projet client</h2>
<p>Voici le workflow en 5 phases que tu suivras pour chaque projet client. C'est un processus éprouvé qui garantit des livrables de qualité :</p>
<ol>
<li><strong>Kick-off (Jour 1)</strong> : Crée le Project, uploade le brief client, écris les instructions détaillées. Passe 15-20 minutes sur cette étape — c'est un investissement qui te fait gagner des heures par la suite.</li>
<li><strong>Planification (Jour 1-2)</strong> : Première conversation — structure du projet, timeline, liste des livrables, choix techniques. Demande à Claude de créer un plan d'action détaillé jour par jour.</li>
<li><strong>Exécution (Jours 2-5)</strong> : Conversations séparées pour chaque livrable. Un livrable par conversation, pas de mélange. Utilise Claude Code pour le développement technique, claude.ai pour la stratégie et le contenu.</li>
<li><strong>Review (Jour 6)</strong> : Conversation de relecture et d'amélioration. Uploade tes livrables terminés et demande à Claude une revue critique : "Analyse ce livrable du point de vue du client. Quels sont les points faibles ? Que manque-t-il ?"</li>
<li><strong>Livraison (Jour 7)</strong> : Conversation finale pour préparer la présentation client. Demande à Claude de créer un récapitulatif de ce qui a été livré, un guide d'utilisation pour le client, et une liste de recommandations pour la suite.</li>
</ol>
<p><strong>Pourquoi ce workflow fonctionne</strong> : Chaque phase à un objectif clair, chaque conversation est focalisée, et le Project assure la continuité du contexte entre toutes les phases. Tu ne perds jamais le fil, et Claude non plus.</p>

<h2>Tips avancés</h2>
<ul>
<li><strong>Mettre à jour les documents</strong> : Si le scope change en cours de route (et ça arrive souvent), uploade les nouvelles specs dans le Project. Claude s'adapte immédiatement. Pense à supprimer les anciens documents obsolètes pour éviter la confusion.</li>
<li><strong>Versionner les instructions</strong> : Garde une copie de tes instructions de Project dans un document séparé (Google Docs, Notion, fichier texte). Si tu les modifies dans le Project, tu veux pouvoir revenir en arrière. Ajoute la date à chaque version : "Instructions v2 - 15 mars 2025".</li>
<li><strong>Limiter les documents</strong> : Uploade seulement ce qui est pertinent pour ce projet spécifique. Trop de documents = trop de bruit = réponses moins précises. Si un document n'est pas directement utile pour le projet en cours, ne l'uploade pas. Vise 3-7 documents maximum par Project.</li>
<li><strong>Nommer clairement</strong> : "Client Restaurant Le Bon Goût - Chatbot WhatsApp" est infiniment plus utile que "Nouveau projet 3". Quand tu auras 15 Projects actifs, tu apprécieras les noms descriptifs.</li>
<li><strong>Archiver les projets terminés</strong> : Quand un projet client est livré, note les leçons apprises dans une dernière conversation, puis archive le Project. Ton espace reste propre et organisé.</li>
</ul>

<h2>Exemple de template d'instructions</h2>
<p>Copie et adapte ce template pour chaque nouveau client. C'est ton point de départ standard — ajuste les détails pour chaque situation :</p>
<p><em>"## Projet : [Nom du projet]<br/>## Client : [Nom du client, secteur d'activité, taille de l'entreprise, localisation]<br/>## Objectif principal : [Ce qu'on doit livrer — sois précis]<br/>## Budget : [Montant total et éventuelle répartition]<br/>## Deadline : [Date de livraison finale]<br/>## Stack technique : [Outils et technologies utilisés]<br/>## Ton de communication : [Formel / décontracté / technique / accessible]<br/>## Contraintes : [Ce qu'il faut éviter, limitations techniques, préférences du client]<br/>## Livrables attendus : [Liste numérotée de tous les livrables avec description courte]<br/>## Notes particulières : [Tout ce qui est spécifique à ce client — ses pet peeves, ses préférences, ses demandes récurrentes]"</em></p>
<p><strong>Astuce finale</strong> : Après 2-3 projets, tu auras ton propre template rodé qui reflète exactement ton workflow. Ce template deviendra l'un de tes actifs les plus précieux — il te permettra de démarrer un nouveau projet en 10 minutes au lieu de 30.</p>

<blockquote>Un Project bien organisé te fait gagner des heures par semaine. C'est la différence entre un amateur qui "utilise ChatGPT" et un pro qui à un système.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un Claude Project pour un client fictif de ton choix (restaurateur, coach, avocat...).</li>
<li>Écris un brief client complet et uploade-le dans le Project.</li>
<li>Rédige les instructions du Project avec le template fourni.</li>
<li>Mène 3 conversations dans ce Project : planification, création d'un livrable, révision.</li>
<li>Note combien de fois tu as dû ré-expliquer du contexte (idéalement : zéro).</li>
</ol>`,
  },
  {
    order: 11,
    module: 2,
    title: "Créer ta première Skill Claude",
    slug: "créer-première-skill-claude",
    duration: "60 min",
    description: "Comprendre et créer des Skills Claude : SKILL.md, folder structure, YAML frontmatter.",
    content: `<h2>Les Skills : transformer des prompts en systèmes</h2>
<p>Les Skills sont la fonctionnalité la plus sous-estimée de Claude — et pourtant, c'est peut-être la plus révolutionnaire pour ton business. Une Skill, c'est un ensemble d'instructions packagées que Claude charge automatiquement quand c'est pertinent. Tu l'écris une fois, ça marché à chaque fois, de manière cohérente et fiable.</p>
<p>Plus besoin de re-expliquer tes préférences à chaque conversation. Plus besoin de copier-coller le même prompt à chaque utilisation. Tu le configures une fois, et Claude le mémorise pour toujours.</p>
<p><strong>L'analogie qui clarifie tout</strong> : Imagine un restaurant. Le chef à des recettes écrites — pas dans sa tête, mais sur papier, avec les ingrédients, les quantités, les étapes, les temps de cuisson. Grâce à ces recettes, n'importe quel cuisinier compétent peut reproduire le plat avec le même niveau de qualité. Une Skill, c'est une recette pour Claude. Tu la rédiges une fois, et Claude peut "cuisiner" le même résultat de manière consistante, à chaque utilisation.</p>
<p><strong>Pourquoi c'est un game-changer pour ton business</strong> : Quand tu crées une Skill, tu crées un <strong>actif réutilisable</strong>. Une Skill "audit SEO local" que tu crées pour un client restaurateur peut être réutilisée pour un client plombier, un client coiffeur, un client dentiste... Tu investis du temps une fois, et tu récoltes les bénéfices sur tous tes projets futurs. C'est le principe de scalabilité appliqué aux services IA.</p>

<h2>Anatomie d'une Skill</h2>
<p>Une Skill est un dossier sur ton ordinateur. C'est aussi simple que ça — pas de logiciel spécial, pas d'interface compliquée. Un dossier avec des fichiers à l'intérieur. Mais ne te laisse pas tromper par la simplicité technique : la puissance vient de ce que tu mets dedans.</p>
<p>Structure d'un dossier Skill :</p>
<ul>
<li><strong>SKILL.md</strong> (obligatoire) — Le fichier principal avec les instructions. C'est le cœur de ta Skill. Sans ce fichier, pas de Skill.</li>
<li><strong>scripts/</strong> (optionnel) — Scripts Python, Bash, JavaScript, etc. que la Skill peut exécuter. Par exemple, un script qui vérifie automatiquement le SEO d'un site web.</li>
<li><strong>références/</strong> (optionnel) — Documentation que Claude peut consulter quand il a besoin de détails. API docs, guides de style, checklists.</li>
<li><strong>assets/</strong> (optionnel) — Templates, icônes, exemples de livrables. Par exemple, un template de proposition commerciale que Claude remplit pour chaque client.</li>
</ul>
<p><strong>Exemple concret de structure</strong> :</p>
<pre>
audit-seo-local/
├── SKILL.md                    → Instructions principales
├── scripts/
│   └── check-google-business.py → Script de vérification
├── références/
│   ├── seo-checklist.md         → Checklist SEO complète
│   └── google-ranking-factors.md → Facteurs de ranking
└── assets/
    └── rapport-template.html    → Template du rapport client
</pre>

<h2>Le fichier SKILL.md</h2>
<p>Tout commence par le YAML frontmatter en haut du fichier. Le frontmatter, c'est un bloc de métadonnées entre deux lignes de <code>---</code>. Il dit à Claude QUOI est cette Skill et QUAND la charger.</p>
<p><code>---<br/>name: audit-seo-local<br/>description: Audite le SEO local d'une entreprise et génère un plan d'action priorisé. Use when user mentions 'SEO', 'Google Business', 'audit local', 'ranking Google', 'référencement local', or 'visibilité Google'.<br/>---</code></p>
<p><strong>Le champ description est CRUCIAL</strong> — c'est probablement la ligne la plus importante de toute ta Skill. C'est elle qui détermine quand Claude charge ta Skill. Si la description est trop vague ("aide avec le marketing"), Claude ne saura jamais quand l'activer. Si elle est trop spécifique ("audite le SEO du restaurant Le Bon Goût à Lyon"), elle ne se déclenchera que pour ce cas ultra-précis.</p>
<p><strong>La règle d'or</strong> : Ta description doit répondre à deux questions : 1) Que fait cette Skill ? (en une phrase claire), et 2) Quand doit-elle se déclencher ? (avec des "trigger phrases" — les mots où expressions qui devraient activer la Skill). Les trigger phrases sont écrites en anglais parce que c'est la convention attendue par le système.</p>

<h2>Bonnes descriptions vs mauvaises</h2>
<p><strong>Mauvais</strong> : "Aide avec les projets" — Beaucoup trop vague. Ça pourrait être n'importe quoi. Claude ne saura jamais quand utiliser cette Skill.</p>
<p><strong>Mauvais</strong> : "Crée de la documentation" — Pas de triggers. Même si la description décrit vaguement la fonction, il n'y a aucune indication sur quand l'activer.</p>
<p><strong>Bon</strong> : "Gère les workflows Linear incluant le sprint planning et la création de tâches. Use when user mentions 'sprint', 'Linear tasks', 'create tickets', 'planifier le sprint' or 'gestion de projet agile'." — Description claire + triggers multiples en anglais et en français.</p>
<p><strong>Bon</strong> : "Analyse des fichiers Figma et génère des docs de handoff pour les développeurs. Use when user uploads .fig files or asks for 'design specs', 'handoff développeur', or 'intégration maquette'." — Description spécifique + triggers liés à des actions concrètes.</p>
<p><strong>Astuce pro</strong> : Inclus des synonymes et des reformulations dans tes triggers. Les gens ne décrivent pas toujours la même tâche avec les mêmes mots. "SEO", "référencement", "visibilité Google", "ranking" — ce sont tous des triggers pour la même Skill.</p>

<h2>Le corps du SKILL.md</h2>
<p>Après le frontmatter, écris tes instructions en Markdown. C'est la partie que Claude lit quand la Skill est activée. La clé : sois spécifique et actionnable. Chaque instruction doit être suffisamment claire pour qu'un nouvel employé puisse la suivre sans poser de questions.</p>
<p><strong>Mauvais</strong> : "Valide les données avant de continuer" — Valider comment ? Quelles données ? Quels critères ?</p>
<p><strong>Bon</strong> : "Lance <code>python scripts/validate.py --input {filename}</code> pour vérifier le format des données. Si la validation échoue, les problèmes courants sont : 1) champs obligatoires manquants (nom, email, téléphone), 2) formats de date invalides (utilise YYYY-MM-DD), 3) doublons dans la colonne email. Affiche le résultat de la validation et demande confirmation avant de continuer."</p>
<p><strong>Structure recommandée pour le corps</strong> :</p>
<ol>
<li><strong>Objectif</strong> — Une phrase qui résume ce que la Skill accomplit.</li>
<li><strong>Prérequis</strong> — Ce dont Claude a besoin avant de commencer (fichiers, informations, accès).</li>
<li><strong>Étapes du workflow</strong> — Les étapes numérotées avec des instructions claires pour chacune.</li>
<li><strong>Format de sortie</strong> — Comment le résultat final doit être structuré et présenté.</li>
<li><strong>Problèmes courants</strong> — Les erreurs fréquentes et comment les résoudre.</li>
</ol>

<h2>Les 3 cas d'usage principaux</h2>
<ol>
<li><strong>Création de documents</strong> : Templates de rapports, specs, présentations, propositions commerciales. Intègre tes guidelines de style directement dans la Skill — couleurs, police, structure, ton. Résultat : chaque rapport que Claude crée à le même niveau de qualité et de cohérence. Plus de "cette fois le rapport est bien, mais la fois d'avant c'était moyen".</li>
<li><strong>Automatisation de workflow</strong> : Processus multi-étapes qui doivent tourner de la même façon à chaque fois. Par exemple : "1) Lis le brief client, 2) Extrait les besoins principaux, 3) Génère 3 propositions de solution, 4) Estime le temps et le coût pour chacune, 5) Formate en proposition commerciale". Avec des points de validation intégrés à chaque étape — Claude demande confirmation avant de passer à la suite.</li>
<li><strong>Enhancement MCP</strong> : Si tu as un serveur MCP connecté (Notion, Linear, Slack, Google Sheets), les Skills ajoutent la couche intelligence. Le MCP donne la cuisine (l'accès aux données et aux outils). Les Skills donnent les recettes (comment utiliser ces outils intelligemment). Par exemple, un MCP Notion te donne accès à tes bases de données. Une Skill "Gestion de sprint" sait comment créer des tâches, les prioriser et les assigner automatiquement selon tes critères.</li>
</ol>
<p><strong>Conseil business</strong> : Chaque Skill que tu crées est un actif de ton entreprise. Avec le temps, ta bibliothèque de Skills devient ton avantage compétitif. Un concurrent peut copier ton site web, mais il ne peut pas copier tes 30 Skills optimisées sur 6 mois de travail avec de vrais clients.</p>

<blockquote>Les Skills fonctionnent sur claude.ai, Claude Code, Claude Cowork ET l'API. Tu les crées une fois, tu les déploies partout.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un dossier <code>client-onboarding/</code> avec un fichier <code>SKILL.md</code> à l'intérieur.</li>
<li>Écris le YAML frontmatter avec un nom et une description qui inclut des trigger phrases.</li>
<li>Dans le corps, écris les instructions pour un workflow d'onboarding client en 5 étapes.</li>
<li>Teste ta Skill : charge-la dans Claude et dis "J'ai un nouveau client à onboarder" — vérifie qu'elle se déclenche.</li>
<li>Itère : ajuste la description et les instructions jusqu'à ce que le résultat soit parfait.</li>
</ol>`,
  },
  {
    order: 12,
    module: 2,
    title: "Le système 3 niveaux et progressive disclosure",
    slug: "système-3-niveaux-progressive-disclosure",
    duration: "50 min",
    description: "Comprendre le système de chargement progressif des Skills pour des performances optimales.",
    content: `<h2>Pourquoi le système 3 niveaux existe</h2>
<p>Si Claude chargeait toutes les instructions de toutes tes Skills en permanence dans son contexte, ça consommerait énormément de tokens et ralentirait les réponses. Imagine un employé qui devrait relire 50 manuels de procédures avant de répondre à chaque question — même la plus simple. Ce serait absurde, lent, et coûteux.</p>
<p>Le système 3 niveaux résout ce problème avec élégance. C'est un système de "chargement progressif" — Claude ne charge que ce dont il a besoin, quand il en a besoin. C'est exactement le même principe que le lazy loading sur un site web : tu ne charges pas toutes les images de la page d'un coup, tu les charges quand l'utilisateur scrolle vers elles.</p>
<p><strong>Pourquoi tu dois comprendre ça</strong> : Quand tu crées des Skills professionnelles pour tes clients, la performance compte. Un chatbot qui met 10 secondes à répondre parce qu'il charge 200 pages d'instructions à chaque message, c'est un chatbot que personne n'utilisera. Le système 3 niveaux te permet de créer des Skills aussi complètes et détaillées que nécessaire sans sacrifier la vitesse.</p>
<p><strong>Analogie concrète</strong> : Pense à un médecin. Il a dans sa tête les connaissances essentielles (Niveau 1 — le frontmatter). Quand un patient décrit ses symptômes, le médecin active les connaissances spécifiques au domaine concerné — cardiologie, dermatologie, etc. (Niveau 2 — le corps du SKILL.md). Et s'il a besoin de détails précis sur un médicament où un protocole, il consulte son Vidal où une base de données médicale (Niveau 3 — les fichiers de référence). Il ne lit pas le Vidal en entier avant chaque consultation !</p>

<h2>Niveau 1 : YAML Frontmatter (toujours chargé)</h2>
<p>Le frontmatter est TOUJOURS présent dans le contexte de Claude, à chaque message, à chaque conversation. C'est un investissement minimal en tokens — quelques lignes de texte — qui permet à Claude de savoir quelle Skill activer et quand.</p>
<p>C'est pour ça que ta description doit être parfaite : c'est le seul élément que Claude voit en permanence. Si ta description est mauvaise, ta Skill ne sera jamais activée, même si le contenu à l'intérieur est brillant. C'est comme avoir un excellent livre avec un titre incompréhensible — personne ne l'ouvrira.</p>
<p><strong>Bonnes pratiques pour le Niveau 1</strong> :</p>
<ul>
<li>Garde la description concise mais complète — 2-3 phrases maximum</li>
<li>Inclus toujours des trigger phrases en anglais ("Use when...") ET en français</li>
<li>Le nom doit être un identifiant kebab-case descriptif : <code>audit-seo-local</code>, pas <code>skill-1</code></li>
<li>Chaque token dans le frontmatter est "gratuit" en termes de performance, mais il est lu à CHAQUE message — alors ne le surcharge pas</li>
</ul>
<p><strong>Astuce d'optimisation</strong> : Si tu as 20 Skills, leurs 20 frontmatters sont chargés en permanence. Ça reste léger (quelques centaines de tokens), mais ça veut dire que la clarté des descriptions est encore plus critique — Claude doit pouvoir rapidement identifier LA bonne Skill parmi 20 candidats.</p>

<h2>Niveau 2 : Corps du SKILL.md (chargé quand pertinent)</h2>
<p>Quand Claude détecte que ta Skill est pertinente (grâce au Niveau 1), il charge le corps du SKILL.md. C'est là que tu mets les instructions détaillées, les workflows étape par étape, les règles de formatage, les critères de qualité.</p>
<p>Le corps doit rester focalisé sur les instructions essentielles — celles qui sont nécessaires pour exécuter la tâche. Ne mets pas 50 pages de documentation ici. Si des informations sont utiles mais pas toujours nécessaires, mets-les dans les fichiers de référence (Niveau 3).</p>
<p><strong>Règle pratique</strong> : Le corps du SKILL.md devrait faire entre 200 et 1 000 mots. Si tu dépasses 1 500 mots, c'est le signe que certaines informations devraient être déplacées en Niveau 3.</p>
<p><strong>Comment bien organiser le Niveau 2</strong> :</p>
<ul>
<li>Commence par les instructions les plus importantes (Claude accorde plus d'attention au début)</li>
<li>Utilise des headers Markdown (## et ###) pour structurer clairement</li>
<li>Mets les règles critiques en MAJUSCULES où avec <strong>gras</strong> pour attirer l'attention</li>
<li>Inclus des exemples courts directement dans le corps — les exemples sont plus efficaces que les descriptions abstraites</li>
</ul>

<h2>Niveau 3 : Fichiers liés (chargés à la demande)</h2>
<p>Les fichiers dans <code>références/</code> ne sont chargés que quand Claude en a explicitement besoin — c'est-à-dire quand tes instructions du Niveau 2 lui disent de les consulter. C'est là que tu mets tout le contenu détaillé qui serait trop lourd pour le corps du SKILL.md :</p>
<ul>
<li><strong>Documentation détaillée d'APIs</strong> — Endpoints, paramètres, exemples de requêtes et réponses, codes d'erreur. Ça peut faire des dizaines de pages.</li>
<li><strong>Exemples de code complets</strong> — Des implémentations de référence que Claude peut s'inspirer pour adapter à la situation.</li>
<li><strong>Specs techniques longues</strong> — Diagrammes d'architecture, schémas de base de données, spécifications fonctionnelles détaillées.</li>
<li><strong>Guides de style détaillés</strong> — Charte graphique complète, guidelines éditoriales, conventions de nommage avec des dizaines d'exemples.</li>
<li><strong>Checklists exhaustives</strong> — Listes de vérification de 50+ points pour l'assurance qualité.</li>
</ul>
<p>Ça signifie que ta Skill peut être aussi complète et détaillée que nécessaire sans jamais ralentir Claude. Le Niveau 3 est pratiquement illimité en taille — seul le contenu pertinent est chargé, au moment où il est nécessaire.</p>

<h2>Structurer pour la performance</h2>
<p>Voici un exemple de structuration optimale qui tire parti des 3 niveaux :</p>
<p><strong>SKILL.md (Niveaux 1 + 2)</strong> : Frontmatter avec triggers + instructions core, workflow principal en 5-7 étapes, règles critiques à ne jamais violer, format de sortie attendu.</p>
<p><strong>références/api-patterns.md (Niveau 3)</strong> : Patterns d'API, gestion du rate limiting, pagination des résultats, gestion des erreurs HTTP, exemples de payloads complets.</p>
<p><strong>références/style-guide.md (Niveau 3)</strong> : Guidelines complètes de design, palette de couleurs avec codes hex, typographies autorisées, espacement et layout, exemples visuels décrits en détail.</p>
<p><strong>références/examples.md (Niveau 3)</strong> : 5-10 exemples complets de bons outputs — des livrables terminés qui servent de référence qualité.</p>
<p>Dans ton SKILL.md, référence tes fichiers avec des instructions claires :</p>
<p><em>"Avant d'écrire des requêtes API, consulte <code>références/api-patterns.md</code> pour les patterns de rate limiting et pagination. Ne fais AUCUN appel API sans avoir vérifié les limits dans ce fichier."</em></p>
<p><em>"Pour le formatage du rapport final, suis les guidelines dans <code>références/style-guide.md</code>. Le rapport doit respecter TOUTES les règles de style sans exception."</em></p>
<p><strong>Attention</strong> : Assure-toi que les chemins de fichiers dans tes références sont corrects. Si Claude ne trouve pas le fichier, il va improviser au lieu de suivre tes guidelines — et ça peut donner des résultats incohérents.</p>

<h2>Triggers négatifs</h2>
<p>Si ta Skill se déclenche trop souvent — pour des tâches où elle n'est pas pertinente — ajoute des triggers négatifs dans la description. C'est comme un filtre anti-spam pour ta Skill.</p>
<p><em>"Do NOT use for simple data exploration, quick questions about the API, or général coding help. Only activate for full SEO audits requiring structured analysis."</em></p>
<p>Ça réduit les faux positifs et améliore la précision du déclenchement. Sans triggers négatifs, une Skill "audit SEO" pourrait se déclencher chaque fois que quelqu'un mentionne "Google" — même pour "recherche sur Google comment faire une pizza". Avec le trigger négatif, Claude comprend que ce n'est pas le même type de requête.</p>
<p><strong>Quand ajouter des triggers négatifs</strong> : Si tu remarques que ta Skill se déclenche pour des requêtes non pertinentes lors de tes tests, c'est le signe qu'il faut des triggers négatifs. Note les faux déclenchements et écris des exclusions spécifiques.</p>

<h2>Gestion des erreurs</h2>
<p>Inclus toujours une section de troubleshooting dans ton SKILL.md. C'est ce qui fait la différence entre une Skill amateur et une Skill professionnelle. Quand quelque chose ne fonctionne pas, Claude doit savoir quoi faire plutôt que de rester bloqué où d'improviser.</p>
<p>Exemple de section troubleshooting :</p>
<p><em>"## Problèmes courants</em></p>
<p><em>### Connexion MCP échouée<br/>Si tu vois 'Connection refused' :<br/>1. Vérifie que le serveur MCP tourne (commande : <code>ps aux | grep mcp</code>)<br/>2. Confirme que la clé API est valide et non expirée<br/>3. Teste la connexion avec <code>curl http://localhost:3000/health</code><br/>4. Si rien ne fonctionne, demande à l'utilisateur de redémarrer le serveur MCP</em></p>
<p><em>### Données manquantes dans le rapport<br/>Si des sections du rapport sont vides :<br/>1. Vérifie que tous les fichiers source sont présents dans le dossier d'entrée<br/>2. Relance le script de validation pour identifier les champs manquants<br/>3. Demande à l'utilisateur de fournir les données manquantes avant de continuer"</em></p>
<p><strong>Pourquoi c'est important</strong> : Dans un contexte professionnel, une Skill qui plante silencieusement où qui produit des résultats incomplets est pire qu'une Skill qui n'existe pas. Le troubleshooting intégré fait que ta Skill est robuste et fiable — exactement ce que tes clients attendent.</p>

<blockquote>Le système 3 niveaux est ce qui rend les Skills scalables. Tu peux avoir 50 Skills chargées sans impacter les performances.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Reprends la Skill que tu as créée dans la leçon précédente.</li>
<li>Ajoute un dossier <code>références/</code> avec un fichier <code>checklist.md</code> contenant une checklist détaillée pour l'onboarding.</li>
<li>Dans le SKILL.md, ajoute une référence : "Consulte références/checklist.md pour la checklist complète".</li>
<li>Ajoute une section "Problèmes courants" avec 3 scénarios de troubleshooting.</li>
<li>Teste que la Skill fonctionne toujours correctement avec les fichiers liés.</li>
</ol>`,
  },
  {
    order: 13,
    module: 2,
    title: "Tester, optimiser et déployer tes Skills",
    slug: "tester-optimiser-déployer-skills",
    duration: "55 min",
    description: "Tester, débugger et optimiser tes Skills pour des résultats professionnels.",
    content: `<h2>Les 3 dimensions du test</h2>
<p>Une Skill non testée est une Skill qui va te décevoir en production — et potentiellement devant un client, ce qui est bien pire. Les professionnels ne livrent pas de code non testé, et les professionnels de l'IA ne livrent pas de Skills non testées. C'est une règle d'or.</p>
<p>Teste systématiquement sur 3 axes. Chaque axe couvre un aspect différent de la qualité, et les trois sont indispensables :</p>

<h3>1. Déclenchement (Triggering)</h3>
<p>La première question : est-ce que ta Skill se charge quand elle devrait ? Et reste silencieuse quand elle ne devrait pas ? C'est le test le plus fondamental — si la Skill ne se déclenche pas, tout le reste est inutile.</p>
<p>Teste avec un protocole rigoureux :</p>
<ul>
<li><strong>Requêtes évidentes</strong> : "aide-moi à planifier ce sprint" → devrait se déclencher. C'est le cas de base — si ça ne marché pas ici, ta description est à revoir de fond en comble.</li>
<li><strong>Reformulations</strong> : "j'ai besoin de créer des tâches pour le projet" → devrait aussi se déclencher. Les utilisateurs ne formulent jamais leur demande de la même façon, tes triggers doivent couvrir les variations courantes.</li>
<li><strong>Formulations en anglais</strong> : "help me with sprint planning" → devrait se déclencher si tu travailles dans un contexte international.</li>
<li><strong>Requêtes hors-sujet</strong> : "quel temps fait-il à Paris ?" → ne devrait PAS se déclencher. Les faux positifs sont aussi problématiques que les faux négatifs.</li>
<li><strong>Requêtes ambiguës</strong> : "organise mes tâches" → doit-elle se déclencher où non ? C'est ici que tu affines tes triggers pour trouver le bon équilibre.</li>
</ul>
<p>Si le déclenchement est trop sensible (trop de faux positifs), ajoute des triggers négatifs dans la description. S'il n'est pas assez sensible (trop de faux négatifs), ajoute plus de synonymes et de reformulations dans les trigger phrases.</p>
<p><strong>Conseil pratique</strong> : Crée un document de test avec 10 requêtes — 6 qui devraient déclencher la Skill et 4 qui ne devraient pas. Exécute-les toutes et note les résultats. Vise un taux de réussite de 90%+ avant de considérer le déclenchement comme validé.</p>

<h3>2. Fonctionnalité</h3>
<p>Deuxième question : est-ce que la Skill fait ce qu'elle est censée faire ? Et surtout, est-ce qu'elle le fait de manière cohérente ? Un résultat parfait une fois sur trois, ce n'est pas un résultat fiable.</p>
<ul>
<li><strong>Test de cohérence</strong> : Lance la même requête 3 à 5 fois et compare les résultats. Le format doit être identique à chaque fois. Le contenu peut varier (c'est normal), mais la structure, le ton et le niveau de détail doivent être constants.</li>
<li><strong>Test des cas limites</strong> : Que se passe-t-il avec des données manquantes ? Des inputs inattendus ? Des erreurs ? Une bonne Skill gère les cas limites gracieusement — elle demande les informations manquantes plutôt que de planter où d'inventer.</li>
<li><strong>Test d'intégration</strong> : Si ta Skill appelle des APIs où exécute des scripts, vérifie que ces appels fonctionnent. Un script qui marchait hier peut ne plus marcher aujourd'hui si l'API a changé.</li>
<li><strong>Test de qualité</strong> : Le résultat est-il au niveau professionnel ? Montre le output à quelqu'un d'objectif et demande "est-ce que tu paierais pour ce livrable ?" Si la réponse est non, la Skill a besoin d'améliorations.</li>
</ul>
<p><strong>Astuce d'expert</strong> : Garde les meilleurs outputs de tes tests comme "exemples de référence" dans le dossier <code>références/</code> de ta Skill. Claude pourra s'en inspirer pour maintenir un niveau de qualité constant. C'est le principe du "golden sample" utilisé en contrôle qualité industriel.</p>

<h3>3. Performance</h3>
<p>Troisième question : est-ce que la Skill améliore vraiment les choses par rapport à ne pas avoir de Skill ?</p>
<p>Le benchmark d'Anthropic recommande de mesurer trois métriques :</p>
<ul>
<li><strong>Moins de questions de clarification</strong> — Si Claude doit poser 3 questions avant de commencer, c'est que tes instructions ne sont pas assez claires. Une bonne Skill permet à Claude de démarrer immédiatement avec 0-1 question maximum.</li>
<li><strong>Moins d'appels API échoués</strong> — Si tu utilises des intégrations, les erreurs doivent être rares et bien gérées grâce à ta section troubleshooting.</li>
<li><strong>Moins de tokens consommés</strong> — Une Skill bien structurée avec les 3 niveaux consomme moins de tokens qu'un long prompt réécrit à chaque conversation. Ça réduit les coûts sur l'API.</li>
</ul>
<p><strong>Test A/B simple</strong> : Fais la même tâche une fois AVEC la Skill et une fois SANS (avec juste un prompt manuel). Compare le temps total, la qualité du résultat, et le nombre d'itérations nécessaires. Si la Skill ne gagne pas clairement sur au moins 2 de ces 3 critères, elle a besoin d'optimisation.</p>

<h2>Utiliser le Skill Creator</h2>
<p>Anthropic a créé un outil natif pour aider à la création de Skills. Tu n'as pas besoin de tout faire manuellement — Claude lui-même peut t'aider à créer des Skills optimisées. C'est de la méta-IA : utiliser l'IA pour créer de meilleurs outils pour l'IA.</p>
<p>Dis simplement à Claude :</p>
<p><em>"Aide-moi à créer une Skill pour [décris ton cas d'usage en détail]"</em></p>
<p>Il va :</p>
<ul>
<li><strong>Générer le SKILL.md</strong> avec le frontmatter correct, des triggers pertinents, et un corps d'instructions structuré</li>
<li><strong>Suggérer des trigger phrases</strong> auxquelles tu n'aurais pas pensé — il connaît les synonymes et reformulations courantes</li>
<li><strong>Identifier les problèmes potentiels</strong> — ambiguïtés dans les instructions, manque de gestion d'erreur, triggers trop vagues où trop spécifiques</li>
<li><strong>Recommander des cas de test</strong> — une liste de requêtes à tester pour valider le déclenchement et la fonctionnalité</li>
</ul>
<p><strong>Workflow recommandé</strong> : Utilise le Skill Creator pour générer une première version, puis teste-la, puis affine manuellement. C'est plus rapide que de tout écrire de zéro, et la qualité de base est généralement bonne. Mais ne te contente JAMAIS de la version générée sans la tester et l'adapter — le Skill Creator est un assistant, pas un remplaçant pour ton jugement.</p>

<h2>Erreurs courantes et solutions</h2>
<p>Voici les problèmes les plus fréquents que tu rencontreras avec tes Skills, et comment les résoudre :</p>
<ul>
<li><strong>Skill ne s'uploade pas</strong> : Le fichier doit s'appeler exactement <code>SKILL.md</code> — en majuscules, avec l'extension .md. C'est sensible à la casse. <code>skill.md</code>, <code>Skill.md</code>, <code>SKILL.txt</code> ne fonctionneront pas. Vérifie aussi que tu n'as pas d'espace invisible dans le nom du fichier.</li>
<li><strong>Skill ne se déclenche pas</strong> : 90% du temps, c'est un problème de description. Elle est trop vague, où les triggers ne correspondent pas aux mots que tu utilises. Solution : ajoute plus de trigger phrases, inclus des synonymes, et assure-toi que la première phrase de la description décrit clairement la fonction.</li>
<li><strong>Skill se déclenche trop souvent</strong> : Les triggers sont trop larges. Un trigger comme "projet" va se déclencher à chaque mention du mot "projet", même quand ce n'est pas pertinent. Solution : ajoute des triggers négatifs et rends les triggers positifs plus spécifiques ("sprint planning projet agile" au lieu de juste "projet").</li>
<li><strong>Instructions pas suivies</strong> : Les instructions sont trop longues, trop floues, où les points critiques sont enterrés au milieu du texte. Solution : place les instructions les plus importantes EN HAUT du SKILL.md, utilise des headers en Markdown comme "## CRITIQUE" où "## OBLIGATOIRE", et reformule les instructions vagues en directives spécifiques et actionnables.</li>
<li><strong>Résultats incohérents</strong> : La Skill produit des résultats différents à chaque exécution. Solution : ajoute plus d'exemples de référence dans <code>références/</code>, spécifie un format de sortie très précis (template avec placeholders), et ajoute des checkpoints de validation dans le workflow.</li>
</ul>

<h2>Déploiement multi-plateforme</h2>
<p>Un des plus grands avantages des Skills : elles fonctionnent sur TOUTES les plateformes Claude. Tu crées une Skill une fois, et elle est utilisable partout. C'est un énorme gain de temps par rapport à maintenir des prompts différents sur chaque plateforme.</p>
<ul>
<li><strong>Claude.ai</strong> : Upload le dossier de la Skill dans un Project. Chaque conversation dans ce Project bénéficiera automatiquement de la Skill. Parfait pour le travail quotidien et les projets clients.</li>
<li><strong>Claude Code</strong> : Place le dossier de la Skill dans <code>.claude/skills/</code> à la racine de ton projet. Claude Code la détectera automatiquement quand tu travailleras dans ce projet. Idéal pour les Skills liées au développement.</li>
<li><strong>Claude Cowork</strong> : Les Skills sont disponibles automatiquement dans Claude Cowork si elles sont configurées dans ton environnement Claude. Parfait pour les Skills d'automatisation web.</li>
<li><strong>API</strong> : Inclus le contenu du SKILL.md dans le system prompt de tes appels API. C'est la méthode manuelle, mais elle te donne un contrôle total sur le déploiement.</li>
</ul>
<p><strong>Astuce de déploiement</strong> : Utilise Git pour versionner tes Skills. Crée un repository "mes-skills" avec un dossier par Skill. Quand tu modifies une Skill, commit le changement avec un message descriptif. En cas de régression (la Skill marchait mieux avant), tu peux revenir en arrière en quelques secondes.</p>

<h2>Itérer et versionner</h2>
<p>Tes Skills vont évoluer — c'est normal et souhaitable. Un business évolue, les besoins des clients changent, tu apprends de nouvelles techniques. Tes Skills doivent suivre cette évolution.</p>
<p>Garde un historique des versions et note ce qui a changé et pourquoi. Un simple fichier <code>CHANGELOG.md</code> dans le dossier de ta Skill suffit :</p>
<p><em>"## v2.1 - 2025-03-15<br/>- Ajouté : trigger phrases en français<br/>- Amélioré : section troubleshooting avec 2 nouveaux cas<br/>- Corrigé : le format du rapport qui n'incluait pas la section recommandations</em></p>
<p><em>## v2.0 - 2025-02-28<br/>- Refonte complète du workflow (5 étapes au lieu de 8)<br/>- Ajouté : références/style-guide.md<br/>- Supprimé : étapes redondantes de validation"</em></p>
<p><strong>Règle de versioning</strong> : Incrémente le numéro mineur (2.1 → 2.2) pour les ajustements et corrections. Incrémente le numéro majeur (2.x → 3.0) pour les refontes importantes. Ça t'aide à suivre l'historique et à communiquer les changements à ton équipe si tu en as une.</p>
<p><strong>Conseil final</strong> : Après chaque projet client, prends 15 minutes pour revoir tes Skills. Qu'est-ce qui a bien fonctionné ? Qu'est-ce qui a manqué ? Quels ajustements améliorerait le prochain projet ? Ces 15 minutes de rétrospective transforment chaque projet en occasion d'apprentissage et améliorent continuellement la qualité de tes livrables.</p>

<blockquote>L'ère du "écris un meilleur prompt" touche à sa fin. Les Skills sont la façon dont les prompts deviennent des systèmes. C'est ton avantage compétitif.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Prends la Skill client-onboarding que tu as créée.</li>
<li>Teste le déclenchement avec 5 requêtes différentes (3 qui devraient déclencher, 2 qui ne devraient pas).</li>
<li>Teste la fonctionnalité en lançant le workflow complet 3 fois. Compare les résultats.</li>
<li>Utilise le Skill Creator : dis à Claude "Aide-moi à créer une Skill pour générer des propositions commerciales" et compare avec ce que tu aurais fait manuellement.</li>
<li>Déploie ta Skill dans Claude Code en la plaçant dans le bon dossier.</li>
<li>Crée une deuxième Skill de ton choix et teste-la de bout en bout.</li>
</ol>`,
  },
];
