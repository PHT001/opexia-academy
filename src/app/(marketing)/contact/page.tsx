import type { Metadata } from "next";
import ContactSection from "@/components/landing/ContactSection";

export const metadata: Metadata = {
  title: "Contact | OpexIA Academy",
  description: "Des questions sur la formation IA? Contactez l'equipe OpexIA Academy. Reponse sous 24h.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
