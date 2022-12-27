import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 230px;
    background: ${props=> props.theme.colors.secondary};
    position: absolute;
    top: 0;

    h2{
        padding: 20px;
        color: ${props=> props.theme.colors.white};
    }
    .avata{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

      
`