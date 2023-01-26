import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
        height: 70px;
        margin-top: 10px;
        background: ${props=> props.theme.colors.secondary};

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        h3{
            color: ${props=> props.theme.colors.white} ;
        }
        span{
                color: ${props=> props.theme.colors.quartenary};
        }
    

        @media screen and (max-width: 950px) {
             
        }
`

