import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParagraphLight,
  H2,
  Section,
  SeeAll,
  NextPage,
  ParagraphBold,
  Img,
  SectionHead,
  NoWrap,
  MdHide,
} from './../../UI/UI';
import chum from './chum.png';
import hanjan from './hanjan.png';
import primemeats from './primemeats.png';
import seaprice from './seaprice.png';

const Title = styled(ParagraphBold)`
  font-size: 14px;
  font-size: 16px;
  padding-top: 2px;
  @media (min-width: 321px) {
    font-size: 18px;
    margin: 5px 0 0;
  }
`;

const SubTitle = styled(ParagraphLight)`
  font-size: 12px;
  line-height: 14px;
  padding-top: 4px;
  @media (min-width: 321px) {
    font-size: 18px;
    margin: 7px 0 0;
  }
`;

const Descr = styled(ParagraphBold)`
  font-size: 8px;
  line-height: 9px;
  padding-top: 2px;
  text-transform: uppercase;
  @media (min-width: 321px) {
    font-size: 10px;
    margin: 12px 0 0;
  }
`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Popular reservations around the world</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <NextPage />
        </MdHide>
        <Col lg={3} md={4} xs={6}>
          <Img src={chum} />
          <Descr>Speakeasy</Descr>
          <Title>Chumley's</Title>
          <SubTitle>About $60 per person</SubTitle>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={hanjan} />
          <Descr>Korean gastropub</Descr>
          <Title>Hanjan</Title>
          <SubTitle>About $50 per person</SubTitle>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={primemeats} />
          <Descr>German american</Descr>
          <Title>Prime Meats</Title>
          <SubTitle>About $55 per person</SubTitle>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Img src={seaprice} />
          <Descr>Fine seafood</Descr>
          <Title>Seaprice</Title>
          <SubTitle>About $70 per person</SubTitle>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
