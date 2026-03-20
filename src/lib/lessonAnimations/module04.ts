import type { AllLessonAnimations } from "./types";

export const module04: AllLessonAnimations = {
  // ═══════════════════════════════════════════════════════════════
  // MODULE 4: Securiser OpenClaw (6 lecons)
  // ═══════════════════════════════════════════════════════════════

  // LEÇON 20: Pourquoi securiser son agent IA
  "securite-agent-ia-pourquoi": {
    0: {
      template: "pulsing-orb",
      props: {
        title: "Securiser ton Agent IA",
        subtitle: "Pourquoi c'est critique",
        items: [
          { label: "Agent 24/7", icon: "🤖" },
          { label: "Donnees sensibles", icon: "🔐" },
          { label: "Acces reseau", icon: "🌐" },
          { label: "API keys", icon: "🔑" },
          { label: "Clients", icon: "👥" },
          { label: "Reputation", icon: "⭐" },
        ],
      },
    },
    1: {
      template: "hierarchy-tree",
      props: {
        title: "Surface d'attaque d'un agent IA",
        subtitle: "Chaque couche est un risque potentiel",
        items: [
          { label: "Reseau", description: "Ports ouverts, connexions entrantes", icon: "🌐" },
          { label: "Donnees", description: "API keys, donnees clients", icon: "📦" },
          { label: "Systeme", description: "OS non mis a jour, acces root", icon: "💻" },
          { label: "Application", description: "Config OpenClaw, sandbox", icon: "🤖" },
          { label: "Utilisateur", description: "Mots de passe, 2FA", icon: "👤" },
        ],
      },
    },
    2: {
      template: "comparison-grid",
      props: {
        title: "Risques sans vs avec securite",
        items: [
          { label: "API keys exposees", description: "Variables d'environnement chiffrees", icon: "❌" },
          { label: "Acces reseau ouvert", description: "VPN + Firewall actif", icon: "❌" },
          { label: "Donnees en clair", description: "Chiffrement bout-en-bout", icon: "❌" },
          { label: "Pas de logs", description: "Monitoring et alertes", icon: "❌" },
        ],
      },
    },
    3: {
      template: "checklist-reveal",
      props: {
        title: "Checklist securite de base",
        subtitle: "6 etapes pour securiser ton agent",
        items: [
          { label: "Choisir le bon hardware", icon: "💻" },
          { label: "Configurer le VPN", icon: "🛡️" },
          { label: "Securiser les ports", icon: "🔒" },
          { label: "Proteger les API keys", icon: "🔑" },
          { label: "Activer le sandbox", icon: "📦" },
          { label: "Mettre en place le monitoring", icon: "📡" },
        ],
      },
    },
  },

  // LEÇON 21: Choisir et configurer son hardware — Mac Mini
  "hardware-mac-mini-serveur-dedie": {
    0: {
      template: "comparison-grid",
      props: {
        title: "Quel hardware pour OpenClaw ?",
        subtitle: "Comparer les options",
        items: [
          { label: "Mac Mini", description: "Silencieux, puissant, fiable", icon: "🖥️", color: "#34d399" },
          { label: "VPS Cloud", description: "Pas d'achat, scalable", icon: "☁️", color: "#60a5fa" },
          { label: "Raspberry Pi", description: "Ultra economique", icon: "🫐", color: "#a78bfa" },
          { label: "PC dedie", description: "Personnalisable", icon: "🖱️", color: "#fbbf24" },
        ],
      },
    },
    1: {
      template: "hierarchy-tree",
      props: {
        title: "Configuration Mac Mini recommandee",
        subtitle: "Le setup ideal pour OpenClaw",
        items: [
          { label: "Mac Mini M2/M4", icon: "🖥️" },
          { label: "RAM: 16 Go minimum", icon: "💾" },
          { label: "SSD: 256 Go suffisant", icon: "💿" },
          { label: "macOS a jour", icon: "🍎" },
          { label: "Connexion Ethernet", icon: "🔌" },
        ],
      },
    },
    2: {
      template: "checklist-reveal",
      props: {
        title: "Setup initial du Mac Mini",
        subtitle: "Etapes de configuration",
        items: [
          { label: "Demarrage et config macOS", icon: "⚙️" },
          { label: "Activer le bureau a distance", icon: "🖥️" },
          { label: "Installer Homebrew", icon: "🍺" },
          { label: "Installer Node.js et Docker", icon: "🐳" },
          { label: "Configurer le demarrage auto", icon: "🔄" },
        ],
      },
    },
    3: {
      template: "bar-chart",
      props: {
        title: "Cout mensuel par option",
        subtitle: "En euros par mois",
        items: [
          { label: "Mac Mini (amorti/12m)", value: 55, icon: "🖥️" },
          { label: "VPS 4 vCPU", value: 24, icon: "☁️" },
          { label: "VPS 8 vCPU", value: 48, icon: "☁️" },
          { label: "Electricite Mac Mini", value: 5, icon: "⚡" },
        ],
      },
    },
  },

  // LEÇON 22: Installer et configurer un VPN
  "vpn-installation-configuration": {
    0: {
      template: "pulsing-orb",
      props: {
        title: "Le VPN : ton bouclier reseau",
        subtitle: "Proteger toutes les connexions de ton agent",
        items: [
          { label: "Chiffrement", icon: "🔒" },
          { label: "Anonymat IP", icon: "🕵️" },
          { label: "Anti-tracking", icon: "🛡️" },
          { label: "Tunnel securise", icon: "🚇" },
          { label: "Kill Switch", icon: "⚡" },
          { label: "Zero trust", icon: "🔐" },
        ],
      },
    },
    1: {
      template: "comparison-grid",
      props: {
        title: "Quel VPN choisir ?",
        subtitle: "Les meilleures options pour ton agent",
        items: [
          { label: "Tailscale", description: "Gratuit, simple, recommande", icon: "🌐", color: "#34d399" },
          { label: "WireGuard", description: "Self-hosted, controle total", icon: "🔧", color: "#60a5fa" },
          { label: "Mullvad", description: "5€/mois, anonymat max", icon: "🕵️", color: "#a78bfa" },
          { label: "ZeroTier", description: "Gratuit, alternative", icon: "🔗", color: "#fbbf24" },
        ],
      },
    },
    2: {
      template: "checklist-reveal",
      props: {
        title: "Installation Tailscale",
        subtitle: "La methode recommandee",
        items: [
          { label: "Installer sur Mac Mini", icon: "🖥️" },
          { label: "Installer sur PC principal", icon: "💻" },
          { label: "Connecter au meme compte", icon: "🔗" },
          { label: "Activer le 2FA", icon: "🔐" },
          { label: "Tester la connexion SSH", icon: "✅" },
        ],
      },
    },
    3: {
      template: "flow-diagram",
      props: {
        title: "Architecture reseau avec VPN",
        subtitle: "Tous tes appareils sur un reseau prive",
        items: [
          { label: "Internet", icon: "🌍" },
          { label: "Tunnel VPN chiffre", icon: "🔒" },
          { label: "Mac Mini (OpenClaw)", icon: "🖥️" },
          { label: "Ton PC (monitoring)", icon: "💻" },
          { label: "Ton telephone", icon: "📱" },
        ],
      },
    },
  },

  // LEÇON 23: Firewall, ports et securite reseau
  "firewall-ports-securite-reseau": {
    0: {
      template: "comparison-grid",
      props: {
        title: "Ports a gerer pour OpenClaw",
        subtitle: "Ouvrir ou bloquer ?",
        items: [
          { label: "Port 22 (SSH)", description: "Restreindre au VPN", icon: "🔐" },
          { label: "Port 443 (HTTPS)", description: "Ouvrir si necessaire", icon: "✅" },
          { label: "Port 80 (HTTP)", description: "Bloquer !", icon: "❌" },
          { label: "Port 51820 (WireGuard)", description: "Ouvrir pour VPN", icon: "🛡️" },
        ],
      },
    },
    1: {
      template: "checklist-reveal",
      props: {
        title: "Configuration du firewall macOS",
        subtitle: "Etape par etape",
        items: [
          { label: "Activer le firewall systeme", icon: "🛡️" },
          { label: "Bloquer connexions entrantes", icon: "🚫" },
          { label: "Autoriser SSH + VPN", icon: "✅" },
          { label: "Activer le mode furtif", icon: "👻" },
          { label: "Tester avec nmap", icon: "🔍" },
        ],
      },
    },
    2: {
      template: "layered-stack",
      props: {
        title: "Defense en profondeur",
        subtitle: "4 couches de protection",
        items: [
          { label: "Couche 1 — VPN", description: "Tunnel chiffre", icon: "🔒" },
          { label: "Couche 2 — Firewall", description: "Filtrage des ports", icon: "🛡️" },
          { label: "Couche 3 — SSH Keys", description: "Authentification forte", icon: "🔑" },
          { label: "Couche 4 — Permissions", description: "Least privilege", icon: "⚙️" },
        ],
      },
    },
    3: {
      template: "pulsing-orb",
      props: {
        title: "Monitoring reseau",
        subtitle: "Surveiller les connexions en temps reel",
        items: [
          { label: "Little Snitch", icon: "👁️" },
          { label: "netstat", icon: "📊" },
          { label: "Logs systeme", icon: "📋" },
          { label: "Alertes Discord", icon: "🔔" },
        ],
      },
    },
  },

  // LEÇON 24: Reglages de securite OpenClaw
  "reglages-securite-openclaw": {
    0: {
      template: "hierarchy-tree",
      props: {
        title: "Configuration securite OpenClaw",
        subtitle: "Les parametres essentiels",
        items: [
          { label: "auth: api_key + rate_limit", icon: "🔑" },
          { label: "security: sandbox + allowed_domains", icon: "🛡️" },
          { label: "logging: level info + audit", icon: "📋" },
          { label: "permissions: least privilege", icon: "⚙️" },
          { label: "encryption: at rest + in transit", icon: "🔒" },
        ],
      },
    },
    1: {
      template: "checklist-reveal",
      props: {
        title: "Securiser les API keys et secrets",
        subtitle: "Etapes critiques",
        items: [
          { label: "Creer un fichier .env securise", icon: "📄" },
          { label: "chmod 600 sur le .env", icon: "🔒" },
          { label: "Rotation reguliere des cles", icon: "🔄" },
          { label: "Limiter les permissions par cle", icon: "⚙️" },
          { label: "Activer le mode sandbox", icon: "📦" },
        ],
      },
    },
    2: {
      template: "comparison-grid",
      props: {
        title: "Permissions a configurer",
        subtitle: "Selon le principe du least privilege",
        items: [
          { label: "Acces fichiers", description: "Restreindre aux dossiers necessaires", icon: "📁" },
          { label: "Execution commandes", description: "Sandbox obligatoire", icon: "⚡" },
          { label: "Acces reseau", description: "Whitelist de domaines", icon: "🌐" },
          { label: "Donnees memoire", description: "Chiffrement actif", icon: "🧠" },
        ],
      },
    },
    3: {
      template: "bar-chart",
      props: {
        title: "Niveau de risque par configuration",
        subtitle: "De 0 a 100%",
        items: [
          { label: "Non securise", value: 90, icon: "🔴" },
          { label: "Securite basique", value: 50, icon: "🟡" },
          { label: "Securise (reco)", value: 15, icon: "🟢" },
          { label: "Hardened (max)", value: 5, icon: "🛡️" },
        ],
      },
    },
  },

  // LEÇON 25: Maintenance et bonnes pratiques continues
  "maintenance-bonnes-pratiques-securite": {
    0: {
      template: "pulsing-orb",
      props: {
        title: "Maintenance continue",
        subtitle: "La securite n'est jamais terminee",
        items: [
          { label: "Mises a jour", icon: "🔄" },
          { label: "Sauvegardes", icon: "💾" },
          { label: "Audit logs", icon: "📋" },
          { label: "Tests securite", icon: "🧪" },
          { label: "Rotation cles", icon: "🔑" },
          { label: "Veille menaces", icon: "📡" },
        ],
      },
    },
    1: {
      template: "checklist-reveal",
      props: {
        title: "Routine hebdomadaire de securite",
        subtitle: "10 minutes par semaine",
        items: [
          { label: "Verifier les mises a jour systeme", icon: "🔄" },
          { label: "Controler les logs d'acces", icon: "📋" },
          { label: "Backup de la configuration", icon: "💾" },
          { label: "Scanner les vulnerabilites", icon: "🔍" },
          { label: "Tester la restauration", icon: "✅" },
        ],
      },
    },
    2: {
      template: "timeline",
      props: {
        title: "Planning de maintenance",
        subtitle: "Frequence des actions",
        items: [
          { label: "Quotidien", description: "Verifier les alertes et les logs", icon: "📅" },
          { label: "Hebdomadaire", description: "Mises a jour systeme et OpenClaw", icon: "📆" },
          { label: "Mensuel", description: "Rotation des API keys et secrets", icon: "🗓️" },
          { label: "Trimestriel", description: "Audit complet de securite", icon: "📊" },
        ],
      },
    },
    3: {
      template: "trophy-unlock",
      props: {
        title: "Module Securite Complete !",
        subtitle: "Ton agent OpenClaw est maintenant securise",
        items: [
          { label: "VPN configure", icon: "✅" },
          { label: "Firewall actif", icon: "✅" },
          { label: "Secrets proteges", icon: "✅" },
          { label: "Monitoring en place", icon: "✅" },
        ],
      },
    },
  },
};
