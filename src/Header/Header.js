import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';
import menu from './menu.svg';
import { Button, color } from './../UI/UI';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Link, Route } from 'react-router-dom';

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
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

const Btn = styled(Button)`
  box-sizing: border-box;
  ${props =>
    props.pushed &&
    `
      background: ${color.fill.primary};
      color: #ffffff;
    `};
`;

const BtnContainer = styled.div`
  position: relative;
  display: none;
`;

const BtnContainerShow = styled(BtnContainer)`
  @media (min-width: 768px) {
    display: block;
  }
`;

const RoomTypeButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DatesBlock = styled.div`
  top: 53px;
  display: none;
  position: absolute;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 16px;
  flex-direction: column;
  ${props =>
    props.show &&
    `
      display: flex;
    `};
`;

const DayPickerBlock = styled.div`
  display: flex;
  width: 536px;
`;

const BtnContainerTablet = styled(BtnContainer)`
  @media (min-width: 1000px) {
    display: block;
  }
`;

const RoomTypeButton = styled(Button)`
  font-size: 16px;
  padding: 0;
  margin: 0 10px;
  border: none;
`;
const Cancel = styled(RoomTypeButton)`color: ${color.font.secondary};`;
const Apply = styled(RoomTypeButton)`color: ${color.fill.primary};`;
const ShadowBlock = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export class Header extends Component {
  render() {
    return (
      <Fixed>
        <HeaderBlock>
          <ShadowBlock>
            <Row>
              <Col xs={2} md={1}>
                <VerticalMiddle>
                  <Link to="/">
                    <img alt="logo" src={shape} />
                  </Link>
                  <Menu alt="menu" src={menu} />
                </VerticalMiddle>
              </Col>
              <Col md={7} xs={10}>
                <Search />
              </Col>
              <Col md={2}>
                <Navi />
              </Col>
            </Row>
          </ShadowBlock>
          <Route exact path="/home" component={FilterMenu} />
        </HeaderBlock>
      </Fixed>
    );
  }
}

class FilterMenu extends Component {
  render() {
    return (
      <ShadowBlock>
        <Row>
          <BtnContainerShow>
            <Btn>Dates</Btn>
            <DatesBlock>
              <DayPickerBlock>
                <DayPicker numberOfMonths={2} fixedWeeks />
              </DayPickerBlock>
              <RoomTypeButtonsBlock>
                <Cancel>Cancel</Cancel>
                <Apply>Apply</Apply>
              </RoomTypeButtonsBlock>
            </DatesBlock>
          </BtnContainerShow>
          <BtnContainerShow>
            <Btn>Guests</Btn>
          </BtnContainerShow>
          <BtnContainerTablet>
            <Btn>Room type</Btn>
          </BtnContainerTablet>
          <BtnContainerTablet>
            <Btn>Price</Btn>
          </BtnContainerTablet>
          <BtnContainerTablet>
            <Btn>Instant book</Btn>
          </BtnContainerTablet>
          <BtnContainerShow>
            <Btn>More filters</Btn>
          </BtnContainerShow>
        </Row>
      </ShadowBlock>
    );
  }
}
