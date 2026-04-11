import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TIER_PRIORITY } from "@/lib/constants";

/* ─── Premium template-based content generator ──────────────────────── */

interface Template {
  title: string;
  build: (ctx: string, tone: string, length: string) => string;
}

function toneInstruction(tone: string): string {
  switch (tone) {
    case "decontracte": return "Ton decontracte, accessible, presque amical. Tutoiement. Phrases courtes.";
    case "persuasif": return "Ton persuasif et oriente action. Utilise des verbes d'action, de l'urgence et des benefices concrets.";
    case "expert": return "Ton expert et technique. Vocabulaire precis, references chiffrees, posture d'autorite.";
    default: return "Ton professionnel et clair. Vouvoiement. Structure logique.";
  }
}

function lengthInstruction(length: string): string {
  switch (length) {
    case "court": return "Format court et percutant : 3-5 phrases maximum. Va droit au but.";
    case "long": return "Format detaille et complet : couvre tous les angles, exemples concrets, structure en sections.";
    default: return "Format moyen : 1-2 paragraphes structures. Equilibre entre concision et detail.";
  }
}

const TEMPLATES: Record<string, Template> = {
  prospection: {
    title: "Email de prospection premium",
    build: (ctx, tone, length) => {
      const t = toneInstruction(tone);
      const l = lengthInstruction(length);
      return `=================================================================
  EMAIL DE PROSPECTION — SEQUENCE COMPLETE
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}
FORMAT : ${l}

─────────────────────────────────────────────────────────────────
  EMAIL 1 — PREMIER CONTACT (Le hook)
─────────────────────────────────────────────────────────────────

OBJET (choisir parmi 3 options) :
  A) [Prenom], une question rapide sur [sujet du prospect]
  B) [Resultat chiffre] pour [entreprise similaire] — ca vous parle ?
  C) Idee pour [probleme specifique du prospect]

CORPS :

Bonjour [Prenom],

[ACCROCHE — 1 phrase qui montre que tu as fait tes recherches]
Exemple : "J'ai vu que [entreprise] venait de [actualite/observation]."

[TRANSITION — Lier l'observation a ton expertise]
"Chez [ton agence], on accompagne les [secteur] a [resultat principal] grace a [methode]."

[PREUVE SOCIALE — 1 resultat concret]
"Par exemple, [client similaire] a obtenu [resultat chiffre : +X%, -Xh/semaine, X nouveaux clients] en [duree]."

[CTA — Question ouverte, pas de pression]
"Est-ce que ca vous parlerait d'en discuter 15 min cette semaine ? Je m'adapte a votre agenda."

[Signature pro]

─────────────────────────────────────────────────────────────────
  EMAIL 2 — RELANCE J+3 (La valeur)
─────────────────────────────────────────────────────────────────

OBJET : Re: [objet precedent]

Bonjour [Prenom],

Je me permets de revenir vers vous — votre agenda doit etre charge.

Pour vous donner une idee concrete, voici ce qu'on pourrait explorer ensemble :

  1. [Diagnostic rapide] — Identifier les 2-3 process ou l'IA aurait le plus d'impact chez vous
  2. [Quick win] — Une automatisation simple deployable en 48h
  3. [Vision] — Comment scaler ca sur 6 mois

Ca prend 15 min, sans engagement. Quel creneau vous arrange ?

[Signature]

─────────────────────────────────────────────────────────────────
  EMAIL 3 — DERNIERE RELANCE J+7 (Le break-up)
─────────────────────────────────────────────────────────────────

OBJET : Derniere question, [Prenom]

Bonjour [Prenom],

Je ne veux pas etre insistant — si le timing n'est pas bon, aucun souci.

Juste une derniere question : est-ce que [probleme que tu resous] est un sujet prioritaire pour vous ce trimestre ?

  → Si oui : on bloque 15 min quand vous voulez
  → Si non : je vous souhaite une excellente continuation

Dans tous les cas, n'hesitez pas a me contacter si ca change.

[Signature]

=================================================================
  CHECKLIST AVANT ENVOI
=================================================================

[ ] L'accroche mentionne un element REEL du prospect (site, LinkedIn, actu)
[ ] Le mail fait moins de 120 mots
[ ] Il y a exactement 1 CTA clair (pas 3)
[ ] La preuve sociale est specifique (chiffres, nom client si autorise)
[ ] Envoye entre 8h-9h30 ou 17h-18h (meilleur taux d'ouverture)
[ ] Objet < 50 caracteres
[ ] Pas de pieces jointes au premier contact

=================================================================
  METRIQUES A SUIVRE
=================================================================

Taux d'ouverture cible : > 40% (sinon retravailler les objets)
Taux de reponse cible : > 8-15%
Taux de RDV cible : > 3-5% de la sequence complete`;
    },
  },

  vente: {
    title: "Script de vente complet",
    build: (ctx, tone, length) => {
      const t = toneInstruction(tone);
      const l = lengthInstruction(length);
      return `=================================================================
  SCRIPT DE VENTE — METHODOLOGIE COMPLETE
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}
FORMAT : ${l}

─────────────────────────────────────────────────────────────────
  PHASE 0 — PREPARATION (Avant l'appel)
─────────────────────────────────────────────────────────────────

[ ] Profil LinkedIn du prospect consulte
[ ] Site web de l'entreprise visite
[ ] 2-3 problemes potentiels identifies
[ ] Etude de cas similaire prete
[ ] Demo/exemple personnalise prepare
[ ] Objectif de l'appel defini (RDV, devis, signature)

─────────────────────────────────────────────────────────────────
  PHASE 1 — OUVERTURE (2 min)
─────────────────────────────────────────────────────────────────

"Bonjour [Prenom], merci d'avoir pris le temps. Avant de commencer, j'aimerais comprendre votre situation pour vous proposer quelque chose de vraiment adapte. Ca vous va si je vous pose quelques questions ?"

OBJECTIF : Creer un cadre de confiance. Le prospect doit parler 70% du temps.

─────────────────────────────────────────────────────────────────
  PHASE 2 — DECOUVERTE (8-10 min)
─────────────────────────────────────────────────────────────────

QUESTIONS SITUATION (comprendre le contexte) :
  1. "Pouvez-vous me decrire comment vous gerez [process] aujourd'hui ?"
  2. "Combien de temps/d'argent ca vous prend chaque mois ?"
  3. "Combien de personnes sont impliquees ?"

QUESTIONS DOULEUR (identifier le probleme) :
  4. "Quelle est votre plus grande frustration avec la situation actuelle ?"
  5. "Qu'est-ce que ca vous coute de ne rien changer ? (temps, argent, opportunites)"
  6. "Vous avez deja essaye des solutions ? Qu'est-ce qui n'a pas marche ?"

QUESTIONS IMPACT (amplifier le besoin) :
  7. "Si ce probleme est resolu, ca changerait quoi concretement pour vous ?"
  8. "Dans un monde ideal, a quoi ressemble [process] dans 6 mois ?"
  9. "C'est quoi le cout d'opportunite de repousser cette decision ?"

TECHNIQUE : Reformuler apres chaque reponse.
"Si je comprends bien, votre probleme c'est [X] et ca vous coute [Y]. C'est bien ca ?"

─────────────────────────────────────────────────────────────────
  PHASE 3 — PRESENTATION DE LA SOLUTION (5 min)
─────────────────────────────────────────────────────────────────

TRANSITION :
"D'apres ce que vous me dites, votre enjeu principal c'est [reformulation].
On a exactement developpe une approche pour ca. Laissez-moi vous montrer."

STRUCTURE EN 3 ETAPES :

  ETAPE 1 — AUDIT & DIAGNOSTIC ([Duree])
  "On commence par analyser [X] pour identifier les quick wins."
  → Livrable : [Rapport/Recommandations]

  ETAPE 2 — IMPLEMENTATION ([Duree])
  "On deploie [solution] avec [methode]."
  → Livrable : [Produit/Outil/Systeme]

  ETAPE 3 — OPTIMISATION & SUIVI ([Duree])
  "On mesure les resultats et on optimise."
  → Livrable : [Dashboard/KPIs/Support]

─────────────────────────────────────────────────────────────────
  PHASE 4 — PREUVE SOCIALE (2 min)
─────────────────────────────────────────────────────────────────

"Pour vous donner un exemple concret :"

CAS CLIENT :
  → Qui : [Entreprise/secteur similaire]
  → Probleme : [Identique au prospect]
  → Solution : [Ce que vous avez fait]
  → Resultat : [Chiffres : +X% revenue, -Xh/semaine, X€ economises]
  → Delai : [En X semaines/mois]

─────────────────────────────────────────────────────────────────
  PHASE 5 — CLOSING (3 min)
─────────────────────────────────────────────────────────────────

PRESENTATION DU PRIX :
"Vu votre situation, je vous recommande [offre]. L'investissement est de [prix].
Pour vous donner un repere, [client similaire] a recupere cet investissement en [duree]."

QUESTION DE CLOSING :
"Est-ce que ca correspond a ce que vous cherchez ? On peut demarrer des [date]."

─────────────────────────────────────────────────────────────────
  REPONSES AUX OBJECTIONS
─────────────────────────────────────────────────────────────────

"C'EST TROP CHER"
→ "Je comprends que c'est un investissement. Si on compare au cout actuel de [probleme] — [chiffre] — le ROI est positif en [duree]. Et on peut aussi etaler le paiement."

"JE DOIS REFLECHIR"
→ "Bien sur. Pour vous aider a prendre votre decision, qu'est-ce qui vous fait hesiter ? Le budget, le timing, ou autre chose ?"

"J'AI DEJA UN PRESTATAIRE"
→ "Parfait, ca veut dire que le sujet est important pour vous. Qu'est-ce qui vous manque avec votre solution actuelle ?"

"ON N'A PAS LE TEMPS"
→ "Justement, c'est exactement le probleme qu'on resout. [Client] pensait pareil — en [duree] il a gagne [X heures/semaine]."

"JE DOIS EN PARLER A MON ASSOCIE"
→ "Je comprends. Voulez-vous qu'on organise un call a 3 pour repondre a ses questions directement ?"`;
    },
  },

  proposition: {
    title: "Proposition commerciale structuree",
    build: (ctx, tone) => {
      const t = toneInstruction(tone);
      return `=================================================================
  PROPOSITION COMMERCIALE PROFESSIONNELLE
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}

─────────────────────────────────────────────────────────────────

                    PROPOSITION COMMERCIALE
                  [Nom de ton agence] x [Client]
                        [Date du jour]

─────────────────────────────────────────────────────────────────

1. RESUME EXECUTIF
─────────────────────────────────────────────────────────────────

Suite a notre echange du [date], nous avons identifie les enjeux suivants :

  PROBLEME PRINCIPAL :
  → [Reformulation du probleme en 1-2 phrases]

  IMPACT ACTUEL :
  → [Cout en temps] heures/mois perdues
  → [Cout financier] euros de manque a gagner estime
  → [Impact qualitatif] sur la satisfaction client/equipe

  OBJECTIF :
  → [Resultat vise, chiffre si possible]

─────────────────────────────────────────────────────────────────

2. SOLUTION PROPOSEE
─────────────────────────────────────────────────────────────────

Nous proposons un accompagnement en [X] phases :

  PHASE 1 — AUDIT & STRATEGIE (Semaine 1)
  ├── Analyse de l'existant
  ├── Identification des quick wins
  ├── Recommandations prioritaires
  └── Livrable : Rapport d'audit + roadmap

  PHASE 2 — CONCEPTION & DEVELOPPEMENT (Semaines 2-[X])
  ├── [Livrable 1 : ex. Chatbot IA personnalise]
  ├── [Livrable 2 : ex. Automatisation du workflow]
  ├── [Livrable 3 : ex. Dashboard de suivi]
  └── Livrable : Solution deployee + documentation

  PHASE 3 — LANCEMENT & OPTIMISATION (Semaine [X+1])
  ├── Mise en production
  ├── Formation de l'equipe (2h)
  ├── Suivi des KPIs pendant 2 semaines
  └── Livrable : Guide utilisateur + rapport de performance

─────────────────────────────────────────────────────────────────

3. INVESTISSEMENT
─────────────────────────────────────────────────────────────────

  FORMULE RECOMMANDEE : [Nom du pack]

  ┌──────────────────────────────┬────────────────┐
  │ Phase 1 — Audit & Strategie  │     [X] EUR     │
  │ Phase 2 — Developpement      │     [X] EUR     │
  │ Phase 3 — Lancement          │     [X] EUR     │
  ├──────────────────────────────┼────────────────┤
  │ TOTAL HT                     │     [X] EUR     │
  │ TVA (20%)                    │     [X] EUR     │
  │ TOTAL TTC                    │     [X] EUR     │
  └──────────────────────────────┴────────────────┘

  CONDITIONS DE PAIEMENT :
  → 40% a la signature (demarrage garanti sous 5 jours)
  → 30% a la livraison de la Phase 2
  → 30% a la fin de la Phase 3

  OPTION : Paiement en [3/4] mensualites sans frais

─────────────────────────────────────────────────────────────────

4. POURQUOI NOUS ?
─────────────────────────────────────────────────────────────────

  ✓ [X] projets IA livres avec succes
  ✓ Expertise [technologies/secteur]
  ✓ Resultats mesurables : [exemple chiffre client]
  ✓ Support reactif sous 24h pendant toute la mission
  ✓ Satisfait ou on ajuste — pas de mauvaise surprise

─────────────────────────────────────────────────────────────────

5. REFERENCES CLIENTS
─────────────────────────────────────────────────────────────────

  CLIENT 1 : [Entreprise] — [Secteur]
  → Projet : [Description courte]
  → Resultat : [Chiffre]

  CLIENT 2 : [Entreprise] — [Secteur]
  → Projet : [Description courte]
  → Resultat : [Chiffre]

─────────────────────────────────────────────────────────────────

6. PROCHAINES ETAPES
─────────────────────────────────────────────────────────────────

  1. Validation de cette proposition
  2. Signature du contrat + premier paiement
  3. Kick-off call (1h) — cadrage et planning
  4. Demarrage Phase 1

  Proposition valable jusqu'au [date + 15 jours].

─────────────────────────────────────────────────────────────────
  Contact : [Prenom] — [Email] — [Tel]
─────────────────────────────────────────────────────────────────`;
    },
  },

  social: {
    title: "Pack reseaux sociaux",
    build: (ctx, tone, length) => {
      const t = toneInstruction(tone);
      const l = lengthInstruction(length);
      return `=================================================================
  PACK RESEAUX SOCIAUX — CONTENU MULTI-PLATEFORME
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}
FORMAT : ${l}

─────────────────────────────────────────────────────────────────
  POST LINKEDIN — FORMAT STORYTELLING
─────────────────────────────────────────────────────────────────

HOOK (premiere ligne visible — la plus importante) :
"[Chiffre choc ou question provocante]"

Exemples de hooks qui marchent :
  → "J'ai perdu [X] mois a faire [erreur]. Voici ce que j'aurais du faire."
  → "[X]% des [cible] ignorent encore [fait]. Ca leur coute [consequence]."
  → "Un client m'a dit : '[citation]. Voici ce qu'on a fait."

CORPS DU POST :

Il y a [duree], [personnage/je] faisait [situation initiale].

Le probleme ? [Description du probleme en 2 lignes max]

[Evenement declencheur — ce qui a tout change]

Voici les 3 actions qui ont fait la difference :

1/ [Action concrete]
   → Resultat : [chiffre ou impact]

2/ [Action concrete]
   → Resultat : [chiffre ou impact]

3/ [Action concrete]
   → Resultat : [chiffre ou impact]

Aujourd'hui ? [Situation transformee avec chiffres]

La lecon : [Insight cle en 1 phrase punchy]

---
♻ Reposte si ca peut aider quelqu'un
💬 Et toi, c'est quoi ton plus gros blocage sur [sujet] ?

#[3-5 hashtags pertinents]

─────────────────────────────────────────────────────────────────
  CARROUSEL INSTAGRAM — 8 SLIDES
─────────────────────────────────────────────────────────────────

SLIDE 1 (COVER) :
  Titre : "[Chiffre] [action] pour [resultat]"
  Sous-titre : "Swipe pour tout savoir →"
  Couleur de fond : [Couleur vive de ta charte]

SLIDE 2 (PROBLEME) :
  "Le probleme :"
  "[Description en 2-3 lignes max]"
  Visuel : icone ou illustration simple

SLIDE 3 (ERREUR 1) :
  "Erreur #1 : [Erreur courante]"
  "Au lieu de ca → [Bonne pratique]"

SLIDE 4 (ERREUR 2) :
  "Erreur #2 : [Erreur courante]"
  "Au lieu de ca → [Bonne pratique]"

SLIDE 5 (ERREUR 3) :
  "Erreur #3 : [Erreur courante]"
  "Au lieu de ca → [Bonne pratique]"

SLIDE 6 (LA METHODE) :
  "La methode en 3 etapes :"
  "1. [Etape] 2. [Etape] 3. [Etape]"

SLIDE 7 (RESULTAT) :
  "Resultat : [Transformation chiffree]"
  Temoignage client si possible

SLIDE 8 (CTA) :
  "Enregistre ce post pour y revenir"
  "Follow @[ton_compte] pour plus"
  Fleche vers le bouton follow

CAPTION :
[Resume en 3-4 lignes + CTA + 20-30 hashtags]

─────────────────────────────────────────────────────────────────
  THREAD X (TWITTER) — 7 TWEETS
─────────────────────────────────────────────────────────────────

1/ [Hook — affirmation forte ou chiffre]
   "La plupart des [cible] [erreur courante]. Thread :"

2/ "Le contexte :"
   "[Pourquoi c'est un probleme — 2-3 phrases]"

3/ "Etape 1 : [Titre]"
   "[Detail actionnable — 2 phrases]"
   "[Outil/methode recommande]"

4/ "Etape 2 : [Titre]"
   "[Detail actionnable — 2 phrases]"
   "[Outil/methode recommande]"

5/ "Etape 3 : [Titre]"
   "[Detail actionnable — 2 phrases]"
   "[Outil/methode recommande]"

6/ "Les resultats ?"
   "→ [Resultat chiffre 1]"
   "→ [Resultat chiffre 2]"
   "→ [Resultat chiffre 3]"

7/ "TL;DR :"
   "→ [Resume en 3 bullets]"
   "RT + Follow pour plus de threads comme celui-ci."

─────────────────────────────────────────────────────────────────
  SCRIPT VIDEO TIKTOK/REELS — 60 SEC
─────────────────────────────────────────────────────────────────

[0-3s] HOOK VISUEL :
  Texte a l'ecran : "[Affirmation choc]"
  Audio : "Arrete de [erreur courante]. Voici pourquoi."

[3-15s] PROBLEME :
  "La plupart des [cible] font [erreur]. Resultat ? [consequence]."

[15-40s] SOLUTION EN 3 POINTS :
  "Premiere chose : [conseil 1]. [Detail rapide]."
  "Deuxieme chose : [conseil 2]. [Detail rapide]."
  "Troisieme chose : [conseil 3]. Ca change tout."

[40-55s] PREUVE :
  "Grace a ca, [resultat concret chiffre]."

[55-60s] CTA :
  "Follow pour plus de conseils [sujet]. Like si t'as appris un truc."

=================================================================
  PLANNING DE PUBLICATION SUGGERE
=================================================================

  Lundi    : Post LinkedIn (storytelling)
  Mardi    : Story Instagram (behind the scenes)
  Mercredi : Carrousel Instagram
  Jeudi    : Thread X
  Vendredi : Reel/TikTok
  Samedi   : Repost + engagement communaute`;
    },
  },

  marketing: {
    title: "Strategie marketing complete",
    build: (ctx, tone, length) => {
      const t = toneInstruction(tone);
      const l = lengthInstruction(length);
      return `=================================================================
  STRATEGIE MARKETING — PACK COMPLET
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}
FORMAT : ${l}

─────────────────────────────────────────────────────────────────
  LANDING PAGE — STRUCTURE DE CONVERSION
─────────────────────────────────────────────────────────────────

SECTION 1 — HERO (Above the fold)
  Titre H1 : "[Resultat] pour [cible] en [duree] — sans [objection]"
  Sous-titre : "[Methode ou approche unique en 1 phrase]"
  CTA : "Reserver un appel gratuit" / "Voir la demo"
  Preuve sociale : "[X] clients accompagnes | [Note]/5 satisfaction"

SECTION 2 — PROBLEME (Agiter la douleur)
  "Vous en avez marre de..."
  → [Frustration 1 du prospect]
  → [Frustration 2 du prospect]
  → [Frustration 3 du prospect]
  "Vous n'etes pas seul. [Chiffre]% des [cible] ont le meme probleme."

SECTION 3 — SOLUTION (Ta methode)
  "Notre approche en 3 etapes :"
  Etape 1 : [Diagnostic] — "[Description courte]"
  Etape 2 : [Implementation] — "[Description courte]"
  Etape 3 : [Resultats] — "[Description courte]"

SECTION 4 — PREUVES SOCIALES
  Temoignage 1 : "[Citation]" — [Prenom], [Poste], [Entreprise]
  Temoignage 2 : "[Citation]" — [Prenom], [Poste], [Entreprise]
  Logos clients : [Logo 1] [Logo 2] [Logo 3]

SECTION 5 — OFFRE & PRICING
  Pack 1 : [Nom] — [Prix] — [3 features cles]
  Pack 2 : [Nom] — [Prix] — [5 features cles] ← RECOMMANDE
  Pack 3 : [Nom] — [Prix] — [Tout inclus + bonus]

SECTION 6 — FAQ (5 questions)
  1. "Combien de temps ca prend ?" → [Reponse]
  2. "C'est adapte a mon secteur ?" → [Reponse]
  3. "Et si ca ne marche pas ?" → [Garantie]
  4. "J'ai deja essaye [concurrent]" → [Differenciation]
  5. "C'est quoi la prochaine etape ?" → [Process simple]

SECTION 7 — CTA FINAL
  "Pret a [resultat] ? On en parle."
  Bouton : "[Action] — C'est gratuit et sans engagement"

─────────────────────────────────────────────────────────────────
  SEQUENCE EMAIL — NURTURING (5 emails)
─────────────────────────────────────────────────────────────────

EMAIL 1 (J+0) — Bienvenue + Quick Win
  Objet : "Bienvenue — voici ta premiere action"
  Contenu : Presentation + 1 conseil actionnable immediat

EMAIL 2 (J+2) — Etude de cas
  Objet : "Comment [client] a obtenu [resultat]"
  Contenu : Storytelling client + resultats chiffres

EMAIL 3 (J+5) — Erreurs courantes
  Objet : "[X] erreurs qui te coutent [consequence]"
  Contenu : Liste d'erreurs + comment les eviter

EMAIL 4 (J+8) — Ton expertise
  Objet : "Ce que [X] ans d'experience m'ont appris"
  Contenu : Insights uniques + positionnement expert

EMAIL 5 (J+12) — Offre
  Objet : "[Prenom], on en parle ?"
  Contenu : Recapitulatif de la valeur + CTA vers appel

─────────────────────────────────────────────────────────────────
  PUBLICITE — STRUCTURE D'ANNONCE
─────────────────────────────────────────────────────────────────

FACEBOOK/INSTAGRAM ADS :
  Hook : "[Question ou affirmation choc]"
  Body : "[Probleme] → [Solution] → [Resultat chiffre]"
  CTA : "En savoir plus" / "Reserver un appel"
  Audience : [Criteres de ciblage recommandes]

GOOGLE ADS :
  Titre 1 : [Keyword principal] + [Benefice]
  Titre 2 : [Chiffre resultat] + [CTA]
  Description : [Proposition de valeur + urgence]`;
    },
  },

  email: {
    title: "Emails client pro",
    build: (ctx, tone) => {
      const t = toneInstruction(tone);
      return `=================================================================
  EMAILS CLIENT — PACK COMPLET CYCLE DE VIE
=================================================================

CONTEXTE : ${ctx}
STYLE : ${t}

─────────────────────────────────────────────────────────────────
  EMAIL — ONBOARDING (Apres signature)
─────────────────────────────────────────────────────────────────

Objet : Bienvenue [Entreprise] — on demarre !

Bonjour [Prenom],

Ravi de travailler ensemble ! Voici comment vont se passer les prochains jours :

  1. KICK-OFF CALL — [Date, Heure]
     → On valide ensemble les objectifs et le planning
     → Lien visio : [Lien]

  2. ACCES & OUTILS
     → Je vais avoir besoin de : [liste des acces necessaires]
     → Deadline pour me les envoyer : [date]

  3. VOTRE CONTACT DEDIE
     → [Prenom] — [Email] — [Tel]
     → Temps de reponse garanti : < 24h en semaine

Si vous avez la moindre question d'ici la, repondez directement a cet email.

A [jour du kick-off] !
[Signature]

─────────────────────────────────────────────────────────────────
  EMAIL — SUIVI DE PROJET (Hebdo)
─────────────────────────────────────────────────────────────────

Objet : Point projet [Nom] — Semaine [X]

Bonjour [Prenom],

Voici le recap de cette semaine :

  COMPLETE :
  ✓ [Tache 1]
  ✓ [Tache 2]
  ✓ [Tache 3]

  EN COURS :
  → [Tache 4] — livraison prevue [date]
  → [Tache 5] — en attente de [element]

  BESOIN DE VOTRE PART :
  [ ] [Action requise 1] — avant le [date]
  [ ] [Action requise 2] — quand vous pouvez

  PROCHAINE ETAPE :
  → [Ce qui est prevu pour la semaine prochaine]

Des questions ? On en parle au prochain point [jour].

[Signature]

─────────────────────────────────────────────────────────────────
  EMAIL — LIVRAISON DE PROJET
─────────────────────────────────────────────────────────────────

Objet : [Projet] livre — voici tout ce que vous devez savoir

Bonjour [Prenom],

C'est avec plaisir que je vous annonce la livraison de [projet] !

  CE QUI A ETE LIVRE :
  ✓ [Livrable 1] — [lien/acces]
  ✓ [Livrable 2] — [lien/acces]
  ✓ [Documentation] — [lien]

  RESULTATS ATTENDUS :
  → [KPI 1 : objectif chiffre]
  → [KPI 2 : objectif chiffre]

  SUPPORT POST-LIVRAISON :
  → Corrections incluses pendant [X] jours
  → Support par email pendant [X] semaines
  → Formation de votre equipe : [date prevue]

  PROCHAINE ETAPE :
  → Testez la solution cette semaine
  → On fait un point bilan dans [X] jours

Merci pour votre confiance sur ce projet !

[Signature]

─────────────────────────────────────────────────────────────────
  EMAIL — DEMANDE DE TEMOIGNAGE
─────────────────────────────────────────────────────────────────

Objet : Un petit retour, [Prenom] ?

Bonjour [Prenom],

Ca fait maintenant [duree] qu'on a livre [projet], et j'espere que les resultats sont au rendez-vous !

J'ai une petite demande : est-ce que vous accepteriez de partager un court temoignage sur notre collaboration ?

Ca prend 2 minutes — voici 3 questions :

  1. Quel etait votre probleme principal avant ?
  2. Comment notre solution l'a resolu ?
  3. Quel resultat concret avez-vous obtenu ?

Vous pouvez repondre directement a cet email. Si vous preferez, je peux aussi vous proposer un format video (5 min max).

Ca nous aiderait enormement — et bien sur, je vous enverrai le texte pour validation avant toute publication.

Merci d'avance !
[Signature]

─────────────────────────────────────────────────────────────────
  EMAIL — UPSELL / NOUVEAU PROJET
─────────────────────────────────────────────────────────────────

Objet : Idee pour aller plus loin avec [projet]

Bonjour [Prenom],

En travaillant sur [projet], j'ai identifie [X] opportunites supplementaires qui pourraient avoir un gros impact :

  OPPORTUNITE 1 : [Description]
  → Impact estime : [chiffre]
  → Effort : [faible/moyen]

  OPPORTUNITE 2 : [Description]
  → Impact estime : [chiffre]
  → Effort : [faible/moyen]

Est-ce que ca vous interesse d'en discuter ? Je peux vous faire une proposition rapide.

[Signature]`;
    },
  },

  prompt: {
    title: "Generateur de prompt IA",
    build: (ctx, tone) => {
      const t = toneInstruction(tone);
      return `=================================================================
  PROMPT PROFESSIONNEL POUR CLAUDE / CHATGPT
=================================================================

OBJECTIF : ${ctx}

─────────────────────────────────────────────────────────────────
  PROMPT PRINCIPAL (Copie-colle dans Claude)
─────────────────────────────────────────────────────────────────

Tu es un expert senior en ${ctx.toLowerCase().includes("site") || ctx.toLowerCase().includes("web") || ctx.toLowerCase().includes("app") ? "developpement web et design UI/UX" : ctx.toLowerCase().includes("market") || ctx.toLowerCase().includes("contenu") || ctx.toLowerCase().includes("post") ? "marketing digital et copywriting" : ctx.toLowerCase().includes("vente") || ctx.toLowerCase().includes("commercial") ? "vente B2B et strategie commerciale" : ctx.toLowerCase().includes("automat") ? "automatisation et integration d'outils IA" : "conseil en strategie et IA appliquee"} avec 10+ ans d'experience.

CONTEXTE :
${ctx}

TON ROLE :
${t}

TA MISSION :
Produis un livrable complet, professionnel et directement utilisable. Pas de blabla, pas de generalites — uniquement du contenu actionnable et specifique a mon contexte.

CONTRAINTES :
1. Sois precis et concret — donne des exemples reels, pas des placeholders generiques
2. Structure ta reponse avec des titres clairs et une hierarchie logique
3. Inclus des chiffres, des benchmarks ou des references quand c'est pertinent
4. Si tu fais du code, commente-le et rends-le production-ready
5. Si tu fais du contenu, adapte le ton a ma cible
6. Propose des alternatives quand c'est pertinent
7. Termine par les 3 prochaines actions concretes a faire

FORMAT DE SORTIE :
Organise ta reponse en sections claires :
  1. Resume executif (3 lignes max)
  2. Livrable principal (le coeur de la reponse)
  3. Recommandations complementaires
  4. Prochaines etapes (3 actions)

─────────────────────────────────────────────────────────────────
  VARIANTES SELON LE BESOIN
─────────────────────────────────────────────────────────────────

VARIANTE A — SI TU VEUX DU CODE :

"Tu es un developpeur senior fullstack specialise en [techno].

Cree [ce que tu veux] avec les specs suivantes :
- [Spec 1]
- [Spec 2]
- [Spec 3]

Stack technique : [tes technos — ex: Next.js, TypeScript, Tailwind, Supabase]

Contraintes :
- Code production-ready, pas de TODO
- Responsive mobile-first
- Accessibilite WCAG 2.1
- Performance : Lighthouse > 90
- Commente les parties complexes

Livre le code complet avec structure des fichiers."

VARIANTE B — SI TU VEUX UNE STRATEGIE :

"Tu es un consultant senior en [domaine].

Mon contexte : [description de ta situation]
Mon objectif : [ce que tu veux atteindre]
Mon budget : [fourchette]
Mon delai : [deadline]

Produis un plan d'action detaille avec :
1. Diagnostic de ma situation actuelle
2. Strategie recommandee (avec justification)
3. Plan d'execution semaine par semaine
4. KPIs a suivre
5. Risques et comment les mitiger
6. Budget detaille par poste"

VARIANTE C — SI TU VEUX DU CONTENU :

"Tu es un copywriter expert specialise en [secteur].

Brief :
- Cible : [description avatar client]
- Objectif : [conversion, notoriete, engagement]
- Canal : [LinkedIn, email, landing page, etc.]
- Ton : [professionnel, decontracte, expert]
- Longueur : [X mots ou X slides]

Cree [type de contenu] en respectant :
- Hook percutant dans les 2 premieres lignes
- Structure AIDA (Attention, Interet, Desir, Action)
- Preuve sociale ou donnee chiffree
- CTA clair et unique
- SEO-friendly si applicable

Propose 3 versions differentes."

─────────────────────────────────────────────────────────────────
  TECHNIQUES AVANCEES DE PROMPTING
─────────────────────────────────────────────────────────────────

CHAIN OF THOUGHT :
  Ajoute : "Reflechis etape par etape avant de repondre."
  → Ameliore la qualite sur les problemes complexes

FEW-SHOT :
  Ajoute : "Voici un exemple de ce que j'attends : [coller un exemple]"
  → L'IA reproduit le format et le niveau de qualite

ROLE STACKING :
  Ajoute : "Combine l'expertise de [role 1] et [role 2]."
  → Ex: "un dev senior ET un designer UI" pour du code beau et fonctionnel

ITERATIF :
  Ajoute : "Propose une V1, puis je te donnerai du feedback pour iterer."
  → Mieux que de tout vouloir en 1 shot

CRITIQUE :
  Ajoute : "Apres ta reponse, fais ta propre critique et ameliore-la."
  → L'IA s'auto-corrige et produit un meilleur resultat

=================================================================
  CONSEIL : Copie le prompt principal, colle-le dans Claude,
  et remplace les crochets par tes infos specifiques.
  Plus tu donnes de contexte, meilleur sera le resultat.
=================================================================`;
    },
  },
};

const GENERATE_DAILY_LIMIT = 50;

const generateRateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkGenerateRateLimit(userId: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const entry = generateRateLimitMap.get(userId);

  if (!entry || now > entry.resetAt) {
    generateRateLimitMap.set(userId, { count: 1, resetAt: endOfDay.getTime() });
    return { allowed: true, remaining: GENERATE_DAILY_LIMIT - 1 };
  }

  if (entry.count >= GENERATE_DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: GENERATE_DAILY_LIMIT - entry.count };
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  // Tier check: only academy and one_to_one can use the generator (admins bypass)
  const isAdmin = session.user.role === "admin";
  let userTier = "free";

  if (!isAdmin) {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: session.user.id, status: "active" },
    });
    const bestEnrollment = enrollments.sort((a, b) => (TIER_PRIORITY[b.tier] || 0) - (TIER_PRIORITY[a.tier] || 0))[0];
    userTier = bestEnrollment?.tier || "free";
    if (userTier !== "academy" && userTier !== "one_to_one") {
      return NextResponse.json({ error: "Accès réservé au pack Academy" }, { status: 403 });
    }
  } else {
    userTier = "one_to_one";
  }

  // Rate limit by userId
  const { allowed, remaining } = checkGenerateRateLimit(session.user.id);
  if (!allowed) {
    return NextResponse.json(
      { error: "Tu as atteint la limite de 50 générations par jour. Reviens demain !", remaining: 0 },
      { status: 429 }
    );
  }

  try {
    const { category, context, tone, length: len } = await req.json();

    if (!category || !context || context.trim().length < 10) {
      return NextResponse.json(
        { error: "Catégorie et contexte requis (min. 10 caractères)." },
        { status: 400 }
      );
    }

    const template = TEMPLATES[category];
    if (!template) {
      return NextResponse.json(
        { error: "Catégorie invalide." },
        { status: 400 }
      );
    }

    const result = template.build(context.trim(), tone || "professionnel", len || "moyen");

    return NextResponse.json({ result, remaining });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
