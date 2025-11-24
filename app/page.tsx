import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Destinations from "@/components/Destinations";
import Safety from "@/components/Safety";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load below-the-fold components for better initial page load
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="py-24 bg-black min-h-[400px]" />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-24 min-h-[400px]" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="py-24 min-h-[400px]" />,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Achievement />
      <Destinations />
      <Safety />
      <Gallery />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
