"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ModuleProgress {
  id: string;
  title: string;
  order: number;
  totalLessons: number;
  completedLessons: number;
}

interface ProgressData {
  modules: ModuleProgress[];
}

const certificates = [
  {
    title: "Fondations IA",
    desc: "Tu maitrises les bases de l'IA et du prompt engineering.",
    modules: [1],
    modulesLabel: "Phase 1 — Module 1",
    icon: "\u{1F9E0}",
    color: "#10B981",
    colorLight: "rgba(16,185,129,0.08)",
  },
  {
    title: "Développeur IA",
    desc: "Tu sais développer avec l'IA, automatiser et construire des apps.",
    modules: [2, 3, 4, 5, 6],
    modulesLabel: "Phase 2 — Modules 2-6",
    icon: "\u26A1",
    color: "#3B82F6",
    colorLight: "rgba(59,130,246,0.08)",
  },
  {
    title: "Architecte Solutions",
    desc: "Tu maitrises l'architecture de solutions IA complexes.",
    modules: [7, 8, 9, 10, 11, 12, 13],
    modulesLabel: "Phase 3 — Modules 7-13",
    icon: "\u{1F4BC}",
    color: "#F59E0B",
    colorLight: "rgba(245,158,11,0.08)",
  },
  {
    title: "Sécurité & Production",
    desc: "Tu connais la sécurité, la conformité et le déploiement en production.",
    modules: [14, 15],
    modulesLabel: "Phase 4 — Modules 14-15",
    icon: "\u{1F6E1}\uFE0F",
    color: "#A855F7",
    colorLight: "rgba(168,85,247,0.08)",
  },
  {
    title: "Entrepreneur IA",
    desc: "Tu sais créer une offre, fixer tes prix et livrer un MVP.",
    modules: [16, 17, 18, 19],
    modulesLabel: "Phase 5 — Modules 16-19",
    icon: "\u{1F680}",
    color: "#EF4444",
    colorLight: "rgba(239,68,68,0.08)",
  },
  {
    title: "Scale & Mastery",
    desc: "Tu maitrises le scaling, la gestion avancée et les stratégies de croissance.",
    modules: [20, 21, 22],
    modulesLabel: "Phase 6 — Modules 20-22",
    icon: "\u{1F527}",
    color: "#06B6D4",
    colorLight: "rgba(6,182,212,0.08)",
  },
  {
    title: "Diplôme OpexIA Academy",
    desc: "Tu as complété l'intégralité de la formation. Bravo !",
    modules: Array.from({ length: 22 }, (_, i) => i + 1),
    modulesLabel: "Tous les modules",
    icon: "\u{1F393}",
    color: "#FF1744",
    colorLight: "rgba(255,23,68,0.08)",
  },
];

export default function CertificatsPage() {
  const [completedModuleOrders, setCompletedModuleOrders] = useState<Set<number>>(new Set());
  const [totalModules, setTotalModules] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data: ProgressData) => {
        if (data?.modules) {
          const completed = new Set<number>();
          let total = 0;
          for (const mod of data.modules) {
            total++;
            if (mod.totalLessons > 0 && mod.completedLessons >= mod.totalLessons) {
              completed.add(mod.order);
            }
          }
          setCompletedModuleOrders(completed);
          setTotalModules(total);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const completedModules = completedModuleOrders;

  const unlockedCount = certificates.filter((cert) =>
    cert.modules.every((m) => completedModules.has(m))
  ).length;

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-[#FF1744] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
          Certificats
        </h1>
        <p className="text-sm text-gray-500">
          Complète des modules pour débloquer tes certificats et diplômes.
        </p>
      </div>

      {/* Stats bar */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6 flex flex-wrap items-center gap-6">
        <div>
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            Certificats débloqués
          </p>
          <p className="text-2xl font-black text-gray-900">
            {unlockedCount}
            <span className="text-sm font-normal text-gray-400">
              /{certificates.length}
            </span>
          </p>
        </div>
        <div className="h-10 w-px bg-gray-100 hidden sm:block" />
        <div>
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            Modules complétés
          </p>
          <p className="text-2xl font-black text-gray-900">
            {completedModules.size}
            <span className="text-sm font-normal text-gray-400">/22</span>
          </p>
        </div>
        <div className="flex-1" />
        <div className="w-full sm:w-48">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF1744] to-[#FF5252] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(completedModules.size / 22) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="text-[9px] text-gray-400 mt-1 text-right">
            {Math.round((completedModules.size / 22) * 100)}% de la formation
          </p>
        </div>
      </div>

      {/* Certificates grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, i) => {
          const completedCount = cert.modules.filter((m) => completedModules.has(m)).length;
          const totalCount = cert.modules.length;
          const isUnlocked = completedCount === totalCount;
          const progressPct = (completedCount / totalCount) * 100;

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`relative bg-white rounded-2xl border shadow-sm p-6 transition-all ${
                isUnlocked
                  ? "border-gray-200 hover:shadow-md hover:-translate-y-0.5"
                  : "border-gray-100 opacity-60"
              }`}
            >
              {/* Unlocked badge */}
              {isUnlocked && (
                <div className="absolute top-3 right-3">
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: cert.colorLight, color: cert.color }}
                  >
                    Obtenu
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: cert.colorLight }}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-[10px] text-gray-400">{cert.modulesLabel}</p>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                {cert.desc}
              </p>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progressPct}%`,
                      backgroundColor: cert.color,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[10px] text-gray-400">
                  {completedCount}/{totalCount} modules
                </p>
                {isUnlocked ? (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1" style={{ color: cert.color }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[10px] font-semibold">Complété</span>
                    </div>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://opexia.fr")}&title=${encodeURIComponent(`J'ai obtenu le certificat "${cert.title}" sur OpexIA Academy !`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-semibold text-[#0077B5] bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                      title="Partager sur LinkedIn"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Partager
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-gray-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-[10px] text-gray-400">Verrouillé</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
