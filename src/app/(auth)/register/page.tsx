"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
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

      // Auto login after register
      await signIn("credentials", { email, password, redirect: false });
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Erreur serveur");
      setLoading(false);
    }
  }

  return (
    <GlassCard className="w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Créer un compte</h1>

      {refCode && (
        <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
          Tu as été invité par un membre ! Ton parrain sera récompensé.
        </div>
      )}

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-danger/10 border border-danger/30 text-danger text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Nom"
          placeholder="Ton prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="ton@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Mot de passe"
          type="password"
          placeholder="6 caractères minimum"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Création..." : "Créer mon compte"}
        </Button>
      </form>

      <p className="text-center text-sm text-text-tertiary mt-6">
        Déjà un compte ?{" "}
        <Link href="/login" className="text-white hover:underline">
          Se connecter
        </Link>
      </p>
    </GlassCard>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <GlassCard className="w-full max-w-md p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-white/5 rounded w-48 mx-auto" />
          <div className="h-10 bg-white/5 rounded" />
          <div className="h-10 bg-white/5 rounded" />
          <div className="h-10 bg-white/5 rounded" />
          <div className="h-10 bg-white/5 rounded" />
        </div>
      </GlassCard>
    }>
      <RegisterForm />
    </Suspense>
  );
}
