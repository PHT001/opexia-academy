"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

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

type TabFilter = "all" | "submitted" | "reviewing" | "approved" | "needs_revision";

/* ——— Status helpers ——— */

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  submitted: { label: "En attente", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/25" },
  reviewing: { label: "En revue", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/25" },
  approved: { label: "Approuve", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/25" },
  needs_revision: { label: "A reviser", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/25" },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.submitted;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.color.replace("text-", "bg-")}`} />
      {cfg.label}
    </span>
  );
}

/* ——— Admin Tabs ——— */

const TABS: { id: TabFilter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "submitted", label: "En attente" },
  { id: "reviewing", label: "En revue" },
  { id: "approved", label: "Approuves" },
  { id: "needs_revision", label: "A reviser" },
];

/* ——— Main Page ——— */

export default function ProjetsPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  // Admin state
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchProjects = useCallback(() => {
    setLoading(true);
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProjects(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  /* Submit project */
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

  /* Admin: update project */
  const handleUpdateProject = async (projectId: string, status: string, feedback: string) => {
    setUpdatingId(projectId);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, feedback }),
      });
      if (res.ok) {
        const updated = await res.json();
        setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
      }
    } catch {
      // silent
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.status === activeTab);

  /* ——— Loading state ——— */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0F23] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#FF1744] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/40 text-sm">Chargement des projets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">
            {isAdmin ? "Projets soumis" : "Mes projets"}
          </h1>
          <p className="text-white/40 text-sm">
            {isAdmin
              ? "Gerez et evaluez les projets MVP soumis par les etudiants."
              : "Soumets ton projet MVP pour obtenir un retour de l'equipe OpexIA."}
          </p>
        </motion.div>

        {/* Student: Submit button */}
        {!isAdmin && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-6">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Soumettre un projet
              </button>
            ) : (
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Nouveau projet</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Titre du projet *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex: SaaS de gestion de factures"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF1744]/50 focus:ring-1 focus:ring-[#FF1744]/25 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Description *</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Decris ton projet, les technologies utilisees, le probleme resolu..."
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF1744]/50 focus:ring-1 focus:ring-[#FF1744]/25 transition-all resize-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5">Lien (GitHub, demo, site deploye)</label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF1744]/50 focus:ring-1 focus:ring-[#FF1744]/25 transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50"
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
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/[0.04] transition-all"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}

        {/* Admin: Tabs */}
        {isAdmin && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-6">
            <div className="flex items-center gap-1 p-1 bg-white/[0.04] rounded-xl border border-white/[0.06] w-fit">
              {TABS.map((tab) => {
                const count = tab.id === "all" ? projects.length : projects.filter((p) => p.status === tab.id).length;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-[#FF1744]/15 text-[#FF1744] border border-[#FF1744]/25"
                        : "text-white/40 hover:text-white/60 border border-transparent"
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Projects list */}
        {filteredProjects.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="text-white/40 text-sm mb-1">Aucun projet</p>
            <p className="text-white/25 text-xs">
              {isAdmin ? "Aucun projet soumis pour le moment." : "Soumets ton premier projet MVP !"}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                isAdmin={isAdmin}
                index={i}
                updating={updatingId === project.id}
                onUpdate={handleUpdateProject}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ——— Project Card ——— */

function ProjectCard({
  project,
  isAdmin,
  index,
  updating,
  onUpdate,
}: {
  project: Project;
  isAdmin: boolean;
  index: number;
  updating: boolean;
  onUpdate: (id: string, status: string, feedback: string) => void;
}) {
  const [editStatus, setEditStatus] = useState(project.status);
  const [editFeedback, setEditFeedback] = useState(project.feedback || "");
  const [expanded, setExpanded] = useState(false);

  const date = new Date(project.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.12] transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[15px] font-semibold text-white truncate">{project.title}</h3>
            <StatusBadge status={project.status} />
          </div>
          {isAdmin && project.user && (
            <p className="text-xs text-white/30">
              par {project.user.name || project.user.email} — {date}
            </p>
          )}
          {!isAdmin && <p className="text-xs text-white/30">Soumis le {date}</p>}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.1] transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Lien
          </a>
        )}
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-3 whitespace-pre-wrap">{project.description}</p>

      {/* Student: show feedback if any */}
      {!isAdmin && project.feedback && (
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mt-3">
          <p className="text-[11px] uppercase tracking-wider text-white/30 font-semibold mb-1.5">Retour de l'equipe</p>
          <p className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap">{project.feedback}</p>
        </div>
      )}

      {/* Admin: expand to edit */}
      {isAdmin && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium text-[#FF1744]/70 hover:text-[#FF1744] transition-colors mt-1"
          >
            {expanded ? "Fermer" : "Gerer"}
          </button>

          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-3 border-t border-white/[0.06] pt-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Statut</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#FF1744]/50 transition-all appearance-none"
                >
                  <option value="submitted" className="bg-[#1A1A2E]">En attente</option>
                  <option value="reviewing" className="bg-[#1A1A2E]">En revue</option>
                  <option value="approved" className="bg-[#1A1A2E]">Approuve</option>
                  <option value="needs_revision" className="bg-[#1A1A2E]">A reviser</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Feedback</label>
                <textarea
                  value={editFeedback}
                  onChange={(e) => setEditFeedback(e.target.value)}
                  placeholder="Ajouter un retour pour l'etudiant..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#FF1744]/50 transition-all resize-none"
                />
              </div>
              <button
                onClick={() => onUpdate(project.id, editStatus, editFeedback)}
                disabled={updating}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}
              >
                {updating ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Mise a jour...
                  </>
                ) : (
                  "Enregistrer"
                )}
              </button>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
}
