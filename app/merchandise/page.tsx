"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Clock,
  Check,
  Play,
  AlertCircle,
  ChevronRight,
  Star,
} from "lucide-react";

export default function MerchandisePage() {
  const [selectedSize, setSelectedSize] = useState("L");
  const [price, setPrice] = useState(120000);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPreOrderActive, setIsPreOrderActive] = useState(true);

  const PRE_ORDER_END = new Date("2025-11-23T23:59:59").getTime();
  const GOOGLE_FORM_URL = "https://forms.gle/c6CSkWkxQ4Wi5dgJA";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = PRE_ORDER_END - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsPreOrderActive(false);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsPreOrderActive(true);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let basePrice = 120000;
    if (selectedSize === "XXL") basePrice += 10000;
    if (selectedSize === "XXXL") basePrice += 20000;
    setPrice(basePrice);
  }, [selectedSize]);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="pt-20 min-h-screen bg-[#020617] pb-24 md:pb-0">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/Merch1.webp"
            alt="PHD Trans Official Merch"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-900/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full px-6 py-2 mb-6 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              Official Merchandise
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            Looking Elegant
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Without Being Simple
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200 font-sans font-light">
            The Royal Decker Edition. Didesain khusus untuk Anda yang
            mengutamakan kenyamanan dan gaya.
          </p>

          {isPreOrderActive ? (
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-8 animate-fade-in-up delay-300">
              {[
                { label: "Hari", value: timeLeft.days },
                { label: "Jam", value: timeLeft.hours },
                { label: "Menit", value: timeLeft.minutes },
                { label: "Detik", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[120px]"
                >
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary font-mono shadow-purple-500/50 drop-shadow-[0_0_10px_rgba(112,0,255,0.5)]">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-2 font-bold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 inline-block animate-fade-in-up delay-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-500 font-display">
                Pre-Order Telah Ditutup
              </h3>
              <p className="text-gray-300 mt-2">Nantikan batch selanjutnya!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#020617] relative">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 group">
                <Image
                  src="/assets/img/Merch1.webp"
                  alt="Kaos Depan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-purple-600 text-white font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(112,0,255,0.4)] z-10">
                  Best Seller
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {[
                  "/assets/img/Merch2.webp",
                  "/assets/img/Merch3.webp",
                  "/assets/img/Merch4.webp",
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-primary transition-all hover:scale-105 duration-300"
                  >
                    <Image
                      src={src}
                      alt={`Detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mt-6 group cursor-pointer shadow-lg hover:shadow-primary/20 transition-all">
                <video
                  src="/assets/video/Merch.mp4"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/80">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
                  PHD Trans Official T-shirt
                </h2>
                <p className="text-xl sm:text-2xl text-primary font-medium tracking-wide">
                  The Royal Decker Edition
                </p>
              </div>

              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 md:gap-6 mb-10 pb-10 border-b border-white/10">
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
                  {formatPrice(price)}
                </span>
                <span className="text-lg sm:text-xl text-gray-500 line-through font-sans">
                  Rp 150.000
                </span>
                <span className="bg-green-500/20 text-green-400 text-sm sm:text-base font-bold px-4 py-1.5 rounded-full border border-green-500/30">
                  Hemat 20%
                </span>
              </div>

              <div className="bg-white/[0.03] rounded-3xl p-8 border border-white/10 mb-10 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  Spesifikasi Premium
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-gray-300">
                    <div className="bg-primary/20 p-1.5 rounded-full mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-lg">
                      <strong>Bahan:</strong> Cotton Combed 30s Coolbreeze
                      (100%) - Adem & Nyaman.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300">
                    <div className="bg-primary/20 p-1.5 rounded-full mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-lg">
                      <strong>Sablon:</strong> Plastisol & Highdensity - Awet &
                      Detail Tajam.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300">
                    <div className="bg-primary/20 p-1.5 rounded-full mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-lg">
                      <strong>Desain:</strong> Logo PHD Trans Elegan (Depan &
                      Belakang).
                    </span>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300">
                    <div className="bg-primary/20 p-1.5 rounded-full mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-lg">
                      <strong>Bonus:</strong> Free 3 pcs Sticker Exclusive.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm text-gray-400">
                  Pilih Ukuran
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["M", "L", "XL", "XXL", "XXXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl font-bold text-lg font-display transition-all ${
                        selectedSize === size
                          ? "bg-primary text-white shadow-[0_0_20px_rgba(112,0,255,0.4)] scale-110 border-2 border-primary"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  *Ukuran XXL (+10k), XXXL (+20k)
                </p>
              </div>

              <div className="space-y-6">
                {isPreOrderActive ? (
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-primary to-purple-800 text-white font-bold text-xl py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] transition-all flex items-center justify-center gap-4 group transform hover:scale-[1.02]"
                  >
                    <ShoppingCart className="h-7 w-7 group-hover:animate-bounce" />
                    Pesan Sekarang (Pre-Order)
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-800 text-gray-500 font-bold text-xl py-5 rounded-2xl cursor-not-allowed flex items-center justify-center gap-4 border border-white/5"
                  >
                    <Clock className="h-7 w-7" />
                    Pre-Order Ditutup
                  </button>
                )}
                <p className="text-center text-gray-500 text-sm font-medium">
                  Estimasi Produksi: 25 November 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#020617]/95 backdrop-blur-xl border-t border-primary/20 md:hidden z-50 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Harga Mulai
            </p>
            <p className="text-xl font-display font-bold text-white">
              {formatPrice(price)}
            </p>
          </div>
          {isPreOrderActive ? (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-8 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(112,0,255,0.3)]"
            >
              Pesan <ChevronRight className="h-5 w-5" />
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-800 text-gray-500 font-bold px-8 py-3 rounded-xl"
            >
              Ditutup
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
