// ═══════════════════════════════════════════════════
// MODULE 13 — IA pour documents & data
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_13_DOCUMENTS_LESSONS = [
  {
    order: 1,
    module: 13,
    title: "Le traitement de documents : le service caché le plus rentable",
    slug: "traitement-documents-service-cache-rentable",
    duration: "15 min",
    description:
      "Les entreprises croulent sous les documents — factures, contrats, emails. L'IA peut tout automatiser. Découvre les cas d'usage concrets et comment pricer ce service.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Le problème invisible que personne ne résout",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>Quand on parle d'IA aux entreprises, elles pensent chatbot, génération de contenu, automatisation marketing. Mais le vrai gisement de valeur — celui où la concurrence est quasi inexistante — c'est le <strong>traitement de documents</strong>. Chaque entreprise, de la TPE au grand groupe, passe un temps délirant à lire des PDF, recopier des données de factures, trier des emails, extraire des infos de contrats. C'est répétitif, ennuyeux, et source d'erreurs. Et personne ne propose de le résoudre.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>Le chiffre qui tue :</strong> Un employé moyen passe <em>2,5 heures par jour</em> à traiter des documents manuellement. Sur une équipe de 5 personnes, ça représente plus de 12 heures par jour — soit l'équivalent de 1,5 salaire à temps plein perdu en tâches qu'une IA peut faire en quelques secondes.",
      },
      {
        id: "1-4",
        type: "heading",
        level: 2,
        text: "Les cas d'usage les plus demandés (et les plus rentables)",
      },
      {
        id: "1-5",
        type: "steps",
        steps: [
          {
            title: "1. Extraction de factures fournisseurs",
            description:
              "Le comptable reçoit 200+ factures par mois en PDF. Aujourd'hui il les ouvre une par une, recopie montant, date, fournisseur, TVA dans un tableau Excel. Avec l'IA : upload en lot → extraction automatique → export CSV ou injection directe dans le logiciel comptable. Temps gagné : 90%.",
          },
          {
            title: "2. Analyse de contrats",
            description:
              "Un cabinet juridique ou un service achats doit relire des dizaines de contrats pour identifier les clauses à risque, les échéances, les pénalités. L'IA lit le contrat, extrait les points clés dans un format structuré, et signale les anomalies. Ce qui prenait 2h prend 30 secondes.",
          },
          {
            title: "3. Tri et classification d'emails",
            description:
              "Un service client reçoit 500 emails par jour. L'IA les classe par catégorie (réclamation, demande d'info, commande, spam), extrait les données clés (numéro client, référence commande), et route vers la bonne personne. Plus de tri manuel.",
          },
          {
            title: "4. Traitement de formulaires et questionnaires",
            description:
              "Des réponses à des enquêtes, des formulaires d'inscription, des dossiers de candidature — tout ce qui arrive sous forme de document non structuré peut être transformé en données exploitables par l'IA.",
          },
          {
            title: "5. Rapports et synthèses automatiques",
            description:
              "Rapports financiers, PV de réunion, comptes-rendus médicaux — l'IA peut lire un document de 50 pages et produire une synthèse structurée avec les points clés, les chiffres importants et les actions à mener.",
          },
        ],
      },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "Pourquoi ce service est si rentable",
      },
      {
        id: "1-7",
        type: "comparison",
        headers: ["Critère", "Chatbot IA", "Traitement de documents"],
        rows: [
          {
            cells: [
              "Concurrence",
              "Très forte (tout le monde en fait)",
              "Très faible (niche technique)",
            ],
          },
          {
            cells: [
              "Valeur perçue",
              "Moyenne (gadget pour certains clients)",
              "Très élevée (gain de temps mesurable)",
            ],
          },
          {
            cells: [
              "ROI pour le client",
              "Difficile à mesurer",
              "Immédiat et chiffrable (X heures économisées)",
            ],
          },
          {
            cells: [
              "Récurrence",
              "Faible (projet one-shot)",
              "Forte (les documents arrivent chaque mois)",
            ],
          },
          {
            cells: [
              "Prix acceptable",
              "2 000-5 000 € le projet",
              "500-2 000 €/mois en retainer",
            ],
          },
        ],
      },
      {
        id: "1-8",
        type: "callout",
        variant: "tip",
        html: "<strong>La clé du pricing :</strong> Ne facture jamais au temps passé pour ce type de service. Facture à la valeur. Si ton outil fait économiser 30 heures par mois à une équipe (soit ~4 500 € de salaire chargé), facturer 1 500 €/mois est une évidence pour le client. Il économise encore 3 000 €/mois net.",
      },
      {
        id: "1-9",
        type: "heading",
        level: 2,
        text: "Le stack technique en un coup d'œil",
      },
      {
        id: "1-10",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Upload document",
            description:
              "L'utilisateur dépose un PDF, Excel, CSV ou image via une interface web ou par email",
          },
          {
            id: "n2",
            label: "Parsing du fichier",
            description:
              "pdf-parse, xlsx, papaparse ou OCR (Tesseract) selon le format du fichier",
          },
          {
            id: "n3",
            label: "Extraction IA (Claude/GPT)",
            description:
              "Le texte extrait est envoyé à un LLM avec un prompt structuré pour obtenir les données en JSON",
          },
          {
            id: "n4",
            label: "Validation & enrichissement",
            description:
              "Vérification des données extraites (format, cohérence) et enrichissement si nécessaire",
          },
          {
            id: "n5",
            label: "Stockage & export",
            description:
              "Les données structurées sont stockées en base (Supabase) et exportées au format souhaité (CSV, API, webhook)",
          },
        ],
      },
      {
        id: "1-11",
        type: "heading",
        level: 2,
        text: "Comment vendre ce service dès maintenant",
      },
      {
        id: "1-12",
        type: "text",
        html: "<p>Tu n'as pas besoin d'un produit fini pour commencer à vendre. La méthode : <strong>identifie un prospect qui manipule beaucoup de documents</strong> (comptable, cabinet juridique, service achats, RH). Pose la question magique : <em>\"Combien de temps votre équipe passe-t-elle chaque semaine à lire et recopier des données depuis des PDF ou des emails ?\"</em> La réponse est toujours choquante. Propose un test gratuit sur 10 documents réels. Le taux de conversion après une démo sur leurs propres données est supérieur à 80%.</p>",
      },
      {
        id: "1-13",
        type: "callout",
        variant: "success",
        html: "<strong>Résumé :</strong> Le traitement de documents est le service IA le plus sous-exploité et le plus rentable. Faible concurrence, ROI immédiat pour le client, forte récurrence. C'est le service parfait pour construire un revenu récurrent stable tout en résolvant un vrai problème business.",
      },
    ]),
    exercise:
      "<p><strong>Exercice :</strong> Identifie 3 entreprises dans ton réseau (ou sur LinkedIn) qui traitent un volume important de documents manuellement. Pour chacune, décris : (1) le type de documents traités, (2) le temps estimé passé chaque mois sur cette tâche, (3) une proposition de service IA avec un prix mensuel basé sur la valeur. Rédige un court message de prospection personnalisé pour l'une d'entre elles. Durée estimée : 30 min.</p>",
    quiz: [
      {
        type: "mcq",
        question:
          "Combien de temps un employé moyen passe-t-il par jour à traiter des documents manuellement, selon la leçon ?",
        options: JSON.stringify([
          "30 minutes",
          "1 heure",
          "2,5 heures",
          "4 heures",
        ]),
        correctAnswer: "2,5 heures",
        explanation:
          "Un employé moyen passe 2,5 heures par jour à traiter des documents manuellement. Sur une équipe de 5 personnes, cela représente plus de 12 heures par jour perdues en tâches automatisables.",
      },
      {
        type: "mcq",
        question:
          "Quel est le principal avantage du traitement de documents par rapport à un chatbot IA en termes de business ?",
        options: JSON.stringify([
          "Il est plus facile à développer techniquement",
          "Il a un ROI immédiat et chiffrable pour le client",
          "Il ne nécessite aucune compétence technique",
          "Il coûte moins cher à produire",
        ]),
        correctAnswer:
          "Il a un ROI immédiat et chiffrable pour le client",
        explanation:
          "Le traitement de documents offre un ROI immédiat et chiffrable : on peut mesurer précisément le nombre d'heures économisées et le traduire en euros. Contrairement à un chatbot dont la valeur est parfois perçue comme un gadget.",
      },
      {
        type: "mcq",
        question:
          "Quelle est la meilleure approche de pricing pour un service de traitement de documents IA ?",
        options: JSON.stringify([
          "Facturer au temps passé (taux horaire)",
          "Facturer un forfait unique pour le développement",
          "Facturer à la valeur (basé sur les économies du client)",
          "Facturer au nombre de documents traités",
        ]),
        correctAnswer:
          "Facturer à la valeur (basé sur les économies du client)",
        explanation:
          "On facture à la valeur, pas au temps passé. Si le service fait économiser 4 500 € de salaire par mois au client, facturer 1 500 €/mois est une évidence : le client économise encore 3 000 €/mois net. Le taux horaire sous-évalue toujours ce type de prestation.",
      },
      {
        type: "mcq",
        question:
          "Quel est le taux de conversion annoncé après une démo sur les propres documents du prospect ?",
        options: JSON.stringify(["40%", "60%", "80%", "95%"]),
        correctAnswer: "80%",
        explanation:
          "Le taux de conversion après une démo sur les propres données du client est supérieur à 80%. C'est pour cela qu'il faut proposer un test gratuit sur 10 documents réels du prospect — la preuve par l'exemple est imparable.",
      },
      {
        type: "mcq",
        question:
          "Dans le pipeline technique présenté, quelle étape vient juste après le parsing du fichier ?",
        options: JSON.stringify([
          "Le stockage en base de données",
          "L'extraction IA avec un LLM",
          "La notification au client",
          "L'export en CSV",
        ]),
        correctAnswer: "L'extraction IA avec un LLM",
        explanation:
          "Le pipeline suit cet ordre : Upload → Parsing du fichier → Extraction IA (LLM) → Validation & enrichissement → Stockage & export. Après avoir extrait le texte brut du fichier, on l'envoie au LLM pour obtenir des données structurées en JSON.",
      },
    ],
  },
  {
    order: 2,
    module: 13,
    title: "Extraire des données de PDF avec l'IA",
    slug: "extraire-donnees-pdf-ia",
    duration: "25 min",
    description:
      "Techniques pour parser des PDF (pdf-parse, pdfjs), envoyer le contenu à Claude pour extraction structurée, transformer un PDF en JSON exploitable, et gérer les PDF scannés avec l'OCR.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Comprendre les types de PDF",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Avant de se lancer dans le code, il faut comprendre un truc fondamental : <strong>tous les PDF ne sont pas égaux</strong>. Il existe deux grandes catégories, et la technique d'extraction est complètement différente pour chacune.</p>",
      },
      {
        id: "2-3",
        type: "comparison",
        headers: ["", "PDF natif (texte)", "PDF scanné (image)"],
        rows: [
          {
            cells: [
              "Origine",
              "Créé par un logiciel (Word, Excel, outil de facturation)",
              "Scan d'un document papier ou photo",
            ],
          },
          {
            cells: [
              "Contenu interne",
              "Du vrai texte sélectionnable",
              "Une image bitmap (pixels)",
            ],
          },
          {
            cells: [
              "Extraction",
              "pdf-parse ou pdfjs (rapide, fiable)",
              "OCR obligatoire (Tesseract, Google Vision)",
            ],
          },
          {
            cells: [
              "Fiabilité",
              "99%+ de précision",
              "85-95% selon la qualité du scan",
            ],
          },
          {
            cells: [
              "Coût",
              "Quasi gratuit (CPU uniquement)",
              "Plus élevé (API OCR ou GPU)",
            ],
          },
        ],
      },
      {
        id: "2-4",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce :</strong> Pour savoir si un PDF est natif ou scanné, essaie de sélectionner du texte dans un lecteur PDF. Si tu peux surligner et copier-coller du texte, c'est un PDF natif. Si le curseur ne sélectionne rien (ou sélectionne tout le document comme une image), c'est un scan.",
      },
      {
        id: "2-5",
        type: "heading",
        level: 2,
        text: "Extraire le texte d'un PDF natif avec pdf-parse",
      },
      {
        id: "2-6",
        type: "text",
        html: "<p>La librairie <code>pdf-parse</code> est la solution la plus simple et la plus fiable pour extraire du texte depuis un PDF natif en Node.js. Elle est légère, rapide, et ne nécessite aucune dépendance externe. Voici comment l'utiliser dans un projet concret :</p><pre><code>import fs from 'fs';\nimport pdfParse from 'pdf-parse';\n\nasync function extractTextFromPDF(filePath: string): Promise&lt;string&gt; {\n  const dataBuffer = fs.readFileSync(filePath);\n  const data = await pdfParse(dataBuffer);\n  \n  console.log('Nombre de pages :', data.numpages);\n  console.log('Texte extrait :', data.text.substring(0, 500));\n  \n  return data.text;\n}\n\n// Utilisation\nconst texte = await extractTextFromPDF('./facture-client.pdf');\n</code></pre><p>C'est tout. En 5 lignes de code, tu as le texte complet du PDF. Maintenant, ce texte brut n'est pas encore exploitable — c'est là que l'IA entre en jeu.</p>",
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Envoyer le texte à Claude pour extraction structurée",
      },
      {
        id: "2-8",
        type: "text",
        html: "<p>Le texte brut extrait d'un PDF est souvent un chaos de lignes, d'espaces et de retours chariot. La magie de l'IA, c'est qu'elle comprend la <em>sémantique</em> du document — elle sait que \"Montant HT : 1 250,00 €\" est un prix même si c'est sur la ligne 47 entre deux blocs de texte aléatoires. Voici le prompt type pour extraire des données de facture :</p><pre><code>import Anthropic from '@anthropic-ai/sdk';\n\nconst anthropic = new Anthropic();\n\nasync function extractInvoiceData(pdfText: string) {\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 1024,\n    messages: [{\n      role: 'user',\n      content: `Tu es un expert en extraction de données de factures.\nAnalyse le texte suivant extrait d'une facture PDF et retourne\nun JSON structuré avec exactement ces champs :\n\n- numero_facture (string)\n- date_emission (string, format YYYY-MM-DD)\n- date_echeance (string, format YYYY-MM-DD ou null)\n- fournisseur_nom (string)\n- fournisseur_siret (string ou null)\n- client_nom (string)\n- lignes (array d'objets avec: description, quantite, prix_unitaire_ht, montant_ht)\n- total_ht (number)\n- tva_taux (number, en pourcentage)\n- tva_montant (number)\n- total_ttc (number)\n- devise (string, ex: \"EUR\")\n\nRéponds UNIQUEMENT avec le JSON, sans markdown, sans explication.\n\nTexte de la facture :\n${pdfText}`\n    }]\n  });\n\n  const jsonStr = response.content[0].type === 'text'\n    ? response.content[0].text : '';\n  return JSON.parse(jsonStr);\n}\n</code></pre>",
      },
      {
        id: "2-9",
        type: "callout",
        variant: "warning",
        html: "<strong>Point critique :</strong> Toujours valider le JSON retourné par l'IA. Utilise <code>try/catch</code> autour du <code>JSON.parse()</code> et vérifie que les champs obligatoires sont présents. L'IA peut parfois ajouter des commentaires ou du texte autour du JSON, surtout si le PDF est ambigu.",
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Gérer les PDF scannés avec l'OCR",
      },
      {
        id: "2-11",
        type: "text",
        html: "<p>Quand le PDF est un scan (image), <code>pdf-parse</code> retourne une chaîne vide ou du charabia. Il faut alors passer par l'OCR (Optical Character Recognition). Deux options principales :</p><pre><code>// Option 1 : Tesseract.js (gratuit, local)\nimport Tesseract from 'tesseract.js';\n\nasync function ocrFromImage(imagePath: string): Promise&lt;string&gt; {\n  const { data: { text } } = await Tesseract.recognize(\n    imagePath,\n    'fra', // Langue française\n    { logger: m =&gt; console.log(m.status, m.progress) }\n  );\n  return text;\n}\n\n// Option 2 : Utiliser la vision de Claude directement\n// Claude peut analyser des images de documents\nasync function ocrWithClaude(imageBase64: string) {\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 2048,\n    messages: [{\n      role: 'user',\n      content: [\n        {\n          type: 'image',\n          source: {\n            type: 'base64',\n            media_type: 'image/png',\n            data: imageBase64\n          }\n        },\n        {\n          type: 'text',\n          text: 'Extrais toutes les données de cette facture en JSON structuré...'\n        }\n      ]\n    }]\n  });\n  return response;\n}\n</code></pre><p>La vision de Claude est souvent <strong>meilleure que Tesseract</strong> pour les documents commerciaux car elle comprend le contexte. Elle sait qu'un nombre à côté de \"Total TTC\" est un montant, même si l'OCR classique hésite sur un chiffre.</p>",
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Stratégie hybride : le meilleur des deux mondes",
      },
      {
        id: "2-13",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Réception du PDF",
            description: "Le fichier PDF arrive via upload ou email",
          },
          {
            id: "n2",
            label: "Tentative pdf-parse",
            description:
              "On essaie d'abord d'extraire le texte avec pdf-parse (rapide et gratuit)",
          },
          {
            id: "n3",
            label: "Texte suffisant ?",
            description:
              "Si le texte extrait contient plus de 50 caractères exploitables → PDF natif",
          },
          {
            id: "n4",
            label: "Route PDF natif",
            description:
              "Envoi du texte brut à Claude pour extraction structurée (coût minimal)",
          },
          {
            id: "n5",
            label: "Route PDF scanné",
            description:
              "Conversion en image + envoi à Claude Vision pour OCR + extraction (coût plus élevé)",
          },
          {
            id: "n6",
            label: "Données JSON structurées",
            description:
              "Dans les deux cas, le résultat est un JSON propre et validé",
          },
        ],
      },
      {
        id: "2-14",
        type: "text",
        html: "<p>Cette approche hybride est celle que tu utiliseras en production. Elle optimise les coûts (on ne paie l'OCR que quand c'est nécessaire) tout en gérant 100% des cas. Voici le code de détection :</p><pre><code>async function smartExtract(pdfPath: string) {\n  const buffer = fs.readFileSync(pdfPath);\n  const parsed = await pdfParse(buffer);\n  \n  // Heuristique : si le texte est trop court, c'est un scan\n  const isScanned = parsed.text.trim().length < 50;\n  \n  if (isScanned) {\n    console.log('PDF scanné détecté → OCR via Claude Vision');\n    const imageBase64 = convertPdfToImage(buffer); // pdf2pic ou similar\n    return await ocrWithClaude(imageBase64);\n  } else {\n    console.log('PDF natif détecté → extraction directe');\n    return await extractInvoiceData(parsed.text);\n  }\n}\n</code></pre>",
      },
      {
        id: "2-15",
        type: "callout",
        variant: "success",
        html: "<strong>Résumé :</strong> Pour extraire des données de PDF : (1) tente d'abord <code>pdf-parse</code> pour les PDF natifs, (2) bascule sur Claude Vision pour les scans, (3) dans les deux cas, utilise un prompt structuré pour obtenir du JSON propre. Toujours valider le résultat avant de le stocker.",
      },
    ]),
    exercise:
      "<p><strong>Exercice :</strong> Prends une facture PDF réelle (ou télécharge un exemple en ligne). (1) Installe pdf-parse (<code>npm install pdf-parse</code>) et extrais le texte brut. (2) Écris un prompt Claude pour extraire les données clés (numéro, date, montant HT, TVA, TTC, fournisseur). (3) Teste ton prompt et vérifie que le JSON retourné est valide et complet. (4) Gère le cas où le PDF serait un scan en ajoutant la détection automatique. Durée estimée : 45 min.</p>",
    quiz: [
      {
        type: "mcq",
        question:
          "Comment distinguer un PDF natif d'un PDF scanné ?",
        options: JSON.stringify([
          "Par la taille du fichier (les scans sont plus lourds)",
          "En essayant de sélectionner et copier du texte dans le PDF",
          "Par l'extension du fichier (.pdf vs .scan)",
          "Par la date de création du fichier",
        ]),
        correctAnswer:
          "En essayant de sélectionner et copier du texte dans le PDF",
        explanation:
          "Pour savoir si un PDF est natif ou scanné, on essaie de sélectionner du texte. Si on peut surligner et copier-coller, c'est un PDF natif (texte réel). Si le curseur ne sélectionne rien ou sélectionne tout comme une image, c'est un scan.",
      },
      {
        type: "mcq",
        question:
          "Quelle librairie Node.js est recommandée pour extraire le texte d'un PDF natif ?",
        options: JSON.stringify([
          "tesseract.js",
          "pdf-parse",
          "sharp",
          "mammoth",
        ]),
        correctAnswer: "pdf-parse",
        explanation:
          "pdf-parse est la solution la plus simple et fiable pour extraire du texte depuis un PDF natif en Node.js. Elle est légère, rapide, et ne nécessite aucune dépendance externe. Tesseract.js est pour l'OCR (PDF scannés).",
      },
      {
        type: "mcq",
        question:
          "Dans la stratégie hybride, quel seuil est utilisé pour détecter un PDF scanné ?",
        options: JSON.stringify([
          "Moins de 10 caractères extraits",
          "Moins de 50 caractères extraits",
          "Moins de 200 caractères extraits",
          "Aucun texte extrait (chaîne vide uniquement)",
        ]),
        correctAnswer: "Moins de 50 caractères extraits",
        explanation:
          "L'heuristique utilisée est : si le texte extrait par pdf-parse contient moins de 50 caractères, on considère que c'est un PDF scanné et on bascule sur l'OCR via Claude Vision. Ce seuil évite les faux positifs tout en détectant les vrais scans.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi Claude Vision est-il souvent meilleur que Tesseract pour les documents commerciaux ?",
        options: JSON.stringify([
          "Parce que Claude Vision est gratuit",
          "Parce que Claude Vision est plus rapide",
          "Parce que Claude comprend le contexte sémantique du document",
          "Parce que Tesseract ne supporte pas le français",
        ]),
        correctAnswer:
          "Parce que Claude comprend le contexte sémantique du document",
        explanation:
          "Claude Vision comprend le contexte : il sait qu'un nombre à côté de 'Total TTC' est un montant, même si un OCR classique hésite sur un chiffre. Cette compréhension sémantique donne de meilleurs résultats sur les documents commerciaux que l'OCR brut.",
      },
      {
        type: "mcq",
        question:
          "Quelle précaution est indispensable après avoir reçu le JSON de Claude ?",
        options: JSON.stringify([
          "L'envoyer directement en base de données",
          "Le valider avec try/catch et vérifier les champs obligatoires",
          "Le convertir en XML pour plus de fiabilité",
          "Le sauvegarder dans un fichier texte brut",
        ]),
        correctAnswer:
          "Le valider avec try/catch et vérifier les champs obligatoires",
        explanation:
          "Il faut toujours valider le JSON retourné par l'IA avec un try/catch autour du JSON.parse() et vérifier que les champs obligatoires sont présents. L'IA peut parfois ajouter des commentaires ou du texte autour du JSON, surtout si le PDF est ambigu.",
      },
    ],
  },
  {
    order: 3,
    module: 13,
    title: "Analyser des fichiers Excel et CSV",
    slug: "analyser-fichiers-excel-csv",
    duration: "25 min",
    description:
      "Charger un Excel/CSV, le faire analyser par Claude, générer des rapports, détecter des anomalies. Utiliser xlsx ou papaparse pour des résultats structurés.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Excel/CSV + IA = combo surpuissant",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Les entreprises vivent dans Excel. Fichiers de ventes, exports CRM, relevés bancaires, inventaires, suivi RH — tout finit en tableur. Le problème : personne n'a le temps (ni les compétences) de vraiment <em>analyser</em> ces données. Elles s'empilent dans des dossiers partagés sans jamais être exploitées. L'IA change la donne : elle peut lire un fichier de 10 000 lignes, comprendre la structure, détecter des patterns et des anomalies, et produire un rapport en langage humain — en quelques secondes.</p>",
      },
      {
        id: "3-3",
        type: "callout",
        variant: "info",
        html: "<strong>Le marché :</strong> 90% des PME utilisent encore Excel comme outil principal de gestion. Elles n'ont pas de data analyst. Toi avec une API IA, tu deviens leur data analyst on-demand pour une fraction du coût d'un salarié.",
      },
      {
        id: "3-4",
        type: "heading",
        level: 2,
        text: "Lire un fichier Excel avec xlsx",
      },
      {
        id: "3-5",
        type: "text",
        html: "<p>La librairie <code>xlsx</code> (aussi appelée SheetJS) est le standard pour lire des fichiers Excel en JavaScript/TypeScript. Elle gère les formats <code>.xlsx</code>, <code>.xls</code>, et même <code>.ods</code>. Voici comment charger et convertir un fichier Excel en données exploitables :</p><pre><code>import * as XLSX from 'xlsx';\n\nfunction readExcel(filePath: string) {\n  const workbook = XLSX.readFile(filePath);\n  \n  // Prendre la première feuille\n  const sheetName = workbook.SheetNames[0];\n  const sheet = workbook.Sheets[sheetName];\n  \n  // Convertir en JSON (tableau d'objets)\n  const data = XLSX.utils.sheet_to_json(sheet);\n  \n  console.log(`${data.length} lignes chargées`);\n  console.log('Colonnes :', Object.keys(data[0] as object));\n  console.log('Aperçu :', data.slice(0, 3));\n  \n  return data;\n}\n\n// Résultat : [{Nom: \"Dupont\", CA: 45000, Ville: \"Paris\"}, ...]\n</code></pre><p><code>sheet_to_json</code> utilise la première ligne comme en-têtes de colonnes. Chaque ligne devient un objet avec les noms de colonnes comme clés. Simple et efficace.</p>",
      },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Lire un fichier CSV avec PapaParse",
      },
      {
        id: "3-7",
        type: "text",
        html: "<p>Pour les fichiers CSV, <code>papaparse</code> est la référence. Il gère les cas tordus : séparateurs personnalisés, guillemets dans les valeurs, encodages exotiques, fichiers énormes en streaming. Voici le setup :</p><pre><code>import Papa from 'papaparse';\nimport fs from 'fs';\n\nfunction readCSV(filePath: string): Promise&lt;any[]&gt; {\n  return new Promise((resolve, reject) =&gt; {\n    const fileContent = fs.readFileSync(filePath, 'utf-8');\n    \n    Papa.parse(fileContent, {\n      header: true,       // Première ligne = en-têtes\n      dynamicTyping: true, // Convertit les nombres automatiquement\n      skipEmptyLines: true,\n      complete: (results) =&gt; {\n        console.log(`${results.data.length} lignes`);\n        console.log(`${results.errors.length} erreurs de parsing`);\n        resolve(results.data);\n      },\n      error: (err) =&gt; reject(err)\n    });\n  });\n}\n</code></pre><p>L'option <code>dynamicTyping: true</code> est importante : elle convertit automatiquement les strings en nombres quand c'est possible. Sans ça, tous tes montants seraient des strings et l'IA aurait plus de mal à calculer.</p>",
      },
      {
        id: "3-8",
        type: "heading",
        level: 2,
        text: "Envoyer les données à Claude pour analyse",
      },
      {
        id: "3-9",
        type: "text",
        html: "<p>La clé pour obtenir de bonnes analyses de Claude, c'est de <strong>structurer intelligemment les données envoyées</strong>. Un fichier de 10 000 lignes ne tient pas dans un prompt. Voici les stratégies :</p><pre><code>async function analyzeData(data: any[]) {\n  // Stratégie 1 : Résumé statistique + échantillon\n  const summary = {\n    totalRows: data.length,\n    columns: Object.keys(data[0]),\n    sample: data.slice(0, 20), // 20 premières lignes\n    stats: calculateStats(data), // Min, max, moyenne par colonne numérique\n  };\n\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 2048,\n    messages: [{\n      role: 'user',\n      content: `Tu es un data analyst expert. Analyse ces données commerciales\net fournis un rapport structuré.\n\nDonnées (résumé + échantillon) :\n${JSON.stringify(summary, null, 2)}\n\nProduis :\n1. Une synthèse exécutive (3-5 lignes)\n2. Les tendances principales identifiées\n3. Les anomalies détectées (valeurs aberrantes, incohérences)\n4. 3 recommandations concrètes basées sur les données\n\nFormat : JSON avec les clés \"synthese\", \"tendances\", \"anomalies\", \"recommandations\".`\n    }]\n  });\n\n  return JSON.parse(response.content[0].text);\n}\n\nfunction calculateStats(data: any[]) {\n  const numericCols = Object.keys(data[0]).filter(\n    k =&gt; typeof data[0][k] === 'number'\n  );\n  \n  return numericCols.reduce((acc, col) =&gt; {\n    const values = data.map(r =&gt; r[col]).filter(v =&gt; v != null);\n    acc[col] = {\n      min: Math.min(...values),\n      max: Math.max(...values),\n      avg: values.reduce((a, b) =&gt; a + b, 0) / values.length,\n      count: values.length,\n    };\n    return acc;\n  }, {} as Record&lt;string, any&gt;);\n}\n</code></pre>",
      },
      {
        id: "3-10",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention aux gros fichiers :</strong> Ne jamais envoyer un fichier Excel complet de 50 000 lignes dans un prompt. Ça coûte cher en tokens et ça dégrade la qualité de l'analyse. Envoie un résumé statistique + un échantillon représentatif. Pour les analyses qui nécessitent toutes les lignes (ex: détecter chaque doublon), traite par batch de 500 lignes.",
      },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Cas pratique : détecter les anomalies dans un fichier de ventes",
      },
      {
        id: "3-12",
        type: "text",
        html: "<p>Voici un exemple concret de détection d'anomalies sur un fichier de ventes — le type de prestation que tu peux vendre à n'importe quel directeur commercial :</p><pre><code>async function detectAnomalies(salesData: any[]) {\n  // Pré-traitement côté code (pas besoin d'IA pour ça)\n  const anomalies = {\n    doublons: findDuplicates(salesData, 'numero_facture'),\n    montantsNegatifs: salesData.filter(r =&gt; r.montant_ht &lt; 0),\n    datesInvalides: salesData.filter(r =&gt; !isValidDate(r.date)),\n    montantsAberrants: findOutliers(salesData, 'montant_ht'),\n  };\n\n  // Envoi à Claude pour interprétation\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 2048,\n    messages: [{\n      role: 'user',\n      content: `Voici les anomalies détectées dans un fichier de ventes\nde ${salesData.length} lignes :\n\n${JSON.stringify(anomalies, null, 2)}\n\nPour chaque type d'anomalie, explique :\n1. La gravité (critique / modérée / faible)\n2. La cause probable\n3. L'action corrective recommandée\n\nRéponds en JSON.`\n    }]\n  });\n\n  return JSON.parse(response.content[0].text);\n}\n\nfunction findOutliers(data: any[], col: string) {\n  const values = data.map(r =&gt; r[col]).filter(v =&gt; typeof v === 'number');\n  const mean = values.reduce((a, b) =&gt; a + b, 0) / values.length;\n  const std = Math.sqrt(\n    values.reduce((a, b) =&gt; a + (b - mean) ** 2, 0) / values.length\n  );\n  // Valeurs à plus de 3 écarts-types de la moyenne\n  return data.filter(r =&gt; Math.abs(r[col] - mean) &gt; 3 * std);\n}\n</code></pre>",
      },
      {
        id: "3-13",
        type: "heading",
        level: 3,
        text: "Générer un rapport lisible pour le client",
      },
      {
        id: "3-14",
        type: "text",
        html: "<p>Le résultat brut (JSON) n'est pas ce que tu livres au client. Tu le transformes en un rapport lisible — HTML, PDF ou email. Le plus simple est de demander à Claude de générer directement le rapport formaté :</p><pre><code>async function generateReport(analysisResult: any) {\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 4096,\n    messages: [{\n      role: 'user',\n      content: `À partir de cette analyse de données :\n${JSON.stringify(analysisResult, null, 2)}\n\nGénère un rapport professionnel en HTML avec :\n- Un titre et la date du jour\n- Une synthèse exécutive (3 phrases max)\n- Un tableau récapitulatif des chiffres clés\n- Les anomalies détectées avec code couleur (rouge/orange/vert)\n- Les recommandations numérotées\n\nStyle sobre et professionnel. Utilise du CSS inline.`\n    }]\n  });\n\n  return response.content[0].text;\n}\n</code></pre><p>Ce rapport HTML peut être envoyé par email, converti en PDF avec Puppeteer, ou affiché dans un dashboard. C'est ce livrable final qui justifie ton tarif.</p>",
      },
      {
        id: "3-15",
        type: "callout",
        variant: "success",
        html: "<strong>Résumé :</strong> Excel/CSV + IA = data analyst on-demand. Utilise <code>xlsx</code> pour les Excel, <code>papaparse</code> pour les CSV. Envoie un résumé + échantillon à Claude (jamais le fichier complet). Pré-traite les anomalies côté code, utilise l'IA pour l'interprétation et la rédaction du rapport.",
      },
    ]),
    exercise:
      "<p><strong>Exercice :</strong> (1) Télécharge un fichier CSV de données publiques (data.gouv.fr est parfait — fichier de subventions, liste d'entreprises, etc.). (2) Charge-le avec papaparse et affiche les statistiques de base (nombre de lignes, colonnes, types). (3) Envoie un résumé + échantillon à Claude et demande une analyse avec anomalies et recommandations. (4) Génère un rapport HTML à partir de la réponse. Durée estimée : 45 min.</p>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quelle librairie est recommandée pour lire des fichiers Excel (.xlsx) en JavaScript ?",
        options: JSON.stringify([
          "papaparse",
          "xlsx (SheetJS)",
          "exceljs",
          "pdf-parse",
        ]),
        correctAnswer: "xlsx (SheetJS)",
        explanation:
          "La librairie xlsx (aussi appelée SheetJS) est le standard pour lire des fichiers Excel en JavaScript/TypeScript. Elle gère les formats .xlsx, .xls, et même .ods. PapaParse est pour les CSV.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi l'option dynamicTyping: true est-elle importante dans PapaParse ?",
        options: JSON.stringify([
          "Elle accélère le parsing du fichier",
          "Elle convertit automatiquement les strings en nombres quand c'est possible",
          "Elle détecte automatiquement le séparateur (virgule, point-virgule)",
          "Elle compresse les données pour économiser de la mémoire",
        ]),
        correctAnswer:
          "Elle convertit automatiquement les strings en nombres quand c'est possible",
        explanation:
          "dynamicTyping: true convertit automatiquement les strings en nombres quand c'est possible. Sans ça, tous les montants seraient des strings ('1250' au lieu de 1250) et l'IA aurait plus de mal à faire des calculs.",
      },
      {
        type: "mcq",
        question:
          "Quelle est la meilleure stratégie pour envoyer un gros fichier Excel (50 000 lignes) à Claude ?",
        options: JSON.stringify([
          "Envoyer le fichier complet pour une analyse exhaustive",
          "Envoyer un résumé statistique + un échantillon représentatif",
          "Convertir le fichier en texte brut et envoyer tout",
          "Découper le fichier en 50 requêtes de 1 000 lignes",
        ]),
        correctAnswer:
          "Envoyer un résumé statistique + un échantillon représentatif",
        explanation:
          "On n'envoie jamais un fichier complet de 50 000 lignes dans un prompt — ça coûte cher en tokens et dégrade la qualité. On envoie un résumé statistique (min, max, moyenne par colonne) + un échantillon de 20 lignes représentatives. Pour les cas nécessitant toutes les lignes, on traite par batch.",
      },
      {
        type: "mcq",
        question:
          "Dans la détection d'anomalies, comment identifie-t-on les valeurs aberrantes (outliers) ?",
        options: JSON.stringify([
          "Les valeurs supérieures à 1 000 €",
          "Les valeurs à plus de 3 écarts-types de la moyenne",
          "Les valeurs négatives uniquement",
          "Les valeurs qui ne sont pas des nombres",
        ]),
        correctAnswer:
          "Les valeurs à plus de 3 écarts-types de la moyenne",
        explanation:
          "Les outliers sont les valeurs à plus de 3 écarts-types de la moyenne. C'est une méthode statistique standard qui identifie les valeurs aberrantes sans seuil arbitraire. Par exemple, si le montant moyen est de 500 € avec un écart-type de 200 €, tout montant au-dessus de 1 100 € ou en dessous de -100 € est signalé.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi le pré-traitement des anomalies se fait côté code (et non 100% par l'IA) ?",
        options: JSON.stringify([
          "Pour économiser des tokens et obtenir des résultats plus fiables",
          "Parce que l'IA ne sait pas détecter les doublons",
          "Parce que c'est obligatoire légalement",
          "Pour que le traitement soit plus lent mais plus précis",
        ]),
        correctAnswer:
          "Pour économiser des tokens et obtenir des résultats plus fiables",
        explanation:
          "Le pré-traitement côté code (doublons, valeurs négatives, dates invalides, outliers) est plus fiable et moins cher que de demander à l'IA de parcourir toutes les lignes. L'IA est ensuite utilisée pour ce qu'elle fait de mieux : interpréter les résultats et rédiger des recommandations en langage humain.",
      },
    ],
  },
  {
    order: 4,
    module: 13,
    title: "Pipeline de traitement automatisé",
    slug: "pipeline-traitement-automatise",
    duration: "25 min",
    description:
      "Construire un pipeline complet : upload de document, extraction IA, validation, stockage dans Supabase, et notification. Architecture event-driven.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Pourquoi tu as besoin d'un pipeline (et pas juste un script)",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Jusqu'ici, on a vu comment extraire des données d'un PDF ou analyser un Excel. Mais en production, tu ne peux pas lancer manuellement un script pour chaque fichier. Tu as besoin d'un <strong>pipeline automatisé</strong> : le client dépose un document, et tout se passe automatiquement — extraction, validation, stockage, notification. Zéro intervention humaine, sauf pour gérer les cas ambigus.</p>",
      },
      {
        id: "4-3",
        type: "callout",
        variant: "info",
        html: "<strong>Analogie :</strong> Un pipeline de documents, c'est comme une chaîne de montage en usine. Chaque poste fait une tâche précise, et la pièce (le document) avance d'un poste à l'autre automatiquement. Si un poste détecte un défaut, la pièce est sortie de la chaîne pour inspection manuelle — elle ne bloque pas les autres.",
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "Architecture du pipeline complet",
      },
      {
        id: "4-5",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "1. Upload / Ingestion",
            description:
              "Le document arrive via formulaire web, email entrant (webhook), ou API. Stocké dans Supabase Storage avec un ID unique.",
          },
          {
            id: "n2",
            label: "2. Détection du type",
            description:
              "Identification automatique : PDF natif, PDF scanné, Excel, CSV, image. Routage vers le bon parser.",
          },
          {
            id: "n3",
            label: "3. Extraction (parsing + IA)",
            description:
              "Parsing du fichier puis extraction structurée via Claude. Résultat : un objet JSON avec toutes les données.",
          },
          {
            id: "n4",
            label: "4. Validation",
            description:
              "Vérification automatique : champs obligatoires présents ? Formats corrects ? Montants cohérents ? Score de confiance > seuil ?",
          },
          {
            id: "n5",
            label: "5. Stockage",
            description:
              "Données validées insérées dans Supabase (PostgreSQL). Fichier original archivé dans Supabase Storage. Statut mis à jour.",
          },
          {
            id: "n6",
            label: "6. Notification",
            description:
              "Email/webhook au client avec le résumé des données extraites. Alerte si le document nécessite une vérification manuelle.",
          },
        ],
      },
      {
        id: "4-6",
        type: "heading",
        level: 2,
        text: "Étape 1 — Upload et stockage du fichier brut",
      },
      {
        id: "4-7",
        type: "text",
        html: "<p>Tout commence par l'arrivée du document. Voici un endpoint API qui reçoit un fichier, le stocke dans Supabase Storage, et crée un enregistrement de suivi en base :</p><pre><code>import { createClient } from '@supabase/supabase-js';\n\nconst supabase = createClient(\n  process.env.SUPABASE_URL!,\n  process.env.SUPABASE_SERVICE_KEY!\n);\n\nasync function ingestDocument(file: Buffer, filename: string, userId: string) {\n  // 1. Upload dans Supabase Storage\n  const fileId = crypto.randomUUID();\n  const storagePath = `documents/${userId}/${fileId}-${filename}`;\n  \n  const { error: uploadError } = await supabase.storage\n    .from('uploads')\n    .upload(storagePath, file, {\n      contentType: getMimeType(filename),\n    });\n  \n  if (uploadError) throw new Error(`Upload failed: ${uploadError.message}`);\n  \n  // 2. Créer l'enregistrement de suivi\n  const { data, error } = await supabase\n    .from('documents')\n    .insert({\n      id: fileId,\n      user_id: userId,\n      filename: filename,\n      storage_path: storagePath,\n      status: 'uploaded', // uploaded → processing → validated → error\n      created_at: new Date().toISOString(),\n    })\n    .select()\n    .single();\n  \n  if (error) throw new Error(`DB insert failed: ${error.message}`);\n  \n  // 3. Déclencher le traitement asynchrone\n  await processDocument(fileId);\n  \n  return data;\n}\n</code></pre>",
      },
      {
        id: "4-8",
        type: "heading",
        level: 2,
        text: "Étape 2 — Le processeur central (orchestrateur)",
      },
      {
        id: "4-9",
        type: "text",
        html: "<p>L'orchestrateur est le cerveau du pipeline. Il coordonne toutes les étapes et gère les erreurs. Voici la logique complète :</p><pre><code>async function processDocument(documentId: string) {\n  try {\n    // Mettre à jour le statut\n    await updateStatus(documentId, 'processing');\n    \n    // Récupérer le fichier\n    const doc = await getDocument(documentId);\n    const fileBuffer = await downloadFile(doc.storage_path);\n    \n    // Détecter le type et extraire\n    const fileType = detectFileType(doc.filename);\n    let extractedData;\n    \n    switch (fileType) {\n      case 'pdf':\n        extractedData = await smartExtractPDF(fileBuffer);\n        break;\n      case 'excel':\n        extractedData = await extractFromExcel(fileBuffer);\n        break;\n      case 'csv':\n        extractedData = await extractFromCSV(fileBuffer);\n        break;\n      default:\n        throw new Error(`Type de fichier non supporté : ${fileType}`);\n    }\n    \n    // Valider les données extraites\n    const validation = validateExtraction(extractedData);\n    \n    if (validation.isValid) {\n      // Stocker les données validées\n      await storeExtractedData(documentId, extractedData);\n      await updateStatus(documentId, 'validated');\n      await notifyUser(doc.user_id, 'success', extractedData);\n    } else {\n      // Nécessite une vérification manuelle\n      await updateStatus(documentId, 'needs_review', validation.issues);\n      await notifyUser(doc.user_id, 'review_needed', validation.issues);\n    }\n    \n  } catch (error) {\n    await updateStatus(documentId, 'error', { message: error.message });\n    await notifyUser(doc.user_id, 'error', { message: error.message });\n    console.error(`Erreur traitement ${documentId}:`, error);\n  }\n}\n</code></pre>",
      },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Étape 3 — Validation intelligente",
      },
      {
        id: "4-11",
        type: "text",
        html: "<p>La validation est ce qui sépare un prototype d'un outil de production. Tu ne peux pas stocker en base des données dont tu n'es pas sûr. Voici un validateur robuste :</p><pre><code>interface ValidationResult {\n  isValid: boolean;\n  confidence: number; // 0 à 1\n  issues: string[];\n}\n\nfunction validateExtraction(data: any): ValidationResult {\n  const issues: string[] = [];\n  let score = 1.0;\n  \n  // Champs obligatoires\n  const required = ['numero_facture', 'date_emission', 'total_ttc', 'fournisseur_nom'];\n  for (const field of required) {\n    if (!data[field]) {\n      issues.push(`Champ manquant : ${field}`);\n      score -= 0.25;\n    }\n  }\n  \n  // Cohérence des montants\n  if (data.total_ht && data.tva_montant && data.total_ttc) {\n    const expectedTTC = data.total_ht + data.tva_montant;\n    const diff = Math.abs(expectedTTC - data.total_ttc);\n    if (diff > 0.02) { // Tolérance de 2 centimes\n      issues.push(`Incohérence montants : HT(${data.total_ht}) + TVA(${data.tva_montant}) != TTC(${data.total_ttc})`);\n      score -= 0.2;\n    }\n  }\n  \n  // Format de date\n  if (data.date_emission && !/^\\d{4}-\\d{2}-\\d{2}$/.test(data.date_emission)) {\n    issues.push(`Format de date invalide : ${data.date_emission}`);\n    score -= 0.1;\n  }\n  \n  // SIRET (14 chiffres)\n  if (data.fournisseur_siret && !/^\\d{14}$/.test(data.fournisseur_siret)) {\n    issues.push(`Format SIRET invalide : ${data.fournisseur_siret}`);\n    score -= 0.1;\n  }\n  \n  return {\n    isValid: score >= 0.7 && issues.length <= 1,\n    confidence: Math.max(0, score),\n    issues,\n  };\n}\n</code></pre>",
      },
      {
        id: "4-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Règle d'or :</strong> Ne mets jamais un score de confiance à 100% automatiquement. Même si tout semble correct, utilise un maximum de 0.95 pour laisser une marge. Et définis toujours un seuil en dessous duquel le document passe en revue manuelle. Un bon seuil de départ est 0.7.",
      },
      {
        id: "4-13",
        type: "heading",
        level: 2,
        text: "Étape 4 — La table Supabase pour stocker les résultats",
      },
      {
        id: "4-14",
        type: "text",
        html: "<p>Voici le schéma de base de données pour le pipeline. Deux tables : une pour le suivi des documents, une pour les données extraites :</p><pre><code>-- Table de suivi des documents\nCREATE TABLE documents (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID REFERENCES auth.users(id),\n  filename TEXT NOT NULL,\n  storage_path TEXT NOT NULL,\n  file_type TEXT, -- 'pdf', 'excel', 'csv'\n  status TEXT DEFAULT 'uploaded',\n    -- 'uploaded' | 'processing' | 'validated' | 'needs_review' | 'error'\n  confidence FLOAT,\n  issues JSONB DEFAULT '[]',\n  created_at TIMESTAMPTZ DEFAULT now(),\n  processed_at TIMESTAMPTZ\n);\n\n-- Table des données extraites (exemple : factures)\nCREATE TABLE extracted_invoices (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,\n  numero_facture TEXT,\n  date_emission DATE,\n  date_echeance DATE,\n  fournisseur_nom TEXT,\n  fournisseur_siret TEXT,\n  client_nom TEXT,\n  lignes JSONB, -- Array des lignes de facture\n  total_ht DECIMAL(10,2),\n  tva_taux DECIMAL(5,2),\n  tva_montant DECIMAL(10,2),\n  total_ttc DECIMAL(10,2),\n  devise TEXT DEFAULT 'EUR',\n  raw_extraction JSONB, -- Le JSON brut retourné par l'IA\n  created_at TIMESTAMPTZ DEFAULT now()\n);\n\n-- Index pour les requêtes fréquentes\nCREATE INDEX idx_documents_user ON documents(user_id);\nCREATE INDEX idx_documents_status ON documents(status);\nCREATE INDEX idx_invoices_date ON extracted_invoices(date_emission);\n</code></pre>",
      },
      {
        id: "4-15",
        type: "callout",
        variant: "success",
        html: "<strong>Résumé :</strong> Un pipeline de production suit 6 étapes : ingestion → détection du type → extraction IA → validation → stockage → notification. Chaque étape est isolée, gère ses erreurs, et met à jour le statut du document. La validation avec score de confiance est indispensable pour filtrer les résultats douteux.",
      },
    ]),
    exercise:
      "<p><strong>Exercice :</strong> (1) Crée les deux tables Supabase (documents + extracted_invoices) dans ton projet. (2) Code la fonction <code>ingestDocument</code> qui upload un fichier dans Supabase Storage et crée l'enregistrement de suivi. (3) Code la fonction <code>validateExtraction</code> avec au moins 4 règles de validation. (4) Teste le pipeline complet avec un fichier PDF de facture. Durée estimée : 60 min.</p>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quel est l'ordre correct des étapes du pipeline de traitement ?",
        options: JSON.stringify([
          "Upload → Extraction → Stockage → Validation → Notification",
          "Upload → Détection du type → Extraction → Validation → Stockage → Notification",
          "Détection → Upload → Extraction → Notification → Stockage",
          "Upload → Stockage → Extraction → Notification → Validation",
        ]),
        correctAnswer:
          "Upload → Détection du type → Extraction → Validation → Stockage → Notification",
        explanation:
          "L'ordre correct est : Upload/Ingestion → Détection du type de fichier → Extraction (parsing + IA) → Validation des données → Stockage en base → Notification. La validation AVANT le stockage est cruciale pour ne pas polluer la base avec des données incorrectes.",
      },
      {
        type: "mcq",
        question:
          "Quel seuil de confiance est recommandé pour basculer un document en revue manuelle ?",
        options: JSON.stringify(["0.3", "0.5", "0.7", "0.9"]),
        correctAnswer: "0.7",
        explanation:
          "Un seuil de confiance de 0.7 est recommandé pour filtrer les documents qui nécessitent une vérification manuelle. En dessous de 0.7, trop de données incertaines risquent de passer. Au-dessus de 0.9, trop de documents valides seraient bloqués inutilement.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi stocker le JSON brut retourné par l'IA (raw_extraction) dans la table ?",
        options: JSON.stringify([
          "Pour économiser de l'espace de stockage",
          "Pour pouvoir auditer, déboguer et ré-extraire sans relancer l'IA",
          "Parce que Supabase exige au moins une colonne JSONB",
          "Pour accélérer les requêtes SQL",
        ]),
        correctAnswer:
          "Pour pouvoir auditer, déboguer et ré-extraire sans relancer l'IA",
        explanation:
          "Stocker le JSON brut de l'IA permet d'auditer les extractions, de déboguer les erreurs, et de ré-extraire des champs supplémentaires sans relancer l'IA (et donc sans re-payer les tokens). C'est une bonne pratique de traçabilité indispensable en production.",
      },
      {
        type: "mcq",
        question:
          "Dans la validation, quelle tolérance est appliquée pour vérifier la cohérence HT + TVA = TTC ?",
        options: JSON.stringify([
          "0 centime (exacte)",
          "2 centimes",
          "1 euro",
          "5%",
        ]),
        correctAnswer: "2 centimes",
        explanation:
          "Une tolérance de 2 centimes (0.02 €) est appliquée pour les arrondis. Les systèmes de facturation arrondissent parfois différemment les lignes individuelles, créant un écart de 1 ou 2 centimes entre la somme calculée et le total affiché. C'est normal et ne doit pas bloquer la validation.",
      },
      {
        type: "mcq",
        question:
          "Que se passe-t-il quand le pipeline détecte une erreur pendant le traitement d'un document ?",
        options: JSON.stringify([
          "Le pipeline s'arrête et bloque tous les documents suivants",
          "L'erreur est ignorée et le document est marqué comme validé",
          "Le statut passe à 'error', l'erreur est loguée, et l'utilisateur est notifié",
          "Le document est supprimé automatiquement",
        ]),
        correctAnswer:
          "Le statut passe à 'error', l'erreur est loguée, et l'utilisateur est notifié",
        explanation:
          "En cas d'erreur, le document est marqué avec le statut 'error', le message d'erreur est loggé, et l'utilisateur reçoit une notification. Le pipeline continue de fonctionner pour les autres documents — un document en erreur ne bloque jamais la chaîne.",
      },
    ],
  },
  {
    order: 5,
    module: 13,
    title: "Atelier : système de traitement de factures",
    slug: "atelier-systeme-traitement-factures",
    duration: "30 min",
    description:
      "Construire un outil complet pour un comptable : upload de factures PDF, extraction automatique (montant, date, fournisseur, TVA), stockage dans une base, tableau de bord de suivi.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Ce que tu vas construire",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Dans cet atelier, tu vas créer un <strong>système complet de traitement de factures</strong> — le type d'outil que tu peux vendre entre 3 000 et 8 000 € à un cabinet comptable ou un service financier. Le système permettra à un comptable de déposer des factures PDF, et en retour il obtiendra automatiquement toutes les données extraites dans un tableau de bord propre.</p>",
      },
      {
        id: "5-3",
        type: "checklist",
        title: "Fonctionnalités du système",
        items: [
          {
            id: "c1",
            text: "Upload de factures PDF (drag & drop ou sélection de fichier)",
          },
          {
            id: "c2",
            text: "Extraction automatique via Claude : numéro, date, fournisseur, montants HT/TVA/TTC",
          },
          {
            id: "c3",
            text: "Validation des données avec score de confiance",
          },
          {
            id: "c4",
            text: "Stockage structuré dans Supabase (documents + données extraites)",
          },
          {
            id: "c5",
            text: "Tableau de bord avec liste des factures, filtres par date/fournisseur, statut de traitement",
          },
          {
            id: "c6",
            text: "Export CSV des données extraites",
          },
          {
            id: "c7",
            text: "Gestion des erreurs et file de vérification manuelle",
          },
        ],
      },
      {
        id: "5-4",
        type: "heading",
        level: 2,
        text: "Étape 1 — Le composant d'upload",
      },
      {
        id: "5-5",
        type: "text",
        html: "<p>On commence par le front-end : un composant React qui permet de déposer des fichiers PDF. Le drag & drop est essentiel pour l'UX — personne ne veut cliquer sur \"parcourir\" 200 fois par mois.</p><pre><code>'use client';\nimport { useState, useCallback } from 'react';\nimport { useDropzone } from 'react-dropzone';\n\nexport function InvoiceUploader() {\n  const [uploading, setUploading] = useState(false);\n  const [results, setResults] = useState&lt;any[]&gt;([]);\n\n  const onDrop = useCallback(async (acceptedFiles: File[]) =&gt; {\n    setUploading(true);\n    \n    for (const file of acceptedFiles) {\n      try {\n        const formData = new FormData();\n        formData.append('file', file);\n        \n        const res = await fetch('/api/invoices/upload', {\n          method: 'POST',\n          body: formData,\n        });\n        \n        const data = await res.json();\n        setResults(prev =&gt; [...prev, { filename: file.name, ...data }]);\n      } catch (error) {\n        setResults(prev =&gt; [...prev, {\n          filename: file.name,\n          status: 'error',\n          message: 'Erreur lors de l\\'upload'\n        }]);\n      }\n    }\n    \n    setUploading(false);\n  }, []);\n\n  const { getRootProps, getInputProps, isDragActive } = useDropzone({\n    onDrop,\n    accept: { 'application/pdf': ['.pdf'] },\n    maxSize: 10 * 1024 * 1024, // 10 MB max\n  });\n\n  return (\n    &lt;div&gt;\n      &lt;div {...getRootProps()} className=\"border-2 border-dashed rounded-xl\n        p-12 text-center cursor-pointer hover:border-blue-500\n        transition-colors\"&gt;\n        &lt;input {...getInputProps()} /&gt;\n        {isDragActive ? (\n          &lt;p className=\"text-blue-600 font-medium\"&gt;\n            Lache tes factures ici...\n          &lt;/p&gt;\n        ) : (\n          &lt;div&gt;\n            &lt;p className=\"text-gray-600\"&gt;\n              Glisse tes factures PDF ici, ou clique pour en selectionner\n            &lt;/p&gt;\n            &lt;p className=\"text-sm text-gray-400 mt-2\"&gt;PDF uniquement, 10 MB max&lt;/p&gt;\n          &lt;/div&gt;\n        )}\n      &lt;/div&gt;\n      {uploading &amp;&amp; &lt;p className=\"mt-4 text-blue-600\"&gt;Traitement en cours...&lt;/p&gt;}\n    &lt;/div&gt;\n  );\n}\n</code></pre>",
      },
      {
        id: "5-6",
        type: "heading",
        level: 2,
        text: "Étape 2 — L'API route de traitement",
      },
      {
        id: "5-7",
        type: "text",
        html: "<p>Le backend reçoit le fichier, le stocke, l'extrait et retourne les données structurées. Voici la route API Next.js complète :</p><pre><code>// app/api/invoices/upload/route.ts\nimport { NextRequest, NextResponse } from 'next/server';\nimport { createClient } from '@supabase/supabase-js';\nimport pdfParse from 'pdf-parse';\nimport Anthropic from '@anthropic-ai/sdk';\n\nconst supabase = createClient(\n  process.env.SUPABASE_URL!,\n  process.env.SUPABASE_SERVICE_KEY!\n);\nconst anthropic = new Anthropic();\n\nexport async function POST(req: NextRequest) {\n  const formData = await req.formData();\n  const file = formData.get('file') as File;\n  \n  if (!file || !file.name.endsWith('.pdf')) {\n    return NextResponse.json(\n      { error: 'Fichier PDF requis' },\n      { status: 400 }\n    );\n  }\n  \n  const buffer = Buffer.from(await file.arrayBuffer());\n  const docId = crypto.randomUUID();\n  \n  // 1. Stocker le fichier\n  await supabase.storage\n    .from('invoices')\n    .upload(`${docId}.pdf`, buffer, { contentType: 'application/pdf' });\n  \n  // 2. Extraire le texte\n  const parsed = await pdfParse(buffer);\n  \n  // 3. Extraction IA\n  const extraction = await extractWithClaude(parsed.text);\n  \n  // 4. Valider\n  const validation = validateInvoice(extraction);\n  \n  // 5. Stocker en base\n  await supabase.from('documents').insert({\n    id: docId,\n    filename: file.name,\n    status: validation.isValid ? 'validated' : 'needs_review',\n    confidence: validation.confidence,\n  });\n  \n  await supabase.from('extracted_invoices').insert({\n    document_id: docId,\n    ...extraction,\n    raw_extraction: extraction,\n  });\n  \n  return NextResponse.json({\n    documentId: docId,\n    status: validation.isValid ? 'validated' : 'needs_review',\n    confidence: validation.confidence,\n    data: extraction,\n    issues: validation.issues,\n  });\n}\n\nasync function extractWithClaude(text: string) {\n  const response = await anthropic.messages.create({\n    model: 'claude-sonnet-4-20250514',\n    max_tokens: 1024,\n    messages: [{\n      role: 'user',\n      content: `Extrais les donnees de cette facture en JSON.\nChamps : numero_facture, date_emission (YYYY-MM-DD),\nfournisseur_nom, fournisseur_siret, client_nom,\nlignes (array: description, quantite, prix_unitaire_ht, montant_ht),\ntotal_ht, tva_taux, tva_montant, total_ttc, devise.\nJSON uniquement, sans markdown.\n\n${text}`\n    }]\n  });\n  return JSON.parse(response.content[0].text);\n}\n</code></pre>",
      },
      {
        id: "5-8",
        type: "heading",
        level: 2,
        text: "Étape 3 — Le tableau de bord de suivi",
      },
      {
        id: "5-9",
        type: "text",
        html: "<p>Le tableau de bord est ce que le comptable voit au quotidien. Il affiche la liste des factures traitées avec leur statut, les données extraites, et des filtres pour retrouver rapidement une facture :</p><pre><code>'use client';\nimport { useEffect, useState } from 'react';\n\ninterface Invoice {\n  id: string;\n  filename: string;\n  status: 'validated' | 'needs_review' | 'error';\n  confidence: number;\n  fournisseur_nom: string;\n  date_emission: string;\n  total_ttc: number;\n  created_at: string;\n}\n\nexport function InvoiceDashboard() {\n  const [invoices, setInvoices] = useState&lt;Invoice[]&gt;([]);\n  const [filter, setFilter] = useState({ status: 'all', search: '' });\n\n  useEffect(() =&gt; {\n    fetchInvoices();\n  }, [filter]);\n\n  async function fetchInvoices() {\n    const params = new URLSearchParams();\n    if (filter.status !== 'all') params.set('status', filter.status);\n    if (filter.search) params.set('search', filter.search);\n    \n    const res = await fetch(`/api/invoices?${params}`);\n    const data = await res.json();\n    setInvoices(data);\n  }\n\n  const statusBadge = (status: string) =&gt; {\n    const colors = {\n      validated: 'bg-green-100 text-green-800',\n      needs_review: 'bg-yellow-100 text-yellow-800',\n      error: 'bg-red-100 text-red-800',\n    };\n    return colors[status] || 'bg-gray-100';\n  };\n\n  const totalTTC = invoices\n    .filter(i =&gt; i.status === 'validated')\n    .reduce((sum, i) =&gt; sum + (i.total_ttc || 0), 0);\n\n  return (\n    &lt;div className=\"space-y-6\"&gt;\n      {/* Stats */}\n      &lt;div className=\"grid grid-cols-3 gap-4\"&gt;\n        &lt;div className=\"bg-white p-4 rounded-lg shadow\"&gt;\n          &lt;p className=\"text-sm text-gray-500\"&gt;Factures traitees&lt;/p&gt;\n          &lt;p className=\"text-2xl font-bold\"&gt;{invoices.length}&lt;/p&gt;\n        &lt;/div&gt;\n        &lt;div className=\"bg-white p-4 rounded-lg shadow\"&gt;\n          &lt;p className=\"text-sm text-gray-500\"&gt;A verifier&lt;/p&gt;\n          &lt;p className=\"text-2xl font-bold text-yellow-600\"&gt;\n            {invoices.filter(i =&gt; i.status === 'needs_review').length}\n          &lt;/p&gt;\n        &lt;/div&gt;\n        &lt;div className=\"bg-white p-4 rounded-lg shadow\"&gt;\n          &lt;p className=\"text-sm text-gray-500\"&gt;Total TTC valide&lt;/p&gt;\n          &lt;p className=\"text-2xl font-bold\"&gt;\n            {totalTTC.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}\n          &lt;/p&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n\n      {/* Table */}\n      &lt;table className=\"w-full bg-white rounded-lg shadow\"&gt;\n        &lt;thead className=\"bg-gray-50\"&gt;\n          &lt;tr&gt;\n            &lt;th className=\"p-3 text-left\"&gt;Fichier&lt;/th&gt;\n            &lt;th className=\"p-3 text-left\"&gt;Fournisseur&lt;/th&gt;\n            &lt;th className=\"p-3 text-left\"&gt;Date&lt;/th&gt;\n            &lt;th className=\"p-3 text-right\"&gt;Total TTC&lt;/th&gt;\n            &lt;th className=\"p-3 text-center\"&gt;Confiance&lt;/th&gt;\n            &lt;th className=\"p-3 text-center\"&gt;Statut&lt;/th&gt;\n          &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n          {invoices.map(inv =&gt; (\n            &lt;tr key={inv.id} className=\"border-t hover:bg-gray-50\"&gt;\n              &lt;td className=\"p-3\"&gt;{inv.filename}&lt;/td&gt;\n              &lt;td className=\"p-3\"&gt;{inv.fournisseur_nom}&lt;/td&gt;\n              &lt;td className=\"p-3\"&gt;{inv.date_emission}&lt;/td&gt;\n              &lt;td className=\"p-3 text-right font-mono\"&gt;\n                {inv.total_ttc?.toLocaleString('fr-FR')} EUR\n              &lt;/td&gt;\n              &lt;td className=\"p-3 text-center\"&gt;\n                {Math.round(inv.confidence * 100)}%\n              &lt;/td&gt;\n              &lt;td className=\"p-3 text-center\"&gt;\n                &lt;span className={`px-2 py-1 rounded-full text-xs ${statusBadge(inv.status)}`}&gt;\n                  {inv.status === 'validated' ? 'Valide' :\n                   inv.status === 'needs_review' ? 'A verifier' : 'Erreur'}\n                &lt;/span&gt;\n              &lt;/td&gt;\n            &lt;/tr&gt;\n          ))}\n        &lt;/tbody&gt;\n      &lt;/table&gt;\n    &lt;/div&gt;\n  );\n}\n</code></pre>",
      },
      {
        id: "5-10",
        type: "heading",
        level: 2,
        text: "Étape 4 — L'export CSV",
      },
      {
        id: "5-11",
        type: "text",
        html: "<p>Le comptable aura besoin d'exporter les données pour les importer dans son logiciel comptable. Voici une fonction d'export CSV propre :</p><pre><code>// app/api/invoices/export/route.ts\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const { data: invoices } = await supabase\n    .from('extracted_invoices')\n    .select('*')\n    .order('date_emission', { ascending: false });\n\n  if (!invoices || invoices.length === 0) {\n    return NextResponse.json({ error: 'Aucune facture' }, { status: 404 });\n  }\n\n  // Construire le CSV\n  const headers = [\n    'Numero', 'Date emission', 'Fournisseur', 'SIRET',\n    'Total HT', 'TVA %', 'TVA montant', 'Total TTC', 'Devise'\n  ];\n  \n  const rows = invoices.map(inv =&gt; [\n    inv.numero_facture,\n    inv.date_emission,\n    inv.fournisseur_nom,\n    inv.fournisseur_siret || '',\n    inv.total_ht,\n    inv.tva_taux,\n    inv.tva_montant,\n    inv.total_ttc,\n    inv.devise,\n  ].map(v =&gt; `\"${String(v ?? '').replace(/\"/g, '\"\"')}\"`).join(';'));\n  \n  const csv = [headers.join(';'), ...rows].join('\\n');\n  \n  return new NextResponse(csv, {\n    headers: {\n      'Content-Type': 'text/csv; charset=utf-8',\n      'Content-Disposition': 'attachment; filename=factures-export.csv',\n    },\n  });\n}\n</code></pre><p>Note le séparateur <code>;</code> (point-virgule) au lieu de la virgule — c'est le standard en France pour les CSV, car la virgule est utilisée comme séparateur décimal.</p>",
      },
      {
        id: "5-12",
        type: "heading",
        level: 2,
        text: "Comment pricer ce projet",
      },
      {
        id: "5-13",
        type: "comparison",
        headers: ["Formule", "Contenu", "Prix suggéré"],
        rows: [
          {
            cells: [
              "Setup initial",
              "Développement du système complet (upload, extraction, dashboard, export)",
              "3 000 - 5 000 €",
            ],
          },
          {
            cells: [
              "Retainer mensuel",
              "Maintenance, support, coûts API Claude, améliorations",
              "500 - 1 000 €/mois",
            ],
          },
          {
            cells: [
              "Option premium",
              "Intégration directe avec le logiciel comptable (Sage, Cegid, etc.)",
              "+ 2 000 - 4 000 €",
            ],
          },
          {
            cells: [
              "Option multi-docs",
              "Extension à d'autres types de documents (contrats, bons de commande)",
              "+ 1 500 € par type",
            ],
          },
        ],
      },
      {
        id: "5-14",
        type: "callout",
        variant: "tip",
        html: "<strong>Argument de vente :</strong> Un comptable qui traite 200 factures/mois manuellement y passe environ 40 heures (12 min par facture en moyenne). Ton outil ramène ça à 5 heures (vérification des cas douteux uniquement). Tu fais économiser 35 heures par mois. A 30 €/h chargé, c'est 1 050 € d'économie mensuelle. Ton retainer de 500 €/mois se rentabilise dès le premier mois.",
      },
      {
        id: "5-15",
        type: "callout",
        variant: "success",
        html: "<strong>Bravo !</strong> Tu as maintenant tous les éléments pour construire et vendre un système de traitement de documents IA. Ce module t'a donné : la vision business (leçon 1), les techniques d'extraction PDF (leçon 2), l'analyse Excel/CSV (leçon 3), l'architecture pipeline (leçon 4), et un atelier concret de A à Z (leçon 5). Le marché est énorme et la concurrence quasi inexistante. A toi de jouer.",
      },
    ]),
    exercise:
      "<p><strong>Exercice final :</strong> Construis le système complet de traitement de factures en suivant les 4 étapes de cet atelier. (1) Crée le composant d'upload avec react-dropzone. (2) Code la route API avec extraction Claude + validation. (3) Construis le tableau de bord avec les 3 cartes de stats et la table de factures. (4) Ajoute l'export CSV avec séparateur point-virgule. Teste avec au moins 3 factures PDF différentes. Bonus : ajoute un filtre par fournisseur et par plage de dates sur le dashboard. Durée estimée : 2-3 heures.</p>",
    quiz: [
      {
        type: "mcq",
        question:
          "Quel composant React est utilisé pour le drag & drop de fichiers ?",
        options: JSON.stringify([
          "react-file-upload",
          "react-dropzone",
          "formidable",
          "multer",
        ]),
        correctAnswer: "react-dropzone",
        explanation:
          "react-dropzone est la librairie standard pour le drag & drop de fichiers en React. Elle fournit les hooks getRootProps et getInputProps pour créer une zone de dépôt facilement. Multer et formidable sont des librairies backend Node.js.",
      },
      {
        type: "mcq",
        question:
          "Pourquoi utilise-t-on le point-virgule comme séparateur dans le CSV exporté ?",
        options: JSON.stringify([
          "Parce que c'est plus lisible visuellement",
          "Parce que la virgule est le séparateur décimal en France",
          "Parce que Excel ne supporte pas la virgule",
          "Parce que c'est le standard international ISO",
        ]),
        correctAnswer:
          "Parce que la virgule est le séparateur décimal en France",
        explanation:
          "En France, la virgule est utilisée comme séparateur décimal (1 250,50 € au lieu de 1,250.50 $). Utiliser la virgule comme séparateur CSV créerait des conflits avec les montants. Le point-virgule est donc le standard français pour les fichiers CSV.",
      },
      {
        type: "mcq",
        question:
          "Combien de temps un comptable économise-t-il par mois avec le système automatisé (sur 200 factures) ?",
        options: JSON.stringify([
          "10 heures",
          "20 heures",
          "35 heures",
          "40 heures",
        ]),
        correctAnswer: "35 heures",
        explanation:
          "Le traitement manuel de 200 factures prend environ 40 heures (12 min par facture). Avec le système automatisé, le comptable ne passe plus que 5 heures sur la vérification des cas douteux. Soit une économie de 35 heures par mois — plus d'une semaine de travail.",
      },
      {
        type: "mcq",
        question:
          "Quel prix de setup initial est suggéré pour ce type de système ?",
        options: JSON.stringify([
          "500 - 1 000 €",
          "1 000 - 2 000 €",
          "3 000 - 5 000 €",
          "10 000 - 15 000 €",
        ]),
        correctAnswer: "3 000 - 5 000 €",
        explanation:
          "Le setup initial (développement complet du système : upload, extraction, dashboard, export) est pricé entre 3 000 et 5 000 €. Auquel s'ajoute un retainer mensuel de 500 à 1 000 € pour la maintenance, le support et les coûts API.",
      },
      {
        type: "mcq",
        question:
          "Quelle est la taille maximale de fichier configurée dans le composant d'upload ?",
        options: JSON.stringify(["1 MB", "5 MB", "10 MB", "50 MB"]),
        correctAnswer: "10 MB",
        explanation:
          "La taille maximale est configurée à 10 MB (10 * 1024 * 1024 octets) dans la configuration de react-dropzone. C'est suffisant pour la grande majorité des factures PDF. Au-delà, le fichier est probablement un scan haute résolution qui pourrait être optimisé.",
      },
    ],
  },
];
