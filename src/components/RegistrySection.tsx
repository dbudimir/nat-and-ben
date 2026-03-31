'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import Image from 'next/image';
import styled from 'styled-components';

import AlternatingSection from './AlternatingSection';
import SectionHeader from './SectionHeader';

const TextContent = styled.div`
  color: ${COLORS.navy};
  font-size: 0.875rem;
  line-height: 1.8;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.875rem 2.5rem;
  background-color: ${COLORS.navy};
  color: ${COLORS.offWhite};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${COLORS.sage};
    color: ${COLORS.navy};
    transform: translateY(-1px);
  }
`;

const ImageStage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    height: 400px;
  }
`;

const StickerImageWrapper = styled.div`
  width: 260px;
  transform: rotate(-3deg);
  filter: drop-shadow(0 0 0 white) drop-shadow(0 0 0 white) drop-shadow(0 0 4px white) drop-shadow(0 0 8px white)
    drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25));

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    width: 320px;
  }
`;

const RegistrySection = () => {
  return (
    <AlternatingSection
      id="registry"
      imagePosition="right"
      headerContent={<SectionHeader title="Registry" />}
      textContent={
        <div className={robotoMono.className}>
          <TextContent>
            <p>
              Your presence is more than enough &mdash; plus Ben and I likely forgot to get you a wedding gift, so
              please do not feel obligated to get us anything! For those who have asked, we have attached our registry
              link &mdash; we plan to keep adding to it!
            </p>
            <CTAButton
              href="https://www.zola.com/registry/natalieandbenjaminaugust22"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Registry
            </CTAButton>
          </TextContent>
        </div>
      }
      imageContent={
        <ImageStage>
          <StickerImageWrapper>
            <Image
              src="/nat-and-ben-sticker.webp"
              alt="Nat and Ben"
              width={320}
              height={320}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </StickerImageWrapper>
        </ImageStage>
      }
    />
  );
};

export default RegistrySection;
