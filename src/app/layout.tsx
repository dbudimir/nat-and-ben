import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // Replace with your domain
  title: {
    default: 'Nat and Ben',
    template: 'Nat and Ben | %s',
  },
  description: 'Your project description here.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Author Name' }],
  creator: 'Creator Name',
  publisher: 'Publisher Name',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Nat and Ben',
    title: 'Nat and Ben - Tagline',
    description: 'Your project description here.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nat and Ben',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://example.com',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </head>
      <body className={inter.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
