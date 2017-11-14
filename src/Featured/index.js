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
import Feature from './Feature';
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
        <Feature img={paris} title="Paris" />
        <Feature img={losangeles} title="Miami" />
        <Feature img={seoul} title="Tokyo" />
        <Feature img={capetown} title="Cape town" />
        <Feature img={tokyo} title="Seoul" />
        <Feature img={miami} title="Los Angeles" />
      </NoWrap>
    </Row>
  </Section>
);
