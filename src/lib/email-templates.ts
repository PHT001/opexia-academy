/**
 * Email templates for post-purchase drip sequence.
 *
 * Sender (configured in calling code):
 *   "Marius d'OpexIA <support@opexia-formation.com>"
 *
 * Each function returns { subject, html }.
 * The actual scheduling of dayOneEmail / dayThreeEmail requires
 * a cron job or external service — these are templates only.
 */

/**
 * "Personal" layout — minimal HTML that looks like a real email from a person.
 * Gmail flags heavy HTML (gradients, buttons, tables) as Promotions.
 * This layout uses plain text styling so emails land in Primary inbox.
 */
function layout(content: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; padding: 20px; color: #1a1a1a; font-size: 15px; line-height: 1.7;">
      ${content}
      <p style="margin-top: 32px; color: #1a1a1a;">
        Marius<br/>
        <span style="color: #6B7280; font-size: 13px;">Fondateur, OpexIA</span>
      </p>
      <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5E7EB; color: #9CA3AF; font-size: 11px;">
        <a href="https://www.opexia-formation.com" style="color: #9CA3AF;">opexia-formation.com</a> · <a href="mailto:support@opexia-formation.com?subject=D%C3%A9sinscription&body=Je%20souhaite%20me%20d%C3%A9sinscrire%20des%20emails." style="color: #9CA3AF;">Se d&eacute;sinscrire</a>
      </p>
    </div>
  `;
}

/**
 * Welcome email — sent immediately after purchase.
 */
export function welcomeEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, ton accès est prêt`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Ton compte OpexIA est activ&eacute;. Merci pour ta confiance.</p>
      <p>Pour bien d&eacute;marrer :</p>
      <p>1. Connecte-toi &agrave; la plateforme<br/>2. Ouvre le Module 1 depuis ton tableau de bord<br/>3. Lance la Le&ccedil;on 1 — elle dure 15 minutes</p>
      <p>Lien direct : <a href="https://www.opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
      <p>Si t'as la moindre question, r&eacute;ponds &agrave; cet email.</p>
    `),
  };
}

/**
 * Day 1 email — "As-tu commencé la leçon 1 ?" reminder.
 * Sent ~24h after purchase.
 */
export function dayOneEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, t'as commencé la leçon 1 ?`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Tu as cr&eacute;&eacute; ton compte hier. La prochaine &eacute;tape c'est de lancer la Le&ccedil;on 1 du Module 1. Elle dure 15 minutes et pose les bases de tout.</p>
      <p>Petite stat : les apprenants qui terminent la premi&egrave;re le&ccedil;on dans les 48h ont 3x plus de chances de finir la formation. Bloque 15 min et lance-toi.</p>
      <p>Lien direct : <a href="https://www.opexia-formation.com/lessons" style="color: #1a73e8;">opexia-formation.com/lessons</a></p>
      <p>D&eacute;j&agrave; fait ? Parfait, continue sur ta lanc&eacute;e.</p>
    `),
  };
}

/**
 * Day 3 email — social proof / success story.
 * Sent ~72h after purchase.
 */
/**
 * Weekly recap email — sent every Monday.
 * Summarises the learner's progress over the past 7 days.
 */
export function weeklyRecapEmail(
  name: string,
  stats: {
    lessonsThisWeek: number;
    totalLessons: number;
    xpThisWeek: number;
    totalXP: number;
    streak: number;
    nextLesson: string | null;
  },
): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  const streakLabel =
    stats.streak >= 7
      ? "🔥 Impressionnant !"
      : stats.streak >= 3
        ? "💪 Bien joué !"
        : "🚀 Continue !";

  const encouragement =
    stats.lessonsThisWeek > 0
      ? `Tu as termin&eacute; <strong>${stats.lessonsThisWeek} le&ccedil;on${stats.lessonsThisWeek > 1 ? "s" : ""}</strong> cette semaine et gagn&eacute; <strong>${stats.xpThisWeek} XP</strong>. Continue sur cette lanc&eacute;e !`
      : "Tu n&rsquo;as pas termin&eacute; de le&ccedil;on cette semaine &mdash; pas de souci, l&rsquo;important c&rsquo;est de reprendre. M&ecirc;me 15 minutes suffisent !";

  const nextLessonBlock = stats.nextLesson
    ? `<p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        📘 <strong>Prochaine &eacute;tape :</strong> ${stats.nextLesson}
      </p>`
    : "";

  const nextLine = stats.nextLesson
    ? `<p>Prochaine &eacute;tape : ${stats.nextLesson}</p>`
    : "";

  return {
    subject: `${firstName}, ton récap de la semaine`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>${encouragement}</p>
      <p>Tes stats cette semaine :<br/>
      — Le&ccedil;ons termin&eacute;es : ${stats.lessonsThisWeek} (${stats.totalLessons} au total)<br/>
      — XP gagn&eacute;s : +${stats.xpThisWeek} (${stats.totalXP} au total)</p>
      ${nextLine}
      <p>Continue ici : <a href="https://www.opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
    `),
  };
}

/**
 * Day 3 email — social proof / success story.
 * Sent ~72h after purchase.
 */
/**
 * Nurture Day 1 — sent ~24h after registration to users who haven't purchased.
 */
export function nurtureDayOne(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, t'en es où ?`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Tu as cr&eacute;&eacute; ton compte hier, c'est un bon d&eacute;but. Mais le vrai parcours commence maintenant.</p>
      <p>La formation compl&egrave;te c'est 22 modules, 85 le&ccedil;ons, et tout ce qu'il faut pour lancer ton agence IA : du prompt engineering au closing client.</p>
      <p>Le pack Starter d&eacute;marre &agrave; 47&euro; — 2 modules pour poser les fondations et voir si c'est fait pour toi.</p>
      <p>Regarde ici : <a href="https://www.opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>Des questions ? R&eacute;ponds &agrave; cet email.</p>
    `),
  };
}

/**
 * Nurture Day 3 — sent ~72h after registration to users who haven't purchased.
 * Social proof angle.
 */
export function nurtureDayThree(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, un retour rapide`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Karim a rejoint la formation il y a quelques semaines. Trois jours apr&egrave;s avoir termin&eacute; le Module 3, il a d&eacute;croch&eacute; son premier client en consulting IA. Un contrat &agrave; 2 500&euro;.</p>
      <p>Il &eacute;tait exactement dans la m&ecirc;me situation que toi avant de se lancer. La diff&eacute;rence c'est qu'il a d&eacute;cid&eacute; de passer &agrave; l'action.</p>
      <p>Si tu veux voir ce que la formation inclut : <a href="https://www.opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>Des questions ? R&eacute;ponds ici.</p>
    `),
  };
}

/**
 * Nurture Day 7 — sent ~168h after registration to users who haven't purchased.
 * Urgency / last chance angle.
 */
export function nurtureDaySeven(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, dernier message`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>&Ccedil;a fait une semaine que tu as cr&eacute;&eacute; ton compte. Je t'envoie un dernier message.</p>
      <p>Le march&eacute; de l'IA est en train d'exploser et ceux qui se forment maintenant prennent une avance &eacute;norme. La formation c'est 22 modules, 85 le&ccedil;ons, du coaching, et une communaut&eacute; de +150 entrepreneurs IA. Le Starter d&eacute;marre &agrave; 47&euro;.</p>
      <p>Si &ccedil;a t'int&eacute;resse : <a href="https://www.opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>C'est le dernier email. Si t'as des questions, r&eacute;ponds ici.</p>
    `),
  };
}

/**
 * Free follow-up Day 1 — sent ~24h after free registration.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDayOne(name: string, variant: "a" | "b" = "a"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  const subject = variant === "b"
    ? `${firstName || "Salut"}, t'as vu ce qui t'attend ?`
    : "Ta formation t'attend";

  return {
    subject,
    html: layout(`
      <p>${firstName ? `Salut ${firstName},` : "Salut,"}</p>
      <p>Tu as cr&eacute;&eacute; ton compte gratuit hier. T'as eu le temps d'explorer la plateforme ?</p>
      <p>Avec la formation compl&egrave;te, tu acc&egrave;des &agrave; 22 modules, 85 le&ccedil;ons, un CRM int&eacute;gr&eacute;, et une communaut&eacute; d'entrepreneurs IA. Tout ce qu'il faut pour lancer ton agence de z&eacute;ro.</p>
      <p>Jette un oeil aux offres : <a href="https://www.opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>Des questions ? R&eacute;ponds &agrave; cet email.</p>
    `),
  };
}

/**
 * Free follow-up Day 2 — sent ~48h after free registration.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDayTwo(name: string, variant: "a" | "b" = "a"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  const subject = variant === "b"
    ? (firstName ? `${firstName}, une question rapide` : "Une question rapide")
    : (firstName ? `${firstName}, t'as regard&eacute; le module 1 ?` : "T'as regard&eacute; le module 1 ?");

  return {
    subject,
    html: layout(`
      <p>${firstName ? `Salut ${firstName},` : "Salut,"}</p>
      <p>C'est Marius. Je voulais savoir si tu as eu le temps de regarder le premier module.</p>
      <p>Tes 3 prochaines &eacute;tapes :<br/>
      1. Terminer le module D&eacute;couverte (15 min)<br/>
      2. Rejoindre le Discord pour poser tes questions<br/>
      3. D&eacute;cider si tu veux la formation compl&egrave;te</p>
      <p>Reprends ici : <a href="https://www.opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
      <p>Si quelque chose te bloque, r&eacute;ponds &agrave; cet email. Je lis tout.</p>
    `),
  };
}

/**
 * Free follow-up Day 7 — sent ~7 days after free registration.
 * Last chance with discount code.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDaySeven(name: string, variant: "a" | "b" = "a", discountCode = "FREETRIAL"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  const subject = variant === "b"
    ? (firstName ? `${firstName}, j'ai un truc pour toi` : "J'ai un truc pour toi")
    : "Re: ta formation IA";

  return {
    subject,
    html: layout(`
      <p>${firstName ? `Salut ${firstName},` : "Salut,"}</p>
      <p>&Ccedil;a fait une semaine que tu as rejoint OpexIA. J'esp&egrave;re que le module D&eacute;couverte t'a plu.</p>
      <p>J'ai un code pour toi : <strong>${discountCode}</strong> — c'est -20% sur la formation, valable 24h.</p>
      <p>Avec l'Academy tu passes de 6 le&ccedil;ons &agrave; 85 : vid&eacute;os, exercices, CRM int&eacute;gr&eacute;, assistant IA, templates pour lancer ton agence.</p>
      <p>Utilise le code ici : <a href="https://www.opexia-formation.com/offres?code=${discountCode}" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>Si t'as des questions, r&eacute;ponds &agrave; cet email.</p>
    `),
  };
}

/**
 * Lead magnet — Guide "Les 5 services IA les plus demandés en 2026"
 * Sent immediately when someone submits their email on the landing page.
 * Slightly styled but still personal enough to land in Gmail Primary.
 */
export function guideEmail(): { subject: string; html: string } {
  return {
    subject: "Ton guide est prêt",
    html: layout(`
      <p>Salut,</p>
      <p>Merci pour ta confiance. Voici ton guide :</p>
      <p style="margin: 20px 0;">
        <a href="https://www.opexia-formation.com/guide-5-services-ia.pdf" style="color: #1a73e8; font-weight: 600; font-size: 16px;">
          &rarr; T&eacute;l&eacute;charger le guide PDF
        </a>
      </p>
      <p>Dedans tu trouveras :</p>
      <p style="margin-left: 8px;">
        &bull; Les 5 services IA que les PME s'arrachent<br/>
        &bull; Les prix du march&eacute; (de 500&euro; &agrave; 5 000&euro;/projet)<br/>
        &bull; Les outils concrets pour chaque service<br/>
        &bull; Un pitch pr&ecirc;t &agrave; l'emploi pour d&eacute;marcher<br/>
        &bull; La m&eacute;thode en 5 &eacute;tapes pour d&eacute;crocher tes premiers clients
      </p>
      <p>Lis-le tranquillement et si tu as des questions, r&eacute;ponds &agrave; cet email. Je lis tout.</p>
    `),
  };
}

/**
 * Lead follow-up Day 7 — only follow-up after guide delivery.
 * Personal email style.
 */
export function leadFollowupDaySeven(): { subject: string; html: string } {
  return {
    subject: "Re: le guide IA",
    html: layout(`
      <p>Salut,</p>
      <p>&Ccedil;a fait une semaine que tu as t&eacute;l&eacute;charg&eacute; le guide. Je t'envoie un dernier message parce que je pense sinc&egrave;rement que le timing est bon pour toi.</p>
      <p>Moins de 3% des PME en Europe ont adopt&eacute; de vraies automatisations IA. Le march&eacute; est vierge. Mais chaque mois, de nouveaux freelances se positionnent.</p>
      <p>La formation d&eacute;marre &agrave; 47&euro; avec le pack Starter. C'est 2 modules pour d&eacute;couvrir l'IA et voir si c'est fait pour toi — sans risque avec la garantie 14 jours.</p>
      <p>Si &ccedil;a t'int&eacute;resse : <a href="https://www.opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
      <p>C'est le dernier email de cette s&eacute;rie. Si t'as des questions, r&eacute;ponds ici, je suis dispo.</p>
    `),
  };
}

export function dayThreeEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, besoin d'un coup de pouce ?`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Tu as acc&egrave;s &agrave; la formation depuis 3 jours. Si tu bloques sur quelque chose ou si tu veux structurer ton plan d'action, on peut en parler.</p>
      <p>R&eacute;serve un appel gratuit de 15 min avec moi sur WhatsApp : <a href="https://wa.me/33787858036" style="color: #1a73e8;">wa.me/33787858036</a></p>
      <p>Sinon, r&eacute;ponds &agrave; cet email, je te r&eacute;ponds sous 24h.</p>
    `),
  };
}
