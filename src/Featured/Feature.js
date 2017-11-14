import React from 'react';
import { Col } from 'react-flexbox-grid';
import { ParagraphRegular, Img } from './../UI';
import styled from 'styled-components';

const Title = styled(ParagraphRegular)`
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 321px) {
    margin: 8px 0 0;
  }
`;

export default props => {
  return (
    <Col xs={4} md={3} lg={2}>
      <Img src={props.img} />
      <Title>{props.title}</Title>
    </Col>
  );
};
