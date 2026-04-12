"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_PHONE } from "@/lib/constants";

const QUICK_QUESTIONS = [
  {
    q: "Par où commencer la formation ?",
    a: "Lance-toi avec le Module 1 : Découvrir l'IA. C'est la base pour tout comprendre. Ensuite suis les modules dans l'ordre, chaque phase s'appuie sur la précédente 🚀",
  },
  {
    q: "Combien de temps pour finir ?",
    a: "Environ 4 à 6 semaines en y consacrant 1 à 2h par jour. Mais va à ton rythme — mieux vaut bien comprendre que rusher les modules.",
  },
  {
    q: "Comment obtenir mon certificat ?",
    a: "Termine tous les modules de ta formule et valide les quiz. Ton certificat se débloque automatiquement dans l'onglet Certificats une fois que t'as tout complété ✅",
  },
  {
    q: "Je suis bloqué sur un module",
    a: "Pas de panique ! Relis la leçon une fois, tente le quiz sans pression. Si t'es toujours bloqué, réserve un appel coaching — on t'aide en direct.",
  },
  {
    q: "C'est quoi la différence Starter / Academy ?",
    a: "Starter = les 2 premiers modules pour découvrir. Academy = la formation complète (22 modules) + masterclass + pipeline clients. Le vrai package pour lancer ton agence.",
  },
  {
    q: "Comment contacter le support ?",
    a: "Envoie un mail à support@opexia-formation.com ou réserve un appel coaching directement depuis la plateforme. On répond sous 24h max.",
  },
];

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF1744, #D50000)",
              boxShadow: "0 8px 32px rgba(255,23,68,0.35), 0 2px 8px rgba(0,0,0,0.1)",
            }}
            aria-label="Aide rapide"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* FAQ Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden flex flex-col"
            style={{
              maxHeight: "min(520px, calc(100vh - 100px))",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #1A1A2E, #16162A)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">Aide rapide</h3>
                  <p className="text-[10px] text-white/50">Questions fr{"é"}quentes</p>
                </div>
              </div>
              <button
                onClick={() => { setOpen(false); setSelectedIdx(null); }}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Questions list */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              {QUICK_QUESTIONS.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setSelectedIdx(selectedIdx === idx ? null : idx)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedIdx === idx
                        ? "bg-[#FF1744]/5 text-[#FF1744] border border-[#FF1744]/20"
                        : "bg-gray-50 text-[#111] border border-transparent hover:bg-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{item.q}</span>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${selectedIdx === idx ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {selectedIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-3.5 py-3 text-sm text-gray-600 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-gray-100 px-4 py-3 bg-gray-50/50 space-y-2">
              <a
                href={WHATSAPP_PHONE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#1DA851] transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Nous contacter sur WhatsApp
              </a>
              <p className="text-[11px] text-gray-400 text-center">
                Besoin d{"'"}aide personnalis{"é"}e ?{" "}
                <a href="/coaching" className="text-[#FF1744] font-semibold hover:underline">
                  R{"é"}serve un appel coaching
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
