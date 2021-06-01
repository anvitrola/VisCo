import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  display: grid;
  justify-self: center;
  width: 90%;
  height: auto;
  padding: 0 2rem;
  margin: 2rem 0 4rem 0;

  grid-template-areas:
    "button title title"
    "right right photo"
    "right right photo";
  grid-gap: 2rem;
  grid-template-columns: 1fr 2fr 2fr;

  img {
    grid-area: photo;
    width: 400px;
    align-self: center;
    justify-self: center;
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
  margin-left: 1rem;
`;
