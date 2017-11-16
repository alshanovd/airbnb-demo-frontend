import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  H2,
  Section,
  SeeAll,
  NextPage,
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

const Houses = styled.div`margin: 24px 0;`;
const Homie = styled(Home)`margin: 20px 0;`;
const Container = styled.div`display: flex;`;
const Block = styled.div``;
const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

export default props => {
  return (
    <Block>
      <Img src={props.img} />
      <Desc>
        <ParagraphBold>{props.title}</ParagraphBold>
        <Beds>Entire house · {props.beds}</Beds>
        <Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Reviews>{props.reviews} · Superhost</Reviews>
        </Stars>
      </Desc>
    </Block>
  );
};
