import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';
import menu from './menu.svg';
import 'react-day-picker/lib/style.css';
import { Link, Route } from 'react-router-dom';
import { FilterMenu } from './Filter/FilterMenu';

const HeaderBlock = styled.header`width: 100%;`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Menu = styled.img`@media (min-width: 769px) {display: none;}`;

const Fixed = styled.div`
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  z-index: 1;
  @media (min-width: 976px) {
    ${'' /* max-width: 976px; */} margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

export const ShadowBlock = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
`;

export const ShadowBlockContainer = styled.div`
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

export class Header extends Component {
  render() {
    return (
      <Fixed>
        <HeaderBlock>
          <ShadowBlock>
            <ShadowBlockContainer>
              <Col xs={2} md={1}>
                <VerticalMiddle>
                  <Link to="/">
                    <img alt="logo" src={shape} />
                  </Link>
                  <Menu alt="menu" src={menu} />
                </VerticalMiddle>
              </Col>
              <Col md={5} xs={10}>
                <Search />
              </Col>
              <Col mdOffset={2} md={2}>
                <Navi />
              </Col>
            </ShadowBlockContainer>
          </ShadowBlock>
          <ShadowBlock>
            <ShadowBlockContainer>
              <Route exact path="/home" component={FilterMenu} />
            </ShadowBlockContainer>
          </ShadowBlock>
        </HeaderBlock>
      </Fixed>
    );
  }
}
