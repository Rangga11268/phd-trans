"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const rafId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/fleet", label: "Armada" },
    { href: "/reservation", label: "Reservasi" },
    { href: "/merchandise", label: "Merch" },
  ];

  return (
    <>
      {/* Desktop Floating Capsule */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-secondary/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(112,0,255,0.1)] rounded-full py-3 px-6"
              : "bg-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors">
                <Image
                  src="/assets/img/logoPHD.jpg"
                  alt="PHD Trans"
                  fill
                  className="object-cover"
                />
              </div>
              <span
                className={`font-display font-bold text-xl tracking-tight transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                PHD<span className="text-primary">TRANS</span>
              </span>
            </Link>

            {/* Links */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-2 text-sm font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_rgba(112,0,255,0.4)]"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
            >
              Pesan
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 w-full z-50 px-4 py-4">
        <div className="flex items-center justify-between bg-secondary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-white/20">
              <Image
                src="/assets/img/logoPHD.jpg"
                alt="PHD Trans"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              PHD<span className="text-primary">TRANS</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white active:scale-95 transition-transform"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-[#0a0521] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 p-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`p-4 rounded-xl text-center font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-primary/20 text-primary border border-primary/20"
                        : "hover:bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 p-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors"
                >
                  Pesan Sekarang
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
