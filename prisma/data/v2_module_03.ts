// ═══════════════════════════════════════════════════
// MODULE 3 — Apprendre à prompter
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_03_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 3,
    title: "Les bases du prompting : structure, contexte, rôle",
    slug: "v2-bases-prompting-structure-contexte-role",
    duration: "25 min",
    description: "Apprends les 3 piliers d'un bon prompt : la structure claire, le contexte riche, et l'attribution d'un rôle. La compétence fondamentale de tout prestataire IA.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le prompting : la compétence la plus importante" },
      { id: "1-2", type: "text", html: "<p>Un prompt, c'est l'instruction que tu donnes à l'IA. La différence entre un résultat médiocre et un résultat exceptionnel tient presque toujours à la <strong>qualité du prompt</strong>. C'est la compétence qui sépare l'amateur du professionnel. Un bon prompteur obtient en 1 essai ce qu'un mauvais prompteur n'obtient jamais, même après 20 tentatives.</p><p>Le prompting repose sur 3 piliers fondamentaux : la <strong>structure</strong>, le <strong>contexte</strong> et le <strong>rôle</strong>. Maîtrise ces 3 éléments et tu auras une longueur d'avance sur 95% des utilisateurs d'IA.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Erreur n°1 des débutants :</strong> Écrire des prompts vagues comme \"fais-moi un site web\" ou \"écris un email\". L'IA n'est pas un devin. Plus ton prompt est précis et structuré, meilleur sera le résultat. Prompt vague = résultat vague." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Pilier 1 : La structure du prompt" },
      { id: "1-6", type: "text", html: "<p>Un prompt structuré utilise des sections claires, séparées par des titres ou des marqueurs. L'IA comprend mieux quand l'information est organisée. Voici la structure de base que tu utiliseras pour la majorité de tes prompts professionnels :</p>" },
      { id: "1-7", type: "steps", steps: [
        { title: "Objectif", description: "Dis exactement ce que tu veux obtenir. Sois spécifique : \"Rédige un email de relance de 150 mots\" est meilleur que \"Écris un email\"." },
        { title: "Contexte", description: "Donne les informations nécessaires : pour qui, dans quel secteur, quel ton, quelles contraintes." },
        { title: "Format de sortie", description: "Précise le format attendu : liste à puces, tableau, code, paragraphes, nombre de mots, langue." },
        { title: "Contraintes", description: "Indique ce qu'il faut éviter ou respecter : \"pas de jargon technique\", \"maximum 200 mots\", \"ton professionnel mais chaleureux\"." },
        { title: "Exemples (optionnel)", description: "Si tu as un exemple du résultat souhaité, inclus-le. C'est le moyen le plus efficace de guider l'IA." }
      ]},
      { id: "1-8", type: "separator", style: "line" },
      { id: "1-9", type: "heading", level: 2, text: "Pilier 2 : Le contexte" },
      { id: "1-10", type: "text", html: "<p>Le contexte, c'est tout ce que l'IA a besoin de savoir pour bien répondre. Plus tu fournis de contexte pertinent, plus le résultat sera précis et adapté. Imagine que tu briefs un collaborateur qui ne connaît rien à ton projet : qu'est-ce que tu lui dirais ?</p>" },
      { id: "1-11", type: "comparison", headers: ["Prompt sans contexte", "Prompt avec contexte"], rows: [
        { cells: ["\"Écris un email de relance\"", "\"Écris un email de relance pour un prospect B2B (directeur marketing d'une PME de 50 personnes) qui n'a pas répondu à notre proposition de chatbot IA envoyée il y a 5 jours. Ton professionnel mais direct. 150 mots max.\""] },
        { cells: ["\"Crée un chatbot\"", "\"Crée le prompt système pour un chatbot IA destiné à un cabinet dentaire. Il doit répondre aux questions sur les services (détartrage, implants, orthodontie), les horaires (lundi-vendredi 9h-18h), et orienter vers la prise de RDV Doctolib.\""] },
        { cells: ["\"Fais-moi un site\"", "\"Génère le code HTML/CSS d'une landing page pour un photographe de mariage. Style : élégant, épuré, palette blanc et doré. Sections : hero avec CTA, portfolio (grille 3 colonnes), témoignages, formulaire de contact. Mobile-first.\""] }
      ]},
      { id: "1-12", type: "heading", level: 2, text: "Pilier 3 : Le rôle" },
      { id: "1-13", type: "text", html: "<p>Attribuer un rôle à l'IA change radicalement la qualité des réponses. Quand tu dis \"Tu es un expert en copywriting avec 15 ans d'expérience\", l'IA adopte le vocabulaire, le niveau de détail et la perspective d'un expert. C'est un levier puissant et sous-estimé.</p>" },
      { id: "1-14", type: "callout", variant: "tip", html: "<strong>Formule magique du rôle :</strong> \"Tu es un(e) [métier] expert(e) en [domaine spécifique] avec [X ans d'expérience]. Tu travailles pour [type de client]. Ton style est [adjectifs].\" Cette formule simple transforme la qualité des réponses." },
      { id: "1-15", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Un bon prompt = structure claire + contexte riche + rôle défini" },
        { id: "c2", text: "La structure suit 5 éléments : objectif, contexte, format, contraintes, exemples" },
        { id: "c3", text: "Plus le contexte est précis, meilleur est le résultat — prompt vague = résultat vague" },
        { id: "c4", text: "Attribuer un rôle change radicalement la qualité et le niveau des réponses" },
        { id: "c5", text: "Un prompt professionnel de 5 lignes bat un prompt vague de 1 ligne" }
      ]}
    ]),
    exercise: "<h3>Exercice : Transforme des prompts médiocres en prompts professionnels</h3><p>Reprends ces 5 prompts médiocres et réécris-les en appliquant les 3 piliers (structure, contexte, rôle) :</p><ol><li>\"Écris-moi une bio Instagram\"</li><li>\"Fais un business plan\"</li><li>\"Crée une newsletter\"</li><li>\"Analyse ce marché\"</li><li>\"Rédige une offre commerciale\"</li></ol><p>Pour chaque prompt réécrit, identifie : le rôle attribué, le contexte ajouté, le format de sortie demandé, et les contraintes définies. Teste tes prompts améliorés sur Claude et compare les résultats avec les prompts originaux.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 piliers d'un bon prompt ?", options: JSON.stringify(["Longueur, complexité, jargon technique", "Structure, contexte, rôle", "Vitesse, clarté, brièveté", "Format, langue, ton"]), correctAnswer: "Structure, contexte, rôle", explanation: "Les 3 piliers fondamentaux du prompting sont : la structure (organisation claire), le contexte (informations nécessaires), et le rôle (expertise attribuée à l'IA)." },
      { type: "true_false", question: "Un prompt court d'une ligne est toujours préférable à un prompt détaillé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, un prompt détaillé de 5 lignes avec structure, contexte et rôle donnera presque toujours un meilleur résultat qu'un prompt vague d'une ligne." },
      { type: "mcq", question: "Quel est l'ordre recommandé pour structurer un prompt ?", options: JSON.stringify(["Format, contraintes, objectif", "Objectif, contexte, format de sortie, contraintes, exemples", "Rôle, exemples, format", "Contraintes, objectif, rôle"]), correctAnswer: "Objectif, contexte, format de sortie, contraintes, exemples", explanation: "La structure recommandée est : objectif (ce que tu veux), contexte (les informations clés), format de sortie (la forme attendue), contraintes (ce qu'il faut éviter/respecter), et exemples (optionnel)." },
      { type: "mcq", question: "Pourquoi attribuer un rôle à l'IA améliore-t-il les résultats ?", options: JSON.stringify(["Ça ne change rien en réalité", "L'IA adopte le vocabulaire et le niveau d'expertise du rôle attribué", "L'IA travaille plus vite avec un rôle", "Le rôle débloque des fonctionnalités cachées"]), correctAnswer: "L'IA adopte le vocabulaire et le niveau d'expertise du rôle attribué", explanation: "Quand tu attribues un rôle, l'IA ajuste son vocabulaire, son niveau de détail et sa perspective pour correspondre à ce rôle. Un expert répond différemment d'un généraliste." },
      { type: "true_false", question: "Fournir un exemple du résultat souhaité est le moyen le plus efficace de guider l'IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, les exemples sont le moyen le plus direct de montrer à l'IA exactement ce que tu attends. C'est le 5e élément (optionnel) de la structure de prompt." },
      { type: "mcq", question: "Quelle formule est recommandée pour définir un rôle ?", options: JSON.stringify(["\"Sois intelligent\"", "\"Tu es un(e) [métier] expert(e) en [domaine] avec [X ans d'expérience]\"", "\"Réponds bien\"", "\"Mode expert activé\""]), correctAnswer: "\"Tu es un(e) [métier] expert(e) en [domaine] avec [X ans d'expérience]\"", explanation: "Cette formule combine le métier, le domaine de spécialisation et l'expérience pour cadrer précisément le niveau de réponse attendu." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 3,
    title: "Les techniques avancées pour des réponses précises",
    slug: "v2-techniques-avancees-prompting",
    duration: "25 min",
    description: "Maîtrise les techniques avancées de prompting : chain-of-thought, few-shot, tree-of-thought, meta-prompting, et itération. Passe au niveau supérieur.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Au-delà des bases : les techniques qui font la différence" },
      { id: "2-2", type: "text", html: "<p>Tu maîtrises maintenant les 3 piliers du prompting. Mais pour obtenir des résultats vraiment professionnels — ceux que tes clients payeront cher — il faut aller plus loin. Les techniques avancées de prompting transforment l'IA d'un simple assistant en un véritable collaborateur capable de raisonnements complexes.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Important :</strong> Ces techniques ne remplacent pas les bases. Elles s'y ajoutent. Un prompt avancé combine toujours structure + contexte + rôle + une ou plusieurs techniques avancées." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Technique 1 : Chain-of-Thought (raisonnement étape par étape)" },
      { id: "2-6", type: "text", html: "<p>Le Chain-of-Thought (CoT) consiste à demander à l'IA de <strong>raisonner étape par étape</strong> avant de donner sa réponse finale. Au lieu de sauter directement à la conclusion, l'IA décompose son raisonnement. Ça réduit les erreurs et augmente la qualité sur les tâches complexes.</p><p>Comment l'activer : ajoute simplement \"Raisonne étape par étape\" ou \"Explique ton raisonnement avant de conclure\" à la fin de ton prompt.</p>" },
      { id: "2-7", type: "comparison", headers: ["Sans Chain-of-Thought", "Avec Chain-of-Thought"], rows: [
        { cells: ["\"Quel prix fixer pour un chatbot IA ?\"", "\"Quel prix fixer pour un chatbot IA ? Raisonne étape par étape en considérant : le temps de développement, le coût des API, la valeur pour le client, et le positionnement marché.\""] },
        { cells: ["Réponse vague : \"entre 500 et 5000 euros\"", "Réponse détaillée avec un raisonnement structuré et une recommandation argumentée"] }
      ]},
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Technique 2 : Few-Shot (apprentissage par l'exemple)" },
      { id: "2-10", type: "text", html: "<p>Le few-shot consiste à donner <strong>2 à 3 exemples</strong> du résultat attendu avant de poser ta vraie question. L'IA comprend le pattern et le reproduit. C'est la technique la plus puissante pour obtenir un format ou un style très spécifique.</p>" },
      { id: "2-11", type: "steps", steps: [
        { title: "Donne 2-3 exemples", description: "Montre à l'IA des paires input/output qui illustrent exactement ce que tu veux. Plus les exemples sont représentatifs, meilleur sera le résultat." },
        { title: "Garde une structure cohérente", description: "Les exemples doivent suivre exactement le même format. Si tu veux un tableau, donne des exemples de tableaux. Si tu veux des bullet points, donne des exemples de bullet points." },
        { title: "Pose ta vraie question", description: "Après les exemples, donne l'input réel et l'IA produira un output qui suit le même pattern." }
      ]},
      { id: "2-12", type: "heading", level: 2, text: "Technique 3 : Le meta-prompting (le prompt qui crée des prompts)" },
      { id: "2-13", type: "text", html: "<p>Le meta-prompting, c'est utiliser l'IA pour <strong>améliorer tes propres prompts</strong>. Au lieu d'écrire directement ton prompt final, tu demandes à l'IA de t'aider à le structurer. C'est un gain de temps énorme et ça donne des prompts de bien meilleure qualité.</p><p>Exemple : \"Je veux obtenir [résultat]. Écris le prompt optimal que je devrais utiliser pour obtenir ce résultat. Inclus le rôle, le contexte, le format de sortie et les contraintes.\"</p>" },
      { id: "2-14", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Utilise le meta-prompting quand tu bloques sur un prompt. Dis à Claude : \"Mon prompt actuel est [ton prompt]. Le résultat n'est pas satisfaisant parce que [problème]. Améliore ce prompt.\" Claude va identifier les faiblesses et proposer une version optimisée." },
      { id: "2-15", type: "heading", level: 2, text: "Technique 4 : L'itération systématique" },
      { id: "2-16", type: "comparison", headers: ["Itération", "Action"], rows: [
        { cells: ["1er prompt", "Tu envoies ton prompt initial bien structuré"] },
        { cells: ["Analyse du résultat", "Tu identifies ce qui manque ou ce qui est incorrect"] },
        { cells: ["Feedback précis", "Tu donnes un retour spécifique : \"Le ton est trop formel, rends-le plus conversationnel\" ou \"Ajoute des chiffres concrets dans la section 3\""] },
        { cells: ["2e itération", "L'IA corrige en tenant compte de tes retours"] },
        { cells: ["Raffinement final", "Tu ajustes les derniers détails pour obtenir le résultat parfait"] }
      ]},
      { id: "2-17", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Chain-of-Thought : demander à l'IA de raisonner étape par étape réduit les erreurs" },
        { id: "c2", text: "Few-Shot : 2-3 exemples suffisent pour guider l'IA vers le format exact souhaité" },
        { id: "c3", text: "Meta-prompting : utiliser l'IA pour améliorer tes propres prompts" },
        { id: "c4", text: "L'itération est normale et nécessaire — le premier résultat n'est jamais le dernier" },
        { id: "c5", text: "Combiner les techniques entre elles donne les meilleurs résultats" }
      ]}
    ]),
    exercise: "<h3>Exercice : Applique chaque technique avancée</h3><p>Pratique chaque technique sur Claude :</p><ol><li><strong>Chain-of-Thought :</strong> Demande à Claude d'analyser si tu devrais proposer un abonnement mensuel ou un prix unique pour tes services de chatbot. Ajoute \"Raisonne étape par étape.\" Compare avec le même prompt sans cette instruction.</li><li><strong>Few-Shot :</strong> Crée un prompt avec 2 exemples de descriptions de service IA (format : titre accrocheur, 2 phrases de description, 3 bullet points de bénéfices, prix). Puis demande une 3e description pour un nouveau service.</li><li><strong>Meta-prompting :</strong> Prends un prompt que tu as écrit dans un exercice précédent et demande à Claude de l'améliorer en expliquant pourquoi chaque modification est meilleure.</li><li><strong>Itération :</strong> Demande à Claude de rédiger une page \"À propos\" pour ton activité de prestataire IA. Puis itère 3 fois avec des feedbacks précis.</li></ol>",
    quiz: [
      { type: "mcq", question: "En quoi consiste la technique Chain-of-Thought ?", options: JSON.stringify(["Écrire un très long prompt", "Demander à l'IA de raisonner étape par étape avant de conclure", "Donner des exemples à l'IA", "Utiliser plusieurs IA en chaîne"]), correctAnswer: "Demander à l'IA de raisonner étape par étape avant de conclure", explanation: "Le Chain-of-Thought consiste à demander à l'IA de décomposer son raisonnement en étapes avant de donner sa réponse finale. Ça réduit les erreurs sur les tâches complexes." },
      { type: "true_false", question: "Le few-shot nécessite au moins 10 exemples pour être efficace.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, 2 à 3 exemples suffisent généralement pour que l'IA comprenne le pattern et le reproduise. C'est pour ça qu'on parle de \"few-shot\" (peu d'exemples)." },
      { type: "mcq", question: "Qu'est-ce que le meta-prompting ?", options: JSON.stringify(["Écrire des prompts très longs", "Utiliser l'IA pour améliorer ses propres prompts", "Coder un système de prompts automatique", "Traduire des prompts dans plusieurs langues"]), correctAnswer: "Utiliser l'IA pour améliorer ses propres prompts", explanation: "Le meta-prompting consiste à demander à l'IA d'analyser et d'améliorer tes prompts. C'est un gain de temps énorme et ça produit des prompts de meilleure qualité." },
      { type: "true_false", question: "Un professionnel obtient toujours le résultat parfait au premier prompt, sans itération.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'itération est normale et nécessaire. Même les meilleurs prompteurs itèrent 2-3 fois avec des feedbacks précis pour obtenir le résultat optimal." },
      { type: "mcq", question: "Quel est l'avantage principal du Chain-of-Thought sur les tâches complexes ?", options: JSON.stringify(["L'IA répond plus vite", "Ça réduit les erreurs de raisonnement", "Ça coûte moins de tokens", "Ça génère des réponses plus courtes"]), correctAnswer: "Ça réduit les erreurs de raisonnement", explanation: "En décomposant le raisonnement en étapes, l'IA est moins susceptible de faire des erreurs logiques. Chaque étape est vérifiable et le résultat final est plus fiable." },
      { type: "mcq", question: "Comment donner un feedback efficace lors de l'itération ?", options: JSON.stringify(["\"C'est nul, recommence\"", "\"Améliore\"", "\"Le ton est trop formel dans le paragraphe 2, rends-le plus conversationnel\"", "\"Fais mieux\""]), correctAnswer: "\"Le ton est trop formel dans le paragraphe 2, rends-le plus conversationnel\"", explanation: "Un feedback efficace est spécifique : il identifie exactement ce qui ne va pas et donne une direction claire pour la correction. Les feedbacks vagues donnent des corrections vagues." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 3,
    title: "Atelier : écrire des prompts business (emails, offres, contenus)",
    slug: "v2-atelier-prompts-business",
    duration: "30 min",
    description: "Atelier pratique : tu crées des prompts professionnels pour les cas d'usage business les plus courants — emails commerciaux, propositions, contenus marketing, et analyses.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Atelier : les prompts business qui rapportent" },
      { id: "3-2", type: "text", html: "<p>Cet atelier est 100% pratique. Tu vas créer des <strong>prompts templates</strong> que tu réutiliseras dans ton activité de prestataire IA. Chaque template est un outil que tu pourras adapter à chaque client. À la fin de cet atelier, tu auras une bibliothèque de prompts prêts à l'emploi.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Objectif :</strong> Tu repars avec 5 prompts templates testés et validés que tu pourras utiliser dès demain pour toi ou pour tes clients." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Template 1 : Email de prospection à froid" },
      { id: "3-6", type: "text", html: "<p>L'email de prospection est le premier outil de ton arsenal commercial. Un bon prompt génère un email qui ne finit pas à la poubelle. Les éléments clés : une accroche personnalisée, une proposition de valeur claire, et un appel à l'action simple.</p>" },
      { id: "3-7", type: "steps", steps: [
        { title: "Le rôle", description: "\"Tu es un expert en copywriting B2B spécialisé dans les emails de prospection. Tu écris des emails qui obtiennent un taux d'ouverture de 40%+ et un taux de réponse de 10%+.\"" },
        { title: "Le contexte", description: "Décris ton service, ta cible (secteur, taille d'entreprise, poste du décideur), et le problème que tu résous." },
        { title: "Les contraintes", description: "Maximum 150 mots, pas de jargon IA intimidant, un seul CTA clair (appel de 15 min), objet d'email inclus." },
        { title: "L'itération", description: "Demande 3 versions différentes (directe, storytelling, chiffrée) et choisis la meilleure." }
      ]},
      { id: "3-8", type: "separator", style: "line" },
      { id: "3-9", type: "heading", level: 2, text: "Template 2 : Proposition commerciale structurée" },
      { id: "3-10", type: "comparison", headers: ["Section de la proposition", "Ce que le prompt doit générer"], rows: [
        { cells: ["Résumé exécutif", "2-3 phrases qui captent l'attention du décideur et résument la valeur"] },
        { cells: ["Diagnostic du problème", "Reformulation du problème du client avec des chiffres concrets"] },
        { cells: ["Solution proposée", "Description claire de ce que tu vas livrer, avec les technologies utilisées"] },
        { cells: ["Livrables et planning", "Liste précise de ce que le client reçoit, avec des dates"] },
        { cells: ["Investissement", "Prix détaillé avec options, pas un simple total"] },
        { cells: ["Garanties", "Ce que tu garantis (délai, résultat, support)"] }
      ]},
      { id: "3-11", type: "heading", level: 2, text: "Template 3 : Contenu marketing pour réseaux sociaux" },
      { id: "3-12", type: "text", html: "<p>Créer du contenu pour les réseaux sociaux de tes clients est un service récurrent très rentable. Le prompt doit inclure : la plateforme cible (LinkedIn, Instagram, Facebook), le ton de la marque, l'objectif du post (notoriété, engagement, conversion), et des exemples de posts précédents si disponibles.</p>" },
      { id: "3-13", type: "callout", variant: "tip", html: "<strong>Astuce monétisation :</strong> Un pack \"30 posts par mois\" se vend entre 300 et 800 euros. Avec les bons prompts, tu les génères en 1 à 2 heures. C'est un des services les plus rentables en termes de ratio temps/argent." },
      { id: "3-14", type: "heading", level: 2, text: "Template 4 : Analyse de marché pour un client" },
      { id: "3-15", type: "text", html: "<p>Quand un client te demande d'analyser son marché ou sa concurrence, tu as besoin d'un prompt structuré qui couvre : les tendances du secteur, les principaux concurrents, les opportunités identifiées, et des recommandations actionnables. Utilise le Chain-of-Thought pour obtenir une analyse plus profonde.</p>" },
      { id: "3-16", type: "checklist", title: "Templates créés dans cet atelier", items: [
        { id: "c1", text: "Template email de prospection (3 versions : directe, storytelling, chiffrée)" },
        { id: "c2", text: "Template proposition commerciale (6 sections structurées)" },
        { id: "c3", text: "Template contenu réseaux sociaux (adapté par plateforme)" },
        { id: "c4", text: "Template analyse de marché (avec recommandations actionnables)" },
        { id: "c5", text: "Tous les templates sont sauvegardés dans mon journal de formation" }
      ]}
    ]),
    exercise: "<h3>Exercice : Construis ta bibliothèque de prompts business</h3><p>Crée et teste les 4 templates sur Claude :</p><ol><li><strong>Email de prospection :</strong> Utilise le template pour générer un email destiné à un propriétaire de restaurant. Génère 3 versions et choisis la meilleure.</li><li><strong>Proposition commerciale :</strong> Génère une proposition complète pour un chatbot IA destiné à un cabinet dentaire (budget estimé 1500 euros).</li><li><strong>Posts réseaux sociaux :</strong> Génère 5 posts LinkedIn pour un prestataire IA (toi !) qui veut montrer son expertise. Chaque post doit avoir un angle différent.</li><li><strong>Analyse de marché :</strong> Demande une analyse du marché des chatbots IA pour les PME en France, avec recommandations de positionnement.</li><li>Sauvegarde chaque prompt template (pas juste le résultat, mais le prompt lui-même) dans ton journal de formation.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la longueur recommandée pour un email de prospection à froid ?", options: JSON.stringify(["500 mots minimum", "Maximum 150 mots", "1 page complète", "Pas de limite"]), correctAnswer: "Maximum 150 mots", explanation: "Un email de prospection efficace fait maximum 150 mots. Les emails courts ont un meilleur taux de lecture et de réponse. Le décideur doit comprendre ta proposition en 30 secondes." },
      { type: "true_false", question: "Un pack de 30 posts par mois pour les réseaux sociaux peut se vendre entre 300 et 800 euros.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, la création de contenu récurrent est un service très rentable. Avec les bons prompts, tu génères 30 posts en 1-2 heures, pour un tarif de 300 à 800 euros par mois." },
      { type: "mcq", question: "Combien de sections doit comporter une proposition commerciale structurée ?", options: JSON.stringify(["2 sections : prix et description", "6 sections : résumé, diagnostic, solution, livrables, investissement, garanties", "1 seul paragraphe suffit", "10 sections minimum"]), correctAnswer: "6 sections : résumé, diagnostic, solution, livrables, investissement, garanties", explanation: "Une proposition commerciale professionnelle comporte 6 sections : résumé exécutif, diagnostic du problème, solution proposée, livrables et planning, investissement, et garanties." },
      { type: "mcq", question: "Pourquoi générer 3 versions d'un email de prospection ?", options: JSON.stringify(["Pour impressionner le client", "Pour avoir des angles différents et choisir le plus adapté", "Parce que l'IA ne sait pas écrire du premier coup", "Pour tester les limites de l'IA"]), correctAnswer: "Pour avoir des angles différents et choisir le plus adapté", explanation: "Générer plusieurs versions (directe, storytelling, chiffrée) te donne des angles différents. Tu peux choisir le plus adapté à ton prospect ou tester les différentes versions." },
      { type: "true_false", question: "Il faut sauvegarder les prompts templates, pas seulement les résultats qu'ils produisent.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le prompt template est ton outil réutilisable. Le résultat change à chaque client, mais le template reste. Construire une bibliothèque de prompts, c'est construire ta boîte à outils professionnelle." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 3,
    title: "Atelier : écrire des prompts code (générer, debug, refactor)",
    slug: "v2-atelier-prompts-code",
    duration: "30 min",
    description: "Atelier pratique : tu apprends à écrire des prompts efficaces pour générer du code, débugger des erreurs, et refactorer du code existant avec l'IA.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Prompter pour du code : une discipline à part" },
      { id: "4-2", type: "text", html: "<p>Écrire des prompts pour du code est différent de l'écriture de prompts business. Le code est binaire : ça marche ou ça ne marche pas. Il n'y a pas de place pour l'approximation. Les prompts code doivent être <strong>extrêmement précis</strong> sur le langage, le framework, le style de code, et le comportement attendu.</p><p>Dans cet atelier, tu vas maîtriser 3 types de prompts code : la <strong>génération</strong> (créer du code from scratch), le <strong>debug</strong> (trouver et corriger les erreurs), et le <strong>refactoring</strong> (améliorer du code existant).</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Règle d'or du code IA :</strong> Ne fais jamais confiance au code généré sans le tester. Même Claude peut produire du code qui semble correct mais qui contient des bugs subtils. Teste toujours, vérifie toujours." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Prompts de génération : créer du code from scratch" },
      { id: "4-6", type: "steps", steps: [
        { title: "Spécifie le langage et le framework", description: "\"En TypeScript avec React 18 et Next.js 14\" est 10x mieux que \"en JavaScript\". Sois le plus précis possible sur la stack technique." },
        { title: "Décris le comportement attendu", description: "Pas juste l'interface, mais le comportement : \"Quand l'utilisateur clique sur Envoyer, le formulaire valide les champs, affiche un spinner, envoie une requête POST à /api/contact, et affiche un message de succès.\"" },
        { title: "Précise les contraintes techniques", description: "Gestion d'erreurs, types TypeScript, responsive, accessibilité, performance. Chaque contrainte oubliée est un bug potentiel." },
        { title: "Demande les fichiers nécessaires", description: "\"Génère aussi le fichier de types, les tests unitaires, et le fichier CSS\" — sinon l'IA ne génère que le composant principal." }
      ]},
      { id: "4-7", type: "separator", style: "line" },
      { id: "4-8", type: "heading", level: 2, text: "Prompts de debug : trouver et corriger les erreurs" },
      { id: "4-9", type: "text", html: "<p>Le debug avec l'IA est un superpouvoir. Au lieu de passer 2 heures sur Stack Overflow, tu peux résoudre la plupart des bugs en quelques minutes. Mais le prompt de debug doit être structuré différemment d'un prompt de génération.</p>" },
      { id: "4-10", type: "comparison", headers: ["Prompt de debug médiocre", "Prompt de debug efficace"], rows: [
        { cells: ["\"Mon code ne marche pas, aide-moi\"", "\"J'ai cette erreur : [copier l'erreur exacte]. Voici mon code : [copier le code]. Le comportement attendu est [description]. Le comportement actuel est [description]. Stack : React 18, TypeScript, Next.js 14.\""] },
        { cells: ["\"Il y a un bug quelque part\"", "\"L'API retourne un 200 mais le state React ne se met pas à jour. Voici le composant et le hook useQuery. La réponse API est correcte (vérifiée dans les DevTools).\""] }
      ]},
      { id: "4-11", type: "heading", level: 2, text: "Prompts de refactoring : améliorer le code existant" },
      { id: "4-12", type: "steps", steps: [
        { title: "Fournis le code actuel", description: "Colle le code complet que tu veux refactorer. L'IA a besoin de voir tout le contexte pour proposer des améliorations cohérentes." },
        { title: "Précise les objectifs du refactoring", description: "\"Améliore la lisibilité\", \"Réduis la duplication\", \"Ajoute du TypeScript strict\", \"Optimise les performances\" — dis exactement ce que tu veux améliorer." },
        { title: "Demande les explications", description: "Ajoute \"Explique chaque changement et pourquoi il améliore le code\". Tu apprends en même temps." },
        { title: "Garde la compatibilité", description: "Précise \"Ne change pas le comportement externe, seulement la structure interne\" pour éviter les régressions." }
      ]},
      { id: "4-13", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Quand tu débugges, donne à l'IA le message d'erreur EXACT (copié-collé), pas une reformulation. Les messages d'erreur contiennent des informations précises que l'IA utilise pour diagnostiquer le problème." },
      { id: "4-14", type: "heading", level: 2, text: "Les patterns de prompts code à retenir" },
      { id: "4-15", type: "comparison", headers: ["Pattern", "Quand l'utiliser"], rows: [
        { cells: ["\"Génère [composant] en [langage/framework] qui [comportement]\"", "Création de code from scratch"] },
        { cells: ["\"Voici l'erreur [erreur] dans ce code [code]. Comportement attendu : [X]. Comportement actuel : [Y]\"", "Debug d'une erreur"] },
        { cells: ["\"Refactore ce code pour [objectif]. Explique chaque changement.\"", "Amélioration de code existant"] },
        { cells: ["\"Ajoute des tests unitaires pour [code] couvrant les cas : [liste]\"", "Création de tests"] },
        { cells: ["\"Optimise les performances de [code] en ciblant [métrique]\"", "Optimisation"] }
      ]},
      { id: "4-16", type: "checklist", title: "Ce que tu retiens de cet atelier", items: [
        { id: "c1", text: "Les prompts code exigent une précision extrême : langage, framework, version, comportement" },
        { id: "c2", text: "Pour le debug : toujours fournir l'erreur exacte, le code, et les comportements attendu vs actuel" },
        { id: "c3", text: "Pour le refactoring : préciser les objectifs et demander des explications" },
        { id: "c4", text: "Ne jamais faire confiance au code généré sans le tester" },
        { id: "c5", text: "Les patterns de prompts code sont des outils réutilisables à sauvegarder" }
      ]}
    ]),
    exercise: "<h3>Exercice : Crée et teste des prompts code sur Claude</h3><p>Pratique les 3 types de prompts code :</p><ol><li><strong>Génération :</strong> Demande à Claude de générer un composant React TypeScript pour une carte de pricing (3 niveaux : Starter, Pro, Enterprise) avec un bouton CTA, un badge \"populaire\" sur le plan Pro, et un design responsive. Teste le code dans un projet React ou un sandbox en ligne.</li><li><strong>Debug :</strong> Copie ce code volontairement bugué et demande à Claude de le corriger : <code>const data = await fetch('/api/users'); const users = data.json(); console.log(users.map(u => u.name));</code> (indice : il manque un await et la gestion d'erreur).</li><li><strong>Refactoring :</strong> Prends un code JavaScript simple que tu as déjà écrit (ou demande à Claude d'en générer un volontairement \"sale\") et demande-lui de le refactorer en TypeScript strict avec des explications.</li><li>Sauvegarde tes 3 prompts templates dans ton journal.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la première chose à préciser dans un prompt de génération de code ?", options: JSON.stringify(["La couleur du design", "Le langage, le framework et la version", "Le nom du fichier", "Le nombre de lignes souhaité"]), correctAnswer: "Le langage, le framework et la version", explanation: "Le langage, le framework et la version sont la base de tout prompt de code. \"En TypeScript avec React 18\" est bien plus précis que \"en JavaScript\"." },
      { type: "true_false", question: "Il est sûr d'utiliser du code généré par l'IA directement en production sans le tester.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Même le code qui semble correct peut contenir des bugs subtils. Il faut toujours tester le code généré avant de l'utiliser." },
      { type: "mcq", question: "Que doit contenir un prompt de debug efficace ?", options: JSON.stringify(["Juste le message d'erreur", "L'erreur exacte, le code, le comportement attendu et le comportement actuel", "Seulement le code complet", "Un lien vers Stack Overflow"]), correctAnswer: "L'erreur exacte, le code, le comportement attendu et le comportement actuel", explanation: "Un prompt de debug efficace fournit 4 éléments : l'erreur exacte (copié-collé), le code concerné, le comportement attendu, et le comportement actuel." },
      { type: "true_false", question: "Lors d'un refactoring avec l'IA, il est utile de demander des explications pour chaque changement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, demander des explications te permet d'apprendre et de vérifier que les changements sont pertinents. C'est un double bénéfice : code amélioré + apprentissage." },
      { type: "mcq", question: "Quel pattern de prompt utiliser pour corriger une erreur ?", options: JSON.stringify(["\"Génère un composant qui...\"", "\"Voici l'erreur [X] dans ce code [Y]. Comportement attendu : [A]. Comportement actuel : [B]\"", "\"Refactore pour améliorer...\"", "\"Mon code ne marche pas\""]), correctAnswer: "\"Voici l'erreur [X] dans ce code [Y]. Comportement attendu : [A]. Comportement actuel : [B]\"", explanation: "Ce pattern fournit toutes les informations nécessaires pour un diagnostic précis : l'erreur, le code, et la différence entre ce qui est attendu et ce qui se passe." },
      { type: "mcq", question: "Pourquoi faut-il copier-coller le message d'erreur exact plutôt que le reformuler ?", options: JSON.stringify(["Par paresse", "Les messages d'erreur contiennent des informations techniques précises que l'IA utilise", "Parce que l'IA ne comprend pas le français", "C'est une convention"]), correctAnswer: "Les messages d'erreur contiennent des informations techniques précises que l'IA utilise", explanation: "Les messages d'erreur contiennent des informations précises (numéro de ligne, type d'erreur, stack trace) que l'IA utilise pour diagnostiquer le problème. Une reformulation perd ces détails." }
    ],
  },
];
