import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled.button`
  padding: 0.3rem;
  border: none;
  border-radius: 3px;
  background-color: var(--gold);
  cursor: pointer;
  color: var(--green);
  transition: 0.5s all;
  width: ${(props) => (props.secondary ? "7rem" : "50%")};
  align-self: flex-end;
  font-family: "Alegreya Sans", sans-serif;
  font-size: 1.2rem;

  &:hover {
    background-color: var(--green);
    color: var(--gold);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const BackBtn = styled(Link)`
  grid-area: button;
  align-self: end;
  justify-self: start;
`;
