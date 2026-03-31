'use client';

import { BREAKPOINTS } from '@/lib/constants';
import styled from 'styled-components';

const Grid = styled.div`
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

const MobileHeader = styled.div`
  order: 0;
  text-align: center;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: block;
  }
`;

const TextColumn = styled.div<{ $imagePosition: 'left' | 'right'; $hasHeader: boolean }>`
  text-align: center;
  order: ${({ $hasHeader }) => ($hasHeader ? 2 : 1)};

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    order: ${({ $imagePosition }) => ($imagePosition === 'left' ? 2 : 1)};
  }
`;

const ImageColumn = styled.div<{ $imagePosition: 'left' | 'right'; $hasHeader: boolean }>`
  width: 100%;
  order: ${({ $hasHeader }) => ($hasHeader ? 1 : 0)};

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    order: ${({ $imagePosition }) => ($imagePosition === 'left' ? 1 : 2)};
  }
`;

type AlternatingSectionProps = {
  id: string;
  imagePosition: 'left' | 'right';
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
  headerContent?: React.ReactNode;
};

const AlternatingSection = ({
  id,
  imagePosition,
  textContent,
  imageContent,
  headerContent,
}: AlternatingSectionProps) => {
  return (
    <section id={id}>
      <Grid>
        {headerContent && <MobileHeader>{headerContent}</MobileHeader>}
        <TextColumn $imagePosition={imagePosition} $hasHeader={!!headerContent}>
          {headerContent && <DesktopHeader>{headerContent}</DesktopHeader>}
          {textContent}
        </TextColumn>
        <ImageColumn $imagePosition={imagePosition} $hasHeader={!!headerContent}>
          {imageContent}
        </ImageColumn>
      </Grid>
    </section>
  );
};

export default AlternatingSection;
