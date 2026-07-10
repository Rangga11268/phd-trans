"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/fleet", label: "Armada" },
  { href: "/reservation", label: "Reservasi" },
  { href: "/merchandise", label: "Merch" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* FLOATING GLASS NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-[100] p-4">
        <nav
          className={`max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 h-14 md:h-16 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-card/70 backdrop-blur-xl shadow-sm border border-card-border/40"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-xl overflow-hidden border border-card-border group-hover:border-primary/50 transition-all">
              <Image
                src="/assets/img/logoPHD.jpg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display font-black text-base md:text-lg tracking-tight text-foreground">
              PHD<span className="text-primary">TRANS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-text hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-primary/5 border border-primary/20 rounded-xl -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/reservation"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-card-border text-muted-text hover:text-primary transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[95] w-[280px] bg-card border-l border-card-border shadow-2xl lg:hidden flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-card-border">
                <span className="text-sm font-bold text-muted-text uppercase tracking-wider">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-muted-text hover:text-primary transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                            isActive
                              ? "bg-primary/5 border border-primary/20 text-primary"
                              : "text-muted-text hover:bg-primary/5 hover:text-primary"
                          }`}
                      >
                        <span className="text-base font-semibold">
                          {link.label}
                        </span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer CTA */}
              <div className="p-4 border-t border-card-border">
                <Link
                  href="/reservation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all"
                >
                  Pesan Sekarang
                  <ArrowRight size={18} />
                </Link>
                <p className="text-center text-xs text-muted-text mt-4">
                  © 2024 PT Putra Handayani Trans
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
