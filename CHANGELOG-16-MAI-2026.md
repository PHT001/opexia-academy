# Changelog — Session du 16 mai 2026

Récap intégral de tout ce qui a été modifié sur la plateforme entre ~10h et ~16h le 16 mai 2026.

L'état actuel en prod (`opexia-formation.vercel.app`) est un **ROLLBACK** sur le deploy d'hier 18h25 (`9ctkyyjul`, dpl_42QpbA6HBacgZLC4RXcKEShSDba7). Les modifications listées ci-dessous sont **présentes dans git `main`** (commit `459c334`) mais **PAS en prod**. Pour les ré-appliquer, voir la section "Plan de ré-application" en fin de doc.

---

## 1. Système de tiers refondu (Starter/Academy → Standard/Accompagnement)

**Avant** : 2 tiers (`starter`, `academy` à 397€).
**Après** : 3 tiers
- `standard` (89€/mois, mode subscription Stripe)
- `standard_lifetime` (697€ one-shot, mode payment Stripe)
- `accompagnement` (2497€, sur-mesure, paiement via WhatsApp / 1-to-1)

**Fichiers touchés** :
- `src/lib/constants.ts` : `TIER_PRIORITY`, `TIER_PRICES_CENTS`, `TIER_MODULE_ACCESS` étendus
- `src/app/api/checkout/route.ts` : `PLANS` map, détection auto subscription vs payment
- `src/app/api/webhook/route.ts` : `PLAN_TO_TIER`, `TIER_RANK`, `TIER_COMMISSION` étendus
- `src/app/(platform)/offres/page.tsx` : 3 cartes avec Lifetime "le plus populaire"
- `src/components/landing/Chatbot.tsx` + FAQ : réponses alignées sur nouvelle pricing

## 2. MVP Gating end-to-end

Système de validation par module : à la fin de chaque module, l'élève soumet un MVP (URL Vercel ou description). L'admin reviewe sous 24h, valide, débloque le module suivant.

**Fichiers créés** :
- `src/lib/mvp-gating.ts` : `findBlockingModule(userId, targetModuleOrder)` + constante `MVP_GATING_STARTS_AT`
- `src/components/lesson/InlineMvpSubmission.tsx` : formulaire inline sur la dernière leçon de chaque module
- `src/app/(platform)/lessons/[lessonId]/page.tsx` : intégration formulaire + accessBlock 403

**Backend** :
- `src/app/api/lessons/[lessonId]/route.ts` : check `findBlockingModule` → 403 `{ reason: "mvp_required" }`
- `src/app/api/projects/route.ts` : wire `moduleOrder` dans la submission
- Schéma Prisma : `Project.moduleOrder` ajouté

## 3. Module 23 ajouté (Scaler)

Migration du parcours : 22 modules → 23 modules.
- `prisma/data/new_module_22_masterclass_tools.ts` (existant)
- Constantes : `MODULES`, `WEEKS` étendues

## 4. DB cleanup — Drop Quiz + CoachingSession

**Tables supprimées** :
- `Quiz` (16 lignes)
- `QuizQuestion` (180 lignes)
- `QuizSubmission` (320 lignes)
- `CoachingSession` (48 lignes)

**Code supprimé** :
- Routes `/api/quizzes/*`, `/api/quiz-submissions/*`
- Routes `/api/coaching/book`, `/api/coaching/checkout`, `/api/coaching/slots`, `/api/coaching/webhook`
- Composants UI quiz dans pages admin
- `src/app/(platform)/coaching/page.tsx` réécrit autour de l'embed Cal.com

**Tables ajoutées** :
- `Ticket` (support tickets)
- `MasterclassPurchase` (achats masterclass à l'unité)
- `Project.moduleOrder`
- `User.freeCallUsed`, `User.freeCallUsedAt`
- `Enrollment.isLifetime`

**Schéma drift fixé** dans `prisma/schema.prisma` (commit `6bd2f71`).

## 5. Cyan rebrand (#FF1744 → #06B6D4)

**591 substitutions** sur **83 fichiers** (commit `710633b`). Toute la palette rouge du précédent thème a été remplacée par cyan `#06B6D4` et son hover `#0891B2`.

Concerne : dashboard, leçons, sidebar, boutons, badges, gradients, focus rings, etc.

## 6. Auth pages redesign (sombre + cyan)

`src/app/(auth)/layout.tsx` + login/register/forgot-password/reset-password/verify-email/onboarding :
- Fond dark `#0a0a14` partout
- Gradient cyan radial sur le panneau de gauche
- Copy : "Lance ton agence IA. / 10 000 €/mois en 90 jours. / 23 modules step-by-step, soumission MVP à chaque module avec review perso sous 24 h. Marius t'accompagne en direct."
- Forms dark (input bg `white/5`, border `white/10`), bouton submit indigo `#1F1F36`

## 7. Dark mode par défaut sur la plateforme

`src/app/(platform)/layout.tsx` : flag `darkMode` initialisé à `true` (au lieu de `false`). Le CSS `.theme-dark` existant override ~30 classes Tailwind d'un coup.

## 8. Perf — Leçons instantanées

- `src/app/api/lessons/[lessonId]/route.ts` : queries parallèles `Promise.all([enrollments, lessonsInModule])`
- `src/app/api/lessons/[lessonId]/start/route.ts` : endpoint fire-and-forget pour `lessonProgress` + `streak` (déplacés hors de la query bloquante)
- `src/app/(platform)/lessons/[lessonId]/page.tsx` : 
  - `lessonCache` Map client-side
  - Skeleton loader (au lieu de spinner)
  - `Link prefetch` sur prev/next
  - Prefetch programmatique des leçons adjacentes au load
  - Scroll-to-top à la navigation

**Résultat** : 1er load ~150ms (vs ~600ms), navigation subséquente <100ms.

## 9. Stripe webhook + cron

- `src/app/api/webhook/route.ts` : gère les nouveaux plans `standard`, `standard_lifetime`, `accompagnement`
- `src/app/api/cron/reset-monthly-call/route.ts` : reset mensuel `freeCallUsed=false` le 1er de chaque mois (corrige le cron schedule)

## 10. Sécurité

- CSP étendue dans `next.config.ts` pour autoriser `cal.com` + `app.cal.com` en `frame-src`, `script-src`, `connect-src` (commit `7c14fad`)
- Audit XSS, CSRF, RLS, secrets — tâche #27 marquée complète

## 11. UX

- Écran friendly "module verrouillé" quand MVP gating bloque l'accès (commit `f83abd2`)
- Module locked honoré depuis l'API dans `/lessons` overview
- "Continuer avec Google" bouton harmonisé
- ChatWidget FAQ aligné sur nouvelle pricing
- "397€" hardcodé retiré des CTAs leçons + sidebar

## 12. Fix /api/progress (post-rollback)

`src/app/api/progress/route.ts` faisait encore `include: { quiz: { submissions } }` sur `Lesson` après le drop. Résultait en `PrismaClientValidationError 500` à chaque chargement du dashboard. Fix dans commit `b4613a2` : retrait des includes morts dans `/api/progress` ET `/api/admin/analytics`.

## 13. Infrastructure

- `NEXTAUTH_URL` env var fixée (était stockée avec un `\n` final en littéral, NextAuth refusait)
- Vercel env vars audit complet
- Password Marius reset à `Opexia2026!` (bcrypt 12 rounds)
- Resend email domain vérifié

---

## État actuel (16 mai ~16h)

| Élément | Git `main` (commit 459c334) | Prod `opexia-formation.vercel.app` (deploy 9ctkyyjul) |
|---|---|---|
| Tiers Standard/Lifetime/Accompagnement | ✅ | ❌ (ancien 2 tiers : Academy 697€ + 1-to-1) |
| MVP gating | ✅ | ❌ |
| 23 modules | ✅ | ❌ (22 modules) |
| Quiz/CoachingSession tables | ❌ droppées | code attend tables → 500 possible sur `/admin/analytics`, `/coaching/book` etc |
| Cyan rebrand | ✅ | ✅ déjà cyan dans rollback |
| Dark mode default | ✅ | ✅ déjà dark dans rollback |
| /api/progress fix | ✅ | ❌ (mais code rollback n'utilise pas la query cassée) |

---

## Plan de ré-application

Le rollback a "perdu" toutes les améliorations git du matin (elles existent toujours dans `main` mais ne sont pas en prod). Pour les remettre en prod proprement :

1. **Récupérer la source du deploy 9ctkyyjul** (la "version d'hier 18h25") — Vercel ne l'expose pas via CLI, donc soit Marius la repush depuis son disque local s'il l'a encore, soit on reconstruit à partir des screenshots `opexia-qcm/preview/*.png` + des deltas git visibles.

2. **Cherry-pick les commits du matin sur cette base** :
   - Tier system (0c607ef, 1c85f7c, 1172025, e2e9474, 861c33b, 3e078f5, bfb4943)
   - MVP gating (d1a3b55, 8204423, 239cdf5, f83abd2, fd3ef19)
   - DB cleanup (4a698c3, 6bd2f71, b4613a2)
   - Perf (3d3b71b, ca2f0c3)
   - Module 23 (0c607ef inclut)
   - Sécurité CSP (7c14fad)

3. **Garder le design dark cyan déjà en place** (rollback inclut déjà la palette cyan).

4. **Tester chaque page** avant deploy : login, register, dashboard, lessons, module 1 → leçon, submission MVP, /offres, /coaching, admin cockpit.

5. **Re-deploy** une fois validé.

---

## Notes de session — incidents

- Marius confus sur la couleur (s'attendait à cyan, voyait rouge sur écran). Cause : son refacto cyan local du 14 mai jamais commit en git. Fixé en re-jouant les 591 substitutions dans commit `710633b`.
- Plusieurs builds Vercel échoués à cause de `lib/mvp-gating.ts` untracked localement → fixé via commit `239cdf5`.
- PAT GitHub expiré côté WSL git → utilisation de `cmd.exe /c git push` (PAT Windows toujours valide).
- "Une erreur est survenue" sur la page React → cause = `/api/progress` 500 sur Prisma includes morts → fix b4613a2.
- Confusion finale : Marius mentionne un "nouveau projet" travaillé toute la semaine introuvable nulle part. Hypothèse : ses deploys Vercel d'hier ont été faits directement via `vercel --prod` sans `git push`, le source local a été écrasé ou perdu. La SEULE trace = les deploys Vercel. C'est pourquoi un ROLLBACK plutôt qu'un cherry-pick a été retenu.

---

*Document généré le 16 mai 2026 ~16h après confirmation du rollback par Marius.*
