"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de l'envoi");
        return;
      }

      setSent(true);
    } catch {
      setError("Erreur de connexion. Reessaye.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Contacte-nous
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? On est l&agrave; pour t&apos;aider.
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
                <h3 className="text-xl font-bold mb-2">Message envoy&eacute; !</h3>
                <p className="text-sm text-text-secondary">On te r&eacute;pond en moins de 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <Input label="Nom" name="name" placeholder="Ton nom" required />
                <Input label="Email" name="email" type="email" placeholder="ton@email.com" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Sujet</label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-white/30 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_0_3px_rgba(255,255,255,0.04)] transition-all cursor-pointer"
                  >
                    <option value="general">Question g&eacute;n&eacute;rale</option>
                    <option value="formation">Question sur les formations</option>
                    <option value="one-to-one">Formule One-to-One</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-text-primary text-sm min-h-[120px] resize-y shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] focus:outline-none focus:border-white/30 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_0_0_3px_rgba(255,255,255,0.04)] transition-all"
                    placeholder="Dis-nous tout..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            )}
          </GlassCard>
        </ScrollFadeIn>

        {/* Info */}
        <ScrollFadeIn delay={150}>
          <div className="flex flex-col gap-6">
            <GlassCard className="p-8">
              <h3 className="text-lg font-bold mb-4">R&eacute;serve un appel</h3>
              <p className="text-sm text-text-secondary mb-6">
                Tu veux en savoir plus sur la formule One-to-One ?
                R&eacute;serve un cr&eacute;neau directement avec un des fondateurs.
              </p>
              <Button href="#" variant="secondary" className="w-full">
                R&eacute;server un cr&eacute;neau &rarr;
              </Button>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-bold mb-4">Rejoins la communaut&eacute;</h3>
              <p className="text-sm text-text-secondary mb-6">
                &Eacute;change avec les autres &eacute;l&egrave;ves et les fondateurs sur notre Discord.
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
              <p className="text-sm text-white">support@opexia-formation.com</p>
            </GlassCard>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
