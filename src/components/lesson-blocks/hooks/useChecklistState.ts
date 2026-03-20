"use client";

import { useState, useCallback, useEffect } from "react";

export function useChecklistState(lessonSlug: string, blockId: string) {
  const storageKey = `checklist::${lessonSlug}::${blockId}`;

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) setCheckedItems(JSON.parse(stored));
    } catch {}
  }, [storageKey]);

  const toggleItem = useCallback(
    (itemId: string) => {
      setCheckedItems((prev) => {
        const next = { ...prev, [itemId]: !prev[itemId] };
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [storageKey]
  );

  return { checkedItems, toggleItem };
}
