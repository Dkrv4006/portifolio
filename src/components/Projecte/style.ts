import styled from "styled-components"

export const Container = styled.div`
   
    grid-column: 2 / 3;
    height: auto;
   
    

    h1{
        
        color: ${props=> props.theme.colors.quartenary};
    }
    h2,    h4{
        opacity: 0;
        transition: opacity .5s;
        padding: 10px;
        color: ${props=> props.theme.colors.white};
    }
    p{
        color: ${props=> props.theme.colors.white};
        padding: 20px;
    }
    button{
        background: none;
        color: ${props=> props.theme.colors.text};
        font-size: 18px ;

        &:hover{
            color: ${props=> props.theme.colors.quartenary};
        }
    }



.conta{
    width: 100%;
 
    margin-top: 20px;
    gap:15px;
    display: flex;
    flex-wrap: wrap;

 

    > .project{
        height: 250px;
        flex: 1 1 250px;
        background: ${props=> props.theme.colors.secondary};
        
       
      
}
}
.test{
    width: 100%;
    height: 10%;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: height 0.5s;

    
    
    
    
}
.project:hover .test{
    height: 100%;
 

    
    background: ${props=> props.theme.colors.success};
    
    h2, h4 {
        transition: all 1.5s;
         opacity: 1;
      
    }

}

button{
    padding: 10px;
    margin-left: 10px;
}

.text{
    width: 100%;
    margin-bottom: 50px;
    padding: 20px;
}



    
      
`