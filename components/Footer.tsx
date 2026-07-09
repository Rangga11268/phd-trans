"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Music,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-card text-foreground pt-20 pb-6 border-t border-card-border relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-[0.03]">
        <h1 className="font-display font-black text-[25vw] text-foreground leading-[0.7] text-center tracking-tighter">
          PHD
        </h1>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* BIG CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
              Siap Berwisata?
            </h2>
            <p className="text-muted-text">Mulai petualangan Anda bersama PHD Trans</p>
          </div>
          <a
            href="https://wa.me/6281353343110"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Pesan Sekarang
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        <div className="border-t border-card-border pt-12 mb-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Brand */}
            <motion.div variants={item} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-card-border">
                  <Image
                    src="/assets/img/logoPHD.jpg"
                    alt="PHD Trans Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-display font-bold text-foreground">
                  PHD<span className="text-primary">TRANS</span>
                </span>
              </div>
              <p className="text-muted-text text-sm leading-relaxed max-w-xs">
                Layanan bus pariwisata premium di Nganjuk. Armada Jetbus Adiputro terbaru dengan standar kenyamanan tertinggi.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/phd_trans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.tiktok.com/@phdtrans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-muted-text hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                  aria-label="TikTok"
                >
                  <Music size={16} />
                </a>
              </div>
            </motion.div>

            {/* Armada */}
            <motion.div variants={item}>
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-widest">
                Armada
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Big Bus 50+1 TL Seat", href: "/fleet" },
                  { name: "Big Bus 32 Legrest", href: "/fleet" },
                  { name: "Medium Bus Jetbus 5", href: "/fleet" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-text hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Navigasi */}
            <motion.div variants={item}>
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-widest">
                Navigasi
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Beranda", href: "/" },
                  { name: "Tentang", href: "/about" },
                  { name: "Reservasi", href: "/reservation" },
                  { name: "Merchandise", href: "/merchandise" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-text hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Kontak */}
            <motion.div variants={item}>
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-widest">
                Kontak
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-muted-text">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Nganjuk, Jawa Timur, Indonesia</span>
                </li>
                <li className="flex items-center gap-3 text-muted-text">
                  <Phone size={16} className="text-primary shrink-0" />
                  <a href="https://wa.me/6281353343110" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    0813-5334-3110
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-text">
                  <Mail size={16} className="text-primary shrink-0" />
                  <a href="mailto:info@phdtrans.com" className="hover:text-primary transition-colors">
                    info@phdtrans.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-card-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-text uppercase tracking-widest font-bold"
        >
          <span>
            &copy; {new Date().getFullYear()} PT Putra Handayani Trans. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowUp size={12} />
              Back to Top
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
