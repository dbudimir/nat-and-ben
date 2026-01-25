'use client';

import { BREAKPOINTS, COLORS } from '@/lib/constants';
import { robotoMono } from '@/lib/fonts';
import styled from 'styled-components';

import EventCard from './EventCard';
import MaskedEdge from './MaskedEdge';
import SectionHeader from './SectionHeader';
import Sticker from './Sticker';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 400px);
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: repeat(2, minmax(0, 400px));
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const SaturdayCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: block;
    position: relative;
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    grid-column: 1 / -1;
    width: 100%;
    max-width: 560px;
    justify-self: center;
  }
`;

const AfterPartySticker = styled(Sticker)`
  font-size: 0.8rem;
  color: ${COLORS.navy};
  line-height: 1.7;
  text-align: center;
  align-self: center;
  margin-top: 0.5rem;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    top: 10px;
    rotate: -4deg;
    width: 80%;
  }

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    position: absolute;
    bottom: -4.5rem;
    right: -5rem;
    z-index: 3;
    margin-top: 0;
  }
`;

// const SundayNote = styled.div`
// 	margin-top: 1.5rem;
// 	text-align: center;
// 	color: ${COLORS.navy};
// 	opacity: 0.5;
// 	font-size: 0.8rem;
// 	line-height: 1.7;
// 	max-width: 720px;
// 	margin-left: auto;
// 	margin-right: auto;

// 	span {
// 		display: block;
// 		font-size: 0.7rem;
// 		letter-spacing: 0.1em;
// 		text-transform: uppercase;
// 		margin-bottom: 0.35rem;
// 		opacity: 0.8;
// 	}

// 	@media (max-width: ${BREAKPOINTS.mobile}px) {
// 		margin-top: 3rem;
// 	}
// `;

const EventsSection = () => {
  return (
    <section id="events">
      <SectionHeader title="Events" />
      <Grid>
        <MaskedEdge>
          <EventCard
            day="Thursday, August 20"
            title="Portland Seadogs Game"
            details={
              <>
                Taylor Swift Night (Slugger&apos;s Version!)
                <br />
                First pitch 6pm
              </>
            }
          />
        </MaskedEdge>
        <MaskedEdge>
          <EventCard
            day="Friday, August 21"
            title="Welcome Party"
            details={
              <>
                Boone&apos;s Fish House and Oyster Room
                <br />
                5:30-7:30 Rehearsal Dinner (by invitation)
                <br />
                7:30-9:30 Welcome Drinks
              </>
            }
          />
        </MaskedEdge>
        <SaturdayCardWrapper>
          <MaskedEdge>
            <EventCard
              day="Saturday, August 22"
              title="Wedding"
              details={
                <>
                  Ceremony, dinner, and dancing <br /> at Nat&apos;s house
                  <br />
                  <br />
                  20 Old Powerhouse Rd, Falmouth, Maine
                  <br />
                  <br />
                  Please arrive by 4pm
                </>
              }
            />
          </MaskedEdge>
          <AfterPartySticker rotation={4} className={robotoMono.className}>
            <strong>After Party!</strong>
            <br />
            Bubbas Sulky Lounge
            <br />
            WIG THEMED <br />{' '}
            <p style={{ margin: 0, fontSize: '0.7rem' }} className={robotoMono.className}>
              {' '}
              (BRING YOUR OWN WIG)
            </p>
            10pm-1am
          </AfterPartySticker>
        </SaturdayCardWrapper>
      </Grid>

      {/* // temp hide until we have a Sunday event */}
      {/* <SundayNote className={robotoMono.className}>
				<span>Sunday, August 23</span>
				No official wedding brunch but please enjoy all of the best breakfast
				food and coffee Portland has to offer! We have listed some of our
				favorite spots in the FAQ section.
			</SundayNote> */}
    </section>
  );
};

export default EventsSection;
