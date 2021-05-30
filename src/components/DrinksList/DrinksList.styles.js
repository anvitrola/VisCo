import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  width: 90%;
  justify-self: center;
  margin: 1rem 0 3rem 0;

  display: grid;
  grid-template-areas:
    "nav nav"
    "title title"
    "one one"
    "two two";
  grid-template-rows: 0.5fr 1fr 3fr 3fr;
  align-items: center;
  grid-gap: 1rem;

  nav {
    width: 100%;
    grid-area: nav;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
  }

  section {
    width: 900px;
    justify-self: center;
  }
`;

export const SectionOne = styled.section`
  grid-area: one;
`;

export const SectionTwo = styled.section`
  grid-area: two;
`;

export const Iframe = styled.iframe`
  width: 480px;
  height: 270px;
`;
