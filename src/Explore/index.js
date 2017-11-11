import React from 'react';
import {H2, Section, SpanBold} from './../Exports';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import home from './home.png';
import experiences from './experiences.png';
import restaurants from './restaurants.png';

const Block = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-right: 9px;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 96px;
  height: 72px;
`;

const Title = styled(SpanBold)`
  margin-left: 24px;
  font-size: 17px;
`;

export default () => (
  <Section>
    <H2>Explore Airbnb</H2>
    <Row>
      <Col lg={4}>
        <Block>
          <Img src={home} />
          <Title>Home</Title>
        </Block>
      </Col>
      <Col lg={4}>
        <Block>
          <Img src={experiences} />
          <Title>Experiences</Title>
        </Block>
      </Col>
      <Col lg={4}>
        <Block>
          <Img src={restaurants} />
          <Title>Restaurants</Title>
        </Block>
      </Col>
    </Row>
  </Section>
);
