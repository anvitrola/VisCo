import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  width: 95%;
  height: auto;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  grid-template-areas:
    "title title"
    "left left"
    "right right";

  div {
    width: 60%;
  }
`;
