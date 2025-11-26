import Image from "next/image";
import {
  Phone,
  Calendar,
  CheckCircle,
  MessageSquare,
  Download,
} from "lucide-react";
import HowItWorks from "@/components/HowItWorks";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQ//Z";

export default function ReservationPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/Reservasi1.jpg"
            alt="PHD Trans Reservation"
            fill
            sizes="100vw"
            className="object-cover blur-sm"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Informasi <span className="text-shiny-purple">Reservasi</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-4 animate-fade-in-up delay-100">
            Simak informasi lengkap mengenai layanan dan armada kami melalui
            brosur di bawah ini.
          </p>
          <div className="animate-fade-in-up delay-150">
            <span className="inline-block px-5 py-1.5 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-sm">
              <span className="text-primary font-bold text-xs tracking-widest">
                #PurpleGank
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Brochure Images Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image 1 */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                <Image
                  src="/assets/img/Reservasi1.jpg"
                  alt="Informasi Reservasi 1"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Download className="h-5 w-5" />
                    Lihat Detail
                  </span>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <Image
                  src="/assets/img/Reservasi 2.jpg"
                  alt="Informasi Reservasi 2"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Download className="h-5 w-5" />
                    Lihat Detail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Voucher Section */}
      <section className="py-24 relative overflow-hidden bg-black/20">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contoh{" "}
              <span className="text-shiny-purple">Voucher Reservasi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dokumen resmi perjalanan wisata Anda yang menjamin kenyamanan dan
              keamanan armada pilihan.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl group perspective-1000">
              {/* Voucher Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                {/* Decorative Top Bar */}
                <div className="h-3 bg-gradient-to-r from-slate-900 via-primary to-slate-900" />

                <div className="flex flex-col md:flex-row min-h-[400px]">
                  {/* Left Side (Main Info) */}
                  <div className="flex-[2] p-8 md:p-12 bg-slate-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/img/pattern.png')] bg-repeat" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-xl overflow-hidden relative shadow-md">
                            <Image
                              src="/assets/img/logoPHD.jpg"
                              alt="Logo"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-2xl tracking-tight">
                              PHD Trans
                            </h3>
                            <p className="text-primary text-sm font-bold tracking-widest uppercase">
                              Official Reservation
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                            CONFIRMED
                          </div>
                          <p className="text-slate-400 text-xs mt-2 font-mono">
                            #BOOK-2024-8829
                          </p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                            Penyewa / Rombongan
                          </p>
                          <h4 className="font-bold text-slate-900 text-3xl">
                            Keluarga Besar SMAN 1 Nganjuk
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                              Unit Armada
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-bold text-slate-900 text-lg">
                                  Big Bus SHD
                                </p>
                                <p className="text-sm text-gray-500">
                                  50 Seats • Adiputro Jetbus 3+
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                              Durasi Wisata
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2 rounded-lg">
                                <Calendar className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-bold text-slate-900 text-lg">
                                  4 Hari 3 Malam
                                </p>
                                <p className="text-sm text-gray-500">
                                  25 - 28 Desember 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                            Rute Perjalanan
                          </p>
                          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="font-bold text-slate-700">
                              NGANJUK
                            </span>
                            <div className="flex-1 h-0.5 bg-gray-200 relative">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-1 rounded-full">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              </div>
                            </div>
                            <span className="font-bold text-primary text-xl">
                              BALI
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side (Summary & Contact) */}
                  <div className="flex-1 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        Fasilitas
                      </h4>
                      <ul className="space-y-3 text-gray-300 text-sm mb-8">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" /> AC
                          Luxury
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />{" "}
                          Reclining Seat 2-2
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />{" "}
                          Karaoke & TV
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />{" "}
                          Bantal & Selimut
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />{" "}
                          Dispenser & Coolbox
                        </li>
                      </ul>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-white/10">
                      <p className="text-xs text-gray-400 mb-2">
                        Butuh Bantuan?
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <Phone className="h-4 w-4" />
                        0813-5334-3110
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-primary/5 to-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Siap Memesan <span className="text-shiny-purple">Sekarang</span>
                ?
              </h2>
              <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                Jangan ragu untuk menghubungi kami jika ada pertanyaan atau
                ingin melakukan pemesanan. Tim kami siap membantu Anda 24/7.
              </p>
              <a
                href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-full hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/20"
              >
                <Phone className="h-6 w-6" />
                <span className="text-lg">Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
