import styled from "styled-components";

export const MainArea = styled.main`
  grid-area: main;
  display: grid;
  padding-bottom: 5rem;
  background-color: var(--green-100);
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    "banner banner banner"
    "left left about"
    "drink right right";
  grid-gap: 2rem;

  @media screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
  }
`;

export const AboutPicture = styled.img`
  grid-area: about;
  align-self: center;
  justify-self: start;
  width: 390px;

  @media screen and (max-width: 720px){
    display: none;
  }
`;

export const DrinkPicture = styled.img`
  grid-area: drink;
  align-self: center;
  justify-self: end;
  width: 410px;

  @media screen and (max-width: 720px){
    display: none;
  }
`;
