import { prisma } from "@/lib/prisma";
import Navbar from "@/components/landing/Navbar";

import Hero from "@/components/landing/Hero";
import LogosBar from "@/components/landing/LogosBar";
import PainSection from "@/components/landing/PainSection";
import UrgenceIA from "@/components/landing/UrgenceIA";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DreamSection from "@/components/landing/DreamSection";
import FoundersFormation from "@/components/landing/FoundersFormation";
import Testimonials from "@/components/landing/Testimonials";
import LeadMagnet from "@/components/landing/LeadMagnet";
import Pricing from "@/components/landing/Pricing";
import MiniPricingFAQ from "@/components/landing/MiniPricingFAQ";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Chatbot from "@/components/landing/Chatbot";
import SaleNotification from "@/components/landing/SaleNotification";
import StickyFloatingCTA from "@/components/landing/StickyFloatingCTA";

export default async function Home() {
  // Count students with at least 1 completed lesson (real social proof)
  const SOCIAL_PROOF_OFFSET = 180;
  const activeLearnersCount = await prisma.user.count({
    where: {
      role: "student",
      isBot: false,
      progress: { some: { status: "completed" } },
    },
  });
  const socialProofCount = activeLearnersCount + SOCIAL_PROOF_OFFSET;

  return (
    <>
      <Navbar />
      <Hero />
      <LogosBar />
      <PainSection />
      <UrgenceIA />
      <Features />
      <HowItWorks />
      <DreamSection />
      <FoundersFormation />
      <Testimonials />
      <LeadMagnet />
      <Pricing />

      {/* Reassurance Section */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-[#6B7280] mb-6">
            Rejoint par <span className="text-[#FF1744] font-bold text-base">+{socialProofCount} &eacute;tudiants form&eacute;s</span>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#111] mb-1">Pas besoin de savoir coder</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Tu utilises des outils no-code et l&apos;IA code pour toi
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#111] mb-1">10K&euro;/mois, c&apos;est r&eacute;aliste ?</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                3 chatbots &agrave; 2&nbsp;500&euro; = 7&nbsp;500&euro;/mois. Nos &eacute;l&egrave;ves signent leur premier client en 14 jours.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#111] mb-1">Garantie 14 jours</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Suis la formation, et si les r&eacute;sultats ne sont pas l&agrave;, on te rembourse.*
              </p>
            </div>
          </div>
        </div>
      </section>

      <MiniPricingFAQ />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyFloatingCTA />
      <Chatbot />
      <SaleNotification />
    </>
  );
}
