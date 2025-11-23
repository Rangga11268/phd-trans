import { Shield, Clock, Star, Users, Target, Award, Coffee, Wrench, UserCheck, Bus } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/tentangkami.jpg"
            alt="PHD Trans Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Tentang <span className="text-shiny-purple">PHD Trans</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide animate-fade-in-up delay-100">
            "Your Comfort Is Our Priority"
          </p>
          <div className="mt-8 inline-block px-6 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm animate-fade-in-up delay-200">
            <span className="text-primary font-bold tracking-wider">LUXURY IN MOTION</span>
          </div>
        </div>
      </section>

      {/* Company Profile & CEO Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Profil Perusahaan</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">PT Putra Handayani Trans (PHD Trans)</strong> adalah penyedia layanan transportasi bus pariwisata premium yang berbasis di <span className="text-primary">Nganjuk, Jawa Timur</span>.
                </p>
                <p>
                  Dikenal dengan identitas warna ungu khas atau <span className="text-purple-400 font-semibold">"Purple Gank"</span>, kami hadir untuk memberikan pengalaman perjalanan yang tak terlupakan.
                </p>
                
                {/* Decorative Bus Vector */}
                <div className="relative my-8 flex justify-center">
                  <div className="relative w-64 h-32">
                    <Image
                      src="/assets/img/Busvector1.png"
                      alt="PHD Trans Bus"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-primary my-8">
                  <p className="italic text-lg text-gray-200 mb-4">
                    "Berawal dari hobi dan kecintaan pada bus, kami tumbuh menjadi penyedia layanan yang mengutamakan kenyamanan dan keselamatan penumpang layaknya keluarga sendiri."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden relative">
                       {/* Placeholder for Founder Image if available, otherwise generic avatar */}
                       <UserCheck className="h-full w-full p-2 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Mas Andik Ruswandrio</h4>
                      <p className="text-sm text-primary">Founder & Owner</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Filosofi Nama</p>
                    <p className="text-white font-semibold">"Handayani"</p>
                    <p className="text-xs text-gray-500 mt-1">Doa dari nama Kakek & usaha Ibunda</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400">Julukan Unit Pertama</p>
                    <p className="text-white font-semibold">"Ranger"</p>
                    <p className="text-xs text-gray-500 mt-1">Big Bus Pertama (2019)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-slate-900" />
                <span className="text-primary font-bold text-sm mb-2 block">2007</span>
                <h3 className="text-xl font-bold text-white mb-2">Awal Mula</h3>
                <p className="text-gray-400 text-sm">Dimulai oleh Ayah Mas Andik dengan unit Microbus Elf, melayani perjalanan lokal sebelum resmi menjadi pariwisata.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-slate-900" />
                <span className="text-primary font-bold text-sm mb-2 block">2015 - 2018</span>
                <h3 className="text-xl font-bold text-white mb-2">Generasi Baru</h3>
                <p className="text-gray-400 text-sm">Mas Andik mulai terlibat karena kecintaan pada dunia bus (Bus Mania). Sering mengamati bus di terminal sepulang sekolah.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-slate-900" />
                <span className="text-primary font-bold text-sm mb-2 block">2019</span>
                <h3 className="text-xl font-bold text-white mb-2">Titik Balik</h3>
                <p className="text-gray-400 text-sm">Resmi mendirikan PT Putra Handayani Trans. Lahirnya unit Big Bus pertama "Ranger" meski sempat menghadapi tantangan.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-slate-900" />
                <span className="text-primary font-bold text-sm mb-2 block">2020 - Sekarang</span>
                <h3 className="text-xl font-bold text-white mb-2">Bertahan & Bangkit</h3>
                <p className="text-gray-400 text-sm">Melewati masa pandemi dengan strategi Open Trip dan merangkul komunitas. Kini terus berekspansi dengan standar pelayanan premium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-24 bg-black/40 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Keunggulan <span className="text-shiny-purple">PHD Trans</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Standar pelayanan tinggi yang membedakan kami dari yang lain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* USP 1 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <UserCheck className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">"Pilot" Crew</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kru kami disebut PILOT, mengenakan seragam rapi untuk profesionalisme, wibawa, dan kepercayaan penumpang.
              </p>
            </div>

            {/* USP 2 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Coffee className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dilarang Haus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fasilitas Unlimited Refill (Kopi, Teh, Air Putih) di dalam bus. Nikmati sensasi "Kafe Berjalan" sepanjang perjalanan.
              </p>
            </div>

            {/* USP 3 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Bus className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unit Adiputro</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Loyal menggunakan bodi Jetbus buatan Adiputro (Malang) yang menjamin kenyamanan, keamanan, dan gengsi tinggi.
              </p>
            </div>

            {/* USP 4 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2">
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Wrench className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Perawatan Ekstrem</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cek rutin dan servis berkala setiap 5.000 KM (lebih cepat dari standar) untuk memastikan performa armada selalu prima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-secondary to-primary p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Merasakan Pengalaman Berbeda?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan penumpang yang telah menikmati kenyamanan dan kemewahan layanan PHD Trans.
              </p>
              <a 
                href="/reservation" 
                className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Sewa Sekarang
              </a>
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
