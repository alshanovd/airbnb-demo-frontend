import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Button, WordLight, ParagraphLight, ParagraphRegular } from './../UI';
import { color } from './../UI/Theme';
import entire from './entire.svg';
import armchair from './armchair.svg';
import door from './door.svg';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import pricing from './pricing.svg';
import './rheostatCustom.css';
import bookToggle from './bookToggle.svg';

const Container = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
  position: relative;
  display: flex;
  background-color: #ffffff;
`;

const RoomTypeBlock = styled.div`
  padding: 16px;
  position: absolute;
  background: red;
  width: 326px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  top: 53px;
  left: 0;
  display: none;
  ${props =>
    props.show &&
    `
      display: block;
    `};
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

const BtnContainer = styled.div`position: relative;`;
const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRoomType = this.toggleRoomType.bind(this);
    this.state = { roomTypeOpen: false, priceOpen: false, instantOpen: false };
    this.pushFunc = props.pushFunc;
  }

  toggleRoomType = () => {
    if (!this.state.roomTypeOpen) this.buttonsOff();
    this.setState(prevState => ({
      roomTypeOpen: !prevState.roomTypeOpen,
    }));
    this.pushFunc(this.state.roomTypeOpen);
  };

  togglePrice = () => {
    if (!this.state.priceOpen) this.buttonsOff();
    this.setState(prevState => ({
      priceOpen: !prevState.priceOpen,
    }));
    this.pushFunc(this.state.priceOpen);
  };

  toggleInstant = () => {
    if (!this.state.instantOpen) this.buttonsOff();
    this.setState(prevState => ({
      instantOpen: !prevState.instantOpen,
    }));
    this.pushFunc(this.state.instantOpen);
  };

  buttonsOff() {
    this.setState({
      roomTypeOpen: false,
      priceOpen: false,
      instantOpen: false,
    });
  }

  render() {
    return (
      <Row>
        <Fixed>
          <Container>
            <Btn>Dates</Btn>
            <Btn>Guests</Btn>
            <BtnContainer>
              <Btn
                onClick={this.toggleRoomType}
                pushed={this.state.roomTypeOpen}
              >
                Room type
              </Btn>
              <RoomType show={this.state.roomTypeOpen} />
            </BtnContainer>
            <BtnContainer>
              <Btn onClick={this.togglePrice} pushed={this.state.priceOpen}>
                Price
              </Btn>
              <Price show={this.state.priceOpen} />
            </BtnContainer>
            <BtnContainer>
              <Btn onClick={this.toggleInstant} pushed={this.state.instantOpen}>
                Instant book
              </Btn>
              <InstantBook show={this.state.instantOpen} />
            </BtnContainer>
            <Btn>More filters</Btn>
          </Container>
        </Fixed>
      </Row>
    );
  }
}

const PriceBlock = styled.div`
  padding: 24px 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  position: absolute;
  top: 53px;
  width: 326px;
  height: 274px;
  left: 0;
  display: none;
  ${props =>
    props.show &&
    `
      display: block;
    `};
`;

const PriceTitle = styled(ParagraphLight)`font-size: 16px;`;

const SubTitle = styled(ParagraphLight)`
  font-size: 12px;
  margin-top: 8px;
`;

const Check = styled.input`display: none;`;

const CheckBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.label`font-size: 16px;`;

const UnderLabel = styled(ParagraphLight)`
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;

const RoomIcon = styled.img``;

const CheckDescr = styled.div`
  width: 100%;
  padding: 0 12px;
`;

const Checkbox = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  width: 32px;
  height: 24px;
  background: #fff;
`;

const RheostatBlock = styled.div`margin: 30px 15px;`;

function Price(props) {
  return (
    <RoomTypeBlock show={props.show}>
      <PriceTitle>$10 - $1000+</PriceTitle>
      <SubTitle>The average nightly price is $75</SubTitle>
      <RheostatBlock>
        <PricingImg src={pricing} />
        <Rheostat min={1} max={100} values={[1, 100]} />>
      </RheostatBlock>
      <RoomTypeButtonsBlock>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </RoomTypeButtonsBlock>
    </RoomTypeBlock>
  );
}

const PricingImg = styled.img`
  width: 144px;
  margin-left: 20px;
  margin-bottom: -4px;
`;

const BookTitle = styled(ParagraphRegular)`margin: 10px 0;`;

const InstantContent = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
const ToggleDescr = styled(WordLight)``;
const ToggleBook = styled.img``;

function InstantBook(props) {
  return (
    <RoomTypeBlock show={props.show}>
      <BookTitle>Instant Book</BookTitle>
      <InstantContent>
        <ToggleDescr>
          Listing ypu can book without waiting for host approval.
        </ToggleDescr>
        <ToggleBook src={bookToggle} />
      </InstantContent>
      <RoomTypeButtonsBlock>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </RoomTypeButtonsBlock>
    </RoomTypeBlock>
  );
}

function RoomType(props) {
  return (
    <RoomTypeBlock show={props.show}>
      <CheckBlock>
        <Check id="ch1" type="checkbox" />
        <Checkbox />
        <CheckDescr>
          <Label for="ch1">
            <WordLight>Entire home</WordLight>
          </Label>
          <UnderLabel>Have a place to yourself</UnderLabel>
        </CheckDescr>
        <RoomIcon src={entire} />
      </CheckBlock>
      <CheckBlock>
        <Check id="ch2" type="checkbox" />
        <Checkbox />
        <CheckDescr>
          <Label for="ch2">
            <WordLight>Entire home</WordLight>
          </Label>
          <UnderLabel>
            Have your own room and share some common spaces
          </UnderLabel>
        </CheckDescr>
        <RoomIcon src={door} />
      </CheckBlock>
      <CheckBlock>
        <Check id="ch3" type="checkbox" />
        <Checkbox />
        <CheckDescr>
          <Label for="ch3">
            <WordLight>Entire home</WordLight>
          </Label>
          <UnderLabel>Stay in a shared space, like a common room</UnderLabel>
        </CheckDescr>
        <RoomIcon src={armchair} />
      </CheckBlock>
      <RoomTypeButtonsBlock>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </RoomTypeButtonsBlock>
    </RoomTypeBlock>
  );
}

const RoomTypeButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RoomTypeButton = styled(Button)`
  font-size: 16px;
  padding: 0;
  margin: 0 10px;
  border: none;
`;
const Cancel = styled(RoomTypeButton)`color: ${color.font.secondary};`;
const Apply = styled(RoomTypeButton)`color: ${color.fill.primary};`;
