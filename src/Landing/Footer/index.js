import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { WordRegular, AncorRegular } from './../../UI/UI';
import dropdown from './dropdown.svg';
import footerlogo from './footer-logo.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

const Panel = styled.div`
  padding: 16px 0 24px;
  @media (min-width: 321px) {
    padding: 48px 0;
  }
`;
const Footer = styled.footer`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  @media (min-width: 320px) {
    margin-top: 40px;
  }
  @media (min-width: 768px) {
    margin-top: 64px;
    max-width: 976px;
  }
`;
const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
  color: #383838;
  width: 100%;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  appearance: none;
  background-position: 92% center;
  font-size: 12px;
  padding: 12px 8px;
  &:last-child {
    margin-top: 0;
    @media (min-width: 321px) {
      margin-top: 16px;
      margin-left: 8px;
    }
  }
  font-size: 12px;
  @media (min-width: 321px) {
    font-size: 18px;
    padding: 12px 15px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const BottomTitle = styled.h3`
  font-family: CircularAirBold, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  margin: 0 0 16px 0;
`;

const CopyrightBlock = styled.div`
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  padding-top: 16px;
  @media (min-width: 321px) {
    font-size: 15px;
    padding: 35px 0;
  }
`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CopyrightText = styled(WordRegular)`
  color: #636363;
  font-size: 12px;
  margin-left: 12px;
  @media (min-width: 321px) {
    font-size: 15px;
  }
`;

const AddInfo = styled(AncorRegular)`
  font-size: 12px;
  margin: 0 15px 0 0;
  @media (min-width: 321px) {
    font-size: 15px;
  }
`;

const SocialLink = styled.a`
  padding: 3px;
  text-decoration: none;
  font-size: 12px;
`;

const Link = styled(AncorRegular)`
  display: block;
  width: 100%;
  margin: 8px 0 0;
  color: #636363;
`;

const MdSize = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);`;

const FooterLinks = styled.div`margin-left: -8px;`;

const SocialImg = styled.img`
  width: 16px;
  height: 16px;
  @media (min-width: 321px) {
    width: auto;
    height: auto;
  }
`;

export default () => (
  <Wrapper>
    <Footer>
      <Grid>
        <Panel>
          <Row>
            <Col md={3} xs={12}>
              <Row>
                <Col xs={6} md={12}>
                  <Select>
                    <option>English</option>
                    <option>Russian</option>
                    <option>Deutsch</option>
                  </Select>
                </Col>
                <Col xs={6} md={12}>
                  <Select>
                    <option>United Sates dollar</option>
                    <option>Canadian dollar</option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col mdOffset={1} md={2}>
              <MdSize>
                <BottomTitle>Airbnb</BottomTitle>
                <Link href="#">About us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Press</Link>
                <Link href="#">Policies</Link>
                <Link href="#">Help</Link>
                <Link href="#">Diversity & Belongin</Link>
              </MdSize>
            </Col>
            <Col mdOffset={1} md={2}>
              <MdSize>
                <BottomTitle>Discover</BottomTitle>
                <Link href="#">Trust & Safety</Link>
                <Link href="#">Travel Credit</Link>
                <Link href="#">Gift Cards</Link>
                <Link href="#">Airbnb Citizen</Link>
                <Link href="#">Business Travel</Link>
                <Link href="#">Guidebooks</Link>
                <Link href="#">Airbnbmag</Link>
              </MdSize>
            </Col>
            <Col mdOffset={1} md={2}>
              <MdSize>
                <BottomTitle>Hosting</BottomTitle>
                <Link href="#">Why Host</Link>
                <Link href="#">Hospitality</Link>
                <Link href="#">Responsible Hosting</Link>
                <Link href="#">Community Center</Link>
              </MdSize>
            </Col>
          </Row>
        </Panel>

        <CopyrightBlock>
          <Row>
            <Col md={3}>
              <VerticalMiddle>
                <img src={footerlogo} alt="" />
                <CopyrightText>© Airbnb Inc.</CopyrightText>
              </VerticalMiddle>
            </Col>
            <Col md={4} mdOffset={5} xs={12}>
              <FooterLinks>
                <VerticalMiddle>
                  <AddInfo href="#">Terms</AddInfo>
                  <AddInfo href="#">Privacy</AddInfo>
                  <AddInfo href="#">Site map</AddInfo>
                  <SocialLink href="#">
                    <SocialImg src={facebook} alt="facebook" />
                  </SocialLink>
                  <SocialLink href="#">
                    <SocialImg src={twitter} alt="facebook" />
                  </SocialLink>
                  <SocialLink href="#">
                    <SocialImg src={instagram} alt="facebook" />
                  </SocialLink>
                </VerticalMiddle>
              </FooterLinks>
            </Col>
          </Row>
        </CopyrightBlock>
      </Grid>
    </Footer>
  </Wrapper>
);
