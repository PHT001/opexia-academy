import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center">
              <span className="text-white font-black text-lg">O</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              OpexIA Academy
            </span>
          </div>
        </div>

        {/* 404 */}
        <p className="text-7xl font-black text-white/10 mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">
          Page introuvable
        </h1>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          La page que tu cherches n&apos;existe pas ou a été déplacée.
        </p>

        {/* Back to dashboard */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour au dashboard
        </Link>
      </div>
    </div>
  );
}
