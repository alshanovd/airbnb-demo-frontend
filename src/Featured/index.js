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
} from './../Exports';
import './../Exports/style.css';
import paris from './paris.png';
import losangeles from './losangeles.png';
import seoul from './seoul.png';
import capetown from './capetown.png';
import tokyo from './tokyo.png';
import miami from './miami.png';

const NextPageFeatured = styled(NextPage)`top: 59%;`;
const Title = styled(ParRegular)`
  margin: 8px 0 0;
  font-size: 15px;
`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Featured destination</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <div className="md-hide">
          <NextPageFeatured />
        </div>
        <Col lg={2} md={3}>
          <Img src={paris} />
          <Title>Paris</Title>
        </Col>
        <Col lg={2} md={3}>
          <Img src={losangeles} />
          <Title>Miami</Title>
        </Col>
        <Col lg={2} md={3}>
          <Img src={seoul} />
          <Title>Tokyo</Title>
        </Col>
        <Col lg={2} md={3}>
          <Img src={capetown} />
          <Title>Cape town</Title>
        </Col>
        <Col lg={2} md={3}>
          <Img src={tokyo} />
          <Title>Seoul</Title>
        </Col>
        <Col lg={2} md={3}>
          <Img src={miami} />
          <Title>Los Angeles</Title>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
