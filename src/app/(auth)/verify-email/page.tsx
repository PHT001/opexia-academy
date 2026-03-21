"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const startCooldown = useCallback(() => {
    setResendCooldown(60);
  }, []);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  function handleChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setCode(pasted.split(""));
      inputRefs.current[5]?.focus();
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 6) {
      setError("Entre le code a 6 chiffres");
      return;
    }

    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: fullCode }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Erreur de verification");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 2000);
  }

  async function handleResendCode() {
    if (resendCooldown > 0 || resendLoading) return;

    setResendLoading(true);
    setResendMessage("");
    setError("");

    try {
      const res = await fetch("/api/auth/resend-code", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors du renvoi");
        return;
      }

      setResendMessage("Code renvoye !");
      startCooldown();
      setTimeout(() => setResendMessage(""), 5000);
    } catch {
      setError("Erreur de connexion. Reessaye.");
    } finally {
      setResendLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md text-center">
      {success ? (
        <div>
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E] tracking-tight">Email v&eacute;rifi&eacute; !</h1>
          <p className="text-sm text-gray-500 mt-2">Redirection vers ton espace...</p>
        </div>
      ) : (
        <>
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E] tracking-tight">V&eacute;rifie ton email</h1>
          <p className="text-sm text-gray-500 mt-2">
            Un code &agrave; 6 chiffres a &eacute;t&eacute; envoy&eacute; &agrave;{" "}
            <span className="font-medium text-[#1A1A2E]">{session?.user?.email || "ton adresse"}</span>
          </p>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
              {error}
            </div>
          )}

          {resendMessage && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm">
              {resendMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex justify-center gap-3" onPaste={handlePaste}>
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-12 h-14 text-center text-xl font-bold rounded-xl bg-white border border-gray-200 text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744] transition-all"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading || code.join("").length !== 6}
              className="w-full h-12 mt-6 rounded-xl bg-[#1A1A2E] text-white text-sm font-semibold hover:bg-[#2A2A40] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {loading ? "V\u00e9rification..." : "V\u00e9rifier"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleResendCode}
            disabled={resendLoading || resendCooldown > 0}
            className="mt-4 text-sm font-medium text-[#FF1744] hover:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline transition-all"
          >
            {resendLoading
              ? "Envoi en cours..."
              : resendCooldown > 0
                ? `Renvoyer le code (${resendCooldown}s)`
                : "Renvoyer le code"}
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Tu n&apos;as pas re&ccedil;u le code ? V&eacute;rifie tes spams ou{" "}
            <Link href="/register" className="text-[#FF1744] hover:underline">
              r&eacute;essaye l&apos;inscription
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
