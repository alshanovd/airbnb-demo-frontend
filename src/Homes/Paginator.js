import React, { Component } from "react";
import styled from "styled-components";
import {
  WordRegular,
  H2,
  Section,
  SeeAll,
  RightSwype,
  SectionHead,
  NoWrap,
  Img,
  ParagraphLight,
  ParagraphBold,
  Stars,
  Star,
  Reviews,
  MdHide
} from "./../UI";
import color from "./../UI/Theme";

const PageNum = styled.div`
  font-size: 16px;
  background-color: #008489;
  border-radius: 50%;
  padding: 5px;
  height: 32px;
  width: 32px;
  text-align: center;
  margin: 0 20px;
`;

const PaginatorBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Page = styled(WordRegular)`
  line-height: 32px;
  ${props =>
    props.color &&
    `
      background: black;
      color: ${props.color};
    `};
`;

const Dots = styled(PageNum)`
  border-radius: none;
  background: none;
`;

const NextPage = styled(PageNum)``;

export class Paginator extends Component {
  curPage = this.props.curPage;

  render() {
    return (
      <PaginatorBlock>
        <PageNum>
          <Page>1</Page>
        </PageNum>
        <PageNum>
          <Page color="#FF0000">2</Page>
        </PageNum>
        <PageNum>
          <Page>3</Page>
        </PageNum>
        <Dots>
          <Page>. . .</Page>
        </Dots>
        <PageNum>
          <Page>17</Page>
        </PageNum>
        <RightSwype />
      </PaginatorBlock>
    );
  }
}
