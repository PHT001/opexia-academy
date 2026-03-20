"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────── */
interface Template {
  title: string;
  desc: string;
  content: string;
  tags: string[];
}

interface Category {
  icon: string;
  title: string;
  desc: string;
  color: string;
  templates: Template[];
}

/* ─── Data ──────────────────────────────────────────── */
const CATEGORIES: Category[] = [
  {
    icon: "🎯",
    title: "Prospection",
    desc: "Scripts d'emails et messages LinkedIn pour trouver des clients",
    color: "#FF1744",
    templates: [
      {
        title: "Email de premier contact B2B",
        desc: "Premier email de prise de contact avec un prospect entreprise",
        tags: ["Email", "B2B"],
        content: `Objet : [Bénéfice] pour [Entreprise du prospect]

Bonjour [Prénom],

J'ai remarqué que [observation personnalisée sur leur entreprise/activité].

Chez [ton agence], on aide les [type de client] à [résultat concret] grâce à [ta méthode].

Récemment, on a accompagné [client similaire] qui a obtenu [résultat chiffré : +X%, -X heures, etc.].

Seriez-vous disponible [jour] pour un échange de 15 min ?

Cordialement,
[Ton prénom]`,
      },
      {
        title: "Relance email J+3",
        desc: "Email de relance 3 jours après le premier contact",
        tags: ["Email", "Relance"],
        content: `Objet : Re: [objet précédent]

Bonjour [Prénom],

Je me permets de revenir vers vous — j'imagine que votre agenda est chargé.

Pour vous faire gagner du temps, voici ce qu'on pourrait aborder en 15 min :
• [Point 1 pertinent pour leur business]
• [Point 2 — résultat client similaire]
• [Point 3 — quick win possible]

Quel créneau vous arrangerait cette semaine ?

[Ton prénom]`,
      },
      {
        title: "Dernière relance J+7",
        desc: "Dernier email de relance, ton soft et respectueux",
        tags: ["Email", "Relance"],
        content: `Objet : Dernière question, [Prénom]

Bonjour [Prénom],

Je ne veux pas être insistant. Si le timing n'est pas le bon, je comprends parfaitement.

Juste une question : est-ce que [problème que tu résous] est un sujet prioritaire pour vous en ce moment ?

Si oui, on en discute quand vous voulez.
Si non, aucun souci — je vous souhaite une excellente continuation !

[Ton prénom]`,
      },
      {
        title: "Message LinkedIn — connexion",
        desc: "Demande de connexion LinkedIn avec accroche personnalisée",
        tags: ["LinkedIn", "Connexion"],
        content: `Bonjour [Prénom],

J'ai vu votre post sur [sujet] — très pertinent, surtout le point sur [détail].

Je travaille aussi dans [domaine] et j'aide les [cible] à [résultat]. Ça m'intéresserait d'échanger avec vous.

À bientôt !`,
      },
      {
        title: "Message LinkedIn — après connexion",
        desc: "Premier message après acceptation de la connexion",
        tags: ["LinkedIn", "Message"],
        content: `Merci d'avoir accepté [Prénom] !

Curieux de savoir — c'est quoi votre plus gros challenge en ce moment côté [domaine] ?

De mon côté, on vient d'aider [client] à [résultat chiffré]. Si jamais c'est un sujet pour vous, je serais ravi d'en discuter.

Bonne journée !`,
      },
      {
        title: "Email post-événement / webinar",
        desc: "Suivi après rencontre à un événement ou webinar",
        tags: ["Email", "Networking"],
        content: `Objet : Ravi de vous avoir croisé à [événement]

Bonjour [Prénom],

C'était un plaisir d'échanger avec vous à [événement/webinar] sur [sujet].

Comme évoqué, chez [ton agence] on accompagne les [cible] sur [domaine]. Je pense qu'on pourrait [proposition de valeur concrète].

Est-ce qu'un call de 15 min la semaine prochaine vous conviendrait pour approfondir ?

Cordialement,
[Ton prénom]`,
      },
      {
        title: "Cold email — approche indirecte",
        desc: "Approche via une question ou un contenu gratuit",
        tags: ["Email", "Cold"],
        content: `Objet : Question rapide sur [domaine du prospect]

Bonjour [Prénom],

Je prépare un [guide/article/étude] sur [sujet pertinent pour le prospect] et j'aimerais inclure le point de vue de professionnels comme vous.

Une question rapide : quelle est selon vous la plus grosse erreur que font les [cible] en matière de [sujet] ?

En échange, je vous enverrai le guide complet en avant-première.

Merci d'avance,
[Ton prénom]`,
      },
      {
        title: "Message vocal de prospection",
        desc: "Script pour message vocal ou vidéo personnalisé",
        tags: ["Vocal", "Vidéo"],
        content: `"Salut [Prénom], c'est [ton prénom] de [ton agence].

Je t'envoie ce message parce que j'ai vu que [observation sur leur activité] et on aide justement les [cible] à [résultat].

Par exemple, [client similaire] a obtenu [résultat chiffré] en [durée].

Si ça t'intéresse d'en discuter, on peut caler un call de 15 min. Je t'envoie mon lien de calendrier.

Bonne journée !"`,
      },
    ],
  },
  {
    icon: "✍️",
    title: "Contenu",
    desc: "Templates de posts, articles et contenus marketing",
    color: "#6C5CE7",
    templates: [
      {
        title: "Post LinkedIn — storytelling",
        desc: "Structure de post LinkedIn avec histoire personnelle",
        tags: ["LinkedIn", "Story"],
        content: `[Chiffre choc ou question qui interpelle]

Il y a [durée], je [situation de départ].

Je pensais que [croyance limitante].
Résultat ? [Conséquence négative].

Puis j'ai compris [déclic] :

→ [Leçon 1 + détail]
→ [Leçon 2 + détail]
→ [Leçon 3 + détail]

Aujourd'hui :
✅ [Résultat 1]
✅ [Résultat 2]
✅ [Résultat 3]

La leçon ? [Insight en une phrase]

♻️ Reposte si ça résonne.
💬 C'est quoi ton plus gros déclic business ?`,
      },
      {
        title: "Post LinkedIn — liste de conseils",
        desc: "Format liste numérotée avec conseils actionnables",
        tags: ["LinkedIn", "Conseils"],
        content: `[X] choses que j'aurais aimé savoir avant de [action/domaine] :

1. [Conseil 1]
   → [Explication courte]

2. [Conseil 2]
   → [Explication courte]

3. [Conseil 3]
   → [Explication courte]

4. [Conseil 4]
   → [Explication courte]

5. [Conseil 5]
   → [Explication courte]

Le plus important ? [Résumé]

Enregistre ce post pour plus tard 🔖`,
      },
      {
        title: "Carrousel Instagram",
        desc: "Structure de carrousel éducatif pour Instagram",
        tags: ["Instagram", "Carrousel"],
        content: `Slide 1 (Cover) : "[Titre accrocheur — question ou promesse]"
Slide 2 : "Le problème → [Description en 2 lignes max]"
Slide 3 : "Erreur #1 → [Erreur + pourquoi c'est grave]"
Slide 4 : "Erreur #2 → [Erreur + pourquoi c'est grave]"
Slide 5 : "Erreur #3 → [Erreur + pourquoi c'est grave]"
Slide 6 : "La solution → [Ta méthode en 1 phrase]"
Slide 7 : "Les résultats → [Chiffres / transformation]"
Slide 8 (CTA) : "Enregistre + Follow pour plus 🔥"

Caption :
[Résumé en 2-3 lignes]
.
.
.
#hashtag1 #hashtag2 #hashtag3 (20-30 hashtags)`,
      },
      {
        title: "Thread X / Twitter",
        desc: "Structure de thread viral pour X",
        tags: ["Twitter/X", "Thread"],
        content: `1/ [Hook — affirmation forte ou stat choquante] 🧵

2/ Contexte : [Pourquoi c'est important maintenant]

3/ Premier point clé :
[Détail + exemple concret]

4/ Deuxième point clé :
[Détail + exemple concret]

5/ Troisième point clé :
[Détail + exemple concret]

6/ Le résultat ?
[Transformation / chiffres]

7/ TL;DR :
• [Point 1]
• [Point 2]
• [Point 3]

Follow pour plus de contenu comme celui-ci 🔔
RT le premier tweet si ça t'a aidé ♻️`,
      },
      {
        title: "Script vidéo YouTube / TikTok",
        desc: "Structure de vidéo courte avec hook et CTA",
        tags: ["YouTube", "TikTok"],
        content: `HOOK (0-3s) :
"[Question choc ou affirmation controversée]"

PROBLÈME (3-15s) :
"La plupart des [cible] font [erreur courante]. Et ça leur coûte [conséquence]."

SOLUTION (15-45s) :
"Voici ce que je fais à la place :
Étape 1 : [Action]
Étape 2 : [Action]
Étape 3 : [Action]"

PREUVE (45-55s) :
"Grâce à ça, [résultat chiffré ou témoignage]."

CTA (55-60s) :
"Follow pour plus de tips [domaine]. Et commente [mot] si tu veux que je t'envoie [lead magnet]."`,
      },
      {
        title: "Newsletter hebdomadaire",
        desc: "Structure d'email newsletter engageante",
        tags: ["Email", "Newsletter"],
        content: `Objet : [Chiffre ou question] — [Sujet de la semaine]

Hey [Prénom],

Cette semaine, je voulais te parler de [sujet].

💡 L'INSIGHT
[Observation / stat / anecdote en 2-3 lignes]

🔧 EN PRATIQUE
Voici comment l'appliquer :
1. [Action concrète]
2. [Action concrète]
3. [Action concrète]

📊 EXEMPLE RÉEL
[Cas client ou exemple personnel — résultat chiffré]

🎁 RESSOURCE DE LA SEMAINE
[Lien / outil / template gratuit]

À la semaine prochaine,
[Ton prénom]

PS : [Teaser du prochain sujet ou CTA secondaire]`,
      },
      {
        title: "Article de blog — structure SEO",
        desc: "Template d'article optimisé pour le référencement",
        tags: ["Blog", "SEO"],
        content: `TITRE : [Mot-clé principal] : [Promesse / Bénéfice] ([Année])

META DESCRIPTION : [155 caractères — mot-clé + bénéfice + CTA]

INTRO (100-150 mots) :
[Accroche — stat ou question]
[Contexte — pourquoi c'est important]
[Promesse — ce que le lecteur va apprendre]

H2 : Qu'est-ce que [sujet] ?
[Définition + contexte]

H2 : Pourquoi [sujet] est important en [année] ?
[3 raisons avec exemples]

H2 : [X] étapes pour [résultat]
H3 : Étape 1 — [Action]
H3 : Étape 2 — [Action]
H3 : Étape 3 — [Action]

H2 : Erreurs à éviter
[3 erreurs courantes]

H2 : FAQ
[3-5 questions fréquentes avec réponses]

CONCLUSION :
[Résumé + CTA]`,
      },
      {
        title: "Étude de cas client",
        desc: "Structure pour rédiger un case study percutant",
        tags: ["Case Study", "Portfolio"],
        content: `TITRE : Comment [client] a obtenu [résultat chiffré] en [durée]

RÉSUMÉ :
• Client : [Nom / secteur]
• Problème : [En une phrase]
• Solution : [En une phrase]
• Résultat : [Chiffre clé]

LE CONTEXTE :
[Qui est le client, sa situation de départ, ses frustrations]

LE DÉFI :
[Problème précis, impact sur le business, ce qui avait déjà été tenté]

LA SOLUTION :
[Ce que vous avez mis en place, étape par étape]
1. [Phase 1]
2. [Phase 2]
3. [Phase 3]

LES RÉSULTATS :
📈 [Métrique 1 : avant → après]
📈 [Métrique 2 : avant → après]
📈 [Métrique 3 : avant → après]

TÉMOIGNAGE CLIENT :
"[Citation du client]" — [Prénom, Poste, Entreprise]`,
      },
      {
        title: "Bio réseaux sociaux",
        desc: "Templates de bio optimisées pour chaque plateforme",
        tags: ["Bio", "Profil"],
        content: `LINKEDIN :
[Titre] | J'aide les [cible] à [résultat] | [Preuve sociale : X clients, X€ générés] | [CTA : Lien ou DM]

INSTAGRAM :
[Emoji] [Ce que tu fais en 1 ligne]
[Emoji] [Résultat / preuve sociale]
[Emoji] [CTA]
🔗 [Lien]

TWITTER/X :
[Ce que tu fais] • [Pour qui] • [Preuve] • [Lien]

TIKTOK :
[Emoji] [Promesse en 1 ligne]
[Emoji] [Format de contenu]
[Emoji] [CTA ou lead magnet]`,
      },
    ],
  },
  {
    icon: "⚡",
    title: "Automatisation",
    desc: "Workflows et prompts pour automatiser tes processus",
    color: "#0984E3",
    templates: [
      {
        title: "Onboarding client automatisé",
        desc: "Séquence d'emails automatique pour accueillir un nouveau client",
        tags: ["Email", "Séquence"],
        content: `EMAIL 1 — Immédiat : Bienvenue
Objet : Bienvenue chez [ton agence] ! 🎉
"Bienvenue [Prénom] ! On est ravis de t'avoir. Voici ce qui t'attend :
1. [Étape 1]
2. [Étape 2]
3. [Étape 3]
En attendant, voici [ressource/lien utile]."

EMAIL 2 — J+1 : Premier pas
Objet : Ta première action pour [résultat]
"Pour bien démarrer, voici la première chose à faire : [action simple].
Ça prend 5 min et ça va te permettre de [bénéfice]."

EMAIL 3 — J+3 : Valeur rapide
Objet : [Prénom], voici ton premier quick win
"Voici [template/outil/astuce] que nos meilleurs clients utilisent dès la première semaine : [contenu]."

EMAIL 4 — J+7 : Check-in
Objet : Comment ça se passe ?
"Ça fait une semaine ! Comment tu te sens ? [Question ouverte]. Si tu as des questions, réponds à cet email."`,
      },
      {
        title: "Séquence de nurturing",
        desc: "Emails automatiques pour réchauffer un prospect froid",
        tags: ["Email", "Nurturing"],
        content: `EMAIL 1 (J+0) — La valeur gratuite
Objet : [Ressource gratuite] pour [cible]
Contenu : Envoi d'un guide/checklist/template gratuit sans demander de contrepartie.

EMAIL 2 (J+3) — Le cas client
Objet : Comment [client] a obtenu [résultat]
Contenu : Storytelling d'un cas client avec résultats chiffrés.

EMAIL 3 (J+7) — L'erreur courante
Objet : L'erreur n°1 des [cible] en [domaine]
Contenu : Contenu éducatif qui positionne ton expertise.

EMAIL 4 (J+10) — La preuve sociale
Objet : Ce que disent nos clients
Contenu : 2-3 témoignages + résultats.

EMAIL 5 (J+14) — L'offre
Objet : [Prénom], on en discute ?
Contenu : Proposition d'appel avec bénéfice clair et urgence légère.`,
      },
      {
        title: "Workflow de qualification leads",
        desc: "Critères et process pour qualifier automatiquement un lead",
        tags: ["Process", "CRM"],
        content: `SCORING DES LEADS :

🔴 CHAUD (Score 80-100) → Action immédiate
• A visité la page pricing (+20)
• A rempli un formulaire (+30)
• A répondu à un email (+15)
• Budget confirmé (+20)
• Décideur identifié (+15)

🟡 TIÈDE (Score 40-79) → Nurturing
• A ouvert 3+ emails (+10)
• A téléchargé une ressource (+15)
• A visité le site 2+ fois (+10)
• Correspond à l'ICP (+15)

🔵 FROID (Score 0-39) → Séquence longue
• Simple visite du site (+5)
• Inscrit à la newsletter (+10)

ACTIONS AUTOMATIQUES :
• Score 80+ → Notification Slack + assignation commercial
• Score 50-79 → Ajout séquence nurturing
• Score < 50 → Newsletter hebdo`,
      },
      {
        title: "Template de réponse automatique",
        desc: "Réponses pré-écrites pour les demandes fréquentes",
        tags: ["Support", "FAQ"],
        content: `DEMANDE DE PRIX :
"Merci pour votre intérêt ! Nos tarifs dépendent de [critères]. Pour vous faire une proposition adaptée, j'aurais besoin de connaître :
1. [Question 1]
2. [Question 2]
3. [Question 3]
Répondez à ces 3 points et je vous envoie un devis sous 24h."

DEMANDE DE DÉLAI :
"Pour un projet comme le vôtre, comptez généralement entre [X] et [Y] semaines. Le délai exact dépend de [facteurs]. On cale un call pour affiner ?"

DEMANDE DE TÉMOIGNAGES :
"Bien sûr ! Voici quelques résultats récents :
• [Client 1] : [Résultat]
• [Client 2] : [Résultat]
• [Client 3] : [Résultat]
Je peux aussi vous mettre en contact direct si vous le souhaitez."`,
      },
      {
        title: "Checklist lancement d'offre",
        desc: "Liste complète pour lancer une nouvelle offre",
        tags: ["Process", "Lancement"],
        content: `PRÉ-LANCEMENT (J-14 à J-1) :
□ Définir l'offre et le pricing
□ Créer la page de vente
□ Préparer les emails de lancement (3 min.)
□ Créer les visuels réseaux sociaux
□ Configurer le système de paiement
□ Tester le parcours d'achat complet
□ Préparer les réponses aux objections

LANCEMENT (Jour J) :
□ Envoyer l'email d'ouverture
□ Publier sur LinkedIn / Instagram / X
□ Activer les ads (si applicable)
□ Répondre aux DMs et commentaires en temps réel
□ Story Instagram toutes les 2h

POST-LANCEMENT (J+1 à J+7) :
□ Email de relance J+1
□ Partager les premiers résultats / témoignages
□ Email dernière chance J+5
□ Clôture + bilan des ventes
□ Onboarder les nouveaux clients`,
      },
      {
        title: "Prompt ChatGPT — assistant commercial",
        desc: "Prompt système pour créer un assistant IA de vente",
        tags: ["IA", "Prompt"],
        content: `Tu es l'assistant commercial de [ton agence]. Ton rôle est d'aider l'équipe à :

1. QUALIFIER LES LEADS
- Pose des questions ouvertes pour comprendre le besoin
- Identifie le budget, le timing et le décideur
- Score le lead de 1 à 10

2. RÉDIGER DES MESSAGES
- Adopte un ton [professionnel/décontracté/expert]
- Personnalise chaque message avec des détails du prospect
- Propose toujours un CTA clair

3. GÉRER LES OBJECTIONS
- "C'est trop cher" → [Réponse type]
- "J'ai pas le temps" → [Réponse type]
- "Je dois réfléchir" → [Réponse type]

RÈGLES :
- Jamais de mensonge ou de promesse irréaliste
- Toujours proposer un next step concret
- Utiliser des preuves sociales quand possible
- Maximum 150 mots par réponse`,
      },
    ],
  },
  {
    icon: "📋",
    title: "Business Plan",
    desc: "Modèles de business plan et prévisions financières",
    color: "#00B894",
    templates: [
      {
        title: "Business plan — structure complète",
        desc: "Plan d'affaires complet pour présenter ton projet",
        tags: ["Plan", "Stratégie"],
        content: `1. RÉSUMÉ EXÉCUTIF
• Nom du projet : [Nom]
• Mission : [En une phrase]
• Marché cible : [Cible]
• Proposition de valeur : [Différenciateur]
• Objectif à 12 mois : [Chiffre CA / clients]

2. ANALYSE DE MARCHÉ
• Taille du marché : [TAM / SAM / SOM]
• Tendances clés : [3 tendances]
• Concurrents principaux : [3 concurrents + forces/faiblesses]
• Opportunité identifiée : [Gap dans le marché]

3. OFFRE
• Service/Produit 1 : [Description + tarif]
• Service/Produit 2 : [Description + tarif]
• Service/Produit 3 : [Description + tarif]

4. STRATÉGIE D'ACQUISITION
• Canal 1 : [Stratégie + budget]
• Canal 2 : [Stratégie + budget]
• Canal 3 : [Stratégie + budget]

5. PRÉVISIONS FINANCIÈRES (12 mois)
• Mois 1-3 : [CA prévisionnel]
• Mois 4-6 : [CA prévisionnel]
• Mois 7-12 : [CA prévisionnel]
• Charges fixes : [Liste]
• Point mort : [Mois X]`,
      },
      {
        title: "Prévisionnel financier simplifié",
        desc: "Tableau de prévisions revenus et dépenses sur 12 mois",
        tags: ["Finance", "Prévisions"],
        content: `REVENUS MENSUELS :
┌──────────────────┬────────┬────────┬────────┐
│ Source           │ M1-M3  │ M4-M6  │ M7-M12 │
├──────────────────┼────────┼────────┼────────┤
│ Offre principale │ [X]€   │ [X]€   │ [X]€   │
│ Upsell / addon   │ [X]€   │ [X]€   │ [X]€   │
│ Récurrent        │ [X]€   │ [X]€   │ [X]€   │
├──────────────────┼────────┼────────┼────────┤
│ TOTAL            │ [X]€   │ [X]€   │ [X]€   │
└──────────────────┴────────┴────────┴────────┘

CHARGES MENSUELLES :
• Outils / SaaS : [X]€
• Marketing / Ads : [X]€
• Sous-traitance : [X]€
• Charges fixes : [X]€
• Total charges : [X]€/mois

RENTABILITÉ :
• CA nécessaire pour breakeven : [X]€/mois
• Nombre de clients nécessaires : [X] clients
• Marge nette cible : [X]%`,
      },
      {
        title: "Analyse concurrentielle",
        desc: "Matrice pour comparer ta position face aux concurrents",
        tags: ["Analyse", "Concurrence"],
        content: `MATRICE CONCURRENTIELLE :

Critère         | Toi     | Concurrent 1 | Concurrent 2 | Concurrent 3
─────────────────┼─────────┼──────────────┼──────────────┼─────────────
Prix             | [€]     | [€]          | [€]          | [€]
Qualité          | [/10]   | [/10]        | [/10]        | [/10]
Délai livraison  | [X]j    | [X]j         | [X]j         | [X]j
Support client   | [/10]   | [/10]        | [/10]        | [/10]
Innovation       | [/10]   | [/10]        | [/10]        | [/10]
Notoriété        | [/10]   | [/10]        | [/10]        | [/10]

TES AVANTAGES CONCURRENTIELS :
✅ [Avantage 1 — ce qui te rend unique]
✅ [Avantage 2]
✅ [Avantage 3]

FAIBLESSES À ADRESSER :
⚠️ [Faiblesse 1 — plan d'action]
⚠️ [Faiblesse 2 — plan d'action]`,
      },
      {
        title: "Pricing — structurer ses offres",
        desc: "Framework pour créer une grille tarifaire efficace",
        tags: ["Pricing", "Offres"],
        content: `OFFRE STARTER — [Nom] — [Prix]€
Idéal pour : [Cible débutante]
✅ [Feature 1]
✅ [Feature 2]
✅ [Feature 3]
❌ [Feature exclue]
❌ [Feature exclue]

OFFRE PRO — [Nom] — [Prix]€ ⭐ POPULAIRE
Idéal pour : [Cible intermédiaire]
✅ Tout Starter +
✅ [Feature 4]
✅ [Feature 5]
✅ [Feature 6]
❌ [Feature exclue]

OFFRE PREMIUM — [Nom] — [Prix]€
Idéal pour : [Cible avancée]
✅ Tout Pro +
✅ [Feature 7]
✅ [Feature 8]
✅ [Feature 9 — accès prioritaire / support VIP]

ANCRAGE PSYCHOLOGIQUE :
• L'offre Pro doit être 2-2.5x le Starter
• Le Premium doit être 1.5-2x le Pro
• Le Starter sert d'ancrage bas, le Premium d'ancrage haut
• 70% des ventes se feront sur le Pro`,
      },
      {
        title: "Objectifs OKR trimestriels",
        desc: "Framework OKR pour structurer tes objectifs business",
        tags: ["Objectifs", "OKR"],
        content: `TRIMESTRE : [Q1/Q2/Q3/Q4 Année]

OBJECTIF 1 : [Objectif ambitieux mais atteignable]
├─ KR1 : [Métrique mesurable — ex: atteindre X€ de MRR]
├─ KR2 : [Métrique mesurable — ex: signer X nouveaux clients]
└─ KR3 : [Métrique mesurable — ex: taux de rétention > X%]

OBJECTIF 2 : [Objectif ambitieux]
├─ KR1 : [Métrique]
├─ KR2 : [Métrique]
└─ KR3 : [Métrique]

OBJECTIF 3 : [Objectif ambitieux]
├─ KR1 : [Métrique]
├─ KR2 : [Métrique]
└─ KR3 : [Métrique]

ACTIONS PRIORITAIRES CETTE SEMAINE :
1. [Action concrète liée à OKR 1]
2. [Action concrète liée à OKR 2]
3. [Action concrète liée à OKR 3]`,
      },
    ],
  },
  {
    icon: "🎤",
    title: "Pitch",
    desc: "Scripts de pitch et présentations clients",
    color: "#E84393",
    templates: [
      {
        title: "Elevator pitch — 30 secondes",
        desc: "Présentation percutante de ton activité en 30 secondes",
        tags: ["Pitch", "Oral"],
        content: `"J'aide les [cible précise] à [résultat concret] grâce à [ta méthode/approche unique].

Par exemple, [client/cas récent] avait [problème]. En [durée], on a [action], et aujourd'hui il/elle [résultat chiffré].

Si vous connaissez des [cible] qui [symptôme du problème], je serais ravi d'en discuter."

─── VARIANTES ───

VERSION RÉSEAU :
"Vous savez comment les [cible] galèrent avec [problème] ? Moi je les aide à [résultat] en [durée]. Mon dernier client a [résultat chiffré]."

VERSION INVESTISSEUR :
"[Marché] représente [taille]€. Le problème : [problème]. Notre solution : [solution]. On a déjà [traction] et on vise [objectif]."`,
      },
      {
        title: "Script d'appel découverte",
        desc: "Structure complète pour un premier appel avec un prospect",
        tags: ["Appel", "Découverte"],
        content: `INTRO (2 min) :
"Merci d'avoir pris le temps [Prénom]. Avant de commencer, vous pouvez me dire en 2 min ce qui vous a poussé à réserver ce call ?"

DÉCOUVERTE (10 min) :
1. "C'est quoi votre plus gros challenge en ce moment sur [domaine] ?"
2. "Qu'est-ce que vous avez déjà essayé pour résoudre ça ?"
3. "Si on pouvait régler ça, quel impact ça aurait sur votre business ?"
4. "C'est quoi votre objectif à 6 mois ?"
5. "Vous avez un budget en tête pour ça ?"

TRANSITION :
"OK, je vois bien la situation. Je pense qu'on peut vous aider. Laissez-moi vous montrer comment."

PRÉSENTATION (5 min) :
"On fonctionne en 3 phases :
1. [Phase 1] — [Durée] — [Livrable]
2. [Phase 2] — [Durée] — [Livrable]
3. [Phase 3] — [Durée] — [Livrable]"

PREUVE : "[Client similaire] a obtenu [résultat] en [durée]."

CLOSING :
"Vu votre situation, je recommande [offre]. L'investissement est de [prix]. On peut démarrer dès [date]. Qu'est-ce que vous en pensez ?"`,
      },
      {
        title: "Pitch deck — structure slides",
        desc: "Structure de présentation pour pitcher ton offre",
        tags: ["Slides", "Présentation"],
        content: `SLIDE 1 — COVER
[Logo] + [Tagline en une phrase]

SLIDE 2 — LE PROBLÈME
"[X]% des [cible] souffrent de [problème]"
[Stat ou anecdote qui crée l'urgence]

SLIDE 3 — LA SOLUTION
[Ta proposition de valeur en une phrase]
[3 bénéfices clés avec icônes]

SLIDE 4 — COMMENT ÇA MARCHE
Étape 1 → Étape 2 → Étape 3
[Schéma visuel simple]

SLIDE 5 — RÉSULTATS CLIENTS
[2-3 cas clients avec métriques avant/après]

SLIDE 6 — OFFRES & PRICING
[Grille tarifaire — 2-3 options]

SLIDE 7 — L'ÉQUIPE
[Photo + nom + expertise de chaque membre]

SLIDE 8 — NEXT STEPS
[CTA clair — "Planifie ton appel" + QR code/lien]`,
      },
      {
        title: "Réponse aux objections",
        desc: "Scripts pour gérer les objections courantes en vente",
        tags: ["Vente", "Objections"],
        content: `💰 "C'EST TROP CHER"
→ "Je comprends que c'est un investissement. Quand vous dites trop cher, c'est par rapport à quoi ?"
→ "Si on regarde le coût de ne rien faire — [chiffrer l'impact du problème] — l'investissement se rembourse en [durée]."

⏰ "J'AI PAS LE TEMPS"
→ "C'est justement pour ça qu'on existe — on gère [X] pour que vous n'ayez pas à le faire."
→ "Combien de temps vous perdez actuellement à [tâche que tu automatises] ?"

🤔 "JE DOIS RÉFLÉCHIR"
→ "Bien sûr, c'est normal. Pour vous aider à décider, qu'est-ce qui vous fait hésiter exactement ?"
→ "Qu'est-ce qu'il faudrait pour que ce soit un oui ?"

👤 "J'AI DÉJÀ UN PRESTATAIRE"
→ "Super, c'est que le sujet est important pour vous. Qu'est-ce qui vous manque avec votre solution actuelle ?"

📅 "C'EST PAS LE BON MOMENT"
→ "Je comprends. C'est quand le bon moment pour vous ? Je peux vous recontacter à [date]."
→ "Qu'est-ce qui devrait changer pour que ce soit le bon moment ?"`,
      },
      {
        title: "Présentation d'agence",
        desc: "Script pour présenter ton agence à un prospect",
        tags: ["Présentation", "Agence"],
        content: `"Merci [Prénom], je vais vous présenter rapidement qui on est.

QUI ON EST :
[Nom de l'agence] est une agence spécialisée en [domaine]. On existe depuis [année] et on a accompagné [X] clients.

CE QU'ON FAIT :
On aide les [cible] à [résultat principal]. Concrètement, on intervient sur :
• [Service 1]
• [Service 2]
• [Service 3]

CE QUI NOUS DIFFÉRENCIE :
1. [Différenciateur 1 — méthode, techno, approche]
2. [Différenciateur 2 — garantie, rapidité, expertise]
3. [Différenciateur 3 — accompagnement, résultats]

NOS RÉSULTATS :
• [Client 1] : [Résultat chiffré]
• [Client 2] : [Résultat chiffré]
• [Client 3] : [Résultat chiffré]

COMMENT ON TRAVAILLE :
Phase 1 : [Audit/Diagnostic] — [Durée]
Phase 2 : [Exécution] — [Durée]
Phase 3 : [Optimisation] — [Durée]

On commence par un audit gratuit de [X]. Ça vous intéresse ?"`,
      },
    ],
  },
  {
    icon: "📊",
    title: "Analyse",
    desc: "Templates d'audit et rapports pour tes clients",
    color: "#FDCB6E",
    templates: [
      {
        title: "Audit digital complet",
        desc: "Checklist d'audit pour analyser la présence digitale d'un client",
        tags: ["Audit", "Digital"],
        content: `AUDIT DIGITAL — [Nom du client] — [Date]

1. SITE WEB
□ Vitesse de chargement (objectif < 3s)
□ Responsive mobile
□ SEO on-page (titres, metas, H1-H6)
□ Certificat SSL actif
□ Pages clés : Accueil / À propos / Services / Contact
□ CTA clairs et visibles
□ Formulaires fonctionnels
Score : [/10]

2. RÉSEAUX SOCIAUX
□ Profils optimisés (bio, photo, lien)
□ Fréquence de publication
□ Taux d'engagement
□ Cohérence visuelle
□ Réponse aux commentaires/DMs
Score : [/10]

3. RÉFÉRENCEMENT (SEO)
□ Mots-clés positionnés
□ Backlinks (quantité + qualité)
□ Google My Business optimisé
□ Contenu régulier (blog)
Score : [/10]

4. PUBLICITÉ
□ Campagnes actives
□ ROAS actuel
□ Audiences définies
□ Créatifs testés
Score : [/10]

SCORE GLOBAL : [/40]
PRIORITÉS : 1. [X] — 2. [X] — 3. [X]`,
      },
      {
        title: "Rapport mensuel client",
        desc: "Structure de rapport de performance pour tes clients",
        tags: ["Rapport", "KPIs"],
        content: `RAPPORT MENSUEL — [Mois Année]
Client : [Nom]

📊 RÉSUMÉ EXÉCUTIF
Ce mois : [Résumé en 2 lignes des résultats clés]

📈 KPIs PRINCIPAUX
┌──────────────────┬──────────┬──────────┬─────────┐
│ Métrique         │ Ce mois  │ M-1      │ Évol.   │
├──────────────────┼──────────┼──────────┼─────────┤
│ [KPI 1]          │ [Valeur] │ [Valeur] │ [+X%]   │
│ [KPI 2]          │ [Valeur] │ [Valeur] │ [+X%]   │
│ [KPI 3]          │ [Valeur] │ [Valeur] │ [+X%]   │
│ [KPI 4]          │ [Valeur] │ [Valeur] │ [+X%]   │
└──────────────────┴──────────┴──────────┴─────────┘

✅ ACTIONS RÉALISÉES
• [Action 1 + résultat]
• [Action 2 + résultat]
• [Action 3 + résultat]

📋 PLAN MOIS PROCHAIN
1. [Action prioritaire 1]
2. [Action prioritaire 2]
3. [Action prioritaire 3]

💡 RECOMMANDATIONS
• [Recommandation 1]
• [Recommandation 2]`,
      },
      {
        title: "Analyse SWOT",
        desc: "Matrice SWOT pour évaluer un projet ou une entreprise",
        tags: ["SWOT", "Stratégie"],
        content: `ANALYSE SWOT — [Entreprise/Projet]

┌─────────────────────────┬─────────────────────────┐
│    ✅ FORCES            │    ⚠️ FAIBLESSES        │
│                         │                         │
│ • [Force 1]             │ • [Faiblesse 1]         │
│ • [Force 2]             │ • [Faiblesse 2]         │
│ • [Force 3]             │ • [Faiblesse 3]         │
│ • [Force 4]             │ • [Faiblesse 4]         │
│                         │                         │
├─────────────────────────┼─────────────────────────┤
│    🚀 OPPORTUNITÉS      │    🔴 MENACES           │
│                         │                         │
│ • [Opportunité 1]       │ • [Menace 1]            │
│ • [Opportunité 2]       │ • [Menace 2]            │
│ • [Opportunité 3]       │ • [Menace 3]            │
│ • [Opportunité 4]       │ • [Menace 4]            │
│                         │                         │
└─────────────────────────┴─────────────────────────┘

PLAN D'ACTION :
1. Exploiter [Force] + [Opportunité] → [Action]
2. Corriger [Faiblesse] via [Action]
3. Se protéger de [Menace] par [Action]`,
      },
      {
        title: "Dashboard KPIs agence",
        desc: "Les métriques essentielles à suivre pour ton agence",
        tags: ["KPIs", "Dashboard"],
        content: `DASHBOARD AGENCE — [Mois Année]

💰 FINANCIER
• MRR (revenu récurrent) : [X]€
• CA total du mois : [X]€
• Marge nette : [X]%
• Panier moyen : [X]€
• LTV client : [X]€

📈 ACQUISITION
• Leads générés : [X]
• Taux de conversion : [X]%
• Coût par lead : [X]€
• Source n°1 : [Canal]
• Nouveaux clients : [X]

🤝 RÉTENTION
• Taux de rétention : [X]%
• Churn rate : [X]%
• NPS (satisfaction) : [X]/10
• Clients actifs : [X]

⚡ OPÉRATIONNEL
• Projets en cours : [X]
• Délai moyen livraison : [X] jours
• Taux d'utilisation équipe : [X]%
• Tickets support ouverts : [X]

🎯 OBJECTIFS VS RÉEL
• CA : [Objectif]€ vs [Réel]€ ([X]%)
• Clients : [Objectif] vs [Réel] ([X]%)
• Marge : [Objectif]% vs [Réel]% ([X]%)`,
      },
      {
        title: "Proposition d'audit gratuit",
        desc: "Email pour proposer un audit gratuit à un prospect",
        tags: ["Email", "Audit"],
        content: `Objet : Audit gratuit de votre [domaine] — [Entreprise]

Bonjour [Prénom],

Je me suis permis d'analyser rapidement votre [site/profil/stratégie] et j'ai identifié [X] points d'amélioration qui pourraient [bénéfice chiffré].

Voici un aperçu :
🔴 [Problème critique 1]
🟡 [Point d'amélioration 2]
🟡 [Point d'amélioration 3]

J'ai préparé un audit complet et gratuit (valeur [X]€) avec des recommandations concrètes.

Intéressé(e) ? On peut en discuter en 20 min :
👉 [Lien calendrier]

Cordialement,
[Ton prénom]
[Ton agence]`,
      },
    ],
  },
  {
    icon: "🤝",
    title: "Relation Client",
    desc: "Emails et scripts pour fidéliser et gérer tes clients",
    color: "#00CEC9",
    templates: [
      {
        title: "Email de remerciement post-achat",
        desc: "Email envoyé juste après la signature d'un client",
        tags: ["Email", "Fidélisation"],
        content: `Objet : Bienvenue dans l'aventure [Prénom] ! 🎉

Bonjour [Prénom],

C'est officiel — on est ravis de vous compter parmi nos clients !

Voici ce qui va se passer maintenant :
📅 Sous 24h : Vous recevrez un email avec le lien de notre premier call
📋 Sous 48h : On vous enverra le questionnaire de kick-off
🚀 Sous 1 semaine : On démarre la phase 1

En attendant, voici [ressource utile / accès plateforme].

Si vous avez la moindre question, répondez simplement à cet email.

On a hâte de commencer,
[Ton prénom] & l'équipe [Agence]`,
      },
      {
        title: "Demande de témoignage",
        desc: "Email pour obtenir un avis client exploitable",
        tags: ["Email", "Témoignage"],
        content: `Objet : [Prénom], un petit service ? (2 min)

Bonjour [Prénom],

On est super contents des résultats qu'on a obtenus ensemble ([résultat chiffré]).

Est-ce que vous pourriez prendre 2 minutes pour partager votre expérience ? Ça nous aide énormément.

3 questions rapides :
1. C'était quoi votre situation avant de travailler avec nous ?
2. Qu'est-ce qui a changé depuis ?
3. Vous nous recommanderiez ? Pourquoi ?

Vous pouvez répondre par email ou je vous envoie un lien Google Reviews si vous préférez.

Merci beaucoup !
[Ton prénom]`,
      },
      {
        title: "Email d'upsell",
        desc: "Proposer un service complémentaire à un client existant",
        tags: ["Email", "Upsell"],
        content: `Objet : Une idée pour aller plus loin, [Prénom]

Bonjour [Prénom],

Les résultats de [projet en cours] sont excellents : [rappel des métriques].

En analysant vos données, j'ai remarqué une opportunité qu'on n'exploite pas encore : [opportunité identifiée].

Concrètement, en ajoutant [service complémentaire], vous pourriez :
• [Bénéfice 1 chiffré]
• [Bénéfice 2 chiffré]
• [Bénéfice 3 chiffré]

On a déjà fait ça pour [client similaire] avec [résultat].

L'investissement est de [prix]€/mois et on peut démarrer dès [date].

On en discute cette semaine ?

[Ton prénom]`,
      },
      {
        title: "Gestion de crise / client mécontent",
        desc: "Script pour gérer un client insatisfait avec professionnalisme",
        tags: ["Support", "Crise"],
        content: `ÉTAPE 1 — ACCUSÉ DE RÉCEPTION (sous 2h)
"[Prénom], merci de nous avoir remonté ce point. Je comprends votre frustration et je prends ça très au sérieux. Voici ce que je fais maintenant :"

ÉTAPE 2 — INVESTIGATION (sous 24h)
• Identifier la cause exacte du problème
• Rassembler les faits (dates, livrables, échanges)
• Préparer un plan de correction

ÉTAPE 3 — RÉPONSE
"[Prénom], après analyse, voici ce qui s'est passé :
[Explication honnête et transparente]

Voici notre plan de correction :
1. [Action immédiate — sous 48h]
2. [Action corrective — sous X jours]
3. [Mesure préventive — pour que ça ne se reproduise pas]

En compensation, on vous propose [geste commercial].

Est-ce que ça vous convient ?"

RÈGLES D'OR :
• Ne jamais être défensif
• Reconnaître le problème sans excuses excessives
• Proposer des solutions concrètes avec des délais
• Faire un suivi 1 semaine après la résolution`,
      },
    ],
  },
  {
    icon: "📐",
    title: "Offres & Pricing",
    desc: "Modèles pour structurer et présenter tes offres",
    color: "#A29BFE",
    templates: [
      {
        title: "Page de vente — structure",
        desc: "Structure complète d'une page de vente qui convertit",
        tags: ["Landing Page", "Copywriting"],
        content: `SECTION 1 — HERO
Titre : [Résultat] sans [frustration] en [durée]
Sous-titre : [Détail de la promesse]
CTA : [Bouton principal]
Preuve sociale : "[X] clients accompagnés"

SECTION 2 — LE PROBLÈME
"Tu en as marre de [frustration 1], [frustration 2], [frustration 3] ?"
[Liste des douleurs de ta cible]

SECTION 3 — LA SOLUTION
"Présentation de [Nom de l'offre]"
[3 bénéfices clés avec icônes]

SECTION 4 — COMMENT ÇA MARCHE
Étape 1 → Étape 2 → Étape 3
[Rendre le processus simple et clair]

SECTION 5 — PREUVES
[2-3 témoignages clients avec photos et résultats]

SECTION 6 — L'OFFRE
[Détail de ce qui est inclus — checklist]
[Prix barré → Prix actuel]
[Bonus]
[Garantie]

SECTION 7 — FAQ
[5-7 questions fréquentes]

SECTION 8 — DERNIER CTA
[Rappel de la promesse + Bouton + Urgence]`,
      },
      {
        title: "Devis professionnel",
        desc: "Template de devis clair et professionnel",
        tags: ["Devis", "Commercial"],
        content: `═══════════════════════════════════
    DEVIS N° [XXXX]
    [Nom de ton agence]
    Date : [Date]
    Valable jusqu'au : [Date + 30j]
═══════════════════════════════════

CLIENT :
[Nom / Entreprise]
[Adresse]
[Email]

DESCRIPTION DES PRESTATIONS :

1. [Prestation 1]
   Description : [Détail]
   Livrable : [Ce qui est livré]
   Tarif : [X]€ HT

2. [Prestation 2]
   Description : [Détail]
   Livrable : [Ce qui est livré]
   Tarif : [X]€ HT

3. [Prestation 3]
   Description : [Détail]
   Livrable : [Ce qui est livré]
   Tarif : [X]€ HT

───────────────────────────────
Total HT :     [X]€
TVA (20%) :    [X]€
Total TTC :    [X]€
───────────────────────────────

CONDITIONS :
• Paiement : [X]% à la commande, [X]% à la livraison
• Délai de réalisation : [X] semaines
• Révisions incluses : [X]

Signature client : ________________  Date : ________`,
      },
      {
        title: "Email de proposition tarifaire",
        desc: "Email pour envoyer un tarif après un appel découverte",
        tags: ["Email", "Proposition"],
        content: `Objet : Votre proposition personnalisée — [Projet]

Bonjour [Prénom],

Suite à notre échange, voici ma recommandation pour [objectif discuté].

CE QUE JE PROPOSE :
[Nom de l'offre] — adapté à votre situation

✅ [Livrable 1]
✅ [Livrable 2]
✅ [Livrable 3]
✅ [Livrable 4]
🎁 Bonus : [Bonus]

INVESTISSEMENT : [Prix]€
Paiement en [X] fois possible.

DÉLAI : Démarrage sous [X] jours, livraison en [X] semaines.

GARANTIE : [Garantie — satisfait ou remboursé / résultat / etc.]

PROCHAINE ÉTAPE :
Répondez "OK" à cet email et je vous envoie le contrat.

Cette proposition est valable jusqu'au [date].

[Ton prénom]`,
      },
    ],
  },
];

/* ─── Icons ─────────────────────────────────────────── */
function IconCopy({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (content: string, idx: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const cat = selectedCategory !== null ? CATEGORIES[selectedCategory] : null;
  const tmpl = cat && selectedTemplate !== null ? cat.templates[selectedTemplate] : null;

  // ─── Template detail view
  if (cat && tmpl && selectedTemplate !== null) {
    return (
      <div className="max-w-4xl">
        <button
          onClick={() => setSelectedTemplate(null)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <IconArrowLeft className="w-4 h-4" />
          Retour aux templates {cat.title}
        </button>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="h-1" style={{ background: cat.color }} />
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-1">
              <h1 className="text-lg font-bold text-gray-900">{tmpl.title}</h1>
              <button
                onClick={() => handleCopy(tmpl.content, selectedTemplate)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all flex-shrink-0"
              >
                {copiedIdx === selectedTemplate ? (
                  <><IconCheck className="text-emerald-500" /><span className="text-emerald-600">Copié !</span></>
                ) : (
                  <><IconCopy />Copier</>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">{tmpl.desc}</p>
            <div className="flex gap-1.5 mb-6">
              {tmpl.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{tag}</span>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{tmpl.content}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Category detail view — list of templates
  if (cat && selectedCategory !== null) {
    return (
      <div>
        <button
          onClick={() => { setSelectedCategory(null); setSelectedTemplate(null); }}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <IconArrowLeft className="w-4 h-4" />
          Toutes les catégories
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${cat.color}15` }}
          >
            {cat.icon}
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{cat.title}</h1>
            <p className="text-xs text-gray-500">{cat.templates.length} templates disponibles</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cat.templates.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelectedTemplate(i)}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#FF1744] transition-colors truncate">{t.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{t.desc}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
                <IconChevron className="text-gray-300 group-hover:text-[#FF1744] mt-0.5 flex-shrink-0 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── Category grid view
  const totalTemplates = CATEGORIES.reduce((sum, c) => sum + c.templates.length, 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Templates IA</h1>
        <p className="text-sm text-gray-500">
          {totalTemplates} templates prêts à l&apos;emploi pour ton agence IA.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setSelectedCategory(i)}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group text-left"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ background: `${c.color}15` }}
            >
              {c.icon}
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-[#FF1744] transition-colors">{c.title}</h3>
            <p className="text-xs text-gray-500 mb-3">{c.desc}</p>
            <div className="flex items-center justify-between">
              <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-full",
              )} style={{ background: `${c.color}15`, color: c.color }}>
                {c.templates.length} templates
              </span>
              <IconChevron className="text-gray-300 group-hover:text-[#FF1744] transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
