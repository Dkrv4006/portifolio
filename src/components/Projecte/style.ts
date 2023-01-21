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
            filter: brightness(0.8);
            color: ${props=> props.theme.colors.quartenary};
        }
    }

    .btn{
        width: 100%;
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
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    
    
    
    
    
}
.test > a{
    opacity: 0;

    width: 80%;

    margin-top: 10px;
    border-radius: 10px;

    background-color: ${props=> props.theme.colors.primary};
}


.project:hover .test{
    height: 100%;
    transition: all .5s;

    
    background: ${props=> props.theme.colors.quartenary};
    
    h2, h4,a {
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