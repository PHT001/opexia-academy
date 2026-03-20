"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  folder: string;
  color: string;
  updatedAt: string;
  pinned: boolean;
}

const COLORS = ["#FF1744", "#FF6D00", "#00C853", "#2979FF", "#AA00FF", "#78909C"];
const COLOR_NAMES: Record<string, string> = {
  "#FF1744": "Rouge",
  "#FF6D00": "Orange",
  "#00C853": "Vert",
  "#2979FF": "Bleu",
  "#AA00FF": "Violet",
  "#78909C": "Gris",
};

const DEFAULT_FOLDERS = ["Général", "Module 1", "Module 2", "Idées business"];

const INITIAL_NOTES: Note[] = [
  {
    id: "1",
    title: "Opportunité PME",
    content:
      "Les PME n'ont pas encore adopté l'IA → énorme opportunité.\n\n72% des grandes entreprises l'utilisent mais les TPE/PME sont massivement sous-équipées.\n\nIdée : cibler les PME locales en premier.",
    folder: "Module 1",
    color: "#FF1744",
    updatedAt: new Date("2026-03-18T10:30:00").toISOString(),
    pinned: true,
  },
  {
    id: "2",
    title: "Framework CRAFT",
    content:
      "Le framework CRAFT est le plus efficace :\n\n• Context — donne le contexte\n• Role — assigne un rôle à l'IA\n• Action — décris ce que tu veux\n• Format — précise le format attendu\n• Tone — indique le ton\n\nToujours donner un rôle avant de poser la question.",
    folder: "Module 2",
    color: "#2979FF",
    updatedAt: new Date("2026-03-17T14:20:00").toISOString(),
    pinned: false,
  },
  {
    id: "3",
    title: "Services à vendre",
    content:
      "Les 3 services les plus rentables :\n\n1. Chatbot IA — 1500-3000€\n2. Automatisation Make/n8n — 800-2000€\n3. Site web avec IA — 1000-2500€\n\nCommencer par les chatbots → plus facile à vendre.",
    folder: "Idées business",
    color: "#00C853",
    updatedAt: new Date("2026-03-16T09:00:00").toISOString(),
    pinned: false,
  },
];

const STORAGE_KEY = "opexia-notes";

function loadNotes(): Note[] {
  if (typeof window === "undefined") return INITIAL_NOTES;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return INITIAL_NOTES;
}

function saveNotes(notes: Note[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {}
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `il y a ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `il y a ${days}j`;
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "editor">("list");
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const loaded = loadNotes();
    setNotes(loaded);
    if (loaded.length > 0) setActiveNoteId(loaded[0].id);
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (mounted && notes.length > 0) {
      saveNotes(notes);
    }
  }, [notes, mounted]);

  const activeNote = notes.find((n) => n.id === activeNoteId) || null;

  const filteredNotes = notes.filter((n) => {
    const matchFolder = !activeFolder || n.folder === activeFolder;
    const matchSearch =
      !search ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase());
    return matchFolder && matchSearch;
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  const folderCounts = DEFAULT_FOLDERS.reduce((acc, f) => {
    acc[f] = notes.filter((n) => n.folder === f).length;
    return acc;
  }, {} as Record<string, number>);

  const createNote = useCallback(() => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "",
      content: "",
      folder: activeFolder || "Général",
      color: COLORS[notes.length % COLORS.length],
      updatedAt: new Date().toISOString(),
      pinned: false,
    };
    setNotes((prev) => [newNote, ...prev]);
    setActiveNoteId(newNote.id);
    setMobileView("editor");
    setTimeout(() => titleRef.current?.focus(), 100);
  }, [activeFolder, notes.length]);

  function updateNote(field: keyof Note, value: string | boolean) {
    if (!activeNote) return;
    const updated = { ...activeNote, [field]: value, updatedAt: new Date().toISOString() };
    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
  }

  function deleteNote(id: string) {
    setNotes((prev) => {
      const remaining = prev.filter((n) => n.id !== id);
      if (activeNoteId === id) {
        setActiveNoteId(remaining[0]?.id || null);
        setMobileView("list");
      }
      return remaining;
    });
  }

  function togglePin(id: string) {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned, updatedAt: new Date().toISOString() } : n)));
  }

  function selectNote(note: Note) {
    setActiveNoteId(note.id);
    setMobileView("editor");
  }

  // Auto-resize textarea
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    }
  }, [activeNote?.content]);

  if (!mounted) {
    return (
      <div className="w-full h-[calc(100vh-2rem)] flex items-center justify-center bg-white rounded-2xl border border-gray-200">
        <div className="w-5 h-5 border-2 border-gray-200 border-t-[#FF1744] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-2rem)] flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* ═══ LEFT SIDEBAR ═══ */}
      <div
        className={`flex-shrink-0 border-r border-gray-100 flex flex-col bg-white transition-all duration-200
          ${mobileView === "editor" ? "hidden md:flex" : "flex"}
          w-full md:w-[300px]`}
      >
        {/* Header: Search + New Note */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher une note..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
              />
            </div>
            <button
              onClick={createNote}
              className="flex-shrink-0 h-[38px] px-3 bg-[#FF1744] hover:bg-[#D50000] text-white rounded-xl flex items-center gap-1.5 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span className="hidden sm:inline">Nouvelle</span>
            </button>
          </div>

          {/* Folder pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-hide">
            <button
              onClick={() => setActiveFolder(null)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                !activeFolder ? "bg-[#111] text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Tout
            </button>
            {DEFAULT_FOLDERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFolder(activeFolder === f ? null : f)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  activeFolder === f ? "bg-[#111] text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f}
                {folderCounts[f] ? (
                  <span className="ml-1 opacity-60">({folderCounts[f]})</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto">
          {sortedNotes.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mb-1">Aucune note trouvée</p>
              <p className="text-xs text-gray-300">
                {search ? "Essaie un autre terme" : "Crée ta première note"}
              </p>
            </div>
          )}
          {sortedNotes.map((note) => {
            const isActive = activeNoteId === note.id;
            return (
              <div
                key={note.id}
                onClick={() => selectNote(note)}
                className={`relative px-4 py-3 cursor-pointer transition-all border-l-[3px] ${
                  isActive
                    ? "bg-[#FF1744]/[0.04] border-l-[#FF1744]"
                    : "border-l-transparent hover:bg-gray-50/80"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    {/* Color dot */}
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: note.color }}
                    />
                    {note.pinned && (
                      <svg className="w-3 h-3 text-[#FF1744] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                      </svg>
                    )}
                    <h4
                      className={`text-[13px] font-semibold truncate ${
                        isActive ? "text-[#111]" : "text-gray-700"
                      }`}
                    >
                      {note.title || "Sans titre"}
                    </h4>
                  </div>
                  <span className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5">
                    {formatDate(note.updatedAt)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-1 leading-relaxed pl-[14px]">
                  {note.content.split("\n")[0] || "Note vide..."}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sidebar footer: note count */}
        <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50">
          <p className="text-[11px] text-gray-400">
            {notes.length} note{notes.length !== 1 ? "s" : ""}
            {activeFolder && (
              <span>
                {" "}dans <span className="font-medium text-gray-500">{activeFolder}</span>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* ═══ RIGHT PANEL — EDITOR ═══ */}
      <div
        className={`flex-1 flex flex-col min-w-0 bg-white
          ${mobileView === "list" ? "hidden md:flex" : "flex"}`}
      >
        {activeNote ? (
          <>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50/30">
              <div className="flex items-center gap-2">
                {/* Back button (mobile only) */}
                <button
                  onClick={() => setMobileView("list")}
                  className="md:hidden w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* Folder selector */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-xs">
                  <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  <select
                    value={activeNote.folder}
                    onChange={(e) => updateNote("folder", e.target.value)}
                    className="text-xs text-gray-600 bg-transparent focus:outline-none cursor-pointer pr-1"
                  >
                    {DEFAULT_FOLDERS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color selector */}
                <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-white border border-gray-200">
                  {COLORS.map((c) => (
                    <button
                      key={c}
                      onClick={() => updateNote("color", c)}
                      className={`w-4 h-4 rounded-full transition-all ${
                        activeNote.color === c ? "ring-2 ring-offset-1 scale-110" : "hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: c,
                        boxShadow: activeNote.color === c ? `0 0 0 2px white, 0 0 0 4px ${c}` : undefined,
                      }}
                      title={COLOR_NAMES[c]}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Pin */}
                <button
                  onClick={() => togglePin(activeNote.id)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    activeNote.pinned
                      ? "bg-[#FF1744]/10 text-[#FF1744]"
                      : "hover:bg-gray-100 text-gray-400"
                  }`}
                  title={activeNote.pinned ? "Désépingler" : "Épingler"}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                  </svg>
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteNote(activeNote.id)}
                  className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all"
                  title="Supprimer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Editor body */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-2xl mx-auto px-6 md:px-10 py-8">
                <input
                  ref={titleRef}
                  type="text"
                  value={activeNote.title}
                  onChange={(e) => updateNote("title", e.target.value)}
                  placeholder="Titre de la note..."
                  className="w-full text-xl md:text-2xl font-bold text-[#111] placeholder:text-gray-300 focus:outline-none mb-2 bg-transparent"
                />
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <span className="text-[11px] text-gray-400">
                    Modifié {formatDate(activeNote.updatedAt)}
                  </span>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: activeNote.color + "15",
                      color: activeNote.color,
                    }}
                  >
                    {activeNote.folder}
                  </span>
                </div>
                <textarea
                  ref={contentRef}
                  value={activeNote.content}
                  onChange={(e) => updateNote("content", e.target.value)}
                  placeholder="Commence à écrire..."
                  className="w-full text-sm text-gray-700 leading-[1.8] placeholder:text-gray-300 focus:outline-none resize-none min-h-[400px] bg-transparent"
                />
              </div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Aucune note sélectionnée
              </h3>
              <p className="text-sm text-gray-400 mb-5 max-w-xs mx-auto">
                Sélectionne une note dans la liste ou crée-en une nouvelle pour commencer.
              </p>
              <button
                onClick={createNote}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Nouvelle note
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
