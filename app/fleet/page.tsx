"use client";

import Image from "next/image";
import {
  Zap,
  Coffee,
  Tv,
  Disc,
  Snowflake,
  Briefcase,
  Monitor,
  Package,
  ArmchairIcon,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-background">
      {/* Cinematic Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/phdbus1.webp"
            alt="PHD Trans Fleet"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display font-bold text-6xl md:text-8xl text-foreground mb-4 tracking-tighter">
            OUR <span className="text-primary">FLEET</span>
          </h1>
          <p className="text-muted-text font-sans text-lg max-w-2xl mx-auto border-t border-card-border pt-6 mt-2">
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
              } gap-8 lg:gap-12 items-center group`}
            >
              {/* Image Card */}
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden border border-card-border shadow-lg">
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
                  <div className="h-[1px] w-12 bg-primary" />
                  <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                    Premium Class
                  </span>
                </div>

                <h3 className="font-display font-bold text-4xl text-foreground group-hover:text-primary transition-colors">
                  {bus.name}
                </h3>

                <p className="text-muted-text leading-relaxed text-lg">
                  {bus.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {bus.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full border border-card-border bg-surface text-sm text-muted-text"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6281353343110?text=${encodeURIComponent(
                    `Halo PHD Trans, saya ingin booking *${bus.name}*.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Facility Strip */}
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-card-border" />
                    <span className="text-[10px] text-muted-text uppercase tracking-widest font-bold">Fasilitas</span>
                    <div className="h-px flex-1 bg-card-border" />
                  </div>
                  <div className="overflow-x-auto scrollbar-thin -mx-2 px-2">
                    <div className="flex gap-2 min-w-max pb-1">
                      {bus.facilityDetails.map((facility, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-surface border border-card-border hover:border-primary/30 hover:bg-primary/5 transition-all min-w-[72px] cursor-default group"
                        >
                          <div className="text-primary group-hover:scale-110 transition-transform">
                            {facility.icon}
                          </div>
                          <span className="text-[10px] text-muted-text text-center leading-tight group-hover:text-foreground transition-colors">
                            {facility.name}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center pl-1 opacity-50">
                        <ChevronRight className="w-4 h-4 text-muted-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
