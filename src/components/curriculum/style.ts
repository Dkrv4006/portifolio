import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
   

    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: 20;
    
    button{
        width: 100%;
        height: 50px;
        padding: 10px 0;
        border-radius: 10px;
        font-size: 20px;
        background-color: ${props=> props.theme.colors.quartenary};

    }

    @media screen and (max-width: 950px) {
             position: static;
             z-index: 0;

             i{
                font-size: 20px;
                margin-left: 10px;
             }
    }
      
`