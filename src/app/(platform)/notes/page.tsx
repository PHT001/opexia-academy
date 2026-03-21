"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  folder: string;
  color: string;
  icon: string;
  updatedAt: string;
  pinned: boolean;
}

const COLORS = ["#FF1744", "#FF6D00", "#00C853", "#2979FF", "#AA00FF", "#78909C"];
const ICONS = ["📝", "💡", "🚀", "🎯", "📊", "⚡", "🔥", "📌", "💰", "🧠"];

const DEFAULT_FOLDERS = ["Général", "Module 1", "Module 2", "Idées business"];

const INITIAL_NOTES: Note[] = [
  {
    id: "1",
    title: "Opportunité PME",
    content:
      "Les PME n'ont pas encore adopté l'IA → énorme opportunité.\n\n72% des grandes entreprises l'utilisent mais les TPE/PME sont massivement sous-équipées.\n\n## Actions\n- Lister 10 PME locales qui pourraient bénéficier de l'IA\n- Préparer un pitch de 30 secondes\n- Contacter 3 PME cette semaine\n\n> Idée : cibler les PME locales en premier.",
    folder: "Module 1",
    color: "#FF1744",
    icon: "🎯",
    updatedAt: new Date("2026-03-18T10:30:00").toISOString(),
    pinned: true,
  },
  {
    id: "2",
    title: "Framework CRAFT",
    content:
      "Le framework CRAFT est le plus efficace :\n\n- **Context** — donne le contexte\n- **Role** — assigne un rôle à l'IA\n- **Action** — décris ce que tu veux\n- **Format** — précise le format attendu\n- **Tone** — indique le ton\n\n> Toujours donner un rôle avant de poser la question.\n\n## Exemple\n\"Tu es un expert en copywriting B2B. Rédige un email de prospection pour une agence IA ciblant les cabinets comptables. Format : email court (5 lignes max). Ton : professionnel mais humain.\"",
    folder: "Module 2",
    color: "#2979FF",
    icon: "🧠",
    updatedAt: new Date("2026-03-17T14:20:00").toISOString(),
    pinned: false,
  },
  {
    id: "3",
    title: "Services à vendre",
    content:
      "## Les 3 services les plus rentables\n\n### 1. Chatbot IA — 1500-3000€\nSupport client, prise de RDV, qualification de leads.\nOutils : Botpress, Voiceflow, Make\n\n### 2. Automatisation Make/n8n — 800-2000€\nFacturation, relances, reporting.\nROI immédiat pour le client.\n\n### 3. Site web avec IA — 1000-2500€\nLanding pages, chatbot intégré.\nOutils : Cursor, V0, Vercel\n\n> Commencer par les chatbots → plus facile à vendre et démontrer.",
    folder: "Idées business",
    color: "#00C853",
    icon: "💰",
    updatedAt: new Date("2026-03-16T09:00:00").toISOString(),
    pinned: false,
  },
];

const STORAGE_KEY = "opexia-notes-v2";

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

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

/* Simple markdown-like renderer */
function RenderContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  function renderInline(text: string, key: string): React.ReactNode {
    // Bold
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={key}>
        {parts.map((part, idx) =>
          idx % 2 === 1 ? (
            <strong key={idx} className="font-semibold text-[#111]">{part}</strong>
          ) : (
            <span key={idx}>{part}</span>
          )
        )}
      </span>
    );
  }

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={i} className="h-3" />);
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      elements.push(
        <h2 key={i} className="text-lg font-bold text-[#111] mt-6 mb-2 pb-1 border-b border-gray-100">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-base font-semibold text-[#111] mt-4 mb-1">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-3 border-l-[3px] border-gray-200 pl-4 py-1 my-2 text-gray-500 italic">
          {renderInline(line.slice(2), `bq-${i}`)}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(
          <li key={i} className="flex gap-2.5 items-start py-0.5">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
            <span>{renderInline(lines[i].slice(2), `li-${i}`)}</span>
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-2 space-y-0.5 text-gray-600">
          {listItems}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-gray-600 leading-relaxed">
        {renderInline(line, `p-${i}`)}
      </p>
    );
    i++;
  }

  return <div className="notion-content text-[15px]">{elements}</div>;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "editor">("list");
  const [mounted, setMounted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const loaded = loadNotes();
    setNotes(loaded);
    if (loaded.length > 0) setActiveNoteId(loaded[0].id);
    setMounted(true);
  }, []);

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
      icon: ICONS[notes.length % ICONS.length],
      updatedAt: new Date().toISOString(),
      pinned: false,
    };
    setNotes((prev) => [newNote, ...prev]);
    setActiveNoteId(newNote.id);
    setEditing(true);
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
    setEditing(false);
    setMobileView("editor");
  }

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
        className={`flex-shrink-0 border-r border-gray-100 flex flex-col bg-[#FBFBFA] transition-all duration-200
          ${mobileView === "editor" ? "hidden md:flex" : "flex"}
          w-full md:w-[300px]`}
      >
        {/* Header */}
        <div className="p-4 pb-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Notes</h2>
            <button
              onClick={createNote}
              className="h-7 w-7 rounded-md hover:bg-gray-200/70 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              title="Nouvelle note"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <div className="relative mb-3">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-transparent border border-gray-200 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-gray-300 transition-all"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-hide">
            <button
              onClick={() => setActiveFolder(null)}
              className={`flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                !activeFolder ? "bg-white text-[#111] shadow-sm border border-gray-200" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Tout
            </button>
            {DEFAULT_FOLDERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFolder(activeFolder === f ? null : f)}
                className={`flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                  activeFolder === f ? "bg-white text-[#111] shadow-sm border border-gray-200" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {f}
                {folderCounts[f] ? <span className="ml-1 opacity-50">{folderCounts[f]}</span> : null}
              </button>
            ))}
          </div>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto px-2">
          {sortedNotes.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 px-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Aucune note</p>
              <button onClick={createNote} className="text-xs text-[#FF1744] hover:underline">
                + Créer une note
              </button>
            </div>
          )}
          {sortedNotes.map((note) => {
            const isActive = activeNoteId === note.id;
            return (
              <div
                key={note.id}
                onClick={() => selectNote(note)}
                className={`relative px-3 py-2.5 cursor-pointer rounded-lg mb-0.5 transition-all ${
                  isActive
                    ? "bg-white shadow-sm border border-gray-200"
                    : "hover:bg-gray-100/70"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5 flex-shrink-0">{note.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h4 className={`text-sm font-medium truncate ${isActive ? "text-[#111]" : "text-gray-700"}`}>
                        {note.title || "Sans titre"}
                      </h4>
                      {note.pinned && (
                        <svg className="w-3 h-3 text-[#FF1744] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 truncate leading-relaxed">
                      {note.content.replace(/[#>*-]/g, "").split("\n").filter(Boolean)[0] || "Note vide..."}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] text-gray-400">{formatDate(note.updatedAt)}</span>
                      <span className="text-[10px] text-gray-300">&middot;</span>
                      <span className="text-[10px] text-gray-400">{note.folder}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-4 py-2.5 border-t border-gray-100">
          <p className="text-[11px] text-gray-400">{notes.length} note{notes.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* ═══ RIGHT PANEL — NOTION-STYLE ═══ */}
      <div
        className={`flex-1 flex flex-col min-w-0 bg-white
          ${mobileView === "list" ? "hidden md:flex" : "flex"}`}
      >
        {activeNote ? (
          <div className="flex-1 overflow-y-auto">
            {/* Color banner */}
            <div
              className="h-32 w-full relative"
              style={{ background: `linear-gradient(135deg, ${activeNote.color}20 0%, ${activeNote.color}08 100%)` }}
            >
              {/* Top bar: actions */}
              <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => { setMobileView("list"); setEditing(false); }}
                  className="md:hidden w-8 h-8 rounded-lg bg-white/80 backdrop-blur flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="hidden md:block" />
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditing(!editing)}
                    className={`h-8 px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      editing
                        ? "bg-[#FF1744] text-white shadow-sm"
                        : "bg-white/80 backdrop-blur text-gray-600 hover:bg-white"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    {editing ? "Aperçu" : "Éditer"}
                  </button>
                  <button
                    onClick={() => togglePin(activeNote.id)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      activeNote.pinned ? "bg-[#FF1744]/10 text-[#FF1744]" : "bg-white/80 backdrop-blur text-gray-400 hover:bg-white"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteNote(activeNote.id)}
                    className="w-8 h-8 rounded-lg bg-white/80 backdrop-blur flex items-center justify-center text-gray-400 hover:bg-white hover:text-red-500 transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="max-w-3xl mx-auto px-8 md:px-16 -mt-10 relative pb-20">
              {/* Icon */}
              <div className="relative mb-4">
                <button
                  onClick={() => setShowIconPicker(!showIconPicker)}
                  className="text-5xl hover:opacity-80 transition-opacity cursor-pointer"
                  title="Changer l'icône"
                >
                  {activeNote.icon}
                </button>
                {showIconPicker && (
                  <div className="absolute top-16 left-0 z-20 bg-white rounded-xl shadow-xl border border-gray-200 p-3 grid grid-cols-5 gap-1.5">
                    {ICONS.map((icon) => (
                      <button
                        key={icon}
                        onClick={() => { updateNote("icon", icon); setShowIconPicker(false); }}
                        className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center text-xl transition-colors"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              {editing ? (
                <input
                  ref={titleRef}
                  type="text"
                  value={activeNote.title}
                  onChange={(e) => updateNote("title", e.target.value)}
                  placeholder="Sans titre"
                  className="w-full text-4xl font-bold text-[#111] placeholder:text-gray-300 focus:outline-none mb-2 bg-transparent"
                />
              ) : (
                <h1 className="text-4xl font-bold text-[#111] mb-2">
                  {activeNote.title || "Sans titre"}
                </h1>
              )}

              {/* Meta */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 text-[13px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {formatDate(activeNote.updatedAt)}
                </div>
                {editing ? (
                  <select
                    value={activeNote.folder}
                    onChange={(e) => updateNote("folder", e.target.value)}
                    className="text-[13px] text-gray-400 bg-transparent focus:outline-none cursor-pointer hover:text-gray-600 transition-colors"
                  >
                    {DEFAULT_FOLDERS.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                ) : (
                  <span className="px-2 py-0.5 rounded-md text-xs font-medium" style={{ backgroundColor: activeNote.color + "12", color: activeNote.color }}>
                    {activeNote.folder}
                  </span>
                )}
                <span>{wordCount(activeNote.content)} mots</span>
              </div>

              {/* Content */}
              {editing ? (
                <>
                  <textarea
                    ref={contentRef}
                    value={activeNote.content}
                    onChange={(e) => updateNote("content", e.target.value)}
                    placeholder={"Commence à écrire...\n\nUtilise ## pour un titre, - pour une liste, > pour une citation, **texte** pour du gras."}
                    className="w-full text-[15px] text-gray-700 leading-[1.9] placeholder:text-gray-300 focus:outline-none resize-none min-h-[400px] bg-transparent font-mono"
                  />
                  <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-400 font-medium mb-1.5">Raccourcis de mise en forme</p>
                    <div className="flex flex-wrap gap-3 text-[11px] text-gray-400">
                      <span><code className="bg-gray-200 px-1 rounded text-gray-500">## Titre</code> titre</span>
                      <span><code className="bg-gray-200 px-1 rounded text-gray-500">### Sous-titre</code> sous-titre</span>
                      <span><code className="bg-gray-200 px-1 rounded text-gray-500">- item</code> liste</span>
                      <span><code className="bg-gray-200 px-1 rounded text-gray-500">&gt; texte</code> citation</span>
                      <span><code className="bg-gray-200 px-1 rounded text-gray-500">**gras**</code> gras</span>
                    </div>
                  </div>
                </>
              ) : (
                <RenderContent content={activeNote.content} />
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#FBFBFA]">
            <div className="text-center px-6 max-w-sm">
              <div className="text-5xl mb-5">📝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sélectionne une note</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Choisis une note dans la liste ou crée-en une nouvelle.
              </p>
              <button
                onClick={createNote}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] hover:bg-[#333] text-white text-sm font-medium rounded-lg transition-colors"
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
