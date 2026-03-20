"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Chatbots IA",
    desc: "Support 24/7, prise de RDV, qualification de leads.",
    price: "800 – 2 500€",
    tag: "Le plus demandé",
    accent: "#3B82F6",
    accentLight: "rgba(59,130,246,0.08)",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automatisations",
    desc: "Facturation, relances, reporting automatisés.",
    price: "500 – 2 000€",
    tag: "ROI immédiat",
    accent: "#F59E0B",
    accentLight: "rgba(245,158,11,0.08)",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Agents IA",
    desc: "Veille, prospection, analyse — ils bossent 24/7.",
    price: "1 500 – 5 000€",
    tag: "Haut de gamme",
    accent: "#A855F7",
    accentLight: "rgba(168,85,247,0.08)",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "CRM & Pipelines",
    desc: "Gestion client automatisée, suivi des leads.",
    price: "1 000 – 3 000€",
    tag: "Forte demande",
    accent: "#10B981",
    accentLight: "rgba(16,185,129,0.08)",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Génération de contenu",
    desc: "Posts, emails, fiches produit générés par IA.",
    price: "500 – 1 500€",
    tag: "Récurrent",
    accent: "#EF4444",
    accentLight: "rgba(239,68,68,0.08)",
  },
];

function ScrollIndicator() {
  return (
    <motion.div
      className="flex items-center gap-2 text-gray-300 text-xs mt-4 lg:hidden"
      animate={{ x: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span>Glisse pour voir</span>
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </motion.div>
  );
}

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="relative py-14 lg:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
              Ce que tu vendras
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] leading-tight">
              Les services que chaque PME{" "}
              <span className="text-[#FF1744]">va te demander</span>
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-gray-200 text-[#111] hover:bg-gray-50"
                  : "border-gray-100 text-gray-200 cursor-default"
              }`}
              aria-label="Précédent"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-gray-200 text-[#111] hover:bg-gray-50"
                  : "border-gray-100 text-gray-200 cursor-default"
              }`}
              aria-label="Suivant"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <ScrollIndicator />
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4 pt-2 -mt-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative flex-shrink-0 w-[280px] sm:w-[300px] rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ borderColor: "rgb(243 244 246)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = service.accent + "40";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgb(243 244 246)";
            }}
          >
            {/* Top row: icon + tag */}
            <div className="flex items-center justify-between mb-4">
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: service.accentLight, color: service.accent }}
              >
                {service.icon}
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ backgroundColor: service.accentLight, color: service.accent }}
              >
                {service.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#111] mb-2">{service.title}</h3>

            {/* Desc */}
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.desc}</p>

            {/* Price */}
            <div className="pt-4 border-t border-gray-50">
              <p className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                Tes clients paient
              </p>
              <p className="text-2xl font-black text-[#111] mt-1">{service.price}</p>
            </div>
          </motion.div>
        ))}

        {/* Ghost card — CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-6 flex flex-col items-center justify-center text-center"
        >
          <div className="h-12 w-12 rounded-full bg-[#FF1744]/10 flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-[#111] mb-1">Et bien plus encore</p>
          <p className="text-xs text-gray-400 mb-5">Tu apprendras &agrave; cr&eacute;er des offres sur-mesure</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF1744] hover:underline"
          >
            Voir la formation
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
