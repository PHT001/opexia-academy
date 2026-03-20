"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-base/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Opex</span>
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">IA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm rounded-lg transition-colors",
                pathname === link.href
                  ? "text-white bg-white/[0.08]"
                  : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors"
          >
            Connexion
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-lg hover:bg-white/90 transition-colors shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
          >
            Commencer
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={cn("w-5 h-0.5 bg-white transition-all", mobileOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-5 h-0.5 bg-white transition-all", mobileOpen && "opacity-0")} />
          <span className={cn("w-5 h-0.5 bg-white transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-base/95 backdrop-blur-2xl">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm rounded-lg transition-colors",
                  pathname === link.href ? "text-white bg-white/[0.08]" : "text-text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] mt-2 pt-2 flex flex-col gap-1">
              <Link href="/login" className="px-4 py-3 text-sm text-text-secondary" onClick={() => setMobileOpen(false)}>
                Connexion
              </Link>
              <Link
                href="/register"
                className="px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Commencer
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
