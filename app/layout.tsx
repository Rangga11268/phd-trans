import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "PHD Trans - Sewa Bus Pariwisata Nganjuk",
  description:
    "Layanan sewa bus pariwisata premium di Nganjuk. Armada modern, fasilitas lengkap, dan pelayanan terbaik untuk perjalanan wisata Anda.",
  icons: {
    icon: "/assets/img/logonobg.png",
    shortcut: "/assets/img/logonobg.png",
    apple: "/assets/img/logonobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${manrope.variable} antialiased bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
