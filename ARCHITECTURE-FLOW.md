# Architecture · Flow du SaaS Opexia

État au 16 mai 2026 · 17h35

---

## 🌐 2 projets Vercel, 2 domaines

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   www.opexia-formation.com  ──►  opexia-qcm  (LANDING)          │
│   opexia-formation.com           HTML statique + Stripe API     │
│                                                                 │
│           │                                                     │
│           │  "Se connecter"  +  "Voir les offres → checkout"   │
│           ▼                                                     │
│                                                                 │
│   app.opexia-formation.com  ──►  opexia-formation  (PLATEFORME) │
│   opexia-formation.vercel.app    Next.js + Prisma + NextAuth    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Landing · `opexia-qcm`
- **URL prod** : https://www.opexia-formation.com/ (= https://opexia-formation.com/)
- **Vercel** : `opexia-qcm.vercel.app` (alias technique)
- **Source locale** : `/home/utilisateur/projects/opexia-qcm/` (WSL Linux)
- **Type** : statique HTML + 2 API routes Vercel (`/api/lead.js`, `/api/checkout.js`)
- **Stripe** : redirection vers les checkout sessions générées
- **Légal** : `/cgv.html`, `/mentions-legales.html`, `/politique-de-confidentialite.html`
- **Onboarding** : `/merci-abonnement.html` après paiement

### Plateforme · `opexia-formation`
- **URL prod cible** : https://app.opexia-formation.com (DNS À CONFIGURER, voir plus bas)
- **URL prod actuelle** : https://opexia-formation.vercel.app/ (alias fonctionnel en attendant)
- **Vercel** : `opexia-formation.vercel.app` (alias par défaut Vercel)
- **Source locale** : `/mnt/c/Users/Utilisateur/Desktop/Projets/Coding/Agence OpexIA/opexia-formation/` (Windows)
- **GitHub** : https://github.com/PHT001/opexia-academy (public)
- **Stack** : Next.js 16 + React 19 + Prisma 7 + NextAuth + Tailwind v4
- **DB** : Postgres Supabase (eu-west-1 pooler)
- **Auth** : NextAuth Credentials (bcrypt 12 rounds) + Google OAuth
- **Emails** : Resend (domaine vérifié)
- **Paiements** : Stripe webhook → upgrade enrollment.tier
- **Coaching** : Cal.com embed iframe
- **État deploy en prod** : `9ctkyyjul` (rollback) · git auto-deploy bloqué via `vercel.json`

---

## 🔗 Liens entre les 2

| Origine | Lien | Destination |
|---|---|---|
| Landing topbar | "Se connecter" | https://app.opexia-formation.com/login |
| Landing pricing | "Voir les offres" | scroll vers `#pricing` (même page) |
| Landing checkout | `/api/checkout` → Stripe Checkout | success → app `/register?checkout_success=true` |
| Plateforme `/offres` | CTA "Démarrer" | Stripe Checkout session |
| Plateforme webhook | Stripe `customer.subscription.created/updated` | upgrade `Enrollment.tier` en DB |
| Plateforme `/coaching` | iframe | https://cal.com/marius-opexia/30min |

---

## 🚧 DNS À CONFIGURER chez OVH

Pour que `app.opexia-formation.com` fonctionne, ajouter ce record dans le panel OVH (zone DNS de `opexia-formation.com`) :

```
Sous-domaine    : app
Type            : A
TTL             : 600 (10 min)
Cible           : 76.76.21.21
```

Ou en CNAME (alternative) :
```
Sous-domaine    : app
Type            : CNAME
TTL             : 600
Cible           : cname.vercel-dns.com
```

Le sous-domaine est DÉJÀ enregistré côté Vercel (linké au projet `opexia-formation`). Il manque juste le record DNS chez OVH. 5 min de propagation après l'ajout, et `app.opexia-formation.com` servira la plateforme.

---

## 🗄️ Postgres Supabase

- **Project** : Supabase eu-west-1 (pooler)
- **DATABASE_URL** : déjà set dans Vercel env (Production + Preview + Development)
- **DIRECT_URL** : pour migrations Prisma
- **Schéma** : `prisma/schema.prisma`
- **Modèles principaux** :
  - `User`, `Account`, `Session`, `VerificationToken` (NextAuth)
  - `Enrollment` (tier, isLifetime, status, stripeCustomerId)
  - `Module`, `Lesson`, `LessonProgress`, `Streak` (formation)
  - `Project` (MVP submission, moduleOrder, status)
  - `Quiz`, `QuizQuestion`, `QuizSubmission` · *coquilles vides post-rollback, conservées pour compat code*
  - `CoachingSession` · *coquille vide, idem*
  - `Ticket` (support)
  - `MasterclassPurchase`
  - `Referral`, `Payout` (parrainage)
  - `Lead` (capture landing)

---

## 🔐 Comptes & accès admin

- **Admin** : `opexiapro@gmail.com` / mot de passe `marius2026` (modifiable via /profile)
- **Rôle** : `admin` · accès illimité à toutes les leçons, dashboard admin (KPIs, élèves, revenue)
- **Enrollment** : tier `academy` (mappé pour compat rollback, équivaut à toutes les sections)

---

## 📦 Vercel · projets à connaitre

| Projet Vercel | Domaine prod | Rôle |
|---|---|---|
| `opexia-formation` | opexia-formation.vercel.app (futur : app.opexia-formation.com) | Plateforme SaaS |
| `opexia-qcm` | www.opexia-formation.com | Landing + Stripe checkout |
| ~~`opexia-academy-v2.vercel.app`~~ | (alias frozen 4j) | Référence/preview, à ignorer |
| `opexia-landing` | opexia-agency.com | *autre projet — site agence* |
| `opexia-sites` | sites.opexia-agency.fr | *autre projet — vitrines sites clients* |

---

## ⚙️ Déploiement actuel

```
git push origin main  ──┐
                        │
                        ▼
                  ┌──────────────────────────┐
                  │ vercel.json:             │
                  │ git.deploymentEnabled    │
                  │   .main = false  ❌      │
                  └──────────────────────────┘
                        │
                        ▼
                  Pas de deploy auto · état prod inchangé
```

Pour ré-activer les deploys auto, retirer `git.deploymentEnabled.main: false` de `vercel.json` et push.

Pour redéployer **manuellement** depuis le local :
```bash
cd /mnt/c/Users/Utilisateur/Desktop/Projets/Coding/Agence\ OpexIA/opexia-formation
vercel --prod
```

---

## 🚨 Points d'attention

1. **DB ≠ Code** : j'ai accès à Postgres (peux modifier titre/contenu lessons, users, enrollments, etc.) mais le source TypeScript du deploy en prod (`9ctkyyjul`) n'est plus disponible sur disque (perdu lors du `vercel --prod` du 15/05 18h25). Tout changement de design/UI nécessite de soit déployer main (qui a une sidebar simplifiée) soit reconstruire à l'identique.
2. **Tables Quiz/CoachingSession** : recréées en COQUILLES VIDES dans la DB pour que le code rollback (qui les query encore) ne crashe pas. Ne pas les supprimer.
3. **Tier migration** : tous les enrollments DB ont été migrés vers tier `academy` (le rollback ne connaît pas `standard`/`accompagnement`). Si on rebascule sur main, il faudra re-migrer dans l'autre sens.
4. **Stripe webhook** : pointe vers `https://opexia-formation.vercel.app/api/webhook`. À updater vers `app.opexia-formation.com` une fois DNS configuré.

---

*Document généré le 16 mai 2026 ~17h35 pour Marius · flow complet entre landing, plateforme, DB et infra.*
