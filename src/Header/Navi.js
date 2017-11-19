import React from 'react';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { MdHide } from './../UI';

const Point = styled.a`
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 24px;
  font-size: 14px;
  margin: 0 8px 0 0;
  padding: 8px;
  white-space: nowrap;
  color: #383838;
  text-decoration: none;
`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-content: flex-end;
`;

export default () => (
  <VerticalMiddle>
    <MdHide>
      <Point href="#">Become a host</Point>
      <Point href="#">Help</Point>
      <Point href="#">Sing Up</Point>
      <Point href="#">Log In</Point>
    </MdHide>
  </VerticalMiddle>
);
