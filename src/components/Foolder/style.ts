import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
        height: 70px;
        /* margin-bottom: 15px; */
        background: ${props=> props.theme.colors.primary};

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    

        @media screen and (max-width: 950px) {
             
        }
`
