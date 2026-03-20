import type { Metadata } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import { SessionProvider } from "@/components/providers/SessionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OpexIA Academy — Formation IA | Lance ton agence IA en 90 jours",
    template: "%s | OpexIA Academy",
  },
  description:
    "Formation complète pour lancer ton agence IA : chatbots, automatisations, sites web, prospection. De zéro à 10K€/mois en 90 jours.",
  keywords: [
    "formation IA",
    "agence IA",
    "chatbot IA",
    "formation en ligne",
    "lancer son agence",
  ],
  openGraph: {
    title: "OpexIA Academy — Lance ton agence IA en 90 jours",
    description: "Formation complète pour lancer ton agence IA : chatbots, automatisations, sites web, prospection.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
