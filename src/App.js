import React, {Component} from 'react';
import styled from 'styled-components';
import 'normalize.css';

import {Grid} from 'react-flexbox-grid';

import Header from './Header';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Popular from './Popular';
import Featured from './Featured';
import Footer from './Footer';

const MaxWidth = styled.div`
  max-width: 976px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <MaxWidth>
        <Grid fluid>
          <Header />
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
          <Footer />
        </Grid>
      </MaxWidth>
    );
  }
}

export default App;
