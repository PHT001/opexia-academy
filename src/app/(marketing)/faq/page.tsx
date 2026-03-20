import { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions fréquentes sur les formations Opexia.",
};

const faqItems = [
  {
    question: "J'ai pas de compétences techniques, c'est pour moi ?",
    answer: "Oui, absolument. Le programme est conçu pour les débutants complets. On part de zéro et on t'accompagne étape par étape. Pas besoin de savoir coder.",
  },
  {
    question: "C'est quoi Claude Code ?",
    answer: "Claude Code est l'outil de vibe coding d'Anthropic. Il te permet de construire des apps complètes en décrivant ce que tu veux. On t'apprend à le maîtriser pour créer des apps, des SaaS et des agents IA vendables.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer: "Le programme est conçu pour 30 jours à raison de 30-45 minutes par jour. Certains élèves trouvent leur premier client en seulement 2 semaines.",
  },
  {
    question: "Combien je peux gagner concrètement ?",
    answer: "Un agent IA se facture entre 500\u20ac et 3 000\u20ac. Avec un seul client par mois, tu peux générer 1 000\u20ac+ de revenus. Certains élèves facturent dès la deuxième semaine.",
  },
  {
    question: "Est-ce que c'est remboursable ?",
    answer: "Oui, tu as 14 jours pour tester la formation. Si ça ne te convient pas, on te rembourse intégralement. Sans condition, sans justification.",
  },
  {
    question: "Quelle est la différence entre les 3 formules ?",
    answer: "Starter te donne les bases (PDFs + guides). Academy te donne accès à la plateforme complète avec 74 leçons en 12 modules et quiz. One-to-One ajoute un accompagnement personnalisé avec les fondateurs.",
  },
  {
    question: "Est-ce que la formation est mise à jour ?",
    answer: "Oui, constamment. L'IA évolue vite et on met à jour les contenus régulièrement pour rester à la pointe. Toutes les mises à jour sont incluses à vie.",
  },
  {
    question: "Je peux annuler à tout moment ?",
    answer: "Oui, pas d'engagement. Tu peux annuler quand tu veux. Mais on est convaincus que tu n'en auras pas envie une fois que tu auras commencé.",
  },
  {
    question: "Comment fonctionne l'espace de formation ?",
    answer: "C'est une plateforme interactive type Duolingo. Tu progresses leçon par leçon, tu valides des quiz, tu gagnes des XP et des badges. Impossible de passer à la suite sans avoir compris la leçon en cours.",
  },
  {
    question: "J'ai une question qui n'est pas listée ici",
    answer: "Pas de souci ! Contacte-nous directement via la page Contact ou rejoins notre Discord. On répond en moins de 24h.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Questions fréquentes
          </h1>
          <p className="text-text-secondary text-lg">
            Tout ce que tu as besoin de savoir avant de te lancer.
          </p>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="max-w-xl mx-auto text-center mt-16">
          <p className="text-text-secondary mb-6">
            Tu n&apos;as pas trouvé ta réponse ?
          </p>
          <Button href="/contact" variant="secondary">
            Contacte-nous &rarr;
          </Button>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
