// ═══════════════════════════════════════════════════
// MODULE 3 — Apprendre a prompter
// 4 lecons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_03_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 3,
    title: "Les bases du prompting : structure, contexte, role",
    slug: "v2-bases-prompting-structure-contexte-role",
    duration: "25 min",
    description: "Apprends les 3 piliers d'un bon prompt : la structure claire, le contexte riche, et l'attribution d'un role. La competence fondamentale de tout prestataire IA.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le prompting : la competence la plus importante" },
      { id: "1-2", type: "text", html: "<p>Un prompt, c'est l'instruction que tu donnes a l'IA. La difference entre un resultat mediocre et un resultat exceptionnel tient presque toujours a la <strong>qualite du prompt</strong>. C'est la competence qui separe l'amateur du professionnel. Un bon prompteur obtient en 1 essai ce qu'un mauvais prompteur n'obtient jamais, meme apres 20 tentatives.</p><p>Le prompting repose sur 3 piliers fondamentaux : la <strong>structure</strong>, le <strong>contexte</strong> et le <strong>role</strong>. Maitrise ces 3 elements et tu auras une longueur d'avance sur 95% des utilisateurs d'IA.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Erreur n1 des debutants :</strong> Ecrire des prompts vagues comme \"fais-moi un site web\" ou \"ecris un email\". L'IA n'est pas un devin. Plus ton prompt est precis et structure, meilleur sera le resultat. Prompt vague = resultat vague." },
      { id: "1-20", type: "heading", level: 3, text: "Pourquoi le prompting est une competence monetisable" },
      { id: "1-21", type: "text", html: "<p>Le prompting n'est pas juste un truc technique. C'est une <strong>competence business</strong> a part entiere. Voici pourquoi :</p><ul><li><strong>Tu peux vendre du prompting pur :</strong> Des entreprises paient 500-2 000€ pour des systemes de prompts optimises (prompt systeme de chatbot, templates d'emails, workflows de generation de contenu)</li><li><strong>Ca te rend 10x plus rapide :</strong> Un bon prompteur cree un chatbot en 1h la ou un mauvais prompteur galere pendant 2 jours</li><li><strong>Ca te differencie :</strong> N'importe qui peut taper un prompt dans ChatGPT. Tres peu de gens savent ecrire des prompts professionnels qui produisent des resultats consistants</li></ul><p>En tant que prestataire IA, la qualite de tes prompts est directement correlee a la qualite de tes livrables et a la satisfaction de tes clients.</p>" },
      { id: "1-22", type: "callout", variant: "info", html: "<strong>Anecdote :</strong> Un prestataire IA a facture 1 500€ uniquement pour creer le prompt systeme d'un chatbot SAV pour un e-commerce. Le prompt faisait 200 lignes, gerait 40+ scenarios differents, et a reduit les demandes de support humain de 60%. Le client etait ravi. Ca, c'est la valeur du prompting." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Pilier 1 : La structure du prompt" },
      { id: "1-6", type: "text", html: "<p>Un prompt structure utilise des sections claires, separees par des titres ou des marqueurs. L'IA comprend mieux quand l'information est organisee. Voici la structure de base que tu utiliseras pour la majorite de tes prompts professionnels :</p>" },
      { id: "1-7", type: "steps", steps: [
        { title: "Objectif", description: "Dis exactement ce que tu veux obtenir. Sois specifique : \"Redige un email de relance de 150 mots\" est meilleur que \"Ecris un email\"." },
        { title: "Contexte", description: "Donne les informations necessaires : pour qui, dans quel secteur, quel ton, quelles contraintes." },
        { title: "Format de sortie", description: "Precise le format attendu : liste a puces, tableau, code, paragraphes, nombre de mots, langue." },
        { title: "Contraintes", description: "Indique ce qu'il faut eviter ou respecter : \"pas de jargon technique\", \"maximum 200 mots\", \"ton professionnel mais chaleureux\"." },
        { title: "Exemples (optionnel)", description: "Si tu as un exemple du resultat souhaite, inclus-le. C'est le moyen le plus efficace de guider l'IA." }
      ]},
      { id: "1-23", type: "heading", level: 3, text: "Un exemple complet de prompt structure" },
      { id: "1-24", type: "text", html: "<p>Voici un prompt qui applique parfaitement la structure en 5 parties :</p><p><em><strong>Objectif :</strong> Redige une description de service pour mon site de prestataire IA.</em></p><p><em><strong>Contexte :</strong> Je suis un prestataire IA freelance qui cree des chatbots et des automatisations pour les PME. Ma cible : des TPE/PME de 5 a 50 employes dans le secteur de la sante et du bien-etre.</em></p><p><em><strong>Format :</strong> Un titre accrocheur (max 10 mots), un paragraphe de description (80-100 mots), puis 4 bullet points de benefices.</em></p><p><em><strong>Contraintes :</strong> Ton professionnel mais accessible. Pas de jargon technique. Axe sur les resultats, pas la technologie. Tutoiement interdit (vouvoiement uniquement).</em></p><p><em><strong>Exemple de resultat attendu :</strong> [insere ici un exemple d'une autre page de service que tu aimes]</em></p><p>Tu vois la difference avec \"Ecris une description de service\" ? Le resultat sera <strong>10x plus precis et utilisable</strong>.</p>" },
      { id: "1-25", type: "callout", variant: "tip", html: "<strong>Astuce gain de temps :</strong> Sauvegarde tes meilleurs prompts dans un document. Quand tu as un nouveau client dans le meme secteur, tu reprends le prompt, tu changes les details, et tu as un resultat quasi instantane. C'est ta <strong>bibliotheque de prompts</strong> — un actif qui prend de la valeur avec le temps." },
      { id: "1-8", type: "separator", style: "line" },
      { id: "1-9", type: "heading", level: 2, text: "Pilier 2 : Le contexte" },
      { id: "1-10", type: "text", html: "<p>Le contexte, c'est tout ce que l'IA a besoin de savoir pour bien repondre. Plus tu fournis de contexte pertinent, plus le resultat sera precis et adapte. Imagine que tu briefs un collaborateur qui ne connait rien a ton projet : qu'est-ce que tu lui dirais ?</p>" },
      { id: "1-11", type: "comparison", headers: ["Prompt sans contexte", "Prompt avec contexte"], rows: [
        { cells: ["\"Ecris un email de relance\"", "\"Ecris un email de relance pour un prospect B2B (directeur marketing d'une PME de 50 personnes) qui n'a pas repondu a notre proposition de chatbot IA envoyee il y a 5 jours. Ton professionnel mais direct. 150 mots max.\""] },
        { cells: ["\"Cree un chatbot\"", "\"Cree le prompt systeme pour un chatbot IA destine a un cabinet dentaire. Il doit repondre aux questions sur les services (detartrage, implants, orthodontie), les horaires (lundi-vendredi 9h-18h), et orienter vers la prise de RDV Doctolib.\""] },
        { cells: ["\"Fais-moi un site\"", "\"Genere le code HTML/CSS d'une landing page pour un photographe de mariage. Style : elegant, epure, palette blanc et dore. Sections : hero avec CTA, portfolio (grille 3 colonnes), temoignages, formulaire de contact. Mobile-first.\""] }
      ]},
      { id: "1-26", type: "heading", level: 3, text: "Les 7 types de contexte a inclure" },
      { id: "1-27", type: "text", html: "<p>Quand tu ecris un prompt professionnel, pense a inclure ces 7 types de contexte :</p><ol><li><strong>Le qui :</strong> Pour qui est ce contenu ? (cible, audience, client)</li><li><strong>Le quoi :</strong> Quel est le sujet exact ? (produit, service, theme)</li><li><strong>Le pourquoi :</strong> Quel est l'objectif ? (vendre, informer, convaincre, automatiser)</li><li><strong>Le ou :</strong> Ou sera utilise ce contenu ? (site web, email, LinkedIn, chatbot)</li><li><strong>Le quand :</strong> Y a-t-il un contexte temporel ? (saison, evenement, urgence)</li><li><strong>Le comment :</strong> Quel ton, style, niveau de formalite ? (tutoiement/vouvoiement, humoristique/serieux)</li><li><strong>Les contraintes :</strong> Limites de longueur, ce qu'il faut eviter, regles specifiques</li></ol><p>Tu n'as pas besoin de couvrir les 7 a chaque fois. Mais plus tu en inclus, meilleur sera le resultat. C'est comme donner un brief a un graphiste : plus le brief est detaille, moins il y a d'allers-retours.</p>" },
      { id: "1-28", type: "callout", variant: "warning", html: "<strong>Piege courant :</strong> Trop de contexte non pertinent. Si tu ecris un prompt pour un email de relance, l'histoire complete de l'entreprise n'est pas necessaire. Inclus uniquement le contexte qui influence directement le resultat. La qualite du contexte > la quantite de contexte." },
      { id: "1-12", type: "heading", level: 2, text: "Pilier 3 : Le role" },
      { id: "1-13", type: "text", html: "<p>Attribuer un role a l'IA change radicalement la qualite des reponses. Quand tu dis \"Tu es un expert en copywriting avec 15 ans d'experience\", l'IA adopte le vocabulaire, le niveau de detail et la perspective d'un expert. C'est un levier puissant et sous-estime.</p>" },
      { id: "1-29", type: "heading", level: 3, text: "Les roles qui marchent le mieux" },
      { id: "1-30", type: "comparison", headers: ["Situation", "Role optimal", "Pourquoi ca marche"], rows: [
        { cells: ["Ecrire un email de vente", "Expert copywriting B2B, 15 ans d'experience, specialise tech", "L'IA utilise des techniques de persuasion pro et un vocabulaire adapte"] },
        { cells: ["Creer un prompt de chatbot", "UX designer conversationnel, specialiste en chatbots SAV", "L'IA pense en termes de parcours utilisateur et de cas limites"] },
        { cells: ["Deboguer du code", "Developpeur senior full-stack, 10 ans d'experience en React/TypeScript", "L'IA donne des solutions architecturalement solides, pas des bricolages"] },
        { cells: ["Analyser un marche", "Consultant en strategie business, expert en startups et PME", "L'IA fournit une analyse structuree avec des recommandations actionnables"] },
        { cells: ["Rediger une proposition commerciale", "Commercial B2B senior, expert en closing de services digitaux", "L'IA ecrit pour convaincre avec les bons arguments et la bonne structure"] }
      ]},
      { id: "1-14", type: "callout", variant: "tip", html: "<strong>Formule magique du role :</strong> \"Tu es un(e) [metier] expert(e) en [domaine specifique] avec [X ans d'experience]. Tu travailles pour [type de client]. Ton style est [adjectifs].\" Cette formule simple transforme la qualite des reponses." },
      { id: "1-31", type: "separator", style: "dots" },
      { id: "1-32", type: "heading", level: 3, text: "Combiner les 3 piliers : un exemple complet" },
      { id: "1-33", type: "text", html: "<p>Voici un prompt qui combine parfaitement structure, contexte et role :</p><p><em><strong>Role :</strong> Tu es un expert en chatbots IA avec 5 ans d'experience. Tu as deploye plus de 50 chatbots pour des PME dans le secteur medical.</em></p><p><em><strong>Objectif :</strong> Ecris le prompt systeme d'un chatbot pour un cabinet de kinesitherapie a Lyon.</em></p><p><em><strong>Contexte :</strong> Le cabinet a 3 kinesitherapeutes, est ouvert du lundi au vendredi de 8h a 19h, propose de la kine classique, du drainage lymphatique et de la reeducation post-operatoire. Les RDV se prennent sur Doctolib.</em></p><p><em><strong>Format :</strong> Un prompt systeme complet avec : description du role, informations du cabinet, regles de conversation, et gestion des cas limites (questions hors sujet, urgences, reclamations).</em></p><p><em><strong>Contraintes :</strong> Ton chaleureux mais professionnel. Le chatbot ne donne jamais de conseils medicaux. Il redirige toujours vers un rendez-vous pour les questions cliniques.</em></p><p>Ce prompt produit un resultat <strong>directement livrable a un client</strong>. C'est ca le niveau professionnel.</p>" },
      { id: "1-15", type: "checklist", title: "Ce que tu retiens de cette lecon", items: [
        { id: "c1", text: "Un bon prompt = structure claire + contexte riche + role defini" },
        { id: "c2", text: "La structure suit 5 elements : objectif, contexte, format, contraintes, exemples" },
        { id: "c3", text: "Plus le contexte est precis, meilleur est le resultat — prompt vague = resultat vague" },
        { id: "c4", text: "Attribuer un role change radicalement la qualite et le niveau des reponses" },
        { id: "c5", text: "Un prompt professionnel de 5 lignes bat un prompt vague de 1 ligne" }
      ]}
    ]),
    exercise: "<h3>Exercice : Transforme des prompts mediocres en prompts professionnels</h3><p>Reprends ces 5 prompts mediocres et reecris-les en appliquant les 3 piliers (structure, contexte, role) :</p><ol><li>\"Ecris-moi une bio Instagram\"</li><li>\"Fais un business plan\"</li><li>\"Cree une newsletter\"</li><li>\"Analyse ce marche\"</li><li>\"Redige une offre commerciale\"</li></ol><p>Pour chaque prompt reecrit, identifie : le role attribue, le contexte ajoute, le format de sortie demande, et les contraintes definies. Teste tes prompts ameliores sur Claude et compare les resultats avec les prompts originaux.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 piliers d'un bon prompt ?", options: JSON.stringify(["Longueur, complexite, jargon technique", "Structure, contexte, role", "Vitesse, clarte, brievete", "Format, langue, ton"]), correctAnswer: "Structure, contexte, role", explanation: "Les 3 piliers fondamentaux du prompting sont : la structure (organisation claire), le contexte (informations necessaires), et le role (expertise attribuee a l'IA)." },
      { type: "true_false", question: "Un prompt court d'une ligne est toujours preferable a un prompt detaille.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, un prompt detaille de 5 lignes avec structure, contexte et role donnera presque toujours un meilleur resultat qu'un prompt vague d'une ligne." },
      { type: "mcq", question: "Quel est l'ordre recommande pour structurer un prompt ?", options: JSON.stringify(["Format, contraintes, objectif", "Objectif, contexte, format de sortie, contraintes, exemples", "Role, exemples, format", "Contraintes, objectif, role"]), correctAnswer: "Objectif, contexte, format de sortie, contraintes, exemples", explanation: "La structure recommandee est : objectif (ce que tu veux), contexte (les informations cles), format de sortie (la forme attendue), contraintes (ce qu'il faut eviter/respecter), et exemples (optionnel)." },
      { type: "mcq", question: "Pourquoi attribuer un role a l'IA ameliore-t-il les resultats ?", options: JSON.stringify(["Ca ne change rien en realite", "L'IA adopte le vocabulaire et le niveau d'expertise du role attribue", "L'IA travaille plus vite avec un role", "Le role debloque des fonctionnalites cachees"]), correctAnswer: "L'IA adopte le vocabulaire et le niveau d'expertise du role attribue", explanation: "Quand tu attribues un role, l'IA ajuste son vocabulaire, son niveau de detail et sa perspective pour correspondre a ce role. Un expert repond differemment d'un generaliste." },
      { type: "true_false", question: "Fournir un exemple du resultat souhaite est le moyen le plus efficace de guider l'IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, les exemples sont le moyen le plus direct de montrer a l'IA exactement ce que tu attends. C'est le 5e element (optionnel) de la structure de prompt." },
      { type: "mcq", question: "Quelle formule est recommandee pour definir un role ?", options: JSON.stringify(["\"Sois intelligent\"", "\"Tu es un(e) [metier] expert(e) en [domaine] avec [X ans d'experience]\"", "\"Reponds bien\"", "\"Mode expert active\""]), correctAnswer: "\"Tu es un(e) [metier] expert(e) en [domaine] avec [X ans d'experience]\"", explanation: "Cette formule combine le metier, le domaine de specialisation et l'experience pour cadrer precisement le niveau de reponse attendu." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 3,
    title: "Les techniques avancees pour des reponses precises",
    slug: "v2-techniques-avancees-prompting",
    duration: "25 min",
    description: "Maitrise les techniques avancees de prompting : chain-of-thought, few-shot, tree-of-thought, meta-prompting, et iteration. Passe au niveau superieur.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Au-dela des bases : les techniques qui font la difference" },
      { id: "2-2", type: "text", html: "<p>Tu maitrises maintenant les 3 piliers du prompting. Mais pour obtenir des resultats vraiment professionnels — ceux que tes clients payeront cher — il faut aller plus loin. Les techniques avancees de prompting transforment l'IA d'un simple assistant en un veritable collaborateur capable de raisonnements complexes.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Important :</strong> Ces techniques ne remplacent pas les bases. Elles s'y ajoutent. Un prompt avance combine toujours structure + contexte + role + une ou plusieurs techniques avancees." },
      { id: "2-20", type: "heading", level: 3, text: "Quand utiliser les techniques avancees ?" },
      { id: "2-21", type: "text", html: "<p>Les techniques de base suffisent pour 70% de tes taches quotidiennes (ecrire un email, generer du contenu, creer un composant simple). Les techniques avancees sont necessaires quand :</p><ul><li>La tache implique un <strong>raisonnement complexe</strong> (analyse de marche, strategie de prix, architecture technique)</li><li>Tu as besoin d'un <strong>format tres specifique</strong> que l'IA ne produit pas naturellement</li><li>Le premier resultat n'est <strong>pas satisfaisant</strong> malgre un bon prompt de base</li><li>Tu veux <strong>automatiser</strong> un process qui necessite plusieurs etapes</li></ul>" },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Technique 1 : Chain-of-Thought (raisonnement etape par etape)" },
      { id: "2-6", type: "text", html: "<p>Le Chain-of-Thought (CoT) consiste a demander a l'IA de <strong>raisonner etape par etape</strong> avant de donner sa reponse finale. Au lieu de sauter directement a la conclusion, l'IA decompose son raisonnement. Ca reduit les erreurs et augmente la qualite sur les taches complexes.</p><p>Comment l'activer : ajoute simplement \"Raisonne etape par etape\" ou \"Explique ton raisonnement avant de conclure\" a la fin de ton prompt.</p>" },
      { id: "2-7", type: "comparison", headers: ["Sans Chain-of-Thought", "Avec Chain-of-Thought"], rows: [
        { cells: ["\"Quel prix fixer pour un chatbot IA ?\"", "\"Quel prix fixer pour un chatbot IA ? Raisonne etape par etape en considerant : le temps de developpement, le cout des API, la valeur pour le client, et le positionnement marche.\""] },
        { cells: ["Reponse vague : \"entre 500 et 5000 euros\"", "Reponse detaillee avec un raisonnement structure et une recommandation argumentee"] }
      ]},
      { id: "2-22", type: "heading", level: 3, text: "Cas d'usage concrets du Chain-of-Thought" },
      { id: "2-23", type: "text", html: "<p>Le CoT est particulierement puissant dans ces situations de ton quotidien de prestataire IA :</p><ul><li><strong>Fixer tes prix :</strong> \"Raisonne etape par etape pour determiner le prix optimal d'un chatbot pour un restaurant de 30 couverts\" — l'IA va considerer le temps de dev, les couts, la valeur percue, la concurrence</li><li><strong>Choisir une stack technique :</strong> \"Raisonne etape par etape pour choisir entre Next.js et Astro pour le site d'un photographe\" — l'IA va comparer les avantages, les inconvenients, et recommander</li><li><strong>Rediger une proposition :</strong> \"Raisonne etape par etape pour structurer une proposition commerciale de 3 000€ pour un chatbot SAV\" — l'IA va detailler chaque section logiquement</li><li><strong>Debugger un probleme :</strong> \"Raisonne etape par etape pour identifier pourquoi ce composant React ne se re-render pas\" — l'IA va methodiquement eliminer les causes possibles</li></ul>" },
      { id: "2-24", type: "callout", variant: "tip", html: "<strong>Variantes utiles :</strong> \"Pense a haute voix\", \"Decompose ton raisonnement\", \"Avant de repondre, analyse les pour et les contre\", \"Enumere les facteurs a considerer puis conclus\". Toutes ces formulations activent le Chain-of-Thought." },
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Technique 2 : Few-Shot (apprentissage par l'exemple)" },
      { id: "2-10", type: "text", html: "<p>Le few-shot consiste a donner <strong>2 a 3 exemples</strong> du resultat attendu avant de poser ta vraie question. L'IA comprend le pattern et le reproduit. C'est la technique la plus puissante pour obtenir un format ou un style tres specifique.</p>" },
      { id: "2-11", type: "steps", steps: [
        { title: "Donne 2-3 exemples", description: "Montre a l'IA des paires input/output qui illustrent exactement ce que tu veux. Plus les exemples sont representatifs, meilleur sera le resultat." },
        { title: "Garde une structure coherente", description: "Les exemples doivent suivre exactement le meme format. Si tu veux un tableau, donne des exemples de tableaux. Si tu veux des bullet points, donne des exemples de bullet points." },
        { title: "Pose ta vraie question", description: "Apres les exemples, donne l'input reel et l'IA produira un output qui suit le meme pattern." }
      ]},
      { id: "2-25", type: "heading", level: 3, text: "Exemple concret de few-shot pour tes clients" },
      { id: "2-26", type: "text", html: "<p>Imagine que tu dois creer des descriptions de services pour ton site. Tu veux un format tres precis. Voici comment utiliser le few-shot :</p><p><em>\"Voici 2 exemples de descriptions de service que j'aime :</em></p><p><em><strong>Exemple 1 :</strong><br/>Titre : Chatbot SAV Intelligent<br/>Accroche : Vos clients meritent des reponses instantanees. Votre equipe merite de se concentrer sur l'essentiel.<br/>Benefices : Reponses 24h/24 | Reduction de 60% des tickets support | Mise en place en 5 jours<br/>Prix : A partir de 1 200€</em></p><p><em><strong>Exemple 2 :</strong><br/>Titre : Site Web Propulse par l'IA<br/>Accroche : Un site qui ne se contente pas d'etre beau. Un site qui travaille pour vous.<br/>Benefices : Design sur mesure | Chatbot integre | SEO automatise<br/>Prix : A partir de 2 000€</em></p><p><em>Maintenant, cree une description dans le meme format pour un service d'automatisation d'emails.\"</em></p><p>L'IA va reproduire exactement le meme format. <strong>C'est magique et ca marche a chaque fois.</strong></p>" },
      { id: "2-12", type: "heading", level: 2, text: "Technique 3 : Le meta-prompting (le prompt qui cree des prompts)" },
      { id: "2-13", type: "text", html: "<p>Le meta-prompting, c'est utiliser l'IA pour <strong>ameliorer tes propres prompts</strong>. Au lieu d'ecrire directement ton prompt final, tu demandes a l'IA de t'aider a le structurer. C'est un gain de temps enorme et ca donne des prompts de bien meilleure qualite.</p><p>Exemple : \"Je veux obtenir [resultat]. Ecris le prompt optimal que je devrais utiliser pour obtenir ce resultat. Inclus le role, le contexte, le format de sortie et les contraintes.\"</p>" },
      { id: "2-14", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Utilise le meta-prompting quand tu bloques sur un prompt. Dis a Claude : \"Mon prompt actuel est [ton prompt]. Le resultat n'est pas satisfaisant parce que [probleme]. Ameliore ce prompt.\" Claude va identifier les faiblesses et proposer une version optimisee." },
      { id: "2-27", type: "heading", level: 3, text: "Le meta-prompting en pratique" },
      { id: "2-28", type: "text", html: "<p>Voici 3 situations ou le meta-prompting te fait gagner un temps enorme :</p><ol><li><strong>Creer un prompt systeme de chatbot :</strong> Au lieu d'ecrire le prompt systeme toi-meme, dis a Claude : \"Je dois creer un chatbot pour un dentiste. Ecris le prompt systeme optimal en incluant tous les cas limites, les regles de conversation, et le ton a adopter.\" Claude produira un prompt systeme bien meilleur que ce que tu aurais ecrit seul.</li><li><strong>Optimiser un prompt existant :</strong> \"Ce prompt [colle ton prompt] produit un resultat trop generique. Ameliore-le pour que le resultat soit plus personnalise et actionnable.\"</li><li><strong>Creer une serie de prompts :</strong> \"Je dois creer 10 prompts differents pour generer du contenu LinkedIn. Cree-moi un template de prompt parametrable que je peux adapter a chaque sujet.\"</li></ol>" },
      { id: "2-29", type: "callout", variant: "info", html: "<strong>Le cercle vertueux :</strong> Plus tu utilises le meta-prompting, meilleurs sont tes prompts. Meilleurs sont tes prompts, meilleurs sont tes resultats. Meilleurs sont tes resultats, plus tu peux facturer cher. Le meta-prompting est un investissement qui se rentabilise a chaque projet." },
      { id: "2-15", type: "heading", level: 2, text: "Technique 4 : L'iteration systematique" },
      { id: "2-16", type: "comparison", headers: ["Iteration", "Action"], rows: [
        { cells: ["1er prompt", "Tu envoies ton prompt initial bien structure"] },
        { cells: ["Analyse du resultat", "Tu identifies ce qui manque ou ce qui est incorrect"] },
        { cells: ["Feedback precis", "Tu donnes un retour specifique : \"Le ton est trop formel, rends-le plus conversationnel\" ou \"Ajoute des chiffres concrets dans la section 3\""] },
        { cells: ["2e iteration", "L'IA corrige en tenant compte de tes retours"] },
        { cells: ["Raffinement final", "Tu ajustes les derniers details pour obtenir le resultat parfait"] }
      ]},
      { id: "2-30", type: "heading", level: 3, text: "Les feedbacks qui marchent vs ceux qui ne marchent pas" },
      { id: "2-31", type: "comparison", headers: ["Feedback inefficace", "Feedback efficace", "Pourquoi"], rows: [
        { cells: ["\"C'est pas bon\"", "\"Le paragraphe 2 est trop long, raccourcis-le a 3 phrases\"", "L'IA sait exactement quoi modifier"] },
        { cells: ["\"Ameliore\"", "\"Le ton est trop formel, utilise le tutoiement et un style plus decontracte\"", "L'IA comprend la direction du changement"] },
        { cells: ["\"Fais mieux\"", "\"Ajoute des chiffres concrets (pourcentage de gain, temps economise) dans les 3 premiers bullet points\"", "L'IA sait quoi ajouter et ou"] },
        { cells: ["\"Recommence\"", "\"Garde la structure mais change l'angle : au lieu de parler de technologie, parle des benefices business pour le client\"", "L'IA garde le bon et ameliore le reste"] }
      ]},
      { id: "2-32", type: "callout", variant: "tip", html: "<strong>Regle du feedback :</strong> Un bon feedback repond toujours a 3 questions : QUOI changer (quel element), COMMENT changer (dans quelle direction), et POURQUOI (l'objectif du changement). \"Change le titre (QUOI) pour qu'il soit plus accrocheur (COMMENT) car le client doit vouloir lire la suite (POURQUOI).\"" },
      { id: "2-17", type: "checklist", title: "Ce que tu retiens de cette lecon", items: [
        { id: "c1", text: "Chain-of-Thought : demander a l'IA de raisonner etape par etape reduit les erreurs" },
        { id: "c2", text: "Few-Shot : 2-3 exemples suffisent pour guider l'IA vers le format exact souhaite" },
        { id: "c3", text: "Meta-prompting : utiliser l'IA pour ameliorer tes propres prompts" },
        { id: "c4", text: "L'iteration est normale et necessaire — le premier resultat n'est jamais le dernier" },
        { id: "c5", text: "Combiner les techniques entre elles donne les meilleurs resultats" }
      ]}
    ]),
    exercise: "<h3>Exercice : Applique chaque technique avancee</h3><p>Pratique chaque technique sur Claude :</p><ol><li><strong>Chain-of-Thought :</strong> Demande a Claude d'analyser si tu devrais proposer un abonnement mensuel ou un prix unique pour tes services de chatbot. Ajoute \"Raisonne etape par etape.\" Compare avec le meme prompt sans cette instruction.</li><li><strong>Few-Shot :</strong> Cree un prompt avec 2 exemples de descriptions de service IA (format : titre accrocheur, 2 phrases de description, 3 bullet points de benefices, prix). Puis demande une 3e description pour un nouveau service.</li><li><strong>Meta-prompting :</strong> Prends un prompt que tu as ecrit dans un exercice precedent et demande a Claude de l'ameliorer en expliquant pourquoi chaque modification est meilleure.</li><li><strong>Iteration :</strong> Demande a Claude de rediger une page \"A propos\" pour ton activite de prestataire IA. Puis itere 3 fois avec des feedbacks precis.</li></ol>",
    quiz: [
      { type: "mcq", question: "En quoi consiste la technique Chain-of-Thought ?", options: JSON.stringify(["Ecrire un tres long prompt", "Demander a l'IA de raisonner etape par etape avant de conclure", "Donner des exemples a l'IA", "Utiliser plusieurs IA en chaine"]), correctAnswer: "Demander a l'IA de raisonner etape par etape avant de conclure", explanation: "Le Chain-of-Thought consiste a demander a l'IA de decomposer son raisonnement en etapes avant de donner sa reponse finale. Ca reduit les erreurs sur les taches complexes." },
      { type: "true_false", question: "Le few-shot necessite au moins 10 exemples pour etre efficace.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, 2 a 3 exemples suffisent generalement pour que l'IA comprenne le pattern et le reproduise. C'est pour ca qu'on parle de \"few-shot\" (peu d'exemples)." },
      { type: "mcq", question: "Qu'est-ce que le meta-prompting ?", options: JSON.stringify(["Ecrire des prompts tres longs", "Utiliser l'IA pour ameliorer ses propres prompts", "Coder un systeme de prompts automatique", "Traduire des prompts dans plusieurs langues"]), correctAnswer: "Utiliser l'IA pour ameliorer ses propres prompts", explanation: "Le meta-prompting consiste a demander a l'IA d'analyser et d'ameliorer tes prompts. C'est un gain de temps enorme et ca produit des prompts de meilleure qualite." },
      { type: "true_false", question: "Un professionnel obtient toujours le resultat parfait au premier prompt, sans iteration.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'iteration est normale et necessaire. Meme les meilleurs prompteurs iterent 2-3 fois avec des feedbacks precis pour obtenir le resultat optimal." },
      { type: "mcq", question: "Quel est l'avantage principal du Chain-of-Thought sur les taches complexes ?", options: JSON.stringify(["L'IA repond plus vite", "Ca reduit les erreurs de raisonnement", "Ca coute moins de tokens", "Ca genere des reponses plus courtes"]), correctAnswer: "Ca reduit les erreurs de raisonnement", explanation: "En decomposant le raisonnement en etapes, l'IA est moins susceptible de faire des erreurs logiques. Chaque etape est verifiable et le resultat final est plus fiable." },
      { type: "mcq", question: "Comment donner un feedback efficace lors de l'iteration ?", options: JSON.stringify(["\"C'est nul, recommence\"", "\"Ameliore\"", "\"Le ton est trop formel dans le paragraphe 2, rends-le plus conversationnel\"", "\"Fais mieux\""]), correctAnswer: "\"Le ton est trop formel dans le paragraphe 2, rends-le plus conversationnel\"", explanation: "Un feedback efficace est specifique : il identifie exactement ce qui ne va pas et donne une direction claire pour la correction. Les feedbacks vagues donnent des corrections vagues." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 3,
    title: "Atelier : ecrire des prompts business (emails, offres, contenus)",
    slug: "v2-atelier-prompts-business",
    duration: "30 min",
    description: "Atelier pratique : tu crees des prompts professionnels pour les cas d'usage business les plus courants — emails commerciaux, propositions, contenus marketing, et analyses.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Atelier : les prompts business qui rapportent" },
      { id: "3-2", type: "text", html: "<p>Cet atelier est 100% pratique. Tu vas creer des <strong>prompts templates</strong> que tu reutiliseras dans ton activite de prestataire IA. Chaque template est un outil que tu pourras adapter a chaque client. A la fin de cet atelier, tu auras une bibliotheque de prompts prets a l'emploi.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Objectif :</strong> Tu repars avec 5 prompts templates testes et valides que tu pourras utiliser des demain pour toi ou pour tes clients." },
      { id: "3-20", type: "heading", level: 3, text: "La valeur cachee des templates" },
      { id: "3-21", type: "text", html: "<p>Chaque template que tu crees dans cet atelier a une <strong>double valeur</strong> :</p><ol><li><strong>Pour toi :</strong> Tu gagnes du temps a chaque nouveau projet. Au lieu de repartir de zero, tu adaptes un template qui marche deja. Un email de prospection qui a 15% de taux de reponse, tu le reutilises 100 fois.</li><li><strong>Pour tes clients :</strong> Tu peux vendre ces templates comme un service. \"Pack de 10 templates d'emails IA\" = 500-1 000€. \"Systeme de generation de contenu avec templates\" = 1 000-2 000€.</li></ol><p>Les meilleurs prestataires IA ont des centaines de templates accumules au fil des projets. C'est leur <strong>avantage competitif</strong> — ils sont plus rapides et plus consistants que la concurrence.</p>" },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Template 1 : Email de prospection a froid" },
      { id: "3-6", type: "text", html: "<p>L'email de prospection est le premier outil de ton arsenal commercial. Un bon prompt genere un email qui ne finit pas a la poubelle. Les elements cles : une accroche personnalisee, une proposition de valeur claire, et un appel a l'action simple.</p>" },
      { id: "3-7", type: "steps", steps: [
        { title: "Le role", description: "\"Tu es un expert en copywriting B2B specialise dans les emails de prospection. Tu ecris des emails qui obtiennent un taux d'ouverture de 40%+ et un taux de reponse de 10%+.\"" },
        { title: "Le contexte", description: "Decris ton service, ta cible (secteur, taille d'entreprise, poste du decideur), et le probleme que tu resous." },
        { title: "Les contraintes", description: "Maximum 150 mots, pas de jargon IA intimidant, un seul CTA clair (appel de 15 min), objet d'email inclus." },
        { title: "L'iteration", description: "Demande 3 versions differentes (directe, storytelling, chiffree) et choisis la meilleure." }
      ]},
      { id: "3-22", type: "heading", level: 3, text: "Les erreurs qui tuent tes emails de prospection" },
      { id: "3-23", type: "comparison", headers: ["Erreur", "Pourquoi ca ne marche pas", "La correction"], rows: [
        { cells: ["Objet generique : \"Proposition commerciale\"", "C'est du spam. Le decideur ne l'ouvre meme pas.", "Objet personnalise : \"[Prenom], une question sur [son business]\""] },
        { cells: ["Parler de toi en premier", "Le prospect s'en fiche de toi. Il veut savoir ce que TU fais pour LUI.", "Commence par son probleme, puis presente ta solution."] },
        { cells: ["Trop de jargon IA", "\"NLP, LLM, fine-tuning\" fait fuir 90% des prospects.", "Parle en benefices : \"un assistant qui repond a vos clients 24h/24\""] },
        { cells: ["Pas de CTA clair", "Le prospect lit, trouve ca interessant, et... oublie.", "Un seul CTA : \"15 minutes cette semaine pour une demo ?\""] },
        { cells: ["Email trop long", "Personne ne lit un email de 500 mots d'un inconnu.", "Maximum 150 mots. 5 phrases. Chaque mot compte."] }
      ]},
      { id: "3-8", type: "separator", style: "line" },
      { id: "3-9", type: "heading", level: 2, text: "Template 2 : Proposition commerciale structuree" },
      { id: "3-10", type: "comparison", headers: ["Section de la proposition", "Ce que le prompt doit generer"], rows: [
        { cells: ["Resume executif", "2-3 phrases qui captent l'attention du decideur et resument la valeur"] },
        { cells: ["Diagnostic du probleme", "Reformulation du probleme du client avec des chiffres concrets"] },
        { cells: ["Solution proposee", "Description claire de ce que tu vas livrer, avec les technologies utilisees"] },
        { cells: ["Livrables et planning", "Liste precise de ce que le client recoit, avec des dates"] },
        { cells: ["Investissement", "Prix detaille avec options, pas un simple total"] },
        { cells: ["Garanties", "Ce que tu garantis (delai, resultat, support)"] }
      ]},
      { id: "3-24", type: "heading", level: 3, text: "L'art du pricing dans la proposition" },
      { id: "3-25", type: "text", html: "<p>Le pricing est la partie la plus delicate de ta proposition. Voici les strategies qui marchent :</p><ul><li><strong>La technique des 3 options :</strong> Propose toujours 3 niveaux de prix (Basic, Standard, Premium). La plupart des clients choisissent l'option du milieu — c'est humain. Place ton prix cible au milieu.</li><li><strong>Ancrage par la valeur :</strong> Avant de donner ton prix, rappelle la valeur. \"Ce chatbot va vous economiser 15h/semaine de travail telephonique (valeur : 30 000€/an). Investissement : 2 000€.\"</li><li><strong>Inclure la maintenance :</strong> Presente le forfait mensuel comme naturel. \"L'investissement initial est de 1 500€. Le forfait de maintenance, mises a jour et support est de 150€/mois.\"</li></ul>" },
      { id: "3-26", type: "callout", variant: "tip", html: "<strong>Astuce psychologique :</strong> N'utilise jamais le mot \"prix\" ou \"cout\" dans ta proposition. Utilise \"investissement\". Un cout, ca fait peur. Un investissement, ca cree de la valeur. C'est le meme montant, mais la perception est totalement differente." },
      { id: "3-11", type: "heading", level: 2, text: "Template 3 : Contenu marketing pour reseaux sociaux" },
      { id: "3-12", type: "text", html: "<p>Creer du contenu pour les reseaux sociaux de tes clients est un service recurrent tres rentable. Le prompt doit inclure : la plateforme cible (LinkedIn, Instagram, Facebook), le ton de la marque, l'objectif du post (notoriete, engagement, conversion), et des exemples de posts precedents si disponibles.</p>" },
      { id: "3-27", type: "heading", level: 3, text: "Les formats de posts qui performent par plateforme" },
      { id: "3-28", type: "comparison", headers: ["Plateforme", "Format gagnant", "Longueur ideale"], rows: [
        { cells: ["LinkedIn", "Post educatif avec hook + histoire + conclusion + CTA", "1 000-1 500 caracteres (long mais engage)"] },
        { cells: ["Instagram", "Carousel de 5-10 slides avec tips visuels", "Legende 300-500 caracteres + hashtags"] },
        { cells: ["Facebook", "Post storytelling avec question d'engagement", "500-800 caracteres"] },
        { cells: ["TikTok", "Script video de 30-60 secondes avec hook initial", "Script de 100-200 mots"] }
      ]},
      { id: "3-13", type: "callout", variant: "tip", html: "<strong>Astuce monetisation :</strong> Un pack \"30 posts par mois\" se vend entre 300 et 800 euros. Avec les bons prompts, tu les generes en 1 a 2 heures. C'est un des services les plus rentables en termes de ratio temps/argent." },
      { id: "3-29", type: "callout", variant: "info", html: "<strong>Le systeme de batch :</strong> Au lieu de creer un post a la fois, utilise cette approche : donne a Claude le contexte de la marque + 4-5 themes du mois, et demande-lui de generer les 30 posts d'un coup. Tu ajustes ensuite. 1h de travail pour 30 posts = un service a forte marge." },
      { id: "3-14", type: "heading", level: 2, text: "Template 4 : Analyse de marche pour un client" },
      { id: "3-15", type: "text", html: "<p>Quand un client te demande d'analyser son marche ou sa concurrence, tu as besoin d'un prompt structure qui couvre : les tendances du secteur, les principaux concurrents, les opportunites identifiees, et des recommandations actionnables. Utilise le Chain-of-Thought pour obtenir une analyse plus profonde.</p>" },
      { id: "3-30", type: "heading", level: 3, text: "La structure d'une analyse de marche vendable" },
      { id: "3-31", type: "steps", steps: [
        { title: "1. Vue d'ensemble du marche", description: "Taille du marche, tendances, croissance. L'IA peut synthetiser ces infos a partir de donnees publiques. Precise toujours la date de tes sources." },
        { title: "2. Analyse concurrentielle", description: "Liste les 5-10 concurrents principaux, leurs forces, faiblesses, positionnement prix. Utilise un format tableau pour que ce soit visuellement clair." },
        { title: "3. Opportunites identifiees", description: "Croisement entre les tendances du marche et les faiblesses des concurrents. C'est la ou la valeur de ton analyse se trouve." },
        { title: "4. Recommandations actionnables", description: "3-5 recommandations concretes avec un plan d'action. Chaque recommandation doit etre SMART : Specifique, Mesurable, Atteignable, Relevant, Temporel." },
        { title: "5. Prochaines etapes", description: "Ce que le client doit faire cette semaine, ce mois-ci, et dans les 3 prochains mois. C'est aussi l'occasion de proposer tes services pour executer les recommandations." }
      ]},
      { id: "3-32", type: "callout", variant: "warning", html: "<strong>Attention :</strong> L'IA n'a pas acces aux donnees en temps reel. Elle peut se tromper sur les chiffres de marche. Utilise ses analyses comme point de depart et verifie les donnees cles. Precise toujours a ton client que l'analyse est basee sur des donnees publiquement disponibles." },
      { id: "3-16", type: "checklist", title: "Templates crees dans cet atelier", items: [
        { id: "c1", text: "Template email de prospection (3 versions : directe, storytelling, chiffree)" },
        { id: "c2", text: "Template proposition commerciale (6 sections structurees)" },
        { id: "c3", text: "Template contenu reseaux sociaux (adapte par plateforme)" },
        { id: "c4", text: "Template analyse de marche (avec recommandations actionnables)" },
        { id: "c5", text: "Tous les templates sont sauvegardes dans mon journal de formation" }
      ]}
    ]),
    exercise: "<h3>Exercice : Construis ta bibliotheque de prompts business</h3><p>Cree et teste les 4 templates sur Claude :</p><ol><li><strong>Email de prospection :</strong> Utilise le template pour generer un email destine a un proprietaire de restaurant. Genere 3 versions et choisis la meilleure.</li><li><strong>Proposition commerciale :</strong> Genere une proposition complete pour un chatbot IA destine a un cabinet dentaire (budget estime 1500 euros).</li><li><strong>Posts reseaux sociaux :</strong> Genere 5 posts LinkedIn pour un prestataire IA (toi !) qui veut montrer son expertise. Chaque post doit avoir un angle different.</li><li><strong>Analyse de marche :</strong> Demande une analyse du marche des chatbots IA pour les PME en France, avec recommandations de positionnement.</li><li>Sauvegarde chaque prompt template (pas juste le resultat, mais le prompt lui-meme) dans ton journal de formation.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la longueur recommandee pour un email de prospection a froid ?", options: JSON.stringify(["500 mots minimum", "Maximum 150 mots", "1 page complete", "Pas de limite"]), correctAnswer: "Maximum 150 mots", explanation: "Un email de prospection efficace fait maximum 150 mots. Les emails courts ont un meilleur taux de lecture et de reponse. Le decideur doit comprendre ta proposition en 30 secondes." },
      { type: "true_false", question: "Un pack de 30 posts par mois pour les reseaux sociaux peut se vendre entre 300 et 800 euros.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, la creation de contenu recurrent est un service tres rentable. Avec les bons prompts, tu generes 30 posts en 1-2 heures, pour un tarif de 300 a 800 euros par mois." },
      { type: "mcq", question: "Combien de sections doit comporter une proposition commerciale structuree ?", options: JSON.stringify(["2 sections : prix et description", "6 sections : resume, diagnostic, solution, livrables, investissement, garanties", "1 seul paragraphe suffit", "10 sections minimum"]), correctAnswer: "6 sections : resume, diagnostic, solution, livrables, investissement, garanties", explanation: "Une proposition commerciale professionnelle comporte 6 sections : resume executif, diagnostic du probleme, solution proposee, livrables et planning, investissement, et garanties." },
      { type: "mcq", question: "Pourquoi generer 3 versions d'un email de prospection ?", options: JSON.stringify(["Pour impressionner le client", "Pour avoir des angles differents et choisir le plus adapte", "Parce que l'IA ne sait pas ecrire du premier coup", "Pour tester les limites de l'IA"]), correctAnswer: "Pour avoir des angles differents et choisir le plus adapte", explanation: "Generer plusieurs versions (directe, storytelling, chiffree) te donne des angles differents. Tu peux choisir le plus adapte a ton prospect ou tester les differentes versions." },
      { type: "true_false", question: "Il faut sauvegarder les prompts templates, pas seulement les resultats qu'ils produisent.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le prompt template est ton outil reutilisable. Le resultat change a chaque client, mais le template reste. Construire une bibliotheque de prompts, c'est construire ta boite a outils professionnelle." }
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 3,
    title: "Atelier : ecrire des prompts code (generer, debug, refactor)",
    slug: "v2-atelier-prompts-code",
    duration: "30 min",
    description: "Atelier pratique : tu apprends a ecrire des prompts efficaces pour generer du code, debugger des erreurs, et refactorer du code existant avec l'IA.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Prompter pour du code : une discipline a part" },
      { id: "4-2", type: "text", html: "<p>Ecrire des prompts pour du code est different de l'ecriture de prompts business. Le code est binaire : ca marche ou ca ne marche pas. Il n'y a pas de place pour l'approximation. Les prompts code doivent etre <strong>extremement precis</strong> sur le langage, le framework, le style de code, et le comportement attendu.</p><p>Dans cet atelier, tu vas maitriser 3 types de prompts code : la <strong>generation</strong> (creer du code from scratch), le <strong>debug</strong> (trouver et corriger les erreurs), et le <strong>refactoring</strong> (ameliorer du code existant).</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Regle d'or du code IA :</strong> Ne fais jamais confiance au code genere sans le tester. Meme Claude peut produire du code qui semble correct mais qui contient des bugs subtils. Teste toujours, verifie toujours." },
      { id: "4-20", type: "heading", level: 3, text: "Pourquoi les prompts code sont differents" },
      { id: "4-21", type: "text", html: "<p>Les prompts business sont tolerants. Si un email a un mot maladroit, tu le corriges et c'est fini. Le code, lui, est impitoyable. <strong>Un point-virgule mal place peut casser toute une application.</strong></p><p>C'est pour ca que les prompts code exigent un niveau de precision superieur :</p><ul><li><strong>Le langage exact :</strong> \"JavaScript\" et \"TypeScript\" produisent du code different. \"React 17\" et \"React 18\" aussi.</li><li><strong>Le comportement attendu :</strong> Pas juste \"un formulaire\", mais \"un formulaire qui valide l'email en temps reel, affiche une erreur en rouge sous le champ, et desactive le bouton submit tant que le format est invalide\"</li><li><strong>La gestion d'erreurs :</strong> Un bon prompt code inclut toujours \"gere les cas d'erreur\" sinon l'IA produit un code qui marche dans le happy path mais crash au premier imprev</li><li><strong>L'environnement :</strong> \"Node.js 20\", \"Next.js 14 avec App Router\", \"React avec TypeScript strict\" — chaque detail compte</li></ul>" },
      { id: "4-22", type: "callout", variant: "info", html: "<strong>La bonne nouvelle :</strong> Meme si tu ne comprends pas encore le code que l'IA genere, tu peux le tester. Ouvre le fichier dans un navigateur, lance le serveur, clique partout. Si ca marche comme prevu, c'est bon. Si ca crash, copie l'erreur et demande a l'IA de corriger. C'est ca le vibe coding." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Prompts de generation : creer du code from scratch" },
      { id: "4-6", type: "steps", steps: [
        { title: "Specifie le langage et le framework", description: "\"En TypeScript avec React 18 et Next.js 14\" est 10x mieux que \"en JavaScript\". Sois le plus precis possible sur la stack technique." },
        { title: "Decris le comportement attendu", description: "Pas juste l'interface, mais le comportement : \"Quand l'utilisateur clique sur Envoyer, le formulaire valide les champs, affiche un spinner, envoie une requete POST a /api/contact, et affiche un message de succes.\"" },
        { title: "Precise les contraintes techniques", description: "Gestion d'erreurs, types TypeScript, responsive, accessibilite, performance. Chaque contrainte oubliee est un bug potentiel." },
        { title: "Demande les fichiers necessaires", description: "\"Genere aussi le fichier de types, les tests unitaires, et le fichier CSS\" — sinon l'IA ne genere que le composant principal." }
      ]},
      { id: "4-23", type: "heading", level: 3, text: "Le template de prompt de generation parfait" },
      { id: "4-24", type: "text", html: "<p>Voici le template que tu utiliseras pour chaque generation de code :</p><p><em>\"Genere un [type de composant/page/feature] en [langage + framework + version].</em></p><p><em><strong>Comportement :</strong> [Description detaillee de ce que ca fait, pas juste de quoi ca a l'air]</em></p><p><em><strong>Design :</strong> [Couleurs, typographie, espacements, responsive, animations]</em></p><p><em><strong>Contraintes techniques :</strong><br/>- Gestion d'erreurs complete<br/>- TypeScript strict (pas de any)<br/>- Mobile-first et responsive<br/>- Accessibilite (aria labels, navigation clavier)<br/>- Performance (lazy loading des images, code splitting)</em></p><p><em><strong>Fichiers a generer :</strong> [composant principal, types, tests, CSS/styles]</em></p><p><em><strong>Exemples de reference :</strong> [liens ou descriptions de designs similaires]\"</em></p><p>Ce template semble long, mais il te fait gagner un temps enorme. Un prompt precis = un resultat utilisable au premier essai. Un prompt vague = 5 iterations de corrections.</p>" },
      { id: "4-7", type: "separator", style: "line" },
      { id: "4-8", type: "heading", level: 2, text: "Prompts de debug : trouver et corriger les erreurs" },
      { id: "4-9", type: "text", html: "<p>Le debug avec l'IA est un superpouvoir. Au lieu de passer 2 heures sur Stack Overflow, tu peux resoudre la plupart des bugs en quelques minutes. Mais le prompt de debug doit etre structure differemment d'un prompt de generation.</p>" },
      { id: "4-10", type: "comparison", headers: ["Prompt de debug mediocre", "Prompt de debug efficace"], rows: [
        { cells: ["\"Mon code ne marche pas, aide-moi\"", "\"J'ai cette erreur : [copier l'erreur exacte]. Voici mon code : [copier le code]. Le comportement attendu est [description]. Le comportement actuel est [description]. Stack : React 18, TypeScript, Next.js 14.\""] },
        { cells: ["\"Il y a un bug quelque part\"", "\"L'API retourne un 200 mais le state React ne se met pas a jour. Voici le composant et le hook useQuery. La reponse API est correcte (verifiee dans les DevTools).\""] }
      ]},
      { id: "4-25", type: "heading", level: 3, text: "Les 5 categories de bugs que tu rencontreras" },
      { id: "4-26", type: "text", html: "<p>En tant que vibe coder, tu vas rencontrer ces 5 types de bugs. Voici comment les prompter efficacement :</p>" },
      { id: "4-27", type: "comparison", headers: ["Type de bug", "Symptome", "Prompt de debug"], rows: [
        { cells: ["Erreur de syntaxe", "Le code ne compile pas, message d'erreur clair", "\"Corrige cette erreur de syntaxe : [erreur exacte]. Voici le fichier : [code]\""] },
        { cells: ["Erreur de logique", "Le code compile mais le comportement est incorrect", "\"Ce code devrait faire [X] mais il fait [Y]. Voici le code : [code]. Explique pourquoi et corrige.\""] },
        { cells: ["Erreur d'API", "Erreur 4xx ou 5xx, ou reponse inattendue", "\"L'API retourne [status] avec ce body : [reponse]. Voici mon appel : [code]. Le endpoint attend [format attendu].\""] },
        { cells: ["Erreur de style/CSS", "Le design ne correspond pas a ce qui est attendu", "\"Ce composant devrait [description visuelle] mais a la place [description du probleme]. Voici le CSS : [code]\""] },
        { cells: ["Erreur de performance", "Le code est lent, freeze, ou consomme trop de memoire", "\"Ce composant se re-render [X] fois quand il devrait se render [Y] fois. Voici le code : [code]. Identifie la cause et optimise.\""] }
      ]},
      { id: "4-28", type: "callout", variant: "tip", html: "<strong>Le reflexe DevTools :</strong> Avant de prompter un bug, ouvre les DevTools de ton navigateur (F12). L'onglet Console montre les erreurs JavaScript. L'onglet Network montre les appels API. Copie ces infos dans ton prompt — c'est de l'or pour l'IA." },
      { id: "4-11", type: "heading", level: 2, text: "Prompts de refactoring : ameliorer le code existant" },
      { id: "4-12", type: "steps", steps: [
        { title: "Fournis le code actuel", description: "Colle le code complet que tu veux refactorer. L'IA a besoin de voir tout le contexte pour proposer des ameliorations coherentes." },
        { title: "Precise les objectifs du refactoring", description: "\"Ameliore la lisibilite\", \"Reduis la duplication\", \"Ajoute du TypeScript strict\", \"Optimise les performances\" — dis exactement ce que tu veux ameliorer." },
        { title: "Demande les explications", description: "Ajoute \"Explique chaque changement et pourquoi il ameliore le code\". Tu apprends en meme temps." },
        { title: "Garde la compatibilite", description: "Precise \"Ne change pas le comportement externe, seulement la structure interne\" pour eviter les regressions." }
      ]},
      { id: "4-29", type: "heading", level: 3, text: "Quand refactorer ?" },
      { id: "4-30", type: "text", html: "<p>Le refactoring n'est pas du luxe — c'est une necessite pour livrer des projets de qualite. Voici quand tu devrais refactorer :</p><ul><li><strong>Avant de livrer au client :</strong> Le code genere par l'IA fonctionne, mais il peut souvent etre plus propre. Un refactoring rapide de 15-20 minutes donne un code plus professionnel.</li><li><strong>Quand tu ajoutes des features :</strong> Si tu galeres a ajouter une nouvelle fonctionnalite parce que le code est trop complexe, c'est signe qu'il faut refactorer d'abord.</li><li><strong>Quand tu vois de la duplication :</strong> Si le meme bout de code apparait a 3 endroits, c'est un candidat ideal pour le refactoring.</li><li><strong>Quand tu reviens sur un projet :</strong> Si tu ne comprends plus ton propre code apres 2 semaines, il a besoin d'etre refactore pour etre plus lisible.</li></ul>" },
      { id: "4-13", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Quand tu debugges, donne a l'IA le message d'erreur EXACT (copie-colle), pas une reformulation. Les messages d'erreur contiennent des informations precises que l'IA utilise pour diagnostiquer le probleme." },
      { id: "4-14", type: "heading", level: 2, text: "Les patterns de prompts code a retenir" },
      { id: "4-15", type: "comparison", headers: ["Pattern", "Quand l'utiliser"], rows: [
        { cells: ["\"Genere [composant] en [langage/framework] qui [comportement]\"", "Creation de code from scratch"] },
        { cells: ["\"Voici l'erreur [erreur] dans ce code [code]. Comportement attendu : [X]. Comportement actuel : [Y]\"", "Debug d'une erreur"] },
        { cells: ["\"Refactore ce code pour [objectif]. Explique chaque changement.\"", "Amelioration de code existant"] },
        { cells: ["\"Ajoute des tests unitaires pour [code] couvrant les cas : [liste]\"", "Creation de tests"] },
        { cells: ["\"Optimise les performances de [code] en ciblant [metrique]\"", "Optimisation"] }
      ]},
      { id: "4-31", type: "separator", style: "dots" },
      { id: "4-32", type: "heading", level: 3, text: "Le workflow code complet en resume" },
      { id: "4-33", type: "steps", steps: [
        { title: "1. Genere avec un prompt precis", description: "Utilise le template de generation. Sois specifique sur le langage, le comportement, et les contraintes." },
        { title: "2. Teste immediatement", description: "Ouvre le resultat dans le navigateur. Clique partout. Teste les cas normaux ET les cas limites." },
        { title: "3. Debug les erreurs", description: "Si ca ne marche pas, copie l'erreur exacte et utilise le pattern de debug." },
        { title: "4. Itere et affine", description: "\"Le formulaire marche mais le style est moche. Ameliore le design avec des arrondis, des ombres, et une animation de validation.\"" },
        { title: "5. Refactore avant de livrer", description: "\"Refactore ce code pour qu'il soit plus lisible et mieux organise. Ajoute des commentaires sur les parties complexes.\"" },
        { title: "6. Commite et deploie", description: "git add + commit + push. Deploie sur Vercel/Netlify. Envoie le lien au client." }
      ]},
      { id: "4-16", type: "checklist", title: "Ce que tu retiens de cet atelier", items: [
        { id: "c1", text: "Les prompts code exigent une precision extreme : langage, framework, version, comportement" },
        { id: "c2", text: "Pour le debug : toujours fournir l'erreur exacte, le code, et les comportements attendu vs actuel" },
        { id: "c3", text: "Pour le refactoring : preciser les objectifs et demander des explications" },
        { id: "c4", text: "Ne jamais faire confiance au code genere sans le tester" },
        { id: "c5", text: "Les patterns de prompts code sont des outils reutilisables a sauvegarder" }
      ]}
    ]),
    exercise: "<h3>Exercice : Cree et teste des prompts code sur Claude</h3><p>Pratique les 3 types de prompts code :</p><ol><li><strong>Generation :</strong> Demande a Claude de generer un composant React TypeScript pour une carte de pricing (3 niveaux : Starter, Pro, Enterprise) avec un bouton CTA, un badge \"populaire\" sur le plan Pro, et un design responsive. Teste le code dans un projet React ou un sandbox en ligne.</li><li><strong>Debug :</strong> Copie ce code volontairement bogue et demande a Claude de le corriger : <code>const data = await fetch('/api/users'); const users = data.json(); console.log(users.map(u => u.name));</code> (indice : il manque un await et la gestion d'erreur).</li><li><strong>Refactoring :</strong> Prends un code JavaScript simple que tu as deja ecrit (ou demande a Claude d'en generer un volontairement \"sale\") et demande-lui de le refactorer en TypeScript strict avec des explications.</li><li>Sauvegarde tes 3 prompts templates dans ton journal.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la premiere chose a preciser dans un prompt de generation de code ?", options: JSON.stringify(["La couleur du design", "Le langage, le framework et la version", "Le nom du fichier", "Le nombre de lignes souhaite"]), correctAnswer: "Le langage, le framework et la version", explanation: "Le langage, le framework et la version sont la base de tout prompt de code. \"En TypeScript avec React 18\" est bien plus precis que \"en JavaScript\"." },
      { type: "true_false", question: "Il est sur d'utiliser du code genere par l'IA directement en production sans le tester.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais. Meme le code qui semble correct peut contenir des bugs subtils. Il faut toujours tester le code genere avant de l'utiliser." },
      { type: "mcq", question: "Que doit contenir un prompt de debug efficace ?", options: JSON.stringify(["Juste le message d'erreur", "L'erreur exacte, le code, le comportement attendu et le comportement actuel", "Seulement le code complet", "Un lien vers Stack Overflow"]), correctAnswer: "L'erreur exacte, le code, le comportement attendu et le comportement actuel", explanation: "Un prompt de debug efficace fournit 4 elements : l'erreur exacte (copie-colle), le code concerne, le comportement attendu, et le comportement actuel." },
      { type: "true_false", question: "Lors d'un refactoring avec l'IA, il est utile de demander des explications pour chaque changement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Oui, demander des explications te permet d'apprendre et de verifier que les changements sont pertinents. C'est un double benefice : code ameliore + apprentissage." },
      { type: "mcq", question: "Quel pattern de prompt utiliser pour corriger une erreur ?", options: JSON.stringify(["\"Genere un composant qui...\"", "\"Voici l'erreur [X] dans ce code [Y]. Comportement attendu : [A]. Comportement actuel : [B]\"", "\"Refactore pour ameliorer...\"", "\"Mon code ne marche pas\""]), correctAnswer: "\"Voici l'erreur [X] dans ce code [Y]. Comportement attendu : [A]. Comportement actuel : [B]\"", explanation: "Ce pattern fournit toutes les informations necessaires pour un diagnostic precis : l'erreur, le code, et la difference entre ce qui est attendu et ce qui se passe." },
      { type: "mcq", question: "Pourquoi faut-il copier-coller le message d'erreur exact plutot que le reformuler ?", options: JSON.stringify(["Par paresse", "Les messages d'erreur contiennent des informations techniques precises que l'IA utilise", "Parce que l'IA ne comprend pas le francais", "C'est une convention"]), correctAnswer: "Les messages d'erreur contiennent des informations techniques precises que l'IA utilise", explanation: "Les messages d'erreur contiennent des informations precises (numero de ligne, type d'erreur, stack trace) que l'IA utilise pour diagnostiquer le probleme. Une reformulation perd ces details." }
    ],
  },
];
