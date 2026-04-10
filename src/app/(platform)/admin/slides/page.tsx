"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const GREEN_MODULES = new Set([3, 4, 5, 6, 7]);
function mc(mod: number) { return GREEN_MODULES.has(mod) ? "#22C55E" : "#FF1744"; }

const SLIDES = [
  { file: "M1-L0-Bienvenue", module: 1, lesson: "L0", title: "Bienvenue - Ce qui t'attend" },
  { file: "M1-L2-Vibe-Coding", module: 1, lesson: "L2", title: "Le Vibe Coding" },
  { file: "M2-L2-Services-A-Vendre", module: 2, lesson: "L2", title: "Les services IA a vendre" },
  { file: "M2-L4-Plan-Lancement", module: 2, lesson: "L4", title: "Plan de lancement" },
  { file: "M3-L1-Bases-Prompting", module: 3, lesson: "L1", title: "Les bases du prompting" },
  { file: "M4-L1-Maitriser-Claude-Code", module: 4, lesson: "L1", title: "Maitriser Claude Code" },
  { file: "M5-L1-Git-Versionner", module: 5, lesson: "L1", title: "Git & versionner son code" },
  { file: "M6-L1-NextJS-React-Bases", module: 6, lesson: "L1", title: "Next.js & React - les bases" },
  { file: "M7-L1-Supabase-Backend", module: 7, lesson: "L1", title: "Supabase & Backend" },
  { file: "M8-L1-Chatbot-Custom", module: 8, lesson: "L1", title: "Chatbot IA custom" },
  { file: "M9-L1-Agent-Vocal-ElevenLabs", module: 9, lesson: "L1", title: "Agent vocal ElevenLabs" },
  { file: "M11-L1-Scraping-Intelligent", module: 11, lesson: "L1", title: "Scraping intelligent" },
  { file: "M13-L3-Build-MVP-48h", module: 13, lesson: "L3", title: "Build un MVP en 48h" },
  { file: "M17-L2-Offre-Pricing", module: 17, lesson: "L2", title: "Creer ton offre & pricing" },
  { file: "M19-L1-Closing-Call", module: 19, lesson: "L1", title: "L'appel de closing" },
  { file: "M22-L1-Scaler-10K", module: 22, lesson: "L1", title: "Scaler a 10K/mois" },
];

export default function AdminSlidesPage() {
  const [activeSlide, setActiveSlide] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (activeSlide && iframeRef.current) {
      const timer = setTimeout(() => iframeRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [activeSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveSlide(null);
  }, []);

  useEffect(() => {
    if (activeSlide) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeSlide, handleKeyDown]);

  const currentIndex = activeSlide ? SLIDES.findIndex((s) => s.file === activeSlide) : -1;
  const prevSlide = currentIndex > 0 ? SLIDES[currentIndex - 1] : null;
  const nextSlide = currentIndex < SLIDES.length - 1 ? SLIDES[currentIndex + 1] : null;

  // Navigate slides inside the presentation — direct DOM access (same-origin)
  const navigateSlide = useCallback((direction: "prev" | "next") => {
    try {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;
      const slides = doc.querySelectorAll("section.slide, .slide");
      if (!slides.length) return;

      // Find which slide is currently visible
      let visibleIdx = 0;
      slides.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        if (rect.top >= -100 && rect.top < 300) visibleIdx = i;
      });

      const targetIdx = direction === "next"
        ? Math.min(visibleIdx + 1, slides.length - 1)
        : Math.max(visibleIdx - 1, 0);

      slides[targetIdx].scrollIntoView({ behavior: "smooth" });
    } catch {
      // Fallback: try postMessage
      iframeRef.current?.contentWindow?.postMessage({ type: "slide-nav", direction }, "*");
    }
  }, []);

  /* ── Fullscreen viewer ── */
  if (activeSlide) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 h-12 bg-[#111827] border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setActiveSlide(null)}
              className="flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white transition-colors shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Retour
            </button>
            <div className="h-4 w-px bg-white/15 hidden sm:block" />
            <span className="text-[13px] text-white/50 hidden sm:inline truncate">
              {SLIDES.find((s) => s.file === activeSlide)?.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Slide nav (inside presentation) */}
            <button onClick={() => navigateSlide("prev")} className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" title="Diapo precedente">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={() => navigateSlide("next")} className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" title="Diapo suivante">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            {/* Presentation nav */}
            <button onClick={() => prevSlide && setActiveSlide(prevSlide.file)} disabled={!prevSlide} className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-default" title="Presentation precedente">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg>
            </button>
            <button onClick={() => nextSlide && setActiveSlide(nextSlide.file)} disabled={!nextSlide} className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-default" title="Presentation suivante">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <a href={`/slides/${activeSlide}.html`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-colors" title="Nouvel onglet">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
        {/* Iframe */}
        <iframe ref={iframeRef} src={`/slides/${activeSlide}.html`} className="flex-1 w-full border-0" title={activeSlide} tabIndex={0} onClick={() => iframeRef.current?.focus()} />
      </div>
    );
  }

  /* ── Grid view ── */
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Diapositives</h1>
      <p className="text-text-secondary mb-8">{SLIDES.length} presentations</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SLIDES.map((slide) => (
          <button
            key={slide.file}
            onClick={() => setActiveSlide(slide.file)}
            className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-150 text-left"
          >
            {/* Module number circle */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ backgroundColor: `${mc(slide.module)}20` }}>
              <span className="text-sm font-bold" style={{ color: mc(slide.module) }}>M{slide.module}</span>
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-white leading-snug truncate transition-colors">
                {slide.title}
              </p>
              <p className="text-[11px] text-white/40 mt-0.5">{slide.lesson}</p>
            </div>

            {/* Arrow */}
            <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
