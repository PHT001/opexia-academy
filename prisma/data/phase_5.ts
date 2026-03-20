// Phase 5 : Lancer ton Business — Modules 10-11 (12 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 11 : Business avec Claude (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 58,
    module: 10,
    title: "Claude Cowork comme Chief of SEO",
    slug: "claude-cowork-chief-seo",
    duration: "40 min",
    description: "Utiliser l'extension navigateur Claude Cowork et son système de 8 prompts pour dominer le SEO local.",
    content: `<h2>Claude Cowork : ton coequipier SEO dans le navigateur</h2>
<p>Claude Cowork est une extension navigateur développée par Anthropic qui transforme Claude en véritable collègue de travail. Contrairement à l'interface classique de claude.ai, Cowork s'intégré directement dans ton navigateur et agit comme un collaborateur permanent qui voit ce que tu vois, comprend ton contexte et travaille avec toi en temps réel.</p>
<p>Pour le SEO, Claude Cowork devient un véritable Chief of SEO — un directeur du référencement qui exécuté une stratégie complete en 8 étapes. Chaque étape correspond à un prompt spécialisé qui produit des résultats actionnables immédiatement.</p>
<p>L'avantage majeur de Cowork par rapport à un simple chatbot : il comprend le contexte de la page que tu consultes. Si tu es sur le site d'un concurrent, il peut analyser sa structure. Si tu es sur Google Search Console, il peut interpréter tes données. C'est cette intelligence contextuelle qui en fait un outil SEO redoutable.</p>

<h2>Prompt 1 : Générer une liste de mots-clés SEO locaux a forte valeur</h2>
<p>Le premier prompt du système demande a Claude Cowork de générer une liste exhaustive de mots-clés SEO locaux. Ce n'est pas une simple liste generique — c'est une recherche ciblee basee sur ton secteur d'activité, ta zone geographique et ton audience cible.</p>
<p>Voici comment structurer ce prompt :</p>
<ul>
<li><strong>Définir le secteur</strong> : "Je suis [type de business] a [ville/region]"</li>
<li><strong>Préciser l'intention</strong> : "Généré des mots-clés avec intention d'achat pour des clients prêts à passer à l'action"</li>
<li><strong>Categoriser</strong> : Demande des mots-clés en categories — transactionnels, informationnels, navigationnels et locaux</li>
<li><strong>Volume et difficulté</strong> : Demande une estimation de la difficulté et du volume de recherche pour prioriser</li>
</ul>
<p>Exemple concret : pour un plombier a Lyon, Claude Cowork va générer des mots-clés comme "plombier urgence Lyon 3", "debouchage canalisation Villeurbanne", "installation chauffe-eau Lyon prix". Ces mots-clés longue traine ont moins de concurrence et une intention d'achat forte.</p>

<h2>Prompt 2 : Créer un plan de site structure et optimisé SEO</h2>
<p>Le deuxieme prompt transforme ta liste de mots-clés en architecture de site web. Claude Cowork créé un plan de site (sitemap) avec une hierarchie logique de pages, chacune ciblant un cluster de mots-clés spécifique.</p>
<p>Le plan inclut :</p>
<ul>
<li><strong>Page d'accueil</strong> : Optimisee pour le mot-clé principal + ville</li>
<li><strong>Pages de services</strong> : Une page par service principal, chacune ciblant 3-5 mots-clés secondaires</li>
<li><strong>Pages de zones</strong> : Des pages pour chaque quartier où ville couverte (excellentes pour le SEO local)</li>
<li><strong>Blog</strong> : Articles cibles sur les mots-clés informationnels pour attirer du trafic en haut de funnel</li>
<li><strong>Pages de conversion</strong> : Contact, devis, temoignages — optimisees pour la conversion</li>
</ul>
<p>Cette architecture en silos thématiques permet à Google de comprendre clairement la structure de ton site et d'associer chaque page à des requêtes spécifiques.</p>

<h2>Prompt 3 : Rédiger le contenu complet des pages optimisé pour la recherche locale</h2>
<p>C'est le prompt le plus lourd en termes de production. Claude Cowork redige le contenu integral de chaque page du site, en integrant naturellement les mots-clés identifies dans le prompt 1, selon la structure definie dans le prompt 2.</p>
<p>Pour chaque page, le contenu respecte les bonnes pratiques SEO :</p>
<ul>
<li>Titre H1 contenant le mot-clé principal + localisation</li>
<li>Sous-titres H2 et H3 integrant les mots-clés secondaires</li>
<li>Paragraphes de 2-3 phrases maximum pour la lisibilité mobile</li>
<li>Mentions naturelles de la ville, du quartier, des landmarks locaux</li>
<li>Appels à l'action (CTA) clairs et répétés</li>
<li>Contenu minimum de 800 mots par page de service</li>
</ul>
<p>L'avantage de Claude Cowork ici est qu'il maintient la coherence entre toutes les pages. Le ton, le style et le maillage interne restent uniformes car l'agent garde le contexte de l'ensemble du projet.</p>

<h2>Prompt 4 : Écrire des meta descriptions uniques pour chaque page</h2>
<p>Le quatrieme prompt généré des meta descriptions sur mesure pour chaque page. Ces descriptions sont ce que les utilisateurs voient dans les résultats Google — elles sont donc cruciales pour le taux de clic (CTR).</p>
<p>Claude Cowork ecrit des meta descriptions qui :</p>
<ul>
<li>Font entre 150 et 160 caracteres (la limite Google)</li>
<li>Contiennent le mot-clé principal de la page</li>
<li>Incluent un appel à l'action ("Demandez votre devis gratuit")</li>
<li>Sont uniques pour chaque page — jamais de duplicata</li>
<li>Integrent un élément de preuve sociale quand c'est pertinent ("Plus de 500 clients satisfaits")</li>
</ul>

<h2>Prompt 5 : Fournir le schema markup (LocalBusiness, FAQ, Review)</h2>
<p>Le schema markup (où données structurees) est un code JSON-LD que tu ajoutes à tes pages pour aider Google a comprendre ton contenu. Claude Cowork généré automatiquement trois types de schemas essentiels pour le SEO local.</p>
<p><strong>Schema LocalBusiness</strong> : Inclut le nom de l'entreprise, l'adresse, le telephone, les horaires, la zone desservie, les coordonnees GPS. C'est ce qui permet d'apparaitre dans le pack local Google (les 3 résultats avec la carte).</p>
<p><strong>Schema FAQ</strong> : Transforme tes sections FAQ en rich snippets dans Google. Tes questions-réponses apparaissent directement dans les résultats de recherche, ce qui augmente ta visibilité et ton CTR.</p>
<p><strong>Schema Review</strong> : Affiche les etoiles et les avis dans les résultats Google. Un résultat avec 4.8 etoiles attire beaucoup plus de clics qu'un résultat sans etoiles.</p>
<p>Claude Cowork généré le code JSON-LD prêt à copier-coller dans le header de chaque page. Pas besoin de savoir coder — il suffit de le placer au bon endroit.</p>

<h2>Prompt 6 : Construire un plan d'optimisation Google Business Profile complet</h2>
<p>Google Business Profile (anciennement Google My Business) est le facteur numéro 1 du SEO local. Claude Cowork créé un plan d'optimisation complet incluant :</p>
<ul>
<li><strong>Informations de base</strong> : Nom optimisé, categorie principale et secondaires, description de 750 caracteres avec mots-clés</li>
<li><strong>Attributs</strong> : Tous les attributs pertinents a activer (Wi-Fi, accessibilité, paiements acceptes, etc.)</li>
<li><strong>Photos</strong> : Plan de publication de photos (logo, couverture, équipe, locaux, produits) avec nommage optimisé</li>
<li><strong>Questions/Réponses</strong> : Une liste de 10-15 Q&A a publier proactivement sur la fiche</li>
<li><strong>Stratégie d'avis</strong> : Processus pour collecter des avis 5 etoiles avec des réponses types personnalisées</li>
</ul>

<h2>Prompt 7 : Analyser les fiches Google Business Profile des concurrents</h2>
<p>Ce prompt demande a Claude Cowork d'analyser les fiches GBP de tes concurrents directs. Tu navigues sur les fiches concurrentes dans ton navigateur, et Cowork — grâce à sa capacité a voir ton écran — analyse en temps réel :</p>
<ul>
<li>Les categories utilisees par les concurrents</li>
<li>Leur stratégie de posts et leur fréquence de publication</li>
<li>Le nombre et la qualité de leurs avis</li>
<li>Les mots-clés qu'ils utilisent dans leur description</li>
<li>Les services qu'ils listent et comment ils les presentent</li>
<li>Les lacunes et opportunités que tu peux exploiter</li>
</ul>
<p>Ce benchmark concurrentiel te donne un avantage tactique : tu sais exactement ce que font tes concurrents et comment les depasser.</p>

<h2>Prompt 8 : Créer un calendrier de posts GBP</h2>
<p>Le dernier prompt du système généré un calendrier editorial de posts Google Business Profile sur 3 mois. Les posts GBP sont souvent negliges par les entreprises locales, ce qui represente une opportunité énorme.</p>
<p>Le calendrier inclut :</p>
<ul>
<li><strong>Posts "Nouveautes"</strong> : Annonces de nouveaux services où produits (1-2 par semaine)</li>
<li><strong>Posts "Offres"</strong> : Promotions et offres speciales avec dates limites</li>
<li><strong>Posts "Événements"</strong> : Journées portes ouvertes, webinaires, salons</li>
<li><strong>Posts éducatifs</strong> : Conseils et astuces liés à ton secteur</li>
</ul>
<p>Chaque post est redige avec un texte optimisé, un CTA et des suggestions d'images. Il ne te reste plus qu'a programmer la publication.</p>

<blockquote>Claude Cowork transforme le SEO local d'un travail de mois en un processus de quelques heures. Les 8 prompts couvrent 100% de ce qu'une agence SEO facture entre 2000 et 5000 euros. Tu peux faire tout ça toi-même où le vendre comme service.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Installe l'extension Claude Cowork dans ton navigateur Chrome où compatible.</li>
<li>Choisis un business local (le tien où un business fictif) et definis son secteur et sa localisation.</li>
<li>Exécuté les 8 prompts du système SEO dans l'ordre : commence par la recherche de mots-clés, puis le plan de site, puis le contenu.</li>
<li>Pour le prompt 5, généré le schema markup LocalBusiness et verifie-le avec l'outil Google Rich Results Test.</li>
<li>Analyse au moins 3 fiches Google Business Profile de concurrents avec le prompt 7 et identifie 5 opportunités d'amélioration.</li>
<li>Créé un calendrier de posts GBP pour le mois prochain avec le prompt 8.</li>
<li>Estime le prix que tu pourrais facturer pour ce service complet à un client local.</li>
</ol>`,
  },
  {
    order: 59,
    module: 10,
    title: "Agence de creation de contenu avec Claude",
    slug: "agence-creation-contenu-claude",
    duration: "35 min",
    description: "Construire une agence de creation de contenu rentable en utilisant Claude comme moteur de production.",
    content: `<h2>Le modèle d'agence de contenu en 2025</h2>
<p>Le marché de la creation de contenu explose. Chaque entreprise a besoin de contenu : articles de blog, posts sur les réseaux sociaux, newsletters, livres blancs, études de cas. Le problème ? La plupart des entreprises n'ont ni le temps ni les compétences pour produire du contenu de qualité régulièrement.</p>
<p>C'est là que tu interviens. Avec Claude comme moteur de production, tu peux livrer du contenu professionnel à une vitesse et un volume qu'un rédacteur humain seul ne peut pas atteindre. Tu n'es pas un simple utilisateur de chatbot — tu es un directeur de contenu qui utilise l'IA comme outil de production.</p>
<p>L'avantage compétitif de Claude pour une agence de contenu est triple : la qualité du texte produit, la capacité a maintenir un ton et un style cohérent sur de longs projets, et la fenêtre de contexte massive qui permet de travailler avec des briefs détaillés.</p>

<h2>Les 4 piliers de services de contenu</h2>
<p><strong>1. Articles de blog et content marketing</strong></p>
<p>C'est le service le plus demande. Les entreprises ont besoin d'articles optimises SEO pour attirer du trafic organique. Avec Claude, tu peux produire des articles de 1500 a 3000 mots en 30 a 45 minutes, incluant la recherche, la rédaction et l'optimisation SEO.</p>
<ul>
<li>Tarif recommande : 150 a 400 euros par article selon la longueur et la complexité</li>
<li>Volume realisable : 3 a 5 articles par jour</li>
<li>Revenu potentiel : 2000 a 6000 euros par mois avec 4-5 clients reguliers</li>
</ul>

<p><strong>2. Contenu pour les réseaux sociaux</strong></p>
<p>Gérer les réseaux sociaux d'une entreprise implique de créer des posts quotidiens pour LinkedIn, Instagram, Facebook, X (Twitter). Claude excelle dans la creation de posts engageants, de carrousels LinkedIn et de threads.</p>
<ul>
<li>Tarif recommande : 500 a 1500 euros par mois par client (gestion complete d'un réseau)</li>
<li>Volume : 20 a 30 posts par mois par client</li>
<li>Scalable : tu peux gérer 5 a 10 clients simultanement</li>
</ul>

<p><strong>3. Newsletters et email marketing</strong></p>
<p>Les newsletters restent l'un des canaux marketing les plus rentables. Claude peut rédiger des emails qui convertissent, des sequences d'onboarding et des campagnes de nurturing.</p>
<ul>
<li>Tarif : 200 a 500 euros par newsletter (incluant stratégie, rédaction et segmentation)</li>
<li>Tarif forfaitaire : 800 a 2000 euros par mois pour 4 newsletters + sequences automatisées</li>
</ul>

<p><strong>4. Livres blancs et contenus premium</strong></p>
<p>Les livres blancs (white papers) sont des contenus longs et détaillés utilises en B2B pour générer des leads. C'est le service le plus rentable car il demande une expertise apparente elevee.</p>
<ul>
<li>Tarif : 1000 a 3000 euros par livre blanc (15 a 30 pages)</li>
<li>Duree de production avec Claude : 2 a 3 jours (contre 2 a 3 semaines sans IA)</li>
</ul>

<h2>Workflow de production optimisé</h2>
<p>Voici le processus en 5 étapes pour chaque piece de contenu :</p>
<ol>
<li><strong>Brief client</strong> : Recueille les informations clés — sujet, audience cible, ton souhaite, mots-clés, objectif du contenu. Utilise un formulaire standardise.</li>
<li><strong>Prompt engineering</strong> : Transforme le brief en prompt Claude structure. Inclus le contexte du client, des exemples de contenu passe et les guidelines de marque.</li>
<li><strong>Production</strong> : Lance Claude avec ton prompt optimisé. Pour les articles longs, utilise la technique du "plan d'abord, rédaction ensuite" pour maintenir la coherence.</li>
<li><strong>Édition humaine</strong> : Relis, ajuste le ton, verifie les faits, ajoute des touches personnelles. C'est cette étape qui fait la différence entre du contenu generique et du contenu premium.</li>
<li><strong>Livraison et feedback</strong> : Livre au client, recueille le feedback, ajuste les futurs prompts en consequence.</li>
</ol>

<h2>Gestion des clients et pricing</h2>
<p>Trois modèles de tarification fonctionnent bien pour une agence de contenu IA :</p>
<ul>
<li><strong>Au projet</strong> : Idéal pour les missions ponctuelles (refonte de site, livre blanc). Avantage : marge previsible.</li>
<li><strong>Au forfait mensuel</strong> : Le modèle le plus stable. Propose des packs (Pack Starter : 4 articles/mois a 800 euros, Pack Pro : 8 articles + social media a 2000 euros, Pack Premium : tout inclus a 4000 euros).</li>
<li><strong>A la performance</strong> : Tu lies ta rémunération aux résultats (trafic, leads generes). Plus risque mais potentiellement plus rentable.</li>
</ul>

<h2>Outils complementaires pour ton agence</h2>
<ul>
<li><strong>Notion où ClickUp</strong> : Pour gérer les projets et les calendriers editoriaux</li>
<li><strong>Grammarly où Antidote</strong> : Pour la relecture finale</li>
<li><strong>Canva</strong> : Pour les visuels qui accompagnent le contenu</li>
<li><strong>Stripe</strong> : Pour la facturation automatisee</li>
<li><strong>Calendly</strong> : Pour les appels découverte avec les prospects</li>
</ul>

<blockquote>Une agence de contenu avec Claude peut atteindre 5000 a 15000 euros de chiffre d'affaires mensuel avec une seule personne. La clé est de standardiser tes processus et de monter en gamme avec des services premium.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Definis le positionnement de ton agence de contenu : quelle niche (tech, sante, immobilier, e-commerce) et quels services.</li>
<li>Créé un pack de services avec 3 niveaux de tarification (Starter, Pro, Premium) et les livrables inclus dans chacun.</li>
<li>Avec Claude, redige un article de blog de 1500 mots pour un client fictif. Chronomètre le temps total (prompt + production + édition).</li>
<li>Calcule ta marge : temps passe x ton taux horaire cible vs prix facture au client.</li>
<li>Redige un email de prospection pour proposer tes services à un client potentiel. Utilise Claude pour le personnaliser.</li>
</ol>`,
  },
  {
    order: 60,
    module: 10,
    title: "Service de consulting et formation IA",
    slug: "service-consulting-formation-ia",
    duration: "35 min",
    description: "Te positionner comme consultant et formateur IA pour accompagner les entreprises dans leur transformation.",
    content: `<h2>Le marché du consulting IA est en pleine explosion</h2>
<p>Les entreprises savent qu'elles doivent adopter l'IA, mais la plupart ne savent pas par où commencer. Elles ont besoin de quelqu'un qui comprend les outils, qui peut identifier les cas d'usage concrets et qui peut former leurs équipes. Ce quelqu'un, c'est toi.</p>
<p>Le consulting IA est probablement le business le plus rentable que tu puisses lancer avec tes compétences Claude et OpenClaw. Pourquoi ? Parce que tu vends ton expertise, pas du temps de production. Un consultant IA facture entre 500 et 2000 euros par jour, et la demande depasse largement l'offre.</p>
<p>Tu n'as pas besoin d'être ingénieur où data scientist. Les entreprises cherchent des gens qui savent utiliser les outils IA pour résoudre des problèmes business concrets — exactement ce que cette formation t'apprend.</p>

<h2>Les 3 piliers du consulting IA</h2>
<p><strong>1. Audit et stratégie IA</strong></p>
<p>Tu analyses les processus d'une entreprise et identifies où l'IA peut créer de la valeur. C'est la mission la plus rentable et la plus strategique.</p>
<ul>
<li>Audit des processus existants (emails, rapports, service client, marketing)</li>
<li>Identification des tâches répétitives automatisables</li>
<li>Calcul du ROI potentiel de l'intégration IA</li>
<li>Recommandation d'outils et de workflows</li>
<li>Feuille de route d'implementation sur 3 a 6 mois</li>
</ul>
<p>Tarif recommande : 1500 a 5000 euros par audit complet, selon la taille de l'entreprise.</p>

<p><strong>2. Implementation et configuration</strong></p>
<p>Tu mets en place les outils IA pour le client. Ça inclut la configuration de Claude pour des use cases spécifiques, la creation de prompts personnalises, l'intégration avec les outils existants et le setup d'OpenClaw si pertinent.</p>
<ul>
<li>Configuration de Claude avec des system prompts sur mesure</li>
<li>Creation de templates de prompts pour chaque departement</li>
<li>Intégration avec les outils existants (CRM, email, gestion de projet)</li>
<li>Mise en place de workflows automatises avec OpenClaw</li>
<li>Documentation et guides d'utilisation internes</li>
</ul>
<p>Tarif recommande : 2000 a 8000 euros par implementation, selon la complexité.</p>

<p><strong>3. Formation des équipes</strong></p>
<p>Tu formes les employes a utiliser les outils IA dans leur quotidien. C'est le pilier qui généré le plus de revenus récurrents car les entreprises ont besoin de formations régulières a mesure que les outils evoluent.</p>
<ul>
<li>Formation "Découverte IA" (demi-journée) : Introduction aux outils IA pour les debutants</li>
<li>Formation "Prompting avance" (journée complete) : Maitriser le prompt engineering pour chaque departement</li>
<li>Formation "IA pour managers" (2 heures) : Comment superviser et intégrer l'IA dans la stratégie</li>
<li>Workshops pratiques par métier : marketing, RH, finance, service client</li>
</ul>
<p>Tarif recommande : 1000 a 2500 euros par journée de formation (groupes de 5 a 15 personnes).</p>

<h2>Construire ta crédibilité</h2>
<p>Le consulting repose sur la confiance. Voici comment batir ta crédibilité rapidement :</p>
<ul>
<li><strong>LinkedIn</strong> : Publie 3 a 5 posts par semaine sur l'IA appliquee au business. Partage des cas d'usage concrets, des tutoriels rapides, des résultats obtenus. C'est ton canal d'acquisition numéro 1.</li>
<li><strong>Études de cas</strong> : Documente chaque mission en étude de cas chiffrée. "J'ai aide cette entreprise a réduire de 60% le temps de production de contenu" est beaucoup plus convaincant qu'un CV.</li>
<li><strong>Certifications</strong> : Passe les certifications officielles Anthropic et les formations reconnues en IA.</li>
<li><strong>Webinaires gratuits</strong> : Organise des webinaires mensuels sur l'IA pour les entreprises. C'est un excellent outil de prospection — 20% des participants deviennent des prospects qualifies.</li>
<li><strong>Newsletter</strong> : Lance une newsletter hebdomadaire sur l'IA business. C'est un actif qui prend de la valeur avec le temps.</li>
</ul>

<h2>Tarification : a l'heure vs au projet</h2>
<p>Deux modèles de tarification coexistent dans le consulting IA :</p>
<p><strong>A l'heure / à la journée</strong> :</p>
<ul>
<li>Debutant : 80 a 150 euros/heure (500 a 1000 euros/jour)</li>
<li>Intermédiaire : 150 a 300 euros/heure (1000 a 2000 euros/jour)</li>
<li>Expert : 300 a 500 euros/heure (2000 a 3500 euros/jour)</li>
</ul>
<p>Avantage : simple a comprendre pour le client. Inconvenient : ton revenu est limite par le nombre d'heures disponibles.</p>

<p><strong>Au projet / au forfait</strong> :</p>
<ul>
<li>Audit IA : 1500 a 5000 euros</li>
<li>Implementation complete : 5000 a 15000 euros</li>
<li>Programme de formation (3 sessions) : 3000 a 7500 euros</li>
<li>Accompagnement mensuel : 1500 a 4000 euros/mois</li>
</ul>
<p>Avantage : tu deconnectes ton revenu de ton temps. Plus tu deviens efficace avec Claude, plus ta marge augmente.</p>

<h2>Acquisition de clients</h2>
<p>Les meilleurs canaux pour trouver des clients en consulting IA :</p>
<ol>
<li><strong>LinkedIn outreach</strong> : Identifie les dirigeants de PME et envoie des messages personnalises montrant comment l'IA peut résoudre un problème spécifique a leur secteur</li>
<li><strong>Referrals</strong> : Chaque client satisfait peut te recommander a 2-3 contacts. Mets en place un programme de parrainage</li>
<li><strong>Conferences et meetups</strong> : Participe où interviens dans des événements IA et business locaux</li>
<li><strong>Partenariats</strong> : Associe-toi avec des agences web, des cabinets comptables où des ESN qui ont des clients en demande d'IA</li>
</ol>

<blockquote>Un consultant IA qui combine audit, implementation et formation peut atteindre 8000 a 20000 euros de chiffre d'affaires mensuel en moins de 6 mois. La clé est de commencer par des missions gratuites où a prix reduit pour constituer ton portfolio de cas d'étude.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Créé ta page LinkedIn optimisee "Consultant IA" avec un titre accrocheur, un résumé orientee résultats et tes compétences clés.</li>
<li>Redige un programme de formation IA d'une journée pour une PME de 20 personnes. Utilise Claude pour structurer le contenu, les ateliers pratiques et les supports.</li>
<li>Préparé un modèle de proposition commerciale pour un audit IA. Inclus le scope, les livrables, le calendrier et le tarif.</li>
<li>Ecris 5 posts LinkedIn sur l'IA appliquee au business que tu pourrais publier cette semaine.</li>
<li>Identifie 10 entreprises locales qui pourraient bénéficier de tes services et redige un message de prospection personnalisé pour chacune.</li>
</ol>`,
  },
  {
    order: 61,
    module: 10,
    title: "Créer et vendre des Skills Claude sur le marketplace",
    slug: "créer-vendre-skills-claude-marketplace",
    duration: "35 min",
    description: "Développer des Skills Claude qui resolvent des problèmes business concrets et les vendre sur le marketplace.",
    content: `<h2>Les Skills Claude : un nouveau marché a conquerir</h2>
<p>Les Skills Claude sont des extensions qui ajoutent des capacités spécifiques a Claude. Pense à eux comme des applications spécialisées que les utilisateurs peuvent activer pour accomplir des tâches precises — analyse financière, génération de contrats, audit SEO, gestion de projet.</p>
<p>Le marketplace de Skills Claude est comparable à l'App Store dans ses premières années : le marché est naissant, la demande augmente rapidement et les premiers arrivants ont un avantage énorme. C'est le moment idéal pour se positionner.</p>
<p>Créer et vendre des Skills est un modèle de revenu passif. Tu developpes une fois, tu vends en continu. Chaque vente où abonnement généré du revenu sans effort supplementaire de ta part.</p>

<h2>Identifier les problèmes a résoudre</h2>
<p>Un bon Skill resout un problème spécifique et douloureux pour un segment de marché bien défini. Voici comment trouver les bonnes idées :</p>
<ul>
<li><strong>Écoute les plaintes</strong> : Quels sont les problèmes récurrents dans les forums, groupes LinkedIn, subreddits lies au business et à la productivité ?</li>
<li><strong>Analyse les tâches répétitives</strong> : Quelles tâches les professionnels font encore manuellement et qui pourraient être automatisées avec un Skill ?</li>
<li><strong>Etudie la concurrence</strong> : Quels Skills existent déjà ? Quels sont leurs avis ? Quelles fonctionnalités manquent ?</li>
<li><strong>Cible un métier</strong> : Les Skills les plus rentables sont verticaux — ils ciblent un métier spécifique (agents immobiliers, avocats, e-commercants, recruteurs)</li>
</ul>

<h2>Exemples de Skills rentables</h2>
<p>Voici des exemples concrets de Skills que tu pourrais développer :</p>
<ol>
<li><strong>Skill "Generateur de contrats"</strong> : Créé des contrats personnalises (freelance, prestation de service, NDA) a partir de quelques informations. Cible : freelances et micro-entrepreneurs. Prix : 9.99 euros/mois.</li>
<li><strong>Skill "Audit SEO Express"</strong> : Analyse un site web et produit un rapport SEO complet avec recommandations actionnables. Cible : agences web et independants. Prix : 14.99 euros/mois.</li>
<li><strong>Skill "Social Media Manager"</strong> : Généré un calendrier mensuel de posts pour LinkedIn, Instagram et X avec des visuels decrits et des hashtags optimises. Cible : community managers et PME. Prix : 19.99 euros/mois.</li>
<li><strong>Skill "Financial Analyst"</strong> : Analyse des fichiers CSV/Excel de données financieres et produit des rapports avec graphiques et recommandations. Cible : directeurs financiers et comptables. Prix : 24.99 euros/mois.</li>
<li><strong>Skill "Email Copywriter"</strong> : Redige des sequences email de vente, d'onboarding et de relance en respectant les best practices du copywriting. Cible : e-commercants et SaaS. Prix : 14.99 euros/mois.</li>
</ol>

<h2>Développer un Skill de qualité</h2>
<p>Un Skill Claude de qualité se compose de plusieurs éléments :</p>
<ul>
<li><strong>System prompt optimisé</strong> : C'est le coeur de ton Skill. Il definit le comportement, le ton et les capacités de Claude quand le Skill est active. Un bon system prompt est détaillé, structure et inclut des exemples.</li>
<li><strong>Instructions claires pour l'utilisateur</strong> : Un guide d'utilisation simple qui explique quoi faire et quoi attendre. Les utilisateurs doivent obtenir un résultat en moins de 2 minutes.</li>
<li><strong>Templates et exemples</strong> : Des modèles pre-faits que l'utilisateur peut adapter. Plus tu facilites la prise en main, plus les avis seront positifs.</li>
<li><strong>Gestion des cas limites</strong> : Ton Skill doit gérer elegamment les cas où l'utilisateur fournit des informations insuffisantes où incorrectes.</li>
</ul>

<h2>Stratégies de pricing</h2>
<p>Trois modèles de prix fonctionnent pour les Skills :</p>
<ul>
<li><strong>Abonnement mensuel</strong> : Le plus rentable a long terme. Prix entre 5 et 30 euros/mois selon la valeur percue. Un Skill a 9.99 euros/mois avec 100 abonnes = 999 euros/mois de revenu récurrent.</li>
<li><strong>Achat unique</strong> : Prix entre 19 et 99 euros. Plus facile a vendre car pas d'engagement. Idéal pour les Skills utilitaires ponctuels.</li>
<li><strong>Freemium</strong> : Version gratuite limitee + version premium complete. Excellent pour l'acquisition — 5 a 10% des utilisateurs gratuits convertissent en payant.</li>
</ul>

<h2>Marketing et distribution</h2>
<p>Créer un bon Skill ne suffit pas — il faut le rendre visible :</p>
<ul>
<li><strong>Fiche marketplace optimisee</strong> : Titre accrocheur, description claire avec les bénéfices (pas les features), captures d'écran où demos, mots-clés pertinents</li>
<li><strong>Avis et social proof</strong> : Les 10 premiers avis sont cruciaux. Offre ton Skill gratuitement a 10-20 beta testeurs en échange d'un avis honnete</li>
<li><strong>Content marketing</strong> : Ecris des articles et des posts LinkedIn qui montrent ton Skill en action. Les tutoriels et les cas d'usage concrets convertissent le mieux</li>
<li><strong>Communauté</strong> : Rejoins les communautes d'utilisateurs Claude et partage ton expertise. L'objectif est de devenir une référence dans ta niche</li>
</ul>

<h2>Projections de revenus</h2>
<p>Voici un scenario réaliste pour un createur de Skills :</p>
<ul>
<li>Mois 1-2 : Développement et lancement du premier Skill. 0 a 10 ventes. Revenu : 0 a 100 euros.</li>
<li>Mois 3-4 : Optimisation basee sur les feedbacks. Lancement du 2eme Skill. 20 a 50 abonnes total. Revenu : 200 a 500 euros/mois.</li>
<li>Mois 5-6 : 3 Skills actifs, bouche a oreille, premiers avis positifs. 50 a 150 abonnes. Revenu : 500 a 1500 euros/mois.</li>
<li>Mois 12 : 5+ Skills, reputation etablie. 200 a 500 abonnes. Revenu : 2000 a 5000 euros/mois en passif.</li>
</ul>

<blockquote>Le modèle de Skills est le plus scalable de tous les business possibles avec Claude. Tu crees une fois, tu vends indefiniment. Avec 5 Skills bien positionnes et 200 abonnes au total, tu generes 2000 euros par mois en revenu passif.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Identifie 3 problèmes business spécifiques que tu pourrais résoudre avec un Skill Claude. Pour chaque problème, definis le public cible et le prix.</li>
<li>Choisis le problème le plus prometteur et redige le system prompt complet de ton Skill (minimum 500 mots).</li>
<li>Teste ton Skill en le faisant utiliser par 3 personnes différentes. Note les points de friction et amélioré le prompt.</li>
<li>Redige la fiche marketplace de ton Skill : titre, description, captures d'écran, mots-clés.</li>
<li>Créé un plan marketing sur 30 jours pour lancer ton Skill (posts LinkedIn, articles, outreach, beta testeurs).</li>
</ol>`,
  },
  {
    order: 62,
    module: 10,
    title: "Claude comme assistant business : automatiser chaque fonction",
    slug: "claude-assistant-business-automatisation",
    duration: "35 min",
    description: "Utiliser Claude pour automatiser les fonctions clés de ton entreprise : finance, RH, marketing et operations.",
    content: `<h2>Claude comme directeur des operations de ta micro-entreprise</h2>
<p>Quand tu lances un business, tu portes tous les chapeaux : PDG, directeur marketing, DRH, directeur financier, responsable commercial, assistant administratif. C'est epuisant et ça limite ta croissance. Claude peut endosser une grande partie de ces roles et te permettre de te concentrer sur ce qui compte vraiment : la stratégie et les clients.</p>
<p>Dans cette leçon, tu vas apprendre a configurer Claude comme assistant business pour chacune des fonctions clés de ton entreprise. L'objectif est de réduire de 60 a 80% le temps que tu passes sur les tâches opérationnelles.</p>

<h2>Finance : facturation et suivi des depenses</h2>
<p>La gestion financière est souvent la bete noire des entrepreneurs. Claude peut transformer cette corvee en processus fluide.</p>
<p><strong>Facturation automatisee</strong> :</p>
<ul>
<li>Généré des factures professionnelles au format correct (mentions legales, TVA, conditions de paiement)</li>
<li>Créé des modèles de facture personnalises par type de client où de prestation</li>
<li>Redige des emails de relance de paiement progressifs (rappel amical, relance ferme, mise en demeure)</li>
<li>Produit des recapitulatifs mensuels de facturation et de tresorerie</li>
</ul>
<p><strong>Suivi des depenses</strong> :</p>
<ul>
<li>Analyse tes releves bancaires (CSV) et categorise automatiquement les depenses</li>
<li>Identifie les depenses inhabituelles où les doublons</li>
<li>Généré des rapports de depenses par categorie et par mois</li>
<li>Préparé les données pour ton comptable où ta declaration fiscale</li>
</ul>
<p><strong>Previsions financieres</strong> :</p>
<ul>
<li>Créé des projections de chiffre d'affaires basees sur ton pipeline commercial</li>
<li>Calcule ton seuil de rentabilité et tes marges par service</li>
<li>Simule différents scenarios (optimiste, réaliste, pessimiste)</li>
</ul>

<h2>RH : recrutement et gestion d'équipe</h2>
<p>Même en solo, tu auras besoin de collaborateurs à un moment donne — freelances, sous-traitants, stagiaires. Claude simplifie énormément le processus RH.</p>
<p><strong>Recrutement</strong> :</p>
<ul>
<li>Redige des fiches de poste attractives et completes en quelques minutes</li>
<li>Créé des grilles d'évaluation standardisees pour les entretiens</li>
<li>Analyse des CV et lettres de motivation en lot — identifie les profils les plus pertinents</li>
<li>Généré des questions d'entretien spécifiques au poste et au secteur</li>
<li>Redige des emails de réponse (acceptation, refus, suivi) personnalises pour chaque candidat</li>
</ul>
<p><strong>Gestion d'équipe</strong> :</p>
<ul>
<li>Créé des templates d'objectifs et de KPIs par role</li>
<li>Préparé des trames d'entretiens annuels et de feedback</li>
<li>Redige des procedures internes et des guides d'onboarding</li>
<li>Généré des rapports d'activité et de performance</li>
</ul>

<h2>Marketing : copy, campagnes et stratégie</h2>
<p>Le marketing est probablement la fonction où Claude à le plus d'impact immédiat. Tu peux litteralement remplacer un departement marketing de 3 personnes.</p>
<p><strong>Copywriting</strong> :</p>
<ul>
<li>Pages de vente : structure AIDA (Attention, Interet, Desir, Action) avec des hooks percutants</li>
<li>Emails de prospection : sequences personnalisées de 5 a 7 emails</li>
<li>Publicites : variations de copy pour Facebook Ads, Google Ads, LinkedIn Ads</li>
<li>Landing pages : texte optimisé pour la conversion avec des CTA testes</li>
</ul>
<p><strong>Stratégie de campagne</strong> :</p>
<ul>
<li>Analyse de ton marché cible et de ta concurrence</li>
<li>Définition de personas détaillés (demographie, psychographie, douleurs, aspirations)</li>
<li>Plan marketing annuel avec budget, canaux et KPIs</li>
<li>Calendrier de lancement pour un nouveau produit où service</li>
</ul>
<p><strong>SEO et contenu</strong> :</p>
<ul>
<li>Recherche de mots-clés et creation de clusters thématiques</li>
<li>Calendrier editorial mensuel avec briefs d'articles</li>
<li>Optimisation de pages existantes pour le SEO</li>
<li>Analyse des résultats et recommandations d'amélioration</li>
</ul>

<h2>Operations : processus et documentation</h2>
<p>Les operations sont le ciment qui tient tout ensemble. Claude peut créer et maintenir toute ta documentation opérationnelle.</p>
<ul>
<li><strong>SOPs (Standard Operating Procedures)</strong> : Documente chaque processus répété de ton business — de l'onboarding client à la livraison de projet. Claude créé des SOPs claires avec des étapes numerotees, des checklists et des captures d'écran a inserer.</li>
<li><strong>Gestion de projet</strong> : Décompose un projet complexe en tâches, assigne des priorités, estime des durées et créé un retroplanning.</li>
<li><strong>Communication interne</strong> : Redige des comptes rendus de réunion, des notes de synthese et des communications internes.</li>
<li><strong>Veille concurrentielle</strong> : Analyse les sites, les offres et les contenus de tes concurrents et produit des rapports comparatifs.</li>
</ul>

<h2>Mettre en place tes prompts système</h2>
<p>Pour chaque fonction, créé un projet Claude dédié avec un system prompt adapte. Par exemple, pour la fonction Finance :</p>
<p>"Tu es le directeur financier de [nom de l'entreprise]. Tu connais notre structure tarifaire, nos clients reguliers, nos charges fixes et variables. Tu produis des documents financiers clairs, précis et conformes à la legislation francaise. Tu utilises toujours le format europeen pour les nombres (virgule decimale, point separateur de milliers)."</p>
<p>Cette approche te permet de passer d'une fonction a l'autre en changeant simplement de projet Claude, avec tout le contexte déjà charge.</p>

<blockquote>Un entrepreneur qui utilise Claude pour automatiser ses fonctions business gagne en moyenne 15 a 20 heures par semaine. Ce temps recupere peut être investi dans l'acquisition de clients et la stratégie — les seules activités qui font vraiment croitre ton business.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Créé 4 projets Claude distincts : "Finance", "RH", "Marketing", "Operations". Configure un system prompt adapte pour chacun.</li>
<li>Avec le projet Finance, généré une facture professionnelle pour un client fictif et un email de relance de paiement a J+30.</li>
<li>Avec le projet RH, redige une fiche de poste pour un "Community Manager freelance" et une grille d'évaluation pour les entretiens.</li>
<li>Avec le projet Marketing, créé un plan marketing sur 3 mois pour ton business avec budget, canaux et KPIs.</li>
<li>Avec le projet Operations, documente en SOP le processus complet d'onboarding d'un nouveau client (de la prise de contact à la première livraison).</li>
</ol>`,
  },
  {
    order: 63,
    module: 10,
    title: "Cas d'étude : businesses qui tournent avec Claude",
    slug: "cas-étude-businesses-claude",
    duration: "30 min",
    description: "Analyse détaillée de 4 business models construits et operes avec Claude comme outil principal.",
    content: `<h2>Pourquoi etudier des cas concrets</h2>
<p>La théorie, c'est bien. La pratique, c'est mieux. Dans cette leçon, on va analyser en détail 4 types de businesses qui utilisent Claude comme outil central de leur activité. Pour chaque cas, tu vas découvrir le modèle économique, les workflows concrets, les chiffres et les leçons a retenir.</p>
<p>Ces cas d'étude sont bases sur des modèles reels observes dans l'écosystème des entrepreneurs IA. Les chiffres sont des estimations realistes basees sur les tarifs du marché et les capacités de production avec Claude.</p>

<h2>Cas 1 : L'agence de contenu "ContentFlow"</h2>
<p><strong>Contexte</strong> : Marie, 32 ans, ex-journaliste. Elle a lance son agence de contenu IA il y a 8 mois. Elle travaille seule depuis chez elle.</p>
<p><strong>Services proposes</strong> :</p>
<ul>
<li>Pack Blog (4 articles/mois) : 800 euros/mois par client</li>
<li>Pack Social Media (20 posts LinkedIn + 15 posts Instagram) : 600 euros/mois</li>
<li>Pack Premium (blog + social + newsletter) : 1800 euros/mois</li>
<li>Livres blancs ponctuels : 1500 a 2500 euros piece</li>
</ul>
<p><strong>Workflow quotidien</strong> :</p>
<ol>
<li>8h-9h : Revue des briefs clients et planification de la journée</li>
<li>9h-12h : Production de contenu avec Claude (3-4 articles où équivalent)</li>
<li>12h-13h : Pause</li>
<li>13h-15h : Édition, personnalisation et livraison du contenu</li>
<li>15h-16h : Communication client, prospection, administratif</li>
</ol>
<p><strong>Chiffres a 8 mois</strong> :</p>
<ul>
<li>7 clients reguliers + missions ponctuelles</li>
<li>Chiffre d'affaires mensuel : 6500 a 8000 euros</li>
<li>Charges : 200 euros (abonnement Claude Pro + outils) + charges sociales</li>
<li>Temps de travail : 25-30 heures par semaine</li>
</ul>
<p><strong>Lecon clé</strong> : Marie a commence par offrir ses services a 3 clients a prix reduit (50% de remise) pour constituer son portfolio. En 2 mois, elle avait des études de cas chiffrées qui lui ont permis de signer ses premiers clients a plein tarif.</p>

<h2>Cas 2 : Le cabinet de consulting "AIstrategy"</h2>
<p><strong>Contexte</strong> : Thomas, 41 ans, ex-directeur marketing dans une ETI. Il s'est lance en consulting IA il y a 6 mois.</p>
<p><strong>Services proposes</strong> :</p>
<ul>
<li>Audit IA (2 jours) : 3000 euros</li>
<li>Implementation IA (1-2 semaines) : 5000 a 10000 euros</li>
<li>Formation équipes (1 journée) : 2000 euros</li>
<li>Accompagnement mensuel : 2500 euros/mois</li>
</ul>
<p><strong>Comment il utilise Claude</strong> :</p>
<ul>
<li>Préparation des audits : Claude analyse les processus decrits par le client et identifie les opportunités d'automatisation</li>
<li>Creation de livrables : rapports d'audit, feuilles de route, presentations PowerPoint</li>
<li>Supports de formation : slides, exercices pratiques, guides utilisateur</li>
<li>Suivi client : comptes rendus de réunion, plans d'action, emails de suivi</li>
</ul>
<p><strong>Chiffres a 6 mois</strong> :</p>
<ul>
<li>2-3 missions par mois en moyenne</li>
<li>Chiffre d'affaires mensuel : 8000 a 15000 euros</li>
<li>Pipeline : 40000 euros de missions signees pour les 3 prochains mois</li>
<li>Temps de travail : 30-35 heures par semaine</li>
</ul>
<p><strong>Lecon clé</strong> : Thomas a capitalise sur son réseau professionnel existant. Son premier client etait son ancien employeur. Le bouche a oreille a fait le reste — dans le B2B, un client satisfait en amene 2 a 3 autres.</p>

<h2>Cas 3 : Le SaaS tool "InvoiceGenius"</h2>
<p><strong>Contexte</strong> : Karim, 28 ans, developpeur autodidacte. Il a créé un outil SaaS qui utilise Claude via l'API pour générer des factures, des devis et des contrats automatiquement.</p>
<p><strong>Produit</strong> :</p>
<ul>
<li>Application web où l'utilisateur entre les informations de son business et de ses clients</li>
<li>Claude généré automatiquement des documents professionnels (factures, devis, CGV, contrats)</li>
<li>Intégration avec Stripe pour le paiement en ligne</li>
<li>Dashboard avec suivi des paiements et relances automatiques</li>
</ul>
<p><strong>Tarification</strong> :</p>
<ul>
<li>Plan Gratuit : 3 documents/mois</li>
<li>Plan Solo : 19 euros/mois (30 documents, 1 template personnalisé)</li>
<li>Plan Pro : 49 euros/mois (illimite, templates personnalises, relances auto)</li>
<li>Plan Agence : 99 euros/mois (multi-utilisateur, marque blanche)</li>
</ul>
<p><strong>Chiffres a 10 mois</strong> :</p>
<ul>
<li>850 utilisateurs inscrits, dont 120 payants</li>
<li>MRR (Monthly Recurring Revenue) : 3200 euros</li>
<li>Cout API Claude : environ 300 euros/mois</li>
<li>Cout hebergement : 50 euros/mois</li>
<li>Marge nette : environ 2800 euros/mois et en croissance de 15% par mois</li>
</ul>
<p><strong>Lecon clé</strong> : Karim a construit son MVP (produit minimum viable) en 3 semaines avec Claude Code. Il a lance sur Product Hunt et Reddit, obtenu ses 50 premiers utilisateurs gratuits, puis itere sur les feedbacks avant d'ajouter les plans payants.</p>

<h2>Cas 4 : Le service d'automatisation "AutoPilot Agency"</h2>
<p><strong>Contexte</strong> : Sophie et Alex, un couple. Ils vendent des services d'automatisation IA à des PME locales en combinant Claude et OpenClaw.</p>
<p><strong>Services proposes</strong> :</p>
<ul>
<li>Setup automatisation email : 300 euros (ponctuel) + 150 euros/mois de maintenance</li>
<li>Setup automatisation réseaux sociaux : 400 euros + 200 euros/mois</li>
<li>Pack complet (email + social + reporting) : 800 euros setup + 500 euros/mois</li>
<li>Agent virtuel WhatsApp pour le service client : 500 euros setup + 300 euros/mois</li>
</ul>
<p><strong>Comment ils utilisent Claude et OpenClaw</strong> :</p>
<ul>
<li>Claude sert a créer les prompts et les contenus personnalises pour chaque client</li>
<li>OpenClaw tourne en continu et exécuté les automatisations (envoi d'emails, publication social, réponses WhatsApp)</li>
<li>Claude analyse les performances et généré des rapports mensuels pour chaque client</li>
</ul>
<p><strong>Chiffres a 5 mois</strong> :</p>
<ul>
<li>12 clients sous contrat mensuel</li>
<li>Revenu récurrent mensuel : 4800 euros</li>
<li>Setups ponctuels : 1500 a 3000 euros/mois supplementaires</li>
<li>Couts (serveurs, API, outils) : environ 400 euros/mois</li>
<li>Temps de travail combine : 40 heures par semaine pour deux</li>
</ul>
<p><strong>Lecon clé</strong> : Sophie et Alex ont demarre en ciblant les commercants de leur quartier. Leur premier client etait le restaurant du coin, à qui ils ont offert le setup gratuitement en échange d'un temoignage. Ce temoignage leur a permis de signer 5 autres commercants dans la même rue.</p>

<h2>Les patterns communs aux 4 cas</h2>
<ul>
<li><strong>Demarrage rapide</strong> : Tous ont lance leur business en moins d'un mois. Pas de business plan de 50 pages, pas de levee de fonds — juste un service, un premier client et de l'iteration.</li>
<li><strong>Prix justifie par la valeur</strong> : Aucun ne vend du "temps IA". Ils vendent des résultats business mesurables.</li>
<li><strong>Revenu récurrent</strong> : Tous ont un composant d'abonnement où de contrat mensuel qui stabilise les revenus.</li>
<li><strong>Claude comme multiplicateur</strong> : Claude ne remplace pas le fondateur — il multiplie sa capacité de production par 5 a 10.</li>
</ul>

<blockquote>Le point commun de tous ces entrepreneurs a succes : ils n'ont pas attendu d'être "prets". Ils ont lance avec un service minimum, trouve leur premier client et itere. Le meilleur moment pour lancer ton business IA, c'est maintenant.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Relis les 4 cas d'étude et identifie celui qui correspond le mieux à tes compétences et tes aspirations. Explique pourquoi.</li>
<li>Pour le modèle choisi, créé un plan d'action sur 30 jours : semaine par semaine, quelles actions concretes tu vas prendre pour lancer.</li>
<li>Calcule ton seuil de rentabilité : combien de clients où de ventes te faut-il pour couvrir tes charges et te payer un salaire decent ?</li>
<li>Identifie ton premier client potentiel (une personne réelle dans ton réseau) et redige un message pour lui proposer tes services.</li>
<li>Créé un tableau de bord simple (Google Sheets où Notion) pour suivre tes prospects, tes clients, ton CA et tes KPIs.</li>
</ol>`,
  },
];
