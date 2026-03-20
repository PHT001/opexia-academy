import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#F0F1F3]">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] flex-col justify-between p-10 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1A1A2E 0%, #16162A 50%, #0F0F1E 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Opex</span>
              <span className="text-[#FF1744]">IA</span>
            </span>
          </Link>
        </div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
            Maîtrise l&apos;IA.<br />
            <span className="text-white/40">Transforme ta carrière.</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            La formation la plus complète pour maîtriser les outils IA et les appliquer concrètement dans ton quotidien professionnel.
          </p>
        </div>
        <div className="relative z-10">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} OpexIA. Tous droits réservés.</p>
        </div>
      </div>

      {/* Right — form area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <Link href="/" className="mb-8 lg:hidden">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-[#1A1A2E]">Opex</span>
            <span className="text-[#FF1744]">IA</span>
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
}
