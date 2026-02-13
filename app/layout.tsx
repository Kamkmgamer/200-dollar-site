import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella Italia | Authentic Italian Restaurant",
  description: "Experience authentic Italian cuisine at Bella Italia. Fresh pasta, wood-fired pizza, and classic Italian dishes.",
  keywords: "Italian restaurant, pasta, pizza, Anytown, fine dining",
  openGraph: {
    title: "Bella Italia Restaurant",
    description: "Experience authentic Italian cuisine at Bella Italia",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
