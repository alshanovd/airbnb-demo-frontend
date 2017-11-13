import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Header from './Header';
import Content from './Content';
=======
import 'normalize.css';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
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
>>>>>>> 3a516ddcde20ca94183940de8479d7a1e96c352f

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Header />
        <Content />
      </div>
=======
      <Wrapper>
        <Grid>
          <Header />
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
          <Footer />
        </Grid>
      </Wrapper>
>>>>>>> 3a516ddcde20ca94183940de8479d7a1e96c352f
    );
  }
}

export default App;
