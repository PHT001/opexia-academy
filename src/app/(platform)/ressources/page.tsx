"use client";

import { useState } from "react";

interface Resource {
  id: string;
  title: string;
  desc: string;
  section: string;
  category: string;
  type: "tool" | "template" | "guide" | "platform";
  url?: string;
  content?: string;
}

const SECTIONS = [
  { id: "outils-ia", label: "Outils IA", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { id: "plateformes", label: "Plateformes", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { id: "templates", label: "Templates", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { id: "guides", label: "Guides", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "Tout" },
  { id: "outils-ia", label: "Outils IA" },
  { id: "plateformes", label: "Plateformes" },
  { id: "templates", label: "Templates" },
  { id: "guides", label: "Guides" },
];

const RESOURCES: Resource[] = [
  // ── Outils IA ──
  {
    id: "1",
    title: "Claude",
    desc: "Assistant IA avancé d'Anthropic. Idéal pour le prompting, la rédaction, le code et l'analyse de documents.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://claude.ai",
  },
  {
    id: "2",
    title: "ChatGPT",
    desc: "L'IA d'OpenAI. Génération de texte, images (DALL-E), analyse de données et plugins.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://chat.openai.com",
  },
  {
    id: "3",
    title: "Gemini",
    desc: "L'IA de Google. Intégration native avec Google Workspace, recherche et analyse multimodale.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://gemini.google.com",
  },
  {
    id: "4",
    title: "Voiceflow",
    desc: "Plateforme no-code pour créer des chatbots et assistants vocaux IA pour tes clients.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://www.voiceflow.com",
  },

  // ── Plateformes ──
  {
    id: "5",
    title: "Make (Integromat)",
    desc: "Automatisation no-code. Connecte tes apps entre elles avec des scénarios visuels.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://www.make.com",
  },
  {
    id: "6",
    title: "n8n",
    desc: "Alternative open-source à Make. Self-hosted possible, plus de 400 intégrations.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://n8n.io",
  },
  {
    id: "7",
    title: "Supabase",
    desc: "Backend-as-a-Service open-source. Base de données, authentification, API et stockage.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://supabase.com",
  },
  {
    id: "8",
    title: "Vercel",
    desc: "Déploiement frontend instantané. Hébergement gratuit pour Next.js, React et sites statiques.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://vercel.com",
  },
  {
    id: "9",
    title: "Stripe",
    desc: "Infrastructure de paiement en ligne. Facturation, abonnements et checkout intégré.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://stripe.com",
  },

  // ── Templates ──
  {
    id: "10",
    title: "Contrat de prestation type",
    desc: "Modèle de contrat pour tes prestations IA : chatbot, automatisation, site web. Clauses essentielles incluses.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `CONTRAT DE PRESTATION DE SERVICES — MODÈLE

Entre :
- Le Prestataire : [Nom / Raison sociale], [Adresse], SIRET : [Numéro]
- Le Client : [Nom / Raison sociale], [Adresse], SIRET : [Numéro]

Article 1 — Objet
Le Prestataire s'engage à réaliser pour le Client les prestations suivantes :
☐ Création d'un chatbot IA
☐ Automatisation de processus (Make / n8n)
☐ Développement de site web avec IA intégrée
☐ Autre : _______________

Article 2 — Durée et calendrier
Date de début : ___/___/______
Livraison estimée : ___/___/______
Nombre de révisions incluses : ___

Article 3 — Tarifs et modalités de paiement
Montant total HT : _________ €
Acompte à la signature : 30% soit _________ €
Solde à la livraison : 70% soit _________ €
Délai de paiement : 30 jours

Article 4 — Obligations du Prestataire
- Livrer les prestations conformes au cahier des charges
- Respecter les délais convenus
- Assurer la confidentialité des informations

Article 5 — Obligations du Client
- Fournir les éléments nécessaires dans les délais
- Valider les livrables sous 7 jours ouvrés
- Régler les factures aux échéances convenues

Article 6 — Propriété intellectuelle
Le transfert de propriété s'effectue au paiement intégral.

Article 7 — Résiliation
Résiliation possible avec préavis de 15 jours.
Les prestations réalisées restent dues.

Fait à _________, le ___/___/______
En deux exemplaires originaux.`,
  },
  {
    id: "11",
    title: "Devis professionnel",
    desc: "Template de devis avec 3 formules de prix. Adapté pour chatbots, automatisations et sites web IA.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `DEVIS — [Nom de ton agence]

Client : _______________
Date : ___/___/______
Validité : 30 jours

━━━ FORMULE ESSENTIELLE ━━━
• Chatbot IA simple (FAQ, prise de RDV)
• Intégration sur site web existant
• 1 révision incluse
• Support 7 jours après livraison
→ Tarif : 1 500 € HT | Livraison : 5-7 jours

━━━ FORMULE BUSINESS ━━━
• Chatbot IA avancé + base de connaissances
• 2 automatisations Make/n8n
• Intégration CRM
• 3 révisions incluses
• Support 30 jours
→ Tarif : 3 000 € HT | Livraison : 10-14 jours

━━━ FORMULE PREMIUM ━━━
• Solution IA complète sur mesure
• Chatbot + automatisations illimitées
• Dashboard analytics
• Formation équipe (2h)
• 5 révisions + support 90 jours
→ Tarif : 5 000 € HT | Livraison : 3-4 semaines

Conditions de paiement : 30% à la commande, 70% à la livraison
TVA non applicable, art. 293 B du CGI (si micro-entreprise)`,
  },
  {
    id: "12",
    title: "Email de prospection",
    desc: "3 templates d'emails cold outreach testés pour décrocher des RDV avec des PME.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `═══ EMAIL 1 — Premier contact ═══

Objet : [Prénom], une question rapide sur [Nom entreprise]

Bonjour [Prénom],

J'ai vu que [Nom entreprise] [observation spécifique sur l'entreprise].

Je travaille avec des entreprises comme la vôtre pour automatiser [tâche spécifique] grâce à l'IA — ce qui leur fait gagner en moyenne [X] heures par semaine.

Est-ce que vous seriez ouvert à un échange de 15 min pour voir si ça pourrait vous aider aussi ?

Bonne journée,
[Ton nom]

═══ EMAIL 2 — Relance J+3 ═══

Objet : Re: [Objet précédent]

Bonjour [Prénom],

Je me permets de revenir vers vous. Pour vous donner un exemple concret : j'ai récemment aidé [type d'entreprise similaire] à [résultat obtenu].

Si ça vous intéresse, je peux vous montrer en 15 min comment ça fonctionne.

Quand seriez-vous disponible cette semaine ?

[Ton nom]

═══ EMAIL 3 — Dernier message ═══

Objet : Dernière question, [Prénom]

Bonjour [Prénom],

Je ne veux pas être insistant — si le timing n'est pas bon, pas de souci.

Je vous laisse juste un lien vers [portfolio/cas client] au cas où le sujet reviendrait sur la table.

Bonne continuation,
[Ton nom]`,
  },

  // ── Guides ──
  {
    id: "13",
    title: "Comment choisir son statut juridique",
    desc: "Micro-entreprise, SAS, SASU, EURL : comparaison complète pour lancer ton agence IA en France.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `GUIDE — CHOISIR SON STATUT JURIDIQUE

━━━ MICRO-ENTREPRISE ━━━
✅ Création en 10 min, gratuit
✅ Comptabilité ultra-simple
✅ Charges : ~22% du CA
❌ Plafond : 77 700 €/an (services)
❌ Pas de déduction de charges
❌ Responsabilité illimitée
→ Idéal pour : Démarrer, tester le marché

━━━ SASU (Société par Actions Simplifiée Unipersonnelle) ━━━
✅ Responsabilité limitée
✅ Crédibilité auprès des clients
✅ Dividendes possibles
❌ Création : ~250€ + formalités
❌ Comptabilité obligatoire
❌ Charges sociales ~45% sur salaire
→ Idéal pour : CA > 50K€, image professionnelle

━━━ EURL ━━━
✅ Responsabilité limitée
✅ Régime fiscal flexible (IR ou IS)
❌ Charges sociales ~45%
❌ Formalisme administratif
→ Idéal pour : Entrepreneur seul qui veut protéger son patrimoine

━━━ RECOMMANDATION ━━━
1. Tu démarres ? → Micro-entreprise
2. Tu dépasses 40K€ de CA ? → Passe en SASU
3. Tu as des associés ? → SAS

Étapes pour créer ta micro-entreprise :
1. Va sur autoentrepreneur.urssaf.fr
2. Choisis l'activité "Conseil en systèmes informatiques"
3. Code APE : 6202A
4. Remplis le formulaire (15 min)
5. Reçois ton SIRET sous 1-4 semaines`,
  },
  {
    id: "14",
    title: "Checklist lancement agence IA",
    desc: "Tout ce qu'il faut préparer avant de lancer ton agence : administratif, outils, portfolio, acquisition.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `CHECKLIST — LANCER TON AGENCE IA

━━━ ADMINISTRATIF ━━━
☐ Créer ton statut juridique (micro-entreprise pour commencer)
☐ Ouvrir un compte bancaire pro (Qonto, Shine, Blank)
☐ Souscrire une RC Pro (Hiscox, Alan)
☐ Créer ton modèle de contrat
☐ Créer ton modèle de devis/facture

━━━ OUTILS ━━━
☐ Claude Pro ou ChatGPT Plus (outil principal)
☐ Make.com ou n8n (automatisations)
☐ Voiceflow (chatbots)
☐ Vercel (déploiement)
☐ Supabase (backend si besoin)
☐ Stripe (paiements)
☐ Notion ou Linear (gestion projet)
☐ Cal.com (prise de RDV)

━━━ PRÉSENCE EN LIGNE ━━━
☐ Site web portfolio (une page suffit)
☐ Profil LinkedIn optimisé
☐ 3 études de cas (même fictives au début)
☐ Témoignages clients (demande-les activement)

━━━ OFFRE ━━━
☐ Définir 2-3 services clairs avec pricing
☐ Créer un one-pager de ton offre
☐ Préparer une démo live (chatbot ou automatisation)

━━━ ACQUISITION CLIENTS ━━━
☐ Lister 50 prospects (PME locales, LinkedIn)
☐ Préparer 3 templates d'emails de prospection
☐ Planifier 5 messages/jour sur LinkedIn
☐ Rejoindre 3 communautés en ligne (Slack, Discord, Facebook)
☐ Proposer 1-2 missions gratuites pour portfolio

━━━ OBJECTIF SEMAINE 1 ━━━
☐ Envoyer 20 emails de prospection
☐ Publier 3 posts LinkedIn
☐ Décrocher 2-3 appels découverte`,
  },
  {
    id: "15",
    title: "Prompt Engineering — Cheat Sheet",
    desc: "Les 7 frameworks de prompting essentiels résumés. Garde-le sous la main pour tes projets clients.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `CHEAT SHEET — PROMPT ENGINEERING

━━━ 1. CRAFT (le plus complet) ━━━
C — Context : donne le contexte de la situation
R — Role : assigne un rôle à l'IA
A — Action : décris précisément ce que tu veux
F — Format : précise le format de sortie
T — Tone : indique le ton souhaité

Exemple : "Tu es un copywriter expert (R). Mon client est une boulangerie artisanale à Lyon (C). Rédige 3 posts Instagram (A) en format court avec emojis (F) sur un ton chaleureux et authentique (T)."

━━━ 2. Chain of Thought ━━━
Demande à l'IA de réfléchir étape par étape.
"Résous ce problème étape par étape en montrant ton raisonnement."

━━━ 3. Few-Shot ━━━
Donne 2-3 exemples avant ta demande.
"Voici des exemples du style que je veux : [ex1] [ex2]. Maintenant fais la même chose pour..."

━━━ 4. Role Playing ━━━
"Tu es un expert en [domaine] avec 20 ans d'expérience..."

━━━ 5. Contraintes ━━━
Ajoute des limites claires :
- "Maximum 200 mots"
- "En 5 bullet points"
- "Sans jargon technique"

━━━ 6. Itération ━━━
Ne te contente pas du premier résultat.
"C'est bien mais rends-le plus [concret/court/percutant]."

━━━ 7. Mega-Prompt ━━━
Combine tout dans un seul prompt structuré avec des sections clairement délimitées.`,
  },
];

// Template content modal
function TemplateModal({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  function copyContent() {
    if (resource.content) {
      navigator.clipboard.writeText(resource.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-semibold text-[#111]">{resource.title}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{resource.desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyContent}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {copied ? "Copié !" : "Copier"}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
            {resource.content}
          </pre>
        </div>
      </div>
    </div>
  );
}

const SECTION_COLORS: Record<string, string> = {
  "outils-ia": "#FF1744",
  plateformes: "#2979FF",
  templates: "#FF6D00",
  guides: "#00C853",
};

export default function RessourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [modalResource, setModalResource] = useState<Resource | null>(null);

  const filtered = RESOURCES.filter((r) => {
    const matchCat = activeCategory === "all" || r.category === activeCategory;
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const groupedBySection = SECTIONS.map((section) => ({
    ...section,
    resources: filtered.filter((r) => r.section === section.id),
  })).filter((s) => s.resources.length > 0);

  const totalResources = RESOURCES.length;
  const totalCategories = SECTIONS.length;

  function handleCardClick(resource: Resource) {
    if (resource.url) {
      window.open(resource.url, "_blank", "noopener,noreferrer");
    } else if (resource.content) {
      setModalResource(resource);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-1">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#111]">Ressources</h1>
            <p className="text-sm text-gray-400 mt-1">
              Outils, templates et guides pour construire ton agence IA.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
              <span className="font-medium text-gray-600">{totalResources}</span> ressources
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF]" />
              <span className="font-medium text-gray-600">{totalCategories}</span> catégories
            </span>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <div className="relative flex-1 w-full sm:max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#111] text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resources by section */}
      {groupedBySection.map((section) => {
        const sectionColor = SECTION_COLORS[section.id] || "#78909C";
        return (
          <div key={section.id} className="mb-8">
            {/* Section header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: sectionColor + "12" }}
              >
                <svg
                  className="w-4 h-4"
                  style={{ color: sectionColor }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={section.icon} />
                </svg>
              </div>
              <h2 className="text-sm font-semibold text-[#111]">{section.label}</h2>
              <span className="text-[10px] text-gray-400 font-medium">
                ({section.resources.length})
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.resources.map((r) => {
                const hasAction = !!r.url || !!r.content;
                return (
                  <div
                    key={r.id}
                    onClick={() => handleCardClick(r)}
                    className={`group bg-white rounded-xl border border-gray-200 p-4 transition-all ${
                      hasAction
                        ? "cursor-pointer hover:shadow-md hover:border-gray-300 hover:-translate-y-[1px]"
                        : "opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: sectionColor + "10" }}
                      >
                        {r.type === "tool" ? (
                          <svg className="w-4 h-4" style={{ color: sectionColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        ) : r.type === "platform" ? (
                          <svg className="w-4 h-4" style={{ color: sectionColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                          </svg>
                        ) : r.type === "template" ? (
                          <svg className="w-4 h-4" style={{ color: sectionColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" style={{ color: sectionColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[13px] font-semibold text-[#111] group-hover:text-[#FF1744] transition-colors truncate">
                            {r.title}
                          </h3>
                          {r.url && (
                            <svg className="w-3 h-3 text-gray-300 group-hover:text-[#FF1744] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {r.desc}
                        </p>
                        {!hasAction && (
                          <span className="inline-block mt-2 text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                            Bientôt disponible
                          </span>
                        )}
                        {r.content && (
                          <span className="inline-block mt-2 text-[10px] text-[#FF6D00] font-medium">
                            Cliquer pour voir le template
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Empty state */}
      {groupedBySection.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 font-medium mb-1">Aucune ressource trouvée</p>
          <p className="text-xs text-gray-400">Essaie un autre terme de recherche ou une autre catégorie.</p>
        </div>
      )}

      {/* Template modal */}
      {modalResource && (
        <TemplateModal
          resource={modalResource}
          onClose={() => setModalResource(null)}
        />
      )}
    </div>
  );
}
