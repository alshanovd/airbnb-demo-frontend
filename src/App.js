import React, {Component} from 'react';
import 'normalize.css';
import styled from 'styled-components';
import {Grid} from 'react-flexbox-grid';
import Header from './Header';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Popular from './Popular';
import Featured from './Featured';
import Footer from './Footer';

const Wrapper = styled.div`
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Grid fluid>
          <Header />
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
          <Footer />
        </Grid>
      </Wrapper>
    );
  }
}

export default App;
