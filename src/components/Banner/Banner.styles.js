import styled from "styled-components";

export const Container = styled.div`
  grid-area: banner;
  width: 100%;
  height: auto;
  padding-top: 2rem;
  background-color: var(--snow);
  background-attachment: fixed;
  background-size: contain;
  display: grid;
  grid-template-areas: 
  "logo title"
  "wave wave";
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 720px){
    display: flex;
    flex-direction: column;
    height: 70vh;
    justify-content: space-between;
  }

`;

export const Logo = styled.img`
  grid-area: logo;
  width: 370px;
  align-self: center;
  justify-self: end;

  @media screen and (max-width: 720px){
    width: 300px;
  }
`

export const Wave = styled.img`
  grid-area: wave;
`
