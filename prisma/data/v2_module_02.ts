// ═══════════════════════════════════════════════════
// MODULE 2 — Découvrir les IA
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_02_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 2,
    title: "ChatGPT : ce qu'il fait bien, ses limites",
    slug: "v2-chatgpt-forces-limites",
    duration: "20 min",
    description: "Découvre ChatGPT en profondeur : ses points forts, ses faiblesses, ses modèles (GPT-4o, o1, o3), et dans quels cas l'utiliser ou non.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "ChatGPT : le couteau suisse de l'IA" },
      { id: "1-2", type: "text", html: "<p>ChatGPT d'OpenAI est l'IA la plus connue au monde. Avec plus de 200 millions d'utilisateurs, c'est souvent le premier contact des gens avec l'IA générative. Mais connaître ChatGPT et <strong>bien l'utiliser</strong>, ce sont deux choses différentes. Dans cette leçon, on va explorer exactement ce qu'il fait bien, ce qu'il fait mal, et quand tu dois choisir un autre outil.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Les modèles de ChatGPT :</strong> OpenAI propose plusieurs modèles. GPT-4o est le modèle standard (rapide, polyvalent). o1 et o3 sont les modèles de raisonnement (plus lents mais plus précis pour les tâches complexes). GPT-4o mini est la version légère pour les tâches simples." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Ce que ChatGPT fait très bien" },
      { id: "1-6", type: "steps", steps: [
        { title: "Génération de contenu marketing", description: "Articles de blog, posts LinkedIn, scripts vidéo, emails commerciaux — ChatGPT excelle dans la rédaction marketing grâce à son style fluide et naturel." },
        { title: "Brainstorming et idéation", description: "Tu as besoin d'idées ? ChatGPT est imbattable pour générer 20 angles différents sur un sujet en 30 secondes." },
        { title: "Traduction et reformulation", description: "La qualité de traduction est excellente, et la reformulation de textes (ton formel, informel, technique) est un de ses points forts." },
        { title: "Analyse d'images et de documents", description: "Avec GPT-4o, tu peux uploader des images, des PDF, des captures d'écran et demander une analyse détaillée." },
        { title: "Génération d'images (DALL-E)", description: "ChatGPT intègre DALL-E pour générer des images directement dans la conversation, pratique pour des visuels rapides." }
      ]},
      { id: "1-7", type: "separator", style: "line" },
      { id: "1-8", type: "heading", level: 2, text: "Les limites de ChatGPT" },
      { id: "1-9", type: "comparison", headers: ["Limite", "Impact concret"], rows: [
        { cells: ["Hallucinations fréquentes", "ChatGPT invente parfois des faits, des sources, des chiffres avec assurance. Il faut toujours vérifier."] },
        { cells: ["Code de qualité moyenne", "Pour du code simple c'est ok, mais pour des projets complexes, Claude est nettement supérieur."] },
        { cells: ["Mémoire limitée en contexte", "Sur de longues conversations, ChatGPT perd le fil et oublie les instructions du début."] },
        { cells: ["Censure excessive", "ChatGPT refuse parfois des requêtes parfaitement légitimes par excès de prudence."] },
        { cells: ["Résultats génériques", "Sans un prompt très structuré, les réponses sont souvent vagues et passe-partout."] }
      ]},
      { id: "1-10", type: "callout", variant: "warning", html: "<strong>Piège classique :</strong> Ne fais jamais confiance aveuglément à ChatGPT pour des faits, des dates, ou des citations. Il peut inventer une source académique qui n'existe pas avec une confiance totale. Vérifie toujours les informations factuelles." },
      { id: "1-11", type: "heading", level: 2, text: "Quand utiliser ChatGPT vs un autre outil" },
      { id: "1-12", type: "comparison", headers: ["Tâche", "Meilleur outil"], rows: [
        { cells: ["Rédiger un post LinkedIn", "ChatGPT (style marketing fluide)"] },
        { cells: ["Coder un composant React", "Claude (meilleure qualité de code)"] },
        { cells: ["Analyser un document PDF", "ChatGPT ou Claude (les deux sont bons)"] },
        { cells: ["Générer une image", "ChatGPT avec DALL-E ou Midjourney"] },
        { cells: ["Raisonnement complexe multi-étapes", "Claude ou o3 (raisonnement supérieur)"] }
      ]},
      { id: "1-13", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "ChatGPT est excellent pour le contenu marketing, le brainstorming et les traductions" },
        { id: "c2", text: "GPT-4o est le modèle standard, o1/o3 pour le raisonnement, mini pour les tâches simples" },
        { id: "c3", text: "ChatGPT hallucine régulièrement — toujours vérifier les faits" },
        { id: "c4", text: "Pour le code complexe, Claude est un meilleur choix" },
        { id: "c5", text: "Le bon outil dépend de la tâche — aucune IA n'est la meilleure en tout" }
      ]}
    ]),
    exercise: "<h3>Exercice : Teste les forces de ChatGPT</h3><p>Ouvre ChatGPT et réalise ces 4 tests :</p><ol><li><strong>Test marketing :</strong> Demande-lui d'écrire un post LinkedIn de 200 mots pour promouvoir un service de chatbot IA pour les restaurants. Note la qualité sur 10.</li><li><strong>Test brainstorming :</strong> Demande-lui 15 idées de services IA à vendre aux PME. Note la diversité et la pertinence.</li><li><strong>Test factuel :</strong> Demande-lui des statistiques précises sur le marché de l'IA en France avec des sources. Vérifie si les sources existent réellement.</li><li><strong>Test code :</strong> Demande-lui de coder une fonction JavaScript qui valide un email. Note la qualité du code.</li></ol><p>Compare tes notes. Tu verras que ChatGPT brille en marketing mais peut décevoir en factuel et en code.</p>",
    quiz: [
      { type: "mcq", question: "Quel modèle ChatGPT est spécialisé dans le raisonnement complexe ?", options: JSON.stringify(["GPT-4o", "GPT-4o mini", "o1 / o3", "DALL-E"]), correctAnswer: "o1 / o3", explanation: "Les modèles o1 et o3 sont les modèles de raisonnement d'OpenAI. Ils sont plus lents mais plus précis pour les tâches complexes nécessitant une réflexion multi-étapes." },
      { type: "true_false", question: "ChatGPT ne fait jamais d'erreurs factuelles grâce à son entraînement massif.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est faux. ChatGPT hallucine régulièrement, inventant des faits, des sources et des chiffres avec assurance. Il faut toujours vérifier les informations factuelles." },
      { type: "mcq", question: "Dans quel domaine ChatGPT excelle-t-il particulièrement ?", options: JSON.stringify(["Code complexe multi-fichiers", "Génération de contenu marketing", "Analyse de données structurées", "Raisonnement mathématique avancé"]), correctAnswer: "Génération de contenu marketing", explanation: "ChatGPT excelle dans la rédaction marketing : articles, posts, emails commerciaux. Son style est fluide et naturel, ce qui en fait un outil idéal pour le contenu." },
      { type: "true_false", question: "Pour coder un projet complexe, Claude est généralement un meilleur choix que ChatGPT.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, Claude est reconnu pour produire du code de meilleure qualité, surtout sur des projets complexes avec plusieurs fichiers et une architecture à respecter." },
      { type: "mcq", question: "Quelle est une limite majeure de ChatGPT sur les longues conversations ?", options: JSON.stringify(["Il devient plus lent", "Il perd le fil et oublie les instructions du début", "Il refuse de continuer après 10 messages", "Il change de langue automatiquement"]), correctAnswer: "Il perd le fil et oublie les instructions du début", explanation: "Sur de longues conversations, la mémoire contextuelle de ChatGPT est limitée. Il peut oublier les instructions données au début et perdre le fil de la conversation." },
      { type: "mcq", question: "Quel outil est intégré à ChatGPT pour la génération d'images ?", options: JSON.stringify(["Midjourney", "Stable Diffusion", "DALL-E", "Firefly"]), correctAnswer: "DALL-E", explanation: "ChatGPT intègre DALL-E, le modèle de génération d'images d'OpenAI, directement dans l'interface de conversation." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 2,
    title: "Claude : pourquoi c'est notre outil principal",
    slug: "v2-claude-outil-principal",
    duration: "25 min",
    description: "Découvre Claude d'Anthropic en détail : pourquoi il est supérieur pour le code et le raisonnement, ses modèles (Opus, Sonnet, Haiku), et comment l'utiliser efficacement.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Claude : l'IA qui change la donne pour les professionnels" },
      { id: "2-2", type: "text", html: "<p>Claude, développé par Anthropic, est devenu l'IA de référence pour les professionnels et les développeurs. Moins médiatisé que ChatGPT, il est pourtant <strong>supérieur dans presque toutes les tâches professionnelles</strong> : code, raisonnement, analyse de documents, suivi d'instructions complexes. C'est pour ça qu'on en fait notre outil principal dans cette formation.</p><p>Anthropic, la société derrière Claude, a été fondée par d'anciens chercheurs d'OpenAI. Leur approche se concentre sur la <strong>sécurité et la fiabilité</strong>, ce qui se traduit par un modèle qui hallucine moins et qui suit les instructions avec plus de précision.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Pourquoi Claude pour cette formation :</strong> Dans notre expérience, Claude produit du code plus propre, suit mieux les instructions longues, et hallucine moins que ChatGPT. Pour un prestataire IA qui doit livrer un travail fiable à ses clients, c'est un avantage décisif." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Les modèles Claude : Opus, Sonnet, Haiku" },
      { id: "2-6", type: "comparison", headers: ["Modèle", "Force", "Usage idéal", "Coût"], rows: [
        { cells: ["Claude Opus 4", "Raisonnement le plus avancé, tâches complexes", "Projets complexes, code architecturé, analyses longues", "Le plus cher"] },
        { cells: ["Claude Sonnet 4", "Meilleur rapport qualité/prix, très bon en code", "Usage quotidien, code, rédaction, automatisation", "Moyen"] },
        { cells: ["Claude Haiku 3.5", "Rapide et économique", "Tâches simples, chatbots, classification", "Le moins cher"] }
      ]},
      { id: "2-7", type: "heading", level: 2, text: "Ce que Claude fait mieux que les autres" },
      { id: "2-8", type: "steps", steps: [
        { title: "Code de haute qualité", description: "Claude produit du code propre, bien structuré, avec des commentaires pertinents. Sur des projets multi-fichiers, il maintient la cohérence architecturale mieux que tout autre modèle." },
        { title: "Suivi d'instructions longues", description: "Tu peux donner à Claude un brief de 2000 mots et il le suivra fidèlement. Les autres modèles perdent des détails en route." },
        { title: "Fenêtre de contexte massive", description: "Claude peut traiter jusqu'à 200K tokens en entrée — l'équivalent d'un livre entier. Idéal pour analyser de longs documents ou des codebases complètes." },
        { title: "Moins d'hallucinations", description: "Claude est entraîné pour dire \"je ne sais pas\" plutôt que d'inventer. Ce n'est pas parfait, mais c'est nettement mieux que la concurrence." },
        { title: "Raisonnement nuancé", description: "Sur les sujets complexes, Claude apporte des nuances et considère plusieurs angles plutôt que de donner une réponse simpliste." }
      ]},
      { id: "2-9", type: "separator", style: "line" },
      { id: "2-10", type: "heading", level: 2, text: "Les fonctionnalités clés de Claude" },
      { id: "2-11", type: "comparison", headers: ["Fonctionnalité", "Description"], rows: [
        { cells: ["Projets (Projects)", "Organise tes conversations par projet avec des instructions persistantes et des fichiers de référence"] },
        { cells: ["Artefacts (Artifacts)", "Claude génère du code, des documents et des visuels dans un panneau latéral interactif"] },
        { cells: ["Claude Code", "Un outil CLI qui permet à Claude de coder directement dans ton terminal et tes fichiers"] },
        { cells: ["Vision", "Analyse d'images, de captures d'écran, de maquettes — très utile pour le design et le debug"] },
        { cells: ["API", "Intègre Claude dans tes propres applications et automatisations via l'API Anthropic"] }
      ]},
      { id: "2-12", type: "callout", variant: "info", html: "<strong>Astuce pro :</strong> Utilise les Projets Claude pour chaque client. Tu y mets les instructions spécifiques (ton, style, contexte business) et les documents de référence. Chaque nouvelle conversation dans ce projet aura automatiquement le bon contexte." },
      { id: "2-13", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Claude est supérieur pour le code, le raisonnement et le suivi d'instructions longues" },
        { id: "c2", text: "3 modèles : Opus (puissant), Sonnet (polyvalent), Haiku (rapide/économique)" },
        { id: "c3", text: "Fenêtre de contexte de 200K tokens — idéal pour les longs documents" },
        { id: "c4", text: "Les Projets permettent d'organiser le contexte par client" },
        { id: "c5", text: "Claude Code est un outil révolutionnaire pour coder depuis le terminal" }
      ]}
    ]),
    exercise: "<h3>Exercice : Découvre Claude en pratique</h3><p>Connecte-toi à claude.ai et réalise ces tests :</p><ol><li><strong>Crée un Projet :</strong> Nomme-le \"Formation OpexIA\" et ajoute comme instruction : \"Tu es un assistant pour un prestataire de services IA. Réponds en français, sois concis et actionnable.\"</li><li><strong>Test code :</strong> Dans ce projet, demande à Claude de créer une page HTML/CSS pour un formulaire de contact moderne. Compare la qualité avec ce que ChatGPT t'a donné dans l'exercice précédent.</li><li><strong>Test instructions longues :</strong> Donne-lui un brief de 10 points précis pour rédiger une offre commerciale de chatbot IA pour un restaurant. Vérifie s'il a bien respecté chaque point.</li><li><strong>Test artefact :</strong> Demande-lui de créer un composant React interactif (un compteur ou un formulaire). Observe comment l'artefact se génère dans le panneau latéral.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la fenêtre de contexte de Claude ?", options: JSON.stringify(["8K tokens", "32K tokens", "200K tokens", "500K tokens"]), correctAnswer: "200K tokens", explanation: "Claude peut traiter jusqu'à 200K tokens en entrée, soit l'équivalent d'un livre entier. C'est idéal pour analyser de longs documents ou des codebases complètes." },
      { type: "true_false", question: "Claude Haiku est le modèle le plus puissant de la gamme Claude.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, Claude Opus est le modèle le plus puissant. Haiku est le modèle le plus rapide et le plus économique, idéal pour les tâches simples comme les chatbots." },
      { type: "mcq", question: "Pourquoi Claude est-il choisi comme outil principal dans cette formation ?", options: JSON.stringify(["Il est gratuit", "Il produit du code plus propre et hallucine moins", "Il a été créé en France", "Il est le seul à avoir une API"]), correctAnswer: "Il produit du code plus propre et hallucine moins", explanation: "Claude est choisi car il produit du code de meilleure qualité, suit mieux les instructions longues, et hallucine moins que ses concurrents. Pour un prestataire IA, la fiabilité est essentielle." },
      { type: "mcq", question: "Quel modèle Claude offre le meilleur rapport qualité/prix pour un usage quotidien ?", options: JSON.stringify(["Claude Opus 4", "Claude Sonnet 4", "Claude Haiku 3.5", "Claude Mini"]), correctAnswer: "Claude Sonnet 4", explanation: "Claude Sonnet 4 offre le meilleur rapport qualité/prix. Il est très bon en code et en rédaction, avec un coût intermédiaire entre Opus et Haiku." },
      { type: "true_false", question: "Les Projets Claude permettent de définir des instructions persistantes pour chaque client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, les Projets permettent d'organiser le contexte par client avec des instructions persistantes et des fichiers de référence qui s'appliquent à chaque nouvelle conversation." },
      { type: "mcq", question: "Qu'est-ce que Claude Code ?", options: JSON.stringify(["Un éditeur de texte en ligne", "Un outil CLI pour coder directement dans le terminal", "Un langage de programmation créé par Anthropic", "Un plugin pour VS Code"]), correctAnswer: "Un outil CLI pour coder directement dans le terminal", explanation: "Claude Code est un outil en ligne de commande qui permet à Claude de coder directement dans ton terminal, en lisant et modifiant tes fichiers de projet." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 2,
    title: "Gemini & Mistral : les alternatives à connaître",
    slug: "v2-gemini-mistral-alternatives",
    duration: "20 min",
    description: "Tour d'horizon des autres IA majeures : Gemini de Google et Mistral AI. Leurs forces, cas d'usage, et pourquoi tu dois les connaître même si tu utilises Claude au quotidien.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Pourquoi connaître les alternatives" },
      { id: "3-2", type: "text", html: "<p>Même si Claude est notre outil principal, un bon prestataire IA doit connaître l'écosystème complet. Tes clients te poseront des questions sur Gemini, sur Mistral, sur les solutions open-source. Et certaines tâches spécifiques sont mieux servies par d'autres modèles. Connaître les alternatives te rend <strong>plus crédible et plus efficace</strong>.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>L'écosystème IA en 2026 :</strong> Le marché est dominé par 4 acteurs principaux : OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini) et Mistral (français). Chacun a ses forces et son positionnement." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Gemini de Google : l'IA intégrée à tout" },
      { id: "3-6", type: "steps", steps: [
        { title: "Intégration Google Workspace", description: "Gemini est directement intégré dans Gmail, Google Docs, Sheets, Slides. Pour les clients qui utilisent la suite Google, c'est un argument de vente puissant." },
        { title: "Recherche web en temps réel", description: "Gemini a un accès natif à Google Search. Il peut trouver des informations à jour sans passer par un outil tiers." },
        { title: "Multimodal natif", description: "Gemini traite le texte, les images, la vidéo et l'audio nativement. Sa compréhension d'images est excellente." },
        { title: "Fenêtre de contexte énorme", description: "Gemini 2.0 offre une fenêtre de contexte allant jusqu'à 2 millions de tokens — idéal pour les très longs documents." }
      ]},
      { id: "3-7", type: "comparison", headers: ["Force Gemini", "Limite Gemini"], rows: [
        { cells: ["Intégration native avec Google Workspace", "Qualité de code inférieure à Claude"] },
        { cells: ["Recherche web en temps réel", "Suivi d'instructions moins rigoureux"] },
        { cells: ["Contexte jusqu'à 2M tokens", "Tendance à être verbeux et générique"] },
        { cells: ["Gratuit dans sa version de base", "Moins performant pour les tâches business structurées"] }
      ]},
      { id: "3-8", type: "separator", style: "line" },
      { id: "3-9", type: "heading", level: 2, text: "Mistral : le champion français de l'IA" },
      { id: "3-10", type: "text", html: "<p>Mistral AI est une entreprise française fondée en 2023 qui s'est rapidement imposée dans le paysage mondial de l'IA. Leur approche combine <strong>modèles open-source</strong> et modèles commerciaux performants. Pour les clients français soucieux de souveraineté numérique, Mistral est un argument fort.</p>" },
      { id: "3-11", type: "steps", steps: [
        { title: "Modèles open-source de qualité", description: "Mistral publie des modèles open-source (Mistral 7B, Mixtral) que tu peux héberger toi-même. Idéal pour les clients qui veulent garder leurs données en interne." },
        { title: "Souveraineté des données", description: "Les serveurs Mistral sont en Europe. Pour les clients soumis au RGPD ou qui refusent d'envoyer leurs données aux USA, c'est un argument décisif." },
        { title: "Le Chat (lechat.mistral.ai)", description: "L'interface gratuite de Mistral, comparable à ChatGPT. Pratique pour tester et pour les usages légers." },
        { title: "API compétitive", description: "L'API Mistral est bien documentée, avec des prix très compétitifs par rapport à OpenAI et Anthropic." }
      ]},
      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Argument commercial :</strong> Quand un client te dit \"je ne veux pas envoyer mes données chez les Américains\", Mistral est ta réponse. C'est français, c'est en Europe, c'est conforme au RGPD. Ça rassure énormément les PME françaises." },
      { id: "3-13", type: "heading", level: 2, text: "Résumé comparatif des 4 IA majeures" },
      { id: "3-14", type: "comparison", headers: ["Critère", "ChatGPT", "Claude", "Gemini", "Mistral"], rows: [
        { cells: ["Code", "Bon", "Excellent", "Moyen", "Bon"] },
        { cells: ["Contenu marketing", "Excellent", "Très bon", "Bon", "Bon"] },
        { cells: ["Raisonnement", "Très bon (o3)", "Excellent", "Bon", "Bon"] },
        { cells: ["Souveraineté EU", "Non", "Non", "Non", "Oui"] },
        { cells: ["Open-source", "Non", "Non", "Non", "Oui (partiel)"] }
      ]},
      { id: "3-15", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Gemini excelle dans l'intégration Google Workspace et la recherche en temps réel" },
        { id: "c2", text: "Mistral est le choix français, conforme RGPD, avec des modèles open-source" },
        { id: "c3", text: "Aucune IA n'est la meilleure en tout — le bon prestataire sait choisir le bon outil" },
        { id: "c4", text: "Connaître les alternatives te rend plus crédible face à tes clients" },
        { id: "c5", text: "L'argument souveraineté de Mistral rassure les PME françaises soucieuses du RGPD" }
      ]}
    ]),
    exercise: "<h3>Exercice : Teste Gemini et Mistral</h3><p>Découvre les alternatives par la pratique :</p><ol><li>Va sur <strong>gemini.google.com</strong> et pose-lui la même question marketing que tu as posée à ChatGPT (post LinkedIn pour un chatbot IA). Compare les résultats.</li><li>Va sur <strong>lechat.mistral.ai</strong> et fais le même test. Note les différences de style et de qualité.</li><li>Demande à Gemini de chercher les dernières actualités sur l'IA en France. Observe comment il intègre les résultats de recherche web.</li><li>Crée un tableau dans ton journal de formation avec tes notes sur chaque IA (ChatGPT, Claude, Gemini, Mistral) pour les critères : code, contenu, raisonnement, facilité d'utilisation.</li></ol><p>Ce tableau comparatif te sera utile quand tes clients te demanderont quelle IA utiliser.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le principal avantage de Gemini par rapport aux autres IA ?", options: JSON.stringify(["Meilleur en code", "Intégration native avec Google Workspace", "Le plus économique", "Le plus puissant en raisonnement"]), correctAnswer: "Intégration native avec Google Workspace", explanation: "L'avantage principal de Gemini est son intégration directe dans Gmail, Google Docs, Sheets et Slides, ce qui le rend très pratique pour les utilisateurs de la suite Google." },
      { type: "true_false", question: "Mistral AI est une entreprise américaine.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Mistral AI est une entreprise française, fondée en 2023. Ses serveurs sont en Europe, ce qui est un avantage pour la conformité RGPD." },
      { type: "mcq", question: "Pourquoi Mistral est-il un bon argument pour les clients soucieux de leurs données ?", options: JSON.stringify(["Il est gratuit", "Ses serveurs sont en Europe et il est conforme au RGPD", "Il est le plus performant en code", "Il a été validé par la CNIL"]), correctAnswer: "Ses serveurs sont en Europe et il est conforme au RGPD", explanation: "Mistral est français avec des serveurs en Europe, conforme au RGPD. Pour les clients qui ne veulent pas envoyer leurs données aux États-Unis, c'est un argument décisif." },
      { type: "mcq", question: "Quelle est la fenêtre de contexte maximale de Gemini 2.0 ?", options: JSON.stringify(["100K tokens", "200K tokens", "1 million de tokens", "2 millions de tokens"]), correctAnswer: "2 millions de tokens", explanation: "Gemini 2.0 offre une fenêtre de contexte allant jusqu'à 2 millions de tokens, soit bien plus que Claude (200K) ou ChatGPT." },
      { type: "true_false", question: "Un bon prestataire IA doit maîtriser une seule IA et ignorer les autres.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, un bon prestataire doit connaître l'écosystème complet. Chaque IA a ses forces et tes clients te poseront des questions sur les différentes options." },
      { type: "mcq", question: "Quelle IA propose des modèles open-source que l'on peut héberger soi-même ?", options: JSON.stringify(["ChatGPT", "Claude", "Gemini", "Mistral"]), correctAnswer: "Mistral", explanation: "Mistral publie des modèles open-source (Mistral 7B, Mixtral) qui peuvent être hébergés en local. C'est un avantage unique pour les clients qui veulent garder leurs données en interne." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 2,
    title: "Atelier : même tâche sur les 3 IA — tu compares toi-même",
    slug: "v2-atelier-comparaison-ia",
    duration: "30 min",
    description: "Atelier pratique : tu vas soumettre exactement la même tâche à ChatGPT, Claude et Gemini, analyser les différences, et construire ta propre grille de choix.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Atelier : Compare les IA par toi-même" },
      { id: "4-2", type: "text", html: "<p>La meilleure façon de comprendre les différences entre les IA, c'est de les tester toi-même avec la <strong>même tâche exacte</strong>. Dans cet atelier, tu vas soumettre 3 tâches identiques à ChatGPT, Claude et Gemini, puis analyser les résultats objectivement. À la fin, tu auras ta propre grille de décision.</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>Méthode scientifique :</strong> Pour que la comparaison soit valide, utilise exactement le même prompt sur les 3 IA. Ne reformule pas, ne corrige pas, ne donne pas de contexte supplémentaire. Copie-colle le même texte à chaque fois." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Tâche 1 : Rédaction d'une proposition commerciale" },
      { id: "4-6", type: "text", html: "<p>Voici le prompt que tu vas copier-coller dans chaque IA :</p><p><em>\"Tu es un consultant IA freelance. Rédige une proposition commerciale pour un restaurant gastronomique qui veut un chatbot IA sur son site web. Le chatbot doit répondre aux questions sur le menu, gérer les réservations, et recommander des plats selon les allergies. Budget client : environ 2000 euros. La proposition doit inclure : contexte, solution proposée, livrables, planning, et prix détaillé.\"</em></p>" },
      { id: "4-7", type: "steps", steps: [
        { title: "Évalue la structure", description: "Est-ce que la proposition est bien organisée avec des sections claires ? L'IA a-t-elle bien respecté tous les éléments demandés (contexte, solution, livrables, planning, prix) ?" },
        { title: "Évalue le contenu", description: "Les détails sont-ils crédibles et professionnels ? Le prix est-il réaliste et bien ventilé ? La solution technique est-elle pertinente ?" },
        { title: "Évalue le ton", description: "Le texte fait-il professionnel ? Inspire-t-il confiance ? Est-il trop verbeux ou au contraire trop sec ?" },
        { title: "Note sur 10", description: "Donne une note globale à chaque IA pour cette tâche et note les forces et faiblesses spécifiques." }
      ]},
      { id: "4-8", type: "separator", style: "line" },
      { id: "4-9", type: "heading", level: 2, text: "Tâche 2 : Génération de code" },
      { id: "4-10", type: "text", html: "<p>Prompt à copier-coller :</p><p><em>\"Crée un composant React en TypeScript pour un formulaire de contact avec les champs : nom, email, téléphone, message. Le formulaire doit valider les champs en temps réel (email valide, téléphone au format français, nom non vide, message de 20 caractères minimum). Utilise des hooks React et du CSS-in-JS avec styled-components. Ajoute les messages d'erreur en français.\"</em></p>" },
      { id: "4-11", type: "comparison", headers: ["Critère d'évaluation", "Ce qu'il faut vérifier"], rows: [
        { cells: ["Qualité du code", "Est-il propre, bien typé, sans erreurs évidentes ?"] },
        { cells: ["Complétude", "Tous les champs sont-ils présents ? Toutes les validations ?"] },
        { cells: ["Bonnes pratiques", "Utilise-t-il les hooks correctement ? Le code est-il maintenable ?"] },
        { cells: ["Style et UX", "Les messages d'erreur sont-ils clairs ? Le formulaire est-il visuellement correct ?"] }
      ]},
      { id: "4-12", type: "heading", level: 2, text: "Tâche 3 : Analyse et raisonnement" },
      { id: "4-13", type: "text", html: "<p>Prompt à copier-coller :</p><p><em>\"Un client PME (20 employés, secteur e-commerce, CA 2M euros) hésite entre 3 options pour automatiser son service client : (A) embaucher un employé dédié à 30K/an, (B) utiliser un chatbot IA à 200 euros/mois avec un setup initial de 2000 euros, (C) externaliser à un centre d'appels à 1500 euros/mois. Fais une analyse comparative détaillée avec les avantages, inconvénients, coûts sur 12 mois, et ta recommandation argumentée.\"</em></p>" },
      { id: "4-14", type: "callout", variant: "info", html: "<strong>Ce que tu cherches :</strong> Quelle IA fournit l'analyse la plus structurée, avec les chiffres les plus précis, et la recommandation la plus argumentée ? C'est le type de raisonnement que tes clients attendront de toi." },
      { id: "4-15", type: "heading", level: 2, text: "Construis ta grille de décision" },
      { id: "4-16", type: "checklist", title: "Actions à faire pendant cet atelier", items: [
        { id: "c1", text: "J'ai testé les 3 tâches sur ChatGPT, Claude et Gemini (9 tests au total)" },
        { id: "c2", text: "J'ai noté chaque IA sur 10 pour chaque tâche" },
        { id: "c3", text: "J'ai identifié les forces spécifiques de chaque IA" },
        { id: "c4", text: "J'ai créé ma grille de décision personnelle dans mon journal" },
        { id: "c5", text: "J'ai identifié mon IA principale et mes IA de secours selon les tâches" }
      ]}
    ]),
    exercise: "<h3>Exercice : Crée ta grille de décision finale</h3><p>Après avoir fait les 3 tests, synthétise tes résultats :</p><ol><li>Crée un tableau dans ton journal avec les colonnes : Tâche, ChatGPT (note/10), Claude (note/10), Gemini (note/10)</li><li>Remplis les notes pour les 3 tâches (proposition, code, analyse)</li><li>Ajoute une ligne \"Total\" en bas</li><li>Écris une conclusion de 5 lignes : \"Pour [type de tâche], j'utilise [IA] parce que [raison].\"</li><li>Définis ta \"stack IA\" personnelle : ton IA principale et tes IA secondaires pour des cas spécifiques</li></ol><p>Cette grille de décision est un outil professionnel que tu pourras même montrer à tes clients pour justifier tes choix technologiques.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi est-il important d'utiliser exactement le même prompt sur les 3 IA ?", options: JSON.stringify(["Pour gagner du temps", "Pour que la comparaison soit objectivement valide", "Parce que les IA ne comprennent qu'un seul format", "Pour éviter les bugs"]), correctAnswer: "Pour que la comparaison soit objectivement valide", explanation: "Si tu reformules le prompt, tu ne compares plus les IA entre elles mais tes prompts entre eux. Le même prompt exact garantit une comparaison objective." },
      { type: "true_false", question: "Il existe une IA qui est la meilleure dans absolument tous les domaines.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Aucune IA n'est la meilleure en tout. ChatGPT excelle en contenu marketing, Claude en code et raisonnement, Gemini en intégration Google. Un bon prestataire sait choisir le bon outil." },
      { type: "mcq", question: "Quel critère est le plus important quand tu évalues la qualité du code généré par une IA ?", options: JSON.stringify(["La longueur du code", "Le fait qu'il compile sans erreur et qu'il soit bien structuré", "Le nombre de commentaires", "La rapidité de génération"]), correctAnswer: "Le fait qu'il compile sans erreur et qu'il soit bien structuré", explanation: "Un code propre, bien typé, sans erreurs et maintenable est ce qui compte. La longueur ou la rapidité de génération sont secondaires." },
      { type: "mcq", question: "Que signifie avoir une \"stack IA\" personnelle ?", options: JSON.stringify(["Utiliser toutes les IA en même temps", "Avoir défini son IA principale et ses IA secondaires pour des cas spécifiques", "N'utiliser qu'une seule IA", "Créer sa propre IA"]), correctAnswer: "Avoir défini son IA principale et ses IA secondaires pour des cas spécifiques", explanation: "Une stack IA, c'est ta combinaison personnalisée d'outils : une IA principale pour le quotidien et des IA spécifiques pour certains cas d'usage." },
      { type: "true_false", question: "La grille de décision créée dans cet atelier peut être montrée aux clients pour justifier les choix technologiques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, montrer une comparaison objective et structurée renforce ta crédibilité de prestataire. Les clients apprécient un professionnel qui justifie ses choix de façon transparente." }
    ],
  },
];
