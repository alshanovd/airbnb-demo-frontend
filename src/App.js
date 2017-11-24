import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Header } from './Header/Header';
import { Landing } from './Landing/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Home/Home';

const ContentWrapper = styled.div`
  padding-top: 80px;
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

const HeaderWrapper = styled.div``;

const Wrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <HeaderWrapper>
              <Route path="/" component={Header} />
          </HeaderWrapper>
          <ContentWrapper>
            <Grid>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Landing} />
            </Grid>
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
