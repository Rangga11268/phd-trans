"use client";

import { useEffect, useCallback, useState } from "react";
import { Star } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const reviews = [
  {
    name: "Bagus Pee",
    role: "Local Guide · 26 ulasan",
    content:
      "Persewaan Bus Pariwisata Bigbus 50 seat, Medium 39 seat, Elf executive 21seat. Lengkap banget armadanya!",
    rating: 5,
  },
  {
    name: "Ahmad Rochim",
    role: "1 ulasan",
    content:
      "Bus nya guanteng poll.....saya bangga karna di Kabupaten kita ini Nganjuk ada Bus yg viral.....tapi dijamin untuk kenyamanan boleh di adu....",
    rating: 5,
  },
  {
    name: "Kingsman",
    role: "2 ulasan",
    content: "Sangat bagus. Armada premium dan pelayanan memuaskan.",
    rating: 5,
  },
  {
    name: "Agus Multimedia",
    role: "Local Guide · 81 ulasan",
    content: "Nagus tempat carter bus dn rlf. Recommended!",
    rating: 5,
  },
  {
    name: "Indra Ardiyanto",
    role: "Local Guide · 6 ulasan",
    content: "Bagus pelayan murah. Harga terjangkau untuk kualitas premium.",
    rating: 5,
  },
  {
    name: "Dannic Onlydann",
    role: "Local Guide · 150 ulasan",
    content:
      "Layanan prima 🔥🤘. Recommended banget untuk perjalanan wisata bersama keluarga.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
            Apa Kata <span className="text-shiny-purple">Mereka</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto px-4 font-light">
            Dengarkan pengalaman pelanggan kami yang telah menikmati perjalanan
            bersama PHD Trans.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-2 sm:px-4"
              >
                <div className="bg-card p-6 sm:p-8 rounded-3xl border border-card-border w-full max-w-xl mx-auto">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-text mb-6 italic leading-relaxed font-light">
                    &ldquo;{review.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-base sm:text-xl font-display">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-lg text-foreground font-bold font-display tracking-tight">
                        {review.name}
                      </h4>
                      <p className="text-[10px] sm:text-sm text-primary uppercase tracking-wider font-bold">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-card-border hover:bg-muted-text"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-text text-sm sm:text-base mb-4">
            Masih ragu? Chat kami sekarang dan buktikan sendiri!
          </p>
          <a
            href="https://wa.me/6281353343110?text=Halo%20PHD%20Trans!%20Saya%20lihat%20testimoni%20dan%20tertarik.%20Mau%20konsultasi%20dulu%20dong%20%F0%9F%99%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-lg text-sm sm:text-base"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" /> Chat dengan PHD Trans
          </a>
        </div>
      </div>
    </section>
  );
}
