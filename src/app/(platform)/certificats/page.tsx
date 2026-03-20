"use client";

const certificates = [
  { title: "Fondamentaux IA & Claude Code", modules: "Modules 1-4", icon: "🧠" },
  { title: "Builder : Apps & Projets", modules: "Modules 5-8", icon: "⚡" },
  { title: "ClawBot & Business", modules: "Modules 9-11", icon: "🔧" },
  { title: "Vente & Scaling", modules: "Modules 12-13", icon: "💼" },
  { title: "Personal Brand & Déploiement", modules: "Modules 14-15", icon: "🚀" },
  { title: "Diplôme Opexia Academy", modules: "Tous les modules", icon: "🎓" },
];

export default function CertificatsPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Certificats</h1>
        <p className="text-sm text-gray-500">
          Complète des modules pour débloquer tes certificats et diplomes.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center mb-8">
        <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">Pas encore de certificat</h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          Complète les modules de la formation pour débloquer tes premiers certificats.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {certificates.map((cert) => (
          <div key={cert.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 opacity-50">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <h3 className="font-semibold text-sm text-gray-900">{cert.title}</h3>
                <p className="text-[10px] text-gray-400">{cert.modules}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[10px] text-gray-400">Verrouillé</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
