import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 5.5fr 0.6fr;
    grid-template-areas:
    'LF CT RT'
    ;
    position: relative;
    max-width: 1400px;

    &::before{
        content: '';
        position: fixed;
       
        top: 0;
        width: 100%;
        height: 15px;
        background:${props=> props.theme.colors.primary};
        z-index: 20;
    }
    &::after{
        content: '';
        position: fixed;
       
        bottom: 0;
        width: 100%;
        height: 15px;
        background:${props=> props.theme.colors.primary};
        z-index: 20;
    }
    
`

