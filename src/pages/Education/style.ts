import styled from "styled-components"

export const Container = styled.div`
    width: auto;
      padding: 25px 15px;


      a{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        color: ${props=> props.theme.colors.quartenary};
      }
      
      h1{
        margin: 20px;
        color: ${props=> props.theme.colors.quartenary};
      }
      h2{
        margin: 30px 0;
        color: ${props=> props.theme.colors.white};
      }


      h3{
        margin: 20px;
        color: ${props=> props.theme.colors.text};
      }
      h4{
        margin-top: 20px;
        color: ${props=> props.theme.colors.text};
      }
      h5{
        font-weight: 100;
        color: ${props=> props.theme.colors.white};
      }
      span{
        padding: 5px;
        border-radius: 5px;
        background: ${props=> props.theme.colors.quartenary};
        color: ${props=> props.theme.colors.secondary};
      }

      .container-edu{
        width: 100%;
        margin-top: 50px;
      }

      .education{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 15px;
        padding: 10px;
        height: 210px;
        background: ${props=> props.theme.colors.secondary};
      }

      .left-edu{
        height: 100%;
          flex:40%;

      } 
      .right-edu{
        text-align: left;
        flex: 60%;
      }




`