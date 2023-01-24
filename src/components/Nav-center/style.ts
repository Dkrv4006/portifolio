import styled from "styled-components"

export const Container = styled.div`
      grid-column: 2 / 3;
      height: auto;
      padding: 0 15px;
      text-align: center;
      background: ${props=> props.theme.colors.primary};


      @media only screen and (max-width: 950px) {
            grid-row: 1 /2;

      }
`