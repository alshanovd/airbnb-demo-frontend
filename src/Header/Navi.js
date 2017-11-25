import React from 'react';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';

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

export default () => (
  <div>
    <Point href="#">Become a host</Point>
    <Point href="#">Help</Point>
    <Point href="#">Sing Up</Point>
    <Point href="#">Log In</Point>
  </div>
);
