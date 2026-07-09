"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      className="py-12 sm:py-16 lg:py-24 bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4"
          >
            Armada <span className="text-shiny-purple">Premium</span> Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto px-4 font-sans font-light"
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
              className={`relative rounded-3xl overflow-hidden group ${img.span} border border-card-border hover:border-primary/50 transition-all duration-500 shadow-lg`}
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
              <Link
                href="/fleet"
                className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
              >
                <div className="transform scale-90 md:group-hover:scale-100 transition-transform duration-500 text-center p-6">
                  <p className="text-white font-display font-bold text-2xl lg:text-3xl mb-2 drop-shadow-lg">
                    {img.alt}
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-2 border border-white/50 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors cursor-pointer">
                    Lihat Detail
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Gallery);
