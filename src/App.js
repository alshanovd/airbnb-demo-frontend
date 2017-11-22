import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Header } from './Header/Header';
import { Landing } from './Landing/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Home/Home';

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
        <BrowserRouter>
          <Grid>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
          </Grid>
        </BrowserRouter>
      </Wrapper>
    );
  }
}

export default App;
