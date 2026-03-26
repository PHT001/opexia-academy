  {
    order: 48,
    module: 8,
    title: "Projet : Dashboard analytique interactif",
    slug: "projet-dashboard-analytique-interactif",
    duration: "80 min",
    description: "Construire un dashboard avec graphiques interactifs, filtres et données dynamiques.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire un dashboard analytique complet avec des graphiques interactifs, des filtres dynamiques et des données en temps réel. Ce type de dashboard est utilisé partout : e-commerce, SaaS, marketing digital, finance. C'est un projet qui impressionne les clients et les recruteurs car il démontre ta capacité à gérer la visualisation de données complexes.</p>
<p>Le dashboard que tu vas créer affichera des métriques business : chiffre d'affaires, nombre de clients, taux de conversion, évolution des ventes par mois, répartition géographique des clients, et top produits vendus.</p>
<p>Pour te donner un ordre d'idée de la valeur de ce projet : les entreprises payent entre 5 000 et 50 000 euros pour un dashboard sur mesure selon la complexité. Même une version simple mais bien faite se facture facilement 2 000 à 5 000 euros en freelance. Et avec Claude Code, tu peux le construire en une journée au lieu de deux semaines.</p>
<p>Imagine que tu travailles pour une entreprise e-commerce qui vend des produits artisanaux. Le directeur commercial veut voir en un coup d'œil si le mois est bon, quels produits se vendent le mieux, et d'où viennent les clients. Aujourd'hui, il passe 2 heures chaque matin à compiler des données depuis 3 outils différents. Ton dashboard va remplacer ces 2 heures par un coup d'œil de 30 secondes.</p>
<p><strong>Astuce :</strong> Avant de coder, dessine un croquis rapide de ton dashboard sur papier ou avec un outil comme Excalidraw. Place les éléments les plus importants en haut à gauche (c'est là que l'œil regarde en premier), les graphiques au centre, et les détails en bas. Ce croquis te fera gagner un temps considérable lors de l'implémentation.</p>

<h2>Stack technique</h2>
<p>On va utiliser une stack moderne et performante :</p>
<ul>
<li><strong>Next.js 14</strong> avec App Router pour le framework — le standard de l'industrie pour les applications React</li>
<li><strong>Recharts</strong> pour les graphiques (plus moderne et React-friendly que Chart.js) — chaque graphique est un composant React, ce qui facilite l'interactivité</li>
<li><strong>Tailwind CSS</strong> pour le style — prototypage rapide et design cohérent</li>
<li><strong>TanStack Query</strong> pour le fetching de données — gestion automatique du cache, du loading et des erreurs</li>
<li><strong>Mock API</strong> avec des données réalistes générées par Claude — pour simuler un vrai backend sans en avoir besoin</li>
</ul>
<p>Pourquoi Recharts plutôt que Chart.js ou D3.js ? Chart.js utilise un canvas HTML, ce qui le rend moins flexible pour l'interactivité. D3.js est extrêmement puissant mais complexe — c'est comme utiliser un tank pour aller au supermarché. Recharts offre le meilleur compromis : simple à utiliser, natif React, et suffisamment flexible pour 95% des cas d'usage business.</p>
<p><strong>Conseil pro :</strong> TanStack Query (ex React Query) est un outil indispensable pour les dashboards. Il gère automatiquement le cache des données, le refetch en arrière-plan, et l'état de chargement. Sans lui, tu devrais écrire des dizaines de lignes de code pour gérer ces cas manuellement. Avec lui, une seule ligne suffit : <code>const { data, isLoading } = useQuery({ queryKey: ['sales'], queryFn: fetchSales })</code>.</p>

<h2>Étape 1 : Structure et layout du dashboard</h2>
<p>Demande à Claude Code de créer la structure :</p>
<blockquote>Crée un projet Next.js avec un layout de dashboard professionnel : sidebar fixe à gauche avec navigation (Dashboard, Ventes, Clients, Produits, Paramètres), header en haut avec barre de recherche, notifications et avatar utilisateur, zone de contenu principale. Utilise Tailwind CSS avec un thème sombre/clair. La sidebar doit se replier en icônes sur mobile.</blockquote>
<p>Le layout est la fondation de tout dashboard. Il doit être clair, navigable et fonctionner sur tous les écrans. Claude Code va générer un layout professionnel qui suit les standards UX des meilleurs dashboards du marché.</p>
<p>Voici les principes UX essentiels pour un layout de dashboard :</p>
<ul>
<li><strong>Sidebar fixe :</strong> Toujours visible, elle permet de naviguer rapidement entre les sections. 60-70px de large en mode replié, 240-280px en mode déplié.</li>
<li><strong>Header compact :</strong> Maximum 64px de hauteur. Il contient la barre de recherche, les notifications et le profil utilisateur — rien de plus.</li>
<li><strong>Zone de contenu :</strong> C'est la star du show. Elle doit occuper tout l'espace restant avec un padding confortable (24-32px).</li>
<li><strong>Scroll vertical uniquement :</strong> Jamais de scroll horizontal. Si le contenu ne rentre pas, réorganise plutôt que de demander à l'utilisateur de scroller horizontalement.</li>
</ul>
<p><strong>Attention :</strong> Le mode sombre n'est pas juste "inverser les couleurs". Il faut penser aux contrastes, à la hiérarchie visuelle et à la lisibilité des graphiques. Un gris foncé (#1F2937) est plus confortable qu'un noir pur (#000000) pour le fond. Les textes doivent être en gris clair (#E5E7EB) plutôt qu'en blanc pur (#FFFFFF) pour réduire la fatigue visuelle.</p>

<h2>Étape 2 : Générer les données mock</h2>
<p>Avant de créer les graphiques, on a besoin de données réalistes. Demande à Claude Code :</p>
<blockquote>Crée un fichier /lib/mock-data.ts qui génère des données réalistes pour un dashboard e-commerce : 12 mois de chiffre d'affaires (avec saisonnalité), 500 commandes avec date, montant, statut, produit et région, 200 clients avec nom, email, date d'inscription, total dépensé, et 20 produits avec nom, prix, catégorie, nombre de ventes. Les données doivent être cohérentes entre elles et représentent une entreprise en croissance.</blockquote>
<p>Des données réalistes sont essentielles pour que le dashboard soit convaincant. Claude Code peut générer des patterns de saisonnalité (pics en novembre-décembre pour le e-commerce) et des distributions réalistes.</p>
<p>Les détails qui rendent les données mock convaincantes :</p>
<ul>
<li><strong>Saisonnalité :</strong> Le CA doit être plus élevé en novembre-décembre (Black Friday, Noël) et plus bas en janvier-février. Un pic de +40% en décembre est réaliste pour le e-commerce.</li>
<li><strong>Croissance :</strong> L'entreprise est en croissance, donc le CA de chaque mois doit être légèrement supérieur au même mois de l'année précédente (+15-25%).</li>
<li><strong>Distribution des commandes :</strong> La plupart des commandes sont entre 20€ et 80€, avec quelques grosses commandes à +200€. C'est une distribution log-normale, typique du e-commerce.</li>
<li><strong>Cohérence :</strong> La somme de toutes les commandes doit correspondre au CA total. Le nombre de clients actifs doit être inférieur au nombre total de clients inscrits.</li>
</ul>
<p><strong>Astuce :</strong> Utilise une seed fixe pour le générateur aléatoire. Ça garantit que les données sont identiques à chaque rechargement de page, ce qui rend le développement et le debugging beaucoup plus faciles. Tu pourras retirer la seed en production pour avoir des données dynamiques.</p>

<h2>Étape 3 : Les KPI cards</h2>
<p>La première ligne du dashboard affiche les métriques clés. Demande à Claude Code :</p>
<blockquote>Crée un composant KPICard qui affiche : une icône, un label, une valeur principale, un pourcentage de variation par rapport au mois précédent (vert si positif, rouge si négatif), et un mini sparkline chart. Crée 4 KPI cards : Chiffre d'affaires total, Nombre de commandes, Panier moyen, Taux de conversion. Anime les chiffres au chargement avec un effet de comptage.</blockquote>
<p>Les KPI cards donnent une vue instantanée de la santé du business. L'animation de comptage ajoute un effet "wow" qui plaît aux clients. Les sparklines montrent la tendance sans prendre trop de place.</p>
<p>L'animation de comptage est un détail qui fait toute la différence dans une démo client. Au lieu d'afficher "47 832€" d'un coup, le chiffre "monte" de 0 à 47 832 en 1.5 seconde. C'est visuellement satisfaisant et ça attire l'attention sur les métriques importantes. Pour l'implémenter, tu peux utiliser la librairie <code>react-countup</code> ou un simple <code>useEffect</code> avec <code>requestAnimationFrame</code>.</p>
<p>Les couleurs de variation sont standardisées et universellement comprises :</p>
<ul>
<li><strong>Vert (#10B981) + flèche vers le haut :</strong> Progression positive — la métrique s'améliore</li>
<li><strong>Rouge (#EF4444) + flèche vers le bas :</strong> Régression — la métrique se dégrade</li>
<li><strong>Gris (#6B7280) :</strong> Stable — pas de changement significatif (variation < 1%)</li>
</ul>
<p><strong>Conseil pro :</strong> Attention au "rouge = mauvais" systématique. Pour certaines métriques comme le taux de rebond ou le coût d'acquisition, une baisse est positive. Pense à inverser les couleurs pour ces métriques-là. Un taux de rebond qui passe de 65% à 55% devrait être en vert, pas en rouge.</p>

<h2>Étape 4 : Les graphiques interactifs</h2>
<p>C'est le cœur du dashboard. Demande à Claude Code de créer plusieurs types de graphiques avec Recharts :</p>
<blockquote>Crée les graphiques suivants avec Recharts : 1) Un graphique en ligne montrant l'évolution du CA sur 12 mois avec tooltip au survol, 2) Un graphique en barres empilées montrant les ventes par catégorie de produit par mois, 3) Un graphique circulaire montrant la répartition des ventes par région, 4) Un graphique en aire montrant l'évolution du nombre de clients. Tous les graphiques doivent être responsive et avoir des couleurs cohérentes avec le thème du dashboard.</blockquote>
<p>Recharts est particulièrement adapté à React car chaque élément du graphique est un composant. Cela rend la personnalisation et l'interactivité beaucoup plus naturelles qu'avec Chart.js.</p>
<p>Voici les bonnes pratiques pour des graphiques professionnels :</p>
<ul>
<li><strong>Tooltips au survol :</strong> Quand l'utilisateur survole un point de donnée, affiche les détails (date, valeur, variation). C'est le minimum pour un graphique interactif.</li>
<li><strong>Palette de couleurs cohérente :</strong> Utilise 5-6 couleurs maximum, issues de la même palette. Les palettes de Tailwind (blue-500, green-500, purple-500, orange-500, pink-500) fonctionnent très bien ensemble.</li>
<li><strong>Légende claire :</strong> Place la légende sous le graphique ou à droite. Chaque série doit être facilement identifiable.</li>
<li><strong>Axes formatés :</strong> Affiche les montants en "47K€" au lieu de "47000" et les dates en "Jan", "Fév" au lieu de "2024-01-01".</li>
<li><strong>Animations douces :</strong> Recharts supporte les animations nativement. Un <code>animationDuration={1000}</code> donne un effet professionnel au chargement.</li>
</ul>
<p><strong>Attention :</strong> Ne surcharge pas le dashboard avec trop de graphiques. 4 à 6 graphiques par page est le maximum. Au-delà, l'utilisateur ne sait plus où regarder et l'information perd son impact. Si tu as plus de données à montrer, crée des sous-pages (Ventes, Clients, Produits) accessibles depuis la sidebar.</p>
<p><strong>Astuce :</strong> Pour que tes graphiques soient lisibles en mode sombre, utilise des couleurs vives avec une opacité de 80% pour les zones remplies, et des bordures plus claires. Le fond sombre absorbe la lumière, donc les couleurs doivent être plus saturées qu'en mode clair.</p>

<h2>Étape 5 : Filtres et interactivité</h2>
<p>Un bon dashboard permet de filtrer et explorer les données. Demande à Claude Code :</p>
<blockquote>Ajoute un système de filtres en haut du dashboard : sélection de la période (7 jours, 30 jours, 90 jours, 12 mois, personnalisé), filtre par catégorie de produit, filtre par région. Les filtres doivent mettre à jour tous les graphiques et KPI en temps réel sans rechargement de page. Ajoute aussi un tableau de données avec tri par colonne, recherche et pagination pour afficher le détail des commandes.</blockquote>
<p>L'interactivité est ce qui différencie un bon dashboard d'une simple page de graphiques statiques. Les filtres doivent être rapides et réactifs. Utilise des hooks React pour gérer l'état des filtres et filtrer les données côté client.</p>
<p>Le filtre de période est le plus important. Voici comment l'implémenter efficacement :</p>
<ul>
<li><strong>Boutons prédéfinis :</strong> "7j", "30j", "90j", "12m" — couvrent 90% des besoins. Le bouton actif est mis en surbrillance.</li>
<li><strong>Date picker personnalisé :</strong> Pour les cas spécifiques, un sélecteur de dates avec début et fin. Utilise la librairie <code>react-day-picker</code> pour un résultat professionnel.</li>
<li><strong>Comparaison :</strong> Option "Comparer avec la période précédente" — montre deux courbes sur le même graphique pour visualiser la progression.</li>
</ul>
<p>Le tableau de données est souvent sous-estimé mais c'est une fonctionnalité essentielle. Les managers adorent pouvoir explorer les données brutes quand un chiffre leur semble surprenant. Les fonctionnalités indispensables du tableau :</p>
<ul>
<li><strong>Tri par colonne :</strong> Clic sur le header pour trier (ascendant/descendant). Indique la direction du tri avec une flèche.</li>
<li><strong>Recherche instantanée :</strong> Un champ de recherche qui filtre les lignes en temps réel.</li>
<li><strong>Pagination :</strong> 20-50 lignes par page avec navigation. Ne charge jamais 500 lignes d'un coup — c'est lent et inutilisable.</li>
<li><strong>Export CSV :</strong> Un bouton pour télécharger les données filtrées. Les managers en ont besoin pour leurs propres analyses dans Excel.</li>
</ul>
<p><strong>Conseil pro :</strong> Quand un filtre est actif, affiche un badge ou un indicateur visuel. Rien de pire qu'un utilisateur qui regarde des données filtrées sans le réaliser et qui se demande pourquoi les chiffres sont "bizarres". Un simple badge "Filtre actif : Électronique" au-dessus du dashboard suffit.</p>

<h2>Étape 6 : Export et fonctionnalités avancées</h2>
<p>Pour finaliser le dashboard, ajoute des fonctionnalités d'export et de personnalisation :</p>
<blockquote>Ajoute un bouton d'export PDF qui génère un rapport avec tous les graphiques et KPI actuels. Ajoute aussi un export CSV des données du tableau. Implémente un mode sombre/clair avec toggle dans le header. Enfin, ajoute un système de drag-and-drop pour réorganiser les widgets du dashboard.</blockquote>
<p>L'export est une fonctionnalité souvent demandée par les managers qui veulent partager les chiffres en réunion. Le drag-and-drop pour réorganiser les widgets donne un sentiment de personnalisation et de contrôle à l'utilisateur.</p>
<p>Pour l'export PDF, utilise la librairie <code>html2canvas</code> combinée avec <code>jsPDF</code>. Le processus est simple :</p>
<ol>
<li><code>html2canvas</code> prend une capture d'écran de chaque section du dashboard</li>
<li><code>jsPDF</code> assemble ces captures dans un document PDF propre</li>
<li>Le résultat est un rapport PDF professionnel généré en quelques secondes</li>
</ol>
<p>Pour le drag-and-drop des widgets, utilise la librairie <code>react-grid-layout</code>. Elle permet aux utilisateurs de déplacer et redimensionner les widgets du dashboard comme sur un écran d'accueil de smartphone. Les positions sont sauvegardées dans le localStorage pour persister entre les sessions.</p>
<p><strong>Astuce :</strong> Ajoute un bouton "Réinitialiser le layout" pour revenir à la disposition par défaut. Certains utilisateurs vont déplacer les widgets par erreur et ne sauront plus comment revenir en arrière. Ce bouton les rassure et évite des tickets de support inutiles.</p>
<p><strong>Conseil pro :</strong> Pour impressionner un client ou un recruteur, ajoute une fonctionnalité de "données en temps réel". Même avec des données mock, tu peux simuler une mise à jour toutes les 30 secondes avec un <code>setInterval</code> qui ajoute une nouvelle commande aléatoire. Le dashboard se met à jour en live devant les yeux du spectateur — effet garanti.</p>`,
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
    module: 8,
    title: "Projet : Mini SaaS (CRM simple)",
    slug: "projet-mini-saas-crm-simple",
    duration: "90 min",
    description: "Construire un CRM complet avec contacts, pipeline de deals, notes et CRUD.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet le plus ambitieux de cette phase : tu vas construire un mini SaaS complet. Un CRM (Customer Relationship Management) est un outil que toutes les entreprises utilisent pour gérer leurs contacts et leurs opportunités commerciales. Des outils comme HubSpot ou Salesforce facturent des centaines d'euros par mois. Tu vas en construire une version simplifiée mais fonctionnelle.</p>
<p>Ce projet couvre toutes les compétences d'un développeur full-stack : base de données, API, interface utilisateur, authentification, et déploiement. C'est le type de projet qui te positionne comme un professionnel capable de construire de vrais produits.</p>
<p>Pour contextualiser : un freelance qui peut montrer un CRM fonctionnel dans son portfolio se démarque immédiatement de 95% des autres candidats. Les clients se disent "si cette personne peut construire un CRM complet, elle peut construire n'importe quelle application pour mon business". C'est une pièce maîtresse de portfolio.</p>
<p>Concrètement, imagine un commercial qui jongle entre des post-it, un fichier Excel et sa mémoire pour suivre ses prospects. Il oublie de relancer un client chaud, perd le numéro d'un contact important, et ne sait jamais où en sont ses négociations. Ton CRM résout tous ces problèmes en centralisant les contacts, les opportunités et les notes dans un seul outil intuitif.</p>
<p><strong>Astuce :</strong> Même si tu ne vends pas le CRM lui-même, les compétences que tu vas acquérir (CRUD, auth, Kanban, Prisma) sont les mêmes que pour 80% des applications SaaS. Ce projet est un investissement qui va te servir pour tous tes futurs projets.</p>

<h2>Stack technique</h2>
<ul>
<li><strong>Next.js 14</strong> avec App Router — le framework full-stack qui gère le frontend ET le backend</li>
<li><strong>Prisma</strong> comme ORM pour gérer la base de données — tu écris des requêtes en TypeScript au lieu de SQL</li>
<li><strong>SQLite</strong> pour le développement (facile à configurer, zéro serveur) — un simple fichier sur ton disque</li>
<li><strong>Tailwind CSS</strong> pour le style — cohérent et rapide</li>
<li><strong>NextAuth.js</strong> pour l'authentification — le standard pour les applications Next.js</li>
<li><strong>React Hook Form + Zod</strong> pour les formulaires et la validation — formulaires performants avec validation robuste</li>
</ul>
<p>Cette stack est celle que tu retrouveras dans la majorité des startups modernes. La maîtriser, c'est pouvoir postuler à n'importe quel poste de développeur Next.js ou construire n'importe quel SaaS en freelance.</p>
<p><strong>Conseil pro :</strong> SQLite est parfait pour le développement local car il ne nécessite aucune installation de serveur de base de données. Tu crées un fichier <code>dev.db</code> et c'est parti. En production, on migrera vers PostgreSQL, mais la transition est transparente grâce à Prisma qui abstrait le moteur de base de données.</p>

<h2>Étape 1 : Schéma de base de données avec Prisma</h2>
<p>Le schéma de données est le squelette de ton application. Demande à Claude Code :</p>
<blockquote>Crée un projet Next.js avec Prisma et SQLite. Définis le schéma Prisma avec les modèles suivants : User (id, email, name, password, createdAt), Contact (id, firstName, lastName, email, phone, company, position, status, notes, userId, createdAt, updatedAt), Deal (id, title, value, stage, probability, contactId, userId, expectedCloseDate, createdAt, updatedAt), Note (id, content, contactId, dealId, userId, createdAt), Activity (id, type, description, contactId, dealId, userId, createdAt). Les stages de deal sont : prospecting, qualification, proposal, negotiation, closed_won, closed_lost. Génère les migrations et le seed avec des données de test.</blockquote>
<p>Prisma simplifie énormément le travail avec la base de données. Tu écris le schéma en texte lisible, et Prisma génère les types TypeScript, les migrations et les requêtes automatiquement. Claude Code maîtrise parfaitement Prisma et va générer un schéma propre et bien structuré.</p>
<p>Voici pourquoi chaque modèle est important :</p>
<ul>
<li><strong>Contact :</strong> C'est l'entité centrale du CRM. Chaque personne avec qui tu fais du business est un contact. Le champ <code>status</code> (lead, prospect, client, churned) permet de segmenter tes contacts.</li>
<li><strong>Deal :</strong> Une opportunité commerciale liée à un contact. Un contact peut avoir plusieurs deals (il achète plusieurs fois). Le <code>stage</code> représente l'avancement de la négociation.</li>
<li><strong>Note :</strong> Des notes libres attachées à un contact ou un deal. Après un appel téléphonique, le commercial note ce qui a été dit.</li>
<li><strong>Activity :</strong> L'historique de toutes les actions (appel, email, réunion, changement de stage). Ça crée une timeline complète pour chaque contact.</li>
</ul>
<p><strong>Attention :</strong> Le champ <code>userId</code> sur chaque modèle est crucial pour la sécurité. Il permet de s'assurer que chaque utilisateur ne voit que ses propres données. Sans ce champ, tous les utilisateurs verraient tous les contacts — une faille de sécurité majeure dans un CRM.</p>
<p><strong>Astuce :</strong> Le fichier seed est sous-estimé mais essentiel. Il remplit ta base de données avec des données réalistes pour le développement. Sans données de test, ton CRM est vide et impossible à tester visuellement. Demande à Claude Code de générer au moins 50 contacts, 20 deals et 100 activités pour que l'application ait l'air "vivante".</p>

<h2>Étape 2 : API CRUD complètes</h2>
<p>Chaque entité du CRM a besoin d'opérations Create, Read, Update, Delete. Demande à Claude Code :</p>
<blockquote>Crée les routes API pour le CRM : /api/contacts (GET liste paginée avec recherche, POST création), /api/contacts/[id] (GET détail, PUT mise à jour, DELETE suppression), /api/deals (GET liste avec filtres par stage, POST création), /api/deals/[id] (GET, PUT, DELETE), /api/notes (GET par contact ou deal, POST création), /api/activities (GET timeline par contact). Chaque route doit valider les données avec Zod, gérer les erreurs proprement et retourner des réponses JSON standardisées.</blockquote>
<p>La validation est cruciale : ne fais jamais confiance aux données envoyées par le client. Zod permet de définir des schémas de validation puissants et de générer les types TypeScript correspondants automatiquement.</p>
<p>Voici un exemple concret de ce que Zod fait pour toi. Sans Zod, tu devrais écrire manuellement :</p>
<ul>
<li>L'email est-il valide ? Le numéro de téléphone est-il au bon format ? Le nom est-il vide ? La valeur du deal est-elle un nombre positif ?</li>
</ul>
<p>Avec Zod, tu définis un schéma une seule fois et il valide automatiquement toutes les données entrantes. Si les données sont invalides, il retourne un message d'erreur clair et structuré. De plus, le type TypeScript est généré automatiquement à partir du schéma — zéro duplication de code.</p>
<p>Pour les réponses JSON, utilise un format standardisé sur toute l'API :</p>
<ul>
<li><strong>Succès :</strong> <code>{ "success": true, "data": {...} }</code></li>
<li><strong>Erreur :</strong> <code>{ "success": false, "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [...] } }</code></li>
<li><strong>Liste :</strong> <code>{ "success": true, "data": [...], "pagination": { "page": 1, "limit": 20, "total": 150 } }</code></li>
</ul>
<p><strong>Conseil pro :</strong> Crée un middleware de gestion d'erreurs centralisé. Au lieu de mettre un try/catch dans chaque route, le middleware intercepte toutes les erreurs et les formate de manière cohérente. Ça réduit la duplication de code et garantit que toutes les erreurs ont le même format.</p>

<h2>Étape 3 : Interface contacts</h2>
<p>La page de gestion des contacts est le cœur du CRM. Demande à Claude Code :</p>
<blockquote>Crée la page /contacts avec : un tableau de contacts avec colonnes (nom, email, entreprise, statut, date de création), tri par colonne en cliquant sur le header, recherche en temps réel, pagination, un bouton "Ajouter un contact" qui ouvre un formulaire modal avec validation. Crée aussi la page /contacts/[id] avec les détails du contact, ses deals associés, ses notes et l'historique d'activité sous forme de timeline.</blockquote>
<p>L'interface doit être fluide et professionnelle. Les actions courantes (ajouter, modifier, supprimer) doivent être accessibles en un minimum de clics. Le feedback utilisateur est essentiel : affiche des notifications de succès ou d'erreur après chaque action.</p>
<p>La page de détail d'un contact (/contacts/[id]) est la page la plus complexe mais aussi la plus utile. Elle doit donner au commercial une vue à 360° du contact :</p>
<ul>
<li><strong>En-tête :</strong> Nom complet, entreprise, poste, email, téléphone — les infos essentielles en un coup d'œil</li>
<li><strong>Onglet Deals :</strong> Tous les deals associés à ce contact avec leur stage actuel et leur valeur</li>
<li><strong>Onglet Notes :</strong> Historique des notes avec date et contenu, du plus récent au plus ancien</li>
<li><strong>Onglet Activité :</strong> Timeline chronologique de toutes les interactions (appels, emails, réunions, changements de stage)</li>
</ul>
<p>Les notifications (toasts) après chaque action sont indispensables pour l'UX. Utilise la librairie <code>react-hot-toast</code> pour des notifications élégantes et faciles à implémenter. Chaque action doit déclencher un toast : "Contact ajouté avec succès", "Deal mis à jour", "Erreur : l'email est déjà utilisé", etc.</p>
<p><strong>Astuce :</strong> Ajoute un système de "quick actions" sur chaque ligne du tableau. Quand l'utilisateur survole une ligne, des icônes apparaissent : éditer, appeler, envoyer un email, supprimer. Ça accélère le workflow du commercial qui n'a pas besoin d'ouvrir la fiche du contact pour les actions rapides.</p>

<h2>Étape 4 : Pipeline de deals (Kanban)</h2>
<p>Le pipeline de deals est l'élément le plus visuel et le plus utile du CRM. Demande à Claude Code :</p>
<blockquote>Crée la page /deals avec une vue Kanban drag-and-drop. Chaque colonne représente un stage du pipeline (Prospection, Qualification, Proposition, Négociation, Gagné, Perdu). Chaque carte de deal affiche le titre, le montant, le contact associé et la probabilité. L'utilisateur peut déplacer les deals entre les colonnes en drag-and-drop. En haut, affiche le total de la valeur du pipeline et la valeur pondérée (montant x probabilité). Utilise la librairie @hello-pangea/dnd pour le drag-and-drop.</blockquote>
<p>La vue Kanban est intuitive et permet de voir en un coup d'œil où en sont toutes les opportunités commerciales. Le drag-and-drop rend la mise à jour des stages naturelle et rapide. La valeur pondérée du pipeline est un indicateur business essentiel qui aide à prévoir le chiffre d'affaires.</p>
<p>Voici comment fonctionne la valeur pondérée : un deal à 10 000€ en étape "Prospection" a une probabilité de 10%, donc une valeur pondérée de 1 000€. Le même deal en étape "Négociation" a une probabilité de 70%, donc une valeur pondérée de 7 000€. La somme des valeurs pondérées de tous les deals donne le CA prévisionnel — c'est le chiffre que le directeur commercial regarde chaque matin.</p>
<p>Les probabilités typiques par stage :</p>
<ul>
<li><strong>Prospection :</strong> 10% — le premier contact est établi</li>
<li><strong>Qualification :</strong> 25% — le besoin est confirmé</li>
<li><strong>Proposition :</strong> 50% — le devis est envoyé</li>
<li><strong>Négociation :</strong> 70% — on discute des conditions</li>
<li><strong>Gagné :</strong> 100% — le deal est signé</li>
<li><strong>Perdu :</strong> 0% — le deal est tombé à l'eau</li>
</ul>
<p><strong>Attention :</strong> Le drag-and-drop doit mettre à jour la base de données immédiatement. Si l'utilisateur déplace un deal de "Proposition" à "Négociation", la requête API doit partir instantanément. Utilise un "optimistic update" : mets à jour l'interface immédiatement, et si la requête échoue, reviens à l'état précédent avec un message d'erreur. L'utilisateur ne doit jamais attendre le retour du serveur pour voir le résultat de son action.</p>

<h2>Étape 5 : Authentification et sécurité</h2>
<p>Un CRM contient des données sensibles. L'authentification est obligatoire. Demande à Claude Code :</p>
<blockquote>Intègre NextAuth.js avec un provider credentials (email/mot de passe). Ajoute les pages de login et d'inscription avec formulaires validés. Protège toutes les routes API et pages avec des middlewares d'authentification. Chaque utilisateur ne voit que ses propres contacts et deals. Ajoute un hash bcrypt pour les mots de passe et un token CSRF pour les formulaires.</blockquote>
<p>La sécurité n'est pas optionnelle, même pour un projet de portfolio. Un CRM sans authentification ne serait pas pris au sérieux. NextAuth.js simplifie énormément l'implémentation tout en suivant les bonnes pratiques de sécurité.</p>
<p>Les points de sécurité non négociables :</p>
<ul>
<li><strong>Hash bcrypt :</strong> Les mots de passe ne sont JAMAIS stockés en clair. bcrypt avec 12 rounds de salage rend le cracking pratiquement impossible.</li>
<li><strong>Isolation des données :</strong> Chaque requête API doit filtrer par <code>userId</code>. Un utilisateur ne doit jamais pouvoir accéder aux données d'un autre, même en modifiant l'URL manuellement.</li>
<li><strong>Protection CSRF :</strong> Les formulaires doivent inclure un token anti-CSRF pour empêcher les attaques de type "cross-site request forgery".</li>
<li><strong>Sessions sécurisées :</strong> Les cookies de session doivent être <code>httpOnly</code> (inaccessibles par JavaScript) et <code>secure</code> (envoyés uniquement en HTTPS).</li>
</ul>
<p><strong>Conseil pro :</strong> Teste la sécurité de ton CRM en essayant de "tricher". Connecte-toi avec un compte A, note l'ID d'un contact. Connecte-toi ensuite avec un compte B et essaie d'accéder à ce contact via l'URL directe (/api/contacts/[id]). Si tu obtiens les données, c'est une faille critique. Tu dois recevoir une erreur 403 (Forbidden).</p>

<h2>Étape 6 : Déploiement et finitions</h2>
<p>Pour le déploiement, on migre de SQLite vers PostgreSQL pour la production. Demande à Claude Code :</p>
<blockquote>Adapte le schéma Prisma pour supporter PostgreSQL en production (garde SQLite pour le dev). Configure le déploiement sur Vercel avec une base de données PostgreSQL sur Supabase ou Neon. Ajoute un dashboard de statistiques sur la page d'accueil : nombre total de contacts, deals en cours, valeur du pipeline, graphique d'évolution des deals gagnés par mois.</blockquote>
<p>La migration de SQLite vers PostgreSQL est transparente grâce à Prisma. Tu changes simplement le <code>provider</code> dans le fichier <code>schema.prisma</code> et la variable d'environnement <code>DATABASE_URL</code>. Le code de ton application ne change pas du tout.</p>
<p>Pour la base PostgreSQL gratuite en production, deux excellentes options :</p>
<ul>
<li><strong>Neon :</strong> Offre gratuite généreuse (3 GB de stockage), démarrage instantané, compatible Vercel. C'est le choix recommandé pour les projets Next.js.</li>
<li><strong>Supabase :</strong> Offre gratuite avec 500 MB de stockage, interface d'administration web incluse, et des fonctionnalités bonus (auth, storage, realtime).</li>
</ul>
<p>Ton CRM est maintenant un produit SaaS fonctionnel. Tu peux l'utiliser toi-même, le montrer en portfolio, ou même le proposer à des petites entreprises qui n'ont pas le budget pour HubSpot.</p>
<p><strong>Astuce :</strong> Pour rendre ton CRM encore plus impressionnant, ajoute une page d'accueil publique (landing page) qui présente le CRM, avec un bouton "Essayer gratuitement" qui mène à l'inscription. Ça transforme ton projet technique en un vrai produit avec un parcours utilisateur complet — de la découverte à l'utilisation.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le CRM complet en suivant les 6 étapes. Chaque étape doit être fonctionnelle avant de passer à la suivante.</li>
<li>Ajoute au minimum 20 contacts et 10 deals de test pour que le CRM semble réel.</li>
<li>Teste le pipeline Kanban : vérifie que le drag-and-drop met à jour le stage en base de données.</li>
<li>Crée un compte utilisateur, connecte-toi et vérifie que les données sont bien isolées par utilisateur.</li>
<li>Déploie sur Vercel avec PostgreSQL et partage le lien. Bonus : ajoute une fonctionnalité d'import/export CSV des contacts.</li>
</ol>`,
  },
