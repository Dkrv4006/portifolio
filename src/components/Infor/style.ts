import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;

    display: flex;
    justify-content: space-evenly;

    color: ${props=> props.theme.colors.white};

    span{
        font-weight: 600;
        color: ${props=> props.theme.colors.quartenary};
    }
      
`