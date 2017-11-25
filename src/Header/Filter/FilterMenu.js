import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import { Button, color } from './../../UI/UI';
import { ShadowBlock } from './../Header';

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

const ButtonsContainer = styled.div`display: flex;`;

export class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomTypeOpen: false,
      priceOpen: false,
      instantOpen: false,
      datesOpen: false,
      guestsOpen: false,
      moreOpen: false,
    };
  }

  toggleBtn = () => {
    if (!this.state.datesOpen) this.buttonsOff();
    this.setState(prevState => ({
      datesOpen: !prevState.datesOpen,
    }));
    this.pushFunc(this.state.datesOpen);
  };

  render() {
    return (
      <Col md={12}>
        <ButtonsContainer>
          <BtnContainerShow>
            <Btn onclick={this.toggleFilterBtn}>Dates</Btn>
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
        </ButtonsContainer>
      </Col>
    );
  }
}
