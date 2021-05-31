import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  grid-area: header;
  border: 3px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--green);
  padding: 1rem 4rem;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: var(--gold);
  font-size: 2rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;
