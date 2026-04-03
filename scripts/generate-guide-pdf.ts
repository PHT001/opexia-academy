import puppeteer from "puppeteer";
import path from "path";

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    color: #1a1a2e;
    line-height: 1.7;
    font-size: 11pt;
  }

  .cover {
    height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px;
    page-break-after: always;
  }
  .cover-badge {
    background: #FF1744;
    color: white;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 8px 24px;
    border-radius: 50px;
    margin-bottom: 40px;
  }
  .cover h1 {
    color: white;
    font-size: 38pt;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .cover h1 span { color: #FF1744; }
  .cover p {
    color: #9CA3AF;
    font-size: 14pt;
    max-width: 500px;
    margin-bottom: 40px;
  }
  .cover-footer {
    color: #6B7280;
    font-size: 10pt;
  }
  .cover-footer strong { color: white; }

  .page {
    padding: 50px 55px;
    page-break-after: always;
  }
  .page:last-child { page-break-after: avoid; }

  h2 {
    font-size: 22pt;
    font-weight: 800;
    margin-bottom: 6px;
    color: #1a1a2e;
  }
  h2 .num {
    color: #FF1744;
    font-size: 14pt;
    font-weight: 700;
    display: block;
    margin-bottom: 4px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 13pt;
    font-weight: 700;
    margin-top: 22px;
    margin-bottom: 8px;
    color: #1a1a2e;
  }
  p, li { color: #374151; margin-bottom: 6px; }

  .subtitle {
    color: #6B7280;
    font-size: 11pt;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #F3F4F6;
  }

  .tag {
    display: inline-block;
    background: #FEF2F2;
    color: #FF1744;
    font-size: 9pt;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 16px;
  }
  .price-tag {
    display: inline-block;
    background: #1a1a2e;
    color: white;
    font-size: 14pt;
    font-weight: 800;
    padding: 8px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  ul { padding-left: 20px; margin-bottom: 14px; }
  li { margin-bottom: 4px; }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0 20px;
    font-size: 10pt;
  }
  th {
    background: #1a1a2e;
    color: white;
    padding: 10px 14px;
    text-align: left;
    font-weight: 600;
    font-size: 9pt;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  td {
    padding: 9px 14px;
    border-bottom: 1px solid #E5E7EB;
    color: #374151;
  }
  tr:nth-child(even) td { background: #F9FAFB; }

  .pitch-box {
    background: #F9FAFB;
    border-left: 4px solid #FF1744;
    padding: 14px 18px;
    margin: 16px 0 20px;
    font-style: italic;
    color: #374151;
    font-size: 10.5pt;
  }

  .tip-box {
    background: #1a1a2e;
    color: white;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 20px 0;
  }
  .tip-box p { color: #E5E7EB; }
  .tip-box strong { color: #FF1744; }

  .calc-table td:last-child { font-weight: 700; text-align: right; }
  .calc-table tr:last-child td {
    background: #FF1744;
    color: white;
    font-weight: 800;
    font-size: 12pt;
  }

  .cta-page {
    height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px;
  }
  .cta-page h2 { color: white; font-size: 26pt; margin-bottom: 16px; }
  .cta-page p { color: #9CA3AF; font-size: 12pt; max-width: 440px; margin-bottom: 30px; }
  .cta-btn {
    background: #FF1744;
    color: white;
    font-size: 13pt;
    font-weight: 700;
    padding: 16px 40px;
    border-radius: 10px;
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
  }
  .cta-page .small { color: #6B7280; font-size: 10pt; }
</style>
</head>
<body>

<!-- COVER -->
<div class="cover">
  <div class="cover-badge">Guide gratuit 2026</div>
  <h1>Les <span>5</span> services IA<br/>les plus demandés</h1>
  <p>Les prix, les outils, et comment décrocher tes premiers clients — même en partant de zéro.</p>
  <div class="cover-footer">Par <strong>Marius</strong> · Fondateur d'<strong>OpexIA</strong></div>
</div>

<!-- INTRO -->
<div class="page">
  <h2><span class="num">Introduction</span>Pourquoi ce guide ?</h2>
  <p class="subtitle">Le marché de l'IA est vierge. Voici comment t'y positionner.</p>

  <p>Le marché de l'IA explose. Moins de <strong>3% des PME européennes</strong> ont adopté de vraies automatisations IA. Le marché est vierge, et les entreprises cherchent désespérément des prestataires capables de les accompagner.</p>

  <p>Ce guide te donne les <strong>5 services concrets</strong> que tu peux vendre aux PME dès aujourd'hui, avec :</p>
  <ul>
    <li>Les <strong>fourchettes de prix</strong> pratiquées sur le marché</li>
    <li>Les <strong>outils concrets</strong> pour délivrer chaque service</li>
    <li>Des <strong>exemples facturables</strong> avec niveaux de complexité</li>
    <li>Un <strong>pitch prêt à l'emploi</strong> pour chaque service</li>
    <li>La <strong>méthode en 5 étapes</strong> pour décrocher tes premiers clients</li>
  </ul>

  <div class="tip-box">
    <p><strong>Le calcul est simple :</strong> un chatbot se facture 800-2 500€, une automatisation 500-2 000€, un agent IA 1 500-5 000€. Avec 3 à 5 clients par mois, tu dépasses les 10 000€/mois.</p>
  </div>
</div>

<!-- SERVICE 1 -->
<div class="page">
  <div class="tag">Le plus demandé</div>
  <h2><span class="num">Service n°1</span>Chatbots IA</h2>
  <div class="price-tag">800 – 2 500€ / projet</div>

  <h3>Ce que tu vends</h3>
  <p>Un chatbot intelligent intégré au site web du client (ou WhatsApp, Instagram, Messenger). Il répond aux questions 24/7, qualifie les leads, prend des rendez-vous, et redirige vers un humain si nécessaire.</p>

  <h3>Pourquoi les PME en veulent</h3>
  <ul>
    <li>Elles perdent des clients la nuit et le week-end</li>
    <li>Le support client coûte cher en salaires</li>
    <li>Les visiteurs quittent le site sans réponse → vente perdue</li>
  </ul>

  <h3>Les outils</h3>
  <ul>
    <li><strong>Voiceflow</strong> ou <strong>Botpress</strong> → création du chatbot (no-code)</li>
    <li><strong>OpenAI API</strong> ou <strong>Claude API</strong> → intelligence conversationnelle</li>
    <li><strong>n8n</strong> → connexion avec le CRM, emails, Slack</li>
    <li><strong>Crisp</strong> ou <strong>Intercom</strong> → widget de chat</li>
  </ul>

  <h3>Grille tarifaire</h3>
  <table>
    <tr><th>Complexité</th><th>Prix</th><th>Exemple</th></tr>
    <tr><td>Basique (FAQ + prise de RDV)</td><td>800 – 1 200€</td><td>Restaurant, cabinet médical</td></tr>
    <tr><td>Intermédiaire (qualification leads)</td><td>1 200 – 1 800€</td><td>Agence immobilière, e-commerce</td></tr>
    <tr><td>Avancé (multi-canal + CRM)</td><td>1 800 – 2 500€</td><td>SaaS, cabinet de conseil</td></tr>
  </table>

  <div class="pitch-box">
    "Je crée un assistant IA qui répond à vos clients 24/7, qualifie vos prospects et prend des rendez-vous — sans embaucher."
  </div>
</div>

<!-- SERVICE 2 -->
<div class="page">
  <div class="tag">ROI immédiat</div>
  <h2><span class="num">Service n°2</span>Automatisations business</h2>
  <div class="price-tag">500 – 2 000€ / projet</div>

  <h3>Ce que tu vends</h3>
  <p>Tu automatises les tâches répétitives : facturation, relances, reporting, onboarding, suivi des commandes. Ce qui prenait 10h/semaine prend maintenant 0.</p>

  <h3>Pourquoi les PME en veulent</h3>
  <ul>
    <li>Elles perdent des heures sur des tâches à zéro valeur ajoutée</li>
    <li>Les erreurs humaines leur coûtent de l'argent</li>
    <li>Elles savent que l'IA peut les aider, mais ne savent pas comment</li>
  </ul>

  <h3>Les outils</h3>
  <ul>
    <li><strong>n8n</strong> (self-hosted) ou <strong>Make</strong> → workflows</li>
    <li><strong>Airtable</strong> ou <strong>Google Sheets</strong> → base de données</li>
    <li><strong>Resend</strong> ou <strong>Brevo</strong> → emails automatiques</li>
    <li><strong>Stripe API</strong> → facturation et paiements</li>
  </ul>

  <h3>Exemples facturables</h3>
  <table>
    <tr><th>Automatisation</th><th>Temps économisé</th><th>Prix</th></tr>
    <tr><td>Relances factures impayées</td><td>5h/semaine</td><td>500 – 800€</td></tr>
    <tr><td>Onboarding nouveaux clients</td><td>3h/client</td><td>800 – 1 200€</td></tr>
    <tr><td>Reporting hebdo automatique</td><td>4h/semaine</td><td>600 – 1 000€</td></tr>
    <tr><td>Pipeline commercial automatisé</td><td>8h/semaine</td><td>1 200 – 2 000€</td></tr>
  </table>

  <div class="pitch-box">
    "J'automatise vos tâches répétitives pour que votre équipe se concentre sur ce qui rapporte vraiment."
  </div>
</div>

<!-- SERVICE 3 -->
<div class="page">
  <div class="tag">Haut de gamme</div>
  <h2><span class="num">Service n°3</span>Agents IA autonomes</h2>
  <div class="price-tag">1 500 – 5 000€ / projet</div>

  <h3>Ce que tu vends</h3>
  <p>Un agent IA qui travaille en autonomie : veille concurrentielle, prospection LinkedIn, analyse de données, gestion du support technique — 24h/24, 7j/7.</p>

  <h3>Pourquoi les PME en veulent</h3>
  <ul>
    <li>Elles veulent un "employé virtuel" qui ne dort jamais</li>
    <li>La veille concurrentielle prend un temps fou</li>
    <li>La prospection manuelle est épuisante et peu efficace</li>
  </ul>

  <h3>Les outils</h3>
  <ul>
    <li><strong>Claude API</strong> ou <strong>OpenAI Assistants</strong> → cerveau de l'agent</li>
    <li><strong>n8n</strong> → orchestration des tâches</li>
    <li><strong>Apify</strong> ou <strong>Bright Data</strong> → scraping web</li>
    <li><strong>Supabase</strong> → stockage des données</li>
  </ul>

  <h3>Exemples facturables</h3>
  <table>
    <tr><th>Agent</th><th>Ce qu'il fait</th><th>Prix</th></tr>
    <tr><td>Veille concurrentielle</td><td>Surveille 10 concurrents, rapport hebdo</td><td>1 500 – 2 500€</td></tr>
    <tr><td>Prospection LinkedIn</td><td>Identifie + contacte les prospects</td><td>2 000 – 3 500€</td></tr>
    <tr><td>Analyse de données</td><td>Analyse ventes/stocks, alerte anomalies</td><td>2 500 – 4 000€</td></tr>
    <tr><td>Support technique L1</td><td>Résout les tickets simples en autonomie</td><td>3 000 – 5 000€</td></tr>
  </table>

  <div class="pitch-box">
    "Je crée un agent IA qui travaille pour vous 24/7 — veille, prospection, analyse — pendant que votre équipe se concentre sur le terrain."
  </div>
</div>

<!-- SERVICE 4 -->
<div class="page">
  <div class="tag">Forte demande</div>
  <h2><span class="num">Service n°4</span>CRM & Pipelines sur mesure</h2>
  <div class="price-tag">1 000 – 3 000€ / projet</div>

  <h3>Ce que tu vends</h3>
  <p>Un système complet pour suivre prospects, ventes et clients — avec automatisations intégrées. Fini les fichiers Excel et les prospects oubliés.</p>

  <h3>Pourquoi les PME en veulent</h3>
  <ul>
    <li>65% des PME gèrent encore leurs clients sur Excel</li>
    <li>Elles perdent des ventes par manque de suivi</li>
    <li>Les CRM du marché (Salesforce, HubSpot) sont trop chers ou complexes</li>
  </ul>

  <h3>Les outils</h3>
  <ul>
    <li><strong>Airtable</strong> ou <strong>Notion</strong> → CRM léger et visuel</li>
    <li><strong>Supabase + Next.js</strong> → CRM custom (plus premium)</li>
    <li><strong>n8n</strong> → automatisation du pipeline</li>
    <li><strong>Cal.com</strong> → prise de rendez-vous intégrée</li>
  </ul>

  <h3>Ce que tu livres</h3>
  <table>
    <tr><th>Composant</th><th>Détail</th></tr>
    <tr><td>Pipeline visuel</td><td>Vue Kanban : Lead → Contact → Proposition → Signé</td></tr>
    <tr><td>Scoring automatique</td><td>Points selon les actions du prospect</td></tr>
    <tr><td>Relances auto</td><td>Emails à J+1, J+3, J+7 si pas de réponse</td></tr>
    <tr><td>Dashboard</td><td>CA, taux de conversion, prévisions</td></tr>
  </table>

  <div class="pitch-box">
    "Je construis votre CRM sur mesure avec des automatisations intégrées — vous ne perdez plus jamais un prospect."
  </div>
</div>

<!-- SERVICE 5 -->
<div class="page">
  <div class="tag">Récurrent</div>
  <h2><span class="num">Service n°5</span>Génération de contenu IA</h2>
  <div class="price-tag">500 – 1 500€ / mois</div>

  <h3>Ce que tu vends</h3>
  <p>Un système qui génère du contenu pour le client : posts LinkedIn, articles, newsletters, fiches produit. L'IA rédige, le client valide, toi tu gères le système.</p>

  <h3>Pourquoi les PME en veulent</h3>
  <ul>
    <li>Elles savent qu'il faut publier, mais n'ont ni le temps ni les idées</li>
    <li>Un community manager coûte 2 000-4 000€/mois</li>
    <li>L'IA produit du contenu de qualité à une fraction du coût</li>
  </ul>

  <h3>Les outils</h3>
  <ul>
    <li><strong>Claude</strong> ou <strong>GPT-4</strong> → rédaction</li>
    <li><strong>n8n</strong> → workflow automatisé</li>
    <li><strong>Buffer</strong> ou <strong>Hootsuite</strong> → programmation réseaux</li>
    <li><strong>Canva API</strong> ou <strong>Midjourney</strong> → visuels</li>
  </ul>

  <h3>Offres types</h3>
  <table>
    <tr><th>Formule</th><th>Inclus</th><th>Prix/mois</th></tr>
    <tr><td>Essentiel</td><td>12 posts LinkedIn + 2 articles/mois</td><td>500 – 800€</td></tr>
    <tr><td>Pro</td><td>20 posts + 4 articles + newsletter</td><td>800 – 1 200€</td></tr>
    <tr><td>Premium</td><td>Tout + stratégie éditoriale + visuels IA</td><td>1 200 – 1 500€</td></tr>
  </table>

  <div class="tip-box">
    <p><strong>Le gros avantage :</strong> c'est un service récurrent. Le client paye chaque mois. 5 clients à 800€/mois = 4 000€ de revenus récurrents.</p>
  </div>

  <div class="pitch-box">
    "Je mets en place un système IA qui génère votre contenu marketing chaque semaine — pour 10x moins cher qu'un freelance."
  </div>
</div>

<!-- METHODE -->
<div class="page">
  <h2><span class="num">La méthode</span>Comment décrocher tes premiers clients</h2>
  <p class="subtitle">5 étapes pour passer de zéro à tes premiers revenus.</p>

  <h3>1. Choisis ton service de départ</h3>
  <p>Ne vends pas tout en même temps. Choisis <strong>1 service</strong> — on recommande les chatbots ou les automatisations pour commencer — et deviens excellent dessus.</p>

  <h3>2. Crée un portfolio de démo</h3>
  <p>Construis <strong>2-3 exemples concrets</strong> que tu peux montrer. Même fictifs au début. Un chatbot pour un restaurant, une automatisation pour un coach — ça suffit pour convaincre.</p>

  <h3>3. Prospecte les PME</h3>
  <p>Les PME autour de toi ne savent pas que ces services existent. 3 canaux qui marchent :</p>
  <ul>
    <li><strong>LinkedIn</strong> — Publie du contenu sur l'IA, contacte les dirigeants en DM</li>
    <li><strong>Cold email</strong> — Emails personnalisés (Apollo.io, Hunter.io)</li>
    <li><strong>Réseau local</strong> — Chambre de commerce, événements business</li>
  </ul>

  <h3>4. Vends le résultat, pas l'outil</h3>
  <p>Le client s'en fiche de n8n ou Claude. Il veut savoir : combien de temps il va gagner, combien d'argent il va économiser, et en combien de temps c'est mis en place.</p>

  <h3>5. Facture et livre</h3>
  <ul>
    <li>50% à la commande, 50% à la livraison</li>
    <li>Livre en 1-2 semaines max</li>
    <li>30 jours de support inclus</li>
    <li>Propose un forfait maintenance mensuel (revenu récurrent)</li>
  </ul>

  <h3>Le calcul</h3>
  <table class="calc-table">
    <tr><th></th><th>Bas</th><th>Haut</th></tr>
    <tr><td>Clients / mois</td><td>3</td><td>5</td></tr>
    <tr><td>Prix moyen / projet</td><td>1 500€</td><td>3 000€</td></tr>
    <tr><td>Revenu mensuel</td><td>4 500€</td><td>15 000€</td></tr>
  </table>
</div>

<!-- CTA -->
<div class="cta-page">
  <h2>Prêt à lancer<br/>ton agence IA ?</h2>
  <p>Ce guide te donne la vue d'ensemble. La formation OpexIA Academy te donne le mode d'emploi complet : 85 leçons, coaching, CRM, templates, communauté.</p>
  <a href="https://www.opexia-formation.com/offres" class="cta-btn">Découvrir la formation</a>
  <div class="small">opexia-formation.com/offres</div>
</div>

</body>
</html>`;

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const outputPath = path.join(process.cwd(), "public", "guide-5-services-ia.pdf");

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`PDF generated: ${outputPath}`);
}

main().catch(console.error);
