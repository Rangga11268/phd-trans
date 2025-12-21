"use client";

import { Users, MapPin, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Achievement() {
  const [counts, setCounts] = useState({
    trips: 0,
    passengers: 0,
    satisfaction: 0,
    experience: 0,
  });

  useEffect(() => {
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
    },
    {
      icon: Users,
      value: `${counts.passengers.toLocaleString()}+`,
      label: "Penumpang Bahagia",
      color: "text-green-400",
    },
    {
      icon: Award,
      value: `${counts.satisfaction}%`,
      label: "Kepuasan Pelanggan",
      color: "text-yellow-400",
    },
    {
      icon: Clock,
      value: `${counts.experience}+`,
      label: "Tahun Pengalaman",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Dipercaya oleh <span className="text-shiny-purple">Ribuan</span>{" "}
            Pelanggan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
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
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:transform hover:scale-105 duration-300"
              >
                <div
                  className={`${stat.color} mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
