import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParRegular,
  SectionHead,
  H2,
  Section,
  SeeAll,
  NextPage,
  Img,
  NoWrap,
  MdHide,
} from './../Exports';
import paris from './paris.png';
import losangeles from './losangeles.png';
import seoul from './seoul.png';
import capetown from './capetown.png';
import tokyo from './tokyo.png';
import miami from './miami.png';

const NextPageFeatured = styled(NextPage)`top: 59%;`;
const Title = styled(ParRegular)`
  margin: 8px 0 0;
  @media (max-width: 320px) {
    margin: 4px 0 0;
    font-size: 12px;
    line-height: 14px;
  }
`;

const SeeAllXsHide = styled(SeeAll)`@media (max-width: 320px) {display: none;}`;

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
        <Col lg={2} md={3} xs={4}>
          <Img src={paris} />
          <Title>Paris</Title>
        </Col>
        <Col lg={2} md={3} xs={4}>
          <Img src={losangeles} />
          <Title>Miami</Title>
        </Col>
        <Col lg={2} md={3} xs={4}>
          <Img src={seoul} />
          <Title>Tokyo</Title>
        </Col>
        <Col lg={2} md={3} xs={4}>
          <Img src={capetown} />
          <Title>Cape town</Title>
        </Col>
        <Col lg={2} md={3} xs={4}>
          <Img src={tokyo} />
          <Title>Seoul</Title>
        </Col>
        <Col lg={2} md={3} xs={4}>
          <Img src={miami} />
          <Title>Los Angeles</Title>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
