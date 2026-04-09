"use client";

import { useState, useRef, useEffect, useCallback } from "react";

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

  // Auto-focus iframe so keyboard nav works immediately
  useEffect(() => {
    if (activeSlide && iframeRef.current) {
      const timer = setTimeout(() => iframeRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [activeSlide]);

  // Escape to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveSlide(null);
  }, []);

  useEffect(() => {
    if (activeSlide) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeSlide, handleKeyDown]);

  // Navigate between slides with prev/next
  const currentIndex = activeSlide ? SLIDES.findIndex((s) => s.file === activeSlide) : -1;
  const prevSlide = currentIndex > 0 ? SLIDES[currentIndex - 1] : null;
  const nextSlide = currentIndex < SLIDES.length - 1 ? SLIDES[currentIndex + 1] : null;

  if (activeSlide) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0D0D1A] border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => setActiveSlide(null)}
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="hidden sm:inline">Retour</span>
            </button>
            <span className="text-sm font-semibold text-white truncate">
              {SLIDES.find((s) => s.file === activeSlide)?.title}
            </span>
            <span className="text-xs text-white/30 shrink-0">
              {currentIndex + 1}/{SLIDES.length}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1">
              <button
                onClick={() => prevSlide && setActiveSlide(prevSlide.file)}
                disabled={!prevSlide}
                className="p-1.5 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-default"
                title="Presentation precedente"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={() => nextSlide && setActiveSlide(nextSlide.file)}
                disabled={!nextSlide}
                className="p-1.5 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-default"
                title="Presentation suivante"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
            <a
              href={`/slides/${activeSlide}.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="hidden sm:inline">Nouvel onglet</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
        {/* Iframe */}
        <iframe
          ref={iframeRef}
          src={`/slides/${activeSlide}.html`}
          className="flex-1 w-full border-0"
          title={activeSlide}
          tabIndex={0}
          onClick={() => iframeRef.current?.focus()}
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#111] dark:text-white mb-1">Diapositives</h1>
        <p className="text-sm text-gray-500 dark:text-white/40">{SLIDES.length} presentations disponibles</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {SLIDES.map((slide) => (
          <button
            key={slide.file}
            onClick={() => setActiveSlide(slide.file)}
            className="group text-left rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] hover:border-[#FF1744]/40 hover:shadow-lg hover:shadow-[#FF1744]/5 transition-all duration-200 overflow-hidden"
          >
            {/* Slide preview placeholder */}
            <div className="relative h-28 sm:h-32 bg-gradient-to-br from-[#0D0D1A] to-[#1a1a3e] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-3 left-4 w-16 h-1.5 rounded bg-white/40" />
                <div className="absolute top-7 left-4 w-24 h-1 rounded bg-white/20" />
                <div className="absolute top-10 left-4 w-20 h-1 rounded bg-white/15" />
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/20" />
              </div>
              <div className="text-center z-10">
                <span className="text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Module {slide.module}
                </span>
              </div>
              {/* Play icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-200 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                    <polygon points="8 5 20 12 8 19 8 5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="px-4 py-3">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono text-gray-400 dark:text-white/30">{slide.lesson}</span>
              </div>
              <h3 className="text-[13px] sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#FF1744] transition-colors leading-snug">
                {slide.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
