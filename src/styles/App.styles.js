import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    display: grid;
    min-height: 100vh;
    grid-template-rows: 80px auto 70px;
    grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";

    @media screen and (max-width: 720px){
        grid-template-rows: 80px auto auto;
    }
`;