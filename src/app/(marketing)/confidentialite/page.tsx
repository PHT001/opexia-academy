export default function ConfidentialitePage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Politique de confidentialit&eacute;
        </h1>
        <p className="text-[#6B7280] text-sm mb-12">
          Derni&egrave;re mise &agrave; jour : 22 mars 2026
        </p>

        <p className="text-[#6B7280] leading-relaxed mb-8">
          OpexIA Academy s&apos;engage &agrave; prot&eacute;ger la vie priv&eacute;e de ses
          utilisateurs conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la
          Protection des Donn&eacute;es (RGPD &mdash; R&egrave;glement UE 2016/679) et &agrave; la
          loi Informatique et Libert&eacute;s du 6 janvier 1978 modifi&eacute;e.
        </p>

        {/* Responsable de traitement */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. Responsable de traitement</h2>
        <ul className="list-none space-y-1 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Identit&eacute; :</strong> OpexIA Academy</li>
          <li><strong>Adresse :</strong> [&Agrave; compl&eacute;ter]</li>
          <li><strong>Email :</strong> support@opexia-formation.com</li>
          <li><strong>Contact DPO :</strong> support@opexia-formation.com</li>
        </ul>

        {/* Données collectées */}
        <h2 className="text-xl font-semibold mt-10 mb-4">2. Donn&eacute;es collect&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Dans le cadre de l&apos;utilisation de la Plateforme, nous collectons les donn&eacute;es
          suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Donn&eacute;es d&apos;identification :</strong> nom, pr&eacute;nom, adresse email</li>
          <li><strong>Donn&eacute;es de connexion :</strong> mot de passe chiffr&eacute;, adresse IP, logs de connexion</li>
          <li><strong>Donn&eacute;es de progression :</strong> le&ccedil;ons compl&eacute;t&eacute;es, scores aux quiz, temps pass&eacute;</li>
          <li><strong>Donn&eacute;es de paiement :</strong> informations de transaction (trait&eacute;es par Stripe, nous ne stockons pas les num&eacute;ros de carte)</li>
          <li><strong>Donn&eacute;es d&apos;utilisation :</strong> pages visit&eacute;es, interactions avec la Plateforme</li>
        </ul>

        {/* Finalités */}
        <h2 className="text-xl font-semibold mt-10 mb-4">3. Finalit&eacute;s du traitement</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Vos donn&eacute;es personnelles sont collect&eacute;es pour les finalit&eacute;s suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Fourniture du service :</strong> cr&eacute;ation et gestion de votre compte, acc&egrave;s aux formations, suivi de votre progression</li>
          <li><strong>Am&eacute;lioration de la Plateforme :</strong> analyse de l&apos;utilisation pour am&eacute;liorer l&apos;exp&eacute;rience utilisateur et le contenu p&eacute;dagogique</li>
          <li><strong>Communication :</strong> envoi d&apos;emails transactionnels (confirmation d&apos;inscription, r&eacute;initialisation de mot de passe) et, avec votre consentement, d&apos;emails de suivi p&eacute;dagogique</li>
          <li><strong>Gestion des paiements :</strong> traitement des transactions et &eacute;mission des factures</li>
        </ul>

        {/* Base légale */}
        <h2 className="text-xl font-semibold mt-10 mb-4">4. Base l&eacute;gale des traitements</h2>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Ex&eacute;cution du contrat :</strong> fourniture des formations souscrites et gestion du compte utilisateur</li>
          <li><strong>Consentement :</strong> envoi de communications commerciales et p&eacute;dagogiques</li>
          <li><strong>Int&eacute;r&ecirc;t l&eacute;gitime :</strong> am&eacute;lioration de la Plateforme et pr&eacute;vention de la fraude</li>
          <li><strong>Obligation l&eacute;gale :</strong> conservation des donn&eacute;es de facturation conform&eacute;ment aux obligations comptables</li>
        </ul>

        {/* Durée de conservation */}
        <h2 className="text-xl font-semibold mt-10 mb-4">5. Dur&eacute;e de conservation</h2>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Donn&eacute;es de compte :</strong> conserv&eacute;es pendant toute la dur&eacute;e de votre inscription, puis 3 ans apr&egrave;s votre derni&egrave;re activit&eacute;</li>
          <li><strong>Donn&eacute;es de progression :</strong> conserv&eacute;es pendant toute la dur&eacute;e de votre inscription</li>
          <li><strong>Donn&eacute;es de paiement :</strong> conserv&eacute;es 10 ans conform&eacute;ment aux obligations comptables</li>
          <li><strong>Logs de connexion :</strong> conserv&eacute;s 1 an conform&eacute;ment aux obligations l&eacute;gales</li>
        </ul>

        {/* Droits des utilisateurs */}
        <h2 className="text-xl font-semibold mt-10 mb-4">6. Vos droits</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment au RGPD, vous disposez des droits suivants sur vos donn&eacute;es
          personnelles :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-4">
          <li><strong>Droit d&apos;acc&egrave;s :</strong> obtenir la confirmation que vos donn&eacute;es sont trait&eacute;es et en recevoir une copie</li>
          <li><strong>Droit de rectification :</strong> corriger vos donn&eacute;es inexactes ou incompl&egrave;tes</li>
          <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos donn&eacute;es personnelles</li>
          <li><strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir vos donn&eacute;es dans un format structur&eacute; et couramment utilis&eacute;</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donn&eacute;es pour des motifs l&eacute;gitimes</li>
          <li><strong>Droit &agrave; la limitation :</strong> demander la limitation du traitement de vos donn&eacute;es</li>
        </ul>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Pour exercer ces droits, contactez-nous &agrave; : <strong>support@opexia-formation.com</strong>
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation aupr&egrave;s
          de la CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s) :
          www.cnil.fr.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-10 mb-4">7. Cookies</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          La Plateforme utilise des cookies pour assurer son bon fonctionnement :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Cookies essentiels :</strong> n&eacute;cessaires au fonctionnement de la Plateforme (session d&apos;authentification, pr&eacute;f&eacute;rences)</li>
          <li><strong>Cookies analytiques :</strong> mesure d&apos;audience et analyse de l&apos;utilisation de la Plateforme (avec consentement)</li>
        </ul>

        {/* Sous-traitants */}
        <h2 className="text-xl font-semibold mt-10 mb-4">8. Sous-traitants et transferts de donn&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Nous faisons appel aux sous-traitants suivants pour le fonctionnement de la Plateforme :
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-[#6B7280] border border-[#E5E7EB] rounded-lg">
            <thead>
              <tr className="bg-[#F9FAFB]">
                <th className="text-left px-4 py-3 font-semibold border-b border-[#E5E7EB]">Sous-traitant</th>
                <th className="text-left px-4 py-3 font-semibold border-b border-[#E5E7EB]">Service</th>
                <th className="text-left px-4 py-3 font-semibold border-b border-[#E5E7EB]">Localisation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Vercel Inc.</td>
                <td className="px-4 py-3">H&eacute;bergement</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Supabase Inc.</td>
                <td className="px-4 py-3">Base de donn&eacute;es</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Stripe Inc.</td>
                <td className="px-4 py-3">Paiement</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Resend Inc.</td>
                <td className="px-4 py-3">Envoi d&apos;emails</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Google LLC</td>
                <td className="px-4 py-3">Authentification (OAuth)</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Ces sous-traitants sont situ&eacute;s aux &Eacute;tats-Unis. Les transferts de donn&eacute;es
          sont encadr&eacute;s par les clauses contractuelles types de la Commission europ&eacute;enne
          ou par le EU-US Data Privacy Framework, garantissant un niveau de protection ad&eacute;quat
          de vos donn&eacute;es personnelles.
        </p>

        {/* Sécurité */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. S&eacute;curit&eacute; des donn&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          OpexIA Academy met en &oelig;uvre les mesures techniques et organisationnelles
          appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre tout
          acc&egrave;s non autoris&eacute;, perte, alt&eacute;ration ou divulgation. Les mots de passe
          sont chiffr&eacute;s et les communications sont s&eacute;curis&eacute;es par le protocole
          HTTPS.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-4">10. Contact</h2>
        <p className="text-[#6B7280] leading-relaxed">
          Pour toute question relative &agrave; la pr&eacute;sente politique de confidentialit&eacute;
          ou pour exercer vos droits, vous pouvez nous contacter &agrave; :{" "}
          <strong>support@opexia-formation.com</strong>
        </p>
      </div>
    </section>
  );
}
