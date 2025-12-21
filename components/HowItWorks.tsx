import {
  MessageCircle,
  Bus,
  CreditCard,
  CheckCircle,
  Plane,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Konsultasi",
      description:
        "Hubungi kami via WhatsApp atau telepon untuk konsultasi kebutuhan perjalanan Anda.",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      icon: Bus,
      title: "Pilih Armada & Tanggal",
      description:
        "Pilih unit bus yang sesuai dengan jumlah penumpang dan tentukan jadwal perjalanan.",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: 3,
      icon: CreditCard,
      title: "DP & Konfirmasi",
      description:
        "Bayar Down Payment (DP) 30% untuk mengamankan jadwal dan armada pilihan Anda.",
      color: "from-pink-500 to-pink-600",
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Pelunasan",
      description:
        "Lunasi pembayaran maksimal 3 hari sebelum tanggal keberangkatan.",
      color: "from-green-500 to-green-600",
    },
    {
      number: 5,
      icon: Plane,
      title: "Perjalanan Dimulai",
      description:
        "Bus akan tiba sesuai jadwal. Nikmati perjalanan nyaman bersama PHD Trans!",
      color: "from-primary to-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cara <span className="text-shiny-purple">Pemesanan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proses booking yang mudah dan transparan. Hanya 5 langkah sederhana!
          </p>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-primary" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="flex justify-center mb-8">
                    <div
                      className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/20 relative z-10 border-4 border-slate-900`}
                    >
                      <div className="text-center">
                        <Icon className="h-10 w-10 text-white mx-auto mb-1" />
                        <span className="text-white font-bold text-sm">
                          Step {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-600" />
                )}

                <div className="flex gap-6 relative z-10">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-bold text-sm">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 mb-6 text-lg">
              Siap memulai perjalanan impian Anda?
            </p>
            <a
              href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-full hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-lg">Mulai Konsultasi Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
