"use client";

import { useState } from "react";
import LessonArticleLayout from "@/components/lesson-blocks/LessonArticleLayout";
import LessonBlockRenderer from "@/components/lesson-blocks/LessonBlockRenderer";
import { parseLessonBlocks } from "@/lib/parseLessonContent";

// ── Inline lesson content (Lesson 1 of Module 1) ──
const DEMO_LESSONS = [
  {
    order: 1,
    title: "L'IA en 2025 : ce que ça change pour toi",
    slug: "preview-l1",
    duration: "20 min",
    moduleTitle: "Découvrir l'IA & les opportunités",
    moduleOrder: 1,
    content: JSON.stringify([
      { id: "1-1", type: "heading", level: 2, text: "L'IA n'est plus un gadget" },
      { id: "1-2", type: "text", html: "<p>En 2025, l'intelligence artificielle n'est plus un truc de geeks ou un buzzword. C'est un <strong>outil de travail concret</strong> utilisé chaque jour par des millions de professionnels pour écrire, coder, analyser, vendre, automatiser.</p><p>Et pourtant, <strong>95% des entreprises n'ont encore rien mis en place</strong>. Pas de chatbot, pas d'automatisation, pas d'IA dans leurs process. Elles savent que ça existe, elles ne savent pas comment s'y prendre.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "C'est exactement là que tu interviens. Tu vas devenir la personne qui installe l'IA dans les entreprises. Et elles vont te payer pour ça." },
      { id: "1-4", type: "separator", style: "dots" },
      { id: "1-5", type: "heading", level: 2, text: "Le marché de l'IA en chiffres" },
      { id: "1-6", type: "comparison", headers: ["Indicateur", "2023", "2025"], rows: [
        { cells: ["Marché mondial de l'IA", "150 milliards $", "300+ milliards $"] },
        { cells: ["Entreprises utilisant l'IA", "35%", "72%"] },
        { cells: ["Freelances / agences IA", "Quasi inexistant", "Explosion de la demande"] },
        { cells: ["Salaire moyen consultant IA", "~50K€/an", "~80-120K€/an"] },
      ]},
      { id: "1-7", type: "text", html: "<p>La demande explose, mais l'offre ne suit pas. Les entreprises cherchent des prestataires capables de les aider — et il n'y en a pas assez. C'est une <strong>fenêtre d'opportunité</strong> qui ne va pas durer éternellement.</p>" },
      { id: "1-8", type: "heading", level: 2, text: "Pourquoi maintenant ?" },
      { id: "1-9", type: "diagram", variant: "timeline", nodes: [
        { id: "t1", label: "2022", description: "ChatGPT sort — le grand public découvre l'IA" },
        { id: "t2", label: "2023", description: "GPT-4 et Claude 2 — les modèles deviennent utilisables pour bosser" },
        { id: "t3", label: "2024", description: "Claude 3.5 Sonnet, agents IA — l'automatisation avancée arrive" },
        { id: "t4", label: "2025", description: "Tu es ici. Les outils sont matures. Les entreprises veulent payer." },
        { id: "t5", label: "2026-2027", description: "Le marché sera saturé. Les premiers arrivés auront raflé les clients." },
      ]},
      { id: "1-10", type: "callout", variant: "warning", html: "Dans 2 ans, lancer une agence IA sera comme lancer une agence web en 2020 — possible, mais tu seras en retard. Le moment c'est maintenant." },
      { id: "1-11", type: "separator", style: "line" },
      { id: "1-12", type: "heading", level: 2, text: "Ce que tu vas apprendre dans cette formation" },
      { id: "1-13", type: "steps", steps: [
        { title: "Maîtriser l'IA", description: "Utiliser Claude et les outils IA comme un pro, pas comme un touriste." },
        { title: "Construire des solutions", description: "Créer des chatbots, des automatisations, des sites web, des agents IA." },
        { title: "Vendre tes services", description: "Trouver des clients, closer des deals, livrer des projets." },
        { title: "Scaler ton business", description: "Passer de freelance solo à agence rentable." },
      ]},
      { id: "1-14", type: "text", html: "<p>Chaque module est conçu pour que tu aies un <strong>résultat concret à la fin</strong>. Pas de théorie inutile. Tu apprends, tu fais, tu avances.</p>" },
      { id: "1-15", type: "quiz-inline", question: "Quel est le principal avantage de se lancer dans l'IA maintenant ?", options: [
        { id: "a", text: "Les outils sont gratuits" },
        { id: "b", text: "La demande est forte et l'offre encore faible" },
        { id: "c", text: "Il n'y a pas besoin de compétences techniques" },
      ], correctId: "b", explanation: "Le marché est en pleine explosion mais il y a encore peu de prestataires qualifiés. C'est une fenêtre d'opportunité." },
      { id: "1-16", type: "separator", style: "dots" },
      { id: "1-17", type: "heading", level: 2, text: "Checklist de démarrage" },
      { id: "1-18", type: "checklist", title: "Avant de passer à la leçon suivante", items: [
        { id: "c1", text: "J'ai compris pourquoi l'IA est une opportunité business" },
        { id: "c2", text: "Je sais que le timing est crucial (2025 = fenêtre idéale)" },
        { id: "c3", text: "Je suis motivé pour apprendre et construire" },
      ]},
    ]),
  },
  {
    order: 2,
    title: "Les outils du marché : ChatGPT, Claude, Gemini, Mistral",
    slug: "preview-l2",
    duration: "25 min",
    moduleTitle: "Découvrir l'IA & les opportunités",
    moduleOrder: 1,
    content: JSON.stringify([
      { id: "2-1", type: "heading", level: 2, text: "Tous les modèles ne se valent pas" },
      { id: "2-2", type: "text", html: "<p>Quand on parle d'IA, on pense souvent à <strong>ChatGPT</strong>. Mais en 2025, le paysage est beaucoup plus riche. Chaque modèle a ses forces, ses faiblesses, et ses cas d'usage optimaux.</p><p>Pour devenir un vrai pro de l'IA, tu dois connaître les outils disponibles et savoir <strong>quand utiliser lequel</strong>.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Un bon consultant IA ne jure pas par un seul outil. Il choisit le bon outil pour le bon job." },
      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Les 4 modèles majeurs en 2025" },
      { id: "2-6", type: "comparison", headers: ["Modèle", "Force principale", "Idéal pour"], rows: [
        { cells: ["ChatGPT (GPT-4o)", "Polyvalent, plugins", "Usage grand public, brainstorming"] },
        { cells: ["Claude (Anthropic)", "Raisonnement, code, longs contextes", "Travail pro, dev, analyse"] },
        { cells: ["Gemini (Google)", "Multimodal, intégration Google", "Recherche, data, Google Workspace"] },
        { cells: ["Mistral (France)", "Open-source, souveraineté", "Projets sensibles, on-premise"] },
      ]},
      { id: "2-7", type: "text", html: "<p>Dans cette formation, on utilise principalement <strong>Claude</strong> parce que c'est le plus performant pour le travail professionnel : raisonnement complexe, écriture de code, analyse de documents longs.</p>" },
      { id: "2-8", type: "heading", level: 2, text: "Claude vs ChatGPT — Le match" },
      { id: "2-9", type: "comparison", headers: ["Critère", "Claude", "ChatGPT"], rows: [
        { cells: ["Qualité de raisonnement", "Excellent", "Très bon"] },
        { cells: ["Écriture de code", "Supérieur", "Bon"] },
        { cells: ["Contexte long (100K+ tokens)", "Natif", "Limité"] },
        { cells: ["Plugins / browsing", "Non", "Oui (GPT-4o)"] },
        { cells: ["Prix pro", "~20$/mois", "~20$/mois"] },
        { cells: ["API pour devs", "Excellent", "Bon"] },
      ]},
      { id: "2-10", type: "callout", variant: "tip", html: "Conseil : abonne-toi à <strong>Claude Pro</strong> (20$/mois). C'est l'investissement le plus rentable que tu feras dans cette formation. Tu peux aussi tester ChatGPT Plus en parallèle." },
      { id: "2-11", type: "separator", style: "line" },
      { id: "2-12", type: "heading", level: 2, text: "Les outils complémentaires" },
      { id: "2-13", type: "steps", steps: [
        { title: "Cursor / Windsurf", description: "Éditeurs de code boostés à l'IA — tu codes 10x plus vite." },
        { title: "v0.dev / Bolt", description: "Générateurs d'interfaces — tu décris, ça code le frontend." },
        { title: "Make / n8n", description: "Automatisation no-code — tu connectes les outils entre eux." },
        { title: "Supabase", description: "Backend as a service — base de données + auth + API en 5 min." },
      ]},
      { id: "2-14", type: "text", html: "<p>Tu n'as pas besoin de tous les maîtriser maintenant. On les découvrira <strong>un par un</strong> dans les modules suivants, avec des projets concrets à chaque fois.</p>" },
      { id: "2-15", type: "quiz-inline", question: "Quel modèle est recommandé comme outil principal dans cette formation ?", options: [
        { id: "a", text: "ChatGPT" },
        { id: "b", text: "Claude" },
        { id: "c", text: "Gemini" },
        { id: "d", text: "Mistral" },
      ], correctId: "b", explanation: "Claude est recommandé pour le travail professionnel grâce à son raisonnement supérieur, sa qualité de code, et sa capacité à traiter de longs documents." },
      { id: "2-16", type: "separator", style: "dots" },
      { id: "2-17", type: "heading", level: 2, text: "Ta checklist outils" },
      { id: "2-18", type: "checklist", title: "Prépare ton setup", items: [
        { id: "c1", text: "Créer un compte Claude (claude.ai)" },
        { id: "c2", text: "Tester un prompt simple avec Claude" },
        { id: "c3", text: "Comparer la même question sur ChatGPT et Claude" },
        { id: "c4", text: "Installer Cursor ou Windsurf (on l'utilisera au Module 3)" },
      ]},
    ]),
  },
  {
    order: 3,
    title: "Tes premiers prompts : de débutant à efficace en 1h",
    slug: "preview-l3",
    duration: "30 min",
    moduleTitle: "Découvrir l'IA & les opportunités",
    moduleOrder: 1,
    content: JSON.stringify([
      { id: "3-1", type: "heading", level: 2, text: "Le prompt, c'est ton super-pouvoir" },
      { id: "3-2", type: "text", html: "<p>La différence entre quelqu'un qui \"utilise l'IA\" et quelqu'un qui <strong>obtient des résultats exceptionnels</strong> avec l'IA, c'est la qualité de ses prompts.</p><p>Un bon prompt transforme une réponse générique en un <strong>livrable professionnel</strong>. Et ça s'apprend en quelques règles simples.</p>" },
      { id: "3-3", type: "callout", variant: "warning", html: "80% des gens tapent des prompts vagues et obtiennent des résultats moyens. Puis ils disent que \"l'IA c'est nul\". Le problème c'est pas l'IA, c'est le prompt." },
      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "La méthode RICE pour des prompts efficaces" },
      { id: "3-6", type: "steps", steps: [
        { title: "Rôle", description: "Dis à l'IA qui elle est. Ex: \"Tu es un expert en marketing digital spécialisé B2B.\"" },
        { title: "Instruction", description: "Sois précis sur ce que tu veux. Ex: \"Rédige 3 accroches LinkedIn pour vendre un chatbot IA.\"" },
        { title: "Contexte", description: "Donne les infos nécessaires. Ex: \"Ma cible : PME de 10-50 salariés, secteur retail.\"" },
        { title: "Exemples", description: "Montre ce que tu veux. Ex: \"Voici une accroche qui a bien marché : [exemple]\"" },
      ]},
      { id: "3-7", type: "heading", level: 3, text: "Exemple concret" },
      { id: "3-8", type: "code", language: "text", filename: "prompt-basique.txt", code: "Écris-moi un email pour vendre mes services." },
      { id: "3-9", type: "callout", variant: "warning", html: "Ce prompt va donner un résultat générique, fade, inutilisable." },
      { id: "3-10", type: "code", language: "text", filename: "prompt-rice.txt", code: "Tu es un copywriter spécialisé en cold email B2B.\n\nÉcris un email de prospection pour vendre un service de chatbot IA\nà des e-commerces qui font entre 500K et 5M€ de CA.\n\nTon : direct, pas corporate, orienté résultat.\nObjectif : obtenir un appel de 15 min.\nContrainte : max 150 mots.\n\nExemple de ton que j'aime :\n\"Salut [prénom], je vois que votre site reçoit du trafic\nmais votre support client répond en 24h. Et si un chatbot\nrépondait en 3 secondes, 24/7 ?\"" },
      { id: "3-11", type: "callout", variant: "success", html: "Ce prompt va donner un email précis, actionnable, prêt à envoyer." },
      { id: "3-12", type: "separator", style: "line" },
      { id: "3-13", type: "heading", level: 2, text: "Les erreurs classiques" },
      { id: "3-14", type: "comparison", headers: ["Erreur", "Pourquoi c'est un problème", "Solution"], rows: [
        { cells: ["Prompt trop vague", "L'IA devine et donne du générique", "Ajouter contexte + contraintes"] },
        { cells: ["Pas de rôle", "L'IA répond comme un assistant basique", "Commencer par \"Tu es un...\""] },
        { cells: ["Tout en un seul message", "Trop d'infos = confusion", "Découper en étapes"] },
        { cells: ["Pas d'exemple", "L'IA ne sait pas le format attendu", "Montrer un exemple du résultat voulu"] },
      ]},
      { id: "3-15", type: "quiz-inline", question: "Quel élément de la méthode RICE a le plus d'impact sur la qualité du résultat ?", options: [
        { id: "a", text: "Le Rôle seul suffit" },
        { id: "b", text: "L'Instruction précise avec du Contexte" },
        { id: "c", text: "Les Exemples uniquement" },
      ], correctId: "b", explanation: "L'instruction précise combinée au contexte est ce qui fait la plus grosse différence. Le rôle et les exemples amplifient le résultat, mais sans instruction claire + contexte, le résultat sera toujours moyen." },
      { id: "3-16", type: "separator", style: "dots" },
      { id: "3-17", type: "heading", level: 2, text: "Checklist prompting" },
      { id: "3-18", type: "checklist", title: "Valide tes acquis", items: [
        { id: "c1", text: "J'ai testé un prompt vague vs un prompt RICE sur Claude" },
        { id: "c2", text: "J'ai écrit 3 prompts avec la méthode RICE" },
        { id: "c3", text: "Je comprends pourquoi le contexte est crucial" },
      ]},
    ]),
  },
];

export default function PreviewLessonPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const lesson = DEMO_LESSONS[currentIdx];
  const blocks = parseLessonBlocks(lesson.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Lesson selector */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="max-w-[720px] mx-auto flex items-center gap-2 overflow-x-auto">
          {DEMO_LESSONS.map((l, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIdx(i); window.scrollTo(0, 0); }}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                i === currentIdx
                  ? "bg-[#FF1744] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Leçon {l.order}
            </button>
          ))}
          <span className="shrink-0 text-xs text-gray-400 pl-2">
            Preview — pas de login requis
          </span>
        </div>
      </div>

      <LessonArticleLayout
        moduleTitle={`Module ${lesson.moduleOrder} — ${lesson.moduleTitle}`}
        lessonNumber={lesson.order}
        lessonTitle={lesson.title}
        duration={lesson.duration}
        footer={
          <div className="flex items-center justify-between">
            {currentIdx > 0 ? (
              <button
                onClick={() => { setCurrentIdx(currentIdx - 1); window.scrollTo(0, 0); }}
                className="text-gray-500 hover:text-gray-900 text-sm font-medium flex items-center gap-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                Leçon précédente
              </button>
            ) : <div />}
            {currentIdx < DEMO_LESSONS.length - 1 ? (
              <button
                onClick={() => { setCurrentIdx(currentIdx + 1); window.scrollTo(0, 0); }}
                className="bg-[#FF1744] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#D50000] transition-colors flex items-center gap-1"
              >
                Leçon suivante
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            ) : (
              <span className="text-sm text-gray-500 font-medium">Fin de la preview</span>
            )}
          </div>
        }
      >
        <LessonBlockRenderer blocks={blocks} lessonSlug={lesson.slug} />
      </LessonArticleLayout>
    </div>
  );
}
