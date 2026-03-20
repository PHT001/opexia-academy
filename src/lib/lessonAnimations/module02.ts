import type { AllLessonAnimations } from "./types";

export const module02: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LEÇON 7: Bases du Prompting — Structure & Clarté (4 sections)
  // Templates: chat-bubbles, layered-stack, flow-diagram, hallucination-bubbles
  // ═══════════════════════════════════════════════════════════════
  "bases-prompting-structure-clarte": {
    // Section 0: "Un prompt, c'est un brief"
    // → Chat Bubbles: dialogue illustrant un bon brief vs une demande vague
    0: {
      template: "chat-bubbles",
      props: {
        title: "Un prompt, c'est un brief",
        subtitle: "Parle à Claude comme à un collaborateur",
        items: [
          { label: "Fais-moi un texte", icon: "❌" },
          { label: "Hm... Quel texte ? Pour qui ? Quel ton ?", icon: "🤔" },
          { label: "Rédige un post LinkedIn de 200 mots pour des freelances, ton professionnel et engageant", icon: "✅" },
          { label: "Parfait, voici un post percutant adapté à ta cible !", icon: "🎯" },
        ],
      },
    },

    // Section 1: "Les 4 composantes d'un bon prompt"
    // → Layered Stack: empilage des 4 composantes du prompt
    1: {
      template: "layered-stack",
      props: {
        title: "Les 4 composantes d'un bon prompt",
        subtitle: "Chaque couche renforce la suivante",
        items: [
          { label: "Contexte", description: "Qui tu es, la situation, le background", icon: "🌍" },
          { label: "Instruction", description: "Ce que tu veux que Claude fasse", icon: "📋" },
          { label: "Format", description: "Comment présenter le résultat", icon: "📐" },
          { label: "Contraintes", description: "Les limites, le ton, la longueur", icon: "🚧" },
        ],
      },
    },

    // Section 2: "Le framework CREA"
    // → Flow Diagram: pipeline CREA en étapes séquentielles
    2: {
      template: "flow-diagram",
      props: {
        title: "Le framework CREA",
        subtitle: "Ta méthode en 4 étapes",
        items: [
          { label: "C — Contexte", description: "Définis la situation et ton rôle" },
          { label: "R — Rôle", description: "Donne une expertise à Claude" },
          { label: "E — Exemples", description: "Montre ce que tu attends" },
          { label: "A — Action", description: "Décris précisément la tâche" },
        ],
      },
    },

    // Section 3: "Erreurs courantes à éviter"
    // → Hallucination Bubbles: vraies bonnes pratiques vs erreurs fréquentes
    3: {
      template: "hallucination-bubbles",
      props: {
        title: "Erreurs courantes à éviter",
        subtitle: "Distingue les bonnes pratiques des pièges",
        items: [
          { label: "Donner du contexte précis" },
          { label: "Spécifier le format attendu" },
          { label: "Écrire des prompts de 3 mots" },
          { label: "Tout demander en une seule fois" },
          { label: "Itérer et affiner ses prompts" },
          { label: "Négliger les contraintes" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 8: Techniques avancées — CoT, Few-Shot (6 sections)
  // Templates: rocket-launch, mind-map, code-terminal, split-transform, gear-system, wireframe-builder
  // ═══════════════════════════════════════════════════════════════
  "techniques-avancees-cot-fewshot": {
    // Section 0: "Aller au-delà des bases"
    // → Rocket Launch: décollage vers les techniques avancées
    0: {
      template: "rocket-launch",
      props: {
        title: "Aller au-delà des bases",
        subtitle: "Techniques de prompting avancées",
        items: [
          { label: "Bases acquises ✓" },
          { label: "Framework CREA ✓" },
          { label: "Techniques avancées →" },
          { label: "Décollage expert ! 🚀" },
        ],
      },
    },

    // Section 1: "Chain-of-Thought"
    // → Mind Map: ramifications du raisonnement étape par étape
    1: {
      template: "mind-map",
      props: {
        title: "Chain-of-Thought (CoT)",
        subtitle: "Forcer le raisonnement étape par étape",
        items: [
          { label: "Problème", icon: "❓" },
          { label: "Décomposer", icon: "🔍" },
          { label: "Analyser chaque partie", icon: "🧩" },
          { label: "Raisonner logiquement", icon: "🔗" },
          { label: "Synthétiser", icon: "📝" },
          { label: "Réponse précise", icon: "✅" },
        ],
      },
    },

    // Section 2: "Few-Shot Prompting"
    // → Code Terminal: exemples input/output dans un terminal
    2: {
      template: "code-terminal",
      props: {
        title: "Few-Shot Prompting",
        subtitle: "Apprendre par l'exemple",
        items: [
          { label: "# Exemple 1:", icon: "comment" },
          { label: "Input: 'Super produit !' → Positif", icon: "output" },
          { label: "# Exemple 2:", icon: "comment" },
          { label: "Input: 'Très déçu...' → Négatif", icon: "output" },
          { label: "# Mon cas:", icon: "command" },
          { label: "Input: 'Pas mal du tout' → ?", icon: "output" },
        ],
      },
    },

    // Section 3: "Role-Playing"
    // → Split Transform: transformation d'une réponse générique vers une réponse experte
    3: {
      template: "split-transform",
      props: {
        title: "Role-Playing",
        subtitle: "Assigner un rôle à Claude",
        items: [
          { label: "Sans rôle", description: "Réponse générique et plate" },
          { label: "Avec rôle d'expert SEO", description: "Réponse technique et actionnables" },
          { label: "Ton neutre et distant", description: "Peu engageant" },
          { label: "Ton expert et pédagogue", description: "Percutant et adapté" },
        ],
      },
    },

    // Section 4: "Meta-Prompting"
    // → Gear System: engrenages du prompt qui génère des prompts
    4: {
      template: "gear-system",
      props: {
        title: "Meta-Prompting",
        subtitle: "Le prompt qui crée des prompts",
        items: [
          { label: "Ton objectif" },
          { label: "Meta-prompt" },
          { label: "Prompt optimisé" },
          { label: "Résultat final" },
        ],
      },
    },

    // Section 5: "Output Structuring"
    // → Wireframe Builder: structure de sortie construite bloc par bloc
    5: {
      template: "wireframe-builder",
      props: {
        title: "Output Structuring",
        subtitle: "Imposer la forme du résultat",
        items: [
          { label: "Titre principal H1" },
          { label: "Sous-sections numérotées" },
          { label: "Tableau comparatif" },
          { label: "Liste de recommandations" },
          { label: "Conclusion avec CTA" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 9: System Prompts & Personnalisation (5 sections)
  // Templates: shield-lock, bar-chart, hierarchy-tree, browser-mockup, checklist-reveal
  // ═══════════════════════════════════════════════════════════════
  "system-prompts-personnalisation": {
    // Section 0: "Qu'est-ce qu'un system prompt ?"
    // → Shield Lock: le system prompt comme couche protectrice et directrice
    0: {
      template: "shield-lock",
      props: {
        title: "Qu'est-ce qu'un system prompt ?",
        subtitle: "La couche invisible qui dirige tout",
        items: [
          { label: "System Prompt", description: "Instructions permanentes, invisibles pour l'utilisateur", icon: "🛡️" },
          { label: "Rôle défini", description: "Claude sait qui il est", icon: "🎭" },
          { label: "Règles fixées", description: "Comportement constant et prévisible", icon: "📏" },
          { label: "Ton calibré", description: "Communication adaptée à la cible", icon: "🎯" },
        ],
      },
    },

    // Section 1: "Pourquoi c'est si puissant"
    // → Bar Chart: impact du system prompt sur la qualité des outputs
    1: {
      template: "bar-chart",
      props: {
        title: "Pourquoi c'est si puissant",
        subtitle: "Impact mesurable sur les résultats",
        items: [
          { label: "Cohérence des réponses", value: 92 },
          { label: "Respect du ton", value: 88 },
          { label: "Pertinence métier", value: 95 },
          { label: "Gain de temps", value: 85 },
          { label: "Réduction des itérations", value: 78 },
        ],
      },
    },

    // Section 2: "Structure d'un system prompt efficace"
    // → Hierarchy Tree: arborescence des sections d'un system prompt
    2: {
      template: "hierarchy-tree",
      props: {
        title: "Structure d'un system prompt efficace",
        subtitle: "Les 5 blocs essentiels",
        items: [
          { label: "System Prompt", icon: "📄" },
          { label: "1. Identité et rôle", icon: "🎭" },
          { label: "2. Connaissances clés", icon: "📚" },
          { label: "3. Règles de comportement", icon: "⚖️" },
          { label: "4. Format de sortie", icon: "📐" },
          { label: "5. Exemples de référence", icon: "💡" },
        ],
      },
    },

    // Section 3: "Exemple complet"
    // → Browser Mockup: aperçu d'un system prompt complet dans une interface
    3: {
      template: "browser-mockup",
      props: {
        title: "Exemple complet",
        subtitle: "System prompt pour un consultant SEO",
        items: [
          { label: "Tu es un expert SEO senior avec 10 ans d'expérience", icon: "🎭" },
          { label: "Tu connais les guidelines Google E-E-A-T", icon: "📚" },
          { label: "Toujours donner des actions concrètes", icon: "✅" },
          { label: "Format : titre + bullet points + score de priorité", icon: "📋" },
          { label: "Exemple : Optimise cette balise title → ...", icon: "💡" },
        ],
      },
    },

    // Section 4: "Les erreurs à éviter"
    // → Checklist Reveal: liste des erreurs révélées une à une
    4: {
      template: "checklist-reveal",
      props: {
        title: "Les erreurs à éviter",
        subtitle: "Ne tombe pas dans ces pièges",
        items: [
          { label: "Trop long : plus de 500 mots = bruit" },
          { label: "Instructions contradictoires entre elles" },
          { label: "Pas d'exemples concrets" },
          { label: "Rôle trop vague : 'sois utile'" },
          { label: "Oublier le format de sortie attendu" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 10: Claude Projects — Contexte & Mémoire (5 sections)
  // Templates: marketplace-grid, nesting-layers, arrow-cycle, feature-spotlight, artifact-gallery
  // ═══════════════════════════════════════════════════════════════
  "claude-projects-contexte-memoire": {
    // Section 0: "Projects = Ton QG par client"
    // → Marketplace Grid: grille de projects par client
    0: {
      template: "marketplace-grid",
      props: {
        title: "Projects = Ton QG par client",
        subtitle: "Un espace dédié par mission",
        items: [
          { label: "Client A — E-commerce", icon: "🛒" },
          { label: "Client B — SaaS B2B", icon: "💼" },
          { label: "Client C — Restaurant", icon: "🍽️" },
          { label: "Projet interne — Blog", icon: "✍️" },
          { label: "Formation — Cours IA", icon: "🎓" },
          { label: "R&D — Prototypes", icon: "🧪" },
        ],
      },
    },

    // Section 1: "Architecture d'un Project pro"
    // → Nesting Layers: couches imbriquées d'un project
    1: {
      template: "nesting-layers",
      props: {
        title: "Architecture d'un Project pro",
        subtitle: "Du plus externe au plus profond",
        items: [
          { label: "Project (conteneur global)" },
          { label: "Instructions personnalisées" },
          { label: "Fichiers de contexte" },
          { label: "Conversations liées" },
          { label: "Artefacts générés" },
        ],
      },
    },

    // Section 2: "Workflow concret pour un projet client"
    // → Arrow Cycle: cycle du workflow projet client
    2: {
      template: "arrow-cycle",
      props: {
        title: "Workflow concret pour un projet client",
        subtitle: "Le cycle vertueux de production",
        items: [
          { label: "Créer le Project", description: "Nommer et configurer" },
          { label: "Charger le contexte", description: "Brief, personas, charte" },
          { label: "Écrire les instructions", description: "Rôle, ton, contraintes" },
          { label: "Produire avec Claude", description: "Contenus, analyses, code" },
          { label: "Itérer et enrichir", description: "Ajouter des fichiers au fil du temps" },
        ],
      },
    },

    // Section 3: "Tips avancés"
    // → Feature Spotlight: focus sur les tips clés
    3: {
      template: "feature-spotlight",
      props: {
        title: "Tips avancés",
        subtitle: "Booste tes Projects",
        items: [
          { label: "Tips", icon: "💡" },
          { label: "Versionner tes instructions", description: "V1, V2, V3 pour suivre l'évolution", icon: "📝" },
          { label: "Fichiers < 200K tokens", description: "Rester dans la fenêtre de contexte", icon: "📏" },
          { label: "Un Project = Un client", description: "Ne jamais mélanger les contextes", icon: "🎯" },
          { label: "Nommer clairement", description: "Client-Mission-Date pour tout retrouver", icon: "🏷️" },
        ],
      },
    },

    // Section 4: "Exemple de template d'instructions"
    // → Artifact Gallery: galerie des sections du template
    4: {
      template: "artifact-gallery",
      props: {
        title: "Exemple de template d'instructions",
        subtitle: "Les blocs à copier-coller",
        items: [
          { label: "Identité", description: "Tu es un expert en [domaine]", icon: "🎭" },
          { label: "Client", description: "Mon client est [nom], secteur [X]", icon: "🏢" },
          { label: "Objectifs", description: "Les livrables attendus", icon: "🎯" },
          { label: "Ton & Style", description: "Professionnel, accessible", icon: "🎨" },
          { label: "Contraintes", description: "Longueur, format, interdits", icon: "🚧" },
          { label: "Exemples", description: "Référence de ce qu'on attend", icon: "💡" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 11: Créer sa première Skill Claude (6 sections)
  // Templates: capability-wheel, comparison-grid, token-stream, radar-chart, brain-network, pie-chart
  // ═══════════════════════════════════════════════════════════════
  "creer-premiere-skill-claude": {
    // Section 0: "Les Skills : transformer des prompts en systèmes"
    // → Capability Wheel: roue des capacités d'une Skill
    0: {
      template: "capability-wheel",
      props: {
        title: "Les Skills : des prompts en systèmes",
        subtitle: "Transforme tes prompts en outils réutilisables",
        items: [
          { label: "Automatiser", icon: "⚡" },
          { label: "Standardiser", icon: "📏" },
          { label: "Partager", icon: "🤝" },
          { label: "Réutiliser", icon: "♻️" },
          { label: "Déployer", icon: "🚀" },
          { label: "Itérer", icon: "🔄" },
        ],
      },
    },

    // Section 1: "Anatomie d'une Skill"
    // → Comparison Grid: composants d'une Skill en grille
    1: {
      template: "comparison-grid",
      props: {
        title: "Anatomie d'une Skill",
        subtitle: "Les 3 couches fondamentales",
        items: [
          { label: "YAML Frontmatter", description: "Métadonnées et triggers d'activation", icon: "📋" },
          { label: "Corps du SKILL.md", description: "Logique, instructions et prompts", icon: "📝" },
          { label: "Fichiers liés", description: "Templates, données de référence", icon: "📎" },
          { label: "Description", description: "Ce qui déclenche la Skill", icon: "🎯" },
        ],
      },
    },

    // Section 2: "Le fichier SKILL.md"
    // → Token Stream: défilement du contenu structuré d'un SKILL.md
    2: {
      template: "token-stream",
      props: {
        title: "Le fichier SKILL.md",
        subtitle: "Structure d'un fichier Skill",
        items: [
          { label: "---", description: "---\nname: ma-skill\ndescription: ...\n---\n\n# Instructions\n..." },
          { label: "name:" },
          { label: " ma-skill" },
          { label: "\ndescription:" },
          { label: " Génère" },
          { label: " des" },
          { label: " rapports" },
          { label: "\n---" },
          { label: "\n# Instructions" },
          { label: "\nTu es un expert..." },
        ],
      },
    },

    // Section 3: "Bonnes descriptions vs mauvaises"
    // → Radar Chart: score de qualité des descriptions sur plusieurs axes
    3: {
      template: "radar-chart",
      props: {
        title: "Bonnes descriptions vs mauvaises",
        subtitle: "Score de qualité d'une description de Skill",
        items: [
          { label: "Spécificité", value: 90 },
          { label: "Clarté du trigger", value: 85 },
          { label: "Contexte métier", value: 88 },
          { label: "Mots-clés ciblés", value: 92 },
          { label: "Longueur optimale", value: 75 },
        ],
      },
    },

    // Section 4: "Le corps du SKILL.md"
    // → Brain Network: réseau des sections connectées du corps
    4: {
      template: "brain-network",
      props: {
        title: "Le corps du SKILL.md",
        subtitle: "Sections interconnectées",
        items: [
          { label: "Instructions" },
          { label: "Contexte" },
          { label: "Étapes" },
          { label: "Format" },
          { label: "Exemples" },
          { label: "Contraintes" },
        ],
      },
    },

    // Section 5: "Les 3 cas d'usage principaux"
    // → Pie Chart: répartition des cas d'usage de Skills
    5: {
      template: "pie-chart",
      props: {
        title: "Les 3 cas d'usage principaux",
        subtitle: "Où les Skills brillent le plus",
        items: [
          { label: "Automatisation", value: 40, icon: "⚡", description: "Tâches répétitives" },
          { label: "Génération", value: 35, icon: "✍️", description: "Contenu et code" },
          { label: "Analyse", value: 25, icon: "📊", description: "Données et rapports" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 12: Système 3 niveaux — Progressive Disclosure (7 sections)
  // Templates: concentric-circles, sliding-window, word-by-word, pulsing-orb, progress-path, temperature-gauge, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "systeme-3-niveaux-progressive-disclosure": {
    // Section 0: "Pourquoi le système 3 niveaux existe"
    // → Concentric Circles: 3 cercles concentriques symbolisant les niveaux
    0: {
      template: "concentric-circles",
      props: {
        title: "Pourquoi le système 3 niveaux existe",
        subtitle: "Charger l'info au bon moment",
        items: [
          { label: "Niveau 3 : Fichiers liés" },
          { label: "Niveau 2 : Corps SKILL.md" },
          { label: "Niveau 1 : YAML Frontmatter" },
        ],
      },
    },

    // Section 1: "Niveau 1 : YAML Frontmatter"
    // → Sliding Window: fenêtre glissante montrant les champs du frontmatter
    1: {
      template: "sliding-window",
      props: {
        title: "Niveau 1 : YAML Frontmatter",
        subtitle: "Toujours chargé — léger et rapide",
        items: [
          { label: "name", value: 10, description: "Identifiant unique de la Skill" },
          { label: "description", value: 25, description: "Ce qui déclenche le matching" },
          { label: "version", value: 5, description: "Numéro de version actuelle" },
          { label: "tags", value: 10, description: "Catégories pour le filtrage" },
        ],
      },
    },

    // Section 2: "Niveau 2 : Corps du SKILL.md"
    // → Word By Word: instructions du corps apparaissant mot par mot avec priorité
    2: {
      template: "word-by-word",
      props: {
        title: "Niveau 2 : Corps du SKILL.md",
        subtitle: "Chargé quand la Skill est activée",
        items: [
          { label: "# Instructions", value: 95, description: "# Instructions" },
          { label: "Tu es", value: 88, description: "Tu es" },
          { label: "un expert", value: 92, description: "un expert" },
          { label: "en rédaction", value: 85, description: "en rédaction" },
          { label: "SEO...", value: 90, description: "SEO..." },
          { label: "# Étapes", value: 80, description: "# Étapes" },
        ],
      },
    },

    // Section 3: "Niveau 3 : Fichiers liés"
    // → Pulsing Orb: orbe central SKILL.md avec fichiers en orbite
    3: {
      template: "pulsing-orb",
      props: {
        title: "Niveau 3 : Fichiers liés",
        subtitle: "Chargés à la demande uniquement",
        items: [
          { label: "SKILL.md", icon: "📄" },
          { label: "template-article.md", icon: "📝" },
          { label: "charte-editoriale.txt", icon: "📋" },
          { label: "exemples-outputs.json", icon: "📦" },
          { label: "config-client.yaml", icon: "⚙️" },
        ],
      },
    },

    // Section 4: "Structurer pour la performance"
    // → Progress Path: chemin de chargement progressif
    4: {
      template: "progress-path",
      props: {
        title: "Structurer pour la performance",
        subtitle: "Optimiser chaque niveau",
        items: [
          { label: "Frontmatter minimal", description: "< 50 tokens pour le matching rapide" },
          { label: "Description ciblée", description: "Mots-clés précis pour le trigger" },
          { label: "Corps structuré", description: "Sections claires avec headers" },
          { label: "Fichiers modulaires", description: "Petits fichiers indépendants" },
          { label: "Références explicites", description: "Liens clairs entre fichiers" },
        ],
      },
    },

    // Section 5: "Triggers négatifs"
    // → Temperature Gauge: jauge de sensibilité du matching
    5: {
      template: "temperature-gauge",
      props: {
        title: "Triggers négatifs",
        subtitle: "Quand la Skill ne doit PAS se déclencher",
        items: [
          { label: "Aucun négatif", value: 0, description: "Risque de faux positifs élevé" },
          { label: "1-2 exclusions", value: 0.3, description: "Filtrage basique" },
          { label: "3-5 exclusions", value: 0.7, description: "Bon équilibre" },
          { label: "6+ exclusions", value: 1.0, description: "Matching ultra-précis" },
        ],
      },
    },

    // Section 6: "Gestion des erreurs"
    // → Counter Stats: statistiques de gestion d'erreurs
    6: {
      template: "counter-stats",
      props: {
        title: "Gestion des erreurs",
        subtitle: "Metrics clés d'une Skill robuste",
        items: [
          { label: "Fallback défini", value: 100, icon: "🛡️", description: "%" },
          { label: "Cas limites couverts", value: 8, icon: "🧩", description: "cas" },
          { label: "Messages d'erreur clairs", value: 5, icon: "💬", description: "types" },
          { label: "Taux de succès cible", value: 95, icon: "✅", description: "%" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LEÇON 13: Tester, Optimiser & Déployer ses Skills (5 sections)
  // Templates: convergence-beam, timeline, model-cards, planet-orbit, trophy-unlock
  // ═══════════════════════════════════════════════════════════════
  "tester-optimiser-deployer-skills": {
    // Section 0: "Les 3 dimensions du test"
    // → Convergence Beam: 3 dimensions convergent vers la qualité
    0: {
      template: "convergence-beam",
      props: {
        title: "Les 3 dimensions du test",
        subtitle: "Tout converge vers la qualité",
        items: [
          { label: "Triggering", icon: "🎯", description: "Qualité" },
          { label: "Se déclenche-t-elle ?", icon: "❓" },
          { label: "Qualité de l'output", icon: "✅" },
          { label: "Le résultat est-il bon ?", icon: "📊" },
          { label: "Performance", icon: "⚡" },
          { label: "Rapide et fiable ?", icon: "🏎️" },
        ],
      },
    },

    // Section 1: "Utiliser le Skill Creator"
    // → Timeline: étapes chronologiques d'utilisation du Skill Creator
    1: {
      template: "timeline",
      props: {
        title: "Utiliser le Skill Creator",
        subtitle: "Le workflow pas à pas",
        items: [
          { label: "Étape 1", description: "Ouvrir le Skill Creator dans Claude", icon: "🚀" },
          { label: "Étape 2", description: "Décrire l'objectif de ta Skill", icon: "📝" },
          { label: "Étape 3", description: "Claude génère le SKILL.md", icon: "⚙️" },
          { label: "Étape 4", description: "Tester avec des cas réels", icon: "🧪" },
          { label: "Étape 5", description: "Affiner et itérer", icon: "🔄" },
          { label: "Étape 6", description: "Valider et déployer", icon: "✅" },
        ],
      },
    },

    // Section 2: "Erreurs courantes et solutions"
    // → Model Cards: cartes erreur/solution présentées côte à côte
    2: {
      template: "model-cards",
      props: {
        title: "Erreurs courantes et solutions",
        subtitle: "Diagnostic et remède pour chaque problème",
        items: [
          { label: "Skill ne se déclenche pas", description: "Ajouter des mots-clés précis dans la description", icon: "🎯" },
          { label: "Output incohérent", description: "Structurer le corps avec headers et exemples", icon: "📐" },
          { label: "Faux positifs fréquents", description: "Ajouter des triggers négatifs ciblés", icon: "🚫" },
          { label: "Résultat trop générique", description: "Enrichir le contexte avec des fichiers liés", icon: "📎" },
        ],
      },
    },

    // Section 3: "Déploiement multi-plateforme"
    // → Planet Orbit: plateformes orbitant autour de la Skill
    3: {
      template: "planet-orbit",
      props: {
        title: "Déploiement multi-plateforme",
        subtitle: "Une Skill, plusieurs environnements",
        items: [
          { label: "SKILL.md", icon: "📄" },
          { label: "Claude.ai", icon: "🌐" },
          { label: "Claude Code", icon: "💻" },
          { label: "API Anthropic", icon: "🔌" },
          { label: "Claude Cowork", icon: "🟣" },
        ],
      },
    },

    // Section 4: "Itérer et versionner"
    // → Trophy Unlock: jalons de progression vers la Skill parfaite
    4: {
      template: "trophy-unlock",
      props: {
        title: "Itérer et versionner",
        subtitle: "Le chemin vers la Skill parfaite",
        items: [
          { label: "v0.1 — Prototype", icon: "🌱", description: "Premier jet fonctionnel" },
          { label: "v0.5 — Beta testée", icon: "🧪", description: "Testée sur 5+ cas réels" },
          { label: "v1.0 — Production", icon: "🚀", description: "Fiable et documentée" },
          { label: "v2.0 — Optimisée", icon: "🏆", description: "Affinée avec les retours terrain" },
        ],
      },
    },
  },
};
