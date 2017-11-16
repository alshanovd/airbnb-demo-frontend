import React from "react";
import { Col } from "react-flexbox-grid";

export default props => {
  return (
    <Col lg={6}>
      <Img src={props.img} />
      <Desc>
        <ParagraphBold>{props.p}</ParagraphBold>
        <Beds>{props.beds}</Beds>
        <Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Reviews>{props.reviews} · Superhost</Reviews>
        </Stars>
      </Desc>
    </Col>
  );
};
