// ═══════════════════════════════════════════════════
// MODULE 18 — Prospection
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_18_LESSONS = [
  // ─── LEÇON 1 : Ton réseau proche : tes premiers clients ───
  {
    order: 1,
    module: 18,
    title: "Ton réseau proche : famille, amis, connaissances — tes premiers clients",
    slug: "v2-reseau-proche-premiers-clients",
    duration: "20 min",
    description: "Tes premiers clients sont déjà dans ton réseau. Apprends à activer ton cercle proche pour décrocher tes premières missions sans cold outreach.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Tes premiers clients sont déjà autour de toi" },
      { id: "1-2", type: "text", html: "<p>La prospection à froid fait peur. La bonne nouvelle : tu n'en as pas besoin pour tes 3 premiers clients. Ils sont déjà dans ton réseau — famille, amis, anciens collègues, connaissances LinkedIn.</p><p>Le principe est simple : <strong>fais savoir à ton entourage ce que tu fais</strong>. La plupart des freelances ne décrochent jamais leur premier client parce qu'ils n'osent pas en parler autour d'eux.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Statistique :</strong> Plus de 70% des freelances décrochent leur premier client grâce à leur réseau personnel. Le bouche-à-oreille reste le canal d'acquisition le plus puissant." },

      { id: "1-14", type: "heading", level: 3, text: "Pourquoi tu n'oses pas en parler (et comment dépasser ce blocage)" },
      { id: "1-15", type: "text", html: "<p>Le syndrome de l'imposteur frappe fort au début. Tu te dis : 'Je ne suis pas encore prêt', 'Qu'est-ce qu'ils vont penser ?', 'Et si on me pose une question technique à laquelle je ne sais pas répondre ?'</p><p>La vérité : <strong>personne ne te juge autant que toi-même</strong>. Tes proches seront contents pour toi. Tes contacts pro seront curieux. Et même si quelqu'un n'est pas intéressé, il ne va pas te juger pour avoir essayé.</p><p>Le vrai risque, ce n'est pas d'en parler. C'est de ne pas en parler et de rester bloqué à 0 client pendant 6 mois en attendant d'être 'prêt'.</p>" },
      { id: "1-16", type: "callout", variant: "warning", html: "<strong>Le perfectionnisme est ton ennemi :</strong> Tu n'as pas besoin de maîtriser toutes les technologies IA pour vendre ton premier chatbot. Tu as besoin de savoir résoudre UN problème concret pour UN type de client. Le reste s'apprend en faisant." },

      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 3 cercles de ton réseau" },
      { id: "1-6", type: "steps", steps: [
        { title: "Cercle 1 : Famille et amis proches", description: "Tes parents, frères/soeurs, amis proches. Ils ne sont peut-être pas tes clients, mais ils connaissent des gens qui le sont. Dis-leur ce que tu fais en une phrase simple." },
        { title: "Cercle 2 : Réseau professionnel", description: "Anciens collègues, camarades d'école, contacts LinkedIn. Ce sont eux qui ont le plus de chances d'avoir un besoin ou de connaître quelqu'un qui en a." },
        { title: "Cercle 3 : Connaissances indirectes", description: "Les amis d'amis, les gens que tu croises en événements, les membres de communautés en ligne. Chaque nouvelle connexion élargit ton réseau." },
      ]},

      { id: "1-17", type: "heading", level: 3, text: "Le pouvoir des liens faibles" },
      { id: "1-18", type: "text", html: "<p>Paradoxe : tes meilleurs leads ne viennent pas de tes proches (cercle 1), mais de tes <strong>connaissances éloignées</strong> (cercle 2 et 3). C'est ce qu'on appelle 'la force des liens faibles' en sociologie.</p><p>Pourquoi ? Parce que tes proches évoluent dans le même environnement que toi. Ils connaissent les mêmes personnes. Tes connaissances éloignées, elles, ont accès à des réseaux complètement différents du tien. Un ancien camarade de promo devenu directeur commercial dans une PME industrielle = un accès à un monde que tu ne connaîtrais pas autrement.</p><p>C'est pour ça qu'il faut contacter largement, pas seulement tes 5 meilleurs amis.</p>" },

      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Comment activer ton réseau" },
      { id: "1-9", type: "text", html: "<p>Activer ton réseau ne veut pas dire spammer tout le monde. Voici l'approche :</p><ol><li><strong>Le post LinkedIn d'annonce :</strong> Publie un post expliquant ta nouvelle activité. Pas un pitch commercial — une histoire personnelle. Pourquoi tu te lances, ce que tu proposes, pour qui.</li><li><strong>Les messages directs ciblés :</strong> Écris personnellement aux 20 personnes de ton réseau les plus susceptibles d'avoir un besoin ou de te recommander. Message court, personnel, sans pression.</li><li><strong>L'offre de lancement :</strong> Propose un tarif préférentiel à tes premiers clients (pas gratuit, mais réduit). Ça baisse la barrière d'entrée et te donne des études de cas.</li></ol>" },

      { id: "1-19", type: "callout", variant: "tip", html: "<strong>L'offre de lancement parfaite :</strong> Propose -30% sur tes premiers projets en échange de 2 choses : (1) un témoignage écrit que tu pourras utiliser sur ton site, et (2) le droit de présenter le projet comme étude de cas. Tu perds 30% de marge mais tu gagnes de la preuve sociale qui vaut bien plus." },

      { id: "1-10", type: "heading", level: 2, text: "Le message qui marche" },
      { id: "1-11", type: "text", html: "<p>Voici la structure d'un message à ton réseau :</p><pre><code>Salut [Prénom],\n\nJ'espère que tu vas bien ! Je me lance en tant que\nfreelance spécialisé en solutions IA pour les entreprises\n(chatbots, automatisation, etc.).\n\nJe cherche mes premiers clients pour constituer mon\nportfolio. Est-ce que toi ou quelqu'un de ton entourage\naurait besoin d'aide sur ces sujets ?\n\nMême si ce n'est pas le cas, un partage ou une mise en\nrelation serait super apprécié !\n\nMerci et à bientôt,\n[Ton prénom]</code></pre>" },

      { id: "1-20", type: "heading", level: 3, text: "Adapter le message selon le cercle" },
      { id: "1-21", type: "comparison", headers: ["Cercle", "Ton du message", "CTA"], rows: [
        { cells: ["Famille / amis proches", "Très informel, tu tutoies", "'Si tu connais quelqu'un qui pourrait avoir besoin, fais-moi signe !'"] },
        { cells: ["Réseau pro / anciens collègues", "Pro mais chaleureux", "'Est-ce que ton entreprise utilise déjà l'IA ? Je serais curieux d'en discuter.'"] },
        { cells: ["Connaissances LinkedIn", "Professionnel, personnalisé", "'J'ai vu que votre entreprise [X]. J'ai justement une expertise sur ce sujet.'"] },
      ]},

      { id: "1-22", type: "heading", level: 3, text: "Les erreurs qui grillent ton réseau" },
      { id: "1-23", type: "text", html: "<p>Ton réseau est un capital. Ne le gaspille pas avec ces erreurs :</p><ul><li><strong>Le spam massif :</strong> Envoyer le même message copié-collé à 200 personnes. Tes contacts s'en rendent compte et ça détruit la confiance.</li><li><strong>Le pitch agressif :</strong> 'Tu as besoin d'un chatbot IA, je peux te faire ça pour 3 000 euros.' Personne n'aime être vendu de cette façon.</li><li><strong>L'insistance :</strong> Relancer 3 fois quelqu'un qui n'a pas répondu. S'il n'a pas répondu, il n'est pas intéressé pour le moment. Respecte ça.</li><li><strong>Le gratuit :</strong> 'Je te fais ça gratos pour me faire un portfolio.' Tu attires des gens qui ne valorisent pas ton travail et qui seront les plus exigeants.</li></ul>" },

      { id: "1-12", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Facilite la recommandation. Donne à tes proches une phrase qu'ils peuvent utiliser pour te présenter : 'Mon ami [Prénom] crée des chatbots IA pour les entreprises. Si tu as un site web et du support client, il peut t'aider.'" },

      { id: "1-13", type: "checklist", title: "Actions pour activer ton réseau", items: [
        { id: "c1", text: "Lister 50 personnes de ton réseau (pro + perso)" },
        { id: "c2", text: "Publier un post LinkedIn d'annonce" },
        { id: "c3", text: "Envoyer 20 messages directs personnalisés" },
        { id: "c4", text: "Préparer une offre de lancement à tarif réduit" },
        { id: "c5", text: "Donner à tes proches une phrase de recommandation" },
      ]},
    ]),
    exercise: "<h3>Exercice : Active ton réseau cette semaine</h3><p>Passe à l'action :</p><ol><li>Liste 50 personnes de ton réseau (famille, amis, collègues, contacts LinkedIn)</li><li>Écris et publie ton post LinkedIn d'annonce</li><li>Envoie 20 messages personnalisés cette semaine (4 par jour)</li><li>Prépare ton offre de lancement avec un tarif préférentiel</li><li>Note chaque réponse dans ton CRM</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le canal d'acquisition le plus efficace pour les premiers clients d'un freelance ?", options: JSON.stringify(["La publicité Google Ads", "Le réseau personnel et le bouche-à-oreille", "Les plateformes de freelance (Malt, Upwork)", "Le cold email"]), correctAnswer: "Le réseau personnel et le bouche-à-oreille", explanation: "Plus de 70% des freelances trouvent leurs premiers clients grâce à leur réseau. Le bouche-à-oreille bénéficie d'un niveau de confiance bien plus élevé que tout autre canal." },
      { type: "true_false", question: "Il faut proposer ses services gratuitement pour avoir ses premiers clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Travailler gratuitement dévalue ton expertise et attire des clients qui ne valorisent pas ton travail. Propose plutôt un tarif réduit de lancement qui reste rémunérateur." },
      { type: "mcq", question: "Combien de messages directs minimum faut-il envoyer pour activer son réseau ?", options: JSON.stringify(["5", "20", "100", "500"]), correctAnswer: "20", explanation: "20 messages personnalisés est un bon point de départ. C'est assez pour générer des réponses et des mises en relation, sans être overwhelmed." },
      { type: "true_false", question: "Tes proches qui ne sont pas dans la tech ne peuvent pas t'aider à trouver des clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tes proches non-tech connaissent des entrepreneurs, des commerçants, des PME qui ont besoin de solutions IA. Ils ne seront pas tes clients mais ils peuvent te recommander." },
      { type: "mcq", question: "Que doit contenir un message à ton réseau pour demander des recommandations ?", options: JSON.stringify(["Un devis détaillé avec tous tes prix", "Une explication courte de ce que tu fais et pour qui", "Une liste de toutes tes compétences techniques", "Un lien vers ton CV"]), correctAnswer: "Une explication courte de ce que tu fais et pour qui", explanation: "Un message court et clair qui explique ce que tu fais, pour qui, et comment la personne peut t'aider (recommandation, mise en relation). Pas de pitch commercial agressif." },
    ],
  },

  // ─── LEÇON 2 : La machine LinkedIn ───
  {
    order: 2,
    module: 18,
    title: "La machine LinkedIn : profil + contenu + DM",
    slug: "v2-machine-linkedin-profil-contenu-dm",
    duration: "25 min",
    description: "Transforme LinkedIn en machine à leads : profil optimisé, stratégie de contenu qui attire les prospects, et messages directs qui déclenchent des rendez-vous.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "LinkedIn est le terrain de chasse du freelance IA" },
      { id: "2-2", type: "text", html: "<p>LinkedIn n'est pas un réseau social — c'est un <strong>outil de prospection</strong>. Les décideurs (CEO, directeurs, managers) y sont présents et actifs. Contrairement aux autres plateformes, publier sur LinkedIn t'expose directement à des acheteurs potentiels.</p><p>La stratégie tient en 3 piliers : un profil qui convertit, du contenu qui attire, et des DM qui déclenchent des RDV.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Chiffre clé :</strong> Un post LinkedIn bien fait peut atteindre 5 000 à 50 000 vues organiques. C'est de la visibilité gratuite auprès de décideurs que tu ne pourrais pas atteindre autrement." },

      { id: "2-14", type: "heading", level: 3, text: "LinkedIn vs les autres plateformes pour un freelance IA" },
      { id: "2-15", type: "comparison", headers: ["Plateforme", "Type d'audience", "Pertinence pour un freelance IA"], rows: [
        { cells: ["LinkedIn", "Décideurs B2B, managers, CEO de PME", "Excellente : les acheteurs sont là"] },
        { cells: ["Twitter/X", "Tech, startups, développeurs", "Bonne pour la visibilité, faible en conversion directe"] },
        { cells: ["Instagram/TikTok", "Grand public, jeunes, créateurs", "Bonne pour le personal branding, pas pour la prospection B2B"] },
        { cells: ["Facebook", "Grand public, groupes communautaires", "Faible en B2B, peut fonctionner via les groupes"] },
      ]},
      { id: "2-16", type: "text", html: "<p>LinkedIn est le seul réseau où <strong>publier du contenu pro est la norme</strong>. Sur Instagram, poster un article sur les chatbots IA ferait fuir tes abonnés. Sur LinkedIn, ça attire des prospects. Concentre 80% de tes efforts ici.</p>" },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Pilier 1 : Le profil qui convertit" },
      { id: "2-6", type: "text", html: "<p>Ton profil est ta landing page. Chaque visiteur doit comprendre en 5 secondes : ce que tu fais, pour qui, et comment te contacter.</p><ul><li><strong>Bannière :</strong> Image pro avec ton offre résumée en une phrase + CTA</li><li><strong>Headline :</strong> Pas ton titre de poste. La valeur que tu apportes : 'J'aide les PME à automatiser leur business avec l'IA | Chatbots, automatisation, SaaS'</li><li><strong>À propos :</strong> Structure AIDA — Attention, Intérêt, Désir, Action. Termine par un CTA (lien de RDV)</li><li><strong>Sélection :</strong> Épingle tes meilleurs contenus et tes études de cas</li></ul>" },

      { id: "2-17", type: "heading", level: 3, text: "La section 'A propos' qui convertit" },
      { id: "2-18", type: "text", html: "<p>La section 'A propos' est l'endroit le plus sous-exploité de LinkedIn. Voici la structure AIDA appliquée :</p><p><strong>Attention (2 lignes) :</strong> Un chiffre choc ou une question qui interpelle. 'Les PME perdent en moyenne 15h/semaine sur des tâches que l'IA pourrait gérer.'</p><p><strong>Intérêt (3-4 lignes) :</strong> Décris le problème de ta cible. 'Votre équipe passe des heures à répondre aux mêmes questions. Vos processus manuels ralentissent votre croissance.'</p><p><strong>Désir (3-4 lignes) :</strong> Présente la solution et les résultats. 'J'ai aidé 12 entreprises à automatiser leur support client et leurs workflows. Résultat moyen : -60% de temps perdu, +40% de satisfaction client.'</p><p><strong>Action (2 lignes) :</strong> CTA clair. 'Envie d'en discuter ? Réservez un appel découverte gratuit de 15 min ici : [lien Cal.com].'</p>" },

      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Pilier 2 : Le contenu qui attire" },
      { id: "2-9", type: "steps", steps: [
        { title: "Fréquence : 3-5 posts par semaine", description: "La régularité est plus importante que la perfection. Publie du lundi au vendredi, entre 8h et 9h30 pour maximiser la portée." },
        { title: "Les 4 types de contenu qui marchent", description: "Éducatif (tutoriel, tips), Storytelling (tes expériences), Études de cas (résultats clients), Opinion (ton point de vue sur l'IA)." },
        { title: "Le hook : les 3 premières lignes", description: "Tu as 3 secondes pour capter l'attention. La première ligne doit provoquer la curiosité : question, stat choc, affirmation contre-intuitive." },
        { title: "L'engagement", description: "Termine par une question ou un CTA. Réponds à TOUS les commentaires dans l'heure qui suit la publication." },
      ]},

      { id: "2-19", type: "heading", level: 3, text: "Le calendrier éditorial du freelance IA" },
      { id: "2-20", type: "comparison", headers: ["Jour", "Type de contenu", "Exemple de sujet"], rows: [
        { cells: ["Lundi", "Éducatif / Tutorial", "'Comment un chatbot IA peut gérer 80% de ton support client (en 3 étapes)'"] },
        { cells: ["Mardi", "Storytelling / Expérience perso", "'La semaine dernière, un client m'a appelé en panique...'"] },
        { cells: ["Mercredi", "Opinion / Point de vue", "'Non, l'IA ne va pas remplacer tes employés. Voici pourquoi.'"] },
        { cells: ["Jeudi", "Étude de cas / Résultats", "'Comment j'ai réduit de 70% le temps de traitement des demandes pour [Client]'"] },
        { cells: ["Vendredi", "Tips rapide / Valeur actionnable", "'3 outils IA gratuits que chaque PME devrait utiliser dès maintenant'"] },
      ]},
      { id: "2-21", type: "callout", variant: "tip", html: "<strong>Batch ton contenu :</strong> Réserve 2-3h le dimanche pour écrire tes 5 posts de la semaine. Planifie-les avec un outil comme Shield ou Taplio. Pendant la semaine, tu n'as plus qu'à engager avec les commentaires. C'est beaucoup plus efficace que d'écrire au jour le jour." },

      { id: "2-10", type: "heading", level: 2, text: "Pilier 3 : Les DM qui convertissent" },
      { id: "2-11", type: "text", html: "<p>Les DM (messages directs) sont le nerf de la guerre. Le contenu attire des vues, mais c'est le DM qui transforme un viewer en prospect.</p><p><strong>Le process :</strong></p><ol><li>Quelqu'un like ou commente ton post → tu regardes son profil</li><li>S'il correspond à ta cible (décideur, PME, bon secteur) → tu le connectes avec une note</li><li>Après acceptation → message de valeur (pas un pitch), un partage de ressource utile</li><li>Conversation naturelle → tu proposes un appel si le besoin se confirme</li></ol>" },

      { id: "2-22", type: "heading", level: 3, text: "La séquence DM en 4 étapes" },
      { id: "2-23", type: "steps", steps: [
        { title: "Message 1 (Jour 0) : La connexion", description: "Note personnalisée avec la demande de connexion. 'Bonjour [Prénom], j'ai vu votre commentaire sur [sujet]. Je travaille aussi dans le domaine de l'IA appliquée aux PME. Au plaisir d'échanger !'" },
        { title: "Message 2 (Jour 2) : La valeur", description: "Après acceptation, envoie une ressource utile. 'Merci pour la connexion ! J'ai écrit un guide sur [sujet lié à son activité]. Je me suis dit que ça pourrait vous intéresser. [lien]'" },
        { title: "Message 3 (Jour 5) : La question", description: "Pose une question liée à son activité. 'Au fait, comment gérez-vous [problème courant dans son secteur] chez [entreprise] ? C'est un sujet que je vois revenir souvent.'" },
        { title: "Message 4 (si intérêt) : Le RDV", description: "Si la conversation montre un besoin, propose un appel. 'C'est exactement le type de situation que je résous. Ça vous dirait 15 min d'échange pour explorer ça ? [lien calendly]'" },
      ]},

      { id: "2-12", type: "comparison", headers: ["DM qui fait fuir", "DM qui convertit"], rows: [
        { cells: ["'Salut, je fais des chatbots IA, ça t'intéresse ?'", "'Salut Marie, j'ai vu ton post sur les défis du support client. J'ai justement écrit un guide sur le sujet — je te l'envoie ?'"] },
        { cells: ["Pitch dès le premier message", "Valeur d'abord, pitch jamais en premier message"] },
        { cells: ["Copier-coller identique pour tous", "Message personnalisé qui montre que tu as lu le profil"] },
      ]},

      { id: "2-13", type: "callout", variant: "tip", html: "<strong>Routine LinkedIn quotidienne (30 min) :</strong> 10 min pour publier ou préparer un post, 10 min pour commenter 10 posts de ta cible, 10 min pour envoyer 5 DM personnalisés." },

      { id: "2-24", type: "callout", variant: "warning", html: "<strong>Limite LinkedIn :</strong> Ne dépasse pas 80-100 demandes de connexion par semaine et 150 messages par jour. Au-delà, LinkedIn peut restreindre ton compte. La qualité prime sur la quantité." },
    ]),
    exercise: "<h3>Exercice : Lance ta machine LinkedIn</h3><p>Mets en place ta stratégie :</p><ol><li>Optimise ton profil : bannière, headline, section À propos avec CTA</li><li>Planifie 5 posts pour la semaine (1 éducatif, 1 storytelling, 1 étude de cas, 1 opinion, 1 tips)</li><li>Identifie 30 profils de ta cible (décideurs PME) et connecte-toi avec une note personnalisée</li><li>Commente 10 posts de ta cible chaque jour pendant une semaine</li><li>Envoie 5 DM de valeur par jour à des personnes qui interagissent avec ton contenu</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la meilleure heure pour publier sur LinkedIn en France ?", options: JSON.stringify(["6h du matin", "Entre 8h et 9h30", "14h", "22h"]), correctAnswer: "Entre 8h et 9h30", explanation: "Le pic d'activité LinkedIn en France est entre 8h et 9h30, quand les professionnels consultent leur feed en arrivant au travail. C'est le moment où tes posts ont le plus de chances d'être vus." },
      { type: "true_false", question: "Il faut pitcher son offre dès le premier message direct sur LinkedIn.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Pitcher au premier message est la meilleure façon de se faire ignorer. D'abord, apporte de la valeur (un conseil, une ressource). La conversation doit être naturelle avant de proposer un appel." },
      { type: "mcq", question: "Combien de posts LinkedIn par semaine sont recommandés pour un freelance ?", options: JSON.stringify(["1 par mois", "3 à 5 par semaine", "3 par jour", "1 par semaine"]), correctAnswer: "3 à 5 par semaine", explanation: "3 à 5 posts par semaine est le sweet spot : assez pour rester visible dans le feed de tes contacts, pas trop pour que ça devienne un travail à plein temps." },
      { type: "mcq", question: "Que doit contenir la headline LinkedIn d'un freelance IA ?", options: JSON.stringify(["'Freelance'", "La valeur apportée et la cible", "Le nom de l'entreprise", "Les technologies maîtrisées"]), correctAnswer: "La valeur apportée et la cible", explanation: "La headline doit communiquer la valeur que tu apportes et pour qui. 'J'aide les PME à automatiser leur business avec l'IA' est plus percutant que 'Freelance Développeur'." },
      { type: "true_false", question: "Il est important de répondre à tous les commentaires sous ses posts LinkedIn.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Répondre à tous les commentaires booste l'algorithme (plus d'interactions = plus de portée) et crée des conversations qui peuvent mener à des opportunités commerciales." },
      { type: "mcq", question: "Quel type de premier DM a le meilleur taux de réponse ?", options: JSON.stringify(["Un pitch direct avec prix", "Un message de valeur personnalisé (ressource, conseil)", "Un CV en pièce jointe", "Un message automatique générique"]), correctAnswer: "Un message de valeur personnalisé (ressource, conseil)", explanation: "Un message personnalisé qui apporte de la valeur (un conseil ciblé, un article utile) montre que tu t'intéresses au prospect. Ça crée une relation de confiance avant toute discussion commerciale." },
    ],
  },

  // ─── LEÇON 3 : Cold email : séquences qui convertissent ───
  {
    order: 3,
    module: 18,
    title: "Cold email : séquences qui convertissent",
    slug: "v2-cold-email-sequences-convertissent",
    duration: "25 min",
    description: "Maîtrise l'art du cold email : trouver les bons contacts, écrire des emails qui sont ouverts et lus, et créer des séquences de relance qui génèrent des rendez-vous.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le cold email n'est pas du spam" },
      { id: "3-2", type: "text", html: "<p>Le cold email, c'est l'envoi d'emails à des prospects que tu ne connais pas encore. Bien fait, c'est l'un des canaux les plus efficaces pour générer des leads B2B. Mal fait, c'est du spam qui atterrit dans les indésirables.</p><p>La différence ? La <strong>personnalisation</strong>, la <strong>pertinence</strong> et le <strong>respect</strong> du destinataire. Un bon cold email apporte de la valeur dès la première ligne.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Benchmark :</strong> Un bon cold email a un taux d'ouverture de 40-60% et un taux de réponse de 5-15%. Pour 100 emails envoyés, tu peux espérer 5 à 15 réponses et 2 à 5 rendez-vous." },

      { id: "3-14", type: "heading", level: 3, text: "Pourquoi le cold email marche encore en 2025" },
      { id: "3-15", type: "text", html: "<p>Beaucoup pensent que le cold email est mort. C'est faux. Ce qui est mort, c'est le <strong>cold email générique et mal ciblé</strong>. Un email personnalisé, envoyé à la bonne personne, avec le bon message, au bon moment, ça fonctionne toujours.</p><p>Pourquoi ? Parce que les décideurs de PME lisent encore leurs emails. C'est souvent le premier outil qu'ils consultent le matin. Et contrairement à LinkedIn ou au téléphone, l'email laisse le temps au prospect de réfléchir et de répondre quand il est disponible.</p><p>Le cold email est aussi le canal le plus <strong>scalable</strong> : une fois ta séquence écrite et testée, tu peux contacter 50-100 prospects par semaine avec un investissement de temps minimal.</p>" },

      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Trouver les bons contacts" },
      { id: "3-6", type: "text", html: "<p>La qualité de ta liste est plus importante que la quantité. 50 emails ultra-ciblés battent 500 emails génériques.</p><ul><li><strong>LinkedIn Sales Navigator :</strong> Le meilleur outil pour trouver des décideurs par secteur, taille d'entreprise et poste</li><li><strong>Apollo.io / Dropcontact :</strong> Pour trouver les adresses email professionnelles</li><li><strong>Societeinfo / Pappers :</strong> Pour identifier des entreprises françaises par secteur et chiffre d'affaires</li></ul><p><strong>Ta cible idéale :</strong> Le décideur (CEO, directeur marketing, DSI) d'une PME de 10-50 employés dans un secteur où l'IA apporte une valeur évidente (e-commerce, service client, immobilier, santé).</p>" },

      { id: "3-16", type: "heading", level: 3, text: "Construire ta liste de prospects pas à pas" },
      { id: "3-17", type: "steps", steps: [
        { title: "Définis ton ICP (Ideal Customer Profile)", description: "Sois ultra-précis. Pas 'les PME'. Plutôt : 'CEO de PME e-commerce de 10-50 employés basées en France, avec un CA de 1-10M euros, qui ont un site web et un support client par email.' Plus c'est précis, plus tes emails seront pertinents." },
        { title: "Trouve les entreprises (50-100 pour commencer)", description: "Utilise Societeinfo ou Pappers pour filtrer par secteur, taille et localisation. Export la liste dans un Google Sheet." },
        { title: "Identifie le bon interlocuteur", description: "Pour chaque entreprise, trouve le décideur sur LinkedIn. CEO pour les petites PME, Directeur Marketing ou DSI pour les plus grandes." },
        { title: "Récupère l'email pro", description: "Utilise Apollo.io, Dropcontact ou Hunter.io pour trouver l'email professionnel. Vérifie-le avec un outil de vérification (NeverBounce, ZeroBounce)." },
        { title: "Enrichis avec du contexte", description: "Pour chaque prospect, note : dernier post LinkedIn, actualité de l'entreprise, problème potentiel. C'est ce contexte qui fera la différence dans ton email." },
      ]},

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Étape 2 : L'email qui se fait lire" },
      { id: "3-9", type: "steps", steps: [
        { title: "L'objet : court et intrigant", description: "5-7 mots max. Personnalisé si possible. Exemples : '[Prénom], une idée pour [entreprise]', 'Question rapide sur votre support client', 'Vu votre post sur [sujet]'." },
        { title: "La première ligne : l'icebreaker", description: "Montre que tu as fait tes recherches. Référence un post LinkedIn, un article, un événement de l'entreprise. Pas de 'Je me permets de vous contacter...'." },
        { title: "Le problème", description: "En 1-2 phrases, décris un problème que le prospect rencontre probablement. Sois spécifique à son secteur." },
        { title: "Ta solution (1 phrase)", description: "Comment tu résous ce problème. Pas de jargon technique. Un résultat concret : 'On a aidé [entreprise similaire] à réduire son temps de réponse client de 70%'." },
        { title: "Le CTA (1 seul)", description: "Une question simple : 'Est-ce que ça vaut 15 min d'échange ?' ou 'Ça vous parle ?' Pas de liens, pas de pièces jointes." },
      ]},

      { id: "3-18", type: "callout", variant: "warning", html: "<strong>Les 3 erreurs qui mettent tes emails en spam :</strong> (1) Mettre des liens dans le premier email (surtout des liens de tracking). (2) Utiliser une adresse @gmail.com au lieu d'une adresse pro. (3) Envoyer plus de 30 emails/jour depuis un domaine tout neuf. Échauffe ton domaine progressivement : 5/jour la première semaine, 10/jour la deuxième, etc." },

      { id: "3-10", type: "heading", level: 2, text: "Étape 3 : La séquence de relance" },
      { id: "3-11", type: "text", html: "<p>Un seul email ne suffit presque jamais. La majorité des réponses arrivent après la <strong>2e ou 3e relance</strong>. Voici une séquence en 4 emails :</p><ul><li><strong>J+0 :</strong> Email initial (valeur + problème + CTA)</li><li><strong>J+3 :</strong> Relance courte — 'Je voulais m'assurer que mon email n'est pas passé à la trappe. [Résumé en 1 phrase]'</li><li><strong>J+7 :</strong> Apport de valeur — Partage un article, une étude de cas ou un tip utile lié à son secteur</li><li><strong>J+14 :</strong> Dernière relance — 'Je comprends si le timing n'est pas bon. Je me permets un dernier message au cas où.' </li></ul>" },

      { id: "3-19", type: "heading", level: 3, text: "Anatomie d'un email de relance efficace" },
      { id: "3-20", type: "text", html: "<p>La relance n'est pas un rappel ennuyeux. C'est une <strong>nouvelle chance d'apporter de la valeur</strong>. Voici ce qui fait la différence :</p><ul><li><strong>Relance J+3 (la plus importante) :</strong> Courte, directe, sans culpabilisation. 'Re: [objet original]. Bonjour [Prénom], je reviens vers vous au cas où mon email précédent se serait perdu. En résumé : [proposition de valeur en 1 phrase]. Ça mérite 15 min d'échange ?'</li><li><strong>Relance J+7 (apport de valeur) :</strong> Ne relance pas le même message. Apporte quelque chose de nouveau. Un article que tu as écrit, une stat pertinente pour son secteur, un cas client. Ça montre que tu es un expert, pas juste un vendeur.</li><li><strong>Relance J+14 (breakup email) :</strong> Le 'breakup email' a souvent le meilleur taux de réponse. Pourquoi ? Parce que les gens détestent rater une opportunité. 'Je ne vais pas vous relancer davantage. Si le sujet vous intéresse plus tard, n'hésitez pas à me contacter.'</li></ul>" },

      { id: "3-12", type: "comparison", headers: ["Email qui finit en spam", "Email qui obtient une réponse"], rows: [
        { cells: ["Objet générique : 'Offre de services IA'", "Objet ciblé : '[Prénom], une idée pour [entreprise]'"] },
        { cells: ["'Cher Monsieur/Madame...'", "Icebreaker personnalisé lié au prospect"] },
        { cells: ["Paragraphe de 20 lignes sur toi", "3-5 lignes focalisées sur le problème du prospect"] },
        { cells: ["'N'hésitez pas à me contacter'", "'Ça vaut 15 min d'échange ?'"] },
      ]},

      { id: "3-21", type: "heading", level: 3, text: "La configuration technique indispensable" },
      { id: "3-22", type: "checklist", title: "Avant d'envoyer ton premier cold email", items: [
        { id: "c1", text: "Domaine email professionnel configuré (pas @gmail.com)" },
        { id: "c2", text: "Enregistrements SPF, DKIM et DMARC configurés (délivrabilité)" },
        { id: "c3", text: "Domaine échauffé pendant 2-3 semaines (5 puis 10 puis 20 emails/jour)" },
        { id: "c4", text: "Adresses email vérifiées avec un outil (NeverBounce, ZeroBounce)" },
        { id: "c5", text: "Lien de désinscription inclus dans chaque email" },
        { id: "c6", text: "Pas de lien ni de pièce jointe dans le premier email" },
      ]},

      { id: "3-13", type: "callout", variant: "warning", html: "<strong>Légalité :</strong> En B2B en France, le cold email est légal tant que tu inclus un lien de désinscription, que l'email est professionnel (pas @gmail.com) et que le contenu est en rapport avec l'activité du destinataire." },
    ]),
    exercise: "<h3>Exercice : Lance ta première campagne de cold email</h3><p>Mets en place ton système :</p><ol><li>Identifie ta cible : secteur, taille d'entreprise, poste du décideur</li><li>Constitue une liste de 30 prospects avec leurs emails (Apollo.io, Dropcontact)</li><li>Rédige ton email initial en suivant la structure (objet, icebreaker, problème, solution, CTA)</li><li>Prépare 3 emails de relance pour ta séquence</li><li>Envoie tes 30 premiers emails et suis les résultats dans ton CRM</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est le taux de réponse moyen d'une bonne campagne de cold email B2B ?", options: JSON.stringify(["0.5-1%", "5-15%", "30-50%", "70-80%"]), correctAnswer: "5-15%", explanation: "Un bon cold email personnalisé et ciblé génère entre 5 et 15% de réponses. Pour 100 emails, tu peux espérer 5 à 15 réponses et 2 à 5 rendez-vous." },
      { type: "true_false", question: "Un seul email suffit généralement pour obtenir une réponse d'un prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La majorité des réponses arrivent après la 2e ou 3e relance. Les décideurs sont occupés et ton premier email peut facilement passer inaperçu. La séquence de relance est indispensable." },
      { type: "mcq", question: "Quelle est la longueur idéale d'un objet de cold email ?", options: JSON.stringify(["1-2 mots", "5-7 mots", "15-20 mots", "Une phrase complète"]), correctAnswer: "5-7 mots", explanation: "Un objet de 5-7 mots est assez court pour être lu en entier sur mobile, et assez long pour créer de la curiosité. Les objets trop longs sont tronqués et ignorés." },
      { type: "mcq", question: "Que faire si un prospect ne répond pas après le premier email ?", options: JSON.stringify(["Abandonner immédiatement", "Envoyer une relance à J+3 avec un message court", "Appeler son standard téléphonique", "Envoyer le même email 5 fois"]), correctAnswer: "Envoyer une relance à J+3 avec un message court", explanation: "La première relance à J+3 est une pratique standard. Un message court rappelant l'essentiel de ton premier email suffit. Ne renvoie jamais le même email identique." },
      { type: "true_false", question: "Le cold email B2B est illégal en France.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le cold email B2B est légal en France à condition d'inclure un lien de désinscription, d'utiliser une adresse professionnelle et que le contenu soit en rapport avec l'activité du destinataire." },
    ],
  },

  // ─── LEÇON 4 : Cold call : décrocher des RDV par téléphone ───
  {
    order: 4,
    module: 18,
    title: "Cold call : décrocher des RDV par téléphone",
    slug: "v2-cold-call-decrocher-rdv-telephone",
    duration: "20 min",
    description: "Le cold call fait peur mais reste l'un des canaux les plus directs pour décrocher des rendez-vous. Apprends le script, la mentalité et les techniques pour des appels efficaces.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le cold call n'est pas mort — il est sous-exploité" },
      { id: "4-2", type: "text", html: "<p>Tout le monde fait du cold email et du contenu LinkedIn. Presque personne ne décroche le téléphone. C'est exactement pour ça que le cold call est <strong>si efficace</strong> : tu te démarques instantanément.</p><p>L'objectif d'un cold call n'est PAS de vendre. C'est de <strong>décrocher un rendez-vous</strong>. Un appel de 2 minutes qui aboutit à un meeting de 30 minutes, c'est une victoire.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Benchmark :</strong> Un bon cold caller a un taux de conversion de 2-5%. Pour 100 appels, tu décroches 2 à 5 RDV. Ça semble peu, mais 5 RDV qualifiés par semaine, c'est 20 par mois — largement assez pour remplir ton pipeline." },

      { id: "4-14", type: "heading", level: 3, text: "Pourquoi le cold call te fait peur (et pourquoi c'est normal)" },
      { id: "4-15", type: "text", html: "<p>Soyons honnêtes : la première fois que tu vas décrocher ce téléphone pour appeler un inconnu, tu vas avoir la boule au ventre. C'est <strong>100% normal</strong>. Même les meilleurs commerciaux ont eu peur au début.</p><p>La peur vient de 3 choses : la peur du rejet ('il va me raccrocher au nez'), la peur de ne pas savoir quoi dire ('et s'il me pose une question à laquelle je ne sais pas répondre'), et la peur du jugement ('il va penser que je suis un vendeur de tapis').</p><p>La réalité ? La plupart des gens sont polis. Ils vont simplement dire 'non merci' et raccrocher. C'est tout. Ça fait pas mal. Et les 2-5% qui disent oui font toute la différence.</p><p><strong>Le secret :</strong> Les 10 premiers appels sont horribles. Les 10 suivants sont inconfortables. À partir du 30e, ça devient routinier. C'est un muscle qui se développe.</p>" },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Le script d'appel en 4 étapes" },
      { id: "4-6", type: "steps", steps: [
        { title: "L'accroche (10 secondes)", description: "Présente-toi et donne la raison de l'appel en une phrase. 'Bonjour [Prénom], c'est [Ton prénom] de [Ton entreprise]. Je vous appelle parce que j'aide les [secteur] à [bénéfice concret] grâce à l'IA.'" },
        { title: "La question de douleur (20 secondes)", description: "Pose une question qui touche un problème réel du prospect. 'Comment gérez-vous actuellement les demandes répétitives de vos clients ?' Écoute la réponse — c'est la clé." },
        { title: "Le pitch express (15 secondes)", description: "Si le problème est confirmé, propose ta solution en une phrase. 'On a aidé [entreprise similaire] à réduire de 60% leur volume de tickets avec un assistant IA.'" },
        { title: "Le CTA (5 secondes)", description: "Propose un RDV court : 'Ça vaudrait 15 minutes d'échange pour voir si on peut vous aider aussi ? Vous êtes dispo [date] ?'" },
      ]},

      { id: "4-16", type: "heading", level: 3, text: "Le script en situation réelle" },
      { id: "4-17", type: "text", html: "<p>Voici un appel complet, du début à la fin :</p><p><strong>Toi :</strong> 'Bonjour Pierre, c'est Thomas de OpexIA. Je vous appelle parce qu'on travaille avec plusieurs agences immobilières de la région pour automatiser la gestion des demandes entrantes avec l'IA. Je me demandais comment vous gérez ça de votre côté ?'</p><p><strong>Pierre :</strong> 'Euh, on a deux secrétaires qui gèrent les appels et les emails, pourquoi ?'</p><p><strong>Toi :</strong> 'OK, et sur ces demandes, quel pourcentage ce sont des questions répétitives ? Disponibilité des biens, prix, conditions de visite ?'</p><p><strong>Pierre :</strong> 'Oh, facilement 60-70% je dirais.'</p><p><strong>Toi :</strong> 'C'est exactement ce qu'on m'a dit chez MaisonPlus, une agence de 20 personnes. On leur a mis en place un assistant IA qui gère ces 70% automatiquement. Résultat : leurs secrétaires se concentrent sur les tâches à valeur ajoutée et le temps de réponse aux clients est passé de 4h à 30 secondes. Est-ce que ça vaudrait 15 minutes d'échange pour voir si ça peut s'appliquer chez vous ?'</p><p>C'est direct, naturel, et focalisé sur le problème du prospect. Pas de pitch technique, que des résultats.</p>" },

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Gérer les objections au téléphone" },
      { id: "4-9", type: "comparison", headers: ["Objection", "Réponse"], rows: [
        { cells: ["'Je n'ai pas le temps'", "'Je comprends. Justement, c'est un appel de 15 min pour voir si on peut vous faire gagner du temps. Jeudi 14h, ça vous irait ?'"] },
        { cells: ["'Envoyez-moi un email'", "'Avec plaisir. Pour être sûr de vous envoyer quelque chose de pertinent, j'ai juste une question rapide : [question de qualification]'"] },
        { cells: ["'On n'a pas de budget'", "'Pas de souci. L'objectif de l'appel est juste d'explorer si ça fait sens. Souvent, les économies générées financent la solution.'"] },
        { cells: ["'Ça ne nous intéresse pas'", "'Je comprends. Par curiosité, comment gérez-vous [problème] actuellement ? (Si vraiment pas intéressé, remercie et passe au suivant.)'"] },
      ]},

      { id: "4-18", type: "callout", variant: "tip", html: "<strong>La technique du 'Envoyez-moi un email' :</strong> Quand le prospect dit ça, 90% du temps c'est pour se débarrasser de toi. Mais si tu poses UNE question de qualification avant d'accepter, tu transformes le refus en conversation. 'Bien sûr, juste pour être sûr de vous envoyer quelque chose de pertinent : combien de demandes clients recevez-vous par jour ?' S'il répond, tu es de retour dans la conversation." },

      { id: "4-10", type: "heading", level: 2, text: "La mentalité du cold caller" },
      { id: "4-11", type: "text", html: "<p>Le cold call est un jeu de <strong>volume et de résilience</strong>. Tu vas te faire raccrocher au nez. Tu vas entendre 'non' 95 fois sur 100. C'est normal.</p><ul><li><strong>Détache-toi du résultat :</strong> Ton objectif est de passer 30 appels, pas de décrocher 30 RDV</li><li><strong>Prépare-toi :</strong> Recherche le prospect 2 minutes avant d'appeler (LinkedIn, site web)</li><li><strong>Souris en parlant :</strong> Ça s'entend au téléphone et ça change tout</li><li><strong>Note tout :</strong> Après chaque appel, note le résultat dans ton CRM</li></ul>" },

      { id: "4-19", type: "heading", level: 3, text: "Le framework de la session de cold call" },
      { id: "4-20", type: "steps", steps: [
        { title: "Préparation (15 min)", description: "Prépare ta liste, affiche ton script, ouvre ton CRM. Bois un grand verre d'eau. Mets-toi en conditions mentales : tu es là pour aider, pas pour déranger." },
        { title: "Warm-up (5 appels)", description: "Les 5 premiers appels sont pour te chauffer. Ne t'attends pas à des résultats exceptionnels. Concentre-toi sur ta diction, ton ton, ta confiance." },
        { title: "Sprint (20-25 appels)", description: "Enchaîne les appels sans trop réfléchir entre chacun. Plus tu réfléchis, plus tu procrastines. L'enchaînement rapide te maintient dans l'énergie." },
        { title: "Débriefing (10 min)", description: "Note tes résultats : appels passés, conversations eues, RDV décrochés. Identifie les objections récurrentes et améliore tes réponses pour la prochaine session." },
      ]},

      { id: "4-12", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> Appelle entre 8h30 et 10h ou entre 16h et 18h. Les décideurs sont plus disponibles en début et fin de journée. Évite le lundi matin et le vendredi après-midi." },

      { id: "4-13", type: "checklist", title: "Avant chaque session de cold call", items: [
        { id: "c1", text: "Liste de 30 prospects préparée avec noms et numéros" },
        { id: "c2", text: "Script imprimé ou affiché à côté de toi" },
        { id: "c3", text: "Réponses aux objections prêtes" },
        { id: "c4", text: "CRM ouvert pour noter les résultats" },
        { id: "c5", text: "Verre d'eau et attitude positive" },
      ]},
    ]),
    exercise: "<h3>Exercice : Ta première session de cold call</h3><p>Lance-toi :</p><ol><li>Prépare une liste de 20 prospects avec leurs numéros de téléphone</li><li>Écris ton script d'appel en suivant la structure en 4 étapes</li><li>Prépare tes réponses aux 4 objections courantes</li><li>Fais 10 appels (oui, seulement 10 pour commencer !) et note chaque résultat</li><li>Analyse : combien de conversations ? Combien de RDV ? Quelles objections ?</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel est l'objectif principal d'un cold call ?", options: JSON.stringify(["Vendre directement au téléphone", "Décrocher un rendez-vous", "Envoyer un devis", "Présenter toutes ses offres"]), correctAnswer: "Décrocher un rendez-vous", explanation: "Le cold call n'est pas un appel de vente. C'est un appel de 2 minutes dont l'unique objectif est d'obtenir un rendez-vous plus long où tu pourras présenter ta solution en détail." },
      { type: "true_false", question: "Le meilleur moment pour faire du cold call est le lundi matin.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le lundi matin est le pire moment : les décideurs gèrent leurs emails du week-end et planifient leur semaine. Les meilleurs créneaux sont entre 8h30-10h et 16h-18h, du mardi au jeudi." },
      { type: "mcq", question: "Que faire quand un prospect dit 'envoyez-moi un email' ?", options: JSON.stringify(["Raccrocher et envoyer un email", "Poser une question de qualification avant d'accepter", "Insister pour continuer l'appel", "Dire que tu n'envoies pas d'emails"]), correctAnswer: "Poser une question de qualification avant d'accepter", explanation: "'Envoyez-moi un email' est souvent un réflexe pour se débarrasser de l'appel. En posant une question de qualification, tu montres ta valeur et tu peux transformer la conversation." },
      { type: "mcq", question: "Quel est le taux de conversion moyen d'un bon cold caller ?", options: JSON.stringify(["50%", "20-30%", "2-5%", "0.1%"]), correctAnswer: "2-5%", explanation: "Un taux de 2-5% est excellent en cold call. Cela signifie 2 à 5 RDV pour 100 appels. C'est un jeu de volume : 30 appels par jour génèrent en moyenne 1-2 RDV." },
      { type: "true_false", question: "Il est recommandé de sourire pendant un cold call même si le prospect ne te voit pas.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le sourire modifie les vibrations de ta voix et ça s'entend au téléphone. Un ton chaleureux et souriant met le prospect en confiance et augmente tes chances d'avoir une conversation." },
    ],
  },

  // ─── LEÇON 5 : Ton système de prospection automatisé avec l'IA ───
  {
    order: 5,
    module: 18,
    title: "Ton système de prospection automatisé avec l'IA",
    slug: "v2-systeme-prospection-automatise-ia",
    duration: "25 min",
    description: "Automatise ta prospection avec l'IA : enrichissement de leads, personnalisation à grande échelle, séquences multi-canal et outils pour prospecter en dormant.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Prospecter à la main ne scale pas" },
      { id: "5-2", type: "text", html: "<p>Tu as appris à prospecter via le réseau, LinkedIn, le cold email et le cold call. Mais envoyer 20 messages personnalisés par jour, ça prend du temps. Et tu as aussi des projets à livrer.</p><p>La solution : <strong>automatiser les parties répétitives</strong> de ta prospection avec l'IA et les bons outils, tout en gardant la personnalisation qui fait la différence.</p>" },
      { id: "5-3", type: "callout", variant: "tip", html: "<strong>Principe :</strong> Automatise la recherche et l'enrichissement. Personnalise avec l'IA. Envoie automatiquement. Traite les réponses manuellement. L'humain reste sur les conversations, l'IA gère le reste." },

      { id: "5-15", type: "heading", level: 3, text: "Le paradoxe du freelance : vendre ou livrer ?" },
      { id: "5-16", type: "text", html: "<p>C'est LE problème de tout freelance solo : quand tu prospectes, tu ne livres pas. Quand tu livres, tu ne prospectes pas. Résultat : des revenus en montagnes russes. Un mois à 8 000 euros, le mois suivant à 0 parce que tu n'as pas prospecté.</p><p>L'automatisation de la prospection résout ce problème. Pendant que tu travailles sur un projet client, ta machine de prospection tourne en arrière-plan : elle envoie des emails, connecte sur LinkedIn, relance automatiquement. Tu te réveilles avec des réponses à traiter.</p><p><strong>Objectif :</strong> Consacrer maximum 30 min/jour à la prospection (principalement répondre aux leads chauds), et laisser l'automatisation faire le reste.</p>" },

      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "L'architecture du système automatisé" },
      { id: "5-6", type: "steps", steps: [
        { title: "Sourcing automatique des leads", description: "Utilise Apollo.io ou LinkedIn Sales Navigator pour extraire automatiquement des listes de prospects cibles avec leurs coordonnees." },
        { title: "Enrichissement des données", description: "Pour chaque lead, récupère des informations de contexte : dernier post LinkedIn, actualité de l'entreprise, secteur d'activité. Des outils comme Clay ou FullEnrich font ça automatiquement." },
        { title: "Personnalisation IA", description: "Utilise GPT-4 ou Claude pour générer des icebreakers personnalisés à partir des données enrichies. Un prompt bien conçu peut personnaliser 100 emails en quelques minutes." },
        { title: "Envoi séquencé multi-canal", description: "Utilise Lemlist, La Growth Machine ou Instantly pour envoyer tes séquences automatiquement : email J+0, connexion LinkedIn J+2, relance email J+5, DM LinkedIn J+8." },
        { title: "Suivi et optimisation", description: "Analyse les taux d'ouverture, de réponse et de conversion. A/B teste tes objets et tes messages. Améliore en continu." },
      ]},

      { id: "5-17", type: "heading", level: 3, text: "Le flux de données en pratique" },
      { id: "5-18", type: "text", html: "<p>Voici concrètement comment les données circulent dans ton système :</p><ol><li><strong>Apollo.io</strong> te donne une liste de 100 prospects avec nom, poste, entreprise, email, LinkedIn.</li><li><strong>Clay</strong> enrichit chaque prospect : dernier post LinkedIn, description de l'entreprise, actualité récente, technologie utilisée sur leur site.</li><li><strong>Claude/GPT API</strong> génère un icebreaker personnalisé pour chacun à partir des données enrichies. Exemple : 'J'ai vu que vous venez de lancer votre nouvelle gamme bio sur votre e-shop. Félicitations !'</li><li><strong>Lemlist/Instantly</strong> injecte l'icebreaker dans ton template d'email et envoie la séquence automatiquement avec les bonnes cadences.</li><li><strong>Ton CRM (Notion/Supabase)</strong> reçoit les réponses et tu prends le relais pour les conversations.</li></ol><p>Ce système, une fois en place, peut générer <strong>5-15 RDV par semaine</strong> en pilote automatique.</p>" },

      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "La stack d'outils recommandée" },
      { id: "5-9", type: "comparison", headers: ["Étape", "Outil", "Prix approximatif"], rows: [
        { cells: ["Sourcing leads", "Apollo.io", "Gratuit - 50€/mois"] },
        { cells: ["Enrichissement", "Clay / FullEnrich", "50 - 150€/mois"] },
        { cells: ["Personnalisation IA", "GPT-4 API / Claude API", "10 - 30€/mois"] },
        { cells: ["Séquences email", "Lemlist / Instantly", "30 - 100€/mois"] },
        { cells: ["Multi-canal", "La Growth Machine", "80 - 150€/mois"] },
        { cells: ["CRM", "Notion / ton CRM (Supabase)", "Gratuit"] },
      ]},

      { id: "5-19", type: "callout", variant: "info", html: "<strong>Budget total :</strong> Un système de prospection automatisé complet coûte entre 150 et 400 euros/mois. Si ce système génère ne serait-ce qu'1 client par mois (disons un chatbot à 3 000 euros), le ROI est de 7x à 20x. C'est le meilleur investissement que tu puisses faire." },

      { id: "5-20", type: "heading", level: 3, text: "La version gratuite pour démarrer" },
      { id: "5-21", type: "text", html: "<p>Tu n'as pas 400 euros/mois à investir tout de suite ? Voici la version low-cost pour commencer :</p><ul><li><strong>Sourcing :</strong> Apollo.io gratuit (50 crédits/mois) + recherche manuelle LinkedIn</li><li><strong>Enrichissement :</strong> Recherche manuelle : 2 min par prospect pour checker son LinkedIn et le site de son entreprise</li><li><strong>Personnalisation :</strong> ChatGPT gratuit ou Claude gratuit pour générer tes icebreakers un par un</li><li><strong>Envoi :</strong> Envoi manuel depuis ta boîte email pro (10-15 emails/jour max)</li><li><strong>Suivi :</strong> Un Google Sheet ou Notion gratuit comme CRM</li></ul><p>C'est plus lent, mais ça fonctionne. Dès que tu signes tes 2-3 premiers clients, investis dans les outils payants pour scaler.</p>" },

      { id: "5-10", type: "heading", level: 2, text: "Le prompt de personnalisation IA" },
      { id: "5-11", type: "text", html: "<p>Voici un exemple de prompt pour générer des icebreakers personnalisés :</p><pre><code>Tu es un expert en cold email B2B.\nÀ partir des informations suivantes sur un prospect,\ngénère un icebreaker de 1-2 phrases, personnel et naturel.\n\nNom : {nom}\nEntreprise : {entreprise}\nPoste : {poste}\nDernier post LinkedIn : {post}\nActualité entreprise : {actualite}\n\nRègles :\n- Pas de flatterie excessive\n- Réfère-toi à quelque chose de spécifique\n- Ton professionnel mais décontracté\n- Maximum 2 phrases</code></pre>" },

      { id: "5-22", type: "callout", variant: "tip", html: "<strong>Optimise ton prompt :</strong> Teste plusieurs variantes de ton prompt de personnalisation. Un bon prompt génère des icebreakers qui ne 'sentent' pas l'IA. Le prospect doit penser que tu as vraiment pris le temps de regarder son profil. Astuce : ajoute dans ton prompt 'Ne commence jamais par Cher/Chère, ne commence jamais par un compliment générique, sois spécifique.'" },

      { id: "5-12", type: "heading", level: 2, text: "Les métriques à suivre" },
      { id: "5-13", type: "checklist", title: "KPIs de ta prospection", items: [
        { id: "c1", text: "Taux d'ouverture email > 50% (sinon, travaille tes objets)" },
        { id: "c2", text: "Taux de réponse > 5% (sinon, travaille ta personnalisation)" },
        { id: "c3", text: "Taux de RDV > 2% du total envoyé" },
        { id: "c4", text: "Coût par lead < 5€" },
        { id: "c5", text: "Nombre de RDV par semaine > 3" },
      ]},

      { id: "5-23", type: "heading", level: 3, text: "Comment A/B tester tes emails" },
      { id: "5-24", type: "text", html: "<p>L'A/B testing est la clé pour améliorer tes performances en continu. Le principe : envoyer 2 versions légèrement différentes et comparer les résultats.</p><ul><li><strong>Teste l'objet en priorité :</strong> C'est ce qui détermine si ton email est ouvert. Envoie la version A à 25 prospects et la version B à 25 autres. Garde celle avec le meilleur taux d'ouverture.</li><li><strong>Teste un seul élément à la fois :</strong> Si tu changes l'objet ET le corps en même temps, tu ne sauras pas ce qui a fait la différence.</li><li><strong>Attends un volume suffisant :</strong> Ne tire pas de conclusions avec 10 emails. Attends au moins 50 envois par version pour avoir des résultats fiables.</li><li><strong>Itère chaque semaine :</strong> Chaque semaine, prends ta meilleure version et teste-la contre une nouvelle variante. En 1 mois, tes performances explosent.</li></ul>" },

      { id: "5-14", type: "callout", variant: "warning", html: "<strong>Attention :</strong> L'automatisation ne remplace pas la qualité. Un email automatisé mal personnalisé fait plus de dégâts qu'un bon email envoyé à la main. Teste toujours tes séquences sur un petit échantillon avant de scaler." },
    ]),
    exercise: "<h3>Exercice : Monte ton système de prospection automatisé</h3><p>Construis ta machine :</p><ol><li>Crée un compte Apollo.io et extrais une liste de 50 prospects ciblés</li><li>Écris un prompt GPT pour générer des icebreakers personnalisés à partir des données de tes prospects</li><li>Crée une séquence de 4 emails dans Lemlist ou Instantly</li><li>Teste ta séquence sur 20 prospects et mesure les résultats</li><li>Optimise en fonction des taux d'ouverture et de réponse</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle partie de la prospection NE devrait PAS être automatisée ?", options: JSON.stringify(["La recherche de leads", "L'enrichissement des données", "Le traitement des réponses et les conversations", "L'envoi des séquences email"]), correctAnswer: "Le traitement des réponses et les conversations", explanation: "Les réponses des prospects méritent une attention humaine. C'est le moment où la relation se crée et où tu qualifies le besoin. L'IA gère le volume, l'humain gère les conversations." },
      { type: "true_false", question: "Un email automatisé mal personnalisé est pire qu'un bon email envoyé manuellement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un email automatisé qui semble générique détruit ta crédibilité. Le prospect voit immédiatement que c'est un email de masse. Mieux vaut envoyer 20 emails bien personnalisés que 200 emails génériques." },
      { type: "mcq", question: "Quel taux d'ouverture minimum viser pour ses cold emails ?", options: JSON.stringify(["10%", "30%", "50%", "80%"]), correctAnswer: "50%", explanation: "Un taux d'ouverture de 50% est le minimum pour un cold email bien fait. Si tu es en dessous, travaille tes lignes d'objet : plus courtes, plus personnalisées, plus intrigantes." },
      { type: "mcq", question: "Quel outil permet de créer des séquences multi-canal (email + LinkedIn) ?", options: JSON.stringify(["Google Sheets", "La Growth Machine / Lemlist", "Notion", "Discord"]), correctAnswer: "La Growth Machine / Lemlist", explanation: "La Growth Machine et Lemlist permettent de créer des séquences automatisées qui combinent email, connexion LinkedIn et DM. Le multi-canal augmente significativement les taux de réponse." },
      { type: "true_false", question: "Il faut tester ses séquences sur un petit échantillon avant de les envoyer à grande échelle.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Tester sur 20-30 prospects permet de vérifier la délivrabilité, le taux d'ouverture et la qualité des réponses avant d'investir dans une campagne à grande échelle. Cela évite de griller ta réputation d'envoi." },
      { type: "mcq", question: "Quel est le rôle de l'IA dans un système de prospection automatisé ?", options: JSON.stringify(["Remplacer complètement le freelance", "Personnaliser les messages à grande échelle", "Passer les appels téléphoniques", "Signer les contrats"]), correctAnswer: "Personnaliser les messages à grande échelle", explanation: "L'IA excelle dans la personnalisation à grande échelle : générer des icebreakers, adapter les messages au secteur du prospect, et varier les formulations. C'est le multiplicateur qui rend la prospection scalable." },
    ],
  },
];
