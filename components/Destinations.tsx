"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Destinations() {
  const destinations = [
    {
      name: "Bali",
      description: "Island of Gods",
      image: "/assets/img/destinasi/BaliWisata.webp",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
    },
    {
      name: "Bromo",
      description: "Sunrise",
      image: "/assets/img/destinasi/BromoWisata.jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      name: "Yogyakarta",
      description: "Cultural Heritage",
      image: "/assets/img/destinasi/jogja.jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2",
    },
    {
      name: "Malang",
      description: "Highland City",
      image: "/assets/img/destinasi/malangbatu.jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      name: "Ziarah Wali 5",
      description: "Spiritual Journey",
      image: "/assets/img/destinasi/ziarahwali5.webp",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-2">
              POPULAR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                DESTINATIONS
              </span>
            </h2>
            <p className="text-gray-400 font-sans max-w-md">
              Curated experiences for the discerning traveler. Explore Indonesia
              with style.
            </p>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors"
          >
            Start Your Journey
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl overflow-hidden border border-white/10 ${dest.colSpan} ${dest.rowSpan}`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={60}
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {dest.description}
                  </p>
                  <h3 className="font-display font-bold text-3xl text-white uppercase leading-none">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/100 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
