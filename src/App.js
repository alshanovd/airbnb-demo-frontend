import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import './style/grid.css';
import './style/font.css';
import 'normalize.css';
import shape from './assets/svg/shape.svg';
import search from './assets/svg/search.svg';
import home from './assets/png/home.png';
import experiences from './assets/png/experiences.png';
import restaurants from './assets/png/restaurants.png';
import forest from './assets/png/forest.png';

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
`;

const H2 = styled.h2`
  font-family: CircularAirBold;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  margin: 24px 0;
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
  margin: 0;
  padding: 0;
`;

const ExpPrice = styled.span`font-family: CircularAirBold;`;

const ExpTitle = styled.span`font-family: CircularAirLight;`;

const ExpStars = styled.span`color: #008489;`;

const ExpReviews = styled.span`font-family: CircularAir;`;

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
          <H2>Explore Airbnb</H2>
          <Slider1>
            <ExpBlock className="col-3">
              <ExpImg src={forest} />
              <ExpImgDesc>
                <ExpPrice>$29</ExpPrice>
                <ExpTitle>Forest</ExpTitle>
              </ExpImgDesc>
              <ExpImgDesc>
                <ExpStars>⭐⭐⭐⭐⭐</ExpStars>
                <ExpReviews>45 reviews</ExpReviews>
              </ExpImgDesc>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={forest} />
              <ExpPrice>$29</ExpPrice>
              <ExpTitle>Forest</ExpTitle>
              <ExpStars>*****</ExpStars>
              <ExpReviews>45 reviews</ExpReviews>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={forest} />
              <ExpPrice>$29</ExpPrice>
              <ExpTitle>Forest</ExpTitle>
              <ExpStars>*****</ExpStars>
              <ExpReviews>45 reviews</ExpReviews>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={forest} />
              <ExpPrice>$29</ExpPrice>
              <ExpTitle>Forest</ExpTitle>
              <ExpStars>*****</ExpStars>
              <ExpReviews>45 reviews</ExpReviews>
            </ExpBlock>
          </Slider1>
        </Section>
      </div>
    );
  }
}

export default App;
