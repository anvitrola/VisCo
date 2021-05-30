import styled from "styled-components";
import { Link } from "react-router-dom";


export const Card = styled(Link)`
  text-decoration: none;
  color: var(--green);
  height: 21rem;
  width: auto;
  background-color: var(--green-50);
  border: 1px solid var(--gold);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
    font-family: "Alegreya", sans-serif;
    font-size: 17px;
    margin-top: 0.5rem;
  }

  img {
    width: 300px;
  }

  hr {
    width: 70%;
    margin-top: 1rem;
    border: 1px solid var(--gold);
  }
`;
