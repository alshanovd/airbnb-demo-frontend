import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Card } from './Card';
import GoogleMapReact from 'google-map-react';

const WrapperHome = styled.div`margin-top: 120px;`;

export class Home extends Component {
  render() {
    return (
      <WrapperHome>
        <Row>
          <Col md={8}>
            <Row>
              <Blocks />
            </Row>
          </Col>
          <Col md={4}>
            <GoogleMapReact
              defaultCenter={coords.center}
              defaultZoom={coords.zoom}
            />
          </Col>
        </Row>
      </WrapperHome>
    );
  }
}

function Blocks() {
  return homes.map((data, i) => (
    <Col key={i} md={6}>
      <Card descr={data} />
    </Col>
  ));
}

const coords = {
  center: { lat: 47.2, lng: 13.2 },
  zoom: 5,
};

const homes = [
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./../Landing/Homes/lasalentina.png'),
  },
];
