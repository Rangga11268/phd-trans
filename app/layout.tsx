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
  metadataBase: new URL("https://phd-trans.vercel.app"),
  title: {
    default: "PHD Trans - Sewa Bus Pariwisata Premium Nganjuk",
    template: "%s | PHD Trans",
  },
  description:
    "Layanan sewa bus pariwisata mewah di Nganjuk, Jawa Timur. Armada Jetbus 5 terbaru, fasilitas karaoke & legrest, siap menemani perjalanan wisata Anda dengan kenyamanan VIP.",
  keywords: [
    "Sewa Bus Nganjuk",
    "Bus Pariwisata Nganjuk",
    "Rental Bus Mewah",
    "PHD Trans",
    "Sewa Bus Jetbus 5",
    "Bus Pariwisata Jawa Timur",
    "Harga Sewa Bus Nganjuk",
    "Bus Premium Nganjuk",
  ],
  authors: [{ name: "PHD Trans Team" }],
  creator: "PHD Trans",
  publisher: "PHD Trans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PHD Trans - Luxury Bus Rental Nganjuk",
    description:
      "Nikmati perjalanan wisata tak terlupakan dengan armada premium PHD Trans. Fasilitas lengkap, pelayanan profesional, dan harga terbaik.",
    url: "https://phd-trans.vercel.app",
    siteName: "PHD Trans",
    images: [
      {
        url: "/assets/img/phdbus1.webp",
        width: 1200,
        height: 630,
        alt: "PHD Trans Premium Bus Fleet",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHD Trans - Sewa Bus Pariwisata Premium",
    description:
      "Solusi transportasi wisata terbaik di Nganjuk. Armada modern dengan fasilitas VIP untuk kenyamanan perjalanan Anda.",
    images: ["/assets/img/phdbus1.webp"],
    creator: "@phd_trans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/logonobg.png",
    shortcut: "/assets/img/logonobg.png",
    apple: "/assets/img/logonobg.png",
  },
  verification: {
    google: "google-site-verification-code", // Placeholder, user can update later
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
