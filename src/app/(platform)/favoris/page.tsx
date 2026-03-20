"use client";

export default function FavorisPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Mes favoris</h1>
        <p className="text-sm text-gray-500">
          Retrouve tes leçons et ressources favorites en un clic.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
        <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucun favori pour l&apos;instant</h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          Tu pourras bientôt sauvegarder tes leçons, ressources et templates favoris
          pour y accéder rapidement.
        </p>
      </div>
    </div>
  );
}
