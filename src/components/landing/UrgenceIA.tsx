"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ── Radar Chart data ── */
const radarSectors = [
  { name: "Finance", potential: 0.95, observed: 0.35 },
  { name: "Informatique", potential: 0.92, observed: 0.55 },
  { name: "Ingénierie", potential: 0.78, observed: 0.30 },
  { name: "Sciences", potential: 0.65, observed: 0.25 },
  { name: "Juridique", potential: 0.88, observed: 0.20 },
  { name: "Éducation", potential: 0.60, observed: 0.15 },
  { name: "Arts & Médias", potential: 0.72, observed: 0.40 },
  { name: "Santé", potential: 0.58, observed: 0.12 },
  { name: "Vente", potential: 0.82, observed: 0.28 },
  { name: "Marketing", potential: 0.90, observed: 0.45 },
  { name: "RH", potential: 0.70, observed: 0.18 },
  { name: "Logistique", potential: 0.68, observed: 0.22 },
];

const CX = 200;
const CY = 200;
const R = 150;

function polarToXY(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function buildPolygon(data: typeof radarSectors, key: "potential" | "observed") {
  const step = 360 / data.length;
  return data
    .map((d, i) => {
      const { x, y } = polarToXY(i * step, d[key] * R);
      return `${x},${y}`;
    })
    .join(" ");
}

function pointsToPath(data: typeof radarSectors, key: "potential" | "observed", progress: number) {
  const step = 360 / data.length;
  return data.map((d, i) => {
    const val = d[key] * progress;
    const { x, y } = polarToXY(i * step, val * R);
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ") + "Z";
}

function RadarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progress, setProgress] = useState(0);
  const [showObserved, setShowObserved] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    // Animate potential from 0 to 1
    let start: number;
    const duration = 1500;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
      if (p < 1) requestAnimationFrame(animate);
      else setTimeout(() => setShowObserved(true), 200);
    };
    requestAnimationFrame(animate);
  }, [isInView]);

  const [obsProgress, setObsProgress] = useState(0);
  useEffect(() => {
    if (!showObserved) return;
    let start: number;
    const duration = 1200;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setObsProgress(eased);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [showObserved]);

  const n = radarSectors.length;
  const step = 360 / n;
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div ref={ref}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-gray-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        <div className="px-6 pt-6 pb-1">
          <p className="text-lg font-bold text-[#111] text-center">
            Impact de l&apos;IA par secteur
          </p>
          <p className="text-xs text-gray-400 text-center mt-1">
            <span className="text-[#4285F4] font-semibold">Potentiel</span> vs <span className="text-[#FF1744] font-semibold">R&eacute;alit&eacute;</span> &mdash; 2026
          </p>
        </div>

        <div className="flex justify-center px-4 py-2">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px]">
            {/* Grid rings */}
            {rings.map((r, ri) => (
              <polygon
                key={r}
                points={Array.from({ length: n }, (_, i) => {
                  const { x, y } = polarToXY(i * step, r * R);
                  return `${x},${y}`;
                }).join(" ")}
                fill="none"
                stroke={ri === rings.length - 1 ? "#C0C0C0" : "#E5E7EB"}
                strokeWidth={ri === rings.length - 1 ? "1" : "0.5"}
              />
            ))}

            {/* Axis lines + labels */}
            {radarSectors.map((s, i) => {
              const angle = i * step;
              const end = polarToXY(angle, R);
              const label = polarToXY(angle, R + 26);
              return (
                <g key={s.name}>
                  <line x1={CX} y1={CY} x2={end.x} y2={end.y} stroke="#E5E7EB" strokeWidth="0.5" />
                  <text
                    x={label.x}
                    y={label.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="9"
                    fontWeight="600"
                    className="fill-gray-600"
                  >
                    {s.name}
                  </text>
                </g>
              );
            })}

            {/* Potential area (blue) — draws out from center on scroll */}
            <path
              d={pointsToPath(radarSectors, "potential", progress)}
              fill="rgba(66,133,244,0.15)"
              stroke="#4285F4"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Observed area (red) — draws after blue is done */}
            {showObserved && (
              <path
                d={pointsToPath(radarSectors, "observed", obsProgress)}
                fill="rgba(255,23,68,0.12)"
                stroke="#FF1744"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            )}

            {/* Dots potential */}
            {radarSectors.map((s, i) => {
              const { x, y } = polarToXY(i * step, s.potential * progress * R);
              return (
                <circle
                  key={`p-${i}`}
                  cx={x} cy={y} r="3.5"
                  fill="white" stroke="#4285F4" strokeWidth="2"
                  style={{ opacity: progress > 0.1 ? 1 : 0 }}
                />
              );
            })}

            {/* Dots observed */}
            {showObserved && radarSectors.map((s, i) => {
              const { x, y } = polarToXY(i * step, s.observed * obsProgress * R);
              return (
                <circle
                  key={`o-${i}`}
                  cx={x} cy={y} r="3.5"
                  fill="white" stroke="#FF1744" strokeWidth="2"
                  style={{ opacity: obsProgress > 0.1 ? 1 : 0 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="px-6 pb-5 flex flex-col items-center gap-2">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 rounded-sm bg-[#4285F4]/20 border border-[#4285F4]" />
              <span className="text-xs text-gray-600 font-medium">Potentiel IA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-6 rounded-sm bg-[#FF1744]/15 border border-[#FF1744]" />
              <span className="text-xs text-gray-600 font-medium">Adoption actuelle</span>
            </div>
          </div>
          <span className="text-[10px] text-gray-300">Source: Rapport IA 2026</span>
        </div>
      </motion.div>
    </div>
  );
}

const stats = [
  { value: "300M", label: "d'emplois menacés par l'IA d'ici 2030" },
  { value: "4.4T$", label: "de valeur ajoutée par l'IA chaque année" },
  { value: "85%", label: "des métiers de 2030 n'existent pas encore" },
];

const timeline = [
  { year: "2023", event: "ChatGPT explose. Tout le monde en parle.", opacity: "text-white/30" },
  { year: "2024", event: "Les premiers freelances IA facturent 5K\u20ac/mois.", opacity: "text-white/50" },
  { year: "2025", event: "Les entreprises recrutent des agences IA.", opacity: "text-white/70" },
  { year: "2026", event: "Le march\u00e9 se structure. Les retardataires gal\u00e8rent.", opacity: "text-white", highlight: true },
  { year: "2027", event: "Trop tard pour les d\u00e9butants sans m\u00e9thode.", opacity: "text-white/30" },
];

export default function UrgenceIA() {
  return (
    <section className="relative py-14 lg:py-20 bg-white overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content — compact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
              L&apos;opportunit&eacute;
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-6">
              97% des PME n&apos;ont{" "}
              <span className="text-[#FF1744]">aucun prestataire IA</span>.
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              La demande explose, l&apos;offre est vide. Positionne-toi maintenant.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-center bg-gray-50 rounded-xl py-4 px-2"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#111]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <RadarChart />
          </motion.div>
        </div>

        {/* Timeline card — merged from WindowClosing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-[#0A0A0A] p-8 lg:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF1744]/5 rounded-full blur-[100px]" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              La fen&ecirc;tre se ferme.
            </h3>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-[#FF1744]/40 to-white/5" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex items-start gap-5 py-3"
                >
                  <div className="relative z-10 flex-shrink-0 w-[37px] flex justify-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full border-2 ${
                        item.highlight
                          ? "bg-[#FF1744] border-[#FF1744] shadow-[0_0_10px_rgba(255,23,68,0.6)]"
                          : "bg-transparent border-white/20"
                      }`}
                    />
                  </div>
                  <div className="flex-1 -mt-0.5">
                    <span className={`text-[10px] font-mono tracking-wider ${item.highlight ? "text-[#FF1744]" : "text-white/20"}`}>
                      {item.year}
                    </span>
                    <p className={`text-base font-medium leading-snug mt-0.5 ${item.opacity}`}>
                      {item.event}
                    </p>
                  </div>
                  {item.highlight && (
                    <span className="flex-shrink-0 text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/10 border border-[#FF1744]/30 rounded-full px-2.5 py-0.5 mt-0.5">
                      Tu es ici
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF1744] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#D50000] transition-all hover:shadow-xl hover:shadow-red-900/30"
              >
                Prendre ma place
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
