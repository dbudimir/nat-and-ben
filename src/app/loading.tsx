'use client';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
}
