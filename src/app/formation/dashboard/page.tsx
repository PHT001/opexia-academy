"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FormationDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.replace("/login");
    } else {
      router.replace("/dashboard");
    }
  }, [session, status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 border-2 border-[#007AFF] border-t-transparent rounded-full animate-spin" />
        <p className="text-white/50 text-sm">Redirection en cours...</p>
      </div>
    </div>
  );
}
