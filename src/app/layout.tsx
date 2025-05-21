import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import GoogleMapsScript from '@/components/GoogleMapsScript';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Denver Roofing',
  description: 'Professional roofing services in Denver, CO. Expert roof repair, replacement, and maintenance for residential and commercial properties.',
  keywords: 'roofing, Denver, CO, roof repair, roof replacement, commercial roofing, residential roofing, hail damage repair',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <GoogleMapsScript />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Denver Roofing</h3>
                <p className="text-gray-400">
                  Professional roofing services for Denver and the Front Range area.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-gray-400 hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Main Street</li>
                  <li>Denver, CO 80202</li>
                  <li>Phone: (303) 555-0123</li>
                  <li>Email: info@denverroofing.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Denver</li>
                  <li>Aurora</li>
                  <li>Lakewood</li>
                  <li>Littleton</li>
                  <li>Englewood</li>
                  <li>Arvada</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Denver Roofing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 