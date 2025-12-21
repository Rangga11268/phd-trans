"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Destinations() {
  const destinations = [
    {
      name: "Bali",
      description: "Pulau Dewata dengan pantai eksotis",
      image: "/assets/img/destinasi/BaliWisata.webp",
      popular: true,
    },
    {
      name: "Bromo",
      description: "Keindahan matahari terbit legendaris",
      image: "/assets/img/destinasi/BromoWisata.jpg",
      popular: true,
    },
    {
      name: "Malang - Batu",
      description: "Kota sejuk dengan wisata alam",
      image: "/assets/img/destinasi/malangbatu.jpg",
      popular: false,
    },
    {
      name: "Yogyakarta",
      description: "Kota budaya dan sejarah",
      image: "/assets/img/destinasi/jogja.jpg",
      popular: true,
    },
    {
      name: "Ziarah Wali 5",
      description: "Wisata religi dan spiritual",
      image: "/assets/img/destinasi/ziarahwali5.webp",
      popular: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Destinasi Populer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4"
          >
            Jelajahi <span className="text-shiny-purple">Indonesia</span>{" "}
            Bersama Kami
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            Destinasi wisata favorit yang sering dikunjungi oleh pelanggan PHD
            Trans.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
        >
          {destinations.map((destination, index) => {
            const whatsappMessage = `Halo PHD Trans, saya tertarik dengan paket wisata ke *${destination.name}*. Bisa info lebih lanjut?`;
            const whatsappLink = `https://wa.me/6281353343110?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <motion.a
                key={index}
                variants={item}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {destination.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/20">
                      Populer
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <span>Pesan Sekarang</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
          >
            Konsultasi Destinasi Anda
          </a>
        </motion.div>
      </div>
    </section>
  );
}
