'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';

const Wrapper = styled.section`
  max-width: 760px;
  margin: 0 auto;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin-bottom: 0.75rem;
`;

const Question = styled.button`
  font-size: 1.25rem;
  border: 1px solid rgba(13, 33, 106, 0.2);
  background: none;
  padding: 1rem 1.25rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.navy};
  gap: 1rem;

  &:hover {
    background-color: rgba(13, 33, 106, 0.03);
  }

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.2rem;
  }
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.33, 1, 0.68, 1);
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
`;

const AnswerOuter = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.35s cubic-bezier(0.33, 1, 0.68, 1);
`;

const AnswerInner = styled.div<{ $open: boolean }>`
  overflow: hidden;

  > div {
    padding: 1rem 1.25rem 0.5rem;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? '0' : '-4px')});
    transition:
      opacity 0.25s ${({ $open }) => ($open ? '0.1s' : '0s')} ease,
      transform 0.25s ${({ $open }) => ($open ? '0.1s' : '0s')} ease;
    font-size: 0.85rem;
    color: ${COLORS.navy};
    line-height: 1.8;

    p {
      margin-bottom: 0.75rem;
    }

    h4 {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin: 1.25rem 0 0.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 0.75rem;
    }

    li {
      margin-bottom: 0.35rem;
    }

    a {
      color: ${COLORS.sage};
      font-weight: 500;
      text-decoration: underline;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const ChevronIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <title>Toggle answer</title>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQ_DATA = [
  {
    question: 'What is the dress code?',
    answer: (
      <p>
        Please wear anything you feel comfortable in! Think garden cocktail / festive attire. It will be August and in
        Nat&apos;s parents backyard, so we would recommend lightweight fabrics and comfortable shoes.
      </p>
    ),
  },
  {
    question: 'Can I bring a plus one?',
    answer: (
      <p>
        Our guest list is limited to those named on your invitation. If your invitation includes a plus one, they will
        be listed with your name when you RSVP.
      </p>
    ),
  },
  {
    question: 'Are kids invited?',
    answer: <p>Yes! Please bring your adorable children!</p>,
  },
  {
    question: 'Do I need to buy tickets to the Seadogs game?',
    answer: (
      <p>
        We have a number of available tickets for the game &mdash; additional details will be provided closer to the
        date!
      </p>
    ),
  },
  {
    question: 'What should I do in the area?',
    answer: (
      <>
        <p>Portland in the summer is the best! There are endless fun activities, we have just listed some below.</p>

        <h4>Beaches</h4>
        <ul>
          <li>Higgins Beach</li>
          <li>Scarborough Beach</li>
        </ul>

        <h4>Places to Walk</h4>
        <ul>
          <li>Macworth Island, Falmouth</li>
          <li>Eastern Promenade, Portland</li>
          <li>Audubon Sanctuary, Falmouth</li>
          <li>Portland Headlight / Fort Williams State Park, Cape Elizabeth</li>
        </ul>

        <h4>On the Water</h4>
        <ul>
          <li>Casco Bay Ferry for a tour around the harbor or to most of the islands</li>
          <li>Peaks Island: Rental bikes, ice cream shops, beaches</li>
          <li>Great Diamond Island, Diamond Cove stop: Delicious lunch spot, lovely walks</li>
          <li>
            Rental kayaks and paddle boards from Portland &mdash;{' '}
            <a href="https://www.portlandpaddle.net/rentals/kayak-rentals/" target="_blank" rel="noopener noreferrer">
              Portland Paddle
            </a>
          </li>
        </ul>

        <h4>Other</h4>
        <ul>
          <li>Portland Museum of Art</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Where should I go for breakfast on Sunday?',
    answer: (
      <>
        <p>
          We are glad you asked!! We have a list of our most favorite cafes, diners, bakeries, and breakfast spots in
          Portland below.
        </p>
        <ul>
          <li>Bread &amp; Friends</li>
          <li>Tandem Coffee</li>
          <li>Becky&apos;s Diner</li>
          <li>Scratch Bakery</li>
          <li>Standard Baking</li>
          <li>Bard Coffee</li>
          <li>Coffee by Design</li>
          <li>Belleville</li>
          <li>Norimoto Cafe</li>
          <li>Night Moves Bread</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What if I have more questions?',
    answer: <p>Please text or email us! We would love to hear from you.</p>,
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = useCallback(
    (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    },
    [activeIndex],
  );

  return (
    <Wrapper id="faq">
      <SectionHeader title="FAQ" />
      <FAQList>
        {FAQ_DATA.map((item, index) => (
          <FAQItem key={item.question}>
            <Question className={robotoMono.className} onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <Chevron $open={activeIndex === index}>
                <ChevronIcon />
              </Chevron>
            </Question>
            <AnswerOuter $open={activeIndex === index}>
              <AnswerInner $open={activeIndex === index}>
                <div className={robotoMono.className}>{item.answer}</div>
              </AnswerInner>
            </AnswerOuter>
          </FAQItem>
        ))}
      </FAQList>
    </Wrapper>
  );
};

export default FAQSection;
