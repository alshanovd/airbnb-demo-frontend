import React from 'react';
import { H2, Section, WordBold, NoWrap } from './../../UI/UI';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import home from './home.png';
import experiences from './experiences.png';
import restaurants from './restaurants.png';
import { Link } from 'react-router-dom';

const Block = styled.div`
  @media (min-width: 421px) {
    flex-direction: row;
  }
  @media (min-width: 321px) {
    margin-right: 0;
  }
  background: #ffffff;
  border: 0.4px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-right: 9px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  @media (min-width: 421px) {
    width: 96px;
    display: block;
  }
`;

const Title = styled(WordBold)`
  padding: 15px 0 15px 12px;
  width: 100%;
  font-size: 12px;
  @media (min-width: 421px) {
    margin-left: 24px;
    font-size: 17px;
  }
  @media (min-width: 321px) {
    width: 100%;
    font-size: 17px;
    display: block;
    height: 40px;
    line-height: 40px;
  }
`;

const LinkTo = styled(Link)`text-decoration: none;`;

const ImgWrapper = styled.div`
  height: 78px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  @media (min-width: 321px) {
    height: auto;
    overflow: inherit;
  }
`;

export default () => (
  <Section>
    <H2>Explore Airbnb</H2>
    <Row>
      <NoWrap>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/home">
            <Block>
              <ImgWrapper>
                <Img src={home} />
              </ImgWrapper>
              <Title>Homes</Title>
            </Block>
          </LinkTo>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/experiences">
            <Block>
              <ImgWrapper>
                <Img src={experiences} />
              </ImgWrapper>
              <Title>Experiences</Title>
            </Block>
          </LinkTo>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <LinkTo to="/restaurants">
            <Block>
              <ImgWrapper>
                <Img src={restaurants} />
              </ImgWrapper>
              <Title>Restaurants</Title>
            </Block>
          </LinkTo>
        </Col>
      </NoWrap>
    </Row>
  </Section>
);
