// Phase 10 : Modules 7-8 — Projets Apps Web/SaaS et Automatisations/Agents IA

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 7 : Projets — Apps Web et SaaS
  // ═══════════════════════════════════════════════════
  {
    order: 108,
    module: 7,
    title: "Projet : App de gestion de rendez-vous IA",
    slug: "projet-app-gestion-rendez-vous-ia",
    duration: "50 min",
    description: "Construis une app de booking intelligente avec planification IA que tu peux vendre aux pros.",
    content: `<h2>Ce qu'on construit et pourquoi c'est bankable</h2>
<p>Dans ce projet, tu vas construire une application complète de gestion de rendez-vous avec une couche d'intelligence artificielle. Pas un simple calendrier — un système qui comprend les contraintes de planning, suggère les meilleurs créneaux et gère les conflits automatiquement. C'est le genre d'outil que chaque coach, thérapeute, consultant ou salon de coiffure rêve d'avoir sans payer Calendly 15€/mois par utilisateur.</p>
<p>Le marché du scheduling en ligne pèse plusieurs milliards d'euros et continue de croître. Mais la plupart des solutions sont soit trop basiques (Google Calendar), soit trop chères pour les indépendants (Acuity, Calendly Pro). En positionnant ton app entre les deux avec une touche IA, tu occupes un créneau très rentable. Un abonnement à 19€/mois avec 200 utilisateurs, c'est déjà 3 800€ de revenus récurrents mensuels.</p>

<h2>Architecture technique du projet</h2>
<p>Voici comment structurer ton app avec Claude Code. Tu vas travailler en full-stack avec Next.js pour le front et l'API, Prisma pour la base de données, et l'API Claude pour la logique IA.</p>
<ul>
<li><strong>Base de données</strong> : Tables principales — users, services, availabilities, appointments, reminders. Chaque professionnel peut définir ses services avec durée et prix, ses plages de disponibilité récurrentes, et ses jours de congé. Utilise Prisma avec PostgreSQL pour la robustesse.</li>
<li><strong>Frontend booking</strong> : Une page publique par professionnel (ex: /book/jean-dupont) avec un sélecteur de service, un calendrier interactif qui n'affiche que les créneaux disponibles, et un formulaire de réservation. React avec Tailwind CSS pour un design propre et responsive.</li>
<li><strong>Moteur IA de planification</strong> : C'est ta valeur ajoutée. L'IA analyse les habitudes de réservation, suggère des créneaux optimaux (évite les trous de 30 min entre deux RDV), et peut même proposer des regroupements intelligents. Tu envoies le contexte de planning à Claude via l'API et tu récupères les suggestions.</li>
<li><strong>Système de notifications</strong> : Emails de confirmation, rappels 24h et 1h avant le RDV, notifications de modification ou annulation. Utilise Resend ou Nodemailer pour l'envoi, avec des templates HTML propres.</li>
</ul>

<h2>Les fonctionnalités clés à implémenter</h2>
<p>Commence par le MVP et itère. Voici les features par ordre de priorité :</p>
<ul>
<li><strong>Réservation en ligne</strong> : Le client choisit un service, voit les créneaux dispo, réserve en 3 clics. Pas de compte requis pour réserver — juste nom, email, téléphone. Moins il y a de friction, plus il y a de conversions.</li>
<li><strong>Dashboard professionnel</strong> : Vue agenda jour/semaine/mois, liste des RDV à venir, stats de remplissage. Le pro doit voir en un coup d'œil sa journée et pouvoir modifier ou annuler un RDV facilement.</li>
<li><strong>Suggestions IA</strong> : Quand un client veut réserver, l'IA analyse le planning existant et suggère les créneaux qui optimisent la journée du pro. Par exemple, si le pro a un RDV à 9h et un à 14h, l'IA proposera en priorité les créneaux autour de 10h-11h plutôt que de créer un trou de 3h.</li>
<li><strong>Rappels automatiques</strong> : Réduis les no-shows de 40% avec des rappels par email. Plus tard, tu pourras ajouter les SMS via Twilio. Chaque rappel inclut un lien pour reprogrammer — c'est mieux qu'une annulation sèche.</li>
<li><strong>Page de réservation personnalisable</strong> : Le pro peut changer son logo, ses couleurs, sa description. C'est ce qui donne l'impression d'un outil sur mesure et justifie le prix de l'abonnement.</li>
</ul>

<h2>Implémentation pas à pas avec Claude Code</h2>
<p>Ouvre ton terminal et démarre le projet. Demande à Claude Code de te scaffolder l'app Next.js avec Prisma, puis avance feature par feature. Pour chaque feature, décris ce que tu veux en langage naturel et laisse Claude générer le code. Corrige, teste, itère.</p>
<p>Commence par le schéma Prisma — c'est la fondation. Ensuite, crée les pages de réservation publiques. Puis le dashboard pro. Et enfin, intègre l'API Claude pour les suggestions intelligentes. Cette approche progressive te permet d'avoir un produit fonctionnel à chaque étape.</p>
<p>Pour le prompt IA de suggestion de créneaux, envoie le planning de la journée sous forme structurée (liste de RDV avec heures et durées) et demande à Claude d'identifier les créneaux optimaux en fonction des contraintes. Parse la réponse JSON et affiche les suggestions dans le calendrier.</p>

<h2>Angle de monétisation</h2>
<p>Propose trois formules : Starter gratuit (1 service, 20 RDV/mois), Pro à 19€/mois (services illimités, suggestions IA, rappels), Business à 49€/mois (multi-utilisateurs, API, branding custom). Tu peux aussi vendre l'installation sur mesure à des cabinets médicaux ou des salons pour 500-1500€ en one-shot plus l'abonnement mensuel. Le récurrent est la clé — chaque client que tu signes te rapporte chaque mois sans travail supplémentaire.</p>`,
    exercise: `<ol>
<li>Crée le schéma Prisma complet avec les tables users, services, availabilities et appointments. Génère les migrations et vérifie que les relations sont correctes en insérant des données de test.</li>
<li>Construis la page de réservation publique avec Claude Code : sélecteur de service, calendrier interactif affichant uniquement les créneaux disponibles, et formulaire de confirmation. Teste le parcours complet du client.</li>
<li>Implémente le moteur de suggestion IA : envoie un planning type à l'API Claude, récupère les créneaux optimaux suggérés, et affiche-les en surbrillance dans le calendrier. Compare les suggestions IA avec un algorithme naïf (premier créneau disponible).</li>
</ol>`,
  },
  {
    order: 109,
    module: 7,
    title: "Projet : Générateur de devis automatisé",
    slug: "projet-generateur-devis-automatise",
    duration: "45 min",
    description: "Crée un outil de génération de devis intelligent pour les prestataires de services.",
    content: `<h2>Ce qu'on construit et pourquoi c'est un game-changer</h2>
<p>Tu vas construire un générateur de devis automatisé avec IA. L'idée est simple mais puissante : un prestataire de services (développeur, designer, agence marketing, artisan) remplit un formulaire avec les besoins du client, et l'app génère instantanément un devis professionnel en PDF avec une estimation de prix intelligente. Fini les 2 heures passées sur Word à reformater le même document pour chaque prospect.</p>
<p>Chaque entreprise de services envoie des dizaines de devis par mois. La plupart perdent du temps à les créer manuellement, font des erreurs de calcul, oublient des postes, et envoient des documents qui ne font pas pro. Ton outil résout tout ça en une minute. Et un prestataire qui gagne 2 heures par devis sur 20 devis par mois, c'est 40 heures économisées — la valeur est évidente.</p>

<h2>Architecture technique</h2>
<p>Le projet se décompose en quatre blocs principaux que tu vas construire avec Claude Code :</p>
<ul>
<li><strong>Formulaire intelligent</strong> : Un formulaire multi-étapes adaptatif. Le prestataire sélectionne son domaine (dev web, design, marketing, etc.), et le formulaire s'adapte avec les postes pertinents. Pour un dev web : nombre de pages, fonctionnalités, intégrations, hébergement. Pour un designer : nombre de concepts, révisions, formats de livraison. Utilise React Hook Form avec validation Zod.</li>
<li><strong>Moteur de pricing IA</strong> : C'est la magie. Tu envoies les spécifications du projet à Claude avec le barème de prix du prestataire, et l'IA estime chaque poste en tenant compte de la complexité. Elle peut aussi suggérer des postes que le prestataire aurait oubliés ("Avez-vous pensé à inclure la maintenance ?"). Le prompt doit inclure le contexte métier et les tarifs de référence.</li>
<li><strong>Générateur PDF</strong> : Utilise une librairie comme @react-pdf/renderer ou puppeteer pour générer des PDFs propres avec le logo du prestataire, les coordonnées, le détail des postes, les conditions de paiement, et les mentions légales. Le PDF doit être professionnel — c'est la première impression que le client a du prestataire.</li>
<li><strong>Dashboard de suivi</strong> : Historique des devis envoyés, statut (envoyé, vu, accepté, refusé), taux de conversion, chiffre d'affaires potentiel. Le prestataire voit en un coup d'œil sa performance commerciale.</li>
</ul>

<h2>Fonctionnalités essentielles</h2>
<p>Voici les features qui font la différence entre un outil amateur et un produit qui se vend :</p>
<ul>
<li><strong>Templates de devis par secteur</strong> : Pré-configure des modèles pour les métiers les plus courants. Un photographe n'a pas les mêmes postes qu'un développeur. Les templates accélèrent la création et montrent que ton outil comprend le métier du prestataire.</li>
<li><strong>Calcul automatique</strong> : Sous-totaux par catégorie, TVA, remises, acomptes. Le prestataire ajuste un prix et tout se recalcule instantanément. Gère les différents taux de TVA (20%, 10%, 5.5%) et les statuts (auto-entrepreneur sans TVA, société avec TVA).</li>
<li><strong>Suggestions IA contextuelles</strong> : Quand le prestataire crée un devis pour un site e-commerce, l'IA suggère automatiquement des postes comme "Configuration des moyens de paiement", "Optimisation SEO de base", "Formation client à l'interface admin". Ce sont des upsells naturels qui augmentent le panier moyen.</li>
<li><strong>Envoi et signature en ligne</strong> : Le client reçoit le devis par email avec un lien pour le consulter en ligne, l'accepter ou demander des modifications. Plus besoin d'imprimer, signer, scanner. Un bouton "Accepter ce devis" avec signature électronique simplifie tout le processus.</li>
<li><strong>Duplication rapide</strong> : Pour des projets similaires, le prestataire duplique un devis existant et ajuste seulement ce qui change. En 2 minutes, le nouveau devis est prêt. C'est ce genre de détail qui rend l'outil addictif.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Démarre par le formulaire multi-étapes — c'est le cœur de l'expérience utilisateur. Décris à Claude Code le parcours que tu veux : sélection du secteur, ajout des postes, personnalisation des prix, aperçu et génération. Laisse-le scaffolder les composants React, puis affine l'UX.</p>
<p>Pour le moteur de pricing IA, crée un endpoint API qui prend en entrée la description du projet et le barème du prestataire, envoie le tout à Claude, et retourne une estimation structurée en JSON. Le prompt doit être précis : "En fonction des spécifications suivantes et du barème ci-dessous, estime le nombre d'heures et le coût pour chaque poste. Suggère également des postes manquants."</p>
<p>Pour le PDF, commence par un template HTML/CSS propre que tu convertis en PDF avec puppeteer. C'est plus flexible qu'une librairie PDF pure car tu peux utiliser tout le CSS moderne pour le design. Le résultat sera un document pro qui inspire confiance.</p>

<h2>Monétisation</h2>
<p>Modèle freemium : 3 devis/mois gratuits (pour l'acquisition), Pro à 14€/mois (devis illimités, IA, templates), Agency à 39€/mois (multi-utilisateurs, branding, analytics). Tu peux aussi vendre l'outil en white-label à des réseaux de franchises ou des associations professionnelles pour 2 000-5 000€ plus un abonnement mensuel. Le secteur des artisans et professions libérales est particulièrement réceptif — ils ont besoin de cet outil mais ne savent pas qu'il existe.</p>`,
    exercise: `<ol>
<li>Crée le formulaire multi-étapes avec Claude Code : étape 1 (sélection du secteur), étape 2 (ajout des postes avec quantité et prix unitaire), étape 3 (options TVA, remise, acompte), étape 4 (aperçu final). Teste avec un scénario de devis pour un site web vitrine.</li>
<li>Implémente le moteur de pricing IA : crée un endpoint qui envoie les specs du projet à Claude et récupère une estimation détaillée par poste. Teste avec 3 types de projets différents et compare les suggestions de l'IA avec tes propres estimations.</li>
<li>Génère un PDF professionnel à partir des données du devis. Le PDF doit inclure : en-tête avec logo, coordonnées du prestataire et du client, tableau des postes détaillé, sous-totaux, TVA, total TTC, conditions de paiement et mentions légales. Vérifie le rendu sur mobile et desktop.</li>
</ol>`,
  },
  {
    order: 110,
    module: 7,
    title: "Projet : Plateforme de feedback client",
    slug: "projet-plateforme-feedback-client",
    duration: "50 min",
    description: "Construis un outil de collecte et d'analyse de feedback client avec NPS et analyse de sentiment IA.",
    content: `<h2>Ce qu'on construit et la valeur business</h2>
<p>Tu vas créer une plateforme complète de collecte et d'analyse de feedback client. Pas un simple formulaire Google — un vrai outil avec score NPS, analyse de sentiment par IA, tableau de bord en temps réel et alertes automatiques quand un client est mécontent. C'est le type de SaaS que chaque e-commerce, restaurant ou service en ligne devrait utiliser mais que la plupart n'ont pas parce que les solutions existantes comme Hotjar ou Typeform coûtent cher et ne font pas d'analyse IA.</p>
<p>Le feedback client est la donnée la plus sous-exploitée en business. 96% des clients mécontents ne se plaignent jamais — ils partent silencieusement. Ton outil permet de capter ces signaux avant qu'il soit trop tard. Et pour les entreprises, perdre un client coûte 5 à 25 fois plus cher que d'en garder un. La proposition de valeur est limpide.</p>

<h2>Architecture du projet</h2>
<p>Le projet se structure autour de trois axes que tu vas développer avec Claude Code :</p>
<ul>
<li><strong>Collecte de feedback</strong> : Widgets embeddables (pop-up, slide-in, inline) que le client installe sur son site avec un simple script. Le widget s'affiche au bon moment (après un achat, après X minutes sur le site, à la sortie) et pose les bonnes questions. Format NPS classique : "Sur une échelle de 0 à 10, recommanderiez-vous notre service ?" suivi d'une question ouverte "Pourquoi cette note ?". Le widget doit être léger (moins de 50kb), personnalisable et responsive.</li>
<li><strong>Analyse IA des réponses</strong> : C'est ton avantage compétitif. Chaque réponse textuelle est analysée par Claude pour extraire le sentiment (positif, négatif, neutre), les thèmes principaux (prix, qualité, SAV, livraison), et le niveau d'urgence. Tu peux traiter des centaines de réponses en quelques secondes et en tirer des insights actionnables que l'humain mettrait des heures à compiler.</li>
<li><strong>Dashboard analytique</strong> : Score NPS en temps réel, évolution dans le temps, répartition des sentiments, nuage de thèmes les plus mentionnés, alertes sur les feedbacks critiques. Le dashboard doit raconter une histoire en 5 secondes : "Ton NPS est de 45, en hausse de 8 points ce mois-ci. Les clients adorent ta livraison rapide mais se plaignent du SAV le week-end."</li>
</ul>

<h2>Fonctionnalités clés</h2>
<ul>
<li><strong>Score NPS automatique</strong> : Calcul en temps réel avec catégorisation : Promoteurs (9-10), Passifs (7-8), Détracteurs (0-6). Le NPS = % Promoteurs - % Détracteurs. Affiche l'évolution sur 7, 30 et 90 jours avec des graphiques clairs. Compare avec les benchmarks du secteur pour donner du contexte.</li>
<li><strong>Analyse de sentiment IA</strong> : Pour chaque feedback textuel, l'IA attribue un score de sentiment (-1 à +1), identifie les thèmes (jusqu'à 3 par feedback) et détecte les urgences. Un feedback comme "Livraison en retard de 5 jours, aucune réponse du SAV, je suis furieux" est automatiquement tagué négatif, thèmes "livraison" et "SAV", urgence haute.</li>
<li><strong>Alertes intelligentes</strong> : Quand un feedback critique arrive (sentiment très négatif ou NPS 0-3), le propriétaire reçoit une notification immédiate par email ou Slack avec le contexte et une suggestion de réponse générée par l'IA. Réagir vite à un client mécontent peut transformer un détracteur en promoteur.</li>
<li><strong>Rapports automatiques</strong> : Chaque semaine, l'outil envoie un résumé par email : NPS de la semaine, tendances, top 3 des points positifs, top 3 des points à améliorer, feedbacks marquants. Le dirigeant n'a même pas besoin d'ouvrir le dashboard pour rester informé.</li>
<li><strong>Segmentation</strong> : Filtre les feedbacks par produit, par canal d'acquisition, par type de client (nouveau vs récurrent). Ça permet de découvrir que le NPS est excellent pour les clients organiques mais catastrophique pour ceux venant des pubs Facebook — un insight qui vaut de l'or.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par le widget de collecte. C'est un composant React autonome qui se compile en un script JS injectable. Demande à Claude Code de créer un widget NPS avec une animation d'entrée élégante, les 11 boutons de notation (0-10), et le champ texte conditionnel. Le widget communique avec ton API via fetch.</p>
<p>Ensuite, construis l'API qui reçoit les feedbacks, les stocke et déclenche l'analyse IA. L'analyse peut être asynchrone — tu stockes le feedback brut immédiatement et tu lances l'analyse en background. Utilise un endpoint API qui envoie le texte à Claude avec un prompt structuré demandant sentiment, thèmes et urgence en format JSON.</p>
<p>Pour le dashboard, utilise une librairie de charts comme Recharts ou Chart.js. Affiche le NPS en gros, le graphique d'évolution en dessous, et la liste des feedbacks récents avec leurs tags IA en bas. Le tout doit charger en moins de 2 secondes.</p>

<h2>Monétisation</h2>
<p>Freemium avec paliers : Gratuit (50 feedbacks/mois, NPS basique), Growth à 29€/mois (feedbacks illimités, analyse IA, alertes), Scale à 79€/mois (multi-sites, rapports automatiques, intégrations Slack/CRM, API). Cible les e-commerces Shopify en priorité — ils ont le volume de clients nécessaire et sont habitués à payer pour des apps. Un plugin Shopify te donne accès à un marketplace de 2 millions de boutiques.</p>`,
    exercise: `<ol>
<li>Construis le widget NPS embeddable avec Claude Code : les 11 boutons de notation (0-10) avec code couleur (rouge/jaune/vert), le champ texte conditionnel qui apparaît après la note, et l'animation d'apparition. Compile-le en script injectable et teste-le sur une page HTML simple.</li>
<li>Crée l'endpoint d'analyse IA : envoie 10 feedbacks textuels variés (positifs, négatifs, neutres) à Claude et récupère pour chacun le sentiment, les thèmes et le niveau d'urgence en JSON. Vérifie la cohérence des résultats et ajuste ton prompt si nécessaire.</li>
<li>Construis le dashboard NPS avec un graphique d'évolution sur 30 jours, la répartition Promoteurs/Passifs/Détracteurs en diagramme circulaire, et la liste des 10 derniers feedbacks avec leurs tags IA. Utilise des données fictives réalistes pour le prototype.</li>
</ol>`,
  },
  {
    order: 111,
    module: 7,
    title: "Projet : Mini CRM avec pipeline de vente",
    slug: "projet-mini-crm-pipeline-vente",
    duration: "55 min",
    description: "Développe un CRM léger avec pipeline kanban et scoring de leads par IA.",
    content: `<h2>Ce qu'on construit et pourquoi le marché est énorme</h2>
<p>Tu vas construire un mini CRM (Customer Relationship Management) avec un pipeline de vente en vue kanban et un scoring de leads par IA. Pas une copie de Salesforce — un outil léger, rapide et intelligent conçu pour les freelances, les petites agences et les solopreneurs qui trouvent HubSpot trop lourd et un tableur Excel trop limité.</p>
<p>Le marché du CRM pèse plus de 60 milliards de dollars et il reste un trou béant : les micro-entreprises et indépendants. 65% d'entre eux gèrent encore leurs prospects dans un fichier Excel ou pire, dans leur tête. Ils n'ont pas besoin de 500 fonctionnalités — ils ont besoin de voir leurs deals en cours, relancer les bons prospects au bon moment, et ne rien oublier. Ton CRM fait exactement ça, avec une couche IA en bonus.</p>

<h2>Architecture technique</h2>
<ul>
<li><strong>Modèle de données</strong> : Quatre entités principales — Contacts (nom, email, téléphone, entreprise, source), Deals (titre, valeur, étape du pipeline, contact associé, date de closing estimée), Activities (appels, emails, réunions, notes liées à un contact ou deal), et Pipeline Stages (étapes personnalisables du funnel de vente). Conçois les relations avec Prisma : un contact a plusieurs deals, un deal a plusieurs activités, un pipeline a plusieurs stages.</li>
<li><strong>Vue Kanban</strong> : Le cœur de l'UX. Les deals sont des cartes qu'on drag-and-drop d'une colonne à l'autre. Colonnes par défaut : Prospect, Qualifié, Proposition envoyée, Négociation, Gagné, Perdu. Chaque carte affiche le nom du deal, la valeur, le contact et le nombre de jours dans cette étape. Utilise @dnd-kit/core pour le drag-and-drop natif React.</li>
<li><strong>Scoring IA des leads</strong> : L'IA analyse les informations du contact et ses interactions pour attribuer un score de 0 à 100. Critères : taille de l'entreprise, secteur, nombre d'interactions, temps de réponse aux emails, engagement sur le site. Un lead à 80+ est "chaud" et mérite une relance immédiate. Un lead à 30 peut attendre ou être nurturé par du contenu.</li>
<li><strong>Timeline d'activités</strong> : Pour chaque contact, une chronologie de toutes les interactions. Appel du 12 mars, email envoyé le 15, réunion le 20, proposition envoyée le 22. Le commercial voit l'historique complet en un coup d'œil et sait exactement où il en est avec chaque prospect.</li>
</ul>

<h2>Fonctionnalités essentielles</h2>
<ul>
<li><strong>Pipeline personnalisable</strong> : L'utilisateur peut créer, renommer, réordonner et supprimer les étapes de son pipeline. Un agent immobilier n'a pas le même funnel qu'un consultant IT. Stocke les étapes dans la base avec un champ "position" pour l'ordre et des couleurs personnalisables.</li>
<li><strong>Vue d'ensemble des deals</strong> : En haut du kanban, affiche les totaux : nombre de deals par étape, valeur totale du pipeline, taux de conversion entre étapes, valeur moyenne par deal. Ces métriques permettent de savoir instantanément si le pipeline est sain ou s'il y a un problème (trop de deals bloqués en "Négociation" par exemple).</li>
<li><strong>Relances intelligentes IA</strong> : L'IA scanne le pipeline chaque jour et identifie les deals qui stagnent, les contacts qui n'ont pas été relancés depuis X jours, et les opportunités à saisir. Elle génère des suggestions de relance : "Le deal 'Refonte site web ABC Corp' n'a pas bougé depuis 12 jours. Suggère : envoyer un email de suivi avec une offre limitée dans le temps."</li>
<li><strong>Recherche et filtres</strong> : Recherche globale sur tous les contacts et deals. Filtres avancés : par étape, par valeur (plus de 5 000€), par date de création, par score IA. Trie par valeur décroissante pour te concentrer sur les plus gros deals en premier.</li>
<li><strong>Import/Export</strong> : Import CSV pour migrer depuis Excel ou un autre CRM. Export CSV et PDF pour les rapports. L'import doit être intelligent : détection automatique des colonnes, gestion des doublons, mapping des champs personnalisés.</li>
</ul>

<h2>Construction pas à pas</h2>
<p>Commence par le schéma Prisma et le CRUD basique des contacts et deals. Demande à Claude Code de créer les modèles, les routes API, et les formulaires de création/édition. Teste avec des données réalistes — crée 20 contacts fictifs avec des deals à différentes étapes.</p>
<p>Ensuite, construis la vue kanban. C'est la partie la plus technique car le drag-and-drop doit être fluide et persister les changements. Quand un deal passe de "Qualifié" à "Proposition envoyée", l'API met à jour le stage_id et log l'activité automatiquement. Utilise des animations CSS pour rendre le mouvement satisfaisant.</p>
<p>Pour le scoring IA, crée un endpoint qui prend les données d'un contact (infos de base + historique d'activités) et demande à Claude d'attribuer un score avec justification. Stocke le score en base et rafraîchis-le quotidiennement ou à chaque nouvelle interaction. Affiche le score en badge sur la carte kanban avec un code couleur.</p>

<h2>Monétisation</h2>
<p>SaaS classique : Solo à 12€/mois (1 pipeline, 200 contacts, scoring IA basique), Team à 29€/mois/utilisateur (pipelines multiples, contacts illimités, relances IA, rapports), Agency à 59€/mois/utilisateur (API, intégrations, white-label). Cible les freelances et micro-agences via du contenu LinkedIn et des partenariats avec des incubateurs. Un CRM qui coûte moins cher qu'un déjeuner par mois, ça se vend tout seul quand le produit est bon.</p>`,
    exercise: `<ol>
<li>Crée le schéma Prisma complet (contacts, deals, pipeline_stages, activities) avec les relations, génère les migrations et seed la base avec 20 contacts et 15 deals répartis sur 5 étapes de pipeline. Vérifie les relations en requêtant les deals d'un contact avec ses activités.</li>
<li>Construis la vue kanban complète avec Claude Code : colonnes représentant les étapes du pipeline, cartes de deals draggables avec titre, valeur et nom du contact, persistance du drag-and-drop via l'API. Teste le déplacement d'un deal entre deux étapes et vérifie que le changement est persisté en base.</li>
<li>Implémente le scoring IA : crée un endpoint qui envoie les données d'un contact à Claude (taille entreprise, nombre d'interactions, délai moyen de réponse, historique d'activités) et récupère un score 0-100 avec justification. Teste sur 5 profils variés et vérifie que les scores sont cohérents.</li>
</ol>`,
  },
  {
    order: 112,
    module: 7,
    title: "Projet : App de facturation et suivi paiements",
    slug: "projet-app-facturation-suivi-paiements",
    duration: "50 min",
    description: "Crée une app de facturation avec génération PDF, suivi des paiements et relances automatiques IA.",
    content: `<h2>Ce qu'on construit et le problème résolu</h2>
<p>Tu vas construire une application de facturation complète avec génération de factures en PDF, suivi des paiements en temps réel et relances automatiques par IA. C'est l'outil que chaque indépendant et petite entreprise utilise au quotidien. La facturation, c'est pas sexy, mais c'est vital — et c'est un marché où les utilisateurs paient volontiers parce que l'outil leur fait gagner du temps ET de l'argent (les relances automatiques récupèrent les impayés).</p>
<p>En France, le délai moyen de paiement des factures est de 44 jours. Un freelance qui facture 5 000€/mois et qui a 2 mois d'impayés en retard, c'est 10 000€ de trésorerie bloquée. Ton app résout ce problème en automatisant les relances et en donnant une visibilité claire sur l'état des paiements. C'est un argument de vente imparable.</p>

<h2>Architecture du projet</h2>
<ul>
<li><strong>Modèle de données</strong> : Tables — companies (infos de l'entreprise facturante : nom, SIRET, adresse, logo, conditions de paiement par défaut), clients (infos des clients facturés), invoices (numéro séquentiel, date d'émission, date d'échéance, statut, montant HT/TVA/TTC), invoice_items (libellé, quantité, prix unitaire, TVA), payments (montant, date, méthode de paiement, référence). Prisma gère les relations entre ces entités.</li>
<li><strong>Générateur de factures PDF</strong> : Template conforme aux obligations légales françaises : numéro de facture unique et séquentiel, date, identité complète du vendeur et de l'acheteur, description détaillée des prestations, TVA, conditions de paiement, pénalités de retard. Utilise puppeteer ou @react-pdf/renderer pour le rendu. Le PDF doit être irréprochable — c'est un document légal.</li>
<li><strong>Suivi des paiements</strong> : Dashboard avec vue d'ensemble : factures en attente, en retard, payées. Graphique de trésorerie prévisionnelle basée sur les dates d'échéance. Alerte visuelle pour les factures en retard avec le nombre de jours de dépassement. Possibilité de marquer une facture comme payée (partiellement ou totalement).</li>
<li><strong>Moteur de relances IA</strong> : L'IA génère des emails de relance adaptés au contexte. Première relance (J+5 après échéance) : ton amical et professionnel. Deuxième relance (J+15) : plus ferme avec rappel des conditions contractuelles. Troisième relance (J+30) : formel avec mention des pénalités de retard. Le ton et le contenu s'adaptent automatiquement grâce à Claude.</li>
</ul>

<h2>Fonctionnalités essentielles</h2>
<ul>
<li><strong>Numérotation légale</strong> : En France, les numéros de facture doivent être séquentiels et sans trous. Ton système gère ça automatiquement avec un compteur par année (2025-001, 2025-002, etc.). Impossible de supprimer une facture — on peut seulement créer un avoir. C'est une obligation légale que beaucoup d'outils ignorent.</li>
<li><strong>Création rapide</strong> : Sélectionne un client existant, ajoute les lignes de facturation, le système calcule automatiquement les sous-totaux, la TVA et le TTC. Sauvegarde en brouillon ou envoie directement par email. Duplique une facture précédente pour les clients récurrents — en 30 secondes, ta facture est envoyée.</li>
<li><strong>Tableau de bord financier</strong> : CA du mois, CA de l'année, comparaison avec l'année précédente, répartition par client, taux de recouvrement (% des factures payées à temps). Graphique de prévision de trésorerie sur les 3 prochains mois basé sur les factures programmées et les délais de paiement habituels de chaque client.</li>
<li><strong>Relances automatiques IA</strong> : Quand une facture dépasse son échéance, le système déclenche une séquence de relances. L'IA rédige chaque email en fonction du contexte : montant, nombre de jours de retard, historique de paiement du client, ton approprié. Le prestataire peut valider ou modifier avant envoi. Les emails sont envoyés automatiquement si le mode "auto" est activé.</li>
<li><strong>Exports comptables</strong> : Export au format CSV compatible avec les logiciels de comptabilité (Excel, Pennylane, Indy). Chaque trimestre, le freelance envoie son export à son comptable en un clic. Gère les différents régimes fiscaux : micro-entreprise (pas de TVA), réel simplifié (TVA), auto-entrepreneur.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par le modèle de données et le CRUD des factures. Demande à Claude Code de créer le formulaire de facturation avec ajout dynamique de lignes, calcul automatique des totaux et sélection du client. C'est le flux principal que tu dois maîtriser parfaitement avant d'ajouter les features avancées.</p>
<p>Ensuite, attaque le générateur PDF. Crée un template HTML/CSS qui respecte les obligations légales françaises, puis convertis-le en PDF. Teste avec différents cas : facture avec 1 ligne, facture avec 20 lignes, facture avec remise, facture avec acompte déjà versé. Le PDF doit être propre dans tous les cas.</p>
<p>Pour les relances IA, crée un cron job qui vérifie quotidiennement les factures en retard et génère les emails de relance via Claude. Le prompt doit inclure le contexte complet : nom du client, numéro de facture, montant, jours de retard, nombre de relances déjà envoyées. L'IA adapte le ton en conséquence.</p>

<h2>Monétisation</h2>
<p>Modèle SaaS : Gratuit (5 factures/mois, PDF basique), Pro à 9€/mois (factures illimitées, relances IA, dashboard complet), Business à 24€/mois (multi-utilisateurs, exports comptables, intégrations bancaires). Le pricing doit rester accessible car les freelances comparent avec les alternatives gratuites. La valeur IA des relances justifie le prix — si l'outil récupère ne serait-ce qu'une facture impayée de 500€, l'abonnement est rentabilisé pour 4 ans.</p>`,
    exercise: `<ol>
<li>Crée le schéma Prisma pour la facturation (companies, clients, invoices, invoice_items, payments) avec la numérotation séquentielle automatique. Seed la base avec une entreprise, 5 clients et 10 factures à différents statuts (brouillon, envoyée, payée, en retard).</li>
<li>Construis le formulaire de création de facture avec ajout/suppression dynamique de lignes, calcul automatique des sous-totaux et TVA, et génère le PDF correspondant. Vérifie que le PDF est conforme aux obligations légales françaises (mentions obligatoires, numérotation séquentielle).</li>
<li>Implémente le système de relances IA : crée une fonction qui identifie les factures en retard, envoie le contexte à Claude pour générer un email de relance adapté (ton, contenu, urgence), et affiche l'email généré pour validation. Teste avec 3 scénarios : retard de 5 jours, 15 jours et 30 jours.</li>
</ol>`,
  },
  {
    order: 113,
    module: 7,
    title: "Projet : Marketplace de services",
    slug: "projet-marketplace-services",
    duration: "55 min",
    description: "Construis une marketplace connectant prestataires et clients avec matching IA.",
    content: `<h2>Ce qu'on construit et l'opportunité</h2>
<p>Tu vas construire une marketplace de services qui connecte des prestataires (développeurs, designers, rédacteurs, consultants) avec des clients qui ont des besoins spécifiques. Pense à un Malt ou Fiverr simplifié mais avec un matching IA qui trouve le bon prestataire pour chaque projet. C'est le projet le plus ambitieux du module, et aussi le plus lucratif si tu le déploies.</p>
<p>Les marketplaces de services sont des business extraordinaires : tu prends une commission sur chaque transaction (15-20%), tu n'as pas de stock, et plus tu as d'utilisateurs, plus la plateforme a de valeur (effet réseau). Uber, Airbnb, Malt — tous fonctionnent sur ce modèle. La clé, c'est de te nicher : marketplace de services IA pour PME, marketplace de freelances tech pour startups, marketplace de créatifs pour agences.</p>

<h2>Architecture technique</h2>
<ul>
<li><strong>Modèle de données</strong> : Users (avec rôle : client ou prestataire), Profiles (pour les prestataires : compétences, tarifs, portfolio, disponibilité, bio), Projects (postés par les clients : titre, description, budget, deadline, compétences requises), Proposals (soumises par les prestataires : prix, délai, message), Reviews (note 1-5 + commentaire après projet terminé), Messages (système de messagerie intégré). C'est un modèle riche mais chaque table a sa raison d'être.</li>
<li><strong>Matching IA</strong> : Quand un client poste un projet, l'IA analyse la description, extrait les compétences requises, et score chaque prestataire disponible en fonction de : correspondance des compétences, tarif compatible avec le budget, disponibilité, notes précédentes, et historique de projets similaires. Le résultat est un classement des prestataires les plus pertinents avec un pourcentage de compatibilité.</li>
<li><strong>Système de paiement</strong> : Utilise Stripe Connect pour gérer les paiements entre clients et prestataires. Le client paie, l'argent est bloqué en escrow, le prestataire livre, le client valide, l'argent est libéré avec ta commission déduite. C'est le modèle standard des marketplaces et Stripe gère toute la complexité légale.</li>
<li><strong>Messagerie intégrée</strong> : Les clients et prestataires doivent pouvoir communiquer avant et pendant le projet sans quitter la plateforme. Utilise WebSockets (Socket.io) pour le temps réel ou une approche polling simple pour le MVP. Chaque conversation est liée à un projet pour le suivi.</li>
</ul>

<h2>Fonctionnalités clés</h2>
<ul>
<li><strong>Profils prestataires</strong> : Page publique avec photo, bio, compétences (tags), tarif horaire ou à la mission, portfolio (liens vers des projets réalisés), avis clients avec note moyenne. Le profil doit être une landing page de vente — c'est ce qui convainc le client de choisir ce prestataire plutôt qu'un autre.</li>
<li><strong>Publication de projets</strong> : Le client décrit son besoin, fixe un budget (fourchette), une deadline, et sélectionne les compétences requises. L'IA l'aide à rédiger un brief clair : "Tu mentionnes un site e-commerce mais tu n'as pas précisé le nombre de produits ni le moyen de paiement souhaité. Veux-tu ajouter ces détails ?" Un bon brief attire de meilleures propositions.</li>
<li><strong>Matching intelligent</strong> : Dès qu'un projet est publié, l'IA notifie les prestataires les plus pertinents. Le client voit aussi un classement des prestataires recommandés avec le score de compatibilité et la justification. "Jean-Marc, 92% compatible : expert Next.js (compétence requise), tarif dans le budget, disponible cette semaine, 4.8/5 sur 23 projets similaires."</li>
<li><strong>Propositions et négociation</strong> : Les prestataires soumettent des propositions avec prix, délai et approche. Le client compare les propositions côte à côte. L'IA peut aussi aider le client à évaluer les propositions : "La proposition A est 30% moins chère mais le prestataire a moins d'expérience sur ce type de projet. La proposition B inclut une garantie de révision que A n'offre pas."</li>
<li><strong>Système de reviews</strong> : Après chaque projet, le client et le prestataire se notent mutuellement. Les avis sont vérifiés (liés à un vrai projet) et ne peuvent pas être modifiés. Ce système de réputation est le moteur de confiance de la marketplace — sans lui, personne n'ose embaucher un inconnu en ligne.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Ce projet est ambitieux, alors procède par phases. Phase 1 : inscription, profils prestataires, publication de projets. Phase 2 : propositions, matching IA, messagerie. Phase 3 : paiements Stripe Connect, reviews. Chaque phase est un produit viable que tu peux tester avec de vrais utilisateurs.</p>
<p>Pour le matching IA, crée un endpoint qui prend la description du projet et la liste des prestataires avec leurs profils, et demande à Claude de scorer chaque prestataire. Le prompt doit être structuré : "Voici un projet [description]. Voici les profils de 10 prestataires [données]. Score chaque prestataire de 0 à 100 et justifie en 1 phrase. Retourne en JSON." C'est simple mais redoutablement efficace.</p>
<p>Pour le MVP de la messagerie, une approche polling (le client fait un GET toutes les 5 secondes) est suffisante. Tu migreras vers WebSockets quand tu auras validé le concept. Ne sur-ingénierie pas dès le départ — la vitesse d'exécution est plus importante que la perfection technique.</p>

<h2>Monétisation</h2>
<p>Commission de 12-15% sur chaque transaction, facturée au prestataire (comme Malt). Options premium : mise en avant des profils (9€/mois), accès anticipé aux projets (14€/mois), badge "vérifié" après vérification d'identité (one-shot 29€). La beauté du modèle marketplace, c'est que tes revenus croissent avec le volume de transactions sans coût proportionnel. 100 projets à 1 000€ avec 15% de commission = 15 000€/mois de revenus. La difficulté est de résoudre le problème de la poule et l'œuf : commence par recruter les prestataires, puis attire les clients.</p>`,
    exercise: `<ol>
<li>Crée le modèle de données complet avec Prisma (users, profiles, projects, proposals, reviews, messages) et seed la base avec 10 prestataires aux compétences variées, 5 projets et quelques propositions. Vérifie les relations en requêtant un projet avec ses propositions et les profils des prestataires associés.</li>
<li>Implémente le matching IA : crée un endpoint qui prend un projet et la liste des prestataires, envoie le tout à Claude pour scoring, et retourne le classement avec pourcentages de compatibilité et justifications. Teste avec un projet "Site e-commerce Shopify" et vérifie que les prestataires spécialisés e-commerce sont en tête.</li>
<li>Construis la page projet avec Claude Code : affichage du brief, liste des propositions reçues triées par score IA, comparaison côte à côte de 2 propositions, et bouton "Accepter la proposition". Teste le parcours complet du client : publication, réception des propositions, comparaison et acceptation.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 8 : Projets — Automatisations et Agents IA
  // ═══════════════════════════════════════════════════
  {
    order: 114,
    module: 8,
    title: "Projet : Agent de veille concurrentielle",
    slug: "projet-agent-veille-concurrentielle",
    duration: "50 min",
    description: "Construis un agent IA qui scrape le web et analyse la concurrence automatiquement.",
    content: `<h2>Ce qu'on construit et pourquoi c'est indispensable</h2>
<p>Tu vas construire un agent de veille concurrentielle automatisé. Cet agent scrape les sites web de tes concurrents, surveille leurs prix, leurs offres, leurs contenus et leurs actualités, puis utilise l'IA pour analyser les changements et te fournir un rapport actionnable. Plus besoin de passer 2 heures par semaine à checker manuellement ce que font tes concurrents — ton agent le fait pour toi 24/7.</p>
<p>La veille concurrentielle est un besoin universel. Chaque entreprise veut savoir ce que font ses concurrents, mais personne n'a le temps de le faire correctement. Les outils existants comme SEMrush ou SimilarWeb coûtent 100-400€/mois et sont surdimensionnés pour une PME. Ton agent fait le job pour une fraction du prix, avec une analyse IA en plus.</p>

<h2>Architecture de l'agent</h2>
<ul>
<li><strong>Module de scraping</strong> : Utilise Puppeteer ou Playwright pour naviguer sur les sites concurrents et extraire les données. Définis des "watchers" par concurrent : URL de la page pricing, URL du blog, URL des offres, feed RSS si disponible. Le scraper tourne en cron job (quotidien ou hebdomadaire selon les besoins). Stocke chaque snapshot avec un timestamp pour pouvoir comparer les versions dans le temps.</li>
<li><strong>Stockage et diff</strong> : Chaque scrape est stocké en base. Le système compare le scrape actuel avec le précédent et identifie les changements : nouveau contenu, modification de prix, nouvelle offre, nouvel article de blog. Utilise un algorithme de diff textuel pour détecter les modifications significatives et ignorer les changements cosmétiques (pub, date, footer).</li>
<li><strong>Analyse IA</strong> : Les changements détectés sont envoyés à Claude pour analyse. Le prompt demande : "Voici les changements détectés chez le concurrent X cette semaine. Analyse l'impact potentiel sur notre activité, identifie les menaces et les opportunités, et suggère des actions concrètes." L'IA transforme des données brutes en insights business.</li>
<li><strong>Rapport et alertes</strong> : Génère un rapport hebdomadaire par email avec les changements clés, l'analyse IA et les recommandations. Pour les changements critiques (nouveau produit concurrent, baisse de prix agressive), envoie une alerte immédiate. Le format du rapport doit être scannable en 2 minutes — l'entrepreneur n'a pas le temps de lire un roman.</li>
</ul>

<h2>Fonctionnalités de l'agent</h2>
<ul>
<li><strong>Configuration des concurrents</strong> : Interface pour ajouter un concurrent avec ses URLs à surveiller. Pour chaque URL, définis ce qu'il faut extraire : texte de la page, prix (sélecteur CSS spécifique), titres d'articles, meta-données. L'agent s'adapte à la structure de chaque site grâce à des sélecteurs configurables.</li>
<li><strong>Détection de changements intelligente</strong> : Pas toutes les modifications ne sont pertinentes. L'agent filtre le bruit (changement de date, rotation de pubs, mise à jour du copyright) pour ne remonter que les changements significatifs. Utilise un seuil de similarité textuelle : si le contenu a changé de moins de 5%, c'est probablement du bruit.</li>
<li><strong>Analyse de pricing</strong> : Si tu surveilles les pages de prix des concurrents, l'agent extrait les tarifs, les compare avec les tiens, et te signale les écarts. "Le concurrent X a baissé son plan Pro de 49€ à 39€/mois. Ton plan équivalent est à 45€/mois. Tu es maintenant 15% plus cher." C'est le genre d'info qui peut changer ta stratégie en 24h.</li>
<li><strong>Veille contenu</strong> : L'agent surveille les blogs des concurrents et analyse les sujets qu'ils couvrent. "Le concurrent Y a publié 3 articles sur l'IA générative ce mois-ci. Aucun de tes articles ne couvre ce sujet. Opportunité : créer du contenu sur ce thème avant qu'ils dominent le SEO." L'IA connecte la veille contenu à ta stratégie SEO.</li>
<li><strong>Historique et tendances</strong> : Dashboard avec l'évolution des prix concurrents sur 6 mois, la fréquence de publication de contenu, les lancements de fonctionnalités. Les tendances sont plus révélatrices que les snapshots — tu vois les stratégies se dessiner dans le temps.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par le scraper. Demande à Claude Code de créer un service Node.js avec Puppeteer qui prend une URL et un sélecteur CSS, charge la page et extrait le contenu textuel. Teste sur 3 sites concurrents réels. Gère les cas edge : pages qui chargent en JS (SPA), CAPTCHA, rate limiting. Ajoute des headers réalistes et des délais aléatoires entre les requêtes pour ne pas être bloqué.</p>
<p>Ensuite, construis le système de diff. Stocke chaque scrape en base avec un hash du contenu. Quand un nouveau scrape arrive, compare le hash avec le précédent. Si différent, calcule le diff textuel et stocke les changements. Utilise une librairie comme diff pour la comparaison.</p>
<p>Pour l'analyse IA, crée un batch job qui collecte tous les changements de la semaine, les formate en un prompt structuré, et envoie à Claude. Le rapport généré est stocké et envoyé par email. Commence par un format texte simple, puis passe au HTML pour un rendu plus pro.</p>

<h2>Monétisation</h2>
<p>SaaS B2B : Starter à 29€/mois (3 concurrents, rapport hebdomadaire), Pro à 79€/mois (10 concurrents, alertes temps réel, analyse IA avancée), Enterprise à 199€/mois (concurrents illimités, API, rapports custom). Tu peux aussi vendre le service en done-for-you : tu configures la veille pour le client et tu lui envoies un rapport mensuel pour 200-500€/mois. Les agences marketing adorent ce service — elles le revendent à leurs propres clients avec une marge.</p>`,
    exercise: `<ol>
<li>Construis le module de scraping avec Puppeteer : crée une fonction qui prend une URL et un sélecteur CSS, charge la page, extrait le contenu et le retourne en texte. Teste sur 3 sites publics différents (pages de pricing, blogs, pages d'accueil). Gère les erreurs (timeout, page introuvable, contenu vide).</li>
<li>Implémente le système de détection de changements : stocke deux versions d'une même page (simule un changement de prix ou l'ajout d'un article), calcule le diff textuel et filtre les changements non significatifs. Affiche un résumé des modifications détectées.</li>
<li>Crée le rapport d'analyse IA : envoie les changements détectés à Claude avec un prompt demandant l'analyse d'impact, les menaces, les opportunités et les actions recommandées. Formate le rapport en HTML lisible et teste avec un scénario réaliste (concurrent qui lance un nouveau produit).</li>
</ol>`,
  },
  {
    order: 115,
    module: 8,
    title: "Projet : Agent de qualification de leads",
    slug: "projet-agent-qualification-leads",
    duration: "45 min",
    description: "Développe un agent IA qui qualifie automatiquement les leads entrants et priorise les meilleurs prospects.",
    content: `<h2>Ce qu'on construit et la valeur pour les équipes commerciales</h2>
<p>Tu vas construire un agent de qualification de leads qui analyse automatiquement chaque nouveau prospect entrant, lui attribue un score de qualité, et recommande l'action commerciale appropriée. C'est l'assistant commercial IA que chaque équipe de vente rêve d'avoir — il filtre le bruit et pointe vers les prospects les plus susceptibles de convertir.</p>
<p>Le problème est universel : les commerciaux passent 65% de leur temps sur des leads non qualifiés. Un lead "info@gmail.com" qui a téléchargé un ebook gratuit n'a pas la même valeur qu'un directeur commercial d'une entreprise de 50 personnes qui a demandé une démo. Ton agent fait cette distinction automatiquement et permet aux commerciaux de se concentrer sur les leads à fort potentiel.</p>

<h2>Architecture de l'agent</h2>
<ul>
<li><strong>Ingestion de leads</strong> : L'agent récupère les leads depuis plusieurs sources — formulaires web (webhook), emails entrants (parsing), CRM existant (API), LinkedIn (scraping). Chaque lead est normalisé dans un format standard : nom, email, entreprise, titre, source, message/contexte. Crée une API REST qui accepte les leads et un webhook pour les formulaires.</li>
<li><strong>Enrichissement de données</strong> : Avant de qualifier, enrichis le lead avec des données publiques. À partir de l'email pro, trouve l'entreprise sur LinkedIn ou le registre du commerce, estime la taille (nombre d'employés), le secteur d'activité et le chiffre d'affaires. Utilise des APIs comme Clearbit, Hunter.io ou du scraping LinkedIn. Plus tu as d'infos, plus le scoring est précis.</li>
<li><strong>Scoring IA</strong> : L'agent envoie toutes les données du lead à Claude avec un framework de scoring. Le scoring se base sur des critères pondérés : taille de l'entreprise (25%), adéquation du besoin avec ton offre (30%), niveau de maturité (20%), budget estimé (15%), urgence perçue (10%). Claude analyse le message du lead, le contexte et les données enrichies pour attribuer un score global de 0 à 100.</li>
<li><strong>Routage et actions</strong> : En fonction du score, l'agent déclenche des actions automatiques. Score 80+ : alerte immédiate au commercial senior, envoi d'un email personnalisé de prise de contact. Score 50-79 : ajout à une séquence de nurturing email. Score 30-49 : envoi de contenu éducatif. Score 0-29 : disqualifié, pas d'action. Chaque action est logguée pour le suivi.</li>
</ul>

<h2>Fonctionnalités de l'agent</h2>
<ul>
<li><strong>Framework de scoring personnalisable</strong> : L'utilisateur définit ses critères de qualification avec leur poids. Un SaaS B2B n'a pas les mêmes critères qu'une agence créative. Interface de configuration : ajoute/modifie des critères, ajuste les poids, définis les seuils d'action. Le scoring IA s'adapte à ces critères personnalisés.</li>
<li><strong>Analyse du message</strong> : Quand le lead a laissé un message (formulaire de contact, email), l'IA l'analyse en profondeur. Détection de l'intention (achat, information, comparaison), du budget mentionné ("nous avons un budget de 5 000€"), de l'urgence ("nous devons lancer avant septembre"), et des signaux d'achat ("nous comparons actuellement 3 solutions"). Ces signaux enrichissent le scoring.</li>
<li><strong>Réponse automatique intelligente</strong> : Pour les leads qualifiés, l'agent génère un email de réponse personnalisé. Pas un template générique — un email qui reprend les points spécifiques du message du lead, propose une solution adaptée et suggère un créneau de call. Le taux de réponse à un email personnalisé est 6x supérieur à un template standard.</li>
<li><strong>Dashboard de pipeline</strong> : Vue d'ensemble des leads par score, par source, par date. Métriques clés : nombre de leads qualifiés cette semaine, taux de conversion par score, délai moyen de réponse, performance par source (les leads LinkedIn convertissent-ils mieux que les leads Google Ads ?). Ces données permettent d'optimiser l'acquisition.</li>
<li><strong>Apprentissage continu</strong> : L'agent s'améliore avec le feedback. Quand un commercial marque un lead comme "converti" ou "perdu", l'info est stockée. Régulièrement, tu peux analyser les caractéristiques des leads convertis vs perdus et ajuster les critères de scoring. C'est un cercle vertueux qui améliore la précision au fil du temps.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par l'API d'ingestion. Crée un endpoint POST /api/leads qui accepte les données d'un lead en JSON, les normalise et les stocke en base. Ajoute un webhook compatible avec les formulaires web courants (Typeform, Tally, formulaire HTML standard). Teste avec 10 leads fictifs variés.</p>
<p>Ensuite, construis le moteur de scoring. Crée un service qui prend un lead enrichi et l'envoie à Claude avec le framework de scoring. Le prompt est crucial : "Voici les données d'un lead [données]. En utilisant le framework de scoring suivant [critères et poids], attribue un score de 0 à 100 et justifie en détaillant chaque critère. Retourne en JSON : score, justification par critère, action recommandée." Parse la réponse et stocke le résultat.</p>
<p>Pour la réponse automatique, crée un second prompt qui prend le lead qualifié et génère un email de réponse. Le prompt doit inclure le ton de voix souhaité, les services proposés, et les infos du lead. L'email doit sembler écrit par un humain — pas par un bot. Teste avec des leads réels et demande à des humains si l'email semble naturel.</p>

<h2>Monétisation</h2>
<p>Vends l'agent comme un service managé : installation et configuration pour 1 500-3 000€, puis abonnement de 200-500€/mois pour la maintenance, l'optimisation et l'accès à la plateforme. Cible les agences web, les SaaS B2B et les cabinets de conseil qui ont un flux constant de leads entrants. Tu peux aussi le proposer en SaaS : 49€/mois pour 100 leads, 149€/mois pour 1 000 leads, 399€/mois en illimité. La valeur est facile à démontrer : si l'agent améliore le taux de conversion de 2%, sur un pipeline de 100 000€, ça fait 2 000€ de CA en plus par mois.</p>`,
    exercise: `<ol>
<li>Crée l'API d'ingestion de leads avec un endpoint POST qui accepte nom, email, entreprise, titre, source et message. Normalise les données (trim, lowercase email, détection du domaine entreprise). Teste avec 10 leads fictifs aux profils variés (CEO de startup, étudiant, directeur marketing de PME).</li>
<li>Implémente le scoring IA : définis un framework de 5 critères pondérés, crée le prompt de scoring pour Claude, et teste sur tes 10 leads. Vérifie que le CEO de startup obtient un score significativement plus élevé que l'étudiant. Ajuste les poids si nécessaire.</li>
<li>Construis le générateur d'emails de réponse : pour les 3 leads les mieux scorés, génère un email de prise de contact personnalisé avec Claude. L'email doit reprendre les points du message original, proposer une solution et suggérer un call. Fais relire les emails par quelqu'un pour valider le naturel du ton.</li>
</ol>`,
  },
  {
    order: 116,
    module: 8,
    title: "Projet : Chatbot support client intelligent",
    slug: "projet-chatbot-support-client-intelligent",
    duration: "50 min",
    description: "Crée un chatbot IA de support client qui résout les problèmes et escalade intelligemment.",
    content: `<h2>Ce qu'on construit et pourquoi c'est le service IA le plus demandé</h2>
<p>Tu vas construire un chatbot de support client intelligent propulsé par Claude. Pas un chatbot à boutons prédéfinis qui frustre les utilisateurs — un agent conversationnel qui comprend les questions en langage naturel, puise dans la base de connaissances de l'entreprise pour répondre, et sait escalader vers un humain quand c'est nécessaire. C'est LE produit IA que chaque entreprise veut, et c'est le service le plus vendu par les agences IA en 2025.</p>
<p>80% des questions de support sont récurrentes : "Où est ma commande ?", "Comment annuler mon abonnement ?", "Quels sont vos tarifs ?". Un chatbot IA gère ces questions instantanément, 24/7, sans temps d'attente. Le résultat : les clients sont satisfaits, l'équipe support se concentre sur les cas complexes, et l'entreprise économise 40-60% de ses coûts de support. C'est un win-win-win.</p>

<h2>Architecture du chatbot</h2>
<ul>
<li><strong>Widget de chat</strong> : Composant React injectable sur n'importe quel site via un script. Bulle de chat en bas à droite, fenêtre de conversation avec interface moderne, support du markdown pour les réponses formatées. Le widget doit être léger (moins de 80kb), personnalisable (couleurs, logo, message d'accueil) et responsive. Il communique avec ton API via WebSocket ou SSE pour le streaming des réponses.</li>
<li><strong>Base de connaissances</strong> : Le chatbot ne peut pas répondre correctement sans contexte. Crée un système d'ingestion de documents : pages FAQ, documentation produit, articles d'aide, conditions générales. Découpe ces documents en chunks, vectorise-les avec un modèle d'embeddings et stocke-les dans une base vectorielle (Pinecone, Weaviate, ou un simple stockage local avec cosine similarity). À chaque question, les chunks les plus pertinents sont récupérés et ajoutés au contexte de Claude.</li>
<li><strong>Moteur de réponse IA</strong> : Le cœur du système. Tu envoies à Claude : le message de l'utilisateur, l'historique de la conversation, les chunks de connaissances pertinents, et un system prompt qui définit le ton, les limites et les règles d'escalade. Claude génère une réponse contextualisée et précise. Le streaming (SSE) permet d'afficher la réponse mot par mot pour une UX fluide.</li>
<li><strong>Système d'escalade</strong> : Le chatbot doit savoir quand il ne peut pas aider. Définis des règles d'escalade : si le client demande un remboursement, si le sentiment est très négatif, si le bot ne trouve pas de réponse pertinente, ou si le client demande explicitement un humain. L'escalade crée un ticket dans le système de support (email, Zendesk, ou un dashboard interne) avec tout le contexte de la conversation.</li>
</ul>

<h2>Fonctionnalités clés</h2>
<ul>
<li><strong>RAG (Retrieval-Augmented Generation)</strong> : C'est la technique clé. Au lieu de demander à Claude de tout savoir, tu lui fournis les informations pertinentes à chaque question. Le flow : question du client, recherche sémantique dans la base de connaissances, récupération des 3-5 chunks les plus pertinents, envoi à Claude avec le contexte. Le résultat est une réponse précise et à jour, basée sur la vraie documentation de l'entreprise.</li>
<li><strong>Mémoire conversationnelle</strong> : Le chatbot se souvient de ce qui a été dit dans la conversation. Si le client dit "J'ai commandé un T-shirt bleu" puis "Il n'est pas arrivé", le bot comprend que "il" = le T-shirt bleu. Implémente ça en envoyant les 10 derniers messages comme historique dans le prompt. Gère la taille du contexte pour ne pas dépasser les limites de tokens.</li>
<li><strong>Réponses multimodales</strong> : Le bot peut répondre avec du texte, mais aussi avec des liens, des images, des boutons d'action. "Pour suivre votre commande, cliquez ici : [lien]. Voici aussi un guide vidéo qui explique le processus : [thumbnail cliquable]." Les réponses riches sont plus utiles et réduisent les allers-retours.</li>
<li><strong>Analytics du chatbot</strong> : Dashboard avec les métriques essentielles : nombre de conversations/jour, taux de résolution sans escalade (visez 70%+), questions les plus fréquentes, satisfaction client (pouce haut/bas après chaque réponse), temps moyen de conversation. Ces données permettent d'améliorer continuellement la base de connaissances et les prompts.</li>
<li><strong>Mode entraînement</strong> : Interface admin où le propriétaire peut voir les conversations, identifier les questions mal répondues et ajouter les bonnes réponses à la base de connaissances. C'est la boucle d'amélioration continue : le bot se trompe, tu corriges, il ne se trompe plus sur cette question.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par le RAG — c'est la fondation. Crée un script qui prend une FAQ en markdown, la découpe en chunks de 200-500 mots, et calcule les embeddings. Pour le MVP, tu peux utiliser un simple calcul de similarité cosinus avec des embeddings de phrases sans base vectorielle dédiée. Plus tard, migre vers Pinecone ou Supabase pgvector.</p>
<p>Ensuite, construis l'API du chatbot. Endpoint POST /api/chat qui prend le message et l'historique, fait la recherche sémantique, compose le prompt avec le contexte, et streame la réponse de Claude via SSE. Le system prompt est critique : définis le ton (amical, professionnel), les sujets autorisés (uniquement ce qui est dans la base), les règles d'escalade, et le format des réponses.</p>
<p>Pour le widget, crée un composant React autonome avec une fenêtre de chat, un champ de saisie, et l'affichage streaming des réponses. Compile-le en un script JS injectable. Le widget s'initialise avec l'ID du chatbot (chaque client a le sien) et se connecte à ton API.</p>

<h2>Monétisation</h2>
<p>C'est le service IA le plus rentable. Installation et configuration : 2 000-5 000€ (selon la taille de la base de connaissances). Abonnement mensuel : 200-800€/mois (inclut l'hébergement, les tokens IA, la maintenance et l'optimisation). Tu peux aussi vendre en SaaS self-service : 49€/mois (1 000 messages), 149€/mois (10 000 messages), 399€/mois (illimité). Chaque chatbot que tu installes te rapporte du récurrent. 10 clients à 400€/mois = 4 000€/mois de revenus prévisibles.</p>`,
    exercise: `<ol>
<li>Construis le système RAG : prends un fichier FAQ de 20 questions-réponses, découpe-le en chunks, implémente la recherche par similarité textuelle (tu peux commencer avec du keyword matching avant de passer aux embeddings). Teste avec 5 questions formulées différemment de la FAQ et vérifie que les bons chunks sont récupérés.</li>
<li>Crée l'API du chatbot avec streaming : endpoint qui reçoit un message, récupère le contexte pertinent, envoie le tout à Claude avec un system prompt de support client, et retourne la réponse en streaming (SSE). Teste avec une conversation de 5 messages et vérifie que le chatbot utilise le contexte de la base de connaissances.</li>
<li>Implémente le système d'escalade : définis 3 règles d'escalade (demande de remboursement, sentiment négatif, demande explicite d'humain), détecte-les dans la conversation, et génère un ticket d'escalade avec le résumé de la conversation. Teste chaque règle avec un message qui doit déclencher l'escalade.</li>
</ol>`,
  },
  {
    order: 117,
    module: 8,
    title: "Projet : Agent de création de contenu",
    slug: "projet-agent-creation-contenu",
    duration: "45 min",
    description: "Développe un agent IA qui crée du contenu multi-plateforme adapté à chaque canal.",
    content: `<h2>Ce qu'on construit et pourquoi le contenu est roi</h2>
<p>Tu vas construire un agent de création de contenu multi-plateforme. L'agent prend un sujet ou un brief, et génère du contenu optimisé pour chaque canal : article de blog long format, post LinkedIn, thread Twitter/X, script de vidéo courte (Reels/TikTok), newsletter email, carrousel Instagram. Un sujet, six formats — automatiquement. C'est le rêve de tout créateur de contenu et de toute agence marketing.</p>
<p>Le contenu est la machine d'acquisition la plus puissante en 2025, mais c'est aussi la plus chronophage. Un article de blog prend 3-4 heures, un post LinkedIn 30 minutes, un carrousel Instagram 1 heure. Multiplie ça par 3-5 publications par semaine et tu comprends pourquoi les entreprises sont prêtes à payer pour automatiser. Ton agent transforme 1 heure de travail en 6 contenus prêts à publier.</p>

<h2>Architecture de l'agent</h2>
<ul>
<li><strong>Module d'entrée</strong> : L'utilisateur fournit un brief de contenu — un sujet, des points clés à couvrir, le ton souhaité, et la cible. Le brief peut être minimal ("Les tendances IA en 2025 pour les PME") ou détaillé (avec des sources, des données, un angle spécifique). L'agent accepte aussi un article existant pour le décliner en multi-format.</li>
<li><strong>Moteur de génération multi-format</strong> : Pour chaque format, un prompt spécialisé envoie le brief à Claude avec les contraintes du canal. Un post LinkedIn a des règles (hook en première ligne, paragraphes courts, call-to-action, emojis stratégiques). Un article de blog a d'autres règles (structure H2/H3, SEO, longueur 1500+ mots). Un script TikTok encore d'autres (60 secondes max, hook en 3 secondes, conversationnel). Chaque prompt encode ces best practices.</li>
<li><strong>Pipeline de traitement</strong> : Le brief passe par un pipeline séquentiel : recherche du sujet (analyse IA des tendances et angles), génération de l'article pilier (le contenu long format), puis déclinaison en formats courts. L'article pilier sert de base aux déclinaisons — ça garantit la cohérence du message à travers tous les canaux.</li>
<li><strong>Éditeur et prévisualisation</strong> : Chaque contenu généré est affiché dans un éditeur avec prévisualisation du rendu final. Le post LinkedIn est montré comme il apparaîtra sur LinkedIn. Le carrousel Instagram est affiché slide par slide. L'utilisateur peut éditer, régénérer un passage, ou demander un ajustement de ton avant d'exporter.</li>
</ul>

<h2>Fonctionnalités de l'agent</h2>
<ul>
<li><strong>Adaptation de ton par plateforme</strong> : L'agent ajuste automatiquement le ton selon le canal. LinkedIn : professionnel mais accessible, expertise visible. Twitter/X : percutant, concis, parfois provocateur. Blog : détaillé, SEO-friendly, éducatif. Instagram : visuel, émotionnel, storytelling. Newsletter : personnel, conversationnel, exclusif. C'est ce qui fait la différence entre un outil qui copie-colle et un agent qui comprend chaque plateforme.</li>
<li><strong>Optimisation SEO intégrée</strong> : Pour les articles de blog, l'agent génère automatiquement le titre SEO, la meta-description, les mots-clés cibles, les balises H2/H3 optimisées, et le maillage interne suggéré. Il vérifie aussi la densité de mots-clés et la lisibilité (score Flesch adapté au français). L'article est prêt à être publié tel quel sur WordPress.</li>
<li><strong>Hooks et accroches</strong> : L'agent génère 3 variantes de hook pour chaque contenu. Le hook est la ligne la plus importante — c'est ce qui détermine si les gens vont lire la suite. Pour un post LinkedIn : "J'ai perdu 10 000€ en faisant cette erreur. Voici ce que j'aurais dû faire." vs "Les 5 erreurs les plus courantes en business IA." L'utilisateur choisit le hook qui lui parle le plus.</li>
<li><strong>Calendrier éditorial</strong> : L'agent peut générer un plan de contenu sur 30 jours à partir de thématiques clés. "Tu vends des services IA ? Voici 30 sujets de contenu avec le format recommandé pour chaque jour." Le calendrier est exportable en CSV pour import dans Notion, Buffer ou Hootsuite.</li>
<li><strong>Repurposing intelligent</strong> : Donne un article de blog existant à l'agent et il le décline en 5 formats en préservant les messages clés mais en adaptant le style. Il identifie les passages les plus impactants pour les extraire en citations ou en hooks de posts courts.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par les prompts — c'est 80% de la valeur de cet agent. Crée un prompt par format avec les règles, contraintes et best practices de chaque plateforme. Teste chaque prompt individuellement avec 5 sujets différents et affine jusqu'à ce que la qualité soit constante. Un bon prompt LinkedIn doit générer un post que tu publierais toi-même sans modification.</p>
<p>Ensuite, construis le pipeline. L'API prend le brief en entrée, génère l'article pilier d'abord, puis lance la génération des formats courts en parallèle. Utilise Promise.all pour paralléliser les appels à Claude et réduire le temps de génération total. Chaque résultat est stocké en base avec le brief d'origine pour le suivi.</p>
<p>Pour l'interface, crée un formulaire de brief avec les champs essentiels, un affichage en tabs des différents formats générés, et des boutons "Copier" et "Exporter" pour chaque contenu. Ajoute un bouton "Régénérer" qui relance le prompt avec une instruction de variation pour obtenir un résultat différent.</p>

<h2>Monétisation</h2>
<p>SaaS créateur : Free (5 contenus/mois), Creator à 29€/mois (50 contenus, tous les formats), Agency à 79€/mois (contenus illimités, calendrier éditorial, export multi-format, API). Tu peux aussi vendre l'agent en service managé : tu crées le contenu pour le client avec l'outil et tu factures 500-1 500€/mois pour 4 articles + déclinaisons par semaine. La marge est énorme car l'outil fait le gros du travail en 10 minutes au lieu de 6 heures.</p>`,
    exercise: `<ol>
<li>Crée 3 prompts spécialisés pour 3 plateformes (LinkedIn, blog SEO, script TikTok). Chaque prompt doit encoder les règles et best practices du format. Teste chaque prompt avec le sujet "Comment l'IA transforme le service client en 2025" et compare les résultats. Les contenus doivent être radicalement différents en style tout en gardant le même message.</li>
<li>Construis le pipeline de repurposing : prends un article de blog de 1000 mots (génère-le ou utilise un article existant), et crée un service qui le décline automatiquement en post LinkedIn, tweet thread (5 tweets), et script vidéo 60 secondes. Vérifie la cohérence du message à travers les formats.</li>
<li>Implémente le générateur de calendrier éditorial : à partir de 3 thématiques et d'une fréquence de publication, génère un plan sur 30 jours avec sujet, format recommandé et angle pour chaque jour. Exporte en JSON et vérifie qu'il n'y a pas de répétition et que la variété des formats est respectée.</li>
</ol>`,
  },
  {
    order: 118,
    module: 8,
    title: "Projet : Système d'automatisation email",
    slug: "projet-systeme-automatisation-email",
    duration: "50 min",
    description: "Construis un système d'emails automatisés avec réponses IA personnalisées et séquences intelligentes.",
    content: `<h2>Ce qu'on construit et pourquoi l'email reste le canal roi</h2>
<p>Tu vas construire un système d'automatisation email avec IA qui gère trois cas d'usage : les séquences d'emails automatisées (onboarding, nurturing, relance), les réponses intelligentes aux emails entrants, et la segmentation dynamique des contacts. L'email marketing reste le canal avec le meilleur ROI — 36€ de retour pour chaque euro investi. Mais la plupart des entreprises envoient les mêmes emails génériques à tout le monde. Ton système personnalise chaque email grâce à l'IA.</p>
<p>Ce qui différencie ton outil de Mailchimp ou Brevo, c'est l'intelligence. L'IA ne se contente pas d'envoyer des emails programmés — elle adapte le contenu en fonction du comportement du destinataire, rédige des réponses personnalisées aux emails entrants, et identifie les meilleurs moments d'envoi. C'est comme avoir un assistant email qui travaille 24/7.</p>

<h2>Architecture du système</h2>
<ul>
<li><strong>Gestion des contacts</strong> : Base de contacts avec segmentation dynamique. Chaque contact a des attributs (nom, email, entreprise, source) et des tags automatiques basés sur son comportement (a ouvert le dernier email, a cliqué, a visité le site, a acheté). Les segments se mettent à jour en temps réel : "Contacts qui ont ouvert les 3 derniers emails mais n'ont jamais acheté" — c'est un segment chaud à cibler.</li>
<li><strong>Moteur de séquences</strong> : L'utilisateur crée des séquences d'emails déclenchées par des événements. Événement "Inscription newsletter" : Email 1 (J+0), Email 2 (J+3), Email 3 (J+7). L'IA personnalise chaque email en fonction du profil du contact et de ses interactions précédentes. Si le contact a ouvert l'email 1 et cliqué sur un lien sur le pricing, l'email 2 parle de pricing. S'il n'a pas ouvert l'email 1, l'email 2 a un sujet différent pour capter son attention.</li>
<li><strong>Réponses IA aux emails entrants</strong> : Le système scanne les emails entrants (via IMAP ou webhook), analyse le contenu avec Claude, et génère une réponse appropriée. Pour les emails de support standard, la réponse est envoyée automatiquement. Pour les cas complexes, l'IA rédige un brouillon que l'humain valide avant envoi. Le prompt inclut le contexte du client, l'historique des échanges et les réponses types de l'entreprise.</li>
<li><strong>Analytics et optimisation</strong> : Tracking des ouvertures (pixel tracking), des clics (lien redirect), et des conversions. A/B testing automatique : l'IA génère 2 variantes de sujet, teste sur 20% de la liste, et envoie le gagnant aux 80% restants. Heatmap des clics dans les emails pour comprendre ce qui engage le plus.</li>
</ul>

<h2>Fonctionnalités clés</h2>
<ul>
<li><strong>Éditeur de séquences visuel</strong> : Interface drag-and-drop pour créer des séquences. Chaque nœud est une action : envoyer un email, attendre X jours, vérifier une condition (a ouvert ?), brancher (si oui → email A, si non → email B). C'est un mini workflow builder spécialisé email. Utilise React Flow ou une librairie de flowchart pour l'interface visuelle.</li>
<li><strong>Personnalisation IA profonde</strong> : Au-delà du simple "Bonjour {prénom}". L'IA adapte le contenu de l'email en fonction du secteur du contact, de son historique d'interactions, et de ses centres d'intérêt détectés. Un email sur "Comment l'IA transforme votre secteur" génère un contenu différent pour un restaurateur et un avocat, tout automatiquement. Le template contient des zones dynamiques où l'IA injecte du contenu personnalisé.</li>
<li><strong>Scoring d'engagement</strong> : Chaque contact a un score d'engagement basé sur ses interactions : ouverture (+2), clic (+5), réponse (+10), désabonnement (-50). Les contacts à fort engagement reçoivent des offres commerciales. Les contacts à faible engagement reçoivent du contenu de réengagement. Le scoring permet de ne jamais spammer les contacts froids.</li>
<li><strong>Optimisation du timing</strong> : L'IA analyse les patterns d'ouverture de chaque contact et envoie les emails au moment optimal. Si Jean ouvre toujours ses emails à 8h30 le mardi et Marie les ouvre à 14h le jeudi, chacun reçoit l'email à son heure idéale. Ce simple ajustement peut augmenter le taux d'ouverture de 20-30%.</li>
<li><strong>Templates intelligents</strong> : Bibliothèque de templates d'emails par cas d'usage (bienvenue, promotion, relance, feedback, newsletter). Chaque template est optimisé pour la délivrabilité (ratio texte/image, longueur du sujet, mots à éviter en spam). L'IA peut aussi générer un template from scratch à partir d'un brief.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par l'envoi d'emails. Intègre Resend ou Nodemailer avec un service SMTP. Crée un service d'envoi qui prend un template, les variables de personnalisation, et envoie l'email. Teste avec des vrais emails (utilise Mailtrap pour le développement). Ajoute le tracking d'ouverture via un pixel invisible et le tracking de clics via des liens redirect.</p>
<p>Ensuite, construis le moteur de séquences. Un cron job tourne toutes les 5 minutes et vérifie les séquences actives : quels contacts doivent recevoir quel email à ce moment ? Pour chaque envoi, appelle le service de personnalisation IA qui adapte le contenu avant l'envoi. Stocke chaque envoi avec son statut et ses métriques.</p>
<p>Pour les réponses IA, crée un service qui parse les emails entrants (via webhook si tu utilises un service comme Postmark, ou via IMAP polling). Chaque email est analysé par Claude : intention, urgence, sujet. En fonction de l'analyse, une réponse est générée et soit envoyée automatiquement, soit mise en file de validation.</p>

<h2>Monétisation</h2>
<p>SaaS avec pricing basé sur le nombre de contacts : Starter à 19€/mois (500 contacts, 3 séquences), Growth à 49€/mois (5 000 contacts, séquences illimitées, IA), Scale à 129€/mois (25 000 contacts, réponses IA, A/B testing, API). Tu peux aussi proposer un service de setup : configuration complète des séquences et des templates pour 1 000-2 500€ en one-shot. Les e-commerces et les infopreneurs sont des cibles idéales — ils ont des listes email mais manquent de temps et de compétences pour les exploiter correctement.</p>`,
    exercise: `<ol>
<li>Crée le service d'envoi d'emails avec personnalisation : intègre un provider d'email (Resend ou Nodemailer), crée un template HTML d'email avec des variables dynamiques (prénom, entreprise, contenu personnalisé), et envoie un email test. Ajoute le pixel de tracking d'ouverture et vérifie qu'il fonctionne.</li>
<li>Construis le moteur de séquences : crée une séquence de 3 emails d'onboarding avec délais (J+0, J+3, J+7). Pour chaque email, l'IA personnalise le contenu en fonction du profil du contact (secteur d'activité). Simule le déroulement de la séquence pour 3 contacts aux profils différents et vérifie que les emails sont personnalisés.</li>
<li>Implémente le système de réponse IA : prends 5 emails entrants fictifs (demande de prix, réclamation, question technique, spam, demande de partenariat), analyse chacun avec Claude (intention, urgence, sujet), et génère une réponse appropriée. Classe les emails en "réponse automatique" ou "validation humaine requise" selon l'analyse.</li>
</ol>`,
  },
  {
    order: 119,
    module: 8,
    title: "Projet : Dashboard analytique en temps réel",
    slug: "projet-dashboard-analytique-temps-reel",
    duration: "55 min",
    description: "Développe un dashboard analytique avec visualisations en temps réel et insights IA.",
    content: `<h2>Ce qu'on construit et pourquoi les dashboards se vendent comme des petits pains</h2>
<p>Tu vas construire un dashboard analytique en temps réel avec des insights générés par IA. Le dashboard agrège des données de plusieurs sources (API, bases de données, fichiers CSV), les visualise avec des graphiques interactifs, et utilise l'IA pour détecter les anomalies, identifier les tendances et générer des recommandations. C'est le projet qui clôture le module — et c'est aussi l'un des plus vendables car chaque business a besoin de visualiser ses données.</p>
<p>Les dirigeants prennent des décisions basées sur des données, mais la plupart n'ont pas de dashboard digne de ce nom. Ils jonglent entre des tableurs Excel, des rapports PDF mensuels et des outils SaaS éparpillés. Un dashboard centralisé qui affiche les KPIs essentiels en temps réel et qui explique ce que les chiffres signifient grâce à l'IA — ça, c'est une proposition de valeur qui justifie 500€/mois sans discussion.</p>

<h2>Architecture du dashboard</h2>
<ul>
<li><strong>Couche data</strong> : Connecteurs pour récupérer les données depuis différentes sources. API REST (ton CRM, ton Stripe, ton Google Analytics), bases de données (PostgreSQL direct via Prisma), fichiers CSV uploadés. Chaque connecteur récupère les données, les normalise dans un format standard (timestamp, métrique, valeur, dimensions) et les stocke dans ta base. Un cron job refresh les données à intervalle régulier (toutes les 5 minutes pour le temps réel, quotidien pour les rapports).</li>
<li><strong>Moteur de visualisation</strong> : Utilise Recharts ou D3.js pour les graphiques interactifs. Types de visualisations : KPI cards (chiffre avec tendance), line charts (évolution dans le temps), bar charts (comparaisons), pie charts (répartitions), heatmaps (matrices de corrélation), tables avec tri et filtres. Chaque widget est configurable : source de données, type de chart, période, filtres. Le layout est en grille responsive avec drag-and-drop pour réorganiser.</li>
<li><strong>Moteur d'insights IA</strong> : C'est ton différenciateur. L'IA analyse les données du dashboard et génère des insights en langage naturel. Au lieu de lire un graphique et d'interpréter, l'utilisateur lit : "Ton taux de conversion a chuté de 18% cette semaine. La cause probable : 73% des abandons de panier viennent de la page de paiement, ce qui suggère un problème technique ou UX. Action recommandée : vérifier le formulaire de paiement sur mobile."</li>
<li><strong>Alertes en temps réel</strong> : Définis des seuils d'alerte pour chaque KPI. Si le taux de conversion passe en dessous de 2%, si le nombre de tickets support dépasse 50/jour, si le chiffre d'affaires quotidien chute de plus de 30% vs la moyenne. L'alerte inclut le contexte et l'analyse IA de la situation. Notifications par email, Slack, ou push.</li>
</ul>

<h2>Fonctionnalités essentielles</h2>
<ul>
<li><strong>Dashboard builder</strong> : L'utilisateur construit son dashboard visuellement. Il ajoute des widgets, choisit la source de données, le type de graphique, les filtres et la position. Sauvegarde et partage de dashboards (URL publique ou protégée par mot de passe). Chaque utilisateur peut avoir plusieurs dashboards pour différents besoins (vue commerce, vue marketing, vue support).</li>
<li><strong>KPI cards intelligentes</strong> : Les cards affichent le chiffre actuel, la tendance (hausse/baisse avec pourcentage), la comparaison avec la période précédente, et un micro-graphique sparkline. L'IA attribue un statut à chaque KPI : vert (dans les clous), orange (à surveiller), rouge (action requise). Un coup d'œil suffit pour comprendre la santé du business.</li>
<li><strong>Drill-down interactif</strong> : Clique sur un graphique pour zoomer dans les données. Le CA mensuel est en baisse ? Clique pour voir le CA par semaine, puis par jour, puis par produit. Ce niveau de détail permet de trouver la cause racine d'un problème en quelques clics au lieu de fouiller dans des tableurs.</li>
<li><strong>Rapports IA automatiques</strong> : Chaque lundi matin, l'IA génère un rapport hebdomadaire qui résume la performance, identifie les tendances significatives et propose 3 actions prioritaires. Le rapport est envoyé par email et disponible dans le dashboard. Le dirigeant commence sa semaine avec une vision claire et des actions concrètes — c'est ce qui fait la différence entre un outil de dataviz et un vrai outil de décision.</li>
<li><strong>Comparaison de périodes</strong> : Compare n'importe quelle période avec une autre : cette semaine vs semaine dernière, ce mois vs même mois l'an dernier, ce trimestre vs trimestre précédent. Les comparaisons sont le meilleur moyen de contextualiser les chiffres — un CA de 50 000€ ne veut rien dire seul, mais +23% vs le mois dernier raconte une histoire.</li>
</ul>

<h2>Construction avec Claude Code</h2>
<p>Commence par les connecteurs de données. Crée un connecteur Stripe (revenus, transactions, clients), un connecteur Google Analytics (trafic, conversions) et un connecteur CSV (import manuel). Chaque connecteur implémente une interface standard : fetch(), normalize(), store(). Demande à Claude Code de scaffolder l'architecture et d'implémenter les connecteurs un par un.</p>
<p>Ensuite, construis le frontend avec les graphiques. Utilise Recharts pour le MVP — c'est la librairie la plus simple avec React. Crée des composants réutilisables : KPICard, LineChart, BarChart, PieChart, DataTable. Chaque composant prend les données en prop et gère le responsive. Assemble-les dans un layout en grille avec CSS Grid.</p>
<p>Pour les insights IA, crée un endpoint qui récupère les données du dashboard sur la période sélectionnée, les formate en résumé textuel (métriques clés, variations, anomalies), et envoie le tout à Claude avec un prompt d'analyse business. Le prompt demande : "Analyse ces KPIs, identifie les tendances significatives, explique les causes probables des variations importantes, et recommande 3 actions concrètes. Parle en langage business, pas en jargon technique."</p>
<p>Pour le temps réel, utilise SSE (Server-Sent Events) pour pousser les mises à jour vers le frontend. Quand une nouvelle donnée arrive (nouveau paiement Stripe, nouveau visiteur GA), le serveur envoie un événement et le frontend met à jour le graphique avec une animation fluide. Pas besoin de WebSockets pour le MVP — SSE est plus simple et suffit pour ce cas d'usage.</p>

<h2>Monétisation</h2>
<p>Le dashboard analytique est un produit à très haute valeur perçue. En SaaS : Basic à 39€/mois (3 connecteurs, 1 dashboard), Pro à 99€/mois (connecteurs illimités, insights IA, alertes), Enterprise à 249€/mois (multi-utilisateurs, API, rapports custom, white-label). En service : installation d'un dashboard custom pour une entreprise entre 3 000€ et 10 000€ selon la complexité, plus un abonnement de maintenance de 300-800€/mois. Les agences de marketing digital sont des clients idéaux — elles veulent des dashboards pour montrer les résultats à leurs propres clients. Vends-leur une solution white-label qu'elles revendent à leurs clients avec leur branding.</p>`,
    exercise: `<ol>
<li>Construis 3 composants de visualisation avec Recharts : un KPICard (chiffre + tendance + sparkline), un LineChart (évolution sur 30 jours avec comparaison période précédente) et un BarChart (top 5 des produits par CA). Alimente-les avec des données fictives réalistes et vérifie le responsive sur mobile et desktop.</li>
<li>Crée le connecteur de données CSV : un formulaire d'upload qui accepte un fichier CSV, parse les colonnes automatiquement (détection des types : date, nombre, texte), normalise les données et les stocke en base. Teste avec un export Stripe (transactions) et un export Google Analytics (trafic). Affiche les données importées dans un des graphiques de l'exercice 1.</li>
<li>Implémente les insights IA : prends les données d'un dashboard (CA, conversions, trafic, tickets support sur 30 jours), envoie-les à Claude avec un prompt d'analyse business, et affiche le résultat dans un composant "Insights de la semaine" avec les tendances détectées, les causes probables et les 3 actions recommandées. Teste avec un scénario de baisse de CA pour vérifier que l'IA identifie le problème.</li>
</ol>`,
  },
];
