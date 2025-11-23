import Image from 'next/image';
import { Wifi, Zap, Coffee, Tv, Disc, Snowflake, Briefcase } from 'lucide-react';

export default function FleetPage() {
  const buses = [
    {
      id: 1,
      name: "Big Bus 50+1TL Seat",
      description: "Pilihan tepat untuk rombongan besar. Dilengkapi dengan konfigurasi kursi 2-2 yang nyaman, toilet, dan ruang bagasi luas.",
      features: ["50+1 Seats", "Toilet", "AC", "Karaoke", "Reclining Seats"],
      image: "/assets/img/phdbus1.webp"
    },
    {
      id: 2,
      name: "Big Bus 32 Legrest + 6 Seat",
      description: "Kenyamanan ekstra dengan legrest untuk perjalanan jauh. Konfigurasi premium untuk pengalaman wisata yang lebih rileks.",
      features: ["32 Legrest Seats", "6 Regular Seats", "AC", "Smart TV", "Coolbox"],
      image: "/assets/img/phd2.webp"
    },
    {
      id: 3,
      name: "Medium Bus Luxury",
      description: "Solusi fleksibel untuk rombongan menengah. Tetap nyaman dengan fasilitas premium dalam ukuran yang lebih compact.",
      features: ["35 Seats", "AC", "Audio System", "USB Charger", "Bagasi Luas"],
      image: "/assets/img/pgd3.webp"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/phdbus1.webp"
            alt="PHD Trans Fleet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Armada <span className="text-shiny-purple">Kami</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Pilih bus yang sempurna untuk perjalanan wisata Anda. Kami menawarkan berbagai kelas sesuai kebutuhan dan anggaran Anda.
          </p>
        </div>
      </section>

      {/* Fleet List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {buses.map((bus, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}>
                {/* Image Container */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{bus.name}</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">{bus.description}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Fasilitas Unggulan
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {bus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300 bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="bg-primary/20 p-1.5 rounded-lg">
                          <Briefcase className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <a 
                      href={`https://wa.me/6281353343110?text=${encodeURIComponent(`Halo PHD Trans, saya ingin booking *${bus.name}*. Mohon info harga dan ketersediaan.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25"
                    >
                      Pesan Bus Ini
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
