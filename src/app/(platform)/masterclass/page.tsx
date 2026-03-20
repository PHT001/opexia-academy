"use client";

import { useState } from "react";

const MASTERCLASSES = [
  {
    id: "claude-code",
    title: "Masterclass Claude Code",
    description:
      "Apprends à coder des apps complètes avec Claude directement dans ton terminal. Vibe coding, debugging, déploiement — tout ce qu'il faut pour livrer des projets clients 10x plus vite.",
    speaker: "Équipe OpexIA",
    lessons: 5,
    duration: "~2h",
    tags: ["Claude Code", "Terminal", "Vibe Coding", "GitHub"],
    href: "/lessons",
  },
  {
    id: "openclaw",
    title: "Masterclass OpenClaw",
    description:
      "Déploie ton propre assistant IA multi-canal. Installation, configuration, messagerie, sécurité et comment le vendre comme service à tes clients.",
    speaker: "Équipe OpexIA",
    lessons: 7,
    duration: "~3h",
    tags: ["OpenClaw", "Self-hosted", "Multi-canal", "Business"],
    href: "/lessons",
  },
];

const UPCOMING = [
  {
    id: "live-1",
    title: "Trouver ses 5 premiers clients en 30 jours",
    date: "12 Avril 2026",
    speaker: "Fondateurs OpexIA",
    duration: "1h30",
    tags: ["Prospection", "Cold outreach", "Closing"],
  },
  {
    id: "live-2",
    title: "Construire un agent IA qui génère du revenu",
    date: "19 Avril 2026",
    speaker: "Invité expert",
    duration: "1h",
    tags: ["Agents IA", "Demo live", "Retainer"],
  },
  {
    id: "live-3",
    title: "De 0 à 10K€/mois — Retour d'expérience",
    date: "3 Mai 2026",
    speaker: "Membre communauté",
    duration: "1h",
    tags: ["Retour d'expérience", "Scaling", "Inspiration"],
  },
];

export default function MasterclassPage() {
  const [notified, setNotified] = useState<Record<string, boolean>>({});
  const [sujet, setSujet] = useState("");
  const [sujetSent, setSujetSent] = useState(false);

  const toggleNotify = (id: string) => {
    setNotified((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSujet = () => {
    if (!sujet.trim()) return;
    setSujetSent(true);
    setSujet("");
    setTimeout(() => setSujetSent(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#111] mb-1">
          Masterclass
        </h1>
        <p className="text-sm text-gray-500">
          Formations vidéo complètes et sessions live exclusives pour
          développer ton agence IA.
        </p>
      </div>

      {/* ── Section: Masterclasses disponibles ── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Masterclasses disponibles
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {MASTERCLASSES.map((mc) => (
            <div
              key={mc.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
            >
              {/* Video placeholder 16:9 */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] via-[#1e1f38] to-[#0d0e1a] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-7 h-7 text-white ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* Badge top-left */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                    Disponible
                  </span>
                  {/* Duration bottom-right */}
                  <span className="absolute bottom-3 right-3 text-[10px] text-white/70 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {mc.lessons} leçons · {mc.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#FF1744] transition-colors">
                  {mc.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-2">
                  {mc.speaker}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {mc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mc.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={mc.href}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] transition-colors shadow-sm"
                >
                  Accéder
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section: Prochaines sessions live ── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Prochaines sessions live
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="space-y-3">
          {UPCOMING.map((live) => (
            <div
              key={live.id}
              className="group bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Date column */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-orange-50 border border-orange-200/50 flex flex-col items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-500 mb-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="text-[8px] font-bold text-orange-600 uppercase leading-none">
                    Live
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-[#111] group-hover:text-[#FF1744] transition-colors truncate">
                      {live.title}
                    </h3>
                    <span className="flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 border border-orange-200/50">
                      Bientôt
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span className="font-medium text-gray-600">
                      {live.date}
                    </span>
                    <span>·</span>
                    <span>{live.speaker}</span>
                    <span>·</span>
                    <span>{live.duration}</span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {live.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notify button */}
                <button
                  onClick={() => toggleNotify(live.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 text-[11px] font-semibold px-3 py-2 rounded-lg transition-all ${
                    notified[live.id]
                      ? "bg-[#FF1744]/10 text-[#FF1744] border border-[#FF1744]/20"
                      : "text-gray-400 border border-gray-200 hover:bg-gray-50 hover:text-gray-600"
                  }`}
                >
                  {notified[live.id] ? (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                      </svg>
                      Notifié
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      Me notifier
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section: Proposer un sujet ── */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Proposer un sujet
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-3">
            Un sujet que tu aimerais voir en masterclass ou en live ? Propose-le
            et on l&apos;ajoutera au programme.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSujet()}
              placeholder="Ex: Comment automatiser le support client avec un agent IA..."
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
            />
            <button
              onClick={handleSujet}
              disabled={!sujet.trim()}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                sujet.trim()
                  ? "bg-[#FF1744] text-white hover:bg-[#D50000]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              Envoyer
            </button>
          </div>
          {sujetSent && (
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200/50 rounded-lg px-3 py-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Merci ! Ta suggestion a bien été envoyée.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
