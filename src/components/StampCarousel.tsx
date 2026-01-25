'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';

type StampCarouselProps = {
  images: string[];
  direction?: 'left' | 'right';
  /** Duration in seconds for one full cycle (higher = slower) */
  speed?: number;
  /** CSS rotation in degrees applied to the entire carousel strip */
  rotation?: number;
  /** Gap between images in px */
  gap?: number;
  /** Max height of images in px */
  maxHeight?: number;
  /** Additional inline styles applied to each image wrapper */
  imageStyle?: React.CSSProperties;
  /** Padding around each image in px */
  imagePadding?: number;
  /** Rotation applied to individual images in degrees */
  imageRotation?: number;
  /** Top margin in px */
  marginTop?: number;
  /** Bottom margin in px */
  marginBottom?: number;
};

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  const rand = seededRandom(seed);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const scrollLeft = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
`;

const scrollRight = keyframes`
  from { transform: translate3d(-50%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
`;

const Outer = styled.div<{
  $rotation: number;
  $marginTop: number;
  $marginBottom: number;
}>`
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%) rotate(${p => p.$rotation}deg);
  overflow: hidden;
  margin-top: ${p => p.$marginTop}px;
  margin-bottom: ${p => p.$marginBottom}px;
`;

const Track = styled.div<{
  $direction: 'left' | 'right';
  $speed: number;
  $gap: number;
}>`
  display: flex;
  gap: ${p => p.$gap}px;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  ${p =>
    p.$direction === 'left'
      ? css`
          animation: ${scrollLeft} ${p.$speed}s linear infinite;
        `
      : css`
          animation: ${scrollRight} ${p.$speed}s linear infinite;
        `}
`;

const ImageWrapper = styled.div<{
  $maxHeight: number;
  $padding: number;
  $imageRotation: number;
}>`
  flex-shrink: 0;
  height: ${p => p.$maxHeight}px;
  padding: ${p => p.$padding}px;
  transform: rotate(${p => p.$imageRotation}deg);

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
  }
`;

const StampCarousel = ({
  images,
  direction = 'left',
  speed = 120,
  rotation = 0,
  gap = 24,
  maxHeight = 180,
  imageStyle,
  imagePadding = 0,
  imageRotation = 0,
  marginTop = 0,
  marginBottom = 0,
}: StampCarouselProps) => {
  const shuffledImages = useMemo(() => {
    const seed = images.reduce((acc, s, i) => acc + s.charCodeAt(i % s.length) * (i + 1), 0);
    return shuffleArray(images, seed);
  }, [images]);
  const doubled = useMemo(
    () => [
      ...shuffledImages.map((src, i) => ({ src, id: `a-${i}` })),
      ...shuffledImages.map((src, i) => ({ src, id: `b-${i}` })),
    ],
    [shuffledImages],
  );

  return (
    <Outer $rotation={rotation} $marginTop={marginTop} $marginBottom={marginBottom}>
      <Track $direction={direction} $speed={speed} $gap={gap}>
        {doubled.map(({ src, id }) => (
          <ImageWrapper
            key={id}
            $maxHeight={maxHeight}
            $padding={imagePadding}
            $imageRotation={imageRotation}
            style={imageStyle}
          >
            <Image
              src={src}
              alt=""
              width={0}
              height={maxHeight}
              sizes={`${maxHeight * 1.5}px`}
              style={{ width: 'auto', height: '100%' }}
              unoptimized
            />
          </ImageWrapper>
        ))}
      </Track>
    </Outer>
  );
};

export default StampCarousel;
