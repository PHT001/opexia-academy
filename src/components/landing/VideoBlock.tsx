"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoBlock() {
  const [videoId] = useState("");

  return (
    <section className="py-10 lg:py-14 bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-[#FF1744]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1744] animate-pulse" />
            Vid&eacute;o de pr&eacute;sentation
          </span>
          <p className="mt-3 text-sm text-[#6B7280]">
            2 minutes pour comprendre comment nos &eacute;l&egrave;ves g&eacute;n&egrave;rent leurs premiers revenus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Vidéo de présentation OpexIA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#111]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <svg
                    className="h-8 w-8 text-white/80 ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-lg font-medium">
                  Vid&eacute;o de pr&eacute;sentation &mdash; Bient&ocirc;t disponible
                </p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
