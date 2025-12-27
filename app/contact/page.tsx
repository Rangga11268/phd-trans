import Contact from "@/components/Contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#020617]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/hubungin kami.jpg"
            alt="Hubungi Kami PHD Trans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up">
            Hubungi <span className="text-shiny-purple">Kami</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-100 font-sans font-light">
            Kami di sini untuk membantu merencanakan perjalanan sempurna Anda.
            Hubungi kami hari ini.
          </p>
        </div>
      </section>

      {/* Reuse existing Contact component */}
      <Contact />
    </main>
  );
}
