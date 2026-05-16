"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ProgressData {
  tier?: string;
  freeCallUsed?: boolean;
}

const CAL_COM_HANDLE = "opexia/30min";
const WHATSAPP_LINK = "https://wa.me/33756885225";

export default function CoachingPage() {
  const [tier, setTier] = useState<string>("free");
  const [freeCallUsed, setFreeCallUsed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: ProgressData | null) => {
        if (data?.tier) setTier(data.tier);
        if (typeof data?.freeCallUsed === "boolean") setFreeCallUsed(data.freeCallUsed);
      })
      .finally(() => setLoading(false));
  }, []);

  const isUnlimited = tier === "accompagnement" || tier === "one_to_one";
  const isPaying = tier === "standard" || tier === "academy" || tier === "starter" || isUnlimited;
  const isFree = !isPaying;

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-8 sm:py-12">
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#06B6D4] mb-1.5">Appels coaching</p>
        <h1 className="text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">
          Réserve un appel avec Marius
        </h1>
        <p className="text-[#6B7280] leading-relaxed">
          30 min en visio · on revoit ton blocage, ton offre, ta prospection ou ton MVP en cours. Tu repars avec un plan clair.
        </p>
      </div>

      {/* Status pill */}
      {!loading && (
        <div className="mb-6">
          {isFree ? (
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gray-50 border border-gray-200 text-sm font-semibold text-[#6B7280]">
              🔒 L&apos;appel coaching est réservé aux membres Standard ou Accompagnement
            </div>
          ) : isUnlimited ? (
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-50 border border-emerald-200 text-sm font-semibold text-emerald-700">
              ⚡ Accompagnement · appels illimités
            </div>
          ) : freeCallUsed ? (
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-amber-50 border border-amber-200 text-sm font-semibold text-amber-700">
              ✓ Ton appel offert de ce mois est utilisé · le compteur se reset le 1er du mois prochain
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-sm font-semibold text-[#06B6D4]">
              🎁 Ton appel offert ce mois t&apos;attend · réserve un créneau ci-dessous
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      {isFree ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <p className="text-base text-[#111] font-semibold mb-2">Tu n&apos;as pas encore accès à la plateforme</p>
          <p className="text-sm text-[#6B7280] mb-6">Standard · 89€/mois ou Lifetime 697€ une fois. 1 appel offert par mois inclus dans les deux.</p>
          <Link
            href="/offres"
            prefetch
            className="inline-flex items-center gap-2 bg-[#06B6D4] text-white rounded-xl px-6 py-3 text-sm font-bold hover:bg-[#0891B2] transition-colors"
          >
            Voir les offres →
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
          <iframe
            src={`https://cal.com/${CAL_COM_HANDLE}?theme=light&hide_landing_page_details=1`}
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-xl"
            title="Réserver un appel avec Marius"
          />
        </div>
      )}

      {/* Help section */}
      <div className="mt-10 rounded-2xl bg-[#F8F9FA] p-6 sm:p-7">
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B7280] mb-2">Tu as une question urgente ?</p>
        <p className="text-[#111] mb-4 leading-relaxed">
          Écris-moi directement sur WhatsApp · je réponds en moins d&apos;une heure en journée.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold hover:bg-[#1da851] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
          </svg>
          Écrire sur WhatsApp
        </a>
      </div>
    </div>
  );
}
