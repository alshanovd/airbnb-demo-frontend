import React from 'react';
import { H2, Section, WordBold, NoWrap } from './../../UI/UI';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import home from './home.png';
import experiences from './experiences.png';
import restaurants from './restaurants.png';
import { Link } from 'react-router-dom';

const Block = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-right: 9px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media (min-width: 421px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 100%;
  @media (min-width: 421px) {
    width: 96px;
  }
`;

const Title = styled(WordBold)`
  width: 100%;
  padding: 12px;
  font-size: 12px;
  @media (min-width: 421px) {
    margin-left: 24px;
    font-size: 17px;
  }
`;

const LinkTo = styled(Link)`text-decoration: none;`;

export default () => (
  <Section>
    <H2>Explore Airbnb</H2>
    <Row>
      <NoWrap>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/home">
            <Block>
              <Img src={home} />
              <Title>Home</Title>
            </Block>
          </LinkTo>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/experiences">
            <Block>
              <Img src={experiences} />
              <Title>Experiences</Title>
            </Block>
          </LinkTo>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/restaurants">
            <Block>
              <Img src={restaurants} />
              <Title>Restaurants</Title>
            </Block>
          </LinkTo>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
