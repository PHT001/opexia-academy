"use client";

import { useState } from "react";

const previewListings = [
  { title: "Agent Support Client", category: "Agent IA", price: "49€", rating: 4.8, downloads: 234 },
  { title: "Chatbot E-commerce", category: "Chatbot", price: "79€", rating: 4.6, downloads: 156 },
  { title: "Automatisation LinkedIn", category: "Automation", price: "29€", rating: 4.9, downloads: 412 },
  { title: "Générateur de contenu SEO", category: "Contenu", price: "39€", rating: 4.7, downloads: 189 },
  { title: "Assistant RH", category: "Agent IA", price: "59€", rating: 4.5, downloads: 98 },
  { title: "Pipeline de prospection", category: "Automation", price: "69€", rating: 4.8, downloads: 267 },
];

export default function MarketplacePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Marketplace</h1>
        <p className="text-sm text-gray-500">
          Achète et vends des agents IA, templates et automations prêts à l&apos;emploi.
        </p>
      </div>

      {/* Coming Soon Hero */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 mb-8 text-center">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Storefront */}
            <rect x="30" y="40" width="100" height="70" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
            <rect x="30" y="40" width="100" height="20" rx="8" fill="#FF1744" />
            <rect x="35" y="44" width="12" height="12" rx="2" fill="white" opacity="0.5" />
            <rect x="51" y="44" width="12" height="12" rx="2" fill="white" opacity="0.5" />
            <rect x="67" y="44" width="12" height="12" rx="2" fill="white" opacity="0.5" />
            {/* Window */}
            <rect x="45" y="70" width="28" height="30" rx="4" fill="#E5E7EB" />
            <rect x="87" y="70" width="28" height="30" rx="4" fill="#E5E7EB" />
            {/* Door */}
            <rect x="70" y="82" width="16" height="28" rx="3" fill="#FF1744" opacity="0.2" />
            <circle cx="83" cy="96" r="2" fill="#FF1744" />
            {/* Sparkles */}
            <circle cx="20" cy="30" r="3" fill="#FF1744" opacity="0.3" />
            <circle cx="140" cy="25" r="4" fill="#FF1744" opacity="0.2" />
            <circle cx="15" cy="70" r="2" fill="#FF1744" opacity="0.15" />
            <circle cx="148" cy="65" r="3" fill="#FF1744" opacity="0.25" />
            {/* Rocket */}
            <path d="M135 10 L140 20 L130 20 Z" fill="#FF1744" opacity="0.6" />
            <rect x="133" y="20" width="4" height="6" rx="1" fill="#FF1744" opacity="0.4" />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 bg-red-50 text-[#FF1744] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-pulse" />
          En cours de développement
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-3">
          Bientôt disponible
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
          Le marketplace OpexIA arrive bientôt. Achète et vends des agents IA, des templates et des automations créés par la communauté.
        </p>

        {/* Email capture */}
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-5 py-3 rounded-xl">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Tu seras notifié au lancement !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              required
              className="w-full sm:flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744] transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
              style={{ background: "#FF1744" }}
            >
              Être notifié au lancement
            </button>
          </form>
        )}
      </div>

      {/* Preview cards with blurred/locked overlay */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {previewListings.map((item) => (
            <div
              key={item.title}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-6 select-none"
            >
              {/* Card content (blurred) */}
              <div className="blur-[2px] opacity-60 pointer-events-none">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-gray-900">{item.price}</span>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-3">{item.title}</h3>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" className="text-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {item.rating}
                  </span>
                  <span>{item.downloads} téléchargements</span>
                </div>
              </div>

              {/* Lock overlay */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-[1px]">
                <div className="flex flex-col items-center gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="9" width="12" height="9" rx="2" />
                    <path d="M6 9V6a4 4 0 118 0v3" />
                  </svg>
                  <span className="text-[10px] font-medium text-[#111]">Prochainement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
