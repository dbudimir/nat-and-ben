'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

const NAV_ITEMS = [
  { label: 'Events', id: 'events' },
  { label: 'Travel', id: 'travel' },
  { label: 'Lodging', id: 'lodging' },
  { label: 'Registry', id: 'registry' },
  { label: 'RSVP', id: 'rsvp' },
  { label: 'FAQ', id: 'faq' },
];

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(245, 245, 240, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(13, 33, 106, 0.1);
  pointer-events: auto;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.75rem 1.5rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    justify-content: flex-start;
    gap: 1.25rem;
    padding: 0.625rem 1rem;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${COLORS.navy};
  white-space: nowrap;
  padding: 0.25rem 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

type StickyNavProps = {
  heroRef: React.RefObject<HTMLElement | null>;
};

const StickyNav = ({ heroRef }: StickyNavProps) => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (!heroRef.current) return;
    const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
    setVisible(latest > heroBottom - 60);
  });

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <NavBar
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <NavInner className={robotoMono.className}>
        {NAV_ITEMS.map(item => (
          <NavLink key={item.id} onClick={() => handleClick(item.id)}>
            {item.label}
          </NavLink>
        ))}
      </NavInner>
    </NavBar>
  );
};

export default StickyNav;
