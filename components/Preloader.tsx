"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Timer for loading duration
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      window.innerWidth < 768 ? 1000 : 1500
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Ambient Purple Glow Background - Desktop Only */}
          {!isMobile && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7000FF]/20 rounded-full blur-[150px] mix-blend-screen"
              />
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo Container with Rings */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 flex items-center justify-center">
              {/* Rotating External Ring (Dashed) */}
              <motion.div
                className="absolute inset-0 border-[1px] border-dashed border-[#7000FF]/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              />

              {/* Rotating Inner Arc (Solid) */}
              <motion.div
                className="absolute inset-2 border-t-2 border-r-2 border-[#9D00FF] border-b-transparent border-l-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              />

              {/* Pulsing Glow Behind Logo */}
              <motion.div
                className="absolute inset-0 bg-[#7000FF]/30 blur-2xl rounded-full"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* The Logo */}
              <motion.div
                className="relative w-24 h-24 md:w-28 md:h-28 z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
              >
                <Image
                  src="/assets/img/logonobg.png"
                  alt="PHD Trans Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(112,0,255,0.6)]"
                  priority
                />
              </motion.div>
            </div>

            {/* Brand Name */}
            <div className="text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest"
              >
                PHD{" "}
                <span className="text-[#9D00FF] drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]">
                  TRANS
                </span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7000FF] to-transparent mt-2"
              />
            </div>
          </div>

          {/* Curtain Reveal - Deep Purple -> Black -> Reveal */}
          <motion.div
            className="absolute inset-0 bg-[#7000FF] z-50 pointer-events-none"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            exit={{ scaleY: 1, transformOrigin: "bottom" }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-[#030014] z-50 pointer-events-none"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            exit={{ scaleY: 1, transformOrigin: "bottom" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.87, 0, 0.13, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
