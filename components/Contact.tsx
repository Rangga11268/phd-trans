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
      className="py-12 sm:py-16 lg:py-24 bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Hubungi <span className="text-shiny-purple">Kami</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 lg:mb-12 font-light leading-relaxed"
            >
              Siap merencanakan perjalanan Anda? Hubungi kami untuk penawaran
              harga atau pertanyaan apa pun. Tim kami siap membantu Anda 24/7.
            </motion.p>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                variants={item}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-5 rounded-2xl group-hover:from-primary/20 group-hover:to-purple-900/20 transition-all border border-white/10 group-hover:border-primary/30 flex-shrink-0">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Lokasi Kami
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
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
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-5 rounded-2xl group-hover:from-primary/20 group-hover:to-purple-900/20 transition-all border border-white/10 group-hover:border-primary/30 flex-shrink-0">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Telepon
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-lg">
                    0813-5334-3110
                    <br />
                    <span className="text-sm text-gray-500">
                      Senin - Minggu, 24 Jam
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-5 rounded-2xl group-hover:from-primary/20 group-hover:to-purple-900/20 transition-all border border-white/10 group-hover:border-primary/30 flex-shrink-0">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Email
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-lg">
                    info@phdtrans.com
                    <br />
                    <span className="text-sm text-gray-500">
                      support@phdtrans.com
                    </span>
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
            className="bg-white/[0.02] p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <form className="space-y-5 sm:space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-primary uppercase tracking-widest mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-primary uppercase tracking-widest mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
                    placeholder="+62..."
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-primary uppercase tracking-widest mb-2"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-primary uppercase tracking-widest mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium resize-none"
                  placeholder="Ceritakan kebutuhan perjalanan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.5)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
              >
                <Send className="h-5 w-5" />
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
          className="mt-12 sm:mt-20 p-2 sm:p-3 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl relative z-10 group"
        >
          <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
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
