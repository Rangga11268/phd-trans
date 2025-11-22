import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              PHD <span className="text-primary">Trans</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium bus transportation services in Nganjuk. Experience comfort, safety, and luxury on every journey with our modern fleet.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Nganjuk, East Java, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@phdtrans.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all text-white">
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
