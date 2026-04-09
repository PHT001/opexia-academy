"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

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
        <div className="flex items-center justify-between px-4 py-2 bg-[#0D0D1A] border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveSlide(null)}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Retour
            </button>
            <span className="text-sm font-semibold text-white">
              {SLIDES.find((s) => s.file === activeSlide)?.title}
            </span>
            <span className="text-xs text-white/30 ml-2">
              {currentIndex + 1}/{SLIDES.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Prev / Next presentation */}
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
              Nouvel onglet
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
        {/* Iframe — click to focus for keyboard nav */}
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
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diapositives</h1>
          <p className="text-text-secondary">{SLIDES.length} presentations pour les videos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SLIDES.map((slide) => (
          <button
            key={slide.file}
            onClick={() => setActiveSlide(slide.file)}
            className="text-left"
          >
            <GlassCard className="p-5 cursor-pointer hover:border-[#FF1744]/40 hover:shadow-lg hover:shadow-[#FF1744]/5 transition-all group h-full">
              {/* Module badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded-full uppercase">
                  Module {slide.module}
                </span>
                <span className="text-[10px] font-mono text-white/30">{slide.lesson}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-white group-hover:text-[#FF1744] transition-colors mb-2">
                {slide.title}
              </h3>

              {/* Preview hint */}
              <div className="flex items-center gap-1.5 text-[11px] text-white/30">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Cliquer pour ouvrir
              </div>
            </GlassCard>
          </button>
        ))}
      </div>
    </div>
  );
}
