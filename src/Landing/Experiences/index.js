import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  Stars,
  Star,
  H2,
  Section,
  SeeAll,
  NextPage,
  WordBold,
  ParagraphLight,
  Img,
  Reviews,
  SectionHead,
  NoWrap,
} from './../../UI/UI';
import forest from './forest.png';
import salsa from './salsa.png';
import mountian from './mountian.png';
import whale from './whale.png';

const Desc = styled.div`
  font-family: CircularAirBold, 'Helvetica Neue', Helvetica, sans-serif;
  margin: 8px 0 0;
  padding: 0;
  color: #383838;
`;

const Price = styled(WordBold)`padding-right: 3px;`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Experiences</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <NextPage />
        <Col xs={6} md={4} lg={3}>
          <Img src={forest} />
          <Desc>
            <ParagraphLight>
              <Price>$29</Price>
              Forest therapy
            </ParagraphLight>
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
        <Col xs={6} md={4} lg={3}>
          <Img src={whale} />
          <Desc>
            <ParagraphLight>
              <Price>$69</Price>
              Whale watching
            </ParagraphLight>
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
        <Col xs={6} md={4} lg={3}>
          <Img src={mountian} />
          <Desc>
            <ParagraphLight>
              <Price>$69</Price>
              Table Mountain Summit, Cable Car Down
            </ParagraphLight>
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
        <Col xs={6} md={4} lg={3}>
          <Img src={salsa} />
          <Desc>
            <ParagraphLight>
              <Price>$50</Price>
              Salsa Night
            </ParagraphLight>
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
