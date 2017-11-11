import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';
import styled from 'styled-components';

const Btn = styled.span`
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  margin: 0 8px 0 0;
  padding: 8px;
`;

export default () => (
  <Col xsOffset={2} lg={4}>
    <Btn>Become a host</Btn>
    <Btn>Help</Btn>
    <Btn>Sing Up</Btn>
    <Btn>Log In</Btn>
  </Col>
);
