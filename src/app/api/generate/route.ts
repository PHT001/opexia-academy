import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/* ─── Template-based content generator ──────────────────────────────── */

interface Template {
  title: string;
  build: (ctx: string) => string;
}

const TEMPLATES: Record<string, Template> = {
  prospection: {
    title: "Prompt de prospection",
    build: (ctx) => `🎯 PROMPT DE PROSPECTION\n\nContexte : ${ctx}\n\n---\n\nSujet : [Prénom], une idée pour [problème spécifique]\n\nBonjour [Prénom],\n\nJ'ai remarqué que [observation personnalisée sur le prospect / son entreprise].\n\nChez [ton agence], on aide les [type de client] à [résultat concret] grâce à [ta méthode / ton offre].\n\nRécemment, on a accompagné [exemple client similaire] et ils ont obtenu [résultat chiffré : +X%, -X heures, etc.].\n\nEst-ce que ça vous parlerait d'en discuter 15 min cette semaine ?\n\nBonne journée,\n[Ton prénom]\n\n---\n\n💡 CONSEILS D'UTILISATION :\n• Personnalise chaque message avec une observation réelle sur le prospect\n• Reste sous 100 mots pour maximiser le taux de réponse\n• Envoie entre 8h-9h ou 17h-18h pour un meilleur taux d'ouverture\n• Fais un suivi 3 jours après si pas de réponse`,
  },
  vente: {
    title: "Script de vente",
    build: (ctx) => `💬 SCRIPT DE VENTE\n\nContexte : ${ctx}\n\n---\n\n📋 PHASE 1 — ACCROCHE (30 sec)\n"Bonjour [Prénom], merci d'avoir pris le temps. Avant de commencer, est-ce que je peux vous poser quelques questions pour bien comprendre votre situation ?"\n\n📋 PHASE 2 — DÉCOUVERTE (5-7 min)\n1. "Quelle est votre plus grande frustration actuelle concernant [sujet] ?"\n2. "Si vous pouviez changer une seule chose dans [domaine], ce serait quoi ?"\n3. "Vous avez déjà essayé des solutions ? Qu'est-ce qui n'a pas marché ?"\n4. "C'est quoi l'impact concret sur votre business aujourd'hui ?"\n5. "Dans un monde idéal, à quoi ressemblerait la situation dans 6 mois ?"\n\n📋 PHASE 3 — PRÉSENTATION (5 min)\n"D'après ce que vous me dites, votre problème principal c'est [reformulation]. On a exactement la solution pour ça. Voici comment ça marche en 3 étapes :"\n• Étape 1 : [Audit / Diagnostic]\n• Étape 2 : [Mise en place / Implémentation]\n• Étape 3 : [Suivi / Optimisation]\n\n📋 PHASE 4 — PREUVE SOCIALE\n"On a accompagné [client similaire] qui avait exactement le même problème. En [durée], ils ont obtenu [résultat chiffré]."\n\n📋 PHASE 5 — CLOSING\n"Vu votre situation, je vous recommande [offre]. On peut démarrer dès [date]. Est-ce que ça vous convient ?"\n\n🚫 OBJECTIONS FRÉQUENTES :\n• "C'est trop cher" → "Je comprends. Si on compare au coût de ne rien faire, [chiffre impact], l'investissement se rentabilise en [durée]."\n• "Je dois réfléchir" → "Bien sûr. Qu'est-ce qui vous fait hésiter exactement ?"\n• "J'ai déjà un prestataire" → "Parfait. Qu'est-ce qui vous manque avec votre solution actuelle ?"`,
  },
  marketing: {
    title: "Contenu marketing",
    build: (ctx) => `📣 CONTENU MARKETING\n\nContexte : ${ctx}\n\n---\n\n🔥 HOOK (Accroche)\n"[Chiffre choc] des [cible] font encore [erreur courante]. Voici comment l'éviter."\n\n📝 POST LINKEDIN / ARTICLE\n\n[Prénom] pensait que [croyance limitante].\n\nPendant [durée], il/elle a [action inefficace].\nRésultat ? [Conséquence négative].\n\nPuis il/elle a découvert [ta méthode / ton approche] :\n\n→ Étape 1 : [Action concrète]\n→ Étape 2 : [Action concrète]\n→ Étape 3 : [Action concrète]\n\n[Durée] plus tard :\n✅ [Résultat 1 chiffré]\n✅ [Résultat 2 chiffré]\n✅ [Résultat 3 qualitatif]\n\nLa leçon ? [Insight clé en une phrase].\n\nSi tu veux le même résultat :\n👉 [Call to action]\n\n---\n\n📊 DÉCLINAISONS SUGGÉRÉES :\n• Story Instagram : Reprends les 3 étapes en format carrousel\n• Email : Utilise le hook + le cas client comme email de nurturing\n• Vidéo courte : Film toi en racontant l'histoire en 60 secondes\n• Thread Twitter/X : 1 tweet = 1 étape + résultat`,
  },
  email: {
    title: "Email client",
    build: (ctx) => `✉️ EMAIL CLIENT\n\nContexte : ${ctx}\n\n---\n\n📧 EMAIL 1 — PREMIER CONTACT\n\nObjet : [Bénéfice principal] pour [entreprise du prospect]\n\nBonjour [Prénom],\n\n[Observation personnalisée — ce que vous avez remarqué chez le prospect].\n\nChez [ton agence], on aide les [type de client] à [résultat principal]. Par exemple, [client référence] a pu [résultat chiffré] en [durée].\n\nEst-ce que [jour] à [heure] vous conviendrait pour un échange de 15 min ?\n\nCordialement,\n[Ton prénom]\n[Signature]\n\n---\n\n📧 EMAIL 2 — RELANCE (J+3)\n\nObjet : Re: [objet précédent]\n\nBonjour [Prénom],\n\nJe me permets de revenir vers vous. J'imagine que votre agenda est chargé.\n\nPour vous faire gagner du temps, voici ce qu'on pourrait aborder en 15 min :\n• [Point 1 pertinent]\n• [Point 2 pertinent]\n• [Point 3 pertinent]\n\nQuel créneau vous arrangerait cette semaine ?\n\n[Ton prénom]\n\n---\n\n📧 EMAIL 3 — DERNIÈRE RELANCE (J+7)\n\nObjet : Dernière question, [Prénom]\n\nBonjour [Prénom],\n\nJe ne veux pas être insistant. Si le timing n'est pas le bon, je comprends parfaitement.\n\nJuste une dernière question : est-ce que [problème que tu résous] est un sujet prioritaire pour vous en ce moment ?\n\nSi oui, on en discute quand vous voulez.\nSi non, aucun souci — je vous souhaite une excellente continuation !\n\n[Ton prénom]`,
  },
  proposition: {
    title: "Proposition commerciale",
    build: (ctx) => `📄 PROPOSITION COMMERCIALE\n\nContexte : ${ctx}\n\n---\n\n═══════════════════════════════════════\n  PROPOSITION COMMERCIALE\n  [Nom de ton agence] × [Nom du client]\n  Date : [Date du jour]\n═══════════════════════════════════════\n\n1. CONTEXTE & COMPRÉHENSION DU BESOIN\n─────────────────────────────────────\nSuite à notre échange du [date], vous nous avez exprimé les besoins suivants :\n• [Besoin 1]\n• [Besoin 2]\n• [Besoin 3]\n\nVotre objectif principal : [Objectif reformulé]\n\n2. SOLUTION PROPOSÉE\n─────────────────────────────────────\nNous vous proposons un accompagnement en [X] phases :\n\n📌 Phase 1 — [Nom] ([Durée])\n   • [Livrable 1]\n   • [Livrable 2]\n\n📌 Phase 2 — [Nom] ([Durée])\n   • [Livrable 1]\n   • [Livrable 2]\n\n📌 Phase 3 — [Nom] ([Durée])\n   • [Livrable 1]\n   • [Livrable 2]\n\n3. INVESTISSEMENT\n─────────────────────────────────────\n┌─────────────────────┬──────────┐\n│ Prestation          │ Tarif    │\n├─────────────────────┼──────────┤\n│ Phase 1             │ [X] €    │\n│ Phase 2             │ [X] €    │\n│ Phase 3             │ [X] €    │\n├─────────────────────┼──────────┤\n│ TOTAL               │ [X] €    │\n└─────────────────────┴──────────┘\n\nConditions : Paiement en [X] fois — 50% à la signature, 50% à la livraison.\n\n4. POURQUOI NOUS ?\n─────────────────────────────────────\n✅ [Argument 1 — expertise]\n✅ [Argument 2 — résultats clients]\n✅ [Argument 3 — méthode unique]\n\n5. PROCHAINES ÉTAPES\n─────────────────────────────────────\n1. Validation de cette proposition\n2. Kick-off et planning détaillé\n3. Démarrage de la Phase 1\n\nProposition valable jusqu'au [date + 15 jours].`,
  },
  social: {
    title: "Post réseaux sociaux",
    build: (ctx) => `📱 POSTS RÉSEAUX SOCIAUX\n\nContexte : ${ctx}\n\n---\n\n🔵 POST LINKEDIN\n─────────────────────────────────────\n[Chiffre ou question qui interpelle]\n\n[Anecdote personnelle ou constat en 2-3 lignes]\n\nVoici ce que j'ai appris :\n\n1️⃣ [Leçon 1]\n→ [Détail actionnable]\n\n2️⃣ [Leçon 2]\n→ [Détail actionnable]\n\n3️⃣ [Leçon 3]\n→ [Détail actionnable]\n\nLa vérité ? [Phrase de conclusion percutante]\n\n♻️ Reposte si ça peut aider quelqu'un.\n💬 Et toi, c'est quoi ta leçon n°1 ?\n\n#[Hashtag1] #[Hashtag2] #[Hashtag3]\n\n---\n\n📸 POST INSTAGRAM (Carrousel)\n─────────────────────────────────────\nSlide 1 (Cover) : "[Titre accrocheur]"\nSlide 2 : "Le problème → [Description courte]"\nSlide 3 : "Erreur #1 → [Erreur courante]"\nSlide 4 : "Erreur #2 → [Erreur courante]"\nSlide 5 : "Erreur #3 → [Erreur courante]"\nSlide 6 : "La solution → [Ta méthode en 1 phrase]"\nSlide 7 : "Résultat → [Chiffre ou transformation]"\nSlide 8 (CTA) : "Enregistre ce post + Follow pour plus 🔥"\n\nCaption : [Résumé + call to action + 20-30 hashtags]\n\n---\n\n🐦 THREAD X / TWITTER\n─────────────────────────────────────\n1/ [Hook — question ou affirmation forte]\n\n2/ [Contexte — pourquoi c'est important]\n\n3/ [Point clé #1]\n\n4/ [Point clé #2]\n\n5/ [Point clé #3]\n\n6/ [Résumé + CTA — "Follow pour plus de contenu comme celui-ci"]`,
  },
};

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { category, context } = await req.json();

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

    const result = template.build(context.trim());

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
