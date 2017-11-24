import React, { Component } from 'react';
import Explore from './Explore';
import Experiences from './Experiences';
import { Homes } from './Homes';
import Popular from './Popular';
import Featured from './Featured';
import Footer from './Footer';
import styled from 'styled-components';

const LandingWrap = styled.div``;

export class Landing extends Component {
  render() {
    return (
      <LandingWrap>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </LandingWrap>
    );
  }
}
