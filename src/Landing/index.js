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

export default () => (
  <BrowserRouter>
    <Wrapper>
      <Grid>
        <Header />
        <Explore />
        <Experiences />
        <Popular />
        <Featured />
        <Footer />
      </Grid>
    </Wrapper>
  </BrowserRouter>
);
