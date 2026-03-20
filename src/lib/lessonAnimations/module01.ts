import type { AllLessonAnimations } from "./types";

export const module01: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 1: L'IA — Histoire, concepts et révolution (5 sections)
  // Templates: mind-map, timeline, convergence-beam, nesting-layers, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "ia-histoire-concepts-revolution": {
    // Section 0: "L'IA, ce n'est pas de la science-fiction"
    // → Mind Map: l'IA au centre, branches vers les usages quotidiens
    0: {
      template: "mind-map",
      props: {
        title: "L'IA dans ta vie quotidienne",
        subtitle: "Déjà partout autour de toi",
        items: [
          { label: "IA", icon: "🧠" },
          { label: "GPS", icon: "🗺️" },
          { label: "Netflix", icon: "🎬" },
          { label: "Photos", icon: "📸" },
          { label: "Assistants", icon: "🎙️" },
          { label: "Traduction", icon: "🌍" },
        ],
      },
    },

    // Section 1: "Les grandes dates qui ont tout changé"
    // → Timeline: frise chronologique avec dates clés
    1: {
      template: "timeline",
      props: {
        title: "L'histoire de l'IA",
        items: [
          { label: "1950", description: "Test de Turing — Peut-on parler à une machine ?", icon: "🧪" },
          { label: "1997", description: "Deep Blue bat Kasparov aux échecs", icon: "♟️" },
          { label: "2012", description: "Deep Learning — AlexNet révolutionne la vision", icon: "👁️" },
          { label: "2017", description: "Transformer — L'architecture qui change tout", icon: "⚡" },
          { label: "2022", description: "ChatGPT — L'IA accessible à tous", icon: "💬" },
          { label: "2025", description: "Agents IA — L'IA qui agit pour toi", icon: "🤖" },
        ],
      },
    },

    // Section 2: "Pourquoi 2025 change tout"
    // → Convergence Beam: facteurs convergent vers le point de bascule 2025
    2: {
      template: "convergence-beam",
      props: {
        title: "2025 : Le point de bascule",
        subtitle: "Tout converge",
        items: [
          { label: "Coût ÷100", icon: "📉", description: "2025" },
          { label: "200K tokens", icon: "📝" },
          { label: "Agents IA", icon: "🤖" },
          { label: "Open Source", icon: "🔓" },
          { label: "Multimodal", icon: "🖼️" },
          { label: "Code natif", icon: "💻" },
        ],
      },
    },

    // Section 3: "Les concepts clés à retenir"
    // → Nesting Layers: cercles imbriqués IA > ML > DL > LLM > GenAI
    3: {
      template: "nesting-layers",
      props: {
        title: "Les couches de l'IA",
        subtitle: "Du plus large au plus spécifique",
        items: [
          { label: "Intelligence Artificielle" },
          { label: "Machine Learning" },
          { label: "Deep Learning" },
          { label: "LLM" },
          { label: "IA Générative" },
        ],
      },
    },

    // Section 4: "Le marché de l'IA en chiffres"
    // → Counter Stats: gros chiffres animés du marché
    4: {
      template: "counter-stats",
      props: {
        title: "Le marché mondial de l'IA",
        subtitle: "Une croissance exponentielle",
        items: [
          { label: "Marché 2024", value: 500, icon: "💰", description: "$B" },
          { label: "Prévision 2030", value: 1800, icon: "📈", description: "$B" },
          { label: "Emplois créés", value: 97, icon: "👥", description: "M" },
          { label: "Croissance annuelle", value: 37, icon: "🚀", description: "%" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 2: Les grands modèles — GPT, Claude, Gemini, Mistral (6 sections)
  // Templates: planet-orbit, feature-spotlight, model-cards, concentric-circles, split-transform, radar-chart
  // ═══════════════════════════════════════════════════════════════
  "grands-modeles-gpt-claude-gemini-mistral": {
    // Section 0: "Le paysage des LLM en 2025"
    // → Planet Orbit: modèles orbitant dans l'espace LLM
    0: {
      template: "planet-orbit",
      props: {
        title: "L'univers des LLM",
        subtitle: "Les modèles en orbite",
        items: [
          { label: "Claude", icon: "🟣" },
          { label: "GPT-4", icon: "🟢" },
          { label: "Gemini", icon: "🔵" },
          { label: "Mistral", icon: "🟠" },
          { label: "LLaMA", icon: "🦙" },
        ],
      },
    },

    // Section 1: "Claude (Anthropic)"
    // → Feature Spotlight: focus violet sur Claude
    1: {
      template: "feature-spotlight",
      props: {
        title: "Claude par Anthropic",
        variant: "violet",
        items: [
          { label: "Claude", icon: "🟣" },
          { label: "200K tokens de contexte", description: "Le plus grand contexte du marché", icon: "📚" },
          { label: "Suivi d'instructions", description: "Précis et fidèle aux consignes", icon: "🎯" },
          { label: "Code de qualité", description: "Excellent pour le développement", icon: "💻" },
          { label: "Sûreté intégrée", description: "Alignement et éthique by design", icon: "🛡️" },
        ],
      },
    },

    // Section 2: "GPT-4 (OpenAI)"
    // → Model Cards: écosystème GPT en cartes colorées
    2: {
      template: "model-cards",
      props: {
        title: "L'écosystème GPT-4",
        subtitle: "OpenAI · Le pionnier",
        items: [
          { label: "ChatGPT", description: "Interface grand public", icon: "💬" },
          { label: "GPTs Store", description: "Marketplace d'agents custom", icon: "🏪" },
          { label: "DALL-E", description: "Génération d'images", icon: "🎨" },
          { label: "API Platform", description: "Intégration développeurs", icon: "🔌" },
        ],
      },
    },

    // Section 3: "Gemini (Google)"
    // → Concentric Circles: couches multimodales de Gemini
    3: {
      template: "concentric-circles",
      props: {
        title: "Gemini — Multimodal natif",
        subtitle: "Toutes les modalités",
        items: [
          { label: "Texte" },
          { label: "Image" },
          { label: "Audio" },
          { label: "Vidéo" },
        ],
      },
    },

    // Section 4: "Mistral (France)"
    // → Split Transform: Closed Source vs Open Source
    4: {
      template: "split-transform",
      props: {
        title: "Mistral · Open Source",
        subtitle: "L'avantage français",
        items: [
          { label: "Fermé (GPT, Claude)", description: "API payante, hébergé aux USA" },
          { label: "Ouvert (Mistral)", description: "Code libre, hébergeable en Europe" },
          { label: "Souveraineté des données", description: "RGPD natif" },
          { label: "Communauté active", description: "Contributions open-source" },
        ],
      },
    },

    // Section 5: "Pourquoi on utilise Claude dans ce cours"
    // → Radar Chart: comparaison multi-critères
    5: {
      template: "radar-chart",
      props: {
        title: "Pourquoi Claude ?",
        subtitle: "Comparaison sur les critères clés",
        items: [
          { label: "Contexte", value: 95 },
          { label: "Code", value: 90 },
          { label: "Précision", value: 92 },
          { label: "Instructions", value: 95 },
          { label: "Sûreté", value: 98 },
          { label: "Créativité", value: 85 },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 3: Comment fonctionne un LLM (6 sections)
  // Templates: flow-diagram, token-stream, sliding-window, temperature-gauge, word-by-word, hallucination-bubbles
  // ═══════════════════════════════════════════════════════════════
  "comment-fonctionne-un-llm": {
    // Section 0: "Démystifions le fonctionnement"
    // → Flow Diagram: pipeline complet d'un LLM
    0: {
      template: "flow-diagram",
      props: {
        title: "Pipeline d'un LLM",
        subtitle: "De ta question à la réponse",
        items: [
          { label: "💬 Prompt", description: "Ta question en langage naturel" },
          { label: "🔤 Tokens", description: "Découpage en sous-mots" },
          { label: "📐 Vecteurs", description: "Conversion en nombres" },
          { label: "⚡ Transformer", description: "Calcul d'attention" },
          { label: "📝 Réponse", description: "Génération mot par mot" },
        ],
      },
    },

    // Section 1: "Les tokens : l'unité de base"
    // → Token Stream: phrase découpée en tokens colorés
    1: {
      template: "token-stream",
      props: {
        title: "Tokenisation",
        subtitle: "Comment l'IA lit ton texte",
        items: [
          { label: "Bon", description: "Bonjour, je suis une IA générative !" },
          { label: "jour" },
          { label: "," },
          { label: " je" },
          { label: " suis" },
          { label: " une" },
          { label: " IA" },
          { label: " génér" },
          { label: "ative" },
          { label: " !" },
        ],
      },
    },

    // Section 2: "La fenêtre de contexte"
    // → Sliding Window: fenêtre glissante sur du texte + barres de comparaison
    2: {
      template: "sliding-window",
      props: {
        title: "Fenêtre de contexte",
        subtitle: "La mémoire de travail de l'IA",
        items: [
          { label: "GPT-3 (2020)", value: 4 },
          { label: "GPT-4 (2023)", value: 128 },
          { label: "Claude 3 (2024)", value: 200 },
          { label: "Gemini Ultra", value: 1000 },
        ],
      },
    },

    // Section 3: "La température"
    // → Temperature Gauge: thermomètre visuel bleu→rouge
    3: {
      template: "temperature-gauge",
      props: {
        title: "La température",
        subtitle: "Contrôle créativité vs précision",
        items: [
          { label: "0.0", value: 0, description: "Déterministe, factuel" },
          { label: "0.3", value: 0.3, description: "Fiable, professionnel" },
          { label: "0.7", value: 0.7, description: "Équilibré, naturel" },
          { label: "1.0", value: 1.0, description: "Créatif, imprévisible" },
        ],
      },
    },

    // Section 4: "Comment le texte est généré"
    // → Word By Word: mots apparaissant avec barres de probabilité
    4: {
      template: "word-by-word",
      props: {
        title: "Génération de texte",
        subtitle: "Prédiction du mot suivant",
        items: [
          { label: "Le", value: 95, description: "Le" },
          { label: "chat", value: 72, description: "chat" },
          { label: "est", value: 88, description: "est" },
          { label: "sur", value: 65, description: "sur" },
          { label: "le", value: 91, description: "le" },
          { label: "tapis", value: 45, description: "tapis" },
        ],
      },
    },

    // Section 5: "Les hallucinations"
    // → Hallucination Bubbles: faits vrais vs hallucinations qui se dissolvent
    5: {
      template: "hallucination-bubbles",
      props: {
        title: "Vrais faits vs Hallucinations",
        subtitle: "Apprends à faire la différence",
        items: [
          { label: "Paris est la capitale de la France" },
          { label: "La Tour Eiffel fait 324m de haut" },
          { label: "Claude peut vérifier ses propres faits" },
          { label: "L'IA a toujours raison" },
          { label: "Les LLM comprennent le sens" },
          { label: "L'IA invente parfois des sources" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 4: Découvrir Claude — Interface & Projects (6 sections)
  // Templates: hierarchy-tree, chat-bubbles, artifact-gallery, layered-stack, checklist-reveal, marketplace-grid
  // ═══════════════════════════════════════════════════════════════
  "decouvrir-claude-interface-projects": {
    // Section 0: "Présentation de l'interface"
    // → Hierarchy Tree: arborescence de l'interface
    0: {
      template: "hierarchy-tree",
      props: {
        title: "Interface Claude.ai",
        items: [
          { label: "claude.ai", icon: "🏠" },
          { label: "Conversations", icon: "💬" },
          { label: "Projects", icon: "📁" },
          { label: "Artefacts", icon: "✨" },
          { label: "Paramètres", icon: "⚙️" },
        ],
      },
    },

    // Section 1: "Les conversations"
    // → Chat Bubbles: interface de chat animée avec messages
    1: {
      template: "chat-bubbles",
      props: {
        title: "Les conversations Claude",
        subtitle: "Un dialogue intelligent",
        items: [
          { label: "Aide-moi à créer un business plan" },
          { label: "Bien sûr ! Quel secteur vises-tu ?" },
          { label: "Le e-commerce en France" },
          { label: "Voici une structure de business plan adaptée au e-commerce français..." },
        ],
      },
    },

    // Section 2: "Les artefacts"
    // → Artifact Gallery: galerie de types d'artefacts avec previews
    2: {
      template: "artifact-gallery",
      props: {
        title: "Types d'artefacts",
        subtitle: "Claude crée pour toi",
        items: [
          { label: "Code", description: "HTML, JS, Python", icon: "💻" },
          { label: "Documents", description: "Articles, rapports", icon: "📄" },
          { label: "Tableaux", description: "Données CSV", icon: "📊" },
          { label: "Visuels SVG", description: "Graphiques, logos", icon: "🎨" },
          { label: "Diagrammes", description: "Flowcharts Mermaid", icon: "📐" },
          { label: "React", description: "Composants live", icon: "⚛️" },
        ],
      },
    },

    // Section 3: "Projects"
    // → Layered Stack: couches d'un Project empilées
    3: {
      template: "layered-stack",
      props: {
        title: "Anatomie d'un Project",
        items: [
          { label: "Instructions personnalisées", description: "Ton brief permanent", icon: "📋" },
          { label: "Fichiers de contexte", description: "Documents de référence", icon: "📎" },
          { label: "Conversations liées", description: "Historique organisé", icon: "💬" },
          { label: "Prompts favoris", description: "Templates réutilisables", icon: "⭐" },
        ],
      },
    },

    // Section 4: "Créer un project efficace"
    // → Checklist Reveal: items cochés un par un
    4: {
      template: "checklist-reveal",
      props: {
        title: "✅ Project efficace",
        items: [
          { label: "Nom clair et descriptif du projet" },
          { label: "Instructions de rôle et de ton" },
          { label: "Fichiers de contexte pertinents" },
          { label: "Exemples de résultats attendus" },
          { label: "Prompts récurrents pré-enregistrés" },
        ],
      },
    },

    // Section 5: "Les fichiers supportés"
    // → Marketplace Grid: grille de types de fichiers
    5: {
      template: "marketplace-grid",
      props: {
        title: "Fichiers supportés",
        items: [
          { label: "PDF", icon: "📕" },
          { label: "TXT / MD", icon: "📝" },
          { label: "CSV", icon: "📊" },
          { label: "Python", icon: "🐍" },
          { label: "JavaScript", icon: "🟨" },
          { label: "Images", icon: "🖼️" },
          { label: "JSON", icon: "📦" },
          { label: "HTML", icon: "🌐" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 5: Claude Code & Cowork — Les outils (7 sections)
  // Templates: code-terminal, gear-system, progress-path, browser-mockup, comparison-grid, brain-network, bar-chart
  // ═══════════════════════════════════════════════════════════════
  "claude-code-cowork-outils": {
    // Section 0: "Claude Code : l'IA dans ton terminal"
    // → Code Terminal: animation terminal réaliste
    0: {
      template: "code-terminal",
      props: {
        title: "Claude Code",
        subtitle: "L'IA dans ton terminal",
        items: [
          { label: "$ claude", icon: "command" },
          { label: "╭─────────────────────────────╮", icon: "output" },
          { label: "│  Claude Code v1.0           │", icon: "output" },
          { label: "│  Prêt à coder avec toi ! 🚀 │", icon: "output" },
          { label: "╰─────────────────────────────╯", icon: "output" },
        ],
      },
    },

    // Section 1: "Ce que Claude Code sait faire"
    // → Gear System: engrenages imbriqués des capacités
    1: {
      template: "gear-system",
      props: {
        title: "Les capacités de Claude Code",
        items: [
          { label: "Créer des apps" },
          { label: "Débugger" },
          { label: "Refactorer" },
          { label: "Git & Deploy" },
        ],
      },
    },

    // Section 2: "Installation"
    // → Progress Path: étapes d'installation avec checkpoints
    2: {
      template: "progress-path",
      props: {
        title: "Installation pas à pas",
        items: [
          { label: "Installer Node.js", description: "nodejs.org → télécharger LTS" },
          { label: "Ouvrir le terminal", description: "CMD, PowerShell ou Terminal" },
          { label: "npm install claude-code", description: "Installation globale" },
          { label: "claude --version", description: "Vérifier l'installation" },
          { label: "claude", description: "Lancer Claude Code !" },
        ],
      },
    },

    // Section 3: "Claude Cowork : l'IA dans ton navigateur"
    // → Browser Mockup: fenêtre Chrome avec extension popup
    3: {
      template: "browser-mockup",
      props: {
        title: "Claude Cowork",
        subtitle: "Extension navigateur",
        items: [
          { label: "Claude Cowork", icon: "🟣" },
          { label: "Résumer la page", icon: "📋" },
          { label: "Rédiger un email", icon: "✍️" },
          { label: "Analyser le contenu", icon: "🔍" },
          { label: "Traduire", icon: "🌍" },
        ],
      },
    },

    // Section 4: "Ce que Cowork sait faire"
    // → Comparison Grid: grille de capacités
    4: {
      template: "comparison-grid",
      props: {
        title: "Capacités Cowork",
        items: [
          { label: "Rédiger", description: "Emails, articles, rapports", icon: "✍️" },
          { label: "Analyser", description: "Pages web, documents", icon: "🔎" },
          { label: "Résumer", description: "Synthèses en 1 clic", icon: "📄" },
          { label: "Traduire", description: "Multi-langues instantané", icon: "🌍" },
        ],
      },
    },

    // Section 5: "Cas d'usage concrets"
    // → Brain Network: réseau connecté des cas d'usage
    5: {
      template: "brain-network",
      props: {
        title: "Écosystème d'outils",
        items: [
          { label: "Claude Code" },
          { label: "Cowork" },
          { label: "Projects" },
          { label: "claude.ai" },
          { label: "API" },
        ],
      },
    },

    // Section 6: "Guide de décision"
    // → Bar Chart: score d'adéquation par outil/tâche
    6: {
      template: "bar-chart",
      props: {
        title: "Quel outil pour quelle tâche ?",
        subtitle: "Score d'adéquation",
        items: [
          { label: "Code → Claude Code", value: 95 },
          { label: "Web → Cowork", value: 90 },
          { label: "Projet → Projects", value: 85 },
          { label: "Chat → claude.ai", value: 80 },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 6: Premier projet concret avec Claude (7 sections)
  // Templates: rocket-launch, wireframe-builder, capability-wheel, pulsing-orb, arrow-cycle, pie-chart, trophy-unlock
  // ═══════════════════════════════════════════════════════════════
  "premier-projet-concret-claude": {
    // Section 0: "De la théorie à la pratique"
    // → Rocket Launch: séquence de décollage
    0: {
      template: "rocket-launch",
      props: {
        title: "Prêt au décollage !",
        subtitle: "De la théorie à la pratique",
        items: [
          { label: "Théorie acquise ✓" },
          { label: "Outils installés ✓" },
          { label: "Premier projet →" },
          { label: "Décollage ! 🚀" },
        ],
      },
    },

    // Section 1: "Le projet : ta page de vente"
    // → Wireframe Builder: wireframe animé d'une page de vente
    1: {
      template: "wireframe-builder",
      props: {
        title: "Ta page de vente",
        subtitle: "Structure du livrable",
        items: [
          { label: "Hero + titre accrocheur" },
          { label: "3 bénéfices clés" },
          { label: "Témoignages clients" },
          { label: "Call to Action final" },
        ],
      },
    },

    // Section 2: "Étape 1 : Définir ton brief"
    // → Capability Wheel: roue des éléments du brief
    2: {
      template: "capability-wheel",
      props: {
        title: "Les éléments du brief",
        items: [
          { label: "Produit", icon: "🎁" },
          { label: "Cible", icon: "🎯" },
          { label: "Problème", icon: "❓" },
          { label: "Bénéfices", icon: "✨" },
          { label: "Ton", icon: "🎨" },
          { label: "CTA", icon: "👆" },
        ],
      },
    },

    // Section 3: "Étape 2 : Créer avec Claude Code"
    // → Pulsing Orb: orbe central "Claude Code" avec fichiers générés en orbite
    3: {
      template: "pulsing-orb",
      props: {
        title: "Claude Code génère ton projet",
        items: [
          { label: "index.html", icon: "📄" },
          { label: "styles.css", icon: "🎨" },
          { label: "script.js", icon: "⚡" },
          { label: "images/", icon: "🖼️" },
          { label: "README.md", icon: "📋" },
        ],
      },
    },

    // Section 4: "Étape 3 : Itérer et améliorer"
    // → Arrow Cycle: boucle d'amélioration continue
    4: {
      template: "arrow-cycle",
      props: {
        title: "Boucle d'itération",
        subtitle: "Améliore progressivement",
        items: [
          { label: "Générer", description: "Claude crée la V1" },
          { label: "Relire", description: "Tu évalues le résultat" },
          { label: "Feedbacker", description: "Tu donnes tes retours" },
          { label: "Améliorer", description: "Claude affine le code" },
        ],
      },
    },

    // Section 5: "Étape 4 : Analyser et apprendre"
    // → Pie Chart: répartition de l'analyse
    5: {
      template: "pie-chart",
      props: {
        title: "Analyse du résultat",
        subtitle: "Répartition de la qualité",
        items: [
          { label: "Contenu", value: 30 },
          { label: "Design", value: 25 },
          { label: "Responsive", value: 20 },
          { label: "Performance", value: 15 },
          { label: "SEO", value: 10 },
        ],
      },
    },

    // Section 6: "Ce que tu as accompli"
    // → Trophy Unlock: trophée avec confettis + badges
    6: {
      template: "trophy-unlock",
      props: {
        title: "🎉 Bravo !",
        subtitle: "Ce que tu as accompli",
        items: [
          { label: "Projet livré", icon: "🏆", description: "Page de vente complète" },
          { label: "3 fichiers", icon: "📁", description: "HTML + CSS + JS" },
          { label: "4 itérations", icon: "🔄", description: "Amélioration continue" },
          { label: "Prêt pour la suite", icon: "🚀", description: "Module 2 débloqué" },
        ],
      },
    },
  },
};
