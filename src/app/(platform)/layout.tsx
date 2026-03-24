"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/platform/Sidebar";
import { XPToastProvider } from "@/components/platform/XPToast";
import PostPurchaseOnboarding from "@/components/platform/PostPurchaseOnboarding";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter" });
  const [freeBannerDismissed, setFreeBannerDismissed] = useState(false);
  const [previewTier, setPreviewTier] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin-preview-tier") || null;
    }
    return null;
  });

  const handlePreviewTierChange = (tier: string | null) => {
    setPreviewTier(tier);
    if (tier) {
      localStorage.setItem("admin-preview-tier", tier);
    } else {
      localStorage.removeItem("admin-preview-tier");
    }
    // Dispatch event so other components can react
    window.dispatchEvent(new CustomEvent("preview-tier-change", { detail: tier }));
  };
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loadingOnboarding, setLoadingOnboarding] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          setStats({ xp: data.xp, streak: data.streak, tier: data.tier || "starter" });
        }
        // Show onboarding if user has enrollment but hasn't completed onboarding
        if (data?.tier && data?.onboardingCompleted === false) {
          setShowOnboarding(true);
        }
        setLoadingOnboarding(false);
      })
      .catch(() => setLoadingOnboarding(false));
  }, []);

  if (showOnboarding && !loadingOnboarding) {
    return (
      <PostPurchaseOnboarding
        userName={session?.user?.name || undefined}
        onComplete={() => setShowOnboarding(false)}
      />
    );
  }

  return (
    <XPToastProvider>
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar
        userName={session?.user?.name}
        role={session?.user?.role}
        xp={stats.xp}
        streak={stats.streak}
        tier={previewTier || stats.tier}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        previewTier={previewTier}
        onPreviewTierChange={session?.user?.role === "admin" ? handlePreviewTierChange : undefined}
      />

      {/* Mobile topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 h-14 bg-white/95 backdrop-blur-xl border-b border-gray-200 flex items-center px-4 shadow-sm">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-500"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <span className="ml-3 text-lg font-bold tracking-tight">
          <span className="text-[#111]">Opex</span>
          <span className="text-[#FF1744]">IA</span>
        </span>
      </div>

      <main className="lg:ml-[260px] pt-14 lg:pt-0 min-h-screen overflow-x-hidden">
        {/* Free tier upgrade banner */}
        {(previewTier || stats.tier) === "free" && !freeBannerDismissed && session?.user?.role !== "admin" && (
          <div className="bg-gradient-to-r from-[#FF1744]/8 to-[#FF1744]/4 border-b border-[#FF1744]/10">
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5">
              <p className="text-sm text-[#111]">
                Tu utilises le plan <span className="font-semibold text-[#FF1744]">Gratuit</span> — D&eacute;bloque toute la formation
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold bg-[#FF1744] text-white hover:bg-[#D50000] transition-colors shadow-sm"
                >
                  Voir les offres
                </Link>
                <button
                  onClick={() => setFreeBannerDismissed(true)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fermer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="p-4 sm:p-6 lg:p-8 xl:p-10 w-full">
          {children}
        </div>
      </main>
    </div>
    </XPToastProvider>
  );
}
