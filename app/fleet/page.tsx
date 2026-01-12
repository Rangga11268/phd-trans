"use client";

import Image from "next/image";
import {
  Wifi,
  Zap,
  Coffee,
  Tv,
  Disc,
  Snowflake,
  Briefcase,
  X,
  Monitor,
  Plug,
  Bath,
  Package,
  ArmchairIcon,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FacilityDetail {
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface Bus {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
  facilityDetails: FacilityDetail[];
}

export default function FleetPage() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllFacilities, setShowAllFacilities] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Auto-slide carousel
  useEffect(() => {
    if (!isModalOpen || !selectedBus) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === selectedBus.facilityDetails.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isModalOpen, selectedBus]);

  const openModal = (bus: Bus) => {
    setSelectedBus(bus);
    setIsModalOpen(true);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBus(null), 300);
  };

  const buses: Bus[] = [
    {
      id: 1,
      name: "Big Bus 50+1TL Seat",
      description:
        "Bus pariwisata premium dengan 50+1 kursi. Chassis HINO RM 280, body Jetbus 5 Adi Putro. Dilengkapi kursi khusus Tour Leader dan fasilitas lengkap.",
      features: ["50+1 Seats", "Kursi TL", "AC", "Karaoke", "Reclining Seats"],
      image: "/assets/img/phdbus1.webp",
      facilityDetails: [
        {
          name: "AC Dingin",
          description:
            "Sistem pendingin udara premium yang menjaga suhu kabin tetap nyaman sepanjang perjalanan",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.webp",
        },
        {
          name: "Kursi Premium",
          description:
            "Kursi premium berkualitas tinggi dengan desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.webp",
        },
        {
          name: "Kursi Tour Leader",
          description:
            "Kursi khusus Tour Leader (TL) untuk koordinator rombongan dengan akses mudah ke pengemudi",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bangkuTL.webp",
        },
        {
          name: "Smart TV Depan",
          description:
            "Layar LED TV di bagian depan untuk hiburan dan informasi selama perjalanan",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.webp",
        },
        {
          name: "TV Belakang",
          description:
            "Layar TV tambahan di belakang untuk jangkauan hiburan yang lebih luas",
          icon: <Tv className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TVBelakang.webp",
        },
        {
          name: "Sound System Premium",
          description:
            "Sistem audio berkualitas tinggi dengan speaker yang jernih untuk musik dan karaoke",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.webp",
        },
        {
          name: "Coolbox",
          description:
            "Pendingin portable untuk menyimpan minuman dan makanan tetap segar selama perjalanan",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/coolbox.webp",
        },
        {
          name: "LED Tab Interior",
          description:
            "Lampu LED tablet dekoratif untuk pencahayaan interior yang modern dan nyaman",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/led Tab.webp",
        },
        {
          name: "Disco Light",
          description:
            "Lampu disco warna-warni untuk suasana perjalanan yang meriah dan fun",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.webp",
        },
        {
          name: "Dispenser",
          description:
            "Dispenser air untuk menjaga hidrasi selama perjalanan panjang",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.webp",
        },
        {
          name: "Bagasi Luas",
          description:
            "Ruang penyimpanan bagasi yang luas dan aman untuk barang bawaan Anda",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.webp",
        },
        {
          name: "APAR (Alat Pemadam)",
          description:
            "Alat pemadam api ringan untuk keamanan dan keselamatan penumpang",
          icon: <Briefcase className="h-6 w-6" />,
          image: "/assets/img/fasilitas/apar.webp",
        },
        {
          name: "Emergency Hammer",
          description:
            "Pemecah kaca darurat untuk keselamatan dalam kondisi emergency",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/pemecahKaca.webp",
        },
      ],
    },
    {
      id: 2,
      name: "Big Bus 32 Legrest + 6 Seat",
      description:
        "Bus pariwisata luxury dengan kursi legrest premium. Chassis HINO RM 280, body Jetbus 5 Adi Putro. Total 38 kursi untuk perjalanan yang lebih rileks.",
      features: [
        "32 Legrest Seats",
        "6 Regular Seats",
        "AC",
        "Smart TV",
        "Coolbox",
      ],
      image: "/assets/img/phd2.webp",
      facilityDetails: [
        {
          name: "AC Dingin",
          description:
            "Sistem pendingin udara premium yang menjaga suhu kabin tetap nyaman sepanjang perjalanan",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.webp",
        },
        {
          name: "Kursi Premium",
          description:
            "Kursi premium berkualitas tinggi dengan desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.webp",
        },
        {
          name: "Kursi Tour Leader & Legrest",
          description:
            "Kursi premium dengan legrest untuk relaksasi maksimal plus kursi khusus Tour Leader (TL)",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bangkuTL.webp",
        },
        {
          name: "Smart TV Depan",
          description:
            "Layar LED TV di bagian depan untuk hiburan dan informasi selama perjalanan",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.webp",
        },
        {
          name: "TV Belakang",
          description:
            "Layar TV tambahan di belakang untuk jangkauan hiburan yang lebih luas",
          icon: <Tv className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TVBelakang.webp",
        },
        {
          name: "Sound System Premium",
          description:
            "Sistem audio berkualitas tinggi dengan speaker yang jernih untuk musik dan karaoke",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.webp",
        },
        {
          name: "Coolbox",
          description:
            "Pendingin portable untuk menyimpan minuman dan makanan tetap segar selama perjalanan",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/coolbox.webp",
        },
        {
          name: "LED Tab Interior",
          description:
            "Lampu LED tablet dekoratif untuk pencahayaan interior yang modern dan nyaman",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/led Tab.webp",
        },
        {
          name: "Disco Light",
          description:
            "Lampu disco warna-warni untuk suasana perjalanan yang meriah dan fun",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.webp",
        },
        {
          name: "Dispenser",
          description:
            "Dispenser air untuk menjaga hidrasi selama perjalanan panjang",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.webp",
        },
        {
          name: "Bagasi Luas",
          description:
            "Ruang penyimpanan bagasi yang luas dan aman untuk barang bawaan Anda",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.webp",
        },
        {
          name: "APAR (Alat Pemadam)",
          description:
            "Alat pemadam api ringan untuk keamanan dan keselamatan penumpang",
          icon: <Briefcase className="h-6 w-6" />,
          image: "/assets/img/fasilitas/apar.webp",
        },
        {
          name: "Emergency Hammer",
          description:
            "Pemecah kaca darurat untuk keselamatan dalam kondisi emergency",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/pemecahKaca.webp",
        },
      ],
    },
    {
      id: 3,
      name: "Medium Bus Luxury - Jetbus 5",
      description:
        "Bus medium premium dengan 41 kursi Rimba Kencana, AC Denso dingin merata, dan party lighting system. Chassis Mercedes-Benz OF 917, body Jetbus 5 Single Glass.",
      features: [
        "41 Seats",
        "AC Denso",
        'LED TV 32"',
        "Karaoke",
        "Party Lights",
        "Dispenser",
      ],
      image: "/assets/img/mediumlongbus.jpg",
      facilityDetails: [
        {
          name: "AC Denso (Nero)",
          description:
            "Sistem AC Denso tipe Nero yang dingin merata hingga belakang untuk kenyamanan maksimal",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.webp",
        },
        {
          name: "Kursi Rimba Kencana",
          description:
            "41 kursi high quality dari Rimba Kencana dengan konfigurasi 2-2, desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.webp",
        },
        {
          name: "LED TV 32 Inch",
          description:
            "Layar LED TV besar 32 inch di bagian depan untuk hiburan berkualitas",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.webp",
        },
        {
          name: "Karaoke System",
          description:
            "Sistem audio berkualitas tinggi dengan karaoke set untuk hiburan",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.webp",
        },
        {
          name: "Party Lighting System",
          description:
            "Lampu RGB warna-warni, disco light, dan laser untuk suasana malam yang meriah",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.webp",
        },
        {
          name: "Dispenser Air",
          description:
            "Free refill kopi, teh, dan air putih di belakang kursi pengemudi",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.webp",
        },
        {
          name: "Bagasi Luas",
          description:
            "Bagasi kabin dengan penutup ducting tertutup rapi, aman untuk barang bawaan",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.webp",
        },
      ],
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Cinematic Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/phdbus1.webp"
            alt="PHD Trans Fleet"
            fill
            className="object-cover opacity-60 scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-4 tracking-tighter">
            OUR <span className="text-primary">FLEET</span>
          </h1>
          <p className="text-gray-300 font-sans text-lg max-w-2xl mx-auto border-t border-white/20 pt-6 mt-2">
            Experience the pinnacle of ground transportation. Modern. Safe.
            Premium.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {buses.map((bus, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center group will-change-transform`}
            >
              {/* Image Card */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>

              {/* Info Card */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[1px] w-12 bg-accent" />
                  <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase">
                    Premium Class
                  </span>
                </div>

                <h3 className="font-display font-bold text-4xl text-white group-hover:text-primary transition-colors">
                  {bus.name}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {bus.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {bus.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => openModal(bus)}
                    className="flex-1 bg-white/5 border border-white/10 hover:border-primary text-white py-4 rounded-xl font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    View Facilities
                  </button>
                  <a
                    href={`https://wa.me/6281353343110?text=${encodeURIComponent(
                      `Halo PHD Trans, saya ingin booking *${bus.name}*.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(112,0,255,0.4)] hover:shadow-[0_0_40px_rgba(112,0,255,0.6)]"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facility Modal */}
      <AnimatePresence>
        {isModalOpen && selectedBus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0521] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div>
                  <h2 className="font-display font-bold text-2xl text-white">
                    {selectedBus.name}
                  </h2>
                  <p className="text-primary text-sm tracking-wider uppercase">
                    Facility Tour
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {/* Carousel */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-8 bg-black">
                  {selectedBus.facilityDetails.map((facility, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: idx === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">
                          {facility.name}
                        </h3>
                        <p className="text-gray-300 max-w-lg">
                          {facility.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedBus.facilityDetails.map((facility, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                        currentSlide === idx
                          ? "bg-primary/20 border-primary"
                          : "bg-white/5 border-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          currentSlide === idx
                            ? "bg-primary text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {facility.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">
                          {facility.name}
                        </h4>
                        <p className="text-gray-500 text-xs line-clamp-2">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
