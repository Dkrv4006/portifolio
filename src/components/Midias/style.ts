import styled from "styled-components"

export const Container = styled.div`
      
      .icons{
        width: 250px;
        display: flex;
        justify-content: space-evenly;
        padding: 0 10px;
        margin-top: 10px;

    i {
        font-size: 30px;
        color: ${props=> props.theme.colors.white};
    }
    
}
`