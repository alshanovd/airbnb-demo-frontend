import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';
import phonemenu from './phonemenu.png';

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
      <Col lg={1} md={1} xs={2}>
        <VerticalMiddle>
          <img alt="logo" src={shape} />
          <Menu alt="phonemenu" src={phonemenu} />
        </VerticalMiddle>
      </Col>
      <Search />
      <Navi />
    </Header>
  </Row>
);
