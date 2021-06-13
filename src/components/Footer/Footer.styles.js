import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;
  border: 3px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--green);
  padding: 0.3rem;

  div {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;

    p {
      color: var(--gold);
      font-family: "Alegreya", sans-serif;
    }

    a {
      text-decoration: none;
      color: var(--gold);
      margin: 2px 6px;
    }
  }
`;
