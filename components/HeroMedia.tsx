"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroMedia({
  rotateX,
  rotateY,
}: {
  rotateX: any;
  rotateY: any;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
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
              <source src="/assets/video/vidio phd 2.mp4" type="video/mp4" />
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
  );
}
