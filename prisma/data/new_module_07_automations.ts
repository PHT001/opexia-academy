// Module 7 : Automatisations avec Claude Code (7 leçons)
// Module automatisations — 100% code-based automations (scripts Node.js, API custom, Claude Code)

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_7_LESSONS = [
  // ═══════════════════════════════════════════════════
  // LEÇON 1 : Automatiser un business avec du code IA
  // ═══════════════════════════════════════════════════
  {
    order: 1,
    module: 7,
    title: "Automatiser un business avec du code IA",
    slug: "automatiser-business-code-ia",
    duration: "20 min",
    description:
      "Pourquoi les automatisations codées sont supérieures : plus flexibles, sans abonnement, illimitées.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi coder ses automatisations change tout",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>Tu as probablement déjà entendu parler d'automatisations pour les entreprises. Le problème, c'est que la plupart des gens associent ça à des interfaces visuelles avec des blocs qu'on glisse-dépose. C'est joli en apparence, mais c'est une impasse quand tu veux aller plus loin. Les limites arrivent vite : restrictions sur le nombre d'exécutions, abonnements mensuels qui grimpent, et surtout, tu dépends d'un outil tiers qui peut changer ses prix ou fermer du jour au lendemain.</p>",
      },
      {
        id: "1-3",
        type: "text",
        html: "<p>Avec Claude Code, tu écris tes propres scripts d'automatisation. Et la beauté de la chose, c'est que tu n'as même pas besoin d'être développeur. Tu décris ce que tu veux en français, Claude Code génère le code, et tu as une automatisation sur mesure — sans frais mensuels, sans limites artificielles, et avec un contrôle total sur chaque détail.</p>",
      },
      { id: "1-dia1", type: "heading", level: 3, text: "C'est quoi un script concrètement ?" },
      { id: "1-dia1d", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Ton fichier .ts ou .js", description: "Un simple fichier texte avec des instructions que l'ordinateur exécute ligne par ligne" },
        { id: "n2", label: "Node.js (le moteur)", description: "Le programme qui lit et exécute ton fichier. Comme un lecteur DVD qui lit un DVD." },
        { id: "n3", label: "Ton ordinateur ou un serveur", description: "La machine qui fait tourner Node.js. Peut être ton PC ou un serveur à 5 euros/mois." },
      ]},
      { id: "1-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> un script, c'est comme une recette de cuisine. Tu écris les étapes (le code), et Node.js est le cuisinier qui les exécute dans l'ordre." },
      {
        id: "1-4",
        type: "callout",
        variant: "tip",
        title: "Le vrai avantage compétitif",
        html: "<p>Un script que tu possèdes tourne indéfiniment sur un serveur à 5€/mois. Aucun abonnement par workflow, aucune limite d'exécution. Un seul VPS peut faire tourner des dizaines d'automatisations simultanément.</p>",
      },
      { id: "1-dia2", type: "heading", level: 3, text: "C'est quoi un VPS concrètement ?" },
      { id: "1-dia2d", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Ton ordinateur", description: "Il s'éteint quand tu fermes le capot. Tes scripts s'arrêtent. Il dort quand tu dors." },
        { id: "n2", label: "Un VPS (serveur distant)", description: "Un mini-ordinateur loué dans un datacenter. Il tourne 24h/24, 7j/7, même quand tu dors. Dès 5 euros/mois." },
      ]},
      { id: "1-dia2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> un VPS, c'est comme louer un petit bureau que tu ne fermes jamais. Ton robot (le script) travaille dedans en permanence sans que tu aies besoin d'être là." },
      {
        id: "1-5",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "Code vs no-code : la comparaison honnête",
      },
      {
        id: "1-7",
        type: "comparison",
        headers: ["Critère", "Automatisation codée", "Outils visuels no-code"],
        rows: [
          { cells: ["Coût mensuel", "5-10€ (hébergement VPS)", "50-300€+ selon le volume"] },
          { cells: ["Limites d'exécution", "Aucune", "500 à 10 000 selon le plan"] },
          { cells: ["Personnalisation", "Illimitée, code sur mesure", "Limitée aux connecteurs existants"] },
          { cells: ["Propriété", "Tu possèdes tout le code", "Verrouillé dans la plateforme"] },
          { cells: ["Scalabilité", "Linéaire (ajoute un serveur)", "Exponentielle en coût"] },
          { cells: ["Courbe d'apprentissage", "Plus élevée au départ", "Rapide pour les bases"] },
        ],
      },
      {
        id: "1-8",
        type: "heading",
        level: 2,
        text: "Le changement de mentalité nécessaire",
      },
      {
        id: "1-9",
        type: "text",
        html: "<p>Le mindset à adopter est simple : chaque tâche que tu fais plus de deux fois mérite d'être automatisée. Et avec Claude Code, automatiser ne veut plus dire \"apprendre à coder pendant 6 mois\". Ça veut dire : décrire ce que tu veux, laisser Claude générer le script, le tester, l'ajuster, et le déployer. En une après-midi, tu peux créer une automatisation qui te fera gagner des heures chaque semaine.</p>",
      },
      {
        id: "1-10",
        type: "steps",
        steps: [
          {
            title: "Identifie la tâche répétitive",
            description:
              "Note toutes les tâches que tu fais manuellement : envoi d'emails, tri de fichiers, mise à jour de données, génération de rapports...",
            icon: "🔍",
          },
          {
            title: "Décris le processus en français",
            description:
              "Écris étape par étape ce que tu fais. Par exemple : \"Chaque lundi, je récupère les nouvelles inscriptions, je leur envoie un email de bienvenue, et je mets à jour mon tableau de suivi.\"",
            icon: "📝",
          },
          {
            title: "Demande à Claude Code de coder",
            description:
              "Donne ta description à Claude Code. Il génère un script Node.js complet que tu peux exécuter immédiatement.",
            icon: "🤖",
          },
          {
            title: "Teste et déploie",
            description:
              "Exécute le script localement, vérifie les résultats, puis déploie-le sur un serveur pour qu'il tourne automatiquement.",
            icon: "🚀",
          },
        ],
      },
      {
        id: "1-11",
        type: "separator",
        style: "line",
      },
      {
        id: "1-12",
        type: "heading",
        level: 2,
        text: "Les 5 catégories d'automatisations les plus rentables",
      },
      {
        id: "1-13",
        type: "text",
        html: "<p>Voici les types d'automatisations que tes futurs clients vont te demander le plus souvent :</p><ul><li><strong>Communication automatisée</strong> : emails de suivi, relances, notifications Slack/Discord — tout ce qui concerne l'envoi de messages au bon moment.</li><li><strong>Traitement de données</strong> : import/export de fichiers CSV, transformation de données, synchronisation entre systèmes.</li><li><strong>Surveillance et monitoring</strong> : suivi de prix concurrents, alertes de disponibilité, veille de contenu.</li><li><strong>Génération de contenu</strong> : rapports automatiques, résumés quotidiens, posts planifiés.</li><li><strong>Intégrations sur mesure</strong> : connecter deux outils qui n'ont pas de connexion native, synchroniser des bases de données.</li></ul>",
      },
      {
        id: "1-14",
        type: "quiz-inline",
        question:
          "Quel est le principal avantage d'une automatisation codée par rapport à un outil visuel no-code ?",
        options: [
          { id: "a", text: "C'est toujours plus rapide à mettre en place" },
          { id: "b", text: "Tu possèdes le code, sans limites d'exécution ni abonnement croissant" },
          { id: "c", text: "Le code est toujours plus fiable que le no-code" },
          { id: "d", text: "Tu n'as besoin d'aucune connaissance technique" },
        ],
        correctId: "b",
        explanation:
          "L'avantage fondamental est la propriété et l'absence de limites. Tu contrôles tout, tu ne paies qu'un hébergement fixe, et tu peux personnaliser chaque détail sans être contraint par les fonctionnalités d'une plateforme tierce.",
      },
      {
        id: "1-15",
        type: "checklist",
        title: "Avant de passer à la suite",
        items: [
          { id: "c1", text: "J'ai listé au moins 5 tâches répétitives dans mon business" },
          { id: "c2", text: "J'ai compris pourquoi posséder le code est un avantage stratégique" },
          { id: "c3", text: "J'ai installé Node.js sur mon ordinateur (node --version fonctionne)" },
          { id: "c4", text: "J'ai accès à Claude Code dans mon terminal" },
        ],
      },
    ]),
    exercise:
      "Liste 10 tâches répétitives que tu fais chaque semaine dans ton business. Pour chacune, estime le temps que tu y passes et classe-les par potentiel d'automatisation (facile / moyen / difficile). Choisis les 3 plus faciles — ce sont tes premiers projets d'automatisation.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 2 : Scripts Node.js — tes premiers automatismes
  // ═══════════════════════════════════════════════════
  {
    order: 2,
    module: 7,
    title: "Scripts Node.js : tes premiers automatismes",
    slug: "scripts-nodejs-premiers-automatismes",
    duration: "30 min",
    description:
      "Créer des scripts simples avec Claude Code : traitement de fichiers, transformation de données, tâches planifiées.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Ton premier script d'automatisation",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>On va rentrer dans le concret immédiatement. Un script Node.js, c'est simplement un fichier texte avec des instructions que ton ordinateur exécute. Tu n'as pas besoin de comprendre chaque ligne — Claude Code s'occupe de l'écrire pour toi. Ton rôle, c'est de savoir quoi demander et comment structurer ta demande.</p>",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "info",
        title: "Prérequis",
        html: "<p>Assure-toi que Node.js (v18+) est installé. Tape <code>node --version</code> dans ton terminal. Si tu vois un numéro de version, tu es prêt. Sinon, installe-le depuis <strong>nodejs.org</strong>.</p>",
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "Script 1 : Générer des descriptions produits avec Claude",
      },
      {
        id: "2-5",
        type: "text",
        html: "<p>Imagine que ton client a un e-commerce avec 200 produits dans un fichier CSV, mais aucune description marketing. Tu vas écrire un script qui lit le CSV, appelle l'API Claude pour chaque produit, et génère des descriptions optimisées SEO. Un service que tu peux facturer 500-2000€.</p>",
      },
      { id: "2-dia1", type: "heading", level: 3, text: "C'est quoi un fichier CSV concrètement ?" },
      { id: "2-dia1d", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Fichier CSV", description: "Un tableau en texte brut. Chaque ligne = un produit. Chaque colonne séparée par un point-virgule." },
        { id: "n2", label: "Script Node.js", description: "Ton code lit le fichier, découpe chaque ligne et extrait les données (nom, prix, catégorie)." },
        { id: "n3", label: "API Claude", description: "Pour chaque produit, le script envoie les infos à Claude qui génère une description marketing." },
        { id: "n4", label: "Fichier JSON enrichi", description: "Les produits avec leurs nouvelles descriptions sont sauvegardés dans un fichier propre." },
      ]},
      { id: "2-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> c'est comme donner une liste de 200 articles à un rédacteur ultra-rapide. Sauf que le rédacteur (Claude) traite chaque article en 2 secondes et ne se fatigue jamais." },
      {
        id: "2-6",
        type: "code",
        language: "typescript",
        filename: "generate-descriptions.ts",
        code: `import { readFileSync, writeFileSync } from "fs";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

interface Product {
  name: string;
  category: string;
  price: string;
  description?: string;
}

// Lire le CSV de produits
function readProductsCSV(path: string): Product[] {
  const raw = readFileSync(path, "utf-8");
  const lines = raw.trim().split("\\n");
  const headers = lines[0].split(";").map((h) => h.trim().toLowerCase());

  return lines.slice(1).map((line) => {
    const values = line.split(";").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = values[i] || ""));
    return obj as unknown as Product;
  });
}

async function generateDescription(product: Product): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: \`Génère une description marketing de 2-3 phrases pour ce produit e-commerce.
Nom : \${product.name}
Catégorie : \${product.category}
Prix : \${product.price}€
Ton : professionnel mais accessible. Inclus des mots-clés SEO naturellement.\`,
    }],
  });

  const textBlock = message.content.find((b) => b.type === "text");
  return textBlock?.type === "text" ? textBlock.text : "";
}

async function main() {
  const products = readProductsCSV("./products.csv");
  console.log(\`Traitement de \${products.length} produits...\\n\`);

  for (const product of products) {
    product.description = await generateDescription(product);
    console.log(\`✓ \${product.name} — description générée\`);
    // Pause de 500ms pour respecter les rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  writeFileSync("./products-enriched.json", JSON.stringify(products, null, 2));
  console.log(\`\\n✓ \${products.length} descriptions générées et sauvegardées.\`);
}

main().catch(console.error);`,
      },
      {
        id: "2-7",
        type: "callout",
        variant: "tip",
        title: "Le prompt à donner à Claude Code",
        html: "<p>\"Crée un script TypeScript qui lit un CSV de produits (nom, catégorie, prix) et appelle l'API Claude pour générer une description marketing SEO pour chaque produit. Sauvegarde le résultat en JSON. Ajoute un délai entre chaque appel API.\"</p>",
      },
      {
        id: "2-8",
        type: "separator",
        style: "dots",
      },
      {
        id: "2-9",
        type: "heading",
        level: 2,
        text: "Script 2 : Analyser des avis clients avec Claude",
      },
      {
        id: "2-10",
        type: "text",
        html: "<p>Ton client reçoit des centaines d'avis clients et veut un rapport de synthèse : sentiment global, points forts, points faibles, suggestions d'amélioration. Ce script lit les avis depuis un CSV et utilise Claude pour générer un rapport d'analyse complet.</p>",
      },
      {
        id: "2-11",
        type: "code",
        language: "typescript",
        filename: "analyze-reviews.ts",
        code: `import { readFileSync, writeFileSync } from "fs";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Lire les avis depuis un CSV
function readReviews(path: string): string[] {
  const raw = readFileSync(path, "utf-8");
  const lines = raw.trim().split("\\n");
  return lines.slice(1).map((line) => {
    const parts = line.split(";");
    return parts[parts.length - 1]?.trim() || "";
  }).filter(Boolean);
}

async function analyzeReviews(reviews: string[]): Promise<string> {
  const reviewsText = reviews
    .map((r, i) => \`Avis \${i + 1}: \${r}\`)
    .join("\\n");

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [{
      role: "user",
      content: \`Analyse ces \${reviews.length} avis clients et génère un rapport :
1. Sentiment global (positif/négatif/mixte) avec un score /10
2. Top 3 des points forts mentionnés
3. Top 3 des points faibles mentionnés
4. 3 suggestions d'amélioration concrètes
5. Verbatims les plus marquants (2-3 citations)

Avis :\\n\${reviewsText}\`,
    }],
  });

  const textBlock = message.content.find((b) => b.type === "text");
  return textBlock?.type === "text" ? textBlock.text : "";
}

async function main() {
  const reviews = readReviews("./avis-clients.csv");
  console.log(\`Analyse de \${reviews.length} avis clients...\\n\`);

  const report = await analyzeReviews(reviews);
  writeFileSync("./rapport-avis.md", report);
  console.log("✓ Rapport d'analyse généré : rapport-avis.md");
}

main().catch(console.error);`,
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Script 3 : Générer un rapport quotidien",
      },
      {
        id: "2-13",
        type: "text",
        html: "<p>Chaque matin, tu veux un résumé de ton activité de la veille. Ce script lit tes données (ventes, inscriptions, support) et génère un rapport lisible en HTML ou Markdown que tu peux t'envoyer par email.</p>",
      },
      {
        id: "2-14",
        type: "code",
        language: "typescript",
        filename: "daily-report.ts",
        code: `import { writeFileSync } from "fs";

interface DailyStats {
  date: string;
  newUsers: number;
  revenue: number;
  supportTickets: number;
  resolvedTickets: number;
}

function generateReport(stats: DailyStats): string {
  const resolutionRate = stats.supportTickets > 0
    ? Math.round((stats.resolvedTickets / stats.supportTickets) * 100)
    : 100;

  return \`# Rapport du \${stats.date}

## Résumé
- **Nouveaux utilisateurs** : \${stats.newUsers}
- **Chiffre d'affaires** : \${stats.revenue.toFixed(2)} €
- **Tickets support** : \${stats.supportTickets} (\${resolutionRate}% résolus)

## Analyse
\${stats.revenue > 500 ? "🟢 Bonne journée ! CA au-dessus de l'objectif." : "🟡 CA sous l'objectif de 500€. Vérifier les conversions."}
\${resolutionRate < 80 ? "🔴 Taux de résolution faible. Prioriser le support demain." : "🟢 Support performant."}
\`;
}

// Simule des données — en production, lis depuis ta BDD ou API
const today = new Date().toLocaleDateString("fr-FR");
const report = generateReport({
  date: today,
  newUsers: 12,
  revenue: 847.5,
  supportTickets: 8,
  resolvedTickets: 7,
});

writeFileSync("./rapport.md", report);
console.log("✓ Rapport généré : rapport.md");`,
      },
      {
        id: "2-15",
        type: "separator",
        style: "line",
      },
      {
        id: "2-16",
        type: "heading",
        level: 2,
        text: "Bonnes pratiques pour tes scripts",
      },
      {
        id: "2-17",
        type: "steps",
        steps: [
          {
            title: "Toujours logger les actions",
            description:
              "Utilise console.log pour chaque étape importante. Quand un script tourne à 3h du matin, tu veux pouvoir lire les logs pour comprendre ce qui s'est passé.",
          },
          {
            title: "Gérer les erreurs avec try/catch",
            description:
              "Un fichier manquant, une API qui ne répond pas, un format inattendu — wrap tes opérations critiques dans des blocs try/catch pour que le script ne crashe pas silencieusement.",
          },
          {
            title: "Utiliser des variables d'environnement",
            description:
              "Ne mets jamais de clés API ou mots de passe en dur dans le code. Utilise un fichier .env avec le package dotenv.",
          },
          {
            title: "Tester avec des données fictives d'abord",
            description:
              "Avant de lancer ton script sur de vraies données, teste-le sur un petit jeu de données factices. Mieux vaut découvrir un bug sur 5 fichiers que sur 5 000.",
          },
        ],
      },
      {
        id: "2-18",
        type: "quiz-inline",
        question:
          "Quelle est la première chose à faire avant de lancer un script d'automatisation sur des données de production ?",
        options: [
          { id: "a", text: "L'exécuter directement pour gagner du temps" },
          { id: "b", text: "Le tester sur un petit jeu de données fictives" },
          { id: "c", text: "Le déployer immédiatement sur un serveur" },
          { id: "d", text: "Supprimer les console.log pour un code propre" },
        ],
        correctId: "b",
        explanation:
          "Toujours tester d'abord sur des données fictives. Un script mal configuré peut écraser des fichiers, envoyer des requêtes API inutiles (qui coûtent de l'argent), ou corrompre des données. Prends 5 minutes pour créer un jeu de test — ça peut t'éviter des heures de récupération.",
      },
      {
        id: "2-19",
        type: "checklist",
        title: "Validation de la leçon",
        items: [
          { id: "c1", text: "J'ai créé et exécuté mon premier script Node.js avec Claude Code" },
          { id: "c2", text: "Je sais appeler l'API Claude depuis un script pour traiter des données en masse" },
          { id: "c3", text: "Je sais lire un CSV et générer un rapport avec l'IA" },
          { id: "c4", text: "Je comprends l'importance du logging et de la gestion d'erreurs" },
          { id: "c5", text: "J'utilise des variables d'environnement pour les données sensibles" },
        ],
      },
    ]),
    exercise:
      "Crée 3 scripts avec Claude Code : (1) Un script qui lit un CSV de produits et appelle Claude pour générer une description marketing pour chaque produit. (2) Un script qui lit un CSV d'avis clients et génère un rapport de sentiment avec Claude (points forts, points faibles, score). (3) Un script qui combine les deux : lit les produits ET les avis, et génère un rapport complet avec recommandations. Exécute chaque script et vérifie les résultats.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 3 : Cron jobs & tâches planifiées
  // ═══════════════════════════════════════════════════
  {
    order: 3,
    module: 7,
    title: "Cron jobs & tâches planifiées",
    slug: "cron-jobs-taches-planifiees",
    duration: "25 min",
    description:
      "Mettre en place des tâches automatiques qui tournent selon un planning : rapports quotidiens, synchros hebdomadaires, emails programmés.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Faire tourner tes scripts sans y penser",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Un script que tu dois lancer manuellement, ce n'est pas une vraie automatisation. La magie opère quand tes scripts tournent tout seuls, au bon moment, sans que tu aies à lever le petit doigt. C'est exactement ce que font les cron jobs : des tâches planifiées qui s'exécutent automatiquement selon un calendrier que tu définis.</p>",
      },
      {
        id: "3-3",
        type: "text",
        html: "<p>Imagine : chaque matin à 7h, un script génère ton rapport de ventes. Chaque lundi à 9h, un autre script synchronise tes contacts entre ton CRM et ta base de données. Chaque fin de mois, un script prépare tes factures. Tout ça tourne en arrière-plan pendant que tu dors ou que tu bosses sur autre chose.</p>",
      },
      { id: "3-dia1", type: "heading", level: 3, text: "C'est quoi un cron job concrètement ?" },
      { id: "3-dia1d", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Tu définis le planning", description: "Tous les jours à 7h, tous les lundis à 9h, toutes les 15 minutes..." },
        { id: "n2", label: "Le système attend", description: "Le cron job surveille l'horloge en permanence, sans rien consommer" },
        { id: "n3", label: "L'heure arrive", description: "Le système détecte que c'est le bon moment et lance ton script" },
        { id: "n4", label: "Ton script s'exécute", description: "Le travail est fait automatiquement. Tu dors peut-être pendant ce temps." },
      ]},
      { id: "3-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> un cron job, c'est comme programmer ton réveil. Tu choisis l'heure une seule fois, et ensuite il sonne tout seul chaque jour sans que tu y penses." },
      {
        id: "3-4",
        type: "heading",
        level: 2,
        text: "Comprendre la syntaxe cron",
      },
      {
        id: "3-5",
        type: "text",
        html: "<p>La syntaxe cron utilise 5 champs pour définir quand une tâche s'exécute : <strong>minute heure jour_du_mois mois jour_de_la_semaine</strong>. Ça peut sembler cryptique au début, mais c'est en fait très logique une fois que tu as compris le pattern.</p>",
      },
      { id: "3-dia2", type: "heading", level: 3, text: "Comment lire une expression cron ?" },
      { id: "3-dia2d", type: "diagram", variant: "layers", nodes: [
        { id: "n1", label: "Champ 1 : Minute (0-59)", description: "A quelle minute de l'heure. Ex : 30 = à la 30e minute" },
        { id: "n2", label: "Champ 2 : Heure (0-23)", description: "A quelle heure. Ex : 9 = 9h du matin" },
        { id: "n3", label: "Champ 3 : Jour du mois (1-31)", description: "Quel jour du mois. Ex : 1 = le premier du mois" },
        { id: "n4", label: "Champ 4 : Mois (1-12)", description: "Quel mois. Ex : * = tous les mois" },
        { id: "n5", label: "Champ 5 : Jour de la semaine (0-7)", description: "0 ou 7 = dimanche, 1 = lundi... Ex : 1-5 = du lundi au vendredi" },
      ]},
      { id: "3-dia2c", type: "callout", variant: "tip", html: "<strong>Astuce :</strong> retiens l'ordre avec <strong>Mi-H-Jo-Mo-Se</strong> (Minute, Heure, Jour du mois, Mois, jour de la Semaine). Et utilise <strong>crontab.guru</strong> pour vérifier tes expressions visuellement." },
      {
        id: "3-6",
        type: "code",
        language: "bash",
        filename: "cron-examples.sh",
        code: `# Syntaxe : minute heure jour_mois mois jour_semaine

# Tous les jours à 7h00
0 7 * * *

# Tous les lundis à 9h30
30 9 * * 1

# Le 1er de chaque mois à minuit
0 0 1 * *

# Toutes les 6 heures
0 */6 * * *

# Du lundi au vendredi à 8h00
0 8 * * 1-5

# Toutes les 15 minutes
*/15 * * * *`,
      },
      {
        id: "3-7",
        type: "callout",
        variant: "tip",
        title: "Astuce mémorisation",
        html: "<p>Retiens l'ordre avec cette phrase : <strong>\"Mi-H-Jo-Mo-Se\"</strong> (Minute, Heure, Jour du mois, Mois, jour de la Semaine). L'étoile <code>*</code> veut dire \"tous\". Utilise le site <strong>crontab.guru</strong> pour vérifier tes expressions cron visuellement.</p>",
      },
      {
        id: "3-8",
        type: "separator",
        style: "dots",
      },
      {
        id: "3-9",
        type: "heading",
        level: 2,
        text: "Méthode 1 : node-cron pour les tâches internes",
      },
      {
        id: "3-10",
        type: "text",
        html: "<p>Le package <code>node-cron</code> permet de planifier des tâches directement dans ton application Node.js. C'est parfait pour les scripts qui doivent tourner tant que ton serveur est actif.</p>",
      },
      {
        id: "3-11",
        type: "code",
        language: "typescript",
        filename: "scheduler.ts",
        code: `import cron from "node-cron";
import { generateDailyReport } from "./daily-report";
import { syncContacts } from "./sync-contacts";
import { sendWeeklyNewsletter } from "./newsletter";

// Rapport quotidien — tous les jours à 7h00
cron.schedule("0 7 * * *", async () => {
  console.log(\`[\${new Date().toISOString()}] Génération du rapport quotidien...\`);
  try {
    await generateDailyReport();
    console.log("✓ Rapport quotidien généré avec succès");
  } catch (error) {
    console.error("✗ Erreur rapport quotidien :", error);
  }
});

// Synchro contacts — tous les lundis à 9h00
cron.schedule("0 9 * * 1", async () => {
  console.log(\`[\${new Date().toISOString()}] Synchronisation des contacts...\`);
  try {
    const result = await syncContacts();
    console.log(\`✓ \${result.synced} contacts synchronisés\`);
  } catch (error) {
    console.error("✗ Erreur synchro contacts :", error);
  }
});

// Newsletter hebdo — tous les vendredis à 14h00
cron.schedule("0 14 * * 5", async () => {
  console.log(\`[\${new Date().toISOString()}] Envoi de la newsletter...\`);
  try {
    const sent = await sendWeeklyNewsletter();
    console.log(\`✓ Newsletter envoyée à \${sent} abonnés\`);
  } catch (error) {
    console.error("✗ Erreur newsletter :", error);
  }
});

console.log("🕐 Scheduler démarré. Tâches planifiées :");
console.log("  - Rapport quotidien : 7h00 chaque jour");
console.log("  - Synchro contacts  : 9h00 chaque lundi");
console.log("  - Newsletter        : 14h00 chaque vendredi");`,
      },
      {
        id: "3-12",
        type: "heading",
        level: 2,
        text: "Méthode 2 : Vercel Cron Jobs (recommandé en production)",
      },
      {
        id: "3-13",
        type: "text",
        html: "<p>Pour la production, <strong>Vercel Cron Jobs</strong> est la solution la plus simple. Tu définis tes tâches dans un fichier <code>vercel.json</code> et Vercel appelle automatiquement tes routes API selon le planning. Pas de serveur à gérer, ça marche sur tous les OS, et c'est gratuit jusqu'à 2 cron jobs sur le plan hobby.</p>",
      },
      {
        id: "3-14",
        type: "code",
        language: "json",
        filename: "vercel.json",
        code: `{
  "crons": [
    {
      "path": "/api/cron/daily-report",
      "schedule": "0 7 * * *"
    },
    {
      "path": "/api/cron/weekly-cleanup",
      "schedule": "0 3 * * 0"
    }
  ]
}`,
      },
      {
        id: "3-14b",
        type: "code",
        language: "typescript",
        filename: "app/api/cron/daily-report/route.ts",
        code: `import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Vérifier que l'appel vient bien de Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Ta logique de rapport quotidien ici
  console.log("Rapport quotidien généré à", new Date().toISOString());

  return NextResponse.json({ success: true });
}`,
      },
      {
        id: "3-15",
        type: "callout",
        variant: "warning",
        title: "Piège classique",
        html: "<p>Un cron job qui échoue silencieusement, c'est le pire scénario. Redirige toujours la sortie vers un fichier de log et mets en place une alerte (email ou Slack) quand une tâche échoue. Tu ne veux pas découvrir 3 semaines plus tard que tes backups ne tournent plus.</p>",
      },
      {
        id: "3-15b",
        type: "heading",
        level: 3,
        text: "Bonus : crontab Linux (pour les serveurs dédiés)",
      },
      {
        id: "3-15c",
        type: "callout",
        variant: "info",
        html: "<p>Si tu as un serveur Linux (VPS, Hetzner, etc.), tu peux aussi utiliser le <code>crontab</code> système. C'est la méthode classique, mais elle ne fonctionne que sur Linux/macOS. Sur Windows, utilise <code>node-cron</code> ou Vercel Cron Jobs.</p>",
      },
      {
        id: "3-15d",
        type: "code",
        language: "bash",
        filename: "setup-crontab.sh",
        code: `# (Linux/macOS uniquement) Ouvrir l'éditeur crontab
crontab -e

# Rapport quotidien à 7h
0 7 * * * cd /home/app && node daily-report.js >> /var/log/daily-report.log 2>&1

# Vérifier tes cron jobs actifs
crontab -l`,
      },
      {
        id: "3-16",
        type: "heading",
        level: 3,
        text: "Les tâches planifiées les plus demandées par les clients",
      },
      {
        id: "3-17",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "daily", label: "Quotidien", description: "Rapports de vente, backups BDD, synchro CRM" },
          { id: "weekly", label: "Hebdomadaire", description: "Newsletter, nettoyage fichiers, audit SEO", children: ["daily"] },
          { id: "monthly", label: "Mensuel", description: "Factures, rapports comptables, archivage", children: ["weekly"] },
          { id: "event", label: "Sur événement", description: "Webhook entrant, nouveau client, commande reçue", children: ["monthly"] },
        ],
      },
      {
        id: "3-18",
        type: "quiz-inline",
        question: "Quelle expression cron exécute une tâche chaque jour ouvré (lundi-vendredi) à 8h30 ?",
        options: [
          { id: "a", text: "30 8 * * 1-5" },
          { id: "b", text: "8 30 * * 1-5" },
          { id: "c", text: "30 8 1-5 * *" },
          { id: "d", text: "* 8 30 * 1-5" },
        ],
        correctId: "a",
        explanation:
          "L'ordre est : minute (30), heure (8), jour du mois (*), mois (*), jour de la semaine (1-5 = lundi à vendredi). Donc 30 8 * * 1-5 signifie : à la minute 30 de l'heure 8, tous les jours de la semaine.",
      },
      {
        id: "3-19",
        type: "checklist",
        title: "Validation de la leçon",
        items: [
          { id: "c1", text: "Je comprends la syntaxe cron (5 champs)" },
          { id: "c2", text: "J'ai configuré un cron job avec node-cron dans un script" },
          { id: "c3", text: "Je sais rediriger les logs d'un cron job vers un fichier" },
          { id: "c4", text: "J'ai identifié 3 tâches à planifier pour mon business" },
        ],
      },
    ]),
    exercise:
      "Crée un fichier scheduler.ts avec Claude Code qui planifie 3 tâches : (1) Un console.log 'Rapport généré' toutes les minutes (pour tester). (2) Un script qui sauvegarde un fichier JSON dans un dossier /backups avec la date dans le nom. (3) Un script qui vérifie si un site web répond (fetch + status code) toutes les 5 minutes. Lance le scheduler, vérifie les logs, puis modifie les horaires pour des planifications réalistes.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 4 : Automatiser les emails et notifications
  // ═══════════════════════════════════════════════════
  {
    order: 4,
    module: 7,
    title: "Automatiser les emails et notifications",
    slug: "automatiser-emails-notifications",
    duration: "30 min",
    description:
      "Envoyer des emails automatiques (Resend/Nodemailer), des SMS (Twilio) et des notifications Slack avec Claude Code.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Les notifications automatiques : le nerf de la guerre",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Envoyer le bon message, au bon moment, à la bonne personne — c'est le secret d'un business qui tourne. Que ce soit un email de bienvenue quand un client s'inscrit, une notification Slack quand une vente arrive, ou un SMS de rappel avant un rendez-vous, les notifications automatiques sont l'épine dorsale de toute entreprise moderne.</p>",
      },
      {
        id: "4-3",
        type: "text",
        html: "<p>Et la bonne nouvelle, c'est que tout ça se code en quelques lignes avec les bons outils. On va voir trois canaux : emails (Resend), Slack (webhooks) et SMS (Twilio). Chaque canal a ses forces, et tu utiliseras souvent les trois ensemble.</p>",
      },
      { id: "4-dia1", type: "heading", level: 3, text: "C'est quoi un email transactionnel concrètement ?" },
      { id: "4-dia1d", type: "diagram", variant: "hub", nodes: [
        { id: "n1", label: "Email transactionnel", description: "Un email envoyé automatiquement par ton code en réponse à une action (achat, inscription, etc.)" },
        { id: "n2", label: "Email de bienvenue", description: "Envoyé quand quelqu'un s'inscrit sur ton site" },
        { id: "n3", label: "Confirmation de commande", description: "Envoyé quand un client paie un produit" },
        { id: "n4", label: "Rappel de rendez-vous", description: "Envoyé 24h avant un RDV pour éviter les no-shows" },
        { id: "n5", label: "Alerte de sécurité", description: "Envoyé quand une connexion suspecte est détectée" },
      ]},
      { id: "4-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> un email transactionnel, c'est comme un accusé de réception automatique. Tu ne l'envoies pas toi-même : c'est ton code qui le fait, au bon moment, à la bonne personne." },
      {
        id: "4-4",
        type: "separator",
        style: "line",
      },
      {
        id: "4-5",
        type: "heading",
        level: 2,
        text: "Envoyer des emails avec Resend",
      },
      {
        id: "4-6",
        type: "text",
        html: "<p>Resend est l'outil d'envoi d'emails le plus simple et le plus moderne. API claire, bonne délivrabilité, plan gratuit de 100 emails/jour — parfait pour démarrer. Voici comment envoyer un email transactionnel :</p>",
      },
      {
        id: "4-7",
        type: "code",
        language: "typescript",
        filename: "send-email.ts",
        code: `import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  to: string;
  customerName: string;
  orderNumber: string;
  total: number;
}

async function sendOrderConfirmation(params: EmailParams) {
  const { to, customerName, orderNumber, total } = params;

  const { data, error } = await resend.emails.send({
    from: "MonBusiness <commandes@mondomaine.fr>",
    to,
    subject: \`Confirmation de commande #\${orderNumber}\`,
    html: \`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a1a1a;">Merci \${customerName} !</h1>
        <p>Ta commande <strong>#\${orderNumber}</strong> est confirmée.</p>
        <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 24px; font-weight: bold; margin: 0;">
            Total : \${total.toFixed(2)} €
          </p>
        </div>
        <p>Tu recevras un email de suivi dès l'expédition.</p>
        <p style="color: #666;">— L'équipe MonBusiness</p>
      </div>
    \`,
  });

  if (error) throw new Error(\`Erreur envoi email : \${error.message}\`);
  console.log(\`✓ Email envoyé à \${to} (id: \${data?.id})\`);
}

// Utilisation
sendOrderConfirmation({
  to: "client@example.com",
  customerName: "Sophie",
  orderNumber: "CMD-2025-0042",
  total: 149.99,
});`,
      },
      {
        id: "4-8",
        type: "heading",
        level: 2,
        text: "Notifications Slack avec les webhooks",
      },
      {
        id: "4-9",
        type: "text",
        html: "<p>Les notifications Slack sont parfaites pour te tenir informé en temps réel de ce qui se passe dans ton business. Nouvelle vente, erreur critique, tâche terminée — un webhook Slack envoie un message dans le channel de ton choix en une seule requête HTTP.</p>",
      },
      {
        id: "4-10",
        type: "code",
        language: "typescript",
        filename: "slack-notify.ts",
        code: `import dotenv from "dotenv";
dotenv.config();

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL!;

interface SlackNotification {
  title: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
  fields?: { label: string; value: string }[];
}

async function notifySlack(notif: SlackNotification) {
  const colorMap = {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  };

  const payload = {
    attachments: [
      {
        color: colorMap[notif.type],
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: notif.title },
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: notif.message },
          },
          ...(notif.fields
            ? [
                {
                  type: "section",
                  fields: notif.fields.map((f) => ({
                    type: "mrkdwn",
                    text: \`*\${f.label}*\\n\${f.value}\`,
                  })),
                },
              ]
            : []),
        ],
      },
    ],
  };

  const res = await fetch(SLACK_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(\`Slack error: \${res.status}\`);
  console.log("✓ Notification Slack envoyée");
}

// Exemple : notification de nouvelle vente
notifySlack({
  title: "Nouvelle vente !",
  message: "Un client vient de passer commande sur la boutique.",
  type: "success",
  fields: [
    { label: "Client", value: "Sophie Martin" },
    { label: "Montant", value: "149,99 €" },
    { label: "Produit", value: "Formation IA Pro" },
  ],
});`,
      },
      {
        id: "4-11",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-12",
        type: "heading",
        level: 2,
        text: "SMS de rappel avec Twilio",
      },
      {
        id: "4-13",
        type: "text",
        html: "<p>Les SMS ont un taux d'ouverture de 98% — contre 20% pour les emails. Pour les rappels de rendez-vous, les confirmations urgentes ou les alertes critiques, le SMS est imbattable. Twilio rend l'envoi de SMS aussi simple qu'un appel de fonction.</p>",
      },
      {
        id: "4-14",
        type: "code",
        language: "typescript",
        filename: "send-sms.ts",
        code: `import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendReminderSMS(phone: string, name: string, dateRdv: string) {
  const message = await client.messages.create({
    body: \`Bonjour \${name}, rappel : votre rendez-vous est prévu demain à \${dateRdv}. Répondez OK pour confirmer ou ANNULER pour reporter.\`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });

  console.log(\`✓ SMS envoyé à \${phone} (SID: \${message.sid})\`);
}

// Envoyer des rappels pour tous les RDV de demain
async function sendAllReminders(appointments: { phone: string; name: string; time: string }[]) {
  console.log(\`Envoi de \${appointments.length} rappels SMS...\`);

  for (const apt of appointments) {
    try {
      await sendReminderSMS(apt.phone, apt.name, apt.time);
    } catch (error) {
      console.error(\`✗ Erreur SMS pour \${apt.name} :\`, error);
    }
  }

  console.log("✓ Tous les rappels ont été traités");
}`,
      },
      {
        id: "4-15",
        type: "callout",
        variant: "info",
        title: "Coûts de référence",
        html: "<p><strong>Resend</strong> : gratuit jusqu'à 100 emails/jour, puis 20$/mois pour 50 000 emails. <strong>Twilio SMS</strong> : environ 0,07€ par SMS envoyé en France. <strong>Slack webhooks</strong> : totalement gratuit. Pour un business qui envoie 500 emails et 100 SMS par mois, compte environ 25-30€/mois — bien moins cher que la valeur que ça génère.</p>",
      },
      {
        id: "4-16",
        type: "quiz-inline",
        question: "Quel canal de notification a le meilleur taux d'ouverture ?",
        options: [
          { id: "a", text: "Email (environ 20%)" },
          { id: "b", text: "Slack (environ 60%)" },
          { id: "c", text: "SMS (environ 98%)" },
          { id: "d", text: "Notification push (environ 50%)" },
        ],
        correctId: "c",
        explanation:
          "Les SMS ont un taux d'ouverture de 98%, ce qui en fait le canal le plus fiable pour les messages urgents comme les rappels de rendez-vous ou les alertes critiques. Cependant, utilise-les avec parcimonie pour ne pas fatiguer tes contacts.",
      },
      {
        id: "4-17",
        type: "checklist",
        title: "Validation de la leçon",
        items: [
          { id: "c1", text: "J'ai créé un compte Resend et envoyé un email de test" },
          { id: "c2", text: "J'ai configuré un webhook Slack et reçu une notification" },
          { id: "c3", text: "Je comprends comment fonctionne l'API Twilio pour les SMS" },
          { id: "c4", text: "J'ai mis mes clés API dans un fichier .env (jamais en dur)" },
          { id: "c5", text: "J'ai un template d'email HTML propre et réutilisable" },
        ],
      },
    ]),
    exercise:
      "Crée un système de notification multi-canal avec Claude Code : (1) Un script qui envoie un email de bienvenue HTML soigné avec Resend quand tu ajoutes un contact à un fichier JSON. (2) Un webhook Slack qui t'alerte quand le script s'exécute avec les détails du contact ajouté. (3) Combine les deux dans un seul script et planifie-le pour vérifier le fichier JSON toutes les 10 minutes.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 5 : Web scraping intelligent avec Claude Code
  // ═══════════════════════════════════════════════════
  {
    order: 5,
    module: 7,
    title: "Web scraping intelligent avec Claude Code",
    slug: "web-scraping-intelligent-claude-code",
    duration: "30 min",
    description:
      "Extraire des données de sites web, surveiller la concurrence, suivre les prix — le tout construit avec Claude Code.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Le web scraping : ton arme secrète business",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Le web scraping, c'est l'art d'extraire automatiquement des données depuis des sites web. Imagine pouvoir surveiller les prix de tes concurrents chaque jour, récupérer les dernières offres d'emploi dans ta niche, ou collecter les avis clients de ton secteur — tout ça sans lever le petit doigt. C'est exactement ce que le web scraping permet.</p>",
      },
      {
        id: "5-3",
        type: "text",
        html: "<p>Et avec Claude Code, tu n'as pas besoin de maîtriser les sélecteurs CSS ou le DOM HTML. Tu décris ce que tu veux extraire, Claude Code écrit le scraper, et tu as tes données en quelques minutes. C'est un service que tu peux vendre facilement entre 500€ et 3 000€ à des clients qui ont besoin de données marché.</p>",
      },
      { id: "5-dia1", type: "heading", level: 3, text: "C'est quoi le web scraping concrètement ?" },
      { id: "5-dia1d", type: "diagram", variant: "process", nodes: [
        { id: "n1", label: "Une page web", description: "Un site avec des infos que tu veux : prix, annonces, avis clients, offres d'emploi..." },
        { id: "n2", label: "Ton script la télécharge", description: "Comme quand ton navigateur affiche une page, sauf que c'est ton code qui le fait" },
        { id: "n3", label: "Il extrait les données", description: "Le script lit le HTML et récupère exactement les infos que tu veux (titres, prix, etc.)" },
        { id: "n4", label: "Il sauvegarde en JSON", description: "Les données sont rangées proprement dans un fichier que tu peux analyser ou revendre" },
      ]},
      { id: "5-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> le web scraping, c'est comme envoyer un stagiaire lire 500 annonces immobilières et noter les prix dans un tableau Excel. Sauf que ton script le fait en 30 secondes, sans erreur, et il peut recommencer chaque jour." },
      { id: "5-dia2", type: "heading", level: 3, text: "Cheerio vs Puppeteer : quelle différence ?" },
      { id: "5-dia2d", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Cheerio (site statique)", description: "Lit le HTML brut envoyé par le serveur. Rapide et léger. Ne voit pas le contenu chargé par JavaScript." },
        { id: "n2", label: "Puppeteer (site dynamique)", description: "Lance un vrai navigateur Chrome invisible. Exécute le JavaScript. Voit tout comme un humain. Plus lent mais plus puissant." },
      ]},
      { id: "5-dia2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> Cheerio, c'est comme lire le code source d'une page. Puppeteer, c'est comme demander à un robot de regarder la page comme un humain et de noter ce qu'il voit." },
      {
        id: "5-4",
        type: "callout",
        variant: "warning",
        title: "RGPD & cadre légal — IMPORTANT",
        html: "<p><strong>Le web scraping est encadré par la loi.</strong> En Europe (RGPD), tu ne peux PAS scraper des données personnelles sans consentement. Vérifie <strong>TOUJOURS</strong> les CGU du site cible, respecte le fichier <code>robots.txt</code>, espace tes requêtes (1-2 secondes minimum), et obtiens l'accord écrit de ton client avant tout scraping. En cas de doute, utilise les APIs officielles. Les sanctions RGPD peuvent aller jusqu'à 4% du chiffre d'affaires annuel — ce n'est pas un risque à prendre à la légère.</p>",
      },
      {
        id: "5-5",
        type: "separator",
        style: "dots",
      },
      {
        id: "5-6",
        type: "heading",
        level: 2,
        text: "Les outils du scraping en Node.js",
      },
      {
        id: "5-7",
        type: "comparison",
        headers: ["Outil", "Usage idéal", "Difficulté"],
        rows: [
          { cells: ["cheerio", "Pages HTML statiques, rapide et léger", "Facile"] },
          { cells: ["puppeteer", "Sites dynamiques (JavaScript), screenshots", "Moyen"] },
          { cells: ["playwright", "Sites complexes, multi-navigateurs, fiable", "Moyen"] },
          { cells: ["axios + cheerio", "API cachées, extraction ciblée", "Facile"] },
        ],
      },
      {
        id: "5-8",
        type: "heading",
        level: 2,
        text: "Scraper des annonces immobilières (cheerio)",
      },
      {
        id: "5-9",
        type: "code",
        language: "typescript",
        filename: "scrape-listings.ts",
        code: `import axios from "axios";
import * as cheerio from "cheerio";
import { writeFileSync } from "fs";

interface Listing {
  title: string;
  price: string;
  location: string;
  surface: string;
  url: string;
  scrapedAt: string;
}

async function scrapeListings(searchUrl: string): Promise<Listing[]> {
  const { data: html } = await axios.get(searchUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  const $ = cheerio.load(html);
  const listings: Listing[] = [];

  $(".listing-card").each((_, el) => {
    listings.push({
      title: $(el).find(".listing-title").text().trim(),
      price: $(el).find(".listing-price").text().trim(),
      location: $(el).find(".listing-location").text().trim(),
      surface: $(el).find(".listing-surface").text().trim(),
      url: $(el).find("a").attr("href") || "",
      scrapedAt: new Date().toISOString(),
    });
  });

  return listings;
}

async function main() {
  console.log("Scraping des annonces en cours...");

  const listings = await scrapeListings("https://example-immo.fr/paris");

  writeFileSync(
    "./listings.json",
    JSON.stringify(listings, null, 2)
  );

  console.log(\`✓ \${listings.length} annonces extraites et sauvegardées\`);

  // Trouver les bonnes affaires (prix/m2 < moyenne)
  const withPricePerM2 = listings
    .filter((l) => l.price && l.surface)
    .map((l) => ({
      ...l,
      pricePerM2: parseFloat(l.price.replace(/[^0-9]/g, "")) /
        parseFloat(l.surface.replace(/[^0-9]/g, "")),
    }));

  const avgPrice =
    withPricePerM2.reduce((sum, l) => sum + l.pricePerM2, 0) /
    withPricePerM2.length;

  const deals = withPricePerM2.filter((l) => l.pricePerM2 < avgPrice * 0.8);
  console.log(\`🏠 \${deals.length} bonnes affaires détectées (< 80% du prix moyen)\`);
}

main();`,
      },
      {
        id: "5-10",
        type: "heading",
        level: 2,
        text: "Surveiller les prix concurrents (Puppeteer)",
      },
      {
        id: "5-11",
        type: "text",
        html: "<p>Certains sites chargent leur contenu dynamiquement avec JavaScript. Pour ceux-là, Puppeteer lance un vrai navigateur Chrome en arrière-plan et attend que la page soit complètement chargée avant d'extraire les données.</p>",
      },
      {
        id: "5-12",
        type: "code",
        language: "typescript",
        filename: "price-monitor.ts",
        code: `import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync } from "fs";

interface PriceRecord {
  product: string;
  price: number;
  date: string;
  url: string;
}

async function getPrice(url: string, selector: string): Promise<number> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector(selector);

  const priceText = await page.$eval(selector, (el) => el.textContent || "");
  await browser.close();

  return parseFloat(priceText.replace(/[^0-9.,]/g, "").replace(",", "."));
}

async function monitorPrices() {
  const products = [
    {
      name: "Produit A - Concurrent 1",
      url: "https://concurrent1.fr/produit-a",
      selector: ".product-price",
    },
    {
      name: "Produit A - Concurrent 2",
      url: "https://concurrent2.fr/produit-a",
      selector: ".prix-actuel",
    },
  ];

  const historyFile = "./price-history.json";
  const history: PriceRecord[] = existsSync(historyFile)
    ? JSON.parse(readFileSync(historyFile, "utf-8"))
    : [];

  for (const product of products) {
    try {
      const price = await getPrice(product.url, product.selector);
      const lastPrice = history
        .filter((h) => h.product === product.name)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

      history.push({
        product: product.name,
        price,
        date: new Date().toISOString(),
        url: product.url,
      });

      if (lastPrice && price < lastPrice.price) {
        const drop = ((lastPrice.price - price) / lastPrice.price * 100).toFixed(1);
        console.log(\`📉 BAISSE : \${product.name} — \${lastPrice.price}€ → \${price}€ (-\${drop}%)\`);
      } else {
        console.log(\`✓ \${product.name} : \${price}€\`);
      }
    } catch (error) {
      console.error(\`✗ Erreur pour \${product.name} :\`, error);
    }
  }

  writeFileSync(historyFile, JSON.stringify(history, null, 2));
}

monitorPrices();`,
      },
      {
        id: "5-13",
        type: "separator",
        style: "line",
      },
      {
        id: "5-14",
        type: "heading",
        level: 3,
        text: "Bonnes pratiques anti-blocage",
      },
      {
        id: "5-15",
        type: "steps",
        steps: [
          {
            title: "Respecte un délai entre les requêtes",
            description:
              "Ajoute un await sleep(1500) entre chaque requête. Ça simule un comportement humain et évite de surcharger le serveur cible.",
          },
          {
            title: "Utilise un User-Agent réaliste",
            description:
              "Envoie un header User-Agent qui ressemble à un vrai navigateur. Sans ça, beaucoup de sites bloquent tes requêtes immédiatement.",
          },
          {
            title: "Gère les erreurs gracieusement",
            description:
              "Si une page ne charge pas, log l'erreur et passe à la suivante. Ne laisse pas un seul échec crasher tout ton scraper.",
          },
          {
            title: "Sauvegarde les résultats au fur et à mesure",
            description:
              "N'attends pas d'avoir tout scrapé pour sauvegarder. Écris les résultats progressivement pour ne rien perdre en cas de crash.",
          },
        ],
      },
      {
        id: "5-16",
        type: "quiz-inline",
        question:
          "Quel outil utilises-tu pour scraper un site dont le contenu est chargé dynamiquement en JavaScript ?",
        options: [
          { id: "a", text: "cheerio seul" },
          { id: "b", text: "axios seul" },
          { id: "c", text: "puppeteer ou playwright" },
          { id: "d", text: "Un simple fetch()" },
        ],
        correctId: "c",
        explanation:
          "cheerio et axios ne peuvent lire que le HTML brut envoyé par le serveur. Si le contenu est généré par JavaScript côté client, tu as besoin d'un outil comme Puppeteer ou Playwright qui lance un vrai navigateur et exécute le JavaScript avant d'extraire les données.",
      },
      {
        id: "5-17",
        type: "checklist",
        title: "Validation de la leçon",
        items: [
          { id: "c1", text: "J'ai installé cheerio et axios (npm install cheerio axios)" },
          { id: "c2", text: "J'ai créé un scraper basique qui extrait des données d'une page HTML" },
          { id: "c3", text: "Je comprends la différence entre scraping statique et dynamique" },
          { id: "c4", text: "Je respecte les bonnes pratiques : délai, User-Agent, robots.txt" },
          { id: "c5", text: "Je sais sauvegarder les données scrapées en JSON" },
        ],
      },
    ]),
    exercise:
      "Construis un moniteur de veille concurrentielle avec Claude Code : (1) Choisis 3 sites publics dans ta niche et identifie les informations à extraire (prix, titres, descriptions). (2) Écris un scraper avec cheerio qui extrait ces données et les sauvegarde dans un fichier JSON horodaté. (3) Ajoute une fonction de comparaison qui détecte les changements par rapport au scraping précédent. (4) Planifie le scraping toutes les 24h et envoie une notification Slack en cas de changement détecté.",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 6 : Workflows multi-étapes
  // ═══════════════════════════════════════════════════
  {
    order: 6,
    module: 7,
    title: "Workflows multi-étapes : orchestrer des tâches complexes",
    slug: "workflows-multi-etapes-orchestrer-taches",
    duration: "30 min",
    description:
      "Chaîner des automatisations, gérer les erreurs, logger les actions et construire des pipelines robustes.",
    content: blocks([
      {
        id: "6-1",
        type: "heading",
        level: 2,
        text: "Passer du script isolé au pipeline complet",
      },
      {
        id: "6-2",
        type: "text",
        html: "<p>Jusqu'ici, tu as appris à créer des scripts individuels : envoyer un email, scraper une page, planifier une tâche. Mais la vraie puissance des automatisations arrive quand tu enchaînes ces scripts en workflows multi-étapes. Un workflow, c'est un pipeline où chaque étape utilise le résultat de la précédente, avec une gestion d'erreur à chaque niveau.</p>",
      },
      {
        id: "6-3",
        type: "text",
        html: "<p>Exemple concret : chaque jour, ton workflow (1) scrape les nouveaux avis Google de ton client, (2) les analyse avec l'API Claude pour détecter le sentiment, (3) génère un résumé, (4) envoie le résumé par email au client, et (5) alerte sur Slack si un avis négatif est détecté. Cinq étapes, zéro intervention manuelle. C'est ce type de workflow que tes clients sont prêts à payer 500€/mois.</p>",
      },
      {
        id: "6-4",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-5",
        type: "heading",
        level: 2,
        text: "Architecture d'un workflow robuste",
      },
      {
        id: "6-6",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "trigger", label: "Déclencheur", description: "Cron, webhook ou événement", children: ["step1"] },
          { id: "step1", label: "Étape 1 : Collecte", description: "Scraping, lecture fichier, appel API", children: ["step2"] },
          { id: "step2", label: "Étape 2 : Traitement", description: "Transformation, analyse IA, filtrage", children: ["step3"] },
          { id: "step3", label: "Étape 3 : Action", description: "Envoi email, mise à jour BDD, notification", children: ["log"] },
          { id: "log", label: "Logging", description: "Historique, métriques, alertes en cas d'erreur" },
        ],
      },
      { id: "6-dia1", type: "heading", level: 3, text: "C'est quoi un pipeline concrètement ?" },
      { id: "6-dia1d", type: "diagram", variant: "timeline", nodes: [
        { id: "n1", label: "Etape 1 : Collecte", description: "Tu récupères les données brutes (scraping, lecture fichier, appel API)" },
        { id: "n2", label: "Etape 2 : Traitement", description: "Tu transformes, analyses ou filtres les données (avec Claude, calculs, etc.)" },
        { id: "n3", label: "Etape 3 : Action", description: "Tu agis sur le résultat (email, notification, mise à jour base de données)" },
        { id: "n4", label: "Etape 4 : Logging", description: "Tu enregistres ce qui s'est passé pour pouvoir vérifier que tout a fonctionné" },
      ]},
      { id: "6-dia1c", type: "callout", variant: "info", html: "<strong>Analogie :</strong> un pipeline, c'est comme une chaîne de montage en usine. Chaque poste fait une tâche précise et passe le résultat au suivant. Si un poste tombe en panne, tu sais exactement où regarder." },
      { id: "6-dia2", type: "heading", level: 3, text: "Comment gérer les erreurs dans un workflow ?" },
      { id: "6-dia2d", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Retry (réessayer)", description: "L'API a juste un hoquet temporaire. On attend 2 secondes et on réessaie. Idéal pour les erreurs réseau." },
        { id: "n2", label: "Skip (ignorer)", description: "Cette étape n'est pas critique. Si Slack est en panne, le rapport email est déjà parti. On continue." },
        { id: "n3", label: "Abort (arrêter)", description: "Erreur fatale. Si on ne peut pas récupérer les données, inutile de continuer le workflow." },
      ]},
      { id: "6-dia2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> dans une cuisine, si le four ne marche pas (abort), tu ne peux pas cuire le plat. Si le micro-ondes est en panne (skip), tu peux quand même servir les plats froids. Si le lave-vaisselle est lent (retry), tu relances un cycle." },
      {
        id: "6-7",
        type: "heading",
        level: 2,
        text: "Le pattern Pipeline : code propre et maintenable",
      },
      {
        id: "6-8",
        type: "code",
        language: "typescript",
        filename: "workflow-engine.ts",
        code: `interface StepResult {
  success: boolean;
  data?: unknown;
  error?: string;
  duration: number;
}

interface WorkflowStep {
  name: string;
  execute: (input: unknown) => Promise<unknown>;
  onError?: "skip" | "abort" | "retry";
  retries?: number;
}

class WorkflowEngine {
  private steps: WorkflowStep[] = [];
  private logs: { step: string; result: StepResult; timestamp: string }[] = [];

  addStep(step: WorkflowStep): this {
    this.steps.push(step);
    return this;
  }

  async run(initialInput?: unknown): Promise<void> {
    console.log(\`\\n══ Workflow démarré à \${new Date().toLocaleString("fr-FR")} ══\\n\`);
    let currentInput = initialInput;

    for (const step of this.steps) {
      const start = Date.now();
      console.log(\`▶ \${step.name}...\`);

      try {
        const result = await this.executeWithRetry(step, currentInput);
        const duration = Date.now() - start;

        this.logs.push({
          step: step.name,
          result: { success: true, data: result, duration },
          timestamp: new Date().toISOString(),
        });

        console.log(\`  ✓ Terminé en \${duration}ms\`);
        currentInput = result;
      } catch (error) {
        const duration = Date.now() - start;
        const errorMsg = error instanceof Error ? error.message : String(error);

        this.logs.push({
          step: step.name,
          result: { success: false, error: errorMsg, duration },
          timestamp: new Date().toISOString(),
        });

        console.error(\`  ✗ Erreur : \${errorMsg}\`);

        if (step.onError === "abort") {
          console.error("\\n⛔ Workflow interrompu.");
          return;
        }
        // "skip" : on continue avec l'input précédent
      }
    }

    console.log(\`\\n══ Workflow terminé — \${this.logs.length} étapes traitées ══\`);
  }

  private async executeWithRetry(
    step: WorkflowStep,
    input: unknown,
    attempt = 1
  ): Promise<unknown> {
    try {
      return await step.execute(input);
    } catch (error) {
      if (step.onError === "retry" && attempt < (step.retries || 3)) {
        console.log(\`  ↻ Retry \${attempt}/\${step.retries || 3}...\`);
        await new Promise((r) => setTimeout(r, 1000 * attempt));
        return this.executeWithRetry(step, input, attempt + 1);
      }
      throw error;
    }
  }

  getLogs() {
    return this.logs;
  }
}

export { WorkflowEngine };`,
      },
      {
        id: "6-9",
        type: "heading",
        level: 2,
        text: "Exemple complet : veille avis clients",
      },
      {
        id: "6-10",
        type: "code",
        language: "typescript",
        filename: "review-monitor-workflow.ts",
        code: `import { WorkflowEngine } from "./workflow-engine";

const workflow = new WorkflowEngine();

workflow
  .addStep({
    name: "Scraper les nouveaux avis",
    execute: async () => {
      // Scrape les avis depuis la page Google Business
      const reviews = await scrapeGoogleReviews("mon-business-id");
      console.log(\`  → \${reviews.length} avis récupérés\`);
      return reviews;
    },
    onError: "retry",
    retries: 3,
  })
  .addStep({
    name: "Analyser le sentiment avec Claude",
    execute: async (reviews) => {
      const analyzed = [];
      for (const review of reviews as { text: string; rating: number }[]) {
        const sentiment = await analyzeSentiment(review.text);
        analyzed.push({ ...review, sentiment });
      }
      return analyzed;
    },
    onError: "abort", // Si l'analyse échoue, pas la peine de continuer
  })
  .addStep({
    name: "Générer le résumé quotidien",
    execute: async (analyzed) => {
      const data = analyzed as { sentiment: string; rating: number }[];
      const positive = data.filter((r) => r.sentiment === "positive").length;
      const negative = data.filter((r) => r.sentiment === "negative").length;
      return {
        total: data.length,
        positive,
        negative,
        summary: \`\${data.length} avis : \${positive} positifs, \${negative} négatifs\`,
      };
    },
    onError: "skip",
  })
  .addStep({
    name: "Envoyer le rapport par email",
    execute: async (report) => {
      await sendEmail({
        to: "client@entreprise.fr",
        subject: "Rapport avis quotidien",
        body: JSON.stringify(report, null, 2),
      });
    },
    onError: "retry",
    retries: 2,
  })
  .addStep({
    name: "Alerter Slack si avis négatif",
    execute: async (report) => {
      const r = report as { negative: number };
      if (r.negative > 0) {
        await notifySlack({
          title: "Avis négatif détecté",
          message: \`\${r.negative} avis négatif(s) aujourd'hui. Vérifier et répondre.\`,
          type: "warning",
        });
      }
    },
    onError: "skip",
  });

// Lancer le workflow
workflow.run();`,
      },
      {
        id: "6-11",
        type: "separator",
        style: "line",
      },
      {
        id: "6-12",
        type: "heading",
        level: 2,
        text: "Les 3 patterns d'erreur à maîtriser",
      },
      {
        id: "6-13",
        type: "comparison",
        headers: ["Pattern", "Quand l'utiliser", "Exemple"],
        rows: [
          {
            cells: [
              "Retry (réessayer)",
              "Erreur temporaire (réseau, API surchargée)",
              "Appel API qui timeout → attendre 2s et réessayer",
            ],
          },
          {
            cells: [
              "Skip (ignorer)",
              "Étape non critique, le workflow peut continuer",
              "La notification Slack échoue → le rapport email est déjà parti",
            ],
          },
          {
            cells: [
              "Abort (arrêter)",
              "Erreur critique, continuer n'a pas de sens",
              "Impossible de scraper les données → pas de données à analyser",
            ],
          },
        ],
      },
      {
        id: "6-14",
        type: "callout",
        variant: "success",
        title: "Le secret des workflows pro",
        html: "<p>La différence entre un workflow amateur et un workflow professionnel, c'est le logging. Chaque exécution doit être tracée : quand le workflow a tourné, combien de temps chaque étape a pris, quelles erreurs se sont produites. Sauvegarde tes logs dans un fichier JSON horodaté ou dans une base de données. Quand ton client te demande \"est-ce que ça tourne bien ?\", tu veux pouvoir répondre avec des chiffres.</p>",
      },
      {
        id: "6-15",
        type: "quiz-inline",
        question:
          "Dans un workflow de veille, l'étape d'envoi de notification Slack échoue. Quel pattern d'erreur est le plus approprié ?",
        options: [
          { id: "a", text: "Abort — arrêter tout le workflow" },
          { id: "b", text: "Retry indéfiniment jusqu'à ce que ça marche" },
          { id: "c", text: "Skip — la notification n'est pas critique, les données sont déjà traitées" },
          { id: "d", text: "Ignorer l'erreur sans la logger" },
        ],
        correctId: "c",
        explanation:
          "La notification Slack est une étape non critique. Les données ont déjà été scrapées, analysées et envoyées par email. Utilise 'skip' pour continuer le workflow, mais log l'erreur pour pouvoir diagnostiquer le problème plus tard.",
      },
      {
        id: "6-16",
        type: "checklist",
        title: "Validation de la leçon",
        items: [
          { id: "c1", text: "J'ai compris le pattern Pipeline pour organiser mes workflows" },
          { id: "c2", text: "Je sais gérer les 3 types d'erreurs : retry, skip, abort" },
          { id: "c3", text: "J'ai créé un workflow d'au moins 3 étapes chaînées" },
          { id: "c4", text: "Mes workflows loggent chaque étape avec le temps d'exécution" },
          { id: "c5", text: "J'ai configuré des alertes pour les erreurs critiques" },
        ],
      },
    ]),
    exercise:
      "Construis un workflow complet \"Veille concurrentielle automatique\" avec Claude Code en utilisant le WorkflowEngine : Étape 1 — Scrape les prix de 3 produits concurrents. Étape 2 — Compare avec les prix de la veille (fichier JSON). Étape 3 — Génère un résumé des variations en Markdown. Étape 4 — Envoie le résumé par email (ou console.log simulé). Étape 5 — Alerte Slack si une baisse de plus de 10% est détectée. Gère les erreurs de chaque étape avec le bon pattern (retry/skip/abort).",
  },

  // ═══════════════════════════════════════════════════
  // LEÇON 7 : Vendre des automatisations
  // ═══════════════════════════════════════════════════
  {
    order: 7,
    module: 7,
    title: "Vendre des automatisations : packager et livrer",
    slug: "vendre-automatisations-packager-livrer",
    duration: "25 min",
    description:
      "Comment packager tes automatisations en service vendable, fixer tes prix, déployer pour les clients et assurer la maintenance.",
    content: blocks([
      {
        id: "7-1",
        type: "heading",
        level: 2,
        text: "Transformer tes scripts en business rentable",
      },
      {
        id: "7-2",
        type: "text",
        html: "<p>Tu sais maintenant créer des automatisations puissantes avec Claude Code. Des scripts qui envoient des emails, scrapent des données, orchestrent des workflows complexes. La question suivante est naturelle : comment transformer cette compétence en argent ? La réponse est simple : les entreprises ont désespérément besoin d'automatisations, et elles sont prêtes à payer cher pour ne plus faire manuellement ce qu'un script peut faire en quelques secondes.</p>",
      },
      {
        id: "7-3",
        type: "text",
        html: "<p>Le marché est énorme. Chaque PME, chaque freelance, chaque e-commerce a des dizaines de tâches répétitives qui lui coûtent du temps et de l'argent. Et la plupart ne savent même pas que c'est automatisable. Ton rôle, c'est de leur ouvrir les yeux, de leur montrer le gain, et de leur vendre la solution.</p>",
      },
      { id: "m7a-dia-7-1h", type: "heading", level: 3, text: "La pyramide de valeur d'une automatisation" },
      { id: "m7a-dia-7-1", type: "diagram", variant: "pyramid", nodes: [
        { id: "n1", label: "Résultat business", description: "Ce que le client paie : heures économisées, CA augmenté, erreurs réduites" },
        { id: "n2", label: "Workflow orchestré", description: "Le pipeline complet qui tourne 24/7 sans intervention humaine" },
        { id: "n3", label: "Scripts individuels", description: "Chaque script fait une tâche : scraper, envoyer un email, générer un rapport" },
        { id: "n4", label: "Infrastructure technique", description: "Node.js, VPS, cron jobs, variables d'environnement — le socle invisible" },
      ]},
      { id: "m7a-dia-7-1c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> ton client achète le sommet de la pyramide (le résultat). Il ne voit jamais la base (le code). C'est comme un iceberg : 90% du travail est invisible, mais c'est ce qui fait tenir les 10% visibles." },
      {
        id: "7-4",
        type: "separator",
        style: "line",
      },
      {
        id: "7-5",
        type: "heading",
        level: 2,
        text: "Les 5 automatisations les plus vendables",
      },
      {
        id: "7-6",
        type: "steps",
        steps: [
          {
            title: "Rapport automatique quotidien/hebdomadaire",
            description:
              "Le client reçoit chaque matin un résumé de ses KPIs (ventes, trafic, support). Prix : 500-1 500€ setup + 100-200€/mois de maintenance.",
            icon: "📊",
          },
          {
            title: "Surveillance concurrentielle",
            description:
              "Scraping des prix, produits, et promotions des concurrents. Alerte quand un changement est détecté. Prix : 1 000-3 000€ setup + 200-400€/mois.",
            icon: "🔍",
          },
          {
            title: "Automatisation email/CRM",
            description:
              "Séquences de bienvenue, relances panier abandonné, suivi post-achat. Prix : 800-2 000€ setup + 150-300€/mois.",
            icon: "📧",
          },
          {
            title: "Synchronisation de données",
            description:
              "Connecter des outils qui ne se parlent pas nativement. Synchro BDD, CRM, comptabilité. Prix : 500-2 500€ setup + 100-250€/mois.",
            icon: "🔄",
          },
          {
            title: "Génération de contenu automatisée",
            description:
              "Fiches produit, descriptions SEO, posts réseaux sociaux générés et planifiés. Prix : 1 000-3 000€ setup + 200-500€/mois.",
            icon: "✍️",
          },
        ],
      },
      {
        id: "7-7",
        type: "heading",
        level: 2,
        text: "Comment packager ton offre",
      },
      {
        id: "7-8",
        type: "text",
        html: "<p>Ne vends jamais un \"script\". Vends une <strong>solution</strong>. Le client se fiche de savoir que c'est du Node.js avec Puppeteer derrière. Ce qu'il veut, c'est : \"Chaque matin, je reçois un email avec les prix de mes 5 concurrents et les variations de la semaine.\" C'est ça ta promesse de vente.</p>",
      },
      {
        id: "7-9",
        type: "comparison",
        headers: ["Ce que tu fais", "Ce que tu vends"],
        rows: [
          { cells: ["Script de scraping avec cheerio", "Veille concurrentielle automatique avec alertes en temps réel"] },
          { cells: ["Cron job + Resend", "Système de relance client intelligent qui augmente le taux de conversion"] },
          { cells: ["Descriptions produits IA + analyse d'avis", "Dashboard de performance avec rapports automatiques personnalisés"] },
          { cells: ["Workflow multi-étapes", "Solution d'automatisation complète qui élimine 20h de travail manuel par mois"] },
        ],
      },
      { id: "m7a-dia-7-2h", type: "heading", level: 3, text: "Ce que tu fais vs ce que le client voit" },
      { id: "m7a-dia-7-2", type: "diagram", variant: "versus", nodes: [
        { id: "n1", label: "Ce que tu fais (invisible)", description: "Tu écris un script de 50 lignes, tu le déploies sur un VPS à 5€/mois, tu planifies un cron job" },
        { id: "n2", label: "Ce que le client voit (visible)", description: "Chaque matin, un rapport apparaît dans sa boîte mail avec les KPIs de la veille, sans lever le petit doigt" },
      ]},
      { id: "m7a-dia-7-2c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme un restaurant. Le client voit une assiette magnifique. Il ne voit pas les 2h de préparation en cuisine. Tu vends l'assiette, pas la recette." },
      {
        id: "7-10",
        type: "separator",
        style: "dots",
      },
      {
        id: "7-11",
        type: "heading",
        level: 2,
        text: "Déployer pour tes clients : les options",
      },
      {
        id: "7-12",
        type: "text",
        html: "<p>Une fois ton automatisation prête, il faut la déployer quelque part pour qu'elle tourne 24/7. Voici les options par ordre de simplicité :</p>",
      },
      {
        id: "7-13",
        type: "comparison",
        headers: ["Option", "Coût", "Idéal pour"],
        rows: [
          { cells: ["Railway / Render", "0-7$/mois", "Scripts simples, démarrage rapide, pas de maintenance serveur"] },
          { cells: ["VPS (Hetzner, OVH)", "5-15€/mois", "Multiples automatisations, contrôle total, meilleur rapport qualité-prix"] },
          { cells: ["Vercel / Netlify (cron)", "Gratuit-20$/mois", "Tâches légères déclenchées par URL (serverless)"] },
          { cells: ["PM2 sur VPS", "Inclus dans le VPS", "Process manager Node.js, redémarrage auto, monitoring intégré"] },
        ],
      },
      {
        id: "7-14",
        type: "code",
        language: "bash",
        filename: "deploy-vps.sh",
        code: `# Déployer une automatisation sur un VPS avec PM2

# 1. Se connecter au VPS
ssh user@mon-vps.fr

# 2. Cloner le projet
git clone https://github.com/mon-compte/mon-automation.git
cd mon-automation

# 3. Installer les dépendances
npm install

# 4. Configurer les variables d'environnement
cp .env.example .env
nano .env  # Ajouter les clés API

# 5. Lancer avec PM2 (process manager)
pm2 start scheduler.js --name "veille-client-dupont"

# 6. Sauvegarder la config PM2 (survit au reboot)
pm2 save
pm2 startup

# 7. Vérifier que tout tourne
pm2 status
pm2 logs veille-client-dupont`,
      },
      { id: "m7a-dia-7-3h", type: "heading", level: 3, text: "Le cycle de vie d'un contrat d'automatisation" },
      { id: "m7a-dia-7-3", type: "diagram", variant: "cycle", nodes: [
        { id: "n1", label: "Audit gratuit", description: "Tu identifies les tâches répétitives du client et tu estimes le gain de temps" },
        { id: "n2", label: "Proposition + Setup", description: "Tu développes et déploies l'automatisation (500-3000€ one-shot)" },
        { id: "n3", label: "Maintenance mensuelle", description: "Tu surveilles, corriges et ajustes chaque mois (100-500€/mois récurrent)" },
        { id: "n4", label: "Upsell évolutions", description: "Le client voit les résultats et te demande d'automatiser d'autres tâches → nouveau cycle" },
      ]},
      { id: "m7a-dia-7-3c", type: "callout", variant: "tip", html: "<strong>Analogie :</strong> c'est comme un abonnement à une salle de sport. Le setup est l'inscription initiale. La maintenance est l'abonnement mensuel. Et quand le client voit ses résultats, il prend un coach personnel (l'upsell)." },
      {
        id: "7-15",
        type: "heading",
        level: 2,
        text: "Fixer tes prix : la méthode ROI",
      },
      {
        id: "7-16",
        type: "text",
        html: "<p>La règle d'or du pricing en automatisation : facture en fonction du temps que tu fais économiser au client, pas du temps que tu passes à coder. Si ton automatisation fait gagner 15 heures par mois à une équipe dont le coût horaire chargé est de 40€, tu fais économiser 600€/mois. Facturer 200€/mois pour ça, c'est un ROI de 3x pour le client — il dit oui sans hésiter.</p>",
      },
      {
        id: "7-17",
        type: "callout",
        variant: "success",
        title: "Grille tarifaire de référence",
        html: "<p><strong>Setup (one-shot)</strong> : 500€ à 3 000€ selon la complexité. Inclut le développement, le déploiement et la configuration initiale.<br/><strong>Maintenance mensuelle</strong> : 100€ à 500€/mois. Inclut la surveillance, les corrections de bugs, et les ajustements mineurs.<br/><strong>Évolutions</strong> : facturées au projet ou à l'heure (80-150€/h).<br/>Un portefeuille de 10 clients en maintenance à 250€/mois moyen = 2 500€ de revenus récurrents mensuels.</p>",
      },
      {
        id: "7-18",
        type: "heading",
        level: 3,
        text: "Le contrat de maintenance : ton revenu récurrent",
      },
      {
        id: "7-19",
        type: "text",
        html: "<p>Le vrai business, c'est la maintenance. Le setup, c'est le ticket d'entrée. Mais le contrat mensuel, c'est ce qui paye tes factures chaque mois sans que tu aies à trouver de nouveaux clients. Inclus dans ta maintenance : surveillance des scripts (est-ce qu'ils tournent ?), correction en cas de bug ou de changement sur le site scrapé, rapport mensuel d'activité au client, et une évolution mineure par mois (ajout d'un nouveau concurrent à surveiller, nouveau template d'email, etc.).</p>",
      },
      {
        id: "7-20",
        type: "quiz-inline",
        question:
          "Un client te demande d'automatiser son reporting hebdomadaire. Le processus manuel lui prend 4 heures par semaine (coût chargé : 50€/h). Quel prix est le plus cohérent pour ton service ?",
        options: [
          { id: "a", text: "50€/mois — c'est un bon prix pour un script" },
          { id: "b", text: "150-250€/mois — le client économise 800€/mois, le ROI est évident" },
          { id: "c", text: "900€/mois — le maximum que je peux demander" },
          { id: "d", text: "Gratuit, pour me faire un portfolio" },
        ],
        correctId: "b",
        explanation:
          "Le client économise environ 800€/mois (4h x 50€ x 4 semaines). Facturer 150-250€/mois lui donne un ROI de 3x à 5x — c'est une évidence économique pour lui. Facturer trop bas décrédibilise ton service, et trop haut dépasse la zone de confort pour une PME.",
      },
      {
        id: "7-21",
        type: "checklist",
        title: "Check-list du module terminé",
        items: [
          { id: "c1", text: "J'ai identifié au moins 3 automatisations vendables dans mon marché" },
          { id: "c2", text: "J'ai préparé une offre packagée avec setup + maintenance mensuelle" },
          { id: "c3", text: "Je sais déployer un script sur un VPS avec PM2" },
          { id: "c4", text: "J'ai calculé le ROI pour mon client pour justifier mon prix" },
          { id: "c5", text: "J'ai un template de proposition commerciale pour les automatisations" },
          { id: "c6", text: "Je peux expliquer mon service en termes de résultat, pas de technique" },
        ],
      },
    ]),
    exercise:
      "Prépare une offre commerciale complète pour un service d'automatisation : (1) Choisis un client type (e-commerce, coach, agence...) et identifie 3 tâches à automatiser. (2) Calcule le temps économisé et le ROI pour chaque automatisation. (3) Rédige une proposition commerciale d'une page avec : problème, solution, livrables, prix (setup + mensuel), garantie. (4) Déploie un de tes workflows sur Railway ou un VPS et documente le processus pour pouvoir le reproduire pour chaque client.",
  },
];
