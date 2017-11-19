import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import { Homes } from './Homes/Homes';

export const Wrapper = styled.div`
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
      <BrowserRouter>
        <Wrapper>
          <Grid>
            <Route exact path="/" component={Landing} />
            <Route exact path="/homes" component={Homes} />
          </Grid>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
