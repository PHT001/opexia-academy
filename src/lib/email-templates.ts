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
        <a href="https://opexia-formation.com" style="color: #9CA3AF;">opexia-formation.com</a> · <a href="mailto:support@opexia-formation.com?subject=D%C3%A9sinscription&body=Je%20souhaite%20me%20d%C3%A9sinscrire%20des%20emails." style="color: #9CA3AF;">Se d&eacute;sinscrire</a>
      </p>
    </div>
  `;
}

/**
 * Free tier welcome — sent after registration (free plan).
 */
export function freeWelcomeEmail(name: string): { subject: string; html: string } {
  const firstName = name?.split(" ")[0] || "there";
  return {
    subject: `${firstName}, bienvenue sur OpexIA`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>Bienvenue sur OpexIA Academy. Ton compte gratuit est actif.</p>
      <p>Voici ce que tu peux faire d&egrave;s maintenant :</p>
      <p>1. D&eacute;couvre les 2 premiers modules (7 le&ccedil;ons)<br/>2. Passe les quiz pour valider tes acquis<br/>3. Rejoins la communaut&eacute; Discord</p>
      <p>Lien direct : <a href="https://opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
      <p>Si tu veux d&eacute;bloquer la formation compl&egrave;te (86 le&ccedil;ons, coaching, templates...) : <a href="https://opexia-formation.com/#tarifs" style="color: #1a73e8;">voir les offres</a></p>
    `),
  };
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
      <p>Lien direct : <a href="https://opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
      <p>Si t'as la moindre question, r&eacute;ponds &agrave; cet email ou contacte-moi sur WhatsApp : <a href="https://wa.me/33756885225" style="color: #1a73e8;">wa.me/33756885225</a></p>
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
      <p>Lien direct : <a href="https://opexia-formation.com/lessons" style="color: #1a73e8;">opexia-formation.com/lessons</a></p>
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
      <p>Continue ici : <a href="https://opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
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
      <p>La formation compl&egrave;te c'est 22 modules, 86 le&ccedil;ons, et tout ce qu'il faut pour lancer ton agence IA : du prompt engineering au closing client.</p>
      <p>Le pack Starter d&eacute;marre &agrave; 47&euro; — 2 modules pour poser les fondations et voir si c'est fait pour toi.</p>
      <p>Regarde ici : <a href="https://opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
      <p>Si tu veux voir ce que la formation inclut : <a href="https://opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
      <p>Le march&eacute; de l'IA est en train d'exploser et ceux qui se forment maintenant prennent une avance &eacute;norme. La formation c'est 22 modules, 86 le&ccedil;ons, du coaching, et une communaut&eacute; de +150 entrepreneurs IA. Le Starter d&eacute;marre &agrave; 47&euro;.</p>
      <p>Si &ccedil;a t'int&eacute;resse : <a href="https://opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
      <p>Avec la formation compl&egrave;te, tu acc&egrave;des &agrave; 22 modules, 86 le&ccedil;ons, un CRM int&eacute;gr&eacute;, et une communaut&eacute; d'entrepreneurs IA. Tout ce qu'il faut pour lancer ton agence de z&eacute;ro.</p>
      <p>Jette un oeil aux offres : <a href="https://opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
      <p>Reprends ici : <a href="https://opexia-formation.com/dashboard" style="color: #1a73e8;">opexia-formation.com/dashboard</a></p>
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
      <p>Avec l'Academy tu passes de 6 le&ccedil;ons &agrave; 86 : vid&eacute;os, exercices, CRM int&eacute;gr&eacute;, assistant IA, templates pour lancer ton agence.</p>
      <p>Utilise le code ici : <a href="https://opexia-formation.com/offres?code=${discountCode}" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
    html: `
      <meta charset="utf-8" />
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 0; color: #1a1a1a; font-size: 15px; line-height: 1.7;">

        <!-- Header -->
        <div style="background: #1A1A2E; padding: 28px 32px; border-radius: 16px 16px 0 0; text-align: center;">
          <span style="color: #fff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Opex<span style="color: #06B6D4;">IA</span></span>
        </div>

        <!-- Body -->
        <div style="background: #ffffff; padding: 32px; border-left: 1px solid #E5E7EB; border-right: 1px solid #E5E7EB;">

          <p style="margin: 0 0 16px; color: #111;">Salut,</p>
          <p style="margin: 0 0 24px; color: #374151;">Merci pour ta confiance. Ton guide <strong>Les 5 services IA les plus rentables</strong> est pr&ecirc;t.</p>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 28px 0;">
            <a href="https://opexia-formation.com/guide-5-services-ia.pdf" style="display: inline-block; background: #06B6D4; color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 10px; font-size: 15px; font-weight: 700; letter-spacing: 0.3px;">T&eacute;l&eacute;charger le guide PDF</a>
          </div>

          <!-- Content list -->
          <div style="background: #F9FAFB; border-radius: 12px; padding: 20px 24px; margin: 24px 0;">
            <p style="margin: 0 0 12px; font-weight: 700; color: #111; font-size: 14px;">Ce que tu vas d&eacute;couvrir :</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #374151; font-size: 14px;">&#10003;&nbsp;&nbsp;Les 5 services IA que les PME s'arrachent</td></tr>
              <tr><td style="padding: 6px 0; color: #374151; font-size: 14px;">&#10003;&nbsp;&nbsp;Les prix du march&eacute; (200 &agrave; 5 000 EUR/projet)</td></tr>
              <tr><td style="padding: 6px 0; color: #374151; font-size: 14px;">&#10003;&nbsp;&nbsp;Les outils concrets pour chaque service</td></tr>
              <tr><td style="padding: 6px 0; color: #374151; font-size: 14px;">&#10003;&nbsp;&nbsp;Un pitch pr&ecirc;t &agrave; l'emploi pour d&eacute;marcher</td></tr>
              <tr><td style="padding: 6px 0; color: #374151; font-size: 14px;">&#10003;&nbsp;&nbsp;La m&eacute;thode en 5 &eacute;tapes pour tes premiers clients</td></tr>
            </table>
          </div>

          <p style="margin: 24px 0 0; color: #374151;">Lis-le tranquillement. Si tu as des questions, r&eacute;ponds directement &agrave; cet email, je lis tout.</p>

          <!-- Signature -->
          <p style="margin: 32px 0 0; color: #111;">
            Marius<br/>
            <span style="color: #6B7280; font-size: 13px;">Fondateur, OpexIA</span>
          </p>
        </div>

        <!-- Footer -->
        <div style="background: #F9FAFB; padding: 16px 32px; border-radius: 0 0 16px 16px; border: 1px solid #E5E7EB; border-top: none; text-align: center;">
          <p style="margin: 0; color: #9CA3AF; font-size: 11px;">
            <a href="https://opexia-formation.com" style="color: #9CA3AF; text-decoration: none;">opexia-formation.com</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:support@opexia-formation.com?subject=D%C3%A9sinscription&body=Je%20souhaite%20me%20d%C3%A9sinscrire%20des%20emails." style="color: #9CA3AF; text-decoration: none;">Se d&eacute;sinscrire</a>
          </p>
        </div>

      </div>
    `,
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
      <p>Si &ccedil;a t'int&eacute;resse : <a href="https://opexia-formation.com/offres" style="color: #1a73e8;">opexia-formation.com/offres</a></p>
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
      <p>R&eacute;serve un appel gratuit de 15 min avec moi sur WhatsApp : <a href="https://wa.me/33756885225" style="color: #1a73e8;">wa.me/33756885225</a></p>
      <p>Sinon, r&eacute;ponds &agrave; cet email, je te r&eacute;ponds sous 24h.</p>
    `),
  };
}

/**
 * Re-engagement email — sent to inactive users (14+ days no activity).
 */
export function reEngagementEmail(name: string, lastLessonTitle?: string): { subject: string; html: string } {
  const firstName = name?.split(" ")[0] || "there";
  const lessonText = lastLessonTitle
    ? `<p>Tu en &eacute;tais &agrave; <strong>${lastLessonTitle}</strong>. Reprends l&agrave; o&ugrave; tu t'es arr&ecirc;t&eacute; :</p>`
    : `<p>Tu n'as pas encore commenc&eacute;. Lance-toi avec la premi&egrave;re le&ccedil;on :</p>`;

  return {
    subject: `${firstName}, ta formation t'attend`,
    html: layout(`
      <p>Salut ${firstName},</p>
      <p>&Ccedil;a fait un moment qu'on ne t'a pas vu sur la plateforme.</p>
      ${lessonText}
      <p><a href="https://opexia-formation.com/lessons" style="color: #1a73e8; font-weight: 600;">Reprendre la formation &rarr;</a></p>
      <p>15 minutes suffisent pour avancer. Bloque un cr&eacute;neau et lance-toi.</p>
    `),
  };
}
