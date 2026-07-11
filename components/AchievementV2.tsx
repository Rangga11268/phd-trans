"use client";

import {
  Bus,
  UserX,
  DollarSign,
  AlertTriangle,
  Clock,
  Star,
  HeartHandshake,
  ShieldCheck,
  Wrench,
  TimerReset,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    problem: "Bus tidak nyaman, badan seret",
    problemIcon: Bus,
    solution: "Body Adiputro Jetbus, kursi legrest premium",
    solutionIcon: Star,
  },
  {
    problem: "Sopir kurang ramah, bikin sebal",
    problemIcon: UserX,
    solution: "Pilot profesional, ramah, dan berseragam rapi",
    solutionIcon: HeartHandshake,
  },
  {
    problem: "Harga tidak transparan, tiba-tiba nambah",
    problemIcon: DollarSign,
    solution: "Harga jelas, no hidden fee, value for money",
    solutionIcon: ShieldCheck,
  },
  {
    problem: "Bus sering mogok di tengah jalan",
    problemIcon: AlertTriangle,
    solution: "Perawatan ekstrem tiap 5.000 km, selalu siap",
    solutionIcon: Wrench,
  },
  {
    problem: "Keberangkatan tidak tepat waktu",
    problemIcon: Clock,
    solution: "Datang awal, berangkat presisi, tepat janji",
    solutionIcon: TimerReset,
  },
];

export default function AchievementV2() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Masalah & Solusi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 px-4">
            Jangan Biarkan <span className="text-shiny-purple">Liburan</span>{" "}
            Rusak
          </h2>
          <p className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto px-4 font-light">
            Setiap masalah punya solusinya. Bersama PHD Trans, perjalanan Anda
            pasti nyaman dan berkesan.
          </p>
        </motion.div>

        {/* Strikethrough + Glowing List */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-7">
          {items.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Icon Column */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-500 shrink-0">
                      <ProblemIcon className="h-4 w-4" />
                    </div>
                    <div className="w-px h-6 bg-gradient-to-b from-red-500/20 to-primary/20" />
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <SolutionIcon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="flex-1 min-w-0 pt-1">
                    {/* Problem - strikethrough */}
                    <p className="text-base sm:text-lg text-red-400 line-through decoration-red-400/60 mb-1 leading-snug transition-all group-hover:decoration-red-400/90">
                      {item.problem}
                    </p>
                    {/* Arrow transition */}
                    <div className="flex items-center gap-2 my-1">
                      <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-primary/20" />
                      <ArrowRight className="h-3 w-3 text-primary/60" />
                    </div>
                    {/* Solution - glowing */}
                    <p className="text-base sm:text-lg text-foreground font-bold leading-snug transition-all group-hover:text-primary">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="#booking"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg text-lg"
          >
            Cari Tahu Solusinya Sekarang
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
