'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { boldoaMatFont, robotoMono } from '@/lib/fonts';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import AlternatingSection from './AlternatingSection';
import MaskedEdge from './MaskedEdge';
import SectionHeader from './SectionHeader';

const ImageStage = styled.div<{
  $mobileHeight?: string;
  $desktopHeight?: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ $mobileHeight }) => $mobileHeight || '300px'};
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    height: ${({ $desktopHeight }) => $desktopHeight || '400px'};
  }
`;
const TextContent = styled.div`
  color: ${COLORS.navy};
  font-size: 0.875rem;
  line-height: 1.8;
`;

const Intro = styled.p`
  margin-bottom: 1.5rem;
`;

const AccordionItem = styled.div`
  border: 1px solid rgba(13, 33, 106, 0.2);
  border-radius: 6px;
  margin-bottom: 0.75rem;
  overflow: hidden;
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  color: ${COLORS.navy};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(13, 33, 106, 0.03);
  }
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const HotelName = styled.span`
  font-size: 0.85rem;
  color: ${COLORS.navy};
  font-family: ${robotoMono.style.fontFamily};
  font-weight: 700;
`;

const HotelShortDesc = styled.span`
  font-size: 0.8rem;
  font-family: ${robotoMono.style.fontFamily};
  color: ${COLORS.navy};
  opacity: 0.7;
`;

const Chevron = styled.span<{ $open: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  flex-shrink: 0;
  margin-left: 0.75rem;
`;

const AccordionBody = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '800px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
  padding: ${({ $open }) => ($open ? '0 1.25rem 1.25rem' : '0 1.25rem')};
`;

const BookingLink = styled.a`
  color: ${COLORS.sage};
  font-weight: 500;
  text-decoration: underline;
  word-break: break-all;

  &:hover {
    opacity: 0.7;
  }
`;

const HOTELS = [
  {
    name: 'Aloft Hotel',
    shortDesc: 'New hotel on Commercial St — this is where we will be staying!',
    details: (
      <>
        <p>
          The Aloft is a new hotel in Portland, conveniently located on Commercial St with easy access to the entire Old
          Port and the water. This is where we will be staying!
        </p>
        <br />
        <p>
          We have a formal hotel block; if the block is full and you would like to stay here, please reach out to us and
          we can add additional rooms to the block. The last date to book a room is 7/22.
        </p>
        <br />
        <p>
          <BookingLink
            href="https://www.marriott.com/event-reservations/reservation-link.mi?guestreslink2=true&id=1772654578209&key=GRP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book the Aloft Hotel
          </BookingLink>
        </p>
      </>
    ),
  },
  {
    name: 'Holiday Inn By The Bay',
    shortDesc: 'Located in the Old Port, walking distance to rehearsal dinner',
    details: (
      <>
        <p>
          Holiday Inn By The Bay is located in the Old Port and is in walking distance to the rehearsal dinner and many
          great spots in Portland. While we do not have a formal hotel block, please find a 15% discount code below.
        </p>
        <br />
        <p>
          <strong>To book by phone:</strong> Call 1-800-HOLIDAY and refer to Booking Code: AE81N
        </p>
        <br />
        <p>
          <strong>To book online:</strong>
        </p>
        <p>
          <BookingLink
            href="https://www.ihg.com/holidayinn/hotels/us/en/portland/pwmdt/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99502056&icdv=99502056&qSlH=PWMDT&qCpid=787055017&qAAR=AE81N&qRtP=AE81N&setPMCookies=true&qSHBrC=HI&qDest=88%20Spring%20St%2C%20Portland%2C%20ME%2C%20US&srb_u=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Holiday Inn By The Bay
          </BookingLink>
        </p>
        <br />
        <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          Choose your Check-In and Check-Out Dates, hit View Prices on your desired room type. Please note the web page
          defaults to Member Rates. The Discount is from the non-Member Best Flex Rate that can be seen by sliding the
          toggle switch to non-Member. Use the Select button on the Wedding Rate.
        </p>
      </>
    ),
  },
  {
    name: 'Portland Regency Hotel & Spa',
    shortDesc: "Historic hotel in Portland's Old Port — 15% discount",
    details: (
      <>
        <p>
          The Regency is a historic hotel in Portland&apos;s Old Port. While we do not have a formal hotel block, please
          find a 15% discount code below.
        </p>
        <br />
        <p>
          <BookingLink
            href="https://be.synxis.com/?adult=1&arrive=2026-02-16&chain=56&child=0&config=PWMPR&currency=USD&depart=2026-02-17&hotel=237&level=hotel&locale=en-US&productcurrency=USD&promo=SOC24&rooms=1&theme=PWMPR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Portland Regency Hotel &amp; Spa
          </BookingLink>
        </p>
      </>
    ),
  },
];

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
    <title>Toggle details</title>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const LodgingSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback(
    (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex],
  );

  return (
    <AlternatingSection
      id="lodging"
      imagePosition="left"
      headerContent={<SectionHeader title="Lodging" />}
      textContent={
        <div className={robotoMono.className}>
          <TextContent>
            <Intro>
              There are many beautiful Airbnb&apos;s and hotels in the Portland area. If you would prefer to stay in a
              hotel, we have several options listed below.
            </Intro>

            {HOTELS.map((hotel, index) => (
              <AccordionItem key={hotel.name}>
                <AccordionHeader onClick={() => toggle(index)}>
                  <HotelInfo>
                    <HotelName className={boldoaMatFont.className}>{hotel.name}</HotelName>
                    <HotelShortDesc>{hotel.shortDesc}</HotelShortDesc>
                  </HotelInfo>
                  <Chevron $open={openIndex === index}>
                    <ChevronIcon />
                  </Chevron>
                </AccordionHeader>
                <AccordionBody $open={openIndex === index}>{hotel.details}</AccordionBody>
              </AccordionItem>
            ))}
          </TextContent>
        </div>
      }
      imageContent={
        <ImageStage $mobileHeight="60vw" $desktopHeight="420px">
          <MaskedEdge
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-3deg)',
              width: '80%',
              maxWidth: '500px',
            }}
          >
            <Image
              src="/nat-and-ben-maine.webp"
              alt="Nat and Ben in Portland, Maine"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </MaskedEdge>
        </ImageStage>
      }
    />
  );
};

export default LodgingSection;
