import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Syarat & <span className="text-primary">Ketentuan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mohon baca syarat dan ketentuan ini dengan seksama sebelum memesan layanan kami.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 space-y-12">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Pemesanan & Reservasi</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Pemesanan dapat dilakukan melalui website, WhatsApp, atau telepon.</li>
                <li>Uang muka (DP) sebesar 30% diperlukan untuk mengamankan jadwal Anda.</li>
                <li>Pelunasan pembayaran harus dilakukan paling lambat 3 hari sebelum tanggal keberangkatan.</li>
                <li>Ketersediaan armada dapat berubah sewaktu-waktu hingga DP diterima.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Pembatalan & Pengembalian Dana</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Pembatalan lebih dari 7 hari sebelum keberangkatan: Pengembalian DP 100%.</li>
                <li>Pembatalan 3-7 hari sebelum keberangkatan: Pengembalian DP 50%.</li>
                <li>Pembatalan kurang dari 3 hari sebelum keberangkatan: Tidak ada pengembalian dana.</li>
                <li>Perubahan jadwal (reschedule) diperbolehkan satu kali, tergantung ketersediaan, minimal 3 hari sebelumnya.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Tata Tertib Penumpang</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Dilarang keras merokok di dalam bus.</li>
                <li>Penumpang bertanggung jawab atas barang bawaan pribadi. PHD Trans tidak bertanggung jawab atas kehilangan atau kerusakan.</li>
                <li>Kerusakan interior atau peralatan bus yang disebabkan oleh penumpang akan dikenakan biaya penggantian.</li>
                <li>Dilarang membawa obat-obatan terlarang, senjata tajam, dan bahan berbahaya.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Keadaan Kahar (Force Majeure)</h2>
              <p className="text-gray-300 leading-relaxed">
                PHD Trans tidak bertanggung jawab atas keterlambatan atau pembatalan yang disebabkan oleh kejadian di luar kendali kami, seperti bencana alam, cuaca buruk, penutupan jalan, atau kerusakan mekanis mendadak. Dalam kasus tersebut, kami akan berusaha memberikan solusi alternatif atau pengembalian dana penuh.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 mb-6">
                Dengan memesan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
              </p>
              <Link href="/contact" className="inline-block bg-primary text-black font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                Hubungi Kami jika Ada Pertanyaan
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
