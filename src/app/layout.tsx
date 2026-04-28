import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://opexia-formation.com"),
  title: {
    default: "OpexIA Academy — Formation IA | Lance ton agence IA en 90 jours",
    template: "%s | OpexIA Academy",
  },
  description:
    "OpexIA Academy - La formation pour lancer ton agence IA et générer 10K/mois. 22 modules, 86 leçons, chatbots, automatisations, sites web, prospection.",
  keywords: [
    "formation IA",
    "agence IA",
    "chatbot IA",
    "formation en ligne",
    "lancer son agence",
    "intelligence artificielle",
    "automatisation IA",
    "créer agence IA",
    "formation en ligne IA",
    "OpexIA Academy",
  ],
  openGraph: {
    title: "OpexIA Academy — La formation pour lancer ton agence IA et générer 10K/mois",
    description:
      "22 modules, 86 leçons pour maîtriser l'IA : chatbots, automatisations, sites web, prospection. De zéro à 10K€/mois en 90 jours.",
    type: "website",
    locale: "fr_FR",
    url: "https://opexia-formation.com",
    siteName: "OpexIA Academy",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpexIA Academy - Formation IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpexIA Academy — Lance ton agence IA en 90 jours",
    description:
      "La formation pour lancer ton agence IA et générer 10K/mois. 22 modules, 86 leçons.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO: Add per-page canonical URLs in each route's metadata export instead of relying solely on this root canonical.
  alternates: {
    canonical: "https://opexia-formation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script
          defer
          data-domain="opexia-formation.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "OpexIA Academy",
              description: "Formation complète pour lancer ton agence IA et générer 10K€/mois. 22 modules, 86 leçons.",
              provider: {
                "@type": "Organization",
                name: "OpexIA",
                url: "https://opexia-formation.com",
              },
              url: "https://opexia-formation.com",
              coursePrerequisites: "Aucun prérequis technique",
              educationalLevel: "Débutant à Avancé",
              numberOfCredits: "86",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT40H",
              },
              offers: [
                {
                  "@type": "Offer",
                  price: "47",
                  priceCurrency: "EUR",
                  name: "Starter",
                  url: "https://opexia-formation.com/#pricing",
                },
                {
                  "@type": "Offer",
                  price: "397",
                  priceCurrency: "EUR",
                  name: "Academy",
                  url: "https://opexia-formation.com/#pricing",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm), system-ui, sans-serif" }}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
