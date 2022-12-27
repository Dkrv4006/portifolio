import styled from "styled-components"

export const Container = styled.div`
      width: 100%;
      height: 260px;
      padding: 90PX 50px;
      background: ${props=> props.theme.colors.secondary};

      h1, h2{
        color: ${props=> props.theme.colors.white};
        margin: 5px;
      }

      span{
        color: ${props=> props.theme.colors.quartenary};
      }
     
`