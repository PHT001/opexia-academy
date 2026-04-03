import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — OpexIA Academy | Conseils IA & Agence",
  description: "Articles, guides et conseils pour lancer ton agence IA. Chatbots, automatisations, prospection, et plus.",
  openGraph: {
    title: "Blog — OpexIA Academy",
    description: "Articles, guides et conseils pour lancer ton agence IA.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
