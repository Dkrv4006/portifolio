import styled from "styled-components"

export const Container = styled.div`
      width: 100%;
      height: auto;
      padding: 20PX 50px;
      background: ${props=> props.theme.colors.secondary};

      h1{
        color: ${props=> props.theme.colors.white};
        font-size: min(2.5vw, 36px);
  
        margin: 5px;
      }
      button{
        margin-top:20px;
        font-size: 20px;
        background: ${props=> props.theme.colors.quartenary};
        padding: 10px 40px;
        border-radius: 50px;
        &:hover{
          filter: brightness(0.9);
        }
        
      }

      span{
        color: ${props=> props.theme.colors.quartenary};
      }

      .midia{
        display: none;
      }

      @media only screen and (max-width: 950px) {

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1{
        color: ${props=> props.theme.colors.white};
        font-size: min(150%, 100px);
  
        margin:0px;
      }
      button{
        margin-top:10px;
        font-size: 20px;
        background: ${props=> props.theme.colors.quartenary};
        padding: 5px 20px;
        border-radius: 50px;
        &:hover{
          filter: brightness(0.9);
        }
        
      }
      .midia{
      display: flex;
      justify-content: center;
    }

  }

    @media only screen and (max-width: 550px) {
      h1{
        color: ${props=> props.theme.colors.white};
        font-size: min(120%, 100px);
  
       
      }
    }
     
`
