"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

interface AdminStats {
  totalStudents: number;
  activeStudents: number;
  avgCompletion: number;
  avgQuizScore: number;
  totalLessons: number;
  completionsToday: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
      <p className="text-text-secondary mb-10">Vue d&apos;ensemble de la plateforme</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <GlassCard className="p-6">
          <p className="text-3xl font-black text-white">{stats?.totalStudents || 0}</p>
          <p className="text-xs text-text-tertiary mt-1">Élèves inscrits</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-3xl font-black">{stats?.activeStudents || 0}</p>
          <p className="text-xs text-text-tertiary mt-1">Actifs (7j)</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-3xl font-black text-success">{stats?.avgCompletion || 0}%</p>
          <p className="text-xs text-text-tertiary mt-1">Complétion moyenne</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-3xl font-black text-warning">{stats?.avgQuizScore || 0}%</p>
          <p className="text-xs text-text-tertiary mt-1">Score quiz moyen</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-3xl font-black">{stats?.totalLessons || 0}</p>
          <p className="text-xs text-text-tertiary mt-1">Leçons</p>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-3xl font-black text-white">{stats?.completionsToday || 0}</p>
          <p className="text-xs text-text-tertiary mt-1">Complétions (24h)</p>
        </GlassCard>
      </div>
    </div>
  );
}
