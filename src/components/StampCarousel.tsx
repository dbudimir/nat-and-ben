'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef } from 'react';
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
  width: 110vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  transform: rotate(${p => p.$rotation}deg);
  margin-top: ${p => p.$marginTop}px;
  margin-bottom: ${p => p.$marginBottom}px;
  touch-action: pan-y;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const Track = styled.div<{
  $direction: 'left' | 'right';
  $speed: number;
  $gap: number;
}>`
  display: flex;
  gap: ${p => p.$gap}px;
  width: max-content;
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
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, baseX: 0 });

  const grabTrack = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.animationPlayState = 'paused';
    const matrix = new window.DOMMatrix(window.getComputedStyle(track).transform);
    drag.current = { active: true, startX: clientX, baseX: matrix.m41 };
    track.style.transform = `translate3d(${matrix.m41}px, 0, 0)`;
  }, []);

  const moveTrack = useCallback((clientX: number) => {
    if (!drag.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const newX = drag.current.baseX + (clientX - drag.current.startX);
    track.style.transform = `translate3d(${newX}px, 0, 0)`;
  }, []);

  const releaseTrack = useCallback(
    (clientX: number) => {
      if (!drag.current.active) return;
      const track = trackRef.current;
      if (!track) return;
      drag.current.active = false;

      const currentX = drag.current.baseX + (clientX - drag.current.startX);
      const halfWidth = track.scrollWidth / 2;

      let pos = currentX % halfWidth;
      if (pos > 0) pos -= halfWidth;
      if (pos < -halfWidth) pos += halfWidth;

      const progress = direction === 'left' ? -pos / halfWidth : (pos + halfWidth) / halfWidth;

      track.style.animationName = 'none';
      track.style.transform = '';
      void track.offsetWidth;
      track.style.animationName = '';
      track.style.animationDelay = `${-progress * speed}s`;
      track.style.animationPlayState = 'running';
    },
    [direction, speed],
  );

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const onTouchStart = (e: globalThis.TouchEvent) => {
      grabTrack(e.touches[0].clientX);
    };
    const onTouchMove = (e: globalThis.TouchEvent) => {
      if (!drag.current.active) return;
      moveTrack(e.touches[0].clientX);
    };
    const onTouchEnd = (e: globalThis.TouchEvent) => {
      releaseTrack(e.changedTouches[0].clientX);
    };

    outer.addEventListener('touchstart', onTouchStart, { passive: true });
    outer.addEventListener('touchmove', onTouchMove, { passive: true });
    outer.addEventListener('touchend', onTouchEnd, { passive: true });
    outer.addEventListener('touchcancel', onTouchEnd, { passive: true });
    return () => {
      outer.removeEventListener('touchstart', onTouchStart);
      outer.removeEventListener('touchmove', onTouchMove);
      outer.removeEventListener('touchend', onTouchEnd);
      outer.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [grabTrack, moveTrack, releaseTrack]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') return;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      grabTrack(e.clientX);
    },
    [grabTrack],
  );
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') return;
      moveTrack(e.clientX);
    },
    [moveTrack],
  );
  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') return;
      releaseTrack(e.clientX);
    },
    [releaseTrack],
  );

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
    <Outer
      ref={outerRef}
      $rotation={rotation}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Track ref={trackRef} $direction={direction} $speed={speed} $gap={gap}>
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
              draggable={false}
              unoptimized
            />
          </ImageWrapper>
        ))}
      </Track>
    </Outer>
  );
};

export default StampCarousel;
