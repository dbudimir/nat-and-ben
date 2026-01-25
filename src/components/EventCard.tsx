'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { bimboFont, robotoMono } from '@/lib/fonts';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    padding: 2rem 1.25rem;
  }
`;

const BackgroundLayer = styled.div<{
  $opacity: number;
  $filter: string;
}>`
  position: absolute;
  inset: 0;
  background-image: url('/postcard.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${p => p.$filter};
  pointer-events: none;
  z-index: 0;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Day = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${COLORS.navy};
  opacity: 0.7;
  font-weight: 700;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${COLORS.navy};
  line-height: 1.15;
  margin: 0.25rem 0;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.65rem;
  }
`;

const Details = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.navy};
  line-height: 1.7;
  opacity: 0.8;
`;

type EventCardProps = {
  day: string;
  title: string;
  details: React.ReactNode;
  backgroundOpacity?: number;
  backgroundFilter?: string;
};

const EventCard = ({ day, title, details, backgroundOpacity = 0.35, backgroundFilter = 'none' }: EventCardProps) => {
  return (
    <Card>
      <BackgroundLayer $opacity={backgroundOpacity} $filter={backgroundFilter} />
      <CardContent>
        <Day className={robotoMono.className}>{day}</Day>
        <Title className={bimboFont.className}>{title}</Title>
        <Details className={robotoMono.className}>{details}</Details>
      </CardContent>
    </Card>
  );
};

export default EventCard;
