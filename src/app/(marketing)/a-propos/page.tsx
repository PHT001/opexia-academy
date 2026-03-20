import { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvre l'histoire d'Opexia et de ses deux fondateurs.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Notre histoire
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Deux jeunes entrepreneurs qui ont appris sur le terrain, et qui veulent
            partager tout ce qu&apos;ils savent.
          </p>
        </div>
      </ScrollFadeIn>

      {/* Founders */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {[
          {
            name: "Fondateur 1",
            role: "Co-fondateur & CEO",
            bio: "Passionné par l'IA depuis ses débuts, il a lancé sa première agence IA à 22 ans. Aujourd'hui, il forme la prochaine génération d'entrepreneurs IA.",
          },
          {
            name: "Fondateur 2",
            role: "Co-fondateur & CTO",
            bio: "Développeur autodidacte, expert en automatisation et agents IA. Il a construit des solutions IA pour des dizaines d'entreprises avant de co-fonder Opexia.",
          },
        ].map((founder, i) => (
          <ScrollFadeIn key={founder.name} delay={i * 150}>
            <GlassCard className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                {founder.name[0]}
              </div>
              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-sm text-white/60 mb-4">{founder.role}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{founder.bio}</p>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>

      {/* Vision */}
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-10 text-center" featured>
            <h2 className="text-2xl font-bold mb-6">Notre vision</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              L&apos;IA n&apos;est pas qu&apos;un buzzword. C&apos;est une opportunité concrète de créer
              de la valeur, de lancer un business rentable, et de se positionner sur le marché
              le plus explosif de la décennie.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Opexia existe pour rendre tout ça accessible. Pas de jargon inutile, pas de
              promesses vides. Juste une méthode testée, un accompagnement concret, et des
              résultats mesurables.
            </p>
          </GlassCard>
        </div>
      </ScrollFadeIn>

      {/* Milestones */}
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center mb-10">Nos jalons</h2>
          <div className="space-y-6">
            {[
              { date: "2025", title: "Première agence IA lancée", desc: "Nos premiers clients, nos premières erreurs, nos premiers succès." },
              { date: "2025", title: "+50 projets livrés", desc: "Chatbots, automatisations, agents IA — pour des PME, agences et startups." },
              { date: "2026", title: "Lancement d'Opexia", desc: "On transforme notre expérience en formation pour former la prochaine génération." },
            ].map((milestone) => (
              <div key={milestone.title} className="flex gap-6 items-start">
                <div className="text-sm font-mono text-white/70 font-bold whitespace-nowrap pt-1">{milestone.date}</div>
                <div className="border-l border-white/[0.08] pl-6">
                  <h3 className="font-bold mb-1">{milestone.title}</h3>
                  <p className="text-sm text-text-secondary">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
