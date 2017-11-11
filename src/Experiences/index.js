import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  Stars,
  Star,
  H2,
  Section,
  SeeAll,
  NextPage,
  SpanBold,
  ParLight,
  Img,
  Reviews,
  SectionHead,
  NoWrap,
  MdHide,
} from './../Exports';
import forest from './forest.png';
import salsa from './salsa.png';
import mountian from './mountian.png';
import whale from './whale.png';

const Desc = styled.p`
  font-family: CircularAirBold;
  margin: 8px 0 0;
  padding: 0;
  color: #383838;
`;

const Price = styled(SpanBold)`
  padding-right: 3px;
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Experiences</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <NextPage />
        </MdHide>
        <Col lg={3} md={4} xs={6}>
          <Img src={forest} />
          <Desc>
            <ParLight>
              <Price>$29</Price>
              Forest therapy
            </ParLight>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>47 reviews</Reviews>
            </Stars>
          </Desc>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={whale} />
          <Desc>
            <ParLight>
              <Price>$69</Price>
              Whale watching
            </ParLight>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>45 reviews</Reviews>
            </Stars>
          </Desc>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={mountian} />
          <Desc>
            <ParLight>
              <Price>$69</Price>
              Table Mountain Summit, Cable Car Down
            </ParLight>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>44 reviews</Reviews>
            </Stars>
          </Desc>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={salsa} />
          <Desc>
            <ParLight>
              <Price>$50</Price>
              Salsa Night
            </ParLight>
            <Stars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Reviews>49 reviews</Reviews>
            </Stars>
          </Desc>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
