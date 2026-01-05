"use client";

import {
  Shield,
  FileCheck,
  Heart,
  Wrench,
  Users,
  AlertTriangle,
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
    <section className="py-12 sm:py-16 lg:py-24 bg-[#0a051d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-[0.03]" />
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 px-4"
          >
            <span className="text-shiny-purple">Safety</span> First, Always
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Standar keamanan tinggi untuk memastikan setiap perjalanan Anda aman
            dan nyaman.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group hover:bg-white/[0.05] hover:-translate-y-2 duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/20 transition-colors duration-500" />

                <div className="relative z-10 text-center sm:text-left">
                  <div className="bg-gradient-to-br from-primary/20 to-purple-800/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20 mx-auto sm:mx-0">
                    <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-24 text-center px-4"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm hover:border-primary/40 transition-all shadow-[0_0_50px_rgba(112,0,255,0.15)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="p-4 bg-primary/20 rounded-full animate-pulse-slow">
                <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-white font-display font-bold text-2xl sm:text-3xl mb-2">
                  100% Keamanan Terjamin
                </h4>
                <p className="text-gray-400 text-base sm:text-lg">
                  Perjalanan Anda adalah prioritas utama kami
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
