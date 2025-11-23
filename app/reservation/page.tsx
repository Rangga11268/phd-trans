import Image from 'next/image';
import { Phone, Calendar, CheckCircle, MessageSquare } from 'lucide-react';

export default function ReservationPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Informasi <span className="text-primary">Reservasi</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simak informasi lengkap mengenai layanan dan armada kami melalui brosur di bawah ini.
          </p>
        </div>
      </section>

      {/* Brochure Images Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
                <Image 
                  src="/assets/img/Reservasi1.jpg"
                  alt="Informasi Reservasi 1"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
                <Image 
                  src="/assets/img/Reservasi 2.jpg"
                  alt="Informasi Reservasi 2"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Video Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Panduan Reservasi</h2>
            <p className="text-gray-400">Video panduan langkah demi langkah untuk memesan bus impian Anda.</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] p-4 border border-white/10 shadow-2xl shadow-primary/20">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black border border-white/5 group">
              <video 
                src="/assets/video/vidio%20reservasi.mp4" 
                controls 
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Siap Melakukan Perjalanan?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Jangan ragu untuk menghubungi kami jika ada pertanyaan atau ingin melakukan pemesanan sesuai informasi di atas.
            </p>
            <a 
              href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Phone className="h-6 w-6" />
              <span className="text-lg">Hubungi Kami via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
