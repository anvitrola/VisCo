import styled from "styled-components";

export const Container = styled.div`
  grid-area: ${props => props.isLeft ? "left" : "right"};
  align-self: center;
  justify-self: center;
  width: 90%;
  height: 26rem;
  background-color: ${props => props.isLeft ? "var(--pink)" : "var(--green-50)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    color: var(--green);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    font-family: "Alegreya", sans-serif;
    line-height: 1.7rem;
    color: var(--black);
  }
`;
