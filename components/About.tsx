"use client";

import {
  Shield,
  Clock,
  Star,
  Trophy,
  Users,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function About() {
  const features = useMemo(
    () => [
      {
        icon: Shield,
        title: "Keselamatan Utama",
        description:
          "100% inspeksi sebelum jalan. Gak ada cerita mogok di tengah jalan atau kendala teknis yang bikin repot.",
      },
      {
        icon: Clock,
        title: "Tepat Waktu",
        description:
          "Datang lebih awal, berangkat tepat waktu. Kami benci bikin orang nunggu — komitmen yang selalu kami jaga.",
      },
      {
        icon: Star,
        title: "Fasilitas Premium",
        description:
          "Bukan bus biasa. Setiap unit pakai body Adiputro Jetbus — standar karoseri tertinggi di Indonesia. Kursi ergonomis, karaoke, TV, dispenser.",
      },
      {
        icon: Trophy,
        title: "Unit Terbaru",
        description:
          "Bukan bus sisaan. Kami hanya pakai unit-unit terbaru Jetbus Adiputro — biar gengsi dan kenyamanan tetap maksimal.",
      },
      {
        icon: Users,
        title: "Kru Profesional",
        description:
          "Bukan supir kaleng-kaleng. 'Pilot' kami terlatih, ramah, dan berseragam rapi — siap bikin perjalanan Anda berkesan.",
      },
      {
        icon: HeartHandshake,
        title: "Harga Terbaik",
        description:
          "Harga bersaing tanpa potong kualitas. Transparan, no hidden fee, dan dijamin worth it untuk pengalaman premium.",
      },
    ],
    []
  );

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 bg-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/5 border border-primary/20"
          >
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
              The PHD Standard
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 px-4"
          >
            Mengapa Memilih <span className="text-shiny-purple">PHD Trans</span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-text max-w-3xl mx-auto px-4 leading-relaxed font-light"
          >
            Tidak ingin perjalanan liburan Anda rusak karena bus yang tidak nyaman?
            Tenang, PHD Trans hadir dengan standar premium yang siap memanjakan Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6">
              <Image
                src="/assets/img/logonobg.webp"
                alt="PHD Trans Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
                6 Alasan Memilih Kami
              </span>
            </div>
            <p className="text-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
              Kami gak cuma jual bus. Kami jual ketenangan pikiran, kenyamanan
              sepanjang jalan, dan pengalaman yang bakal Anda kenang.
            </p>
          </motion.div>

          {/* Right: Feature List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative pl-10 group"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-card-border group-hover:bg-primary transition-colors" />

                  {/* Icon */}
                  <div className="absolute left-[-13px] top-0 w-[26px] h-[26px] rounded-full bg-card border-2 border-card-border group-hover:border-primary transition-colors flex items-center justify-center">
                    <Icon className="h-3 w-3 text-primary" />
                  </div>

                  <div className="pl-4 pb-6">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-text leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
