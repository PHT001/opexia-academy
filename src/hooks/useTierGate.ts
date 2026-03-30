"use client";

import { useState, useEffect } from "react";

export function useTierGate(requiredTiers?: string[]) {
  const [tier, setTier] = useState<string>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        const effectiveTier = data?.tier || "free";
        setTier(effectiveTier);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const isLocked = requiredTiers ? !requiredTiers.includes(tier) : tier === "free";

  return { tier, isLocked, loading };
}
