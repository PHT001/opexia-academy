// Phase 4 : Projets Pratiques — Module 6 (6 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 9 : Projets Pratiques avec Claude (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 46,
    module: 6,
    title: "Projet : Landing page de vente haute conversion",
    slug: "projet-landing-page-vente-haute-conversion",
    duration: "50 min",
    description: "Construire une landing page professionnelle avec hero, bénéfices, témoignages et CTA responsive.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce premier projet pratique, tu vas construire de A à Z une landing page de vente haute conversion. Ce n'est pas un exercice théorique : à la fin de cette leçon, tu auras une page prête à mettre en production, que tu pourras montrer à des clients où utiliser dans ton portfolio.</p>
<p>Une landing page de vente est la pièce maîtresse de tout business en ligne. C'est la page qui transforme un visiteur en client. Les meilleures convertissent entre 5% et 15% des visiteurs. Pour atteindre ces chiffres, chaque élément compte : le titre, les visuels, la preuve sociale, l'appel à l'action.</p>

<h2>Architecture de la page</h2>
<p>Avant d'écrire la moindre ligne de code, on va planifier la structure. Une landing page haute conversion suit un schéma précis :</p>
<ul>
<li><strong>Hero Section</strong> : Titre accrocheur, sous-titre, CTA principal, image où vidéo</li>
<li><strong>Barre de confiance</strong> : Logos de clients où partenaires (social proof)</li>
<li><strong>Section Problème</strong> : Décrire la douleur du client idéal</li>
<li><strong>Section Solution</strong> : Présenter ton produit/service comme LA réponse</li>
<li><strong>Bénéfices</strong> : 3 à 6 bénéfices clés avec icones</li>
<li><strong>Témoignages</strong> : 3 témoignages clients avec photos et résultats</li>
<li><strong>Tarification</strong> : Un où plusieurs plans clairs</li>
<li><strong>FAQ</strong> : Lever les dernières objections</li>
<li><strong>CTA final</strong> : Dernière invitation à l'action</li>
<li><strong>Footer</strong> : Liens légaux, contact, réseaux sociaux</li>
</ul>

<h2>Étape 1 : Initialiser le projet avec Claude Code</h2>
<p>Ouvre ton terminal et lance Claude Code. On va créer un projet Next.js avec Tailwind CSS :</p>
<p>Donne à Claude Code cette instruction :</p>
<blockquote>Crée un projet Next.js avec Tailwind CSS et TypeScript pour une landing page de vente. Initialise le projet avec une structure de composants : HeroSection, TrustBar, ProblemSection, SolutionSection, BenefitsSection, TestimonialsSection, PricingSection, FAQSection et FooterCTA. Chaque composant dans son propre fichier dans /components/landing/.</blockquote>
<p>Claude Code va générer l'ensemble de la structure. Vérifie que tous les fichiers sont bien créés et que le projet compile sans erreur avec <code>npm run dev</code>.</p>

<h2>Étape 2 : Le Hero Section</h2>
<p>Le hero est la première chose que voit le visiteur. Tu as 3 secondes pour capter son attention. Voici ce qu'on va demander à Claude Code :</p>
<blockquote>Crée le composant HeroSection avec : un titre H1 de maximum 10 mots qui promet un résultat concret, un sous-titre de 2 lignes qui développe la promesse, un bouton CTA vert avec texte "Commencer maintenant", une image placeholder à droite sur desktop et en dessous sur mobile. Utilise Tailwind CSS avec des animations subtiles au scroll.</blockquote>
<p>Claude Code va générer un composant responsive. Les points clés à vérifier :</p>
<ul>
<li>Le titre est lisible sur mobile (taille de police adaptative)</li>
<li>Le bouton CTA à un contraste suffisant (rapport minimum 4.5:1)</li>
<li>L'image ne ralentit pas le chargement (utilise next/image)</li>
<li>Le layout passe bien en colonne sur mobile</li>
</ul>

<h2>Étape 3 : Preuve sociale et témoignages</h2>
<p>Demande à Claude Code :</p>
<blockquote>Crée une TrustBar avec 5 logos de partenaires en niveaux de gris qui défilent en boucle. Ensuite, crée TestimonialsSection avec 3 cartes témoignages contenant : photo ronde, nom, titre du poste, entreprise, texte du témoignage, note sur 5 étoiles. Utilise un carrousel automatique sur mobile et une grille 3 colonnes sur desktop.</blockquote>
<p>La preuve sociale est l'élément le plus puissant pour augmenter les conversions. Des études montrent que les témoignages augmentent les conversions de 34% en moyenne. Assure-toi que les témoignages sont spécifiques et mentionnent des résultats chiffrés.</p>

<h2>Étape 4 : Bénéfices et tarification</h2>
<p>Continue avec Claude Code pour créer les sections restantes. Pour la section bénéfices, demande 6 cartes avec icones, titre court et description en 2 lignes. Pour la tarification, demande un tableau comparatif avec 3 plans (Starter, Pro, Enterprise) avec le plan Pro mis en avant visuellement.</p>
<p>Claude Code peut aussi générer la section FAQ avec un composant accordéon (clic pour ouvrir/fermer chaque question). Demande-lui d'inclure 6 questions fréquentes avec des réponses qui lèvent les objections courantes.</p>

<h2>Étape 5 : Responsive et optimisation</h2>
<p>Demande à Claude Code de vérifier et ajuster l'ensemble de la page :</p>
<blockquote>Vérifie que toute la landing page est parfaitement responsive. Teste les breakpoints mobile (375px), tablette (768px) et desktop (1280px). Ajoute des animations au scroll avec Intersection Observer. Optimisé les images avec next/image. Ajoute les meta tags SEO et Open Graph pour le partage sur les réseaux sociaux.</blockquote>
<p>Les performances sont critiques : chaque seconde de chargement en plus réduit les conversions de 7%. Utilise Lighthouse pour vérifier que ton score est au-dessus de 90 sur les 4 critères.</p>

<h2>Étape 6 : Déploiement</h2>
<p>Pour déployer ta landing page, utilise Vercel. Claude Code peut t'aider à configurer le déploiement :</p>
<blockquote>Configure le déploiement Vercel pour ce projet. Ajoute un domaine personnalisé, configure les redirections et le fichier robots.txt. Ajoute aussi Google Analytics 4 pour tracker les conversions.</blockquote>
<p>Ta landing page est maintenant en ligne. Tu peux la montrer à tes clients potentiels et l'ajouter à ton portfolio. Ce projet démontre ta capacité à créer des pages web professionnelles rapidement grâce à l'IA.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un produit où service fictif (où réel) pour ta landing page. Définis le persona client idéal : âge, métier, problème principal, budget.</li>
<li>Utilise Claude Code pour générer l'intégralité de la landing page en suivant les étapes de la leçon. Tu dois obtenir au minimum 8 sections distinctes.</li>
<li>Teste le responsive sur 3 tailles d'écran différentes et corrige les problèmes éventuels avec Claude Code.</li>
<li>Déploie la page sur Vercel et partage le lien dans le groupe de la formation.</li>
<li>Bonus : ajoute un formulaire de capture d'email avec validation et stockage dans une base de données.</li>
</ol>`,
  },
  {
    order: 47,
    module: 6,
    title: "Projet : Chatbot FAQ intelligent pour entreprise",
    slug: "projet-chatbot-faq-intelligent-entreprise",
    duration: "50 min",
    description: "Construire un chatbot qui répond aux questions fréquentes à partir d'une base de connaissances.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un chatbot intelligent capable de répondre aux questions des visiteurs d'un site web en se basant sur une base de connaissances personnalisée. Ce n'est pas un simple chatbot avec des réponses pré-écrites : il utilise l'API Claude pour comprendre les questions et trouver les réponses pertinentes dans tes documents.</p>
<p>Ce type de chatbot est extrêmement demandé par les entreprises. Un chatbot FAQ bien configuré peut réduire de 60 à 80% les demandes au support client. C'est un projet à forte valeur ajoutée pour ton portfolio et tes futurs clients.</p>

<h2>Architecture technique</h2>
<p>Le chatbot repose sur une architecture RAG (Retrieval Augmented Génération) simplifiée :</p>
<ul>
<li><strong>Frontend</strong> : Widget de chat en React, intégrable sur n'importe quel site</li>
<li><strong>Backend</strong> : API Next.js qui reçoit les questions et retourne les réponses</li>
<li><strong>Base de connaissances</strong> : Fichiers Markdown où JSON contenant les FAQ</li>
<li><strong>Moteur IA</strong> : API Claude qui génère les réponses contextualisées</li>
</ul>
<p>Le flux est simple : l'utilisateur pose une question, le backend cherche les FAQ les plus pertinentes, les envoie à Claude avec la question, et Claude formule une réponse naturelle et précise.</p>

<h2>Étape 1 : Préparer la base de connaissances</h2>
<p>Demande à Claude Code de créer la structure du projet et la base de connaissances :</p>
<blockquote>Crée un projet Next.js avec TypeScript. Dans /data/knowledge-base/, crée 3 fichiers JSON : général.json (10 questions générales sur l'entreprise), produits.json (10 questions sur les produits/services), support.json (10 questions sur le support technique). Chaque entrée doit avoir un champ question, un champ réponse et un champ catégorie.</blockquote>
<p>La qualité de ta base de connaissances détermine directement la qualité des réponses. Chaque réponse doit être complète, précise et à jour. Claude Code peut t'aider à générer des FAQ réalistes pour un secteur donné.</p>

<h2>Étape 2 : Créer le backend API</h2>
<p>Le backend est le cerveau du chatbot. Demande à Claude Code :</p>
<blockquote>Crée une route API /api/chat qui reçoit une question en POST. La route doit : 1) Charger toutes les FAQ de la base de connaissances, 2) Calculer la similarité entre la question et chaque FAQ (utilise une recherche par mots-clés pour commencer), 3) Sélectionner les 3 FAQ les plus pertinentes, 4) Envoyer à l'API Claude un prompt avec ces FAQ comme contexte et la question de l'utilisateur, 5) Retourner la réponse de Claude en streaming.</blockquote>
<p>Le streaming est important pour l'expérience utilisateur : la réponse s'affiche mot par mot, comme si le chatbot "tapait" en temps réel. Claude Code va configurer le streaming avec l'API Anthropic.</p>

<h2>Étape 3 : Construire le widget de chat</h2>
<p>Le frontend doit être professionnel et intégrable. Demande à Claude Code :</p>
<blockquote>Crée un composant ChatWidget en React avec : un bouton flottant en bas à droite pour ouvrir/fermer le chat, une fenêtre de chat avec header (logo + nom du bot), une zone de messages avec bulles (utilisateur à droite, bot à gauche), un champ de saisie avec bouton d'envoi, un indicateur "en train de taper..." pendant la génération, la gestion du streaming pour afficher la réponse en temps réel. Style professionnel avec Tailwind CSS.</blockquote>
<p>Le widget doit être léger et ne pas impacter les performances du site hôte. Vérifie que le CSS n'entre pas en conflit avec le site parent en utilisant des classes préfixées où un shadow DOM.</p>

<h2>Étape 4 : Améliorer la pertinence</h2>
<p>Pour aller plus loin dans la recherche de pertinence, demande à Claude Code d'implémenter un système de scoring plus avancé. Au lieu d'une simple recherche par mots-clés, on peut utiliser l'embedding de texte pour calculer la similarité sémantique entre la question et les FAQ. Claude Code peut intégrer l'API d'embedding d'OpenAI où utiliser une librairie locale comme transformers.js.</p>
<p>Ajoute aussi un système de fallback : si aucune FAQ ne correspond avec un score suffisant, le chatbot doit répondre honnêtement qu'il ne connaît pas la réponse et proposer de contacter le support humain.</p>

<h2>Étape 5 : Historique et contexte de conversation</h2>
<p>Un bon chatbot se souvient du contexte de la conversation. Demande à Claude Code :</p>
<blockquote>Ajoute la gestion de l'historique de conversation. Le chatbot doit se souvenir des messages précédents dans la session. Envoie les 5 derniers messages à l'API Claude pour maintenir le contexte. Ajoute aussi un bouton "Nouvelle conversation" pour repartir de zéro.</blockquote>
<p>Le contexte permet au chatbot de répondre à des questions de suivi comme "Et pour le prix ?" sans que l'utilisateur ait besoin de répéter le produit dont il parle.</p>

<h2>Étape 6 : Intégration et déploiement</h2>
<p>Pour rendre le chatbot intégrable sur n'importe quel site, demande à Claude Code de créer un script d'intégration en une ligne :</p>
<blockquote>Crée un script d'intégration qui permet d'ajouter le chatbot sur n'importe quel site avec une seule balise script. Le script doit charger le widget dynamiquement, accepter des options de configuration (couleur, position, message d'accueil) et fonctionner sur tous les navigateurs modernes.</blockquote>
<p>Déploie le tout sur Vercel. Ton chatbot est maintenant un produit complet que tu peux vendre à des entreprises pour 500 à 2000 euros par installation, avec un abonnement mensuel pour la maintenance.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un secteur d'activité (e-commerce, immobilier, SaaS, restaurant) et crée une base de connaissances de 30 FAQ minimum.</li>
<li>Construis le chatbot complet en suivant les 6 étapes avec Claude Code. Vérifie que le streaming fonctionne correctement.</li>
<li>Teste avec 10 questions variées, dont 3 qui ne sont PAS dans ta base de connaissances (pour vérifier le fallback).</li>
<li>Crée le script d'intégration et intègre le chatbot sur une page HTML simple pour tester.</li>
<li>Bonus : ajoute un système de feedback (pouce en haut / pouce en bas) pour chaque réponse et stocke les résultats pour améliorer le chatbot.</li>
</ol>`,
  },
  {
    order: 48,
    module: 6,
    title: "Projet : Dashboard analytique interactif",
    slug: "projet-dashboard-analytique-interactif",
    duration: "45 min",
    description: "Construire un dashboard avec graphiques interactifs, filtres et données dynamiques.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire un dashboard analytique complet avec des graphiques interactifs, des filtres dynamiques et des données en temps réel. Ce type de dashboard est utilisé partout : e-commerce, SaaS, marketing digital, finance. C'est un projet qui impressionne les clients et les recruteurs car il démontre ta capacité à gérer la visualisation de données complexes.</p>
<p>Le dashboard que tu vas créer affichera des métriques business : chiffre d'affaires, nombre de clients, taux de conversion, évolution des ventes par mois, répartition géographique des clients, et top produits vendus.</p>

<h2>Stack technique</h2>
<p>On va utiliser une stack moderne et performante :</p>
<ul>
<li><strong>Next.js 14</strong> avec App Router pour le framework</li>
<li><strong>Recharts</strong> pour les graphiques (plus moderne et React-friendly que Chart.js)</li>
<li><strong>Tailwind CSS</strong> pour le style</li>
<li><strong>TanStack Query</strong> pour le fetching de données</li>
<li><strong>Mock API</strong> avec des données réalistes générées par Claude</li>
</ul>

<h2>Étape 1 : Structure et layout du dashboard</h2>
<p>Demande à Claude Code de créer la structure :</p>
<blockquote>Crée un projet Next.js avec un layout de dashboard professionnel : sidebar fixe à gauche avec navigation (Dashboard, Ventes, Clients, Produits, Paramètres), header en haut avec barre de recherche, notifications et avatar utilisateur, zone de contenu principale. Utilise Tailwind CSS avec un thème sombre/clair. La sidebar doit se replier en icones sur mobile.</blockquote>
<p>Le layout est la fondation de tout dashboard. Il doit être clair, navigable et fonctionner sur tous les écrans. Claude Code va générer un layout professionnel qui suit les standards UX des meilleurs dashboards du marché.</p>

<h2>Étape 2 : Générer les données mock</h2>
<p>Avant de créer les graphiques, on a besoin de données réalistes. Demande à Claude Code :</p>
<blockquote>Crée un fichier /lib/mock-data.ts qui génère des données réalistes pour un dashboard e-commerce : 12 mois de chiffre d'affaires (avec saisonnalité), 500 commandes avec date, montant, statut, produit et région, 200 clients avec nom, email, date d'inscription, total dépensé, et 20 produits avec nom, prix, catégorie, nombre de ventes. Les données doivent être cohérentes entre elles et représentent une entreprise en croissance.</blockquote>
<p>Des données réalistes sont essentielles pour que le dashboard soit convaincant. Claude Code peut générer des patterns de saisonnalité (pics en novembre-décembre pour le e-commerce) et des distributions réalistes.</p>

<h2>Étape 3 : Les KPI cards</h2>
<p>La première ligne du dashboard affiche les métriques clés. Demande à Claude Code :</p>
<blockquote>Crée un composant KPICard qui affiche : une icone, un label, une valeur principale, un pourcentage de variation par rapport au mois précédent (vert si positif, rouge si négatif), et un mini sparkline chart. Crée 4 KPI cards : Chiffre d'affaires total, Nombre de commandes, Panier moyen, Taux de conversion. Anime les chiffres au chargement avec un effet de comptage.</blockquote>
<p>Les KPI cards donnent une vue instantanée de la santé du business. L'animation de comptage ajoute un effet "wow" qui plaît aux clients. Les sparklines montrent la tendance sans prendre trop de place.</p>

<h2>Étape 4 : Les graphiques interactifs</h2>
<p>C'est le cœur du dashboard. Demande à Claude Code de créer plusieurs types de graphiques avec Recharts :</p>
<blockquote>Crée les graphiques suivants avec Recharts : 1) Un graphique en ligne montrant l'évolution du CA sur 12 mois avec tooltip au survol, 2) Un graphique en barres empilées montrant les ventes par catégorie de produit par mois, 3) Un graphique circulaire montrant la répartition des ventes par région, 4) Un graphique en aire montrant l'évolution du nombre de clients. Tous les graphiques doivent être responsive et avoir des couleurs cohérentes avec le thème du dashboard.</blockquote>
<p>Recharts est particulièrement adapté à React car chaque élément du graphique est un composant. Cela rend la personnalisation et l'interactivité beaucoup plus naturelles qu'avec Chart.js.</p>

<h2>Étape 5 : Filtres et interactivité</h2>
<p>Un bon dashboard permet de filtrer et explorer les données. Demande à Claude Code :</p>
<blockquote>Ajoute un système de filtres en haut du dashboard : sélection de la période (7 jours, 30 jours, 90 jours, 12 mois, personnalisé), filtre par catégorie de produit, filtre par région. Les filtres doivent mettre à jour tous les graphiques et KPI en temps réel sans rechargement de page. Ajoute aussi un tableau de données avec tri par colonne, recherche et pagination pour afficher le détail des commandes.</blockquote>
<p>L'interactivité est ce qui différencie un bon dashboard d'une simple page de graphiques statiques. Les filtres doivent être rapides et réactifs. Utilise des hooks React pour gérer l'état des filtres et filtrer les données côté client.</p>

<h2>Étape 6 : Export et fonctionnalités avancées</h2>
<p>Pour finaliser le dashboard, ajoute des fonctionnalités d'export et de personnalisation :</p>
<blockquote>Ajoute un bouton d'export PDF qui génère un rapport avec tous les graphiques et KPI actuels. Ajoute aussi un export CSV des données du tableau. Implémente un mode sombre/clair avec toggle dans le header. Enfin, ajoute un système de drag-and-drop pour réorganiser les widgets du dashboard.</blockquote>
<p>L'export est une fonctionnalité souvent demandée par les managers qui veulent partager les chiffres en réunion. Le drag-and-drop pour réorganiser les widgets donne un sentiment de personnalisation et de contrôle à l'utilisateur.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le dashboard complet en suivant les 6 étapes avec Claude Code. Utilise Recharts pour tous les graphiques.</li>
<li>Génère des données mock pour un secteur de ton choix (pas forcément e-commerce : SaaS, marketing, logistique...).</li>
<li>Implémente au minimum 3 types de graphiques différents et 2 filtres fonctionnels.</li>
<li>Ajoute le mode sombre/clair et vérifie que tous les graphiques sont lisibles dans les deux modes.</li>
<li>Déploie sur Vercel et partage le lien. Bonus : connecte le dashboard à une vraie API (par exemple une Google Sheet via l'API Google Sheets).</li>
</ol>`,
  },
  {
    order: 49,
    module: 6,
    title: "Projet : Mini SaaS (CRM simple)",
    slug: "projet-mini-saas-crm-simple",
    duration: "50 min",
    description: "Construire un CRM complet avec contacts, pipeline de deals, notes et CRUD.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet le plus ambitieux de cette phase : tu vas construire un mini SaaS complet. Un CRM (Customer Relationship Management) est un outil que toutes les entreprises utilisent pour gérer leurs contacts et leurs opportunités commerciales. Des outils comme HubSpot où Salesforce facturent des centaines d'euros par mois. Tu vas en construire une version simplifiée mais fonctionnelle.</p>
<p>Ce projet couvre toutes les compétences d'un développeur full-stack : base de données, API, interface utilisateur, authentification, et déploiement. C'est le type de projet qui te positionne comme un professionnel capable de construire de vrais produits.</p>

<h2>Stack technique</h2>
<ul>
<li><strong>Next.js 14</strong> avec App Router</li>
<li><strong>Prisma</strong> comme ORM pour gérer la base de données</li>
<li><strong>SQLite</strong> pour le développement (facile à configurer, zéro serveur)</li>
<li><strong>Tailwind CSS</strong> pour le style</li>
<li><strong>NextAuth.js</strong> pour l'authentification</li>
<li><strong>React Hook Form + Zod</strong> pour les formulaires et la validation</li>
</ul>

<h2>Étape 1 : Schéma de base de données avec Prisma</h2>
<p>Le schéma de données est le squelette de ton application. Demande à Claude Code :</p>
<blockquote>Crée un projet Next.js avec Prisma et SQLite. Définis le schéma Prisma avec les modèles suivants : User (id, email, name, password, createdAt), Contact (id, firstName, lastName, email, phone, company, position, status, notes, userId, createdAt, updatedAt), Deal (id, title, value, stage, probability, contactId, userId, expectedCloseDate, createdAt, updatedAt), Note (id, content, contactId, dealId, userId, createdAt), Activity (id, type, description, contactId, dealId, userId, createdAt). Les stages de deal sont : prospecting, qualification, proposal, negotiation, closed_won, closed_lost. Génère les migrations et le seed avec des données de test.</blockquote>
<p>Prisma simplifie énormément le travail avec la base de données. Tu écris le schéma en texte lisible, et Prisma génère les types TypeScript, les migrations et les requêtes automatiquement. Claude Code maîtrise parfaitement Prisma et va générer un schéma propre et bien structuré.</p>

<h2>Étape 2 : API CRUD complètes</h2>
<p>Chaque entité du CRM a besoin d'opérations Create, Read, Update, Delete. Demande à Claude Code :</p>
<blockquote>Crée les routes API pour le CRM : /api/contacts (GET liste paginée avec recherche, POST création), /api/contacts/[id] (GET détail, PUT mise à jour, DELETE suppression), /api/deals (GET liste avec filtres par stage, POST création), /api/deals/[id] (GET, PUT, DELETE), /api/notes (GET par contact où deal, POST création), /api/activities (GET timeline par contact). Chaque route doit valider les données avec Zod, gérer les erreurs proprement et retourner des réponses JSON standardisées.</blockquote>
<p>La validation est cruciale : ne fais jamais confiance aux données envoyées par le client. Zod permet de définir des schémas de validation puissants et de générer les types TypeScript correspondants automatiquement.</p>

<h2>Étape 3 : Interface contacts</h2>
<p>La page de gestion des contacts est le cœur du CRM. Demande à Claude Code :</p>
<blockquote>Crée la page /contacts avec : un tableau de contacts avec colonnes (nom, email, entreprise, statut, date de création), tri par colonne en cliquant sur le header, recherche en temps réel, pagination, un bouton "Ajouter un contact" qui ouvre un formulaire modal avec validation. Crée aussi la page /contacts/[id] avec les détails du contact, ses deals associés, ses notes et l'historique d'activité sous forme de timeline.</blockquote>
<p>L'interface doit être fluide et professionnelle. Les actions courantes (ajouter, modifier, supprimer) doivent être accessibles en un minimum de clics. Le feedback utilisateur est essentiel : affiche des notifications de succès où d'erreur après chaque action.</p>

<h2>Étape 4 : Pipeline de deals (Kanban)</h2>
<p>Le pipeline de deals est l'élément le plus visuel et le plus utile du CRM. Demande à Claude Code :</p>
<blockquote>Crée la page /deals avec une vue Kanban drag-and-drop. Chaque colonne représente un stage du pipeline (Prospection, Qualification, Proposition, Négociation, Gagné, Perdu). Chaque carte de deal affiche le titre, le montant, le contact associé et la probabilité. L'utilisateur peut déplacer les deals entre les colonnes en drag-and-drop. En haut, affiche le total de la valeur du pipeline et la valeur pondérée (montant x probabilité). Utilise la librairie @hello-pangea/dnd pour le drag-and-drop.</blockquote>
<p>La vue Kanban est intuitive et permet de voir en un coup d'œil où en sont toutes les opportunités commerciales. Le drag-and-drop rend la mise à jour des stages naturelle et rapide. La valeur pondérée du pipeline est un indicateur business essentiel qui aide à prévoir le chiffre d'affaires.</p>

<h2>Étape 5 : Authentification et sécurité</h2>
<p>Un CRM contient des données sensibles. L'authentification est obligatoire. Demande à Claude Code :</p>
<blockquote>Intègre NextAuth.js avec un provider credentials (email/mot de passe). Ajoute les pages de login et d'inscription avec formulaires valides. Protège toutes les routes API et pages avec des middlewares d'authentification. Chaque utilisateur ne voit que ses propres contacts et deals. Ajoute un hash bcrypt pour les mots de passe et un token CSRF pour les formulaires.</blockquote>
<p>La sécurité n'est pas optionnelle, même pour un projet de portfolio. Un CRM sans authentification ne serait pas pris au sérieux. NextAuth.js simplifie énormément l'implémentation tout en suivant les bonnes pratiques de sécurité.</p>

<h2>Étape 6 : Déploiement et finitions</h2>
<p>Pour le déploiement, on migre de SQLite vers PostgreSQL pour la production. Demande à Claude Code :</p>
<blockquote>Adapte le schéma Prisma pour supporter PostgreSQL en production (garde SQLite pour le dev). Configure le déploiement sur Vercel avec une base de données PostgreSQL sur Supabase où Neon. Ajoute un dashboard de statistiques sur la page d'accueil : nombre total de contacts, deals en cours, valeur du pipeline, graphique d'évolution des deals gagnés par mois.</blockquote>
<p>Ton CRM est maintenant un produit SaaS fonctionnel. Tu peux l'utiliser toi-même, le montrer en portfolio, où même le proposer à des petites entreprises qui n'ont pas le budget pour HubSpot.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le CRM complet en suivant les 6 étapes. Chaque étape doit être fonctionnelle avant de passer à la suivante.</li>
<li>Ajoute au minimum 20 contacts et 10 deals de test pour que le CRM semble réel.</li>
<li>Teste le pipeline Kanban : vérifie que le drag-and-drop met à jour le stage en base de données.</li>
<li>Crée un compte utilisateur, connecte-toi et vérifie que les données sont bien isolées par utilisateur.</li>
<li>Déploie sur Vercel avec PostgreSQL et partage le lien. Bonus : ajoute une fonctionnalité d'import/export CSV des contacts.</li>
</ol>`,
  },
  {
    order: 50,
    module: 6,
    title: "Projet : API REST complète avec authentification",
    slug: "projet-api-rest-complete-authentification",
    duration: "45 min",
    description: "Construire une API REST professionnelle avec JWT, validation, documentation et déploiement.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire une API REST de qualité production. Pas un simple exercice avec 2 routes : une API complète avec authentification JWT, validation des données, gestion d'erreurs standardisée, rate limiting, documentation Swagger, tests automatisés et déploiement. C'est le type d'API que tu construirais pour un vrai client où une vraie startup.</p>
<p>L'API que tu vas créer est une API de gestion de tâches collaboratives, comme une version simplifiée de Todoist où Asana. Plusieurs utilisateurs peuvent créer des projets, ajouter des tâches, assigner des tâches à d'autres utilisateurs et suivre l'avancement.</p>

<h2>Architecture de l'API</h2>
<p>Une API REST bien conçue suit des conventions strictes :</p>
<ul>
<li><strong>Ressources</strong> : /users, /projects, /tasks, /comments</li>
<li><strong>Verbes HTTP</strong> : GET (lire), POST (créer), PUT (modifier), DELETE (supprimer)</li>
<li><strong>Codes de statut</strong> : 200 (OK), 201 (créé), 400 (mauvaise requête), 401 (non authentifié), 403 (interdit), 404 (non trouvé), 500 (erreur serveur)</li>
<li><strong>Pagination</strong> : ?page=1&limit=20 pour les listes</li>
<li><strong>Filtres</strong> : ?status=active&priority=high pour filtrer</li>
<li><strong>Relations</strong> : /projects/123/tasks pour les sous-ressources</li>
</ul>

<h2>Étape 1 : Setup du projet</h2>
<p>Demande à Claude Code de créer la base du projet :</p>
<blockquote>Crée un projet Node.js avec Express et TypeScript. Configure Prisma avec PostgreSQL (SQLite pour le dev). Installe et configure : cors, helmet (sécurité), morgan (logging), express-rate-limit, zod (validation), jsonwebtoken (JWT), bcryptjs (hash), swagger-jsdoc et swagger-ui-express (documentation). Structure le projet en couches : routes, controllers, services, middlewares, validators.</blockquote>
<p>La structure en couches est essentielle pour la maintenabilité. Les routes définissent les endpoints, les controllers gèrent les requêtes/réponses, les services contiennent la logique métier, et les middlewares gèrent les préoccupations transversales (auth, validation, erreurs).</p>

<h2>Étape 2 : Authentification JWT</h2>
<p>L'authentification est la première brique. Demande à Claude Code :</p>
<blockquote>Implémente l'authentification JWT complète : POST /auth/register (inscription avec email, nom, mot de passe), POST /auth/login (connexion, retourne access token + refresh token), POST /auth/refresh (renouveler l'access token avec le refresh token), POST /auth/logout (invalider le refresh token). L'access token expire en 15 minutes, le refresh token en 7 jours. Hash les mots de passe avec bcrypt (12 rounds). Crée un middleware authMiddleware qui vérifie le JWT sur les routes protégées.</blockquote>
<p>Le système de double token (access + refresh) est le standard de l'industrie. L'access token à une durée de vie courte pour limiter les risques en cas de vol. Le refresh token permet de renouveler l'access token sans redemander le mot de passe. Claude Code va implémenter ce pattern correctement avec les bonnes pratiques de sécurité.</p>

<h2>Étape 3 : CRUD des ressources</h2>
<p>Construis les endpoints pour chaque ressource. Demande à Claude Code :</p>
<blockquote>Crée les CRUD complets pour les ressources Projects et Tasks. Pour Projects : GET /projects (liste paginée de mes projets), POST /projects (créer), GET /projects/:id (détail avec tâches), PUT /projects/:id (modifier, seulement si owner), DELETE /projects/:id (supprimer, seulement si owner). Pour Tasks : GET /projects/:id/tasks (tâches du projet, filtrable par status et priority), POST /projects/:id/tasks (créer une tâche), PUT /tasks/:id (modifier), DELETE /tasks/:id (supprimer). Chaque endpoint valide les données avec Zod et retourne des erreurs structurées.</blockquote>
<p>Les réponses d'erreur doivent être cohérentes sur toute l'API. Utilise un format standardisé comme <code>{"error": {"code": "VALIDATION_ERROR", "message": "...", "détails": [...]}}</code>. Claude Code va créer un error handler centralisé qui formate toutes les erreurs de la même manière.</p>

<h2>Étape 4 : Fonctionnalités avancées</h2>
<p>Ajoute des fonctionnalités qui font la différence. Demande à Claude Code :</p>
<blockquote>Ajoute les fonctionnalités suivantes : 1) Assignation de tâches à un autre utilisateur du projet, 2) Commentaires sur les tâches (CRUD complet), 3) Recherche full-text sur les titres et descriptions des tâches, 4) Tri par date de création, priorité où date d'échéance, 5) Rate limiting : 100 requêtes par minute par utilisateur, 6) Logging structuré avec Winston pour tracer toutes les requêtes.</blockquote>
<p>Le rate limiting protège ton API contre les abus. Le logging structuré permet de debugger les problèmes en production et de suivre l'utilisation de l'API. Ce sont des éléments que les développeurs juniors oublient souvent mais qui sont essentiels en production.</p>

<h2>Étape 5 : Documentation Swagger</h2>
<p>Une API sans documentation est inutilisable. Demande à Claude Code :</p>
<blockquote>Ajoute une documentation Swagger/OpenAPI complète accessible sur /api-docs. Chaque endpoint doit être documenté avec : description, paramètres, corps de requête (avec exemples), réponses possibles (avec exemples pour chaque code de statut), et indication si l'authentification est requise. Ajoute un bouton "Try it out" pour tester les endpoints directement depuis la documentation.</blockquote>
<p>Swagger transforme ta documentation en une interface interactive. Les utilisateurs de ton API peuvent tester les endpoints directement depuis le navigateur. C'est devenu le standard de l'industrie pour la documentation d'API REST.</p>

<h2>Étape 6 : Tests et déploiement</h2>
<p>Avant de déployer, il faut tester. Demande à Claude Code :</p>
<blockquote>Écris des tests d'intégration avec Jest et Supertest pour les endpoints critiques : inscription, connexion, CRUD de projets, CRUD de tâches. Chaque test doit utiliser une base de données SQLite en mémoire. Configure le déploiement sur Railway avec une base PostgreSQL. Ajoute un pipeline CI/CD basique avec GitHub Actions qui lance les tests à chaque push.</blockquote>
<p>Les tests d'intégration vérifient que tes endpoints fonctionnent de bout en bout. Le pipeline CI/CD empêche de déployer du code cassé. Avec Railway, le déploiement est aussi simple qu'un git push. Ton API est maintenant en production, documentée et testée.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'API complète en suivant les 6 étapes. Vérifie chaque endpoint avec Postman où la documentation Swagger.</li>
<li>Teste le flux complet : inscription, connexion, création de projet, ajout de tâches, assignation, commentaires.</li>
<li>Vérifie que les protections fonctionnent : essaie d'accéder à un projet d'un autre utilisateur, d'envoyer des données invalides, de dépasser le rate limit.</li>
<li>Écris au minimum 10 tests d'intégration couvrant les cas critiques et les cas d'erreur.</li>
<li>Déploie sur Railway et partage l'URL de la documentation Swagger. Bonus : ajoute des webhooks qui envoient une notification quand une tâche est assignée.</li>
</ol>`,
  },
  {
    order: 51,
    module: 6,
    title: "Projet : Application full-stack déployée",
    slug: "projet-application-full-stack-déployée",
    duration: "50 min",
    description: "Construire une application complète avec frontend, backend, auth et déploiement sur Vercel.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet final du Module 7, et c'est le plus complet. Tu vas construire une application full-stack de gestion de projets, de la première ligne de code au déploiement en production. Cette application sera ta pièce maîtresse de portfolio : elle démontre que tu peux construire un produit complet, fonctionnel et déployé.</p>
<p>L'application est un gestionnaire de projets collaboratif. Chaque utilisateur peut créer des projets, ajouter des tâches avec des deadlines et des priorités, organiser ses tâches en colonnes Kanban, et suivre sa productivité avec un dashboard personnel.</p>

<h2>Vue d'ensemble de l'application</h2>
<p>L'application finale comprend :</p>
<ul>
<li><strong>Page d'accueil</strong> : Landing page de présentation avec CTA vers l'inscription</li>
<li><strong>Authentification</strong> : Inscription, connexion, déconnexion, page de profil</li>
<li><strong>Dashboard</strong> : Vue d'ensemble avec KPIs (tâches terminées, en cours, en retard)</li>
<li><strong>Projets</strong> : Liste des projets, création, modification, suppression</li>
<li><strong>Tâches</strong> : Vue Kanban avec drag-and-drop, formulaire de création/édition</li>
<li><strong>Profil</strong> : Modifier son nom, email, avatar, mot de passe</li>
</ul>

<h2>Étape 1 : Architecture et setup</h2>
<p>Demande à Claude Code de créer l'architecture complète :</p>
<blockquote>Crée un projet Next.js 14 avec App Router, TypeScript, Tailwind CSS, Prisma (SQLite pour dev), NextAuth.js. Structure les dossiers : /app/(auth)/login et register, /app/(dashboard)/dashboard, projects, projects/[id], profile. Crée le layout principal avec sidebar responsive. Configure Prisma avec les modèles User, Project, Task (title, description, status, priority, dueDate, projectId, assigneeId). Génère les migrations et un fichier seed.</blockquote>
<p>L'App Router de Next.js 14 permet d'organiser les routes avec des dossiers. Les groupes de routes entre parenthèses (auth) et (dashboard) permettent de partager des layouts différents entre les pages publiques et les pages protégées.</p>

<h2>Étape 2 : Authentification complète</h2>
<p>L'authentification est le premier élément à implémenter car toutes les autres pages en dépendent. Demande à Claude Code :</p>
<blockquote>Implémente l'authentification complète avec NextAuth.js : page de login avec email/mot de passe et design professionnel, page d'inscription avec validation (email valide, mot de passe 8 caractères minimum), redirection automatique vers le dashboard après connexion, middleware de protection des routes /dashboard/*, bouton de déconnexion dans la sidebar, affichage du nom et de l'avatar de l'utilisateur dans le header.</blockquote>
<p>Teste l'authentification en profondeur : essaie de créer un compte avec un email déjà utilisé, de te connecter avec un mauvais mot de passe, d'accéder au dashboard sans être connecté. Chaque cas doit afficher un message d'erreur clair et utile.</p>

<h2>Étape 3 : Gestion des projets</h2>
<p>Demande à Claude Code de construire l'interface de gestion des projets :</p>
<blockquote>Crée la page /projects avec une grille de cartes projet. Chaque carte affiche le nom du projet, la description (tronquée), le nombre de tâches total et terminées, une barre de progression, et la date de dernière mise à jour. Ajoute un bouton "Nouveau projet" qui ouvre un formulaire modal. Crée la page /projects/[id] avec le détail du projet : description complète, vue Kanban des tâches, et un onglet paramètres pour modifier où supprimer le projet.</blockquote>
<p>La barre de progression sur chaque carte projet donne une vue instantanée de l'avancement. C'est un détail UX qui fait toute la différence dans un portfolio : cela montre que tu penses à l'expérience utilisateur et pas seulement à la fonctionnalité.</p>

<h2>Étape 4 : Vue Kanban des tâches</h2>
<p>La vue Kanban est l'élément central de l'application. Demande à Claude Code :</p>
<blockquote>Crée une vue Kanban avec 4 colonnes : À faire, En cours, En review, Terminé. Chaque tâche est une carte draggable affichant le titre, la priorité (basse/moyenne/haute/urgente avec code couleur), la date d'échéance (rouge si dépassée), et l'avatar de l'assignée. Implémente le drag-and-drop avec @hello-pangea/dnd. Quand une carte est déplacée, mets à jour le statut en base de données via une route API. Ajoute un formulaire de création de tâche avec titre, description, priorité, date d'échéance et assignée.</blockquote>
<p>Le drag-and-drop est l'interaction qui rend l'application vraiment agréable à utiliser. Chaque déplacement doit être fluide, avec un feedback visuel clair (ombre portée sur la carte en cours de déplacement, highlight de la zone de dépôt). Claude Code va générer tout le code nécessaire avec les animations appropriées.</p>

<h2>Étape 5 : Dashboard personnel</h2>
<p>Le dashboard est la page d'accueil après connexion. Demande à Claude Code :</p>
<blockquote>Crée la page /dashboard avec : 4 KPI cards (tâches à faire, en cours, terminées cette semaine, en retard), un graphique en ligne montrant les tâches terminées par jour sur les 30 derniers jours (avec Recharts), une liste des 5 tâches les plus urgentes (triées par date d'échéance), un aperçu de l'activité récente (tâches créées, déplacées, terminées). Le dashboard doit se charger rapidement en utilisant les Server Components de Next.js.</blockquote>
<p>Les Server Components de Next.js 14 permettent de charger les données directement côté serveur, sans API calls supplémentaires. Le dashboard se charge en un seul round-trip, ce qui le rend très rapide. Claude Code va optimiser les requêtes Prisma pour charger toutes les données nécessaires efficacement.</p>

<h2>Étape 6 : Déploiement sur Vercel</h2>
<p>Le déploiement est la dernière étape, mais pas la moindre. Demande à Claude Code :</p>
<blockquote>Configure le déploiement sur Vercel : migre la base de données de SQLite vers PostgreSQL en utilisant Neon (gratuit), configure les variables d'environnement (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL), ajoute un domaine personnalisé si disponible, configure les headers de sécurité (CSP, HSTS). Ajoute un fichier README professionnel avec screenshots, stack technique, et instructions d'installation locale.</blockquote>
<p>Ton application est maintenant en ligne. Tu as un produit complet, fonctionnel et déployé. C'est exactement ce que les clients et les recruteurs veulent voir : pas des exercices académiques, mais des vrais produits qui marchent. Ajoute le lien dans ton portfolio, sur ton LinkedIn, et dans ton CV.</p>

<blockquote>Ce projet seul démontre plus de compétences techniques que 90% des portfolios de développeurs juniors. Tu l'as construit en une journée grâce à Claude Code.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'application complète en suivant les 6 étapes. Ne passe pas à l'étape suivante tant que l'étape en cours ne fonctionne pas parfaitement.</li>
<li>Crée 3 projets avec au minimum 10 tâches chacun pour que l'application semble vivante.</li>
<li>Teste toutes les fonctionnalités : inscription, connexion, création de projet, ajout de tâches, drag-and-drop Kanban, dashboard.</li>
<li>Déploie sur Vercel avec PostgreSQL et vérifie que tout fonctionne en production.</li>
<li>Prends des screenshots de l'application et crée une courte vidéo de démo (1-2 minutes) que tu pourras montrer à des clients potentiels.</li>
</ol>`,
  },
  // Module 9 (OpenClaw projects) removed — ClawBot condensed into 1 module
];
