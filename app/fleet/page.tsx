'use client';

import Image from 'next/image';
import { Wifi, Zap, Coffee, Tv, Disc, Snowflake, Briefcase, X, Monitor, Plug, Bath, Package, ArmchairIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Auto-slide carousel
  useEffect(() => {
    if (!isModalOpen || !selectedBus) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === selectedBus.facilityDetails.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isModalOpen, selectedBus]);

  const openModal = (bus: Bus) => {
    setSelectedBus(bus);
    setIsModalOpen(true);
    setCurrentSlide(0); // Reset slide to first
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBus(null), 300);
  };

  const buses: Bus[] = [
    {
      id: 1,
      name: "Big Bus 50+1TL Seat",
      description: "Bus pariwisata premium dengan 50+1 kursi. Chassis HINO RM 280, body Jetbus 5 Adi Putro. Dilengkapi kursi khusus Tour Leader dan fasilitas lengkap.",
      features: ["50+1 Seats", "Kursi TL", "AC", "Karaoke", "Reclining Seats"],
      image: "/assets/img/phdbus1.webp",
      facilityDetails: [
        {
          name: "AC Dingin",
          description: "Sistem pendingin udara premium yang menjaga suhu kabin tetap nyaman sepanjang perjalanan",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.jpg"
        },
        {
          name: "Kursi Premium",
          description: "Kursi premium berkualitas tinggi dengan desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.jpg"
        },
        {
          name: "Kursi Tour Leader",
          description: "Kursi khusus Tour Leader (TL) untuk koordinator rombongan dengan akses mudah ke pengemudi",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bangkuTL.jpg"
        },
        {
          name: "Smart TV Depan",
          description: "Layar LED TV di bagian depan untuk hiburan dan informasi selama perjalanan",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.jpg"
        },
        {
          name: "TV Belakang",
          description: "Layar TV tambahan di belakang untuk jangkauan hiburan yang lebih luas",
          icon: <Tv className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TVBelakang.jpg"
        },
        {
          name: "Sound System Premium",
          description: "Sistem audio berkualitas tinggi dengan speaker yang jernih untuk musik dan karaoke",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.jpg"
        },
        {
          name: "Coolbox",
          description: "Pendingin portable untuk menyimpan minuman dan makanan tetap segar selama perjalanan",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/coolbox.jpg"
        },
        {
          name: "LED Tab Interior",
          description: "Lampu LED tablet dekoratif untuk pencahayaan interior yang modern dan nyaman",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/led Tab.jpg"
        },
        {
          name: "Disco Light",
          description: "Lampu disco warna-warni untuk suasana perjalanan yang meriah dan fun",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.jpg"
        },
        {
          name: "Dispenser",
          description: "Dispenser air untuk menjaga hidrasi selama perjalanan panjang",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.jpg"
        },
        {
          name: "Bagasi Luas",
          description: "Ruang penyimpanan bagasi yang luas dan aman untuk barang bawaan Anda",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.jpg"
        },
        {
          name: "APAR (Alat Pemadam)",
          description: "Alat pemadam api ringan untuk keamanan dan keselamatan penumpang",
          icon: <Briefcase className="h-6 w-6" />,
          image: "/assets/img/fasilitas/apar.jpg"
        },
        {
          name: "Emergency Hammer",
          description: "Pemecah kaca darurat untuk keselamatan dalam kondisi emergency",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/pemecahKaca.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Big Bus 32 Legrest + 6 Seat",
      description: "Bus pariwisata luxury dengan kursi legrest premium. Chassis HINO RM 280, body Jetbus 5 Adi Putro. Total 38 kursi untuk perjalanan yang lebih rileks.",
      features: ["32 Legrest Seats", "6 Regular Seats", "AC", "Smart TV", "Coolbox"],
      image: "/assets/img/phd2.webp",
      facilityDetails: [
        {
          name: "AC Dingin",
          description: "Sistem pendingin udara premium yang menjaga suhu kabin tetap nyaman sepanjang perjalanan",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.jpg"
        },
        {
          name: "Kursi Premium",
          description: "Kursi premium berkualitas tinggi dengan desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.jpg"
        },
        {
          name: "Kursi Tour Leader & Legrest",
          description: "Kursi premium dengan legrest untuk relaksasi maksimal plus kursi khusus Tour Leader (TL)",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bangkuTL.jpg"
        },
        {
          name: "Smart TV Depan",
          description: "Layar LED TV di bagian depan untuk hiburan dan informasi selama perjalanan",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.jpg"
        },
        {
          name: "TV Belakang",
          description: "Layar TV tambahan di belakang untuk jangkauan hiburan yang lebih luas",
          icon: <Tv className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TVBelakang.jpg"
        },
        {
          name: "Sound System Premium",
          description: "Sistem audio berkualitas tinggi dengan speaker yang jernih untuk musik dan karaoke",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.jpg"
        },
        {
          name: "Coolbox",
          description: "Pendingin portable untuk menyimpan minuman dan makanan tetap segar selama perjalanan",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/coolbox.jpg"
        },
        {
          name: "LED Tab Interior",
          description: "Lampu LED tablet dekoratif untuk pencahayaan interior yang modern dan nyaman",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/led Tab.jpg"
        },
        {
          name: "Disco Light",
          description: "Lampu disco warna-warni untuk suasana perjalanan yang meriah dan fun",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.jpg"
        },
        {
          name: "Dispenser",
          description: "Dispenser air untuk menjaga hidrasi selama perjalanan panjang",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.jpg"
        },
        {
          name: "Bagasi Luas",
          description: "Ruang penyimpanan bagasi yang luas dan aman untuk barang bawaan Anda",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.jpg"
        },
        {
          name: "APAR (Alat Pemadam)",
          description: "Alat pemadam api ringan untuk keamanan dan keselamatan penumpang",
          icon: <Briefcase className="h-6 w-6" />,
          image: "/assets/img/fasilitas/apar.jpg"
        },
        {
          name: "Emergency Hammer",
          description: "Pemecah kaca darurat untuk keselamatan dalam kondisi emergency",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/pemecahKaca.jpg"
        }
      ]
    },
    {
      id: 3,
      name: "Medium Bus Luxury - Jetbus 5",
      description: "Bus medium premium dengan 41 kursi Rimba Kencana, AC Denso dingin merata, dan party lighting system. Chassis Mercedes-Benz OF 917, body Jetbus 5 Single Glass.",
      features: ["41 Seats", "AC Denso", "LED TV 32\"", "Karaoke", "Party Lights", "Dispenser"],
      image: "/assets/img/mediumlongbus.jpg",
      facilityDetails: [
        {
          name: "AC Denso (Nero)",
          description: "Sistem AC Denso tipe Nero yang dingin merata hingga belakang untuk kenyamanan maksimal",
          icon: <Snowflake className="h-6 w-6" />,
          image: "/assets/img/fasilitas/AC dingin.jpg"
        },
        {
          name: "Kursi Rimba Kencana",
          description: "41 kursi high quality dari Rimba Kencana dengan konfigurasi 2-2, desain ergonomis untuk kenyamanan maksimal",
          icon: <ArmchairIcon className="h-6 w-6" />,
          image: "/assets/img/fasilitas/KursiPremium.jpg"
        },
        {
          name: "LED TV 32 Inch",
          description: "Layar LED TV besar 32 inch di bagian depan untuk hiburan berkualitas",
          icon: <Monitor className="h-6 w-6" />,
          image: "/assets/img/fasilitas/TV.jpg"
        },
        {
          name: "Karaoke System",
          description: "Sistem audio berkualitas tinggi dengan karaoke set untuk hiburan",
          icon: <Disc className="h-6 w-6" />,
          image: "/assets/img/fasilitas/speaker 1.jpg"
        },
        {
          name: "Party Lighting System",
          description: "Lampu RGB warna-warni, disco light, dan laser untuk suasana malam yang meriah",
          icon: <Zap className="h-6 w-6" />,
          image: "/assets/img/fasilitas/lampuDisco.jpg"
        },
        {
          name: "Dispenser Air",
          description: "Free refill kopi, teh, dan air putih di belakang kursi pengemudi",
          icon: <Coffee className="h-6 w-6" />,
          image: "/assets/img/fasilitas/dispenser.jpg"
        },
        {
          name: "Bagasi Luas",
          description: "Bagasi kabin dengan penutup ducting tertutup rapi, aman untuk barang bawaan",
          icon: <Package className="h-6 w-6" />,
          image: "/assets/img/fasilitas/bagasi 1.jpg"
        }
      ]
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
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {bus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300 bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="bg-primary/20 p-1.5 rounded-lg">
                          <Briefcase className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detail Fasilitas Button */}
                  <button
                    onClick={() => openModal(bus)}
                    className="w-full mb-4 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:border-primary/50 flex items-center justify-center gap-2"
                  >
                    <Zap className="h-4 w-4" />
                    Lihat Detail Fasilitas
                  </button>
                  
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


      {/* Facility Details Modal */}
      {isModalOpen && selectedBus && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-lg" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 border border-white/20 rounded-2xl md:rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto shadow-2xl shadow-primary/30"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#7D45B8 #1e293b'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="sticky top-4 md:top-6 right-4 md:right-6 float-right z-20 bg-white/10 hover:bg-red-500/80 text-white rounded-full p-2.5 md:p-3 transition-all duration-300 border border-white/20 hover:border-red-500/50 backdrop-blur-sm group touch-manipulation"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="p-4 sm:p-6 md:p-10 lg:p-16">
              {/* Header */}
              <div className="mb-6 md:mb-8 lg:mb-10">
                <div className="inline-block mb-3 md:mb-4">
                  <span className="bg-gradient-to-r from-primary to-purple-400 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                    Detail Lengkap
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Fasilitas Premium
                </h2>
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-primary to-purple-400 rounded-full"></div>
                  <p className="text-lg sm:text-xl md:text-2xl text-primary font-bold">{selectedBus.name}</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">{selectedBus.description}</p>
              </div>

              {/* Photo Carousel - Auto Sliding */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <div className="bg-primary/20 p-1.5 md:p-2 rounded-lg">
                    <Monitor className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  Galeri Fasilitas
                </h3>
                
                {/* Carousel Container */}
                <div className="relative group">
                  {/* Main Carousel */}
                  <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 md:border-2 shadow-lg">
                    {selectedBus.facilityDetails.map((facility, idx) => {
                      const isActive = idx === currentSlide;
                      
                      return (
                        <div
                          key={idx}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                        >
                          {/* Facility Image */}
                          <Image
                            src={facility.image}
                            alt={facility.name}
                            fill
                            className="object-cover"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                          {/* Facility Info */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8">
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg line-clamp-1">
                              {facility.name}
                            </h4>
                            <p className="text-gray-200 text-xs sm:text-sm md:text-base drop-shadow-md line-clamp-2 md:line-clamp-3">
                              {facility.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center gap-2 md:gap-2.5 mt-4 md:mt-6">
                    {selectedBus.facilityDetails.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 md:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                          idx === currentSlide
                            ? 'w-8 md:w-10 bg-primary'
                            : 'w-2 md:w-2.5 bg-white/30 hover:bg-white/50 active:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Facilities List */}
              <div className="mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <div className="bg-primary/20 p-1.5 md:p-2 rounded-lg">
                    <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  Spesifikasi Lengkap
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                  {(showAllFacilities 
                    ? selectedBus.facilityDetails 
                    : selectedBus.facilityDetails.slice(0, window.innerWidth < 768 ? 6 : selectedBus.facilityDetails.length)
                  ).map((facility, idx) => (
                    <div 
                      key={idx}
                      className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 hover:border-primary/40 hover:from-primary/10 hover:to-purple-500/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-purple-500/20 p-2 md:p-3 rounded-lg md:rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-primary/20">
                          <div className="text-primary [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                            {facility.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm md:text-base mb-1.5 md:mb-2 group-hover:text-primary transition-colors line-clamp-1">
                            {facility.name}
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Toggle button for mobile */}
                {selectedBus.facilityDetails.length > 6 && (
                  <div className="mt-6 text-center md:hidden">
                    <button
                      onClick={() => setShowAllFacilities(!showAllFacilities)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:from-primary/30 hover:to-purple-500/30 text-white font-semibold px-6 py-3 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      {showAllFacilities ? (
                        <>
                          <span>Lihat Lebih Sedikit</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Lihat Lengkap ({selectedBus.facilityDetails.length} Fasilitas)</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Features Chips */}
              <div className="mb-8 md:mb-10 p-4 md:p-6 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-xl md:rounded-2xl border border-primary/20">
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Highlight Features
                </h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedBus.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm text-gray-200 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-white/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-6 md:pt-8 border-t border-white/10">
                <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-primary/30">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    <div className="text-center md:text-left">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5 md:mb-2">
                        Tertarik dengan {selectedBus.name}?
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Hubungi kami sekarang untuk informasi harga dan ketersediaan
                      </p>
                    </div>
                    <a 
                      href={`https://wa.me/6281353343110?text=${encodeURIComponent(`Halo PHD Trans, saya ingin booking *${selectedBus.name}*. Mohon info harga dan ketersediaan.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto flex-shrink-0 group relative bg-gradient-to-r from-primary to-purple-600 text-white font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl hover:from-purple-600 hover:to-primary transition-all transform hover:scale-105 shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:shadow-xl overflow-hidden touch-manipulation"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="text-sm md:text-base">Pesan Sekarang</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
