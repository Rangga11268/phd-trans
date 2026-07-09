import Image from "next/image";
import {
  Phone,
  Calendar,
  CheckCircle,
  MessageSquare,
  Download,
} from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQ//Z";

export default function ReservationPage() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/Reservasi1.webp"
            alt="PHD Trans Reservation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Informasi <span className="text-shiny-purple">Reservasi</span>
          </h1>
          <p className="text-xl text-muted-text max-w-2xl mx-auto mb-4 font-sans font-light">
            Simak informasi lengkap mengenai layanan dan armada kami melalui
            brosur di bawah ini.
          </p>
          <div>
            <span className="inline-block px-5 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-bold text-xs tracking-widest">
                #PurpleGank
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="relative bg-card rounded-3xl overflow-hidden border border-card-border shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/assets/img/ContactUs.webp"
                  alt="Informasi Reservasi 1"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg">
                    <Download className="h-5 w-5" />
                    Lihat Detail
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative bg-card rounded-3xl overflow-hidden border border-card-border shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/assets/img/ContactUs2.webp"
                  alt="Informasi Reservasi 2"
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg">
                    <Download className="h-5 w-5" />
                    Lihat Detail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Contoh{" "}
              <span className="text-shiny-purple">Voucher Reservasi</span>
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto text-lg font-light">
              Dokumen resmi perjalanan wisata Anda yang menjamin kenyamanan dan
              keamanan armada pilihan.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl group perspective-1000">
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                <div className="h-4 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

                <div className="flex flex-col md:flex-row min-h-[450px]">
                  <div className="flex-[2] p-8 md:p-12 bg-surface relative overflow-hidden">
                    <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-2xl overflow-hidden relative shadow-md">
                            <Image
                              src="/assets/img/logoPHD.jpg"
                              alt="Logo"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-2xl tracking-tight font-display">
                              PHD Trans
                            </h3>
                            <p className="text-primary text-sm font-bold tracking-widest uppercase">
                              Official Reservation
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold border border-green-200 uppercase tracking-wide">
                            Confirmed
                          </div>
                          <p className="text-muted-text text-xs mt-2 font-mono">
                            #BOOK-2024-8829
                          </p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <p className="text-xs text-muted-text uppercase tracking-widest mb-2 font-semibold">
                            Penyewa / Rombongan
                          </p>
                          <h4 className="font-bold text-foreground text-3xl font-display">
                            Keluarga Besar SMAN 1 Nganjuk
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-xs text-muted-text uppercase tracking-widest mb-2 font-semibold">
                              Unit Armada
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2.5 rounded-xl">
                                <CheckCircle className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <p className="font-bold text-foreground text-lg">
                                  Big Bus SHD
                                </p>
                                <p className="text-sm text-muted-text">
                                   50 Seats • Adiputro Jetbus 3+
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-text uppercase tracking-widest mb-2 font-semibold">
                              Durasi Wisata
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 p-2.5 rounded-xl">
                                <Calendar className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <p className="font-bold text-foreground text-lg">
                                  4 Hari 3 Malam
                                </p>
                                <p className="text-sm text-muted-text">
                                  25 - 28 Desember 2024
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-muted-text uppercase tracking-widest mb-2 font-semibold">
                            Rute Perjalanan
                          </p>
                          <div className="flex items-center gap-6 bg-card p-5 rounded-2xl border border-surface shadow-sm">
                            <span className="font-bold text-foreground font-display text-lg">
                              NGANJUK
                            </span>
                            <div className="flex-1 h-0.5 bg-gray-200 relative">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-1.5 rounded-full">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              </div>
                            </div>
                            <span className="font-bold text-primary text-2xl font-display">
                              BALI
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[1.2] bg-primary/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-8 flex items-center gap-3 font-display text-foreground">
                        <span className="w-1.5 h-8 bg-primary rounded-full" />
                        Fasilitas
                      </h4>
                      <ul className="space-y-4 text-muted-text text-sm mb-8">
                        <li className="flex items-center gap-3">
                          <div className="bg-primary/10 p-1 rounded-full">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          AC Luxury
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="bg-primary/10 p-1 rounded-full">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          Reclining Seat 2-2
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="bg-primary/10 p-1 rounded-full">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          Karaoke & TV
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="bg-primary/10 p-1 rounded-full">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          Bantal & Selimut
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="bg-primary/10 p-1 rounded-full">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          Dispenser & Coolbox
                        </li>
                      </ul>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-card-border">
                      <p className="text-xs text-muted-text mb-2 uppercase tracking-widest font-semibold">
                        Butuh Bantuan?
                      </p>
                      <div className="flex items-center gap-3 text-foreground font-bold text-lg font-display">
                        <Phone className="h-5 w-5 text-primary" />
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

      <HowItWorks />

      <FAQ />

      <section className="py-20 bg-card border-t border-card-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Siap Memesan <span className="text-shiny-purple">Sekarang</span>
                ?
              </h2>
              <p className="text-muted-text mb-10 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Jangan ragu untuk menghubungi kami jika ada pertanyaan atau
                ingin melakukan pemesanan. Tim kami siap membantu Anda 24/7.
              </p>
              <a
                href="https://wa.me/6281353343110?text=Halo,%20saya%20ingin%20reservasi%20bus%20PHD%20Trans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
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
