import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/logoPHD.jpg"
                  alt="PHD Trans Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-shiny">PHD</span> <span className="text-shiny-purple">Trans</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Layanan bus pariwisata premium di Nganjuk. Nikmati kenyamanan, keamanan, dan kemewahan di setiap perjalanan wisata Anda bersama armada modern kami.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Nganjuk, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary" />
                <span>0813-5334-3110</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@phdtrans.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Tautan Cepat</h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/reservation" className="text-gray-400 hover:text-primary transition-colors">Reservasi</Link></li>
              <li><Link href="/merchandise" className="text-gray-400 hover:text-primary transition-colors">Merchandise</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/phd_trans/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PHD Trans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
