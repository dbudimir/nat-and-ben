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
  metadataBase: new URL('https://natandben.me'),
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
    url: 'https://natandben.me',
    siteName: 'Nat and Ben',
    title: "Nat and Ben - We're getting married!",
    description:
      "Nat and Ben are getting married on August 22, 2026 in Portland, Maine. We can't wait to see you there!",
    images: [
      {
        url: '/nat-and-ben-thumbnail.webp',
        width: 1200,
        height: 630,
        alt: 'Nat and Ben - Portland, ME - August 22, 2026',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://natandben.me',
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
          <link
            key={`stamp-${n}`}
            rel="preload"
            as="image"
            type="image/webp"
            href={`/stamps/nat-and-ben-stamp-${n}.webp`}
          />
        ))}
      </head>
      <body className={inter.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
