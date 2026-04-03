"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundersFormation() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
            Qui est derri&egrave;re cette formation ?
          </h2>

          {/* Founder cards */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-10">
            {[
              { name: "Marius", role: "Co-Fondateur", img: "/images/marius.webp" },
              { name: "Igor", role: "Co-Fondateur", img: "/images/igor.jpg" },
            ].map((founder) => (
              <div
                key={founder.name}
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#111]">{founder.name}</span>
                    <Image
                      src="/images/blinkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </div>
                  <p className="text-sm text-[#9CA3AF]">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Personal message */}
          <div className="text-left space-y-4 text-[#6B7280] leading-relaxed">
            <p>
              Trop de professionnels passent &agrave; c&ocirc;t&eacute; des <strong className="text-[#111]">opportunit&eacute;s de l&apos;IA</strong>, faute d&apos;accompagnement.
            </p>
            <p>
              On a structur&eacute; notre expertise terrain en un programme <strong className="text-[#111]">100&nbsp;% pratique</strong>&nbsp;: cas concrets et m&eacute;thodes &eacute;prouv&eacute;es pour <strong className="text-[#111]">lancer votre agence IA</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
