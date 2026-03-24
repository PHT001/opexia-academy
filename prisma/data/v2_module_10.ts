// ═══════════════════════════════════════════════════
// MODULE 10 — Automatisations IA pour entreprises
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_10_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 10,
    title: "Les outils d'automatisation (Make, Zapier — présentation rapide)",
    slug: "v2-outils-automatisation-make-zapier",
    duration: "20 min",
    description: "Découvre Make et Zapier, les deux plateformes leaders d'automatisation no-code. Comprends leurs différences, leurs tarifs et quand utiliser l'un plutôt que l'autre pour tes projets IA.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi automatiser avec l'IA ?" },
      { id: "1-2", type: "text", html: "<p>L'automatisation classique connecte des apps entre elles : quand un email arrive, crée une tâche dans Notion. C'est utile mais limité. L'<strong>automatisation IA</strong> ajoute une couche d'intelligence : quand un email arrive, l'IA le lit, détermine s'il est urgent, extrait les informations clés, rédige un brouillon de réponse et classe le mail automatiquement.</p><p>Cette combinaison automatisation + IA est ce qui te permet de proposer des solutions à <strong>haute valeur ajoutée</strong> aux entreprises. Un garage qui automatise ses devis, une agence immo qui automatise sa prospection, un cabinet comptable qui traite ses factures automatiquement — ce sont des projets que tu peux vendre entre 2 000€ et 10 000€.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> Automatise d'abord les tâches répétitives à faible valeur ajoutée. Le temps libéré pour ton client = la valeur que tu crées. Si tu fais gagner 2h/jour à un employé qui coûte 25€/h, tu crées 1 000€/mois de valeur. Facture en conséquence." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Make vs Zapier : le comparatif" },
      { id: "1-6", type: "comparison", headers: ["Critère", "Make (ex-Integromat)", "Zapier"], rows: [
        { cells: ["Interface", "Visuelle, drag & drop, flow complexes faciles", "Linéaire, étape par étape, simple"] },
        { cells: ["Flexibilité", "Très flexible, routeurs, itérateurs, gestion d'erreurs avancée", "Plus limité, adapté aux workflows simples"] },
        { cells: ["Prix", "10€/mois pour 10 000 opérations", "20$/mois pour 750 tâches"] },
        { cells: ["Modules IA", "Module HTTP pour appeler n'importe quelle API IA, modules OpenAI natifs", "Actions IA intégrées, mais moins de contrôle"] },
        { cells: ["Courbe d'apprentissage", "Moyenne — interface puissante mais plus complexe", "Facile — interface intuitive, prise en main rapide"] },
        { cells: ["Recommandé pour", "Projets complexes, clients exigeants, workflows multi-branches", "Automatisations simples, prototypage rapide"] },
      ]},
      { id: "1-7", type: "callout", variant: "info", html: "<strong>Notre recommandation :</strong> Utilise Make pour 90% de tes projets clients. Il est moins cher, plus flexible et gère mieux les workflows complexes. Garde Zapier pour le prototypage rapide ou quand le client l'utilise déjà." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Les concepts clés de Make" },
      { id: "1-10", type: "steps", steps: [
        { title: "Scénario", description: "Un scénario est un workflow complet. Il démarre par un trigger (déclencheur) et enchaîne des actions. Exemple : trigger = nouveau email reçu → action 1 = analyser avec GPT → action 2 = classer dans Google Sheets." },
        { title: "Module", description: "Chaque brique du scénario est un module. Il existe des modules pour Gmail, Google Sheets, Slack, OpenAI, HTTP (pour appeler n'importe quelle API), etc. Tu les connectes entre eux par drag & drop." },
        { title: "Routeur", description: "Le routeur permet de créer des branches conditionnelles. Si le mail est urgent → branche 1 (notification Slack). Si le mail est une facture → branche 2 (extraction de données). Sinon → branche 3 (archivage)." },
        { title: "Itérateur / Agrégateur", description: "L'itérateur découpe un tableau en éléments individuels (pour traiter chaque ligne d'un CSV par exemple). L'agrégateur fait l'inverse : il regroupe plusieurs éléments en un seul (pour créer un rapport récapitulatif)." },
        { title: "Gestion d'erreurs", description: "Make permet d'ajouter des gestionnaires d'erreurs sur chaque module. Si un appel API échoue, tu peux : réessayer, ignorer, déclencher une action alternative ou envoyer une alerte." },
      ]},

      { id: "1-11", type: "text", html: "<p>Avec ces 5 concepts, tu peux construire des automatisations de n'importe quelle complexité. Dans les leçons suivantes, on va les appliquer à des cas concrets : garage, agence immo et traitement de factures.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Make est plus flexible et moins cher que Zapier pour les projets complexes" },
        { id: "c2", text: "Les 5 concepts clés : scénario, module, routeur, itérateur, gestion d'erreurs" },
        { id: "c3", text: "L'automatisation IA ajoute une couche d'intelligence aux workflows classiques" },
        { id: "c4", text: "La valeur se mesure en temps gagné pour le client" },
      ]},
    ]),
    exercise: "<h3>Exercice : Découvre Make</h3><p>Crée un compte gratuit sur Make (make.com) et construis ton premier scénario :</p><ol><li>Trigger : réception d'un email sur Gmail (ou un webhook manuel)</li><li>Action 1 : envoie le contenu de l'email à l'API OpenAI avec le prompt 'Résume cet email en une phrase'</li><li>Action 2 : envoie le résumé sur un channel Slack ou dans un Google Sheet</li><li>Teste avec 3 emails différents et vérifie les résumés</li></ol><p>Ce premier scénario te familiarise avec l'interface et le concept de modules connectés.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal de Make par rapport à Zapier ?", options: JSON.stringify(["Make est plus récent", "Make est plus flexible et moins cher pour les workflows complexes", "Make a une meilleure application mobile", "Make est le seul à supporter l'IA"]), correctAnswer: "Make est plus flexible et moins cher pour les workflows complexes", explanation: "Make offre des routeurs, itérateurs et gestion d'erreurs avancée pour un prix inférieur (10€/mois pour 10 000 opérations vs 20$/mois pour 750 tâches chez Zapier)." },
      { type: "true_false", question: "Un routeur dans Make permet de créer des branches conditionnelles dans un workflow.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le routeur est un composant clé de Make qui permet de diriger le flux selon des conditions : si X alors branche A, sinon branche B. Indispensable pour les workflows complexes." },
      { type: "mcq", question: "Qu'est-ce qu'un scénario dans Make ?", options: JSON.stringify(["Un document de spécification", "Un workflow complet avec trigger et actions", "Un template de présentation", "Un script Python"]), correctAnswer: "Un workflow complet avec trigger et actions", explanation: "Un scénario est l'unité de base dans Make : il commence par un trigger (déclencheur) et enchaîne des actions (modules) connectées entre elles." },
      { type: "true_false", question: "L'automatisation IA se limite à connecter deux applications entre elles.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'automatisation IA va plus loin que la simple connexion d'apps. Elle ajoute une couche d'intelligence : analyse de contenu, extraction de données, classification, génération de réponses, etc." },
      { type: "mcq", question: "Quel composant Make utilise-t-on pour traiter chaque ligne d'un CSV individuellement ?", options: JSON.stringify(["Un routeur", "Un itérateur", "Un agrégateur", "Un webhook"]), correctAnswer: "Un itérateur", explanation: "L'itérateur découpe un tableau ou une collection en éléments individuels pour les traiter un par un. C'est l'outil idéal pour traiter chaque ligne d'un fichier CSV." },
      { type: "mcq", question: "Si tu fais gagner 2h/jour à un employé qui coûte 25€/h, quelle valeur mensuelle crées-tu ?", options: JSON.stringify(["250€/mois", "500€/mois", "1 000€/mois", "2 500€/mois"]), correctAnswer: "1 000€/mois", explanation: "2h/jour x 25€/h x 20 jours ouvrés = 1 000€/mois de valeur créée. C'est cette valeur qui justifie ton tarif auprès du client." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 10,
    title: "Cas concret : automatiser la gestion d'un garage",
    slug: "v2-automatiser-gestion-garage",
    duration: "30 min",
    description: "Construis une automatisation complète pour un garage automobile : devis automatiques basés sur les demandes clients, relances par SMS, suivi des réparations et facturation. Un cas concret de A à Z.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le problème du garage classique" },
      { id: "2-2", type: "text", html: "<p>Un garage automobile typique gère entre 15 et 30 véhicules par semaine. Le gérant passe un temps considérable sur des tâches administratives : répondre aux demandes de devis par email ou téléphone, relancer les clients qui n'ont pas confirmé, suivre l'avancement des réparations, envoyer les factures.</p><p>Résultat : le gérant passe <strong>2 à 3 heures par jour</strong> sur de l'administratif au lieu de se concentrer sur son métier. C'est exactement le type de problème que l'automatisation IA résout — et que tu peux vendre entre 3 000€ et 6 000€ en setup.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "<strong>Profil client :</strong> Garage AutoFix, 3 mécaniciens, 1 gérant qui fait aussi secrétaire. 20 véhicules/semaine. Le gérant veut se concentrer sur la gestion technique et déléguer l'admin." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Architecture de l'automatisation" },
      { id: "2-6", type: "steps", steps: [
        { title: "Formulaire de demande en ligne", description: "Crée un formulaire Tally ou Typeform intégré au site du garage. Le client renseigne : marque, modèle, année, kilométrage, description du problème (avec possibilité de joindre une photo). La soumission déclenche le scénario Make." },
        { title: "Analyse IA de la demande", description: "Le contenu du formulaire est envoyé à GPT-4o avec un prompt spécialisé : 'Tu es un expert automobile. Analyse cette demande et estime les réparations nécessaires, les pièces potentielles et une fourchette de prix.' L'IA retourne un pré-diagnostic structuré." },
        { title: "Génération automatique du devis", description: "À partir du pré-diagnostic IA, un devis PDF est généré automatiquement via un template (Google Docs ou API de génération de PDF). Le devis inclut : diagnostic, interventions prévues, estimation de prix, délai estimé." },
        { title: "Envoi au client + suivi", description: "Le devis est envoyé par email au client. En parallèle, une ligne est créée dans un Google Sheet de suivi avec le statut 'Devis envoyé'. Si le client ne répond pas sous 48h, un SMS de relance est envoyé automatiquement via Twilio." },
        { title: "Gestion du cycle complet", description: "Quand le client accepte (réponse email ou clic sur un lien), le statut passe à 'Confirmé', un créneau est proposé, et un rappel SMS est envoyé la veille du RDV. Après la réparation, la facture est générée et envoyée." },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le scénario Make en détail" },
      { id: "2-9", type: "text", html: "<p>Le scénario principal se décompose en 3 branches après le trigger (soumission du formulaire) :</p><ul><li><strong>Branche 1 — Analyse + Devis :</strong> Webhook → Module OpenAI (analyse) → Module Google Docs (génération devis) → Module Gmail (envoi devis)</li><li><strong>Branche 2 — Suivi :</strong> Webhook → Module Google Sheets (ajout ligne de suivi) → Module Twilio (programmation relance 48h)</li><li><strong>Branche 3 — Notification interne :</strong> Webhook → Module Slack ou SMS (notification au gérant avec résumé de la demande)</li></ul><p>Utilise un routeur après le trigger pour envoyer les données dans les 3 branches simultanément.</p>" },
      { id: "2-10", type: "callout", variant: "tip", html: "<strong>Prompt IA pour le diagnostic :</strong> Sois précis dans ton prompt. Inclus une liste de réparations courantes avec des fourchettes de prix que le gérant t'a fournies. L'IA sera plus précise avec un contexte métier détaillé." },

      { id: "2-11", type: "comparison", headers: ["Tâche manuelle", "Temps avant", "Temps après automatisation"], rows: [
        { cells: ["Répondre à une demande de devis", "15-20 min", "0 min (automatique)"] },
        { cells: ["Relancer un client sans réponse", "5 min par relance", "0 min (SMS automatique)"] },
        { cells: ["Mettre à jour le suivi", "5 min par véhicule", "0 min (automatique)"] },
        { cells: ["Envoyer la facture", "10 min", "0 min (automatique)"] },
      ]},

      { id: "2-12", type: "checklist", title: "Composants de l'automatisation", items: [
        { id: "c1", text: "Formulaire de demande (Tally/Typeform)" },
        { id: "c2", text: "Scénario Make avec routeur et 3 branches" },
        { id: "c3", text: "Module OpenAI pour le pré-diagnostic IA" },
        { id: "c4", text: "Génération PDF du devis (Google Docs API)" },
        { id: "c5", text: "Envoi email + SMS de relance (Gmail + Twilio)" },
        { id: "c6", text: "Google Sheet de suivi centralisé" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis l'automatisation du garage</h3><p>Reproduis le scénario Make complet :</p><ol><li>Crée le formulaire de demande avec Tally (gratuit) — inclus les champs marque, modèle, année, km, description</li><li>Crée un scénario Make déclenché par le webhook du formulaire</li><li>Ajoute un module OpenAI qui analyse la demande et génère un pré-diagnostic</li><li>Crée un Google Sheet de suivi et connecte-le</li><li>Teste avec 3 demandes fictives : vidange simple, bruit moteur suspect, pneus à changer</li></ol><p>Tu n'as pas besoin de la partie PDF/facture pour cet exercice — concentre-toi sur le flux principal.</p>",
    quiz: [
      { type: "mcq", question: "Combien de temps un gérant de garage passe-t-il typiquement sur l'administratif par jour ?", options: JSON.stringify(["30 minutes", "1 heure", "2 à 3 heures", "6 heures"]), correctAnswer: "2 à 3 heures", explanation: "Un gérant de petit garage passe en moyenne 2 à 3 heures par jour sur les devis, relances, suivi et facturation — du temps qu'il pourrait consacrer à la gestion technique." },
      { type: "true_false", question: "Le pré-diagnostic IA remplace complètement l'avis du mécanicien.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le pré-diagnostic IA est une estimation pour accélérer la rédaction du devis. Le mécanicien reste indispensable pour le diagnostic technique réel une fois le véhicule sur le pont." },
      { type: "mcq", question: "Après combien de temps sans réponse un SMS de relance est-il envoyé au client ?", options: JSON.stringify(["1 heure", "24 heures", "48 heures", "1 semaine"]), correctAnswer: "48 heures", explanation: "Le workflow programme un SMS de relance automatique 48h après l'envoi du devis si le client n'a pas répondu. C'est un délai raisonnable qui montre du suivi sans être intrusif." },
      { type: "mcq", question: "Combien de branches le routeur Make crée-t-il dans ce scénario ?", options: JSON.stringify(["1 branche", "2 branches", "3 branches", "5 branches"]), correctAnswer: "3 branches", explanation: "Le routeur crée 3 branches simultanées : analyse + devis, suivi dans Google Sheets, et notification interne au gérant. Les 3 s'exécutent en parallèle." },
      { type: "true_false", question: "Cette automatisation peut se vendre entre 3 000€ et 6 000€ en setup.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Une automatisation complète (formulaire, IA, devis, relance, suivi) pour un garage représente une vraie valeur métier. 3 000€ à 6 000€ en setup plus un abonnement mensuel est un tarif justifié." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 10,
    title: "Cas concret : pipeline commercial automatisé pour une agence immo",
    slug: "v2-pipeline-commercial-agence-immo",
    duration: "30 min",
    description: "Automatise le pipeline commercial d'une agence immobilière : capture de leads, qualification automatique par IA, matching avec les biens disponibles, relance personnalisée et reporting.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le défi commercial d'une agence immobilière" },
      { id: "3-2", type: "text", html: "<p>Une agence immobilière gère des dizaines de leads par semaine : appels entrants, formulaires web, demandes sur les portails (SeLoger, LeBonCoin). Le problème ? <strong>60% des leads ne sont jamais recontactés dans les 24h</strong>, et la moitié finissent par acheter chez un concurrent plus réactif.</p><p>L'automatisation IA résout ce problème en traitant chaque lead instantanément : qualification, matching avec les biens disponibles, envoi d'une sélection personnalisée et programmation de la relance. L'agent immobilier ne gère plus que les leads qualifiés et les visites.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "<strong>Argument de vente clé :</strong> Un lead immobilier non traité dans les 5 premières minutes a 10x moins de chances de convertir. Ton automatisation traite chaque lead en moins de 30 secondes." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Architecture du pipeline automatisé" },
      { id: "3-6", type: "steps", steps: [
        { title: "Capture multi-canal", description: "Les leads arrivent de plusieurs sources : formulaire du site web (webhook), email de contact (Gmail trigger), notification des portails (parsing email). Chaque source alimente le même scénario Make." },
        { title: "Qualification IA automatique", description: "L'IA analyse la demande et extrait : type de bien recherché (maison/appart), budget, localisation souhaitée, surface minimum, nombre de chambres, critères spéciaux (jardin, parking, balcon). Elle attribue un score de 1 à 10." },
        { title: "Matching avec le catalogue", description: "Le scénario interroge la base de biens (Google Sheets ou Airtable) et applique un algorithme de matching : quels biens correspondent aux critères du lead ? L'IA classe les résultats par pertinence." },
        { title: "Envoi personnalisé", description: "Un email personnalisé est généré par l'IA avec la sélection de biens, des descriptions adaptées au profil du client et un lien pour réserver une visite. Le ton est chaleureux et professionnel." },
        { title: "Suivi et relance", description: "Si le lead ne répond pas sous 24h, un SMS est envoyé. Sous 72h, un deuxième email avec de nouveaux biens. Sous 7 jours, l'agent est notifié pour un appel personnel. Tout est tracké dans un CRM (Airtable)." },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Le prompt de qualification IA" },
      { id: "3-9", type: "text", html: "<p>Le prompt de qualification est la pièce maîtresse du système. Il doit extraire des données structurées à partir d'un message libre du client. Voici la structure recommandée :</p><p>Le prompt demande à l'IA de retourner un JSON avec les champs : <code>type_bien</code>, <code>budget_min</code>, <code>budget_max</code>, <code>localisation</code>, <code>surface_min</code>, <code>chambres</code>, <code>criteres_speciaux</code>, <code>urgence</code> (1-10), <code>score_qualification</code> (1-10). Si une information manque, le champ est null et sera demandé dans le premier email de réponse.</p>" },
      { id: "3-10", type: "callout", variant: "warning", html: "<strong>Piège courant :</strong> Ne demande pas trop d'infos dans le premier email de réponse. 2-3 questions maximum. Un email avec 10 questions fait fuir le prospect. L'IA doit prioriser les questions par importance." },

      { id: "3-11", type: "comparison", headers: ["Étape du pipeline", "Sans automatisation", "Avec automatisation IA"], rows: [
        { cells: ["Temps de réponse au lead", "2-24 heures", "< 30 secondes"] },
        { cells: ["Qualification du lead", "Manuelle, subjective", "Score automatique basé sur les données"] },
        { cells: ["Matching avec les biens", "De mémoire ou recherche manuelle", "Algorithme de matching automatique"] },
        { cells: ["Suivi et relance", "Oublié dans 50% des cas", "Automatique, 100% de suivi"] },
      ]},

      { id: "3-12", type: "checklist", title: "Composants du pipeline", items: [
        { id: "c1", text: "Capture multi-canal (formulaire + email + portails)" },
        { id: "c2", text: "Qualification IA avec score et extraction de critères" },
        { id: "c3", text: "Base de biens dans Airtable/Google Sheets" },
        { id: "c4", text: "Algorithme de matching IA" },
        { id: "c5", text: "Email personnalisé généré par IA" },
        { id: "c6", text: "Séquence de relance automatisée (email + SMS)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis le pipeline immo</h3><p>Crée une version simplifiée du pipeline :</p><ol><li>Crée une base de 10 biens fictifs dans Google Sheets (type, prix, ville, surface, chambres, description)</li><li>Crée un formulaire de contact prospect avec les champs essentiels</li><li>Dans Make, connecte le formulaire → module OpenAI (qualification + matching) → envoi email personnalisé</li><li>Teste avec 3 profils différents : famille cherchant une maison, étudiant cherchant un studio, investisseur cherchant un T2</li></ol>",
    quiz: [
      { type: "mcq", question: "Quel pourcentage de leads immobiliers ne sont jamais recontactés dans les 24h ?", options: JSON.stringify(["20%", "40%", "60%", "90%"]), correctAnswer: "60%", explanation: "60% des leads immobiliers ne sont jamais recontactés dans les 24 premières heures, ce qui représente une perte commerciale énorme pour les agences." },
      { type: "true_false", question: "Un lead immobilier traité dans les 5 premières minutes a 10x plus de chances de convertir.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La réactivité est cruciale en immobilier. Un lead traité dans les 5 premières minutes a statistiquement 10 fois plus de chances de devenir client qu'un lead traité après 1 heure." },
      { type: "mcq", question: "Quel format l'IA doit-elle retourner pour la qualification ?", options: JSON.stringify(["Du texte libre", "Un JSON structuré avec les critères", "Un fichier PDF", "Un tableau HTML"]), correctAnswer: "Un JSON structuré avec les critères", explanation: "L'IA retourne un JSON structuré (type_bien, budget, localisation, etc.) pour que les données soient exploitables par les étapes suivantes du workflow (matching, CRM)." },
      { type: "mcq", question: "Combien de questions maximum dans le premier email de réponse au prospect ?", options: JSON.stringify(["1 question", "2-3 questions", "5-7 questions", "10+ questions"]), correctAnswer: "2-3 questions", explanation: "Trop de questions dans le premier email fait fuir le prospect. 2-3 questions ciblées suffisent pour compléter les informations manquantes sans être intrusif." },
      { type: "true_false", question: "Le matching avec les biens se fait manuellement par l'agent immobilier.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le matching est automatisé : l'IA compare les critères du lead avec la base de biens et classe les résultats par pertinence. L'agent n'intervient que pour les visites." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 10,
    title: "Cas concret : traitement automatique de factures et documents",
    slug: "v2-traitement-automatique-factures-documents",
    duration: "30 min",
    description: "Automatise le traitement de factures et documents : extraction de données par OCR + IA, classification automatique, saisie dans un tableur et alertes. Le cas d'usage le plus demandé par les PME.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi le traitement de documents est un marché en or" },
      { id: "4-2", type: "text", html: "<p>Chaque entreprise traite des documents : factures, bons de commande, contrats, devis. En France, une PME moyenne traite entre <strong>200 et 500 factures par mois</strong>. Chaque facture nécessite : ouverture, lecture, saisie des données (fournisseur, montant, date, TVA), classement et archivage. Temps moyen : 3-5 minutes par facture.</p><p>Avec l'IA, ce processus tombe à <strong>0 minute de travail humain</strong>. La facture arrive par email, l'IA l'analyse, extrait les données, les saisit dans le tableur comptable et classe le document. L'humain n'intervient que pour valider les cas ambigus.</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>Le calcul qui vend :</strong> 300 factures/mois x 4 min = 20h/mois de saisie. À 25€/h, c'est 500€/mois de coût. Ton automatisation à 200€/mois se vend toute seule." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "L'architecture du traitement automatisé" },
      { id: "4-6", type: "steps", steps: [
        { title: "Réception du document", description: "Le trigger est un email entrant (Gmail) avec pièce jointe, ou un upload dans un dossier Google Drive/Dropbox. Make détecte le nouveau fichier et lance le traitement." },
        { title: "OCR et extraction", description: "Si le document est un scan ou une image, l'OCR (via l'API Vision de GPT-4o ou Google Document AI) convertit l'image en texte. Puis l'IA extrait les données structurées : fournisseur, numéro de facture, date, montant HT, TVA, montant TTC." },
        { title: "Classification automatique", description: "L'IA classe le document : facture d'achat, note de frais, avoir, bon de commande, contrat. Elle détermine aussi la catégorie comptable (fournitures, services, loyer, etc.)." },
        { title: "Saisie automatique", description: "Les données extraites sont insérées dans un Google Sheet structuré (ou un logiciel comptable via API). Chaque ligne contient toutes les informations de la facture, prêtes pour le comptable." },
        { title: "Archivage et alertes", description: "Le document original est renommé selon une convention (YYYY-MM-DD_fournisseur_montant.pdf) et déplacé dans le bon dossier. Si une facture dépasse un seuil ou si l'IA n'est pas sûre d'un montant, une alerte est envoyée." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Le prompt d'extraction IA" },
      { id: "4-9", type: "text", html: "<p>L'extraction de données de facture repose sur un prompt précis. L'IA reçoit le texte du document (après OCR si nécessaire) et doit retourner un JSON structuré. Les champs à extraire sont : <code>fournisseur</code>, <code>numero_facture</code>, <code>date_facture</code>, <code>date_echeance</code>, <code>montant_ht</code>, <code>taux_tva</code>, <code>montant_tva</code>, <code>montant_ttc</code>, <code>categorie</code>, <code>confiance</code> (score de 0 à 1).</p><p>Le champ <code>confiance</code> est crucial : si l'IA retourne un score inférieur à 0.8, le document est flaggé pour vérification humaine. Cela permet d'automatiser 90% des factures tout en gardant un contrôle qualité sur les cas difficiles (scans de mauvaise qualité, factures manuscrites, formats inhabituels).</p>" },
      { id: "4-10", type: "comparison", headers: ["Type de document", "Taux de réussite OCR+IA", "Action si score < 0.8"], rows: [
        { cells: ["Facture PDF numérique", "98%+ de précision", "Rare — vérification rapide"] },
        { cells: ["Facture scannée (bonne qualité)", "92-95% de précision", "Vérification des montants"] },
        { cells: ["Facture scannée (mauvaise qualité)", "75-85% de précision", "Vérification complète obligatoire"] },
        { cells: ["Facture manuscrite", "60-70% de précision", "Saisie manuelle recommandée"] },
      ]},
      { id: "4-11", type: "callout", variant: "warning", html: "<strong>Ne promets pas 100% de précision.</strong> Même les meilleurs systèmes OCR+IA ont des limites. Positionne ton offre comme '90% d'automatisation avec contrôle qualité intégré'. Le client comprend et apprécie l'honnêteté." },

      { id: "4-12", type: "checklist", title: "Composants du système", items: [
        { id: "c1", text: "Trigger : email avec PJ ou upload dans Drive" },
        { id: "c2", text: "OCR via GPT-4o Vision ou Google Document AI" },
        { id: "c3", text: "Extraction IA avec score de confiance" },
        { id: "c4", text: "Classification automatique par catégorie" },
        { id: "c5", text: "Saisie dans Google Sheets / logiciel comptable" },
        { id: "c6", text: "Archivage avec renommage automatique" },
        { id: "c7", text: "Alertes pour les cas de faible confiance" },
      ]},
    ]),
    exercise: "<h3>Exercice : Automatise le traitement de 5 factures</h3><p>Construis le workflow complet :</p><ol><li>Trouve ou crée 5 factures fictives en PDF (utilise des générateurs de factures gratuits en ligne)</li><li>Crée un scénario Make : trigger email → module OpenAI (extraction des données) → Google Sheets (saisie)</li><li>Pour le prompt IA, demande un retour en JSON avec les champs : fournisseur, numéro, date, montant_ht, tva, montant_ttc, confiance</li><li>Envoie les 5 factures par email et vérifie que les données extraites sont correctes dans le Sheet</li><li>Note le taux de précision sur tes 5 factures</li></ol>",
    quiz: [
      { type: "mcq", question: "Combien de factures une PME moyenne traite-t-elle par mois ?", options: JSON.stringify(["10-20", "50-100", "200-500", "1 000+"]), correctAnswer: "200-500", explanation: "Une PME française moyenne traite entre 200 et 500 factures par mois, ce qui représente un volume considérable de saisie manuelle." },
      { type: "true_false", question: "GPT-4o Vision peut directement analyser une image de facture sans OCR séparé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "GPT-4o Vision est multimodal : il peut analyser directement des images, y compris des factures scannées, sans avoir besoin d'une étape OCR séparée." },
      { type: "mcq", question: "En dessous de quel score de confiance un document doit-il être vérifié par un humain ?", options: JSON.stringify(["0.5", "0.6", "0.8", "0.95"]), correctAnswer: "0.8", explanation: "Un score de confiance inférieur à 0.8 (80%) déclenche un flag pour vérification humaine. Cela permet d'automatiser 90% des cas tout en gardant un contrôle qualité." },
      { type: "mcq", question: "Quel est le taux de réussite typique de l'OCR+IA sur une facture PDF numérique ?", options: JSON.stringify(["60-70%", "75-85%", "92-95%", "98%+"]), correctAnswer: "98%+", explanation: "Les factures PDF numériques (non scannées) sont les plus faciles à traiter car le texte est directement accessible. Le taux de réussite dépasse 98%." },
      { type: "true_false", question: "Il faut promettre 100% de précision au client pour vendre cette automatisation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Promettre 100% est irréaliste et risqué. Positionne ton offre comme '90% d'automatisation avec contrôle qualité intégré'. L'honnêteté inspire confiance et évite les déceptions." },
      { type: "mcq", question: "Comment le document est-il renommé après traitement ?", options: JSON.stringify(["Il garde son nom original", "YYYY-MM-DD_fournisseur_montant.pdf", "facture_001.pdf", "Un nom aléatoire"]), correctAnswer: "YYYY-MM-DD_fournisseur_montant.pdf", explanation: "La convention YYYY-MM-DD_fournisseur_montant.pdf permet un classement chronologique automatique et une recherche facile dans l'explorateur de fichiers." },
    ],
  },
];
