import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParagraphLight,
  Stars,
  Star,
  H2,
  Section,
  SeeAll,
  NextPage,
  ParagraphBold,
  Reviews,
  Img,
  SectionHead,
  NoWrap,
  MdHide,
} from './../UI';
import lasalentina from './lasalentina.png';
import dreamy from './dreamy.png';
import bedr3 from './bedr3.png';

const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Homes</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <NextPage />
        </MdHide>
        <Col xs={9} md={5} lg={4}>
          <Img src={lasalentina} />
          <Desc>
            <ParagraphBold>$82 La Salentina, see, nature & relax</ParagraphBold>
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
        <Col xs={9} md={5} lg={4}>
          <Img src={bedr3} />
          <Desc>
            <ParagraphBold>
              $82 Your private 3 bedr. riad and exclusi...
            </ParagraphBold>
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
        <Col xs={9} md={5} lg={4}>
          <Img src={dreamy} />
          <Desc>
            <ParagraphBold>$200 Dreamy Tropical Tree House</ParagraphBold>
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
