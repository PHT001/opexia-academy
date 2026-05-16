"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      setError("Le mot de passe doit contenir au moins un caractère spécial");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (!token) {
      setError("Token de réinitialisation manquant");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch {
      setError("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Lien invalide</h1>
        <p className="text-sm text-white/50 mt-2">
          Ce lien de réinitialisation est invalide ou a expiré.
        </p>
        <Link
          href="/forgot-password"
          className="inline-block mt-8 text-sm text-[#06B6D4] font-medium hover:underline"
        >
          Demander un nouveau lien
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Mot de passe modifié !</h1>
        <p className="text-sm text-white/50 mt-2">Redirection vers la connexion...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">Nouveau mot de passe</h1>
        <p className="text-sm text-white/50 mt-1">
          Choisis un nouveau mot de passe pour ton compte
        </p>
      </div>

      {error && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-2.5">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1.5">
            Nouveau mot de passe
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4]/60 transition-all"
          />
          <p className="text-xs text-white/40 mt-1.5">Minimum 8 caractères, dont un caractère spécial</p>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1.5">
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4]/60 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-[#1F1F36] border border-white/10 text-white text-sm font-semibold hover:bg-[#262644] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Modification...
            </span>
          ) : (
            "Modifier le mot de passe"
          )}
        </button>
      </form>

      <p className="text-center text-sm text-white/50 mt-8">
        <Link href="/login" className="text-[#06B6D4] font-medium hover:underline">
          Retour à la connexion
        </Link>
      </p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md text-center">
          <div className="animate-spin h-8 w-8 border-2 border-white/10 border-t-[#06B6D4] rounded-full mx-auto" />
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
