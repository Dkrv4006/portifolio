import styled from "styled-components"

export const Container = styled.div`
    padding: 16px;

    form{
        width: 50%;
        padding: 20px;
        background: ${props=> props.theme.colors.secondary};
        height: 80vh;
  
    }

    label{
        font-size: 30px;
        font-weight: 700;
        color: ${props=> props.theme.colors.text};
    }

    input{
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 10px;
        margin-top: 30px;
    }
    button{
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        margin-top: 30px;
        background: ${props=> props.theme.colors.quartenary};
    }
      
`