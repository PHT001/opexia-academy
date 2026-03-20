function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_5_LESSONS = [
  {
    order: 1,
    module: 5,
    title: "C'est quoi une API ? (expliqué comme à un enfant)",
    slug: "cest-quoi-une-api",
    duration: "20 min",
    description: "Comprends le concept d'API une fois pour toutes avec la métaphore du restaurant. GET, POST, PUT, DELETE, headers, body, réponses — tu vas tout maîtriser.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "L'API, c'est le serveur de restaurant",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>Imagine que tu es dans un restaurant. Toi, tu es le <strong>client</strong>. La cuisine en arrière, c'est le <strong>serveur</strong> (le vrai, informatique). Et entre vous deux, il y a le serveur (le garçon) — c'est <strong>l'API</strong>.</p><p>Tu ne vas pas directement en cuisine prendre ton plat. Tu passes ta commande au garçon. Il transmet à la cuisine. La cuisine prépare. Le garçon te ramène le plat. C'est exactement comme ça qu'une API fonctionne.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>API</strong> = Application Programming Interface. C'est une interface qui permet à deux applications de communiquer entre elles via des règles précises.",
      },
      {
        id: "1-4",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "n1", label: "Ton app (le client)", description: "Envoie une requête HTTP" },
          { id: "n2", label: "L'API (le serveur de salle)", description: "Reçoit, valide, transmet" },
          { id: "n3", label: "La base de données (la cuisine)", description: "Traite et retourne les données" },
          { id: "n4", label: "La réponse JSON", description: "Retourne les données formatées" },
        ],
      },
      {
        id: "1-5",
        type: "heading",
        level: 2,
        text: "Les 4 verbes HTTP : GET, POST, PUT, DELETE",
      },
      {
        id: "1-6",
        type: "comparison",
        headers: ["Verbe", "Action", "Analogie restaurant", "Exemple"],
        rows: [
          { cells: ["GET", "Lire des données", "Voir le menu", "GET /users → liste des utilisateurs"] },
          { cells: ["POST", "Créer une ressource", "Passer une commande", "POST /users → créer un compte"] },
          { cells: ["PUT", "Modifier une ressource", "Changer sa commande", "PUT /users/42 → modifier un profil"] },
          { cells: ["DELETE", "Supprimer une ressource", "Annuler la commande", "DELETE /users/42 → supprimer un compte"] },
        ],
      },
      {
        id: "1-7",
        type: "heading",
        level: 2,
        text: "Anatomie d'une requête HTTP",
      },
      {
        id: "1-8",
        type: "text",
        html: "<p>Une requête API, c'est comme une lettre : elle a une <strong>adresse</strong> (l'URL), des <strong>en-têtes</strong> (headers) et parfois un <strong>corps</strong> (body). La réponse suit le même format, avec en plus un <strong>code de statut</strong>.</p>",
      },
      {
        id: "1-9",
        type: "code",
        language: "javascript",
        filename: "premier-appel-api.js",
        code: `// Un appel GET simple — lire des données
const response = await fetch('https://api.example.com/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TON_TOKEN_ICI',
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
console.log(data);
// → { users: [{ id: 1, name: "Alice" }, ...] }

// Un appel POST — créer une ressource
const createResponse = await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer TON_TOKEN_ICI',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Bob',
    email: 'bob@example.com',
  }),
});

const newUser = await createResponse.json();
console.log(newUser);
// → { id: 2, name: "Bob", email: "bob@example.com" }`,
      },
      {
        id: "1-10",
        type: "heading",
        level: 3,
        text: "Les codes de statut HTTP à connaître",
      },
      {
        id: "1-11",
        type: "comparison",
        headers: ["Code", "Signification", "Quand tu le vois"],
        rows: [
          { cells: ["200 OK", "Tout s'est bien passé", "Ta requête a réussi"] },
          { cells: ["201 Created", "Ressource créée", "POST réussi"] },
          { cells: ["400 Bad Request", "Ta requête est mal formée", "Paramètre manquant ou invalide"] },
          { cells: ["401 Unauthorized", "Non authentifié", "Token absent ou expiré"] },
          { cells: ["403 Forbidden", "Pas les droits", "Tu n'as pas accès à cette ressource"] },
          { cells: ["404 Not Found", "Introuvable", "La ressource n'existe pas"] },
          { cells: ["500 Internal Server Error", "Erreur côté serveur", "Bug dans l'API (pas ta faute)"] },
        ],
      },
      {
        id: "1-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Règle mnémotechnique :</strong> 2xx = succès, 4xx = erreur de ta part, 5xx = erreur du serveur. Si tu vois un 4xx, relis ta requête. Si tu vois un 5xx, attends ou contacte le support.",
      },
      {
        id: "1-13",
        type: "heading",
        level: 2,
        text: "Tester une API sans coder : avec Postman ou curl",
      },
      {
        id: "1-14",
        type: "code",
        language: "text",
        filename: "commande-curl.sh",
        code: `# Tester une API publique en ligne de commande
curl -X GET "https://jsonplaceholder.typicode.com/posts/1" \\
  -H "Content-Type: application/json"

# Résultat :
# {
#   "userId": 1,
#   "id": 1,
#   "title": "sunt aut facere repellat...",
#   "body": "quia et suscipit..."
# }`,
      },
      {
        id: "1-15",
        type: "callout",
        variant: "warning",
        html: "<strong>Ne jamais mettre tes clés API dans le code source !</strong> Utilise des variables d'environnement (<code>.env</code>) et ajoute <code>.env</code> à ton <code>.gitignore</code>. Une clé exposée sur GitHub peut être utilisée et te coûter des centaines d'euros.",
      },
      {
        id: "1-16",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-17",
        type: "quiz-inline",
        question: "Tu veux récupérer la liste des commandes d'un utilisateur depuis une API. Quel verbe HTTP utilises-tu ?",
        options: [
          { id: "a", text: "POST — pour créer une requête de données" },
          { id: "b", text: "GET — pour lire des données sans les modifier" },
          { id: "c", text: "PUT — pour mettre à jour les commandes" },
          { id: "d", text: "DELETE — pour vider l'historique des commandes" },
        ],
        correctId: "b",
        explanation: "GET est le verbe pour lire des données. Il ne modifie rien côté serveur — c'est une opération idempotente et safe. POST crée, PUT modifie, DELETE supprime.",
      },
      {
        id: "1-18",
        type: "checklist",
        title: "Ce que tu sais faire maintenant",
        items: [
          { id: "c1", text: "Expliquer ce qu'est une API avec la métaphore du restaurant" },
          { id: "c2", text: "Distinguer GET, POST, PUT et DELETE et savoir quand les utiliser" },
          { id: "c3", text: "Lire et comprendre une réponse HTTP (code de statut + body JSON)" },
          { id: "c4", text: "Écrire un appel fetch() en JavaScript avec headers et body" },
          { id: "c5", text: "Identifier les erreurs 4xx (client) vs 5xx (serveur)" },
          { id: "c6", text: "Tester une API avec curl ou Postman sans écrire une ligne de front-end" },
        ],
      },
    ]),
    exercise: "<p>Va sur <strong>jsonplaceholder.typicode.com</strong> et fais 3 appels avec <code>fetch()</code> dans la console de ton navigateur : un GET pour lire un post, un POST pour simuler la création d'un post, et un DELETE pour simuler la suppression. Observe les réponses JSON et les codes de statut retournés.</p>",
    quiz: [
      { type: "mcq", question: "Quel verbe HTTP utilises-tu pour lire des données depuis une API sans les modifier ?", options: JSON.stringify(["POST", "GET", "PUT", "DELETE"]), correctAnswer: "GET", explanation: "GET est le verbe de lecture. Il ne modifie rien côté serveur — c'est une opération safe et idempotente. POST crée, PUT modifie, DELETE supprime." },
      { type: "true_false", question: "Un code de statut HTTP commençant par 4xx indique une erreur côté serveur.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les codes 4xx indiquent une erreur côté client (requête mal formée, non authentifié, accès interdit). Ce sont les codes 5xx qui signalent une erreur côté serveur." },
      { type: "mcq", question: "Dans la métaphore du restaurant, que représente l'API ?", options: JSON.stringify(["Le client qui commande", "Le serveur (garçon) qui transmet les commandes", "La cuisine qui prépare les plats", "Le menu affiché sur la table"]), correctAnswer: "Le serveur (garçon) qui transmet les commandes", explanation: "L'API joue le rôle d'intermédiaire entre le client (ton application) et le serveur/base de données (la cuisine). Elle reçoit la demande, la transmet et retourne la réponse." },
      { type: "true_false", question: "Il est recommandé de stocker ses clés API directement dans le code source pour plus de simplicité.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les clés API doivent être stockées dans des variables d'environnement (.env) et jamais dans le code source. Une clé exposée sur GitHub peut être exploitée et engendrer des coûts importants." },
      { type: "mcq", question: "Un client vous signale que son application affiche 'Erreur 403' quand ses utilisateurs essaient d'accéder à leurs données. Que lui répondez-vous ?", options: JSON.stringify(["C'est un problème de connexion internet, il faut réessayer plus tard", "Le code 403 signifie que l'accès est interdit — il faut vérifier les permissions et l'authentification de l'API", "Le serveur est en panne, il faut le redémarrer", "C'est un bug dans le navigateur, il faut vider le cache"]), correctAnswer: "Le code 403 signifie que l'accès est interdit — il faut vérifier les permissions et l'authentification de l'API", explanation: "Le code 403 Forbidden signifie que le serveur comprend la requête mais refuse de l'autoriser. Il faut vérifier les clés API, les tokens d'authentification et les permissions (comme le RLS Supabase). Ce n'est ni un problème réseau ni un bug navigateur." },
    ],
  },

  {
    order: 2,
    module: 5,
    title: "Stripe : accepter des paiements en ligne",
    slug: "stripe-accepter-paiements-en-ligne",
    duration: "30 min",
    description: "Intègre Stripe dans ton projet en moins d'une heure. Création de compte, Stripe Checkout, gestion des webhooks et passage en production — tout ce qu'il faut pour encaisser de l'argent.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Pourquoi Stripe et pas PayPal ?",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Stripe est la référence pour les développeurs. L'API est claire, la documentation est exemplaire, et tu peux tout tester en mode sandbox avant de toucher de l'argent réel. PayPal reste pertinent pour les marketplaces B2C, mais pour une SaaS ou une agence, Stripe est le choix numéro un.</p>",
      },
      {
        id: "2-3",
        type: "comparison",
        headers: ["Critère", "Stripe", "PayPal"],
        rows: [
          { cells: ["DX (Developer Experience)", "Excellente — docs, SDK, CLI", "Correcte mais complexe"] },
          { cells: ["Frais", "1.5% + 0.25€ (Europe)", "3.4% + 0.35€ (standard)"] },
          { cells: ["Mode test intégré", "Oui, cartes de test dédiées", "Sandbox séparé, plus lourd"] },
          { cells: ["Webhooks", "Robustes, bien documentés", "Disponibles mais moins fiables"] },
          { cells: ["Idéal pour", "SaaS, agences, abonnements", "Marketplaces, e-commerce grand public"] },
        ],
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "Étape 1 : Créer ton compte et récupérer les clés",
      },
      {
        id: "2-5",
        type: "steps",
        steps: [
          { title: "Créer un compte sur stripe.com", description: "Remplis les infos de ton entreprise (ou en solo). Tu peux commencer sans vérification d'identité pour les tests." },
          { title: "Aller dans Developers > API Keys", description: "Tu trouveras ta clé publique (pk_test_...) et ta clé secrète (sk_test_...). Ne partage JAMAIS la clé secrète." },
          { title: "Installer le SDK Stripe", description: "npm install stripe @stripe/stripe-js — le premier est pour le backend, le second pour le frontend." },
          { title: "Configurer les variables d'environnement", description: "STRIPE_SECRET_KEY=sk_test_... et NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... dans ton .env" },
        ],
      },
      {
        id: "2-6",
        type: "callout",
        variant: "warning",
        html: "<strong>Règle absolue :</strong> la clé secrète (<code>sk_test_...</code>) ne touche <strong>jamais</strong> le front-end ni le code versionné sur GitHub. Elle vit uniquement côté serveur dans des variables d'environnement.",
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Étape 2 : Créer une session Checkout",
      },
      {
        id: "2-8",
        type: "code",
        language: "typescript",
        filename: "app/api/create-checkout/route.ts",
        code: `import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: Request) {
  const { priceId, userId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId, // ID du prix créé dans le dashboard Stripe
        quantity: 1,
      },
    ],
    mode: 'payment', // ou 'subscription' pour un abonnement récurrent
    success_url: \`\${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/cancel\`,
    metadata: {
      userId, // Pour retrouver l'utilisateur dans le webhook
    },
  });

  return NextResponse.json({ url: session.url });
}`,
      },
      {
        id: "2-9",
        type: "code",
        language: "typescript",
        filename: "components/BuyButton.tsx",
        code: `'use client';

export function BuyButton({ priceId }: { priceId: string }) {
  const handleCheckout = async () => {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId, userId: 'user_123' }),
    });

    const { url } = await response.json();
    window.location.href = url; // Redirige vers la page Stripe hébergée
  };

  return (
    <button onClick={handleCheckout} className="btn-primary">
      Acheter maintenant
    </button>
  );
}`,
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Étape 3 : Écouter les webhooks pour confirmer le paiement",
      },
      {
        id: "2-11",
        type: "text",
        html: "<p>La page de succès s'affiche quand l'utilisateur est redirigé — mais ça ne veut pas dire que le paiement est confirmé. Le webhook <code>checkout.session.completed</code> est l'événement fiable pour activer un abonnement ou livrer un produit.</p>",
      },
      {
        id: "2-12",
        type: "code",
        language: "typescript",
        filename: "app/api/webhook/stripe/route.ts",
        code: `import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    // Stripe vérifie que la requête vient bien de Stripe (signature HMAC)
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Signature webhook invalide:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Traitement des événements
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      // → Activer l'accès, envoyer l'email de confirmation, etc.
      console.log(\`Paiement confirmé pour l'utilisateur \${userId}\`);
      break;
    }
    case 'customer.subscription.deleted': {
      // → Désactiver l'accès à l'abonnement
      break;
    }
  }

  return NextResponse.json({ received: true });
}`,
      },
      {
        id: "2-13",
        type: "heading",
        level: 3,
        text: "Tester en local avec le Stripe CLI",
      },
      {
        id: "2-14",
        type: "code",
        language: "text",
        filename: "terminal",
        code: `# Installer le CLI Stripe
brew install stripe/stripe-cli/stripe  # macOS
# ou télécharger sur stripe.com/docs/stripe-cli

# S'authentifier
stripe login

# Forwarder les webhooks vers ton serveur local
stripe listen --forward-to localhost:3000/api/webhook/stripe

# Dans un autre terminal, simuler un paiement
stripe trigger checkout.session.completed`,
      },
      {
        id: "2-15",
        type: "callout",
        variant: "success",
        html: "<strong>Cartes de test Stripe :</strong> utilise <code>4242 4242 4242 4242</code> (paiement réussi), <code>4000 0000 0000 9995</code> (fonds insuffisants), <code>4000 0025 0000 3155</code> (authentification 3DS requise). Date : n'importe quelle date future. CVC : n'importe quel nombre à 3 chiffres.",
      },
      {
        id: "2-16",
        type: "separator",
        style: "line",
      },
      {
        id: "2-17",
        type: "quiz-inline",
        question: "Pourquoi ne faut-il pas activer l'accès d'un utilisateur uniquement sur la base de la page /success ?",
        options: [
          { id: "a", text: "Parce que Stripe ne redirige pas toujours vers /success" },
          { id: "b", text: "Parce qu'un utilisateur peut accéder à /success sans avoir payé en manipulant l'URL" },
          { id: "c", text: "Parce que la page /success est trop lente à charger" },
          { id: "d", text: "Parce que Stripe recommande d'utiliser /complete à la place" },
        ],
        correctId: "b",
        explanation: "La page /success est une simple redirection navigateur — n'importe qui peut y accéder directement en tapant l'URL. Le webhook checkout.session.completed est la source de vérité fiable car il vient directement des serveurs Stripe, avec une signature cryptographique vérifiable.",
      },
      {
        id: "2-18",
        type: "checklist",
        title: "Checklist intégration Stripe",
        items: [
          { id: "c1", text: "Compte Stripe créé, clés publique et secrète récupérées" },
          { id: "c2", text: "Clé secrète stockée uniquement en variable d'environnement côté serveur" },
          { id: "c3", text: "Endpoint /api/create-checkout fonctionnel et testé" },
          { id: "c4", text: "Webhook /api/webhook/stripe avec vérification de signature" },
          { id: "c5", text: "Tests réalisés avec le Stripe CLI et les cartes de test" },
          { id: "c6", text: "Variables d'environnement de production configurées (clés live)" },
        ],
      },
    ]),
    exercise: "<p>Crée un mini-projet Next.js avec un bouton \"Acheter (5€)\". Configure un produit et un prix dans ton dashboard Stripe test. Implémente la route de création de session Checkout et la route webhook. Teste un paiement complet avec la carte <code>4242 4242 4242 4242</code> et vérifie que l'événement est bien reçu dans ta console locale via le Stripe CLI.</p>",
    quiz: [
      { type: "mcq", question: "Quelle clé Stripe ne doit JAMAIS être exposée côté frontend ?", options: JSON.stringify(["La clé publique (pk_test_...)", "La clé secrète (sk_test_...)", "L'identifiant du produit (prod_...)", "L'identifiant du prix (price_...)"]), correctAnswer: "La clé secrète (sk_test_...)", explanation: "La clé secrète (sk_test_... ou sk_live_...) permet d'effectuer des opérations sensibles sur ton compte Stripe. Seule la clé publique (pk_test_...) peut être utilisée côté client." },
      { type: "true_false", question: "Stripe Checkout gère automatiquement la page de paiement, la validation des cartes et la conformité PCI.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est l'un des grands avantages de Stripe Checkout : Stripe héberge la page de paiement et gère toute la conformité PCI-DSS, ce qui évite de manipuler directement les données de carte bancaire." },
      { type: "mcq", question: "Quel numéro de carte utilise-t-on pour simuler un paiement réussi en mode test Stripe ?", options: JSON.stringify(["4000 0000 0000 0002", "4242 4242 4242 4242", "5555 5555 5555 4444", "1234 5678 9012 3456"]), correctAnswer: "4242 4242 4242 4242", explanation: "La carte 4242 4242 4242 4242 est la carte de test standard Stripe pour simuler un paiement réussi. La carte 4000 0000 0000 0002 simule un refus." },
      { type: "true_false", question: "Les webhooks Stripe sont inutiles si tu utilises Stripe Checkout car le paiement est déjà confirmé côté client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les webhooks sont essentiels car la confirmation côté client peut être falsifiée. Le webhook checkout.session.completed est la source de vérité côté serveur pour confirmer qu'un paiement a réellement abouti." },
      { type: "mcq", question: "Vous venez de déployer un site e-commerce avec Stripe pour un client. En test, le paiement semble fonctionner côté client mais la commande n'apparaît pas dans la base de données. Que vérifiez-vous en priorité ?", options: JSON.stringify(["Le CSS de la page de confirmation", "Que le webhook Stripe est bien configuré et que l'événement checkout.session.completed est traité côté serveur", "Que le client utilise Chrome et pas Firefox", "Que le produit est bien visible sur la page d'accueil"]), correctAnswer: "Que le webhook Stripe est bien configuré et que l'événement checkout.session.completed est traité côté serveur", explanation: "La confirmation côté client peut être falsifiée. Le webhook checkout.session.completed est la source de vérité côté serveur. Si la commande n'apparaît pas en BDD, c'est probablement que le webhook n'est pas configuré ou que l'endpoint ne traite pas correctement l'événement." },
    ],
  },

  {
    order: 3,
    module: 5,
    title: "Webhooks : faire parler les apps entre elles",
    slug: "webhooks-faire-parler-les-apps",
    duration: "25 min",
    description: "Comprends la différence entre polling et webhooks, apprends à recevoir des événements en temps réel, traiter les payloads et sécuriser tes endpoints avec des signatures HMAC.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Polling vs Webhooks : arrête de poser des questions, attends qu'on t'appelle",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Imagine que tu attends un colis. Avec le <strong>polling</strong>, tu appelles le livreur toutes les 5 minutes pour demander 'il est où mon colis ?'. Avec un <strong>webhook</strong>, tu donnes ton numéro au livreur et il te prévient quand il arrive.</p><p>Le webhook, c'est du push : le service externe appelle ton serveur dès qu'un événement se produit. Pas de requêtes inutiles, pas de délai.</p>",
      },
      {
        id: "3-3",
        type: "comparison",
        headers: ["Approche", "Polling", "Webhook"],
        rows: [
          { cells: ["Déclencheur", "Ton app appelle l'API régulièrement", "L'API appelle ton serveur à chaque événement"] },
          { cells: ["Charge serveur", "Élevée (requêtes constantes)", "Faible (uniquement sur événement)"] },
          { cells: ["Délai", "Dépend de l'intervalle (5s, 30s…)", "Quasi temps réel (<1s)"] },
          { cells: ["Complexité", "Simple à implémenter", "Nécessite un endpoint public accessible"] },
          { cells: ["Cas d'usage", "Données qui changent souvent", "Événements discrets (paiement, message…)"] },
        ],
      },
      {
        id: "3-4",
        type: "heading",
        level: 2,
        text: "Anatomie d'un webhook",
      },
      {
        id: "3-5",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "n1", label: "Événement externe", description: "Ex: paiement Stripe confirmé" },
          { id: "n2", label: "Service tiers", description: "Stripe, GitHub, SendGrid..." },
          { id: "n3", label: "Requête HTTP POST", description: "Vers ton URL publique avec payload JSON" },
          { id: "n4", label: "Ton endpoint webhook", description: "Reçoit, vérifie la signature, traite" },
          { id: "n5", label: "Réponse 200 OK", description: "Renvoie 200 rapidement, traite en async" },
        ],
      },
      {
        id: "3-6",
        type: "callout",
        variant: "warning",
        html: "<strong>Règle critique :</strong> réponds toujours <code>200 OK</code> rapidement à un webhook (dans les 5 secondes). Si tu mets trop longtemps, le service va considérer que c'est un timeout et renvoyer l'événement — parfois des dizaines de fois. Traite les données en arrière-plan si le traitement est long.",
      },
      {
        id: "3-7",
        type: "heading",
        level: 2,
        text: "Créer un endpoint webhook en Next.js",
      },
      {
        id: "3-8",
        type: "code",
        language: "typescript",
        filename: "app/api/webhook/github/route.ts",
        code: `import { NextResponse } from 'next/server';
import crypto from 'crypto';

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET!;

// Vérifie la signature HMAC-SHA256 envoyée par GitHub
function verifySignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  // Comparaison en temps constant pour éviter les timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(signature)
  );
}

export async function POST(request: Request) {
  const body = await request.text(); // Lire comme texte brut pour la vérification
  const signature = request.headers.get('x-hub-signature-256') ?? '';

  if (!verifySignature(body, signature)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = JSON.parse(body);
  const event = request.headers.get('x-github-event');

  // Traitement selon le type d'événement
  if (event === 'push') {
    const branch = payload.ref.replace('refs/heads/', '');
    console.log(\`Push sur la branche \${branch} par \${payload.pusher.name}\`);
    // → Déclencher un déploiement, notifier Slack, etc.
  }

  if (event === 'pull_request' && payload.action === 'opened') {
    console.log(\`Nouvelle PR : \${payload.pull_request.title}\`);
    // → Notifier l'équipe, lancer les tests CI, etc.
  }

  // Toujours répondre 200 rapidement
  return NextResponse.json({ received: true });
}`,
      },
      {
        id: "3-9",
        type: "heading",
        level: 3,
        text: "Exposer ton serveur local avec ngrok",
      },
      {
        id: "3-10",
        type: "steps",
        steps: [
          { title: "Installer ngrok", description: "brew install ngrok (macOS) ou télécharger sur ngrok.com. Crée un compte gratuit pour des URLs stables." },
          { title: "Lancer le tunnel", description: "ngrok http 3000 — ngrok te donne une URL publique type https://abc123.ngrok.io qui pointe vers ton localhost:3000" },
          { title: "Configurer le webhook", description: "Dans le dashboard du service (GitHub, Stripe...), colle l'URL ngrok + ton path : https://abc123.ngrok.io/api/webhook/github" },
          { title: "Inspecter les requêtes", description: "Ouvre http://localhost:4040 — ngrok affiche toutes les requêtes reçues avec les headers et payloads. Parfait pour déboguer." },
        ],
      },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Sécuriser tes webhooks : les signatures HMAC",
      },
      {
        id: "3-12",
        type: "text",
        html: "<p>N'importe qui peut envoyer une requête POST à ton endpoint webhook. Pour s'assurer que la requête vient bien du service légitime, chaque provider signe son payload avec un secret partagé. Tu vérifies cette signature avant de traiter quoi que ce soit.</p>",
      },
      {
        id: "3-13",
        type: "code",
        language: "javascript",
        filename: "utils/verify-webhook.js",
        code: `import crypto from 'crypto';

/**
 * Vérifie une signature webhook générique (HMAC-SHA256)
 * Compatible avec GitHub, Shopify, et la plupart des services
 */
export function verifyWebhookSignature({
  payload,      // Le body brut (string, pas parsé)
  signature,    // La signature envoyée dans le header
  secret,       // Ton secret partagé avec le service
  algorithm = 'sha256',
}) {
  const hmac = crypto.createHmac(algorithm, secret);
  const computedSignature = hmac.update(payload, 'utf8').digest('hex');

  const expected = \`\${algorithm}=\${computedSignature}\`;
  const provided = signature;

  // timingSafeEqual empêche les attaques par timing
  if (expected.length !== provided.length) return false;

  return crypto.timingSafeEqual(
    Buffer.from(expected, 'utf8'),
    Buffer.from(provided, 'utf8')
  );
}`,
      },
      {
        id: "3-14",
        type: "callout",
        variant: "tip",
        html: "<strong>Idempotence :</strong> un même événement webhook peut être livré plusieurs fois (réseau instable, timeout). Ton code doit être idempotent — traiter deux fois le même événement ne doit pas créer deux commandes ou deux emails. Utilise l'ID unique de l'événement pour dédoublonner.",
      },
      {
        id: "3-15",
        type: "separator",
        style: "space",
      },
      {
        id: "3-16",
        type: "quiz-inline",
        question: "Ton endpoint webhook met 30 secondes à traiter un événement (envoi d'email + mise à jour BDD). Stripe renvoie l'événement 3 fois car il considère le premier appel comme un timeout. Comment résoudre ça ?",
        options: [
          { id: "a", text: "Augmenter le timeout de Stripe dans les paramètres du dashboard" },
          { id: "b", text: "Répondre 200 immédiatement, puis traiter l'événement en arrière-plan de façon asynchrone" },
          { id: "c", text: "Traiter l'événement plus rapidement en optimisant le code" },
          { id: "d", text: "Utiliser du polling à la place des webhooks pour ce type de traitement" },
        ],
        correctId: "b",
        explanation: "La bonne pratique est de répondre 200 OK immédiatement après avoir vérifié la signature et enregistré l'événement, puis de déléguer le traitement à une queue ou un job asynchrone (ex: Vercel Background Functions, BullMQ, ou simplement Promise.resolve() pour des cas simples).",
      },
      {
        id: "3-17",
        type: "checklist",
        title: "Checklist sécurité webhooks",
        items: [
          { id: "c1", text: "Endpoint HTTPS uniquement (jamais HTTP en production)" },
          { id: "c2", text: "Vérification de signature HMAC avant tout traitement" },
          { id: "c3", text: "Réponse 200 renvoyée dans les 5 secondes maximum" },
          { id: "c4", text: "Traitement idempotent (dédoublonnage par event ID)" },
          { id: "c5", text: "Logging des événements reçus pour faciliter le debug" },
          { id: "c6", text: "Secret webhook stocké en variable d'environnement" },
        ],
      },
    ]),
    exercise: "<p>Configure un webhook GitHub sur un dépôt de test. À chaque push sur la branche main, ton serveur local (exposé via ngrok) doit logger le nom du pusher et le nombre de commits. Teste avec 2-3 pushes et vérifie que la signature est bien validée. Ajoute intentionnellement une mauvaise signature pour vérifier que ton code rejette la requête avec un 401.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence fondamentale entre le polling et les webhooks ?", options: JSON.stringify(["Le polling est plus rapide que les webhooks", "Les webhooks envoient les données en temps réel au lieu de vérifier périodiquement", "Le polling nécessite une URL publique", "Les webhooks ne fonctionnent qu'avec GitHub"]), correctAnswer: "Les webhooks envoient les données en temps réel au lieu de vérifier périodiquement", explanation: "Avec le polling, ton serveur interroge régulièrement l'API (gaspillage de ressources). Avec les webhooks, c'est le service qui te notifie automatiquement quand un événement se produit — en temps réel et sans requêtes inutiles." },
      { type: "true_false", question: "Pour recevoir des webhooks en développement local, il faut exposer son localhost avec un outil comme ngrok.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les services comme GitHub ou Stripe envoient les webhooks vers une URL publique. Comme localhost n'est pas accessible depuis internet, ngrok crée un tunnel HTTPS public qui redirige vers ton serveur local." },
      { type: "mcq", question: "Pourquoi faut-il toujours vérifier la signature d'un webhook entrant ?", options: JSON.stringify(["Pour accélérer le traitement de la requête", "Pour s'assurer que la requête vient bien du service légitime et n'a pas été falsifiée", "Pour compresser les données reçues", "Pour formater le JSON correctement"]), correctAnswer: "Pour s'assurer que la requête vient bien du service légitime et n'a pas été falsifiée", explanation: "Sans vérification de signature, n'importe qui connaissant ton URL webhook pourrait envoyer de fausses données. La signature HMAC garantit que la requête vient bien du service d'origine et n'a pas été modifiée." },
      { type: "true_false", question: "Un webhook doit toujours retourner un code 200 rapidement, même si le traitement prend du temps.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les services qui envoient des webhooks attendent une réponse rapide (généralement sous 5-10 secondes). Si ton endpoint met trop de temps, le service considère que la livraison a échoué et réessaie. Il faut répondre 200 immédiatement et traiter les données en arrière-plan si nécessaire." },
      { type: "mcq", question: "Un client vous appelle en urgence : son service webhook reçoit des requêtes suspectes qui créent de fausses commandes dans sa base de données. Quelle est la cause la plus probable et la solution ?", options: JSON.stringify(["Le serveur est trop lent, il faut augmenter la RAM", "La signature HMAC du webhook n'est pas vérifiée, permettant à n'importe qui d'envoyer de fausses requêtes", "Il faut changer de nom de domaine pour que les hackers ne trouvent plus l'URL", "C'est un bug de Stripe, il faut contacter leur support"]), correctAnswer: "La signature HMAC du webhook n'est pas vérifiée, permettant à n'importe qui d'envoyer de fausses requêtes", explanation: "Sans vérification de signature HMAC, n'importe qui connaissant l'URL du webhook peut envoyer de fausses données. La solution est d'implémenter la vérification de signature avec le secret webhook pour s'assurer que chaque requête provient bien du service légitime." },
    ],
  },

  {
    order: 4,
    module: 5,
    title: "L'API OpenAI/Anthropic : intégrer l'IA dans tes projets",
    slug: "api-openai-anthropic-integrer-ia",
    duration: "30 min",
    description: "Appelle GPT-4 et Claude programmatiquement, gère le streaming pour une UX fluide, maîtrise les coûts à la consommation et intègre le prompt engineering directement dans ton code.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Choisir entre OpenAI et Anthropic",
      },
      {
        id: "4-2",
        type: "comparison",
        headers: ["Critère", "OpenAI (GPT-4o)", "Anthropic (Claude 3.5 Sonnet)"],
        rows: [
          { cells: ["Fenêtre de contexte", "128K tokens", "200K tokens"] },
          { cells: ["Prix (input)", "~$2.50 / 1M tokens", "~$3.00 / 1M tokens"] },
          { cells: ["Prix (output)", "~$10 / 1M tokens", "~$15 / 1M tokens"] },
          { cells: ["Points forts", "Multimodal, function calling mature", "Raisonnement long, respect des instructions"] },
          { cells: ["SDK officiel", "openai (npm)", "@anthropic-ai/sdk (npm)"] },
          { cells: ["Compatible OpenAI SDK ?", "Natif", "Via proxy (pas officiellement)"] },
        ],
      },
      {
        id: "4-3",
        type: "callout",
        variant: "info",
        html: "Pour ce cours, on utilise les deux APIs. Les concepts sont identiques — seule la syntaxe change légèrement. Maîtrise l'une, tu maîtriseras l'autre en 10 minutes.",
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "Premier appel : OpenAI en 5 lignes",
      },
      {
        id: "4-5",
        type: "code",
        language: "typescript",
        filename: "lib/openai.ts",
        code: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Jamais en dur dans le code
});

// Appel simple
export async function generateText(userMessage: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Tu es un assistant expert en marketing digital. Réponds en français, de façon concise et actionnable.',
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
    max_tokens: 500,
    temperature: 0.7, // 0 = déterministe, 1 = créatif
  });

  return response.choices[0].message.content ?? '';
}

// Utilisation
const result = await generateText('Génère 5 idées de posts LinkedIn pour une agence IA');
console.log(result);`,
      },
      {
        id: "4-6",
        type: "heading",
        level: 2,
        text: "Le streaming : afficher la réponse en temps réel",
      },
      {
        id: "4-7",
        type: "text",
        html: "<p>Sans streaming, ton utilisateur attend 5-10 secondes face à un loader. Avec le streaming, les mots apparaissent progressivement comme si l'IA tapait en direct — l'UX est incomparable. C'est le standard pour toutes les interfaces de chat modernes.</p>",
      },
      {
        id: "4-8",
        type: "code",
        language: "typescript",
        filename: "app/api/chat/route.ts",
        code: `import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  const { messages } = await request.json();

  // Créer un stream depuis OpenAI
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true, // Active le streaming
  });

  // Transformer en ReadableStream pour Next.js
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? '';
        if (text) {
          controller.enqueue(new TextEncoder().encode(text));
        }
      }
      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}`,
      },
      {
        id: "4-9",
        type: "code",
        language: "typescript",
        filename: "components/ChatInterface.tsx",
        code: `'use client';
import { useState } from 'react';

export function ChatInterface() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userMessage: string) => {
    setLoading(true);
    setResponse('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    // Lire le stream token par token
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      setResponse(prev => prev + decoder.decode(value));
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={() => sendMessage('Explique les webhooks simplement')}>
        {loading ? 'En cours...' : 'Envoyer'}
      </button>
      <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
    </div>
  );
}`,
      },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Même chose avec l'API Anthropic (Claude)",
      },
      {
        id: "4-11",
        type: "code",
        language: "typescript",
        filename: "lib/anthropic.ts",
        code: `import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function callClaude(userMessage: string): Promise<string> {
  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: 'Tu es un expert en développement web et en intégration d\\'APIs. Réponds en français.',
    messages: [
      { role: 'user', content: userMessage },
    ],
  });

  // Anthropic retourne un tableau de ContentBlock
  const textBlock = message.content.find(block => block.type === 'text');
  return textBlock?.type === 'text' ? textBlock.text : '';
}`,
      },
      {
        id: "4-12",
        type: "heading",
        level: 2,
        text: "Gérer les coûts : les tokens expliqués",
      },
      {
        id: "4-13",
        type: "text",
        html: "<p>Tu paies par token. Un token ≈ 4 caractères (3/4 d'un mot en anglais, un peu moins en français). Une page de texte ≈ 500 tokens. Pour éviter les mauvaises surprises :</p><ul><li><strong>max_tokens</strong> : limite la longueur de la réponse</li><li><strong>Surveille le dashboard</strong> : configure des alertes de budget</li><li><strong>Cache les réponses</strong> : si la même question revient souvent, ne rappelle pas l'API</li><li><strong>Compresse tes prompts</strong> : sois concis dans le system prompt</li></ul>",
      },
      {
        id: "4-14",
        type: "callout",
        variant: "tip",
        html: "<strong>Prompt engineering côté code :</strong> sépare toujours le system prompt (rôle, contraintes, format) des messages utilisateurs. Le system prompt coûte moins cher en cache sur les gros volumes. Utilise des délimiteurs XML pour structurer les inputs complexes : <code>&lt;context&gt;...&lt;/context&gt;&lt;question&gt;...&lt;/question&gt;</code>",
      },
      {
        id: "4-15",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-16",
        type: "quiz-inline",
        question: "Ton app génère des descriptions de produits. Le même produit est souvent demandé plusieurs fois par des visiteurs différents. Quelle est la meilleure optimisation pour réduire les coûts API ?",
        options: [
          { id: "a", text: "Utiliser un modèle moins cher (GPT-3.5 au lieu de GPT-4o)" },
          { id: "b", text: "Mettre en cache les réponses générées (Redis, base de données) et ne rappeler l'API que pour les nouveaux produits" },
          { id: "c", text: "Réduire max_tokens à 50 pour forcer des réponses plus courtes" },
          { id: "d", text: "Appeler l'API côté client directement pour éviter le passage par le serveur" },
        ],
        correctId: "b",
        explanation: "Le caching est l'optimisation la plus efficace pour les contenus qui ne changent pas. Générer la description une fois et la stocker en base te coûte un seul appel API, peu importe combien de fois la page est visitée. Appeler l'API côté client (option D) est une très mauvaise idée car cela exposerait ta clé API.",
      },
      {
        id: "4-17",
        type: "checklist",
        title: "Bonnes pratiques API IA",
        items: [
          { id: "c1", text: "Clé API stockée en variable d'environnement, jamais dans le code" },
          { id: "c2", text: "Appels API uniquement côté serveur (route handler, server action)" },
          { id: "c3", text: "max_tokens configuré pour éviter les réponses infinies et les coûts explosifs" },
          { id: "c4", text: "Alertes de budget configurées dans le dashboard OpenAI/Anthropic" },
          { id: "c5", text: "Streaming implémenté pour les interfaces de chat (meilleure UX)" },
          { id: "c6", text: "Gestion des erreurs : rate limits (429), quota dépassé (402), timeout" },
        ],
      },
    ]),
    exercise: "<p>Crée une route <code>/api/generate-bio</code> qui prend un nom et une spécialité, et retourne une bio LinkedIn de 3 phrases générée par GPT-4o ou Claude. Implémente le streaming pour que la bio s'affiche progressivement. Ajoute un cache simple en mémoire (Map) pour éviter de regénérer la même bio si les mêmes paramètres sont envoyés deux fois.</p>",
    quiz: [
      { type: "mcq", question: "Quel est l'avantage principal du streaming dans l'API OpenAI/Anthropic ?", options: JSON.stringify(["Il réduit le coût des tokens générés", "Il permet d'afficher la réponse progressivement sans attendre la fin de la génération", "Il augmente la qualité des réponses", "Il permet d'envoyer plusieurs requêtes simultanément"]), correctAnswer: "Il permet d'afficher la réponse progressivement sans attendre la fin de la génération", explanation: "Le streaming envoie les tokens au fur et à mesure de leur génération via un flux SSE (Server-Sent Events). L'utilisateur voit la réponse s'écrire en temps réel, ce qui améliore l'expérience perçue même si le temps total est identique." },
      { type: "true_false", question: "Le paramètre temperature contrôle la longueur de la réponse générée par un modèle IA.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La temperature contrôle la créativité/aléatoire de la réponse : 0 = déterministe et factuel, 1 = créatif et varié. C'est le paramètre max_tokens qui contrôle la longueur maximale de la réponse." },
      { type: "mcq", question: "Comment s'appelle le message qui définit le comportement et la personnalité de l'IA dans un appel API ?", options: JSON.stringify(["Le user message", "Le system prompt", "Le function call", "Le temperature setting"]), correctAnswer: "Le system prompt", explanation: "Le system prompt (role: 'system') définit le comportement, le ton et les contraintes de l'IA. C'est la première instruction envoyée dans la conversation qui cadre toutes les réponses suivantes." },
      { type: "true_false", question: "Les API d'IA comme OpenAI et Anthropic facturent en fonction du nombre de tokens envoyés ET reçus.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La facturation se fait sur les tokens d'entrée (input/prompt) ET les tokens de sortie (output/completion). Les tokens de sortie sont généralement plus chers. Il faut donc optimiser à la fois la taille du prompt et la longueur de la réponse." },
      { type: "mcq", question: "Un prospect vous demande d'intégrer un chatbot IA sur son site pour répondre aux questions de ses clients. Il veut que les réponses s'affichent progressivement comme sur ChatGPT. Quelle architecture technique lui proposez-vous ?", options: JSON.stringify(["Appeler l'API OpenAI directement depuis le frontend JavaScript du navigateur", "Créer une route API côté serveur qui appelle l'API avec streaming SSE, et afficher les tokens progressivement côté client", "Copier-coller les réponses de ChatGPT manuellement dans une base de données", "Utiliser un iframe qui intègre directement le site ChatGPT"]), correctAnswer: "Créer une route API côté serveur qui appelle l'API avec streaming SSE, et afficher les tokens progressivement côté client", explanation: "L'architecture correcte est : route API côté serveur (pour protéger la clé API) → appel API avec streaming activé → flux SSE vers le frontend → affichage progressif des tokens. Appeler l'API depuis le frontend exposerait la clé secrète." },
    ],
  },

  {
    order: 5,
    module: 5,
    title: "Projet : un formulaire qui envoie un email + notifie sur Slack",
    slug: "projet-formulaire-email-slack",
    duration: "25 min",
    description: "Un projet complet de bout en bout : un formulaire de contact envoie un email via SendGrid ET poste une notification sur Slack. Tu assembles tout ce que tu as appris sur les APIs.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Architecture du projet",
      },
      {
        id: "5-2",
        type: "diagram",
        variant: "flow",
        nodes: [
          { id: "n1", label: "Formulaire React", description: "Nom, email, message — validation côté client" },
          { id: "n2", label: "Route API Next.js", description: "POST /api/contact — valide et orchestre" },
          { id: "n3", label: "SendGrid API", description: "Envoie l'email de confirmation à l'utilisateur" },
          { id: "n4", label: "Slack Webhook", description: "Notifie l'équipe en temps réel sur #leads" },
          { id: "n5", label: "Réponse JSON", description: "200 OK ou erreur détaillée" },
        ],
      },
      {
        id: "5-3",
        type: "heading",
        level: 2,
        text: "Étape 1 : Configurer SendGrid",
      },
      {
        id: "5-4",
        type: "steps",
        steps: [
          { title: "Créer un compte SendGrid (gratuit jusqu'à 100 emails/jour)", description: "Va sur sendgrid.com et crée un compte. Vérifie ton identité d'expéditeur (Single Sender Verification)." },
          { title: "Générer une clé API", description: "Settings > API Keys > Create API Key. Donne les permissions 'Mail Send' uniquement (principe du moindre privilège)." },
          { title: "Ajouter la clé en variable d'environnement", description: "SENDGRID_API_KEY=SG.xxxx dans ton .env. Installe le SDK : npm install @sendgrid/mail" },
        ],
      },
      {
        id: "5-5",
        type: "heading",
        level: 2,
        text: "Étape 2 : Configurer le Slack Incoming Webhook",
      },
      {
        id: "5-6",
        type: "steps",
        steps: [
          { title: "Créer une app Slack", description: "Va sur api.slack.com/apps > Create New App > From scratch. Nomme-la 'Leads Notifier'." },
          { title: "Activer Incoming Webhooks", description: "Dans Features > Incoming Webhooks, active la fonctionnalité et clique 'Add New Webhook to Workspace'." },
          { title: "Choisir le canal et copier l'URL", description: "Sélectionne #leads (ou crée-le). Copie l'URL générée : https://hooks.slack.com/services/T.../B.../xxx" },
          { title: "Stocker l'URL en variable d'environnement", description: "SLACK_WEBHOOK_URL=https://hooks.slack.com/... dans ton .env" },
        ],
      },
      {
        id: "5-7",
        type: "heading",
        level: 2,
        text: "Étape 3 : La route API qui orchestre tout",
      },
      {
        id: "5-8",
        type: "code",
        language: "typescript",
        filename: "app/api/contact/route.ts",
        code: `import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

async function sendEmailConfirmation({ name, email, message }: ContactPayload) {
  await sgMail.send({
    to: email,
    from: 'hello@tonagence.com', // Doit être vérifié dans SendGrid
    subject: \`Merci \${name}, on a bien reçu ton message !\`,
    html: \`
      <h2>Bonjour \${name},</h2>
      <p>Merci pour ton message. On revient vers toi sous 24h.</p>
      <blockquote>\${message}</blockquote>
      <p>À bientôt,<br/>L'équipe</p>
    \`,
  });
}

async function notifySlack({ name, email, message }: ContactPayload) {
  const slackPayload = {
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '🔔 Nouveau message de contact !' },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: \`*Nom :*\n\${name}\` },
          { type: 'mrkdwn', text: \`*Email :*\n<mailto:\${email}|\${email}>\` },
        ],
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: \`*Message :*\n\${message}\` },
      },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: \`Reçu le \${new Date().toLocaleString('fr-FR')}\` },
        ],
      },
    ],
  };

  const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(slackPayload),
  });

  if (!response.ok) {
    throw new Error(\`Slack webhook failed: \${response.status}\`);
  }
}

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();
  const { name, email, message } = body;

  // Validation basique
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Tous les champs sont requis' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Email invalide' },
      { status: 400 }
    );
  }

  try {
    // Exécuter les deux appels en parallèle pour gagner du temps
    await Promise.all([
      sendEmailConfirmation({ name, email, message }),
      notifySlack({ name, email, message }),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\\'envoi:', error);
    return NextResponse.json(
      { error: 'Erreur interne, réessaie dans quelques instants' },
      { status: 500 }
    );
  }
}`,
      },
      {
        id: "5-9",
        type: "heading",
        level: 2,
        text: "Étape 4 : Le formulaire React",
      },
      {
        id: "5-10",
        type: "code",
        language: "typescript",
        filename: "components/ContactForm.tsx",
        code: `'use client';
import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  };

  if (state === 'success') {
    return (
      <div className="success-message">
        <h3>Message envoyé !</h3>
        <p>On revient vers toi sous 24h. Vérifie ton email de confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Ton nom" required />
      <input name="email" type="email" placeholder="Ton email" required />
      <textarea name="message" placeholder="Ton message" required rows={5} />

      {state === 'error' && <p className="error">{errorMsg}</p>}

      <button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}`,
      },
      {
        id: "5-11",
        type: "callout",
        variant: "tip",
        html: "<strong>Promise.all vs appels séquentiels :</strong> en utilisant <code>Promise.all([sendEmail(), notifySlack()])</code>, les deux appels s'exécutent <em>en parallèle</em>. Si SendGrid prend 300ms et Slack prend 200ms, le total sera 300ms. En séquentiel, ce serait 500ms. Sur des APIs lentes, la différence est significative.",
      },
      {
        id: "5-12",
        type: "heading",
        level: 3,
        text: "Gérer les erreurs partielles",
      },
      {
        id: "5-13",
        type: "code",
        language: "typescript",
        filename: "utils/parallel-with-fallback.ts",
        code: `// Parfois tu veux continuer même si une des deux opérations échoue
// Promise.allSettled est plus tolérant que Promise.all

const results = await Promise.allSettled([
  sendEmailConfirmation({ name, email, message }),
  notifySlack({ name, email, message }),
]);

// Analyser les résultats
results.forEach((result, index) => {
  const operation = index === 0 ? 'Email' : 'Slack';
  if (result.status === 'rejected') {
    console.error(\`\${operation} a échoué:\`, result.reason);
    // Logger l'erreur mais ne pas bloquer la réponse utilisateur
  }
});

// L'email est critique (l'utilisateur l'attend), Slack est optionnel
const emailResult = results[0];
if (emailResult.status === 'rejected') {
  throw new Error('Échec de l\\'envoi de l\\'email de confirmation');
}
// Si seulement Slack échoue, on répond quand même 200`,
      },
      {
        id: "5-14",
        type: "callout",
        variant: "success",
        html: "<strong>Tu viens de construire une vraie intégration multi-APIs.</strong> Ce pattern (form → validation → API calls parallèles → réponse) est la base de 80% des intégrations en agence. Remplace SendGrid par Resend, Slack par Discord ou Teams — la logique reste identique.",
      },
      {
        id: "5-15",
        type: "separator",
        style: "line",
      },
      {
        id: "5-16",
        type: "quiz-inline",
        question: "Tu utilises Promise.all() pour envoyer l'email et notifier Slack en parallèle. L'API Slack est en maintenance et retourne une erreur 503. Que se passe-t-il avec Promise.all() et quelle est la meilleure alternative ?",
        options: [
          { id: "a", text: "Promise.all() ignore les erreurs et retourne les résultats partiels automatiquement" },
          { id: "b", text: "Promise.all() rejette dès qu'une promesse échoue — utilise Promise.allSettled() pour traiter les erreurs individuellement" },
          { id: "c", text: "Promise.all() attend que toutes les promesses soient résolues avant de continuer" },
          { id: "d", text: "Promise.all() retente automatiquement les promesses qui échouent" },
        ],
        correctId: "b",
        explanation: "Promise.all() rejette immédiatement dès qu'une seule promesse échoue (fail-fast). Promise.allSettled() attend toutes les promesses et retourne leurs statuts individuels (fulfilled ou rejected), ce qui permet de gérer les échecs partiels — idéal quand certaines opérations sont optionnelles comme la notification Slack.",
      },
      {
        id: "5-17",
        type: "checklist",
        title: "Checklist du projet formulaire",
        items: [
          { id: "c1", text: "Compte SendGrid créé, sender vérifié, clé API générée avec permissions minimales" },
          { id: "c2", text: "Slack Incoming Webhook configuré sur le canal #leads" },
          { id: "c3", text: "Variables d'environnement SENDGRID_API_KEY et SLACK_WEBHOOK_URL configurées" },
          { id: "c4", text: "Validation des champs côté serveur (non seulement côté client)" },
          { id: "c5", text: "Appels API en parallèle avec Promise.all() ou Promise.allSettled()" },
          { id: "c6", text: "Gestion des états du formulaire : idle, loading, success, error" },
          { id: "c7", text: "Message d'erreur utilisateur clair sans exposer les détails techniques" },
        ],
      },
    ]),
    exercise: "<p>Déploie le formulaire complet sur Vercel. Configure les variables d'environnement dans le dashboard Vercel (Settings > Environment Variables). Soumets 3 formulaires de test et vérifie que : (1) tu reçois l'email de confirmation, (2) une notification apparaît sur Slack avec le bon formatage. Teste également le cas d'erreur en mettant temporairement une mauvaise clé SendGrid et vérifie que le message d'erreur affiché ne révèle pas d'informations sensibles.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi utilise-t-on Promise.allSettled() plutôt que Promise.all() pour envoyer l'email et la notification Slack en parallèle ?", options: JSON.stringify(["Promise.allSettled() est plus rapide", "Promise.allSettled() continue même si l'une des promesses échoue", "Promise.allSettled() permet d'envoyer plus de requêtes", "Il n'y a aucune différence entre les deux"]), correctAnswer: "Promise.allSettled() continue même si l'une des promesses échoue", explanation: "Promise.all() s'arrête dès qu'une promesse échoue. Promise.allSettled() attend la résolution de toutes les promesses, même si certaines échouent. Ainsi, si Slack est down, l'email part quand même." },
      { type: "true_false", question: "Zod permet de valider les données côté serveur pour s'assurer que les champs du formulaire sont conformes avant traitement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Zod est une bibliothèque de validation de schéma TypeScript. Elle permet de définir la structure attendue des données (email valide, message non vide, etc.) et de rejeter les données malformées avant tout traitement." },
      { type: "mcq", question: "Quel service est utilisé pour envoyer des emails transactionnels dans le projet formulaire ?", options: JSON.stringify(["Mailchimp", "SendGrid", "Gmail API directement", "Amazon SES"]), correctAnswer: "SendGrid", explanation: "SendGrid est un service d'envoi d'emails transactionnels fiable et gratuit jusqu'à 100 emails/jour. On l'utilise via son SDK Node.js (@sendgrid/mail) avec une clé API configurée en variable d'environnement." },
      { type: "true_false", question: "Les Incoming Webhooks Slack permettent d'envoyer des messages vers un canal Slack depuis une application externe.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les Incoming Webhooks sont le moyen le plus simple d'envoyer des messages dans un canal Slack depuis un serveur externe. On envoie un POST avec un payload JSON contenant le message formaté vers l'URL du webhook." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : votre formulaire de contact envoie bien l'email via SendGrid mais la notification Slack échoue systématiquement. Le client ne reçoit aucun message d'erreur. Comment gérez-vous ce cas ?", options: JSON.stringify(["Vous supprimez la notification Slack du projet", "Vous utilisez Promise.allSettled() pour que l'email parte même si Slack échoue, et vous loggez l'erreur Slack côté serveur", "Vous remplacez Slack par un simple console.log dans le navigateur", "Vous affichez le message d'erreur Slack complet à l'utilisateur pour qu'il contacte le support"]), correctAnswer: "Vous utilisez Promise.allSettled() pour que l'email parte même si Slack échoue, et vous loggez l'erreur Slack côté serveur", explanation: "Promise.allSettled() permet de continuer même si une promesse échoue, contrairement à Promise.all() qui s'arrête au premier échec. L'erreur Slack est loggée côté serveur pour investigation, et l'utilisateur reçoit un message générique sans détails techniques sensibles." },
    ],
  },
];
