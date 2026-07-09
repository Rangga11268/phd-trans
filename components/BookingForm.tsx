"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bus, Calendar, MapPin, User, Phone, Clock, CheckCircle, Zap } from "lucide-react";

const armadaOptions = [
  "Pilih Armada...",
  "Big Bus 50+1 TL Seat",
  "Big Bus 32 Legrest + 6 Seat",
  "Medium Bus Luxury Jetbus 5",
];

export default function BookingForm() {
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

  return (
    <section
      id="booking"
      className="py-12 sm:py-16 lg:py-24 bg-[#020617] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 px-4">
            Siap <span className="text-shiny-purple">Berwisata?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Isi dulu, nanti kita lanjut chat di WA. Gampang, cepat, tanpa ribet!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 font-medium [color-scheme:dark]"
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
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
              >
                {armadaOptions.map((opt) => (
                  <option key={opt} value={opt === armadaOptions[0] ? "" : opt} className="bg-[#020617] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white font-bold py-4 sm:py-5 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center gap-3 text-lg"
            >
              <MessageCircle className="h-6 w-6 fill-white" />
              Pesan via WhatsApp — Gratis
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1"><Zap className="h-3 w-3 text-accent" /> Respon &lt; 5 menit</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 24 jam</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Tanpa ribet</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
