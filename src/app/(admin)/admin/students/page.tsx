"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Student {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  completedLessons: number;
  totalLessons: number;
  lastActive: string | null;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/students")
      .then((r) => r.json())
      .then(setStudents)
      .catch(() => {});
  }, []);

  const filtered = students.filter(
    (s) =>
      (s.name || "").toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Élèves</h1>
      <p className="text-text-secondary mb-8">{students.length} élèves inscrits</p>

      <input
        type="text"
        placeholder="Rechercher un élève..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-3 mb-6 bg-glass-bg border border-glass-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-white/30 transition-all"
      />

      <div className="space-y-3">
        {filtered.map((student) => {
          const pct = student.totalLessons > 0
            ? Math.round((student.completedLessons / student.totalLessons) * 100)
            : 0;
          return (
            <GlassCard key={student.id} className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {(student.name || student.email)[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{student.name || "Sans nom"}</p>
                  <p className="text-xs text-text-tertiary truncate">{student.email}</p>
                </div>
                <div className="w-32 shrink-0">
                  <ProgressBar value={pct} size="sm" />
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold">{student.completedLessons}/{student.totalLessons}</p>
                  <p className="text-xs text-text-tertiary">leçons</p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
