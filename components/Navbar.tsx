'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/logoPHD.jpg"
                  alt="PHD Trans Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-slate-300">
                PHD <span className="text-slate-300">Trans</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Beranda
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Tentang Kami
              </Link>
              <Link href="/fleet" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Armada
              </Link>
              <Link href="/reservation" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Reservasi
              </Link>
              <Link href="/merchandise" className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Merch
              </Link>
              <Link href="/contact" className="bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                Pesan Sekarang
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link 
              href="/fleet" 
              className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Armada
            </Link>
            <Link 
              href="/reservation" 
              className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Reservasi
            </Link>
            <Link 
              href="/merchandise" 
              className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Merch
            </Link>
            <Link 
              href="/contact" 
              className="text-primary block px-3 py-2 rounded-md text-base font-bold hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
