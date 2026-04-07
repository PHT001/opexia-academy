// ═══════════════════════════════════════════════════
// MODULE 2 — Comment ca marche concretement
// 4 lecons — Claude Code, services, process, plan d'action
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_02_LESSONS = [
  // ─── LEÇON 1 — CLAUDE CODE ───
  {
    order: 1,
    module: 2,
    title: "Claude Code : pourquoi c'est l'outil qu'on utilise",
    slug: "v2-claude-code-outil-principal",
    duration: "15 min",
    description: "Pas de comparatif inutile — voila pourquoi on utilise Claude Code, ce qu'il fait, et comment il va te permettre de creer des projets pro.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi Claude Code et pas autre chose" },
      { id: "4-2", type: "text", html: "<p>Tu as peut-etre deja utilise ChatGPT. C'est bien pour discuter. Mais pour <strong>construire des vrais projets</strong> — des sites, des apps, des automatisations — c'est pas le bon outil.</p><p><strong>Claude Code</strong> c'est un outil qui tourne dans ton terminal et qui peut :</p>" },
      { id: "4-3", type: "steps", steps: [
        { title: "Voir tout ton projet", description: "Il lit tous tes fichiers d'un coup. Il comprend l'architecture, les connexions entre les pages, la logique metier." },
        { title: "Ecrire du code de qualite pro", description: "Le code genere est propre, structure, et respecte les bonnes pratiques. C'est du code livrable a un client." },
        { title: "Executer des commandes", description: "Il peut installer des packages, lancer des tests, deployer. Tu restes dans le terminal, lui fait le travail." },
        { title: "Gerer des projets complexes", description: "200K tokens de contexte — il peut travailler sur des projets de milliers de lignes sans rien oublier." }
      ]},
      { id: "4-20", type: "heading", level: 3, text: "Ce que ca change pour toi concretement" },
      { id: "4-21", type: "text", html: "<p>Avant Claude Code, creer un site web pro prenait <strong>2-4 semaines</strong> a un developpeur freelance (qui facture 300-500€/jour). Avec Claude Code, tu peux creer un site equivalent en <strong>2-3 jours</strong> — et tu n'as pas besoin d'etre developpeur.</p><p>Ca veut dire que tu peux :</p><ul><li>Facturer 1 000-3 000€ pour un projet qui te prend 2-3 jours de travail</li><li>Avoir des marges beaucoup plus elevees qu'un dev classique</li><li>Prendre plus de projets par mois parce que chaque projet est plus rapide</li><li>Te concentrer sur le <strong>business et le client</strong> plutot que sur la technique</li></ul>" },
      { id: "4-22", type: "callout", variant: "info", html: "<strong>Le paradoxe :</strong> Les developpeurs traditionnels mettent plus de temps ET facturent plus cher. Toi, tu vas plus vite ET tu factures un prix accessible pour les PME. C'est gagnant-gagnant : le client paie moins, et toi tu gagnes plus par heure travaillee." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Concretement, c'est quoi le workflow ?" },
      { id: "4-6", type: "text", html: "<p>Voila a quoi ressemble une session typique :</p><ol><li><strong>Tu decris ce que tu veux :</strong> \"Cree-moi une landing page pour un coach sportif avec un formulaire de contact\"</li><li><strong>Claude Code genere les fichiers</strong></li><li><strong>Tu verifies :</strong> Tu ouvres le site dans ton navigateur</li><li><strong>Tu ajustes :</strong> \"Change la couleur du bouton, ajoute une section temoignages\"</li><li><strong>Tu livres :</strong> Le site est pret, tu le deploies et tu factures</li></ol>" },
      { id: "4-23", type: "heading", level: 3, text: "Un exemple de session reelle" },
      { id: "4-24", type: "text", html: "<p>Voici a quoi ressemble une vraie session de vibe coding pour creer un site de coach sportif :</p><ol><li><strong>Minute 0-5 :</strong> Tu crees le dossier du projet, tu lances Claude Code, et tu decris le brief : \"Site pour un coach sportif a Paris. Sections : hero, programmes, temoignages, a propos, contact. Design moderne et energique, couleurs bleu nuit et orange.\"</li><li><strong>Minute 5-15 :</strong> Claude Code genere la structure complete. Tu ouvres le site, tu verifies le rendu visuel.</li><li><strong>Minute 15-30 :</strong> Tu ajustes : \"Le hero est trop sobre, ajoute une image de fond en plein ecran\", \"Les cartes programmes doivent avoir un effet hover\", \"Ajoute un bouton WhatsApp flottant\"</li><li><strong>Minute 30-60 :</strong> Tu peaufines les textes, tu ajustes le responsive mobile, tu ajoutes les vrais temoignages du client</li><li><strong>Minute 60-90 :</strong> Tu deploies sur Vercel (gratuit), tu envoies le lien au client</li></ol><p><strong>En 1h30, tu as un site pro deploye.</strong> Facture : 1 500€. Ca fait un taux horaire de 1 000€/h. Pas mal pour quelqu'un qui \"ne sait pas coder\".</p>" },
      { id: "4-7", type: "callout", variant: "tip", html: "<strong>Le vibe coding en action :</strong> Tu parles, l'IA construit. Tu guides, elle execute." },
      { id: "4-25", type: "separator", style: "dots" },
      { id: "4-26", type: "heading", level: 3, text: "Les modeles IA disponibles" },
      { id: "4-27", type: "text", html: "<p>Claude Code utilise les modeles d'Anthropic. Voici lesquels tu vas rencontrer :</p><ul><li><strong>Claude Sonnet :</strong> Le modele par defaut. Rapide, intelligent, bon rapport qualite/cout. Parfait pour 90% de tes taches.</li><li><strong>Claude Opus :</strong> Le modele le plus puissant. A utiliser pour les taches complexes : architectures multi-fichiers, refactoring, debug difficile. Plus cher mais plus precis.</li><li><strong>Claude Haiku :</strong> Le modele le plus rapide et economique. Bon pour les petites taches : renommer des variables, reformater du code, petites corrections.</li></ul><p>En pratique, tu utiliseras Sonnet 95% du temps. Opus pour les projets complexes. Haiku quand tu veux aller vite sur du simple.</p>" },
      { id: "4-8", type: "separator", style: "line" },
      { id: "4-9", type: "heading", level: 2, text: "ChatGPT vs Claude Code — en bref" },
      { id: "4-10", type: "comparison", headers: ["", "ChatGPT", "Claude Code"], rows: [
        { cells: ["Conversation", "Excellent", "Excellent"] },
        { cells: ["Qualite du code", "Moyen", "Pro"] },
        { cells: ["Voir tout un projet", "Non", "Oui"] },
        { cells: ["Executer des commandes", "Non", "Oui"] },
        { cells: ["Fait pour construire", "Non", "Oui"] }
      ]},
      { id: "4-28", type: "heading", level: 3, text: "Et les autres outils ?" },
      { id: "4-29", type: "text", html: "<p>Tu entendras parler d'autres outils IA pour coder. Voici ou ils se situent :</p><ul><li><strong>GitHub Copilot :</strong> Autocompletion de code dans VS Code. Bien pour les devs, mais pas adapte au vibe coding. Il complete du code, il ne construit pas des projets.</li><li><strong>Cursor :</strong> Un editeur de code avec IA integree. Excellent en complement de Claude Code — on le verra en detail dans un module dedie.</li><li><strong>Bolt/v0/Lovable :</strong> Des generateurs de sites en ligne. Bien pour des prototypes rapides, mais limites pour des projets pro personnalises.</li><li><strong>Replit Agent :</strong> Un agent IA dans le cloud. Pratique mais moins puissant que Claude Code pour les gros projets.</li></ul>" },
      { id: "4-30", type: "callout", variant: "warning", html: "<strong>Ne tombe pas dans le piege du \"meilleur outil\" :</strong> Le meilleur outil, c'est celui que tu maitrises. Concentre-toi sur Claude Code et Cursor. Quand tu les maitrises, tu peux creer tout ce dont un client a besoin. Les autres outils sont des complements, pas des necessites." },
      { id: "4-11", type: "callout", variant: "info", html: "<strong>ChatGPT c'est bien pour reflechir. Claude Code c'est bien pour construire.</strong> Dans cette formation, on construit." }
    ]),
    exercise: "<h3>Exercice</h3><p>Va sur <a href='https://claude.ai' target='_blank'>claude.ai</a> et demande : <em>\"Explique-moi en 5 points pourquoi Claude Code est plus adapte que ChatGPT pour creer un projet web complet\"</em>. Lis la reponse.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal de Claude Code ?", options: JSON.stringify(["Il est gratuit", "Il peut voir tout le projet et executer des commandes", "Il parle mieux francais", "Il est plus rapide"]), correctAnswer: "Il peut voir tout le projet et executer des commandes", explanation: "Claude Code comprend l'architecture complete du projet et execute des commandes directement." },
      { type: "true_false", question: "Le vibe coding c'est un dialogue : tu decris, l'IA construit.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tu parles en langage naturel, l'IA genere le code. Tu guides, elle execute." },
      { type: "mcq", question: "Pour quoi ChatGPT est-il meilleur que Claude Code ?", options: JSON.stringify(["Le code", "La conversation et la reflexion", "Le deploiement", "Rien"]), correctAnswer: "La conversation et la reflexion", explanation: "ChatGPT est excellent pour reflechir et discuter. Claude Code est meilleur pour construire." }
    ],
  },

  // ─── LEÇON 2 — LES SERVICES ───
  {
    order: 2,
    module: 2,
    title: "Les services que tu vas vendre",
    slug: "v2-services-que-tu-vas-vendre",
    duration: "12 min",
    description: "Chatbots, sites web, automatisations, agents vocaux — ce que c'est, a qui, combien.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "4 services IA que les entreprises achetent" },
      { id: "5-2", type: "text", html: "<p>Ces 4 services se vendent tous les jours. Tu peux les creer avec Claude Code + les bons outils.</p>" },
      { id: "5-20", type: "text", html: "<p>Chaque service repond a un <strong>probleme precis</strong> que les entreprises rencontrent au quotidien. La cle pour vendre, c'est de ne pas parler de technologie mais de <strong>resultats</strong>. Un patron de PME ne veut pas un \"chatbot NLP avec API REST\" — il veut <strong>arreter de perdre 2 heures par jour au telephone</strong>.</p>" },
      { id: "5-21", type: "callout", variant: "tip", html: "<strong>Regle d'or :</strong> Ne vends jamais de la tech, vends du resultat. \"Je vais vous installer un chatbot\" = flop. \"Vous allez recuperer 2 heures par jour et ne plus rater d'appels\" = vendu." },
      { id: "5-3", type: "separator", style: "dots" },
      { id: "5-4", type: "heading", level: 3, text: "1. Chatbots IA — 500 a 3 000€" },
      { id: "5-5", type: "text", html: "<p>Un chatbot connecte aux donnees du client. Il repond 24h/24, prend des RDV, qualifie des leads. Le service <strong>le plus demande</strong>.</p><p><strong>Exemple :</strong> Un dentiste qui recoit 30 appels/jour pour les memes questions.</p>" },
      { id: "5-22", type: "text", html: "<p><strong>Ce que tu livres concretement :</strong></p><ul><li>Un widget de chat integre sur le site du client</li><li>Un prompt systeme personnalise avec toutes les infos du business</li><li>La connexion aux donnees du client (FAQ, horaires, services, tarifs)</li><li>Un tableau de bord pour voir les conversations</li><li>La formation du client pour gerer les exceptions</li></ul><p><strong>Temps de realisation :</strong> 2-5 jours selon la complexite. <strong>Cout reel :</strong> 10-30€ en API IA par mois. <strong>Marge :</strong> Enorme.</p>" },
      { id: "5-23", type: "callout", variant: "info", html: "<strong>Le modele recurrent :</strong> Facture la creation (1 000-2 000€) PLUS un forfait mensuel de maintenance (100-200€/mois). Apres 10 clients, tu as 1 000-2 000€ de revenus recurrents sans effort supplementaire." },
      { id: "5-6", type: "heading", level: 3, text: "2. Sites web IA — 1 000 a 5 000€" },
      { id: "5-7", type: "text", html: "<p>Un site pro avec des fonctionnalites IA integrees. Tu le crees en quelques jours avec Claude Code.</p><p><strong>Exemple :</strong> Un agent immobilier qui veut un generateur automatique de descriptions.</p>" },
      { id: "5-24", type: "text", html: "<p><strong>Les fonctionnalites IA qui font la difference :</strong></p><ul><li><strong>Generateur de contenu :</strong> L'agent immo tape les infos du bien, l'IA genere une description pro en 10 secondes</li><li><strong>Chatbot integre :</strong> Les visiteurs du site peuvent poser des questions en temps reel</li><li><strong>Recommandations personnalisees :</strong> L'IA suggere des biens similaires au visiteur</li><li><strong>SEO automatique :</strong> L'IA genere des meta-descriptions et des titres optimises pour Google</li></ul><p>Un site web classique, tout le monde sait faire. Un site web <strong>avec des fonctionnalites IA</strong>, c'est la que tu te distingues de la concurrence et que tu justifies un prix premium.</p>" },
      { id: "5-8", type: "heading", level: 3, text: "3. Automatisations — 500 a 2 000€" },
      { id: "5-9", type: "text", html: "<p>Tu connectes les outils du client pour automatiser les taches repetitives.</p><p><strong>Exemple :</strong> Un e-commerce avec des emails de relance personnalises par l'IA.</p>" },
      { id: "5-25", type: "text", html: "<p><strong>Les automatisations les plus vendues :</strong></p><ul><li><strong>Emails automatiques IA :</strong> L'IA redige des emails de relance personnalises selon le comportement du client (500-1 000€)</li><li><strong>CRM intelligent :</strong> Les leads sont automatiquement qualifies et tries par l'IA (800-1 500€)</li><li><strong>Reporting automatise :</strong> L'IA genere des rapports hebdomadaires a partir des donnees du client (500-1 000€)</li><li><strong>Social media IA :</strong> Generation automatique de posts pour les reseaux sociaux (300-800€/mois)</li></ul><p>Les automatisations sont geniales pour le revenu recurrent. Une fois mises en place, elles tournent toutes seules et le client te paie chaque mois pour la maintenance.</p>" },
      { id: "5-26", type: "callout", variant: "tip", html: "<strong>L'outil cle :</strong> Make (anciennement Integromat) est la plateforme d'automatisation que tu utiliseras le plus. Gratuit pour commencer, et tu apprendras a l'utiliser en detail dans les modules suivants." },
      { id: "5-10", type: "heading", level: 3, text: "4. Agents vocaux — 1 500 a 5 000€" },
      { id: "5-11", type: "text", html: "<p>Un assistant telephonique IA. Le service <strong>le plus premium</strong> et le moins concurrence.</p><p><strong>Exemple :</strong> Un cabinet medical qui rate 40% des appels.</p>" },
      { id: "5-27", type: "text", html: "<p>Les agents vocaux sont le service le plus impressionnant que tu puisses vendre. Imagine : le client appelle un cabinet medical, et une <strong>voix IA naturelle</strong> repond, pose les bonnes questions (\"Quel est le motif de votre appel ?\"), et prend le rendez-vous directement dans l'agenda du medecin.</p><p><strong>Pourquoi c'est le service le plus premium :</strong></p><ul><li>Tres peu de prestataires savent faire ca — la concurrence est quasi nulle</li><li>Le ROI est immediat pour le client (plus d'appels rates = plus de chiffre d'affaires)</li><li>Ca impressionne enormement — un prospect qui entend son agent vocal IA est subjugue</li><li>Le forfait mensuel est naturel (50-300€/mois) parce que c'est un service continu</li></ul>" },
      { id: "5-28", type: "separator", style: "line" },
      { id: "5-29", type: "heading", level: 2, text: "Quel service choisir pour commencer ?" },
      { id: "5-30", type: "comparison", headers: ["Service", "Difficulte", "Temps de creation", "Ideal pour debuter ?"], rows: [
        { cells: ["Chatbot IA", "Facile", "2-5 jours", "Oui — le plus facile et le plus demande"] },
        { cells: ["Site web IA", "Moyen", "3-7 jours", "Oui — si tu aimes le design et le visuel"] },
        { cells: ["Automatisations", "Moyen", "1-5 jours", "Oui — si tu aimes les process et la logique"] },
        { cells: ["Agent vocal", "Avance", "5-10 jours", "Non — attends d'avoir 2-3 clients d'abord"] }
      ]},
      { id: "5-12", type: "callout", variant: "tip", html: "<strong>Commence par UN service.</strong> Deviens bon dessus, puis diversifie." },
      { id: "5-31", type: "callout", variant: "info", html: "<strong>Notre recommandation :</strong> Si tu debutes, commence par les <strong>chatbots</strong>. C'est le service le plus simple a creer, le plus simple a vendre (le probleme est evident pour le client), et le plus simple a livrer. Une fois que tu as 3-4 clients chatbot, tu pourras naturellement proposer des sites web et des automatisations en complement." }
    ]),
    exercise: "<h3>Exercice</h3><p>Parmi les 4 services, lequel t'attire le plus ? Note ta reponse.</p>",
    quiz: [
      { type: "mcq", question: "Quel service IA est le plus demande ?", options: JSON.stringify(["Les agents vocaux", "Les chatbots IA", "Les jeux video", "Les robots"]), correctAnswer: "Les chatbots IA", explanation: "Les chatbots sont le plus demande car le ROI est immediat." },
      { type: "mcq", question: "Combien peut-on facturer un site web IA ?", options: JSON.stringify(["50€", "1 000 a 5 000€", "100 000€", "Gratuit"]), correctAnswer: "1 000 a 5 000€", explanation: "Un site web pro avec fonctionnalites IA se facture entre 1 000 et 5 000€." },
      { type: "true_false", question: "Il faut maitriser les 4 services avant de se lancer.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Commence par un seul et diversifie ensuite." }
    ],
  },

  // ─── LEÇON 3 — DE L'IDÉE AU CLIENT ───
  {
    order: 3,
    module: 2,
    title: "De l'idee au client : le process complet",
    slug: "v2-idee-au-client-process",
    duration: "15 min",
    description: "Les 5 etapes pour passer de \"j'ai une competence\" a \"je facture un client\".",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le chemin de A a Z" },
      { id: "6-20", type: "text", html: "<p>La plupart des gens qui apprennent l'IA restent bloques a l'etape \"j'ai appris un truc\". Ils ne passent jamais a \"j'ai facture quelqu'un\". Pourquoi ? Parce qu'ils n'ont pas de <strong>process</strong>. Ils ne savent pas quoi faire entre \"je sais creer un chatbot\" et \"j'ai de l'argent sur mon compte\".</p><p>Cette lecon va te donner ce process. 5 etapes. C'est simple, mais il faut les suivre dans l'ordre.</p>" },
      { id: "6-2", type: "steps", steps: [
        { title: "1. Identifier un besoin", description: "Repere une entreprise avec un probleme que l'IA resout." },
        { title: "2. Montrer une demo", description: "Cree un prototype en 10 minutes et montre-le. C'est le moment qui convainc." },
        { title: "3. Closer et signer", description: "Propose un devis clair. Le prospect a vu la demo, il signe." },
        { title: "4. Construire et livrer", description: "Tu utilises Claude Code pour construire, tu deploies, tu livres." },
        { title: "5. Fideliser", description: "Forfait mensuel de maintenance (50-200€/mois). Le client te recommande." }
      ]},
      { id: "6-21", type: "heading", level: 3, text: "Etape 1 en detail : identifier un besoin" },
      { id: "6-22", type: "text", html: "<p>C'est l'etape la plus importante. Tu ne vends pas un produit — tu <strong>resous un probleme</strong>. Pour identifier un besoin, pose-toi ces questions quand tu observes un business :</p><ul><li>Est-ce qu'ils repondent aux memes questions encore et encore ? → <strong>Chatbot</strong></li><li>Est-ce que leur site web est vieux, lent, ou pas mobile-friendly ? → <strong>Site web IA</strong></li><li>Est-ce qu'ils font des taches manuelles et repetitives ? → <strong>Automatisation</strong></li><li>Est-ce qu'ils ratent des appels ou sont debordees au telephone ? → <strong>Agent vocal</strong></li></ul><p>Un restaurateur qui passe 1h par jour au telephone a repondre \"On est ouvert de 12h a 14h\" — c'est un besoin. Un coach sportif qui recopie les memes emails de programme — c'est un besoin. Un agent immo qui ecrit 10 descriptions de biens par semaine — c'est un besoin.</p>" },
      { id: "6-23", type: "callout", variant: "tip", html: "<strong>L'exercice de l'observation :</strong> Pendant une semaine, chaque fois que tu entres dans un commerce ou que tu interagis avec un service, demande-toi : \"Qu'est-ce que l'IA pourrait ameliorer ici ?\". Tu vas voir des opportunites partout." },
      { id: "6-24", type: "heading", level: 3, text: "Etape 2 en detail : la demo qui vend" },
      { id: "6-25", type: "text", html: "<p>La demo est ton <strong>arme secrete</strong>. Tu ne vends pas un concept abstrait — tu montres un resultat concret avec les donnees du prospect. Voici comment la preparer :</p><ol><li><strong>5 minutes avant le RDV :</strong> Va sur le site web du prospect, sa page Google, ses reseaux sociaux. Note les infos cles (horaires, services, FAQ).</li><li><strong>Pendant le RDV :</strong> Ouvre Claude, copie ton prompt template, colle les infos du prospect, et montre-lui le chatbot en action.</li><li><strong>La phrase magique :</strong> \"Ca c'est en 5 minutes. Imaginez ce que ca donne en une semaine de travail, integre a votre site, avec vos donnees completes.\"</li></ol><p>Le taux de conversion d'une demo personnalisee est de <strong>40-60%</strong>. Sans demo, c'est plus proche de 5-10%. C'est la technique qui fait la difference.</p>" },
      { id: "6-26", type: "callout", variant: "warning", html: "<strong>Piege a eviter :</strong> Ne fais pas de demo generique. \"Voila un chatbot pour un restaurant\" ne convainc personne. \"Voila un chatbot pour VOTRE restaurant, Le Petit Bistrot, avec VOS horaires et VOTRE menu\" — ca, ca convainc." },
      { id: "6-3", type: "separator", style: "dots" },
      { id: "6-4", type: "heading", level: 2, text: "Ou trouver tes premiers clients" },
      { id: "6-5", type: "text", html: "<ul><li><strong>Ton entourage</strong> — ami entrepreneur, oncle commercant</li><li><strong>LinkedIn</strong> — un post suffit</li><li><strong>Ton quartier</strong> — restaurant, coiffeur, agence immo</li><li><strong>Communautes</strong> — groupes Facebook, Discord</li><li><strong>Plateformes</strong> — Malt, Fiverr, Upwork</li></ul>" },
      { id: "6-27", type: "heading", level: 3, text: "Classement par efficacite" },
      { id: "6-28", type: "comparison", headers: ["Canal", "Difficulte", "Taux de conversion", "Ideal pour"], rows: [
        { cells: ["Ton entourage direct", "Tres facile", "Eleve (30-50%)", "Ton 1er client (meme gratuit ou a prix reduit)"] },
        { cells: ["Demarchage local (porte-a-porte)", "Facile", "Moyen (10-20%)", "Tes 3 premiers clients payants"] },
        { cells: ["LinkedIn (posts + DMs)", "Moyen", "Moyen (5-15%)", "Construire ta reputation et attirer des leads"] },
        { cells: ["Plateformes (Malt, Fiverr)", "Facile", "Variable", "Flux regulier de petits projets"] },
        { cells: ["Bouche a oreille / recommandation", "Impossible au debut", "Tres eleve (50%+)", "Tes clients 5+ (apres avoir un portfolio)"] }
      ]},
      { id: "6-29", type: "text", html: "<p><strong>La strategie optimale :</strong></p><ol><li><strong>Semaine 1-2 :</strong> Fais un projet gratuit ou a prix casse pour un proche (ton oncle commercant, ton ami coach). Objectif : avoir un premier temoignage et un cas d'etude.</li><li><strong>Semaine 3-4 :</strong> Demarche 10-20 commerces dans ton quartier avec ta demo et ton cas d'etude. Objectif : 2-3 clients payants.</li><li><strong>Mois 2 :</strong> Publie sur LinkedIn tes resultats + fais du cold outreach cible. Objectif : un flux regulier de leads.</li><li><strong>Mois 3+ :</strong> Les recommandations commencent a arriver. Tu peux augmenter tes prix.</li></ol>" },
      { id: "6-6", type: "callout", variant: "tip", html: "<strong>Premier projet a 300-500€ = premier temoignage.</strong> C'est de l'or pour la suite." },
      { id: "6-7", type: "separator", style: "line" },
      { id: "6-8", type: "heading", level: 2, text: "Le script qui marche" },
      { id: "6-9", type: "text", html: "<p><em>\"Salut [prenom], je me specialise dans les solutions IA pour les [type de business]. Je peux te montrer en 15 min ce que l'IA pourrait faire pour toi. Si ca te plait, on travaille ensemble. Si pas, zero engagement.\"</em></p>" },
      { id: "6-30", type: "heading", level: 3, text: "Variantes selon le canal" },
      { id: "6-31", type: "steps", steps: [
        { title: "WhatsApp / SMS (pour tes proches)", description: "\"Hey [prenom] ! Je me suis lance dans les solutions IA pour les [secteur]. J'ai cree un truc qui pourrait t'interesser — ca automatise [probleme specifique]. Je te montre en 10 min ? C'est gratuit et sans engagement.\"" },
        { title: "Email (pour les prospects froids)", description: "Objet : \"[Prenom], une question rapide\". Corps : \"Bonjour [prenom], je vois que [observation specifique sur leur business]. J'aide les [type de business] a [benefice specifique] grace a l'IA. Est-ce que 15 minutes cette semaine vous conviendraient pour une demo rapide ?\"" },
        { title: "LinkedIn (message prive)", description: "\"Bonjour [prenom], j'ai vu votre [post/profil/activite]. Je travaille avec des [secteur] pour [benefice]. J'ai quelque chose qui pourrait vous interesser — je vous montre en 15 min ?\"" },
        { title: "En personne (demarchage local)", description: "\"Bonjour, je m'appelle [ton nom]. Je suis specialise en IA pour les [type de commerce]. J'ai cree un outil qui repond a vos clients 24h/24 sur votre site. Je peux vous montrer en 5 minutes sur mon telephone ?\"" }
      ]},
      { id: "6-32", type: "callout", variant: "info", html: "<strong>La cle de tous ces scripts :</strong> Tu proposes de MONTRER, pas de VENDRE. \"Je vous montre en 15 min\" est beaucoup moins intimidant que \"J'ai un produit a vous vendre\". La demo fait le travail de vente a ta place." }
    ]),
    exercise: "<h3>Exercice</h3><p><strong>1.</strong> Note 5 prospects potentiels.</p><p><strong>2.</strong> Ouvre Claude et utilise : <em>\"Je veux contacter [type de business] pour proposer [service IA]. Ecris-moi un message LinkedIn, un WhatsApp, et un email.\"</em></p>",
    quiz: [
      { type: "mcq", question: "Quelle est la premiere etape pour decrocher un client ?", options: JSON.stringify(["Creer un site", "Identifier un besoin et montrer une demo", "Attendre", "Acheter de la pub"]), correctAnswer: "Identifier un besoin et montrer une demo", explanation: "Reperer un besoin + montrer une demo, c'est la methode la plus efficace." },
      { type: "true_false", question: "Ton premier projet doit etre a 5 000€.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un petit projet a 300-500€ pour avoir un premier temoignage, c'est plus strategique." },
      { type: "mcq", question: "Comment fideliser un client ?", options: JSON.stringify(["Disparaitre", "Forfait mensuel de maintenance", "Baisser tes prix", "L'appeler tous les jours"]), correctAnswer: "Forfait mensuel de maintenance", explanation: "Un forfait mensuel cree du revenu recurrent et fidelise." }
    ],
  },

  // ─── LEÇON 4 — TON PLAN DE LANCEMENT ───
  {
    order: 4,
    module: 2,
    title: "Ton plan de lancement personnalise",
    slug: "v2-plan-lancement-personnalise",
    duration: "15 min",
    description: "Exercice final : cree ton plan 90 jours avec Claude. Tu repars avec ta roadmap personnelle.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Faisons le point" },
      { id: "7-2", type: "text", html: "<p>En quelques lecons tu as :</p><ul><li>Compris la roadmap de la formation</li><li>Vu des gens normaux qui vivent de l'IA</li><li>Decouvert le vibe coding et Claude Code</li><li>Cree un prototype de chatbot</li><li>Compris les 4 services qui se vendent</li><li>Appris le process complet</li><li>Ecrit tes messages de prospection</li></ul><p><strong>Maintenant on cree ton plan d'action.</strong></p>" },
      { id: "7-20", type: "heading", level: 3, text: "Pourquoi un plan est essentiel" },
      { id: "7-21", type: "text", html: "<p>Sans plan, tu vas te disperser. Tu vas regarder une video YouTube sur les chatbots un jour, essayer une automatisation le lendemain, et finir par ne rien finir. C'est le syndrome du <strong>\"shiny object\"</strong> — tu cours apres la nouveaute au lieu d'executer.</p><p>Un plan de 90 jours te donne :</p><ul><li><strong>De la clarte :</strong> Tu sais exactement quoi faire chaque semaine</li><li><strong>De la motivation :</strong> Tu vois ta progression et tu sais ou tu en es</li><li><strong>De la discipline :</strong> Quand tu as envie de procrastiner, tu regardes ton plan et tu sais quoi faire</li><li><strong>De la responsabilite :</strong> Tu peux mesurer si tu es en avance ou en retard</li></ul>" },
      { id: "7-22", type: "callout", variant: "warning", html: "<strong>L'erreur classique :</strong> Passer 2 semaines a perfectionner ton plan au lieu de commencer a executer. Ton plan n'a pas besoin d'etre parfait. Il a besoin d'exister, et tu l'ajusteras en cours de route." },
      { id: "7-3", type: "separator", style: "dots" },
      { id: "7-4", type: "heading", level: 2, text: "Exercice final : Ton plan 90 jours" },
      { id: "7-5", type: "text", html: "<p>Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> et copie ce prompt :</p>" },
      { id: "7-6", type: "callout", variant: "tip", html: "<strong>Prompt :</strong><br/><br/>\"Je veux lancer une activite de prestataire IA.<br/>- Service : [chatbots / automatisations / sites web / agents vocaux]<br/>- Niveau : [debutant / quelques bases / a l'aise]<br/>- Objectif 90 jours : [premier client / 2 000€/mois / quitter mon job]<br/>- Temps dispo : [2h/jour / 4h/jour / temps plein]<br/><br/>Plan semaine par semaine sur 90 jours avec : ce que j'apprends, ce que je fais, un objectif mesurable.\"" },
      { id: "7-23", type: "heading", level: 3, text: "Comment interpreter ton plan" },
      { id: "7-24", type: "text", html: "<p>Quand Claude te genere ton plan, voici comment le lire :</p><ul><li><strong>Semaines 1-4 (Apprentissage) :</strong> C'est la phase ou tu suis la formation et tu t'entraines. Ne saute pas cette etape meme si tu es impatient de vendre.</li><li><strong>Semaines 5-8 (Construction) :</strong> Tu construis tes premiers projets portfolio et tu commences la prospection. C'est la phase la plus inconfortable — tu te mets en avant et tu risques des refus.</li><li><strong>Semaines 9-12 (Execution) :</strong> Tu closes tes premiers clients, tu livres, tu ajustes. C'est la phase ou tout se cristallise.</li></ul><p>Si tu prends du retard sur une phase, c'est normal. <strong>Decale, mais ne saute pas</strong>. Chaque phase est necessaire.</p>" },
      { id: "7-25", type: "comparison", headers: ["Profil", "Objectif realiste a 90 jours", "Semaines necessaires"], rows: [
        { cells: ["Debutant total, 2h/jour", "1 client a 500-1000€", "10-12 semaines"] },
        { cells: ["Quelques bases tech, 3h/jour", "2-3 clients, 2000-3000€ total", "8-10 semaines"] },
        { cells: ["A l'aise avec le digital, 4h+/jour", "4-5 clients, 3000-5000€ total", "6-8 semaines"] },
        { cells: ["Temps plein, full motivation", "Premier mois a 2000€+", "4-6 semaines"] }
      ]},
      { id: "7-7", type: "separator", style: "line" },
      { id: "7-8", type: "heading", level: 2, text: "Ce que ton plan va te montrer" },
      { id: "7-9", type: "text", html: "<p>Lis-le attentivement. Tu vas voir des etapes comme :</p><ul><li>\"Maitriser le prompting\" -> <strong>Module 3</strong></li><li>\"Installer Claude Code\" -> <strong>Module 4</strong></li><li>\"Construire un site web\" -> <strong>Modules 6-7</strong></li><li>\"Creer un chatbot\" -> <strong>Module 8</strong></li><li>\"Automatiser\" -> <strong>Module 10</strong></li><li>\"Closer un client\" -> <strong>Module 19</strong></li></ul><p><strong>Chaque module de l'Academy correspond a une etape de ton plan.</strong></p>" },
      { id: "7-26", type: "heading", level: 3, text: "Le suivi de ton plan" },
      { id: "7-27", type: "text", html: "<p>Un plan sans suivi ne sert a rien. Voici comment t'assurer que tu avances :</p>" },
      { id: "7-28", type: "steps", steps: [
        { title: "Check-in hebdomadaire (5 min chaque dimanche)", description: "Regarde ton plan. Est-ce que tu as fait ce qui etait prevu cette semaine ? Si oui, coche et passe a la suivante. Si non, pourquoi ? Ajuste le planning si besoin." },
        { title: "Journal de progression", description: "Note chaque jour ce que tu as fait (meme en une ligne). \"Mardi : termine le module 3, lecon 2. Fait l'exercice de prompting\". Ca te donne une trace visible de tes progres." },
        { title: "Milestones cles", description: "Identifie 3-4 moments cles dans ton plan : premier prototype, premier prospect contacte, premier devis envoye, premier client signe. Ce sont tes victoires a celebrer." },
        { title: "Accountability partner", description: "Si possible, trouve quelqu'un qui fait le meme parcours que toi. Tenez-vous au courant de vos progres. La responsabilite mutuelle est un motivateur enorme." }
      ]},
      { id: "7-29", type: "callout", variant: "tip", html: "<strong>Astuce motivation :</strong> Chaque dimanche, envoie un message a un ami (ou dans la communaute) avec ta progression de la semaine. \"Cette semaine j'ai cree mon premier chatbot et contacte 5 prospects\". Le fait de rendre des comptes te pousse a avancer." },
      { id: "7-10", type: "heading", level: 2, text: "Et maintenant ?" },
      { id: "7-11", type: "text", html: "<p>Tu as le plan. Tu as les premiers outils. Tu as tes messages. Tu as un prototype.</p><p>Ce qui te manque c'est les <strong>competences techniques et business</strong> pour executer. C'est exactement ce que couvrent les 20 modules suivants.</p>" },
      { id: "7-30", type: "heading", level: 3, text: "La suite de la formation" },
      { id: "7-31", type: "text", html: "<p>Voici ce qui t'attend dans les prochains modules :</p><ul><li><strong>Module 3 — Prompting :</strong> Tu apprends a communiquer efficacement avec l'IA. C'est la competence fondamentale de tout prestataire IA.</li><li><strong>Module 4 — Les IDE IA :</strong> Tu maitrises Claude Code et Cursor comme un pro. Workflow avance, multi-fichiers, CLAUDE.md.</li><li><strong>Module 5 — Git & GitHub :</strong> Tu apprends a gerer tes projets comme un developpeur pro. Versioning, collaboration, deploiement.</li><li><strong>Modules 6-7 — Web dev :</strong> Tu construis des sites web professionnels avec React, Next.js, et Tailwind.</li><li><strong>Modules 8-9 — Chatbots :</strong> Tu crees et deploies des chatbots connectes aux donnees du client.</li></ul><p>Chaque module te rapproche de ton objectif. <strong>Continue.</strong></p>" },
      { id: "7-12", type: "callout", variant: "info", html: "<strong>Sauvegarde ton plan de 90 jours.</strong> C'est ta roadmap personnelle." }
    ]),
    exercise: "<h3>Exercice final</h3><p><strong>1.</strong> Sauvegarde ton plan.</p><p><strong>2.</strong> Identifie les 3 premieres competences dont tu as besoin.</p><p><strong>3.</strong> Regarde les modules suivants — ils correspondent a ton plan.</p>",
    quiz: [
      { type: "mcq", question: "Combien d'outputs concrets tu as crees ?", options: JSON.stringify(["Aucun", "1", "3 (prototype + messages + plan)", "10"]), correctAnswer: "3 (prototype + messages + plan)", explanation: "Un prototype de chatbot, tes messages de prospection, et ton plan 90 jours." },
      { type: "true_false", question: "L'Academy couvre les competences de ton plan.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Chaque module correspond a une competence : prompting, code, chatbots, vente..." },
      { type: "mcq", question: "Quelle est la prochaine etape ?", options: JSON.stringify(["Attendre", "Debloquer la suite pour executer ton plan", "Oublier", "Regarder YouTube"]), correctAnswer: "Debloquer la suite pour executer ton plan", explanation: "Tu as le plan et les bases. L'etape suivante c'est les competences pour l'executer." }
    ],
  },
];
