// Phase 11 : Module 11 (Monétiser : Apps, SaaS et Services) + Module 15 (Déployer, Maintenir et Itérer)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 11 : Monétiser — Apps, SaaS et Services
  // ═══════════════════════════════════════════════════
  {
    order: 120,
    module: 11,
    title: "Les 5 modèles de revenus pour tes apps IA",
    slug: "5-modeles-revenus-apps-ia",
    duration: "50 min",
    description: "Découvre les 5 modèles de monétisation pour transformer tes apps IA en machines à revenus.",
    content: `<h2>Tu sais coder, maintenant apprends à encaisser</h2>
<p>Tu as appris à vibe coder avec Claude Code, tu sais builder des apps en quelques heures, tu as des projets qui tournent. Mais il y a un problème : ton compte en banque ne reflète pas encore tes compétences. La raison ? Tu n'as pas encore choisi comment monétiser. Et c'est normal — personne ne t'a appris ça à l'école. Aujourd'hui, on va décortiquer les 5 modèles de revenus qui fonctionnent pour les apps IA, et tu vas choisir celui qui correspond à ta situation.</p>
<p>Avant de plonger, un principe fondamental : le meilleur modèle de revenu n'est pas celui qui rapporte le plus en théorie, c'est celui que tu peux exécuter maintenant avec tes ressources actuelles. Un SaaS à 29€/mois avec 100 clients, c'est 2 900€/mois récurrents. Une vente unique à 500€ avec 10 clients, c'est 5 000€ mais tu repars de zéro le mois suivant. Chaque modèle a ses forces et ses contraintes.</p>

<h2>Modèle 1 : L'abonnement SaaS (revenus récurrents)</h2>
<p>C'est le Saint-Graal de la tech. Tu crées une app, les utilisateurs paient chaque mois pour y accéder. Stripe gère les paiements, toi tu gères le produit. Exemples concrets : un outil de génération de fiches produit IA à 29€/mois, un assistant de rédaction SEO à 49€/mois, un dashboard d'analytics IA à 99€/mois.</p>
<p>Les avantages sont énormes : revenus prévisibles, valorisation élevée si tu veux revendre, et effet boule de neige — chaque nouveau client s'ajoute aux précédents. Le piège ? Le churn. Si 10% de tes clients partent chaque mois, tu cours sur un tapis roulant. La clé, c'est de créer une app qui devient indispensable au workflow de l'utilisateur.</p>
<p><strong>Idéal si :</strong> tu veux construire un asset à long terme et tu es prêt à investir 3-6 mois avant de voir des résultats significatifs.</p>

<h2>Modèle 2 : La vente unique (one-time purchase)</h2>
<p>Tu crées un outil, tu le vends une fois, c'est terminé. Pas de support récurrent, pas de serveur à maintenir. C'est le modèle le plus simple pour démarrer. Exemples : un template Notion boosté à l'IA à 49€, un bot Discord personnalisé à 200€, un générateur de CV IA à 29€.</p>
<p>L'avantage : c'est cash immédiat, zéro engagement long terme. Tu peux tester plein d'idées rapidement. Le problème : tu dois constamment trouver de nouveaux clients. Il n'y a pas d'effet cumulatif. Pour compenser, tu peux créer un catalogue de produits — chaque nouveau produit attire un nouveau segment de clients.</p>
<p><strong>Idéal si :</strong> tu débutes et tu veux valider rapidement que des gens sont prêts à payer pour ce que tu crées.</p>

<h2>Modèle 3 : Le freemium (gratuit + premium)</h2>
<p>Tu offres une version gratuite limitée de ton app, et les utilisateurs qui veulent plus passent en version payante. C'est le modèle de Notion, Canva, ChatGPT. La version gratuite sert de marketing — elle attire des utilisateurs qui découvrent la valeur, deviennent dépendants, puis upgradent naturellement.</p>
<p>Concrètement : ton outil de rédaction IA permet 5 générations par jour gratuitement, illimité à 19€/mois. Ou ton dashboard d'analytics gratuit pour 1 site, premium pour 10 sites à 49€/mois. Le ratio standard est 2-5% de conversion free-to-paid. Ça veut dire qu'il te faut 1 000 utilisateurs gratuits pour avoir 20-50 payants.</p>
<p><strong>Idéal si :</strong> ton app a un potentiel viral et tu peux supporter les coûts serveur des utilisateurs gratuits.</p>

<h2>Modèle 4 : Le licensing (vente de licence)</h2>
<p>Tu crées une app et tu vends des licences à d'autres développeurs ou entreprises pour qu'ils l'utilisent dans leurs propres projets. C'est le modèle des templates premium, des composants UI, des boilerplates. Exemples : un starter kit Next.js + IA à 149€ la licence, un système de chatbot white-label à 499€, une librairie de composants IA à 79€.</p>
<p>L'avantage massif : pas de support utilisateur final, pas de serveur, pas de maintenance lourde. Tu vends du code, les acheteurs se débrouillent. Le défi : tu dois créer quelque chose de suffisamment bon pour que des développeurs préfèrent acheter plutôt que coder eux-mêmes. La documentation doit être impeccable.</p>
<p><strong>Idéal si :</strong> tu es un dev solide et tu sais créer des outils que d'autres développeurs veulent utiliser.</p>

<h2>Modèle 5 : Le white-label (revente sous marque blanche)</h2>
<p>Tu crées une app une fois, puis tu la revends à plusieurs clients qui la personnalisent à leur image. Tu codes un système de réservation IA, et tu le vends à 20 restaurants différents, chacun avec son branding. Tu crées un chatbot de support, et 15 agences web le revendent à leurs propres clients.</p>
<p>C'est le modèle le plus scalable : un seul produit, des dizaines de clients. Les marges sont excellentes parce que le coût marginal d'un nouveau client est quasi nul. Le défi : il faut une architecture multi-tenant solide dès le départ, et le support peut devenir complexe avec beaucoup de clients.</p>
<p><strong>Idéal si :</strong> tu as identifié un besoin commun dans une industrie et tu veux maximiser le ROI d'un seul développement.</p>

<h2>Comment choisir ton modèle</h2>
<p>Pose-toi 3 questions : Quel est ton objectif financier à 6 mois ? (Si c'est du cash rapide, one-time. Si c'est de la stabilité, SaaS.) Quelle est ta capacité technique ? (Le white-label demande plus d'architecture que la vente unique.) Quel est ton réseau actuel ? (Si tu connais des agences, le white-label est royal. Si tu as une audience, le freemium décolle vite.)</p>
<p>Mon conseil : commence par la vente unique pour valider, puis migre vers le SaaS ou le white-label une fois que tu as trouvé ton product-market fit. Ne te lance pas dans un SaaS sans avoir d'abord prouvé que des gens veulent ce que tu proposes.</p>`,
    exercise: `<ol>
<li>Choisis 2 modèles de revenus parmi les 5 et imagine une app IA concrète pour chacun. Définis le prix, la cible, et le canal de distribution pour chaque modèle.</li>
<li>Prends une app que tu as déjà codée (ou une idée que tu as) et décline-la selon 3 modèles différents : comment changeraient le pricing, les fonctionnalités et le support ?</li>
<li>Calcule ton objectif de revenus mensuel et détermine combien de clients il te faut pour chaque modèle. Exemple : 3 000€/mois = 100 clients SaaS à 30€ vs 6 ventes one-time à 500€ vs 3 licences white-label à 1 000€.</li>
</ol>`,
  },
  {
    order: 121,
    module: 11,
    title: "Transformer un projet en produit vendable",
    slug: "transformer-projet-produit-vendable",
    duration: "50 min",
    description: "Passe de 'projet perso' à 'produit que les gens achètent' avec une méthode claire.",
    content: `<h2>Le fossé entre un projet et un produit</h2>
<p>Tu as un side project qui tourne. Peut-être un outil que tu as codé pour toi-même, une automatisation qui te fait gagner du temps, ou un prototype que tu as montré à des potes. Ils trouvent ça cool, certains te demandent même s'ils peuvent l'utiliser. C'est le signal. Mais attention : il y a un fossé énorme entre "un truc qui marche pour moi" et "un produit que des inconnus sont prêts à payer". Aujourd'hui, on va construire le pont.</p>
<p>Un projet, c'est du code qui résout TON problème. Un produit, c'est du code qui résout le problème de QUELQU'UN D'AUTRE, de manière fiable, avec une expérience agréable, un prix clair, et un support minimum. La transition demande du travail sur 3 axes : le packaging, le pricing, et le positionnement.</p>

<h2>Le packaging : rendre ton projet utilisable par n'importe qui</h2>
<p>Premier chantier : l'onboarding. Est-ce qu'un utilisateur qui ne te connaît pas peut comprendre ton outil en moins de 2 minutes ? Si la réponse est non, tu as un problème de packaging. Concrètement, ça veut dire :</p>
<ul>
<li><strong>Une landing page claire</strong> : titre accrocheur (la promesse), sous-titre explicatif (le comment), 3 bénéfices clés, un CTA visible, une démo ou des screenshots. Pas besoin d'un designer — un template bien exécuté suffit.</li>
<li><strong>Un onboarding guidé</strong> : quand l'utilisateur arrive dans ton app, il ne doit pas se sentir perdu. Tooltip, guide étape par étape, template pré-rempli. Le but : qu'il vive son premier "moment magique" en moins de 60 secondes.</li>
<li><strong>Une UX qui ne fait pas fuir</strong> : ton interface n'a pas besoin d'être belle, elle doit être fonctionnelle. Boutons clairs, flux logique, messages d'erreur explicites. Utilise des librairies comme shadcn/ui ou Tailwind pour avoir un résultat pro sans effort.</li>
</ul>

<h2>Le pricing : combien ça vaut (vraiment)</h2>
<p>Le pricing est un art, pas une science. Mais il y a des principes solides. Règle numéro un : ne fixe jamais ton prix en fonction du temps passé. Fixe-le en fonction de la valeur que tu crées pour l'utilisateur. Si ton outil fait gagner 2 heures par jour à un freelance qui facture 50€/h, tu lui fais économiser 2 000€/mois. Facturer 49€/mois pour ça, c'est un no-brainer pour lui.</p>
<p>Méthode concrète pour fixer ton prix :</p>
<ul>
<li><strong>Étape 1</strong> : Identifie le bénéfice principal en euros ou en temps gagné. "Mon outil fait économiser X heures par semaine" ou "Mon outil génère X€ de revenus supplémentaires".</li>
<li><strong>Étape 2</strong> : Fixe ton prix à 5-10% de la valeur créée. Si tu fais économiser 1 000€/mois, facture 50-100€/mois. Le client fait un ROI de 10x-20x, c'est une évidence pour lui.</li>
<li><strong>Étape 3</strong> : Propose 2-3 plans (Starter, Pro, Business). Pas plus. Le plan du milieu doit être le plus attractif — c'est celui que la majorité choisira. Utilise l'effet d'ancrage : le plan premium à 199€ rend le plan pro à 79€ raisonnable.</li>
</ul>

<h2>Le positionnement : pourquoi toi et pas un autre</h2>
<p>Il existe probablement des alternatives à ton produit. Ce qui te différencie, c'est ton positionnement. Le positionnement, c'est la réponse à : "Pour qui c'est, et pourquoi c'est mieux que les alternatives ?"</p>
<p>La formule magique : "C'est le [catégorie] pour [cible spécifique] qui veut [bénéfice principal]." Exemples :</p>
<ul>
<li>"Le générateur de contenu pour les e-commerçants qui veulent des fiches produit optimisées SEO en 30 secondes."</li>
<li>"L'assistant IA pour les agents immobiliers qui veulent automatiser leurs réponses aux demandes de visite."</li>
<li>"Le dashboard analytics pour les créateurs de contenu qui veulent comprendre leur audience sans être data scientist."</li>
</ul>
<p>Plus ta niche est précise, plus c'est facile de vendre. "Un outil IA pour tout le monde" = personne ne se sent concerné. "L'outil IA pour les profs de yoga qui veulent automatiser leur planning" = chaque prof de yoga qui voit ça pense "c'est fait pour moi".</p>

<h2>La checklist avant de lancer</h2>
<p>Avant de mettre ton produit en vente, vérifie ces 10 points :</p>
<ul>
<li>Landing page avec promesse claire et CTA</li>
<li>Onboarding fonctionnel (un nouveau user peut démarrer seul)</li>
<li>Paiement intégré (Stripe, LemonSqueezy, ou Gumroad)</li>
<li>Page de pricing avec au moins 2 plans</li>
<li>Email de bienvenue automatique après achat</li>
<li>Documentation minimum ou FAQ</li>
<li>Mentions légales et CGV (obligatoires en France)</li>
<li>Un canal de support (même un simple email)</li>
<li>Analytics de base (PostHog, Plausible, ou Google Analytics)</li>
<li>Au moins 3 personnes ont testé et donné leur feedback</li>
</ul>
<p>Si tu coches 8/10, tu es prêt à lancer. Ne cherche pas la perfection — lance, itère, améliore. Ton premier client te donnera plus de feedback que 6 mois de développement en solo.</p>`,
    exercise: `<ol>
<li>Prends un de tes projets existants et crée une landing page minimaliste : titre, 3 bénéfices, screenshot, CTA, prix. Utilise un template gratuit ou code-la avec Claude Code.</li>
<li>Définis le pricing de ton produit avec la méthode valeur/10. Calcule la valeur créée pour l'utilisateur, divise par 10, et propose 3 plans (Starter, Pro, Business).</li>
<li>Écris ton positionnement en une phrase selon la formule : "C'est le [catégorie] pour [cible] qui veut [bénéfice]." Teste-la sur 3 personnes et note leurs réactions.</li>
</ol>`,
  },
  {
    order: 122,
    module: 11,
    title: "Vendre des apps sur les marketplaces",
    slug: "vendre-apps-marketplaces",
    duration: "45 min",
    description: "Où et comment lister tes apps IA pour toucher des acheteurs prêts à payer.",
    content: `<h2>Pourquoi les marketplaces sont ton meilleur allié au départ</h2>
<p>Quand tu débutes, ton plus gros problème n'est pas le produit — c'est la distribution. Tu peux avoir la meilleure app du monde, si personne ne la voit, personne ne l'achète. Les marketplaces résolvent ce problème : elles ont déjà le trafic, les acheteurs, et la confiance. C'est comme la différence entre ouvrir un magasin dans une rue déserte et ouvrir un stand dans un centre commercial bondé.</p>
<p>L'autre avantage, c'est la validation. Si ton app se vend sur une marketplace, c'est la preuve que le marché veut ce que tu proposes. Tu peux ensuite migrer vers ton propre site avec confiance. Voyons les meilleures plateformes pour vendre tes créations.</p>

<h2>Gumroad / LemonSqueezy : vendre direct, simple et rapide</h2>
<p>Ce sont les plateformes les plus simples pour commencer à vendre. Tu crées un compte, tu uploades ton produit (template, outil, licence), tu fixes un prix, et tu partages le lien. Gumroad prend 10% + frais de paiement, LemonSqueezy est similaire mais gère aussi la TVA européenne automatiquement (gros avantage si tu vends en Europe).</p>
<p>Ce que tu peux vendre : des templates (Notion, Next.js, React), des boilerplates, des starter kits IA, des outils téléchargeables, des licences de code. Astuce : ajoute toujours un "tier" gratuit ou un lead magnet pour capturer des emails. Un prospect qui télécharge ta version gratuite aujourd'hui sera peut-être ton client premium dans 3 mois.</p>
<p>Pour maximiser tes ventes sur ces plateformes : soigne ta page produit (titre accrocheur, screenshots de qualité, description qui parle de bénéfices pas de features), propose un prix "pay what you want" avec un minimum, et ajoute des upsells (pack premium, support prioritaire, code source complet).</p>

<h2>Product Hunt : le launchpad des makers</h2>
<p>Product Hunt est LA plateforme pour lancer un nouveau produit tech. Un bon lancement peut te générer des centaines voire des milliers de visiteurs en 24 heures. Mais attention, un lancement PH se prépare. Voici la méthode :</p>
<ul>
<li><strong>2 semaines avant</strong> : crée ta page "Coming Soon" sur Product Hunt, commence à collecter des followers, prépare tous tes assets (logo, screenshots, vidéo démo, description).</li>
<li><strong>1 semaine avant</strong> : contacte 10-20 personnes de ton réseau et demande-leur de supporter ton lancement le jour J. Pas de voter, de commenter et partager — l'engagement compte plus que les votes.</li>
<li><strong>Jour J</strong> : lance à 00:01 PST (9h01 heure de Paris), publie sur tous tes réseaux, engage avec chaque commentaire sur PH, partage les mises à jour de votes en temps réel.</li>
<li><strong>Après le lancement</strong> : remercie tous les supporters, publie un post-mortem sur Twitter/LinkedIn, convertis le trafic en emails via ta landing page.</li>
</ul>
<p>L'objectif n'est pas forcément de finir #1, c'est de générer du trafic qualifié et de la crédibilité. Un badge "Featured on Product Hunt" sur ta landing page, ça rassure les prospects.</p>

<h2>Indie Hackers, Twitter/X et communautés de makers</h2>
<p>Indie Hackers est une communauté de développeurs indépendants qui construisent des business. C'est l'endroit parfait pour partager ton parcours, tes revenus (la transparence est valorisée), et attirer des early adopters. Publie des updates régulières : "Mois 1 : 5 clients, 250€ MRR. Voici ce que j'ai appris." Les gens adorent suivre des trajectoires réelles.</p>
<p>Twitter/X est le réseau des builders. Le format "build in public" fonctionne particulièrement bien : partage tes progrès, tes metrics, tes galères. Chaque tweet est une micro-pub pour ton produit. La clé : sois authentique, partage des données réelles, et engage avec ta communauté.</p>
<p>Autres communautés à explorer : r/SideProject et r/indiehackers sur Reddit, les serveurs Discord de développeurs, les groupes Facebook de freelances et entrepreneurs, Hacker News (Show HN).</p>

<h2>Marketplace alternatives et niches</h2>
<p>Selon ton type de produit, explore aussi :</p>
<ul>
<li><strong>AppSumo</strong> : deals lifetime pour les SaaS. Tu vends un accès à vie à prix réduit en échange d'un volume de ventes massif. Bon pour bootstrapper ta base d'utilisateurs, mais attention à ne pas tuer ta marge long terme.</li>
<li><strong>Envato / CodeCanyon</strong> : pour les templates, plugins et scripts. Gros trafic de développeurs qui cherchent des solutions prêtes à l'emploi.</li>
<li><strong>Notion Template Gallery</strong> : si tu crées des templates Notion boostés à l'IA, c'est un canal de distribution gratuit avec un trafic énorme.</li>
<li><strong>Chrome Web Store</strong> : pour les extensions Chrome. Si ton outil IA peut prendre la forme d'une extension, c'est un canal massif (des millions d'utilisateurs).</li>
<li><strong>GitHub Sponsors + Open Source</strong> : rends ton outil open source, monétise via les sponsors, le support premium ou les features entreprise. C'est le modèle de Cal.com, Supabase et bien d'autres.</li>
</ul>

<h2>Optimiser ta fiche produit pour convertir</h2>
<p>Quelle que soit la marketplace, ta fiche produit doit suivre cette structure : un titre qui décrit le bénéfice (pas le nom technique), une première phrase qui accroche ("Génère 30 fiches produit SEO en 5 minutes"), 3-5 screenshots ou une vidéo démo de 60 secondes, une liste de fonctionnalités avec des bénéfices associés, des témoignages ou des métriques si tu en as, et un prix clair avec un CTA visible.</p>`,
    exercise: `<ol>
<li>Crée un compte sur Gumroad ou LemonSqueezy et liste un de tes projets avec une page produit complète : titre, description, screenshots, prix. Même si tu ne le mets pas en vente tout de suite, l'exercice te force à packager.</li>
<li>Prépare un plan de lancement Product Hunt pour une app que tu veux sortir : crée la page Coming Soon, liste 10 personnes à contacter, prépare tes assets visuels.</li>
<li>Publie un premier post "build in public" sur Twitter/X ou LinkedIn : présente ton projet, montre une démo, et demande des retours. Mesure l'engagement (likes, commentaires, clics).</li>
</ol>`,
  },
  {
    order: 123,
    module: 11,
    title: "Le modèle SaaS : revenus récurrents avec tes apps",
    slug: "modele-saas-revenus-recurrents-apps",
    duration: "55 min",
    description: "Construis un SaaS rentable avec des abonnements et une intégration Stripe complète.",
    content: `<h2>Pourquoi le SaaS est le business model roi</h2>
<p>Un SaaS (Software as a Service), c'est une app que tes utilisateurs paient chaque mois pour utiliser. C'est le modèle qui fait rêver tous les entrepreneurs tech, et pour de bonnes raisons : revenus récurrents prévisibles, effet cumulatif (chaque nouveau client s'ajoute aux précédents), valorisation élevée (un SaaS se revend 3-10x son revenu annuel), et scalabilité quasi infinie. Avec Claude Code, tu peux construire un SaaS en quelques jours qui aurait pris des mois il y a 2 ans.</p>
<p>Mais attention : un SaaS, ce n'est pas juste du code + Stripe. C'est un engagement à long terme. Tu t'engages à maintenir l'app, à corriger les bugs, à ajouter des fonctionnalités, et à supporter tes clients. Si tu n'es pas prêt pour ça, commence par de la vente unique ou du service. Si tu es prêt, voici comment faire les choses bien.</p>

<h2>Architecture d'un SaaS rentable</h2>
<p>Ton SaaS a besoin de 5 composants essentiels :</p>
<ul>
<li><strong>L'app elle-même</strong> : la fonctionnalité principale qui résout le problème de tes utilisateurs. C'est le coeur de tout. Build avec Next.js + Claude Code, tu peux avoir un MVP fonctionnel en 2-3 jours.</li>
<li><strong>L'authentification</strong> : sign up, login, reset password, OAuth (Google, GitHub). Utilise Clerk, NextAuth, ou Supabase Auth. Ne réinvente pas la roue — l'auth est un problème résolu.</li>
<li><strong>Le billing</strong> : Stripe est le standard. Tu as besoin de gérer les abonnements, les upgrades/downgrades, les annulations, les factures, et la TVA. Stripe Checkout + Stripe Customer Portal gèrent 90% du travail.</li>
<li><strong>Le dashboard utilisateur</strong> : chaque utilisateur doit voir ses données, son usage, son plan actuel, et pouvoir gérer son compte. C'est la base de l'expérience utilisateur.</li>
<li><strong>L'admin panel</strong> : toi, tu as besoin de voir tes metrics (MRR, churn, nouveaux clients), de gérer les utilisateurs, et de monitorer la santé de l'app. Un simple dashboard avec les KPIs essentiels suffit au départ.</li>
</ul>

<h2>Intégrer Stripe : le guide concret</h2>
<p>Stripe est incontournable pour le billing SaaS. Voici le flux technique :</p>
<ul>
<li><strong>Étape 1 — Créer tes produits et prix</strong> : dans le dashboard Stripe, crée un produit pour chaque plan (Starter, Pro, Business) avec un prix mensuel et annuel. Stripe te donne des price_id que tu utiliseras dans ton code.</li>
<li><strong>Étape 2 — Stripe Checkout</strong> : quand un utilisateur clique "S'abonner", tu crées une session Checkout côté serveur avec l'API Stripe. L'utilisateur est redirigé vers une page de paiement hébergée par Stripe (sécurisée, conforme PCI). Après paiement, il est redirigé vers ton app.</li>
<li><strong>Étape 3 — Webhooks</strong> : c'est la partie cruciale. Stripe envoie des événements à ton serveur quand quelque chose se passe : paiement réussi, abonnement annulé, carte expirée, etc. Tu dois écouter ces webhooks et mettre à jour ta base de données en conséquence. Les événements clés : checkout.session.completed, customer.subscription.updated, customer.subscription.deleted, invoice.payment_failed.</li>
<li><strong>Étape 4 — Customer Portal</strong> : Stripe fournit un portail client intégré où tes utilisateurs peuvent gérer leur abonnement, mettre à jour leur carte, télécharger leurs factures. Tu n'as presque rien à coder — juste un lien vers le portail.</li>
</ul>
<p>Avec Claude Code, tu peux demander de générer toute l'intégration Stripe en une session. Donne-lui le contexte (tes plans, tes prix, ton stack technique) et il te sort le code complet : routes API, webhooks, composants frontend.</p>

<h2>Les métriques SaaS que tu dois tracker</h2>
<p>Tu ne peux pas améliorer ce que tu ne mesures pas. Voici les 5 métriques essentielles :</p>
<ul>
<li><strong>MRR (Monthly Recurring Revenue)</strong> : ton revenu mensuel récurrent. C'est LA métrique principale. Somme de tous les abonnements actifs.</li>
<li><strong>Churn rate</strong> : le pourcentage de clients qui annulent chaque mois. En dessous de 5%, c'est bon. Au-dessus de 10%, tu as un problème de rétention urgent.</li>
<li><strong>LTV (Lifetime Value)</strong> : combien un client rapporte en moyenne sur toute sa durée de vie. LTV = prix mensuel / churn rate. Si tu factures 49€/mois et ton churn est de 5%, ta LTV est de 980€.</li>
<li><strong>CAC (Customer Acquisition Cost)</strong> : combien tu dépenses pour acquérir un client. Tu veux un ratio LTV/CAC supérieur à 3. Si ta LTV est 980€, tu peux dépenser jusqu'à 326€ pour acquérir un client.</li>
<li><strong>Net Revenue Retention</strong> : est-ce que tes clients existants dépensent plus ou moins au fil du temps ? Si c'est au-dessus de 100%, tes clients upgradent — c'est le signe d'un produit qui crée de plus en plus de valeur.</li>
</ul>

<h2>Éviter les pièges classiques du SaaS</h2>
<p>Les erreurs qui tuent les SaaS de makers solo :</p>
<ul>
<li><strong>Trop de features trop tôt</strong> : lance avec UNE fonctionnalité killer, pas 20 features moyennes. Ton v1 doit faire une chose exceptionnellement bien.</li>
<li><strong>Prix trop bas</strong> : 5€/mois, ça te donne l'image d'un outil jetable. 29-49€/mois, ça donne l'image d'un outil pro. Et la différence de valeur perçue est énorme pour un effort de support quasi identique.</li>
<li><strong>Pas de plan annuel</strong> : propose toujours un plan annuel avec 2 mois offerts. Ça réduit le churn (engagement plus long) et ça te donne du cash upfront pour investir dans la croissance.</li>
<li><strong>Ignorer le churn</strong> : chaque client qui part est un signal. Envoie un email de sortie avec un petit questionnaire. Les réponses valent de l'or pour améliorer ton produit.</li>
</ul>`,
    exercise: `<ol>
<li>Définis les 3 plans de ton SaaS (noms, prix, fonctionnalités par plan) et crée-les dans un compte Stripe en mode test. Note les price_id de chaque plan.</li>
<li>Code un mini-prototype d'intégration Stripe avec Claude Code : une page pricing, un bouton qui crée une session Checkout, et un webhook qui écoute l'événement checkout.session.completed. Teste le flux complet en mode test.</li>
<li>Crée un spreadsheet avec tes projections financières SaaS sur 12 mois : nombre de clients estimé par mois, MRR, churn estimé, LTV et CAC cible. Identifie le mois où tu atteins la rentabilité.</li>
</ol>`,
  },
  {
    order: 124,
    module: 11,
    title: "Vendre des services d'automatisation à des entreprises",
    slug: "vendre-services-automatisation-entreprises",
    duration: "50 min",
    description: "Propose des services d'automatisation IA aux PME et génère des revenus immédiats.",
    content: `<h2>Les PME ont un besoin massif d'automatisation</h2>
<p>Il y a un paradoxe énorme en France en ce moment : les grandes entreprises investissent des millions dans l'IA, mais les PME et les commerces locaux — qui représentent 99% des entreprises françaises — n'ont quasi aucun accès à ces technologies. Pourquoi ? Parce que les solutions enterprise sont trop chères, trop complexes, et inadaptées à leurs besoins. C'est là que tu interviens.</p>
<p>Un restaurant qui perd 2 heures par jour à gérer ses réservations par téléphone. Un agent immobilier qui passe ses soirées à répondre aux mêmes questions par email. Un artisan qui n'a aucune présence en ligne parce qu'il ne sait pas par où commencer. Ces problèmes, tu peux les résoudre en quelques jours avec Claude Code. Et ces gens sont prêts à payer pour ça — pas 50 000€ comme une ESN facturerait, mais 1 000-5 000€ pour une solution qui marche.</p>

<h2>Les 5 services d'automatisation les plus demandés</h2>
<ul>
<li><strong>Chatbot de support client</strong> : un bot qui répond aux questions fréquentes sur le site web du client, 24/7. Coût pour toi : quelques heures de dev. Prix de vente : 1 500-3 000€ de setup + 200-400€/mois de maintenance. ROI pour le client : ils économisent un mi-temps de secrétariat.</li>
<li><strong>Automatisation des emails et relances</strong> : un système qui trie les emails entrants, génère des réponses automatiques pour les demandes courantes, et programme des relances. Parfait pour les agents immobiliers, les cabinets d'avocats, les consultants. Prix : 800-2 000€.</li>
<li><strong>Génération de contenu automatisée</strong> : un pipeline qui crée des posts réseaux sociaux, des newsletters, des descriptions produits. Le client donne les grandes lignes, l'IA produit le contenu, le client valide et publie. Prix : 500-1 500€/mois en récurrent.</li>
<li><strong>Dashboard et reporting automatisé</strong> : un tableau de bord qui agrège les données du client (ventes, trafic web, avis clients) et génère un rapport hebdomadaire avec des recommandations IA. Prix : 2 000-4 000€ de setup + 300-500€/mois.</li>
<li><strong>Système de réservation intelligent</strong> : un outil de prise de rendez-vous avec confirmation automatique, rappels SMS, et gestion des annulations. Intégré au site web et à Google Calendar. Prix : 1 000-2 500€ + 100-200€/mois.</li>
</ul>

<h2>Comment trouver tes premiers clients</h2>
<p>Oublie les appels à froid et les pubs Facebook au début. Tes premiers clients viendront de ton réseau et du terrain. Voici les stratégies qui marchent :</p>
<ul>
<li><strong>Le porte-à-porte digital</strong> : identifie 20 business locaux qui pourraient bénéficier d'automatisation. Analyse leur site web, leur présence en ligne, leurs process visibles. Envoie un message personnalisé qui pointe un problème spécifique et propose une solution concrète. "J'ai vu que vous gérez vos réservations par téléphone. Je peux automatiser ça en 3 jours. Voici comment ça marcherait pour votre restaurant."</li>
<li><strong>L'offre d'audit gratuit</strong> : propose un audit IA gratuit de 30 minutes. Tu analyses les process du prospect, tu identifies 3 opportunités d'automatisation, et tu chiffres le gain potentiel. C'est un excellent moyen de montrer ta valeur et de décrocher un projet.</li>
<li><strong>Le réseau local</strong> : participe aux événements entrepreneurs de ta ville (BNI, CCI, meetups). Les PME achètent à des gens qu'elles connaissent et en qui elles ont confiance. Une recommandation vaut 10x plus qu'une pub.</li>
<li><strong>Les études de cas</strong> : dès que tu as un premier client satisfait, documente les résultats (avant/après, temps gagné, argent économisé) et utilise cette étude de cas pour convaincre les suivants. Rien ne vend mieux qu'un résultat concret.</li>
</ul>

<h2>Packager ton service pour être rentable</h2>
<p>Ne vends jamais "à l'heure". Vends des packages avec un scope défini, un livrable clair, et un prix fixe. Voici un exemple de structure :</p>
<ul>
<li><strong>Pack Starter (800-1 500€)</strong> : une automatisation simple, livrée en 1 semaine. Chatbot basique, template email IA, ou dashboard simple. Parfait pour les prospects qui veulent tester.</li>
<li><strong>Pack Pro (2 000-4 000€)</strong> : une solution complète, livrée en 2-3 semaines. Chatbot avancé + intégration CRM, ou système de réservation complet. C'est ton offre principale.</li>
<li><strong>Pack Maintenance (200-500€/mois)</strong> : support continu, mises à jour, optimisations mensuelles. C'est ce qui crée le revenu récurrent. Inclus : X heures de support, rapport mensuel de performance, ajustements mineurs.</li>
</ul>
<p>Conseil crucial : inclus toujours une formation de 30-60 minutes dans tes packages. Le client doit savoir utiliser ce que tu as construit. Sinon, il n'utilisera pas l'outil, il sera mécontent, et tu perdras le contrat de maintenance.</p>

<h2>Gérer la relation client comme un pro</h2>
<p>La vente de services, c'est 50% technique et 50% relation humaine. Quelques règles d'or :</p>
<ul>
<li>Envoie un update chaque semaine pendant le projet, même si tout va bien. Le silence inquiète les clients.</li>
<li>Livre toujours un petit extra non promis. Un rapport de plus, un ajustement gratuit, un conseil bonus. Ça crée l'effet "wow" qui génère les recommandations.</li>
<li>Gère les retours négatifs avec professionnalisme. Si quelque chose ne marche pas, corrige-le rapidement et communique clairement sur la solution.</li>
<li>Demande un témoignage après chaque projet réussi. Un avis Google, un message LinkedIn, ou même un simple email que tu peux utiliser sur ton site.</li>
</ul>`,
    exercise: `<ol>
<li>Identifie 5 PME ou commerces locaux dans ta ville qui pourraient bénéficier d'une automatisation IA. Pour chacun, note le problème identifié, la solution proposée, et le prix estimé.</li>
<li>Crée un template d'email de prospection personnalisable que tu pourras adapter pour chaque prospect. Inclus : accroche personnalisée, problème identifié, solution proposée, bénéfice chiffré, et CTA (appel ou rdv).</li>
<li>Conçois un de tes 3 packages (Starter, Pro, Maintenance) avec le détail des livrables, le timeline, et le prix. Crée une page Notion ou un PDF qui présente cette offre de manière professionnelle.</li>
</ol>`,
  },
  {
    order: 125,
    module: 11,
    title: "Créer une offre productisée à 5-10k€",
    slug: "creer-offre-productisee-5-10k",
    duration: "55 min",
    description: "Construis une offre high-ticket productisée qui combine IA et expertise pour maximiser tes revenus.",
    content: `<h2>Qu'est-ce qu'une offre productisée et pourquoi c'est un game-changer</h2>
<p>Une offre productisée, c'est un service standardisé vendu à un prix fixe avec un process reproductible. C'est le sweet spot entre le freelancing (100% custom, pas scalable) et le SaaS (100% produit, long à construire). Tu vends un résultat garanti, livré en un temps défini, avec un process éprouvé. Et tu le fais à un prix premium — 5 000 à 10 000€ — parce que la valeur créée justifie largement le prix.</p>
<p>Exemples concrets d'offres productisées IA :</p>
<ul>
<li>"Je transforme ton service client en machine automatisée en 3 semaines" — 7 000€</li>
<li>"Je crée ton système d'acquisition de leads IA complet" — 5 000€</li>
<li>"Je déploie un agent IA de vente qui qualifie tes prospects 24/7" — 8 000€</li>
<li>"Je construis ton content engine : 30 posts/mois en pilote automatique" — 6 000€</li>
</ul>
<p>La différence avec du freelancing classique : tu ne vends pas ton temps, tu vends un process. Et comme tu fais le même type de projet encore et encore, tu deviens meilleur, plus rapide, et plus rentable à chaque itération.</p>

<h2>Construire ton offre : le framework RAMP</h2>
<p>RAMP = Résultat, Audience, Mécanisme, Preuve. C'est le framework pour construire une offre à 5-10k€ qui se vend.</p>
<ul>
<li><strong>R — Résultat</strong> : quel est le résultat mesurable que tu garantis ? Pas "un chatbot", mais "80% des questions clients traitées automatiquement en 30 jours." Pas "un système d'emailing", mais "30% de réponses en plus et 15 heures par mois économisées." Le résultat doit être spécifique, mesurable, et temporellement défini.</li>
<li><strong>A — Audience</strong> : pour qui exactement ? Plus ta cible est précise, plus ton offre est percutante. "Les e-commerces Shopify qui font entre 50k et 500k€/an" est 100x mieux que "les entreprises." Tu veux pouvoir décrire ton client idéal en une phrase : son secteur, sa taille, son problème principal.</li>
<li><strong>M — Mécanisme</strong> : comment tu arrives au résultat ? C'est ton process en 4-6 étapes. Le mécanisme rend ta promesse crédible. "Audit → Conception → Développement → Tests → Déploiement → Formation" avec un timeline précis pour chaque étape. Le client voit exactement ce qui va se passer.</li>
<li><strong>P — Preuve</strong> : pourquoi toi ? Études de cas, témoignages, métriques. "J'ai déployé ce système pour 12 e-commerces, résultat moyen : +40% de conversion sur le support client." Si tu n'as pas encore de preuves, offre ton premier projet à prix réduit en échange d'un témoignage détaillé.</li>
</ul>

<h2>La structure d'une offre à 7 000€</h2>
<p>Voici comment structurer concrètement une offre à ce niveau de prix :</p>
<ul>
<li><strong>Semaine 1 — Audit et stratégie</strong> : appel de 90 minutes avec le client, analyse de ses processus actuels, identification des opportunités d'automatisation, livrable : document stratégique avec plan d'action détaillé. Valeur perçue : le client se sent compris et a une vision claire.</li>
<li><strong>Semaines 2-3 — Développement</strong> : tu construis la solution avec Claude Code. Chatbot, automatisations, intégrations, dashboard. Points d'étape tous les 3 jours avec le client. Livrable : solution fonctionnelle déployée en environnement de test.</li>
<li><strong>Semaine 4 — Déploiement et formation</strong> : mise en production, tests avec le client, formation de l'équipe (session de 60 minutes enregistrée), documentation. Livrable : solution live + guide utilisateur + vidéo de formation.</li>
<li><strong>Mois 2-3 — Accompagnement</strong> : support prioritaire, optimisations basées sur les données réelles, rapport de performance mensuel. C'est ce qui justifie le prix premium — tu ne livres pas juste un outil, tu accompagnes le résultat.</li>
</ul>

<h2>Justifier un prix à 5-10k€</h2>
<p>Comment convaincre un prospect de payer 7 000€ quand des freelances proposent des chatbots à 500€ ? La réponse : tu ne vends pas la même chose. Le freelance à 500€ vend un chatbot. Toi, tu vends une transformation business avec un résultat garanti.</p>
<p>Technique du ROI transparent : calcule en direct avec le prospect combien le problème lui coûte. "Vous avez 3 personnes au support qui passent 2h/jour à répondre aux mêmes questions. Ça coûte environ 3 000€/mois en salaires. Mon système automatise 80% de ces questions en 30 jours. En 3 mois, vous avez récupéré votre investissement. En 12 mois, vous avez économisé 25 000€." Quand le ROI est évident, le prix n'est plus un sujet.</p>
<p>Technique de la garantie : "Si le système ne traite pas au moins 70% des questions automatiquement après 30 jours, je continue à optimiser gratuitement jusqu'à atteindre cet objectif." La garantie élimine le risque perçu et montre ta confiance dans ta solution.</p>

<h2>Scaler ton offre productisée</h2>
<p>L'avantage du productisé, c'est la scalabilité. Comme tu fais le même type de projet, tu peux :</p>
<ul>
<li>Créer des templates et des composants réutilisables qui réduisent ton temps de dev de 50% à chaque projet</li>
<li>Documenter ton process pour pouvoir former un junior ou un freelance qui exécute à ta place</li>
<li>Augmenter tes prix au fil du temps (de 5k à 7k à 10k) à mesure que tes résultats et ta crédibilité augmentent</li>
<li>Ajouter un volet récurrent (maintenance 500€/mois) pour créer du revenu prévisible en plus du one-shot</li>
</ul>
<p>Objectif réaliste : 2 projets productisés par mois à 7 000€ = 14 000€/mois + 4-5 clients en maintenance à 400€/mois = 2 000€/mois récurrents. Total : 16 000€/mois. Atteignable en 6-12 mois avec de l'exécution consistante.</p>`,
    exercise: `<ol>
<li>Construis ton offre productisée avec le framework RAMP : définis le Résultat mesurable, l'Audience cible précise, le Mécanisme en 4-6 étapes, et la Preuve que tu peux fournir (même si c'est un projet personnel comme étude de cas).</li>
<li>Crée un document de vente d'une page pour ton offre : titre accrocheur, problème, solution, process, résultat garanti, prix, FAQ (3 objections anticipées avec réponses). Utilise Claude Code pour générer un template HTML propre.</li>
<li>Simule un calcul de ROI pour un client fictif : identifie le coût actuel de son problème, chiffre l'économie que ta solution génère sur 12 mois, et montre le ROI. Ce calcul sera ton argument de vente principal.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 15 : Déployer, Maintenir et Itérer
  // ═══════════════════════════════════════════════════
  {
    order: 126,
    module: 15,
    title: "Déploiement en un clic : Vercel, Railway, Render",
    slug: "deploiement-un-clic-vercel-railway-render",
    duration: "50 min",
    description: "Déploie tes apps en production en quelques minutes avec les bonnes plateformes.",
    content: `<h2>Fini le "ça marche en local"</h2>
<p>Tu as codé une app géniale avec Claude Code. Elle tourne parfaitement sur ton localhost:3000. Mais tant qu'elle n'est pas en production, accessible à tes utilisateurs avec une vraie URL, elle ne vaut rien commercialement. Le déploiement, c'est le moment où ton projet devient un produit. Et bonne nouvelle : en 2025, déployer une app est devenu ridiculement simple. Plus besoin de configurer des serveurs, de gérer du SSH, ou de comprendre Docker (même si c'est un plus). Les plateformes modernes te permettent de passer de git push à app live en moins de 5 minutes.</p>

<h2>Vercel : le choix numéro 1 pour Next.js</h2>
<p>Si ton app est construite avec Next.js (et elle devrait l'être si tu suis cette formation), Vercel est ton choix par défaut. C'est la plateforme créée par l'équipe derrière Next.js — l'intégration est parfaite.</p>
<p>Comment déployer sur Vercel :</p>
<ul>
<li><strong>Étape 1</strong> : pousse ton code sur GitHub (ou GitLab). Si tu ne l'as pas encore fait, initialise un repo git, fais un commit, et push. Claude Code peut t'aider avec les commandes si besoin.</li>
<li><strong>Étape 2</strong> : va sur vercel.com, connecte ton compte GitHub, et importe ton repository. Vercel détecte automatiquement que c'est un projet Next.js et configure le build.</li>
<li><strong>Étape 3</strong> : configure tes variables d'environnement. Toutes les clés API, les URLs de base de données, les secrets — tout ce qui est dans ton .env.local doit être ajouté dans les settings Vercel. C'est crucial pour la sécurité.</li>
<li><strong>Étape 4</strong> : clique "Deploy". En 60-120 secondes, ton app est live sur une URL vercel.app. Chaque fois que tu pushes sur main, Vercel redéploie automatiquement.</li>
</ul>
<p>Les features qui tuent sur Vercel : preview deployments (chaque PR a sa propre URL de preview), analytics intégrées, edge functions pour la performance globale, et un CDN mondial gratuit. Le plan gratuit est généreux pour commencer (100 GB de bande passante, builds illimitées).</p>

<h2>Railway : la simplicité pour les apps full-stack</h2>
<p>Railway est parfait quand tu as besoin de plus qu'un simple frontend. Base de données PostgreSQL, Redis, workers en background, cron jobs — Railway gère tout dans une interface simple et intuitive.</p>
<p>Ce qui rend Railway spécial :</p>
<ul>
<li><strong>Base de données intégrée</strong> : un clic pour ajouter un PostgreSQL, MySQL, ou Redis à ton projet. L'URL de connexion est automatiquement injectée dans tes variables d'environnement.</li>
<li><strong>Pricing au usage</strong> : tu paies ce que tu consommes, pas de surcharge. Parfait quand tu démarres — tu paies 5€/mois au lieu de 25€ pour un plan fixe.</li>
<li><strong>Déploiement depuis GitHub</strong> : comme Vercel, connecte ton repo et chaque push déclenche un nouveau déploiement.</li>
<li><strong>Templates</strong> : Railway a des templates one-click pour les stacks courantes — Next.js + PostgreSQL + Redis se déploie en un seul clic.</li>
</ul>
<p>Railway est ton choix quand ton app a besoin d'un backend avec état : base de données, file d'attente de tâches, ou services multiples.</p>

<h2>Render : l'alternative polyvalente</h2>
<p>Render se positionne comme le Heroku moderne — simple à utiliser, polyvalent, et avec un plan gratuit pour démarrer. C'est un excellent choix pour les apps qui ne rentrent pas dans le moule Next.js/Vercel.</p>
<ul>
<li><strong>Web Services</strong> : déploie n'importe quelle app web (Node, Python, Go, Rust) avec détection automatique du runtime.</li>
<li><strong>Background Workers</strong> : pour les tâches asynchrones et les jobs de longue durée.</li>
<li><strong>Cron Jobs</strong> : exécute des scripts sur un schedule défini (scraping, rapports, nettoyage de données).</li>
<li><strong>Static Sites</strong> : hébergement gratuit pour les sites statiques avec HTTPS et CDN.</li>
<li><strong>Managed PostgreSQL</strong> : base de données managée avec backups automatiques.</li>
</ul>
<p>Le plan gratuit de Render a une limitation : les services gratuits se mettent en veille après 15 minutes d'inactivité. Le premier appel peut prendre 30-60 secondes (cold start). Pour un produit en production, passe au plan payant — ça vaut les 7€/mois pour un service toujours actif.</p>

<h2>Comment choisir ta plateforme</h2>
<p>Voici un guide décisionnel simple :</p>
<ul>
<li><strong>App Next.js / frontend-heavy</strong> → Vercel. L'intégration est native, la performance est optimale, et les preview deployments sont un game-changer pour le développement.</li>
<li><strong>App full-stack avec base de données</strong> → Railway. Simplicité + flexibilité + pricing au usage.</li>
<li><strong>App backend / API / workers</strong> → Render ou Railway selon tes préférences.</li>
<li><strong>Plusieurs services (microservices)</strong> → Railway (plus facile de gérer plusieurs services dans un seul projet).</li>
</ul>
<p>Conseil : ne te prends pas la tête sur le choix. Ces 3 plateformes sont excellentes, et migrer de l'une à l'autre est relativement simple. L'important, c'est de déployer — pas de passer 3 jours à comparer des features. Choisis, déploie, itère.</p>

<h2>Les erreurs de déploiement courantes (et comment les éviter)</h2>
<ul>
<li><strong>Variables d'environnement oubliées</strong> : l'erreur la plus fréquente. Ton app crash en production parce qu'une clé API n'est pas définie. Vérifie systématiquement que chaque variable de ton .env.local est configurée sur la plateforme.</li>
<li><strong>Build qui échoue</strong> : souvent dû à des dépendances manquantes ou des erreurs TypeScript que tu ignores en local. Lance toujours un build local avant de déployer.</li>
<li><strong>Base de données non accessible</strong> : si ta DB est locale, elle ne sera pas accessible depuis le cloud. Utilise la DB managée de ta plateforme ou un service comme Supabase, PlanetScale, ou Neon.</li>
<li><strong>CORS mal configuré</strong> : si ton frontend et ton backend sont sur des domaines différents, configure les headers CORS correctement sinon les requêtes seront bloquées.</li>
</ul>`,
    exercise: `<ol>
<li>Prends une app que tu as codée avec Claude Code et déploie-la sur Vercel (ou Railway si elle a une base de données). Documente chaque étape et note les problèmes rencontrés.</li>
<li>Configure les variables d'environnement sur ta plateforme de déploiement. Vérifie que chaque variable de ton .env.local est présente et que l'app fonctionne correctement en production.</li>
<li>Fais un changement dans ton code, pousse sur GitHub, et vérifie que le déploiement automatique se déclenche et se termine avec succès. Teste l'app en production après le déploiement.</li>
</ol>`,
  },
  {
    order: 127,
    module: 15,
    title: "Domaines, SSL et configuration pro",
    slug: "domaines-ssl-configuration-pro",
    duration: "45 min",
    description: "Configure un domaine personnalisé, SSL et DNS pour donner un look professionnel à tes apps.",
    content: `<h2>Pourquoi un domaine personnalisé change tout</h2>
<p>Ton app tourne sur mon-app-xyz.vercel.app. C'est fonctionnel, mais c'est le signe d'un projet amateur. Si tu veux vendre ton app ou tes services, tu as besoin d'un domaine professionnel. La différence entre monapp.vercel.app et monapp.fr, c'est la différence entre un stand au marché aux puces et une boutique avec pignon sur rue. Le domaine, c'est ton adresse professionnelle sur internet.</p>
<p>Un bon domaine coûte entre 5€ et 15€ par an. C'est l'investissement le plus rentable que tu puisses faire pour la crédibilité de ton produit. Et la configuration prend 10 minutes — pas 10 heures.</p>

<h2>Choisir et acheter ton domaine</h2>
<p>Où acheter ton domaine :</p>
<ul>
<li><strong>Namecheap</strong> : le moins cher, interface simple, DNS intégré. Mon choix par défaut.</li>
<li><strong>Cloudflare Registrar</strong> : prix coûtant (pas de marge), avec le CDN et la protection DDoS de Cloudflare inclus gratuitement. Excellent choix technique.</li>
<li><strong>OVH</strong> : le registrar français, bon pour les .fr à bas prix.</li>
<li><strong>Google Domains</strong> (maintenant Squarespace) : simple et fiable si tu es dans l'écosystème Google.</li>
</ul>
<p>Conseils pour choisir ton nom de domaine :</p>
<ul>
<li>Court et mémorable (max 15 caractères si possible)</li>
<li>Facile à épeler et à prononcer</li>
<li>.com si disponible, sinon .io pour la tech, .fr pour le marché français, .app pour les applications</li>
<li>Évite les tirets, les chiffres, et les extensions exotiques (.xyz, .club) — ça fait spam</li>
<li>Vérifie que le nom n'est pas une marque déposée (inpi.fr pour la France)</li>
</ul>

<h2>Configurer le DNS : les bases</h2>
<p>Le DNS (Domain Name System), c'est le système qui traduit ton nom de domaine en adresse IP. Quand quelqu'un tape monapp.fr, le DNS lui dit "va voir le serveur à l'adresse 123.45.67.89." C'est comme un annuaire téléphonique pour internet.</p>
<p>Les enregistrements DNS que tu dois connaître :</p>
<ul>
<li><strong>A Record</strong> : pointe ton domaine vers une adresse IPv4. Exemple : monapp.fr → 76.76.21.21 (IP de Vercel).</li>
<li><strong>CNAME Record</strong> : crée un alias vers un autre domaine. Exemple : www.monapp.fr → cname.vercel-dns.com. C'est ce que tu utilises le plus souvent avec les plateformes cloud.</li>
<li><strong>MX Record</strong> : pour les emails. Si tu veux recevoir des emails sur contact@monapp.fr, tu configures les MX vers ton fournisseur email (Google Workspace, Zoho Mail).</li>
<li><strong>TXT Record</strong> : utilisé pour la vérification de propriété et la sécurité email (SPF, DKIM, DMARC).</li>
</ul>

<h2>Connecter ton domaine à Vercel / Railway / Render</h2>
<p>Sur Vercel (le plus courant) :</p>
<ul>
<li>Va dans Settings → Domains de ton projet</li>
<li>Ajoute ton domaine (monapp.fr)</li>
<li>Vercel te donne les DNS records à configurer</li>
<li>Va chez ton registrar, ajoute les records DNS</li>
<li>Attends 5-30 minutes (propagation DNS)</li>
<li>Vercel détecte automatiquement la configuration et active le domaine</li>
</ul>
<p>Sur Railway et Render, le processus est similaire : ajoute le domaine dans les settings, configure un CNAME chez ton registrar, et la plateforme s'occupe du reste.</p>

<h2>SSL : le cadenas vert, c'est non-négociable</h2>
<p>SSL (Secure Sockets Layer) / TLS, c'est ce qui met le "S" dans HTTPS. C'est le protocole qui chiffre les communications entre le navigateur de ton utilisateur et ton serveur. Sans SSL, les données voyagent en clair — mots de passe, informations personnelles, tout est lisible par n'importe qui sur le réseau.</p>
<p>En 2025, ne pas avoir SSL c'est :</p>
<ul>
<li>Un signal d'alarme pour les utilisateurs (Chrome affiche "Non sécurisé" en rouge)</li>
<li>Un désavantage SEO (Google pénalise les sites sans HTTPS)</li>
<li>Un risque légal (RGPD exige la protection des données en transit)</li>
<li>Un suicide commercial (personne ne mettra sa carte bancaire sur un site non sécurisé)</li>
</ul>
<p>La bonne nouvelle : Vercel, Railway et Render fournissent le SSL automatiquement et gratuitement via Let's Encrypt. Dès que tu connectes ton domaine, le certificat SSL est généré et renouvelé automatiquement. Tu n'as rien à faire.</p>
<p>Si tu héberges toi-même, utilise Certbot (Let's Encrypt) ou Cloudflare en proxy (SSL automatique + CDN + protection DDoS gratuite). Cloudflare est particulièrement intéressant : tu pointes ton DNS vers Cloudflare, et ils gèrent le SSL, le cache, et la sécurité.</p>

<h2>Configuration pro : les détails qui comptent</h2>
<p>Au-delà du domaine et du SSL, voici les configurations pro à mettre en place :</p>
<ul>
<li><strong>Email professionnel</strong> : contact@monapp.fr plutôt que monapp.contact@gmail.com. Google Workspace (6€/mois) ou Zoho Mail (gratuit pour 1 utilisateur). Ça change complètement la perception de crédibilité.</li>
<li><strong>Favicon et meta tags</strong> : un favicon (l'icône dans l'onglet du navigateur) et des meta tags OG (Open Graph) pour que tes liens partagés sur les réseaux sociaux aient une belle preview. Claude Code peut te générer les balises en 30 secondes.</li>
<li><strong>Redirections</strong> : configure une redirection de www vers non-www (ou l'inverse) pour éviter le contenu dupliqué. Vercel gère ça automatiquement.</li>
<li><strong>Headers de sécurité</strong> : Content-Security-Policy, X-Frame-Options, X-Content-Type-Options. Ces headers protègent ton app contre les attaques courantes (XSS, clickjacking). Ajoute-les dans ton next.config.js.</li>
<li><strong>Robots.txt et sitemap</strong> : pour le SEO. Le robots.txt dit aux moteurs de recherche quelles pages indexer, le sitemap leur donne la structure de ton site. Next.js peut générer le sitemap automatiquement.</li>
</ul>`,
    exercise: `<ol>
<li>Achète un domaine pour un de tes projets (ou utilise un domaine que tu possèdes déjà) et connecte-le à ta plateforme de déploiement. Vérifie que le SSL fonctionne en visitant https://tondomaine.com.</li>
<li>Configure les meta tags OG (titre, description, image) et le favicon de ton app. Teste le rendu de ton lien sur les réseaux sociaux avec opengraph.xyz ou metatags.io.</li>
<li>Mets en place un email professionnel (Zoho Mail gratuit ou Google Workspace) sur ton domaine et configure les records DNS associés (MX, SPF, DKIM).</li>
</ol>`,
  },
  {
    order: 128,
    module: 15,
    title: "Monitoring et alertes : garder tes apps en ligne",
    slug: "monitoring-alertes-garder-apps-en-ligne",
    duration: "50 min",
    description: "Mets en place un monitoring intelligent pour détecter les problèmes avant tes utilisateurs.",
    content: `<h2>Ton app est en production — maintenant, il faut qu'elle reste debout</h2>
<p>Tu as déployé ton app, tu as des utilisateurs, peut-être même des clients qui paient. Et là, un samedi soir à 23h, ton app crash. Tes utilisateurs voient une erreur 500, tes clients ne peuvent plus accéder au service qu'ils paient. Et toi, tu ne le sais même pas — tu le découvres le lundi matin en voyant 15 emails furieux. Ce scénario est évitable à 100% avec un bon monitoring.</p>
<p>Le monitoring, c'est comme une alarme dans une maison : tu espères qu'elle ne sonnera jamais, mais le jour où il y a un problème, elle te sauve. Et en production, les problèmes arrivent toujours. Un serveur qui sature, une API externe qui tombe, une mise à jour qui casse quelque chose — la question n'est pas SI, mais QUAND.</p>

<h2>Les 3 couches du monitoring</h2>
<p>Un monitoring efficace couvre 3 niveaux :</p>
<ul>
<li><strong>Uptime monitoring</strong> : est-ce que ton app répond ? Un service externe envoie une requête à ton URL toutes les X minutes et te notifie si elle ne répond pas. C'est la base — si ton app est down, tu le sais en moins de 5 minutes.</li>
<li><strong>Error tracking</strong> : est-ce que ton app fonctionne correctement ? Même si elle répond, il peut y avoir des erreurs JavaScript, des requêtes API qui échouent, des exceptions non gérées. L'error tracking capture chaque erreur avec son contexte (stack trace, navigateur, URL, utilisateur).</li>
<li><strong>Performance monitoring</strong> : est-ce que ton app est rapide ? Les pages chargent en combien de temps ? Les requêtes API prennent combien de millisecondes ? La performance est invisible quand tout va bien, mais elle tue l'expérience utilisateur quand ça ralentit.</li>
</ul>

<h2>Uptime monitoring : les outils</h2>
<p>L'uptime monitoring est le plus simple à mettre en place et le plus critique :</p>
<ul>
<li><strong>Better Uptime (betterstack.com)</strong> : le plus complet. Monitoring HTTP, pages de statut publiques, alertes par email/SMS/Slack, rapports d'incidents. Plan gratuit généreux (10 monitors, checks toutes les 3 minutes).</li>
<li><strong>UptimeRobot</strong> : le classique. Gratuit pour 50 monitors avec des checks toutes les 5 minutes. Interface simple, alertes par email et webhook. Parfait pour démarrer.</li>
<li><strong>Checkly</strong> : monitoring avancé avec des checks programmables en JavaScript. Tu peux vérifier non seulement que ta page charge, mais aussi que le formulaire de login fonctionne, que l'API retourne les bonnes données, etc.</li>
</ul>
<p>Configuration recommandée : crée un monitor pour chaque endpoint critique de ton app. Ta page d'accueil, ta page de login, ton API principale, et ta page de pricing (si c'est un SaaS). Si tu as une API, monitore aussi le health check endpoint (/api/health).</p>

<h2>Error tracking : Sentry, la référence</h2>
<p>Sentry est l'outil d'error tracking le plus utilisé dans l'industrie, et il a un plan gratuit qui suffit largement pour démarrer (5 000 erreurs/mois). Voici comment l'intégrer :</p>
<ul>
<li><strong>Installation</strong> : lance npx @sentry/wizard@latest -i nextjs dans ton projet. Le wizard configure tout automatiquement : SDK, configuration, source maps.</li>
<li><strong>Ce que Sentry capture</strong> : chaque erreur JavaScript (frontend et backend), avec le stack trace complet, le navigateur de l'utilisateur, l'URL, le breadcrumb des actions qui ont mené à l'erreur. Tu peux reproduire le problème sans deviner.</li>
<li><strong>Alertes intelligentes</strong> : configure des alertes pour être notifié quand une nouvelle erreur apparaît, quand une erreur se répète plus de X fois, ou quand le taux d'erreur dépasse un seuil. Slack, email, ou PagerDuty pour les alertes critiques.</li>
<li><strong>Performance monitoring</strong> : Sentry intègre aussi du monitoring de performance — temps de chargement des pages, durée des requêtes API, Web Vitals. Tout dans un seul outil.</li>
</ul>

<h2>Logs : comprendre ce qui se passe en coulisses</h2>
<p>Les erreurs captées par Sentry sont la partie visible de l'iceberg. Les logs, c'est tout le reste — les informations de debug, les actions des utilisateurs, les requêtes entrantes. En production, tu ne peux pas faire console.log et regarder le terminal — tu as besoin d'un système de logging centralisé.</p>
<ul>
<li><strong>Vercel Logs</strong> : si tu es sur Vercel, les logs de tes Serverless Functions sont disponibles dans le dashboard. C'est basique mais suffisant pour commencer.</li>
<li><strong>Axiom</strong> : le meilleur rapport qualité/prix pour les logs. Intégration native avec Vercel et Next.js, requêtes puissantes, plan gratuit généreux (500 MB/mois). Tu peux rechercher, filtrer et analyser tes logs avec une interface moderne.</li>
<li><strong>LogTail (Better Stack)</strong> : alternative solide, du même éditeur que Better Uptime. Log management + uptime monitoring dans la même plateforme.</li>
</ul>

<h2>Créer une page de statut publique</h2>
<p>Si tu as des clients qui paient, une page de statut publique est indispensable. C'est une page (status.monapp.fr) qui affiche en temps réel si tes services fonctionnent ou non. Quand il y a un incident, les utilisateurs vérifient la page de statut au lieu de t'envoyer 50 messages.</p>
<p>Better Uptime et Instatus proposent des pages de statut gratuites et élégantes. Tu les connectes à tes monitors, et elles se mettent à jour automatiquement. Quand un monitor détecte un problème, la page de statut passe en jaune ou rouge, et tes utilisateurs sont informés sans que tu lèves le petit doigt.</p>

<h2>La routine de monitoring quotidienne</h2>
<p>Mets en place cette routine de 5 minutes par jour :</p>
<ul>
<li>Matin : vérifie le dashboard Sentry — nouvelles erreurs ? Erreurs récurrentes ?</li>
<li>Vérifie les métriques de performance — temps de réponse stable ? Pics inhabituels ?</li>
<li>Vérifie tes alertes — des notifications pendant la nuit ?</li>
<li>Hebdomadaire : analyse les tendances — le nombre d'erreurs augmente ou diminue ? La performance se dégrade ?</li>
</ul>
<p>5 minutes par jour de monitoring proactif te sauvent des heures de debugging réactif et des clients perdus.</p>`,
    exercise: `<ol>
<li>Crée un compte UptimeRobot ou Better Uptime et configure un monitor pour chaque page critique de ton app (accueil, API, login). Teste en faisant tomber ton app volontairement et vérifie que l'alerte arrive.</li>
<li>Intègre Sentry dans un de tes projets Next.js avec npx @sentry/wizard. Déclenche une erreur volontaire en production et vérifie qu'elle apparaît dans le dashboard Sentry avec le stack trace complet.</li>
<li>Crée une page de statut publique pour ton app avec Better Uptime ou Instatus. Connecte-la à tes monitors et partage l'URL avec un ami pour valider qu'elle est accessible et claire.</li>
</ol>`,
  },
  {
    order: 129,
    module: 15,
    title: "Mises à jour et versioning avec Claude Code",
    slug: "mises-a-jour-versioning-claude-code",
    duration: "45 min",
    description: "Maintiens et fais évoluer tes apps en production avec un workflow git solide et Claude Code.",
    content: `<h2>Ton app est live — et maintenant ?</h2>
<p>La v1 est en production, les utilisateurs arrivent, les feedbacks tombent. Et c'est là que beaucoup de makers font une erreur fatale : ils codent des changements directement en production, cassent des trucs, et passent leur week-end à éteindre des incendies. La maintenance d'une app en production, c'est un art. Et comme tout art, ça s'apprend. Aujourd'hui, on va mettre en place un workflow de mise à jour qui te permet d'itérer rapidement sans jamais casser ce qui marche.</p>

<h2>Le workflow git pour un solo dev en production</h2>
<p>Tu n'as pas besoin de Gitflow ou de processus d'entreprise compliqués. Voici un workflow simple et efficace pour un dev solo ou une petite équipe :</p>
<ul>
<li><strong>Branch main</strong> : c'est la production. Ce qui est sur main est déployé automatiquement. On ne push JAMAIS directement sur main.</li>
<li><strong>Branches de feature</strong> : pour chaque changement (nouveau feature, bugfix, amélioration), tu crées une branche : git checkout -b feature/ajout-export-csv ou fix/correction-login-mobile. Le nom décrit ce que fait la branche.</li>
<li><strong>Pull Requests</strong> : même si tu es seul, passe par des PRs. Ça te force à revoir ton code, et les preview deployments de Vercel te permettent de tester en conditions réelles avant de merger.</li>
<li><strong>Merge et deploy</strong> : quand ta PR est prête et testée, tu merges dans main. Vercel (ou ta plateforme) déploie automatiquement. Si quelque chose casse, tu reverts la PR et tu es back à l'état précédent en 30 secondes.</li>
</ul>

<h2>Utiliser Claude Code pour la maintenance</h2>
<p>Claude Code est un outil de maintenance extraordinaire. Voici comment l'utiliser efficacement pour gérer une app en production :</p>
<ul>
<li><strong>Résoudre les bugs</strong> : colle le message d'erreur de Sentry à Claude Code avec le contexte ("Cette erreur apparaît quand un utilisateur non authentifié accède à /dashboard"). Claude analyse le code, identifie la cause, et propose un fix.</li>
<li><strong>Ajouter des features</strong> : décris la feature en langage naturel ("Ajoute un bouton d'export CSV sur la page /analytics qui exporte les données des 30 derniers jours"). Claude génère le code complet — composant, route API, logique d'export.</li>
<li><strong>Refactoring</strong> : "Refactore le composant UserDashboard pour séparer la logique de fetch des données et l'affichage." Claude comprend les patterns React et produit du code propre et maintenable.</li>
<li><strong>Mise à jour des dépendances</strong> : "Mets à jour les dépendances obsolètes et corrige les breaking changes." Claude peut analyser les changelogs et adapter ton code aux nouvelles versions.</li>
</ul>
<p>Astuce clé : donne toujours du contexte à Claude Code. Plus il comprend ton app (architecture, base de données, conventions), plus ses contributions sont pertinentes. Commence chaque session de maintenance par un résumé du contexte.</p>

<h2>Versioning sémantique : communiquer tes changements</h2>
<p>Le versioning sémantique (SemVer) est la convention standard pour numéroter tes versions : MAJOR.MINOR.PATCH (ex: 1.3.2).</p>
<ul>
<li><strong>PATCH (1.3.X)</strong> : corrections de bugs, sans changement de fonctionnalité. Tes utilisateurs ne voient aucune différence, sauf que le bug est corrigé.</li>
<li><strong>MINOR (1.X.0)</strong> : nouvelles fonctionnalités rétrocompatibles. Tes utilisateurs découvrent de nouveaux features, mais rien de ce qui marchait avant n'est cassé.</li>
<li><strong>MAJOR (X.0.0)</strong> : changements qui cassent la rétrocompatibilité. Refonte d'interface, migration de base de données, changement d'API. À communiquer clairement aux utilisateurs.</li>
</ul>
<p>Pour un SaaS, utilise le versioning sémantique dans tes releases GitHub et ta documentation. Pour un outil vendu en licence, le numéro de version est encore plus important — les acheteurs veulent savoir si leur licence inclut les mises à jour majeures.</p>

<h2>Le changelog : tenir tes utilisateurs informés</h2>
<p>Un changelog, c'est un journal des modifications de ton app. Chaque fois que tu déploies une mise à jour significative, ajoute une entrée. Ça montre à tes utilisateurs que le produit est vivant et qu'il s'améliore constamment.</p>
<p>Outils pour gérer ton changelog :</p>
<ul>
<li><strong>Page changelog dans ton app</strong> : une page /changelog dans ton SaaS avec la liste des mises à jour. Les utilisateurs adorent voir les nouveautés.</li>
<li><strong>Notification in-app</strong> : un petit badge "New" sur le menu qui indique qu'il y a des nouveautés. Quand l'utilisateur clique, il voit le changelog.</li>
<li><strong>Email de release</strong> : un email mensuel à tes utilisateurs avec les principales améliorations. C'est aussi une occasion de rappeler la valeur de ton produit et de réduire le churn.</li>
</ul>

<h2>Les mises à jour critiques : base de données et migrations</h2>
<p>Les modifications de base de données sont les plus délicates en production. Un mauvais ALTER TABLE peut causer un downtime. Voici les bonnes pratiques :</p>
<ul>
<li><strong>Utilise un ORM avec migrations</strong> : Prisma (le plus populaire en Next.js) gère les migrations de base de données. Chaque changement de schéma crée un fichier de migration versionné que tu peux appliquer en production de manière contrôlée.</li>
<li><strong>Teste les migrations en staging</strong> : avant d'appliquer une migration en production, teste-la sur une copie de ta base de données. Railway et Render permettent de créer facilement un environnement de staging.</li>
<li><strong>Migrations rétrocompatibles</strong> : ajoute d'abord les nouvelles colonnes (optionnelles), déploie le code qui les utilise, puis supprime les anciennes colonnes dans une migration suivante. Jamais de renommage ou de suppression de colonne en une seule étape.</li>
<li><strong>Backups avant migration</strong> : toujours. Un pg_dump de ta base avant d'appliquer une migration. Si ça casse, tu restaures en 5 minutes au lieu de passer la nuit à reconstruire.</li>
</ul>

<h2>Automatiser ta routine de maintenance</h2>
<p>Mets en place ces automatisations pour gagner du temps :</p>
<ul>
<li>Dependabot ou Renovate pour les mises à jour de dépendances automatiques (PRs créées automatiquement)</li>
<li>GitHub Actions pour les tests automatiques à chaque PR (lint, tests unitaires, build)</li>
<li>Un cron job qui backup ta base de données toutes les nuits</li>
<li>Un script qui vérifie les certificats SSL et te notifie 30 jours avant expiration</li>
</ul>`,
    exercise: `<ol>
<li>Mets en place le workflow git décrit : crée une branche feature, fais un changement dans ton app, ouvre une PR sur GitHub, vérifie le preview deployment sur Vercel, puis merge et vérifie le déploiement automatique.</li>
<li>Utilise Claude Code pour résoudre un bug ou ajouter une feature à ton app en production. Documente le prompt que tu as utilisé, le code généré, et le résultat final.</li>
<li>Crée une page /changelog dans ton app (même minimaliste) et ajoute 3 entrées de changelog : une correction de bug, une nouvelle fonctionnalité, et une amélioration de performance.</li>
</ol>`,
  },
  {
    order: 130,
    module: 15,
    title: "Sécurité : protéger tes apps et les données clients",
    slug: "securite-proteger-apps-donnees-clients",
    duration: "55 min",
    description: "Les fondamentaux de la sécurité web pour protéger tes apps et respecter le RGPD.",
    content: `<h2>La sécurité n'est pas optionnelle</h2>
<p>Tu as une app en production avec des utilisateurs. Peut-être même des clients qui te paient et te confient des données. Si tu te fais hacker, c'est game over. Pas juste pour l'app — pour ta réputation, ton business, et potentiellement ta responsabilité légale. En France, le RGPD te rend personnellement responsable de la protection des données de tes utilisateurs. Une fuite de données peut te coûter une amende de 4% de ton chiffre d'affaires (ou 20 millions d'euros pour les grosses boîtes).</p>
<p>Mais pas de panique : la sécurité web, ce n'est pas de la magie noire. C'est un ensemble de bonnes pratiques que tu peux appliquer dès maintenant. 80% de la sécurité, c'est de la discipline et des réflexes simples. Voyons les fondamentaux.</p>

<h2>L'authentification : la première ligne de défense</h2>
<p>L'authentification, c'est la porte d'entrée de ton app. Si elle est faible, tout le reste est compromis. Les bonnes pratiques :</p>
<ul>
<li><strong>Utilise un service d'auth éprouvé</strong> : Clerk, NextAuth, Supabase Auth, ou Auth0. Ne code JAMAIS ton propre système d'authentification from scratch. Les failles auth sont les plus exploitées et les plus dangereuses. Ces services gèrent le hashing des mots de passe, la protection contre le brute force, le 2FA, et les sessions sécurisées.</li>
<li><strong>Hashage des mots de passe</strong> : si tu stockes des mots de passe (ce que tu ne devrais pas faire si tu utilises un service d'auth), utilise bcrypt avec un salt unique par utilisateur. JAMAIS de MD5, SHA1, ou stockage en clair. Bcrypt est intentionnellement lent — c'est sa force, ça rend le brute force quasi impossible.</li>
<li><strong>Sessions et tokens</strong> : utilise des JWT (JSON Web Tokens) avec une expiration courte (15 min pour l'access token, 7 jours pour le refresh token). Stocke les tokens dans des cookies httpOnly (pas dans localStorage — vulnérable au XSS).</li>
<li><strong>Autorisation</strong> : l'auth vérifie QUI tu es, l'autorisation vérifie CE QUE tu peux faire. Chaque route API doit vérifier que l'utilisateur connecté a le droit d'accéder à cette ressource. Un utilisateur ne doit jamais pouvoir voir les données d'un autre utilisateur.</li>
</ul>

<h2>HTTPS partout, tout le temps</h2>
<p>HTTPS chiffre les communications entre le navigateur et ton serveur. Sans HTTPS, un attaquant sur le même réseau WiFi peut intercepter tout le trafic — mots de passe, données personnelles, cookies de session. Toutes les plateformes modernes (Vercel, Railway, Render) fournissent le SSL automatiquement. Vérifie simplement que ton app ne fait jamais de requêtes HTTP (sans S) — utilise des redirections automatiques de HTTP vers HTTPS.</p>

<h2>Variables d'environnement : les secrets bien gardés</h2>
<p>Tes clés API, tes secrets JWT, tes URLs de base de données — ce sont des secrets qui ne doivent JAMAIS apparaître dans ton code source. Les règles :</p>
<ul>
<li><strong>.env.local</strong> : stocke tes secrets en local dans un fichier .env.local. Ce fichier ne doit JAMAIS être commité dans git. Vérifie que .env.local est dans ton .gitignore.</li>
<li><strong>Variables d'environnement sur la plateforme</strong> : en production, configure tes secrets dans les settings de Vercel/Railway/Render. Jamais dans le code.</li>
<li><strong>Rotation des clés</strong> : si une clé API est exposée accidentellement (dans un commit, un screenshot, un message Slack), considère-la comme compromise. Regénère-la immédiatement.</li>
<li><strong>Différencier les environnements</strong> : utilise des clés différentes pour le développement, le staging, et la production. Si ta clé de dev est exposée, tes données de production ne sont pas compromises.</li>
</ul>

<h2>Prévenir les attaques courantes</h2>
<p>Voici les attaques les plus fréquentes et comment les prévenir :</p>
<ul>
<li><strong>SQL Injection</strong> : l'attaquant injecte du code SQL dans tes formulaires pour accéder ou modifier ta base de données. Prévention : utilise TOUJOURS un ORM (Prisma) ou des requêtes paramétrées. Jamais de concaténation de strings dans tes requêtes SQL. Si tu utilises Prisma, tu es protégé par défaut.</li>
<li><strong>XSS (Cross-Site Scripting)</strong> : l'attaquant injecte du JavaScript malicieux dans ta page pour voler des cookies, des données, ou rediriger les utilisateurs. Prévention : React échappe automatiquement le HTML dans les composants. Mais attention à dangerouslySetInnerHTML — n'utilise jamais ce prop avec des données non validées. Ajoute le header Content-Security-Policy pour limiter les scripts exécutables.</li>
<li><strong>CSRF (Cross-Site Request Forgery)</strong> : l'attaquant force un utilisateur connecté à exécuter une action non désirée. Prévention : utilise des tokens CSRF pour les formulaires, et vérifie l'origine des requêtes côté serveur.</li>
<li><strong>Rate Limiting</strong> : sans rate limiting, un attaquant peut bombarder ton API avec des millions de requêtes (brute force, DoS). Implémente un rate limiter sur tes routes sensibles (login, register, API publique). Upstash Redis + @upstash/ratelimit est une solution élégante pour Next.js.</li>
</ul>

<h2>RGPD : les obligations légales</h2>
<p>Si tu collectes des données personnelles d'utilisateurs européens (et tu le fais dès que tu as un formulaire de login), tu dois respecter le RGPD :</p>
<ul>
<li><strong>Consentement explicite</strong> : l'utilisateur doit consentir à la collecte de ses données. Un bandeau cookies conforme avec la possibilité de refuser. Les cases pré-cochées sont interdites.</li>
<li><strong>Droit d'accès et de suppression</strong> : l'utilisateur doit pouvoir voir ses données et demander leur suppression. Prévois un mécanisme (page de profil ou email de contact).</li>
<li><strong>Minimisation des données</strong> : ne collecte que les données dont tu as réellement besoin. Si tu n'as pas besoin de la date de naissance, ne la demande pas.</li>
<li><strong>Politique de confidentialité</strong> : une page accessible qui explique quelles données tu collectes, pourquoi, combien de temps tu les gardes, et qui y a accès. Des générateurs gratuits existent (gdpr.eu/privacy-policy-generator).</li>
<li><strong>Registre des traitements</strong> : documente les traitements de données personnelles que tu effectues. Pour un petit SaaS, un simple tableau Notion suffit.</li>
</ul>

<h2>Checklist de sécurité avant le lancement</h2>
<ul>
<li>Authentification via un service éprouvé (Clerk, NextAuth, etc.)</li>
<li>HTTPS activé et forcé sur tous les endpoints</li>
<li>Variables d'environnement configurées, .env.local dans .gitignore</li>
<li>Rate limiting sur les routes sensibles</li>
<li>Pas de données sensibles dans les URLs ou les logs</li>
<li>Headers de sécurité configurés (CSP, X-Frame-Options)</li>
<li>Politique de confidentialité et bandeau cookies conformes RGPD</li>
<li>Backups automatiques de la base de données</li>
</ul>`,
    exercise: `<ol>
<li>Audite un de tes projets en production : vérifie que le .gitignore contient .env.local, que les clés API ne sont pas hardcodées dans le code, et que HTTPS est forcé. Corrige les failles trouvées.</li>
<li>Implémente un rate limiter sur la route de login de ton app avec Upstash Redis ou une solution similaire. Teste en envoyant 20 requêtes rapides et vérifie que le rate limit se déclenche.</li>
<li>Crée une politique de confidentialité pour ton app (utilise un générateur en ligne) et ajoute un bandeau cookies conforme RGPD. Vérifie que le refus des cookies fonctionne correctement.</li>
</ol>`,
  },
  {
    order: 131,
    module: 15,
    title: "Itérer et améliorer : de la v1 à la v10",
    slug: "iterer-ameliorer-v1-v10",
    duration: "50 min",
    description: "Apprends à prioriser les features, collecter du feedback et améliorer continuellement ton produit.",
    content: `<h2>La v1 n'est que le début</h2>
<p>Tu as lancé. Félicitations — tu fais déjà mieux que 90% des gens qui ont des idées mais ne les exécutent jamais. Mais ta v1 n'est pas un produit fini. C'est un point de départ. Les meilleurs produits du monde — Notion, Figma, Linear — sont le résultat de centaines d'itérations. La magie n'est pas dans le lancement, elle est dans ce qui vient après : écouter, apprendre, améliorer, et recommencer.</p>
<p>L'erreur classique du maker : tu lances ta v1, tu reçois du feedback, et tu te mets à coder toutes les features demandées en même temps. Résultat : 3 mois plus tard, tu as un produit bloated, incohérent, et tu ne sais plus dans quelle direction aller. L'itération, c'est un process discipliné — pas un buffet à volonté.</p>

<h2>Collecter du feedback qui compte</h2>
<p>Tout feedback n'est pas égal. Voici comment collecter du feedback actionnable :</p>
<ul>
<li><strong>Feedback quantitatif (analytics)</strong> : installe PostHog, Plausible, ou Mixpanel pour comprendre COMMENT les gens utilisent ton app. Quelles pages visitent-ils ? Où abandonnent-ils ? Quels features utilisent-ils le plus ? Les données ne mentent pas et révèlent des patterns invisibles à l'oeil nu.</li>
<li><strong>Feedback qualitatif (conversations)</strong> : parle à tes utilisateurs. Pas par email, pas par formulaire — par visio ou téléphone. 5 conversations de 15 minutes t'apprendront plus que 100 réponses à un sondage. Questions clés : "Qu'est-ce qui t'a fait commencer à utiliser l'outil ?", "Qu'est-ce qui t'empêche de l'utiliser plus souvent ?", "Si tu pouvais changer une seule chose, ce serait quoi ?"</li>
<li><strong>Feedback automatisé (in-app)</strong> : ajoute un bouton "Feedback" dans ton app qui ouvre un petit formulaire. Certains outils comme Canny ou Featurebase te permettent de collecter et prioriser les demandes de features avec un système de votes.</li>
<li><strong>Support comme source de feedback</strong> : chaque ticket de support est une opportunité d'apprentissage. Si 5 utilisateurs posent la même question, c'est un signal que quelque chose n'est pas clair dans ton app — pas qu'ils sont bêtes.</li>
</ul>

<h2>Prioriser avec le framework ICE</h2>
<p>Tu vas toujours avoir plus d'idées que de temps. Le framework ICE t'aide à prioriser objectivement :</p>
<ul>
<li><strong>I — Impact</strong> : quel est l'impact de cette feature sur ton objectif principal ? (1 = faible, 10 = transformationnel). Si ton objectif est de réduire le churn, une feature qui améliore l'onboarding a plus d'impact qu'un mode sombre.</li>
<li><strong>C — Confidence</strong> : à quel point es-tu sûr de l'impact ? (1 = hypothèse, 10 = donnée confirmée). Si 20 utilisateurs t'ont demandé l'export CSV, ta confidence est élevée. Si c'est une idée que tu as eue sous la douche, elle est basse.</li>
<li><strong>E — Ease</strong> : quelle est la facilité d'implémentation ? (1 = 3 mois de dev, 10 = 2 heures). Avec Claude Code, beaucoup de features passent de 3 à 8 sur l'échelle de facilité.</li>
</ul>
<p>Score ICE = (Impact + Confidence + Ease) / 3. Trie tes idées par score ICE et commence par le haut. C'est simple, objectif, et ça évite le piège du "je code ce qui m'amuse au lieu de ce qui compte."</p>

<h2>Les cycles d'itération</h2>
<p>Adopte un rythme d'itération régulier. Voici un cycle de 2 semaines qui marche bien pour un dev solo :</p>
<ul>
<li><strong>Jours 1-2 : Analyser</strong> — revue des analytics, lecture des feedbacks, priorisation ICE. Résultat : une liste ordonnée de 3-5 tâches pour les 2 prochaines semaines.</li>
<li><strong>Jours 3-8 : Builder</strong> — dev des features/fixes priorisés. Utilise Claude Code pour aller vite. Chaque changement sur une branche séparée, testé via preview deployment.</li>
<li><strong>Jours 9-10 : Tester et déployer</strong> — tests manuels (et automatisés si tu en as), merge des PRs, déploiement en production. Communication aux utilisateurs (changelog, email, notification in-app).</li>
</ul>
<p>Ce cycle de 2 semaines te donne un rythme soutenu mais soutenable. Tu déploies des améliorations toutes les 2 semaines, tes utilisateurs voient le produit évoluer, et tu ne t'épuises pas dans des cycles de dev interminables.</p>

<h2>Savoir quand ne PAS ajouter de features</h2>
<p>Aussi important que de savoir quoi ajouter : savoir dire non. Les produits qui réussissent ne sont pas ceux qui ont le plus de features — ce sont ceux qui font quelques choses exceptionnellement bien.</p>
<p>Dis non quand :</p>
<ul>
<li>La feature est demandée par UN seul utilisateur (attends d'en avoir 3-5 qui demandent la même chose)</li>
<li>La feature t'éloigne de ta proposition de valeur principale</li>
<li>La feature ajoute de la complexité sans résoudre un vrai problème</li>
<li>Tu la codes parce que c'est fun, pas parce que c'est utile</li>
<li>Un concurrent l'a et tu te sens obligé de copier (feature parity trap)</li>
</ul>

<h2>Les métriques qui guident tes itérations</h2>
<p>Pour chaque type de produit, des métriques spécifiques guident tes décisions :</p>
<ul>
<li><strong>SaaS</strong> : MRR, churn rate, activation rate (% d'inscrits qui font l'action clé), NPS (Net Promoter Score)</li>
<li><strong>App grand public</strong> : DAU/MAU (daily/monthly active users), rétention J1/J7/J30, temps moyen par session</li>
<li><strong>Outil B2B</strong> : adoption rate par client, features les plus utilisées, time-to-value (temps entre l'inscription et le premier résultat)</li>
</ul>
<p>Choisis 3-5 métriques max et suis-les de manière obsessionnelle. Ces métriques te disent si tes itérations améliorent réellement le produit ou si tu tournes en rond. Pas besoin d'outils compliqués au début — un spreadsheet mis à jour chaque semaine suffit.</p>

<h2>De la v1 à la v10 : la vision long terme</h2>
<p>Pense à ton produit comme un être vivant qui évolue. La v1, c'est le bébé — fonctionnel mais basique. La v3, c'est l'enfant — il a trouvé son identité et ses forces. La v5, c'est l'ado — il se différencie et attire son public. La v10, c'est l'adulte — solide, fiable, et reconnu dans son domaine. Chaque version est un pas en avant, guidé par les données et le feedback de tes utilisateurs. Le produit parfait n'existe pas — mais un produit qui s'améliore constamment devient indispensable.</p>`,
    exercise: `<ol>
<li>Installe PostHog ou Plausible sur ton app et configure 3 événements de tracking personnalisés : une action clé (création de contenu, export, etc.), un point de friction potentiel (abandon de formulaire), et une action de valeur (upgrade, achat).</li>
<li>Crée un backlog de 10 idées d'amélioration pour ton app et score-les avec le framework ICE (Impact, Confidence, Ease). Identifie les 3 tâches prioritaires et planifie-les dans ton prochain cycle d'itération de 2 semaines.</li>
<li>Contacte 3 utilisateurs de ton app (ou 3 personnes de ta cible) et fais un appel de 15 minutes pour recueillir du feedback qualitatif. Note les patterns communs et transforme-les en actions concrètes.</li>
</ol>`,
  },
];
