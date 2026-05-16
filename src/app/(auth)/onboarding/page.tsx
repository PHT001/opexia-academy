"use client";

import { useState, useEffect, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

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

function formatFrPhone(input: string): string {
  // Keep digits + leading "+" only
  const cleaned = input.replace(/[^\d+]/g, "");
  // Allow leading "+33" without auto-formatting
  if (cleaned.startsWith("+")) {
    // Insert a space every 2 chars after the country code (rough: +33 X XX XX XX XX)
    const cc = cleaned.slice(0, 3); // "+33"
    const rest = cleaned.slice(3).replace(/(\d{2})(?=\d)/g, "$1 ");
    return rest ? `${cc} ${rest}`.trim() : cc;
  }
  // Domestic: 06 12 34 56 78 — split every 2 digits
  return cleaned.replace(/(\d{2})(?=\d)/g, "$1 ");
}

function OnboardingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tokenStatus, setTokenStatus] = useState<"loading" | "valid" | "invalid">("loading");

  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const phoneValid = /^\+?[0-9]{8,15}$/.test(phoneDigits);

  useEffect(() => {
    if (!token) {
      setTokenStatus("invalid");
      return;
    }
    fetch(`/api/onboarding/validate-token?token=${encodeURIComponent(token)}`)
      .then(async (res) => {
        if (!res.ok) {
          setTokenStatus("invalid");
          return;
        }
        const data = await res.json();
        setEmail(data.email || "");
        setTokenStatus("valid");
      })
      .catch(() => setTokenStatus("invalid"));
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hasMinLength || !hasSpecialChar) {
      setError("Le mot de passe ne respecte pas les critères requis");
      return;
    }
    if (!passwordsMatch) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    if (!phoneValid) {
      setError("Numéro de téléphone invalide");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password, phone }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue");
        setLoading(false);
        return;
      }

      // Auto-login with the newly set password
      const signInRes = await signIn("credentials", {
        email: data.email,
        password,
        redirect: false,
      });

      if (signInRes?.error) {
        setError("Compte créé mais connexion échouée. Va sur /login.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Erreur serveur");
      setLoading(false);
    }
  }

  if (tokenStatus === "loading") {
    return (
      <div className="w-full max-w-md text-center">
        <div className="animate-spin h-8 w-8 border-2 border-white/10 border-t-[#06B6D4] rounded-full mx-auto" />
        <p className="text-sm text-white/50 mt-4">Vérification du lien...</p>
      </div>
    );
  }

  if (tokenStatus === "invalid") {
    return (
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Lien invalide</h1>
        <p className="text-sm text-white/50 mt-2">
          Ce lien d&apos;activation est invalide ou a expiré.<br />
          Contacte l&apos;équipe sur WhatsApp pour récupérer un nouveau lien.
        </p>
        <a
          href="https://wa.me/33756885225?text=Bonjour%2C%20mon%20lien%20d%27activation%20est%20expir%C3%A9.%20Pouvez-vous%20m%27en%20renvoyer%20un%20%3F"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1faa54] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Contacter sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Paiement reçu
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Active ton accès <span className="text-[#06B6D4]">OpexIA</span>
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Plus qu&apos;une étape : choisis ton mot de passe et laisse-nous ton numéro.
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2.5">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            disabled
            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-base cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={phone}
            onChange={(e) => setPhone(formatFrPhone(e.target.value))}
            required
            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4]/60 transition-all"
          />
          <p className="text-xs text-white/40 mt-1.5">Pour le suivi en perso et l&apos;onboarding 1-1.</p>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1.5">
            Mot de passe
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="8 caractères + 1 spécial"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-12 px-4 pr-11 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-base focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4]/60 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              tabIndex={-1}
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
          {password.length > 0 && (
            <div className="mt-2 space-y-1">
              <p className={`text-xs flex items-center gap-1.5 ${hasMinLength ? "text-emerald-400" : "text-white/40"}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${hasMinLength ? "bg-emerald-400" : "bg-white/20"}`} />
                8 caractères minimum
              </p>
              <p className={`text-xs flex items-center gap-1.5 ${hasSpecialChar ? "text-emerald-400" : "text-white/40"}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${hasSpecialChar ? "bg-emerald-400" : "bg-white/20"}`} />
                1 caractère spécial (!@#$...)
              </p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1.5">
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
              className={`w-full h-12 px-4 pr-11 rounded-xl bg-white border text-white placeholder:text-white/30 text-base focus:outline-none focus:ring-2 transition-all ${
                confirmPassword.length > 0 && !passwordsMatch
                  ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                  : "border-white/10 focus:ring-[#06B6D4]/40 focus:border-[#06B6D4]/60"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              tabIndex={-1}
              aria-label={showConfirm ? "Masquer le mot de passe" : "Afficher le mot de passe"}
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
          disabled={loading || !hasMinLength || !hasSpecialChar || !passwordsMatch || !phoneValid}
          className="w-full h-12 rounded-xl bg-[#06B6D4] text-white text-sm font-semibold hover:bg-[#0891b2] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#06B6D4]/20"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Activation...
            </span>
          ) : (
            "Activer mon accès →"
          )}
        </button>
      </form>

      <p className="text-center text-xs text-white/40 mt-6">
        Déjà un compte ?{" "}
        <Link href="/login" className="text-[#06B6D4] font-medium hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-md text-center">
          <div className="animate-spin h-8 w-8 border-2 border-white/10 border-t-[#06B6D4] rounded-full mx-auto" />
        </div>
      }
    >
      <OnboardingForm />
    </Suspense>
  );
}
