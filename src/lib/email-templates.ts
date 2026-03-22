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
export function dayThreeEmail(name: string): { subject: string; html: string } {
  const firstName = name.split(" ")[0];

  return {
    subject: `Comment Sarah a transformé son équipe en 6 semaines`,
    html: layout(`
      <h2 style="color: #1A1A2E; margin-bottom: 8px;">${firstName}, tu n&rsquo;es pas seul(e)</h2>
      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        Des dizaines de professionnels suivent la m&ecirc;me formation que toi. Voici l&rsquo;histoire
        de l&rsquo;un d&rsquo;entre eux :
      </p>

      <div style="background: #F3F4F6; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; font-style: italic; margin: 0 0 12px 0;">
          &laquo; Avant OpexIA, je perdais des heures sur des t&acirc;ches r&eacute;p&eacute;titives sans savoir
          par o&ugrave; commencer pour optimiser. En 6 semaines de formation, j&rsquo;ai mis en place
          3 automatisations qui font gagner 12h par semaine &agrave; mon &eacute;quipe. &raquo;
        </p>
        <p style="color: #1A1A2E; font-weight: 600; font-size: 13px; margin: 0;">
          &mdash; Sarah M., Responsable Op&eacute;rations
        </p>
      </div>

      <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
        La cl&eacute;, c&rsquo;est la r&eacute;gularit&eacute;. M&ecirc;me 15 minutes par jour suffisent
        pour progresser. Continue ta formation et tu verras les r&eacute;sultats rapidement.
      </p>

      <a href="https://opexia-formation.com/dashboard" style="display: inline-block; background: #1A1A2E; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px;">
        Continuer ma formation
      </a>

      <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">
        Tu as une question sur un module ? R&eacute;ponds &agrave; cet email, on est l&agrave; pour t&rsquo;aider.
      </p>
    `),
  };
}
