import React from 'react';
import { H2, Section, NoWrap } from './../UI';
import { Row } from 'react-flexbox-grid';
import home from './home.png';
import experiences from './experiences.png';
import restaurants from './restaurants.png';
import Explore from './Explore';

export default () => (
  <Section>
    <H2>Explore Airbnb</H2>
    <Row>
      <NoWrap>
        <Explore img={home} title="Home" />
        <Explore img={experiences} title="Experiences" />
        <Explore img={restaurants} title="Restaurants" />
      </NoWrap>
    </Row>
  </Section>
);
