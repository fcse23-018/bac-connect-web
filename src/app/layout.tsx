import type { Metadata, Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BAC Connect',
    template: '%s | BAC Connect',
  },
  description: 'Student portal for BAC. Connect with peers, access campus services, and stay informed.',
  icons: { icon: '/favicon.ico', apple: '/images/logo.png' },
  manifest: '/manifest.json',
  openGraph: {
    title: 'BAC Connect',
    description: 'Student portal for BAC.',
    siteName: 'BAC Connect',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#080B1A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen pt-14 lg:pl-64">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
