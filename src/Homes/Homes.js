import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  H2,
  Section,
  SeeAll,
  RightSwype,
  SectionHead,
  NoWrap,
  Img,
  ParagraphLight,
  ParagraphBold,
  Stars,
  Star,
  Reviews,
  MdHide,
} from './../UI';
import { color } from './../UI/Theme';
import lasalentina from './lasalentina.png';
import dreamy from './dreamy.png';
import bedr3 from './bedr3.png';
import Home from './Home';
import styled from 'styled-components';
import Header from './../Header';
import { Wrapper } from './../App';
import { BrowserRouter, Route } from 'react-router-dom';
import Block from './Block';
import { Buttons } from './Buttons';
import { Paginator } from './Paginator';
import GoogleMapReact from 'google-map-react';

const Houses = styled.div`
  background-color: #ffffff;
  margin-bottom: 25px;
  ${props =>
    props.roomTypeOpen &&
    `
      background: ${color.fill.primary};
      color: #ffffff;
    `};
`;
const Homie = styled(Home)`margin: 20px 0;`;
const Container = styled.div`display: flex;`;
const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

const coords = {
  center: { lat: 47.2, lng: 13.2 },
  zoom: 5,
};

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  margin-top: 56px;
  ${props =>
    !props.isOpacity &&
    `
      opacity: 0.5;
    `};
`;

const ButtonsBlock = styled.div`
  display: fixed;
  margin-top: 80px;
  width: 100%;
`;

export class Homes extends Component {
  state = { isOpacity: true };
  isOpacity = true;
  constructor(props) {
    super(props);
    this.togglePush = this.togglePush.bind(this);
  }

  togglePush = pushed => {
    this.setState({
      isOpacity: pushed,
    });
  };

  render() {
    return (
      <Houses>
        <Header />
        <Row>
          <Col md={12}>
            <ButtonsBlock>
              <Buttons pushFunc={this.togglePush} />
            </ButtonsBlock>
          </Col>
        </Row>
        <Content isOpacity={this.state.isOpacity}>
          <Row>
            <Col md={8}>
              <Row>
                <Blocks />
              </Row>
              <Row>
                <Paginator curPage={1} />
              </Row>
            </Col>
            <Col md={4}>
              <MapContainer>
                <Fixed>
                  <GoogleMapReact
                    defaultCenter={coords.center}
                    defaultZoom={coords.zoom}
                  />
                </Fixed>
              </MapContainer>
            </Col>
          </Row>
        </Content>
      </Houses>
    );
  }
}

const Blocks = props => {
  return homes.map((data, i) => <Block key={i} descr={data} />);
};

const homes = [
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./lasalentina.png'),
  },
];
