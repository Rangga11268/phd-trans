"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara melakukan reservasi bus?",
    answer:
      "Anda dapat melakukan reservasi dengan mudah melalui WhatsApp kami. Cukup klik tombol 'Hubungi Kami', sampaikan kebutuhan perjalanan Anda (tanggal, tujuan, jumlah penumpang), dan tim kami akan memberikan penawaran terbaik.",
  },
  {
    question: "Apa saja fasilitas yang tersedia di dalam bus?",
    answer:
      "Seluruh armada PHD Trans dilengkapi dengan fasilitas premium: AC Luxury, Reclining Seats 2-2, LED TV & Karaoke System, Sound System Premium, Bantal & Selimut (untuk perjalanan jauh), Dispenser, dan Coolbox, serta Port USB Charger di setiap seat.",
  },
  {
    question: "Apakah harga sewa sudah termasuk biaya operasional?",
    answer:
      "Harga sewa yang kami tawarkan umumnya sudah termasuk BBM dan Jasa Crew (Driver & Co-Driver). Namun, biaya parkir, tol, tiket masuk wisata, penyeberangan, dan tips/makan crew biasanya menjadi tanggung jawab penyewa, kecuali adakesepakatan paket *All-In*.",
  },
  {
    question: "Berapa minimal uang muka (DP) yang harus dibayarkan?",
    answer:
      "Untuk mengamankan jadwal dan unit pilihan Anda, kami mensyaratkan Down Payment (DP) minimal sebesar 30% dari total harga sewa. Pelunasan dapat dilakukan maksimal H-3 sebelum keberangkatan.",
  },
  {
    question: "Apakah bisa melakukan survei armada sebelum booking?",
    answer:
      "Tentu saja! Kami sangat menyarankan calon penyewa untuk melihat langsung unit kami di garasi untuk memastikan kualitas dan kenyamanan. Silakan buat janji temu dengan tim kami sebelum berkunjung.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-card overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-primary font-bold text-xs tracking-widest uppercase">
              Pusat Bantuan
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Pertanyaan <span className="text-shiny-purple">Umum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-text text-lg leading-relaxed font-light"
          >
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai
            layanan kami.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-primary/5 border-primary/50 shadow-lg"
          : "bg-card border-card-border hover:border-card-border/60"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
      >
        <span
          className={`text-lg font-bold font-display transition-colors duration-300 ${
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white rotate-180"
              : "bg-surface text-muted-text group-hover:bg-primary/10"
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2">
              <div className="h-px w-full bg-card-border mb-4" />
              <p className="text-muted-text leading-relaxed font-light text-base">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
