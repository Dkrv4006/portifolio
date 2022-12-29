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

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

      
`