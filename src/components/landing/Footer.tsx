import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#111]">Opex<span className="text-[#06B6D4]">IA</span></span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <Link href="/mentions-legales" className="hover:text-[#111] transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgu" className="hover:text-[#111] transition-colors">
              CGU
            </Link>
            <Link href="/confidentialite" className="hover:text-[#111] transition-colors">
              Confidentialité
            </Link>
            <Link href="/contact" className="hover:text-[#111] transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#6B7280]">
            &copy; 2026 OpexIA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
