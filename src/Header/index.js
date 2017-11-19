import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';
import menu from './menu.svg';
import { Link } from 'react-router-dom';
import { Buttons } from './../Homes/Buttons';

const Header = styled.header`
  display: flex;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
  align-items: center;
  position: fixed;
  background-color: #ffffff;
  z-index: 10;
`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const Menu = styled.img`@media (min-width: 769px) {display: none;}`;
const BorderBottom = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  width: 100%;
`;
const Fix = styled.div`
  position: fixed;
  width: 976px;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
`;
const Logo = styled.div`
  width: 100px;
  height: 80px;
`;

export const ButtonsBlock = styled.div`width: 100%;`;

export default props => (
  <Fix>
    <BorderBottom>
      <Logo>
        <VerticalMiddle>
          <Link to={`/`}>
            <img alt="logo" src={shape} />
          </Link>
          <Menu alt="menu" src={menu} />
        </VerticalMiddle>
      </Logo>
      <Col lg={5} md={7} xs={10}>
        <Search />
      </Col>
      <Col lgOffset={1} lg={5} md={4}>
        <Navi />
      </Col>
    </BorderBottom>
  </Fix>
);
