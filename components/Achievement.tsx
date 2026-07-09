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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Achievement() {
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4 sm:space-y-5"
        >
          {items.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 items-stretch"
              >
                {/* Problem Card */}
                <div className="bg-red-500/5 p-4 sm:p-5 rounded-2xl border border-red-500/15 hover:border-red-500/30 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0">
                      <ProblemIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-0.5">
                        Masalah
                      </span>
                      <p className="text-sm sm:text-base text-foreground font-medium leading-snug">
                        {item.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="hidden sm:flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Solution Card */}
                <div className="bg-primary/5 p-4 sm:p-5 rounded-2xl border border-primary/20 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      <SolutionIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">
                        Solusi
                      </span>
                      <p className="text-sm sm:text-base text-foreground font-medium leading-snug">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            href="#booking"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.5)] text-lg"
          >
            Cari Tahu Solusinya Sekarang
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
