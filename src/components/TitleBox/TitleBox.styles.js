import styled from "styled-components";

export const Container = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 70%;
    border: 0.5px solid var(--gold);
    margin-top: 1.3rem;
  }

  @media screen and (max-width: 720px){
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: var(--green);
  font-weight: 600;
  letter-spacing: 3px;
  font-family: "Alegreya", sans-serif;
  text-align: center;
`;

export const Subtitle = styled.h2`
  color: var(--black);
  font-family: "Montserrat", sans-serif;
`;
