import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo-opexia.png"
              alt="OpexIA"
              width={100}
              height={32}
              className="h-7 w-auto"
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <a href="#" className="hover:text-[#111] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#111] transition-colors">
              CGU
            </a>
            <a href="#" className="hover:text-[#111] transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-[#111] transition-colors">
              Contact
            </a>
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
