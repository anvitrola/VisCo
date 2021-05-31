import styled from "styled-components";

export const Container = styled.div`
  grid-area: ${props => props.isLeft ? "left" : "right"};
  align-self: center;
  justify-self: center;
  width: 90%;
  height: auto;
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

  h4{
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    color: var(--green);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h5{
    font-family: "Alegreya", sans-serif;
    font-size: .8rem;
    color: var(--green);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    font-family: "Alegreya", sans-serif;
    line-height: 1.7rem;
    color: var(--black);
  }

  a{
    width: 50%;
    align-self: flex-end;
  }

  li{
    font-family: "Alegreya", sans-serif;
    line-height: 1.7rem;
    color: var(--black);
  }
`;
