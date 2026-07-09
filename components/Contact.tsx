"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import {
  Bus, Calendar, MapPin, User, Phone,
  Clock, CheckCircle, Zap, Star
} from "lucide-react";

const armadaOptions = [
  "Pilih Armada...",
  "Big Bus 50+1 TL Seat",
  "Big Bus 32 Legrest + 6 Seat",
  "Medium Bus Luxury Jetbus 5",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    armada: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const message = `Halo PHD Trans! Saya ${form.name} mau pesan ${form.armada || "bus"} untuk perjalanan ke ${form.destination || "tujuan"} pada ${form.date || "tanggal"}. Mohon info ketersediaan dan harga terbaiknya. Terima kasih!`;

    window.open(
      `https://wa.me/6281353343110?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="booking"
      className="py-12 sm:py-16 lg:py-24 bg-[#f1f5f9] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Bus className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Pesan Sekarang
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 px-4">
            Siap <span className="text-shiny-purple">Berwisata?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4 font-light">
            Isi dulu, nanti kita lanjut chat di WA. Gampang, cepat, tanpa ribet!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Form - 3 columns */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.div
              variants={item}
              className="bg-white border border-gray-200 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      <User className="h-3 w-3 inline mr-1" />
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      <Phone className="h-3 w-3 inline mr-1" />
                      No WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                      placeholder="0813-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      Tujuan Perjalanan
                    </label>
                    <input
                      type="text"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                      placeholder="Cth: Bali, Bromo, Jogja..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      <Calendar className="h-3 w-3 inline mr-1" />
                      Tanggal Berangkat
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    <Bus className="h-3 w-3 inline mr-1" />
                    Pilih Armada
                  </label>
                  <select
                    value={form.armada}
                    onChange={(e) => setForm({ ...form, armada: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium appearance-none cursor-pointer"
                  >
                    {armadaOptions.map((opt) => (
                      <option key={opt} value={opt === armadaOptions[0] ? "" : opt} className="bg-white text-gray-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white font-bold py-4 sm:py-5 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center gap-3 text-lg"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Pesan via WhatsApp — Gratis
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 pt-2">
                  <span className="flex items-center gap-1"><Zap className="h-3 w-3 text-accent" /> Respon &lt; 5 menit</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 24 jam</span>
                  <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Tanpa ribet</span>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Info - 2 columns */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Business Info Card */}
            <motion.div
              variants={item}
              className="bg-white border border-gray-200 rounded-[2.5rem] p-6 sm:p-8 shadow-lg group hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <h3 className="text-xl font-display font-bold text-gray-900">
                  PT. PUTRA HANDAYANI TRANS
                </h3>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                Bus Pariwisata
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Bus className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Big Bus 50+1 TL Seat</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Bus className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Big Bus 32 Legrest + 6 Seat</span>
                </div>
              </div>
              <a
                href="https://wa.me/6281353343110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-lg w-full justify-center text-lg"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Chat via WhatsApp
              </a>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              variants={item}
              className="bg-white border border-gray-200 rounded-[2.5rem] p-6 sm:p-8 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-all flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg text-gray-900 font-bold">
                      0813-5334-3110
                    </p>
                    <p className="text-xs text-gray-500">
                      Call / WA / SMS
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-all flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      Nganjuk, Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
