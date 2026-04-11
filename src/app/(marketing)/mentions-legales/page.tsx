import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions l\u00e9gales",
  description:
    "Mentions l\u00e9gales du site OpexIA Academy - opexia-formation.com",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Mentions l&eacute;gales
        </h1>
        <p className="text-[#6B7280] text-sm mb-12">
          Derni&egrave;re mise &agrave; jour : 22 mars 2026
        </p>

        {/* Éditeur du site */}
        <h2 className="text-xl font-semibold mt-10 mb-4">1. &Eacute;diteur du site</h2>
        <p className="text-[#6B7280] leading-relaxed mb-2">
          Le site <strong>opexia-formation.com</strong> est &eacute;dit&eacute; par :
        </p>
        <ul className="list-none space-y-1 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Raison sociale :</strong> OpexIA Academy</li>
          <li><strong>Forme juridique :</strong> Micro-entreprise</li>
          <li><strong>SIRET :</strong> 909 749 541</li>
          <li><strong>Email :</strong> support@opexia-formation.com</li>
          <li><strong>T&eacute;l&eacute;phone :</strong> 07 56 80 37 17</li>
        </ul>
        <p className="text-[#6B7280] leading-relaxed mb-6 text-sm italic">
          En tant que micro-entreprise, OpexIA Academy est exon&eacute;r&eacute;e de TVA
          (article 293 B du Code g&eacute;n&eacute;ral des imp&ocirc;ts). Num&eacute;ro de TVA
          intracommunautaire : non applicable.
        </p>

        {/* Responsable de publication */}
        <h2 className="text-xl font-semibold mt-10 mb-4">2. Responsable de publication</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Le responsable de la publication est : <strong>Marius AUGEREAU</strong>,
          en qualit&eacute; de dirigeant de la micro-entreprise OpexIA Academy.
        </p>

        {/* Hébergeur */}
        <h2 className="text-xl font-semibold mt-10 mb-4">3. H&eacute;bergeur</h2>
        <p className="text-[#6B7280] leading-relaxed mb-2">
          Le site est h&eacute;berg&eacute; par :
        </p>
        <ul className="list-none space-y-1 text-[#6B7280] leading-relaxed mb-6">
          <li><strong>Raison sociale :</strong> Vercel Inc.</li>
          <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
          <li><strong>Site web :</strong> https://vercel.com</li>
        </ul>

        {/* Propriété intellectuelle */}
        <h2 className="text-xl font-semibold mt-10 mb-4">4. Propri&eacute;t&eacute; intellectuelle</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          L&apos;ensemble des contenus pr&eacute;sents sur le site opexia-formation.com (textes, images,
          vid&eacute;os, graphismes, logo, ic&ocirc;nes, sons, logiciels, etc.) est prot&eacute;g&eacute;
          par les lois fran&ccedil;aises et internationales relatives &agrave; la propri&eacute;t&eacute;
          intellectuelle.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Toute reproduction, repr&eacute;sentation, modification, publication, transmission,
          d&eacute;naturation, totale ou partielle du site ou de son contenu, par quelque proc&eacute;d&eacute;
          que ce soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation
          &eacute;crite pr&eacute;alable d&apos;OpexIA Academy.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Les contenus de formation accessibles via la plateforme sont r&eacute;serv&eacute;s &agrave;
          l&apos;usage strictement personnel de l&apos;utilisateur inscrit. Tout partage, redistribution
          ou mise &agrave; disposition &agrave; des tiers est formellement interdit et pourra donner lieu
          &agrave; des poursuites judiciaires.
        </p>

        {/* Responsabilité */}
        <h2 className="text-xl font-semibold mt-10 mb-4">5. Responsabilit&eacute;</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          OpexIA Academy s&apos;efforce d&apos;assurer l&apos;exactitude et la mise &agrave; jour des
          informations diffus&eacute;es sur le site. Toutefois, OpexIA Academy ne peut garantir
          l&apos;exactitude, la pr&eacute;cision ou l&apos;exhaustivit&eacute; des informations mises
          &agrave; disposition sur le site.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          OpexIA Academy d&eacute;cline toute responsabilit&eacute; en cas d&apos;interruption ou
          d&apos;inaccessibilit&eacute; du site, de survenance de bugs, ou de tout dommage r&eacute;sultant
          d&apos;une intrusion frauduleuse d&apos;un tiers.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Les informations et formations propos&eacute;es sur le site ne constituent en aucun cas des
          conseils juridiques, financiers ou professionnels. L&apos;utilisateur reste seul responsable
          de l&apos;utilisation qu&apos;il fait des connaissances acquises via la Plateforme.
        </p>

        {/* Liens hypertextes */}
        <h2 className="text-xl font-semibold mt-10 mb-4">6. Liens hypertextes</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Le site opexia-formation.com peut contenir des liens hypertextes vers d&apos;autres sites
          internet. OpexIA Academy n&apos;exerce aucun contr&ocirc;le sur ces sites et d&eacute;cline
          toute responsabilit&eacute; quant &agrave; leur contenu ou leurs pratiques en mati&egrave;re
          de protection des donn&eacute;es personnelles.
        </p>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          La cr&eacute;ation de liens hypertextes vers le site opexia-formation.com est soumise &agrave;
          l&apos;accord pr&eacute;alable d&apos;OpexIA Academy.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-10 mb-4">7. Cookies</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Le site opexia-formation.com utilise des cookies pour assurer le bon fonctionnement de ses
          services. Pour en savoir plus sur l&apos;utilisation des cookies et la gestion de vos
          pr&eacute;f&eacute;rences, veuillez consulter notre{" "}
          <a href="/confidentialite" className="text-[#1A1A2E] underline hover:no-underline">
            Politique de confidentialit&eacute;
          </a>.
        </p>

        {/* Crédits */}
        <h2 className="text-xl font-semibold mt-10 mb-4">8. Cr&eacute;dits</h2>
        <p className="text-[#6B7280] leading-relaxed mb-6">
          Conception et d&eacute;veloppement du site : OpexIA Academy.
        </p>

        {/* Droit applicable */}
        <h2 className="text-xl font-semibold mt-10 mb-4">9. Droit applicable et juridiction comp&eacute;tente</h2>
        <p className="text-[#6B7280] leading-relaxed mb-4">
          Les pr&eacute;sentes mentions l&eacute;gales sont soumises au droit fran&ccedil;ais.
        </p>
        <p className="text-[#6B7280] leading-relaxed">
          En cas de litige, et apr&egrave;s tentative de r&eacute;solution amiable, comp&eacute;tence est
          attribu&eacute;e aux tribunaux fran&ccedil;ais comp&eacute;tents.
        </p>
      </div>
    </section>
  );
}
