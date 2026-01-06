"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/fleet", label: "Armada" },
  { href: "/reservation", label: "Reservasi" },
  { href: "/merchandise", label: "Merchandise" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MINIMALIST HEADER BAR */}
      <header
        className={`fixed top-0 inset-x-0 z-[110] transition-all duration-500 h-16 md:h-20 ${
          isScrolled || isOpen
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <Image
                src="/assets/img/logoPHD.jpg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display font-black text-lg tracking-tighter text-white">
              PHD<span className="text-primary">TRANS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/reservation"
              className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              Order Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white rounded-full origin-center transition-all shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
                {!isOpen && (
                  <motion.span
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-0.5 bg-primary rounded-full ml-auto shadow-[0_0_10px_rgba(112,0,255,0.5)]"
                  />
                )}
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-white rounded-full origin-center transition-all shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* SPLIT-PORTAL MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col lg:flex-row h-screen pt-16 md:pt-20 overflow-y-auto lg:overflow-hidden"
          >
            {/* LEFT ZONE: Navigation Links (Brand Color Overlay) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 100 }}
              className="flex-shrink-0 lg:flex-1 bg-gradient-to-br from-primary via-primary/95 to-purple-900 flex items-center px-6 lg:px-12 py-20 lg:py-0 relative overflow-hidden"
            >
              {/* Premium Noise Overlay */}
              <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

              {/* Decorative Large Watermark */}
              <span className="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/5 uppercase select-none pointer-events-none">
                Travel
              </span>

              <div className="relative z-10 flex flex-col gap-4 lg:gap-4 w-full">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 lg:gap-6 py-2"
                    >
                      <span className="text-white/20 font-display font-black text-lg lg:text-3xl group-hover:text-white/50 transition-colors flex-shrink-0">
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-4xl sm:text-5xl md:text-6xl lg:text-3xl xl:text-5xl font-display font-black uppercase tracking-tighter transition-all duration-300 ${
                          pathname === link.href
                            ? "text-white scale-105 origin-left"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <ArrowRight
                        className={`w-6 h-6 lg:w-12 lg:h-12 text-white transition-all duration-500 flex-shrink-0 ${
                          pathname === link.href
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT ZONE: Info Cluster (Dark Background) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 100 }}
              className="w-full lg:w-[35%] bg-black flex flex-col justify-between p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Premium Noise Overlay */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

              {/* Circular Kinetic Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-3/4 opacity-10 lg:opacity-20 pointer-events-none">
                <div className="animate-spin-slow">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[6px] fill-white uppercase tracking-[1em] font-black">
                      <textPath xlinkHref="#circlePath">
                        PT Putra Handayani Trans • Luxury Bus Service • Safety &
                        Comfort • Nganjuk •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Secondary Content Cluster */}
              <div className="relative z-10 flex flex-col gap-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block mb-6">
                    Connect With Us
                  </span>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                        Quick Call
                      </p>
                      <p className="text-white font-bold text-base">
                        0813-5334-3110
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                        Email Us
                      </p>
                      <p className="text-white font-bold text-base">
                        hello@phdtrans.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                        Visit Base
                      </p>
                      <p className="text-white font-bold text-base">
                        Nganjuk, Jawa Timur
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Decorative Info */}
              <div className="relative z-10 pt-8 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                <span>Official Website © 2024</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>In Service 24/7</span>
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}
