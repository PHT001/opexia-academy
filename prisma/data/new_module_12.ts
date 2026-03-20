function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_12_LESSONS = [
  {
    order: 1,
    module: 12,
    title: "Le process de livraison parfait",
    slug: "process-livraison-parfait",
    duration: "25 min",
    description: "De l'onboarding au go-live : comment structurer chaque projet pour livrer à temps, sans stress, et laisser une impression irréprochable.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi un process de livraison change tout",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>La plupart des freelances et agences perdent leurs clients non pas parce que leur travail est mauvais, mais parce que le client ne <em>sait pas où on en est</em>. L'absence de structure crée de l'anxiété, des relances intempestives, et des conflits inutiles. Un bon process de livraison, c'est ce qui transforme une prestation correcte en expérience 5 étoiles.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>Le principe clé :</strong> Le client ne juge pas seulement le résultat final. Il juge <em>chaque interaction</em> pendant le projet. Un projet moyen livré avec un process exemplaire vaut plus qu'un chef-d'œuvre livré dans la confusion.",
      },
      {
        id: "1-4",
        type: "heading",
        level: 2,
        text: "Les 6 étapes du process parfait",
      },
      {
        id: "1-5",
        type: "steps",
        steps: [
          {
            title: "1. L'onboarding client (Jour 1)",
            description: "Dès la signature, envoie un email de bienvenue structuré : lien vers un formulaire d'onboarding (accès, identifiants, brief détaillé), invitation au workspace partagé (Notion/Linear), et la date du kickoff meeting. Le client doit avoir l'impression d'entrer dans une machine bien huilée.",
          },
          {
            title: "2. Le kickoff meeting (Jour 2-3)",
            description: "Appel de 45-60 min pour aligner tout le monde : objectifs business, personas cibles, contraintes techniques, jalons du projet, et processus de validation. Envoie le compte-rendu dans les 2h qui suivent. Ce doc devient la référence de tout le projet.",
          },
          {
            title: "3. Les jalons intermédiaires (Semaine 1-N)",
            description: "Découpe le projet en phases avec des livrables concrets à chaque étape. Ne jamais disparaître pendant 3 semaines pour réapparaître avec le résultat final. Chaque jalon = une validation = une opportunité de rassurer le client.",
          },
          {
            title: "4. Les livrables intermédiaires",
            description: "Partage des versions de travail (wireframes, maquettes, versions bêta) en expliquant ce qui est terminé, ce qui reste à faire, et ce que tu attends comme retour. Formate tes retours en questions précises, pas en présentation ouverte.",
          },
          {
            title: "5. La recette (Phase de validation finale)",
            description: "Présente la version finale dans un environnement de test. Fournis une grille de recette : liste exhaustive des points à valider avec case à cocher. Fixe un délai de retour (ex: 5 jours ouvrés). Au-delà, le projet est considéré validé.",
          },
          {
            title: "6. La mise en production et le handover",
            description: "Go-live planifié (jamais un vendredi). Remise des accès, documentation technique, tutoriel vidéo Loom si besoin. Email récapitulatif 'Projet livré' avec tout ce qui a été fait. C'est le moment de demander le témoignage.",
          },
        ],
      },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "La timeline type d'un projet (exemple : site web IA, 4 semaines)",
      },
      {
        id: "1-7",
        type: "diagram",
        variant: "timeline",
        nodes: [
          {
            id: "n1",
            label: "J+0 — Signature & onboarding",
            description: "Email de bienvenue, formulaire d'accès, invitation Notion, confirmation du kickoff",
          },
          {
            id: "n2",
            label: "J+2 — Kickoff meeting",
            description: "Appel 60 min, CR envoyé dans les 2h, jalons confirmés",
          },
          {
            id: "n3",
            label: "J+7 — Livrable #1 : Structure & wireframes",
            description: "Plan du site, arborescence, wireframes basse fidélité. Validation client sous 48h.",
          },
          {
            id: "n4",
            label: "J+14 — Livrable #2 : Maquettes & contenu",
            description: "Design haute fidélité, intégration du contenu, version bêta de l'IA. Feedback client.",
          },
          {
            id: "n5",
            label: "J+21 — Livrable #3 : Version complète",
            description: "Site complet en environnement de test, grille de recette envoyée",
          },
          {
            id: "n6",
            label: "J+26 — Corrections & validation finale",
            description: "Intégration des retours (1 round), validation client signée",
          },
          {
            id: "n7",
            label: "J+28 — Go-live & handover",
            description: "Mise en production, remise des accès, documentation, demande de témoignage",
          },
        ],
      },
      {
        id: "1-8",
        type: "heading",
        level: 2,
        text: "Le template d'email de bienvenue",
      },
      {
        id: "1-9",
        type: "code",
        language: "text",
        filename: "email-bienvenue-client.txt",
        code: `Objet : 🚀 Bienvenue dans le projet [Nom du projet] — prochaines étapes

Bonjour [Prénom],

Super nouvelle — le projet est officiellement lancé ! Voici ce qui se passe maintenant :

✅ ÉTAPE 1 — Remplis ce formulaire d'onboarding (5 min)
→ [Lien Typeform/Notion]
Il me permettra de récupérer tous les accès et informations nécessaires.

✅ ÉTAPE 2 — Rejoins notre espace de travail partagé
→ [Lien Notion/Linear]
C'est là que tu suivras l'avancement en temps réel.

✅ ÉTAPE 3 — Notre kickoff meeting
→ [Lien Calendly]
Je te propose ces créneaux : [Date 1] ou [Date 2].
Durée : 45-60 min en visio.

📅 CALENDRIER PRÉVISIONNEL
- Kickoff : [Date]
- Livrable #1 (wireframes) : [Date]
- Livrable #2 (version bêta) : [Date]
- Livraison finale : [Date]

Des questions ? Réponds directement à cet email.

À très vite,
[Ton prénom]

P.S. : Je travaille du lundi au vendredi, 9h-18h.
Les retours que tu me feras dans les 48h suivant chaque livrable
nous permettront de tenir le planning.`,
      },
      {
        id: "1-10",
        type: "heading",
        level: 2,
        text: "Le compte-rendu de kickoff : le document de référence",
      },
      {
        id: "1-11",
        type: "code",
        language: "text",
        filename: "template-CR-kickoff.txt",
        code: `# COMPTE-RENDU KICKOFF — [Nom du projet]
Date : [JJ/MM/AAAA] | Participants : [Noms]

## 1. CONTEXTE & OBJECTIFS
- Objectif principal : [ex: Lancer un chatbot IA pour réduire les tickets support de 40%]
- Objectif secondaire : [ex: Améliorer l'expérience utilisateur sur mobile]
- KPIs de succès : [ex: Taux de résolution automatique > 60% dans les 3 mois]

## 2. PÉRIMÈTRE DU PROJET (ce qui est INCLUS)
- [Fonctionnalité 1]
- [Fonctionnalité 2]
- [Fonctionnalité 3]

## 3. HORS PÉRIMÈTRE (ce qui N'EST PAS inclus)
- [Élément exclu 1]
- [Élément exclu 2]

## 4. JALONS & PLANNING
| Jalon | Description | Date | Responsable |
|-------|-------------|------|-------------|
| J1 | Wireframes | [Date] | [Prestataire] |
| J2 | Version bêta | [Date] | [Prestataire] |
| J3 | Recette | [Date] | [Client] |
| J4 | Go-live | [Date] | [Les deux] |

## 5. PROCESSUS DE VALIDATION
- Les retours doivent être fournis dans les [X] jours ouvrés.
- Les retours sont consolidés en un seul document (pas d'emails multiples).
- 1 round de corrections inclus par jalon. Corrections supplémentaires : devis additionnel.

## 6. CONTACTS & COMMUNICATION
- Point de contact client : [Nom, email, téléphone]
- Outil de communication : [Email / Notion / Slack]
- Réunions de suivi : [ex: Chaque vendredi, 15 min en visio]

## 7. ACCÈS REÇUS ✅ / EN ATTENTE ⏳
- ✅ Accès hébergeur
- ⏳ Accès CRM

---
Document validé par : _________________ Date : _________`,
      },
      {
        id: "1-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce pro :</strong> Envoie le CR de kickoff en demandant une confirmation écrite par email ('Peux-tu me confirmer que ce document reflète bien notre accord ?'). Cette validation écrite protège les deux parties et évite les 'ah mais j'avais compris que...' 3 semaines plus tard.",
      },
      {
        id: "1-13",
        type: "heading",
        level: 2,
        text: "La grille de recette : rendre la validation simple et formelle",
      },
      {
        id: "1-14",
        type: "code",
        language: "text",
        filename: "grille-recette.txt",
        code: `# GRILLE DE RECETTE — [Nom du projet]
Version testée : [URL ou fichier]
Date limite de retour : [JJ/MM/AAAA]

INSTRUCTIONS : Pour chaque point, note ✅ (validé), ❌ (à corriger), ou ⏭ (non testé).
Si ❌, décris le problème dans la colonne "Commentaire".

## FONCTIONNEL
[ ] La page d'accueil s'affiche correctement
[ ] Le formulaire de contact envoie bien les emails
[ ] Le chatbot répond aux 5 questions-types testées
[ ] Les liens internes fonctionnent
[ ] Le paiement en ligne est opérationnel (test en mode sandbox)

## CONTENU
[ ] Les textes sont conformes au brief validé
[ ] Les images/vidéos s'affichent sans erreur
[ ] Les coordonnées sont correctes
[ ] Les mentions légales sont présentes

## PERFORMANCE & COMPATIBILITÉ
[ ] Testé sur Chrome, Firefox, Safari
[ ] Testé sur mobile (iOS + Android)
[ ] Temps de chargement < 3 secondes

## SIGNATURE DE VALIDATION
En signant ce document, le client valide la version livrée.
Toute modification demandée après signature fera l'objet d'un devis.

Signature client : _________________ Date : _________`,
      },
      {
        id: "1-15",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-16",
        type: "callout",
        variant: "success",
        html: "<strong>Résultat attendu :</strong> Avec ce process, tes clients reçoivent une confirmation toutes les semaines que le projet avance. Résultat : zéro relance anxieuse, zéro conflit sur 'ce qu'on s'était dit', et une livraison finale qui ressemble à une fête plutôt qu'à un soulagement.",
      },
      {
        id: "1-17",
        type: "quiz-inline",
        question: "Quelle est la règle d'or pour la grille de recette ?",
        options: [
          { id: "a", text: "La remplir toi-même pour gagner du temps" },
          { id: "b", text: "La faire valider par le client avec une date limite et une clause de validation tacite au-delà" },
          { id: "c", text: "Ne la faire qu'à la toute fin du projet" },
          { id: "d", text: "La remettre en version papier uniquement" },
        ],
        correctId: "b",
        explanation: "La grille de recette avec date limite et validation tacite te protège juridiquement et pousse le client à se mobiliser. Sans ça, la phase de recette peut s'étirer indéfiniment.",
      },
      {
        id: "1-18",
        type: "checklist",
        title: "Checklist : mon process de livraison est en place",
        items: [
          { id: "c1", text: "J'ai un template d'email de bienvenue prêt à personnaliser" },
          { id: "c2", text: "J'ai un formulaire d'onboarding (Typeform, Notion form ou Google Form)" },
          { id: "c3", text: "J'ai un template de CR de kickoff avec périmètre et hors-périmètre" },
          { id: "c4", text: "Je découpe chaque projet en jalons avec dates précises" },
          { id: "c5", text: "J'ai une grille de recette avec clause de validation tacite" },
          { id: "c6", text: "Je planifie les go-live en début de semaine (jamais le vendredi)" },
          { id: "c7", text: "J'envoie un email de clôture avec récapitulatif et demande de témoignage" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Prends ton prochain projet (réel ou fictif) et construis son planning complet en utilisant le template de timeline vu dans ce module. Définis les 3-5 jalons avec leurs dates, le contenu de chaque livrable, et le délai de retour client. Crée le formulaire d'onboarding correspondant sur Notion ou Typeform. Durée estimée : 45 min.</p>",
    quiz: [
      { type: "mcq", question: "Combien d'étapes comporte le process de livraison parfait présenté dans cette leçon ?", options: JSON.stringify(["3 étapes : planification, développement, livraison", "6 étapes : onboarding, kickoff, jalons, livrables, recette, mise en production", "4 étapes : devis, développement, test, go-live", "2 étapes : développement et livraison"]), correctAnswer: "6 étapes : onboarding, kickoff, jalons, livrables, recette, mise en production", explanation: "Le process parfait comprend 6 étapes structurées : l'onboarding client (J1), le kickoff meeting (J2-3), les jalons intermédiaires, les livrables intermédiaires, la recette (validation finale), et la mise en production avec handover." },
      { type: "true_false", question: "Il est recommandé de planifier les mises en production (go-live) le vendredi pour avoir le week-end comme marge de sécurité.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il ne faut jamais faire un go-live le vendredi. Si un problème survient, personne n'est disponible pour le résoudre pendant le week-end. Les mises en production se planifient en début de semaine." },
      { type: "mcq", question: "Quel est le rôle principal de la grille de recette dans le process de livraison ?", options: JSON.stringify(["Vérifier que le prestataire a bien travaillé", "Fournir une liste exhaustive de points à valider avec une date limite et une clause de validation tacite", "Remplacer le cahier des charges initial", "Permettre au client de demander des modifications gratuites"]), correctAnswer: "Fournir une liste exhaustive de points à valider avec une date limite et une clause de validation tacite", explanation: "La grille de recette avec date limite et validation tacite protège juridiquement les deux parties et pousse le client à se mobiliser. Au-delà du délai, le projet est considéré validé, ce qui évite que la phase de recette s'étire indéfiniment." },
      { type: "true_false", question: "Le compte-rendu de kickoff doit être envoyé dans les 2 heures suivant l'appel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Envoyer le CR dans les 2h qui suivent le kickoff montre le professionnalisme et la réactivité. Ce document devient la référence de tout le projet et doit être validé par écrit par le client pour éviter les malentendus." },
      { type: "mcq", question: "Pourquoi faut-il découper le projet en jalons intermédiaires plutôt que de tout livrer à la fin ?", options: JSON.stringify(["Pour facturer plus cher au client", "Pour montrer au client qu'on travaille et éviter de disparaître pendant des semaines", "Pour pouvoir changer de technologie en cours de route", "Pour ralentir le projet volontairement"]), correctAnswer: "Pour montrer au client qu'on travaille et éviter de disparaître pendant des semaines", explanation: "Chaque jalon est une validation et une opportunité de rassurer le client. Ne jamais disparaître pendant 3 semaines pour réapparaître avec le résultat final : cela crée de l'anxiété et des relances intempestives." },
    ],
  },
  {
    order: 2,
    module: 12,
    title: "Gérer les attentes et éviter les conflits",
    slug: "gerer-attentes-eviter-conflits",
    duration: "20 min",
    description: "Communication proactive, scope creep, dire non sans froisser, et transformer chaque demande hors-périmètre en opportunité commerciale.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Le scope creep : le tueur silencieux de ta rentabilité",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Le <em>scope creep</em>, c'est quand un projet grossit en dehors de ce qui était prévu, sans que le budget suive. 'On pourrait ajouter juste un petit truc…' Multiplié par 15 demandes au fil du projet, tu te retrouves à avoir travaillé le double pour le même prix. C'est la principale cause de burn-out et de projets non rentables.</p>",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "warning",
        html: "<strong>Stat terrain :</strong> 70% des dépassements de budget en agence viennent de demandes hors-périmètre non facturées. Pas parce que le client est de mauvaise foi — souvent parce que le périmètre n'était pas clairement défini dès le départ.",
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "La communication proactive : couper les problèmes dans l'œuf",
      },
      {
        id: "2-5",
        type: "steps",
        steps: [
          {
            title: "Le point de suivi hebdomadaire",
            description: "Chaque vendredi (ou lundi), envoie un update en 5 lignes : ce qui a été fait cette semaine, ce qui sera fait la semaine prochaine, les points bloquants (s'il y en a), et la confirmation que le planning tient. Ça prend 10 minutes et évite 80% des emails 'où en êtes-vous ?'.",
          },
          {
            title: "Annoncer les mauvaises nouvelles tôt",
            description: "Si tu prends du retard, dis-le immédiatement avec la nouvelle date et la raison. Ne jamais attendre la date limite pour prévenir. Un client informé est un client qui peut s'adapter. Un client surpris le jour J devient un client en colère.",
          },
          {
            title: "Contextualiser chaque livrable",
            description: "Quand tu envoies quelque chose à valider, explique toujours : 'Voici ce que j'ai fait, pourquoi j'ai fait ce choix, et voilà les 3 questions précises sur lesquelles j'ai besoin de ton retour.' Ça guide le client et évite les retours vagues et inutilisables.",
          },
        ],
      },
      {
        id: "2-6",
        type: "code",
        language: "text",
        filename: "email-update-hebdomadaire.txt",
        code: `Objet : [Projet X] — Point hebdomadaire du [Date]

Bonjour [Prénom],

Voici le point rapide de la semaine :

✅ CE QUI A ÉTÉ FAIT
- [Tâche 1 terminée]
- [Tâche 2 terminée]

🔄 EN COURS / SEMAINE PROCHAINE
- [Tâche en cours — livraison prévue le X]
- [Prochaine étape]

📅 PLANNING
Le projet est sur les rails. Prochaine étape importante : [Jalon] le [Date].

⚠️ POINTS EN ATTENTE DE TA PART (si applicable)
- [Ce dont j'ai besoin de toi pour débloquer X]

Des questions ? N'hésite pas.
À la semaine prochaine,
[Prénom]`,
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Le cahier des charges : ton bouclier contractuel",
      },
      {
        id: "2-8",
        type: "text",
        html: "<p>Un bon cahier des charges (CDC) n'est pas un document bureaucratique — c'est ce qui te permet de dire non avec élégance. Il doit définir très précisément : les fonctionnalités incluses, le nombre de pages/écrans/automations, le nombre de rounds de corrections, les délais de retour client, et tout ce qui est explicitement exclu.</p>",
      },
      {
        id: "2-9",
        type: "comparison",
        headers: ["CDC faible (problèmes garantis)", "CDC solide (conflit impossible)"],
        rows: [
          {
            cells: [
              "'Un site web avec plusieurs pages'",
              "'Un site de 5 pages (Accueil, Services, À propos, Blog, Contact)'",
            ],
          },
          {
            cells: [
              "'Un chatbot IA'",
              "'Un chatbot formé sur 3 documents PDF fournis par le client, répondant en français, intégré via widget sur le site'",
            ],
          },
          {
            cells: [
              "'Des corrections incluses'",
              "'1 round de corrections par jalon, dans les 5 jours ouvrés suivant la livraison'",
            ],
          },
          {
            cells: [
              "Pas de mention du hors-périmètre",
              "'Hors périmètre : développement mobile natif, intégrations CRM tierces, rédaction de contenu'",
            ],
          },
          {
            cells: [
              "Pas de délai de validation",
              "'Validation tacite si aucun retour sous 5 jours ouvrés'",
            ],
          },
        ],
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Dire non poliment : les scripts qui fonctionnent",
      },
      {
        id: "2-11",
        type: "code",
        language: "text",
        filename: "scripts-dire-non.txt",
        code: `--- SCRIPT 1 : Demande hors-périmètre simple ---

"Super idée ! Ça n'était pas prévu dans notre périmètre initial,
mais je peux tout à fait ajouter ça. Je te prépare un devis
complémentaire rapidement — je pense que ça représente [X] heures
de travail. Tu veux que j'intègre ça dans le planning actuel
ou qu'on le traite en phase 2 ?"

→ Tu n'es pas en train de dire non. Tu dis oui, mais avec un prix.

--- SCRIPT 2 : Refonte complète d'un livrable validé ---

"Je comprends que tu aies changé d'avis sur la direction.
Comme le design a été validé lors de notre échange du [date],
une refonte complète représente un nouveau cycle de travail.
Je peux te faire un devis pour cette évolution — mais je ne
peux pas l'intégrer dans le budget et planning actuels sans
impacter la date de livraison. On fait comment ?"

→ Tu rappelles la validation, tu proposes une solution, tu remets le choix dans ses mains.

--- SCRIPT 3 : Client qui déborde sur les canaux de communication ---

"Pour que je puisse suivre correctement toutes tes demandes
et ne rien rater, je te propose de centraliser tout dans
[Notion/email/Linear]. Les messages WhatsApp, je les lis,
mais je ne peux pas les intégrer dans mon workflow.
C'est OK pour toi ?"

→ Tu poses une règle sans agressivité.

--- SCRIPT 4 : Client qui demande des modifications à la dernière minute ---

"Je vois ta demande. Pour bien faire les choses et ne pas
introduire de bugs à J-2 du go-live, je préfère intégrer
ça proprement après la mise en ligne. Je note dans ton contrat
de maintenance. Ça te convient ?"

→ Tu reportes sans refuser.`,
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Le devis complémentaire : transformer les imprévus en CA",
      },
      {
        id: "2-13",
        type: "callout",
        variant: "tip",
        html: "<strong>Mindset shift :</strong> Une demande hors-périmètre n'est pas un problème — c'est une opportunité de vente. Le client qui demande 'une petite chose en plus' t'a déjà dit qu'il a confiance en toi. Ton job : chiffrer rapidement et proposer. 80% du temps, il dit oui.",
      },
      {
        id: "2-14",
        type: "code",
        language: "text",
        filename: "template-devis-complementaire.txt",
        code: `Objet : Devis complémentaire #[Numéro] — [Description courte]

Bonjour [Prénom],

Suite à ta demande du [date] concernant [description de la demande],
voici le devis correspondant :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVIS COMPLÉMENTAIRE #[XXX]
Projet : [Nom du projet principal]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRESTATION DEMANDÉE
[Description précise de ce qui est inclus dans ce devis]

DÉTAIL
• [Tâche 1] ............ [X]h × [TJM]€ = [X]€
• [Tâche 2] ............ [X]h × [TJM]€ = [X]€

TOTAL HT : [X]€
TVA 20% : [X]€
TOTAL TTC : [X]€

DÉLAI D'EXÉCUTION : [X] jours ouvrés après validation
IMPACT SUR LE PLANNING ACTUEL : [Aucun / Décalage de X jours]

Pour valider ce devis, réponds simplement "OK" à cet email.

Cordialement,
[Prénom]`,
      },
      {
        id: "2-15",
        type: "separator",
        style: "line",
      },
      {
        id: "2-16",
        type: "callout",
        variant: "success",
        html: "<strong>À retenir :</strong> La gestion des attentes n'est pas une contrainte administrative — c'est une compétence commerciale. Les meilleurs prestataires ne sont pas ceux qui disent jamais non. Ce sont ceux qui savent toujours <em>comment</em> dire non tout en proposant une alternative rentable.",
      },
      {
        id: "2-17",
        type: "quiz-inline",
        question: "Un client validé te demande d'ajouter une fonctionnalité non prévue au contrat. Quelle est la meilleure réaction ?",
        options: [
          { id: "a", text: "Refuser poliment pour ne pas dériver du périmètre" },
          { id: "b", text: "Faire la modification gratuitement pour garder le client content" },
          { id: "c", text: "Chiffrer la demande et envoyer un devis complémentaire en la présentant comme une bonne idée" },
          { id: "d", text: "Ignorer la demande jusqu'à la fin du projet" },
        ],
        correctId: "c",
        explanation: "Dire non sans alternative crée de la frustration. Accepter sans facturer nuit à ta rentabilité. La bonne réaction : valoriser la demande, la chiffrer rapidement, et proposer. C'est du CA en plus sur un client déjà acquis.",
      },
      {
        id: "2-18",
        type: "checklist",
        title: "Checklist : ma gestion des attentes est solide",
        items: [
          { id: "c1", text: "Mon CDC définit précisément le périmètre inclus ET exclu" },
          { id: "c2", text: "Mon contrat inclut le nombre de rounds de corrections et le délai de retour" },
          { id: "c3", text: "J'envoie un point hebdomadaire proactif à chaque client actif" },
          { id: "c4", text: "J'ai les scripts pour gérer les demandes hors-périmètre" },
          { id: "c5", text: "J'ai un template de devis complémentaire prêt à l'emploi" },
          { id: "c6", text: "Je centralise toute communication client sur un seul canal" },
          { id: "c7", text: "Je préviens immédiatement en cas de retard (avant la date limite)" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Reprends le dernier projet où tu as senti que ça dérivait (ou imagine un scénario typique). Identifie les 3 moments où une meilleure communication aurait évité le problème. Écris le texte exact que tu aurais dû envoyer à chaque moment en utilisant les templates du module. Durée estimée : 30 min.</p>",
    quiz: [
      { type: "mcq", question: "Selon la leçon, quel pourcentage des dépassements de budget en agence vient de demandes hors-périmètre non facturées ?", options: JSON.stringify(["30%", "50%", "70%", "90%"]), correctAnswer: "70%", explanation: "70% des dépassements de budget en agence viennent de demandes hors-périmètre non facturées. Souvent pas par mauvaise foi du client, mais parce que le périmètre n'était pas clairement défini dès le départ dans le cahier des charges." },
      { type: "true_false", question: "Quand un client demande une fonctionnalité hors-périmètre, la meilleure réaction est de refuser poliment pour ne pas dériver.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Refuser crée de la frustration. La bonne réaction est de valoriser la demande, la chiffrer rapidement en devis complémentaire, et proposer. C'est du CA en plus sur un client déjà acquis. 80% du temps, le client accepte." },
      { type: "mcq", question: "Quelle est la différence clé entre un CDC faible et un CDC solide pour un chatbot IA ?", options: JSON.stringify(["Le CDC faible est plus court", "Le CDC solide précise exactement le nombre de documents, la langue et le mode d'intégration", "Le CDC faible est gratuit", "Le CDC solide coûte plus cher à produire"]), correctAnswer: "Le CDC solide précise exactement le nombre de documents, la langue et le mode d'intégration", explanation: "Un CDC faible dit 'Un chatbot IA'. Un CDC solide dit 'Un chatbot formé sur 3 documents PDF fournis par le client, répondant en français, intégré via widget sur le site'. Cette précision empêche tout conflit sur le périmètre." },
      { type: "true_false", question: "Si tu prends du retard sur un projet, il vaut mieux attendre le jour de la deadline pour prévenir le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il faut annoncer les mauvaises nouvelles immédiatement, avec la nouvelle date et la raison. Un client informé peut s'adapter. Un client surpris le jour J devient un client en colère. Ne jamais attendre la date limite pour prévenir." },
      { type: "mcq", question: "Comment transformer une demande client de dernière minute (J-2 du go-live) en opportunité ?", options: JSON.stringify(["Accepter et travailler le week-end pour l'intégrer", "Refuser catégoriquement car c'est trop tard", "Proposer de l'intégrer proprement après la mise en ligne dans le contrat de maintenance", "Ignorer la demande jusqu'après la livraison"]), correctAnswer: "Proposer de l'intégrer proprement après la mise en ligne dans le contrat de maintenance", explanation: "Plutôt que de risquer d'introduire des bugs à J-2, on propose d'intégrer la modification proprement après le go-live dans le contrat de maintenance. On ne refuse pas, on reporte intelligemment." },
    ],
  },
  {
    order: 3,
    module: 12,
    title: "Les outils de gestion de projet",
    slug: "outils-gestion-de-projet",
    duration: "20 min",
    description: "Notion, Linear ou Trello : comment choisir, configurer, et utiliser ces outils pour gérer plusieurs projets sans te noyer — et donner au client une visibilité en temps réel.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Pourquoi un outil de gestion de projet est non-négociable",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Gérer ses projets par email et par mémoire, ça marche jusqu'à 2 projets. Au-delà, tu oublies des tâches, tu perds du temps à chercher des informations, et ton client a l'impression que tu improvises. Un bon outil de PM ne te rend pas bureaucrate — il te rend <em>prévisible</em>, ce qui est la qualité numéro 1 qu'un client attend de son prestataire.</p>",
      },
      {
        id: "3-3",
        type: "heading",
        level: 2,
        text: "Choisir l'outil adapté à ta situation",
      },
      {
        id: "3-4",
        type: "comparison",
        headers: ["Outil", "Idéal pour", "Points forts", "Limite"],
        rows: [
          {
            cells: [
              "Notion",
              "Agences 1-5 personnes, projets complexes, documentation",
              "Tout-en-un (wiki + PM + CRM), très flexible, excellent pour partager avec le client",
              "Peut devenir un désordre si mal structuré au départ",
            ],
          },
          {
            cells: [
              "Linear",
              "Projets tech/dev, équipes qui livrent en sprints",
              "Ultra rapide, conçu pour les devs, excellent pour tracker les bugs",
              "Moins adapté aux projets créatifs ou aux clients non-tech",
            ],
          },
          {
            cells: [
              "Trello",
              "Débutants, petits projets, clients qui veulent simplicité",
              "Simplicité maximale, gratuit, zéro courbe d'apprentissage",
              "Limité pour les projets complexes ou les équipes > 3 personnes",
            ],
          },
          {
            cells: [
              "Asana",
              "Équipes > 5, projets multi-clients avec dépendances",
              "Excellent pour les timelines et les dépendances inter-tâches",
              "Payant, over-kill pour les freelances solo",
            ],
          },
        ],
      },
      {
        id: "3-5",
        type: "callout",
        variant: "tip",
        html: "<strong>Recommandation :</strong> Commence avec <strong>Notion</strong>. C'est l'outil le plus polyvalent pour une agence IA solo ou en petite équipe. Il peut servir à la fois de workspace interne ET d'espace client. Une fois maîtrisé, tu peux tout gérer depuis un seul endroit.",
      },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Setup Notion : la structure qui tient à l'échelle",
      },
      {
        id: "3-7",
        type: "steps",
        steps: [
          {
            title: "Page principale : l'hub de ton agence",
            description: "Crée une page 'AGENCE HUB' avec des liens vers : CRM clients, Projets en cours, Templates, Finances, Ressources. C'est ta tour de contrôle. Tout part de là.",
          },
          {
            title: "Database Clients (CRM simple)",
            description: "Une base de données avec : Nom client, Statut (Prospect/Actif/Terminé/Archivé), Chiffre d'affaires, Contact, Date de début, Prochain renouvellement, Lien vers son espace projet. Vues filtrées : 'Clients actifs', 'Renouvellements ce mois', 'Prospects chauds'.",
          },
          {
            title: "Database Tâches avec vue Kanban",
            description: "Colonnes : Backlog > À faire cette semaine > En cours > En attente de validation > Terminé. Propriétés : Client, Projet, Priorité, Date d'échéance, Temps estimé. Vue Calendrier pour voir les deadlines en un coup d'œil.",
          },
          {
            title: "Espace client partagé (par projet)",
            description: "Pour chaque projet, crée un sous-espace partagé avec le client : Brief validé, Planning avec statuts, Livrables à télécharger, Zone de commentaires/feedback, Accès transmis. Le client peut voir l'avancement sans t'envoyer d'email.",
          },
          {
            title: "Section Templates",
            description: "Stocke tous tes templates : email de bienvenue, CR de kickoff, grille de recette, devis complémentaire, email de clôture. Copier-coller en un clic au lieu de recréer à chaque fois.",
          },
        ],
      },
      {
        id: "3-8",
        type: "code",
        language: "text",
        filename: "structure-notion-agence.txt",
        code: `📁 AGENCE HUB
├── 📊 CRM Clients (Database)
│   ├── Vue : Clients actifs
│   ├── Vue : Pipeline prospects
│   └── Vue : Renouvellements à venir
│
├── ✅ Tâches & Projets (Database)
│   ├── Vue Kanban : Toutes les tâches
│   ├── Vue Calendrier : Deadlines
│   └── Vue Liste : Par client
│
├── 💼 Projets (un dossier par client)
│   ├── 📋 [Client A] — Site IA
│   │   ├── Brief & CDC validé
│   │   ├── Planning & jalons
│   │   ├── Livrables
│   │   └── 🔗 [PARTAGÉ AVEC LE CLIENT]
│   └── 📋 [Client B] — Chatbot
│
├── 📝 Templates
│   ├── Email bienvenue
│   ├── CR Kickoff
│   ├── Grille de recette
│   ├── Devis complémentaire
│   └── Email de clôture
│
├── 💰 Finances
│   ├── Devis envoyés
│   ├── Factures
│   └── MRR tracker
│
└── 📚 Ressources
    ├── Prompts IA favoris
    ├── Fournisseurs & outils
    └── Formation continue`,
      },
      {
        id: "3-9",
        type: "heading",
        level: 2,
        text: "Linear : pour les projets techniques",
      },
      {
        id: "3-10",
        type: "text",
        html: "<p>Si tu développes des apps ou des outils IA complexes, Linear est supérieur à Notion pour le tracking technique. Son modèle de cycles (sprints de 2 semaines), ses statuts personnalisables et sa rapidité d'interface en font le meilleur outil pour les projets dev. Configure un workspace par client, utilise les labels pour catégoriser (Bug, Feature, Amélioration), et intègre-le avec GitHub pour tracker les commits automatiquement.</p>",
      },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Le template de suivi de projet universel",
      },
      {
        id: "3-12",
        type: "code",
        language: "text",
        filename: "template-suivi-projet.txt",
        code: `# SUIVI PROJET — [Nom du projet]
Client : [Nom] | Budget : [X]€ | Début : [Date] | Fin prévue : [Date]

## STATUT GLOBAL
🟢 Sur les rails  /  🟡 Attention  /  🔴 Problème

Dernière mise à jour : [Date]
Prochaine action : [Quoi] le [Quand]

## JALONS
| # | Jalon | Date prévue | Statut | Date réelle |
|---|-------|-------------|--------|-------------|
| 1 | Kickoff | [Date] | ✅ | [Date] |
| 2 | Wireframes | [Date] | ✅ | [Date] |
| 3 | Version bêta | [Date] | 🔄 | — |
| 4 | Recette | [Date] | ⏳ | — |
| 5 | Go-live | [Date] | ⏳ | — |

## LOG DES ÉCHANGES
| Date | Type | Résumé | Suite à donner |
|------|------|--------|----------------|
| [Date] | Email | Envoi brief | — |
| [Date] | Appel | Kickoff meeting | Envoyer CR |
| [Date] | Demande | Modification X | Devis complémentaire |

## ACCÈS & CREDENTIALS
(Stocker dans un gestionnaire de mots de passe, pas ici)
- Hébergeur : ✅ Reçu
- CMS : ✅ Reçu
- API clés : ⏳ En attente

## DEVIS COMPLÉMENTAIRES
| # | Description | Montant | Statut |
|---|-------------|---------|--------|
| DC-01 | [Description] | [X]€ | Validé |

## FACTURATION
| Facture | Montant | Date | Payée |
|---------|---------|------|-------|
| F-001 | [X]€ (acompte) | [Date] | ✅ |
| F-002 | [X]€ (solde) | [Date] | ⏳ |`,
      },
      {
        id: "3-13",
        type: "heading",
        level: 2,
        text: "Communication client dans l'outil",
      },
      {
        id: "3-14",
        type: "callout",
        variant: "info",
        html: "<strong>Règle d'or :</strong> Choisis UN seul canal de communication par client et tiens-t'y. Soit l'email, soit Notion, soit Slack — mais pas les trois. Chaque client qui te contacte sur WhatsApp à 22h est un client dont tu n'as pas clarifié les règles de communication au kickoff.",
      },
      {
        id: "3-15",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Demande client (n'importe quel canal)",
            description: "WhatsApp, email, appel, message Notion...",
          },
          {
            id: "n2",
            label: "Tu centralises dans Notion/Linear",
            description: "Crée une tâche, ajoute le contexte, la priorité et la deadline",
          },
          {
            id: "n3",
            label: "Tu réponds au client",
            description: "'J'ai bien noté ta demande, je l'ai intégrée dans notre planning. Tu peux suivre l'avancement ici : [lien]'",
          },
          {
            id: "n4",
            label: "Tu traites dans ton workflow",
            description: "La tâche suit son chemin normal dans ton Kanban",
          },
          {
            id: "n5",
            label: "Tu notifies le client quand c'est fait",
            description: "Mise à jour automatique via Notion ou email manuel",
          },
        ],
      },
      {
        id: "3-16",
        type: "separator",
        style: "space",
      },
      {
        id: "3-17",
        type: "quiz-inline",
        question: "Tu travailles seul(e) sur 4 projets simultanément. Quel setup est le plus efficace ?",
        options: [
          { id: "a", text: "Un outil différent par projet pour s'adapter à chaque client" },
          { id: "b", text: "Un seul workspace Notion centralisé avec une database par type (clients, tâches, projets)" },
          { id: "c", text: "Des feuilles Excel par projet pour plus de contrôle" },
          { id: "d", text: "Gérer par email et mémoire pour rester agile" },
        ],
        correctId: "b",
        explanation: "Un workspace centralisé te donne une vue d'ensemble immédiate sur tous tes projets. Les databases croisées (tâches liées aux clients, factures liées aux projets) t'évitent les doublons et les oublis. C'est la fondation qui te permet de scaler.",
      },
      {
        id: "3-18",
        type: "checklist",
        title: "Checklist : mon setup de gestion de projet est opérationnel",
        items: [
          { id: "c1", text: "J'ai un workspace Notion (ou Linear) configuré avec ma structure d'agence" },
          { id: "c2", text: "J'ai une database clients avec les vues filtrées essentielles" },
          { id: "c3", text: "Chaque projet actif a son espace de suivi avec jalons et statuts" },
          { id: "c4", text: "J'ai un espace partagé avec chaque client actif" },
          { id: "c5", text: "Tous mes templates sont stockés dans Notion (emails, CR, grilles)" },
          { id: "c6", text: "J'ai défini un seul canal de communication par client" },
          { id: "c7", text: "Mon tracker financier (devis, factures) est à jour" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée ton workspace Notion d'agence en suivant la structure vue dans ce module. Configure les 3 databases essentielles (Clients, Tâches, Projets) avec les propriétés et vues décrites. Importe un projet existant ou fictif pour tester le setup. Temps estimé : 60-90 min (investissement ponctuel, gain de temps permanent).</p>",
    quiz: [
      { type: "mcq", question: "Quel outil est recommandé comme point de départ pour une agence IA solo ou en petite équipe ?", options: JSON.stringify(["Linear pour sa rapidité", "Asana pour ses dépendances", "Notion pour sa polyvalence (workspace interne ET espace client)", "Trello pour sa simplicité"]), correctAnswer: "Notion pour sa polyvalence (workspace interne ET espace client)", explanation: "Notion est l'outil le plus polyvalent : il sert à la fois de workspace interne (CRM, tâches, finances) et d'espace client partagé. Une fois maîtrisé, tout se gère depuis un seul endroit, ce qui est la fondation pour scaler." },
      { type: "true_false", question: "Il est préférable d'utiliser un outil de gestion de projet différent pour chaque client afin de s'adapter à ses préférences.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Utiliser un outil différent par projet multiplie la complexité et fait perdre la vue d'ensemble. Un seul workspace centralisé avec une database par type (clients, tâches, projets) est beaucoup plus efficace pour gérer plusieurs projets simultanément." },
      { type: "mcq", question: "Quelles sont les colonnes du Kanban recommandé pour la database Tâches ?", options: JSON.stringify(["À faire → En cours → Terminé", "Backlog → À faire cette semaine → En cours → En attente de validation → Terminé", "Urgent → Important → Normal → En attente", "Nouveau → Assigné → En cours → Résolu"]), correctAnswer: "Backlog → À faire cette semaine → En cours → En attente de validation → Terminé", explanation: "Ce Kanban en 5 colonnes permet de distinguer le backlog général, les tâches priorisées pour la semaine, le travail en cours, et les éléments qui attendent un retour client. La colonne 'En attente de validation' est cruciale pour ne pas oublier les dépendances client." },
      { type: "true_false", question: "Gérer ses projets par email et par mémoire fonctionne bien tant qu'on a moins de 5 projets en parallèle.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Gérer par email et par mémoire ne fonctionne que jusqu'à 2 projets. Au-delà, on oublie des tâches, on perd du temps à chercher des informations, et le client a l'impression qu'on improvise. Un outil de PM est non-négociable." },
      { type: "mcq", question: "Quelle est la règle d'or concernant les canaux de communication avec les clients ?", options: JSON.stringify(["Être disponible sur tous les canaux pour être réactif", "Choisir un seul canal de communication par client et s'y tenir", "Utiliser WhatsApp pour les urgences et email pour le reste", "Laisser le client choisir le canal qu'il préfère à chaque message"]), correctAnswer: "Choisir un seul canal de communication par client et s'y tenir", explanation: "Un seul canal par client évite de perdre des informations dispersées entre WhatsApp, email, Slack et Notion. Chaque client qui contacte sur WhatsApp à 22h est un client dont on n'a pas clarifié les règles de communication au kickoff." },
    ],
  },
  // ─── LEÇON 4 — Retainers mensuels ───
  {
    order: 4,
    module: 12,
    title: "Structurer tes retainers mensuels",
    slug: "retainers-mensuels",
    duration: "25 min",
    description: "Pourquoi les retainers sont la clé pour atteindre 10K/mois, les 3 modèles de retainer, et comment structurer ton offre récurrente.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi les retainers changent tout" },
      { id: "4-2", type: "text", html: "<p>La majorité des freelances et agences IA vivent au rythme des projets one-shot : un mois à 5 000€, le suivant à 0€. Ce yo-yo de revenus est <strong>épuisant et dangereux</strong>. Les retainers mensuels transforment cette réalité : tu passes d'un revenu imprévisible à un <strong>MRR (Monthly Recurring Revenue)</strong> stable et prévisible.</p><p>Avec 5 retainers à 1 000-2 000€/mois, tu atteins 5 000-10 000€ de revenus récurrents <em>avant même</em> de vendre un seul projet one-shot. C'est la différence entre survivre et prospérer.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "<strong>La règle des 70/30 :</strong> Les agences IA les plus stables visent 70% de revenus récurrents (retainers) et 30% de projets one-shot. Les one-shots servent à acquérir de nouveaux clients que tu convertis ensuite en retainers." },
      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Les 3 modèles de retainer" },
      { id: "4-6", type: "comparison", headers: ["Modèle", "Description", "Prix mensuel", "Idéal pour"], rows: [
        { cells: ["Maintenance", "Monitoring du chatbot/IA, correction de bugs, mises à jour mineures, support technique par email", "500-800€/mois", "Clients qui ont un outil IA en production et veulent qu'il continue de fonctionner"] },
        { cells: ["Évolution", "Maintenance + ajout de nouvelles fonctionnalités chaque mois (nouveaux prompts, intégrations, pages)", "1 000-1 500€/mois", "Clients ambitieux qui veulent faire évoluer leur outil IA continuellement"] },
        { cells: ["Support stratégique", "Évolution + consulting mensuel (1-2 calls/mois), recommandations IA, veille technologique dédiée", "1 500-2 500€/mois", "Clients premium qui te considèrent comme leur directeur IA externe"] },
      ]},
      { id: "4-7", type: "heading", level: 2, text: "Structurer ton offre retainer" },
      { id: "4-8", type: "steps", steps: [
        { title: "1. Définis le périmètre exact", description: "Liste précisément ce qui est inclus et ce qui ne l'est pas. Exemple : '4h de développement/mois, monitoring quotidien, support email sous 24h. Hors périmètre : refonte complète, nouvelles intégrations majeures (devis séparé).'" },
        { title: "2. Fixe le nombre d'heures ou de livrables", description: "Un retainer n'est pas un forfait illimité. Définis clairement : '8h de travail/mois' ou '2 évolutions mineures + 1 call stratégique/mois'. Les heures non utilisées ne sont pas reportables." },
        { title: "3. Propose 3 niveaux (Bronze, Silver, Gold)", description: "Donne le choix au client avec 3 paliers de prix. Le palier du milieu sera celui choisi dans 60% des cas (effet d'ancrage). Fais en sorte que le palier du milieu soit celui que tu veux vendre." },
        { title: "4. Durée d'engagement minimum", description: "Propose un engagement de 3 mois minimum avec préavis de 30 jours. Cela te donne la visibilité nécessaire pour planifier et garantit un revenu stable. Offre une réduction de 10% pour un engagement de 6 mois." },
      ]},
      { id: "4-9", type: "heading", level: 2, text: "Les éléments clés du contrat retainer" },
      { id: "4-10", type: "checklist", items: [
        { label: "Périmètre détaillé des services inclus", checked: false },
        { label: "Volume mensuel (heures ou livrables)", checked: false },
        { label: "Tarif mensuel et conditions de paiement (prélèvement automatique idéal)", checked: false },
        { label: "Durée d'engagement et conditions de résiliation", checked: false },
        { label: "SLA (délais de réponse et d'intervention)", checked: false },
        { label: "Clause de révision tarifaire annuelle", checked: false },
        { label: "Process de demande (ticket, email, formulaire Notion)", checked: false },
        { label: "Reporting mensuel (ce qui a été fait, heures consommées)", checked: false },
      ]},
      { id: "4-11", type: "callout", variant: "tip", html: "<strong>Le pitch retainer en 3 phrases :</strong> 'Plutôt que de vous facturer à chaque intervention, je vous propose un accompagnement mensuel à [prix]€/mois. Vous avez [X heures/livrables] de travail garanti, un support prioritaire, et la tranquillité de savoir que votre IA est entre de bonnes mains. L'engagement est de 3 mois, résiliable ensuite avec 30 jours de préavis.'" },
      { id: "4-12", type: "callout", variant: "success", html: "<strong>Quand proposer le retainer :</strong> Le meilleur moment est <em>juste après la livraison du projet</em>, quand le client est satisfait et réalise qu'il aura besoin de maintenance et d'évolutions. Ne le propose pas avant la livraison (trop tôt) ni 3 mois après (trop tard, il aura trouvé quelqu'un d'autre)." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) Choisis 2 de tes services actuels (ex : chatbot IA, automatisation) et crée une <strong>offre retainer pour chacun</strong> avec 3 paliers (Bronze/Silver/Gold), le périmètre de chaque palier, et le tarif mensuel. (2) Rédige ton <strong>pitch retainer en 3 phrases</strong> que tu pourras utiliser à la fin de chaque projet livré. Sauvegarde-le dans tes templates.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le ratio idéal entre revenus récurrents et projets one-shot pour une agence IA stable ?", options: JSON.stringify(["100% one-shot", "50% one-shot / 50% récurrent", "70% récurrent / 30% one-shot", "100% récurrent"]), correctAnswer: "70% récurrent / 30% one-shot", explanation: "La règle des 70/30 : 70% de revenus récurrents (retainers) pour la stabilité, et 30% de projets one-shot pour l'acquisition de nouveaux clients qui seront ensuite convertis en retainers." },
      { type: "true_false", question: "Les heures non utilisées dans un retainer mensuel doivent être reportables au mois suivant.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les heures non utilisées ne sont pas reportables. C'est un principe essentiel du retainer : le client paie pour la disponibilité et la priorité, pas uniquement pour les heures consommées. Le report crée des déséquilibres et de la dette de travail." },
      { type: "mcq", question: "Quel est le meilleur moment pour proposer un retainer à un client ?", options: JSON.stringify(["Avant de commencer le projet", "Pendant le développement", "Juste après la livraison, quand le client est satisfait", "3 mois après la livraison"]), correctAnswer: "Juste après la livraison, quand le client est satisfait", explanation: "Le meilleur moment est juste après la livraison quand le client est satisfait et réalise qu'il aura besoin de maintenance et d'évolutions. Trop tôt, il n'a pas encore vu la valeur. Trop tard, il aura trouvé quelqu'un d'autre." },
      { type: "true_false", question: "Un retainer 'Support stratégique' à 2 000€/mois inclut uniquement de la maintenance technique.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le retainer Support stratégique inclut la maintenance ET l'évolution ET du consulting mensuel (calls stratégiques, recommandations IA, veille technologique). C'est le palier premium pour les clients qui te considèrent comme leur directeur IA externe." },
      { type: "mcq", question: "Tu livres un chatbot à un client PME. Il est ravi du résultat. Comment proposes-tu le retainer ?", options: JSON.stringify(["Tu lui envoies un email avec tes 3 paliers sans explication", "Tu lui expliques que son chatbot va planter sans maintenance et qu'il doit signer immédiatement", "Tu lui présentes les 3 paliers en expliquant la valeur de chacun, en recommandant le palier du milieu, avec un engagement de 3 mois", "Tu attends qu'il te recontacte quand il aura un problème"]), correctAnswer: "Tu lui présentes les 3 paliers en expliquant la valeur de chacun, en recommandant le palier du milieu, avec un engagement de 3 mois", explanation: "La bonne approche : présenter les 3 paliers avec la valeur de chacun, recommander le palier du milieu (effet d'ancrage), et proposer un engagement de 3 mois. Pas de pression, pas de menace — juste une proposition de valeur claire." },
    ],
  },

  // ─── LEÇON 5 — Témoignages et referrals ───
  {
    order: 5,
    module: 12,
    title: "Collecter témoignages et activer le referral",
    slug: "temoignages-referrals",
    duration: "20 min",
    description: "Quand et comment demander un témoignage, le template parfait, vidéo vs écrit, et comment transformer tes clients satisfaits en ambassadeurs actifs.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Le témoignage : ton arme de vente la plus puissante" },
      { id: "5-2", type: "text", html: "<p>Un prospect qui lit un témoignage d'un client similaire a <strong>3 fois plus de chances de signer</strong>. Pourtant, 90% des freelances ne demandent jamais de témoignage. Pourquoi ? Ils ont peur de déranger, ne savent pas comment demander, ou oublient tout simplement. C'est une mine d'or que tu laisses sur la table.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Le bon moment :</strong> Demande le témoignage <em>immédiatement après la livraison</em>, quand l'enthousiasme est au maximum. Si tu attends 2 semaines, le client sera passé à autre chose et ton email finira dans les limbes." },
      { id: "5-4", type: "separator", style: "dots" },
      { id: "5-5", type: "heading", level: 2, text: "Le template de demande parfait" },
      { id: "5-6", type: "code", language: "text", filename: "email-demande-temoignage.txt", code: "Objet : Petit retour sur notre collaboration ?\n\nBonjour [Prénom],\n\nMaintenant que [le chatbot / l'automatisation / le projet] est en place,\nj'aimerais beaucoup avoir ton retour sur notre collaboration.\n\nSi tu es satisfait(e), est-ce que tu accepterais de me laisser\nun court témoignage ? Ça m'aide énormément pour ma crédibilité.\n\nVoici 3 questions pour te guider (2 min max) :\n1. Quel problème avais-tu avant notre collaboration ?\n2. Qu'est-ce que la solution t'a apporté concrètement ?\n3. Recommanderais-tu mes services ? Pourquoi ?\n\nTu peux répondre directement à cet email, ou si tu préfères,\nje t'envoie un lien pour enregistrer un témoignage vidéo de 60 secondes\n(encore plus impactant !).\n\nMerci beaucoup,\n[Ton prénom]" },
      { id: "5-7", type: "heading", level: 2, text: "Vidéo vs écrit : que choisir ?" },
      { id: "5-8", type: "comparison", headers: ["Format", "Avantages", "Inconvénients", "Quand l'utiliser"], rows: [
        { cells: ["Témoignage écrit", "Facile à obtenir, utilisable partout (site, propositions, LinkedIn)", "Moins d'impact émotionnel, peut sembler fabriqué", "Pour tous les clients — c'est le minimum à obtenir"] },
        { cells: ["Témoignage vidéo (60s)", "Ultra-convaincant, montre la vraie personne, idéal pour le site web", "Plus difficile à obtenir, certains clients sont timides face caméra", "Pour les clients enthousiastes, les résultats impressionnants"] },
        { cells: ["Capture d'écran (résultats)", "Preuve objective, chiffres concrets, impossible à contester", "Pas d'émotion, besoin de contexte pour être compris", "En complément d'un témoignage écrit ou vidéo"] },
      ]},
      { id: "5-9", type: "callout", variant: "tip", html: "<strong>Astuce pro :</strong> Propose toujours la vidéo en premier. Si le client refuse, replie-toi sur l'écrit. Utilise <strong>Loom</strong> ou <strong>VideoAsk</strong> pour faciliter l'enregistrement — le client n'a qu'à cliquer sur un lien." },
      { id: "5-10", type: "heading", level: 2, text: "Transformer tes clients en ambassadeurs" },
      { id: "5-11", type: "text", html: "<p>Un client satisfait qui parle de toi à son réseau vaut plus que n'importe quelle publicité. Mais le bouche-à-oreille ne se produit pas tout seul — il faut le <strong>provoquer et le récompenser</strong>.</p>" },
      { id: "5-12", type: "heading", level: 3, text: "Le programme de parrainage simple" },
      { id: "5-13", type: "steps", steps: [
        { title: "1. Définis la récompense", description: "Pour chaque client référé qui signe, offre 10-15% du montant du projet en réduction sur le prochain retainer. Ou offre un mois de retainer gratuit. Le coût d'acquisition client par referral est quasi nul — tu peux te permettre d'être généreux." },
        { title: "2. Communique le programme", description: "À la livraison, dis simplement : 'Si tu connais quelqu'un qui pourrait bénéficier du même type de solution, je t'offre [récompense] pour chaque mise en relation qui aboutit.' Simple, direct, pas de formulaire compliqué." },
        { title: "3. Facilite la mise en relation", description: "Propose de rédiger un message que ton client peut transférer tel quel. Moins il a de travail à faire, plus il le fera. Tu peux aussi proposer un call à 3 (toi, ton client, son contact)." },
        { title: "4. Remercie publiquement", description: "Quand un referral aboutit, remercie le parrain (avec son accord) sur LinkedIn ou par email. La reconnaissance publique motive les futurs parrainages." },
      ]},
      { id: "5-14", type: "callout", variant: "success", html: "<strong>Résultat attendu :</strong> Avec un bon système de témoignages et referrals, 30-50% de tes nouveaux clients viendront du bouche-à-oreille. C'est le canal d'acquisition le plus rentable et le plus fiable à long terme." },
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) <strong>Prépare ton email de demande de témoignage</strong> en personnalisant le template ci-dessus avec ton nom et ton style. Sauvegarde-le dans tes templates. (2) <strong>Envoie-le à ton premier client</strong> (ou au client le plus récent avec qui tu as travaillé). Si tu n'as pas encore de client, prépare le template et programme-le pour l'envoyer dès ta première livraison.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le meilleur moment pour demander un témoignage à un client ?", options: JSON.stringify(["Avant de commencer le projet", "Pendant le développement", "Immédiatement après la livraison", "2 mois après la livraison"]), correctAnswer: "Immédiatement après la livraison", explanation: "Le meilleur moment est immédiatement après la livraison, quand l'enthousiasme du client est au maximum. Si tu attends 2 semaines ou plus, le client sera passé à autre chose." },
      { type: "true_false", question: "Un témoignage vidéo de 60 secondes est plus convaincant qu'un témoignage écrit.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le témoignage vidéo est ultra-convaincant car il montre la vraie personne avec ses émotions. Il est idéal pour le site web. Cependant, il est plus difficile à obtenir car certains clients sont timides face caméra." },
      { type: "mcq", question: "Quelle récompense proposer dans un programme de parrainage simple ?", options: JSON.stringify(["Rien, le client devrait recommander par altruisme", "10-15% de réduction sur le prochain retainer ou un mois gratuit", "50% de réduction sur tous les services futurs", "Un cadeau physique d'une valeur de 500€"]), correctAnswer: "10-15% de réduction sur le prochain retainer ou un mois gratuit", explanation: "10-15% du montant du projet en réduction ou un mois de retainer gratuit est la bonne fourchette. Le coût d'acquisition client par referral est quasi nul, donc tu peux être généreux sans que cela impacte ta rentabilité." },
      { type: "true_false", question: "Pour maximiser les referrals, il faut laisser le client rédiger lui-même le message de recommandation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il faut faciliter la mise en relation en proposant de rédiger un message que le client peut transférer tel quel. Moins il a de travail à faire, plus il le fera. Tu peux aussi proposer un call à 3." },
      { type: "mcq", question: "Tu livres un projet à un client PME qui te dit 'C'est exactement ce qu'il nous fallait, merci !'. Quelle est ta prochaine action ?", options: JSON.stringify(["Tu le remercies et tu passes au projet suivant", "Tu lui demandes immédiatement un témoignage vidéo en lui envoyant le lien Loom, et tu mentionnes ton programme de parrainage", "Tu attends 1 mois pour voir si tout fonctionne bien avant de demander quoi que ce soit", "Tu lui envoies une facture supplémentaire pour le témoignage"]), correctAnswer: "Tu lui demandes immédiatement un témoignage vidéo en lui envoyant le lien Loom, et tu mentionnes ton programme de parrainage", explanation: "Le client vient d'exprimer sa satisfaction — c'est LE moment idéal. Propose la vidéo en premier (plus impactante), replie-toi sur l'écrit s'il refuse. Et mentionne le programme de parrainage dans la foulée." },
    ],
  },

  // ─── LEÇON 6 — Gestion de crise ───
  {
    order: 6,
    module: 12,
    title: "Quand ça se passe mal : gestion de crise",
    slug: "gestion-crise-client",
    duration: "20 min",
    description: "Les 5 crises les plus courantes en agence IA, comment réagir à chacune, et les templates de communication de crise.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Les crises arrivent — ce qui compte, c'est ta réaction" },
      { id: "6-2", type: "text", html: "<p>Même avec le meilleur process du monde, des problèmes surviendront. Un bug en production, un client mécontent, un retard imprévu, un scope qui explose, une facture impayée. Ce qui distingue un amateur d'un professionnel, ce n'est pas l'absence de problèmes — c'est la <strong>vitesse et la qualité de la réponse</strong>.</p><p>Un client qui vit une crise bien gérée devient souvent <em>plus fidèle</em> qu'un client qui n'a jamais eu de problème. C'est le paradoxe de la récupération de service.</p>" },
      { id: "6-3", type: "callout", variant: "info", html: "<strong>La règle d'or :</strong> Réagis dans les 2 heures maximum. Même si tu n'as pas de solution, accuse réception et donne un délai. Le silence est la pire réponse possible en situation de crise." },
      { id: "6-4", type: "separator", style: "dots" },
      { id: "6-5", type: "heading", level: 2, text: "Les 5 crises les plus courantes et comment réagir" },
      { id: "6-6", type: "heading", level: 3, text: "Crise #1 : Le scope creep incontrôlé" },
      { id: "6-7", type: "text", html: "<p><strong>Situation :</strong> Le client ajoute des demandes sans arrêt. Le projet a doublé de taille mais le budget n'a pas bougé. Tu travailles 2x plus pour le même prix.</p><p><strong>Réaction :</strong> Stop. Ne continue pas à absorber. Organise un call, ressors le périmètre initial (CR de kickoff), montre factuellement ce qui a été ajouté, et propose un avenant avec devis pour le travail supplémentaire. Pas d'agressivité — juste des faits et une solution.</p>" },
      { id: "6-8", type: "heading", level: 3, text: "Crise #2 : Le client insatisfait du résultat" },
      { id: "6-9", type: "text", html: "<p><strong>Situation :</strong> Le client n'est pas content de ce que tu as livré. Il trouve que 'ça ne correspond pas à ce qu'il attendait'.</p><p><strong>Réaction :</strong> Écoute d'abord, sans te justifier. Demande des retours précis et écrits (pas de vague 'je n'aime pas'). Compare avec le brief et le périmètre validé. Si c'est un malentendu, clarifie. Si tu as fait une erreur, assume et corrige rapidement. Si les attentes ont changé, propose un avenant.</p>" },
      { id: "6-10", type: "heading", level: 3, text: "Crise #3 : Bug critique en production" },
      { id: "6-11", type: "text", html: "<p><strong>Situation :</strong> Le chatbot/l'IA que tu as livrée plante, donne des réponses fausses, ou cause un problème visible pour les utilisateurs finaux du client.</p><p><strong>Réaction :</strong> (1) Accuse réception immédiatement. (2) Évalue la gravité : est-ce que ça bloque l'activité du client ? (3) Si critique, mets en place un workaround temporaire (désactiver la fonctionnalité, revenir à la version précédente). (4) Corrige le bug. (5) Fais un post-mortem : pourquoi c'est arrivé et comment éviter que ça se reproduise.</p>" },
      { id: "6-12", type: "heading", level: 3, text: "Crise #4 : Le retard de livraison" },
      { id: "6-13", type: "text", html: "<p><strong>Situation :</strong> Tu vas dépasser la deadline. Maladie, sous-estimation de la charge, problème technique imprévu.</p><p><strong>Réaction :</strong> Préviens le client <em>dès que tu sais</em>, pas la veille de la deadline. Explique la raison (sans t'excuser 10 fois), donne un nouveau délai réaliste (ajoute 20% de marge), et propose une compensation si le retard est significatif (réduction, fonctionnalité bonus). Le client préfère un retard annoncé à une surprise.</p>" },
      { id: "6-14", type: "heading", level: 3, text: "Crise #5 : Le non-paiement" },
      { id: "6-15", type: "text", html: "<p><strong>Situation :</strong> Le client ne paie pas. La facture est en retard de 15, 30, 60 jours.</p><p><strong>Réaction :</strong> Suis le processus de relance structuré : J+1 relance amicale, J+7 relance ferme + appel, J+15 mise en demeure par recommandé, J+30 injonction de payer. En parallèle, suspends tout travail en cours pour ce client. Ne livre jamais un nouveau livrable tant que les factures précédentes ne sont pas réglées.</p>" },
      { id: "6-16", type: "separator", style: "dots" },
      { id: "6-17", type: "heading", level: 2, text: "Templates d'emails de crise" },
      { id: "6-18", type: "heading", level: 3, text: "Email #1 : Accusé de réception de problème" },
      { id: "6-19", type: "code", language: "text", filename: "email-crise-accuse-reception.txt", code: "Objet : [Nom du projet] — Problème identifié, on s'en occupe\n\nBonjour [Prénom],\n\nJ'ai bien pris connaissance du problème que tu as signalé concernant\n[description courte du problème].\n\nJe suis dessus. Voici ce que je fais maintenant :\n- [Action immédiate 1 : ex: diagnostic en cours]\n- [Action immédiate 2 : ex: workaround temporaire mis en place]\n\nJe te fais un point complet d'ici [délai : ex: 2h / ce soir / demain 9h].\n\nEn attendant, [instruction si nécessaire : ex: le chatbot est temporairement\ndésactivé pour éviter tout impact utilisateur].\n\n[Ton prénom]" },
      { id: "6-20", type: "heading", level: 3, text: "Email #2 : Annonce de retard" },
      { id: "6-21", type: "code", language: "text", filename: "email-crise-retard.txt", code: "Objet : [Nom du projet] — Point sur le planning\n\nBonjour [Prénom],\n\nJe te contacte pour être transparent sur l'avancement du projet.\n\n[Explication factuelle : ex: L'intégration avec votre CRM s'est avérée\nplus complexe que prévu en raison de la structure de données spécifique.]\n\nLa livraison initialement prévue le [date initiale] sera décalée\nau [nouvelle date]. J'ai ajouté une marge de sécurité pour m'assurer\nque cette nouvelle date sera tenue.\n\nPour compenser ce retard, je propose [compensation : ex: une session\nde formation supplémentaire gratuite / une fonctionnalité bonus].\n\nJe reste disponible pour en discuter par téléphone si tu préfères.\n\n[Ton prénom]" },
      { id: "6-22", type: "heading", level: 3, text: "Email #3 : Réponse à un client insatisfait" },
      { id: "6-23", type: "code", language: "text", filename: "email-crise-insatisfaction.txt", code: "Objet : Re: [Sujet original] — Vos retours sont pris en compte\n\nBonjour [Prénom],\n\nMerci d'avoir pris le temps de partager tes retours. Je comprends\nta frustration et je la prends très au sérieux.\n\nVoici ce que je propose :\n\n1. On planifie un call de 30 min cette semaine pour que tu puisses\n   détailler précisément ce qui ne te convient pas.\n2. Je prépare un plan de correction avec des délais clairs.\n3. On valide ensemble les corrections avant que je les implémente.\n\nPeux-tu me proposer 2 créneaux qui t'arrangent ?\n\nMon objectif est que tu sois pleinement satisfait du résultat final.\n\n[Ton prénom]" },
      { id: "6-24", type: "callout", variant: "warning", html: "<strong>Ce qu'il ne faut JAMAIS faire en crise :</strong> (1) Ignorer le problème en espérant qu'il disparaisse. (2) Se justifier avant d'avoir écouté. (3) Blâmer le client, même s'il a tort. (4) Promettre une solution sans être sûr de pouvoir la tenir. (5) Communiquer uniquement par écrit quand la situation est émotionnelle — décroche le téléphone." },
    ]),
    exercise: "<p><strong>Exercice :</strong> Rédige tes <strong>3 emails-types de gestion de crise</strong> en personnalisant les templates ci-dessus avec ton style et ton nom. (1) Email d'accusé de réception de bug/problème. (2) Email d'annonce de retard avec compensation. (3) Email de réponse à un client insatisfait. Sauvegarde-les dans ton dossier 'Templates' pour pouvoir les utiliser rapidement le jour où tu en auras besoin.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le délai maximum pour accuser réception d'un problème signalé par un client ?", options: JSON.stringify(["24 heures", "2 heures", "1 semaine", "Le jour ouvré suivant"]), correctAnswer: "2 heures", explanation: "La règle d'or : réagis dans les 2 heures maximum. Même sans solution, accuse réception et donne un délai. Le silence est la pire réponse possible en situation de crise." },
      { type: "true_false", question: "Un client qui vit une crise bien gérée peut devenir plus fidèle qu'un client qui n'a jamais eu de problème.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "C'est le paradoxe de la récupération de service : un client qui vit une crise bien gérée (réaction rapide, communication transparente, correction efficace) développe une confiance renforcée envers le prestataire." },
      { type: "mcq", question: "Face à un scope creep incontrôlé, quelle est la bonne réaction ?", options: JSON.stringify(["Absorber les demandes supplémentaires pour garder le client content", "Organiser un call, ressortir le périmètre initial, et proposer un avenant avec devis pour le travail supplémentaire", "Arrêter immédiatement le projet et menacer le client", "Accepter les demandes mais doubler le tarif du prochain projet"]), correctAnswer: "Organiser un call, ressortir le périmètre initial, et proposer un avenant avec devis pour le travail supplémentaire", explanation: "Pas d'agressivité, juste des faits : ressors le CR de kickoff, montre factuellement ce qui a été ajouté hors périmètre, et propose un avenant avec devis. Le client comprendra si la présentation est factuelle et professionnelle." },
      { type: "true_false", question: "En cas de retard, il vaut mieux attendre la veille de la deadline pour prévenir le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Préviens le client dès que tu sais que tu vas dépasser la deadline, pas la veille. Le client préfère un retard annoncé en avance à une surprise. Donne un nouveau délai réaliste avec 20% de marge." },
      { type: "mcq", question: "Ton chatbot IA plante en production chez un client un mardi matin. Les utilisateurs voient des erreurs. Quelles sont tes 3 premières actions ?", options: JSON.stringify(["Accuser réception, diagnostiquer, et envoyer un email de résolution dans 48h", "Accuser réception immédiatement, mettre en place un workaround temporaire, et corriger le bug", "Attendre de comprendre le problème avant de contacter le client", "Appeler le client pour s'excuser, puis prendre le temps de réfléchir à une solution"]), correctAnswer: "Accuser réception immédiatement, mettre en place un workaround temporaire, et corriger le bug", explanation: "Les 3 premières actions : (1) Accuser réception immédiatement. (2) Évaluer la gravité et mettre un workaround (désactiver la fonctionnalité, revenir à la version précédente). (3) Corriger le bug. Ensuite : post-mortem pour éviter la récurrence." },
    ],
  },

  // ─── LEÇON 7 — Fidélisation & support client ───
  {
    order: 7,
    module: 12,
    title: "Fid\u00e9liser et g\u00e9rer le support : transformer un client en partenaire",
    slug: "fidelisation-support-client-long-terme",
    duration: "25 min",
    description: "Comment mettre en place un support efficace, g\u00e9rer les SLAs, et transformer chaque client en source de revenus r\u00e9currents sur 12+ mois.",
    content: blocks([
      { id: "7-1", type: "heading", level: 2, text: "Pourquoi la fid\u00e9lisation vaut 5x plus que l'acquisition" },
      { id: "7-2", type: "text", html: "<p>Trouver un nouveau client co\u00fbte <strong>5 \u00e0 7 fois plus cher</strong> que garder un client existant. Un client fid\u00e8le pendant 12 mois \u00e0 500\u20ac/mois de retainer, c'est 6000\u20ac de revenus r\u00e9currents. Deux appels de vente. Z\u00e9ro prospection.</p><p>Pourtant, la plupart des freelances IA se concentrent sur l'acquisition et n\u00e9gligent compl\u00e8tement la r\u00e9tention. R\u00e9sultat : ils courent en permanence apr\u00e8s de nouveaux clients au lieu de <strong>construire une base stable</strong>.</p>" },
      { id: "7-3", type: "callout", variant: "tip", html: "<strong>Objectif :</strong> 60% de ton chiffre d'affaires devrait venir de clients existants (retainers + upsells). Si c'est moins, tu as un probl\u00e8me de fid\u00e9lisation, pas d'acquisition." },
      { id: "7-4", type: "separator", style: "dots" },

      { id: "7-5", type: "heading", level: 2, text: "Mettre en place un support structur\u00e9" },
      { id: "7-6", type: "steps", steps: [
        { title: "D\u00e9finir tes SLAs", description: "SLA = Service Level Agreement. D\u00e9finis clairement : d\u00e9lai de r\u00e9ponse (ex: 4h en semaine), d\u00e9lai de r\u00e9solution (ex: 24h bug mineur, 4h bug critique), heures de disponibilit\u00e9 (ex: lun-ven 9h-18h). \u00c9cris-le dans ton contrat." },
        { title: "Cr\u00e9er un canal d\u00e9di\u00e9", description: "Un email support@ ou un canal Slack/Discord d\u00e9di\u00e9 par client. Jamais de support par SMS ou WhatsApp personnel \u2014 tu ne pourras pas scaler." },
        { title: "Documenter les probl\u00e8mes", description: "Chaque ticket = date, description, gravit\u00e9, temps de r\u00e9solution, cause racine. Un simple Notion suffit. Ces donn\u00e9es te permettront de montrer ta valeur lors du renouvellement." },
        { title: "Rapport mensuel", description: "Chaque mois, envoie un email r\u00e9capitulatif : probl\u00e8mes r\u00e9solus, uptime, am\u00e9liorations faites, suggestions pour le mois prochain. C'est ce qui justifie ton retainer." },
      ]},
      { id: "7-7", type: "separator", style: "line" },

      { id: "7-8", type: "heading", level: 2, text: "Les 3 niveaux de retainer" },
      { id: "7-9", type: "comparison", headers: ["Niveau", "Inclus", "Prix indicatif"], rows: [
        { cells: ["Maintenance", "Monitoring + bug fixes + mises \u00e0 jour s\u00e9curit\u00e9", "200-500\u20ac/mois"] },
        { cells: ["Support actif", "Maintenance + am\u00e9liorations mineures + reporting", "500-1500\u20ac/mois"] },
        { cells: ["Partenariat", "Support actif + nouvelles fonctionnalit\u00e9s + conseil strat\u00e9gique", "1500-5000\u20ac/mois"] },
      ]},
      { id: "7-10", type: "text", html: "<p>Commence toujours par proposer le niveau <strong>Support actif</strong>. C'est le sweet spot : assez de valeur pour justifier le prix, pas trop de charge pour toi. Monte en <strong>Partenariat</strong> quand le client grandit.</p>" },
      { id: "7-11", type: "separator", style: "dots" },

      { id: "7-12", type: "heading", level: 2, text: "Upselling naturel : quand et comment proposer plus" },
      { id: "7-13", type: "text", html: "<p>L'upsell ne devrait jamais ressembler \u00e0 de la vente. Il devrait \u00eatre une <strong>recommandation naturelle</strong> bas\u00e9e sur ce que tu observes chez ton client.</p><ul><li><strong>Apr\u00e8s la livraison :</strong> \u00ab Maintenant que le chatbot fonctionne, je remarque que votre \u00e9quipe perd du temps sur [X]. On pourrait automatiser \u00e7a aussi. \u00bb</li><li><strong>Lors du rapport mensuel :</strong> \u00ab Le chatbot g\u00e8re 200 conversations/mois. Avec une int\u00e9gration CRM, vous pourriez convertir 15% de plus en leads qualifi\u00e9s. \u00bb</li><li><strong>Quand le client mentionne un probl\u00e8me :</strong> \u00c9coute activement. Si le probl\u00e8me entre dans tes comp\u00e9tences, propose une solution. Sinon, recommande quelqu'un (et fais jouer le r\u00e9seau).</li></ul>" },

      { id: "7-14", type: "checklist", title: "Checklist \u2014 Ton syst\u00e8me de fid\u00e9lisation", items: [
        { id: "c1", text: "SLAs d\u00e9finis et int\u00e9gr\u00e9s dans ton mod\u00e8le de contrat" },
        { id: "c2", text: "Canal de support d\u00e9di\u00e9 cr\u00e9\u00e9 (email pro ou Slack)" },
        { id: "c3", text: "Template de rapport mensuel pr\u00eat (Notion ou Google Doc)" },
        { id: "c4", text: "Grille de retainer avec 3 niveaux de prix" },
        { id: "c5", text: "Process d'upsell identifi\u00e9 pour chaque type de service" },
        { id: "c6", text: "Rappel calendrier : point trimestriel avec chaque client retainer" },
      ]},
    ]),
    exercise: "<p><strong>Exercice :</strong> (1) R\u00e9dige tes SLAs en t'appuyant sur les exemples de la le\u00e7on. (2) Cr\u00e9e ton template de rapport mensuel avec les sections : r\u00e9sum\u00e9, probl\u00e8mes r\u00e9solus, m\u00e9triques, recommandations. (3) D\u00e9finis ta grille de retainer avec tes 3 niveaux de prix adapt\u00e9s \u00e0 ton march\u00e9.</p>",
    quiz: [
      { type: "mcq", question: "Quel pourcentage de votre chiffre d'affaires devrait id\u00e9alement venir de clients existants ?", options: JSON.stringify(["20%", "40%", "60%", "90%"]), correctAnswer: "60%", explanation: "60% du CA devrait venir de clients existants (retainers + upsells). Si c'est moins, vous avez un probl\u00e8me de fid\u00e9lisation, pas d'acquisition. Un client fid\u00e8le co\u00fbte 5 \u00e0 7 fois moins cher qu'un nouveau." },
      { type: "true_false", question: "Le support client devrait \u00eatre g\u00e9r\u00e9 par WhatsApp personnel pour \u00eatre plus r\u00e9actif.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Jamais de support par SMS ou WhatsApp personnel \u2014 vous ne pourrez pas scaler. Utilisez un email support@ ou un canal Slack/Discord d\u00e9di\u00e9 par client." },
    ],
  },
];

