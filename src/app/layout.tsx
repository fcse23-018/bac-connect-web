import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BAC Connect - Student Hub',
    template: '%s | BAC Connect',
  },
  description: 'The secure student hub for Botswana School of Business Sciences. Connect, collaborate, and thrive.',
  icons: { icon: '/favicon.ico', apple: '/logo.png' },
  manifest: '/manifest.json',
  themeColor: '#080B1A',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  openGraph: {
    title: 'BAC Connect',
    description: 'The secure student hub for Botswana School of Business Sciences.',
    siteName: 'BAC Connect',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background">
        <Navbar />
        <Sidebar />
        <main className="pt-16 lg:pl-64 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
