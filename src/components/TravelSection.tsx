'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import Image from 'next/image';
import styled from 'styled-components';

import AlternatingSection from './AlternatingSection';
import SectionHeader from './SectionHeader';

const ImageStage = styled.div<{
  $mobileHeight?: string;
  $desktopHeight?: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ $mobileHeight }) => $mobileHeight || '300px'};
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    height: ${({ $desktopHeight }) => $desktopHeight || '400px'};
  }
`;

const TextContent = styled.div`
  color: ${COLORS.navy};
  font-size: 0.875rem;
  line-height: 1.8;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ShuttleCallout = styled.div`
  background: #e5e6c4;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-top: 1.5rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8rem;
  line-height: 1.7;
  color: ${COLORS.navy};
  font-weight: 500;
  border: 1px solid ${COLORS.navy};
`;

const SubHeading = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${COLORS.navy};
  margin: 1.5rem 0 0.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const TravelSection = () => {
  return (
    <AlternatingSection
      id="travel"
      imagePosition="right"
      textContent={
        <div className={robotoMono.className}>
          <SectionHeader title="Travel" />
          <TextContent>
            <SubHeading>Air Travel</SubHeading>
            Fly into PWM, where rental cars and Ubers are options to get into Portland.
            <SubHeading>Bus</SubHeading>
            Concord Coach Lines runs frequent buses from Boston and NYC.
            <SubHeading>Train</SubHeading>
            Amtrak runs trains from Boston and NYC.
            <SubHeading>Ground Transportation</SubHeading>
            Parking will be limited. Please carpool and follow signs upon arrival.
            <p
              style={{
                fontSize: '0.75rem',
                lineHeight: '1.7',
                marginTop: '1rem',
                textTransform: 'italic',
              }}
              className={robotoMono.className}
            >
              Uber and Lyft are available to and from all locations.
            </p>
          </TextContent>

          <ShuttleCallout>
            At 10pm, a shuttle will run from the wedding to the afterparty at Bubba&apos;s and the downtown hotel block.
          </ShuttleCallout>
        </div>
      }
      imageContent={
        <ImageStage $mobileHeight="400px" $desktopHeight="600px">
          <Image
            src="/nat-and-ben-cuba.webp"
            alt="Nat and Ben in Cuba"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
              maxHeight: '500px',
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(0.9)',
              rotate: '5deg',
            }}
          />
        </ImageStage>
      }
    />
  );
};

export default TravelSection;
