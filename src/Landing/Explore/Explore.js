import React from 'react';
import { WordBold } from './../../UI';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import home from './home.png';
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
  text-decoration: none;
  @media (min-width: 421px) {
    margin-left: 24px;
    font-size: 17px;
  }
`;

const LinkTo = styled(Link)`text-decoration: none;`;

export default props => (
  <Col xs={6} md={5} lg={4}>
    <LinkTo to={`/homes`}>
      <Block>
        <Img src={props.img} />
        <Title>{props.title}</Title>
      </Block>
    </LinkTo>
  </Col>
);
