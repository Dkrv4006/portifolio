import styled from "styled-components"

export const Container = styled.div`
      grid-area: 'RT';
      
      height: 100vh;
      position: sticky;
      top: 0;
      right: 10px;

      background: ${props=> props.theme.colors.secondary};


      p{
            font-weight: 800;
            margin-bottom: 10px;
            color: ${props=> props.theme.colors.text}; 
      }
      button{
            background: transparent;
            margin-bottom: 20px;
      }
      .left{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
      }

      .link{
            padding: 10px;
            width: 100%;
            text-align: center;
      }
      .link p{
            opacity: 0;
            transition:  0.8s;
      }

      a{
            margin-top: 10px;
            color: ${props=> props.theme.colors.quartenary};
      }
      i{
            font-size: 30px;
            color: ${props=> props.theme.colors.quartenary};
      }

      .link:hover  p{
            opacity: 1;
            margin-bottom: 10px;
            transition:  0.5s;

            
      }
      .active{
            border-radius: 10px;
            background: ${props=> props.theme.colors.tertiary};

            p{
                  opacity: 1;
            }
      }

      @media only screen and (max-width: 950px) {
            grid-row: 2 / 3;
            grid-column: 1 / 3;
      
            width: 100%;
            height: 90px;

            position: sticky;
            bottom: 0;
            right: 0;
            background: ${props=> props.theme.colors.secondary};

      
      .left{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;
      }
      .link{
            padding: 10px;
            height: 100%;
            text-align: center;
      }
      button{
            display: block;
            background: transparent;
            margin-bottom: 0px;
            margin: 35px 20px 0 0;
      }
      a{
            margin-top: 0px;
            color: ${props=> props.theme.colors.quartenary};
      }
      i{
            font-size: 25px;
            color: ${props=> props.theme.colors.quartenary};
      }
}

`