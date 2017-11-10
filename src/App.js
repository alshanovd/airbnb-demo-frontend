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
import star from './assets/png/star.png';
import salsa from './assets/png/salsa.png';
import mountian from './assets/png/mountian.png';
import whale from './assets/png/whale.png';
import arrow from './assets/png/arrow.png';
import seeall from './assets/svg/seeall.svg';
import lasalentina from './assets/png/lasalentina.png';
import dreamy from './assets/png/dreamy.png';
import bedr3 from './assets/png/bedr3.png';
import chum from './assets/png/chum.png';
import hanjan from './assets/png/hanjan.png';
import primemeats from './assets/png/primemeats.png';
import seaprice from './assets/png/seaprice.png';
import paris from './assets/png/paris.png';
import losangeles from './assets/png/losangeles.png';
import seoul from './assets/png/seoul.png';
import capetown from './assets/png/capetown.png';
import tokyo from './assets/png/tokyo.png';
import miami from './assets/png/miami.png';
import dropdown from './assets/svg/dropdown.svg';
import footerlogo from './assets/svg/footer-logo.svg';
import facebook from './assets/svg/facebook.svg';
import twitter from './assets/svg/twitter.svg';
import instagram from './assets/svg/instagram.svg';

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
  color: #383838;
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

const SubHeader = styled.div`display: flex;`;

const ExploreImg = styled.img`
  width: 96px;
  height: 72px;
  align-items: center;
`;

const ExploreTitle = styled.span`margin-left: 24px; color: #383838`;

const Slider = styled.div`display: flex;`;

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
  font-size: 15px;
`;

const ExpTitle = styled.span`
  font-family: CircularAirLight;
  font-size: 15px;
  line-height: 18px;
`;

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
  top: 52%;
  transform: translateY(-50%);
  right: -15px;
`;

const NextPageFeatured = styled(NextPage)`top: 59%;`;

const SeeAll = styled.span`
  font-family: CircularAirLight;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  color: #383838;
  &:after {
    padding: 8px;
    content: url(${seeall});
  }
`;

const HomesBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-right: 18px;
  &:last-child {
    margin-right: 0;
  }
`;

const HomesImg = styled.img`width: 100%;`;

const HomesDesc = styled.div`
  margin: 8px 0 0;
  padding: 0;
  color: #383838;
`;

const HomesBeds = styled.p`
  font-family: CircularAirLight;
  font-size: 15px;
  margin: 2px 0 0;
  color: #383838;
`;

const PopularDescr = styled.p`
  font-family: CircularAirBold;
  font-size: 10px;
  margin: 12px 0 0;
  text-transform: uppercase;
  color: #383838;
`;

const PopularTitle = styled.p`
  font-family: CircularAirBold;
  font-size: 18px;
  margin: 2px 0 0;
  color: #383838;
`;

const PopularSubTitle = styled.p`
  font-family: CircularAirLight;
  font-size: 18px;
  margin: 4px 0 0;
  color: #383838;
`;

const FeaturedBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 17px;
  &:last-child {
    margin-right: 0;
  }
`;

const FeaturedTitle = styled.p`
  margin: 8px 0 0;
  font-family: CircularAir;
  font-size: 15px;
`;

const Bottom = styled.div`
  display: flex;
  margin: 64px 0 0;
  padding: 48px 0;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Selects = styled.div``;

const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 15px;
  font-family: CircularAirLight;
  font-size: 18px;
  color: #383838;
  width: 100%;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  -webkit-appearance: none;
  background-position: 92% center;
  &:last-child {
    margin-top: 16px;
  }
`;

const BottomLinks = styled.div``;

const BottomTitle = styled.h3`
  font-family: CircularAirBold;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  margin-bottom: 12px;
`;

const BottomLink = styled.p`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  margin: 4px 0;
`;

const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  padding: 35px 0;
  display: flex;
  align-items: center;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;

const FooterTitle = styled.span`
  color: #636363;
  font-family: CircularAir;
  margin-left: 12px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    font-family: CircularAir;
    font-size: 15px;
    margin: 8px;
    color: #636363;
    text-decoration: none;
  }
`;

const Social = styled.img`padding: 3px;`;

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
            Experiences
            <SeeAll>See all</SeeAll>
          </H2>
          <Slider>
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
          </Slider>
        </Section>
        <Section>
          <H2>
            Explore Airbnb
            <SeeAll>See all</SeeAll>
          </H2>
          <Slider>
            <NextPage />
            <HomesBlock className="col-4">
              <HomesImg src={lasalentina} />
              <HomesDesc>
                <ExpPrice>$82 La Salentina, see, nature & relax</ExpPrice>
                <HomesBeds>Entrie house · 9 beds</HomesBeds>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>97 · Superhost</ExpReviews>
                </ExpStars>
              </HomesDesc>
            </HomesBlock>
            <HomesBlock className="col-4">
              <HomesImg src={bedr3} />
              <HomesDesc>
                <ExpPrice>
                  $82 Your private 3 bedr. riad and exclusi...
                </ExpPrice>
                <HomesBeds>Entrie house · 5 beds</HomesBeds>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>161 · Superhost</ExpReviews>
                </ExpStars>
              </HomesDesc>
            </HomesBlock>
            <HomesBlock className="col-4">
              <HomesImg src={dreamy} />
              <HomesDesc>
                <ExpPrice>$200 Dreamy Tropical Tree House</ExpPrice>
                <HomesBeds>Entrie treehouse · 1 beds</HomesBeds>
                <ExpStars>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <ExpReviews>364 · Superhost</ExpReviews>
                </ExpStars>
              </HomesDesc>
            </HomesBlock>
          </Slider>
        </Section>
        <Section>
          <H2>
            Popular reservations around the world
            <SeeAll>See all</SeeAll>
          </H2>
          <Slider>
            <NextPage />
            <ExpBlock className="col-3">
              <ExpImg src={chum} />
              <PopularDescr>Speakeasy</PopularDescr>
              <PopularTitle>Chumley's</PopularTitle>
              <PopularSubTitle>About $60 per person</PopularSubTitle>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={hanjan} />
              <PopularDescr>Korean gastropub</PopularDescr>
              <PopularTitle>Hanjan</PopularTitle>
              <PopularSubTitle>About $50 per person</PopularSubTitle>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={primemeats} />
              <PopularDescr>German american</PopularDescr>
              <PopularTitle>Prime Meats</PopularTitle>
              <PopularSubTitle>About $55 per person</PopularSubTitle>
            </ExpBlock>
            <ExpBlock className="col-3">
              <ExpImg src={seaprice} />
              <PopularDescr>Fine seafood</PopularDescr>
              <PopularTitle>Seaprice</PopularTitle>
              <PopularSubTitle>About $70 per person</PopularSubTitle>
            </ExpBlock>
          </Slider>
        </Section>
        <Section>
          <H2>
            Featured destination
            <SeeAll>See all</SeeAll>
          </H2>
          <Slider>
            <NextPageFeatured />
            <FeaturedBlock className="col-2">
              <HomesImg src={paris} />
              <FeaturedTitle>Paris</FeaturedTitle>
            </FeaturedBlock>
            <FeaturedBlock className="col-2">
              <HomesImg src={losangeles} />
              <FeaturedTitle>Miami</FeaturedTitle>
            </FeaturedBlock>
            <FeaturedBlock className="col-2">
              <HomesImg src={seoul} />
              <FeaturedTitle>Tokyo</FeaturedTitle>
            </FeaturedBlock>
            <FeaturedBlock className="col-2">
              <HomesImg src={capetown} />
              <FeaturedTitle>Cape town</FeaturedTitle>
            </FeaturedBlock>
            <FeaturedBlock className="col-2">
              <HomesImg src={tokyo} />
              <FeaturedTitle>Seoul</FeaturedTitle>
            </FeaturedBlock>
            <FeaturedBlock className="col-2">
              <HomesImg src={miami} />
              <FeaturedTitle>Los Angeles</FeaturedTitle>
            </FeaturedBlock>
          </Slider>
        </Section>
        <Bottom>
          <Selects className="col-3">
            <Select>
              <option>English</option>
            </Select>
            <Select>
              <option>English</option>
            </Select>
          </Selects>
          <div className="col-1" />
          <BottomLinks className="col-2">
            <BottomTitle>Airbnb</BottomTitle>
            <BottomLink>About us</BottomLink>
          </BottomLinks>
          <div className="col-1" />
          <BottomLinks className="col-2">
            <BottomTitle>Airbnb</BottomTitle>
            <BottomLink>About us</BottomLink>
          </BottomLinks>
          <div className="col-1" />
          <BottomLinks className="col-2">
            <BottomTitle>Airbnb</BottomTitle>
            <BottomLink>About us</BottomLink>
          </BottomLinks>
        </Bottom>
        <Footer>
          <FooterRight className="col-2">
            <img src={footerlogo} alt="" />
            <FooterTitle>© Airbnb Inc.</FooterTitle>
          </FooterRight>
          <div className="col-6" />
          <FooterLinks className="col-4">
            <a href="#">Terms</a>
            <a href="#">Terms</a>
            <a href="#">Terms</a>
            <Social src={facebook} />
            <Social src={twitter} />
            <Social src={instagram} />
          </FooterLinks>
        </Footer>
      </div>
    );
  }
}

export default App;
