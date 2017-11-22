import React, { Component } from 'react';
import {
  Img,
  ParagraphLight,
  ParagraphBold,
  WordBold,
  Stars,
  Star,
  Reviews,
} from './../UI/UI';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomTypeOpen: false,
      priceOpen: false,
      instantOpen: false,
      datesOpen: false,
      guestsOpen: false,
      moreOpen: false,
    };
    this.descr = props.descr;
  }

  render() {
    return (
      <Block to="#">
        <Img src={this.descr.img} />
        <Desc>
          <ParagraphBold>
            <Price>${this.descr.price}</Price>
            {this.descr.title}
          </ParagraphBold>
          <Beds>Entire house · {this.descr.beds}</Beds>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Reviews>{this.descr.reviews} · Superhost</Reviews>
          </Stars>
        </Desc>
      </Block>
    );
  }
}
