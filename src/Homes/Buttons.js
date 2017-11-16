import React from "react";
import { Row } from "react-flexbox-grid";
import styled from "styled-components";
import { Button } from "./../UI";

const Container = styled.div`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;
`;

export default () => {
  return (
    <Row>
      <Container>
        <Button>Dates</Button>
        <Button>Guests</Button>
        <Button>Room type</Button>
        <Button>Price</Button>
        <Button>Instant book</Button>
        <Button>More filters</Button>
      </Container>
    </Row>
  );
};
