import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-sm font-bold tracking-widest text-text-tertiary mb-5">
          OPEXIA
        </div>
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          <Link href="/mentions-legales" className="text-xs text-text-tertiary hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link href="/cgu" className="text-xs text-text-tertiary hover:text-white transition-colors">
            CGU
          </Link>
          <Link href="/confidentialite" className="text-xs text-text-tertiary hover:text-white transition-colors">
            Confidentialité
          </Link>
        </div>
        <p className="text-xs text-text-tertiary">&copy; 2026 Opexia</p>
      </div>
    </footer>
  );
}
