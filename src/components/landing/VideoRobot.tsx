"use client";

import { motion } from "framer-motion";

export default function VideoRobot() {
  return (
    <section className="py-0 -mb-16 bg-white">
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
              <source src="/images/openclaw2.mp4" type="video/mp4" />
            </video>
            {/* Strong white vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 60px 0 70px -10px white, inset -60px 0 70px -10px white, inset 0 60px 70px -10px white, inset 0 -60px 70px -10px white",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, white 85%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
