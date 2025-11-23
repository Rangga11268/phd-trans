import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Hubungi <span className="text-shiny-purple">Kami</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12">
              Siap merencanakan perjalanan Anda? Hubungi kami untuk penawaran harga atau pertanyaan apa pun. Tim kami siap membantu Anda 24/7.
            </p>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Lokasi Kami</h3>
                  <p className="text-sm sm:text-base text-gray-400">Jl. Raya Nganjuk No. 123<br />Nganjuk, Jawa Timur, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Telepon</h3>
                  <p className="text-sm sm:text-base text-gray-400">0813-5334-3110<br />Senin - Minggu, 24 Jam</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-400">info@phdtrans.com<br />support@phdtrans.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+62..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Ceritakan kebutuhan perjalanan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold py-3 sm:py-4 text-sm sm:text-base rounded-xl hover:bg-primary/90 transition-all transform hover:scale-[1.02]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
