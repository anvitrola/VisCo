import styled from "styled-components";

export const Btn = styled.button`
    padding: .5rem;
    border: none;
    border-radius: 3px;
    background-color: var(--gold);
    cursor: pointer;
    color: var(--green);
    transition: .5s all;
    width: 50%;
    align-self: flex-end;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 1.2rem;

    &:hover{
        background-color: var(--green);
        color: var(--gold);
    }
    
    &:disabled{
        cursor: not-allowed;
    }
`;
