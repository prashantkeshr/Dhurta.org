import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  Noto_Sans,
  Noto_Sans_Devanagari,
  Noto_Sans_Bengali,
  Noto_Sans_Arabic,
  Noto_Sans_SC,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_Thai,
  Noto_Sans_Tamil,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHURTA — The Clever Choice for Global Digital Transformation",
  description:
    "DHURTA delivers clever, world-class digital transformation — strategy, design, and engineering that outsmarts complexity, anywhere in the world.",
  metadataBase: new URL("https://dhurta.org"),
  openGraph: {
    title: "DHURTA — The Clever Choice for Global Digital Transformation",
    description:
      "We don't just build websites and apps. We build clever solutions that outsmart challenges, outpace competitors, and outperform expectations — anywhere in the world.",
    url: "https://dhurta.org",
    siteName: "DHURTA",
    type: "website",
    images: [{ url: "/dhurta-logo.png", width: 384, height: 384, alt: "Dhurta emblem" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${notoSans.variable} ${notoDevanagari.variable} ${notoBengali.variable} ${notoArabic.variable} ${notoSC.variable} ${notoJP.variable} ${notoKR.variable} ${notoThai.variable} ${notoTamil.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
