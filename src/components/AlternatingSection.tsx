'use client';

import { BREAKPOINTS } from '@/lib/constants';
import styled from 'styled-components';

const Grid = styled.div<{ $imagePosition: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const TextColumn = styled.div<{ $imagePosition: 'left' | 'right' }>`
  text-align: center;
  order: 1;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    order: ${({ $imagePosition }) => ($imagePosition === 'left' ? 2 : 1)};
  }
`;

const ImageColumn = styled.div<{ $imagePosition: 'left' | 'right' }>`
  width: 100%;
  order: 0;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    order: ${({ $imagePosition }) => ($imagePosition === 'left' ? 1 : 2)};
  }
`;

type AlternatingSectionProps = {
  id: string;
  imagePosition: 'left' | 'right';
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
};

const AlternatingSection = ({ id, imagePosition, textContent, imageContent }: AlternatingSectionProps) => {
  return (
    <section id={id}>
      <Grid $imagePosition={imagePosition}>
        <TextColumn $imagePosition={imagePosition}>{textContent}</TextColumn>
        <ImageColumn $imagePosition={imagePosition}>{imageContent}</ImageColumn>
      </Grid>
    </section>
  );
};

export default AlternatingSection;
