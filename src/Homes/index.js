import React from 'react';
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
import lasalentina from './lasalentina.png';
import dreamy from './dreamy.png';
import bedr3 from './bedr3.png';
import Home from './Home';
import styled from 'styled-components';
import Header from './../Header';
import { Wrapper } from './../App';
import { BrowserRouter, Route } from 'react-router-dom';
import Block from './Block';
import Buttons from './Buttons';
import { Paginator } from './Paginator';
import GoogleMapReact from 'google-map-react';

const Houses = styled.div`margin-bottom: 25px;`;
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
  position: absolute;
  width: 100%;
  height: 100%;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default props => {
  return (
    <Houses>
      <Header />
      <Buttons />
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
    </Houses>
  );
};

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
