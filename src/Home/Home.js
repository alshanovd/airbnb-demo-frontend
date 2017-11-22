import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Card } from './../Landing/Homes';
import GoogleMapReact from 'google-map-react';
import { homes } from './homeData';

const WrapperMap = styled.div`
  position: fixed;
  top: 127px;
  right: 40px;
  width: 391px;
  height: 1124px;
`;

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
            <WrapperMap>
              <GoogleMapReact
                defaultCenter={coords.center}
                defaultZoom={coords.zoom}
              />
            </WrapperMap>
          </Col>
        </Row>
      </WrapperHome>
    );
  }
}

const CardSpec = styled(Card)`padding-top: 40px;`;

function Blocks() {
  return homes.map((data, i) => (
    <Col key={i} md={6}>
      <CardSpec descr={data} />
    </Col>
  ));
}

const coords = {
  center: { lat: 47.2, lng: 13.2 },
  zoom: 5,
};
