import { Over_the_Rainbow, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const overTheRainbowFont = Over_the_Rainbow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const bimboFont = localFont({
  src: [
    {
      path: '../../public/fonts/Bimbo.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Bimbo Ballpoint.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bimbo',
  display: 'swap',
});

export const boldoaMatFont = localFont({
  src: '../../public/fonts/Boldoa Mat.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-boldoa-mat',
  display: 'swap',
});
