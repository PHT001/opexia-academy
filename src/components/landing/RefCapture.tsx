"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RefCaptureInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      localStorage.setItem("opexia-ref", ref);
    }
  }, [searchParams]);

  return null;
}

export default function RefCapture() {
  return (
    <Suspense fallback={null}>
      <RefCaptureInner />
    </Suspense>
  );
}
