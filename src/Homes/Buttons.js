import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  Button,
  WordLight,
  WordBold,
  ParagraphLight,
  WordRegular,
  AncorLight,
  ParagraphRegular,
  ParagraphBold,
} from './../UI';
import { color } from './../UI/Theme';
import entire from './entire.svg';
import armchair from './armchair.svg';
import door from './door.svg';
import Rheostat from 'rheostat';
import 'rheostat/css/slider.css';
import pricing from './pricing.svg';
import './rheostatCustom.css';
import bookToggle from './bookToggle.svg';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import minus from './guestMinus.svg';
import plus from './guestPlus.svg';
import 'react-day-picker/lib/style.css';

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

const GuestsRow = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const BtnContainer = styled.div`position: relative;`;

const Fixed = styled.div`
  position: fixed;
  width: 976px;
  z-index: 10;
`;

const Number = styled(WordLight)``;

const Minus = styled.img``;

const MinusPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
`;

const Plus = styled.img``;

const MoreFiltersControls = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const MoreFilterButtonSbmt = styled.button`
  background-color: ${color.fill.primary};
  padding: 12px 28px;
  border-radius: 4px;
  border: none;
  margin: 5px 5px 0 0;
`;

const MoreFilterButtonCn = styled(MoreFilterButtonSbmt)`
  background-color: #ffffff;
`;

const GuestsBlock = styled.div`
  top: 53px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  position: absolute;
  align-items: center;
  padding: 20px 30px;
  width: 300px;
  display: none;
  flex-direction: column;
  ${props =>
    props.show &&
    `
      display: flex;
    `};
`;

const GuestDescr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRoomType = this.toggleRoomType.bind(this);
    this.state = {
      roomTypeOpen: false,
      priceOpen: false,
      instantOpen: false,
      datesOpen: false,
      guestsOpen: false,
      moreOpen: false,
    };
    this.pushFunc = props.pushFunc;
  }

  toggleGuests = () => {
    if (!this.state.guestsOpen) this.buttonsOff();
    this.setState(prevState => ({
      guestsOpen: !prevState.guestsOpen,
    }));
    this.pushFunc(this.state.guestsOpen);
  };

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

  toggleDates = () => {
    if (!this.state.datesOpen) this.buttonsOff();
    this.setState(prevState => ({
      datesOpen: !prevState.datesOpen,
    }));
    this.pushFunc(this.state.datesOpen);
  };

  toggleMoreFilters = () => {
    if (!this.state.moreOpen) this.buttonsOff();
    this.setState(prevState => ({
      moreOpen: !prevState.moreOpen,
    }));
    this.pushFunc(this.state.moreOpen);
  };

  buttonsOff() {
    this.setState({
      roomTypeOpen: false,
      priceOpen: false,
      instantOpen: false,
      datesOpen: false,
      guestsOpen: false,
      moreOpen: false,
    });
  }

  render() {
    return (
        <Container>
          <BtnContainer>
            <Btn onClick={this.toggleDates} pushed={this.state.datesOpen}>
              {this.state.datesOpen && <span>Check in — Check out</span>}
              {!this.state.datesOpen && <span>Dates</span>}
            </Btn>
            <DatesBlock show={this.state.datesOpen}>
              <DayPickerBlock>
                <DayPicker numberOfMonths={2} fixedWeeks />
              </DayPickerBlock>
              <RoomTypeButtonsBlock>
                <Cancel>Cancel</Cancel>
                <Apply>Apply</Apply>
              </RoomTypeButtonsBlock>
            </DatesBlock>
          </BtnContainer>
          <BtnContainer>
            <Btn onClick={this.toggleGuests} pushed={this.state.guestsOpen}>
              Guests
            </Btn>
            <GuestsBlock show={this.state.guestsOpen}>
              <GuestsRow>
                <GuestDescr>
                  <ParagraphRegular>Adults</ParagraphRegular>
                </GuestDescr>
                <MinusPlus>
                  <Minus src={minus} />
                  <Number>0</Number>
                  <Plus src={plus} />
                </MinusPlus>
              </GuestsRow>
              <GuestsRow>
                <GuestDescr>
                  <DescrP>Children</DescrP>
                  <ParagraphLight>Ages 2 - 12</ParagraphLight>
                </GuestDescr>
                <MinusPlus>
                  <Minus src={minus} />
                  <Number>0</Number>
                  <Plus src={plus} />
                </MinusPlus>
              </GuestsRow>
              <GuestsRow>
                <GuestDescr>
                  <DescrP>Infants</DescrP>
                  <ParagraphLight>Under 2</ParagraphLight>
                </GuestDescr>
                <MinusPlus>
                  <Minus src={minus} />
                  <Number>0</Number>
                  <Plus src={plus} />
                </MinusPlus>
              </GuestsRow>
              <RoomTypeButtonsBlock>
                <Cancel>Cancel</Cancel>
                <Apply>Apply</Apply>
              </RoomTypeButtonsBlock>
            </GuestsBlock>
          </BtnContainer>
          <BtnContainer>
            <Btn onClick={this.toggleRoomType} pushed={this.state.roomTypeOpen}>
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
          <BtnContainer>
            <Btn onClick={this.toggleMoreFilters} pushed={this.state.moreOpen}>
              More filters
            </Btn>
            <MoreFilters show={this.state.moreOpen} />
          </BtnContainer>
        </Container>
    );
  }
}

const MoreOptions = styled.div`
  display: flex;
  align-items: center;
`;

const DescrP = styled(ParagraphRegular)`margin-bottom: 5px;`;

const DayPickerBlock = styled.div`
  display: flex;
  width: 536px;
`;

const MoreFiltersSection = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const MoreFiltersBlock = styled.div`
  position: absolute;
  flex-direction: column;
  width: 658px;
  height: 1124px;
  top: 53px;
  left: -488px;
  background: #ffffff;
  display: none;
  ${props =>
    props.show &&
    `
      display: flex;
    `};
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
  margin-top: 15px;
  margin-botton: 15px;
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

const MoreFilterLabel = styled(ParagraphLight)`width: 240px;`;

function MoreFilters(props) {
  return (
    <MoreFiltersBlock show={props.show}>
      <MoreFiltersSection>
        <MoreFilterTitle>Rooms and beds</MoreFilterTitle>
        <MoreFilterRow>
          <MoreFilterLabel>Bedrooms</MoreFilterLabel>
          <MinusPlus>
            <Minus src={minus} />
            <Number>0+</Number>
            <Plus src={plus} />
          </MinusPlus>
        </MoreFilterRow>
        <MoreFilterRow>
          <MoreFilterLabel>Beds</MoreFilterLabel>
          <MinusPlus>
            <Minus src={minus} />
            <Number>0+</Number>
            <Plus src={plus} />
          </MinusPlus>
        </MoreFilterRow>
        <MoreFilterRow>
          <MoreFilterLabel>Bathrooms</MoreFilterLabel>
          <MinusPlus>
            <Minus src={minus} />
            <Number>0+</Number>
            <Plus src={plus} />
          </MinusPlus>
        </MoreFilterRow>
      </MoreFiltersSection>
      <MoreFiltersSection>
        <MoreFilterRow>
          <MoreFilterLabel>
            <MoreFilterTitle>More options</MoreFilterTitle>
            <ParagraphLight>Superhost</ParagraphLight>
            <ParagraphLight>Stay with recognized hosts.</ParagraphLight>
            <AncorLight>Learn More</AncorLight>
          </MoreFilterLabel>
          <MoreFilterToggle>
            <ToggleBook src={bookToggle} />
          </MoreFilterToggle>
        </MoreFilterRow>
      </MoreFiltersSection>
      <MoreFiltersSection>
        <MoreFilterRow>
          <MoreFilterAmenities>
            <MoreFilterTitle>Amenities</MoreFilterTitle>
            <Row>
              <Col md={6}>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
              </Col>
              <Col md={6}>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
              </Col>
            </Row>
            <SeeAllAmen>See all amenities</SeeAllAmen>
          </MoreFilterAmenities>
        </MoreFilterRow>
      </MoreFiltersSection>
      <MoreFiltersSection>
        <MoreFilterRow>
          <MoreFilterAmenities>
            <MoreFilterTitle>Facilities</MoreFilterTitle>
            <Row>
              <Col md={6}>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
              </Col>
              <Col md={6}>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
                <CheckBlock>
                  <Check id="ch1" type="checkbox" />
                  <Checkbox />
                  <CheckDescr>
                    <Label for="ch1">
                      <WordLight>Heating</WordLight>
                    </Label>
                  </CheckDescr>
                </CheckBlock>
              </Col>
            </Row>
            <SeeAllAmen>See all amenities</SeeAllAmen>
          </MoreFilterAmenities>
        </MoreFilterRow>
      </MoreFiltersSection>
      <MoreFiltersControls>
        <MoreFilterButtonSbmt>
          <WordButtonSubmit>See homes</WordButtonSubmit>
        </MoreFilterButtonSbmt>
        <MoreFilterButtonCn>
          <WordButtonCancel>Cancel</WordButtonCancel>
        </MoreFilterButtonCn>
      </MoreFiltersControls>
    </MoreFiltersBlock>
  );
}

const WordButtonSubmit = styled(WordBold)`color: #ffffff;`;
const WordButtonCancel = styled(WordRegular)``;
const SeeAllAmen = styled(ParagraphBold)`color: ${color.fill.primary};`;

const MoreFilterToggle = styled(MoreFilterLabel)`margin-top: 50px;`;

const MoreFilterTitle = styled(ParagraphRegular)`
  font-size: 20px;
  margin-top: 23px;
  margin-bottom: 25px;
`;

const MoreFilterRow = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

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

const MoreFilterAmenities = styled(MoreFilterLabel)`width: 100%;`;

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
  width: 100%;
`;
const RoomTypeButton = styled(Button)`
  font-size: 16px;
  padding: 0;
  margin: 0 10px;
  border: none;
`;
const Cancel = styled(RoomTypeButton)`color: ${color.font.secondary};`;
const Apply = styled(RoomTypeButton)`color: ${color.fill.primary};`;
