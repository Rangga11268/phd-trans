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
    <section className="py-8 sm:py-12 lg:py-16 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Masalah & Solusi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-2 px-4">
            Jangan Biarkan <span className="text-shiny-purple">Liburan</span>{" "}
            Rusak
          </h2>
          <p className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto px-4 font-light">
            Setiap masalah punya solusinya. Bersama PHD Trans, perjalanan Anda
            pasti nyaman dan berkesan.
          </p>
        </motion.div>

        {/* Strikethrough + Glowing List */}
        <div className="max-w-4xl mx-auto space-y-2 sm:space-y-2.5">
          {items.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-card/50 border border-card-border hover:border-primary/20 transition-all">
                  <div className="p-1 rounded-md bg-red-500/10 text-red-500 shrink-0">
                    <ProblemIcon className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm sm:text-base text-red-400/80 line-through decoration-red-400/50 leading-snug flex-1 min-w-0">
                    {item.problem}
                  </p>
                  <ArrowRight className="h-3.5 w-3.5 text-primary/40 shrink-0" />
                  <div className="p-1 rounded-md bg-primary/10 text-primary shrink-0">
                    <SolutionIcon className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-bold leading-snug text-right">
                    {item.solution}
                  </p>
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
          className="text-center mt-6 sm:mt-8"
        >
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-sm"
          >
            Cari Tahu Solusinya Sekarang
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
