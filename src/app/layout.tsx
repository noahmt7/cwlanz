import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DevBanner from "@/components/DevBanner";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Catholic Women's League Aotearoa New Zealand",
  description:
    "Catholic Women's League Aotearoa New Zealand — Faith and Service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DevBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
