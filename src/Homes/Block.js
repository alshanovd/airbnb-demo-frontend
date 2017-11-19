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
  WordBold,
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
import { Link } from 'react-router-dom';

const Houses = styled.div`margin: 24px 0;`;
const Homie = styled(Home)`margin: 20px 0;`;
const Container = styled.div`display: flex;`;
const Block = styled(Link)`
  margin: 24px 0 24px 0;
  display: block;
  text-decoration: none;
`;
const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

const Price = styled(WordBold)`padding-right: 8px;`;

export default props => {
  const descr = props.descr;
  return (
    <Block to="#">
      <Img src={descr.img} />
      <Desc>
        <ParagraphBold>
          <Price>${descr.price}</Price>
          {descr.title}
        </ParagraphBold>
        <Beds>Entire house · {descr.beds}</Beds>
        <Stars>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Reviews>{descr.reviews} · Superhost</Reviews>
        </Stars>
      </Desc>
    </Block>
  );
};
