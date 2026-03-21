# 🎯 OpexIA Academy — Trame de Formation Complète

> Objectif : Emmener un débutant complet jusqu'à la création et le scaling d'une agence IA rentable à 10K€/mois+
> Outil principal : Claude Code | Alternatives mentionnées : Cursor, Antigravity
> Stack : Supabase, Vercel, Stripe, Make/n8n

---

## ARCHITECTURE GLOBALE

```
STARTER (49€) → Module 1 uniquement
ACADEMY (397€) → Modules 1 à 18
ONE-TO-ONE (3997€) → Modules 1 à 18 + Coaching personnalisé
```

### Organisation en 6 phases (18 modules)

| Phase | Nom | Modules | Durée estimée |
|-------|-----|---------|---------------|
| 1 | **Fondations** | M1 | 1 semaine |
| 2 | **Développeur IA** | M2 → M5 | 2 semaines |
| 3 | **Architecte Solutions** | M6 → M9 | 2 semaines |
| 4 | **Sécurité & Production** | M10 → M11 | 1 semaine |
| 5 | **Entrepreneur** | M12 → M15 | 2 semaines |
| 6 | **Scale & Mastery** | M16 → M18 | 2 semaines |

**Durée totale : ~10 semaines**

---

## PHASE 1 — FONDATIONS (Starter)

### Module 1 : Découvrir l'IA et poser les bases
> *Le seul module accessible avec le Pack Starter (49€)*
> *Objectif : Comprendre l'écosystème IA, installer ses outils, créer son premier agent*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 1.1 | **L'IA en 2025 : comprendre le marché** | 15 min | Où en est l'IA, pourquoi c'est le moment, le marché des agences IA (chiffres concrets), les types de missions possibles. Montrer le potentiel de revenus réaliste. |
| 1.2 | **Les modèles IA : Claude, GPT, Gemini** | 20 min | Différences entre les modèles, pourquoi on utilise Claude (contexte, raisonnement, code). Comparaison objective sans dénigrer. Expliquer les tokens, les fenêtres de contexte. |
| 1.3 | **L'écosystème d'outils : Claude Code, Cursor, Antigravity** | 20 min | Présentation des 3 outils. Expliquer qu'on utilisera Claude Code dans la formation mais que tout est transposable. Installer Claude Code pas à pas. |
| 1.4 | **Ton premier projet avec Claude Code** | 30 min | Créer un projet from scratch : init, structure de fichiers, premiers fichiers. Créer une landing page simple. Comprendre le workflow terminal → code → résultat. |
| 1.5 | **Le Prompt Engineering : les fondamentaux** | 25 min | Comment parler à l'IA pour obtenir exactement ce qu'on veut. Les techniques de base : contexte, exemples, contraintes. Les erreurs de débutant. Exercices pratiques. |
| 1.6 | **Créer ton premier agent IA simple** | 30 min | Construire un agent conversationnel basique qui répond à des questions sur un sujet. Comprendre le concept d'agent vs chatbot. Premier déploiement local. |
| 1.7 | **Et maintenant ? La suite de ton parcours** | 10 min | Récap de ce qu'on a appris. Teaser des modules suivants. Montrer ce que les élèves Academy arrivent à construire. Call-to-action vers Academy. |

**Quiz de fin de module** — 10 questions (80% pour valider)

> 💡 **Transition vers Phase 2** : "Tu sais maintenant utiliser Claude Code et créer un agent simple. Dans la Phase 2, tu vas apprendre à construire de vrais produits pour des clients."

---

## PHASE 2 — DÉVELOPPEUR IA

### Module 2 : Prompt Engineering avancé
> *Objectif : Maîtriser l'art du prompting pour produire du code de qualité professionnelle*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 2.1 | **Les system prompts : donner une personnalité à l'IA** | 20 min | Comment structurer un system prompt pro. Templates réutilisables. Le rôle du contexte dans la qualité du output. |
| 2.2 | **Techniques avancées : Chain of Thought, Few-Shot, Tree of Thought** | 25 min | Les méthodes de prompting qui changent tout. Quand utiliser quoi. Exemples concrets sur du code. |
| 2.3 | **Le fichier CLAUDE.md : ton arme secrète** | 20 min | Comment créer et maintenir un fichier de contexte projet. Les conventions, les règles, la stack. Pourquoi ça multiplie ta productivité. |
| 2.4 | **Debugger avec l'IA : méthodologie** | 20 min | Comment décrire un bug à l'IA. Les techniques de diagnostic. Lire les erreurs, fournir le contexte. Ne pas tomber dans la boucle infinie de fix. |
| 2.5 | **Atelier : refactoriser un projet entier avec Claude Code** | 30 min | Prendre un projet mal codé et le transformer. Apprendre à donner des instructions de refactoring précises. |

> 💡 **Transition** : "Tu maîtrises maintenant le prompting. Place au développement web concret."

---

### Module 3 : Créer des sites web professionnels
> *Objectif : Savoir livrer un site web complet à un client*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 3.1 | **Next.js + React : les fondamentaux** | 25 min | Pourquoi Next.js, comment ça marche (pages, composants, routing). Créer un projet Next.js avec Claude Code. |
| 3.2 | **Tailwind CSS : le design sans souffrir** | 20 min | Les bases de Tailwind, les classes utilitaires, le responsive. Comment demander à Claude Code un design précis. |
| 3.3 | **Construire une landing page qui convertit** | 30 min | Les sections essentielles (hero, social proof, features, pricing, CTA). Les principes de copywriting. Atelier complet. |
| 3.4 | **Site vitrine multi-pages : portfolio, à propos, contact** | 25 min | Navigation, layouts réutilisables, formulaire de contact. Bonnes pratiques UX/UI. |
| 3.5 | **SEO et performance : les bases qui comptent** | 20 min | Metadata, Open Graph, sitemap, lighthouse. Les optimisations que les clients attendent. |
| 3.6 | **Déployer sur Vercel : du code au site en ligne** | 20 min | Git → GitHub → Vercel. Domaine custom. Variables d'environnement. CI/CD automatique. |

> 💡 **Transition** : "Tu sais créer des sites. Maintenant, on va leur donner un cerveau avec un backend."

---

### Module 4 : Backend & Supabase — Les fondations
> *Objectif : Comprendre et maîtriser Supabase pour tous tes projets*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 4.1 | **Qu'est-ce qu'un backend ? Architecture client/serveur** | 15 min | Les concepts fondamentaux : API, base de données, serveur. Pourquoi Supabase est parfait pour les agences IA. |
| 4.2 | **Supabase : créer ton premier projet** | 20 min | Dashboard Supabase, créer un projet, comprendre l'interface. Les différentes sections (Database, Auth, Storage, Edge Functions). |
| 4.3 | **Modéliser une base de données : tables et relations** | 25 min | Les types de données, clés primaires/étrangères, relations (1-1, 1-N, N-N). Concevoir un schéma propre. Exercice : modéliser un CRM. |
| 4.4 | **CRUD complet : créer, lire, modifier, supprimer** | 25 min | Les opérations de base avec le client Supabase en JS. Select, insert, update, delete. Filtres et tri. |
| 4.5 | **Authentification : login, signup, sessions** | 25 min | Supabase Auth, les providers (email, Google, GitHub). Protéger des pages. Gérer les sessions côté client. |
| 4.6 | **Stocker des fichiers : Supabase Storage** | 20 min | Upload d'images, PDF, fichiers. Buckets publics vs privés. Générer des URLs signées. |

> 💡 **Transition** : "Ta base est solide. On passe aux intégrations qui vont faire la différence."

---

### Module 5 : APIs, Intégrations & Paiements
> *Objectif : Connecter des services entre eux et intégrer Stripe*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 5.1 | **Les APIs : comprendre et consommer** | 20 min | REST vs GraphQL, les méthodes HTTP, les headers, l'authentification API. Tester avec Postman/Thunder Client. |
| 5.2 | **Créer tes propres API Routes avec Next.js** | 25 min | Route handlers, middleware, validation des données. Structurer ses endpoints proprement. |
| 5.3 | **L'API Claude : intégrer l'IA dans tes projets** | 25 min | API Anthropic, streaming, system prompts via API. Construire un endpoint IA pour tes clients. Gérer les coûts. |
| 5.4 | **Stripe : accepter des paiements** | 25 min | Créer un compte Stripe, intégrer Checkout, gérer les abonnements. Webhooks Stripe pour synchroniser avec Supabase. |
| 5.5 | **Les Webhooks : faire communiquer les services** | 20 min | Concept de webhook, sécuriser un webhook (signature), traiter les événements asynchrones. |
| 5.6 | **Atelier : SaaS complet avec auth + paiement + dashboard** | 35 min | Construire un mini-SaaS de A à Z. L'élève repart avec un template réutilisable pour ses clients. |

> 💡 **Transition** : "Tu sais construire des apps complètes. On va maintenant automatiser et ajouter de l'intelligence."

---

## PHASE 3 — ARCHITECTE SOLUTIONS

### Module 6 : Automatisations & Workflows
> *Objectif : Créer des automatisations qui font gagner du temps et de l'argent aux clients*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 6.1 | **L'automatisation : le service le plus rentable** | 15 min | Pourquoi les entreprises payent cher pour ça. Les cas d'usage les plus demandés. Comment pricer ce service. |
| 6.2 | **Make (ex-Integromat) : les bases** | 25 min | Créer un compte, comprendre les scénarios, les modules, les connections. Premier workflow automatisé. |
| 6.3 | **n8n : l'alternative self-hosted** | 25 min | Installation, interface, nodes. Quand choisir n8n vs Make. Avantages du self-hosted pour les clients sensibles. |
| 6.4 | **Automatiser avec l'IA : le combo gagnant** | 25 min | Intégrer Claude dans Make/n8n. Traitement automatique d'emails, classification de leads, génération de contenu. |
| 6.5 | **Connecter Supabase aux automatisations** | 20 min | Triggers database → workflow. Synchronisation de données. Mise à jour automatique de CRM. |
| 6.6 | **Atelier : système de lead nurturing automatisé** | 30 min | Construire un pipeline complet : formulaire → Supabase → IA analyse le lead → email personnalisé → notification Slack. |

> 💡 **Transition** : "Les automatisations sont en place. On va maintenant créer des chatbots intelligents."

---

### Module 7 : Chatbots IA professionnels
> *Objectif : Construire et déployer des chatbots pour des entreprises*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 7.1 | **Anatomie d'un bon chatbot** | 15 min | Ce qui fait la différence entre un chatbot nul et un chatbot qui convertit. Les erreurs à éviter. Les attentes des clients. |
| 7.2 | **RAG : donner de la mémoire à ton chatbot** | 25 min | Retrieval Augmented Generation. Embeddings, vector store, chunks. Pourquoi c'est indispensable. |
| 7.3 | **Construire un chatbot RAG avec Supabase pgvector** | 30 min | Activer pgvector, créer les embeddings, stocker dans Supabase, requêtes de similarité. Tout en code avec Claude Code. |
| 7.4 | **Interface chat : UX/UI professionnelle** | 25 min | Streaming des réponses, indicateurs de typing, historique de conversation, design responsive. |
| 7.5 | **Widget embarquable : intégrer sur n'importe quel site** | 25 min | Créer un widget iframe/script. Le client copie-colle une ligne sur son site. Personnalisation (couleurs, position, avatar). |
| 7.6 | **Analytics et amélioration continue** | 20 min | Tracker les conversations, identifier les questions sans réponse, améliorer la base de connaissances. Dashboard d'analytics pour le client. |

> 💡 **Transition** : "Tes chatbots sont intelligents. On passe au niveau supérieur : les agents autonomes."

---

### Module 8 : Agents IA autonomes
> *Objectif : Créer des agents qui exécutent des tâches complexes de manière autonome*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 8.1 | **Agent vs Chatbot : comprendre la différence** | 15 min | Un chatbot répond, un agent agit. Les capacités d'un agent (tool use, décision, multi-step). Le Claude Agent SDK. |
| 8.2 | **Tool Use : donner des outils à l'IA** | 25 min | Function calling avec Claude. Définir des tools, gérer les réponses. L'IA qui décide quand utiliser quel outil. |
| 8.3 | **Construire un agent de recherche** | 25 min | Agent qui peut chercher sur le web, analyser des documents, synthétiser et produire un rapport. |
| 8.4 | **Agent multi-step : chaîner les actions** | 25 min | Orchestration de tâches complexes. Gestion des erreurs. Boucles de feedback. L'agent qui se corrige tout seul. |
| 8.5 | **MCP (Model Context Protocol) : connecter l'IA au monde** | 25 min | Qu'est-ce que MCP, les serveurs MCP existants, créer son propre serveur MCP. Connecter Claude à n'importe quel service. |
| 8.6 | **Atelier : agent IA complet pour une entreprise** | 35 min | Construire un agent qui analyse les emails d'un client, classifie par priorité, rédige des brouillons de réponse, et met à jour le CRM. |

> 💡 **Transition** : "Tu sais tout construire. Avant de livrer à des clients, on va sécuriser tout ça."

---

### Module 9 : Construire un MVP rapidement
> *Objectif : Méthodologie pour construire un produit minimum viable en un week-end*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 9.1 | **La méthode MVP : construire vite, apprendre vite** | 15 min | Lean Startup appliqué aux agences IA. Pourquoi un MVP de 2 jours vaut mieux qu'un produit de 2 mois. |
| 9.2 | **Le template ultime : Next.js + Supabase + Stripe** | 25 min | Un boilerplate réutilisable pour tous tes projets clients. Auth, dashboard, paiement, tout est prêt. |
| 9.3 | **Sprint de 48h : planifier son MVP** | 20 min | Comment découper un projet en fonctionnalités essentielles. La matrice effort/impact. Le piège du perfectionnisme. |
| 9.4 | **Atelier : construire un SaaS complet en live** | 40 min | De zéro au déploiement. Un vrai produit fonctionnel. L'élève suit en même temps et repart avec son SaaS. |
| 9.5 | **Itérer : les retours utilisateurs** | 15 min | Comment récolter du feedback, prioriser les améliorations, la boucle Build → Measure → Learn. |

> 💡 **Transition** : "Tu sais construire vite. Maintenant, on va s'assurer que tout est blindé côté sécurité."

---

## PHASE 4 — SÉCURITÉ & PRODUCTION

### Module 10 : Sécurité Supabase & bonnes pratiques
> *Objectif : Sécuriser tes applications avant de les livrer*
> ⚠️ Module critique — Ne JAMAIS livrer un projet sans avoir appliqué ces principes

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 10.1 | **Les failles de sécurité les plus courantes** | 20 min | Injection SQL, XSS, CSRF, exposition de clés API. Les erreurs que 90% des débutants font. Exemples concrets de hacks. |
| 10.2 | **Row Level Security (RLS) : le bouclier Supabase** | 25 min | Comprendre RLS en profondeur. Écrire des policies. Tester qu'elles fonctionnent. Les pièges classiques (policy trop permissive). |
| 10.3 | **Sécuriser les API Routes** | 20 min | Validation des inputs (Zod), rate limiting, authentication côté serveur. Ne jamais faire confiance au client. |
| 10.4 | **Gestion des secrets et variables d'environnement** | 15 min | .env.local, Vercel env vars, ne jamais commit de secrets. Rotation de clés. Différence entre NEXT_PUBLIC_ et variables serveur. |
| 10.5 | **RGPD et protection des données** | 20 min | Ce que la loi impose. Consentement, droit à l'effacement, registre des traitements. Les mentions légales obligatoires. Comment rendre ton app conforme. |
| 10.6 | **Checklist sécurité avant mise en production** | 15 min | La checklist complète à suivre avant chaque livraison client. Headers de sécurité, HTTPS, CSP, audit des dépendances. |
| 10.7 | **Atelier : audit de sécurité d'un projet** | 25 min | Prendre un projet volontairement vulnérable et le sécuriser étape par étape. L'élève applique tout ce qu'il a appris. |

> 💡 **Transition** : "Ton code est sécurisé. On va maintenant apprendre à gérer la production comme un pro."

---

### Module 11 : DevOps & Monitoring en production
> *Objectif : Savoir gérer, monitorer et maintenir un projet en production*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 11.1 | **Git avancé pour les projets clients** | 20 min | Branches, pull requests, code review. Workflow Git professionnel. Comment gérer les modifications clients sans casser la prod. |
| 11.2 | **CI/CD : déploiement automatique** | 20 min | GitHub Actions, tests automatisés, preview deployments Vercel. Zéro stress au déploiement. |
| 11.3 | **Monitoring et alerting** | 20 min | Sentry pour les erreurs, Vercel Analytics pour les perfs, uptime monitoring. Être prévenu avant le client. |
| 11.4 | **Gérer les incidents : quand ça casse en prod** | 15 min | La méthode pour diagnostiquer et fixer rapidement. Communication avec le client pendant un incident. Post-mortem. |
| 11.5 | **Maintenance et mises à jour** | 15 min | Mettre à jour les dépendances sans tout casser. Les migrations Supabase. Versionner proprement. Comment facturer la maintenance. |

> 💡 **Transition** : "Tu es un développeur IA complet et fiable. Passons au business."

---

## PHASE 5 — ENTREPRENEUR

### Module 12 : Créer ton offre irrésistible
> *Objectif : Structurer une offre claire qui se vend facilement*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 12.1 | **Le mindset shift : de technicien à entrepreneur** | 15 min | Tu ne vends pas du code, tu vends de la valeur. Comment penser en termes de ROI client. Les pièges du freelance classique. |
| 12.2 | **Identifier ta niche : où est l'argent ?** | 20 min | Les secteurs qui payent le plus pour l'IA. Comment choisir sa spécialisation. Analyse de marché concrète. |
| 12.3 | **Structurer tes offres : Starter, Pro, Premium** | 25 min | Le framework des 3 offres. Comment pricer (value-based vs time-based). Les erreurs de pricing qui tuent. Exemples concrets de grilles tarifaires. |
| 12.4 | **Créer tes livrables types** | 20 min | Templates de propositions commerciales, cahiers des charges, maquettes. Ce que le client reçoit à chaque étape. |
| 12.5 | **Le positionnement : pourquoi toi et pas un autre** | 15 min | Ton personal branding, ton portfolio, tes cas d'étude. Comment te différencier des milliers de "freelances IA". |
| 12.6 | **Ton site vitrine d'agence** | 25 min | Construire le site de ton agence avec Claude Code. Les pages essentielles, le portfolio, les témoignages, le formulaire de contact. |

> 💡 **Transition** : "Ton offre est prête. Maintenant, il faut trouver des clients."

---

### Module 13 : Trouver des clients
> *Objectif : Maîtriser l'acquisition client B2B*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 13.1 | **Les canaux d'acquisition qui marchent en 2025** | 15 min | LinkedIn, cold email, bouche-à-oreille, freelance platforms, partenariats. Où concentrer son énergie au début. |
| 13.2 | **LinkedIn : ta machine à leads** | 25 min | Optimiser son profil, créer du contenu qui attire des clients, la méthode pour 3 posts/semaine sans effort (avec Claude). |
| 13.3 | **Cold email : la méthode qui convertit** | 25 min | Trouver les bons contacts, écrire des emails qui sont lus (pas du spam). Les séquences de follow-up. Les outils (Apollo, Lemlist). |
| 13.4 | **L'appel découverte : closer un client** | 25 min | Le script d'appel, les questions à poser, comment identifier le vrai besoin. La méthode SPIN selling adaptée à l'IA. Gérer les objections. |
| 13.5 | **La proposition commerciale qui ferme le deal** | 20 min | Template de proposition. La structure : problème → solution → résultats attendus → investissement. Comment présenter le prix. |
| 13.6 | **Les partenariats stratégiques** | 15 min | S'associer avec des agences web, des consultants, des ESN. Le système de commission. Construire un réseau de prescripteurs. |
| 13.7 | **Atelier : créer sa machine de prospection** | 25 min | L'élève met en place son système complet : profil LinkedIn, templates d'emails, script d'appel, proposition type. |

> 💡 **Transition** : "Tu as des clients. Maintenant, il faut livrer comme un pro et les garder."

---

### Module 14 : Livrer et fidéliser
> *Objectif : Processus de livraison professionnel et stratégie de rétention*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 14.1 | **L'onboarding client : la première impression** | 20 min | Le questionnaire de démarrage, le kick-off call, le planning projet. Comment rassurer le client dès le début. |
| 14.2 | **Gérer un projet : la méthode agile simplifiée** | 20 min | Sprints d'une semaine, points hebdo avec le client, démo des avancées. Outils : Notion, Linear, ou simple Google Sheet. |
| 14.3 | **La livraison : recette et mise en production** | 20 min | Checklist de livraison, tests avec le client, formation à l'outil, documentation utilisateur. |
| 14.4 | **Transformer un one-shot en récurrent** | 20 min | Les contrats de maintenance, le monitoring, les évolutions mensuelles. Comment passer de 2000€ one-shot à 500€/mois récurrent. |
| 14.5 | **Gérer les clients difficiles** | 15 min | Le scope creep, les retards de paiement, les demandes de dernière minute. Comment dire non diplomatiquement. |
| 14.6 | **Le système de referral** | 15 min | Comment demander des recommandations. Le programme de parrainage. Transformer chaque client satisfait en ambassadeur. |

> 💡 **Transition** : "Tu sais livrer et fidéliser. Protégeons maintenant ton business juridiquement."

---

### Module 15 : Juridique, fiscalité & administration
> *Objectif : Structurer légalement son activité et dormir tranquille*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 15.1 | **Quel statut choisir : auto-entrepreneur, SAS, SASU** | 20 min | Comparatif des statuts, les seuils, les charges. Quel statut à quel moment de ton activité. Le piège de l'auto-entrepreneur quand tu scales. |
| 15.2 | **Créer sa structure : les démarches pas à pas** | 20 min | URSSAF, INPI, les formulaires, le compte bancaire pro. Timeline des démarches. |
| 15.3 | **Les contrats : se protéger légalement** | 25 min | Template de contrat de prestation. CGV. NDA. Les clauses indispensables : périmètre, livrables, délais, paiement, propriété intellectuelle. |
| 15.4 | **La facturation : mentions obligatoires et outils** | 15 min | Les mentions légales sur une facture. Les délais de paiement. Les outils (Pennylane, Tiime). Relancer les impayés. |
| 15.5 | **Fiscalité : optimiser sans risquer** | 20 min | TVA (franchise, collecte), les charges déductibles, la CFE, les déclarations. Quand prendre un comptable. |
| 15.6 | **Assurances et responsabilité** | 15 min | RC Pro : pourquoi c'est obligatoire. Cyber-assurance. Que se passe-t-il si ton code cause un préjudice au client. |
| 15.7 | **L'IA et le droit : ce qu'il faut savoir** | 20 min | EU AI Act, responsabilité des outputs IA, droits d'auteur et IA, les mentions à ajouter dans tes contrats concernant l'IA. |

> 💡 **Transition** : "Ton business est protégé. Dernière phase : scaler."

---

## PHASE 6 — SCALE & MASTERY

### Module 16 : Scaler à 10K€/mois et au-delà
> *Objectif : Passer du freelance solo à une agence rentable*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 16.1 | **La roadmap : de 0 à 10K€/mois** | 20 min | Les paliers réalistes. Mois 1-3 : premiers clients. Mois 3-6 : récurrence. Mois 6-12 : scale. Les metrics à suivre. |
| 16.2 | **Recruter et déléguer** | 20 min | Quand recruter (pas trop tôt). Freelances vs employés. Où trouver des développeurs IA. Comment manager sans micro-manager. |
| 16.3 | **Les process : automatiser ton agence** | 20 min | CRM, facturation automatique, onboarding client automatisé, templates de projet. L'agence qui tourne même quand tu dors. |
| 16.4 | **Diversifier tes revenus** | 20 min | Services + SaaS + formation + affiliation. Comment créer des revenus passifs avec tes compétences. Productiser un service. |
| 16.5 | **Le personal branding avancé** | 20 min | YouTube, newsletter, conférences. Devenir LA référence IA de ta niche. Content marketing B2B. |
| 16.6 | **Étude de cas : agences IA qui réussissent** | 20 min | Analyse de 3-4 agences IA françaises qui font 10K-50K€/mois. Leurs offres, leur positionnement, leurs erreurs. Ce qu'on peut en apprendre. |

> 💡 **Transition** : "Tu as la méthode business. On termine avec les masterclass techniques pour aller encore plus loin."

---

### Module 17 : Masterclass Claude Code
> *Objectif : Maîtrise avancée de Claude Code pour une productivité maximale*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 17.1 | **Configuration avancée et CLAUDE.md pro** | 20 min | Les settings, les hooks, les commandes personnalisées. Un CLAUDE.md qui fait de toi un développeur 10x. |
| 17.2 | **Multi-fichiers et refactoring de gros projets** | 25 min | Comment guider Claude Code sur des projets de 50+ fichiers. Les techniques de context management. |
| 17.3 | **MCP servers : étendre Claude Code** | 25 min | Installer et créer des MCP servers. Connecter Claude Code à Supabase, GitHub, Figma, Slack. |
| 17.4 | **CI/CD et tests avec Claude Code** | 20 min | Écrire des tests automatiquement, configurer les GitHub Actions, le workflow pro complet. |
| 17.5 | **Les workflows multi-agents** | 20 min | Faire collaborer plusieurs instances de Claude. Architecture agent-supervisor. Les cas d'usage avancés. |

---

### Module 18 : Masterclass outils complémentaires
> *Objectif : Savoir utiliser Cursor et Antigravity comme alternatives*

| # | Leçon | Durée | Description |
|---|-------|-------|-------------|
| 18.1 | **Cursor : l'IDE augmenté par l'IA** | 25 min | Installation, configuration, les commandes essentielles. Cmd+K, Tab, Chat. Quand Cursor est plus adapté que Claude Code. |
| 18.2 | **Cursor avancé : Rules, .cursorrules, multi-fichiers** | 25 min | Les fichiers de règles, le contexte projet, les techniques avancées pour maximiser la qualité du code. |
| 18.3 | **Antigravity : le no-code intelligent** | 25 min | Présentation, cas d'usage, quand l'utiliser. Idéal pour des MVPs ultra-rapides ou des clients non-techniques. |
| 18.4 | **Choisir le bon outil selon le projet** | 15 min | Matrice de décision : Claude Code vs Cursor vs Antigravity. Le bon outil au bon moment. Comment les combiner. |
| 18.5 | **Veille techno : rester à jour** | 15 min | Les sources à suivre, les newsletters, les communautés. Comment ne pas se noyer dans les nouveautés. |

---

## RÉSUMÉ GLOBAL

| Phase | Modules | Leçons | Focus |
|-------|---------|--------|-------|
| 1 - Fondations | M1 | 7 | Découverte IA + premier agent |
| 2 - Développeur IA | M2 → M5 | 23 | Prompting + Web + Backend + APIs |
| 3 - Architecte Solutions | M6 → M9 | 23 | Automatisations + Chatbots + Agents + MVP |
| 4 - Sécurité & Production | M10 → M11 | 12 | Sécurité + DevOps |
| 5 - Entrepreneur | M12 → M15 | 26 | Offre + Clients + Livraison + Juridique |
| 6 - Scale & Mastery | M16 → M18 | 16 | Scaling + Masterclass |
| **TOTAL** | **18 modules** | **107 leçons** | **~10 semaines** |

---

## PARCOURS TYPE D'UN ÉLÈVE

```
Semaine 1  → M1 : Il découvre l'IA, installe Claude Code, crée son premier agent
Semaine 2  → M2-M3 : Il maîtrise le prompting et crée des sites web pros
Semaine 3  → M4-M5 : Il comprend Supabase, les APIs, intègre Stripe
Semaine 4  → M6-M7 : Il automatise des workflows et crée des chatbots RAG
Semaine 5  → M8-M9 : Il construit des agents IA autonomes et son premier MVP
Semaine 6  → M10-M11 : Il sécurise tout et met en production proprement
Semaine 7  → M12-M13 : Il crée son offre et trouve ses premiers clients
Semaine 8  → M14-M15 : Il livre, fidélise et se protège juridiquement
Semaine 9  → M16 : Il met en place sa stratégie de scaling
Semaine 10 → M17-M18 : Il perfectionne ses outils et reste à jour
```

---

## ÉLÉMENTS TRANSVERSAUX

### À chaque fin de module :
- ✅ Quiz (10 questions, 80% pour valider)
- 🏗️ Exercice pratique (mini-projet à réaliser)
- 📦 Ressources téléchargeables (templates, checklists, code)
- ➡️ Transition narrative vers le module suivant

### Gamification :
- XP par leçon complétée (50 XP) et quiz réussi (100 XP)
- Badges de progression
- Classement entre élèves
- Streak (jours consécutifs d'apprentissage)

### Support :
- Starter : Accès communauté Discord
- Academy : Communauté + Q&A hebdo en groupe
- One-to-One : Tout + coaching individuel + review de projets
