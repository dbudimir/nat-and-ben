'use client';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Heading = styled.h3`
  max-width: 600px;
  font-size: var(--font-size-4xl);
  color: var(--color-text);
  margin-bottom: 1rem;
  text-align: center;
`;

export default function Home() {
  return (
    <Main>
      <Heading>Coming soon</Heading>
      <Heading>The official wedding website of Natalie and Ben</Heading>
    </Main>
  );
}
