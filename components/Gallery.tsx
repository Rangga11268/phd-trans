import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/assets/img/phdbus1.webp', alt: 'PHD Trans Luxury Bus 1', span: 'md:col-span-2 md:row-span-2' },
    { src: '/assets/img/phd2.webp', alt: 'PHD Trans Luxury Bus 2', span: 'md:col-span-1 md:row-span-1' },
    { src: '/assets/img/pgd3.webp', alt: 'PHD Trans Luxury Bus 3', span: 'md:col-span-1 md:row-span-1' },
    // Using logo as a filler or branding element if needed, or just sticking to buses.
    // Note: HEIC images are skipped as they are not supported in standard <img> tags.
  ];

  return (
    <section id="fleet" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Armada <span className="text-shiny-purple">Premium</span> Kami
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lihat armada bus modern dan terawat kami yang dirancang untuk kenyamanan perjalanan wisata Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
