import styled from "styled-components";

export const Container = styled.body`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    width: 100%;
    height: 100vh;
`