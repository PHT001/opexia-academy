"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

/* --- Icons --- */
function IconCopy({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconUsers({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function IconEuro({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M7 12h8" /><path d="M7 9h5" /><path d="M15.5 7A4.5 4.5 0 0 0 12 5.5C9.5 5.5 8 7.5 8 12s1.5 6.5 4 6.5a4.5 4.5 0 0 0 3.5-1.5" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconGift({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>;
}
function IconShield({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
}
function IconTrendingUp({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}

/* --- Animated Counter --- */
function AnimatedNumber({ value, isCurrency = false, className = "" }: { value: number; isCurrency?: boolean; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => {
    if (isCurrency) return (v / 100).toFixed(2).replace(".", ",") + "\u20AC";
    return Math.round(v).toString();
  });
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) animate(motionVal, value, { duration: 1.2, ease: "easeOut" }); }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* --- Types --- */
interface ReferralItem { id: string; referredName: string; referredEmail: string; tier: string | null; commission: number; status: string; createdAt: string; paidAt: string | null; }
interface ReferralData { referralCode: string; stats: { totalReferrals: number; confirmedReferrals: number; totalEarned: number; pendingAmount: number; paidAmount: number; }; referrals: ReferralItem[]; }

/* --- Helpers --- */
function formatCents(cents: number): string { return (cents / 100).toFixed(2).replace(".", ",") + "\u20AC"; }
function tierLabel(tier: string | null): string { if (!tier) return "En attente"; const map: Record<string, string> = { starter: "Starter", academy: "Academy", one_to_one: "One-to-One" }; return map[tier] ?? tier; }
function statusBadge(status: string) {
  const c: Record<string, { label: string; style: string }> = {
    pending: { label: "En attente", style: "text-gray-500 bg-gray-100 border-gray-200" },
    confirmed: { label: "Confirmé", style: "text-blue-600 bg-blue-50 border-blue-200" },
    paid: { label: "Payé", style: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  };
  const s = c[status] ?? c.pending;
  return <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${s.style}`}>{s.label}</span>;
}

export default function ParrainagePage() {
  const [data, setData] = useState<ReferralData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/referral")
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (d.stats) setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const defaultData: ReferralData = data ?? {
    referralCode: "...",
    stats: { totalReferrals: 0, confirmedReferrals: 0, totalEarned: 0, pendingAmount: 0, paidAmount: 0 },
    referrals: [],
  };

  const referralLink = data ? `${typeof window !== "undefined" ? window.location.origin : ""}/register?ref=${defaultData.referralCode}` : "";
  function copyLink() { navigator.clipboard.writeText(referralLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }

  if (loading) return (
    <div className="w-full animate-pulse space-y-6">
      <div className="h-56 bg-gray-100 rounded-2xl" />
      <div className="grid grid-cols-3 gap-4"><div className="h-24 bg-gray-100 rounded-xl" /><div className="h-24 bg-gray-100 rounded-xl" /><div className="h-24 bg-gray-100 rounded-xl" /></div>
    </div>
  );

  return (
    <div className="w-full">

      {/* ═══════════════════════════════════════════
          HERO BANNER — dark gradient with diagonal slice
      ═══════════════════════════════════════════ */}
      <motion.div
        className="relative overflow-hidden rounded-3xl mb-10"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 40%, #0F0F1E 100%)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large "20%" watermark */}
          <span className="absolute -right-8 -top-8 text-[220px] font-black text-white/[0.03] leading-none tracking-tighter select-none">
            20%
          </span>
          {/* Gradient orbs */}
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#FF1744]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-violet-500/8 blur-[80px]" />
          {/* Diagonal line accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF1744]/[0.06] to-transparent" />
        </div>

        <div className="relative z-10 px-8 sm:px-12 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <IconGift className="text-[#FF1744] w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Programme Partenaire</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-white mb-4">
                Recommande Opexia,
                <br />
                <span className="bg-gradient-to-r from-[#FF1744] to-[#FF5252] bg-clip-text text-transparent">
                  gagne jusqu&apos;à 20% de commission.
                </span>
              </h1>
              <p className="text-sm sm:text-[15px] text-white/45 leading-relaxed max-w-md">
                Pour chaque inscription via ton lien, tu touches jusqu&apos;à 20% du forfait. Sans plafond, sans conditions, sans limite de temps.
              </p>
            </div>

            {/* Right side — big commission highlight */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#FF1744]/20 blur-xl" />
                <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center min-w-[180px]">
                  <p className="text-5xl sm:text-6xl font-black text-white mb-1">20<span className="text-[#FF1744]">%</span></p>
                  <p className="text-xs text-white/40 font-medium">par inscription</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          REFERRAL LINK — clean card with mono code
      ═══════════════════════════════════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Ton lien unique</span>
            <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{defaultData.referralCode}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF1744]/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 font-mono truncate">
                {referralLink || "Connecte-toi pour obtenir ton lien"}
              </div>
            </div>
            <motion.button
              onClick={copyLink}
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold shrink-0 transition-all duration-200"
              style={{
                background: copied ? "#10B981" : "linear-gradient(135deg, #FF1744, #D50000)",
                color: "white",
                boxShadow: copied ? "0 4px 14px rgba(16,185,129,0.3)" : "0 4px 14px rgba(255,23,68,0.25)",
              }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {copied ? <IconCheck className="text-white w-4 h-4" /> : <IconCopy className="text-white/80 w-4 h-4" />}
              {copied ? "Copié !" : "Copier le lien"}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          STATS — 3 metric cards
      ═══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
        {[
          { icon: <IconUsers />, label: "Filleuls", value: defaultData.stats.totalReferrals, sub: `${defaultData.stats.confirmedReferrals} confirmés`, accent: "#6C5CE7", bg: "from-violet-500/8 to-violet-500/0" },
          { icon: <IconEuro />, label: "Gagné", value: defaultData.stats.totalEarned, isCurrency: true, sub: `${formatCents(defaultData.stats.paidAmount)} versé`, accent: "#10B981", bg: "from-emerald-500/8 to-emerald-500/0" },
          { icon: <IconClock />, label: "En attente", value: defaultData.stats.pendingAmount, isCurrency: true, sub: "À venir", accent: "#F59E0B", bg: "from-amber-500/8 to-amber-500/0" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 group hover:shadow-md transition-all duration-300`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.bg}`} style={{ background: `linear-gradient(90deg, ${s.accent}20, transparent)` }} />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${s.accent}12`, color: s.accent }}>
                {s.icon}
              </div>
              <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{s.label}</span>
            </div>
            <p className="text-2xl font-black text-gray-900 tracking-tight">
              <AnimatedNumber value={s.value} isCurrency={s.isCurrency} />
            </p>
            <p className="text-[11px] text-gray-400 mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — horizontal flow with connectors
      ═══════════════════════════════════════════ */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-6">Comment ça marche</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-0">
          {[
            { num: "1", title: "Partage", desc: "Envoie ton lien par message, email ou réseaux.", color: "#6C5CE7", emoji: "🔗" },
            { num: "2", title: "Inscription", desc: "Ton filleul choisit un forfait et crée son compte.", color: "#0984E3", emoji: "✍️" },
            { num: "3", title: "Commission", desc: "Tu reçois 20% automatiquement. Simple.", color: "#10B981", emoji: "💰" },
          ].map((s, i) => (
            <div key={s.num} className="relative">
              {/* Connector arrow (hidden on first, visible between cards) */}
              {i > 0 && (
                <div className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10">
                  <IconArrowRight className="text-gray-300" />
                </div>
              )}
              <motion.div
                className="bg-white border border-gray-200/80 p-6 group transition-all duration-300 hover:shadow-md relative"
                style={{
                  borderRadius: i === 0 ? "16px 4px 4px 16px" : i === 2 ? "4px 16px 16px 4px" : "4px",
                  marginLeft: i > 0 ? "-1px" : 0,
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                    style={{ background: `${s.color}10` }}
                  >
                    {s.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black rounded-md px-1.5 py-0.5" style={{ color: s.color, background: `${s.color}12` }}>{s.num}</span>
                      <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          COMMISSIONS — tier cards with visual hierarchy
      ═══════════════════════════════════════════ */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-6">Commissions par forfait</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { tier: "Starter", price: "47\u20AC", commission: "+9,40\u20AC", pct: "20%", desc: "Fondamentaux", ring: "ring-gray-200", bg: "bg-white", commColor: "text-gray-700", highlight: false },
            { tier: "Academy", price: "397\u20AC", commission: "+59,55\u20AC", pct: "15%", desc: "13 modules + 2 masterclasses", ring: "ring-emerald-300", bg: "bg-gradient-to-b from-emerald-50/80 to-white", commColor: "text-emerald-600", highlight: true },
            { tier: "One-to-One", price: "3 997\u20AC", commission: "+399,70\u20AC", pct: "10%", desc: "Coaching inclus", ring: "ring-amber-300", bg: "bg-gradient-to-b from-amber-50/60 to-white", commColor: "text-amber-600", highlight: false },
          ].map((t, i) => (
            <motion.div
              key={t.tier}
              className={`relative rounded-2xl border p-6 ${t.bg} ring-1 ${t.ring} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${t.highlight ? "shadow-md" : "shadow-sm"}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ borderColor: "transparent" }}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider bg-emerald-500 px-3 py-1 rounded-full shadow-sm">
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">{t.tier}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 mb-0.5">Prix du forfait</p>
                  <p className="text-sm font-semibold text-gray-600">{t.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 mb-0.5">Ta commission</p>
                  <p className={`text-2xl font-black ${t.commColor} tracking-tight`}>{t.commission}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          FILLEULS — clean table
      ═══════════════════════════════════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm mb-10 overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <IconUsers className="text-gray-400 w-4 h-4" />
            <span className="text-sm font-bold text-gray-800">Tes filleuls</span>
          </div>
          {defaultData.referrals.length > 0 && (
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">{defaultData.referrals.length}</span>
          )}
        </div>

        <div className="p-6">
          {defaultData.referrals.length === 0 ? (
            <div className="text-center py-10">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 border-dashed flex items-center justify-center mx-auto mb-4"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconUsers className="text-gray-300 w-7 h-7" />
              </motion.div>
              <p className="text-sm font-medium text-gray-500 mb-1">Aucun filleul pour le moment</p>
              <p className="text-xs text-gray-400">Partage ton lien et suis tes premiers filleuls ici.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {defaultData.referrals.map((r, i) => (
                <motion.div
                  key={r.id}
                  className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
                      {r.referredName[0]?.toUpperCase() || "?"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{r.referredName}</p>
                      <p className="text-[10px] text-gray-400">{tierLabel(r.tier)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {r.commission > 0 && <span className="text-sm font-bold text-gray-800">{formatCents(r.commission)}</span>}
                    {statusBadge(r.status)}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          BOTTOM — Trust badges
      ═══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          { icon: <IconShield />, title: "100% transparent", desc: "Suivi en temps réel de tes filleuls, forfaits et commissions. Aucun frais caché.", color: "#6C5CE7" },
          { icon: <IconTrendingUp />, title: "Aucun plafond", desc: "5 filleuls Academy = 297\u20AC. 10 = 595\u20AC. Le calcul est simple.", color: "#FF1744" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}10`, color: item.color }}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
