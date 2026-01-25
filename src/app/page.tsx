'use client';

import EventsSection from '@/components/EventsSection';
import FAQSection from '@/components/FAQSection';
import LodgingSection from '@/components/LodgingSection';
import RSVPSection from '@/components/RSVPSection';
import RegistrySection from '@/components/RegistrySection';
import ScrollReveal from '@/components/ScrollReveal';
import StampCarousel from '@/components/StampCarousel';
import StickyNav from '@/components/StickyNav';
import TravelSection from '@/components/TravelSection';
import { COLORS, MAX_WIDTH, SECTION_GAP } from '@/lib/constants';
import { bimboFont, boldoaMatFont, overTheRainbowFont, robotoMono } from '@/lib/fonts';
import { useRef } from 'react';
import styled from 'styled-components';

const STAMP_IMAGES = Array.from({ length: 12 }, (_, i) => `/stamps/nat-and-ben-stamp-${i + 1}.webp`);

const PageWrapper = styled.div`
  background-color: ${COLORS.offWhite};
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  max-height: 800px;
  padding: 1rem;
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
  color: ${COLORS.navy};
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
  font-size: 1.4rem;
  color: ${COLORS.navy};
  font-weight: 800;
  line-height: 2;
  padding: 0 0.8rem;

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
  font-weight: 400;
  letter-spacing: 0.05em;
  color: transparent;
  -webkit-text-stroke: 1px ${COLORS.navy};
  text-stroke: 1px ${COLORS.navy};
  paint-order: stroke fill;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 0.85;
  display: block;
  margin-bottom: -1rem;
  opacity: 0.8;

  @media (min-width: 540px) {
    font-size: 5rem;
    -webkit-text-stroke: 1.5px ${COLORS.navy};
    text-stroke: 1.5px ${COLORS.navy};
  }
`;

const DateNumbers = styled.span`
  font-size: 1rem;
  font-weight: 300;
  -webkit-text-stroke: 2px ${COLORS.sage};
  text-stroke: 1px ${COLORS.sage};
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
  color: ${COLORS.navy};
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

const BikeImage = styled.img`
  width: 100px;
  height: auto;
  display: block;
  margin: 4rem auto 0 auto;
`;

const SiteContainer = styled.main`
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: ${SECTION_GAP}px;
  padding-bottom: ${SECTION_GAP}px;
`;

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageWrapper>
      <HeroSection ref={heroRef}>
        <PostcardContainer>
          <LocationStamp className={robotoMono.className}>
            PORTLAND, ME
            <br />
            22 AUG 2026
          </LocationStamp>
          <Stamps src="/stamps.webp" alt="Postage stamps" />
          <Content>
            <BimboText aria-hidden>&nbsp;</BimboText>
            <Names className={boldoaMatFont.className}>NAT AND BEN</Names>
            <BimboText className={bimboFont.className}>
              are getting married on AUGUST{' '}
              <DateNumbers className={overTheRainbowFont.className}>22, 2026 </DateNumbers>
              in portland, maine and we can&apos;t wait to see you there.
            </BimboText>
          </Content>
        </PostcardContainer>
      </HeroSection>

      <StickyNav heroRef={heroRef} />

      <SiteContainer>
        <StampCarousel
          images={STAMP_IMAGES}
          direction="left"
          rotation={-2}
          imagePadding={10}
          marginTop={20}
          marginBottom={20}
        />

        <ScrollReveal>
          <EventsSection />
        </ScrollReveal>

        <ScrollReveal>
          <TravelSection />
        </ScrollReveal>

        <ScrollReveal>
          <LodgingSection />
        </ScrollReveal>

        <ScrollReveal>
          <RegistrySection />
        </ScrollReveal>

        <ScrollReveal>
          <RSVPSection />
        </ScrollReveal>

        <StampCarousel
          images={STAMP_IMAGES}
          direction="right"
          rotation={3}
          imagePadding={10}
          marginTop={20}
          marginBottom={20}
        />

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>

        <BikeImage src="/nat-and-ben-bike.webp" alt="Nat and Ben on a bike" />
      </SiteContainer>
    </PageWrapper>
  );
}
