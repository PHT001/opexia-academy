function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_06_LESSONS = [
  {
    order: 1,
    module: 6,
    title: "Next.js & React : les bases en 1h avec l'IA",
    slug: "v2-nextjs-react-bases-ia",
    duration: "30 min",
    description:
      "Découvre React et Next.js en accéléré. Comprends les composants, le JSX, les props, le state et le routing — en utilisant l'IA pour aller plus vite.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Next.js ?",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p><strong>Next.js</strong> est un framework basé sur React, créé par Vercel. Il est devenu le standard pour construire des applications web modernes. Pourquoi ? Parce qu'il résout les problèmes que React seul ne gère pas :</p><ul><li><strong>Routing automatique</strong> — chaque fichier dans <code>app/</code> devient une page</li><li><strong>Rendu serveur (SSR)</strong> — tes pages se chargent plus vite et sont mieux référencées</li><li><strong>API Routes</strong> — tu peux créer ton backend dans le même projet</li><li><strong>Optimisations automatiques</strong> — images, polices, bundles, tout est optimisé</li></ul>",
      },
      {
        id: "1-15",
        type: "heading",
        level: 3,
        text: "Next.js vs les autres : pourquoi c'est le choix n°1",
      },
      {
        id: "1-16",
        type: "text",
        html: "<p>Il existe beaucoup de frameworks web (Nuxt, SvelteKit, Remix, Astro...), mais Next.js domine largement le marché. En 2024, il est utilisé par des entreprises comme <strong>TikTok, Nike, Twitch, Notion</strong> et des milliers de startups.</p><p>Pour une agence IA, Next.js est le choix idéal parce que :</p><ul><li><strong>L'écosystème est énorme</strong> — la communauté est massive, tu trouves une solution à chaque problème</li><li><strong>L'IA le connaît parfaitement</strong> — Claude et Copilot génèrent du code Next.js de qualité parce qu'ils ont été entraînés sur des millions de projets Next.js</li><li><strong>Vercel simplifie le déploiement</strong> — un git push et ton site est en ligne</li><li><strong>Le marché demande Next.js</strong> — c'est la compétence la plus demandée en freelance web</li></ul>",
      },
      {
        id: "1-17",
        type: "comparison",
        headers: ["Framework", "Langage", "Points forts", "Popularité"],
        rows: [
          { cells: ["Next.js", "React / TypeScript", "Full-stack, SSR, écosystème", "Le plus populaire"] },
          { cells: ["Nuxt", "Vue.js", "Plus simple, bonne DX", "Populaire en France"] },
          { cells: ["SvelteKit", "Svelte", "Ultra léger, performant", "En croissance"] },
          { cells: ["Remix", "React", "Focus sur les standards web", "Niche"] },
        ],
      },
      {
        id: "1-3",
        type: "callout",
        variant: "tip",
        html: "<strong>L'IA est ton copilote :</strong> Tu n'as pas besoin de mémoriser chaque détail de React. Utilise Claude ou Copilot pour générer des composants, expliquer des erreurs et accélérer ton apprentissage. L'important est de comprendre les concepts.",
      },
      {
        id: "1-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-5",
        type: "heading",
        level: 2,
        text: "Les composants : la brique de base de React",
      },
      {
        id: "1-6",
        type: "text",
        html: "<p>En React, tout est un <strong>composant</strong>. Un composant est une fonction JavaScript qui retourne du JSX (du HTML amélioré). Chaque élément visible de ton interface est un composant : le header, un bouton, une carte produit, un formulaire.</p><p>Les composants sont <strong>réutilisables</strong>. Tu crées un composant Button une fois, et tu l'utilises partout. Si tu changes le style du bouton, il se met à jour partout automatiquement.</p>",
      },
      {
        id: "1-18",
        type: "heading",
        level: 3,
        text: "Penser en composants : le secret de React",
      },
      {
        id: "1-19",
        type: "text",
        html: "<p>Le plus grand changement mental quand tu apprends React, c'est de <strong>penser en composants</strong>. Regarde n'importe quel site web et décompose-le mentalement :</p><ul><li>La barre de navigation = composant <code>Navbar</code></li><li>Chaque carte produit = composant <code>ProductCard</code></li><li>Le bouton \"Ajouter au panier\" = composant <code>Button</code></li><li>Le footer = composant <code>Footer</code></li></ul><p>Cette approche a un avantage énorme : si tu as 50 cartes produit sur ton site, tu ne codes la carte qu'une seule fois. Tu la rends dynamique avec les <strong>props</strong>, et React s'occupe du reste.</p>",
      },
      {
        id: "1-20",
        type: "callout",
        variant: "info",
        html: "<strong>Exercice mental :</strong> Ouvre n'importe quel site (Amazon, Airbnb, Notion) et essaie d'identifier 10 composants distincts. Tu verras que la page entière n'est qu'un assemblage de composants imbriqués. C'est exactement comme des LEGO.",
      },
      {
        id: "1-7",
        type: "comparison",
        headers: ["Concept", "Description", "Exemple"],
        rows: [
          {
            cells: [
              "Composant",
              "Fonction qui retourne du JSX",
              "function Button() { return <button>Clic</button> }",
            ],
          },
          {
            cells: [
              "Props",
              "Paramètres passés à un composant",
              "<Button text=\"Envoyer\" color=\"blue\" />",
            ],
          },
          {
            cells: [
              "State",
              "Données qui changent dans le temps",
              "const [count, setCount] = useState(0)",
            ],
          },
          {
            cells: [
              "JSX",
              "Syntaxe HTML dans du JavaScript",
              "return <div className=\"card\">...</div>",
            ],
          },
        ],
      },
      {
        id: "1-21",
        type: "heading",
        level: 3,
        text: "Props vs State : la différence fondamentale",
      },
      {
        id: "1-22",
        type: "text",
        html: "<p>C'est LA question que tous les débutants se posent. La réponse est simple :</p><ul><li><strong>Props</strong> = données venant de l'extérieur (du parent). Le composant ne peut PAS les modifier. C'est comme un argument de fonction.</li><li><strong>State</strong> = données internes qui changent dans le temps. Le composant les gère lui-même. C'est comme une variable locale qui déclenche un re-render quand elle change.</li></ul><p>Exemple concret : un composant <code>ProductCard</code> reçoit le titre et le prix via les <strong>props</strong> (il ne les modifie pas). Mais le nombre d'articles dans le panier est géré par le <strong>state</strong> (il change quand l'utilisateur clique).</p>",
      },
      {
        id: "1-23",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur classique :</strong> Ne modifie JAMAIS les props directement. <code>props.title = \"Nouveau\"</code> est interdit en React. Si tu as besoin de modifier une donnée, utilise le state. Cette règle s'appelle le \"flux de données unidirectionnel\" — les données descendent du parent vers l'enfant, jamais l'inverse.",
      },
      {
        id: "1-8",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-9",
        type: "heading",
        level: 2,
        text: "Le routing dans Next.js (App Router)",
      },
      {
        id: "1-10",
        type: "text",
        html: "<p>Avec Next.js 14+, le routing est basé sur le dossier <code>app/</code>. Chaque dossier correspond à une route, et chaque fichier <code>page.tsx</code> est la page de cette route :</p><ul><li><code>app/page.tsx</code> → <strong>/</strong> (page d'accueil)</li><li><code>app/about/page.tsx</code> → <strong>/about</strong></li><li><code>app/blog/[slug]/page.tsx</code> → <strong>/blog/mon-article</strong> (route dynamique)</li></ul><p>Pas besoin de configurer un router manuellement — la structure de fichiers EST le routing.</p>",
      },
      {
        id: "1-24",
        type: "heading",
        level: 3,
        text: "Les fichiers spéciaux de l'App Router",
      },
      {
        id: "1-25",
        type: "text",
        html: "<p>L'App Router de Next.js utilise des fichiers avec des noms spéciaux qui ont des rôles précis :</p>",
      },
      {
        id: "1-26",
        type: "comparison",
        headers: ["Fichier", "Rôle", "Usage courant"],
        rows: [
          { cells: ["page.tsx", "La page de la route", "Contenu principal de chaque page"] },
          { cells: ["layout.tsx", "Layout partagé entre les pages enfants", "Header, footer, sidebar communs"] },
          { cells: ["loading.tsx", "UI de chargement", "Skeleton ou spinner pendant le chargement des données"] },
          { cells: ["error.tsx", "Page d'erreur", "Affichage gracieux quand quelque chose casse"] },
          { cells: ["not-found.tsx", "Page 404", "Quand l'URL n'existe pas"] },
        ],
      },
      {
        id: "1-11",
        type: "heading",
        level: 2,
        text: "Server Components vs Client Components",
      },
      {
        id: "1-12",
        type: "text",
        html: "<p>Next.js introduit un concept important : par défaut, tous les composants sont des <strong>Server Components</strong>. Ils s'exécutent côté serveur, ce qui est plus rapide et meilleur pour le SEO.</p><p>Si tu as besoin d'interactivité (clics, formulaires, animations), tu ajoutes <code>\"use client\"</code> en haut du fichier pour en faire un <strong>Client Component</strong>.</p>",
      },
      {
        id: "1-13",
        type: "comparison",
        headers: ["Server Component", "Client Component"],
        rows: [
          { cells: ["Par défaut dans Next.js", "Ajout de \"use client\" en haut"] },
          { cells: ["Pas d'interactivité (pas de useState, onClick)", "useState, useEffect, onClick fonctionnent"] },
          { cells: ["Peut accéder à la base de données directement", "S'exécute dans le navigateur"] },
          { cells: ["Plus rapide, meilleur SEO", "Nécessaire pour l'interactivité"] },
        ],
      },
      {
        id: "1-14",
        type: "callout",
        variant: "info",
        html: "<strong>Règle simple :</strong> Garde tout en Server Component par défaut. Ajoute \"use client\" uniquement quand tu as besoin d'interactivité (boutons, formulaires, animations).",
      },
      {
        id: "1-27",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-28",
        type: "heading",
        level: 2,
        text: "Utiliser l'IA pour coder plus vite en React",
      },
      {
        id: "1-29",
        type: "text",
        html: "<p>L'IA est un multiplicateur de productivité en React/Next.js. Voici comment l'utiliser intelligemment :</p>",
      },
      {
        id: "1-30",
        type: "steps",
        steps: [
          {
            title: "Génère des composants avec Claude",
            description:
              "Décris précisément ce que tu veux : \"Crée un composant TypeScript ProductCard qui prend en props un title (string), price (number), imageUrl (string) et affiche une carte avec Tailwind, ombre, coins arrondis et un bouton Acheter.\" Plus ta description est précise, meilleur est le résultat.",
          },
          {
            title: "Débugge les erreurs avec l'IA",
            description:
              "Quand tu as une erreur React (écran rouge), copie le message d'erreur dans Claude et décris le contexte. L'IA est excellente pour expliquer les erreurs React comme \"Cannot read properties of undefined\" ou \"Hydration mismatch\".",
          },
          {
            title: "Apprends en posant des questions",
            description:
              "Demande à Claude d'expliquer du code que tu ne comprends pas. \"Explique-moi ce hook useEffect ligne par ligne\" est bien plus efficace que de lire 10 articles de blog.",
          },
          {
            title: "Refactorise avec l'IA",
            description:
              "Montre ton code à Claude et demande : \"Refactorise ce composant pour le rendre plus propre et plus performant.\" L'IA repère les patterns sous-optimaux que tu ne vois pas encore.",
          },
        ],
      },
      {
        id: "1-31",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> L'IA te fait gagner du temps, mais ne remplace pas la compréhension. Si tu copies du code IA sans comprendre, tu seras bloqué dès qu'un bug apparaît. Prends toujours 2 minutes pour comprendre POURQUOI le code fonctionne, pas juste QUOI il fait.",
      },
    ]),
    exercise:
      "<h3>Exercice : Crée ton premier projet Next.js</h3><p>Initialise un projet Next.js et crée tes premières pages.</p><ol><li>Crée un projet avec <code>npx create-next-app@latest mon-site</code> (choisis TypeScript, Tailwind, App Router).</li><li>Lance le serveur avec <code>npm run dev</code> et ouvre <code>localhost:3000</code>.</li><li>Modifie <code>app/page.tsx</code> pour afficher ton nom et un paragraphe de présentation.</li><li>Crée un dossier <code>app/about/</code> avec un fichier <code>page.tsx</code> contenant une page \"À propos\".</li><li>Crée un composant <code>Button.tsx</code> dans un dossier <code>components/</code>. Il prend une prop <code>text</code> et affiche un bouton stylisé.</li><li>Utilise ce composant Button dans ta page d'accueil et ta page about.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Qu'est-ce qu'un composant React ?",
        options: JSON.stringify([
          "Un fichier CSS",
          "Une fonction qui retourne du JSX",
          "Une base de données",
          "Un serveur web",
        ]),
        correctAnswer: "Une fonction qui retourne du JSX",
        explanation:
          "Un composant React est une fonction JavaScript qui retourne du JSX (du HTML enrichi). C'est la brique de base pour construire des interfaces.",
      },
      {
        type: "mcq",
        question:
          "Comment fonctionne le routing dans Next.js App Router ?",
        options: JSON.stringify([
          "Il faut configurer un fichier routes.json",
          "Chaque fichier page.tsx dans app/ correspond à une route",
          "On utilise react-router-dom",
          "Les routes sont définies dans next.config.js",
        ]),
        correctAnswer:
          "Chaque fichier page.tsx dans app/ correspond à une route",
        explanation:
          "Next.js utilise un système de routing basé sur les fichiers. La structure de dossiers dans app/ détermine automatiquement les routes.",
      },
      {
        type: "true_false",
        question:
          "Par défaut dans Next.js, tous les composants sont des Client Components.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Par défaut, les composants Next.js sont des Server Components. Il faut ajouter \"use client\" pour les rendre interactifs côté navigateur.",
      },
      {
        type: "mcq",
        question: "Que sont les \"props\" en React ?",
        options: JSON.stringify([
          "Des styles CSS",
          "Des paramètres passés à un composant",
          "Des variables globales",
          "Des fichiers de configuration",
        ]),
        correctAnswer: "Des paramètres passés à un composant",
        explanation:
          "Les props (propriétés) sont des arguments passés à un composant pour le personnaliser, comme text et color dans <Button text=\"OK\" color=\"blue\" />.",
      },
      {
        type: "true_false",
        question:
          "Next.js permet de créer des API Routes dans le même projet que le frontend.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Next.js permet de créer des fichiers route.ts dans le dossier app/api/ pour gérer des requêtes API côté serveur, directement dans le même projet.",
      },
      {
        type: "mcq",
        question:
          "Quand doit-on utiliser \"use client\" dans un composant Next.js ?",
        options: JSON.stringify([
          "Dans tous les composants",
          "Quand on a besoin d'interactivité (useState, onClick)",
          "Quand on veut un meilleur SEO",
          "Quand on utilise Tailwind CSS",
        ]),
        correctAnswer:
          "Quand on a besoin d'interactivité (useState, onClick)",
        explanation:
          "\"use client\" est nécessaire uniquement pour les composants qui utilisent du state, des effets ou des événements utilisateur. Les composants statiques restent en Server Component.",
      },
    ],
  },
  {
    order: 2,
    module: 6,
    title: "Tailwind CSS : styliser sans galérer",
    slug: "v2-tailwind-css-styliser",
    duration: "25 min",
    description:
      "Apprends Tailwind CSS, le framework utility-first qui te permet de styliser directement dans ton HTML. Fini les fichiers CSS interminables.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Tailwind CSS ?",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Tailwind CSS est un framework <strong>utility-first</strong> : au lieu d'écrire du CSS dans des fichiers séparés, tu appliques des classes utilitaires directement sur tes éléments HTML. Chaque classe fait une seule chose : <code>text-blue-500</code> rend le texte bleu, <code>p-4</code> ajoute du padding, <code>rounded-lg</code> arrondit les coins.</p><p>Avantages :</p><ul><li><strong>Rapide</strong> — pas de va-et-vient entre HTML et CSS</li><li><strong>Cohérent</strong> — un système de design intégré (couleurs, espacements, tailles)</li><li><strong>Pas de conflits CSS</strong> — les classes sont locales à l'élément</li><li><strong>Parfait avec l'IA</strong> — Claude peut générer du Tailwind plus facilement que du CSS custom</li></ul>",
      },
      {
        id: "2-13",
        type: "heading",
        level: 3,
        text: "Tailwind vs CSS classique : le gain de productivité",
      },
      {
        id: "2-14",
        type: "text",
        html: "<p>Pour comprendre pourquoi Tailwind est si populaire, compare les deux approches pour créer un simple bouton bleu arrondi :</p><p><strong>CSS classique :</strong> tu crées un fichier button.css, tu inventes un nom de classe (.primary-btn), tu écris 8 propriétés CSS, tu importes le fichier, et tu pries pour qu'il n'y ait pas de conflit avec un autre .primary-btn quelque part dans ton projet.</p><p><strong>Tailwind :</strong> tu écris directement <code>bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600</code> sur l'élément. Fini. Pas de fichier à créer, pas de nom à inventer, pas de conflit possible.</p><p>Sur un projet de taille moyenne (landing page + dashboard), Tailwind te fait gagner <strong>30 à 50% du temps</strong> de stylisation par rapport au CSS classique.</p>",
      },
      {
        id: "2-15",
        type: "callout",
        variant: "info",
        html: "<strong>Le paradoxe Tailwind :</strong> Au début, tu vas trouver que c'est moche d'avoir autant de classes dans le HTML. C'est normal. Après 2-3 jours de pratique, tu ne pourras plus revenir au CSS classique. Presque tous les développeurs passent par cette phase.",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce :</strong> Installe l'extension VS Code \"Tailwind CSS IntelliSense\" pour avoir l'autocomplétion des classes et un aperçu des couleurs directement dans ton éditeur.",
      },
      {
        id: "2-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-5",
        type: "heading",
        level: 2,
        text: "Les classes essentielles à connaître",
      },
      {
        id: "2-6",
        type: "comparison",
        headers: ["Catégorie", "Classes courantes", "Effet"],
        rows: [
          { cells: ["Espacement", "p-4, m-2, px-6, my-8, gap-4", "Padding, margin, gap entre éléments"] },
          { cells: ["Texte", "text-lg, font-bold, text-center, text-gray-700", "Taille, poids, alignement, couleur"] },
          { cells: ["Couleurs", "bg-blue-500, text-white, border-gray-200", "Fond, texte, bordure"] },
          { cells: ["Mise en page", "flex, grid, items-center, justify-between", "Flexbox, Grid, alignement"] },
          { cells: ["Dimensions", "w-full, h-screen, max-w-4xl, min-h-96", "Largeur, hauteur, limites"] },
          { cells: ["Bordures", "rounded-lg, border, border-2, shadow-md", "Arrondis, bordures, ombres"] },
        ],
      },
      {
        id: "2-16",
        type: "heading",
        level: 3,
        text: "Les 20 classes que tu utiliseras dans 90% des cas",
      },
      {
        id: "2-17",
        type: "text",
        html: "<p>Tu n'as pas besoin de connaître les 15 000+ classes de Tailwind. Voici celles que tu taperas le plus souvent :</p><ul><li><strong>Layout :</strong> <code>flex</code>, <code>flex-col</code>, <code>items-center</code>, <code>justify-center</code>, <code>justify-between</code>, <code>gap-4</code></li><li><strong>Espacement :</strong> <code>p-4</code>, <code>px-6</code>, <code>py-8</code>, <code>m-auto</code>, <code>mx-auto</code></li><li><strong>Taille :</strong> <code>w-full</code>, <code>max-w-4xl</code>, <code>h-screen</code></li><li><strong>Texte :</strong> <code>text-lg</code>, <code>font-bold</code>, <code>text-gray-600</code></li><li><strong>Visuel :</strong> <code>bg-white</code>, <code>rounded-lg</code>, <code>shadow-md</code></li><li><strong>Interactif :</strong> <code>hover:bg-blue-600</code>, <code>cursor-pointer</code>, <code>transition</code></li></ul><p>Maîtrise ces 20 classes et tu peux construire 90% des interfaces web courantes.</p>",
      },
      {
        id: "2-7",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-8",
        type: "heading",
        level: 2,
        text: "Flexbox et Grid avec Tailwind",
      },
      {
        id: "2-9",
        type: "text",
        html: "<p>La mise en page est le coeur du CSS moderne. Tailwind rend Flexbox et Grid intuitifs :</p><p><strong>Flexbox</strong> — pour aligner des éléments sur une ligne ou une colonne :</p><ul><li><code>flex</code> — active Flexbox</li><li><code>flex-col</code> — direction verticale</li><li><code>items-center</code> — centre verticalement</li><li><code>justify-between</code> — espace entre les éléments</li><li><code>gap-4</code> — espacement entre les enfants</li></ul><p><strong>Grid</strong> — pour des mises en page en grille :</p><ul><li><code>grid</code> — active Grid</li><li><code>grid-cols-3</code> — 3 colonnes</li><li><code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code> — grille responsive</li></ul>",
      },
      {
        id: "2-18",
        type: "heading",
        level: 3,
        text: "Quand utiliser Flex vs Grid ?",
      },
      {
        id: "2-19",
        type: "comparison",
        headers: ["Situation", "Utilise Flex", "Utilise Grid"],
        rows: [
          { cells: ["Navbar horizontale", "flex items-center justify-between", "Non adapté"] },
          { cells: ["Grille de cartes", "Possible mais compliqué", "grid grid-cols-3 gap-4"] },
          { cells: ["Centrer un élément", "flex items-center justify-center", "place-items-center"] },
          { cells: ["Sidebar + contenu", "flex avec widths fixes", "grid grid-cols-[250px_1fr]"] },
          { cells: ["Liste verticale", "flex flex-col gap-2", "Possible mais overkill"] },
        ],
      },
      {
        id: "2-20",
        type: "callout",
        variant: "tip",
        html: "<strong>Règle simple :</strong> Utilise Flex pour les layouts en 1 dimension (une ligne OU une colonne). Utilise Grid pour les layouts en 2 dimensions (lignes ET colonnes). En cas de doute, commence par Flex — c'est plus simple et couvre 80% des cas.",
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Le système de couleurs et de tailles",
      },
      {
        id: "2-11",
        type: "text",
        html: "<p>Tailwind utilise un système de <strong>tokens</strong> cohérent :</p><p><strong>Couleurs :</strong> Chaque couleur a des nuances de 50 (clair) à 950 (foncé). Par exemple : <code>blue-50</code>, <code>blue-100</code>, <code>blue-500</code>, <code>blue-900</code>. Les nuances 500 sont les couleurs \"de base\".</p><p><strong>Tailles :</strong> Le système d'espacement va de 0 à 96, basé sur des multiples de 4px. <code>p-1</code> = 4px, <code>p-2</code> = 8px, <code>p-4</code> = 16px, <code>p-8</code> = 32px.</p><p><strong>Tailles de texte :</strong> <code>text-xs</code>, <code>text-sm</code>, <code>text-base</code>, <code>text-lg</code>, <code>text-xl</code>, <code>text-2xl</code>, etc.</p>",
      },
      {
        id: "2-21",
        type: "heading",
        level: 3,
        text: "Le responsive design avec Tailwind",
      },
      {
        id: "2-22",
        type: "text",
        html: "<p>Tailwind rend le responsive design incroyablement simple avec ses <strong>préfixes de breakpoints</strong>. Les classes sans préfixe s'appliquent sur mobile (mobile-first), puis tu ajoutes des préfixes pour les écrans plus grands :</p><ul><li>Sans préfixe = mobile (0px+)</li><li><code>sm:</code> = petit écran (640px+)</li><li><code>md:</code> = tablette (768px+)</li><li><code>lg:</code> = laptop (1024px+)</li><li><code>xl:</code> = grand écran (1280px+)</li></ul><p>Exemple concret : <code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code> crée une grille de 1 colonne sur mobile, 2 sur tablette, 3 sur desktop. Avec une seule ligne de classes.</p>",
      },
      {
        id: "2-23",
        type: "heading",
        level: 3,
        text: "Les modificateurs d'état",
      },
      {
        id: "2-24",
        type: "text",
        html: "<p>Tailwind gère aussi les états interactifs avec des préfixes :</p><ul><li><code>hover:</code> — au survol de la souris</li><li><code>focus:</code> — quand l'élément est focus (input, bouton)</li><li><code>active:</code> — pendant le clic</li><li><code>disabled:</code> — quand l'élément est désactivé</li><li><code>dark:</code> — en mode sombre (si configuré)</li><li><code>first:</code>, <code>last:</code> — premier/dernier élément d'une liste</li></ul><p>Tu peux les combiner : <code>hover:bg-blue-600 hover:shadow-lg transition-all</code> crée un effet au survol avec une transition fluide.</p>",
      },
      {
        id: "2-12",
        type: "callout",
        variant: "info",
        html: "<strong>Conseil :</strong> Tu n'as pas besoin de mémoriser toutes les classes. Utilise la documentation officielle (tailwindcss.com/docs) et l'autocomplétion. Avec le temps, les classes les plus courantes deviennent automatiques.",
      },
      {
        id: "2-25",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-26",
        type: "heading",
        level: 3,
        text: "Tailwind et l'IA : le combo parfait",
      },
      {
        id: "2-27",
        type: "text",
        html: "<p>Tailwind est le framework CSS le mieux supporté par les IA de code. Pourquoi ? Parce que toute la logique de style est dans des classes textuelles que l'IA comprend parfaitement.</p><p>Exemple de prompt efficace pour Claude : <em>\"Crée un composant React pour une section Hero avec un fond gradient bleu vers violet, un titre H1 blanc en gras text-5xl, un sous-titre text-xl gris clair, un bouton blanc avec texte bleu arrondi, le tout centré avec un padding py-24. Utilise uniquement Tailwind.\"</em></p><p>Claude va te générer un composant propre et fonctionnel en quelques secondes. Avec du CSS classique, il faudrait écrire 40+ lignes de CSS séparé.</p>",
      },
    ]),
    exercise:
      "<h3>Exercice : Stylise une carte produit</h3><p>Crée un composant de carte produit entièrement stylisé avec Tailwind CSS.</p><ol><li>Crée un composant <code>ProductCard.tsx</code> dans ton projet Next.js.</li><li>La carte doit contenir : une image (utilise un placeholder), un titre, un prix, une description courte et un bouton \"Ajouter au panier\".</li><li>Utilise Flexbox ou Grid pour la mise en page interne.</li><li>Ajoute des ombres (<code>shadow-lg</code>), des arrondis (<code>rounded-xl</code>) et du padding.</li><li>Le bouton doit changer de couleur au survol avec <code>hover:bg-blue-700</code>.</li><li>Affiche 3 cartes côte à côte dans ta page d'accueil avec une grille (<code>grid grid-cols-1 md:grid-cols-3 gap-6</code>).</li></ol>",
    quiz: [
      {
        type: "mcq",
        question: "Qu'est-ce que Tailwind CSS ?",
        options: JSON.stringify([
          "Un framework JavaScript",
          "Un framework CSS utility-first",
          "Un outil de base de données",
          "Un éditeur de code",
        ]),
        correctAnswer: "Un framework CSS utility-first",
        explanation:
          "Tailwind CSS est un framework utility-first : on applique des petites classes utilitaires directement dans le HTML au lieu d'écrire du CSS séparé.",
      },
      {
        type: "mcq",
        question: "Que fait la classe Tailwind 'flex items-center justify-between' ?",
        options: JSON.stringify([
          "Crée une grille avec 3 colonnes",
          "Centre le texte horizontalement",
          "Crée un conteneur Flexbox, centre verticalement et espace les éléments horizontalement",
          "Ajoute une bordure et un padding",
        ]),
        correctAnswer:
          "Crée un conteneur Flexbox, centre verticalement et espace les éléments horizontalement",
        explanation:
          "flex active Flexbox, items-center centre les enfants verticalement, justify-between répartit l'espace entre les éléments horizontalement.",
      },
      {
        type: "true_false",
        question:
          "En Tailwind, p-4 ajoute un padding de 16px (4 × 4px) sur tous les côtés.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Le système d'espacement Tailwind est basé sur des multiples de 4px. p-4 = padding de 16px sur les 4 côtés.",
      },
      {
        type: "mcq",
        question:
          "Comment rendre une grille responsive en Tailwind (1 colonne mobile, 3 colonnes desktop) ?",
        options: JSON.stringify([
          "grid cols-responsive",
          "grid grid-cols-1 md:grid-cols-3",
          "responsive-grid-3",
          "flex flex-responsive",
        ]),
        correctAnswer: "grid grid-cols-1 md:grid-cols-3",
        explanation:
          "Les préfixes responsive (md:, lg:) appliquent des classes à partir d'un breakpoint. md:grid-cols-3 active 3 colonnes à partir de 768px.",
      },
      {
        type: "true_false",
        question:
          "Tailwind CSS génère un fichier CSS énorme qui ralentit le site.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Tailwind utilise un système de purge (tree-shaking) qui ne garde que les classes utilisées dans ton code. Le CSS final est très léger.",
      },
      {
        type: "mcq",
        question:
          "Quel préfixe Tailwind permet d'appliquer un style au survol ?",
        options: JSON.stringify([
          "on:",
          "mouse:",
          "hover:",
          "active:",
        ]),
        correctAnswer: "hover:",
        explanation:
          "Le préfixe hover: applique un style quand l'utilisateur survole l'élément. Exemple : hover:bg-blue-700 change la couleur de fond au survol.",
      },
    ],
  },
  {
    order: 3,
    module: 6,
    title: "Design & responsive : les règles qui comptent",
    slug: "v2-design-responsive-regles",
    duration: "20 min",
    description:
      "Apprends les principes de design essentiels pour créer des interfaces professionnelles et responsive qui fonctionnent sur tous les écrans.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Le design n'est pas du talent, c'est des règles",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Tu n'as pas besoin d'être designer pour créer de belles interfaces. Il suffit de suivre quelques <strong>règles fondamentales</strong> que tout professionnel applique. Ces règles sont simples, mais font toute la différence entre un site amateur et un site pro.</p>",
      },
      {
        id: "3-14",
        type: "heading",
        level: 3,
        text: "La différence entre amateur et pro : les détails",
      },
      {
        id: "3-15",
        type: "text",
        html: "<p>Quand un client voit ton travail, il ne sait pas pourquoi un site lui semble \"pro\" ou \"amateur\". Mais inconsciemment, son cerveau détecte :</p><ul><li><strong>L'alignement</strong> — les éléments sont-ils bien positionnés les uns par rapport aux autres ?</li><li><strong>L'espacement</strong> — y a-t-il assez d'espace entre les sections ou tout est-il collé ?</li><li><strong>La cohérence</strong> — les boutons ont-ils tous le même style ? Les polices sont-elles les mêmes partout ?</li><li><strong>Le contraste</strong> — le texte est-il lisible sur le fond ?</li></ul><p>La bonne nouvelle : ces détails se corrigent avec des règles simples. Pas besoin d'un diplôme en design.</p>",
      },
      {
        id: "3-16",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce rapide :</strong> Pour voir si ton design est cohérent, fais un screenshot de ta page et mets-la en noir et blanc. Si la hiérarchie visuelle est toujours claire (tu sais quoi lire en premier), ton design fonctionne.",
      },
      {
        id: "3-3",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-4",
        type: "heading",
        level: 2,
        text: "Les 5 règles d'or du design web",
      },
      {
        id: "3-5",
        type: "steps",
        steps: [
          {
            title: "Hiérarchie visuelle",
            description:
              "Tout n'est pas égal. Les titres sont gros et gras, le texte secondaire est plus petit et gris. Guide l'oeil du visiteur en créant des niveaux d'importance clairs avec la taille, la couleur et le poids du texte.",
          },
          {
            title: "Espacement généreux",
            description:
              "Le \"white space\" (espace vide) est ton meilleur ami. Donne de l'air à tes éléments. Un contenu aéré est plus lisible et plus professionnel. En Tailwind : p-8, py-16, gap-8 sont tes amis.",
          },
          {
            title: "Palette limitée",
            description:
              "Maximum 2-3 couleurs principales. Une couleur primaire (boutons, liens), une neutre (texte, fonds) et éventuellement une couleur d'accent. Trop de couleurs = chaos visuel.",
          },
          {
            title: "Cohérence",
            description:
              "Utilise les mêmes styles partout. Si tes boutons sont arrondis, TOUS tes boutons sont arrondis. Si ton espacement est de 16px, utilise-le partout. La cohérence crée la confiance.",
          },
          {
            title: "Contraste accessible",
            description:
              "Le texte doit être lisible. Texte foncé sur fond clair (ou l'inverse). Évite le gris clair sur blanc. Les normes WCAG recommandent un ratio de contraste d'au moins 4.5:1 pour le texte normal.",
          },
        ],
      },
      {
        id: "3-17",
        type: "heading",
        level: 3,
        text: "Les couleurs : construire une palette professionnelle",
      },
      {
        id: "3-18",
        type: "text",
        html: "<p>Choisir des couleurs peut sembler intimidant, mais voici une méthode simple qui fonctionne à tous les coups :</p>",
      },
      {
        id: "3-19",
        type: "steps",
        steps: [
          {
            title: "Choisis UNE couleur primaire",
            description:
              "C'est la couleur de ta marque. Bleu pour la confiance, vert pour la nature/santé, violet pour le premium, orange pour l'énergie. En Tailwind, choisis une couleur et ses variantes (blue-500 pour les boutons, blue-600 pour le hover, blue-50 pour les fonds légers).",
          },
          {
            title: "Le texte : gris foncé, pas noir pur",
            description:
              "Le noir pur (#000) est trop contrasté sur blanc. Utilise text-gray-800 ou text-gray-900 pour le texte principal, text-gray-600 pour le texte secondaire, et text-gray-400 pour les placeholders.",
          },
          {
            title: "Les fonds : blancs et gris très clairs",
            description:
              "Alterne entre bg-white et bg-gray-50 pour tes sections. Ça crée une séparation visuelle subtile sans utiliser de bordures.",
          },
          {
            title: "Utilise un outil de palette",
            description:
              "Des outils gratuits comme coolors.co ou colorhunt.co te proposent des palettes harmonieuses pré-faites. Choisis-en une et tiens-toi à elle.",
          },
        ],
      },
      {
        id: "3-20",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur fatale :</strong> N'utilise jamais plus de 3 couleurs principales. Chaque couleur supplémentaire ajoute du chaos visuel. Apple, Google, Stripe : regarde les sites des meilleures entreprises tech. Ils utilisent 2-3 couleurs maximum et beaucoup de blanc.",
      },
      {
        id: "3-6",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-7",
        type: "heading",
        level: 2,
        text: "Le responsive design : mobile-first",
      },
      {
        id: "3-8",
        type: "text",
        html: "<p>Plus de <strong>60% du trafic web</strong> vient du mobile. Le responsive design assure que ton site fonctionne sur tous les écrans. L'approche <strong>mobile-first</strong> signifie que tu conçois d'abord pour mobile, puis tu adaptes pour les grands écrans.</p><p>En Tailwind, les classes sans préfixe s'appliquent au mobile. Les préfixes ajoutent des règles pour les écrans plus grands :</p><ul><li><code>sm:</code> — 640px et plus (petit écran)</li><li><code>md:</code> — 768px et plus (tablette)</li><li><code>lg:</code> — 1024px et plus (laptop)</li><li><code>xl:</code> — 1280px et plus (grand écran)</li></ul>",
      },
      {
        id: "3-21",
        type: "heading",
        level: 3,
        text: "Les patterns responsive les plus courants",
      },
      {
        id: "3-22",
        type: "text",
        html: "<p>Voici les patterns que tu réutiliseras dans 95% de tes projets :</p><ul><li><strong>Conteneur centré :</strong> <code>max-w-6xl mx-auto px-4</code> — contenu limité en largeur, centré, avec du padding sur les côtés</li><li><strong>Grille responsive :</strong> <code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6</code> — empilé sur mobile, grille sur desktop</li><li><strong>Stack to row :</strong> <code>flex flex-col md:flex-row gap-4</code> — éléments empilés sur mobile, en ligne sur desktop</li><li><strong>Texte responsive :</strong> <code>text-2xl md:text-4xl lg:text-5xl</code> — taille de titre qui grandit avec l'écran</li><li><strong>Image responsive :</strong> <code>w-full md:w-1/2</code> — pleine largeur sur mobile, moitié sur desktop</li></ul>",
      },
      {
        id: "3-9",
        type: "comparison",
        headers: ["Technique", "Mobile", "Desktop"],
        rows: [
          { cells: ["Navigation", "Menu hamburger", "Barre de navigation horizontale"] },
          { cells: ["Grilles", "1 colonne empilée", "2-4 colonnes côte à côte"] },
          { cells: ["Images", "Pleine largeur", "Taille fixe ou proportionnelle"] },
          { cells: ["Texte", "Taille 16px minimum", "Peut être plus grand"] },
          { cells: ["Boutons", "Pleine largeur, 44px de hauteur min", "Largeur adaptée au contenu"] },
        ],
      },
      {
        id: "3-10",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur courante :</strong> Ne jamais utiliser de tailles fixes en pixels pour les conteneurs. Utilise max-w-4xl, w-full et des pourcentages pour que ta mise en page s'adapte naturellement.",
      },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Typographie : les bases",
      },
      {
        id: "3-12",
        type: "text",
        html: "<p>La typographie représente <strong>95% du design web</strong> — la plupart du contenu est du texte. Quelques règles simples :</p><ul><li><strong>Maximum 2 polices</strong> — une pour les titres, une pour le texte (ou une seule police avec des poids différents)</li><li><strong>Taille de base : 16px</strong> — c'est le minimum lisible sur mobile</li><li><strong>Line-height : 1.5 à 1.75</strong> — pour le texte de paragraphe</li><li><strong>Largeur de ligne : 50-75 caractères</strong> — au-delà, c'est difficile à lire (utilise <code>max-w-prose</code> en Tailwind)</li></ul>",
      },
      {
        id: "3-23",
        type: "heading",
        level: 3,
        text: "Les polices Google Fonts recommandées",
      },
      {
        id: "3-24",
        type: "text",
        html: "<p>Next.js intègre un système de polices optimisé avec <code>next/font</code>. Voici les combinaisons les plus populaires et professionnelles :</p>",
      },
      {
        id: "3-25",
        type: "comparison",
        headers: ["Combinaison", "Style", "Idéal pour"],
        rows: [
          { cells: ["Inter (titres + texte)", "Moderne, neutre, propre", "Apps SaaS, dashboards, tech"] },
          { cells: ["Poppins (titres) + Inter (texte)", "Arrondi, amical", "Startups, produits grand public"] },
          { cells: ["Playfair Display (titres) + Inter (texte)", "Élégant, premium", "Marques luxe, restaurants haut de gamme"] },
          { cells: ["DM Sans (titres + texte)", "Géométrique, moderne", "Agences, portfolios créatifs"] },
        ],
      },
      {
        id: "3-26",
        type: "callout",
        variant: "info",
        html: "<strong>Pro tip :</strong> Pour un client qui ne sait pas ce qu'il veut, utilise Inter. C'est la police la plus neutre et professionnelle du web. Elle fonctionne pour quasiment tous les projets. C'est d'ailleurs la police par défaut de nombreuses startups.",
      },
      {
        id: "3-13",
        type: "checklist",
        title: "Checklist design avant de publier",
        items: [
          { id: "c1", text: "Hiérarchie visuelle claire (titres > sous-titres > texte)" },
          { id: "c2", text: "Espacement suffisant entre les sections" },
          { id: "c3", text: "Maximum 2-3 couleurs principales" },
          { id: "c4", text: "Styles cohérents (boutons, cartes, espacement)" },
          { id: "c5", text: "Texte lisible avec un bon contraste" },
          { id: "c6", text: "Site testé sur mobile, tablette et desktop" },
          { id: "c7", text: "Boutons assez grands pour être cliqués au doigt (44px min)" },
          { id: "c8", text: "Images optimisées et responsives" },
        ],
      },
    ]),
    exercise:
      "<h3>Exercice : Audit responsive</h3><p>Applique les principes de design et de responsive sur ton projet.</p><ol><li>Ouvre ton projet Next.js et redimensionne la fenêtre du navigateur. Note ce qui casse en mobile.</li><li>Ajoute un container responsive à ta page : <code>max-w-6xl mx-auto px-4</code>.</li><li>Transforme ta grille en responsive : 1 colonne sur mobile, 2 sur tablette, 3 sur desktop.</li><li>Vérifie la taille de tes textes : minimum 16px sur mobile. Utilise <code>text-base</code> ou plus.</li><li>Assure-toi que tous tes boutons font au moins 44px de hauteur pour être cliquables au doigt.</li><li>Teste avec les DevTools de Chrome (Ctrl+Shift+I → icône mobile) sur iPhone SE, iPad et Desktop.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Que signifie l'approche \"mobile-first\" en responsive design ?",
        options: JSON.stringify([
          "Le site ne fonctionne que sur mobile",
          "On conçoit d'abord pour mobile, puis on adapte pour les grands écrans",
          "On cache le contenu sur mobile",
          "On crée deux sites séparés",
        ]),
        correctAnswer:
          "On conçoit d'abord pour mobile, puis on adapte pour les grands écrans",
        explanation:
          "En mobile-first, les styles de base ciblent le mobile. Les media queries (préfixes md:, lg: en Tailwind) ajoutent des styles pour les écrans plus grands.",
      },
      {
        type: "true_false",
        question:
          "Utiliser plus de 5 couleurs dans une interface web est recommandé pour la rendre plus attractive.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Faux",
        explanation:
          "Trop de couleurs créent du chaos visuel. La règle est de limiter sa palette à 2-3 couleurs principales pour un design professionnel et cohérent.",
      },
      {
        type: "mcq",
        question:
          "Quel est le breakpoint associé au préfixe md: en Tailwind CSS ?",
        options: JSON.stringify([
          "480px",
          "640px",
          "768px",
          "1024px",
        ]),
        correctAnswer: "768px",
        explanation:
          "Le préfixe md: s'active à partir de 768px de largeur d'écran, ce qui correspond généralement aux tablettes.",
      },
      {
        type: "true_false",
        question:
          "La taille minimum recommandée pour du texte sur mobile est de 16px.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "16px est la taille minimum pour une bonne lisibilité sur mobile. En dessous, le texte devient difficile à lire et certains navigateurs zooment automatiquement.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi le white space (espace vide) est-il important en design ?",
        options: JSON.stringify([
          "Pour remplir la page quand on manque de contenu",
          "Pour améliorer la lisibilité et donner un aspect professionnel",
          "Pour que le site se charge plus lentement",
          "Pour cacher du contenu aux utilisateurs",
        ]),
        correctAnswer:
          "Pour améliorer la lisibilité et donner un aspect professionnel",
        explanation:
          "Le white space (espace vide) donne de l'air au contenu, améliore la lisibilité et crée un aspect professionnel. Un site trop chargé est difficile à lire.",
      },
    ],
  },
  {
    order: 4,
    module: 6,
    title: "Atelier : créer une landing page client complète",
    slug: "v2-atelier-landing-page-client",
    duration: "30 min",
    description:
      "Construis une landing page professionnelle de A à Z avec Next.js et Tailwind. Header, hero section, features, témoignages, CTA et footer — tout y passe.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "L'objectif : une vraie landing page",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Dans cet atelier, tu vas créer une landing page complète et professionnelle. Ce n'est pas un exercice théorique — tu vas construire quelque chose que tu pourras réellement montrer à un client ou mettre dans ton portfolio.</p><p>Une bonne landing page suit une <strong>structure éprouvée</strong> qui guide le visiteur vers l'action souhaitée (inscription, achat, contact).</p>",
      },
      {
        id: "4-13",
        type: "heading",
        level: 3,
        text: "Pourquoi la landing page est ton meilleur argument de vente",
      },
      {
        id: "4-14",
        type: "text",
        html: "<p>Une landing page bien faite, c'est ta carte de visite en tant qu'agence. Quand un client potentiel te demande \"tu peux me montrer ce que tu sais faire ?\", tu lui envoies le lien vers une landing page que TU as construite. Si elle est belle, rapide et professionnelle, le client est convaincu.</p><p>Les chiffres parlent : une landing page bien conçue peut atteindre un <strong>taux de conversion de 5 à 15%</strong>, contre 1 à 3% pour une page mal optimisée. C'est la différence entre 5 et 15 clients sur 100 visiteurs.</p>",
      },
      {
        id: "4-15",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce commerciale :</strong> Crée 3 landing pages de demo dans des secteurs différents (restaurant, SaaS, coaching). Quand un prospect te contacte, tu lui montres celle qui est la plus proche de son domaine. Il visualise immédiatement le résultat final.",
      },
      {
        id: "4-3",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "L'anatomie d'une landing page qui convertit",
      },
      {
        id: "4-5",
        type: "steps",
        steps: [
          {
            title: "Header / Navigation",
            description:
              "Logo à gauche, liens de navigation au centre ou à droite, bouton CTA (Call to Action) visible. Fixé en haut de page (sticky) avec un fond semi-transparent.",
          },
          {
            title: "Hero Section",
            description:
              "La première chose que le visiteur voit. Un titre accrocheur (H1), un sous-titre qui explique la valeur, un bouton CTA principal et éventuellement une image ou une illustration.",
          },
          {
            title: "Section Features / Avantages",
            description:
              "3-4 cartes présentant les avantages clés de ton produit ou service. Chaque carte : une icône, un titre court et une description de 1-2 lignes.",
          },
          {
            title: "Section Preuve sociale",
            description:
              "Témoignages clients, logos de partenaires, statistiques clés. La preuve sociale rassure les visiteurs et augmente la confiance.",
          },
          {
            title: "Section CTA final",
            description:
              "Une dernière section avec un appel à l'action clair. Répète le bénéfice principal et ajoute un formulaire simple ou un bouton bien visible.",
          },
          {
            title: "Footer",
            description:
              "Liens utiles, mentions légales, coordonnées, liens vers les réseaux sociaux. Souvent sur fond sombre pour créer un contraste visuel.",
          },
        ],
      },
      {
        id: "4-16",
        type: "heading",
        level: 3,
        text: "Les règles psychologiques de la conversion",
      },
      {
        id: "4-17",
        type: "text",
        html: "<p>Une landing page efficace utilise des principes psychologiques éprouvés :</p><ul><li><strong>La règle des 3 secondes</strong> — un visiteur décide en 3 secondes s'il reste ou part. Ton titre doit immédiatement répondre à \"qu'est-ce que j'y gagne ?\"</li><li><strong>L'urgence</strong> — un CTA comme \"Commence ton essai gratuit\" est plus efficace que \"En savoir plus\"</li><li><strong>La preuve sociale</strong> — \"Utilisé par 500+ entreprises\" ou des témoignages réels. Les gens font confiance aux recommandations des autres</li><li><strong>La réduction de friction</strong> — moins de champs dans le formulaire = plus de conversions. Demande uniquement l'email au départ</li></ul>",
      },
      {
        id: "4-18",
        type: "comparison",
        headers: ["Élément CTA", "Mauvais exemple", "Bon exemple"],
        rows: [
          { cells: ["Texte du bouton", "Soumettre", "Commencer gratuitement"] },
          { cells: ["Titre", "Bienvenue sur notre site", "Automatise ton support client avec l'IA"] },
          { cells: ["Sous-titre", "Nous sommes une entreprise innovante", "Réduis tes temps de réponse de 80% en 24h"] },
          { cells: ["Formulaire", "10 champs obligatoires", "Juste l'email + un bouton"] },
        ],
      },
      {
        id: "4-6",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-7",
        type: "heading",
        level: 2,
        text: "Structurer le code en composants",
      },
      {
        id: "4-8",
        type: "text",
        html: "<p>Chaque section de ta landing page doit être un <strong>composant séparé</strong>. Cela rend ton code lisible, maintenable et réutilisable :</p><ul><li><code>components/Header.tsx</code> — navigation et logo</li><li><code>components/Hero.tsx</code> — hero section avec titre et CTA</li><li><code>components/Features.tsx</code> — grille de fonctionnalités</li><li><code>components/Testimonials.tsx</code> — témoignages clients</li><li><code>components/CTA.tsx</code> — section d'appel à l'action</li><li><code>components/Footer.tsx</code> — pied de page</li></ul><p>Ta page <code>app/page.tsx</code> assemble simplement ces composants dans l'ordre.</p>",
      },
      {
        id: "4-19",
        type: "heading",
        level: 3,
        text: "Combien de temps pour une landing page ?",
      },
      {
        id: "4-20",
        type: "comparison",
        headers: ["Approche", "Temps estimé", "Qualité"],
        rows: [
          { cells: ["Sans IA, CSS custom", "8-15 heures", "Dépend de ton niveau CSS"] },
          { cells: ["Avec Tailwind, sans IA", "4-6 heures", "Bonne si tu connais Tailwind"] },
          { cells: ["Avec Tailwind + Claude", "1-3 heures", "Excellente, itération rapide"] },
          { cells: ["Template pré-fait", "30 min - 1 heure", "Générique, peu personnalisé"] },
        ],
      },
      {
        id: "4-21",
        type: "text",
        html: "<p>Avec la bonne méthode (Tailwind + IA), tu peux livrer une landing page professionnelle en <strong>2-3 heures de travail effectif</strong>. C'est un produit que tu peux facturer entre <strong>500 et 2 000 euros</strong> selon le niveau de personnalisation et le client. Le ratio temps/revenu est excellent pour un freelance ou une agence qui démarre.</p>",
      },
      {
        id: "4-9",
        type: "callout",
        variant: "tip",
        html: "<strong>Utilise l'IA :</strong> Demande à Claude de te générer chaque composant un par un. Décris précisément ce que tu veux : \"Crée un composant Hero avec un titre H1, un sous-titre, un bouton bleu et une image à droite, le tout responsive avec Tailwind.\"",
      },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Optimisations finales",
      },
      {
        id: "4-22",
        type: "heading",
        level: 3,
        text: "SEO et métadonnées",
      },
      {
        id: "4-23",
        type: "text",
        html: "<p>Une landing page sans SEO, c'est un magasin sans enseigne. Voici le minimum à configurer dans ton <code>layout.tsx</code> :</p><ul><li><strong>Title</strong> — max 60 caractères, inclut le mot-clé principal</li><li><strong>Description</strong> — max 160 caractères, donne envie de cliquer</li><li><strong>og:image</strong> — l'image qui s'affiche quand quelqu'un partage le lien sur les réseaux sociaux (1200x630px)</li><li><strong>favicon</strong> — le petit icône dans l'onglet du navigateur</li></ul><p>Next.js gère les métadonnées nativement avec l'export <code>metadata</code> dans layout.tsx. Pas besoin de librairie externe.</p>",
      },
      {
        id: "4-11",
        type: "checklist",
        title: "Checklist landing page",
        items: [
          { id: "c1", text: "Le titre principal est clair et accrocheur (pas de jargon)" },
          { id: "c2", text: "Le bouton CTA est visible et contrasté" },
          { id: "c3", text: "La page est responsive (mobile, tablette, desktop)" },
          { id: "c4", text: "Les images sont optimisées (next/image ou format WebP)" },
          { id: "c5", text: "Le chargement est rapide (pas de vidéos lourdes)" },
          { id: "c6", text: "Les textes sont concis et orientés bénéfices" },
          { id: "c7", text: "Il y a de la preuve sociale (témoignages, chiffres)" },
          { id: "c8", text: "Les métadonnées SEO sont en place (title, description, og:image)" },
        ],
      },
      {
        id: "4-12",
        type: "callout",
        variant: "info",
        html: "<strong>Rappel :</strong> En Next.js, utilise le composant <code>&lt;Image&gt;</code> de <code>next/image</code> au lieu de <code>&lt;img&gt;</code>. Il optimise automatiquement tes images (lazy loading, format WebP, redimensionnement).",
      },
    ]),
    exercise:
      "<h3>Exercice : Construis ta landing page</h3><p>Crée une landing page complète pour un produit ou service fictif (ou réel !).</p><ol><li>Choisis un thème : agence web, app de productivité, formation en ligne, restaurant, etc.</li><li>Crée les 6 composants : Header, Hero, Features (3 cartes minimum), Testimonials (2-3 avis), CTA et Footer.</li><li>Assemble-les dans <code>app/page.tsx</code>.</li><li>Rends la page entièrement responsive : teste sur mobile, tablette et desktop.</li><li>Ajoute les métadonnées SEO dans un fichier <code>layout.tsx</code> (title et description).</li><li>Utilise uniquement Tailwind pour le style — pas de fichier CSS custom.</li><li>Bonus : ajoute des animations subtiles au scroll avec <code>transition</code> et <code>hover:</code>.</li></ol>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quel est l'ordre recommandé des sections d'une landing page ?",
        options: JSON.stringify([
          "Footer → Features → Hero → CTA",
          "Hero → Features → Preuve sociale → CTA → Footer",
          "CTA → Hero → Footer → Features",
          "Features → CTA → Hero → Footer",
        ]),
        correctAnswer:
          "Hero → Features → Preuve sociale → CTA → Footer",
        explanation:
          "L'ordre classique guide le visiteur : le Hero capte l'attention, les Features expliquent la valeur, la preuve sociale rassure, et le CTA convertit.",
      },
      {
        type: "true_false",
        question:
          "Chaque section d'une landing page devrait être un composant React séparé.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "Découper en composants rend le code lisible, maintenable et réutilisable. La page principale assemble les composants comme des blocs.",
      },
      {
        type: "mcq",
        question: "Que signifie CTA en marketing web ?",
        options: JSON.stringify([
          "Code To Action",
          "Call To Action",
          "Click To Activate",
          "Create The App",
        ]),
        correctAnswer: "Call To Action",
        explanation:
          "CTA (Call To Action) est un élément qui incite le visiteur à agir : un bouton \"S'inscrire\", \"Acheter\", \"Nous contacter\", etc.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi utiliser le composant Image de next/image plutôt que la balise img standard ?",
        options: JSON.stringify([
          "Il est plus facile à écrire",
          "Il optimise automatiquement les images (lazy loading, WebP, redimensionnement)",
          "Il est obligatoire dans Next.js",
          "Il permet d'ajouter des filtres CSS",
        ]),
        correctAnswer:
          "Il optimise automatiquement les images (lazy loading, WebP, redimensionnement)",
        explanation:
          "Le composant Image de Next.js optimise automatiquement le chargement (lazy), le format (WebP) et la taille des images pour de meilleures performances.",
      },
      {
        type: "true_false",
        question:
          "La preuve sociale (témoignages, logos clients) augmente le taux de conversion d'une landing page.",
        options: JSON.stringify(["Vrai", "Faux"]),
        correctAnswer: "Vrai",
        explanation:
          "La preuve sociale est un puissant levier psychologique. Les visiteurs font davantage confiance à un service recommandé par d'autres utilisateurs.",
      },
    ],
  },
];
