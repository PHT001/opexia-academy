"use client";

import { Button } from "@/components/ui/Button";

export default function CongratulationsPage() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <div className="text-7xl mb-8">🎓</div>
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">Félicitations !</h1>
      <p className="text-xl text-gray-500 mb-12">
        Tu as complété l&apos;intégralité du parcours Opexia Academy.
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-10">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-black text-gray-900">20</p>
            <p className="text-xs text-gray-400">Leçons complétées</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-500">20</p>
            <p className="text-xs text-gray-400">Quiz validés</p>
          </div>
          <div>
            <p className="text-3xl font-black text-amber-500">3 000+</p>
            <p className="text-xs text-gray-400">XP gagnés</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Prêt à passer au niveau supérieur ?</h2>
      <p className="text-gray-500 mb-8">
        Réserve ton accompagnement personnalisé avec un des fondateurs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/profile?tab=subscription" glow>
          Découvrir le One-to-One
        </Button>
        <Button href="/dashboard" variant="secondary">
          Retour au dashboard
        </Button>
      </div>
    </div>
  );
}
