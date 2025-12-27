"use client";

import { Users, MapPin, Award, Clock } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function Achievement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    trips: 0,
    passengers: 0,
    satisfaction: 0,
    experience: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const targets = {
      trips: 500,
      passengers: 10000,
      satisfaction: 98,
      experience: 15,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        trips: Math.floor(targets.trips * progress),
        passengers: Math.floor(targets.passengers * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        experience: Math.floor(targets.experience * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: MapPin,
      value: `${counts.trips}+`,
      label: "Perjalanan Sukses",
      color: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
    {
      icon: Users,
      value: `${counts.passengers.toLocaleString()}+`,
      label: "Penumpang Bahagia",
      color: "text-green-400",
      glow: "shadow-green-500/20",
    },
    {
      icon: Award,
      value: `${counts.satisfaction}%`,
      label: "Kepuasan Pelanggan",
      color: "text-yellow-400",
      glow: "shadow-yellow-500/20",
    },
    {
      icon: Clock,
      value: `${counts.experience}+`,
      label: "Tahun Pengalaman",
      color: "text-primary",
      glow: "shadow-purple-500/20",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[80px]" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 px-4 tracking-tight">
            Dipercaya oleh <span className="text-shiny-purple">Ribuan</span>{" "}
            Pelanggan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 font-sans border-t border-white/5 pt-4">
            Angka-angka yang membuktikan komitmen kami dalam memberikan layanan
            terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group hover:-translate-y-2 duration-500 relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 p-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700`}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`${stat.color} mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block p-4 rounded-2xl bg-white/5 ${stat.glow} shadow-lg`}
                  >
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
