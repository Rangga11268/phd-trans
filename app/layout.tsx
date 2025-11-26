import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
