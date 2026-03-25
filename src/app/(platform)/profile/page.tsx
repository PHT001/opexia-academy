"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TIERS } from "@/lib/constants";

const TIER_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  starter: { label: "Starter", color: "text-gray-600", bg: "bg-gray-100" },
  academy: { label: "Academy", color: "text-[#FF1744]", bg: "bg-[#FF1744]/10" },
  one_to_one: { label: "Premium", color: "text-amber-700", bg: "bg-amber-50" },
};

interface BadgeCheckInput {
  lessonsCompleted: number;
  quizzesPassed: number;
  streak: number;
  totalLessons: number;
  modulesCompleted: number;
  totalModules: number;
}

const BADGE_DEFS: { icon: string; name: string; desc: string; check: (s: BadgeCheckInput) => boolean }[] = [
  { icon: "\u{1F3AF}", name: "Premier pas", desc: "Premi\u00e8re le\u00e7on compl\u00e9t\u00e9e", check: (s) => s.lessonsCompleted >= 1 },
  { icon: "\u{1F9E0}", name: "Fondations IA", desc: "Module 1 termin\u00e9", check: (s) => s.modulesCompleted >= 1 },
  { icon: "\u{1F525}", name: "Semaine de feu", desc: "7 jours de streak", check: (s) => s.streak >= 7 },
  { icon: "\u26A1", name: "Mi-parcours", desc: "50% des le\u00e7ons", check: (s) => s.totalLessons > 0 && s.lessonsCompleted >= Math.ceil(s.totalLessons / 2) },
  { icon: "\u{1F3C6}", name: "Quiz Master", desc: "5 quiz valid\u00e9s", check: (s) => s.quizzesPassed >= 5 },
  { icon: "\u{1F393}", name: "Dipl\u00f4me", desc: "Formation compl\u00e8te", check: (s) => s.totalModules > 0 && s.modulesCompleted >= s.totalModules },
];

type Tab = "profile" | "security" | "display" | "subscription";

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto w-full animate-pulse"><div className="h-32 bg-gray-100 rounded-2xl" /></div>}>
      <ProfileContent />
    </Suspense>
  );
}

function ProfileContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter", lessonsCompleted: 0, quizzesPassed: 0, memberSince: "", totalLessons: 0, modulesCompleted: 0, totalModules: 0 });
  const [badgesLoading, setBadgesLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("opexia-dark-mode") === "true";
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    localStorage.setItem("opexia-dark-mode", String(newValue));
    window.dispatchEvent(new Event("dark-mode-change"));
  };
  const [nameInput, setNameInput] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [nameSaved, setNameSaved] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const [activeTab, setActiveTab] = useState<Tab>(
    searchParams.get("tab") === "subscription" ? "subscription" : "profile"
  );

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          const mods: { totalLessons: number; completedLessons: number }[] = data.modules || [];
          const modulesCompleted = mods.filter((m) => m.totalLessons > 0 && m.completedLessons >= m.totalLessons).length;
          setStats({
            xp: data.xp,
            streak: data.streak,
            tier: data.tier || "starter",
            lessonsCompleted: data.completedLessons || 0,
            quizzesPassed: data.quizzesCompleted || 0,
            memberSince: data.memberSince || "",
            totalLessons: data.totalLessons || 0,
            modulesCompleted,
            totalModules: mods.length,
          });
        }
      })
      .catch(() => {})
      .finally(() => setBadgesLoading(false));
  }, []);

  useEffect(() => {
    if (searchParams.get("tab") === "subscription") setActiveTab("subscription");
    if (searchParams.get("tab") === "security") setActiveTab("security");
    if (searchParams.get("tab") === "display") setActiveTab("display");
  }, [searchParams]);

  useEffect(() => {
    if (session?.user?.name) setNameInput(session.user.name);
  }, [session?.user?.name]);

  const handleSaveName = async () => {
    if (!nameInput.trim()) return;
    setSavingName(true);
    try {
      const res = await fetch("/api/user/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: nameInput.trim() }) });
      if (res.ok) { setNameSaved(true); setTimeout(() => setNameSaved(false), 2000); }
    } catch {} finally { setSavingName(false); }
  };

  const handleChangePassword = async () => {
    setPasswordError("");
    setPasswordSuccess(false);
    if (newPassword.length < 6) { setPasswordError("Le mot de passe doit faire au moins 6 caract\u00e8res"); return; }
    if (newPassword !== confirmPassword) { setPasswordError("Les mots de passe ne correspondent pas"); return; }
    setSavingPassword(true);
    try {
      const res = await fetch("/api/user/password", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ currentPassword, newPassword }) });
      if (res.ok) { setPasswordSuccess(true); setCurrentPassword(""); setNewPassword(""); setConfirmPassword(""); setTimeout(() => setPasswordSuccess(false), 3000); }
      else { const data = await res.json(); setPasswordError(data.error || "Erreur"); }
    } catch { setPasswordError("Erreur de connexion"); } finally { setSavingPassword(false); }
  };

  const previewTier = typeof window !== "undefined" ? localStorage.getItem("admin-preview-tier") : null;
  const effectiveTier = previewTier || stats.tier;
  const tierInfo = TIER_LABELS[effectiveTier] || TIER_LABELS.starter;
  const level = Math.floor(stats.xp / 500) + 1;
  const xpInLevel = stats.xp % 500;
  const xpProgress = (xpInLevel / 500) * 100;
  const isAdmin = session?.user?.role === "admin" && !previewTier;

  return (
    <div className="max-w-4xl mx-auto w-full">

      {/* Header card */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="h-20 relative" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-[#FF1744]/20 blur-[50px]" />
          </div>
        </div>
        <div className="px-6 pb-5 -mt-8 relative">
          <div className="flex items-end gap-3 sm:gap-4 mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg ring-4 ring-white flex-shrink-0">
              {session?.user?.name?.[0]?.toUpperCase() || "?"}
            </div>
            <div className="flex-1 min-w-0 pt-8">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-lg font-bold text-[#111] truncate">{session?.user?.name || "\u00c9l\u00e8ve"}</h1>
                {isAdmin && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FF1744]/10 text-[#FF1744]">Admin</span>
                )}
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${tierInfo.bg} ${tierInfo.color}`}>
                  {isAdmin ? "Acc\u00e8s complet" : tierInfo.label}
                </span>
              </div>
              <p className="text-xs text-gray-400">{session?.user?.email}</p>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${effectiveTier === "free" ? "bg-gray-100 text-gray-500" : tierInfo.bg + " " + tierInfo.color}`}>
              {effectiveTier === "free" ? "Gratuit" : isAdmin ? "Acc\u00e8s complet" : tierInfo.label}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1 overflow-x-auto">
        {([
          { id: "profile" as Tab, label: "Mon compte" },
          { id: "security" as Tab, label: "S\u00e9curit\u00e9" },
          { id: "display" as Tab, label: "Affichage" },
          { id: "subscription" as Tab, label: "Mes offres" },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-white text-[#111] shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "profile" ? (
          <motion.div key="profile" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">

            {/* ═══ Progression ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="text-sm font-bold text-[#111] mb-4">Progression</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500">Niveau {level}</span>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{xpInLevel}/500 XP</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }} initial={{ width: 0 }} animate={{ width: `${Math.max(xpProgress, 3)}%` }} transition={{ duration: 1 }} />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "XP", value: stats.xp.toLocaleString(), color: "text-amber-500" },
                  { label: "Streak", value: `${stats.streak}j`, color: "text-orange-500" },
                  { label: "Le\u00e7ons", value: String(stats.lessonsCompleted), color: "text-blue-500" },
                  { label: "Quiz", value: String(stats.quizzesPassed), color: "text-emerald-500" },
                ].map((s) => (
                  <div key={s.label} className="text-center py-3 rounded-xl bg-gray-50">
                    <p className={`text-lg font-black ${s.color}`}>{s.value}</p>
                    <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ Badges ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="text-sm font-bold text-[#111] mb-4">Badges</h3>
              {badgesLoading ? (
                <div className="flex flex-wrap gap-3">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="w-12 h-12 rounded-xl bg-gray-100 animate-pulse" />)}</div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {BADGE_DEFS.map((badge) => {
                    const unlocked = badge.check({ lessonsCompleted: stats.lessonsCompleted, quizzesPassed: stats.quizzesPassed, streak: stats.streak, totalLessons: stats.totalLessons, modulesCompleted: stats.modulesCompleted, totalModules: stats.totalModules });
                    return (
                      <div key={badge.name} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl ${unlocked ? "bg-amber-50 border border-amber-200" : "bg-gray-50 border border-dashed border-gray-200 opacity-40"}`}>
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-[9px] font-semibold text-gray-500 text-center leading-tight">{badge.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ═══ Informations personnelles ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="text-sm font-bold text-[#111] mb-4">Informations personnelles</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Nom</label>
                  <div className="flex gap-2">
                    <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="flex-1 px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all" />
                    <button onClick={handleSaveName} disabled={savingName || nameInput === session?.user?.name} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                      {savingName ? "..." : nameSaved ? "\u2713" : "Sauvegarder"}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
                  <input type="email" value={session?.user?.email || ""} disabled className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-400 cursor-not-allowed" />
                  <p className="text-[10px] text-gray-400 mt-1">L{"'"}email ne peut pas {"\u00ea"}tre modifi{"\u00e9"}</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Membre depuis</label>
                  <p className="text-sm text-gray-700 font-medium">{stats.memberSince || new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            </div>

            {/* ═══ Zone de danger ═══ */}
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-red-500 mb-3">Zone de danger</h3>
              <button onClick={() => signOut({ callbackUrl: "/login" })} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-500 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                Se d{"\u00e9"}connecter
              </button>
            </div>
          </motion.div>

        ) : activeTab === "security" ? (
          <motion.div key="security" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">

            {/* ═══ Changer le mot de passe ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111]">Changer le mot de passe</h3>
                  <p className="text-[10px] text-gray-400">Mets {"\u00e0"} jour ton mot de passe r{"\u00e9"}guli{"\u00e8"}rement</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Mot de passe actuel</label>
                  <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"} className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Nouveau mot de passe</label>
                  <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Minimum 6 caractères" className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Confirmer le mot de passe</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Répète le mot de passe" className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all" />
                </div>
                {passwordError && <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{passwordError}</p>}
                {passwordSuccess && <p className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">Mot de passe mis {"\u00e0"} jour avec succ{"\u00e8"}s !</p>}
                <button onClick={handleChangePassword} disabled={savingPassword || !currentPassword || !newPassword} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                  {savingPassword ? "Modification..." : "Modifier le mot de passe"}
                </button>
              </div>
            </div>

            {/* ═══ Session active ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="text-sm font-bold text-[#111] mb-3">Session active</h3>
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-xs font-medium text-[#111]">Connect{"\u00e9"} maintenant</p>
                    <p className="text-[10px] text-gray-400">{session?.user?.email}</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-500 font-semibold">Active</span>
              </div>
            </div>
          </motion.div>

        ) : activeTab === "display" ? (
          <motion.div key="display" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">

            {/* ═══ Thème ═══ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111]">Th{"\u00e8"}me</h3>
                  <p className="text-[10px] text-gray-400">Choisis entre le mode clair et sombre</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => { if (darkMode) toggleDarkMode(); }} className={`p-4 rounded-xl border-2 transition-all ${!darkMode ? "border-[#FF1744] bg-red-50/30" : "border-gray-200 hover:border-gray-300"}`}>
                  <div className="w-full h-20 rounded-lg bg-white border border-gray-200 mb-3 flex items-center justify-center">
                    <div className="space-y-1.5 w-2/3">
                      <div className="h-2 bg-gray-200 rounded-full" />
                      <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                      <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#111]">Clair</p>
                  {!darkMode && <p className="text-[10px] text-[#FF1744] font-medium mt-0.5">Actif</p>}
                </button>
                <button onClick={() => { if (!darkMode) toggleDarkMode(); }} className={`p-4 rounded-xl border-2 transition-all ${darkMode ? "border-[#FF1744] bg-red-50/30" : "border-gray-200 hover:border-gray-300"}`}>
                  <div className="w-full h-20 rounded-lg bg-[#1A1A2E] border border-gray-700 mb-3 flex items-center justify-center">
                    <div className="space-y-1.5 w-2/3">
                      <div className="h-2 bg-white/20 rounded-full" />
                      <div className="h-2 bg-white/10 rounded-full w-3/4" />
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#111]">Sombre</p>
                  {darkMode && <p className="text-[10px] text-[#FF1744] font-medium mt-0.5">Actif</p>}
                </button>
              </div>
            </div>
          </motion.div>

        ) : (
          <motion.div key="subscription" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {/* Current plan banner */}
            <div className="rounded-2xl overflow-hidden mb-8" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
              <div className="relative p-6 sm:p-8">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF1744]/15 blur-[60px]" />
                  <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-[40px]" />
                </div>
                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-white/40 font-semibold uppercase tracking-[0.2em] mb-2">Ton offre actuelle</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-white">
                        {isAdmin ? "Admin \u2014 Acc\u00e8s complet" : tierInfo.label}
                      </span>
                      {!isAdmin && effectiveTier !== "one_to_one" && (
                        <span className="text-[10px] font-medium text-white/50 bg-white/10 px-2.5 py-1 rounded-full">Upgrade disponible</span>
                      )}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-3xl font-black text-white">
                      {isAdmin ? "\u221E" : effectiveTier === "free" ? "Gratuit" : effectiveTier === "starter" ? "47\u20ac" : effectiveTier === "academy" ? "497\u20ac" : "2 497\u20ac"}
                    </p>
                    <p className="text-[10px] text-white/40">{effectiveTier === "free" ? "aucun engagement" : "paiement unique"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section title */}
            {!isAdmin && effectiveTier !== "one_to_one" && (
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[#111] mb-1">Choisis l{"'"}offre qui te correspond</h2>
                <p className="text-sm text-gray-400">Paiement unique, acc{"\u00e8"}s {"\u00e0"} vie. Sans engagement.</p>
              </div>
            )}

            {/* Plans */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {TIERS.map((tier) => {
                const isCurrent = effectiveTier === tier.id || (isAdmin && (tier.id === "academy" || tier.id === "one_to_one"));
                return (
                  <div
                    key={tier.id}
                    className={`relative rounded-2xl bg-white p-6 sm:p-8 transition-all ${
                      tier.popular
                        ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                        : isCurrent
                        ? "border-2 border-emerald-400 shadow-sm"
                        : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    {tier.popular && !isCurrent && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-red-200">
                          Populaire
                        </span>
                      </div>
                    )}
                    {isCurrent && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          Actif
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#111]">{tier.name}</h3>
                      <p className="text-sm text-[#6B7280] mt-1">{tier.description}</p>
                      <div className="mt-5 flex items-baseline gap-2">
                        <span className="text-4xl font-black tracking-tight text-[#111]">
                          {tier.price.toLocaleString("fr-FR")}
                        </span>
                        <span className="text-lg font-medium text-[#6B7280]">&euro;</span>
                      </div>
                      <p className="text-xs text-[#6B7280] mt-1">paiement unique &middot; acc{"\u00e8"}s {"\u00e0"} vie</p>
                    </div>

                    {isCurrent ? (
                      <div className="w-full py-3 rounded-xl text-center text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200">
                        Ton plan actuel
                      </div>
                    ) : (
                      <a
                        href="/#pricing"
                        className={`block w-full text-center rounded-xl py-3 text-sm font-bold transition-all ${
                          tier.popular
                            ? "text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            : "bg-[#111] text-white hover:bg-[#333]"
                        }`}
                        style={tier.popular ? { background: "linear-gradient(135deg, #FF1744, #D50000)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" } : undefined}
                      >
                        {tier.cta}
                      </a>
                    )}

                    <div className="mt-6 space-y-2.5">
                      {tier.features.map((f) => (
                        <div key={f.text} className="flex items-start gap-2.5">
                          {f.included ? (
                            <svg className="h-4 w-4 text-[#FF1744] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          )}
                          <span className={`text-sm ${f.included ? "text-[#111]" : "text-gray-400"}`}>{f.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
