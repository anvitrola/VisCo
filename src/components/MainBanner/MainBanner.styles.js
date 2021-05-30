import styled from "styled-components";

export const BannerArea = styled.main`
    grid-area: main;

    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "img textBox";
    grid-gap: 1rem;

    img{
        grid-area: img;
        height: 100%;
    }
`;