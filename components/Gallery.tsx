"use client";

import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQ//Z";

function Gallery() {
  const images = [
    {
      src: "/assets/img/phdbus1.webp",
      alt: "PHD Trans Luxury Bus 1",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/assets/img/phd2.webp",
      alt: "PHD Trans Luxury Bus 2",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/img/pgd3.webp",
      alt: "PHD Trans Luxury Bus 3",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="fleet"
      className="py-12 sm:py-16 lg:py-24 bg-[#050014] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6 px-4"
          >
            Armada <span className="text-shiny-purple">Premium</span> Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 font-sans font-light"
          >
            Lihat armada bus modern dan terawat kami yang dirancang untuk
            kenyamanan perjalanan wisata Anda.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[280px] md:auto-rows-[300px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative rounded-3xl overflow-hidden group ${img.span} border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500 text-center p-6">
                  <p className="text-white font-display font-bold text-2xl lg:text-3xl mb-2 drop-shadow-lg">
                    {img.alt}
                  </p>
                  <div className="inline-block px-6 py-2 border border-white/50 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors cursor-pointer">
                    Lihat Detail
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Gallery);
