import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "./style/grid.css";
import "./style/font.css";
import "normalize.css";
import shape from "./assets/shape.svg";
import search from "./assets/search.svg";

const Header = styled.header`
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  height: 80px;
  align-items: center;
`;

const Search = styled.div`
  width: 392px;
  height: 48px;
  left: 162px;
  top: 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 30px;
  height: 32px;
  left: 81px;
  top: 24px;
`;

const SearchLogo = styled.img`margin-left: 5px;`;

const TryMiami = styled.input`
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

const Bnts = styled.div`
  left: 743px;
  top: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Btn = styled.span`
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
`;

const Section = styled.section`
  margin-top: 48px;
  display: flex;
`;

const H2 = styled.h2`
  font-family: CircularAirBold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
`;

const ExploreBlock = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header className="row">
          <Logo className="col-1">
            <img src={shape} />
          </Logo>
          <Search className="col-5">
            <SearchLogo src={search} />
            <TryMiami placeholder="Try Miami!" />
          </Search>
          <div className="col-2" />
          <Bnts className="col-4">
            <Btn>Become a host</Btn>
            <Btn>Help</Btn>
            <Btn>Sing Up</Btn>
            <Btn>Log In</Btn>
          </Bnts>
        </Header>
        <Section>
          <H2>Explore Airbnb</H2>
          <ExploreBlock className="col-4">Exasdf</ExploreBlock>
          <ExploreBlock className="col-4">Exasdf</ExploreBlock>
          <ExploreBlock className="col-4">Exasdf</ExploreBlock>
        </Section>
      </div>
    );
  }
}

export default App;
