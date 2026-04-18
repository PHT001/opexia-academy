"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const EMAIL = "support@opexia-formation.com";

const FAQ_ITEMS = [
  {
    question: "La formation est-elle accessible aux débutants complets ?",
    answer:
      "Oui, la formation est conçue pour les débutants. Aucune compétence technique préalable n'est requise. On te guide pas à pas, de A à Z, pour que tu puisses lancer ton agence IA même si tu pars de zéro.",
  },
  {
    question: "Combien de temps faut-il pour compléter la formation ?",
    answer:
      "Le programme est prévu pour 90 jours à raison de quelques heures par semaine. Tu peux avancer à ton rythme — l'accès est illimité, sans date d'expiration.",
  },
  {
    question: "Est-ce que je peux payer en plusieurs fois ?",
    answer:
      "Oui, nous proposons un paiement en plusieurs mensualités pour l'Academy et le One-to-One. Les détails sont disponibles sur la page tarifs.",
  },
  {
    question: "Quel support est disponible pendant la formation ?",
    answer:
      "Tu as accès à notre communauté privée, au support par email. Pour le One-to-One, tu bénéficies en plus d'un accompagnement individuel avec un mentor.",
  },
  {
    question: "Puis-je obtenir un remboursement si la formation ne me convient pas ?",
    answer:
      "Oui, nous proposons une garantie satisfait ou remboursé sous conditions. Consulte nos CGU pour les détails.",
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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
      setError("Erreur de connexion. Réessaye.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111]">
            Nous contacter
          </h2>
          <p className="mt-3 text-[#6B7280] text-lg max-w-xl mx-auto">
            Une question sur la formation, les tarifs ou l&apos;accompagnement ?
            On est l&agrave; pour toi.
          </p>
          {/* Location */}
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#6B7280]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Paris, France
          </div>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow max-w-sm mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF1744]">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-[#111]">Email</span>
            </div>
            <p className="text-sm text-[#6B7280]">
              {EMAIL}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-500">
                Envoyer un email &rarr;
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                R{"\u00E9"}ponse sous 24h
              </span>
            </div>
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8"
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">{"\u2705"}</div>
              <h3 className="text-xl font-bold mb-2 text-[#111]">Message envoy{"\u00E9"} !</h3>
              <p className="text-sm text-[#6B7280]">
                Merci pour ton message. On te r{"\u00E9"}pond en moins de 24h.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[#111] mb-1">Envoyez-nous un message</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                Remplis le formulaire ci-dessous et on revient vers toi rapidement.
              </p>
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#111] mb-1.5">Pr{"\u00E9"}nom</label>
                    <input
                      name="name"
                      required
                      placeholder="Ex : Thomas"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FA] text-base sm:text-sm text-[#111] placeholder-[#9CA3AF] focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111] mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="thomas@exemple.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FA] text-base sm:text-sm text-[#111] placeholder-[#9CA3AF] focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111] mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Dis-nous ce qui t'int&eacute;resse : la formation, l'accompagnement, les tarifs..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FA] text-base sm:text-sm text-[#111] placeholder-[#9CA3AF] resize-y focus:outline-none focus:border-[#FF1744] focus:ring-1 focus:ring-[#FF1744] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3.5 text-sm font-semibold text-white bg-[#FF1744] hover:bg-[#D50000] transition-all disabled:opacity-60 min-h-[48px]"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </>
          )}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111] text-center mb-2">
            Questions fr{"\u00E9"}quentes
          </h3>
          <p className="text-sm text-[#6B7280] text-center mb-8">
            Tu ne trouves pas ta r{"\u00E9"}ponse ? {"\u00C9"}cris-nous sur WhatsApp ou par email.
          </p>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  faqOpen === index
                    ? "border-[#FF1744]/20 shadow-sm"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left text-[15px] font-semibold text-[#111] hover:text-[#FF1744] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#9CA3AF] transition-transform duration-300 shrink-0 ml-4 ${
                      faqOpen === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen === index ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-sm text-[#6B7280] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
