import {
  Shield,
  Clock,
  Star,
  Users,
  Target,
  Award,
  Coffee,
  Wrench,
  UserCheck,
  Bus,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#f5f7fa] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/tentangkami.webp"
            alt="PHD Trans Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
            Tentang <span className="text-shiny-purple">PHD Trans</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide font-sans">
            "Your Comfort Is Our Priority"
          </p>
          <div className="mt-8 inline-block px-8 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-bold tracking-[0.2em] text-sm">
              LUXURY IN MOTION
            </span>
          </div>
        </div>
      </section>

      {/* Company Profile & CEO Message */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Profil Perusahaan
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary rounded-full" />
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  <strong className="text-gray-900 font-medium">
                    PT Putra Handayani Trans (PHD Trans)
                  </strong>{" "}
                  adalah penyedia layanan transportasi bus pariwisata premium
                  yang berbasis di{" "}
                  <span className="text-primary font-semibold">
                    Nganjuk, Jawa Timur
                  </span>
                  .
                </p>
                <p>
                  Dikenal dengan identitas warna ungu khas atau{" "}
                  <span className="text-primary font-display font-bold">
                    "Purple Gank"
                  </span>
                  , kami hadir untuk memberikan pengalaman perjalanan yang tak
                  terlupakan.
                </p>

                {/* Decorative Bus Vector */}
                <div className="relative my-10 flex justify-center group">
                  <div className="relative w-80 h-40 transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/assets/img/Busvector1.png"
                      alt="PHD Trans Bus"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-primary/50 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  <p className="italic text-xl text-gray-700 mb-6 font-serif leading-relaxed relative z-10">
                    "Berawal dari hobi dan kecintaan pada bus, kami tumbuh
                    menjadi penyedia layanan yang mengutamakan kenyamanan dan
                    keselamatan penumpang layaknya keluarga sendiri."
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative border-2 border-primary shadow-lg p-1">
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                        <UserCheck className="h-6 w-6 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg font-display">
                        Mas Andik Ruswandrio
                      </h4>
                      <p className="text-sm text-primary font-medium tracking-wide">
                        Founder & Owner
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary/30 transition-colors">
                    <p className="text-sm text-gray-500 mb-1">Filosofi Nama</p>
                    <p className="text-gray-900 font-bold text-xl font-display">
                      "Handayani"
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Doa dari nama Kakek & usaha Ibunda
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary/30 transition-colors">
                    <p className="text-sm text-gray-500 mb-1">
                      Julukan Unit Pertama
                    </p>
                    <p className="text-gray-900 font-bold text-xl font-display">
                      "Ranger"
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Big Bus Pertama (2019)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 sm:pl-12 border-l border-gray-200 space-y-16 py-8">
              {[
                {
                  year: "2007",
                  title: "Awal Mula",
                  desc: "Dimulai oleh Ayah Mas Andik dengan unit Microbus Elf, melayani perjalanan lokal sebelum resmi menjadi pariwisata.",
                },
                {
                  year: "2015 - 2018",
                  title: "Generasi Baru",
                  desc: "Mas Andik mulai terlibat karena kecintaan pada dunia bus (Bus Mania). Sering mengamati bus di terminal sepulang sekolah.",
                },
                {
                  year: "2019",
                  title: "Titik Balik",
                  desc: "Resmi mendirikan PT Putra Handayani Trans. Lahirnya unit Big Bus pertama 'Ranger' meski sempat menghadapi tantangan.",
                },
                {
                  year: "2020 - Sekarang",
                  title: "Bertahan & Bangkit",
                  desc: "Melewati masa pandemi dengan strategi Open Trip dan merangkul komunitas. Kini terus berekspansi dengan standar pelayanan premium.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[43px] sm:-left-[59px] top-0 h-8 w-8 rounded-full bg-white border-4 border-primary group-hover:scale-125 transition-all duration-300 shadow-lg z-10" />
                  <div className="absolute -left-[43px] sm:-left-[59px] top-0 h-8 w-8 rounded-full bg-primary/20 blur-md -z-10" />

                  <span className="text-primary font-bold text-sm mb-3 block tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-24 bg-[#f1f5f9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Keunggulan <span className="text-shiny-purple">PHD Trans</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Standar pelayanan tinggi yang membedakan kami dari yang lain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: UserCheck,
                title: '"Pilot" Crew',
                desc: "Kru kami disebut PILOT, mengenakan seragam rapi untuk profesionalisme, wibawa, dan kepercayaan penumpang.",
              },
              {
                icon: Coffee,
                title: "Dilarang Haus",
                desc: 'Fasilitas Unlimited Refill (Kopi, Teh, Air Putih) di dalam bus. Nikmati sensasi "Kafe Berjalan" sepanjang perjalanan.',
              },
              {
                icon: Bus,
                title: "Unit Adiputro",
                desc: "Loyal menggunakan bodi Jetbus buatan Adiputro (Malang) yang menjamin kenyamanan, keamanan, dan gengsi tinggi.",
              },
              {
                icon: Wrench,
                title: "Perawatan Ekstrem",
                desc: "Cek rutin dan servis berkala setiap 5.000 KM (lebih cepat dari standar) untuk memastikan performa armada selalu prima.",
              },
            ].map((usp, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-primary/50 transition-all group hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                  <usp.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {usp.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/5 p-12 sm:p-16 rounded-[3rem] relative overflow-hidden border border-primary/20 shadow-lg group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Siap Merasakan <br />
                <span className="text-shiny-purple">Pengalaman Berbeda?</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light">
                Bergabunglah dengan ribuan penumpang yang telah menikmati
                kenyamanan dan kemewahan layanan PHD Trans.
              </p>
              <a
                href="/reservation"
                className="inline-block bg-primary text-white font-bold py-4 px-12 rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Sewa Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
