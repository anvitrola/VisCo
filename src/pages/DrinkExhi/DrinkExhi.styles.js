import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  display: grid;
  justify-self: center;
  width: 90%;
  height: auto;
  padding: 0 2rem;
  margin: 1rem 0 4rem 0;

  grid-template-areas:
    "button title"
    "right photo";
  grid-template-rows: 0.5fr 1fr;
  grid-template-columns: 3fr 3fr;
  grid-gap: 0.5rem;

  img {
    grid-area: photo;
    width: 400px;
    align-self: center;
    justify-self: center;
  }

  a {
    grid-area: button;
    align-self: center;
    width: 50%;
  }

  li {
    font-family: "Alegreya", sans-serif;
  }
`;

export const Ingredients = styled.ul`
  align-self: flex-start;
  list-style-type: disclosure-closed;
  margin-left: 1rem;
`;

export const Steps = styled.ul`
  align-self: flex-start;
  list-style-type: upper-roman;
  margin-left: 1rem;
`;
