"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MODULES } from "@/lib/constants";

interface Favorite {
  id: string;
  title: string;
  moduleOrder: number;
  moduleTitle: string;
  savedAt: string;
}

const STORAGE_KEY = "opexia-favoris";

function getFavorites(): Favorite[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export default function FavorisPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setFavorites(getFavorites());

    const onStorage = () => setFavorites(getFavorites());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((f) => f.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setFavorites(updated);
  };

  const moduleNumbers = [...new Set(favorites.map((f) => f.moduleOrder))].sort((a, b) => a - b);

  const filtered =
    filter === "all"
      ? favorites
      : favorites.filter((f) => f.moduleOrder === Number(filter));

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
          Mes favoris
        </h1>
        <p className="text-sm text-gray-500">
          Retrouve tes lecons et ressources favorites en un clic.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
          <svg
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Aucun favori pour l&apos;instant
          </h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            Clique sur l&apos;etoile dans une lecon pour l&apos;ajouter a tes favoris.
          </p>
          <a
            href="/lessons"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF1744] hover:underline"
          >
            Voir les lecons
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      ) : (
        <>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-[#FF1744] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Tous ({favorites.length})
            </button>
            {moduleNumbers.map((n) => {
              const mod = MODULES.find((m) => m.order === n);
              const count = favorites.filter((f) => f.moduleOrder === n).length;
              return (
                <button
                  key={n}
                  onClick={() => setFilter(String(n))}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filter === String(n)
                      ? "bg-[#FF1744] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  M{n}{mod ? ` - ${mod.title.slice(0, 20)}` : ""} ({count})
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((fav) => (
                <motion.div
                  key={fav.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 group hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold text-[#FF1744] bg-red-50 px-2 py-0.5 rounded-full">
                      Module {fav.moduleOrder}
                    </span>
                    <button
                      onClick={() => removeFavorite(fav.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-0.5"
                      title="Retirer des favoris"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  </div>
                  <a href={`/lessons?open=${fav.id}`} className="block">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#FF1744] transition-colors">
                      {fav.title}
                    </h3>
                    <p className="text-[11px] text-gray-400">{fav.moduleTitle}</p>
                  </a>
                  <p className="text-[9px] text-gray-300 mt-3">
                    Ajouté le {new Date(fav.savedAt).toLocaleDateString("fr-FR")}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
