import styled from "styled-components";

export const Bar = styled.nav`
  width: 40%;

  a{
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    display: flex;
  }
`;

export const Filter = styled.ul`
  text-transform: uppercase;
  font-family: "Alegreya", sans-serif;
  letter-spacing: 1px;

  a {
    border: 2px solid var(--green);
    color: var(--green);
    padding: 0.3rem 1.5rem;
    transition: all 0.2s ease-in-out 0s;
    margin: 0 .25rem;
    font-size: 1rem;

    &:hover {
      background-color: var(--green);
      color: var(--gold);
    }
  }
`;

export const Navigation = styled.ul`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  justify-content: space-evenly;

  a {
    color: var(--gold);

    &:hover{
      color: var(--white);
    }
  }
`;
