function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_17_LESSONS = [
  {
    order: 1,
    module: 17,
    title: "Quel statut choisir ?",
    slug: "quel-statut-juridique-choisir",
    duration: "25 min",
    description:
      "Les 3 statuts principaux (micro-entreprise, SASU, EURL), une comparaison claire sur les charges, le plafond CA, la responsabilité, la TVA et la comptabilité, plus un arbre de d\u00e9cision pour savoir quel statut te correspond.",
    content: blocks([
      {
        id: "L1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi le choix du statut bloque tout le monde",
      },
      {
        id: "L1-2",
        type: "text",
        html: "<p>Le statut juridique, c'est le sujet qui paralyse 90% des d\u00e9butants. Tu passes des heures sur des forums, tu lis des articles contradictoires, tu h\u00e9sites entre micro-entreprise, SASU, EURL\u2026 et au final tu ne fais <strong>rien</strong>. La v\u00e9rit\u00e9 ? Pour lancer ton agence IA, le statut parfait n'existe pas. Ce qui existe, c'est le statut <strong>adapt\u00e9 \u00e0 ta situation aujourd'hui</strong>, que tu pourras toujours changer plus tard.</p>",
      },
      {
        id: "L1-3",
        type: "callout",
        variant: "warning",
        html: "<strong>Le pi\u00e8ge mortel :</strong> \u00ab J'attends de trouver le bon statut pour commencer \u00bb. C'est une excuse d\u00e9guis\u00e9e en prudence. Tu peux cr\u00e9er ta micro-entreprise en 15 minutes en ligne. Si tu fais 80K\u20ac de CA dans 2 ans, tu changeras de statut \u00e0 ce moment-l\u00e0. Ne laisse pas l'administratif te voler ton \u00e9lan.",
      },
      {
        id: "L1-4",
        type: "heading",
        level: 2,
        text: "Les 3 statuts principaux pour une agence IA",
      },
      {
        id: "L1-5",
        type: "text",
        html: "<p>En France, quand tu veux te lancer en freelance ou monter une agence, tu as concr\u00e8tement <strong>3 options r\u00e9alistes</strong> :</p><ul><li><strong>Micro-entreprise (auto-entrepreneur)</strong> \u2014 Le plus simple, le plus rapide, id\u00e9al pour d\u00e9marrer. Z\u00e9ro comptabilit\u00e9 complexe, charges proportionnelles au CA, cr\u00e9ation en 15 min.</li><li><strong>SASU (Soci\u00e9t\u00e9 par Actions Simplifi\u00e9e Unipersonnelle)</strong> \u2014 Une vraie soci\u00e9t\u00e9 avec un pr\u00e9sident (toi). Tu peux d\u00e9duire tes charges, te verser des dividendes, et \u00e7a fait plus \u00ab pro \u00bb. Mais c'est plus lourd et plus cher.</li><li><strong>EURL (Entreprise Unipersonnelle \u00e0 Responsabilit\u00e9 Limit\u00e9e)</strong> \u2014 Similaire \u00e0 la SASU mais sous le r\u00e9gime TNS (Travailleur Non Salari\u00e9). Charges sociales plus basses, mais moins de flexibilit\u00e9 sur les dividendes.</li></ul>",
      },
      {
        id: "L1-6",
        type: "comparison",
        headers: ["Crit\u00e8re", "Micro-entreprise", "SASU", "EURL"],
        rows: [
          ["Cr\u00e9ation", "Gratuit, 15 min en ligne", "~300\u20ac + statuts, 2-4 semaines", "~300\u20ac + statuts, 2-4 semaines"],
          ["Charges sociales", "21,1% du CA (services)", "~65% sur salaire, 30% sur dividendes", "~45% sur r\u00e9mun\u00e9ration g\u00e9rant"],
          ["Plafond CA (services)", "77 700\u20ac/an", "Illimit\u00e9", "Illimit\u00e9"],
          ["Responsabilit\u00e9", "Illimit\u00e9e (patrimoine perso)", "Limit\u00e9e au capital social", "Limit\u00e9e au capital social"],
          ["TVA", "Franchise jusqu'\u00e0 25 000\u20ac", "TVA d\u00e8s le 1er euro", "TVA d\u00e8s le 1er euro"],
          ["Comptabilit\u00e9", "Livre de recettes seulement", "Bilan + compte de r\u00e9sultat obligatoire", "Bilan + compte de r\u00e9sultat obligatoire"],
          ["D\u00e9duction des charges", "Non (forfait)", "Oui (charges r\u00e9elles)", "Oui (charges r\u00e9elles)"],
          ["Id\u00e9al pour", "0 \u00e0 60K\u20ac de CA", "60K\u20ac+ avec investissements", "60K\u20ac+ en solo optimis\u00e9"],
        ],
      },
      {
        id: "L1-7",
        type: "heading",
        level: 3,
        text: "C'est quoi l'arbre de d\u00e9cision du statut concr\u00e8tement ?",
      },
      {
        id: "L1-8",
        type: "diagram",
        variant: "tree",
        nodes: [
          {
            id: "n1",
            label: "Tu te lances ?",
            description: "Premi\u00e8re question : est-ce que tu d\u00e9butes ou tu as d\u00e9j\u00e0 du CA ?",
            children: ["n2", "n3"],
          },
          {
            id: "n2",
            label: "CA pr\u00e9vu < 60K\u20ac/an",
            description: "Tu d\u00e9butes, 0 client, pas de charges lourdes",
            children: ["n4"],
          },
          {
            id: "n3",
            label: "CA pr\u00e9vu > 60K\u20ac/an",
            description: "Tu as d\u00e9j\u00e0 des clients, des charges \u00e0 d\u00e9duire, ou tu veux lever des fonds",
            children: ["n5", "n6"],
          },
          {
            id: "n4",
            label: "Micro-entreprise",
            description: "Cr\u00e9e ta micro en 15 min et commence \u00e0 facturer imm\u00e9diatement",
          },
          {
            id: "n5",
            label: "SASU",
            description: "Tu veux te verser un salaire + dividendes, ou avoir des associ\u00e9s plus tard",
          },
          {
            id: "n6",
            label: "EURL",
            description: "Tu veux rester seul et payer moins de charges sociales qu'en SASU",
          },
        ],
      },
      {
        id: "L1-9",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> Le statut, c'est comme choisir un v\u00e9hicule. La micro-entreprise, c'est un scooter : pas cher, rapide \u00e0 d\u00e9marrer, parfait en ville. La SASU, c'est une voiture : plus ch\u00e8re mais confortable et adapt\u00e9e aux longs trajets. L'EURL, c'est un v\u00e9lo \u00e9lectrique solide : \u00e9conomique et fiable. Tu commences par le scooter, et tu upgrades quand tu roules assez.",
      },
      {
        id: "L1-10",
        type: "heading",
        level: 3,
        text: "C'est quoi la diff\u00e9rence micro vs soci\u00e9t\u00e9 concr\u00e8tement ?",
      },
      {
        id: "L1-11",
        type: "diagram",
        variant: "versus",
        nodes: [
          {
            id: "n1",
            label: "Micro-entreprise",
            description: "Simple, rapide, 0 comptabilit\u00e9 complexe. Mais : pas de d\u00e9duction de charges, plafond CA \u00e0 77 700\u20ac, responsabilit\u00e9 illimit\u00e9e sur ton patrimoine perso.",
          },
          {
            id: "n2",
            label: "Soci\u00e9t\u00e9 (SASU/EURL)",
            description: "D\u00e9duction des charges (ordi, logiciels, sous-traitance), CA illimit\u00e9, responsabilit\u00e9 limit\u00e9e. Mais : comptable obligatoire (~1500-3000\u20ac/an), formalisme, co\u00fbt de cr\u00e9ation.",
          },
        ],
      },
      {
        id: "L1-12",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> La micro, c'est un studio meubl\u00e9 : tu poses tes valises et c'est parti. La soci\u00e9t\u00e9, c'est un appartement vide : tu dois tout installer toi-m\u00eame (comptable, statuts, formalit\u00e9s), mais tu peux l'am\u00e9nager exactement comme tu veux.",
      },
      {
        id: "L1-13",
        type: "heading",
        level: 2,
        text: "Quand passer de la micro \u00e0 la soci\u00e9t\u00e9 ?",
      },
      {
        id: "L1-14",
        type: "text",
        html: "<p>La micro-entreprise a un plafond de CA pour les services : <strong>77 700\u20ac/an</strong>. Mais en r\u00e9alit\u00e9, le moment de basculer arrive souvent <strong>avant</strong> ce plafond. Voici les signaux qui montrent qu'il est temps de passer en soci\u00e9t\u00e9 :</p><ul><li>Tu d\u00e9passes <strong>50-60K\u20ac de CA annuel</strong> \u2014 les charges forfaitaires deviennent plus ch\u00e8res que des charges r\u00e9elles</li><li>Tu as des <strong>frais importants</strong> (sous-traitants, logiciels, mat\u00e9riel) que tu ne peux pas d\u00e9duire</li><li>Tu veux <strong>prot\u00e9ger ton patrimoine personnel</strong> (clients importants = risque important)</li><li>Tu envisages d'<strong>avoir un associ\u00e9</strong> ou de lever des fonds</li></ul>",
      },
      {
        id: "L1-15",
        type: "callout",
        variant: "tip",
        html: "<strong>R\u00e8gle simple :</strong> Si tu factures moins de 50K\u20ac/an et que tu travailles seul sans gros frais \u2014 reste en micro. Si tu d\u00e9passes 50K\u20ac ou que tes frais de sous-traitance repr\u00e9sentent plus de 30% de ton CA \u2014 consulte un comptable pour simuler la bascule.",
      },
      {
        id: "L1-16",
        type: "separator",
        style: "dots",
      },
      {
        id: "L1-17",
        type: "quiz-inline",
        question: "Tu lances ton agence IA seul, sans client, avec un budget quasi nul. Quel statut choisis-tu ?",
        options: [
          { id: "a", text: "SASU \u2014 \u00e7a fait plus professionnel" },
          { id: "b", text: "EURL \u2014 pour prot\u00e9ger mon patrimoine d\u00e8s le d\u00e9part" },
          { id: "c", text: "Micro-entreprise \u2014 simple, gratuit, op\u00e9rationnel en 15 minutes" },
          { id: "d", text: "SAS avec 2 associ\u00e9s pour partager les risques" },
        ],
        correctId: "c",
        explanation:
          "La micro-entreprise est le choix \u00e9vident pour d\u00e9marrer. Z\u00e9ro co\u00fbt de cr\u00e9ation, z\u00e9ro comptabilit\u00e9 complexe, op\u00e9rationnel en 15 minutes. Tu pourras toujours basculer en SASU ou EURL quand ton CA justifiera les frais suppl\u00e9mentaires.",
      },
      {
        id: "L1-18",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "La micro-entreprise est le meilleur statut pour d\u00e9marrer (simple, gratuit, rapide)" },
          { id: "c2", text: "SASU et EURL sont pour les CA > 60K\u20ac ou les gros frais \u00e0 d\u00e9duire" },
          { id: "c3", text: "Le plafond micro services est de 77 700\u20ac/an" },
          { id: "c4", text: "La responsabilit\u00e9 est illimit\u00e9e en micro (patrimoine perso expos\u00e9)" },
          { id: "c5", text: "Ne jamais attendre \u00ab le bon statut \u00bb pour commencer \u2014 la micro se cr\u00e9e en 15 min" },
        ],
      },
      {
        id: "L1-19",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Ouvre un document et r\u00e9ponds \u00e0 ces questions : (1) Quel est ton CA pr\u00e9visionnel sur les 12 prochains mois ? (2) As-tu des frais importants \u00e0 d\u00e9duire (sous-traitants, logiciels > 500\u20ac/mois) ? (3) As-tu besoin de prot\u00e9ger ton patrimoine perso (pr\u00eat immo, famille) ? En fonction de tes r\u00e9ponses, identifie le statut adapt\u00e9 \u00e0 ta situation actuelle. Si c'est la micro \u2014 passe \u00e0 la le\u00e7on suivante pour la cr\u00e9er imm\u00e9diatement.</p>",
      },
    ]),
  },
  {
    order: 2,
    module: 17,
    title: "Cr\u00e9er ta micro-entreprise pas \u00e0 pas",
    slug: "creer-micro-entreprise-pas-a-pas",
    duration: "25 min",
    description:
      "Le processus complet pour cr\u00e9er ta micro-entreprise en ligne, du choix du code APE au num\u00e9ro SIRET, en passant par la domiciliation, le compte bancaire d\u00e9di\u00e9 et l'ACRE.",
    content: blocks([
      {
        id: "L2-1",
        type: "heading",
        level: 2,
        text: "Cr\u00e9er ta micro en 15 minutes : c'est vraiment possible",
      },
      {
        id: "L2-2",
        type: "text",
        html: "<p>Cr\u00e9er une micro-entreprise en France, c'est l'une des d\u00e9marches administratives les plus simples au monde. Tu vas sur <strong>autoentrepreneur.urssaf.fr</strong> (ou le guichet unique formalites.entreprises.gouv.fr), tu remplis un formulaire, tu envoies tes pi\u00e8ces justificatives, et en quelques jours tu re\u00e7ois ton num\u00e9ro SIRET. C'est gratuit, 100% en ligne, et tu peux facturer d\u00e8s r\u00e9ception du SIRET.</p>",
      },
      {
        id: "L2-3",
        type: "callout",
        variant: "info",
        html: "<strong>Documents \u00e0 pr\u00e9parer avant de commencer :</strong> (1) Pi\u00e8ce d'identit\u00e9 (CNI ou passeport en cours de validit\u00e9), (2) Justificatif de domicile de moins de 3 mois, (3) Attestation de non-condamnation (d\u00e9claration sur l'honneur t\u00e9l\u00e9chargeable). C'est tout. Pas de capital social, pas de statuts, pas de comptable.",
      },
      {
        id: "L2-4",
        type: "heading",
        level: 3,
        text: "C'est quoi le processus de cr\u00e9ation concr\u00e8tement ?",
      },
      {
        id: "L2-5",
        type: "diagram",
        variant: "process",
        nodes: [
          {
            id: "n1",
            label: "\u00c9tape 1 : Inscription en ligne",
            description: "Rends-toi sur autoentrepreneur.urssaf.fr ou formalites.entreprises.gouv.fr. Cr\u00e9e ton compte et commence le formulaire de d\u00e9claration d'activit\u00e9.",
          },
          {
            id: "n2",
            label: "\u00c9tape 2 : Remplir le formulaire",
            description: "Renseigne ton identit\u00e9, ton adresse de domiciliation, ton activit\u00e9 (conseil en syst\u00e8mes informatiques), et tes options fiscales (versement lib\u00e9ratoire ou non).",
          },
          {
            id: "n3",
            label: "\u00c9tape 3 : Envoyer les justificatifs",
            description: "Upload ta pi\u00e8ce d'identit\u00e9, ton justificatif de domicile et ton attestation de non-condamnation au format PDF ou JPEG.",
          },
          {
            id: "n4",
            label: "\u00c9tape 4 : R\u00e9ception du SIRET",
            description: "Sous 1 \u00e0 4 semaines, tu re\u00e7ois ton num\u00e9ro SIRET par courrier et par email. Tu peux maintenant facturer l\u00e9galement.",
          },
          {
            id: "n5",
            label: "\u00c9tape 5 : Ouvrir un compte bancaire d\u00e9di\u00e9",
            description: "Ouvre un compte bancaire d\u00e9di\u00e9 \u00e0 ton activit\u00e9 (obligatoire au-del\u00e0 de 10 000\u20ac de CA). Qonto, Shine ou Blank sont parfaits pour les freelances.",
          },
        ],
      },
      {
        id: "L2-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> Cr\u00e9er ta micro, c'est comme ouvrir un compte Netflix. Tu remplis un formulaire en ligne, tu envoies une pi\u00e8ce d'identit\u00e9, et c'est actif sous quelques jours. Sauf qu'au lieu de regarder des s\u00e9ries, tu factures des clients.",
      },
      {
        id: "L2-7",
        type: "heading",
        level: 2,
        text: "Choisir le bon code APE/NAF",
      },
      {
        id: "L2-8",
        type: "text",
        html: "<p>Le code APE (Activit\u00e9 Principale Exerc\u00e9e) est attribu\u00e9 automatiquement par l'INSEE en fonction de la description de ton activit\u00e9. Pour une agence IA, deux codes sont pertinents :</p><ul><li><strong>6201Z</strong> \u2014 Programmation informatique : si tu d\u00e9veloppes des chatbots, des automatisations custom, du code</li><li><strong>6202A</strong> \u2014 Conseil en syst\u00e8mes et logiciels informatiques : si tu fais du conseil, de l'int\u00e9gration d'outils IA, de la strat\u00e9gie</li></ul><p>En pratique, le 6202A est le plus courant pour les agences IA car il couvre \u00e0 la fois le conseil et l'impl\u00e9mentation. D\u00e9cris ton activit\u00e9 comme <strong>\u00ab Conseil en intelligence artificielle et automatisation \u00bb</strong> lors de l'inscription.</p>",
      },
      {
        id: "L2-9",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Ne choisis pas un code li\u00e9 \u00e0 la formation ou au coaching si tu vends des prestations techniques. Le mauvais code APE peut poser probl\u00e8me avec certains clients (appels d'offres, assurances). Si tu t'es tromp\u00e9, tu peux demander une modification aupr\u00e8s de l'INSEE.",
      },
      {
        id: "L2-10",
        type: "heading",
        level: 2,
        text: "SIRET vs SIREN : quelle diff\u00e9rence ?",
      },
      {
        id: "L2-11",
        type: "text",
        html: "<p>C'est simple :</p><ul><li><strong>SIREN</strong> = 9 chiffres = identifiant de ton entreprise (unique, ne change jamais)</li><li><strong>SIRET</strong> = 14 chiffres = SIREN + code NIC (5 chiffres de ton \u00e9tablissement)</li></ul><p>Sur tes factures, tu mets ton <strong>SIRET</strong> (14 chiffres). Si tu d\u00e9m\u00e9nages ton si\u00e8ge social, ton SIREN reste le m\u00eame mais ton SIRET change (nouveau NIC).</p>",
      },
      {
        id: "L2-12",
        type: "heading",
        level: 2,
        text: "O\u00f9 domicilier ton entreprise ?",
      },
      {
        id: "L2-13",
        type: "text",
        html: "<p>La domiciliation, c'est l'adresse officielle de ton entreprise. Tu as 3 options :</p><ul><li><strong>Chez toi</strong> \u2014 Gratuit, simple, suffisant pour d\u00e9marrer. V\u00e9rifie que ton bail ou r\u00e8glement de copropri\u00e9t\u00e9 l'autorise.</li><li><strong>P\u00e9pini\u00e8re d'entreprises</strong> \u2014 10-50\u20ac/mois, adresse professionnelle, parfois acc\u00e8s \u00e0 un espace de coworking.</li><li><strong>Soci\u00e9t\u00e9 de domiciliation</strong> \u2014 15-40\u20ac/mois, adresse prestigieuse (Paris, Lyon...), r\u00e9exp\u00e9dition du courrier. Exemples : SeDomicilier, Digidom, Kandbaz.</li></ul>",
      },
      {
        id: "L2-14",
        type: "heading",
        level: 3,
        text: "C'est quoi les documents et comptes \u00e0 ouvrir concr\u00e8tement ?",
      },
      {
        id: "L2-15",
        type: "diagram",
        variant: "layers",
        nodes: [
          {
            id: "n1",
            label: "Couche 1 : Documents d'identit\u00e9",
            description: "Pi\u00e8ce d'identit\u00e9 + justificatif de domicile + attestation de non-condamnation",
          },
          {
            id: "n2",
            label: "Couche 2 : Inscription officielle",
            description: "Formulaire en ligne sur autoentrepreneur.urssaf.fr \u2192 r\u00e9ception SIRET/SIREN",
          },
          {
            id: "n3",
            label: "Couche 3 : Compte bancaire d\u00e9di\u00e9",
            description: "Qonto, Shine ou Blank \u2014 obligatoire au-del\u00e0 de 10 000\u20ac de CA annuel",
          },
          {
            id: "n4",
            label: "Couche 4 : Outil de facturation",
            description: "Pennylane, Tiime, Freebe ou Henrri pour g\u00e9n\u00e9rer des factures conformes",
          },
          {
            id: "n5",
            label: "Couche 5 : Assurance RC Pro",
            description: "Responsabilit\u00e9 civile professionnelle \u2014 indispensable pour une agence IA (Hiscox, Alan)",
          },
        ],
      },
      {
        id: "L2-16",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> Les couches de cr\u00e9ation d'entreprise, c'est comme construire une maison. D'abord les fondations (identit\u00e9), puis la structure (SIRET), puis les murs (compte bancaire), puis l'\u00e9lectricit\u00e9 (facturation), et enfin l'assurance (RC Pro). Chaque couche s'appuie sur la pr\u00e9c\u00e9dente.",
      },
      {
        id: "L2-17",
        type: "heading",
        level: 2,
        text: "L'ACRE : jusqu'\u00e0 50% de r\u00e9duction sur tes charges",
      },
      {
        id: "L2-18",
        type: "text",
        html: "<p>L'ACRE (Aide aux Cr\u00e9ateurs et Repreneurs d'Entreprise) te permet de payer <strong>moiti\u00e9 moins de charges sociales pendant ton premier ann\u00e9e</strong>. Au lieu de 21,1% sur ton CA, tu paies environ 10,6%. Sur 30 000\u20ac de CA, \u00e7a repr\u00e9sente <strong>3 150\u20ac d'\u00e9conomie</strong>.</p><p>Conditions principales : \u00eatre demandeur d'emploi, b\u00e9n\u00e9ficiaire du RSA/ASS, avoir entre 18 et 25 ans, ou ne pas avoir b\u00e9n\u00e9fici\u00e9 de l'ACRE dans les 3 derni\u00e8res ann\u00e9es. La demande se fait au moment de la cr\u00e9ation ou dans les 45 jours suivants aupr\u00e8s de l'URSSAF.</p>",
      },
      {
        id: "L2-19",
        type: "callout",
        variant: "tip",
        html: "<strong>Conseil concret :</strong> Si tu es \u00e9ligible \u00e0 l'ACRE, n'oublie surtout pas de la demander. C'est 3000\u20ac+ d'\u00e9conomie la premi\u00e8re ann\u00e9e. M\u00eame si tu n'es pas s\u00fbr de ton \u00e9ligibilit\u00e9, fais la demande \u2014 le pire qui puisse arriver c'est un refus.",
      },
      {
        id: "L2-20",
        type: "separator",
        style: "line",
      },
      {
        id: "L2-21",
        type: "quiz-inline",
        question: "Quel code APE/NAF est le plus adapt\u00e9 pour une agence IA qui fait du conseil et de l'int\u00e9gration d'outils ?",
        options: [
          { id: "a", text: "6201Z \u2014 Programmation informatique" },
          { id: "b", text: "6202A \u2014 Conseil en syst\u00e8mes et logiciels informatiques" },
          { id: "c", text: "7022Z \u2014 Conseil pour les affaires et la gestion" },
          { id: "d", text: "8559A \u2014 Formation continue d'adultes" },
        ],
        correctId: "b",
        explanation:
          "Le code 6202A couvre \u00e0 la fois le conseil en IA et l'impl\u00e9mentation technique. C'est le code le plus courant et le plus polyvalent pour une agence IA. Le 6201Z est aussi valable si tu fais uniquement du d\u00e9veloppement.",
      },
      {
        id: "L2-22",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "La cr\u00e9ation se fait sur autoentrepreneur.urssaf.fr ou formalites.entreprises.gouv.fr" },
          { id: "c2", text: "Code APE recommand\u00e9 : 6202A (conseil en syst\u00e8mes et logiciels informatiques)" },
          { id: "c3", text: "SIRET = 14 chiffres (identifiant unique de ton \u00e9tablissement)" },
          { id: "c4", text: "Domiciliation chez soi = gratuit et suffisant pour d\u00e9marrer" },
          { id: "c5", text: "Compte bancaire d\u00e9di\u00e9 obligatoire au-del\u00e0 de 10 000\u20ac de CA" },
          { id: "c6", text: "Demander l'ACRE dans les 45 jours pour \u00e9conomiser ~50% de charges la premi\u00e8re ann\u00e9e" },
        ],
      },
      {
        id: "L2-23",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Si tu ne l'as pas encore fait : rends-toi sur autoentrepreneur.urssaf.fr et cr\u00e9e ta micro-entreprise maintenant. Pr\u00e9pare ta pi\u00e8ce d'identit\u00e9, ton justificatif de domicile et ton attestation de non-condamnation. D\u00e9cris ton activit\u00e9 comme \u00ab Conseil en intelligence artificielle et automatisation \u00bb. Si tu l'as d\u00e9j\u00e0 fait, v\u00e9rifie que tu as bien demand\u00e9 l'ACRE et ouvert un compte bancaire d\u00e9di\u00e9.</p>",
      },
    ]),
  },
  {
    order: 3,
    module: 17,
    title: "Comptabilit\u00e9 et facturation",
    slug: "comptabilite-facturation-freelance",
    duration: "20 min",
    description:
      "Les obligations comptables en micro-entreprise, les mentions obligatoires sur une facture, la num\u00e9rotation, les outils recommand\u00e9s et les r\u00e8gles de relance.",
    content: blocks([
      {
        id: "L3-1",
        type: "heading",
        level: 2,
        text: "La comptabilit\u00e9 en micro : le minimum vital",
      },
      {
        id: "L3-2",
        type: "text",
        html: "<p>Bonne nouvelle : en micro-entreprise, la comptabilit\u00e9 est ultra-simplifi\u00e9e. Tu n'as <strong>pas besoin de comptable</strong>. Tes obligations se r\u00e9sument \u00e0 deux choses :</p><ul><li><strong>Un livre des recettes</strong> \u2014 Tu notes chaque encaissement : date, client, montant, mode de paiement. C'est obligatoire et l'URSSAF peut te le demander en cas de contr\u00f4le.</li><li><strong>Un registre des achats</strong> \u2014 Uniquement si tu vends des marchandises (pas concern\u00e9 si tu vends des prestations de services IA). Mais bonne pratique de le tenir quand m\u00eame.</li></ul><p>C'est tout. Pas de bilan, pas de compte de r\u00e9sultat, pas de liasse fiscale. La micro-entreprise est le r\u00e9gime comptable le plus simple qui existe en France.</p>",
      },
      {
        id: "L3-3",
        type: "heading",
        level: 3,
        text: "C'est quoi les obligations comptables concr\u00e8tement ?",
      },
      {
        id: "L3-4",
        type: "diagram",
        variant: "layers",
        nodes: [
          {
            id: "n1",
            label: "Livre des recettes (obligatoire)",
            description: "Chaque encaissement not\u00e9 : date, montant, client, mode de paiement, n\u00b0 facture",
          },
          {
            id: "n2",
            label: "Registre des achats (si vente de marchandises)",
            description: "Chaque achat not\u00e9 : date, fournisseur, nature de l'achat, montant",
          },
          {
            id: "n3",
            label: "Factures \u00e9mises (archivage 10 ans)",
            description: "Toutes tes factures class\u00e9es chronologiquement, conserv\u00e9es au format num\u00e9rique ou papier",
          },
          {
            id: "n4",
            label: "D\u00e9clarations URSSAF (mensuelle ou trimestrielle)",
            description: "D\u00e9clarer ton CA sur autoentrepreneur.urssaf.fr m\u00eame si c'est 0\u20ac",
          },
        ],
      },
      {
        id: "L3-5",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> La comptabilit\u00e9 en micro, c'est comme un carnet de notes au lyc\u00e9e. Tu notes simplement chaque \u00ab note \u00bb (recette) que tu re\u00e7ois, avec la date et la mati\u00e8re (le client). Pas besoin d'un doctorat en math pour \u00e7a.",
      },
      {
        id: "L3-6",
        type: "heading",
        level: 2,
        text: "Les mentions obligatoires sur une facture",
      },
      {
        id: "L3-7",
        type: "text",
        html: "<p>Une facture sans les bonnes mentions, c'est une facture ill\u00e9gale. Et un client s\u00e9rieux rep\u00e8re \u00e7a imm\u00e9diatement. Voici les mentions <strong>obligatoires</strong> sur chaque facture en micro-entreprise :</p><ul><li>Ton nom et pr\u00e9nom (ou d\u00e9nomination commerciale)</li><li>Ton adresse de domiciliation</li><li>Ton <strong>num\u00e9ro SIRET</strong></li><li>La mention <strong>\u00ab TVA non applicable, art. 293B du CGI \u00bb</strong> (tant que tu es en franchise de TVA)</li><li>Le num\u00e9ro de facture (chronologique, sans trou : 2026-001, 2026-002\u2026)</li><li>La date d'\u00e9mission</li><li>L'identit\u00e9 du client (nom, adresse, SIRET si c'est un pro)</li><li>La description d\u00e9taill\u00e9e de la prestation</li><li>Le montant HT (= TTC en franchise de TVA)</li><li>Les conditions de paiement (d\u00e9lai, p\u00e9nalit\u00e9s de retard)</li></ul>",
      },
      {
        id: "L3-8",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur fr\u00e9quente :</strong> Oublier la mention \u00ab TVA non applicable, art. 293B du CGI \u00bb. Sans cette mention, ton client peut croire que tu factures TTC avec TVA d\u00e9ductible \u2014 et te r\u00e9clamer la TVA. Mets-la syst\u00e9matiquement sur chaque facture tant que tu es en franchise.",
      },
      {
        id: "L3-9",
        type: "heading",
        level: 2,
        text: "Num\u00e9rotation des factures : les r\u00e8gles",
      },
      {
        id: "L3-10",
        type: "text",
        html: "<p>La num\u00e9rotation doit \u00eatre <strong>chronologique et continue</strong>, sans trou ni doublon. Tu ne peux pas supprimer une facture \u00e9mise \u2014 si tu dois annuler une facture, tu \u00e9mets un <strong>avoir</strong> (facture n\u00e9gative).</p><p>Format recommand\u00e9 : <strong>AAAA-NNN</strong> (ex : 2026-001, 2026-002, 2026-003\u2026). Tu recommences \u00e0 001 chaque ann\u00e9e. Simple, clair, conforme.</p>",
      },
      {
        id: "L3-11",
        type: "heading",
        level: 3,
        text: "C'est quoi l'\u00e9cosyst\u00e8me de facturation concr\u00e8tement ?",
      },
      {
        id: "L3-12",
        type: "diagram",
        variant: "hub",
        nodes: [
          {
            id: "n1",
            label: "Ta facture",
            description: "Le document central qui d\u00e9clenche tout : paiement, comptabilit\u00e9, d\u00e9clarations",
          },
          {
            id: "n2",
            label: "Livre des recettes",
            description: "Chaque facture pay\u00e9e alimente ton livre des recettes avec la date d'encaissement",
          },
          {
            id: "n3",
            label: "Registre des achats",
            description: "Chaque achat professionnel not\u00e9 ici (m\u00eame si non d\u00e9ductible en micro)",
          },
          {
            id: "n4",
            label: "D\u00e9claration URSSAF",
            description: "Le total de tes encaissements du mois/trimestre \u00e0 d\u00e9clarer en ligne",
          },
          {
            id: "n5",
            label: "D\u00e9claration d'imp\u00f4ts",
            description: "Ton CA annuel \u00e0 reporter sur ta d\u00e9claration de revenus (case micro-BNC)",
          },
        ],
      },
      {
        id: "L3-13",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> La facture, c'est comme le ticket de caisse d'un restaurant. Le livre des recettes, c'est la caisse enregistreuse. La d\u00e9claration URSSAF, c'est ton bilan de fin de mois. Tout part du ticket.",
      },
      {
        id: "L3-14",
        type: "heading",
        level: 2,
        text: "Outils de facturation recommand\u00e9s",
      },
      {
        id: "L3-15",
        type: "comparison",
        headers: ["Outil", "Prix", "Points forts", "Id\u00e9al pour"],
        rows: [
          ["Henrri", "Gratuit", "Simple, factures conformes, illimit\u00e9", "D\u00e9butants, 0 budget"],
          ["Tiime (ex Tiime AE)", "Gratuit", "Sp\u00e9cial micro, livre de recettes int\u00e9gr\u00e9", "Micro-entreprises"],
          ["Freebe", "Payant (~20\u20ac/mois)", "Gestion compl\u00e8te micro, alertes seuils, simulateur", "Micro s\u00e9rieuses"],
          ["Pennylane", "Payant (~30\u20ac/mois)", "Comptabilit\u00e9 automatis\u00e9e, connexion bancaire", "Transition micro \u2192 soci\u00e9t\u00e9"],
        ],
      },
      {
        id: "L3-16",
        type: "heading",
        level: 2,
        text: "D\u00e9lais de paiement et relances",
      },
      {
        id: "L3-17",
        type: "text",
        html: "<p>Le d\u00e9lai de paiement l\u00e9gal par d\u00e9faut est de <strong>30 jours</strong> apr\u00e8s \u00e9mission de la facture. Tu peux n\u00e9gocier un d\u00e9lai plus court (paiement \u00e0 r\u00e9ception, 7 jours, 14 jours\u2026) mais jamais plus de 60 jours (ou 45 jours fin de mois).</p><p><strong>Strat\u00e9gie de relance :</strong></p><ul><li>J+1 apr\u00e8s \u00e9ch\u00e9ance : email poli de rappel</li><li>J+7 : relance plus ferme avec copie de la facture</li><li>J+15 : mise en demeure par lettre recommand\u00e9e</li><li>J+30 : recouvrement (huissier ou plateforme comme GCollect)</li></ul>",
      },
      {
        id: "L3-18",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce :</strong> Demande un acompte de 30 \u00e0 50% avant de commencer le travail. \u00c7a filtre les clients non s\u00e9rieux et \u00e7a s\u00e9curise ta tr\u00e9sorerie. Sur un projet \u00e0 2000\u20ac, demande 1000\u20ac d'acompte avant de toucher au clavier.",
      },
      {
        id: "L3-19",
        type: "separator",
        style: "dots",
      },
      {
        id: "L3-20",
        type: "quiz-inline",
        question: "Quelle mention est obligatoire sur une facture en micro-entreprise en franchise de TVA ?",
        options: [
          { id: "a", text: "TVA 20% incluse" },
          { id: "b", text: "TVA non applicable, art. 293B du CGI" },
          { id: "c", text: "Exon\u00e9r\u00e9 de TVA sur demande" },
          { id: "d", text: "Aucune mention sp\u00e9cifique n'est requise" },
        ],
        correctId: "b",
        explanation:
          "La mention \u00ab TVA non applicable, art. 293B du CGI \u00bb est obligatoire sur chaque facture tant que tu es en franchise de base de TVA. Elle informe ton client qu'il n'y a pas de TVA \u00e0 d\u00e9duire.",
      },
      {
        id: "L3-21",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "Tenir un livre des recettes est obligatoire (m\u00eame en micro)" },
          { id: "c2", text: "Mention obligatoire : \u00ab TVA non applicable, art. 293B du CGI \u00bb" },
          { id: "c3", text: "Num\u00e9rotation des factures : chronologique, sans trou (AAAA-NNN)" },
          { id: "c4", text: "Conserver toutes les factures pendant 10 ans" },
          { id: "c5", text: "Toujours demander un acompte de 30-50% avant de commencer" },
        ],
      },
      {
        id: "L3-22",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Cr\u00e9e un compte gratuit sur Henrri ou Tiime. Cr\u00e9e ta premi\u00e8re facture fictive pour un client imaginaire : \u00ab Cr\u00e9ation d'un chatbot IA pour le service client \u00bb \u00e0 1500\u20ac. V\u00e9rifie que toutes les mentions obligatoires y figurent (SIRET, article 293B, num\u00e9rotation, coordonn\u00e9es). Exporte-la en PDF et conserve-la comme template.</p>",
      },
    ]),
  },
  {
    order: 4,
    module: 17,
    title: "TVA et seuils \u00e0 conna\u00eetre",
    slug: "tva-seuils-freelance-2026",
    duration: "20 min",
    description:
      "Tout comprendre sur la franchise en base de TVA, les seuils 2026, quand et comment facturer la TVA, et les r\u00e8gles pour les clients \u00e0 l'\u00e9tranger.",
    content: blocks([
      {
        id: "L4-1",
        type: "heading",
        level: 2,
        text: "La TVA en micro-entreprise : ce que tu dois savoir",
      },
      {
        id: "L4-2",
        type: "text",
        html: "<p>La TVA (Taxe sur la Valeur Ajout\u00e9e) est le sujet qui stresse le plus les micro-entrepreneurs. Pourtant c'est simple : en dessous d'un certain seuil de CA, tu es <strong>exon\u00e9r\u00e9 de TVA</strong>. Tu ne la factures pas, tu ne la r\u00e9cup\u00e8res pas. C'est ce qu'on appelle la <strong>franchise en base de TVA</strong>.</p><p>Le gros changement 2025-2026 : le seuil de franchise en base a \u00e9t\u00e9 unifi\u00e9 \u00e0 <strong>25 000\u20ac</strong> pour les prestations de services (contre 36 800\u20ac auparavant). Cela signifie que tu deviens assujetti \u00e0 la TVA d\u00e8s que ton CA d\u00e9passe 25 000\u20ac sur l'ann\u00e9e civile.</p>",
      },
      {
        id: "L4-3",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention \u2014 R\u00e9forme 2025 :</strong> Le nouveau seuil de 25 000\u20ac est plus bas que l'ancien (36 800\u20ac). Si tu factures 2 500\u20ac/mois, tu atteins le seuil en octobre. Anticipe cette bascule d\u00e8s le d\u00e9but de l'ann\u00e9e pour ne pas \u00eatre pris au d\u00e9pourvu.",
      },
      {
        id: "L4-4",
        type: "heading",
        level: 3,
        text: "C'est quoi les seuils TVA concr\u00e8tement ?",
      },
      {
        id: "L4-5",
        type: "diagram",
        variant: "pyramid",
        nodes: [
          {
            id: "n1",
            label: "TVA obligatoire",
            description: "Au-dessus de 27 500\u20ac de CA (seuil major\u00e9) : TVA imm\u00e9diate, r\u00e9troactive au 1er jour du d\u00e9passement",
          },
          {
            id: "n2",
            label: "Zone de transition (25 000 \u2192 27 500\u20ac)",
            description: "Entre le seuil de base et le seuil major\u00e9 : TVA \u00e0 partir du 1er janvier de l'ann\u00e9e suivante",
          },
          {
            id: "n3",
            label: "Franchise en base de TVA (< 25 000\u20ac)",
            description: "En dessous de 25 000\u20ac de CA annuel : pas de TVA \u00e0 facturer ni \u00e0 d\u00e9clarer. Mention art. 293B du CGI.",
          },
        ],
      },
      {
        id: "L4-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> La TVA, c'est comme le p\u00e9age sur l'autoroute. Tant que tu roules sur les petites routes (moins de 25 000\u20ac), pas de p\u00e9age. D\u00e8s que tu prends l'autoroute (plus de 25 000\u20ac), tu paies le p\u00e9age \u2014 mais tu as aussi acc\u00e8s \u00e0 une route plus rapide (r\u00e9cup\u00e9ration de la TVA sur tes achats).",
      },
      {
        id: "L4-7",
        type: "heading",
        level: 2,
        text: "Que faire quand tu d\u00e9passes le seuil ?",
      },
      {
        id: "L4-8",
        type: "steps",
        steps: [
          {
            title: "Demander un num\u00e9ro de TVA intracommunautaire",
            description: "Contacte ton SIE (Service des Imp\u00f4ts des Entreprises) pour obtenir ton num\u00e9ro de TVA. Il est g\u00e9n\u00e9ralement attribu\u00e9 sous 48h \u00e0 2 semaines. Format : FR + 2 chiffres + ton SIREN.",
          },
          {
            title: "Modifier tes factures",
            description: "Ajoute la TVA \u00e0 20% sur toutes tes futures factures. Remplace la mention art. 293B par ton num\u00e9ro de TVA intracommunautaire. Tes prix deviennent HT + TVA.",
          },
          {
            title: "Choisir ton r\u00e9gime de d\u00e9claration",
            description: "R\u00e9gime simplifi\u00e9 (2 acomptes + r\u00e9gularisation annuelle) si CA < 254 000\u20ac, ou r\u00e9gime r\u00e9el normal (d\u00e9claration mensuelle/trimestrielle).",
          },
          {
            title: "D\u00e9clarer et payer la TVA collect\u00e9e",
            description: "TVA collect\u00e9e (sur tes ventes) - TVA d\u00e9ductible (sur tes achats pro) = TVA \u00e0 reverser \u00e0 l'\u00c9tat. D\u00e9claration sur impots.gouv.fr.",
          },
        ],
      },
      {
        id: "L4-9",
        type: "heading",
        level: 2,
        text: "L'avantage cach\u00e9 de la TVA",
      },
      {
        id: "L4-10",
        type: "text",
        html: "<p>Beaucoup voient la TVA comme un probl\u00e8me. En r\u00e9alit\u00e9, c'est aussi un <strong>avantage</strong>. Quand tu factures \u00e0 des entreprises (B2B), tes clients <strong>d\u00e9duisent la TVA</strong> de tes factures. Pour eux, ton prix HT est le vrai co\u00fbt. Donc passer \u00e0 la TVA ne change rien pour tes clients B2B \u2014 mais toi, tu peux maintenant r\u00e9cup\u00e9rer la TVA sur tes achats (logiciels, mat\u00e9riel, sous-traitants).</p><p>Exemple concret : tu paies 100\u20ac/mois de logiciels (Claude Pro, Zapier, h\u00e9bergement). Avec la TVA, tu r\u00e9cup\u00e8res 20\u20ac/mois = <strong>240\u20ac/an d'\u00e9conomie</strong>.</p>",
      },
      {
        id: "L4-11",
        type: "heading",
        level: 3,
        text: "C'est quoi le calendrier TVA concr\u00e8tement ?",
      },
      {
        id: "L4-12",
        type: "diagram",
        variant: "timeline",
        nodes: [
          {
            id: "n1",
            label: "Janvier-Mars",
            description: "D\u00e9but d'ann\u00e9e : surveille ton CA cumul\u00e9. Si tu as d\u00e9pass\u00e9 25K\u20ac l'an dernier, tu es d\u00e9j\u00e0 assujetti.",
          },
          {
            id: "n2",
            label: "Avril-Juin",
            description: "Premier acompte TVA (r\u00e9gime simplifi\u00e9) en juillet. Pr\u00e9pare tes d\u00e9clarations mensuelles si r\u00e9gime r\u00e9el.",
          },
          {
            id: "n3",
            label: "Juillet-Septembre",
            description: "Deuxi\u00e8me acompte TVA en d\u00e9cembre. Surveille ton CA : si tu approches 25K\u20ac, pr\u00e9pare la bascule.",
          },
          {
            id: "n4",
            label: "Octobre-D\u00e9cembre",
            description: "D\u00e9claration annuelle de r\u00e9gularisation (r\u00e9gime simplifi\u00e9) en mai N+1. Anticipe le passage si tu as d\u00e9pass\u00e9.",
          },
        ],
      },
      {
        id: "L4-13",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> Le calendrier TVA, c'est comme les trimestres scolaires. Chaque trimestre, tu fais le point sur tes r\u00e9sultats (CA cumul\u00e9). En fin d'ann\u00e9e, tu re\u00e7ois le bulletin (r\u00e9gularisation annuelle).",
      },
      {
        id: "L4-14",
        type: "heading",
        level: 2,
        text: "TVA et clients \u00e0 l'\u00e9tranger",
      },
      {
        id: "L4-15",
        type: "text",
        html: "<p>Si tu as des clients dans l'Union Europ\u00e9enne (hors France), la r\u00e8gle change. Pour les prestations de services B2B intracommunautaires :</p><ul><li>Tu factures <strong>HT (sans TVA)</strong> avec la mention \u00ab Autoliquidation \u2014 art. 283-2 du CGI \u00bb</li><li>C'est ton client qui d\u00e9clare et paie la TVA dans son pays (m\u00e9canisme d'autoliquidation)</li><li>Tu dois avoir un <strong>num\u00e9ro de TVA intracommunautaire</strong> (m\u00eame si tu es en franchise en base, tu peux en demander un)</li></ul><p>Pour les clients hors UE (USA, Canada, etc.), tu factures HT sans TVA. Pas d'autoliquidation, pas de formalit\u00e9 sp\u00e9cifique.</p>",
      },
      {
        id: "L4-16",
        type: "separator",
        style: "line",
      },
      {
        id: "L4-17",
        type: "quiz-inline",
        question: "En 2026, \u00e0 partir de quel seuil de CA annuel un micro-entrepreneur en prestations de services doit-il facturer la TVA ?",
        options: [
          { id: "a", text: "36 800\u20ac" },
          { id: "b", text: "25 000\u20ac" },
          { id: "c", text: "77 700\u20ac" },
          { id: "d", text: "10 000\u20ac" },
        ],
        correctId: "b",
        explanation:
          "Depuis la r\u00e9forme 2025, le seuil de franchise en base de TVA a \u00e9t\u00e9 unifi\u00e9 \u00e0 25 000\u20ac pour les prestations de services. Au-del\u00e0, tu dois facturer et d\u00e9clarer la TVA.",
      },
      {
        id: "L4-18",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "Seuil franchise TVA 2026 : 25 000\u20ac (services) / seuil major\u00e9 : 27 500\u20ac" },
          { id: "c2", text: "En dessous du seuil : mention \u00ab TVA non applicable, art. 293B du CGI \u00bb" },
          { id: "c3", text: "Au-dessus : facturer la TVA \u00e0 20% et la d\u00e9clarer" },
          { id: "c4", text: "Clients B2B UE : autoliquidation (facturer HT)" },
          { id: "c5", text: "La TVA permet de r\u00e9cup\u00e9rer la taxe sur tes achats pro" },
        ],
      },
      {
        id: "L4-19",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Fais une simulation : si tu factures 3 000\u20ac/mois, en quel mois de l'ann\u00e9e atteins-tu le seuil de 25 000\u20ac ? Calcule la TVA que tu devrais collecter sur les mois restants. Puis calcule la TVA que tu pourrais r\u00e9cup\u00e9rer sur tes abonnements logiciels (Claude Pro, h\u00e9bergement, outils). Quelle est la diff\u00e9rence nette \u00e0 reverser \u00e0 l'\u00c9tat ?</p>",
      },
    ]),
  },
  {
    order: 5,
    module: 17,
    title: "Protection sociale et assurances",
    slug: "protection-sociale-assurances",
    duration: "20 min",
    description:
      "Couverture sant\u00e9, mutuelle, RC Pro, pr\u00e9voyance, retraite, cumul all\u00f4ch/micro et portage salarial : tout ce qu'il faut savoir pour \u00eatre prot\u00e9g\u00e9 en freelance.",
    content: blocks([
      {
        id: "L5-1",
        type: "heading",
        level: 2,
        text: "La protection sociale en micro-entreprise : tu n'es pas \u00e0 poil",
      },
      {
        id: "L5-2",
        type: "text",
        html: "<p>Contrairement aux id\u00e9es re\u00e7ues, un micro-entrepreneur n'est pas totalement d\u00e9pourvu de protection sociale. Quand tu paies tes charges sociales (21,1% de ton CA), une partie finance ta <strong>couverture maladie, ta retraite et tes allocations familiales</strong>. Mais il y a des trous importants \u00e0 combler toi-m\u00eame.</p>",
      },
      {
        id: "L5-3",
        type: "heading",
        level: 3,
        text: "C'est quoi ta couverture sociale concr\u00e8tement ?",
      },
      {
        id: "L5-4",
        type: "diagram",
        variant: "hub",
        nodes: [
          {
            id: "n1",
            label: "Toi (micro-entrepreneur)",
            description: "Au centre de ta protection : tes charges sociales financent ta couverture de base",
          },
          {
            id: "n2",
            label: "CPAM / S\u00e9curit\u00e9 Sociale",
            description: "Remboursement soins, m\u00e9dicaments, hospitalisation \u2014 couvert d\u00e8s le 1er euro de CA d\u00e9clar\u00e9",
          },
          {
            id: "n3",
            label: "Mutuelle",
            description: "Compl\u00e9mentaire sant\u00e9 pour couvrir ce que la S\u00e9cu ne prend pas en charge (optique, dentaire, d\u00e9passements)",
          },
          {
            id: "n4",
            label: "RC Pro",
            description: "Assurance responsabilit\u00e9 civile professionnelle \u2014 couvre les dommages caus\u00e9s \u00e0 tes clients",
          },
          {
            id: "n5",
            label: "Pr\u00e9voyance",
            description: "Arr\u00eat maladie, invalidit\u00e9, d\u00e9c\u00e8s \u2014 indispensable car les IJ sont tr\u00e8s faibles en micro",
          },
          {
            id: "n6",
            label: "Retraite (CIPAV ou SSI)",
            description: "Tu cotises pour ta retraite de base et compl\u00e9mentaire \u2014 mais les montants sont faibles",
          },
        ],
      },
      {
        id: "L5-5",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> Ta protection sociale, c'est comme un parapluie. Les charges sociales te donnent un petit parapluie de base (S\u00e9cu). La mutuelle l'agrandit, la pr\u00e9voyance te prot\u00e8ge de la gr\u00eale (maladie longue), et la RC Pro prot\u00e8ge les gens autour de toi (tes clients). Sans tout \u00e7a, tu marches sous la pluie.",
      },
      {
        id: "L5-6",
        type: "heading",
        level: 2,
        text: "La RC Pro : indispensable pour une agence IA",
      },
      {
        id: "L5-7",
        type: "text",
        html: "<p>La <strong>Responsabilit\u00e9 Civile Professionnelle (RC Pro)</strong> n'est pas l\u00e9galement obligatoire pour toutes les activit\u00e9s, mais elle est <strong>absolument indispensable</strong> pour une agence IA. Pourquoi ? Imagine : tu livres un chatbot \u00e0 un client e-commerce. Le chatbot donne une mauvaise information \u00e0 un acheteur, le client perd 10 000\u20ac de ventes. Sans RC Pro, c'est <strong>toi qui paies de ta poche</strong>.</p><p>Co\u00fbt typique : <strong>15 \u00e0 40\u20ac/mois</strong> (Hiscox, Alan, Simplis). C'est rien compar\u00e9 au risque.</p>",
      },
      {
        id: "L5-8",
        type: "callout",
        variant: "warning",
        html: "<strong>Cas r\u00e9el :</strong> Un d\u00e9veloppeur freelance a livr\u00e9 un site e-commerce avec une faille de s\u00e9curit\u00e9. Le site s'est fait pirater, 500 comptes clients compromis. Le client a demand\u00e9 25 000\u20ac de dommages. Sans RC Pro, le freelance aurait d\u00fb payer de sa poche. Avec RC Pro, l'assurance a couvert.",
      },
      {
        id: "L5-9",
        type: "heading",
        level: 2,
        text: "Cumul ARE + micro-entreprise : garder tes allocations ch\u00f4mage",
      },
      {
        id: "L5-10",
        type: "text",
        html: "<p>Si tu es demandeur d'emploi et que tu cr\u00e9es ta micro-entreprise, tu peux <strong>cumuler tes allocations ch\u00f4mage (ARE) avec tes revenus de micro</strong>. C'est un \u00e9norme avantage : tu gardes un filet de s\u00e9curit\u00e9 pendant que tu lances ton activit\u00e9.</p><p>Le calcul : P\u00f4le Emploi (France Travail) d\u00e9duit 70% de ton revenu micro de ton allocation mensuelle. Concr\u00e8tement, si tu gagnes 1000\u20ac en micro et que ton ARE est de 1500\u20ac, tu touches 1500 - 700 = <strong>800\u20ac d'ARE + 1000\u20ac de micro = 1800\u20ac au total</strong> (au lieu de 1500\u20ac sans activit\u00e9).</p>",
      },
      {
        id: "L5-11",
        type: "heading",
        level: 3,
        text: "C'est quoi la diff\u00e9rence salari\u00e9 vs ind\u00e9pendant concr\u00e8tement ?",
      },
      {
        id: "L5-12",
        type: "diagram",
        variant: "versus",
        nodes: [
          {
            id: "n1",
            label: "Salari\u00e9",
            description: "Mutuelle prise en charge \u00e0 50% par l'employeur, arr\u00eat maladie indemnis\u00e9 d\u00e8s J1, cotisation retraite \u00e9lev\u00e9e, ch\u00f4mage couvert. Mais : z\u00e9ro libert\u00e9 sur tes horaires/clients/prix.",
          },
          {
            id: "n2",
            label: "Ind\u00e9pendant (micro)",
            description: "Mutuelle \u00e0 100% \u00e0 ta charge, arr\u00eat maladie apr\u00e8s 3 jours de carence, retraite faible, pas de ch\u00f4mage. Mais : libert\u00e9 totale et potentiel de revenus illimit\u00e9.",
          },
        ],
      },
      {
        id: "L5-13",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> Le salari\u00e9, c'est un appartement tout inclus : le loyer couvre l'eau, l'\u00e9lectricit\u00e9, internet. L'ind\u00e9pendant, c'est un propri\u00e9taire : tu paies chaque facture s\u00e9par\u00e9ment, mais tu choisis ton logement, ta d\u00e9co, et tu construis ton patrimoine.",
      },
      {
        id: "L5-14",
        type: "heading",
        level: 2,
        text: "Le portage salarial : l'alternative hybride",
      },
      {
        id: "L5-15",
        type: "text",
        html: "<p>Le portage salarial, c'est un statut hybride : tu travailles comme un freelance (tu trouves tes clients, tu fixes tes tarifs), mais tu es <strong>salari\u00e9 d'une soci\u00e9t\u00e9 de portage</strong>. Avantages : protection sociale compl\u00e8te (mutuelle, ch\u00f4mage, retraite), z\u00e9ro admin. Inconv\u00e9nient : la soci\u00e9t\u00e9 de portage prend <strong>5 \u00e0 10% de ton CA</strong> en frais de gestion + charges salariales \u00e9lev\u00e9es (~50%).</p><p>Le portage est int\u00e9ressant si : tu veux garder le ch\u00f4mage en cas d'\u00e9chec, tu d\u00e9testes l'admin, ou tu veux tester avant de cr\u00e9er ta micro. Il est moins int\u00e9ressant si tu veux maximiser tes revenus nets.</p>",
      },
      {
        id: "L5-16",
        type: "separator",
        style: "dots",
      },
      {
        id: "L5-17",
        type: "quiz-inline",
        question: "Pourquoi la RC Pro est-elle consid\u00e9r\u00e9e comme indispensable pour une agence IA ?",
        options: [
          { id: "a", text: "Parce que c'est l\u00e9galement obligatoire pour toutes les micro-entreprises" },
          { id: "b", text: "Parce qu'elle couvre les dommages caus\u00e9s aux clients par tes livrables (chatbot d\u00e9faillant, faille, etc.)" },
          { id: "c", text: "Parce qu'elle remplace la mutuelle sant\u00e9" },
          { id: "d", text: "Parce qu'elle donne acc\u00e8s aux appels d'offres publics" },
        ],
        correctId: "b",
        explanation:
          "La RC Pro couvre ta responsabilit\u00e9 si un de tes livrables cause un pr\u00e9judice \u00e0 ton client (chatbot qui donne de mauvaises informations, automatisation d\u00e9faillante, perte de donn\u00e9es...). Pour 15-40\u20ac/mois, c'est une s\u00e9curit\u00e9 indispensable.",
      },
      {
        id: "L5-18",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "La S\u00e9cu couvre les soins de base d\u00e8s le 1er euro de CA d\u00e9clar\u00e9" },
          { id: "c2", text: "La mutuelle n'est pas obligatoire en micro mais fortement recommand\u00e9e" },
          { id: "c3", text: "La RC Pro est indispensable pour une agence IA (15-40\u20ac/mois)" },
          { id: "c4", text: "Tu peux cumuler ARE + micro-entreprise (70% du revenu micro d\u00e9duit de l'ARE)" },
          { id: "c5", text: "Le portage salarial offre la s\u00e9curit\u00e9 du salariat mais co\u00fbte 5-10% de frais de gestion" },
        ],
      },
      {
        id: "L5-19",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Fais ton bilan de protection : (1) As-tu une mutuelle en cours ? Si non, compare Alan, Luko et April sur le tarif freelance. (2) Demande un devis RC Pro sur Hiscox.fr en s\u00e9lectionnant \u00ab Conseil en informatique \u00bb. (3) Si tu es au ch\u00f4mage, simule ton cumul ARE + micro sur le simulateur France Travail. Note le montant total que tu pourrais toucher avec 2000\u20ac de CA mensuel en micro.</p>",
      },
    ]),
  },
  {
    order: 6,
    module: 17,
    title: "Optimiser sa r\u00e9mun\u00e9ration",
    slug: "optimiser-remuneration-freelance",
    duration: "20 min",
    description:
      "Charges sociales en micro, versement lib\u00e9ratoire, simulation 5000\u20ac factur\u00e9s en micro vs SASU, et quand passer en soci\u00e9t\u00e9 pour optimiser.",
    content: blocks([
      {
        id: "L6-1",
        type: "heading",
        level: 2,
        text: "Combien il te reste vraiment sur 5000\u20ac factur\u00e9s ?",
      },
      {
        id: "L6-2",
        type: "text",
        html: "<p>C'est LA question que tout le monde se pose. Tu factures 5000\u20ac \u00e0 un client \u2014 combien tu mets dans ta poche ? La r\u00e9ponse d\u00e9pend de ton statut, de ton r\u00e9gime fiscal, et de ton taux d'imposition. Faisons le calcul.</p>",
      },
      {
        id: "L6-3",
        type: "heading",
        level: 2,
        text: "En micro-entreprise : le calcul complet",
      },
      {
        id: "L6-4",
        type: "text",
        html: "<p>Sur 5000\u20ac factur\u00e9s en micro-entreprise (prestations de services BNC) :</p><ul><li><strong>Charges sociales</strong> : 21,1% + 0,2% CFP = <strong>21,3%</strong> soit 1 065\u20ac</li><li><strong>Reste apr\u00e8s charges</strong> : 3 935\u20ac</li><li><strong>Imp\u00f4t sur le revenu</strong> (tranche \u00e0 11%) : abattement forfaitaire de 34% en micro-BNC, soit imp\u00f4t sur 3 300\u20ac = environ 363\u20ac</li><li><strong>Reste net apr\u00e8s charges et imp\u00f4ts</strong> : environ <strong>3 572\u20ac</strong></li></ul><p>Soit un taux de pr\u00e9l\u00e8vement global d'environ <strong>28,6%</strong>. Sur 5000\u20ac, tu gardes ~3 570\u20ac. Pas mal.</p>",
      },
      {
        id: "L6-5",
        type: "callout",
        variant: "info",
        html: "<strong>Versement lib\u00e9ratoire de l'imp\u00f4t :</strong> Si ton revenu fiscal de r\u00e9f\u00e9rence est inf\u00e9rieur \u00e0 ~28 800\u20ac par part, tu peux opter pour le versement lib\u00e9ratoire : 2,2% du CA en plus des charges. Soit 21,3% + 2,2% = <strong>23,5% du CA tout compris</strong>. Sur 5000\u20ac : 1 175\u20ac de pr\u00e9l\u00e8vements, <strong>3 825\u20ac net</strong>. Plus simple et souvent plus avantageux.",
      },
      {
        id: "L6-6",
        type: "heading",
        level: 3,
        text: "C'est quoi les niveaux d'optimisation concr\u00e8tement ?",
      },
      {
        id: "L6-7",
        type: "diagram",
        variant: "pyramid",
        nodes: [
          {
            id: "n1",
            label: "SASU optimis\u00e9e",
            description: "Salaire minimal + dividendes. D\u00e9duction de toutes les charges r\u00e9elles. Pour les CA > 80K\u20ac avec des frais importants.",
          },
          {
            id: "n2",
            label: "EURL \u00e0 l'IS",
            description: "R\u00e9mun\u00e9ration g\u00e9rant + IS \u00e0 15% sur les b\u00e9n\u00e9fices. Charges TNS (~45%). Pour les CA > 60K\u20ac.",
          },
          {
            id: "n3",
            label: "Micro + versement lib\u00e9ratoire",
            description: "23,5% tout compris. Le plus simple et le plus efficace pour les CA < 50K\u20ac. Z\u00e9ro prise de t\u00eate.",
          },
        ],
      },
      {
        id: "L6-8",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> L'optimisation fiscale, c'est comme choisir un forfait t\u00e9l\u00e9phone. Le forfait micro (23,5%), c'est le forfait sans engagement : simple, pas cher pour un petit usage. La soci\u00e9t\u00e9, c'est le forfait entreprise : plus de fonctionnalit\u00e9s mais plus cher si tu ne les utilises pas toutes.",
      },
      {
        id: "L6-9",
        type: "heading",
        level: 3,
        text: "C'est quoi la diff\u00e9rence nette 5000\u20ac micro vs SASU concr\u00e8tement ?",
      },
      {
        id: "L6-10",
        type: "diagram",
        variant: "versus",
        nodes: [
          {
            id: "n1",
            label: "5000\u20ac en micro",
            description: "Charges : 1 065\u20ac (21,3%). Imp\u00f4ts : ~363\u20ac. Net : ~3 572\u20ac. Avec versement lib\u00e9ratoire : net ~3 825\u20ac. Aucune charge d\u00e9ductible.",
          },
          {
            id: "n2",
            label: "5000\u20ac en SASU",
            description: "Si 100% en salaire : charges ~65%, net ~1 750\u20ac. Si salaire min + dividendes : net ~3 200\u20ac mais charges de structure ~500\u20ac/mois (comptable, frais). Int\u00e9ressant seulement avec gros CA et gros frais.",
          },
        ],
      },
      {
        id: "L6-11",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention :</strong> Beaucoup pensent que cr\u00e9er une SASU pour \u00ab optimiser \u00bb est toujours mieux. C'est faux sous 50K\u20ac de CA. Les frais fixes d'une SASU (comptable ~2000\u20ac/an, CFE, frais bancaires pro) mangent l'avantage fiscal. La micro est quasi toujours plus rentable en dessous de 50-60K\u20ac.",
      },
      {
        id: "L6-12",
        type: "heading",
        level: 2,
        text: "Les frais r\u00e9els : le gros manque de la micro",
      },
      {
        id: "L6-13",
        type: "text",
        html: "<p>En micro-entreprise, tu ne peux pas d\u00e9duire tes frais r\u00e9els. L'abattement forfaitaire de 34% (BNC) est cens\u00e9 couvrir tous tes frais. Concr\u00e8tement, si tu paies 500\u20ac/mois de sous-traitance + 200\u20ac de logiciels + 100\u20ac de d\u00e9placements, ces 800\u20ac ne sont <strong>pas d\u00e9duits</strong> de ton b\u00e9n\u00e9fice imposable.</p><p>C'est l\u00e0 que la soci\u00e9t\u00e9 devient int\u00e9ressante : si tes frais r\u00e9els d\u00e9passent 34% de ton CA, tu paies moins d'imp\u00f4ts en soci\u00e9t\u00e9 qu'en micro.</p>",
      },
      {
        id: "L6-14",
        type: "comparison",
        headers: ["Situation", "Statut recommand\u00e9", "Pourquoi"],
        rows: [
          ["CA < 30K\u20ac, pas de frais", "Micro + versement lib\u00e9ratoire", "Maximum de simplicit\u00e9, charges les plus basses"],
          ["CA 30-50K\u20ac, frais < 30% du CA", "Micro-entreprise", "Encore avantageux, l'abattement 34% couvre tes frais"],
          ["CA 50-80K\u20ac, frais > 30% du CA", "EURL \u00e0 l'IS", "D\u00e9duction des charges r\u00e9elles + IS \u00e0 15% sur b\u00e9n\u00e9fices"],
          ["CA > 80K\u20ac, sous-traitants", "SASU", "Salaire + dividendes, d\u00e9duction totale, cr\u00e9dibilit\u00e9 maximale"],
        ],
      },
      {
        id: "L6-15",
        type: "separator",
        style: "line",
      },
      {
        id: "L6-16",
        type: "quiz-inline",
        question: "Sur 5000\u20ac factur\u00e9s en micro avec versement lib\u00e9ratoire, combien gardes-tu net approximativement ?",
        options: [
          { id: "a", text: "Environ 2 500\u20ac" },
          { id: "b", text: "Environ 3 825\u20ac" },
          { id: "c", text: "Environ 4 500\u20ac" },
          { id: "d", text: "Environ 1 750\u20ac" },
        ],
        correctId: "b",
        explanation:
          "Avec le versement lib\u00e9ratoire, tu paies 23,5% du CA tout compris (charges sociales + imp\u00f4ts). Sur 5000\u20ac : 5000 - 1175 = 3 825\u20ac net. C'est le r\u00e9gime le plus simple et souvent le plus avantageux sous 50K\u20ac de CA.",
      },
      {
        id: "L6-17",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "Charges sociales micro : 21,1% + 0,2% CFP = 21,3% du CA" },
          { id: "c2", text: "Versement lib\u00e9ratoire : 23,5% tout compris (si \u00e9ligible)" },
          { id: "c3", text: "Pas de d\u00e9duction de frais r\u00e9els en micro (abattement 34% forfaitaire)" },
          { id: "c4", text: "La SASU n'est int\u00e9ressante qu'au-del\u00e0 de 60-80K\u20ac de CA avec des frais importants" },
          { id: "c5", text: "Toujours simuler avant de basculer en soci\u00e9t\u00e9 (le comptable co\u00fbte ~2000\u20ac/an)" },
        ],
      },
      {
        id: "L6-18",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Fais ta simulation personnalis\u00e9e : (1) Note ton CA mensuel moyen (ou pr\u00e9visionnel). (2) Liste tes frais mensuels r\u00e9els (logiciels, sous-traitance, d\u00e9placements). (3) Calcule : frais r\u00e9els / CA = ton taux de frais. Si ce taux est < 34% \u2192 reste en micro. Si > 34% \u2192 la soci\u00e9t\u00e9 devient int\u00e9ressante. (4) Simule ton net en micro avec versement lib\u00e9ratoire : CA x 76,5%. Compare avec le net estim\u00e9 en SASU sur le simulateur de l'URSSAF.</p>",
      },
    ]),
  },
  {
    order: 7,
    module: 17,
    title: "Les erreurs administratives fatales",
    slug: "erreurs-administratives-fatales",
    duration: "15 min",
    description:
      "Les 7 erreurs les plus fr\u00e9quentes des micro-entrepreneurs, leurs cons\u00e9quences concr\u00e8tes, comment les \u00e9viter, et une checklist admin compl\u00e8te.",
    content: blocks([
      {
        id: "L7-1",
        type: "heading",
        level: 2,
        text: "7 erreurs qui peuvent te co\u00fbter tr\u00e8s cher",
      },
      {
        id: "L7-2",
        type: "text",
        html: "<p>L'administratif, c'est pas sexy. Mais une erreur administrative peut te co\u00fbter entre <strong>750\u20ac de p\u00e9nalit\u00e9 et 75 000\u20ac d'amende</strong>, voire la radiation de ta micro-entreprise. Voici les 7 erreurs les plus fr\u00e9quentes \u2014 et comment les \u00e9viter.</p>",
      },
      {
        id: "L7-3",
        type: "heading",
        level: 3,
        text: "C'est quoi les erreurs vs bonnes pratiques concr\u00e8tement ?",
      },
      {
        id: "L7-4",
        type: "diagram",
        variant: "versus",
        nodes: [
          {
            id: "n1",
            label: "Erreurs courantes",
            description: "Oublier de d\u00e9clarer, m\u00e9langer comptes, pas de justificatifs, mauvais code APE, pas de CGV, seuils d\u00e9pass\u00e9s, pas de RC Pro",
          },
          {
            id: "n2",
            label: "Bonnes pratiques",
            description: "D\u00e9clarer chaque mois/trimestre, compte d\u00e9di\u00e9, archiver tout, v\u00e9rifier son code APE, CGV sign\u00e9es, surveiller ses seuils, RC Pro active",
          },
        ],
      },
      {
        id: "L7-5",
        type: "callout",
        variant: "tip",
        html: "<strong>Analogie :</strong> L'admin, c'est comme le code de la route. Si tu grilles un feu rouge (oubli de d\u00e9claration), tu ne te fais pas toujours attraper. Mais quand tu te fais contr\u00f4ler, l'amende est sal\u00e9e. Mieux vaut rouler propre d\u00e8s le d\u00e9part.",
      },
      {
        id: "L7-6",
        type: "heading",
        level: 2,
        text: "Erreur #1 \u2014 Oublier de d\u00e9clarer son CA \u00e0 l'URSSAF",
      },
      {
        id: "L7-7",
        type: "text",
        html: "<p>Chaque mois ou trimestre (tu choisis \u00e0 la cr\u00e9ation), tu dois d\u00e9clarer ton CA sur autoentrepreneur.urssaf.fr. <strong>M\u00eame si c'est 0\u20ac</strong>. Pas de d\u00e9claration = taxation d'office (l'URSSAF estime ton CA et te facture dessus) + p\u00e9nalit\u00e9 de retard.</p><p><strong>Cons\u00e9quence :</strong> P\u00e9nalit\u00e9 de 55\u20ac par d\u00e9claration manquante + taxation d'office pouvant aller jusqu'\u00e0 plusieurs milliers d'euros.</p>",
      },
      {
        id: "L7-8",
        type: "heading",
        level: 2,
        text: "Erreur #2 \u2014 M\u00e9langer compte perso et compte pro",
      },
      {
        id: "L7-9",
        type: "text",
        html: "<p>M\u00eame si le compte bancaire d\u00e9di\u00e9 n'est obligatoire qu'au-del\u00e0 de 10 000\u20ac de CA, m\u00e9langer les flux perso et pro est une <strong>tr\u00e8s mauvaise id\u00e9e</strong>. En cas de contr\u00f4le URSSAF ou fiscal, on te demandera de justifier chaque mouvement. Bonne chance pour trier 12 mois de Netflix, courses et factures client sur le m\u00eame relev\u00e9.</p><p><strong>Cons\u00e9quence :</strong> Contr\u00f4le fiscal facilit\u00e9, suspicion de fraude, impossibilit\u00e9 de justifier tes recettes.</p>",
      },
      {
        id: "L7-10",
        type: "heading",
        level: 2,
        text: "Erreur #3 \u2014 Ne pas garder ses justificatifs",
      },
      {
        id: "L7-11",
        type: "text",
        html: "<p>Toutes tes factures \u00e9mises et re\u00e7ues doivent \u00eatre conserv\u00e9es <strong>pendant 10 ans</strong>. Les relev\u00e9s bancaires aussi. En cas de contr\u00f4le, si tu ne peux pas produire une facture, l'URSSAF ou les imp\u00f4ts peuvent requalifier la transaction.</p><p><strong>Conseil :</strong> Cr\u00e9e un dossier Google Drive ou Dropbox \u00ab Compta 2026 \u00bb avec des sous-dossiers : Factures \u00e9mises, Factures re\u00e7ues, Relev\u00e9s bancaires. Scanne ou sauvegarde tout au format PDF d\u00e8s r\u00e9ception.</p>",
      },
      {
        id: "L7-12",
        type: "heading",
        level: 2,
        text: "Erreur #4 \u2014 Le mauvais code APE",
      },
      {
        id: "L7-13",
        type: "text",
        html: "<p>Un code APE inadapt\u00e9 peut te poser probl\u00e8me avec certains clients (marchés publics, grandes entreprises qui v\u00e9rifient), avec ton assurance RC Pro (exclusion de garantie si l'activit\u00e9 d\u00e9clar\u00e9e ne correspond pas), ou avec l'URSSAF (requalification possible).</p><p><strong>Cons\u00e9quence :</strong> Assurance RC Pro non valide, exclusion d'appels d'offres, complications administratives.</p>",
      },
      {
        id: "L7-14",
        type: "heading",
        level: 2,
        text: "Erreur #5 \u2014 Facturer sans CGV",
      },
      {
        id: "L7-15",
        type: "text",
        html: "<p>Les Conditions G\u00e9n\u00e9rales de Vente sont <strong>obligatoires</strong> pour toute activit\u00e9 commerciale B2B. Elles d\u00e9finissent les r\u00e8gles du jeu : d\u00e9lais de paiement, p\u00e9nalit\u00e9s de retard, conditions d'annulation, propri\u00e9t\u00e9 intellectuelle. Sans CGV, tu n'as aucune protection juridique en cas de litige avec un client.</p><p><strong>Cons\u00e9quence :</strong> Amende de 15 000\u20ac (personne physique) \u00e0 75 000\u20ac (personne morale) pour d\u00e9faut de CGV. Impossible de r\u00e9clamer des p\u00e9nalit\u00e9s de retard sans CGV pr\u00e9alablement accept\u00e9es.</p>",
      },
      {
        id: "L7-16",
        type: "heading",
        level: 2,
        text: "Erreur #6 \u2014 D\u00e9passer les seuils sans le savoir",
      },
      {
        id: "L7-17",
        type: "text",
        html: "<p>Deux seuils \u00e0 surveiller en permanence : le seuil de TVA (<strong>25 000\u20ac</strong>) et le plafond micro (<strong>77 700\u20ac</strong>). Si tu d\u00e9passes le seuil de TVA sans facturer la TVA, l'URSSAF peut te r\u00e9clamer la TVA r\u00e9troactivement \u2014 et c'est toi qui paies, pas ton client.</p><p><strong>Cons\u00e9quence :</strong> TVA r\u00e9troactive \u00e0 payer de ta poche + p\u00e9nalit\u00e9s de retard + perte de la franchise.</p>",
      },
      {
        id: "L7-18",
        type: "heading",
        level: 2,
        text: "Erreur #7 \u2014 Ne pas avoir de RC Pro",
      },
      {
        id: "L7-19",
        type: "text",
        html: "<p>On l'a vu dans la le\u00e7on pr\u00e9c\u00e9dente : un chatbot d\u00e9faillant, une faille de s\u00e9curit\u00e9, une perte de donn\u00e9es\u2026 sans RC Pro, tu paies de ta poche. En micro-entreprise avec responsabilit\u00e9 illimit\u00e9e, cela signifie potentiellement sur <strong>ton \u00e9pargne personnelle, ta voiture, voire ta maison</strong>.</p><p><strong>Cons\u00e9quence :</strong> Dommages-int\u00e9r\u00eats \u00e0 payer de ta poche, patrimoine personnel expos\u00e9.</p>",
      },
      {
        id: "L7-20",
        type: "heading",
        level: 3,
        text: "C'est quoi une bonne routine admin concr\u00e8tement ?",
      },
      {
        id: "L7-21",
        type: "diagram",
        variant: "process",
        nodes: [
          {
            id: "n1",
            label: "\u00c9tape 1 : V\u00e9rifier les paiements re\u00e7us",
            description: "Chaque d\u00e9but de mois, connecte-toi \u00e0 ton compte bancaire d\u00e9di\u00e9 et v\u00e9rifie que tous les paiements attendus sont bien arriv\u00e9s.",
          },
          {
            id: "n2",
            label: "\u00c9tape 2 : Mettre \u00e0 jour le livre de recettes",
            description: "Note chaque encaissement du mois pass\u00e9 dans ton livre de recettes avec : date, montant, client, n\u00b0 de facture.",
          },
          {
            id: "n3",
            label: "\u00c9tape 3 : D\u00e9clarer ton CA \u00e0 l'URSSAF",
            description: "Connecte-toi sur autoentrepreneur.urssaf.fr et d\u00e9clare ton CA du mois (ou du trimestre). M\u00eame si c'est 0\u20ac.",
          },
          {
            id: "n4",
            label: "\u00c9tape 4 : Archiver les factures et justificatifs",
            description: "Classe toutes les factures \u00e9mises et re\u00e7ues du mois dans ton dossier num\u00e9rique (Drive, Dropbox). V\u00e9rifie qu'aucune ne manque.",
          },
          {
            id: "n5",
            label: "\u00c9tape 5 : V\u00e9rifier tes seuils",
            description: "Calcule ton CA cumul\u00e9 depuis le 1er janvier. Compare avec le seuil TVA (25K\u20ac) et le plafond micro (77,7K\u20ac). Anticipe si besoin.",
          },
        ],
      },
      {
        id: "L7-22",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> La routine admin mensuelle, c'est comme faire le m\u00e9nage chez toi. 30 minutes par mois et tout est propre. Si tu laisses s'accumuler pendant 6 mois, c'est 3 jours de galère. Mets un rappel dans ton calendrier : \u00ab Admin du 1er \u00bb chaque mois.",
      },
      {
        id: "L7-23",
        type: "separator",
        style: "dots",
      },
      {
        id: "L7-24",
        type: "quiz-inline",
        question: "Que risques-tu si tu oublies de d\u00e9clarer ton CA \u00e0 l'URSSAF pendant 3 mois ?",
        options: [
          { id: "a", text: "Rien, tu peux rattraper quand tu veux" },
          { id: "b", text: "Une p\u00e9nalit\u00e9 de 55\u20ac par d\u00e9claration + une taxation d'office sur un CA estim\u00e9" },
          { id: "c", text: "La fermeture imm\u00e9diate de ta micro-entreprise" },
          { id: "d", text: "Un simple rappel par email sans cons\u00e9quence" },
        ],
        correctId: "b",
        explanation:
          "Chaque d\u00e9claration manquante entra\u00eene une p\u00e9nalit\u00e9 de 55\u20ac. L'URSSAF peut aussi proc\u00e9der \u00e0 une taxation d'office : elle estime ton CA (souvent au plafond) et te facture les charges dessus. Il faut ensuite prouver que tu as gagn\u00e9 moins pour obtenir un remboursement.",
      },
      {
        id: "L7-25",
        type: "checklist",
        title: "\u00c0 retenir",
        items: [
          { id: "c1", text: "Toujours d\u00e9clarer son CA \u00e0 l'URSSAF (m\u00eame si 0\u20ac)" },
          { id: "c2", text: "S\u00e9parer compte perso et compte pro d\u00e8s le d\u00e9but" },
          { id: "c3", text: "Archiver toutes les factures et justificatifs pendant 10 ans" },
          { id: "c4", text: "V\u00e9rifier que son code APE correspond \u00e0 son activit\u00e9 r\u00e9elle" },
          { id: "c5", text: "Avoir des CGV sign\u00e9es par chaque client avant de commencer" },
          { id: "c6", text: "Surveiller ses seuils TVA (25K\u20ac) et micro (77,7K\u20ac) chaque mois" },
          { id: "c7", text: "Souscrire une RC Pro d\u00e8s le premier client (15-40\u20ac/mois)" },
        ],
      },
      {
        id: "L7-26",
        type: "callout",
        variant: "success",
        title: "Exercice pratique",
        html: "<p>Cr\u00e9e ta routine admin mensuelle : (1) Mets un rappel r\u00e9current dans ton calendrier le 1er de chaque mois intitul\u00e9 \u00ab Admin micro-entreprise \u00bb. (2) Cr\u00e9e un dossier num\u00e9rique \u00ab Compta 2026 \u00bb avec les sous-dossiers : Factures \u00e9mises, Factures re\u00e7ues, Relev\u00e9s bancaires, D\u00e9clarations URSSAF. (3) Cr\u00e9e un tableur simple avec 3 colonnes : Mois, CA cumul\u00e9, Seuil TVA restant. (4) V\u00e9rifie que tu as bien une RC Pro active ou demande un devis d\u00e8s maintenant.</p>",
      },
    ]),
  },
];
