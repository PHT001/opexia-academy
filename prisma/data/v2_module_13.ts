// ═══════════════════════════════════════════════════
// MODULE 13 — Construire un MVP complet
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_13_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 13,
    title: "Définir ton MVP : Problem-Solution framework",
    slug: "v2-definir-mvp-problem-solution-framework",
    duration: "20 min",
    description: "Avant de coder, apprends à valider ton idée. Le Problem-Solution framework te permet de définir un MVP minimal mais utile, qui résout un vrai problème et que tu peux construire rapidement.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Qu'est-ce qu'un MVP et pourquoi c'est crucial" },
      { id: "1-2", type: "text", html: "<p>Un MVP (Minimum Viable Product) est la version la plus simple de ton produit qui apporte de la valeur à un utilisateur. Ce n'est pas un prototype moche — c'est un <strong>produit fonctionnel, minimal et focalisé</strong> sur un seul problème bien défini.</p><p>L'erreur classique des développeurs : passer 6 mois à construire un produit avec 50 fonctionnalités, pour découvrir que personne n'en veut. Le MVP inverse la logique : tu construis le strict minimum en 1-2 semaines, tu le mets devant des utilisateurs, et tu itères en fonction de leurs retours.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>La règle du MVP :</strong> Si tu n'as pas honte de la première version de ton produit, c'est que tu l'as lancé trop tard. L'objectif n'est pas la perfection — c'est la validation." },

      { id: "1-20", type: "heading", level: 3, text: "MVP vs Prototype vs POC : ne confonds pas" },
      { id: "1-21", type: "text", html: "<p>Beaucoup de gens confondent ces trois concepts, et cette confusion leur coûte des semaines de travail inutile :</p><ul><li><strong>POC (Proof of Concept) :</strong> Un test technique pour vérifier que c'est faisable. Exemple : 'Est-ce que Claude peut extraire les données d'une facture PDF ?' Tu testes en 2h dans un script, pas besoin d'interface.</li><li><strong>Prototype :</strong> Une maquette interactive pour tester l'UX. Ça peut être un Figma cliquable ou un front sans vrai backend. L'objectif : voir si l'utilisateur comprend le flow.</li><li><strong>MVP :</strong> Un produit réel, fonctionnel, que quelqu'un peut utiliser pour résoudre un vrai problème. Il a un backend, il traite des vraies données, il est déployé en ligne.</li></ul><p>Le piège : beaucoup de développeurs restent bloqués au stade POC pendant des mois parce qu'ils continuent à 'tester des trucs' sans jamais livrer quelque chose d'utilisable.</p>" },
      { id: "1-22", type: "comparison", headers: ["", "POC", "Prototype", "MVP"], rows: [
        { cells: ["Objectif", "Faisabilité technique", "Tester l'UX", "Valider le marché"] },
        { cells: ["Durée", "2h - 1 jour", "1-3 jours", "1-2 semaines"] },
        { cells: ["Utilisateurs", "Aucun (juste toi)", "5-10 testeurs", "10-50 vrais utilisateurs"] },
        { cells: ["Backend", "Script ou notebook", "Optionnel / mock", "Fonctionnel"] },
        { cells: ["Déployé", "Non", "Optionnel", "Oui, obligatoire"] },
      ]},

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le Problem-Solution Framework" },
      { id: "1-6", type: "steps", steps: [
        { title: "Étape 1 : Identifier LE problème (pas 10)", description: "Un bon MVP résout UN seul problème, clairement défini. Pas 'une plateforme tout-en-un' mais 'les restaurants perdent 2h/jour à gérer les réservations par téléphone'. Plus le problème est précis, plus ta solution sera percutante." },
        { title: "Étape 2 : Valider que le problème existe", description: "Parle à 10 personnes qui ont potentiellement ce problème. Pose la question : 'Comment gérez-vous X aujourd'hui ?' Si 7/10 disent que c'est un vrai problème et décrivent leur solution actuelle (bricolage, Excel, processus manuel), tu tiens quelque chose." },
        { title: "Étape 3 : Définir la solution minimale", description: "Quelle est la fonctionnalité UNIQUE qui résout 80% du problème ? Pas un dashboard, pas des analytics, pas 5 intégrations — UNE fonctionnalité core. Pour les réservations : un agent vocal qui prend les RDV et les met dans un calendrier. Point." },
        { title: "Étape 4 : Le test du 'Et si...'", description: "Demande-toi : 'Et si je n'avais qu'une seule page, une seule action possible pour l'utilisateur, que serait-elle ?' Cette contrainte force à identifier l'essence du produit et à éliminer le superflu." },
        { title: "Étape 5 : Définir les métriques de succès", description: "Comment sauras-tu que ton MVP fonctionne ? Définis 2-3 métriques : nombre d'utilisateurs actifs, taux de rétention à 7 jours, NPS (Net Promoter Score). Si les métriques sont bonnes, tu itères. Sinon, tu pivotes." },
      ]},

      { id: "1-23", type: "heading", level: 3, text: "Comment mener un bon interview de validation" },
      { id: "1-24", type: "text", html: "<p>L'interview de validation, c'est l'étape que 90% des développeurs sautent. Et c'est exactement pour ça que 90% des MVP échouent. Voici comment faire un interview efficace en 15 minutes :</p>" },
      { id: "1-25", type: "steps", steps: [
        { title: "Prépare 5 questions ouvertes", description: "Jamais de questions fermées (oui/non). Pose : 'Raconte-moi comment tu gères X aujourd'hui ?', 'Qu'est-ce qui te frustre le plus dans ce processus ?', 'Combien de temps tu passes là-dessus par semaine ?', 'As-tu déjà essayé une solution ? Laquelle ?', 'Si tu avais une baguette magique, que changerais-tu ?'" },
        { title: "Ne parle PAS de ta solution", description: "L'erreur fatale : décrire ton idée et demander 'Tu trouves ça bien ?' Les gens sont polis, ils diront oui. Tu veux comprendre LEUR problème, pas vendre TA solution." },
        { title: "Note les mots exacts", description: "Les mots que tes interviewés utilisent pour décrire leur problème sont de l'or. Ce sont les mots que tu utiliseras dans ton marketing, ta landing page, tes emails de prospection." },
        { title: "Cherche les signaux d'achat", description: "Le meilleur signal : 'Combien ça coûterait un truc comme ça ?' ou 'Tu me préviens quand c'est prêt ?' Si personne ne demande ça après 10 interviews, ton problème n'est pas assez douloureux." },
      ]},
      { id: "1-26", type: "callout", variant: "info", html: "<strong>Où trouver tes 10 interviewés :</strong> LinkedIn (cherche par métier), groupes Facebook métier, forums spécialisés, ton réseau personnel. Envoie un message court : 'Je fais une étude sur [sujet]. Est-ce que tu aurais 15 min pour me partager ton expérience ? Pas de vente, juste des questions.' Taux de réponse moyen : 20-30%." },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Exemples de MVP bien définis" },
      { id: "1-9", type: "comparison", headers: ["Idée initiale (trop large)", "MVP (focalisé)", "Temps de build"], rows: [
        { cells: ["Plateforme de gestion complète pour restaurants", "Agent vocal qui prend les réservations par téléphone", "1 semaine"] },
        { cells: ["SaaS de comptabilité IA tout-en-un", "Bot qui extrait les données de factures PDF et les met dans un Google Sheet", "3 jours"] },
        { cells: ["Outil de prospection complet avec CRM", "Script qui scrape Google Maps, enrichit les emails et envoie une séquence email", "5 jours"] },
        { cells: ["Plateforme de formation en ligne", "Landing page + 5 leçons en Notion + paiement Stripe", "2 jours"] },
      ]},

      { id: "1-27", type: "heading", level: 3, text: "Étude de cas : d'un MVP à 10K euros/mois" },
      { id: "1-28", type: "text", html: "<p>Imagine ce scénario réel : un freelance IA identifie que les agences immobilières perdent 3h/jour à répondre aux mêmes questions par email (horaires de visite, prix, surface, disponibilité).</p><p><strong>Son MVP :</strong> Un chatbot connecté à un Google Sheet contenant les annonces. Le chatbot répond aux questions des visiteurs sur le site de l'agence. Pas de dashboard, pas d'analytics, pas d'intégration CRM. Juste le chatbot + le Google Sheet.</p><p><strong>Temps de build :</strong> 4 jours.</p><p><strong>Résultat :</strong> 3 agences testent gratuitement pendant 2 semaines. Les 3 veulent continuer et payer. Prix : 200 euros/mois par agence. En 3 mois, il a 15 clients = 3 000 euros/mois récurrents. En 6 mois, il ajoute les fonctionnalités V2 (dashboard, analytics, multi-sites) et monte à 500 euros/mois par client.</p>" },
      { id: "1-29", type: "callout", variant: "tip", html: "<strong>La leçon :</strong> Ce freelance n'a pas attendu d'avoir le produit parfait. Il a vendu une solution imparfaite à un problème réel. Les fonctionnalités sont venues APRÈS la validation, pas avant." },

      { id: "1-10", type: "callout", variant: "warning", html: "<strong>Piège à éviter : le feature creep.</strong> À chaque fois que tu veux ajouter une fonctionnalité, demande-toi : 'Est-ce que mon MVP fonctionne sans ça ?' Si oui, mets-la sur une liste 'V2' et avance. Chaque fonctionnalité ajoutée retarde le lancement." },

      { id: "1-30", type: "heading", level: 3, text: "La liste V2 : ton meilleur allié contre le feature creep" },
      { id: "1-31", type: "text", html: "<p>Crée un document 'V2 Features' dès le premier jour. Chaque fois que tu penses 'ce serait cool d'ajouter X', note-le dans cette liste au lieu de le coder. Ça te donne deux avantages :</p><ul><li><strong>Tu ne perds pas l'idée :</strong> Elle est notée, tu pourras y revenir après le launch</li><li><strong>Tu gardes le focus :</strong> Tu sais que l'idée est capturée, donc tu peux te concentrer sur le MVP sans culpabilité</li></ul><p>Après le launch, cette liste V2 devient ta roadmap. Et souvent, tu réaliseras que 50% des idées que tu voulais coder sont en fait inutiles — tes utilisateurs ne les ont jamais demandées.</p>" },

      { id: "1-11", type: "text", html: "<p>Le Problem-Solution Framework n'est pas un exercice théorique — c'est la base de tout ce que tu vas construire dans les leçons suivantes. Un MVP bien défini se construit en jours, pas en mois. Et un MVP qui résout un vrai problème se vend dès le premier jour.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Un MVP résout UN seul problème avec UNE fonctionnalité core" },
        { id: "c2", text: "Valider le problème avec 10 personnes avant de coder" },
        { id: "c3", text: "Le test du 'Et si...' : une page, une action" },
        { id: "c4", text: "Définir 2-3 métriques de succès mesurables" },
        { id: "c5", text: "Résister au feature creep — liste V2 pour les idées" },
        { id: "c6", text: "Interviewer sans vendre — comprendre le problème, pas pitcher ta solution" },
        { id: "c7", text: "Les mots de tes interviewés = le langage de ton marketing" },
      ]},
    ]),
    exercise: "<h3>Exercice : Définis ton MVP</h3><p>Choisis une idée de produit IA et applique le Problem-Solution Framework :</p><ol><li>Identifie LE problème en une phrase (pas un paragraphe)</li><li>Liste 10 personnes que tu pourrais interviewer — contacte-en au moins 3 et pose-leur la question 'Comment gérez-vous X aujourd'hui ?'</li><li>Définis la solution minimale : UNE fonctionnalité, UNE page</li><li>Applique le test du 'Et si...' : que garderais-tu si tu n'avais qu'un seul bouton ?</li><li>Définis 3 métriques de succès</li></ol><p><strong>Livrable :</strong> Un document d'une page avec : problème, validation, solution minimale, métriques.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'un MVP ?", options: JSON.stringify(["Un prototype non fonctionnel", "La version la plus simple d'un produit qui apporte de la valeur", "Un produit avec toutes les fonctionnalités", "Un business plan détaillé"]), correctAnswer: "La version la plus simple d'un produit qui apporte de la valeur", explanation: "Un MVP est la version la plus simple mais fonctionnelle d'un produit, focalisée sur un seul problème. Ce n'est ni un prototype moche ni un produit complet." },
      { type: "true_false", question: "Un MVP doit résoudre plusieurs problèmes pour être viable.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un MVP doit résoudre UN seul problème de manière excellente. Résoudre plusieurs problèmes moyennement est moins efficace que résoudre un problème parfaitement." },
      { type: "mcq", question: "Combien de personnes faut-il interviewer pour valider un problème ?", options: JSON.stringify(["1-2", "10", "50", "100"]), correctAnswer: "10", explanation: "Interviewer 10 personnes qui ont potentiellement le problème donne un signal clair. Si 7/10 confirment le problème, c'est un bon indicateur de validation." },
      { type: "mcq", question: "Qu'est-ce que le feature creep ?", options: JSON.stringify(["Un bug dans le code", "L'ajout continu de fonctionnalités qui retarde le lancement", "Une technique de marketing", "Un framework JavaScript"]), correctAnswer: "L'ajout continu de fonctionnalités qui retarde le lancement", explanation: "Le feature creep est la tendance à ajouter toujours plus de fonctionnalités avant le lancement. Chaque ajout retarde la mise sur le marché et la validation par les utilisateurs." },
      { type: "true_false", question: "Si tu n'as pas honte de la première version de ton produit, tu l'as lancé trop tard.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Cette citation de Reid Hoffman (fondateur de LinkedIn) rappelle que l'objectif du MVP n'est pas la perfection mais la validation rapide. Mieux vaut lancer imparfait et itérer que chercher la perfection et ne jamais lancer." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 13,
    title: "Architecture technique : les bons choix",
    slug: "v2-architecture-technique-bons-choix-mvp",
    duration: "25 min",
    description: "Choisis la bonne stack technique pour ton MVP. Frontend, backend, base de données, IA, hébergement : les choix pragmatiques qui te permettent de builder vite sans sacrifier la qualité.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "La philosophie : vitesse avant perfection" },
      { id: "2-2", type: "text", html: "<p>Pour un MVP, la stack technique doit optimiser la <strong>vitesse de développement</strong>, pas la scalabilité à 1 million d'utilisateurs. Tu n'auras pas 1 million d'utilisateurs le premier mois — tu en auras 10. Et ces 10 utilisateurs se fichent de ta stack, ils veulent que ça marche.</p><p>Les critères de choix pour un MVP : rapidité de développement, coût minimal, déploiement simple, documentation abondante, communauté active. La scalabilité, la performance extrême et l'architecture distribuée viendront plus tard, si le MVP valide le concept.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Règle pragmatique :</strong> Utilise la technologie que tu maîtrises le mieux. Un MVP en PHP par quelqu'un qui maîtrise PHP sera meilleur et plus rapide qu'un MVP en Next.js par quelqu'un qui apprend Next.js en même temps." },

      { id: "2-20", type: "heading", level: 3, text: "Le coût réel d'un mauvais choix technique" },
      { id: "2-21", type: "text", html: "<p>Choisir la mauvaise stack pour ton MVP ne te coûte pas juste du temps de développement. Ça te coûte de l'argent, de la motivation et potentiellement ton projet entier. Voici des scénarios réels :</p><ul><li><strong>Choisir une stack 'hype' que tu ne maîtrises pas :</strong> Tu passes 2 semaines à apprendre au lieu de builder. Ton MVP prend 6 semaines au lieu de 2. Le marché a bougé, la motivation est morte.</li><li><strong>Sur-architecturer dès le départ :</strong> Microservices, Docker, Kubernetes pour 10 utilisateurs ? Tu passes plus de temps sur l'infra que sur le produit. Et quand tu veux changer une fonctionnalité, il faut modifier 3 services.</li><li><strong>Ignorer les coûts d'hébergement :</strong> Un serveur AWS mal configuré peut coûter 200 euros/mois pour 50 utilisateurs. Vercel gratuit fait la même chose pour 0 euros.</li></ul>" },
      { id: "2-22", type: "callout", variant: "warning", html: "<strong>Red flag :</strong> Si tu passes plus de 2 jours à configurer ton environnement de dev avant d'écrire la première ligne de code produit, ta stack est trop complexe pour un MVP. Simplifie." },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "La stack recommandée pour un MVP IA" },
      { id: "2-6", type: "comparison", headers: ["Couche", "Outil recommandé", "Alternative", "Pourquoi"], rows: [
        { cells: ["Frontend", "Next.js (React)", "Nuxt.js (Vue), SvelteKit", "Écosystème riche, SSR intégré, déploiement Vercel en 1 clic"] },
        { cells: ["UI/Design", "Tailwind CSS + shadcn/ui", "Chakra UI, Material UI", "Composants prêts à l'emploi, design professionnel sans designer"] },
        { cells: ["Backend/API", "Next.js API Routes", "Express.js, FastAPI (Python)", "Même repo que le frontend, pas de serveur séparé à gérer"] },
        { cells: ["Base de données", "Supabase (PostgreSQL)", "PlanetScale, Neon", "Plan gratuit généreux, API REST auto-générée, auth intégrée"] },
        { cells: ["IA", "API Anthropic (Claude)", "OpenAI (GPT-4o)", "Le plus fiable pour le code, Claude Code integre, le plus precis sur les instructions"] },
        { cells: ["Auth", "Supabase Auth ou NextAuth", "Clerk, Auth0", "Gratuit, intégration simple, OAuth Google/GitHub"] },
        { cells: ["Paiement", "Stripe", "LemonSqueezy", "Standard mondial, documentation exemplaire, mode test facile"] },
        { cells: ["Hébergement", "Vercel", "Railway, Render", "Déploiement automatique depuis GitHub, plan gratuit, CDN global"] },
      ]},

      { id: "2-23", type: "heading", level: 3, text: "Le budget réaliste d'un MVP" },
      { id: "2-24", type: "text", html: "<p>Un des plus grands mythes du développement : il faut du budget pour lancer un produit. En réalité, avec les bons outils, tu peux lancer un MVP IA pour quasiment rien :</p>" },
      { id: "2-25", type: "comparison", headers: ["Service", "Plan gratuit", "Plan payant (si besoin)", "Quand upgrader ?"], rows: [
        { cells: ["Vercel", "100 GB bandwidth, fonctions serverless", "20$/mois (Pro)", "Plus de 100 utilisateurs actifs ou besoin de team features"] },
        { cells: ["Supabase", "500 MB base, 50K requêtes auth", "25$/mois (Pro)", "Plus de 500 MB de données ou besoin de backups quotidiens"] },
        { cells: ["API Claude/OpenAI", "Pas de plan gratuit", "~5-20$/mois selon usage", "Dès le début, mais les coûts sont faibles en phase MVP"] },
        { cells: ["GitHub", "Illimité repos publics/privés", "4$/mois (Pro)", "Optionnel, le plan gratuit suffit largement"] },
        { cells: ["Stripe", "0 fixe, 1.4% + 0.25 euros par transaction", "Identique", "Tu ne paies que quand tu gagnes de l'argent"] },
      ]},
      { id: "2-26", type: "callout", variant: "info", html: "<strong>Budget total pour lancer :</strong> Entre 0 et 25 euros/mois. C'est tout. Pas besoin de lever des fonds pour valider une idée. L'investissement principal, c'est ton temps — et c'est exactement pour ça qu'il faut aller vite." },

      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Architecture type d'un MVP IA" },
      { id: "2-9", type: "text", html: "<p>L'architecture d'un MVP doit être <strong>la plus simple possible</strong>. Pas de microservices, pas de message queues, pas de Kubernetes. Un monolithe bien structuré suffit largement pour les premiers 1 000 utilisateurs.</p><p>Voici l'architecture recommandée :</p><ul><li><strong>Frontend :</strong> Next.js déployé sur Vercel. Pages SSR pour le SEO, composants React pour l'interactivité.</li><li><strong>API :</strong> API Routes Next.js dans le même repo. Chaque route = une fonction serverless.</li><li><strong>Base de données :</strong> Supabase (PostgreSQL hébergé). Accès direct depuis les API Routes via le client Supabase.</li><li><strong>IA :</strong> Appels à l'API OpenAI depuis les API Routes. Le frontend n'appelle JAMAIS l'API OpenAI directement (pour protéger ta clé API).</li><li><strong>Fichiers :</strong> Supabase Storage ou Cloudflare R2 pour les uploads (PDF, images).</li></ul>" },
      { id: "2-10", type: "callout", variant: "warning", html: "<strong>Erreur fatale :</strong> Ne mets JAMAIS ta clé API OpenAI dans le code frontend. Elle serait visible par tout le monde. Les appels IA passent toujours par ton backend (API Routes) qui détient la clé en variable d'environnement." },

      { id: "2-27", type: "heading", level: 3, text: "La structure de fichiers qui scale" },
      { id: "2-28", type: "text", html: "<p>Même pour un MVP, une bonne structure de fichiers te fait gagner du temps dès le premier jour. Voici la structure recommandée pour un projet Next.js App Router :</p><pre><code>mon-mvp/\n  app/\n    (auth)/          # Routes protégées\n      dashboard/\n      settings/\n    (marketing)/     # Routes publiques\n      page.tsx       # Landing page\n      pricing/\n    api/\n      chat/route.ts  # API IA\n      webhook/route.ts\n    layout.tsx\n  components/\n    ui/              # Composants shadcn/ui\n    forms/           # Formulaires custom\n    layout/          # Header, Footer, Sidebar\n  lib/\n    supabase.ts      # Client Supabase\n    ai.ts            # Fonctions IA\n    utils.ts         # Utilitaires\n  types/\n    index.ts         # Types TypeScript globaux</code></pre><p>Cette structure sépare clairement les responsabilités : les routes dans <code>app/</code>, les composants réutilisables dans <code>components/</code>, la logique métier dans <code>lib/</code>. Quand ton projet grandit, tu sais exactement où chercher.</p>" },

      { id: "2-11", type: "steps", steps: [
        { title: "Structure du projet", description: "Un seul repo GitHub. Dossier /app pour les pages Next.js, /app/api pour les routes API, /components pour les composants React, /lib pour les utilitaires (client Supabase, fonctions OpenAI). Tout est centralisé." },
        { title: "Variables d'environnement", description: "Les secrets (clés API, URLs de base de données) sont dans un fichier .env.local en développement et dans les settings Vercel en production. Ne commite JAMAIS le .env dans Git." },
        { title: "Workflow de déploiement", description: "Push sur GitHub → Vercel détecte le push → build automatique → déploiement en production. Zéro configuration serveur. Un push = une mise à jour en production en 2 minutes." },
      ]},

      { id: "2-29", type: "heading", level: 3, text: "Les pièges techniques à éviter absolument" },
      { id: "2-30", type: "text", html: "<p>En 10 ans de freelance et de consulting, voici les erreurs techniques les plus coûteuses que j'ai vues sur des MVP :</p>" },
      { id: "2-31", type: "comparison", headers: ["Piège", "Conséquence", "Solution"], rows: [
        { cells: ["Pas de TypeScript", "Bugs en prod que tu aurais détectés à la compilation", "Toujours TypeScript, même pour un MVP. Le temps gagné en debug compense le setup."] },
        { cells: ["Auth custom", "Failles de sécurité, bugs de session, 3 jours de dev", "Utilise Supabase Auth ou NextAuth. L'auth est un problème résolu."] },
        { cells: ["Base de données locale (SQLite)", "Impossible de déployer facilement, pas de backup", "Supabase dès le jour 1. Gratuit et hébergé."] },
        { cells: ["Pas de validation de données", "Crashes en prod, données corrompues", "Zod sur chaque API Route. 5 min de setup, des heures de debug évitées."] },
        { cells: ["Tout coder from scratch", "3x plus de temps, 3x plus de bugs", "shadcn/ui pour le front, librairies éprouvées pour chaque besoin."] },
      ]},

      { id: "2-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Vitesse de dev > scalabilité pour un MVP" },
        { id: "c2", text: "Next.js + Supabase + Vercel = stack MVP optimale" },
        { id: "c3", text: "Monolithe > microservices pour les premiers 1 000 utilisateurs" },
        { id: "c4", text: "Clé API OpenAI uniquement côté serveur, jamais côté client" },
        { id: "c5", text: "Un push GitHub = déploiement automatique Vercel" },
        { id: "c6", text: "Budget MVP réaliste : 0-25 euros/mois" },
        { id: "c7", text: "TypeScript + Zod + shadcn/ui = gagner du temps, pas en perdre" },
      ]},
    ]),
    exercise: "<h3>Exercice : Configure ta stack MVP</h3><p>Prépare l'environnement de développement pour ton MVP :</p><ol><li>Crée un nouveau projet Next.js : <code>npx create-next-app@latest mon-mvp</code></li><li>Installe les dépendances : Tailwind CSS, shadcn/ui, openai (SDK), @supabase/supabase-js</li><li>Crée un projet Supabase (gratuit) et configure les variables d'environnement</li><li>Crée une API Route simple qui appelle GPT-4o et retourne la réponse</li><li>Déploie sur Vercel en connectant ton repo GitHub</li></ol><p>À la fin de cet exercice, tu as un projet vide mais déployé, prêt à recevoir les fonctionnalités.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le critère prioritaire pour choisir la stack d'un MVP ?", options: JSON.stringify(["Scalabilité à 1 million d'utilisateurs", "Vitesse de développement", "Utiliser les dernières technologies", "Performance maximale"]), correctAnswer: "Vitesse de développement", explanation: "Pour un MVP, la vitesse de développement est prioritaire. Tu as besoin de valider ton concept rapidement. La scalabilité et la performance viendront après la validation." },
      { type: "true_false", question: "Il est acceptable de mettre la clé API OpenAI dans le code frontend pour un MVP.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Une clé API dans le frontend est visible par tout le monde et peut être utilisée à tes frais. Les appels IA passent toujours par le backend qui détient la clé en variable d'environnement." },
      { type: "mcq", question: "Quelle architecture est recommandée pour un MVP ?", options: JSON.stringify(["Microservices avec Kubernetes", "Architecture distribuée avec message queue", "Monolithe bien structuré", "Architecture hexagonale complète"]), correctAnswer: "Monolithe bien structuré", explanation: "Un monolithe bien structuré est largement suffisant pour un MVP et les premiers milliers d'utilisateurs. Les architectures complexes ralentissent le développement sans apporter de valeur à ce stade." },
      { type: "mcq", question: "Où sont stockées les variables d'environnement en production sur Vercel ?", options: JSON.stringify(["Dans le fichier .env committé sur GitHub", "Dans les settings du projet Vercel", "Dans le code source directement", "Dans un fichier README"]), correctAnswer: "Dans les settings du projet Vercel", explanation: "Les secrets sont dans .env.local en développement (non committé) et dans les Environment Variables des settings Vercel en production. Le fichier .env ne doit JAMAIS être commité sur Git." },
      { type: "true_false", question: "Supabase offre un plan gratuit avec une base de données PostgreSQL.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Supabase propose un plan gratuit généreux incluant une base PostgreSQL, l'authentification, le storage et les API REST auto-générées. C'est idéal pour démarrer un MVP sans frais." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 13,
    title: "Build : frontend + backend + IA en 48h",
    slug: "v2-build-frontend-backend-ia-48h",
    duration: "35 min",
    description: "Le sprint de construction. En 48h chrono, construis les 3 couches de ton MVP : une interface propre, un backend fonctionnel et l'intégration IA. Chaque heure compte — voici le planning minute par minute.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le planning des 48 heures" },
      { id: "3-2", type: "text", html: "<p>48 heures, c'est serré mais c'est faisable si tu as un plan. L'erreur est de commencer à coder sans roadmap et de perdre 6 heures sur un détail CSS. Le secret : <strong>travailler par couches</strong>, du backend vers le frontend, en validant chaque couche avant de passer à la suivante.</p>" },

      { id: "3-20", type: "heading", level: 3, text: "Prépare-toi AVANT les 48h" },
      { id: "3-21", type: "text", html: "<p>Le sprint de 48h ne commence pas quand tu ouvres VS Code. Il commence la veille, avec la préparation. Les meilleurs sprints sont ceux où tout est prêt avant de coder la première ligne :</p><ul><li><strong>Ta stack est installée :</strong> Next.js initialisé, Supabase créé, Vercel connecté, shadcn/ui installé</li><li><strong>Ton modèle de données est dessiné :</strong> Un schéma papier ou Excalidraw avec les tables, leurs champs et les relations</li><li><strong>Tes maquettes sont prêtes :</strong> Même un croquis papier des 3 écrans principaux suffit. Tu ne veux pas réfléchir à l'UX pendant que tu codes.</li><li><strong>Tes prompts IA sont testés :</strong> Si ton MVP utilise de l'IA, teste tes prompts dans le playground avant de les intégrer</li></ul>" },
      { id: "3-22", type: "callout", variant: "info", html: "<strong>La checklist pré-sprint :</strong> Repo GitHub créé, projet Vercel connecté, projet Supabase créé, clés API récupérées, .env.local configuré, shadcn/ui initialisé, schéma de données validé, maquettes croquis faites. Si tout ça est prêt, tes 48h de code pur seront ultra-productives." },

      { id: "3-3", type: "steps", steps: [
        { title: "Heures 0-4 : Base de données + modèle de données", description: "Définis les tables Supabase dont tu as besoin. Pour un MVP, 3-5 tables suffisent. Exemple pour un outil de traitement de factures : users, documents, extracted_data, processing_logs. Crée les tables avec les bons types et les relations. Teste avec des données de test." },
        { title: "Heures 4-10 : API Routes (backend)", description: "Crée les API Routes essentielles. Typiquement : une route pour l'upload de fichier, une route pour le traitement IA, une route pour récupérer les résultats. Chaque route doit être testable indépendamment avec curl ou Postman. Ne passe pas au frontend tant que les API ne fonctionnent pas." },
        { title: "Heures 10-16 : Intégration IA", description: "Connecte l'API OpenAI à tes routes. Rédige et itère sur les prompts. Teste avec des données réelles (pas des mocks). C'est la partie la plus critique — si l'IA ne donne pas de bons résultats, le MVP n'a pas de valeur. Passe le temps nécessaire ici." },
        { title: "Heures 16-28 : Frontend (interface)", description: "Construis l'interface avec shadcn/ui. Page d'accueil (landing), page principale (le produit), page de résultats. Utilise des composants prêts à l'emploi : formulaires, tableaux, boutons, modales. Ne fais PAS de design custom — utilise les composants tels quels." },
        { title: "Heures 28-36 : Auth + paiement (si nécessaire)", description: "Ajoute l'authentification Supabase (login Google en 30 min). Si tu as besoin de paiement, ajoute Stripe Checkout (un bouton de paiement, pas un système d'abonnement complet). Garde la simplicité maximale." },
        { title: "Heures 36-44 : Tests + corrections", description: "Teste tout le flow de bout en bout. Invite 2-3 personnes à tester et note les bugs. Corrige les bugs critiques uniquement — les bugs mineurs attendront la V2. Priorise impitoyablement." },
        { title: "Heures 44-48 : Polish + déploiement", description: "Ajoute les méta-tags SEO, un favicon, un titre de page correct. Vérifie que le déploiement Vercel fonctionne. Fais un dernier test en production. C'est prêt." },
      ]},
      { id: "3-4", type: "callout", variant: "warning", html: "<strong>Les pièges du build en 48h :</strong> Ne passe pas 4h sur un composant UI. Ne refactorise pas le code en cours de route. Ne cherche pas à gérer tous les edge cases. Si ça marche pour le cas nominal, c'est suffisant pour un MVP." },

      { id: "3-23", type: "heading", level: 3, text: "Les raccourcis qui te font gagner des heures" },
      { id: "3-24", type: "steps", steps: [
        { title: "Utilise des templates de landing page", description: "Ne crée pas ta landing page from scratch. Utilise un template shadcn/ui ou un composant Hero existant. Personnalise le texte et les couleurs, c'est tout. Tu peux trouver des templates gratuits sur ui.shadcn.com, tailwindui.com ou magicui." },
        { title: "Copie le flow des apps qui marchent", description: "Tu construis un outil d'extraction de factures ? Va voir comment Dext ou Qonto font leur upload. Copie le flow UX (pas le code). Les meilleurs UX sont déjà inventés, tu n'as pas besoin de réinventer la roue." },
        { title: "Utilise les composants shadcn/ui tels quels", description: "Les boutons, formulaires, tableaux, modales de shadcn/ui sont beaux par défaut. Ne perds pas de temps à les personnaliser. Change juste les couleurs primaires si tu veux et c'est suffisant." },
        { title: "Streak d'API : ne change pas de contexte", description: "Quand tu codes les API Routes, fais-les TOUTES d'affilée. Ne bascule pas entre front et back. Le context switching est l'ennemi de la productivité — chaque switch te coûte 20 minutes de remise en contexte." },
      ]},

      { id: "3-5", type: "separator", style: "dots" },

      { id: "3-6", type: "heading", level: 2, text: "Accélérer avec l'IA (Claude Code, Cursor)" },
      { id: "3-7", type: "text", html: "<p>L'IA est ton meilleur allié pour builder vite. <strong>Claude Code</strong> et <strong>Cursor</strong> peuvent générer des composants React, des API Routes, des requêtes SQL et même des prompts OpenAI en quelques secondes. Le développeur qui n'utilise pas l'IA pour coder en 2025 est comme le développeur qui n'utilisait pas Stack Overflow en 2015.</p><p>Voici comment utiliser l'IA efficacement pendant le build :</p>" },
      { id: "3-8", type: "comparison", headers: ["Tâche", "Temps sans IA", "Temps avec IA", "Comment"], rows: [
        { cells: ["Créer un composant formulaire", "30-45 min", "5 min", "Décris le formulaire à Claude, il génère le code complet avec validation"] },
        { cells: ["Écrire une API Route", "20-30 min", "3 min", "Décris l'endpoint, les inputs/outputs, Claude génère la route avec gestion d'erreurs"] },
        { cells: ["Configurer Supabase + types", "45 min", "10 min", "Donne le schéma de données à Claude, il génère les tables SQL et les types TypeScript"] },
        { cells: ["Débugger une erreur", "15-60 min", "2-5 min", "Colle l'erreur dans Claude, il identifie la cause et propose le fix"] },
      ]},
      { id: "3-9", type: "callout", variant: "tip", html: "<strong>Conseil clé :</strong> Ne demande pas à l'IA de coder tout le projet d'un coup. Découpe en petits morceaux : un composant, une route, une fonction. Vérifie chaque morceau avant de passer au suivant. L'IA est un accélérateur, pas un pilote automatique." },

      { id: "3-25", type: "heading", level: 3, text: "Les prompts qui marchent pour coder avec l'IA" },
      { id: "3-26", type: "text", html: "<p>La qualité du code généré par l'IA dépend à 90% de la qualité de ton prompt. Voici les templates qui donnent les meilleurs résultats :</p><ul><li><strong>Pour un composant React :</strong> 'Crée un composant [Nom] en TypeScript avec shadcn/ui. Il doit [description du comportement]. Props : [liste des props avec types]. Utilise Tailwind CSS pour le style.'</li><li><strong>Pour une API Route :</strong> 'Crée une API Route Next.js (App Router) en TypeScript pour [action]. Input : [schéma]. Output : [schéma]. Gère les erreurs avec try/catch et retourne les codes HTTP appropriés. Valide l'input avec Zod.'</li><li><strong>Pour du SQL Supabase :</strong> 'Crée les tables SQL pour [description]. Inclus les types PostgreSQL appropriés, les contraintes, les index et les policies RLS pour que chaque utilisateur ne voie que ses données.'</li></ul>" },
      { id: "3-27", type: "callout", variant: "warning", html: "<strong>Piège :</strong> Ne fais PAS confiance aveuglément au code généré par l'IA. Relis toujours, teste toujours. L'IA peut générer du code qui compile mais qui a une faille de sécurité ou un bug logique. Toi, tu es le développeur — l'IA est ton assistant, pas ton remplaçant." },

      { id: "3-10", type: "separator", style: "line" },
      { id: "3-11", type: "text", html: "<p>Avec ce planning et l'assistance IA, construire un MVP fonctionnel en 48h est tout à fait réaliste. L'objectif n'est pas d'avoir un produit parfait — c'est d'avoir un produit que tu peux montrer à des utilisateurs et qui fonctionne pour le cas d'usage principal.</p>" },

      { id: "3-28", type: "heading", level: 3, text: "Que faire si tu dépasses les 48h ?" },
      { id: "3-29", type: "text", html: "<p>Si tu arrives à 48h et que tout n'est pas fini, ne panique pas. Voici la règle :</p><ul><li><strong>Le backend fonctionne mais le frontend est moche ?</strong> Ship quand même. Un produit moche qui marche vaut mieux qu'un produit beau qui n'existe pas.</li><li><strong>Une fonctionnalité sur 3 n'est pas finie ?</strong> Coupe-la et lance avec les 2 autres. Tu l'ajouteras en V2.</li><li><strong>L'IA ne donne pas les résultats attendus ?</strong> C'est le seul cas où tu devrais prendre du temps supplémentaire. Sans une IA qui fonctionne, le MVP n'a pas de valeur.</li></ul><p>Le vrai deadline n'est pas 48h — c'est 'le plus vite possible sans compromettre la fonctionnalité core'. Si ça prend 60h au lieu de 48h, c'est ok. Si ça prend 3 mois, c'est un problème.</p>" },

      { id: "3-12", type: "checklist", title: "Checklist du build", items: [
        { id: "c1", text: "Base de données configurée avec 3-5 tables" },
        { id: "c2", text: "API Routes fonctionnelles et testées" },
        { id: "c3", text: "Intégration IA avec prompts itérés" },
        { id: "c4", text: "Interface fonctionnelle (pas parfaite, fonctionnelle)" },
        { id: "c5", text: "Auth configurée (login Google minimum)" },
        { id: "c6", text: "Tests de bout en bout passés" },
        { id: "c7", text: "Déploiement Vercel fonctionnel" },
        { id: "c8", text: "Préparation pré-sprint complétée avant de coder" },
        { id: "c9", text: "Code IA relu et testé (pas de confiance aveugle)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Le sprint de 48h</h3><p>Choisis le MVP que tu as défini dans la leçon 1 et lance le sprint :</p><ol><li>Imprime le planning des 48h et affiche-le à côté de ton écran</li><li>Crée un timer (utilise Toggl ou un simple chrono) pour chaque bloc horaire</li><li>Suis le planning bloc par bloc — si tu es en retard, coupe des fonctionnalités, ne rallonge pas le temps</li><li>Utilise Claude Code ou Cursor pour accélérer chaque étape</li><li>À la fin des 48h, ton MVP doit être accessible en ligne sur une URL Vercel</li></ol><p><strong>Livrable :</strong> L'URL de ton MVP déployé + un document listant ce qui fonctionne et ce qui est dans la liste V2.</p>",
    quiz: [
      { type: "mcq", question: "Par quelle couche faut-il commencer le build d'un MVP ?", options: JSON.stringify(["Le frontend (interface)", "Le design (maquettes)", "Le backend (base de données + API)", "Le marketing (landing page)"]), correctAnswer: "Le backend (base de données + API)", explanation: "On commence par le backend : base de données, puis API, puis intégration IA. Le frontend vient ensuite et se connecte aux API déjà fonctionnelles. Cela évite de construire un frontend sur des fondations instables." },
      { type: "true_false", question: "Pendant un sprint MVP de 48h, il est important de refactoriser le code régulièrement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Pas pendant le sprint. La refactorisation est importante mais c'est un luxe de la V2. Pendant les 48h, l'objectif est que ça fonctionne. Le code propre viendra après la validation." },
      { type: "mcq", question: "Combien de tables Supabase sont typiquement nécessaires pour un MVP ?", options: JSON.stringify(["1 table", "3-5 tables", "15-20 tables", "50+ tables"]), correctAnswer: "3-5 tables", explanation: "3 à 5 tables suffisent pour un MVP. Par exemple : users, documents, results, logs. Si tu as besoin de plus de 5 tables, c'est probablement que ton MVP est trop ambitieux." },
      { type: "mcq", question: "Combien de temps gagne-t-on en utilisant l'IA pour créer un composant formulaire ?", options: JSON.stringify(["Aucun gain", "2x plus rapide", "6-9x plus rapide", "100x plus rapide"]), correctAnswer: "6-9x plus rapide", explanation: "Un formulaire React prend 30-45 minutes manuellement vs 5 minutes avec l'IA. C'est un gain de 6-9x qui fait une différence énorme sur un sprint de 48h." },
      { type: "true_false", question: "L'intégration IA est la partie la plus critique du build MVP.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Si l'IA ne donne pas de bons résultats, le MVP n'a pas de valeur. C'est pourquoi 6 heures sont allouées à l'intégration et à l'itération sur les prompts. La qualité de l'IA fait ou défait le produit." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 13,
    title: "Ship : déployer, tester, itérer",
    slug: "v2-ship-deployer-tester-iterer",
    duration: "25 min",
    description: "Ton MVP est construit. Maintenant, il faut le mettre devant des vrais utilisateurs, collecter du feedback, mesurer les métriques et itérer. Le launch n'est pas la fin — c'est le début.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le launch : mettre ton MVP devant des vrais utilisateurs" },
      { id: "4-2", type: "text", html: "<p>Tu as un MVP fonctionnel déployé sur Vercel. Maintenant, la partie la plus importante commence : le <strong>confronter à la réalité</strong>. Trop de développeurs construisent un produit et attendent que les utilisateurs viennent. Ça n'arrive jamais. Tu dois aller les chercher activement.</p><p>L'objectif du launch n'est pas d'avoir 10 000 utilisateurs. C'est d'avoir <strong>10 utilisateurs actifs</strong> qui utilisent vraiment ton produit et te donnent du feedback honnête. 10 vrais utilisateurs valent plus que 10 000 inscriptions sans engagement.</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>La stratégie des 10 premiers utilisateurs :</strong> Ne lance pas sur Product Hunt le premier jour. Commence par ton réseau proche : collègues, amis entrepreneurs, contacts LinkedIn. Envoie un message personnel à 30 personnes, offre un accès gratuit et demande du feedback en échange." },

      { id: "4-20", type: "heading", level: 3, text: "Le message de launch parfait" },
      { id: "4-21", type: "text", html: "<p>Le message que tu envoies à tes premiers testeurs est crucial. Voici la structure qui convertit le mieux :</p><ol><li><strong>Le contexte personnel :</strong> 'Hey [Prénom], je viens de terminer un projet sur lequel je bosse depuis quelques semaines.'</li><li><strong>Le problème que tu résous :</strong> 'J'ai créé un outil qui [résout tel problème]. Je sais que c'est quelque chose que [ton entreprise/ton métier] rencontre.'</li><li><strong>La demande claire :</strong> 'Est-ce que tu aurais 15 minutes pour tester et me donner ton avis honnête ? En échange, tu as un accès gratuit à vie.'</li><li><strong>Le lien :</strong> 'Voici le lien : [URL]. Aucun engagement, tu peux arrêter quand tu veux.'</li></ol><p>Ce message personnalisé a un taux de réponse de 30-50%. Un message copié-collé générique ? 5% max.</p>" },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Les canaux de launch" },
      { id: "4-6", type: "steps", steps: [
        { title: "Semaine 1 : Réseau personnel (10-30 personnes)", description: "Message personnel à tes contacts qui correspondent à ta cible. Pas de mass mailing — un message individuel qui explique ce que tu as construit et pourquoi tu veux leur avis. Offre un accès gratuit à vie pour les premiers testeurs." },
        { title: "Semaine 2 : Communautés en ligne", description: "Poste dans les communautés pertinentes : groupes Facebook, serveurs Discord, subreddits, forums spécialisés. Ne fais pas de la pub — raconte ton histoire ('j'ai construit X pour résoudre Y, voici le lien pour tester'). La transparence génère plus d'engagement que le marketing." },
        { title: "Semaine 3 : Product Hunt / Hacker News", description: "Si les retours de la semaine 1-2 sont positifs, lance sur Product Hunt. Prépare : un tagline percutant, 3-4 screenshots, une courte démo vidéo (30 secondes). Mobilise ton réseau pour upvoter le jour du launch." },
        { title: "En continu : Contenu et SEO", description: "Crée du contenu autour de ton produit : un article de blog expliquant le problème que tu résous, un thread Twitter/LinkedIn sur ta stack, un post sur ton processus de build. Le contenu est le meilleur canal d'acquisition long terme." },
      ]},

      { id: "4-22", type: "heading", level: 3, text: "Product Hunt : le guide express" },
      { id: "4-23", type: "text", html: "<p>Product Hunt peut amener 500 à 5 000 visiteurs en une journée si tu te prépares bien. Voici les règles d'or :</p><ul><li><strong>Lance un mardi ou mercredi :</strong> Ce sont les jours avec le plus de trafic et de votes sur Product Hunt</li><li><strong>Prépare tes assets :</strong> Logo (240x240), galerie de screenshots (4-5 images), GIF ou vidéo de démo (30 sec), tagline (60 caractères max)</li><li><strong>Écris un 'maker comment' :</strong> Un commentaire personnel qui raconte ton histoire — pourquoi tu as construit ça, comment, les leçons apprises. La communauté adore les histoires authentiques.</li><li><strong>Mobilise ton réseau le jour J :</strong> Pas de faux votes (Product Hunt les détecte et te ban). Demande à tes amis de tester genuinement et de voter s'ils aiment.</li><li><strong>Sois disponible toute la journée :</strong> Réponds à chaque commentaire, chaque question. L'engagement booste ton classement.</li></ul>" },
      { id: "4-24", type: "callout", variant: "info", html: "<strong>Alternative à Product Hunt :</strong> Si ton produit est technique, Hacker News (Show HN) peut être encore plus puissant. La communauté est plus exigeante mais aussi plus qualifiée. Un post qui atteint la front page peut générer 10 000+ visiteurs." },

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Collecter et exploiter le feedback" },
      { id: "4-9", type: "text", html: "<p>Le feedback est la matière première de l'itération. Mais tout le feedback ne se vaut pas. Voici comment le collecter et le prioriser :</p><ul><li><strong>Feedback quantitatif :</strong> Les métriques que tu as définies (utilisateurs actifs, taux de rétention, NPS). Utilise un outil simple comme Plausible ou PostHog pour le tracking.</li><li><strong>Feedback qualitatif :</strong> Les mots des utilisateurs. Fais des appels de 15 minutes avec tes premiers testeurs. Pose 3 questions : 'Qu'est-ce qui vous a plu ?', 'Qu'est-ce qui vous a frustré ?', 'Recommanderiez-vous le produit ?'</li><li><strong>Feedback implicite :</strong> Ce que les utilisateurs font (pas ce qu'ils disent). Où cliquent-ils ? Où abandonnent-ils ? Quelles fonctionnalités utilisent-ils le plus ?</li></ul>" },
      { id: "4-10", type: "comparison", headers: ["Type de feedback", "Méthode de collecte", "Priorité d'action", "Outil"], rows: [
        { cells: ["Bug critique", "Rapport utilisateur ou logs Vercel", "Immédiate (< 24h)", "Vercel Analytics, rapport email"] },
        { cells: ["Fonctionnalité manquante", "Appels utilisateurs, demandes par email", "Évaluer si aligné avec la vision", "Notion"] },
        { cells: ["Problème UX", "Tracking comportemental, appels", "Haute si affecte la rétention", "PostHog, Hotjar"] },
        { cells: ["Demande de personnalisation", "Feedback direct", "Basse — rester générique au début", "Liste V2 dans Notion"] },
      ]},
      { id: "4-11", type: "callout", variant: "warning", html: "<strong>Piège du feedback :</strong> Ne construis pas tout ce que les utilisateurs demandent. 10 utilisateurs vont te demander 10 fonctionnalités différentes. Ton travail est d'identifier le pattern : si 7/10 mentionnent le même problème, c'est une priorité. Si 1/10 veut une fonctionnalité niche, c'est dans la liste V2." },

      { id: "4-25", type: "heading", level: 3, text: "Les métriques qui comptent vraiment" },
      { id: "4-26", type: "text", html: "<p>Ne te perds pas dans 50 métriques. Pour un MVP, il y a 4 chiffres qui comptent :</p><ul><li><strong>DAU (Daily Active Users) :</strong> Combien de personnes utilisent ton produit chaque jour ? C'est le signe de vie de ton MVP. Si c'est 0 après 2 semaines de launch, il y a un problème fondamental.</li><li><strong>Rétention J7 :</strong> Parmi les gens qui testent, combien reviennent une semaine plus tard ? Un taux de 40%+ est excellent pour un MVP. En dessous de 10%, ton produit ne résout pas un vrai problème.</li><li><strong>NPS (Net Promoter Score) :</strong> 'Sur une échelle de 0 à 10, recommanderiez-vous ce produit ?' Un NPS de 50+ signifie que ton produit a du potentiel. Un NPS négatif = il faut pivoter.</li><li><strong>Time to Value :</strong> Combien de temps entre l'inscription et le premier 'Wow, ça marche !' ? Si ça prend plus de 5 minutes, simplifie l'onboarding.</li></ul>" },

      { id: "4-12", type: "heading", level: 2, text: "Le cycle d'itération" },
      { id: "4-13", type: "text", html: "<p>L'itération suit un cycle simple : <strong>Mesurer → Apprendre → Construire</strong> (le Build-Measure-Learn de Lean Startup, mais dans le bon ordre). Tu mesures les métriques et le feedback, tu en tires des apprentissages, puis tu construis la prochaine version. Chaque cycle dure 1-2 semaines.</p><p>Au bout de 3-4 cycles (6-8 semaines), tu as un produit significativement meilleur que le MVP initial, validé par des vrais utilisateurs. C'est à ce moment que tu peux commencer à investir dans le marketing, l'acquisition payante et la scalabilité.</p>" },

      { id: "4-27", type: "heading", level: 3, text: "Pivoter vs. Persévérer : la décision la plus dure" },
      { id: "4-28", type: "text", html: "<p>Après 4-6 semaines de launch et d'itérations, tu vas te retrouver face à une question cruciale : est-ce que je continue ou est-ce que je pivote ?</p><p>Voici les signaux pour chaque décision :</p>" },
      { id: "4-29", type: "comparison", headers: ["Signal", "Persévérer", "Pivoter"], rows: [
        { cells: ["Rétention J7", "20%+ des testeurs reviennent", "Moins de 5% reviennent"] },
        { cells: ["Feedback qualitatif", "Les gens disent 'j'adore mais il manque X'", "Les gens disent 'c'est bien' sans enthousiasme"] },
        { cells: ["Willingness to pay", "Des gens demandent le prix", "Personne ne parle d'argent"] },
        { cells: ["Engagement", "Les utilisateurs envoient des suggestions", "Silence radio après le test initial"] },
        { cells: ["Bouche-à-oreille", "Des utilisateurs invitent des collègues", "Aucune recommandation spontanée"] },
      ]},
      { id: "4-30", type: "callout", variant: "tip", html: "<strong>Pivoter ne veut pas dire abandonner.</strong> Ça veut dire changer de direction avec les apprentissages que tu as accumulés. Slack était un jeu vidéo avant de devenir un outil de communication. Instagram était un réseau social géolocalisé (Burbn) avant de se recentrer sur les photos. Le pivot est souvent le moment où le vrai succès commence." },

      { id: "4-14", type: "checklist", title: "Checklist post-launch", items: [
        { id: "c1", text: "10 premiers utilisateurs contactés personnellement" },
        { id: "c2", text: "Analytics installé (Plausible ou PostHog)" },
        { id: "c3", text: "3 appels de feedback de 15 min réalisés" },
        { id: "c4", text: "Bugs critiques corrigés sous 24h" },
        { id: "c5", text: "Liste V2 priorisée dans Notion" },
        { id: "c6", text: "Cycle d'itération de 1-2 semaines en place" },
        { id: "c7", text: "4 métriques clés trackées (DAU, rétention, NPS, time to value)" },
        { id: "c8", text: "Décision pivot/persévérer prise après 4-6 semaines" },
      ]},
    ]),
    exercise: "<h3>Exercice : Lance ton MVP</h3><p>Mets ton MVP devant de vrais utilisateurs :</p><ol><li>Identifie 30 personnes dans ton réseau qui correspondent à ta cible</li><li>Rédige un message personnel (pas un template) pour chacun — explique ce que tu as construit et demande 15 min de leur temps pour tester</li><li>Installe Plausible (gratuit 30 jours) ou PostHog (gratuit) sur ton MVP</li><li>Réalise 3 appels de feedback avec les premiers testeurs</li><li>Compile le feedback : quels patterns émergent ? Quels sont les 3 problèmes les plus mentionnés ?</li><li>Planifie ton premier cycle d'itération : quelles améliorations prioritaires pour la semaine prochaine ?</li></ol>",
    quiz: [
      { type: "mcq", question: "Combien d'utilisateurs actifs faut-il viser au launch d'un MVP ?", options: JSON.stringify(["10", "100", "1 000", "10 000"]), correctAnswer: "10", explanation: "10 utilisateurs actifs qui utilisent vraiment le produit et donnent du feedback valent plus que 10 000 inscriptions sans engagement. La qualité prime sur la quantité au stade MVP." },
      { type: "true_false", question: "Il faut lancer sur Product Hunt dès le premier jour.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Commence par ton réseau personnel (semaine 1) et les communautés (semaine 2). Product Hunt vient en semaine 3, quand tu as déjà des retours positifs et un produit testé." },
      { type: "mcq", question: "Quelles sont les 3 questions clés à poser lors d'un appel de feedback ?", options: JSON.stringify(["Combien payeriez-vous ? Quel logo préférez-vous ? Quelle couleur aimez-vous ?", "Qu'est-ce qui vous a plu ? Qu'est-ce qui vous a frustré ? Recommanderiez-vous le produit ?", "Utilisez-vous notre concurrent ? Combien de temps passez-vous en ligne ? Quel est votre budget ?", "Aimez-vous notre design ? Notre prix est-il correct ? Voulez-vous plus de fonctionnalités ?"]), correctAnswer: "Qu'est-ce qui vous a plu ? Qu'est-ce qui vous a frustré ? Recommanderiez-vous le produit ?", explanation: "Ces 3 questions couvrent les forces du produit (ce qui marche), les faiblesses (ce qui frustre) et la validation globale (NPS). C'est le minimum pour un feedback actionnable." },
      { type: "mcq", question: "Quel est le cycle d'itération recommandé après le launch ?", options: JSON.stringify(["1 jour", "1-2 semaines", "3 mois", "6 mois"]), correctAnswer: "1-2 semaines", explanation: "Un cycle de 1-2 semaines permet d'itérer rapidement tout en ayant le temps de collecter du feedback significatif. Plus court = pas assez de données. Plus long = trop lent pour réagir." },
      { type: "true_false", question: "Il faut construire toutes les fonctionnalités demandées par les utilisateurs.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "10 utilisateurs demanderont 10 choses différentes. Ton travail est d'identifier les patterns : si 7/10 mentionnent le même problème, c'est une priorité. Les demandes isolées vont dans la liste V2." },
      { type: "mcq", question: "Sous quel délai un bug critique doit-il être corrigé ?", options: JSON.stringify(["1 heure", "24 heures", "1 semaine", "Au prochain sprint"]), correctAnswer: "24 heures", explanation: "Un bug critique (crash, perte de données, fonctionnalité principale cassée) doit être corrigé sous 24h. Les bugs mineurs peuvent attendre le prochain cycle d'itération." },
    ],
  },
];
