import React, { Component } from "react";
import { Col } from "react-flexbox-grid";
import styled from "styled-components";
import search from "./search.svg";

const Logo = styled.img`margin-left: 5px;`;

const Input = styled.input`
  width: 148px;
  height: 24px;
  left: 215px;
  top: 28px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.64;
  width: 100%;
  border: none;
  margin: 0 10px;
`;

export default () => (
  <Col lg={5}>
    <Logo src={search} />
    <Input placeholder="Try Miami!" />
  </Col>
);
