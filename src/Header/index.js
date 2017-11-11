import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import styled from 'styled-components';
import Navi from './Navi';
import Search from './Search';
import shape from './shape.svg';

const Header = styled.header`
  display: flex;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
  align-items: center;
`;

export default () => (
  <Row>
    <Header>
      <Col lg={1} md={1}>
        <img alt="logo" src={shape} />
      </Col>
      <Search />
      <Navi />
    </Header>
  </Row>
);
