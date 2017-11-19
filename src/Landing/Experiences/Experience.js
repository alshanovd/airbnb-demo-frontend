import React from "react";
import { Col } from "react-flexbox-grid";
import styled from "styled-components";
import {
  Stars,
  Star,
  WordBold,
  ParagraphLight,
  Img,
  Reviews
} from "./../../UI";

const Desc = styled.div`
  font-family: CircularAirBold, "Helvetica Neue", Helvetica, sans-serif;
  margin: 8px 0 0;
  padding: 0;
  color: #383838;
`;

const Price = styled(WordBold)`padding-right: 3px;`;

export default props => {
  return (
    <Col xs={6} md={4} lg={3}>
      <Img src={props.img} />
      <Desc>
        <ParagraphLight>
          <Price>{props.price}</Price>
          {props.desc}
        </ParagraphLight>
        <Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Reviews>{props.reviews} reviews</Reviews>
        </Stars>
      </Desc>
    </Col>
  );
};
