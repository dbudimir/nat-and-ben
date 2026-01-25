'use client';

import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.sage} 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type PlaceholderImageProps = {
  label?: string;
};

const PlaceholderImage = ({ label }: PlaceholderImageProps) => {
  return (
    <Box role="img" aria-label={label || 'Placeholder image'}>
      {/* Intentionally empty - placeholder for future image */}
    </Box>
  );
};

export default PlaceholderImage;
