# Plan : Amélioration UX Free Tier + Offres intégrées

## Point 1 — CTA sans prix pour les free users (lessons page)

**Fichier:** `src/app/(platform)/lessons/page.tsx`

**Changements:**
- **Ligne ~521-546 (upsell mid-timeline):** Remplacer "Débloquer Academy — 497€" par un CTA soft : "Découvre nos offres pour tout débloquer →". Lien vers `/profile?tab=subscription` au lieu de `/#pricing`.
- **Ligne ~841-868 (upsell bottom):** Même traitement — texte plus engageant sans prix, lien interne vers la page offres.
- Le CTA mid-timeline reste positionné au milieu du scroll (après phase 1), c'est déjà bien placé.

## Point 2 — Améliorer le bandeau Formation

**Fichier:** `src/app/(platform)/lessons/page.tsx` (lignes 477-501)

**Changements:**
- Ajouter une illustration/icône plus visuelle (gradient icon ou emoji)
- Ajouter une barre de progression globale visuelle (pas juste le %)
- Ajouter un message motivant adapté au tier (free = "Commence ton parcours", academy = "Continue ta progression")
- Spacing et layout plus riches, style hero card avec fond subtle

## Point 3 — Suggestions onboarding free tier

Pas de code ici, juste des suggestions :
- Le flow actuel (free = phase 1 gratuite + tout flouté après) est bon pour montrer la qualité
- **Suggestions supplémentaires :**
  - Email de bienvenue avec guide des premiers pas
  - Notification/badge "Bravo, première leçon terminée !" après la 1ère leçon
  - Après la dernière leçon gratuite, un modal dédié "Tu as terminé le contenu gratuit, voici ce qui t'attend" avec aperçu des modules suivants
  - Un compteur "X/Y leçons gratuites complétées" dans le header formation

## Point 4 — Page "Mes offres" dans le profil

**Fichier:** `src/app/(platform)/profile/page.tsx`

L'onglet "Mon abonnement" existe DÉJÀ (`?tab=subscription`) avec :
- Le plan actuel affiché
- Les 3 tiers (Starter/Academy/One-to-One) avec boutons d'upgrade

**Changements:**
- Renommer l'onglet "Mon abonnement" → "Mes offres"
- Améliorer le design des cartes d'offres (plus vendeur, features plus claires)
- Tous les CTA de la plateforme (`/#pricing`) → `/profile?tab=subscription`
- Ajouter dans la sidebar un lien "Mes offres" qui pointe vers `/profile?tab=subscription`

---

## Ordre d'implémentation
1. Point 1 — CTA sans prix (rapide, 5min)
2. Point 4 — Redirect CTA + sidebar link (rapide)
3. Point 2 — Bandeau formation amélioré
4. Point 3 — Discussion uniquement, pas de code
