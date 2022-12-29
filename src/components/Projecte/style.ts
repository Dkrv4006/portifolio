import styled from "styled-components"

export const Container = styled.div`
   
    width: 100%;
    height: auto;
    padding: 4px;

    h1{
        display: none;
        color: ${props=> props.theme.colors.quartenary};
    }
.test > p{
        display: none;
        margin-top: 15px;
        color: ${props=> props.theme.colors.white};
       
    }

.conta{
    width: 100%;
    height: auto;
    gap:15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > .project{
        height: 250px;
        width: 32%;
        background: ${props=> props.theme.colors.secondary};
        
       
      
}
}
.test{
    width: 100%;
    height: 10%;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: height .5s;
    
    
    
    
}
.project:hover .test{
    height: 100%;
    width: 100%;
    background: ${props=> props.theme.colors.quartenary};
    
    
}

button{
    padding: 10px;
    margin-left: 10px;
}



    
      
`