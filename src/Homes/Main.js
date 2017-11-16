import React from "react";
import { Row } from "react-flexbox-grid";
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

export default () => (
  <Section>
    <SectionHead>
      <H2>Homes</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <NextPage />
        </MdHide>
        <Home
          img={lasalentina}
          p="$82 La Salentina, see, nature & relax"
          beds="Entrie house · 9 beds"
          reviews="97"
        />
        <Home
          img={bedr3}
          p="$82 Your private 3 bedr. riad and exclusi..."
          beds="Entrie house · 5 beds"
          reviews="85"
        />
        <Home
          img={dreamy}
          p="$200 Dreamy Tropical Tree House"
          beds="Entrie treehouse · 1 beds"
          reviews="69"
        />
      </NoWrap>
    </Row>
  </Section>
);
