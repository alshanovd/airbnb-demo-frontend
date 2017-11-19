import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import {
  ParagraphLight,
  H2,
  Section,
  SeeAll,
  RightSwype,
  ParagraphBold,
  Img,
  SectionHead,
  NoWrap,
  MdHide
} from "./../../UI";
import chum from "./chum.png";
import hanjan from "./hanjan.png";
import primemeats from "./primemeats.png";
import seaprice from "./seaprice.png";
import Popular from "./Popular";

const Descr = styled(ParagraphBold)`
  font-size: 10px;
  margin: 12px 0 0;
  text-transform: uppercase;
  @media (min-width: 320px) {
    font-size: 8px;
    line-height: 9px;
  }
`;

const Title = styled(ParagraphBold)`
  font-size: 18px;
  margin: 2px 0 0;
  @media (min-width: 320px) {
    font-size: 14px;
    font-size: 16px;
  }
`;

const SubTitle = styled(ParagraphLight)`
  font-size: 18px;
  margin: 4px 0 0;
  @media (min-width: 320px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default () => (
  <Section>
    <SectionHead>
      <H2>Popular reservations around the world</H2>
      <SeeAll>See all</SeeAll>
    </SectionHead>
    <Row>
      <NoWrap>
        <MdHide>
          <RightSwype />
        </MdHide>
        <Popular
          img={chum}
          descr="Speakeasy"
          title="Chumley's"
          subtitle="About $60 per person"
        />
        <Popular
          img={hanjan}
          descr="Korean gastropub"
          title="Hanjan"
          subtitle="About $50 per person"
        />
        <Popular
          img={primemeats}
          descr="German american"
          title="Prime Meats"
          subtitle="About $55 per person"
        />
        <Popular
          img={seaprice}
          descr="Fine seafood"
          title="Seaprice"
          subtitle="About $70 per person"
        />
      </NoWrap>
    </Row>
  </Section>
);
