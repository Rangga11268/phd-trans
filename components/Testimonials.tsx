import { Star } from "lucide-react";
import { memo, useMemo } from "react";

function Testimonials() {
  const reviews = useMemo(
    () => [
      {
        name: "Budi Santoso",
        role: "Travel Enthusiast",
        content:
          "Pengalaman luar biasa bersama PHD Trans! Busnya sangat nyaman dan kru sangat profesional. Sangat direkomendasikan untuk perjalanan wisata.",
        rating: 5,
      },
      {
        name: "Siti Aminah",
        role: "Guru Sekolah",
        content:
          "Kami menyewa bus untuk study tour sekolah dan semuanya berjalan lancar. Fasilitas karaoke sangat menghibur anak-anak.",
        rating: 5,
      },
      {
        name: "Rahmat Hidayat",
        role: "Event Organizer",
        content:
          "Armada bersih, tepat waktu, dan pelayanan ramah. PHD Trans selalu menjadi pilihan utama kami untuk transportasi event.",
        rating: 4,
      },
    ],
    []
  );

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 px-4">
            Apa Kata <span className="text-shiny-purple">Mereka</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 font-light">
            Dengarkan pengalaman pelanggan kami yang telah menikmati perjalanan
            bersama PHD Trans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 relative group"
            >
              <div className="absolute top-0 right-0 p-10 bg-primary/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-accent fill-accent shadow-glow"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-300 mb-8 italic leading-relaxed font-light">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center text-white font-bold text-xl font-display">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg text-white font-bold font-display tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-sm text-primary uppercase tracking-wider font-bold text-[10px]">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
