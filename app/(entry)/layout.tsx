import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { siteConfig } from '@/config/site';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#15803D',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'सफल सर्जिकल हाउस | Saphal Surgical House',
    template: '%s | Saphal Surgical House',
  },
  description:
    'सफल सर्जिकल हाउस - कमल नगर मार्ग, नारायणगढ, चितवन। शल्यक्रिया औजार, ल्याब उपकरण, मेडिकल उपभोग्य सामग्री तथा होम-केयर सामग्री आपूर्तिकर्ता। सम्पर्क: ०५६-५९६०६०, ०५६-५९६१२०।',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'Saphal Surgical House',
    title: 'सफल सर्जिकल हाउस | Saphal Surgical House',
    images: [
      {
        url: '/brand/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Saphal Surgical House',
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: ['/brand/icon-512.png'],
  },
  alternates: {
    canonical: siteConfig.baseUrl,
    languages: {
      ne: `${siteConfig.baseUrl}/ne`,
      en: `${siteConfig.baseUrl}/en`,
      'x-default': `${siteConfig.baseUrl}/ne`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-[#17251C] antialiased flex flex-col min-h-screen">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
