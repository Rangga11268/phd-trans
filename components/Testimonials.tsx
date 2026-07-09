import { Star } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const reviews = [
  {
    name: "Bagus Pee",
    role: "Local Guide · 26 ulasan",
    content:
      "Persewaan Bus Pariwisata Bigbus 50 seat, Medium 39 seat, Elf executive 21seat. Lengkap banget armadanya!",
    rating: 5,
  },
  {
    name: "Ahmad Rochim",
    role: "1 ulasan",
    content:
      "Bus nya guanteng poll.....saya bangga karna di Kabupaten kita ini Nganjuk ada Bus yg viral.....tapi dijamin untuk kenyamanan boleh di adu....",
    rating: 5,
  },
  {
    name: "Kingsman",
    role: "2 ulasan",
    content: "Sangat bagus. Armada premium dan pelayanan memuaskan.",
    rating: 5,
  },
  {
    name: "Agus Multimedia",
    role: "Local Guide · 81 ulasan",
    content: "Nagus tempat carter bus dn rlf. Recommended!",
    rating: 5,
  },
  {
    name: "Indra Ardiyanto",
    role: "Local Guide · 6 ulasan",
    content: "Bagus pelayan murah. Harga terjangkau untuk kualitas premium.",
    rating: 5,
  },
  {
    name: "Dannic Onlydann",
    role: "Local Guide · 150 ulasan",
    content:
      "Layanan prima 🔥🤘. Recommended banget untuk perjalanan wisata bersama keluarga.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
            Apa Kata <span className="text-shiny-purple">Mereka</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto px-4 font-light">
            Dengarkan pengalaman pelanggan kami yang telah menikmati perjalanan
            bersama PHD Trans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-8 sm:p-10 rounded-3xl border border-card-border hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-lg duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-text mb-8 italic leading-relaxed font-light">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-xl font-display">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg text-foreground font-bold font-display tracking-tight">
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

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-text text-base sm:text-lg mb-6">
            Masih ragu? Chat kami sekarang dan buktikan sendiri!
          </p>
          <a
            href="https://wa.me/6281353343110?text=Halo%20PHD%20Trans!%20Saya%20lihat%20testimoni%20dan%20tertarik.%20Mau%20konsultasi%20dulu%20dong%20%F0%9F%99%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-lg"
          >
            <WhatsAppIcon className="h-5 w-5" /> Chat dengan PHD Trans
          </a>
        </div>
      </div>
    </section>
  );
}
