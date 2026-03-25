"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ——— Types ——— */
interface ProjectUser {
  id: string;
  name: string | null;
  email: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  url: string | null;
  status: string;
  feedback: string | null;
  userId: string;
  user?: ProjectUser;
  createdAt: string;
  updatedAt: string;
}

type ProjectTabFilter = "all" | "submitted" | "reviewing" | "approved" | "needs_revision";

/* ——— Constants ——— */
const PROJECT_STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  submitted: { label: "En attente", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" },
  reviewing: { label: "En revue", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  approved: { label: "Approuvé", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  needs_revision: { label: "\u00c0 réviser", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
};

const PROJECT_TABS: { id: ProjectTabFilter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "submitted", label: "En attente" },
  { id: "reviewing", label: "En revue" },
  { id: "approved", label: "Approuvés" },
  { id: "needs_revision", label: "\u00c0 réviser" },
];

/* ——— Animations ——— */
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

/* ——— Status Badge ——— */
function ProjectStatusBadge({ status }: { status: string }) {
  const cfg = PROJECT_STATUS_CONFIG[status] || PROJECT_STATUS_CONFIG.submitted;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.color.replace("text-", "bg-")}`} />
      {cfg.label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ProjetsPage() {
  const { data: session } = useSession();
  const isRealAdmin = (session?.user as { role?: string } | undefined)?.role === "admin";
  const [previewTier] = useState<string | null>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("admin-preview-tier") || null;
    return null;
  });
  const isAdmin = isRealAdmin && !previewTier;

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [userTier, setUserTier] = useState<string>("academy");

  useEffect(() => {
    fetch("/api/progress").then(r => r.json()).then(d => {
      if (d?.tier) setUserTier(d.tier);
    }).catch(() => {});
  }, []);

  // Student form state
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Admin filter
  const [activeFilter, setActiveFilter] = useState<ProjectTabFilter>("all");

  // Admin review state
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [reviewStatus, setReviewStatus] = useState<Record<string, string>>({});
  const [reviewFeedback, setReviewFeedback] = useState<Record<string, string>>({});
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchProjects = useCallback(() => {
    setLoading(true);
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d)) setProjects(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  /* ——— Student: submit project ——— */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), description: description.trim(), url: url.trim() || null }),
      });
      if (res.ok) {
        setTitle("");
        setDescription("");
        setUrl("");
        setShowForm(false);
        fetchProjects();
      }
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  /* ——— Admin: update project ——— */
  const handleUpdate = async (projectId: string) => {
    const status = reviewStatus[projectId];
    const feedback = reviewFeedback[projectId] ?? "";
    if (!status) return;
    setUpdating(projectId);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, feedback }),
      });
      if (res.ok) {
        const updated = await res.json();
        setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
        setExpandedId(null);
      }
    } catch {
      // silent
    } finally {
      setUpdating(null);
    }
  };

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter);

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {isAdmin ? (
        <AdminView
          projects={projects}
          filtered={filtered}
          loading={loading}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          reviewStatus={reviewStatus}
          setReviewStatus={setReviewStatus}
          reviewFeedback={reviewFeedback}
          setReviewFeedback={setReviewFeedback}
          updating={updating}
          handleUpdate={handleUpdate}
        />
      ) : (
        <StudentView
          projects={projects}
          loading={loading}
          showForm={showForm}
          setShowForm={setShowForm}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          url={url}
          setUrl={setUrl}
          submitting={submitting}
          handleSubmit={handleSubmit}
          userTier={previewTier || userTier}
        />
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STUDENT VIEW
   ═══════════════════════════════════════════════════════════ */
function StudentView({
  projects, loading, showForm, setShowForm,
  title, setTitle, description, setDescription,
  url, setUrl, submitting, handleSubmit, userTier,
}: {
  projects: Project[];
  loading: boolean;
  showForm: boolean;
  setShowForm: (v: boolean) => void;
  title: string;
  setTitle: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  url: string;
  setUrl: (v: string) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  userTier: string;
}) {
  const isFree = userTier === "free";

  return (
    <>
      {/* Hero header */}
      <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
        <div className="relative p-6 sm:p-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF1744]/15 blur-[60px]" />
          </div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF1744]">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">Mes Projets</h1>
            </div>
            <p className="text-sm text-white/50 max-w-lg mb-5">
              Soumets tes projets MVP et re{"\u00e7"}ois des retours personnalis{"\u00e9"}s de l{"\u2019"}{"\u00e9"}quipe pour t{"\u2019"}am{"\u00e9"}liorer.
            </p>

            {/* How it works */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { step: "1", title: "Soumets", desc: "D\u00e9cris ton projet et partage ton lien" },
                { step: "2", title: "Revue", desc: "L\u2019\u00e9quipe analyse et te fait un retour" },
                { step: "3", title: "Am\u00e9liore", desc: "Int\u00e8gre les feedbacks et progresse" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                  <span className="w-6 h-6 rounded-full bg-[#FF1744]/20 text-[#FF1744] text-xs font-bold flex items-center justify-center flex-shrink-0">{s.step}</span>
                  <div>
                    <p className="text-xs font-semibold text-white">{s.title}</p>
                    <p className="text-[10px] text-white/40">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Submit button or free tier lock */}
      <motion.div variants={fadeUp}>
        {isFree ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Fonctionnalit{"\u00e9"} r{"\u00e9"}serv{"\u00e9"}e aux membres</p>
            <p className="text-xs text-gray-400 mb-4 max-w-sm mx-auto">
              Soumets tes projets MVP et re{"\u00e7"}ois des retours de l{"\u2019"}{"\u00e9"}quipe en passant {"\u00e0"} une offre payante.
            </p>
            <a
              href="/profile?tab=subscription"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF1744, #D50000)" }}
            >
              D{"\u00e9"}couvrir nos offres
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        ) : !showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full p-4 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#FF1744]/30 hover:bg-red-50/30 transition-all group flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#FF1744] transition-colors">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-sm font-semibold text-gray-400 group-hover:text-[#FF1744] transition-colors">Soumettre un nouveau projet</span>
          </button>
        ) : null}
      </motion.div>

      {/* Inline form */}
      <AnimatePresence>
        {showForm && !isFree && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="text-base font-semibold text-[#111] mb-4">Nouveau projet</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Titre du projet *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: SaaS de gestion de factures"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Description *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="D&eacute;cris ton projet, les technologies utilis&eacute;es, le probl&egrave;me r&eacute;solu..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all resize-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Lien (GitHub, demo, site)</label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all"
                  />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-50"
                    style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi...
                      </>
                    ) : (
                      "Soumettre"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-[#111] hover:bg-gray-100 transition-all"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects list */}
      {loading ? (
        <motion.div variants={fadeUp} className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-[#FF1744] rounded-full animate-spin" />
        </motion.div>
      ) : projects.length === 0 && !isFree ? (
        <motion.div variants={fadeUp} className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-500">Aucun projet soumis</p>
          <p className="text-xs text-gray-400 mt-1">Soumets ton premier projet MVP pour recevoir un retour de l&apos;{"\u00e9"}quipe !</p>
        </motion.div>
      ) : !isFree && projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-sm font-semibold text-[#111] truncate">{project.title}</h3>
                    <ProjectStatusBadge status={project.status} />
                  </div>
                  <p className="text-xs text-gray-400">
                    Soumis le {new Date(project.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8f9fb] border border-gray-200 text-xs font-medium text-gray-500 hover:text-[#111] hover:border-gray-300 transition-all"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Voir le lien
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              {project.feedback && (
                <div className="mt-3 p-4 bg-[#f8f9fb] border border-gray-100 rounded-xl">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">Retour de l&apos;{"\u00e9"}quipe</p>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{project.feedback}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : null}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   ADMIN VIEW
   ═══════════════════════════════════════════════════════════ */
function AdminView({
  projects, filtered, loading, activeFilter, setActiveFilter,
  expandedId, setExpandedId,
  reviewStatus, setReviewStatus,
  reviewFeedback, setReviewFeedback,
  updating, handleUpdate,
}: {
  projects: Project[];
  filtered: Project[];
  loading: boolean;
  activeFilter: ProjectTabFilter;
  setActiveFilter: (f: ProjectTabFilter) => void;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  reviewStatus: Record<string, string>;
  setReviewStatus: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  reviewFeedback: Record<string, string>;
  setReviewFeedback: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  updating: string | null;
  handleUpdate: (id: string) => Promise<void>;
}) {
  return (
    <>
      {/* Header */}
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Projets soumis</h1>
          <p className="text-sm text-gray-500 mt-1">
            {projects.length} projet{projects.length !== 1 ? "s" : ""} soumis au total
          </p>
        </div>
      </motion.div>

      {/* Filter tabs */}
      <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
        {PROJECT_TABS.map((tab) => {
          const count = tab.id === "all" ? projects.length : projects.filter((p) => p.status === tab.id).length;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                activeFilter === tab.id
                  ? "bg-[#111] text-white border-[#111] shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-[#111]"
              )}
            >
              {tab.label}
              <span className={cn(
                "ml-1 text-xs font-semibold px-1.5 py-0.5 rounded-md",
                activeFilter === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
              )}>
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects list */}
      {loading ? (
        <motion.div variants={fadeUp} className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-[#FF1744] rounded-full animate-spin" />
        </motion.div>
      ) : filtered.length === 0 ? (
        <motion.div variants={fadeUp} className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">Aucun projet dans cette catégorie.</p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {filtered.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden"
              >
                {/* Project header row */}
                <div
                  className="flex items-center justify-between gap-3 p-5 cursor-pointer"
                  onClick={() => {
                    if (isExpanded) {
                      setExpandedId(null);
                    } else {
                      setExpandedId(project.id);
                      if (!reviewStatus[project.id]) {
                        setReviewStatus((prev) => ({ ...prev, [project.id]: project.status }));
                      }
                      if (reviewFeedback[project.id] === undefined) {
                        setReviewFeedback((prev) => ({ ...prev, [project.id]: project.feedback || "" }));
                      }
                    }
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-sm font-semibold text-[#111] truncate">{project.title}</h3>
                      <ProjectStatusBadge status={project.status} />
                    </div>
                    <p className="text-xs text-gray-400">
                      Par {project.user?.name || project.user?.email || "Inconnu"} &middot;{" "}
                      {new Date(project.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8f9fb] border border-gray-200 text-xs font-medium text-gray-500 hover:text-[#111] hover:border-gray-300 transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Lien
                      </a>
                    )}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn("text-gray-400 transition-transform duration-200", isExpanded && "rotate-180")}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Expanded review panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                        {/* Description */}
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">Description</p>
                          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{project.description}</p>
                        </div>

                        {/* Status dropdown */}
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">Statut</label>
                          <select
                            value={reviewStatus[project.id] || project.status}
                            onChange={(e) => setReviewStatus((prev) => ({ ...prev, [project.id]: e.target.value }))}
                            className="w-full max-w-xs px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all"
                          >
                            <option value="submitted">En attente</option>
                            <option value="reviewing">En revue</option>
                            <option value="approved">Approuvé</option>
                            <option value="needs_revision">\u00c0 réviser</option>
                          </select>
                        </div>

                        {/* Feedback textarea */}
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1.5">Feedback</label>
                          <textarea
                            value={reviewFeedback[project.id] ?? project.feedback ?? ""}
                            onChange={(e) => setReviewFeedback((prev) => ({ ...prev, [project.id]: e.target.value }))}
                            rows={3}
                            placeholder="Ajoute un retour pour l&apos;élève..."
                            className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fb] border border-gray-200 text-sm text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#FF1744]/50 focus:ring-2 focus:ring-[#FF1744]/10 transition-all resize-none"
                          />
                        </div>

                        {/* Save button */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleUpdate(project.id)}
                            disabled={updating === project.id}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-50"
                            style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
                          >
                            {updating === project.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Mise \u00e0 jour...
                              </>
                            ) : (
                              "Enregistrer"
                            )}
                          </button>
                          <button
                            onClick={() => setExpandedId(null)}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-[#111] hover:bg-gray-100 transition-all"
                          >
                            Annuler
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
