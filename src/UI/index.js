import React, { Component } from 'react';
import styled from 'styled-components';
import seeAll from './seeAll.svg';
import arrow from './arrow.png';
import star from './star.png';
import './font.css';

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-family: CircularAirBold, 'Helvetica Neue', Helvetica, sans-serif;
  color: #383838;
  font-size: 24px;
  margin: 16px 0;
  line-height: 28px;
  justify-content: space-between;
  @media (min-width: 321px) {
    font-size: 32px;
    margin: 24px 0;
    line-height: 34px;
  }
`;

export const Section = styled.section`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SeeAll = styled.a`
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  color: #383838;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  &:after {
    padding: 8px;
    content: url(${seeAll});
  }
  :hover {
    text-decoration: underline;
  }
`;

export const RightSwype = styled.button`
  background: #ffffff;
  background-image: url(${arrow});
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  right: -15px;
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;

const Word = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #383838;
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
  @media (min-width: 321px) {
    font-size: 15px;
  }
`;

export class Buttonn extends React.Component {
  state = { isPushed: false };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isPushed: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>baton</button>
        {this.state.isPushed && (
          <img src="http://forum.cxem.net/uploads/photos/monthly_2017_08/5991d7f54af3e_.png.0a4d9d92c8c7e3b6af92c868cf5a66a5.png" />
        )}
      </div>
    );
  }
}

export const Button = styled.button`
  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 14px;
  background: #ffffff;
  cursor: pointer;
`;

export const WordBold = styled(Word)`
  font-family: CircularAirBold, 'Helvetica Neue', Helvetica, sans-serif;
`;
export const WordLight = styled(Word)`
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
`;
export const WordRegular = styled(Word)`
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
`;

const Paragraph = styled.p`
  color: #383838;
  margin: 0;
  font-size: 13px;
  @media (min-width: 321px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const ParagraphBold = styled(Paragraph)`
  font-family: CircularAirBold, 'Helvetica Neue', Helvetica, sans-serif;
`;
export const ParagraphLight = styled(Paragraph)`
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
`;
export const ParagraphRegular = styled(Paragraph)`
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
`;

const Ancor = styled.a`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AncorRegular = styled(Ancor)`
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
`;

export const AncorLight = styled(Ancor)`
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
`;

const StarImg = styled.img`
  margin-right: 3px;
  height: 12px;
`;

export function Star() {
  return <StarImg src={star} alt="star" />;
}

export const Stars = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 3px;
`;

export const Img = styled.img`width: 100%;`;

export const Reviews = styled(WordRegular)`font-size: 12px;`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoWrap = styled.div`
  flex-wrap: nowrap;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const MdHide = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
