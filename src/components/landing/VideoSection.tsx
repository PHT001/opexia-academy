"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="py-0 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              style={{ display: 'none' }}
              onLoadedData={(e) => { (e.target as HTMLVideoElement).style.display = 'block'; }}
            >
              <source src="/images/video.mp4" type="video/mp4" />
            </video>
            {/* White vignette — balanced */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 30px 0 40px -10px white, inset -60px 0 60px -15px white, inset 0 40px 40px -15px white, inset 0 -60px 60px -15px white",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 45%, white 95%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
