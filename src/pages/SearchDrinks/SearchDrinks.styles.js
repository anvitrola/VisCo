import styled from "styled-components";

export const Container = styled.main`
  grid-area: main;
  width: 90%;
  justify-self: center;
  margin: 1rem 0 3rem 0;

  display: grid;
  grid-template-areas:
    "nav nav nav"
    "button form form"
    "cards cards cards";
  grid-template-rows: 0.5fr 1fr 3fr;
  align-items: center;
  grid-gap: 1rem;

  nav {
    width: 100%;
    grid-area: nav;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
  }

  section {
    grid-area: cards;
    width: 900px;
    justify-self: center;
  }

  a {
    align-self: center;
  }

`;

export const SearchForm = styled.form`
  grid-area: form;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background: none;
    padding: 0.5rem;
    width: 40%;
    border: none;
    border-bottom: 3px solid var(--green);
    border-left: 3px solid var(--green);
  }
`;
