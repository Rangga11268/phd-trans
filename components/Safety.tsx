"use client";

import {
  Shield,
  FileCheck,
  Heart,
  Wrench,
  Users,
  AlertTriangle,
  Lock,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Safety() {
  const features = [
    {
      icon: FileCheck,
      title: "Sertifikat Kelayakan",
      description:
        "Semua armada memiliki sertifikat uji kelayakan kendaraan dari Dishub.",
    },
    {
      icon: Users,
      title: "Driver Profesional",
      description:
        "SIM A Umum + pelatihan keselamatan berkala untuk semua pilot kami.",
    },
    {
      icon: Heart,
      title: "Asuransi Perjalanan",
      description:
        "Perlindungan penumpang dengan asuransi kecelakaan selama perjalanan.",
    },
    {
      icon: Wrench,
      title: "Perawatan Rutin",
      description:
        "Servis ekstrem setiap 5.000 KM untuk memastikan performa prima.",
    },
    {
      icon: AlertTriangle,
      title: "Safety Equipment",
      description:
        "Fire extinguisher, emergency exit, dan first aid kit di setiap unit.",
    },
    {
      icon: Shield,
      title: "GPS Tracking",
      description: "Monitoring real-time untuk keamanan perjalanan Anda.",
    },
  ];

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
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Keamanan & Kepercayaan
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 px-4"
          >
            <span className="text-shiny-purple">Safety</span> First, Always
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Ini jaminan kami agar Anda bisa tidur nyenyak selama perjalanan.
            Karena keselamatan bukan tawar-menawar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Big Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <div className="p-6 sm:p-8 rounded-[3rem] bg-primary/5 border border-primary/10 inline-block mb-6">
              <Shield className="h-16 w-16 sm:h-20 sm:w-20 text-primary" />
            </div>
            <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Setiap armada PHD Trans melewati pemeriksaan ketat dan standar
              keselamatan tertinggi. Karena Anda layak yang terbaik.
            </p>
          </motion.div>

          {/* Right: Timeline List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative pl-8 sm:pl-10"
          >
            {/* Timeline line */}
            <div className="absolute left-[17px] sm:left-[21px] top-2 bottom-2 w-0.5 bg-primary/20" />

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 sm:-left-10 top-1 w-[34px] sm:w-[42px] flex justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pl-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-24 text-center px-4"
        >
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-3xl p-8 sm:p-12 hover:border-primary/40 transition-all shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-gray-900 font-display font-bold text-2xl sm:text-3xl mb-2">
                  100% Keamanan Terjamin
                </h4>
                <p className="text-gray-500 text-base sm:text-lg mb-4">
                  Perjalanan Anda adalah prioritas utama kami
                </p>
                <a
                  href="https://wa.me/6281353343110?text=Halo%20PHD%20Trans!%20Saya%20mau%20pesan%20bus%20dan%20mau%20tanya%20soal%20keamanan%20armada.%20Mohon%20infonya%20%F0%9F%99%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg text-sm"
                >
                  <Lock className="h-4 w-4" /> Pesan Sekarang, Perjalanan Terjamin
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
