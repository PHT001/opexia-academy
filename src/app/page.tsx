import Navbar from "@/components/landing/Navbar";

import Hero from "@/components/landing/Hero";
import VideoBlock from "@/components/landing/VideoBlock";
import LogosBar from "@/components/landing/LogosBar";
import PainSection from "@/components/landing/PainSection";
import UrgenceIA from "@/components/landing/UrgenceIA";
import DreamSection from "@/components/landing/DreamSection";
import DarkStats from "@/components/landing/DarkStats";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import LeadMagnet from "@/components/landing/LeadMagnet";
import Testimonials from "@/components/landing/Testimonials";
import FoundersFormation from "@/components/landing/FoundersFormation";
import Pricing from "@/components/landing/Pricing";
import MiniPricingFAQ from "@/components/landing/MiniPricingFAQ";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyFloatingCTA from "@/components/landing/StickyFloatingCTA";
import Chatbot from "@/components/landing/Chatbot";
import SaleNotification from "@/components/landing/SaleNotification";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoBlock />
      <LogosBar />
      <PainSection />
      <DreamSection />
      <UrgenceIA />
      <DarkStats />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FoundersFormation />
      <LeadMagnet />
      <Pricing />
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
