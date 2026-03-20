import { Header } from "@/components/formaopex-landing/Header";
import { Footer } from "@/components/formaopex-landing/Footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
