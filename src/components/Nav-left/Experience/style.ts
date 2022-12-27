import styled from "styled-components"

export const Container = styled.div`
      width: 100%;
      height: 100%;
      overflow: scroll;


      ::-webkit-scrollbar{
        display: none;
      }
      h1{
        color: ${props=> props.theme.colors.white};
      }
      h3{
        margin: 10px 5px;
      }


      .scroll{
        width: 100%;
        height: 1000px;
        text-align: center;
        background: ${props=> props.theme.colors.primary};
      }
      .language{
        padding: 10px;
      }

      .container{
        padding: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        color: ${props=> props.theme.colors.white};
      }

      .range {
        width: 230px;
        height: 15px;
        border-radius: 15px;

        -webkit-appearance: none;
        outline: none;
        overflow: hidden;
        box-shadow: inset 0 0 7px rgba(0, 0, 0, 1);
        background: #222;
    }

    .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--primary);
        cursor: pointer;
        border: 2px solid #333;
        box-shadow: -407px 0 0 400px ${props=> props.theme.colors.quartenary};
}

      
`