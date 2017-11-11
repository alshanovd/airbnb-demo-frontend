import React from 'react';
import styled from 'styled-components';
import seeall from './seeall.svg';
import arrow from './arrow.png';
import star from './star.png';
import './font.css';

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-family: CircularAirBold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin: 24px 0;
  justify-content: space-between;
  @media (max-width: 320px) {
    font-size: 24px;
    margin: 16px 0;
    line-height: 28px;
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
  font-family: CircularAirLight;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  color: #383838;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  &:after {
    padding: 8px;
    content: url(${seeall});
  }
  :hover {
    text-decoration: underline;
  }
`;

export const NextPage = styled.div`
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
`;

const Span = styled.span`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

export const SpanBold = styled(Span)`font-family: CircularAirBold;`;
export const SpanLight = styled(Span)`font-family: CircularAirLight;`;
export const SpanRegular = styled(Span)`font-family: CircularAir;`;

const Par = styled.p`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  margin: 0;
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

export const ParBold = styled(Par)`font-family: CircularAirBold;`;
export const ParLight = styled(Par)`font-family: CircularAirLight;`;
export const ParRegular = styled(Par)`font-family: CircularAir;`;

const Anc = styled.a`
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AncRegular = styled(Anc)`font-family: CircularAir;`;

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

export const Reviews = styled(SpanRegular)`font-size: 12px;`;

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

export const MdHide = styled.div`@media (max-width: 768px) {display: none;}`;
