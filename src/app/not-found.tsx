'use client';

import Link from 'next/link';
import styled from 'styled-components';

const NotFoundWrapper = styled.main`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

const ErrorCode = styled.div`
  font-size: var(--font-size-6xl);
  color: var(--color-primary);
  opacity: 0.3;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const NotFoundTitle = styled.h1`
  font-size: var(--font-size-4xl);
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const NotFoundMessage = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 400px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: var(--color-background);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all var(--transition);
  font-size: var(--font-size-lg);

  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
  }
`;

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <ContentContainer>
        <ErrorCode>404</ErrorCode>
        <NotFoundTitle>Not Found</NotFoundTitle>
        <NotFoundMessage>Sorry, we couldn&apos;t find the page you&apos;re looking for.</NotFoundMessage>
        <BackLink href="/">Go home</BackLink>
      </ContentContainer>
    </NotFoundWrapper>
  );
}
