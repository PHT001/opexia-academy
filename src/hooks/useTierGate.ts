"use client";

import { useState, useEffect } from "react";

export function useTierGate(requiredTiers?: string[]) {
  const [tier, setTier] = useState<string>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check admin preview tier first
    const previewTier = typeof window !== "undefined"
      ? localStorage.getItem("admin-preview-tier")
      : null;

    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        const effectiveTier = previewTier || data?.tier || "free";
        setTier(effectiveTier);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const isLocked = requiredTiers ? !requiredTiers.includes(tier) : tier === "free";

  return { tier, isLocked, loading };
}
