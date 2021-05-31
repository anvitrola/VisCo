import styled from "styled-components";

export const BannerArea = styled.main`
  grid-area: main;
  display: grid;
  margin-bottom: 2rem;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    "img img"
    "left about"
    "drink right";
  grid-gap: 2rem;
`;

export const Banner = styled.img`
  grid-area: img;
  width: 100%;
`;

export const AboutPicture = styled.img`
  grid-area: about;
  align-self: center;
  justify-self: start;
  width: 350px;
  box-shadow: 20px 20px 0px 0px var(--gold);
`;

export const DrinkPicture = styled.img`
  grid-area: drink;
  align-self: center;
  justify-self: end;
  width: 350px;
  box-shadow: -20px 20px 0px 0px var(--gold);
`;
