import type { Metadata } from "next";
import "./globals.css";
import { Baskervville, Poppins } from 'next/font/google'
import Footer from "@/components/footer";

const baskervville = Baskervville({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskervville',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Espacio Darsha",
  description: "Espacio Darsha es un centro de estética que ofrece tratamientos corporales, faciales y masajes personalizados. Descubre un espacio pensado para tu bienestar y belleza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${baskervville.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
