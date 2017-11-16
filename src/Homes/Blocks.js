import React from "react";
import { Row, Col } from "react-flexbox-grid";
import {
  H2,
  Section,
  SeeAll,
  NextPage,
  SectionHead,
  NoWrap,
  MdHide
} from "./../UI";
import lasalentina from "./lasalentina.png";
import dreamy from "./dreamy.png";
import bedr3 from "./bedr3.png";
import Home from "./Home";
import styled from "styled-components";

const Houses = styled.div`margin: 24px 0;`;
const Homie = styled(Home)`margin: 20px 0;`;

export default props => {
  return (
    <Houses>
      <Row>
        <Homie
          img={lasalentina}
          p="$82 La Salentina, see, nature & relax"
          beds="Entrie house · 9 beds"
          reviews="97"
        />
        <Homie
          img={bedr3}
          p="$82 Your private 3 bedr. riad and exclusi..."
          beds="Entrie house · 5 beds"
          reviews="85"
        />
      </Row>
      <Row>
        <Homie
          img={bedr3}
          p="$82 Your private 3 bedr. riad and exclusi..."
          beds="Entrie house · 5 beds"
          reviews="85"
        />
        <Homie
          img={dreamy}
          p="$200 Dreamy Tropical Tree House"
          beds="Entrie treehouse · 1 beds"
          reviews="69"
        />
      </Row>
      <Row>
        <Home
          img={lasalentina}
          p="$82 La Salentina, see, nature & relax"
          beds="Entrie house · 9 beds"
          reviews="97"
        />
        <Home
          img={dreamy}
          p="$200 Dreamy Tropical Tree House"
          beds="Entrie treehouse · 1 beds"
          reviews="69"
        />
      </Row>
    </Houses>
  );
};
