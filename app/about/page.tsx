import { Shield, Clock, Star, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tentang <span className="text-primary">PT. PUTRA HANDAYANI TRANS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mitra terpercaya Anda dalam transportasi wisata premium. Kami berkomitmen untuk memberikan keunggulan dalam setiap perjalanan.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Didirikan dengan visi untuk merevolusi perjalanan wisata bus di Indonesia, PHD Trans telah berkembang dari operator lokal kecil menjadi penyedia layanan transportasi pariwisata terkemuka di Jawa Timur.
                </p>
                <p>
                  Kami memahami bahwa perjalanan bukan hanya tentang mencapai tujuan, tetapi tentang pengalaman sepanjang jalan. Itulah sebabnya kami berinvestasi besar-besaran dalam perawatan armada, pelatihan kru, dan fasilitas penumpang.
                </p>
                <p>
                  Hari ini, kami bangga melayani ribuan pelanggan yang puas, menghubungkan berbagai destinasi wisata dengan keamanan, kenyamanan, dan gaya.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">10k+</h3>
                <p className="text-gray-400">Penumpang Bahagia</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">5+</h3>
                <p className="text-gray-400">Tahun Pengalaman</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-gray-400">Rekor Keselamatan</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Star className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">4.9</h3>
                <p className="text-gray-400">Rating Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Visi Kami
              </h3>
              <p className="text-gray-300">
                Menjadi layanan transportasi bus pariwisata terkemuka dan terpercaya di Indonesia, menetapkan tolok ukur untuk keselamatan, kenyamanan, dan kepuasan pelanggan.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Misi Kami
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Memprioritaskan keselamatan penumpang di atas segalanya.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Menyediakan layanan yang konsisten, tepat waktu, dan andal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Terus meningkatkan armada dan fasilitas kami untuk kenyamanan wisata.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
