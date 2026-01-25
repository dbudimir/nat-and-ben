'use client';

import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
	0% { background-position: -200% center; }
	100% { background-position: 200% center; }
`;

const StickerWrapper = styled.div<{ $rotation?: number }>`
  --c1: #ef548f;
  --c2: #ef8b6d;
  --c3: #cfef6b;
  --c4: #3bf0c1;
  --c5: #bb4af0;

  position: relative;
  display: inline-block;
  transform: rotate(${p => p.$rotation ?? 3}deg);
  filter: drop-shadow(2px 3px 4px rgba(0, 0, 0, 0.35));
  z-index: 2;
`;

const StickerBacking = styled.div`
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 3px;
    background: linear-gradient(135deg, var(--c1), var(--c2), var(--c3), var(--c4), var(--c5), var(--c1));
    background-size: 300% 100%;
    animation: ${shimmer} 6s linear infinite;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const HoloOverlay = styled.div`
  position: absolute;
  inset: 3px;
  border-radius: 4px;
  background: linear-gradient(
    135deg,
    rgba(239, 84, 143, 0.06),
    rgba(239, 139, 109, 0.06),
    rgba(207, 239, 107, 0.06),
    rgba(59, 240, 193, 0.06),
    rgba(187, 74, 240, 0.06)
  );
  background-size: 300% 100%;
  animation: ${shimmer} 6s linear infinite;
  pointer-events: none;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

type StickerProps = {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
};

const Sticker = ({ children, rotation, className }: StickerProps) => {
  return (
    <StickerWrapper $rotation={rotation} className={className}>
      <StickerBacking>
        <HoloOverlay />
        <Content>{children}</Content>
      </StickerBacking>
    </StickerWrapper>
  );
};

export default Sticker;
