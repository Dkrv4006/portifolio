import styled from "styled-components"

export const Container = styled.div`
      grid-area:'LF';
      position: sticky;
      top: 0;
      left: 10px;
      padding-top: 230px;
      height: 100vh;

      @media screen and (max-width: 950px) {
           display: none;
           position: static;

           
  }
`