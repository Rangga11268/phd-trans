import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
const About = dynamic(() => import("@/components/About"));
const Achievement = dynamic(() => import("@/components/Achievement"));
const Destinations = dynamic(() => import("@/components/Destinations"));
const Safety = dynamic(() => import("@/components/Safety"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

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
