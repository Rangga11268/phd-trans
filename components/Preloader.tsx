"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bus, MapPin, Zap } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -left-1/2 w-[200vw] h-[200vw] bg-primary/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outer Ring */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="20 10"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#7000FF" />
                      <stop offset="100%" stopColor="#00FF94" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Inner Icon */}
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  <Bus className="h-10 w-10 text-white fill-white/10" />
                </motion.div>
              </div>
            </motion.div>

            {/* Typography */}
            <div className="text-center mb-8 space-y-2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-display font-bold text-white tracking-tight"
              >
                PHD{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  TRANS
                </span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] uppercase tracking-[0.4em] text-white font-medium"
              >
                Luxury Travel
              </motion.p>
            </div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent"
                style={{ width: `${progress}%` }}
                layoutId="progress"
              />
              {/* Glow Effect on Head */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                style={{ left: `${progress}%`, translateX: "-50%" }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary/80">
              <Zap className="h-3 w-3 animate-pulse" />
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Curtain Reveal Effect (Reverse) */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "circIn" }}
            className="absolute inset-0 bg-primary z-20 origin-bottom"
            style={{ display: isLoading ? "none" : "block" }} // Only show on exit
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
