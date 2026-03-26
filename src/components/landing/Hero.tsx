"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const scheduleHideControls = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setShowControls(true);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  const handleVideoClick = useCallback(() => {
    if (!started) return;
    if (showControls) {
      // Toggle play/pause on tap
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setPlaying(true);
        } else {
          videoRef.current.pause();
          setPlaying(false);
        }
      }
    }
    scheduleHideControls();
  }, [started, showControls, scheduleHideControls]);

  const startVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setMuted(false);
      setStarted(true);
      scheduleHideControls();
    }
  }, [scheduleHideControls]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(formatTime(video.currentTime));
      }
    };

    const onLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  // Auto pause/play when scrolling in/out of view
  useEffect(() => {
    const container = videoContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (started) {
            video.play();
            setPlaying(true);
          }
        } else {
          if (!video.paused) {
            video.pause();
            setPlaying(false);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section className="relative flex items-center pt-20 md:pt-28 pb-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744]">
                <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
                La comp&eacute;tence qui va valoir de l&apos;or en 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-4"
          >
            Lance ton agence IA
            <br />
            et g&eacute;n&egrave;re <span className="text-[#FF1744]">10K&euro;/mois</span> en 90 jours
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 text-base lg:text-lg text-[#6B7280] max-w-md mx-auto mb-8 leading-relaxed"
          >
            Ma&icirc;trise l&apos;IA, vends des services d&apos;automatisation aux PME, et vis de ton activit&eacute; — m&ecirc;me en partant de z&eacute;ro.
          </motion.p>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-4 bg-[#FF1744]/15 rounded-3xl blur-2xl pointer-events-none" />
            <div className="absolute -inset-8 bg-[#FF1744]/5 rounded-[2rem] blur-3xl pointer-events-none" />
            <div ref={videoContainerRef} className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-gray-200/50 cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
              {/* Play overlay — shown before user clicks */}
              {!started && (
                <div
                  onClick={startVideo}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all hover:bg-black/30"
                >
                  <div className="h-20 w-20 rounded-full bg-[#FF1744] flex items-center justify-center shadow-[0_0_30px_8px_rgba(255,23,68,0.4)] transition-transform hover:scale-110">
                    <svg className="h-9 w-9 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-white font-semibold text-sm">Regarder la pr&eacute;sentation</p>
                  <p className="text-white/60 text-xs mt-1">Clique pour lancer avec le son</p>
                </div>
              )}
              {/* Controls overlay */}
              {started && (
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer" onClick={(e) => {
                  if (videoRef.current) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    videoRef.current.currentTime = x * videoRef.current.duration;
                  }
                }}>
                  <div className="h-full bg-[#FF1744] rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm h-7 w-7 text-white transition-all hover:bg-white/20"
                    >
                      {playing ? (
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="h-3.5 w-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  <button
                    onClick={toggleMute}
                    className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-white text-xs font-medium transition-all hover:bg-white/20"
                  >
                    {muted ? (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                    {muted ? "Activer le son" : "Couper le son"}
                  </button>
                  </div>
                  <span className="text-white/70 text-xs font-mono">{currentTime} / {duration}</span>
                </div>
              </div>
              )}
            </div>
          </motion.div>

          {/* Social proof — avatars + rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-2.5 mb-6"
          >
            <Image
              src="/images/customers.webp"
              alt="Clients"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm text-[#111] font-medium">
              <strong>4.8</strong>/5 par <strong>+50 clients</strong>
            </span>
            <Image
              src="/images/blue-badge.svg"
              alt="V&eacute;rifi&eacute;"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="relative flex flex-wrap items-center justify-center gap-3 mt-6">
              {/* Floating robot video behind the button */}
              <motion.div
                className="absolute -top-16 lg:-top-20 z-0 w-36 h-36 lg:w-44 lg:h-44 pointer-events-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  maskImage: "radial-gradient(ellipse 65% 65% at center, black 30%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse 65% 65% at center, black 30%, transparent 70%)",
                }}
              >
                <video
                  src="/images/coucou.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <a
                href="/register"
                className="relative z-10 group inline-flex items-center justify-center rounded-full bg-[#FF1744] px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-xl hover:shadow-red-200 whitespace-nowrap"
              >
                Me former d&egrave;s maintenant
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <a href="#testimonials" className="text-[#6B7280] text-sm font-medium hover:text-[#111] transition-colors flex items-center gap-1.5">
              Voir les r&eacute;sultats des &eacute;l&egrave;ves &darr;
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-4 sm:gap-6 text-[11px] sm:text-sm text-[#9CA3AF]"
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Paiement s&eacute;curis&eacute;
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Garantie 14 jours
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Acc&egrave;s imm&eacute;diat
            </span>
          </motion.div>

        </div>

        {/* Founders Badge — 3D Floating Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 lg:mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft shadow underneath */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/10 rounded-full blur-xl" />

            <div
              className="relative inline-flex items-center gap-4 rounded-full px-6 py-3 bg-[#0A0A0A]/70 backdrop-blur-sm border border-white/10"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Inner glass highlight */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>

              <div className="relative flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                  <Image
                    src="/images/founder-marius.png"
                    alt="Marius"
                    width={40}
                    height={40}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-[#333] overflow-hidden">
                  <Image
                    src="/images/founder-igor.jpg"
                    alt="Igor"
                    width={40}
                    height={40}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative">
                <p className="text-white text-sm font-semibold">
                  Fond&eacute; par Marius &amp; Igor
                </p>
                <p className="text-gray-400 text-xs flex items-center gap-1">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Paris, France
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
