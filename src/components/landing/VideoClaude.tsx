"use client";

import { motion } from "framer-motion";

export default function VideoClaude() {
  return (
    <section className="pt-16 pb-0 bg-white">
      <div className="mx-auto max-w-[200px] lg:max-w-xs px-6 lg:px-8">
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
              <source src="/images/videoclaude.mp4" type="video/mp4" />
            </video>
            {/* White vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 20px 0 30px -5px white, inset -20px 0 30px -5px white, inset 0 10px 20px -5px white, inset 0 -20px 30px -5px white",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
