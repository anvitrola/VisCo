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

`;

export const Logo = styled.img`
  grid-area: logo;
  width: 370px;
  align-self: center;
  justify-self: end;
`

export const Wave = styled.img`
  grid-area: wave;
`
