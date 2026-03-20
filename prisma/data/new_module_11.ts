// ═══════════════════════════════════════════════════
// MODULE 11 — Trouver des clients (SALES & PROSPECTING)
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_11_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 11,
    title: "Les 3 canaux d'acquisition et la machine LinkedIn",
    slug: "3-canaux-acquisition-machine-linkedin",
    duration: "35 min",
    description: "Les 3 canaux qui fonctionnent pour une agence IA débutante (LinkedIn, cold email, réseau local), pourquoi ignorer le SEO et la pub — puis construire ta machine de prospection LinkedIn : profil, posts, DMs avec les templates exacts.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le piège du débutant : vouloir être partout" },
      { id: "1-2", type: "text", html: "<p>Quand on lance une agence IA, la tentation est forte de tout faire en même temps : créer un site, faire du SEO, lancer des pubs Facebook, poster sur Instagram, TikTok, LinkedIn... Résultat : tu t'épuises, tu obtiens zéro client, et tu abandonnes en pensant que ça ne marche pas.</p><p>La vérité : <strong>3 canaux seulement suffisent pour passer de 0 à 5 000€/mois</strong>. Et ces 3 canaux ne demandent ni budget pub, ni 6 mois d'attente pour voir des résultats.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Erreur fatale :</strong> commencer par le SEO ou la pub payante. Le SEO prend 6 à 12 mois. La pub coûte cher sans avoir encore prouvé son offre. Les deux tuent les agences qui démarrent." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 3 canaux qui fonctionnent vraiment" },
      { id: "1-6", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Ton acquisition client", description: "Les 3 seuls canaux dont tu as besoin" },
        { id: "n2", label: "LinkedIn", description: "Profil optimisé + posts + DM ciblés → prospects chauds" },
        { id: "n3", label: "Cold email", description: "Séquences automatisées vers des cibles précises → rendez-vous" },
        { id: "n4", label: "Réseau local", description: "BNI, CCI, commerçants, PME → deals rapides et fiables" },
      ]},
      { id: "1-7", type: "comparison", headers: ["Canal", "Délai avant résultats", "Coût", "Qualité des leads", "Facilité débutant"], rows: [
        { cells: ["LinkedIn", "3 à 7 jours", "Gratuit", "Très haute", "Facile"] },
        { cells: ["Cold email", "7 à 14 jours", "10-50€/mois", "Haute", "Moyen"] },
        { cells: ["Réseau local", "1 à 30 jours", "Gratuit / cotisation", "Très haute", "Très facile"] },
        { cells: ["SEO", "6 à 12 mois", "Temps ou budget", "Variable", "Difficile"] },
        { cells: ["Pub Facebook/Google", "Immédiat mais cher", "300-1000€/mois min.", "Basse à variable", "Difficile"] },
      ]},
      { id: "1-8", type: "callout", variant: "info", html: "<strong>La règle des 90 jours :</strong> concentre-toi sur UN seul canal pendant 30 jours, puis ajoute le deuxième, puis le troisième. Ne dilue jamais ton énergie." },

      { id: "1-9", type: "heading", level: 2, text: "Ton plan d'attaque sur 90 jours" },
      { id: "1-10", type: "steps", steps: [
        { title: "Jours 1-30 : LinkedIn only", description: "Optimise ton profil, poste 3x/semaine, envoie 10 DMs/jour. Objectif : 2-3 rendez-vous." },
        { title: "Jours 31-60 : LinkedIn + Cold email", description: "Continue LinkedIn, lance ta première séquence email sur 200 contacts. Objectif : 5 rendez-vous en cumulé." },
        { title: "Jours 61-90 : Les 3 canaux actifs", description: "Ajoute le réseau local (1 événement/semaine). Objectif : 10 rendez-vous, 2-3 clients signés." },
      ]},
      { id: "1-11", type: "callout", variant: "success", html: "<strong>Objectif réaliste :</strong> avec ce plan, la plupart des agences IA décrochent leur premier client entre le jour 14 et le jour 45. La clé : la régularité, pas le volume." },
      { id: "1-12", type: "separator", style: "dots" },

      { id: "1-13", type: "heading", level: 2, text: "LinkedIn : ton profil est ta vitrine commerciale" },
      { id: "1-14", type: "steps", steps: [
        { title: "Photo professionnelle", description: "Fond neutre, sourire, qualité correcte. Pas de selfie flou. Pas de fond de plage. Une photo de confiance." },
        { title: "Titre accrocheur (pas ton job title)", description: "Mauvais : 'Fondateur chez XYZ Agency'. Bien : 'J'automatise les tâches répétitives des PME avec l'IA → +20% de productivité'" },
        { title: "Section 'À propos' qui vend", description: "3 paragraphes : le problème que tu règles / comment tu le règles / ce que ça apporte concrètement. Termine par un appel à l'action." },
        { title: "Section 'Services' remplie", description: "LinkedIn permet d'afficher tes services. Utilise-la. Mets 3 services avec des titres clairs et des prix indicatifs si tu veux attirer les bons leads." },
        { title: "Bannière personnalisée", description: "Crée une bannière Canva avec ta proposition de valeur. Ex : 'J'installe l'IA dans ta PME en 30 jours — Zéro technique requis de ta part'" },
      ]},
      { id: "1-15", type: "callout", variant: "tip", html: "<strong>Test rapide :</strong> montre ton profil à quelqu'un qui ne te connaît pas. Après 10 secondes, peut-il dire ce que tu fais et pour qui ? Sinon, retravaille ton titre et ton résumé." },
      { id: "1-16", type: "separator", style: "line" },

      { id: "1-17", type: "heading", level: 2, text: "Les posts LinkedIn qui attirent les clients" },
      { id: "1-18", type: "comparison", headers: ["Format de post", "Objectif", "Fréquence recommandée"], rows: [
        { cells: ["Cas client / résultat concret", "Preuve sociale — le plus puissant", "1x/semaine"] },
        { cells: ["Astuce IA actionnable", "Expertise + partage", "1x/semaine"] },
        { cells: ["Prise de position / opinion", "Visibilité + engagement", "1x/semaine"] },
      ]},
      { id: "1-19", type: "callout", variant: "info", html: "<strong>Formule d'accroche qui cartonne :</strong> commence toujours par une ligne de choc. Ex : 'Cette PME de 8 personnes a récupéré 12h/semaine grâce à l'IA. Voici comment.' → Stop le scroll garanti." },
      { id: "1-20", type: "separator", style: "dots" },

      { id: "1-21", type: "heading", level: 2, text: "Les DMs LinkedIn qui convertissent" },
      { id: "1-22", type: "text", html: "<p>Le DM LinkedIn, c'est l'art d'être direct sans être lourd. La règle d'or : <strong>personnalise les 2 premières lignes</strong>, puis donne de la valeur avant de demander quoi que ce soit.</p>" },
      { id: "1-23", type: "code", language: "text", filename: "Template DM LinkedIn — Premier contact (version courte)", code: `Bonjour [Prénom],

J'ai vu ton post sur [sujet spécifique] — le point sur [élément précis] m'a vraiment parlé.

Je travaille avec des [secteur/type d'entreprise] pour automatiser [tâche spécifique] avec l'IA. En général, ça leur fait gagner [résultat concret : X heures/semaine ou X% de coûts].

Est-ce que c'est un sujet qui t'intéresse en ce moment ?

— [Ton prénom]` },
      { id: "1-24", type: "code", language: "text", filename: "Template DM LinkedIn — Approche avec valeur gratuite", code: `Bonjour [Prénom],

En regardant le site de [entreprise], j'ai repéré 3 points où l'IA pourrait vous faire gagner du temps rapidement :

1. [Process spécifique visible sur leur site] → automatisable en 2h
2. [Autre point] → chatbot de support possible
3. [Troisième point] → rapport automatisé chaque semaine

Je peux t'envoyer un mini-audit gratuit (5 minutes à lire) si ça t'intéresse ?

— [Ton prénom]` },
      { id: "1-25", type: "callout", variant: "warning", html: "<strong>Ce qui tue les DMs :</strong> commencer par 'Je suis expert en IA et je propose mes services...'. C'est le message que tout le monde envoie. Parle toujours du PROSPECT, pas de toi." },

      { id: "1-26", type: "quiz-inline", question: "Quelle est la première chose à mentionner dans un DM LinkedIn de prospection ?", options: [
        { id: "a", text: "Ton titre et ton expérience" },
        { id: "b", text: "Quelque chose de personnalisé sur le prospect (son post, son entreprise, son secteur)" },
        { id: "c", text: "Ton offre et tes tarifs" },
      ], correctId: "b", explanation: "La personnalisation dans les 2 premières lignes est ce qui différencie un DM qui obtient une réponse d'un DM qui finit à la corbeille. Le prospect doit sentir que tu lui parles vraiment à lui, pas à 200 autres personnes." },

      { id: "1-27", type: "separator", style: "dots" },
      { id: "1-28", type: "checklist", title: "Actions à faire maintenant", items: [
        { id: "c1", text: "Décide ton canal n°1 (LinkedIn recommandé pour débuter)" },
        { id: "c2", text: "Note ta cible idéale : secteur, taille d'entreprise, poste du décideur" },
        { id: "c3", text: "Bloque 1h par jour dans ton agenda pour la prospection" },
        { id: "c4", text: "Optimise ton profil LinkedIn (photo, titre, à propos, bannière)" },
        { id: "c5", text: "Écris et publie ton premier post LinkedIn" },
        { id: "c6", text: "Identifie 50 prospects cibles et prépare ton template DM" },
        { id: "c7", text: "Objectif quotidien : 10 demandes de connexion + 5 DMs envoyés" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Remplis cette fiche en 15 minutes puis passe à l'action LinkedIn.</p><p>1. <strong>Ma cible idéale</strong> : Secteur : ___ / Taille : ___ salariés / Décideur : ___<br>2. <strong>Mon canal n°1 pour les 30 prochains jours</strong> : ___<br>3. <strong>Mon objectif de rendez-vous à 30 jours</strong> : ___<br>4. <strong>Mon créneau prospection quotidien</strong> : de ___ à ___ heures<br><br>Puis : (5) Ouvre ton profil LinkedIn et note de 1 à 10 chaque point (photo, titre, à propos, bannière). (6) Améliore les 2 points les moins bien notés. (7) Écris un premier post : accroche choc (1 ligne) → contexte (2 lignes) → contenu valeur (5-7 lignes) → conclusion + question. (8) Identifie 20 prospects cibles et envoie 5 DMs personnalisés avec les templates ci-dessus.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 canaux d'acquisition recommandés pour une agence IA débutante ?", options: JSON.stringify(["SEO, publicité Facebook, Instagram", "LinkedIn, cold email, réseau local", "TikTok, YouTube, podcast", "Google Ads, affiliation, webinaires"]), correctAnswer: "LinkedIn, cold email, réseau local", explanation: "Ces 3 canaux ne demandent ni budget pub ni 6 mois d'attente. LinkedIn pour la visibilité et les DMs, le cold email pour le volume, et le réseau local pour la confiance en présentiel." },
      { type: "true_false", question: "Commencer par le SEO ou la pub payante est recommandé pour une agence IA qui démarre.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le SEO prend 6 à 12 mois pour donner des résultats. La pub coûte cher sans avoir encore prouvé son offre. Ces deux canaux tuent les agences qui démarrent." },
      { type: "mcq", question: "Quelle est la première chose à mentionner dans un DM LinkedIn de prospection ?", options: JSON.stringify(["Ton titre et ton expérience", "Quelque chose de personnalisé sur le prospect (son post, son entreprise)", "Ton offre et tes tarifs", "Un lien vers ton site web"]), correctAnswer: "Quelque chose de personnalisé sur le prospect (son post, son entreprise)", explanation: "La personnalisation dans les 2 premières lignes différencie un DM qui obtient une réponse d'un DM qui finit à la corbeille. Le prospect doit sentir que tu lui parles vraiment à lui." },
      { type: "true_false", question: "Le titre LinkedIn doit être ton job title officiel, comme 'Fondateur chez XYZ Agency'.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le titre LinkedIn doit être une proposition de valeur, pas un job title. 'J'automatise les tâches répétitives des PME avec l'IA -> +20% de productivité' est bien meilleur que 'Fondateur chez XYZ Agency'." },
      { type: "mcq", question: "Vous envoyez 20 DMs LinkedIn par jour depuis 2 semaines mais vous n'avez aucune réponse. Vos messages commencent par 'Bonjour, je suis expert en IA et je propose des chatbots'. Quel est le problème ?", options: JSON.stringify(["Vous n'envoyez pas assez de DMs, il faut passer à 100 par jour", "Vos DMs parlent de vous au lieu du prospect — il faut commencer par quelque chose de personnalisé sur lui (son post, son entreprise, son secteur)", "LinkedIn bloque vos messages car vous envoyez trop", "Le problème vient de votre photo de profil"]), correctAnswer: "Vos DMs parlent de vous au lieu du prospect — il faut commencer par quelque chose de personnalisé sur lui (son post, son entreprise, son secteur)", explanation: "Le message 'Je suis expert en...' est le DM que tout le monde envoie et qui finit à la corbeille. La personnalisation dans les 2 premières lignes est ce qui différencie un DM qui obtient une réponse." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 11,
    title: "Cold email : la machine à rendez-vous",
    slug: "cold-email-machine-a-rendez-vous",
    duration: "30 min",
    description: "Construire une séquence de cold email qui génère des rendez-vous qualifiés : trouver les emails, écrire des séquences en 3 emails, éviter les spams et utiliser les bons outils.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le cold email : encore la meilleure machine B2B" },
      { id: "3-2", type: "text", html: "<p>Le cold email a une mauvaise réputation parce que la plupart des gens le font mal. Un bon cold email <strong>n'est pas du spam</strong> — c'est un message court, ciblé, pertinent, qui arrive au bon moment. Bien fait, c'est le canal avec le meilleur retour sur investissement pour une agence IA.</p><p>Objectif réaliste : <strong>une séquence de 200 emails bien ciblés génère 8 à 15 réponses et 3 à 6 rendez-vous</strong>.</p>" },
      { id: "3-3", type: "callout", variant: "info", html: "<strong>Chiffres à connaître :</strong> taux d'ouverture moyen en cold email B2B : 40-60% avec un bon objet. Taux de réponse : 5-10% avec une bonne séquence. Taux de transformation en RDV : 30-50% des réponses positives." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Étape 1 : Trouver les emails" },
      { id: "3-6", type: "comparison", headers: ["Outil", "Prix", "Usage", "Note"], rows: [
        { cells: ["Hunter.io", "Gratuit (25/mois) ou 49€/mois", "Trouver l'email d'un domaine", "★★★★★"] },
        { cells: ["Apollo.io", "Gratuit limité ou 49€/mois", "Base de données + enrichissement", "★★★★★"] },
        { cells: ["Kaspr", "Gratuit (5 crédits) ou 45€/mois", "LinkedIn → email professionnel", "★★★★☆"] },
        { cells: ["Dropcontact", "24€/mois", "Enrichissement + vérification", "★★★★☆"] },
        { cells: ["Scraping LinkedIn + Clay", "Variable", "Enrichissement avancé", "★★★☆☆"] },
      ]},
      { id: "3-7", type: "text", html: "<p><strong>Recommandation pour débuter :</strong> commence avec Apollo.io en version gratuite. Tu peux exporter 25 contacts/jour, trouver leurs emails et les télécharger en CSV. C'est suffisant pour lancer une première séquence.</p>" },
      { id: "3-8", type: "separator", style: "line" },

      { id: "3-9", type: "heading", level: 2, text: "Étape 2 : La séquence en 3 emails" },
      { id: "3-10", type: "text", html: "<p>Une séquence de 3 emails espacés de 3 à 5 jours est le format optimal. Email 1 : valeur + hook. Email 2 : social proof. Email 3 : break-up email (le plus efficace souvent).</p>" },
      { id: "3-11", type: "code", language: "text", filename: "EMAIL 1 — Accroche + valeur (J0)", code: `Objet : [Prénom], une idée pour [entreprise]

Bonjour [Prénom],

J'ai regardé le site de [entreprise] — vous faites [ce qu'ils font, en 1 phrase].

Une question rapide : est-ce que votre équipe passe encore du temps à [tâche manuelle répétitive de leur secteur — ex : répondre aux demandes clients manuellement / ressaisir des données / créer des rapports Excel] ?

Je pose la question parce que j'aide des [type d'entreprise] comme la vôtre à automatiser exactement ce type de tâche avec l'IA — en général, ça représente 5 à 15 heures récupérées par semaine.

Est-ce que ça vaut 20 minutes pour qu'on en parle ?

[Prénom] [Nom]
[Lien Calendly]` },
      { id: "3-12", type: "code", language: "text", filename: "EMAIL 2 — Preuve sociale (J+4)", code: `Objet : Re: [Prénom], une idée pour [entreprise]

Bonjour [Prénom],

Je me permets de revenir vers vous rapidement.

La semaine dernière, j'ai aidé [type d'entreprise similaire] à mettre en place un système d'IA qui [résultat concret : ex. répond automatiquement à 80% des emails entrants / génère les rapports hebdomadaires en 2 clics / qualifie les leads avant qu'ils arrivent au commercial].

Résultat : [X heures récupérées / X% de coûts réduits / X leads supplémentaires par mois].

Je pense que quelque chose de similaire pourrait fonctionner pour [entreprise].

Seriez-vous disponible 20 minutes cette semaine ou la semaine prochaine ?

[Prénom] [Nom]
[Lien Calendly]` },
      { id: "3-13", type: "code", language: "text", filename: "EMAIL 3 — Break-up email (J+8)", code: `Objet : Dois-je abandonner ?

Bonjour [Prénom],

Je ne veux pas vous encombrer si ce n'est pas le bon moment.

Mais avant de clore mon dossier sur [entreprise], une dernière question : est-ce que l'automatisation de [process spécifique] est quelque chose que vous envisagez cette année ?

Si oui, je suis là. Si non, pas de problème — je ne vous recontacterai plus.

Bonne continuation dans tous les cas.

[Prénom] [Nom]` },
      { id: "3-14", type: "callout", variant: "tip", html: "<strong>Pourquoi l'email 3 est souvent le meilleur :</strong> le break-up email génère souvent plus de réponses que les 2 premiers. La phrase 'dois-je abandonner ?' crée une urgence psychologique et obtient des réponses même de personnes qui avaient ignoré les 2 premiers emails." },
      { id: "3-15", type: "separator", style: "dots" },

      { id: "3-16", type: "heading", level: 2, text: "Étape 3 : Les outils d'envoi" },
      { id: "3-17", type: "steps", steps: [
        { title: "Lemlist (recommandé)", description: "59€/mois. Personnalisation avancée, images dynamiques, suivi des ouvertures. Idéal pour des séquences semi-automatisées avec une touche personnelle." },
        { title: "Instantly.ai", description: "37€/mois. Parfait pour du volume (500+ emails/jour). Rotation d'adresses email, warm-up automatique, tableau de bord simple." },
        { title: "Brevo (ex-Sendinblue)", description: "Gratuit jusqu'à 300 emails/jour. Solution simple pour débuter, sans fonctions avancées de séquence." },
      ]},
      { id: "3-18", type: "callout", variant: "warning", html: "<strong>Éviter le dossier spam — les 5 règles :</strong><br>1. Warm-up ton domaine d'envoi 2 semaines avant (Instantly le fait automatiquement)<br>2. Jamais plus de 50 emails/jour au début<br>3. Personnalise au minimum le prénom ET le nom de l'entreprise<br>4. Texte pur, pas d'images ni de liens multiples dans les premiers emails<br>5. SPF, DKIM et DMARC configurés sur ton domaine (demande à ton hébergeur)" },

      { id: "3-19", type: "quiz-inline", question: "Pourquoi le troisième email ('break-up') est-il souvent le plus efficace dans une séquence de cold email ?", options: [
        { id: "a", text: "Parce qu'il est le plus court" },
        { id: "b", text: "Parce qu'il crée une légère urgence psychologique et provoque des réponses de personnes restées silencieuses" },
        { id: "c", text: "Parce qu'il contient le plus d'informations sur l'offre" },
      ], correctId: "b", explanation: "L'idée de 'perdre' une opportunité ou de mettre fin à une relation crée une réponse émotionnelle chez le prospect. Beaucoup de personnes qui n'avaient pas répondu aux emails 1 et 2 répondent à l'email 3 simplement pour ne pas laisser quelqu'un dans l'incertitude." },

      { id: "3-20", type: "checklist", title: "Checklist cold email — Avant le premier envoi", items: [
        { id: "c1", text: "Domaine d'envoi séparé configuré (pas ton domaine principal)" },
        { id: "c2", text: "SPF, DKIM, DMARC configurés sur le domaine d'envoi" },
        { id: "c3", text: "Warm-up lancé depuis au moins 10 jours (via Instantly ou Lemwarm)" },
        { id: "c4", text: "Liste de 100 à 300 contacts qualifiés avec emails vérifiés" },
        { id: "c5", text: "Séquence de 3 emails rédigée et personnalisée" },
        { id: "c6", text: "Lien Calendly configuré avec un créneau de 20 min 'appel découverte'" },
        { id: "c7", text: "Test sur 10 contacts avant d'envoyer la séquence complète" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Construis ta première séquence de cold email.</p><p>1. Crée un compte Apollo.io gratuit et exporte 50 contacts de ta cible idéale avec leurs emails.<br>2. Rédige tes 3 emails en adaptant les templates ci-dessus à ton offre et ta cible.<br>3. Crée un compte Brevo (gratuit) et configure ta première séquence automatisée avec les 3 emails espacés de 4 jours.<br>4. Envoie les 50 premiers emails et note tes taux d'ouverture et de réponse.<br><br><strong>Règle d'or :</strong> ne touche pas aux templates avant d'avoir envoyé au moins 50 emails. Les données comptent plus que tes intuitions.</p>",
    quiz: [
      { type: "mcq", question: "Combien de rendez-vous peut générer une séquence de 200 cold emails bien ciblés ?", options: JSON.stringify(["0 à 1 rendez-vous", "3 à 6 rendez-vous", "50 à 100 rendez-vous", "Aucun, le cold email ne fonctionne plus"]), correctAnswer: "3 à 6 rendez-vous", explanation: "Une séquence de 200 emails bien ciblés génère en moyenne 8 à 15 réponses et 3 à 6 rendez-vous. Le taux de réponse moyen est de 5-10% et le taux de transformation en RDV est de 30-50% des réponses positives." },
      { type: "true_false", question: "Le troisième email d'une séquence de cold email (le 'break-up email') est souvent celui qui génère le plus de réponses.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le break-up email avec la phrase 'Dois-je abandonner ?' crée une urgence psychologique. L'idée de 'perdre' une opportunité provoque des réponses même de personnes qui avaient ignoré les 2 premiers emails." },
      { type: "mcq", question: "Quel outil est recommandé pour débuter en cold email avec un budget limité ?", options: JSON.stringify(["Lemlist à 59€/mois", "Apollo.io en version gratuite pour trouver les contacts", "Un logiciel CRM à 200€/mois", "LinkedIn Premium à 60€/mois"]), correctAnswer: "Apollo.io en version gratuite pour trouver les contacts", explanation: "Apollo.io en version gratuite permet d'exporter 25 contacts/jour avec leurs emails et de les télécharger en CSV. C'est suffisant pour lancer une première séquence sans investissement." },
      { type: "true_false", question: "On peut envoyer 200 cold emails dès le premier jour avec un nouveau domaine d'envoi.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il faut d'abord faire un warm-up du domaine d'envoi pendant au moins 2 semaines et ne pas dépasser 50 emails/jour au début. Sinon, les emails finissent en spam. Le warm-up peut être automatisé avec des outils comme Instantly." },
      { type: "mcq", question: "Vous lancez votre première campagne de cold email. Après 200 envois, votre taux d'ouverture est de 5% (la norme est 40-60%). Vos emails finissent probablement en spam. Quelle est la cause la plus probable ?", options: JSON.stringify(["Votre offre n'est pas assez attractive", "Vous n'avez pas fait de warm-up du domaine d'envoi et les enregistrements SPF/DKIM/DMARC ne sont pas configurés", "Vous avez envoyé les emails un mauvais jour de la semaine", "Votre liste de contacts est trop petite"]), correctAnswer: "Vous n'avez pas fait de warm-up du domaine d'envoi et les enregistrements SPF/DKIM/DMARC ne sont pas configurés", explanation: "Un taux d'ouverture de 5% indique un problème de délivrabilité, pas de contenu. Les causes principales : domaine non chauffé (il faut 2 semaines de warm-up), SPF/DKIM/DMARC non configurés, et trop d'emails envoyés trop vite. La solution : configurer les DNS, faire un warm-up de 2 semaines et commencer avec 20-30 emails/jour." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 11,
    title: "L'appel de closing : convertir un prospect en client",
    slug: "appel-closing-convertir-prospect-client",
    duration: "25 min",
    description: "Maîtriser le script d'appel découverte : poser les bonnes questions, présenter ton offre au bon moment, gérer les objections et closer avec confiance.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le rendez-vous : ne l'improvise jamais" },
      { id: "4-2", type: "text", html: "<p>Tu as décroché un rendez-vous. Bravo. Maintenant, ne va pas improviser. <strong>80% des deals perdus le sont à cause d'un appel découverte mal structuré</strong> : on parle trop de soi, on présente l'offre trop tôt, on ne comprend pas vraiment le problème du prospect.</p><p>Un bon appel découverte dure 20 à 30 minutes et suit une structure précise. Voici cette structure.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>La règle 70/30 :</strong> pendant un appel découverte, le prospect doit parler 70% du temps. Toi 30%. Plus le prospect parle, plus il s'implique, plus il te fait confiance, et plus tu comprends ce dont il a besoin." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Le script d'appel découverte (20-30 min)" },
      { id: "4-6", type: "diagram", variant: "flow", nodes: [
        { id: "f1", label: "Intro (2 min)", description: "Remercie, confirme le timing, donne l'ordre du jour" },
        { id: "f2", label: "Découverte (10 min)", description: "Questions sur leur situation, leurs problèmes, leurs objectifs" },
        { id: "f3", label: "Qualification (3 min)", description: "Budget, décision, urgence, priorité" },
        { id: "f4", label: "Présentation (5 min)", description: "Montre comment tu règles exactement leur problème" },
        { id: "f5", label: "Closing (5 min)", description: "Prochaine étape concrète, prix, signature" },
      ]},
      { id: "4-7", type: "code", language: "text", filename: "Script complet — Appel découverte agence IA", code: `=== INTRO (2 min) ===

"Bonjour [Prénom], merci d'avoir pris le temps.
On a 20-25 minutes, ça vous convient toujours ?

Voici comment je propose qu'on structure cet appel :
d'abord, j'aimerais comprendre votre situation et vos enjeux actuels.
Ensuite, si ça a du sens, je vous expliquerai comment je pourrais vous aider.
Et si ça ne colle pas, pas de problème — on se le dit franchement.

Ça vous va ?"

=== DÉCOUVERTE (10 min) ===

Questions à poser dans l'ordre :

1. "Pour commencer, décrivez-moi une journée type dans votre équipe.
   Quelles sont les tâches qui prennent le plus de temps en ce moment ?"

2. "Parmi ces tâches, lesquelles vous semblent les plus...
   disons, pénibles ou peu valorisantes pour votre équipe ?"

3. "Si vous pouviez récupérer 10 heures par semaine dans votre équipe,
   qu'est-ce que vous feriez avec ?"

4. "Vous avez déjà essayé d'automatiser certaines choses ?
   Qu'est-ce qui a marché, qu'est-ce qui n'a pas marché ?"

5. "C'est quoi l'impact aujourd'hui de ne pas avoir résolu ça ?
   En temps, en argent, en frustration ?"

=== QUALIFICATION (3 min) ===

6. "Pour vous donner une idée concrète de ce que ça coûte de mettre ça en place :
   vous avez un budget alloué à la transformation digitale / IA cette année ?"

   (Si non : "Ok, pas de souci. C'est vous seul qui décidez ou il y a quelqu'un d'autre
   dans la boucle ?")

7. "C'est quelque chose que vous voulez régler dans quel délai ?
   Est-ce urgent ou plutôt pour le prochain trimestre ?"

=== PRÉSENTATION (5 min) ===

"Très bien. Voici ce que j'entends : [résumé de leur problème en 2 phrases].

Ce que je fais concrètement, c'est [ta solution adaptée à leur problème spécifique].

Par exemple, pour un client qui ressemblait à votre situation — [secteur similaire] —
on a mis ça en place en [durée] et le résultat c'était [résultat concret].

Est-ce que ça ressemble à ce dont vous avez besoin ?"

=== CLOSING (5 min) ===

"Pour avancer, voici comment ça se passe :

Étape 1 : je prépare une proposition sur mesure pour vous — ça prend 48h.
Étape 2 : on a un deuxième appel de 30 min pour la valider ensemble.
Étape 3 : si tout est bon, on démarre.

Mon tarif pour ce type de projet, c'est entre [fourchette basse] et [fourchette haute],
selon le périmètre exact.

Est-ce que ça rentre dans ce que vous envisagez ?"` },
      { id: "4-8", type: "separator", style: "dots" },

      { id: "4-9", type: "heading", level: 2, text: "Gérer les objections courantes" },
      { id: "4-10", type: "code", language: "text", filename: "Réponses aux objections les plus fréquentes", code: `OBJECTION : "C'est trop cher."
→ "Je comprends. Permettez-moi de vous poser une question :
   ce problème vous coûte combien actuellement par mois — en temps ou en opportunités perdues ?
   [Laisse-les répondre.]
   Si on résout ça, le ROI se calcule rapidement, non ?"

---

OBJECTION : "On n'a pas le budget maintenant."
→ "Pas de problème. C'est sur quel trimestre que vous pensez avoir le budget ?
   Je préfère revenir au bon moment plutôt que de vous forcer."
   [Note dans ton CRM et relance à la date indiquée.]

---

OBJECTION : "On a besoin d'en parler en interne."
→ "Bien sûr. Qui d'autre est dans la décision ?
   Est-ce que ça aurait du sens qu'on les inclue dans un prochain appel
   pour que je puisse répondre directement à leurs questions ?"

---

OBJECTION : "On n'est pas sûrs que l'IA soit adapté à notre secteur."
→ "C'est une bonne question. Voici ce que je vous propose :
   laissez-moi faire un mini-audit gratuit de 2-3 cas d'usage spécifiques à votre activité.
   Ça vous donne une vision concrète avant de décider.
   Je vous l'envoie dans 48h. Ça vous va ?"

---

OBJECTION : "On a peur que ce soit trop complexe à mettre en place."
→ "Je comprends l'inquiétude. Mais voilà comment ça se passe en pratique :
   vous n'avez pas à comprendre comment ça fonctionne techniquement.
   Mon job, c'est de faire en sorte que ça soit transparent pour vous et votre équipe.
   Mes clients disent souvent que la mise en place était plus simple qu'ils le craignaient."` },
      { id: "4-11", type: "callout", variant: "success", html: "<strong>La règle d'or du closing :</strong> ne baisse jamais ton prix à chaud sous pression. Si le prospect dit 'c'est trop cher', ne réagis pas immédiatement. Fais une pause de 3 secondes et pose une question. Les silences sont tes alliés." },

      { id: "4-12", type: "quiz-inline", question: "Quand dois-tu présenter ton offre et tes tarifs pendant un appel découverte ?", options: [
        { id: "a", text: "Au début de l'appel pour gagner du temps" },
        { id: "b", text: "Seulement après avoir compris le problème du prospect et résumé ce qu'il t'a dit" },
        { id: "c", text: "Par email avant l'appel" },
      ], correctId: "b", explanation: "Présenter l'offre avant de comprendre le problème est l'erreur classique. Si tu résumes d'abord le problème du prospect avec ses propres mots, il perçoit ta solution comme une réponse sur-mesure — pas comme un argumentaire commercial générique." },

      { id: "4-13", type: "separator", style: "dots" },
      { id: "4-14", type: "checklist", title: "Checklist — Avant chaque appel découverte", items: [
        { id: "c1", text: "Recherché l'entreprise et le prospect sur LinkedIn (5 min max)" },
        { id: "c2", text: "Script imprimé ou ouvert sur un second écran" },
        { id: "c3", text: "Lien Calendly prêt pour proposer la prochaine étape à la fin" },
        { id: "c4", text: "Notion ou CRM ouvert pour prendre des notes pendant l'appel" },
        { id: "c5", text: "Micro testé, fond propre si appel vidéo, notifications silencieuses" },
        { id: "c6", text: "Objections relues 2 minutes avant l'appel" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Fais un jeu de rôle.</p><p>1. Demande à un ami ou un proche de jouer le rôle d'un prospect (gérant d'une petite entreprise locale, par exemple).<br>2. Conduis l'appel en suivant le script, sans regarder les réponses aux objections.<br>3. Enregistre l'appel (avec accord de la personne) et réécoute-le. Note : est-ce que tu parles moins de 30% du temps ? Est-ce que tu as bien résumé le problème avant de présenter l'offre ?<br><br>Alternative si tu n'as personne : enregistre-toi en train de jouer les deux rôles. Ça paraît bizarre mais c'est extrêmement efficace pour s'entraîner.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la répartition idéale du temps de parole pendant un appel découverte ?", options: JSON.stringify(["Toi 70%, le prospect 30%", "Toi 50%, le prospect 50%", "Toi 30%, le prospect 70%", "Toi 90%, le prospect 10%"]), correctAnswer: "Toi 30%, le prospect 70%", explanation: "La règle 70/30 stipule que le prospect doit parler 70% du temps et toi 30%. Plus le prospect parle, plus il s'implique, plus il te fait confiance, et plus tu comprends ce dont il a vraiment besoin." },
      { type: "true_false", question: "Il faut présenter son offre et ses tarifs dès le début de l'appel découverte pour gagner du temps.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Présenter l'offre avant de comprendre le problème est l'erreur classique. Il faut d'abord passer par la phase de découverte (10 min), puis la qualification (3 min), avant de présenter sa solution. Le prospect perçoit alors ta solution comme sur-mesure." },
      { type: "mcq", question: "Quand un prospect dit 'C'est trop cher', quelle est la meilleure réaction ?", options: JSON.stringify(["Baisser immédiatement le prix de 20%", "Faire une pause de 3 secondes puis poser une question sur le coût actuel de son problème", "Envoyer un email de relance le lendemain avec une réduction", "Expliquer en détail toutes les fonctionnalités incluses"]), correctAnswer: "Faire une pause de 3 secondes puis poser une question sur le coût actuel de son problème", explanation: "La règle d'or du closing : ne jamais baisser son prix à chaud sous pression. Faire une pause de 3 secondes et demander combien le problème coûte actuellement permet de recadrer la discussion sur le ROI plutôt que sur le prix." },
      { type: "true_false", question: "80% des deals perdus le sont à cause d'un appel découverte mal structuré.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La majorité des deals sont perdus parce que le commercial parle trop de soi, présente l'offre trop tôt, ou ne comprend pas vraiment le problème du prospect. Un script structuré en 5 phases (intro, découverte, qualification, présentation, closing) évite ces erreurs." },
      { type: "mcq", question: "Vous êtes en appel découverte avec un gérant de restaurant. Au bout de 2 minutes, il vous demande : 'Bon, combien ça coûte un chatbot ?' Que faites-vous ?", options: JSON.stringify(["Vous donnez votre prix immédiatement pour ne pas perdre son temps", "Vous dites que vous n'avez pas encore de tarif", "Vous répondez : 'Bonne question, j'y arrive dans quelques minutes — mais avant, j'aimerais comprendre votre situation pour vous proposer la solution la plus adaptée'", "Vous raccrochez car ce prospect n'est pas sérieux"]), correctAnswer: "Vous répondez : 'Bonne question, j'y arrive dans quelques minutes — mais avant, j'aimerais comprendre votre situation pour vous proposer la solution la plus adaptée'", explanation: "Présenter le prix avant de comprendre le problème est l'erreur n°1. En recadrant vers la phase de découverte, vous apprenez les vrais besoins du prospect et pouvez ensuite ancrer votre prix sur la valeur créée. Le prospect perçoit alors votre solution comme sur-mesure et le prix comme justifié." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 11,
    title: "Le réseau local : ton arme secrète sous-estimée",
    slug: "reseau-local-arme-secrete",
    duration: "20 min",
    description: "Utiliser ton réseau local pour décrocher des clients rapidement : BNI, CCI, événements, approche directe des commerçants et PME de ta ville.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Pourquoi le réseau local est sous-estimé" },
      { id: "5-2", type: "text", html: "<p>Tout le monde est focalisé sur le digital — LinkedIn, cold email, SEO. Pendant ce temps, <strong>tes clients idéaux sont à 10 minutes de chez toi</strong>, ils ne savent pas que l'IA existe pour eux, et ils adoreraient parler à quelqu'un en face à face qui peut les aider.</p><p>Le réseau local a deux avantages uniques : la <strong>confiance se construit infiniment plus vite en présentiel</strong>, et tu as zéro concurrence directe dans la plupart des villes moyennes.</p>" },
      { id: "5-3", type: "callout", variant: "success", html: "<strong>Exemple réel :</strong> un consultant IA à Angers a signé ses 4 premiers clients via le BNI local avant même d'avoir un site web. Ses prospects l'ont choisi parce qu'ils pouvaient le regarder dans les yeux — pas parce qu'il avait le meilleur profil LinkedIn." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Les 4 types de réseau local à activer" },
      { id: "5-6", type: "comparison", headers: ["Réseau", "Description", "Coût", "Délai pour premier client"], rows: [
        { cells: ["BNI", "Business Network International — réunions hebdomadaires, bouche à oreille structuré", "~1500€/an", "1 à 3 mois"] },
        { cells: ["CCI locale", "Chambre de Commerce — événements gratuits, formations, mises en relation", "Adhésion optionnelle", "2 à 4 mois"] },
        { cells: ["Événements locaux", "Meetups tech, afterworks, clubs d'entrepreneurs, incubateurs", "Gratuit à 20€/événement", "Variable"] },
        { cells: ["Approche directe", "Aller voir les commerces et PME autour de toi", "Gratuit", "0 à 14 jours"] },
      ]},
      { id: "5-7", type: "text", html: "<p>La <strong>stratégie d'approche directe</strong> est la plus rapide et la plus sous-utilisée. Beaucoup de gens ont peur de l'inconfort. Mais si tu entres dans un commerce local et que tu proposes une solution concrète, le propriétaire t'écoutera — il n'a pas de filtre anti-spam sur ses conversations en boutique.</p>" },
      { id: "5-8", type: "separator", style: "line" },

      { id: "5-9", type: "heading", level: 2, text: "Le script d'approche directe en boutique ou PME" },
      { id: "5-10", type: "code", language: "text", filename: "Script — Approche directe d'un commerce local", code: `=== EN BOUTIQUE (version très courte — 90 secondes) ===

"Bonjour, je m'appelle [Prénom]. Je suis consultant en IA, je travaille avec des
petits commerces et des PME de [ville] pour les aider à gagner du temps avec l'IA.

Je ne veux pas vous déranger, juste une question rapide :
est-ce que vous passez encore beaucoup de temps à répondre aux mêmes questions
clients par téléphone ou par email ?"

[Si oui ou hésitation :]
"C'est exactement ce que j'automatise. Un chatbot sur votre site ou votre page Google
qui répond à la place — les horaires, les prix, les disponibilités.
Ça prendrait 2h à installer et ça vous ferait gagner facilement 5-10h par semaine.

Je peux vous faire une démo rapide de 20 minutes si ça vous intéresse.
Je suis disponible [jour] ou [jour]. C'est vous qui choisissez."

---

=== PITCH BNI (60 secondes chrono — chaque semaine) ===

"Cette semaine, je cherche à rencontrer des [type d'entreprise].

Mon client idéal, c'est [description : ex. un cabinet comptable de 5 à 20 personnes
qui perd du temps à relancer manuellement ses clients].

Je leur installe un système d'IA qui [résultat concret en 1 phrase].

La semaine dernière, j'ai aidé [client anonyme ou type de client] à [résultat].

Si vous connaissez quelqu'un dans [secteur], je serais ravi d'une mise en relation."

---

=== EMAIL DE SUIVI APRÈS UN ÉVÉNEMENT NETWORKING ===

Objet : Suite à notre échange à [nom de l'événement]

Bonjour [Prénom],

C'était un plaisir d'échanger avec vous lors de [événement] hier soir.

Comme je vous le disais, j'aide les [type d'entreprise] à [résultat en 1 phrase].

Je serais heureux de vous montrer concrètement comment ça pourrait s'appliquer
à [son entreprise] — un échange de 20 minutes suffit.

Voici mon calendrier si vous voulez qu'on trouve un créneau :
[Lien Calendly]

À très bientôt,
[Prénom]` },
      { id: "5-11", type: "separator", style: "dots" },

      { id: "5-12", type: "heading", level: 2, text: "La stratégie des recommandations" },
      { id: "5-13", type: "steps", steps: [
        { title: "Demande systématiquement après chaque mission", description: "\"Est-ce que vous connaissez d'autres personnes dans votre secteur qui pourraient bénéficier de la même chose ?\" — Simple, direct, et ça génère 30 à 40% des nouveaux clients des agences matures." },
        { title: "Propose un système de parrainage", description: "\"Si quelqu'un que vous me présentez devient client, je vous offre [cadeau / réduction / mois offert].\" Formalise la recommandation pour encourager l'action." },
        { title: "Entretiens le réseau même sans projet", description: "Envoie un article utile une fois par mois à tes anciens clients et contacts. Pas de vente — juste de la valeur. Tu resteras top of mind quand ils ont besoin de toi." },
        { title: "Collecte des témoignages vidéo", description: "Après une mission réussie, demande un témoignage de 1 minute sur téléphone. Un vrai client satisfait qui parle en face caméra vaut mieux que 10 pages de texte." },
      ]},
      { id: "5-14", type: "callout", variant: "tip", html: "<strong>Le multiplicateur réseau :</strong> un client satisfait dans un BNI peut te valoir 5 à 10 recommandations en un an — parce que les membres du BNI sont explicitement là pour se recommander mutuellement. C'est souvent le meilleur ROI sur abonnement qu'on puisse trouver." },

      { id: "5-15", type: "quiz-inline", question: "Quel est l'avantage principal de l'approche directe en boutique ou PME locale vs LinkedIn ?", options: [
        { id: "a", text: "C'est moins cher que LinkedIn Premium" },
        { id: "b", text: "La confiance se construit beaucoup plus vite en présentiel et il n'y a pas de filtre anti-spam ou de concurrence digitale" },
        { id: "c", text: "Les commerçants ont plus de budget que les entreprises sur LinkedIn" },
      ], correctId: "b", explanation: "La confiance est le principal frein à la vente. En présentiel, tu peux établir une connexion humaine en quelques minutes qui prendrait des semaines à créer via messages LinkedIn. De plus, la plupart des commerçants et PME locales ne reçoivent aucune approche IA — tu es souvent le premier." },

      { id: "5-16", type: "separator", style: "dots" },
      { id: "5-17", type: "checklist", title: "Checklist réseau local — Plan d'action 30 jours", items: [
        { id: "c1", text: "Identifier le BNI le plus proche et assister à une réunion visiteur (gratuit)" },
        { id: "c2", text: "S'inscrire à la newsletter de la CCI locale pour connaître les prochains événements" },
        { id: "c3", text: "Trouver 1 meetup ou événement entrepreneur dans ta ville ce mois-ci" },
        { id: "c4", text: "Lister 10 commerces ou PME dans ton quartier qui pourraient bénéficier d'un chatbot ou d'automatisation" },
        { id: "c5", text: "Faire une approche directe dans 3 de ces 10 établissements cette semaine" },
        { id: "c6", text: "Préparer ton pitch BNI de 60 secondes et le répéter à voix haute 3 fois" },
      ]},
    ]),
    exercise: "<p><strong>Exercice terrain :</strong> Cette semaine, sors de derrière ton écran.</p><p>1. Identifie 5 commerces ou PME dans un rayon de 2km autour de chez toi.<br>2. Entre dans 2 d'entre eux et tente l'approche directe avec le script ci-dessus. L'objectif n'est pas de signer, c'est de t'entraîner à pitcher en présentiel.<br>3. Note ce qui s'est passé : réaction du propriétaire, objections, ce que tu aurais dit différemment.<br><br>La plupart des gens ne feront pas cet exercice parce qu'il sort de leur zone de confort. Si tu le fais, tu seras déjà dans le top 10% des consultants IA qui cherchent des clients.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage unique du réseau local par rapport au digital pour une agence IA ?", options: JSON.stringify(["Les commerçants locaux ont plus de budget", "La confiance se construit plus vite en présentiel et il y a zéro concurrence IA dans la plupart des villes", "Le réseau local est gratuit contrairement à LinkedIn", "Les prospects locaux connaissent déjà l'IA"]), correctAnswer: "La confiance se construit plus vite en présentiel et il y a zéro concurrence IA dans la plupart des villes", explanation: "La confiance est le principal frein à la vente. En présentiel, tu établis une connexion humaine en quelques minutes qui prendrait des semaines via LinkedIn. De plus, dans la plupart des villes moyennes, tu es souvent le premier consultant IA à approcher les commerces locaux." },
      { type: "true_false", question: "Le BNI (Business Network International) est un réseau gratuit où l'on participe sans engagement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le BNI coûte environ 1 500 euros par an avec des réunions hebdomadaires et un système de bouche à oreille structuré. Cependant, un client satisfait dans un BNI peut générer 5 à 10 recommandations par an, ce qui en fait souvent le meilleur ROI sur abonnement." },
      { type: "mcq", question: "Quelle stratégie permet de générer 30 à 40% des nouveaux clients chez les agences matures ?", options: JSON.stringify(["La publicité Facebook", "Les recommandations et le parrainage systématique après chaque mission", "Le SEO et le contenu de blog", "Les salons professionnels nationaux"]), correctAnswer: "Les recommandations et le parrainage systématique après chaque mission", explanation: "Demander systématiquement après chaque mission 'Connaissez-vous d'autres personnes qui pourraient bénéficier de la même chose ?' génère 30 à 40% des nouveaux clients des agences matures. C'est simple, direct et très efficace." },
      { type: "true_false", question: "L'approche directe en boutique est la stratégie la plus rapide pour décrocher un premier client local.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'approche directe peut donner des résultats en 0 à 14 jours, ce qui en fait la stratégie la plus rapide. Le BNI prend 1 à 3 mois et la CCI 2 à 4 mois. L'approche directe est la plus sous-utilisée car elle sort de la zone de confort." },
      { type: "mcq", question: "Vous avez livré un chatbot à un boulanger il y a 3 mois. Il est content du résultat. Comment transformez-vous ce client satisfait en machine à recommandations ?", options: JSON.stringify(["Vous attendez qu'il recommande spontanément vos services", "Vous lui demandez directement : 'Connaissez-vous d'autres commerçants qui pourraient bénéficier de la même chose ?' et vous lui envoyez un article utile chaque mois pour rester top of mind", "Vous lui proposez une réduction s'il vous envoie des clients", "Vous postez un avis Google en son nom"]), correctAnswer: "Vous lui demandez directement : 'Connaissez-vous d'autres commerçants qui pourraient bénéficier de la même chose ?' et vous lui envoyez un article utile chaque mois pour rester top of mind", explanation: "Demander systématiquement des recommandations après chaque mission génère 30-40% des nouveaux clients des agences matures. Couplé à un email utile mensuel (sans vendre), vous restez la première personne à laquelle on pense quand quelqu'un a besoin d'IA." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 11,
    title: "Ton système de prospection automatisé",
    slug: "systeme-prospection-automatise",
    duration: "25 min",
    description: "Construire un système de prospection simple et efficace : CRM léger, pipeline de vente, relances automatiques et KPIs pour savoir si ta prospection fonctionne.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Sans système, tu prospecteras en chaos" },
      { id: "6-2", type: "text", html: "<p>Tu peux avoir les meilleurs templates du monde, si tu n'as pas un système pour suivre qui tu as contacté, quand, avec quel résultat, et quand relancer — tu vas passer ton temps à oublier des prospects, doubler des contacts et rater des deals à portée de main.</p><p>La bonne nouvelle : tu n'as pas besoin d'un CRM sophistiqué à 200€/mois. <strong>Notion ou Airtable gratuits suffisent largement</strong> pour gérer jusqu'à 500 K€ de pipeline.</p>" },
      { id: "6-3", type: "callout", variant: "info", html: "<strong>Chiffre clé :</strong> 80% des deals se signent après 5 à 8 points de contact. La plupart des commerciaux abandonnent après 2. Un bon système de relance automatique, c'est l'équivalent d'embaucher un assistant commercial gratuit." },
      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Le pipeline de vente en 6 étapes" },
      { id: "6-6", type: "diagram", variant: "flow", nodes: [
        { id: "p1", label: "1. Identifié", description: "Contact trouvé, pas encore approché" },
        { id: "p2", label: "2. Contacté", description: "1er message envoyé (DM, email, en personne)" },
        { id: "p3", label: "3. Réponse reçue", description: "Le prospect a répondu positivement" },
        { id: "p4", label: "4. RDV planifié", description: "Appel découverte schedulé" },
        { id: "p5", label: "5. Proposition envoyée", description: "Devis ou proposition commerciale envoyée" },
        { id: "p6", label: "6. Signé / Perdu", description: "Deal conclu ou fermé (avec raison)" },
      ]},
      { id: "6-7", type: "text", html: "<p>Chaque contact dans ton CRM doit se trouver à une étape précise. Ta mission quotidienne : faire avancer chaque prospect d'une étape. Pas forcément vite — mais toujours en mouvement.</p>" },
      { id: "6-8", type: "separator", style: "line" },

      { id: "6-9", type: "heading", level: 2, text: "Structure du CRM Notion (template)" },
      { id: "6-10", type: "code", language: "text", filename: "CRM Notion — Structure de la base de données", code: `=== BASE DE DONNÉES : PROSPECTS ===

Colonnes à créer :

| Champ          | Type          | Valeurs possibles / notes                    |
|----------------|---------------|----------------------------------------------|
| Nom            | Texte         | Prénom + Nom du contact                      |
| Entreprise     | Texte         | Nom de l'entreprise                          |
| Poste          | Texte         | Directeur, Gérant, DRH, etc.                 |
| Secteur        | Select        | Retail, Immobilier, Santé, etc.              |
| Canal          | Select        | LinkedIn / Cold email / Réseau local         |
| Statut         | Select        | Identifié / Contacté / Réponse / RDV / Prop / Signé / Perdu |
| Date 1er contact | Date        | Automatique si possible                      |
| Prochain contact | Date        | Date de relance programmée                   |
| Valeur estimée | Nombre        | Montant estimé du deal en €                  |
| Notes          | Texte long    | Résumé de chaque interaction                 |
| Priorité       | Select        | Chaud / Tiède / Froid                        |
| Lien profil    | URL           | LinkedIn ou site web                         |

=== VUE TABLEAU DE BORD (filter + tri) ===

Vue 1 : "À relancer aujourd'hui"
  → Filter : Prochain contact = Aujourd'hui ou passé
  → Tri : Priorité (Chaud en premier)

Vue 2 : "Pipeline actif"
  → Filter : Statut ≠ Signé et ≠ Perdu
  → Grouper par : Statut

Vue 3 : "Deals signés ce mois"
  → Filter : Statut = Signé + Date 1er contact ce mois

=== ROUTINE QUOTIDIENNE (15 min) ===

Matin :
1. Ouvrir Vue 1 "À relancer aujourd'hui"
2. Envoyer les relances prévues
3. Mettre à jour les statuts

Soir :
1. Ajouter les nouveaux contacts du jour
2. Programmer les prochaines dates de relance
3. Mettre à jour les notes d'appels` },
      { id: "6-11", type: "separator", style: "dots" },

      { id: "6-12", type: "heading", level: 2, text: "Les relances automatiques avec Make ou n8n" },
      { id: "6-13", type: "steps", steps: [
        { title: "Relance LinkedIn automatique (Phantombuster)", description: "Configurer Phantombuster pour envoyer automatiquement des DMs de relance J+3 si pas de réponse. Limite : 10-20/jour pour rester dans les CGU LinkedIn." },
        { title: "Relance email automatique (Lemlist / Instantly)", description: "La séquence de 3 emails est déjà automatisée dans ces outils. Configure les délais une fois et laisse tourner." },
        { title: "Rappel de relance CRM (Notion + Make)", description: "Connecte Notion à Make. Quand la date 'Prochain contact' est atteinte, reçois une notification sur ton téléphone ou dans Slack." },
        { title: "Email de nurturing mensuel (Brevo)", description: "Une newsletter mensuelle envoyée à tous tes prospects 'Froids' avec un article utile. Automatisée, zéro effort, maintient la relation." },
      ]},
      { id: "6-14", type: "callout", variant: "tip", html: "<strong>Règle des relances :</strong> pour un prospect 'Chaud' (a répondu positivement), relance dans 48h. Pour un prospect 'Tiède' (pas de réponse), relance à J+4 et J+9. Après 3 tentatives sans réponse, classe en 'Froid' et planifie une relance dans 2 mois." },
      { id: "6-15", type: "separator", style: "line" },

      { id: "6-16", type: "heading", level: 2, text: "Les KPIs à suivre chaque semaine" },
      { id: "6-17", type: "comparison", headers: ["KPI", "Objectif débutant", "Objectif confirmé", "Comment le calculer"], rows: [
        { cells: ["Contacts approchés/semaine", "30+", "80+", "Nb de 1ers messages envoyés"] },
        { cells: ["Taux de réponse", "5-10%", "15-25%", "Réponses / contacts approchés"] },
        { cells: ["RDV par semaine", "1-2", "3-5", "Appels découverte planifiés"] },
        { cells: ["Taux de conversion RDV → Proposition", "40-60%", "60-80%", "Propositions / RDV tenus"] },
        { cells: ["Taux de closing", "20-30%", "35-50%", "Deals signés / Propositions envoyées"] },
        { cells: ["Valeur pipeline", "5-20K€", "30-80K€", "Somme valeur estimée des deals actifs"] },
      ]},
      { id: "6-18", type: "text", html: "<p>Si un KPI est en dessous des objectifs, voici où chercher le problème : <strong>taux de réponse faible</strong> → retravailler le message ou la cible. <strong>Peu de RDV malgré des réponses</strong> → retravailler l'appel à l'action. <strong>RDV mais pas de propositions</strong> → retravailler le script d'appel. <strong>Propositions mais pas de closes</strong> → retravailler le prix ou la gestion des objections.</p>" },

      { id: "6-19", type: "quiz-inline", question: "Quel est le taux de closing réaliste pour une agence IA débutante ?", options: [
        { id: "a", text: "5 à 10% des appels découverte" },
        { id: "b", text: "20 à 30% des propositions envoyées" },
        { id: "c", text: "80% des personnes contactées" },
      ], correctId: "b", explanation: "Un taux de closing de 20 à 30% sur les propositions envoyées est un objectif réaliste pour commencer. Ça signifie qu'envoyer 10 propositions bien ciblées te rapporte 2 à 3 clients. Avec l'expérience et les bons scripts, tu peux monter à 35-50%." },

      { id: "6-20", type: "separator", style: "dots" },
      { id: "6-21", type: "checklist", title: "Checklist — Ton système de prospection en place", items: [
        { id: "c1", text: "CRM Notion ou Airtable créé avec les colonnes du template" },
        { id: "c2", text: "Les 3 vues configurées (à relancer, pipeline actif, deals signés)" },
        { id: "c3", text: "Routine quotidienne de 15 min bloquée dans l'agenda" },
        { id: "c4", text: "Séquence cold email configurée sur Lemlist ou Instantly" },
        { id: "c5", text: "Tableau de KPIs hebdomadaires créé (peut être un Google Sheet simple)" },
        { id: "c6", text: "Premier bilan hebdomadaire programmé (vendredi matin, 30 min)" },
        { id: "c7", text: "Objectif mensuel défini en nombre de clients signés" },
      ]},
    ]),
    exercise: "<p><strong>Exercice final du module :</strong> Monte ton système complet cette semaine.</p><p>1. Duplique le template Notion CRM (tu trouveras le lien dans les ressources du module) et personnalise-le avec tes colonnes.<br>2. Importe tes 20 premiers prospects (ceux identifiés dans les leçons précédentes) dans le CRM avec leur statut actuel.<br>3. Crée ton tableau Google Sheet de KPIs avec les 6 métriques de la leçon. Remplis la colonne 'semaine 1' avec tes premiers chiffres (même si c'est tout à 0).<br>4. Programme ton premier bilan hebdomadaire dans ton calendrier : chaque vendredi à 9h, 30 minutes pour analyser tes chiffres et ajuster ta stratégie.<br><br><strong>Rappel :</strong> la prospection est un jeu de chiffres et de régularité. Les meilleurs ne sont pas plus talentueux — ils sont juste plus constants. 30 jours de discipline suffisent pour transformer ton pipeline.</p>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 6 étapes du pipeline de vente dans l'ordre ?", options: JSON.stringify(["Contacté, réponse, RDV, proposition, négociation, signé", "Identifié, contacté, réponse reçue, RDV planifié, proposition envoyée, signé/perdu", "Prospect, lead, opportunité, devis, closing, facture", "Email envoyé, relance, appel, démo, essai, contrat"]), correctAnswer: "Identifié, contacté, réponse reçue, RDV planifié, proposition envoyée, signé/perdu", explanation: "Le pipeline en 6 étapes est : Identifié (contact trouvé), Contacté (1er message envoyé), Réponse reçue (réponse positive), RDV planifié (appel découverte schedulé), Proposition envoyée (devis envoyé), Signé/Perdu (deal conclu ou fermé avec raison)." },
      { type: "true_false", question: "80% des deals se signent après 5 à 8 points de contact avec le prospect.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La plupart des commerciaux abandonnent après 2 points de contact, alors que 80% des deals se signent après 5 à 8 interactions. Un bon système de relance automatique est l'équivalent d'un assistant commercial gratuit." },
      { type: "mcq", question: "Quel est le taux de closing réaliste pour une agence IA débutante ?", options: JSON.stringify(["5 à 10% des contacts approchés", "20 à 30% des propositions envoyées", "80% des rendez-vous effectués", "100% si le script est bon"]), correctAnswer: "20 à 30% des propositions envoyées", explanation: "Un taux de closing de 20 à 30% sur les propositions envoyées est réaliste pour un débutant. Cela signifie que 10 propositions bien ciblées rapportent 2 à 3 clients. Avec l'expérience, on peut monter à 35-50%." },
      { type: "true_false", question: "Un CRM sophistiqué à 200 euros par mois est indispensable pour gérer sa prospection.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Notion ou Airtable en version gratuite suffisent largement pour gérer un pipeline jusqu'à 500 000 euros. L'important est d'avoir un système, pas un outil coûteux. Les colonnes essentielles sont : nom, entreprise, statut, date de prochain contact, valeur estimée et notes." },
      { type: "mcq", question: "Vous avez 15 prospects dans votre CRM Notion : 5 contactés sans réponse, 3 avec un RDV planifié, 4 avec une proposition envoyée, et 3 classés 'perdus'. Vendredi matin, vous faites votre bilan hebdomadaire. Quelle action prioritaire identifiez-vous ?", options: JSON.stringify(["Ajouter 50 nouveaux prospects car vous n'en avez pas assez", "Relancer les 4 propositions envoyées car c'est là que le closing est le plus proche, puis relancer les 5 sans réponse à J+4/J+9", "Recontacter les 3 perdus pour leur proposer une réduction", "Supprimer les prospects sans réponse pour nettoyer le CRM"]), correctAnswer: "Relancer les 4 propositions envoyées car c'est là que le closing est le plus proche, puis relancer les 5 sans réponse à J+4/J+9", explanation: "La priorité va toujours au bas du funnel : les propositions envoyées sont les plus proches du closing. Ensuite, les relances des prospects tièdes à J+4 et J+9. 80% des deals se signent après 5-8 points de contact. Un bon système de relance est votre meilleur commercial." },
    ],
  },

  // ─── LEÇON 6 : Closing & Objections ───
  {
    order: 6,
    module: 11,
    title: "Closer un deal : objections, n\u00e9gociation et signature",
    slug: "closer-deal-objections-negociation",
    duration: "25 min",
    description: "Comment g\u00e9rer les objections classiques des prospects, n\u00e9gocier sans brader et transformer un 'je r\u00e9fl\u00e9chis' en contrat sign\u00e9.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Pourquoi 70% des deals meurent apr\u00e8s la proposition" },
      { id: "7-2", type: "text", html: "<p>Tu as fait le plus dur : trouver le prospect, le qualifier, faire l'appel d\u00e9couverte, envoyer une proposition. Et l\u00e0\u2026 silence radio. Ou pire : <strong>\u00ab Je vais r\u00e9fl\u00e9chir \u00bb</strong>.</p><p>Ce n'est pas que ton offre est mauvaise. C'est que tu n'as pas structur\u00e9 ton closing. Le closing n'est pas une manipulation \u2014 c'est l'art de <strong>lever les derni\u00e8res incertitudes</strong> du prospect pour qu'il prenne une d\u00e9cision.</p>" },
      { id: "7-3", type: "callout", variant: "info", html: "<strong>R\u00e8gle d'or :</strong> Si le prospect dit \u00ab c'est trop cher \u00bb, il ne parle pas du prix. Il dit \u00ab je ne comprends pas encore la valeur \u00bb. Ton job n'est pas de baisser le prix, c'est de mieux expliquer le ROI." },
      { id: "7-4", type: "separator", style: "dots" },

      { id: "7-5", type: "heading", level: 2, text: "Les 5 objections que tu vas entendre (et comment y r\u00e9pondre)" },
      { id: "7-6", type: "comparison", headers: ["Objection", "R\u00e9ponse"], rows: [
        { cells: ["\u00ab C'est trop cher \u00bb", "Combien vous co\u00fbte le probl\u00e8me aujourd'hui ? Si mon chatbot vous fait gagner 20h/mois \u00e0 35\u20ac/h, c'est 700\u20ac/mois d'\u00e9conomie. Mon prix se rembourse en 6 semaines."] },
        { cells: ["\u00ab Je vais r\u00e9fl\u00e9chir \u00bb", "Bien s\u00fbr. Pour vous aider \u00e0 d\u00e9cider, qu'est-ce qui vous ferait dire oui aujourd'hui ? Y a-t-il un point que je n'ai pas assez clarifi\u00e9 ?"] },
        { cells: ["\u00ab J'ai d\u00e9j\u00e0 un prestataire \u00bb", "Parfait. Qu'est-ce qui pourrait \u00eatre am\u00e9lior\u00e9 dans ce que vous avez actuellement ? Je peux travailler en compl\u00e9ment, pas en remplacement."] },
        { cells: ["\u00ab L'IA c'est pas fiable \u00bb", "Je comprends. C'est pour \u00e7a qu'on met en place un syst\u00e8me de validation humaine. L'IA g\u00e8re 80% du volume, votre \u00e9quipe supervise les 20% critiques."] },
        { cells: ["\u00ab On peut commencer petit ? \u00bb", "Absolument. C'est m\u00eame ce que je recommande. On fait un projet pilote de 2 semaines, si les r\u00e9sultats sont l\u00e0, on passe \u00e0 l'\u00e9chelle."] },
      ]},
      { id: "7-7", type: "separator", style: "line" },

      { id: "7-8", type: "heading", level: 2, text: "La structure d'un appel de closing" },
      { id: "7-9", type: "steps", steps: [
        { title: "R\u00e9cap (2 min)", description: "R\u00e9sume le probl\u00e8me du client et ta solution. \u00ab Si j'ai bien compris, vous perdez X heures par semaine sur Y, et la solution qu'on propose c'est Z. C'est bien \u00e7a ? \u00bb" },
        { title: "Valider la valeur (3 min)", description: "Quantifie le ROI ensemble. \u00ab Combien d'heures votre \u00e9quipe passe sur cette t\u00e2che ? \u00c0 quel co\u00fbt horaire ? \u00bb Laisse le prospect calculer lui-m\u00eame." },
        { title: "Traiter les objections (5 min)", description: "Pose la question : \u00ab Qu'est-ce qui vous emp\u00eacherait de d\u00e9marrer ce mois-ci ? \u00bb. Traite chaque objection avec les r\u00e9ponses ci-dessus." },
        { title: "Proposer le next step (2 min)", description: "Ne demande pas \u00ab Alors on fait quoi ? \u00bb. Propose directement : \u00ab Je vous envoie le contrat ce soir, on d\u00e9marre lundi ? \u00bb" },
      ]},
      { id: "7-10", type: "callout", variant: "warning", html: "<strong>Erreur fatale :</strong> Ne jamais baisser ton prix sans retirer quelque chose. Si le client veut moins cher, propose un p\u00e9rim\u00e8tre r\u00e9duit. \u00ab Pour 2000\u20ac au lieu de 3000\u20ac, je fais le chatbot sans l'int\u00e9gration CRM. On l'ajoute en phase 2 si les r\u00e9sultats sont l\u00e0. \u00bb" },

      { id: "7-11", type: "heading", level: 2, text: "N\u00e9gocier sans brader" },
      { id: "7-12", type: "text", html: "<p>La n\u00e9gociation n'est pas un combat. C'est un \u00e9change o\u00f9 <strong>les deux parties doivent gagner</strong>. Voici les r\u00e8gles :</p><ul><li><strong>Jamais le premier \u00e0 proposer une r\u00e9duction.</strong> Attends que le client demande.</li><li><strong>Toujours \u00e9changer.</strong> Si tu baisses de 20%, retire 20% du scope.</li><li><strong>Ancre haut.</strong> Si tu veux vendre \u00e0 3000\u20ac, pr\u00e9sente d'abord l'option \u00e0 5000\u20ac.</li><li><strong>Le silence est ton alli\u00e9.</strong> Apr\u00e8s avoir annonc\u00e9 ton prix, tais-toi. Le premier qui parle perd.</li></ul>" },

      { id: "7-13", type: "checklist", title: "Checklist \u2014 Ton process de closing", items: [
        { id: "c1", text: "Liste des 5 objections pr\u00e9par\u00e9e avec tes r\u00e9ponses personnalis\u00e9es" },
        { id: "c2", text: "Template de proposition avec 2-3 options de prix (ancrage)" },
        { id: "c3", text: "Script d'appel closing r\u00e9p\u00e9t\u00e9 \u00e0 voix haute au moins une fois" },
        { id: "c4", text: "Contrat pr\u00eat \u00e0 envoyer dans l'heure qui suit le 'oui'" },
        { id: "c5", text: "Syst\u00e8me de relance post-proposition (J+2, J+5, J+10)" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> Prends tes 3 derni\u00e8res propositions envoy\u00e9es (ou imagine 3 sc\u00e9narios types). Pour chacune, \u00e9cris les 2 objections les plus probables et ta r\u00e9ponse. Ensuite, r\u00e9p\u00e8te ton script de closing \u00e0 voix haute \u2014 seul devant un miroir ou avec un ami. L'objectif : que \u00e7a sonne naturel, pas r\u00e9cit\u00e9.</p>",
    quiz: [
      { type: "mcq", question: "Un prospect dit 'c'est trop cher'. Quelle est la meilleure r\u00e9ponse ?", options: JSON.stringify(["Proposer imm\u00e9diatement une r\u00e9duction de 20%", "Quantifier le ROI pour montrer que le prix se rembourse rapidement", "Dire que c'est le prix du march\u00e9 et qu'il n'y a pas de n\u00e9gociation", "Proposer de travailler gratuitement pour prouver la valeur"]), correctAnswer: "Quantifier le ROI pour montrer que le prix se rembourse rapidement", explanation: "Quand un prospect dit 'c'est trop cher', il dit en r\u00e9alit\u00e9 'je ne comprends pas encore la valeur'. Votre job est de quantifier le ROI concr\u00e8tement, pas de baisser le prix." },
      { type: "true_false", question: "Lors d'une n\u00e9gociation, si vous baissez votre prix de 20%, vous devez retirer 20% du scope.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Ne jamais baisser le prix sans retirer quelque chose du p\u00e9rim\u00e8tre. Sinon vous \u00e9tablissez un pr\u00e9c\u00e9dent o\u00f9 le client sait qu'il peut toujours n\u00e9gocier." },
    ],
  },
];
