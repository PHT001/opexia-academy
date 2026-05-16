import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion — OpexIA Academy",
  description: "Connecte-toi à OpexIA Academy pour accéder à ta formation IA.",
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#0a0a14]">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] flex-col justify-between p-10 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 0% 50%, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0.08) 30%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Opex</span>
              <span className="text-[#06B6D4]">IA</span>
            </span>
          </Link>
        </div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
            Lance ton agence IA.<br />
            <span className="text-white/40">10 000 €/mois en 90 jours.</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            23 modules step-by-step, soumission MVP à chaque module avec review perso sous 24 h. Marius t&apos;accompagne en direct.
          </p>
        </div>
        <div className="relative z-10">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} OpexIA Academy. Tous droits réservés.</p>
        </div>
      </div>

      {/* Right — form area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 lg:py-12 bg-[#0a0a14]">
        <Link href="/" className="mb-6 lg:mb-8 lg:hidden">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Opex</span>
            <span className="text-[#06B6D4]">IA</span>
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
}
