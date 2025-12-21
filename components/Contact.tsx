"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            >
              Hubungi <span className="text-shiny-purple">Kami</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 lg:mb-12"
            >
              Siap merencanakan perjalanan Anda? Hubungi kami untuk penawaran
              harga atau pertanyaan apa pun. Tim kami siap membantu Anda 24/7.
            </motion.p>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.div
                variants={item}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0 border border-white/10 group-hover:border-primary/30">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Lokasi Kami
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    Jl. Raya Nganjuk No. 123
                    <br />
                    Nganjuk, Jawa Timur, Indonesia
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0 border border-white/10 group-hover:border-primary/30">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Telepon
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    0813-5334-3110
                    <br />
                    Senin - Minggu, 24 Jam
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="bg-white/5 p-3 sm:p-4 rounded-2xl group-hover:bg-primary/20 transition-colors flex-shrink-0 border border-white/10 group-hover:border-primary/30">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    info@phdtrans.com
                    <br />
                    support@phdtrans.com
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    placeholder="+62..."
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  placeholder="Ceritakan kebutuhan perjalanan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3 sm:py-4 text-sm sm:text-base rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 p-2 sm:p-3 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl relative z-10 group"
        >
          <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden relative">
            <iframe
              src="https://maps.google.com/maps?q=PT+PUTRA+HANDAYANI+TRANS&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
