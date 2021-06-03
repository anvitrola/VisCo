import styled from "styled-components";

export const Container = styled.section`
  grid-area: main;
  justify-self: center;
  align-self: center;
  width: 95%;
  height: 90%;
  display: grid;
  padding: 3rem 3rem 5rem 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  grid-template-areas:
    "title title"
    "left link";
`;

export const LinkBox = styled.a`
    grid-area: link;
    display:flex;
    align-items: center;
    justify-content: center;

    img{
      width: 380px;
      box-shadow: -10px 10px var(--green-50);
    }
`