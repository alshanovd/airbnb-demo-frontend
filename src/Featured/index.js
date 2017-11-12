import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParagraphRegular,
  SectionHead,
  H2,
  Section,
  SeeAll,
  NextPage,
  Img,
  NoWrap,
  MdHide,
} from './../UI';
import paris from './paris.png';
import losangeles from './losangeles.png';
import seoul from './seoul.png';
import capetown from './capetown.png';
import tokyo from './tokyo.png';
import miami from './miami.png';

const NextPageFeatured = styled(NextPage)`top: 59%;`;
const Title = styled(ParagraphRegular)`
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 321px) {
    margin: 8px 0 0;
  }
`;

const SeeAllXsHide = styled(SeeAll)`
  display: none;
  @media (min-width: 321px) {
    display: block;
  }
`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Featured destination</H2>
      <SeeAllXsHide>See all</SeeAllXsHide>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <NextPageFeatured />
        </MdHide>
        <Col xs={4} md={3} lg={2}>
          <Img src={paris} />
          <Title>Paris</Title>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Img src={losangeles} />
          <Title>Miami</Title>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Img src={seoul} />
          <Title>Tokyo</Title>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Img src={capetown} />
          <Title>Cape town</Title>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Img src={tokyo} />
          <Title>Seoul</Title>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Img src={miami} />
          <Title>Los Angeles</Title>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
