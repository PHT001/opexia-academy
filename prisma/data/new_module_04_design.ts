// ═══════════════════════════════════════════════════
// MODULE 4 — Design & UI pour développeurs
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_4_DESIGN_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 4,
    title: "Les principes de design qui comptent",
    slug: "principes-design-qui-comptent",
    duration: "20 min",
    description: "Hiérarchie visuelle, espacement, typographie, couleurs. Les règles que tout dev devrait connaître pour arrêter de faire des interfaces moches.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi les devs font des interfaces moches" },
      { id: "1-2", type: "text", html: "<p>Soyons honnêtes : la plupart des développeurs ne sont pas formés au design. On apprend les algorithmes, les bases de données, les API… mais personne ne nous explique pourquoi notre interface ressemble à un formulaire administratif de 1998. La bonne nouvelle ? Tu n'as pas besoin de devenir designer. Tu as juste besoin de comprendre 4-5 principes fondamentaux, et ton travail passera de \"moche\" à \"professionnel\" du jour au lendemain.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>La vérité :</strong> 90% du design \"pro\" que tu vois sur le web, c'est juste du bon espacement, une typographie propre et des couleurs cohérentes. Pas besoin de talent artistique." },
      { id: "1-4", type: "heading", level: 2, text: "Principe #1 : La hiérarchie visuelle" },
      { id: "1-5", type: "text", html: "<p>La hiérarchie visuelle, c'est l'art de guider l'œil de l'utilisateur. Quand quelqu'un arrive sur ta page, il doit comprendre en 2 secondes : qu'est-ce qui est important, qu'est-ce qui est secondaire, et où cliquer. Si tout a la même taille et la même couleur, l'utilisateur est perdu. C'est le problème numéro 1 des interfaces de devs.</p>" },
      { id: "1-6", type: "steps", steps: [
        { title: "Taille = importance", description: "Le titre principal est le plus gros. Les sous-titres sont moyens. Le corps de texte est plus petit. Simple, mais beaucoup de devs mettent tout en 16px." },
        { title: "Poids = emphase", description: "Le bold (font-weight: 600-700) attire l'œil. Utilise-le pour les labels, les titres, les prix. Pas pour tout le paragraphe." },
        { title: "Couleur = signal", description: "Le texte principal en noir/gris foncé. Le texte secondaire en gris moyen. Les actions en couleur d'accent. Les erreurs en rouge." },
        { title: "Espacement = regroupement", description: "Les éléments proches sont perçus comme liés. Mets plus d'espace entre les groupes qu'entre les éléments d'un même groupe." }
      ]},
      { id: "1-7", type: "heading", level: 2, text: "Principe #2 : L'espacement (le secret des pros)" },
      { id: "1-8", type: "text", html: "<p>L'espacement est littéralement ce qui sépare un design amateur d'un design pro. Regarde n'importe quel site que tu trouves beau : il a beaucoup d'espace blanc. Les devs ont tendance à coller les éléments les uns aux autres parce qu'ils veulent \"tout montrer\". Résultat : c'est illisible.</p>" },
      { id: "1-9", type: "comparison", headers: ["Amateur", "Professionnel"], rows: [
        { cells: ["padding: 8px partout", "padding: 16px à 32px, adapté au contexte"] },
        { cells: ["Marge entre sections : 16px", "Marge entre sections : 48px à 96px"] },
        { cells: ["Tout est collé", "Les éléments respirent"] },
        { cells: ["Pas de système, des valeurs random", "Échelle de 4px : 4, 8, 12, 16, 24, 32, 48, 64"] },
        { cells: ["Le texte touche les bords", "Le texte a des marges confortables"] }
      ]},
      { id: "1-10", type: "callout", variant: "info", html: "<strong>La règle de 4px :</strong> Utilise toujours des multiples de 4 pour tes spacings : 4, 8, 12, 16, 20, 24, 32, 48, 64, 96. Ça donne un rythme visuel cohérent. En Tailwind, c'est les classes p-1 (4px) à p-24 (96px). Pas de valeurs random comme 13px ou 37px." },
      { id: "1-11", type: "heading", level: 2, text: "Principe #3 : La typographie" },
      { id: "1-12", type: "text", html: "<p>80% de ton interface, c'est du texte. Si ta typo est mauvaise, tout est mauvais. Voici les règles : utilise maximum 2 polices (une pour les titres, une pour le corps — ou une seule comme Inter pour tout). Taille de base 16px minimum pour le corps de texte. Line-height de 1.5 à 1.7 pour le texte courant. Et ne mets JAMAIS de texte en gris trop clair (#999 minimum sur fond blanc).</p>" },
      { id: "1-13", type: "heading", level: 2, text: "Principe #4 : La règle 60-30-10 pour les couleurs" },
      { id: "1-14", type: "text", html: "<p>C'est la règle utilisée en décoration d'intérieur, et elle marche parfaitement pour le web. 60% de ta page est la couleur dominante (blanc ou gris très clair pour le fond). 30% c'est la couleur secondaire (gris foncé pour le texte, gris moyen pour les bordures et fonds de cartes). 10% c'est ta couleur d'accent (bleu, violet, vert — pour les boutons, les liens, les éléments importants).</p>" },
      { id: "1-15", type: "checklist", title: "Checklist : ton interface est-elle pro ?", items: [
        { id: "c1", text: "Les titres sont clairement plus gros que le texte courant" },
        { id: "c2", text: "Il y a suffisamment d'espace blanc (ça ne fait pas \"collé\")" },
        { id: "c3", text: "Tu utilises maximum 2-3 couleurs + gris" },
        { id: "c4", text: "Le texte est lisible (taille 16px+, contraste suffisant)" },
        { id: "c5", text: "Les éléments sont alignés sur une grille" },
        { id: "c6", text: "Les spacings utilisent une échelle cohérente (multiples de 4 ou 8)" },
        { id: "c7", text: "Les boutons principaux sont clairement identifiables" }
      ]}
    ]),
    exercise: "<h3>Exercice : Audit de design</h3><p>Prends un de tes projets existants (ou un side-project). Ouvre la page principale et analyse-la avec les 4 principes vus dans cette leçon :</p><ol><li>Fais une capture d'écran de ta page</li><li>Identifie 3 problèmes de hiérarchie visuelle (tailles, poids, couleurs)</li><li>Mesure tes spacings : sont-ils cohérents ? Utilisent-ils une échelle de 4px ?</li><li>Vérifie ta règle 60-30-10 : combien de couleurs utilises-tu ?</li><li>Corrige au moins 2 problèmes et compare avant/après</li></ol><p>Le but n'est pas la perfection, c'est de développer ton œil critique.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la règle de proportions de couleurs recommandée en design ?", options: JSON.stringify(["50-30-20", "60-30-10", "70-20-10", "40-40-20"]), correctAnswer: "60-30-10", explanation: "La règle 60-30-10 : 60% couleur dominante (fond), 30% secondaire (texte, bordures), 10% accent (boutons, liens)." },
      { type: "true_false", question: "Un bon design nécessite d'utiliser au minimum 5 couleurs différentes pour être visuellement intéressant.", correctAnswer: "false", explanation: "Au contraire, les meilleurs designs utilisent 2-3 couleurs maximum + des nuances de gris. Trop de couleurs = chaos visuel." },
      { type: "mcq", question: "Quel est le système d'espacement recommandé pour un design cohérent ?", options: JSON.stringify(["Multiples de 3px", "Multiples de 4px", "Multiples de 5px", "Multiples de 10px"]), correctAnswer: "Multiples de 4px", explanation: "L'échelle de 4px (4, 8, 12, 16, 24, 32, 48, 64) est le standard de l'industrie. C'est aussi ce qu'utilise Tailwind CSS." },
      { type: "mcq", question: "Quelle taille minimum est recommandée pour le corps de texte sur le web ?", options: JSON.stringify(["12px", "14px", "16px", "18px"]), correctAnswer: "16px", explanation: "16px est la taille par défaut des navigateurs et le minimum recommandé pour une bonne lisibilité. En dessous, c'est trop petit pour la plupart des utilisateurs." },
      { type: "true_false", question: "La hiérarchie visuelle sert à guider l'œil de l'utilisateur vers les éléments importants en jouant sur la taille, le poids et la couleur.", correctAnswer: "true", explanation: "Exactement. La hiérarchie visuelle utilise la taille, le poids (bold), la couleur et l'espacement pour indiquer l'importance relative de chaque élément." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 4,
    title: "Figma pour les développeurs",
    slug: "figma-pour-developpeurs",
    duration: "25 min",
    description: "Les bases de Figma : navigation, frames, auto-layout. Comment lire les fichiers d'un designer et exporter des assets sans galère.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Pourquoi un dev doit connaître Figma" },
      { id: "2-2", type: "text", html: "<p>Figma est devenu l'outil standard du design web. Même si tu ne designs pas, tu vas recevoir des maquettes Figma de tes clients ou de designers. Si tu ne sais pas naviguer dans Figma, tu vas perdre un temps fou à deviner les marges, les couleurs, les tailles de police. Et tu vas faire des erreurs. Avec 30 minutes d'apprentissage, tu seras capable de lire n'importe quel fichier Figma comme un pro.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Bonne nouvelle :</strong> Figma est gratuit pour un usage personnel. Tu peux créer un compte sur figma.com et commencer à explorer immédiatement. Tu n'as même pas besoin d'installer quoi que ce soit — ça tourne dans le navigateur." },
      { id: "2-4", type: "heading", level: 2, text: "L'interface de Figma : les zones clés" },
      { id: "2-5", type: "steps", steps: [
        { title: "Le canvas (zone centrale)", description: "C'est la zone de travail. Tu peux zoomer (Ctrl + molette) et te déplacer (barre espace + clic gauche). C'est comme Google Maps mais pour le design." },
        { title: "Le panneau de gauche (Layers)", description: "C'est l'arborescence de tous les éléments. Chaque page, chaque frame, chaque texte est listé ici. C'est ton plan de navigation." },
        { title: "Le panneau de droite (Properties)", description: "Quand tu sélectionnes un élément, tu vois toutes ses propriétés : taille, couleurs, polices, marges, bordures. C'est ta source de vérité pour le code." },
        { title: "La toolbar en haut", description: "Outils de sélection, de dessin, de texte. En tant que dev, tu utiliseras surtout l'outil de sélection (V) et le zoom (Z)." }
      ]},
      { id: "2-6", type: "heading", level: 2, text: "Les concepts Figma que tu dois comprendre" },
      { id: "2-7", type: "comparison", headers: ["Concept Figma", "Équivalent CSS/HTML"], rows: [
        { cells: ["Frame", "div (un conteneur)"] },
        { cells: ["Auto Layout", "Flexbox"] },
        { cells: ["Fill (couleur)", "background-color"] },
        { cells: ["Stroke", "border"] },
        { cells: ["Effect (Shadow)", "box-shadow"] },
        { cells: ["Padding", "padding (identique)"] },
        { cells: ["Gap (Auto Layout)", "gap (flexbox)"] },
        { cells: ["Component", "Composant React/Vue"] },
        { cells: ["Variant", "Props du composant"] }
      ]},
      { id: "2-8", type: "heading", level: 2, text: "Comment inspecter un design comme un dev" },
      { id: "2-9", type: "text", html: "<p>Quand tu ouvres un fichier Figma en mode \"Dev Mode\" (ou simplement en cliquant sur un élément), voici ce que tu cherches :</p><ul><li><strong>Dimensions</strong> : largeur et hauteur de l'élément (en haut à droite)</li><li><strong>Couleurs</strong> : clique sur le carré de couleur pour voir le code hex (#FFFFFF) ou rgb</li><li><strong>Typographie</strong> : police, taille, poids (weight), line-height — tout est dans le panneau de droite</li><li><strong>Espacement</strong> : survole un élément et maintiens Alt/Option pour voir les distances avec les éléments autour</li><li><strong>Bordures et ombres</strong> : dans la section \"Stroke\" et \"Effects\" du panneau de droite</li><li><strong>Border-radius</strong> : dans les propriétés de la frame, à côté des dimensions</li></ul>" },
      { id: "2-10", type: "callout", variant: "tip", html: "<strong>L'astuce qui change tout :</strong> Maintiens la touche <strong>Alt</strong> (ou Option sur Mac) et survole les éléments. Figma affiche automatiquement les distances en pixels entre l'élément sélectionné et celui survolé. C'est comme ça que tu récupères les marges et paddings exactes du design." },
      { id: "2-11", type: "heading", level: 2, text: "Exporter des assets depuis Figma" },
      { id: "2-12", type: "text", html: "<p>Quand tu as besoin d'images, d'icônes ou de logos depuis une maquette Figma, voici la procédure :</p><ol><li>Sélectionne l'élément que tu veux exporter</li><li>Dans le panneau de droite, descends jusqu'à \"Export\"</li><li>Clique sur le \"+\" pour ajouter un export</li><li>Choisis le format : <strong>SVG</strong> pour les icônes et logos (vectoriel, léger), <strong>PNG</strong> pour les images avec transparence, <strong>JPG</strong> pour les photos</li><li>Choisis la résolution : 1x pour le web, 2x pour les écrans Retina</li><li>Clique \"Export\" et c'est téléchargé</li></ol>" },
      { id: "2-13", type: "heading", level: 3, text: "Le Dev Mode de Figma" },
      { id: "2-14", type: "text", html: "<p>Figma a un mode spécial pour les développeurs. Quand tu actives \"Dev Mode\" (icône </> en haut à droite), Figma te génère automatiquement du CSS pour chaque élément sélectionné. Ce n'est pas du code production-ready, mais ça te donne les bonnes valeurs. Tu peux même switcher entre CSS, iOS et Android. Pour Tailwind, il existe des plugins Figma qui génèrent directement les classes.</p>" },
      { id: "2-15", type: "checklist", title: "Ce que tu dois savoir faire dans Figma", items: [
        { id: "c1", text: "Naviguer : zoomer, se déplacer, sélectionner des éléments" },
        { id: "c2", text: "Inspecter : lire les dimensions, couleurs, typo et spacings" },
        { id: "c3", text: "Mesurer : utiliser Alt+survol pour les distances" },
        { id: "c4", text: "Exporter : sortir des SVG, PNG et JPG proprement" },
        { id: "c5", text: "Comprendre les composants et variantes" }
      ]}
    ]),
    exercise: "<h3>Exercice : Explorer un fichier Figma</h3><p>Va sur la Figma Community (figma.com/community) et cherche un template gratuit de dashboard ou de landing page. Ensuite :</p><ol><li>Ouvre le fichier et duplique-le dans tes brouillons</li><li>Sélectionne 5 éléments différents (bouton, titre, card, icône, input) et note pour chacun : les dimensions, la couleur, la police, le border-radius</li><li>Utilise Alt+survol pour mesurer les marges entre 3 paires d'éléments</li><li>Exporte 2 assets : une icône en SVG et une image en PNG @2x</li><li>Bonus : active le Dev Mode et compare le CSS généré avec ce que tu aurais écrit</li></ol>",
    quiz: [
      { type: "mcq", question: "À quoi correspond une Frame dans Figma en HTML/CSS ?", options: JSON.stringify(["Un <span>", "Un <div> (conteneur)", "Un <img>", "Un <p>"]), correctAnswer: "Un <div> (conteneur)", explanation: "Une Frame Figma est l'équivalent d'un div HTML. C'est un conteneur qui peut avoir des dimensions, du padding, un background, et contenir d'autres éléments." },
      { type: "mcq", question: "Quel raccourci permet de mesurer les distances entre éléments dans Figma ?", options: JSON.stringify(["Ctrl + clic", "Shift + survol", "Alt + survol", "Tab + survol"]), correctAnswer: "Alt + survol", explanation: "En maintenant Alt (ou Option sur Mac) et en survolant un élément, Figma affiche les distances en pixels. C'est l'outil indispensable pour récupérer les marges." },
      { type: "true_false", question: "Il faut installer Figma sur son ordinateur pour pouvoir l'utiliser.", correctAnswer: "false", explanation: "Figma fonctionne directement dans le navigateur. Il existe une app desktop, mais elle n'est pas obligatoire. Tu peux tout faire depuis figma.com." },
      { type: "mcq", question: "Quel format d'export choisir pour une icône dans Figma ?", options: JSON.stringify(["JPG", "PNG", "SVG", "GIF"]), correctAnswer: "SVG", explanation: "SVG est le format idéal pour les icônes : vectoriel (pas de pixelisation au zoom), léger, et stylable en CSS. JPG est pour les photos, PNG pour les images avec transparence." },
      { type: "mcq", question: "Quel concept Figma est l'équivalent de Flexbox en CSS ?", options: JSON.stringify(["Frame", "Component", "Auto Layout", "Variant"]), correctAnswer: "Auto Layout", explanation: "Auto Layout dans Figma fonctionne exactement comme Flexbox : il organise les éléments enfants en ligne ou en colonne avec des gaps et du padding." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 4,
    title: "Les UI Kits et systèmes de design",
    slug: "ui-kits-systemes-design",
    duration: "20 min",
    description: "shadcn/ui, Tailwind UI, Headless UI : comment utiliser des composants pré-faits pour un résultat pro sans être designer.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le secret des devs qui font des interfaces pro" },
      { id: "3-2", type: "text", html: "<p>Tu veux savoir comment certains développeurs solo sortent des apps qui ont l'air d'avoir été designées par une équipe de 5 personnes ? Ils ne designent rien. Ils utilisent des UI kits et des systèmes de composants pré-construits. C'est pas de la triche — c'est être malin. Pourquoi réinventer la roue quand des designers talentueux ont déjà créé des composants parfaits ?</p>" },
      { id: "3-3", type: "callout", variant: "success", html: "<strong>La règle d'or :</strong> Ne design jamais ce qui existe déjà. Utilise des composants pré-faits, personnalise les couleurs et la typo, et concentre-toi sur ce qui rend TON app unique — la logique métier." },
      { id: "3-4", type: "heading", level: 2, text: "shadcn/ui : le roi des composants React" },
      { id: "3-5", type: "text", html: "<p>shadcn/ui est devenu LE standard pour les projets React/Next.js. Contrairement à une librairie classique (MUI, Chakra), shadcn/ui copie les composants directement dans TON code. Tu as un contrôle total. Les composants sont beaux par défaut, accessibles, et construits sur Radix UI + Tailwind CSS. La communauté est énorme et les mises à jour sont constantes.</p>" },
      { id: "3-6", type: "steps", steps: [
        { title: "Installation", description: "npx shadcn-ui@latest init — ça configure tout : Tailwind, les alias de chemins, le fichier de config." },
        { title: "Ajouter un composant", description: "npx shadcn-ui@latest add button — ça crée le fichier dans components/ui/button.tsx. Tu peux le modifier comme tu veux." },
        { title: "Utilisation", description: "import { Button } from '@/components/ui/button' puis <Button variant='default'>Cliquer</Button>. Simple." },
        { title: "Personnalisation", description: "Modifie le fichier CSS globals ou le composant directement. C'est TON code, pas une dépendance externe." }
      ]},
      { id: "3-7", type: "heading", level: 2, text: "Les alternatives selon ton stack" },
      { id: "3-8", type: "comparison", headers: ["Outil", "Stack", "Prix", "Quand l'utiliser"], rows: [
        { cells: ["shadcn/ui", "React / Next.js", "Gratuit", "Projets React modernes, maximum de contrôle"] },
        { cells: ["Tailwind UI", "Tout framework", "Payant ($299)", "Templates complets et composants premium, gain de temps maximal"] },
        { cells: ["Headless UI", "React / Vue", "Gratuit", "Composants accessibles sans style, tu gères le CSS"] },
        { cells: ["DaisyUI", "Tout (plugin Tailwind)", "Gratuit", "Ajout rapide de composants stylés à Tailwind"] },
        { cells: ["Radix UI", "React", "Gratuit", "Primitives accessibles, base de shadcn/ui"] },
        { cells: ["Flowbite", "Tout framework", "Freemium", "Grande collection de composants Tailwind"] }
      ]},
      { id: "3-9", type: "heading", level: 2, text: "Comment choisir ses composants" },
      { id: "3-10", type: "text", html: "<p>Quand tu démarres un projet, voici les composants dont tu as besoin dans 90% des cas : Button (avec variantes), Input + Label, Card, Dialog/Modal, Table, Navigation (navbar + sidebar), Dropdown menu, Toast/notification, Badge, Avatar. Avec ces 10 composants, tu couvres la quasi-totalité des besoins d'une app SaaS. Commence par ceux-là et ajoute le reste au fur et à mesure.</p>" },
      { id: "3-11", type: "heading", level: 2, text: "Les ressources gratuites qui changent la donne" },
      { id: "3-12", type: "text", html: "<p>Au-delà des librairies de composants, voici les ressources gratuites que tout dev devrait bookmarker :</p><ul><li><strong>Heroicons</strong> (heroicons.com) — Icônes SVG par l'équipe Tailwind, 300+ icônes</li><li><strong>Lucide</strong> (lucide.dev) — Fork de Feather Icons, 1500+ icônes, celle utilisée par shadcn/ui</li><li><strong>Google Fonts</strong> — Polices gratuites. Recommandées : Inter, Plus Jakarta Sans, DM Sans</li><li><strong>Coolors.co</strong> — Générateur de palettes de couleurs harmonieuses</li><li><strong>Realtime Colors</strong> (realtimecolors.com) — Visualise ta palette sur un vrai layout en temps réel</li><li><strong>Unsplash</strong> — Photos libres de droits et de haute qualité</li></ul>" },
      { id: "3-13", type: "callout", variant: "warning", html: "<strong>Piège à éviter :</strong> Ne mélange pas plusieurs UI kits dans le même projet. Si tu utilises shadcn/ui, reste avec shadcn/ui. Mélanger MUI + Tailwind + Bootstrap = un cauchemar de styles conflictuels et un bundle de 2 Mo." },
      { id: "3-14", type: "heading", level: 3, text: "Le workflow idéal pour un dev solo" },
      { id: "3-15", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Choix du stack", description: "Next.js + Tailwind + shadcn/ui (le combo gagnant)" },
        { id: "n2", label: "Init projet", description: "npx create-next-app + shadcn-ui init" },
        { id: "n3", label: "Palette de couleurs", description: "Choisis 1 couleur d'accent sur Coolors.co" },
        { id: "n4", label: "Ajout composants", description: "Installe les 10 composants essentiels" },
        { id: "n5", label: "Construction", description: "Assemble les pages en combinant les composants" }
      ]}
    ]),
    exercise: "<h3>Exercice : Monte ta boîte à outils UI</h3><p>Crée un nouveau projet Next.js et configure shadcn/ui :</p><ol><li>Lance <code>npx create-next-app@latest mon-projet-ui</code> avec TypeScript et Tailwind</li><li>Initialise shadcn/ui : <code>npx shadcn-ui@latest init</code></li><li>Installe ces 5 composants : button, card, input, badge, avatar</li><li>Crée une page simple qui utilise les 5 composants ensemble (par exemple une card de profil utilisateur avec un avatar, un nom en badge, un input de recherche et un bouton)</li><li>Personnalise la couleur d'accent dans ton fichier globals.css</li></ol><p>Tu devrais obtenir un résultat visuellement professionnel en moins de 30 minutes.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la particularité de shadcn/ui par rapport aux autres UI kits ?", options: JSON.stringify(["Il est payant", "Il copie les composants dans ton code source", "Il ne fonctionne qu'avec Vue.js", "Il génère du CSS pur sans classes"]), correctAnswer: "Il copie les composants dans ton code source", explanation: "shadcn/ui ne s'installe pas comme un package npm classique. Il copie les fichiers de composants directement dans ton projet, te donnant un contrôle total sur le code." },
      { type: "true_false", question: "Il est recommandé de mélanger plusieurs UI kits (MUI + Bootstrap + Tailwind) dans un même projet pour avoir plus de composants.", correctAnswer: "false", explanation: "Mélanger les UI kits crée des conflits de styles, alourdit le bundle et rend le code ingérable. Choisis un seul système et reste avec." },
      { type: "mcq", question: "Quel outil est recommandé pour les icônes dans un projet utilisant shadcn/ui ?", options: JSON.stringify(["Font Awesome", "Lucide Icons", "Material Icons", "Bootstrap Icons"]), correctAnswer: "Lucide Icons", explanation: "Lucide est la librairie d'icônes utilisée par défaut avec shadcn/ui. Elle propose 1500+ icônes SVG, légères et cohérentes." },
      { type: "mcq", question: "Combien de composants de base couvrent 90% des besoins d'une app SaaS ?", options: JSON.stringify(["5 composants", "10 composants", "25 composants", "50 composants"]), correctAnswer: "10 composants", explanation: "Button, Input, Card, Dialog, Table, Navigation, Dropdown, Toast, Badge, Avatar — ces 10 composants couvrent la quasi-totalité des besoins d'une application SaaS." },
      { type: "true_false", question: "Headless UI fournit des composants avec des styles pré-définis prêts à l'emploi.", correctAnswer: "false", explanation: "Headless UI fournit des composants sans aucun style (headless = sans tête visuelle). Il gère la logique et l'accessibilité, tu gères le CSS. C'est fait pour les devs qui veulent un contrôle total sur le visuel." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 4,
    title: "Responsive design et mobile-first",
    slug: "responsive-design-mobile-first",
    duration: "20 min",
    description: "Les breakpoints Tailwind, la pensée mobile-first et les patterns responsive que tes clients vérifient en premier.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi le mobile-first n'est pas optionnel" },
      { id: "4-2", type: "text", html: "<p>En 2025, plus de 60% du trafic web mondial vient du mobile. Et devine ce que fait ton client quand tu lui livres un site ? Il sort son téléphone et vérifie. Si c'est cassé sur mobile, tu perds toute crédibilité — même si le desktop est magnifique. Le mobile-first, c'est pas une philosophie à la mode, c'est une nécessité business.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>L'erreur classique du dev :</strong> Tu développes sur ton écran 27 pouces, tout est beau, tu es fier. Tu envoies le lien au client. Il ouvre sur son iPhone. Le menu déborde, les textes sont coupés, les boutons sont minuscules. Il te dit \"c'est pas fini ?\". Ça t'est déjà arrivé ? Le mobile-first résout ça." },
      { id: "4-4", type: "heading", level: 2, text: "Comment penser mobile-first" },
      { id: "4-5", type: "text", html: "<p>Le mobile-first, c'est simple : tu écris d'abord le CSS pour mobile (écran petit), puis tu ajoutes des modifications pour les écrans plus grands. En Tailwind, le code sans préfixe s'applique à TOUS les écrans (donc mobile). Les préfixes sm:, md:, lg:, xl: ajoutent des styles pour les écrans plus grands.</p>" },
      { id: "4-6", type: "comparison", headers: ["Breakpoint Tailwind", "Largeur min", "Appareils typiques"], rows: [
        { cells: ["(aucun préfixe)", "0px", "Tous les mobiles"] },
        { cells: ["sm:", "640px", "Grands mobiles, petites tablettes"] },
        { cells: ["md:", "768px", "Tablettes en portrait"] },
        { cells: ["lg:", "1024px", "Tablettes en paysage, petits laptops"] },
        { cells: ["xl:", "1280px", "Laptops et desktops"] },
        { cells: ["2xl:", "1536px", "Grands écrans"] }
      ]},
      { id: "4-7", type: "heading", level: 2, text: "Les patterns responsive essentiels" },
      { id: "4-8", type: "heading", level: 3, text: "Pattern 1 : La grille adaptative" },
      { id: "4-9", type: "text", html: "<p>Le pattern le plus courant : des éléments empilés sur mobile qui passent en grille sur desktop. Avec Tailwind, c'est une seule ligne :</p><p><code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6</code></p><p>Sur mobile : 1 colonne (les cards s'empilent). Sur tablette : 2 colonnes. Sur desktop : 3 colonnes. Le gap reste constant. C'est le pattern que tu utiliseras pour les listes de cards, les grilles de produits, les galeries photos.</p>" },
      { id: "4-10", type: "heading", level: 3, text: "Pattern 2 : La sidebar responsive" },
      { id: "4-11", type: "text", html: "<p>Sur desktop, tu veux une sidebar fixe à gauche et le contenu principal à droite. Sur mobile, la sidebar devient un menu hamburger ou un drawer. Voici le pattern Tailwind :</p><p><code>flex flex-col lg:flex-row</code> pour le conteneur principal. La sidebar a <code>w-full lg:w-64 lg:min-h-screen</code>. Sur mobile, elle prend toute la largeur et se positionne en haut. Sur desktop, elle devient une colonne fixe de 256px.</p>" },
      { id: "4-12", type: "heading", level: 3, text: "Pattern 3 : Le texte responsive" },
      { id: "4-13", type: "text", html: "<p>Les tailles de texte doivent s'adapter. Un h1 de 48px sur desktop est illisible sur mobile (trop de scroll horizontal). Utilise :</p><p><code>text-2xl md:text-3xl lg:text-5xl</code> pour les titres principaux.</p><p><code>text-base md:text-lg</code> pour le corps de texte.</p><p>Et n'oublie pas <code>max-w-prose</code> pour limiter la largeur des paragraphes à ~65 caractères — la largeur idéale pour la lisibilité.</p>" },
      { id: "4-14", type: "steps", steps: [
        { title: "Commence par le mobile", description: "Écris tout sans préfixe de breakpoint. Empile les éléments verticalement, taille de texte de base, padding réduit." },
        { title: "Ajoute les breakpoints tablette (md:)", description: "Passe en grille 2 colonnes, augmente les paddings, affiche certains éléments cachés sur mobile." },
        { title: "Ajoute les breakpoints desktop (lg:)", description: "Grille 3-4 colonnes, sidebar visible, tailles de texte plus grandes, plus d'espace blanc." },
        { title: "Teste sur de vrais appareils", description: "Les DevTools Chrome c'est bien, mais rien ne remplace un vrai test sur iPhone et Android. Utilise le mode responsive de Chrome (Ctrl+Shift+M) au minimum." }
      ]},
      { id: "4-15", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Utilise la classe <code>hidden md:block</code> pour cacher un élément sur mobile et le montrer sur tablette+. Et <code>block md:hidden</code> pour montrer seulement sur mobile. Parfait pour alterner entre un menu hamburger (mobile) et une navbar classique (desktop)." },
      { id: "4-16", type: "checklist", title: "Checklist responsive avant livraison", items: [
        { id: "c1", text: "Teste sur 320px de large (iPhone SE, le plus petit écran courant)" },
        { id: "c2", text: "Teste sur 768px (iPad en portrait)" },
        { id: "c3", text: "Teste sur 1280px (laptop standard)" },
        { id: "c4", text: "Aucun scroll horizontal n'apparaît sur mobile" },
        { id: "c5", text: "Les boutons et liens sont assez grands pour un doigt (44px minimum)" },
        { id: "c6", text: "Les images ne débordent pas (max-w-full)" },
        { id: "c7", text: "Le texte est lisible sans zoomer" }
      ]}
    ]),
    exercise: "<h3>Exercice : Rends une page responsive</h3><p>Prends le composant card de profil que tu as créé dans la leçon précédente et rends-le responsive :</p><ol><li>Sur mobile (défaut) : la card prend toute la largeur, les éléments sont empilés verticalement</li><li>Sur tablette (md:) : affiche 2 cards côte à côte dans une grille</li><li>Sur desktop (lg:) : affiche 3 cards avec une sidebar de navigation à gauche</li><li>Le texte du titre doit grandir : text-xl sur mobile, text-2xl sur tablette, text-3xl sur desktop</li><li>Teste dans les DevTools Chrome en mode responsive (Ctrl+Shift+M) sur les 3 tailles</li></ol><p>Bonus : ajoute un menu hamburger visible seulement sur mobile avec <code>block md:hidden</code>.</p>",
    quiz: [
      { type: "mcq", question: "En Tailwind, à quelle largeur minimum correspond le breakpoint md: ?", options: JSON.stringify(["480px", "640px", "768px", "1024px"]), correctAnswer: "768px", explanation: "md: correspond à min-width: 768px, ce qui cible les tablettes en portrait et au-dessus. C'est le breakpoint le plus utilisé." },
      { type: "true_false", question: "En mobile-first avec Tailwind, le code sans préfixe de breakpoint s'applique uniquement aux mobiles.", correctAnswer: "false", explanation: "Le code sans préfixe s'applique à TOUS les écrans (de 0px et plus). Les préfixes sm:, md:, lg: ajoutent des styles pour les écrans plus grands. C'est pour ça qu'on commence par le mobile." },
      { type: "mcq", question: "Quelle est la taille minimum recommandée pour un bouton tactile sur mobile ?", options: JSON.stringify(["24px", "32px", "44px", "64px"]), correctAnswer: "44px", explanation: "Apple et Google recommandent une taille minimum de 44x44px pour les éléments tactiles. En dessous, les utilisateurs ont du mal à cliquer avec le doigt." },
      { type: "mcq", question: "Comment cacher un élément sur mobile et l'afficher sur desktop en Tailwind ?", options: JSON.stringify(["visible lg:invisible", "hidden lg:block", "none lg:flex", "display-none lg:display-block"]), correctAnswer: "hidden lg:block", explanation: "hidden applique display: none sur tous les écrans, puis lg:block le rend visible à partir de 1024px. C'est le pattern standard pour les sidebars et menus desktop." },
      { type: "true_false", question: "La classe max-w-prose en Tailwind limite la largeur d'un paragraphe à environ 65 caractères pour une lisibilité optimale.", correctAnswer: "true", explanation: "max-w-prose applique max-width: 65ch, soit environ 65 caractères. C'est la largeur idéale pour la lecture selon les études de typographie." }
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 4,
    title: "Atelier : créer un dashboard client professionnel",
    slug: "atelier-dashboard-client-professionnel",
    duration: "30 min",
    description: "Construis un dashboard admin complet avec cards, graphiques et tables. Le résultat doit impressionner un client.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "L'objectif : un dashboard qui impressionne" },
      { id: "5-2", type: "text", html: "<p>Dans cet atelier, on va construire un vrai dashboard d'administration client. Pas un truc scolaire — un résultat que tu peux montrer à un client et entendre \"waouh, c'est exactement ce que je voulais\". On va utiliser shadcn/ui + Tailwind CSS pour tout assembler. Le dashboard aura : des stat cards en haut, un graphique de revenus, une table de transactions récentes, et une sidebar de navigation.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Ce que tu vas construire :</strong> Un dashboard avec 4 zones principales — une sidebar de navigation, une rangée de KPI cards (revenus, utilisateurs, commandes, taux de conversion), un graphique d'évolution, et un tableau des dernières transactions. Le tout en responsive." },
      { id: "5-4", type: "heading", level: 2, text: "Étape 1 : La structure du layout" },
      { id: "5-5", type: "text", html: "<p>Le layout d'un dashboard suit toujours le même pattern : une sidebar fixe à gauche (cachée sur mobile) et une zone de contenu principal à droite. Voici la structure HTML :</p><p><code>&lt;div class=\"flex min-h-screen\"&gt;</code> pour le conteneur principal.<br/><code>&lt;aside class=\"hidden lg:block w-64 border-r bg-gray-50\"&gt;</code> pour la sidebar.<br/><code>&lt;main class=\"flex-1 p-6 lg:p-8\"&gt;</code> pour le contenu.</p><p>La sidebar est cachée sur mobile (<code>hidden lg:block</code>) et le contenu prend toute la largeur. Sur desktop, la sidebar apparaît et le contenu s'adapte.</p>" },
      { id: "5-6", type: "heading", level: 2, text: "Étape 2 : Les KPI Cards" },
      { id: "5-7", type: "text", html: "<p>Les stat cards en haut du dashboard sont la première chose que le client regarde. Chaque card montre un KPI (Key Performance Indicator) avec : un label (\"Revenus totaux\"), la valeur principale en gros (\"€45,231\"), et un indicateur de tendance (\"+12% vs mois dernier\"). On les dispose en grille : <code>grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4</code>.</p>" },
      { id: "5-8", type: "steps", steps: [
        { title: "Crée le composant StatCard", description: "Utilise la Card de shadcn/ui. CardHeader pour le label en texte-sm text-muted-foreground. CardContent pour la valeur en text-2xl font-bold. Ajoute un span avec text-green-600 ou text-red-600 pour la tendance." },
        { title: "Ajoute les icônes", description: "Utilise Lucide React : DollarSign pour les revenus, Users pour les utilisateurs, ShoppingCart pour les commandes, TrendingUp pour la conversion. Mets l'icône dans un div arrondi avec un fond léger." },
        { title: "Place les 4 cards en grille", description: "Enveloppe les 4 StatCard dans un div avec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4. Sur mobile c'est empilé, sur desktop c'est en ligne." },
        { title: "Ajoute les données", description: "Pour le moment, utilise des données statiques. Les vrais chiffres viendront de ton API plus tard. L'important c'est le design." }
      ]},
      { id: "5-9", type: "heading", level: 2, text: "Étape 3 : Le graphique de revenus" },
      { id: "5-10", type: "text", html: "<p>Pour les graphiques, utilise <strong>Recharts</strong> — c'est la librairie de graphiques React la plus utilisée, et elle s'intègre parfaitement avec Tailwind. Installe-la avec <code>npm install recharts</code>. Pour un graphique de revenus, un AreaChart ou BarChart est idéal. Quelques règles pour un beau graphique :</p><ul><li>Utilise ta couleur d'accent pour la ligne/les barres</li><li>Garde un fond transparent ou légèrement teinté</li><li>Affiche les axes X (mois) et Y (montant) clairement</li><li>Ajoute un tooltip au survol pour les valeurs exactes</li><li>Mets le graphique dans une Card shadcn/ui pour la cohérence visuelle</li></ul>" },
      { id: "5-11", type: "heading", level: 2, text: "Étape 4 : La table des transactions" },
      { id: "5-12", type: "text", html: "<p>Les tables sont un élément clé de tout dashboard. Avec shadcn/ui, le composant Table est propre et accessible. Structure minimale : Table > TableHeader > TableRow > TableHead pour les en-têtes, puis TableBody > TableRow > TableCell pour les données. Ajoute des Badges pour les statuts (\"Complété\" en vert, \"En attente\" en jaune, \"Échoué\" en rouge). Et pense au responsive : sur mobile, cache les colonnes moins importantes avec <code>hidden md:table-cell</code>.</p>" },
      { id: "5-13", type: "callout", variant: "tip", html: "<strong>Le détail qui fait la différence :</strong> Ajoute un Avatar à côté du nom du client dans la table. Même avec des initiales générées, ça donne un côté professionnel immédiat. Utilise le composant Avatar de shadcn/ui avec AvatarFallback pour les initiales." },
      { id: "5-14", type: "heading", level: 2, text: "Étape 5 : Les finitions qui impressionnent" },
      { id: "5-15", type: "checklist", title: "Finitions pro pour ton dashboard", items: [
        { id: "c1", text: "Ajoute un header avec le titre de la page, un avatar utilisateur et un bouton de notifications" },
        { id: "c2", text: "Mets un fond gris très léger (bg-gray-50 ou bg-muted) sur la zone principale" },
        { id: "c3", text: "Ajoute des hover states sur les lignes de la table (hover:bg-muted/50)" },
        { id: "c4", text: "Les nombres doivent être formatés : €45,231.00 et pas 45231" },
        { id: "c5", text: "Ajoute un skeleton loader pendant le chargement des données" },
        { id: "c6", text: "Vérifie que tout est responsive : teste sur 375px, 768px et 1280px" },
        { id: "c7", text: "Les couleurs de statut sont cohérentes partout (vert = succès, rouge = erreur)" }
      ]},
      { id: "5-16", type: "callout", variant: "success", html: "<strong>Résultat attendu :</strong> Un dashboard qui pourrait être celui d'un vrai SaaS. Propre, lisible, responsive, avec des données bien formatées et des composants cohérents. Le genre de résultat que tu mets dans ton portfolio et qui te fait décrocher des clients." }
    ]),
    exercise: "<h3>Exercice : Construis le dashboard complet</h3><p>C'est le moment de tout mettre en pratique. Construis le dashboard de A à Z :</p><ol><li><strong>Layout</strong> : Crée la structure sidebar + main content avec le pattern responsive vu en leçon 4</li><li><strong>4 Stat Cards</strong> : Revenus (€45,231 / +12%), Utilisateurs (1,205 / +8%), Commandes (342 / -3%), Taux de conversion (3.2% / +0.5%)</li><li><strong>Graphique</strong> : Installe Recharts et crée un AreaChart avec les données de revenus des 6 derniers mois</li><li><strong>Table</strong> : Affiche 5 transactions récentes avec : client (avatar + nom), montant, date, statut (badge coloré)</li><li><strong>Responsive</strong> : Tout doit fonctionner sur mobile, tablette et desktop</li></ol><p>Bonus : ajoute un dark mode toggle en utilisant la classe <code>dark</code> de Tailwind et les variables CSS de shadcn/ui. Publie le résultat sur Vercel et mets le lien dans ton portfolio.</p>",
    quiz: [
      { type: "mcq", question: "Quelle librairie de graphiques est recommandée pour un projet React avec Tailwind ?", options: JSON.stringify(["Chart.js", "D3.js", "Recharts", "Highcharts"]), correctAnswer: "Recharts", explanation: "Recharts est la librairie de graphiques la plus utilisée dans l'écosystème React. Elle est simple d'utilisation, bien documentée, et s'intègre naturellement avec les composants React." },
      { type: "mcq", question: "Quelle grille Tailwind utiliser pour que 4 stat cards passent de 1 colonne (mobile) à 4 colonnes (desktop) ?", options: JSON.stringify(["flex flex-wrap", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", "grid grid-cols-4", "columns-4"]), correctAnswer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", explanation: "Cette grille progressive empile les cards sur mobile (1 col), les met par 2 sur tablette (sm:), et par 4 sur desktop (lg:). C'est le pattern responsive standard pour les KPI cards." },
      { type: "true_false", question: "Dans un dashboard, il est recommandé de cacher certaines colonnes de table sur mobile pour éviter le scroll horizontal.", correctAnswer: "true", explanation: "Sur mobile, l'espace est limité. Cacher les colonnes secondaires avec hidden md:table-cell évite le scroll horizontal et garde les informations essentielles visibles." },
      { type: "mcq", question: "Comment afficher la sidebar uniquement sur desktop en Tailwind ?", options: JSON.stringify(["display-none lg:display-block", "hidden lg:block", "invisible lg:visible", "opacity-0 lg:opacity-100"]), correctAnswer: "hidden lg:block", explanation: "hidden applique display: none (l'élément est complètement retiré du flux). lg:block le réaffiche à partir de 1024px. invisible/opacity garderait l'espace occupé." },
      { type: "true_false", question: "Les skeleton loaders pendant le chargement des données sont un détail cosmétique qui n'apporte pas de valeur réelle.", correctAnswer: "false", explanation: "Les skeleton loaders améliorent la perception de performance et l'expérience utilisateur. Ils donnent un feedback immédiat que le contenu charge, réduisent le \"layout shift\" et font paraître l'app plus rapide et plus professionnelle." }
    ],
  },
];
