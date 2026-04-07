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

      { id: "1-20", type: "heading", level: 3, text: "Automatisation par le code vs no-code : le vrai débat" },
      { id: "1-21", type: "text", html: "<p>Tu te demandes peut-être : pourquoi coder alors qu'il existe Make, Zapier et n8n ? La réponse tient en 3 points :</p><ul><li><strong>Pas de limites d'opérations :</strong> Make facture par opération (un plan à 16€/mois te donne 10 000 opérations). Un script tourne autant de fois que tu veux pour le prix de l'hébergement (~5€/mois).</li><li><strong>Logique illimitée :</strong> En no-code, tu es limité par les modules disponibles. En code, tu peux créer n'importe quelle logique, aussi complexe soit-elle.</li><li><strong>Différenciation :</strong> N'importe qui peut copier un scénario Make. Ton code custom est unique et crée une barrière à l'entrée pour la concurrence.</li></ul><p>Cela dit, les deux approches ne s'opposent pas. Pour des automatisations simples (connecter 2 apps), le no-code est plus rapide. Pour des projets IA complexes avec de la logique métier, le code est indispensable.</p>" },
      { id: "1-22", type: "callout", variant: "tip", html: "<strong>Positionnement commercial :</strong> Le fait de coder tes automatisations te permet de te positionner comme un prestataire premium. Tu ne vends pas un 'scénario Make à 200€', tu vends un 'système sur mesure à 5 000€'. La perception de valeur est totalement différente." },

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

      { id: "1-23", type: "heading", level: 3, text: "Anatomie d'une API Route d'automatisation" },
      { id: "1-24", type: "text", html: "<p>Voici la structure type d'une API Route d'automatisation IA. Même si tu ne codes pas encore, comprendre cette structure te permet de communiquer avec Claude Code efficacement :</p><ol><li><strong>Réception de la requête :</strong> L'API Route reçoit les données (JSON du webhook, fichier uploadé, etc.)</li><li><strong>Validation :</strong> Le code vérifie que les données sont complètes et dans le bon format</li><li><strong>Traitement IA :</strong> Appel à l'API OpenAI avec un prompt adapté au cas d'usage</li><li><strong>Logique métier :</strong> Conditions, calculs, transformations basées sur la réponse de l'IA</li><li><strong>Actions de sortie :</strong> Envoi email, insertion en base, notification, génération de fichier</li><li><strong>Réponse :</strong> Retour d'un statut de succès ou d'erreur au service appelant</li></ol><p>Chaque automatisation que tu construiras suit ce même pattern. Une fois que tu le maîtrises, tu peux créer n'importe quelle automatisation en quelques heures avec Claude Code.</p>" },

      { id: "1-25", type: "separator", style: "dots" },
      { id: "1-26", type: "heading", level: 3, text: "Hébergement et déploiement : où faire tourner tes automatisations" },
      { id: "1-27", type: "comparison", headers: ["Plateforme", "Prix", "Idéal pour", "Limitation"], rows: [
        { cells: ["Vercel (gratuit)", "0€ (hobby plan)", "API Routes + cron jobs simples", "Timeout de 10s (gratuit) à 60s (pro)"] },
        { cells: ["Vercel Pro", "20$/mois", "API Routes + cron jobs avec plus de durée", "Timeout de 300s max"] },
        { cells: ["Railway", "5$/mois + usage", "Scripts longs, serveurs persistants", "Pas de limite de timeout"] },
        { cells: ["VPS (Hetzner)", "4€/mois", "Contrôle total, scripts illimités", "Configuration manuelle requise"] },
      ]},
      { id: "1-28", type: "callout", variant: "warning", html: "<strong>Attention au timeout Vercel :</strong> Sur le plan gratuit, une API Route ne peut tourner que 10 secondes. Pour les traitements IA qui prennent plus de temps (analyse de documents, génération de rapports), passe au plan Pro (60s) ou utilise Railway pour les traitements longs." },

      { id: "1-11", type: "text", html: "<p>Avec ces 5 concepts, tu peux construire des automatisations de n'importe quelle complexité. Claude Code t'aide à écrire le code rapidement. Dans les leçons suivantes, on va les appliquer à des cas concrets : garage, agence immo et traitement de factures.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "Les API Routes Next.js sont le moyen le plus flexible pour créer des automatisations" },
        { id: "c2", text: "Les 5 concepts clés : API Route, webhook, logique conditionnelle, boucles, gestion d'erreurs" },
        { id: "c3", text: "L'automatisation IA par le code donne un contrôle total sur la logique et les données" },
        { id: "c4", text: "La valeur se mesure en temps gagné pour le client" },
        { id: "c5", text: "Le code custom te positionne en prestataire premium vs no-code" },
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

      { id: "2-20", type: "heading", level: 3, text: "Le parcours client actuel vs automatisé" },
      { id: "2-21", type: "text", html: "<p>Pour bien comprendre la valeur que tu apportes, visualise le parcours client complet :</p><p><strong>Avant (sans automatisation) :</strong> Le client appelle → tombe sur le répondeur (le gérant est sous une voiture) → rappelle plus tard → obtient enfin le gérant → explique son problème → le gérant note sur un papier → le gérant rédige un devis Word le soir → envoie le devis par email le lendemain → le client ne répond pas → le gérant oublie de relancer → le client va ailleurs.</p><p><strong>Après (avec automatisation) :</strong> Le client remplit un formulaire de 2 minutes → l'IA analyse et génère un pré-devis en 30 secondes → le client reçoit le devis par email dans la minute → pas de réponse ? SMS automatique à 48h → le client confirme d'un clic → RDV planifié automatiquement → rappel SMS la veille → facture envoyée après réparation.</p><p>Le temps du gérant sur ce processus : de 35 minutes à <strong>0 minute</strong>.</p>" },

      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Architecture de l'automatisation" },
      { id: "2-6", type: "steps", steps: [
        { title: "Formulaire de demande en ligne", description: "Crée un formulaire Tally ou Typeform intégré au site du garage. Le client renseigne : marque, modèle, année, kilométrage, description du problème (avec possibilité de joindre une photo). La soumission envoie un webhook vers ton API Route Next.js." },
        { title: "Analyse IA de la demande", description: "Le contenu du formulaire est envoyé à GPT-4o avec un prompt spécialisé : 'Tu es un expert automobile. Analyse cette demande et estime les réparations nécessaires, les pièces potentielles et une fourchette de prix.' L'IA retourne un pré-diagnostic structuré." },
        { title: "Génération automatique du devis", description: "À partir du pré-diagnostic IA, un devis PDF est généré automatiquement via un template (Google Docs ou API de génération de PDF). Le devis inclut : diagnostic, interventions prévues, estimation de prix, délai estimé." },
        { title: "Envoi au client + suivi", description: "Le devis est envoyé par email au client. En parallèle, une ligne est créée dans un Google Sheet de suivi avec le statut 'Devis envoyé'. Si le client ne répond pas sous 48h, un SMS de relance est envoyé automatiquement via Twilio." },
        { title: "Gestion du cycle complet", description: "Quand le client accepte (réponse email ou clic sur un lien), le statut passe à 'Confirmé', un créneau est proposé, et un rappel SMS est envoyé la veille du RDV. Après la réparation, la facture est générée et envoyée." },
      ]},

      { id: "2-22", type: "heading", level: 3, text: "Le prompt IA pour le pré-diagnostic automobile" },
      { id: "2-23", type: "text", html: "<p>Le prompt que tu donnes à l'IA est crucial pour la qualité du devis. Tu ne peux pas juste dire 'analyse ce problème de voiture'. Tu dois fournir le contexte métier du garage. Voici les éléments indispensables à inclure dans ton prompt :</p><ul><li><strong>Grille tarifaire :</strong> Main d'oeuvre à 55€/h, tarif des interventions courantes (vidange : 80-120€, freins : 150-300€, distribution : 400-800€)</li><li><strong>Pièces courantes :</strong> Fourchettes de prix des pièces les plus fréquentes selon le type de véhicule</li><li><strong>Format de sortie :</strong> JSON structuré avec diagnostic, liste d'interventions, pièces, fourchette de prix basse/haute, délai estimé</li><li><strong>Disclaimer :</strong> L'IA doit préciser que c'est une estimation, le prix final sera confirmé après diagnostic physique</li></ul><p>Plus tu fournis de contexte métier au LLM, plus le pré-devis sera réaliste et crédible auprès du client.</p>" },
      { id: "2-24", type: "callout", variant: "warning", html: "<strong>Point crucial :</strong> Le pré-devis IA doit TOUJOURS mentionner qu'il s'agit d'une estimation. Le client doit comprendre que le prix final sera confirmé après un diagnostic physique. C'est à la fois une protection juridique et un gage de sérieux." },

      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le script d'automatisation en détail" },
      { id: "2-9", type: "text", html: "<p>Ton API Route principale reçoit le webhook du formulaire et exécute 3 traitements en parallèle grâce à <code>Promise.all</code> :</p><ul><li><strong>Branche 1 — Analyse + Devis :</strong> Webhook → appel API OpenAI (analyse) → génération du devis PDF → envoi email via API Gmail ou Resend</li><li><strong>Branche 2 — Suivi :</strong> Webhook → insertion dans Google Sheets (via API) → programmation d'un cron job de relance SMS via Twilio à 48h</li><li><strong>Branche 3 — Notification interne :</strong> Webhook → envoi notification Discord ou email (résumé de la demande au gérant)</li></ul><p>Utilise la logique conditionnelle dans ton code pour diriger les données dans les 3 branches simultanément avec <code>Promise.all</code>.</p>" },
      { id: "2-10", type: "callout", variant: "tip", html: "<strong>Prompt IA pour le diagnostic :</strong> Sois précis dans ton prompt. Inclus une liste de réparations courantes avec des fourchettes de prix que le gérant t'a fournies. L'IA sera plus précise avec un contexte métier détaillé." },

      { id: "2-25", type: "heading", level: 3, text: "Erreurs courantes à éviter" },
      { id: "2-26", type: "text", html: "<p>Voici les pièges classiques quand tu automatises pour un garage (ou tout autre métier artisanal) :</p><ul><li><strong>Ne pas impliquer le gérant dans le prompt :</strong> Tu dois passer 1-2h avec le gérant pour comprendre ses tarifs, ses spécialités et ses contraintes. Sans ça, le pré-devis sera générique et inutile.</li><li><strong>Oublier les cas particuliers :</strong> Que faire si le client envoie une photo floue ? Si le véhicule est trop ancien pour être identifié ? Si la demande est hors périmètre (carrosserie alors que le garage ne fait que la mécanique) ?</li><li><strong>Pas de fallback humain :</strong> Quand l'IA n'est pas sûre (score de confiance < 0.7), le gérant doit être notifié pour valider le devis avant envoi. Ne jamais envoyer un devis douteux automatiquement.</li><li><strong>Pas de tracking :</strong> Si tu ne mesures pas les résultats (nombre de devis envoyés, taux d'acceptation, CA généré), tu ne peux pas prouver la valeur au client pour justifier le renouvellement.</li></ul>" },

      { id: "2-11", type: "comparison", headers: ["Tâche manuelle", "Temps avant", "Temps après automatisation"], rows: [
        { cells: ["Répondre à une demande de devis", "15-20 min", "0 min (automatique)"] },
        { cells: ["Relancer un client sans réponse", "5 min par relance", "0 min (SMS automatique)"] },
        { cells: ["Mettre à jour le suivi", "5 min par véhicule", "0 min (automatique)"] },
        { cells: ["Envoyer la facture", "10 min", "0 min (automatique)"] },
      ]},

      { id: "2-27", type: "separator", style: "dots" },
      { id: "2-28", type: "heading", level: 3, text: "Comment vendre cette automatisation à un garage" },
      { id: "2-29", type: "text", html: "<p>Le gérant de garage ne comprend pas la tech. Ne lui parle pas d'API Routes ou de webhooks. Parle son langage :</p><ul><li><em>'Vous recevez les demandes de devis sur votre site. Le devis part automatiquement au client en moins de 2 minutes.'</em></li><li><em>'Si le client ne répond pas, un SMS de rappel part tout seul après 48h.'</em></li><li><em>'Vous avez un tableau de suivi avec tous les véhicules en cours, les devis en attente et les factures envoyées.'</em></li><li><em>'Vous gagnez 2h par jour que vous pouvez consacrer à vos clients et à votre équipe.'</em></li></ul><p>Le tarif : 3 000€ – 5 000€ en setup + 200€/mois de maintenance. Le ROI est atteint en 2-3 mois.</p>" },

      { id: "2-12", type: "checklist", title: "Composants de l'automatisation", items: [
        { id: "c1", text: "Formulaire de demande (Tally/Typeform)" },
        { id: "c2", text: "API Route avec logique conditionnelle et 3 branches parallèles" },
        { id: "c3", text: "Appel API OpenAI pour le pré-diagnostic IA" },
        { id: "c4", text: "Génération PDF du devis (Google Docs API)" },
        { id: "c5", text: "Envoi email + SMS de relance (Gmail + Twilio)" },
        { id: "c6", text: "Google Sheet de suivi centralisé" },
        { id: "c7", text: "Fallback humain pour les cas de faible confiance" },
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

      { id: "3-20", type: "heading", level: 3, text: "Le coût réel d'un lead perdu en immobilier" },
      { id: "3-21", type: "text", html: "<p>Faisons le calcul que tu peux présenter à ton client agence immo :</p><ul><li>Une agence reçoit environ 100 leads/mois</li><li>60% ne sont pas recontactés dans les 24h = 60 leads perdus</li><li>Sur ces 60, disons 10% auraient pu convertir = 6 ventes potentielles perdues</li><li>Commission moyenne par vente : 5 000€</li><li><strong>Manque à gagner : 30 000€/mois</strong></li></ul><p>Bien sûr, tous ces leads n'auraient pas acheté. Mais même si ton automatisation ne récupère que 2 ventes supplémentaires par mois, c'est 10 000€ de commission en plus. Ton setup à 5 000€ est rentabilisé en 2 semaines.</p><p>Ce calcul est ton meilleur argument de vente. Les chiffres parlent d'eux-mêmes.</p>" },

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

      { id: "3-22", type: "heading", level: 3, text: "Le matching IA : comment l'algorithme fonctionne" },
      { id: "3-23", type: "text", html: "<p>Le matching IA est la partie la plus impressionnante du système. Au lieu d'un simple filtre 'budget < X ET chambres >= Y', l'IA comprend les nuances :</p><ul><li><strong>Flexibilité budgétaire :</strong> Un prospect avec un budget de 300K€ pourrait accepter un bien à 320K€ s'il coche tous les autres critères. L'IA propose des biens légèrement au-dessus du budget si le match est excellent.</li><li><strong>Substitution de critères :</strong> Le prospect veut un jardin mais il n'y en a pas dans son budget ? L'IA peut proposer un bien avec une grande terrasse et expliquer pourquoi c'est une alternative intéressante.</li><li><strong>Scoring pondéré :</strong> Chaque critère a un poids. La localisation pèse plus que le parking. Un match à 85% dans le bon quartier vaut mieux qu'un match à 95% dans un quartier éloigné.</li></ul><p>C'est cette intelligence qui différencie ton automatisation d'un simple filtre de base de données. Le prospect reçoit une sélection véritablement pertinente, pas une liste générique.</p>" },

      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Le prompt de qualification IA" },
      { id: "3-9", type: "text", html: "<p>Le prompt de qualification est la pièce maîtresse du système. Il doit extraire des données structurées à partir d'un message libre du client. Voici la structure recommandée :</p><p>Le prompt demande à l'IA de retourner un JSON avec les champs : <code>type_bien</code>, <code>budget_min</code>, <code>budget_max</code>, <code>localisation</code>, <code>surface_min</code>, <code>chambres</code>, <code>criteres_speciaux</code>, <code>urgence</code> (1-10), <code>score_qualification</code> (1-10). Si une information manque, le champ est null et sera demandé dans le premier email de réponse.</p>" },
      { id: "3-10", type: "callout", variant: "warning", html: "<strong>Piège courant :</strong> Ne demande pas trop d'infos dans le premier email de réponse. 2-3 questions maximum. Un email avec 10 questions fait fuir le prospect. L'IA doit prioriser les questions par importance." },

      { id: "3-24", type: "heading", level: 3, text: "Exemples de messages de prospects et qualification IA" },
      { id: "3-25", type: "comparison", headers: ["Message du prospect", "Extraction IA", "Score"], rows: [
        { cells: ["'Bonjour, on cherche un T3 sur Lyon 3e, budget 250-300K, avec parking si possible, on veut emménager avant septembre'", "Type: T3, Budget: 250-300K, Loc: Lyon 3e, Critères: parking, Urgence: 8/10", "Score: 9/10 (complet, urgent)"] },
        { cells: ["'Je regarde les apparts dans le coin, c'est cher ?'", "Type: null, Budget: null, Loc: null, Urgence: 2/10", "Score: 2/10 (trop vague)"] },
        { cells: ["'Maison 4 chambres avec jardin, max 400K, secteur Villeurbanne ou Caluire'", "Type: maison, Chambres: 4, Critères: jardin, Budget: max 400K, Loc: Villeurbanne/Caluire", "Score: 8/10 (critères clairs)"] },
      ]},
      { id: "3-26", type: "callout", variant: "tip", html: "<strong>Pour les leads à faible score :</strong> Ne les ignore pas. Envoie un email automatique avec 2-3 questions ciblées pour compléter les infos manquantes. Si le prospect répond, le score est recalculé et le pipeline continue." },

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
        { id: "c4", text: "Algorithme de matching IA pondéré" },
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

      { id: "4-20", type: "heading", level: 3, text: "Les clients idéaux pour cette automatisation" },
      { id: "4-21", type: "text", html: "<p>Tout le monde traite des documents, mais certains clients ont des besoins plus urgents :</p><ul><li><strong>Cabinets comptables :</strong> Ils traitent les factures de dizaines de clients. Le volume est énorme et le gain de temps est multiplicateur. C'est ton client idéal.</li><li><strong>PME avec un comptable à temps partiel :</strong> Le comptable vient 2 jours par semaine. Si la saisie est déjà faite, il se concentre sur l'analyse et le conseil — plus de valeur ajoutée.</li><li><strong>Entreprises avec beaucoup de fournisseurs :</strong> Un restaurant, un commerce de détail, un artisan du BTP qui gère 50+ fournisseurs a un vrai problème de suivi des factures.</li><li><strong>Startups en croissance :</strong> Le volume de factures augmente vite et le fondateur veut automatiser avant d'embaucher un comptable.</li></ul>" },
      { id: "4-22", type: "callout", variant: "info", html: "<strong>Marché visé :</strong> Il y a plus de 3,5 millions de PME en France. Si seulement 1% ont besoin de cette automatisation, c'est un marché de 35 000 entreprises potentielles. Tu n'as besoin que de 10 clients pour vivre confortablement." },

      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "L'architecture du traitement automatisé" },
      { id: "4-6", type: "steps", steps: [
        { title: "Réception du document", description: "Le trigger est un webhook Gmail pour les emails avec pièce jointe, ou un événement d'upload dans Google Drive/Dropbox. Ton API Route reçoit la notification et lance le traitement automatiquement." },
        { title: "OCR et extraction", description: "Si le document est un scan ou une image, l'OCR (via l'API Vision de GPT-4o ou Google Document AI) convertit l'image en texte. Puis l'IA extrait les données structurées : fournisseur, numéro de facture, date, montant HT, TVA, montant TTC." },
        { title: "Classification automatique", description: "L'IA classe le document : facture d'achat, note de frais, avoir, bon de commande, contrat. Elle détermine aussi la catégorie comptable (fournitures, services, loyer, etc.)." },
        { title: "Saisie automatique", description: "Les données extraites sont insérées dans un Google Sheet structuré (ou un logiciel comptable via API). Chaque ligne contient toutes les informations de la facture, prêtes pour le comptable." },
        { title: "Archivage et alertes", description: "Le document original est renommé selon une convention (YYYY-MM-DD_fournisseur_montant.pdf) et déplacé dans le bon dossier. Si une facture dépasse un seuil ou si l'IA n'est pas sûre d'un montant, une alerte est envoyée." },
      ]},

      { id: "4-23", type: "heading", level: 3, text: "Les subtilités de l'extraction de factures françaises" },
      { id: "4-24", type: "text", html: "<p>Les factures françaises ont des particularités que ton prompt doit prendre en compte :</p><ul><li><strong>TVA multi-taux :</strong> Une même facture peut avoir des lignes à 20%, 10% et 5,5% (restauration, travaux, alimentation). L'IA doit extraire chaque taux séparément.</li><li><strong>Mentions légales obligatoires :</strong> Numéro SIREN/SIRET, numéro de TVA intracommunautaire, date d'échéance, conditions de paiement. Ton prompt doit extraire ces infos pour vérification.</li><li><strong>Formats variés :</strong> Chaque fournisseur a son propre format de facture. Il n'y a aucun standard. L'IA doit être suffisamment flexible pour gérer cette variété.</li><li><strong>Auto-entrepreneurs :</strong> Les factures sans TVA ('TVA non applicable, article 293B du CGI') doivent être détectées et traitées différemment.</li></ul>" },
      { id: "4-25", type: "callout", variant: "warning", html: "<strong>Attention aux factures avec remises :</strong> Une facture avec des lignes de remise (-10%, escompte, avoir partiel) peut tromper l'IA sur le montant total. Ajoute dans ton prompt : 'Vérifie que la somme des lignes de détail (positives ET négatives) correspond au montant HT indiqué.'" },

      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Le prompt d'extraction IA" },
      { id: "4-9", type: "text", html: "<p>L'extraction de données de facture repose sur un prompt précis. L'IA reçoit le texte du document (après OCR si nécessaire) et doit retourner un JSON structuré. Les champs à extraire sont : <code>fournisseur</code>, <code>numero_facture</code>, <code>date_facture</code>, <code>date_echeance</code>, <code>montant_ht</code>, <code>taux_tva</code>, <code>montant_tva</code>, <code>montant_ttc</code>, <code>categorie</code>, <code>confiance</code> (score de 0 à 1).</p><p>Le champ <code>confiance</code> est crucial : si l'IA retourne un score inférieur à 0.8, le document est flaggé pour vérification humaine. Cela permet d'automatiser 90% des factures tout en gardant un contrôle qualité sur les cas difficiles (scans de mauvaise qualité, factures manuscrites, formats inhabituels).</p>" },

      { id: "4-26", type: "heading", level: 3, text: "Optimiser le coût du traitement" },
      { id: "4-27", type: "text", html: "<p>Quand tu traites des centaines de factures par mois, le coût des appels API compte. Voici comment optimiser :</p><ul><li><strong>Stratégie à 2 niveaux :</strong> D'abord, extrais le texte brut du PDF (gratuit avec pdf-parse). Si le texte est propre et contient toutes les infos, envoie-le à GPT-4o-mini (0,001€ par facture). Si le texte est manquant ou de mauvaise qualité, passe à GPT-4o Vision (0,01€ par facture).</li><li><strong>Cache fournisseur :</strong> Quand l'IA a déjà traité 10 factures du même fournisseur, elle connaît le format. Tu peux utiliser un template de mapping stocké en base pour accélérer l'extraction sans IA.</li><li><strong>Traitement par lot :</strong> Au lieu de traiter chaque facture individuellement, groupe les factures du même fournisseur et traite-les en une seule requête. Cela réduit le nombre d'appels API.</li></ul><p>Avec ces optimisations, le coût de traitement tombe sous 0,005€ par facture en moyenne. Pour 500 factures/mois, le coût API est de 2,50€. Imbattable.</p>" },

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
        { id: "c8", text: "Optimisation des coûts avec stratégie à 2 niveaux" },
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
