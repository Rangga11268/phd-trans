"use client";

import {
  Shield,
  Clock,
  Star,
  Trophy,
  Users,
  HeartHandshake,
} from "lucide-react";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function About() {
  const features = useMemo(
    () => [
      {
        icon: Shield,
        title: "Keselamatan Utama",
        description:
          "Armada kami dirawat dengan standar perawatan ekstrem, menjamin 100% keamanan di setiap kilometer perjalanan Anda.",
      },
      {
        icon: Clock,
        title: "Tepat Waktu",
        description:
          "Kami menghargai setiap detik waktu liburan Anda. Jadwal keberangkatan terencana dengan presisi tinggi.",
      },
      {
        icon: Star,
        title: "Fasilitas Premium",
        description:
          "Nikmati kemewahan 'Hotel Berjalan' dengan kursi ergonomis, hiburan lengkap, dan interior mewah.",
      },
      {
        icon: Trophy,
        title: "Unit Terbaru",
        description:
          "Kami hanya mengoperasikan unit-unit terbaru (Jetbus Adiputro) untuk memastikan gengsi dan kenyamanan maksimal.",
      },
      {
        icon: Users,
        title: "Kru Profesional",
        description:
          "Dilayani oleh 'Pilot' dan crew berpengalaman, ramah, dan berseragam rapi yang siap membantu sepenuh hati.",
      },
      {
        icon: HeartHandshake,
        title: "Harga Terbaik",
        description:
          "Penawaran harga transparan dan kompetitif untuk fasilitas premium yang Anda dapatkan. Value for money juara.",
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
      className="py-12 sm:py-16 lg:py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
              The PHD Standard
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 px-4"
          >
            Mengapa Memilih <span className="text-shiny-purple">PHD Trans</span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed font-light"
          >
            Lebih dari sekadar transportasi, kami menghadirkan pengalaman
            perjalanan wisata kelas atas yang tak terlupakan.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 active"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white/[0.03] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(About);
