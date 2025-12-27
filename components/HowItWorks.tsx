"use client";

import {
  MessageCircle,
  Bus,
  CreditCard,
  CheckCircle,
  Plane,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Konsultasi",
      description:
        "Hubungi kami via WhatsApp atau telepon untuk konsultasi kebutuhan perjalanan Anda.",
      color: "from-blue-500 to-blue-600",
      neon: "shadow-blue-500/50",
    },
    {
      number: 2,
      icon: Bus,
      title: "Pilih Armada & Tanggal",
      description:
        "Pilih unit bus yang sesuai dengan jumlah penumpang dan tentukan jadwal perjalanan.",
      color: "from-purple-500 to-purple-600",
      neon: "shadow-purple-500/50",
    },
    {
      number: 3,
      icon: CreditCard,
      title: "DP & Konfirmasi",
      description:
        "Bayar Down Payment (DP) 30% untuk mengamankan jadwal dan armada pilihan Anda.",
      color: "from-pink-500 to-pink-600",
      neon: "shadow-pink-500/50",
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Pelunasan",
      description:
        "Lunasi pembayaran maksimal 3 hari sebelum tanggal keberangkatan.",
      color: "from-green-500 to-green-600",
      neon: "shadow-green-500/50",
    },
    {
      number: 5,
      icon: Plane,
      title: "Perjalanan Dimulai",
      description:
        "Bus akan tiba sesuai jadwal. Nikmati perjalanan nyaman bersama PHD Trans!",
      color: "from-primary to-violet-600",
      neon: "shadow-primary/50",
    },
  ];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-[0.03]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Cara <span className="text-shiny-purple">Pemesanan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Proses booking yang mudah dan transparan. Hanya 5 langkah sederhana!
          </motion.p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-primary/30" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex justify-center mb-10 relative">
                    <div
                      className={`w-32 h-32 rounded-full bg-[#020617] border-4 border-[#0f0529] flex items-center justify-center relative z-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500`}
                      />
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.6)] transition-all`}
                      >
                        <div className="text-center">
                          <Icon className="h-8 w-8 text-white mx-auto mb-1 drop-shadow-md" />
                          <span className="text-white font-bold text-xs uppercase tracking-wider font-display">
                            Step {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] backdrop-blur-md p-6 rounded-3xl border border-white/5 group-hover:border-primary/30 transition-all duration-500 group-hover:bg-white/[0.05] h-full">
                    <h3 className="text-lg font-bold text-white mb-3 text-center font-display group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center font-light group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-purple-600/30" />
                )}

                <div className="flex gap-6 relative z-10">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-black/30 border border-white/10`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-1 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/10 px-3 py-1 rounded-full text-primary font-bold text-xs uppercase tracking-wider border border-white/5">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <p className="text-gray-300 mb-8 text-xl font-light">
                Siap memulai perjalanan impian Anda?
              </p>
              <a
                href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] text-lg border border-[#25D366]/50"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-lg">Mulai Konsultasi (WA)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
