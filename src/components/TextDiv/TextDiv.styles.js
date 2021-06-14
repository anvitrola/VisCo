import styled from "styled-components";

export const Container = styled.div`
  grid-area: ${(props) => (props.isLeft ? "left" : "right")};
  align-self: center;
  justify-self: ${(props) => (props.isLeft ? "left" : "right")};
  border-radius: 3px;
  width: 90%;
  height: ${(props) => (props.isExhibition ? "auto" : "20rem")};
  background-color: ${(props) =>
    props.isLeft ? "var(--bege)" : "var(--okri)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    color: ${(props) => (props.isLeft ? "var(--gold)" : "var(--green)")};
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h4 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--green);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h5 {
    font-family: "Alegreya", sans-serif;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    color: var(--black);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  p {
    font-family: "Alegreya", sans-serif;
    line-height: 1.7rem;
    color: var(--white);
  }

  a {
    width: 50%;
    margin-top: 1rem;
    align-self: flex-end;
  }

  li {
    font-family: "Alegreya", sans-serif;
    line-height: 1.7rem;
    color: var(--white);
  }
`;
