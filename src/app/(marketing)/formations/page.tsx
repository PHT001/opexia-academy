import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations IA - OpexIA Academy",
  description: "Decouvre nos formations pour lancer ton agence IA. De 0 a ton premier client en 6 semaines.",
};

export default function FormationsPage() {
  redirect("/#pricing");
}
