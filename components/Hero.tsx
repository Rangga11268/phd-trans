"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Shield, ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "Luxury Travel",
    "Premium Fleet",
    "Royal Experience",
    "First Class",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center pt-32 pb-20">
      {/* Premium Image Background - SSR Optimized */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/assets/img/phdbus1.webp"
          alt="PHD Trans Premium Bus"
          fill
          className="object-cover opacity-60"
          priority
          quality={100}
        />
        {/* Sophisticated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden"
              >
                <Star className="w-3 h-3 text-primary fill-primary" />
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-white tracking-widest uppercase">
            Official PHD Trans Luxury Bus
          </span>
        </motion.div>

        {/* Hero Heading - Inspired by Reference */}
        <div className="relative flex flex-col items-center mb-12">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center select-none"
          >
            <h1 className="text-[18vw] lg:text-[14vw] font-display font-black leading-[0.75] tracking-tighter text-white uppercase flex flex-col items-center text-center">
              <span className="relative inline-block">
                PHD
                <motion.span
                  className="absolute -top-4 -right-8 text-xs lg:text-sm font-sans font-bold text-primary tracking-[0.5em] hidden sm:block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  EST. 2024
                </motion.span>
              </span>
              <span className="text-stroke-white text-transparent opacity-80">
                TRANS
              </span>
            </h1>
          </motion.div>

          {/* Tagline Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-primary" />
              <p className="text-lg md:text-xl text-gray-300 font-medium tracking-tight">
                Experience the{" "}
                <span className="text-white italic">ultimate</span> standards of
              </p>
            </div>

            <div className="h-[40px] flex items-center px-4 py-1 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-primary font-bold text-lg md:text-xl uppercase tracking-wider block"
                >
                  {phrases[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Actions & Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          {/* Main Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="flex-1 px-8 py-5 rounded-3xl bg-white text-black font-bold tracking-tight text-lg flex items-center justify-between group hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden relative"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" />
              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </a>
            <a
              href="https://wa.me/6281353343110"
              target="_blank"
              className="px-8 py-5 rounded-3xl bg-white/5 border border-white/10 text-white font-bold tracking-tight text-lg flex items-center justify-center hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Contact Agent
            </a>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:border-primary/40 transition-all duration-500 group">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-1">
                Status
              </span>
              <span className="text-white font-bold">Available Now</span>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-gray-400">
                  Prime Units Ready
                </span>
              </div>
            </div>
            <div className="relative w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/40 border-dashed rounded-2xl"
              />
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Floating Icons Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex items-center gap-12 text-white/30"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[10px] uppercase font-mono tracking-widest vertical-text">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
        @media (max-width: 768px) {
          .text-stroke-white {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </section>
  );
}
