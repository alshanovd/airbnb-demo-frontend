import React from 'react';
import {Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import {MdHide} from './../Exports';

const Btn = styled.span`
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  margin: 0 8px 0 0;
  padding: 8px;
  white-space: nowrap;
`;

export default () => (
  <Col lgOffset={2} lg={4}>
    <MdHide>
      <Btn>Become a host</Btn>
      <Btn>Help</Btn>
      <Btn>Sing Up</Btn>
      <Btn>Log In</Btn>
    </MdHide>
  </Col>
);
