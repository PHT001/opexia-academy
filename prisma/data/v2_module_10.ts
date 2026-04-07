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
    title: "Les outils d'automatisation : API Routes, cron jobs et scripts",
    slug: "v2-outils-automatisation-api-routes-cron-scripts",
    duration: "20 min",
    description: "Découvre comment automatiser avec du code via Claude Code : API Routes Next.js, cron jobs, webhooks et scripts. Comprends les différentes approches et quand utiliser chacune pour tes projets IA.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Pourquoi automatiser avec l'IA et du code ?" },
      { id: "1-2", type: "text", html: "<p>L'automatisation classique connecte des apps entre elles : quand un email arrive, crée une tâche dans Notion. C'est utile mais limité. L'<strong>automatisation IA par le code</strong> ajoute une couche d'intelligence et de contrôle total : quand un email arrive, ton script le lit, détermine s'il est urgent, extrait les informations clés, rédige un brouillon de réponse et classe le mail automatiquement.</p><p>Avec Claude Code et Next.js, tu peux coder ces automatisations toi-même, sans dépendre d'outils no-code. Un garage qui automatise ses devis, une agence immo qui automatise sa prospection, un cabinet comptable qui traite ses factures automatiquement — ce sont des projets que tu peux vendre entre 2 000€ et 10 000€.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "<strong>Règle d'or :</strong> Automatise d'abord les tâches répétitives à faible valeur ajoutée. Le temps libéré pour ton client = la valeur que tu crées. Si tu fais gagner 2h/jour à un employé qui coûte 25€/h, tu crées 1 000€/mois de valeur. Facture en conséquence." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 3 approches d'automatisation par le code" },
      { id: "1-6", type: "comparison", headers: ["Critère", "API Route Next.js", "Cron job / tâche planifiée", "Script autonome"], rows: [
        { cells: ["Déclenchement", "Requête HTTP (webhook, formulaire, appel externe)", "Planifié (toutes les heures, tous les jours, etc.)", "Manuel ou déclenché par un événement système"] },
        { cells: ["Cas d'usage", "Réagir à un événement en temps réel (soumission de formulaire, webhook)", "Tâches récurrentes (vérifier les emails, générer des rapports)", "Traitement batch, migration de données, tâches ponctuelles"] },
        { cells: ["Hébergement", "Vercel, Railway, VPS — déployé avec ton app Next.js", "Vercel Cron, GitHub Actions, crontab sur VPS", "Local ou serveur, exécuté à la demande"] },
        { cells: ["Complexité", "Faible — une fonction dans app/api/", "Faible — une route API + configuration cron", "Variable — dépend du traitement"] },
        { cells: ["Avantage clé", "Temps réel, intégré à ton app, accès à ta base de données", "Fiable, automatique, pas besoin d'intervention", "Flexible, pas de contrainte de temps d'exécution"] },
      ]},
      { id: "1-7", type: "callout", variant: "info", html: "<strong>Notre recommandation :</strong> Utilise les API Routes Next.js pour 90% de tes projets clients. Elles sont intégrées à ton app, faciles à déployer et permettent de gérer webhooks, formulaires et appels IA. Ajoute des cron jobs pour les tâches récurrentes." },
      { id: "1-8", type: "separator", style: "line" },

      { id: "1-9", type: "heading", level: 2, text: "Les concepts clés de l'automatisation par le code" },
      { id: "1-10", type: "steps", steps: [
        { title: "API Route (le point d'entrée)", description: "Une API Route est un endpoint HTTP dans ton app Next.js. Elle reçoit des requêtes et exécute du code. Exemple : POST /api/process-email reçoit un webhook Gmail → analyse avec GPT → enregistre dans la base de données." },
        { title: "Webhook (le déclencheur)", description: "Un webhook est une notification HTTP envoyée par un service externe quand un événement se produit. Gmail, Stripe, Typeform, etc. peuvent envoyer des webhooks vers ton API Route pour déclencher ton automatisation." },
        { title: "Logique conditionnelle (le routage)", description: "Dans ton code, les conditions if/else remplacent les routeurs visuels. Si le mail est urgent → notification Discord ou email d'alerte. Si le mail est une facture → extraction de données. Sinon → archivage. Tu as un contrôle total sur la logique." },
        { title: "Boucles et traitement par lot", description: "Les boucles for/map dans ton script permettent de traiter des collections : chaque ligne d'un CSV, chaque facture d'un dossier, chaque lead d'une liste. Avec async/await, tu gères facilement le traitement parallèle." },
        { title: "Gestion d'erreurs (try/catch)", description: "Le try/catch te permet de gérer les erreurs à chaque étape. Si un appel API échoue, tu peux : réessayer avec un retry, logger l'erreur, déclencher une action alternative ou envoyer une alerte." },
      ]},

      { id: "1-11", type: "text", html: "<p>Avec ces 5 concepts, tu peux construire des automatisations de n'importe quelle complexité. Claude Code t'aide à écrire le code rapidement. Dans les leçons suivantes, on va les appliquer à des cas concrets : garage, agence immo et traitement de factures.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Les API Routes Next.js sont le moyen le plus flexible pour créer des automatisations" },
        { id: "c2", text: "Les 5 concepts clés : API Route, webhook, logique conditionnelle, boucles, gestion d'erreurs" },
        { id: "c3", text: "L'automatisation IA par le code donne un contrôle total sur la logique et les données" },
        { id: "c4", text: "La valeur se mesure en temps gagné pour le client" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta première API Route d'automatisation</h3><p>Avec Claude Code, construis ta première automatisation dans un projet Next.js :</p><ol><li>Crée une API Route POST /api/analyze-email qui reçoit un JSON avec le contenu d'un email</li><li>Appelle l'API OpenAI avec le prompt 'Résume cet email en une phrase et indique son niveau d'urgence (1-5)'</li><li>Retourne le résultat en JSON et enregistre-le dans un fichier ou une base de données</li><li>Teste avec 3 emails différents via curl ou Postman et vérifie les résumés</li></ol><p>Cette première API Route te familiarise avec le pattern webhook → traitement IA → stockage.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal de coder ses automatisations plutôt que d'utiliser un outil no-code ?", options: JSON.stringify(["C'est toujours plus rapide à mettre en place", "On a un contrôle total sur la logique, les données et le déploiement", "Ça ne nécessite aucune compétence technique", "C'est le seul moyen d'utiliser l'IA"]), correctAnswer: "On a un contrôle total sur la logique, les données et le déploiement", explanation: "Coder ses automatisations avec Next.js et Claude Code offre un contrôle total : logique conditionnelle complexe, accès direct aux données, pas de limites d'opérations, et déploiement intégré à ton app." },
      { type: "true_false", question: "La logique conditionnelle dans le code (if/else) permet de créer des branches dans un workflow d'automatisation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les conditions if/else dans ton code permettent de diriger le flux selon des conditions : si X alors branche A, sinon branche B. Tu as un contrôle total et tu peux imbriquer autant de conditions que nécessaire." },
      { type: "mcq", question: "Qu'est-ce qu'un webhook dans le contexte de l'automatisation ?", options: JSON.stringify(["Un document de spécification", "Une notification HTTP envoyée par un service externe quand un événement se produit", "Un template de présentation", "Un fichier de configuration"]), correctAnswer: "Une notification HTTP envoyée par un service externe quand un événement se produit", explanation: "Un webhook est une requête HTTP envoyée automatiquement par un service (Gmail, Stripe, Typeform...) vers ton API Route quand un événement se produit (email reçu, paiement effectué, formulaire soumis)." },
      { type: "true_false", question: "L'automatisation IA se limite à connecter deux applications entre elles.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'automatisation IA va plus loin que la simple connexion d'apps. Elle ajoute une couche d'intelligence : analyse de contenu, extraction de données, classification, génération de réponses, etc." },
      { type: "mcq", question: "Quelle approche utilise-t-on pour traiter chaque ligne d'un CSV individuellement dans un script ?", options: JSON.stringify(["Une condition if/else", "Une boucle for ou map", "Un try/catch", "Un webhook"]), correctAnswer: "Une boucle for ou map", explanation: "Les boucles for ou la méthode map() permettent de parcourir un tableau ou une collection et de traiter chaque élément individuellement. C'est l'approche standard pour traiter chaque ligne d'un fichier CSV." },
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
        { title: "Formulaire de demande en ligne", description: "Crée un formulaire Tally ou Typeform intégré au site du garage. Le client renseigne : marque, modèle, année, kilométrage, description du problème (avec possibilité de joindre une photo). La soumission envoie un webhook vers ton API Route Next.js." },
        { title: "Analyse IA de la demande", description: "Le contenu du formulaire est envoyé à GPT-4o avec un prompt spécialisé : 'Tu es un expert automobile. Analyse cette demande et estime les réparations nécessaires, les pièces potentielles et une fourchette de prix.' L'IA retourne un pré-diagnostic structuré." },
        { title: "Génération automatique du devis", description: "À partir du pré-diagnostic IA, un devis PDF est généré automatiquement via un template (Google Docs ou API de génération de PDF). Le devis inclut : diagnostic, interventions prévues, estimation de prix, délai estimé." },
        { title: "Envoi au client + suivi", description: "Le devis est envoyé par email au client. En parallèle, une ligne est créée dans un Google Sheet de suivi avec le statut 'Devis envoyé'. Si le client ne répond pas sous 48h, un SMS de relance est envoyé automatiquement via Twilio." },
        { title: "Gestion du cycle complet", description: "Quand le client accepte (réponse email ou clic sur un lien), le statut passe à 'Confirmé', un créneau est proposé, et un rappel SMS est envoyé la veille du RDV. Après la réparation, la facture est générée et envoyée." },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le script d'automatisation en détail" },
      { id: "2-9", type: "text", html: "<p>Ton API Route principale reçoit le webhook du formulaire et exécute 3 traitements en parallèle grâce à <code>Promise.all</code> :</p><ul><li><strong>Branche 1 — Analyse + Devis :</strong> Webhook → appel API OpenAI (analyse) → génération du devis PDF → envoi email via API Gmail ou Resend</li><li><strong>Branche 2 — Suivi :</strong> Webhook → insertion dans Google Sheets (via API) → programmation d'un cron job de relance SMS via Twilio à 48h</li><li><strong>Branche 3 — Notification interne :</strong> Webhook → envoi notification Discord ou email (résumé de la demande au gérant)</li></ul><p>Utilise la logique conditionnelle dans ton code pour diriger les données dans les 3 branches simultanément avec <code>Promise.all</code>.</p>" },
      { id: "2-10", type: "callout", variant: "tip", html: "<strong>Prompt IA pour le diagnostic :</strong> Sois précis dans ton prompt. Inclus une liste de réparations courantes avec des fourchettes de prix que le gérant t'a fournies. L'IA sera plus précise avec un contexte métier détaillé." },

      { id: "2-11", type: "comparison", headers: ["Tâche manuelle", "Temps avant", "Temps après automatisation"], rows: [
        { cells: ["Répondre à une demande de devis", "15-20 min", "0 min (automatique)"] },
        { cells: ["Relancer un client sans réponse", "5 min par relance", "0 min (SMS automatique)"] },
        { cells: ["Mettre à jour le suivi", "5 min par véhicule", "0 min (automatique)"] },
        { cells: ["Envoyer la facture", "10 min", "0 min (automatique)"] },
      ]},

      { id: "2-12", type: "checklist", title: "Composants de l'automatisation", items: [
        { id: "c1", text: "Formulaire de demande (Tally/Typeform)" },
        { id: "c2", text: "API Route avec logique conditionnelle et 3 branches parallèles" },
        { id: "c3", text: "Appel API OpenAI pour le pré-diagnostic IA" },
        { id: "c4", text: "Génération PDF du devis (Google Docs API)" },
        { id: "c5", text: "Envoi email + SMS de relance (Gmail + Twilio)" },
        { id: "c6", text: "Google Sheet de suivi centralisé" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis l'automatisation du garage</h3><p>Avec Claude Code, code le script d'automatisation complet :</p><ol><li>Crée le formulaire de demande avec Tally (gratuit) — inclus les champs marque, modèle, année, km, description</li><li>Crée une API Route POST /api/garage/demande qui reçoit le webhook du formulaire</li><li>Ajoute un appel à l'API OpenAI qui analyse la demande et génère un pré-diagnostic</li><li>Crée un Google Sheet de suivi et connecte-le via l'API Google Sheets</li><li>Teste avec 3 demandes fictives : vidange simple, bruit moteur suspect, pneus à changer</li></ol><p>Tu n'as pas besoin de la partie PDF/facture pour cet exercice — concentre-toi sur le flux principal.</p>",
    quiz: [
      { type: "mcq", question: "Combien de temps un gérant de garage passe-t-il typiquement sur l'administratif par jour ?", options: JSON.stringify(["30 minutes", "1 heure", "2 à 3 heures", "6 heures"]), correctAnswer: "2 à 3 heures", explanation: "Un gérant de petit garage passe en moyenne 2 à 3 heures par jour sur les devis, relances, suivi et facturation — du temps qu'il pourrait consacrer à la gestion technique." },
      { type: "true_false", question: "Le pré-diagnostic IA remplace complètement l'avis du mécanicien.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le pré-diagnostic IA est une estimation pour accélérer la rédaction du devis. Le mécanicien reste indispensable pour le diagnostic technique réel une fois le véhicule sur le pont." },
      { type: "mcq", question: "Après combien de temps sans réponse un SMS de relance est-il envoyé au client ?", options: JSON.stringify(["1 heure", "24 heures", "48 heures", "1 semaine"]), correctAnswer: "48 heures", explanation: "Le workflow programme un SMS de relance automatique 48h après l'envoi du devis si le client n'a pas répondu. C'est un délai raisonnable qui montre du suivi sans être intrusif." },
      { type: "mcq", question: "Combien de branches parallèles le script d'automatisation du garage exécute-t-il ?", options: JSON.stringify(["1 branche", "2 branches", "3 branches", "5 branches"]), correctAnswer: "3 branches", explanation: "Le script exécute 3 branches en parallèle via Promise.all : analyse + devis, suivi dans Google Sheets, et notification interne au gérant." },
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
        { title: "Capture multi-canal", description: "Les leads arrivent de plusieurs sources : formulaire du site web (webhook), email de contact (Gmail trigger), notification des portails (parsing email). Chaque source envoie les données vers la même API Route de traitement." },
        { title: "Qualification IA automatique", description: "L'IA analyse la demande et extrait : type de bien recherché (maison/appart), budget, localisation souhaitée, surface minimum, nombre de chambres, critères spéciaux (jardin, parking, balcon). Elle attribue un score de 1 à 10." },
        { title: "Matching avec le catalogue", description: "Le script interroge la base de biens (Google Sheets ou ta propre app Supabase via API) et applique un algorithme de matching : quels biens correspondent aux critères du lead ? L'IA classe les résultats par pertinence." },
        { title: "Envoi personnalisé", description: "Un email personnalisé est généré par l'IA avec la sélection de biens, des descriptions adaptées au profil du client et un lien pour réserver une visite. Le ton est chaleureux et professionnel." },
        { title: "Suivi et relance", description: "Si le lead ne répond pas sous 24h, un SMS est envoyé. Sous 72h, un deuxième email avec de nouveaux biens. Sous 7 jours, l'agent est notifié pour un appel personnel. Tout est tracké dans ton CRM (Notion ou une app custom avec Supabase)." },
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
        { id: "c3", text: "Base de biens dans Google Sheets ou Supabase" },
        { id: "c4", text: "Algorithme de matching IA" },
        { id: "c5", text: "Email personnalisé généré par IA" },
        { id: "c6", text: "Séquence de relance automatisée (email + SMS)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis le pipeline immo</h3><p>Crée une version simplifiée du pipeline :</p><ol><li>Crée une base de 10 biens fictifs dans Google Sheets (type, prix, ville, surface, chambres, description)</li><li>Crée un formulaire de contact prospect avec les champs essentiels</li><li>Code une API Route qui reçoit le webhook du formulaire → appel API OpenAI (qualification + matching) → envoi email personnalisé via Resend ou Gmail API</li><li>Teste avec 3 profils différents : famille cherchant une maison, étudiant cherchant un studio, investisseur cherchant un T2</li></ol>",
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
        { title: "Réception du document", description: "Le trigger est un webhook Gmail pour les emails avec pièce jointe, ou un événement d'upload dans Google Drive/Dropbox. Ton API Route reçoit la notification et lance le traitement automatiquement." },
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
    exercise: "<h3>Exercice : Automatise le traitement de 5 factures</h3><p>Construis le workflow complet :</p><ol><li>Trouve ou crée 5 factures fictives en PDF (utilise des générateurs de factures gratuits en ligne)</li><li>Code une API Route POST /api/factures/process : réception du fichier → appel API OpenAI (extraction des données) → insertion dans Google Sheets via API</li><li>Pour le prompt IA, demande un retour en JSON avec les champs : fournisseur, numéro, date, montant_ht, tva, montant_ttc, confiance</li><li>Envoie les 5 factures via ton endpoint et vérifie que les données extraites sont correctes dans le Sheet</li><li>Note le taux de précision sur tes 5 factures</li></ol>",
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
