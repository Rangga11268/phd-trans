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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dengarkan pengalaman pelanggan kami yang telah menikmati perjalanan bersama PHD Trans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
