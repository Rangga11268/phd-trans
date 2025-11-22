import { Shield, Clock, Star } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safety First",
      description: "Our fleet is maintained to the highest standards, ensuring a safe journey for every passenger."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Punctuality",
      description: "We value your time. Our schedules are optimized to ensure you reach your destination on time."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Premium Comfort",
      description: "Experience luxury with our modern amenities, spacious seating, and professional service."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-primary">PHD Trans</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are dedicated to providing the best transportation experience in Indonesia. 
            Our commitment to excellence sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-6 bg-black/20 w-fit p-4 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
