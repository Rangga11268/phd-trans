import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Budi Santoso",
      role: "Travel Enthusiast",
      content: "Pengalaman luar biasa bersama PHD Trans! Busnya sangat nyaman dan kru sangat profesional. Sangat direkomendasikan untuk perjalanan wisata.",
      rating: 5
    },
    {
      name: "Siti Aminah",
      role: "Guru Sekolah",
      content: "Kami menyewa bus untuk study tour sekolah dan semuanya berjalan lancar. Fasilitas karaoke sangat menghibur anak-anak.",
      rating: 5
    },
    {
      name: "Rahmat Hidayat",
      role: "Event Organizer",
      content: "Armada bersih, tepat waktu, dan pelayanan ramah. PHD Trans selalu menjadi pilihan utama kami untuk transportasi event.",
      rating: 4
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Apa Kata <span className="text-shiny-purple">Mereka</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Dengarkan pengalaman pelanggan kami yang telah menikmati perjalanan bersama PHD Trans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 italic leading-relaxed">"{review.content}"</p>
              <div>
                <h4 className="text-base sm:text-lg text-white font-bold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
