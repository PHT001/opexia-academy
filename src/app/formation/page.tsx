import Navbar from "@/components/landing/Navbar";

import Hero from "@/components/landing/Hero";
import LogosBar from "@/components/landing/LogosBar";
import PainSection from "@/components/landing/PainSection";
import UrgenceIA from "@/components/landing/UrgenceIA";
import DreamSection from "@/components/landing/DreamSection";
import DarkStats from "@/components/landing/DarkStats";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import VideoBlock from "@/components/landing/VideoBlock";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FoundersFormation from "@/components/landing/FoundersFormation";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyFloatingCTA from "@/components/landing/StickyFloatingCTA";
import Chatbot from "@/components/landing/Chatbot";

export default function FormationPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosBar />
      <PainSection />
      <DreamSection />
      <UrgenceIA />
      <DarkStats />
      <HowItWorks />
      <Features />
      <VideoBlock />
      <Testimonials />
      <Pricing />
      <FoundersFormation />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyFloatingCTA />
      <Chatbot />
    </>
  );
}
