"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/platform/Sidebar";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter" });

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          setStats({ xp: data.xp, streak: data.streak, tier: data.tier || "starter" });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar
        userName={session?.user?.name}
        role={session?.user?.role}
        xp={stats.xp}
        streak={stats.streak}
        tier={stats.tier}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
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
        <div className="p-4 sm:p-6 lg:p-8 xl:p-10 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
