'use client';

import { Play, Film } from 'lucide-react';

export default function CinematicVideo() {
  const videos = [
    {
      id: 1,
      title: "Cinematic Journey",
      src: "/assets/video/vidio%20phd%201.mp4",
      description: "Rasakan pengalaman perjalanan yang tak terlupakan bersama PHD Trans.",
      tag: "Experience"
    },
    {
      id: 2,
      title: "Luxury in Motion",
      src: "/assets/video/vidio%20phd%203.mp4",
      description: "Kenyamanan dan kemewahan dalam setiap kilometer perjalanan Anda.",
      tag: "Premium"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Film className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Galeri Video</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Saksikan keindahan armada dan layanan kami melalui lensa sinematik. Setiap detail dirancang untuk kenyamanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Video Container */}
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  poster="/assets/img/phdbus1.webp"
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Floating Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    {video.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 fill-white" />
                </div>
                
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
