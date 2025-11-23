'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingCart, Clock, Check, Play, AlertCircle, ChevronRight, Star } from 'lucide-react';

export default function MerchandisePage() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [price, setPrice] = useState(120000);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPreOrderActive, setIsPreOrderActive] = useState(true);

  // Pre-Order Configuration
  const PRE_ORDER_END = new Date('2025-11-23T23:59:59').getTime();
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
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let basePrice = 120000;
    if (selectedSize === 'XXL') basePrice += 10000;
    if (selectedSize === 'XXXL') basePrice += 20000;
    setPrice(basePrice);
  }, [selectedSize]);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <main className="pt-20 min-h-screen bg-slate-900 pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/assets/img/Merch1.jpg"
            alt="PHD Trans Official Merch"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full px-6 py-2 mb-6 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Official Merchandise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            Looking Elegant<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Without Being Simple</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            The Royal Decker Edition. Didesain khusus untuk Anda yang mengutamakan kenyamanan dan gaya.
          </p>
          
          {/* Countdown Timer */}
          {isPreOrderActive ? (
            <div className="flex justify-center gap-4 md:gap-8 animate-fade-in-up delay-300">
              {[
                { label: 'Hari', value: timeLeft.days },
                { label: 'Jam', value: timeLeft.hours },
                { label: 'Menit', value: timeLeft.minutes },
                { label: 'Detik', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[80px] md:min-w-[100px]">
                  <div className="text-2xl md:text-4xl font-bold text-primary font-mono">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 inline-block animate-fade-in-up delay-300">
              <h3 className="text-2xl font-bold text-red-400">Pre-Order Telah Ditutup</h3>
              <p className="text-gray-300 mt-2">Nantikan batch selanjutnya!</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 group">
                <Image 
                  src="/assets/img/Merch1.jpg"
                  alt="Kaos Depan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white font-bold px-4 py-2 rounded-full shadow-lg">
                  Best Seller
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['/assets/img/Merch2.jpg', '/assets/img/Merch3.jpg', '/assets/img/Merch4.jpg'].map((src, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-primary transition-all">
                    <Image 
                      src={src}
                      alt={`Detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Video Preview */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mt-6 group cursor-pointer">
                <video 
                  src="/assets/video/Merch.mp4" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info & Specs */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">PHD Trans Official T-shirt</h2>
                <p className="text-xl text-primary font-medium">The Royal Decker Edition</p>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-white">{formatPrice(price)}</span>
                <span className="text-gray-500 line-through">Rp 150.000</span>
                <span className="bg-green-500/20 text-green-400 text-sm font-bold px-3 py-1 rounded-full">Hemat 20%</span>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  Spesifikasi Premium
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Bahan:</strong> Cotton Combed 30s Coolbreeze (100%) - Adem & Nyaman.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Sablon:</strong> Plastisol & Highdensity - Awet & Detail Tajam.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Desain:</strong> Logo PHD Trans Elegan (Depan & Belakang).</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span><strong>Bonus:</strong> Free 3 pcs Sticker Exclusive.</span>
                  </li>
                </ul>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-white font-bold mb-4">Pilih Ukuran:</h3>
                <div className="flex flex-wrap gap-3">
                  {['M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-xl font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-110'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  *Ukuran XXL (+10k), XXXL (+20k)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {isPreOrderActive ? (
                  <a 
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group"
                  >
                    <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
                    Pesan Sekarang (Pre-Order)
                  </a>
                ) : (
                  <button disabled className="w-full bg-gray-700 text-gray-400 font-bold text-lg py-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-3">
                    <Clock className="h-6 w-6" />
                    Pre-Order Ditutup
                  </button>
                )}
                <p className="text-center text-gray-500 text-sm">
                  Estimasi Produksi: 25 November 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-lg border-t border-white/10 md:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">Harga Mulai</p>
            <p className="text-lg font-bold text-white">{formatPrice(price)}</p>
          </div>
          {isPreOrderActive ? (
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Pesan <ChevronRight className="h-4 w-4" />
            </a>
          ) : (
            <button disabled className="bg-gray-700 text-gray-400 font-bold px-6 py-3 rounded-lg">
              Ditutup
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
