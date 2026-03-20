"use client";

import { useState, useCallback } from "react";

export function useQuizState() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const select = useCallback(
    (optionId: string) => {
      if (revealed) return;
      setSelectedId(optionId);
      setRevealed(true);
    },
    [revealed]
  );

  return { selectedId, revealed, select };
}
