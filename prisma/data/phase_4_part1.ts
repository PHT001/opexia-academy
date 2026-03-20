// Phase 4 : S'entraîner - Projets Pratiques — Modules 8-9 (12 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 8 : Projets Pratiques avec Claude (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 46,
    module: 8,
    title: "Projet : Landing page de vente haute conversion",
    slug: "projet-landing-page-vente-haute-conversion",
    duration: "90 min",
    description: "Construire une landing page professionnelle avec hero, bénéfices, témoignages et CTA responsive.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce premier projet pratique, tu vas construire de A à Z une landing page de vente haute conversion. Ce n'est pas un exercice théorique : à la fin de cette leçon, tu auras une page prête à mettre en production, que tu pourras montrer à des clients ou utiliser dans ton portfolio.</p>
<p>Une landing page de vente est la pièce maîtresse de tout business en ligne. C'est la page qui transforme un visiteur en client. Les meilleures convertissent entre 5% et 15% des visiteurs. Pour atteindre ces chiffres, chaque élément compte : le titre, les visuels, la preuve sociale, l'appel à l'action.</p>
<p>Pour te donner une idée concrète, imagine que tu lances un service de coaching en productivité. Ta landing page doit convaincre un visiteur — qui ne te connaît pas encore — de s'inscrire ou d'acheter en quelques minutes seulement. Chaque section de la page joue un rôle précis dans ce processus de persuasion. Sans une landing page optimisée, tu pourrais avoir le meilleur produit du monde et ne jamais trouver de clients.</p>
<p><strong>Astuce :</strong> Avant de commencer à coder, prends 10 minutes pour analyser 3 landing pages de tes concurrents ou de marques que tu admires. Note ce qui fonctionne bien et ce que tu pourrais améliorer. Cette analyse préalable va enrichir considérablement le brief que tu donneras à Claude Code.</p>

<h2>Architecture de la page</h2>
<p>Avant d'écrire la moindre ligne de code, on va planifier la structure. Une landing page haute conversion suit un schéma précis, validé par des années de tests A/B dans le marketing digital :</p>
<ul>
<li><strong>Hero Section</strong> : Titre accrocheur, sous-titre, CTA principal, image ou vidéo — c'est la première impression, tu as 3 secondes pour capter l'attention</li>
<li><strong>Barre de confiance</strong> : Logos de clients ou partenaires (social proof) — les visiteurs se disent "si ces entreprises lui font confiance, je peux aussi"</li>
<li><strong>Section Problème</strong> : Décrire la douleur du client idéal — le visiteur doit se reconnaître et se dire "c'est exactement mon problème"</li>
<li><strong>Section Solution</strong> : Présenter ton produit/service comme LA réponse — le pont entre le problème et le résultat désiré</li>
<li><strong>Bénéfices</strong> : 3 à 6 bénéfices clés avec icônes — pas les fonctionnalités, mais les résultats concrets pour le client</li>
<li><strong>Témoignages</strong> : 3 témoignages clients avec photos et résultats — la preuve que ça marche pour de vraies personnes</li>
<li><strong>Tarification</strong> : Un ou plusieurs plans clairs — le visiteur doit comprendre le prix et la valeur en un coup d'œil</li>
<li><strong>FAQ</strong> : Lever les dernières objections — chaque question non répondue est un client potentiel perdu</li>
<li><strong>CTA final</strong> : Dernière invitation à l'action — une seconde chance pour ceux qui ont scrollé jusqu'en bas sans cliquer</li>
<li><strong>Footer</strong> : Liens légaux, contact, réseaux sociaux — les mentions obligatoires et les signaux de confiance</li>
</ul>
<p>Pense à cette architecture comme un entonnoir de persuasion. Chaque section pousse le visiteur un peu plus vers la décision d'achat. Si tu retires une section, tu crées un "trou" dans l'entonnoir et tu perds des conversions.</p>
<p><strong>Conseil pro :</strong> L'ordre des sections n'est pas arbitraire. Il suit le modèle AIDA (Attention, Intérêt, Désir, Action). Le Hero capte l'Attention, le Problème et la Solution créent l'Intérêt, les Bénéfices et Témoignages suscitent le Désir, et les CTA déclenchent l'Action. Respecte cet ordre pour maximiser tes conversions.</p>

<h2>Étape 1 : Initialiser le projet avec Claude Code</h2>
<p>Ouvre ton terminal et lance Claude Code. On va créer un projet Next.js avec Tailwind CSS :</p>
<p>Donne à Claude Code cette instruction :</p>
<blockquote>Crée un projet Next.js avec Tailwind CSS et TypeScript pour une landing page de vente. Initialise le projet avec une structure de composants : HeroSection, TrustBar, ProblemSection, SolutionSection, BenefitsSection, TestimonialsSection, PricingSection, FAQSection et FooterCTA. Chaque composant dans son propre fichier dans /components/landing/.</blockquote>
<p>Claude Code va générer l'ensemble de la structure. Vérifie que tous les fichiers sont bien créés et que le projet compile sans erreur avec <code>npm run dev</code>.</p>
<p>Pourquoi Next.js et pas du HTML/CSS pur ? Parce que Next.js t'offre l'optimisation des images (next/image), le rendu côté serveur pour le SEO, le routing automatique et un écosystème de composants réutilisables. Pour un projet professionnel, c'est le standard du marché en 2024-2025.</p>
<p><strong>Attention :</strong> Si tu n'as jamais utilisé Next.js, pas de panique. Claude Code va générer tout le code nécessaire. Tu n'as pas besoin de connaître Next.js en profondeur pour suivre ce projet. Concentre-toi sur la compréhension de la structure et du résultat final. Tu apprendras Next.js "par la pratique" au fur et à mesure.</p>
<p><strong>Astuce :</strong> Avant de passer à l'étape suivante, ouvre le projet dans ton navigateur (<code>localhost:3000</code>) et vérifie que la page s'affiche. Même si elle est vide, le fait que le projet compile est un bon signe. Si tu as une erreur, copie-colle le message d'erreur à Claude Code — il saura la corriger.</p>

<h2>Étape 2 : Le Hero Section</h2>
<p>Le hero est la première chose que voit le visiteur. Tu as 3 secondes pour capter son attention. C'est la section la plus importante de toute ta landing page — si le hero ne fonctionne pas, le visiteur part sans même scroller.</p>
<p>Voici ce qu'on va demander à Claude Code :</p>
<blockquote>Crée le composant HeroSection avec : un titre H1 de maximum 10 mots qui promet un résultat concret, un sous-titre de 2 lignes qui développe la promesse, un bouton CTA vert avec texte "Commencer maintenant", une image placeholder à droite sur desktop et en dessous sur mobile. Utilise Tailwind CSS avec des animations subtiles au scroll.</blockquote>
<p>Claude Code va générer un composant responsive. Les points clés à vérifier :</p>
<ul>
<li>Le titre est lisible sur mobile (taille de police adaptative) — teste sur un écran de 375px de large</li>
<li>Le bouton CTA a un contraste suffisant (rapport minimum 4.5:1) — utilise un outil comme WebAIM pour vérifier</li>
<li>L'image ne ralentit pas le chargement (utilise next/image) — les images non optimisées sont le tueur de performance n°1</li>
<li>Le layout passe bien en colonne sur mobile — le texte doit être au-dessus de l'image, pas à côté</li>
</ul>
<p>Prenons un exemple concret. Pour un service de coaching en productivité, un bon hero pourrait être :</p>
<ul>
<li><strong>Titre :</strong> "Double ta productivité en 30 jours"</li>
<li><strong>Sous-titre :</strong> "La méthode utilisée par +500 entrepreneurs pour reprendre le contrôle de leur emploi du temps sans sacrifier leur vie personnelle."</li>
<li><strong>CTA :</strong> "Commencer maintenant — Essai gratuit 14 jours"</li>
</ul>
<p><strong>Conseil pro :</strong> Le titre doit promettre un résultat, pas décrire une fonctionnalité. "Double ta productivité en 30 jours" est 10 fois plus puissant que "Logiciel de gestion du temps". Le visiteur se fiche de ton outil, il veut le résultat. Pense bénéfice, pas fonctionnalité.</p>
<p><strong>Attention :</strong> Évite les animations trop lourdes dans le hero. Un léger fade-in est élégant, mais un carrousel automatique ou une vidéo en autoplay ralentit le chargement et agace les visiteurs. La simplicité convertit mieux que le spectacle.</p>

<h2>Étape 3 : Preuve sociale et témoignages</h2>
<p>Demande à Claude Code :</p>
<blockquote>Crée une TrustBar avec 5 logos de partenaires en niveaux de gris qui défilent en boucle. Ensuite, crée TestimonialsSection avec 3 cartes témoignages contenant : photo ronde, nom, titre du poste, entreprise, texte du témoignage, note sur 5 étoiles. Utilise un carrousel automatique sur mobile et une grille 3 colonnes sur desktop.</blockquote>
<p>La preuve sociale est l'élément le plus puissant pour augmenter les conversions. Des études montrent que les témoignages augmentent les conversions de 34% en moyenne. Assure-toi que les témoignages sont spécifiques et mentionnent des résultats chiffrés.</p>
<p>Pourquoi la preuve sociale fonctionne-t-elle aussi bien ? C'est un biais cognitif appelé "preuve sociale" : quand on hésite, on regarde ce que les autres font. Si 500 personnes ont déjà acheté ton produit et sont satisfaites, un nouveau visiteur se dit "ça doit être bien". C'est le même mécanisme qui fait qu'on choisit le restaurant avec la file d'attente plutôt que celui qui est vide.</p>
<p>Voici les règles d'or pour des témoignages qui convertissent :</p>
<ul>
<li><strong>Spécificité :</strong> "J'ai augmenté mon CA de 47% en 3 mois" est 10 fois plus puissant que "Super produit, je recommande"</li>
<li><strong>Photo réelle :</strong> Un témoignage avec photo convertit 35% de plus qu'un témoignage anonyme</li>
<li><strong>Titre et entreprise :</strong> "Marie Dupont, Directrice Marketing chez TechCorp" crédibilise le témoignage</li>
<li><strong>Résultat mesurable :</strong> Le lecteur doit pouvoir se projeter et se dire "si elle a obtenu ça, moi aussi je peux"</li>
</ul>
<p><strong>Astuce :</strong> Pour un projet de portfolio, utilise des témoignages fictifs mais réalistes. Si c'est pour un vrai client, propose-lui de contacter ses 3 meilleurs clients pour recueillir leurs témoignages. Un email simple comme "Pouvez-vous décrire en 2-3 phrases comment notre service vous a aidé ?" suffit amplement.</p>
<p><strong>Attention :</strong> Ne mets jamais de faux témoignages sur une vraie landing page commerciale. C'est illégal dans beaucoup de pays (pratique commerciale trompeuse) et ça détruit ta crédibilité si c'est découvert. Pour un exercice de portfolio, c'est différent — précise juste que c'est un projet fictif.</p>

<h2>Étape 4 : Bénéfices et tarification</h2>
<p>Continue avec Claude Code pour créer les sections restantes. Pour la section bénéfices, demande 6 cartes avec icônes, titre court et description en 2 lignes. Pour la tarification, demande un tableau comparatif avec 3 plans (Starter, Pro, Enterprise) avec le plan Pro mis en avant visuellement.</p>
<p>La section bénéfices est souvent confondue avec la section fonctionnalités, mais c'est très différent. Une fonctionnalité décrit ce que fait ton produit ("Dashboard analytique en temps réel"). Un bénéfice décrit ce que ton client obtient ("Prends de meilleures décisions en 5 minutes au lieu de 2 heures"). Les bénéfices vendent, les fonctionnalités justifient.</p>
<p>Voici comment structurer chaque carte de bénéfice :</p>
<ul>
<li><strong>Icône :</strong> Un pictogramme simple qui illustre le bénéfice (utilise Heroicons ou Lucide React)</li>
<li><strong>Titre :</strong> Le bénéfice en 3-5 mots ("Gagne 10h par semaine")</li>
<li><strong>Description :</strong> Une ou deux phrases qui développent avec un exemple concret</li>
</ul>
<p>Pour la tarification, le plan du milieu (Pro) doit être mis en avant avec un badge "Populaire" ou "Recommandé", une bordure colorée et un prix légèrement plus grand. C'est l'effet d'ancrage : en encadrant le plan Pro entre un plan basique et un plan cher, il paraît comme le meilleur rapport qualité-prix.</p>
<p>Claude Code peut aussi générer la section FAQ avec un composant accordéon (clic pour ouvrir/fermer chaque question). Demande-lui d'inclure 6 questions fréquentes avec des réponses qui lèvent les objections courantes.</p>
<p><strong>Conseil pro :</strong> Les 3 objections les plus fréquentes à inclure dans ta FAQ sont : "Est-ce que ça va marcher pour moi ?" (réponse : témoignages de clients similaires), "Et si je ne suis pas satisfait ?" (réponse : garantie satisfait ou remboursé), "Combien de temps avant de voir des résultats ?" (réponse : timeline réaliste avec exemples). Si tu lèves ces 3 objections, tu supprimes 80% des freins à l'achat.</p>

<h2>Étape 5 : Responsive et optimisation</h2>
<p>Demande à Claude Code de vérifier et ajuster l'ensemble de la page :</p>
<blockquote>Vérifie que toute la landing page est parfaitement responsive. Teste les breakpoints mobile (375px), tablette (768px) et desktop (1280px). Ajoute des animations au scroll avec Intersection Observer. Optimise les images avec next/image. Ajoute les meta tags SEO et Open Graph pour le partage sur les réseaux sociaux.</blockquote>
<p>Les performances sont critiques : chaque seconde de chargement en plus réduit les conversions de 7%. Utilise Lighthouse pour vérifier que ton score est au-dessus de 90 sur les 4 critères (Performance, Accessibilité, Bonnes pratiques, SEO).</p>
<p>Le responsive n'est pas optionnel : en 2025, plus de 60% du trafic web est mobile. Si ta landing page n'est pas parfaite sur mobile, tu perds la majorité de tes visiteurs potentiels. Voici les erreurs responsive les plus courantes à éviter :</p>
<ul>
<li><strong>Texte trop petit :</strong> Le corps du texte doit faire au minimum 16px sur mobile</li>
<li><strong>Boutons trop petits :</strong> Les zones cliquables doivent faire au minimum 44x44 pixels (recommandation Apple/Google)</li>
<li><strong>Images qui débordent :</strong> Utilise <code>max-width: 100%</code> sur toutes les images</li>
<li><strong>Colonnes non adaptées :</strong> Passe en colonne unique sous 768px</li>
<li><strong>Espacement insuffisant :</strong> Augmente le padding vertical sur mobile pour que chaque section "respire"</li>
</ul>
<p>Les meta tags Open Graph sont essentiels pour le partage social. Quand quelqu'un partage ta landing page sur LinkedIn ou Twitter, l'image et le titre qui s'affichent viennent de ces meta tags. Sans eux, le partage affiche un lien brut sans aperçu — ce qui réduit considérablement le taux de clic.</p>
<p><strong>Astuce :</strong> Utilise l'outil "PageSpeed Insights" de Google pour analyser les performances de ta page. Il te donne un score de 0 à 100 et te liste les problèmes à corriger par ordre de priorité. Copie-colle le rapport dans Claude Code et demande-lui de corriger les problèmes un par un.</p>

<h2>Étape 6 : Déploiement</h2>
<p>Pour déployer ta landing page, utilise Vercel. Claude Code peut t'aider à configurer le déploiement :</p>
<blockquote>Configure le déploiement Vercel pour ce projet. Ajoute un domaine personnalisé, configure les redirections et le fichier robots.txt. Ajoute aussi Google Analytics 4 pour tracker les conversions.</blockquote>
<p>Le déploiement sur Vercel est gratuit pour les projets personnels et prend littéralement 2 minutes. Voici les étapes :</p>
<ol>
<li>Crée un compte sur vercel.com (gratuit)</li>
<li>Connecte ton dépôt GitHub</li>
<li>Vercel détecte automatiquement que c'est un projet Next.js et configure le build</li>
<li>Clique sur "Deploy" et ta page est en ligne en 60 secondes</li>
</ol>
<p>Une fois déployée, configure Google Analytics 4 pour suivre les conversions. C'est essentiel pour savoir si ta page fonctionne. Les métriques clés à suivre sont :</p>
<ul>
<li><strong>Taux de rebond :</strong> Pourcentage de visiteurs qui partent sans interagir (objectif : moins de 50%)</li>
<li><strong>Temps passé sur la page :</strong> Plus il est long, plus le visiteur est engagé (objectif : plus de 2 minutes)</li>
<li><strong>Taux de conversion :</strong> Pourcentage de visiteurs qui cliquent sur le CTA (objectif : 3-10%)</li>
<li><strong>Scroll depth :</strong> Jusqu'où les visiteurs scrollent (objectif : 60% atteignent le milieu de page)</li>
</ul>
<p>Ta landing page est maintenant en ligne. Tu peux la montrer à tes clients potentiels et l'ajouter à ton portfolio. Ce projet démontre ta capacité à créer des pages web professionnelles rapidement grâce à l'IA.</p>
<p><strong>Conseil pro :</strong> Pour impressionner encore plus, ajoute un test A/B basique. Crée deux versions du titre du hero et utilise un outil comme Google Optimize (gratuit) pour montrer aléatoirement l'une ou l'autre aux visiteurs. Après 100 visiteurs, tu sauras quel titre convertit le mieux. C'est ce que font toutes les grandes entreprises, et ça montre que tu maîtrises les méthodes de growth marketing.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un produit ou service fictif (ou réel) pour ta landing page. Définis le persona client idéal : âge, métier, problème principal, budget.</li>
<li>Utilise Claude Code pour générer l'intégralité de la landing page en suivant les étapes de la leçon. Tu dois obtenir au minimum 8 sections distinctes.</li>
<li>Teste le responsive sur 3 tailles d'écran différentes et corrige les problèmes éventuels avec Claude Code.</li>
<li>Déploie la page sur Vercel et partage le lien dans le groupe de la formation.</li>
<li>Bonus : ajoute un formulaire de capture d'email avec validation et stockage dans une base de données.</li>
</ol>`,
  },
  {
    order: 47,
    module: 8,
    title: "Projet : Chatbot FAQ intelligent pour entreprise",
    slug: "projet-chatbot-faq-intelligent-entreprise",
    duration: "90 min",
    description: "Construire un chatbot qui répond aux questions fréquentes à partir d'une base de connaissances.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un chatbot intelligent capable de répondre aux questions des visiteurs d'un site web en se basant sur une base de connaissances personnalisée. Ce n'est pas un simple chatbot avec des réponses pré-écrites : il utilise l'API Claude pour comprendre les questions et trouver les réponses pertinentes dans tes documents.</p>
<p>Ce type de chatbot est extrêmement demandé par les entreprises. Un chatbot FAQ bien configuré peut réduire de 60 à 80% les demandes au support client. C'est un projet à forte valeur ajoutée pour ton portfolio et tes futurs clients.</p>
<p>Pour illustrer concrètement, imagine une boutique e-commerce qui reçoit 200 emails par jour de clients posant des questions sur les délais de livraison, les retours, les tailles disponibles, etc. 80% de ces questions ont déjà une réponse dans la FAQ du site, mais les clients ne la lisent pas. Un chatbot résout ce problème : il répond instantanément, 24h/24, dans un langage naturel et personnalisé. Le résultat ? Le support client passe de 200 emails/jour à 40, et les clients obtiennent leur réponse en 10 secondes au lieu de 24 heures.</p>
<p><strong>Astuce :</strong> Ce projet est aussi un excellent produit à vendre en freelance. Un chatbot FAQ personnalisé se facture entre 500 et 2000 euros pour l'installation, plus un abonnement mensuel de 50 à 200 euros pour la maintenance et les mises à jour de la base de connaissances. C'est un service récurrent qui stabilise tes revenus.</p>

<h2>Architecture technique</h2>
<p>Le chatbot repose sur une architecture RAG (Retrieval Augmented Generation) simplifiée :</p>
<ul>
<li><strong>Frontend</strong> : Widget de chat en React, intégrable sur n'importe quel site — il s'affiche en bas à droite comme un petit bouton flottant</li>
<li><strong>Backend</strong> : API Next.js qui reçoit les questions et retourne les réponses — c'est le cerveau qui orchestre tout</li>
<li><strong>Base de connaissances</strong> : Fichiers Markdown ou JSON contenant les FAQ — le "savoir" du chatbot</li>
<li><strong>Moteur IA</strong> : API Claude qui génère les réponses contextualisées — la magie qui transforme des FAQ en conversations naturelles</li>
</ul>
<p>Le flux est simple : l'utilisateur pose une question, le backend cherche les FAQ les plus pertinentes, les envoie à Claude avec la question, et Claude formule une réponse naturelle et précise.</p>
<p>Pourquoi utiliser RAG plutôt que d'envoyer toutes les FAQ à Claude à chaque question ? Pour deux raisons : le coût et la précision. Envoyer 200 FAQ à chaque requête coûterait cher en tokens et pourrait noyer l'IA dans trop d'informations. En sélectionnant les 3-5 FAQ les plus pertinentes, tu réduis les coûts de 90% et tu obtiens des réponses plus précises car Claude se concentre sur les informations vraiment utiles.</p>
<p><strong>Conseil pro :</strong> Pense ton architecture comme un bibliothécaire intelligent. Quand un client pose une question, le bibliothécaire ne lit pas tous les livres de la bibliothèque. Il va directement au bon rayon, prend les 3 livres les plus pertinents, et répond en se basant sur ces sources. C'est exactement ce que fait ton chatbot RAG.</p>

<h2>Étape 1 : Préparer la base de connaissances</h2>
<p>Demande à Claude Code de créer la structure du projet et la base de connaissances :</p>
<blockquote>Crée un projet Next.js avec TypeScript. Dans /data/knowledge-base/, crée 3 fichiers JSON : general.json (10 questions générales sur l'entreprise), produits.json (10 questions sur les produits/services), support.json (10 questions sur le support technique). Chaque entrée doit avoir un champ question, un champ réponse et un champ catégorie.</blockquote>
<p>La qualité de ta base de connaissances détermine directement la qualité des réponses. Chaque réponse doit être complète, précise et à jour. Claude Code peut t'aider à générer des FAQ réalistes pour un secteur donné.</p>
<p>Voici les règles d'or pour une base de connaissances efficace :</p>
<ul>
<li><strong>Une question = un sujet :</strong> Ne mélange pas "Quels sont vos délais de livraison et votre politique de retour ?" en une seule FAQ. Crée deux entrées distinctes.</li>
<li><strong>Réponses complètes :</strong> La réponse doit être autonome. Le client ne doit pas avoir besoin de cliquer ailleurs pour obtenir l'information complète.</li>
<li><strong>Langage client :</strong> Utilise les mots que tes clients utilisent, pas ton jargon interne. Si tes clients disent "renvoi" au lieu de "retour produit", utilise "renvoi" dans la question.</li>
<li><strong>Mises à jour régulières :</strong> Prévois un processus pour mettre à jour la base de connaissances quand les informations changent (nouveaux prix, nouveaux produits, etc.).</li>
</ul>
<p><strong>Astuce :</strong> Pour générer une base de connaissances réaliste, donne à Claude Code le contexte de l'entreprise : "C'est une boutique e-commerce de vêtements éco-responsables, basée en France, qui livre en Europe, avec des retours gratuits sous 30 jours." Plus le contexte est riche, plus les FAQ générées seront pertinentes et naturelles.</p>
<p><strong>Attention :</strong> Ne mets jamais d'informations sensibles (mots de passe, clés API, données clients) dans ta base de connaissances. Le chatbot pourrait les révéler dans une réponse. Limite-toi aux informations publiques.</p>

<h2>Étape 2 : Créer le backend API</h2>
<p>Le backend est le cerveau du chatbot. Demande à Claude Code :</p>
<blockquote>Crée une route API /api/chat qui reçoit une question en POST. La route doit : 1) Charger toutes les FAQ de la base de connaissances, 2) Calculer la similarité entre la question et chaque FAQ (utilise une recherche par mots-clés pour commencer), 3) Sélectionner les 3 FAQ les plus pertinentes, 4) Envoyer à l'API Claude un prompt avec ces FAQ comme contexte et la question de l'utilisateur, 5) Retourner la réponse de Claude en streaming.</blockquote>
<p>Le streaming est important pour l'expérience utilisateur : la réponse s'affiche mot par mot, comme si le chatbot "tapait" en temps réel. Claude Code va configurer le streaming avec l'API Anthropic.</p>
<p>Voici comment fonctionne la recherche par mots-clés en détail :</p>
<ol>
<li>L'utilisateur pose une question : "Quels sont vos délais de livraison ?"</li>
<li>Le système extrait les mots-clés importants : "délais", "livraison"</li>
<li>Il compare ces mots-clés avec les questions de la base de connaissances</li>
<li>Les FAQ qui contiennent le plus de mots-clés en commun obtiennent le meilleur score</li>
<li>Les 3 meilleures FAQ sont envoyées à Claude avec la question originale</li>
</ol>
<p>Le prompt envoyé à Claude est crucial. Voici un exemple de structure efficace :</p>
<blockquote>Tu es l'assistant virtuel de [nom de l'entreprise]. Réponds à la question du client en te basant UNIQUEMENT sur les informations fournies ci-dessous. Si la réponse ne se trouve pas dans les informations fournies, dis poliment que tu ne connais pas la réponse et propose de contacter le support. Sois concis, amical et professionnel. Voici les informations pertinentes : [FAQ sélectionnées]. Question du client : [question]</blockquote>
<p><strong>Conseil pro :</strong> Ajoute une instruction dans le prompt pour que Claude cite la source de sa réponse. Par exemple : "Si tu trouves la réponse, termine par 'Source : [titre de la FAQ]'". Ça augmente la confiance de l'utilisateur dans la réponse et permet de vérifier que le chatbot utilise la bonne FAQ.</p>
<p><strong>Attention :</strong> Ne laisse jamais Claude répondre sans contexte (sans FAQ). Sans contexte, il pourrait inventer des informations plausibles mais fausses (hallucination). Le prompt doit explicitement dire "réponds UNIQUEMENT en te basant sur les informations fournies".</p>

<h2>Étape 3 : Construire le widget de chat</h2>
<p>Le frontend doit être professionnel et intégrable. Demande à Claude Code :</p>
<blockquote>Crée un composant ChatWidget en React avec : un bouton flottant en bas à droite pour ouvrir/fermer le chat, une fenêtre de chat avec header (logo + nom du bot), une zone de messages avec bulles (utilisateur à droite, bot à gauche), un champ de saisie avec bouton d'envoi, un indicateur "en train de taper..." pendant la génération, la gestion du streaming pour afficher la réponse en temps réel. Style professionnel avec Tailwind CSS.</blockquote>
<p>Le widget doit être léger et ne pas impacter les performances du site hôte. Vérifie que le CSS n'entre pas en conflit avec le site parent en utilisant des classes préfixées ou un shadow DOM.</p>
<p>Les détails UX qui font la différence entre un chatbot amateur et un chatbot professionnel :</p>
<ul>
<li><strong>Message d'accueil :</strong> Quand l'utilisateur ouvre le chat, un premier message du bot l'accueille ("Bonjour ! Je suis l'assistant de [entreprise]. Comment puis-je t'aider ?")</li>
<li><strong>Suggestions de questions :</strong> Affiche 3-4 boutons avec les questions les plus fréquentes pour guider l'utilisateur</li>
<li><strong>Indicateur de typing :</strong> Les trois points qui "pulsent" pendant que le bot génère sa réponse — ça rassure l'utilisateur que sa question est en cours de traitement</li>
<li><strong>Horodatage :</strong> Affiche l'heure de chaque message pour donner un repère temporel</li>
<li><strong>Bouton de feedback :</strong> Un pouce en haut / pouce en bas après chaque réponse pour mesurer la satisfaction</li>
</ul>
<p><strong>Astuce :</strong> Pour le bouton flottant, utilise une animation douce d'apparition (scale de 0 à 1 en 300ms). Ajoute aussi un badge avec un chiffre ("1") quand le bot a un message non lu. Ces petits détails augmentent significativement le taux d'engagement avec le chatbot.</p>

<h2>Étape 4 : Améliorer la pertinence</h2>
<p>Pour aller plus loin dans la recherche de pertinence, demande à Claude Code d'implémenter un système de scoring plus avancé. Au lieu d'une simple recherche par mots-clés, on peut utiliser l'embedding de texte pour calculer la similarité sémantique entre la question et les FAQ. Claude Code peut intégrer l'API d'embedding d'OpenAI ou utiliser une librairie locale comme transformers.js.</p>
<p>La différence entre la recherche par mots-clés et la recherche sémantique est fondamentale :</p>
<ul>
<li><strong>Mots-clés :</strong> "Quand est-ce que je recevrai ma commande ?" ne match PAS avec la FAQ "Quels sont vos délais de livraison ?" car les mots sont différents</li>
<li><strong>Sémantique :</strong> La même question MATCH parfaitement car le sens est identique</li>
</ul>
<p>Les embeddings transforment chaque phrase en un vecteur de nombres (un point dans un espace à 1536 dimensions). Deux phrases qui ont le même sens sont proches dans cet espace, même si elles utilisent des mots complètement différents. C'est comme si chaque phrase avait des coordonnées GPS : deux phrases "proches" en sens ont des coordonnées GPS proches.</p>
<p>Ajoute aussi un système de fallback : si aucune FAQ ne correspond avec un score suffisant, le chatbot doit répondre honnêtement qu'il ne connaît pas la réponse et proposer de contacter le support humain.</p>
<p><strong>Conseil pro :</strong> Définis un seuil de confiance (par exemple 0.7 sur 1.0). Si la meilleure FAQ a un score inférieur à ce seuil, le chatbot répond "Je ne suis pas sûr de bien comprendre ta question. Peux-tu reformuler, ou souhaites-tu contacter notre équipe support ?". C'est beaucoup mieux qu'une réponse incorrecte qui frustre l'utilisateur.</p>

<h2>Étape 5 : Historique et contexte de conversation</h2>
<p>Un bon chatbot se souvient du contexte de la conversation. Demande à Claude Code :</p>
<blockquote>Ajoute la gestion de l'historique de conversation. Le chatbot doit se souvenir des messages précédents dans la session. Envoie les 5 derniers messages à l'API Claude pour maintenir le contexte. Ajoute aussi un bouton "Nouvelle conversation" pour repartir de zéro.</blockquote>
<p>Le contexte permet au chatbot de répondre à des questions de suivi comme "Et pour le prix ?" sans que l'utilisateur ait besoin de répéter le produit dont il parle.</p>
<p>Voici un exemple concret de conversation avec contexte :</p>
<ul>
<li><strong>Utilisateur :</strong> "Est-ce que vous livrez en Belgique ?"</li>
<li><strong>Bot :</strong> "Oui, nous livrons en Belgique ! Les délais sont de 3-5 jours ouvrés et les frais de port sont de 5,90€."</li>
<li><strong>Utilisateur :</strong> "Et pour la Suisse ?"</li>
<li><strong>Bot :</strong> "Pour la Suisse, les délais de livraison sont de 5-7 jours ouvrés. Les frais de port sont de 9,90€ et des frais de douane peuvent s'appliquer."</li>
</ul>
<p>Sans contexte, le bot n'aurait pas compris que "Et pour la Suisse ?" concerne la livraison. Il aurait pu répondre n'importe quoi sur la Suisse. Avec les 5 derniers messages comme contexte, Claude comprend parfaitement que la question porte sur la livraison en Suisse.</p>
<p><strong>Attention :</strong> Limite le nombre de messages envoyés comme contexte (5 à 10 maximum). Envoyer tout l'historique d'une longue conversation coûte cher en tokens et peut dépasser la limite de contexte de l'API. De plus, les messages très anciens dans une conversation sont rarement pertinents pour la question actuelle.</p>

<h2>Étape 6 : Intégration et déploiement</h2>
<p>Pour rendre le chatbot intégrable sur n'importe quel site, demande à Claude Code de créer un script d'intégration en une ligne :</p>
<blockquote>Crée un script d'intégration qui permet d'ajouter le chatbot sur n'importe quel site avec une seule balise script. Le script doit charger le widget dynamiquement, accepter des options de configuration (couleur, position, message d'accueil) et fonctionner sur tous les navigateurs modernes.</blockquote>
<p>L'intégration en une ligne est ce qui rend ton chatbot "vendable". Un client n'a pas besoin de compétences techniques pour l'installer — il copie-colle une balise script dans son site, et le chatbot apparaît. Voici à quoi ça ressemble :</p>
<p><code>&lt;script src="https://ton-domaine.com/chatbot.js" data-color="#4F46E5" data-position="bottom-right" data-welcome="Bonjour ! Comment puis-je vous aider ?"&gt;&lt;/script&gt;</code></p>
<p>Les options configurables via data-attributes rendent le chatbot adaptable à n'importe quel site sans modifier le code source. Le client peut changer la couleur pour matcher son branding, la position, et le message d'accueil.</p>
<p>Déploie le tout sur Vercel. Ton chatbot est maintenant un produit complet que tu peux vendre à des entreprises pour 500 à 2000 euros par installation, avec un abonnement mensuel pour la maintenance.</p>
<p><strong>Conseil pro :</strong> Pour augmenter la valeur perçue de ton chatbot, ajoute un petit dashboard admin qui montre les statistiques d'utilisation : nombre de conversations par jour, questions les plus fréquentes, taux de satisfaction (basé sur les pouces en haut/en bas), et les questions sans réponse. Ce dashboard permet au client de voir la valeur de son investissement et d'améliorer sa base de connaissances en continu.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un secteur d'activité (e-commerce, immobilier, SaaS, restaurant) et crée une base de connaissances de 30 FAQ minimum.</li>
<li>Construis le chatbot complet en suivant les 6 étapes avec Claude Code. Vérifie que le streaming fonctionne correctement.</li>
<li>Teste avec 10 questions variées, dont 3 qui ne sont PAS dans ta base de connaissances (pour vérifier le fallback).</li>
<li>Crée le script d'intégration et intègre le chatbot sur une page HTML simple pour tester.</li>
<li>Bonus : ajoute un système de feedback (pouce en haut / pouce en bas) pour chaque réponse et stocke les résultats pour améliorer le chatbot.</li>
</ol>`,
  },
];
