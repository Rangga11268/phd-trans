"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { Shield, Star, Zap, Play } from "lucide-react";
import Image from "next/image";

// Interactive Scramble Component for Main Title
const ScrambleTitle = ({
  text,
  className,
  autoStart = false,
}: {
  text: string;
  className?: string;
  autoStart?: boolean;
}) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    // Skip scramble on mobile to reduce main-thread work
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setDisplay(text);
      return;
    }

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, 50); // Increased interval to 50ms to reduce CPU load
  }, [text, chars]);

  useEffect(() => {
    if (autoStart) scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoStart, scramble]);

  return (
    <span
      onMouseEnter={scramble}
      className={`${className} font-mono`} // Use mono to prevent layout shift
    >
      {display}
    </span>
  );
};

// Auto-Loop Scramble Component for Tagline
const ScrambleLoop = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

  useEffect(() => {
    // Skip loop scramble on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setDisplay(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 60); // Optimized interval for tagline loop

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono inline-block min-w-[200px] text-center">
      {display}
    </span>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Move Effect - Optimized: Only run on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax calculations
  const moveX = useTransform(springX, [0, 1], [-20, 20]);
  const moveY = useTransform(springY, [0, 1], [-20, 20]);
  const moveXReverse = useTransform(springX, [0, 1], [20, -20]);
  const moveYReverse = useTransform(springY, [0, 1], [-10, 10]); // Reduced vertical movement

  // Card Tilt
  const rotateX = useTransform(springY, [0, 1], [5, -5]); // Reduced tilt
  const rotateY = useTransform(springX, [0, 1], [-5, 5]);

  // Dynamic Text State
  const [textIndex, setTextIndex] = useState(0);
  // Phrases moved outside or memoized (defined here as constant for simplicity in this replacement)
  const phrases = [
    "Luxury Travel",
    "Premium Fleet",
    "Royal Experience",
    "First Class",
  ];

  // Separate state for mobile to avoid rendering video on small screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse Move Effect - Optimized: Only run on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        mouseX.set(e.clientX / innerWidth);
        mouseY.set(e.clientY / innerHeight);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Separate effect for text rotation
  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(textTimer);
  }, []); // phrases is constant in this scope

  // Spotlight Gradient - Reduced size for performance
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${useTransform(
    springX,
    (v) => v * 100
  )}% ${useTransform(
    springY,
    (v) => v * 100
  )}%, rgba(112,0,255,0.1), transparent 80%)`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#030014] flex items-center">
      {/* Dynamic Spotlight - Desktop Only & Hardware Accelerated */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-screen hidden md:block will-change-transform" // Optimized
        style={{ background: spotlight }}
      />

      {/* Abstract Neon Void Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {/* Grain Overlay */}
        <div
          className="absolute inset-0 z-20 opacity-[0.12] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/noise.png')" }}
        />

        {/* Animated Gradient Blobs - Optimized with Will-Change and Reduced Blur on Mobile */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1], // Reduced scale range
            opacity: [0.3, 0.4, 0.3],
            rotate: [0, 20, 0], // Reduced rotation
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }} // Linear is cheaper
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [-10, 10, -10],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [-20, 20, -20],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[90px] md:blur-[150px] mix-blend-screen will-change-transform"
        />

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/10 to-[#030014]" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Main Title with 3D Tilt */}
          <motion.div
            style={{ x: moveX, y: moveY }}
            className="relative perspective-1000 mb-6"
          >
            {/* Glitch Layers */}
            <h1 className="relative font-display font-bold text-[18vw] lg:text-[10vw] leading-[0.8] tracking-tighter text-transparent uppercase select-none group cursor-default">
              {/* Back Layer (Hollow) */}
              <div className="absolute inset-0 translate-x-1 translate-y-1 opacity-20 blur-[1px]">
                <span className="block text-stroke-white">PHD</span>
              </div>

              {/* Main Layer */}
              <div className="relative z-10">
                <ScrambleTitle
                  text="PHD"
                  className="block text-stroke-white hover:text-white transition-colors duration-500"
                  autoStart={true}
                />
              </div>

              <div className="relative z-10">
                {/* Replaced expensive drop-shadow with text-shadow via style or class if available, using standard shadow for now to reduce paint cost */}
                <ScrambleTitle
                  text="TRANS"
                  className="block text-primary animate-pulse-slow drop-shadow-lg"
                  autoStart={true}
                />
              </div>
            </h1>
          </motion.div>

          {/* Dynamic Tagline */}
          <motion.p
            style={{ opacity, x: moveXReverse }}
            className="text-lg md:text-xl text-gray-300 font-sans max-w-md tracking-wide uppercase flex flex-col sm:flex-row items-center lg:items-start gap-2 mb-10"
          >
            <span className="whitespace-nowrap flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary/50" />
              Defining
            </span>
            <span className="text-white font-bold relative min-w-[200px] text-center lg:text-left h-[30px] overflow-hidden">
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/50 skew-x-12" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <ScrambleLoop text={phrases[textIndex]} />
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="whitespace-nowrap"> Standards</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold tracking-widest uppercase transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(112,0,255,0.3)]"
            >
              Start Journey
            </a>
            <a
              href="https://wa.me/6281353343110"
              target="_blank"
              className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold tracking-widest uppercase transition-all backdrop-blur-md"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Media Portal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] w-full flex items-center justify-center perspective-1000"
        >
          {/* The Card Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-md aspect-video bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden group will-change-transform"
          >
            {/* Video/Image Content */}
            <div className="absolute inset-0 z-0 bg-[#030014]">
              {!isMobile ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/img/phdbus1.webp"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110"
                >
                  <source
                    src="/assets/video/vidio phd 2.mp4"
                    type="video/mp4"
                  />
                </video>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/img/phdbus1.webp"
                    alt="PHD Trans Premium Bus"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating UI Elements on Card */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono text-white/70 tracking-widest uppercase">
                Live Feed
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-10">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Watch Reel
                </span>
              </div>
            </div>

            {/* Scanline Effect inside Card */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
          </motion.div>

          {/* Floating Orbits/Decorations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -z-10 w-[120%] h-[120%] border border-primary/20 rounded-full border-dashed will-change-transform"
          />
        </motion.div>
      </div>

      <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
          color: transparent;
        }
        .perspective-1000 {
          perspective: 1000px;
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
