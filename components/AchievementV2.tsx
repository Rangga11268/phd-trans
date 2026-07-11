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

        {/* Ticket Style List */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {items.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                {/* Ticket Background */}
                <div className="relative bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  {/* Top ticket tear-off circles */}
                  <div className="absolute -top-2 left-8 sm:left-12 w-4 h-4 rounded-full bg-surface" />
                  <div className="absolute -top-2 right-8 sm:right-12 w-4 h-4 rounded-full bg-surface" />
                  
                  {/* Content Row */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Problem Side */}
                    <div className="flex-1 p-4 sm:p-5 flex items-center gap-3 relative">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-500 shrink-0">
                        <ProblemIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">
                          Masalah
                        </span>
                        <p className="text-sm sm:text-base text-red-400/80 line-through decoration-red-400/50 leading-snug">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    {/* Perforated Divider - Visible on desktop */}
                    <div className="relative flex items-center">
                      <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-card-border" />
                      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 -ml-4 z-10">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Solution Side */}
                    <div className="flex-1 p-4 sm:p-5 flex items-center gap-3 relative">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <SolutionIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">
                          Solusi
                        </span>
                        <p className="text-sm sm:text-base text-foreground font-bold leading-snug">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom ticket tear-off circles */}
                  <div className="absolute -bottom-2 left-8 sm:left-12 w-4 h-4 rounded-full bg-surface" />
                  <div className="absolute -bottom-2 right-8 sm:right-12 w-4 h-4 rounded-full bg-surface" />
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
