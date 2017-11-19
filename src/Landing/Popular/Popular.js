import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import {
  ParagraphLight,
  H2,
  Section,
  SeeAll,
  RightSwype,
  ParagraphBold,
  Img,
  SectionHead,
  NoWrap,
  MdHide
} from "./../../UI";
import chum from "./chum.png";
import hanjan from "./hanjan.png";
import primemeats from "./primemeats.png";
import seaprice from "./seaprice.png";

const Descr = styled(ParagraphBold)`
  font-size: 10px;
  margin: 12px 0 0;
  text-transform: uppercase;
  @media (min-width: 320px) {
    font-size: 8px;
    line-height: 9px;
  }
`;

const Title = styled(ParagraphBold)`
  font-size: 18px;
  margin: 2px 0 0;
  @media (min-width: 320px) {
    font-size: 14px;
    font-size: 16px;
  }
`;

const SubTitle = styled(ParagraphLight)`
  font-size: 18px;
  margin: 4px 0 0;
  @media (min-width: 320px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default () => {
  return (
    <Col lg={3} md={4} xs={6}>
      <Img src={chum} />
      <Descr>Speakeasy</Descr>
      <Title>Chumley's</Title>
      <SubTitle>About $60 per person</SubTitle>
    </Col>
  );
};
