import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialit\u00e9",
  description:
    "Politique de confidentialit\u00e9 d'OpexIA Academy - Protection de vos donn\u00e9es personnelles conform\u00e9ment au RGPD.",
};

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
          loi Informatique et Libert&eacute;s du 6 janvier 1978 modifi&eacute;e. La pr&eacute;sente
          politique de confidentialit&eacute; d&eacute;crit les modalit&eacute;s de collecte, de
          traitement et de protection de vos donn&eacute;es personnelles.
        </p>

        {/* Responsable de traitement */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. Responsable de traitement</h2>
        <p className="text-[#6B7280] leading-relaxed mb-2">
          Le responsable du traitement de vos donn&eacute;es personnelles est :
        </p>
        <ul className="list-none space-y-1 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Identit&eacute; :</strong> OpexIA Academy &mdash; Micro-entreprise</li>
          <li><strong>Repr&eacute;sentant :</strong> Marius AUGEREAU</li>
          <li><strong>SIRET :</strong> 909 749 541</li>
          <li><strong>Email :</strong> support@opexia-formation.com</li>
          <li><strong>T&eacute;l&eacute;phone :</strong> 07 56 88 52 25</li>
          <li><strong>D&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es (DPO) :</strong> support@opexia-formation.com</li>
        </ul>

        {/* Données collectées */}
        <h2 className="text-xl font-semibold mt-10 mb-4">2. Donn&eacute;es personnelles collect&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Dans le cadre de l&apos;utilisation de la Plateforme, nous collectons les cat&eacute;gories
          de donn&eacute;es suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Donn&eacute;es d&apos;identification :</strong> nom, pr&eacute;nom, adresse email, photo de profil (si connexion via Google)</li>
          <li><strong>Donn&eacute;es de connexion :</strong> mot de passe chiffr&eacute; (hash&eacute;), adresse IP, logs de connexion, type de navigateur, syst&egrave;me d&apos;exploitation</li>
          <li><strong>Donn&eacute;es de progression :</strong> le&ccedil;ons compl&eacute;t&eacute;es, scores aux quiz, temps pass&eacute; sur les modules, certificats obtenus</li>
          <li><strong>Donn&eacute;es de paiement :</strong> informations de transaction (trait&eacute;es par Stripe &mdash; nous ne stockons jamais les num&eacute;ros de carte bancaire)</li>
          <li><strong>Donn&eacute;es d&apos;utilisation :</strong> pages visit&eacute;es, interactions avec la Plateforme, pr&eacute;f&eacute;rences utilisateur</li>
          <li><strong>Donn&eacute;es de communication :</strong> messages envoy&eacute;s via le formulaire de contact, &eacute;changes par email</li>
        </ul>

        {/* Finalités */}
        <h2 className="text-xl font-semibold mt-10 mb-4">3. Finalit&eacute;s du traitement</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Vos donn&eacute;es personnelles sont collect&eacute;es et trait&eacute;es pour les finalit&eacute;s suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Fourniture du service :</strong> cr&eacute;ation et gestion de votre compte, acc&egrave;s aux formations, suivi de votre progression, d&eacute;livrance de certificats</li>
          <li><strong>Gestion des paiements :</strong> traitement des transactions, &eacute;mission des factures, gestion des remboursements</li>
          <li><strong>Am&eacute;lioration de la Plateforme :</strong> analyse de l&apos;utilisation pour am&eacute;liorer l&apos;exp&eacute;rience utilisateur et le contenu p&eacute;dagogique</li>
          <li><strong>Communication :</strong> envoi d&apos;emails transactionnels (confirmation d&apos;inscription, r&eacute;initialisation de mot de passe, confirmation de paiement) et, avec votre consentement, d&apos;emails de suivi p&eacute;dagogique</li>
          <li><strong>S&eacute;curit&eacute; :</strong> pr&eacute;vention de la fraude, d&eacute;tection d&apos;activit&eacute;s suspectes, protection contre les acc&egrave;s non autoris&eacute;s</li>
          <li><strong>Obligations l&eacute;gales :</strong> respect des obligations comptables et fiscales</li>
        </ul>

        {/* Base légale */}
        <h2 className="text-xl font-semibold mt-10 mb-4">4. Base l&eacute;gale des traitements</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment &agrave; l&apos;article 6 du RGPD, chaque traitement repose sur une base l&eacute;gale :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Ex&eacute;cution du contrat (art. 6.1.b) :</strong> fourniture des formations souscrites, gestion du compte utilisateur, traitement des paiements</li>
          <li><strong>Consentement (art. 6.1.a) :</strong> envoi de communications commerciales et p&eacute;dagogiques, d&eacute;p&ocirc;t de cookies analytiques</li>
          <li><strong>Int&eacute;r&ecirc;t l&eacute;gitime (art. 6.1.f) :</strong> am&eacute;lioration de la Plateforme, pr&eacute;vention de la fraude, s&eacute;curit&eacute; du syst&egrave;me</li>
          <li><strong>Obligation l&eacute;gale (art. 6.1.c) :</strong> conservation des donn&eacute;es de facturation conform&eacute;ment aux obligations comptables et fiscales</li>
        </ul>

        {/* Durée de conservation */}
        <h2 className="text-xl font-semibold mt-10 mb-4">5. Dur&eacute;e de conservation</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Vos donn&eacute;es sont conserv&eacute;es pour la dur&eacute;e strictement n&eacute;cessaire aux finalit&eacute;s pour lesquelles elles ont &eacute;t&eacute; collect&eacute;es :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Donn&eacute;es de compte :</strong> conserv&eacute;es pendant toute la dur&eacute;e de votre inscription, puis 3 ans apr&egrave;s votre derni&egrave;re activit&eacute;</li>
          <li><strong>Donn&eacute;es de progression :</strong> conserv&eacute;es pendant toute la dur&eacute;e de votre inscription</li>
          <li><strong>Donn&eacute;es de paiement :</strong> conserv&eacute;es 10 ans conform&eacute;ment aux obligations comptables (article L.123-22 du Code de commerce)</li>
          <li><strong>Logs de connexion :</strong> conserv&eacute;s 1 an conform&eacute;ment &agrave; l&apos;article 6 du d&eacute;cret n&deg;2011-219</li>
          <li><strong>Donn&eacute;es de prospection :</strong> conserv&eacute;es 3 ans &agrave; compter du dernier contact</li>
        </ul>

        {/* Droits des utilisateurs */}
        <h2 className="text-xl font-semibold mt-10 mb-4">6. Vos droits</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment au RGPD (articles 15 &agrave; 22), vous disposez des droits suivants
          sur vos donn&eacute;es personnelles :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-4">
          <li><strong>Droit d&apos;acc&egrave;s (art. 15) :</strong> obtenir la confirmation que vos donn&eacute;es sont trait&eacute;es et en recevoir une copie</li>
          <li><strong>Droit de rectification (art. 16) :</strong> corriger vos donn&eacute;es inexactes ou incompl&egrave;tes</li>
          <li><strong>Droit &agrave; l&apos;effacement (art. 17) :</strong> demander la suppression de vos donn&eacute;es personnelles</li>
          <li><strong>Droit &agrave; la limitation (art. 18) :</strong> demander la limitation du traitement de vos donn&eacute;es</li>
          <li><strong>Droit &agrave; la portabilit&eacute; (art. 20) :</strong> recevoir vos donn&eacute;es dans un format structur&eacute;, couramment utilis&eacute; et lisible par machine</li>
          <li><strong>Droit d&apos;opposition (art. 21) :</strong> vous opposer au traitement de vos donn&eacute;es pour des motifs l&eacute;gitimes</li>
          <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement &agrave; tout moment pour les traitements bas&eacute;s sur celui-ci</li>
        </ul>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Pour exercer ces droits, contactez-nous &agrave; : <strong>support@opexia-formation.com</strong>.
          Nous nous engageons &agrave; r&eacute;pondre &agrave; votre demande dans un d&eacute;lai
          d&apos;un mois &agrave; compter de sa r&eacute;ception.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation aupr&egrave;s
          de la CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s) :{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A2E] underline hover:no-underline"
          >
            www.cnil.fr
          </a>.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-10 mb-4">7. Cookies</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          La Plateforme utilise des cookies pour assurer son bon fonctionnement et am&eacute;liorer
          l&apos;exp&eacute;rience utilisateur.
        </p>
        <h3 className="text-lg font-medium mt-6 mb-3">7.1 Cookies essentiels (strictement n&eacute;cessaires)</h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Ces cookies sont indispensables au fonctionnement de la Plateforme. Ils permettent la gestion
          de la session d&apos;authentification et la m&eacute;morisation de vos pr&eacute;f&eacute;rences.
          Ils ne n&eacute;cessitent pas votre consentement.
        </p>
        <h3 className="text-lg font-medium mt-6 mb-3">7.2 Cookies analytiques</h3>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Nous utilisons Plausible Analytics, un outil d&apos;analyse respectueux de la vie priv&eacute;e
          qui ne d&eacute;pose pas de cookies et ne collecte aucune donn&eacute;e personnelle. Les
          donn&eacute;es collect&eacute;es sont agr&eacute;g&eacute;es et anonymes.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Vous pouvez g&eacute;rer vos pr&eacute;f&eacute;rences en mati&egrave;re de cookies &agrave;
          tout moment via les param&egrave;tres de votre navigateur.
        </p>

        {/* Sous-traitants */}
        <h2 className="text-xl font-semibold mt-10 mb-4">8. Sous-traitants et transferts de donn&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Nous faisons appel aux sous-traitants suivants pour le fonctionnement de la Plateforme :
        </p>
        <div className="overflow-x-auto mb-4">
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
                <td className="px-4 py-3">Base de donn&eacute;es et authentification</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Stripe Inc.</td>
                <td className="px-4 py-3">Paiement s&eacute;curis&eacute;</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Resend Inc.</td>
                <td className="px-4 py-3">Envoi d&apos;emails transactionnels</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3">Google LLC</td>
                <td className="px-4 py-3">Authentification (OAuth)</td>
                <td className="px-4 py-3">&Eacute;tats-Unis</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Plausible Insights O&Uuml;</td>
                <td className="px-4 py-3">Analyse d&apos;audience</td>
                <td className="px-4 py-3">Union europ&eacute;enne (Estonie)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Certains de ces sous-traitants sont situ&eacute;s aux &Eacute;tats-Unis. Les transferts de
          donn&eacute;es hors de l&apos;Union europ&eacute;enne sont encadr&eacute;s par les clauses
          contractuelles types de la Commission europ&eacute;enne ou par le EU-US Data Privacy Framework,
          garantissant un niveau de protection ad&eacute;quat de vos donn&eacute;es personnelles
          conform&eacute;ment &agrave; l&apos;article 46 du RGPD.
        </p>

        {/* Sécurité */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. S&eacute;curit&eacute; des donn&eacute;es</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          OpexIA Academy met en &oelig;uvre les mesures techniques et organisationnelles
          appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre tout
          acc&egrave;s non autoris&eacute;, perte, alt&eacute;ration ou divulgation :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li>Chiffrement des mots de passe (hachage s&eacute;curis&eacute;)</li>
          <li>Communications s&eacute;curis&eacute;es par le protocole HTTPS/TLS</li>
          <li>Acc&egrave;s aux donn&eacute;es restreint aux seules personnes habilit&eacute;es</li>
          <li>Sauvegardes r&eacute;guli&egrave;res des donn&eacute;es</li>
          <li>Paiements trait&eacute;s via Stripe (certifi&eacute; PCI-DSS niveau 1)</li>
        </ul>

        {/* Mineurs */}
        <h2 className="text-xl font-semibold mt-10 mb-4">10. Protection des mineurs</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          La Plateforme est destin&eacute;e &agrave; un public majeur (18 ans et plus). Nous ne
          collectons pas sciemment de donn&eacute;es personnelles de mineurs. Si nous d&eacute;couvrons
          qu&apos;un mineur s&apos;est inscrit sans le consentement de ses repr&eacute;sentants l&eacute;gaux,
          nous proc&eacute;derons &agrave; la suppression de ses donn&eacute;es dans les meilleurs d&eacute;lais.
        </p>

        {/* Modification */}
        <h2 className="text-xl font-semibold mt-10 mb-4">11. Modification de la politique</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          OpexIA Academy se r&eacute;serve le droit de modifier la pr&eacute;sente politique de
          confidentialit&eacute; &agrave; tout moment. En cas de modification substantielle, les
          utilisateurs seront inform&eacute;s par email ou par notification sur la Plateforme.
          La date de derni&egrave;re mise &agrave; jour est indiqu&eacute;e en haut de cette page.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-4">12. Contact</h2>
        <p className="text-[#6B7280] leading-relaxed">
          Pour toute question relative &agrave; la pr&eacute;sente politique de confidentialit&eacute;
          ou pour exercer vos droits, vous pouvez nous contacter &agrave; :{" "}
          <strong>support@opexia-formation.com</strong>
        </p>
      </div>
    </section>
  );
}
