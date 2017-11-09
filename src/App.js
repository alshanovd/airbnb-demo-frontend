import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "./style/grid.css";
import "./style/font.css";
import "normalize.css";
import shape from "./assets/svg/shape.svg";
import search from "./assets/svg/search.svg";
import home from "./assets/png/home.png";
import experiences from "./assets/png/experiences.png";
import restaurants from "./assets/png/restaurants.png";
import forest from "./assets/png/forest.png";
import star from "./assets/png/star.png";
import salsa from "./assets/png/salsa.png";
import mountian from "./assets/png/mountian.png";
import whale from "./assets/png/whale.png";
import arrow from "./assets/png/arrow.png";
import seeall from "./assets/svg/seeall.svg";

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
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-family: CircularAirBold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin: 24px 0;
  justify-content: space-between;
`;

const ExploreBlock = styled.div`
  background: #ffffff;
  font-family: CircularAir;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  margin-right: 9px;
  padding: 0;
  display: flex;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExploreImg = styled.img`
  width: 96px;
  height: 72px;
  align-items: center;
`;

const ExploreTitle = styled.span`margin-left: 24px;`;

const Slider1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExpBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-right: 17px;
  &:last-child {
    margin-right: 0;
  }
`;

const ExpImg = styled.img`width: 100%;`;

const ExpImgDesc = styled.p`
  font-family: CircularAirBold;
  margin: 8px 0 0;
  padding: 0;
  color: #383838;
`;

const Star = styled.img`
  margin-right: 5px;
  height: 12px;
`;

const ExpPrice = styled.span`
  font-family: CircularAirBold;
  padding-right: 3px;
`;

const ExpTitle = styled.span`font-family: CircularAirLight;font-size: 15px
line-height: 18px`;

const ExpStars = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 3px;
`;

const ExpReviews = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
`;

const NextPage = styled.div`
  background: #ffffff;
  background-image: url(${arrow});
  background-position: center center;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  right: -15px;
`;

const SeeAll = styled.span`
  font-family: CircularAirLight;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  &:after {
    padding: 8px;
    content: url(${seeall});
  }
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header className="row">
          <Logo className="col-1">
            <img alt="logo" src={shape} />
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
          <SubHeader>
            <ExploreBlock className="col-4">
              <ExploreImg src={home} />
              <ExploreTitle>Home</ExploreTitle>
            </ExploreBlock>
            <ExploreBlock className="col-4">
              <ExploreImg src={experiences} />
              <ExploreTitle>Experiences</ExploreTitle>
            </ExploreBlock>
            <ExploreBlock className="col-4">
              <ExploreImg src={restaurants} />
              <ExploreTitle>Restaurants</ExploreTitle>
            </ExploreBlock>
          </SubHeader>
        </Section>
        <Section>
          <H2>
            Explore Airbnb
            <SeeAll>See all</SeeAll>
          </H2>
          <Slider1>
            <NextPage />
            <ExpBlock className="col-3">
              <ExpImg src={forest} />
              <ExpImgDesc>
                <ExpPrice>$29</ExpPrice>
                <ExpTitle>Forest therapy</ExpTitle>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>47 reviews</ExpReviews>
                </ExpStars>
              </ExpImgDesc>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={whale} />
              <ExpImgDesc>
                <ExpPrice>$69</ExpPrice>
                <ExpTitle>Whale watching</ExpTitle>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>45 reviews</ExpReviews>
                </ExpStars>
              </ExpImgDesc>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={mountian} />
              <ExpImgDesc>
                <ExpPrice>$69</ExpPrice>
                <ExpTitle>Table Mountain Summit, Cable Car Down</ExpTitle>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>44 reviews</ExpReviews>
                </ExpStars>
              </ExpImgDesc>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={salsa} />
              <ExpImgDesc>
                <ExpPrice>$50</ExpPrice>
                <ExpTitle>Salsa Night</ExpTitle>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>49 reviews</ExpReviews>
                </ExpStars>
              </ExpImgDesc>
            </ExpBlock>
          </Slider1>
        </Section>
      </div>
    );
  }
}

export default App;
