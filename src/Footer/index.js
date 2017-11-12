import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { WordRegular, AncorRegular } from './../UI';
import dropdown from './dropdown.svg';
import footerlogo from './footer-logo.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

const Panel = styled.div`
  padding: 48px 0;
  @media (min-width: 320px) {
    padding: 16px 0 24px;
  }
`;
const Footer = styled.footer`box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);`;
const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 15px;
  font-family: CircularAirLight, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 15px;
  color: #383838;
  width: 100%;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  appearance: none;
  background-position: 92% center;
  &:last-child {
    margin-top: 16px;
  }
  @media (min-width: 320px) {
    font-size: 12px;
    padding: 12px 8px;
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
  padding: 35px 0;
`;

const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CopyrightText = styled(WordRegular)`
  font-size: 12px;
  margin-left: 12px;
`;

const AddInfo = styled(AncorRegular)`
  font-size: 12px;
  margin: 0 15px 0 0;
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
`;

const MdSize = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default () => (
  <Footer>
    <Panel>
      <Row>
        <Col xs={12} md={3} lg={3}>
          <Row>
            <Col xs={6} md={12} lg={12}>
              <Select>
                <option>English</option>
                <option>Russian</option>
                <option>Deutsch</option>
              </Select>
            </Col>
            <Col xs={6} md={12} lg={12}>
              <Select>
                <option>United Sates dollar</option>
                <option>Canadian dollar</option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col mdOffset={1} md={2} lgOffset={1} lg={2}>
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
        <Col mdOffset={1} md={2} lgOffset={1} lg={2}>
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
        <Col mdOffset={1} md={2} lgOffset={1} lg={2}>
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
        <Col md={2} lg={2}>
          <VerticalMiddle>
            <img src={footerlogo} alt="" />
            <CopyrightText>© Airbnb Inc.</CopyrightText>
          </VerticalMiddle>
        </Col>
        <Col md={5} mdOffset={5} lg={4} lgOffset={6}>
          <VerticalMiddle>
            <AddInfo href="#">Terms</AddInfo>
            <AddInfo href="#">Privacy</AddInfo>
            <AddInfo href="#">Site map</AddInfo>
            <SocialLink href="#">
              <img src={facebook} alt="facebook" />
            </SocialLink>
            <SocialLink href="#">
              <img src={twitter} alt="facebook" />
            </SocialLink>
            <SocialLink href="#">
              <img src={instagram} alt="facebook" />
            </SocialLink>
          </VerticalMiddle>
        </Col>
      </Row>
    </CopyrightBlock>
  </Footer>
);
