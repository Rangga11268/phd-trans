'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How do I book a ticket?",
      answer: "You can book a ticket directly through our website by filling out the contact form, or by contacting us via WhatsApp or phone."
    },
    {
      question: "What facilities are available on the bus?",
      answer: "Our buses are equipped with AC, reclining seats, USB charging ports, free Wi-Fi, and a toilet for your convenience."
    },
    {
      question: "Can I change my travel schedule?",
      answer: "Yes, schedule changes are allowed up to 24 hours before departure, subject to seat availability."
    },
    {
      question: "Is there a refund policy?",
      answer: "Refunds are available for cancellations made at least 48 hours before departure, with a small cancellation fee."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

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
