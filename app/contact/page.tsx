import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hubungi <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kami di sini untuk membantu merencanakan perjalanan sempurna Anda. Hubungi kami hari ini.
          </p>
        </div>
      </section>

      {/* Reuse existing Contact component */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>
    </main>
  );
}
