/**
 * Email templates for post-purchase drip sequence.
 *
 * Sender (configured in calling code):
 *   "OpexIA Academy <support@opexia-formation.com>"
 *
 * Each function returns { subject, html }.
 * The actual scheduling of dayOneEmail / dayThreeEmail requires
 * a cron job or external service — these are templates only.
 */

function layout(content: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
      ${content}
      <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #E5E7EB;">
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">OpexIA Academy &mdash; Formation en Excellence Op&eacute;rationnelle &amp; IA</p>
        <p style="color: #9CA3AF; font-size: 12px; margin: 4px 0 0 0;">
          <a href="https://opexia-formation.com" style="color: #9CA3AF;">opexia-formation.com</a>
        </p>
      </div>
    </div>
  `;
}

/**
 * Welcome email — sent immediately after purchase.
 */
export function welcomeEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `Bienvenue ${firstName} ! Ton accès OpexIA est prêt 🚀`,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Bienvenue sur OpexIA Academy, ${firstName} !</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Ton compte est activ&eacute; et ta formation t&rsquo;attend. Merci pour ta confiance !
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 12px 0;">Voici comment bien d&eacute;marrer :</p>
        <ol style="color: #6B7280; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Connecte-toi &agrave; la plateforme</li>
          <li>Acc&egrave;de au <strong>Module 1</strong> depuis ton tableau de bord</li>
          <li>Commence la <strong>Le&ccedil;on 1</strong> &mdash; elle se termine en 15 minutes</li>
        </ol>
      </div>

      <a href="https://opexia-formation.com/dashboard" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Acc&eacute;der &agrave; ma formation
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Une question ? R&eacute;ponds directement &agrave; cet email, on te r&eacute;pond sous 24h.
      </p>
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
    subject: `${firstName}, as-tu commencé la leçon 1 ?`,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Hey ${firstName} !</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Tu as cr&eacute;&eacute; ton compte hier &mdash; super ! La prochaine &eacute;tape, c&rsquo;est de commencer
        la <strong>Le&ccedil;on 1 du Module 1</strong>. Elle dure environ 15 minutes et pose les bases
        de tout ce que tu vas apprendre.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 8px 0;">
          💡 Astuce
        </p>
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0;">
          Les apprenants qui terminent la premi&egrave;re le&ccedil;on dans les 48h ont
          <strong>3x plus de chances</strong> de finir la formation enti&egrave;re.
          Bloque 15 minutes maintenant et lance-toi !
        </p>
      </div>

      <a href="https://opexia-formation.com/lessons" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Commencer la Le&ccedil;on 1
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        D&eacute;j&agrave; commenc&eacute; ? Parfait, ignore cet email et continue sur ta lanc&eacute;e !
      </p>
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

  return {
    subject: `${firstName}, ton récap de la semaine 📊`,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Ton r&eacute;cap hebdomadaire, ${firstName}</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        ${encouragement}
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Le&ccedil;ons cette semaine</td>
            <td style="padding: 8px 0; color: #1A1A2E; font-weight: 700; font-size: 14px; text-align: right;">${stats.lessonsThisWeek}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">Le&ccedil;ons totales</td>
            <td style="padding: 8px 0; color: #1A1A2E; font-weight: 700; font-size: 14px; text-align: right;">${stats.totalLessons}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">XP cette semaine</td>
            <td style="padding: 8px 0; color: #1A1A2E; font-weight: 700; font-size: 14px; text-align: right;">+${stats.xpThisWeek}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">XP total</td>
            <td style="padding: 8px 0; color: #1A1A2E; font-weight: 700; font-size: 14px; text-align: right;">${stats.totalXP}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6B7280; font-size: 14px;">S&eacute;rie en cours</td>
            <td style="padding: 8px 0; color: #1A1A2E; font-weight: 700; font-size: 14px; text-align: right;">${stats.streak} jour${stats.streak > 1 ? "s" : ""} ${streakLabel}</td>
          </tr>
        </table>
      </div>

      ${nextLessonBlock}

      <a href="https://opexia-formation.com/dashboard" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Continuer ma formation
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Tu re&ccedil;ois cet email chaque lundi. Une question ? R&eacute;ponds directement &agrave; cet email.
      </p>
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
    subject: "Tu as fait le premier pas, ne t'arrête pas là",
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Hey ${firstName} !</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Tu as cr&eacute;&eacute; ton compte sur OpexIA Academy &mdash; f&eacute;licitations, c&rsquo;est le premier pas.
        Mais ton parcours n&rsquo;a pas encore vraiment commenc&eacute;.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 12px 0;">
          Ce qui t&rsquo;attend dans la formation :
        </p>
        <ul style="color: #6B7280; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Ma&icirc;triser l&rsquo;excellence op&eacute;rationnelle et l&rsquo;IA appliqu&eacute;e</li>
          <li>Des modules progressifs, du d&eacute;butant &agrave; l&rsquo;expert</li>
          <li>Des exercices pratiques pour appliquer imm&eacute;diatement</li>
        </ul>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Le pack <strong>Starter</strong> d&eacute;marre &agrave; seulement <strong>47&euro;</strong> et inclut
        les 2 modules D&eacute;couverte pour poser les fondations. C&rsquo;est le meilleur moyen de commencer.
      </p>

      <a href="https://opexia-formation.com/#pricing" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Voir les offres
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Une question avant de te lancer ? R&eacute;ponds directement &agrave; cet email.
      </p>
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
    subject: "Ce que nos élèves ont accompli en 3 jours",
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">${firstName}, regarde ce qui est possible</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Il y a 3 jours, tu as cr&eacute;&eacute; ton compte. Pendant ce temps, d&rsquo;autres apprenants
        ont d&eacute;j&agrave; commenc&eacute; &agrave; transformer leur quotidien professionnel.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; font-style: italic; margin: 0 0 12px 0;">
          &laquo; J&rsquo;ai d&eacute;croch&eacute; mon premier client en consulting OpEx trois jours apr&egrave;s
          avoir termin&eacute; le Module 3. La formation m&rsquo;a donn&eacute; la m&eacute;thodologie et la
          confiance pour me lancer. &raquo;
        </p>
        <p style="color: #1A1A2E; font-weight: 600; font-size: 13px; margin: 0;">
          &mdash; Karim L., Consultant ind&eacute;pendant
        </p>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Karim &eacute;tait exactement comme toi il y a quelques semaines. La diff&eacute;rence ?
        Il a d&eacute;cid&eacute; de passer &agrave; l&rsquo;action.
      </p>

      <a href="https://opexia-formation.com/#pricing" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Rejoindre la formation
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Des questions sur le contenu ? R&eacute;ponds &agrave; cet email, on est l&agrave; pour t&rsquo;aider.
      </p>
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
    subject: "Dernière chance — ta place t'attend",
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">${firstName}, ta place t&rsquo;attend encore</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        &Ccedil;a fait une semaine que tu as cr&eacute;&eacute; ton compte. On ne veut pas te voir
        passer &agrave; c&ocirc;t&eacute; de cette opportunit&eacute;.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 12px 0;">
          Ce que tu obtiens avec la formation :
        </p>
        <ul style="color: #6B7280; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li><strong>22 modules</strong> structur&eacute;s du d&eacute;butant &agrave; l&rsquo;expert</li>
          <li><strong>91 le&ccedil;ons</strong> avec exercices pratiques</li>
          <li>Acc&egrave;s &agrave; la communaut&eacute; <strong>Discord</strong> priv&eacute;e</li>
          <li>Sessions de <strong>coaching</strong> en direct</li>
        </ul>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Chaque jour qui passe est un jour de retard sur ceux qui se forment d&eacute;j&agrave;.
        Ne laisse pas la procrastination d&eacute;cider &agrave; ta place.
      </p>

      <a href="https://opexia-formation.com/#pricing" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Choisir mon offre maintenant
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Tu re&ccedil;ois cet email car tu as cr&eacute;&eacute; un compte sur OpexIA Academy.
        R&eacute;ponds &agrave; cet email si tu as la moindre question.
      </p>
    `),
  };
}

/**
 * Free follow-up Day 1 — sent ~24h after free registration.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDayOne(name: string, variant: "a" | "b" = "a"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];
  const variantParam = `?variant=${variant}`;

  const subject = variant === "b"
    ? "🔓 Tu as débloqué ton accès gratuit — et maintenant ?"
    : "Ta formation t'attend...";

  const ctaText = variant === "b"
    ? "Voir ce qui m&rsquo;attend"
    : "D&eacute;bloquer ma formation";

  return {
    subject,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Hey ${firstName} !</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Tu as cr&eacute;&eacute; ton compte gratuit sur OpexIA Academy hier &mdash; super !
        Tu as d&eacute;j&agrave; pu explorer la plateforme et voir ce qui t&rsquo;attend.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 12px 0;">
          Voici ce qui t&rsquo;attend avec la formation compl&egrave;te :
        </p>
        <ul style="color: #6B7280; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li><strong>22 modules</strong> pour lancer ton agence IA de z&eacute;ro</li>
          <li><strong>85+ le&ccedil;ons</strong> vid&eacute;o et exercices pratiques</li>
          <li>CRM int&eacute;gr&eacute;, assistant IA et g&eacute;n&eacute;rateur de projets</li>
          <li>Acc&egrave;s &agrave; la communaut&eacute; priv&eacute;e</li>
        </ul>
      </div>

      <a href="https://opexia-formation.com/#pricing${variantParam}" style="display: inline-block; background: linear-gradient(135deg, #FF1744 0%, #D50000 100%); color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        ${ctaText}
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Une question ? R&eacute;ponds directement &agrave; cet email.
      </p>
    `),
  };
}

/**
 * Free follow-up Day 2 — sent ~48h after free registration.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDayTwo(name: string, variant: "a" | "b" = "a"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];
  const variantParam = `?variant=${variant}`;

  const subject = variant === "b"
    ? "Les autres avancent déjà — et toi ?"
    : "Tu passes à côté de quelque chose...";

  const ctaText = variant === "b"
    ? "Rattraper mon retard"
    : "Choisir mon offre";

  return {
    subject,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">${firstName}, ne reste pas en mode gratuit</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Pendant que tu h&eacute;sites, d&rsquo;autres &eacute;l&egrave;ves avancent d&eacute;j&agrave; dans la formation
        et construisent leur agence IA. Chaque jour en mode gratuit est un jour perdu.
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 12px 0;">
          Ce que les &eacute;l&egrave;ves accomplissent d&egrave;s la 1&egrave;re semaine :
        </p>
        <ul style="color: #6B7280; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
          <li>Ma&icirc;trise des outils IA (ChatGPT, Cursor, Claude&hellip;)</li>
          <li>Cr&eacute;ation de leur premier site professionnel</li>
          <li>Premier contact avec un prospect potentiel</li>
        </ul>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Le march&eacute; de l&rsquo;IA n&rsquo;attend pas. Passe &agrave; l&rsquo;action maintenant.
      </p>

      <a href="https://opexia-formation.com/#pricing${variantParam}" style="display: inline-block; background: linear-gradient(135deg, #FF1744 0%, #D50000 100%); color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        ${ctaText}
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Des questions ? R&eacute;ponds &agrave; cet email, on te r&eacute;pond sous 24h.
      </p>
    `),
  };
}

/**
 * Free follow-up Day 7 — sent ~7 days after free registration.
 * Last chance with discount code.
 * Supports A/B testing: variant "a" (default) or "b".
 */
export function freeFollowupDaySeven(name: string, variant: "a" | "b" = "a"): { subject: string; html: string } {
  const firstName = name.split(" ")[0];
  const variantParam = `&variant=${variant}`;

  const subject = variant === "b"
    ? "⚡ 20% de réduction expire ce soir"
    : "Dernière chance : offre spéciale -20%";

  const ctaText = variant === "b"
    ? "Profiter de -20% maintenant"
    : "Utiliser mon code -20%";

  return {
    subject,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">${firstName}, derni&egrave;re chance</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        &Ccedil;a fait une semaine que tu as cr&eacute;&eacute; ton compte gratuit. On t&rsquo;offre
        une derni&egrave;re opportunit&eacute; pour te lancer :
      </p>

      <div style="background: linear-gradient(135deg, #1A1A2E 0%, #0F0F1E 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
        <p style="color: #FF1744; font-weight: 700; font-size: 24px; margin: 0 0 8px 0; letter-spacing: 2px;">
          FREETRIAL
        </p>
        <p style="color: #ffffff; font-weight: 600; font-size: 16px; margin: 0 0 4px 0;">
          -20% sur toutes les formules
        </p>
        <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
          Valable 24 heures uniquement &mdash; ne rate pas cette offre
        </p>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Apr&egrave;s &ccedil;a, le tarif normal s&rsquo;applique. C&rsquo;est le moment ou jamais.
      </p>

      <a href="https://opexia-formation.com/offres?code=FREETRIAL${variantParam}" style="display: inline-block; background: linear-gradient(135deg, #FF1744 0%, #D50000 100%); color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        ${ctaText}
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Tu re&ccedil;ois cet email car tu as cr&eacute;&eacute; un compte gratuit sur OpexIA Academy.
      </p>
    `),
  };
}

export function dayThreeEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `${firstName}, besoin d'un coup de pouce ?`,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">Hey ${firstName} !</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Tu as acc&egrave;s &agrave; la formation depuis 3 jours maintenant.
      </p>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Si tu as des questions, que tu bloques sur un module, ou que tu veux structurer ton plan d&rsquo;action&hellip;
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #1A1A2E; font-weight: 600; font-size: 14px; margin: 0 0 8px 0;">
          R&eacute;serve un appel gratuit de 15 min avec l&rsquo;&eacute;quipe OpexIA.
        </p>
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0;">
          On est l&agrave; pour t&rsquo;aider &agrave; avancer.
        </p>
      </div>

      <a href="https://wa.me/message/DUQV2FBF3TF2H1" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        R&eacute;server mon appel
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Une question ? R&eacute;ponds directement &agrave; cet email, on te r&eacute;pond sous 24h.
      </p>
    `),
  };
}
