
import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;
  

    background: ${props=> props.theme.colors.primary};
    

    h2{
        color: ${props=> props.theme.colors.quartenary};
        margin: 20px;
    }

    a{
        color: ${props=> props.theme.colors.quartenary};
        
        

        &:hover{
            filter: brightness(5);
        }
        i{
            font-size: 10px;
            margin: 4px;
        }
    }
    p{
        margin-bottom: 15px;
        color: ${props=> props.theme.colors.text};


        
    }
    hr{
        margin: 30px 10px;
        border: 1px solid ${props=> props.theme.colors.text};
    }

    .box{
        width: 100%;
        gap: 15px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
      
    }
    .lingue{
        flex: 1 1 250px;
        height:auto;

        padding: 0 10px 15px;
        background: ${props=> props.theme.colors.secondary};
    }


    
`
