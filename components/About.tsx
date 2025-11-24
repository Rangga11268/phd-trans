import { Shield, Clock, Star } from 'lucide-react';
import { memo, useMemo } from 'react';

function About() {
  const features = useMemo(() => [
    {
      icon: <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: "Keselamatan Utama",
      description: "Armada kami dirawat dengan standar tertinggi, menjamin perjalanan yang aman bagi setiap penumpang."
    },
    {
      icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: "Tepat Waktu",
      description: "Kami menghargai waktu Anda. Jadwal kami dioptimalkan untuk memastikan Anda tiba di tujuan tepat waktu."
    },
    {
      icon: <Star className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />,
      title: "Kenyamanan Premium",
      description: "Nikmati kemewahan dengan fasilitas modern, kursi luas, dan layanan profesional."
    }
  ], []);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Mengapa Memilih <span className="text-shiny-purple">PHD Trans</span>?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Kami berdedikasi untuk memberikan pengalaman transportasi wisata terbaik di Indonesia. Komitmen kami terhadap keunggulan membedakan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-6 bg-black/20 w-fit p-4 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(About);
