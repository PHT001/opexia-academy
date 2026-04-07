// ═══════════════════════════════════════════════════
// MODULE 1 — Le game IA : comprends le business
// 4 leçons — Comprendre l'opportunité + première action
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_01_LESSONS = [
  // ─── LEÇON 0 — BIENVENUE ───
  {
    order: 1,
    module: 1,
    title: "Bienvenue — ce qui t'attend",
    slug: "v2-bienvenue-ce-qui-tattend",
    duration: "10 min",
    description: "Comment la formation est structurée, ce que tu vas apprendre, et ta roadmap pour les prochaines semaines.",
    content: blocks([
      { id: "0-1", type: "heading", level: 2, text: "Bienvenue dans OpexIA" },
      { id: "0-2", type: "text", html: "<p>Tu es là parce que tu veux <strong>lancer ton activité dans l'IA</strong>. Que tu viennes de TikTok, d'un pote, ou de tes propres recherches — tu es au bon endroit.</p><p>Cette formation va t'apprendre à <strong>créer des solutions IA et les vendre à des entreprises</strong>. Pas besoin de savoir coder. Pas besoin d'un diplôme. Juste de la motivation et les bons outils.</p>" },
      { id: "0-20", type: "heading", level: 3, text: "Pourquoi cette formation est differente" },
      { id: "0-21", type: "text", html: "<p>Il y a des centaines de formations IA en ligne. La plupart te noient dans la theorie, les concepts abstraits, et te laissent sans rien de concret a la fin. Ici, c'est l'inverse. <strong>Chaque lecon debouche sur une action</strong>. Tu fais avant de comprendre, et tu comprends en faisant.</p><p>On ne va pas t'apprendre a devenir data scientist ou ingenieur machine learning. On va t'apprendre a <strong>utiliser l'IA comme un outil business</strong> pour creer de la valeur et generer des revenus. C'est la difference entre etudier la mecanique automobile et conduire une voiture pour livrer des colis.</p>" },
      { id: "0-22", type: "callout", variant: "warning", html: "<strong>Ce que cette formation n'est PAS :</strong> Un cours theorique de 40 heures que tu regardes passivement. Si tu ne fais pas les exercices, tu n'apprendras rien. Chaque module est concu pour que tu <strong>produises quelque chose de concret</strong>." },
      { id: "0-3", type: "separator", style: "dots" },
      { id: "0-4", type: "heading", level: 2, text: "Comment ca va se passer" },
      { id: "0-5", type: "steps", steps: [
        { title: "Phase 1 — Comprendre le game", description: "Tu decouvres le marche, les opportunites, et tu fais tes premieres actions concretes avec l'IA. C'est la ou tu es maintenant." },
        { title: "Phase 2 — Maitriser les outils", description: "Tu apprends a prompter comme un pro, a vibe coder avec Claude Code et Cursor, et a utiliser Git/GitHub." },
        { title: "Phase 3 — Construire des vrais projets", description: "Tu crees des sites web, des chatbots, des automatisations — des projets que tu peux montrer a des clients." },
        { title: "Phase 4 — Vendre", description: "Tu apprends a trouver des clients, closer un appel, livrer un projet, et scaler a 10K€/mois." }
      ]},
      { id: "0-23", type: "heading", level: 3, text: "Le rythme ideal" },
      { id: "0-24", type: "text", html: "<p>La formation est concue pour etre suivie a <strong>ton propre rythme</strong>. Cependant, voici ce qu'on recommande :</p><ul><li><strong>Rythme intensif (2-4h/jour) :</strong> Tu peux finir en 4-6 semaines et avoir ton premier client rapidement</li><li><strong>Rythme regulier (1-2h/jour) :</strong> Compte 8-10 semaines pour une maitrise solide</li><li><strong>Rythme tranquille (quelques heures/semaine) :</strong> 3-4 mois, mais tu y arrives quand meme</li></ul><p>Le plus important, c'est la <strong>regularite</strong>. 1 heure par jour pendant 60 jours bat 10 heures un dimanche tous les mois.</p>" },
      { id: "0-25", type: "callout", variant: "tip", html: "<strong>Conseil :</strong> Bloque un creneau fixe dans ton agenda pour la formation. Meme 30 minutes par jour. Les gens qui reussissent sont ceux qui en font une habitude, pas ceux qui attendent la motivation." },
      { id: "0-6", type: "callout", variant: "tip", html: "<strong>Chaque lecon te donne une competence concrete.</strong> Pas de theorie inutile — tu fais, tu apprends, tu avances. A la fin de chaque module, tu sais faire un truc de plus qu'avant." },
      { id: "0-7", type: "separator", style: "line" },
      { id: "0-8", type: "heading", level: 2, text: "Ta roadmap" },
      { id: "0-9", type: "comparison", headers: ["Semaine", "Ce que tu sais faire"], rows: [
        { cells: ["Semaine 1-2", "Tu comprends le marche, tu maitrises Claude, tu fais tes premiers prototypes"] },
        { cells: ["Semaine 3-4", "Tu sais vibe coder — tu crees des sites et des chatbots avec l'IA"] },
        { cells: ["Semaine 5-6", "Tu construis ton portfolio de services (automatisations, agents vocaux...)"] },
        { cells: ["Semaine 7-8", "Tu prospectes, tu closes, tu livres ton premier client"] },
        { cells: ["Mois 3", "Tu factures regulierement, tu scales vers 5-10K€/mois"] }
      ]},
      { id: "0-26", type: "heading", level: 3, text: "Ce que tu vas avoir a la fin" },
      { id: "0-27", type: "text", html: "<p>A la fin de cette formation, tu auras :</p><ul><li><strong>Un portfolio complet</strong> de projets reels (sites, chatbots, automatisations) que tu peux montrer a des prospects</li><li><strong>Une maitrise des outils IA</strong> (Claude Code, Cursor, Make, agents vocaux) qui te permet de livrer des projets pro</li><li><strong>Un systeme de prospection</strong> teste avec des scripts de messages, d'appels, et de suivi</li><li><strong>Des templates reutilisables</strong> pour tes propositions commerciales, tes emails, et tes livrables</li><li><strong>La confiance</strong> de savoir que tu peux resoudre des problemes reels pour de vrais clients</li></ul>" },
      { id: "0-10", type: "text", html: "<p>C'est ambitieux mais realiste. Des dizaines d'eleves l'ont fait avant toi. La cle : <strong>suivre le parcours dans l'ordre et ne pas sauter d'etapes</strong>.</p>" },
      { id: "0-28", type: "heading", level: 3, text: "Les regles d'or pour reussir" },
      { id: "0-29", type: "steps", steps: [
        { title: "Fais les exercices", description: "Chaque lecon a un exercice. Ne le saute pas. C'est en faisant que tu apprends, pas en lisant. 80% de l'apprentissage vient de la pratique." },
        { title: "Note tes questions", description: "Quand tu bloques, note ta question. Souvent la reponse arrive dans la lecon suivante. Sinon, demande dans la communaute." },
        { title: "Avance meme quand c'est dur", description: "Les modules 3-5 (prompting, code, Git) sont les plus techniques. C'est normal que ce soit un peu difficile. Persevere — c'est la que la vraie valeur se cree." },
        { title: "Ne compare pas ta vitesse", description: "Chacun avance a son rythme. Ce qui compte c'est de finir, pas de finir premier. Un etudiant qui met 3 mois mais facture un client a gagne." }
      ]},
      { id: "0-11", type: "callout", variant: "info", html: "<strong>Pret ?</strong> La prochaine lecon t'explique pourquoi le timing est parfait et pourquoi les entreprises ont besoin de toi maintenant." }
    ]),
    exercise: "",
    quiz: [
      { type: "mcq", question: "En combien de phases est organisee la formation ?", options: JSON.stringify(["2 phases", "4 phases", "7 phases", "10 phases"]), correctAnswer: "4 phases", explanation: "La formation est organisee en 4 phases : comprendre, maitriser les outils, construire des projets, et vendre." },
      { type: "true_false", question: "Il faut savoir coder pour suivre cette formation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Pas besoin de savoir coder. Tu vas apprendre le vibe coding — l'IA code pour toi." },
      { type: "mcq", question: "Quel est l'objectif au bout de 3 mois ?", options: JSON.stringify(["Avoir un diplome", "Facturer regulierement et scaler vers 5-10K€/mois", "Trouver un CDI en IA", "Maitriser 10 langages de programmation"]), correctAnswer: "Facturer regulierement et scaler vers 5-10K€/mois", explanation: "L'objectif c'est d'avoir tes propres clients et de generer des revenus recurrents avec tes services IA." }
    ],
  },

  // ─── LEÇON 1 — POURQUOI LES ENTREPRISES ONT BESOIN DE TOI ───
  {
    order: 2,
    module: 1,
    title: "Pourquoi les entreprises ont besoin de toi",
    slug: "v2-pourquoi-entreprises-besoin-de-toi",
    duration: "12 min",
    description: "Le marche de l'IA explose, les PME galerent, et c'est exactement la que tu interviens. Avec des histoires concretes.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "3 personnes qui vivent de l'IA aujourd'hui" },
      { id: "1-2", type: "text", html: "<p>Avant de parler de chiffres, voici 3 histoires de gens normaux qui generent des revenus avec l'IA.</p>" },
      { id: "1-3", type: "heading", level: 3, text: "Thomas, 24 ans — ancien serveur" },
      { id: "1-4", type: "text", html: "<p>Thomas bossait en restauration. Il a appris a creer des chatbots IA en 3 semaines. Son premier client : le restaurant ou il travaillait. Facture : <strong>800€</strong>. Aujourd'hui il a 6 clients recurrents et facture <strong>3 500€/mois</strong>.</p>" },
      { id: "1-20", type: "text", html: "<p>Ce qui est interessant chez Thomas, c'est sa strategie. Il n'a pas essaye de vendre a des inconnus. Il a commence par <strong>son propre employeur</strong>. Le patron voyait le probleme tous les jours (telephone qui sonne, memes questions, temps perdu). Thomas a cree un prototype de chatbot en une soiree, l'a montre le lendemain, et le patron a dit oui. Ce premier client lui a permis de creer un <strong>cas d'etude</strong> qu'il montre maintenant a tous ses prospects.</p>" },
      { id: "1-5", type: "heading", level: 3, text: "Sarah, 28 ans — freelance marketing" },
      { id: "1-6", type: "text", html: "<p>Sarah faisait du community management a 1 500€/mois. Elle a ajoute \"automatisation IA\" a ses services. Resultat : <strong>3 000 a 5 000€ par projet</strong>. Elle n'a pas appris a coder — elle utilise des outils no-code + l'IA.</p>" },
      { id: "1-21", type: "text", html: "<p>Le tournant pour Sarah : elle a automatise la creation de contenu pour un de ses clients. Au lieu de passer 20 heures par mois a ecrire des posts, elle a cree un systeme avec l'IA qui genere les brouillons en 2 heures. Le client a vu le gain de temps et lui a demande : <em>\"Tu peux faire pareil pour mes emails ?\"</em>. Puis pour ses rapports. Puis il l'a recommandee a 3 autres entreprises. <strong>Aujourd'hui, Sarah refuse des clients.</strong></p>" },
      { id: "1-7", type: "heading", level: 3, text: "Karim, 32 ans — reconversion totale" },
      { id: "1-8", type: "text", html: "<p>Karim etait dans la logistique. Zero competence tech. 2 mois apres sa formation, il signe un agent immobilier pour un site + generateur de descriptions IA. Facture : <strong>3 000€</strong>. Aujourd'hui il fait 3-4 projets par mois.</p>" },
      { id: "1-22", type: "text", html: "<p>Karim a fait quelque chose de malin : il s'est <strong>specialise dans un secteur</strong> — l'immobilier. Il comprend les besoins specifiques des agents immo (descriptions de biens, visuels, gestion de leads). Du coup, chaque nouveau client immo est plus facile a convaincre parce que Karim parle leur langage et a des exemples concrets dans leur domaine. C'est ce qu'on appelle la <strong>niche</strong>, et c'est un accelerateur enorme.</p>" },
      { id: "1-9", type: "callout", variant: "tip", html: "<strong>Le point commun ?</strong> Aucun d'entre eux n'etait developpeur. Ils ont appris a utiliser les bons outils au bon moment." },
      { id: "1-23", type: "separator", style: "dots" },
      { id: "1-24", type: "heading", level: 2, text: "Le probleme des PME (et pourquoi c'est ta chance)" },
      { id: "1-25", type: "text", html: "<p>Les grandes entreprises (Google, Amazon, etc.) ont des equipes IA entieres. Mais les <strong>PME et TPE</strong> — qui representent 99% des entreprises en France — sont completement largues. Elles savent que l'IA existe, elles voient leurs concurrents s'y mettre, mais elles n'ont ni le budget pour un developpeur a 60K€/an, ni les competences internes pour gerer un projet IA.</p><p>C'est exactement la que tu interviens. Tu es le <strong>traducteur entre l'IA et les petites entreprises</strong>. Tu comprends leurs problemes, tu connais les outils, et tu livres des solutions concretes a un prix accessible.</p>" },
      { id: "1-26", type: "comparison", headers: ["Ce que les PME pensent", "La realite"], rows: [
        { cells: ["\"L'IA c'est trop complique pour nous\"", "Un chatbot se met en place en quelques jours, pas en 6 mois"] },
        { cells: ["\"Ca coute trop cher\"", "Un projet IA coute 500-3000€, pas 50 000€"] },
        { cells: ["\"On n'a pas les competences\"", "C'est pour ca qu'ils ont besoin de TOI"] },
        { cells: ["\"C'est pour les grosses boites\"", "Les outils actuels sont accessibles a toutes les tailles d'entreprise"] }
      ]},
      { id: "1-10", type: "separator", style: "line" },
      { id: "1-11", type: "heading", level: 2, text: "Pourquoi maintenant" },
      { id: "1-12", type: "text", html: "<p><strong>Moins de 20% des PME</strong> utilisent l'IA concretement. Les 80% restants savent qu'ils doivent s'y mettre mais ne savent pas par ou commencer.</p><p>Les outils (Claude Code, Cursor...) sont devenus assez puissants pour creer des solutions pro <strong>sans etre developpeur</strong>. C'est la fenetre parfaite : la demande explose, l'offre ne suit pas.</p>" },
      { id: "1-27", type: "heading", level: 3, text: "La fenetre d'opportunite" },
      { id: "1-28", type: "text", html: "<p>En ce moment, on est dans une <strong>fenetre d'opportunite rare</strong>. Voici pourquoi :</p><ul><li><strong>2023-2024 :</strong> Les outils IA sont arrives mais etaient encore techniques. Seuls les developpeurs pouvaient les utiliser.</li><li><strong>2025-2026 :</strong> Les outils sont devenus accessibles a tous (vibe coding, no-code). La demande des entreprises explose. Mais tres peu de gens se sont positionnes comme prestataires.</li><li><strong>2027+ :</strong> Le marche va se consolider. Les prix vont baisser, la concurrence va augmenter. Ceux qui se sont lances maintenant auront un avantage enorme (experience, portfolio, reseau).</li></ul><p>Tu es au <strong>bon moment</strong>. Dans 2 ans, tu seras content d'avoir commence aujourd'hui.</p>" },
      { id: "1-29", type: "callout", variant: "warning", html: "<strong>Attention :</strong> \"Le bon moment\" ne veut pas dire \"facile\". Tu vas devoir bosser, apprendre, et perseverer. Mais le ratio effort/recompense n'a jamais ete aussi favorable qu'aujourd'hui pour lancer une activite IA." },
      { id: "1-13", type: "comparison", headers: ["Ce que les clients achetent", "Prix moyen"], rows: [
        { cells: ["Chatbot IA (FAQ, prise de RDV)", "500 a 3 000€"] },
        { cells: ["Site web propulse par l'IA", "1 000 a 5 000€"] },
        { cells: ["Automatisations business", "500 a 2 000€"] },
        { cells: ["Agent vocal IA", "1 500 a 5 000€"] }
      ]},
      { id: "1-30", type: "heading", level: 3, text: "Le calcul simple" },
      { id: "1-31", type: "text", html: "<p>Faisons un calcul concret. Disons que tu fais des chatbots a 1 500€ en moyenne :</p><ul><li><strong>1 client par mois :</strong> 1 500€/mois — c'est deja un bon complement de revenu</li><li><strong>2 clients par mois :</strong> 3 000€/mois — tu remplaces un salaire moyen</li><li><strong>3 clients par mois :</strong> 4 500€/mois — tu es au-dessus de la moyenne nationale</li><li><strong>4+ clients par mois :</strong> 6 000€+ — tu commences a tres bien vivre de ton activite</li></ul><p>Et ca, c'est <strong>sans compter les forfaits de maintenance</strong> (50-200€/mois par client) qui s'accumulent et creent du revenu recurrent. Apres 10 clients, tu as potentiellement 1 000-2 000€/mois en recurring.</p>" },
      { id: "1-14", type: "callout", variant: "info", html: "<strong>2-3 projets par mois a 1 000-2 000€ chacun = 2 000 a 6 000€/mois.</strong> Et ca, c'est le debut." },
      { id: "1-32", type: "separator", style: "dots" },
      { id: "1-33", type: "heading", level: 3, text: "Les secteurs les plus demandeurs" },
      { id: "1-34", type: "text", html: "<p>Tous les secteurs ont besoin d'IA, mais certains sont particulierement receptifs :</p>" },
      { id: "1-35", type: "comparison", headers: ["Secteur", "Besoin principal", "Budget moyen"], rows: [
        { cells: ["Immobilier", "Descriptions de biens, chatbot de qualification", "1 500 - 4 000€"] },
        { cells: ["Restauration", "Chatbot reservations, menu digital", "500 - 2 000€"] },
        { cells: ["E-commerce", "Chatbot SAV, descriptions produits, emailing IA", "1 000 - 3 000€"] },
        { cells: ["Sante/Bien-etre", "Prise de RDV, FAQ patients, rappels", "1 000 - 3 000€"] },
        { cells: ["Services (avocats, comptables)", "Qualification de leads, automatisation docs", "2 000 - 5 000€"] }
      ]},
      { id: "1-36", type: "callout", variant: "tip", html: "<strong>Conseil strategique :</strong> Choisis un secteur qui te parle. Si tu connais l'immobilier, cible l'immobilier. Si tu es passione de fitness, cible les coachs sportifs. Ta connaissance du secteur est un avantage enorme quand tu parles a des prospects." }
    ]),
    exercise: "<h3>Exercice</h3><p>Pense a 3 entreprises ou personnes dans ton entourage qui galerent avec des taches repetitives, qui repondent aux memes questions toute la journee, ou qui ont un site web basique. Note leurs noms — ce sont tes futurs premiers clients.</p>",
    quiz: [
      { type: "mcq", question: "Quel pourcentage des PME utilise concretement l'IA en 2026 ?", options: JSON.stringify(["Plus de 80%", "Environ 50%", "Moins de 20%", "Moins de 5%"]), correctAnswer: "Moins de 20%", explanation: "Moins de 20% des PME utilisent l'IA concretement. C'est une opportunite massive." },
      { type: "true_false", question: "Il faut etre developpeur pour vendre des services IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Thomas, Sarah et Karim n'etaient pas developpeurs. Les outils actuels permettent de creer des solutions pro sans coder." },
      { type: "mcq", question: "Combien peut gagner un freelance IA avec 2-3 projets par mois ?", options: JSON.stringify(["200 a 500€", "2 000 a 6 000€", "20 000 a 50 000€", "Rien au debut"]), correctAnswer: "2 000 a 6 000€", explanation: "2 a 3 projets a 1 000-2 000€ chacun = 2 000 a 6 000€ par mois." }
    ],
  },

  // ─── LEÇON 2 — LE VIBE CODING ───
  {
    order: 3,
    module: 1,
    title: "Le vibe coding : installe Claude Code et cree sans savoir coder",
    slug: "v2-vibe-coding-cree-sans-coder",
    duration: "20 min",
    description: "C'est quoi le vibe coding, pourquoi Claude Code change tout, et on l'installe ensemble pas a pas pour que tu sois pret a creer.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Tu n'as pas besoin de savoir coder" },
      { id: "2-2", type: "text", html: "<p>Si tu penses que creer des sites, des chatbots ou des automatisations necessite des annees d'etudes en informatique — <strong>oublie tout</strong>. Le game a change.</p><p>En 2026, on ne code plus comme avant. On <strong>vibe code</strong>. Tu decris ce que tu veux en francais, et l'IA le construit pour toi.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Vibe coding :</strong> Tu parles a l'IA comme a un developpeur senior. Tu lui dis ce que tu veux, elle code. Tu verifies, tu ajustes, tu livres." },
      { id: "2-20", type: "heading", level: 3, text: "D'ou vient le terme ?" },
      { id: "2-21", type: "text", html: "<p>Le terme \"vibe coding\" a ete popularise par <strong>Andrej Karpathy</strong>, un des fondateurs d'OpenAI et ancien directeur IA chez Tesla. L'idee est simple : au lieu d'ecrire du code ligne par ligne, tu <strong>decris l'ambiance</strong> (le \"vibe\") de ce que tu veux creer, et l'IA s'occupe de l'implementation.</p><p>En pratique, ca veut dire que tu te concentres sur le <strong>quoi</strong> (\"je veux un formulaire de contact avec un design moderne\") et l'IA gere le <strong>comment</strong> (le HTML, le CSS, le JavaScript). Ton role passe de \"celui qui tape du code\" a \"celui qui donne la vision et valide le resultat\".</p>" },
      { id: "2-22", type: "callout", variant: "info", html: "<strong>Analogie :</strong> C'est comme un architecte qui fait les plans et un ouvrier qui construit. Tu es l'architecte — tu decides du design, des fonctionnalites, de l'experience utilisateur. L'IA est l'ouvrier — elle execute. Tu n'as pas besoin de savoir poser des briques pour concevoir une maison." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Claude Code : ton arme secrete" },
      { id: "2-6", type: "text", html: "<p>Dans cette formation, on utilise principalement <strong>Claude Code</strong>. Pourquoi pas ChatGPT ? Parce que Claude Code est specialement concu pour :</p><ul><li><strong>Generer du code de qualite</strong> — pas du code bricole, du vrai code pro</li><li><strong>Comprendre des projets entiers</strong> — il voit tous tes fichiers, pas juste un bout de code</li><li><strong>Executer des commandes</strong> — il peut lancer, tester et deployer directement depuis ton terminal</li><li><strong>Travailler sur de gros projets</strong> — 200K tokens de contexte, il oublie rien</li></ul>" },
      { id: "2-23", type: "heading", level: 3, text: "Les erreurs classiques des debutants en vibe coding" },
      { id: "2-24", type: "comparison", headers: ["Erreur", "Pourquoi c'est un probleme", "La solution"], rows: [
        { cells: ["Prompt trop vague : \"Fais-moi un site\"", "L'IA ne sait pas ce que tu veux. Le resultat sera generique.", "Sois precis : \"Cree un site vitrine pour un plombier a Marseille avec 5 sections\""] },
        { cells: ["Tout demander d'un coup", "L'IA perd le fil sur les prompts trop longs et complexes", "Decoupe en etapes : d'abord la structure, puis le design, puis le contenu"] },
        { cells: ["Ne pas verifier le code", "Le code peut avoir des bugs ou ne pas correspondre a ce que tu veux", "Teste toujours le resultat dans ton navigateur avant de continuer"] },
        { cells: ["Abandonner au premier bug", "Les bugs font partie du process. Meme les devs seniors en ont.", "Copie l'erreur et demande a l'IA de la corriger. 90% des bugs se resolvent en 1 prompt."] }
      ]},
      { id: "2-7", type: "text", html: "<p>Concretement, voila ce que ca donne :</p><p><em>Toi : \"Cree-moi un site vitrine pour un restaurant avec une page d'accueil, un menu, et un formulaire de reservation\"</em></p><p><em>Claude Code : *genere l'integralite du site en 2 minutes*</em></p><p>C'est pas de la magie. C'est un outil que tu apprends a maitriser. Et une fois que tu le maitrises, tu peux creer en quelques heures ce qui prenait des semaines avant.</p>" },
      { id: "2-25", type: "heading", level: 3, text: "Combien ca coute ?" },
      { id: "2-26", type: "text", html: "<p>Question legitime. Voici les couts reels :</p><ul><li><strong>Claude Code API :</strong> Environ 5-15€ par projet (variable selon la complexite). Un projet de site vitrine coute en general moins de 10€ en tokens.</li><li><strong>Claude Pro (abonnement) :</strong> 20$/mois pour un acces illimite a Claude sur claude.ai + un bon quota pour Claude Code. C'est le meilleur deal si tu fais plusieurs projets.</li><li><strong>Hebergement (Vercel, Netlify) :</strong> Gratuit pour les petits projets, 20$/mois pour des projets pro</li></ul><p>Au total, ton <strong>cout de fonctionnement est de 20-50€/mois</strong>. Quand tu factures 1 000€+ par projet, la marge est enorme. C'est un business avec un cout de demarrage quasi nul.</p>" },
      { id: "2-27", type: "callout", variant: "tip", html: "<strong>Astuce budget :</strong> Commence avec le credit gratuit (5$) d'Anthropic pour tester. Si tu accroches, prends Claude Pro a 20$/mois. Tu rentabiliseras cet investissement des ton premier projet client." },
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Installe Claude Code maintenant" },
      { id: "2-9b", type: "text", html: "<p>On ne va pas attendre 3 modules pour installer ton outil principal. On le fait <strong>maintenant</strong>. C'est 5 minutes.</p>" },
      { id: "2-9c", type: "steps", steps: [
        { title: "1. Installe Node.js", description: "Va sur nodejs.org et telecharge la version LTS. Installe-la en suivant les instructions. Verifie dans ton terminal avec : node --version" },
        { title: "2. Installe Claude Code", description: "Dans ton terminal, tape : npm install -g @anthropic-ai/claude-code — ca installe Claude Code sur ton ordinateur." },
        { title: "3. Configure ta cle API", description: "Va sur console.anthropic.com, cree un compte, et genere une cle API. Claude Code te la demandera au premier lancement. Le credit de depart (5$) suffit largement pour commencer." },
        { title: "4. Teste-le", description: "Cree un dossier : mkdir mon-premier-projet && cd mon-premier-projet. Puis tape : claude. C'est tout. Tu es pret a vibe coder." }
      ]},
      { id: "2-28", type: "heading", level: 3, text: "Si ca ne marche pas : les problemes courants" },
      { id: "2-29", type: "comparison", headers: ["Probleme", "Solution"], rows: [
        { cells: ["\"node n'est pas reconnu comme commande\"", "Node.js n'est pas installe correctement. Redemarre ton terminal apres l'installation, ou reinstalle Node.js."] },
        { cells: ["\"npm ERR! permission denied\"", "Sur Mac/Linux, ajoute sudo devant la commande : sudo npm install -g @anthropic-ai/claude-code"] },
        { cells: ["\"Invalid API key\"", "Verifie que tu as bien copie la cle API en entier depuis console.anthropic.com. Pas d'espace avant ou apres."] },
        { cells: ["\"command not found: claude\"", "Ferme et rouvre ton terminal. Si ca persiste, verifie que npm est dans ton PATH."] }
      ]},
      { id: "2-9d", type: "callout", variant: "info", html: "<strong>Pas de panique :</strong> Si tu galeres sur une etape, c'est normal. Demande a Claude sur claude.ai de t'aider a resoudre ton probleme d'installation — c'est ironiquement la meilleure facon d'apprendre." },
      { id: "2-10a", type: "separator", style: "dots" },
      { id: "2-10b", type: "heading", level: 2, text: "Ce que tu pourras construire" },
      { id: "2-10", type: "steps", steps: [
        { title: "Des sites web professionnels", description: "Sites vitrines, landing pages, e-commerce — avec des fonctionnalites IA integrees (chatbot, recommandations, generation de contenu)." },
        { title: "Des chatbots intelligents", description: "Connectes aux donnees de ton client. Ils repondent aux questions, prennent des RDV, qualifient des leads — 24h/24." },
        { title: "Des automatisations completes", description: "Emails automatiques, CRM connecte, facturation, reporting — tout ce qui fait perdre du temps a tes clients." },
        { title: "Des agents vocaux IA", description: "Des assistants telephoniques qui repondent aux appels, prennent des messages, et transferent les urgences." }
      ]},
      { id: "2-30", type: "heading", level: 3, text: "Un exemple concret de projet client" },
      { id: "2-31", type: "text", html: "<p>Imaginons un scenario reel. Un <strong>coach sportif</strong> te contacte. Il veut :</p><ul><li>Un site web avec ses programmes et ses tarifs</li><li>Un chatbot qui repond aux questions des prospects (\"c'est combien ?\", \"tu prends les debutants ?\")</li><li>Un formulaire intelligent qui qualifie les prospects et envoie les infos dans son CRM</li></ul><p>Avec le vibe coding, tu peux creer tout ca en <strong>2-3 jours</strong>. Tu factures <strong>2 000-3 000€</strong>. Le coach est content parce qu'il a gagne des heures par semaine. Toi tu es content parce que tu as un projet en portfolio et un client qui te recommande.</p><p>C'est ca le business model. Simple, concret, reproductible.</p>" },
      { id: "2-11", type: "callout", variant: "info", html: "<strong>Tout ca sans ecrire une seule ligne de code toi-meme.</strong> L'IA code pour toi. Ton job c'est de savoir quoi lui demander et comment livrer le resultat a ton client." }
    ]),
    exercise: "<h3>Exercice : Installe Claude Code et fais ton premier test</h3><ol><li>Installe Node.js depuis <a href='https://nodejs.org' target='_blank'>nodejs.org</a> (version LTS). Verifie avec : <code>node --version</code></li><li>Installe Claude Code : <code>npm install -g @anthropic-ai/claude-code</code></li><li>Cree un dossier de test : <code>mkdir test-ia && cd test-ia</code></li><li>Lance Claude Code : <code>claude</code></li><li>Demande-lui : <em>\"Cree une page HTML avec un titre 'Mon premier projet IA', un design moderne avec fond sombre, et un paragraphe qui explique ce que je fais.\"</em></li><li>Ouvre le fichier dans ton navigateur. <strong>Tu viens de vibe coder.</strong></li></ol>",
    quiz: [
      { type: "mcq", question: "C'est quoi le vibe coding ?", options: JSON.stringify(["Coder en ecoutant de la musique", "Decrire ce qu'on veut a l'IA et elle code pour toi", "Copier-coller du code depuis internet", "Un nouveau langage de programmation"]), correctAnswer: "Decrire ce qu'on veut a l'IA et elle code pour toi", explanation: "Le vibe coding c'est decrire en langage naturel ce que tu veux, et l'IA genere le code. Tu guides, elle construit." },
      { type: "true_false", question: "Claude Code peut comprendre et travailler sur un projet entier, pas juste un bout de code.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Avec 200K tokens de contexte, Claude Code voit tous les fichiers de ton projet et comprend l'architecture complete." },
      { type: "mcq", question: "Quel est TON role dans le vibe coding ?", options: JSON.stringify(["Ecrire chaque ligne de code", "Savoir quoi demander a l'IA et livrer le resultat au client", "Juste appuyer sur un bouton", "Rien, l'IA fait tout"]), correctAnswer: "Savoir quoi demander a l'IA et livrer le resultat au client", explanation: "Ton role c'est de comprendre le besoin du client, donner les bonnes instructions a l'IA, et livrer un produit pro." }
    ],
  },

  // ─── LEÇON 3 — TON PREMIER PROJET ───
  {
    order: 4,
    module: 1,
    title: "Ton premier projet en 10 minutes",
    slug: "v2-premier-projet-10-minutes",
    duration: "15 min",
    description: "Tu ouvres Claude, tu suis les etapes, et tu crees un vrai prototype. Ton moment \"putain ca marche\".",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Assez parle — on passe a l'action" },
      { id: "3-2", type: "text", html: "<p>Tu as compris le marche, tu as compris les outils. Maintenant tu vas <strong>faire</strong>. En 10 minutes, tu auras cree un prototype de chatbot que tu pourrais montrer a un vrai client.</p>" },
      { id: "3-20", type: "text", html: "<p>Ce premier projet est important. Pas parce qu'il sera parfait — il ne le sera pas. Mais parce qu'il va te donner la <strong>confiance</strong> que c'est possible. Beaucoup de gens restent bloques a l'etape \"je me renseigne\" pendant des mois. Toi, tu vas avoir un resultat tangible dans 10 minutes. C'est ca qui fait la difference entre ceux qui revent et ceux qui font.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Pre-requis :</strong> Ouvre <a href='https://claude.ai' target='_blank'>claude.ai</a> dans un autre onglet. Un compte gratuit suffit." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Le scenario : un restaurateur te contacte" },
      { id: "3-6", type: "text", html: "<p>Imagine : un restaurateur en a marre de repondre aux memes questions par telephone — horaires, menu, reservations. Il veut un chatbot sur son site. Tu vas lui montrer ce que l'IA peut faire en <strong>5 minutes</strong>.</p>" },
      { id: "3-21", type: "heading", level: 3, text: "Pourquoi un restaurant ?" },
      { id: "3-22", type: "text", html: "<p>Les restaurants sont le <strong>client ideal pour debuter</strong>. Pourquoi ?</p><ul><li><strong>Probleme evident :</strong> Ils recoivent des dizaines d'appels par jour pour les memes questions (horaires, menu, reservations)</li><li><strong>Budget accessible :</strong> Un chatbot a 500-1500€ est dans leur budget</li><li><strong>ROI immediat :</strong> Moins de temps au telephone = plus de temps en cuisine = plus de couverts</li><li><strong>Il y en a partout :</strong> Quel que soit ta ville, il y a des dizaines de restaurants autour de toi</li><li><strong>Referencabilite :</strong> Un restaurateur content en parle a 3 autres restaurateurs</li></ul>" },
      { id: "3-23", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Quand tu fais ce prototype, imagine vraiment que tu le presentes a un restaurateur. Mets les bonnes infos, le bon ton. Plus c'est realiste, plus tu seras pret pour un vrai client." },
      { id: "3-7", type: "heading", level: 2, text: "Etape 1 : Copie ce prompt dans Claude" },
      { id: "3-8", type: "callout", variant: "tip", html: "<strong>Prompt a copier :</strong><br/><br/>\"Tu es l'assistant virtuel du restaurant Le Petit Bistrot a Lyon. Voici les infos :<br/>- Ouvert du mardi au samedi, 12h-14h et 19h-22h<br/>- Menu du jour a 16€ (entree + plat), carte complete de 25 a 45€<br/>- Terrasse disponible en ete, 40 couverts interieur<br/>- Reservation par telephone au 04 78 XX XX XX ou en ligne<br/>- Specialites : cuisine lyonnaise moderne, produits frais et locaux<br/>- Allergenes : demander au serveur, options vegetariennes disponibles<br/><br/>Reponds aux questions des clients de facon chaleureuse et professionnelle. Sois concis.\"" },
      { id: "3-24", type: "heading", level: 3, text: "Pourquoi ce prompt marche si bien" },
      { id: "3-25", type: "text", html: "<p>Decomposons ce prompt pour comprendre pourquoi il est efficace :</p><ul><li><strong>Role clair :</strong> \"Tu es l'assistant virtuel du restaurant\" — l'IA sait exactement quel personnage adopter</li><li><strong>Contexte riche :</strong> Horaires, prix, capacite, specialites — toutes les infos dont un client pourrait avoir besoin</li><li><strong>Ton defini :</strong> \"Chaleureuse et professionnelle\" — ca guide le style de communication</li><li><strong>Contrainte utile :</strong> \"Sois concis\" — les clients veulent des reponses rapides, pas des romans</li></ul><p>Tu appliques deja les bases du prompting sans le savoir. C'est exactement ce qu'on approfondira dans le module prompting.</p>" },
      { id: "3-9", type: "heading", level: 2, text: "Etape 2 : Teste-le comme un client" },
      { id: "3-10", type: "text", html: "<p>Pose-lui des questions :</p><ul><li>\"Vous etes ouvert le lundi ?\"</li><li>\"C'est combien le menu ?\"</li><li>\"J'ai une allergie au gluten, c'est possible ?\"</li><li>\"Je voudrais reserver pour 6 personnes samedi soir\"</li></ul><p><strong>En 2 minutes, tu viens de creer un prototype de chatbot.</strong></p>" },
      { id: "3-26", type: "heading", level: 3, text: "Teste aussi les limites" },
      { id: "3-27", type: "text", html: "<p>Un bon prestataire connait aussi les <strong>limites</strong> de son produit. Teste ces questions pieges :</p><ul><li>\"Vous livrez a domicile ?\" — Le chatbot ne sait pas, il doit l'admettre</li><li>\"Quel est le plat du jour aujourd'hui ?\" — Il n'a pas cette info en temps reel</li><li>\"Je veux annuler ma reservation du 15 mars\" — Il ne peut pas acceder au systeme de reservation</li></ul><p>Ces limites ne sont pas un probleme — c'est <strong>exactement</strong> ce que tu expliques au client. Un chatbot de base gere les questions frequentes. Un chatbot connecte (que tu apprendras a creer plus tard) gere aussi les reservations et le temps reel. La version connectee se facture plus cher.</p>" },
      { id: "3-28", type: "callout", variant: "warning", html: "<strong>Erreur de debutant :</strong> Promettre au client que le chatbot peut tout faire. Sois transparent sur ce que le chatbot gere et ce qu'il ne gere pas. La confiance est ta meilleure arme commerciale." },
      { id: "3-11", type: "separator", style: "line" },
      { id: "3-12", type: "heading", level: 2, text: "Ce que tu viens de faire" },
      { id: "3-13", type: "text", html: "<p>Tu as simule un chatbot client en quelques minutes. Imagine maintenant ce chatbot :</p><ul><li><strong>Integre sur le site</strong> du restaurant</li><li>Qui repond <strong>24h/24</strong> aux clients</li><li>Qui prend <strong>des reservations automatiquement</strong></li><li>Connecte au <strong>systeme de reservation</strong> du resto</li></ul><p>Ca, c'est ce que tu apprendras a construire et deployer dans les modules suivants. Ce que tu as fait la, c'est la surface — le vrai pouvoir, c'est quand tu sais <strong>livrer ca a un client pour 800 a 3 000€</strong>.</p>" },
      { id: "3-29", type: "heading", level: 3, text: "La technique de la demo en 5 minutes" },
      { id: "3-30", type: "text", html: "<p>Ce que tu viens de faire, c'est exactement la <strong>technique de la demo</strong> que tu utiliseras pour convaincre tes futurs clients. Voici comment ca marche en situation reelle :</p>" },
      { id: "3-31", type: "steps", steps: [
        { title: "Avant le rendez-vous", description: "Tu prepares un prompt avec les infos reelles du prospect (tu les trouves sur son site web, Google Maps, ses reseaux sociaux). 5 minutes de preparation." },
        { title: "Pendant le rendez-vous", description: "Tu ouvres Claude sur ton ordi ou ton telephone. Tu montres le chatbot en action avec SES infos, SON ton, SES questions frequentes. Le prospect voit concretement ce que l'IA peut faire pour LUI." },
        { title: "L'effet wow", description: "Le prospect est impressionne parce que c'est personnalise pour son business. Il se dit : \"Si en 5 minutes il fait ca, imagine en une semaine\". C'est la que tu closes." },
        { title: "Tu proposes la suite", description: "\"Ca c'est juste un prototype. La version finale sera integree a votre site, connectee a votre systeme de reservation, et accessible 24h/24. Devis : X euros.\"" }
      ]},
      { id: "3-32", type: "callout", variant: "tip", html: "<strong>Cette technique a un taux de conversion enorme.</strong> Quand un prospect voit son business dans l'IA en temps reel, il passe de \"c'est interessant\" a \"on fait ca quand ?\". C'est la difference entre vendre un concept et montrer un resultat." },
      { id: "3-14", type: "callout", variant: "info", html: "<strong>Tu viens de creer ton premier prototype. Garde ce reflexe : chaque fois que tu vois un business, demande-toi \"qu'est-ce que l'IA pourrait automatiser ici ?\".</strong>" }
    ]),
    exercise: "<h3>Exercice : Cree ton propre scenario</h3><p>Reprends le meme principe pour un business different :</p><ul><li>Un coach sportif qui veut repondre aux questions sur ses programmes</li><li>Un agent immobilier qui veut qualifier ses prospects</li><li>Un e-commerce qui veut aider les clients a choisir</li></ul><p>Ecris le prompt toi-meme en t'inspirant du modele. Teste-le dans Claude. C'est addictif.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'on vient de creer avec Claude ?", options: JSON.stringify(["Un site web complet", "Un prototype de chatbot client", "Une base de donnees", "Une application mobile"]), correctAnswer: "Un prototype de chatbot client", explanation: "On a cree un prototype de chatbot qui repond aux questions des clients — en quelques minutes." },
      { type: "true_false", question: "Ce prototype suffit pour impressionner un client potentiel lors d'une demo.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un bon prompt permet de creer une demo convaincante en quelques minutes. C'est ce qui convainc un client de travailler avec toi." },
      { type: "mcq", question: "Combien peut-on facturer un chatbot deploye sur le site d'un client ?", options: JSON.stringify(["50 a 100€", "800 a 3 000€", "50 000€ minimum", "C'est toujours gratuit"]), correctAnswer: "800 a 3 000€", explanation: "Un chatbot IA deploye et connecte aux donnees du client se facture entre 800 et 3 000€." }
    ],
  },
];
