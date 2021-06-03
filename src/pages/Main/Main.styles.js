import styled from "styled-components";

export const MainArea = styled.main`
  grid-area: main;
  display: grid;
  margin-bottom: 2rem;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    "banner banner banner"
    "left left about"
    "drink right right";
  grid-gap: 2rem;
`;

export const Banner = styled.div`
  grid-area: banner;
  width: 100%;
  height: 90vh;
  background-color: var(--white);
  background-attachment: fixed;
  background-podition: center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const AboutPicture = styled.img`
  grid-area: about;
  align-self: center;
  justify-self: start;
  width: 400px;
  box-shadow: 20px 20px 0px 0px var(--gold);
`;

export const DrinkPicture = styled.img`
  grid-area: drink;
  align-self: center;
  justify-self: end;
  width: 370px;
  box-shadow: -20px 20px 0px 0px var(--gold);
`;
