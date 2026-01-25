'use client';

import { Over_the_Rainbow, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import styled from 'styled-components';

const robotoMono = Roboto_Mono({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

const overTheRainbowFont = Over_the_Rainbow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const bimboFont = localFont({
  src: [
    {
      path: '../../public/fonts/Bimbo Trial.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Bimbo Ballpoint Trial.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bimbo',
  display: 'swap',
});

const boldoaMatFont = localFont({
  src: '../../public/fonts/Boldoa Mat.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-boldoa-mat',
  display: 'swap',
});

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f5f5f0;
`;

const PostcardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 3 / 2;
  background-image: url('/postcard.webp');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

const Content = styled.div`
  text-align: center;
  color: #0d216a;
  padding: 5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 540px) {
    gap: 1.75rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
  }
`;

const BimboText = styled.p`
  font-size: 1.25rem;
  color: #0d216a;
  font-weight: 800;
  line-height: 2;
  padding: 0 1rem;

  @media (min-width: 540px) {
    padding: 0 2.7rem;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

const Names = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: transparent;
  -webkit-text-stroke: 1.5px #0d216a;
  text-stroke: 1.5px #0d216a;
  paint-order: stroke fill;
  line-height: 0.85;
  display: block;
  margin-bottom: -1rem;

  @media (min-width: 540px) {
    font-size: 5rem;
  }
`;

const DateNumbers = styled.span`
  font-size: 1rem;
  font-weight: 300;
  -webkit-text-stroke: 2px #c8cd73;
  text-stroke: 1px #c8cd73;
  paint-order: stroke fill;

  @media (min-width: 540px) {
    font-size: 1.2rem;
  }
`;

const LocationStamp = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0em;
  line-height: 1.4;
  text-align: center;
  color: #0d216a;
  transform: rotate(-5deg);

  @media (min-width: 540px) {
    top: 2.5rem;
    left: 2.5rem;
    font-size: 1rem;
  }
`;

const Stamps = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 130px;
  height: auto;

  @media (min-width: 540px) {
    width: 200px;
  }
`;

export default function Home() {
  return (
    <Main>
      <PostcardContainer>
        <LocationStamp className={robotoMono.className}>
          PORTLAND, ME
          <br />
          22 AUG 2026
        </LocationStamp>
        <Stamps src="/stamps.webp" alt="Postage stamps" />
        <Content>
          <BimboText className={bimboFont.className}>save the date</BimboText>
          <Names className={boldoaMatFont.className}>NAT AND BEN</Names>
          <BimboText className={bimboFont.className}>
            are getting married on AUGUST <DateNumbers className={overTheRainbowFont.className}>22, 2026 </DateNumbers>
            in portland, maine and we can't wait to see you there.
          </BimboText>
        </Content>
      </PostcardContainer>
    </Main>
  );
}
