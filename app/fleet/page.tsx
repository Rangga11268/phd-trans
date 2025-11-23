import Image from 'next/image';
import { Wifi, Zap, Coffee, Tv } from 'lucide-react';

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
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Armada <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pilih bus yang sempurna untuk perjalanan wisata Anda. Kami menawarkan berbagai kelas sesuai kebutuhan dan anggaran Anda.
          </p>
        </div>
      </section>

      {/* Fleet List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {buses.map((bus, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-4">{bus.name}</h3>
                  <p className="text-gray-400 text-lg mb-8">{bus.description}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-4">Fasilitas:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {bus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="bg-primary/20 p-2 rounded-lg">
                          <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <a href="/contact" className="bg-primary text-black font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
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
