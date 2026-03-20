"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TYPES = [
  {
    value: "prospection",
    label: "Email de prospection",
    desc: "Rédige un email d'accroche pour tes prospects",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    placeholder:
      "Décris ta cible, ton service, et le résultat que tu veux mettre en avant...",
  },
  {
    value: "vente",
    label: "Script de vente",
    desc: "Crée un script d'appel ou de meeting",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    placeholder:
      "Décris le produit/service, le profil du prospect, et l'objectif de l'appel...",
  },
  {
    value: "proposition",
    label: "Proposition commerciale",
    desc: "Génère une proposition structurée",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    placeholder:
      "Décris le projet, le client, le budget estimé et les livrables...",
  },
  {
    value: "social",
    label: "Post LinkedIn",
    desc: "Rédige un post engageant pour LinkedIn",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 100 4 2 2 0 000-4z",
    placeholder:
      "Décris le sujet du post, ton expertise, et le message clé à faire passer...",
  },
  {
    value: "marketing",
    label: "Contenu marketing",
    desc: "Crée du contenu pour tes campagnes",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    placeholder:
      "Décris le produit, la cible, le canal (newsletter, landing page, pub)...",
  },
  {
    value: "client",
    label: "Email client",
    desc: "Rédige un email professionnel à un client",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    placeholder:
      "Décris le contexte (suivi projet, relance, onboarding, facturation)...",
  },
];

const TONES = [
  { value: "professionnel", label: "Professionnel" },
  { value: "decontracte", label: "Décontracté" },
  { value: "persuasif", label: "Persuasif" },
  { value: "expert", label: "Expert" },
];

const LENGTHS = [
  { value: "court", label: "Court", desc: "2-3 phrases" },
  { value: "moyen", label: "Moyen", desc: "1 paragraphe" },
  { value: "long", label: "Long", desc: "Texte complet" },
];

interface HistoryItem {
  id: string;
  type: string;
  typeLabel: string;
  context: string;
  result: string;
  tone: string;
  length: string;
  date: string;
}

const STORAGE_KEY = "opexia-generator-history";

function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(items: HistoryItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // quota exceeded — silently ignore
  }
}

export default function GenerateurPage() {
  const [type, setType] = useState("");
  const [tone, setTone] = useState("professionnel");
  const [length, setLength] = useState("moyen");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [expandedHistory, setExpandedHistory] = useState<string | null>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const canGenerate = type && context.trim().length >= 10;
  const selectedType = TYPES.find((t) => t.value === type);

  const handleGenerate = async () => {
    if (!canGenerate || generating) return;
    setGenerating(true);
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: type, context, tone, length }),
      });
      const data = await res.json();
      const output =
        data.result || data.error || "Erreur lors de la génération.";
      setResult(output);

      const newItem: HistoryItem = {
        id: Date.now().toString(),
        type,
        typeLabel: selectedType?.label || type,
        context,
        result: output,
        tone,
        length,
        date: new Date().toISOString(),
      };
      const updated = [newItem, ...history.slice(0, 4)];
      setHistory(updated);
      saveHistory(updated);
    } catch {
      setResult("Erreur de connexion. Vérifie ta connexion internet.");
    } finally {
      setGenerating(false);
    }
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const placeholderText =
    selectedType?.placeholder ||
    "Décris ton besoin en détail : contexte, cible, objectif, ton souhaité...";

  return (
    <div className="w-full max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#111] mb-1">
          Générateur IA
        </h1>
        <p className="text-sm text-gray-500">
          Génère des contenus professionnels en un clic.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          {/* ── Step 1: Type de contenu ── */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#FF1744]/10 text-[#FF1744] text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-sm font-semibold text-[#111]">
                Type de contenu
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TYPES.map((t) => {
                const active = type === t.value;
                return (
                  <button
                    key={t.value}
                    onClick={() => setType(active ? "" : t.value)}
                    className={cn(
                      "flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all",
                      active
                        ? "border-[#FF1744] bg-[#FF1744]/5 shadow-sm"
                        : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                    )}
                  >
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center",
                        active ? "bg-[#FF1744]/10" : "bg-gray-100"
                      )}
                    >
                      <svg
                        className="w-4.5 h-4.5"
                        style={{ color: active ? "#FF1744" : "#6b7280" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={t.icon} />
                      </svg>
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-xs font-semibold leading-tight mb-0.5",
                          active ? "text-[#FF1744]" : "text-[#111]"
                        )}
                      >
                        {t.label}
                      </p>
                      <p className="text-[10px] text-gray-400 leading-snug">
                        {t.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Step 2: Ton + Longueur ── */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#FF1744]/10 text-[#FF1744] text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span className="text-sm font-semibold text-[#111]">
                Options
              </span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Ton */}
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Tonalité
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {TONES.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setTone(t.value)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all",
                        tone === t.value
                          ? "bg-[#111] text-white shadow-sm"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Longueur */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Longueur
                </p>
                <div className="flex gap-1.5">
                  {LENGTHS.map((l) => (
                    <button
                      key={l.value}
                      onClick={() => setLength(l.value)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all",
                        length === l.value
                          ? "bg-[#111] text-white shadow-sm"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      )}
                    >
                      {l.label}
                      <span
                        className={cn(
                          "ml-1 text-[9px]",
                          length === l.value
                            ? "text-white/60"
                            : "text-gray-400"
                        )}
                      >
                        {l.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Step 3: Contexte ── */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#FF1744]/10 text-[#FF1744] text-xs font-bold flex items-center justify-center">
                3
              </span>
              <span className="text-sm font-semibold text-[#111]">
                Contexte
              </span>
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder={placeholderText}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 min-h-[130px] resize-y focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
            />
            <div className="flex items-center justify-between mt-1.5">
              <p className="text-[10px] text-gray-400">
                Plus tu es précis, meilleur est le résultat.
              </p>
              <span className="text-[10px] text-gray-400">
                {context.length} car.
              </span>
            </div>
          </div>

          {/* ── Generate button ── */}
          <button
            disabled={!canGenerate || generating}
            onClick={handleGenerate}
            className={cn(
              "w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-200",
              canGenerate && !generating
                ? "bg-gradient-to-r from-[#FF1744] to-[#D50000] text-white shadow-lg shadow-[#FF1744]/25 hover:shadow-[#FF1744]/40 hover:-translate-y-0.5"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            {generating ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Génération en cours...
              </>
            ) : (
              <>
                <svg
                  className="w-4.5 h-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                </svg>
                Générer
                {selectedType ? ` — ${selectedType.label}` : ""}
              </>
            )}
          </button>
        </div>

        {/* ── Result ── */}
        {(result || generating) && (
          <div className="border-t border-gray-100 p-6">
            {result ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-emerald-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      Résultat
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleRegenerate}
                      disabled={generating}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all border border-gray-200"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 4 23 10 17 10" />
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                      </svg>
                      Régénérer
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all border border-gray-200"
                    >
                      {copied ? (
                        <>
                          <svg
                            className="w-3.5 h-3.5 text-emerald-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-emerald-600">Copié !</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                            />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          Copier
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {result}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center py-8 gap-2">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
                <p className="text-xs text-gray-400">
                  L&apos;IA rédige ton contenu...
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── History section ── */}
      {history.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Dernières générations
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[10px] text-gray-400 font-medium">
              {history.length}/5
            </span>
          </div>

          <div className="space-y-2">
            {history.map((h) => {
              const isExpanded = expandedHistory === h.id;
              return (
                <div
                  key={h.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all"
                >
                  {/* Accordion header */}
                  <button
                    onClick={() =>
                      setExpandedHistory(isExpanded ? null : h.id)
                    }
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded-full">
                          {h.typeLabel}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {new Date(h.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">
                        {h.context}
                      </p>
                    </div>
                    <svg
                      className={cn(
                        "w-4 h-4 text-gray-400 transition-transform flex-shrink-0",
                        isExpanded && "rotate-180"
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="bg-gray-50 rounded-lg p-4 mt-3">
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {h.result}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(h.result);
                          }}
                          className="text-[10px] font-medium text-gray-500 hover:text-gray-700 border border-gray-200 px-2.5 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Copier
                        </button>
                        <button
                          onClick={() => {
                            setType(h.type);
                            setContext(h.context);
                            setTone(h.tone);
                            setLength(h.length);
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                          className="text-[10px] font-medium text-[#FF1744] hover:text-[#D50000] border border-[#FF1744]/20 px-2.5 py-1 rounded-lg hover:bg-[#FF1744]/5 transition-colors"
                        >
                          Réutiliser ce contexte
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
