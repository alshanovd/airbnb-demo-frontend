import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParLight,
  Stars,
  Star,
  H2,
  Section,
  SeeAll,
  NextPage,
  ParBold,
  Reviews,
  Img,
  SectionHead,
  NoWrap,
} from './../Exports';
import './../Exports/style.css';
import lasalentina from './lasalentina.png';
import dreamy from './dreamy.png';
import bedr3 from './bedr3.png';

const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParLight)`margin: 2px 0 0;`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Homes</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <div className="md-hide">
          <NextPage />
        </div>
        <Col lg={4} md={5}>
          <Img src={lasalentina} />
          <Desc>
            <ParBold>$82 La Salentina, see, nature & relax</ParBold>
            <Beds>Entrie house · 9 beds</Beds>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>97 · Superhost</Reviews>
            </Stars>
          </Desc>
        </Col>
        <Col lg={4} md={5}>
          <Img src={bedr3} />
          <Desc>
            <ParBold>$82 Your private 3 bedr. riad and exclusi...</ParBold>
            <Beds>Entrie house · 5 beds</Beds>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>97 · Superhost</Reviews>
            </Stars>
          </Desc>
        </Col>
        <Col lg={4} md={5}>
          <Img src={dreamy} />
          <Desc>
            <ParBold>$200 Dreamy Tropical Tree House</ParBold>
            <Beds>Entrie treehouse · 1 beds</Beds>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>97 · Superhost</Reviews>
            </Stars>
          </Desc>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
