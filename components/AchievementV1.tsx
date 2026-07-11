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

export default function AchievementV1() {
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

        {/* Bento Puzzle Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            const isRight = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative group"
              >
                {/* Slanted Problem Tile */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-red-500/10 border border-red-500/20 ${
                    isRight ? "sm:skew-x-2" : "sm:-skew-x-2"
                  }`}
                />

                {/* Content Layer */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-3">
                  {/* Problem */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/15 text-red-500 shrink-0 mt-0.5">
                      <ProblemIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">
                        Masalah
                      </span>
                      <p className="text-sm text-muted-text leading-snug">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-primary/30 to-primary/10" />

                  {/* Solution */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0 mt-0.5">
                      <SolutionIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">
                        Solusi
                      </span>
                      <p className="text-sm text-foreground font-medium leading-snug">
                        {item.solution}
                      </p>
                    </div>
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
          className="text-center mt-10 sm:mt-14"
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
