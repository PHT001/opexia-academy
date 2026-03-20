import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpexIA — Lance ton agence IA rentable en 30 jours",
  description:
    "Formation complète pour créer et vendre des services IA aux entreprises locales. Atteins 10k€/mois avec ta propre agence IA.",
  openGraph: {
    title: "OpexIA — Lance ton agence IA rentable en 30 jours",
    description:
      "Formation complète pour créer et vendre des services IA. Premier client en 30 jours.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
