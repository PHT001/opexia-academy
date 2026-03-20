"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Contacte-nous
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? On est là pour t&apos;aider.
          </p>
        </div>
      </ScrollFadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <ScrollFadeIn>
          <GlassCard className="p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-sm text-text-secondary">On te répond en moins de 24h.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-5"
              >
                <Input label="Nom" placeholder="Ton nom" required />
                <Input label="Email" type="email" placeholder="ton@email.com" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Sujet</label>
                  <select className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-white/30 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_0_3px_rgba(255,255,255,0.04)] transition-all cursor-pointer">
                    <option value="general">Question générale</option>
                    <option value="formation">Question sur les formations</option>
                    <option value="one-to-one">Formule One-to-One</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-sm min-h-[120px] resize-y shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-white/30 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_0_3px_rgba(255,255,255,0.04)] transition-all"
                    placeholder="Dis-nous tout..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            )}
          </GlassCard>
        </ScrollFadeIn>

        {/* Info */}
        <ScrollFadeIn delay={150}>
          <div className="flex flex-col gap-6">
            <GlassCard className="p-8">
              <h3 className="text-lg font-bold mb-4">Réserve un appel</h3>
              <p className="text-sm text-text-secondary mb-6">
                Tu veux en savoir plus sur la formule One-to-One ?
                Réserve un créneau directement avec un des fondateurs.
              </p>
              <Button href="#" variant="secondary" className="w-full">
                Réserver un créneau &rarr;
              </Button>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-bold mb-4">Rejoins la communauté</h3>
              <p className="text-sm text-text-secondary mb-6">
                Échange avec les autres élèves et les fondateurs sur notre Discord.
              </p>
              <div className="flex gap-4">
                <Button href="#" variant="ghost" size="sm">
                  Discord
                </Button>
                <Button href="#" variant="ghost" size="sm">
                  Twitter/X
                </Button>
                <Button href="#" variant="ghost" size="sm">
                  LinkedIn
                </Button>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-sm text-white">contact@opexia.fr</p>
            </GlassCard>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
