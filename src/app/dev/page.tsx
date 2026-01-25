'use client';

import { Inter, Over_the_Rainbow, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import styled from 'styled-components';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const overTheRainbow = Over_the_Rainbow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const bimboFont = localFont({
  src: [
    {
      path: '../../../public/fonts/Bimbo.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Bimbo Ballpoint.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bimbo',
  display: 'swap',
});

const boldoaMatFont = localFont({
  src: '../../../public/fonts/Boldoa Mat.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-boldoa-mat',
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const DESIGN_SYSTEM_COLORS = [
  { name: 'primary', variable: '--color-primary', hex: '#3b82f6' },
  { name: 'primary-hover', variable: '--color-primary-hover', hex: '#2563eb' },
  { name: 'secondary', variable: '--color-secondary', hex: '#64748b' },
  { name: 'background', variable: '--color-background', hex: '#ffffff' },
  { name: 'surface', variable: '--color-surface', hex: '#f8fafc' },
  { name: 'text', variable: '--color-text', hex: '#1e293b' },
  { name: 'text-muted', variable: '--color-text-muted', hex: '#64748b' },
  { name: 'border', variable: '--color-border', hex: '#e2e8f0' },
  { name: 'error', variable: '--color-error', hex: '#ef4444' },
  { name: 'success', variable: '--color-success', hex: '#22c55e' },
  { name: 'warning', variable: '--color-warning', hex: '#f59e0b' },
];

const PAGE_COLORS = [
  { name: 'navy', hex: '#0d216a', usage: 'Postcard text' },
  { name: 'olive / sage', hex: '#c8cd73', usage: 'Date stroke accent' },
  { name: 'off-white', hex: '#f5f5f0', usage: 'Page background' },
];

const TYPE_SCALE = [
  { label: '6xl', variable: '--font-size-6xl', size: '3.75rem' },
  { label: '5xl', variable: '--font-size-5xl', size: '3rem' },
  { label: '4xl', variable: '--font-size-4xl', size: '2.25rem' },
  { label: '3xl', variable: '--font-size-3xl', size: '1.875rem' },
  { label: '2xl', variable: '--font-size-2xl', size: '1.5rem' },
  { label: 'xl', variable: '--font-size-xl', size: '1.25rem' },
  { label: 'lg', variable: '--font-size-lg', size: '1.125rem' },
  { label: 'base', variable: '--font-size-base', size: '1rem' },
  { label: 'sm', variable: '--font-size-sm', size: '0.875rem' },
  { label: 'xs', variable: '--font-size-xs', size: '0.75rem' },
];

const FONT_WEIGHTS = [
  { label: 'Normal', variable: '--font-weight-normal', value: 400 },
  { label: 'Medium', variable: '--font-weight-medium', value: 500 },
  { label: 'Semibold', variable: '--font-weight-semibold', value: 600 },
  { label: 'Bold', variable: '--font-weight-bold', value: 700 },
];

const BREAKPOINTS = [
  { label: 'sm', value: '640px' },
  { label: 'md', value: '768px' },
  { label: 'lg', value: '1024px' },
  { label: 'xl', value: '1280px' },
  { label: '2xl', value: '1536px' },
];

const SPACING = [
  { label: 'padding-mobile', value: '1rem' },
  { label: 'padding-tablet', value: '1.5rem' },
  { label: 'padding-desktop', value: '2rem' },
];

const PANGRAM = 'The quick brown fox jumps over the lazy dog';

// ---------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------

const Page = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
`;

const PageTitle = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const SubSectionTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
`;

const SwatchCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
`;

const SwatchPreview = styled.div<{ $bg: string; $border?: boolean }>`
  height: 80px;
  background-color: ${p => p.$bg};
  ${p => p.$border && 'border-bottom: 1px solid var(--color-border);'}
`;

const SwatchInfo = styled.div`
  padding: 0.625rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const SwatchName = styled.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
`;

const SwatchMeta = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  font-family: ${robotoMono.style.fontFamily}, monospace;
`;

const FontCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const FontName = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

const FontSample = styled.p<{ $size?: string }>`
  font-size: ${p => p.$size || '2rem'};
  line-height: 1.3;
  margin-bottom: 0.25rem;
`;

const FontMeta = styled.span`
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  font-family: ${robotoMono.style.fontFamily}, monospace;
  margin-top: 0.5rem;
`;

const ScaleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;

const ScaleLabel = styled.span`
  width: 120px;
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  font-family: ${robotoMono.style.fontFamily}, monospace;
`;

const ScaleValue = styled.span`
  width: 80px;
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  font-family: ${robotoMono.style.fontFamily}, monospace;
`;

const WeightRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
`;

const Th = styled.th`
  text-align: left;
  padding: 0.5rem 1rem 0.5rem 0;
  font-weight: var(--font-weight-semibold);
  border-bottom: 2px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Td = styled.td`
  padding: 0.5rem 1rem 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  font-family: ${robotoMono.style.fontFamily}, monospace;
`;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DevStyleGuide() {
  return (
    <Page>
      <PageTitle>Style Guide</PageTitle>
      <PageSubtitle>Design tokens and typographic specimens for Nat &amp; Ben</PageSubtitle>

      {/* ---- COLORS ---- */}
      <Section>
        <SectionTitle>Color Palette</SectionTitle>

        <SubSectionTitle>Design System</SubSectionTitle>
        <SwatchGrid>
          {DESIGN_SYSTEM_COLORS.map(c => {
            const needsBorder = c.name === 'background' || c.name === 'surface';
            return (
              <SwatchCard key={c.name}>
                <SwatchPreview $bg={`var(${c.variable})`} $border={needsBorder} />
                <SwatchInfo>
                  <SwatchName>{c.name}</SwatchName>
                  <SwatchMeta>{c.hex}</SwatchMeta>
                  <SwatchMeta>{c.variable}</SwatchMeta>
                </SwatchInfo>
              </SwatchCard>
            );
          })}
        </SwatchGrid>

        <SubSectionTitle>Page-Specific</SubSectionTitle>
        <SwatchGrid>
          {PAGE_COLORS.map(c => {
            const needsBorder = c.name === 'off-white';
            return (
              <SwatchCard key={c.name}>
                <SwatchPreview $bg={c.hex} $border={needsBorder} />
                <SwatchInfo>
                  <SwatchName>{c.name}</SwatchName>
                  <SwatchMeta>{c.hex}</SwatchMeta>
                  <SwatchMeta>{c.usage}</SwatchMeta>
                </SwatchInfo>
              </SwatchCard>
            );
          })}
        </SwatchGrid>
      </Section>

      {/* ---- FONTS ---- */}
      <Section>
        <SectionTitle>Fonts</SectionTitle>

        <FontCard>
          <FontName>Inter (Google Font)</FontName>
          <FontSample className={inter.className} $size="2rem">
            {PANGRAM}
          </FontSample>
          <FontSample className={inter.className} $size="1rem">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </FontSample>
          <FontMeta>var(--font-inter) &middot; Weights 100&ndash;900 &middot; Body / UI default</FontMeta>
        </FontCard>

        <FontCard>
          <FontName>Roboto Mono (Google Font)</FontName>
          <FontSample className={robotoMono.className} $size="2rem">
            {PANGRAM}
          </FontSample>
          <FontSample className={robotoMono.className} $size="1rem">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </FontSample>
          <FontMeta>Monospace &middot; Weight 300 &middot; Location stamp</FontMeta>
        </FontCard>

        <FontCard>
          <FontName>Over the Rainbow (Google Font)</FontName>
          <FontSample className={overTheRainbow.className} $size="2rem">
            {PANGRAM}
          </FontSample>
          <FontSample className={overTheRainbow.className} $size="1rem">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </FontSample>
          <FontMeta>Handwritten &middot; Weight 400 &middot; Date accent</FontMeta>
        </FontCard>

        <FontCard>
          <FontName>Bimbo (Local Font)</FontName>
          <FontSample className={bimboFont.className} $size="2rem">
            {PANGRAM}
          </FontSample>
          <FontSample className={bimboFont.className} $size="1rem">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </FontSample>
          <FontMeta>var(--font-bimbo) &middot; Includes Bimbo Ballpoint variant &middot; Save-the-date body</FontMeta>
        </FontCard>

        <FontCard>
          <FontName>Boldoa Mat (Local Font)</FontName>
          <FontSample className={boldoaMatFont.className} $size="3rem">
            {PANGRAM}
          </FontSample>
          <FontSample className={boldoaMatFont.className} $size="1.25rem">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </FontSample>
          <FontMeta>var(--font-boldoa-mat) &middot; Display / headline &middot; &quot;NAT AND BEN&quot;</FontMeta>
        </FontCard>
      </Section>

      {/* ---- TYPOGRAPHY SCALE ---- */}
      <Section>
        <SectionTitle>Typography Scale</SectionTitle>

        <SubSectionTitle>Size Scale</SubSectionTitle>
        {TYPE_SCALE.map(t => (
          <ScaleRow key={t.label}>
            <ScaleLabel>{t.variable}</ScaleLabel>
            <ScaleValue>{t.size}</ScaleValue>
            <span style={{ fontSize: `var(${t.variable})`, lineHeight: 1.2 }}>{PANGRAM}</span>
          </ScaleRow>
        ))}

        <SubSectionTitle>Font Weights</SubSectionTitle>
        {FONT_WEIGHTS.map(w => (
          <WeightRow key={w.label}>
            <ScaleLabel>{w.variable}</ScaleLabel>
            <ScaleValue>{w.value}</ScaleValue>
            <span
              style={{
                fontWeight: `var(${w.variable})` as unknown as number,
                fontSize: 'var(--font-size-xl)',
              }}
            >
              {w.label} &mdash; {PANGRAM}
            </span>
          </WeightRow>
        ))}
      </Section>

      {/* ---- SPACING & BREAKPOINTS ---- */}
      <Section>
        <SectionTitle>Spacing &amp; Breakpoints</SectionTitle>

        <SubSectionTitle>Spacing Tokens</SubSectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Token</Th>
              <Th>Value</Th>
            </tr>
          </thead>
          <tbody>
            {SPACING.map(s => (
              <tr key={s.label}>
                <Td>{s.label}</Td>
                <Td>{s.value}</Td>
              </tr>
            ))}
          </tbody>
        </Table>

        <SubSectionTitle>Breakpoints</SubSectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Min-Width</Th>
            </tr>
          </thead>
          <tbody>
            {BREAKPOINTS.map(b => (
              <tr key={b.label}>
                <Td>{b.label}</Td>
                <Td>{b.value}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
    </Page>
  );
}
