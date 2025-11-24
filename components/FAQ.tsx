'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { memo } from 'react';

function FAQ() {
  const faqs = useMemo(() => [
    {
      question: "Bagaimana cara memesan bus?",
      answer: "Anda dapat memesan dengan menghubungi kami melalui WhatsApp, telepon, atau mengisi formulir di halaman Kontak. Tim kami akan segera merespons."
    },
    {
      question: "Fasilitas apa saja yang tersedia?",
      answer: "Armada kami dilengkapi dengan AC, kursi reclining, sistem audio/karaoke, TV, dan port USB charger. Beberapa kelas juga memiliki toilet dan bantal/selimut."
    },
    {
      question: "Apakah harga sudah termasuk BBM dan kru?",
      answer: "Ya, harga sewa kami umumnya sudah termasuk BBM dan jasa pengemudi serta asisten. Biaya tol, parkir, dan makan kru biasanya ditanggung penyewa."
    },
    {
      question: "Berapa minimal uang muka (DP) untuk booking?",
      answer: "Kami memerlukan uang muka sebesar 30% untuk mengamankan jadwal pemesanan Anda. Pelunasan dapat dilakukan sebelum keberangkatan."
    }
  ], []);

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Pertanyaan Umum</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default memo(FAQ);

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-400 border-t border-white/10 bg-black/20">
          {answer}
        </div>
      )}
    </div>
  );
}
