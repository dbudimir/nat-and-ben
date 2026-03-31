'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { boldoaMatFont, robotoMono } from '@/lib/fonts';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${COLORS.navy};
  letter-spacing: 0.04em;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.navy};
  line-height: 1;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1rem;
  }
`;

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <Wrapper>
      <Title className={boldoaMatFont.className}>{title}</Title>
      {subtitle && <Subtitle className={robotoMono.className}>{subtitle}</Subtitle>}
    </Wrapper>
  );
};

export default SectionHeader;
