import { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Témoignages",
  description: "Découvre les résultats de nos élèves qui ont lancé leur agence IA.",
};

const testimonials = [
  { name: "Lucas M.", role: "Ex-freelance dev", text: "En 3 semaines, j'avais mon premier client. Un chatbot IA pour une agence immo. Facturé : 1 500\u20ac.", result: "+1 500\u20ac", stars: 5 },
  { name: "Sarah K.", role: "Étudiante en marketing", text: "Zéro compétence technique au départ. Aujourd'hui je gère 3 clients récurrents et j'ai quitté mon stage.", result: "+4 200\u20ac/mois", stars: 5 },
  { name: "Thomas R.", role: "Entrepreneur", text: "Le format Duolingo est génial. Tu progresses sans t'en rendre compte. En 30 jours, j'avais mon agence.", result: "Agence lancée", stars: 5 },
  { name: "Marie L.", role: "Reconversion pro", text: "J'avais peur de l'aspect technique. Le programme m'a prise par la main. Premier contrat signé en 12 jours.", result: "+2 000\u20ac", stars: 5 },
  { name: "Kevin D.", role: "Développeur junior", text: "Je connaissais déjà les bases de l'IA mais pas comment en faire un business. Opexia m'a donné la méthode commerciale.", result: "+3 500\u20ac/mois", stars: 5 },
  { name: "Julie P.", role: "Community manager", text: "Formule One-to-One : les sessions visio avec les fondateurs valent de l'or. Ils m'ont aidé à structurer mon offre.", result: "5 clients", stars: 5 },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Leurs résultats parlent
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Des élèves comme toi qui ont lancé leur agence IA grâce à Opexia.
          </p>
        </div>
      </ScrollFadeIn>

      {/* Stats */}
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "+150", label: "Élèves formés" },
            { value: "14j", label: "Premier client (médian)" },
            { value: "92%", label: "Taux de satisfaction" },
            { value: "1 800\u20ac", label: "Revenu moyen/mois" },
          ].map((stat) => (
            <GlassCard key={stat.label} className="p-5 text-center">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-text-tertiary mt-1">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </ScrollFadeIn>

      {/* Testimonials grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollFadeIn key={t.name} delay={i * 80}>
            <GlassCard className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full ring-1 ring-white/15 flex items-center justify-center text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${['#007AFF,#64D2FF','#FF6B6B,#FFE66D','#A855F7,#EC4899','#10B981,#34D399','#F59E0B,#FBBF24','#6366F1,#818CF8'][i % 6]})` }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-text-tertiary">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{t.text}</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-white font-bold text-sm">{t.result}</span>
              </div>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
