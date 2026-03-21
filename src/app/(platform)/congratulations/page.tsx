"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

/* ——— Types ——— */
interface ProgressData {
  completedLessons: number;
  totalLessons: number;
  quizzesCompleted: number;
  xp: number;
}

/* ——— Animated Counter ——— */
function AnimatedNumber({ value, suffix = "", prefix = "", className = "" }: { value: number; suffix?: string; prefix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => prefix + Math.round(v).toLocaleString("fr-FR") + suffix);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) animate(motionVal, value, { duration: 1.6, ease: "easeOut" });
  }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ——— Confetti Particle ——— */
function ConfettiParticle({ delay, color, left }: { delay: number; color: string; left: string }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-sm pointer-events-none"
      style={{ left, top: -10, backgroundColor: color }}
      initial={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, 600],
        x: [0, (Math.random() - 0.5) * 200],
        rotate: [0, 360 + Math.random() * 360],
        opacity: [1, 1, 0],
        scale: [1, 0.6],
      }}
      transition={{ duration: 2.5 + Math.random(), delay, ease: "easeIn" }}
    />
  );
}

/* ——— Confetti Burst ——— */
const CONFETTI_COLORS = ["#FF1744", "#FF6D00", "#FFD600", "#00E676", "#2979FF", "#D500F9", "#F50057"];

function ConfettiBurst() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        delay: Math.random() * 0.8,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <ConfettiParticle key={p.id} delay={p.delay} color={p.color} left={p.left} />
      ))}
    </div>
  );
}

/* ——— LinkedIn share ——— */
function ShareLinkedInButton() {
  const text = encodeURIComponent(
    "Je viens de terminer le parcours Opexia Academy ! Une formation compl\u00e8te sur l\u2019IA appliqu\u00e9e au business. \ud83d\ude80\n\n#OpexiaAcademy #IA #Formation"
  );
  const url = encodeURIComponent("https://opexia.com");

  return (
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition-colors"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      Partager sur LinkedIn
    </a>
  );
}

/* ——— Stat Card ——— */
function StatCard({ icon, value, label, suffix, color, delay }: { icon: string; value: number; label: string; suffix?: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md p-6"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <AnimatedNumber value={value} suffix={suffix} className={`text-4xl font-black ${color}`} />
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </motion.div>
  );
}

/* ——— Main Page ——— */
export default function CongratulationsPage() {
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d: ProgressData) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Confetti animation */}
      <AnimatePresence>
        {!loading && data && <ConfettiBurst />}
      </AnimatePresence>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-white to-amber-50" />

      <div className="relative z-10 max-w-3xl mx-auto text-center py-16 px-4">
        {/* Trophy / graduation icon */}
        <motion.div
          className="text-8xl mb-6"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
        >
          🎓
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-[#FF1744] to-[#FF6D00] bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Félicitations !
        </motion.h1>

        <motion.p
          className="text-lg text-gray-500 mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Tu as complété l&apos;intégralité du parcours Opexia Academy.
        </motion.p>

        {/* Stats grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-md p-6 animate-pulse">
                <div className="h-8 w-8 bg-gray-200 rounded mb-3" />
                <div className="h-10 w-20 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-28 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        ) : data ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <StatCard
              icon="📚"
              value={data.completedLessons}
              label="Leçons complétées"
              color="text-gray-900"
              delay={0.8}
            />
            <StatCard
              icon="✅"
              value={data.quizzesCompleted}
              label="Quiz validés"
              color="text-emerald-500"
              delay={1.0}
            />
            <StatCard
              icon="⚡"
              value={data.xp}
              label="XP gagnés"
              color="text-amber-500"
              delay={1.2}
            />
          </div>
        ) : null}

        {/* Share section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-sm text-gray-400 mb-3">Partage ta réussite avec ton réseau</p>
          <ShareLinkedInButton />
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Prêt à passer au niveau supérieur ?</h2>
            <p className="text-gray-500 mb-6">
              Réserve ton accompagnement personnalisé avec un des fondateurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/profile?tab=subscription" glow>
                Découvrir le One-to-One
              </Button>
              <Button href="/dashboard" variant="secondary">
                Retour au dashboard
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
