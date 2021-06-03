import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  padding-bottom: 5rem;
  grid-template-areas:
    "title title"
    "image form"
    "image form";

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
  box-shadow: -10px 10px var(--green-50);
  align-self: center;
`;
