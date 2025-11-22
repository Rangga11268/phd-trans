import { Shield, Clock, Star, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-primary">PHD Trans</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your trusted partner in premium transportation. We are committed to delivering excellence in every journey.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize bus travel in Indonesia, PHD Trans has grown from a small local operator to a premier transportation service provider in East Java.
                </p>
                <p>
                  We understand that travel is not just about reaching a destination, but about the experience along the way. That's why we invest heavily in our fleet maintenance, crew training, and passenger amenities.
                </p>
                <p>
                  Today, we are proud to serve thousands of satisfied customers, connecting cities with safety, comfort, and style.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">10k+</h3>
                <p className="text-gray-400">Happy Passengers</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-gray-400">Safety Record</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Star className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">4.9</h3>
                <p className="text-gray-400">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be the leading and most trusted bus transportation service in Indonesia, setting the benchmark for safety, comfort, and customer satisfaction.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Our Mission
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Prioritize passenger safety above all else.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Provide consistent, punctual, and reliable service.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Continuously upgrade our fleet and facilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
