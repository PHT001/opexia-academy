// ═══════════════════════════════════════════════════
// MODULE 12 — IA pour documents & data
// 4 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const V2_MODULE_12_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 12,
    title: "Extraire des données de PDF avec l'IA (OCR)",
    slug: "v2-extraire-donnees-pdf-ia-ocr",
    duration: "25 min",
    description: "Maîtrise l'extraction de données à partir de fichiers PDF grâce à l'OCR et aux modèles de vision IA. Techniques pour transformer des documents non structurés en données exploitables.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le problème des documents non structurés" },
      { id: "1-2", type: "text", html: "<p>Les entreprises croulent sous les documents : factures, contrats, rapports, bons de commande, relevés bancaires. Ces documents contiennent des <strong>données précieuses</strong> mais sous forme non structurée — du texte, des tableaux, des logos, des signatures mélangés dans un PDF ou un scan.</p><p>Jusqu'à récemment, extraire ces données nécessitait soit de la saisie manuelle (coûteuse et lente), soit des outils OCR basiques qui ne comprenaient pas le contexte. L'IA change la donne : elle ne se contente pas de lire le texte, elle <strong>comprend la structure</strong> du document et extrait les informations pertinentes dans un format structuré.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Deux types de PDF :</strong> Les PDF numériques (créés depuis un logiciel) contiennent du texte directement extractible. Les PDF scannés (images de documents) nécessitent une étape OCR préalable. GPT-4o Vision gère les deux cas." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les outils d'extraction IA" },
      { id: "1-6", type: "comparison", headers: ["Outil", "Type", "Forces", "Prix"], rows: [
        { cells: ["GPT-4o Vision", "API multimodale", "Comprend le contexte, extrait des tableaux, gère les scans", "~0,01€ par page"] },
        { cells: ["Google Document AI", "Service cloud OCR+IA", "Très précis sur les formulaires, factures, reçus", "Gratuit (1 000 pages/mois) puis 0,01$/page"] },
        { cells: ["AWS Textract", "Service cloud OCR", "Extraction de tableaux et formulaires, intégration AWS", "0,015$/page"] },
        { cells: ["pdf-parse (Node.js)", "Librairie open source", "Extraction de texte brut de PDF numériques, gratuit", "Gratuit"] },
        { cells: ["Tesseract OCR", "Open source", "OCR local, pas de données envoyées au cloud, gratuit", "Gratuit"] },
      ]},
      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Workflow d'extraction avec GPT-4o Vision" },
      { id: "1-9", type: "steps", steps: [
        { title: "Convertir le PDF en images", description: "GPT-4o Vision travaille avec des images. Convertis chaque page du PDF en image PNG ou JPEG. En Python, utilise pdf2image (basé sur poppler). En Node.js, utilise pdf-to-img. Résolution recommandée : 300 DPI pour un bon équilibre qualité/taille." },
        { title: "Envoyer à l'API Vision", description: "Envoie l'image à l'API GPT-4o avec un prompt d'extraction structuré. Le prompt doit spécifier exactement quels champs extraire et dans quel format (JSON). Exemple : 'Extrais de cette facture : fournisseur, numéro, date, lignes de détail (description, quantité, prix unitaire, total), montant HT, TVA, TTC.'" },
        { title: "Parser la réponse JSON", description: "GPT-4o retourne un JSON structuré. Parse-le et valide les types de données : les montants sont-ils des nombres ? Les dates sont-elles au bon format ? Ajoute une validation pour détecter les erreurs d'extraction." },
        { title: "Gérer les documents multi-pages", description: "Pour les documents de plusieurs pages, envoie chaque page séparément puis fusionne les résultats. L'IA doit comprendre que les lignes d'un tableau peuvent s'étendre sur plusieurs pages. Ajoute le contexte : 'Ceci est la page 2/5 d'une facture. Continue l'extraction des lignes de détail.'" },
        { title: "Score de confiance", description: "Demande à l'IA d'attribuer un score de confiance (0-1) à chaque champ extrait. Les champs avec un score < 0.8 sont flaggés pour vérification humaine. Cela permet de garantir la qualité sans tout vérifier manuellement." },
      ]},
      { id: "1-10", type: "callout", variant: "tip", html: "<strong>Astuce performance :</strong> Pour les PDF numériques, extrais d'abord le texte brut avec pdf-parse. Si le texte est propre, envoie-le directement à GPT-4o (sans Vision) — c'est 10x moins cher et 5x plus rapide. Réserve la Vision pour les scans et les documents avec des tableaux complexes." },

      { id: "1-11", type: "text", html: "<p>L'extraction de PDF est la brique de base de tout système de traitement documentaire. Dans les leçons suivantes, tu vas apprendre à traiter des fichiers Excel/CSV et à assembler des pipelines complets de traitement automatisé.</p>" },

      { id: "1-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "PDF numérique = texte directement extractible (pdf-parse)" },
        { id: "c2", text: "PDF scanné = nécessite OCR ou Vision IA" },
        { id: "c3", text: "GPT-4o Vision comprend le contexte et la structure des documents" },
        { id: "c4", text: "Score de confiance pour chaque champ extrait (seuil 0.8)" },
        { id: "c5", text: "Texte brut d'abord, Vision uniquement si nécessaire (coût)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Extrais des données de 5 PDF différents</h3><p>Teste l'extraction IA sur différents types de documents :</p><ol><li>Trouve ou crée 5 PDF variés : une facture numérique, une facture scannée, un bon de commande, un relevé bancaire, un contrat</li><li>Pour chaque document, rédige un prompt d'extraction adapté (les champs à extraire varient selon le type)</li><li>Utilise l'API GPT-4o (ou le playground d'OpenAI) pour extraire les données</li><li>Compare les résultats : quel type de document a le meilleur taux de réussite ?</li><li>Note les cas d'erreur et les pistes d'amélioration du prompt</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence entre un PDF numérique et un PDF scanné ?", options: JSON.stringify(["Il n'y a aucune différence", "Le PDF numérique contient du texte extractible, le scanné est une image", "Le PDF numérique est plus gros en taille", "Le PDF scanné est en couleur, le numérique en noir et blanc"]), correctAnswer: "Le PDF numérique contient du texte extractible, le scanné est une image", explanation: "Un PDF numérique (créé depuis un logiciel) contient du texte directement accessible. Un PDF scanné est une image du document qui nécessite un OCR pour en extraire le texte." },
      { type: "true_false", question: "GPT-4o Vision peut analyser directement un fichier PDF sans conversion préalable.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "GPT-4o Vision travaille avec des images (PNG, JPEG). Il faut d'abord convertir chaque page du PDF en image avant de l'envoyer à l'API Vision." },
      { type: "mcq", question: "Quelle résolution est recommandée pour convertir un PDF en image ?", options: JSON.stringify(["72 DPI", "150 DPI", "300 DPI", "1200 DPI"]), correctAnswer: "300 DPI", explanation: "300 DPI offre le meilleur compromis entre qualité d'OCR et taille de fichier. En dessous, la reconnaissance est dégradée. Au-dessus, le gain de qualité est marginal mais le fichier est beaucoup plus lourd." },
      { type: "mcq", question: "Pourquoi extraire le texte brut avant d'utiliser la Vision IA ?", options: JSON.stringify(["Pour des raisons de sécurité", "C'est obligatoire pour tous les PDF", "C'est 10x moins cher et 5x plus rapide", "La Vision ne fonctionne pas sans texte brut"]), correctAnswer: "C'est 10x moins cher et 5x plus rapide", explanation: "Envoyer du texte brut à GPT-4o (sans Vision) coûte 10x moins cher et est 5x plus rapide. La Vision n'est nécessaire que pour les scans et documents à structure visuelle complexe." },
      { type: "true_false", question: "Google Document AI offre 1 000 pages gratuites par mois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Google Document AI inclut un quota gratuit de 1 000 pages par mois, ce qui est suffisant pour tester et pour les petits volumes de production." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 12,
    title: "Analyser des fichiers Excel et CSV",
    slug: "v2-analyser-fichiers-excel-csv-ia",
    duration: "25 min",
    description: "Utilise l'IA pour analyser, nettoyer et transformer des données dans des fichiers Excel et CSV. Détection d'anomalies, catégorisation automatique et génération de rapports.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Pourquoi l'IA pour les fichiers de données ?" },
      { id: "2-2", type: "text", html: "<p>Excel et CSV sont les formats de données les plus courants en entreprise. Le comptable exporte ses écritures en CSV. Le commercial exporte ses leads en Excel. Le RH exporte les données salariales. Le problème : ces fichiers sont souvent <strong>mal structurés, incomplets ou incohérents</strong>.</p><p>L'IA excelle dans le nettoyage et l'analyse de ces données. Elle détecte les doublons, corrige les erreurs de format, catégorise les entrées, identifie les anomalies et peut même générer des insights et des rapports. Ce qui prendrait des heures en formules Excel se fait en quelques secondes avec un prompt bien rédigé.</p>" },
      { id: "2-3", type: "callout", variant: "tip", html: "<strong>Cas d'usage concret :</strong> Un comptable a un CSV de 2 000 écritures avec des catégories manquantes. L'IA analyse chaque écriture (libellé, montant) et attribue la catégorie comptable en 30 secondes. Manuellement, cela prendrait 4 heures." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Techniques d'analyse IA pour les données tabulaires" },
      { id: "2-6", type: "steps", steps: [
        { title: "Nettoyage des données", description: "L'IA détecte et corrige : doublons (même nom avec orthographe différente), formats incohérents (dates en DD/MM/YYYY vs MM-DD-YYYY), valeurs aberrantes (un montant de 1 000 000€ dans des lignes à 50€), cellules vides à remplir." },
        { title: "Catégorisation automatique", description: "À partir du libellé ou de la description, l'IA attribue une catégorie. Exemple : 'Carrefour 15/03' → catégorie 'Alimentation'. 'SNCF Paris-Lyon' → catégorie 'Transport'. Tu fournis les catégories possibles et quelques exemples dans le prompt." },
        { title: "Détection d'anomalies", description: "L'IA repère les lignes suspectes : montants inhabituels, transactions en double, dates incohérentes, fournisseurs inconnus. Elle flag ces lignes pour vérification humaine au lieu de les corriger automatiquement." },
        { title: "Enrichissement", description: "L'IA enrichit les données existantes : à partir du nom d'un fournisseur, elle ajoute le secteur d'activité. À partir d'une adresse partielle, elle complète le code postal. À partir d'un numéro SIREN, elle retrouve la raison sociale." },
        { title: "Analyse et reporting", description: "L'IA génère des synthèses : total par catégorie, évolution mensuelle, top fournisseurs, comparaison avec les périodes précédentes. Elle peut produire un rapport textuel ou les données pour un graphique." },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Traitement par lots (batch processing)" },
      { id: "2-9", type: "text", html: "<p>Un fichier de 2 000 lignes ne peut pas être envoyé en une seule requête à GPT-4o (limite de tokens). La solution : le <strong>traitement par lots</strong>. Tu découpes le fichier en chunks de 50-100 lignes, envoies chaque chunk à l'IA avec le même prompt, puis fusionnes les résultats.</p><p>Dans Make, l'itérateur découpe automatiquement le fichier. Tu peux aussi le faire en code avec une boucle simple. L'important est de garder le contexte : passe les catégories et les exemples dans chaque requête pour que l'IA soit cohérente entre les lots.</p>" },
      { id: "2-10", type: "callout", variant: "warning", html: "<strong>Attention aux coûts :</strong> 2 000 lignes traitées par GPT-4o coûtent environ 0,50€ à 2€ selon la complexité du prompt. Pour des volumes plus importants (10 000+ lignes), utilise GPT-4o-mini qui est 15x moins cher avec des résultats suffisants pour la catégorisation." },

      { id: "2-11", type: "comparison", headers: ["Tâche", "Temps humain", "Temps IA", "Gain"], rows: [
        { cells: ["Catégoriser 2 000 écritures", "4 heures", "30 secondes", "480x plus rapide"] },
        { cells: ["Détecter les doublons sur 5 000 lignes", "2 heures", "1 minute", "120x plus rapide"] },
        { cells: ["Nettoyer un CSV de 1 000 contacts", "3 heures", "2 minutes", "90x plus rapide"] },
        { cells: ["Générer un rapport mensuel", "1 heure", "10 secondes", "360x plus rapide"] },
      ]},

      { id: "2-12", type: "checklist", title: "Ce que tu retiens", items: [
        { id: "c1", text: "L'IA nettoie, catégorise, détecte les anomalies et enrichit les données" },
        { id: "c2", text: "Traitement par lots pour les gros fichiers (chunks de 50-100 lignes)" },
        { id: "c3", text: "GPT-4o-mini pour les gros volumes (15x moins cher)" },
        { id: "c4", text: "Toujours passer le contexte (catégories, exemples) dans chaque requête" },
        { id: "c5", text: "L'IA flag les anomalies au lieu de les corriger automatiquement" },
      ]},
    ]),
    exercise: "<h3>Exercice : Nettoie et catégorise un fichier CSV</h3><p>Crée ou télécharge un fichier CSV de transactions bancaires fictives (100 lignes) et :</p><ol><li>Ajoute intentionnellement des problèmes : doublons, formats de date incohérents, montants aberrants, catégories manquantes</li><li>Rédige un prompt de nettoyage qui demande à l'IA de détecter et lister les problèmes</li><li>Rédige un prompt de catégorisation avec 10 catégories (Alimentation, Transport, Logement, etc.)</li><li>Dans Make, crée un scénario : lecture CSV → itérateur (lots de 20) → OpenAI → agrégateur → export CSV propre</li><li>Compare le fichier original et le fichier nettoyé</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelle taille de lot est recommandée pour le traitement par lots de données avec l'IA ?", options: JSON.stringify(["1-5 lignes", "50-100 lignes", "500-1000 lignes", "Tout le fichier d'un coup"]), correctAnswer: "50-100 lignes", explanation: "Des chunks de 50-100 lignes offrent le bon compromis entre efficacité (moins de requêtes) et respect des limites de tokens de l'API. Trop petit = trop de requêtes. Trop gros = risque de dépasser la limite." },
      { type: "true_false", question: "GPT-4o-mini est suffisant pour la catégorisation de données.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Pour des tâches de catégorisation simple (attribuer une catégorie à un libellé), GPT-4o-mini donne d'excellents résultats pour un coût 15x inférieur à GPT-4o." },
      { type: "mcq", question: "Combien coûte environ le traitement de 2 000 lignes par GPT-4o ?", options: JSON.stringify(["0,001€", "0,50€ à 2€", "50€ à 100€", "500€+"]), correctAnswer: "0,50€ à 2€", explanation: "Le traitement de 2 000 lignes par GPT-4o coûte entre 0,50€ et 2€ selon la complexité du prompt. C'est un coût dérisoire par rapport aux heures de travail manuel économisées." },
      { type: "mcq", question: "Que doit faire l'IA quand elle détecte une anomalie dans les données ?", options: JSON.stringify(["La corriger automatiquement", "La supprimer", "La flagger pour vérification humaine", "L'ignorer"]), correctAnswer: "La flagger pour vérification humaine", explanation: "L'IA doit flagger les anomalies (montants inhabituels, doublons, données incohérentes) pour vérification humaine plutôt que de les corriger automatiquement, car elle pourrait se tromper sur le bon correctif." },
      { type: "true_false", question: "Il est important de passer les catégories et exemples dans chaque requête de lot.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Chaque requête API est indépendante. Sans le contexte (catégories possibles, exemples), l'IA pourrait catégoriser de manière incohérente entre les lots. Il faut passer le même prompt de référence à chaque fois." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 12,
    title: "Pipeline de traitement automatisé",
    slug: "v2-pipeline-traitement-automatise-documents",
    duration: "30 min",
    description: "Assemble les briques d'extraction PDF et d'analyse de données dans un pipeline de traitement automatisé complet. De la réception du document au rapport final, tout en automatique.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Qu'est-ce qu'un pipeline de traitement documentaire ?" },
      { id: "3-2", type: "text", html: "<p>Un pipeline de traitement documentaire est une chaîne automatisée qui prend un document en entrée et produit des données structurées et des actions en sortie. Chaque étape du pipeline transforme les données : réception → identification → extraction → validation → stockage → action.</p><p>Le concept est similaire à une chaîne de montage industrielle : chaque poste fait une opération précise, et le produit fini sort à l'autre bout. Sauf qu'ici, la matière première est un document et le produit fini est une donnée exploitable.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "<strong>Pense en étapes indépendantes :</strong> Chaque étape du pipeline doit fonctionner de manière autonome. Si l'étape d'extraction échoue, elle ne doit pas bloquer tout le pipeline. Les documents en erreur sont mis de côté pour traitement manuel." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Architecture d'un pipeline type" },
      { id: "3-6", type: "steps", steps: [
        { title: "Étape 1 : Ingestion", description: "Le document arrive par email (pièce jointe Gmail), upload dans un dossier (Google Drive, Dropbox) ou via une API. Le trigger Make détecte le nouveau document et lance le pipeline. Formats supportés : PDF, JPEG, PNG, Excel, CSV." },
        { title: "Étape 2 : Identification et routage", description: "L'IA analyse le document et détermine son type : facture, bon de commande, contrat, relevé bancaire, note de frais. Selon le type, le document est routé vers le bon chemin de traitement (chaque type a un prompt d'extraction différent)." },
        { title: "Étape 3 : Extraction", description: "Le prompt d'extraction spécifique au type de document est exécuté. Pour une facture : fournisseur, montants, lignes de détail. Pour un contrat : parties, dates, clauses clés. Pour un relevé : transactions, solde." },
        { title: "Étape 4 : Validation", description: "Les données extraites sont validées : les montants sont-ils cohérents (HT + TVA = TTC) ? Les dates sont-elles dans le bon format ? Le score de confiance est-il suffisant ? Les documents en échec sont mis dans une file d'attente de vérification." },
        { title: "Étape 5 : Stockage et action", description: "Les données validées sont insérées dans le système cible : Google Sheets, base de données, logiciel comptable. Le document original est archivé avec un nom normalisé. Des actions sont déclenchées si nécessaire : alerte pour les factures urgentes, notification pour les contrats à renouveler." },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Gestion des erreurs et monitoring" },
      { id: "3-9", type: "text", html: "<p>Un pipeline robuste gère les erreurs gracieusement. Voici les 3 types d'erreurs à anticiper :</p><ul><li><strong>Erreur d'extraction :</strong> L'IA ne peut pas lire le document (scan illisible, format inconnu). Le document est déplacé dans un dossier 'À vérifier' et une notification est envoyée.</li><li><strong>Erreur de validation :</strong> Les données extraites sont incohérentes (total ne correspond pas aux lignes). Le document est flaggé avec les détails de l'erreur.</li><li><strong>Erreur technique :</strong> L'API est down, le quota est dépassé. Le module de retry de Make retente 3 fois avec un délai exponentiel. Si ça échoue encore, alerte.</li></ul>" },
      { id: "3-10", type: "comparison", headers: ["Type d'erreur", "Fréquence", "Action automatique", "Action humaine requise"], rows: [
        { cells: ["Extraction impossible", "5-10% des documents", "Déplacement en file d'attente", "Vérification et saisie manuelle"] },
        { cells: ["Validation échouée", "3-5% des documents", "Flag avec détails de l'erreur", "Correction des données extraites"] },
        { cells: ["Erreur technique API", "< 1% des cas", "Retry automatique (3 tentatives)", "Vérification si persistant"] },
      ]},
      { id: "3-11", type: "callout", variant: "warning", html: "<strong>Monitoring essentiel :</strong> Crée un dashboard de suivi dans Google Sheets : nombre de documents traités/jour, taux de réussite, taux d'erreur, temps moyen de traitement. Revois les métriques chaque semaine pour optimiser le pipeline." },

      { id: "3-12", type: "checklist", title: "Les 5 étapes du pipeline", items: [
        { id: "c1", text: "Ingestion : réception du document (email, Drive, API)" },
        { id: "c2", text: "Identification : classification automatique du type de document" },
        { id: "c3", text: "Extraction : prompt spécifique par type de document" },
        { id: "c4", text: "Validation : vérification de cohérence et score de confiance" },
        { id: "c5", text: "Stockage + action : insertion dans le système cible et archivage" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis un pipeline multi-documents</h3><p>Crée un pipeline qui traite 3 types de documents :</p><ol><li>Crée 3 documents de test : une facture PDF, un bon de commande (image/scan) et un fichier CSV de transactions</li><li>Dans Make, crée le scénario d'ingestion : trigger = nouveau fichier dans un dossier Google Drive</li><li>Ajoute l'étape d'identification : l'IA détermine le type de document</li><li>Crée un routeur avec 3 branches (facture, bon de commande, CSV) et un prompt d'extraction pour chacun</li><li>Les données extraites vont dans un Google Sheet avec un onglet par type de document</li><li>Ajoute la gestion d'erreurs : si l'extraction échoue, le document est déplacé dans un dossier 'Erreurs'</li></ol>",
    quiz: [
      { type: "mcq", question: "Quelles sont les 5 étapes d'un pipeline de traitement documentaire ?", options: JSON.stringify(["Upload, Analyse, Export, Archive, Delete", "Ingestion, Identification, Extraction, Validation, Stockage/Action", "Scan, OCR, Parse, Format, Save", "Import, Clean, Process, Output, Backup"]), correctAnswer: "Ingestion, Identification, Extraction, Validation, Stockage/Action", explanation: "Les 5 étapes sont : Ingestion (réception), Identification (classification du type), Extraction (données structurées), Validation (cohérence), Stockage/Action (insertion et archivage)." },
      { type: "true_false", question: "Si l'étape d'extraction échoue, tout le pipeline doit s'arrêter.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Chaque document est traité indépendamment. Si l'extraction échoue pour un document, il est mis en file d'attente pour vérification humaine, mais le pipeline continue de traiter les autres documents." },
      { type: "mcq", question: "Quel est le taux d'erreur d'extraction typique d'un pipeline bien configuré ?", options: JSON.stringify(["0%", "5-10%", "25-30%", "50%"]), correctAnswer: "5-10%", explanation: "Un pipeline bien configuré a un taux d'échec d'extraction de 5-10% (scans illisibles, formats inhabituels). Ces cas sont traités manuellement. Les 90-95% restants sont automatisés." },
      { type: "mcq", question: "Combien de tentatives de retry le pipeline doit-il effectuer en cas d'erreur API ?", options: JSON.stringify(["0 (abandon immédiat)", "1", "3", "100"]), correctAnswer: "3", explanation: "3 tentatives avec un délai exponentiel est le standard. Cela couvre les erreurs temporaires (timeout, surcharge) sans s'acharner inutilement en cas de problème persistant." },
      { type: "true_false", question: "Un dashboard de monitoring est optionnel pour un pipeline de production.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le monitoring est essentiel en production. Sans dashboard, tu ne vois pas les erreurs qui s'accumulent, les baisses de performance ou les problèmes de qualité. C'est indispensable pour maintenir le pipeline." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 12,
    title: "Atelier : système de traitement de factures",
    slug: "v2-atelier-systeme-traitement-factures",
    duration: "40 min",
    description: "Projet complet : construis un système de traitement de factures automatisé de bout en bout. Réception par email, extraction IA, saisie comptable, archivage et alertes. Le livrable clé en main pour un cabinet comptable.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Le brief : Cabinet Comptable Bernard & Associés" },
      { id: "4-2", type: "text", html: "<p>Tu travailles pour un cabinet comptable qui gère la comptabilité de 30 PME clientes. Chaque mois, le cabinet reçoit environ <strong>600 factures</strong> par email (PDF, scans, photos). Actuellement, 2 assistants passent 3 jours complets à saisir ces factures dans le tableur comptable.</p><p>Ton objectif : réduire ce temps de saisie de 80%. Les assistants ne vérifieront plus que les cas ambigus (score de confiance < 0.8), soit environ 60 factures au lieu de 600.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>Valeur du projet :</strong> 2 assistants x 3 jours x 12 mois = 72 jours-homme/an de saisie. À 150€/jour, c'est 10 800€/an de coût. Ton système réduit ça à 1 440€/an (80% de réduction). Tu peux facturer 5 000€ en setup + 400€/mois." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture du système" },
      { id: "4-6", type: "steps", steps: [
        { title: "Réception et tri automatique", description: "Un scénario Make surveille la boîte email du cabinet. Quand un email avec pièce jointe PDF/image arrive, le scénario extrait la PJ, identifie l'expéditeur (quel client du cabinet ?) et détermine s'il s'agit d'une facture ou d'un autre document." },
        { title: "Extraction multi-format", description: "Selon le format du document : PDF numérique → extraction texte avec pdf-parse puis analyse GPT-4o. PDF scanné ou image → envoi direct à GPT-4o Vision. Le prompt extrait : fournisseur, SIREN, numéro facture, date, lignes de détail, montant HT, TVA (taux et montant), TTC, conditions de paiement." },
        { title: "Validation comptable", description: "L'IA vérifie la cohérence : somme des lignes = montant HT ? HT + TVA = TTC ? Le taux de TVA est-il standard (20%, 10%, 5.5%) ? Le numéro de facture suit-il un format cohérent avec les factures précédentes du même fournisseur ?" },
        { title: "Affectation comptable", description: "L'IA attribue le compte comptable (plan comptable français) basé sur le fournisseur et la nature de la dépense. Exemples : EDF → 6061 (fournitures), Orange → 6262 (télécommunications), un restaurant → 6257 (réceptions). L'IA apprend des affectations précédentes." },
        { title: "Saisie et archivage", description: "Les données sont insérées dans le Google Sheet comptable du client concerné. Le PDF original est renommé (YYYY-MM_fournisseur_montant.pdf) et archivé dans le dossier Drive du client. Un récapitulatif quotidien est envoyé au cabinet." },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Le prompt d'extraction de facture" },
      { id: "4-9", type: "text", html: "<p>Le prompt est la pièce maîtresse du système. Il doit être extrêmement précis pour couvrir la variété des formats de factures. Voici les éléments clés du prompt :</p><ul><li><strong>Instruction claire :</strong> 'Tu es un assistant comptable expert. Extrais toutes les données de cette facture au format JSON.'</li><li><strong>Structure attendue :</strong> Définis exactement le schéma JSON avec tous les champs, leurs types et les formats (dates en ISO, montants en nombres à 2 décimales).</li><li><strong>Gestion des cas limites :</strong> 'Si un champ n'est pas lisible ou absent, mets null. Si le taux de TVA n'est pas indiqué, calcule-le à partir de HT et TVA.'</li><li><strong>Score de confiance :</strong> 'Attribue un score de confiance global (0 à 1) et un score par champ. Détaille les raisons si un score est inférieur à 0.8.'</li></ul>" },
      { id: "4-10", type: "callout", variant: "tip", html: "<strong>Amélioration continue :</strong> Garde une liste des factures mal extraites et analyse les erreurs. Ajuste le prompt en conséquence. En 2-3 itérations, tu passes de 85% à 95% de précision." },

      { id: "4-11", type: "comparison", headers: ["Métrique", "Avant automatisation", "Après automatisation", "Amélioration"], rows: [
        { cells: ["Factures traitées/jour", "40 (saisie manuelle)", "200+ (automatique)", "5x plus rapide"] },
        { cells: ["Temps de traitement/facture", "3-5 minutes", "10 secondes", "20-30x plus rapide"] },
        { cells: ["Taux d'erreur", "5% (fatigue humaine)", "2% (cas ambigus)", "60% de réduction"] },
        { cells: ["Coût mensuel", "900€ (temps assistants)", "180€ (API + maintenance)", "80% d'économie"] },
      ]},

      { id: "4-12", type: "checklist", title: "Checklist du projet terminé", items: [
        { id: "c1", text: "Scénario Make de réception et tri des emails" },
        { id: "c2", text: "Extraction multi-format (PDF numérique + scanné)" },
        { id: "c3", text: "Validation comptable automatique (cohérence HT/TVA/TTC)" },
        { id: "c4", text: "Affectation des comptes comptables par IA" },
        { id: "c5", text: "Saisie dans le Google Sheet + archivage Drive" },
        { id: "c6", text: "File d'attente pour les factures à vérifier (confiance < 0.8)" },
        { id: "c7", text: "Récapitulatif quotidien envoyé au cabinet" },
        { id: "c8", text: "Dashboard de suivi des métriques" },
      ]},
    ]),
    exercise: "<h3>Exercice : Construis le système de factures</h3><p>Réalise le projet complet (version simplifiée) :</p><ol><li>Crée 10 factures PDF fictives variées (fournisseurs différents, formats différents, TVA à 20% et 10%)</li><li>Crée un dossier Google Drive 'Factures entrantes' qui servira de trigger</li><li>Dans Make, crée le pipeline : détection nouveau fichier → extraction GPT-4o → validation → saisie Google Sheet</li><li>Ajoute la gestion d'erreurs : les factures avec un score < 0.8 vont dans un onglet 'À vérifier'</li><li>Teste avec les 10 factures et mesure le taux de réussite</li><li>Crée un récapitulatif automatique : combien de factures traitées, montant total, erreurs</li></ol><p><strong>Livrable :</strong> Le scénario Make fonctionnel + le Google Sheet avec les 10 factures extraites + le récapitulatif.</p>",
    quiz: [
      { type: "mcq", question: "Combien de factures le cabinet traite-t-il par mois ?", options: JSON.stringify(["50", "200", "600", "2 000"]), correctAnswer: "600", explanation: "Le cabinet gère la comptabilité de 30 PME et reçoit environ 600 factures par mois, ce qui représente un volume considérable de saisie manuelle." },
      { type: "true_false", question: "L'IA peut attribuer automatiquement le compte comptable en analysant le fournisseur et la nature de la dépense.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'IA peut apprendre les associations fournisseur → compte comptable et les appliquer automatiquement. EDF → 6061, Orange → 6262, etc. Elle s'améliore avec l'historique." },
      { type: "mcq", question: "Quel est le seuil de score de confiance pour le traitement automatique ?", options: JSON.stringify(["0.5", "0.6", "0.8", "1.0"]), correctAnswer: "0.8", explanation: "Les factures avec un score de confiance >= 0.8 sont traitées automatiquement. En dessous de 0.8, elles sont mises en file d'attente pour vérification humaine." },
      { type: "mcq", question: "Quelle économie le système apporte-t-il par rapport au traitement manuel ?", options: JSON.stringify(["20%", "50%", "80%", "100%"]), correctAnswer: "80%", explanation: "Le système réduit le coût de traitement de 80% : de 900€/mois (temps assistants) à 180€/mois (API + maintenance). Les assistants ne vérifient plus que les 10% de cas ambigus." },
      { type: "true_false", question: "Le prompt d'extraction doit demander un score de confiance par champ, pas seulement un score global.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un score par champ permet de savoir exactement quel champ est incertain. Le montant TTC peut avoir un score de 0.95 tandis que le numéro de facture n'a que 0.6. La vérification humaine est alors ciblée." },
      { type: "mcq", question: "Combien peut-on facturer ce système en setup ?", options: JSON.stringify(["500€", "2 000€", "5 000€", "50 000€"]), correctAnswer: "5 000€", explanation: "Un système complet de traitement de factures (extraction, validation, affectation comptable, archivage, monitoring) se facture environ 5 000€ en setup plus 400€/mois de maintenance." },
    ],
  },
];
