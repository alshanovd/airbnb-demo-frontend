import React from 'react';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  Star,
  ParagraphLight,
  ParagraphBold,
  Img,
  Reviews,
  WordBold,
  Stars,
} from './../UI';

const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

const Price = styled(WordBold)`padding-right: 8px;`;

export default props => {
  return (
    <Col xs={9} md={5} lg={4}>
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
