"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Layer */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/noise.png')" }}
        />

        {/* Gradient Mesh */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-background/90" />

        {shouldLoadVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover scale-105"
            poster="/assets/img/phd2.webp"
          >
            <source src="/assets/video/vidio phd 2.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/assets/img/phd2.webp)" }}
          />
        )}
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Main Title */}
          <div className="relative">
            <h1 className="font-display font-bold text-[15vw] leading-[0.85] tracking-tighter text-transparent uppercase select-none">
              <span className="block text-stroke-white opacity-80 backdrop-blur-sm">
                PHD
              </span>
              <span className="block text-primary drop-shadow-[0_0_35px_rgba(112,0,255,0.6)] animate-pulse-slow">
                TRANS
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-[2px] bg-accent mix-blend-difference"
            />
          </div>

          {/* Tagline */}
          <motion.p
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-gray-300 font-sans max-w-md tracking-wide uppercase"
          >
            Defining <span className="text-white font-bold">Luxury Travel</span>{" "}
            Standards
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

      <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 768px) {
          .text-stroke-white {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
          }
        }
      `}</style>
    </section>
  );
}
