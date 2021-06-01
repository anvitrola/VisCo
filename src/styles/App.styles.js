import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    display: grid;
    min-height: 100vh;
    grid-template-rows: 80px auto 60px;
    grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";
`;