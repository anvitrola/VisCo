import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  width: 95%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  grid-template-areas:
    "title title"
    "image form"
    "image form";

  h1 {
    grid-area: title;
    text-align: center;
    align-self: center;
    letter-spacing: 3px;
    color: var(--green);
    font-family: "Exo 2", sans-serif;
    text-transform: uppercase;
  }

  form {
    grid-area: form;
    width: 90%;
    justify-self: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img`
    grid-area: image;
    width: 100%;
    box-shadow: 15px -16px var(--gold);
    align-self: center;
`;
