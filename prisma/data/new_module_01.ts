// ═══════════════════════════════════════════════════
// MODULE 1 — Découvrir l'IA & les opportunités (STARTER 47€)
// 6 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_1_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 1,
    title: "L'IA en 2025 : ce que ça change pour toi",
    slug: "ia-2025-ce-que-ca-change",
    duration: "20 min",
    description: "Comprendre pourquoi l'IA est l'opportunité de la décennie et pourquoi c'est maintenant ou jamais.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "L'IA n'est plus un gadget" },
      { id: "1-2", type: "text", html: "<p>En 2025, l'intelligence artificielle n'est plus un truc de geeks ou un buzzword. C'est un <strong>outil de travail concret</strong> utilisé chaque jour par des millions de professionnels pour écrire, coder, analyser, vendre, automatiser.</p><p>Et pourtant, <strong>la grande majorité des PME n'ont encore rien mis en place concrètement</strong>. Selon McKinsey (2024), si 72% des grandes entreprises ont adopté l'IA dans au moins une fonction, <strong>les TPE et PME restent massivement sous-équipées</strong> — pas de chatbot, pas d'automatisation, pas d'IA dans leurs process. Elles savent que ça existe, elles ne savent pas comment s'y prendre.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "C'est exactement là que tu interviens. Tu vas devenir la personne qui installe l'IA dans les entreprises. Et elles vont te payer pour ça." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Le marché de l'IA en chiffres" },
      { id: "1-6", type: "comparison", headers: ["Indicateur", "2023", "2025 (estimations)"], rows: [
        { cells: ["Marché mondial de l'IA", "~150 milliards $ (Statista)", "~250-300 milliards $ (IDC, Statista 2025)"] },
        { cells: ["Grandes entreprises utilisant l'IA", "~50% (McKinsey 2023)", "72% (McKinsey 2024)"] },
        { cells: ["Freelances / agences IA", "Quasi inexistant", "Forte croissance de la demande"] },
        { cells: ["Revenu consultant IA (France)", "~45-55K€/an (salarié)", "~55-75K€/an salarié · 80-120K€ en freelance senior"] },
      ]},
      { id: "1-7", type: "text", html: "<p>La demande croît fortement, mais l'offre de prestataires qualifiés ne suit pas encore. Les entreprises — en particulier les PME — cherchent des experts capables de les accompagner dans l'adoption de l'IA. C'est une <strong>fenêtre d'opportunité</strong> pour ceux qui se positionnent maintenant.</p>" },

      { id: "1-8", type: "heading", level: 2, text: "Pourquoi maintenant ?" },
      { id: "1-9", type: "diagram", variant: "timeline", nodes: [
        { id: "t1", label: "2022", description: "ChatGPT sort — le grand public découvre l'IA" },
        { id: "t2", label: "2023", description: "GPT-4 et Claude 2 — les modèles deviennent utilisables pour bosser" },
        { id: "t3", label: "2024", description: "Claude 3.5 Sonnet, agents IA — l'automatisation avancée arrive" },
        { id: "t4", label: "2025", description: "Tu es ici. Les outils sont matures. Les entreprises veulent payer." },
        { id: "t5", label: "2026-2027", description: "Le marché sera saturé. Les premiers arrivés auront raflé les clients." },
      ]},
      { id: "1-10", type: "callout", variant: "warning", html: "Dans 2 ans, lancer une agence IA sera comme lancer une agence web en 2020 — possible, mais tu seras en retard. Le moment c'est maintenant." },

      { id: "1-11", type: "separator", style: "line" },
      { id: "1-12", type: "heading", level: 2, text: "Ce que tu vas apprendre dans cette formation" },
      { id: "1-13", type: "steps", steps: [
        { title: "Maîtriser l'IA", description: "Utiliser Claude et les outils IA comme un pro, pas comme un touriste." },
        { title: "Construire des solutions", description: "Créer des chatbots, des automatisations, des sites web, des agents IA." },
        { title: "Vendre tes services", description: "Trouver des clients, closer des deals, livrer des projets." },
        { title: "Scaler ton business", description: "Passer de freelance solo à agence rentable." },
      ]},
      { id: "1-14", type: "text", html: "<p>Chaque module est conçu pour que tu aies un <strong>résultat concret à la fin</strong>. Pas de théorie inutile. Tu apprends, tu fais, tu avances.</p>" },

      { id: "1-15", type: "quiz-inline", question: "Quel est le principal avantage de se lancer dans l'IA maintenant ?", options: [
        { id: "a", text: "Les outils sont gratuits" },
        { id: "b", text: "La demande est forte et l'offre encore faible" },
        { id: "c", text: "Il n'y a pas besoin de compétences techniques" },
      ], correctId: "b", explanation: "Le marché est en pleine explosion mais il y a encore peu de prestataires qualifiés. C'est une fenêtre d'opportunité." },

      { id: "1-16", type: "separator", style: "dots" },
      { id: "1-17", type: "heading", level: 2, text: "Checklist de démarrage" },
      { id: "1-18", type: "checklist", title: "Avant de passer à la leçon suivante", items: [
        { id: "c1", text: "J'ai compris pourquoi l'IA est une opportunité business" },
        { id: "c2", text: "Je sais que le timing est crucial (2025 = fenêtre idéale)" },
        { id: "c3", text: "Je suis motivé pour apprendre et construire" },
      ]},
    ]),
    exercise: "<h3>Réflexion</h3><p>Prends 5 minutes pour noter 3 entreprises autour de toi (restaurant, coiffeur, artisan, commerce) qui pourraient bénéficier de l'IA. Note ce que tu pourrais leur proposer — même vaguement. On y reviendra.</p>",
    quiz: [
      { type: "mcq", question: "Selon McKinsey (2024), quel pourcentage de grandes entreprises avaient adopté l'IA dans au moins une fonction ?", options: JSON.stringify(["35%", "50%", "72%", "95%"]), correctAnswer: "72%", explanation: "Selon le rapport McKinsey 2024, 72% des grandes entreprises ont adopté l'IA dans au moins une fonction. Mais les TPE et PME restent massivement sous-équipées, ce qui crée l'opportunité." },
      { type: "true_false", question: "Le marché mondial de l'IA a connu une croissance très forte entre 2023 et 2025, passant d'environ 150 milliards $ à 250-300 milliards $ selon les estimations.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Selon Statista et IDC, le marché mondial de l'IA est passé d'environ 150 milliards $ en 2023 à une estimation de 250-300 milliards $ en 2025, soit une croissance de 60 à 100% en deux ans." },
      { type: "mcq", question: "Selon la formation, pourquoi 2025 est-il le moment idéal pour lancer une agence IA ?", options: JSON.stringify(["Les outils IA sont gratuits", "La demande explose mais l'offre de prestataires est encore faible", "Les entreprises n'ont pas besoin d'aide pour implémenter l'IA", "Le marché est déjà saturé"]), correctAnswer: "La demande explose mais l'offre de prestataires est encore faible", explanation: "La demande des entreprises pour des prestataires IA explose, mais il n'y a pas encore assez de professionnels qualifiés pour y répondre. C'est une fenêtre d'opportunité." },
      { type: "true_false", question: "En 2026-2027, le marché de l'IA sera saturé et les premiers arrivés auront raflé les clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La formation indique clairement que dans 2 ans, lancer une agence IA sera comme lancer une agence web en 2020 — possible mais en retard. Les premiers arrivés auront un avantage décisif." },
      { type: "mcq", question: "Un ami entrepreneur te dit : 'L'IA c'est un effet de mode, dans 2 ans plus personne n'en parlera. Je préfère attendre.' Quel est ton meilleur argument pour le convaincre d'agir maintenant ?", options: JSON.stringify(["Les outils IA sont tous gratuits donc il n'a rien à perdre", "Le marché a quasi doublé en 2 ans et les premiers arrivés captent les clients avant la saturation", "L'IA va remplacer tous les emplois donc il n'a pas le choix", "Il suffit d'installer ChatGPT pour que son business soit transformé"]), correctAnswer: "Le marché a quasi doublé en 2 ans et les premiers arrivés captent les clients avant la saturation", explanation: "L'argument le plus convaincant est factuel : le marché de l'IA a connu une croissance de 60 à 100% en 2 ans selon les estimations, la majorité des PME n'ont encore rien mis en place, et les premiers arrivés auront un avantage décisif." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 1,
    title: "Les outils du marché : ChatGPT, Claude, Gemini, Mistral",
    slug: "outils-ia-chatgpt-claude-gemini-mistral",
    duration: "25 min",
    description: "Comprendre les différences entre les modèles IA pour choisir le bon outil selon le besoin.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Tous les modèles ne se valent pas" },
      { id: "2-2", type: "text", html: "<p>Quand les gens parlent d'IA, ils pensent souvent à \"ChatGPT\". Mais en réalité, il existe <strong>plusieurs modèles concurrents</strong>, chacun avec ses forces et ses faiblesses.</p><p>En tant que futur professionnel de l'IA, tu dois savoir lequel utiliser selon la situation. C'est comme un menuisier qui ne va pas utiliser le même outil pour visser et pour poncer.</p>" },

      { id: "2-3", type: "heading", level: 2, text: "Le comparatif honnête" },
      { id: "2-4", type: "comparison", headers: ["", "Claude", "ChatGPT", "Gemini", "Mistral"], rows: [
        { cells: ["Code", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐"] },
        { cells: ["Raisonnement", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐"] },
        { cells: ["Écriture", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐"] },
        { cells: ["Multimodal", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐"] },
        { cells: ["Prix", "Gratuit + Pro 20$/m", "Gratuit + Pro 20$/m", "Gratuit (Google)", "Open-source gratuit"] },
        { cells: ["API", "Oui (Anthropic)", "Oui (OpenAI)", "Oui (Google)", "Oui (self-hosted)"] },
      ]},

      { id: "2-5", type: "heading", level: 2, text: "Pourquoi on travaille avec Claude" },
      { id: "2-6", type: "text", html: "<p>Dans cette formation, on utilise principalement <strong>Claude</strong>. Pas parce que c'est le seul — mais parce que c'est <strong>le meilleur pour ce qu'on va faire</strong> :</p>" },
      { id: "2-7", type: "steps", steps: [
        { title: "Le meilleur en code", description: "Claude Code est l'outil de dev IA le plus puissant du marché. On va s'en servir pour tout construire." },
        { title: "Raisonnement supérieur", description: "Pour analyser un business, structurer une offre, résoudre un problème complexe — Claude est au-dessus." },
        { title: "Contexte long", description: "Claude peut travailler sur des projets entiers avec 200K tokens de contexte. Il garde le fil." },
        { title: "Sécurité", description: "Claude est conçu pour être honnête et fiable. Moins d'hallucinations que la concurrence." },
      ]},
      { id: "2-8", type: "callout", variant: "info", html: "Ce que tu apprends avec Claude est transférable aux autres modèles. Les concepts de prompting, d'architecture, de workflow sont les mêmes partout." },

      { id: "2-9", type: "separator", style: "dots" },
      { id: "2-10", type: "heading", level: 2, text: "Quand utiliser quoi" },
      { id: "2-11", type: "diagram", variant: "tree", nodes: [
        { id: "root", label: "Quel outil utiliser ?", children: ["code", "content", "image", "local"] },
        { id: "code", label: "Pour coder / construire", description: "→ Claude", children: [] },
        { id: "content", label: "Pour écrire du contenu", description: "→ Claude ou ChatGPT", children: [] },
        { id: "image", label: "Pour analyser des images/vidéos", description: "→ Gemini", children: [] },
        { id: "local", label: "Pour des données sensibles (local)", description: "→ Mistral (self-hosted)", children: [] },
      ]},

      { id: "2-12", type: "quiz-inline", question: "Pour construire un chatbot pour un client, quel modèle est le plus adapté ?", options: [
        { id: "a", text: "Gemini — il est multimodal" },
        { id: "b", text: "Claude — il excelle en code et raisonnement" },
        { id: "c", text: "Mistral — il est open-source" },
      ], correctId: "b", explanation: "Pour construire un chatbot, tu as besoin de code (backend + frontend) et de raisonnement (logique de conversation). Claude est le meilleur choix." },

      { id: "2-13", type: "checklist", title: "Avant de continuer", items: [
        { id: "c1", text: "Je connais les 4 principaux modèles IA" },
        { id: "c2", text: "Je comprends pourquoi on utilise Claude" },
        { id: "c3", text: "Je sais quel modèle utiliser selon le besoin" },
      ]},
    ]),
    exercise: "<h3>Exercice</h3><p>Va sur <strong>claude.ai</strong> et crée un compte gratuit si ce n'est pas déjà fait. Pose-lui une question sur ton domaine d'expertise et observe la qualité de la réponse.</p>",
    quiz: [
      { type: "mcq", question: "Pour quel usage Claude est-il considéré comme le meilleur choix selon la formation ?", options: JSON.stringify(["Analyse d'images et vidéos", "Code et raisonnement", "Génération d'images", "Traduction en temps réel"]), correctAnswer: "Code et raisonnement", explanation: "Claude excelle en code (Claude Code est l'outil de dev IA le plus puissant du marché) et en raisonnement, ce qui en fait le meilleur choix pour construire des solutions IA." },
      { type: "true_false", question: "Mistral est le meilleur choix quand on a besoin de traiter des données sensibles en local.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Mistral étant open-source et auto-hébergeable (self-hosted), il est le meilleur choix pour traiter des données sensibles sans les envoyer sur des serveurs tiers." },
      { type: "mcq", question: "Quel modèle IA est recommandé pour analyser des images et des vidéos ?", options: JSON.stringify(["Claude", "Mistral", "Gemini", "ChatGPT"]), correctAnswer: "Gemini", explanation: "Gemini de Google obtient 5 étoiles en multimodal (images/vidéos) dans le comparatif, ce qui en fait le meilleur choix pour l'analyse visuelle." },
      { type: "true_false", question: "Claude peut travailler avec un contexte de 200 000 tokens, soit environ 150 000 mots.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Claude dispose d'un contexte long de 200K tokens (~150 000 mots), ce qui lui permet de travailler sur des projets entiers sans perdre le fil." },
      { type: "mcq", question: "Un client te demande de créer un chatbot pour son cabinet d'avocats. Il traite des dossiers confidentiels et ne veut pas que les données transitent par des serveurs externes. Quel modèle IA lui recommandes-tu en priorité ?", options: JSON.stringify(["Claude Pro car il est le meilleur en raisonnement", "ChatGPT Plus car il est le plus connu", "Mistral en self-hosted car les données restent en local", "Gemini car il est gratuit avec Google"]), correctAnswer: "Mistral en self-hosted car les données restent en local", explanation: "Pour des données sensibles et confidentielles, Mistral en self-hosted est le meilleur choix car les données ne transitent par aucun serveur tiers. C'est exactement le cas d'usage pour lequel Mistral est recommandé." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 1,
    title: "Tes premiers prompts : de débutant à efficace en 1h",
    slug: "premiers-prompts-debutant-efficace",
    duration: "30 min",
    description: "Apprendre à écrire des prompts qui donnent de vrais résultats, pas du contenu générique.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le prompt, c'est ta compétence n°1" },
      { id: "3-2", type: "text", html: "<p>Un prompt, c'est l'instruction que tu donnes à l'IA. C'est <strong>la compétence la plus importante</strong> que tu vas développer. Un bon prompt = un bon résultat. Un mauvais prompt = du contenu générique inutilisable.</p><p>La différence entre un débutant et un pro, c'est pas l'outil — c'est <strong>la qualité des instructions</strong>.</p>" },

      { id: "3-3", type: "heading", level: 2, text: "Prompt simple vs prompt structuré" },
      { id: "3-4", type: "comparison", headers: ["Prompt simple", "Prompt structuré"], rows: [
        { cells: ["\"Écris-moi un email de prospection\"", "Rôle + Contexte + Tâche + Format"] },
        { cells: ["Résultat générique, bateau", "Résultat précis, utilisable"] },
        { cells: ["Tu dois refaire 5 fois", "Tu as le bon résultat du premier coup"] },
      ]},

      { id: "3-5", type: "heading", level: 2, text: "La structure RCTF" },
      { id: "3-6", type: "text", html: "<p>Retiens cet acronyme : <strong>RCTF</strong>. C'est la structure que tu vas utiliser pour 90% de tes prompts.</p>" },
      { id: "3-7", type: "steps", steps: [
        { icon: "🎭", title: "R — Rôle", description: "Dis à l'IA qui elle est. \"Tu es un expert en marketing B2B spécialisé dans le SaaS.\"" },
        { icon: "📋", title: "C — Contexte", description: "Donne la situation. \"Mon client vend un CRM à 49€/mois aux TPE françaises.\"" },
        { icon: "🎯", title: "T — Tâche", description: "Dis ce que tu veux. \"Écris 3 emails de prospection différents.\"" },
        { icon: "📐", title: "F — Format", description: "Précise la forme. \"Pour chaque email : objet, corps, CTA. Max 5 lignes par email.\"" },
      ]},

      { id: "3-8", type: "heading", level: 3, text: "Exemple concret" },
      { id: "3-9", type: "code", language: "text", filename: "prompt-structure-rctf.txt", code: "Rôle : Tu es un consultant en automatisation pour PME.\n\nContexte : Mon client est un cabinet comptable de 12 personnes.\nIls passent 3h/jour à saisir des factures manuellement.\nIls utilisent Excel et un logiciel comptable classique.\n\nTâche : Propose-moi 3 solutions d'automatisation concrètes\nqui pourraient réduire ce temps de 80%.\n\nFormat :\n- Pour chaque solution : nom, description en 2 lignes,\n  coût estimé, temps de mise en place\n- Classe-les de la plus simple à la plus complexe" },

      { id: "3-10", type: "callout", variant: "success", title: "Résultat", html: "Avec ce prompt, Claude va te donner 3 solutions concrètes, chiffrées, actionnables. Pas du blabla générique." },

      { id: "3-11", type: "separator", style: "dots" },
      { id: "3-12", type: "heading", level: 2, text: "Les 5 erreurs qui ruinent tes prompts" },
      { id: "3-13", type: "steps", steps: [
        { icon: "❌", title: "Être trop vague", description: "\"Aide-moi avec mon business\" → L'IA ne sait pas par où commencer." },
        { icon: "❌", title: "Ne pas donner de contexte", description: "Sans contexte, l'IA invente. Avec contexte, elle résout." },
        { icon: "❌", title: "Demander trop en une fois", description: "Un prompt = une tâche claire. Pas 10 questions en même temps." },
        { icon: "❌", title: "Ne pas préciser le format", description: "Si tu veux un tableau, dis-le. Sinon tu auras un pavé de texte." },
        { icon: "❌", title: "Ne pas itérer", description: "Le premier résultat est rarement parfait. Affine, précise, relance." },
      ]},

      { id: "3-14", type: "quiz-inline", question: "Quelle structure de prompt donne les meilleurs résultats ?", options: [
        { id: "a", text: "Écrire un long paragraphe détaillé" },
        { id: "b", text: "RCTF : Rôle + Contexte + Tâche + Format" },
        { id: "c", text: "Être le plus court possible" },
      ], correctId: "b", explanation: "La structure RCTF donne un cadre clair à l'IA. C'est pas la longueur qui compte, c'est la structure." },

      { id: "3-15", type: "checklist", title: "À faire maintenant", items: [
        { id: "c1", text: "Écrire 2 prompts simples (sans structure)" },
        { id: "c2", text: "Réécrire ces mêmes prompts en format RCTF" },
        { id: "c3", text: "Comparer les résultats — noter la différence" },
        { id: "c4", text: "Écrire un prompt RCTF pour un cas client fictif" },
      ]},
    ]),
    exercise: "<h3>Exercice pratique</h3><ol><li>Ouvre Claude (claude.ai)</li><li>Écris ce prompt simple : <em>\"Écris-moi un email de prospection\"</em></li><li>Puis écris le même en RCTF avec un rôle, contexte, tâche et format précis</li><li>Compare les deux résultats et note ce qui change</li></ol>",
    quiz: [
      { type: "mcq", question: "Que signifie l'acronyme RCTF dans la structure de prompt ?", options: JSON.stringify(["Résultat, Code, Test, Feedback", "Rôle, Contexte, Tâche, Format", "Recherche, Contenu, Texte, Formulaire", "Rapide, Concis, Technique, Fiable"]), correctAnswer: "Rôle, Contexte, Tâche, Format", explanation: "RCTF signifie Rôle (qui est l'IA), Contexte (la situation), Tâche (ce qu'on veut) et Format (la forme du résultat). C'est la structure à utiliser pour 90% de tes prompts." },
      { type: "true_false", question: "Un prompt court et vague donne généralement de meilleurs résultats qu'un prompt structuré avec RCTF.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse : un prompt structuré RCTF donne un résultat précis et utilisable dès le premier essai, tandis qu'un prompt vague produit du contenu générique qu'il faut refaire plusieurs fois." },
      { type: "mcq", question: "Parmi les 5 erreurs de prompting, laquelle consiste à poser 10 questions en même temps ?", options: JSON.stringify(["Être trop vague", "Ne pas donner de contexte", "Demander trop en une fois", "Ne pas préciser le format"]), correctAnswer: "Demander trop en une fois", explanation: "Demander trop en une fois est une erreur courante. La règle : un prompt = une tâche claire. Pas 10 questions en même temps, sinon l'IA se disperse." },
      { type: "true_false", question: "Un prompt bien structuré avec la méthode RCTF donne un résultat exploitable dès le premier essai dans la majorité des cas.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un prompt RCTF bien structuré donne généralement un résultat exploitable dès le premier essai. Cependant, l'itération reste importante pour affiner et obtenir le meilleur résultat possible — c'est la différence entre 'exploitable' et 'parfait'." },
      { type: "mcq", question: "Un prospect te demande de rédiger un email de prospection avec l'IA. Tu obtiens un résultat générique et inutilisable. Quelle est la cause la plus probable ?", options: JSON.stringify(["L'IA utilisée n'est pas assez puissante", "Le prompt manquait de structure RCTF, notamment le contexte et le format", "Il faut un abonnement payant pour avoir de bons résultats", "L'email de prospection est un format que l'IA ne gère pas bien"]), correctAnswer: "Le prompt manquait de structure RCTF, notamment le contexte et le format", explanation: "Un résultat générique est presque toujours dû à un prompt trop vague. En ajoutant le Rôle, le Contexte (cible, secteur, problème), la Tâche précise et le Format souhaité, le résultat devient immédiatement exploitable." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 1,
    title: "Ce qu'une agence IA peut vendre (et à quel prix)",
    slug: "agence-ia-services-et-prix",
    duration: "25 min",
    description: "Découvrir les 5 services les plus rentables d'une agence IA et leurs fourchettes de prix.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Les 5 services qui se vendent le mieux" },
      { id: "4-2", type: "text", html: "<p>Une agence IA ne vend pas \"de l'IA\". Elle vend des <strong>solutions concrètes</strong> à des problèmes concrets. Voici les 5 services les plus demandés et les plus rentables :</p>" },

      { id: "4-3", type: "steps", steps: [
        { icon: "💬", title: "Chatbots IA", description: "Support client, qualification de leads, prise de RDV automatique. Le service le plus facile à vendre." },
        { icon: "⚡", title: "Automatisations", description: "Connecter les outils entre eux : CRM → Email → Facturation → Relance. Les entreprises adorent." },
        { icon: "🌐", title: "Sites web & landing pages", description: "Créer des sites optimisés avec l'IA en quelques jours au lieu de quelques semaines." },
        { icon: "🤖", title: "Agents IA autonomes", description: "Des IA qui travaillent en continu : veille, prospection, analyse de données." },
        { icon: "📝", title: "Création de contenu", description: "Pipeline de contenu automatisé : blog, réseaux sociaux, newsletters." },
      ]},

      { id: "4-4", type: "separator", style: "line" },
      { id: "4-5", type: "heading", level: 2, text: "Combien tu peux facturer" },
      { id: "4-6", type: "comparison", headers: ["Service", "Prix débutant", "Prix confirmé", "Récurrent possible"], rows: [
        { cells: ["Chatbot IA", "500-1 000€", "2 000-5 000€", "Oui (maintenance 100-300€/mois)"] },
        { cells: ["Automatisation", "300-800€", "1 500-3 000€", "Oui (support 200-500€/mois)"] },
        { cells: ["Site web / Landing", "500-1 500€", "2 000-5 000€", "Non (one-shot)"] },
        { cells: ["Agent IA autonome", "1 000-2 000€", "3 000-8 000€", "Oui (hébergement + suivi)"] },
        { cells: ["Pipeline contenu", "500-1 000€", "1 500-3 000€", "Oui (abonnement mensuel)"] },
      ]},
      { id: "4-7", type: "callout", variant: "tip", html: "Le secret c'est le <strong>récurrent</strong>. Un chatbot vendu 1 500€ + maintenance 200€/mois = 3 900€ la première année. 10 clients comme ça = 39 000€." },

      { id: "4-8", type: "heading", level: 2, text: "Le calcul pour atteindre 10K€/mois" },
      { id: "4-9", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "3 chatbots/mois", description: "3 × 1 500€ = 4 500€" },
        { id: "n2", label: "2 automatisations", description: "2 × 1 000€ = 2 000€" },
        { id: "n3", label: "10 clients récurrents", description: "10 × 250€ = 2 500€" },
        { id: "n4", label: "1 site web", description: "1 × 2 000€ = 2 000€" },
      ]},
      { id: "4-10", type: "callout", variant: "success", html: "<strong>Total : 11 000€/mois</strong>. C'est un objectif ambitieux mais atteignable en 6-12 mois pour les profils les plus actifs et réguliers. Certains y arrivent plus vite, d'autres plus lentement — l'important c'est la progression constante." },

      { id: "4-11", type: "text", html: "<p>Tu n'as pas besoin de tout maîtriser dès le début. <strong>Commence par un seul service</strong> (on recommande les chatbots — c'est le plus facile à vendre et à livrer), puis ajoute les autres progressivement.</p>" },

      { id: "4-12", type: "quiz-inline", question: "Quel service est le plus facile pour commencer ?", options: [
        { id: "a", text: "Les agents IA autonomes" },
        { id: "b", text: "Les chatbots IA" },
        { id: "c", text: "La création de sites web" },
      ], correctId: "b", explanation: "Les chatbots sont les plus faciles à vendre (le besoin est évident pour le client) et à livrer (tu peux en créer un en quelques heures)." },

      { id: "4-13", type: "checklist", title: "À retenir", items: [
        { id: "c1", text: "Je connais les 5 services principaux d'une agence IA" },
        { id: "c2", text: "Je sais combien je peux facturer pour chaque service" },
        { id: "c3", text: "Je comprends l'importance du récurrent" },
        { id: "c4", text: "J'ai identifié par quel service je veux commencer" },
      ]},
    ]),
    exercise: "<h3>Exercice</h3><p>Choisis UN service parmi les 5. Note quel type de client tu viserais (ex : restaurants pour des chatbots de réservation) et à quel prix tu le vendrais pour commencer.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le prix débutant pour la création d'un chatbot IA ?", options: JSON.stringify(["50-100€", "500-1 000€", "5 000-10 000€", "100-200€"]), correctAnswer: "500-1 000€", explanation: "Un chatbot IA se facture entre 500 et 1 000€ pour un débutant, et entre 2 000 et 5 000€ pour un profil confirmé, avec en plus une maintenance récurrente de 100-300€/mois." },
      { type: "true_false", question: "Les sites web et landing pages sont le service recommandé pour commencer une agence IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Ce sont les chatbots IA qui sont recommandés pour commencer, car c'est le service le plus facile à vendre (le besoin est évident) et à livrer (quelques heures de travail)." },
      { type: "mcq", question: "Combien peut rapporter un chatbot vendu 1 500€ avec maintenance à 200€/mois sur la première année ?", options: JSON.stringify(["1 500€", "2 400€", "3 900€", "6 000€"]), correctAnswer: "3 900€", explanation: "Un chatbot à 1 500€ + 200€/mois de maintenance = 1 500€ + (200€ × 12) = 1 500€ + 2 400€ = 3 900€ la première année." },
      { type: "true_false", question: "Le revenu récurrent (maintenance mensuelle) est plus important que le prix initial pour la rentabilité d'une agence IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le secret c'est le récurrent. 10 clients en maintenance à 250€/mois = 2 500€/mois de revenus prévisibles, soit 30 000€/an sans chercher de nouveaux clients." },
      { type: "mcq", question: "Un restaurateur te contacte car il perd 3h/jour à répondre aux mêmes questions par téléphone (horaires, menu, réservations). Quelle solution lui proposes-tu en priorité ?", options: JSON.stringify(["Un agent IA autonome de prospection à 5 000€", "Un chatbot IA pour répondre aux questions fréquentes et prendre les réservations", "Un pipeline de contenu automatisé pour ses réseaux sociaux", "Un site web complet avec refonte graphique"]), correctAnswer: "Un chatbot IA pour répondre aux questions fréquentes et prendre les réservations", explanation: "Le chatbot IA est la solution idéale ici : il répond aux questions fréquentes (horaires, menu, allergènes) et prend les réservations 24h/24. C'est le service le plus facile à vendre car le besoin est évident et le ROI immédiat (3h/jour économisées)." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 1,
    title: "Démo : on crée un chatbot en 30 min devant toi",
    slug: "demo-creation-chatbot-30-min",
    duration: "35 min",
    description: "Voir en live la création d'un chatbot IA fonctionnel pour comprendre la puissance des outils.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "On passe à la pratique" },
      { id: "5-2", type: "text", html: "<p>Assez de théorie. Dans cette leçon, on va créer <strong>un chatbot IA fonctionnel</strong> ensemble. Le but n'est pas que tu comprennes tout le code — c'est que tu <strong>voies ce qui est possible</strong> et à quelle vitesse.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "Cette leçon est une démo. Tu pourras reproduire tout ça toi-même dans les modules techniques (Module 7 — Chatbots IA)." },

      { id: "5-4", type: "heading", level: 2, text: "Ce qu'on va construire" },
      { id: "5-5", type: "text", html: "<p>Un chatbot pour un <strong>restaurant fictif</strong> qui peut :</p>" },
      { id: "5-6", type: "steps", steps: [
        { title: "Répondre aux questions fréquentes", description: "Horaires, menu, allergènes, parking..." },
        { title: "Prendre des réservations", description: "Date, heure, nombre de personnes" },
        { title: "Qualifier les demandes", description: "Événement privé ? Groupe ? Commande traiteur ?" },
      ]},

      { id: "5-7", type: "heading", level: 2, text: "Les étapes de création" },
      { id: "5-8", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "1. Prompt système", description: "Personnalité du chatbot" },
        { id: "n2", label: "2. Base de connaissances", description: "Infos du restaurant" },
        { id: "n3", label: "3. Interface chat", description: "Widget sur le site" },
        { id: "n4", label: "4. Test & ajustement", description: "Affiner les réponses" },
      ]},

      { id: "5-9", type: "heading", level: 3, text: "Le prompt système du chatbot" },
      { id: "5-10", type: "code", language: "text", filename: "chatbot-prompt-systeme.txt", code: "Tu es l'assistant virtuel du restaurant \"Le Petit Bistrot\".\nTu es chaleureux, professionnel et concis.\n\nInformations du restaurant :\n- Adresse : 15 rue de la Paix, 75002 Paris\n- Horaires : Mar-Sam 12h-14h30 et 19h-22h30\n- Cuisine : Française traditionnelle, produits frais\n- Prix moyen : 35€ par personne\n- Parking : Parking Vendôme à 200m\n- Allergènes : Carte sans gluten disponible\n\nRègles :\n- Réponds TOUJOURS en français\n- Sois concis (3-4 phrases max)\n- Pour les réservations, demande : date, heure, nombre\n- Pour les événements privés, propose d'appeler le 01 23 45 67 89\n- Ne réponds JAMAIS à des questions hors sujet" },

      { id: "5-11", type: "callout", variant: "tip", html: "Ce prompt système, c'est la \"personnalité\" du chatbot. Plus il est précis, meilleur est le résultat. C'est exactement la méthode RCTF de la leçon précédente." },

      { id: "5-12", type: "heading", level: 3, text: "Le code (aperçu simplifié)" },
      { id: "5-13", type: "code", language: "javascript", filename: "chatbot-api.js", code: "// Aperçu simplifié — tu apprendras le code complet au Module 7\n\nimport Anthropic from \"@anthropic-ai/sdk\";\n\nconst client = new Anthropic();\n\nasync function chatbotReponse(messageUtilisateur) {\n  const response = await client.messages.create({\n    model: \"claude-sonnet-4-20250514\",\n    max_tokens: 300,\n    system: PROMPT_SYSTEME, // Le prompt qu'on a écrit au-dessus\n    messages: [\n      { role: \"user\", content: messageUtilisateur }\n    ],\n  });\n  return response.content[0].text;\n}\n\n// Exemple d'utilisation :\n// chatbotReponse(\"Vous êtes ouvert le dimanche ?\")\n// → \"Non, Le Petit Bistrot est ouvert du mardi au samedi...\"" },

      { id: "5-14", type: "text", html: "<p>En quelques lignes de code + un bon prompt système, tu as un chatbot fonctionnel. <strong>C'est ça que tu vas vendre 1 500€ à un restaurant.</strong> Et il te faut quelques heures pour le construire.</p>" },

      { id: "5-15", type: "callout", variant: "warning", html: "Ne te laisse pas impressionner par le code. Tu n'as pas besoin de tout comprendre maintenant. Le Module 3 t'apprendra à coder avec l'IA sans être développeur." },

      { id: "5-16", type: "quiz-inline", question: "Combien de temps faut-il pour créer un chatbot comme celui-ci une fois formé ?", options: [
        { id: "a", text: "1 semaine" },
        { id: "b", text: "2-4 heures" },
        { id: "c", text: "1 mois" },
      ], correctId: "b", explanation: "Avec les bons outils et un prompt système bien fait, un chatbot simple se crée en 2-4 heures. C'est pour ça que la marge est excellente." },

      { id: "5-17", type: "checklist", title: "Ce que tu dois retenir", items: [
        { id: "c1", text: "Un chatbot c'est un prompt système + une API + une interface" },
        { id: "c2", text: "Le prompt système est la partie la plus importante" },
        { id: "c3", text: "Ça se construit en quelques heures, pas en quelques semaines" },
      ]},
    ]),
    exercise: "<h3>Exercice</h3><p>Va sur claude.ai et colle le prompt système du restaurant ci-dessus dans un nouveau projet. Teste-le en lui posant des questions comme un client le ferait. Note ce qui marche bien et ce qui pourrait être amélioré.</p>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 3 composantes essentielles d'un chatbot IA ?", options: JSON.stringify(["Un site web, un logo et un nom de domaine", "Un prompt système, une API et une interface chat", "Un serveur, un CDN et une base de données", "Un CRM, un email et un téléphone"]), correctAnswer: "Un prompt système, une API et une interface chat", explanation: "Un chatbot IA se compose de 3 éléments : un prompt système (la personnalité), une API (le cerveau, ex: Claude), et une interface chat (le widget visible par l'utilisateur)." },
      { type: "true_false", question: "Le prompt système est la partie la plus importante d'un chatbot IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le prompt système est la 'personnalité' du chatbot. Plus il est précis, meilleur est le résultat. C'est lui qui définit comment le chatbot se comporte et répond." },
      { type: "mcq", question: "Combien de temps faut-il pour créer un chatbot simple une fois formé ?", options: JSON.stringify(["1 semaine", "2-4 heures", "1 mois", "30 minutes"]), correctAnswer: "2-4 heures", explanation: "Avec les bons outils et un prompt système bien fait, un chatbot simple se crée en 2-4 heures. C'est pour ça que la marge est excellente quand on le vend 1 500€." },
      { type: "true_false", question: "Pour créer un chatbot, il faut comprendre tout le code avant de commencer.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La démo est faite pour montrer ce qui est possible et à quelle vitesse. Il n'est pas nécessaire de tout comprendre — le Module 3 enseignera à coder avec l'IA sans être développeur." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : un client fleuriste veut un chatbot mais hésite car 'les clients préfèrent parler à un humain'. Comment le rassures-tu ?", options: JSON.stringify(["Tu lui expliques que l'IA est meilleure que les humains pour tout", "Tu lui montres que le chatbot gère les questions simples (horaires, prix, disponibilité) et redirige vers un humain pour les demandes complexes", "Tu lui proposes de remplacer tout son personnel par un chatbot", "Tu lui dis que les chatbots ne sont pas adaptés à son secteur"]), correctAnswer: "Tu lui montres que le chatbot gère les questions simples (horaires, prix, disponibilité) et redirige vers un humain pour les demandes complexes", explanation: "Un bon chatbot ne remplace pas l'humain — il filtre et gère les questions répétitives (80% du volume) pour que l'humain se concentre sur les demandes à forte valeur ajoutée. C'est exactement le rôle du prompt système bien conçu." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 1,
    title: "Ton identité d'agence : nom, pitch, positionnement",
    slug: "identite-agence-nom-pitch-positionnement",
    duration: "25 min",
    description: "Choisis ton nom d'agence, écris un pitch de 30 secondes percutant et définis ton positionnement pour te démarquer dès le premier jour.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Avant de construire, il faut une identité" },
      { id: "6-2", type: "text", html: "<p>Tu as compris l'opportunité IA, les outils, le prompting, les services et les prix. Maintenant il faut que tu existes en tant que professionnel. Pas besoin d'un logo à 2 000€ ou d'un site parfait — mais tu as besoin de <strong>3 choses</strong> dès maintenant : un nom, un pitch et un positionnement clair.</p><p>C'est ce qui fait la différence entre \"je fais des trucs avec l'IA\" et \"je suis consultant IA spécialisé pour les cabinets comptables\".</p>" },

      { id: "6-3", type: "separator", style: "dots" },
      { id: "6-4", type: "heading", level: 2, text: "Étape 1 : Choisir ton nom d'agence" },
      { id: "6-5", type: "text", html: "<p>Ton nom d'agence doit être <strong>simple, mémorable et professionnel</strong>. Ne passe pas 3 semaines dessus — un bon nom suffit, un nom parfait n'existe pas. Voici les 4 approches qui marchent :</p>" },
      { id: "6-6", type: "steps", steps: [
        { title: "Ton prénom + IA", description: "Ex: 'Martin IA', 'Lucas AI Solutions'. Simple, personnel, facile à retenir. Idéal si tu te positionnes comme consultant solo." },
        { title: "Mot inventé", description: "Ex: 'Synapz', 'Opexia', 'Neuralink'. Moderne, unique, facile à déposer en marque. Vérifie que le .com ou .fr est dispo." },
        { title: "Descriptif + IA", description: "Ex: 'IA pour PME', 'AutomatIA', 'ChatBot Studio'. Le client comprend immédiatement ce que tu fais. Moins sexy mais ultra-clair." },
        { title: "Anglicisme tech", description: "Ex: 'Bright AI Agency', 'Nexus AI', 'Pulse Automation'. Donne un côté international et tech. Attention : évite si tes clients sont des artisans locaux." },
      ]},
      { id: "6-7", type: "callout", variant: "warning", html: "<strong>Les erreurs à éviter :</strong> un nom trop long (max 3 mots), un nom imprononçable, un nom trop générique ('Solutions Digitales'), un nom avec des caractères spéciaux. Et surtout : vérifie que le nom de domaine est disponible sur <strong>namecheap.com</strong> ou <strong>ovh.com</strong> avant de te décider." },
      { id: "6-8", type: "code", language: "text", filename: "prompt-nom-agence.txt", code: "Tu es un expert en branding et naming.\n\nContexte : Je lance une agence IA qui propose des chatbots,\ndes automatisations et des sites web aux PME françaises.\n\nMon prénom : [TON PRÉNOM]\nMon secteur cible : [ex: santé, restauration, e-commerce, généraliste]\nMon ton préféré : [ex: pro et sérieux / moderne et tech / accessible et humain]\n\nGénère 10 noms d'agence avec pour chacun :\n- Le nom\n- Pourquoi il fonctionne (en 1 ligne)\n- Le nom de domaine suggéré (.fr ou .com)\n- Un verdict : simple / mémorable / pro (oui/non pour chaque)" },

      { id: "6-9", type: "separator", style: "line" },
      { id: "6-10", type: "heading", level: 2, text: "Étape 2 : Écrire ton pitch de 30 secondes" },
      { id: "6-11", type: "text", html: "<p>Le pitch, c'est ce que tu dis quand quelqu'un te demande <strong>\"Tu fais quoi dans la vie ?\"</strong>. Tu as 30 secondes. Pas de jargon, pas de blabla. La structure qui marche :</p>" },
      { id: "6-12", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "1. Pour qui", description: "J'aide les [type de client]..." },
        { id: "n2", label: "2. Problème", description: "...qui perdent du temps/argent à [problème]..." },
        { id: "n3", label: "3. Solution", description: "...en mettant en place [solution IA concrète]..." },
        { id: "n4", label: "4. Résultat", description: "...pour qu'ils [bénéfice chiffré si possible]." },
      ]},
      { id: "6-13", type: "heading", level: 3, text: "Exemples de pitch efficaces" },
      { id: "6-14", type: "comparison", headers: ["Mauvais pitch", "Bon pitch"], rows: [
        { cells: ["\"Je fais de l'IA pour les entreprises\"", "\"J'aide les restaurants à automatiser leurs réservations et leur support client avec des chatbots IA — ils gagnent 3h par jour\""] },
        { cells: ["\"Je suis consultant en intelligence artificielle\"", "\"J'aide les cabinets comptables à diviser par 2 leur temps de saisie grâce à l'automatisation IA\""] },
        { cells: ["\"J'ai une agence digitale\"", "\"Je crée des sites web et des chatbots pour les coachs et consultants qui veulent plus de clients en ligne\""] },
      ]},
      { id: "6-15", type: "callout", variant: "tip", html: "Un bon pitch répond à 3 questions en moins de 30 secondes : <strong>tu fais quoi ?</strong>, <strong>pour qui ?</strong>, et <strong>quel résultat ?</strong> Si ton interlocuteur dit \"Ah intéressant, comment ça marche ?\" — tu as gagné." },
      { id: "6-16", type: "code", language: "text", filename: "prompt-pitch.txt", code: "Tu es expert en copywriting et en pitch de vente.\n\nContexte :\n- Mon agence s'appelle : [NOM]\n- Je propose : [chatbots, automatisations, sites web — choisis 1 ou 2]\n- Ma cible : [type de client]\n- Le problème que je résous : [perte de temps, manque de clients, process manuels...]\n\nGénère 3 versions de pitch de 30 secondes (max 3 phrases chacun).\nChaque pitch doit :\n- Commencer par 'J'aide les [cible]...'\n- Mentionner un résultat concret et chiffré\n- Être compréhensible par quelqu'un qui ne connaît rien à l'IA\n\nPuis indique quelle version est la plus percutante et pourquoi." },

      { id: "6-17", type: "separator", style: "line" },
      { id: "6-18", type: "heading", level: 2, text: "Étape 3 : Définir ton positionnement" },
      { id: "6-19", type: "text", html: "<p>Le positionnement, c'est la case que tu occupes dans la tête de ton client. Tu as deux grandes options :</p>" },
      { id: "6-20", type: "comparison", headers: ["Généraliste", "Spécialiste"], rows: [
        { cells: ["\"Je fais de l'IA pour toutes les entreprises\"", "\"Je fais des chatbots pour les restaurants\""] },
        { cells: ["Plus de prospects potentiels", "Moins de prospects mais mieux qualifiés"] },
        { cells: ["Difficile de se démarquer", "Expert reconnu dans ta niche"] },
        { cells: ["Argumentaire de vente générique", "Argumentaire ultra-ciblé qui convertit"] },
        { cells: ["Prix moyen (concurrence forte)", "Prix premium (peu de concurrence)"] },
      ]},
      { id: "6-21", type: "callout", variant: "success", html: "<strong>Notre recommandation pour démarrer :</strong> commence spécialiste sur 1 service + 1 type de client. Tu pourras toujours élargir une fois que tu auras tes premiers clients et du bouche-à-oreille. Un spécialiste à 1 500€ signe plus facilement qu'un généraliste à 500€." },
      { id: "6-22", type: "text", html: "<p>Pour choisir ta niche, demande-toi :</p>" },
      { id: "6-23", type: "steps", steps: [
        { title: "Quel secteur tu connais ?", description: "Tu as bossé dans la restauration ? L'immobilier ? La santé ? Tu auras un avantage massif à cibler ce que tu connais déjà." },
        { title: "Quel problème est évident ?", description: "Les restaurants perdent du temps au téléphone. Les coachs n'ont pas de site pro. Les artisans ne font aucune relance client. Choisis un problème visible." },
        { title: "Qui peut payer ?", description: "Un restaurant qui fait 300K€ de CA peut payer 1 500€ pour un chatbot. Un étudiant qui lance un blog, non. Cible des gens qui ont du budget." },
      ]},

      { id: "6-24", type: "separator", style: "line" },
      { id: "6-25", type: "heading", level: 2, text: "Étape 4 : Réécris ta bio LinkedIn" },
      { id: "6-26", type: "text", html: "<p>LinkedIn est le canal n°1 pour trouver des clients B2B en France. Ta bio doit immédiatement dire ce que tu fais et pour qui. Voici la structure :</p>" },
      { id: "6-27", type: "code", language: "text", filename: "structure-bio-linkedin.txt", code: "TITRE LINKEDIN (le plus important — visible partout) :\n[Ce que tu fais] pour [ta cible] | [Nom agence]\n\nExemples :\n- \"Chatbots IA & Automatisation pour restaurants | Fondateur @Synapz\"\n- \"J'aide les coachs à avoir plus de clients grâce à l'IA | Lucas AI\"\n- \"Consultant IA pour PME — Chatbots, automatisation, sites web\"\n\nSECTION À PROPOS (3-4 lignes max) :\nLigne 1 : Le problème de ta cible\nLigne 2 : Ce que tu proposes\nLigne 3 : Résultat concret\nLigne 4 : CTA (\"Écris-moi pour en parler\")\n\nExemple :\n\"Les PME perdent des heures chaque jour sur des tâches que l'IA peut faire en 5 minutes.\nJe crée des chatbots et des automatisations sur-mesure qui font gagner 10h+ par semaine.\n+30 entreprises accompagnées en 2025.\n→ Écris-moi pour un audit IA gratuit de 15 min.\"" },
      { id: "6-28", type: "code", language: "text", filename: "prompt-bio-linkedin.txt", code: "Tu es expert en personal branding LinkedIn.\n\nContexte :\n- Nom de mon agence : [NOM]\n- Mon service principal : [chatbots / automatisations / sites web]\n- Ma cible : [type de client]\n- Mon résultat principal : [bénéfice chiffré]\n\nGénère :\n1. 3 options de titre LinkedIn (max 120 caractères chacun)\n2. 1 section 'À propos' optimisée (4 lignes max)\n3. 1 CTA de fin percutant\n\nTon : professionnel mais humain. Pas de jargon technique.\nL'objectif : que quelqu'un qui visite mon profil comprenne\nen 5 secondes ce que je fais et ait envie de me contacter." },

      { id: "6-29", type: "separator", style: "dots" },
      { id: "6-30", type: "quiz-inline", question: "Tu lances ton agence IA. Quel positionnement est le plus efficace pour signer tes premiers clients ?", options: [
        { id: "a", text: "Généraliste : 'Je fais de l'IA pour tout le monde'" },
        { id: "b", text: "Spécialiste : 'Je crée des chatbots pour les restaurants'" },
        { id: "c", text: "Pas besoin de positionnement, les compétences suffisent" },
      ], correctId: "b", explanation: "Commencer spécialiste sur 1 service + 1 type de client permet de se démarquer, d'avoir un argumentaire ultra-ciblé et de facturer plus cher. Tu pourras élargir ensuite." },

      { id: "6-31", type: "checklist", title: "Bilan du Module 1", items: [
        { id: "c1", text: "J'ai compris l'opportunité IA et pourquoi c'est le moment" },
        { id: "c2", text: "Je connais les outils IA et leurs forces" },
        { id: "c3", text: "Je maîtrise la structure RCTF pour mes prompts" },
        { id: "c4", text: "Je connais les 5 services d'une agence IA et leurs prix" },
        { id: "c5", text: "J'ai vu comment un chatbot se construit en live" },
        { id: "c6", text: "J'ai un nom d'agence, un pitch et un positionnement clair" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ton identité d'agence</h3><p>Utilise Claude pour réaliser les 4 livrables suivants :</p><ol><li><strong>Nom d'agence :</strong> utilise le prompt de naming fourni dans la leçon. Choisis ton nom et vérifie que le domaine est disponible.</li><li><strong>Pitch de 30 secondes :</strong> écris-le avec Claude en utilisant la structure Pour qui / Problème / Solution / Résultat. Entraîne-toi à le dire à voix haute en moins de 30 secondes.</li><li><strong>Positionnement :</strong> décide si tu commences généraliste ou spécialiste. Note ton service principal + ton type de client cible.</li><li><strong>Bio LinkedIn :</strong> réécris ton titre et ta section 'À propos' avec Claude. Mets-les à jour sur ton vrai profil LinkedIn dès maintenant.</li></ol><p><strong>Livrable :</strong> capture d'écran de ton profil LinkedIn mis à jour + ton pitch écrit dans la communauté.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la longueur idéale d'un nom d'agence IA ?", options: JSON.stringify(["1 mot minimum, pas de maximum", "Maximum 3 mots, simple et mémorable", "Au moins 5 mots pour être descriptif", "Le nom n'a aucune importance"]), correctAnswer: "Maximum 3 mots, simple et mémorable", explanation: "Un bon nom d'agence est court (max 3 mots), simple à prononcer, mémorable et professionnel. Il faut aussi vérifier que le nom de domaine est disponible." },
      { type: "true_false", question: "Un pitch de 30 secondes efficace doit mentionner le maximum de services que tu proposes pour impressionner ton interlocuteur.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un bon pitch est focalisé : 1 cible, 1 problème, 1 solution, 1 résultat. Lister tous tes services dilue ton message et rend le pitch confus. La clarté bat toujours l'exhaustivité." },
      { type: "mcq", question: "Pourquoi est-il recommandé de commencer comme spécialiste plutôt que généraliste ?", options: JSON.stringify(["Parce que les spécialistes ont moins de travail", "Parce qu'on se démarque plus facilement, l'argumentaire est ciblé et on peut facturer plus cher", "Parce que les généralistes ne trouvent jamais de clients", "Parce qu'il est impossible de proposer plusieurs services"]), correctAnswer: "Parce qu'on se démarque plus facilement, l'argumentaire est ciblé et on peut facturer plus cher", explanation: "Un spécialiste se démarque dans sa niche, a un argumentaire ultra-ciblé qui convertit mieux, et peut facturer un prix premium car il y a peu de concurrence. Un spécialiste à 1 500 euros signe plus facilement qu'un généraliste à 500 euros." },
      { type: "true_false", question: "Sur LinkedIn, le titre est l'élément le plus important car il est visible partout (recherche, commentaires, messages).", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le titre LinkedIn est visible dans les résultats de recherche, sous chaque commentaire que tu postes, dans les messages et sur ton profil. C'est la première chose que les gens voient — il doit dire clairement ce que tu fais et pour qui." },
      { type: "mcq", question: "Tu rencontres un restaurateur en networking. Il te demande 'Tu fais quoi ?'. Lequel de ces pitchs est le plus efficace ?", options: JSON.stringify(["'Je suis dans le digital et l'intelligence artificielle'", "'J'ai une agence qui fait des chatbots, des sites web, des automatisations, du SEO et du marketing'", "'J'aide les restaurants à automatiser leurs réservations et leur support client avec des chatbots IA — mes clients gagnent 3h par jour'", "'Je suis développeur freelance spécialisé en machine learning et NLP'"]), correctAnswer: "'J'aide les restaurants à automatiser leurs réservations et leur support client avec des chatbots IA — mes clients gagnent 3h par jour'", explanation: "Ce pitch est parfait : il cible directement le restaurateur (pour qui), mentionne son problème (réservations, support), la solution (chatbot IA) et un résultat chiffré (3h/jour). L'interlocuteur se sent concerné et veut en savoir plus." },
    ],
  },
];
