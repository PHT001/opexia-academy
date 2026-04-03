"use client";

import { useState } from "react";
import { useTierGate } from "@/hooks/useTierGate";

const COMING_SOON_MASTERCLASSES = [
  {
    id: "claude-code",
    title: "Masterclass Claude Code",
    description:
      "Apprends à coder des apps complètes avec Claude directement dans ton terminal. Vibe coding, debugging, déploiement — tout ce qu'il faut pour livrer des projets clients 10x plus vite.",
    speaker: "Équipe OpexIA",
    estimatedLessons: 5,
    estimatedDuration: "~2h",
    tags: ["Claude Code", "Terminal", "Vibe Coding", "GitHub"],
    icon: (
      <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    gradient: "from-purple-600/20 via-purple-900/40 to-[#0d0e1a]",
    accentColor: "purple",
  },
  {
    id: "openclaw",
    title: "Masterclass OpenClaw",
    description:
      "Déploie ton propre assistant IA multi-canal. Installation, configuration, messagerie, sécurité et comment le vendre comme service à tes clients.",
    speaker: "Équipe OpexIA",
    estimatedLessons: 7,
    estimatedDuration: "~3h",
    tags: ["OpenClaw", "Self-hosted", "Multi-canal", "Business"],
    icon: (
      <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
      </svg>
    ),
    gradient: "from-red-600/20 via-red-900/40 to-[#0d0e1a]",
    accentColor: "red",
  },
  {
    id: "automation",
    title: "Masterclass Automatisation & Agents",
    description:
      "Crée des agents IA autonomes qui travaillent pour toi. Workflows, intégrations API, automatisation de tâches répétitives — le guide complet pour scaler ton agence.",
    speaker: "Équipe OpexIA",
    estimatedLessons: 6,
    estimatedDuration: "~2h30",
    tags: ["Agents IA", "Automatisation", "API", "n8n"],
    icon: (
      <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    gradient: "from-cyan-600/20 via-cyan-900/40 to-[#0d0e1a]",
    accentColor: "cyan",
  },
];

export default function MasterclassPage() {
  const { isLocked, tier } = useTierGate(["academy", "one_to_one"]);
  const [notifyId, setNotifyId] = useState<Record<string, boolean>>({});

  const toggleNotify = (id: string) => {
    setNotifyId((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /* ── Locked view for free / starter ── */
  if (isLocked) {
    return (
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden" style={{ maxHeight: "calc(100vh - 80px)" }}>
        <div className="blur-[6px] pointer-events-none select-none opacity-60">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-[#111] mb-1">Masterclass</h1>
            <p className="text-sm text-gray-500">Formations vid{"é"}o compl{"è"}tes et sessions live exclusives.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 mb-8">
            {COMING_SOON_MASTERCLASSES.slice(0, 2).map((mc) => (
              <div key={mc.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] via-[#1e1f38] to-[#0d0e1a] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#111] mb-1">{mc.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">{mc.speaker}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{mc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8F9FA] to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-md mx-4">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#FF1744]/10 flex items-center justify-center mb-4">
              <svg className="h-7 w-7 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111] mb-2">Masterclass exclusives</h3>
            <p className="text-sm text-[#6B7280] mb-6">Acc{"è"}de aux masterclass vid{"é"}o et sessions live pour d{"é"}velopper ton agence IA.</p>
            <a href="/offres" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #FF1744, #D50000)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" }}>
              D{"é"}couvrir nos offres <span>{"\u2192"}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ── Unlocked view for academy / one_to_one — Coming Soon ── */
  return (
    <div className="w-full max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#111] mb-1">Masterclass</h1>
        <p className="text-sm text-gray-500">
          Formations vid{"é"}o compl{"è"}tes et sessions live exclusives pour d{"é"}velopper ton agence IA.
        </p>
      </div>

      {/* ── Coming Soon Banner ── */}
      <div className="relative overflow-hidden rounded-2xl mb-8" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 60%, #0F0F1E 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF1744]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full translate-y-1/2 blur-2xl" />
        <div className="relative z-10 p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1744]" />
            </span>
            <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest">En pr{"é"}paration</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">3 Masterclass arrivent bient{"ô"}t</h2>
          <p className="text-sm text-white/50 max-w-lg mx-auto">
            Notre {"é"}quipe pr{"é"}pare des formations vid{"é"}o compl{"è"}tes pour t{"'"}aider {"à"} ma{"î"}triser les outils IA les plus puissants. Active les notifications pour {"ê"}tre pr{"é"}venu d{"è"}s la sortie.
          </p>
        </div>
      </div>

      {/* ── Masterclass Cards ── */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Bient{"ô"}t disponibles</h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {COMING_SOON_MASTERCLASSES.map((mc, idx) => (
          <div key={mc.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all">
            {/* Video placeholder 16:9 */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${mc.gradient} flex items-center justify-center`}>
                {/* Center icon */}
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {mc.icon}
                </div>
                {/* Badge top-left */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 backdrop-blur-sm border border-amber-500/20">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
                  Bient{"ô"}t
                </span>
                {/* Duration bottom-right */}
                <span className="absolute bottom-3 right-3 text-[10px] text-white/50 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {mc.estimatedLessons} le{"ç"}ons · {mc.estimatedDuration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#FF1744] transition-colors">
                {mc.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium mb-2">{mc.speaker}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{mc.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {mc.tags.map((t) => (
                  <span key={t} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>

              {/* Notify CTA */}
              <button
                onClick={() => toggleNotify(mc.id)}
                className={`flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  notifyId[mc.id]
                    ? "bg-[#FF1744]/10 text-[#FF1744] border border-[#FF1744]/20"
                    : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                {notifyId[mc.id] ? (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>
                    Notification activ{"é"}e
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    Me pr{"é"}venir {"à"} la sortie
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Timeline / Roadmap ── */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Calendrier pr{"é"}visionnel</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200" />

          {[
            { month: "Avril 2026", label: "Masterclass Claude Code", status: "production", color: "purple" },
            { month: "Mai 2026", label: "Masterclass OpenClaw", status: "tournage", color: "red" },
            { month: "Juin 2026", label: "Masterclass Automatisation & Agents", status: "planification", color: "cyan" },
          ].map((item, i) => (
            <div key={i} className="relative mb-6 last:mb-0">
              <div className={`absolute -left-8 top-1 w-[22px] h-[22px] rounded-full border-4 border-white shadow-sm z-10 ${
                item.status === "production" ? "bg-purple-500" : item.status === "tournage" ? "bg-red-500" : "bg-gray-300"
              }`} />
              <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.month}</p>
                    <h3 className="text-sm font-semibold text-[#111]">{item.label}</h3>
                  </div>
                  <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                    item.status === "production"
                      ? "bg-purple-50 text-purple-600 border border-purple-200"
                      : item.status === "tournage"
                      ? "bg-red-50 text-red-500 border border-red-200"
                      : "bg-gray-50 text-gray-400 border border-gray-200"
                  }`}>
                    {item.status === "production" ? "En production" : item.status === "tournage" ? "Tournage" : "Planification"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom note ── */}
      <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 p-5 text-center">
        <p className="text-sm text-gray-500">
          {"🎬"} Les masterclass sont film{"é"}es et mont{"é"}es par l{"'"}{"é"}quipe OpexIA. Chaque module est test{"é"} en conditions r{"é"}elles avant publication.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Tu recevras un email + notification d{"è"}s qu{"'"}une masterclass est disponible.
        </p>
      </div>
    </div>
  );
}
