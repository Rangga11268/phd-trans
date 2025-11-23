import Image from 'next/image';
import { Wifi, Zap, Coffee, Tv } from 'lucide-react';

export default function FleetPage() {
  const buses = [
    {
      name: "Executive Class",
      image: "/assets/img/phdbus1.webp",
      description: "Sempurna untuk perjalanan jarak jauh dengan ruang kaki ekstra dan kursi reclining.",
      features: ["AC", "Kursi Reclining", "Toilet", "USB Charging", "Snack"]
    },
    {
      name: "Royal Class",
      image: "/assets/img/phd2.webp",
      description: "Rasakan kemewahan dengan kursi lebih lebar dan sistem hiburan pribadi.",
      features: ["AC", "Kursi Pijat", "Toilet", "Wifi", "Layanan Makan Malam", "TV Pribadi"]
    },
    {
      name: "Tourist Bus",
      image: "/assets/img/pgd3.webp",
      description: "Ideal untuk tur grup dan charter, dilengkapi dengan karaoke dan sound system.",
      features: ["AC", "Karaoke", "Coolbox", "Mic", "Bagasi Luas"]
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
