import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function MerchandisePage() {
  const products = [
    {
      id: 1,
      name: "Kaos PHD Trans Official",
      price: "Rp 120.000",
      image: "/assets/img/merch-tshirt.jpg", // Placeholder path
      description: "Bahan Cotton Combed 30s, sablon plastisol berkualitas tinggi."
    },
    {
      id: 2,
      name: "Topi Exclusive",
      price: "Rp 85.000",
      image: "/assets/img/merch-hat.jpg", // Placeholder path
      description: "Topi baseball dengan bordir logo PHD Trans 3D."
    },
    {
      id: 3,
      name: "Gantungan Kunci Akrilik",
      price: "Rp 25.000",
      image: "/assets/img/merch-keychain.jpg", // Placeholder path
      description: "Gantungan kunci akrilik tebal dengan desain bus PHD Trans."
    },
    {
      id: 4,
      name: "Miniatur Bus (Diecast)",
      price: "Rp 450.000",
      image: "/assets/img/merch-diecast.jpg", // Placeholder path
      description: "Skala 1:50, detail presisi, bahan metal berkualitas."
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Official <span className="text-primary">Merchandise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Dapatkan koleksi merchandise eksklusif dari PHD Trans.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group">
                <div className="relative h-64 bg-black/50">
                  {/* Placeholder Image Logic */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <ShoppingBag className="h-12 w-12 opacity-50" />
                  </div>
                  {/* <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">{product.price}</span>
                    <Link 
                      href={`https://wa.me/6281234567890?text=Halo, saya ingin membeli ${product.name}`}
                      target="_blank"
                      className="bg-white/10 hover:bg-primary hover:text-black text-white p-2 rounded-lg transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
