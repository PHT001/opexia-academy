"use client";

const speakers = [
  { name: "Fondateur 1", role: "Co-fondateur & CEO", bio: "Expert en IA et business. A lancé sa première agence IA à 22 ans.", initial: "F", color: "#6C5CE7" },
  { name: "Fondateur 2", role: "Co-fondateur & CTO", bio: "Développeur autodidacte, spécialiste automatisation et agents IA.", initial: "F", color: "#FF1744" },
  { name: "Invité Expert", role: "Consultant IA", bio: "10+ ans d'expérience en intelligence artificielle et machine learning.", initial: "I", color: "#0984E3" },
  { name: "Coach Business", role: "Mentor commercial", bio: "A accompagné +50 agences dans leur lancement et acquisition clients.", initial: "C", color: "#00B894" },
];

export default function IntervenantsPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Intervenants</h1>
        <p className="text-sm text-gray-500">
          Nos intervenants et mentors qui t&apos;accompagnent dans ta formation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {speakers.map((s) => (
          <div key={s.name} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                style={{ background: s.color }}
              >
                {s.initial}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900">{s.name}</h3>
                <p className="text-xs text-gray-500">{s.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{s.bio}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">Bientôt disponible</p>
    </div>
  );
}
