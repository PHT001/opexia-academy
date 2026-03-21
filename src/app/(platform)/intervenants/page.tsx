"use client";

const speakers = [
  {
    name: "Youssef",
    role: "Co-fondateur & CEO",
    bio: "Expert en IA et entrepreneuriat. Passionné par l'automatisation et le scaling de business digitaux.",
    initial: "Y",
    color: "#FF1744",
  },
  {
    name: "Adam",
    role: "Co-fondateur & CTO",
    bio: "Développeur full-stack spécialisé en IA. Architecte des outils et de la plateforme OpexIA.",
    initial: "A",
    color: "#1A1A2E",
  },
  {
    name: "Expert Invité",
    role: "Consultant IA",
    bio: "Intervenant régulier sur des sujets avancés : agents IA, RAG, fine-tuning et déploiement.",
    initial: "E",
    color: "#0984E3",
  },
  {
    name: "Coach Business",
    role: "Mentor commercial",
    bio: "Accompagne les élèves dans leur stratégie de lancement et d'acquisition clients.",
    initial: "C",
    color: "#00B894",
  },
];

export default function IntervenantsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Nos Intervenants</h1>
        <p className="text-sm text-gray-500">
          L&apos;équipe de mentors et experts qui t&apos;accompagne tout au long de ta formation.
        </p>
      </div>

      {/* Speaker cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0"
                style={{ background: s.color }}
              >
                {s.initial}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm text-gray-900">{s.name}</h3>
                <p className="text-xs text-gray-500">{s.role}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mb-4">{s.bio}</p>

            {/* LinkedIn icon */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-[#0077B5] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Discord CTA */}
      <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#5865F2]/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#111] mb-2">Rejoins la communauté</h3>
        <p className="text-sm text-gray-500 mb-5 max-w-sm mx-auto">
          Échange avec les intervenants et les autres élèves sur notre serveur Discord.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ background: "#5865F2" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Rejoindre la communauté Discord
        </a>
      </div>
    </div>
  );
}
