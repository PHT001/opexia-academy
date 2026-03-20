"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LazyVideo from "@/components/ui/LazyVideo";

const row1 = [
  {
    quote: "OpexIA m\u2019a permis de passer de z\u00e9ro connaissance en IA \u00e0 une agence qui g\u00e9n\u00e8re 3 200\u20ac/mois en seulement 6 semaines.",
    name: "Thomas D.",
    role: "Fondateur, AgenceAI Pro",
    result: "3 200\u20ac/mois",
    platform: "google" as const,
  },
  {
    quote: "J\u2019avais peur de la technique, mais les le\u00e7ons sont tellement bien structur\u00e9es que j\u2019ai cr\u00e9\u00e9 mon premier chatbot en 3 jours.",
    name: "Sarah M.",
    role: "Freelance IA",
    result: "Premier client en 10 jours",
    platform: "twitter" as const,
  },
  {
    quote: "Le pipeline CRM int\u00e9gr\u00e9 change tout. Je g\u00e8re mes prospects, mes projets et ma facturation depuis la m\u00eame plateforme.",
    name: "Marc L.",
    role: "Consultant IA",
    result: "5 clients en 2 mois",
    platform: "google" as const,
  },
  {
    quote: "Les templates de prospection m\u2019ont permis de d\u00e9crocher mon premier contrat \u00e0 1 500\u20ac en moins de 2 semaines. ROI imm\u00e9diat.",
    name: "Julie R.",
    role: "Cr\u00e9atrice d\u2019agence IA",
    result: "1 500\u20ac en semaine 2",
    platform: "twitter" as const,
  },
  {
    quote: "J\u2019ai automatise la prospection d\u2019un cabinet comptable. R\u00e9sultat : 2 300\u20ac factur\u00e9s pour 4h de travail. La formation m\u2019a tout appris.",
    name: "Romain K.",
    role: "Freelance Automatisation IA",
    result: "2 300\u20ac en 4h de travail",
    platform: "google" as const,
  },
];

const row2 = [
  {
    quote: "J\u2019ai lanc\u00e9 mon agence IA en partant de z\u00e9ro. Aujourd\u2019hui je facture 4 800\u20ac/mois avec 3 clients r\u00e9currents.",
    name: "Camille P.",
    role: "Agence AutomatIA",
    result: "4 800\u20ac/mois",
    platform: "twitter" as const,
  },
  {
    quote: "Gr\u00e2ce aux modules sur n8n et Make, j\u2019ai vendu 3 automatisations \u00e0 des PME en un mois. Le contenu est ultra concret.",
    name: "Yassine B.",
    role: "Consultant IA, ind\u00e9pendant",
    result: "3 contrats en 1 mois",
    platform: "google" as const,
  },
  {
    quote: "Le programme est top. J\u2019utilise depuis plus de 3 mois et je suis satisfait. Le support r\u00e9pond en moins de 24h.",
    name: "Antoine F.",
    role: "Fondateur, BoostIA Agency",
    result: "Satisfait depuis 3 mois",
    platform: "google" as const,
  },
  {
    quote: "J\u2019avais 0 comp\u00e9tence technique. En 3 semaines j\u2019ai d\u00e9croch\u00e9 un contrat \u00e0 2 000\u20ac pour un chatbot. Merci OpexIA !",
    name: "L\u00e9a C.",
    role: "\u00c9tudiante \u2192 Freelance IA",
    result: "2 000\u20ac en semaine 3",
    platform: "twitter" as const,
  },
  {
    quote: "La communaut\u00e9 Discord est incroyable. On s\u2019entraide, on partage des leads, et les fondateurs sont super r\u00e9actifs.",
    name: "Hugo M.",
    role: "Agence IA locale",
    result: "R\u00e9seau de +150 entrepreneurs",
    platform: "google" as const,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF1744]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PlatformIcon({ platform }: { platform: "google" | "twitter" }) {
  if (platform === "google") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TestimonialCard({ t }: { t: typeof row1[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl border border-gray-100 p-6 mx-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white text-sm" style={{ background: `linear-gradient(135deg, ${['#007AFF,#64D2FF','#FF6B6B,#FFE66D','#A855F7,#EC4899','#10B981,#34D399','#F59E0B,#FBBF24','#6366F1,#818CF8','#EF4444,#F97316','#14B8A6,#5EEAD4','#8B5CF6,#C084FC','#EC4899,#F472B6'][[...t.name].reduce((a,c)=>a+c.charCodeAt(0),0) % 10]})` }}>
            {t.name[0]}
          </div>
          <div>
            <div className="text-sm font-bold text-[#111]">{t.name}</div>
            <div className="text-xs text-[#6B7280]">{t.role}</div>
          </div>
        </div>
        <PlatformIcon platform={t.platform} />
      </div>
      <Stars />
      <p className="mt-3 text-sm text-[#374151] leading-relaxed">
        {t.quote}
      </p>
      <div className="mt-4 pt-3 border-t border-gray-50">
        <span className="text-xs font-semibold text-[#FF1744]">
          {t.result}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Double les items pour le loop infini
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ce qu&apos;ils en disent
          </h2>
        </motion.div>
      </div>

      {/* Floating robot idée — above testimonials */}
      <motion.div
        className="flex justify-center -mb-16 relative z-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <LazyVideo
          src="/images/idee.mp4"
          className="w-40 h-40 lg:w-52 lg:h-52"
          style={{ mask: "radial-gradient(circle, black 50%, transparent 75%)", WebkitMask: "radial-gradient(circle, black 50%, transparent 75%)" }}
        />
      </motion.div>

      {/* Row 1 — scrolls right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-right">
          {marquee1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-left">
          {marquee2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Founders trust */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center px-6"
      >
        <div className="inline-flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-3">
          <div className="flex -space-x-2">
            <div className="h-9 w-9 rounded-full border-2 border-[#333] overflow-hidden">
              <Image src="/images/founder-marius.png" alt="Marius" width={36} height={36} className="h-full w-full object-cover" />
            </div>
            <div className="h-9 w-9 rounded-full border-2 border-[#333] overflow-hidden">
              <Image src="/images/founder-igor.jpg" alt="Igor" width={36} height={36} className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="text-white text-sm font-medium">
            &ldquo;On a créé OpexIA pour rendre l&apos;IA accessible à tous.&rdquo;
            <span className="text-gray-400 text-xs block">— Marius &amp; Igor, Co-fondateurs</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
