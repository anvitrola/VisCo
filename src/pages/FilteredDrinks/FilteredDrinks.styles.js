import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  width: 90%;
  justify-self: center;
  margin: 1rem 0 3rem 0;

  display: grid;
  grid-template-areas:
    "nav nav nav"
    "button title title"
    "cards cards cards";
  grid-template-rows: 0.5fr 1fr 3fr;
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
    grid-area: cards;
    width: 900px;
    justify-self: center;
  }

  a {
    align-self: center;
  }
`;
