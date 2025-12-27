"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281353343110?text=Halo,%20saya%20tertarik%20dengan%20layanan%20PHD%20Trans"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center justify-center relative border border-white/20">
        <MessageCircle className="h-7 w-7 fill-white" />
      </div>
    </a>
  );
}
