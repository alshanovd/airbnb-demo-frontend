import React from 'react';
import {H2, Section, SpanBold, NoWrap} from './../Exports';
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
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 96px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

const Title = styled(SpanBold)`
  margin-left: 24px;
  font-size: 17px;
  @media (max-width: 420px) {
    width: 100%;
    padding: 12px;
    font-size: 12px;
  }
`;

export default () => (
  <Section>
    <H2>Explore Airbnb</H2>
    <Row>
      <NoWrap>
        <Col lg={4} md={5} xs={6}>
          <Block>
            <Img src={home} />
            <Title>Home</Title>
          </Block>
        </Col>
        <Col lg={4} md={5} xs={6}>
          <Block>
            <Img src={experiences} />
            <Title>Experiences</Title>
          </Block>
        </Col>
        <Col lg={4} md={5} xs={6}>
          <Block>
            <Img src={restaurants} />
            <Title>Restaurants</Title>
          </Block>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
