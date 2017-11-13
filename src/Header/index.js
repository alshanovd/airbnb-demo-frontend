import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';
import menu from './menu.svg';

const Header = styled.header`
  display: flex;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
  align-items: center;
`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.img`@media (min-width: 769px) {display: none;}`;

export default () => (
  <Row>
    <Header>
      <Col xs={2} md={1}>
        <VerticalMiddle>
          <img alt="logo" src={shape} />
          <Menu alt="menu" src={menu} />
        </VerticalMiddle>
      </Col>
      <Search />
      <Navi />
    </Header>
  </Row>
);
