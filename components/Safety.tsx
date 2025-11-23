import { Shield, FileCheck, Heart, Wrench, Users, AlertTriangle } from 'lucide-react';

export default function Safety() {
  const features = [
    {
      icon: FileCheck,
      title: 'Sertifikat Kelayakan',
      description: 'Semua armada memiliki sertifikat uji kelayakan kendaraan dari Dishub.'
    },
    {
      icon: Users,
      title: 'Driver Profesional',
      description: 'SIM A Umum + pelatihan keselamatan berkala untuk semua pilot kami.'
    },
    {
      icon: Heart,
      title: 'Asuransi Perjalanan',
      description: 'Perlindungan penumpang dengan asuransi kecelakaan selama perjalanan.'
    },
    {
      icon: Wrench,
      title: 'Perawatan Rutin',
      description: 'Servis ekstrem setiap 5.000 KM untuk memastikan performa prima.'
    },
    {
      icon: AlertTriangle,
      title: 'Safety Equipment',
      description: 'Fire extinguisher, emergency exit, dan first aid kit di setiap unit.'
    },
    {
      icon: Shield,
      title: 'GPS Tracking',
      description: 'Monitoring real-time untuk keamanan perjalanan Anda.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-5" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Keamanan & Kepercayaan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shiny-purple">Safety</span> First, Always
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Standar keamanan tinggi untuk memastikan setiap perjalanan Anda aman dan nyaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:bg-white/10"
              >
                <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Shield className="h-12 w-12 text-primary" />
              <div className="text-left">
                <h4 className="text-white font-bold text-xl mb-1">100% Keamanan Terjamin</h4>
                <p className="text-gray-400 text-sm">Perjalanan Anda adalah prioritas utama kami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
