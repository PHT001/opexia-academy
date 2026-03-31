"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ProfilePage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter", lessonsCompleted: 0, quizzesPassed: 0, memberSince: "", totalLessons: 0, modulesCompleted: 0, totalModules: 0 });


  // Name edit
  const [nameInput, setNameInput] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [nameSaved, setNameSaved] = useState(false);

  // Password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("opexia-dark-mode") === "true";
    return false;
  });
  const toggleDarkMode = () => {
    const v = !darkMode;
    setDarkMode(v);
    localStorage.setItem("opexia-dark-mode", String(v));
    window.dispatchEvent(new Event("dark-mode-change"));
  };

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          const mods: { totalLessons: number; completedLessons: number }[] = data.modules || [];
          const modulesCompleted = mods.filter((m) => m.totalLessons > 0 && m.completedLessons >= m.totalLessons).length;
          setStats({ xp: data.xp, streak: data.streak, tier: data.tier || "starter", lessonsCompleted: data.completedLessons || 0, quizzesPassed: data.quizzesCompleted || 0, memberSince: data.memberSince || "", totalLessons: data.totalLessons || 0, modulesCompleted, totalModules: mods.length });
        }
      })
      .catch(() => {});
  }, []);

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
    setPasswordError(""); setPasswordSuccess(false);
    if (newPassword.length < 6) { setPasswordError("Le mot de passe doit faire au moins 6 caract\u00e8res"); return; }
    if (newPassword !== confirmPassword) { setPasswordError("Les mots de passe ne correspondent pas"); return; }
    setSavingPassword(true);
    try {
      const res = await fetch("/api/user/password", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ currentPassword, newPassword }) });
      if (res.ok) { setPasswordSuccess(true); setCurrentPassword(""); setNewPassword(""); setConfirmPassword(""); setTimeout(() => setPasswordSuccess(false), 3000); }
      else { const d = await res.json(); setPasswordError(d.error || "Erreur"); }
    } catch { setPasswordError("Erreur de connexion"); } finally { setSavingPassword(false); }
  };

  const level = Math.floor(stats.xp / 500) + 1;
  const xpInLevel = stats.xp % 500;
  const xpProgress = (xpInLevel / 500) * 100;
  const isAdmin = session?.user?.role === "admin";

  // Profile photo
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  useEffect(() => {
    const saved = localStorage.getItem("opexia-profile-photo");
    if (saved) setProfilePhoto(saved);
  }, []);
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert("Image trop lourde (max 2Mo)"); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setProfilePhoto(result);
      localStorage.setItem("opexia-profile-photo", result);
    };
    reader.readAsDataURL(file);
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all";

  return (
    <div className="max-w-3xl mx-auto w-full space-y-5 py-4">

      {/* ═══ Header ═══ */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <div className="flex items-center gap-4">
          <label className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-xl font-bold text-white shadow-lg flex-shrink-0 cursor-pointer group overflow-hidden">
            {profilePhoto ? (
              <img src={profilePhoto} alt="Photo" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              session?.user?.name?.[0]?.toUpperCase() || "?"
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="3" /></svg>
            </div>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </label>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-[#111] truncate">{session?.user?.name || "\u00c9l\u00e8ve"}</h1>
            <p className="text-xs text-gray-400 mt-0.5">{session?.user?.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF1744]/10 text-[#FF1744]">
                {stats.tier === "one_to_one" ? "One-to-One" : stats.tier === "academy" ? "Academy" : stats.tier === "starter" ? "Starter" : "Free"}
              </span>
              <span className="text-[10px] text-gray-400">
                Membre depuis {stats.memberSince || new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Progression ═══ */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#111]">Progression</h3>
          <span className="text-[10px] font-bold text-gray-400">Niveau {level}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }} initial={{ width: 0 }} animate={{ width: `${Math.max(xpProgress, 3)}%` }} transition={{ duration: 1 }} />
          </div>
          <span className="text-[10px] font-mono text-gray-400 flex-shrink-0">{xpInLevel}/500</span>
        </div>
        <div className="flex items-center justify-between">
          {[
            { label: "XP", value: stats.xp.toLocaleString(), color: "#FF1744" },
            { label: "Streak", value: `${stats.streak}j`, color: "#F59E0B" },
            { label: "Le\u00e7ons", value: String(stats.lessonsCompleted), color: "#3B82F6" },
            { label: "Quiz", value: String(stats.quizzesPassed), color: "#10B981" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-lg font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>


      {/* ═══ Informations personnelles ═══ */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h3 className="text-sm font-bold text-[#111] mb-4">Informations personnelles</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Nom</label>
            <div className="flex gap-2">
              <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className={inputClass} />
              <button onClick={handleSaveName} disabled={savingName || nameInput === session?.user?.name} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0">
                {savingName ? "..." : nameSaved ? "\u2713" : "Sauvegarder"}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
            <input type="email" value={session?.user?.email || ""} disabled className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-400 cursor-not-allowed" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Abonnement</label>
            <p className="text-sm text-gray-700 font-medium">{stats.tier === "one_to_one" ? "One-to-One" : stats.tier === "academy" ? "Academy" : stats.tier === "starter" ? "Starter" : "Gratuit"}</p>
          </div>
        </div>
      </motion.div>

      {/* ═══ S\u00e9curit\u00e9 ═══ */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h3 className="text-sm font-bold text-[#111] mb-4">Changer le mot de passe</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Mot de passe actuel</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"} className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Nouveau mot de passe</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Minimum 6 caractères" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Confirmer le mot de passe</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Répète le mot de passe" className={inputClass} />
          </div>
          {passwordError && <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{passwordError}</p>}
          {passwordSuccess && <p className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">Mot de passe mis à jour !</p>}
          <button onClick={handleChangePassword} disabled={savingPassword || !currentPassword || !newPassword} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] disabled:opacity-40 disabled:cursor-not-allowed transition-all">
            {savingPassword ? "Modification..." : "Modifier le mot de passe"}
          </button>
        </div>
      </motion.div>

      {/* ═══ Affichage ═══ */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h3 className="text-sm font-bold text-[#111] mb-4">Affichage</h3>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => { if (darkMode) toggleDarkMode(); }} className={`p-4 rounded-xl border-2 transition-all ${!darkMode ? "border-[#FF1744] bg-red-50/30" : "border-gray-200 hover:border-gray-300"}`}>
            <div className="w-full h-16 rounded-lg bg-white border border-gray-200 mb-3 flex items-center justify-center">
              <div className="space-y-1.5 w-2/3">
                <div className="h-1.5 bg-gray-200 rounded-full" />
                <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
              </div>
            </div>
            <p className="text-xs font-semibold text-[#111]">Clair</p>
            {!darkMode && <p className="text-[10px] text-[#FF1744] font-medium mt-0.5">Actif</p>}
          </button>
          <button onClick={() => { if (!darkMode) toggleDarkMode(); }} className={`p-4 rounded-xl border-2 transition-all ${darkMode ? "border-[#FF1744] bg-red-50/30" : "border-gray-200 hover:border-gray-300"}`}>
            <div className="w-full h-16 rounded-lg bg-[#1A1A2E] border border-gray-700 mb-3 flex items-center justify-center">
              <div className="space-y-1.5 w-2/3">
                <div className="h-1.5 bg-white/20 rounded-full" />
                <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
              </div>
            </div>
            <p className="text-xs font-semibold text-[#111]">Sombre</p>
            {darkMode && <p className="text-[10px] text-[#FF1744] font-medium mt-0.5">Actif</p>}
          </button>
        </div>
      </motion.div>

      {/* ═══ D\u00e9connexion ═══ */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl border border-red-100 shadow-sm p-5">
        <button onClick={() => signOut({ callbackUrl: "/login" })} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-500 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
          Se déconnecter
        </button>
      </motion.div>
    </div>
  );
}
