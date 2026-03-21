// ═══════════════════════════════════════════════════
// MODULE 1 — Découvrir l'IA et poser les bases
// 8 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_1_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 1,
    title: "L'IA en 2025 : comprendre la révolution en cours",
    slug: "ia-2025-comprendre-la-revolution",
    duration: "20 min",
    description: "Qu'est-ce que l'IA générative, comment ça marche, pourquoi c'est différent de tout ce qu'on a vu, et pourquoi c'est LE moment pour se lancer.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "L'IA générative : c'est quoi concrètement ?" },
      { id: "1-2", type: "text", html: "<p>Tu as sûrement entendu parler de ChatGPT, de Claude, de Midjourney. Mais concrètement, qu'est-ce que c'est ? L'IA générative, c'est une catégorie d'intelligence artificielle capable de <strong>créer du contenu nouveau</strong> : du texte, du code, des images, de la musique, de la vidéo. Contrairement aux IA classiques qui classifient ou prédisent, les IA génératives <strong>produisent</strong> quelque chose qui n'existait pas avant.</p><p>Au cœur de tout ça, il y a les <strong>LLMs</strong> — Large Language Models. Ce sont des modèles entraînés sur des quantités massives de texte (livres, sites web, code, articles scientifiques). Ils ont appris les patterns du langage humain et sont capables de générer des réponses cohérentes, pertinentes et souvent bluffantes.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>En résumé :</strong> Un LLM, c'est comme un stagiaire ultra-cultivé qui a lu tout Internet. Il ne \"comprend\" pas au sens humain, mais il prédit la suite la plus probable d'un texte avec une précision hallucinante. Et ça, ça change tout." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Comment ça fonctionne (version simple)" },
      { id: "1-6", type: "steps", steps: [
        { title: "L'entraînement", description: "Le modèle ingère des milliards de mots. Il apprend les relations entre les mots, les concepts, les structures de phrases, le code, les raisonnements logiques." },
        { title: "La tokenisation", description: "Chaque mot est découpé en \"tokens\" (morceaux de mots). Le modèle travaille avec ces tokens, pas avec des mots entiers. \"Bonjour\" = 1 token, \"intelligence artificielle\" = 3-4 tokens." },
        { title: "La prédiction", description: "Quand tu poses une question, le modèle prédit le token suivant le plus probable, puis le suivant, puis le suivant. C'est comme l'auto-complétion de ton téléphone, mais en infiniment plus puissant." },
        { title: "Le fine-tuning", description: "Après l'entraînement de base, le modèle est affiné avec des retours humains (RLHF) pour être plus utile, plus sûr et plus agréable à utiliser." }
      ]},
      { id: "1-7", type: "heading", level: 2, text: "Pourquoi c'est différent de tout ce qu'on a vu" },
      { id: "1-8", type: "comparison", headers: ["Avant (outils classiques)", "Maintenant (IA générative)"], rows: [
        { cells: ["Il faut apprendre à coder pendant des mois", "Tu décris ce que tu veux en français, l'IA code pour toi"] },
        { cells: ["Créer un site = des semaines de travail", "Créer un site = quelques heures avec le bon prompt"] },
        { cells: ["Un chatbot = projet complexe à 20K€", "Un chatbot = un après-midi de travail"] },
        { cells: ["L'automatisation nécessite un développeur senior", "L'automatisation est accessible à tous avec les bons outils"] },
        { cells: ["Besoin d'une équipe de 5 personnes", "Une seule personne + l'IA = une équipe entière"] }
      ]},
      { id: "1-9", type: "callout", variant: "tip", html: "<strong>Le game changer :</strong> Pour la première fois dans l'histoire, une personne seule peut produire le travail d'une équipe entière. Pas en bossant 80h/semaine, mais en utilisant l'IA comme multiplicateur de force. C'est ça la vraie révolution." },
      { id: "1-10", type: "heading", level: 2, text: "Le marché de l'IA en chiffres" },
      { id: "1-11", type: "comparison", headers: ["Indicateur", "Chiffre clé"], rows: [
        { cells: ["Marché mondial de l'IA (2025)", "~300 milliards $ (IDC, Statista)"] },
        { cells: ["Croissance annuelle", "+35 à 40% par an"] },
        { cells: ["Grandes entreprises utilisant l'IA", "72% (McKinsey 2024)"] },
        { cells: ["PME utilisant l'IA concrètement", "Moins de 15%"] },
        { cells: ["Freelances IA en France", "Forte demande, peu d'offre qualifiée"] }
      ]},
      { id: "1-12", type: "callout", variant: "warning", html: "<strong>La fenêtre se ferme :</strong> En 2025, le marché est encore jeune. Les PME cherchent des prestataires IA mais n'en trouvent pas. Dans 2-3 ans, ce sera comme le marché des agences web — saturé. Le moment c'est maintenant." },
      { id: "1-13", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "2022 : ChatGPT sort", description: "Le grand public découvre l'IA générative" },
        { id: "n2", label: "2023 : GPT-4, Claude 2", description: "Les modèles deviennent utilisables pour travailler" },
        { id: "n3", label: "2024 : Claude 3.5, agents IA", description: "L'automatisation avancée devient possible" },
        { id: "n4", label: "2025 : Tu es ici", description: "Outils matures + forte demande = fenêtre idéale" },
        { id: "n5", label: "2026-2027", description: "Marché saturé. Les premiers arrivés auront raflé les clients" }
      ]},
      { id: "1-14", type: "separator", style: "line" },
      { id: "1-15", type: "heading", level: 2, text: "Pourquoi c'est LE moment pour toi" },
      { id: "1-16", type: "text", html: "<p>Tu n'as pas besoin d'être développeur senior. Tu n'as pas besoin d'un diplôme en data science. Tu as besoin de comprendre comment utiliser ces outils, comment créer de la valeur avec, et comment vendre cette valeur. C'est exactement ce qu'on va faire ensemble dans cette formation. À la fin, tu seras capable de créer des chatbots, des automatisations, des sites web et des agents IA — et de les vendre entre 500€ et 5000€ pièce.</p>" },
      { id: "1-17", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "L'IA générative crée du contenu nouveau (texte, code, images) grâce aux LLMs" },
        { id: "c2", text: "Un LLM prédit le token suivant le plus probable — c'est simple mais puissant" },
        { id: "c3", text: "Le marché de l'IA explose (~300 milliards $) mais les PME sont sous-équipées" },
        { id: "c4", text: "2025 = fenêtre d'opportunité avant saturation du marché" },
        { id: "c5", text: "Une personne + l'IA peut produire le travail d'une équipe entière" }
      ]}
    ]),
    exercise: "<h3>Exercice : Ta première analyse du marché</h3><p>Prends 10 minutes pour faire cet exercice concret :</p><ol><li>Note 5 entreprises autour de toi (restaurant, coiffeur, artisan, commerce, cabinet médical)</li><li>Pour chacune, identifie un problème que l'IA pourrait résoudre (ex : répondre aux questions clients 24/7, automatiser les relances, créer du contenu)</li><li>Estime combien ce problème leur coûte aujourd'hui (temps perdu, clients perdus, stress)</li><li>Imagine ce que tu pourrais leur facturer pour résoudre ce problème avec l'IA</li></ol><p>Garde ces notes — on y reviendra dans la leçon 5 quand on parlera de ce qu'une agence IA peut vendre.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'un LLM (Large Language Model) ?", options: JSON.stringify(["Un logiciel de comptabilité automatisée", "Un modèle entraîné sur des milliards de mots capable de générer du texte", "Un robot physique doté d'intelligence artificielle", "Un algorithme de tri de données"]), correctAnswer: "Un modèle entraîné sur des milliards de mots capable de générer du texte", explanation: "Un LLM est un modèle de langage entraîné sur des quantités massives de texte. Il apprend les patterns du langage et peut générer du texte cohérent et pertinent." },
      { type: "true_false", question: "Les LLMs comprennent réellement le sens des mots comme un humain.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les LLMs ne 'comprennent' pas au sens humain. Ils prédisent le token suivant le plus probable en se basant sur des patterns statistiques appris pendant l'entraînement. Le résultat est bluffant mais le mécanisme est différent de la compréhension humaine." },
      { type: "mcq", question: "Quel pourcentage de PME utilise concrètement l'IA en 2025 ?", options: JSON.stringify(["Plus de 50%", "Environ 30%", "Moins de 15%", "Plus de 72%"]), correctAnswer: "Moins de 15%", explanation: "Alors que 72% des grandes entreprises ont adopté l'IA, les PME restent massivement sous-équipées avec moins de 15% d'adoption concrète. C'est là que se trouve l'opportunité pour toi." },
      { type: "true_false", question: "En 2025, une personne seule équipée des bons outils IA peut produire le travail d'une équipe entière.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est la révolution de l'IA générative : avec les bons outils (Claude, ChatGPT, automatisations), une personne peut créer des sites, des chatbots, des automatisations et vendre ces services — le travail qui nécessitait avant une équipe de 5 personnes." },
      { type: "mcq", question: "Qu'est-ce qu'un token dans le contexte des LLMs ?", options: JSON.stringify(["Un jeton de paiement pour utiliser l'IA", "Un morceau de mot utilisé par le modèle pour traiter le texte", "Un mot de passe d'authentification", "Une unité de mesure de la vitesse du modèle"]), correctAnswer: "Un morceau de mot utilisé par le modèle pour traiter le texte", explanation: "Un token est un fragment de mot. Les LLMs découpent le texte en tokens pour le traiter. Par exemple, 'Bonjour' = 1 token, 'intelligence artificielle' = 3-4 tokens. Le modèle prédit les tokens un par un." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 1,
    title: "Les outils du marché : ChatGPT, Claude, Gemini, Mistral",
    slug: "outils-marche-chatgpt-claude-gemini-mistral",
    duration: "25 min",
    description: "Tour d'horizon des principaux outils IA, comparatif détaillé, et pourquoi on utilise principalement Claude dans cette formation.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le paysage IA en 2025 : les acteurs majeurs" },
      { id: "2-2", type: "text", html: "<p>Le marché de l'IA évolue à une vitesse folle. En 2023, il y avait essentiellement ChatGPT. Aujourd'hui, tu as le choix entre plusieurs outils puissants, chacun avec ses forces. Comprendre ces outils, c'est comprendre tes armes. Et crois-moi, avoir les bonnes armes, ça change tout quand tu montes ton agence.</p>" },
      { id: "2-3", type: "heading", level: 2, text: "ChatGPT (OpenAI)" },
      { id: "2-4", type: "text", html: "<p>Le pionnier. ChatGPT a démocratisé l'IA auprès du grand public. GPT-4o et GPT-4 Turbo sont des modèles solides, polyvalents, avec un excellent écosystème (plugins, GPTs personnalisés, DALL-E intégré). <strong>Forces :</strong> le plus connu, bon en rédaction créative, écosystème de plugins riche, capacités multimodales (image, voix). <strong>Faiblesses :</strong> qualité de code moyenne comparée à Claude, peut être verbeux et \"corporate\" dans ses réponses, les GPTs personnalisés sont limités.</p>" },
      { id: "2-5", type: "heading", level: 2, text: "Claude (Anthropic)" },
      { id: "2-6", type: "text", html: "<p>Notre outil principal dans cette formation. Claude (surtout Claude 3.5 Sonnet et Claude 4) est devenu la référence pour le code et les tâches complexes. <strong>Forces :</strong> meilleur en code (de loin), raisonnement supérieur, fenêtre de contexte massive (200K tokens), Claude Code pour coder directement dans le terminal, ton naturel et agréable. <strong>Faiblesses :</strong> moins connu du grand public, pas de génération d'images native, écosystème de plugins moins développé que ChatGPT.</p>" },
      { id: "2-7", type: "callout", variant: "tip", html: "<strong>Pourquoi Claude pour cette formation ?</strong> Parce que tu vas construire des solutions techniques (chatbots, sites web, automatisations). Et pour le code, Claude est objectivement le meilleur. Claude Code te permet de coder directement dans le terminal avec l'IA. C'est un superpouvoir." },
      { id: "2-8", type: "heading", level: 2, text: "Gemini (Google) & Mistral (français)" },
      { id: "2-9", type: "text", html: "<p><strong>Gemini</strong> est le modèle de Google. Son avantage principal ? L'intégration avec l'écosystème Google (Search, Docs, Gmail). Gemini 1.5 Pro offre une fenêtre de contexte de 1M tokens — la plus grande du marché. Idéal pour analyser de très longs documents. <strong>Mistral</strong> est la pépite française. Open-source, rapide, excellent rapport qualité/prix. Mistral Large rivalise avec GPT-4 sur beaucoup de tâches. Et comme c'est français, les données restent en Europe — un argument de vente pour les clients soucieux du RGPD.</p>" },
      { id: "2-10", type: "separator", style: "line" },
      { id: "2-11", type: "heading", level: 2, text: "Tableau comparatif détaillé" },
      { id: "2-12", type: "comparison", headers: ["Critère", "ChatGPT (GPT-4o)", "Claude (3.5 Sonnet)", "Gemini 1.5 Pro", "Mistral Large"], rows: [
        { cells: ["Prix (pro/mois)", "~20$/mois", "~20$/mois", "~20$/mois (inclus Google One)", "~15-20€/mois (via La Plateforme)"] },
        { cells: ["Fenêtre de contexte", "128K tokens", "200K tokens", "1M tokens", "128K tokens"] },
        { cells: ["Qualité du code", "★★★☆", "★★★★★", "★★★☆", "★★★★☆"] },
        { cells: ["Rédaction/créativité", "★★★★☆", "★★★★☆", "★★★☆", "★★★☆"] },
        { cells: ["Vitesse de réponse", "Rapide", "Rapide", "Très rapide", "Très rapide"] },
        { cells: ["Outil CLI (terminal)", "Non", "Claude Code ✅", "Non", "Non"] },
        { cells: ["Open source", "Non", "Non", "Non", "Oui (certains modèles)"] }
      ]},
      { id: "2-13", type: "callout", variant: "info", html: "<strong>Important :</strong> Ces outils évoluent chaque mois. Un modèle qui est \"le meilleur\" aujourd'hui peut être dépassé dans 3 mois. L'important, c'est de maîtriser les techniques de prompting et les workflows — ils sont transposables d'un outil à l'autre." },
      { id: "2-14", type: "heading", level: 2, text: "Tout est transposable" },
      { id: "2-15", type: "text", html: "<p>On utilise Claude dans cette formation parce que c'est le meilleur pour le code et les tâches techniques. Mais tout ce que tu apprendras — les techniques de prompting, la structure des projets, les workflows — fonctionne avec n'importe quel LLM. Si un client préfère ChatGPT, pas de problème. Si Mistral sort un modèle encore meilleur demain, tu switches en 5 minutes. <strong>Tu apprends des compétences, pas un outil.</strong></p>" },
      { id: "2-16", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Compétences de prompting", description: "Universelles, transposables sur tous les LLMs" },
        { id: "n2", label: "Claude (formation)", description: "Notre outil principal pour coder et construire" },
        { id: "n3", label: "ChatGPT (complémentaire)", description: "Pour la rédaction créative et les GPTs personnalisés" },
        { id: "n4", label: "Gemini (complémentaire)", description: "Pour les très longs documents et l'écosystème Google" },
        { id: "n5", label: "Mistral (complémentaire)", description: "Pour les clients RGPD et l'argument French Tech" }
      ]},
      { id: "2-17", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Il existe 4 acteurs majeurs : ChatGPT, Claude, Gemini, Mistral" },
        { id: "c2", text: "Claude est le meilleur pour le code et c'est notre outil principal" },
        { id: "c3", text: "Chaque outil a ses forces — tu les combineras selon les besoins" },
        { id: "c4", text: "Les compétences de prompting sont transposables d'un outil à l'autre" },
        { id: "c5", text: "Le marché évolue vite — reste flexible et curieux" }
      ]}
    ]),
    exercise: "<h3>Exercice : Teste les 4 outils</h3><p>Crée un compte gratuit sur chacun des outils (si ce n'est pas déjà fait) et pose-leur exactement la même question :</p><ol><li>Va sur chat.openai.com, claude.ai, gemini.google.com et chat.mistral.ai</li><li>Pose la question : \"Crée-moi une fonction JavaScript qui prend un tableau de nombres et retourne un objet avec la moyenne, la médiane et l'écart-type\"</li><li>Compare les réponses : qualité du code, clarté de l'explication, présentation</li><li>Note tes impressions : lequel te semble le plus clair ? Le plus précis ? Le plus agréable ?</li></ol><p>Tu verras par toi-même pourquoi on recommande Claude pour le code. Mais garde les autres sous le coude — ils ont chacun leurs moments de gloire.</p>",
    quiz: [
      { type: "mcq", question: "Quel LLM a la plus grande fenêtre de contexte ?", options: JSON.stringify(["ChatGPT (GPT-4o) — 128K tokens", "Claude 3.5 Sonnet — 200K tokens", "Gemini 1.5 Pro — 1M tokens", "Mistral Large — 128K tokens"]), correctAnswer: "Gemini 1.5 Pro — 1M tokens", explanation: "Gemini 1.5 Pro offre une fenêtre de contexte de 1 million de tokens, la plus grande du marché. Idéal pour analyser de très longs documents." },
      { type: "true_false", question: "Les techniques de prompting apprises avec Claude sont transposables sur les autres LLMs.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les fondamentaux du prompting (structure, contexte, exemples, chaîne de pensée) fonctionnent avec tous les LLMs. Tu apprends des compétences universelles, pas un outil spécifique." },
      { type: "mcq", question: "Quel est l'argument principal de Mistral pour les clients européens ?", options: JSON.stringify(["C'est le plus rapide du marché", "C'est open-source et les données restent en Europe (RGPD)", "C'est le moins cher", "C'est le seul à générer des images"]), correctAnswer: "C'est open-source et les données restent en Europe (RGPD)", explanation: "Mistral est français, certains de ses modèles sont open-source, et les données sont traitées en Europe. C'est un argument de vente puissant pour les clients soucieux du RGPD." },
      { type: "true_false", question: "ChatGPT est objectivement le meilleur outil pour écrire du code en 2025.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Claude (notamment Claude 3.5 Sonnet et Claude 4) est reconnu comme supérieur en qualité de code. Claude Code permet même de coder directement dans le terminal. ChatGPT reste bon en rédaction créative et son écosystème est riche, mais pour le code, Claude domine." },
      { type: "mcq", question: "Quel outil offre Claude Code, un assistant de coding directement dans le terminal ?", options: JSON.stringify(["ChatGPT", "Claude", "Gemini", "Mistral"]), correctAnswer: "Claude", explanation: "Claude Code est un outil exclusif d'Anthropic qui permet de coder directement dans le terminal avec l'aide de Claude. C'est un game changer pour les développeurs et c'est notre outil principal dans cette formation." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 1,
    title: "Installer et configurer Claude Code",
    slug: "installer-configurer-claude-code",
    duration: "30 min",
    description: "Installation pas à pas de Claude Code, premiers pas dans le terminal, création du fichier CLAUDE.md et commandes de base.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Claude Code : ton copilote de développement" },
      { id: "3-2", type: "text", html: "<p>Claude Code, c'est l'outil qui va changer ta façon de travailler. Imagine : tu ouvres ton terminal, tu décris ce que tu veux en français, et Claude écrit le code pour toi, crée les fichiers, installe les dépendances, corrige les bugs. Pas besoin d'interface graphique, pas besoin de copier-coller depuis un chat. Tout se passe directement dans ton environnement de travail.</p><p>C'est <strong>l'outil principal</strong> qu'on va utiliser tout au long de cette formation. Alors on va prendre le temps de bien l'installer et le configurer.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Prérequis :</strong> Tu as besoin d'un ordinateur (Mac, Windows ou Linux), d'une connexion Internet et d'un compte Anthropic. Pas besoin de savoir coder — c'est justement ce qu'on va apprendre ensemble avec l'aide de Claude." },
      { id: "3-4", type: "heading", level: 2, text: "Étape 1 : Installer Node.js" },
      { id: "3-5", type: "steps", steps: [
        { title: "Télécharge Node.js", description: "Va sur nodejs.org et télécharge la version LTS (Long Term Support). C'est la version stable recommandée. Clique sur le gros bouton vert." },
        { title: "Installe Node.js", description: "Lance l'installateur et suis les étapes. Laisse tout par défaut. Sur Mac, tu peux aussi utiliser Homebrew : brew install node. Sur Windows, l'installateur fait tout." },
        { title: "Vérifie l'installation", description: "Ouvre un terminal (Terminal sur Mac, PowerShell ou Git Bash sur Windows) et tape : node --version. Tu devrais voir un numéro de version (v20.x.x ou plus). Tape aussi npm --version pour vérifier que npm est installé." },
        { title: "C'est quoi npm ?", description: "npm (Node Package Manager) est le gestionnaire de paquets de Node.js. C'est lui qui va nous permettre d'installer Claude Code et toutes les dépendances de nos projets. Pense à npm comme un App Store pour les développeurs." }
      ]},
      { id: "3-6", type: "heading", level: 2, text: "Étape 2 : Installer Claude Code" },
      { id: "3-7", type: "text", html: "<p>Maintenant que Node.js est installé, on va installer Claude Code. Ouvre ton terminal et tape :</p><p><code>npm install -g @anthropic-ai/claude-code</code></p><p>Le <code>-g</code> signifie \"global\" — ça installe Claude Code pour tout ton système, pas juste pour un projet. Attends quelques secondes que l'installation se termine. Ensuite, vérifie avec :</p><p><code>claude --version</code></p><p>Si tu vois un numéro de version, c'est bon, Claude Code est installé.</p>" },
      { id: "3-8", type: "callout", variant: "warning", html: "<strong>Erreur courante sur Windows :</strong> Si tu as une erreur de permissions, lance PowerShell en tant qu'administrateur (clic droit > Exécuter en tant qu'administrateur). Sur Mac/Linux, ajoute <code>sudo</code> devant la commande." },
      { id: "3-9", type: "heading", level: 2, text: "Étape 3 : Premiers pas dans le terminal" },
      { id: "3-10", type: "text", html: "<p>Le terminal peut sembler intimidant au début, mais c'est ton meilleur ami. Voici les commandes de base dont tu as besoin :</p><ul><li><code>cd mon-dossier</code> — Se déplacer dans un dossier</li><li><code>cd ..</code> — Remonter d'un niveau</li><li><code>ls</code> (Mac/Linux) ou <code>dir</code> (Windows) — Lister les fichiers</li><li><code>mkdir mon-projet</code> — Créer un nouveau dossier</li><li><code>pwd</code> — Voir où tu es actuellement</li></ul><p>Pas besoin de plus pour commencer. Le reste, Claude Code le fera pour toi.</p>" },
      { id: "3-11", type: "heading", level: 2, text: "Étape 4 : Le fichier CLAUDE.md" },
      { id: "3-12", type: "text", html: "<p>Le fichier <code>CLAUDE.md</code> est le cerveau de tes projets avec Claude Code. C'est un fichier que tu places à la racine de ton projet et qui donne à Claude le contexte de ton projet : les technologies utilisées, les conventions de code, les règles à suivre. C'est comme un brief que tu donnes à un développeur avant qu'il commence à bosser.</p><p>Voici un exemple minimal :</p><pre><code># Mon Projet\n\n## Stack technique\n- Next.js 14 (App Router)\n- Tailwind CSS\n- TypeScript\n- Supabase pour la base de données\n\n## Conventions\n- Composants React en PascalCase\n- Fichiers en kebab-case\n- Toujours utiliser les Server Components par défaut\n\n## Structure du projet\n- /src/app — Routes et pages\n- /src/components — Composants réutilisables\n- /src/lib — Utilitaires et helpers</code></pre>" },
      { id: "3-13", type: "callout", variant: "success", html: "<strong>Pro tip :</strong> Plus ton CLAUDE.md est détaillé, meilleur sera le code que Claude produit. Ajoute les patterns que tu utilises, les erreurs à éviter, les conventions de nommage. C'est un investissement de 10 minutes qui te fait gagner des heures." },
      { id: "3-14", type: "heading", level: 2, text: "Les commandes de base de Claude Code" },
      { id: "3-15", type: "comparison", headers: ["Commande", "Ce que ça fait"], rows: [
        { cells: ["claude", "Lance Claude Code en mode interactif dans le dossier courant"] },
        { cells: ["claude \"crée un composant Button\"", "Exécute directement une instruction"] },
        { cells: ["/help", "Affiche l'aide et les commandes disponibles (dans Claude Code)"] },
        { cells: ["/clear", "Efface le contexte de la conversation"] },
        { cells: ["Ctrl+C", "Annuler / quitter Claude Code"] }
      ]},
      { id: "3-16", type: "heading", level: 2, text: "Cursor et Antigravity : les alternatives" },
      { id: "3-17", type: "text", html: "<p><strong>Cursor</strong> est un éditeur de code basé sur VS Code avec l'IA intégrée. Tu codes comme d'habitude, mais l'IA t'aide en temps réel : auto-complétion intelligente, chat intégré, édition par instruction. C'est excellent en complément de Claude Code.</p><p><strong>Antigravity</strong> est un outil plus récent qui permet de créer des applications complètes via une interface visuelle + IA. Idéal pour le prototypage rapide et les clients qui veulent voir un résultat vite.</p><p>On reviendra en détail sur ces deux outils dans le <strong>module 22 (Masterclass outils)</strong>. Pour l'instant, concentre-toi sur Claude Code — c'est la fondation.</p>" },
      { id: "3-18", type: "checklist", title: "Checklist d'installation", items: [
        { id: "c1", text: "Node.js installé (node --version fonctionne)" },
        { id: "c2", text: "npm installé (npm --version fonctionne)" },
        { id: "c3", text: "Claude Code installé (claude --version fonctionne)" },
        { id: "c4", text: "J'ai compris comment naviguer dans le terminal (cd, ls, mkdir)" },
        { id: "c5", text: "Je sais ce qu'est un fichier CLAUDE.md et à quoi il sert" },
        { id: "c6", text: "Je connais les commandes de base de Claude Code" }
      ]}
    ]),
    exercise: "<h3>Exercice : Installe Claude Code et crée ton premier projet</h3><p>Suis ces étapes dans l'ordre :</p><ol><li>Installe Node.js depuis nodejs.org (vérifie avec <code>node --version</code>)</li><li>Installe Claude Code : <code>npm install -g @anthropic-ai/claude-code</code></li><li>Crée un dossier pour ton premier projet : <code>mkdir mon-premier-projet && cd mon-premier-projet</code></li><li>Crée un fichier CLAUDE.md avec le template vu dans la leçon (tu peux le faire avec n'importe quel éditeur de texte)</li><li>Lance Claude Code : <code>claude</code></li><li>Demande-lui : \"Crée un fichier index.html avec une page d'accueil simple qui dit Bienvenue dans mon agence IA\"</li><li>Ouvre le fichier créé dans ton navigateur et admire le résultat</li></ol><p>Bravo, tu viens de créer ta première chose avec l'IA. C'est le début de l'aventure.</p>",
    quiz: [
      { type: "mcq", question: "Quelle commande installe Claude Code globalement ?", options: JSON.stringify(["npm install claude-code", "npm install -g @anthropic-ai/claude-code", "pip install claude-code", "brew install claude-code"]), correctAnswer: "npm install -g @anthropic-ai/claude-code", explanation: "La commande npm install -g @anthropic-ai/claude-code installe Claude Code globalement sur ton système. Le -g est pour 'global', ce qui permet de l'utiliser dans n'importe quel dossier." },
      { type: "true_false", question: "Le fichier CLAUDE.md sert à donner du contexte à Claude Code sur ton projet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le fichier CLAUDE.md est placé à la racine de ton projet et donne à Claude le contexte nécessaire : stack technique, conventions de code, structure du projet. Plus il est détaillé, meilleur sera le code généré." },
      { type: "mcq", question: "Qu'est-ce que npm ?", options: JSON.stringify(["Un langage de programmation", "Un navigateur web", "Le gestionnaire de paquets de Node.js", "Un éditeur de code"]), correctAnswer: "Le gestionnaire de paquets de Node.js", explanation: "npm (Node Package Manager) est le gestionnaire de paquets de Node.js. Il permet d'installer des outils et des librairies comme Claude Code. C'est comme un App Store pour les développeurs." },
      { type: "mcq", question: "Quelle commande permet de lancer Claude Code dans le dossier courant ?", options: JSON.stringify(["start claude", "run claude-code", "claude", "npm start claude"]), correctAnswer: "claude", explanation: "Il suffit de taper 'claude' dans ton terminal pour lancer Claude Code en mode interactif. Il prendra automatiquement en compte le contexte du dossier et le fichier CLAUDE.md s'il existe." },
      { type: "true_false", question: "Cursor et Antigravity seront étudiés en détail dans le module 22 de la formation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Cursor et Antigravity sont mentionnés dans cette leçon pour que tu saches qu'ils existent, mais on y reviendra en détail dans le module 22 (Masterclass outils). Pour l'instant, Claude Code est la priorité." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 1,
    title: "Tes premiers prompts : de débutant à efficace en 1h",
    slug: "premiers-prompts-debutant-a-efficace",
    duration: "25 min",
    description: "La structure d'un bon prompt, exemples concrets de prompts nuls vs efficaces, et les techniques pro : role-playing, chain of thought, few-shot.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi 90% des gens promptent mal" },
      { id: "4-2", type: "text", html: "<p>La plupart des gens tapent un truc vague dans ChatGPT ou Claude, obtiennent un résultat moyen, et concluent que \"l'IA c'est pas si bien que ça\". Le problème n'est pas l'outil — c'est la façon de l'utiliser. Un bon prompt peut faire la différence entre un résultat médiocre et un résultat qui te fait dire \"mais c'est exactement ce que je voulais\".</p><p>Le prompting, c'est une <strong>compétence</strong>. Et comme toute compétence, ça s'apprend. En 1h, tu vas passer de \"débutant qui tape n'importe quoi\" à \"quelqu'un qui obtient des résultats pro dès le premier essai\".</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>La règle d'or :</strong> Plus tu es précis dans ta demande, plus la réponse sera précise. L'IA ne lit pas dans tes pensées. Elle répond à ce que tu lui donnes. Donne-lui beaucoup, elle te rendra beaucoup." },
      { id: "4-4", type: "heading", level: 2, text: "La structure d'un bon prompt" },
      { id: "4-5", type: "steps", steps: [
        { title: "1. Le contexte", description: "Donne à l'IA les informations nécessaires. Qui es-tu ? Quel est le projet ? Quel est le public cible ? Plus l'IA a de contexte, mieux elle peut t'aider." },
        { title: "2. La tâche", description: "Dis clairement ce que tu veux. Pas 'aide-moi avec mon site', mais 'crée-moi une page d'accueil pour un restaurant italien avec un menu, des horaires et un formulaire de réservation'." },
        { title: "3. Le format", description: "Précise le format de sortie attendu. Du code ? Du texte ? Une liste ? Un tableau ? En français ? En anglais ? Avec des commentaires dans le code ?" },
        { title: "4. Les contraintes", description: "Ajoute les limites : technologies à utiliser, style à respecter, choses à éviter, longueur souhaitée. Les contraintes guident l'IA vers le résultat exact que tu veux." }
      ]},
      { id: "4-6", type: "heading", level: 2, text: "Exemples : prompts nuls vs prompts efficaces" },
      { id: "4-7", type: "comparison", headers: ["Prompt nul ❌", "Prompt efficace ✅"], rows: [
        { cells: ["\"Fais-moi un site web\"", "\"Crée une landing page pour une agence IA avec : un hero section accrocheur, 3 services avec icônes, une section témoignages, un CTA. Stack : Next.js + Tailwind. Style : moderne, sombre, professionnel\""] },
        { cells: ["\"Écris un email\"", "\"Écris un email de prospection pour un restaurant qui n'a pas de chatbot. Ton : professionnel mais pas corporate. Montre le problème (répondre aux mêmes questions 50 fois/jour) et la solution (chatbot IA). Termine par un CTA pour un appel de 15 min\""] },
        { cells: ["\"Aide-moi avec JavaScript\"", "\"Crée une fonction JavaScript qui prend un tableau de commandes (objets avec montant et date) et retourne les stats mensuelles : total, moyenne, nombre de commandes. Ajoute des commentaires et gère le cas du tableau vide\""] },
        { cells: ["\"Corrige mon code\"", "\"Mon composant React affiche une erreur 'Cannot read property of undefined' à la ligne 23. Voici le code : [coller le code]. Le composant reçoit un objet user en props qui peut être null au chargement. Corrige le bug et explique ce qui se passe\""] }
      ]},
      { id: "4-8", type: "separator", style: "line" },
      { id: "4-9", type: "heading", level: 2, text: "Les techniques avancées de prompting" },
      { id: "4-10", type: "heading", level: 3, text: "Technique 1 : Le role-playing" },
      { id: "4-11", type: "text", html: "<p>Tu demandes à l'IA de jouer un rôle spécifique. \"Tu es un expert en UX design avec 15 ans d'expérience. Analyse cette page d'accueil et donne-moi 5 améliorations concrètes.\" En donnant un rôle, tu cadres le style, le niveau d'expertise et l'angle de la réponse. C'est ultra-puissant.</p>" },
      { id: "4-12", type: "heading", level: 3, text: "Technique 2 : Chain of Thought (CoT)" },
      { id: "4-13", type: "text", html: "<p>Tu demandes à l'IA de raisonner étape par étape. \"Réfléchis étape par étape avant de répondre\" ou \"Explique ton raisonnement\". Cette technique force le modèle à structurer sa pensée et donne des résultats nettement meilleurs sur les problèmes complexes. Les erreurs de logique chutent drastiquement.</p>" },
      { id: "4-14", type: "heading", level: 3, text: "Technique 3 : Few-shot (exemples)" },
      { id: "4-15", type: "text", html: "<p>Tu donnes des exemples de ce que tu veux avant de poser ta question. \"Voici 2 exemples de descriptions de produit que j'aime : [exemple 1] [exemple 2]. Maintenant, écris une description pour ce produit : [ton produit]\". Les exemples calibrent le style, le ton et le format bien mieux que des instructions textuelles.</p>" },
      { id: "4-16", type: "callout", variant: "success", html: "<strong>Le combo gagnant :</strong> Combine les 3 techniques. \"Tu es un copywriter expert (role-playing). Voici 2 exemples de landing pages réussies (few-shot). Réfléchis étape par étape aux éléments clés d'une bonne landing page, puis crée la mienne (CoT).\" C'est comme ça que tu obtiens des résultats de niveau agence." },
      { id: "4-17", type: "checklist", title: "Ta checklist prompting", items: [
        { id: "c1", text: "Mon prompt contient du contexte (qui, quoi, pour qui)" },
        { id: "c2", text: "La tâche est précise et non ambiguë" },
        { id: "c3", text: "J'ai précisé le format de sortie attendu" },
        { id: "c4", text: "J'ai ajouté des contraintes quand nécessaire" },
        { id: "c5", text: "J'utilise le role-playing pour cadrer l'expertise" },
        { id: "c6", text: "J'utilise le Chain of Thought pour les problèmes complexes" }
      ]}
    ]),
    exercise: "<h3>Exercice : Transforme ces prompts nuls en prompts efficaces</h3><p>Prends chacun de ces prompts médiocres et réécris-les en utilisant la structure (contexte, tâche, format, contraintes) et au moins une technique avancée :</p><ol><li>\"Fais-moi un logo\" → Réécris avec du contexte (type d'entreprise, valeurs) et des contraintes (style, couleurs)</li><li>\"Aide-moi à écrire un post LinkedIn\" → Réécris avec du role-playing et un exemple (few-shot)</li><li>\"Crée une base de données\" → Réécris avec les détails du projet et demande le raisonnement étape par étape (CoT)</li><li>\"Corrige ce bug\" → Réécris en donnant le contexte complet, le code, et l'erreur exacte</li></ol><p>Teste tes prompts améliorés dans Claude et compare la qualité des réponses avec les prompts originaux. La différence devrait être flagrante.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 4 éléments d'un bon prompt ?", options: JSON.stringify(["Titre, corps, conclusion, signature", "Contexte, tâche, format, contraintes", "Introduction, développement, exemples, résumé", "Sujet, verbe, complément, ponctuation"]), correctAnswer: "Contexte, tâche, format, contraintes", explanation: "Un bon prompt contient : 1) le contexte (qui tu es, le projet), 2) la tâche (ce que tu veux), 3) le format (comment tu le veux), 4) les contraintes (les limites et règles). C'est la structure qui garantit des résultats précis." },
      { type: "true_false", question: "Le Chain of Thought consiste à demander à l'IA de raisonner étape par étape avant de répondre.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le Chain of Thought (CoT) force le modèle à décomposer son raisonnement. En ajoutant 'réfléchis étape par étape', tu obtiens des réponses plus structurées et moins d'erreurs de logique." },
      { type: "mcq", question: "Qu'est-ce que le few-shot prompting ?", options: JSON.stringify(["Donner très peu d'informations à l'IA", "Fournir des exemples du résultat attendu avant de poser sa question", "Utiliser plusieurs IA en même temps", "Poser la question en plusieurs langues"]), correctAnswer: "Fournir des exemples du résultat attendu avant de poser sa question", explanation: "Le few-shot prompting consiste à donner quelques exemples (few shots) du type de résultat que tu veux. Ça calibre le style, le ton et le format bien mieux que des instructions textuelles." },
      { type: "mcq", question: "Que manque-t-il au prompt \"Fais-moi un site web\" pour être efficace ?", options: JSON.stringify(["Rien, c'est suffisant", "Le contexte, les détails du contenu, le style et les technologies", "Il faut juste ajouter 's'il te plaît'", "Le nom du développeur"]), correctAnswer: "Le contexte, les détails du contenu, le style et les technologies", explanation: "\"Fais-moi un site web\" est beaucoup trop vague. Il manque le contexte (quel type de site ? pour qui ?), le contenu (sections, textes), le style (moderne ? corporate ?) et les technologies (Next.js ? WordPress ?)." },
      { type: "true_false", question: "Le role-playing en prompting consiste à demander à l'IA de jouer un rôle spécifique pour cadrer sa réponse.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "En demandant à l'IA de jouer un rôle ('Tu es un expert en marketing digital avec 10 ans d'expérience'), tu cadres le niveau d'expertise, le vocabulaire et l'angle de la réponse. C'est une technique très efficace." }
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 1,
    title: "Ce qu'une agence IA peut vendre (et à quel prix)",
    slug: "agence-ia-services-et-prix",
    duration: "25 min",
    description: "Les services les plus demandés, grille tarifaire réaliste, exemples de missions avec prix, et le modèle setup + abonnement mensuel.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Les 5 services les plus demandés" },
      { id: "5-2", type: "text", html: "<p>Quand tu montes une agence IA, la question numéro 1 c'est : \"je vends quoi, et à combien ?\". La bonne nouvelle, c'est que la demande est claire. Les entreprises veulent des choses concrètes, pas de la théorie sur l'IA. Voici les 5 services qui génèrent le plus de revenus et de demandes en 2025.</p>" },
      { id: "5-3", type: "steps", steps: [
        { title: "1. Chatbots IA personnalisés", description: "Le service star. Un chatbot entraîné sur les données du client (FAQ, catalogue, procédures) qui répond 24/7 aux questions. Chaque entreprise qui a un service client en a besoin. C'est récurrent et ça se vend facilement." },
        { title: "2. Automatisations de process", description: "Automatiser les tâches répétitives : tri d'emails, extraction de données, relances clients, génération de rapports. Tu connectes Make ou n8n avec une IA et tu fais gagner 10h/semaine au client." },
        { title: "3. Sites web et landing pages", description: "Les PME ont besoin de sites modernes. Avec l'IA, tu peux livrer un site pro en quelques jours au lieu de plusieurs semaines. Landing pages, sites vitrines, e-commerce simple." },
        { title: "4. Agents vocaux IA", description: "L'IA qui décroche le téléphone. Pour les restaurants, cabinets médicaux, services de réservation. Le client appelle, l'IA répond, prend les rendez-vous, filtre les demandes. C'est nouveau et ça impressionne." },
        { title: "5. Traitement de documents", description: "Extraire des données de PDF, factures, contrats. Classifier des documents. Générer des résumés automatiques. Les cabinets comptables, juridiques et RH en raffolent." }
      ]},
      { id: "5-4", type: "separator", style: "line" },
      { id: "5-5", type: "heading", level: 2, text: "Grille tarifaire réaliste" },
      { id: "5-6", type: "comparison", headers: ["Service", "Prix setup (one-shot)", "Abonnement mensuel", "Temps de réalisation"], rows: [
        { cells: ["Chatbot IA basique", "500 - 1 500€", "50 - 150€/mois", "2-5 jours"] },
        { cells: ["Chatbot IA avancé (RAG)", "2 000 - 5 000€", "100 - 300€/mois", "1-2 semaines"] },
        { cells: ["Automatisation simple", "500 - 1 500€", "50 - 100€/mois", "1-3 jours"] },
        { cells: ["Automatisation complexe", "2 000 - 4 000€", "100 - 250€/mois", "1-2 semaines"] },
        { cells: ["Site vitrine / landing page", "1 000 - 3 000€", "50 - 150€/mois (maintenance)", "3-7 jours"] },
        { cells: ["Agent vocal IA", "2 000 - 5 000€", "150 - 400€/mois", "1-2 semaines"] },
        { cells: ["Traitement documents", "1 500 - 4 000€", "100 - 300€/mois", "1-2 semaines"] }
      ]},
      { id: "5-7", type: "callout", variant: "tip", html: "<strong>Le secret :</strong> Le vrai business n'est pas dans le setup (le paiement unique). C'est dans l'abonnement mensuel. 10 clients à 200€/mois = 2 000€/mois de revenus récurrents. Et ça s'accumule. Après 6 mois avec 10 clients, tu as 2 000€/mois qui tombent même quand tu dors." },
      { id: "5-8", type: "heading", level: 2, text: "Exemples de missions réelles avec prix" },
      { id: "5-9", type: "text", html: "<p>Voici des exemples concrets de missions qu'une agence IA peut réaliser. Ce sont des cas réalistes basés sur le marché actuel :</p><ul><li><strong>Restaurant gastronomique</strong> — Chatbot de réservation + FAQ automatique. Setup : 1 200€, abonnement : 100€/mois. Temps : 3 jours.</li><li><strong>Cabinet comptable</strong> — Automatisation tri d'emails + extraction de données de factures PDF. Setup : 3 000€, abonnement : 200€/mois. Temps : 10 jours.</li><li><strong>Agence immobilière</strong> — Chatbot qualifiant les prospects + agent vocal pour les visites. Setup : 4 500€, abonnement : 350€/mois. Temps : 2 semaines.</li><li><strong>E-commerce mode</strong> — Landing page + chatbot conseiller style basé sur le catalogue. Setup : 3 500€, abonnement : 200€/mois. Temps : 10 jours.</li></ul>" },
      { id: "5-10", type: "heading", level: 2, text: "Le modèle setup + abonnement mensuel" },
      { id: "5-11", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Setup (paiement unique)", description: "Tu construis la solution : chatbot, automatisation, site. Le client paie une fois." },
        { id: "n2", label: "Livraison & formation", description: "Tu livres, tu formes le client, tu ajustes selon les retours." },
        { id: "n3", label: "Abonnement mensuel", description: "Maintenance, hébergement, mises à jour, support. Revenu récurrent." },
        { id: "n4", label: "Upsell & évolutions", description: "Le client est satisfait → tu lui proposes de nouveaux services. Le cercle vertueux." }
      ]},
      { id: "5-12", type: "callout", variant: "info", html: "<strong>Pourquoi l'abonnement ?</strong> Le chatbot a besoin d'hébergement, l'IA consomme des tokens (coût API), les automatisations nécessitent de la maintenance. C'est légitime de facturer un abonnement. Et pour le client, c'est rassurant : il sait qu'il a un support continu." },
      { id: "5-13", type: "callout", variant: "warning", html: "<strong>Erreur à éviter :</strong> Ne sous-facture pas pour \"gagner le client\". Un chatbot à 200€ setup sans abonnement, c'est un cadeau que tu vas regretter. Le client ne valorise pas ce qui est trop bon marché, et toi tu ne peux pas vivre avec. Facture à ta juste valeur." },
      { id: "5-14", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Les 5 services les plus demandés : chatbots, automatisations, sites, agents vocaux, traitement documents" },
        { id: "c2", text: "Le modèle setup + abonnement mensuel est la clé des revenus récurrents" },
        { id: "c3", text: "Un chatbot basique se vend entre 500€ et 1 500€ setup + 50-150€/mois" },
        { id: "c4", text: "10 clients à 200€/mois = 2 000€/mois de revenus récurrents" },
        { id: "c5", text: "Ne jamais sous-facturer — le prix reflète la valeur" }
      ]}
    ]),
    exercise: "<h3>Exercice : Crée ton offre de démarrage</h3><p>En te basant sur les grilles tarifaires vues dans la leçon, crée ton offre de lancement :</p><ol><li>Choisis 2 services parmi les 5 que tu veux proposer en premier (commence simple)</li><li>Définis un prix setup et un prix d'abonnement pour chacun</li><li>Rédige une description de chaque offre en 3 phrases max (ce que le client obtient, pourquoi c'est utile, ce que ça inclut)</li><li>Reprends les 5 entreprises de l'exercice de la leçon 1 — laquelle contacterais-tu en premier et avec quelle offre ?</li></ol><p>Garde ce document — c'est la base de ta future page \"Services\" et de tes propositions commerciales.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le service IA le plus demandé par les entreprises ?", options: JSON.stringify(["La création de logos avec l'IA", "Les chatbots IA personnalisés", "La génération de musique", "Les deepfakes vidéo"]), correctAnswer: "Les chatbots IA personnalisés", explanation: "Les chatbots IA personnalisés sont le service le plus demandé. Chaque entreprise avec un service client en a besoin : répondre 24/7, qualifier les prospects, automatiser les FAQ. C'est le service star d'une agence IA." },
      { type: "true_false", question: "Le vrai business d'une agence IA est dans le setup (paiement unique) plutôt que dans l'abonnement mensuel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse. Le setup est important, mais le vrai business est dans l'abonnement mensuel (revenus récurrents). 10 clients à 200€/mois = 2 000€/mois qui tombent chaque mois, même quand tu dors." },
      { type: "mcq", question: "Combien peut coûter un chatbot IA avancé (avec RAG) en setup ?", options: JSON.stringify(["50 - 100€", "500 - 1 000€", "2 000 - 5 000€", "20 000 - 50 000€"]), correctAnswer: "2 000 - 5 000€", explanation: "Un chatbot avancé avec RAG (entraîné sur les données du client) se facture entre 2 000€ et 5 000€ en setup, plus un abonnement mensuel de 100 à 300€. C'est un service à forte valeur ajoutée." },
      { type: "true_false", question: "Il est recommandé de sous-facturer au début pour attirer ses premiers clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Sous-facturer est une erreur classique. Le client ne valorise pas ce qui est trop bon marché, et toi tu ne peux pas vivre avec. Facture à ta juste valeur dès le départ. Tu peux offrir un bonus ou une garantie, mais pas brader tes prix." },
      { type: "mcq", question: "Quel revenu mensuel récurrent obtiens-tu avec 10 clients à 200€/mois d'abonnement ?", options: JSON.stringify(["200€/mois", "1 000€/mois", "2 000€/mois", "10 000€/mois"]), correctAnswer: "2 000€/mois", explanation: "10 clients × 200€/mois = 2 000€/mois de revenus récurrents. Et ça s'accumule : chaque nouveau client ajoute à la base. C'est la puissance du modèle d'abonnement." }
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 1,
    title: "Démo : on crée un chatbot en 30 min devant toi",
    slug: "demo-chatbot-30-minutes",
    duration: "35 min",
    description: "Live coding d'un chatbot fonctionnel avec Claude Code : de zéro au résultat en 30 minutes pour te montrer la puissance de l'outil.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le but de cette leçon : t'impressionner" },
      { id: "6-2", type: "text", html: "<p>On a parlé théorie, outils, marché. Maintenant, on passe à l'action. Dans cette leçon, on va créer un <strong>chatbot IA fonctionnel</strong> de A à Z. Pas un prototype moche — un vrai chatbot avec une interface propre, qui répond intelligemment aux questions, et que tu pourrais montrer à un client. Le tout en 30 minutes.</p><p>Le but ? Te prouver que c'est possible. Que toi aussi tu peux le faire. Et que ce que tu vas vendre 1 000€ à 5 000€ ne prend pas des semaines de travail.</p>" },
      { id: "6-3", type: "callout", variant: "success", html: "<strong>Ce qu'on va construire :</strong> Un chatbot pour un restaurant fictif qui répond aux questions sur le menu, les horaires, la réservation. Interface moderne, réponses intelligentes, déployable en ligne." },
      { id: "6-4", type: "heading", level: 2, text: "Le plan de construction" },
      { id: "6-5", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "1. Créer le projet", description: "Initialiser un projet Next.js avec Claude Code" },
        { id: "n2", label: "2. Interface chat", description: "Créer l'interface : bulle de messages, input, bouton envoyer" },
        { id: "n3", label: "3. API route", description: "Connecter l'interface à l'API Claude pour les réponses" },
        { id: "n4", label: "4. System prompt", description: "Configurer le chatbot avec le contexte du restaurant" },
        { id: "n5", label: "5. Design & polish", description: "Rendre l'interface belle et professionnelle" }
      ]},
      { id: "6-6", type: "heading", level: 2, text: "Étape 1 : Créer le projet avec Claude Code" },
      { id: "6-7", type: "text", html: "<p>Ouvre ton terminal et lance ces commandes :</p><pre><code>mkdir chatbot-restaurant && cd chatbot-restaurant\nclaude</code></pre><p>Puis demande à Claude :</p><p>\"Crée un projet Next.js avec TypeScript et Tailwind CSS. Configure l'App Router. Ajoute un fichier CLAUDE.md qui décrit le projet : un chatbot IA pour un restaurant.\"</p><p>Claude va créer toute la structure du projet en quelques secondes. C'est ça la puissance de l'outil.</p>" },
      { id: "6-8", type: "heading", level: 2, text: "Étape 2 : L'interface de chat" },
      { id: "6-9", type: "text", html: "<p>Demande à Claude Code :</p><p>\"Crée une interface de chat moderne dans la page d'accueil. Je veux : un header avec le nom du restaurant et un logo, une zone de messages avec des bulles de couleurs différentes (user = bleu, assistant = gris), un input en bas avec un bouton envoyer. Style : moderne, coins arrondis, ombres légères.\"</p><p>Claude va créer les composants React, le state management pour les messages, et le CSS. En 2 minutes, tu as une interface de chat fonctionnelle.</p>" },
      { id: "6-10", type: "heading", level: 2, text: "Étape 3 : Connecter à l'API Claude" },
      { id: "6-11", type: "steps", steps: [
        { title: "Créer l'API route", description: "Demande à Claude : \"Crée une API route /api/chat qui reçoit les messages et appelle l'API Claude pour générer une réponse. Utilise le SDK @anthropic-ai/sdk.\"" },
        { title: "Configurer le system prompt", description: "Le system prompt, c'est le \"cerveau\" du chatbot. C'est là que tu définis sa personnalité, ses connaissances, ses limites. Exemple : \"Tu es l'assistant du restaurant La Bella Italia. Tu connais le menu, les horaires (12h-14h et 19h-22h30), et tu peux aider à réserver.\"" },
        { title: "Connecter le frontend", description: "Demande à Claude de connecter l'interface au backend : quand l'utilisateur envoie un message, le frontend appelle l'API route qui appelle Claude et renvoie la réponse. Avec le streaming pour que la réponse s'affiche progressivement." },
        { title: "Tester", description: "Lance le serveur avec npm run dev, ouvre le navigateur, et teste. Pose des questions sur le menu, les horaires, la réservation. Le chatbot devrait répondre de façon pertinente et naturelle." }
      ]},
      { id: "6-12", type: "callout", variant: "warning", html: "<strong>Clé API :</strong> Tu auras besoin d'une clé API Anthropic. Crée un compte sur console.anthropic.com, génère une clé, et mets-la dans un fichier .env.local : <code>ANTHROPIC_API_KEY=ta-clé-ici</code>. Ne partage jamais cette clé et ne la mets jamais dans Git." },
      { id: "6-13", type: "heading", level: 2, text: "Étape 4 : Le polish qui fait la différence" },
      { id: "6-14", type: "text", html: "<p>Le chatbot fonctionne. Maintenant, on le rend beau et pro :</p><ul><li><strong>Messages de bienvenue :</strong> Le chatbot se présente automatiquement quand la page charge</li><li><strong>Suggestions de questions :</strong> 3 boutons cliquables sous l'input (\"Voir le menu\", \"Réserver une table\", \"Horaires d'ouverture\")</li><li><strong>Indicateur de frappe :</strong> 3 petits points qui bougent pendant que l'IA réfléchit</li><li><strong>Responsive :</strong> Ça doit être beau sur mobile aussi</li><li><strong>Favicon et titre :</strong> Les petits détails qui montrent que c'est pro</li></ul><p>Chacun de ces ajouts se fait en une demande à Claude Code. Le tout prend 10 minutes.</p>" },
      { id: "6-15", type: "callout", variant: "tip", html: "<strong>Le mindset client :</strong> Ce chatbot que tu viens de créer en 30 minutes, un client paierait 1 000€ à 2 000€ pour l'avoir. Pas parce que ça te prend 30 minutes — mais parce que ça lui fait gagner des heures chaque jour et que ça améliore l'expérience de ses clients. Tu vends la valeur, pas le temps." },
      { id: "6-16", type: "separator", style: "dots" },
      { id: "6-17", type: "heading", level: 2, text: "Ce que tu viens de voir" },
      { id: "6-18", type: "checklist", title: "Récapitulatif de la démo", items: [
        { id: "c1", text: "Créer un projet Next.js complet en quelques secondes avec Claude Code" },
        { id: "c2", text: "Construire une interface de chat moderne et responsive" },
        { id: "c3", text: "Connecter à l'API Claude avec un system prompt personnalisé" },
        { id: "c4", text: "Ajouter des finitions pro (suggestions, typing indicator, bienvenue)" },
        { id: "c5", text: "Le tout en moins de 30 minutes — et vendable entre 1 000€ et 2 000€" }
      ]}
    ]),
    exercise: "<h3>Exercice : Reproduis le chatbot toi-même</h3><p>C'est ton tour ! Reproduis le chatbot de cette leçon, mais pour un business différent :</p><ol><li>Choisis un type de business : cabinet dentiste, salon de coiffure, agence immobilière ou boutique en ligne</li><li>Crée le projet avec Claude Code (même procédure que dans la leçon)</li><li>Personnalise le system prompt avec les informations de ton business fictif (services, horaires, tarifs)</li><li>Personnalise l'interface : couleurs, nom, suggestions de questions adaptées</li><li>Teste le chatbot : pose au moins 10 questions différentes et vérifie que les réponses sont pertinentes</li></ol><p>Bonus : déploie-le sur Vercel (c'est gratuit) et partage le lien. Tu viens de créer ton premier portfolio piece.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle du system prompt dans un chatbot IA ?", options: JSON.stringify(["C'est le message d'accueil affiché à l'utilisateur", "C'est la configuration qui définit la personnalité, les connaissances et les limites du chatbot", "C'est le mot de passe pour accéder au chatbot", "C'est le code CSS du chatbot"]), correctAnswer: "C'est la configuration qui définit la personnalité, les connaissances et les limites du chatbot", explanation: "Le system prompt est le 'cerveau' du chatbot. C'est là que tu définis qui il est, ce qu'il sait, comment il doit répondre et ce qu'il ne doit pas faire. C'est invisible pour l'utilisateur mais crucial pour la qualité des réponses." },
      { type: "true_false", question: "Il faut plusieurs semaines de développement pour créer un chatbot IA fonctionnel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Avec Claude Code et les bons outils, tu peux créer un chatbot fonctionnel et professionnel en 30 minutes à quelques heures. C'est la puissance de l'IA appliquée au développement." },
      { type: "mcq", question: "Où doit-on stocker la clé API Anthropic dans un projet Next.js ?", options: JSON.stringify(["Dans le fichier package.json", "Dans un fichier .env.local à la racine du projet", "Dans le code source directement", "Dans le fichier README.md"]), correctAnswer: "Dans un fichier .env.local à la racine du projet", explanation: "La clé API doit être dans un fichier .env.local qui n'est jamais commité dans Git. C'est une variable d'environnement sécurisée. Ne mets JAMAIS ta clé API directement dans le code source." },
      { type: "true_false", question: "Le prix d'un chatbot doit refléter le temps passé à le créer, pas la valeur qu'il apporte au client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu vends la valeur, pas le temps. Un chatbot créé en 30 minutes qui fait gagner 10h/semaine au client et améliore son service vaut 1 000€ à 5 000€. Le client paie pour la solution à son problème, pas pour tes heures de travail." },
      { type: "mcq", question: "Quelles finitions transforment un chatbot basique en chatbot professionnel ?", options: JSON.stringify(["Ajouter plus de couleurs et des animations Flash", "Message de bienvenue, suggestions de questions, indicateur de frappe, responsive", "Mettre de la publicité dans le chat", "Ajouter un captcha avant chaque message"]), correctAnswer: "Message de bienvenue, suggestions de questions, indicateur de frappe, responsive", explanation: "Les finitions pro : un message de bienvenue automatique, des boutons de suggestions cliquables, un indicateur de frappe (typing), et un design responsive. Ce sont ces détails qui font dire au client 'waouh, c'est pro'." }
    ],
  },

  // ─── LEÇON 7 ───
  {
    order: 7,
    module: 1,
    title: "Ton identité d'agence : nom, pitch, positionnement",
    slug: "identite-agence-nom-pitch-positionnement",
    duration: "25 min",
    description: "Trouver ton nom d'agence, créer ton pitch en 30 secondes, choisir ta niche et éviter les erreurs classiques.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Pourquoi l'identité compte dès le jour 1" },
      { id: "7-2", type: "text", html: "<p>Tu pourrais te dire \"je m'occuperai du nom et du branding plus tard, là je veux juste apprendre\". Erreur. Ton identité d'agence, c'est ce qui te permet de te présenter, de te vendre, d'avoir de la crédibilité. Même si tu n'as encore aucun client, avoir un nom, un pitch et un positionnement clairs te donne confiance et te rend pris au sérieux. C'est la différence entre \"je fais un peu d'IA\" et \"je dirige OpexIA, une agence spécialisée en solutions IA pour les PME\".</p>" },
      { id: "7-3", type: "callout", variant: "info", html: "<strong>Pas besoin d'être parfait :</strong> Tu peux changer de nom, de pitch et de positionnement plus tard. L'important, c'est d'avoir quelque chose maintenant pour avancer. Les meilleurs noms d'agence sont souvent trouvés en 15 minutes, pas en 3 semaines de brainstorming." },
      { id: "7-4", type: "heading", level: 2, text: "Trouver ton nom d'agence" },
      { id: "7-5", type: "steps", steps: [
        { title: "La méthode combinaison", description: "Combine un mot lié à ton domaine (AI, Data, Tech, Auto, Smart, Digital) avec un mot qui évoque la valeur (Labs, Studio, Solutions, Works, Agency). Exemples : NeuralWorks, SmartFlow AI, DataCraft Studio." },
        { title: "La méthode personnelle", description: "Utilise tes initiales, ton prénom ou un mot qui te représente. Exemples : MK Digital, Studio Thomas, LR Solutions IA. Simple et mémorable." },
        { title: "La méthode concept", description: "Choisis un mot qui évoque ta mission. Exemples : Catalyst (catalyseur de changement), Nexus (point de connexion), Synapse (lien intelligent). Plus brandable, plus haut de gamme." },
        { title: "Le test de validation", description: "Ton nom doit passer ces tests : facile à prononcer au téléphone, facile à épeler dans un email, le .com ou .fr est disponible, il n'existe pas déjà une entreprise connue avec ce nom." }
      ]},
      { id: "7-6", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Demande à Claude de t'aider. Prompt : \"Génère 20 noms d'agence IA pour un freelance qui se spécialise en chatbots et automatisations pour les PME. Style : moderne, professionnel, mémorable. Évite les noms trop techniques ou clichés.\" Tu auras 20 options en 10 secondes." },
      { id: "7-7", type: "heading", level: 2, text: "Créer ton pitch en 30 secondes" },
      { id: "7-8", type: "text", html: "<p>Le pitch, c'est ta réponse quand quelqu'un te demande \"tu fais quoi dans la vie ?\". Tu as 30 secondes pour capter son attention. La structure parfaite :</p><p><strong>\"J'aide [cible] à [résultat] grâce à [comment].\"</strong></p><p>Exemples :</p><ul><li>\"J'aide les restaurants à automatiser leur service client grâce à des chatbots IA qui répondent 24/7.\"</li><li>\"J'aide les PME à gagner 10h par semaine grâce à des automatisations intelligentes.\"</li><li>\"Je crée des solutions IA sur mesure qui permettent aux entreprises de faire plus avec moins.\"</li></ul><p>Note les 3 ingrédients : une cible précise, un résultat concret, une méthode claire. Pas de jargon, pas de bullshit.</p>" },
      { id: "7-9", type: "separator", style: "line" },
      { id: "7-10", type: "heading", level: 2, text: "Choisir ta niche / ton positionnement" },
      { id: "7-11", type: "comparison", headers: ["Positionnement généraliste", "Positionnement niché"], rows: [
        { cells: ["\"Je fais de l'IA pour tout le monde\"", "\"Je fais des chatbots pour les restaurants\""] },
        { cells: ["Tu es en concurrence avec tout le monde", "Tu es L'expert de ta niche"] },
        { cells: ["Le client ne sait pas pourquoi te choisir toi", "Le client sait exactement pourquoi te choisir"] },
        { cells: ["Marketing difficile (message flou)", "Marketing facile (message ultra-clair)"] },
        { cells: ["Prix bas (pas de différenciation)", "Prix plus élevés (expertise perçue)"] }
      ]},
      { id: "7-12", type: "text", html: "<p>Les meilleures niches pour démarrer en 2025 :</p><ul><li><strong>Restaurants et hôtellerie</strong> — Chatbots de réservation, menu digital, avis automatisés</li><li><strong>Cabinets médicaux / dentistes</strong> — Prise de RDV, rappels, FAQ patients</li><li><strong>Immobilier</strong> — Qualification de prospects, visites virtuelles, suivi automatisé</li><li><strong>E-commerce</strong> — Service client, recommandations produits, gestion des retours</li><li><strong>Cabinets comptables / juridiques</strong> — Traitement de documents, automatisation de tâches répétitives</li></ul>" },
      { id: "7-13", type: "callout", variant: "warning", html: "<strong>Les erreurs à éviter :</strong> 1) Ne pas se nicher du tout (\"je fais tout pour tout le monde\"). 2) Choisir un nom trop long ou imprononçable. 3) Copier le nom d'une agence existante. 4) Attendre d'avoir le nom parfait pour commencer (la paralysie du perfectionnisme)." },
      { id: "7-14", type: "heading", level: 2, text: "Ton identité visuelle (le minimum)" },
      { id: "7-15", type: "text", html: "<p>Tu n'as pas besoin d'un designer à ce stade. Voici le minimum pour être crédible :</p><ul><li><strong>Un logo simple :</strong> Ton nom en texte avec une police moderne (Inter, Plus Jakarta Sans). Tu peux ajouter un petit symbole si tu veux. Utilise Canva ou demande à Claude de te le générer en SVG.</li><li><strong>2-3 couleurs :</strong> Une couleur d'accent (bleu, violet, vert), du noir pour le texte, du blanc/gris pour les fonds. C'est tout.</li><li><strong>Une photo pro :</strong> Pas besoin d'un photographe — un selfie en bonne lumière avec un fond neutre et des vêtements pro suffit.</li></ul>" },
      { id: "7-16", type: "checklist", title: "Checklist identité d'agence", items: [
        { id: "c1", text: "J'ai un nom d'agence (vérifié : domaine disponible, pas de doublon)" },
        { id: "c2", text: "J'ai un pitch de 30 secondes (cible + résultat + comment)" },
        { id: "c3", text: "J'ai choisi une niche ou un positionnement de départ" },
        { id: "c4", text: "J'ai au minimum un logo texte + 2-3 couleurs" },
        { id: "c5", text: "Je peux me présenter avec confiance en networking" }
      ]}
    ]),
    exercise: "<h3>Exercice : Crée ton identité d'agence</h3><p>Prends 20 minutes pour créer ton identité de démarrage :</p><ol><li><strong>Le nom :</strong> Utilise les 3 méthodes vues dans la leçon (combinaison, personnelle, concept) pour générer au moins 10 noms. Demande aussi à Claude 10 suggestions. Choisis ton top 3, puis ton préféré. Vérifie que le domaine .com ou .fr est disponible (sur namecheap.com ou ovh.com).</li><li><strong>Le pitch :</strong> Écris ta phrase \"J'aide [cible] à [résultat] grâce à [comment]\". Dis-la à voix haute 3 fois. Si ça sonne naturel, c'est bon.</li><li><strong>Le positionnement :</strong> Choisis 1-2 niches de démarrage dans la liste de la leçon (tu pourras élargir plus tard).</li><li><strong>Le visuel :</strong> Crée un logo texte simple sur Canva ou demande à Claude de te générer un SVG avec ton nom.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la structure d'un bon pitch de 30 secondes ?", options: JSON.stringify(["Nom + diplômes + expérience", "J'aide [cible] à [résultat] grâce à [comment]", "Je suis développeur IA et je fais plein de choses", "Mon agence fait de l'IA, du web, du marketing et du SEO"]), correctAnswer: "J'aide [cible] à [résultat] grâce à [comment]", explanation: "La structure 'J'aide [cible] à [résultat] grâce à [comment]' est claire, concise et centrée sur la valeur pour le client. C'est la façon la plus efficace de se présenter en 30 secondes." },
      { type: "true_false", question: "Un positionnement niché permet de facturer plus cher qu'un positionnement généraliste.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "En te nichant, tu deviens L'expert de ton domaine. L'expertise perçue justifie des prix plus élevés. Un 'spécialiste chatbots pour restaurants' peut facturer plus qu'un 'développeur IA généraliste' parce qu'il comprend les besoins spécifiques du secteur." },
      { type: "mcq", question: "Quel est le test principal pour valider un nom d'agence ?", options: JSON.stringify(["Il doit contenir le mot 'IA' ou 'AI'", "Il doit être en anglais", "Facile à prononcer, à épeler, et le domaine est disponible", "Il doit avoir plus de 3 mots"]), correctAnswer: "Facile à prononcer, à épeler, et le domaine est disponible", explanation: "Un bon nom d'agence doit passer le test pratique : facile à prononcer au téléphone, facile à épeler dans un email, et le domaine (.com ou .fr) doit être disponible. Le reste est secondaire." },
      { type: "true_false", question: "Il faut attendre d'avoir le nom parfait et le logo idéal avant de commencer à démarcher des clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est la paralysie du perfectionnisme. Tu peux changer de nom et de logo plus tard. L'important est d'avoir quelque chose de correct maintenant pour commencer à avancer, te présenter et démarcher. L'action bat la perfection." },
      { type: "mcq", question: "Quelle niche n'est PAS recommandée comme point de départ pour une agence IA en 2025 ?", options: JSON.stringify(["Restaurants et hôtellerie", "Cabinets médicaux", "Industrie aérospatiale", "E-commerce"]), correctAnswer: "Industrie aérospatiale", explanation: "L'industrie aérospatiale a des cycles de vente très longs, des exigences de sécurité extrêmes et peu de PME. Les restaurants, cabinets médicaux et e-commerce sont des niches accessibles avec des besoins clairs et des décideurs faciles à contacter." }
    ],
  },

  // ─── LEÇON 8 ───
  {
    order: 8,
    module: 1,
    title: "Ta stack technique : les outils qu'on va utiliser",
    slug: "stack-technique-outils",
    duration: "20 min",
    description: "Présentation de la stack complète (Next.js, Tailwind, Supabase, Vercel), pourquoi ce choix, et installation des comptes et outils.",
    content: blocks([
      { id: "8-1", type: "heading", level: 2, text: "Pourquoi cette stack précisément ?" },
      { id: "8-2", type: "text", html: "<p>Dans cette formation, on va utiliser une stack technique précise. Ce n'est pas un choix au hasard — c'est le résultat de centaines d'heures de tests, de projets clients, et d'itérations. Cette stack est <strong>gratuite au départ</strong>, <strong>scalable</strong> (elle grandit avec toi), <strong>rapide à développer</strong> et <strong>demandée par le marché</strong>. C'est la même stack utilisée par des startups qui lèvent des millions.</p>" },
      { id: "8-3", type: "callout", variant: "success", html: "<strong>Le principe :</strong> On utilise des outils qui ont des tiers gratuits généreux. Tu ne paies rien tant que tu n'as pas de clients. Quand tu en as, le coût est minimal comparé à ce que tu factures. Zéro risque financier." },
      { id: "8-4", type: "heading", level: 2, text: "La stack complète" },
      { id: "8-5", type: "comparison", headers: ["Outil", "Rôle", "Pourquoi lui ?"], rows: [
        { cells: ["Next.js", "Framework web (frontend + backend)", "Le framework React le plus populaire. App Router, Server Components, API Routes. Tout en un."] },
        { cells: ["Tailwind CSS", "Styles et design", "Du CSS utilitaire ultra-rapide. Tu écris tes styles directement dans le HTML. Plus de fichiers CSS à gérer."] },
        { cells: ["TypeScript", "Langage de programmation", "JavaScript avec des types. L'IA code mieux en TypeScript et tu as moins de bugs. Win-win."] },
        { cells: ["Supabase", "Base de données + Auth + Storage", "Le Firebase open-source. PostgreSQL, authentification, stockage de fichiers. Tier gratuit très généreux."] },
        { cells: ["Vercel", "Hébergement et déploiement", "Déploie en 1 clic depuis GitHub. Preview pour chaque branche. CDN mondial. Tier gratuit inclus."] },
        { cells: ["GitHub", "Gestion du code source", "Héberge ton code, collabore, garde un historique. Indispensable pour tout projet pro."] },
        { cells: ["Claude Code", "Assistant IA de développement", "Tu décris, il code. Notre outil principal pour tout construire."] }
      ]},
      { id: "8-6", type: "separator", style: "line" },
      { id: "8-7", type: "heading", level: 2, text: "Next.js + Tailwind : le duo gagnant" },
      { id: "8-8", type: "text", html: "<p><strong>Next.js</strong> est un framework basé sur React (la librairie web la plus utilisée au monde). Il gère à la fois le frontend (ce que l'utilisateur voit) et le backend (les API, la logique serveur). Avec l'App Router, tu crées une page en créant un fichier. C'est aussi simple que ça.</p><p><strong>Tailwind CSS</strong> est un framework CSS utilitaire. Au lieu d'écrire <code>.mon-bouton { background: blue; padding: 16px; }</code>, tu écris <code>bg-blue-500 p-4</code> directement dans ton HTML. C'est plus rapide, plus cohérent et l'IA l'adore (parce que tout est inline, pas besoin de naviguer entre fichiers).</p>" },
      { id: "8-9", type: "heading", level: 2, text: "Supabase : ta base de données en 5 minutes" },
      { id: "8-10", type: "text", html: "<p>Supabase c'est la solution backend tout-en-un. Tu as une base de données PostgreSQL (la meilleure au monde), un système d'authentification (login, inscription, OAuth), du stockage de fichiers (images, PDF) et des fonctions serverless. Et le tier gratuit inclut 2 projets, 500 Mo de stockage, 50 000 requêtes/mois. Largement suffisant pour démarrer et même pour tes premiers clients.</p>" },
      { id: "8-11", type: "heading", level: 2, text: "Créer tes comptes (5 min)" },
      { id: "8-12", type: "steps", steps: [
        { title: "GitHub (github.com)", description: "Crée un compte si tu n'en as pas. C'est gratuit. Tu hébergeras tout ton code ici. C'est aussi ton portfolio technique — les recruteurs et clients regardent ton GitHub." },
        { title: "Vercel (vercel.com)", description: "Connecte-toi avec ton compte GitHub. Vercel déploiera automatiquement tes projets depuis GitHub. Chaque push = un nouveau déploiement. C'est magique." },
        { title: "Supabase (supabase.com)", description: "Crée un compte avec GitHub. Tu pourras créer ta première base de données en 2 clics. On l'utilisera à partir du module 5." },
        { title: "Anthropic Console (console.anthropic.com)", description: "Crée un compte et génère une clé API. C'est cette clé qui te permettra d'utiliser Claude dans tes projets (chatbots, etc.)." }
      ]},
      { id: "8-13", type: "heading", level: 2, text: "Installer VS Code + extensions" },
      { id: "8-14", type: "text", html: "<p>VS Code est l'éditeur de code le plus populaire au monde. Gratuit, léger, extensible. Télécharge-le sur <strong>code.visualstudio.com</strong>. Ensuite, installe ces extensions essentielles :</p><ul><li><strong>Tailwind CSS IntelliSense</strong> — Autocomplétion des classes Tailwind</li><li><strong>ES7+ React/Redux/React-Native snippets</strong> — Raccourcis pour React</li><li><strong>Prettier</strong> — Formatage automatique du code</li><li><strong>GitLens</strong> — Voir l'historique Git directement dans l'éditeur</li><li><strong>Error Lens</strong> — Affiche les erreurs directement sur la ligne</li></ul>" },
      { id: "8-15", type: "heading", level: 2, text: "Vue d'ensemble : ce qu'on va construire" },
      { id: "8-16", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Module 1 (ici)", description: "Bases IA, outils, premiers prompts, identité d'agence" },
        { id: "n2", label: "Modules 2-6", description: "Prompting avancé, sites web, design, backend, APIs" },
        { id: "n3", label: "Modules 7-13", description: "Chatbots, automatisations, agents IA, voice AI, MVP" },
        { id: "n4", label: "Modules 14-15", description: "Sécurité, DevOps, mise en production" },
        { id: "n5", label: "Modules 16-21", description: "Créer ton offre, trouver des clients, scaler à 10K/mois" },
        { id: "n6", label: "Module 22", description: "Masterclass outils : Claude Code, Cursor, Antigravity en profondeur" }
      ]},
      { id: "8-17", type: "callout", variant: "tip", html: "<strong>Tu es prêt :</strong> Tu as les outils, tu as les comptes, tu as l'identité de ton agence, tu as tes premiers prompts. Le module 1 est terminé. À partir du module 2, on passe à la vitesse supérieure : prompt engineering avancé, puis construction de vrais projets. Accroche-toi, ça va être intense et excitant." },
      { id: "8-18", type: "checklist", title: "Checklist finale du module 1", items: [
        { id: "c1", text: "VS Code installé avec les extensions recommandées" },
        { id: "c2", text: "Compte GitHub créé et configuré" },
        { id: "c3", text: "Compte Vercel créé (connecté à GitHub)" },
        { id: "c4", text: "Compte Supabase créé" },
        { id: "c5", text: "Clé API Anthropic générée et stockée en sécurité" },
        { id: "c6", text: "Node.js, npm et Claude Code installés et fonctionnels" },
        { id: "c7", text: "Premier projet de chatbot créé et testé" }
      ]}
    ]),
    exercise: "<h3>Exercice : Configure tout et crée ton premier projet complet</h3><p>C'est le grand exercice de fin de module. Suis ces étapes dans l'ordre :</p><ol><li><strong>Comptes :</strong> Crée tes comptes GitHub, Vercel, Supabase et Anthropic Console si ce n'est pas encore fait</li><li><strong>VS Code :</strong> Installe VS Code et les 5 extensions recommandées</li><li><strong>Projet test :</strong> Crée un nouveau projet Next.js avec Claude Code : <code>mkdir test-stack && cd test-stack && claude \"Crée un projet Next.js avec TypeScript et Tailwind. Ajoute une page d'accueil avec le nom de mon agence, mon pitch et un bouton Contact\"</code></li><li><strong>GitHub :</strong> Crée un repository sur GitHub et pousse ton code</li><li><strong>Vercel :</strong> Connecte le repo à Vercel et déploie. Tu devrais avoir un site en ligne en 2 minutes</li><li><strong>Partage :</strong> Envoie le lien à un ami ou à un membre de ta famille. C'est ton premier site en production.</li></ol><p>Bravo, tu as terminé le module 1. Tu as les bases, les outils, l'identité. Le voyage ne fait que commencer.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le rôle de Supabase dans notre stack ?", options: JSON.stringify(["Framework frontend", "Hébergement de sites", "Base de données + Auth + Storage", "Éditeur de code"]), correctAnswer: "Base de données + Auth + Storage", explanation: "Supabase est notre solution backend tout-en-un : base de données PostgreSQL, authentification (login/inscription), stockage de fichiers et fonctions serverless. Avec un tier gratuit très généreux." },
      { type: "true_false", question: "La stack Next.js + Tailwind + Supabase + Vercel est entièrement gratuite pour démarrer.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Chacun de ces outils offre un tier gratuit généreux. Tu ne paies rien tant que tu n'as pas de vrais volumes. Quand tu as des clients qui te paient, le coût est minime comparé à tes revenus." },
      { type: "mcq", question: "Pourquoi utilise-t-on TypeScript plutôt que JavaScript ?", options: JSON.stringify(["TypeScript est plus rapide à l'exécution", "TypeScript ajoute des types, l'IA code mieux avec et il y a moins de bugs", "TypeScript est plus simple à apprendre", "TypeScript ne nécessite pas Node.js"]), correctAnswer: "TypeScript ajoute des types, l'IA code mieux avec et il y a moins de bugs", explanation: "TypeScript ajoute un système de types à JavaScript. L'IA (Claude Code) produit du code de meilleure qualité en TypeScript car les types servent de documentation et de guide. Et tu as moins de bugs en production." },
      { type: "mcq", question: "Quel outil permet de déployer un site en 1 clic depuis GitHub ?", options: JSON.stringify(["Supabase", "Tailwind", "Vercel", "npm"]), correctAnswer: "Vercel", explanation: "Vercel se connecte à ton repository GitHub et déploie automatiquement ton site à chaque push. Preview automatique pour chaque branche, CDN mondial, HTTPS gratuit. C'est magique." },
      { type: "true_false", question: "Tailwind CSS nécessite de créer des fichiers CSS séparés pour chaque composant.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse. Tailwind CSS est un framework utilitaire : tu écris les styles directement dans le HTML avec des classes comme bg-blue-500 p-4. Plus besoin de fichiers CSS séparés. C'est plus rapide et l'IA adore ça." }
    ],
  },
];
