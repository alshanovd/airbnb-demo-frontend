import React from 'react';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import search from './search.svg';

const Logo = styled.img`margin: 0 10px;`;

const Input = styled.input`
  font-family: CircularAir, 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.64;
  width: 90%;
  margin: 0 10px;
  border: none;
`;

const Box = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin: 16px 0;
  padding: 5px;
  display: flex;
  align-item: center;
  height: 48px;
`;

export default () => (
  <Box>
    <Logo src={search} />
    <Input placeholder="Try Miami!" />
  </Box>
);
