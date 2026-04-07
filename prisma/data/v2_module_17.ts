// ═══════════════════════════════════════════════════
// MODULE 17 — Créer ton offre
// 3 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_17_LESSONS = [
  // ─── LEÇON 1 : Les services IA les plus rentables à vendre ───
  {
    order: 1,
    module: 17,
    title: "Les services IA les plus rentables à vendre",
    slug: "v2-services-ia-rentables-vendre",
    duration: "25 min",
    description: "Découvre les 6 services IA les plus demandés par les entreprises, leur rentabilité, et comment te positionner sur les plus lucratifs en fonction de tes compétences.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Tous les services IA ne se valent pas" },
      { id: "1-2", type: "text", html: "<p>Tu peux techniquement vendre une centaine de services différents avec l'IA. Mais en pratique, certains sont <strong>10 fois plus rentables</strong> que d'autres. La clé est de choisir des services à forte valeur perçue où le client voit un retour sur investissement immédiat.</p><p>Un chatbot qui gère le support client 24h/24 ? Le client comprend instantanément la valeur. Un 'audit IA' vague ? Il ne sait pas ce qu'il achète.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> Vends un résultat, pas une technologie. Le client ne veut pas 'un chatbot RAG avec embeddings'. Il veut 'un assistant qui répond aux questions de ses clients instantanément et réduit ses coûts de support de 50%'." },

      { id: "1-14", type: "heading", level: 3, text: "La matrice valeur perçue / complexité" },
      { id: "1-15", type: "text", html: "<p>Avant de choisir tes services, comprends ce principe fondamental : ce qui compte, ce n'est pas la complexité technique, c'est la <strong>valeur perçue par le client</strong>. Un chatbot simple qui économise 20h de travail par semaine a plus de valeur perçue qu'un modèle ML sophistiqué dont le client ne comprend pas l'utilité.</p><p>Positionne chaque service sur 2 axes : facilité de mise en place (pour toi) et valeur perçue (pour le client). Le sweet spot, c'est <strong>facile à livrer + haute valeur perçue</strong>. C'est là que tu maximises ta marge.</p>" },
      { id: "1-16", type: "callout", variant: "info", html: "<strong>Exemple concret :</strong> Un chatbot FAQ entraîné sur la documentation d'un client te prend 8-15h de travail. Tu le factures 3 000-5 000 euros. Ton taux horaire effectif : 200-625 euros/h. Compare ça à de la facturation à l'heure à 50 euros... Le choix est vite fait." },

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 6 services IA les plus demandés" },
      { id: "1-6", type: "comparison", headers: ["Service", "Prix moyen", "Difficulté", "Demande"], rows: [
        { cells: ["Chatbot IA / Assistant client", "2 000 - 8 000 €", "Moyenne", "Très forte"] },
        { cells: ["Automatisation de workflows", "1 500 - 5 000 €", "Facile-Moyenne", "Très forte"] },
        { cells: ["Génération de contenu IA", "500 - 3 000 €/mois", "Facile", "Forte"] },
        { cells: ["Dashboard IA / Analyse de données", "3 000 - 10 000 €", "Élevée", "Moyenne"] },
        { cells: ["SaaS IA sur mesure", "5 000 - 25 000 €", "Élevée", "Moyenne"] },
        { cells: ["Formation IA en entreprise", "1 000 - 3 000 €/jour", "Facile", "Forte"] },
      ]},

      { id: "1-17", type: "heading", level: 3, text: "Comment lire ce tableau" },
      { id: "1-18", type: "text", html: "<p>La colonne 'Demande' reflète ce que les entreprises recherchent activement en 2024-2025. Les chatbots et l'automatisation dominent parce que chaque entreprise a du support client et des processus répétitifs. C'est universel.</p><p>La colonne 'Difficulté' concerne la complexité technique ET commerciale. Un chatbot est techniquement accessible mais demande une bonne compréhension du besoin client. Un SaaS IA est techniquement complexe et commercialement long à vendre (cycles de vente de 1-3 mois).</p><p>Le prix moyen est une fourchette pour des PME françaises de 10-100 employés. Pour des ETI ou grands comptes, multiplie par 2 à 5.</p>" },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Détail de chaque service" },
      { id: "1-9", type: "text", html: "<p><strong>1. Chatbot IA / Assistant client</strong></p><p>Le service le plus demandé et le plus facile à vendre. Un chatbot entraîné sur la documentation du client, connecté à son site web. Résultat : réponses instantanées 24h/24, réduction du volume de tickets support.</p><p><strong>2. Automatisation de workflows</strong></p><p>Automatiser des tâches répétitives : extraction de données depuis des emails, génération de rapports, classification automatique de documents. Tu connectes des APIs avec de l'IA pour faire gagner des heures chaque semaine.</p><p><strong>3. Génération de contenu IA</strong></p><p>Créer un système qui génère des articles, posts LinkedIn, descriptions produits, newsletters. Modèle récurrent (abonnement mensuel) très rentable.</p>" },

      { id: "1-19", type: "callout", variant: "tip", html: "<strong>Le chatbot est ton cheval de Troie :</strong> Un chatbot te donne accès à l'entreprise. Une fois en place, tu vois leurs processus internes, leurs pain points, leurs données. De là, tu proposes des automatisations, de la formation, un dashboard. Un seul chatbot peut générer 3-4 projets supplémentaires chez le même client." },

      { id: "1-10", type: "text", html: "<p><strong>4. Dashboard IA / Analyse de données</strong></p><p>Un tableau de bord qui analyse les données de l'entreprise avec l'IA : prédictions de ventes, analyse de sentiment clients, détection d'anomalies. Plus complexe mais très valorisé.</p><p><strong>5. SaaS IA sur mesure</strong></p><p>Le graal : développer une application complète avec de l'IA intégrée. Ticket moyen élevé, mais projet plus long et plus complexe. Idéal quand tu as de l'expérience.</p><p><strong>6. Formation IA en entreprise</strong></p><p>Former les équipes d'une entreprise à utiliser l'IA dans leur travail quotidien. Pas de code nécessaire, forte marge, et ça ouvre la porte à des projets techniques.</p>" },

      { id: "1-20", type: "heading", level: 3, text: "Cas concret : de 0 à 5 000 euros avec un chatbot" },
      { id: "1-21", type: "text", html: "<p>Imagine : tu contactes une agence immobilière de 15 personnes. Leur problème ? Ils reçoivent 50 appels par jour de prospects qui posent les mêmes questions : disponibilité des biens, prix, conditions de visite. Deux secrétaires passent 3h/jour à répondre.</p><p><strong>Ta solution :</strong> Un chatbot IA sur leur site web, entraîné sur leur catalogue de biens, qui répond instantanément aux questions des prospects et prend des rendez-vous de visite automatiquement.</p><p><strong>Le résultat :</strong> Les secrétaires récupèrent 6h de travail par jour (30h/semaine). Au SMIC chargé, ça représente environ 1 800 euros/mois d'économie. Ton chatbot à 4 000 euros est rentabilisé en 2,2 mois. C'est une vente facile.</p>" },

      { id: "1-22", type: "heading", level: 3, text: "Les secteurs les plus rentables" },
      { id: "1-23", type: "comparison", headers: ["Secteur", "Service phare", "Pourquoi ça marche"], rows: [
        { cells: ["Immobilier", "Chatbot + prise de RDV", "Volume de questions répétitives énorme"] },
        { cells: ["E-commerce", "Chatbot + automatisation commandes", "Support client 24/7 indispensable"] },
        { cells: ["Cabinets comptables", "Automatisation docs + classification", "Tonnes de documents à traiter"] },
        { cells: ["Agences marketing", "Génération de contenu", "Besoin permanent de contenu client"] },
        { cells: ["Santé / Cliniques", "Chatbot prise de RDV + FAQ", "Secrétariats débordés, réglementé"] },
        { cells: ["Formation / EdTech", "Chatbot pédagogique", "Accompagnement personnalisé scalable"] },
      ]},

      { id: "1-24", type: "callout", variant: "warning", html: "<strong>Erreur classique du débutant :</strong> Vouloir tout faire pour tout le monde. 'Je fais des chatbots, de l'automatisation, du contenu, des dashboards, du SaaS...' Résultat : tu ne te démarques nulle part. Choisis 1-2 services et 1-2 secteurs. Deviens LA référence sur ce créneau. Tu pourras élargir plus tard." },

      { id: "1-11", type: "heading", level: 2, text: "Par quoi commencer ?" },
      { id: "1-12", type: "steps", steps: [
        { title: "Débutant : Chatbot + Automatisation", description: "Les plus faciles à vendre et à livrer. Tu peux générer tes premiers revenus en 2-4 semaines." },
        { title: "Intermédiaire : Contenu IA + Formation", description: "Des services récurrents (abonnement) qui construisent un revenu stable. La formation ouvre des portes commerciales." },
        { title: "Avancé : Dashboard + SaaS", description: "Des projets à forte valeur ajoutée pour les clients qui ont un vrai budget. Nécessite plus d'expérience technique et commerciale." },
      ]},

      { id: "1-25", type: "heading", level: 3, text: "Le modèle de progression recommandé" },
      { id: "1-26", type: "text", html: "<p>Voici comment structurer ta montée en compétences et en revenus sur 12 mois :</p><ul><li><strong>Mois 1-3 :</strong> Livre 2-3 chatbots simples. Objectif : valider ton offre, avoir des témoignages, générer 3 000-8 000 euros.</li><li><strong>Mois 3-6 :</strong> Ajoute l'automatisation de workflows. Propose des chatbots + automatisation en bundle. Objectif : 5 000-12 000 euros/mois.</li><li><strong>Mois 6-9 :</strong> Introduis le contenu IA ou la formation en entreprise comme revenus récurrents. Objectif : 8 000-15 000 euros/mois.</li><li><strong>Mois 9-12 :</strong> Si tu le souhaites, lance-toi sur des projets plus complexes (dashboard, SaaS). Objectif : 12 000-25 000 euros/mois.</li></ul><p>Ce n'est pas un plan théorique. C'est ce que font concrètement les freelances IA qui réussissent.</p>" },

      { id: "1-13", type: "callout", variant: "info", html: "<strong>Le modèle idéal :</strong> Un service one-shot (chatbot, automatisation) pour l'acquisition, puis un service récurrent (maintenance, contenu IA) pour le revenu stable. Un client qui te paie 500€/mois pour la maintenance de son chatbot, c'est 6 000€/an garantis." },

      { id: "1-27", type: "heading", level: 3, text: "Construire ton avantage concurrentiel" },
      { id: "1-28", type: "text", html: "<p>Le marché de l'IA explose et la concurrence arrive. Voici comment te différencier dès le départ :</p><ul><li><strong>Spécialise-toi par secteur :</strong> 'Expert chatbot IA pour l'immobilier' bat 'Freelance IA généraliste' à chaque fois. Le client veut quelqu'un qui comprend SON métier.</li><li><strong>Crée des templates réutilisables :</strong> Un chatbot immobilier que tu as déjà fait 3 fois, tu le livres en 2 jours au lieu de 2 semaines. Ta marge explose.</li><li><strong>Documente tes résultats :</strong> '-60% de tickets support pour l'agence X', '+30% de leads qualifiés pour l'entreprise Y'. Les chiffres vendent mieux que les mots.</li><li><strong>Propose l'accompagnement :</strong> N'importe qui peut installer un chatbot. Mais toi, tu accompagnes le client pour maximiser les résultats. C'est ça la vraie valeur ajoutée.</li></ul>" },
    ]),
    exercise: "<h3>Exercice : Choisis tes services</h3><p>Définis ton offre de services :</p><ol><li>Évalue tes compétences actuelles : que peux-tu livrer aujourd'hui ?</li><li>Choisis 2 services dans la liste (1 one-shot + 1 récurrent)</li><li>Pour chaque service, écris la proposition de valeur en une phrase (résultat client, pas techno)</li><li>Estime ton prix en fonction du marché et de ton expérience</li><li>Identifie 3 secteurs d'activité qui ont le plus besoin de ces services</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le service IA avec la plus forte demande actuellement ?", options: JSON.stringify(["SaaS IA sur mesure", "Chatbot IA / Assistant client", "Dashboard IA", "Formation IA"]), correctAnswer: "Chatbot IA / Assistant client", explanation: "Les chatbots IA sont le service le plus demandé car la valeur est immédiatement compréhensible pour le client : réponses instantanées, 24h/24, réduction des coûts de support." },
      { type: "true_false", question: "Il faut vendre la technologie (RAG, embeddings, LLM) plutôt que le résultat au client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le client ne comprend pas et ne veut pas comprendre la technologie. Il veut un résultat : moins de support à gérer, du contenu créé automatiquement, des heures gagnées. Vends le bénéfice, pas l'outil." },
      { type: "mcq", question: "Quel modèle de facturation crée un revenu stable et récurrent ?", options: JSON.stringify(["Facturation au projet", "Abonnement mensuel", "Facturation à l'heure", "Facturation au résultat"]), correctAnswer: "Abonnement mensuel", explanation: "L'abonnement mensuel (maintenance, contenu, monitoring) crée un revenu prévisible. Un client à 500€/mois vaut 6 000€/an. 10 clients récurrents = 60 000€/an garantis." },
      { type: "mcq", question: "Par quel service devrait commencer un freelance IA débutant ?", options: JSON.stringify(["SaaS IA sur mesure", "Dashboard IA complexe", "Chatbot IA + Automatisation", "Conseil stratégique IA"]), correctAnswer: "Chatbot IA + Automatisation", explanation: "Les chatbots et l'automatisation sont les plus faciles à vendre (valeur évidente), à livrer (complexité maîtrisable) et permettent de générer des premiers revenus rapidement." },
      { type: "true_false", question: "La formation IA en entreprise est un bon moyen d'ouvrir la porte à des projets techniques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Former les équipes d'une entreprise te positionne comme l'expert IA de référence. Quand ils auront besoin de développer un projet concret, tu seras le premier qu'ils contacteront." },
      { type: "mcq", question: "Quel est le prix moyen d'un chatbot IA pour un client PME ?", options: JSON.stringify(["100 - 500 €", "2 000 - 8 000 €", "20 000 - 50 000 €", "100 000 €+"]), correctAnswer: "2 000 - 8 000 €", explanation: "Pour une PME, un chatbot IA entraîné sur la documentation de l'entreprise se vend entre 2 000 et 8 000€ selon la complexité, les intégrations et la taille de la base de connaissances." },
    ],
  },

  // ─── LEÇON 2 : Construire ton offre et fixer tes prix ───
  {
    order: 2,
    module: 17,
    title: "Construire ton offre et fixer tes prix",
    slug: "v2-construire-offre-fixer-prix",
    duration: "25 min",
    description: "Structure ton offre en packages clairs et apprends à fixer des prix qui reflètent ta valeur. Fini la facturation à l'heure qui te sous-vend.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le prix au forfait, pas à l'heure" },
      { id: "2-2", type: "text", html: "<p>La plus grosse erreur des freelances débutants : facturer à l'heure. Si tu factures 50€/h et que tu mets 20h, le client paie 1 000€. Mais si tu deviens plus efficace et que tu fais le même travail en 10h ? Tu gagnes 500€ pour la même valeur livrée.</p><p>La facturation à l'heure <strong>te pénalise quand tu deviens meilleur</strong>. Le forfait te récompense pour ta valeur, pas pour ton temps.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Principe de pricing :</strong> Fixe ton prix en fonction de la valeur que tu apportes au client, pas du temps que tu passes. Un chatbot qui économise 2 000€/mois au client vaut largement 5 000€ en one-shot." },

      { id: "2-14", type: "heading", level: 3, text: "La psychologie du prix" },
      { id: "2-15", type: "text", html: "<p>Le prix que tu annonces envoie un signal. Un chatbot à 500 euros dit au client : 'C'est un gadget, une expérimentation'. Un chatbot à 5 000 euros dit : 'C'est un investissement sérieux qui va transformer votre business'.</p><p>Les clients sérieux, ceux qui ont un vrai budget et qui veulent de vrais résultats, <strong>se méfient des prix trop bas</strong>. Ils se disent : 'Si c'est si peu cher, ça ne doit pas être terrible'. C'est contre-intuitif, mais augmenter tes prix peut augmenter tes ventes.</p>" },
      { id: "2-16", type: "callout", variant: "warning", html: "<strong>Piège du prix trop bas :</strong> Un freelance qui facture 30 euros/h attire des clients qui négocient chaque centime, changent d'avis constamment et ne respectent pas ton travail. Un freelance à 150 euros/h attire des décideurs qui savent ce qu'ils veulent et respectent ton expertise. Le prix filtre tes clients." },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "La stratégie des 3 packages" },
      { id: "2-6", type: "text", html: "<p>Proposer 3 options est une technique de pricing éprouvée. Le client choisit presque toujours le package du milieu (effet d'ancrage). Voici comment structurer tes 3 offres :</p>" },
      { id: "2-7", type: "comparison", headers: ["", "Essentiel", "Pro", "Premium"], rows: [
        { cells: ["Prix", "1 500 €", "3 500 €", "7 000 €"] },
        { cells: ["Chatbot", "Basique (FAQ)", "Avancé (RAG + sources)", "Custom + intégrations"] },
        { cells: ["Pages de contenu", "Jusqu'à 20", "Jusqu'à 100", "Illimité"] },
        { cells: ["Intégrations", "Widget site web", "Widget + WhatsApp", "Widget + WhatsApp + CRM"] },
        { cells: ["Support", "Email", "Email + visio", "Prioritaire + canal Discord dédié"] },
        { cells: ["Maintenance", "Non incluse", "3 mois inclus", "6 mois inclus"] },
      ]},

      { id: "2-17", type: "heading", level: 3, text: "Pourquoi 3 packages et pas 1 ou 5 ?" },
      { id: "2-18", type: "text", html: "<p>Avec <strong>1 seul prix</strong>, le client dit oui ou non. C'est binaire. Avec <strong>3 options</strong>, la question devient 'laquelle je choisis ?' au lieu de 'est-ce que j'achète ?'. Tu changes le cadre mental de la décision.</p><p>Pourquoi pas 5 ? Trop de choix paralyse. Le client ne sait plus quoi prendre et reporte sa décision. 3 options = le sweet spot cognitif.</p><p><strong>L'effet d'ancrage en action :</strong> Le package Premium à 7 000 euros fait paraître le Pro à 3 500 euros raisonnable. Sans le Premium, le client trouverait le Pro 'cher'. Le Premium sert autant de point de référence que de véritable offre.</p>" },

      { id: "2-8", type: "separator", style: "line" },

      { id: "2-9", type: "heading", level: 2, text: "Comment calculer ton prix" },
      { id: "2-10", type: "steps", steps: [
        { title: "Estime la valeur client", description: "Combien ton service fait gagner ou économiser au client ? Un chatbot qui remplace un mi-temps support (1 200€/mois) a une valeur de 14 400€/an." },
        { title: "Fixe ton prix à 10-30% de la valeur", description: "Si ton service fait économiser 14 400€/an, facture entre 1 500€ et 4 500€. Le client fait un x3 à x10 sur son investissement." },
        { title: "Vérifie ta marge", description: "Ton prix doit couvrir ton temps + les coûts (hébergement, APIs) + une marge. Si tu passes 30h et que tu vises 80€/h effectif, ton prix minimum est 2 400€." },
        { title: "Compare au marché", description: "Regarde ce que facturent d'autres freelances IA pour des services similaires. Positionne-toi en fonction de ton expérience et de ta qualité." },
      ]},

      { id: "2-19", type: "heading", level: 3, text: "Exemple chiffré : calculer le prix d'un chatbot" },
      { id: "2-20", type: "text", html: "<p>Prenons un cas réel pour appliquer la méthode :</p><p><strong>Le client :</strong> Un e-commerce de mode avec 200 commandes/jour et 80 emails de support quotidiens.</p><p><strong>Le problème :</strong> 2 personnes à plein temps gèrent le support (salaires chargés : 2 x 2 500 euros = 5 000 euros/mois). 60% des emails sont des questions répétitives (suivi de commande, retours, tailles).</p><p><strong>Ta solution :</strong> Un chatbot qui gère les 60% de questions répétitives automatiquement.</p><p><strong>Calcul de la valeur :</strong> 60% de 5 000 euros = 3 000 euros d'économie mensuelle. Sur un an : 36 000 euros.</p><p><strong>Ton prix :</strong> 10-30% de 36 000 euros = 3 600-10 800 euros. Un prix de 5 000-7 000 euros est parfaitement justifié. Le client a un ROI en 2 mois.</p><p><strong>Ton effort :</strong> 25-40h de travail. Ton taux horaire effectif : 125-280 euros/h.</p>" },

      { id: "2-21", type: "callout", variant: "tip", html: "<strong>Astuce de négociation :</strong> Présente toujours le prix mensuel en plus du prix total. '5 000 euros, soit moins de 420 euros/mois ramené sur un an' paraît beaucoup plus accessible que '5 000 euros'. Pour les retainers, mets en avant le gain mensuel : 'Pour 500 euros/mois, vous économisez 3 000 euros/mois. C'est un ROI de 6x.'" },

      { id: "2-11", type: "heading", level: 2, text: "Gérer les objections sur le prix" },
      { id: "2-12", type: "text", html: "<p>Les objections sur le prix sont normales. Voici comment y répondre :</p><ul><li><strong>'C'est trop cher'</strong> → 'Combien vous coûte actuellement ce problème chaque mois ? Mon service se rembourse en X mois.'</li><li><strong>'Un autre freelance fait moins cher'</strong> → 'Je comprends. Mon offre inclut [X, Y, Z] que d'autres ne proposent pas. Vous payez pour un résultat garanti, pas juste du code.'</li><li><strong>'On n'a pas le budget'</strong> → 'Je comprends. On peut commencer par le package Essentiel et évoluer quand vous verrez les résultats.'</li></ul>" },

      { id: "2-22", type: "heading", level: 3, text: "Les 5 erreurs de pricing qui tuent ta rentabilité" },
      { id: "2-23", type: "steps", steps: [
        { title: "Erreur 1 : Facturer à l'heure", description: "Tu es pénalisé quand tu deviens plus efficace. Passe au forfait basé sur la valeur." },
        { title: "Erreur 2 : Sous-estimer tes coûts cachés", description: "API OpenAI, hébergement, temps de communication, support post-livraison, gestion administrative... Ajoute 30% à ton estimation de coûts." },
        { title: "Erreur 3 : Ne pas prévoir de marge d'erreur", description: "Un projet prend toujours plus de temps que prévu. Ajoute 20-30% de marge dans tes estimations de temps." },
        { title: "Erreur 4 : Accepter des révisions illimitées", description: "2-3 révisions incluses dans le forfait. Au-delà, c'est facturé en supplément. Écris-le dans le contrat." },
        { title: "Erreur 5 : Ne pas facturer l'urgence", description: "Un client qui veut son chatbot en 5 jours au lieu de 3 semaines ? Majoration de 30-50%. L'urgence a un prix." },
      ]},

      { id: "2-13", type: "callout", variant: "warning", html: "<strong>Piège à éviter :</strong> Ne baisse JAMAIS ton prix sans retirer du périmètre. Si le client veut payer moins, propose un package réduit. Baisser le prix pour le même travail, c'est dévaloriser ton expertise." },

      { id: "2-24", type: "heading", level: 3, text: "Quand augmenter tes prix" },
      { id: "2-25", type: "text", html: "<p>Tu dois augmenter tes prix quand :</p><ul><li><strong>Ton taux de conversion dépasse 50% :</strong> Si plus d'un prospect sur deux accepte ton prix sans négocier, tu es trop cheap. Augmente de 20-30%.</li><li><strong>Tu refuses des projets par manque de temps :</strong> C'est le signal clair que la demande dépasse l'offre. Augmente tes prix pour filtrer et maximiser ta rentabilité.</li><li><strong>Tu as des études de cas solides :</strong> Chaque résultat prouvé te permet de justifier un prix plus élevé. '-60% de tickets support' vaut plus que 'je suis bon en chatbot'.</li><li><strong>Tous les 6 mois minimum :</strong> Ton expérience augmente, tes process s'améliorent, tes livrables sont meilleurs. Tes prix doivent suivre.</li></ul>" },

      { id: "2-26", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Ajoute toujours une option de maintenance mensuelle. C'est là que tu construis ton revenu récurrent. Propose 200-500€/mois pour les mises à jour, le monitoring et le support." },
    ]),
    exercise: "<h3>Exercice : Crée tes packages</h3><p>Structure ton offre commerciale :</p><ol><li>Choisis ton service principal (chatbot, automatisation, etc.)</li><li>Crée 3 packages (Essentiel, Pro, Premium) avec des fonctionnalités croissantes</li><li>Calcule le prix de chaque package selon la méthode valeur client</li><li>Rédige 3 réponses aux objections les plus courantes</li><li>Prépare une option de maintenance mensuelle avec son prix</li></ol>",
    quiz: [
      { type: "mcq", question: "Pourquoi la facturation à l'heure est-elle déconseillée pour un freelance IA ?", options: JSON.stringify(["Parce que c'est illégal", "Parce qu'elle te pénalise quand tu deviens plus efficace", "Parce que les clients refusent ce modèle", "Parce que c'est plus compliqué à calculer"]), correctAnswer: "Parce qu'elle te pénalise quand tu deviens plus efficace", explanation: "Plus tu deviens compétent, moins tu passes de temps. La facturation à l'heure te punit pour ta progression. Le forfait te récompense pour la valeur livrée, pas le temps passé." },
      { type: "true_false", question: "Proposer 3 packages augmente les chances que le client choisisse l'option du milieu.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est l'effet d'ancrage : le package du milieu paraît raisonnable comparé au Premium (trop cher) et plus complet que l'Essentiel (trop basique). La majorité des clients choisissent le milieu." },
      { type: "mcq", question: "À quel pourcentage de la valeur client devrait se situer ton prix ?", options: JSON.stringify(["1-5%", "10-30%", "50-70%", "80-100%"]), correctAnswer: "10-30%", explanation: "En facturant 10 à 30% de la valeur générée pour le client, tu lui assures un retour sur investissement de x3 à x10. C'est un prix facile à justifier car le client gagne nettement plus qu'il ne paie." },
      { type: "mcq", question: "Que faire quand un client dit 'c'est trop cher' ?", options: JSON.stringify(["Baisser le prix immédiatement", "Demander combien lui coûte actuellement le problème que tu résous", "Abandonner le prospect", "Doubler le prix pour montrer ta valeur"]), correctAnswer: "Demander combien lui coûte actuellement le problème que tu résous", explanation: "En recentrant la conversation sur le coût du problème, tu montres que ton service est un investissement rentable. Si le problème coûte 2 000€/mois et que tu factures 3 500€, il est rentabilisé en moins de 2 mois." },
      { type: "true_false", question: "Il est acceptable de baisser son prix sans réduire le périmètre du projet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Baisser le prix sans réduire le périmètre dévalue ton expertise et crée un précédent. Si le client veut payer moins, propose un package avec moins de fonctionnalités." },
    ],
  },

  // ─── LEÇON 3 : Ta page d'offre et tes supports de vente ───
  {
    order: 3,
    module: 17,
    title: "Ta page d'offre et tes supports de vente",
    slug: "v2-page-offre-supports-vente",
    duration: "20 min",
    description: "Crée une page d'offre qui convertit et les supports de vente qui ferment les deals : présentation, devis professionnel et proposition commerciale.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Tes supports de vente font le travail pour toi" },
      { id: "3-2", type: "text", html: "<p>Un bon freelance ne vend pas en improvisant. Il a des <strong>supports préparés</strong> qui travaillent pour lui : une page d'offre qui pré-vend, une présentation qui convainc, et un devis qui facilite la décision.</p><p>Ces supports réduisent le temps de vente et augmentent ton taux de conversion. Un prospect qui arrive sur ta page d'offre bien faite est déjà à moitié convaincu avant même de te parler.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "<strong>La règle :</strong> Chaque support doit répondre à 3 questions du prospect : (1) Est-ce que ça résout MON problème ? (2) Pourquoi LUI et pas un autre ? (3) Combien ça coûte et qu'est-ce que j'obtiens ?" },

      { id: "3-14", type: "heading", level: 3, text: "L'erreur du freelance invisible" },
      { id: "3-15", type: "text", html: "<p>Tu sais ce qui est pire que des supports de vente moches ? Ne pas en avoir du tout. La majorité des freelances IA se contentent d'un profil LinkedIn et envoient leurs prix par message. Pas de page d'offre, pas de PDF de présentation, pas de devis structuré.</p><p>Résultat : le prospect compare ton message de 3 lignes avec la proposition de 10 pages d'une agence qui a des études de cas, des témoignages et un devis ultra-clair. Qui va-t-il choisir ?</p><p><strong>Tes supports de vente sont ton armée silencieuse.</strong> Ils vendent quand tu dors, quand tu travailles sur un autre projet, quand tu es en vacances. Un prospect qui tombe sur ta page d'offre à 23h peut prendre sa décision et réserver un appel avant même que tu te réveilles.</p>" },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "La page d'offre : structure qui convertit" },
      { id: "3-6", type: "steps", steps: [
        { title: "Le hook (accroche)", description: "Une phrase qui décrit le problème du client. Ex : 'Votre équipe support passe 4h/jour à répondre aux mêmes questions. Et si un assistant IA le faisait pour vous ?'" },
        { title: "Le problème détaillé", description: "Décris la douleur du client en 3-4 points. Montre que tu comprends sa réalité quotidienne. Il doit se dire 'c'est exactement mon problème'." },
        { title: "Ta solution", description: "Présente ton service comme LA réponse. Explique concrètement ce que tu livres, sans jargon technique." },
        { title: "Les résultats", description: "Chiffres concrets de tes clients précédents. '-60% de tickets support', '+30% de satisfaction client', '15h économisées par semaine'." },
        { title: "Les packages et prix", description: "Présente tes 3 offres avec un CTA clair pour chacune : 'Réserver un appel découverte gratuit'." },
        { title: "La preuve sociale", description: "Témoignages clients, logos d'entreprises, études de cas courtes. La preuve que d'autres t'ont fait confiance." },
        { title: "Le CTA final", description: "Un bouton visible : 'Discutons de votre projet — Appel gratuit de 30 min'. Lien vers Calendly ou Cal.com." },
      ]},

      { id: "3-16", type: "heading", level: 3, text: "Les erreurs qui tuent ta page d'offre" },
      { id: "3-17", type: "comparison", headers: ["Ce qui ne marche pas", "Ce qui convertit"], rows: [
        { cells: ["Parler de toi en premier ('Je suis expert en...')", "Parler du problème du client en premier ('Vous perdez...')"] },
        { cells: ["Jargon technique (RAG, embeddings, API)", "Langage business (gain de temps, économies, résultats)"] },
        { cells: ["Un seul CTA en bas de page", "Un CTA après chaque section clé"] },
        { cells: ["Pas de prix affichés ('Sur devis')", "Fourchettes de prix claires avec packages"] },
        { cells: ["Texte uniquement, pas de visuels", "Screenshots, vidéos démo, schémas avant/après"] },
        { cells: ["Pas d'urgence ('Contactez-moi quand vous voulez')", "Créneaux limités ('Plus que 2 places ce mois-ci')"] },
      ]},

      { id: "3-18", type: "callout", variant: "warning", html: "<strong>Attention au 'Sur devis' :</strong> Ne pas afficher ses prix fait fuir 80% des prospects. Ils n'ont pas envie de prendre un appel juste pour connaître le prix. Affiche au minimum une fourchette. Les prospects qui arrivent en appel connaissant déjà tes prix sont bien plus qualifiés." },

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Le devis professionnel" },
      { id: "3-9", type: "text", html: "<p>Un devis n'est pas une simple liste de prix. C'est un <strong>document de vente</strong>. Il doit contenir :</p><ul><li><strong>Contexte :</strong> résumé du besoin du client (montre que tu as compris)</li><li><strong>Solution proposée :</strong> ce que tu vas livrer concrètement</li><li><strong>Livrables :</strong> liste précise de ce qui est inclus</li><li><strong>Planning :</strong> étapes et dates de livraison</li><li><strong>Prix :</strong> forfait avec les conditions de paiement (30% à la commande, 70% à la livraison)</li><li><strong>Validité :</strong> durée de validité du devis (15-30 jours)</li><li><strong>Conditions :</strong> nombre de révisions incluses, hors périmètre</li></ul>" },

      { id: "3-19", type: "heading", level: 3, text: "La section qui fait toute la différence dans un devis" },
      { id: "3-20", type: "text", html: "<p>La section 'Hors périmètre' (ou 'Ce qui n'est pas inclus') est aussi importante que la section 'Livrables'. Elle te protège du scope creep et clarifie les attentes.</p><p><strong>Exemple pour un chatbot :</strong></p><ul><li>Inclus : Configuration du chatbot, entraînement sur 50 pages de documentation, widget site web, 2 révisions, 1 semaine de test</li><li>Non inclus : Rédaction de la documentation source, intégration CRM, support multilingue, application mobile, formation des équipes</li></ul><p>Chaque élément 'non inclus' est un <strong>upsell potentiel</strong>. Le client voit que tu peux aller plus loin, et il peut décider d'ajouter des éléments via un avenant.</p>" },

      { id: "3-10", type: "heading", level: 2, text: "La présentation client (deck)" },
      { id: "3-11", type: "text", html: "<p>Pour les projets plus importants, prépare un deck de 8-10 slides :</p><ol><li><strong>Slide 1 :</strong> Titre + ton nom + logo</li><li><strong>Slide 2-3 :</strong> Le problème du client (ses douleurs)</li><li><strong>Slide 4-5 :</strong> Ta solution (comment tu résous le problème)</li><li><strong>Slide 6 :</strong> Résultats et études de cas</li><li><strong>Slide 7 :</strong> Les packages et prix</li><li><strong>Slide 8 :</strong> Planning et prochaines étapes</li><li><strong>Slide 9 :</strong> Témoignages et preuve sociale</li><li><strong>Slide 10 :</strong> CTA — Comment on démarre</li></ol>" },

      { id: "3-21", type: "heading", level: 3, text: "Comment construire ta preuve sociale quand tu débutes" },
      { id: "3-22", type: "text", html: "<p>Le problème du débutant : 'Je n'ai pas encore de clients, comment avoir des témoignages ?' Voici comment contourner le problème :</p><ul><li><strong>Projets personnels :</strong> Crée un chatbot pour ton propre site ou celui d'un ami. Documente le processus et les résultats. C'est une étude de cas.</li><li><strong>Offre de lancement :</strong> Propose un prix réduit à 2-3 clients en échange d'un témoignage écrit et du droit d'utiliser leur projet comme référence.</li><li><strong>Projets fictifs réalistes :</strong> Crée une démo de chatbot pour un secteur cible (ex : chatbot pour une agence immobilière fictive). Montre le résultat en vidéo.</li><li><strong>Certifications et formations :</strong> En attendant les témoignages clients, mets en avant tes compétences validées.</li></ul><p>L'objectif est de ne jamais avoir une page d'offre vide. Même 1 témoignage est mieux que 0.</p>" },

      { id: "3-23", type: "callout", variant: "tip", html: "<strong>Le hack du témoignage :</strong> Après chaque projet réussi, envoie ce message : 'Bonjour [Prénom], je suis ravi que le projet vous plaise ! Seriez-vous d'accord pour écrire 2-3 phrases sur notre collaboration ? Voici 3 questions pour vous guider : (1) Quel était votre problème ? (2) Comment le projet l'a résolu ? (3) Recommanderiez-vous mes services ?' Tu obtiens un témoignage en 5 minutes." },

      { id: "3-12", type: "comparison", headers: ["Support amateur", "Support pro"], rows: [
        { cells: ["Devis en texte brut par email", "Devis PDF structuré avec branding"] },
        { cells: ["'Je fais des chatbots, voici mon prix'", "Contexte client + solution + résultats + prix"] },
        { cells: ["Pas de preuve sociale", "Témoignages + études de cas + chiffres"] },
        { cells: ["'Contactez-moi quand vous voulez'", "CTA clair : lien de réservation d'appel"] },
      ]},

      { id: "3-24", type: "heading", level: 3, text: "Les outils pour créer tes supports rapidement" },
      { id: "3-25", type: "comparison", headers: ["Support", "Outil recommandé", "Alternative gratuite"], rows: [
        { cells: ["Page d'offre / Landing page", "Framer ou Webflow", "Carrd (9$/an) ou Notion public"] },
        { cells: ["Devis professionnel", "PandaDoc ou Proposify", "Notion template ou Google Docs"] },
        { cells: ["Présentation (deck)", "Pitch ou Canva Pro", "Google Slides ou Canva gratuit"] },
        { cells: ["Prise de RDV", "Cal.com ou Calendly", "Cal.com (gratuit)"] },
        { cells: ["Vidéo de démo", "Loom", "Loom (gratuit jusqu'à 5 min)"] },
      ]},

      { id: "3-13", type: "callout", variant: "info", html: "<strong>Outils recommandés :</strong> Canva ou Pitch pour les présentations, Notion ou Google Docs pour les devis, Cal.com pour la prise de RDV. Investis dans un bon template — tu le réutiliseras pour chaque client." },
    ]),
    exercise: "<h3>Exercice : Créer tes supports de vente</h3><p>Prépare tout ton arsenal commercial :</p><ol><li>Crée ta page d'offre avec les 7 sections (hook, problème, solution, résultats, packages, preuve sociale, CTA)</li><li>Rédige un template de devis professionnel réutilisable</li><li>Crée un deck de 8-10 slides pour tes rendez-vous prospects</li><li>Configure un lien de prise de RDV (Cal.com ou Calendly) et intègre-le partout</li><li>Teste ta page d'offre : envoie-la à 3 personnes et demande leur feedback</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la première section d'une page d'offre efficace ?", options: JSON.stringify(["Les prix", "Le hook (accroche) qui décrit le problème du client", "Ton CV", "Les témoignages"]), correctAnswer: "Le hook (accroche) qui décrit le problème du client", explanation: "La page d'offre commence par une accroche qui décrit le problème du client. Il doit immédiatement se reconnaître et se dire 'c'est exactement mon problème'. Ensuite seulement, tu présentes ta solution." },
      { type: "true_false", question: "Un devis est simplement une liste de prix envoyée par email.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un devis professionnel est un document de vente complet : contexte client, solution proposée, livrables, planning, prix et conditions. Il montre que tu as compris le besoin et rassure le client sur ce qu'il obtient." },
      { type: "mcq", question: "Quelles sont les 3 questions auxquelles chaque support de vente doit répondre ?", options: JSON.stringify(["Qui, quoi, quand", "Combien ça coûte, quand c'est prêt, c'est garanti ?", "Est-ce que ça résout mon problème, pourquoi lui, combien ça coûte", "Quelle technologie, combien de temps, quel hébergement"]), correctAnswer: "Est-ce que ça résout mon problème, pourquoi lui, combien ça coûte", explanation: "Le prospect veut savoir : (1) si ton service résout SON problème spécifique, (2) pourquoi te choisir toi plutôt qu'un autre, (3) combien ça coûte et ce qu'il obtient concrètement." },
      { type: "mcq", question: "Quelle est la condition de paiement recommandée pour un projet freelance ?", options: JSON.stringify(["100% à la livraison", "30% à la commande, 70% à la livraison", "100% avant de commencer", "Paiement en 12 mensualités"]), correctAnswer: "30% à la commande, 70% à la livraison", explanation: "Le 30/70 est le standard : 30% à la commande finance ton démarrage et engage le client, 70% à la livraison garantit que tu es payé pour ton travail. Pour les gros projets, tu peux ajouter un 40% intermédiaire." },
      { type: "true_false", question: "La preuve sociale (témoignages, études de cas) est optionnelle sur une page d'offre.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La preuve sociale est essentielle. Les prospects font confiance aux retours d'autres clients bien plus qu'à tes propres affirmations. Témoignages, chiffres concrets et logos d'entreprises renforcent significativement la crédibilité." },
      { type: "mcq", question: "Combien de slides un deck de présentation client devrait-il avoir ?", options: JSON.stringify(["3-5 slides", "8-10 slides", "20-30 slides", "50+ slides"]), correctAnswer: "8-10 slides", explanation: "Un deck de 8-10 slides est suffisant pour couvrir le problème, la solution, les résultats, les prix et les prochaines étapes. Plus de slides et tu perds l'attention du prospect." },
    ],
  },
];
