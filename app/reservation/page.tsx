import Image from 'next/image';
import Link from 'next/link';
import { Calendar, CheckCircle, Phone, MessageSquare } from 'lucide-react';

export default function ReservationPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/assets/img/Reservasi1.jpg"
            alt="Reservasi Bus PHD Trans"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Informasi <span className="text-primary">Reservasi</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Panduan lengkap untuk menyewa armada bus pariwisata premium kami.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Konsultasi</h3>
              <p className="text-gray-400">
                Hubungi kami untuk mendiskusikan kebutuhan perjalanan Anda, termasuk tujuan, tanggal, dan jumlah penumpang.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Penjadwalan & DP</h3>
              <p className="text-gray-400">
                Pilih armada yang sesuai dan lakukan pembayaran uang muka (DP) sebesar 30% untuk mengunci jadwal.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="bg-primary/20 p-4 rounded-full w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Pelunasan & Berangkat</h3>
              <p className="text-gray-400">
                Lakukan pelunasan H-3 sebelum keberangkatan dan nikmati perjalanan wisata yang nyaman bersama kami.
              </p>
            </div>
          </div>

          {/* Charter Info */}
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Layanan <span className="text-primary">Carter Bus</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Kami menyediakan layanan carter bus untuk berbagai keperluan, mulai dari wisata keluarga, study tour sekolah, ziarah wali, hingga perjalanan dinas perusahaan. Armada kami siap mengantar Anda ke berbagai destinasi di seluruh Indonesia.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Armada Terbaru & Terawat</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Fasilitas Lengkap (AC, Audio, TV)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Kru Berpengalaman & Ramah</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Harga Kompetitif & Transparan</span>
                  </li>
                </ul>
                <a href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all">
                  <Phone className="h-5 w-5" />
                  Pesan via WhatsApp
                </a>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image 
                  src="/assets/img/Reservasi 2.jpg"
                  alt="Interior Bus PHD Trans"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
