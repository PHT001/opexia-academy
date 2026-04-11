"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Sidebar } from "@/components/platform/Sidebar";
import { XPToastProvider } from "@/components/platform/XPToast";
import PostPurchaseOnboarding from "@/components/platform/PostPurchaseOnboarding";
import { ChatWidget } from "@/components/platform/ChatWidget";


export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  // Force logout if session is invalid (user deleted by admin)
  useEffect(() => {
    if (status === "unauthenticated") {
      signOut({ callbackUrl: "/login" });
    }
    // Also check if session exists but user is empty (deleted user with invalidated token)
    if (status === "authenticated" && session && !session.user) {
      signOut({ callbackUrl: "/login" });
    }
  }, [status, session]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ xp: 0, tier: session?.user?.tier || "starter" });
  const [freeBannerDismissed, setFreeBannerDismissed] = useState(false);
  const [emailVerified, setEmailVerified] = useState(true);
  const [emailBannerDismissed, setEmailBannerDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    const dismissed = localStorage.getItem("opexia-email-banner-dismissed");
    if (!dismissed) return false;
    // Check if 24h have passed since dismissal
    const dismissedAt = parseInt(dismissed, 10);
    if (Date.now() - dismissedAt > 24 * 60 * 60 * 1000) {
      localStorage.removeItem("opexia-email-banner-dismissed");
      return false;
    }
    return true;
  });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("opexia-dark-mode") === "true";
    }
    return false;
  });

  useEffect(() => {
    const handler = () => {
      setDarkMode(localStorage.getItem("opexia-dark-mode") === "true");
    };
    window.addEventListener("dark-mode-change", handler);
    return () => window.removeEventListener("dark-mode-change", handler);
  }, []);
  const isAdmin = session?.user?.role === "admin";
  const [previewTier, setPreviewTier] = useState<string | null>(null);

  // Only read admin-preview-tier from localStorage for admins
  useEffect(() => {
    if (isAdmin && typeof window !== "undefined") {
      setPreviewTier(localStorage.getItem("admin-preview-tier") || null);
    }
  }, [isAdmin]);

  // Sync preview tier when changed from dashboard
  useEffect(() => {
    const handler = (e: Event) => {
      setPreviewTier((e as CustomEvent).detail);
    };
    window.addEventListener("preview-tier-change", handler);
    return () => window.removeEventListener("preview-tier-change", handler);
  }, []);

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
      .then((r) => {
        if (r.status === 401) {
          signOut({ callbackUrl: "/login" });
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (!data) return;
        if (data?.xp !== undefined) {
          setStats({ xp: data.xp, tier: data.tier || "free" });
        }
        if (data?.emailVerified !== undefined) {
          setEmailVerified(data.emailVerified);
        }
        // Show onboarding only for PAID users who haven't completed it (skip for admins)
        if (data?.tier && data.tier !== "free" && data?.onboardingCompleted === false && data?.role !== "admin") {
          setShowOnboarding(true);
        }
        setLoadingOnboarding(false);
      })
      .catch(() => setLoadingOnboarding(false));
  }, []);

  // Block ALL content while checking onboarding status — prevents dashboard flash
  if (loadingOnboarding) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center" style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #F5F5F5 100%)" }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-gray-200 border-t-[#FF1744] rounded-full animate-spin" />
          <span className="text-sm text-gray-400 font-medium">Chargement...</span>
        </div>
      </div>
    );
  }

  if (showOnboarding) {
    return (
      <PostPurchaseOnboarding
        userName={session?.user?.name || undefined}
        tier={stats.tier}
        onComplete={() => setShowOnboarding(false)}
      />
    );
  }

  return (
    <XPToastProvider>
    <div className={`min-h-screen ${darkMode ? "theme-dark" : "bg-[#F8F9FA]"}`}>
      <Sidebar
        userName={session?.user?.name}
        role={session?.user?.role}
        xp={stats.xp}
        tier={previewTier || stats.tier}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        previewTier={previewTier}
        onPreviewTierChange={isAdmin ? handlePreviewTierChange : undefined}
      />

      {/* Mobile topbar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-30 h-14 border-b flex items-center px-4 shadow-sm ${darkMode ? "bg-[#0A0A0A] border-white/10" : "bg-white border-gray-200"}`}>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2.5 -ml-1 text-gray-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
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

      <main className="lg:ml-[260px] pt-14 lg:pt-0 min-h-screen">
        {/* Free tier upgrade banner */}
        {(previewTier || stats.tier) === "free" && !freeBannerDismissed && session?.user?.role !== "admin" && (
          <div className="bg-gradient-to-r from-[#FF1744]/8 to-[#FF1744]/4 border-b border-[#FF1744]/10">
            <div className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 xl:px-10 py-2">
              <p className="text-xs sm:text-sm text-[#111] min-w-0 truncate sm:whitespace-normal">
                Plan <span className="font-semibold text-[#FF1744]">Gratuit</span> <span className="hidden sm:inline">— D&eacute;bloque toute la formation</span>
              </p>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Link
                  href="/offres"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold bg-[#FF1744] text-white hover:bg-[#D50000] transition-colors shadow-sm min-h-[44px]"
                >
                  <span className="hidden sm:inline">Voir les offres</span>
                  <span className="sm:hidden">Upgrade</span>
                </Link>
                <button
                  onClick={() => setFreeBannerDismissed(true)}
                  className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        {/* Email verification soft reminder */}
        {!emailVerified && !emailBannerDismissed && (
          <div className="bg-amber-50 border-b border-amber-200/60">
            <div className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 lg:px-8 xl:px-10 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p className="text-xs sm:text-sm text-amber-800 truncate sm:whitespace-normal">
                  V&eacute;rifie ton email
                </p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Link
                  href="/verify-email"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm min-h-[44px]"
                >
                  V&eacute;rifier
                </Link>
                <button
                  onClick={() => {
                    setEmailBannerDismissed(true);
                    localStorage.setItem("opexia-email-banner-dismissed", Date.now().toString());
                  }}
                  className="p-2.5 text-amber-400 hover:text-amber-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
      <ChatWidget />
    </div>
    </XPToastProvider>
  );
}
