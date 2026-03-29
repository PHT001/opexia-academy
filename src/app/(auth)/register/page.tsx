"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") || "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hasMinLength || !hasSpecialChar) {
      setError("Le mot de passe ne respecte pas les critères requis");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          ...(refCode ? { referralCode: refCode } : {}),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de l'inscription");
        setLoading(false);
        return;
      }

      await signIn("credentials", { email, password, redirect: false });

      // Redirect to checkout via dashboard if coming from pricing page (skip verify-email)
      const redirect = searchParams.get("redirect");
      const plan = searchParams.get("plan");
      if (redirect === "checkout" && plan) {
        router.push(`/dashboard?auto_checkout=${encodeURIComponent(plan)}`);
        return;
      }
      router.push("/verify-email");
      router.refresh();
    } catch {
      setError("Erreur serveur");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E] tracking-tight">Créer un compte</h1>
        <p className="text-sm text-gray-500 mt-1">Rejoins OpexIA Academy</p>
      </div>

      {refCode && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm text-center">
          Tu as été invité par un membre ! Ton parrain sera récompensé.
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2.5">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {error}
        </div>
      )}

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="w-full h-12 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all mb-5"
      >
        <GoogleIcon />
        Continuer avec Google
      </button>

      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">ou</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744] transition-all"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Mot de passe
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="8 caractères minimum"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-12 px-4 pr-11 rounded-xl bg-white border border-gray-200 text-[#1A1A2E] placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
          {password.length > 0 && (
            <div className="mt-2 space-y-1">
              <p className={`text-xs flex items-center gap-1.5 ${hasMinLength ? "text-emerald-500" : "text-gray-400"}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${hasMinLength ? "bg-emerald-500" : "bg-gray-300"}`} />
                8 caractères minimum
              </p>
              <p className={`text-xs flex items-center gap-1.5 ${hasSpecialChar ? "text-emerald-500" : "text-gray-400"}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${hasSpecialChar ? "bg-emerald-500" : "bg-gray-300"}`} />
                1 caractère spécial (!@#$...)
              </p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
            Confirmer le mot de passe
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirme ton mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`w-full h-12 px-4 pr-11 rounded-xl bg-white border text-[#1A1A2E] placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 transition-all ${
                confirmPassword.length > 0 && !passwordsMatch
                  ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                  : "border-gray-200 focus:ring-[#FF1744]/20 focus:border-[#FF1744]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              <EyeIcon open={showConfirm} />
            </button>
          </div>
          {confirmPassword.length > 0 && !passwordsMatch && (
            <p className="text-xs text-red-400 mt-1.5">Les mots de passe ne correspondent pas</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !hasMinLength || !hasSpecialChar || !passwordsMatch}
          className="w-full h-12 rounded-xl bg-[#1A1A2E] text-white text-sm font-semibold hover:bg-[#2A2A40] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Création...
            </span>
          ) : (
            "Créer mon compte"
          )}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Déjà un compte ?{" "}
        <Link href="/login" className="text-[#FF1744] font-medium hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="w-full max-w-md">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
        </div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
