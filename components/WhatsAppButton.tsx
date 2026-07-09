"use client";

import { HelpCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.3);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/6281353343110?text=Halo%20PHD%20Trans!%20Saya%20mau%20konsultasi%20pesan%20bus%20untuk%20perjalanan.%20Mohon%20bantuannya%20%F0%9F%99%8F"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-background/80 backdrop-blur-md border border-card-border rounded-xl px-3 py-1.5 text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        <HelpCircle className="h-3 w-3 inline mr-1" /> Ada yang bisa kami bantu?
      </div>
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center justify-center relative border border-white/20">
        <WhatsAppIcon className="h-7 w-7" />
      </div>
    </a>
  );
}
