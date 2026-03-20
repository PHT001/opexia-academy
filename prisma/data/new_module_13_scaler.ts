// ═══════════════════════════════════════════════════
// MODULE 13 — Scaler à 10K€/mois
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_13_SCALER_LESSONS = [
  // ─── LEÇON 1 : De freelance solo à petite agence ───
  {
    order: 1,
    module: 13,
    title: "De freelance solo \u00e0 petite agence : quand et comment",
    slug: "freelance-solo-petite-agence",
    duration: "25 min",
    description: "Identifier le moment o\u00f9 tu dois passer de freelance \u00e0 agence, les mod\u00e8les possibles, et comment faire la transition sans tout casser.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le plafond du freelance solo" },
      { id: "1-2", type: "text", html: "<p>En tant que freelance solo, tu as un plafond naturel. Avec 40h/semaine facturables \u00e0 100\u20ac/h, tu plafonnes \u00e0 <strong>~16 000\u20ac/mois brut</strong>. En r\u00e9alit\u00e9, entre la prospection, l'admin et les temps morts, tu factures 25-30h/semaine. Soit ~10-12K\u20ac/mois maximum.</p><p>Mais le vrai probl\u00e8me n'est pas le plafond. C'est que <strong>si tu t'arr\u00eates, tout s'arr\u00eate</strong>. Pas de vacances, pas de maladie, pas de repos. Pour d\u00e9passer ce plafond et construire un actif, il faut passer en mode agence.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Signal d'alerte :</strong> Si tu refuses des projets par manque de temps, si tu travailles plus de 50h/semaine, ou si ton carnet de commandes est plein \u00e0 3 mois \u2014 c'est le moment de scaler." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 3 mod\u00e8les pour scaler" },
      { id: "1-6", type: "comparison", headers: ["Mod\u00e8le", "Avantages", "Inconv\u00e9nients"], rows: [
        { cells: ["Sous-traitance ponctuelle", "Z\u00e9ro charge fixe, flexibilit\u00e9 totale", "Qualit\u00e9 variable, pas de fid\u00e9lit\u00e9"] },
        { cells: ["Freelances r\u00e9guliers (2-3 personnes)", "Qualit\u00e9 contr\u00f4l\u00e9e, co\u00fbt ma\u00eetris\u00e9", "D\u00e9pendance mutuelle, coordination n\u00e9cessaire"] },
        { cells: ["Embauche (CDI/alternant)", "Engagement total, culture d'\u00e9quipe", "Charges fixes, risque si le CA baisse"] },
      ]},
      { id: "1-7", type: "callout", variant: "tip", html: "<strong>Recommandation :</strong> Commence par la sous-traitance ponctuelle (1-2 projets), passe aux freelances r\u00e9guliers d\u00e8s que tu as 3+ mois de visibilit\u00e9, et n'embauche qu'\u00e0 partir de 15K\u20ac/mois de CA r\u00e9current stable." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Premi\u00e8re \u00e9tape : d\u00e9l\u00e9guer la production" },
      { id: "1-10", type: "text", html: "<p>La premi\u00e8re chose \u00e0 d\u00e9l\u00e9guer, c'est <strong>la production</strong> \u2014 pas la vente, pas la relation client. Toi, tu restes sur le commercial et la strat\u00e9gie. Un sous-traitant g\u00e8re le d\u00e9veloppement.</p><ul><li><strong>O\u00f9 trouver des sous-traitants :</strong> Malt, Twitter/X, communaut\u00e9s Discord IA, ton propre r\u00e9seau d'anciens \u00e9l\u00e8ves</li><li><strong>Comment les tester :</strong> Un petit projet pay\u00e9 (500-1000\u20ac) avant de confier un gros contrat</li><li><strong>Comment les payer :</strong> Au projet (pas \u00e0 l'heure) pour aligner les incitations</li></ul>" },

      { id: "1-11", type: "checklist", title: "Checklist \u2014 Es-tu pr\u00eat \u00e0 scaler ?", items: [
        { id: "c1", text: "Tu refuses des projets par manque de temps" },
        { id: "c2", text: "Ton CA mensuel est stable au-dessus de 5K\u20ac depuis 3+ mois" },
        { id: "c3", text: "Tu as document\u00e9 tes process de livraison" },
        { id: "c4", text: "Tu as au moins 2 clients retainer actifs" },
        { id: "c5", text: "Tu as identifi\u00e9 1-2 freelances potentiels pour sous-traiter" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Calcule ton plafond actuel : heures facturables/semaine \u00d7 taux horaire \u00d7 4. (2) Liste les t\u00e2ches que tu pourrais d\u00e9l\u00e9guer d\u00e8s maintenant. (3) Identifie 3 freelances potentiels sur Malt ou dans ton r\u00e9seau et envoie-leur un message.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le signal principal qu'il est temps de passer de freelance \u00e0 agence ?", options: JSON.stringify(["Tu veux un logo plus pro", "Tu refuses des projets par manque de temps et tu travailles 50h+/semaine", "Tu as envie de changer de m\u00e9tier", "Tu n'aimes plus coder"]), correctAnswer: "Tu refuses des projets par manque de temps et tu travailles 50h+/semaine", explanation: "Les signaux cl\u00e9s sont : refuser des projets, travailler plus de 50h/semaine, et avoir un carnet de commandes plein \u00e0 3 mois. C'est le moment de d\u00e9l\u00e9guer la production." },
      { type: "true_false", question: "La premi\u00e8re embauche en CDI devrait se faire d\u00e8s que le CA d\u00e9passe 5K\u20ac/mois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "N'embauche qu'\u00e0 partir de 15K\u20ac/mois de CA r\u00e9current stable. Avant, utilise la sous-traitance ponctuelle ou des freelances r\u00e9guliers pour ma\u00eetriser tes charges fixes." },
    ],
  },

  // ─── LEÇON 2 : Tarification d'agence vs freelance ───
  {
    order: 2,
    module: 13,
    title: "Tarification d'agence : passer du taux horaire au pricing valeur",
    slug: "tarification-agence-pricing-valeur",
    duration: "25 min",
    description: "Pourquoi le taux horaire te plafonne, comment passer au pricing par valeur, et structurer tes offres pour maximiser le revenu par client.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le pi\u00e8ge du taux horaire" },
      { id: "2-2", type: "text", html: "<p>En freelance, tu factures \u00e0 l'heure ou \u00e0 la journ\u00e9e. Plus tu deviens rapide et efficace, moins tu gagnes. C'est absurde : <strong>ton expertise te p\u00e9nalise</strong>.</p><p>En mode agence, tu dois passer au <strong>pricing par valeur</strong>. Tu ne vends plus du temps \u2014 tu vends un r\u00e9sultat. Un chatbot qui \u00e9conomise 20h/mois au client vaut le m\u00eame prix que tu le construises en 2h ou en 20h.</p>" },
      { id: "2-3", type: "callout", variant: "warning", html: "<strong>R\u00e8gle :</strong> Ne communique JAMAIS ton taux horaire \u00e0 un client. Communique le prix du projet et la valeur qu'il va en retirer." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "La matrice de pricing agence" },
      { id: "2-6", type: "comparison", headers: ["Service", "Prix freelance", "Prix agence (valeur)", "Pourquoi la diff\u00e9rence"], rows: [
        { cells: ["Chatbot support client", "800-1500\u20ac", "3000-8000\u20ac", "Tu vends l'\u00e9conomie de 1-2 salari\u00e9s support"] },
        { cells: ["Automatisation workflow", "500-1000\u20ac", "2000-5000\u20ac", "Tu vends le gain de temps \u00d7 12 mois"] },
        { cells: ["Site vitrine IA", "1000-2000\u20ac", "3000-6000\u20ac", "Tu vends la machine \u00e0 leads"] },
        { cells: ["Agent IA sur mesure", "2000-3000\u20ac", "5000-15000\u20ac", "Tu vends l'avantage concurrentiel"] },
      ]},
      { id: "2-7", type: "text", html: "<p>La diff\u00e9rence entre les deux colonnes ? <strong>Le packaging et le positionnement.</strong> Le travail technique est le m\u00eame. Ce qui change, c'est comment tu pr\u00e9sentes la valeur.</p>" },
      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Structurer tes offres en packages" },
      { id: "2-10", type: "steps", steps: [
        { title: "L'offre d'entr\u00e9e (1500-3000\u20ac)", description: "Un projet simple : chatbot basique, automatisation standard, site one-page. Objectif : prouver ta valeur et cr\u00e9er la confiance." },
        { title: "L'offre principale (3000-8000\u20ac)", description: "Le projet complet : chatbot + int\u00e9gration + formation. C'est ton offre la plus vendue, celle qui te positionne comme expert." },
        { title: "L'offre premium (8000-20000\u20ac)", description: "Solution sur mesure : audit + d\u00e9veloppement + d\u00e9ploiement + retainer 3 mois. R\u00e9serv\u00e9e aux clients qui veulent le maximum." },
      ]},
      { id: "2-11", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Pr\u00e9sente toujours 3 options (ancrage). Le client choisira presque toujours l'offre du milieu. L'offre premium rend l'offre principale raisonnable en comparaison." },
    ]),
    exercise: "<p><strong>Exercice :</strong> Cr\u00e9e tes 3 packages (entr\u00e9e, principal, premium) pour ton service le plus demand\u00e9. Pour chaque : nom, prix, p\u00e9rim\u00e8tre, dur\u00e9e, et ROI estim\u00e9 pour le client. Pr\u00e9sente-les sur une seule page.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi ne faut-il jamais communiquer son taux horaire au client ?", options: JSON.stringify(["Parce que c'est ill\u00e9gal", "Parce que plus tu deviens efficace, moins tu gagnes au taux horaire", "Parce que les clients pr\u00e9f\u00e8rent payer au mois", "Parce que le taux horaire est trop compliqu\u00e9 \u00e0 calculer"]), correctAnswer: "Parce que plus tu deviens efficace, moins tu gagnes au taux horaire", explanation: "Le taux horaire te p\u00e9nalise quand tu gagnes en expertise. Un chatbot qui prend 2h \u00e0 un expert vaut autant pour le client que s'il prenait 20h. Le pricing par valeur r\u00e9compense ton expertise." },
      { type: "true_false", question: "Pr\u00e9senter 3 options de prix (ancrage) pousse g\u00e9n\u00e9ralement le client \u00e0 choisir l'option du milieu.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est l'effet d'ancrage : l'offre premium rend l'offre principale raisonnable en comparaison. La plupart des clients choisissent naturellement l'option interm\u00e9diaire." },
    ],
  },

  // ─── LEÇON 3 : D\u00e9l\u00e9gation et process ───
  {
    order: 3,
    module: 13,
    title: "Syst\u00e8mes & documentation : travailler SUR ton agence, pas DANS",
    slug: "systemes-documentation-agence",
    duration: "20 min",
    description: "Comment documenter tes process, cr\u00e9er des SOPs, et construire un syst\u00e8me o\u00f9 tu n'es plus le goulot d'\u00e9tranglement.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Si tu ne peux pas le d\u00e9l\u00e9guer, tu ne peux pas scaler" },
      { id: "3-2", type: "text", html: "<p>Le plus gros obstacle au scaling, c'est toi. Tant que tout passe par ta t\u00eate \u2014 les specs, les d\u00e9cisions techniques, la relation client \u2014 tu es le <strong>goulot d'\u00e9tranglement</strong> de ta propre agence.</p><p>La solution : <strong>documenter tout</strong>. Chaque process r\u00e9p\u00e9t\u00e9 plus de 2 fois doit devenir une SOP (Standard Operating Procedure).</p>" },
      { id: "3-3", type: "separator", style: "dots" },

      { id: "3-4", type: "heading", level: 2, text: "Les 5 SOPs essentielles pour une agence IA" },
      { id: "3-5", type: "steps", steps: [
        { title: "SOP Onboarding client", description: "De la signature du contrat au kickoff : envoi du questionnaire, acc\u00e8s aux outils, planning, CR du premier call. Template Notion + checklist." },
        { title: "SOP D\u00e9veloppement chatbot", description: "Les \u00e9tapes standard : brief \u2192 maquette \u2192 d\u00e9veloppement \u2192 tests \u2192 d\u00e9ploiement. Avec les outils \u00e0 utiliser \u00e0 chaque \u00e9tape." },
        { title: "SOP Livraison & recette", description: "Comment pr\u00e9senter le livrable, faire tester le client, obtenir le PV de recette, et transitionner vers le support." },
        { title: "SOP Support mensuel", description: "Monitoring, rapports mensuels, gestion des tickets, renouvellement du retainer." },
        { title: "SOP Prospection", description: "Routine quotidienne, templates de messages, pipeline CRM, relances automatis\u00e9es." },
      ]},
      { id: "3-6", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Utilise Loom pour enregistrer ta proc\u00e9dure en vid\u00e9o pendant que tu la fais. Ensuite, demande \u00e0 Claude de transformer la transcription en SOP \u00e9crite structur\u00e9e. Tu gagnes 80% du temps de documentation." },

      { id: "3-7", type: "heading", level: 2, text: "L'outil id\u00e9al : Notion comme QG d'agence" },
      { id: "3-8", type: "text", html: "<p>Centralise tout dans un espace Notion :</p><ul><li><strong>Wiki agence :</strong> SOPs, templates, guidelines</li><li><strong>Projets en cours :</strong> Une page par client avec statut, livrables, d\u00e9lais</li><li><strong>CRM :</strong> Pipeline de prospection (vu au module 10)</li><li><strong>Finance :</strong> Suivi du CA, factures, tr\u00e9sorerie</li></ul><p>Quand un nouveau freelance rejoint l'\u00e9quipe, il a tout ce qu'il faut pour \u00eatre autonome en 48h.</p>" },
    ]),
    exercise: "<p><strong>Exercice :</strong> Cr\u00e9e ta premi\u00e8re SOP. Choisis le process que tu fais le plus souvent (ex: d\u00e9ployer un chatbot) et documente-le \u00e9tape par \u00e9tape dans Notion. Utilise Loom + Claude pour acc\u00e9l\u00e9rer.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'une SOP ?", options: JSON.stringify(["Un type de contrat", "Une proc\u00e9dure op\u00e9rationnelle standard document\u00e9e", "Un outil de gestion de projet", "Un statut juridique"]), correctAnswer: "Une proc\u00e9dure op\u00e9rationnelle standard document\u00e9e", explanation: "SOP = Standard Operating Procedure. C'est un document qui d\u00e9crit \u00e9tape par \u00e9tape comment r\u00e9aliser une t\u00e2che r\u00e9p\u00e9titive. C'est la cl\u00e9 pour d\u00e9l\u00e9guer efficacement." },
      { type: "true_false", question: "Chaque process r\u00e9p\u00e9t\u00e9 plus de 2 fois devrait devenir une SOP.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Si tu fais quelque chose plus de 2 fois, documente-le. La 3\u00e8me fois, quelqu'un d'autre pourra le faire \u00e0 ta place." },
    ],
  },

  // ─── LEÇON 4 : Recruter et manager des freelances ───
  {
    order: 4,
    module: 13,
    title: "Recruter et manager des freelances efficacement",
    slug: "recruter-manager-freelances",
    duration: "20 min",
    description: "Comment trouver, \u00e9valuer et g\u00e9rer des sous-traitants freelances pour d\u00e9livrer plus de projets sans sacrifier la qualit\u00e9.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le recrutement de freelances \u2014 les erreurs \u00e0 \u00e9viter" },
      { id: "4-2", type: "text", html: "<p>La plus grosse erreur : embaucher le moins cher. Un freelance \u00e0 15\u20ac/h qui met 40h \u00e0 faire un chatbot te co\u00fbte <strong>600\u20ac + 10h de corrections</strong>. Un freelance \u00e0 50\u20ac/h qui le fait en 8h te co\u00fbte <strong>400\u20ac + 0 correction</strong>. Fais le calcul.</p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>R\u00e8gle d'or :</strong> Paie bien. Un freelance sous-pay\u00e9 livrera un travail m\u00e9diocre, partira \u00e0 la premi\u00e8re meilleure offre, et ne sera jamais fid\u00e8le. Paie au-dessus du march\u00e9, et tu auras une \u00e9quipe stable et motiv\u00e9e." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Process de recrutement en 4 \u00e9tapes" },
      { id: "4-6", type: "steps", steps: [
        { title: "1. Identifier (Malt, X, Discord)", description: "Cherche des profils qui ont d\u00e9j\u00e0 fait des projets similaires. Regarde leur portfolio, pas leur CV." },
        { title: "2. Tester (projet pilote \u00e0 500-1000\u20ac)", description: "Donne un petit projet pay\u00e9 avec un deadline serr\u00e9. \u00c9value : qualit\u00e9, respect du d\u00e9lai, communication." },
        { title: "3. Formaliser (contrat de sous-traitance)", description: "Contrat clair : p\u00e9rim\u00e8tre, prix, d\u00e9lais, propri\u00e9t\u00e9 intellectuelle, confidentialit\u00e9. Prot\u00e8ge-toi ET prot\u00e8ge-le." },
        { title: "4. Int\u00e9grer (acc\u00e8s Notion + SOPs)", description: "Donne-lui acc\u00e8s \u00e0 ton wiki agence. Il doit pouvoir \u00eatre autonome en 48h." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Manager sans micro-manager" },
      { id: "4-9", type: "text", html: "<p>Le management de freelances repose sur 3 piliers :</p><ul><li><strong>Clart\u00e9 :</strong> Brief \u00e9crit d\u00e9taill\u00e9 avec exemples. Pas de \u00ab tu vois ce que je veux dire \u00bb.</li><li><strong>Confiance :</strong> Donne le r\u00e9sultat attendu, pas la m\u00e9thode. Laisse le freelance choisir comment y arriver.</li><li><strong>Feedback :</strong> Point hebdomadaire de 15 min. Review du travail. Feedback constructif, pas critique.</li></ul>" },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Identifie 3 freelances potentiels sur Malt dans ton domaine. (2) R\u00e9dige un brief de projet pilote (500-1000\u20ac) que tu pourrais leur confier. (3) Pr\u00e9pare un template de contrat de sous-traitance avec Claude.</p>",
    quiz: [
      { type: "mcq", question: "Comment \u00e9valuer un freelance avant de lui confier un gros projet ?", options: JSON.stringify(["Regarder son CV et ses dipl\u00f4mes", "Lui confier un petit projet pilote pay\u00e9 (500-1000\u20ac)", "Lui demander de travailler gratuitement pour prouver ses comp\u00e9tences", "V\u00e9rifier son nombre d'abonn\u00e9s sur LinkedIn"]), correctAnswer: "Lui confier un petit projet pilote pay\u00e9 (500-1000\u20ac)", explanation: "Un projet pilote pay\u00e9 est le meilleur test. Il \u00e9value la qualit\u00e9, le respect des d\u00e9lais et la communication en conditions r\u00e9elles." },
    ],
  },

  // ─── LEÇON 5 : Metrics & KPIs business ───
  {
    order: 5,
    module: 13,
    title: "Piloter ton agence par les chiffres : KPIs et metrics",
    slug: "kpis-metrics-agence-ia",
    duration: "25 min",
    description: "Les 8 m\u00e9triques essentielles pour piloter ton agence IA, comprendre ta rentabilit\u00e9, et prendre les bonnes d\u00e9cisions de croissance.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Ce qui ne se mesure pas ne se g\u00e8re pas" },
      { id: "5-2", type: "text", html: "<p>La plupart des freelances et petites agences naviguent <strong>\u00e0 vue</strong>. Ils savent vaguement combien ils gagnent, mais pas combien chaque client leur co\u00fbte, combien de temps ils passent sur chaque projet, ni quel service est le plus rentable.</p><p>R\u00e9sultat : ils prennent des d\u00e9cisions bas\u00e9es sur le ressenti au lieu de les baser sur des donn\u00e9es. Et ils se demandent pourquoi ils travaillent beaucoup mais ne gagnent pas assez.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Objectif de cette le\u00e7on :</strong> Mettre en place un tableau de bord simple (Google Sheet ou Notion) avec les 8 m\u00e9triques qui comptent vraiment. 30 minutes par mois suffisent pour le maintenir." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Les 8 KPIs de ton agence IA" },
      { id: "5-6", type: "comparison", headers: ["KPI", "Comment le calculer", "Objectif"], rows: [
        { cells: ["Chiffre d'affaires mensuel", "Total des factures encaiss\u00e9es", "> 10K\u20ac/mois pour scaler"] },
        { cells: ["MRR (Monthly Recurring Revenue)", "Total des retainers actifs", "> 50% du CA total"] },
        { cells: ["CAC (Co\u00fbt d'Acquisition Client)", "D\u00e9penses marketing / nb nouveaux clients", "< 500\u20ac par client"] },
        { cells: ["LTV (Lifetime Value)", "Revenu moyen par client \u00d7 dur\u00e9e moyenne", "> 5\u00d7 le CAC"] },
        { cells: ["Marge par projet", "(Prix vendu - co\u00fbts) / prix vendu", "> 60% en solo, > 40% avec sous-traitance"] },
        { cells: ["Taux de conversion prospect \u2192 client", "Clients sign\u00e9s / propositions envoy\u00e9es", "> 25%"] },
        { cells: ["Taux de r\u00e9tention client", "Clients encore actifs \u00e0 12 mois", "> 70%"] },
        { cells: ["Heures facturables / semaine", "Heures pass\u00e9es sur des projets clients", "> 60% du temps total"] },
      ]},
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Comment interpr\u00e9ter tes KPIs" },
      { id: "5-9", type: "text", html: "<ul><li><strong>MRR bas (&lt; 30% du CA) :</strong> Tu fais trop de one-shots. Pousse les retainers et le support mensuel.</li><li><strong>CAC \u00e9lev\u00e9 (&gt; 1000\u20ac) :</strong> Ta prospection n'est pas efficace. Am\u00e9liore tes templates ou change de canal.</li><li><strong>Marge faible (&lt; 40%) :</strong> Soit tu sous-factures, soit tu passes trop de temps sur chaque projet. Augmente tes prix ou am\u00e9liore tes SOPs.</li><li><strong>Taux de r\u00e9tention bas (&lt; 50%) :</strong> Probl\u00e8me de qualit\u00e9 ou de relation client. Investis dans le support et les rapports mensuels.</li><li><strong>Heures facturables basses (&lt; 50%) :</strong> Tu passes trop de temps sur l'admin et la prospection. D\u00e9l\u00e8gue ou automatise.</li></ul>" },

      { id: "5-10", type: "heading", level: 2, text: "Ton tableau de bord en 5 minutes" },
      { id: "5-11", type: "text", html: "<p>Cr\u00e9e un Google Sheet avec 3 onglets :</p><ol><li><strong>Dashboard mensuel :</strong> Les 8 KPIs ci-dessus, mis \u00e0 jour le 1er de chaque mois</li><li><strong>Projets :</strong> Chaque projet avec prix vendu, co\u00fbt r\u00e9el, heures pass\u00e9es, marge</li><li><strong>Clients :</strong> Chaque client avec date de d\u00e9but, MRR, LTV cumul\u00e9e, statut</li></ol><p>30 minutes par mois pour le mettre \u00e0 jour. C'est tout ce qu'il faut pour piloter ton agence comme un pro.</p>" },

      { id: "5-12", type: "checklist", title: "Checklist \u2014 Ton syst\u00e8me de metrics", items: [
        { id: "c1", text: "Google Sheet cr\u00e9\u00e9 avec les 3 onglets (Dashboard, Projets, Clients)" },
        { id: "c2", text: "Les 8 KPIs renseign\u00e9s pour le mois en cours" },
        { id: "c3", text: "Rappel calendrier : mise \u00e0 jour le 1er de chaque mois" },
        { id: "c4", text: "Objectifs d\u00e9finis pour chaque KPI" },
        { id: "c5", text: "1 action corrective identifi\u00e9e pour le KPI le plus faible" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Cr\u00e9e ton Google Sheet de KPIs avec les 8 m\u00e9triques. (2) Remplis-le avec tes donn\u00e9es actuelles (\u00e0 partir de tes factures et ton CRM). (3) Identifie ton KPI le plus faible et d\u00e9finis une action corrective pour le mois prochain.</p>",
    quiz: [
      { type: "mcq", question: "Quel devrait \u00eatre le ratio minimum entre la LTV (valeur vie client) et le CAC (co\u00fbt d'acquisition) ?", options: JSON.stringify(["LTV = CAC", "LTV > 2\u00d7 CAC", "LTV > 5\u00d7 CAC", "LTV > 10\u00d7 CAC"]), correctAnswer: "LTV > 5\u00d7 CAC", explanation: "La LTV doit \u00eatre au moins 5 fois sup\u00e9rieure au CAC. Si tu d\u00e9penses 500\u20ac pour acqu\u00e9rir un client, il doit te rapporter au moins 2500\u20ac sur sa dur\u00e9e de vie." },
      { type: "mcq", question: "Si ton MRR repr\u00e9sente moins de 30% de ton CA total, que faut-il faire ?", options: JSON.stringify(["Augmenter les prix des one-shots", "Pousser les retainers et le support mensuel", "Arr\u00eater de prendre de nouveaux clients", "R\u00e9duire ses charges fixes"]), correctAnswer: "Pousser les retainers et le support mensuel", explanation: "Un MRR bas signifie trop de one-shots. Les retainers (support mensuel, maintenance, am\u00e9liorations continues) cr\u00e9ent des revenus r\u00e9currents et stabilisent ton CA." },
      { type: "true_false", question: "30 minutes par mois suffisent pour maintenir un tableau de bord de KPIs efficace.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un simple Google Sheet avec les 8 KPIs essentiels ne prend que 30 minutes par mois \u00e0 mettre \u00e0 jour. L'important est la r\u00e9gularit\u00e9, pas la complexit\u00e9 de l'outil." },
    ],
  },
];
