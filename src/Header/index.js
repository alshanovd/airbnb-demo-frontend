import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import Navi from "./Navi";
import Search from "./Search";
import shape from "./shape.svg";
import styled from "styled-components";

const Header = styled.header`box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);`;

export default () => (
  <Row>
    <Header>
      <Col lg={1}>
        <img alt="logo" src={shape} />
      </Col>
      <Search />
      <Navi />
    </Header>
  </Row>
);
