// ═══════════════════════════════════════════════════
// MODULE 19 — Closer
// 3 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_19_LESSONS = [
  {
    order: 1,
    module: 19,
    title: "L'appel de closing : structure et mindset",
    slug: "v2-appel-closing-structure-mindset",
    duration: "25 min",
    description: "Maîtriser la structure d'un appel de closing efficace, adopter le bon état d'esprit et conduire ton prospect jusqu'à la décision.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi le closing est une compétence à part entière" },
      { id: "1-2", type: "text", html: "<p>Beaucoup de freelances et agences IA font un excellent travail de prospection et de qualification, mais perdent le deal au moment de conclure. Le closing n'est pas un talent inné : c'est une <strong>compétence structurée</strong> qui s'apprend et se perfectionne avec la pratique.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> Le closing commence bien avant l'appel. Si ta phase de découverte et ta proposition sont solides, le closing devient une formalité." },

      { id: "1-12", type: "heading", level: 3, text: "Le closing dans le contexte de l'agence IA" },
      { id: "1-13", type: "text", html: "<p>Vendre des services IA a une particularité : tu vends quelque chose que la plupart des prospects <strong>ne comprennent pas vraiment</strong>. Ils ont entendu parler de ChatGPT, ils savent vaguement que l'IA peut les aider, mais ils ne savent pas concrètement ce que tu vas leur livrer.</p><p>C'est à la fois un défi et une opportunité. Le défi : tu dois éduquer en même temps que tu vends. L'opportunité : très peu de freelances IA savent bien vendre. Si tu maîtrises le closing, tu as un avantage concurrentiel massif sur tous les développeurs qui sont excellents techniquement mais incapables de conclure un deal.</p><p>En réalité, <strong>la capacité à closer est plus importante que la compétence technique</strong> pour réussir en agence IA. Un freelance moyen techniquement mais excellent en vente gagnera toujours plus qu'un génie technique qui ne sait pas vendre.</p>" },

      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Le mindset du closer" },
      { id: "1-6", type: "text", html: "<p>Le closing n'est pas de la manipulation. Tu ne forces personne à acheter. Tu <strong>aides ton prospect à prendre une décision</strong> qui est dans son intérêt. Si ta solution résout vraiment son problème, ne pas closer serait lui rendre un mauvais service.</p><p>Les 3 piliers du mindset :</p><ul><li><strong>Confiance :</strong> Tu crois en ta solution parce que tu sais qu'elle fonctionne.</li><li><strong>Détachement :</strong> Tu veux le deal, mais tu n'en as pas besoin. Cette posture te rend plus convaincant.</li><li><strong>Service :</strong> Tu es là pour aider, pas pour vendre. Le prospect le ressent.</li></ul>" },
      { id: "1-7", type: "callout", variant: "warning", html: "<strong>Erreur fatale :</strong> Arriver en appel de closing avec un ton désespéré ou suppliant. Le prospect sent immédiatement que tu as besoin de lui plus qu'il n'a besoin de toi. Ça tue la vente." },

      { id: "1-14", type: "heading", level: 3, text: "Comment construire le détachement quand tu as besoin du deal" },
      { id: "1-15", type: "text", html: "<p>Soyons réalistes : quand tu démarres et que tu as 0 client, le détachement est difficile. Tu as BESOIN de ce deal. Alors comment faire ?</p><ul><li><strong>Pipeline :</strong> La meilleure façon d'être détaché, c'est d'avoir d'autres prospects en attente. Prospecte en continu pour ne jamais dépendre d'un seul deal.</li><li><strong>Visualisation :</strong> Avant l'appel, visualise-toi en train de raccrocher sereinement quel que soit le résultat. Tu as d'autres options.</li><li><strong>Le 'plan B' mental :</strong> Rappelle-toi que même si ce deal ne se fait pas, un autre viendra. C'est statistiquement inévitable si tu prospectes régulièrement.</li><li><strong>La posture du médecin :</strong> Un médecin ne supplie pas son patient de prendre le traitement. Il diagnostique, prescrit, et c'est au patient de décider. Adopte la même posture : tu es l'expert qui propose une solution.</li></ul>" },

      { id: "1-16", type: "callout", variant: "info", html: "<strong>Le cercle vertueux :</strong> Plus tu closes de deals, plus tu as de clients, plus tu as confiance, plus tu es détaché, plus tu closes facilement. Le début est toujours le plus dur. Après 3-4 clients, le mindset se met en place naturellement." },

      { id: "1-8", type: "heading", level: 2, text: "La structure en 5 phases de l'appel de closing" },
      { id: "1-9", type: "steps", steps: [
        { title: "Phase 1 — Récapitulation (2-3 min)", description: "Rappelle le contexte : son problème, ce que vous avez discuté, la solution proposée. 'Pour résumer, vous m'avez dit que [problème]. On a vu ensemble que [solution]. Est-ce que c'est toujours d'actualité ?'" },
        { title: "Phase 2 — Validation des enjeux (3-5 min)", description: "Fais-lui verbaliser l'impact du problème et l'urgence. 'Quel est le coût de ne rien faire pendant encore 3 mois ?' Cette question crée l'urgence naturellement." },
        { title: "Phase 3 — Présentation de l'offre (5-7 min)", description: "Présente ta proposition en liant chaque élément à un besoin exprimé. Pas de features, que des bénéfices. 'Vous aurez X, ce qui vous permettra de Y.'" },
        { title: "Phase 4 — Traitement des objections (5-10 min)", description: "Écoute, reformule, réponds. Ne te défends jamais. Chaque objection est une demande d'information déguisée." },
        { title: "Phase 5 — Le close (2-3 min)", description: "Propose les prochaines étapes concrètes. 'Si on avance ensemble, voici comment ça se passe : je vous envoie le contrat ce soir, vous signez, et on démarre lundi. Ça vous va ?'" },
      ]},

      { id: "1-17", type: "heading", level: 3, text: "Phase par phase : les erreurs à ne pas commettre" },
      { id: "1-18", type: "comparison", headers: ["Phase", "Erreur courante", "Ce qu'il faut faire"], rows: [
        { cells: ["Récapitulation", "Sauter cette phase et attaquer directement le prix", "Prendre 2-3 min pour remettre le prospect dans le contexte"] },
        { cells: ["Validation des enjeux", "Poser des questions fermées (oui/non)", "Poser des questions ouvertes qui font réfléchir ('Quel impact...')"] },
        { cells: ["Présentation de l'offre", "Présenter TOUTES les features techniques", "Ne présenter que les bénéfices liés aux besoins exprimés"] },
        { cells: ["Objections", "Se mettre sur la défensive", "Accueillir avec empathie, reformuler, puis répondre"] },
        { cells: ["Close", "Attendre que le prospect dise 'ok je signe'", "Proposer activement les prochaines étapes concrètes"] },
      ]},

      { id: "1-19", type: "heading", level: 3, text: "Les techniques de closing qui fonctionnent" },
      { id: "1-20", type: "text", html: "<p>Voici 4 techniques de closing éprouvées, de la plus douce à la plus directe :</p><ul><li><strong>Le closing par résumé :</strong> 'Donc, si je résume : vous avez besoin de [X], ça vous ferait économiser [Y], et on peut le mettre en place en [Z] semaines. On avance ?' Simple, efficace, naturel.</li><li><strong>Le closing par alternative :</strong> 'Vous préférez qu'on parte sur le package Pro ou le package Premium ?' Tu ne demandes pas SI il achète, mais LEQUEL il choisit. Le 'non' n'est pas une option.</li><li><strong>Le closing par urgence naturelle :</strong> 'J'ai une place qui se libère la semaine prochaine. Si on signe cette semaine, on peut démarrer lundi. Sinon, le prochain créneau est dans 3 semaines.' C'est vrai en plus : si tu es occupé, dis-le.</li><li><strong>Le closing direct :</strong> 'Est-ce qu'on avance ensemble sur ce projet ?' Parfois, la simplicité est la meilleure approche. N'aie pas peur de poser la question directement.</li></ul>" },

      { id: "1-21", type: "callout", variant: "tip", html: "<strong>La technique du silence :</strong> Après avoir annoncé ton prix ou posé la question de closing, TAIS-TOI. Le premier qui parle perd. Laisse le silence travailler. Le prospect a besoin de quelques secondes pour réfléchir. Si tu remplis le silence, tu affaiblis ta position." },

      { id: "1-10", type: "comparison", headers: ["Closer amateur", "Closer professionnel"], rows: [
        { cells: ["Parle 80% du temps", "Écoute 70% du temps"] },
        { cells: ["Présente des features", "Présente des résultats"] },
        { cells: ["Évite le sujet du prix", "Annonce le prix avec confiance"] },
        { cells: ["Espère que le prospect dira oui", "Guide vers la décision"] },
        { cells: ["Envoie un devis et attend", "Propose les next steps en live"] },
      ]},
      { id: "1-11", type: "callout", variant: "tip", html: "<strong>Astuce pratique :</strong> Enregistre tes appels de closing (avec le consentement du prospect) et réécoute-les. Tu identifieras rapidement tes tics de langage, tes hésitations et tes points d'amélioration." },

      { id: "1-22", type: "heading", level: 3, text: "Avant l'appel : la préparation qui fait la différence" },
      { id: "1-23", type: "checklist", title: "Checklist de préparation avant un appel de closing", items: [
        { id: "c1", text: "Relis tes notes de l'appel découverte (besoins, douleurs, budget évoqué)" },
        { id: "c2", text: "Prépare ta proposition personnalisée (pas un template générique)" },
        { id: "c3", text: "Anticipe les 3 objections les plus probables et prépare tes réponses" },
        { id: "c4", text: "Vérifie que ton devis/contrat est prêt à être envoyé dans la minute" },
        { id: "c5", text: "Prépare ton lien de paiement (Stripe) pour l'acompte" },
        { id: "c6", text: "Choisis un environnement calme, teste ta connexion et ton micro" },
        { id: "c7", text: "Fais un exercice de respiration : 4 secondes inspiration, 4 secondes expiration, 3 fois" },
      ]},
    ]),
    exercise: "<h3>Exercice : Simuler un appel de closing</h3><p>Prépare et joue un appel de closing complet :</p><ol><li>Choisis un prospect fictif : une PME de 20 salariés qui veut automatiser son support client avec un chatbot IA. Budget estimé : 3 000€.</li><li>Rédige ton script pour chacune des 5 phases (récapitulation, validation, présentation, objections, close).</li><li>Demande à un ami de jouer le rôle du prospect en posant des questions difficiles.</li><li>Enregistre la simulation et identifie 3 points d'amélioration.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le bon ratio parole/écoute pour un closer professionnel lors d'un appel ?", options: JSON.stringify(["80% parole / 20% écoute", "50% parole / 50% écoute", "30% parole / 70% écoute", "10% parole / 90% écoute"]), correctAnswer: "30% parole / 70% écoute", explanation: "Un closer professionnel écoute 70% du temps et parle seulement 30%. L'écoute active permet de comprendre les vrais besoins et objections du prospect." },
      { type: "true_false", question: "Le closing est un talent inné qu'on ne peut pas apprendre.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le closing est une compétence structurée qui s'apprend et se perfectionne avec la pratique. Il repose sur une structure en 5 phases et un mindset qu'on peut développer." },
      { type: "mcq", question: "Quelle est la première phase d'un appel de closing ?", options: JSON.stringify(["Présentation de l'offre", "Traitement des objections", "Récapitulation du contexte", "Annonce du prix"]), correctAnswer: "Récapitulation du contexte", explanation: "L'appel commence par la récapitulation : rappeler le problème du prospect, ce qui a été discuté et la solution proposée. Cela remet tout le monde dans le contexte." },
      { type: "mcq", question: "Quelle question crée de l'urgence naturellement pendant la phase de validation ?", options: JSON.stringify(["Combien êtes-vous prêt à investir ?", "Quel est le coût de ne rien faire pendant encore 3 mois ?", "Avez-vous regardé la concurrence ?", "Quand voulez-vous commencer ?"]), correctAnswer: "Quel est le coût de ne rien faire pendant encore 3 mois ?", explanation: "Cette question fait prendre conscience au prospect du coût de l'inaction. Elle crée une urgence naturelle sans pression artificielle." },
      { type: "true_false", question: "Il est recommandé d'envoyer un devis par email et d'attendre la réponse plutôt que de closer en live.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un closer professionnel propose les next steps directement en appel. Envoyer un devis et attendre laisse le prospect refroidir et réduit considérablement le taux de conversion." },
      { type: "mcq", question: "Quel est le bon mindset à adopter avant un appel de closing ?", options: JSON.stringify(["J'ai absolument besoin de ce deal pour payer mes factures", "Je suis là pour aider mon prospect à prendre la meilleure décision", "Je dois convaincre le prospect coûte que coûte", "Je vais utiliser des techniques de manipulation pour closer"]), correctAnswer: "Je suis là pour aider mon prospect à prendre la meilleure décision", explanation: "Le mindset de service est essentiel. Tu aides ton prospect à prendre une décision dans son intérêt. Le détachement et la confiance en ta solution rendent ton discours naturellement convaincant." },
    ],
  },
  {
    order: 2,
    module: 19,
    title: "Gérer les objections",
    slug: "v2-gerer-objections-closing",
    duration: "25 min",
    description: "Apprendre à identifier, comprendre et répondre aux objections les plus courantes pour transformer les hésitations en accords.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Les objections sont tes alliées" },
      { id: "2-2", type: "text", html: "<p>Un prospect qui objecte est un prospect <strong>intéressé</strong>. S'il s'en fichait, il dirait simplement 'je vais réfléchir' et raccrocherait. Une objection est une demande d'information déguisée, une porte ouverte vers le closing.</p><p>Les pires appels ne sont pas ceux avec beaucoup d'objections, mais ceux où le prospect ne dit rien et disparaît ensuite.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "En moyenne, il faut traiter <strong>3 à 5 objections</strong> avant d'obtenir un oui. Ne te décourage jamais à la première résistance." },

      { id: "2-13", type: "heading", level: 3, text: "Les 3 types d'objections" },
      { id: "2-14", type: "text", html: "<p>Toutes les objections ne se valent pas. Comprendre le type d'objection te permet de mieux y répondre :</p><ul><li><strong>Objections logiques :</strong> Le prospect a besoin de plus d'informations. 'Comment ça fonctionne exactement ?', 'Quels sont les délais ?' Ce sont les plus faciles : réponds avec des faits et des preuves.</li><li><strong>Objections émotionnelles :</strong> Le prospect a peur. Peur du changement, peur de se tromper, peur de dépenser de l'argent pour rien. 'Et si ça ne marche pas ?', 'On a déjà eu une mauvaise expérience...' Ici, les faits ne suffisent pas. Il faut rassurer avec de la preuve sociale et des garanties.</li><li><strong>Fausses objections :</strong> Le prospect utilise une excuse pour ne pas dire le vrai problème. 'Je vais y réfléchir', 'Ce n'est pas le bon moment'. Le vrai frein est ailleurs (souvent le prix ou le manque de confiance). Il faut creuser pour trouver la vraie raison.</li></ul>" },
      { id: "2-15", type: "callout", variant: "tip", html: "<strong>La question magique pour les fausses objections :</strong> 'En dehors de [l'objection mentionnée], est-ce qu'il y a autre chose qui vous fait hésiter ?' Cette question pousse le prospect à révéler le vrai frein. Si la réponse est 'non, c'est juste ça', alors traite l'objection. Si c'est 'eh bien, en fait...', tu as trouvé le vrai problème." },

      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "La méthode A.R.C. pour traiter toute objection" },
      { id: "2-6", type: "steps", steps: [
        { title: "A — Accueillir", description: "Ne réagis jamais défensivement. Accueille l'objection avec empathie. 'Je comprends votre préoccupation, c'est une question importante.' Cela désarme le prospect et montre que tu respectes son point de vue." },
        { title: "R — Reformuler", description: "Reformule l'objection pour montrer que tu as compris et pour vérifier. 'Si je comprends bien, votre inquiétude c'est que...' Souvent, la vraie objection est différente de celle exprimée." },
        { title: "C — Convaincre", description: "Réponds avec des faits, des preuves sociales ou des garanties. 'D'ailleurs, notre client X avait exactement la même inquiétude. Voici ce qui s'est passé...' Utilise des cas concrets, pas des promesses vagues." },
      ]},

      { id: "2-16", type: "heading", level: 3, text: "La méthode A.R.C. en situation réelle" },
      { id: "2-17", type: "text", html: "<p>Voyons un exemple concret d'application de la méthode A.R.C. :</p><p><strong>Le prospect :</strong> 'Honnêtement, 4 000 euros pour un chatbot, c'est beaucoup. On n'est pas sûrs du retour sur investissement.'</p><p><strong>A — Accueillir :</strong> 'Je comprends tout à fait, c'est un investissement significatif et c'est normal de vouloir s'assurer du ROI avant de s'engager.'</p><p><strong>R — Reformuler :</strong> 'Si je comprends bien, ce n'est pas tant le montant qui vous bloque, mais plutôt l'incertitude sur les résultats concrets que vous allez obtenir ?'</p><p><strong>Prospect :</strong> 'Oui, exactement. Comment on sait que ça va vraiment réduire notre charge de support ?'</p><p><strong>C — Convaincre :</strong> 'C'est exactement la question que s'est posée Dupont Immobilier avant de démarrer avec nous. En 1 mois, leur chatbot a traité 65% des demandes entrantes automatiquement. Leur secrétaire qui passait 4h/jour au téléphone est passée à 1h30. Si on fait le calcul, ça représente 2,5h x 20 jours = 50h/mois. À 20 euros/h chargé, c'est 1 000 euros d'économie par mois. Le chatbot est rentabilisé en 4 mois. Souhaitez-vous que je vous montre les chiffres détaillés ?'</p>" },

      { id: "2-7", type: "heading", level: 2, text: "Les 6 objections les plus fréquentes et comment y répondre" },
      { id: "2-8", type: "comparison", headers: ["Objection", "Réponse type"], rows: [
        { cells: ["'C'est trop cher'", "Reformule en investissement : 'Combien vous coûte le problème actuel par mois ? Si notre solution vous fait gagner 5x ce que vous investissez, c'est cher ou rentable ?'"] },
        { cells: ["'Je dois en parler à mon associé/boss'", "Propose d'inclure le décideur : 'Parfait, on peut organiser un appel à 3 de 15 minutes cette semaine ?'"] },
        { cells: ["'Je vais y réfléchir'", "Identifie le vrai frein : 'Bien sûr. Pour que je puisse vous aider à réfléchir, qu'est-ce qui vous fait hésiter exactement ?'"] },
        { cells: ["'On a déjà essayé et ça n'a pas marché'", "Différencie-toi : 'Qu'est-ce qui n'avait pas fonctionné précisément ? Notre approche est différente sur [point X] justement pour éviter ça.'"] },
        { cells: ["'Je n'ai pas le temps maintenant'", "Crée l'urgence douce : 'Je comprends. Le risque c'est que chaque mois qui passe vous coûte [montant]. On peut démarrer petit pour avancer sans surcharge.'"] },
        { cells: ["'Votre concurrent fait moins cher'", "Recadre sur la valeur : 'Moins cher sur le prix, certainement. Mais quel est le coût total ? Support, maintenance, résultats garantis ?'"] },
      ]},
      { id: "2-9", type: "callout", variant: "warning", html: "<strong>Piège :</strong> Ne jamais baisser ton prix à la première objection sur le tarif. Ça détruit ta crédibilité et signale que ton prix initial était gonflé. Ajoute de la valeur plutôt que de baisser le prix." },

      { id: "2-18", type: "heading", level: 3, text: "Comment ajouter de la valeur au lieu de baisser le prix" },
      { id: "2-19", type: "text", html: "<p>Quand un prospect trouve que c'est trop cher, ta première réaction ne doit <strong>jamais</strong> être de baisser le prix. Voici ce que tu peux faire à la place :</p><ul><li><strong>Ajoute un bonus :</strong> 'Je comprends. Pour ce projet, je vous inclus 1 mois de maintenance offert (valeur 500 euros). Ça vous rassure sur le suivi post-livraison.'</li><li><strong>Propose un paiement échelonné :</strong> 'On peut étaler sur 3 mois si ça facilite la trésorerie : 1 500 euros à la signature, 1 500 euros au mois 2, 1 000 euros à la livraison.'</li><li><strong>Réduis le périmètre :</strong> 'Si le budget est un frein, on peut commencer par le package Essentiel à 2 000 euros et upgrader plus tard quand vous verrez les résultats.'</li><li><strong>Propose une garantie :</strong> 'Et si on faisait ça : si après 30 jours le chatbot ne traite pas au moins 50% de vos demandes, je vous rembourse la différence.'</li></ul><p>Dans tous les cas, tu maintiens la perception de valeur. Le prix ne baisse pas ; la proposition s'adapte.</p>" },

      { id: "2-10", type: "heading", level: 2, text: "Les objections cachées" },
      { id: "2-11", type: "text", html: "<p>Les objections les plus dangereuses sont celles que le prospect ne verbalise pas. Voici les signaux d'alerte :</p><ul><li>Le prospect devient silencieux ou évasif.</li><li>Il pose des questions très générales au lieu de spécifiques.</li><li>Il dit 'oui oui' à tout sans enthousiasme.</li><li>Il repousse systématiquement la date de décision.</li></ul><p>Face à ces signaux, pose la question directement : <strong>'J'ai l'impression que quelque chose vous fait hésiter. Je préfère qu'on en parle ouvertement, qu'est-ce qui vous retient ?'</strong></p>" },

      { id: "2-20", type: "heading", level: 3, text: "Le cadre LAER pour les objections complexes" },
      { id: "2-21", type: "steps", steps: [
        { title: "L — Listen (Écouter)", description: "Laisse le prospect exprimer entièrement son objection sans l'interrompre. Prends des notes. Souvent, en parlant, le prospect clarifie lui-même son frein." },
        { title: "A — Acknowledge (Reconnaître)", description: "Valide son ressenti. 'C'est tout à fait légitime de se poser cette question.' Ne minimise jamais une inquiétude, même si elle te semble injustifiée." },
        { title: "E — Explore (Explorer)", description: "Creuse avec des questions. 'Pouvez-vous me donner un exemple de ce qui vous préoccupe ?' Plus tu comprends la racine de l'objection, mieux tu pourras y répondre." },
        { title: "R — Respond (Répondre)", description: "Seulement maintenant, donne ta réponse. Elle sera bien plus pertinente et ciblée parce que tu as pris le temps d'écouter et de comprendre." },
      ]},

      { id: "2-22", type: "callout", variant: "info", html: "<strong>Statistique de vente :</strong> Les commerciaux qui posent 4+ questions de clarification lors d'une objection ont un taux de closing 30% supérieur à ceux qui répondent immédiatement. Prends le temps de comprendre avant de répondre." },

      { id: "2-12", type: "callout", variant: "tip", html: "<strong>Technique avancée :</strong> L'objection préemptive. Soulève toi-même les objections courantes avant que le prospect ne le fasse. 'Vous vous demandez peut-être si c'est le bon moment. Voici pourquoi attendre vous coûte plus cher...' Cela renforce ta crédibilité." },
    ]),
    exercise: "<h3>Exercice : Le jeu des objections</h3><p>Entraîne-toi à répondre à chaque objection avec la méthode A.R.C. :</p><ol><li>Pour chacune des 6 objections fréquentes listées dans la leçon, rédige une réponse personnalisée adaptée à ton offre d'agence IA.</li><li>Prépare 2 objections préemptives que tu pourrais soulever toi-même pendant un appel de closing.</li><li>Identifie 3 preuves sociales (résultats clients, témoignages, études de cas) que tu peux utiliser pour renforcer tes réponses.</li><li>Simule un appel avec un ami où il enchaîne 5 objections différentes sans pause.</li></ol>",
    quiz: [
      { type: "mcq", question: "Que signifie une objection de la part d'un prospect ?", options: JSON.stringify(["Le prospect n'est pas intéressé", "Le prospect veut mettre fin à l'appel", "Le prospect est intéressé et demande plus d'informations", "Le prospect essaie de te manipuler"]), correctAnswer: "Le prospect est intéressé et demande plus d'informations", explanation: "Un prospect qui objecte est un prospect intéressé. Une objection est une demande d'information déguisée. Un prospect désintéressé dirait simplement qu'il va réfléchir et disparaîtrait." },
      { type: "true_false", question: "Face à l'objection 'C'est trop cher', il faut immédiatement proposer une remise.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Baisser le prix à la première objection détruit ta crédibilité et signale que ton prix initial était gonflé. Il faut recadrer sur la valeur et l'investissement plutôt que de baisser le prix." },
      { type: "mcq", question: "Quelle est la première étape de la méthode A.R.C. ?", options: JSON.stringify(["Argumenter", "Accueillir", "Analyser", "Attaquer"]), correctAnswer: "Accueillir", explanation: "A.R.C. signifie Accueillir, Reformuler, Convaincre. La première étape est d'accueillir l'objection avec empathie sans réagir défensivement." },
      { type: "mcq", question: "Un prospect dit 'Je dois en parler à mon associé'. Quelle est la meilleure réponse ?", options: JSON.stringify(["D'accord, rappelez-moi quand vous aurez décidé", "Proposer un appel à 3 avec le décideur cette semaine", "Insister pour qu'il décide maintenant seul", "Envoyer un email résumé à l'associé"]), correctAnswer: "Proposer un appel à 3 avec le décideur cette semaine", explanation: "La meilleure stratégie est d'inclure le vrai décideur dans la conversation. Proposer un appel à 3 permet de traiter les objections de tous les décideurs en même temps." },
      { type: "true_false", question: "L'objection préemptive consiste à soulever toi-même les objections courantes avant le prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est une technique avancée qui renforce ta crédibilité. En soulevant toi-même les objections potentielles, tu montres ta transparence et tu peux cadrer la réponse à ton avantage." },
      { type: "mcq", question: "Quel signal indique une objection cachée que le prospect ne verbalise pas ?", options: JSON.stringify(["Le prospect pose beaucoup de questions techniques précises", "Le prospect négocie activement le prix", "Le prospect devient silencieux, évasif et repousse la date de décision", "Le prospect demande des références clients"]), correctAnswer: "Le prospect devient silencieux, évasif et repousse la date de décision", explanation: "Le silence, les réponses évasives et le report systématique de la décision sont des signaux d'objections cachées. Il faut alors poser la question directement pour faire verbaliser le vrai frein." },
    ],
  },
  {
    order: 3,
    module: 19,
    title: "Du devis à la signature : sécuriser le deal",
    slug: "v2-devis-signature-securiser-deal",
    duration: "20 min",
    description: "Transformer un accord verbal en signature effective : rédiger un devis percutant, créer l'urgence et sécuriser le paiement.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "L'accord verbal ne vaut rien" },
      { id: "3-2", type: "text", html: "<p>Tu as closé en appel, le prospect a dit oui. Bravo ! Mais le deal n'est pas signé tant que tu n'as pas la signature ET l'acompte. Entre le 'oui' verbal et la signature, il y a un <strong>gouffre</strong> où 30 à 50% des deals meurent.</p><p>La raison ? Le prospect refroidit. Il en parle à quelqu'un qui sème le doute. Il se dit qu'il a le temps. Il oublie l'urgence. Ta mission : <strong>réduire le temps entre le oui et la signature à moins de 24h</strong>.</p>" },
      { id: "3-3", type: "callout", variant: "warning", html: "<strong>Statistique clé :</strong> Plus de 48h entre l'accord verbal et l'envoi du devis = 50% de chances de perdre le deal. Envoie ton devis dans l'heure qui suit l'appel." },

      { id: "3-12", type: "heading", level: 3, text: "Pourquoi les deals meurent entre le oui et la signature" },
      { id: "3-13", type: "text", html: "<p>Comprendre pourquoi les deals meurent te permet de l'éviter. Voici les 5 raisons principales :</p><ul><li><strong>Le refroidissement émotionnel :</strong> Pendant l'appel, le prospect est engagé émotionnellement. Il visualise les résultats. Dès qu'il raccroche, cette émotion retombe. En 48h, il est revenu à son état initial.</li><li><strong>L'influence extérieure :</strong> Il en parle à son conjoint, son associé, un ami. Et quelqu'un dit 'Tu es sûr ? C'est cher...' ou 'Mon neveu fait des sites web, il pourrait faire ça'. Le doute s'installe.</li><li><strong>La procrastination :</strong> Le prospect a d'autres priorités. Le devis traîne dans sa boîte mail. Il se dit 'je ferai ça demain'. Demain ne vient jamais.</li><li><strong>La concurrence :</strong> Pendant que tu attends, un autre freelance le contacte avec une offre. Si tu n'as pas verrouillé le deal, il peut partir ailleurs.</li><li><strong>Le doute post-achat :</strong> Même après avoir dit oui, le prospect se demande s'il fait le bon choix. C'est humain. Si tu n'es pas là pour le rassurer, le doute gagne.</li></ul>" },

      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Anatomie d'un devis qui convertit" },
      { id: "3-6", type: "checklist", title: "Les éléments d'un devis efficace", items: [
        { id: "c1", text: "Rappel du contexte et du problème du client (pas juste une liste de prix)" },
        { id: "c2", text: "Description de la solution en termes de résultats attendus" },
        { id: "c3", text: "Détail des livrables avec dates de livraison" },
        { id: "c4", text: "Prix clair avec les conditions de paiement (acompte + solde)" },
        { id: "c5", text: "Date de validité du devis (7 jours max pour créer l'urgence)" },
        { id: "c6", text: "Témoignage client ou résultat chiffré en bas de page" },
        { id: "c7", text: "Instructions claires pour signer (bouton ou lien de signature)" },
      ]},

      { id: "3-14", type: "heading", level: 3, text: "Le devis comme outil de réassurance" },
      { id: "3-15", type: "text", html: "<p>Ton devis n'est pas qu'un document administratif. C'est ton <strong>dernier outil de vente</strong> avant la signature. Il doit rassurer le prospect sur 3 points :</p><ol><li><strong>'J'ai bien compris mon problème' :</strong> Le rappel du contexte montre que tu as écouté. Le prospect se sent compris.</li><li><strong>'Je sais ce que je vais obtenir' :</strong> Les livrables et le planning éliminent le flou. Pas de surprise.</li><li><strong>'D'autres ont fait confiance et ça a marché' :</strong> Le témoignage ou l'étude de cas en bas de page est le dernier coup de pouce pour convaincre.</li></ol><p>Un devis bien fait fait le travail de vente à ta place. Le prospect le relit, se rassure, et signe.</p>" },
      { id: "3-16", type: "callout", variant: "tip", html: "<strong>Format du devis :</strong> Utilise un outil de signature électronique (PandaDoc, Proposify, ou même DocuSign gratuit). Le prospect clique sur un bouton pour signer. C'est 10x plus rapide que 'imprimez, signez, scannez, renvoyez par email'. Moins il y a de friction, plus vite c'est signé." },

      { id: "3-7", type: "heading", level: 2, text: "La séquence de suivi post-appel" },
      { id: "3-8", type: "steps", steps: [
        { title: "H+0 : Email récapitulatif", description: "Dans l'heure suivant l'appel, envoie un email résumant ce qui a été discuté et annonce l'envoi du devis. 'Suite à notre échange, voici un récap...' Cela ancre l'engagement." },
        { title: "H+1 : Envoi du devis", description: "Envoie le devis avec un lien de signature électronique (PandaDoc, DocuSign, ou même HelloSign gratuit). Plus c'est simple à signer, plus vite c'est signé." },
        { title: "J+1 : Relance douce", description: "Si pas de signature le lendemain, envoie un message court : 'Avez-vous pu regarder le devis ? Je reste dispo si vous avez des questions.' Pas de pression." },
        { title: "J+3 : Relance valeur", description: "Partage un cas client similaire ou un résultat récent. 'Au passage, voici ce qu'on vient de livrer pour [Client]. Votre projet serait sur le même modèle.'" },
        { title: "J+5 : Relance urgence", description: "Rappelle la date de validité du devis. 'Le devis expire dans 2 jours. Souhaitez-vous qu'on avance ou préférez-vous reporter ?'" },
      ]},

      { id: "3-17", type: "heading", level: 3, text: "Les templates de relance qui marchent" },
      { id: "3-18", type: "text", html: "<p><strong>Relance J+1 (douce) :</strong></p><p>'Bonjour [Prénom], j'espère que vous avez passé une bonne journée. Je voulais m'assurer que vous aviez bien reçu le devis envoyé hier. N'hésitez pas si vous avez la moindre question, je suis disponible pour un rapide appel si besoin.'</p><p><strong>Relance J+3 (valeur) :</strong></p><p>'Bonjour [Prénom], je voulais partager avec vous ce résultat qu'on vient d'obtenir pour [Client similaire] : [résultat chiffré]. Votre projet est sur le même modèle, donc je suis confiant qu'on obtiendrait des résultats comparables. Le devis est toujours valide si vous souhaitez avancer.'</p><p><strong>Relance J+5 (urgence) :</strong></p><p>'Bonjour [Prénom], petit rappel : le devis que je vous ai envoyé expire dans 2 jours. Je souhaitais aussi vous informer que j'ai une place qui se libère la semaine prochaine pour démarrer un nouveau projet. Souhaitez-vous qu'on avance ensemble, ou préférez-vous reporter à un moment plus opportun ?'</p>" },

      { id: "3-19", type: "callout", variant: "warning", html: "<strong>Les relances à ne JAMAIS faire :</strong> 'Alors, vous avez pris votre décision ?' (trop direct, met la pression). 'Je baisse le prix de 20% si vous signez aujourd'hui' (désespéré). 'Vous m'avez dit oui en appel, qu'est-ce qui se passe ?' (accusateur). Reste toujours professionnel, bienveillant et orienté vers la valeur." },

      { id: "3-9", type: "heading", level: 2, text: "Sécuriser le paiement" },
      { id: "3-10", type: "comparison", headers: ["Pratique risquée", "Pratique recommandée"], rows: [
        { cells: ["Commencer le travail sans acompte", "Exiger 30-50% d'acompte avant de commencer"] },
        { cells: ["Un seul paiement à la fin", "Paiement en 2-3 jalons liés aux livrables"] },
        { cells: ["Paiement par virement libre", "Lien de paiement Stripe avec échéance"] },
        { cells: ["Pas de conditions dans le devis", "Pénalités de retard clairement indiquées"] },
        { cells: ["Relancer manuellement les impayés", "Automatiser les rappels de paiement"] },
      ]},

      { id: "3-20", type: "heading", level: 3, text: "Le modèle de paiement optimal par type de projet" },
      { id: "3-21", type: "comparison", headers: ["Type de projet", "Montant", "Modèle de paiement recommandé"], rows: [
        { cells: ["Petit projet (chatbot simple)", "1 500 - 3 000 euros", "50% acompte + 50% livraison"] },
        { cells: ["Projet moyen (chatbot + intégrations)", "3 000 - 7 000 euros", "30% acompte + 40% mi-parcours + 30% livraison"] },
        { cells: ["Gros projet (SaaS, dashboard)", "7 000 - 20 000 euros", "30% acompte + 30% jalon 1 + 30% jalon 2 + 10% recette"] },
        { cells: ["Retainer mensuel", "500 - 3 000 euros/mois", "Paiement mensuel par prélèvement automatique Stripe"] },
      ]},
      { id: "3-22", type: "text", html: "<p><strong>La règle d'or du paiement :</strong> Ne commence JAMAIS le travail avant d'avoir reçu l'acompte sur ton compte. Pas de 'le virement est en cours'. Pas de 'on vous paie la semaine prochaine'. Argent reçu = travail démarré. C'est une question de professionnalisme, pas de méfiance.</p><p>Si le client rechigne à payer l'acompte, c'est un <strong>red flag majeur</strong>. Un client sérieux comprend qu'un acompte est standard. S'il refuse, il aura probablement aussi des difficultés à payer le reste.</p>" },

      { id: "3-11", type: "callout", variant: "tip", html: "<strong>Outil recommandé :</strong> Utilise Stripe pour tes paiements. Tu peux créer des liens de paiement en 2 minutes, configurer des paiements échelonnés et automatiser les relances. Commission de 1.4% + 0.25€ par transaction." },
    ]),
    exercise: "<h3>Exercice : Créer ton template de devis</h3><p>Crée un devis type pour ton agence IA :</p><ol><li>Utilise un outil de devis (PandaDoc, Notion, ou Google Docs) pour créer un template avec tous les éléments de la checklist.</li><li>Rédige un devis complet pour un projet fictif : un chatbot de support client à 2 500€ avec livraison en 2 semaines.</li><li>Rédige les 5 emails de la séquence de suivi post-appel.</li><li>Configure un lien de paiement Stripe (ou simule-le) avec un acompte de 40% et un solde à la livraison.</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le délai maximum recommandé pour envoyer un devis après un appel de closing réussi ?", options: JSON.stringify(["Dans la semaine", "Dans les 48h", "Dans l'heure", "Dans les 24h"]), correctAnswer: "Dans l'heure", explanation: "Le devis doit être envoyé dans l'heure suivant l'appel. Au-delà de 48h, tu perds 50% des deals car le prospect refroidit et l'urgence disparaît." },
      { type: "true_false", question: "Il est acceptable de commencer le travail avant d'avoir reçu l'acompte du client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il ne faut jamais commencer le travail sans acompte. C'est une pratique risquée qui peut mener à des impayés. Exige 30-50% d'acompte avant de démarrer." },
      { type: "mcq", question: "Quelle est la durée de validité recommandée pour un devis ?", options: JSON.stringify(["30 jours", "14 jours", "7 jours maximum", "Illimitée"]), correctAnswer: "7 jours maximum", explanation: "Une validité de 7 jours crée une urgence naturelle. Plus le délai est long, plus le prospect repousse sa décision et plus le risque de perdre le deal augmente." },
      { type: "true_false", question: "Entre l'accord verbal et la signature, 30 à 50% des deals peuvent être perdus.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est un chiffre réel. Le prospect refroidit, en parle à quelqu'un, oublie l'urgence. C'est pourquoi il faut réduire ce délai à moins de 24h." },
      { type: "mcq", question: "Quelle est la meilleure stratégie de relance à J+3 si le devis n'est pas signé ?", options: JSON.stringify(["Appeler pour mettre la pression", "Baisser le prix de 20%", "Partager un cas client similaire ou un résultat récent", "Envoyer un email menaçant d'annuler l'offre"]), correctAnswer: "Partager un cas client similaire ou un résultat récent", explanation: "À J+3, la relance valeur est la plus efficace. Partager un cas client concret ravive l'intérêt et rappelle les résultats possibles sans mettre de pression négative." },
      { type: "mcq", question: "Quel outil est recommandé pour sécuriser les paiements avec des liens de paiement et des relances automatiques ?", options: JSON.stringify(["PayPal", "Virement bancaire classique", "Stripe", "Chèque"]), correctAnswer: "Stripe", explanation: "Stripe permet de créer des liens de paiement en 2 minutes, configurer des paiements échelonnés et automatiser les relances. C'est la solution la plus professionnelle pour une agence IA." },
    ],
  },
];
