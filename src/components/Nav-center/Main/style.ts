
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
            font-size: 15px;
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
        /* justify-content: space-between; */
      
    }
    .lingue{
        flex: 1 1 250px;
        height:auto;

        padding: 0 10px 15px;
        background: ${props=> props.theme.colors.secondary};
    }
    .foolde{
        width: 100%;
        height: 70px;
        background: ${props=> props.theme.colors.secondary};

        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 950px) {
        img{
            width: 30px;
            height: 30px;
        }

        .lingue{
          
          
          padding: 10px;
        }

        .education h2 {
          margin: 0 0 5px;
        }

        .lingue p{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .lingue:hover p {
            overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: unset;
          -webkit-box-orient: vertical;
        }
        
    }


   



    
`
