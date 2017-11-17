import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  H2,
  Section,
  SeeAll,
  RightSwype,
  SectionHead,
  NoWrap,
  Img,
  ParagraphLight,
  ParagraphBold,
  Stars,
  Star,
  Reviews,
  MdHide
} from "./../UI";
import lasalentina from "./lasalentina.png";
import dreamy from "./dreamy.png";
import bedr3 from "./bedr3.png";
import Home from "./Home";
import styled from "styled-components";
import Header from "./../Header";
import { Wrapper } from "./../App";
import { BrowserRouter, Route } from "react-router-dom";

const Houses = styled.div`margin: 24px 0;`;
const Homie = styled(Home)`margin: 20px 0;`;
const Container = styled.div`display: flex;`;
const Block = styled.div`margin: 24px 0 24px 0;`;
const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

export default props => {
  const descr = props.descr;
  return (
    <Col md={6}>
      <Block>
        <Img src={descr.img} />
        <Desc>
          <ParagraphBold>{descr.title}</ParagraphBold>
          <Beds>Entire house · {descr.beds}</Beds>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Reviews>{descr.reviews} · Superhost</Reviews>
          </Stars>
        </Desc>
      </Block>
    </Col>
  );
};
