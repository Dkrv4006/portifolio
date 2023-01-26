import styled from "styled-components"

export const Container = styled.div`
    
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
       
        font-size: 1rem;
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
      .span{
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
        padding: 20px 10px;
        min-height: 210px;
        max-height: auto;
        /* height: 210px; */
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

      @media screen and (max-width: 950px) {


        width: 93vw;
        padding: 25px 15px;

        .h3{
          font-size: 10px;
        }
        hr{

        margin: 20px 0;
      }
      .education{
        
        display: flex;
        flex-direction: column-reverse;
        align-items: center;

       
        
      }
      
        .right-edu h4 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .education:hover h4 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: unset;
          -webkit-box-orient: vertical;
        }

        .right-edu{
        text-align: center;
        flex: 60%;
      }
      
      
      }




`