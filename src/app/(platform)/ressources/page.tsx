"use client";

import { useState } from "react";
import { useTierGate } from "@/hooks/useTierGate";

interface Resource {
  id: string;
  title: string;
  desc: string;
  section: string;
  category: string;
  type: "tool" | "template" | "guide" | "platform";
  url?: string;
  content?: string;
  logo?: { text: string; bg: string; color: string };
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
    logo: { text: "C", bg: "#7C3AED15", color: "#7C3AED" },
  },
  {
    id: "2",
    title: "ChatGPT",
    desc: "L'IA d'OpenAI. Génération de texte, images (DALL-E), analyse de données et plugins.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://chat.openai.com",
    logo: { text: "G", bg: "#10A37F15", color: "#10A37F" },
  },
  {
    id: "3",
    title: "Gemini",
    desc: "L'IA de Google. Intégration native avec Google Workspace, recherche et analyse multimodale.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://gemini.google.com",
    logo: { text: "G", bg: "#4285F415", color: "#4285F4" },
  },
  {
    id: "4",
    title: "Voiceflow",
    desc: "Plateforme no-code pour créer des chatbots et assistants vocaux IA pour tes clients.",
    section: "outils-ia",
    category: "outils-ia",
    type: "tool",
    url: "https://www.voiceflow.com",
    logo: { text: "V", bg: "#FF660015", color: "#FF6600" },
  },

  // ── Plateformes ──
  {
    id: "5",
    title: "Make (Integromat)",
    desc: "Plateforme d'automatisation visuelle. Connecte des centaines d'apps sans coder. Alternative puissante à Zapier.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://www.make.com",
    logo: { text: "M", bg: "#6D29D915", color: "#6D29D9" },
  },
  {
    id: "6",
    title: "n8n",
    desc: "Outil d'automatisation open-source. Self-hosted possible, plus de 400 intégrations.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://n8n.io",
    logo: { text: "n8n", bg: "#EA4B7115", color: "#EA4B71" },
  },
  {
    id: "7",
    title: "Supabase",
    desc: "Backend-as-a-Service open-source. Base de données, authentification, API et stockage.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://supabase.com",
    logo: { text: "S", bg: "#3ECF8E15", color: "#3ECF8E" },
  },
  {
    id: "8",
    title: "Vercel",
    desc: "Déploiement frontend instantané. Hébergement gratuit pour Next.js, React et sites statiques.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://vercel.com",
    logo: { text: "▲", bg: "#00000012", color: "#000000" },
  },
  {
    id: "9",
    title: "Stripe",
    desc: "Infrastructure de paiement en ligne. Facturation, abonnements et checkout intégré.",
    section: "plateformes",
    category: "plateformes",
    type: "platform",
    url: "https://stripe.com",
    logo: { text: "S", bg: "#635BFF15", color: "#635BFF" },
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
☐ Automatisation de processus (n8n)
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
• 2 automatisations n8n
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
  {
    id: "16",
    title: "Script appel découverte",
    desc: "Script détaillé pour un call de 15 min avec un prospect. Structure éprouvée pour qualifier et closer.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `SCRIPT — APPEL DÉCOUVERTE (15 MIN)

━━━ PHASE 1 — Briser la glace (2 min) ━━━

"Bonjour [Prénom], merci d'avoir pris le temps ! Avant de commencer, est-ce que 15 minutes c'est toujours bon pour vous ?"

"Parfait. Pour que cet échange soit le plus utile possible pour vous, je vais d'abord vous poser quelques questions pour bien comprendre votre situation, et ensuite je vous montrerai si et comment on peut vous aider. Ça vous va ?"

━━━ PHASE 2 — Découverte / Diagnostic (5 min) ━━━

Questions clés à poser dans l'ordre :

1. SITUATION ACTUELLE
"Pouvez-vous me décrire rapidement votre activité et votre équipe ?"
"Quels outils utilisez-vous au quotidien ?"

2. PROBLÈME / DOULEUR
"Qu'est-ce qui vous prend le plus de temps aujourd'hui dans [domaine ciblé] ?"
"Si vous deviez estimer, combien d'heures par semaine votre équipe passe sur [tâche répétitive] ?"
"Qu'est-ce que vous avez déjà essayé pour résoudre ça ?"

3. IMPACT
"Quel impact ça a sur votre business ? (coût, temps, satisfaction client...)"
"Si on pouvait réduire ce temps de 50%, qu'est-ce que ça changerait concrètement ?"

4. URGENCE & BUDGET
"C'est quelque chose que vous voulez résoudre rapidement ou c'est plus exploratoire ?"
"Vous avez déjà une enveloppe budgétaire en tête pour ce type de projet ?"

━━━ PHASE 3 — Présentation de la solution (5 min) ━━━

"Merci pour ces infos. Basé sur ce que vous me dites, voici ce que je recommanderais :"

Structure de la réponse :
→ Reformuler le problème : "Si je comprends bien, votre enjeu principal c'est [X]..."
→ Présenter la solution : "Ce qu'on peut mettre en place, c'est [solution concrète]..."
→ Donner un exemple : "Par exemple, pour [client similaire], on a [résultat]..."
→ Annoncer le format : "Concrètement, ça prendrait [durée] et ça inclut [livrables]..."

━━━ PHASE 4 — Closing (3 min) ━━━

Si intéressé :
"Super, voici ce que je vous propose comme prochaine étape : je vous envoie une proposition détaillée d'ici [date]. On se recale ensuite pour un rapide debrief. Ça vous convient ?"

Si hésitant :
"Je comprends tout à fait. Est-ce qu'il y a un point spécifique qui vous fait hésiter ?"
"Qu'est-ce qui vous aiderait à prendre votre décision ?"

Si pas maintenant :
"Pas de souci, le timing est important. Est-ce que je peux vous recontacter dans [délai] ?"

━━━ APRÈS L'APPEL ━━━
☐ Envoyer un email récap dans les 2h
☐ Envoyer la proposition sous 48h
☐ Programmer une relance à J+3
☐ Ajouter le contact dans ton CRM`,
  },
  {
    id: "17",
    title: "NDA / Accord de confidentialité",
    desc: "Modèle juridique complet d'accord de confidentialité pour protéger tes échanges avec les clients.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `ACCORD DE CONFIDENTIALITÉ (NDA)
Non-Disclosure Agreement — Modèle bilatéral

Entre les soussignés :

PARTIE A (Le Prestataire) :
Nom / Raison sociale : _______________
Adresse : _______________
SIRET : _______________
Représenté par : _______________

PARTIE B (Le Client) :
Nom / Raison sociale : _______________
Adresse : _______________
SIRET : _______________
Représenté par : _______________

Ci-après dénommées ensemble "les Parties".

━━━ ARTICLE 1 — OBJET ━━━
Le présent accord a pour objet de définir les conditions dans lesquelles chaque Partie s'engage à protéger les informations confidentielles communiquées par l'autre Partie dans le cadre de : [décrire le projet ou la relation commerciale].

━━━ ARTICLE 2 — DÉFINITION DES INFORMATIONS CONFIDENTIELLES ━━━
Sont considérées comme confidentielles, sans que cette liste soit exhaustive :
• Toute information technique, commerciale, financière ou stratégique
• Les données clients, bases de données, algorithmes et code source
• Les documents, maquettes, prototypes et livrables intermédiaires
• Les termes financiers de la collaboration
• Toute information expressément désignée comme confidentielle

Ne sont PAS considérées comme confidentielles :
• Les informations déjà publiques au moment de leur communication
• Les informations devenues publiques sans faute de la Partie réceptrice
• Les informations que la Partie réceptrice possédait déjà avant la communication

━━━ ARTICLE 3 — OBLIGATIONS DES PARTIES ━━━
Chaque Partie s'engage à :
• Ne pas divulguer les informations confidentielles à des tiers
• N'utiliser les informations que dans le cadre du projet mentionné à l'Article 1
• Limiter l'accès aux informations aux seules personnes ayant besoin d'en connaître
• Protéger les informations avec le même degré de soin que ses propres informations confidentielles
• Informer immédiatement l'autre Partie en cas de divulgation non autorisée

━━━ ARTICLE 4 — DURÉE ━━━
Le présent accord prend effet à sa date de signature et reste en vigueur pendant une durée de [2 ans / 3 ans / 5 ans] à compter de cette date.
Les obligations de confidentialité survivent à la fin de la relation commerciale pour une durée de [2 ans].

━━━ ARTICLE 5 — RESTITUTION DES DOCUMENTS ━━━
À la fin de la relation ou sur demande, chaque Partie s'engage à restituer ou détruire tous les documents et supports contenant des informations confidentielles, et à en certifier la destruction par écrit.

━━━ ARTICLE 6 — SANCTIONS ━━━
Toute violation du présent accord pourra donner lieu à des dommages et intérêts, sans préjudice de toute autre action en justice.

━━━ ARTICLE 7 — DROIT APPLICABLE ET JURIDICTION ━━━
Le présent accord est soumis au droit français. En cas de litige, les Parties s'engagent à rechercher une solution amiable. À défaut, le litige sera soumis aux tribunaux compétents de [Ville].

Fait à _________, le ___/___/______
En deux exemplaires originaux.

PARTIE A                          PARTIE B
Nom :                             Nom :
Signature :                       Signature :`,
  },
  {
    id: "18",
    title: "Facture type",
    desc: "Modèle de facture avec toutes les mentions légales obligatoires en France. Prêt à personnaliser.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `FACTURE N° [ANNÉE]-[NUMÉRO]

━━━ ÉMETTEUR ━━━
[Nom / Raison sociale]
[Adresse complète]
SIRET : [Numéro SIRET]
Code APE : 6202A
Email : [email]
Téléphone : [numéro]

━━━ CLIENT ━━━
[Nom / Raison sociale du client]
[Adresse complète du client]
SIRET : [Numéro SIRET client] (si applicable)

━━━ DÉTAILS ━━━
Date d'émission : ___/___/______
Date d'échéance : ___/___/______ (30 jours)
Numéro de bon de commande : _______________ (si applicable)

━━━ PRESTATIONS ━━━

| Description                              | Qté | Prix unitaire HT | Total HT    |
|------------------------------------------|-----|-------------------|-------------|
| Création chatbot IA — [détail]           |  1  | _________ €       | _________ € |
| Automatisation n8n — [détail]            |  1  | _________ €       | _________ € |
| Formation équipe — [durée]               |  1  | _________ €       | _________ € |
| Support et maintenance — [durée]         |  1  | _________ €       | _________ € |
|------------------------------------------|-----|-------------------|-------------|
| TOTAL HT                                 |     |                   | _________ € |

━━━ TVA ET TOTAL ━━━
Total HT :                           _________ €
TVA (20%) :                          _________ €
OU : TVA non applicable, art. 293 B du CGI (si micro-entreprise)
Total TTC :                          _________ €

━━━ ACOMPTE ET SOLDE ━━━
Acompte déjà versé :                 _________ €
Solde à régler :                     _________ €

━━━ CONDITIONS DE PAIEMENT ━━━
Mode de paiement : Virement bancaire
IBAN : [Ton IBAN]
BIC : [Ton BIC]
Délai de paiement : 30 jours à compter de la date d'émission

━━━ MENTIONS LÉGALES OBLIGATOIRES ━━━
• En cas de retard de paiement, une pénalité de 3 fois le taux d'intérêt légal sera appliquée
• Indemnité forfaitaire pour frais de recouvrement : 40 €
• Escompte pour paiement anticipé : néant
• Membre d'une association agréée — le règlement par chèque est accepté

━━━ NOTES ━━━
Merci pour votre confiance.
Pour toute question relative à cette facture : [email de contact]`,
  },
  {
    id: "19",
    title: "Proposition commerciale",
    desc: "Structure complète : contexte, solution, planning, prix. Prêt à envoyer après un appel découverte.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `PROPOSITION COMMERCIALE
[Nom de ton agence / ton nom]
Destinataire : [Nom du client / entreprise]
Date : ___/___/______
Validité : 30 jours

━━━ 1. CONTEXTE ET ENJEUX ━━━

Suite à notre échange du [date], voici ma compréhension de votre situation :

Votre entreprise :
• [Secteur d'activité et taille de l'équipe]
• [Outils actuellement utilisés]

Problématiques identifiées :
• [Problème #1 : ex. "Votre équipe passe ~15h/semaine à répondre manuellement aux mêmes questions clients"]
• [Problème #2 : ex. "Aucune automatisation en place pour le suivi des leads"]
• [Problème #3 : ex. "Perte de prospects faute de réactivité"]

Impact estimé :
• [Coût : ex. "~2 000 €/mois en temps perdu"]
• [Opportunité : ex. "20-30% de leads non traités"]

━━━ 2. SOLUTION PROPOSÉE ━━━

Je vous propose une solution en [2/3] volets :

Volet 1 — [Chatbot IA / Automatisation / Site web]
• [Détail de ce qui sera créé]
• [Fonctionnalités clés]
• [Intégrations avec vos outils existants]

Volet 2 — [Automatisations]
• [Workflow #1 : description]
• [Workflow #2 : description]
• [Résultat attendu]

Volet 3 — [Formation & Support] (si applicable)
• Formation de votre équipe ([durée])
• Documentation personnalisée
• Support post-livraison ([durée])

━━━ 3. BÉNÉFICES ATTENDUS ━━━

• Gain de temps : [X] heures/semaine économisées
• ROI estimé : retour sur investissement en [X] mois
• Amélioration de [satisfaction client / taux de conversion / réactivité]

━━━ 4. PLANNING DE RÉALISATION ━━━

Semaine 1 — Cadrage et configuration
• Kickoff meeting (1h)
• Collecte des contenus et accès
• Maquettage de la solution

Semaine 2 — Développement
• Création du [chatbot / automatisations / site]
• Tests internes
• Point intermédiaire avec vous

Semaine 3 — Livraison et formation
• Mise en production
• Formation de votre équipe
• Début de la période de support

━━━ 5. INVESTISSEMENT ━━━

| Prestation                        | Tarif HT      |
|-----------------------------------|----------------|
| [Volet 1 — description]          | _________ €    |
| [Volet 2 — description]          | _________ €    |
| [Volet 3 — Formation & support]  | _________ €    |
|-----------------------------------|----------------|
| TOTAL                             | _________ €    |

Conditions de paiement :
• 30% à la signature (_________ €)
• 70% à la livraison (_________ €)
• TVA non applicable, art. 293 B du CGI (si micro-entreprise)

━━━ 6. GARANTIES ━━━

• [X] révisions incluses
• Support [email/téléphone] pendant [X] jours
• Correction de bugs gratuite pendant [X] jours
• Documentation technique et utilisateur fournie

━━━ 7. PROCHAINES ÉTAPES ━━━

1. Validation de cette proposition
2. Signature du contrat et versement de l'acompte
3. Kickoff meeting pour lancer le projet
4. Livraison sous [X] semaines

Pour valider cette proposition, merci de retourner ce document signé ou de confirmer par email à [ton email].

Au plaisir de collaborer,
[Ton nom]
[Ton téléphone]
[Ton email]`,
  },
  {
    id: "20",
    title: "Cahier des charges type",
    desc: "Template complet pour cadrer un projet client : objectifs, périmètre, livrables et critères de validation.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `CAHIER DES CHARGES — [NOM DU PROJET]

Client : _______________
Prestataire : _______________
Date : ___/___/______
Version : 1.0

━━━ 1. PRÉSENTATION DU PROJET ━━━

1.1 Contexte
[Décrire l'entreprise du client, son secteur, sa situation actuelle]

1.2 Objectifs du projet
• Objectif principal : [ex. "Automatiser le support client pour réduire le temps de réponse de 24h à 2 min"]
• Objectif secondaire : [ex. "Libérer 10h/semaine pour l'équipe commerciale"]
• Indicateurs de succès (KPIs) :
  - [KPI 1 : ex. "Taux de résolution automatique > 60%"]
  - [KPI 2 : ex. "Satisfaction client > 4/5"]
  - [KPI 3 : ex. "Temps de réponse moyen < 5 min"]

━━━ 2. PÉRIMÈTRE ━━━

2.1 Ce qui est inclus
☐ [Livrable 1 : ex. "Chatbot IA intégré au site web"]
☐ [Livrable 2 : ex. "3 automatisations n8n (qualification leads, relance, reporting)"]
☐ [Livrable 3 : ex. "Formation de l'équipe (2h)"]
☐ [Livrable 4 : ex. "Documentation technique et utilisateur"]

2.2 Ce qui est EXCLU
✗ [ex. "Refonte du site web existant"]
✗ [ex. "Création de contenu marketing"]
✗ [ex. "Maintenance au-delà de la période de support"]

━━━ 3. SPÉCIFICATIONS FONCTIONNELLES ━━━

3.1 [Fonctionnalité 1 — ex. Chatbot IA]
• Description : [Ce que fait la fonctionnalité]
• Comportement attendu : [Comment elle fonctionne]
• Sources de données : [FAQ existante, base de connaissances, etc.]
• Langues : [Français / Multilingue]
• Intégration : [Où elle sera intégrée — site web, WhatsApp, etc.]

3.2 [Fonctionnalité 2 — ex. Automatisations]
• Workflow 1 : [Description du déclencheur → actions → résultat]
• Workflow 2 : [Description]
• Outils connectés : [CRM, email, Slack, etc.]

3.3 [Fonctionnalité 3 — ex. Dashboard]
• Métriques affichées : [liste]
• Fréquence de mise à jour : [temps réel / quotidien]
• Accès : [qui peut voir quoi]

━━━ 4. SPÉCIFICATIONS TECHNIQUES ━━━

• Hébergement : [Vercel / AWS / autre]
• Base de données : [Supabase / Firebase / autre]
• APIs utilisées : [OpenAI / Anthropic / autre]
• Compatibilité : [Desktop + Mobile responsive]
• Performance : [Temps de réponse cible < X secondes]
• Sécurité : [RGPD, chiffrement, accès]

━━━ 5. PLANNING ━━━

| Phase                   | Durée      | Dates              | Livrables                    |
|-------------------------|------------|---------------------|------------------------------|
| Cadrage & kickoff       | 2 jours    | ___/___  → ___/___ | Validation CDC               |
| Développement           | [X] jours  | ___/___  → ___/___ | V1 fonctionnelle             |
| Tests & ajustements     | [X] jours  | ___/___  → ___/___ | Version finale               |
| Livraison & formation   | 1 jour     | ___/___             | Mise en prod + formation     |
| Support post-livraison  | [X] jours  | ___/___  → ___/___ | Corrections & support        |

━━━ 6. RÔLES ET RESPONSABILITÉS ━━━

Prestataire :
• Conception, développement et tests
• Livraison dans les délais
• Documentation et formation

Client :
• Fournir les contenus et accès nécessaires sous [X] jours
• Valider les livrables sous 7 jours ouvrés
• Désigner un interlocuteur unique

━━━ 7. CRITÈRES DE VALIDATION ━━━

La livraison sera considérée comme acceptée si :
☐ Toutes les fonctionnalités décrites en section 3 sont opérationnelles
☐ Les KPIs définis en section 1.2 sont atteignables
☐ La documentation est fournie
☐ La formation a été dispensée
☐ Le client a validé par écrit (PV de recette)

━━━ 8. CONDITIONS ━━━

Budget : _________ € HT
Paiement : 30% à la signature, 70% à la recette
Révisions incluses : [X]
Support post-livraison : [X] jours`,
  },
  {
    id: "21",
    title: "Message LinkedIn de prospection",
    desc: "3 templates de messages LinkedIn avec séquence de follow-up. Testés pour engager la conversation.",
    section: "templates",
    category: "templates",
    type: "template",
    content: `MESSAGES LINKEDIN — SÉQUENCE DE PROSPECTION

━━━ TEMPLATE A — Approche directe ━━━

MESSAGE 1 — Demande de connexion
"Bonjour [Prénom], je vois que vous dirigez [Entreprise] dans le secteur [secteur]. Je travaille avec des entreprises comme la vôtre sur l'automatisation IA — j'aimerais beaucoup échanger avec vous. [Ton prénom]"

MESSAGE 2 — Après acceptation (J+1)
"Merci pour la connexion [Prénom] ! J'ai une question rapide : est-ce que votre équipe passe beaucoup de temps sur [tâche répétitive liée à leur secteur] ? Je pose la question parce que c'est souvent le premier poste qu'on automatise avec l'IA, avec des gains assez impressionnants."

MESSAGE 3 — Follow-up (J+4)
"[Prénom], pour vous donner un exemple concret : j'ai récemment aidé [type d'entreprise similaire] à automatiser [processus]. Résultat : [X] heures gagnées par semaine. Si ça vous parle, je serais ravi de vous montrer comment en 15 min. Aucune pression bien sûr !"

MESSAGE 4 — Dernier message (J+10)
"Bonjour [Prénom], je ne veux pas être insistant ! Si le sujet de l'automatisation IA revient sur la table, n'hésitez pas à me solliciter. Je publie aussi régulièrement du contenu sur le sujet ici — ça pourrait vous intéresser. Bonne continuation !"

━━━ TEMPLATE B — Approche par la valeur ━━━

MESSAGE 1 — Demande de connexion
"Bonjour [Prénom], j'ai vu votre post sur [sujet] — très pertinent. Je suis spécialisé en IA pour les [secteur], j'aimerais connecter pour échanger sur le sujet."

MESSAGE 2 — Après acceptation (J+1)
"Merci [Prénom] ! En regardant [Entreprise], j'ai identifié [1-2 pistes concrètes d'amélioration avec l'IA]. Par exemple, [suggestion spécifique]. C'est quelque chose que vous avez déjà exploré ?"

MESSAGE 3 — Follow-up avec preuve sociale (J+4)
"Pour illustrer, voici ce que j'ai mis en place pour [client similaire anonymisé] : [résultat concret avec chiffres]. Le process a pris [durée] et le ROI a été atteint en [X] mois. Ça vaut 15 min d'échange selon vous ?"

━━━ TEMPLATE C — Approche réseau ━━━

MESSAGE 1 — Demande de connexion
"Bonjour [Prénom], on a [X] connexions en commun et je vois qu'on évolue dans des domaines complémentaires. J'aide les entreprises à intégrer l'IA dans leurs process — ça pourrait créer des synergies !"

MESSAGE 2 — Échange informel (J+1)
"Ravi de connecter [Prénom] ! Qu'est-ce qui occupe le plus votre temps chez [Entreprise] en ce moment ? Curieux de savoir si l'IA pourrait vous simplifier les choses."

━━━ BONNES PRATIQUES ━━━

✅ À faire :
• Personnaliser CHAQUE message (mentionner l'entreprise, un post, un point commun)
• Envoyer entre 9h et 11h ou 17h et 19h (meilleurs taux de réponse)
• Espacer les messages de 3-4 jours minimum
• Apporter de la valeur avant de demander un call
• Garder les messages courts (< 300 caractères pour le premier)

❌ À éviter :
• Copier-coller le même message à tout le monde
• Pitcher ton offre dans le premier message
• Relancer plus de 3 fois
• Envoyer des messages le week-end
• Utiliser un ton trop formel ou trop familier`,
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
☐ n8n (automatisations)
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
  {
    id: "22",
    title: "Guide pricing — Fixer ses tarifs",
    desc: "Comment fixer ses tarifs, value-based pricing, grille tarifaire type pour une agence IA.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `GUIDE — FIXER SES TARIFS D'AGENCE IA

━━━ LES 3 MÉTHODES DE PRICING ━━━

1. PRICING AU TEMPS (déconseillé à terme)
• TJM (Taux Journalier Moyen) = tes charges mensuelles ÷ 15 jours facturables × 2
• Exemple : 3 000 € de charges → TJM = 400 €
• Problème : tu es payé pour ton temps, pas ta valeur
• Utiliser uniquement au début pour se constituer des références

2. PRICING AU PROJET (recommandé pour commencer)
• Estime le temps réel → multiplie par ton TJM → ajoute 20-30% de marge
• Exemple : chatbot = 3 jours de travail × 400 € × 1.3 = 1 560 € → arrondi à 1 500 €
• Avantage : le client sait ce qu'il paie, tu gagnes en vitesse

3. VALUE-BASED PRICING (objectif à atteindre)
• Prix basé sur la VALEUR créée pour le client, pas sur ton temps
• Formule : Valeur annuelle créée × 10-20%
• Exemple : ton chatbot fait économiser 30h/mois au client (= 4 500 €/mois de salaire)
  → Valeur annuelle = 54 000 € → Tu factures 5 000-10 000 €
• Clé : toujours quantifier l'impact AVANT de donner un prix

━━━ GRILLE TARIFAIRE TYPE ━━━

CHATBOTS IA :
• Chatbot FAQ simple : 1 000 — 2 000 €
• Chatbot avec base de connaissances : 2 000 — 4 000 €
• Chatbot avancé (CRM, multicanal) : 4 000 — 8 000 €
• Agent IA complexe sur mesure : 8 000 — 15 000 €+

AUTOMATISATIONS :
• Workflow simple (1 déclencheur, 2-3 actions) : 500 — 1 000 €
• Workflow intermédiaire (multi-étapes, conditions) : 1 000 — 2 500 €
• Système d'automatisation complet : 2 500 — 5 000 €

SITES WEB + IA :
• Landing page avec chatbot : 2 000 — 3 500 €
• Site vitrine + IA intégrée : 3 500 — 6 000 €
• Application web sur mesure : 6 000 — 15 000 €+

PACKS RÉCURRENTS (revenus réguliers) :
• Maintenance & support : 200 — 500 €/mois
• Pack automatisations illimitées : 500 — 1 500 €/mois
• Consulting IA : 150 — 300 €/heure

━━━ COMMENT PRÉSENTER SON PRIX ━━━

1. NE JAMAIS donner le prix en premier
   → D'abord : comprendre le problème, quantifier l'impact
2. TOUJOURS proposer 3 options (ancrage)
   → Essentiel / Business / Premium
   → Le client choisit presque toujours l'option du milieu
3. PARLER en investissement, pas en coût
   → "Pour un investissement de 3 000 €, vous économisez 4 500 €/mois"
4. JUSTIFIER par le ROI
   → "Le projet est rentabilisé en moins de 30 jours"

━━━ ERREURS COURANTES ━━━

❌ Facturer à l'heure (le client marchande le temps)
❌ Donner un prix sans avoir compris le besoin
❌ Baisser son prix à la première objection
❌ Ne pas inclure de révisions dans le prix
❌ Oublier les charges (URSSAF, outils, hébergement)
❌ Comparer son prix aux développeurs freelance (tu vends une solution, pas du code)

━━━ RÈGLE D'OR ━━━
Si 100% de tes prospects acceptent ton prix → tu es trop cheap.
Objectif : 60-70% d'acceptation = pricing optimal.`,
  },
  {
    id: "23",
    title: "Guide LinkedIn — Profil et prospection",
    desc: "Optimiser ton profil LinkedIn, stratégie de contenu et techniques de prospection efficaces.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `GUIDE — LINKEDIN POUR TON AGENCE IA

━━━ PARTIE 1 — OPTIMISER TON PROFIL ━━━

PHOTO DE PROFIL :
• Photo professionnelle, fond neutre ou légèrement coloré
• Sourire, regard vers l'objectif
• Cadrage : visage + haut des épaules

BANNIÈRE :
• Ta proposition de valeur en une phrase
• Ton nom / nom d'agence + ce que tu fais
• Outils : Canva (template "LinkedIn Banner")

TITRE (le plus important) :
❌ "Fondateur chez [Mon agence]"
✅ "J'aide les PME à gagner 10h/semaine grâce à l'IA | Chatbots & Automatisation"
✅ "Agence IA — Chatbots, Automatisation & Sites Web pour PME"

→ Formule : [Ce que tu fais] + [pour qui] + [résultat]

SECTION "INFOS" (About) :
Structure en 4 parties :
1. Hook : "Votre équipe perd X heures/semaine sur des tâches répétitives ?"
2. Problème : "La plupart des PME savent que l'IA existe mais ne savent pas par où commencer..."
3. Solution : "Je crée des solutions IA clé en main : chatbots, automatisations, sites intelligents..."
4. CTA : "Prenez RDV pour un diagnostic gratuit de 15 min → [lien Cal.com]"

EXPÉRIENCE :
• Ajoute ton agence avec logo
• Décris 2-3 résultats concrets (même fictifs au début)
• Utilise des chiffres : "Chatbot déployé en 5 jours, 60% de réduction du temps de support"

━━━ PARTIE 2 — STRATÉGIE DE CONTENU ━━━

FRÉQUENCE : 3-5 posts par semaine minimum

TYPES DE CONTENU QUI MARCHENT :

1. Études de cas (1-2x/semaine)
"J'ai créé un chatbot pour [type d'entreprise].
Avant : [situation]
Après : [résultat avec chiffres]
Voici comment en 3 étapes :"

2. Tips & astuces IA (2x/semaine)
"5 prompts ChatGPT que j'utilise tous les jours pour [tâche]"
"L'automatisation n8n qui m'a fait gagner 5h cette semaine"

3. Coulisses / behind the scenes (1x/semaine)
"Ce matin j'ai livré [projet]. Voici ce que j'ai appris :"
"Mon setup d'outils pour gérer mon agence IA solo"

4. Prises de position (1x/semaine)
"Non, l'IA ne va pas remplacer [métier]. Voici pourquoi :"
"Le problème avec [tendance], c'est que..."

FORMAT DES POSTS :
• Première ligne = hook accrocheur (la seule qu'on voit avant "voir plus")
• Phrases courtes, une idée par ligne
• Sauter des lignes (aérer le texte)
• Terminer par une question ou un CTA
• 1-3 hashtags max (#IA #Automatisation #PME)

MEILLEURS HORAIRES :
• Mardi au jeudi : 8h-9h ou 17h-18h
• Éviter le lundi matin et le vendredi après-midi

━━━ PARTIE 3 — PROSPECTION LINKEDIN ━━━

MÉTHODE QUOTIDIENNE (30 min/jour) :

1. CIBLER (5 min)
• Utilise la recherche LinkedIn avec filtres : secteur, taille, poste
• Cible : CEO, Directeur commercial, COO de PME (10-200 employés)
• Sauvegarde tes recherches

2. CONNECTER (10 min)
• Envoie 10-15 demandes de connexion par jour
• TOUJOURS avec une note personnalisée
• Mentionne un point commun, un post, ou une observation sur leur entreprise

3. ENGAGER (10 min)
• Commente 5-10 posts de tes prospects
• Commentaires de valeur (pas juste "Super post !")
• Like et partage le contenu de tes cibles

4. CONVERTIR (5 min)
• Envoie un message de suivi 24h après l'acceptation
• Utilise les templates de la ressource "Messages LinkedIn de prospection"
• Objectif : 2-3 appels découverte par semaine

MÉTRIQUES À SUIVRE :
• Taux d'acceptation des connexions : objectif > 30%
• Taux de réponse aux messages : objectif > 15%
• Nombre d'appels bookés par semaine : objectif 2-3
• Vues de profil par semaine : en croissance constante`,
  },
  {
    id: "24",
    title: "Guide démo client",
    desc: "Comment préparer et réussir une démo live de tes solutions IA devant un prospect.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `GUIDE — RÉUSSIR SA DÉMO CLIENT

━━━ AVANT LA DÉMO — PRÉPARATION ━━━

RECHERCHE (30 min minimum) :
☐ Visiter le site web du prospect
☐ Lire leurs avis Google / Trustpilot
☐ Regarder leur présence sur les réseaux sociaux
☐ Identifier 2-3 problèmes concrets que ton IA pourrait résoudre
☐ Préparer un exemple personnalisé (même rapide)

SETUP TECHNIQUE :
☐ Tester ta démo 1h avant (chatbot, automatisation, site)
☐ Avoir un backup si le live plante (vidéo enregistrée, screenshots)
☐ Fermer tous les onglets et notifications inutiles
☐ Vérifier micro, caméra, connexion internet
☐ Avoir un deuxième écran ou un plan de ce que tu vas montrer
☐ Préparer l'URL de ta démo dans un onglet prêt

PRÉPARER TA DÉMO PERSONNALISÉE :
→ L'erreur #1 : montrer une démo générique
→ La clé : personnaliser avec le nom, le secteur ou les données du prospect

Exemples de personnalisation rapide :
• Chatbot : changer le message d'accueil avec le nom de l'entreprise
• Automatisation : montrer un workflow avec leurs outils (CRM, email...)
• Site : intégrer leur logo ou couleurs dans une maquette

━━━ PENDANT LA DÉMO (20-30 min) ━━━

STRUCTURE RECOMMANDÉE :

Phase 1 — Recap du besoin (3 min)
"Lors de notre dernier échange, vous m'avez dit que [problème principal]. C'est toujours votre priorité ?"
→ Valider que le besoin est toujours le même
→ Ajuster la démo en temps réel si nécessaire

Phase 2 — Montrer la VALEUR avant la solution (2 min)
"Aujourd'hui, votre équipe passe environ [X]h par semaine sur [tâche]. Ça représente [coût] par mois. Ce que je vais vous montrer réduit ça de [X]%."
→ Ancrer le ROI AVANT de montrer le produit

Phase 3 — Démo live (15 min)
Règles d'or :
• Montrer LE parcours client, pas toutes les fonctionnalités
• Raconter une histoire : "Imaginez, un client arrive sur votre site à 23h..."
• Montrer le résultat (réponse du chatbot, email automatique, notification)
• Laisser le prospect poser des questions en direct
• Si quelque chose plante : "C'est un environnement de test, en prod c'est fluide. Laissez-moi vous montrer avec [backup]"

Phase 4 — Questions et objections (5 min)
Objections courantes et réponses :

"C'est combien ?"
→ "Avant de parler budget, est-ce que la solution correspond à ce que vous cherchez ?"

"On peut faire ça en interne"
→ "Tout à fait. La question c'est : en combien de temps et à quel coût ? Mon avantage c'est que c'est livré en [X] jours."

"Il faut que j'en parle à mon associé/boss"
→ "Bien sûr. Est-ce qu'on peut planifier un 2e call avec lui/elle ? Je peux refaire une démo rapide."

"C'est trop cher"
→ "Je comprends. Quel budget aviez-vous en tête ? On peut aussi commencer par [offre réduite] et évoluer."

Phase 5 — Closing (5 min)
"Est-ce que cette solution répond à votre besoin ?"
Si oui → "Super, je vous envoie la proposition d'ici demain. On cale un point mardi pour valider ?"
Si peut-être → "Qu'est-ce qui vous manque pour prendre une décision ?"
Si non → "Merci pour votre honnêteté. Qu'est-ce qui ne correspond pas ?"

━━━ APRÈS LA DÉMO ━━━

Dans les 2 heures :
☐ Envoyer un email de récap (ce qui a été montré, prochaines étapes)
☐ Envoyer la proposition commerciale sous 24-48h
☐ Programmer une relance à J+3

Template email post-démo :
"Bonjour [Prénom],
Merci pour cet échange ! Comme convenu, voici un récap :
→ [Ce qu'on a vu ensemble]
→ [Prochaine étape convenue]
Je vous envoie la proposition détaillée d'ici [date].
N'hésitez pas si vous avez des questions entre-temps."

━━━ CHECKLIST DÉMO PARFAITE ━━━
☐ Personnalisation visible (nom client, secteur)
☐ ROI chiffré mentionné
☐ Démo fluide sans accroc (ou backup prêt)
☐ Le prospect a parlé au moins 30% du temps
☐ Prochaine étape claire définie
☐ Email de suivi envoyé le jour même`,
  },
  {
    id: "25",
    title: "Guide premier client — Signer son premier contrat",
    desc: "Étapes concrètes pour trouver et signer ton premier client en agence IA, même sans portfolio.",
    section: "guides",
    category: "guides",
    type: "guide",
    content: `GUIDE — SIGNER TON PREMIER CLIENT

━━━ MINDSET : AVANT DE COMMENCER ━━━

La réalité : tu n'as pas besoin d'être expert pour signer un premier client.
Tu dois juste en savoir plus que ton client sur le sujet (et c'est déjà le cas si tu suis cette formation).

Ce qui bloque la plupart des gens :
❌ "Je ne suis pas assez prêt" → Tu le seras en faisant, pas en attendant
❌ "Je n'ai pas de portfolio" → On va régler ça
❌ "Personne ne va me faire confiance" → Tes premiers clients achètent TA motivation
❌ "Le marché est saturé" → 95% des PME n'ont AUCUNE solution IA en place

━━━ ÉTAPE 1 — CRÉER TON OFFRE IRRÉSISTIBLE ━━━

Formule simple pour démarrer :
"J'aide les [type de client] à [résultat concret] grâce à [ta solution IA]"

Exemples :
• "J'aide les restaurants à répondre automatiquement aux avis Google grâce à un chatbot IA"
• "J'aide les coachs à automatiser leur prise de RDV et leur suivi client"
• "J'aide les e-commerces à réduire de 50% les questions au support grâce à un chatbot"

Choisis UNE niche pour commencer. Plus c'est spécifique, plus c'est facile de vendre.

━━━ ÉTAPE 2 — CONSTRUIRE UN PORTFOLIO (même sans clients) ━━━

Méthode 1 : Le projet vitrine
• Crée un chatbot de démo pour un business fictif (restaurant, cabinet comptable, e-commerce)
• Déploie-le sur une vraie page web (Vercel)
• Enregistre une vidéo de 2 min montrant le chatbot en action
→ C'est ton premier cas client, même si c'est fictif

Méthode 2 : La mission gratuite stratégique
• Choisis 1-2 commerces locaux que tu aimes (café, salle de sport, boutique)
• Propose-leur un chatbot GRATUIT en échange d'un témoignage
• "Je suis en train de lancer mon activité, j'aimerais créer un chatbot pour votre business gratuitement. La seule chose que je demande c'est un avis honnête sur LinkedIn."
→ Résultat : un vrai cas client + un témoignage

Méthode 3 : L'audit gratuit
• Analyse le site web ou les process d'une entreprise
• Envoie un document de 1 page avec 3 recommandations concrètes
• "J'ai identifié 3 opportunités d'automatisation qui pourraient vous faire gagner [X]h/semaine"
→ Tu montres ta valeur avant de vendre

━━━ ÉTAPE 3 — TROUVER DES PROSPECTS ━━━

Canal #1 — Réseau personnel (le plus rapide)
• Fais une liste de TOUTES les personnes que tu connais qui ont un business
• Amis, famille, anciens collègues, connaissances
• Envoie un message simple : "Hello [Prénom], je lance une activité dans l'IA pour les entreprises. Tu connais quelqu'un qui pourrait être intéressé ?"
→ Tu ne vends pas, tu demandes des introductions

Canal #2 — LinkedIn (le plus scalable)
• Optimise ton profil (voir Guide LinkedIn)
• Publie 3-5x par semaine
• Envoie 10-15 demandes de connexion par jour à des dirigeants de PME
• Objectif : 2-3 calls par semaine

Canal #3 — Local / terrain
• Fais le tour des commerces de ton quartier
• Identifie ceux qui n'ont pas de chatbot / site moderne / automatisation
• Propose un audit gratuit en face à face
→ Le taux de conversion en local est bien plus élevé qu'en digital

Canal #4 — Communautés en ligne
• Groupes Facebook de ton secteur cible
• Serveurs Discord entrepreneurs
• Forums et Slack de ta niche
• Apporte de la valeur (réponds aux questions) avant de pitcher

━━━ ÉTAPE 4 — LE PREMIER APPEL ━━━

Utilise le script d'appel découverte (voir Templates).
Objectif : comprendre le besoin et proposer une solution.

Règle d'or : écoute 70%, parle 30%.

━━━ ÉTAPE 5 — LA PROPOSITION ━━━

Pour ton premier client, simplifie au maximum :
• 1 page max
• Problème → Solution → Prix → Planning
• Prix "ami" acceptable (tu capitalises sur l'expérience)
• Propose une offre sans risque : "Si vous n'êtes pas satisfait, je vous rembourse"

Exemple de pricing premier client :
• Chatbot simple : 500-800 € (au lieu de 1 500 €)
• Automatisation : 300-500 € (au lieu de 1 000 €)
• Pack chatbot + automatisation : 800-1 200 €
→ L'objectif n'est PAS de gagner de l'argent, c'est de prouver ta valeur

━━━ ÉTAPE 6 — SIGNER ET LIVRER ━━━

Checklist signature :
☐ Envoyer le contrat (utilise le template de cette plateforme)
☐ Demander l'acompte (30% minimum)
☐ Planifier le kickoff meeting
☐ Définir les livrables et le planning

Checklist livraison :
☐ Communiquer régulièrement (1 update par semaine minimum)
☐ Livrer en avance si possible (effet wow)
☐ Demander du feedback à chaque étape
☐ Former le client à utiliser la solution
☐ Documenter ce que tu as fait

━━━ ÉTAPE 7 — CAPITALISER ━━━

Dès la livraison :
☐ Demander un témoignage LinkedIn (prépare le texte pour eux)
☐ Demander une recommandation LinkedIn
☐ Écrire une étude de cas détaillée
☐ Demander : "Connaissez-vous quelqu'un d'autre qui aurait le même besoin ?"
☐ Proposer un contrat de maintenance (revenu récurrent)

━━━ TIMELINE RÉALISTE ━━━

Semaine 1-2 : Préparer offre + portfolio + profil LinkedIn
Semaine 2-3 : Prospection intensive (50 messages envoyés)
Semaine 3-4 : Premiers appels découverte (3-5 calls)
Semaine 4-6 : Premier contrat signé
Semaine 6-8 : Livraison + témoignage

→ Premier client signé en 4-6 semaines si tu t'y tiens.
→ Le plus dur c'est de commencer. Après le premier, tout s'accélère.`,
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

  function downloadContent() {
    if (resource.content) {
      const blob = new Blob([resource.content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${resource.title.replace(/[^a-zA-Z0-9àâäéèêëïîôùûüÿçÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ\s-]/g, "").replace(/\s+/g, "-").toLowerCase()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
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
              onClick={downloadContent}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              Telecharger
            </button>
            <button
              onClick={copyContent}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {copied ? "Copie !" : "Copier"}
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
  const { isLocked } = useTierGate();
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
    if (isLocked) return;
    if (resource.url) {
      window.open(resource.url, "_blank", "noopener,noreferrer");
    } else if (resource.content) {
      setModalResource(resource);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Upgrade banner for free users */}
      {isLocked && (
        <div className="mb-6 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#FF1744]/10 to-[#FF1744]/5 border border-[#FF1744]/20 p-4">
          <div>
            <p className="text-sm font-semibold text-[#111]">Fonctionnalit&eacute; premium</p>
            <p className="text-xs text-[#6B7280]">Les ressources sont visibles mais l&apos;acc&egrave;s complet n&eacute;cessite un abonnement.</p>
          </div>
          <a href="/offres" className="flex-shrink-0 rounded-full bg-[#FF1744] px-4 py-2 text-xs font-semibold text-white hover:bg-[#D50000] transition-colors">
            Voir les offres
          </a>
        </div>
      )}

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
              <span className="font-medium text-gray-600">{totalCategories}</span> categories
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
                      isLocked
                        ? "pointer-events-none opacity-60"
                        : hasAction
                          ? "cursor-pointer hover:shadow-md hover:border-gray-300 hover:-translate-y-[1px]"
                          : "opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon / Logo */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: r.logo ? r.logo.bg : sectionColor + "10" }}
                      >
                        {r.logo ? (
                          <span
                            className="font-bold leading-none select-none"
                            style={{
                              color: r.logo.color,
                              fontSize: r.logo.text.length > 2 ? "9px" : "14px",
                            }}
                          >
                            {r.logo.text}
                          </span>
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
                            Bientot disponible
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
          <p className="text-sm text-gray-500 font-medium mb-1">Aucune ressource trouvee</p>
          <p className="text-xs text-gray-400">Essaie un autre terme de recherche ou une autre categorie.</p>
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
