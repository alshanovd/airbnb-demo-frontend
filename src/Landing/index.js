import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Header from './../Header';
import Explore from './Explore';
import Experiences from './Experiences';
import Popular from './Popular';
import Featured from './Featured';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';

const Wrapper = styled.div`
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

const Content = styled.div`
  position: relative;
  margin-top: 80px;
`;

export default () => (
  <div>
    <Header />
    <Content>
      <Explore />
      <Experiences />
      <Popular />
      <Featured />
      <Footer />
    </Content>
  </div>
);
