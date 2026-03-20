import type { AllLessonAnimations } from "./types";

export const module12: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // LECON 64: Psychologie de vente B2B pour services IA (8 sections)
  // Templates: split-transform, brain-network, comparison-grid, hierarchy-tree,
  //            flow-diagram, shield-lock, progress-path, counter-stats
  // ═══════════════════════════════════════════════════════════════
  "psychologie-vente-b2b-services-ia": {
    // Section 0: "Pourquoi vendre de l'IA est different"
    // -> Split Transform: avant/apres la vente traditionnelle vs vente IA
    0: {
      template: "split-transform",
      props: {
        title: "Vente traditionnelle vs Vente IA",
        subtitle: "Un changement de paradigme",
        items: [
          { label: "Produit tangible", description: "Le client peut toucher et voir" },
          { label: "Service invisible", description: "Le client doit imaginer le resultat" },
          { label: "ROI previsible", description: "References sectorielles connues" },
          { label: "ROI a demontrer", description: "Chaque cas est unique et nouveau" },
        ],
      },
    },

    // Section 1: "La psychologie de l'acheteur B2B"
    // -> Brain Network: reseau des facteurs de decision d'un acheteur B2B
    1: {
      template: "brain-network",
      props: {
        title: "Le cerveau de l'acheteur B2B",
        subtitle: "Ce qui influence sa decision",
        items: [
          { label: "Decision", icon: "🧠" },
          { label: "Peur du risque", icon: "😰" },
          { label: "Pression interne", icon: "📊" },
          { label: "Budget limite", icon: "💰" },
          { label: "Besoin de preuves", icon: "📋" },
          { label: "Ego & statut", icon: "👔" },
        ],
      },
    },

    // Section 2: "Pain selling vs gain selling"
    // -> Comparison Grid: comparaison des deux approches de vente
    2: {
      template: "comparison-grid",
      props: {
        title: "Pain Selling vs Gain Selling",
        subtitle: "Deux strategies, deux leviers",
        items: [
          { label: "Pain Selling", description: "Appuyer sur la douleur actuelle", icon: "🔥", color: "#ef4444" },
          { label: "Gain Selling", description: "Projeter vers le futur ideal", icon: "🌟", color: "#22c55e" },
          { label: "Peur de perdre", description: "Le cout de l'inaction", icon: "📉", color: "#ef4444" },
          { label: "Envie de gagner", description: "Les gains a venir", icon: "📈", color: "#22c55e" },
        ],
      },
    },

    // Section 3: "Le framework BANT"
    // -> Hierarchy Tree: arborescence des 4 criteres de qualification
    3: {
      template: "hierarchy-tree",
      props: {
        title: "Framework BANT",
        subtitle: "Qualifier tes prospects en 4 criteres",
        items: [
          { label: "BANT", icon: "🎯" },
          { label: "Budget", icon: "💶", description: "A-t-il les moyens ?" },
          { label: "Authority", icon: "👑", description: "Decide-t-il seul ?" },
          { label: "Need", icon: "🔥", description: "Le besoin est-il reel ?" },
          { label: "Timeline", icon: "📅", description: "Quand veut-il demarrer ?" },
        ],
      },
    },

    // Section 4: "Le processus de decision en entreprise"
    // -> Flow Diagram: pipeline de decision B2B multi-etapes
    4: {
      template: "flow-diagram",
      props: {
        title: "Le processus de decision B2B",
        subtitle: "Du premier contact a la signature",
        items: [
          { label: "Prise de conscience", description: "Le probleme est identifie", icon: "💡" },
          { label: "Recherche", description: "Exploration des solutions", icon: "🔍" },
          { label: "Evaluation", description: "Comparaison des offres", icon: "⚖️" },
          { label: "Validation interne", description: "Approbation hierarchique", icon: "✅" },
          { label: "Signature", description: "Decision finale", icon: "✍️" },
        ],
      },
    },

    // Section 5: "Vendre l'IA : les pieges a eviter"
    // -> Shield Lock: bouclier anti-pieges en vente IA
    5: {
      template: "shield-lock",
      props: {
        title: "Les pieges a eviter",
        subtitle: "Protege ta credibilite",
        items: [
          { label: "Sur-promettre", description: "L'IA ne fait pas de miracles", icon: "🚫" },
          { label: "Jargon technique", description: "Parle business, pas technologie", icon: "🗣️" },
          { label: "Demo trop tot", description: "D'abord comprendre le besoin", icon: "⏳" },
          { label: "Ignorer les peurs", description: "Adresse la resistance au changement", icon: "😟" },
          { label: "Oublier le ROI", description: "Toujours chiffrer la valeur", icon: "💸" },
        ],
      },
    },

    // Section 6: "Le script de vente en 5 etapes"
    // -> Progress Path: chemin de vente avec 5 etapes
    6: {
      template: "progress-path",
      props: {
        title: "Script de vente en 5 etapes",
        subtitle: "Ta feuille de route pour chaque appel",
        items: [
          { label: "Accroche", description: "Captiver en 30 secondes", icon: "🎣" },
          { label: "Decouverte", description: "Poser les bonnes questions", icon: "🔎" },
          { label: "Presentation", description: "La solution sur mesure", icon: "🎯" },
          { label: "Objections", description: "Traiter les resistances", icon: "🛡️" },
          { label: "Closing", description: "Obtenir l'engagement", icon: "🤝" },
        ],
      },
    },

    // Section 7: "Les metriques de vente a suivre"
    // -> Counter Stats: chiffres cles et KPIs de vente
    7: {
      template: "counter-stats",
      props: {
        title: "Tes KPIs de vente",
        subtitle: "Les metriques qui comptent",
        items: [
          { label: "Taux de conversion", value: 25, icon: "🎯", description: "%" },
          { label: "Cycle de vente", value: 30, icon: "📅", description: "jours" },
          { label: "Panier moyen", value: 3000, icon: "💶", description: "EUR" },
          { label: "Taux de closing", value: 40, icon: "🤝", description: "%" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 65: Prospection LinkedIn methode pas a pas (7 sections)
  // Templates: rocket-launch, wireframe-builder, radar-chart, concentric-circles,
  //            timeline, marketplace-grid, feature-spotlight
  // ═══════════════════════════════════════════════════════════════
  "prospection-linkedin-methode-pas-a-pas": {
    // Section 0: "Pourquoi LinkedIn est ton meilleur allie"
    // -> Rocket Launch: decollage de ta prospection LinkedIn
    0: {
      template: "rocket-launch",
      props: {
        title: "LinkedIn : ton arme secrete",
        subtitle: "La plateforme B2B numero 1",
        items: [
          { label: "900M+ utilisateurs dans le monde" },
          { label: "65M+ decideurs sur la plateforme" },
          { label: "Taux d'engagement 3x superieur" },
          { label: "Decollage de ta prospection ! 🚀" },
        ],
      },
    },

    // Section 1: "Optimiser ton profil LinkedIn"
    // -> Wireframe Builder: structure visuelle d'un profil optimise
    1: {
      template: "wireframe-builder",
      props: {
        title: "Profil LinkedIn optimise",
        subtitle: "Chaque element compte",
        items: [
          { label: "Banniere + Photo pro", description: "Premiere impression visuelle" },
          { label: "Titre accrocheur", description: "Pas ton poste, ta proposition de valeur" },
          { label: "Resume avec CTA", description: "Histoire + appel a l'action" },
          { label: "Experiences & preuves sociales", description: "Resultats chiffres" },
        ],
      },
    },

    // Section 2: "Le SSI Score"
    // -> Radar Chart: les 4 piliers du Social Selling Index
    2: {
      template: "radar-chart",
      props: {
        title: "Ton Social Selling Index",
        subtitle: "Note sur 100 — les 4 piliers",
        items: [
          { label: "Marque pro", value: 85, description: "Etablir ta marque professionnelle" },
          { label: "Bonnes personnes", value: 70, description: "Trouver les bons contacts" },
          { label: "Partage d'insights", value: 75, description: "Echanger des informations" },
          { label: "Relations", value: 80, description: "Construire des relations" },
        ],
      },
    },

    // Section 3: "Strategie de connexion : la methode des cercles"
    // -> Concentric Circles: cercles de proximite pour la connexion
    3: {
      template: "concentric-circles",
      props: {
        title: "La methode des cercles",
        subtitle: "Du plus proche au plus loin",
        items: [
          { label: "1er cercle : Contacts directs" },
          { label: "2e cercle : Amis d'amis" },
          { label: "3e cercle : Meme secteur" },
          { label: "4e cercle : Cible froide" },
        ],
      },
    },

    // Section 4: "La sequence de messages LinkedIn en 5 etapes"
    // -> Timeline: sequence temporelle des messages de prospection
    4: {
      template: "timeline",
      props: {
        title: "Sequence de messages LinkedIn",
        subtitle: "5 touches pour convertir",
        items: [
          { label: "J+0", description: "Demande de connexion personnalisee", icon: "🤝" },
          { label: "J+1", description: "Message de remerciement + valeur", icon: "🙏" },
          { label: "J+4", description: "Partage d'un contenu pertinent", icon: "📄" },
          { label: "J+8", description: "Question ouverte sur son activite", icon: "❓" },
          { label: "J+14", description: "Proposition de valeur + CTA", icon: "🎯" },
        ],
      },
    },

    // Section 5: "Strategie de contenu LinkedIn"
    // -> Marketplace Grid: types de contenus a publier
    5: {
      template: "marketplace-grid",
      props: {
        title: "Types de contenu LinkedIn",
        subtitle: "Varier pour engager",
        items: [
          { label: "Storytelling", description: "Histoires personnelles", icon: "📖" },
          { label: "Etudes de cas", description: "Resultats clients", icon: "📊" },
          { label: "Listes pratiques", description: "Tips actionnables", icon: "📝" },
          { label: "Sondages", description: "Engager la communaute", icon: "📊" },
          { label: "Carrousels", description: "Visuels educatifs", icon: "🎠" },
          { label: "Videos courtes", description: "Expertise en mouvement", icon: "🎬" },
        ],
      },
    },

    // Section 6: "LinkedIn Sales Navigator : les bases"
    // -> Feature Spotlight: focus sur les fonctionnalites cles de Sales Nav
    6: {
      template: "feature-spotlight",
      props: {
        title: "Sales Navigator",
        subtitle: "L'outil de prospection premium",
        variant: "blue",
        items: [
          { label: "Sales Navigator", icon: "🔵" },
          { label: "Filtres avances", description: "25+ criteres de recherche", icon: "🔍" },
          { label: "InMail", description: "Messages directs aux non-contacts", icon: "✉️" },
          { label: "Lead Lists", description: "Organiser tes prospects par liste", icon: "📋" },
          { label: "Alertes", description: "Notifications sur tes cibles", icon: "🔔" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 66: Cold email outreach qui convertissent (7 sections)
  // Templates: pulsing-orb, layered-stack, flow-diagram, gear-system,
  //            arrow-cycle, code-terminal, checklist-reveal
  // ═══════════════════════════════════════════════════════════════
  "cold-email-outreach-qui-convertissent": {
    // Section 0: "Le cold email n'est pas mort"
    // -> Pulsing Orb: orbe central montrant la puissance du cold email
    0: {
      template: "pulsing-orb",
      props: {
        title: "Le cold email est bien vivant",
        subtitle: "Le canal B2B le plus rentable",
        items: [
          { label: "ROI 36x", icon: "💰" },
          { label: "4200%", icon: "📈" },
          { label: "B2B #1", icon: "🏆" },
          { label: "Scalable", icon: "📧" },
        ],
      },
    },

    // Section 1: "Le framework AIDA"
    // -> Layered Stack: 4 couches du framework AIDA empilees
    1: {
      template: "layered-stack",
      props: {
        title: "Framework AIDA",
        subtitle: "Les 4 couches d'un email qui convertit",
        items: [
          { label: "Attention", description: "Objet irrresistible qui force l'ouverture", icon: "👀" },
          { label: "Interest", description: "Premiere ligne personnalisee et pertinente", icon: "🎯" },
          { label: "Desire", description: "Benefice concret et chiffre pour le prospect", icon: "🔥" },
          { label: "Action", description: "CTA simple : une question, un lien", icon: "👆" },
        ],
      },
    },

    // Section 2: "Le framework PAS : Problem-Agitate-Solve"
    // -> Flow Diagram: enchainement Probleme -> Agitation -> Solution
    2: {
      template: "flow-diagram",
      props: {
        title: "Framework PAS",
        subtitle: "Probleme - Agiter - Resoudre",
        items: [
          { label: "Problem", description: "Identifier le probleme du prospect", icon: "❓" },
          { label: "Agitate", description: "Amplifier la douleur et les consequences", icon: "🔥" },
          { label: "Solve", description: "Presenter ta solution comme la reponse", icon: "💡" },
        ],
      },
    },

    // Section 3: "La delivrabilite : le facteur invisible"
    // -> Gear System: mecanisme technique de la delivrabilite
    3: {
      template: "gear-system",
      props: {
        title: "Delivrabilite email",
        subtitle: "Le moteur invisible de tes campagnes",
        items: [
          { label: "SPF", description: "Authentification expediteur" },
          { label: "DKIM", description: "Signature numerique" },
          { label: "DMARC", description: "Politique anti-usurpation" },
          { label: "Warm-up", description: "Rechauffement du domaine" },
        ],
      },
    },

    // Section 4: "La sequence de follow-up"
    // -> Arrow Cycle: cycle de relances planifiees
    4: {
      template: "arrow-cycle",
      props: {
        title: "Sequence de follow-up",
        subtitle: "80% des ventes se font au follow-up",
        items: [
          { label: "J+0 Email initial", description: "Premier contact personnalise" },
          { label: "J+3 Relance valeur", description: "Ajouter un contenu utile" },
          { label: "J+7 Preuve sociale", description: "Etude de cas similaire" },
          { label: "J+12 Angle different", description: "Nouveau benefice mis en avant" },
          { label: "J+21 Break-up", description: "Dernier email, creer l'urgence" },
        ],
      },
    },

    // Section 5: "Les outils indispensables"
    // -> Code Terminal: simulation de setup technique d'outils
    5: {
      template: "code-terminal",
      props: {
        title: "Stack d'outils cold email",
        subtitle: "Ta boite a outils complete",
        items: [
          { label: "$ install lemlist --domain", icon: "command" },
          { label: "✓ Lemlist configure (sequences)", icon: "output" },
          { label: "$ setup apollo.io --scraping", icon: "command" },
          { label: "✓ Apollo.io (enrichissement data)", icon: "output" },
          { label: "$ connect mailreach --warmup", icon: "command" },
          { label: "✓ Mailreach (warm-up domaine)", icon: "output" },
        ],
      },
    },

    // Section 6: "Conformite et bonnes pratiques legales"
    // -> Checklist Reveal: checklist de conformite legale
    6: {
      template: "checklist-reveal",
      props: {
        title: "Conformite legale cold email",
        subtitle: "Respecter la loi pour durer",
        items: [
          { label: "Lien de desinscription obligatoire dans chaque email" },
          { label: "Base legale : interet legitime B2B (RGPD Art. 6)" },
          { label: "Adresse physique de l'entreprise visible" },
          { label: "Pas de donnees sensibles sans consentement" },
          { label: "Traiter les demandes de suppression sous 30 jours" },
          { label: "Documenter la source de chaque contact" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 67: Content marketing & personal branding (7 sections)
  // Templates: mind-map, nesting-layers, browser-mockup, token-stream,
  //            capability-wheel, bar-chart, arrow-cycle
  // ═══════════════════════════════════════════════════════════════
  "content-marketing-personal-branding": {
    // Section 0: "Pourquoi le personal branding est un accelerateur"
    // -> Mind Map: le personal brand au centre avec ses effets
    0: {
      template: "mind-map",
      props: {
        title: "Personal Branding : l'accelerateur",
        subtitle: "Toi au centre de ta strategie",
        items: [
          { label: "TOI", icon: "🧑" },
          { label: "Credibilite", icon: "⭐" },
          { label: "Leads entrants", icon: "📥" },
          { label: "Pricing premium", icon: "💎" },
          { label: "Reseau", icon: "🤝" },
          { label: "Opportunites", icon: "🚀" },
        ],
      },
    },

    // Section 1: "Les 4 piliers de ta strategie de contenu"
    // -> Nesting Layers: piliers imbriques du content marketing
    1: {
      template: "nesting-layers",
      props: {
        title: "Les 4 piliers du contenu",
        subtitle: "Du fondamental au visible",
        items: [
          { label: "Positionnement — Qui tu es et pour qui" },
          { label: "Expertise — Ce que tu sais" },
          { label: "Format — Comment tu le transmets" },
          { label: "Distribution — Ou tu le publies" },
        ],
      },
    },

    // Section 2: "LinkedIn : ta plateforme prioritaire"
    // -> Browser Mockup: interface LinkedIn avec posts optimises
    2: {
      template: "browser-mockup",
      props: {
        title: "LinkedIn : ta vitrine B2B",
        subtitle: "linkedin.com/in/toi",
        items: [
          { label: "Post accrocheur", icon: "📝", description: "Hook en premiere ligne" },
          { label: "Carrousel educatif", icon: "🎠", description: "5-10 slides visuelles" },
          { label: "Sondage engageant", icon: "📊", description: "Generer du debat" },
          { label: "Article de fond", icon: "📰", description: "Expertise approfondie" },
          { label: "Video native", icon: "🎬", description: "Authenticite et proximite" },
        ],
      },
    },

    // Section 3: "Twitter (X) : vitesse et reseau"
    // -> Token Stream: flux de tweets/posts courts et percutants
    3: {
      template: "token-stream",
      props: {
        title: "Twitter (X) : la vitesse",
        subtitle: "Des messages courts, percutants",
        items: [
          { label: "Hook", description: "Thread : 7 outils IA que j'utilise chaque jour" },
          { label: " percutant" },
          { label: " →" },
          { label: " Engagement" },
          { label: " x3" },
          { label: " en" },
          { label: " 30" },
          { label: " jours" },
        ],
      },
    },

    // Section 4: "YouTube et le contenu video"
    // -> Capability Wheel: roue des formats video a maitriser
    4: {
      template: "capability-wheel",
      props: {
        title: "YouTube : formats video",
        subtitle: "Chaque format a son objectif",
        items: [
          { label: "Tutoriels", icon: "🎓", description: "Pas-a-pas pratiques" },
          { label: "Vlogs", icon: "📹", description: "Coulisses et authenticite" },
          { label: "Shorts", icon: "📱", description: "Clips < 60 secondes" },
          { label: "Interviews", icon: "🎙️", description: "Invites et credibilite" },
          { label: "Demos IA", icon: "🤖", description: "Cas d'usage en live" },
          { label: "Reviews", icon: "⭐", description: "Tests d'outils IA" },
        ],
      },
    },

    // Section 5: "Le blog et le SEO"
    // -> Bar Chart: impact SEO par type de contenu
    5: {
      template: "bar-chart",
      props: {
        title: "Impact SEO par type de contenu",
        subtitle: "Trafic organique mensuel potentiel",
        items: [
          { label: "Guide complet", value: 90 },
          { label: "Comparatif outils", value: 85 },
          { label: "Etude de cas", value: 70 },
          { label: "Liste de ressources", value: 65 },
          { label: "Article d'opinion", value: 40 },
        ],
      },
    },

    // Section 6: "Le systeme de recyclage de contenu"
    // -> Arrow Cycle: cycle de recyclage d'un contenu en multi-formats
    6: {
      template: "arrow-cycle",
      props: {
        title: "Recycler ton contenu",
        subtitle: "1 contenu pilier = 10+ pieces",
        items: [
          { label: "Article de blog", description: "Le contenu pilier de reference" },
          { label: "5 posts LinkedIn", description: "Extraits et reformulations" },
          { label: "Thread Twitter", description: "Version condensee et percutante" },
          { label: "Video YouTube", description: "Version filmee ou screencast" },
          { label: "Newsletter", description: "Synthese pour tes abonnes" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 68: Appels decouverte et techniques de closing (5 sections)
  // Templates: convergence-beam, pie-chart, timeline, chat-bubbles, checklist-reveal
  // ═══════════════════════════════════════════════════════════════
  "appels-decouverte-techniques-closing": {
    // Section 0: "L'appel decouverte est le moment de verite"
    // -> Convergence Beam: tous les elements convergent vers le deal
    0: {
      template: "convergence-beam",
      props: {
        title: "L'appel decouverte : moment de verite",
        subtitle: "Tout converge ici",
        items: [
          { label: "Prospection", icon: "🔍", description: "Les semaines de travail" },
          { label: "Contenu", icon: "📝" },
          { label: "Reputation", icon: "⭐" },
          { label: "Confiance", icon: "🤝" },
          { label: "Besoin reel", icon: "🔥" },
          { label: "DEAL", icon: "🎯" },
        ],
      },
    },

    // Section 1: "La preparation : 80% du succes"
    // -> Pie Chart: repartition du temps de preparation vs execution
    1: {
      template: "pie-chart",
      props: {
        title: "La preparation fait le succes",
        subtitle: "Repartition de l'effort",
        items: [
          { label: "Recherche prospect", value: 30, description: "LinkedIn, site web, actualites" },
          { label: "Preparation questions", value: 25, description: "Questions ouvertes ciblees" },
          { label: "Personnalisation demo", value: 25, description: "Adapter a son secteur" },
          { label: "Appel en lui-meme", value: 20, description: "L'execution fluide" },
        ],
      },
    },

    // Section 2: "Structure de l'appel decouverte en 6 phases"
    // -> Timeline: les 6 phases chronologiques de l'appel
    2: {
      template: "timeline",
      props: {
        title: "Les 6 phases de l'appel",
        subtitle: "30-45 minutes bien structurees",
        items: [
          { label: "0-3 min", description: "Brise-glace et agenda", icon: "🤝" },
          { label: "3-8 min", description: "Contexte et situation actuelle", icon: "📋" },
          { label: "8-18 min", description: "Questions de decouverte profondes", icon: "🔎" },
          { label: "18-25 min", description: "Presentation de la solution", icon: "💡" },
          { label: "25-35 min", description: "Demo personnalisee", icon: "🖥️" },
          { label: "35-45 min", description: "Prochaines etapes et closing", icon: "🎯" },
        ],
      },
    },

    // Section 3: "Les techniques de closing"
    // -> Chat Bubbles: simulation de dialogue de closing
    3: {
      template: "chat-bubbles",
      props: {
        title: "Techniques de closing en action",
        subtitle: "Dialogue vendeur-prospect",
        items: [
          { label: "Donc si je resume, votre priorite c'est de reduire le temps de traitement de 50% ?" },
          { label: "Oui, exactement, c'est notre enjeu principal ce trimestre." },
          { label: "Notre solution fait precisement cela. On pourrait demarrer le pilote lundi — ca vous convient ?" },
          { label: "Lundi c'est un peu juste... mercredi serait parfait." },
          { label: "Mercredi c'est note ! Je vous envoie la proposition dans l'heure." },
        ],
      },
    },

    // Section 4: "Apres l'appel : le suivi"
    // -> Checklist Reveal: actions post-appel a ne pas oublier
    4: {
      template: "checklist-reveal",
      props: {
        title: "Le suivi post-appel",
        subtitle: "Les 24h critiques apres l'appel",
        items: [
          { label: "Envoyer le recap par email dans les 2h" },
          { label: "Partager les ressources promises (etude de cas, demo)" },
          { label: "Mettre a jour le CRM avec les notes de l'appel" },
          { label: "Planifier le prochain point de contact dans l'agenda" },
          { label: "Envoyer la proposition commerciale sous 48h" },
          { label: "Programmer la relance automatique J+3" },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // LECON 69: Gerer les objections et closer les deals (5 sections)
  // Templates: trophy-unlock, flow-diagram, model-cards, temperature-gauge, artifact-gallery
  // ═══════════════════════════════════════════════════════════════
  "gerer-objections-closer-deals": {
    // Section 0: "Les objections sont un signe d'interet"
    // -> Trophy Unlock: transformer les objections en victoires
    0: {
      template: "trophy-unlock",
      props: {
        title: "Objections = Opportunites",
        subtitle: "Un prospect qui objecte est un prospect interesse",
        items: [
          { label: "Ecoute active", icon: "👂", description: "Chaque objection revele un besoin cache" },
          { label: "Pas de panique", icon: "🧘", description: "Les objections font partie du processus" },
          { label: "Preparation", icon: "📋", description: "Anticiper les 6 objections classiques" },
          { label: "Transformation", icon: "🏆", description: "Convertir le doute en confiance" },
        ],
      },
    },

    // Section 1: "Le framework LAER"
    // -> Flow Diagram: les 4 etapes du framework LAER
    1: {
      template: "flow-diagram",
      props: {
        title: "Framework LAER",
        subtitle: "4 etapes pour traiter chaque objection",
        items: [
          { label: "Listen", description: "Ecouter sans interrompre, laisser parler", icon: "👂" },
          { label: "Acknowledge", description: "Valider l'emotion et la preoccupation", icon: "🤝" },
          { label: "Explore", description: "Poser des questions pour comprendre le vrai frein", icon: "🔍" },
          { label: "Respond", description: "Apporter une reponse ciblee avec preuves", icon: "💬" },
        ],
      },
    },

    // Section 2: "Les 6 objections les plus courantes"
    // -> Model Cards: cartes des objections avec reponses
    2: {
      template: "model-cards",
      props: {
        title: "Les 6 objections classiques",
        subtitle: "Et comment les traiter",
        items: [
          { label: "C'est trop cher", description: "Recadrer sur le ROI et le cout de l'inaction", icon: "💰" },
          { label: "On n'a pas le temps", description: "Montrer le temps economise a long terme", icon: "⏰" },
          { label: "Je dois reflechir", description: "Identifier le vrai frein cache", icon: "🤔" },
          { label: "On a deja un outil", description: "Comparer objectivement les resultats", icon: "🔧" },
          { label: "L'IA n'est pas fiable", description: "Preuves sociales et garanties", icon: "🛡️" },
          { label: "Ce n'est pas prioritaire", description: "Quantifier le cout de l'attente", icon: "📊" },
        ],
      },
    },

    // Section 3: "Les tactiques de negociation"
    // -> Temperature Gauge: jauge d'intensite des tactiques de nego
    3: {
      template: "temperature-gauge",
      props: {
        title: "Tactiques de negociation",
        subtitle: "De la plus douce a la plus assertive",
        items: [
          { label: "Silence strategique", value: 0.2, description: "Laisser le prospect combler le vide" },
          { label: "Reformulation", value: 0.4, description: "Repeter pour clarifier et valider" },
          { label: "Alternative", value: 0.6, description: "Proposer 2 options (pas de 'non')" },
          { label: "Urgence justifiee", value: 0.8, description: "Deadline reelle ou disponibilite limitee" },
          { label: "Walk away", value: 1.0, description: "Montrer qu'on peut se retirer" },
        ],
      },
    },

    // Section 4: "Les bases du contrat"
    // -> Artifact Gallery: les elements essentiels d'un bon contrat
    4: {
      template: "artifact-gallery",
      props: {
        title: "Les elements du contrat",
        subtitle: "Securiser le deal par ecrit",
        items: [
          { label: "Scope & livrables", description: "Definir precisement le perimetre", icon: "📋" },
          { label: "Tarif & paiement", description: "Montant, echeancier, conditions", icon: "💶" },
          { label: "Planning", description: "Dates cles et milestones", icon: "📅" },
          { label: "SLA & garanties", description: "Niveaux de service et engagements", icon: "🛡️" },
          { label: "Clause de sortie", description: "Conditions de resiliation claires", icon: "🚪" },
          { label: "Propriete intellectuelle", description: "A qui appartient le travail", icon: "©️" },
        ],
      },
    },
  },
};
