# Récap des demandes de Marius — 16 mai 2026

Liste intégrale de tout ce que Marius m'a demandé depuis 8h du matin jusqu'à ~16h30. Compilé à partir des messages texte et vocaux Telegram.

---

## 🛠️ Demandes techniques

### Stack & outils
1. **Virer les anciens outils** : Vapi, n8n, Zapier, Voyage AI, Mistral, Aider, Copilot, Postmark, ConvertKit, Doctolib, Make.com, Calendly
2. **Remplacer par** : ElevenLabs Agents + Twilio + Opus 4.7 (voice agents) · Apify (scraping)
3. **Modèles IA** : Opus 4.7 par défaut dans les leçons, mentionner Sonnet 4.6 comme "budget option", Haiku 4.5 disponible

### Contenu pédagogique
4. **23 modules** au lieu de 22 — un module "Scaler" ajouté en fin de parcours
5. **Une leçon "Exercice"** à la fin de chaque module, types variés et stimulants
6. **Narrative perfection M1→M23** — zéro erreur, qu'un ado de 15 ans puisse suivre
7. **Faire l'intégralité** du parcours · ne rien laisser à moitié

### Système de tiers · pricing
8. **3 tiers exclusifs** :
   - Standard mensuel · 89€/mois (subscription Stripe)
   - Standard Lifetime · 697€ one-shot (badge "le plus populaire")
   - Accompagnement One-to-One · sur-mesure (paiement WhatsApp)
9. **Standard mensuel = Lifetime UX-wise** · seule différence : "3 appels offerts" en bonus côté Lifetime
10. **Pas de "rentabilisé en X mois"** ni de garantie remboursement
11. **Lifetime par défaut** · asymétrie visible (× greyé sur Mensuel)

### Performance
12. **Navigation leçons** ramener de 3-4s à instantané
13. **Polish toutes les transitions** UI
14. **Dashboard transitions** + ad-hoc UI cleanup

### Sécurité
15. **Audit hacker-mode** : trouver TOUTES les possibilités de bypass tier
16. **No API exposure**, no XSS, no SQL injection, no code injection
17. **Vérifier toutes les routes** auth, RLS, CSP, secrets

### DB
18. **Drop legacy tables** : Quiz, QuizQuestion, QuizSubmission, CoachingSession (4 tables · 564 lignes)
19. **Schema migrations** à appliquer proprement

### Infra
20. **Setup env vars Vercel** en autonome (Marius pas le temps d'aller dans le dashboard Vercel)
21. **Setup env vars Cal.com webhook** · HMAC-SHA256
22. **Vérifier le domaine Resend** + emails transactionnels

### Branding
23. **Cyan #06B6D4** au lieu de rouge #FF1744 partout (591 substitutions)
24. **Pas de tirets cadratin "—"** dans le copy · remplacer par "." "," ou middle dot " · "
25. **Pas d'asterisks autour des URLs Telegram** · casse le rendu mobile

### Livrables
26. **PDF récap du flow de conversion** style Quentin Congrega (dark cyan)
27. **Note complète** de tout ce qu'on a fait depuis ce matin
28. **Récap des demandes** (ce doc même)

---

## 📲 Demandes opérationnelles

29. **Donne-moi les accès** à la plateforme (URL, email, mot de passe)
30. **Reset mon mot de passe** quand l'autofill Safari galère avec le `!` → simpler password
31. **Test complet UI après refacto** · taper dans les inputs, ouvrir les sections, pas juste screenshot statique
32. **Double-check visuel** avant validation · casquette d'expert + screenshot + cohérence

---

## 🚨 Demandes critiques d'audit/correction

33. **"Tu en es où ?"** / **"Tu en es où du push ?"** · status checks réguliers
34. **"Vague 2"** · seconde passe de modifications
35. **"Maintenant je veux que tu fasses l'intégralité, je veux que tu fasses tout"**
36. **Polish ergonomie · épure max** · "pavé"/"gros" = trop · cards pricing très différentes visuellement
37. **CTA WhatsApp** = juste logo + "RDV WhatsApp"

---

## 🔄 Pivot fin de session

38. **Confusion plateforme** · pensait que je travaillais sur le mauvais projet (red dashboard vs cyan)
39. **"Reprends celui d'hier"** · rollback sur le deploy d'hier 18h25 (academy-v2.vercel.app frozen sur jaxd5o9qa)
40. **"Mais Putin évidemment que t'as Whisper"** · utiliser faster-whisper pour transcription vocale
41. **"Essayez ce projet"** · regarder le code source de opexia-qcm (le landing statique) au cas où la plateforme serait dedans
42. **"Donne moi les accès à cette plateforme"** · re-demande des creds après rollback
43. **"Les formations ont disparu"** · /lessons affichait "Aucun module disponible" après rollback → fixé via recréation tables Quiz vides + migration tiers DB
44. **"Sauvegarde-moi tout ça"** · création du CHANGELOG-16-MAI-2026.md
45. **"Fais-moi une note intégrale de ce qu'on a fait depuis ce matin"** · déjà fait
46. **"Liste les demandes que je t'ai faites ce matin"** · CE document

---

## 💬 Style de communication exigé

47. **Ne pas dire "—"** (em-dash) · fait trop ChatGPT/fake
48. **Pas de pavés** · réponses concises
49. **Pas d'asterisks Telegram** autour des URLs
50. **Ergonomie > tout** · épure max sur chaque écran
51. **Marius garde sa vraie mémoire** dans `~/Desktop/Claude_Memory.md` (Windows) · à lire et màj à chaque session

---

## ⏱️ Timeline approximative

| Heure | Action principale |
|---|---|
| ~08h | "Ça va ?" + recap des 5 fix-agents perdus de la session précédente |
| ~10h-12h | MVP gating, refacto tiers Standard/Lifetime/Accompagnement, drop Quiz/CoachingSession |
| ~12h-14h | Cyan rebrand (591 substitutions), perf leçons, sécurité, /api/progress fix |
| ~14h | Dark mode default, auth pages dark cyan |
| ~14h30 | Confusion projets → rollback sur 9ctkyyjul |
| ~15h | Disable git auto-deploy main, recréation tables Quiz vides |
| ~15h30 | Reset mot de passe, vérification formation visible |
| ~16h | Récap des changements + cette liste |

---

*Document généré le 16 mai 2026 ~16h30 sur demande de Marius pour avoir la trace de chaque demande de la journée.*
