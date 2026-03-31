'use client';

import { COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import Image from 'next/image';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';

const Wrapper = styled.section`
  text-align: center;
`;

const CatPhoto = styled(Image)`
  display: block;
  margin: 0 auto 1.5rem auto;
  border-radius: 12px;
  object-fit: contain;
`;

const Description = styled.p`
  color: ${COLORS.navy};
  font-size: 0.9rem;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto;
  opacity: 0.85;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 3.5rem;
  background-color: ${COLORS.navy};
  color: ${COLORS.offWhite};
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${COLORS.sage};
    color: ${COLORS.navy};
    transform: translateY(-2px);
  }
`;

const RSVPSection = () => {
  return (
    <Wrapper id="rsvp">
      <SectionHeader title="RSVP" />
      <CatPhoto src="/carm.webp" alt="Carm the cat" width={280} height={200} />
      <Description className={robotoMono.className}>
        We can&apos;t wait to celebrate with you! Please let us know if you can make it by clicking the button below.
      </Description>
      <CTAButton
        href="https://www.zola.com/wedding/natalieandbenjaminaugust22/rsvp"
        target="_blank"
        rel="noopener noreferrer"
        className={robotoMono.className}
      >
        RSVP Now
      </CTAButton>
    </Wrapper>
  );
};

export default RSVPSection;
