"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/students", label: "Élèves", icon: "👥" },
  { href: "/admin/lessons", label: "Leçons", icon: "📚" },
  { href: "/admin/quizzes", label: "Quiz", icon: "📝" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="theme-dark min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-[260px] bg-black/90 backdrop-blur-2xl border-r border-white/[0.06] flex flex-col shrink-0 hidden md:flex">
        <div className="p-6 border-b border-white/[0.06] flex items-center gap-2">
          <Link href="/admin" className="text-xl font-bold tracking-tight">
            Opexia
          </Link>
          <span className="text-xs bg-danger/20 text-danger px-2 py-0.5 rounded-md font-semibold">
            Admin
          </span>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors",
                pathname === item.href
                  ? "bg-white/[0.06] text-white font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-glass-bg"
              )}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-glass-bg">
            <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center text-xs font-bold text-danger">
              {session?.user?.name?.[0]?.toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{session?.user?.name || "Admin"}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-text-tertiary hover:text-danger text-xs"
            >
              ✕
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-h-screen">
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
