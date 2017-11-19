import React from "react";
import { Row } from "react-flexbox-grid";
import {
  H2,
  Section,
  SeeAll,
  RightSwype,
  SectionHead,
  NoWrap
} from "./../../UI";

import salsa from "./salsa.png";
import mountian from "./mountian.png";
import whale from "./whale.png";
import forest from "./forest.png";
import Experience from "./Experience";

export default () => (
  <Section>
    <SectionHead>
      <H2>Experiences</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <RightSwype />
        <Experience
          img={forest}
          price="$29"
          desc="Forest Therapy"
          reviews="47"
        />
        <Experience
          img={whale}
          price="$69"
          desc="Whale watching"
          reviews="45"
        />
        <Experience
          img={mountian}
          price="$69"
          desc="Table Mountain Summit, Cable Car Down"
          reviews="44"
        />
        <Experience img={salsa} price="$50" desc="Salsa Night" reviews="49" />
      </NoWrap>
    </Row>
  </Section>
);
