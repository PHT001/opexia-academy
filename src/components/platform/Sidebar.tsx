"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

/* ——— SVG Icons (18x18, strokeWidth 1.8) ——— */

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconNotes({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconFolder({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconLessons({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
      <path d="M8 11h4" />
    </svg>
  );
}

function IconVideo({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function IconBot({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconPipeline({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="4" height="18" rx="1" />
      <rect x="10" y="8" width="4" height="13" rx="1" />
      <rect x="18" y="5" width="4" height="16" rx="1" />
    </svg>
  );
}

function IconTemplate({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function IconBookmark({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconWand({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8L19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2L19 5" />
      <path d="M11 6.2L9.7 5" />
      <path d="M11 11.8L9.7 13" />
      <path d="m8 21 8-8" />
      <path d="M3 16l2-2" />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
      <path d="M9 21V9" />
      <path d="M3 9h18" />
    </svg>
  );
}

function IconTrophy({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconCertificate({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconProfile({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function IconGift({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function IconOffers({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconDiscord({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function IconXP({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconQuiz({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconDashboard({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconLogout({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconLockSmall({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

/* ——— Sidebar Section Data ——— */

type IconComponent = React.ComponentType<{ className?: string }>;

interface NavItem {
  href: string;
  label: string;
  icon: IconComponent;
  badge?: string;
  lockedForStarter?: boolean;
  requiredTier?: string;
  lockedTeaser?: string;
}

interface SidebarSection {
  id: string;
  label: string;
  items: NavItem[];
}

const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: "overview",
    label: "Vue d'ensemble",
    items: [
      { href: "/dashboard", label: "Accueil", icon: IconHome },
      { href: "/notes", label: "Mes notes", icon: IconNotes },
      { href: "/ressources", label: "Ressources", icon: IconFolder },
    ],
  },
  {
    id: "academy",
    label: "Academy",
    items: [
      { href: "/lessons", label: "Formation", icon: IconLessons },
      { href: "/leaderboard", label: "Classement", icon: IconTrophy },
      { href: "/certificats", label: "Certificats", icon: IconCertificate },
      { href: "/projets", label: "Mes Projets", icon: IconRocket },
      { href: "/masterclass", label: "Masterclass", icon: IconVideo },
    ],
  },
  {
    id: "coaching",
    label: "Coaching",
    items: [
      { href: "/coaching", label: "Réserver un appel", icon: IconPhone },
    ],
  },
  {
    id: "tools",
    label: "Outils & Services",
    items: [
      { href: "/pipeline", label: "Pipeline", icon: IconPipeline },
      { href: "/generateur", label: "Générateur", icon: IconWand },
      { href: "/templates", label: "Templates", icon: IconTemplate },
    ],
  },
  {
    id: "myspace",
    label: "Mon espace",
    items: [
      { href: "/profile", label: "Mon Profil", icon: IconProfile },
      { href: "/offres", label: "Mes offres", icon: IconOffers },
      { href: "/parrainage", label: "Parrainage", icon: IconGift },
    ],
  },
  {
    id: "community",
    label: "Communauté",
    items: [
      { href: "https://discord.gg/uNc2jwBsr8", label: "Discord", icon: IconDiscord },
    ],
  },
];

/* ——— Component ——— */

interface SidebarProps {
  userName?: string | null;
  xp?: number;
  tier?: string;
  role?: string;
  open?: boolean;
  onClose?: () => void;
  previewTier?: string | null;
  onPreviewTierChange?: (tier: string | null) => void;
}

function TierBadge({ tier, role }: { tier: string; role?: string }) {
  if (role === "admin") {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25">
        Admin
      </div>
    );
  }
  const config = {
    // New tiers (QCM landing)
    standard: { label: "Standard", classes: "bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25" },
    accompagnement: { label: "Accompagnement", classes: "bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25" },
    // Legacy tiers (still in DB for older accounts) · mapped to the same neutral label
    one_to_one: { label: "Accompagnement", classes: "bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25" },
    academy: { label: "Standard", classes: "bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25" },
    starter: { label: "Standard", classes: "bg-[#FF1744]/15 text-[#FF1744] border-[#FF1744]/25" },
    free: { label: "Gratuit", classes: "bg-white/5 text-white/40 border-white/8" },
  }[tier] || { label: "Gratuit", classes: "bg-white/5 text-white/40 border-white/8" };

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", config.classes)}>
      {config.label}
    </div>
  );
}

/* ——— Admin Notification Bell ——— */

interface AdminNotification {
  type: "registration" | "payment" | "completion";
  message: string;
  date: string;
  read: boolean;
}

function AdminNotificationBell() {
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const STORAGE_KEY = "admin-notif-last-seen";

  useEffect(() => {
    const lastSeen = localStorage.getItem(STORAGE_KEY) || "1970-01-01T00:00:00Z";
    fetch("/api/admin/notifications")
      .then((r) => r.json())
      .then((d) => {
        const notifs = (d.notifications || []).map((n: AdminNotification) => ({
          ...n,
          read: new Date(n.date) <= new Date(lastSeen),
        }));
        setNotifications(notifs);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const displayNotifs = notifications.slice(0, 10);

  const typeIcon = (type: string) => {
    if (type === "registration") return (
      <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
        <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
      </div>
    );
    if (type === "payment") return (
      <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
      </div>
    );
    return (
      <div className="w-6 h-6 rounded-full bg-[#FF1744]/15 flex items-center justify-center shrink-0">
        <svg className="w-3 h-3 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
      </div>
    );
  };

  const formatTime = (dateStr: string) => {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    const diff = Math.max(0, now - then);
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "maintenant";
    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}j`;
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen(!open);
          if (!open && unreadCount > 0) {
            localStorage.setItem(STORAGE_KEY, new Date().toISOString());
            setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
          }
        }}
        className="relative w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white/80 hover:bg-white/[0.06] transition-all"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        {loaded && unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FF1744] text-[8px] font-bold text-white flex items-center justify-center ring-2 ring-[#1A1A2E]">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-[#1E1E36] border border-white/10 rounded-xl shadow-2xl z-[999] overflow-hidden">
          <div className="px-4 py-3 border-b border-white/[0.06]">
            <p className="text-xs font-semibold text-white/80">Notifications</p>
            <p className="text-[10px] text-white/30">{unreadCount} non lue{unreadCount !== 1 ? "s" : ""} cette semaine</p>
          </div>
          <div className="max-h-[340px] overflow-y-auto">
            {displayNotifs.length === 0 ? (
              <p className="text-xs text-white/30 text-center py-8">Aucune notification</p>
            ) : (
              displayNotifs.map((n, i) => (
                <div key={i} className="flex items-start gap-2.5 px-4 py-3 hover:bg-white/[0.03] transition-colors border-b border-white/[0.04] last:border-0">
                  {typeIcon(n.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-white/70 leading-snug">{n.message}</p>
                    <p className="text-[9px] text-white/25 mt-0.5">{formatTime(n.date)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Sidebar({ userName, xp = 0, tier = "starter", role, open, onClose, previewTier, onPreviewTierChange }: SidebarProps) {
  const pathname = usePathname();
  const [lockedItem, setLockedItem] = useState<NavItem | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  useEffect(() => {
    // Load photo from API (DB is source of truth per user)
    fetch("/api/user/profile")
      .then((r) => r.json())
      .then((data) => {
        if (data.profilePhoto) {
          setProfilePhoto(data.profilePhoto);
          localStorage.setItem("opexia-profile-photo", data.profilePhoto);
        } else {
          // No photo in DB for this user — clear any stale localStorage
          setProfilePhoto(null);
          localStorage.removeItem("opexia-profile-photo");
        }
      })
      .catch(() => {
        // Offline fallback
        const local = localStorage.getItem("opexia-profile-photo");
        if (local) setProfilePhoto(local);
      });
    // Listen for changes from profile page
    const onStorage = (e: StorageEvent) => {
      if (e.key === "opexia-profile-photo") setProfilePhoto(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpProgress = (xpInLevel / 500) * 100;

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Upgrade overlay */}
      {lockedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ animation: "upgradeOverlayIn 0.3s ease-out forwards" }}
          onClick={() => setLockedItem(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div
            className="relative z-10 mx-4 max-w-sm w-full"
            style={{ animation: "upgradeCardIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#111] rounded-2xl border border-white/10 p-7 text-center shadow-2xl">
              <div className="mx-auto w-12 h-12 rounded-xl bg-[#FF1744]/10 flex items-center justify-center mb-4 ring-1 ring-[#FF1744]/20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF1744]">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>

              <h3 className="text-[15px] font-bold text-white mb-1">Accès réservé — {lockedItem.label}</h3>
              <p className="text-[13px] text-white/35 mb-4">
                {tier === "free" ? "Débloque cette fonctionnalité avec un abonnement" : "Disponible avec le forfait Academy"}
              </p>

              {lockedItem.lockedTeaser && (
                <div className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-3 mb-5 text-left">
                  <p className="text-[12px] text-white/50 leading-relaxed">{lockedItem.lockedTeaser}</p>
                </div>
              )}

              <div className="mb-5 text-left space-y-2">
                {["22 modules complets", "86 leçons progressives", "Quiz de validation", "Aide rapide intégrée"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FF1744]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF1744]"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-[11px] text-white/45">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="/offres"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 4px 20px rgba(255,23,68,0.3)" }}
              >
                Débloquer — 397€
              </a>

              <button
                onClick={() => setLockedItem(null)}
                className="mt-3 text-[11px] text-white/25 hover:text-white/50 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-[260px] bg-[#1A1A2E] z-50 flex flex-col transition-transform duration-200 ease-out",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="px-6 pt-5 pb-3 shrink-0">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Opex</span>
              <span className="text-[#FF1744]">IA</span>
            </span>
          </Link>
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mt-4 mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TierBadge tier={tier} role={previewTier ? undefined : role} />
              {role === "admin" && !previewTier && (
                <AdminNotificationBell />
              )}
            </div>
            {(tier === "starter" || tier === "free") && (role !== "admin" || previewTier !== null) && (
              <a href="/offres" className="text-[9px] text-[#FF1744]/60 hover:text-[#FF1744] transition-colors font-semibold uppercase tracking-wider">
                Upgrade
              </a>
            )}
          </div>

          {/* Free tier upgrade nudge */}
          {tier === "free" && (role !== "admin" || previewTier !== null) && (
            <div className="mt-3 rounded-xl p-3 text-center" style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)" }}>
              <p className="text-[12px] font-semibold text-white leading-snug mb-2">Débloque ta formation complète</p>
              <a
                href="/offres"
                className="inline-block text-[11px] font-bold text-white/90 hover:text-white bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg transition-all min-h-[44px] leading-[20px]"
              >
                Voir les offres
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 pb-3 flex flex-col gap-0.5 overflow-y-auto sidebar-scroll">
          {/* Admin-only nav — everything centralized here */}
          {role === "admin" && !previewTier && (<>
            <div className="mb-1.5">
              <div className="px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/20 font-semibold">Administration</span>
              </div>
              <div className="flex flex-col gap-0.5">
                {[
                  { href: "/dashboard", label: "Accueil", icon: IconHome },
                  { href: "/admin/students", label: "Élèves & Leads", icon: IconUsers },
                  { href: "/coaching", label: "Coaching", icon: IconPhone },
                  { href: "/admin/slides", label: "Diapositives", icon: IconTemplate },
                  { href: "/lessons", label: "Voir la formation", icon: IconLessons },
                ].map((item) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + "/");
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href} onClick={onClose} className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 min-h-[44px]", active ? "bg-[#FF1744]/10 text-white" : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]")}>
                      <Icon className={active ? "text-[#FF1744]" : "text-white/35"} />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>)}

          {/* Student navigation */}
          {(role !== "admin" || previewTier) && SIDEBAR_SECTIONS.map((section) => (
            <div key={section.id} className="mb-1.5">
              <div className="px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/20 font-semibold">
                  {section.label}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => {
                  const tierLocked = item.lockedForStarter && (tier === "starter" || tier === "free" || !tier);
                  const requiredTierLocked = item.requiredTier && tier !== item.requiredTier && tier !== "free";
                  const isLocked = (tierLocked || requiredTierLocked) && (role !== "admin" || previewTier !== null);
                  const active = !isLocked && (pathname === item.href || pathname.startsWith(item.href + "/"));
                  const Icon = item.icon;

                  if (isLocked) {
                    return (
                      <button
                        key={item.href}
                        onClick={() => setLockedItem(item)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-white/30 hover:text-white/50 hover:bg-white/[0.03] transition-all duration-150 w-full text-left min-h-[44px]"
                      >
                        <Icon className="text-white/20" />
                        <span className="truncate">{item.label}</span>
                        <IconLockSmall className="ml-auto text-white/15 shrink-0" />
                      </button>
                    );
                  }

                  const isExternal = item.href.startsWith("http");
                  const linkClasses = cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150 min-h-[44px]",
                    active
                      ? "bg-[#FF1744]/10 text-white"
                      : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                  );

                  if (isExternal) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClasses}
                      >
                        <Icon className="text-white/35" />
                        <span className="truncate">{item.label}</span>
                        <svg className="ml-auto shrink-0 text-white/20" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={linkClasses}
                    >
                      <Icon className={active ? "text-[#FF1744]" : "text-white/35"} />
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] font-semibold text-white/25 bg-white/[0.06] px-1.5 py-0.5 rounded-full ml-auto shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* XP - hidden for admin */}
          {role !== "admin" && <div className="mt-auto mx-1 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF1744]/15 flex items-center justify-center">
                <IconXP className="text-[#FF1744]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between">
                  <p className="text-[11px] text-white/35 leading-none">Level {level}</p>
                  <p className="text-[10px] text-white/20">{xpInLevel}/500</p>
                </div>
                <div className="w-full h-1 rounded-full bg-white/[0.04] mt-1 overflow-hidden">
                  <div className="h-full rounded-full bg-[#FF1744]/40 transition-all duration-500" style={{ width: `${xpProgress}%` }} />
                </div>
                <p className="text-sm font-bold text-white/90 mt-0.5">{xp.toLocaleString()} XP</p>
              </div>
            </div>
          </div>}
        </nav>

        {/* User section */}
        <div className="p-3 border-t border-white/[0.06] shrink-0">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF1744]/20 to-[#FF1744]/5 flex items-center justify-center text-[11px] font-bold text-white ring-1 ring-[#FF1744]/15 overflow-hidden flex-shrink-0">
              {profilePhoto ? (
                <img src={profilePhoto} alt="" className="w-full h-full object-cover" />
              ) : (
                userName?.[0]?.toUpperCase() || "?"
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-white/80 truncate">{userName || "Élève"}</p>
              <p className="text-[10px] text-white/30">
                {role === "admin" && !previewTier ? "Administrateur" : tier === "one_to_one" ? "Membre One to One" : tier === "academy" ? "Membre Academy" : tier === "free" ? "Compte Gratuit" : "Membre Starter"}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="p-2.5 rounded-md text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Déconnexion"
            >
              <IconLogout />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
