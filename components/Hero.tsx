"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Bus, MapPin, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Bus, value: "500+", label: "Perjalanan" },
  { icon: Users, value: "10rb+", label: "Penumpang" },
  { icon: Star, value: "4.9", label: "Rating" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f7fa]">
      {/* Cinematic Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/assets/img/phdbus1.webp"
          alt="PHD Trans Premium Bus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 sm:gap-4 px-4 py-2 rounded-full bg-white/80 border border-gray-200 backdrop-blur-xl shadow-sm mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              <span className="text-gray-900 font-bold">4.9</span> dari 500+ ulasan
            </span>
            <span className="hidden sm:inline w-px h-4 bg-gray-200" />
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin className="w-3 h-3 text-primary" />
              Nganjuk, Jawa Timur
            </span>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Text & CTA */}
            <div className="flex flex-col">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 mb-4 sm:mb-6 w-fit"
              >
                <Bus className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.15em]">
                  Bus Pariwisata Premium
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight mb-4 sm:mb-6"
              >
                Perjalanan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  First Class
                </span>
                <br />
                Dimulai dari Sini
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-gray-500 max-w-lg leading-relaxed mb-6 sm:mb-8"
              >
                Armada Jetbus Adiputro terbaru dengan standar kenyamanan tertinggi
                di Nganjuk. Siap menemani setiap momen spesial Anda.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
                >
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/6281353343110?text=Halo%20PHD%20Trans!%20Saya%20mau%20konsultasi%20pesan%20bus%20untuk%20perjalanan.%20Mohon%20bantuannya%20%F0%9F%99%8F"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-gray-200 text-gray-700 font-bold text-sm sm:text-base rounded-2xl hover:border-primary/30 hover:text-primary transition-all shadow-sm hover:shadow-md"
                >
                  Konsultasi Dulu
                </a>
              </motion.div>
            </div>

            {/* Right: Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:flex flex-col gap-4"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl p-5 pl-6 flex items-center gap-5 border border-gray-200 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 p-4 rounded-2xl bg-white border border-gray-200 border-dashed hover:border-primary/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-500">Armada siap berangkat</span>
                  </div>
                  <span className="text-xs text-primary font-bold">Available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden sm:flex flex-col items-center mt-12 sm:mt-16 lg:mt-20"
          >
            <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-2 font-mono">
              Scroll untuk lihat selengkapnya
            </span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-4 py-3 shadow-sm"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" />
                <span>
                  <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                  <span className="text-[10px] text-gray-500 ml-1">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
