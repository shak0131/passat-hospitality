import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["700"], // Bold weight for PASSAT
  variable: "--font-cormorant"
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Passat Hospitality",
  description: "Your trusted partner in hospitality staffing solutions",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-brand-cream text-brand-black font-sans">
        <div className="flex flex-col min-h-screen">
          <nav className="bg-brand-cream">
            {/* Logo centered above nav links */}
            <div className="flex justify-center py-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/logo.png"
                  alt="Passat Hospitality Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            
            {/* Navigation links centered below logo */}
            <div className="border-t border-b border-gray-200">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-center space-x-12 py-4">
                  <Link href="/" className="font-montserrat font-semibold text-brand-black hover:text-brand-gold transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="/about" className="font-montserrat font-semibold text-brand-black hover:text-brand-gold transition-colors duration-200">
                    About Us
                  </Link>
                  <Link href="/services" className="font-montserrat font-semibold text-brand-black hover:text-brand-gold transition-colors duration-200">
                    Services
                  </Link>
                  <Link href="/clients" className="font-montserrat font-semibold text-brand-black hover:text-brand-gold transition-colors duration-200">
                    Clients
                  </Link>
                  <Link href="/contact" className="font-montserrat font-semibold text-brand-black hover:text-brand-gold transition-colors duration-200">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          <main className="bg-brand-cream flex-grow">{children}</main>
          
          <footer className="bg-brand-black text-brand-gold py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center font-montserrat">
                <p>&copy; {new Date().getFullYear()} Passat Hospitality. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
