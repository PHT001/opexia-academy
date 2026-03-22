import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions G\u00e9n\u00e9rales d'Utilisation",
  description:
    "CGU de la plateforme OpexIA Academy - Conditions d'acc\u00e8s et d'utilisation des formations en ligne.",
};

export default function CGUPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Conditions G&eacute;n&eacute;rales d&apos;Utilisation
        </h1>
        <p className="text-[#6B7280] text-sm mb-12">
          Derni&egrave;re mise &agrave; jour : 22 mars 2026
        </p>

        {/* Préambule */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Pr&eacute;ambule</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&apos;Utilisation (ci-apr&egrave;s
          &laquo;&nbsp;CGU&nbsp;&raquo;) sont &eacute;tablies par :
        </p>
        <ul className="list-none space-y-1 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>OpexIA Academy</strong></li>
          <li>Micro-entreprise</li>
          <li>SIRET : [SIRET &agrave; compl&eacute;ter]</li>
          <li>Si&egrave;ge social : [Adresse &agrave; compl&eacute;ter]</li>
          <li>Email : support@opexia-formation.com</li>
          <li>T&eacute;l&eacute;phone : [T&eacute;l&eacute;phone &agrave; compl&eacute;ter]</li>
          <li>Responsable de la publication : Marius AUGEREAU</li>
        </ul>

        {/* Article 1 — Objet */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 1 &mdash; Objet</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les pr&eacute;sentes CGU ont pour objet de d&eacute;finir les modalit&eacute;s et
          conditions d&apos;utilisation de la plateforme de formation en ligne OpexIA Academy,
          accessible &agrave; l&apos;adresse opexia-formation.com (ci-apr&egrave;s &laquo;&nbsp;la
          Plateforme&nbsp;&raquo;).
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          L&apos;inscription ou l&apos;utilisation de la Plateforme implique l&apos;acceptation pleine
          et enti&egrave;re des pr&eacute;sentes CGU. Si vous n&apos;acceptez pas ces conditions,
          veuillez ne pas utiliser la Plateforme.
        </p>

        {/* Article 2 — Définitions */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 2 &mdash; D&eacute;finitions</h2>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>&laquo;&nbsp;Plateforme&nbsp;&raquo;</strong> : le site internet opexia-formation.com et l&apos;ensemble de ses fonctionnalit&eacute;s.</li>
          <li><strong>&laquo;&nbsp;Utilisateur&nbsp;&raquo;</strong> : toute personne physique acc&eacute;dant &agrave; la Plateforme, inscrite ou non.</li>
          <li><strong>&laquo;&nbsp;Membre&nbsp;&raquo;</strong> : tout Utilisateur disposant d&apos;un compte et ayant souscrit &agrave; une offre de formation.</li>
          <li><strong>&laquo;&nbsp;Formation&nbsp;&raquo;</strong> : l&apos;ensemble des contenus p&eacute;dagogiques (vid&eacute;os, textes, quiz, ressources) accessibles sur la Plateforme.</li>
          <li><strong>&laquo;&nbsp;&Eacute;diteur&nbsp;&raquo;</strong> : OpexIA Academy, tel que d&eacute;fini dans le pr&eacute;ambule.</li>
        </ul>

        {/* Article 3 — Accès aux services */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 3 &mdash; Acc&egrave;s aux services</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          La Plateforme propose des formations en ligne d&eacute;di&eacute;es &agrave;
          l&apos;intelligence artificielle appliqu&eacute;e au business. L&apos;acc&egrave;s aux
          contenus de formation n&eacute;cessite une inscription pr&eacute;alable et la souscription
          &agrave; une offre payante.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          La Plateforme est accessible 24h/24 et 7j/7, sous r&eacute;serve des interruptions
          n&eacute;cessaires &agrave; la maintenance, aux mises &agrave; jour, ou en cas de force majeure.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          OpexIA Academy se r&eacute;serve le droit de suspendre ou d&apos;interrompre
          temporairement l&apos;acc&egrave;s &agrave; la Plateforme pour des raisons de maintenance,
          de mise &agrave; jour ou pour tout autre motif, sans que cela ne puisse donner lieu &agrave;
          une quelconque indemnisation.
        </p>

        {/* Article 4 — Inscription et compte */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 4 &mdash; Inscription et compte utilisateur</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Pour acc&eacute;der aux services, l&apos;utilisateur doit cr&eacute;er un compte en
          fournissant des informations exactes et &agrave; jour (nom, adresse email, mot de passe).
          L&apos;inscription peut &eacute;galement &ecirc;tre r&eacute;alis&eacute;e via un service
          d&apos;authentification tiers (Google).
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Chaque compte est strictement personnel. L&apos;utilisateur s&apos;engage &agrave; ne pas
          partager ses identifiants de connexion avec des tiers.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          L&apos;utilisateur est responsable de la confidentialit&eacute; de ses identifiants de
          connexion. Tout acc&egrave;s &agrave; la Plateforme avec ses identifiants est r&eacute;put&eacute;
          effectu&eacute; par l&apos;utilisateur lui-m&ecirc;me.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          OpexIA Academy se r&eacute;serve le droit de suspendre ou de supprimer un compte en cas de
          violation des pr&eacute;sentes CGU, d&apos;utilisation frauduleuse de la Plateforme, ou de
          partage non autoris&eacute; des contenus de formation.
        </p>

        {/* Article 5 — Tarifs et paiement */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 5 &mdash; Tarifs et paiement</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les formations propos&eacute;es sur la Plateforme sont disponibles selon les offres suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-4">
          <li><strong>Starter</strong> &mdash; 47&nbsp;&euro; : acc&egrave;s au module d&apos;introduction</li>
          <li><strong>Academy</strong> &mdash; 397&nbsp;&euro; : acc&egrave;s &agrave; l&apos;ensemble des modules de formation</li>
          <li><strong>One-to-One</strong> &mdash; 3&nbsp;997&nbsp;&euro; : acc&egrave;s complet avec accompagnement personnalis&eacute;</li>
        </ul>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les tarifs sont indiqu&eacute;s en euros TTC (TVA non applicable, article 293 B du CGI).
          OpexIA Academy se r&eacute;serve le droit de modifier ses tarifs &agrave; tout moment.
          Les modifications tarifaires ne s&apos;appliquent pas aux commandes d&eacute;j&agrave;
          valid&eacute;es.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Le paiement est effectu&eacute; en ligne par carte bancaire via la plateforme s&eacute;curis&eacute;e
          Stripe. La commande est confirm&eacute;e apr&egrave;s validation du paiement.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Une facture est &eacute;mise et envoy&eacute;e par email &agrave; l&apos;utilisateur
          apr&egrave;s chaque achat.
        </p>

        {/* Article 6 — Droit de rétractation */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 6 &mdash; Droit de r&eacute;tractation</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment aux articles L.221-18 et suivants du Code de la consommation,
          l&apos;utilisateur dispose d&apos;un d&eacute;lai de <strong>14 jours calendaires</strong> &agrave;
          compter de la date d&apos;achat pour exercer son droit de r&eacute;tractation, sans avoir
          &agrave; motiver sa d&eacute;cision.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment &agrave; l&apos;article L.221-28 du Code de la consommation, le droit
          de r&eacute;tractation ne peut &ecirc;tre exerc&eacute; pour les contenus num&eacute;riques
          fournis sur un support immat&eacute;riel dont l&apos;ex&eacute;cution a commenc&eacute;
          avec l&apos;accord expr&egrave;s du consommateur et pour lesquels celui-ci a renonc&eacute;
          &agrave; son droit de r&eacute;tractation.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Pour exercer ce droit, l&apos;utilisateur doit adresser sa demande par email &agrave;
          support@opexia-formation.com en indiquant ses coordonn&eacute;es, le num&eacute;ro de
          commande et la date d&apos;achat. Le remboursement sera effectu&eacute; dans un d&eacute;lai de
          14 jours suivant la r&eacute;ception de la demande, via le m&ecirc;me moyen de paiement
          utilis&eacute; lors de l&apos;achat.
        </p>

        {/* Article 7 — Obligations de l'utilisateur */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 7 &mdash; Obligations de l&apos;utilisateur</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          L&apos;utilisateur s&apos;engage &agrave; :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#6B7280] leading-relaxed mb-6">
          <li>Utiliser la Plateforme conform&eacute;ment &agrave; sa destination et dans le respect des lois en vigueur.</li>
          <li>Ne pas tenter d&apos;acc&eacute;der de mani&egrave;re non autoris&eacute;e aux syst&egrave;mes informatiques de la Plateforme.</li>
          <li>Ne pas reproduire, copier, t&eacute;l&eacute;charger, enregistrer, diffuser ou partager les contenus de formation avec des tiers.</li>
          <li>Ne pas utiliser de logiciel de capture vid&eacute;o ou audio pour enregistrer les contenus.</li>
          <li>Ne pas revendre ou redistribuer les formations sous quelque forme que ce soit.</li>
          <li>Fournir des informations exactes et &agrave; jour lors de l&apos;inscription.</li>
        </ul>

        {/* Article 8 — Propriété intellectuelle */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 8 &mdash; Propri&eacute;t&eacute; intellectuelle</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          L&apos;ensemble des contenus de la Plateforme (cours, vid&eacute;os, textes, graphismes,
          logo, ic&ocirc;nes, images, logiciels) est la propri&eacute;t&eacute; exclusive d&apos;OpexIA
          Academy et est prot&eacute;g&eacute; par les lois relatives &agrave; la propri&eacute;t&eacute;
          intellectuelle.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          L&apos;acc&egrave;s aux formations conf&egrave;re &agrave; l&apos;utilisateur un droit
          d&apos;usage personnel, non exclusif et non transf&eacute;rable. Toute reproduction,
          redistribution, revente, publication ou exploitation des contenus sans autorisation
          &eacute;crite pr&eacute;alable est strictement interdite et constitue une contrefa&ccedil;on
          sanctionn&eacute;e par les articles L.335-2 et suivants du Code de la propri&eacute;t&eacute;
          intellectuelle.
        </p>

        {/* Article 9 — Responsabilité */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 9 &mdash; Limitation de responsabilit&eacute;</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          OpexIA Academy s&apos;engage &agrave; fournir des formations de qualit&eacute; mais ne
          garantit pas de r&eacute;sultats sp&eacute;cifiques li&eacute;s &agrave; l&apos;utilisation
          des connaissances acquises. Les r&eacute;sultats d&eacute;pendent de l&apos;implication et
          des actions de chaque utilisateur.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          La responsabilit&eacute; d&apos;OpexIA Academy ne saurait &ecirc;tre engag&eacute;e en cas
          de force majeure, de difficult&eacute;s techniques, d&apos;interruptions de r&eacute;seau,
          ou de tout &eacute;v&eacute;nement &eacute;chappant &agrave; son contr&ocirc;le.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          En tout &eacute;tat de cause, la responsabilit&eacute; d&apos;OpexIA Academy est limit&eacute;e au
          montant pay&eacute; par l&apos;utilisateur pour la formation concern&eacute;e.
        </p>

        {/* Article 10 — Données personnelles */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 10 &mdash; Donn&eacute;es personnelles</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          OpexIA Academy collecte et traite des donn&eacute;es personnelles dans le cadre de
          l&apos;utilisation de la Plateforme, conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral
          sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi Informatique et Libert&eacute;s.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Pour en savoir plus sur la collecte, le traitement et la protection de vos donn&eacute;es
          personnelles, veuillez consulter notre{" "}
          <a href="/confidentialite" className="text-[#1A1A2E] underline hover:no-underline">
            Politique de confidentialit&eacute;
          </a>.
        </p>

        {/* Article 11 — Modification des CGU */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 11 &mdash; Modification des CGU</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          OpexIA Academy se r&eacute;serve le droit de modifier les pr&eacute;sentes CGU &agrave; tout
          moment. Les utilisateurs seront inform&eacute;s de toute modification substantielle par email
          ou par notification sur la Plateforme. La poursuite de l&apos;utilisation de la Plateforme
          apr&egrave;s notification vaut acceptation des nouvelles CGU.
        </p>

        {/* Article 12 — Droit applicable et litiges */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Article 12 &mdash; Droit applicable et litiges</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les pr&eacute;sentes CGU sont r&eacute;gies par le droit fran&ccedil;ais.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          En cas de litige relatif &agrave; l&apos;interpr&eacute;tation ou &agrave;
          l&apos;ex&eacute;cution des pr&eacute;sentes CGU, les parties s&apos;engagent &agrave;
          rechercher une solution amiable avant toute action judiciaire.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Conform&eacute;ment aux articles L.611-1 et suivants du Code de la consommation,
          l&apos;utilisateur peut recourir gratuitement &agrave; un m&eacute;diateur de la
          consommation en vue de la r&eacute;solution amiable du litige. Le m&eacute;diateur peut
          &ecirc;tre saisi via la plateforme de r&egrave;glement en ligne des litiges de la
          Commission europ&eacute;enne :{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A2E] underline hover:no-underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>.
        </p>
        <p className="text-[#6B7280] leading-relaxed">
          &Agrave; d&eacute;faut de r&eacute;solution amiable, tout litige sera soumis &agrave; la
          comp&eacute;tence exclusive des tribunaux fran&ccedil;ais.
        </p>
      </div>
    </section>
  );
}
