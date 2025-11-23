import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Destinations from "@/components/Destinations";
import Safety from "@/components/Safety";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

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
