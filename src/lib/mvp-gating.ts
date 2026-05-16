// MVP gating logic — students must submit an MVP for module N (starting at
// module 3) before they can access lessons in module N+1. Modules 1 and 2 are
// open; admins are never gated.

import { prisma } from "@/lib/prisma";

/** Module order at which MVP-gating starts. M1 and M2 are open.
 *  Cad : on doit avoir soumis (et approuvé par admin) le MVP du module M2
 *  pour accéder à M3. M1 et M2 restent libres. */
export const MVP_GATING_STARTS_AT = 2;

/**
 * Returns the order of the first module the student should unlock with an MVP
 * but hasn't yet, or null if no blocker exists.
 *
 * Example: if the user wants to access module 4 lessons, we check that an MVP
 * exists for module 3. If not → returns 3. If yes → returns null (allowed).
 */
export async function findBlockingModule(
  userId: string,
  targetModuleOrder: number,
): Promise<number | null> {
  // Nothing to check before module MVP_GATING_STARTS_AT + 1.
  if (targetModuleOrder <= MVP_GATING_STARTS_AT) return null;

  // We need an approved-or-pending MVP for EVERY module in
  // [MVP_GATING_STARTS_AT .. targetModuleOrder - 1].
  const requiredModules: number[] = [];
  for (let m = MVP_GATING_STARTS_AT; m < targetModuleOrder; m++) requiredModules.push(m);
  if (requiredModules.length === 0) return null;

  // Option B (stricte) · seuls les MVPs APPROUVÉS par admin débloquent le module suivant.
  // Soumettre ne suffit plus · l'élève doit attendre validation.
  const approved = await prisma.project.findMany({
    where: {
      userId,
      moduleOrder: { in: requiredModules },
      status: "approved",
    },
    select: { moduleOrder: true },
  });
  const approvedSet = new Set(approved.map((p) => p.moduleOrder).filter((m): m is number => m != null));

  for (const m of requiredModules) {
    if (!approvedSet.has(m)) return m; // first missing one
  }
  return null;
}
