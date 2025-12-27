"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Music,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={item} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(112,0,255,0.3)]">
                <Image
                  src="/assets/img/logoPHD.jpg"
                  alt="PHD Trans Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold tracking-tighter">
                <span className="text-shiny">PHD</span>{" "}
                <span className="text-shiny-purple">Trans</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Layanan bus pariwisata premium di Nganjuk. Nikmati kenyamanan,
              keamanan, dan kemewahan di setiap perjalanan wisata Anda bersama
              armada modern kami.
            </p>
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-bold text-xs tracking-widest">
                #PurpleGank
              </span>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={item}>
            <h4 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  Jl. Raya Nganjuk No. 123, Nganjuk, Jawa Timur, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">
                  0813-5334-3110
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">
                  info@phdtrans.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={item}>
            <h4 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Tentang Kami", href: "/about" },
                { name: "Armada", href: "/fleet" },
                { name: "Reservasi", href: "/reservation" },
                { name: "Merchandise", href: "/merchandise" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social Column */}
          <motion.div variants={item}>
            <h4 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              Ikuti Kami
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Dapatkan info terbaru dan promo menarik dari kami.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/phd_trans/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all text-gray-400 group border border-white/5 hover:border-transparent hover:shadow-lg hover:shadow-purple-500/30"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-gray-400 group border border-white/5 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/30"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.tiktok.com/@phdtrans"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-xl hover:bg-black hover:text-white transition-all text-gray-400 group border border-white/5 hover:border-transparent hover:shadow-lg hover:shadow-gray-800/50"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-semibold">PHD Trans</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
