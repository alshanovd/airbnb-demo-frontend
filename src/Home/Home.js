import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Card } from './../Landing/Homes';
import GoogleMapReact from 'google-map-react';
import { homes } from './homeData';
import { Paginator } from './Paginator';

const WrapperMap = styled.div`
  position: fixed;
  top: 127px;
  right: 0;
  width: 36.5%;
  height: 100%;
`;

const WrapperHome = styled.div`margin-top: 70px;`;
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
        <Row>
          <Col md={8}>
            <Paginator curPage={1} />
          </Col>
        </Row>
      </WrapperHome>
    );
  }
}

const CardSpec = styled.div`padding-bottom: 40px;`;

function Blocks() {
  return homes.map((data, i) => (
    <Col key={i} md={6}>
      <CardSpec>
        <Card descr={data} />
      </CardSpec>
    </Col>
  ));
}

const coords = {
  center: { lat: 47.2, lng: 13.2 },
  zoom: 5,
};
