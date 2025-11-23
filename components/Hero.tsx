export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/vidio%20phd%202.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
          Nikmati <span className="text-shiny-purple">Kemewahan</span> Wisata Anda
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-6 animate-fade-in-up delay-100">
          PHD Trans menawarkan layanan bus pariwisata premium dengan kenyamanan dan keamanan terbaik untuk perjalanan wisata Anda di seluruh Indonesia.
        </p>
        <div className="mb-10 animate-fade-in-up delay-150">
          <span className="inline-block px-6 py-2 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-sm">
            <span className="text-primary font-bold text-sm tracking-widest">#PurpleGang</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
          <a
            href="#fleet"
            className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Lihat Armada
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
