// ═══════════════════════════════════════════════════
// MODULE 1 — Bienvenue & Objectif
// 3 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_01_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 1,
    title: "Ce que tu vas apprendre et comment la formation fonctionne",
    slug: "v2-bienvenue-ce-que-tu-vas-apprendre",
    duration: "15 min",
    description: "Présentation complète de la formation : les compétences que tu vas acquérir, la méthode pédagogique, et comment tirer le maximum de chaque module.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Bienvenue dans la formation OpexIA" },
      { id: "1-2", type: "text", html: "<p>Tu as pris une décision importante en rejoignant cette formation. Pendant les prochaines semaines, tu vas passer de <strong>débutant complet</strong> à <strong>professionnel capable de vendre des services IA</strong>. Pas de blabla théorique inutile : chaque leçon est conçue pour te donner des compétences concrètes et actionnables.</p><p>Cette formation suit une logique progressive. Tu commences par comprendre les outils, puis tu apprends à les maîtriser, et enfin tu construis des projets réels que tu pourras vendre. Chaque module s'appuie sur le précédent.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Conseil :</strong> Ne saute pas de leçons. Même si tu penses déjà connaître un sujet, chaque leçon contient des nuances et des techniques spécifiques à notre méthode. Suis le parcours dans l'ordre." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Les compétences que tu vas acquérir" },
      { id: "1-6", type: "steps", steps: [
        { title: "Maîtriser les IA génératives", description: "Tu sauras utiliser ChatGPT, Claude, Gemini et choisir le bon outil selon la tâche. Tu comprendras leurs forces et leurs limites." },
        { title: "Écrire des prompts professionnels", description: "Le prompting est LA compétence clé. Tu apprendras à obtenir exactement ce que tu veux de l'IA, à chaque fois." },
        { title: "Coder avec l'IA", description: "Même sans background technique, tu apprendras à utiliser Claude Code et Cursor pour créer des sites, des apps et des automatisations." },
        { title: "Créer des automatisations", description: "Tu maîtriseras n8n et Make pour connecter des outils et automatiser des workflows complexes pour tes clients." },
        { title: "Construire des chatbots IA", description: "Tu sauras créer des chatbots intelligents connectés aux données de tes clients, prêts à être déployés." },
        { title: "Vendre tes services", description: "Tu apprendras à trouver des clients, faire des propositions commerciales, et facturer entre 500 et 5000 euros par projet." }
      ]},
      { id: "1-7", type: "separator", style: "line" },
      { id: "1-8", type: "heading", level: 2, text: "Comment la formation est organisée" },
      { id: "1-9", type: "comparison", headers: ["Élément", "Détail"], rows: [
        { cells: ["Leçons vidéo + texte", "Chaque concept est expliqué pas à pas avec des exemples concrets"] },
        { cells: ["Exercices pratiques", "À la fin de chaque leçon, un exercice pour appliquer immédiatement"] },
        { cells: ["Quiz de validation", "Des quiz pour vérifier que tu as bien compris avant de passer à la suite"] },
        { cells: ["Ateliers guidés", "Des sessions où tu construis un vrai projet de A à Z"] },
        { cells: ["Communauté", "Un espace pour poser tes questions et partager tes avancées"] }
      ]},
      { id: "1-10", type: "callout", variant: "info", html: "<strong>Rythme recommandé :</strong> 1 à 2 leçons par jour, 5 jours par semaine. À ce rythme, tu peux terminer la formation en 4 à 6 semaines et commencer à vendre tes premiers services." },
      { id: "1-11", type: "heading", level: 2, text: "Les règles d'or pour réussir" },
      { id: "1-12", type: "checklist", title: "Tes engagements pour cette formation", items: [
        { id: "c1", text: "Je suis chaque leçon dans l'ordre, sans sauter d'étapes" },
        { id: "c2", text: "Je fais les exercices pratiques à chaque fois — c'est là que l'apprentissage se fait" },
        { id: "c3", text: "Je prends des notes et je crée mes propres templates de prompts" },
        { id: "c4", text: "Je pose mes questions dans la communauté quand je bloque" },
        { id: "c5", text: "Je me fixe un objectif de date pour mon premier client" }
      ]}
    ]),
    exercise: "<h3>Exercice : Prépare ton espace de travail</h3><p>Avant de commencer, mets en place ton environnement :</p><ol><li>Crée un dossier \"Formation OpexIA\" sur ton ordinateur — tu y rangeras tous tes projets</li><li>Crée un document \"Journal de formation\" (Google Docs, Notion ou autre) où tu noteras tes apprentissages clés</li><li>Crée un compte sur <strong>claude.ai</strong> si ce n'est pas déjà fait (gratuit pour commencer)</li><li>Crée un compte sur <strong>chat.openai.com</strong> (ChatGPT gratuit)</li><li>Note dans ton journal : \"Mon objectif avec cette formation est de...\" et complète avec tes propres mots</li></ol><p>Ce setup te prendra 10 minutes et te fera gagner un temps précieux par la suite.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le rythme recommandé pour suivre la formation ?", options: JSON.stringify(["1 leçon par semaine", "1 à 2 leçons par jour, 5 jours par semaine", "Tout faire en un week-end", "3 leçons par mois"]), correctAnswer: "1 à 2 leçons par jour, 5 jours par semaine", explanation: "Le rythme recommandé est de 1 à 2 leçons par jour, 5 jours par semaine. À ce rythme, tu peux terminer la formation en 4 à 6 semaines." },
      { type: "true_false", question: "Il est conseillé de sauter les leçons dont on pense déjà connaître le sujet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, il est recommandé de suivre chaque leçon dans l'ordre. Même sur des sujets familiers, chaque leçon contient des techniques spécifiques à la méthode enseignée." },
      { type: "mcq", question: "Quelle fourchette de prix est visée pour les services IA que tu pourras vendre ?", options: JSON.stringify(["50 à 100 euros", "500 à 5000 euros", "10 000 à 50 000 euros", "Gratuit pour se faire un portfolio"]), correctAnswer: "500 à 5000 euros", explanation: "L'objectif est de vendre des services IA entre 500 et 5000 euros par projet : chatbots, automatisations, sites web, agents IA." },
      { type: "true_false", question: "Il faut un background technique ou un diplôme en informatique pour réussir cette formation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Aucun background technique n'est requis. La formation est conçue pour les débutants complets et t'apprend à coder avec l'IA sans expérience préalable." },
      { type: "mcq", question: "Quel est l'élément le plus important pour progresser dans la formation ?", options: JSON.stringify(["Regarder les vidéos en vitesse x2", "Faire les exercices pratiques à chaque leçon", "Mémoriser les définitions", "Lire les leçons le plus vite possible"]), correctAnswer: "Faire les exercices pratiques à chaque leçon", explanation: "Les exercices pratiques sont là où l'apprentissage se fait réellement. C'est en pratiquant que tu intègres les compétences." }
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 1,
    title: "Le marché de l'IA en 2026 : les opportunités concrètes",
    slug: "v2-marche-ia-2026-opportunites",
    duration: "20 min",
    description: "Analyse du marché de l'IA en 2026 : les chiffres clés, les secteurs qui recrutent, les services les plus demandés, et pourquoi la fenêtre d'opportunité est maintenant.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "L'explosion du marché de l'IA en chiffres" },
      { id: "2-2", type: "text", html: "<p>Le marché de l'IA n'est plus une promesse futuriste — c'est une réalité économique massive. En 2026, le marché mondial de l'intelligence artificielle dépasse les <strong>400 milliards de dollars</strong>, avec une croissance annuelle de 35 à 40%. Mais le plus intéressant, c'est ce qui se passe au niveau des PME et des indépendants.</p><p>Les grandes entreprises ont leurs équipes IA internes. Mais les PME, les commerces, les professions libérales ? Ils savent qu'ils doivent adopter l'IA, mais ils ne savent pas comment. Ils n'ont pas le budget pour une ESN à 100K euros. Ils cherchent des prestataires accessibles, réactifs, qui comprennent leurs problèmes concrets. C'est exactement le créneau que tu vas occuper.</p>" },
      { id: "2-3", type: "comparison", headers: ["Indicateur", "Chiffre 2026"], rows: [
        { cells: ["Marché mondial de l'IA", "~420 milliards $ (estimation IDC)"] },
        { cells: ["Croissance annuelle", "+35 à 40%"] },
        { cells: ["Grandes entreprises utilisant l'IA", "80%+"] },
        { cells: ["PME utilisant l'IA concrètement", "Moins de 20%"] },
        { cells: ["Demande de freelances IA en France", "x3 en 2 ans (Malt, Upwork)"] },
        { cells: ["Tarif jour moyen consultant IA", "400 à 800 euros/jour"] }
      ]},
      { id: "2-4", type: "callout", variant: "warning", html: "<strong>L'écart PME / grandes entreprises :</strong> 80% des grandes entreprises utilisent l'IA, mais moins de 20% des PME. Cet écart représente un marché colossal pour des prestataires comme toi qui peuvent proposer des solutions accessibles." },
      { id: "2-5", type: "separator", style: "dots" },
      { id: "2-6", type: "heading", level: 2, text: "Les 5 services IA les plus demandés" },
      { id: "2-7", type: "steps", steps: [
        { title: "Chatbots IA personnalisés", description: "Les entreprises veulent un assistant virtuel qui répond aux questions 24/7 en connaissant leurs produits et services. Prix de vente : 1000 à 3000 euros." },
        { title: "Automatisations de workflows", description: "Connecter les outils existants (CRM, email, facturation) avec des workflows IA. Gain de temps énorme. Prix de vente : 500 à 2000 euros." },
        { title: "Création de contenu IA", description: "Articles de blog, posts réseaux sociaux, newsletters — le tout optimisé et adapté à la voix de la marque. Prix : 300 à 1500 euros/mois." },
        { title: "Sites web et landing pages", description: "Créer des sites professionnels rapidement avec l'IA. Rapide à produire, forte marge. Prix : 1000 à 5000 euros." },
        { title: "Agents IA spécialisés", description: "Des agents qui exécutent des tâches complexes : qualification de leads, analyse de documents, support technique. Prix : 2000 à 5000 euros." }
      ]},
      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Les secteurs qui ont le plus besoin de toi" },
      { id: "2-10", type: "comparison", headers: ["Secteur", "Besoin principal", "Potentiel"], rows: [
        { cells: ["Immobilier", "Chatbot de pré-qualification, génération d'annonces", "Très élevé"] },
        { cells: ["E-commerce", "Automatisation SAV, descriptions produits, relances", "Très élevé"] },
        { cells: ["Santé / Bien-être", "Prise de RDV intelligente, FAQ automatisée", "Élevé"] },
        { cells: ["Restauration", "Chatbot commandes, réponses avis Google", "Élevé"] },
        { cells: ["Professions libérales", "Rédaction de documents, automatisation admin", "Moyen-élevé"] },
        { cells: ["Artisans / BTP", "Devis automatisés, suivi client", "Moyen"] }
      ]},
      { id: "2-11", type: "callout", variant: "tip", html: "<strong>Stratégie gagnante :</strong> Choisis un ou deux secteurs et deviens l'expert IA de ce secteur. Un \"spécialiste IA pour l'immobilier\" se vend 3x mieux qu'un \"consultant IA généraliste\"." },
      { id: "2-12", type: "heading", level: 2, text: "Pourquoi la fenêtre est maintenant" },
      { id: "2-13", type: "text", html: "<p>En 2024, les outils IA étaient encore immatures pour une utilisation business fiable. En 2026, ils sont stables, puissants et accessibles. Mais dans 2 à 3 ans, le marché sera saturé de prestataires. Les clients fidèles auront déjà leur prestataire IA. Le moment idéal, c'est <strong>maintenant</strong> : les outils sont prêts, la demande explose, et la concurrence est encore faible.</p>" },
      { id: "2-14", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "Le marché de l'IA dépasse 400 milliards $ en 2026 avec +35% de croissance par an" },
        { id: "c2", text: "Moins de 20% des PME utilisent l'IA — c'est un marché massif et sous-exploité" },
        { id: "c3", text: "Les 5 services les plus demandés : chatbots, automatisations, contenu, sites web, agents IA" },
        { id: "c4", text: "Se spécialiser dans un secteur est plus rentable que rester généraliste" },
        { id: "c5", text: "La fenêtre d'opportunité est ouverte maintenant, avant la saturation du marché" }
      ]}
    ]),
    exercise: "<h3>Exercice : Identifie ton marché cible</h3><p>C'est le moment de réfléchir à ton positionnement :</p><ol><li>Choisis 2 secteurs qui t'intéressent parmi ceux listés (ou un autre secteur que tu connais bien)</li><li>Pour chaque secteur, identifie 3 entreprises locales ou en ligne que tu pourrais contacter</li><li>Pour chaque entreprise, note un problème concret que l'IA pourrait résoudre</li><li>Estime un prix que tu pourrais facturer pour résoudre ce problème (utilise les fourchettes de la leçon)</li><li>Calcule : si tu signes 2 clients par mois à ce prix, quel est ton revenu mensuel ?</li></ol><p>Note tout ça dans ton journal de formation. Tu affineras ce positionnement au fil des modules.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la taille estimée du marché mondial de l'IA en 2026 ?", options: JSON.stringify(["~50 milliards $", "~150 milliards $", "~420 milliards $", "~1000 milliards $"]), correctAnswer: "~420 milliards $", explanation: "Le marché mondial de l'IA est estimé à environ 420 milliards de dollars en 2026, avec une croissance annuelle de 35 à 40%." },
      { type: "true_false", question: "Plus de 50% des PME utilisent concrètement l'IA en 2026.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Moins de 20% des PME utilisent concrètement l'IA en 2026. C'est un marché massif et sous-exploité qui représente une opportunité pour les prestataires IA." },
      { type: "mcq", question: "Quel est le prix de vente typique d'un chatbot IA personnalisé ?", options: JSON.stringify(["50 à 100 euros", "1000 à 3000 euros", "10 000 à 20 000 euros", "100 à 300 euros"]), correctAnswer: "1000 à 3000 euros", explanation: "Un chatbot IA personnalisé se vend typiquement entre 1000 et 3000 euros. C'est un des services les plus demandés et rentables." },
      { type: "mcq", question: "Quelle stratégie est recommandée pour se positionner sur le marché IA ?", options: JSON.stringify(["Rester généraliste pour toucher le maximum de clients", "Se spécialiser dans un ou deux secteurs", "Ne travailler qu'avec les grandes entreprises", "Proposer uniquement des services gratuits pour commencer"]), correctAnswer: "Se spécialiser dans un ou deux secteurs", explanation: "Se spécialiser dans un ou deux secteurs permet de devenir l'expert IA de ce secteur. Un spécialiste se vend 3 fois mieux qu'un généraliste." },
      { type: "true_false", question: "Le marché de l'IA pour les PME est déjà saturé en 2026.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, le marché est encore en phase de croissance. La fenêtre d'opportunité est ouverte maintenant, avant la saturation prévue dans 2 à 3 ans." },
      { type: "mcq", question: "Quel est le tarif jour moyen d'un consultant IA freelance en France ?", options: JSON.stringify(["100 à 200 euros/jour", "400 à 800 euros/jour", "1000 à 2000 euros/jour", "50 à 100 euros/jour"]), correctAnswer: "400 à 800 euros/jour", explanation: "Le tarif jour moyen d'un consultant IA freelance en France se situe entre 400 et 800 euros par jour, selon l'expérience et la spécialisation." }
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 1,
    title: "Le parcours : de zéro à agence rentable — la roadmap",
    slug: "v2-parcours-zero-agence-roadmap",
    duration: "20 min",
    description: "La roadmap complète de la formation : chaque étape du parcours, ce que tu sais faire à chaque palier, et le plan d'action pour atteindre tes premiers revenus.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Ta roadmap de zéro à agence IA rentable" },
      { id: "3-2", type: "text", html: "<p>Cette formation n'est pas un cours théorique. C'est un <strong>plan d'action structuré</strong> qui t'emmène de \"je ne sais rien sur l'IA\" à \"je vends des services IA et je génère des revenus\". Chaque module représente un palier de compétences. Voici exactement ce que tu vas traverser et ce que tu sauras faire à chaque étape.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Logique de progression :</strong> Les modules 1 à 3 te donnent les fondations (comprendre et utiliser l'IA). Les modules 4 à 7 te donnent les compétences techniques (coder, automatiser, créer). Les modules 8+ te donnent les compétences business (vendre, scaler, fidéliser)." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Phase 1 : Les fondations (Modules 1-3)" },
      { id: "3-6", type: "steps", steps: [
        { title: "Module 1 — Bienvenue & Objectif", description: "Tu comprends le marché, les opportunités, et tu as une vision claire de ton parcours. Tu sais exactement où tu vas." },
        { title: "Module 2 — Découvrir les IA", description: "Tu maîtrises ChatGPT, Claude, Gemini. Tu sais quel outil utiliser pour quelle tâche. Tu n'es plus un simple utilisateur, tu es un praticien." },
        { title: "Module 3 — Apprendre à prompter", description: "Tu écris des prompts professionnels qui donnent des résultats précis et exploitables. C'est la compétence qui change tout." }
      ]},
      { id: "3-7", type: "heading", level: 2, text: "Phase 2 : Les compétences techniques (Modules 4-7)" },
      { id: "3-8", type: "steps", steps: [
        { title: "Module 4 — Les IDE IA", description: "Tu codes avec Claude Code et Cursor. Tu crées des sites, des apps, des scripts — même sans background technique." },
        { title: "Module 5 — Design avec l'IA", description: "Tu crées des maquettes, des logos, des visuels professionnels avec les outils IA de design." },
        { title: "Module 6 — Automatisations (n8n & Make)", description: "Tu construis des workflows automatisés qui connectent les outils de tes clients et leur font gagner des heures." },
        { title: "Module 7 — Chatbots IA", description: "Tu construis des chatbots intelligents connectés aux données, prêts à être déployés chez tes clients." }
      ]},
      { id: "3-9", type: "separator", style: "line" },
      { id: "3-10", type: "heading", level: 2, text: "Phase 3 : Le business (Modules 8+)" },
      { id: "3-11", type: "comparison", headers: ["Module", "Ce que tu apprends", "Résultat concret"], rows: [
        { cells: ["Trouver des clients", "Prospection, réseaux sociaux, bouche-à-oreille", "Tes 3 premiers prospects qualifiés"] },
        { cells: ["Vendre tes services", "Propositions commerciales, pricing, closing", "Ton premier contrat signé"] },
        { cells: ["Livrer et fidéliser", "Gestion de projet, livrables, suivi client", "Un client satisfait qui te recommande"] },
        { cells: ["Scaler ton activité", "Processus, templates, recrutement", "Une activité qui tourne sans toi 24/7"] }
      ]},
      { id: "3-12", type: "callout", variant: "tip", html: "<strong>Objectif réaliste :</strong> En suivant le parcours assidûment, tu peux signer ton premier client payant dans les 6 à 8 semaines après le début de la formation. Beaucoup de nos élèves y arrivent même plus tôt." },
      { id: "3-13", type: "heading", level: 2, text: "Ton plan d'action semaine par semaine" },
      { id: "3-14", type: "comparison", headers: ["Semaine", "Focus", "Objectif"], rows: [
        { cells: ["Semaines 1-2", "Modules 1-3 : Fondations + prompting", "Tu maîtrises les IA et tu sais prompter"] },
        { cells: ["Semaines 3-4", "Modules 4-5 : Code + design avec l'IA", "Tu as créé ton premier projet complet"] },
        { cells: ["Semaines 5-6", "Modules 6-7 : Automatisations + chatbots", "Tu as un portfolio de 3 projets"] },
        { cells: ["Semaines 7-8", "Modules 8+ : Business + prospection", "Tu as signé ton premier client"] }
      ]},
      { id: "3-15", type: "checklist", title: "Ce que tu retiens de cette leçon", items: [
        { id: "c1", text: "La formation suit 3 phases : fondations, compétences techniques, business" },
        { id: "c2", text: "Chaque module construit sur le précédent — pas de raccourci possible" },
        { id: "c3", text: "Objectif réaliste : premier client payant en 6 à 8 semaines" },
        { id: "c4", text: "Les compétences techniques sans le business ne servent à rien — et inversement" },
        { id: "c5", text: "Le plan d'action semaine par semaine donne un cadre clair à suivre" }
      ]}
    ]),
    exercise: "<h3>Exercice : Construis ta roadmap personnelle</h3><p>Adapte le plan d'action à ta situation :</p><ol><li>Ouvre ton journal de formation et crée une page \"Ma roadmap\"</li><li>Note ta date de début : aujourd'hui</li><li>Calcule ta date cible pour chaque phase (en fonction de ton rythme : temps plein = 6 semaines, temps partiel = 10-12 semaines)</li><li>Note ton objectif de revenu mensuel cible (sois réaliste : 1000, 2000, 3000 euros ?)</li><li>Identifie tes créneaux de travail de la semaine (quels jours, quelles heures ?)</li><li>Écris ton engagement : \"Je m'engage à suivre X leçons par semaine et à faire tous les exercices\"</li></ol><p>Accroche cette roadmap à côté de ton écran. Elle sera ta boussole pendant toute la formation.</p>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 3 phases de la formation ?", options: JSON.stringify(["Théorie, pratique, examen", "Fondations, compétences techniques, business", "Débutant, intermédiaire, expert", "IA, code, design"]), correctAnswer: "Fondations, compétences techniques, business", explanation: "La formation suit 3 phases : fondations (comprendre et utiliser l'IA), compétences techniques (coder, automatiser, créer), et business (vendre, livrer, scaler)." },
      { type: "true_false", question: "Il est possible de sauter directement aux modules business sans faire les modules techniques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Non, chaque module construit sur le précédent. Sans les compétences techniques, tu ne pourras pas livrer les services que tu vends." },
      { type: "mcq", question: "En combien de temps peut-on raisonnablement signer son premier client ?", options: JSON.stringify(["1 semaine", "6 à 8 semaines", "6 mois", "1 an"]), correctAnswer: "6 à 8 semaines", explanation: "En suivant le parcours assidûment, tu peux signer ton premier client payant dans les 6 à 8 semaines. C'est un objectif réaliste et atteignable." },
      { type: "mcq", question: "Quel est le focus des semaines 5-6 du plan d'action ?", options: JSON.stringify(["Fondations + prompting", "Code + design", "Automatisations + chatbots", "Business + prospection"]), correctAnswer: "Automatisations + chatbots", explanation: "Les semaines 5-6 sont dédiées aux modules 6-7 : automatisations avec n8n/Make et création de chatbots IA. L'objectif est d'avoir un portfolio de 3 projets." },
      { type: "true_false", question: "Les compétences techniques seules suffisent pour réussir en tant que prestataire IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les compétences techniques sans le business ne servent à rien. Il faut aussi savoir trouver des clients, vendre ses services, et gérer des projets." }
    ],
  },
];
