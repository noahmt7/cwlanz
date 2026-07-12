import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import DevBanner from "@/components/DevBanner";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catholic Women's League Aotearoa New Zealand",
  description:
    "Catholic Women's League Aotearoa New Zealand — Faith and Service.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <DevBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
