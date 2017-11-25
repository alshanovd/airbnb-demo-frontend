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

const HeaderBlock = styled.header`
  width: 100%;
  display: flex;
`;

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
  height: 80px;
`;

export const ShadowBlockContainer = styled.div`
  height: 100%;
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

const ButtonsShadowBlock = styled(ShadowBlock)`height: 56px;`;

const MdHide = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;

export class Header extends Component {
  render() {
    return (
      <Fixed>
        <HeaderBlock>
          <Grid>
            <ShadowBlock>
              <ShadowBlockContainer>
                <RowContainer>
                  <Col xs={2} sm={1}>
                    <VerticalMiddle>
                      <Link to="/">
                        <img alt="logo" src={shape} />
                      </Link>
                      <Menu alt="menu" src={menu} />
                    </VerticalMiddle>
                  </Col>
                  <Col md={5} sm={7}>
                    <Search />
                  </Col>
                  <MdHide>
                    <Col mdOffset={2} md={2}>
                      <Navi />
                    </Col>
                  </MdHide>
                </RowContainer>
              </ShadowBlockContainer>
            </ShadowBlock>
            <Route exact path="/home" component={Filters} />
          </Grid>
        </HeaderBlock>
      </Fixed>
    );
  }
}

function Filters() {
  return (
    <ButtonsShadowBlock>
      <ShadowBlockContainer>
        <FilterMenu />
      </ShadowBlockContainer>
    </ButtonsShadowBlock>
  );
}
