import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import {
  ParagraphLight,
  Stars,
  Star,
  H2,
  Section,
  SeeAll,
  NextPage,
  ParagraphBold,
  Reviews,
  Img,
  SectionHead,
  NoWrap,
  MdHide,
} from './../../UI/UI';

const Desc = styled.div`
  margin: 8px 0 0;
  padding: 0;
`;

const Beds = styled(ParagraphLight)`margin: 2px 0 0;`;

export class Homes extends Component {
  render() {
    return (
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
            <Cards />
          </NoWrap>
        </Row>
      </Section>
    );
  }
}

function Cards() {
  return homes.map((data, i) => (
    <Col key={i} md={4} xs={7}>
      <Card descr={data} />
    </Col>
  ));
}

const Wrapper = styled.div``;

export class Card extends Component {
  constructor(props) {
    super();
    this.descr = props.descr;
  }

  render() {
    return (
      <Wrapper>
        <Img src={this.descr.img} />
        <Desc>
          <ParagraphBold>
            ${this.descr.price} {this.descr.title}
          </ParagraphBold>
          <Beds>Entrie treehouse · {this.descr.beds}</Beds>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Reviews>{this.descr.reviews} · Superhost</Reviews>
          </Stars>
        </Desc>
      </Wrapper>
    );
  }
}

export const homes = [
  {
    reviews: 88,
    href: '#',
    title: 'Dreamy Tropical Tree House',
    price: '200',
    beds: '1 beds',
    img: require('./dreamy.png'),
  },
  {
    reviews: 97,
    href: '#',
    title: 'La Salentina, see, nature & relax',
    price: '82',
    beds: '9 beds',
    img: require('./bedr3.png'),
  },
  {
    reviews: 45,
    href: '#',
    title: 'Your private 3 bedr. riad and exclusi...',
    price: '82',
    beds: '5 beds',
    img: require('./lasalentina.png'),
  },
];
